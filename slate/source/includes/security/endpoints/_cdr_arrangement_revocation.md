### CDR Arrangement Revocation End Point

> Non-Normative Example: Data Holder end point  
> _(Data Recipients calling Data Holders)_  
>Request

```
POST https://data.holder.com.au/arrangements/revoke
HTTP/1.1
Host: data.holder.com.au
Content-Type: application/x-www-form-urlencoded

  client_id=s6BhdRkqt3&
  client_assertion_type=urn%3Aietf%3Aparams%3Aoauth%3Aclient-assertion-type%3Ajwt-bearer&
  client_assertion=eyJhbGciOiJQUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjEyNDU2In0.ey ...&
  cdr_arrangement_id=5a1bf696-ee03-408b-b315-97955415d1f0
```

| Description | Value   |
|---|---|
| Hosted By  | Data Holder & Data Recipient Software Product  |
|  Transport Security |  MTLS for Data Holders, TLS for Data Recipient Software Products |
| Client Authentication Required | Yes (for Data Holders verifying Data Recipient Software Products) |
| Bearer Token Required| Yes (for Data Recipient Software Products verifying Data Holders) |

**HTTP Method:** POST  
**Data Holder Path:** The ``cdr_arrangement_revocation_endpoint`` defined using OIDC Discovery  
**Data Recipient Software Product Path:** ``<RecipientBaseUri>/arrangements/revoke`` where ``<RecipientBaseUri>`` is registered with the CDR Register.

Data Holders and Data Recipient Software Products MUST implement a CDR Arrangement Revocation End Point that can be used to revoke an existing sharing arrangement.

<br/>

**CDR Arrangement Form Parameter method**

The request **MUST** include the following parameters using the ``application/x-www-form-urlencoded`` format in the HTTP request entity-body:

* ``cdr_arrangement_id``: The ID of the arrangement that the client wants to revoke.

**CDR Arrangement JWT method**

The request **MUST** include the following parameters using the application/x-www-form-urlencoded format in the HTTP request entity-body:

