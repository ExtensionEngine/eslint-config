'use strict';

const isProduction = process.env.NODE_ENV === 'production';

/** @type {import('@types/eslint').Linter.Config} */
module.exports = {
  rules: {
    strict: ['error', 'safe'],
    indent: ['error', 2, {
      SwitchCase: 1,
      MemberExpression: 'off'
    }],
    'arrow-parens': ['error', 'as-needed'],
    'no-debugger': isProduction ? 'error' : 'warn',
    'no-unreachable': isProduction ? 'error' : 'warn',
    'space-before-function-paren': ['error', {
      anonymous: 'always',
      named: 'never'
    }],
    'sort-imports': ['error', {
      ignoreCase: true
    }]
  }
};
