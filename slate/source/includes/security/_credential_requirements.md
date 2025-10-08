## Credential Requirements

### User Identifiers
If a data holder requests a user identifier for the purposes of identifying the customer during authentication, then the data holder:

- **MUST** request a user identifier that can uniquely identify the customer.
- **MUST** request a user identifier that is already known by the customer in the redirected page.

### Baseline Credential Requirements
Data holders:

- **MUST ONLY** support authenticator types as permitted by the Authentication levels (AL) requirements defined in **[[DigitalID-Accreditation]](#nref-DigitalID-Accreditation)** unless otherwise excluded by the [Restricted Credentials](#restricted-credentials) requirements.
- **SHOULD** implement [Multi-Factor Authentication](#authentication-schedule) for user access to CDR data containing personal information.

### One Time Password Credential Requirements
Where a data holder supports the 'Redirect to Web with OTP' flow:

- The data holder **MUST** request a user identifier in accordance with [User Identifiers](#user-identifiers).
- The data holder **MUST** provide a one-time password (OTP) to the customer through an existing channel or mechanism that the customer can then enter into the redirected page.
- The delivery mechanism for the OTP is at the discretion of the data holder, but **MUST** align to existing and preferred channels for the customer.
- The data holder **SHOULD** implement additional controls to minimise the risk of interception of the OTP through the selected delivery mechanism.
- The provided OTP **MUST** only be used for authentication for CDR based sharing and **MUST NOT** be usable for the authorisation of other transactions or actions.
- The provided OTP **MUST** be invalidated after a period of time at the discretion of the data holder. This expiry period **SHOULD** facilitate enough time for the customer to reasonably complete the authorisation process.
- The provided OTP **MUST** be numeric digits and be between 4 and 6 digits in length.
- The algorithm for the creation of the OTP is at the discretion of the data holder but **SHOULD** incorporate a level of pseudo-randomness appropriate for the use case.
- The data holder **SHOULD** implement additional controls to minimise the risk of enumeration attacks via the redirect page.

### Restricted Credentials
The following credential constraints apply such that Authenticators:

- **MUST NOT** permit Memorised Secrets defined by **[[DigitalID-Accreditation]](#nref-DigitalID-Accreditation)** to achieve 'LoA 2' (as a single factor of authentication only).