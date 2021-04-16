## Authentication Flows
This profile supports the authentication flows specified by [OpenID Connect](https://openid.net/specs/openid-connect-core-1_0.html) **[OIDC]** as constrained further by [FAPI](https://openid.net/wg/fapi/) **[FAPI]**.

Specifically the Hybrid Flow outlined at [section 3.3](https://openid.net/specs/openid-connect-core-1_0.html#HybridFlowAuth) of **[OIDC]**.

No other flows are currently supported.

<a id="hybrid-flow"></a>
### OIDC Hybrid Flow
The **[OIDC]** Hybrid Flow is a type of redirection flow where the consumer's user
agent is redirected from a Data Recipient’s (Relying Party) web site to a Data
Holder’s Authorisation end point in the context of an **[OIDC]** authentication
request. The Hybrid flow incorporates aspects of the both the implicit flow and
authorisation code flow detailed under **[OIDC]**.

Only a `response_type` (see [section 3](https://openid.net/specs/openid-connect-core-1_0.html#Authentication) of **[OIDC]**) of `code id_token` SHALL be allowed.

The `request_uri` parameter is only supported if the Data Holder supports PAR.

In addition, the following statements are applicable for this flow:

- Data Holders MUST request a user identifier that can uniquely identify the customer and that is already known by the customer in the redirected page
- Data Holders MUST NOT request that the customer enter an existing password in the redirected page
- Data Holders MUST provide a one-time password (OTP) to the customer through an existing channel or mechanism that the customer can then enter into the redirected page
- The delivery mechanism for the OTP is at the discretion of the Data Holder but MUST align to existing and preferred channels for the customer and MUST NOT introduce unwarranted friction into the authentication process
- Data Holders SHOULD implement additional controls to minimise the risk of interception of the OTP through the selected delivery mechanism
- The provided OTP MUST be used only for authentication for CDR based sharing and MUST NOT be usable for the authorisation of other transactions or actions
- The provided OTP MUST be invalidated after a period of time at the discretion of the Data Holder.  This expiry period SHOULD facilitate enough time for the customer to reasonably complete the authorisation process
- The provided OTP MUST be numeric digits and be between 4 and 6 digits in length
- The algorithm for the creation of the OTP is at the discretion of the Data Holder but SHOULD incorporate a level of pseudorandomness appropriate for the use case
- Data Holders SHOULD implement additional controls to minimise the risk of enumeration attacks via the redirect page
- Data recipients SHOULD record the following information each time an authorisation flow is executed: username (consumer’s ID at the data recipient), timestamp, IP, consent scopes and duration.

In line with CDR Rule 4.24 on restrictions when asking CDR consumers to authorise disclosure of CDR data, unwarranted friction for OTP delivery is considered to include:

- the addition of any requirements beyond normal data holder practices for verification code delivery
- providing or requesting additional information beyond normal data holder practices for verification code delivery
- offering additional or alternative services
- reference or inclusion of other documents

Additional requirements and guidelines for this flow are contained in the [Consumer Experience](#consumer-experience) section.
