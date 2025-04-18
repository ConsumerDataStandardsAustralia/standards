## Authentication Flows
This profile supports the authentication flows specified by [OpenID Connect](https://openid.net/specs/openid-connect-core-1_0.html) **[[OIDC]](#nref-OIDC)** as constrained further by **[[FAPI]](#iref-FAPI)**.



Authorization Code Flow outlined at [section 3.1](https://openid.net/specs/openid-connect-core-1_0.html#CodeFlowAuth) of **[[OIDC]](#nref-OIDC)** is supported.

**Until May 12th 2025**, Data Holders **MAY** support OIDC Hybrid Flow outlined at [section 3.3](https://openid.net/specs/openid-connect-core-1_0.html#HybridFlowAuth) of **[[OIDC]](#nref-OIDC)**.

No other flows are currently supported.


### Baseline Security Provisions

#### Data Holders
The _request_uri_ parameter is only supported if the Data Holder supports PAR.



In addition, the following statements are applicable:


- Data Holders **MUST** support FAPI 1.0 Advanced Profile (**[[FAPI-1.0-Advanced]](#nref-FAPI-1-0-Advanced)**).
- Data Holders **MUST** support Authorization Code Flow.
- Data Holders **MUST** request a user identifier that can uniquely identify the customer and that is already known by the customer in the redirected page.
- Data Holders **MUST NOT** request that the customer enter an existing password in the redirected page.
- Data Holders **MUST** provide a one-time password (OTP) to the customer through an existing channel or mechanism that the customer can then enter into the redirected page.
- The delivery mechanism for the OTP is at the discretion of the Data Holder but **MUST** align to existing and preferred channels for the customer and **MUST NOT** introduce unwarranted friction into the authentication process.
- Data Holders **SHOULD** implement additional controls to minimise the risk of interception of the OTP through the selected delivery mechanism.
- The provided OTP **MUST** be used only for authentication for CDR based sharing and **MUST NOT** be usable for the authorisation of other transactions or actions.
- The provided OTP **MUST** be invalidated after a period of time at the discretion of the Data Holder. This expiry period **SHOULD** facilitate enough time for the customer to reasonably complete the authorisation process.
- The provided OTP **MUST** be numeric digits and be between 4 and 6 digits in length.
- The algorithm for the creation of the OTP is at the discretion of the Data Holder but **SHOULD** incorporate a level of pseudorandomness appropriate for the use case.
- Data Holders **SHOULD** implement additional controls to minimise the risk of enumeration attacks via the redirect page.

**From May 12th 2025**, 

- Data Holders **SHALL** require the value of _response_type_ described in [**[RFC6749]**](#nref-RFC6749) to be `code`

In line with CDR Rule 4.24 on restrictions when asking CDR consumers to authorise disclosure of CDR data, unwarranted friction for OTP delivery is considered to include:

- the addition of any requirements beyond normal data holder practices for verification code delivery
- providing or requesting additional information beyond normal data holder practices for verification code delivery
- offering additional or alternative services
- reference or inclusion of other documents.


#### Data Recipient Software Products


**Until 12th May 2025**, Data Recipient Software Products **SHOULD** use Authorization Code Flow. 
**From 12th May 2025**, Data Recipient Software Products **SHALL** only use Authorization Code Flow. 

In addition, the following statements are applicable:

- Data Recipient Software Products **SHOULD** record the following information each time an authorisation flow is executed: username (consumer’s ID at the Data Recipient Software Product), timestamp, IP, consent scopes and duration.
- Data Recipient Software Products **SHOULD NOT** reuse _authorization_code_ values, and if reused, it will be rejected.
- Data Recipient Software Products **MAY** send requests with a _x-fapi-customer-ip-address_ header containing a valid IPv4 or IPv6 address.
- Data Recipient Software Products **MUST** support FAPI 1.0 Advanced Profile (**[[FAPI-1.0-Advanced]](#nref-FAPI-1-0-Advanced)**).
- Data Recipient Software Products **MUST** use **[[RFC9126]](#nref-RFC9126)** (PAR) with **[[PKCE]](#nref-PKCE)** (**[[RFC7636]](#nref-RFC7636)**) and, if supported, **MUST** use `S256` as the code challenge method.

### OIDC Hybrid Flow
The **[[OIDC]](#nref-OIDC)** Hybrid Flow is a type of redirection flow where the consumer's user agent is redirected from a Data Recipient Software Product’s (Relying Party) web site to a Data Holder’s Authorization endpoint in the context of an **[[OIDC]](#nref-OIDC)** authentication request. The OIDC Hybrid Flow incorporates aspects of the both the Implicit Flow and Authorization Code Flow detailed under **[[OIDC]](#nref-OIDC)**.

Only a _response_type_ (see [section 3.3](https://openid.net/specs/openid-connect-core-1_0.html#HybridFlowAuth) of **[[OIDC]](#nref-OIDC)**) of `code id_token` **SHALL** be allowed.


### Authorization Code Flow

The following statements are applicable for this flow:

- Only a _response_type_ (see [section 3.1](https://openid.net/specs/openid-connect-core-1_0.html#CodeFlowAuth) of **[[OIDC]](#nref-OIDC)**) of `code` **SHALL** be allowed.
- Data Holders **MUST** also support **[[JARM]](#nref-JARM)** and **[[PKCE]](#nref-PKCE)**

#### Data Holders
Data Holders **MUST** support **[[JARM]](#nref-JARM)** in accordance with **[[FAPI-1.0-Advanced]](#nref-FAPI-1-0-Advanced)** [section 5.2.2.2](https://openid.net/specs/openid-financial-api-part-2-1_0.html#jarm).

> **JWT Secured Authorization Response Mode for OAuth 2.0 (JARM)**  
> Data Holders **MAY** support Authorization Response encryption.
>
> However, at present, there is no confidential information in the authorization response, hence encryption of the authorization response is not required for the purposes of security or confidentiality. In addition, whilst response encryption **MAY** be used, to achieve greater interoperability, it is not recommended to use encryption in this case at this time.

In addition,

- Data Holders **MAY** advertise they do not support authorisation response encryption: either by omitting these values from their OpenID Provider Metadata, or by presenting an empty array for the supported parameters.
- If the Data Holder supports authorisation response encryption and the _authorization_encrypted_response_alg_ is omitted from the registration request, the Data Holder **MAY** require response encryption by returning a client registration response with the chosen _authorization_encrypted_response_alg_ value.

#### Data Recipient Software Products
Data Recipients **MUST** support **[[JARM]](#nref-JARM)** in accordance with **[[FAPI-1.0-Advanced]](#nref-FAPI-1-0-Advanced)** [section 5.2.3.2](https://openid.net/specs/openid-financial-api-part-2-1_0.html#jarm-1).

In addition,

- Data Recipients **MUST** request authorisation response signing using one of the _authorization_signing_alg_values_supported_ values offered by the Data Holder.
- Data Recipients **MAY** request response encryption using one of the advertised encryption sets.
- Data Recipients **MAY** request no response encryption by omitting the values in their client registration.
- If _authorization_signed_response_alg_ is omitted, the default algorithm is `PS256`.


Additional requirements and guidelines for the authentication flows are contained in the [Consumer Experience](#consumer-experience) section.
