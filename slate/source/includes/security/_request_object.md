## Request Object

> Non-Normative Example - acr as an Essential Claim

```
#Decoded Request Object JWT

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

> Non-Normative Example - FAPI 1.0 Final Phase 3 Obligation  

```
#Decoded Request Object JWT

{
  "iss": "s6BhdRkqt3",
  "exp": 1680832800,
  "nbf": 1680829200,
  "aud": "https://www.recipient.com.au",
  "response_type": "code",
  "response_mode": "jwt",
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
  },
  "code_challenge": "ZTA2ZmFkYjUyMjA2NDNhZGVkYzE1M2I5OTYzZDAxNGI2NWNiZjAxMzVhNDlmMTk2NTlmZWE0OWVhOTQxZjhmZg==",
  "code_challenge_method": "S256"
}
```

The Request Object is a signed and encoded JWT specified in [section 6.1](https://openid.net/specs/openid-connect-core-1_0.html#RequestObject) of **[OIDC]**.  As per **[[FAPI-1.0-Advanced]](#nref-FAPI-1-0-Advanced)** [section 5.2.2](https://openid.net/specs/openid-financial-api-part-2-1_0.html#authorization-server), the `request` parameter **MUST** be present on requests to the **[OIDC]** Hybrid Authorisation End Point. The Request Object enables **[OIDC]** requests to be passed in a single and self-contained parameter.

Request Objects **MUST** be signed by Data Recipient Software Products as specified in [section 8.6](https://openid.net/specs/openid-financial-api-part-2-1_0.html#algorithm-considerations) of **[[FAPI-1.0-Advanced]](#nref-FAPI-1-0-Advanced)**.

Request Object references **MUST** be supported if the Data Holder supports Pushed Authorisation Requests (PAR).

### Requesting Sharing Duration
To facilitate the specification of the duration for consent to share CDR data that is approved by the consumer, a mechanism for the Data Recipient Software Product to specify a sharing duration to the Data Holder is required.

To accomplish this, the Data Holder **MUST** support an additional claim in the authorisation request object named `sharing_duration`.  The `sharing_duration` claim **MUST** be handled as follows:

- The `sharing_duration` parameter is a number
- The value of the `sharing_duration` parameter will contain the requested duration for sharing, in seconds.
- If the `sharing_duration` value exceeds one year then a duration of one year will be assumed.
-	If the `sharing_duration` value is less than or equal to 24 hours, then one-time collection will be assumed, and a Refresh Token **SHOULD** be provided by the Data Holder
- If the `sharing_duration` value is zero or absent then once off access will be assumed and only an Access Token (without a Refresh Token) will be provided on successful authorisation.
-	If a Refresh Token is issued for one-time collection the Data Recipient Software Product **MUST** call the Data Holder’s revocation endpoint after successful collection of the CDR data.
- If the `sharing_duration` value is negative then the authorisation **SHOULD** fail.

Note that the period of `one year` in the above statements **SHOULD** be interpreted as 365, 24 hour days (or 31,536,000 seconds).

```diff
Updated statement referring to the `sharing_expires_at` claim, replacing it with a reference to the `exp` field:
- The Data Recipient Software Product is able to obtain the expiration of sharing via the `sharing_expires_at` claim.
+ The Data Recipient Software Product is able to obtain the expiration of sharing via the `exp` field in tokens and the introspection endpoint.
```

The Data Recipient Software Product is able to obtain the expiration of sharing via the `exp` field in tokens and the introspection endpoint.

### Specifying an existing arrangement
Provided a Data Holder supports PAR, they **MUST** also support the ``cdr_arrangement_id`` claim provided in the Request Object sent to the [PAR End Point](#pushed-authorisation-end-point). The Data Recipient Software Product **MAY** provide the ``cdr_arrangement_id`` claim in the Request Object sent to the [PAR End Point](#pushed-authorisation-end-point).

If a Data Recipient Software Product provides the ``cdr_arrangement_id`` claim in the request object to the Data Holder's [PAR End Point](#pushed-authorisation-end-point), the Data Holder **MUST** revoke any existing tokens related to the arrangement once the new consent is successfully established and a new set of tokens has been provided to the Data Recipient Software Product.


### Request Object Submission

In addition:

* Request Object references **SHALL NOT** be supported in any mode of use other than **[[PAR]](#nref-PAR)**. If a Data Holder does not support **[[PAR]](#nref-PAR)**, it **MUST NOT** support Request Object references.
*	The Request URI is intended to be a single-use reference to the respective request object.
* The Request URI **MUST** expire between 10 seconds and 90 seconds
* Data Recipient Software Products **MAY** provide an existing ``cdr_arrangement_id`` claim in an authorisation request object to establish a new consent under an existing arrangement
* Data Holders **MUST** revoke existing refresh tokens and access tokens when a ``cdr_arrangement_id`` is provided in the Request Object but only after successful authorisation
* If the ``cdr_arrangement_id`` is not related to the consumer being authenticated it **MUST** be rejected
* If the ``cdr_arrangement_id`` is not recognised by to the Data Holder it **MUST** be rejected

<h4 id="security-profile_request-object_data-holders">Data Holders</h4>

Data Holders **MUST** support Pushed Authorisation Requests (PAR) via the pushed authorisation end point according to **[[PAR]](#nref-PAR)**.

* Data Holders **MUST** support **[[RFC9126]](#nref-RFC9126)** (PAR) using **[[PKCE]](#nref-PKCE)** (**[[RFC7636]](#nref-RFC7636)**) with S256 as the code challenge method in accordance with **[[FAPI-1.0-Advanced]](#nref-FAPI-1-0-Advanced)** [section 5.2.2](https://openid.net/specs/openid-financial-api-part-2-1_0.html#authorization-server).
*	Data Holders **MUST** require PAR for authorisation request data in accordance with **[[RFC9126]](#nref-RFC9126)** where "require_pushed_authorization_requests" parameter is set to "true".
*	Data Holders **MUST** require the request object to contain an "exp" claim that has a lifetime of no longer than 60 minutes after the "nbf" claim in accordance with **[[FAPI-1.0-Advanced]](#nref-FAPI-1-0-Advanced)** [section 5.2.2](https://openid.net/specs/openid-financial-api-part-2-1_0.html#authorization-server).
* Authorisation request data **MUST only** be accepted using PAR.
* Data Holders **MUST** reject authorisation request containing "request" parameter
*	Data Holders **MUST** reject the reuse of "request_uri" values.

<h4 id="security-profile_request-object_data-recipient-software-products">Data Recipient Software Products</h4>

*	Data Recipients Software Products **MUST** send request object containing a "nbf" claim and an "exp" claim that has a lifetime of no longer than 60 minutes after the "nbf" claim.
* Data Recipient Software Products **MUST** ONLY use a "request_uri" value once
* Data Recipients **MUST** ONLY send authorisation request data using **[[RFC9126]](#nref-RFC9126)** (PAR) and use **[[PKCE]](#nref-PKCE)** (**[[RFC7636]](#nref-RFC7636)**) in accordance with **[[FAPI-1.0-Advanced]](#nref-FAPI-1-0-Advanced)**.
*	Data Recipients Software Products **MUST** support **[[PKCE]](#nref-PKCE)** (**[[RFC7636]](#nref-RFC7636)**) and **MUST** use S256 as the code challenge method.
