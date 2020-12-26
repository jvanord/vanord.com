module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: 'vuetify',
  rules: {
    'vuetify': 'warn',
    'vue/max-attributes-per-line': [
      'error', {
        'singleline': 5,
        'multiline': {
          'max': 3,
          'allowFirstLine': true
        }
      }
    ],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
}
