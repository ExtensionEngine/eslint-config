'use strict';

const isDev = process.env.NODE_ENV === 'development';

/** @type {import('@types/eslint').Linter.Config} */
module.exports = {
  rules: {
    strict: ['error', 'safe'],
    indent: ['error', 2, {
      SwitchCase: 1,
      // NOTE: Consistent indentation IS enforced;
      //       ESLint calculated indentation start IS NOT!
      // https://eslint.org/docs/rules/indent#memberexpression
      MemberExpression: 'off'
    }],
    'arrow-parens': ['error', 'as-needed'],
    // TODO: Remove this after all error reports get resolved!
    'prefer-const': 'off',
    'comma-dangle': ['warn', 'never'],
    'no-debugger': isDev ? 'warn' : 'error',
    'no-unreachable': isDev ? 'warn' : 'error',
    'space-before-function-paren': ['error', {
      anonymous: 'always',
      named: 'never'
    }],
    'sort-imports': ['error', {
      ignoreCase: true
    }]
  }
};
