
# DCR APIs


This specification defines the APIs for Data Holders exposing Dynamic Client Registration endpoints.

<br>
<table>
<tr><td><a href='./includes/swagger/swagger_dcr.json'>DCR Swagger (JSON)</a></td></tr>
<tr><td><a href='./includes/swagger/swagger_dcr.yaml'>DCR Swagger (YAML)</a></td></tr>
</table>



## Register a client using a CDR Register issued Software Statement Assertion

> Code samples

```HTTP
HTTP/1.1 POST /register
Content-Type: application/jwt
Accept: application/json
x-v: string

```

`POST /register`

> Body parameter

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

<h3 id="register-a-client-using-a-cdr-register-issued-software-statement-assertion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|registrationRequest|body|string(jwt)|true|The registration request JWT, as defined in [Dynamic Client Registration](https://cdr-register.github.io/register/#dynamic-client-registration), to be used to register with a Data Holder.

> Example responses

> 201 Response

```HTTP
HTTP/1.1 201 Created
Content-Type: application/json
```
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

> 400 Responses

```HTTP
HTTP/1.1 400 Bad Request
Content-Type: application/json
```
```json
{
 "error": "invalid_redirect_uri",
 "error_description": "One or more redirect_uri values are invalid"
}
```

```HTTP
HTTP/1.1 400 Bad Request
Content-Type: application/json
```
```json
{
 "error": "invalid_software_statement",
 "error_description": "Duplicate registrations for a given software_id are not invalid"
}
```

<h3 id="register-a-client-using-a-cdr-register-issued-software-statement-assertion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Client registration success|[RegistrationProperties](#schemaregistrationproperties)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Request failed due to client error|[RegistrationError](#schemaregistrationerror)|

<aside class="success">
This operation does not require authentication.
</aside>

## Get a Client Registration for a given Client ID

> Code samples


```HTTP
GET /register/{ClientId} HTTP/1.1
Accept: application/json
Authorization: Bearer <access-token>

```

`GET /register/{ClientId}`