* ``cdr_arrangement_jwt``: A signed JWT that includes the ``cdr_arrangement_id``.
* ``cdr_arrangement_jwt``: A newly signed JWT with the following parameters in accordance with **[[JWT]](#nref-JWT)**:
  * ``cdr_arrangement_id``: The ID of the arrangement that the client wants to revoke.

The ``cdr_arrangement_jwt`` **SHOULD** include all parameters in accordance with Data Holders calling Data Recipients using [Self-Signed JWT Client Authentication](https://consumerdatastandardsaustralia.github.io/standards/#self-signed-jwt-client-authentication).

**Data Holder hosted endpoint**

The location of the Data Holder CDR Arrangement Revocation End Point is determined by the ``cdr_arrangement_revocation_endpoint`` in the Data Holder's OpenID Provider metadata.

This end point will be implemented according to the following:


* Data Holders MUST only support "CDR Arrangement Form Parameter" method
* Data Recipient Software Products MUST revoke consent by calling the CDR Arrangement Revocation End Point with a valid CDR Arrangement ID
* Data Holders MUST publish their CDR Arrangement Revocation End Point using their OpenID Provider Metadata Discovery End Point
* Consent revocation MUST also revoke associated refresh and/or access tokens
* If the ``cdr_arrangement_id`` is not related to the client making the call it MUST be rejected


> Non-Normative Example: Data Recipient end point  
> **Until July 31st 2022**  
> _(Data Holders calling Data Recipients)_  
>Request

```
POST https://data.recipient.com.au/arrangements/revoke
HTTP/1.1
Host: data.recipient.com.au
Content-Type: application/x-www-form-urlencoded
Authorization: Bearer eyJhbGciOiJQUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjEyNDU2In0.ey ...

  cdr_arrangement_id=5a1bf696-ee03-408b-b315-97955415d1f0
```

> Non-Normative Example: Data Recipient end point  
>**From March 31st 2022**  
> _(Data Holders calling Data Recipients)_  
>Request

```
POST https://data.recipient.com.au/arrangements/revoke
HTTP/1.1
Host: data.recipient.com.au
Content-Type: application/x-www-form-urlencoded
Authorization: Bearer eyJhbGciOiJQUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjEyNDU2In0.ey ...

  cdr_arrangement_id=5a1bf696-ee03-408b-b315-97955415d1f0&
  cdr_arrangement_jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImtpZCI6IjEyNDU2In0.ey ...

## Decoded cdr_arrangement_jwt JWT
{
  "typ": "JWT",
  "alg": "PS256",
  "kid":"12456"
}
{
  "cdr_arrangement_id": "5a1bf696-ee03-408b-b315-97955415d1f0",
  "iss":"dataholderbrand-123",
  "sub":"dataholderbrand-123",
  "aud":"https://data.recipient.com.au/arrangements/revoke",
  "iat":1516239022,
  "exp":1516239322,
  "jti":"dba86502-7cf5-4719-9638-c5339a0ddb06"
}
```

**Data Recipient hosted endpoint**

The location of the Data Recipient Software Product CDR Arrangement Revocation End Point is determined by the `RecipientBaseURI` provided by the Data Recipient Software Product in the client Software Statement Assertion (SSA).

```diff
Corrected typo in `cdr_arragement_id`
```

This end point will be implemented according to the following:

* Data Recipient Software Products **MUST** expose their CDR Arrangement Revocation End Point under their `recipient_base_uri` published in their Software Statement Assertion.
* Data Holders must be authenticated when they call this end point according to the guidance in the Client Authentication section.
* If the `cdr_arrangement_id` is not related to the client making the call it **MUST** be rejected.
* **From March 31st 2022**, Data Recipients **MUST** support the "CDR Arrangement JWT" method.
* **From July 31st 2022**, Data Holders **MUST** send the `cdr_arrangement_id` using the "CDR Arrangement JWT" method.
* Data Holders **MAY** additionally send a duplicate of the `cdr_arrangement_id` as a form parameter.
* Data Recipient Software Products **MUST NOT** reject requests including the `cdr_arrangement_id` as a form parameter. 
* If the `cdr_arrangement_id` is presented as a form parameter, Data Recipient Software Products **SHOULD** validate it is identical to the `cdr_arrangement_id` presented in the "CDR Arrangement JWT".
* **From November 15th 2022**, if the `cdr_arrangement_id` is presented as a form parameter, Data Recipient Software Products **MUST** validate it is identical to the `cdr_arrangement_id` presented in the "CDR Arrangement JWT".
* **From November 15th 2022**, if the Self-Signed JWT claims are presented in the "CDR Arrangement JWT", Data Recipient Software Products **MUST** validate in accordance with Data Holders calling Data Recipients using [Self-Signed JWT Client Authentication](#self-signed-jwt-client-authentication).

**Response Codes**

The following responses are in addition to error responses covered by normative references. Error scenarios in the following table MUST use the error structure defined in the [Payload Conventions](#payload-conventions).

Response Code | Situation | Description
-- | -- | --
204 No Content | Success | The sharing arrangement has been revoked successfully
422 Unprocessable Entity | Invalid Arrangement ID | The client submitted an invalid arrangement identifier or the identifier could not be found. The server MUST respond with [Invalid Consent Arrangement](#error-422-authorisation-invalid-arrangement).

```diff
Updates to 'Revoking consent' requirements to align to rules
```

**Revoking consent**

Data Recipient Software Products **MUST** use the Data Holder's CDR Arrangement Revocation endpoint with a valid `cdr_arrangement_id` to notify the Data Holder when consent is withdrawn or otherwise expires, except for the following reasons:

- The withdrawal was initiated via the Data Holder,
- The consent expires at its natural expiry time, defined by the Data Recipient in the authorisation request and available in the token introspection endpoint,
- Invalidation of the consent due to a change in the Data Holder or Data Holder Brand status on the Register.

Data Holder's **MUST** use the Data Recipient Software Product's CDR Arrangement Revocation endpoint with a valid `cdr_arrangement_id` to notify the Data Recipient Software Product when an authorisation is withdrawn or otherwise expires, except for the following reasons:

- The withdrawal was initiated via the Data Recipient,
- The authorisation expires at its natural expiry time, defined by the Data Recipient in the authorisation request and available in the token introspection endpoint,
- Invalidation of the authorisation due to a change in the Data Recipient or Software Product status on the Register.
