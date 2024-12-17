

<h2 id="cdr-telco-api_get-telco-products">Get Telco Products</h2>
<p id="get-telco-products" class="orig-anchor"></p>

> Code samples

```http
GET https://tls.dh.example.com/cds-au/v1/telco/products HTTP/1.1
Host: tls.dh.example.com
Accept: application/json
x-v: string
x-min-v: string
```

```javascript--nodejs
const fetch = require('node-fetch');
const headers = {
  'Accept':'application/json',
  'x-v':'string',
  'x-min-v':'string'
};

fetch('https://tls.dh.example.com/cds-au/v1/telco/products', {
  method: 'GET',
  headers: headers
}).then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

`GET /telco/products`

Obtain a list of telco products that are currently offered to the market.

Note that the results returned by this endpoint are expected to be ordered in descending order according to _lastUpdated_.

<h3 id="cdr-telco-api_get-telco-products_endpoint-version">Endpoint Version</h3>
|   |  |
|---|--|
|Version|**1**

<h3 id="cdr-telco-api_get-telco-products_parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type|query|[Enum](#common-field-types)|optional|Used to filter results on the type field. Any one of the valid values for this field can be supplied. If absent, defaults to include `ALL` products. Valid values are [`MOBILE`](https://www.legislation.gov.au/Details/C2022C00170/Html/Volume_1#_Toc95898745) service, `BROADBAND` fixed internet service, or `ALL`.|
|billing-type|query|[Enum](#common-field-types)|optional|Used to filter results on the _billing-type_ field. Any one of the valid values for this field can be supplied. If absent, defaults to include all billing types. Valid values are `PRE_PAID`, `POST_PAID`, `UPFRONT_PAID`, `ALL`.|
|effective|query|[Enum](#common-field-types)|optional|Allows for the filtering of products based on whether the current time is within the period of time defined as effective by the _effectiveFrom_ and _effectiveTo_ fields. Valid values are `CURRENT`, `FUTURE` and `ALL`. If absent defaults to `CURRENT`.|
|updated-since|query|[DateTimeString](#common-field-types)|optional|Only include products that have been updated after the specified date and time. If absent defaults to include all plans.|
|brand|query|string|optional|Used to filter results on the brand field. If absent, defaults to include all products. For service providers that operate a number of mobile and internet brands.|
|page|query|[PositiveInteger](#common-field-types)|optional|Page of results to request (standard pagination).|
|page-size|query|[PositiveInteger](#common-field-types)|optional|Page size to request. Default is 25 (standard pagination).|
|x-v|header|string|mandatory|Version of the API endpoint requested by the client. Must be set to a positive integer. The data holder should respond with the highest supported version between [_x-min-v_](#request-headers) and [_x-v_](#request-headers). If the value of [_x-min-v_](#request-headers) is equal to or higher than the value of [_x-v_](#request-headers) then the [_x-min-v_](#request-headers) header should be treated as absent. If all versions requested are not supported then the data holder **MUST** respond with a `406 Not Acceptable`. See [HTTP Headers](#request-headers).|
|x-min-v|header|string|optional|Minimum version of the API endpoint requested by the client. Must be set to a positive integer if provided. The data holder should respond with the highest supported version between [_x-min-v_](#request-headers) and [_x-v_](#request-headers). If all versions requested are not supported then the data holder **MUST** respond with a `406 Not Acceptable`.|

<h4 id="cdr-telco-api_get-telco-products_enumerated-values-parameters">Enumerated Values</h4>

|Parameter|Value|
|---|---|
|type|MOBILE|
|type|BROADBAND|
|type|ALL|
|billing-type|PRE_PAID|
|billing-type|POST_PAID|
|billing-type|UPFRONT_PAID|
|billing-type|ALL|
|effective|CURRENT|
|effective|FUTURE|
|effective|ALL|

> Example responses

> 200 Response

```json
{
  "data": {
    "plans": [
      {
        "productId": "string",
        "effectiveFrom": "string",
        "effectiveTo": "string",
        "lastUpdated": "string",
        "displayName": "string",
        "description": "string",
        "type": "MOBILE",
        "purpose": "PERSONAL",
        "billingType": "PRE_PAID",
        "contract": {
          "name": "string",
          "description": "string",
          "duration": 0,
          "contractUri": "string"
        },
        "bundle": true,
        "brand": "string",
        "brandName": "string",
        "pricing": [
          {
            "name": "string",
            "description": "string",
            "period": "string",
            "amount": "string"
          }
        ],
        "thirdPartyAgentId": "string",
        "thirdPartyAgentName": "string",
        "applicationUri": "string",
        "additionalInformation": {
          "overviewUri": "string",
          "termsUri": "string",
          "eligibilityUri": "string",
          "pricingUri": "string",
          "bundleUri": "string"
        }
      }
    ]
  },
  "links": {
    "self": "string",
    "first": "string",
    "prev": "string",
    "next": "string",
    "last": "string"
  },
  "meta": {
    "totalRecords": 0,
    "totalPages": 0
  }
}
```

<h3 id="cdr-telco-api_get-telco-products_responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[TelcoProductListResponse](#schemacdr-telco-apitelcoproductlistresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Missing Required Field](#error-400-field-missing)</li><li>[400 - Invalid Page Size](#error-400-field-invalid-page-size)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li></ul>|[ResponseErrorListV2](#schemacdr-telco-apiresponseerrorlistv2)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|[ResponseErrorListV2](#schemacdr-telco-apiresponseerrorlistv2)|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[422 - Invalid Page](#error-422-field-invalid-page)</li></ul>|[ResponseErrorListV2](#schemacdr-telco-apiresponseerrorlistv2)|

<h3 id="cdr-telco-api_get-telco-products_response-headers">Response Headers</h3>

|Status|Header|Type|Description|
|---|---|---|---|---|
|200|x-v|string|The [version](#response-headers) of the API endpoint that the data holder has responded with.|

  
    <aside class="success">
This operation does not require authentication.
</aside>

  

<h2 id="cdr-telco-api_get-telco-product-detail">Get Telco Product Detail</h2>
<p id="get-telco-product-detail" class="orig-anchor"></p>

> Code samples

```http
GET https://tls.dh.example.com/cds-au/v1/telco/products/{productId} HTTP/1.1
Host: tls.dh.example.com
Accept: application/json
x-v: string
x-min-v: string
```

```javascript--nodejs
const fetch = require('node-fetch');
const headers = {
  'Accept':'application/json',
  'x-v':'string',
  'x-min-v':'string'
};

fetch('https://tls.dh.example.com/cds-au/v1/telco/products/{productId}', {
  method: 'GET',
  headers: headers
}).then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

`GET /telco/products/{productId}`

Obtain detailed information on a single telco product offered openly to the market.

<h3 id="cdr-telco-api_get-telco-product-detail_endpoint-version">Endpoint Version</h3>
|   |  |
|---|--|
|Version|**1**

