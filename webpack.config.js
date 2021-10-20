const os = require('os');
const path = require('path');
const childProcess = require('child_process');

const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');
const { InjectManifest } = require('workbox-webpack-plugin');

// const environmentVars = require('./environment.json');

const commitHash = childProcess
  .execSync('git rev-parse --short HEAD')
  .toString()
  .trim();

const commitTag = childProcess
  .execSync('git tag --points-at HEAD')
  .toString()
  .trim();

const buildDate = Date.now();
const buildVersion = `${commitTag || commitHash}_${buildDate}`;

const createEnvironmentVariables = (config, testMode) =>
  Object.keys(config).reduce((prev, key) => ({ ...prev, [key]: JSON.stringify(config[key]) }), {
    CAPTCHA_ENABLED: !testMode,
    BUILD_YEAR: JSON.stringify(`${new Date().getFullYear()}`),
    BUILD_VERSION: JSON.stringify(`${buildVersion}`)
  });

module.exports = (env, argv = {}) => {
  const devMode = argv.mode === 'development';

  const CONFIG = {
    context: __dirname,
    entry: {
      main: ['@babel/polyfill', './src/index.tsx']
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: devMode ? 'js/[name].bundle.js' : 'js/bundle.[chunkhash].js',
      publicPath: '/'
    },
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          loader: 'eslint-loader'
        },
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'cache-loader'
            },
            {
              loader: 'thread-loader',
              options: {
                workers: os.cpus().length - 1
              }
            },
            {
              loader: 'babel-loader',
              options: {
                cacheDirectory: true
              }
            }
          ]
        },
        {
          test: /\.md$/,
          use: [
            {
              loader: 'raw-loader'
            }
          ]
        },
        {
          test: /\.(scss|css)$/,
          include: [path.resolve(__dirname, 'src/styles')],
          use: [
            {
              loader: 'style-loader'
            },
            {
              loader: 'css-loader',
              options: {
                sourceMap: devMode
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: devMode
              }
            }
          ]
        },
        {
          test: /\.scss$/,
          include: [path.resolve(__dirname, 'src/components')],
          use: [
            {
              loader: 'style-loader'
            },
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                localsConvention: 'camelCase',
                modules: {
                  localIdentName: env.production ? '[hash:base64:5]' : '[local]__[hash:base64:5]'
                },
                sourceMap: devMode
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: devMode,
                includePaths: [path.resolve(__dirname, './src')]
              }
            }
          ]
        },
        {
          test: /\.(eot|svg|ttf|woff|woff2)$/,
          loader: 'file-loader?name=fonts/[name].[ext]'
        },
        {
          test: /webfonts\.js/,
          use: [
            {
              loader: devMode ? 'style-loader' : MiniCssExtractPlugin.loader
            },
            {
              loader: 'css-loader',
              options: {
                sourceMap: devMode
              }
            },
            {
              loader: 'webfonts-loader'
            }
          ]
        }
      ]
    },
    plugins: [
      new BundleAnalyzerPlugin({
        analyzerMode: 'disabled'
      }),
      new CleanWebpackPlugin(['dist']),
      new ForkTsCheckerWebpackPlugin({
        checkSyntacticErrors: false,
        watch: ['./src']
      }),
      new HtmlWebpackPlugin({
        inject: false,
        hash: true,
        template: './src/index.html',
        filename: 'index.html',
        appVersion: buildVersion
      }),
      new StyleLintPlugin({
        context: './src',
        syntax: 'scss',
        emitErrors: false
      }),
      new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /en-us/),
      new InjectManifest({
        swSrc: './src/sw.ts',
        swDest: 'sw.js'
      })
    ],
    resolve: {
      extensions: ['.js', '.ts', '.tsx']
    }
  };

  if (devMode) {
    CONFIG.devtool = 'eval-source-map';
    CONFIG.devServer = {
      contentBase: path.resolve(__dirname, 'public'),
      historyApiFallback: true,
      host: '0.0.0.0',
      hot: true,
      port: 8080
    };
    CONFIG.plugins.push(new webpack.HotModuleReplacementPlugin());
  } else {
    CONFIG.optimization = {
      minimizer: [new TerserPlugin(), new OptimizeCSSAssetsPlugin({})]
    };
    CONFIG.plugins.push(
      new MiniCssExtractPlugin({
        filename: 'css/style.[contenthash].css'
      })
    );
    // CONFIG.plugins.push(new CopyWebpackPlugin(['public']));

    if (argv.compress) {
      CONFIG.plugins.push(
        new CompressionPlugin({
          filename: '[path][query]',
          algorithm: 'gzip',
          test: /\.(js|css)$/,
          compressionOptions: { level: 9 }
        })
      );
    }
  }

  return CONFIG;
};
