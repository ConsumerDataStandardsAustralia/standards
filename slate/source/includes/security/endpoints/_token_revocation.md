### Token Revocation endpoint

| Description | Value |
|---|---|
| Hosted By | Data Holder |
| Transport Security | MTLS |
| Client Authentication Required | Yes |
| Bearer Token Required | No |

**Requirements for Data Holder implementations**

Data Holders **MUST** implement a Token Revocation endpoint as described in [section 2](https://tools.ietf.org/html/rfc7009#section-2) of **[[RFC7009]](#nref-RFC7009)**.

The Revocation endpoint serves as a revocation mechanism that allows a Data Recipient Software Product to invalidate its tokens as required to allow for token clean up.

Revocation of Refresh Tokens and Access Tokens **MUST** be supported.
