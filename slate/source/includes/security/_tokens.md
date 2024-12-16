## Tokens  
### ID Token

> Non-Normative Example - FAPI 1.0 Final Phase 3 Obligations

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
  "acr": "urn:cds.au:cdr:2"
}
```

ID Tokens are specified in [section 2](https://openid.net/specs/openid-connect-core-1_0.html#IDToken) of the **[[OIDC]](#nref-OIDC)** standard.

#### Baseline ID Token requirements

```diff
- Removed OIDC Hybrid Flow qualifications
```

In addition to the mandatory claims specified in [section 2](https://openid.net/specs/openid-connect-core-1_0.html#IDToken) of the **[[OIDC]](#nref-OIDC)** standard, required claims for ID Tokens **MUST** align to [section 5.2.2](https://openid.net/specs/openid-financial-api-part-2-1_0.html#authorization-server) and [section 8.4.3](https://openid.net/specs/openid-financial-api-part-2-1_0.html#authorization-response-parameter-injection-attack) of the **[[FAPI-1.0-Advanced]](#nref-FAPI-1-0-Advanced)** profile.

ID Tokens **MUST** be signed by Data Holders as specified in [section 8.6](https://openid.net/specs/openid-financial-api-part-2-1_0.html#algorithm-considerations) of **[[FAPI-1.0-Advanced]](#nref-FAPI-1-0-Advanced)**.

```diff
- Moved PI restriction for ID tokens out of the OIDC Hybrid Flow requirements to apply as a Baseline requirement
```

ID Tokens **MUST NOT** contain any Personal Information (PI) claims.

```diff
- Deprecated OIDC Hybrid Flow requirements. This authentication flow is no longer supported
```

#### OIDC Hybrid Flow requirements

In accordance with **[[FAPI-1.0-Advanced]](#nref-FAPI-1-0-Advanced)**, ID Tokens **MUST** be signed and encrypted when returned to a Data Recipient Software Product from both the Authorisation End Point and Token End Point.

```diff
+ Moved OIDC Hybrid Flow qualifications out of the Baseline ID Token requirements
```

In addition required claims for ID Tokens **MUST** align to [section 3.3](https://openid.net/specs/openid-connect-core-1_0.html#HybridFlowAuth) (Authentication using the Hybrid Flow) unless otherwise constrained by **[[FAPI-1.0-Advanced]](#nref-FAPI-1-0-Advanced)** profile.

##### Hashing value for state and authorisation code

The following requirements apply to the OIDC Hybrid Flow:

* The `c_hash` value **MUST** be generated according to [section 3.3.2.11](https://openid.net/specs/openid-connect-core-1_0.html#HybridIDToken) of **[[OIDC]](#nref-OIDC)**.
* The `s_hash` value **MUST** be generated according to [section 5.1.1](https://openid.net/specs/openid-financial-api-part-2-1_0.html#id-token-as-detached-signature) of **[[FAPI-1.0-Advanced]](#nref-FAPI-1-0-Advanced)**.

#### Authorization Code Flow requirements

For `response_type` `code`, in accordance with **[[FAPI-1.0-Advanced]](#nref-FAPI-1-0-Advanced)**, ID Tokens **MUST** be signed when returned to a Data Recipient Software Product from the Token End Point.

### Access Token
Access Tokens **MUST** be used as specified in [section 10.3] (https://tools.ietf.org/html/rfc6749#section-10.3) of **[[OAUTH2]](#nref-OAUTH2)**.

An Access Token **MUST** expire between **2 minutes** to **10 minutes** after the Data Holder issues it (at the discretion of the Data Holder).

The process for refreshing an Access Token is described in [section 12.1](https://openid.net/specs/openid-connect-core-1_0.html#RefreshingAccessToken) of **[[OIDC]](#nref-OIDC)**.


* Data Holders **MUST** reject token request with an authorization code (Section 1.3.1 of **[[RFC6749]](#nref-RFC6749)**) if it has been previously used


### Refresh Token
Refresh Tokens **MUST** be supported by Data Holders.

The usage of Refresh Tokens is specified in [section 12](https://openid.net/specs/openid-connect-core-1_0.html#RefreshTokens) of **[[OIDC]](#nref-OIDC)**.

The expiration time for a Refresh Token **MUST** be set by the Data Holder.

Refresh Token expiration **MAY** be any length of time greater than 28 days but **MUST NOT** exceed the end of the duration of sharing consented to by the Consumer.

*	Data Holders **MUST NOT** cycle refresh tokens (rotation). In other words, Refresh Tokens **SHOULD** be issued with an "exp" equal to the sharing duration authorised by the Customer.

### Token Expiry
The expiry time for issued access tokens and refresh tokens **MUST** be deterministic for the Data Recipient Software Product.

In order to achieve this:

- The Data Holder **MUST** indicate the lifetime in seconds of the access token in the `expires_in` field of the JSON object returned by the token end-point (see [section 4.2.2] (https://tools.ietf.org/html/rfc6749#section-4.2.2) of **[[OAUTH2]](#nref-OAUTH2)**).
