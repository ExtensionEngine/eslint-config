'use strict';

/** @type {import('@types/eslint').Linter.Config} */
module.exports = {
  extends: 'plugin:vue/recommended',
  plugins: ['vue'],
  rules: {
    'vue/html-self-closing': ['error', {
      html: {
        void: 'never',
        normal: 'never',
        component: 'always'
      },
      svg: 'never',
      math: 'never'
    }],
    'vue/html-closing-bracket-newline': ['error', {
      singleline: 'never',
      multiline: 'never'
    }],
    'vue/singleline-html-element-content-newline': 'off',
    'vue/max-attributes-per-line': ['error', {
      singleline: 5,
      multiline: 4
    }],
    'vue/name-property-casing': ['error', 'kebab-case'],
    'vue/attributes-order': ['error', {
      order: [
        'DEFINITION',
        'LIST_RENDERING',
        'CONDITIONALS',
        'RENDER_MODIFIERS',
        'UNIQUE',
        'TWO_WAY_BINDING',
        'OTHER_DIRECTIVES',
        'EVENTS',
        'GLOBAL',
        'OTHER_ATTR',
        'CONTENT'
      ]
    }],
    'vue/order-in-components': ['error', {
      order: [
        'el',
        'name',
        ['template', 'render', 'renderError'],
        ['parent', 'functional', 'delimiters', 'comments'],
        'extends',
        'mixins',
        'inheritAttrs',
        'model',
        ['props', 'propsData'],
        'data',
        'computed',
        'methods',
        'watch',
        'LIFECYCLE_HOOKS',
        ['directives', 'filters'],
        'components'
      ]
    }]
  }
};
