"use strict";

exports.__esModule = true;
exports.notUndefined = exports.concatAll = exports.getErrors = exports.getSiblings = exports.getChildren = exports.isEnumError = exports.isAnyOfError = exports.isRequiredError = void 0;

require("core-js/modules/es7.object.values");

var eq = function eq(x) {
  return function (y) {
    return x === y;
  };
};

var not = function not(fn) {
  return function (x) {
    return !fn(x);
  };
};

var isXError = function isXError(x) {
  return function (error) {
    return error.keyword === x;
  };
};

var isRequiredError = isXError('required');
exports.isRequiredError = isRequiredError;
var isAnyOfError = isXError('anyOf');
exports.isAnyOfError = isAnyOfError;
var isEnumError = isXError('enum');
exports.isEnumError = isEnumError;

var getChildren = function getChildren(node) {
  return node && Object.values(node.children) || [];
};

exports.getChildren = getChildren;

var getSiblings = function getSiblings(parent) {
  return function (node) {
    return getChildren(parent).filter(not(eq(node)));
  };
};

exports.getSiblings = getSiblings;

var getErrors = function getErrors(node) {
  return node && node.errors || [];
};

exports.getErrors = getErrors;

var concatAll = function concatAll(xs) {
  return function (ys) {
    return ys.reduce(function (zs, z) {
      return zs.concat(z);
    }, xs);
  };
};

exports.concatAll = concatAll;

var notUndefined = function notUndefined(x) {
  return x !== undefined;
};

exports.notUndefined = notUndefined;