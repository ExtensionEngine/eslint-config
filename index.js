'use strict';

module.exports = {
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  // https://github.com/Flet/eslint-config-semistandard
  extends: [
    'semistandard',
    './rules/style.js',
    './rules/vue.js'
  ]
};
