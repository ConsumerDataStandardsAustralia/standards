### Introspection endpoint

| Description | Value |
|---|---|
| Hosted By | Data Holder |
| Transport Security | MTLS |
| Client Authentication Required | Yes |
| Bearer Token Required | No |

Data Holders **MUST** implement an Introspection endpoint to allow Data Recipient Software Products to determine the status and expiry date of Refresh Tokens. The requirements for an Introspection endpoint are described in [section 2](https://tools.ietf.org/html/rfc7662#section-2) of **[[RFC7662]](#nref-RFC7662)**.

Introspection of Refresh Tokens **MUST** be supported.

Introspection of Access Tokens and ID Tokens **MUST NOT** be supported.

For currently active tokens, a Token Introspection endpoint Response **SHALL** include, at least, the following fields:

- _active_: Boolean indicator of whether or not the presented token is currently active.
- _exp_: A JSON number representing the number of seconds from 1970-01-01T00:00:00Z to the UTC expiry time.
- _scope_: A JSON string containing a space-separated list of scopes associated with this token.
- _cdr_arrangement_id_: A unique identifier of the CDR arrangement related to the authorisation.

A Token Introspection endpoint Response **MAY** include claims defined in Section 2.2 of **[[RFC7662]](#nref-RFC7662)** but _username_ **SHALL NOT** be allowed.
