const path = require('path');

const HtmlWebpackPlugin =  require('html-webpack-plugin');

module.exports  =(env, argv = {})=> {

  const CONFIG = {
    context: __dirname,
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'js/[name].bundle.js',
        publicPath: '/',
    },
    devServer: {
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader'
            },
            {
                test: /\.css?$/,
                use: ['styles-loader','css-loader']
            },
            {
                test: /\.(png|jpg)?$/,
                use: 'file-loader?name=./images[name].[ext]'
            }
        ]
    },
      
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html' )
        }
    )]

}

return CONFIG
}