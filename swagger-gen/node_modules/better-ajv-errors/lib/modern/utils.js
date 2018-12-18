"use strict";

exports.__esModule = true;
exports.notUndefined = exports.concatAll = exports.getErrors = exports.getSiblings = exports.getChildren = exports.isEnumError = exports.isAnyOfError = exports.isRequiredError = void 0;

const eq = x => y => x === y;

const not = fn => x => !fn(x);

const isXError = x => error => error.keyword === x;

const isRequiredError = isXError('required');
exports.isRequiredError = isRequiredError;
const isAnyOfError = isXError('anyOf');
exports.isAnyOfError = isAnyOfError;
const isEnumError = isXError('enum');
exports.isEnumError = isEnumError;

const getChildren = node => node && Object.values(node.children) || [];

exports.getChildren = getChildren;

const getSiblings = parent => node => getChildren(parent).filter(not(eq(node)));

exports.getSiblings = getSiblings;

const getErrors = node => node && node.errors || [];

exports.getErrors = getErrors;

const concatAll = xs => ys => ys.reduce((zs, z) => zs.concat(z), xs);

exports.concatAll = concatAll;

const notUndefined = x => x !== undefined;

exports.notUndefined = notUndefined;