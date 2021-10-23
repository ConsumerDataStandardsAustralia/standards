


## Get OpenId Provider Config

<a id="opIdGetOpenIdProviderConfig"></a>

> Code samples

```http
GET https://register.cdr.gov.au/cdr-register/v1/.well-known/openid-configuration HTTP/1.1
Host: register.cdr.gov.au
Accept: application/json

```

```javascript
var headers = {
  'Accept':'application/json'

};

$.ajax({
  url: 'https://register.cdr.gov.au/cdr-register/v1/.well-known/openid-configuration',
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
|Version|**undefined**

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
  "request_object_signing_alg_values_supported": [
    "string"
  ]
}
```

<h3 id="get-openid-provider-config-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The OpenID Provider Configuration Metadata values|[ResponseOpenIDProviderConfigMetadata](#schemaresponseopenidproviderconfigmetadata)|

  
    <aside class="success">
This operation does not require authentication
</aside>

  

## Get JWKS

<a id="opIdGet JWKS"></a>

> Code samples

```http
GET https://register.cdr.gov.au/cdr-register/v1/jwks HTTP/1.1
Host: register.cdr.gov.au
Accept: application/json

```

```javascript
var headers = {
  'Accept':'application/json'

};

$.ajax({
  url: 'https://register.cdr.gov.au/cdr-register/v1/jwks',
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
|Version|**undefined**

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
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A JSON object that represents a set of JWKs|[ResponseJWKS](#schemaresponsejwks)|

  
    <aside class="success">
This operation does not require authentication
</aside>

  

## Get Data Holder Brands

<a id="opIdGetDataHolderBrands"></a>

> Code samples

```http
GET https://register.cdr.gov.au/cdr-register/v1/{industry}/data-holders/brands HTTP/1.1
Host: register.cdr.gov.au
Accept: application/json
Authorization Endpoint (Register): string
x-v: string

```

```javascript
var headers = {
  'Accept':'application/json',
  'Authorization Endpoint (Register)':'string',
  'x-v':'string'

};

