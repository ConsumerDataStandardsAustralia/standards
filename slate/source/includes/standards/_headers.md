## HTTP Headers

Supported HTTP headers, and their usage, for the standards are as laid out in the following sections.

### Request Headers
>A sample set of headers requesting version 3 to 5:  
`Content-Type = application/json`  
`Accept = application/json`  
`x-v = 5`  
`x-min-v = 3`  
`x-fapi-interaction-id = 6ba7b814-9dad-11d1-80b4-00c04fd430c8`


Header Field | Description
--------------|-------------
**Content-Type** | Standard HTTP Header. Represents the format of the payload provided in the request. Must be set to `application/json`.
**Accept** | Standard HTTP Header. Specify the Content-Type that is required from the Server.<br/>If specified, must be set to `application/json` unless otherwise specified in the resource end point standard.<br/>If set to an unacceptable value the provider must respond with a 406 Not Acceptable. If not specified, default is `application/json`.
**x-v** | Version of the API end point requested by the client. Must be set to a positive integer.<br/>If the version(s) requested is not supported then the provider should respond with a `406 Not Acceptable`.
**x-min-v** |  Minimum version of the API end point requested by the client. Must be set to a positive integer if provided. The provider should respond with the highest supported version between `x-min-v` and `x-v`.<br/>If all versions requested are not supported then the provider should respond with a `406 Not Acceptable`.
**x-&lt;PID&gt;-v** | A provider specific version of extension fields. Should not be used in conjunction with `x-min-v`.
**x-fapi-auth-date** | The time when the customer last logged in to the data recipient
**x-fapi-customer-ip-address** | The customer's original IP address if the customer is currently logged in to the data recipient.  The presence of this header indicates that the API is being called in a customer present context
**x-fapi-interaction-id** | An [RFC4122](https://tools.ietf.org/html/rfc4122) UID used as a correlation id.  If provided, the data provider must "play back" this value in the x-fapi-interaction-id response header.

### Response headers
Header Field | Description | Mandatory?
-------------|-------------|-----------
**Content-Type** | Standard HTTP Header. Represents the format of the payload returned in the response.<br/>Must be `application/json` unless otherwise specified in the resource end point standard. | Mandatory
**Retry-After** | Header indicating the time (in seconds) that the client should wait before retrying an operation. The provider should include this header along with responses with the HTTP status code of `429 Too many requests`. | Optional
**x-v** | The version of the API end point that the provider has responded with. | Mandatory
**x-fapi-interaction-id** | An [RFC4122](https://tools.ietf.org/html/rfc4122) UID used as a correlation id. The data provider must set the response header x-fapi-interaction-id to the value received from the corresponding fapi client request header or to a new RFC4122 UUID value if the request header was not provided to track the interaction. | Mandatory

### Additional Headers

Generally understood headers used in HTTP transactions to provide caching guidance and the use of the compression are not specified but are considered acceptable. It is at the discretion of the data provider if these headers are used for a specific implementation. Data providers should not require these headers for successful API access, however.
