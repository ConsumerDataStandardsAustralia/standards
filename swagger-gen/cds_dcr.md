

## Register Data Recipient oAuth Client

<a id="opIdPostDataRecipientRegistration"></a>

> Code samples

```http
POST https://data.holder.com.au/register/register HTTP/1.1
Host: data.holder.com.au
Content-Type: application/jwt
Accept: application/json

```

```javascript
var headers = {
  'Content-Type':'application/jwt',
  'Accept':'application/json'

};

$.ajax({
  url: 'https://data.holder.com.au/register/register',
  method: 'post',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`POST /register`

Register a client using a CDR Register issued Software Statement Assertion.

> Body parameter

###Endpoint Version
|   |  |
|---|--|
|Version|**undefined**

<h3 id="register-data-recipient-oauth-client-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ClientRegistrationRequest](#schemacdr-dynamic-client-registration-apiclientregistrationrequest)|mandatory|The registration request JWT to be used to register with a Data Holder.|

> Example responses

> 201 Response

```json
{
  "client_id": "35a5a70b-5b8d-41f4-9cbd-96cfbc15c58a",
  "client_id_issued_at": 1571808167,
  "client_name": "Mock Software",
  "client_description": "A mock software product",
  "client_uri": "https://www.mockcompany.com.au",
  "legal_entity_id": "344F0E809-BDBE-4F8E-BD30-5E6C3CB78D7B",
  "legal_entity_name": "Mock Company Pty Ltd.",
  "org_id": "3B0B0A7B-3E7B-4A2C-9497-E357A71D07C8",
  "org_name": "Mock Company Brand.",
  "redirect_uris": [
    "https://www.mockcompany.com.au/redirects/redirect1",
    "https://www.mockcompany.com.au/redirects/redirect2"
  ],
  "sector_identifier_uri": "https://www.mockcompany.com.au/sector_identifier.json",
  "logo_uri": "https://www.mockcompany.com.au/logos/logo1.png",
  "tos_uri": "https://www.mockcompany.com.au/tos.html",
  "policy_uri": "https://www.mockcompany.com.au/policy.html",
  "jwks_uri": "https://www.mockcompany.com.au/jwks",
  "revocation_uri": "https://www.mockcompany.com.au/revocation",
  "recipient_base_uri": "https://www.mockcompany.com.au",
  "token_endpoint_auth_method": "private_key_jwt",
  "token_endpoint_auth_signing_alg": "PS256",
  "grant_types": [
    "client_credentials"
  ],
  "response_types": [
    "code id_token"
  ],
  "application_type": "web",
  "id_token_signed_response_alg": "PS256",
  "id_token_encrypted_response_alg": "RSA-OAEP",
  "id_token_encrypted_response_enc": "A256GCM",
  "request_object_signing_alg": "PS256",
  "software_statement": "string",
  "software_id": "740C368F-ECF9-4D29-A2EA-0514A66B0CDE",
  "software_roles": "data-recipient-software-product",
  "scope": "openid profile bank:accounts.basic:read bank:accounts.detail:read bank:transactions:read bank:payees:read bank:regular_payments:read common:customer.basic:read common:customer.detail:read cdr:registration"
}
```

<h3 id="register-data-recipient-oauth-client-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Client registration success|[RegistrationProperties](#schemacdr-dynamic-client-registration-apiregistrationproperties)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Request failed due to client error|[RegistrationError](#schemacdr-dynamic-client-registration-apiregistrationerror)|

  
    <aside class="success">
This operation does not require authentication
</aside>

  

## Get oAuth Client Registration

<a id="opIdGetClientRegistration"></a>

> Code samples

```http
GET https://data.holder.com.au/register/register/{ClientId} HTTP/1.1
Host: data.holder.com.au
Accept: application/json
Authorization: string

```

```javascript
var headers = {
  'Accept':'application/json',
  'Authorization':'string'

};

