<a id="consent"></a>
## Consent
Consent requirements will be communicated between the Data Recipient and Data Holder via the authorisation request object.  The primary mechanism for capturing consent will be scopes and claims under **[OIDC]**.

Other patterns for the establishment of consent may be considered in the future, including the incorporation of fine-grained consent for specific use cases.

## Scopes and Claims

### OIDC Scopes
In addition to CDR data scopes the following scopes MUST be supported:

- `openid`: As described as [section 3.1.2.1](https://openid.net/specs/openid-connect-core-1_0.html#AuthRequest) of **[OIDC]**, this scope MUST be present on each authentication request.
- `profile`: Data Holders MUST support the `profile` scope as described in [section 5.4](https://openid.net/specs/openid-connect-core-1_0.html#ScopeClaims) of **[OIDC]**.  This scope MAY be present on an authentication request.

### Claims
The following [normal](https://openid.net/specs/openid-connect-core-1_0.html#NormalClaims) **[OIDC]** claims MUST be supported. This list includes, but is not limited to, **[OIDC]** [standard claims](https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims) :

- `sub`: [Pairwise Pseudonymous Identifier (PPID)](#identifiers) for the End-User at the Data Holder.
- `acr`: Authentication Context Class Reference.  MUST contain a valid [ordinal LoA value](#ordinal-loa).
- `auth_time`: Time when the End-User authentication occurred. Its value is a JSON number representing the number of seconds from 1970-01-01T00:00:00Z to the UTC `auth_time`. It MUST be returned by the Data Holder in the ID Token when the Data Recipient has requested it as an essential claim according to section 2 of the **[OIDC]** standard. It SHOULD NOT be returned via the UserInfo endpoint.
- `name`: End-User's full name in displayable form including all name parts.
- `given_name`: Given name(s) or first name(s) of the End-User.
- `family_name`: Surname(s) or last name(s) of the End-User.
- `updated_at`: Time the End-User's information was last updated. Its value is a JSON number representing the number of seconds from 1970-01-01T00:00:00Z to the UTC `updated_at` time.

The following additional claims MUST be supported:

- `refresh_token_expires_at`: indicates the date-time at which the most recently provided refresh token will expire. Its value MUST be a number containing a NumericDate value, as specified in section 2 of [section 2](https://tools.ietf.org/html/draft-ietf-oauth-json-web-token-32#section-2) **[JWT]**.  If no refresh token has been provided then a zero value should be returned.
- `sharing_expires_at`: indicates the date-time at which the current sharing arrangement will expire. Its value MUST be a number containing a NumericDate value, as specified in [section 2](https://tools.ietf.org/html/draft-ietf-oauth-json-web-token-32#section-2) of **[JWT]**.  If consent is not complete or a `sharing_duration` was not requested in the authorisation request object then a zero value should be returned.
