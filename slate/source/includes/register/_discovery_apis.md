<a href="consumer-data-right-cdr-register-apis"></a>
# Register APIs

The following APIs are published by the Registrar. Data Recipients and Data Holders collect metadata from the Registrar via these APIs.

|API|Caller|Description|mTLS|TLS|Bearer Token|
|---|---|---|---|---|---|
| Get Register OpenId Provider Config | Data Recipient Brand or Software Product | Discovery of CDR Register OpenID Configuration | | <i class="icon-check"></i> | |
| Get Register JWKS | Data Holder | Validate SSA and CDR Register authentication JWT signatures | | <i class="icon-check"></i> | |
| Get Data Holder Brands | Data Recipient Brand or Software Product | Discovery of Data Holder Brands and their associated endpoints | <i class="icon-check"></i> | | <i class="icon-check"></i> |
| Get Data Recipient Software Statement Assertion | Data Recipient Brand or Software Product | Get SSA for a Software Product to be used in [Dynamic Client Registration](#dynamic-client-registration) | <i class="icon-check"></i> | | <i class="icon-check"></i> |
| Get Data Recipient Software Products Status | Data Holder Brand | Software Product Statuses to check validity of ADR requests | | <i class="icon-check"></i> | |
| Get Data Recipient Statuses | Data Holder Brand | Data Recipient Statuses to check validity of ADR requests | | <i class="icon-check"></i> | |
| Get Data Recipients | Data Holder Brand | Data Recipient, brand and product details to render Data Holder Consumer Dashboard | | <i class="icon-check"></i> | |


### Base URLs

|||
|---|---|
|**Production TLS**|https://api.cdr.gov.au|
|**Production mTLS**|https://secure.api.cdr.gov.au|

## Get Register OpenId Provider Config

<a id="opIdGetOpenIdProviderConfig"></a>

> Code samples

```HTTP
GET https://<register-base-url>/idp/.well-known/openid-configuration HTTP/1.1
Host: <register-base-url>
Accept: application/json

```


`GET /.well-known/openid-configuration`

Endpoint used by participants to discover the CDR Register OpenID configuration and obtain information needed to interact with it, including its OAuth 2.0 endpoint locations.

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

<h3 id="getopenidproviderconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The OpenID Provider Configuration Metadata values|[ResponseOpenIDProviderConfigMetadata](#schemaresponseopenidproviderconfigmetadata)|

<aside class="success">
This operation does not require authentication
</aside>


## Get Register JWKS

<a id="opIdGetJWKS"></a>

> Code samples

```HTTP
GET https://<register-base-url>/cdr-register/v1/jwks HTTP/1.1
Host: <register-base-url>
Accept: application/json

```

`GET /jwks`

JWKS endpoint containing the public keys used by the CDR Register to validate the signature of issued SSAs and authenticate outbound calls to participants in the CDR.

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

<h3 id="getjwks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A JSON object that represents a set of JWKs|[ResponseJWKS](#schemaresponsejwks)|

<aside class="success">
This operation does not require authentication
</aside>


## Get Data Holder Brands

<a id="opIdGetDataHolderBrands"></a>

> Code samples

```HTTP
GET https://<register-base-url>/cdr-register/v1/{industry}/data-holders/brands HTTP/1.1
Host: <register-base-url>
Accept: application/json
Authorization: Bearer <access-token>
x-v: string

```

`GET /{industry}/data-holders/brands`

Allows Data Recipients to discover data holder brands available in the CDR ecosystem

<h3>Endpoint Version</h3>
|||
|---|---|
|Version|**1**|

<h3 id="getdataholderbrands-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|industry|path|string|true|The industry the participant is retrieving data for (Banking, etc)|
|updated-since|query|string(date-time)|false|query filter returns data holder brands updated since the specified date-time|
|page|query|integer(int32)|false|the page number to return|
|page-size|query|integer(int32)|false|the number of records to return per page|
|Authorization|header|string|true|An Authorisation Token as per [RFC6750](https://tools.ietf.org/html/rfc6750)|
|x-v|header|string|false|The [version](https://consumerdatastandardsaustralia.github.io/standards/#response-headers) of the API end point requested by the client. Must be set to a positive integer.|

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
        "registrationDate": "2019-10-24",
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
      "lastUpdated": "2019-10-24T03:51:44Z"
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

<h3 id="getdataholderbrands-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[ResponseRegisterDataHolderBrandList](#schemaresponseregisterdataholderbrandlist)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request</br>Invalid industry path parameter|[ResponseErrorList](#schemaresponseerrorlist)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Invalid Bearer Token|None|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|Invalid x-v header</br>Invalid Accept header|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-v|string||The [version](https://consumerdatastandardsaustralia.github.io/standards/#response-headers) of the API end point that the CDR Register has responded with.|


<aside class="notice">
To perform this operation, the Data Recipient or Data Holder must be authenticated and authorised with the following scope: [cdr-register:bank:read](#authorisation-scopes).
</aside>

## Get Data Recipient Software Statement Assertion (SSA)

<a id="opIdGetSoftwareStatementAssertion"></a>

> Code samples

```HTTP
GET https://<register-base-url>/cdr-register/v1/{industry}/data-recipients/brands/{dataRecipientBrandId}/software-products/{softwareProductId}/ssa HTTP/1.1
Host: <register-base-url>
Accept: application/json
Authorization: Bearer <access-token>
x-v: string

```

`GET /{industry}/data-recipients/brands/{dataRecipientBrandId}/software-products/{softwareProductId}/ssa`

<h3>Endpoint Version</h3>
|||
|---|---|
|Version|**2**|



Get a Software Statement Assertion (SSA) for a software product on the CDR Register to be used for Dynamic Client Registration with a Data Holder Brand

<h3 id="getsoftwarestatementassertion-(ssa)-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|industry|path|string|true|The industry the participant is retrieving data for (Banking, etc)|
|dataRecipientBrandId|path|string|true|Unique id for the Accredited Data Recipient Brand that the Software Product is associated with in the CDR Register. Refer to [Identifiers](https://cdr-register.github.io/register/#identifiers) for details|
|softwareProductId|path|string|true|Unique id for the Accredited Data Recipient Software Product in the CDR Register. Refer to [Identifiers](https://cdr-register.github.io/register/#identifiers) for details|
|Authorization|header|string|true|An Authorisation Token as per [RFC6750](https://tools.ietf.org/html/rfc6750)|
|x-v|header|string|false|The [version](https://consumerdatastandardsaustralia.github.io/standards/#response-headers) of the API end point requested by the client. Must be set to a positive integer.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|industry|banking|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="getsoftwarestatementassertion-(ssa)-responses">Responses</h3>

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
|200|x-v|string||The [version](https://consumerdatastandardsaustralia.github.io/standards/#response-headers) of the API end point that the CDR Register has responded with.|

<aside class="success">
This operation does not require authentication
</aside>


## Get Data Recipient Software Products Status

<a id="opIdGetSoftwareProductsStatus"></a>

> Code samples

```HTTP
GET https://<register-base-url>/cdr-register/v1/{industry}/data-recipients/brands/software-products/status HTTP/1.1
Host: <register-base-url>
Accept: application/json
x-v: string

```

`GET /{industry}/data-recipients/brands/software-products/status`

Endpoint used by participants to discover the statuses for software products from the CDR Register


<h3>Endpoint Version</h3>
|||
|---|---|
|Version|**1**|

<h3 id="getsoftwareproductsstatus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|industry|path|string|true|The industry the participant is retrieving data for (Banking, etc)|
|x-v|header|string|false|The [version](https://consumerdatastandardsaustralia.github.io/standards/#response-headers) of the API end point requested by the client. Must be set to a positive integer.|

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

<h3 id="getsoftwareproductsstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[SoftwareProductsStatusList](#schemasoftwareproductsstatuslist)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request</br>Invalid industry path parameter|[ResponseErrorList](#schemaresponseerrorlist)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|Invalid x-v header</br>Invalid Accept header|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-v|string||The [version](https://consumerdatastandardsaustralia.github.io/standards/#response-headers) of the API end point that the CDR Register has responded with.|

<aside class="success">
This operation does not require authentication
</aside>


## Get Data Recipient Statuses

<a id="opIdGetDataRecipientsStatus"></a>

> Code samples

```HTTP
GET https://<register-base-url>/cdr-register/v1/{industry}/data-recipients/status HTTP/1.1
Host: <register-base-url>
Accept: application/json
x-v: string

```

`GET /{industry}/data-recipients/status`

Endpoint used by participants to discover the statuses for Data Recipients from the CDR Register

<h3>Endpoint Version</h3>
|||
|---|---|
|Version|**1**|

<h3 id="getdatarecipientsstatus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|industry|path|string|true|The industry the participant is retrieving data for (Banking, etc)|
|x-v|header|string|false|The [version](https://consumerdatastandardsaustralia.github.io/standards/#response-headers) of the API end point requested by the client. Must be set to a positive integer.|

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

<h3 id="getdatarecipientsstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[DataRecipientsStatusList](#schemadatarecipientsstatuslist)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request</br>Invalid industry path parameter|[ResponseErrorList](#schemaresponseerrorlist)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|Invalid x-v header</br>Invalid Accept header|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-v|string||The [version](https://consumerdatastandardsaustralia.github.io/standards/#response-headers) of the API end point that the CDR Register has responded with.|

<aside class="success">
This operation does not require authentication
</aside>


## Get Data Recipients

<a id="opIdGetDataRecipients"></a>

> Code samples

```HTTP
GET https://<register-base-url>/cdr-register/v1/{industry}/data-recipients HTTP/1.1
Host: <register-base-url>
Accept: application/json
x-v: string

```

`GET /{industry}/data-recipients`

Endpoint used by participants to discover data recipients and associated brands and software products, available in the CDR ecosystem

<h3>Endpoint Version</h3>
|||
|---|---|
|Version|**2**|

<h3 id="getdatarecipients-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|industry|path|string|true|The industry the participant is retrieving data for (Banking, etc)|
|x-v|header|string|false|The [version](https://consumerdatastandardsaustralia.github.io/standards/#response-headers) of the API end point requested by the client. Must be set to a positive integer.|

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
      "lastUpdated": "2019-10-24T03:51:44Z"
    }
  ]
}
```

<h3 id="getdatarecipients-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[ResponseRegisterDataRecipientList](#schemaresponseregisterdatarecipientlist)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request</br>Invalid industry path parameter|[ResponseErrorList](#schemaresponseerrorlist)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|Invalid x-v header</br>Invalid Accept header|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-v|string||The [version](https://consumerdatastandardsaustralia.github.io/standards/#response-headers) of the API end point that the CDR Register has responded with.|

<aside class="success">
This operation does not require authentication
</aside>

## Schemas

<h2 id="tocSresponseopenidproviderconfigmetadata">ResponseOpenIDProviderConfigMetadata</h2>

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
|issuer|string|true|none|URL using the https scheme with no query or fragment component that the CDR Register asserts as its Issuer Identifier|
|jwks_uri|string|true|none|URL of the CDR Register's JSON Web Key Set [JWK] document. This contains the signing key(s) used to validate access tokens issued from the CDR Register. Note that this differs from the [JWKS endpoint](https://cdr-register.github.io/register/#getjwks) used to validate SSAs and CDR Register client authentication|
|token_endpoint|string|true|none|URL of the CDR Register's OAuth 2.0 Token Endpoint|
|claims_supported|[string]|true|none|JSON array containing a list of the Claim Names of the Claims that the CDR Register supplies values for|
|id_token_signing_alg_values_supported|[string]|true|none|JSON array containing a list of the JWS signing algorithms (alg values) supported by the CDR Register for the ID Token to encode the Claims in a JWT. Given the CDR Register does not issue ID tokens, this field can be safely ignored|
|subject_types_supported|[string]|true|none|JSON array containing a list of the Subject Identifier types that the CDR Register supports. Given the CDR Register does not issue ID tokens, this field can be safely ignored|
|code_challenge_methods_supported|[string]|true|none|JSON array containing a list of Proof Key for Code Exchange (PKCE) [RFC7636] code challenge methods supported by this authorization server. Given the CDR Register does not support PKCE, this field can be safely ignored|
|scopes_supported|[string]|true|none|JSON array containing a list of the OAuth 2.0 [RFC6749] scope values that the CDR Register supports|
|response_types_supported|[string]|true|none|JSON array containing a list of the OAuth 2.0 response_type values that the CDR Registrer supports|
|grant_types_supported|[string]|true|none|JSON array containing a list of the OAuth 2.0 Grant Type values that the CDR Register supports|
|token_endpoint_auth_methods_supported|[string]|true|none|JSON array containing a list of Client Authentication methods supported by this Token Endpoint|
|tls_client_certificate_bound_access_tokens|boolean|true|none|Boolean value indicating server support for mutual TLS client certificate bound access tokens|
|request_object_signing_alg_values_supported|[string]|true|none|JSON array containing a list of the JWS signing algorithms (alg values) supported by the CDR Register for Request Objects.|

<h2 id="tocSresponsejwks">ResponseJWKS</h2>

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
|keys|[[JWK](#schemajwk)]|true|none|The value of the "keys" parameter is an array of JWK values|

<h2 id="tocSjwk">JWK</h2>

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
|alg|string|true|none|The "alg" (algorithm) parameter identifies the algorithm intended for use with the key|
|e|string|true|none|The "e" RSA public exponent parameter|
|key_ops|[string]|true|none|The "key_ops" (key operations) parameter identifies the operation(s) for which the key is intended to be used|
|kid|string|true|none|The "kid" (key ID) parameter is partially used to match a specific key. Note the "kid" parameter is not guaranteed unique and additional parameters should be used to progressively to identify a key within a set|
|kty|string|true|none|The "kty" (key type) parameter identifies the cryptographic algorithm family used with the key|
|n|string|true|none|The "n" RSA public modulus parameter|

<h2 id="tocSresponseregisterdataholderbrandlist">ResponseRegisterDataHolderBrandList</h2>

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
        "registrationDate": "2019-10-24",
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
      "lastUpdated": "2019-10-24T03:51:44Z"
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
|data|[[RegisterDataHolderBrand](#schemaregisterdataholderbrand)]|true|none|Response data for the query|
|links|[LinksPaginated](#schemalinkspaginated)|true|none|none|
|meta|[MetaPaginated](#schemametapaginated)|true|none|none|

<h2 id="tocSregisterdataholderbrand">RegisterDataHolderBrand</h2>

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
    "registrationDate": "2019-10-24",
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
  "lastUpdated": "2019-10-24T03:51:44Z"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataHolderBrandId|string|true|none|Unique id of the Data Holder Brand issued by the CDR Register. Refer to [Identifiers](https://cdr-register.github.io/register/#identifiers) for details|
|brandName|string|true|none|The name of Data Holder Brand|
|industry|string|true|none|The industry the Data Holder brand belongs to (Banking, etc)|
|logoUri|string|true|none|Brand logo URI|
|legalEntity|[LegalEntityDetail](#schemalegalentitydetail)|true|none|The data that is common to all organisations, regardless of the type (e.g. company, trust, partnership, government)|
|status|string|true|none|none|
|endpointDetail|[RegisterDataHolderBrandServiceEndpoint](#schemaregisterdataholderbrandserviceendpoint)|true|none|Endpoints related to Data Holder Brand services|
|authDetails|[[RegisterDataHolderAuth](#schemaregisterdataholderauth)]|true|none|[Provides details of authorisation endpoints for Data Holders]|
|lastUpdated|string(date-time)|true|none|The date/time that the Data Holder Brand data was last updated in the Register|

#### Enumerated Values

|Property|Value|
|---|---|
|industry|banking|
|status|ACTIVE|
|status|INACTIVE|
|status|REMOVED|

<h2 id="tocSsoftwareproductsstatuslist">SoftwareProductsStatusList</h2>

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
|softwareProducts|[[SoftwareProductStatus](#schemasoftwareproductstatus)]|true|none|none|

<h2 id="tocSsoftwareproductstatus">SoftwareProductStatus</h2>

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
|softwareProductId|string|true|none|Unique id of the software product issued by the CDR Register.  Refer to [Identifiers](https://cdr-register.github.io/register/#identifiers) for details|
|softwareProductStatus|string|true|none|Software product status in the CDR Register|

#### Enumerated Values

|Property|Value|
|---|---|
|softwareProductStatus|ACTIVE|
|softwareProductStatus|INACTIVE|
|softwareProductStatus|REMOVED|

<h2 id="tocSdatarecipientsstatuslist">DataRecipientsStatusList</h2>

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
|dataRecipients|[[DataRecipientStatus](#schemadatarecipientstatus)]|true|none|none|

<h2 id="tocSdatarecipientstatus">DataRecipientStatus</h2>

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
|dataRecipientId|string|true|none|Unique id of the Data Recipient issued by the CDR Register.  Refer to [Identifiers](https://cdr-register.github.io/register/#identifiers) for details|
|dataRecipientStatus|string|true|none|Data Recipient status in the CDR Register|

#### Enumerated Values

|Property|Value|
|---|---|
|dataRecipientStatus|ACTIVE|
|dataRecipientStatus|SUSPENDED|
|dataRecipientStatus|REVOKED|
|dataRecipientStatus|SURRENDERED|

<h2 id="tocSresponseregisterdatarecipientlist">ResponseRegisterDataRecipientList</h2>

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
      "lastUpdated": "2019-10-24T03:51:44Z"
    }
  ]
}

```

*Response containing a list of Data Recipients in the CDR Register*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[RegisterDataRecipient](#schemaregisterdatarecipient)]|true|none|Response data for the query|

<h2 id="tocSregisterdatarecipient">RegisterDataRecipient</h2>

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
  "lastUpdated": "2019-10-24T03:51:44Z"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|legalEntityId|string|true|none|Unique id of the Data Recipient Legal Entity issued by the CDR Register.  Refer to [Identifiers](https://cdr-register.github.io/register/#identifiers) for details|
|legalEntityName|string|true|none|Legal name of the Data Recipient|
|accreditationNumber|string|true|none|CDR Register issued human readable unique number given to Data Recipients upon accreditation|
|industry|string|true|none|none|
|logoUri|string|true|none|Legal Entity logo URI|
|dataRecipientBrands|[[DataRecipientBrandMetaData](#schemadatarecipientbrandmetadata)]|false|none|[Metadata related to Data Recipient Brand]|
|status|string|true|none|none|
|lastUpdated|string(date-time)|true|none|The date/time that the Legal Entity was last updated in the CDR Register|

#### Enumerated Values

|Property|Value|
|---|---|
|industry|banking|
|status|ACTIVE|
|status|SUSPENDED|
|status|REVOKED|
|status|SURRENDERED|

<h2 id="tocSdatarecipientbrandmetadata">DataRecipientBrandMetaData</h2>

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
|dataRecipientBrandId|string|true|none|Unique id of the Data Recipient brand issued by the CDR Register.  Refer to [Identifiers](https://cdr-register.github.io/register/#identifiers) for details|
|brandName|string|true|none|Data Recipient Brand name|
|logoUri|string|true|none|Data Recipient Brand logo URI|
|softwareProducts|[[SoftwareProductMetaData](#schemasoftwareproductmetadata)]|false|none|[Data Recipient Brand Software Products]|
|status|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ACTIVE|
|status|INACTIVE|
|status|REMOVED|

<h2 id="tocSsoftwareproductmetadata">SoftwareProductMetaData</h2>

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
|softwareProductId|string|true|none|Unique id of the Data Recipient software product issued by the CDR Register.  Refer to [Identifiers](https://cdr-register.github.io/register/#identifiers) for details|
|softwareProductName|string|true|none|Name of the software product|
|softwareProductDescription|string|false|none|Description of the software product|
|logoUri|string|true|none|Software product logo URI|
|status|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ACTIVE|
|status|INACTIVE|
|status|REMOVED|

<h2 id="tocSlegalentitydetail">LegalEntityDetail</h2>

<a id="schemalegalentitydetail"></a>

```json
{
  "legalEntityId": "string",
  "legalEntityName": "string",
  "logoUri": "string",
  "registrationNumber": "string",
  "registrationDate": "2019-10-24",
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
|legalEntityId|string|true|none|Unique id of the organisation issued by the CDR Register.  Refer to [Identifiers](https://cdr-register.github.io/register/#identifiers) for details|
|legalEntityName|string|true|none|Unique legal name of the organisation|
|logoUri|string|true|none|Legal Entity logo URI|
|registrationNumber|string|false|none|Unique registration number (if the company is registered outside Australia)|
|registrationDate|string(date)|false|none|Date of registration (if the company is registered outside Australia)|
|registeredCountry|string|false|none|Country of registeration (if the company is registered outside Australia)|
|abn|string|false|none|Australian Business Number for the organisation|
|acn|string|false|none|Australian Company Number for the organisation|
|arbn|string|false|none|Australian Registered Body Number.  ARBNs are issued to registrable Australian bodies and foreign companies|
|industryCode|string|false|none|Industry Code for the organisation. [ANZSIC (2006)](http://www.abs.gov.au/anzsic)|
|organisationType|string|false|none|Legal organisation type|

#### Enumerated Values

|Property|Value|
|---|---|
|organisationType|SOLE_TRADER|
|organisationType|COMPANY|
|organisationType|PARTNERSHIP|
|organisationType|TRUST|
|organisationType|GOVERNMENT_ENTITY|
|organisationType|OTHER|

<h2 id="tocSregisterdataholderbrandserviceendpoint">RegisterDataHolderBrandServiceEndpoint</h2>

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
|version|string|true|none|The major version of the high level standards. This is not the version of the endpoint or the payload being requested but the version of the overall standards being applied. This version number will be "v" followed by the major version of the standards as a positive integer (e.g. v1, v12 or v76)|
|publicBaseUri|string|true|none|Base URI for the Data Holder's Consumer Data Standard public endpoints|
|resourceBaseUri|string|true|none|Base URI for the Data Holder's Consumer Data Standard resource endpoints|
|infosecBaseUri|string|true|none|Base URI for the Data Holder's Consumer Data Standard information security endpoints|
|extensionBaseUri|string|false|none|Base URI for the Data Holder extension endpoints to the Consumer Data Standard (optional)|
|websiteUri|string|true|none|Publicly available website or web resource URI|

<h2 id="tocSregisterdataholderauth">RegisterDataHolderAuth</h2>

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
|registerUType|string|true|none|The type of authentication and authorisation mechanism in use|
|jwksEndpoint|string|true|none|JWKS endpoint for private_key_jwt client authentication with Data Recipient|

#### Enumerated Values

|Property|Value|
|---|---|
|registerUType|SIGNED-JWT|

<h2 id="tocSlinkspaginated">LinksPaginated</h2>

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
|first|string|false|none|URI to the first page of this set. Mandatory if this response is not the first page|
|last|string|false|none|URI to the last page of this set. Mandatory if this response is not the last page|
|next|string|false|none|URI to the next page of this set. Mandatory if this response is not the last page|
|prev|string|false|none|URI to the previous page of this set. Mandatory if this response is not the first page|
|self|string|true|none|Fully qualified link to this API call|

<h2 id="tocSmetapaginated">MetaPaginated</h2>

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
|totalPages|integer(int32)|true|none|The total number of pages in the full set|
|totalRecords|integer(int32)|true|none|The total number of records in the full set|

<h2 id="tocSresponseerrorlist">ResponseErrorList</h2>

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
|errors|[[Error](#schemaerror)]|true|none|none|

<h2 id="tocSerror">Error</h2>

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
|code|string|true|none|Error code|
|title|string|true|none|Error title|
|detail|string|true|none|Error detail|
|meta|object|false|none|Optional additional data for specific error types|
