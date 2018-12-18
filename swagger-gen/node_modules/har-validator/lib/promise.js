'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validator = validator;
exports.default = har;
exports.cache = cache;
exports.cacheEntry = cacheEntry;
exports.content = content;
exports.cookie = cookie;
exports.creator = creator;
exports.entry = entry;
exports.log = log;
exports.page = page;
exports.pageTimings = pageTimings;
exports.postData = postData;
exports.record = record;
exports.request = request;
exports.response = response;
exports.timings = timings;

var _schemas = require('./schemas');

var schemas = _interopRequireWildcard(_schemas);

var _error = require('./error');

var _error2 = _interopRequireDefault(_error);

var _isMyJsonValid = require('is-my-json-valid');

var _isMyJsonValid2 = _interopRequireDefault(_isMyJsonValid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function validator(schema) {
  var data = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  return new Promise(function (resolve, reject) {
    // validator config
    var validate = (0, _isMyJsonValid2.default)(schema, {
      greedy: true,
      verbose: true,
      schemas: schemas
    });

    // execute is-my-json-valid
    validate(data);

    validate.errors ? reject(new _error2.default(validate.errors)) : resolve(data);
  });
}

function har(data) {
  return validator(schemas.har, data);
}

function cache(data) {
  return validator(schemas.cache, data);
}

function cacheEntry(data) {
  return validator(schemas.cacheEntry, data);
}

function content(data) {
  return validator(schemas.content, data);
}

function cookie(data) {
  return validator(schemas.cookie, data);
}

function creator(data) {
  return validator(schemas.creator, data);
}

function entry(data) {
  return validator(schemas.entry, data);
}

function log(data) {
  return validator(schemas.log, data);
}

function page(data) {
  return validator(schemas.page, data);
}

function pageTimings(data) {
  return validator(schemas.pageTimings, data);
}

function postData(data) {
  return validator(schemas.postData, data);
}

function record(data) {
  return validator(schemas.record, data);
}

function request(data) {
  return validator(schemas.request, data);
}

function response(data) {
  return validator(schemas.response, data);
}

function timings(data) {
  return validator(schemas.timings, data);
}