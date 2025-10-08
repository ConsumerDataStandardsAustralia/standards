### Register Endpoints

The CDR Register exposes an OIDC Configuration Endpoint with associated JWKS and token endpoints to facilitate issuance of access tokens to consume the protected Register APIs.



> Retrieve CDR Register OIDC Discovery Endpoint

```
GET /idp/.well-known/openid-configuration HTTP/1.1
Host: api.cdr.gov.au

## Response
{
  "issuer": "https://api.cdr.gov.au/idp",
  "jwks_uri": "https://api.cdr.gov.au/idp/.well-known/openid-configuration/jwks",
  "token_endpoint": "https://secure.api.cdr.gov.au/idp/connect/token",
  "claims_supported": ["sub"],
  "id_token_signing_alg_values_supported": ["PS256"],
  "subject_types_supported": ["public"],
  "scopes_supported": ["cdr-register:read"],
  "response_types_supported": ["token"],
  "grant_types_supported": ["client_credentials"],
  "token_endpoint_auth_methods_supported": ["private_key_jwt"],
  "tls_client_certificate_bound_access_tokens": true,
  "request_object_signing_alg_values_supported": ["PS256"]
}
```

### Participant Endpoints

> OIDC Discovery Configuration Endpoint

```
<InfoSecBaseUri>/.well-known/openid-configuration
```



Participants will be required to register base URIs against each of their brands to facilitate the implementation of the CDR Data Standards.

Endpoints specified as MTLS **MUST** be configured according to the [Certificate Trust Model](#certificate-trust-model) in the [Certificate Management](#certificate-management) section.  
Endpoints specified as TLS **MUST** be configured with a certificate issued by a public CA accepted by major web browsers.

| Base URI | DH&nbsp;Brand | ADR&nbsp;Brand | Transaction Security | Description
|-----------|:------:|:------:|----------------------|-----------------|
|**PublicBaseUri**|	<i class="icon-check"></i> | | TLS | Base URI for the Consumer Data Standard public endpoints. This should encompass all endpoints not requiring authentication.<br>Data Holders designated for the Energy sector are not required to expose energy product reference endpoints via their public base URI and are not required, but **MAY**, provide a redirect to the product reference endpoints hosted by the designated data holder. |
|**ResourceBaseUri**|	<i class="icon-check"></i> | | MTLS | Base URI for the Consumer Data Standard resource endpoints. This **MUST** encompass all CDS resource endpoints requiring authentication. |
|**InfoSecBaseUri**|	<i class="icon-check"></i> | | TLS | Base URI for the [OIDC Discovery endpoint](https://openid.net/specs/openid-connect-discovery-1_0.html) only.<br>Endpoints specified in the Discovery endpoint have the requirements detailed in the [Security Endpoints](#security-endpoints) section. |
|**AdminBaseUri**|	<i class="icon-check"></i> | | MTLS | Base URI for the Consumer Data Standard admin endpoints called by the CDR Register. |
|**ExtensionBaseUri**|	<i class="icon-check"></i> | | TLS/MTLS | Base URI for the Data Holder extension endpoints to the Consumer Data Standard (optional).<ul><li>TLS: for public endpoints.<li>MTLS: for authenticated endpoints.</ul> |
|**RevocationUri**|	| <i class="icon-check"></i> | TLS | Used for consent withdrawal notification from a Data Holder and is populated in the [SSA](#dynamic-client-registration). |
|**RecipientBaseUri**|	| <i class="icon-check"></i> | TLS | Base URI for the Consumer Data Standard Data Recipient Software Product endpoints. <br>This **MUST** be the base to provide reference to [Data Recipient Endpoints](#cdr-register-api_get-data-recipients). |
|**JwksUri**|	<i class="icon-check"></i> | <i class="icon-check"></i> | TLS | <ul><li>DH Brand: Used for client authentication for DH -> DRSP communication and is populated in the [Get Data Holder Brands](#cdr-register-api_get-data-holder-brands) endpoint. (See: _jwksEndpoint_).</li><li>ADR Brand: Used for client authentication for DRSP -> DH & Register communication and is populated in the [SSA](#dynamic-client-registration). (See: _jwks_uri_).</li></ul> |

