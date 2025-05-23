

<!-- Endpoint tag group description -->
<!-- Register Operations endpoints -->

<h2 id="cdr-register-api_get-software-statement-assertion-ssa">Get Software Statement Assertion (SSA)</h2>
<p id="get-software-statement-assertion-ssa" class="orig-anchor"></p>

> Code samples

```http
GET https://secure.api.cdr.gov.au/cdr-register/v1/all/data-recipients/brands/{dataRecipientBrandId}/software-products/{softwareProductId}/ssa HTTP/1.1
Host: secure.api.cdr.gov.au
Accept: application/json
x-v: string
x-min-v: string
Authorization: string
```

```javascript--nodejs
const fetch = require('node-fetch');
const headers = {
  'Accept':'application/json',
  'x-v':'string',
  'x-min-v':'string',
  'Authorization':'string'
};

fetch('https://secure.api.cdr.gov.au/cdr-register/v1/all/data-recipients/brands/{dataRecipientBrandId}/software-products/{softwareProductId}/ssa', {
  method: 'GET',
  headers: headers
}).then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

`GET /cdr-register/v1/all/data-recipients/brands/{dataRecipientBrandId}/software-products/{softwareProductId}/ssa`

Get a Software Statement Assertion (SSA) for a software product on the CDR Register to be used for Dynamic Client Registration with a Data Holder Brand.

Obsolete versions: _(Refer to Standards.)_

<h3 id="cdr-register-api_get-software-statement-assertion-ssa_endpoint-version">Endpoint Version</h3>
|   |  |
|---|--|
|Version|**4**

<h3 id="cdr-register-api_get-software-statement-assertion-ssa_parameters">Parameters</h3>

|Name|In|Type|Required|Default|Description|
|---|---|---|---|---|---|
|x-v|header|string|mandatory||Version of the API endpoint requested by the client. Must be set to a positive integer. The endpoint should respond with the highest supported version between [_x-min-v_](#request-headers) and [_x-v_](#request-headers). If the value of [_x-min-v_](#request-headers) is equal to or higher than the value of [_x-v_](#request-headers) then the [_x-min-v_](#request-headers) header should be treated as absent. If all versions requested are not supported then the endpoint **MUST** respond with a `406 Not Acceptable`. See [HTTP Headers](#request-headers).|
|x-min-v|header|string|optional||Minimum version of the API endpoint requested by the client. Must be set to a positive integer if provided. The endpoint should respond with the highest supported version between [_x-min-v_](#request-headers) and [_x-v_](#request-headers). If all versions requested are not supported then the endpoint **MUST** respond with a `406 Not Acceptable`.|
|dataRecipientBrandId|path|string|mandatory||Unique id for the Accredited Data Recipient Brand that the Software Product is associated with in the CDR Register.|
|softwareProductId|path|string|mandatory||Unique id for the Accredited Data Recipient Software Product in the CDR Register.|
|Authorization|header|[ExternalRef](#common-field-types)|mandatory||An Authorisation Token as per **[[RFC6750]](#nref-RFC6750)**.|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="cdr-register-api_get-software-statement-assertion-ssa_responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|string|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Missing Required Header / Invalid Version / Invalid Path Parameter|[ResponseErrorListV2](#schemacdr-register-apiresponseerrorlistv2)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Invalid Bearer Token|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Invalid BrandId|[ResponseErrorListV2](#schemacdr-register-apiresponseerrorlistv2)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Invalid Software Product|[ResponseErrorListV2](#schemacdr-register-apiresponseerrorlistv2)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|Unsupported Version|[ResponseErrorListV2](#schemacdr-register-apiresponseerrorlistv2)|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|SSA validation failed|[ResponseErrorListV2](#schemacdr-register-apiresponseerrorlistv2)|

<h3 id="cdr-register-api_get-software-statement-assertion-ssa_response-headers">Response Headers</h3>

|Status|Header|Type|Required|Description|
|---|---|---|---|---|
|200|x-v|string|optional|The [payload version](#response-headers) that the endpoint has responded with.|
|401|WWW-Authenticate|[ExternalRef](#common-field-types)|optional|The Response Header Field as per **[[RFC6750]](#nref-RFC6750)**.|

  
    
      <aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
<a href="#authorisation-scopes">cdr-register:read.</a>
</aside>

    
  

<!-- Endpoint tag group description -->
<!-- Register Data Holder discovery endpoints -->

<h2 id="cdr-register-api_get-data-holder-brands">Get Data Holder Brands</h2>
<p id="get-data-holder-brands" class="orig-anchor"></p>

> Code samples

```http
GET https://secure.api.cdr.gov.au/cdr-register/v1/{industry}/data-holders/brands HTTP/1.1
Host: secure.api.cdr.gov.au
Accept: application/json
Authorization: string
x-v: string
x-min-v: string
```

```javascript--nodejs
const fetch = require('node-fetch');
const headers = {
  'Accept':'application/json',
  'Authorization':'string',
  'x-v':'string',
  'x-min-v':'string'
};

fetch('https://secure.api.cdr.gov.au/cdr-register/v1/{industry}/data-holders/brands', {
  method: 'GET',
  headers: headers
}).then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

`GET /cdr-register/v1/{industry}/data-holders/brands`

Allows Data Recipients to discover Data Holder Brands available in the CDR ecosystem.

Obsolete versions: _(Refer to Standards.)_

<h3 id="cdr-register-api_get-data-holder-brands_endpoint-version">Endpoint Version</h3>
|   |  |
|---|--|
|Version|**3**

<h3 id="cdr-register-api_get-data-holder-brands_parameters">Parameters</h3>

