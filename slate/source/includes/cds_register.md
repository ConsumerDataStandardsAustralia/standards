

## Get OpenId Provider Config

<a id="opIdGetOpenIdProviderConfig"></a>

> Code samples

```http
GET https://<register-base-url>/.well-known/openid-configuration HTTP/1.1

Accept: application/json

```

```javascript
var headers = {
  'Accept':'application/json'

};

$.ajax({
  url: 'https://<register-base-url>/.well-known/openid-configuration',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`GET /.well-known/openid-configuration`

Endpoint used by participants to discover the CDR Register OpenID configuration and obtain information needed to interact with it, including its OAuth 2.0 endpoint locations.

###Endpoint Version
|   |  |
|---|--|
|Version|**Versioning is not supported for this endpoint**

> Example responses

> 200 Response

```json
{
  "issuer": "string",
  "jwks_uri": "string",
  "token_endpoint": "string",
  "claims_supported": [
    "string"
  ],
  "id_token_signing_alg_values_supported": [
    "string"
  ],
  "subject_types_supported": [
    "string"
  ],
  "code_challenge_methods_supported": [
    "string"
  ],
  "scopes_supported": [
    "string"
  ],
  "response_types_supported": [
    "string"
  ],
  "grant_types_supported": [
    "string"
  ],
  "token_endpoint_auth_methods_supported": [
    "string"
  ],
  "tls_client_certificate_bound_access_tokens": true,
  "token_endpoint_auth_signing_alg_values_supported": [
    "string"
  ]
}
```

<h3 id="get-openid-provider-config-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The OpenID Provider Configuration Metadata values|[ResponseOpenIDProviderConfigMetadata](#schemacdr-participant-discovery-apiresponseopenidproviderconfigmetadata)|

  
    <aside class="success">
This operation does not require authentication
</aside>

  

## Get JWKS

<a id="opIdGet JWKS"></a>

> Code samples

```http
GET https://<register-base-url>/jwks HTTP/1.1

Accept: application/json

```

```javascript
var headers = {
  'Accept':'application/json'

};

