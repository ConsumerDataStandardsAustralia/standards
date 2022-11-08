<a id="client-authentication"></a>
## Client Authentication

This section outlines how participants in the CDR regime will authenticate clients seeking access to end points.

Note that, while **[[MTLS]](#nref-MTLS)** is utilised for transaction security and as a Holder of Key mechanism, the PKI Mutual TLS OAuth Client Authentication Method SHALL NOT be supported as the mechanism for client authentication.

The following authentication methods are supported:

  * Data Holders SHALL authenticate the CDR Register client using one of the following Client Authentication methods:  
      * Self-signed JWT client assertion authenticated by the protected request endpoint according to [Self-signed JWT Client Authentication](#self-signed-jwt-client-authentication), or  
      * `private_key_jwt` authentication using `client_credentials` authorisation grant flow according to [Private Key JWT Client Authentication](#private-key-jwt-client-authentication).<br/>  

  * Data Holders and the CDR Register **MUST** authenticate Data Recipient Software Products using the [Private Key JWT Client Authentication](#private-key-jwt-client-authentication) method.
  * Data Recipient Software Products **MUST** authenticate Data Holders and the CDR Register using the [Self-signed JWT Client Authentication](#self-signed-jwt-client-authentication) method.

#### Private Key JWT Client Authentication

> Private Key JWT Client Authentication Non-Normative Example - CDR Register calls the Data Holder's token end point to obtain an Access Token for the purposes of calling the Data Holder's Get Metrics endpoint.

```
POST /token HTTP/1.1
Host: www.holder.com.au
Content-Type: application/x-www-form-urlencoded

grant_type=client_credentials&
  client_id=5ntwEOpMdPxxy49Gt28SXWY6j3afl2CP2&
  scope=admin%3Ametrics.basic%3Aread&
  client_assertion_type=urn%3Aietf%3Aparams%3Aoauth%3Aclient-assertion-type%3Ajwt-bearer&
  client_assertion=eyJhbGciOiJQUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjEyNDU2In0.ey ...

## Decoded client assertion JWT
{
  "alg": "PS256",
  "typ": "JWT",
  "kid": "12456"
}
{
  "iss": "5ntwEOpMdPxxy49Gt28SXWY6j3afl2CP2",
  "sub": "5ntwEOpMdPxxy49Gt28SXWY6j3aflCP2",
  "iat": 1516239022,
  "exp": 1516239322,
  "aud": "https://www.holder.com.au/token",
  "jti": "37747cd1-c105-4569-9f75-4adf28b73e31"
}
```

Authorisation Servers supporting `private_key_jwt` Client Authentication of clients **MUST** support the following requirements:

* Authorisation Servers **MUST** support the authentication of clients using the `private_key_jwt` Client Authentication method specified at [section 9](https://openid.net/specs/openid-connect-core-1_0.html#ClientAuthentication) of **[[OIDC]](#nref-OIDC)**.
* The `private_key_jwt` authentication method is enabled through the delivery of an encoded **[[JWT]](#nref-JWT)** signed using the Data Recipient Software Product's private key and thus facilitates non-repudiation.
* Client public keys are obtained from the **[[JWKS]](#nref-JWKS)** endpoints.
* For the client authentication assertion, the **[[JWT]](#nref-JWT)** represents an assertion that **MUST** contain the following REQUIRED Claim Values and **MAY** contain the following OPTIONAL Claim Values:
    * `iss` - REQUIRED. Issuer Identifier for the Issuer of the response. The client ID of the bearer.
    * `sub` - REQUIRED. Subject Identifier. The client ID of the bearer.
    * `aud` - REQUIRED. Audience(s) that the JWT is intended for. The issuer identifier URL of the authorisation server according to **[[RFC8414]](#nref-RFC8414)** **SHOULD** be used as the value of the audience. In order to facilitate interoperability, the authorisation server **MUST** accept its Issuer Identifier, Token Endpoint URL, or the URI of the endpoint being invoked as values that identify it as an intended audience.
    * `jti` - REQUIRED. JWT ID. A unique identifier for the token, which can be used to prevent reuse of the token. These tokens **MUST** only be used once.
    * `exp` - REQUIRED. Expiration time on or after which the ID Token **MUST NOT** be accepted for processing. Value is a JSON number representing the number of seconds from 1970-01-01T00:00:00Z to the UTC expiry time.
    * `iat` - OPTIONAL. Time at which the JWT was issued. Value is a JSON number representing the number of seconds from 1970-01-01T00:00:00Z to the UTC issued at time.


* The aforementioned assertion **MUST** be sent to the Authorisation Server's Token endpoint with the `POST` method and **MUST** include the following REQUIRED parameters and **MAY** contain the following OPTIONAL parameters:

    * `grant_type` - REQUIRED. The grant type(s) supported by the Authorisation Server.  
    * `client_id` - REQUIRED. The client ID of the bearer.
    * `client_assertion_type` - REQUIRED. This **MUST** be set to `urn:ietf:params:oauth:client-assertion-type:jwt-bearer`.
    * `client_assertion` - REQUIRED. The encoded assertion JWT.
    * `scope` - OPTIONAL. The requested scope as described in [Section 3.3](https://tools.ietf.org/html/rfc6749#section-3.3) of **[[RFC6749]](#nref-RFC6749)**.

#### Self-signed JWT Client Authentication
> Self-signed JWT Client Authentication Non-Normative Example - CDR Register calls the Data holder's Get Metrics end point using self-signed JWT Client Authentication (note that the “aud” claim represents the AdminBaseUri as defined in CDR Register Participant Endpoints).

```
GET https://admin.data.holder.com.au/cds-au/v1/admin/metrics HTTP:/1.1
Host: admin.data.holder.com.au
x-v: string
x-min-v: string
Authorization: Bearer eyJhbGciOiJQUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjEyNDU2In0.ey ...

## Decoded Bearer token JWT
{
   "alg":"PS256",
   "typ":"JWT",
   "kid":"12456"
}
{
   "iss":"cdr-register",
   "sub":"cdr-register",
   "aud":"https://admin.data.holder.com.au",
   "iat":1516239022,
   "exp":1516239322,
   "jti":"32358102-a44f-43cc-ad7c-42443d01507a"
}
```


Data Recipient Software Products and Data Holders supporting the self-signed JWT authentication of clients using a signed JWT **MUST** do so according to the following requirements:


*	The JWT **MUST** contain the following REQUIRED Claim Values and **MAY** contain the following OPTIONAL Claim Values:
    * `iss` - REQUIRED. Issuer Identifier for the Issuer of the response. The client ID of the bearer.
    * `sub` - REQUIRED. Subject Identifier. The client ID of the bearer.
    * `aud` - REQUIRED. Audience(s) that the JWT is intended for. The Data Holder or Data Recipient Software Product **MUST** verify that it is an intended audience for the token.<br/><br/><p>**_Data Recipient hosted endpoints_**<br/>The [Resource Path](#uri-resource-path) for the end point being accessed **SHOULD** be used.<br/>In order to facilitate interoperability and for Data Recipient Software Product hosted endpoints only, the endpoint **MUST** also accept the ``<RecipientBaseUri>`` as a value identifying the intended audience.<br/>**From July 31st 2022:** The Resource Path for the end point being accessed **MUST** be used.</p><p>**_Data Holder Metrics endpoints_**<br/>The ``<AdminBaseUri>`` for the end point being accessed **MUST** be used.</p>
    * `jti` - REQUIRED. JWT ID. A unique identifier for the token, which can be used to prevent reuse of the token. These tokens **MUST** only be used once.
    * `exp` - REQUIRED. Expiration time on or after which the ID Token **MUST NOT** be accepted for processing. Value is a JSON number representing the number of seconds from 1970-01-01T00:00:00Z to the UTC expiry time.
    * `iat` - OPTIONAL. Time at which the JWT was issued. Value is a JSON number representing the number of seconds from 1970-01-01T00:00:00Z to the UTC issued at time.

*	Validation and use of the JWT and the claims described above **MUST** be performed in accordance with **[[JWT]](#nref-JWT)**.  
*	The JWT **MUST** be accepted from the client at the requested endpoint using the "Authorization Request Header Field" mechanism as described in [section 2.1](https://tools.ietf.org/html/rfc6750#section-2.1) of **[[RFC6750]](#nref-RFC6750)**.



**Note:** In accordance with `jti` requirements, self-signed JWTs are one-time use only. The authenticating server **MUST** reject JWTs reuse.

### CDR Register calling Data Holders

Data Holders **MUST** support either [Private Key JWT Client Authentication](#private-key-jwt-client-authentication) or [Self-signed JWT Client Authentication](#self-signed-jwt-client-authentication) of the CDR Register.

Data Holders **SHOULD** support [Private Key JWT Client Authentication](#private-key-jwt-client-authentication) but **MAY** support [Self-signed JWT Client Authentication](#self-signed-jwt-client-authentication).

This method **MAY** be changed by updating Data Holder registration details with the CDR Register.

#### Private Key JWT authentication

If the Data Holder supports the [Private Key JWT Client Authentication](#private-key-jwt-client-authentication) method for authenticating the CDR Register, it **MUST** also support the following requirements:

* Data Holders **MUST** issue a client ID that is provided to the CDR Register. The client ID is issued to the CDR Register during out of band registration processes, including, Data Holder onboarding. This **MAY** be a static client ID value of ‘cdr-register’.
* The authorisation grant's `grant_type` parameter **MUST** be set to `client_credentials`.  
* The authorisation grant's `scope` parameter **MUST** be provided and **MUST** be set to the scope of the resource endpoint to be accessed.
* Upon successful authentication, Data Holders **MUST** issue an Access Token to the CDR Register. In accordance with [section 4.4](https://tools.ietf.org/html/rfc6749#section-4.4) of **[[RFC6749]](#nref-RFC6749)** an Refresh Token **SHOULD** NOT be included.

#### Self-signed JWT authentication

If the Data Holder supports the [Self-signed JWT Client Authentication](#self-signed-jwt-client-authentication) method for authenticating the CDR Register, the client ID **MUST** be set to a value of `cdr-register`.



### Data Holders calling Data Recipients

> Non-Normative Example - Data Holder calls the Data Recipient Software Product's CDR Arrangement Revocation end point (note that the "aud" claim is "resource path" to the revocation end point).

```
POST https://data.recipient.com.au/arrangements/revoke HTTP/1.1
Host: data.recipient.com.au
Content-Type: application/x-www-form-urlencoded
Authorization: Bearer eyJhbGciOiJQUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjEyNDU2In0.ey …

cdr_arrangement_jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImtpZCI6IjEyNDU2In0.ey ...

## Decoded Bearer token JWT
{
   "alg":"PS256",
   "typ":"JWT",
   "kid":"12456"
}
{
   "iss":"dataholderbrand-123",
   "sub":"dataholderbrand-123",
   "aud":"https://data.recipient.com.au/arrangements/revoke",
   "iat":1516239022,
   "exp":1516239322,
   "jti":"dba86502-7cf5-4719-9638-c5339a0ddb06"
}
```


> Non-Normative Example - Data Recipient Software Product calls Data Holder's token end point.
This example uses PKCE to send the code_verifier which was previously encrypted in the request object submission as the code_challenge using S256 as the code_challenge_method

```
POST /token HTTP/1.1
Host: www.holder.com.au
Content-Type: application/x-www-form-urlencoded

grant_type=authorization_code&
  code=i1WsRn1uB1&
  client_id=s6BhdRkqt3&
  code_verifier=4d9213fb-d68b-49d1-a2c9-486e5a0b4e14&
  client_assertion_type=urn%3Aietf%3Aparams%3Aoauth%3Aclient-assertion-type%3Ajwt-bearer&
  client_assertion=eyJhbGciOiJQUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjEyNDU2In0.ey ...

## Decoded client assertion JWT
{
  "alg": "PS256",
  "typ": "JWT",
  "kid": "12456"
}
{
  "iss": "s6BhdRkqt3",
  "sub": "s6BhdRkqt3",
  "iat": 1516239022,
  "exp": 1516239322,
  "aud": "https://www.holder.com.au/token",
  "jti": "37747cd1-c105-4569-9f75-4adf28b73e31"
}
```

In addition to the requirements for [Self-signed JWT Client Authentication](#self-signed-jwt-client-authentication), the `client_id` is the `Data Holder Brand ID` as issued by CDR Register.



### Data Recipients calling Data Holders

In addition to the requirements for [Private Key JWT Client Authentication](#private-key-jwt-client-authentication) the following requirements **MUST** be supported:

* The client ID represents the ID issued to the Data Recipient Software Product by the Data Holder upon successful dynamic client registration.
* The authorisation grant's `client_id` parameter value **MUST** represent the ID issued to the Data Recipient Software Product by the Data Holder upon successful dynamic client registration.
* The authorisation grant's `grant_type` parameter value **MUST** only be included when invoking the Token End point and **MUST** be set to `authorisation_code` or `client_credentials`. The value `refresh_token` is also valid when refreshing an access token.



### Data Recipients calling the CDR Register


> Non-Normative Example - Data Recipient Software Product requests CDR Register Access Token

```
POST /token HTTP/1.1
Host: cdr.register
Content-Type: application/x-www-form-urlencoded

grant_type=client_credentials&
  client_id=<brand id> OR <software product id> &
  client_assertion_type=urn%3Aietf%3Aparams%3Aoauth%3Aclient-assertion-type%3Ajwt-bearer&
  client_assertion=eyJhbGciOiJQUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjEyNDU2In0.ey ...&
  scope=cdr-register%3Abank%3Aread

## Decoded client assertion JWT
{
  "alg": "PS256",
  "typ": "JWT",
  "kid": "b50641343f8f4717a4865d238b6297b8"
}
{
  "iss": "<brand id> OR <software product id>",
  "sub": "<brand id> OR <software product id>",
  "exp": 1516239322,
  "aud": "https://cdr.register/idp/connect/token",
  "jti": "37747cd1-c105-4569-9f75-4adf28b73e31"
}


## Response
{
    "access_token": "eyJhbGciOiJQUz...",
    "expires_in": 7200,
    "token_type": "Bearer",
    "scope": "cdr-register:bank:read openid"
}
```

In addition to the requirements for [Private Key JWT Client Authentication](#private-key-jwt-client-authentication) the following requirements **MUST** be supported:

* `grant_type` **MUST** be set to `client_credentials`
* Refresh tokens will not be provided for grant_type `client_credentials`
* `client_id`, `iss` and `sub` claims **MUST** be set to the ID of the calling client `Data Recipient Brand ID` OR `Software Product ID` issued by the CDR Register

<aside class="notice">
<code>Data Recipient Brand ID</code> and <code>Software Product ID</code> are both currently supported as client identifiers for client authentication.
<code>Data Recipient Brand ID</code> as a client identifier will be deprecated in the future and is currently retained for backwards compatibility
</aside>
