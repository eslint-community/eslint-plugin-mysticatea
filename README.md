# @eslint-community/eslint-plugin-mysticatea

[![npm version](https://img.shields.io/npm/v/@eslint-community/eslint-plugin-mysticatea.svg)](https://www.npmjs.com/package/@eslint-community/eslint-plugin-mysticatea)
[![Downloads/month](https://img.shields.io/npm/dm/@eslint-community/eslint-plugin-mysticatea.svg)](http://www.npmtrends.com/@eslint-community/eslint-plugin-mysticatea)
[![Build Status](https://github.com/eslint-community/eslint-plugin-mysticatea/workflows/CI/badge.svg)](https://github.com/eslint-community/eslint-plugin-mysticatea/actions)
[![codecov](https://codecov.io/gh/eslint-community/eslint-plugin-mysticatea/branch/main/graph/badge.svg)](https://codecov.io/gh/eslint-community/eslint-plugin-mysticatea)
[![Dependency Status](https://david-dm.org/eslint-community/eslint-plugin-mysticatea.svg)](https://david-dm.org/eslint-community/eslint-plugin-mysticatea)

Additional ESLint rules and ESLint configurations for [@mysticatea](https://github.com/mysticatea).

## 💿 Installation

```
npm install --save-dev eslint @eslint-community/eslint-plugin-mysticatea
```

### Requirements

-   Node.js `^18.18.0 || ^20.9.0 || >=21.1.0`
-   ESLint `^6.6.0 || ^7.0.0 || ^8.0.0` or newer versions.

## 📖 Usage

Write in your ESLint configurations: http://eslint.org/docs/user-guide/configuring#using-the-configuration-from-a-plugin

### Configs

-   `plugin:@eslint-community/mysticatea/es2022` ... Basic configuration for ES2022.
-   `plugin:@eslint-community/mysticatea/es2021` ... Basic configuration for ES2021.
-   `plugin:@eslint-community/mysticatea/es2020` ... Basic configuration for ES2020.
-   `plugin:@eslint-community/mysticatea/es2019` ... Basic configuration for ES2019.
-   `plugin:@eslint-community/mysticatea/es2018` ... Basic configuration for ES2018.
-   `plugin:@eslint-community/mysticatea/es2017` ... Basic configuration for ES2017.
-   `plugin:@eslint-community/mysticatea/es2016` ... Basic configuration for ES2016.
-   `plugin:@eslint-community/mysticatea/es2015` ... Basic configuration for ES2015.
-   `plugin:@eslint-community/mysticatea/es5` ... Basic configuration for ES5.
-   `plugin:@eslint-community/mysticatea/+modules` ... Additional configuration for ES modules.
-   `plugin:@eslint-community/mysticatea/+browser` ... Additional configuration for browser environment.
-   `plugin:@eslint-community/mysticatea/+node` ... Additional configuration for Node.js environment.
-   `plugin:@eslint-community/mysticatea/+eslint-plugin` ... Additional configuration for ESLint plugins. This includes `plugin:@eslint-community/mysticatea/+node` setting.

#### Details

The main configurations `plugin:@eslint-community/mysticatea/es*` does:

-   detect bug-like code by ESLint rules.
-   enforce whitespace style by Prettier.
-   handle the `.ts` files as TypeScript then check by `typescript-eslint-parser` and `eslint-plugin-typescript`.
-   handle the `.vue` files as Vue.js SFC then check by `vue-eslint-parser` and `eslint-plugin-vue`.
-   handle the files in `test`/`tests` directory as `mocha`'s test code.
-   handle the files in `scripts` directory as Node.js environment.
-   handle the `.eslintrc.js` file as a Node.js script.
-   handle the `webpack.config.js` file as a Node.js script.
-   handle the `rollup.config.js` file as an ES module.

You can use combination of a main configuration and some additional configurations.
For examples:

##### For Node.js

```json
{
    "extends": [
        "plugin:@eslint-community/mysticatea/es2015",
        "plugin:@eslint-community/mysticatea/+node"
    ]
}
```

> It handles `.js` files as scripts and `.mjs` files as modules.

##### For Browsers

```json
{
    "extends": [
        "plugin:@eslint-community/mysticatea/es2015",
        "plugin:@eslint-community/mysticatea/+browser"
    ]
}
```

##### For Browsers with ES modules

```json
{
    "extends": [
        "plugin:@eslint-community/mysticatea/es2015",
        "plugin:@eslint-community/mysticatea/+modules",
        "plugin:@eslint-community/mysticatea/+browser"
    ]
}
```

##### For ESLint plugins

```json
{
    "extends": [
        "plugin:@eslint-community/mysticatea/es2015",
        "plugin:@eslint-community/mysticatea/+eslint-plugin"
    ]
}
```

### Rules

This plugin has some original rules and foreign rules.

#### Original rules

-   [@eslint-community/mysticatea/arrow-parens](docs/rules/arrow-parens.md) enforces parens of argument lists (excludes too redundant parens) (fixable).
-   [@eslint-community/mysticatea/block-scoped-var](docs/rules/block-scoped-var.md) handles variables which are declared by `var` declaration as block-scoped. It disallows redeclarations, uses from outside of the scope, shadowing.
-   [@eslint-community/mysticatea/no-instanceof-array](docs/rules/no-instanceof-array.md) disallows 'instanceof' for Array (fixable).
-   [@eslint-community/mysticatea/no-instanceof-wrapper](docs/rules/no-instanceof-wrapper.md) disallows 'instanceof' for wrapper objects (fixable).
-   [@eslint-community/mysticatea/no-literal-call](docs/rules/no-literal-call.md) disallows a call of a literal.
-   [@eslint-community/mysticatea/no-this-in-static](docs/rules/no-this-in-static.md) disallows `this`/`super` in static methods.
-   [@eslint-community/mysticatea/no-use-ignored-vars](docs/rules/no-use-ignored-vars.md) disallows a use of ignored variables.
-   [@eslint-community/mysticatea/no-useless-rest-spread](docs/rules/no-useless-rest-spread.md) disallows unnecessary rest/spread operators (fixable).
-   [@eslint-community/mysticatea/prefer-for-of](docs/rules/prefer-for-of.md) requires `for-of` statements instead of `Array#forEach` or something like (fixable).

#### Foreign rules

-   All `@eslint-community/mysticatea/eslint-comments/*` rules are imported from [eslint-plugin-eslint-comments](https://www.npmjs.com/package/eslint-plugin-eslint-comments).
-   All `@eslint-community/mysticatea/eslint-plugin/*` rules are imported from [eslint-plugin-eslint-plugin](https://www.npmjs.com/package/eslint-plugin-eslint-plugin).
-   All `@eslint-community/mysticatea/node/*` rules are imported from [eslint-plugin-node](https://www.npmjs.com/package/eslint-plugin-node).
-   All `@eslint-community/mysticatea/ts/*` rules are imported from [eslint-plugin-typescript](https://www.npmjs.com/package/eslint-plugin-typescript).
-   All `@eslint-community/mysticatea/vue/*` rules are imported from [eslint-plugin-vue](https://www.npmjs.com/package/eslint-plugin-vue).
-   The `@eslint-community/mysticatea/prettier` rule is imported from [eslint-plugin-prettier](https://www.npmjs.com/package/eslint-plugin-prettier).

> **Q:** Why don't you use those plugins directly?<br> > **A:** The combination with shareable configs and plugins has some problems because shareable configs were not designed to be used with plugins. @nzakas illustrated a way to use plugins as shareable configs together with other plugins in the discussion [eslint/eslint#3458](https://github.com/eslint/eslint/issues/3458#issuecomment-257161846). This is the way.

## 🚥 Semantic Versioning Policy

This plugin follows [semantic versioning](http://semver.org/) and [ESLint's Semantic Versioning Policy](https://github.com/eslint/eslint#semantic-versioning-policy).

## 📰 Changelog

-   [GitHub Releases](https://github.com/eslint-community/eslint-plugin-mysticatea/releases)

## ❤️ Contributing

Welcome contributing!

Please use GitHub's Issues/PRs.

### Development Tools

-   `npm test` runs tests and measures coverage.
-   `npm run clean` removes the coverage result of `npm test` command.
-   `npm run coverage` shows the coverage result of `npm test` command.
-   `npm run update` updates auto-generated files.
-   `npm run watch` runs tests and measures coverage when source code are changed.
