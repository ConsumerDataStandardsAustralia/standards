## HTTP Headers

Supported HTTP headers, and their usage, for the standards are as laid out in the following sections.

### Request Headers
>A sample set of headers requesting version 3 to 5: 

```
Content-Type: application/json;charset=UTF-8
Accept: application/json;charset=UTF-8
x-v: 5
x-min-v: 3
x-fapi-interaction-id: 6ba7b814-9dad-11d1-80b4-00c04fd430c8
x-fapi-auth-date: Thu, 16 Jan 2020 16:50:15 GMT
x-fapi-customer-ip-address: 2001:0db8:85a3:0000:0000:8a2e:0370:7334
x-cds-client-headers: TW96aWxsYS81LjAgKFgxMTsgTGludXggeDg2XzY0KSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWUvNzkuMC4zOTQ1Ljg4IFNhZmFyaS81MzcuMzY=
```

>A Data Holder must be able to process Content-Type headers in accordance with [RFC7231]. The following would be valid: 

```
Content-Type: application/json;charset=UTF-8
Content-Type: application/json
Content-Type: AppliCAtion/JSon;Charset=uTf-8
```


>A Data Holder must be able to process Accept headers in accordance with [RFC7231]. The following would be valid: 

```
Accept: */*
Accept: application/json;charset=UTF-8
Accept: application/json
Accept: AppliCAtion/JSon;Charset=uTf-8
```

Header Field | Description | Mandatory?
-------------|-------------|-----------
**Content-Type** | Standard HTTP Header. Represents the format of the payload provided in the request. The media type must be set to `application/json`. Mandatory for PUT and POST calls.| Conditional
**Accept** | If specified, the media type must be set to `application/json`, unless otherwise specified in the resource endpoint standard. <br/><br/>If set to an unacceptable value the holder must respond with a 406 Not Acceptable. If not specified, or a wildcard (`*/*`) is provided, the default media type is `application/json`.| Optional
**x-v** | Version of the API endpoint requested by the client. Must be set to a positive integer. The holder should respond with the highest supported version between _x-min-v_ and _x-v_. If the value of _x-min-v_ is equal to or higher than the value of _x-v_ then the _x-min-v_ header should be treated as absent. <br/>If all versions requested are not supported then the holder must respond with a `406 Not Acceptable`. | Mandatory
**x-min-v** | Minimum version of the API endpoint requested by the client. Must be set to a positive integer if provided. The holder should respond with the highest supported version between _x-min-v_ and _x-v_. If the value of _x-min-v_ is equal to or higher than the value of _x-v_ then the _x-min-v_ header should be treated as absent. <br/>If all versions requested are not supported then the holder must respond with a `406 Not Acceptable`. | Optional
**x-&lt;HID&gt;-v** | A holder specific version of extension fields. Should not be used in conjunction with _x-min-v_. | Optional
**x-fapi-interaction-id** | An optional **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder must "play back" this value in the _x-fapi-interaction-id_ response header. Not required for unauthenticated calls.| Optional
**x-fapi-auth-date** | The time when the customer last logged in to the Data Recipient Software Product as described in **[[FAPI-1.0-Baseline]](#nref-FAPI-1-0-Baseline)**. Required for all resource calls (customer present and unattended). Not required for unauthenticated calls. | Conditional
<span style="white-space: nowrap;">**x-fapi-customer-ip-address**</span> | The customer's original IP address if the customer is currently logged in to the Data Recipient Software Product. The presence of this header indicates that the API is being called in a customer present context. Not to be included for unauthenticated calls. | Conditional
**x-cds-client-headers** | The customer's original standard http headers [Base64](#common-field-types) encoded, including the original User-Agent header, if the customer is currently logged in to the Data Recipient Software Product. Mandatory for customer present calls. Not required for unattended or unauthenticated calls.<br/>This header is not required to include:<br/><ul><li>Headers containing security information</li><li>Custom or proprietary headers used to facilitate the client application</li></ul>| Conditional

### Response headers
Header Field | Description | Mandatory?
-------------|-------------|-----------
**Content-Type** | Standard HTTP Header. Represents the format of the payload returned in the response.<br/>Must be `application/json` unless otherwise specified in the resource endpoint standard. | Mandatory
**Retry-After** | Header indicating the time (in seconds) that the client should wait before retrying an operation. The holder should include this header along with responses with the HTTP status code of `429 Too many requests`. | Optional
**x-v** | The payload version that the endpoint has responded with. | Mandatory
<span style="white-space: nowrap;">**x-fapi-interaction-id**</span> | An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. The data holder must set the response header _x-fapi-interaction-id_ to the value received from the corresponding request header or to a new **[[RFC4122]](#nref-RFC4122)** UUID value if the request header was not provided. This header **MUST** be responded for success and error responses for authenticated APIs. | Mandatory

### Additional Headers

Generally understood headers used in HTTP transactions to provide caching guidance and the use of the compression are not specified but are considered acceptable. It is at the discretion of the data holder if these headers are used for a specific implementation. Data holders should not require these headers for successful API access, however.
