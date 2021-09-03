### Token Revocation End Point

| Description | Value   |
|---|---|
| Hosted By  | Data Holder |
|  Transport Security |  MTLS |
| Client Authentication Required| Yes |
| Bearer Token Required| No |

**Requirements for Data Holder implementations**

Data Holders MUST implement a Token Revocation End Point as described in [section 2](https://tools.ietf.org/html/rfc7009#section-2) of **[RFC7009]**.

The Revocation End Point serves as a revocation mechanism that allows a Data Recipient to invalidate its tokens as required to allow for token clean up.

Revocation of Refresh Tokens and Access Tokens MUST be supported.


**Revoking consent**

Data Recipients MUST use the Data Holder's CDR Arrangement Revocation End Point with a valid ``cdr_arrangement_id`` to notify the Data Holder when consent is revoked by the consumer via the Data Recipient.

Data Holder's MUST use the Data Recipient's CDR Arrangement Revocation End Point with a valid ``cdr_arrangement_id`` to notify the Data Recipient when consent is revoked by the consumer via the Data Holder.