$.ajax({
  url: 'https://data.holder.com.au/register/register/{ClientId}',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`GET /register/{ClientId}`

Get a Client Registration for a given Client ID.

###Endpoint Version
|   |  |
|---|--|
|Version|**undefined**

<h3 id="get-oauth-client-registration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ClientId|path|string|mandatory|The client ID issued by the target Data Holder|
|Authorization|header|string|mandatory|An Authorisation Token as per [RFC6750](https://tools.ietf.org/html/rfc6750)|

> Example responses

> 200 Response

```json
{
  "client_id": "35a5a70b-5b8d-41f4-9cbd-96cfbc15c58a",
  "client_id_issued_at": 1571808167,
  "client_name": "Mock Software",
  "client_description": "A mock software product",
  "client_uri": "https://www.mockcompany.com.au",
  "legal_entity_id": "344F0E809-BDBE-4F8E-BD30-5E6C3CB78D7B",
  "legal_entity_name": "Mock Company Pty Ltd.",
  "org_id": "3B0B0A7B-3E7B-4A2C-9497-E357A71D07C8",
  "org_name": "Mock Company Brand.",
  "redirect_uris": [
    "https://www.mockcompany.com.au/redirects/redirect1",
    "https://www.mockcompany.com.au/redirects/redirect2"
  ],
  "sector_identifier_uri": "https://www.mockcompany.com.au/sector_identifier.json",
  "logo_uri": "https://www.mockcompany.com.au/logos/logo1.png",
  "tos_uri": "https://www.mockcompany.com.au/tos.html",
  "policy_uri": "https://www.mockcompany.com.au/policy.html",
  "jwks_uri": "https://www.mockcompany.com.au/jwks",
  "revocation_uri": "https://www.mockcompany.com.au/revocation",
  "recipient_base_uri": "https://www.mockcompany.com.au",
  "token_endpoint_auth_method": "private_key_jwt",
  "token_endpoint_auth_signing_alg": "PS256",
  "grant_types": [
    "client_credentials"
  ],
  "response_types": [
    "code id_token"
  ],
  "application_type": "web",
  "id_token_signed_response_alg": "PS256",
  "id_token_encrypted_response_alg": "RSA-OAEP",
  "id_token_encrypted_response_enc": "A256GCM",
  "request_object_signing_alg": "PS256",
  "software_statement": "string",
  "software_id": "740C368F-ECF9-4D29-A2EA-0514A66B0CDE",
  "software_roles": "data-recipient-software-product",
  "scope": "openid profile bank:accounts.basic:read bank:accounts.detail:read bank:transactions:read bank:payees:read bank:regular_payments:read common:customer.basic:read common:customer.detail:read cdr:registration"
}
```

<h3 id="get-oauth-client-registration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Client registration retrieval success|[RegistrationProperties](#schemacdr-dynamic-client-registration-apiregistrationproperties)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Request failed due to unknown or invalid Client or invalid access token|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|The client does not have permission to read, update or delete the Client|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|401|WWW-Authenticate|string||The Response Header Field as per [RFC6750](https://tools.ietf.org/html/rfc6750)|

  
    
      <aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
<a href="#authorisation-scopes">cdr:registration</a>
</aside>

    
  

## Update Data Recipient Registration

<a id="opIdPutDataRecipientRegistration"></a>

> Code samples

```http
PUT https://data.holder.com.au/register/register/{ClientId} HTTP/1.1
Host: data.holder.com.au
Content-Type: application/jwt
Accept: application/json
Authorization: string

```

```javascript
var headers = {
  'Content-Type':'application/jwt',
  'Accept':'application/json',
  'Authorization':'string'

};

$.ajax({
  url: 'https://data.holder.com.au/register/register/{ClientId}',
  method: 'put',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`PUT /register/{ClientId}`

Update a Client Registration for a given Client ID.

> Body parameter

###Endpoint Version
|   |  |
|---|--|
|Version|**undefined**

<h3 id="update-data-recipient-registration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ClientId|path|string|mandatory|The client ID issued by the target Data Holder|
|Authorization|header|string|mandatory|An Authorisation Token as per [RFC6750](https://tools.ietf.org/html/rfc6750)|
|body|body|[ClientRegistrationRequest](#schemacdr-dynamic-client-registration-apiclientregistrationrequest)|mandatory|The registration request JWT to be used to register with a Data Holder.|

> Example responses

> 200 Response

```json
{
  "client_id": "35a5a70b-5b8d-41f4-9cbd-96cfbc15c58a",
  "client_id_issued_at": 1571808167,
  "client_name": "Mock Software",
  "client_description": "A mock software product",
  "client_uri": "https://www.mockcompany.com.au",
  "legal_entity_id": "344F0E809-BDBE-4F8E-BD30-5E6C3CB78D7B",
  "legal_entity_name": "Mock Company Pty Ltd.",
  "org_id": "3B0B0A7B-3E7B-4A2C-9497-E357A71D07C8",
  "org_name": "Mock Company Brand.",
  "redirect_uris": [
    "https://www.mockcompany.com.au/redirects/redirect1",
    "https://www.mockcompany.com.au/redirects/redirect2"
  ],
  "sector_identifier_uri": "https://www.mockcompany.com.au/sector_identifier.json",
  "logo_uri": "https://www.mockcompany.com.au/logos/logo1.png",
  "tos_uri": "https://www.mockcompany.com.au/tos.html",
  "policy_uri": "https://www.mockcompany.com.au/policy.html",
  "jwks_uri": "https://www.mockcompany.com.au/jwks",
  "revocation_uri": "https://www.mockcompany.com.au/revocation",
  "recipient_base_uri": "https://www.mockcompany.com.au",
  "token_endpoint_auth_method": "private_key_jwt",
  "token_endpoint_auth_signing_alg": "PS256",
  "grant_types": [
    "client_credentials"
  ],
  "response_types": [
    "code id_token"
  ],
  "application_type": "web",
  "id_token_signed_response_alg": "PS256",
  "id_token_encrypted_response_alg": "RSA-OAEP",
  "id_token_encrypted_response_enc": "A256GCM",
  "request_object_signing_alg": "PS256",
  "software_statement": "string",
  "software_id": "740C368F-ECF9-4D29-A2EA-0514A66B0CDE",
  "software_roles": "data-recipient-software-product",
  "scope": "openid profile bank:accounts.basic:read bank:accounts.detail:read bank:transactions:read bank:payees:read bank:regular_payments:read common:customer.basic:read common:customer.detail:read cdr:registration"
}
```

<h3 id="update-data-recipient-registration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Client registration update success|[RegistrationProperties](#schemacdr-dynamic-client-registration-apiregistrationproperties)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Request failed due to client error|[RegistrationError](#schemacdr-dynamic-client-registration-apiregistrationerror)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Request failed due to unknown or invalid Client or invalid access token|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|The client does not have permission to read, update or delete the Client|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|401|WWW-Authenticate|string||The Response Header Field as per [RFC6750](https://tools.ietf.org/html/rfc6750)|

  
    
      <aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
<a href="#authorisation-scopes">cdr:registration</a>
</aside>

    
  

## Delete Data Recipient oAuth Client Registration

<a id="opIdDeleteDataRecipientRegistration"></a>

> Code samples

```http
DELETE https://data.holder.com.au/register/register/{ClientId} HTTP/1.1
Host: data.holder.com.au

Authorization: string

```

```javascript
var headers = {
  'Authorization':'string'

};

$.ajax({
  url: 'https://data.holder.com.au/register/register/{ClientId}',
  method: 'delete',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`DELETE /register/{ClientId}`

Delete a Client Registration for a given Client ID.

###Endpoint Version
|   |  |
|---|--|
|Version|**undefined**

<h3 id="delete-data-recipient-oauth-client-registration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ClientId|path|string|mandatory|The client ID issued by the target Data Holder|
|Authorization|header|string|mandatory|An Authorisation Token as per [RFC6750](https://tools.ietf.org/html/rfc6750)|

<h3 id="delete-data-recipient-oauth-client-registration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Client deleted|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Request failed due to unknown or invalid Client or invalid access token|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|The client does not have permission to read, update or delete the Client|None|
|405|[Method Not Allowed](https://tools.ietf.org/html/rfc7231#section-6.5.5)|Method Not Allowed. The requested method is unsupported|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|401|WWW-Authenticate|string||The Response Header Field as per [RFC6750](https://tools.ietf.org/html/rfc6750)|

  
    
      <aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
<a href="#authorisation-scopes">cdr:registration</a>
</aside>

    
  

<h2 class="schema-heading" id="cdr-dynamic-client-registration-api-schemas">Schemas</h2>
<a class="schema-link" id="cdr-dynamic-client-registration-api-schemas"></a>

<h2 class="schema-toc" id="tocSclientregistrationrequest">ClientRegistrationRequest</h2>

<a id="schemacdr-dynamic-client-registration-apiclientregistrationrequest"></a>

```json
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."

```

*The registration request JWT to be used to register with a Data Holder.*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|*anonymous*|string(JWT)|mandatory|The registration request JWT to be used to register with a Data Holder.|

<h2 class="schema-toc" id="tocSregistrationproperties">RegistrationProperties</h2>

<a id="schemacdr-dynamic-client-registration-apiregistrationproperties"></a>

```json
{
  "client_id": "35a5a70b-5b8d-41f4-9cbd-96cfbc15c58a",
  "client_id_issued_at": 1571808167,
  "client_name": "Mock Software",
  "client_description": "A mock software product",
  "client_uri": "https://www.mockcompany.com.au",
  "legal_entity_id": "344F0E809-BDBE-4F8E-BD30-5E6C3CB78D7B",
  "legal_entity_name": "Mock Company Pty Ltd.",
  "org_id": "3B0B0A7B-3E7B-4A2C-9497-E357A71D07C8",
  "org_name": "Mock Company Brand.",
  "redirect_uris": [
    "https://www.mockcompany.com.au/redirects/redirect1",
    "https://www.mockcompany.com.au/redirects/redirect2"
  ],
  "sector_identifier_uri": "https://www.mockcompany.com.au/sector_identifier.json",
  "logo_uri": "https://www.mockcompany.com.au/logos/logo1.png",
  "tos_uri": "https://www.mockcompany.com.au/tos.html",
  "policy_uri": "https://www.mockcompany.com.au/policy.html",
  "jwks_uri": "https://www.mockcompany.com.au/jwks",
  "revocation_uri": "https://www.mockcompany.com.au/revocation",
  "recipient_base_uri": "https://www.mockcompany.com.au",
  "token_endpoint_auth_method": "private_key_jwt",
  "token_endpoint_auth_signing_alg": "PS256",
  "grant_types": [
    "client_credentials"
  ],
  "response_types": [
    "code id_token"
  ],
  "application_type": "web",
  "id_token_signed_response_alg": "PS256",
  "id_token_encrypted_response_alg": "RSA-OAEP",
  "id_token_encrypted_response_enc": "A256GCM",
  "request_object_signing_alg": "PS256",
  "software_statement": "string",
  "software_id": "740C368F-ECF9-4D29-A2EA-0514A66B0CDE",
  "software_roles": "data-recipient-software-product",
  "scope": "openid profile bank:accounts.basic:read bank:accounts.detail:read bank:transactions:read bank:payees:read bank:regular_payments:read common:customer.basic:read common:customer.detail:read cdr:registration"
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|client_id|string|mandatory|Data Holder issued client identifier string|
|client_id_issued_at|integer(int32)|optional|Time at which the client identifier was issued expressed as seconds since 1970-01-01T00:00:00Z as measured in UTC|
|client_name|string|mandatory|Human-readable string name of the software product to be presented to the end-user during authorization|
|client_description|string|mandatory|Human-readable string name of the software product description to be presented to the end user during authorization|
|client_uri|string|mandatory|URL string of a web page providing information about the client|
|legal_entity_id|string|optional|A unique identifier string assigned by the CDR Register that identifies the Accredited Data Recipient Legal Entity|
|legal_entity_name|string|optional|Human-readable string name of the Accredited Data Recipient Legal Entity|
|org_id|string|mandatory|A unique identifier string assigned by the CDR Register that identifies the Accredited Data Recipient Brand|
|org_name|string|mandatory|Human-readable string name of the Accredited Data Recipient to be presented to the end user during authorization|
|redirect_uris|[string]|mandatory|Array of redirection URI strings for use in redirect-based flows. If used, redirect_uris MUST match or be a subset of the redirect_uris as defined in the SSA|
|sector_identifier_uri|string|optional|URL string referencing the client sector identifier URI, used as an optional input to the Pairwise Identifier|
|logo_uri|string|mandatory|URL string that references a logo for the client. If present, the server SHOULD display this image to the end-user during approval|
|tos_uri|string|optional|URL string that points to a human-readable terms of service document for the Software Product|
|policy_uri|string|optional|URL string that points to a human-readable policy document for the Software Product|
|jwks_uri|string|mandatory|URL string referencing the client JSON Web Key (JWK) Set [RFC7517] document, which contains the client public keys|
|revocation_uri|string|optional|URI string that references the location of the Software Product consent revocation endpoint|
|recipient_base_uri|string|optional|Base URI for the Consumer Data Standard Data Recipient endpoints. This should be the base to provide reference to all other Data Recipient Endpoints|
|token_endpoint_auth_method|string|mandatory|The requested authentication method for the token endpoint|
|token_endpoint_auth_signing_alg|string|mandatory|The algorithm used for signing the JWT|
|grant_types|[string]|mandatory|Array of OAuth 2.0 grant type strings that the client can use at the token endpoint|
|response_types|[string]|mandatory|Array of the OAuth 2.0 response type strings that the client can use at the authorization endpoint.|
|application_type|string|optional|Kind of the application. The only supported application type will be `web`|
|id_token_signed_response_alg|string|optional|Algorithm with which an id_token is to be signed|
|id_token_encrypted_response_alg|string|mandatory|JWE `alg` algorithm with which an id_token is to be encrypted|
|id_token_encrypted_response_enc|string|mandatory|JWE `enc` algorithm with which an id_token is to be encrypted|
|request_object_signing_alg|string|mandatory|Algorithm which the ADR expects to sign the request object if a request object will be part of the authorization request sent to the Data Holder|
|software_statement|string(JWT)|mandatory|The Software Statement Assertion, as defined in CDR standards|
|software_id|string|mandatory|String representing a unique identifier assigned by the Register and used by registration endpoints to identify the software product to be dynamically registered. </br></br>The "software_id" will remain the same for the lifetime of the product, across multiple updates and versions|
|software_roles|string|optional|String containing a role of the software in the CDR Regime. Initially the only value used with be `data-recipient-software-product`|
|scope|string|mandatory|String containing a space-separated list of scope values that the client can use when requesting access tokens.|

#### Enumerated Values

|Property|Value|
|---|---|
|token_endpoint_auth_method|private_key_jwt|
|token_endpoint_auth_signing_alg|PS256|
|token_endpoint_auth_signing_alg|ES256|
|application_type|web|
|id_token_signed_response_alg|PS256|
|id_token_signed_response_alg|ES256|
|request_object_signing_alg|PS256|
|request_object_signing_alg|ES256|

<h2 class="schema-toc" id="tocSclientregistration">ClientRegistration</h2>

<a id="schemacdr-dynamic-client-registration-apiclientregistration"></a>

```json
{
  "iss": "CDR Software Product ID",
  "iat": 1571808167,
  "exp": 2147483646,
  "jti": "37747cd1c10545699f754adf28b73e31",
  "aud": "https://secure.api.dataholder.com/issuer",
  "client_id": "35a5a70b-5b8d-41f4-9cbd-96cfbc15c58a",
  "client_id_issued_at": 1571808167,
  "client_name": "Mock Software",
  "client_description": "A mock software product",
  "client_uri": "https://www.mockcompany.com.au",
  "legal_entity_id": "344F0E809-BDBE-4F8E-BD30-5E6C3CB78D7B",
  "legal_entity_name": "Mock Company Pty Ltd.",
  "org_id": "3B0B0A7B-3E7B-4A2C-9497-E357A71D07C8",
  "org_name": "Mock Company Brand.",
  "redirect_uris": [
    "https://www.mockcompany.com.au/redirects/redirect1",
    "https://www.mockcompany.com.au/redirects/redirect2"
  ],
  "sector_identifier_uri": "https://www.mockcompany.com.au/sector_identifier.json",
  "logo_uri": "https://www.mockcompany.com.au/logos/logo1.png",
  "tos_uri": "https://www.mockcompany.com.au/tos.html",
  "policy_uri": "https://www.mockcompany.com.au/policy.html",
  "jwks_uri": "https://www.mockcompany.com.au/jwks",
  "revocation_uri": "https://www.mockcompany.com.au/revocation",
  "recipient_base_uri": "https://www.mockcompany.com.au",
  "token_endpoint_auth_method": "private_key_jwt",
  "token_endpoint_auth_signing_alg": "PS256",
  "grant_types": [
    "client_credentials"
  ],
  "response_types": [
    "code id_token"
  ],
  "application_type": "web",
  "id_token_signed_response_alg": "PS256",
  "id_token_encrypted_response_alg": "RSA-OAEP",
  "id_token_encrypted_response_enc": "A256GCM",
  "request_object_signing_alg": "PS256",
  "software_statement": "string",
  "software_id": "740C368F-ECF9-4D29-A2EA-0514A66B0CDE",
  "software_roles": "data-recipient-software-product",
  "scope": "openid profile bank:accounts.basic:read bank:accounts.detail:read bank:transactions:read bank:payees:read bank:regular_payments:read common:customer.basic:read common:customer.detail:read cdr:registration"
}

```

### Properties

*allOf*

|Name|Type|Required|Description|
|---|---|---|---|
|*anonymous*|object|mandatory|none|
|» iss|string|mandatory|Contains the identifier for the ADR Software Product (SoftwareProductId) as defined in the CDR Register|
|» iat|integer(int32)|mandatory|The time at which the request was issued by the Data Recipient  expressed as seconds since 1970-01-01T00:00:00Z as measured in UTC|
|» exp|integer(int32)|mandatory|The time at which the request expires expressed as seconds since 1970-01-01T00:00:00Z as measured in UTC|
|» jti|string|mandatory|Unique identifier for the JWT, used to prevent replay of the token|
|» aud|string|mandatory|'Contains the Data Holder issuer value as described in the OIDC Discovery Document|

*and*

|Name|Type|Required|Description|
|---|---|---|---|
|*anonymous*|[RegistrationProperties](#schemacdr-dynamic-client-registration-apiregistrationproperties)|mandatory|none|

<h2 class="schema-toc" id="tocSregistrationerror">RegistrationError</h2>

<a id="schemacdr-dynamic-client-registration-apiregistrationerror"></a>

```json
{
  "error": "invalid_redirect_uri",
  "error_description": "string"
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|error|string|mandatory|Predefined error code as described in [section 3.3 OIDC Dynamic Client Registration](https://openid.net/specs/openid-connect-registration-1_0.html)|
|error_description|string|optional|Additional text description of the error for debugging.|

#### Enumerated Values

|Property|Value|
|---|---|
|error|invalid_redirect_uri|
|error|invalid_client_metadata|
|error|invalid_software_statement|
|error|unapproved_software_statement|

