### Introspection End Point

| Description | Value   |
|---|---|
| Hosted By  | Data Holder  |
|  Transport Security |  MTLS |
| Client Authentication Required| Yes|
| Bearer Token Required| No|

Data Holders MUST implement an Introspection End Point to allow Data Recipients to determine the status and expiry date of Refresh Tokens.  The requirements for an Introspection End Point are described in [section 2](https://tools.ietf.org/html/rfc7662#section-2) of **[RFC7662]**.

Introspection of Refresh Tokens MUST be supported.

Introspection of Access Tokens and ID Tokens MUST NOT be supported.

A Token Introspection End Point Response SHALL include, at least, the following fields:

- `active`: Boolean indicator of whether or not the presented token
      is currently active.
- `exp`:  A JSON number representing the number of seconds from 1970-01-01T00:00:00Z to the UTC expiry time.
- `scope`: A JSON string containing a space-separated list of scopes associated with this token.
- `cdr_arrangement_id`: A unique identifier of the CDR arrangement related to the authorisation.

A Token Introspection End Point Response MAY include claims defined in Section 2.2 of **[RFC7662]** but ``username`` SHALL NOT be allowed.
