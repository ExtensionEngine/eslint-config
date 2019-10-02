<p align="center">
  <a href="#">
    <img width="150" src="logo.png">
  </a>
</p>

# eslint-config-extensionengine
Extension Engine's eslint config

## Usage

### Install

Use `install-peerdeps`

```
npx install-peerdeps --dev eslint-config-extensionengine
```
or the classic way:
```
npm install --save-dev eslint-config-extensionengine eslint babel-eslint eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-standard eslint-plugin-vue eslint-config-semistandard eslint-config-standard
```

### Using eslint-config-extensionengine in your project
In your local `.eslintrc.*` extend this configuration

```js
module.exports = {
  extends: [
    "extensionengine"
  ]
```
