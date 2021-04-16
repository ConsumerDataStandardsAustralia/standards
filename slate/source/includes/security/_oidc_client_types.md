## OIDC Client Types
Only Confidential Clients SHALL be supported under this profile. Therefore, Public clients SHALL NOT be supported.

In reference to the client types referenced in [section 2.1] (https://tools.ietf.org/html/rfc6749#section-2.1) of **[OAUTH2]**:

- Confidential Clients MUST be supported under this profile.
- Public clients MUST NOT be supported.

### JSON Web Key Sets

Data Holder public keys MUST only be obtained from the standard OIDC end point used for that purpose.

Data Recipient public keys MUST only be obtained from the URI registered with the CDR Register.

CDR Register public keys MUST only be obtained from the end point exposed for that purpose.
