

<h2 id="cdr-dynamic-client-registration-api_register-data-recipient-oauth-client">Register Data Recipient oAuth Client</h2>
<p id="register-data-recipient-oauth-client" class="orig-anchor"></p>

> Code samples

```http
POST https://data.holder.com.au/register HTTP/1.1
Host: data.holder.com.au
Content-Type: application/jwt
Accept: application/json
```

```javascript--nodejs
const fetch = require('node-fetch');
const inputBody = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...';
const headers = {
  'Content-Type':'application/jwt',
  'Accept':'application/json'
};

fetch('https://data.holder.com.au/register', {
  method: 'POST',
  body: inputBody,
  headers: headers
}).then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

`POST /register`

Register a client using a CDR Register issued Software Statement Assertion. 

This endpoint does not require CORS.

> Body parameter

```yaml
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

<h3 id="cdr-dynamic-client-registration-api_register-data-recipient-oauth-client_endpoint-version">Endpoint Version</h3>
|   |  |
|---|--|
|Version|**Versioning is not supported for this endpoint**

<h3 id="cdr-dynamic-client-registration-api_register-data-recipient-oauth-client_parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ClientRegistrationRequest](#schemacdr-dynamic-client-registration-apiclientregistrationrequest)|mandatory|The registration request JWT to be used to register with a Data Holder.|

> Example responses

> 201 Response

```json
{
  "client_id": "2cfefa98-7d4a-4bcb-95da-47063b84d410",
  "client_id_issued_at": 1574398833,
  "client_name": "Mock Software",
  "client_description": "A mock software product",
  "client_uri": "https://www.mockcompany.com.au",
  "legal_entity_id": "3B0B0A7B-3E7B-4A2C-9497-E357A71D07C7",
  "legal_entity_name": "Mock Company Pty Ltd.",
  "org_id": "3B0B0A7B-3E7B-4A2C-9497-E357A71D07C8",
  "org_name": "Mock Company Brand",
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
    "client_credentials",
    "authorization_code",
    "refresh_token"
  ],
  "response_types": [
    "code"
  ],
  "application_type": "web",
  "id_token_signed_response_alg": "PS256",
  "id_token_encrypted_response_alg": "RSA-OAEP",
  "id_token_encrypted_response_enc": "A256GCM",
  "authorization_signed_response_alg": "PS256",
  "authorization_encrypted_response_alg": "RSA-OAEP",
  "authorization_encrypted_response_enc": "A128CBC-HS256",
  "request_object_signing_alg": "PS256",
  "software_statement": "string",
  "software_id": "740C368F-ECF9-4D29-A2EA-0514A66B0CDE",
  "software_roles": "data-recipient-software-product",
  "scope": "openid profile bank:accounts.basic:read bank:accounts.detail:read bank:transactions:read bank:payees:read bank:regular_payments:read common:customer.basic:read common:customer.detail:read cdr:registration"
}
```

<h3 id="cdr-dynamic-client-registration-api_register-data-recipient-oauth-client_responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Client registration success|[RegistrationProperties](#schemacdr-dynamic-client-registration-apiregistrationproperties)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Request failed due to client error|[RegistrationError](#schemacdr-dynamic-client-registration-apiregistrationerror)|

  
    <aside class="success">
This operation does not require authentication
</aside>

  

<h2 id="cdr-dynamic-client-registration-api_get-oauth-client-registration">Get oAuth Client Registration</h2>
<p id="get-oauth-client-registration" class="orig-anchor"></p>

> Code samples

```http
GET https://data.holder.com.au/register/{ClientId} HTTP/1.1
Host: data.holder.com.au
Accept: application/json
Authorization: string
```

