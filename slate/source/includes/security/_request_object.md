<a id="request-object"></a>
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

The Request Object is a signed and encoded JWT specified in [section 6.1](https://openid.net/specs/openid-connect-core-1_0.html#RequestObject) of **[OIDC]**.  As per **[FAPI-RW]** [section 5.2.2](https://openid.net/specs/openid-financial-api-part-2.html#authorization-server), the `request` parameter MUST be present on requests to the **[OIDC]** Hybrid Authorisation End Point. The Request Object enables **[OIDC]** requests to be passed in a single and self-contained parameter.

Request Objects MUST be signed by Data Recipients as specified in [section 8.6](https://openid.net/specs/openid-financial-api-part-2.html#jws-algorithm-considerations) of **[FAPI-RW]**.

Request Object references MUST be supported if the Data Holder supports Pushed Authorisation Requests (PAR).

### Requesting Sharing Duration
To facilitate the specification of the duration for consent to share CDR data that is approved by the consumer, a mechanism for the Data Recipient to specify a sharing duration to the Data Holder is required.

To accomplish this, the Data Holder MUST support an additional claim in the authorisation request object named `sharing_duration`.  The `sharing_duration` claim MUST be handled as follows:

- The `sharing_duration` parameter is a number
- The value of the `sharing_duration` parameter will contain the requested duration for sharing, in seconds.
- If the `sharing_duration` value exceeds one year then a duration of one year will be assumed.
-	If the `sharing_duration` value is less than or equal to 24 hours, then one-time collection will be assumed, and a Refresh Token should be provided by the Data Holder
- If the `sharing_duration` value is zero or absent then once off access will be assumed and only an Access Token (without a Refresh Token) will be provided on successful authorisation.
-	If a Refresh Token is issued for one-time collection the Data Recipient must call the Data Holder’s revocation endpoint after successful collection of the CDR data.
- If the `sharing_duration` value is negative then the authorisation should fail.

Note that the period of `one year` in the above statements should be interpreted as 365, 24 hour days (or 31,536,000 seconds).

The Data Recipient is able to obtain the expiration of sharing via the `sharing_expires_at` claim.

### Specifying an existing arrangement
Provided a Data Holder supports PAR, they MUST also support the ``cdr_arrangement_id`` claim provided in the Request Object sent to the PAR End Point. The Data Recipient MAY provide the ``cdr_arrangement_id`` claim in the Request Object sent to the PAR End Point.

The ``cdr_arrangement_id`` claim MUST be handled as follows:

**Until November 2020** data holders are not required to take any action if ``cdr_arrangement_id`` is supplied but MUST NOT respond with an error.

**Until November 2020** data recipients MUST NOT implement scenarios that support concurrent consent. Only single, extant consent scenarios should be implemented until this date.

If a data recipient provides the ``cdr_arrangement_id`` claim in the request object to the data holder's PAR End Point, the data holder MUST revoke any existing tokens related to the arrangement once the new consent is successfully established and a new set of tokens has been provided to the data recipient.

For data recipients seeking to replace consent where the Data Holder does not support PAR, data recipients MUST actively revoke previously supplied refresh tokens, immediately after receiving the tokens for a newly established consent, using the appropriate revocation end point.
