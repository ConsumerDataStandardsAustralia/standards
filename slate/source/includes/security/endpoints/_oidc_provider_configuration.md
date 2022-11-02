### OpenID Provider Configuration End Point

> Non-Normative Example

```diff
Updated non-normative example.

Updated parameters:
"response_types_supported" to support Authorization Code Flow ("code")
"response_modes_supported" to support "jwt" for JARM. Note that "fragment" is also a supported JWT response mode

Added required PAR parameter:
+ require_pushed_authorization_requests set to true

Added requied PKCE parameter:
+ code_challenge_methods_supported

Added requied JARM parameter:
+ authorization_signing_alg_values_supported

Added JARM parameters where authorisation response encryption is supported (refer to https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/479 for further details):
+ authorization_encryption_alg_values_supported
+ authorization_encryption_enc_values_supported
```

```
## Request

GET /.well-known/openid-configuration HTTP/1.1
Host: www.dh.com.au

## Response

HTTP/1.1 200 OK
Content-Type: application/json
{
  "issuer": "https://www.dh.com.au",
  "authorization_endpoint": "https://www.dh.com.au/authorise",
  "token_endpoint": "https://www.dh.com.au/token",
  "introspection_endpoint": "https://www.dh.com.au/introspect",
  "revocation_endpoint": "https://www.dh.com.au/revoke",
  "userinfo_endpoint": "https://www.dh.com.au/userinfo",
  "registration_endpoint": "https://www.dh.com.au/register",
  "jwks_uri": "https://www.dh.com.au/jwks",
  "scopes_supported": ["openid", "profile", "..."],
  "response_types_supported": ["code id_token", "code"],
  "response_modes_supported": ["fragment", "jwt"],
  "grant_types_supported": ["authorization_code", "client_credentials", "urn:openid:params:modrna:grant-type:backchannel_request"],
  "acr_values_supported": ["urn:cds.au:cdr:2","urn:cds.au:cdr:3"],
  "subject_types_supported": ["pairwise"],
  "id_token_signing_alg_values_supported": ["ES256", "PS256"],
  "id_token_encryption_alg_values_supported": [ "RSA-OAEP", "RSA-OAEP-256", "dir", "ECDH-ES", "ECDH-ES+A128KW", "ECDH-ES+A192KW", "ECDH-ES+A256KW", "A128KW", "A192KW", "A256KW", "A128GCMKW", "A192GCMKW", "A256GCMKW" ],
  "id_token_encryption_enc_values_supported": [ "A128CBC-HS256", "A192CBC-HS384", "A256CBC-HS512", "A128GCM", "A192GCM", "A256GCM" ],
  "cdr_arrangement_revocation_endpoint": "https://data.holder.com.au/arrangements/revoke",
  "pushed_authorization_request_endpoint": "https://data.holder.com.au/par",
  "request_object_signing_alg_values_supported": ["ES256", "PS256"],
  "token_endpoint_auth_methods_supported": ["private_key_jwt"],
  "tls_client_certificate_bound_access_tokens": true,
  "claims_supported": ["name", "given_name", "family_name", "acr", "auth_time", "sub", "refresh_token_expires_at", "sharing_expires_at"],
  "require_pushed_authorization_requests": true,
  "code_challenge_methods_supported": "S256",
  "authorization_signing_alg_values_supported": ["ES256", "PS256"],
  "authorization_encryption_alg_values_supported": ["RSA-OAEP", "RSA-OAEP-256"],
  "authorization_encryption_enc_values_supported": ["A256GCM", "A128CBC-HS256"]
}
```

| Description | Value   |
|---|---|
| Hosted By  | Data Holder  |
|  Transport Security |  TLS |
| Client Authentication Required| No|
| Bearer Token Required| No|

Data Holders MUST make their OpenID Provider Metadata available via a configuration end point as outlined in [Section 3 and 4 of the OpenID Connect Discovery standards](https://openid.net/specs/openid-connect-discovery-1_0.html) **[[OIDD]](#nref-OIDD)**.

At a minimum, the Data Holder metadata MUST include:

- `issuer`: URL that the Data Holder asserts as its Issuer Identifier.
- `authorization_endpoint`: URL of the Authorization End Point.
- `token_endpoint`: URL of the Token End Point.
- `introspection_endpoint`: URL of the Introspection End Point.
- `revocation_endpoint`: URL of the Revocation End Point.
- `userinfo_endpoint`: URL of the UserInfo End Point.
- `registration_endpoint`: URL of the Client Registration End Point.
- `scopes_supported`:  This list of supported scopes.
- `claims_supported`:  The list of supported claims.
- `acr_values_supported`:  The supported ACR values.
- `jwks_uri`: The JSON Web Key Set for the data holder.
- `id_token_encryption_alg_values_supported`: The list of the supported JWE algorithms for securing the issued ID tokens. Must conform to **[[FAPI-RW-Draft]](#nref-FAPI-RW-Draft)** and **[[OIDD]](#nref-OIDD)**.
- `id_token_encryption_enc_values_supported`: The list of the supported JWE encryption methods for securing the issued ID tokens.
- ``cdr_arrangement_revocation_endpoint``: The URL of the CDR Arrangement Revocation End Point for consent revocation
- `pushed_authorization_request_endpoint`: URL of the Pushed Authorisation End Point used to support **[[PAR]](#nref-PAR)**.
