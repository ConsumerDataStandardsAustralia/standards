## Consent
Consent requirements will be communicated between the Data Recipient Software Product and Data Holder via the authorisation request object. The primary mechanism for capturing consent will be scopes and claims under **[[OIDC]](#nref-OIDC)**.

Other patterns for the establishment of consent **MAY** be considered in the future, including the incorporation of fine-grained consent for specific use cases.

## Scopes and Claims

### OIDC Scopes
In addition to CDR data scopes the following scopes **MUST** be supported:

- `openid`: As described as [section 3.1.2.1](https://openid.net/specs/openid-connect-core-1_0.html#AuthRequest) of **[[OIDC]](#nref-OIDC)**, this scope **MUST** be present on each authentication request.
- `profile`: Data Holders **MUST** support the `profile` scope as described in [section 5.4](https://openid.net/specs/openid-connect-core-1_0.html#ScopeClaims) of **[[OIDC]](#nref-OIDC)**. This scope **MAY** be present on an authentication request.

### Claims



The following [normal](https://openid.net/specs/openid-connect-core-1_0.html#NormalClaims) **[[OIDC]](#nref-OIDC)** and [standard claims](https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims) claims **MUST** be supported for the authenticated End-User*:

- _sub_: [Pairwise Pseudonymous Identifier (PPID)](#identifiers-and-subject-types) for the End-User at the Data Holder.
- _acr_: Authentication Context Class Reference. **MUST** contain a valid [ordinal LoA value](#ordinal-loa).
- _auth_time_: Time when the End-User authentication occurred. Its value is a JSON number representing the number of seconds from 1970-01-01T00:00:00Z to the UTC _auth_time_. It **MUST** be returned by the Data Holder in the ID Token when the Data Recipient Software Product has requested it as an essential claim according to section 2 of the **[[OIDC]](#nref-OIDC)** standard. It **SHOULD NOT** be returned via the UserInfo endpoint.
- _name_: End-User's full name in displayable form including all name parts.
- _given_name_: Given name(s) or first name(s) of the End-User.
- _family_name_: Surname(s) or last name(s) of the End-User.
- _updated_at_: Time the End-User's information was last updated. Its value is a JSON number representing the number of seconds from 1970-01-01T00:00:00Z to the UTC _updated_at_ time.



The following standard **[[OIDC]](#nref-OIDC)** claims **MAY** be supported:

- _email_: End-User's preferred e-mail address. Its value **MUST** conform to the **[[RFC5322]](#nref-RFC5322)** addr-spec syntax. The Data Recipient **MUST NOT** rely upon this value being unique, as discussed in Section 5.7 of **[[OIDC]](#nref-OIDC)**. 
- _email_verified_: True if the End-User's e-mail address has been verified; otherwise false. When this Claim Value is true, this means that the Data Holder took affirmative steps to ensure that this e-mail address was controlled by the End-User at the time the verification was performed. The means by which an e-mail address is verified is context-specific, and dependent upon the trust framework or contractual agreements within which the parties are operating. 
- _phone_number_: End-User's preferred telephone number. **[[E.164]](#iref-E-164)** is **RECOMMENDED** as the format of this Claim, for example, `+1 (425) 555-1212` or `+56 (2) 687 2400`. If the phone number contains an extension, it is **RECOMMENDED** that the extension be represented using the **[[RFC3966]](#iref-RFC3966)** extension syntax, for example, `+1 (604) 555-1234;ext=5678`. 
- _phone_number_verified_: `true` if the End-User's phone number has been verified; otherwise `false`. When this Claim Value is `true`, this means that the Data Holder took affirmative steps to ensure that this phone number was controlled by the End-User at the time the verification was performed. The means by which a phone number is verified is context-specific, and dependent upon the trust framework or contractual agreements within which the parties are operating. When `true`, the _phone_number_ Claim MUST be in **[[E.164]](#iref-E-164)** format and any extensions MUST be represented in **[[RFC3966]](#iref-RFC3966)** format. 
- _address_: End-User's preferred postal address. The value of the address member is a JSON **[[RFC4627]](#nref-RFC4627)** structure containing some or all of the members defined in Section 5.1.1.

Other **[[OIDC]](#nref-OIDC)** Standard Claims **MUST** be ignored and not authorised.

**Note:** For non-individual consumers, claims available via the `profile` scope will only return the details of the authenticated End-User and not the organisation or non-individual consumer.
Data Holders **SHOULD** explicitly capture Claims requested by the Data Recipient. If the data cluster or **[[OIDC]](#nref-OIDC)** `profile` scope changes meaning in future this ensures the Data Holder only returns what the consumer initially authorised to disclose.
