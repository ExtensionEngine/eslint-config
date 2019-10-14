'use strict';

/** @type {import('@types/eslint').Linter.Config} */
module.exports = {
  parserOptions: {
    sourceType: 'script'
  },
  overrides: [{
    files: ['client/**'],
    parserOptions: {
      parser: 'babel-eslint',
      sourceType: 'module'
    }
  }],
  extends: [
    'semistandard',
    './rules/base'
  ]
};
