### Register Endpoints

The CDR Register exposes an OIDC Configuration Endpoint with associated JWKS and token endpoints to facilitate issuance of access tokens to consume the protected Register APIs.

> Retrieve CDR Register OIDC Discovery Endpoint

```
GET /.well-known/openid-configuration HTTP/1.1
Host: cdr.register

## Response
{
    "issuer": "https://cdr.register/idp",
    "jwks_uri": "https://cdr.register/idp/.well-known/openid-configuration/jwks",
    "token_endpoint": "https://cdr.register/idp/connect/token",
    "claims_supported": ["sub"],
    "id_token_signing_alg_values_supported": ["PS256"],
    "subject_types_supported": ["public"],
    "scopes_supported": ["cdr-register:bank:read"],
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

Participants will be required to register base URIs against each of their brands to facilitate the implementation of the Consumer Data Standards

| Base URI | DH Brand | ADR Brand | Description
|-----------|------|------|-----------------------------------------------------------------------------------------------|
|**PublicBaseUri**|	<i class="icon-check"></i> | | Base URI for the Consumer Data Standard public endpoints. This should encompass all endpoints not requiring authentication.<br>Data Holders designated for the Energy sector are not required to expose energy product reference endpoints via their public base URI and are not required, but **MAY**, provide a redirect to the product reference endpoints hosted by the designated data holder. |
|**ResourceBaseUri**|	<i class="icon-check"></i> | | Base URI for the Consumer Data Standard resource endpoints. This should encompass all CDS resource endpoints requiring authentication |
|**InfoSecBaseUri**|	<i class="icon-check"></i> | | Base URI for the Consumer Data Standard InfoSec endpoints. This provides ADRs reference to the [OIDC Discovery Endpoint](https://openid.net/specs/openid-connect-discovery-1_0.html) |
|**AdminBaseUri**|	<i class="icon-check"></i> | | Base URI for the Consumer Data Standard admin endpoints called by the CDR Register |
|**ExtensionBaseUri**|	<i class="icon-check"></i> | | Base URI for the Data Holder extension endpoints to the Consumer Data Standard **(optional)** |
|**RevocationUri**|	| <i class="icon-check"></i> | Used for consent withdrawal notification from a Data Holder and is populated in the [SSA](#dynamic-client-registration) |
|**RecipientBaseUri**|	| <i class="icon-check"></i> | Base URI for the Consumer Data Standard Data Recipient Software Product endpoints. </br>This should be the base to provide reference to [Data Recipient Endpoints](#get-data-recipients) |
|**JwksUri**|	<i class="icon-check"></i> | <i class="icon-check"></i> | **DH:** Used for client authentication for DH -> DRSP communication and is populated in the [GetDataHolderBrands API](#get-data-holder-brands)</br> **DR:** Used for client authentication for DRSP -> DH & Register communication and is populated in the [SSA](#dynamic-client-registration) |