```javascript--nodejs
const fetch = require('node-fetch');
const headers = {
  'Accept':'application/json',
  'Authorization':'string'
};

fetch('https://data.holder.com.au/register/{ClientId}', {
  method: 'GET',
  headers: headers
}).then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

`GET /register/{ClientId}`

Get a Client Registration for a given Client ID.

<h3 id="cdr-dynamic-client-registration-api_get-oauth-client-registration_endpoint-version">Endpoint Version</h3>
|   |  |
|---|--|
|Version|**Versioning is not supported for this endpoint**

<h3 id="cdr-dynamic-client-registration-api_get-oauth-client-registration_parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ClientId|path|string|mandatory|The client ID issued by the target Data Holder|
|Authorization|header|[ExternalRef](#common-field-types)|mandatory|An Authorisation Token as per **[[RFC6750]](#nref-RFC6750)**|

> Example responses

> 200 Response

```json
{
  "client_id": "2cfefa98-7d4a-4bcb-95da-47063b84d410",
  "client_id_issued_at": 1574398833,
  "client_name": "Mock Software",
  "client_description": "A mock software product",
  "client_uri": "https://www.mockcompany.com.au",
  "legal_entity_id": "3B0B0A7B-3E7B-4A2C-9497-E357A71D07C7",
  "legal_entity_name": "Mock Company Pty Ltd.",
  "org_id": "3B0B0A7B-3E7B-4A2C-9497-E357A71D07C8",
  "org_name": "Mock Company Brand",
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
    "client_credentials",
    "authorization_code",
    "refresh_token"
  ],
  "response_types": [
    "code"
  ],
  "application_type": "web",
  "id_token_signed_response_alg": "PS256",
  "id_token_encrypted_response_alg": "RSA-OAEP",
  "id_token_encrypted_response_enc": "A256GCM",
  "authorization_signed_response_alg": "PS256",
  "authorization_encrypted_response_alg": "RSA-OAEP",
  "authorization_encrypted_response_enc": "A128CBC-HS256",
  "request_object_signing_alg": "PS256",
  "software_statement": "string",
  "software_id": "740C368F-ECF9-4D29-A2EA-0514A66B0CDE",
  "software_roles": "data-recipient-software-product",
  "scope": "openid profile bank:accounts.basic:read bank:accounts.detail:read bank:transactions:read bank:payees:read bank:regular_payments:read common:customer.basic:read common:customer.detail:read cdr:registration"
}
```

<h3 id="cdr-dynamic-client-registration-api_get-oauth-client-registration_responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Client registration retrieval success|[RegistrationProperties](#schemacdr-dynamic-client-registration-apiregistrationproperties)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Request failed due to unknown or invalid Client or invalid access token|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|The client does not have permission to read, update or delete the Client|None|

<h3 id="cdr-dynamic-client-registration-api_get-oauth-client-registration_response-headers">Response Headers</h3>

|Status|Header|Type|Description|
|---|---|---|---|---|
|401|WWW-Authenticate|[ExternalRef](#common-field-types)|The Response Header Field as per **[[RFC6750]](#nref-RFC6750)**|

  
    
      <aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
<a href="#authorisation-scopes">cdr:registration</a>
</aside>

    
  

<h2 id="cdr-dynamic-client-registration-api_update-data-recipient-registration">Update Data Recipient Registration</h2>
<p id="update-data-recipient-registration" class="orig-anchor"></p>

> Code samples

```http
PUT https://data.holder.com.au/register/{ClientId} HTTP/1.1
Host: data.holder.com.au
Content-Type: application/jwt
Accept: application/json
Authorization: string
```

```javascript--nodejs
const fetch = require('node-fetch');
const inputBody = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...';
const headers = {
  'Content-Type':'application/jwt',
  'Accept':'application/json',
  'Authorization':'string'
};

fetch('https://data.holder.com.au/register/{ClientId}', {
  method: 'PUT',
  body: inputBody,
  headers: headers
}).then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

`PUT /register/{ClientId}`

Update a Client Registration for a given Client ID.

> Body parameter

