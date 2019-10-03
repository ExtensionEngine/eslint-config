<p align="center">
  <a href="#">
    <img width="150" src="logo.png">
  </a>
</p>

# eslint-config-extensionengine
ExtensionEngine's eslint config

## Usage

### Install

Use `install-peerdeps`

```
npx install-peerdeps --dev eslint-config-extensionengine
```
or the classic way:
```
npm install --save-dev eslint eslint-config-extensionengine eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-standard eslint-plugin-vue eslint-config-standard
```

### Using `eslint-config-extensionengine` in your project
In your local `.eslintrc.*` extend this configuration

```js
module.exports = {
  extends: "extensionengine"
}
```

Check [ESlint documentation](https://eslint.org/docs/rules/) for rules explanation. 