|Name|In|Type|Required|Default|Description|
|---|---|---|---|---|---|
|industry|path|[IndustryEnumV2](#schemacdr-register-apiindustryenumv2)|mandatory||The industry the participant is retrieving data for (Banking, etc.)|
|Authorization|header|[ExternalRef](#common-field-types)|mandatory||An Authorisation Token as per **[[RFC6750]](#nref-RFC6750)**.|
|x-v|header|string|mandatory||Version of the API endpoint requested by the client. Must be set to a positive integer. The endpoint should respond with the highest supported version between [_x-min-v_](#request-headers) and [_x-v_](#request-headers). If the value of [_x-min-v_](#request-headers) is equal to or higher than the value of [_x-v_](#request-headers) then the [_x-min-v_](#request-headers) header should be treated as absent. If all versions requested are not supported then the endpoint **MUST** respond with a `406 Not Acceptable`. See [HTTP Headers](#request-headers).|
|x-min-v|header|string|optional||Minimum version of the API endpoint requested by the client. Must be set to a positive integer if provided. The endpoint should respond with the highest supported version between [_x-min-v_](#request-headers) and [_x-v_](#request-headers). If all versions requested are not supported then the endpoint **MUST** respond with a `406 Not Acceptable`.|
|updated-since|query|[DateTimeString](#common-field-types)|optional||Query filter returns results updated since the specified date-time.|
|page|query|[PositiveInteger](#common-field-types)|optional|`1`|Page of results to request (standard pagination).|
|page-size|query|[PositiveInteger](#common-field-types)|optional|`25`|Page size to request. Default is 25 (standard pagination).|

<h4 id="cdr-register-api_get-data-holder-brands_enumerated-values-parameters">Enumerated Values</h4>

|Parameter|Value|
|---|---|
|industry|banking|
|industry|energy|
|industry|non-bank-lending|
|industry|telco|
|industry|all|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "dataHolderBrandId": "string",
      "brandName": "string",
      "industries": [
        "banking"
      ],
      "logoUri": "string",
      "legalEntity": {
        "legalEntityId": "string",
        "legalEntityName": "string",
        "logoUri": "string",
        "registrationNumber": "string",
        "registrationDate": "string",
        "registeredCountry": "string",
        "abn": "string",
        "acn": "string",
        "arbn": "string",
        "anzsicDivision": "string",
        "organisationType": "SOLE_TRADER",
        "status": "ACTIVE"
      },
      "status": "ACTIVE",
      "endpointDetail": {
        "version": "string",
        "publicBaseUri": "string",
        "resourceBaseUri": "string",
        "infosecBaseUri": "string",
        "extensionBaseUri": "string",
        "websiteUri": "string"
      },
      "authDetails": [
        {
          "registerUType": "SIGNED-JWT",
          "jwksEndpoint": "string"
        }
      ],
      "lastUpdated": "string"
    }
  ],
  "links": {
    "first": "string",
    "last": "string",
    "next": "string",
    "prev": "string",
    "self": "string"
  },
  "meta": {
    "totalPages": 0,
    "totalRecords": 0
  }
}
```

<h3 id="cdr-register-api_get-data-holder-brands_responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[ResponseRegisterDataHolderBrandListV2](#schemacdr-register-apiresponseregisterdataholderbrandlistv2)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Missing Required Header / Invalid Version / Invalid Path Parameter|[ResponseErrorListV2](#schemacdr-register-apiresponseerrorlistv2)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Invalid Bearer Token|None|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|Unsupported Version|[ResponseErrorListV2](#schemacdr-register-apiresponseerrorlistv2)|

<h3 id="cdr-register-api_get-data-holder-brands_response-headers">Response Headers</h3>

|Status|Header|Type|Required|Description|
|---|---|---|---|---|
|200|x-v|string|mandatory|The [payload version](#response-headers) that the endpoint has responded with.|
|401|WWW-Authenticate|[ExternalRef](#common-field-types)|optional|The Response Header Field as per **[[RFC6750]](#nref-RFC6750)**.|

  
    
      <aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
<a href="#authorisation-scopes">cdr-register:read.</a>
</aside>

    
  

<h2 id="cdr-register-api_get-data-holder-brands-summary">Get Data Holder Brands Summary</h2>
<p id="get-data-holder-brands-summary" class="orig-anchor"></p>

> Code samples

```http
GET https://api.cdr.gov.au/cdr-register/v1/{industry}/data-holders/brands/summary HTTP/1.1
Host: api.cdr.gov.au
Accept: application/json
x-v: string
x-min-v: string
If-None-Match: string
```

```javascript--nodejs
const fetch = require('node-fetch');
const headers = {
  'Accept':'application/json',
  'x-v':'string',
  'x-min-v':'string',
  'If-None-Match':'string'
};

fetch('https://api.cdr.gov.au/cdr-register/v1/{industry}/data-holders/brands/summary', {
  method: 'GET',
  headers: headers
}).then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

`GET /cdr-register/v1/{industry}/data-holders/brands/summary`

Endpoint used by participants to discover public details of Data Holder Brands from the CDR Register.

Obsolete versions: _(Refer to Standards.)_

<h3 id="cdr-register-api_get-data-holder-brands-summary_endpoint-version">Endpoint Version</h3>
|   |  |
|---|--|
|Version|**2**

<h3 id="cdr-register-api_get-data-holder-brands-summary_parameters">Parameters</h3>

|Name|In|Type|Required|Default|Description|
|---|---|---|---|---|---|
|industry|path|[IndustryEnumV2](#schemacdr-register-apiindustryenumv2)|mandatory||The industry the participant is retrieving data for (Banking, etc.)|
|x-v|header|string|mandatory||Version of the API endpoint requested by the client. Must be set to a positive integer. The endpoint should respond with the highest supported version between [_x-min-v_](#request-headers) and [_x-v_](#request-headers). If the value of [_x-min-v_](#request-headers) is equal to or higher than the value of [_x-v_](#request-headers) then the [_x-min-v_](#request-headers) header should be treated as absent. If all versions requested are not supported then the endpoint **MUST** respond with a `406 Not Acceptable`. See [HTTP Headers](#request-headers).|
|x-min-v|header|string|optional||Minimum version of the API endpoint requested by the client. Must be set to a positive integer if provided. The endpoint should respond with the highest supported version between [_x-min-v_](#request-headers) and [_x-v_](#request-headers). If all versions requested are not supported then the endpoint **MUST** respond with a `406 Not Acceptable`.|
|If-None-Match|header|[ASCIIString](#common-field-types)|optional||Makes the request method conditional on a recipient cache or origin server not having any current representation of the target resource with an entity-tag that does not match any of those listed in the field-value.|

<h4 id="cdr-register-api_get-data-holder-brands-summary_enumerated-values-parameters">Enumerated Values</h4>

|Parameter|Value|
|---|---|
|industry|banking|
|industry|energy|
|industry|non-bank-lending|
|industry|telco|
|industry|all|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "dataHolderBrandId": "string",
      "interimId": "string",
      "brandName": "string",
      "publicBaseUri": "string",
      "logoUri": "string",
      "industries": [
        "banking"
      ],
      "lastUpdated": "string",
      "abn": "string",
      "acn": "string",
      "arbn": "string"
    }
  ],
  "links": {
    "self": "string"
  },
  "meta": {}
}
```

<h3 id="cdr-register-api_get-data-holder-brands-summary_responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[ResponseDataHoldersBrandSummaryList](#schemacdr-register-apiresponsedataholdersbrandsummarylist)|
|304|[Not Modified](https://tools.ietf.org/html/rfc7232#section-4.1)|Not Modified - The current representation of the target resource matches with the entity-tag provided in the _If-None-Match_ request header|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Missing Required Header / Invalid Version / Invalid Path Parameter|[ResponseErrorListV2](#schemacdr-register-apiresponseerrorlistv2)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Industry Not Found|[ResponseErrorListV2](#schemacdr-register-apiresponseerrorlistv2)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|Unsupported Version|[ResponseErrorListV2](#schemacdr-register-apiresponseerrorlistv2)|

<h3 id="cdr-register-api_get-data-holder-brands-summary_response-headers">Response Headers</h3>

|Status|Header|Type|Required|Description|
|---|---|---|---|---|
|200|x-v|string|mandatory|The [payload version](#response-headers) that the endpoint has responded with.|
|200|Etag|[ASCIIString](#common-field-types)|optional|Entity tag that uniquely represents the requested resource.|
|304|Etag|[ASCIIString](#common-field-types)|optional|Entity tag that uniquely represents the requested resource.|

  
    <aside class="success">
This operation does not require authentication.
</aside>

  

<h2 id="cdr-register-api_get-data-holder-statuses">Get Data Holder Statuses</h2>
<p id="get-data-holder-statuses" class="orig-anchor"></p>

> Code samples

```http
GET https://api.cdr.gov.au/cdr-register/v1/{industry}/data-holders/status HTTP/1.1
Host: api.cdr.gov.au
Accept: application/json
x-v: string
x-min-v: string
If-None-Match: string
```

```javascript--nodejs
const fetch = require('node-fetch');
const headers = {
  'Accept':'application/json',
  'x-v':'string',
  'x-min-v':'string',
  'If-None-Match':'string'
};

fetch('https://api.cdr.gov.au/cdr-register/v1/{industry}/data-holders/status', {
  method: 'GET',
  headers: headers
}).then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

`GET /cdr-register/v1/{industry}/data-holders/status`

Endpoint used by participants to discover the statuses for Data Holders from the CDR Register.

Obsolete versions: _(Refer to Standards.)_

<h3 id="cdr-register-api_get-data-holder-statuses_endpoint-version">Endpoint Version</h3>
|   |  |
|---|--|
|Version|**2**

<h3 id="cdr-register-api_get-data-holder-statuses_parameters">Parameters</h3>

|Name|In|Type|Required|Default|Description|
|---|---|---|---|---|---|
|industry|path|[IndustryEnumV2](#schemacdr-register-apiindustryenumv2)|mandatory||The industry the participant is retrieving data for (Banking, etc.)|
|x-v|header|string|mandatory||Version of the API endpoint requested by the client. Must be set to a positive integer. The endpoint should respond with the highest supported version between [_x-min-v_](#request-headers) and [_x-v_](#request-headers). If the value of [_x-min-v_](#request-headers) is equal to or higher than the value of [_x-v_](#request-headers) then the [_x-min-v_](#request-headers) header should be treated as absent. If all versions requested are not supported then the endpoint **MUST** respond with a `406 Not Acceptable`. See [HTTP Headers](#request-headers).|
|x-min-v|header|string|optional||Minimum version of the API endpoint requested by the client. Must be set to a positive integer if provided. The endpoint should respond with the highest supported version between [_x-min-v_](#request-headers) and [_x-v_](#request-headers). If all versions requested are not supported then the endpoint **MUST** respond with a `406 Not Acceptable`.|
|If-None-Match|header|[ASCIIString](#common-field-types)|optional||Makes the request method conditional on a recipient cache or origin server not having any current representation of the target resource with an entity-tag that does not match any of those listed in the field-value.|

<h4 id="cdr-register-api_get-data-holder-statuses_enumerated-values-parameters">Enumerated Values</h4>

|Parameter|Value|
|---|---|
|industry|banking|
|industry|energy|
|industry|non-bank-lending|
|industry|telco|
|industry|all|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "legalEntityId": "string",
      "status": "ACTIVE"
    }
  ],
  "links": {
    "self": "string"
  },
  "meta": {}
}
```

<h3 id="cdr-register-api_get-data-holder-statuses_responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[DataHoldersStatusList](#schemacdr-register-apidataholdersstatuslist)|
|304|[Not Modified](https://tools.ietf.org/html/rfc7232#section-4.1)|Not Modified - The current representation of the target resource matches with the entity-tag provided in the _If-None-Match_ request header|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Missing Required Header / Invalid Version / Invalid Path Parameter|[ResponseErrorListV2](#schemacdr-register-apiresponseerrorlistv2)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|Unsupported Version|[ResponseErrorListV2](#schemacdr-register-apiresponseerrorlistv2)|

<h3 id="cdr-register-api_get-data-holder-statuses_response-headers">Response Headers</h3>

|Status|Header|Type|Required|Description|
|---|---|---|---|---|
|200|x-v|string|mandatory|The [payload version](#response-headers) that the endpoint has responded with.|
|200|Etag|[ASCIIString](#common-field-types)|optional|Entity tag that uniquely represents the requested resource.|
|304|Etag|[ASCIIString](#common-field-types)|optional|Entity tag that uniquely represents the requested resource.|

  
    <aside class="success">
This operation does not require authentication.
</aside>

  

<!-- Endpoint tag group description -->
<!-- Register Data Recipient discovery endpoints -->

<h2 id="cdr-register-api_get-software-products-statuses">Get Software Products Statuses</h2>
<p id="get-software-products-statuses" class="orig-anchor"></p>

> Code samples

```http
GET https://api.cdr.gov.au/cdr-register/v1/all/data-recipients/brands/software-products/status HTTP/1.1
Host: api.cdr.gov.au
Accept: application/json
x-v: string
x-min-v: string
If-None-Match: string
```

```javascript--nodejs
const fetch = require('node-fetch');
const headers = {
  'Accept':'application/json',
  'x-v':'string',
  'x-min-v':'string',
  'If-None-Match':'string'
};

fetch('https://api.cdr.gov.au/cdr-register/v1/all/data-recipients/brands/software-products/status', {
  method: 'GET',
  headers: headers
}).then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

`GET /cdr-register/v1/all/data-recipients/brands/software-products/status`

Endpoint used by participants to discover the statuses for software products from the CDR Register.

Obsolete versions: _(Refer to Standards.)_

<h3 id="cdr-register-api_get-software-products-statuses_endpoint-version">Endpoint Version</h3>
|   |  |
|---|--|
|Version|**3**

<h3 id="cdr-register-api_get-software-products-statuses_parameters">Parameters</h3>

|Name|In|Type|Required|Default|Description|
|---|---|---|---|---|---|
|x-v|header|string|mandatory||Version of the API endpoint requested by the client. Must be set to a positive integer. The endpoint should respond with the highest supported version between [_x-min-v_](#request-headers) and [_x-v_](#request-headers). If the value of [_x-min-v_](#request-headers) is equal to or higher than the value of [_x-v_](#request-headers) then the [_x-min-v_](#request-headers) header should be treated as absent. If all versions requested are not supported then the endpoint **MUST** respond with a `406 Not Acceptable`. See [HTTP Headers](#request-headers).|
|x-min-v|header|string|optional||Minimum version of the API endpoint requested by the client. Must be set to a positive integer if provided. The endpoint should respond with the highest supported version between [_x-min-v_](#request-headers) and [_x-v_](#request-headers). If all versions requested are not supported then the endpoint **MUST** respond with a `406 Not Acceptable`.|
|If-None-Match|header|[ASCIIString](#common-field-types)|optional||Makes the request method conditional on a recipient cache or origin server not having any current representation of the target resource with an entity-tag that does not match any of those listed in the field-value.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "softwareProductId": "string",
      "status": "ACTIVE"
    }
  ],
  "links": {
    "self": "string"
  },
  "meta": {}
}
```

<h3 id="cdr-register-api_get-software-products-statuses_responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[SoftwareProductsStatusList](#schemacdr-register-apisoftwareproductsstatuslist)|
|304|[Not Modified](https://tools.ietf.org/html/rfc7232#section-4.1)|Not Modified - The current representation of the target resource matches with the entity-tag provided in the _If-None-Match_ request header|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Missing Required Header / Invalid Version / Invalid Path Parameter|[ResponseErrorListV2](#schemacdr-register-apiresponseerrorlistv2)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|Unsupported Version|[ResponseErrorListV2](#schemacdr-register-apiresponseerrorlistv2)|

<h3 id="cdr-register-api_get-software-products-statuses_response-headers">Response Headers</h3>

|Status|Header|Type|Required|Description|
|---|---|---|---|---|
|200|x-v|string|mandatory|The [payload version](#response-headers) that the endpoint has responded with.|
|200|Etag|[ASCIIString](#common-field-types)|optional|Entity tag that uniquely represents the requested resource.|
|304|Etag|[ASCIIString](#common-field-types)|optional|Entity tag that uniquely represents the requested resource.|

  
    <aside class="success">
This operation does not require authentication.
</aside>

  

<h2 id="cdr-register-api_get-data-recipients-statuses">Get Data Recipients Statuses</h2>
<p id="get-data-recipients-statuses" class="orig-anchor"></p>

> Code samples

```http
GET https://api.cdr.gov.au/cdr-register/v1/all/data-recipients/status HTTP/1.1
Host: api.cdr.gov.au
Accept: application/json
x-v: string
x-min-v: string
If-None-Match: string
```

```javascript--nodejs
const fetch = require('node-fetch');
const headers = {
  'Accept':'application/json',
  'x-v':'string',
  'x-min-v':'string',
  'If-None-Match':'string'
};

fetch('https://api.cdr.gov.au/cdr-register/v1/all/data-recipients/status', {
  method: 'GET',
  headers: headers
}).then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

`GET /cdr-register/v1/all/data-recipients/status`

Endpoint used by participants to discover the statuses for Data Recipients from the CDR Register.

Obsolete versions: _(Refer to Standards.)_

<h3 id="cdr-register-api_get-data-recipients-statuses_endpoint-version">Endpoint Version</h3>
|   |  |
|---|--|
|Version|**3**

<h3 id="cdr-register-api_get-data-recipients-statuses_parameters">Parameters</h3>

|Name|In|Type|Required|Default|Description|
|---|---|---|---|---|---|
|x-v|header|string|mandatory||Version of the API endpoint requested by the client. Must be set to a positive integer. The endpoint should respond with the highest supported version between [_x-min-v_](#request-headers) and [_x-v_](#request-headers). If the value of [_x-min-v_](#request-headers) is equal to or higher than the value of [_x-v_](#request-headers) then the [_x-min-v_](#request-headers) header should be treated as absent. If all versions requested are not supported then the endpoint **MUST** respond with a `406 Not Acceptable`. See [HTTP Headers](#request-headers).|
|x-min-v|header|string|optional||Minimum version of the API endpoint requested by the client. Must be set to a positive integer if provided. The endpoint should respond with the highest supported version between [_x-min-v_](#request-headers) and [_x-v_](#request-headers). If all versions requested are not supported then the endpoint **MUST** respond with a `406 Not Acceptable`.|
|If-None-Match|header|[ASCIIString](#common-field-types)|optional||Makes the request method conditional on a recipient cache or origin server not having any current representation of the target resource with an entity-tag that does not match any of those listed in the field-value.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "legalEntityId": "string",
      "status": "ACTIVE"
    }
  ],
  "links": {
    "self": "string"
  },
  "meta": {}
}
```

<h3 id="cdr-register-api_get-data-recipients-statuses_responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[DataRecipientsStatusList](#schemacdr-register-apidatarecipientsstatuslist)|
|304|[Not Modified](https://tools.ietf.org/html/rfc7232#section-4.1)|Not Modified - The current representation of the target resource matches with the entity-tag provided in the _If-None-Match_ request header|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Missing Required Header / Invalid Version / Invalid Path Parameter|[ResponseErrorListV2](#schemacdr-register-apiresponseerrorlistv2)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|Unsupported Version|[ResponseErrorListV2](#schemacdr-register-apiresponseerrorlistv2)|

<h3 id="cdr-register-api_get-data-recipients-statuses_response-headers">Response Headers</h3>

|Status|Header|Type|Required|Description|
|---|---|---|---|---|
|200|x-v|string|mandatory|The [payload version](#response-headers) that the endpoint has responded with.|
|200|Etag|[ASCIIString](#common-field-types)|optional|Entity tag that uniquely represents the requested resource.|
|304|Etag|[ASCIIString](#common-field-types)|optional|Entity tag that uniquely represents the requested resource.|

  
    <aside class="success">
This operation does not require authentication.
</aside>

  

<h2 id="cdr-register-api_get-data-recipients">Get Data Recipients</h2>
<p id="get-data-recipients" class="orig-anchor"></p>

> Code samples

```http
GET https://api.cdr.gov.au/cdr-register/v1/all/data-recipients HTTP/1.1
Host: api.cdr.gov.au
Accept: application/json
x-v: string
x-min-v: string
If-None-Match: string
```

```javascript--nodejs
const fetch = require('node-fetch');
const headers = {
  'Accept':'application/json',
  'x-v':'string',
  'x-min-v':'string',
  'If-None-Match':'string'
};

fetch('https://api.cdr.gov.au/cdr-register/v1/all/data-recipients', {
  method: 'GET',
  headers: headers
}).then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

`GET /cdr-register/v1/all/data-recipients`

Endpoint used by participants to discover data recipients and associated brands and software products, available in the CDR ecosystem.

Obsolete versions: _(Refer to Standards.)_

<h3 id="cdr-register-api_get-data-recipients_endpoint-version">Endpoint Version</h3>
|   |  |
|---|--|
|Version|**4**

<h3 id="cdr-register-api_get-data-recipients_parameters">Parameters</h3>

|Name|In|Type|Required|Default|Description|
|---|---|---|---|---|---|
|x-v|header|string|mandatory||Version of the API endpoint requested by the client. Must be set to a positive integer. The endpoint should respond with the highest supported version between [_x-min-v_](#request-headers) and [_x-v_](#request-headers). If the value of [_x-min-v_](#request-headers) is equal to or higher than the value of [_x-v_](#request-headers) then the [_x-min-v_](#request-headers) header should be treated as absent. If all versions requested are not supported then the endpoint **MUST** respond with a `406 Not Acceptable`. See [HTTP Headers](#request-headers).|
|x-min-v|header|string|optional||Minimum version of the API endpoint requested by the client. Must be set to a positive integer if provided. The endpoint should respond with the highest supported version between [_x-min-v_](#request-headers) and [_x-v_](#request-headers). If all versions requested are not supported then the endpoint **MUST** respond with a `406 Not Acceptable`.|
|If-None-Match|header|[ASCIIString](#common-field-types)|optional||Makes the request method conditional on a recipient cache or origin server not having any current representation of the target resource with an entity-tag that does not match any of those listed in the field-value.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "legalEntityId": "string",
      "legalEntityName": "string",
      "accreditationNumber": "string",
      "accreditationLevel": "UNRESTRICTED",
      "logoUri": "string",
      "dataRecipientBrands": [
        {
          "dataRecipientBrandId": "string",
          "brandName": "string",
          "logoUri": "string",
          "softwareProducts": [
            {
              "softwareProductId": "string",
              "softwareProductName": "string",
              "softwareProductDescription": "string",
              "logoUri": "string",
              "status": "ACTIVE"
            }
          ],
          "status": "ACTIVE"
        }
      ],
      "status": "ACTIVE",
      "lastUpdated": "string"
    }
  ],
  "links": {
    "self": "string"
  },
  "meta": {}
}
```

<h3 id="cdr-register-api_get-data-recipients_responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[ResponseRegisterDataRecipientList](#schemacdr-register-apiresponseregisterdatarecipientlist)|
|304|[Not Modified](https://tools.ietf.org/html/rfc7232#section-4.1)|Not Modified - The current representation of the target resource matches with the entity-tag provided in the _If-None-Match_ request header|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Missing Required Header / Invalid Version / Invalid Path Parameter|[ResponseErrorListV2](#schemacdr-register-apiresponseerrorlistv2)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|Unsupported Version|[ResponseErrorListV2](#schemacdr-register-apiresponseerrorlistv2)|

<h3 id="cdr-register-api_get-data-recipients_response-headers">Response Headers</h3>

|Status|Header|Type|Required|Description|
|---|---|---|---|---|
|200|x-v|string|mandatory|The [payload version](#response-headers) that the endpoint has responded with.|
|200|Etag|[ASCIIString](#common-field-types)|optional|Entity tag that uniquely represents the requested resource.|
|304|Etag|[ASCIIString](#common-field-types)|optional|Entity tag that uniquely represents the requested resource.|

  
    <aside class="success">
This operation does not require authentication.
</aside>

  

<h2 class="schema-heading" id="cdr-register-api-schemas">Schemas</h2>

<h3 class="schema-toc" id="cdr-register-api_schemas_tocSresponseregisterdataholderbrandlistv2">ResponseRegisterDataHolderBrandListV2</h3>
<p id="tocSresponseregisterdataholderbrandlistv2" class="orig-anchor"></p>

<p>
  <a id="cdr-register-api_schema-base_responseregisterdataholderbrandlist"></a>
  <a class="schema-anchor" id="schemacdr-register-apiresponseregisterdataholderbrandlistv2"></a>
</p>

```json
{
  "data": [
    {
      "dataHolderBrandId": "string",
      "brandName": "string",
      "industries": [
        "banking"
      ],
      "logoUri": "string",
      "legalEntity": {
        "legalEntityId": "string",
        "legalEntityName": "string",
        "logoUri": "string",
        "registrationNumber": "string",
        "registrationDate": "string",
        "registeredCountry": "string",
        "abn": "string",
        "acn": "string",
        "arbn": "string",
        "anzsicDivision": "string",
        "organisationType": "SOLE_TRADER",
        "status": "ACTIVE"
      },
      "status": "ACTIVE",
      "endpointDetail": {
        "version": "string",
        "publicBaseUri": "string",
        "resourceBaseUri": "string",
        "infosecBaseUri": "string",
        "extensionBaseUri": "string",
        "websiteUri": "string"
      },
      "authDetails": [
        {
          "registerUType": "SIGNED-JWT",
          "jwksEndpoint": "string"
        }
      ],
      "lastUpdated": "string"
    }
  ],
  "links": {
    "first": "string",
    "last": "string",
    "next": "string",
    "prev": "string",
    "self": "string"
  },
  "meta": {
    "totalPages": 0,
    "totalRecords": 0
  }
}
```

*Response containing a list of CDR Register Data Holder Brand objects.*

<h3 id="cdr-register-api_responseregisterdataholderbrandlistv2_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|data|[[RegisterDataHolderBrandV2](#schemacdr-register-apiregisterdataholderbrandv2)]|mandatory||Response data for the query.|
|links|[LinksPaginated](#schemacdr-register-apilinkspaginated)|mandatory||none|
|meta|[MetaPaginated](#schemacdr-register-apimetapaginated)|mandatory||none|

<h3 class="schema-toc" id="cdr-register-api_schemas_tocSregisterdataholderbrandv2">RegisterDataHolderBrandV2</h3>
<p id="tocSregisterdataholderbrandv2" class="orig-anchor"></p>

<p>
  <a id="cdr-register-api_schema-base_registerdataholderbrand"></a>
  <a class="schema-anchor" id="schemacdr-register-apiregisterdataholderbrandv2"></a>
</p>

```json
{
  "dataHolderBrandId": "string",
  "brandName": "string",
  "industries": [
    "banking"
  ],
  "logoUri": "string",
  "legalEntity": {
    "legalEntityId": "string",
    "legalEntityName": "string",
    "logoUri": "string",
    "registrationNumber": "string",
    "registrationDate": "string",
    "registeredCountry": "string",
    "abn": "string",
    "acn": "string",
    "arbn": "string",
    "anzsicDivision": "string",
    "organisationType": "SOLE_TRADER",
    "status": "ACTIVE"
  },
  "status": "ACTIVE",
  "endpointDetail": {
    "version": "string",
    "publicBaseUri": "string",
    "resourceBaseUri": "string",
    "infosecBaseUri": "string",
    "extensionBaseUri": "string",
    "websiteUri": "string"
  },
  "authDetails": [
    {
      "registerUType": "SIGNED-JWT",
      "jwksEndpoint": "string"
    }
  ],
  "lastUpdated": "string"
}
```

<h3 id="cdr-register-api_registerdataholderbrandv2_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|dataHolderBrandId|string|mandatory||Unique id of the Data Holder Brand issued by the CDR Register.|
|brandName|string|mandatory||The name of Data Holder Brand.|
|industries|[[IndustriesEnumV2](#schemacdr-register-apiindustriesenumv2)]|mandatory||The industries the Data Holder Brand belongs to.|
|logoUri|[URIString](#common-field-types)|mandatory||Brand logo URI.|
|legalEntity|[LegalEntityDetail](#schemacdr-register-apilegalentitydetail)|mandatory||The data that is common to all organisations, regardless of the type (e.g., company, trust, partnership, government).|
|status|[Enum](#common-field-types)|mandatory||none|
|endpointDetail|[RegisterDataHolderBrandServiceEndpoint](#schemacdr-register-apiregisterdataholderbrandserviceendpoint)|mandatory||Endpoints related to Data Holder Brand services.|
|authDetails|[[RegisterDataHolderAuth](#schemacdr-register-apiregisterdataholderauth)]|mandatory||[Defines the mechanism used and associated endpoints for Data Holder to Data Recipient authentication.]|
|lastUpdated|[DateTimeString](#common-field-types)|mandatory||The date/time that the Data Holder Brand data was last updated in the Register.|

<h4 id="cdr-register-api_registerdataholderbrandv2_enumerated-values-main">Enumerated Values</h4>

|Property|Value|
|---|---|
|status|ACTIVE|
|status|INACTIVE|
|status|REMOVED|

<h3 class="schema-toc" id="cdr-register-api_schemas_tocSresponsedataholdersbrandsummarylist">ResponseDataHoldersBrandSummaryList</h3>
<p id="tocSresponsedataholdersbrandsummarylist" class="orig-anchor"></p>

<p>
  <a id="cdr-register-api_schema-base_responsedataholdersbrandsummarylist"></a>
  <a class="schema-anchor" id="schemacdr-register-apiresponsedataholdersbrandsummarylist"></a>
</p>

```json
{
  "data": [
    {
      "dataHolderBrandId": "string",
      "interimId": "string",
      "brandName": "string",
      "publicBaseUri": "string",
      "logoUri": "string",
      "industries": [
        "banking"
      ],
      "lastUpdated": "string",
      "abn": "string",
      "acn": "string",
      "arbn": "string"
    }
  ],
  "links": {
    "self": "string"
  },
  "meta": {}
}
```

<h3 id="cdr-register-api_responsedataholdersbrandsummarylist_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|data|[[DataHolderBrandSummaryV2](#schemacdr-register-apidataholderbrandsummaryv2)]|mandatory||Response data for the query.|
|links|[Links](#schemacdr-register-apilinks)|mandatory||none|
|meta|[Meta](#schemacdr-register-apimeta)|mandatory||none|

<h3 class="schema-toc" id="cdr-register-api_schemas_tocSdataholderbrandsummaryv2">DataHolderBrandSummaryV2</h3>
<p id="tocSdataholderbrandsummaryv2" class="orig-anchor"></p>

<p>
  <a id="cdr-register-api_schema-base_dataholderbrandsummary"></a>
  <a class="schema-anchor" id="schemacdr-register-apidataholderbrandsummaryv2"></a>
</p>

```json
{
  "dataHolderBrandId": "string",
  "interimId": "string",
  "brandName": "string",
  "publicBaseUri": "string",
  "logoUri": "string",
  "industries": [
    "banking"
  ],
  "lastUpdated": "string",
  "abn": "string",
  "acn": "string",
  "arbn": "string"
}
```

<h3 id="cdr-register-api_dataholderbrandsummaryv2_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|dataHolderBrandId|string|optional||Unique id of the Data Holder Brand issued by the CDR Register.|
|interimId|string|optional||Interim id of the Data Holder Brand issued by the CDR Register. This is to be used to uniquely identify the record when _dataHolderBrandId_ is not populated and is not to be reused.|
|brandName|string|mandatory||The name of Data Holder Brand.|
|publicBaseUri|[URIString](#common-field-types)|mandatory||Base URI for the Data Holder's Consumer Data Standard public endpoints.|
|logoUri|[URIString](#common-field-types)|mandatory||Brand logo URI.|
|industries|[[IndustriesEnumV2](#schemacdr-register-apiindustriesenumv2)]|mandatory||The industries the Data Holder Brand belongs to.|
|lastUpdated|[DateTimeString](#common-field-types)|mandatory||The date/time that the Data Holder Brand data was last updated in the Register.|
|abn|string|optional||Australian Business Number for the organisation.|
|acn|string|optional||Australian Company Number for the organisation.|
|arbn|string|optional||Australian Registered Body Number. ARBNs are issued to registrable Australian bodies and foreign companies.|

<h3 class="schema-toc" id="cdr-register-api_schemas_tocSindustryenumv2">IndustryEnumV2</h3>
<p id="tocSindustryenumv2" class="orig-anchor"></p>

<p>
  <a id="cdr-register-api_schema-base_industryenum"></a>
  <a class="schema-anchor" id="schemacdr-register-apiindustryenumv2"></a>
</p>

```json
"banking"
```

<h3 id="cdr-register-api_industryenumv2_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|*anonymous*|[Enum](#common-field-types)|mandatory||none|

<h4 id="cdr-register-api_industryenumv2_enumerated-values-main">Enumerated Values</h4>

|Property|Value|
|---|---|
|*anonymous*|banking|
|*anonymous*|energy|
|*anonymous*|non-bank-lending|
|*anonymous*|telco|
|*anonymous*|all|

<h3 class="schema-toc" id="cdr-register-api_schemas_tocSindustriesenumv2">IndustriesEnumV2</h3>
<p id="tocSindustriesenumv2" class="orig-anchor"></p>

<p>
  <a id="cdr-register-api_schema-base_industriesenum"></a>
  <a class="schema-anchor" id="schemacdr-register-apiindustriesenumv2"></a>
</p>

```json
"banking"
```

<h3 id="cdr-register-api_industriesenumv2_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|*anonymous*|[Enum](#common-field-types)|mandatory||none|

<h4 id="cdr-register-api_industriesenumv2_enumerated-values-main">Enumerated Values</h4>

|Property|Value|
|---|---|
|*anonymous*|banking|
|*anonymous*|energy|
|*anonymous*|non-bank-lending|
|*anonymous*|telco|

<h3 class="schema-toc" id="cdr-register-api_schemas_tocSdataholdersstatuslist">DataHoldersStatusList</h3>
<p id="tocSdataholdersstatuslist" class="orig-anchor"></p>

<p>
  <a id="cdr-register-api_schema-base_dataholdersstatuslist"></a>
  <a class="schema-anchor" id="schemacdr-register-apidataholdersstatuslist"></a>
</p>

```json
{
  "data": [
    {
      "legalEntityId": "string",
      "status": "ACTIVE"
    }
  ],
  "links": {
    "self": "string"
  },
  "meta": {}
}
```

<h3 id="cdr-register-api_dataholdersstatuslist_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|data|[[DataHolderStatus](#schemacdr-register-apidataholderstatus)]|mandatory||Response data for the query.|
|links|[Links](#schemacdr-register-apilinks)|mandatory||none|
|meta|[Meta](#schemacdr-register-apimeta)|mandatory||none|

<h3 class="schema-toc" id="cdr-register-api_schemas_tocSdataholderstatus">DataHolderStatus</h3>
<p id="tocSdataholderstatus" class="orig-anchor"></p>

<p>
  <a id="cdr-register-api_schema-base_dataholderstatus"></a>
  <a class="schema-anchor" id="schemacdr-register-apidataholderstatus"></a>
</p>

```json
{
  "legalEntityId": "string",
  "status": "ACTIVE"
}
```

<h3 id="cdr-register-api_dataholderstatus_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|legalEntityId|string|mandatory||Unique id of the Data Holder Legal Entity issued by the CDR Register.|
|status|[Enum](#common-field-types)|mandatory||Data Holder status in the CDR Register.|

<h4 id="cdr-register-api_dataholderstatus_enumerated-values-main">Enumerated Values</h4>

|Property|Value|
|---|---|
|status|ACTIVE|
|status|REMOVED|

<h3 class="schema-toc" id="cdr-register-api_schemas_tocSsoftwareproductsstatuslist">SoftwareProductsStatusList</h3>
<p id="tocSsoftwareproductsstatuslist" class="orig-anchor"></p>

<p>
  <a id="cdr-register-api_schema-base_softwareproductsstatuslist"></a>
  <a class="schema-anchor" id="schemacdr-register-apisoftwareproductsstatuslist"></a>
</p>

```json
{
  "data": [
    {
      "softwareProductId": "string",
      "status": "ACTIVE"
    }
  ],
  "links": {
    "self": "string"
  },
  "meta": {}
}
```

<h3 id="cdr-register-api_softwareproductsstatuslist_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|data|[[SoftwareProductStatus](#schemacdr-register-apisoftwareproductstatus)]|mandatory||Response data for the query.|
|links|[Links](#schemacdr-register-apilinks)|mandatory||none|
|meta|[Meta](#schemacdr-register-apimeta)|mandatory||none|

<h3 class="schema-toc" id="cdr-register-api_schemas_tocSsoftwareproductstatus">SoftwareProductStatus</h3>
<p id="tocSsoftwareproductstatus" class="orig-anchor"></p>

<p>
  <a id="cdr-register-api_schema-base_softwareproductstatus"></a>
  <a class="schema-anchor" id="schemacdr-register-apisoftwareproductstatus"></a>
</p>

```json
{
  "softwareProductId": "string",
  "status": "ACTIVE"
}
```

<h3 id="cdr-register-api_softwareproductstatus_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|softwareProductId|string|mandatory||Unique id of the software product issued by the CDR Register.|
|status|[Enum](#common-field-types)|mandatory||Software product status in the CDR Register.|

<h4 id="cdr-register-api_softwareproductstatus_enumerated-values-main">Enumerated Values</h4>

|Property|Value|
|---|---|
|status|ACTIVE|
|status|INACTIVE|
|status|REMOVED|

<h3 class="schema-toc" id="cdr-register-api_schemas_tocSdatarecipientsstatuslist">DataRecipientsStatusList</h3>
<p id="tocSdatarecipientsstatuslist" class="orig-anchor"></p>

<p>
  <a id="cdr-register-api_schema-base_datarecipientsstatuslist"></a>
  <a class="schema-anchor" id="schemacdr-register-apidatarecipientsstatuslist"></a>
</p>

```json
{
  "data": [
    {
      "legalEntityId": "string",
      "status": "ACTIVE"
    }
  ],
  "links": {
    "self": "string"
  },
  "meta": {}
}
```

<h3 id="cdr-register-api_datarecipientsstatuslist_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|data|[[DataRecipientStatus](#schemacdr-register-apidatarecipientstatus)]|mandatory||Response data for the query.|
|links|[Links](#schemacdr-register-apilinks)|mandatory||none|
|meta|[Meta](#schemacdr-register-apimeta)|mandatory||none|

<h3 class="schema-toc" id="cdr-register-api_schemas_tocSdatarecipientstatus">DataRecipientStatus</h3>
<p id="tocSdatarecipientstatus" class="orig-anchor"></p>

<p>
  <a id="cdr-register-api_schema-base_datarecipientstatus"></a>
  <a class="schema-anchor" id="schemacdr-register-apidatarecipientstatus"></a>
</p>

```json
{
  "legalEntityId": "string",
  "status": "ACTIVE"
}
```

<h3 id="cdr-register-api_datarecipientstatus_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|legalEntityId|string|mandatory||Unique id of the Data Recipient Legal Entity issued by the CDR Register.|
|status|[Enum](#common-field-types)|mandatory||Data Recipient status in the CDR Register.|

<h4 id="cdr-register-api_datarecipientstatus_enumerated-values-main">Enumerated Values</h4>

|Property|Value|
|---|---|
|status|ACTIVE|
|status|SUSPENDED|
|status|REVOKED|
|status|SURRENDERED|

<h3 class="schema-toc" id="cdr-register-api_schemas_tocSresponseregisterdatarecipientlist">ResponseRegisterDataRecipientList</h3>
<p id="tocSresponseregisterdatarecipientlist" class="orig-anchor"></p>

<p>
  <a id="cdr-register-api_schema-base_responseregisterdatarecipientlist"></a>
  <a class="schema-anchor" id="schemacdr-register-apiresponseregisterdatarecipientlist"></a>
</p>

```json
{
  "data": [
    {
      "legalEntityId": "string",
      "legalEntityName": "string",
      "accreditationNumber": "string",
      "accreditationLevel": "UNRESTRICTED",
      "logoUri": "string",
      "dataRecipientBrands": [
        {
          "dataRecipientBrandId": "string",
          "brandName": "string",
          "logoUri": "string",
          "softwareProducts": [
            {
              "softwareProductId": "string",
              "softwareProductName": "string",
              "softwareProductDescription": "string",
              "logoUri": "string",
              "status": "ACTIVE"
            }
          ],
          "status": "ACTIVE"
        }
      ],
      "status": "ACTIVE",
      "lastUpdated": "string"
    }
  ],
  "links": {
    "self": "string"
  },
  "meta": {}
}
```

*Response containing a list of Data Recipients in the CDR Register.*

<h3 id="cdr-register-api_responseregisterdatarecipientlist_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|data|[[RegisterDataRecipient](#schemacdr-register-apiregisterdatarecipient)]|mandatory||Response data for the query.|
|links|[Links](#schemacdr-register-apilinks)|mandatory||none|
|meta|[Meta](#schemacdr-register-apimeta)|mandatory||none|

<h3 class="schema-toc" id="cdr-register-api_schemas_tocSregisterdatarecipient">RegisterDataRecipient</h3>
<p id="tocSregisterdatarecipient" class="orig-anchor"></p>

<p>
  <a id="cdr-register-api_schema-base_registerdatarecipient"></a>
  <a class="schema-anchor" id="schemacdr-register-apiregisterdatarecipient"></a>
</p>

```json
{
  "legalEntityId": "string",
  "legalEntityName": "string",
  "accreditationNumber": "string",
  "accreditationLevel": "UNRESTRICTED",
  "logoUri": "string",
  "dataRecipientBrands": [
    {
      "dataRecipientBrandId": "string",
      "brandName": "string",
      "logoUri": "string",
      "softwareProducts": [
        {
          "softwareProductId": "string",
          "softwareProductName": "string",
          "softwareProductDescription": "string",
          "logoUri": "string",
          "status": "ACTIVE"
        }
      ],
      "status": "ACTIVE"
    }
  ],
  "status": "ACTIVE",
  "lastUpdated": "string"
}
```

<h3 id="cdr-register-api_registerdatarecipient_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|legalEntityId|string|mandatory||Unique id of the Data Recipient Legal Entity issued by the CDR Register.|
|legalEntityName|string|mandatory||Legal name of the Data Recipient.|
|accreditationNumber|string|mandatory||CDR Register issued human readable unique number given to Data Recipients upon accreditation.|
|accreditationLevel|[Enum](#common-field-types)|mandatory||Accreditation level of the Data Recipient in the CDR Register.|
|logoUri|[URIString](#common-field-types)|mandatory||Legal Entity logo URI.|
|dataRecipientBrands|[[DataRecipientBrandMetaData](#schemacdr-register-apidatarecipientbrandmetadata)]|optional||[Metadata related to Data Recipient Brand.]|
|status|[Enum](#common-field-types)|mandatory||Data Recipient status in the CDR Register.|
|lastUpdated|[DateTimeString](#common-field-types)|mandatory||The date/time that the Legal Entity was last updated in the CDR Register.|

<h4 id="cdr-register-api_registerdatarecipient_enumerated-values-main">Enumerated Values</h4>

|Property|Value|
|---|---|
|accreditationLevel|UNRESTRICTED|
|accreditationLevel|SPONSORED|
|status|ACTIVE|
|status|SUSPENDED|
|status|REVOKED|
|status|SURRENDERED|

<h3 class="schema-toc" id="cdr-register-api_schemas_tocSdatarecipientbrandmetadata">DataRecipientBrandMetaData</h3>
<p id="tocSdatarecipientbrandmetadata" class="orig-anchor"></p>

<p>
  <a id="cdr-register-api_schema-base_datarecipientbrandmetadata"></a>
  <a class="schema-anchor" id="schemacdr-register-apidatarecipientbrandmetadata"></a>
</p>

```json
{
  "dataRecipientBrandId": "string",
  "brandName": "string",
  "logoUri": "string",
  "softwareProducts": [
    {
      "softwareProductId": "string",
      "softwareProductName": "string",
      "softwareProductDescription": "string",
      "logoUri": "string",
      "status": "ACTIVE"
    }
  ],
  "status": "ACTIVE"
}
```

*Metadata related to Data Recipient Brand.*

<h3 id="cdr-register-api_datarecipientbrandmetadata_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|dataRecipientBrandId|string|mandatory||Unique id of the Data Recipient brand issued by the CDR Register.|
|brandName|string|mandatory||Data Recipient Brand name.|
|logoUri|[URIString](#common-field-types)|mandatory||Data Recipient Brand logo URI.|
|softwareProducts|[[SoftwareProductMetaData](#schemacdr-register-apisoftwareproductmetadata)]|optional||[Data Recipient Brand Software Products.]|
|status|[Enum](#common-field-types)|mandatory||Data Recipient Brand status in the CDR Register.|

<h4 id="cdr-register-api_datarecipientbrandmetadata_enumerated-values-main">Enumerated Values</h4>

|Property|Value|
|---|---|
|status|ACTIVE|
|status|INACTIVE|
|status|REMOVED|

<h3 class="schema-toc" id="cdr-register-api_schemas_tocSsoftwareproductmetadata">SoftwareProductMetaData</h3>
<p id="tocSsoftwareproductmetadata" class="orig-anchor"></p>

<p>
  <a id="cdr-register-api_schema-base_softwareproductmetadata"></a>
  <a class="schema-anchor" id="schemacdr-register-apisoftwareproductmetadata"></a>
</p>

```json
{
  "softwareProductId": "string",
  "softwareProductName": "string",
  "softwareProductDescription": "string",
  "logoUri": "string",
  "status": "ACTIVE"
}
```

*Data Recipient Brand Software Products.*

<h3 id="cdr-register-api_softwareproductmetadata_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|softwareProductId|string|mandatory||Unique id of the Data Recipient software product issued by the CDR Register.|
|softwareProductName|string|mandatory||Name of the software product.|
|softwareProductDescription|string|mandatory||Description of the software product.|
|logoUri|[URIString](#common-field-types)|mandatory||Software product logo URI.|
|status|[Enum](#common-field-types)|mandatory||Software Product status in the CDR Register.|

<h4 id="cdr-register-api_softwareproductmetadata_enumerated-values-main">Enumerated Values</h4>

|Property|Value|
|---|---|
|status|ACTIVE|
|status|INACTIVE|
|status|REMOVED|

<h3 class="schema-toc" id="cdr-register-api_schemas_tocSlegalentitydetail">LegalEntityDetail</h3>
<p id="tocSlegalentitydetail" class="orig-anchor"></p>

<p>
  <a id="cdr-register-api_schema-base_legalentitydetail"></a>
  <a class="schema-anchor" id="schemacdr-register-apilegalentitydetail"></a>
</p>

```json
{
  "legalEntityId": "string",
  "legalEntityName": "string",
  "logoUri": "string",
  "registrationNumber": "string",
  "registrationDate": "string",
  "registeredCountry": "string",
  "abn": "string",
  "acn": "string",
  "arbn": "string",
  "anzsicDivision": "string",
  "organisationType": "SOLE_TRADER",
  "status": "ACTIVE"
}
```

*The data that is common to all organisations, regardless of the type (e.g., company, trust, partnership, government).*

<h3 id="cdr-register-api_legalentitydetail_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|legalEntityId|string|mandatory||Unique id of the organisation issued by the CDR Register.|
|legalEntityName|string|mandatory||Unique legal name of the organisation.|
|logoUri|[URIString](#common-field-types)|mandatory||Legal Entity logo URI.|
|registrationNumber|string|optional||Unique registration number (if the company is registered outside Australia).|
|registrationDate|[DateString](#common-field-types)|optional||Date of registration (if the company is registered outside Australia).|
|registeredCountry|string|optional||Country of registration (if the company is registered outside Australia).|
|abn|string|optional||Australian Business Number for the organisation.|
|acn|string|optional||Australian Company Number for the organisation.|
|arbn|string|optional||Australian Registered Body Number. ARBNs are issued to registrable Australian bodies and foreign companies.|
|anzsicDivision|[ExternalRef](#common-field-types)|optional||ANZSIC division of the organisation. **[[ANZSIC-2006]](#iref-ANZSIC-2006)**.|
|organisationType|[Enum](#common-field-types)|optional||Legal organisation type.|
|status|[Enum](#common-field-types)|mandatory||none|

<h4 id="cdr-register-api_legalentitydetail_enumerated-values-main">Enumerated Values</h4>

|Property|Value|
|---|---|
|organisationType|SOLE_TRADER|
|organisationType|COMPANY|
|organisationType|PARTNERSHIP|
|organisationType|TRUST|
|organisationType|GOVERNMENT_ENTITY|
|organisationType|OTHER|
|status|ACTIVE|
|status|REMOVED|

<h3 class="schema-toc" id="cdr-register-api_schemas_tocSregisterdataholderbrandserviceendpoint">RegisterDataHolderBrandServiceEndpoint</h3>
<p id="tocSregisterdataholderbrandserviceendpoint" class="orig-anchor"></p>

<p>
  <a id="cdr-register-api_schema-base_registerdataholderbrandserviceendpoint"></a>
  <a class="schema-anchor" id="schemacdr-register-apiregisterdataholderbrandserviceendpoint"></a>
</p>

```json
{
  "version": "string",
  "publicBaseUri": "string",
  "resourceBaseUri": "string",
  "infosecBaseUri": "string",
  "extensionBaseUri": "string",
  "websiteUri": "string"
}
```

*Endpoints related to Data Holder Brand services.*

<h3 id="cdr-register-api_registerdataholderbrandserviceendpoint_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|version|string|mandatory||The major version of the high level standards. This is not the version of the endpoint or the payload being requested but the version of the overall standards being applied. This version number will be "`v`" followed by the major version of the standards as a positive integer (e.g., `v1`, `v12` or `v76`).|
|publicBaseUri|[URIString](#common-field-types)|mandatory||Base URI for the Data Holder's Consumer Data Standard public endpoints.|
|resourceBaseUri|[URIString](#common-field-types)|mandatory||Base URI for the Data Holder's Consumer Data Standard resource endpoints.|
|infosecBaseUri|[URIString](#common-field-types)|mandatory||Base URI for the Data Holder's Consumer Data Standard information security endpoints.|
|extensionBaseUri|[URIString](#common-field-types)|optional||Base URI for the Data Holder extension endpoints to the Consumer Data Standard (optional).|
|websiteUri|[URIString](#common-field-types)|mandatory||Publicly available website or web resource URI.|

<h3 class="schema-toc" id="cdr-register-api_schemas_tocSregisterdataholderauth">RegisterDataHolderAuth</h3>
<p id="tocSregisterdataholderauth" class="orig-anchor"></p>

<p>
  <a id="cdr-register-api_schema-base_registerdataholderauth"></a>
  <a class="schema-anchor" id="schemacdr-register-apiregisterdataholderauth"></a>
</p>

```json
{
  "registerUType": "SIGNED-JWT",
  "jwksEndpoint": "string"
}
```

*Defines the mechanism used and associated endpoints for Data Holder to Data Recipient authentication.*

<h3 id="cdr-register-api_registerdataholderauth_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|registerUType|[Enum](#common-field-types)|mandatory||The type of authentication and authorisation mechanism in use.|
|jwksEndpoint|[URIString](#common-field-types)|mandatory||JWKS endpoint used for authentication by the Data Holder with the Data Recipient.|

<h4 id="cdr-register-api_registerdataholderauth_enumerated-values-main">Enumerated Values</h4>

|Property|Value|
|---|---|
|registerUType|SIGNED-JWT|

<h3 class="schema-toc" id="cdr-register-api_schemas_tocSlinkspaginated">LinksPaginated</h3>
<p id="tocSlinkspaginated" class="orig-anchor"></p>

<p>
  <a id="cdr-register-api_schema-base_linkspaginated"></a>
  <a class="schema-anchor" id="schemacdr-register-apilinkspaginated"></a>
</p>

```json
{
  "first": "string",
  "last": "string",
  "next": "string",
  "prev": "string",
  "self": "string"
}
```

<h3 id="cdr-register-api_linkspaginated_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|first|[URIString](#common-field-types)|optional||URI to the first page of this set. Mandatory if this response is not the first page.|
|last|[URIString](#common-field-types)|optional||URI to the last page of this set. Mandatory if this response is not the last page.|
|next|[URIString](#common-field-types)|optional||URI to the next page of this set. Mandatory if this response is not the last page.|
|prev|[URIString](#common-field-types)|optional||URI to the previous page of this set. Mandatory if this response is not the first page.|
|self|[URIString](#common-field-types)|mandatory||Fully qualified link to this API call.|

<h3 class="schema-toc" id="cdr-register-api_schemas_tocSmetapaginated">MetaPaginated</h3>
<p id="tocSmetapaginated" class="orig-anchor"></p>

<p>
  <a id="cdr-register-api_schema-base_metapaginated"></a>
  <a class="schema-anchor" id="schemacdr-register-apimetapaginated"></a>
</p>

```json
{
  "totalPages": 0,
  "totalRecords": 0
}
```

<h3 id="cdr-register-api_metapaginated_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|totalPages|[NaturalNumber](#common-field-types)|mandatory||The total number of pages in the full set.|
|totalRecords|[NaturalNumber](#common-field-types)|mandatory||The total number of records in the full set.|

<h3 class="schema-toc" id="cdr-register-api_schemas_tocSlinks">Links</h3>
<p id="tocSlinks" class="orig-anchor"></p>

<p>
  <a id="cdr-register-api_schema-base_links"></a>
  <a class="schema-anchor" id="schemacdr-register-apilinks"></a>
</p>

```json
{
  "self": "string"
}
```

<h3 id="cdr-register-api_links_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|self|[URIString](#common-field-types)|mandatory||Fully qualified link to this API call.|

<h3 class="schema-toc" id="cdr-register-api_schemas_tocSmeta">Meta</h3>
<p id="tocSmeta" class="orig-anchor"></p>

<p>
  <a id="cdr-register-api_schema-base_meta"></a>
  <a class="schema-anchor" id="schemacdr-register-apimeta"></a>
</p>

```json
{}
```

<h3 id="cdr-register-api_meta_properties">Properties</h3>

*None*

<h3 class="schema-toc" id="cdr-register-api_schemas_tocSresponseerrorlistv2">ResponseErrorListV2</h3>
<p id="tocSresponseerrorlistv2" class="orig-anchor"></p>

<p>
  <a id="cdr-register-api_schema-base_responseerrorlist"></a>
  <a class="schema-anchor" id="schemacdr-register-apiresponseerrorlistv2"></a>
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

<h3 id="cdr-register-api_responseerrorlistv2_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|errors|[[ErrorV2](#schemacdr-register-apierrorv2)]|mandatory||List of errors.|

<h3 class="schema-toc" id="cdr-register-api_schemas_tocSerrorv2">ErrorV2</h3>
<p id="tocSerrorv2" class="orig-anchor"></p>

<p>
  <a id="cdr-register-api_schema-base_error"></a>
  <a class="schema-anchor" id="schemacdr-register-apierrorv2"></a>
</p>

```json
{
  "code": "string",
  "title": "string",
  "detail": "string",
  "meta": {
    "urn": "string"
  }
}
```

<h3 id="cdr-register-api_errorv2_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|code|string|mandatory||The code of the error encountered. Where the error is specific to the respondent, an application-specific error code, expressed as a string value. If the error is application-specific, the URN code that the specific error extends must be provided in the _meta_ object. Otherwise, the value is the error code URN.|
|title|string|mandatory||A short, human-readable summary of the problem that **MUST NOT** change from occurrence to occurrence of the problem represented by the error code.|
|detail|string|mandatory||A human-readable explanation specific to this occurrence of the problem.|
|meta|object|conditional||Additional data for customised error codes.|
|» urn|string|conditional||The CDR error code URN which the application-specific error code extends. Mandatory if the error _code_ is an application-specific error rather than a standardised error code.|

