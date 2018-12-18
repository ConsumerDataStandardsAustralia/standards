# better-ajv-errors

> JSON Schema validation for Human

[![npm](https://img.shields.io/npm/v/better-ajv-errors.svg?style=flat-square)](https://www.npmjs.com/package/better-ajv-errors)
[![CircleCI](https://img.shields.io/circleci/project/github/torifat/better-ajv-errors.svg?style=flat-square)](https://circleci.com/gh/torifat/better-ajv-errors)
[![Codecov](https://img.shields.io/codecov/c/github/torifat/better-ajv-errors.svg?style=flat-square)](https://codecov.io/gh/torifat/better-ajv-errors)
[![bitHound](https://img.shields.io/bithound/dependencies/github/torifat/better-ajv-errors.svg?style=flat-square)](https://www.bithound.io/github/torifat/better-ajv-errors)

Main goal of this library is to provide relevant error messages like the following:

<img width="539" alt="Enum Validation Error" src="https://user-images.githubusercontent.com/208544/36072188-6f559ed4-0f6f-11e8-9a23-0c0477ca7f58.png">

## Installation

```bash
$ yarn add better-ajv-errors
$ # Or
$ npm i better-ajv-errors
```

Also make sure that you installed [ajv](https://www.npmjs.com/package/ajv) package to validate data against JSON schemas.

## Usage

First, you need to validate your payload with `ajv`. If it's invalid then you can pass `validate.errors` object into `better-ajv-errors`.

```js
import Ajv from 'ajv';
import betterAjvErrors from 'better-ajv-errors';
// const Ajv = require('ajv');
// const betterAjvErrors = require('better-ajv-errors');

// You need to pass `jsonPointers: true`
const ajv = new Ajv({ jsonPointers: true });

// Load schema and data
const schema = ...;
const data = ...;

const validate = ajv.compile(schema);
const valid = validate(data);

if (!valid) {
  const output = betterAjvErrors(schema, data, validate.errors);
  console.log(output);
}
```

## API

### betterAjvErrors(schema, data, errors, [options])

Returns formatted validation error to **print** in `console`. See [`options.format`](#format) for further details.

#### schema

Type: `Object`

The JSON Schema you used for validation with `ajv`

#### data

Type: `Object`

The JSON payload you validate against using `ajv`

#### errors

Type: `Array`

Array of [ajv validation errors](https://github.com/epoberezkin/ajv#validation-errors)

#### options

Type: `Object`

##### format

Type: `string`  
Default: `cli`  
Values: `cli` `js`

Use default `cli` output format if you want to **print** beautiful validation errors like following:
<img width="539" alt="Enum Validation Error" src="https://user-images.githubusercontent.com/208544/36072188-6f559ed4-0f6f-11e8-9a23-0c0477ca7f58.png">

Or, use `js` if you are planning to use this with some API. Your output will look like following:

```javascript
[
  {
    start: { line: 6, column: 15, offset: 70 },
    end: { line: 6, column: 26, offset: 81 },
    error:
      '/content/0/type should be equal to one of the allowed values: panel, paragraph, ...',
    suggestion: 'Did you mean paragraph?'
  }
];
```

##### indent

Type: `number` `null`  
Default: `null`

If you have an unindented JSON payload and you want the error output indented
