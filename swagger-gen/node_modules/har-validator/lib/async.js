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
  var cb = arguments[2];

  // default value
  var valid = false;

  // validator config
  var validate = (0, _isMyJsonValid2.default)(schema, {
    greedy: true,
    verbose: true,
    schemas: schemas
  });

  // execute is-my-json-valid
  valid = validate(data);

  // callback?
  if (typeof cb === 'function') {
    return cb(validate.errors ? new _error2.default(validate.errors) : null, valid);
  }

  return valid;
}

function har(data, cb) {
  return validator(schemas.har, data, cb);
}

function cache(data, cb) {
  return validator(schemas.cache, data, cb);
}

function cacheEntry(data, cb) {
  return validator(schemas.cacheEntry, data, cb);
}

function content(data, cb) {
  return validator(schemas.content, data, cb);
}

function cookie(data, cb) {
  return validator(schemas.cookie, data, cb);
}

function creator(data, cb) {
  return validator(schemas.creator, data, cb);
}

function entry(data, cb) {
  return validator(schemas.entry, data, cb);
}

function log(data, cb) {
  return validator(schemas.log, data, cb);
}

function page(data, cb) {
  return validator(schemas.page, data, cb);
}

function pageTimings(data, cb) {
  return validator(schemas.pageTimings, data, cb);
}

function postData(data, cb) {
  return validator(schemas.postData, data, cb);
}

function record(data, cb) {
  return validator(schemas.record, data, cb);
}

function request(data, cb) {
  return validator(schemas.request, data, cb);
}

function response(data, cb) {
  return validator(schemas.response, data, cb);
}

function timings(data, cb) {
  return validator(schemas.timings, data, cb);
}