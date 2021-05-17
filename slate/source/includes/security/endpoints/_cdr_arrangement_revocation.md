### CDR Arrangement Revocation End Point

> Non-Normative Example

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
| Hosted By  | Data Holder & Data Recipient  |
|  Transport Security |  MTLS for Data Holders, TLS for Data Recipients |
| Client Authentication Required | Yes (for Data Holders verifying Data Recipients) |
| Bearer Token Required| Yes (for Data Recipients verifying Data Holders) |

**HTTP Method:** POST<br/>
**Data Holder Path:** The ``cdr_arrangement_revocation_endpoint`` defined using OIDC Discovery<br/>
**Data Recipient Path:** ``<RecipientBaseUri>/arrangements/revoke`` where \<RecipientBaseUri\> is registered with the CDR Register.<br/>

**From November 2020**, Data Holders and Data Recipients MUST implement a CDR Arrangement Revocation End Point that can be used to revoke an existing sharing arrangement.

The request MUST include the following parameters using the ``application/x-www-form-urlencoded`` format in the HTTP request entity-body: <br/>
``cdr_arrangement_id``: The ID of the arrangement that the client wants to revoke.

This end point will be implemented according to the following:

* Data Recipients and Data Holders MUST revoke consent by calling the CDR Arrangement Revocation End Point  with a valid CDR Arrangement ID
* Data Holders MUST publish their CDR Arrangement Revocation End Point  using their OpenID Provider Metadata Discovery End Point
* Data Recipients MUST expose their CDR Arrangement Revocation End Point  under their Recipient Base URI published in their Software Statement Assertion
* Consent revocation MUST also revoke associated refresh and/or access tokens
* For Data Recipients, Data Holder must be authenticated when they call this end point according to the guidance in the Client Authentication section.
* If the ``cdr_arrangement_id`` is not related to the client making the call it MUST be rejected

**Response Codes**

The following responses are in addition to error responses covered by normative references. Error scenarios in the following table MUST use the error structure defined in the [Payload Conventions](#payload-conventions).

Response Code | Situation | Description
-- | -- | --
204 No Content | Success | The sharing arrangement has been revoked successfully
422 Unprocessable Entity | Invalid Arrangement ID | The client submitted an invalid arrangement identifier or the identifier could not be found. The server MUST respond with [Invalid Consent Arrangement](#error-422-authorisation-invalid-arrangement).

**Data Holders calling Data Recipients**

Data Holders may discover that a given Data Recipient supports the CDR Arrangement Revocation End Point  by the presence of the Recipient Base URI in the Software Statement Assertion (SSA). If a Data Recipient does not support the CDR Arrangement Revocation End Point, the Data Holder MUST call the Data Recipient Token Revocation End Point.

Data Recipients SHOULD update their client registration with each Data Holder as soon as is practical once they support the CDR Arrangement Revocation End Point.

Data Recipients MUST continue to support their Token Revocation End Point until February 2021 and until they have updated their client registrations.

**Updating Register Meta Data and Client Registration**

When a Data Recipient supports the CDR Arrangement Revocation End Point, they MUST:
1. Update their meta data with the CDR Register to include their ``recipient_base_uri``.
2. Update their client registration with each Data Holder.

If the Data Recipient does not support the CDR Arrangement Revocation End Point, the Data Holder MUST instead revoke consent using the Data Recipient Token Revocation End Point.

**Data Recipients calling Data Holders**

Data Recipients may discover that a given Data Holder supports the CDR Arrangement Revocation End Point by the presence of the ``cdr_arrangement_revocation_endpoint`` in the Data Holder's OpenID Provider metadata.

If a Data Recipient does not support the CDR Arrangement Revocation End Point, Data Holders must notify Data Recipients when consent is withdrawn by calling the Data Recipient Revocation End Point.