$.ajax({
  url: 'https://register.cdr.gov.au/cdr-register/v1/{industry}/data-holders/brands',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`GET /{industry}/data-holders/brands`

Allows Data Recipients to discover data holder brands available in the CDR ecosystem.

###Endpoint Version
|   |  |
|---|--|
|Version|**1**

<h3 id="get-data-holder-brands-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|industry|path|string|mandatory|The industry the participant is retrieving data for (Banking, etc)|
|updated-since|query|string(date-time)|optional|query filter returns data holder brands updated since the specified date-time|
|page|query|integer(int32)|optional|the page number to return|
|page-size|query|integer(int32)|optional|the number of records to return per page|
|Authorization Endpoint (Register)|header|string|mandatory|An Authorisation Token as per [RFC6750](https://tools.ietf.org/html/rfc6750).|
|x-v|header|string|optional|The version of the API end point requested by the client. Must be set to a positive integer.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|industry|banking|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "dataHolderBrandId": "string",
      "brandName": "string",
      "industry": "banking",
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
        "industryCode": "string",
        "organisationType": "SOLE_TRADER"
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
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[ResponseRegisterDataHolderBrandList](#schemaresponseregisterdataholderbrandlist)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request</br>Invalid industry path parameter|[ResponseErrorList](#schemaresponseerrorlist)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Invalid Bearer Token|None|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|Invalid x-v header</br>Invalid Accept header|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-v|string||The version of the API end point that the CDR Register has responded with.|

  
    
      <aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
<a href="#authorisation-scopes">cdr-register:bank:read</a>
</aside>

    
  

## Get Data Recipient Software Statement Assertion (SSA)

<a id="opIdGetSoftwareStatementAssertion"></a>

> Code samples

```http
GET https://register.cdr.gov.au/cdr-register/v1/{industry}/data-recipients/brands/{dataRecipientBrandId}/software-products/{softwareProductId}/ssa HTTP/1.1
Host: register.cdr.gov.au
Accept: application/json
Authorization Endpoint (Register): string
x-v: string

```

```javascript
var headers = {
  'Accept':'application/json',
  'Authorization Endpoint (Register)':'string',
  'x-v':'string'

};

$.ajax({
  url: 'https://register.cdr.gov.au/cdr-register/v1/{industry}/data-recipients/brands/{dataRecipientBrandId}/software-products/{softwareProductId}/ssa',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`GET /{industry}/data-recipients/brands/{dataRecipientBrandId}/software-products/{softwareProductId}/ssa`

Get a Software Statement Assertion (SSA) for a Data Recipient software product on the CDR Register to be used for Dynamic Client Registration with a Data Holder Brand.

###Endpoint Version
|   |  |
|---|--|
|Version|**2**

<h3 id="get-data-recipient-software-statement-assertion-(ssa)-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|industry|path|string|mandatory|The industry the participant is retrieving data for (Banking, etc)|
|dataRecipientBrandId|path|string|mandatory|Unique id for the Accredited Data Recipient Brand that the Software Product is associated with in the CDR Register|
|softwareProductId|path|string|mandatory|Unique id for the Accredited Data Recipient Software Product in the CDR Register|
|Authorization Endpoint (Register)|header|string|mandatory|An Authorisation Token as per [RFC6750](https://tools.ietf.org/html/rfc6750).|
|x-v|header|string|optional|The version of the API end point requested by the client. Must be set to a positive integer.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|industry|banking|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="get-data-recipient-software-statement-assertion-(ssa)-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|string|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid industry path parameter</br>Invalid SoftwareProductId|[ResponseErrorList](#schemaresponseerrorlist)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Invalid Bearer Token|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Invalid BrandId|[ResponseErrorList](#schemaresponseerrorlist)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|Invalid x-v header</br>Invalid Accept header|None|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|SSA fields invalid or incomplete|[ResponseErrorList](#schemaresponseerrorlist)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-v|string||The version of the API end point that the CDR Register has responded with.|

  
    
      <aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
<a href="#authorisation-scopes">cdr-register:bank:read</a>
</aside>

    
  

## Get Data Recipient Software Products Statuses

<a id="opIdGetSoftwareProductsStatus"></a>

> Code samples

```http
GET https://register.cdr.gov.au/cdr-register/v1/{industry}/data-recipients/brands/software-products/status HTTP/1.1
Host: register.cdr.gov.au
Accept: application/json
x-v: string

```

```javascript
var headers = {
  'Accept':'application/json',
  'x-v':'string'

};

$.ajax({
  url: 'https://register.cdr.gov.au/cdr-register/v1/{industry}/data-recipients/brands/software-products/status',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`GET /{industry}/data-recipients/brands/software-products/status`

Endpoint used by participants to discover the statuses for software products from the CDR Register.

###Endpoint Version
|   |  |
|---|--|
|Version|**1**

<h3 id="get-data-recipient-software-products-statuses-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|industry|path|string|mandatory|The industry the participant is retrieving data for (Banking, etc)|
|x-v|header|string|optional|The version of the API end point requested by the client. Must be set to a positive integer.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|industry|banking|

> Example responses

> 200 Response

```json
{
  "softwareProducts": [
    {
      "softwareProductId": "string",
      "softwareProductStatus": "ACTIVE"
    }
  ]
}
```

<h3 id="get-data-recipient-software-products-statuses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[SoftwareProductsStatusList](#schemasoftwareproductsstatuslist)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request</br>Invalid industry path parameter|[ResponseErrorList](#schemaresponseerrorlist)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|Invalid x-v header</br>Invalid Accept header|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-v|string||The version of the API end point that the CDR Register has responded with.|

  
    <aside class="success">
This operation does not require authentication
</aside>

  

## Get Data Recipient Statuses

<a id="opIdGetDataRecipientsStatus"></a>

> Code samples

```http
GET https://register.cdr.gov.au/cdr-register/v1/{industry}/data-recipients/status HTTP/1.1
Host: register.cdr.gov.au
Accept: application/json
x-v: string

```

```javascript
var headers = {
  'Accept':'application/json',
  'x-v':'string'

};

$.ajax({
  url: 'https://register.cdr.gov.au/cdr-register/v1/{industry}/data-recipients/status',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`GET /{industry}/data-recipients/status`

Endpoint used by participants to discover the statuses for Data Recipients from the CDR Register.

###Endpoint Version
|   |  |
|---|--|
|Version|**1**

<h3 id="get-data-recipient-statuses-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|industry|path|string|mandatory|The industry the participant is retrieving data for (Banking, etc)|
|x-v|header|string|optional|The version of the API end point requested by the client. Must be set to a positive integer.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|industry|banking|

> Example responses

> 200 Response

```json
{
  "dataRecipients": [
    {
      "dataRecipientId": "string",
      "dataRecipientStatus": "ACTIVE"
    }
  ]
}
```

<h3 id="get-data-recipient-statuses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[DataRecipientsStatusList](#schemadatarecipientsstatuslist)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request</br>Invalid industry path parameter|[ResponseErrorList](#schemaresponseerrorlist)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|Invalid x-v header</br>Invalid Accept header|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-v|string||The version of the API end point that the CDR Register has responded with.|

  
    <aside class="success">
This operation does not require authentication
</aside>

  

## Get Data Recipients

<a id="opIdGetDataRecipients"></a>

> Code samples

```http
GET https://register.cdr.gov.au/cdr-register/v1/{industry}/data-recipients HTTP/1.1
Host: register.cdr.gov.au
Accept: application/json
x-v: string

```

```javascript
var headers = {
  'Accept':'application/json',
  'x-v':'string'

};

$.ajax({
  url: 'https://register.cdr.gov.au/cdr-register/v1/{industry}/data-recipients',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`GET /{industry}/data-recipients`

Endpoint used by participants to discover data recipients and associated brands and software products, available in the CDR ecosystem.

###Endpoint Version
|   |  |
|---|--|
|Version|**2**

<h3 id="get-data-recipients-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|industry|path|string|mandatory|The industry the participant is retrieving data for (Banking, etc)|
|x-v|header|string|optional|The version of the API end point requested by the client. Must be set to a positive integer.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|industry|banking|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "legalEntityId": "string",
      "legalEntityName": "string",
      "accreditationNumber": "string",
      "industry": "banking",
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
  ]
}
```

<h3 id="get-data-recipients-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[ResponseRegisterDataRecipientList](#schemaresponseregisterdatarecipientlist)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request</br>Invalid industry path parameter|[ResponseErrorList](#schemaresponseerrorlist)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|Invalid x-v header</br>Invalid Accept header|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-v|string||The version of the API end point that the CDR Register has responded with.|

  
    <aside class="success">
This operation does not require authentication
</aside>

  

<h2 class="schema-heading" id="consumer-data-right-cdr-register-participant-discovery-apis-schemas">Schemas</h2>
<a class="schema-link" id="consumer-data-right-cdr-register-participant-discovery-apis-schemas"></a>

<h2 class="schema-toc" id="tocSresponseopenidproviderconfigmetadata">ResponseOpenIDProviderConfigMetadata</h2>

<a id="schemaresponseopenidproviderconfigmetadata"></a>

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
  "request_object_signing_alg_values_supported": [
    "string"
  ]
}

```

*Response containing the Open ID Provider Configuration Metadata*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|issuer|string|mandatory|none|URL using the https scheme with no query or fragment component that the CDR Register asserts as its Issuer Identifier|
|jwks_uri|string|mandatory|none|URL of the CDR Register's JSON Web Key Set [JWK] document. This contains the signing key(s) used to validate access tokens issued from the CDR Register. Note that this differs from the JWKS endpoint used to validate SSAs and CDR Register client authentication|
|token_endpoint|string|mandatory|none|URL of the CDR Register's OAuth 2.0 Token Endpoint|
|claims_supported|[string]|mandatory|none|JSON array containing a list of the Claim Names of the Claims that the CDR Register supplies values for|
|id_token_signing_alg_values_supported|[string]|mandatory|none|JSON array containing a list of the JWS signing algorithms (alg values) supported by the CDR Register for the ID Token to encode the Claims in a JWT. Given the CDR Register does not issue ID tokens, this field can be safely ignored|
|subject_types_supported|[string]|mandatory|none|JSON array containing a list of the Subject Identifier types that the CDR Register supports. Given the CDR Register does not issue ID tokens, this field can be safely ignored|
|code_challenge_methods_supported|[string]|mandatory|none|JSON array containing a list of Proof Key for Code Exchange (PKCE) [RFC7636] code challenge methods supported by this authorization server. Given the CDR Register does not support PKCE, this field can be safely ignored|
|scopes_supported|[string]|mandatory|none|JSON array containing a list of the OAuth 2.0 [RFC6749] scope values that the CDR Register supports|
|response_types_supported|[string]|mandatory|none|JSON array containing a list of the OAuth 2.0 response_type values that the CDR Registrer supports|
|grant_types_supported|[string]|mandatory|none|JSON array containing a list of the OAuth 2.0 Grant Type values that the CDR Register supports|
|token_endpoint_auth_methods_supported|[string]|mandatory|none|JSON array containing a list of Client Authentication methods supported by this Token Endpoint|
|tls_client_certificate_bound_access_tokens|boolean|mandatory|none|Boolean value indicating server support for mutual TLS client certificate bound access tokens|
|request_object_signing_alg_values_supported|[string]|mandatory|none|JSON array containing a list of the JWS signing algorithms (alg values) supported by the CDR Register for Request Objects.|

<h2 class="schema-toc" id="tocSresponsejwks">ResponseJWKS</h2>

<a id="schemaresponsejwks"></a>

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

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|keys|[[JWK](#schemajwk)]|mandatory|none|The value of the "keys" parameter is an array of JWK values|

<h2 class="schema-toc" id="tocSjwk">JWK</h2>

<a id="schemajwk"></a>

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

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alg|string|mandatory|none|The "alg" (algorithm) parameter identifies the algorithm intended for use with the key|
|e|string|mandatory|none|The "e" RSA public exponent parameter|
|key_ops|[string]|mandatory|none|The "key_ops" (key operations) parameter identifies the operation(s) for which the key is intended to be used|
|kid|string|mandatory|none|The "kid" (key ID) parameter is partially used to match a specific key. Note the "kid" parameter is not guaranteed unique and additional parameters should be used to progressively to identify a key within a set|
|kty|string|mandatory|none|The "kty" (key type) parameter identifies the cryptographic algorithm family used with the key|
|n|string|mandatory|none|The "n" RSA public modulus parameter|

<h2 class="schema-toc" id="tocSresponseregisterdataholderbrandlist">ResponseRegisterDataHolderBrandList</h2>

<a id="schemaresponseregisterdataholderbrandlist"></a>

```json
{
  "data": [
    {
      "dataHolderBrandId": "string",
      "brandName": "string",
      "industry": "banking",
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
        "industryCode": "string",
        "organisationType": "SOLE_TRADER"
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

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[RegisterDataHolderBrand](#schemaregisterdataholderbrand)]|mandatory|none|Response data for the query|
|links|[LinksPaginated](#schemalinkspaginated)|mandatory|none|none|
|meta|[MetaPaginated](#schemametapaginated)|mandatory|none|none|

<h2 class="schema-toc" id="tocSregisterdataholderbrand">RegisterDataHolderBrand</h2>

<a id="schemaregisterdataholderbrand"></a>

```json
{
  "dataHolderBrandId": "string",
  "brandName": "string",
  "industry": "banking",
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
    "industryCode": "string",
    "organisationType": "SOLE_TRADER"
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

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataHolderBrandId|string|mandatory|none|Unique id of the Data Holder Brand issued by the CDR Register|
|brandName|string|mandatory|none|The name of Data Holder Brand|
|industry|string|mandatory|none|The industry the Data Holder brand belongs to (Banking, etc)|
|logoUri|[URIString](#common-field-types)|mandatory|none|Brand logo URI|
|legalEntity|[LegalEntityDetail](#schemalegalentitydetail)|mandatory|none|The data that is common to all organisations, regardless of the type (e.g. company, trust, partnership, government)|
|status|string|mandatory|none|none|
|endpointDetail|[RegisterDataHolderBrandServiceEndpoint](#schemaregisterdataholderbrandserviceendpoint)|mandatory|none|Endpoints related to Data Holder Brand services|
|authDetails|[[RegisterDataHolderAuth](#schemaregisterdataholderauth)]|mandatory|none|[Provides details of authorisation endpoints for Data Holders]|
|lastUpdated|[DateTimeString](#common-field-types)|mandatory|none|The date/time that the Data Holder Brand data was last updated in the Register|

#### Enumerated Values

|Property|Value|
|---|---|
|industry|banking|
|status|ACTIVE|
|status|INACTIVE|
|status|REMOVED|

<h2 class="schema-toc" id="tocSsoftwareproductsstatuslist">SoftwareProductsStatusList</h2>

<a id="schemasoftwareproductsstatuslist"></a>

```json
{
  "softwareProducts": [
    {
      "softwareProductId": "string",
      "softwareProductStatus": "ACTIVE"
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|softwareProducts|[[SoftwareProductStatus](#schemasoftwareproductstatus)]|mandatory|none|none|

<h2 class="schema-toc" id="tocSsoftwareproductstatus">SoftwareProductStatus</h2>

<a id="schemasoftwareproductstatus"></a>

```json
{
  "softwareProductId": "string",
  "softwareProductStatus": "ACTIVE"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|softwareProductId|string|mandatory|none|Unique id of the software product issued by the CDR Register|
|softwareProductStatus|string|mandatory|none|Software product status in the CDR Register|

#### Enumerated Values

|Property|Value|
|---|---|
|softwareProductStatus|ACTIVE|
|softwareProductStatus|INACTIVE|
|softwareProductStatus|REMOVED|

<h2 class="schema-toc" id="tocSdatarecipientsstatuslist">DataRecipientsStatusList</h2>

<a id="schemadatarecipientsstatuslist"></a>

```json
{
  "dataRecipients": [
    {
      "dataRecipientId": "string",
      "dataRecipientStatus": "ACTIVE"
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataRecipients|[[DataRecipientStatus](#schemadatarecipientstatus)]|mandatory|none|none|

<h2 class="schema-toc" id="tocSdatarecipientstatus">DataRecipientStatus</h2>

<a id="schemadatarecipientstatus"></a>

```json
{
  "dataRecipientId": "string",
  "dataRecipientStatus": "ACTIVE"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataRecipientId|string|mandatory|none|Unique id of the Data Recipient issued by the CDR Register|
|dataRecipientStatus|string|mandatory|none|Data Recipient status in the CDR Register|

#### Enumerated Values

|Property|Value|
|---|---|
|dataRecipientStatus|ACTIVE|
|dataRecipientStatus|SUSPENDED|
|dataRecipientStatus|REVOKED|
|dataRecipientStatus|SURRENDERED|

<h2 class="schema-toc" id="tocSresponseregisterdatarecipientlist">ResponseRegisterDataRecipientList</h2>

<a id="schemaresponseregisterdatarecipientlist"></a>

```json
{
  "data": [
    {
      "legalEntityId": "string",
      "legalEntityName": "string",
      "accreditationNumber": "string",
      "industry": "banking",
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
  ]
}

```

*Response containing a list of Data Recipients in the CDR Register*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[RegisterDataRecipient](#schemaregisterdatarecipient)]|mandatory|none|Response data for the query|

<h2 class="schema-toc" id="tocSregisterdatarecipient">RegisterDataRecipient</h2>

<a id="schemaregisterdatarecipient"></a>

```json
{
  "legalEntityId": "string",
  "legalEntityName": "string",
  "accreditationNumber": "string",
  "industry": "banking",
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

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|legalEntityId|string|mandatory|none|Unique id of the Data Recipient Legal Entity issued by the CDR Register|
|legalEntityName|string|mandatory|none|Legal name of the Data Recipient|
|accreditationNumber|string|mandatory|none|CDR Register issued human readable unique number given to Data Recipients upon accreditation|
|industry|string|mandatory|none|none|
|logoUri|[URIString](#common-field-types)|mandatory|none|Legal Entity logo URI|
|dataRecipientBrands|[[DataRecipientBrandMetaData](#schemadatarecipientbrandmetadata)]|optional|none|[Metadata related to Data Recipient Brand]|
|status|string|mandatory|none|none|
|lastUpdated|[DateTimeString](#common-field-types)|mandatory|none|The date/time that the Legal Entity was last updated in the CDR Register|

#### Enumerated Values

|Property|Value|
|---|---|
|industry|banking|
|status|ACTIVE|
|status|SUSPENDED|
|status|REVOKED|
|status|SURRENDERED|

<h2 class="schema-toc" id="tocSdatarecipientbrandmetadata">DataRecipientBrandMetaData</h2>

<a id="schemadatarecipientbrandmetadata"></a>

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

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataRecipientBrandId|string|mandatory|none|Unique id of the Data Recipient brand issued by the CDR Register|
|brandName|string|mandatory|none|Data Recipient Brand name|
|logoUri|[URIString](#common-field-types)|mandatory|none|Data Recipient Brand logo URI|
|softwareProducts|[[SoftwareProductMetaData](#schemasoftwareproductmetadata)]|optional|none|[Data Recipient Brand Software Products]|
|status|string|mandatory|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ACTIVE|
|status|INACTIVE|
|status|REMOVED|

<h2 class="schema-toc" id="tocSsoftwareproductmetadata">SoftwareProductMetaData</h2>

<a id="schemasoftwareproductmetadata"></a>

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

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|softwareProductId|string|mandatory|none|Unique id of the Data Recipient software product issued by the CDR Register|
|softwareProductName|string|mandatory|none|Name of the software product|
|softwareProductDescription|string|optional|none|Description of the software product|
|logoUri|[URIString](#common-field-types)|mandatory|none|Software product logo URI|
|status|string|mandatory|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ACTIVE|
|status|INACTIVE|
|status|REMOVED|

<h2 class="schema-toc" id="tocSlegalentitydetail">LegalEntityDetail</h2>

<a id="schemalegalentitydetail"></a>

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
  "industryCode": "string",
  "organisationType": "SOLE_TRADER"
}

```

*The data that is common to all organisations, regardless of the type (e.g. company, trust, partnership, government)*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|legalEntityId|string|mandatory|none|Unique id of the organisation issued by the CDR Register|
|legalEntityName|string|mandatory|none|Unique legal name of the organisation|
|logoUri|[URIString](#common-field-types)|mandatory|none|Legal Entity logo URI|
|registrationNumber|string|optional|none|Unique registration number (if the company is registered outside Australia)|
|registrationDate|[DateString](#common-field-types)|optional|none|Date of registration (if the company is registered outside Australia)|
|registeredCountry|string|optional|none|Country of registeration (if the company is registered outside Australia)|
|abn|string|optional|none|Australian Business Number for the organisation|
|acn|string|optional|none|Australian Company Number for the organisation|
|arbn|string|optional|none|Australian Registered Body Number.  ARBNs are issued to registrable Australian bodies and foreign companies|
|industryCode|string|optional|none|Industry Code for the organisation. [ANZSIC (2006)](http://www.abs.gov.au/anzsic)|
|organisationType|string|optional|none|Legal organisation type|

#### Enumerated Values

|Property|Value|
|---|---|
|organisationType|SOLE_TRADER|
|organisationType|COMPANY|
|organisationType|PARTNERSHIP|
|organisationType|TRUST|
|organisationType|GOVERNMENT_ENTITY|
|organisationType|OTHER|

<h2 class="schema-toc" id="tocSregisterdataholderbrandserviceendpoint">RegisterDataHolderBrandServiceEndpoint</h2>

<a id="schemaregisterdataholderbrandserviceendpoint"></a>

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

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|version|string|mandatory|none|The major version of the high level standards. This is not the version of the endpoint or the payload being requested but the version of the overall standards being applied. This version number will be "v" followed by the major version of the standards as a positive integer (e.g. v1, v12 or v76)|
|publicBaseUri|[URIString](#common-field-types)|mandatory|none|Base URI for the Data Holder's Consumer Data Standard public endpoints|
|resourceBaseUri|[URIString](#common-field-types)|mandatory|none|Base URI for the Data Holder's Consumer Data Standard resource endpoints|
|infosecBaseUri|[URIString](#common-field-types)|mandatory|none|Base URI for the Data Holder's Consumer Data Standard information security endpoints|
|extensionBaseUri|[URIString](#common-field-types)|optional|none|Base URI for the Data Holder extension endpoints to the Consumer Data Standard (optional)|
|websiteUri|[URIString](#common-field-types)|mandatory|none|Publicly available website or web resource URI|

<h2 class="schema-toc" id="tocSregisterdataholderauth">RegisterDataHolderAuth</h2>

<a id="schemaregisterdataholderauth"></a>

```json
{
  "registerUType": "SIGNED-JWT",
  "jwksEndpoint": "string"
}

```

*Provides details of authorisation endpoints for Data Holders*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|registerUType|string|mandatory|none|The type of authentication and authorisation mechanism in use|
|jwksEndpoint|[URIString](#common-field-types)|mandatory|none|JWKS endpoint for private_key_jwt client authentication with Data Recipient|

#### Enumerated Values

|Property|Value|
|---|---|
|registerUType|SIGNED-JWT|

<h2 class="schema-toc" id="tocSlinkspaginated">LinksPaginated</h2>

<a id="schemalinkspaginated"></a>

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

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|first|string|optional|none|URI to the first page of this set. Mandatory if this response is not the first page|
|last|string|optional|none|URI to the last page of this set. Mandatory if this response is not the last page|
|next|string|optional|none|URI to the next page of this set. Mandatory if this response is not the last page|
|prev|string|optional|none|URI to the previous page of this set. Mandatory if this response is not the first page|
|self|string|mandatory|none|Fully qualified link to this API call|

<h2 class="schema-toc" id="tocSmetapaginated">MetaPaginated</h2>

<a id="schemametapaginated"></a>

```json
{
  "totalPages": 0,
  "totalRecords": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|totalPages|integer(int32)|mandatory|none|The total number of pages in the full set|
|totalRecords|integer(int32)|mandatory|none|The total number of records in the full set|

<h2 class="schema-toc" id="tocSresponseerrorlist">ResponseErrorList</h2>

<a id="schemaresponseerrorlist"></a>

```json
{
  "errors": [
    {
      "code": "string",
      "title": "string",
      "detail": "string",
      "meta": {}
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|mandatory|none|none|

<h2 class="schema-toc" id="tocSerror">Error</h2>

<a id="schemaerror"></a>

```json
{
  "code": "string",
  "title": "string",
  "detail": "string",
  "meta": {}
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|mandatory|none|Error code|
|title|string|mandatory|none|Error title|
|detail|string|mandatory|none|Error detail|
|meta|object|optional|none|Optional additional data for specific error types|

