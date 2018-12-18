# openapi-sampler

[![Travis build status](http://img.shields.io/travis/APIs-guru/openapi-sampler.svg?style=flat)](https://travis-ci.org/APIs-guru/openapi-sampler) [![Code Climate](https://codeclimate.com/github/APIs-guru/openapi-sampler/badges/gpa.svg)](https://codeclimate.com/github/APIs-guru/openapi-sampler) [![Coverage Status](https://coveralls.io/repos/APIs-guru/openapi-sampler/badge.svg?branch=master&service=github)](https://coveralls.io/github/APIs-guru/openapi-sampler?branch=master) [![Dependency Status](https://david-dm.org/APIs-guru/openapi-sampler.svg)](https://david-dm.org/APIs-guru/openapi-sampler) [![devDependency Status](https://david-dm.org/APIs-guru/openapi-sampler/dev-status.svg)](https://david-dm.org/APIs-guru/openapi-sampler#info=devDependencies)

Tool for generation samples based on OpenAPI payload/response schema

## Features
- deterministic (given a particular input, will always produce the same output)
- Supports `allOf`
- Supports `additionalProperties`
- Uses `default`, `example` and `enum` where possible
- Full array support: supports `minItems`, and tuples (`items` as an array)
- Supports `minLength`, `maxLength`, `min`, `max`, `exclusiveMinimum`, `exclusiveMaximum`
- Supports the next `string` formats:
  - email
  - password
  - date-time
  - date
  - ipv4
  - ipv6
  - hostname
  - uri
- Infers schema type automatically following same rules as [json-schema-faker](https://www.npmjs.com/package/json-schema-faker#inferred-types)
- Support for `$ref` resolving

## Installation

Install using [npm](https://docs.npmjs.com/getting-started/what-is-npm)

    npm install openapi-sampler --save

Then require it in your code:

```js
var OpenAPISampler = require('openapi-sampler');
```

## Usage
#### `OpenAPISampler.sample(schema, [options], [spec])`
- **schema** (_required_) - `object`
A [OpenAPI Schema Object](http://swagger.io/specification/#schemaObject)
- **options** (_optional_) - `object`
Available options:
  - **skipNonRequired** - `boolean`
  Don't include non-required object properties not specified in [`required` property of the schema object](https://swagger.io/docs/specification/data-models/data-types/#required)
  - **skipReadOnly** - `boolean`
  Don't include `readOnly` object properties
  - **skipWriteOnly** - `boolean`
  Don't include `writeOnly` object properties
- **spec** - whole specification where the schema is taken from. Required only when schema may contain `$ref`. **spec** must not contain any external references

## Example
```js
const OpenAPISampler = require('.');
OpenAPISampler.sample({
  type: 'object',
  properties: {
    a: {type: 'integer', minimum: 10},
    b: {type: 'string', format: 'password', minLength: 10},
    c: {type: 'boolean', readOnly: true}
  }
}, {skipReadOnly: true});
// { a: 10, b: 'pa$$word_q' }
```
