#!/usr/bin/env node
'use strict';

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _package = require('../package.json');

var _package2 = _interopRequireDefault(_package);

var _promise = require('./promise');

var schemas = _interopRequireWildcard(_promise);

var _error = require('./error');

var _error2 = _interopRequireDefault(_error);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_commander2.default.version(_package2.default.version).usage('[options] <files...>').option('-s, --schema [name]', 'validate schema name (log, request, response, etc ...)').parse(process.argv);

if (!_commander2.default.args.length) {
  _commander2.default.help();
}

_commander2.default.args.map(function (fileName) {
  var file = _chalk2.default.yellow.italic(_path2.default.basename(fileName));

  new Promise(function (resolve, reject) {
    _fs2.default.readFile(fileName, function (err, data) {
      return err === null ? resolve(data) : reject(err);
    });
  }).then(JSON.parse).then(_commander2.default.schema && _commander2.default.schema !== 'har' ? schemas[_commander2.default.schema] : schemas.default).then(function (data) {
    return console.log('%s [%s] is valid', _chalk2.default.green('✓'), file);
  }).catch(function (err) {
    if (err instanceof SyntaxError) {
      return console.error('%s [%s] failed to read JSON: %s', _chalk2.default.red('✖'), file, _chalk2.default.red(err.message));
    }

    if (err instanceof _error2.default) {
      err.errors.forEach(function (details) {
        return console.error('%s [%s] failed validation: (%s: %s) %s', _chalk2.default.red('✖'), file, _chalk2.default.cyan.italic(details.field), _chalk2.default.magenta.italic(details.value), _chalk2.default.red(details.message));
      });
      return;
    }

    console.error('%s [%s] an unknown error has occured: %s', _chalk2.default.red('✖'), file, _chalk2.default.red(err.message));
  });
});