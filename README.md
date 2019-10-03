<p align="center">
  <a href="#">
    <img width="150" src="logo.png">
  </a>
</p>

# @extensionengine/eslint-config

ExtensionEngine's eslint config

## Usage

### Install

Use `install-peerdeps`

```
npx install-peerdeps --dev @extensionengine/eslint-config
```
or the classic way:
```
npm install --save-dev eslint @extensionengine/eslint-config eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-standard eslint-plugin-vue eslint-config-standard eslint-config-semistandard
```

### Using `@extensionengine/eslint-config` in your project
In your local `.eslintrc.*` extend this configuration

```js
'use strict';

module.exports = {
  extends: '@extensionengine'
};
```

Check [ESlint documentation](https://eslint.org/docs/rules/) for rules explanation. 
