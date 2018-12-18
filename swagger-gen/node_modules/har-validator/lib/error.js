'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = HARError;
function HARError(errors) {
  this.name = 'HARError';
  this.errors = errors;
}

HARError.prototype = Error.prototype;