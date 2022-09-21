module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import'],
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  ignorePatterns: ['**/dist/**'],
  rules: {
    '@typescript-eslint/no-empty-interface': [
      'error',
      {
        allowSingleExtends: true,
      },
    ],
    'import/order': 'error',
    'sort-imports': [
      'error',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
      },
    ],
    'comma-dangle': ['error', 'only-multiline'],
    '@typescript-eslint/typedef': [
      'error',
      {
        arrowParameter: false,
        arrayDestructuring: true,
        parameter: true,
        propertyDeclaration: true,
        memberVariableDeclaration: true,
        variableDeclarationIgnoreFunction: true,
        variableDeclaration: false,
      },
    ],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'default',
        format: ['UPPER_CASE', 'camelCase', 'PascalCase'],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'property',
        format: null, // disable for property names because of our foo__expanded convention for JSS
        // TODO: I think we can come up with a regex that ignores variables with __ in them
      },
      {
        selector: 'variable',
        format: null, // disable for variable names because of our foo__expanded convention for JSS
        // TODO: I think we can come up with a regex that ignores variables with __ in them
      },
    ],
    '@typescript-eslint/no-inferrable-types': 'off',
    'no-prototype-builtins': 'off',
    'no-fallthrough': 'off',
    'no-unexpected-multiline': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { args: 'none' }],
    '@typescript-eslint/no-explicit-any': 'off',
    'max-len': [
      'error',
      {
        code: 120,
        tabWidth: 4,
        ignoreComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    'eol-last': ['error', 'always'],
    'no-await-in-loop': ['error'],
    'require-atomic-updates': ['error'],
    complexity: ['error', { max: 20 }],
    'max-depth': ['error', { max: 4 }],
    'prefer-promise-reject-errors': ['error'],
    'no-throw-literal': ['error'],
    'no-promise-executor-return': ['error'],
    'no-sparse-arrays': ['error'],
    'no-unreachable-loop': ['error'],
    'no-unsafe-optional-chaining': ['error'],
    'no-lone-blocks': ['error'],
    'no-unmodified-loop-condition': ['error'],
    'no-useless-call': ['error'],
    'prefer-named-capture-group': ['off'],
    'no-shadow': ['off'],
    '@typescript-eslint/no-shadow': ['error'],
    'no-shadow-restricted-names': ['error'],
    'no-use-before-define': ['error'],
    'no-plusplus': ['error'],
    'guard-for-in': ['error'],
    'no-return-await': ['error'],
    indent: ['error', 2, { SwitchCase: 1 }],
    'arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],
    'padded-blocks': 'off',
    quotes: [2, 'single', { avoidEscape: true }],
  },
  overrides: [
    {
      files: ['*.styles.ts', 'webpack.*.cjs'],
      rules: {
        '@typescript-eslint/no-magic-numbers': ['off'],
      },
    },
  ],
};
