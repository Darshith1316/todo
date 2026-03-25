// eslint.config.cjs
module.exports = [
  {
    files: ['*/.js'],
    ignores: ['node_modules/*', 'coverage/', 'dist/*'],

    languageOptions: {
      ecmaVersion: 'latest'
    },

    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'off',
      'eqeqeq': 'error',
      'curly': 'error',
      'semi': ['error', 'always'],
      'quotes': ['error', 'single'],
      'indent': ['error', 2]
    }
  }
];