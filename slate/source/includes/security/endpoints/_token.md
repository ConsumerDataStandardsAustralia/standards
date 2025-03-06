### Token endpoint
| Description | Value |
|---|---|
| Hosted By | Data Holder |
| Transport Security | MTLS |
| Client Authentication Required | Yes|
| Bearer Token Required | No|

The requirements for the Token endpoint are specified in [section 3.3.3](https://openid.net/specs/openid-connect-core-1_0.html#HybridTokenEndpoint) of **[[OIDC]](#nref-OIDC)**.

To obtain an Access Token, an ID Token, and a Refresh Token, the Data Recipient Software Product sends a Token Request to the Token endpoint.

Data Holders **MUST** support a Token endpoint.