<h3 id="get-a-client-registration-for-a-given-client-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ClientId|path|string|true|The client ID issued by the target Data Holder|
|Authorization|header|string|true|An Authorisation Token as per [RFC6750](https://tools.ietf.org/html/rfc6750)|

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

> 401 Response

```HTTP
HTTP/1.1 401 Unauthorized
WWW-Authenticate:   Bearer error="invalid_token",
                    error_description="The access token expired"
```

<h3 id="get-a-client-registration-for-a-given-client-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Client registration retrieval success|[RegistrationProperties](#schemaregistrationproperties)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Request failed due to unknown or invalid Client or invalid access token|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|The client does not have permission to read, update or delete the Client|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|401|WWW-Authenticate|string||The Response Header Field as per [RFC6750](https://tools.ietf.org/html/rfc6750)|


<aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scope: [cdr:registration](#authorisation-scopes).
</aside>

## Update a Client Registration for a given Client ID

> Code samples


```HTTP
PUT /register/{ClientId} HTTP/1.1
Content-Type: application/jwt
Accept: application/json
Authorization: Bearer <access-token>

```

`PUT /register/{ClientId}`

> Body parameter

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

<h3 id="update-a-client-registration-for-a-given-client-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ClientId|path|string|true|The client ID issued by the target Data Holder|
|Authorization|header|string|true|An Authorisation Token as per [RFC6750](https://tools.ietf.org/html/rfc6750)|
|registrationRequest|body|string(jwt)|true|The registration request JWT, as defined in [Dynamic Client Registration](https://cdr-register.github.io/register/#dynamic-client-registration), to be used to register with a Data Holder.|

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

<h3 id="update-a-client-registration-for-a-given-client-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Client registration update success|[RegistrationProperties](#schemaregistrationproperties)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Request failed due to client error|[RegistrationError](#schemaregistrationerror)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Request failed due to unknown or invalid Client or invalid access token|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|The client does not have permission to read, update or delete the Client|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|401|WWW-Authenticate|string||The Response Header Field as per [RFC6750](https://tools.ietf.org/html/rfc6750)|


<aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scope: [cdr:registration](#authorisation-scopes).
</aside>



## Delete a Client Registration for a given Client ID

> Code samples

```HTTP
DELETE /register/{ClientId} HTTP/1.1
Authorization: Bearer <access-token>

```

`DELETE /register/{ClientId}`

<h3 id="delete-a-client-registration-for-a-given-client-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ClientId|path|string|true|The client ID issued by the target Data Holder|
|Authorization|header|string|true|An Authorisation Token as per [RFC6750](https://tools.ietf.org/html/rfc6750)|

<h3 id="delete-a-client-registration-for-a-given-client-id-responses">Responses</h3>

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
To perform this operation, you must be authenticated and authorised with the following scope: [cdr:registration](#authorisation-scopes).
</aside>


## Schemas

<h2 id="tocSregistrationproperties">RegistrationProperties</h2>

<a id="schemaregistrationproperties"></a>

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

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|client_id|string|true|none|Data Holder issued client identifier string|
|client_id_issued_at|integer(int32)|false|none|Time at which the client identifier was issued expressed as seconds since 1970-01-01T00:00:00Z as measured in UTC|
|client_name|string|true|none|Human-readable string name of the software product to be presented to the end-user during authorization|
|client_description|string|true|none|Human-readable string name of the software product description to be presented to the end user during authorization|
|client_uri|string|true|none|URL string of a web page providing information about the client|
|legal_entity_id|string|false|none|A unique identifier string assigned by the CDR Register that identifies the Accredited Data Recipient Legal Entity|
|legal_entity_name|string|false|none|Human-readable string name of the Accredited Data Recipient Legal Entity|
|org_id|string|true|none|A unique identifier string assigned by the CDR Register that identifies the Accredited Data Recipient Brand|
|org_name|string|true|none|Human-readable string name of the Accredited Data Recipient to be presented to the end user during authorization|
|redirect_uris|[string]|true|none|Array of redirection URI strings for use in redirect-based flows. If used, redirect_uris MUST match or be a subset of the redirect_uris as defined in the SSA|
|sector_identifier_uri|string|false|none|URL string referencing the client sector identifier URI, used as an optional input to the Pairwise Identifier|
|logo_uri|string|true|none|URL string that references a logo for the client. If present, the server SHOULD display this image to the end-user during approval|
|tos_uri|string|false|none|URL string that points to a human-readable terms of service document for the Software Product|
|policy_uri|string|false|none|URL string that points to a human-readable policy document for the Software Product|
|jwks_uri|string|true|none|URL string referencing the client JSON Web Key (JWK) Set [RFC7517] document, which contains the client public keys|
|revocation_uri|string|false|none|URI string that references the location of the Software Product consent revocation endpoint|
|recipient_base_uri|string|false|none|Base URI for the Consumer Data Standard Data Recipient endpoints. This should be the base to provide reference to all other [Data Recipient Endpoints](https://consumerdatastandardsaustralia.github.io/standards/#end-points)|
|token_endpoint_auth_method|string|true|none|The requested authentication method for the token endpoint|
|token_endpoint_auth_signing_alg|string|true|none|The algorithm used for signing the JWT|
|grant_types|[string]|true|none|Array of OAuth 2.0 grant type strings that the client can use at the token endpoint|
|response_types|[string]|true|none|Array of the OAuth 2.0 response type strings that the client can use at the authorization endpoint.|
|application_type|string|false|none|Kind of the application. The only supported application type will be `web`|
|id_token_signed_response_alg|string|false|none|Algorithm with which an id_token is to be signed|
|id_token_encrypted_response_alg|string|true|none|JWE `alg` algorithm with which an id_token is to be encrypted|
|id_token_encrypted_response_enc|string|true|none|JWE `enc` algorithm with which an id_token is to be encrypted|
|request_object_signing_alg|string|true|none|Algorithm which the ADR expects to sign the request object if a request object will be part of the authorization request sent to the Data Holder|
|software_statement|string(JWT)|true|none|The Software Statement Assertion, as defined in [Dynamic Client Registration](https://cdr-register.github.io/register/#dynamic-client-registration)|
|software_id|string|true|none|String representing a unique identifier assigned by the Register and used by registration endpoints to identify the software product to be dynamically registered. </br></br>The "software_id" will remain the same for the lifetime of the product, across multiple updates and versions|
|software_roles|string|false|none|String containing a role of the software in the CDR Regime. Initially the only value used with be `data-recipient-software-product`|
|scope|string|true|none|String containing a space-separated list of scope values that the client can use when requesting access tokens.|

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

<h2 id="tocSclientregistration">ClientRegistration</h2>

<a id="schemaclientregistration"></a>

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

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» iss|string|true|none|Contains the identifier for the ADR Software Product (SoftwareProductId) as defined in the CDR Register|
|» iat|integer(int32)|true|none|The time at which the request was issued by the Data Recipient  expressed as seconds since 1970-01-01T00:00:00Z as measured in UTC|
|» exp|integer(int32)|true|none|The time at which the request expires expressed as seconds since 1970-01-01T00:00:00Z as measured in UTC|
|» jti|string|true|none|Unique identifier for the JWT, used to prevent replay of the token|
|» aud|string|true|none|'Contains the DH issuer value as described in the [OIDC Discovery Document](https://consumerdatastandardsaustralia.github.io/standards/#end-points)''|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[RegistrationProperties](#schemaregistrationproperties)|false|none|none|

<h2 id="tocSregistrationerror">RegistrationError</h2>

<a id="schemaregistrationerror"></a>

```json
{
  "error": "invalid_redirect_uri",
  "error_description": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|Predefined error code as described in [section 3.3 OIDC Dynamic Client Registration](https://openid.net/specs/openid-connect-registration-1_0.html)  </br>`invalid_redirect_uri` - The value of one or more redirection URIs is invalid. </br>`invalid_client_metadata` - The value of one of the client metadata fields is invalid and the server has rejected this request. This error value is also used when attempts at duplicate registrations for the same software_id are rejected </br>`invalid_software_statement` - The software statement presented is invalid. </br>`unapproved_software_statement` - The software statement presented is not approved for use by this authorization server.|
|error_description|string|false|none|Additional text description of the error for debugging.|

#### Enumerated Values

|Property|Value|
|---|---|
|error|invalid_redirect_uri|
|error|invalid_client_metadata|
|error|invalid_software_statement|
|error|unapproved_software_statement|