$.ajax({
  url: 'https://<register-base-url>/jwks',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`GET /jwks`

JWKS endpoint containing the public keys used by the CDR Register to validate the signature of issued SSAs and authenticate outbound calls to participants in the CDR.

###Endpoint Version
|   |  |
|---|--|
|Version|**Versioning is not supported for this endpoint**

> Example responses

> 200 Response

```json
{
  "keys": [
    {
      "alg": "string",
      "e": "string",
      "key_ops": [
        "string"
      ],
      "kid": "string",
      "kty": "string",
      "n": "string"
    }
  ]
}
```

<h3 id="get-jwks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A JSON object that represents a set of JWKs|[ResponseJWKS](#schemacdr-participant-discovery-apiresponsejwks)|

  
    <aside class="success">
This operation does not require authentication
</aside>

  

## Get Data Holder Brands

<a id="opIdGetDataHolderBrands"></a>

> Code samples

```http
GET https://<register-base-url>/cdr-register/v1/{industry}/data-holders/brands HTTP/1.1

Accept: application/json
Authorization: string
x-v: string
x-min-v: string

```

```javascript
var headers = {
  'Accept':'application/json',
  'Authorization':'string',
  'x-v':'string',
  'x-min-v':'string'

};

$.ajax({
  url: 'https://<register-base-url>/cdr-register/v1/{industry}/data-holders/brands',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`GET /cdr-register/v1/{industry}/data-holders/brands`

Allows Data Recipients to discover Data Holder Brands available in the CDR ecosystem.

Obsolete versions: [v1](includes/obsolete/get-data-holder-brands-v1.html)

###Endpoint Version
|   |  |
|---|--|
|Version|**2**

<h3 id="get-data-holder-brands-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|industry|path|string|mandatory|The industry the participant is retrieving data for (Banking, etc)|
|Authorization|header|string|mandatory|An Authorisation Token as per **[[RFC6750]](#nref-RFC6750)**.|
|x-v|header|string|mandatory|The version of the API end point requested by the client. Must be set to a positive integer.|
|x-min-v|header|string|optional|The [minimum version](https://consumerdatastandardsaustralia.github.io/standards/#http-headers) of the API end point requested by the client. Must be set to a positive integer if provided.|
|updated-since|query|string(date-time)|optional|query filter returns results updated since the specified date-time|
|page|query|integer(int32)|optional|the page number to return|
|page-size|query|integer(int32)|optional|the number of records to return per page|

#### Enumerated Values

|Parameter|Value|
|---|---|
|industry|banking|
|industry|energy|
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
        "registrationDate": "2019-08-24",
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
      "lastUpdated": "2019-08-24T14:15:22Z"
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

<h3 id="get-data-holder-brands-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[ResponseRegisterDataHolderBrandList](#schemacdr-participant-discovery-apiresponseregisterdataholderbrandlist)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Missing Required Header / Invalid Version / Invalid Path Parameter|[ResponseErrorListV2](#schemacdr-participant-discovery-apiresponseerrorlistv2)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Invalid Bearer Token|[ResponseErrorListV2](#schemacdr-participant-discovery-apiresponseerrorlistv2)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|Unsupported Version|[ResponseErrorListV2](#schemacdr-participant-discovery-apiresponseerrorlistv2)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-v|string||The version of the API end point that the CDR Register has responded with.|

  
    
      <aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
<a href="#authorisation-scopes">cdr-register:bank:read,
cdr-register:read</a>
</aside>

    
  

## Get Software Statement Assertion (SSA)

<a id="opIdGetSoftwareStatementAssertion"></a>

> Code samples

```http
GET https://<register-base-url>/cdr-register/v1/{industry}/data-recipients/brands/{dataRecipientBrandId}/software-products/{softwareProductId}/ssa HTTP/1.1

Accept: application/json
x-v: string
x-min-v: string
Authorization: string

```

```javascript
var headers = {
  'Accept':'application/json',
  'x-v':'string',
  'x-min-v':'string',
  'Authorization':'string'

};

$.ajax({
  url: 'https://<register-base-url>/cdr-register/v1/{industry}/data-recipients/brands/{dataRecipientBrandId}/software-products/{softwareProductId}/ssa',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`GET /cdr-register/v1/{industry}/data-recipients/brands/{dataRecipientBrandId}/software-products/{softwareProductId}/ssa`

Get a Software Statement Assertion (SSA) for a software product on the CDR Register to be used for Dynamic Client Registration with a Data Holder Brand.

Obsolete versions: [v2](includes/obsolete/get-software-statement-assertion-v2.html)

###Endpoint Version
|   |  |
|---|--|
|Version|**3**

<h3 id="get-software-statement-assertion-(ssa)-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|industry|path|string|mandatory|The industry the participant is retrieving data for (Banking, etc)|
|x-v|header|string|mandatory|The version of the API end point requested by the client. Must be set to a positive integer.|
|x-min-v|header|string|optional|The [minimum version](https://consumerdatastandardsaustralia.github.io/standards/#http-headers) of the API end point requested by the client. Must be set to a positive integer if provided.|
|dataRecipientBrandId|path|string|mandatory|Unique id for the Accredited Data Recipient Brand that the Software Product is associated with in the CDR Register|
|softwareProductId|path|string|mandatory|Unique id for the Accredited Data Recipient Software Product in the CDR Register|
|Authorization|header|string|mandatory|An Authorisation Token as per **[[RFC6750]](#nref-RFC6750)**.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|industry|banking|
|industry|energy|
|industry|telco|
|industry|all|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="get-software-statement-assertion-(ssa)-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|string|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Missing Required Header / Invalid Version / Invalid Path Parameter|[ResponseErrorListV2](#schemacdr-participant-discovery-apiresponseerrorlistv2)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Invalid Bearer Token|[ResponseErrorListV2](#schemacdr-participant-discovery-apiresponseerrorlistv2)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Invalid BrandId|[ResponseErrorListV2](#schemacdr-participant-discovery-apiresponseerrorlistv2)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Invalid Software Product|[ResponseErrorListV2](#schemacdr-participant-discovery-apiresponseerrorlistv2)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|Unsupported Version|[ResponseErrorListV2](#schemacdr-participant-discovery-apiresponseerrorlistv2)|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|SSA validation failed|[ResponseErrorListV2](#schemacdr-participant-discovery-apiresponseerrorlistv2)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-v|string||The version of the API end point that the CDR Register has responded with.|

  
    
      <aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
<a href="#authorisation-scopes">cdr-register:bank:read,
cdr-register:read</a>
</aside>

    
  

## Get Data Holder Statuses

<a id="opIdGetDataHolderStatuses"></a>

> Code samples

```http
GET https://<register-base-url>/cdr-register/v1/{industry}/data-holders/status HTTP/1.1

Accept: application/json
x-v: string
x-min-v: string
If-None-Match: string

```

```javascript
var headers = {
  'Accept':'application/json',
  'x-v':'string',
  'x-min-v':'string',
  'If-None-Match':'string'

};

$.ajax({
  url: 'https://<register-base-url>/cdr-register/v1/{industry}/data-holders/status',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`GET /cdr-register/v1/{industry}/data-holders/status`

Endpoint used by participants to discover the statuses for Data Holders from the CDR Register

###Endpoint Version
|   |  |
|---|--|
|Version|**1**

<h3 id="get-data-holder-statuses-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|industry|path|string|mandatory|The industry the participant is retrieving data for (Banking, etc)|
|x-v|header|string|mandatory|The version of the API end point requested by the client. Must be set to a positive integer.|
|x-min-v|header|string|optional|The [minimum version](https://consumerdatastandardsaustralia.github.io/standards/#http-headers) of the API end point requested by the client. Must be set to a positive integer if provided.|
|If-None-Match|header|string|optional|Makes the request method conditional on a recipient cache or origin server not having any current representation of the target resource with an entity-tag that does not match any of those listed in the field-value.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|industry|banking|
|industry|energy|
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

<h3 id="get-data-holder-statuses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[DataHoldersStatusList](#schemacdr-participant-discovery-apidataholdersstatuslist)|
|304|[Not Modified](https://tools.ietf.org/html/rfc7232#section-4.1)|Not Modified - The current representation of the target resource matches with the entity-tag provided in the If-None-Match request header|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Missing Required Header / Invalid Version / Invalid Path Parameter|[ResponseErrorListV2](#schemacdr-participant-discovery-apiresponseerrorlistv2)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|Unsupported Version|[ResponseErrorListV2](#schemacdr-participant-discovery-apiresponseerrorlistv2)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-v|string||The version of the API end point that the CDR Register has responded with.|
|200|Etag|string||Entity tag that uniquely represents the requested resource.|
|304|Etag|string||Entity tag that uniquely represents the requested resource.|

  
    <aside class="success">
This operation does not require authentication
</aside>

  

## Get Software Products Statuses

<a id="opIdGetSoftwareProductsStatuses"></a>

> Code samples

```http
GET https://<register-base-url>/cdr-register/v1/{industry}/data-recipients/brands/software-products/status HTTP/1.1

Accept: application/json
x-v: string
x-min-v: string
If-None-Match: string

```

```javascript
var headers = {
  'Accept':'application/json',
  'x-v':'string',
  'x-min-v':'string',
  'If-None-Match':'string'

};

$.ajax({
  url: 'https://<register-base-url>/cdr-register/v1/{industry}/data-recipients/brands/software-products/status',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`GET /cdr-register/v1/{industry}/data-recipients/brands/software-products/status`

Endpoint used by participants to discover the statuses for software products from the CDR Register.

Obsolete versions: [v1](includes/obsolete/get-software-product-statuses-v1.html)

###Endpoint Version
|   |  |
|---|--|
|Version|**2**

<h3 id="get-software-products-statuses-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|industry|path|string|mandatory|The industry the participant is retrieving data for (Banking, etc)|
|x-v|header|string|mandatory|The version of the API end point requested by the client. Must be set to a positive integer.|
|x-min-v|header|string|optional|The [minimum version](https://consumerdatastandardsaustralia.github.io/standards/#http-headers) of the API end point requested by the client. Must be set to a positive integer if provided.|
|If-None-Match|header|string|optional|Makes the request method conditional on a recipient cache or origin server not having any current representation of the target resource with an entity-tag that does not match any of those listed in the field-value.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|industry|banking|
|industry|energy|
|industry|telco|
|industry|all|

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

<h3 id="get-software-products-statuses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[SoftwareProductsStatusList](#schemacdr-participant-discovery-apisoftwareproductsstatuslist)|
|304|[Not Modified](https://tools.ietf.org/html/rfc7232#section-4.1)|Not Modified - The current representation of the target resource matches with the entity-tag provided in the If-None-Match request header|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Missing Required Header / Invalid Version / Invalid Path Parameter|[ResponseErrorListV2](#schemacdr-participant-discovery-apiresponseerrorlistv2)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|Unsupported Version|[ResponseErrorListV2](#schemacdr-participant-discovery-apiresponseerrorlistv2)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-v|string||The version of the API end point that the CDR Register has responded with.|
|200|Etag|string||Entity tag that uniquely represents the requested resource.|
|304|Etag|string||Entity tag that uniquely represents the requested resource.|

  
    <aside class="success">
This operation does not require authentication
</aside>

  

## Get Data Recipients Statuses

<a id="opIdGetDataRecipientsStatuses"></a>

> Code samples

```http
GET https://<register-base-url>/cdr-register/v1/{industry}/data-recipients/status HTTP/1.1

Accept: application/json
x-v: string
x-min-v: string
If-None-Match: string

```

```javascript
var headers = {
  'Accept':'application/json',
  'x-v':'string',
  'x-min-v':'string',
  'If-None-Match':'string'

};

$.ajax({
  url: 'https://<register-base-url>/cdr-register/v1/{industry}/data-recipients/status',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`GET /cdr-register/v1/{industry}/data-recipients/status`

Endpoint used by participants to discover the statuses for Data Recipients from the CDR Register.

Obsolete versions: [v1](includes/obsolete/get-data-recipient-statuses-v1.html)

###Endpoint Version
|   |  |
|---|--|
|Version|**2**

<h3 id="get-data-recipients-statuses-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|industry|path|string|mandatory|The industry the participant is retrieving data for (Banking, etc)|
|x-v|header|string|mandatory|The version of the API end point requested by the client. Must be set to a positive integer.|
|x-min-v|header|string|optional|The [minimum version](https://consumerdatastandardsaustralia.github.io/standards/#http-headers) of the API end point requested by the client. Must be set to a positive integer if provided.|
|If-None-Match|header|string|optional|Makes the request method conditional on a recipient cache or origin server not having any current representation of the target resource with an entity-tag that does not match any of those listed in the field-value.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|industry|banking|
|industry|energy|
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

<h3 id="get-data-recipients-statuses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[DataRecipientsStatusList](#schemacdr-participant-discovery-apidatarecipientsstatuslist)|
|304|[Not Modified](https://tools.ietf.org/html/rfc7232#section-4.1)|Not Modified - The current representation of the target resource matches with the entity-tag provided in the If-None-Match request header|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Missing Required Header / Invalid Version / Invalid Path Parameter|[ResponseErrorListV2](#schemacdr-participant-discovery-apiresponseerrorlistv2)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|Unsupported Version|[ResponseErrorListV2](#schemacdr-participant-discovery-apiresponseerrorlistv2)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-v|string||The version of the API end point that the CDR Register has responded with.|
|200|Etag|string||Entity tag that uniquely represents the requested resource.|
|304|Etag|string||Entity tag that uniquely represents the requested resource.|

  
    <aside class="success">
This operation does not require authentication
</aside>

  

## Get Data Recipients

<a id="opIdGetDataRecipients"></a>

> Code samples

```http
GET https://<register-base-url>/cdr-register/v1/{industry}/data-recipients HTTP/1.1

Accept: application/json
x-v: string
x-min-v: string
If-None-Match: string

```

```javascript
var headers = {
  'Accept':'application/json',
  'x-v':'string',
  'x-min-v':'string',
  'If-None-Match':'string'

};

$.ajax({
  url: 'https://<register-base-url>/cdr-register/v1/{industry}/data-recipients',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`GET /cdr-register/v1/{industry}/data-recipients`

Endpoint used by participants to discover data recipients and associated brands and software products, available in the CDR ecosystem.

Obsolete versions: [v2](includes/obsolete/get-data-recipients-v2.html)

###Endpoint Version
|   |  |
|---|--|
|Version|**3**

<h3 id="get-data-recipients-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|industry|path|string|mandatory|The industry the participant is retrieving data for (Banking, etc)|
|x-v|header|string|mandatory|The version of the API end point requested by the client. Must be set to a positive integer.|
|x-min-v|header|string|optional|The [minimum version](https://consumerdatastandardsaustralia.github.io/standards/#http-headers) of the API end point requested by the client. Must be set to a positive integer if provided.|
|If-None-Match|header|string|optional|Makes the request method conditional on a recipient cache or origin server not having any current representation of the target resource with an entity-tag that does not match any of those listed in the field-value.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|industry|banking|
|industry|energy|
|industry|telco|
|industry|all|

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
      "lastUpdated": "2019-08-24T14:15:22Z"
    }
  ],
  "links": {
    "self": "string"
  },
  "meta": {}
}
```

<h3 id="get-data-recipients-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[ResponseRegisterDataRecipientList](#schemacdr-participant-discovery-apiresponseregisterdatarecipientlist)|
|304|[Not Modified](https://tools.ietf.org/html/rfc7232#section-4.1)|Not Modified - The current representation of the target resource matches with the entity-tag provided in the If-None-Match request header|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Missing Required Header / Invalid Version / Invalid Path Parameter|[ResponseErrorListV2](#schemacdr-participant-discovery-apiresponseerrorlistv2)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|Unsupported Version|[ResponseErrorListV2](#schemacdr-participant-discovery-apiresponseerrorlistv2)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-v|string||The version of the API end point that the CDR Register has responded with.|
|200|Etag|string||Entity tag that uniquely represents the requested resource.|
|304|Etag|string||Entity tag that uniquely represents the requested resource.|

  
    <aside class="success">
This operation does not require authentication
</aside>

  

<h2 class="schema-heading" id="cdr-participant-discovery-api-schemas">Schemas</h2>
<a class="schema-link" id="cdr-participant-discovery-api-schemas"></a>

<h3 class="schema-toc" id="tocSresponseopenidproviderconfigmetadata">ResponseOpenIDProviderConfigMetadata</h3>

<a id="schemacdr-participant-discovery-apiresponseopenidproviderconfigmetadata"></a>

```json
{
  "issuer": "string",
  "jwks_uri": "string",
  "token_endpoint": "string",
  "claims_supported": [
    "string"
  ],
  "id_token_signing_alg_values_supported": [
    "string"
  ],
  "subject_types_supported": [
    "string"
  ],
  "code_challenge_methods_supported": [
    "string"
  ],
  "scopes_supported": [
    "string"
  ],
  "response_types_supported": [
    "string"
  ],
  "grant_types_supported": [
    "string"
  ],
  "token_endpoint_auth_methods_supported": [
    "string"
  ],
  "tls_client_certificate_bound_access_tokens": true,
  "token_endpoint_auth_signing_alg_values_supported": [
    "string"
  ]
}

```

*Response containing the Open ID Provider Configuration Metadata*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|issuer|string|mandatory|URL using the https scheme with no query or fragment component that the CDR Register asserts as its Issuer Identifier|
|jwks_uri|string|mandatory|URL of the CDR Register's JSON Web Key Set **[[JWK]](#nref-JWK)** document. This contains the signing key(s) used to validate access tokens issued from the CDR Register. Note that this differs from the JWKS endpoint used to validate SSAs and CDR Register client authentication|
|token_endpoint|string|mandatory|URL of the CDR Register's OAuth 2.0 Token Endpoint|
|claims_supported|[string]|mandatory|JSON array containing a list of the Claim Names of the Claims that the CDR Register supplies values for|
|id_token_signing_alg_values_supported|[string]|mandatory|JSON array containing a list of the JWS signing algorithms (alg values) supported by the CDR Register for the ID Token to encode the Claims in a JWT. Given the CDR Register does not issue ID tokens, this field can be safely ignored|
|subject_types_supported|[string]|mandatory|JSON array containing a list of the Subject Identifier types that the CDR Register supports. Given the CDR Register does not issue ID tokens, this field can be safely ignored|
|code_challenge_methods_supported|[string]|mandatory|JSON array containing a list of Proof Key for Code Exchange (PKCE) **[[RFC7636]](#nref-RFC7636)** code challenge methods supported by this authorization server. Given the CDR Register does not support PKCE, this field can be safely ignored|
|scopes_supported|[string]|mandatory|JSON array containing a list of the OAuth 2.0 **[[RFC6749]](#nref-RFC6749)** scope values that the CDR Register supports|
|response_types_supported|[string]|mandatory|JSON array containing a list of the OAuth 2.0 response_type values that the CDR Registrer supports|
|grant_types_supported|[string]|mandatory|JSON array containing a list of the OAuth 2.0 Grant Type values that the CDR Register supports|
|token_endpoint_auth_methods_supported|[string]|mandatory|JSON array containing a list of Client Authentication methods supported by this Token Endpoint|
|tls_client_certificate_bound_access_tokens|boolean|mandatory|Boolean value indicating server support for mutual TLS client certificate bound access tokens|
|token_endpoint_auth_signing_alg_values_supported|[string]|mandatory|JSON array containing a list of the JWS signing algorithms (alg values) supported by the token endpoint for the signature on the JWT **[[JWT]](#nref-JWT)** used to authenticate the client at the token endpoint for the \"private_key_jwt\" authentication method|

<h3 class="schema-toc" id="tocSresponsejwks">ResponseJWKS</h3>

<a id="schemacdr-participant-discovery-apiresponsejwks"></a>

```json
{
  "keys": [
    {
      "alg": "string",
      "e": "string",
      "key_ops": [
        "string"
      ],
      "kid": "string",
      "kty": "string",
      "n": "string"
    }
  ]
}

```

*Response containing the JSON Web Key Set*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|keys|[[JWK](#schemacdr-participant-discovery-apijwk)]|mandatory|The value of the "keys" parameter is an array of JWK values|

<h3 class="schema-toc" id="tocSjwk">JWK</h3>

<a id="schemacdr-participant-discovery-apijwk"></a>

```json
{
  "alg": "string",
  "e": "string",
  "key_ops": [
    "string"
  ],
  "kid": "string",
  "kty": "string",
  "n": "string"
}

```

*Object representing a JSON Web Key*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|alg|string|mandatory|The "alg" (algorithm) parameter identifies the algorithm intended for use with the key|
|e|string|mandatory|The "e" RSA public exponent parameter|
|key_ops|[string]|mandatory|The "key_ops" (key operations) parameter identifies the operation(s) for which the key is intended to be used|
|kid|string|mandatory|The "kid" (key ID) parameter is partially used to match a specific key. Note the "kid" parameter is not guaranteed unique and additional parameters should be used to progressively to identify a key within a set|
|kty|string|mandatory|The "kty" (key type) parameter identifies the cryptographic algorithm family used with the key|
|n|string|mandatory|The "n" RSA public modulus parameter|

<h3 class="schema-toc" id="tocSresponseregisterdataholderbrandlist">ResponseRegisterDataHolderBrandList</h3>

<a id="schemacdr-participant-discovery-apiresponseregisterdataholderbrandlist"></a>

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
        "registrationDate": "2019-08-24",
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
      "lastUpdated": "2019-08-24T14:15:22Z"
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

*Response containing a list of CDR Register Data Holder Brand objects*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|data|[[RegisterDataHolderBrand](#schemacdr-participant-discovery-apiregisterdataholderbrand)]|mandatory|Response data for the query|
|links|[LinksPaginated](#schemacdr-participant-discovery-apilinkspaginated)|mandatory|none|
|meta|[MetaPaginated](#schemacdr-participant-discovery-apimetapaginated)|mandatory|none|

<h3 class="schema-toc" id="tocSregisterdataholderbrand">RegisterDataHolderBrand</h3>

<a id="schemacdr-participant-discovery-apiregisterdataholderbrand"></a>

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
    "registrationDate": "2019-08-24",
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
  "lastUpdated": "2019-08-24T14:15:22Z"
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|dataHolderBrandId|string|mandatory|Unique id of the Data Holder Brand issued by the CDR Register|
|brandName|string|mandatory|The name of Data Holder Brand|
|industries|[string]|mandatory|The industries the Data Holder Brand belongs to. Please note that the CDR Register entity model is constrained to one industry per brand which is planned to be relaxed in the future.|
|logoUri|[URIString](#common-field-types)|mandatory|Brand logo URI|
|legalEntity|[LegalEntityDetail](#schemacdr-participant-discovery-apilegalentitydetail)|mandatory|The data that is common to all organisations, regardless of the type (e.g. company, trust, partnership, government)|
|status|string|mandatory|none|
|endpointDetail|[RegisterDataHolderBrandServiceEndpoint](#schemacdr-participant-discovery-apiregisterdataholderbrandserviceendpoint)|mandatory|Endpoints related to Data Holder Brand services|
|authDetails|[[RegisterDataHolderAuth](#schemacdr-participant-discovery-apiregisterdataholderauth)]|mandatory|[Defines the mechanism used and associated endpoints for Data Holder to Data Recipient authentication]|
|lastUpdated|[DateTimeString](#common-field-types)|mandatory|The date/time that the Data Holder Brand data was last updated in the Register|

#### Enumerated Values

|Property|Value|
|---|---|
|industries|banking|
|industries|energy|
|industries|telco|
|status|ACTIVE|
|status|INACTIVE|
|status|REMOVED|

<h3 class="schema-toc" id="tocSdataholdersstatuslist">DataHoldersStatusList</h3>

<a id="schemacdr-participant-discovery-apidataholdersstatuslist"></a>

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

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|data|[[DataHolderStatus](#schemacdr-participant-discovery-apidataholderstatus)]|mandatory|Response data for the query|
|links|[Links](#schemacdr-participant-discovery-apilinks)|mandatory|none|
|meta|[Meta](#schemacdr-participant-discovery-apimeta)|mandatory|none|

<h3 class="schema-toc" id="tocSdataholderstatus">DataHolderStatus</h3>

<a id="schemacdr-participant-discovery-apidataholderstatus"></a>

```json
{
  "legalEntityId": "string",
  "status": "ACTIVE"
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|legalEntityId|string|mandatory|Unique id of the Data Holder Legal Entity issued by the CDR Register.|
|status|string|mandatory|Data Holder status in the CDR Register|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ACTIVE|
|status|REMOVED|

<h3 class="schema-toc" id="tocSsoftwareproductsstatuslist">SoftwareProductsStatusList</h3>

<a id="schemacdr-participant-discovery-apisoftwareproductsstatuslist"></a>

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

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|data|[[SoftwareProductStatus](#schemacdr-participant-discovery-apisoftwareproductstatus)]|mandatory|Response data for the query|
|links|[Links](#schemacdr-participant-discovery-apilinks)|mandatory|none|
|meta|[Meta](#schemacdr-participant-discovery-apimeta)|mandatory|none|

<h3 class="schema-toc" id="tocSsoftwareproductstatus">SoftwareProductStatus</h3>

<a id="schemacdr-participant-discovery-apisoftwareproductstatus"></a>

```json
{
  "softwareProductId": "string",
  "status": "ACTIVE"
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|softwareProductId|string|mandatory|Unique id of the software product issued by the CDR Register|
|status|string|mandatory|Software product status in the CDR Register|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ACTIVE|
|status|INACTIVE|
|status|REMOVED|

<h3 class="schema-toc" id="tocSdatarecipientsstatuslist">DataRecipientsStatusList</h3>

<a id="schemacdr-participant-discovery-apidatarecipientsstatuslist"></a>

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

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|data|[[DataRecipientStatus](#schemacdr-participant-discovery-apidatarecipientstatus)]|mandatory|Response data for the query|
|links|[Links](#schemacdr-participant-discovery-apilinks)|mandatory|none|
|meta|[Meta](#schemacdr-participant-discovery-apimeta)|mandatory|none|

<h3 class="schema-toc" id="tocSdatarecipientstatus">DataRecipientStatus</h3>

<a id="schemacdr-participant-discovery-apidatarecipientstatus"></a>

```json
{
  "legalEntityId": "string",
  "status": "ACTIVE"
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|legalEntityId|string|mandatory|Unique id of the Data Recipient Legal Entity issued by the CDR Register|
|status|string|mandatory|Data Recipient status in the CDR Register|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ACTIVE|
|status|SUSPENDED|
|status|REVOKED|
|status|SURRENDERED|

<h3 class="schema-toc" id="tocSresponseregisterdatarecipientlist">ResponseRegisterDataRecipientList</h3>

<a id="schemacdr-participant-discovery-apiresponseregisterdatarecipientlist"></a>

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
      "lastUpdated": "2019-08-24T14:15:22Z"
    }
  ],
  "links": {
    "self": "string"
  },
  "meta": {}
}

```

*Response containing a list of Data Recipients in the CDR Register*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|data|[[RegisterDataRecipient](#schemacdr-participant-discovery-apiregisterdatarecipient)]|mandatory|Response data for the query|
|links|[Links](#schemacdr-participant-discovery-apilinks)|mandatory|none|
|meta|[Meta](#schemacdr-participant-discovery-apimeta)|mandatory|none|

<h3 class="schema-toc" id="tocSregisterdatarecipient">RegisterDataRecipient</h3>

<a id="schemacdr-participant-discovery-apiregisterdatarecipient"></a>

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
  "lastUpdated": "2019-08-24T14:15:22Z"
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|legalEntityId|string|mandatory|Unique id of the Data Recipient Legal Entity issued by the CDR Register.|
|legalEntityName|string|mandatory|Legal name of the Data Recipient|
|accreditationNumber|string|mandatory|CDR Register issued human readable unique number given to Data Recipients upon accreditation|
|accreditationLevel|string|mandatory|Accreditation level of the Data Recipient in the CDR Register|
|logoUri|[URIString](#common-field-types)|mandatory|Legal Entity logo URI|
|dataRecipientBrands|[[DataRecipientBrandMetaData](#schemacdr-participant-discovery-apidatarecipientbrandmetadata)]|optional|[Metadata related to Data Recipient Brand]|
|status|string|mandatory|Data Recipient status in the CDR Register|
|lastUpdated|[DateTimeString](#common-field-types)|mandatory|The date/time that the Legal Entity was last updated in the CDR Register|

#### Enumerated Values

|Property|Value|
|---|---|
|accreditationLevel|UNRESTRICTED|
|accreditationLevel|SPONSORED|
|status|ACTIVE|
|status|SUSPENDED|
|status|REVOKED|
|status|SURRENDERED|

<h3 class="schema-toc" id="tocSdatarecipientbrandmetadata">DataRecipientBrandMetaData</h3>

<a id="schemacdr-participant-discovery-apidatarecipientbrandmetadata"></a>

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

*Metadata related to Data Recipient Brand*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|dataRecipientBrandId|string|mandatory|Unique id of the Data Recipient brand issued by the CDR Register|
|brandName|string|mandatory|Data Recipient Brand name|
|logoUri|[URIString](#common-field-types)|mandatory|Data Recipient Brand logo URI|
|softwareProducts|[[SoftwareProductMetaData](#schemacdr-participant-discovery-apisoftwareproductmetadata)]|optional|[Data Recipient Brand Software Products]|
|status|string|mandatory|Data Recipient Brand status in the CDR Register|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ACTIVE|
|status|INACTIVE|
|status|REMOVED|

<h3 class="schema-toc" id="tocSsoftwareproductmetadata">SoftwareProductMetaData</h3>

<a id="schemacdr-participant-discovery-apisoftwareproductmetadata"></a>

```json
{
  "softwareProductId": "string",
  "softwareProductName": "string",
  "softwareProductDescription": "string",
  "logoUri": "string",
  "status": "ACTIVE"
}

```

*Data Recipient Brand Software Products*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|softwareProductId|string|mandatory|Unique id of the Data Recipient software product issued by the CDR Register|
|softwareProductName|string|mandatory|Name of the software product|
|softwareProductDescription|string|optional|Description of the software product|
|logoUri|[URIString](#common-field-types)|mandatory|Software product logo URI|
|status|string|mandatory|Software Product status in the CDR Register|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ACTIVE|
|status|INACTIVE|
|status|REMOVED|

<h3 class="schema-toc" id="tocSlegalentitydetail">LegalEntityDetail</h3>

<a id="schemacdr-participant-discovery-apilegalentitydetail"></a>

```json
{
  "legalEntityId": "string",
  "legalEntityName": "string",
  "logoUri": "string",
  "registrationNumber": "string",
  "registrationDate": "2019-08-24",
  "registeredCountry": "string",
  "abn": "string",
  "acn": "string",
  "arbn": "string",
  "anzsicDivision": "string",
  "organisationType": "SOLE_TRADER",
  "status": "ACTIVE"
}

```

*The data that is common to all organisations, regardless of the type (e.g. company, trust, partnership, government)*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|legalEntityId|string|mandatory|Unique id of the organisation issued by the CDR Register|
|legalEntityName|string|mandatory|Unique legal name of the organisation|
|logoUri|[URIString](#common-field-types)|mandatory|Legal Entity logo URI|
|registrationNumber|string|optional|Unique registration number (if the company is registered outside Australia)|
|registrationDate|[DateString](#common-field-types)|optional|Date of registration (if the company is registered outside Australia)|
|registeredCountry|string|optional|Country of registeration (if the company is registered outside Australia)|
|abn|string|optional|Australian Business Number for the organisation|
|acn|string|optional|Australian Company Number for the organisation|
|arbn|string|optional|Australian Registered Body Number.  ARBNs are issued to registrable Australian bodies and foreign companies|
|anzsicDivision|string|optional|ANZSIC division of the organisation. **[[ANZSIC-2006]](#iref-ANZSIC-2006)**|
|organisationType|string|optional|Legal organisation type|
|status|string|mandatory|none|

#### Enumerated Values

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

<h3 class="schema-toc" id="tocSregisterdataholderbrandserviceendpoint">RegisterDataHolderBrandServiceEndpoint</h3>

<a id="schemacdr-participant-discovery-apiregisterdataholderbrandserviceendpoint"></a>

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

*Endpoints related to Data Holder Brand services*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|version|string|mandatory|The major version of the high level standards. This is not the version of the endpoint or the payload being requested but the version of the overall standards being applied. This version number will be "v" followed by the major version of the standards as a positive integer (e.g. v1, v12 or v76)|
|publicBaseUri|[URIString](#common-field-types)|mandatory|Base URI for the Data Holder's Consumer Data Standard public endpoints|
|resourceBaseUri|[URIString](#common-field-types)|mandatory|Base URI for the Data Holder's Consumer Data Standard resource endpoints|
|infosecBaseUri|[URIString](#common-field-types)|mandatory|Base URI for the Data Holder's Consumer Data Standard information security endpoints|
|extensionBaseUri|[URIString](#common-field-types)|optional|Base URI for the Data Holder extension endpoints to the Consumer Data Standard (optional)|
|websiteUri|[URIString](#common-field-types)|mandatory|Publicly available website or web resource URI|

<h3 class="schema-toc" id="tocSregisterdataholderauth">RegisterDataHolderAuth</h3>

<a id="schemacdr-participant-discovery-apiregisterdataholderauth"></a>

```json
{
  "registerUType": "SIGNED-JWT",
  "jwksEndpoint": "string"
}

```

*Defines the mechanism used and associated endpoints for Data Holder to Data Recipient authentication*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|registerUType|string|mandatory|The type of authentication and authorisation mechanism in use|
|jwksEndpoint|[URIString](#common-field-types)|mandatory|JWKS endpoint used for authentication by the Data Holder with the Data Recipient|

#### Enumerated Values

|Property|Value|
|---|---|
|registerUType|SIGNED-JWT|

<h3 class="schema-toc" id="tocSlinkspaginated">LinksPaginated</h3>

<a id="schemacdr-participant-discovery-apilinkspaginated"></a>

```json
{
  "first": "string",
  "last": "string",
  "next": "string",
  "prev": "string",
  "self": "string"
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|first|string|optional|URI to the first page of this set. Mandatory if this response is not the first page|
|last|string|optional|URI to the last page of this set. Mandatory if this response is not the last page|
|next|string|optional|URI to the next page of this set. Mandatory if this response is not the last page|
|prev|string|optional|URI to the previous page of this set. Mandatory if this response is not the first page|
|self|string|mandatory|Fully qualified link to this API call|

<h3 class="schema-toc" id="tocSmetapaginated">MetaPaginated</h3>

<a id="schemacdr-participant-discovery-apimetapaginated"></a>

```json
{
  "totalPages": 0,
  "totalRecords": 0
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|totalPages|integer(int32)|mandatory|The total number of pages in the full set|
|totalRecords|integer(int32)|mandatory|The total number of records in the full set|

<h3 class="schema-toc" id="tocSlinks">Links</h3>

<a id="schemacdr-participant-discovery-apilinks"></a>

```json
{
  "self": "string"
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|self|string|mandatory|Fully qualified link to this API call|

<h3 class="schema-toc" id="tocSmeta">Meta</h3>

<a id="schemacdr-participant-discovery-apimeta"></a>

```json
{}

```

### Properties

*None*

<h3 class="schema-toc" id="tocSmetaerror">MetaError</h3>

<a id="schemacdr-participant-discovery-apimetaerror"></a>

```json
{
  "urn": "string"
}

```

*Additional data for customised error codes*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|urn|string|conditional|The CDR error code URN which the application-specific error code extends. Mandatory if the error `code` is an application-specific error rather than a standardised error code.|

<h3 class="schema-toc" id="tocSresponseerrorlistv2">ResponseErrorListV2</h3>

<a id="schemacdr-participant-discovery-apiresponseerrorlistv2"></a>

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

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|errors|[[ResponseErrorListV2_errors](#schemacdr-participant-discovery-apiresponseerrorlistv2_errors)]|mandatory|none|

<h3 class="schema-toc" id="tocSresponseerrorlistv2_errors">ResponseErrorListV2_errors</h3>

<a id="schemacdr-participant-discovery-apiresponseerrorlistv2_errors"></a>

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

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|code|string|mandatory|The code of the error encountered. Where the error is specific to the respondent, an application-specific error code, expressed as a string value. If the error is application-specific, the URN code that the specific error extends must be provided in the meta object. Otherwise, the value is the error code URN.|
|title|string|mandatory|A short, human-readable summary of the problem that MUST NOT change from occurrence to occurrence of the problem represented by the error code.|
|detail|string|mandatory|A human-readable explanation specific to this occurrence of the problem.|
|meta|[MetaError](#schemacdr-participant-discovery-apimetaerror)|optional|Additional data for customised error codes|

