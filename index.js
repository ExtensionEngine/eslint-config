'use strict';

/** @type {import('@types/eslint').Linter.Config} */
module.exports = {
  parserOptions: {
    sourceType: 'script'
  },
  overrides: [{
    files: ['client/**'],
    parserOptions: {
      sourceType: 'module'
    }
  }],
  extends: [
    'semistandard',
    './rules/style.js',
    './rules/vue.js'
  ]
};
