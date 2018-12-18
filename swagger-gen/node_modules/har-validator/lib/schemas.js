'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.timings = exports.response = exports.request = exports.record = exports.postData = exports.pageTimings = exports.page = exports.log = exports.har = exports.entry = exports.creator = exports.cookie = exports.content = exports.cacheEntry = exports.cache = undefined;

var _cache = require('../schemas/cache.json');

var _cache2 = _interopRequireDefault(_cache);

var _cacheEntry = require('../schemas/cacheEntry.json');

var _cacheEntry2 = _interopRequireDefault(_cacheEntry);

var _content = require('../schemas/content.json');

var _content2 = _interopRequireDefault(_content);

var _cookie = require('../schemas/cookie.json');

var _cookie2 = _interopRequireDefault(_cookie);

var _creator = require('../schemas/creator.json');

var _creator2 = _interopRequireDefault(_creator);

var _entry = require('../schemas/entry.json');

var _entry2 = _interopRequireDefault(_entry);

var _har = require('../schemas/har.json');

var _har2 = _interopRequireDefault(_har);

var _log = require('../schemas/log.json');

var _log2 = _interopRequireDefault(_log);

var _page = require('../schemas/page.json');

var _page2 = _interopRequireDefault(_page);

var _pageTimings = require('../schemas/pageTimings.json');

var _pageTimings2 = _interopRequireDefault(_pageTimings);

var _postData = require('../schemas/postData.json');

var _postData2 = _interopRequireDefault(_postData);

var _record = require('../schemas/record.json');

var _record2 = _interopRequireDefault(_record);

var _request = require('../schemas/request.json');

var _request2 = _interopRequireDefault(_request);

var _response = require('../schemas/response.json');

var _response2 = _interopRequireDefault(_response);

var _timings = require('../schemas/timings.json');

var _timings2 = _interopRequireDefault(_timings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * copy external scheams internally
 * is-my-json-valid does not provide meaningful error messages for external schemas
 */

_cache2.default.properties.beforeRequest = _cacheEntry2.default;
_cache2.default.properties.afterRequest = _cacheEntry2.default;

_page2.default.properties.pageTimings = _pageTimings2.default;

_request2.default.properties.cookies.items = _cookie2.default;
_request2.default.properties.headers.items = _record2.default;
_request2.default.properties.queryString.items = _record2.default;
_request2.default.properties.postData = _postData2.default;

_response2.default.properties.cookies.items = _cookie2.default;
_response2.default.properties.headers.items = _record2.default;
_response2.default.properties.content = _content2.default;

_entry2.default.properties.request = _request2.default;
_entry2.default.properties.response = _response2.default;
_entry2.default.properties.cache = _cache2.default;
_entry2.default.properties.timings = _timings2.default;

_log2.default.properties.creator = _creator2.default;
_log2.default.properties.browser = _creator2.default;
_log2.default.properties.pages.items = _page2.default;
_log2.default.properties.entries.items = _entry2.default;

_har2.default.properties.log = _log2.default;

exports.cache = _cache2.default;
exports.cacheEntry = _cacheEntry2.default;
exports.content = _content2.default;
exports.cookie = _cookie2.default;
exports.creator = _creator2.default;
exports.entry = _entry2.default;
exports.har = _har2.default;
exports.log = _log2.default;
exports.page = _page2.default;
exports.pageTimings = _pageTimings2.default;
exports.postData = _postData2.default;
exports.record = _record2.default;
exports.request = _request2.default;
exports.response = _response2.default;
exports.timings = _timings2.default;