<h3 id="cdr-telco-api_get-telco-product-detail_parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|productId|path|string|mandatory|ID of the specific product requested.|
|x-v|header|string|mandatory|Version of the API endpoint requested by the client. Must be set to a positive integer. The data holder should respond with the highest supported version between [_x-min-v_](#request-headers) and [_x-v_](#request-headers). If the value of [_x-min-v_](#request-headers) is equal to or higher than the value of [_x-v_](#request-headers) then the [_x-min-v_](#request-headers) header should be treated as absent. If all versions requested are not supported then the data holder **MUST** respond with a `406 Not Acceptable`. See [HTTP Headers](#request-headers).|
|x-min-v|header|string|optional|Minimum version of the API endpoint requested by the client. Must be set to a positive integer if provided. The data holder should respond with the highest supported version between [_x-min-v_](#request-headers) and [_x-v_](#request-headers). If all versions requested are not supported then the data holder **MUST** respond with a `406 Not Acceptable`.|

> Example responses

> 200 Response

```json
{
  "data": {
    "productId": "string",
    "effectiveFrom": "string",
    "effectiveTo": "string",
    "lastUpdated": "string",
    "displayName": "string",
    "description": "string",
    "type": "MOBILE",
    "purpose": "PERSONAL",
    "billingType": "PRE_PAID",
    "contract": {
      "name": "string",
      "description": "string",
      "duration": 0,
      "contractUri": "string"
    },
    "bundle": true,
    "brand": "string",
    "brandName": "string",
    "pricing": [
      {
        "name": "string",
        "description": "string",
        "period": "string",
        "amount": "string"
      }
    ],
    "thirdPartyAgentId": "string",
    "thirdPartyAgentName": "string",
    "applicationUri": "string",
    "additionalInformation": {
      "overviewUri": "string",
      "termsUri": "string",
      "eligibilityUri": "string",
      "pricingUri": "string",
      "bundleUri": "string"
    },
    "meteringCharges": [
      {
        "displayName": "string",
        "description": "string",
        "minimumValue": "string",
        "maximumValue": "string",
        "period": "string"
      }
    ],
    "bundles": [
      {
        "displayName": "string",
        "description": "string",
        "bundleUri": "string",
        "features": [
          {
            "displayName": "string",
            "description": "string",
            "category": "DATA"
          }
        ]
      }
    ],
    "plans": [
      {
        "displayName": "string",
        "description": "string",
        "planUri": "string",
        "features": [
          {
            "displayName": "string",
            "description": "string"
          }
        ]
      }
    ],
    "discounts": [
      {
        "displayName": "string",
        "description": "string",
        "discountUri": "string",
        "features": [
          {
            "displayName": "string",
            "description": "string"
          }
        ]
      }
    ],
    "incentives": [
      {
        "displayName": "string",
        "description": "string",
        "incentiveUri": "string",
        "features": [
          {
            "displayName": "string",
            "description": "string"
          }
        ]
      }
    ]
  },
  "links": {
    "self": "string"
  },
  "meta": {}
}
```

<h3 id="cdr-telco-api_get-telco-product-detail_responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[TelcoProductResponse](#schemacdr-telco-apitelcoproductresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Missing Required Field](#error-400-field-missing)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li></ul>|[ResponseErrorListV2](#schemacdr-telco-apiresponseerrorlistv2)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[404 - Invalid Resource](#error-404-resource-invalid)</li></ul>|[ResponseErrorListV2](#schemacdr-telco-apiresponseerrorlistv2)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|[ResponseErrorListV2](#schemacdr-telco-apiresponseerrorlistv2)|

<h3 id="cdr-telco-api_get-telco-product-detail_response-headers">Response Headers</h3>

|Status|Header|Type|Description|
|---|---|---|---|---|
|200|x-v|string|The [version](#response-headers) of the API endpoint that the data holder has responded with.|

  
    <aside class="success">
This operation does not require authentication.
</aside>

  

<h2 id="cdr-telco-api_get-usage-for-telco-service">Get Usage For Telco Service</h2>
<p id="get-usage-for-telco-service" class="orig-anchor"></p>

> Code samples

```http
GET https://mtls.dh.example.com/cds-au/v1/telco/accounts/{serviceId}/usage HTTP/1.1
Host: mtls.dh.example.com
Accept: application/json
x-v: string
x-min-v: string
x-fapi-interaction-id: string
x-fapi-auth-date: string
x-fapi-customer-ip-address: string
x-cds-client-headers: string
```

```javascript--nodejs
const fetch = require('node-fetch');
const headers = {
  'Accept':'application/json',
  'x-v':'string',
  'x-min-v':'string',
  'x-fapi-interaction-id':'string',
  'x-fapi-auth-date':'string',
  'x-fapi-customer-ip-address':'string',
  'x-cds-client-headers':'string'
};

fetch('https://mtls.dh.example.com/cds-au/v1/telco/accounts/{serviceId}/usage', {
  method: 'GET',
  headers: headers
}).then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

`GET /telco/accounts/{serviceId}/usage`

Obtain a usage data from a particular service Id.

<h3 id="cdr-telco-api_get-usage-for-telco-service_endpoint-version">Endpoint Version</h3>
|   |  |
|---|--|
|Version|**1**

<h3 id="cdr-telco-api_get-usage-for-telco-service_parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|serviceId|path|string|mandatory|ID of the specific service requested. E.g., a mobile [MSISDN](https://www.etsi.org/deliver/etsi_gts/03/0303/05.00.00_60/gsmts_0303v050000p.pdf), [FNN](https://www.nbnco.com.au/content/dam/nbnco2/documents/sfaa-wba2-dictionary_FTTN-launch.pdf) or internet service e.g [NBN AVC Service ID](https://www.nbnco.com.au/content/dam/nbnco2/documents/sfaa-wba2-dictionary_FTTN-launch.pdf). This is a tokenised ID returned from the account. In accordance with [CDR ID permanence](#id-permanence) requirements.|
|oldest-date|query|[DateString](#common-field-types)|optional|Constrain the request to records with effective date at or after this date. If absent defaults to _newest-date_ minus 24 months. Format is aligned to DateString common type.|
|newest-date|query|[DateString](#common-field-types)|optional|Constrain the request to records with effective date at or before this date. If absent defaults to current date. Format is aligned to DateString common type.|
|x-v|header|string|mandatory|Version of the API endpoint requested by the client. Must be set to a positive integer. The data holder should respond with the highest supported version between [_x-min-v_](#request-headers) and [_x-v_](#request-headers). If the value of [_x-min-v_](#request-headers) is equal to or higher than the value of [_x-v_](#request-headers) then the [_x-min-v_](#request-headers) header should be treated as absent. If all versions requested are not supported then the data holder **MUST** respond with a `406 Not Acceptable`. See [HTTP Headers](#request-headers).|
|x-min-v|header|string|optional|Minimum version of the API endpoint requested by the client. Must be set to a positive integer if provided. The data holder should respond with the highest supported version between [_x-min-v_](#request-headers) and [_x-v_](#request-headers). If all versions requested are not supported then the data holder **MUST** respond with a `406 Not Acceptable`.|
|x-fapi-interaction-id|header|string|optional|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|x-fapi-auth-date|header|string|conditional|The time when the customer last logged in to the Data Recipient Software Product as described in **[[FAPI-1.0-Baseline]](#nref-FAPI-1-0-Baseline)**. Required for all resource calls (customer present and unattended). Not required for unauthenticated calls.|
|x-fapi-customer-ip-address|header|string|optional|The customer's original IP address if the customer is currently logged in to the data recipient. The presence of this header indicates that the API is being called in a customer present context. Not to be included for unauthenticated calls.|
|x-cds-client-headers|header|[Base64](#common-field-types)|conditional|The customer's original standard http headers [Base64](#common-field-types) encoded, including the original User-Agent header, if the customer is currently logged in to the data recipient. Mandatory for customer present calls. Not required for unattended or unauthenticated calls.|

> Example responses

> 200 Response

```json
{
  "data": {
    "serviceId": "string",
    "displayName": "string",
    "phoneNumber": "string",
    "startDate": "string",
    "endDate": "string",
    "usage": {
      "data": {
        "upload": 0,
        "download": 0,
        "sessions": 0,
        "amount": "string",
        "roaming": {
          "download": 0,
          "amount": "string"
        }
      },
      "voice": {
        "national": {
          "duration": "string",
          "number": 0,
          "amount": "string"
        },
        "international": {
          "duration": "string",
          "number": 0,
          "amount": "string"
        },
        "roaming": {
          "duration": "string",
          "number": 0,
          "amount": "string"
        }
      },
      "messaging": {
        "sms": {
          "national": 0,
          "international": 0,
          "roaming": 0,
          "amount": "string"
        },
        "mms": {
          "national": 0,
          "international": 0,
          "roaming": 0,
          "amount": "string"
        }
      }
    }
  },
  "links": {
    "self": "string"
  },
  "meta": {}
}
```

<h3 id="cdr-telco-api_get-usage-for-telco-service_responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[TelcoServiceUsageResponse](#schemacdr-telco-apitelcoserviceusageresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Missing Required Field](#error-400-field-missing)</li><li>[400 - Invalid Page Size](#error-400-field-invalid-page-size)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li></ul>|[ResponseErrorListV2](#schemacdr-telco-apiresponseerrorlistv2)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[404 - Unavailable Service Point](#error-404-unavailable-service-point)</li><li>[404 - Invalid Service Point](#error-404-invalid-service-point)</li></ul>|[ResponseErrorListV2](#schemacdr-telco-apiresponseerrorlistv2)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|[ResponseErrorListV2](#schemacdr-telco-apiresponseerrorlistv2)|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[422 - Invalid Page](#error-422-field-invalid-page)</li></ul>|[ResponseErrorListV2](#schemacdr-telco-apiresponseerrorlistv2)|

<h3 id="cdr-telco-api_get-usage-for-telco-service_response-headers">Response Headers</h3>

|Status|Header|Type|Description|
|---|---|---|---|---|
|200|x-v|string|The [version](#response-headers) of the API endpoint that the data holder has responded with.|
|200|x-fapi-interaction-id|string|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|400|x-fapi-interaction-id|string|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|404|x-fapi-interaction-id|string|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|406|x-fapi-interaction-id|string|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|422|x-fapi-interaction-id|string|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|

  
    
      <aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
<a href="#authorisation-scopes">telco:billing:read.</a>
</aside>

    
  

<h2 id="cdr-telco-api_get-usage">Get Usage</h2>
<p id="get-usage" class="orig-anchor"></p>

> Code samples

```http
GET https://mtls.dh.example.com/cds-au/v1/telco/accounts/usage HTTP/1.1
Host: mtls.dh.example.com
Accept: application/json
x-v: string
x-min-v: string
x-fapi-interaction-id: string
x-fapi-auth-date: string
x-fapi-customer-ip-address: string
x-cds-client-headers: string
```

```javascript--nodejs
const fetch = require('node-fetch');
const headers = {
  'Accept':'application/json',
  'x-v':'string',
  'x-min-v':'string',
  'x-fapi-interaction-id':'string',
  'x-fapi-auth-date':'string',
  'x-fapi-customer-ip-address':'string',
  'x-cds-client-headers':'string'
};

fetch('https://mtls.dh.example.com/cds-au/v1/telco/accounts/usage', {
  method: 'GET',
  headers: headers
}).then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

`GET /telco/accounts/usage`

Obtain usage data for all services associated with the customer.

<h3 id="cdr-telco-api_get-usage_endpoint-version">Endpoint Version</h3>
|   |  |
|---|--|
|Version|**1**

<h3 id="cdr-telco-api_get-usage_parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|oldest-date|query|[DateString](#common-field-types)|optional|Constrain the request to records with effective date at or after this date. If absent defaults to _newest-date_ minus 24 months. Format is aligned to DateString common type.|
|newest-date|query|[DateString](#common-field-types)|optional|Constrain the request to records with effective date at or before this date. If absent defaults to current date. Format is aligned to DateString common type.|
|page|query|[PositiveInteger](#common-field-types)|optional|Page of results to request (standard pagination).|
|page-size|query|[PositiveInteger](#common-field-types)|optional|Page size to request. Default is 25 (standard pagination).|
|x-v|header|string|mandatory|Version of the API endpoint requested by the client. Must be set to a positive integer. The data holder should respond with the highest supported version between [_x-min-v_](#request-headers) and [_x-v_](#request-headers). If the value of [_x-min-v_](#request-headers) is equal to or higher than the value of [_x-v_](#request-headers) then the [_x-min-v_](#request-headers) header should be treated as absent. If all versions requested are not supported then the data holder **MUST** respond with a `406 Not Acceptable`. See [HTTP Headers](#request-headers).|
|x-min-v|header|string|optional|Minimum version of the API endpoint requested by the client. Must be set to a positive integer if provided. The data holder should respond with the highest supported version between [_x-min-v_](#request-headers) and [_x-v_](#request-headers). If all versions requested are not supported then the data holder **MUST** respond with a `406 Not Acceptable`.|
|x-fapi-interaction-id|header|string|optional|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|x-fapi-auth-date|header|string|conditional|The time when the customer last logged in to the Data Recipient Software Product as described in **[[FAPI-1.0-Baseline]](#nref-FAPI-1-0-Baseline)**. Required for all resource calls (customer present and unattended). Not required for unauthenticated calls.|
|x-fapi-customer-ip-address|header|string|optional|The customer's original IP address if the customer is currently logged in to the data recipient. The presence of this header indicates that the API is being called in a customer present context. Not to be included for unauthenticated calls.|
|x-cds-client-headers|header|[Base64](#common-field-types)|conditional|The customer's original standard http headers [Base64](#common-field-types) encoded, including the original User-Agent header, if the customer is currently logged in to the data recipient. Mandatory for customer present calls. Not required for unattended or unauthenticated calls.|

> Example responses

> 200 Response

```json
{
  "data": {
    "accounts": [
      {
        "accountId": "string",
        "services": [
          {
            "service": {
              "serviceId": "string",
              "displayName": "string",
              "phoneNumber": "string",
              "startDate": "string",
              "endDate": "string",
              "usage": {
                "data": {
                  "upload": 0,
                  "download": 0,
                  "sessions": 0,
                  "amount": "string",
                  "roaming": {
                    "download": 0,
                    "amount": "string"
                  }
                },
                "voice": {
                  "national": {
                    "duration": "string",
                    "number": 0,
                    "amount": "string"
                  },
                  "international": {
                    "duration": "string",
                    "number": 0,
                    "amount": "string"
                  },
                  "roaming": {
                    "duration": "string",
                    "number": 0,
                    "amount": "string"
                  }
                },
                "messaging": {
                  "sms": {
                    "national": 0,
                    "international": 0,
                    "roaming": 0,
                    "amount": "string"
                  },
                  "mms": {
                    "national": 0,
                    "international": 0,
                    "roaming": 0,
                    "amount": "string"
                  }
                }
              }
            }
          }
        ]
      }
    ]
  },
  "links": {
    "self": "string"
  },
  "meta": {}
}
```

<h3 id="cdr-telco-api_get-usage_responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[TelcoUsageListResponse](#schemacdr-telco-apitelcousagelistresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Missing Required Field](#error-400-field-missing)</li><li>[400 - Invalid Page Size](#error-400-field-invalid-page-size)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li></ul>|[ResponseErrorListV2](#schemacdr-telco-apiresponseerrorlistv2)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|[ResponseErrorListV2](#schemacdr-telco-apiresponseerrorlistv2)|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[422 - Invalid Page](#error-422-field-invalid-page)</li></ul>|[ResponseErrorListV2](#schemacdr-telco-apiresponseerrorlistv2)|

<h3 id="cdr-telco-api_get-usage_response-headers">Response Headers</h3>

|Status|Header|Type|Description|
|---|---|---|---|---|
|200|x-v|string|The [version](#response-headers) of the API endpoint that the data holder has responded with.|
|200|x-fapi-interaction-id|string|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|400|x-fapi-interaction-id|string|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|406|x-fapi-interaction-id|string|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|422|x-fapi-interaction-id|string|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|

  
    
      <aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
<a href="#authorisation-scopes">telco:billing:read.</a>
</aside>

    
  

<h2 id="cdr-telco-api_get-usage-for-specific-telco-service">Get Usage For Specific Telco Service</h2>
<p id="get-usage-for-specific-telco-service" class="orig-anchor"></p>

> Code samples

```http
POST https://mtls.dh.example.com/cds-au/v1/telco/accounts/usage HTTP/1.1
Host: mtls.dh.example.com
Content-Type: application/json
Accept: application/json
x-v: string
x-min-v: string
x-fapi-interaction-id: string
x-fapi-auth-date: string
x-fapi-customer-ip-address: string
x-cds-client-headers: string
```

```javascript--nodejs
const fetch = require('node-fetch');
const inputBody = '{
  "data": {
    "serviceIds": [
      "string"
    ]
  },
  "meta": {}
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'x-v':'string',
  'x-min-v':'string',
  'x-fapi-interaction-id':'string',
  'x-fapi-auth-date':'string',
  'x-fapi-customer-ip-address':'string',
  'x-cds-client-headers':'string'
};

fetch('https://mtls.dh.example.com/cds-au/v1/telco/accounts/usage', {
  method: 'POST',
  body: inputBody,
  headers: headers
}).then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

`POST /telco/accounts/usage`

Obtain usage data for a specific service.

> Body parameter

```json
{
  "data": {
    "serviceIds": [
      "string"
    ]
  },
  "meta": {}
}
```

<h3 id="cdr-telco-api_get-usage-for-specific-telco-service_endpoint-version">Endpoint Version</h3>
|   |  |
|---|--|
|Version|**1**

<h3 id="cdr-telco-api_get-usage-for-specific-telco-service_parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|[PositiveInteger](#common-field-types)|optional|Page of results to request (standard pagination).|
|page-size|query|[PositiveInteger](#common-field-types)|optional|Page size to request. Default is 25 (standard pagination).|
|x-v|header|string|mandatory|Version of the API endpoint requested by the client. Must be set to a positive integer. The data holder should respond with the highest supported version between [_x-min-v_](#request-headers) and [_x-v_](#request-headers). If the value of [_x-min-v_](#request-headers) is equal to or higher than the value of [_x-v_](#request-headers) then the [_x-min-v_](#request-headers) header should be treated as absent. If all versions requested are not supported then the data holder **MUST** respond with a `406 Not Acceptable`. See [HTTP Headers](#request-headers).|
|x-min-v|header|string|optional|Minimum version of the API endpoint requested by the client. Must be set to a positive integer if provided. The data holder should respond with the highest supported version between [_x-min-v_](#request-headers) and [_x-v_](#request-headers). If all versions requested are not supported then the data holder **MUST** respond with a `406 Not Acceptable`.|
|x-fapi-interaction-id|header|string|optional|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|x-fapi-auth-date|header|string|conditional|The time when the customer last logged in to the Data Recipient Software Product as described in **[[FAPI-1.0-Baseline]](#nref-FAPI-1-0-Baseline)**. Required for all resource calls (customer present and unattended). Not required for unauthenticated calls.|
|x-fapi-customer-ip-address|header|string|optional|The customer's original IP address if the customer is currently logged in to the data recipient. The presence of this header indicates that the API is being called in a customer present context. Not to be included for unauthenticated calls.|
|x-cds-client-headers|header|[Base64](#common-field-types)|conditional|The customer's original standard http headers [Base64](#common-field-types) encoded, including the original User-Agent header, if the customer is currently logged in to the data recipient. Mandatory for customer present calls. Not required for unattended or unauthenticated calls.|
|body|body|[serviceIdList](#schemacdr-telco-apiserviceidlist)|mandatory|Request payload containing list of specific _serviceId_ values to obtain data for.|
|» data|body|object|mandatory|none|
|»» serviceIds|body|[string]|mandatory|Array of specific _serviceId_ values to obtain data for. E.g., a mobile [MSISDN](https://www.etsi.org/deliver/etsi_gts/03/0303/05.00.00_60/gsmts_0303v050000p.pdf), [FNN](https://www.nbnco.com.au/content/dam/nbnco2/documents/sfaa-wba2-dictionary_FTTN-launch.pdf) or internet service e.g [NBN AVC Service ID](https://www.nbnco.com.au/content/dam/nbnco2/documents/sfaa-wba2-dictionary_FTTN-launch.pdf). In accordance with [CDR ID permanence](#id-permanence) requirements.|
|» meta|body|[Meta](#schemacdr-telco-apimeta)|mandatory|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "accounts": [
      {
        "accountId": "string",
        "services": [
          {
            "service": {
              "serviceId": "string",
              "displayName": "string",
              "phoneNumber": "string",
              "startDate": "string",
              "endDate": "string",
              "usage": {
                "data": {
                  "upload": 0,
                  "download": 0,
                  "sessions": 0,
                  "amount": "string",
                  "roaming": {
                    "download": 0,
                    "amount": "string"
                  }
                },
                "voice": {
                  "national": {
                    "duration": "string",
                    "number": 0,
                    "amount": "string"
                  },
                  "international": {
                    "duration": "string",
                    "number": 0,
                    "amount": "string"
                  },
                  "roaming": {
                    "duration": "string",
                    "number": 0,
                    "amount": "string"
                  }
                },
                "messaging": {
                  "sms": {
                    "national": 0,
                    "international": 0,
                    "roaming": 0,
                    "amount": "string"
                  },
                  "mms": {
                    "national": 0,
                    "international": 0,
                    "roaming": 0,
                    "amount": "string"
                  }
                }
              }
            }
          }
        ]
      }
    ]
  },
  "links": {
    "self": "string"
  },
  "meta": {}
}
```

<h3 id="cdr-telco-api_get-usage-for-specific-telco-service_responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[TelcoUsageListResponse](#schemacdr-telco-apitelcousagelistresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Missing Required Field](#error-400-field-missing)</li><li>[400 - Invalid Page Size](#error-400-field-invalid-page-size)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li></ul>|[ResponseErrorListV2](#schemacdr-telco-apiresponseerrorlistv2)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|[ResponseErrorListV2](#schemacdr-telco-apiresponseerrorlistv2)|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[422 - Invalid Page](#error-422-field-invalid-page)</li><li>[422 - Unavailable Service Point](#error-422-unavailable-service-point)</li><li>[422 - Invalid Service Point](#error-422-invalid-service-point)</li></ul>|[ResponseErrorListV2](#schemacdr-telco-apiresponseerrorlistv2)|

<h3 id="cdr-telco-api_get-usage-for-specific-telco-service_response-headers">Response Headers</h3>

|Status|Header|Type|Description|
|---|---|---|---|---|
|200|x-v|string|The [version](#response-headers) of the API endpoint that the data holder has responded with.|
|200|x-fapi-interaction-id|string|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|400|x-fapi-interaction-id|string|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|406|x-fapi-interaction-id|string|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|422|x-fapi-interaction-id|string|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|

  
    
      <aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
<a href="#authorisation-scopes">telco:billing:read.</a>
</aside>

    
  

<h2 id="cdr-telco-api_get-telco-accounts">Get Telco Accounts</h2>
<p id="get-telco-accounts" class="orig-anchor"></p>

> Code samples

```http
GET https://mtls.dh.example.com/cds-au/v1/telco/accounts HTTP/1.1
Host: mtls.dh.example.com
Accept: application/json
x-v: string
x-min-v: string
x-fapi-interaction-id: string
x-fapi-auth-date: string
x-fapi-customer-ip-address: string
x-cds-client-headers: string
```

```javascript--nodejs
const fetch = require('node-fetch');
const headers = {
  'Accept':'application/json',
  'x-v':'string',
  'x-min-v':'string',
  'x-fapi-interaction-id':'string',
  'x-fapi-auth-date':'string',
  'x-fapi-customer-ip-address':'string',
  'x-cds-client-headers':'string'
};

fetch('https://mtls.dh.example.com/cds-au/v1/telco/accounts', {
  method: 'GET',
  headers: headers
}).then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

`GET /telco/accounts`

Obtain the list of telco accounts available under the authorised consent.

<h3 id="cdr-telco-api_get-telco-accounts_endpoint-version">Endpoint Version</h3>
|   |  |
|---|--|
|Version|**1**

<h3 id="cdr-telco-api_get-telco-accounts_parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|open-status|query|[Enum](#common-field-types)|optional|Used to filter results according to open/closed status. Values can be `OPEN`, `CLOSED` or `ALL`. If absent then `ALL` is assumed.|
|updated-since|query|[DateString](#common-field-types)|optional|Only include accounts that have been updated after the specified date and time. If absent defaults to include all plans.|
|page|query|[PositiveInteger](#common-field-types)|optional|Page of results to request (standard pagination).|
|page-size|query|[PositiveInteger](#common-field-types)|optional|Page size to request. Default is 25 (standard pagination).|
|x-v|header|string|mandatory|Version of the API endpoint requested by the client. Must be set to a positive integer. The data holder should respond with the highest supported version between [_x-min-v_](#request-headers) and [_x-v_](#request-headers). If the value of [_x-min-v_](#request-headers) is equal to or higher than the value of [_x-v_](#request-headers) then the [_x-min-v_](#request-headers) header should be treated as absent. If all versions requested are not supported then the data holder **MUST** respond with a `406 Not Acceptable`. See [HTTP Headers](#request-headers).|
|x-min-v|header|string|optional|Minimum version of the API endpoint requested by the client. Must be set to a positive integer if provided. The data holder should respond with the highest supported version between [_x-min-v_](#request-headers) and [_x-v_](#request-headers). If all versions requested are not supported then the data holder **MUST** respond with a `406 Not Acceptable`.|
|x-fapi-interaction-id|header|string|optional|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|x-fapi-auth-date|header|string|conditional|The time when the customer last logged in to the Data Recipient Software Product as described in **[[FAPI-1.0-Baseline]](#nref-FAPI-1-0-Baseline)**. Required for all resource calls (customer present and unattended). Not required for unauthenticated calls.|
|x-fapi-customer-ip-address|header|string|optional|The customer's original IP address if the customer is currently logged in to the data recipient. The presence of this header indicates that the API is being called in a customer present context. Not to be included for unauthenticated calls.|
|x-cds-client-headers|header|[Base64](#common-field-types)|conditional|The customer's original standard http headers [Base64](#common-field-types) encoded, including the original User-Agent header, if the customer is currently logged in to the data recipient. Mandatory for customer present calls. Not required for unattended or unauthenticated calls.|

<h4 id="cdr-telco-api_get-telco-accounts_enumerated-values-parameters">Enumerated Values</h4>

|Parameter|Value|
|---|---|
|open-status|ALL|
|open-status|CLOSED|
|open-status|OPEN|

> Example responses

> 200 Response

```json
{
  "data": {
    "accounts": [
      {
        "accountId": "string",
        "accountNumber": "string",
        "displayName": "string",
        "creationDate": "string",
        "lastUpdated": "string",
        "brand": "string",
        "openStatus": "CLOSED",
        "plans": [
          {
            "nickname": "string",
            "type": "MOBILE",
            "billingType": "PRE_PAID",
            "serviceIds": [
              "string"
            ],
            "planOverview": {
              "displayName": "string",
              "startDate": "string",
              "endDate": "string"
            }
          }
        ]
      }
    ]
  },
  "links": {
    "self": "string",
    "first": "string",
    "prev": "string",
    "next": "string",
    "last": "string"
  },
  "meta": {
    "totalRecords": 0,
    "totalPages": 0
  }
}
```

<h3 id="cdr-telco-api_get-telco-accounts_responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[TelcoAccountListResponse](#schemacdr-telco-apitelcoaccountlistresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Missing Required Field](#error-400-field-missing)</li><li>[400 - Invalid Page Size](#error-400-field-invalid-page-size)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li></ul>|[ResponseErrorListV2](#schemacdr-telco-apiresponseerrorlistv2)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|[ResponseErrorListV2](#schemacdr-telco-apiresponseerrorlistv2)|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[422 - Invalid Page](#error-422-field-invalid-page)</li></ul>|[ResponseErrorListV2](#schemacdr-telco-apiresponseerrorlistv2)|

<h3 id="cdr-telco-api_get-telco-accounts_response-headers">Response Headers</h3>

|Status|Header|Type|Description|
|---|---|---|---|---|
|200|x-v|string|The [version](#response-headers) of the API endpoint that the data holder has responded with.|
|200|x-fapi-interaction-id|string|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|400|x-fapi-interaction-id|string|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|406|x-fapi-interaction-id|string|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|422|x-fapi-interaction-id|string|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|

  
    
      <aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
<a href="#authorisation-scopes">telco:accounts.basic:read.</a>
</aside>

    
  

<h2 id="cdr-telco-api_get-telco-account-detail">Get Telco Account Detail</h2>
<p id="get-telco-account-detail" class="orig-anchor"></p>

> Code samples

```http
GET https://mtls.dh.example.com/cds-au/v1/telco/accounts/{accountId} HTTP/1.1
Host: mtls.dh.example.com
Accept: application/json
x-v: string
x-min-v: string
x-fapi-interaction-id: string
x-fapi-auth-date: string
x-fapi-customer-ip-address: string
x-cds-client-headers: string
```

```javascript--nodejs
const fetch = require('node-fetch');
const headers = {
  'Accept':'application/json',
  'x-v':'string',
  'x-min-v':'string',
  'x-fapi-interaction-id':'string',
  'x-fapi-auth-date':'string',
  'x-fapi-customer-ip-address':'string',
  'x-cds-client-headers':'string'
};

fetch('https://mtls.dh.example.com/cds-au/v1/telco/accounts/{accountId}', {
  method: 'GET',
  headers: headers
}).then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

`GET /telco/accounts/{accountId}`

Obtain detailed information for a specific telco account.

<h3 id="cdr-telco-api_get-telco-account-detail_endpoint-version">Endpoint Version</h3>
|   |  |
|---|--|
|Version|**1**

<h3 id="cdr-telco-api_get-telco-account-detail_parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|mandatory|ID of a specific account to obtain data for. This is a tokenised ID previously obtained from the Account List endpoint. In accordance with [CDR ID permanence](#id-permanence) requirements.|
|x-v|header|string|mandatory|Version of the API endpoint requested by the client. Must be set to a positive integer. The data holder should respond with the highest supported version between [_x-min-v_](#request-headers) and [_x-v_](#request-headers). If the value of [_x-min-v_](#request-headers) is equal to or higher than the value of [_x-v_](#request-headers) then the [_x-min-v_](#request-headers) header should be treated as absent. If all versions requested are not supported then the data holder **MUST** respond with a `406 Not Acceptable`. See [HTTP Headers](#request-headers).|
|x-min-v|header|string|optional|Minimum version of the API endpoint requested by the client. Must be set to a positive integer if provided. The data holder should respond with the highest supported version between [_x-min-v_](#request-headers) and [_x-v_](#request-headers). If all versions requested are not supported then the data holder **MUST** respond with a `406 Not Acceptable`.|
|x-fapi-interaction-id|header|string|optional|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|x-fapi-auth-date|header|string|conditional|The time when the customer last logged in to the Data Recipient Software Product as described in **[[FAPI-1.0-Baseline]](#nref-FAPI-1-0-Baseline)**. Required for all resource calls (customer present and unattended). Not required for unauthenticated calls.|
|x-fapi-customer-ip-address|header|string|optional|The customer's original IP address if the customer is currently logged in to the data recipient. The presence of this header indicates that the API is being called in a customer present context. Not to be included for unauthenticated calls.|
|x-cds-client-headers|header|[Base64](#common-field-types)|conditional|The customer's original standard http headers [Base64](#common-field-types) encoded, including the original User-Agent header, if the customer is currently logged in to the data recipient. Mandatory for customer present calls. Not required for unattended or unauthenticated calls.|

> Example responses

> 200 Response

```json
{
  "data": {
    "accountId": "string",
    "accountNumber": "string",
    "displayName": "string",
    "creationDate": "string",
    "lastUpdated": "string",
    "brand": "string",
    "openStatus": "CLOSED",
    "plans": [
      {
        "nickname": "string",
        "type": "MOBILE",
        "billingType": "PRE_PAID",
        "serviceIds": [
          "string"
        ],
        "planOverview": {
          "displayName": "string",
          "startDate": "string",
          "endDate": "string"
        },
        "planDetail": {
          "charges": [
            {
              "displayName": "string",
              "description": "string",
              "minimumValue": "string",
              "maximumValue": "string",
              "period": "string"
            }
          ]
        }
      }
    ]
  },
  "links": {
    "self": "string"
  },
  "meta": {}
}
```

<h3 id="cdr-telco-api_get-telco-account-detail_responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[TelcoAccountDetailResponse](#schemacdr-telco-apitelcoaccountdetailresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Missing Required Field](#error-400-field-missing)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li></ul>|[ResponseErrorListV2](#schemacdr-telco-apiresponseerrorlistv2)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[404 - Unavailable Telco Account](#error-404-unavailable-telco-account)</li><li>[404 - Invalid Telco Account](#error-404-invalid-telco-account)</li></ul>|[ResponseErrorListV2](#schemacdr-telco-apiresponseerrorlistv2)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|[ResponseErrorListV2](#schemacdr-telco-apiresponseerrorlistv2)|

<h3 id="cdr-telco-api_get-telco-account-detail_response-headers">Response Headers</h3>

|Status|Header|Type|Description|
|---|---|---|---|---|
|200|x-v|string|The [version](#response-headers) of the API endpoint that the data holder has responded with.|
|200|x-fapi-interaction-id|string|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|400|x-fapi-interaction-id|string|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|404|x-fapi-interaction-id|string|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|406|x-fapi-interaction-id|string|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|

  
    
      <aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
<a href="#authorisation-scopes">telco:accounts.detail:read.</a>
</aside>

    
  

<h2 id="cdr-telco-api_get-telco-agreed-payment-schedule">Get Telco Agreed Payment Schedule</h2>
<p id="get-telco-agreed-payment-schedule" class="orig-anchor"></p>

> Code samples

```http
GET https://mtls.dh.example.com/cds-au/v1/telco/accounts/{accountId}/payment-schedule HTTP/1.1
Host: mtls.dh.example.com
Accept: application/json
x-v: string
x-min-v: string
x-fapi-interaction-id: string
x-fapi-auth-date: string
x-fapi-customer-ip-address: string
x-cds-client-headers: string
```

```javascript--nodejs
const fetch = require('node-fetch');
const headers = {
  'Accept':'application/json',
  'x-v':'string',
  'x-min-v':'string',
  'x-fapi-interaction-id':'string',
  'x-fapi-auth-date':'string',
  'x-fapi-customer-ip-address':'string',
  'x-cds-client-headers':'string'
};

fetch('https://mtls.dh.example.com/cds-au/v1/telco/accounts/{accountId}/payment-schedule', {
  method: 'GET',
  headers: headers
}).then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

`GET /telco/accounts/{accountId}/payment-schedule`

Obtain the agreed payment schedule and details, if any, for a specific telco account.

Some general notes about this endpoint:

<ul><li>This API describes how the consumer has elected to pay for their account</li><li>Payments initiated by the consumer are classified as manual payments. The billing frequency is captured for manual payments. The consumer may choose to pay on a different schedule/frequency. The payment method and frequency is not captured for manual payments</li><li>Payments that can be initiated by the retailer, based on a consumer's preferences and permission, include payments based on a direct debit, card debit or digital wallet setup. Each of these requires a payment frequency to be provided along with other relevant fields</li><li>Information about payment plans related to debt repayments or arrangements due to hardship is not captured within this API.</li></ul>

<h3 id="cdr-telco-api_get-telco-agreed-payment-schedule_endpoint-version">Endpoint Version</h3>
|   |  |
|---|--|
|Version|**1**

<h3 id="cdr-telco-api_get-telco-agreed-payment-schedule_parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|mandatory|ID of a specific account to obtain data for. This is a tokenised ID previously obtained from the Account List endpoint. In accordance with [CDR ID permanence](#id-permanence) requirements.|
|x-v|header|string|mandatory|Version of the API endpoint requested by the client. Must be set to a positive integer. The data holder should respond with the highest supported version between [_x-min-v_](#request-headers) and [_x-v_](#request-headers). If the value of [_x-min-v_](#request-headers) is equal to or higher than the value of [_x-v_](#request-headers) then the [_x-min-v_](#request-headers) header should be treated as absent. If all versions requested are not supported then the data holder **MUST** respond with a `406 Not Acceptable`. See [HTTP Headers](#request-headers).|
|x-min-v|header|string|optional|Minimum version of the API endpoint requested by the client. Must be set to a positive integer if provided. The data holder should respond with the highest supported version between [_x-min-v_](#request-headers) and [_x-v_](#request-headers). If all versions requested are not supported then the data holder **MUST** respond with a `406 Not Acceptable`.|
|x-fapi-interaction-id|header|string|optional|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|x-fapi-auth-date|header|string|conditional|The time when the customer last logged in to the Data Recipient Software Product as described in **[[FAPI-1.0-Baseline]](#nref-FAPI-1-0-Baseline)**. Required for all resource calls (customer present and unattended). Not required for unauthenticated calls.|
|x-fapi-customer-ip-address|header|string|optional|The customer's original IP address if the customer is currently logged in to the data recipient. The presence of this header indicates that the API is being called in a customer present context. Not to be included for unauthenticated calls.|
|x-cds-client-headers|header|[Base64](#common-field-types)|conditional|The customer's original standard http headers [Base64](#common-field-types) encoded, including the original User-Agent header, if the customer is currently logged in to the data recipient. Mandatory for customer present calls. Not required for unattended or unauthenticated calls.|

> Example responses

> 200 Response

```json
{
  "data": {
    "paymentSchedules": [
      {
        "amount": "string",
        "paymentScheduleUType": "cardDebit",
        "cardDebit": {
          "cardScheme": "VISA",
          "paymentFrequency": "string",
          "calculationType": "STATIC"
        },
        "directDebit": {
          "isTokenised": true,
          "bsb": "string",
          "accountNumber": "string",
          "paymentFrequency": "string",
          "calculationType": "STATIC"
        },
        "digitalWallet": {
          "name": "string",
          "identifier": "string",
          "type": "EMAIL",
          "provider": "PAYPAL_AU",
          "paymentFrequency": "string",
          "calculationType": "STATIC"
        },
        "manualPayment": {
          "billFrequency": "string"
        }
      }
    ]
  },
  "links": {
    "self": "string",
    "first": "string",
    "prev": "string",
    "next": "string",
    "last": "string"
  },
  "meta": {
    "totalRecords": 0,
    "totalPages": 0
  }
}
```

<h3 id="cdr-telco-api_get-telco-agreed-payment-schedule_responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[TelcoPaymentScheduleResponse](#schemacdr-telco-apitelcopaymentscheduleresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Missing Required Field](#error-400-field-missing)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li></ul>|[ResponseErrorListV2](#schemacdr-telco-apiresponseerrorlistv2)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[404 - Unavailable Telco Account](#error-404-unavailable-telco-account)</li><li>[404 - Invalid Telco Account](#error-404-invalid-telco-account)</li></ul>|[ResponseErrorListV2](#schemacdr-telco-apiresponseerrorlistv2)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|[ResponseErrorListV2](#schemacdr-telco-apiresponseerrorlistv2)|

<h3 id="cdr-telco-api_get-telco-agreed-payment-schedule_response-headers">Response Headers</h3>

|Status|Header|Type|Description|
|---|---|---|---|---|
|200|x-v|string|The [version](#response-headers) of the API endpoint that the data holder has responded with.|
|200|x-fapi-interaction-id|string|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|400|x-fapi-interaction-id|string|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|404|x-fapi-interaction-id|string|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|406|x-fapi-interaction-id|string|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|

  
    
      <aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
<a href="#authorisation-scopes">telco:accounts.paymentschedule:read.</a>
</aside>

    
  

<h2 id="cdr-telco-api_get-telco-concessions">Get Telco Concessions</h2>
<p id="get-telco-concessions" class="orig-anchor"></p>

> Code samples

```http
GET https://mtls.dh.example.com/cds-au/v1/telco/accounts/{accountId}/concessions HTTP/1.1
Host: mtls.dh.example.com
Accept: application/json
x-v: string
x-min-v: string
x-fapi-interaction-id: string
x-fapi-auth-date: string
x-fapi-customer-ip-address: string
x-cds-client-headers: string
```

```javascript--nodejs
const fetch = require('node-fetch');
const headers = {
  'Accept':'application/json',
  'x-v':'string',
  'x-min-v':'string',
  'x-fapi-interaction-id':'string',
  'x-fapi-auth-date':'string',
  'x-fapi-customer-ip-address':'string',
  'x-cds-client-headers':'string'
};

fetch('https://mtls.dh.example.com/cds-au/v1/telco/accounts/{accountId}/concessions', {
  method: 'GET',
  headers: headers
}).then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

`GET /telco/accounts/{accountId}/concessions`

Obtain the details of any concessions or arrangements applied to a specific telco account.

<h3 id="cdr-telco-api_get-telco-concessions_endpoint-version">Endpoint Version</h3>
|   |  |
|---|--|
|Version|**1**

<h3 id="cdr-telco-api_get-telco-concessions_parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|mandatory|ID of a specific account to obtain data for. This is a tokenised ID previously obtained from the Account List endpoint. In accordance with [CDR ID permanence](#id-permanence) requirements.|
|x-v|header|string|mandatory|Version of the API endpoint requested by the client. Must be set to a positive integer. The data holder should respond with the highest supported version between [_x-min-v_](#request-headers) and [_x-v_](#request-headers). If the value of [_x-min-v_](#request-headers) is equal to or higher than the value of [_x-v_](#request-headers) then the [_x-min-v_](#request-headers) header should be treated as absent. If all versions requested are not supported then the data holder **MUST** respond with a `406 Not Acceptable`. See [HTTP Headers](#request-headers).|
|x-min-v|header|string|optional|Minimum version of the API endpoint requested by the client. Must be set to a positive integer if provided. The data holder should respond with the highest supported version between [_x-min-v_](#request-headers) and [_x-v_](#request-headers). If all versions requested are not supported then the data holder **MUST** respond with a `406 Not Acceptable`.|
|x-fapi-interaction-id|header|string|optional|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|x-fapi-auth-date|header|string|conditional|The time when the customer last logged in to the Data Recipient Software Product as described in **[[FAPI-1.0-Baseline]](#nref-FAPI-1-0-Baseline)**. Required for all resource calls (customer present and unattended). Not required for unauthenticated calls.|
|x-fapi-customer-ip-address|header|string|optional|The customer's original IP address if the customer is currently logged in to the data recipient. The presence of this header indicates that the API is being called in a customer present context. Not to be included for unauthenticated calls.|
|x-cds-client-headers|header|[Base64](#common-field-types)|conditional|The customer's original standard http headers [Base64](#common-field-types) encoded, including the original User-Agent header, if the customer is currently logged in to the data recipient. Mandatory for customer present calls. Not required for unattended or unauthenticated calls.|

> Example responses

> 200 Response

```json
{
  "data": {
    "concessions": [
      {
        "type": "CONCESSION",
        "displayName": "string",
        "additionalInfo": "string",
        "additionalInfoUri": "string",
        "startDate": "string",
        "endDate": "string",
        "discountFrequency": "string",
        "amount": "string",
        "percentage": "string",
        "appliedTo": [
          "INVOICE"
        ]
      }
    ]
  },
  "links": {
    "self": "string",
    "first": "string",
    "prev": "string",
    "next": "string",
    "last": "string"
  },
  "meta": {
    "totalRecords": 0,
    "totalPages": 0
  }
}
```

<h3 id="cdr-telco-api_get-telco-concessions_responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[TelcoConcessionsResponse](#schemacdr-telco-apitelcoconcessionsresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Missing Required Field](#error-400-field-missing)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li></ul>|[ResponseErrorListV2](#schemacdr-telco-apiresponseerrorlistv2)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[404 - Unavailable Telco Account](#error-404-unavailable-telco-account)</li><li>[404 - Invalid Telco Account](#error-404-invalid-telco-account)</li></ul>|[ResponseErrorListV2](#schemacdr-telco-apiresponseerrorlistv2)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|[ResponseErrorListV2](#schemacdr-telco-apiresponseerrorlistv2)|

<h3 id="cdr-telco-api_get-telco-concessions_response-headers">Response Headers</h3>

|Status|Header|Type|Description|
|---|---|---|---|---|
|200|x-v|string|The [version](#response-headers) of the API endpoint that the data holder has responded with.|
|200|x-fapi-interaction-id|string|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|400|x-fapi-interaction-id|string|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|404|x-fapi-interaction-id|string|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|406|x-fapi-interaction-id|string|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|

  
    
      <aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
<a href="#authorisation-scopes">telco:accounts.concessions:read.</a>
</aside>

    
  

<h2 id="cdr-telco-api_get-balance-for-telco-account">Get Balance For Telco Account</h2>
<p id="get-balance-for-telco-account" class="orig-anchor"></p>

> Code samples

```http
GET https://mtls.dh.example.com/cds-au/v1/telco/accounts/{accountId}/balance HTTP/1.1
Host: mtls.dh.example.com
Accept: application/json
x-v: string
x-min-v: string
x-fapi-interaction-id: string
x-fapi-auth-date: string
x-fapi-customer-ip-address: string
x-cds-client-headers: string
```

```javascript--nodejs
const fetch = require('node-fetch');
const headers = {
  'Accept':'application/json',
  'x-v':'string',
  'x-min-v':'string',
  'x-fapi-interaction-id':'string',
  'x-fapi-auth-date':'string',
  'x-fapi-customer-ip-address':'string',
  'x-cds-client-headers':'string'
};

fetch('https://mtls.dh.example.com/cds-au/v1/telco/accounts/{accountId}/balance', {
  method: 'GET',
  headers: headers
}).then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

`GET /telco/accounts/{accountId}/balance`

Obtain the current balance for a specific account.

<h3 id="cdr-telco-api_get-balance-for-telco-account_endpoint-version">Endpoint Version</h3>
|   |  |
|---|--|
|Version|**1**

<h3 id="cdr-telco-api_get-balance-for-telco-account_parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|mandatory|ID of a specific account to obtain data for. This is a tokenised ID previously obtained from the Account List endpoint. In accordance with [CDR ID permanence](#id-permanence) requirements.|
|x-v|header|string|mandatory|Version of the API endpoint requested by the client. Must be set to a positive integer. The data holder should respond with the highest supported version between [_x-min-v_](#request-headers) and [_x-v_](#request-headers). If the value of [_x-min-v_](#request-headers) is equal to or higher than the value of [_x-v_](#request-headers) then the [_x-min-v_](#request-headers) header should be treated as absent. If all versions requested are not supported then the data holder **MUST** respond with a `406 Not Acceptable`. See [HTTP Headers](#request-headers).|
|x-min-v|header|string|optional|Minimum version of the API endpoint requested by the client. Must be set to a positive integer if provided. The data holder should respond with the highest supported version between [_x-min-v_](#request-headers) and [_x-v_](#request-headers). If all versions requested are not supported then the data holder **MUST** respond with a `406 Not Acceptable`.|
|x-fapi-interaction-id|header|string|optional|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|x-fapi-auth-date|header|string|conditional|The time when the customer last logged in to the Data Recipient Software Product as described in **[[FAPI-1.0-Baseline]](#nref-FAPI-1-0-Baseline)**. Required for all resource calls (customer present and unattended). Not required for unauthenticated calls.|
|x-fapi-customer-ip-address|header|string|optional|The customer's original IP address if the customer is currently logged in to the data recipient. The presence of this header indicates that the API is being called in a customer present context. Not to be included for unauthenticated calls.|
|x-cds-client-headers|header|[Base64](#common-field-types)|conditional|The customer's original standard http headers [Base64](#common-field-types) encoded, including the original User-Agent header, if the customer is currently logged in to the data recipient. Mandatory for customer present calls. Not required for unattended or unauthenticated calls.|

> Example responses

> 200 Response

```json
{
  "data": {
    "services": [
      {
        "serviceId": "string",
        "displayName": "string",
        "phoneNumber": "string",
        "startDate": "string",
        "endDate": "string",
        "balance": {
          "data": {
            "planType": "METERED",
            "description": "string",
            "upload": 0,
            "download": 0,
            "amount": "string",
            "roaming": {
              "description": "string",
              "download": 0,
              "amount": "string"
            }
          },
          "voice": {
            "planType": "METERED",
            "national": {
              "description": "string",
              "duration": "string",
              "number": 0,
              "amount": "string"
            },
            "international": {
              "description": "string",
              "duration": "string",
              "number": 0,
              "amount": "string"
            },
            "roaming": {
              "description": "string",
              "duration": "string",
              "number": 0,
              "amount": "string"
            }
          },
          "messaging": {
            "planType": "METERED",
            "sms": {
              "description": "string",
              "national": 0,
              "international": 0,
              "roaming": 0,
              "amount": "string"
            },
            "mms": {
              "description": "string",
              "national": 0,
              "international": 0,
              "roaming": 0,
              "amount": "string"
            }
          }
        }
      }
    ]
  },
  "links": {
    "self": "string"
  },
  "meta": {}
}
```

<h3 id="cdr-telco-api_get-balance-for-telco-account_responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[TelcoBalanceResponse](#schemacdr-telco-apitelcobalanceresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Missing Required Field](#error-400-field-missing)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li></ul>|[ResponseErrorListV2](#schemacdr-telco-apiresponseerrorlistv2)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[404 - Unavailable Telco Account](#error-404-unavailable-telco-account)</li><li>[404 - Invalid Telco Account](#error-404-invalid-telco-account)</li></ul>|[ResponseErrorListV2](#schemacdr-telco-apiresponseerrorlistv2)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|[ResponseErrorListV2](#schemacdr-telco-apiresponseerrorlistv2)|

<h3 id="cdr-telco-api_get-balance-for-telco-account_response-headers">Response Headers</h3>

|Status|Header|Type|Description|
|---|---|---|---|---|
|200|x-v|string|The [version](#response-headers) of the API endpoint that the data holder has responded with.|
|200|x-fapi-interaction-id|string|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|400|x-fapi-interaction-id|string|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|404|x-fapi-interaction-id|string|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|406|x-fapi-interaction-id|string|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|

  
    
      <aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
<a href="#authorisation-scopes">telco:billing:read.</a>
</aside>

    
  

<h2 id="cdr-telco-api_get-bulk-telco-balances">Get Bulk Telco Balances</h2>
<p id="get-bulk-telco-balances" class="orig-anchor"></p>

> Code samples

```http
GET https://mtls.dh.example.com/cds-au/v1/telco/accounts/balance HTTP/1.1
Host: mtls.dh.example.com
Accept: application/json
x-v: string
x-min-v: string
x-fapi-interaction-id: string
x-fapi-auth-date: string
x-fapi-customer-ip-address: string
x-cds-client-headers: string
```

```javascript--nodejs
const fetch = require('node-fetch');
const headers = {
  'Accept':'application/json',
  'x-v':'string',
  'x-min-v':'string',
  'x-fapi-interaction-id':'string',
  'x-fapi-auth-date':'string',
  'x-fapi-customer-ip-address':'string',
  'x-cds-client-headers':'string'
};

fetch('https://mtls.dh.example.com/cds-au/v1/telco/accounts/balance', {
  method: 'GET',
  headers: headers
}).then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

`GET /telco/accounts/balance`

Obtain the current balance for all accounts.

<h3 id="cdr-telco-api_get-bulk-telco-balances_endpoint-version">Endpoint Version</h3>
|   |  |
|---|--|
|Version|**1**

<h3 id="cdr-telco-api_get-bulk-telco-balances_parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|[PositiveInteger](#common-field-types)|optional|Page of results to request (standard pagination).|
|page-size|query|[PositiveInteger](#common-field-types)|optional|Page size to request. Default is 25 (standard pagination).|
|x-v|header|string|mandatory|Version of the API endpoint requested by the client. Must be set to a positive integer. The data holder should respond with the highest supported version between [_x-min-v_](#request-headers) and [_x-v_](#request-headers). If the value of [_x-min-v_](#request-headers) is equal to or higher than the value of [_x-v_](#request-headers) then the [_x-min-v_](#request-headers) header should be treated as absent. If all versions requested are not supported then the data holder **MUST** respond with a `406 Not Acceptable`. See [HTTP Headers](#request-headers).|
|x-min-v|header|string|optional|Minimum version of the API endpoint requested by the client. Must be set to a positive integer if provided. The data holder should respond with the highest supported version between [_x-min-v_](#request-headers) and [_x-v_](#request-headers). If all versions requested are not supported then the data holder **MUST** respond with a `406 Not Acceptable`.|
|x-fapi-interaction-id|header|string|optional|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|x-fapi-auth-date|header|string|conditional|The time when the customer last logged in to the Data Recipient Software Product as described in **[[FAPI-1.0-Baseline]](#nref-FAPI-1-0-Baseline)**. Required for all resource calls (customer present and unattended). Not required for unauthenticated calls.|
|x-fapi-customer-ip-address|header|string|optional|The customer's original IP address if the customer is currently logged in to the data recipient. The presence of this header indicates that the API is being called in a customer present context. Not to be included for unauthenticated calls.|
|x-cds-client-headers|header|[Base64](#common-field-types)|conditional|The customer's original standard http headers [Base64](#common-field-types) encoded, including the original User-Agent header, if the customer is currently logged in to the data recipient. Mandatory for customer present calls. Not required for unattended or unauthenticated calls.|

> Example responses

> 200 Response

```json
{
  "data": {
    "balances": [
      {
        "accountId": "string",
        "balance": {
          "services": [
            {
              "serviceId": "string",
              "displayName": "string",
              "phoneNumber": "string",
              "startDate": "string",
              "endDate": "string",
              "balance": {
                "data": {
                  "planType": "METERED",
                  "description": "string",
                  "upload": 0,
                  "download": 0,
                  "amount": "string",
                  "roaming": {
                    "description": "string",
                    "download": 0,
                    "amount": "string"
                  }
                },
                "voice": {
                  "planType": "METERED",
                  "national": {
                    "description": "string",
                    "duration": "string",
                    "number": 0,
                    "amount": "string"
                  },
                  "international": {
                    "description": "string",
                    "duration": "string",
                    "number": 0,
                    "amount": "string"
                  },
                  "roaming": {
                    "description": "string",
                    "duration": "string",
                    "number": 0,
                    "amount": "string"
                  }
                },
                "messaging": {
                  "planType": "METERED",
                  "sms": {
                    "description": "string",
                    "national": 0,
                    "international": 0,
                    "roaming": 0,
                    "amount": "string"
                  },
                  "mms": {
                    "description": "string",
                    "national": 0,
                    "international": 0,
                    "roaming": 0,
                    "amount": "string"
                  }
                }
              }
            }
          ]
        }
      }
    ]
  },
  "links": {
    "self": "string",
    "first": "string",
    "prev": "string",
    "next": "string",
    "last": "string"
  },
  "meta": {
    "totalRecords": 0,
    "totalPages": 0
  }
}
```

<h3 id="cdr-telco-api_get-bulk-telco-balances_responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[TelcoBalanceListResponse](#schemacdr-telco-apitelcobalancelistresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Missing Required Field](#error-400-field-missing)</li><li>[400 - Invalid Page Size](#error-400-field-invalid-page-size)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li></ul>|[ResponseErrorListV2](#schemacdr-telco-apiresponseerrorlistv2)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|[ResponseErrorListV2](#schemacdr-telco-apiresponseerrorlistv2)|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[422 - Invalid Page](#error-422-field-invalid-page)</li></ul>|[ResponseErrorListV2](#schemacdr-telco-apiresponseerrorlistv2)|

<h3 id="cdr-telco-api_get-bulk-telco-balances_response-headers">Response Headers</h3>

|Status|Header|Type|Description|
|---|---|---|---|---|
|200|x-v|string|The [version](#response-headers) of the API endpoint that the data holder has responded with.|
|200|x-fapi-interaction-id|string|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|400|x-fapi-interaction-id|string|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|406|x-fapi-interaction-id|string|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|422|x-fapi-interaction-id|string|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|

  
    
      <aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
<a href="#authorisation-scopes">telco:billing:read.</a>
</aside>

    
  

<h2 id="cdr-telco-api_get-balances-for-specific-telco-accounts">Get Balances For Specific Telco Accounts</h2>
<p id="get-balances-for-specific-telco-accounts" class="orig-anchor"></p>

> Code samples

```http
POST https://mtls.dh.example.com/cds-au/v1/telco/accounts/balance HTTP/1.1
Host: mtls.dh.example.com
Content-Type: application/json
Accept: application/json
x-v: string
x-min-v: string
x-fapi-interaction-id: string
x-fapi-auth-date: string
x-fapi-customer-ip-address: string
x-cds-client-headers: string
```

```javascript--nodejs
const fetch = require('node-fetch');
const inputBody = '{
  "data": {
    "accountIds": [
      "string"
    ]
  },
  "meta": {}
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'x-v':'string',
  'x-min-v':'string',
  'x-fapi-interaction-id':'string',
  'x-fapi-auth-date':'string',
  'x-fapi-customer-ip-address':'string',
  'x-cds-client-headers':'string'
};

fetch('https://mtls.dh.example.com/cds-au/v1/telco/accounts/balance', {
  method: 'POST',
  body: inputBody,
  headers: headers
}).then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

`POST /telco/accounts/balance`

Obtain the current balance for a specified set of accounts.

> Body parameter

```json
{
  "data": {
    "accountIds": [
      "string"
    ]
  },
  "meta": {}
}
```

<h3 id="cdr-telco-api_get-balances-for-specific-telco-accounts_endpoint-version">Endpoint Version</h3>
|   |  |
|---|--|
|Version|**1**

<h3 id="cdr-telco-api_get-balances-for-specific-telco-accounts_parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|[PositiveInteger](#common-field-types)|optional|Page of results to request (standard pagination).|
|page-size|query|[PositiveInteger](#common-field-types)|optional|Page size to request. Default is 25 (standard pagination).|
|x-v|header|string|mandatory|Version of the API endpoint requested by the client. Must be set to a positive integer. The data holder should respond with the highest supported version between [_x-min-v_](#request-headers) and [_x-v_](#request-headers). If the value of [_x-min-v_](#request-headers) is equal to or higher than the value of [_x-v_](#request-headers) then the [_x-min-v_](#request-headers) header should be treated as absent. If all versions requested are not supported then the data holder **MUST** respond with a `406 Not Acceptable`. See [HTTP Headers](#request-headers).|
|x-min-v|header|string|optional|Minimum version of the API endpoint requested by the client. Must be set to a positive integer if provided. The data holder should respond with the highest supported version between [_x-min-v_](#request-headers) and [_x-v_](#request-headers). If all versions requested are not supported then the data holder **MUST** respond with a `406 Not Acceptable`.|
|x-fapi-interaction-id|header|string|optional|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|x-fapi-auth-date|header|string|conditional|The time when the customer last logged in to the Data Recipient Software Product as described in **[[FAPI-1.0-Baseline]](#nref-FAPI-1-0-Baseline)**. Required for all resource calls (customer present and unattended). Not required for unauthenticated calls.|
|x-fapi-customer-ip-address|header|string|optional|The customer's original IP address if the customer is currently logged in to the data recipient. The presence of this header indicates that the API is being called in a customer present context. Not to be included for unauthenticated calls.|
|x-cds-client-headers|header|[Base64](#common-field-types)|conditional|The customer's original standard http headers [Base64](#common-field-types) encoded, including the original User-Agent header, if the customer is currently logged in to the data recipient. Mandatory for customer present calls. Not required for unattended or unauthenticated calls.|
|body|body|[accountIdList](#schemacdr-telco-apiaccountidlist)|mandatory|Request payload containing list of specific Accounts to obtain data for.|
|» data|body|object|mandatory|none|
|»» accountIds|body|[string]|mandatory|Array of specific _accountId_ values to obtain data for. In accordance with [CDR ID permanence](#id-permanence) requirements.|
|» meta|body|[Meta](#schemacdr-telco-apimeta)|mandatory|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "balances": [
      {
        "accountId": "string",
        "balance": {
          "services": [
            {
              "serviceId": "string",
              "displayName": "string",
              "phoneNumber": "string",
              "startDate": "string",
              "endDate": "string",
              "balance": {
                "data": {
                  "planType": "METERED",
                  "description": "string",
                  "upload": 0,
                  "download": 0,
                  "amount": "string",
                  "roaming": {
                    "description": "string",
                    "download": 0,
                    "amount": "string"
                  }
                },
                "voice": {
                  "planType": "METERED",
                  "national": {
                    "description": "string",
                    "duration": "string",
                    "number": 0,
                    "amount": "string"
                  },
                  "international": {
                    "description": "string",
                    "duration": "string",
                    "number": 0,
                    "amount": "string"
                  },
                  "roaming": {
                    "description": "string",
                    "duration": "string",
                    "number": 0,
                    "amount": "string"
                  }
                },
                "messaging": {
                  "planType": "METERED",
                  "sms": {
                    "description": "string",
                    "national": 0,
                    "international": 0,
                    "roaming": 0,
                    "amount": "string"
                  },
                  "mms": {
                    "description": "string",
                    "national": 0,
                    "international": 0,
                    "roaming": 0,
                    "amount": "string"
                  }
                }
              }
            }
          ]
        }
      }
    ]
  },
  "links": {
    "self": "string",
    "first": "string",
    "prev": "string",
    "next": "string",
    "last": "string"
  },
  "meta": {
    "totalRecords": 0,
    "totalPages": 0
  }
}
```

<h3 id="cdr-telco-api_get-balances-for-specific-telco-accounts_responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[TelcoBalanceListResponse](#schemacdr-telco-apitelcobalancelistresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Missing Required Field](#error-400-field-missing)</li><li>[400 - Invalid Page Size](#error-400-field-invalid-page-size)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li></ul>|[ResponseErrorListV2](#schemacdr-telco-apiresponseerrorlistv2)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|[ResponseErrorListV2](#schemacdr-telco-apiresponseerrorlistv2)|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[422 - Invalid Page](#error-422-field-invalid-page)</li><li>[422 - Unavailable Telco Account](#error-422-unavailable-telco-account)</li><li>[422 - Invalid Telco Account](#error-422-invalid-telco-account)</li></ul>|[ResponseErrorListV2](#schemacdr-telco-apiresponseerrorlistv2)|

<h3 id="cdr-telco-api_get-balances-for-specific-telco-accounts_response-headers">Response Headers</h3>

|Status|Header|Type|Description|
|---|---|---|---|---|
|200|x-v|string|The [version](#response-headers) of the API endpoint that the data holder has responded with.|
|200|x-fapi-interaction-id|string|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|400|x-fapi-interaction-id|string|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|406|x-fapi-interaction-id|string|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|422|x-fapi-interaction-id|string|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|

  
    
      <aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
<a href="#authorisation-scopes">telco:billing:read.</a>
</aside>

    
  

<h2 id="cdr-telco-api_get-invoices-for-telco-account">Get Invoices For Telco Account</h2>
<p id="get-invoices-for-telco-account" class="orig-anchor"></p>

> Code samples

```http
GET https://mtls.dh.example.com/cds-au/v1/telco/accounts/{accountId}/invoices HTTP/1.1
Host: mtls.dh.example.com
Accept: application/json
x-v: string
x-min-v: string
x-fapi-interaction-id: string
x-fapi-auth-date: string
x-fapi-customer-ip-address: string
x-cds-client-headers: string
```

```javascript--nodejs
const fetch = require('node-fetch');
const headers = {
  'Accept':'application/json',
  'x-v':'string',
  'x-min-v':'string',
  'x-fapi-interaction-id':'string',
  'x-fapi-auth-date':'string',
  'x-fapi-customer-ip-address':'string',
  'x-cds-client-headers':'string'
};

fetch('https://mtls.dh.example.com/cds-au/v1/telco/accounts/{accountId}/invoices', {
  method: 'GET',
  headers: headers
}).then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

`GET /telco/accounts/{accountId}/invoices`

Obtain the invoices for a specific account.

<h3 id="cdr-telco-api_get-invoices-for-telco-account_endpoint-version">Endpoint Version</h3>
|   |  |
|---|--|
|Version|**1**

<h3 id="cdr-telco-api_get-invoices-for-telco-account_parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|mandatory|ID of a specific account to obtain data for. This is a tokenised ID previously obtained from the Account List endpoint. In accordance with [CDR ID permanence](#id-permanence) requirements.|
|x-v|header|string|mandatory|Version of the API endpoint requested by the client. Must be set to a positive integer. The data holder should respond with the highest supported version between [_x-min-v_](#request-headers) and [_x-v_](#request-headers). If the value of [_x-min-v_](#request-headers) is equal to or higher than the value of [_x-v_](#request-headers) then the [_x-min-v_](#request-headers) header should be treated as absent. If all versions requested are not supported then the data holder **MUST** respond with a `406 Not Acceptable`. See [HTTP Headers](#request-headers).|
|x-min-v|header|string|optional|Minimum version of the API endpoint requested by the client. Must be set to a positive integer if provided. The data holder should respond with the highest supported version between [_x-min-v_](#request-headers) and [_x-v_](#request-headers). If all versions requested are not supported then the data holder **MUST** respond with a `406 Not Acceptable`.|
|x-fapi-interaction-id|header|string|optional|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|x-fapi-auth-date|header|string|conditional|The time when the customer last logged in to the Data Recipient Software Product as described in **[[FAPI-1.0-Baseline]](#nref-FAPI-1-0-Baseline)**. Required for all resource calls (customer present and unattended). Not required for unauthenticated calls.|
|x-fapi-customer-ip-address|header|string|optional|The customer's original IP address if the customer is currently logged in to the data recipient. The presence of this header indicates that the API is being called in a customer present context. Not to be included for unauthenticated calls.|
|x-cds-client-headers|header|[Base64](#common-field-types)|conditional|The customer's original standard http headers [Base64](#common-field-types) encoded, including the original User-Agent header, if the customer is currently logged in to the data recipient. Mandatory for customer present calls. Not required for unattended or unauthenticated calls.|

> Example responses

> 200 Response

```json
{
  "data": {
    "invoices": [
      {
        "accountId": "string",
        "invoiceNumber": "string",
        "issueDate": "string",
        "dueDate": "string",
        "period": {
          "startDate": "string",
          "endDate": "string"
        },
        "invoiceAmount": "string",
        "gstAmount": "string",
        "payOnTimeDiscount": {
          "discountAmount": "string",
          "gstAmount": "string",
          "date": "string"
        },
        "balanceAtIssue": "string",
        "services": [
          "string"
        ],
        "accountCharges": {
          "totalUsageCharges": "string",
          "totalOnceOffCharges": "string",
          "totalDiscounts": "string",
          "otherCharges": {
            "amount": "string",
            "description": "string",
            "type": "SERVICE"
          },
          "totalGst": "string"
        },
        "accountUsage": {
          "data": {
            "upload": 0,
            "download": 0,
            "sessions": 0,
            "amount": "string",
            "roaming": {
              "download": 0,
              "amount": "string"
            }
          },
          "voice": {
            "national": {
              "duration": "string",
              "number": 0,
              "amount": "string"
            },
            "international": {
              "duration": "string",
              "number": 0,
              "amount": "string"
            },
            "roaming": {
              "duration": "string",
              "number": 0,
              "amount": "string"
            }
          },
          "messaging": {
            "sms": {
              "national": 0,
              "international": 0,
              "roaming": 0,
              "amount": "string"
            },
            "mms": {
              "national": 0,
              "international": 0,
              "roaming": 0,
              "amount": "string"
            }
          }
        },
        "paymentStatus": "PAID"
      }
    ]
  },
  "links": {
    "self": "string"
  },
  "meta": {}
}
```

<h3 id="cdr-telco-api_get-invoices-for-telco-account_responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[TelcoInvoiceResponse](#schemacdr-telco-apitelcoinvoiceresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Missing Required Field](#error-400-field-missing)</li><li>[400 - Invalid Page Size](#error-400-field-invalid-page-size)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li></ul>|[ResponseErrorListV2](#schemacdr-telco-apiresponseerrorlistv2)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[404 - Unavailable Telco Account](#error-404-unavailable-telco-account)</li><li>[404 - Invalid Telco Account](#error-404-invalid-telco-account)</li></ul>|[ResponseErrorListV2](#schemacdr-telco-apiresponseerrorlistv2)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|[ResponseErrorListV2](#schemacdr-telco-apiresponseerrorlistv2)|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[422 - Invalid Page](#error-422-field-invalid-page)</li></ul>|[ResponseErrorListV2](#schemacdr-telco-apiresponseerrorlistv2)|

<h3 id="cdr-telco-api_get-invoices-for-telco-account_response-headers">Response Headers</h3>

|Status|Header|Type|Description|
|---|---|---|---|---|
|200|x-v|string|The [version](#response-headers) of the API endpoint that the data holder has responded with.|
|200|x-fapi-interaction-id|string|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|400|x-fapi-interaction-id|string|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|404|x-fapi-interaction-id|string|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|406|x-fapi-interaction-id|string|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|422|x-fapi-interaction-id|string|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|

  
    
      <aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
<a href="#authorisation-scopes">telco:billing:read.</a>
</aside>

    
  

<h2 id="cdr-telco-api_get-telco-invoices">Get Telco Invoices</h2>
<p id="get-telco-invoices" class="orig-anchor"></p>

> Code samples

```http
GET https://mtls.dh.example.com/cds-au/v1/telco/accounts/invoices HTTP/1.1
Host: mtls.dh.example.com
Accept: application/json
x-v: string
x-min-v: string
x-fapi-interaction-id: string
x-fapi-auth-date: string
x-fapi-customer-ip-address: string
x-cds-client-headers: string
```

```javascript--nodejs
const fetch = require('node-fetch');
const headers = {
  'Accept':'application/json',
  'x-v':'string',
  'x-min-v':'string',
  'x-fapi-interaction-id':'string',
  'x-fapi-auth-date':'string',
  'x-fapi-customer-ip-address':'string',
  'x-cds-client-headers':'string'
};

fetch('https://mtls.dh.example.com/cds-au/v1/telco/accounts/invoices', {
  method: 'GET',
  headers: headers
}).then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

`GET /telco/accounts/invoices`

Obtain the invoices for all accounts.

<h3 id="cdr-telco-api_get-telco-invoices_endpoint-version">Endpoint Version</h3>
|   |  |
|---|--|
|Version|**1**

<h3 id="cdr-telco-api_get-telco-invoices_parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|newest-date|query|[DateString](#common-field-types)|optional|Constrain the request to records with effective date at or before this date. If absent defaults to current date. Format is aligned to DateString common type.|
|oldest-date|query|[DateString](#common-field-types)|optional|Constrain the request to records with effective date at or after this date. If absent defaults to _newest-date_ minus 24 months. Format is aligned to DateString common type.|
|page|query|[PositiveInteger](#common-field-types)|optional|Page of results to request (standard pagination).|
|page-size|query|[PositiveInteger](#common-field-types)|optional|Page size to request. Default is 25 (standard pagination).|
|x-v|header|string|mandatory|Version of the API endpoint requested by the client. Must be set to a positive integer. The data holder should respond with the highest supported version between [_x-min-v_](#request-headers) and [_x-v_](#request-headers). If the value of [_x-min-v_](#request-headers) is equal to or higher than the value of [_x-v_](#request-headers) then the [_x-min-v_](#request-headers) header should be treated as absent. If all versions requested are not supported then the data holder **MUST** respond with a `406 Not Acceptable`. See [HTTP Headers](#request-headers).|
|x-min-v|header|string|optional|Minimum version of the API endpoint requested by the client. Must be set to a positive integer if provided. The data holder should respond with the highest supported version between [_x-min-v_](#request-headers) and [_x-v_](#request-headers). If all versions requested are not supported then the data holder **MUST** respond with a `406 Not Acceptable`.|
|x-fapi-interaction-id|header|string|optional|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|x-fapi-auth-date|header|string|conditional|The time when the customer last logged in to the Data Recipient Software Product as described in **[[FAPI-1.0-Baseline]](#nref-FAPI-1-0-Baseline)**. Required for all resource calls (customer present and unattended). Not required for unauthenticated calls.|
|x-fapi-customer-ip-address|header|string|optional|The customer's original IP address if the customer is currently logged in to the data recipient. The presence of this header indicates that the API is being called in a customer present context. Not to be included for unauthenticated calls.|
|x-cds-client-headers|header|[Base64](#common-field-types)|conditional|The customer's original standard http headers [Base64](#common-field-types) encoded, including the original User-Agent header, if the customer is currently logged in to the data recipient. Mandatory for customer present calls. Not required for unattended or unauthenticated calls.|

> Example responses

> 200 Response

```json
{
  "data": {
    "invoices": [
      {
        "accountId": "string",
        "invoiceNumber": "string",
        "issueDate": "string",
        "dueDate": "string",
        "period": {
          "startDate": "string",
          "endDate": "string"
        },
        "invoiceAmount": "string",
        "gstAmount": "string",
        "payOnTimeDiscount": {
          "discountAmount": "string",
          "gstAmount": "string",
          "date": "string"
        },
        "balanceAtIssue": "string",
        "services": [
          "string"
        ],
        "accountCharges": {
          "totalUsageCharges": "string",
          "totalOnceOffCharges": "string",
          "totalDiscounts": "string",
          "otherCharges": {
            "amount": "string",
            "description": "string",
            "type": "SERVICE"
          },
          "totalGst": "string"
        },
        "accountUsage": {
          "data": {
            "upload": 0,
            "download": 0,
            "sessions": 0,
            "amount": "string",
            "roaming": {
              "download": 0,
              "amount": "string"
            }
          },
          "voice": {
            "national": {
              "duration": "string",
              "number": 0,
              "amount": "string"
            },
            "international": {
              "duration": "string",
              "number": 0,
              "amount": "string"
            },
            "roaming": {
              "duration": "string",
              "number": 0,
              "amount": "string"
            }
          },
          "messaging": {
            "sms": {
              "national": 0,
              "international": 0,
              "roaming": 0,
              "amount": "string"
            },
            "mms": {
              "national": 0,
              "international": 0,
              "roaming": 0,
              "amount": "string"
            }
          }
        },
        "paymentStatus": "PAID"
      }
    ]
  },
  "links": {
    "self": "string",
    "first": "string",
    "prev": "string",
    "next": "string",
    "last": "string"
  },
  "meta": {
    "totalRecords": 0,
    "totalPages": 0
  }
}
```

<h3 id="cdr-telco-api_get-telco-invoices_responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[TelcoInvoiceListResponse](#schemacdr-telco-apitelcoinvoicelistresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Missing Required Field](#error-400-field-missing)</li><li>[400 - Invalid Page Size](#error-400-field-invalid-page-size)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li></ul>|[ResponseErrorListV2](#schemacdr-telco-apiresponseerrorlistv2)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|[ResponseErrorListV2](#schemacdr-telco-apiresponseerrorlistv2)|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[422 - Invalid Page](#error-422-field-invalid-page)</li></ul>|[ResponseErrorListV2](#schemacdr-telco-apiresponseerrorlistv2)|

<h3 id="cdr-telco-api_get-telco-invoices_response-headers">Response Headers</h3>

|Status|Header|Type|Description|
|---|---|---|---|---|
|200|x-v|string|The [version](#response-headers) of the API endpoint that the data holder has responded with.|
|200|x-fapi-interaction-id|string|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|400|x-fapi-interaction-id|string|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|406|x-fapi-interaction-id|string|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|422|x-fapi-interaction-id|string|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|

  
    
      <aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
<a href="#authorisation-scopes">telco:billing:read.</a>
</aside>

    
  

<h2 id="cdr-telco-api_get-invoices-for-specific-telco-accounts">Get Invoices For Specific Telco Accounts</h2>
<p id="get-invoices-for-specific-telco-accounts" class="orig-anchor"></p>

> Code samples

```http
POST https://mtls.dh.example.com/cds-au/v1/telco/accounts/invoices HTTP/1.1
Host: mtls.dh.example.com
Content-Type: application/json
Accept: application/json
x-v: string
x-min-v: string
x-fapi-interaction-id: string
x-fapi-auth-date: string
x-fapi-customer-ip-address: string
x-cds-client-headers: string
```

```javascript--nodejs
const fetch = require('node-fetch');
const inputBody = '{
  "data": {
    "accountIds": [
      "string"
    ]
  },
  "meta": {}
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'x-v':'string',
  'x-min-v':'string',
  'x-fapi-interaction-id':'string',
  'x-fapi-auth-date':'string',
  'x-fapi-customer-ip-address':'string',
  'x-cds-client-headers':'string'
};

fetch('https://mtls.dh.example.com/cds-au/v1/telco/accounts/invoices', {
  method: 'POST',
  body: inputBody,
  headers: headers
}).then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

`POST /telco/accounts/invoices`

Obtain invoices for a specified set of accounts.

> Body parameter

```json
{
  "data": {
    "accountIds": [
      "string"
    ]
  },
  "meta": {}
}
```

<h3 id="cdr-telco-api_get-invoices-for-specific-telco-accounts_endpoint-version">Endpoint Version</h3>
|   |  |
|---|--|
|Version|**1**

<h3 id="cdr-telco-api_get-invoices-for-specific-telco-accounts_parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|newest-date|query|[DateString](#common-field-types)|optional|Constrain the request to records with effective date at or before this date. If absent defaults to current date. Format is aligned to DateString common type.|
|oldest-date|query|[DateString](#common-field-types)|optional|Constrain the request to records with effective date at or after this date. If absent defaults to _newest-date_ minus 24 months. Format is aligned to DateString common type.|
|page|query|[PositiveInteger](#common-field-types)|optional|Page of results to request (standard pagination).|
|page-size|query|[PositiveInteger](#common-field-types)|optional|Page size to request. Default is 25 (standard pagination).|
|x-v|header|string|mandatory|Version of the API endpoint requested by the client. Must be set to a positive integer. The data holder should respond with the highest supported version between [_x-min-v_](#request-headers) and [_x-v_](#request-headers). If the value of [_x-min-v_](#request-headers) is equal to or higher than the value of [_x-v_](#request-headers) then the [_x-min-v_](#request-headers) header should be treated as absent. If all versions requested are not supported then the data holder **MUST** respond with a `406 Not Acceptable`. See [HTTP Headers](#request-headers).|
|x-min-v|header|string|optional|Minimum version of the API endpoint requested by the client. Must be set to a positive integer if provided. The data holder should respond with the highest supported version between [_x-min-v_](#request-headers) and [_x-v_](#request-headers). If all versions requested are not supported then the data holder **MUST** respond with a `406 Not Acceptable`.|
|x-fapi-interaction-id|header|string|optional|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|x-fapi-auth-date|header|string|conditional|The time when the customer last logged in to the Data Recipient Software Product as described in **[[FAPI-1.0-Baseline]](#nref-FAPI-1-0-Baseline)**. Required for all resource calls (customer present and unattended). Not required for unauthenticated calls.|
|x-fapi-customer-ip-address|header|string|optional|The customer's original IP address if the customer is currently logged in to the data recipient. The presence of this header indicates that the API is being called in a customer present context. Not to be included for unauthenticated calls.|
|x-cds-client-headers|header|[Base64](#common-field-types)|conditional|The customer's original standard http headers [Base64](#common-field-types) encoded, including the original User-Agent header, if the customer is currently logged in to the data recipient. Mandatory for customer present calls. Not required for unattended or unauthenticated calls.|
|body|body|[accountIdList](#schemacdr-telco-apiaccountidlist)|mandatory|Request payload containing list of specific Accounts to obtain data for.|
|» data|body|object|mandatory|none|
|»» accountIds|body|[string]|mandatory|Array of specific _accountId_ values to obtain data for. In accordance with [CDR ID permanence](#id-permanence) requirements.|
|» meta|body|[Meta](#schemacdr-telco-apimeta)|mandatory|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "invoices": [
      {
        "accountId": "string",
        "invoiceNumber": "string",
        "issueDate": "string",
        "dueDate": "string",
        "period": {
          "startDate": "string",
          "endDate": "string"
        },
        "invoiceAmount": "string",
        "gstAmount": "string",
        "payOnTimeDiscount": {
          "discountAmount": "string",
          "gstAmount": "string",
          "date": "string"
        },
        "balanceAtIssue": "string",
        "services": [
          "string"
        ],
        "accountCharges": {
          "totalUsageCharges": "string",
          "totalOnceOffCharges": "string",
          "totalDiscounts": "string",
          "otherCharges": {
            "amount": "string",
            "description": "string",
            "type": "SERVICE"
          },
          "totalGst": "string"
        },
        "accountUsage": {
          "data": {
            "upload": 0,
            "download": 0,
            "sessions": 0,
            "amount": "string",
            "roaming": {
              "download": 0,
              "amount": "string"
            }
          },
          "voice": {
            "national": {
              "duration": "string",
              "number": 0,
              "amount": "string"
            },
            "international": {
              "duration": "string",
              "number": 0,
              "amount": "string"
            },
            "roaming": {
              "duration": "string",
              "number": 0,
              "amount": "string"
            }
          },
          "messaging": {
            "sms": {
              "national": 0,
              "international": 0,
              "roaming": 0,
              "amount": "string"
            },
            "mms": {
              "national": 0,
              "international": 0,
              "roaming": 0,
              "amount": "string"
            }
          }
        },
        "paymentStatus": "PAID"
      }
    ]
  },
  "links": {
    "self": "string",
    "first": "string",
    "prev": "string",
    "next": "string",
    "last": "string"
  },
  "meta": {
    "totalRecords": 0,
    "totalPages": 0
  }
}
```

<h3 id="cdr-telco-api_get-invoices-for-specific-telco-accounts_responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[TelcoInvoiceListResponse](#schemacdr-telco-apitelcoinvoicelistresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Missing Required Field](#error-400-field-missing)</li><li>[400 - Invalid Page Size](#error-400-field-invalid-page-size)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li></ul>|[ResponseErrorListV2](#schemacdr-telco-apiresponseerrorlistv2)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|[ResponseErrorListV2](#schemacdr-telco-apiresponseerrorlistv2)|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[422 - Invalid Page](#error-422-field-invalid-page)</li><li>[422 - Unavailable Telco Account](#error-422-unavailable-telco-account)</li><li>[422 - Invalid Telco Account](#error-422-invalid-telco-account)</li></ul>|[ResponseErrorListV2](#schemacdr-telco-apiresponseerrorlistv2)|

<h3 id="cdr-telco-api_get-invoices-for-specific-telco-accounts_response-headers">Response Headers</h3>

|Status|Header|Type|Description|
|---|---|---|---|---|
|200|x-v|string|The [version](#response-headers) of the API endpoint that the data holder has responded with.|
|200|x-fapi-interaction-id|string|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|400|x-fapi-interaction-id|string|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|406|x-fapi-interaction-id|string|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|422|x-fapi-interaction-id|string|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|

  
    
      <aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
<a href="#authorisation-scopes">telco:billing:read.</a>
</aside>

    
  

<h2 id="cdr-telco-api_get-transactions-for-telco-account">Get Transactions For Telco Account</h2>
<p id="get-transactions-for-telco-account" class="orig-anchor"></p>

> Code samples

```http
GET https://mtls.dh.example.com/cds-au/v1/telco/accounts/{accountId}/transactions HTTP/1.1
Host: mtls.dh.example.com
Accept: application/json
x-v: string
x-min-v: string
x-fapi-interaction-id: string
x-fapi-auth-date: string
x-fapi-customer-ip-address: string
x-cds-client-headers: string
```

```javascript--nodejs
const fetch = require('node-fetch');
const headers = {
  'Accept':'application/json',
  'x-v':'string',
  'x-min-v':'string',
  'x-fapi-interaction-id':'string',
  'x-fapi-auth-date':'string',
  'x-fapi-customer-ip-address':'string',
  'x-cds-client-headers':'string'
};

fetch('https://mtls.dh.example.com/cds-au/v1/telco/accounts/{accountId}/transactions', {
  method: 'GET',
  headers: headers
}).then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

`GET /telco/accounts/{accountId}/transactions`

Obtain the billing transactions for a specific account.

<h3 id="cdr-telco-api_get-transactions-for-telco-account_endpoint-version">Endpoint Version</h3>
|   |  |
|---|--|
|Version|**1**

<h3 id="cdr-telco-api_get-transactions-for-telco-account_parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|mandatory|ID of a specific account to obtain data for. This is a tokenised ID previously obtained from the Account List endpoint. In accordance with [CDR ID permanence](#id-permanence) requirements.|
|newest-time|query|[DateTimeString](#common-field-types)|optional|Constrain the request to records with effective time at or before this date/time. If absent defaults to current date/time. Format is aligned to DateTimeString common type.|
|oldest-time|query|[DateTimeString](#common-field-types)|optional|Constrain the request to records with effective time at or after this date/time. If absent defaults to _newest-time_ minus 12 months. Format is aligned to DateTimeString common type.|
|page|query|[PositiveInteger](#common-field-types)|optional|Page of results to request (standard pagination).|
|page-size|query|[PositiveInteger](#common-field-types)|optional|Page size to request. Default is 25 (standard pagination).|
|x-v|header|string|mandatory|Version of the API endpoint requested by the client. Must be set to a positive integer. The data holder should respond with the highest supported version between [_x-min-v_](#request-headers) and [_x-v_](#request-headers). If the value of [_x-min-v_](#request-headers) is equal to or higher than the value of [_x-v_](#request-headers) then the [_x-min-v_](#request-headers) header should be treated as absent. If all versions requested are not supported then the data holder **MUST** respond with a `406 Not Acceptable`. See [HTTP Headers](#request-headers).|
|x-min-v|header|string|optional|Minimum version of the API endpoint requested by the client. Must be set to a positive integer if provided. The data holder should respond with the highest supported version between [_x-min-v_](#request-headers) and [_x-v_](#request-headers). If all versions requested are not supported then the data holder **MUST** respond with a `406 Not Acceptable`.|
|x-fapi-interaction-id|header|string|optional|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|x-fapi-auth-date|header|string|conditional|The time when the customer last logged in to the Data Recipient Software Product as described in **[[FAPI-1.0-Baseline]](#nref-FAPI-1-0-Baseline)**. Required for all resource calls (customer present and unattended). Not required for unauthenticated calls.|
|x-fapi-customer-ip-address|header|string|optional|The customer's original IP address if the customer is currently logged in to the data recipient. The presence of this header indicates that the API is being called in a customer present context. Not to be included for unauthenticated calls.|
|x-cds-client-headers|header|[Base64](#common-field-types)|conditional|The customer's original standard http headers [Base64](#common-field-types) encoded, including the original User-Agent header, if the customer is currently logged in to the data recipient. Mandatory for customer present calls. Not required for unattended or unauthenticated calls.|

> Example responses

> 200 Response

```json
{
  "data": {
    "transactions": [
      {
        "accountId": "string",
        "executionDateTime": "string",
        "gst": "string",
        "transactionUType": "account",
        "account": {
          "serviceIds": "string",
          "invoiceNumber": "string",
          "description": "string",
          "startDate": "string",
          "endDate": "string",
          "amount": "string",
          "adjustments": [
            {
              "amount": "string",
              "description": "string"
            }
          ]
        },
        "onceOff": {
          "serviceId": "string",
          "invoiceNumber": "string",
          "amount": "string",
          "description": "string"
        },
        "otherCharges": {
          "serviceId": "string",
          "invoiceNumber": "string",
          "startDate": "string",
          "endDate": "string",
          "type": "SERVICE",
          "amount": "string",
          "description": "string",
          "adjustments": [
            {
              "amount": "string",
              "description": "string"
            }
          ]
        },
        "payment": {
          "amount": "string",
          "method": "DIRECT_DEBIT"
        }
      }
    ]
  },
  "links": {
    "self": "string",
    "first": "string",
    "prev": "string",
    "next": "string",
    "last": "string"
  },
  "meta": {
    "totalRecords": 0,
    "totalPages": 0
  }
}
```

<h3 id="cdr-telco-api_get-transactions-for-telco-account_responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[TelcoTransactionListResponse](#schemacdr-telco-apitelcotransactionlistresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Missing Required Field](#error-400-field-missing)</li><li>[400 - Invalid Page Size](#error-400-field-invalid-page-size)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li></ul>|[ResponseErrorListV2](#schemacdr-telco-apiresponseerrorlistv2)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[404 - Unavailable Telco Account](#error-404-unavailable-telco-account)</li><li>[404 - Invalid Telco Account](#error-404-invalid-telco-account)</li></ul>|[ResponseErrorListV2](#schemacdr-telco-apiresponseerrorlistv2)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|[ResponseErrorListV2](#schemacdr-telco-apiresponseerrorlistv2)|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[422 - Invalid Page](#error-422-field-invalid-page)</li></ul>|[ResponseErrorListV2](#schemacdr-telco-apiresponseerrorlistv2)|

<h3 id="cdr-telco-api_get-transactions-for-telco-account_response-headers">Response Headers</h3>

|Status|Header|Type|Description|
|---|---|---|---|---|
|200|x-v|string|The [version](#response-headers) of the API endpoint that the data holder has responded with.|
|200|x-fapi-interaction-id|string|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|400|x-fapi-interaction-id|string|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|404|x-fapi-interaction-id|string|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|406|x-fapi-interaction-id|string|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|422|x-fapi-interaction-id|string|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|

  
    
      <aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
<a href="#authorisation-scopes">telco:billing:read.</a>
</aside>

    
  

<h2 id="cdr-telco-api_get-telco-transactions">Get Telco Transactions</h2>
<p id="get-telco-transactions" class="orig-anchor"></p>

> Code samples

```http
GET https://mtls.dh.example.com/cds-au/v1/telco/accounts/transactions HTTP/1.1
Host: mtls.dh.example.com
Accept: application/json
x-v: string
x-min-v: string
x-fapi-interaction-id: string
x-fapi-auth-date: string
x-fapi-customer-ip-address: string
x-cds-client-headers: string
```

```javascript--nodejs
const fetch = require('node-fetch');
const headers = {
  'Accept':'application/json',
  'x-v':'string',
  'x-min-v':'string',
  'x-fapi-interaction-id':'string',
  'x-fapi-auth-date':'string',
  'x-fapi-customer-ip-address':'string',
  'x-cds-client-headers':'string'
};

fetch('https://mtls.dh.example.com/cds-au/v1/telco/accounts/transactions', {
  method: 'GET',
  headers: headers
}).then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

`GET /telco/accounts/transactions`

Obtain billing transactions for all accounts.

<h3 id="cdr-telco-api_get-telco-transactions_endpoint-version">Endpoint Version</h3>
|   |  |
|---|--|
|Version|**1**

<h3 id="cdr-telco-api_get-telco-transactions_parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|newest-time|query|[DateTimeString](#common-field-types)|optional|Constrain the request to records with effective time at or before this date/time. If absent defaults to current date/time. Format is aligned to DateTimeString common type.|
|oldest-time|query|[DateTimeString](#common-field-types)|optional|Constrain the request to records with effective time at or after this date/time. If absent defaults to _newest-time_ minus 12 months. Format is aligned to DateTimeString common type.|
|page|query|[PositiveInteger](#common-field-types)|optional|Page of results to request (standard pagination).|
|page-size|query|[PositiveInteger](#common-field-types)|optional|Page size to request. Default is 25 (standard pagination).|
|x-v|header|string|mandatory|Version of the API endpoint requested by the client. Must be set to a positive integer. The data holder should respond with the highest supported version between [_x-min-v_](#request-headers) and [_x-v_](#request-headers). If the value of [_x-min-v_](#request-headers) is equal to or higher than the value of [_x-v_](#request-headers) then the [_x-min-v_](#request-headers) header should be treated as absent. If all versions requested are not supported then the data holder **MUST** respond with a `406 Not Acceptable`. See [HTTP Headers](#request-headers).|
|x-min-v|header|string|optional|Minimum version of the API endpoint requested by the client. Must be set to a positive integer if provided. The data holder should respond with the highest supported version between [_x-min-v_](#request-headers) and [_x-v_](#request-headers). If all versions requested are not supported then the data holder **MUST** respond with a `406 Not Acceptable`.|
|x-fapi-interaction-id|header|string|optional|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|x-fapi-auth-date|header|string|conditional|The time when the customer last logged in to the Data Recipient Software Product as described in **[[FAPI-1.0-Baseline]](#nref-FAPI-1-0-Baseline)**. Required for all resource calls (customer present and unattended). Not required for unauthenticated calls.|
|x-fapi-customer-ip-address|header|string|optional|The customer's original IP address if the customer is currently logged in to the data recipient. The presence of this header indicates that the API is being called in a customer present context. Not to be included for unauthenticated calls.|
|x-cds-client-headers|header|[Base64](#common-field-types)|conditional|The customer's original standard http headers [Base64](#common-field-types) encoded, including the original User-Agent header, if the customer is currently logged in to the data recipient. Mandatory for customer present calls. Not required for unattended or unauthenticated calls.|

> Example responses

> 200 Response

```json
{
  "data": {
    "transactions": [
      {
        "accountId": "string",
        "executionDateTime": "string",
        "gst": "string",
        "transactionUType": "account",
        "account": {
          "serviceIds": "string",
          "invoiceNumber": "string",
          "description": "string",
          "startDate": "string",
          "endDate": "string",
          "amount": "string",
          "adjustments": [
            {
              "amount": "string",
              "description": "string"
            }
          ]
        },
        "onceOff": {
          "serviceId": "string",
          "invoiceNumber": "string",
          "amount": "string",
          "description": "string"
        },
        "otherCharges": {
          "serviceId": "string",
          "invoiceNumber": "string",
          "startDate": "string",
          "endDate": "string",
          "type": "SERVICE",
          "amount": "string",
          "description": "string",
          "adjustments": [
            {
              "amount": "string",
              "description": "string"
            }
          ]
        },
        "payment": {
          "amount": "string",
          "method": "DIRECT_DEBIT"
        }
      }
    ]
  },
  "links": {
    "self": "string",
    "first": "string",
    "prev": "string",
    "next": "string",
    "last": "string"
  },
  "meta": {
    "totalRecords": 0,
    "totalPages": 0
  }
}
```

<h3 id="cdr-telco-api_get-telco-transactions_responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[TelcoTransactionListResponse](#schemacdr-telco-apitelcotransactionlistresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Missing Required Field](#error-400-field-missing)</li><li>[400 - Invalid Page Size](#error-400-field-invalid-page-size)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li></ul>|[ResponseErrorListV2](#schemacdr-telco-apiresponseerrorlistv2)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|[ResponseErrorListV2](#schemacdr-telco-apiresponseerrorlistv2)|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[422 - Invalid Page](#error-422-field-invalid-page)</li></ul>|[ResponseErrorListV2](#schemacdr-telco-apiresponseerrorlistv2)|

<h3 id="cdr-telco-api_get-telco-transactions_response-headers">Response Headers</h3>

|Status|Header|Type|Description|
|---|---|---|---|---|
|200|x-v|string|The [version](#response-headers) of the API endpoint that the data holder has responded with.|
|200|x-fapi-interaction-id|string|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|400|x-fapi-interaction-id|string|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|406|x-fapi-interaction-id|string|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|422|x-fapi-interaction-id|string|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|

  
    
      <aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
<a href="#authorisation-scopes">telco:billing:read.</a>
</aside>

    
  

<h2 id="cdr-telco-api_get-transactions-for-specific-telco-accounts">Get Transactions For Specific Telco Accounts</h2>
<p id="get-transactions-for-specific-telco-accounts" class="orig-anchor"></p>

> Code samples

```http
POST https://mtls.dh.example.com/cds-au/v1/telco/accounts/transactions HTTP/1.1
Host: mtls.dh.example.com
Content-Type: application/json
Accept: application/json
x-v: string
x-min-v: string
x-fapi-interaction-id: string
x-fapi-auth-date: string
x-fapi-customer-ip-address: string
x-cds-client-headers: string
```

```javascript--nodejs
const fetch = require('node-fetch');
const inputBody = '{
  "data": {
    "accountIds": [
      "string"
    ]
  },
  "meta": {}
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'x-v':'string',
  'x-min-v':'string',
  'x-fapi-interaction-id':'string',
  'x-fapi-auth-date':'string',
  'x-fapi-customer-ip-address':'string',
  'x-cds-client-headers':'string'
};

fetch('https://mtls.dh.example.com/cds-au/v1/telco/accounts/transactions', {
  method: 'POST',
  body: inputBody,
  headers: headers
}).then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

`POST /telco/accounts/transactions`

Obtain transactions for a specified set of accounts.

> Body parameter

```json
{
  "data": {
    "accountIds": [
      "string"
    ]
  },
  "meta": {}
}
```

<h3 id="cdr-telco-api_get-transactions-for-specific-telco-accounts_endpoint-version">Endpoint Version</h3>
|   |  |
|---|--|
|Version|**1**

<h3 id="cdr-telco-api_get-transactions-for-specific-telco-accounts_parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|newest-time|query|[DateTimeString](#common-field-types)|optional|Constrain the request to records with effective time at or before this date/time. If absent defaults to current date/time. Format is aligned to DateTimeString common type.|
|oldest-time|query|[DateTimeString](#common-field-types)|optional|Constrain the request to records with effective time at or after this date/time. If absent defaults to _newest-time_ minus 12 months. Format is aligned to DateTimeString common type.|
|page|query|[PositiveInteger](#common-field-types)|optional|Page of results to request (standard pagination).|
|page-size|query|[PositiveInteger](#common-field-types)|optional|Page size to request. Default is 25 (standard pagination).|
|x-v|header|string|mandatory|Version of the API endpoint requested by the client. Must be set to a positive integer. The data holder should respond with the highest supported version between [_x-min-v_](#request-headers) and [_x-v_](#request-headers). If the value of [_x-min-v_](#request-headers) is equal to or higher than the value of [_x-v_](#request-headers) then the [_x-min-v_](#request-headers) header should be treated as absent. If all versions requested are not supported then the data holder **MUST** respond with a `406 Not Acceptable`. See [HTTP Headers](#request-headers).|
|x-min-v|header|string|optional|Minimum version of the API endpoint requested by the client. Must be set to a positive integer if provided. The data holder should respond with the highest supported version between [_x-min-v_](#request-headers) and [_x-v_](#request-headers). If all versions requested are not supported then the data holder **MUST** respond with a `406 Not Acceptable`.|
|x-fapi-interaction-id|header|string|optional|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|x-fapi-auth-date|header|string|conditional|The time when the customer last logged in to the Data Recipient Software Product as described in **[[FAPI-1.0-Baseline]](#nref-FAPI-1-0-Baseline)**. Required for all resource calls (customer present and unattended). Not required for unauthenticated calls.|
|x-fapi-customer-ip-address|header|string|optional|The customer's original IP address if the customer is currently logged in to the data recipient. The presence of this header indicates that the API is being called in a customer present context. Not to be included for unauthenticated calls.|
|x-cds-client-headers|header|[Base64](#common-field-types)|conditional|The customer's original standard http headers [Base64](#common-field-types) encoded, including the original User-Agent header, if the customer is currently logged in to the data recipient. Mandatory for customer present calls. Not required for unattended or unauthenticated calls.|
|body|body|[accountIdList](#schemacdr-telco-apiaccountidlist)|mandatory|Request payload containing list of specific Accounts to obtain data for.|
|» data|body|object|mandatory|none|
|»» accountIds|body|[string]|mandatory|Array of specific _accountId_ values to obtain data for. In accordance with [CDR ID permanence](#id-permanence) requirements.|
|» meta|body|[Meta](#schemacdr-telco-apimeta)|mandatory|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "transactions": [
      {
        "accountId": "string",
        "executionDateTime": "string",
        "gst": "string",
        "transactionUType": "account",
        "account": {
          "serviceIds": "string",
          "invoiceNumber": "string",
          "description": "string",
          "startDate": "string",
          "endDate": "string",
          "amount": "string",
          "adjustments": [
            {
              "amount": "string",
              "description": "string"
            }
          ]
        },
        "onceOff": {
          "serviceId": "string",
          "invoiceNumber": "string",
          "amount": "string",
          "description": "string"
        },
        "otherCharges": {
          "serviceId": "string",
          "invoiceNumber": "string",
          "startDate": "string",
          "endDate": "string",
          "type": "SERVICE",
          "amount": "string",
          "description": "string",
          "adjustments": [
            {
              "amount": "string",
              "description": "string"
            }
          ]
        },
        "payment": {
          "amount": "string",
          "method": "DIRECT_DEBIT"
        }
      }
    ]
  },
  "links": {
    "self": "string",
    "first": "string",
    "prev": "string",
    "next": "string",
    "last": "string"
  },
  "meta": {
    "totalRecords": 0,
    "totalPages": 0
  }
}
```

<h3 id="cdr-telco-api_get-transactions-for-specific-telco-accounts_responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[TelcoTransactionListResponse](#schemacdr-telco-apitelcotransactionlistresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Missing Required Field](#error-400-field-missing)</li><li>[400 - Invalid Page Size](#error-400-field-invalid-page-size)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li></ul>|[ResponseErrorListV2](#schemacdr-telco-apiresponseerrorlistv2)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|[ResponseErrorListV2](#schemacdr-telco-apiresponseerrorlistv2)|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[422 - Invalid Page](#error-422-field-invalid-page)</li><li>[422 - Unavailable Telco Account](#error-422-unavailable-telco-account)</li><li>[422 - Invalid Telco Account](#error-422-invalid-telco-account)</li></ul>|[ResponseErrorListV2](#schemacdr-telco-apiresponseerrorlistv2)|

<h3 id="cdr-telco-api_get-transactions-for-specific-telco-accounts_response-headers">Response Headers</h3>

|Status|Header|Type|Description|
|---|---|---|---|---|
|200|x-v|string|The [version](#response-headers) of the API endpoint that the data holder has responded with.|
|200|x-fapi-interaction-id|string|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|400|x-fapi-interaction-id|string|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|406|x-fapi-interaction-id|string|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|422|x-fapi-interaction-id|string|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|

  
    
      <aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
<a href="#authorisation-scopes">telco:billing:read.</a>
</aside>

    
  

<h2 class="schema-heading" id="cdr-telco-api-schemas">Schemas</h2>

<h3 class="schema-toc" id="cdr-telco-api_schemas_tocStelcoproductlistresponse">TelcoProductListResponse</h3>
<p id="tocStelcoproductlistresponse" class="orig-anchor"></p>

<p>
  <a id="cdr-telco-api_schema-base_telcoproductlistresponse"></a>
  <a class="schema-anchor" id="schemacdr-telco-apitelcoproductlistresponse"></a>
</p>

```json
{
  "data": {
    "plans": [
      {
        "productId": "string",
        "effectiveFrom": "string",
        "effectiveTo": "string",
        "lastUpdated": "string",
        "displayName": "string",
        "description": "string",
        "type": "MOBILE",
        "purpose": "PERSONAL",
        "billingType": "PRE_PAID",
        "contract": {
          "name": "string",
          "description": "string",
          "duration": 0,
          "contractUri": "string"
        },
        "bundle": true,
        "brand": "string",
        "brandName": "string",
        "pricing": [
          {
            "name": "string",
            "description": "string",
            "period": "string",
            "amount": "string"
          }
        ],
        "thirdPartyAgentId": "string",
        "thirdPartyAgentName": "string",
        "applicationUri": "string",
        "additionalInformation": {
          "overviewUri": "string",
          "termsUri": "string",
          "eligibilityUri": "string",
          "pricingUri": "string",
          "bundleUri": "string"
        }
      }
    ]
  },
  "links": {
    "self": "string",
    "first": "string",
    "prev": "string",
    "next": "string",
    "last": "string"
  },
  "meta": {
    "totalRecords": 0,
    "totalPages": 0
  }
}
```

<h3 id="cdr-telco-api_telcoproductlistresponse_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|data|[TelcoProductListResponseData](#schemacdr-telco-apitelcoproductlistresponsedata)|mandatory|none|
|links|[LinksPaginated](#schemacdr-telco-apilinkspaginated)|mandatory|none|
|meta|[MetaPaginated](#schemacdr-telco-apimetapaginated)|mandatory|none|

<h3 class="schema-toc" id="cdr-telco-api_schemas_tocStelcoproductresponse">TelcoProductResponse</h3>
<p id="tocStelcoproductresponse" class="orig-anchor"></p>

<p>
  <a id="cdr-telco-api_schema-base_telcoproductresponse"></a>
  <a class="schema-anchor" id="schemacdr-telco-apitelcoproductresponse"></a>
</p>

```json
{
  "data": {
    "productId": "string",
    "effectiveFrom": "string",
    "effectiveTo": "string",
    "lastUpdated": "string",
    "displayName": "string",
    "description": "string",
    "type": "MOBILE",
    "purpose": "PERSONAL",
    "billingType": "PRE_PAID",
    "contract": {
      "name": "string",
      "description": "string",
      "duration": 0,
      "contractUri": "string"
    },
    "bundle": true,
    "brand": "string",
    "brandName": "string",
    "pricing": [
      {
        "name": "string",
        "description": "string",
        "period": "string",
        "amount": "string"
      }
    ],
    "thirdPartyAgentId": "string",
    "thirdPartyAgentName": "string",
    "applicationUri": "string",
    "additionalInformation": {
      "overviewUri": "string",
      "termsUri": "string",
      "eligibilityUri": "string",
      "pricingUri": "string",
      "bundleUri": "string"
    },
    "meteringCharges": [
      {
        "displayName": "string",
        "description": "string",
        "minimumValue": "string",
        "maximumValue": "string",
        "period": "string"
      }
    ],
    "bundles": [
      {
        "displayName": "string",
        "description": "string",
        "bundleUri": "string",
        "features": [
          {
            "displayName": "string",
            "description": "string",
            "category": "DATA"
          }
        ]
      }
    ],
    "plans": [
      {
        "displayName": "string",
        "description": "string",
        "planUri": "string",
        "features": [
          {
            "displayName": "string",
            "description": "string"
          }
        ]
      }
    ],
    "discounts": [
      {
        "displayName": "string",
        "description": "string",
        "discountUri": "string",
        "features": [
          {
            "displayName": "string",
            "description": "string"
          }
        ]
      }
    ],
    "incentives": [
      {
        "displayName": "string",
        "description": "string",
        "incentiveUri": "string",
        "features": [
          {
            "displayName": "string",
            "description": "string"
          }
        ]
      }
    ]
  },
  "links": {
    "self": "string"
  },
  "meta": {}
}
```

<h3 id="cdr-telco-api_telcoproductresponse_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|data|any|mandatory|none|

*allOf*

|Name|Type|Required|Description|
|---|---|---|---|
|» *anonymous*|[TelcoProduct](#schemacdr-telco-apitelcoproduct)|mandatory|none|

*and*

|Name|Type|Required|Description|
|---|---|---|---|
|» *anonymous*|[TelcoProductDetail](#schemacdr-telco-apitelcoproductdetail)|mandatory|none|

*continued*

|Name|Type|Required|Description|
|---|---|---|---|
|links|[Links](#schemacdr-telco-apilinks)|mandatory|none|
|meta|[Meta](#schemacdr-telco-apimeta)|optional|none|

<h3 class="schema-toc" id="cdr-telco-api_schemas_tocStelcousageresponse">TelcoUsageResponse</h3>
<p id="tocStelcousageresponse" class="orig-anchor"></p>

<p>
  <a id="cdr-telco-api_schema-base_telcousageresponse"></a>
  <a class="schema-anchor" id="schemacdr-telco-apitelcousageresponse"></a>
</p>

```json
{
  "data": {
    "accountId": "string",
    "services": [
      {
        "service": {
          "serviceId": "string",
          "displayName": "string",
          "phoneNumber": "string",
          "startDate": "string",
          "endDate": "string",
          "usage": {
            "data": {
              "upload": 0,
              "download": 0,
              "sessions": 0,
              "amount": "string",
              "roaming": {
                "download": 0,
                "amount": "string"
              }
            },
            "voice": {
              "national": {
                "duration": "string",
                "number": 0,
                "amount": "string"
              },
              "international": {
                "duration": "string",
                "number": 0,
                "amount": "string"
              },
              "roaming": {
                "duration": "string",
                "number": 0,
                "amount": "string"
              }
            },
            "messaging": {
              "sms": {
                "national": 0,
                "international": 0,
                "roaming": 0,
                "amount": "string"
              },
              "mms": {
                "national": 0,
                "international": 0,
                "roaming": 0,
                "amount": "string"
              }
            }
          }
        }
      }
    ]
  },
  "links": {
    "self": "string"
  },
  "meta": {}
}
```

<h3 id="cdr-telco-api_telcousageresponse_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|data|[TelcoAccountUsage](#schemacdr-telco-apitelcoaccountusage)|mandatory|none|
|links|[Links](#schemacdr-telco-apilinks)|mandatory|none|
|meta|[Meta](#schemacdr-telco-apimeta)|mandatory|none|

<h3 class="schema-toc" id="cdr-telco-api_schemas_tocStelcoserviceusageresponse">TelcoServiceUsageResponse</h3>
<p id="tocStelcoserviceusageresponse" class="orig-anchor"></p>

<p>
  <a id="cdr-telco-api_schema-base_telcoserviceusageresponse"></a>
  <a class="schema-anchor" id="schemacdr-telco-apitelcoserviceusageresponse"></a>
</p>

```json
{
  "data": {
    "serviceId": "string",
    "displayName": "string",
    "phoneNumber": "string",
    "startDate": "string",
    "endDate": "string",
    "usage": {
      "data": {
        "upload": 0,
        "download": 0,
        "sessions": 0,
        "amount": "string",
        "roaming": {
          "download": 0,
          "amount": "string"
        }
      },
      "voice": {
        "national": {
          "duration": "string",
          "number": 0,
          "amount": "string"
        },
        "international": {
          "duration": "string",
          "number": 0,
          "amount": "string"
        },
        "roaming": {
          "duration": "string",
          "number": 0,
          "amount": "string"
        }
      },
      "messaging": {
        "sms": {
          "national": 0,
          "international": 0,
          "roaming": 0,
          "amount": "string"
        },
        "mms": {
          "national": 0,
          "international": 0,
          "roaming": 0,
          "amount": "string"
        }
      }
    }
  },
  "links": {
    "self": "string"
  },
  "meta": {}
}
```

<h3 id="cdr-telco-api_telcoserviceusageresponse_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|data|[TelcoServiceUsage](#schemacdr-telco-apitelcoserviceusage)|mandatory|none|
|links|[Links](#schemacdr-telco-apilinks)|mandatory|none|
|meta|[Meta](#schemacdr-telco-apimeta)|mandatory|none|

<h3 class="schema-toc" id="cdr-telco-api_schemas_tocStelcoserviceusagelistresponse">TelcoServiceUsageListResponse</h3>
<p id="tocStelcoserviceusagelistresponse" class="orig-anchor"></p>

<p>
  <a id="cdr-telco-api_schema-base_telcoserviceusagelistresponse"></a>
  <a class="schema-anchor" id="schemacdr-telco-apitelcoserviceusagelistresponse"></a>
</p>

```json
{
  "data": [
    {
      "serviceId": "string",
      "displayName": "string",
      "phoneNumber": "string",
      "startDate": "string",
      "endDate": "string",
      "usage": {
        "data": {
          "upload": 0,
          "download": 0,
          "sessions": 0,
          "amount": "string",
          "roaming": {
            "download": 0,
            "amount": "string"
          }
        },
        "voice": {
          "national": {
            "duration": "string",
            "number": 0,
            "amount": "string"
          },
          "international": {
            "duration": "string",
            "number": 0,
            "amount": "string"
          },
          "roaming": {
            "duration": "string",
            "number": 0,
            "amount": "string"
          }
        },
        "messaging": {
          "sms": {
            "national": 0,
            "international": 0,
            "roaming": 0,
            "amount": "string"
          },
          "mms": {
            "national": 0,
            "international": 0,
            "roaming": 0,
            "amount": "string"
          }
        }
      }
    }
  ],
  "links": {
    "self": "string",
    "first": "string",
    "prev": "string",
    "next": "string",
    "last": "string"
  },
  "meta": {
    "totalRecords": 0,
    "totalPages": 0
  }
}
```

<h3 id="cdr-telco-api_telcoserviceusagelistresponse_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|data|[[TelcoServiceUsage](#schemacdr-telco-apitelcoserviceusage)]|mandatory|none|
|links|[LinksPaginated](#schemacdr-telco-apilinkspaginated)|mandatory|none|
|meta|[MetaPaginated](#schemacdr-telco-apimetapaginated)|mandatory|none|

<h3 class="schema-toc" id="cdr-telco-api_schemas_tocStelcoaccountlistresponse">TelcoAccountListResponse</h3>
<p id="tocStelcoaccountlistresponse" class="orig-anchor"></p>

<p>
  <a id="cdr-telco-api_schema-base_telcoaccountlistresponse"></a>
  <a class="schema-anchor" id="schemacdr-telco-apitelcoaccountlistresponse"></a>
</p>

```json
{
  "data": {
    "accounts": [
      {
        "accountId": "string",
        "accountNumber": "string",
        "displayName": "string",
        "creationDate": "string",
        "lastUpdated": "string",
        "brand": "string",
        "openStatus": "CLOSED",
        "plans": [
          {
            "nickname": "string",
            "type": "MOBILE",
            "billingType": "PRE_PAID",
            "serviceIds": [
              "string"
            ],
            "planOverview": {
              "displayName": "string",
              "startDate": "string",
              "endDate": "string"
            }
          }
        ]
      }
    ]
  },
  "links": {
    "self": "string",
    "first": "string",
    "prev": "string",
    "next": "string",
    "last": "string"
  },
  "meta": {
    "totalRecords": 0,
    "totalPages": 0
  }
}
```

<h3 id="cdr-telco-api_telcoaccountlistresponse_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|data|[TelcoAccountListResponseData](#schemacdr-telco-apitelcoaccountlistresponsedata)|mandatory|none|
|links|[LinksPaginated](#schemacdr-telco-apilinkspaginated)|mandatory|none|
|meta|[MetaPaginated](#schemacdr-telco-apimetapaginated)|mandatory|none|

<h3 class="schema-toc" id="cdr-telco-api_schemas_tocStelcoaccountdetailresponse">TelcoAccountDetailResponse</h3>
<p id="tocStelcoaccountdetailresponse" class="orig-anchor"></p>

<p>
  <a id="cdr-telco-api_schema-base_telcoaccountdetailresponse"></a>
  <a class="schema-anchor" id="schemacdr-telco-apitelcoaccountdetailresponse"></a>
</p>

```json
{
  "data": {
    "accountId": "string",
    "accountNumber": "string",
    "displayName": "string",
    "creationDate": "string",
    "lastUpdated": "string",
    "brand": "string",
    "openStatus": "CLOSED",
    "plans": [
      {
        "nickname": "string",
        "type": "MOBILE",
        "billingType": "PRE_PAID",
        "serviceIds": [
          "string"
        ],
        "planOverview": {
          "displayName": "string",
          "startDate": "string",
          "endDate": "string"
        },
        "planDetail": {
          "charges": [
            {
              "displayName": "string",
              "description": "string",
              "minimumValue": "string",
              "maximumValue": "string",
              "period": "string"
            }
          ]
        }
      }
    ]
  },
  "links": {
    "self": "string"
  },
  "meta": {}
}
```

<h3 id="cdr-telco-api_telcoaccountdetailresponse_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|data|[TelcoAccountDetailResponseData](#schemacdr-telco-apitelcoaccountdetailresponsedata)|mandatory|none|
|links|[Links](#schemacdr-telco-apilinks)|mandatory|none|
|meta|[Meta](#schemacdr-telco-apimeta)|mandatory|none|

<h3 class="schema-toc" id="cdr-telco-api_schemas_tocStelcopaymentscheduleresponse">TelcoPaymentScheduleResponse</h3>
<p id="tocStelcopaymentscheduleresponse" class="orig-anchor"></p>

<p>
  <a id="cdr-telco-api_schema-base_telcopaymentscheduleresponse"></a>
  <a class="schema-anchor" id="schemacdr-telco-apitelcopaymentscheduleresponse"></a>
</p>

```json
{
  "data": {
    "paymentSchedules": [
      {
        "amount": "string",
        "paymentScheduleUType": "cardDebit",
        "cardDebit": {
          "cardScheme": "VISA",
          "paymentFrequency": "string",
          "calculationType": "STATIC"
        },
        "directDebit": {
          "isTokenised": true,
          "bsb": "string",
          "accountNumber": "string",
          "paymentFrequency": "string",
          "calculationType": "STATIC"
        },
        "digitalWallet": {
          "name": "string",
          "identifier": "string",
          "type": "EMAIL",
          "provider": "PAYPAL_AU",
          "paymentFrequency": "string",
          "calculationType": "STATIC"
        },
        "manualPayment": {
          "billFrequency": "string"
        }
      }
    ]
  },
  "links": {
    "self": "string",
    "first": "string",
    "prev": "string",
    "next": "string",
    "last": "string"
  },
  "meta": {
    "totalRecords": 0,
    "totalPages": 0
  }
}
```

<h3 id="cdr-telco-api_telcopaymentscheduleresponse_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|data|[TelcoPaymentScheduleResponseData](#schemacdr-telco-apitelcopaymentscheduleresponsedata)|mandatory|none|
|links|[LinksPaginated](#schemacdr-telco-apilinkspaginated)|mandatory|none|
|meta|[MetaPaginated](#schemacdr-telco-apimetapaginated)|mandatory|none|

<h3 class="schema-toc" id="cdr-telco-api_schemas_tocStelcoconcessionsresponse">TelcoConcessionsResponse</h3>
<p id="tocStelcoconcessionsresponse" class="orig-anchor"></p>

<p>
  <a id="cdr-telco-api_schema-base_telcoconcessionsresponse"></a>
  <a class="schema-anchor" id="schemacdr-telco-apitelcoconcessionsresponse"></a>
</p>

```json
{
  "data": {
    "concessions": [
      {
        "type": "CONCESSION",
        "displayName": "string",
        "additionalInfo": "string",
        "additionalInfoUri": "string",
        "startDate": "string",
        "endDate": "string",
        "discountFrequency": "string",
        "amount": "string",
        "percentage": "string",
        "appliedTo": [
          "INVOICE"
        ]
      }
    ]
  },
  "links": {
    "self": "string",
    "first": "string",
    "prev": "string",
    "next": "string",
    "last": "string"
  },
  "meta": {
    "totalRecords": 0,
    "totalPages": 0
  }
}
```

<h3 id="cdr-telco-api_telcoconcessionsresponse_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|data|[TelcoConcessionsResponseData](#schemacdr-telco-apitelcoconcessionsresponsedata)|mandatory|none|
|links|[LinksPaginated](#schemacdr-telco-apilinkspaginated)|mandatory|none|
|meta|[MetaPaginated](#schemacdr-telco-apimetapaginated)|mandatory|none|

<h3 class="schema-toc" id="cdr-telco-api_schemas_tocStelcobalancelistresponse">TelcoBalanceListResponse</h3>
<p id="tocStelcobalancelistresponse" class="orig-anchor"></p>

<p>
  <a id="cdr-telco-api_schema-base_telcobalancelistresponse"></a>
  <a class="schema-anchor" id="schemacdr-telco-apitelcobalancelistresponse"></a>
</p>

```json
{
  "data": {
    "balances": [
      {
        "accountId": "string",
        "balance": {
          "services": [
            {
              "serviceId": "string",
              "displayName": "string",
              "phoneNumber": "string",
              "startDate": "string",
              "endDate": "string",
              "balance": {
                "data": {
                  "planType": "METERED",
                  "description": "string",
                  "upload": 0,
                  "download": 0,
                  "amount": "string",
                  "roaming": {
                    "description": "string",
                    "download": 0,
                    "amount": "string"
                  }
                },
                "voice": {
                  "planType": "METERED",
                  "national": {
                    "description": "string",
                    "duration": "string",
                    "number": 0,
                    "amount": "string"
                  },
                  "international": {
                    "description": "string",
                    "duration": "string",
                    "number": 0,
                    "amount": "string"
                  },
                  "roaming": {
                    "description": "string",
                    "duration": "string",
                    "number": 0,
                    "amount": "string"
                  }
                },
                "messaging": {
                  "planType": "METERED",
                  "sms": {
                    "description": "string",
                    "national": 0,
                    "international": 0,
                    "roaming": 0,
                    "amount": "string"
                  },
                  "mms": {
                    "description": "string",
                    "national": 0,
                    "international": 0,
                    "roaming": 0,
                    "amount": "string"
                  }
                }
              }
            }
          ]
        }
      }
    ]
  },
  "links": {
    "self": "string",
    "first": "string",
    "prev": "string",
    "next": "string",
    "last": "string"
  },
  "meta": {
    "totalRecords": 0,
    "totalPages": 0
  }
}
```

<h3 id="cdr-telco-api_telcobalancelistresponse_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|data|[TelcoBalanceListResponseData](#schemacdr-telco-apitelcobalancelistresponsedata)|mandatory|none|
|links|[LinksPaginated](#schemacdr-telco-apilinkspaginated)|mandatory|none|
|meta|[MetaPaginated](#schemacdr-telco-apimetapaginated)|mandatory|none|

<h3 class="schema-toc" id="cdr-telco-api_schemas_tocStelcobalanceresponse">TelcoBalanceResponse</h3>
<p id="tocStelcobalanceresponse" class="orig-anchor"></p>

<p>
  <a id="cdr-telco-api_schema-base_telcobalanceresponse"></a>
  <a class="schema-anchor" id="schemacdr-telco-apitelcobalanceresponse"></a>
</p>

```json
{
  "data": {
    "services": [
      {
        "serviceId": "string",
        "displayName": "string",
        "phoneNumber": "string",
        "startDate": "string",
        "endDate": "string",
        "balance": {
          "data": {
            "planType": "METERED",
            "description": "string",
            "upload": 0,
            "download": 0,
            "amount": "string",
            "roaming": {
              "description": "string",
              "download": 0,
              "amount": "string"
            }
          },
          "voice": {
            "planType": "METERED",
            "national": {
              "description": "string",
              "duration": "string",
              "number": 0,
              "amount": "string"
            },
            "international": {
              "description": "string",
              "duration": "string",
              "number": 0,
              "amount": "string"
            },
            "roaming": {
              "description": "string",
              "duration": "string",
              "number": 0,
              "amount": "string"
            }
          },
          "messaging": {
            "planType": "METERED",
            "sms": {
              "description": "string",
              "national": 0,
              "international": 0,
              "roaming": 0,
              "amount": "string"
            },
            "mms": {
              "description": "string",
              "national": 0,
              "international": 0,
              "roaming": 0,
              "amount": "string"
            }
          }
        }
      }
    ]
  },
  "links": {
    "self": "string"
  },
  "meta": {}
}
```

<h3 id="cdr-telco-api_telcobalanceresponse_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|data|[TelcoBalance](#schemacdr-telco-apitelcobalance)|mandatory|Object containing account service usage summary.|
|links|[Links](#schemacdr-telco-apilinks)|mandatory|none|
|meta|[Meta](#schemacdr-telco-apimeta)|mandatory|none|

<h3 class="schema-toc" id="cdr-telco-api_schemas_tocStelcotransactionlistresponse">TelcoTransactionListResponse</h3>
<p id="tocStelcotransactionlistresponse" class="orig-anchor"></p>

<p>
  <a id="cdr-telco-api_schema-base_telcotransactionlistresponse"></a>
  <a class="schema-anchor" id="schemacdr-telco-apitelcotransactionlistresponse"></a>
</p>

```json
{
  "data": {
    "transactions": [
      {
        "accountId": "string",
        "executionDateTime": "string",
        "gst": "string",
        "transactionUType": "account",
        "account": {
          "serviceIds": "string",
          "invoiceNumber": "string",
          "description": "string",
          "startDate": "string",
          "endDate": "string",
          "amount": "string",
          "adjustments": [
            {
              "amount": "string",
              "description": "string"
            }
          ]
        },
        "onceOff": {
          "serviceId": "string",
          "invoiceNumber": "string",
          "amount": "string",
          "description": "string"
        },
        "otherCharges": {
          "serviceId": "string",
          "invoiceNumber": "string",
          "startDate": "string",
          "endDate": "string",
          "type": "SERVICE",
          "amount": "string",
          "description": "string",
          "adjustments": [
            {
              "amount": "string",
              "description": "string"
            }
          ]
        },
        "payment": {
          "amount": "string",
          "method": "DIRECT_DEBIT"
        }
      }
    ]
  },
  "links": {
    "self": "string",
    "first": "string",
    "prev": "string",
    "next": "string",
    "last": "string"
  },
  "meta": {
    "totalRecords": 0,
    "totalPages": 0
  }
}
```

<h3 id="cdr-telco-api_telcotransactionlistresponse_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|data|[TelcoTransactionListResponseData](#schemacdr-telco-apitelcotransactionlistresponsedata)|mandatory|none|
|links|[LinksPaginated](#schemacdr-telco-apilinkspaginated)|mandatory|none|
|meta|[MetaPaginated](#schemacdr-telco-apimetapaginated)|mandatory|none|

<h3 class="schema-toc" id="cdr-telco-api_schemas_tocSmetaerror">MetaError</h3>
<p id="tocSmetaerror" class="orig-anchor"></p>

<p>
  <a id="cdr-telco-api_schema-base_metaerror"></a>
  <a class="schema-anchor" id="schemacdr-telco-apimetaerror"></a>
</p>

```json
{
  "urn": "string"
}
```

*Additional data for customised error codes.*

<h3 id="cdr-telco-api_metaerror_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|urn|string|conditional|The CDR error code URN which the application-specific error code extends. Mandatory if the error _code_ is an application-specific error rather than a standardised error code.|

<h3 class="schema-toc" id="cdr-telco-api_schemas_tocSresponseerrorlistv2">ResponseErrorListV2</h3>
<p id="tocSresponseerrorlistv2" class="orig-anchor"></p>

<p>
  <a id="cdr-telco-api_schema-base_responseerrorlist"></a>
  <a class="schema-anchor" id="schemacdr-telco-apiresponseerrorlistv2"></a>
</p>

```json
{
  "errors": [
    {
      "code": "string",
      "title": "string",
      "detail": "string",
      "meta": {
        "urn": "string"
      }
    }
  ]
}
```

<h3 id="cdr-telco-api_responseerrorlistv2_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|errors|[object]|mandatory|none|
|» code|string|mandatory|The code of the error encountered. Where the error is specific to the respondent, an application-specific error code, expressed as a string value. If the error is application-specific, the URN code that the specific error extends must be provided in the meta object. Otherwise, the value is the error code URN.|
|» title|string|mandatory|A short, human-readable summary of the problem that MUST NOT change from occurrence to occurrence of the problem represented by the error code.|
|» detail|string|mandatory|A human-readable explanation specific to this occurrence of the problem.|
|» meta|[MetaError](#schemacdr-telco-apimetaerror)|optional|Additional data for customised error codes.|

<h3 class="schema-toc" id="cdr-telco-api_schemas_tocStelcoproduct">TelcoProduct</h3>
<p id="tocStelcoproduct" class="orig-anchor"></p>

<p>
  <a id="cdr-telco-api_schema-base_telcoproduct"></a>
  <a class="schema-anchor" id="schemacdr-telco-apitelcoproduct"></a>
</p>

```json
{
  "productId": "string",
  "effectiveFrom": "string",
  "effectiveTo": "string",
  "lastUpdated": "string",
  "displayName": "string",
  "description": "string",
  "type": "MOBILE",
  "purpose": "PERSONAL",
  "billingType": "PRE_PAID",
  "contract": {
    "name": "string",
    "description": "string",
    "duration": 0,
    "contractUri": "string"
  },
  "bundle": true,
  "brand": "string",
  "brandName": "string",
  "pricing": [
    {
      "name": "string",
      "description": "string",
      "period": "string",
      "amount": "string"
    }
  ],
  "thirdPartyAgentId": "string",
  "thirdPartyAgentName": "string",
  "applicationUri": "string",
  "additionalInformation": {
    "overviewUri": "string",
    "termsUri": "string",
    "eligibilityUri": "string",
    "pricingUri": "string",
    "bundleUri": "string"
  }
}
```

<h3 id="cdr-telco-api_telcoproduct_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|productId|[ASCIIString](#common-field-types)|mandatory|The ID of the specific product.|
|effectiveFrom|[DateTimeString](#common-field-types)|optional|The date and time from which this product is effective (i.e. is available for origination). Used to enable the articulation of products to the regime before they are available for customers to originate.|
|effectiveTo|[DateTimeString](#common-field-types)|optional|The date and time at which this product will be retired and will no longer be offered. Used to enable the managed deprecation of plans.|
|lastUpdated|[DateTimeString](#common-field-types)|optional|The last date and time that the information for this plan was changed (or the creation date for the plan if it has never been altered).|
|displayName|string|optional|The display name of the product.|
|description|string|optional|A description of the product.|
|type|[Enum](#common-field-types)|mandatory|The type of product. [`MOBILE`](https://www.legislation.gov.au/Details/C2022C00170/Html/Volume_1#_Toc95898745) service or `BROADBAND` fixed internet service.|
|purpose|[Enum](#common-field-types)|optional|The purpose type of the product. If absent, then the value `PERSONAL` is assumed.|
|billingType|[Enum](#common-field-types)|mandatory|The type of product.|
|contract|[TelcoContract](#schemacdr-telco-apitelcocontract)|conditional|Summary of the contract details. Mandatory if the billing type is `POST_PAID` and a contract agreement is required with the service provider for the plan.|
|bundle|boolean|optional|Required if part of a bundle. If not present `false` is assumed.|
|brand|string|mandatory|The ID of the brand under which this product is offered.|
|brandName|string|mandatory|The display name of the brand under which this product is offered.|
|pricing|[[TelcoProductPricing](#schemacdr-telco-apitelcoproductpricing)]|mandatory|List of pricing details for the product plan.|
|thirdPartyAgentId|string|optional|The ID of the Third-Party through which this product may be originated.|
|thirdPartyAgentName|string|optional|The display name of the Third-Party through which this product may be originated.|
|applicationUri|[URIString](#common-field-types)|optional|A link to an application web page where this plan can be applied for.|
|additionalInformation|[TelcoAdditionalInformation](#schemacdr-telco-apitelcoadditionalinformation)|optional|Object that contains links to additional information on specific topics.|

<h4 id="cdr-telco-api_telcoproduct_enumerated-values-main">Enumerated Values</h4>

|Property|Value|
|---|---|
|type|MOBILE|
|type|BROADBAND|
|purpose|PERSONAL|
|purpose|BUSINESS|
|purpose|ALL|
|billingType|PRE_PAID|
|billingType|POST_PAID|
|billingType|UPFRONT_PAID|
|billingType|OTHER|

<h3 class="schema-toc" id="cdr-telco-api_schemas_tocStelcocontract">TelcoContract</h3>
<p id="tocStelcocontract" class="orig-anchor"></p>

<p>
  <a id="cdr-telco-api_schema-base_telcocontract"></a>
  <a class="schema-anchor" id="schemacdr-telco-apitelcocontract"></a>
</p>

```json
{
  "name": "string",
  "description": "string",
  "duration": 0,
  "contractUri": "string"
}
```

*Summary of the contract details. Mandatory if the billing type is `POST_PAID` and a contract agreement is required with the service provider for the plan.*

<h3 id="cdr-telco-api_telcocontract_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|name|string|mandatory|Name of the contract.|
|description|string|optional|Description of the contract.|
|duration|[Number](#common-field-types)|mandatory|Minimum contract duration in months.|
|contractUri|[URIString](#common-field-types)|optional|URI of the contract conditions.|

<h3 class="schema-toc" id="cdr-telco-api_schemas_tocStelcoservicedetail">TelcoServiceDetail</h3>
<p id="tocStelcoservicedetail" class="orig-anchor"></p>

<p>
  <a id="cdr-telco-api_schema-base_telcoservicedetail"></a>
  <a class="schema-anchor" id="schemacdr-telco-apitelcoservicedetail"></a>
</p>

```json
{
  "serviceId": "string"
}
```

<h3 id="cdr-telco-api_telcoservicedetail_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|serviceId|string|mandatory|The tokenised ID of the service identifier for use in the CDR APIs. E.g a mobile [MSISDN](https://www.etsi.org/deliver/etsi_gts/03/0303/05.00.00_60/gsmts_0303v050000p.pdf), [FNN](https://www.nbnco.com.au/content/dam/nbnco2/documents/sfaa-wba2-dictionary_FTTN-launch.pdf) or internet service e.g [NBN AVC Service ID](https://www.nbnco.com.au/content/dam/nbnco2/documents/sfaa-wba2-dictionary_FTTN-launch.pdf). Created according to the CDR rules for [CDR ID permanence](#id-permanence).|

<h3 class="schema-toc" id="cdr-telco-api_schemas_tocStelcoaccountusage">TelcoAccountUsage</h3>
<p id="tocStelcoaccountusage" class="orig-anchor"></p>

<p>
  <a id="cdr-telco-api_schema-base_telcoaccountusage"></a>
  <a class="schema-anchor" id="schemacdr-telco-apitelcoaccountusage"></a>
</p>

```json
{
  "accountId": "string",
  "services": [
    {
      "service": {
        "serviceId": "string",
        "displayName": "string",
        "phoneNumber": "string",
        "startDate": "string",
        "endDate": "string",
        "usage": {
          "data": {
            "upload": 0,
            "download": 0,
            "sessions": 0,
            "amount": "string",
            "roaming": {
              "download": 0,
              "amount": "string"
            }
          },
          "voice": {
            "national": {
              "duration": "string",
              "number": 0,
              "amount": "string"
            },
            "international": {
              "duration": "string",
              "number": 0,
              "amount": "string"
            },
            "roaming": {
              "duration": "string",
              "number": 0,
              "amount": "string"
            }
          },
          "messaging": {
            "sms": {
              "national": 0,
              "international": 0,
              "roaming": 0,
              "amount": "string"
            },
            "mms": {
              "national": 0,
              "international": 0,
              "roaming": 0,
              "amount": "string"
            }
          }
        }
      }
    }
  ]
}
```

<h3 id="cdr-telco-api_telcoaccountusage_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|accountId|string|mandatory|Tokenised ID of the account. In accordance with [CDR ID permanence](#id-permanence) requirements.|
|services|[[TelcoAccountUsageServices](#schemacdr-telco-apitelcoaccountusageservices)]|mandatory|List of services that are part of the account.|

<h3 class="schema-toc" id="cdr-telco-api_schemas_tocStelcoserviceusage">TelcoServiceUsage</h3>
<p id="tocStelcoserviceusage" class="orig-anchor"></p>

<p>
  <a id="cdr-telco-api_schema-base_telcoserviceusage"></a>
  <a class="schema-anchor" id="schemacdr-telco-apitelcoserviceusage"></a>
</p>

```json
{
  "serviceId": "string",
  "displayName": "string",
  "phoneNumber": "string",
  "startDate": "string",
  "endDate": "string",
  "usage": {
    "data": {
      "upload": 0,
      "download": 0,
      "sessions": 0,
      "amount": "string",
      "roaming": {
        "download": 0,
        "amount": "string"
      }
    },
    "voice": {
      "national": {
        "duration": "string",
        "number": 0,
        "amount": "string"
      },
      "international": {
        "duration": "string",
        "number": 0,
        "amount": "string"
      },
      "roaming": {
        "duration": "string",
        "number": 0,
        "amount": "string"
      }
    },
    "messaging": {
      "sms": {
        "national": 0,
        "international": 0,
        "roaming": 0,
        "amount": "string"
      },
      "mms": {
        "national": 0,
        "international": 0,
        "roaming": 0,
        "amount": "string"
      }
    }
  }
}
```

<h3 id="cdr-telco-api_telcoserviceusage_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|serviceId|string|mandatory|Tokenised ID of the service identifier. E.g. a mobile [MSISDN](https://www.etsi.org/deliver/etsi_gts/03/0303/05.00.00_60/gsmts_0303v050000p.pdf), [FNN](https://www.nbnco.com.au/content/dam/nbnco2/documents/sfaa-wba2-dictionary_FTTN-launch.pdf) or internet service e.g [NBN AVC Service ID](https://www.nbnco.com.au/content/dam/nbnco2/documents/sfaa-wba2-dictionary_FTTN-launch.pdf). To be created in accordance with [CDR ID permanence](#id-permanence) requirements.|
|displayName|string|optional|Optional description of the service used for display purposes.|
|phoneNumber|string|conditional|Required if the service includes a phone number.|
|startDate|[DateTimeString](#common-field-types)|mandatory|Date when the usage period started.|
|endDate|[DateTimeString](#common-field-types)|optional|Date when the usage period ends.|
|usage|[TelcoUsage](#schemacdr-telco-apitelcousage)|optional|Object containing usage summary.|

<h3 class="schema-toc" id="cdr-telco-api_schemas_tocStelcoaccountbase">TelcoAccountBase</h3>
<p id="tocStelcoaccountbase" class="orig-anchor"></p>

<p>
  <a id="cdr-telco-api_schema-base_telcoaccountbase"></a>
  <a class="schema-anchor" id="schemacdr-telco-apitelcoaccountbase"></a>
</p>

```json
{
  "accountId": "string",
  "accountNumber": "string",
  "displayName": "string",
  "creationDate": "string",
  "lastUpdated": "string",
  "brand": "string",
  "openStatus": "CLOSED"
}
```

<h3 id="cdr-telco-api_telcoaccountbase_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|accountId|string|optional|The ID of the account. To be created in accordance with [CDR ID permanence](#id-permanence) requirements.|
|accountNumber|string|conditional|Masked identifier of the account as defined by the data holder. This must be the value presented on physical statements (required if it exists) and must not be used for the value of the _accountId_.|
|displayName|string|optional|An optional display name for the account if one exists or can be derived. The content of this field is at the discretion of the data holder.|
|creationDate|[DateString](#common-field-types)|optional|The date that the account was created or opened. Mandatory if _openStatus_ is `OPEN`.|
|lastUpdated|[DateString](#common-field-types)|optional|The date and time which the account was last updated.|
|brand|string|optional|The retail name of the brand.|
|openStatus|[Enum](#common-field-types)|optional|Open or closed status for the account. If not present then `OPEN` is assumed.|

<h4 id="cdr-telco-api_telcoaccountbase_enumerated-values-main">Enumerated Values</h4>

|Property|Value|
|---|---|
|openStatus|CLOSED|
|openStatus|OPEN|

<h3 class="schema-toc" id="cdr-telco-api_schemas_tocStelcoaccountresponsedata">TelcoAccountResponseData</h3>
<p id="tocStelcoaccountresponsedata" class="orig-anchor"></p>

<p>
  <a id="cdr-telco-api_schema-base_telcoaccountresponsedata"></a>
  <a class="schema-anchor" id="schemacdr-telco-apitelcoaccountresponsedata"></a>
</p>

```json
{
  "accountId": "string",
  "accountNumber": "string",
  "displayName": "string",
  "creationDate": "string",
  "lastUpdated": "string",
  "brand": "string",
  "openStatus": "CLOSED",
  "plans": [
    {
      "nickname": "string",
      "type": "MOBILE",
      "billingType": "PRE_PAID",
      "serviceIds": [
        "string"
      ],
      "planOverview": {
        "displayName": "string",
        "startDate": "string",
        "endDate": "string"
      }
    }
  ]
}
```

<h3 id="cdr-telco-api_telcoaccountresponsedata_properties">Properties</h3>

*allOf*

|Name|Type|Required|Description|
|---|---|---|---|
|*anonymous*|[TelcoAccountBase](#schemacdr-telco-apitelcoaccountbase)|mandatory|none|

*and*

|Name|Type|Required|Description|
|---|---|---|---|
|*anonymous*|[TelcoAccount](#schemacdr-telco-apitelcoaccount)|mandatory|The array of plans containing services and associated plan details.|

<h3 class="schema-toc" id="cdr-telco-api_schemas_tocStelcoaccountdetailresponsedata">TelcoAccountDetailResponseData</h3>
<p id="tocStelcoaccountdetailresponsedata" class="orig-anchor"></p>

<p>
  <a id="cdr-telco-api_schema-base_telcoaccountdetailresponsedata"></a>
  <a class="schema-anchor" id="schemacdr-telco-apitelcoaccountdetailresponsedata"></a>
</p>

```json
{
  "accountId": "string",
  "accountNumber": "string",
  "displayName": "string",
  "creationDate": "string",
  "lastUpdated": "string",
  "brand": "string",
  "openStatus": "CLOSED",
  "plans": [
    {
      "nickname": "string",
      "type": "MOBILE",
      "billingType": "PRE_PAID",
      "serviceIds": [
        "string"
      ],
      "planOverview": {
        "displayName": "string",
        "startDate": "string",
        "endDate": "string"
      },
      "planDetail": {
        "charges": [
          {
            "displayName": "string",
            "description": "string",
            "minimumValue": "string",
            "maximumValue": "string",
            "period": "string"
          }
        ]
      }
    }
  ]
}
```

<h3 id="cdr-telco-api_telcoaccountdetailresponsedata_properties">Properties</h3>

*allOf*

|Name|Type|Required|Description|
|---|---|---|---|
|*anonymous*|[TelcoAccountBase](#schemacdr-telco-apitelcoaccountbase)|mandatory|none|

*and*

|Name|Type|Required|Description|
|---|---|---|---|
|*anonymous*|[TelcoAccountDetail](#schemacdr-telco-apitelcoaccountdetail)|mandatory|The array of plans containing services and associated plan details.|

<h3 class="schema-toc" id="cdr-telco-api_schemas_tocStelcopaymentschedule">TelcoPaymentSchedule</h3>
<p id="tocStelcopaymentschedule" class="orig-anchor"></p>

<p>
  <a id="cdr-telco-api_schema-base_telcopaymentschedule"></a>
  <a class="schema-anchor" id="schemacdr-telco-apitelcopaymentschedule"></a>
</p>

```json
{
  "amount": "string",
  "paymentScheduleUType": "cardDebit",
  "cardDebit": {
    "cardScheme": "VISA",
    "paymentFrequency": "string",
    "calculationType": "STATIC"
  },
  "directDebit": {
    "isTokenised": true,
    "bsb": "string",
    "accountNumber": "string",
    "paymentFrequency": "string",
    "calculationType": "STATIC"
  },
  "digitalWallet": {
    "name": "string",
    "identifier": "string",
    "type": "EMAIL",
    "provider": "PAYPAL_AU",
    "paymentFrequency": "string",
    "calculationType": "STATIC"
  },
  "manualPayment": {
    "billFrequency": "string"
  }
}
```

<h3 id="cdr-telco-api_telcopaymentschedule_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|amount|[AmountString](#common-field-types)|optional|Optional payment amount indicating that a constant payment amount is scheduled to be paid (used in bill smoothing scenarios).|
|paymentScheduleUType|[Enum](#common-field-types)|mandatory|The type of object present in this response.|
|cardDebit|[TelcoPaymentScheduleCardDebit](#schemacdr-telco-apitelcopaymentschedulecarddebit)|conditional|Represents a regular credit card payment schedule. Mandatory if _paymentScheduleUType_ is set to `cardDebit`.|
|directDebit|[TelcoPaymentScheduleDirectDebit](#schemacdr-telco-apitelcopaymentscheduledirectdebit)|conditional|Represents a regular direct debit from a specified bank account. Mandatory if _paymentScheduleUType_ is set to `directDebit`.|
|digitalWallet|[TelcoPaymentScheduleDigitalWallet](#schemacdr-telco-apitelcopaymentscheduledigitalwallet)|conditional|Represents a regular payment from a digital wallet. Mandatory if _paymentScheduleUType_ is set to `digitalWallet`.|
|manualPayment|[TelcoPaymentScheduleManualPayment](#schemacdr-telco-apitelcopaymentschedulemanualpayment)|conditional|Represents a manual payment schedule where the customer pays in response to a delivered statement. Mandatory if _paymentScheduleUType_ is set to `manualPayment`.|

<h4 id="cdr-telco-api_telcopaymentschedule_enumerated-values-main">Enumerated Values</h4>

|Property|Value|
|---|---|
|paymentScheduleUType|cardDebit|
|paymentScheduleUType|directDebit|
|paymentScheduleUType|manualPayment|
|paymentScheduleUType|digitalWallet|

<h3 class="schema-toc" id="cdr-telco-api_schemas_tocStelcoconcession">TelcoConcession</h3>
<p id="tocStelcoconcession" class="orig-anchor"></p>

<p>
  <a id="cdr-telco-api_schema-base_telcoconcession"></a>
  <a class="schema-anchor" id="schemacdr-telco-apitelcoconcession"></a>
</p>

```json
{
  "type": "CONCESSION",
  "displayName": "string",
  "additionalInfo": "string",
  "additionalInfoUri": "string",
  "startDate": "string",
  "endDate": "string",
  "discountFrequency": "string",
  "amount": "string",
  "percentage": "string",
  "appliedTo": [
    "INVOICE"
  ]
}
```

<h3 id="cdr-telco-api_telcoconcession_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|type|[Enum](#common-field-types)|mandatory|The concession type.|
|displayName|string|mandatory|The display name of the concession.|
|additionalInfo|string|optional|Display text providing more information on the concession.|
|additionalInfoUri|[URIString](#common-field-types)|optional|Optional link to additional information regarding the concession.|
|startDate|[DateString](#common-field-types)|mandatory|Optional start date for the application of the concession.|
|endDate|[DateString](#common-field-types)|optional|Optional end date for the application of the concession.|
|discountFrequency|[ExternalRef](#common-field-types)|conditional|Conditional attribute for frequency at which a concession is applied. Required if _type_ is `FIXED_AMOUNT` or `FIXED_PERCENTAGE`. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax).|
|amount|[AmountString](#common-field-types)|conditional|Conditional attribute for the amount of discount for the concession - required if _type_ is `FIXED_AMOUNT`.|
|percentage|[RateString](#common-field-types)|conditional|Conditional attribute for the percentage of discount of concession - required if _type_ is `FIXED_PERCENTAGE`.|
|appliedTo|[[Enum](#common-field-types)]|optional|Array of ENUM's to specify what the concession applies to. Multiple ENUM values can be provided. If absent, `USAGE` is assumed.|

<h4 id="cdr-telco-api_telcoconcession_enumerated-values-main">Enumerated Values</h4>

|Property|Value|
|---|---|
|type|CONCESSION|
|type|REBATE|
|type|GRANT|
|appliedTo|INVOICE|
|appliedTo|USAGE|

<h3 class="schema-toc" id="cdr-telco-api_schemas_tocStelcoinvoice">TelcoInvoice</h3>
<p id="tocStelcoinvoice" class="orig-anchor"></p>

<p>
  <a id="cdr-telco-api_schema-base_telcoinvoice"></a>
  <a class="schema-anchor" id="schemacdr-telco-apitelcoinvoice"></a>
</p>

```json
{
  "accountId": "string",
  "invoiceNumber": "string",
  "issueDate": "string",
  "dueDate": "string",
  "period": {
    "startDate": "string",
    "endDate": "string"
  },
  "invoiceAmount": "string",
  "gstAmount": "string",
  "payOnTimeDiscount": {
    "discountAmount": "string",
    "gstAmount": "string",
    "date": "string"
  },
  "balanceAtIssue": "string",
  "services": [
    "string"
  ],
  "accountCharges": {
    "totalUsageCharges": "string",
    "totalOnceOffCharges": "string",
    "totalDiscounts": "string",
    "otherCharges": {
      "amount": "string",
      "description": "string",
      "type": "SERVICE"
    },
    "totalGst": "string"
  },
  "accountUsage": {
    "data": {
      "upload": 0,
      "download": 0,
      "sessions": 0,
      "amount": "string",
      "roaming": {
        "download": 0,
        "amount": "string"
      }
    },
    "voice": {
      "national": {
        "duration": "string",
        "number": 0,
        "amount": "string"
      },
      "international": {
        "duration": "string",
        "number": 0,
        "amount": "string"
      },
      "roaming": {
        "duration": "string",
        "number": 0,
        "amount": "string"
      }
    },
    "messaging": {
      "sms": {
        "national": 0,
        "international": 0,
        "roaming": 0,
        "amount": "string"
      },
      "mms": {
        "national": 0,
        "international": 0,
        "roaming": 0,
        "amount": "string"
      }
    }
  },
  "paymentStatus": "PAID"
}
```

<h3 id="cdr-telco-api_telcoinvoice_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|accountId|string|mandatory|The ID of the account for which the invoice was issued. _accountId_ must comply in accordance with [CDR ID permanence](#id-permanence) requirements.|
|invoiceNumber|string|mandatory|The number assigned to this invoice by the telco Retailer.|
|issueDate|[DateString](#common-field-types)|mandatory|The date that the invoice was actually issued (as opposed to generated or calculated).|
|dueDate|[DateString](#common-field-types)|optional|The date that the invoice is due to be paid.|
|period|[TelcoInvoicePeriod](#schemacdr-telco-apitelcoinvoiceperiod)|conditional|Object containing the start and end date for the period covered by the invoice. Mandatory if any usage based charges are included in the invoice.|
|invoiceAmount|[AmountString](#common-field-types)|optional|The net amount due for this invoice regardless of previous balance.|
|gstAmount|[AmountString](#common-field-types)|optional|The total GST amount for this invoice. If absent then zero is assumed.|
|payOnTimeDiscount|[TelcoInvoicePayOnTimeDiscount](#schemacdr-telco-apitelcoinvoicepayontimediscount)|optional|A discount for on time payment.|
|balanceAtIssue|[AmountString](#common-field-types)|mandatory|The account balance at the time the invoice was issued.|
|services|[string]|mandatory|An array of service IDs to which this invoice applies. May be empty if the invoice contains no usage related charges.|
|accountCharges|[TelcoInvoiceAccountCharges](#schemacdr-telco-apitelcoinvoiceaccountcharges)|optional|Object contain charges and credits related to usage.|
|accountUsage|[TelcoUsage](#schemacdr-telco-apitelcousage)|optional|Object containing usage summary.|
|paymentStatus|[Enum](#common-field-types)|mandatory|Indicator of the payment status for the invoice.|

<h4 id="cdr-telco-api_telcoinvoice_enumerated-values-main">Enumerated Values</h4>

|Property|Value|
|---|---|
|paymentStatus|PAID|
|paymentStatus|PARTIALLY_PAID|
|paymentStatus|NOT_PAID|

<h3 class="schema-toc" id="cdr-telco-api_schemas_tocStelcousage">TelcoUsage</h3>
<p id="tocStelcousage" class="orig-anchor"></p>

<p>
  <a id="cdr-telco-api_schema-base_telcousage"></a>
  <a class="schema-anchor" id="schemacdr-telco-apitelcousage"></a>
</p>

```json
{
  "data": {
    "upload": 0,
    "download": 0,
    "sessions": 0,
    "amount": "string",
    "roaming": {
      "download": 0,
      "amount": "string"
    }
  },
  "voice": {
    "national": {
      "duration": "string",
      "number": 0,
      "amount": "string"
    },
    "international": {
      "duration": "string",
      "number": 0,
      "amount": "string"
    },
    "roaming": {
      "duration": "string",
      "number": 0,
      "amount": "string"
    }
  },
  "messaging": {
    "sms": {
      "national": 0,
      "international": 0,
      "roaming": 0,
      "amount": "string"
    },
    "mms": {
      "national": 0,
      "international": 0,
      "roaming": 0,
      "amount": "string"
    }
  }
}
```

*Object containing usage summary.*

<h3 id="cdr-telco-api_telcousage_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|data|[TelcoUsageData](#schemacdr-telco-apitelcousagedata)|conditional|Summary of data usage.|
|voice|[TelcoUsageVoice](#schemacdr-telco-apitelcousagevoice)|conditional|Summary of voice calls. Required if voice calls are included in product plan.|
|messaging|[TelcoUsageMessaging](#schemacdr-telco-apitelcousagemessaging)|conditional|Summary of messaging. Required if messaging services is included in the product plan.|

<h3 class="schema-toc" id="cdr-telco-api_schemas_tocStelcoinvoiceaccountcharges">TelcoInvoiceAccountCharges</h3>
<p id="tocStelcoinvoiceaccountcharges" class="orig-anchor"></p>

<p>
  <a id="cdr-telco-api_schema-base_telcoinvoiceaccountcharges"></a>
  <a class="schema-anchor" id="schemacdr-telco-apitelcoinvoiceaccountcharges"></a>
</p>

```json
{
  "totalUsageCharges": "string",
  "totalOnceOffCharges": "string",
  "totalDiscounts": "string",
  "otherCharges": {
    "amount": "string",
    "description": "string",
    "type": "SERVICE"
  },
  "totalGst": "string"
}
```

*Object contain charges and credits related to usage.*

<h3 id="cdr-telco-api_telcoinvoiceaccountcharges_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|totalUsageCharges|[AmountString](#common-field-types)|mandatory|The aggregate total of usage charges for the period covered by the invoice (exclusive of GST).|
|totalOnceOffCharges|[AmountString](#common-field-types)|mandatory|The aggregate total of any once off charges arising from usage for the period covered by the invoice (exclusive of GST).|
|totalDiscounts|[AmountString](#common-field-types)|mandatory|The aggregate total of account level discounts or credits for the period covered by the invoice.|
|otherCharges|[TelcoInvoiceAccountChargesOtherCharges](#schemacdr-telco-apitelcoinvoiceaccountchargesothercharges)|optional|Optional array of charges that may be part of the invoice (for example services fees) (exclusive of GST).|
|totalGst|[AmountString](#common-field-types)|optional|The total GST for all account level charges. If absent then zero is assumed.|

<h3 class="schema-toc" id="cdr-telco-api_schemas_tocStelcobillingtransaction">TelcoBillingTransaction</h3>
<p id="tocStelcobillingtransaction" class="orig-anchor"></p>

<p>
  <a id="cdr-telco-api_schema-base_telcobillingtransaction"></a>
  <a class="schema-anchor" id="schemacdr-telco-apitelcobillingtransaction"></a>
</p>

```json
{
  "accountId": "string",
  "executionDateTime": "string",
  "gst": "string",
  "transactionUType": "account",
  "account": {
    "serviceIds": "string",
    "invoiceNumber": "string",
    "description": "string",
    "startDate": "string",
    "endDate": "string",
    "amount": "string",
    "adjustments": [
      {
        "amount": "string",
        "description": "string"
      }
    ]
  },
  "onceOff": {
    "serviceId": "string",
    "invoiceNumber": "string",
    "amount": "string",
    "description": "string"
  },
  "otherCharges": {
    "serviceId": "string",
    "invoiceNumber": "string",
    "startDate": "string",
    "endDate": "string",
    "type": "SERVICE",
    "amount": "string",
    "description": "string",
    "adjustments": [
      {
        "amount": "string",
        "description": "string"
      }
    ]
  },
  "payment": {
    "amount": "string",
    "method": "DIRECT_DEBIT"
  }
}
```

<h3 id="cdr-telco-api_telcobillingtransaction_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|accountId|string|mandatory|The ID of the account for which the transaction occurred. _accountId_ must comply in accordance with [CDR ID permanence](#id-permanence) requirements.|
|executionDateTime|[DateTimeString](#common-field-types)|mandatory|The date and time that the transaction occurred.|
|gst|[AmountString](#common-field-types)|optional|The GST incurred in the transaction. Should not be included for credits or payments. If absent zero is assumed.|
|transactionUType|[Enum](#common-field-types)|mandatory|Indicator of the type of transaction object present in this record.|
|account|[TelcoBillingAccountTransaction](#schemacdr-telco-apitelcobillingaccounttransaction)|optional|none|
|onceOff|[TelcoBillingOnceOffTransaction](#schemacdr-telco-apitelcobillingonceofftransaction)|conditional|none|
|otherCharges|[TelcoBillingOtherTransaction](#schemacdr-telco-apitelcobillingothertransaction)|optional|none|
|payment|[TelcoBillingPaymentTransaction](#schemacdr-telco-apitelcobillingpaymenttransaction)|conditional|none|

<h4 id="cdr-telco-api_telcobillingtransaction_enumerated-values-main">Enumerated Values</h4>

|Property|Value|
|---|---|
|transactionUType|account|
|transactionUType|onceOff|
|transactionUType|otherCharges|
|transactionUType|payment|

<h3 class="schema-toc" id="cdr-telco-api_schemas_tocStelcobillingaccounttransaction">TelcoBillingAccountTransaction</h3>
<p id="tocStelcobillingaccounttransaction" class="orig-anchor"></p>

<p>
  <a id="cdr-telco-api_schema-base_telcobillingaccounttransaction"></a>
  <a class="schema-anchor" id="schemacdr-telco-apitelcobillingaccounttransaction"></a>
</p>

```json
{
  "serviceIds": "string",
  "invoiceNumber": "string",
  "description": "string",
  "startDate": "string",
  "endDate": "string",
  "amount": "string",
  "adjustments": [
    {
      "amount": "string",
      "description": "string"
    }
  ]
}
```

<h3 id="cdr-telco-api_telcobillingaccounttransaction_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|serviceIds|string|optional|Array list of service identifiers to which this transaction applies if any. E.g., a mobile [MSISDN](https://www.etsi.org/deliver/etsi_gts/03/0303/05.00.00_60/gsmts_0303v050000p.pdf), [FNN](https://www.nbnco.com.au/content/dam/nbnco2/documents/sfaa-wba2-dictionary_FTTN-launch.pdf) or internet service e.g [NBN AVC Service ID](https://www.nbnco.com.au/content/dam/nbnco2/documents/sfaa-wba2-dictionary_FTTN-launch.pdf). In accordance with [CDR ID permanence](#id-permanence) requirements.|
|invoiceNumber|string|optional|The number of the invoice in which this transaction is included if it has been issued.|
|description|string|optional|Optional description of the transaction that can be used for display purposes.|
|startDate|[DateTimeString](#common-field-types)|mandatory|Date and time when the usage period starts.|
|endDate|[DateTimeString](#common-field-types)|mandatory|Date and time when the usage period ends.|
|amount|[AmountString](#common-field-types)|mandatory|The amount charged or credited for this transaction prior to any adjustments being applied. A negative value indicates a credit.|
|adjustments|[[TelcoBillingAccountTransactionAdjustments](#schemacdr-telco-apitelcobillingaccounttransactionadjustments)]|optional|Optional array of adjustments arising for this transaction.|

<h3 class="schema-toc" id="cdr-telco-api_schemas_tocStelcobillingonceofftransaction">TelcoBillingOnceOffTransaction</h3>
<p id="tocStelcobillingonceofftransaction" class="orig-anchor"></p>

<p>
  <a id="cdr-telco-api_schema-base_telcobillingonceofftransaction"></a>
  <a class="schema-anchor" id="schemacdr-telco-apitelcobillingonceofftransaction"></a>
</p>

```json
{
  "serviceId": "string",
  "invoiceNumber": "string",
  "amount": "string",
  "description": "string"
}
```

<h3 id="cdr-telco-api_telcobillingonceofftransaction_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|serviceId|string|optional|The ID of the service identifier to which this transaction applies if any. E.g a [MSISDN](https://www.etsi.org/deliver/etsi_gts/03/0303/05.00.00_60/gsmts_0303v050000p.pdf), [FNN](https://www.nbnco.com.au/content/dam/nbnco2/documents/sfaa-wba2-dictionary_FTTN-launch.pdf) or internet service e.g [NBN AVC Service ID](https://www.nbnco.com.au/content/dam/nbnco2/documents/sfaa-wba2-dictionary_FTTN-launch.pdf). In accordance with [CDR ID permanence](#id-permanence) requirements.|
|invoiceNumber|string|optional|The number of the invoice in which this transaction is included if it has been issued.|
|amount|[AmountString](#common-field-types)|mandatory|The amount of the charge or credit. A positive value indicates a charge and a negative value indicates a credit.|
|description|string|mandatory|A free text description of the item.|

<h3 class="schema-toc" id="cdr-telco-api_schemas_tocStelcobillingothertransaction">TelcoBillingOtherTransaction</h3>
<p id="tocStelcobillingothertransaction" class="orig-anchor"></p>

<p>
  <a id="cdr-telco-api_schema-base_telcobillingothertransaction"></a>
  <a class="schema-anchor" id="schemacdr-telco-apitelcobillingothertransaction"></a>
</p>

```json
{
  "serviceId": "string",
  "invoiceNumber": "string",
  "startDate": "string",
  "endDate": "string",
  "type": "SERVICE",
  "amount": "string",
  "description": "string",
  "adjustments": [
    {
      "amount": "string",
      "description": "string"
    }
  ]
}
```

<h3 id="cdr-telco-api_telcobillingothertransaction_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|serviceId|string|optional|The service identifier to which this transaction applies if any. E.g a mobile [MSISDN](https://www.etsi.org/deliver/etsi_gts/03/0303/05.00.00_60/gsmts_0303v050000p.pdf), [FNN](https://www.nbnco.com.au/content/dam/nbnco2/documents/sfaa-wba2-dictionary_FTTN-launch.pdf) or internet service e.g [NBN AVC Service ID](https://www.nbnco.com.au/content/dam/nbnco2/documents/sfaa-wba2-dictionary_FTTN-launch.pdf). In accordance with [CDR ID permanence](#id-permanence) requirements.|
|invoiceNumber|string|optional|The number of the invoice in which this transaction is included if it has been issued.|
|startDate|[DateString](#common-field-types)|optional|Optional start date for the application of the charge.|
|endDate|[DateString](#common-field-types)|optional|Optional end date for the application of the charge.|
|type|[Enum](#common-field-types)|optional|Type of charge. Assumed to be `OTHER` if absent.|
|amount|[AmountString](#common-field-types)|mandatory|The amount of the charge.|
|description|string|mandatory|A free text description of the item.|
|adjustments|[[TelcoBillingAccountTransactionAdjustments](#schemacdr-telco-apitelcobillingaccounttransactionadjustments)]|optional|Optional array of adjustments arising for this transaction.|

<h4 id="cdr-telco-api_telcobillingothertransaction_enumerated-values-main">Enumerated Values</h4>

|Property|Value|
|---|---|
|type|SERVICE|
|type|NETWORK|
|type|EQUIPMENT|
|type|METERING|
|type|OTHER|

<h3 class="schema-toc" id="cdr-telco-api_schemas_tocStelcobillingpaymenttransaction">TelcoBillingPaymentTransaction</h3>
<p id="tocStelcobillingpaymenttransaction" class="orig-anchor"></p>

<p>
  <a id="cdr-telco-api_schema-base_telcobillingpaymenttransaction"></a>
  <a class="schema-anchor" id="schemacdr-telco-apitelcobillingpaymenttransaction"></a>
</p>

```json
{
  "amount": "string",
  "method": "DIRECT_DEBIT"
}
```

<h3 id="cdr-telco-api_telcobillingpaymenttransaction_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|amount|[AmountString](#common-field-types)|mandatory|The amount paid.|
|method|[Enum](#common-field-types)|mandatory|The method of payment.|

<h4 id="cdr-telco-api_telcobillingpaymenttransaction_enumerated-values-main">Enumerated Values</h4>

|Property|Value|
|---|---|
|method|DIRECT_DEBIT|
|method|CARD|
|method|TRANSFER|
|method|BPAY|
|method|CASH|
|method|CHEQUE|
|method|VOUCHER|
|method|OTHER|

<h3 class="schema-toc" id="cdr-telco-api_schemas_tocStelcobalance">TelcoBalance</h3>
<p id="tocStelcobalance" class="orig-anchor"></p>

<p>
  <a id="cdr-telco-api_schema-base_telcobalance"></a>
  <a class="schema-anchor" id="schemacdr-telco-apitelcobalance"></a>
</p>

```json
{
  "services": [
    {
      "serviceId": "string",
      "displayName": "string",
      "phoneNumber": "string",
      "startDate": "string",
      "endDate": "string",
      "balance": {
        "data": {
          "planType": "METERED",
          "description": "string",
          "upload": 0,
          "download": 0,
          "amount": "string",
          "roaming": {
            "description": "string",
            "download": 0,
            "amount": "string"
          }
        },
        "voice": {
          "planType": "METERED",
          "national": {
            "description": "string",
            "duration": "string",
            "number": 0,
            "amount": "string"
          },
          "international": {
            "description": "string",
            "duration": "string",
            "number": 0,
            "amount": "string"
          },
          "roaming": {
            "description": "string",
            "duration": "string",
            "number": 0,
            "amount": "string"
          }
        },
        "messaging": {
          "planType": "METERED",
          "sms": {
            "description": "string",
            "national": 0,
            "international": 0,
            "roaming": 0,
            "amount": "string"
          },
          "mms": {
            "description": "string",
            "national": 0,
            "international": 0,
            "roaming": 0,
            "amount": "string"
          }
        }
      }
    }
  ]
}
```

*Object containing account service usage summary.*

<h3 id="cdr-telco-api_telcobalance_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|services|[allOf]|mandatory|Summary of balances.|

<h3 class="schema-toc" id="cdr-telco-api_schemas_tocStelcoservicebalance">TelcoServiceBalance</h3>
<p id="tocStelcoservicebalance" class="orig-anchor"></p>

<p>
  <a id="cdr-telco-api_schema-base_telcoservicebalance"></a>
  <a class="schema-anchor" id="schemacdr-telco-apitelcoservicebalance"></a>
</p>

```json
{
  "serviceId": "string",
  "displayName": "string",
  "phoneNumber": "string",
  "startDate": "string",
  "endDate": "string",
  "balance": {
    "data": {
      "planType": "METERED",
      "description": "string",
      "upload": 0,
      "download": 0,
      "amount": "string",
      "roaming": {
        "description": "string",
        "download": 0,
        "amount": "string"
      }
    },
    "voice": {
      "planType": "METERED",
      "national": {
        "description": "string",
        "duration": "string",
        "number": 0,
        "amount": "string"
      },
      "international": {
        "description": "string",
        "duration": "string",
        "number": 0,
        "amount": "string"
      },
      "roaming": {
        "description": "string",
        "duration": "string",
        "number": 0,
        "amount": "string"
      }
    },
    "messaging": {
      "planType": "METERED",
      "sms": {
        "description": "string",
        "national": 0,
        "international": 0,
        "roaming": 0,
        "amount": "string"
      },
      "mms": {
        "description": "string",
        "national": 0,
        "international": 0,
        "roaming": 0,
        "amount": "string"
      }
    }
  }
}
```

*Telco balances for a service.*

<h3 id="cdr-telco-api_telcoservicebalance_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|serviceId|string|optional|The serviceId representing a unique service identifier such as a mobile [MSISDN](https://www.etsi.org/deliver/etsi_gts/03/0303/05.00.00_60/gsmts_0303v050000p.pdf), [FNN](https://www.nbnco.com.au/content/dam/nbnco2/documents/sfaa-wba2-dictionary_FTTN-launch.pdf) or internet service e.g [NBN AVC Service ID](https://www.nbnco.com.au/content/dam/nbnco2/documents/sfaa-wba2-dictionary_FTTN-launch.pdf). In accordance with [CDR ID permanence](#id-permanence) requirements.|
|displayName|string|optional|Optional description of the service used for display purposes.|
|phoneNumber|string|conditional|Required if the service includes a phone number.|
|startDate|[DateTimeString](#common-field-types)|optional|Date when the balance period started.|
|endDate|[DateTimeString](#common-field-types)|optional|Date when the balance period ends.|
|balance|[TelcoServiceBalances](#schemacdr-telco-apitelcoservicebalances)|optional|A summary of Service balances.|

<h3 class="schema-toc" id="cdr-telco-api_schemas_tocStelcoplantype">TelcoPlanType</h3>
<p id="tocStelcoplantype" class="orig-anchor"></p>

<p>
  <a id="cdr-telco-api_schema-base_telcoplantype"></a>
  <a class="schema-anchor" id="schemacdr-telco-apitelcoplantype"></a>
</p>

```json
"METERED"
```

*Plan type for this feature.<ul><li>`METERED`: A plan is charged by usage for the feature<li>`UNMETERED`: A plan with no limits for a feature<li>`LIMITED`: Where plan limit inclusions apply<li>`UNSUPPORTED`: Feature is not supported.</ul>*

<h3 id="cdr-telco-api_telcoplantype_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|*anonymous*|[Enum](#common-field-types)|mandatory|Plan type for this feature.<ul><li>`METERED`: A plan is charged by usage for the feature<li>`UNMETERED`: A plan with no limits for a feature<li>`LIMITED`: Where plan limit inclusions apply<li>`UNSUPPORTED`: Feature is not supported.</ul>|

<h4 id="cdr-telco-api_telcoplantype_enumerated-values-main">Enumerated Values</h4>

|Property|Value|
|---|---|
|*anonymous*|METERED|
|*anonymous*|UNMETERED|
|*anonymous*|LIMITED|
|*anonymous*|UNSUPPORTED|

<h3 class="schema-toc" id="cdr-telco-api_schemas_tocScommonphysicaladdress">CommonPhysicalAddress</h3>
<p id="tocScommonphysicaladdress" class="orig-anchor"></p>

<p>
  <a id="cdr-telco-api_schema-base_commonphysicaladdress"></a>
  <a class="schema-anchor" id="schemacdr-telco-apicommonphysicaladdress"></a>
</p>

```json
{
  "addressUType": "paf",
  "simple": {
    "mailingName": "string",
    "addressLine1": "string",
    "addressLine2": "string",
    "addressLine3": "string",
    "postcode": "string",
    "city": "string",
    "state": "string",
    "country": "AUS"
  },
  "paf": {
    "dpid": "string",
    "thoroughfareNumber1": 0,
    "thoroughfareNumber1Suffix": "string",
    "thoroughfareNumber2": 0,
    "thoroughfareNumber2Suffix": "string",
    "flatUnitType": "string",
    "flatUnitNumber": "string",
    "floorLevelType": "string",
    "floorLevelNumber": "string",
    "lotNumber": "string",
    "buildingName1": "string",
    "buildingName2": "string",
    "streetName": "string",
    "streetType": "string",
    "streetSuffix": "string",
    "postalDeliveryType": "string",
    "postalDeliveryNumber": 0,
    "postalDeliveryNumberPrefix": "string",
    "postalDeliveryNumberSuffix": "string",
    "localityName": "string",
    "postcode": "string",
    "state": "string"
  }
}
```

<h3 id="cdr-telco-api_commonphysicaladdress_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|addressUType|[Enum](#common-field-types)|mandatory|The type of address object present.|
|simple|[CommonSimpleAddress](#schemacdr-telco-apicommonsimpleaddress)|conditional|Required if _addressUType_ is set to `simple`.|
|paf|[CommonPAFAddress](#schemacdr-telco-apicommonpafaddress)|conditional|Australian address formatted according to the file format defined by the [PAF file format](https://auspost.com.au/content/dam/auspost_corp/media/documents/australia-post-data-guide.pdf). Required if _addressUType_ is set to `paf`.|

<h4 id="cdr-telco-api_commonphysicaladdress_enumerated-values-main">Enumerated Values</h4>

|Property|Value|
|---|---|
|addressUType|paf|
|addressUType|simple|

<h3 class="schema-toc" id="cdr-telco-api_schemas_tocScommonsimpleaddress">CommonSimpleAddress</h3>
<p id="tocScommonsimpleaddress" class="orig-anchor"></p>

<p>
  <a id="cdr-telco-api_schema-base_commonsimpleaddress"></a>
  <a class="schema-anchor" id="schemacdr-telco-apicommonsimpleaddress"></a>
</p>

```json
{
  "mailingName": "string",
  "addressLine1": "string",
  "addressLine2": "string",
  "addressLine3": "string",
  "postcode": "string",
  "city": "string",
  "state": "string",
  "country": "AUS"
}
```

*Required if _addressUType_ is set to `simple`.*

<h3 id="cdr-telco-api_commonsimpleaddress_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|mailingName|string|optional|Name of the individual or business formatted for inclusion in an address used for physical mail.|
|addressLine1|string|mandatory|First line of the standard address object.|
|addressLine2|string|optional|Second line of the standard address object.|
|addressLine3|string|optional|Third line of the standard address object.|
|postcode|string|conditional|Mandatory for Australian addresses.|
|city|string|mandatory|Name of the city or locality.|
|state|string|mandatory|Free text if the country is not Australia. If country is Australia then must be one of the values defined by the [State Type Abbreviation](https://auspost.com.au/content/dam/auspost_corp/media/documents/australia-post-data-guide.pdf) in the PAF file format. `NSW`, `QLD`, `VIC`, `NT`, `WA`, `SA`, `TAS`, `ACT`, `AAT`.|
|country|[ExternalRef](#common-field-types)|optional|A valid [ISO 3166 Alpha-3](https://www.iso.org/iso-3166-country-codes.html) country code. Australia (`AUS`) is assumed if country is not present.|

<h3 class="schema-toc" id="cdr-telco-api_schemas_tocScommonpafaddress">CommonPAFAddress</h3>
<p id="tocScommonpafaddress" class="orig-anchor"></p>

<p>
  <a id="cdr-telco-api_schema-base_commonpafaddress"></a>
  <a class="schema-anchor" id="schemacdr-telco-apicommonpafaddress"></a>
</p>

```json
{
  "dpid": "string",
  "thoroughfareNumber1": 0,
  "thoroughfareNumber1Suffix": "string",
  "thoroughfareNumber2": 0,
  "thoroughfareNumber2Suffix": "string",
  "flatUnitType": "string",
  "flatUnitNumber": "string",
  "floorLevelType": "string",
  "floorLevelNumber": "string",
  "lotNumber": "string",
  "buildingName1": "string",
  "buildingName2": "string",
  "streetName": "string",
  "streetType": "string",
  "streetSuffix": "string",
  "postalDeliveryType": "string",
  "postalDeliveryNumber": 0,
  "postalDeliveryNumberPrefix": "string",
  "postalDeliveryNumberSuffix": "string",
  "localityName": "string",
  "postcode": "string",
  "state": "string"
}
```

*Australian address formatted according to the file format defined by the [PAF file format](https://auspost.com.au/content/dam/auspost_corp/media/documents/australia-post-data-guide.pdf). Required if _addressUType_ is set to `paf`.*

<h3 id="cdr-telco-api_commonpafaddress_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|dpid|string|optional|Unique identifier for an address as defined by Australia Post. Also known as Delivery Point Identifier.|
|thoroughfareNumber1|[PositiveInteger](#common-field-types)|optional|Thoroughfare number for a property (first number in a property ranged address).|
|thoroughfareNumber1Suffix|string|optional|Suffix for the thoroughfare number. Only relevant if _thoroughfareNumber1_ is populated.|
|thoroughfareNumber2|[PositiveInteger](#common-field-types)|optional|Second thoroughfare number (only used if the property has a ranged address e.g., 23-25).|
|thoroughfareNumber2Suffix|string|optional|Suffix for the second thoroughfare number. Only relevant is _thoroughfareNumber2_ is populated.|
|flatUnitType|string|optional|Type of flat or unit for the address.|
|flatUnitNumber|string|optional|Unit number (including suffix, if applicable).|
|floorLevelType|string|optional|Type of floor or level for the address.|
|floorLevelNumber|string|optional|Floor or level number (including alpha characters).|
|lotNumber|string|optional|Allotment number for the address.|
|buildingName1|string|optional|Building/Property name 1.|
|buildingName2|string|optional|Building/Property name 2.|
|streetName|string|optional|The name of the street.|
|streetType|string|optional|The street type. Valid enumeration defined by Australia Post PAF code file.|
|streetSuffix|string|optional|The street type suffix. Valid enumeration defined by Australia Post PAF code file.|
|postalDeliveryType|string|optional|Postal delivery type. (e.g., PO BOX). Valid enumeration defined by Australia Post PAF code file.|
|postalDeliveryNumber|[PositiveInteger](#common-field-types)|optional|Postal delivery number if the address is a postal delivery type.|
|postalDeliveryNumberPrefix|string|optional|Postal delivery number prefix related to the postal delivery number.|
|postalDeliveryNumberSuffix|string|optional|Postal delivery number suffix related to the postal delivery number.|
|localityName|string|mandatory|Full name of locality.|
|postcode|string|mandatory|Postcode for the locality.|
|state|string|mandatory|State in which the address belongs. Valid enumeration defined by Australia Post PAF code file [State Type Abbreviation](https://auspost.com.au/content/dam/auspost_corp/media/documents/australia-post-data-guide.pdf). `NSW`, `QLD`, `VIC`, `NT`, `WA`, `SA`, `TAS`, `ACT`, `AAT`.|

<h3 class="schema-toc" id="cdr-telco-api_schemas_tocSlinks">Links</h3>
<p id="tocSlinks" class="orig-anchor"></p>

<p>
  <a id="cdr-telco-api_schema-base_links"></a>
  <a class="schema-anchor" id="schemacdr-telco-apilinks"></a>
</p>

```json
{
  "self": "string"
}
```

<h3 id="cdr-telco-api_links_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|self|[URIString](#common-field-types)|mandatory|Fully qualified link that generated the current response document.|

<h3 class="schema-toc" id="cdr-telco-api_schemas_tocSmeta">Meta</h3>
<p id="tocSmeta" class="orig-anchor"></p>

<p>
  <a id="cdr-telco-api_schema-base_meta"></a>
  <a class="schema-anchor" id="schemacdr-telco-apimeta"></a>
</p>

```json
{}
```

<h3 id="cdr-telco-api_meta_properties">Properties</h3>

*None*

<h3 class="schema-toc" id="cdr-telco-api_schemas_tocSlinkspaginated">LinksPaginated</h3>
<p id="tocSlinkspaginated" class="orig-anchor"></p>

<p>
  <a id="cdr-telco-api_schema-base_linkspaginated"></a>
  <a class="schema-anchor" id="schemacdr-telco-apilinkspaginated"></a>
</p>

```json
{
  "self": "string",
  "first": "string",
  "prev": "string",
  "next": "string",
  "last": "string"
}
```

<h3 id="cdr-telco-api_linkspaginated_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|self|[URIString](#common-field-types)|mandatory|Fully qualified link that generated the current response document.|
|first|[URIString](#common-field-types)|conditional|URI to the first page of this set. Mandatory if this response is not the first page.|
|prev|[URIString](#common-field-types)|conditional|URI to the previous page of this set. Mandatory if this response is not the first page.|
|next|[URIString](#common-field-types)|conditional|URI to the next page of this set. Mandatory if this response is not the last page.|
|last|[URIString](#common-field-types)|conditional|URI to the last page of this set. Mandatory if this response is not the last page.|

<h3 class="schema-toc" id="cdr-telco-api_schemas_tocSmetapaginated">MetaPaginated</h3>
<p id="tocSmetapaginated" class="orig-anchor"></p>

<p>
  <a id="cdr-telco-api_schema-base_metapaginated"></a>
  <a class="schema-anchor" id="schemacdr-telco-apimetapaginated"></a>
</p>

```json
{
  "totalRecords": 0,
  "totalPages": 0
}
```

<h3 id="cdr-telco-api_metapaginated_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|totalRecords|[NaturalNumber](#common-field-types)|mandatory|The total number of records in the full set. See [pagination](#pagination).|
|totalPages|[NaturalNumber](#common-field-types)|mandatory|The total number of pages in the full set. See [pagination](#pagination).|

<h3 class="schema-toc" id="cdr-telco-api_schemas_tocStelcoproductlistresponsedata">TelcoProductListResponseData</h3>
<p id="tocStelcoproductlistresponsedata" class="orig-anchor"></p>

<p>
  <a id="cdr-telco-api_schema-base_telcoproductlistresponsedata"></a>
  <a class="schema-anchor" id="schemacdr-telco-apitelcoproductlistresponsedata"></a>
</p>

```json
{
  "plans": [
    {
      "productId": "string",
      "effectiveFrom": "string",
      "effectiveTo": "string",
      "lastUpdated": "string",
      "displayName": "string",
      "description": "string",
      "type": "MOBILE",
      "purpose": "PERSONAL",
      "billingType": "PRE_PAID",
      "contract": {
        "name": "string",
        "description": "string",
        "duration": 0,
        "contractUri": "string"
      },
      "bundle": true,
      "brand": "string",
      "brandName": "string",
      "pricing": [
        {
          "name": "string",
          "description": "string",
          "period": "string",
          "amount": "string"
        }
      ],
      "thirdPartyAgentId": "string",
      "thirdPartyAgentName": "string",
      "applicationUri": "string",
      "additionalInformation": {
        "overviewUri": "string",
        "termsUri": "string",
        "eligibilityUri": "string",
        "pricingUri": "string",
        "bundleUri": "string"
      }
    }
  ]
}
```

<h3 id="cdr-telco-api_telcoproductlistresponsedata_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|plans|[[TelcoProduct](#schemacdr-telco-apitelcoproduct)]|mandatory|Array of Products.|

<h3 class="schema-toc" id="cdr-telco-api_schemas_tocStelcousagelistresponse">TelcoUsageListResponse</h3>
<p id="tocStelcousagelistresponse" class="orig-anchor"></p>

<p>
  <a id="cdr-telco-api_schema-base_telcousagelistresponse"></a>
  <a class="schema-anchor" id="schemacdr-telco-apitelcousagelistresponse"></a>
</p>

```json
{
  "data": {
    "accounts": [
      {
        "accountId": "string",
        "services": [
          {
            "service": {
              "serviceId": "string",
              "displayName": "string",
              "phoneNumber": "string",
              "startDate": "string",
              "endDate": "string",
              "usage": {
                "data": {
                  "upload": 0,
                  "download": 0,
                  "sessions": 0,
                  "amount": "string",
                  "roaming": {
                    "download": 0,
                    "amount": "string"
                  }
                },
                "voice": {
                  "national": {
                    "duration": "string",
                    "number": 0,
                    "amount": "string"
                  },
                  "international": {
                    "duration": "string",
                    "number": 0,
                    "amount": "string"
                  },
                  "roaming": {
                    "duration": "string",
                    "number": 0,
                    "amount": "string"
                  }
                },
                "messaging": {
                  "sms": {
                    "national": 0,
                    "international": 0,
                    "roaming": 0,
                    "amount": "string"
                  },
                  "mms": {
                    "national": 0,
                    "international": 0,
                    "roaming": 0,
                    "amount": "string"
                  }
                }
              }
            }
          }
        ]
      }
    ]
  },
  "links": {
    "self": "string"
  },
  "meta": {}
}
```

<h3 id="cdr-telco-api_telcousagelistresponse_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|data|[TelcoUsageListResponseData](#schemacdr-telco-apitelcousagelistresponsedata)|mandatory|none|
|links|[Links](#schemacdr-telco-apilinks)|mandatory|none|
|meta|[Meta](#schemacdr-telco-apimeta)|mandatory|none|

<h3 class="schema-toc" id="cdr-telco-api_schemas_tocStelcousagelistresponsedata">TelcoUsageListResponseData</h3>
<p id="tocStelcousagelistresponsedata" class="orig-anchor"></p>

<p>
  <a id="cdr-telco-api_schema-base_telcousagelistresponsedata"></a>
  <a class="schema-anchor" id="schemacdr-telco-apitelcousagelistresponsedata"></a>
</p>

```json
{
  "accounts": [
    {
      "accountId": "string",
      "services": [
        {
          "service": {
            "serviceId": "string",
            "displayName": "string",
            "phoneNumber": "string",
            "startDate": "string",
            "endDate": "string",
            "usage": {
              "data": {
                "upload": 0,
                "download": 0,
                "sessions": 0,
                "amount": "string",
                "roaming": {
                  "download": 0,
                  "amount": "string"
                }
              },
              "voice": {
                "national": {
                  "duration": "string",
                  "number": 0,
                  "amount": "string"
                },
                "international": {
                  "duration": "string",
                  "number": 0,
                  "amount": "string"
                },
                "roaming": {
                  "duration": "string",
                  "number": 0,
                  "amount": "string"
                }
              },
              "messaging": {
                "sms": {
                  "national": 0,
                  "international": 0,
                  "roaming": 0,
                  "amount": "string"
                },
                "mms": {
                  "national": 0,
                  "international": 0,
                  "roaming": 0,
                  "amount": "string"
                }
              }
            }
          }
        }
      ]
    }
  ]
}
```

<h3 id="cdr-telco-api_telcousagelistresponsedata_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|accounts|[[TelcoAccountUsage](#schemacdr-telco-apitelcoaccountusage)]|mandatory|Array of usage on accounts.|

<h3 class="schema-toc" id="cdr-telco-api_schemas_tocStelcoaccountlistresponsedata">TelcoAccountListResponseData</h3>
<p id="tocStelcoaccountlistresponsedata" class="orig-anchor"></p>

<p>
  <a id="cdr-telco-api_schema-base_telcoaccountlistresponsedata"></a>
  <a class="schema-anchor" id="schemacdr-telco-apitelcoaccountlistresponsedata"></a>
</p>

```json
{
  "accounts": [
    {
      "accountId": "string",
      "accountNumber": "string",
      "displayName": "string",
      "creationDate": "string",
      "lastUpdated": "string",
      "brand": "string",
      "openStatus": "CLOSED",
      "plans": [
        {
          "nickname": "string",
          "type": "MOBILE",
          "billingType": "PRE_PAID",
          "serviceIds": [
            "string"
          ],
          "planOverview": {
            "displayName": "string",
            "startDate": "string",
            "endDate": "string"
          }
        }
      ]
    }
  ]
}
```

<h3 id="cdr-telco-api_telcoaccountlistresponsedata_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|accounts|[[TelcoAccountResponseData](#schemacdr-telco-apitelcoaccountresponsedata)]|mandatory|Array of accounts.|

<h3 class="schema-toc" id="cdr-telco-api_schemas_tocStelcopaymentscheduleresponsedata">TelcoPaymentScheduleResponseData</h3>
<p id="tocStelcopaymentscheduleresponsedata" class="orig-anchor"></p>

<p>
  <a id="cdr-telco-api_schema-base_telcopaymentscheduleresponsedata"></a>
  <a class="schema-anchor" id="schemacdr-telco-apitelcopaymentscheduleresponsedata"></a>
</p>

```json
{
  "paymentSchedules": [
    {
      "amount": "string",
      "paymentScheduleUType": "cardDebit",
      "cardDebit": {
        "cardScheme": "VISA",
        "paymentFrequency": "string",
        "calculationType": "STATIC"
      },
      "directDebit": {
        "isTokenised": true,
        "bsb": "string",
        "accountNumber": "string",
        "paymentFrequency": "string",
        "calculationType": "STATIC"
      },
      "digitalWallet": {
        "name": "string",
        "identifier": "string",
        "type": "EMAIL",
        "provider": "PAYPAL_AU",
        "paymentFrequency": "string",
        "calculationType": "STATIC"
      },
      "manualPayment": {
        "billFrequency": "string"
      }
    }
  ]
}
```

<h3 id="cdr-telco-api_telcopaymentscheduleresponsedata_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|paymentSchedules|[[TelcoPaymentSchedule](#schemacdr-telco-apitelcopaymentschedule)]|mandatory|Array may be empty if no payment schedule exist.|

<h3 class="schema-toc" id="cdr-telco-api_schemas_tocStelcoconcessionsresponsedata">TelcoConcessionsResponseData</h3>
<p id="tocStelcoconcessionsresponsedata" class="orig-anchor"></p>

<p>
  <a id="cdr-telco-api_schema-base_telcoconcessionsresponsedata"></a>
  <a class="schema-anchor" id="schemacdr-telco-apitelcoconcessionsresponsedata"></a>
</p>

```json
{
  "concessions": [
    {
      "type": "CONCESSION",
      "displayName": "string",
      "additionalInfo": "string",
      "additionalInfoUri": "string",
      "startDate": "string",
      "endDate": "string",
      "discountFrequency": "string",
      "amount": "string",
      "percentage": "string",
      "appliedTo": [
        "INVOICE"
      ]
    }
  ]
}
```

<h3 id="cdr-telco-api_telcoconcessionsresponsedata_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|concessions|[[TelcoConcession](#schemacdr-telco-apitelcoconcession)]|mandatory|Array may be empty if no concessions exist.|

<h3 class="schema-toc" id="cdr-telco-api_schemas_tocStelcobalancelistresponsedata">TelcoBalanceListResponseData</h3>
<p id="tocStelcobalancelistresponsedata" class="orig-anchor"></p>

<p>
  <a id="cdr-telco-api_schema-base_telcobalancelistresponsedata"></a>
  <a class="schema-anchor" id="schemacdr-telco-apitelcobalancelistresponsedata"></a>
</p>

```json
{
  "balances": [
    {
      "accountId": "string",
      "balance": {
        "services": [
          {
            "serviceId": "string",
            "displayName": "string",
            "phoneNumber": "string",
            "startDate": "string",
            "endDate": "string",
            "balance": {
              "data": {
                "planType": "METERED",
                "description": "string",
                "upload": 0,
                "download": 0,
                "amount": "string",
                "roaming": {
                  "description": "string",
                  "download": 0,
                  "amount": "string"
                }
              },
              "voice": {
                "planType": "METERED",
                "national": {
                  "description": "string",
                  "duration": "string",
                  "number": 0,
                  "amount": "string"
                },
                "international": {
                  "description": "string",
                  "duration": "string",
                  "number": 0,
                  "amount": "string"
                },
                "roaming": {
                  "description": "string",
                  "duration": "string",
                  "number": 0,
                  "amount": "string"
                }
              },
              "messaging": {
                "planType": "METERED",
                "sms": {
                  "description": "string",
                  "national": 0,
                  "international": 0,
                  "roaming": 0,
                  "amount": "string"
                },
                "mms": {
                  "description": "string",
                  "national": 0,
                  "international": 0,
                  "roaming": 0,
                  "amount": "string"
                }
              }
            }
          }
        ]
      }
    }
  ]
}
```

<h3 id="cdr-telco-api_telcobalancelistresponsedata_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|balances|[[TelcoBalanceResponseData](#schemacdr-telco-apitelcobalanceresponsedata)]|mandatory|Array of account balances.|

<h3 class="schema-toc" id="cdr-telco-api_schemas_tocStelcobalanceresponsedata">TelcoBalanceResponseData</h3>
<p id="tocStelcobalanceresponsedata" class="orig-anchor"></p>

<p>
  <a id="cdr-telco-api_schema-base_telcobalanceresponsedata"></a>
  <a class="schema-anchor" id="schemacdr-telco-apitelcobalanceresponsedata"></a>
</p>

```json
{
  "accountId": "string",
  "balance": {
    "services": [
      {
        "serviceId": "string",
        "displayName": "string",
        "phoneNumber": "string",
        "startDate": "string",
        "endDate": "string",
        "balance": {
          "data": {
            "planType": "METERED",
            "description": "string",
            "upload": 0,
            "download": 0,
            "amount": "string",
            "roaming": {
              "description": "string",
              "download": 0,
              "amount": "string"
            }
          },
          "voice": {
            "planType": "METERED",
            "national": {
              "description": "string",
              "duration": "string",
              "number": 0,
              "amount": "string"
            },
            "international": {
              "description": "string",
              "duration": "string",
              "number": 0,
              "amount": "string"
            },
            "roaming": {
              "description": "string",
              "duration": "string",
              "number": 0,
              "amount": "string"
            }
          },
          "messaging": {
            "planType": "METERED",
            "sms": {
              "description": "string",
              "national": 0,
              "international": 0,
              "roaming": 0,
              "amount": "string"
            },
            "mms": {
              "description": "string",
              "national": 0,
              "international": 0,
              "roaming": 0,
              "amount": "string"
            }
          }
        }
      }
    ]
  }
}
```

<h3 id="cdr-telco-api_telcobalanceresponsedata_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|accountId|string|optional|The ID of the account. In accordance with [CDR ID permanence](#id-permanence) requirements.|
|balance|[TelcoBalance](#schemacdr-telco-apitelcobalance)|optional|Object containing account service usage summary.|

<h3 class="schema-toc" id="cdr-telco-api_schemas_tocStelcoinvoiceresponse">TelcoInvoiceResponse</h3>
<p id="tocStelcoinvoiceresponse" class="orig-anchor"></p>

<p>
  <a id="cdr-telco-api_schema-base_telcoinvoiceresponse"></a>
  <a class="schema-anchor" id="schemacdr-telco-apitelcoinvoiceresponse"></a>
</p>

```json
{
  "data": {
    "invoices": [
      {
        "accountId": "string",
        "invoiceNumber": "string",
        "issueDate": "string",
        "dueDate": "string",
        "period": {
          "startDate": "string",
          "endDate": "string"
        },
        "invoiceAmount": "string",
        "gstAmount": "string",
        "payOnTimeDiscount": {
          "discountAmount": "string",
          "gstAmount": "string",
          "date": "string"
        },
        "balanceAtIssue": "string",
        "services": [
          "string"
        ],
        "accountCharges": {
          "totalUsageCharges": "string",
          "totalOnceOffCharges": "string",
          "totalDiscounts": "string",
          "otherCharges": {
            "amount": "string",
            "description": "string",
            "type": "SERVICE"
          },
          "totalGst": "string"
        },
        "accountUsage": {
          "data": {
            "upload": 0,
            "download": 0,
            "sessions": 0,
            "amount": "string",
            "roaming": {
              "download": 0,
              "amount": "string"
            }
          },
          "voice": {
            "national": {
              "duration": "string",
              "number": 0,
              "amount": "string"
            },
            "international": {
              "duration": "string",
              "number": 0,
              "amount": "string"
            },
            "roaming": {
              "duration": "string",
              "number": 0,
              "amount": "string"
            }
          },
          "messaging": {
            "sms": {
              "national": 0,
              "international": 0,
              "roaming": 0,
              "amount": "string"
            },
            "mms": {
              "national": 0,
              "international": 0,
              "roaming": 0,
              "amount": "string"
            }
          }
        },
        "paymentStatus": "PAID"
      }
    ]
  },
  "links": {
    "self": "string"
  },
  "meta": {}
}
```

<h3 id="cdr-telco-api_telcoinvoiceresponse_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|data|[TelcoInvoiceListResponseData](#schemacdr-telco-apitelcoinvoicelistresponsedata)|mandatory|none|
|links|[Links](#schemacdr-telco-apilinks)|mandatory|none|
|meta|[Meta](#schemacdr-telco-apimeta)|mandatory|none|

<h3 class="schema-toc" id="cdr-telco-api_schemas_tocStelcoinvoicelistresponse">TelcoInvoiceListResponse</h3>
<p id="tocStelcoinvoicelistresponse" class="orig-anchor"></p>

<p>
  <a id="cdr-telco-api_schema-base_telcoinvoicelistresponse"></a>
  <a class="schema-anchor" id="schemacdr-telco-apitelcoinvoicelistresponse"></a>
</p>

```json
{
  "data": {
    "invoices": [
      {
        "accountId": "string",
        "invoiceNumber": "string",
        "issueDate": "string",
        "dueDate": "string",
        "period": {
          "startDate": "string",
          "endDate": "string"
        },
        "invoiceAmount": "string",
        "gstAmount": "string",
        "payOnTimeDiscount": {
          "discountAmount": "string",
          "gstAmount": "string",
          "date": "string"
        },
        "balanceAtIssue": "string",
        "services": [
          "string"
        ],
        "accountCharges": {
          "totalUsageCharges": "string",
          "totalOnceOffCharges": "string",
          "totalDiscounts": "string",
          "otherCharges": {
            "amount": "string",
            "description": "string",
            "type": "SERVICE"
          },
          "totalGst": "string"
        },
        "accountUsage": {
          "data": {
            "upload": 0,
            "download": 0,
            "sessions": 0,
            "amount": "string",
            "roaming": {
              "download": 0,
              "amount": "string"
            }
          },
          "voice": {
            "national": {
              "duration": "string",
              "number": 0,
              "amount": "string"
            },
            "international": {
              "duration": "string",
              "number": 0,
              "amount": "string"
            },
            "roaming": {
              "duration": "string",
              "number": 0,
              "amount": "string"
            }
          },
          "messaging": {
            "sms": {
              "national": 0,
              "international": 0,
              "roaming": 0,
              "amount": "string"
            },
            "mms": {
              "national": 0,
              "international": 0,
              "roaming": 0,
              "amount": "string"
            }
          }
        },
        "paymentStatus": "PAID"
      }
    ]
  },
  "links": {
    "self": "string",
    "first": "string",
    "prev": "string",
    "next": "string",
    "last": "string"
  },
  "meta": {
    "totalRecords": 0,
    "totalPages": 0
  }
}
```

<h3 id="cdr-telco-api_telcoinvoicelistresponse_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|data|[TelcoInvoiceListResponseData](#schemacdr-telco-apitelcoinvoicelistresponsedata)|mandatory|none|
|links|[LinksPaginated](#schemacdr-telco-apilinkspaginated)|mandatory|none|
|meta|[MetaPaginated](#schemacdr-telco-apimetapaginated)|mandatory|none|

<h3 class="schema-toc" id="cdr-telco-api_schemas_tocStelcoinvoicelistresponsedata">TelcoInvoiceListResponseData</h3>
<p id="tocStelcoinvoicelistresponsedata" class="orig-anchor"></p>

<p>
  <a id="cdr-telco-api_schema-base_telcoinvoicelistresponsedata"></a>
  <a class="schema-anchor" id="schemacdr-telco-apitelcoinvoicelistresponsedata"></a>
</p>

```json
{
  "invoices": [
    {
      "accountId": "string",
      "invoiceNumber": "string",
      "issueDate": "string",
      "dueDate": "string",
      "period": {
        "startDate": "string",
        "endDate": "string"
      },
      "invoiceAmount": "string",
      "gstAmount": "string",
      "payOnTimeDiscount": {
        "discountAmount": "string",
        "gstAmount": "string",
        "date": "string"
      },
      "balanceAtIssue": "string",
      "services": [
        "string"
      ],
      "accountCharges": {
        "totalUsageCharges": "string",
        "totalOnceOffCharges": "string",
        "totalDiscounts": "string",
        "otherCharges": {
          "amount": "string",
          "description": "string",
          "type": "SERVICE"
        },
        "totalGst": "string"
      },
      "accountUsage": {
        "data": {
          "upload": 0,
          "download": 0,
          "sessions": 0,
          "amount": "string",
          "roaming": {
            "download": 0,
            "amount": "string"
          }
        },
        "voice": {
          "national": {
            "duration": "string",
            "number": 0,
            "amount": "string"
          },
          "international": {
            "duration": "string",
            "number": 0,
            "amount": "string"
          },
          "roaming": {
            "duration": "string",
            "number": 0,
            "amount": "string"
          }
        },
        "messaging": {
          "sms": {
            "national": 0,
            "international": 0,
            "roaming": 0,
            "amount": "string"
          },
          "mms": {
            "national": 0,
            "international": 0,
            "roaming": 0,
            "amount": "string"
          }
        }
      },
      "paymentStatus": "PAID"
    }
  ]
}
```

<h3 id="cdr-telco-api_telcoinvoicelistresponsedata_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|invoices|[[TelcoInvoice](#schemacdr-telco-apitelcoinvoice)]|mandatory|Array of invoices sorted by issue date in descending order.|

<h3 class="schema-toc" id="cdr-telco-api_schemas_tocStelcotransactionlistresponsedata">TelcoTransactionListResponseData</h3>
<p id="tocStelcotransactionlistresponsedata" class="orig-anchor"></p>

<p>
  <a id="cdr-telco-api_schema-base_telcotransactionlistresponsedata"></a>
  <a class="schema-anchor" id="schemacdr-telco-apitelcotransactionlistresponsedata"></a>
</p>

```json
{
  "transactions": [
    {
      "accountId": "string",
      "executionDateTime": "string",
      "gst": "string",
      "transactionUType": "account",
      "account": {
        "serviceIds": "string",
        "invoiceNumber": "string",
        "description": "string",
        "startDate": "string",
        "endDate": "string",
        "amount": "string",
        "adjustments": [
          {
            "amount": "string",
            "description": "string"
          }
        ]
      },
      "onceOff": {
        "serviceId": "string",
        "invoiceNumber": "string",
        "amount": "string",
        "description": "string"
      },
      "otherCharges": {
        "serviceId": "string",
        "invoiceNumber": "string",
        "startDate": "string",
        "endDate": "string",
        "type": "SERVICE",
        "amount": "string",
        "description": "string",
        "adjustments": [
          {
            "amount": "string",
            "description": "string"
          }
        ]
      },
      "payment": {
        "amount": "string",
        "method": "DIRECT_DEBIT"
      }
    }
  ]
}
```

<h3 id="cdr-telco-api_telcotransactionlistresponsedata_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|transactions|[[TelcoBillingTransaction](#schemacdr-telco-apitelcobillingtransaction)]|mandatory|Array of transactions sorted by date and time in descending order.|

<h3 class="schema-toc" id="cdr-telco-api_schemas_tocStelcoproductpricing">TelcoProductPricing</h3>
<p id="tocStelcoproductpricing" class="orig-anchor"></p>

<p>
  <a id="cdr-telco-api_schema-base_telcoproductpricing"></a>
  <a class="schema-anchor" id="schemacdr-telco-apitelcoproductpricing"></a>
</p>

```json
{
  "name": "string",
  "description": "string",
  "period": "string",
  "amount": "string"
}
```

<h3 id="cdr-telco-api_telcoproductpricing_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|name|string|mandatory|The display name of the pricing.|
|description|string|mandatory|The description of the pricing.|
|period|[ExternalRef](#common-field-types)|optional|The duration that occurs on a pricing schedule indicates the frequency. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax).|
|amount|[AmountString](#common-field-types)|mandatory|The amount charged for the duration period.|

<h3 class="schema-toc" id="cdr-telco-api_schemas_tocStelcoadditionalinformation">TelcoAdditionalInformation</h3>
<p id="tocStelcoadditionalinformation" class="orig-anchor"></p>

<p>
  <a id="cdr-telco-api_schema-base_telcoadditionalinformation"></a>
  <a class="schema-anchor" id="schemacdr-telco-apitelcoadditionalinformation"></a>
</p>

```json
{
  "overviewUri": "string",
  "termsUri": "string",
  "eligibilityUri": "string",
  "pricingUri": "string",
  "bundleUri": "string"
}
```

*Object that contains links to additional information on specific topics.*

<h3 id="cdr-telco-api_telcoadditionalinformation_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|overviewUri|[URIString](#common-field-types)|optional|A link to a general overview of the plan.|
|termsUri|[URIString](#common-field-types)|optional|A link to terms and conditions for the plan.|
|eligibilityUri|[URIString](#common-field-types)|optional|A link to detail on eligibility criteria for the plan.|
|pricingUri|[URIString](#common-field-types)|optional|A link to detail on pricing for the plan.|
|bundleUri|[URIString](#common-field-types)|optional|A link to detail on bundles that this plan can be a part of.|

<h3 class="schema-toc" id="cdr-telco-api_schemas_tocStelcoproductdetailmeteringcharges">TelcoProductDetailMeteringCharges</h3>
<p id="tocStelcoproductdetailmeteringcharges" class="orig-anchor"></p>

<p>
  <a id="cdr-telco-api_schema-base_telcoproductdetailmeteringcharges"></a>
  <a class="schema-anchor" id="schemacdr-telco-apitelcoproductdetailmeteringcharges"></a>
</p>

```json
{
  "displayName": "string",
  "description": "string",
  "minimumValue": "string",
  "maximumValue": "string",
  "period": "string"
}
```

<h3 id="cdr-telco-api_telcoproductdetailmeteringcharges_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|displayName|string|mandatory|Display name of the charge.|
|description|string|optional|Description of the charge.|
|minimumValue|[AmountString](#common-field-types)|mandatory|Minimum value of the charge if the charge is a range or the absolute value of the charge if no range is specified.|
|maximumValue|[AmountString](#common-field-types)|optional|The upper limit of the charge if the charge could occur in a range.|
|period|[ExternalRef](#common-field-types)|optional|The charges that occur on a schedule indicates the frequency. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax).|

<h3 class="schema-toc" id="cdr-telco-api_schemas_tocStelcoproductdetailfeature">TelcoProductDetailFeature</h3>
<p id="tocStelcoproductdetailfeature" class="orig-anchor"></p>

<p>
  <a id="cdr-telco-api_schema-base_telcoproductdetailfeature"></a>
  <a class="schema-anchor" id="schemacdr-telco-apitelcoproductdetailfeature"></a>
</p>

```json
{
  "displayName": "string",
  "description": "string",
  "category": "DATA"
}
```

<h3 id="cdr-telco-api_telcoproductdetailfeature_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|displayName|string|mandatory|The display name of the feature.|
|description|string|optional|The description of the feature.|
|category|[Enum](#common-field-types)|optional|The type of the feature.|

<h4 id="cdr-telco-api_telcoproductdetailfeature_enumerated-values-main">Enumerated Values</h4>

|Property|Value|
|---|---|
|category|DATA|
|category|VOICE|
|category|MESSAGING|
|category|HANDSET|
|category|DEVICE|
|category|NETWORK|
|category|ENTERTAINMENT|
|category|SUBSCRIPTION|
|category|SOFTWARE|
|category|OTHER|

<h3 class="schema-toc" id="cdr-telco-api_schemas_tocStelcoproductdetailbundles">TelcoProductDetailBundles</h3>
<p id="tocStelcoproductdetailbundles" class="orig-anchor"></p>

<p>
  <a id="cdr-telco-api_schema-base_telcoproductdetailbundles"></a>
  <a class="schema-anchor" id="schemacdr-telco-apitelcoproductdetailbundles"></a>
</p>

```json
{
  "displayName": "string",
  "description": "string",
  "bundleUri": "string",
  "features": [
    {
      "displayName": "string",
      "description": "string",
      "category": "DATA"
    }
  ]
}
```

<h3 id="cdr-telco-api_telcoproductdetailbundles_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|displayName|string|mandatory|The display name of the product bundle.|
|description|string|optional|The description of the product bundle.|
|bundleUri|[URIString](#common-field-types)|optional|The URI of the product bundle.|
|features|[[TelcoProductDetailFeature](#schemacdr-telco-apitelcoproductdetailfeature)]|optional|Optional list of features of the bundle.|

<h3 class="schema-toc" id="cdr-telco-api_schemas_tocStelcoproductdetailplan">TelcoProductDetailPlan</h3>
<p id="tocStelcoproductdetailplan" class="orig-anchor"></p>

<p>
  <a id="cdr-telco-api_schema-base_telcoproductdetailplan"></a>
  <a class="schema-anchor" id="schemacdr-telco-apitelcoproductdetailplan"></a>
</p>

```json
{
  "displayName": "string",
  "description": "string",
  "planUri": "string",
  "features": [
    {
      "displayName": "string",
      "description": "string"
    }
  ]
}
```

<h3 id="cdr-telco-api_telcoproductdetailplan_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|displayName|string|mandatory|The display name of the product plan.|
|description|string|optional|The display name of the product plan.|
|planUri|[URIString](#common-field-types)|optional|The URI of the product plan.|
|features|[[TelcoProductDetailPlanFeature](#schemacdr-telco-apitelcoproductdetailplanfeature)]|optional|Optional list of features of the plan.|

<h3 class="schema-toc" id="cdr-telco-api_schemas_tocStelcoproductdetailplanfeature">TelcoProductDetailPlanFeature</h3>
<p id="tocStelcoproductdetailplanfeature" class="orig-anchor"></p>

<p>
  <a id="cdr-telco-api_schema-base_telcoproductdetailplanfeature"></a>
  <a class="schema-anchor" id="schemacdr-telco-apitelcoproductdetailplanfeature"></a>
</p>

```json
{
  "displayName": "string",
  "description": "string"
}
```

<h3 id="cdr-telco-api_telcoproductdetailplanfeature_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|displayName|string|mandatory|The display name of the feature.|
|description|string|optional|The description of the feature.|

<h3 class="schema-toc" id="cdr-telco-api_schemas_tocStelcoproductdetaildiscountfeature">TelcoProductDetailDiscountFeature</h3>
<p id="tocStelcoproductdetaildiscountfeature" class="orig-anchor"></p>

<p>
  <a id="cdr-telco-api_schema-base_telcoproductdetaildiscountfeature"></a>
  <a class="schema-anchor" id="schemacdr-telco-apitelcoproductdetaildiscountfeature"></a>
</p>

```json
{
  "displayName": "string",
  "description": "string"
}
```

<h3 id="cdr-telco-api_telcoproductdetaildiscountfeature_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|displayName|string|mandatory|The display name of the discount feature.|
|description|string|optional|The description of the discount feature.|

<h3 class="schema-toc" id="cdr-telco-api_schemas_tocStelcoproductdetaildiscounts">TelcoProductDetailDiscounts</h3>
<p id="tocStelcoproductdetaildiscounts" class="orig-anchor"></p>

<p>
  <a id="cdr-telco-api_schema-base_telcoproductdetaildiscounts"></a>
  <a class="schema-anchor" id="schemacdr-telco-apitelcoproductdetaildiscounts"></a>
</p>

```json
{
  "displayName": "string",
  "description": "string",
  "discountUri": "string",
  "features": [
    {
      "displayName": "string",
      "description": "string"
    }
  ]
}
```

<h3 id="cdr-telco-api_telcoproductdetaildiscounts_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|displayName|string|mandatory|The display name of the product plan.|
|description|string|optional|The description name of the product plan.|
|discountUri|[URIString](#common-field-types)|optional|The URI of the discount.|
|features|[[TelcoProductDetailDiscountFeature](#schemacdr-telco-apitelcoproductdetaildiscountfeature)]|optional|Optional list of features of the discount.|

<h3 class="schema-toc" id="cdr-telco-api_schemas_tocStelcoproductdetailincentivefeature">TelcoProductDetailIncentiveFeature</h3>
<p id="tocStelcoproductdetailincentivefeature" class="orig-anchor"></p>

<p>
  <a id="cdr-telco-api_schema-base_telcoproductdetailincentivefeature"></a>
  <a class="schema-anchor" id="schemacdr-telco-apitelcoproductdetailincentivefeature"></a>
</p>

```json
{
  "displayName": "string",
  "description": "string"
}
```

<h3 id="cdr-telco-api_telcoproductdetailincentivefeature_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|displayName|string|mandatory|The display name of the incentive feature.|
|description|string|optional|The description of the incentive feature.|

<h3 class="schema-toc" id="cdr-telco-api_schemas_tocStelcoproductdetailincentives">TelcoProductDetailIncentives</h3>
<p id="tocStelcoproductdetailincentives" class="orig-anchor"></p>

<p>
  <a id="cdr-telco-api_schema-base_telcoproductdetailincentives"></a>
  <a class="schema-anchor" id="schemacdr-telco-apitelcoproductdetailincentives"></a>
</p>

```json
{
  "displayName": "string",
  "description": "string",
  "incentiveUri": "string",
  "features": [
    {
      "displayName": "string",
      "description": "string"
    }
  ]
}
```

<h3 id="cdr-telco-api_telcoproductdetailincentives_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|displayName|string|mandatory|The display name of the incentive.|
|description|string|optional|The description of the incentive.|
|incentiveUri|[URIString](#common-field-types)|optional|The URI of the incentive.|
|features|[[TelcoProductDetailIncentiveFeature](#schemacdr-telco-apitelcoproductdetailincentivefeature)]|optional|Optional list of features of the incentive.|

<h3 class="schema-toc" id="cdr-telco-api_schemas_tocStelcoproductdetail">TelcoProductDetail</h3>
<p id="tocStelcoproductdetail" class="orig-anchor"></p>

<p>
  <a id="cdr-telco-api_schema-base_telcoproductdetail"></a>
  <a class="schema-anchor" id="schemacdr-telco-apitelcoproductdetail"></a>
</p>

```json
{
  "meteringCharges": [
    {
      "displayName": "string",
      "description": "string",
      "minimumValue": "string",
      "maximumValue": "string",
      "period": "string"
    }
  ],
  "bundles": [
    {
      "displayName": "string",
      "description": "string",
      "bundleUri": "string",
      "features": [
        {
          "displayName": "string",
          "description": "string",
          "category": "DATA"
        }
      ]
    }
  ],
  "plans": [
    {
      "displayName": "string",
      "description": "string",
      "planUri": "string",
      "features": [
        {
          "displayName": "string",
          "description": "string"
        }
      ]
    }
  ],
  "discounts": [
    {
      "displayName": "string",
      "description": "string",
      "discountUri": "string",
      "features": [
        {
          "displayName": "string",
          "description": "string"
        }
      ]
    }
  ],
  "incentives": [
    {
      "displayName": "string",
      "description": "string",
      "incentiveUri": "string",
      "features": [
        {
          "displayName": "string",
          "description": "string"
        }
      ]
    }
  ]
}
```

<h3 id="cdr-telco-api_telcoproductdetail_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|meteringCharges|[[TelcoProductDetailMeteringCharges](#schemacdr-telco-apitelcoproductdetailmeteringcharges)]|optional|Charges for metering included in the plan.|
|bundles|[[TelcoProductDetailBundles](#schemacdr-telco-apitelcoproductdetailbundles)]|optional|Bundles the product can be part of.|
|plans|[[TelcoProductDetailPlan](#schemacdr-telco-apitelcoproductdetailplan)]|optional|Plans associated to the product.|
|discounts|[[TelcoProductDetailDiscounts](#schemacdr-telco-apitelcoproductdetaildiscounts)]|optional|Discounts associated to the product.|
|incentives|[[TelcoProductDetailIncentives](#schemacdr-telco-apitelcoproductdetailincentives)]|optional|Incentives associated to the product.|

<h3 class="schema-toc" id="cdr-telco-api_schemas_tocStelcoaccountusageservices">TelcoAccountUsageServices</h3>
<p id="tocStelcoaccountusageservices" class="orig-anchor"></p>

<p>
  <a id="cdr-telco-api_schema-base_telcoaccountusageservices"></a>
  <a class="schema-anchor" id="schemacdr-telco-apitelcoaccountusageservices"></a>
</p>

```json
{
  "service": {
    "serviceId": "string",
    "displayName": "string",
    "phoneNumber": "string",
    "startDate": "string",
    "endDate": "string",
    "usage": {
      "data": {
        "upload": 0,
        "download": 0,
        "sessions": 0,
        "amount": "string",
        "roaming": {
          "download": 0,
          "amount": "string"
        }
      },
      "voice": {
        "national": {
          "duration": "string",
          "number": 0,
          "amount": "string"
        },
        "international": {
          "duration": "string",
          "number": 0,
          "amount": "string"
        },
        "roaming": {
          "duration": "string",
          "number": 0,
          "amount": "string"
        }
      },
      "messaging": {
        "sms": {
          "national": 0,
          "international": 0,
          "roaming": 0,
          "amount": "string"
        },
        "mms": {
          "national": 0,
          "international": 0,
          "roaming": 0,
          "amount": "string"
        }
      }
    }
  }
}
```

<h3 id="cdr-telco-api_telcoaccountusageservices_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|service|[TelcoServiceUsage](#schemacdr-telco-apitelcoserviceusage)|mandatory|none|

<h3 class="schema-toc" id="cdr-telco-api_schemas_tocStelcoaccountplanoverview">TelcoAccountPlanOverview</h3>
<p id="tocStelcoaccountplanoverview" class="orig-anchor"></p>

<p>
  <a id="cdr-telco-api_schema-base_telcoaccountplanoverview"></a>
  <a class="schema-anchor" id="schemacdr-telco-apitelcoaccountplanoverview"></a>
</p>

```json
{
  "displayName": "string",
  "startDate": "string",
  "endDate": "string"
}
```

*Mandatory if _openStatus_ is `OPEN`.*

<h3 id="cdr-telco-api_telcoaccountplanoverview_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|displayName|string|optional|The name of the plan if one exists.|
|startDate|[DateString](#common-field-types)|mandatory|The start date of the applicability of this plan.|
|endDate|[DateString](#common-field-types)|optional|The end date of the applicability of this plan.|

<h3 class="schema-toc" id="cdr-telco-api_schemas_tocStelcoaccountplan">TelcoAccountPlan</h3>
<p id="tocStelcoaccountplan" class="orig-anchor"></p>

<p>
  <a id="cdr-telco-api_schema-base_telcoaccountplan"></a>
  <a class="schema-anchor" id="schemacdr-telco-apitelcoaccountplan"></a>
</p>

```json
{
  "nickname": "string",
  "type": "MOBILE",
  "billingType": "PRE_PAID",
  "serviceIds": [
    "string"
  ],
  "planOverview": {
    "displayName": "string",
    "startDate": "string",
    "endDate": "string"
  }
}
```

<h3 id="cdr-telco-api_telcoaccountplan_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|nickname|string|optional|Optional display name for the plan provided by the customer to help differentiate multiple plans.|
|type|[Enum](#common-field-types)|mandatory|The type of the plan. The type of plan. A [`MOBILE`](https://www.legislation.gov.au/Details/C2022C00170/Html/Volume_1#_Toc95898745) service or `BROADBAND` fixed internet service.|
|billingType|[Enum](#common-field-types)|mandatory|The billing type of the plan.|
|serviceIds|[string]|mandatory|The _serviceId_ representing a unique service identifier such as a mobile [MSISDN](https://www.etsi.org/deliver/etsi_gts/03/0303/05.00.00_60/gsmts_0303v050000p.pdf), [FNN](https://www.nbnco.com.au/content/dam/nbnco2/documents/sfaa-wba2-dictionary_FTTN-launch.pdf) or internet service e.g [NBN AVC Service ID](https://www.nbnco.com.au/content/dam/nbnco2/documents/sfaa-wba2-dictionary_FTTN-launch.pdf). In accordance with [CDR ID permanence](#id-permanence) requirements.|
|planOverview|[TelcoAccountPlanOverview](#schemacdr-telco-apitelcoaccountplanoverview)|mandatory|Mandatory if _openStatus_ is `OPEN`.|

<h4 id="cdr-telco-api_telcoaccountplan_enumerated-values-main">Enumerated Values</h4>

|Property|Value|
|---|---|
|type|MOBILE|
|type|BROADBAND|
|billingType|PRE_PAID|
|billingType|POST_PAID|
|billingType|UPFRONT_PAID|
|billingType|OTHER|

<h3 class="schema-toc" id="cdr-telco-api_schemas_tocStelcoaccount">TelcoAccount</h3>
<p id="tocStelcoaccount" class="orig-anchor"></p>

<p>
  <a id="cdr-telco-api_schema-base_telcoaccount"></a>
  <a class="schema-anchor" id="schemacdr-telco-apitelcoaccount"></a>
</p>

```json
{
  "plans": [
    {
      "nickname": "string",
      "type": "MOBILE",
      "billingType": "PRE_PAID",
      "serviceIds": [
        "string"
      ],
      "planOverview": {
        "displayName": "string",
        "startDate": "string",
        "endDate": "string"
      }
    }
  ]
}
```

*The array of plans containing services and associated plan details.*

<h3 id="cdr-telco-api_telcoaccount_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|plans|[[TelcoAccountPlan](#schemacdr-telco-apitelcoaccountplan)]|mandatory|The array of plans containing service and associated plan details.|

<h3 class="schema-toc" id="cdr-telco-api_schemas_tocStelcoaccountplandetail">TelcoAccountPlanDetail</h3>
<p id="tocStelcoaccountplandetail" class="orig-anchor"></p>

<p>
  <a id="cdr-telco-api_schema-base_telcoaccountplandetail"></a>
  <a class="schema-anchor" id="schemacdr-telco-apitelcoaccountplandetail"></a>
</p>

```json
{
  "planDetail": {
    "charges": [
      {
        "displayName": "string",
        "description": "string",
        "minimumValue": "string",
        "maximumValue": "string",
        "period": "string"
      }
    ]
  }
}
```

*Detail on the plan applicable to this account. Mandatory if _openStatus_ is `OPEN`.*

<h3 id="cdr-telco-api_telcoaccountplandetail_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|planDetail|object|mandatory|none|
|» charges|[[TelcoProductDetailMeteringCharges](#schemacdr-telco-apitelcoproductdetailmeteringcharges)]|mandatory|Charges for metering included in the plan.|

<h3 class="schema-toc" id="cdr-telco-api_schemas_tocStelcoaccountdetailauthorisedcontacts">TelcoAccountDetailAuthorisedContacts</h3>
<p id="tocStelcoaccountdetailauthorisedcontacts" class="orig-anchor"></p>

<p>
  <a id="cdr-telco-api_schema-base_telcoaccountdetailauthorisedcontacts"></a>
  <a class="schema-anchor" id="schemacdr-telco-apitelcoaccountdetailauthorisedcontacts"></a>
</p>

```json
{
  "firstName": "string",
  "lastName": "string",
  "middleNames": [
    "string"
  ],
  "prefix": "string",
  "suffix": "string"
}
```

<h3 id="cdr-telco-api_telcoaccountdetailauthorisedcontacts_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|firstName|string|optional|For people with single names this field need not be present. The single name should be in the _lastName_ field.|
|lastName|string|mandatory|For people with single names the single name should be in this field.|
|middleNames|[string]|optional|Field is mandatory but array may be empty.|
|prefix|string|optional|Also known as title or salutation. The prefix to the name (e.g., Mr, Mrs, Ms, Miss, Sir, etc.)|
|suffix|string|optional|Used for a trailing suffix to the name (e.g., Jr.)|

<h3 class="schema-toc" id="cdr-telco-api_schemas_tocStelcoaccountdetail">TelcoAccountDetail</h3>
<p id="tocStelcoaccountdetail" class="orig-anchor"></p>

<p>
  <a id="cdr-telco-api_schema-base_telcoaccountdetail"></a>
  <a class="schema-anchor" id="schemacdr-telco-apitelcoaccountdetail"></a>
</p>

```json
{
  "plans": [
    {
      "nickname": "string",
      "type": "MOBILE",
      "billingType": "PRE_PAID",
      "serviceIds": [
        "string"
      ],
      "planOverview": {
        "displayName": "string",
        "startDate": "string",
        "endDate": "string"
      },
      "planDetail": {
        "charges": [
          {
            "displayName": "string",
            "description": "string",
            "minimumValue": "string",
            "maximumValue": "string",
            "period": "string"
          }
        ]
      }
    }
  ]
}
```

*The array of plans containing services and associated plan details.*

<h3 id="cdr-telco-api_telcoaccountdetail_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|plans|[allOf]|mandatory|The array of plans containing services and associated plan details.|

*allOf*

|Name|Type|Required|Description|
|---|---|---|---|
|» *anonymous*|[TelcoAccountPlan](#schemacdr-telco-apitelcoaccountplan)|mandatory|none|

*and*

|Name|Type|Required|Description|
|---|---|---|---|
|» *anonymous*|[TelcoAccountPlanDetail](#schemacdr-telco-apitelcoaccountplandetail)|mandatory|Detail on the plan applicable to this account. Mandatory if _openStatus_ is `OPEN`.|

<h3 class="schema-toc" id="cdr-telco-api_schemas_tocStelcopaymentschedulecarddebit">TelcoPaymentScheduleCardDebit</h3>
<p id="tocStelcopaymentschedulecarddebit" class="orig-anchor"></p>

<p>
  <a id="cdr-telco-api_schema-base_telcopaymentschedulecarddebit"></a>
  <a class="schema-anchor" id="schemacdr-telco-apitelcopaymentschedulecarddebit"></a>
</p>

```json
{
  "cardScheme": "VISA",
  "paymentFrequency": "string",
  "calculationType": "STATIC"
}
```

*Represents a regular credit card payment schedule. Mandatory if _paymentScheduleUType_ is set to `cardDebit`.*

<h3 id="cdr-telco-api_telcopaymentschedulecarddebit_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|cardScheme|[Enum](#common-field-types)|mandatory|The type of credit card held on file.|
|paymentFrequency|[ExternalRef](#common-field-types)|mandatory|The frequency that payments will occur. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax).|
|calculationType|[Enum](#common-field-types)|mandatory|The mechanism by which the payment amount is calculated. Explanation of values are as follows:<br/><ul><li>`STATIC`: Indicates a consistent, static amount, per payment</li><li>`BALANCE`: Indicates that the outstanding balance for the account is paid per period</li><li>`CALCULATED`: Indicates that the payment amount is variable and calculated using a pre-defined algorithm.</li></ul>|

<h4 id="cdr-telco-api_telcopaymentschedulecarddebit_enumerated-values-main">Enumerated Values</h4>

|Property|Value|
|---|---|
|cardScheme|VISA|
|cardScheme|MASTERCARD|
|cardScheme|AMEX|
|cardScheme|DINERS|
|cardScheme|OTHER|
|cardScheme|UNKNOWN|
|calculationType|STATIC|
|calculationType|BALANCE|
|calculationType|CALCULATED|

<h3 class="schema-toc" id="cdr-telco-api_schemas_tocStelcopaymentscheduledirectdebit">TelcoPaymentScheduleDirectDebit</h3>
<p id="tocStelcopaymentscheduledirectdebit" class="orig-anchor"></p>

<p>
  <a id="cdr-telco-api_schema-base_telcopaymentscheduledirectdebit"></a>
  <a class="schema-anchor" id="schemacdr-telco-apitelcopaymentscheduledirectdebit"></a>
</p>

```json
{
  "isTokenised": true,
  "bsb": "string",
  "accountNumber": "string",
  "paymentFrequency": "string",
  "calculationType": "STATIC"
}
```

*Represents a regular direct debit from a specified bank account. Mandatory if _paymentScheduleUType_ is set to `directDebit`.*

<h3 id="cdr-telco-api_telcopaymentscheduledirectdebit_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|isTokenised|boolean|optional|Flag indicating that the account details are tokenised and cannot be shared. `false` if absent.|
|bsb|string|conditional|The unmasked BSB for the account to be debited. Is expected to be formatted as digits only with leading zeros included and no punctuation or spaces. Is required if _isTokenised_ is absent or `false`.|
|accountNumber|string|conditional|The unmasked account number for the account to be debited. Is expected to be formatted as digits only with leading zeros included and no punctuation or spaces. Is required if _isTokenised_ is absent or `false`.|
|paymentFrequency|[ExternalRef](#common-field-types)|mandatory|The frequency that payments will occur. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax).|
|calculationType|[Enum](#common-field-types)|mandatory|The mechanism by which the payment amount is calculated. Explanation of values are as follows:<br/><ul><li>`STATIC`: Indicates a consistent, static amount, per payment</li><li>`BALANCE`: Indicates that the outstanding balance for the account is paid per period</li><li>`CALCULATED`: Indicates that the payment amount is variable and calculated using a pre-defined algorithm.</li></ul>|

<h4 id="cdr-telco-api_telcopaymentscheduledirectdebit_enumerated-values-main">Enumerated Values</h4>

|Property|Value|
|---|---|
|calculationType|STATIC|
|calculationType|BALANCE|
|calculationType|CALCULATED|

<h3 class="schema-toc" id="cdr-telco-api_schemas_tocStelcopaymentscheduledigitalwallet">TelcoPaymentScheduleDigitalWallet</h3>
<p id="tocStelcopaymentscheduledigitalwallet" class="orig-anchor"></p>

<p>
  <a id="cdr-telco-api_schema-base_telcopaymentscheduledigitalwallet"></a>
  <a class="schema-anchor" id="schemacdr-telco-apitelcopaymentscheduledigitalwallet"></a>
</p>

```json
{
  "name": "string",
  "identifier": "string",
  "type": "EMAIL",
  "provider": "PAYPAL_AU",
  "paymentFrequency": "string",
  "calculationType": "STATIC"
}
```

*Represents a regular payment from a digital wallet. Mandatory if _paymentScheduleUType_ is set to `digitalWallet`.*

<h3 id="cdr-telco-api_telcopaymentscheduledigitalwallet_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|name|string|mandatory|The display name of the wallet as given by the customer, else a default value defined by the data holder.|
|identifier|string|mandatory|The identifier of the digital wallet (dependent on type).|
|type|[Enum](#common-field-types)|mandatory|The type of the digital wallet identifier.|
|provider|[Enum](#common-field-types)|mandatory|The provider of the digital wallet.|
|paymentFrequency|[ExternalRef](#common-field-types)|mandatory|The frequency that payments will occur. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax).|
|calculationType|[Enum](#common-field-types)|mandatory|The mechanism by which the payment amount is calculated. Explanation of values are as follows:<br/><ul><li>`STATIC`: Indicates a consistent, static amount, per payment</li><li>`BALANCE`: Indicates that the outstanding balance for the account is paid per period</li><li>`CALCULATED`: Indicates that the payment amount is variable and calculated using a pre-defined algorithm.</li></ul>|

<h4 id="cdr-telco-api_telcopaymentscheduledigitalwallet_enumerated-values-main">Enumerated Values</h4>

|Property|Value|
|---|---|
|type|EMAIL|
|type|CONTACT_NAME|
|type|TELEPHONE|
|provider|PAYPAL_AU|
|provider|OTHER|
|calculationType|STATIC|
|calculationType|BALANCE|
|calculationType|CALCULATED|

<h3 class="schema-toc" id="cdr-telco-api_schemas_tocStelcopaymentschedulemanualpayment">TelcoPaymentScheduleManualPayment</h3>
<p id="tocStelcopaymentschedulemanualpayment" class="orig-anchor"></p>

<p>
  <a id="cdr-telco-api_schema-base_telcopaymentschedulemanualpayment"></a>
  <a class="schema-anchor" id="schemacdr-telco-apitelcopaymentschedulemanualpayment"></a>
</p>

```json
{
  "billFrequency": "string"
}
```

*Represents a manual payment schedule where the customer pays in response to a delivered statement. Mandatory if _paymentScheduleUType_ is set to `manualPayment`.*

<h3 id="cdr-telco-api_telcopaymentschedulemanualpayment_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|billFrequency|[ExternalRef](#common-field-types)|mandatory|The frequency with which a bill will be issued. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax).|

<h3 class="schema-toc" id="cdr-telco-api_schemas_tocStelcoinvoiceperiod">TelcoInvoicePeriod</h3>
<p id="tocStelcoinvoiceperiod" class="orig-anchor"></p>

<p>
  <a id="cdr-telco-api_schema-base_telcoinvoiceperiod"></a>
  <a class="schema-anchor" id="schemacdr-telco-apitelcoinvoiceperiod"></a>
</p>

```json
{
  "startDate": "string",
  "endDate": "string"
}
```

*Object containing the start and end date for the period covered by the invoice. Mandatory if any usage based charges are included in the invoice.*

<h3 id="cdr-telco-api_telcoinvoiceperiod_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|startDate|[DateString](#common-field-types)|mandatory|The start date of the period covered by this invoice.|
|endDate|[DateString](#common-field-types)|mandatory|The end date of the period covered by this invoice.|

<h3 class="schema-toc" id="cdr-telco-api_schemas_tocStelcoinvoicepayontimediscount">TelcoInvoicePayOnTimeDiscount</h3>
<p id="tocStelcoinvoicepayontimediscount" class="orig-anchor"></p>

<p>
  <a id="cdr-telco-api_schema-base_telcoinvoicepayontimediscount"></a>
  <a class="schema-anchor" id="schemacdr-telco-apitelcoinvoicepayontimediscount"></a>
</p>

```json
{
  "discountAmount": "string",
  "gstAmount": "string",
  "date": "string"
}
```

*A discount for on time payment.*

<h3 id="cdr-telco-api_telcoinvoicepayontimediscount_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|discountAmount|[AmountString](#common-field-types)|mandatory|The amount that will be discounted if the invoice is paid by the date specified.|
|gstAmount|[AmountString](#common-field-types)|optional|The GST amount that will be discounted if the invoice is paid by the date specified. If absent then zero is assumed.|
|date|[DateString](#common-field-types)|mandatory|The date by which the invoice must be paid to receive the pay on time discount.|

<h3 class="schema-toc" id="cdr-telco-api_schemas_tocStelcousagedatroaming">TelcoUsageDatRoaming</h3>
<p id="tocStelcousagedatroaming" class="orig-anchor"></p>

<p>
  <a id="cdr-telco-api_schema-base_telcousagedatroaming"></a>
  <a class="schema-anchor" id="schemacdr-telco-apitelcousagedatroaming"></a>
</p>

```json
{
  "download": 0,
  "amount": "string"
}
```

*Roaming Data Usage.*

<h3 id="cdr-telco-api_telcousagedatroaming_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|download|[Number](#common-field-types)|conditional|Amount of data used while roaming in megabytes (MB).|
|amount|[AmountString](#common-field-types)|conditional|Amount value of data roaming charges.|

<h3 class="schema-toc" id="cdr-telco-api_schemas_tocStelcousagedata">TelcoUsageData</h3>
<p id="tocStelcousagedata" class="orig-anchor"></p>

<p>
  <a id="cdr-telco-api_schema-base_telcousagedata"></a>
  <a class="schema-anchor" id="schemacdr-telco-apitelcousagedata"></a>
</p>

```json
{
  "upload": 0,
  "download": 0,
  "sessions": 0,
  "amount": "string",
  "roaming": {
    "download": 0,
    "amount": "string"
  }
}
```

*Summary of data usage.*

<h3 id="cdr-telco-api_telcousagedata_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|upload|[Number](#common-field-types)|mandatory|Amount of data uploaded in megabytes (MB).|
|download|[Number](#common-field-types)|mandatory|Amount of data downloaded in megabytes (MB).|
|sessions|[Number](#common-field-types)|optional|Number of data sessions.|
|amount|[AmountString](#common-field-types)|mandatory|Cost amount of data usage.|
|roaming|[TelcoUsageDatRoaming](#schemacdr-telco-apitelcousagedatroaming)|optional|Required if roaming is supported.|

<h3 class="schema-toc" id="cdr-telco-api_schemas_tocStelcousagevoicenational">TelcoUsageVoiceNational</h3>
<p id="tocStelcousagevoicenational" class="orig-anchor"></p>

<p>
  <a id="cdr-telco-api_schema-base_telcousagevoicenational"></a>
  <a class="schema-anchor" id="schemacdr-telco-apitelcousagevoicenational"></a>
</p>

```json
{
  "duration": "string",
  "number": 0,
  "amount": "string"
}
```

*National voice calls.*

<h3 id="cdr-telco-api_telcousagevoicenational_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|duration|[TimeString](#common-field-types)|mandatory|Total duration (hours, minutes, and seconds) of national voice calls. Not limited to 24hrs.|
|number|[Number](#common-field-types)|mandatory|Number of national voice calls.|
|amount|[AmountString](#common-field-types)|mandatory|Cost amount of national calls.|

<h3 class="schema-toc" id="cdr-telco-api_schemas_tocStelcousagevoiceinternational">TelcoUsageVoiceInternational</h3>
<p id="tocStelcousagevoiceinternational" class="orig-anchor"></p>

<p>
  <a id="cdr-telco-api_schema-base_telcousagevoiceinternational"></a>
  <a class="schema-anchor" id="schemacdr-telco-apitelcousagevoiceinternational"></a>
</p>

```json
{
  "duration": "string",
  "number": 0,
  "amount": "string"
}
```

*International voice calls. Requied if international calling is supported.*

<h3 id="cdr-telco-api_telcousagevoiceinternational_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|duration|[TimeString](#common-field-types)|mandatory|Total duration (hours, minutes, and seconds) of international voice calls. Not limited to 24hrs.|
|number|[Number](#common-field-types)|mandatory|Number of international voice calls.|
|amount|[AmountString](#common-field-types)|mandatory|Cost amount of international voice calls.|

<h3 class="schema-toc" id="cdr-telco-api_schemas_tocStelcousagevoiceroaming">TelcoUsageVoiceRoaming</h3>
<p id="tocStelcousagevoiceroaming" class="orig-anchor"></p>

<p>
  <a id="cdr-telco-api_schema-base_telcousagevoiceroaming"></a>
  <a class="schema-anchor" id="schemacdr-telco-apitelcousagevoiceroaming"></a>
</p>

```json
{
  "duration": "string",
  "number": 0,
  "amount": "string"
}
```

*Roaming voice calls, Required if roaming is supported.*

<h3 id="cdr-telco-api_telcousagevoiceroaming_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|duration|[TimeString](#common-field-types)|mandatory|Total duration (hours, minutes, and seconds) of roaming voice calls. Not limited to 24hrs.|
|number|[Number](#common-field-types)|mandatory|Number of roaming voice calls.|
|amount|[AmountString](#common-field-types)|mandatory|Cost amount of roaming voice calls.|

<h3 class="schema-toc" id="cdr-telco-api_schemas_tocStelcousagevoice">TelcoUsageVoice</h3>
<p id="tocStelcousagevoice" class="orig-anchor"></p>

<p>
  <a id="cdr-telco-api_schema-base_telcousagevoice"></a>
  <a class="schema-anchor" id="schemacdr-telco-apitelcousagevoice"></a>
</p>

```json
{
  "national": {
    "duration": "string",
    "number": 0,
    "amount": "string"
  },
  "international": {
    "duration": "string",
    "number": 0,
    "amount": "string"
  },
  "roaming": {
    "duration": "string",
    "number": 0,
    "amount": "string"
  }
}
```

*Summary of voice calls. Required if voice calls are included in product plan.*

<h3 id="cdr-telco-api_telcousagevoice_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|national|[TelcoUsageVoiceNational](#schemacdr-telco-apitelcousagevoicenational)|mandatory|National voice calls.|
|international|[TelcoUsageVoiceInternational](#schemacdr-telco-apitelcousagevoiceinternational)|mandatory|International voice calls. Requied if international calling is supported.|
|roaming|[TelcoUsageVoiceRoaming](#schemacdr-telco-apitelcousagevoiceroaming)|mandatory|Roaming voice calls, Required if roaming is supported.|

<h3 class="schema-toc" id="cdr-telco-api_schemas_tocStelcousagemessagingsms">TelcoUsageMessagingSms</h3>
<p id="tocStelcousagemessagingsms" class="orig-anchor"></p>

<p>
  <a id="cdr-telco-api_schema-base_telcousagemessagingsms"></a>
  <a class="schema-anchor" id="schemacdr-telco-apitelcousagemessagingsms"></a>
</p>

```json
{
  "national": 0,
  "international": 0,
  "roaming": 0,
  "amount": "string"
}
```

*Summary of SMS usage.*

<h3 id="cdr-telco-api_telcousagemessagingsms_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|national|[Number](#common-field-types)|mandatory|Number of national SMS messages sent. Including premium SMS services.|
|international|[Number](#common-field-types)|conditional|Number of international SMS messages sent. Including premium SMS services.|
|roaming|[Number](#common-field-types)|conditional|Number of roaming SMS messages sent. Including premium SMS services.|
|amount|[AmountString](#common-field-types)|mandatory|Cost amount of SMS messages. Including premium SMS services.|

<h3 class="schema-toc" id="cdr-telco-api_schemas_tocStelcousagemessagingmms">TelcoUsageMessagingMms</h3>
<p id="tocStelcousagemessagingmms" class="orig-anchor"></p>

<p>
  <a id="cdr-telco-api_schema-base_telcousagemessagingmms"></a>
  <a class="schema-anchor" id="schemacdr-telco-apitelcousagemessagingmms"></a>
</p>

```json
{
  "national": 0,
  "international": 0,
  "roaming": 0,
  "amount": "string"
}
```

*Summary of MMS usage.*

<h3 id="cdr-telco-api_telcousagemessagingmms_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|national|[Number](#common-field-types)|mandatory|Number of national MMS messages sent.|
|international|[Number](#common-field-types)|conditional|Number of international MMS messages sent.|
|roaming|[Number](#common-field-types)|conditional|Number of roaming SMS messages sent. Including premium SMS services.|
|amount|[AmountString](#common-field-types)|mandatory|Cost amount of MMS messages.|

<h3 class="schema-toc" id="cdr-telco-api_schemas_tocStelcousagemessaging">TelcoUsageMessaging</h3>
<p id="tocStelcousagemessaging" class="orig-anchor"></p>

<p>
  <a id="cdr-telco-api_schema-base_telcousagemessaging"></a>
  <a class="schema-anchor" id="schemacdr-telco-apitelcousagemessaging"></a>
</p>

```json
{
  "sms": {
    "national": 0,
    "international": 0,
    "roaming": 0,
    "amount": "string"
  },
  "mms": {
    "national": 0,
    "international": 0,
    "roaming": 0,
    "amount": "string"
  }
}
```

*Summary of messaging. Required if messaging services is included in the product plan.*

<h3 id="cdr-telco-api_telcousagemessaging_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|sms|[TelcoUsageMessagingSms](#schemacdr-telco-apitelcousagemessagingsms)|mandatory|Summary of SMS usage.|
|mms|[TelcoUsageMessagingMms](#schemacdr-telco-apitelcousagemessagingmms)|mandatory|Summary of MMS usage.|

<h3 class="schema-toc" id="cdr-telco-api_schemas_tocStelcoinvoiceaccountchargesothercharges">TelcoInvoiceAccountChargesOtherCharges</h3>
<p id="tocStelcoinvoiceaccountchargesothercharges" class="orig-anchor"></p>

<p>
  <a id="cdr-telco-api_schema-base_telcoinvoiceaccountchargesothercharges"></a>
  <a class="schema-anchor" id="schemacdr-telco-apitelcoinvoiceaccountchargesothercharges"></a>
</p>

```json
{
  "amount": "string",
  "description": "string",
  "type": "SERVICE"
}
```

*Optional array of charges that may be part of the invoice (for example services fees) (exclusive of GST).*

<h3 id="cdr-telco-api_telcoinvoiceaccountchargesothercharges_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|amount|[AmountString](#common-field-types)|mandatory|The aggregate total of charges for this item (exclusive of GST).|
|description|[AmountString](#common-field-types)|mandatory|A free text description of the charge.|
|type|[Enum](#common-field-types)|optional|Type of charge.|

<h4 id="cdr-telco-api_telcoinvoiceaccountchargesothercharges_enumerated-values-main">Enumerated Values</h4>

|Property|Value|
|---|---|
|type|SERVICE|
|type|EQUIPMENT|
|type|NETWORK|
|type|HANDSET|
|type|DEVICE|
|type|ENTERTAINMENT|
|type|SUBSCRIPTION|
|type|SOFTWARE|
|type|OTHER|

<h3 class="schema-toc" id="cdr-telco-api_schemas_tocStelcobillingaccounttransactionadjustments">TelcoBillingAccountTransactionAdjustments</h3>
<p id="tocStelcobillingaccounttransactionadjustments" class="orig-anchor"></p>

<p>
  <a id="cdr-telco-api_schema-base_telcobillingaccounttransactionadjustments"></a>
  <a class="schema-anchor" id="schemacdr-telco-apitelcobillingaccounttransactionadjustments"></a>
</p>

```json
{
  "amount": "string",
  "description": "string"
}
```

<h3 id="cdr-telco-api_telcobillingaccounttransactionadjustments_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|amount|[AmountString](#common-field-types)|mandatory|The amount of the adjustment.|
|description|string|mandatory|A free text description of the adjustment.|

<h3 class="schema-toc" id="cdr-telco-api_schemas_tocStelcoservicebalancedataroaming">TelcoServiceBalanceDataRoaming</h3>
<p id="tocStelcoservicebalancedataroaming" class="orig-anchor"></p>

<p>
  <a id="cdr-telco-api_schema-base_telcoservicebalancedataroaming"></a>
  <a class="schema-anchor" id="schemacdr-telco-apitelcoservicebalancedataroaming"></a>
</p>

```json
{
  "description": "string",
  "download": 0,
  "amount": "string"
}
```

*Balance of data roaming charges. Required unless _planType_ is `UNSUPPORTED`.*

<h3 id="cdr-telco-api_telcoservicebalancedataroaming_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|description|string|optional|An overview of plan limits. Required unless _planType_ is `UNSUPPORTED`.|
|download|[Number](#common-field-types)|conditional|Amount of data used overseas in megabytes (MB). Required unless _planType_ is `UNSUPPORTED`.|
|amount|[AmountString](#common-field-types)|conditional|Amount value of data roaming charges. Required unless _planType_ is `UNSUPPORTED`.|

<h3 class="schema-toc" id="cdr-telco-api_schemas_tocStelcoservicebalancedata">TelcoServiceBalanceData</h3>
<p id="tocStelcoservicebalancedata" class="orig-anchor"></p>

<p>
  <a id="cdr-telco-api_schema-base_telcoservicebalancedata"></a>
  <a class="schema-anchor" id="schemacdr-telco-apitelcoservicebalancedata"></a>
</p>

```json
{
  "planType": "METERED",
  "description": "string",
  "upload": 0,
  "download": 0,
  "amount": "string",
  "roaming": {
    "description": "string",
    "download": 0,
    "amount": "string"
  }
}
```

*Summary of data balances.*

<h3 id="cdr-telco-api_telcoservicebalancedata_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|planType|[TelcoPlanType](#schemacdr-telco-apitelcoplantype)|mandatory|Plan type for this feature.<ul><li>`METERED`: A plan is charged by usage for the feature<li>`UNMETERED`: A plan with no limits for a feature<li>`LIMITED`: Where plan limit inclusions apply<li>`UNSUPPORTED`: Feature is not supported.</ul>|
|description|string|conditional|An overview of plan limits. Required unless _planType_ is `UNSUPPORTED`.|
|upload|[Number](#common-field-types)|optional|Remaining upload data in megabytes (MB). Required unless _planType_ is `UNSUPPORTED` or `UNMETERED`.|
|download|[Number](#common-field-types)|conditional|Remaining download data in megabytes (MB). Required unless _planType_ is `UNSUPPORTED` or `UNMETERED`.|
|amount|[AmountString](#common-field-types)|conditional|Remaining value amount of data available. Required unless _planType_ is `UNSUPPORTED` or `UNMETERED`.|
|roaming|[TelcoServiceBalanceDataRoaming](#schemacdr-telco-apitelcoservicebalancedataroaming)|optional|Balance of data roaming charges. Required unless _planType_ is `UNSUPPORTED`.|

<h3 class="schema-toc" id="cdr-telco-api_schemas_tocStelcoservicebalancevoicenational">TelcoServiceBalanceVoiceNational</h3>
<p id="tocStelcoservicebalancevoicenational" class="orig-anchor"></p>

<p>
  <a id="cdr-telco-api_schema-base_telcoservicebalancevoicenational"></a>
  <a class="schema-anchor" id="schemacdr-telco-apitelcoservicebalancevoicenational"></a>
</p>

```json
{
  "description": "string",
  "duration": "string",
  "number": 0,
  "amount": "string"
}
```

*National voice calls.*

<h3 id="cdr-telco-api_telcoservicebalancevoicenational_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|description|string|conditional|An overview of plan limits. Required unless _planType_ is `UNSUPPORTED`.|
|duration|[TimeString](#common-field-types)|conditional|Total duration (hours, minutes, and seconds) of national voice calls. Not limited to 24hrs. Required unless _planType_ is `UNSUPPORTED` or `UNMETERED`.|
|number|[Number](#common-field-types)|conditional|Number of national voice calls. Required unless _planType_ is `UNSUPPORTED` or `UNMETERED`.|
|amount|[AmountString](#common-field-types)|conditional|Amount balance of national calls. Required unless _planType_ is `UNSUPPORTED` or `UNMETERED`.|

<h3 class="schema-toc" id="cdr-telco-api_schemas_tocStelcoservicebalancevoiceinternational">TelcoServiceBalanceVoiceInternational</h3>
<p id="tocStelcoservicebalancevoiceinternational" class="orig-anchor"></p>

<p>
  <a id="cdr-telco-api_schema-base_telcoservicebalancevoiceinternational"></a>
  <a class="schema-anchor" id="schemacdr-telco-apitelcoservicebalancevoiceinternational"></a>
</p>

```json
{
  "description": "string",
  "duration": "string",
  "number": 0,
  "amount": "string"
}
```

*International voice calls.*

<h3 id="cdr-telco-api_telcoservicebalancevoiceinternational_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|description|string|conditional|An overview of plan limits. Required unless _planType_ is `UNSUPPORTED`.|
|duration|[TimeString](#common-field-types)|optional|Total duration (hours, minutes, and seconds) of international voice calls available. Not limited to 24hrs. Required unless _planType_ is `UNSUPPORTED` or `UNMETERED`.|
|number|[Number](#common-field-types)|optional|Number of international voice calls available Required unless _planType_ is `UNSUPPORTED` or `UNMETERED`.|
|amount|[AmountString](#common-field-types)|conditional|Amount value of international calls available. Required unless _planType_ is `UNSUPPORTED` or `UNMETERED`.|

<h3 class="schema-toc" id="cdr-telco-api_schemas_tocStelcoservicebalancevoiceroaming">TelcoServiceBalanceVoiceRoaming</h3>
<p id="tocStelcoservicebalancevoiceroaming" class="orig-anchor"></p>

<p>
  <a id="cdr-telco-api_schema-base_telcoservicebalancevoiceroaming"></a>
  <a class="schema-anchor" id="schemacdr-telco-apitelcoservicebalancevoiceroaming"></a>
</p>

```json
{
  "description": "string",
  "duration": "string",
  "number": 0,
  "amount": "string"
}
```

*Roaming voice calls.*

<h3 id="cdr-telco-api_telcoservicebalancevoiceroaming_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|description|string|conditional|An overview of plan limits. Required unless _planType_ is `UNSUPPORTED`.|
|duration|[TimeString](#common-field-types)|optional|Total duration (hours, minutes, and seconds) of roaming voice calls available. Not limited to 24hrs. Required unless _planType_ is `UNSUPPORTED` or `UNMETERED`.|
|number|[Number](#common-field-types)|optional|Number of roaming voice calls available Required unless _planType_ is `UNSUPPORTED` or `UNMETERED`.|
|amount|[AmountString](#common-field-types)|conditional|Amount value of roaming calls available. Required unless _planType_ is `UNSUPPORTED` or `UNMETERED`.|

<h3 class="schema-toc" id="cdr-telco-api_schemas_tocStelcoservicebalancevoice">TelcoServiceBalanceVoice</h3>
<p id="tocStelcoservicebalancevoice" class="orig-anchor"></p>

<p>
  <a id="cdr-telco-api_schema-base_telcoservicebalancevoice"></a>
  <a class="schema-anchor" id="schemacdr-telco-apitelcoservicebalancevoice"></a>
</p>

```json
{
  "planType": "METERED",
  "national": {
    "description": "string",
    "duration": "string",
    "number": 0,
    "amount": "string"
  },
  "international": {
    "description": "string",
    "duration": "string",
    "number": 0,
    "amount": "string"
  },
  "roaming": {
    "description": "string",
    "duration": "string",
    "number": 0,
    "amount": "string"
  }
}
```

*Summary of voice balances. Required if voice calls are included in product plan.*

<h3 id="cdr-telco-api_telcoservicebalancevoice_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|planType|[TelcoPlanType](#schemacdr-telco-apitelcoplantype)|mandatory|Plan type for this feature.<ul><li>`METERED`: A plan is charged by usage for the feature<li>`UNMETERED`: A plan with no limits for a feature<li>`LIMITED`: Where plan limit inclusions apply<li>`UNSUPPORTED`: Feature is not supported.</ul>|
|national|[TelcoServiceBalanceVoiceNational](#schemacdr-telco-apitelcoservicebalancevoicenational)|conditional|National voice calls.|
|international|[TelcoServiceBalanceVoiceInternational](#schemacdr-telco-apitelcoservicebalancevoiceinternational)|conditional|International voice calls.|
|roaming|[TelcoServiceBalanceVoiceRoaming](#schemacdr-telco-apitelcoservicebalancevoiceroaming)|conditional|Roaming voice calls.|

<h3 class="schema-toc" id="cdr-telco-api_schemas_tocStelcoservicebalancemessagingsms">TelcoServiceBalanceMessagingSms</h3>
<p id="tocStelcoservicebalancemessagingsms" class="orig-anchor"></p>

<p>
  <a id="cdr-telco-api_schema-base_telcoservicebalancemessagingsms"></a>
  <a class="schema-anchor" id="schemacdr-telco-apitelcoservicebalancemessagingsms"></a>
</p>

```json
{
  "description": "string",
  "national": 0,
  "international": 0,
  "roaming": 0,
  "amount": "string"
}
```

*Summary of SMS Balance. Required if the service plan supports SMS messaging.*

<h3 id="cdr-telco-api_telcoservicebalancemessagingsms_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|description|string|conditional|An overview of plan limits. Required unless _planType_ is `UNSUPPORTED`.|
|national|[Number](#common-field-types)|conditional|Number of national SMS messages remaining. Required unless _planType_ is `UNSUPPORTED` or `UNMETERED`.|
|international|[Number](#common-field-types)|conditional|Number of international SMS messages remaining. Required unless _planType_ is `UNSUPPORTED` or `UNMETERED`.|
|roaming|[Number](#common-field-types)|conditional|Number of roaming SMS messages remaining. Required unless _planType_ is `UNSUPPORTED` or `UNMETERED`.|
|amount|[AmountString](#common-field-types)|conditional|Amount value of SMS messages remaining. Required unless _planType_ is `UNSUPPORTED` or `UNMETERED`.|

<h3 class="schema-toc" id="cdr-telco-api_schemas_tocStelcoservicebalancemessagingmms">TelcoServiceBalanceMessagingMms</h3>
<p id="tocStelcoservicebalancemessagingmms" class="orig-anchor"></p>

<p>
  <a id="cdr-telco-api_schema-base_telcoservicebalancemessagingmms"></a>
  <a class="schema-anchor" id="schemacdr-telco-apitelcoservicebalancemessagingmms"></a>
</p>

```json
{
  "description": "string",
  "national": 0,
  "international": 0,
  "roaming": 0,
  "amount": "string"
}
```

*Summary of MMS Balance. Required if the service plan supports MMS messaging.*

<h3 id="cdr-telco-api_telcoservicebalancemessagingmms_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|description|string|conditional|An overview of plan limits. Required unless _planType_ is `UNSUPPORTED`.|
|national|[Number](#common-field-types)|conditional|Number of national MMS messages remaining. Required unless _planType_ is `UNSUPPORTED` or `UNMETERED`.|
|international|[Number](#common-field-types)|conditional|Number of international MMS messages remaining. Required unless _planType_ is `UNSUPPORTED` or `UNMETERED`.|
|roaming|[Number](#common-field-types)|conditional|Number of roaming MMS messages remaining. Required unless _planType_ is `UNSUPPORTED` or `UNMETERED`.|
|amount|[AmountString](#common-field-types)|conditional|Amount value of MMS messages remaining. Required unless _planType_ is `UNSUPPORTED` or `UNMETERED`.|

<h3 class="schema-toc" id="cdr-telco-api_schemas_tocStelcoservicebalancemessaging">TelcoServiceBalanceMessaging</h3>
<p id="tocStelcoservicebalancemessaging" class="orig-anchor"></p>

<p>
  <a id="cdr-telco-api_schema-base_telcoservicebalancemessaging"></a>
  <a class="schema-anchor" id="schemacdr-telco-apitelcoservicebalancemessaging"></a>
</p>

```json
{
  "planType": "METERED",
  "sms": {
    "description": "string",
    "national": 0,
    "international": 0,
    "roaming": 0,
    "amount": "string"
  },
  "mms": {
    "description": "string",
    "national": 0,
    "international": 0,
    "roaming": 0,
    "amount": "string"
  }
}
```

*Summary of messaging. Required if messaging services is included in the product plan.*

<h3 id="cdr-telco-api_telcoservicebalancemessaging_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|planType|[TelcoPlanType](#schemacdr-telco-apitelcoplantype)|optional|Plan type for this feature.<ul><li>`METERED`: A plan is charged by usage for the feature<li>`UNMETERED`: A plan with no limits for a feature<li>`LIMITED`: Where plan limit inclusions apply<li>`UNSUPPORTED`: Feature is not supported.</ul>|
|sms|[TelcoServiceBalanceMessagingSms](#schemacdr-telco-apitelcoservicebalancemessagingsms)|mandatory|Summary of SMS Balance. Required if the service plan supports SMS messaging.|
|mms|[TelcoServiceBalanceMessagingMms](#schemacdr-telco-apitelcoservicebalancemessagingmms)|mandatory|Summary of MMS Balance. Required if the service plan supports MMS messaging.|

<h3 class="schema-toc" id="cdr-telco-api_schemas_tocStelcoservicebalances">TelcoServiceBalances</h3>
<p id="tocStelcoservicebalances" class="orig-anchor"></p>

<p>
  <a id="cdr-telco-api_schema-base_telcoservicebalances"></a>
  <a class="schema-anchor" id="schemacdr-telco-apitelcoservicebalances"></a>
</p>

```json
{
  "data": {
    "planType": "METERED",
    "description": "string",
    "upload": 0,
    "download": 0,
    "amount": "string",
    "roaming": {
      "description": "string",
      "download": 0,
      "amount": "string"
    }
  },
  "voice": {
    "planType": "METERED",
    "national": {
      "description": "string",
      "duration": "string",
      "number": 0,
      "amount": "string"
    },
    "international": {
      "description": "string",
      "duration": "string",
      "number": 0,
      "amount": "string"
    },
    "roaming": {
      "description": "string",
      "duration": "string",
      "number": 0,
      "amount": "string"
    }
  },
  "messaging": {
    "planType": "METERED",
    "sms": {
      "description": "string",
      "national": 0,
      "international": 0,
      "roaming": 0,
      "amount": "string"
    },
    "mms": {
      "description": "string",
      "national": 0,
      "international": 0,
      "roaming": 0,
      "amount": "string"
    }
  }
}
```

*A summary of Service balances.*

<h3 id="cdr-telco-api_telcoservicebalances_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|data|[TelcoServiceBalanceData](#schemacdr-telco-apitelcoservicebalancedata)|conditional|Summary of data balances.|
|voice|[TelcoServiceBalanceVoice](#schemacdr-telco-apitelcoservicebalancevoice)|conditional|Summary of voice balances. Required if voice calls are included in product plan.|
|messaging|[TelcoServiceBalanceMessaging](#schemacdr-telco-apitelcoservicebalancemessaging)|conditional|Summary of messaging. Required if messaging services is included in the product plan.|

