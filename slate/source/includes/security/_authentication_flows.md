## Authentication Flows
This profile supports the authentication flows specified by [OpenID Connect](https://openid.net/specs/openid-connect-core-1_0.html) **[OIDC]** as constrained further by [FAPI](https://openid.net/wg/fapi/) **[FAPI]**.


Specifically the OIDC Hybrid Flow outlined at [section 3.3](https://openid.net/specs/openid-connect-core-1_0.html#HybridFlowAuth) of **[OIDC]**.

From July 4th 2022, OIDC Authorization Code Flow outlined at [section 3.1](https://openid.net/specs/openid-connect-core-1_0.html#CodeFlowAuth)  of **[OIDC]** is supported.

No other flows are currently supported.


### Baseline Security Provisions

#### Data Holders
**From July 4th 2022 (FAPI 1.0 Migration Phase 1)**, the following requirements apply:

*	Data Holders that do not support **[PKCE]** **MUST** ignore PKCE claims and **MUST NOT** reject clients sending PKCE claims.
* Data Holders **MUST NOT** reject requests with a "x-fapi-customer-ip-address" header containing a valid IPv4 or IPv6 address.
*	Data Holders **MAY** support FAPI 1.0 Advanced Profile (**[FAPI-1.0-Advanced]**).
*	Data Holders **MAY** support **[PKCE]** (RFC7636).
*	Data Holders **MAY** allow the OIDC Authorization Code Flow, if supported, in accordance with FAPI 1.0 Advanced and **MUST** require **[JARM]** and **[PKCE]**.

**From September 16th 2022 (FAPI 1.0 Migration Phase 2)**, the following requirements apply in addition to the FAPI 1.0 Migration Phase 1 requirements:

*	Data Holders **MUST** support the OIDC Hybrid Flow.
*	Data Holders **MUST** support FAPI 1.0 Advanced Profile (**[FAPI-1.0-Advanced]**).
*	Data Holders **MAY** support **[PKCE]** (RFC7636).
*	Data Holders **SHOULD** support OIDC Authorization Code Flow.

**From April 7th 2023 (FAPI 1.0 Migration Phase 3)**, the following requirements apply in addition to the FAPI 1.0 Migration Phase 2 requirements:

*	Data Holders **MUST** support OIDC Authorization Code Flow.
*	Data Holders **MAY** support the OIDC Hybrid Flow.

#### Data Recipient Software Products

**From July 4th 2022 (FAPI 1.0 Migration Phase 1)**, the following requirements apply:

*	Data Recipient Software Products **SHOULD NOT** reuse "authorization_code" values, and if reused, it will be rejected.
* Data Recipient Software Products **MAY** send requests with a "x-fapi-customer-ip-address" header containing a valid IPv4 or IPv6 address.

```diff
Replaced the statement:
- Data Recipient Software Products MUST use [RFC9126] (PAR) with [PKCE] (RFC7636) and, if supported, MUST use S256 as the code challenge method.
with:
+ Data Recipient Software Products MUST use [RFC9126] (PAR) with [PKCE] (RFC7636) and MUST use S256 as the code challenge method.
```

**From September 16th 2022**, the following requirements apply in addition to the FAPI 1.0 Migration Phase 1 requirements:

*	Data Recipient Software Products **MUST** support FAPI 1.0 Advanced Profile (**[FAPI-1.0-Advanced]**).
*   Data Recipient Software Products **MUST** use **[RFC9126]** (PAR) with **[PKCE]** (RFC7636) and **MUST** use S256 as the code challenge method.
*	Data Recipient Software Products **SHOULD** use OIDC Authorization Code Flow.

<a id="hybrid-flow"></a>
### OIDC Hybrid Flow
The **[OIDC]** Hybrid Flow is a type of redirection flow where the consumer's user
agent is redirected from a Data Recipient Software Product’s (Relying Party) web site to a Data
Holder’s Authorisation end point in the context of an **[OIDC]** authentication
request. The OIDC Hybrid Flow incorporates aspects of the both the implicit flow and
authorisation code flow detailed under **[OIDC]**.


Only a `response_type` (see [section 3.3](https://openid.net/specs/openid-connect-core-1_0.html#HybridFlowAuth) of **[OIDC]**) of `code id_token` **SHALL** be allowed.

The `request_uri` parameter is only supported if the Data Holder supports PAR.

In addition, the following statements are applicable for this flow:

- Data Holders **MUST** request a user identifier that can uniquely identify the customer and that is already known by the customer in the redirected page
- Data Holders **MUST NOT** request that the customer enter an existing password in the redirected page
- Data Holders **MUST** provide a one-time password (OTP) to the customer through an existing channel or mechanism that the customer can then enter into the redirected page
- The delivery mechanism for the OTP is at the discretion of the Data Holder but **MUST** align to existing and preferred channels for the customer and **MUST NOT** introduce unwarranted friction into the authentication process
- Data Holders **SHOULD** implement additional controls to minimise the risk of interception of the OTP through the selected delivery mechanism
- The provided OTP **MUST** be used only for authentication for CDR based sharing and **MUST NOT** be usable for the authorisation of other transactions or actions
- The provided OTP **MUST** be invalidated after a period of time at the discretion of the Data Holder.  This expiry period **SHOULD** facilitate enough time for the customer to reasonably complete the authorisation process
- The provided OTP **MUST** be numeric digits and be between 4 and 6 digits in length
- The algorithm for the creation of the OTP is at the discretion of the Data Holder but **SHOULD** incorporate a level of pseudorandomness appropriate for the use case
- Data Holders **SHOULD** implement additional controls to minimise the risk of enumeration attacks via the redirect page
- Data Recipient Software Products **SHOULD** record the following information each time an authorisation flow is executed: username (consumer’s ID at the Data Recipient Software Product), timestamp, IP, consent scopes and duration.

In line with CDR Rule 4.24 on restrictions when asking CDR consumers to authorise disclosure of CDR data, unwarranted friction for OTP delivery is considered to include:

- the addition of any requirements beyond normal data holder practices for verification code delivery
- providing or requesting additional information beyond normal data holder practices for verification code delivery
- offering additional or alternative services
- reference or inclusion of other documents

Additional requirements and guidelines for this flow are contained in the [Consumer Experience](#consumer-experience) section.


<a id="authorization-code-flow"></a>
### OIDC Authorization Code Flow

From July 4th 2022,
* Data Holders **MAY** support OIDC Authorization Code Flow according to **[FAPI-1.0-Advanced]**
* Data Recipient Software Products **MAY** use OIDC Authorization Code Flow according to **[FAPI-1.0-Advanced]** if the Data Holder supports it.

In addition, the following statements are applicable for this flow:

* Only a response_type (see [section 3.1](https://openid.net/specs/openid-connect-core-1_0.html#CodeFlowAuth) of **[OIDC]**) of code **SHALL** be allowed.
* Data Holders **MUST** also support **[JARM]** and **[PKCE]**
