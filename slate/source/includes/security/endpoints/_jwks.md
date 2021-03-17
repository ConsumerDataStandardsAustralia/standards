### JSON Web Key Set End Point
| Description | Value   |
|---|---|
| Hosted By  | Data Holder & Data Recipient  |
|  Transport Security |  TLS |
| Client Authentication Required| No|
| Bearer Token Required| No|

The requirements for the JWKS End Point are specified in various sections of **[OIDC]**.

This end point is used by the Data Holder to provide the public keys they will use when required.

Data Holders MUST support a JWKS End Point.
