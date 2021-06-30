### Token Revocation End Point

| Description | Value   |
|---|---|
| Hosted By  | Data Holder and Data Recipient |
|  Transport Security |  MTLS for Data Holders, TLS for Data Recipients |
| Client Authentication Required| Yes (for verifying Data Recipients)|
| Bearer Token Required| Yes (for verifying Data Holders)|

**Requirements for Data Holder implementations**

Data Holders MUST implement a Token Revocation End Point as described in [section 2](https://tools.ietf.org/html/rfc7009#section-2) of **[RFC7009]**.

The Revocation End Point serves as a revocation mechanism that allows a Data Recipient to invalidate its tokens as required to allow for token clean up.

Revocation of Refresh Tokens and Access Tokens MUST be supported.


**Requirements for Data Recipient implementations**

The Token Revocation End Point, when implemented by the Data Recipient allows a Data Holder to notify the Data Recipient of the revocation of a sharing arrangement by the Customer in totality as required by the ACCC CDR Rules. This revocation will have been actioned by the Customer via the Data Holder’s consent dashboard as described in the ACCC CDR Rules.

Revocation of Access Tokens MUST not be supported.

Revocation of Refresh Tokens MUST be supported and will be used to notify the Data Recipient of sharing revocation.

If consent is withdrawn by a Customer in writing or by using the Data Recipient’s dashboard the Data Recipient MUST revoke consent using Data Holder’s implementation.

**Revoking consent**

If the Data Holder does not support a CDR Arrangement Revocation End Point, Data Recipients MUST use the Data Holder's Token Revocation End Point with the current Refresh Token to notify the Data Holder.

If the Data Holder does support the CDR Arrangement Revocation End Point, Data Recipients MUST use the Data Holder's CDR Arrangement Revocation End Point with a valid ``cdr_arrangement_id`` to notify the Data Holder.
