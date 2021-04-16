<a id="client-authentication"></a>
## Client Authentication

This section outlines how participants in the CDR regime will authenticate clients seeking access to end points.

Note that, while **[MTLS]** is utilised for transaction security and as a Holder of Key mechanism, the PKI Mutual TLS OAuth Client Authentication Method SHALL NOT be supported as the mechanism for client authentication.

### CDR Register calling Data Holders and Data Recipients

> Non-Normative Example - CDR Register calls the Data holder's Get Metrics end point with Client Authentication (note that the “aud” claim represents the AdminBaseUri as defined in CDR Register Participant Endpoints).

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

Data Holders and Data Recipients MUST support the authentication of the CDR Register using a signed JWT according to the following requirements:

*	The JWT MUST contain the following REQUIRED Claim Values and MAY contain the following OPTIONAL Claim Values:
    * `iss` - REQUIRED. Issuer. This MUST contain the static CDR Register id of ‘cdr-register’.
    * `sub` - REQUIRED. Subject. This MUST contain the static CDR Register id of ‘cdr-register’.
    * `aud` - REQUIRED. Audience. The aud (audience) Claim. Value that identifies the intended audience. The Data Holder or Data Recipient MUST verify that it is an intended audience for the token. Contents MUST be the base URI for the end point being accessed.
    * `jti` - REQUIRED. JWT ID. A unique identifier for the token, which can be used to prevent reuse of the token. These tokens MUST only be used once.
    * `exp` - REQUIRED. Expiration time on or after which the ID Token MUST NOT be accepted for processing.
    * `iat` - OPTIONAL. Time at which the JWT was issued.
*	Validation and use of the JWT and the claims described above MUST be performed in accordance with [JWT]
*	The JWT should be accepted from the client using the "Authorization Request Header Field" mechanism as described in [section 2.1 of RFC6750](https://tools.ietf.org/html/rfc6750)

### Data Holders calling Data Recipients

> Non-Normative Example - Data Holder calls the Data Recipient's revocation end point (note that the “aud” claim is the fully qualified path to the revocation end point because the full path is also the Base URI).

```
POST https://data.recipient.com.au/revocation HTTP/1.1
Host: data.recipient.com.au
Content-Type: application/x-www-form-urlencoded
Authorization: Bearer eyJhbGciOiJQUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjEyNDU2In0.ey …

token=45ghiukldjahdnhzdauz&token_type_hint=refresh_token

## Decoded Bearer token JWT
{
   "alg":"PS256",
   "typ":"JWT",
   "kid":"67890"
}
{
   "iss":"dataholderbrand-123",
   "sub":"dataholderbrand-123",
   "aud":"https://data.recipient.com.au/revocation",
   "iat":1516239022,
   "exp":1516239322,
   "jti":"dba86502-7cf5-4719-9638-c5339a0ddb06"
}
```

Data Recipients MUST support the authentication of Data Holders using a signed JWT according to the following requirements:

*	The JWT MUST contain the following REQUIRED Claim Values and MAY contain the following OPTIONAL Claim Values:
    *	`iss` - REQUIRED. Issuer. This MUST contain the id of the Data Holder obtained from the CDR Register.
    *	`sub` - REQUIRED. Subject. This MUST contain the id of the Data Holder obtained from the CDR Register.
    *	`aud` - REQUIRED. Audience. The aud (audience) Claim. Value that identifies the Data Recipient as the intended audience. The Data Recipient MUST verify that it is an intended audience for the token. Contents MUST be the base URI for the end point being accessed.
    *	`jti` - REQUIRED. JWT ID. A unique identifier for the token, which can be used to prevent reuse of the token. These tokens MUST only be used once.
    *	`exp` - RE	QUIRED. Expiration time on or after which the ID Token MUST NOT be accepted for processing.
    *	`iat` - OPTIONAL. Time at which the JWT was issued.
*	Validation and use of the JWT and the claims described above MUST be performed in accordance with [JWT]
*	The JWT should be accepted from the client using the "Authorization Request Header Field" mechanism as described in [section 2.1 of RFC6750](https://tools.ietf.org/html/rfc6750)


### Data Recipients calling Data Holders

Data Holders MUST support the authentication of Data Recipients using the `private_key_jwt` Client Authentication method specified at [section 9](https://openid.net/specs/openid-connect-core-1_0.html#ClientAuthentication) of **[OIDC]**.

> Non-Normative Example - Data Recipient calls Data Holder's token end point.

```
POST /token HTTP/1.1
Host: www.holder.com.au
Content-Type: application/x-www-form-urlencoded

grant_type=authorization_code&
  code=i1WsRn1uB1&
  client_id=s6BhdRkqt3&
  client_assertion_type=urn%3Aietf%3Aparams%3Aoauth%3Aclient-assertion-type%3Ajwt-bearer&
  client_assertion=eyJhbGciOiJQUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjEyNDU2In0.ey ...

## Decoded client assertion JWT
{
  "alg": "PS256",
  "typ": "JWT",
  "kid": "12456"
}
{
  "iss": "12345",
  "sub": "12345",
  "iat": 1516239022,
  "exp": 1516239322,
  "aud": "https://www.holder.com.au/token",
  "jti": "37747cd1-c105-4569-9f75-4adf28b73e31"
}
```

The `private_key_jwt` authentication method is enabled through the delivery of an encoded **[JWT]** signed using the Data Recipient's private key and thus facilitates non-repudiation.

Client public keys are obtained from the **[JWKS]** endpoints.

For the client authentication assertion, the **[JWT]** represents an assertion that MUST include the following claims:

- `iss`: The client ID of the bearer.
- `sub`: The client ID of the bearer.
- `aud`: The aud (audience) Claim. Identifies the recipients that the JWT is intended for.<br/>
      **Until March 31st, 2021**, Data Recipients MUST continue to send as a single value string the URL of the endpoint being invoked. Data Holders MUST support validation of the URL of the endpoint being invoked.<br/>
      **After March 30th, 2021**, Data Holders MUST support:<br/> The issuer identifier URL of the authorisation server according to **[RFC8414]** SHOULD be used as the value of the audience. In order to facilitate interoperability, the authorisation server MUST accept its Issuer Identifier, Token Endpoint URL, or the URI of the endpoint being invoked as values that identify it as an intended audience.<br/>

- `exp`: A JSON number representing the number of seconds from 1970-01-01T00:00:00Z to the UTC expiry time.
- `jti`: A unique identifier generated by the client for this authentication.

The following claims MAY be included:

- `iat`: A JSON number representing the number of seconds from 1970-01-01T00:00:00Z to the UTC issued at time.

When invoking a protected end point, the aforementioned assertion MUST be sent with the `POST` method and MUST include the following parameters:

-  `grant_type`: This parameter MUST only be included when invoking the Token End point and MUST be set to `authorisation_code` or `client_credentials`.  The value `refresh_token` is also valid when refreshing an access token.
-  `code`: This parameter MUST only be included when invoking the Token End point after utilising the [Hybrid Authentication flow](#hybrid-flow).  This is the value of the code parameter returned in the authorisation response.
-  `client_id`: The ID of the calling Client.
-  `client_assertion_type`: This MUST be set to `urn:ietf:params:oauth:client-assertion-type:jwt-bearer`.
-  `client_assertion`: The encoded assertion JWT.
