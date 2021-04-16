## Tokens  
### ID Token

> Non-Normative Example - acr

```
{
  "iss": "https://www.holder.com.au",
  "sub": "a9ebbef6-1f0b-44eb-96cf-0c5b51b37ab2",
  "aud": "12345",
  "nonce": "n-0S6_WzA2Mj",
  "exp": 1311281970,
  "iat": 1311280970,
  "nbf": 1311280970,
  "auth_time": 1311280969,
  "acr": "urn:cds.au:cdr:3",
  "refresh_token_expires_at": 1311281970,
  "sharing_expires_at": 1311281970
}
```

ID Tokens are specified in [section 2](https://openid.net/specs/openid-connect-core-1_0.html#IDToken) of the **[OIDC]** standard.  In accordance with **[FAPI-RW]**, ID Tokens must be signed and encrypted when returned
to a Data Recipient from both the Authorisation
End Point and Token End Point.

In addition to the mandatory claims specified in [section 2](https://openid.net/specs/openid-connect-core-1_0.html#IDToken) of the **[OIDC]** standard, required claims for ID Tokens as part of Hybrid Flow authentication must align to [section 3.3](https://openid.net/specs/openid-connect-core-1_0.html#HybridFlowAuth) (Authentication using the Hybrid Flow) of the **[OIDC]** standards and [section 5.2.2](https://openid.net/specs/openid-financial-api-part-2.html#authorization-server) and [section 8.4.3](https://openid.net/specs/openid-financial-api-part-2.html#authorization-response-parameter-injection-attack) of the **[FAPI-RW]** profile.

ID Tokens MUST be signed by Data Holders as specified in [section 8.6](https://openid.net/specs/openid-financial-api-part-2.html#jws-algorithm-considerations) of **[FAPI-RW]**.

The ID Token returned from the Authorisation End Point MUST NOT contain any Personal Information (PI) claims.

#### Hashing value for state and authorisation code
The `c_hash` value MUST be generated according to [section 3.3.2.11](https://openid.net/specs/openid-connect-core-1_0.html#HybridIDToken) of **[OIDC]**.

The `s_hash` value MUST be generated according to [section 5.1](https://openid.net/specs/openid-financial-api-part-2.html#introduction) of **[FAPI-RW]**.

### Access Token
Access Tokens MUST be used as specified in [section 10.3] (https://tools.ietf.org/html/rfc6749#section-10.3) of **[OAUTH2]**.

An Access Token MUST expire between **2 minutes** to **10 minutes** after the Data Holder issues it (at the discretion of the Data Holder).

The process for refreshing an Access Token is described in [section 12.1](https://openid.net/specs/openid-connect-core-1_0.html#RefreshingAccessToken) of **[OIDC]**.

### Refresh Token
Refresh Tokens MUST be supported by Data Holders.

The usage of Refresh Tokens is specified in [section 12](https://openid.net/specs/openid-connect-core-1_0.html#RefreshTokens) of **[OIDC]**.

The expiration time for a Refresh Token MUST be set by the Data Holder.

Refresh Token expiration MAY be any length of time greater than 28 days but MUST NOT exceed the end of the duration of sharing consented to by the Consumer.

Data Holders MAY cycle Refresh Tokens when an Access Token is issued.  If Refresh Token cycling is not performed then the Refresh Token MUST NOT expire before the expiration of the sharing consented by the Customer.

### Token Expiry
The expiry time for issued access tokens and refresh tokens must be deterministic for the Data Recipient.

In order to achieve this:

- The Data Holder MUST indicate the lifetime in seconds of the access token in the `expires_in` field of the JSON object returned by the token end-point (see [section 4.2.2] (https://tools.ietf.org/html/rfc6749#section-4.2.2) of **[OAUTH2]**).
- The Data Holder MUST indicate the expiration time of the refresh token using the `refresh_token_expires_at` claim.
