## Transaction Security
### Use of TLS
All HTTP calls MUST be made using HTTPS incorporating TLS >= 1.2.

<a id="mutual-tls"></a>
### Use of MTLS

All back-channel communication between Data Recipient Software Product and Data Holder systems MUST incorporate, unless stated otherwise, **[[MTLS]](#nref-MTLS)** as part of the TLS handshake:

- The presented Client transport certificate MUST be issued by the CDR Certificate Authority (CA).  The Server MUST NOT trust Client transport certificates issued by other authorities.
- The presented Server transport certificate MUST be issued by the CDR Certificate Authority (CA).  The Client MUST NOT trust Server transport certificates issued by other authorities.


```diff
Clarified that public endpoints MUST NOT use MTLS
```

Endpoints for transferring CDR Data that are classified as not requiring authentication (i.e. public endpoints) or those specified as TLS, **MUST NOT** use **[[MTLS]](#nref-MTLS)**.


### Holder of Key Mechanism

**[[MTLS]](#nref-MTLS)** MUST be supported as a Holder of Key (HoK) Mechanism.

Note that, by implication, resource requests MUST be validated to ensure the client certificate and access token match.

OAUTB SHALL NOT be supported due to a lack industry support.

**[[MTLS]](#nref-MTLS)** HoK allows issued tokens to be bound to a client certificate as specified in [section 3](https://tools.ietf.org/id/draft-ietf-oauth-mtls-07.html#SenderConstrainedAccess) of **[[MTLS]](#nref-MTLS)**.


### Ciphers




**Until March 17th 2025, the following SHALL requirements apply:**

Only the following cipher suites SHALL be permitted in accordance with [section 8.5](https://openid.net/specs/openid-financial-api-part-2-1_0.html#tls-considerations) of **[[FAPI-1.0-Advanced]](#nref-FAPI-1-0-Advanced)**:

-   `TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256`
-   `TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384`

The following cipher suites **SHOULD NOT** be supported:

-   `TLS_DHE_RSA_WITH_AES_128_GCM_SHA256`
-   `TLS_DHE_RSA_WITH_AES_256_GCM_SHA384`

**From March 17th 2025, the following requirements SHALL apply:**

In addition to [section 8.5](https://openid.net/specs/openid-financial-api-part-2-1_0.html#tls-considerations) of **[[FAPI-1.0-Advanced]](#nref-FAPI-1-0-Advanced)** only cipher suites recommended in **[[BCP195]](#nref-BCP195)** **SHALL** be permitted.

