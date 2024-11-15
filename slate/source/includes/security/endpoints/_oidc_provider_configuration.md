### OpenID Provider Configuration endpoint

> Non-Normative Example

```
## Request
GET /.well-known/openid-configuration HTTP/1.1
Host: www.dh.com.au

## Response - FAPI 1.0 Final Phase 3 Obligations
HTTP/1.1 200 OK
Content-Type: application/json
{
  "acr_values_supported": ["urn:cds.au:cdr:2", "urn:cds.au:cdr:3"],
  "authorization_endpoint": "https://www.dh.com.au/authorise",
  "claims_supported": ["name", "given_name", "family_name", "acr", "auth_time", "sub"],
  "grant_types_supported": ["authorization_code", "client_credentials", "urn:openid:params:modrna:grant-type:backchannel_request"],
  "id_token_encryption_alg_values_supported": ["RSA-OAEP", "RSA-OAEP-256", "dir", "ECDH-ES", "ECDH-ES+A128KW", "ECDH-ES+A192KW", "ECDH-ES+A256KW", "A128KW", "A192KW", "A256KW", "A128GCMKW", "A192GCMKW", "A256GCMKW"],
  "id_token_encryption_enc_values_supported": ["A128CBC-HS256", "A192CBC-HS384", "A256CBC-HS512", "A128GCM", "A192GCM", "A256GCM"],
  "id_token_signing_alg_values_supported": ["ES256", "PS256"],
  "issuer": "https://www.dh.com.au",
  "jwks_uri": "https://www.dh.com.au/jwks",
  "registration_endpoint": "https://www.dh.com.au/register",
  "request_object_signing_alg_values_supported": ["ES256", "PS256"],
  "response_modes_supported": ["fragment", "jwt"],
  "response_types_supported": ["code id_token", "code"],
  "subject_types_supported": ["pairwise"],
  "scopes_supported": ["openid", "profile", "..."],
  "token_endpoint": "https://www.dh.com.au/token",
  "token_endpoint_auth_methods_supported": ["private_key_jwt"],
  "token_endpoint_auth_signing_alg_values_supported": ["ES256", "PS256"],
  "userinfo_endpoint": "https://www.dh.com.au/userinfo",

  "code_challenge_methods_supported": ["S256"],
  "introspection_endpoint": "https://www.dh.com.au/introspect",
  "revocation_endpoint": "https://www.dh.com.au/revoke",

  "tls_client_certificate_bound_access_tokens": true,

  "pushed_authorization_request_endpoint": "https://data.holder.com.au/par",
  "require_pushed_authorization_requests": true,

  "authorization_encryption_alg_values_supported": ["RSA-OAEP", "RSA-OAEP-256"],

  "authorization_encryption_enc_values_supported": ["A256GCM", "A128CBC-HS256"],
  "authorization_signing_alg_values_supported": ["ES256", "PS256"],

  "cdr_arrangement_revocation_endpoint": "https://data.holder.com.au/arrangements/revoke"
}
```

| Description | Value |
|---|---|
| Hosted By | Data Holder |
| Transport Security | TLS |
| Client Authentication Required| No|
| Bearer Token Required| No|

Data Holders MUST make their OpenID Provider Metadata available via a configuration endpoint as outlined in [Section 3 and 4 of the OpenID Connect Discovery standards](https://openid.net/specs/openid-connect-discovery-1_0.html) **[[OIDD]](#nref-OIDD)**.

This endpoint does not require [CORS](https://consumerdatastandardsaustralia.github.io/standards/#cors).

At a minimum, the Data Holder metadata **MUST** include:

**[[OIDD]](#nref-OIDD)**

- _acr_values_supported_: The supported ACR values.
- _authorization_endpoint_: URL of the Authorization endpoint.
- _claims_supported_: The list of supported claims.
- _grant_types_supported_: The list of the OAuth 2.0 Grant Type values supported.
- _id_token_encryption_alg_values_supported_: The list of the supported JWE algorithms for securing the issued ID tokens. Must conform to **[[FAPI-1.0-Advanced]](#nref-FAPI-1-0-Advanced)** and **[[OIDD]](#nref-OIDD)**. Required for Data Holders supporting OIDC Hybrid Flow.
- _id_token_encryption_enc_values_supported_: The list of the supported JWE encryption methods for securing the issued ID tokens. Required for Data Holders supporting OIDC Hybrid Flow.
- _id_token_signing_alg_values_supported_: The list of the JWS signing algorithms (_alg_ values) supported.
- _issuer_: URL that the Data Holder asserts as its Issuer Identifier.
- _jwks_uri_: The JSON Web Key Set for the data holder.
- _registration_endpoint_: URL of the Client Registration endpoint.
- _request_object_signing_alg_values_supported_: The list of the JWS signing algorithms (_alg_ values) supported for signing request objects.
- _response_modes_supported_: The list of the OAuth 2.0 _response_mode_ values supported.
- _response_types_supported_: The list of the OAuth 2.0 _response_type_ values supported.
- _scopes_supported_: The list of supported scopes.
- _subject_types_supported_: list of the Subject Identifier types supported.
- _token_endpoint_: URL of the Token endpoint.
- _token_endpoint_auth_methods_supported_: The list of Client Authentication methods supported by the Token Endpoint.
- _token_endpoint_auth_signing_alg_values_supported_: The list of the JWS signing algorithms (_alg_ values) supported by the token endpoint for the signature on the JWT **[[JWT]](#nref-JWT)** used to authenticate the client at the token endpoint for the `private_key_jwt` authentication method.
- _userinfo_endpoint_: URL of the UserInfo endpoint.

**[[RFC8414]](#nref-RFC8414)**

- _code_challenge_methods_supported_: JSON array containing a list of **[[PKCE (RFC7636)]](#nref-PKCE)** code challenge methods supported.
- _introspection_endpoint_: URL of the Introspection endpoint.
- _revocation_endpoint_: URL of the Revocation endpoint.

**[[MTLS]](#nref-MTLS)**

- _tls_client_certificate_bound_access_tokens_: Indicates support for mutual-TLS client certificate-bound access tokens. Value **MUST** be set to `true`.

**[[RFC9126]](#nref-RFC9126)**

- _pushed_authorization_request_endpoint_: URL of the Pushed Authorisation endpoint used to support **[[PAR]](#nref-PAR)**.
- _require_pushed_authorization_requests_: Boolean parameter indicating whether the authorization server accepts authorization request data only via PAR.

**[[JARM]](#nref-JARM)**

- _authorization_encryption_alg_values_supported_: A JSON array containing a list of the JWE encryption algorithms (_alg_ values) supported by the authorization endpoint to encrypt the response. If response encryption is used, Data Holders must support at least one of `RSA-OAEP` or `RSA-OAEP-256`.

Where Data Holders support authorisation response encryption according to **[[JARM]](#nref-JARM)**, the following parameter provisions **MUST** be supported:

- _authorization_encryption_enc_values_supported_: A JSON array containing a list of the JWE encryption algorithms (_enc_ values) supported by the authorization endpoint to encrypt the response. Required if _authorization_encryption_alg_values_supported_ is provided. If response encryption is used, Data Holders must support at least one of `A256GCM` or `A128CBC-HS256`.
- _authorization_signing_alg_values_supported_: A JSON array containing a list of the JWS signing algorithms (_alg_ values) supported by the authorization endpoint to sign the response. Required if Authorization Code Flow (response_type `code`) is supported.

In addition, the Data Holder metadata **MUST** also include:

- _cdr_arrangement_revocation_endpoint_: The URL of the CDR Arrangement Revocation endpoint for consent revocation.