```yaml
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

<h3 id="cdr-dynamic-client-registration-api_update-data-recipient-registration_endpoint-version">Endpoint Version</h3>
|   |  |
|---|--|
|Version|**Versioning is not supported for this endpoint**

<h3 id="cdr-dynamic-client-registration-api_update-data-recipient-registration_parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ClientId|path|string|mandatory|The client ID issued by the target Data Holder|
|Authorization|header|[ExternalRef](#common-field-types)|mandatory|An Authorisation Token as per **[[RFC6750]](#nref-RFC6750)**|
|body|body|[ClientRegistrationRequest](#schemacdr-dynamic-client-registration-apiclientregistrationrequest)|mandatory|The registration request JWT to be used to register with a Data Holder.|

> Example responses

> 200 Response

```json
{
  "client_id": "2cfefa98-7d4a-4bcb-95da-47063b84d410",
  "client_id_issued_at": 1574398833,
  "client_name": "Mock Software",
  "client_description": "A mock software product",
  "client_uri": "https://www.mockcompany.com.au",
  "legal_entity_id": "3B0B0A7B-3E7B-4A2C-9497-E357A71D07C7",
  "legal_entity_name": "Mock Company Pty Ltd.",
  "org_id": "3B0B0A7B-3E7B-4A2C-9497-E357A71D07C8",
  "org_name": "Mock Company Brand",
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
    "client_credentials",
    "authorization_code",
    "refresh_token"
  ],
  "response_types": [
    "code"
  ],
  "application_type": "web",
  "id_token_signed_response_alg": "PS256",
  "id_token_encrypted_response_alg": "RSA-OAEP",
  "id_token_encrypted_response_enc": "A256GCM",
  "authorization_signed_response_alg": "PS256",
  "authorization_encrypted_response_alg": "RSA-OAEP",
  "authorization_encrypted_response_enc": "A128CBC-HS256",
  "request_object_signing_alg": "PS256",
  "software_statement": "string",
  "software_id": "740C368F-ECF9-4D29-A2EA-0514A66B0CDE",
  "software_roles": "data-recipient-software-product",
  "scope": "openid profile bank:accounts.basic:read bank:accounts.detail:read bank:transactions:read bank:payees:read bank:regular_payments:read common:customer.basic:read common:customer.detail:read cdr:registration"
}
```

<h3 id="cdr-dynamic-client-registration-api_update-data-recipient-registration_responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Client registration update success|[RegistrationProperties](#schemacdr-dynamic-client-registration-apiregistrationproperties)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Request failed due to client error|[RegistrationError](#schemacdr-dynamic-client-registration-apiregistrationerror)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Request failed due to unknown or invalid Client or invalid access token|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|The client does not have permission to read, update or delete the Client|None|

<h3 id="cdr-dynamic-client-registration-api_update-data-recipient-registration_response-headers">Response Headers</h3>

|Status|Header|Type|Description|
|---|---|---|---|---|
|401|WWW-Authenticate|[ExternalRef](#common-field-types)|The Response Header Field as per **[[RFC6750]](#nref-RFC6750)**|

  
    
      <aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
<a href="#authorisation-scopes">cdr:registration</a>
</aside>

    
  

<h2 id="cdr-dynamic-client-registration-api_delete-data-recipient-oauth-client-registration">Delete Data Recipient oAuth Client Registration</h2>
<p id="delete-data-recipient-oauth-client-registration" class="orig-anchor"></p>

> Code samples

```http
DELETE https://data.holder.com.au/register/{ClientId} HTTP/1.1
Host: data.holder.com.au
Authorization: string
```

```javascript--nodejs
const fetch = require('node-fetch');
const headers = {
  'Authorization':'string'
};

fetch('https://data.holder.com.au/register/{ClientId}', {
  method: 'DELETE',
  headers: headers
}).then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

`DELETE /register/{ClientId}`

Delete a Client Registration for a given Client ID.

<h3 id="cdr-dynamic-client-registration-api_delete-data-recipient-oauth-client-registration_endpoint-version">Endpoint Version</h3>
|   |  |
|---|--|
|Version|**Versioning is not supported for this endpoint**

