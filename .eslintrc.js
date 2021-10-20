module.exports = {
    extends: [
      'plugin:jest-dom/recommended',
      'airbnb',
      'plugin:import/typescript',
      'prettier',
      'prettier/@typescript-eslint',
      'prettier/react'
    ],
    plugins: ['@typescript-eslint', 'react', 'jsx-a11y', 'import', 'react-hooks'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true
      },
      warnOnUnsupportedTypeScriptVersion: false
    },
    env: {
      browser: true,
      commonjs: true,
      es6: true,
      jest: true,
      jquery: true
    },
    rules: {
      // Checked by Typescript - ts(6133)
      'no-unused-vars': 'off',
      // Checked by Typescript - ts(2378)
      'getter-return': 'off',
      // Checked by Typescript - ts(2300)
      'no-dupe-args': 'off',
      // Checked by Typescript - ts(1117)
      'no-dupe-keys': 'off',
      // Checked by Typescript - ts(7027)
      'no-unreachable': 'off',
      // Checked by Typescript - ts(2367)
      'valid-typeof': 'off',
      // Checked by Typescript - ts(2588)
      'no-const-assign': 'off',
      // Checked by Typescript - ts(2588)
      'no-new-symbol': 'off',
      // Checked by Typescript - ts(2376)
      'no-this-before-super': 'off',
      // Checked by Typescript - ts(2307)
      'import/no-unresolved': 'off',
      // Checked by Typescript - ts(2305)
      'import/named': 'off',
      // Handled by Typescript - ts(2339)  (Seems to be not working as well)
      'import/no-named-as-default-member': 'off',
      // This is checked by Typescript using the option `strictNullChecks`.
      'no-undef': 'off',

      // eslint-config-airbnb-base/rules/style.js

      // require camel case names
      // https://eslint.org/docs/rules/camelcase
      camelcase: ['off', { ignoreDestructuring: false }],

      // TODO: Remove this. Overriding for now
      // require or disallow an empty line between class members
      // https://eslint.org/docs/rules/lines-between-class-members
      'lines-between-class-members': ['off', 'always', { exceptAfterSingleLine: false }],

      // eslint-config-airbnb-base/rules/imports.js

      // Require modules with a single export to use a default export
      // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
      'import/prefer-default-export': 'off',

      // Forbid the use of extraneous packages
      // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
      // paths are treated both as absolute paths, and relative to process.cwd()
      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: [
            '**/__tests__/**', // jest pattern
            '**/__mocks__/**', // jest pattern
            '**/*.test.*', // test files pattern
            '**/jest-setup.js', // jest setup
            '**/jest.setupAfterEnv.js', // jest setup
            '**/jest.config.js', // jest config
            '**/webpack.config.js', // webpack config,
            '**/webpack-about-us.config.js', // webpack config,
            '**/config/**', //
            '**/api/**', // mock api
            'src/helpers/testHelpers.tsx', // test helpers
            'src/helpers/TestProviders.tsx' // test helper
          ]
        }
      ],

      // TODO: Remove this. Overriding for now
      // do not allow a default import name to match a named export
      // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default.md
      'import/no-named-as-default': 'off',

      // TODO: Remove this. Overriding for now
      // Prevent importing the default as if it were named
      // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-default.md
      'import/no-named-default': 'off',

      // TODO: Remove this. Overriding for now
      // Forbid cyclical dependencies between modules
      // https://github.com/benmosher/eslint-plugin-import/blob/d81f48a2506182738409805f5272eff4d77c9348/docs/rules/no-cycle.md
      'import/no-cycle': ['off', { maxDepth: Infinity }],

      // eslint-config-airbnb/rules/react.js

      // Prevent usage of the return value of React.render. Turning this off, cost/benefit ratio for this rule isn't worth much
      // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-render-return-value.md
      'react/no-render-return-value': 'off',

      // Prevent missing props validation in a React component definition
      // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
      'react/prop-types': 'off',

      // only .jsx files may have JSX
      // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
      'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],

      // TODO: Remove this. Overriding for now
      // Enforce consistent usage of destructuring assignment of props, state, and context
      // https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/destructuring-assignment.md
      'react/destructuring-assignment': ['off', 'always'],

      // TODO: Remove this. Overriding for now
      // Enforce component methods order
      // https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/sort-comp.md
      'react/sort-comp': [
        'off',
        {
          order: [
            'static-methods',
            'instance-variables',
            'lifecycle',
            '/^on.+$/',
            'getters',
            'setters',
            '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
            'instance-methods',
            'everything-else',
            'rendering'
          ],
          groups: {
            lifecycle: [
              'displayName',
              'propTypes',
              'contextTypes',
              'childContextTypes',
              'mixins',
              'statics',
              'defaultProps',
              'constructor',
              'getDefaultProps',
              'getInitialState',
              'state',
              'getChildContext',
              'componentWillMount',
              'componentDidMount',
              'componentWillReceiveProps',
              'shouldComponentUpdate',
              'componentWillUpdate',
              'componentDidUpdate',
              'componentWillUnmount'
            ],
            rendering: ['/^render.+$/', 'render']
          }
        }
      ],

      // TODO: Remove this. Overriding for now
      // Prevent using this.state within a this.setState
      // https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/no-access-state-in-setstate.md
      'react/no-access-state-in-setstate': 'off',

      // TODO: Remove this. Overriding for now
      // Prevent usage of button elements without an explicit type attribute
      // https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/button-has-type.md
      'react/button-has-type': [
        'off',
        {
          button: true,
          submit: true,
          reset: false
        }
      ],

      // require that JSX labels use "htmlFor"
      // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-for.md
      'jsx-a11y/label-has-for': [
        'error',
        {
          required: {
            every: ['nesting', 'id']
          },
          allowChildren: true
        }
      ],

      // Additional rules
      // specify the maximum cyclomatic complexity allowed in a program
      complexity: ['off', 20],

      // specify curly brace conventions for all control statements
      curly: ['error', 'all'],

      // Prefer use of an object spread over Object.assign
      // https://eslint.org/docs/rules/prefer-object-spread
      'prefer-object-spread': 'error',

      // disallow using an async function as a Promise executor
      // https://eslint.org/docs/rules/no-async-promise-executor
      // TODO: Remove. This will be turned-on on airbnb-base's next semver-major
      'no-async-promise-executor': 'error',

      // Disallow assignments that can lead to race conditions due to usage of await or yield
      // https://eslint.org/docs/rules/require-atomic-updates
      // TODO: Remove. This will be turned-on on airbnb-base's next semver-major
      'require-atomic-updates': 'error',

      // disallow dangling underscores in identifiers
      'no-underscore-dangle': [
        'error',
        {
          allow: ['_error', '__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'],
          allowAfterThis: false,
          allowAfterSuper: false,
          enforceInMethodNames: false
        }
      ],

      // Validate import order/groupings
      // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          'newlines-between': 'always'
        }
      ],

      // Validate JSX has key prop when in array or iterator
      // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-key.md
      'react/jsx-key': 'error',

      // TODO: Enforce this
      // Enforce event handler naming conventions in JSX
      // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md
      'react/jsx-handler-names': [
        'off',
        {
          eventHandlerPrefix: 'handle',
          eventHandlerPropPrefix: 'on'
        }
      ],

      // Prevent usage of setState in componentDidMount
      // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-mount-set-state.md
      'react/no-did-mount-set-state': 'error',

      // TODO: Enforce this
      // Prevent direct mutation of this.state
      // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md
      'react/no-direct-mutation-state': 'warn',

      // TODO: Enforce this
      // Prevent usage of unwrapped JSX strings
      // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-literals.md
      'react/jsx-no-literals': ['off'],

      // TODO: Enforce this
      // Enforces consistent naming for boolean props
      // https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/boolean-prop-naming.md
      'react/boolean-prop-naming': [
        'off',
        {
          propTypeNames: ['bool', 'mutuallyExclusiveTrueProps'],
          rule: '^(is|has)[A-Z]([A-Za-z0-9]?)+',
          message: ''
        }
      ],
      'react-hooks/exhaustive-deps': 'warn'
    },
    overrides: [
      {
        files: ['**/*.test.ts?(x)'],
        rules: {
          // Turning this off for tests
          'prefer-promise-reject-errors': ['off', { allowEmptyReject: true }]
        }
      },
      {
        files: ['**/*.d.ts'],
        rules: {
          // Turning this off for type definitions
          'react/prefer-stateless-function': 'off',
          'react/no-multi-comp': 'off',
          '@typescript-eslint/no-explicit-any': 'off'
        }
      },
      {
        files: ['**/helpers/**', '**/helpers.ts', '**/__mocks__/**'],
        rules: {
          // Turning this off for helpers and mocks
          '@typescript-eslint/no-explicit-any': 'off'
        }
      }
    ],
    settings: {
      'import/resolver': {
        typescript: {}
      },
      react: {
        version: 'detect'
      }
    }
  };
