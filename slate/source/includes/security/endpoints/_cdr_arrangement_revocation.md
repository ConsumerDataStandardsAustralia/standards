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
| Hosted By  | Data Holder & Data Recipient Software Product  |
|  Transport Security |  MTLS for Data Holders, TLS for Data Recipient Software Products |
| Client Authentication Required | Yes (for Data Holders verifying Data Recipient Software Products) |
| Bearer Token Required| Yes (for Data Recipient Software Products verifying Data Holders) |

**HTTP Method:** POST<br/>  
**Data Holder Path:** The ``cdr_arrangement_revocation_endpoint`` defined using OIDC Discovery<br/>  
**Data Recipient Software Product Path:** ``<RecipientBaseUri>/arrangements/revoke`` where \<RecipientBaseUri\> is registered with the CDR Register.<br/>

Data Holders and Data Recipient Software Products MUST implement a CDR Arrangement Revocation End Point that can be used to revoke an existing sharing arrangement.

The request MUST include the following parameters using the ``application/x-www-form-urlencoded`` format in the HTTP request entity-body: <br/>

- ``cdr_arrangement_id``: The ID of the arrangement that the client wants to revoke.

<br/>
This end point will be implemented according to the following:

* Data Recipient Software Products and Data Holders MUST revoke consent by calling the CDR Arrangement Revocation End Point  with a valid CDR Arrangement ID
* Data Holders MUST publish their CDR Arrangement Revocation End Point using their OpenID Provider Metadata Discovery End Point
* Data Recipient Software Products MUST expose their CDR Arrangement Revocation End Point under their `recipient_base_uri` published in their Software Statement Assertion
* Consent revocation MUST also revoke associated refresh and/or access tokens
* For Data Recipient Software Products, Data Holder must be authenticated when they call this end point according to the guidance in the Client Authentication section.
* If the ``cdr_arrangement_id`` is not related to the client making the call it MUST be rejected

**Response Codes**

The following responses are in addition to error responses covered by normative references. Error scenarios in the following table MUST use the error structure defined in the [Payload Conventions](#payload-conventions).

Response Code | Situation | Description
-- | -- | --
204 No Content | Success | The sharing arrangement has been revoked successfully
422 Unprocessable Entity | Invalid Arrangement ID | The client submitted an invalid arrangement identifier or the identifier could not be found. The server MUST respond with [Invalid Consent Arrangement](#error-422-authorisation-invalid-arrangement).

**Revoking consent**

Data Recipient Software Products MUST use the Data Holder's CDR Arrangement Revocation End Point with a valid ``cdr_arrangement_id`` to notify the Data Holder when consent is revoked by the consumer via the Data Recipient Software Product.

Data Holder's MUST use the Data Recipient Software Product's CDR Arrangement Revocation End Point with a valid ``cdr_arrangement_id`` to notify the Data Recipient Software Product when consent is revoked by the consumer via the Data Holder.

**Data Holders calling Data Recipients**

The location of the Data Recipient Software Product CDR Arrangement Revocation End Point is determined by the `RecipientBaseURI` provided by the Data Recipient Software Product in the client Software Statement Assertion (SSA).

**Data Recipients calling Data Holders**

The location of the Data Holder CDR Arrangement Revocation End Point is determined by the ``cdr_arrangement_revocation_endpoint`` in the Data Holder's OpenID Provider metadata.
