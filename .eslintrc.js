module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {}
  },
  ignorePatterns: [],
  settings: {},
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'eslint-config-async'
  ],
  rules: {
    'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1 }],
    'no-unused-vars': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'no-undef': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true
      }
    ],
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        groups: [
          ['builtin'],
          ['external'],
          ['parent', 'internal', 'sibling', 'index', 'unknown']
        ]
      }
    ]
  },
  env: {
    jest: true
  },
  plugins: ['eslint-plugin-import', 'eslint-plugin-node']
};
