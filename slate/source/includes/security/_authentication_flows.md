## Authentication Flows


This profile supports the authentication flows specified by [OpenID Connect](https://openid.net/specs/openid-connect-core-1_0.html) **[[OIDC]](#nref-OIDC)** as constrained further by **[[FAPI]](#iref-FAPI)**.



Authorization Code Flow outlined at [section 3.1](https://openid.net/specs/openid-connect-core-1_0.html#CodeFlowAuth) of **[[OIDC]](#nref-OIDC)** is supported.

**Until May 12th 2025**, Data Holders **MAY** support OIDC Hybrid Flow outlined at [section 3.3](https://openid.net/specs/openid-connect-core-1_0.html#HybridFlowAuth) of **[[OIDC]](#nref-OIDC)**.

No other flows are currently supported.


### Baseline Security Provisions

#### Data Holders
The *request_uri* parameter is only supported if the Data Holder supports PAR.

In addition, the following statements are applicable:

- Data Holders **MUST** support FAPI 1.0 Advanced Profile **[[FAPI-1.0-Advanced]](#nref-FAPI-1-0-Advanced)**.
- Data Holders **MUST** support Authorization Code Flow.
- Data Holders **SHALL** require the value of *response_type* described in **[[RFC6749]](#nref-RFC6749)** to be `code`.


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
- If _authorization_encrypted_response_alg_ is omitted from the registration request, authorisation response encryption **SHALL NOT** be performed.

#### Data Recipient Software Products
Data Recipients **MUST** support **[[JARM]](#nref-JARM)** in accordance with **[[FAPI-1.0-Advanced]](#nref-FAPI-1-0-Advanced)** [section 5.2.3.2](https://openid.net/specs/openid-financial-api-part-2-1_0.html#jarm-1).

In addition,

- Data Recipients **MUST** request authorisation response signing using one of the _authorization_signing_alg_values_supported_ values offered by the Data Holder.
- Data Recipients **MAY** request response encryption using one of the advertised encryption sets.
- Data Recipients **MAY** request no response encryption by omitting the values in their client registration.
- If _authorization_signed_response_alg_ is omitted, the default algorithm is `PS256`.


Additional requirements and guidelines for the authentication flows are contained in the [Consumer Experience](#consumer-experience) section.

<h3 id="authentication-flows_redirect-to-app">Redirect to App</h3>
<strong>Data Holders</strong>

Data holders **MUST** support Redirect to App in accordance with the [Authentication Schedule](#authentication-schedule), and:

- Data holders **MUST** use a single issuer identifier per app.
- Data holders **MUST** only support Authorization Code Flow for Redirect to App authentication.
- Data holders **MUST** support Claimed "https" Scheme URI redirection in accordance with [section 7.2](https://datatracker.ietf.org/doc/html/rfc8252#section-7.2) and [section 8](https://datatracker.ietf.org/doc/html/rfc8252#section-8) of [**[RFC8252]**](#nref-RFC8252).
- After authentication, the data holder **MUST** continue the authorisation flow within the data holder app.
- Data holders **SHOULD** implement additional controls to minimise the risk of enumeration attacks via the redirect page.

<strong>Data Recipients</strong>

Data recipients **MUST** support Redirect to App in accordance with the [Authentication Schedule](#authentication-schedule), and:
<ul><li>Data recipients **MUST** register separate Redirect URIs where they provide both app-based and web-based redirection.</li>
<li>If data recipients initiate consent from an app, they **MUST** support Claimed "https" Scheme URI redirection in accordance with [section 7.2](https://datatracker.ietf.org/doc/html/rfc8252#section-7.2) and [section 8](https://datatracker.ietf.org/doc/html/rfc8252#section-8) of [**[RFC8252]**](#nref-RFC8252) for their app Redirect URI.</li></ul>