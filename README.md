# use-config-json

[![Build Status](https://github.com/ayanamitech/use-config-json/workflows/Github%20CI/badge.svg)](https://github.com/ayanamitech/use-config-json/actions)
[![NPM Package Version](https://img.shields.io/npm/v/use-config-json.svg)](https://npmjs.org/package/use-config-json)
[![NPM Package Downloads](https://img.shields.io/npm/dm/use-config-json.svg)](https://npmjs.org/package/use-config-json)
[![Known Vulnerabilities](https://snyk.io/test/github/ayanamitech/use-config-json/badge.svg?style=flat-square)](https://snyk.io/test/github/ayanamitech/use-config-json)
[![GitHub Views](https://img.shields.io/badge/dynamic/json?color=green&label=Views&query=uniques&url=https://github.com/ayanamitech/node-github-repo-stats/blob/main/data/ayanamitech/use-config-json/views.json?raw=True&logo=github)](https://github.com/ayanamitech/use-config-json)
[![GitHub Clones](https://img.shields.io/badge/dynamic/json?color=success&label=Clone&query=uniques&url=https://github.com/ayanamitech/node-github-repo-stats/blob/main/data/ayanamitech/use-config-json/clone.json?raw=True&logo=github)](https://github.com/ayanamitech/use-config-json)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](https://opensource.org/licenses/MIT)

Load config.json without hassle

## Install

```bash
$ npm i --save use-config-json
```

## Usage

```js
// CommonJS
const loadConfig = require('use-config-json');

/**
  JSON object, we will use this as a schema & fallback to default config value.

  Format: {
    [key: string]: "string or number"
  }

  const example = {
    "host": "127.0.0.1",
    "port": 3000
  }

  // This should be your default config file location to parse - if this value is undefined module will always try to load config.json
  const configFile = 'config.json'

  const config = loadConfig(example, 'config.json')
  console.log(config);
**/
const defaultConfig = {
  "host": "127.0.0.1",
  "port": 3000
}

const config = loadConfig(defaultConfig);
console.log(config);
```

```js
// ES6 Modules
import loadConfig from 'use-config-json';

const defaultConfig = {
  "host": "127.0.0.1",
  "port": 3000
}

const config = loadConfig(defaultConfig);
console.log(config);
```

```ts
// TypeScript
import * as loadConfig from 'use-config-json';

const defaultConfig = {
  "host": "127.0.0.1",
  "port": 3000
}

const config: object = loadConfig(defaultConfig);
console.log(config);
```