<h3 id="cdr-dynamic-client-registration-api_delete-data-recipient-oauth-client-registration_parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ClientId|path|string|mandatory|The client ID issued by the target Data Holder|
|Authorization|header|[ExternalRef](#common-field-types)|mandatory|An Authorisation Token as per **[[RFC6750]](#nref-RFC6750)**|

<h3 id="cdr-dynamic-client-registration-api_delete-data-recipient-oauth-client-registration_responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Client deleted|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Request failed due to unknown or invalid Client or invalid access token|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|The client does not have permission to read, update or delete the Client|None|
|405|[Method Not Allowed](https://tools.ietf.org/html/rfc7231#section-6.5.5)|Method Not Allowed. The requested method is unsupported|None|

<h3 id="cdr-dynamic-client-registration-api_delete-data-recipient-oauth-client-registration_response-headers">Response Headers</h3>

|Status|Header|Type|Description|
|---|---|---|---|---|
|401|WWW-Authenticate|[ExternalRef](#common-field-types)|The Response Header Field as per **[[RFC6750]](#nref-RFC6750)**|

  
    
      <aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
<a href="#authorisation-scopes">cdr:registration</a>
</aside>

    
  

<h2 class="schema-heading" id="cdr-dynamic-client-registration-api-schemas">Schemas</h2>

<h3 class="schema-toc" id="cdr-dynamic-client-registration-api_schemas_tocSclientregistrationrequest">ClientRegistrationRequest</h3>
<p id="tocSclientregistrationrequest" class="orig-anchor"></p>

<p>
  <a id="cdr-dynamic-client-registration-api_schema-base_clientregistrationrequest"></a>
  <a class="schema-anchor" id="schemacdr-dynamic-client-registration-apiclientregistrationrequest"></a>
</p>

```json
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
```

*The registration request JWT to be used to register with a Data Holder. The schema of the payload section of the decoded string(JWT) is defined in [ClientRegistration](#cdr-dynamic-client-registration-api_schemas_tocSclientregistration).*

<h3 id="cdr-dynamic-client-registration-api_clientregistrationrequest_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|*anonymous*|string(JWT)|mandatory|The registration request JWT to be used to register with a Data Holder. The schema of the payload section of the decoded string(JWT) is defined in [ClientRegistration](#cdr-dynamic-client-registration-api_schemas_tocSclientregistration).|

<h3 class="schema-toc" id="cdr-dynamic-client-registration-api_schemas_tocSregistrationproperties">RegistrationProperties</h3>
<p id="tocSregistrationproperties" class="orig-anchor"></p>

<p>
  <a id="cdr-dynamic-client-registration-api_schema-base_registrationproperties"></a>
  <a class="schema-anchor" id="schemacdr-dynamic-client-registration-apiregistrationproperties"></a>
</p>

```json
{
  "client_id": "2cfefa98-7d4a-4bcb-95da-47063b84d410",
  "client_id_issued_at": 1574398833,
  "client_name": "Mock Software",
  "client_description": "A mock software product",
  "client_uri": "https://www.mockcompany.com.au",
  "legal_entity_id": "3B0B0A7B-3E7B-4A2C-9497-E357A71D07C7",
  "legal_entity_name": "Mock Company Pty Ltd.",
  "org_id": "3B0B0A7B-3E7B-4A2C-9497-E357A71D07C8",
  "org_name": "Mock Company Brand",
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
    "client_credentials",
    "authorization_code",
    "refresh_token"
  ],
  "response_types": [
    "code"
  ],
  "application_type": "web",
  "id_token_signed_response_alg": "PS256",
  "id_token_encrypted_response_alg": "RSA-OAEP",
  "id_token_encrypted_response_enc": "A256GCM",
  "authorization_signed_response_alg": "PS256",
  "authorization_encrypted_response_alg": "RSA-OAEP",
  "authorization_encrypted_response_enc": "A128CBC-HS256",
  "request_object_signing_alg": "PS256",
  "software_statement": "string",
  "software_id": "740C368F-ECF9-4D29-A2EA-0514A66B0CDE",
  "software_roles": "data-recipient-software-product",
  "scope": "openid profile bank:accounts.basic:read bank:accounts.detail:read bank:transactions:read bank:payees:read bank:regular_payments:read common:customer.basic:read common:customer.detail:read cdr:registration"
}
```

<h3 id="cdr-dynamic-client-registration-api_registrationproperties_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|client_id|string|mandatory|Data Holder issued client identifier string|
|client_id_issued_at|[ExternalRef](#common-field-types)|optional|Time at which the client identifier was issued expressed as seconds since 1970-01-01T00:00:00Z as measured in UTC|
|client_name|string|mandatory|Human-readable string name of the software product to be presented to the end-user during authorization|
|client_description|string|mandatory|Human-readable string name of the software product description to be presented to the end user during authorization|
|client_uri|[URIString](#common-field-types)|mandatory|URL string of a web page providing information about the client|
|legal_entity_id|string|optional|A unique identifier string assigned by the CDR Register that identifies the Accredited Data Recipient Legal Entity|
|legal_entity_name|string|optional|Human-readable string name of the Accredited Data Recipient Legal Entity|
|org_id|string|mandatory|A unique identifier string assigned by the CDR Register that identifies the Accredited Data Recipient Brand|
|org_name|string|mandatory|Human-readable string name of the Accredited Data Recipient to be presented to the end user during authorization|
|redirect_uris|[[URIString]](#common-field-types)|mandatory|Array of redirection URI strings for use in redirect-based flows. If used, redirect_uris MUST match or be a subset of the redirect_uris as defined in the SSA|
|sector_identifier_uri|[URIString](#common-field-types)|optional|URL string referencing the client sector identifier URI, used as an optional input to the Pairwise Identifier|
|logo_uri|[URIString](#common-field-types)|mandatory|URL string that references a logo for the client. If present, the server SHOULD display this image to the end-user during approval|
|tos_uri|[URIString](#common-field-types)|optional|URL string that points to a human-readable terms of service document for the Software Product|
|policy_uri|[URIString](#common-field-types)|optional|URL string that points to a human-readable policy document for the Software Product|
|jwks_uri|[URIString](#common-field-types)|mandatory|URL string referencing the client JSON Web Key (JWK) Set **[[RFC7517]](#nref-RFC7517)** document, which contains the client public keys|
|revocation_uri|[URIString](#common-field-types)|optional|URI string that references the location of the Software Product consent revocation endpoint|
|recipient_base_uri|[URIString](#common-field-types)|optional|Base URI for the Consumer Data Standard Data Recipient endpoints. This should be the base to provide reference to all other Data Recipient Endpoints|
|token_endpoint_auth_method|[Enum](#common-field-types)|mandatory|The requested authentication method for the token endpoint|
|token_endpoint_auth_signing_alg|[Enum](#common-field-types)|mandatory|The algorithm used for signing the JWT|
|grant_types|[[Enum](#common-field-types)]|mandatory|Array of OAuth 2.0 grant type strings that the client can use at the token endpoint|
|response_types|[[Enum](#common-field-types)]|mandatory|Array of the OAuth 2.0 response type strings that the client can use at the authorization endpoint.<br><br>Response type value `code` is required for Authorization Code Flow. Response type value `code id_token` is required for OIDC Hybrid Flow.|
|application_type|[Enum](#common-field-types)|optional|Kind of the application. The only supported application type will be `web`|
|id_token_signed_response_alg|[Enum](#common-field-types)|mandatory|Algorithm with which an id_token is to be signed|
|id_token_encrypted_response_alg|[ExternalRef](#common-field-types)|conditional|JWE `alg` algorithm with which an id_token is to be encrypted.<br/><br/>Required if OIDC Hybrid Flow (response type `code id_token`) is registered.|
|id_token_encrypted_response_enc|[ExternalRef](#common-field-types)|conditional|JWE `enc` algorithm with which an id_token is to be encrypted.<br/><br/>Required if OIDC Hybrid Flow (response type `code id_token`) is registered.|
|authorization_signed_response_alg|[Enum](#common-field-types)|conditional|The JWS `alg` algorithm required for signing authorization responses. If this is specified, the response will be signed using JWS and the configured algorithm. The algorithm “none” is not allowed.<br><br>Required if response_type of “code” is registered by the client.|
|authorization_encrypted_response_alg|[Enum](#common-field-types)|conditional|The JWE `alg` algorithm required for encrypting authorization responses. If unspecified, the default is that no encryption is performed.<br><br>Required if “authorization_encrypted_response_enc” is included.|
|authorization_encrypted_response_enc|[Enum](#common-field-types)|optional|The JWE `enc` algorithm required for encrypting authorization responses. If “authorization_encrypted_response_alg” is specified, the default for this value is “A128CBC-HS256”.|
|request_object_signing_alg|[Enum](#common-field-types)|mandatory|Algorithm which the ADR expects to sign the request object if a request object will be part of the authorization request sent to the Data Holder|
|software_statement|string(JWT)|mandatory|The Software Statement Assertion, as defined in CDR standards|
|software_id|string|mandatory|String representing a unique identifier assigned by the Register and used by registration endpoints to identify the software product to be dynamically registered. </br></br>The "software_id" will remain the same for the lifetime of the product, across multiple updates and versions|
|software_roles|[Enum](#common-field-types)|optional|String containing a role of the software in the CDR Regime. Initially the only value used will be `data-recipient-software-product`|
|scope|string|mandatory|String containing a space-separated list of scope values that the client can use when requesting access tokens.|

<h4 id="cdr-dynamic-client-registration-api_registrationproperties_enumerated-values-main">Enumerated Values</h4>

|Property|Value|
|---|---|
|token_endpoint_auth_method|private_key_jwt|
|token_endpoint_auth_signing_alg|PS256|
|token_endpoint_auth_signing_alg|ES256|
|grant_types|client_credentials|
|grant_types|authorization_code|
|grant_types|refresh_token|
|response_types|code|
|response_types|code id_token|
|application_type|web|
|id_token_signed_response_alg|PS256|
|id_token_signed_response_alg|ES256|
|authorization_signed_response_alg|PS256|
|authorization_signed_response_alg|ES256|
|authorization_encrypted_response_alg|RSA-OAEP|
|authorization_encrypted_response_alg|RSA-OAEP-256|
|authorization_encrypted_response_enc|A256GCM|
|authorization_encrypted_response_enc|A128CBC-HS256|
|request_object_signing_alg|PS256|
|request_object_signing_alg|ES256|
|software_roles|data-recipient-software-product|

<h3 class="schema-toc" id="cdr-dynamic-client-registration-api_schemas_tocSclientregistration">ClientRegistration</h3>
<p id="tocSclientregistration" class="orig-anchor"></p>

<p>
  <a id="cdr-dynamic-client-registration-api_schema-base_clientregistration"></a>
  <a class="schema-anchor" id="schemacdr-dynamic-client-registration-apiclientregistration"></a>
</p>

```json
{
  "iss": "CDR Software Product ID",
  "iat": 1571808167,
  "exp": 2147483646,
  "jti": "37747cd1c10545699f754adf28b73e31",
  "aud": "https://secure.api.dataholder.com/issuer",
  "client_id": "2cfefa98-7d4a-4bcb-95da-47063b84d410",
  "client_id_issued_at": 1574398833,
  "client_name": "Mock Software",
  "client_description": "A mock software product",
  "client_uri": "https://www.mockcompany.com.au",
  "legal_entity_id": "3B0B0A7B-3E7B-4A2C-9497-E357A71D07C7",
  "legal_entity_name": "Mock Company Pty Ltd.",
  "org_id": "3B0B0A7B-3E7B-4A2C-9497-E357A71D07C8",
  "org_name": "Mock Company Brand",
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
    "client_credentials",
    "authorization_code",
    "refresh_token"
  ],
  "response_types": [
    "code"
  ],
  "application_type": "web",
  "id_token_signed_response_alg": "PS256",
  "id_token_encrypted_response_alg": "RSA-OAEP",
  "id_token_encrypted_response_enc": "A256GCM",
  "authorization_signed_response_alg": "PS256",
  "authorization_encrypted_response_alg": "RSA-OAEP",
  "authorization_encrypted_response_enc": "A128CBC-HS256",
  "request_object_signing_alg": "PS256",
  "software_statement": "string",
  "software_id": "740C368F-ECF9-4D29-A2EA-0514A66B0CDE",
  "software_roles": "data-recipient-software-product",
  "scope": "openid profile bank:accounts.basic:read bank:accounts.detail:read bank:transactions:read bank:payees:read bank:regular_payments:read common:customer.basic:read common:customer.detail:read cdr:registration"
}
```

<h3 id="cdr-dynamic-client-registration-api_clientregistration_properties">Properties</h3>

*allOf*

|Name|Type|Required|Description|
|---|---|---|---|
|*anonymous*|object|mandatory|none|
|» iss|string|mandatory|Contains the identifier for the ADR Software Product (SoftwareProductId) as defined in the CDR Register|
|» iat|[ExternalRef](#common-field-types)|mandatory|The time at which the request was issued by the Data Recipient expressed as seconds since 1970-01-01T00:00:00Z as measured in UTC|
|» exp|[ExternalRef](#common-field-types)|mandatory|The time at which the request expires expressed as seconds since 1970-01-01T00:00:00Z as measured in UTC|
|» jti|string|mandatory|Unique identifier for the JWT, used to prevent replay of the token|
|» aud|[URIString](#common-field-types)|mandatory|Contains the Data Holder issuer value as described in the OIDC Discovery Document|

*and*

|Name|Type|Required|Description|
|---|---|---|---|
|*anonymous*|[RegistrationProperties](#schemacdr-dynamic-client-registration-apiregistrationproperties)|mandatory|none|

<h3 class="schema-toc" id="cdr-dynamic-client-registration-api_schemas_tocSregistrationerror">RegistrationError</h3>
<p id="tocSregistrationerror" class="orig-anchor"></p>

<p>
  <a id="cdr-dynamic-client-registration-api_schema-base_registrationerror"></a>
  <a class="schema-anchor" id="schemacdr-dynamic-client-registration-apiregistrationerror"></a>
</p>

```json
{
  "error": "invalid_redirect_uri",
  "error_description": "string"
}
```

<h3 id="cdr-dynamic-client-registration-api_registrationerror_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|error|[Enum](#common-field-types)|mandatory|Predefined error code as described in [section 3.3 OIDC Dynamic Client Registration](https://openid.net/specs/openid-connect-registration-1_0.html)|
|error_description|[ASCIIString](#common-field-types)|optional|Additional text description of the error for debugging.|

<h4 id="cdr-dynamic-client-registration-api_registrationerror_enumerated-values-main">Enumerated Values</h4>

|Property|Value|
|---|---|
|error|invalid_redirect_uri|
|error|invalid_client_metadata|
|error|invalid_software_statement|
|error|unapproved_software_statement|

