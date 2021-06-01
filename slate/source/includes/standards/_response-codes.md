## HTTP Response Codes

The handling and usage of HTTP response codes for the standards will be according to the following table.

Situation | HTTP Status | Notes | POST | GET | DELETE
----------|-------------|-------|------|-----|-------
Query completed successfully | 200 OK | | Yes | Yes | No
Normal execution. The request has succeeded. | 201 Created | The operation results in the creation of a new resource. | Yes | No | No
Delete operation completed successfully | 204 No Content | | No | No | Yes
The response is not modified since last call | 304 Not Modified | May be returned if standard caching headers such as ETag or If-modified-since are utilised | Yes | Yes | No
Request has malformed, missing or non-compliant JSON body or URL parameters | 400 Bad Request | The requested operation will not be carried out. | Yes | Yes | Yes
Authorization header missing or invalid token | 401 Unauthorized | The operation was refused access. Re-authenticating may result in an appropriate token that may be used. | Yes | Yes | Yes
Token has incorrect scope or a security policy was violated. | 403 Forbidden | The operation was refused access. Re-authenticating is unlikely to remediate the situation. It is expected that this error will result in an [error payload](#error_payload) | Yes | Yes | Yes
The resource matching the request URI is not known or is unable to be processed due to business logic specific to the resource being requested | 404 Not Found | No indication is given of whether the condition is temporary or permanent. This response code MUST NOT be used for resources presented in the body of the request. | Yes | Yes | Yes
The consumer tried to access the resource with a method that is not supported. | 405 Method Not Allowed |  | Yes | Yes | Yes
The request contained an Accept header other than permitted media types, a character set other than UTF-8 or a version that was not supported | 406 Not Acceptable |  | Yes | Yes | Yes
The operation was refused because the payload is in a format not supported by this method on the target resource. | 415 Unsupported Media Type |  | Yes | No | No
The request was well formed but was unable to be processed due to business logic specific to the request | 422 Unprocessable Entity | If applicable to the HTTP method it is expected that this error will result in an [error payload](#error_payload) | Yes | Yes | No
The operation was refused as too many requests have been made within a certain timeframe. | 429 Too Many Requests | Throttling is a NFR. The data holder should include a Retry-After header in the response indicating how long the data consumer must wait before retrying the operation. | Yes | Yes | Yes
Something went wrong on the API gateway or micro-service | 500 Internal Server Error | The operation failed. | Yes | Yes | Yes
Service is currently unavailable | 503 Service Unavailable | | Yes | Yes | Yes
The server was unable to respond in a timely manner | 504 Gateway Timeout | Returned if a timeout has occurred but a resend of the original request is viable (otherwise use 500 instead) | Yes | Yes | Yes
