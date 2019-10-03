'use strict';

const isDev = process.env.NODE_ENV === 'development';

/** @type {import('@types/eslint').Linter.Config} */
module.exports = {
  rules: {
    strict: ['error', 'safe'],
    indent: ['error', 2, {
      SwitchCase: 1,
      MemberExpression: 'off'
    }],
    'arrow-parens': ['error', 'as-needed'],
    'prefer-const': 'on',
    'comma-dangle': ['warn', 'never'],
    'no-debugger': isDev ? 'warn' : 'error',
    'no-unreachable': isDev ? 'warn' : 'error',
    semi: [2, 'always'],
    'no-extra-semi': 2,
    'space-before-function-paren': ['error', {
      anonymous: 'always',
      named: 'never'
    }],
    'sort-imports': ['error', {
      ignoreCase: true
    }]
  }
};
