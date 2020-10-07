'use strict';

/** @type {import('@types/eslint').Linter.Config} */
module.exports = {
  parserOptions: {
    sourceType: 'script'
  },
  plugins: ['@babel'],
  overrides: [{
    files: ['client/**'],
    parserOptions: {
      parser: '@babel/eslint-parser',
      sourceType: 'module'
    }
  }],
  extends: [
    'semistandard',
    './rules/base'
  ]
};
