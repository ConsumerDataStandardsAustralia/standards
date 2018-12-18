import cache from '../schemas/cache.json'
import cacheEntry from '../schemas/cacheEntry.json'
import content from '../schemas/content.json'
import cookie from '../schemas/cookie.json'
import creator from '../schemas/creator.json'
import entry from '../schemas/entry.json'
import har from '../schemas/har.json'
import log from '../schemas/log.json'
import page from '../schemas/page.json'
import pageTimings from '../schemas/pageTimings.json'
import postData from '../schemas/postData.json'
import record from '../schemas/record.json'
import request from '../schemas/request.json'
import response from '../schemas/response.json'
import timings from '../schemas/timings.json'

/*
 * copy external scheams internally
 * is-my-json-valid does not provide meaningful error messages for external schemas
 */

cache.properties.beforeRequest = cacheEntry
cache.properties.afterRequest = cacheEntry

page.properties.pageTimings = pageTimings

request.properties.cookies.items = cookie
request.properties.headers.items = record
request.properties.queryString.items = record
request.properties.postData = postData

response.properties.cookies.items = cookie
response.properties.headers.items = record
response.properties.content = content

entry.properties.request = request
entry.properties.response = response
entry.properties.cache = cache
entry.properties.timings = timings

log.properties.creator = creator
log.properties.browser = creator
log.properties.pages.items = page
log.properties.entries.items = entry

har.properties.log = log

export { cache }
export { cacheEntry }
export { content }
export { cookie }
export { creator }
export { entry }
export { har }
export { log }
export { page }
export { pageTimings }
export { postData }
export { record }
export { request }
export { response }
export { timings }
