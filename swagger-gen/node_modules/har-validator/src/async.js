import * as schemas from './schemas'
import HARError from './error'
import JSONValidator from 'is-my-json-valid'

export function validator (schema, data = {}, cb) {
  // default value
  let valid = false

  // validator config
  let validate = JSONValidator(schema, {
    greedy: true,
    verbose: true,
    schemas: schemas
  })

  // execute is-my-json-valid
  valid = validate(data)

  // callback?
  if (typeof cb === 'function') {
    return cb(validate.errors ? new HARError(validate.errors) : null, valid)
  }

  return valid
}

export default function har (data, cb) {
  return validator(schemas.har, data, cb)
}

export function cache (data, cb) {
  return validator(schemas.cache, data, cb)
}

export function cacheEntry (data, cb) {
  return validator(schemas.cacheEntry, data, cb)
}

export function content (data, cb) {
  return validator(schemas.content, data, cb)
}

export function cookie (data, cb) {
  return validator(schemas.cookie, data, cb)
}

export function creator (data, cb) {
  return validator(schemas.creator, data, cb)
}

export function entry (data, cb) {
  return validator(schemas.entry, data, cb)
}

export function log (data, cb) {
  return validator(schemas.log, data, cb)
}

export function page (data, cb) {
  return validator(schemas.page, data, cb)
}

export function pageTimings (data, cb) {
  return validator(schemas.pageTimings, data, cb)
}

export function postData (data, cb) {
  return validator(schemas.postData, data, cb)
}

export function record (data, cb) {
  return validator(schemas.record, data, cb)
}

export function request (data, cb) {
  return validator(schemas.request, data, cb)
}

export function response (data, cb) {
  return validator(schemas.response, data, cb)
}

export function timings (data, cb) {
  return validator(schemas.timings, data, cb)
}
