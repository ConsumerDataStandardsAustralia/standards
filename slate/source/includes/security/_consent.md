<a id="consent"></a>
## Consent
Consent requirements will be communicated between the Data Recipient Software Product and Data Holder via the authorisation request object.  The primary mechanism for capturing consent will be scopes and claims under **[OIDC]**.

Other patterns for the establishment of consent **MAY** be considered in the future, including the incorporation of fine-grained consent for specific use cases.

## Scopes and Claims

### OIDC Scopes
In addition to CDR data scopes the following scopes **MUST** be supported:

- `openid`: As described as [section 3.1.2.1](https://openid.net/specs/openid-connect-core-1_0.html#AuthRequest) of **[OIDC]**, this scope **MUST** be present on each authentication request.
- `profile`: Data Holders **MUST** support the `profile` scope as described in [section 5.4](https://openid.net/specs/openid-connect-core-1_0.html#ScopeClaims) of **[OIDC]**.  This scope **MAY** be present on an authentication request.

### Claims

```diff
Replaced the statement:
- The following [normal](https://openid.net/specs/openid-connect-core-1_0.html#NormalClaims) **[OIDC]** claims MUST be supported. This list includes, but is not limited to, **[OIDC]** [standard claims](https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims) :
with:
+ The following [normal](https://openid.net/specs/openid-connect-core-1_0.html#NormalClaims) **[OIDC]** and [standard claims](https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims) claims MUST be supported for the authenticated End-User*:
```

```diff
Added the section on standard claims
```
The following [normal](https://openid.net/specs/openid-connect-core-1_0.html#NormalClaims) **[OIDC]** and [standard claims](https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims) claims **MUST** be supported for the authenticated End-User*:

- `sub`: [Pairwise Pseudonymous Identifier (PPID)](#identifiers) for the End-User at the Data Holder.
- `acr`: Authentication Context Class Reference.  **MUST** contain a valid [ordinal LoA value](#ordinal-loa).
- `auth_time`: Time when the End-User authentication occurred. Its value is a JSON number representing the number of seconds from 1970-01-01T00:00:00Z to the UTC `auth_time`. It **MUST** be returned by the Data Holder in the ID Token when the Data Recipient Software Product has requested it as an essential claim according to section 2 of the **[OIDC]** standard. It **SHOULD NOT** be returned via the UserInfo endpoint.
- `name`: End-User's full name in displayable form including all name parts.
- `given_name`: Given name(s) or first name(s) of the End-User.
- `family_name`: Surname(s) or last name(s) of the End-User.
- `updated_at`: Time the End-User's information was last updated. Its value is a JSON number representing the number of seconds from 1970-01-01T00:00:00Z to the UTC `updated_at` time.

The following additional claims **MUST** be supported:

- `refresh_token_expires_at`: indicates the date-time at which the most recently provided refresh token will expire. Its value **MUST** be a number containing a NumericDate value, as specified in section 2 of [section 2](https://tools.ietf.org/html/draft-ietf-oauth-json-web-token-32#section-2) **[JWT]**.  If no refresh token has been provided then a zero value should be returned.
- `sharing_expires_at`: indicates the date-time at which the current sharing arrangement will expire. Its value **MUST** be a number containing a NumericDate value, as specified in [section 2](https://tools.ietf.org/html/draft-ietf-oauth-json-web-token-32#section-2) of **[JWT]**.  If consent is not complete or a `sharing_duration` was not requested in the authorisation request object then a zero value should be returned.

The following standard **[OIDC]** claims **MAY** be supported:

- `email`: End-User's preferred e-mail address. Its value **MUST** conform to the **[RFC5322]** addr-spec syntax. The Data Recipient **MUST NOT** rely upon this value being unique, as discussed in Section 5.7 of **[OIDC]**.  
- `email_verified`: True if the End-User's e-mail address has been verified; otherwise false. When this Claim Value is true, this means that the Data Holder took affirmative steps to ensure that this e-mail address was controlled by the End-User at the time the verification was performed. The means by which an e-mail address is verified is context-specific, and dependent upon the trust framework or contractual agreements within which the parties are operating.  
- `phone_number`: End-User's preferred telephone number. **[E.164]** is **RECOMMENDED** as the format of this Claim, for example, +1 (425) 555-1212 or +56 (2) 687 2400. If the phone number contains an extension, it is **RECOMMENDED** that the extension be represented using the **[RFC3966]** extension syntax, for example, +1 (604) 555-1234;ext=5678.  
- `phone_number_verified`: True if the End-User's phone number has been verified; otherwise false. When this Claim Value is true, this means that the Data Holder took affirmative steps to ensure that this phone number was controlled by the End-User at the time the verification was performed. The means by which a phone number is verified is context- specific, and dependent upon the trust framework or contractual agreements within which the parties are operating. When true, the phone_number Claim MUST be in **[E.164]** format and any extensions MUST be represented in **[RFC3966]** format.  
- `address`: End-User's preferred postal address. The value of the address member is a JSON **[RFC4627]** structure containing some or all of the members defined in Section 5.1.1.

Other **[OIDC]** Standard Claims **MUST** be ignored and not authorised.

**Note:** For non-individual consumers, claims available via the profile scope will only return the details of the authenticated End-User and not the organisation or non-individual consumer.
Data Holders **SHOULD** explicitly capture Claims requested by the Data Recipient. If the data cluster or **[OIDC]** profile scope changes meaning in future this ensures the Data Holder only returns what the consumer initially authorised to disclose.
