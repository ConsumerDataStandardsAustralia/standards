### JSON Web Key Set End Point
| Description | Value   |
|---|---|
| Hosted By  | Data Holder & Data Recipient Software Product  |
|  Transport Security |  TLS |
| Client Authentication Required| No|
| Bearer Token Required| No|

The requirements for the JWKS End Point are specified in various sections of **[[OIDC]](#nref-OIDC)**.

This end point is used by the Data Holder to provide the public keys they will use when required.

Data Holders MUST support a JWKS End Point.

This endpoint does not require [CORS](https://consumerdatastandardsaustralia.github.io/standards/#cors).


#### JWKS URIs

In addition to **[[FAPI-1.0-Advanced]](#nref-FAPI-1-0-Advanced)** section 8.9 **from July 4th 2022**, the following requirements apply:

* Data Holders and Data Recipients JWK sets MUST NOT contain multiple keys with the same "kid"
