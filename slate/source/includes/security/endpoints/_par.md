
### Pushed Authorisation End Point

> Non-Normative Example


> Request

```
POST /par HTTP/1.1
     Host: data.holder.com.au
     Content-Type: application/x-www-form-urlencoded

request=eyJhbGciOiJQUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjEyMyJ9.ey...
```

> Decoded Request

```
{
  "iss": "s6BhdRkqt3",
  "exp": 1516239322,
  "aud": "https://www.recipient.com.au",
  "response_type": "code id_token",
  "client_id": "s6BhdRkqt3",
  "redirect_uri": "https://www.recipient.com.au/coolstuff",
  "scope": "openid profile bank:accounts.basic:read
            bank:accounts.detail:read",
  "nonce": "n-0S6_WzA2Mj",
  "state": "af0ifjsldkj",
  "claims": {
    "sharing_duration": 7776000,
    "cdr_arrangement_id": "02e7c9d9-cfe7-4c3e-8f64-e91173c84ecb",
    "id_token": {
      "acr": {
        "essential": true,
        "values": ["urn:cds.au:cdr:3"]
      }
    },
    "userinfo": {
      "given_name": null,
      "family_name": null
    }
  }
}
```

> Response

```
HTTP/1.1 201 Created
Content-Type: application/json
Cache-Control: no-cache, no-store
{
  "request_uri": "urn:data.holder.com.au:bwc4JK-ESC0w8acc191e-Y1LTC2",
  "expires_in": 3600
}
```
> Authorise

```
## This is used by the ADR in the subsequent authorisation request as follows
## (note that until PAR is an RFC standard, the mandatory oAuth parameters as
## per FAPI R/W for confidential clients must be replayed in the request URL):

GET /authorise?client_id=s6BhdRkqt3&
   response_type=code%20id_token&
   scope=openid%20profile%20bank:accounts.basic:read%20bank:accounts.detail:read&
   request_uri=urn%3Adata.holder.com.au%3Abwc4JK-ESC0w8acc191e-Y1LTC2
HTTP/1.1
Host: data.holder.com.au
```

| Description | Value   |
|---|---|
| Hosted By  | Data Holder  |
|  Transport Security |  MTLS |
| Client Authentication Required| Yes |
| Bearer Token Required| No |


Data Holders MUST support Pushed Authorisation Requests (PAR) via the pushed authorisation end point according to **[PAR]**.

Data Recipient Software Products MAY send authorisation requests using **[PAR]** if supported by the Data Holder. Request objects which contain the ``cdr_arrangement_id`` claim MUST only be sent using **[PAR]**. If a Data Holder does not support **[PAR]**, a Data Recipient Software Product SHOULD NOT provide the ``cdr_arrangement_id`` claim in the request object.

The Data Holder response provides the Data Recipient Software Product with a Request URI in the response. The Request URI is then passed to the Data Holder’s Authorisation End Point to initiate an authorisation flow.

In addition:

* Request Object references SHALL NOT be supported in any mode of use other than **[PAR]**. If a Data Holder does not support **[PAR]**, it MUST NOT support Request Object references.
*	The Request URI is intended to be a single-use reference to the respective request object.
* The Request URI MUST expire between 10 seconds and 90 seconds
* Data Recipient Software Products MAY provide an existing ``cdr_arrangement_id`` claim in an authorisation request object to establish a new consent under an existing arrangement
* Data Holders MUST revoke existing refresh tokens and access tokens when a ``cdr_arrangement_id`` is provided in the Request Object but only after successful authorisation
* If the ``cdr_arrangement_id`` is not related to the consumer being authenticated it MUST be rejected
* If the ``cdr_arrangement_id`` is not recognised by to the Data Holder it MUST be rejected

In addition, **from July 4th 2022**, the following requirements apply:

*	Data Recipient Software Products MUST only use a Request URI value once in accordance with **[RFC9126]** section 4.
*	Data Holders SHOULD make reject the reuse of the Request URI.
*	Data Holders MAY support authorisation request data using PAR only in accordance with section 5 of **[RFC9126]** where "require_pushed_authorization_requests" parameter is set to "true".
* Data Recipients MUST NOT pass request object data to the Data Holder's Authorization endpoint if the Data Holder's "require_pushed_authorization_requests" parameter is set to "true".

o	Data Recipients MUST support [PAR-RFC7636] for authorisation requests

In addition, **from September 16th 2022**, the following requirements apply:

* Data Holders MUST ONLY accept authorisation request data using PAR
* Data Recipients MUST NOT pass request object data to the Data Holder's Authorization endpoint
* Data Holders MUST reject authorisation request containing "request" parameter
