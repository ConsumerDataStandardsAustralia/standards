## Transaction Security
### Use of TLS
All HTTP calls MUST be made using HTTPS incorporating TLS >= 1.2.

<a id="mutual-tls"></a>
### Use of MTLS

All back-channel communication between Data Recipient Software Product and Data Holder systems MUST incorporate, unless stated otherwise, **[[MTLS]](#nref-MTLS)** as part of the TLS handshake:

- The presented Client transport certificate MUST be issued by the CDR Certificate Authority (CA).  The Server MUST NOT trust Client transport certificates issued by other authorities.
- The presented Server transport certificate MUST be issued by the CDR Certificate Authority (CA).  The Client MUST NOT trust Server transport certificates issued by other authorities.

End points for transferring CDR Data that are classified as not requiring authentication do not require the use of **[[MTLS]](#nref-MTLS)**.


### Holder of Key Mechanism

**[[MTLS]](#nref-MTLS)** MUST be supported as a Holder of Key (HoK) Mechanism.

Note that, by implication, resource requests MUST be validated to ensure the client certificate and access token match.

OAUTB SHALL NOT be supported due to a lack industry support.

**[[MTLS]](#nref-MTLS)** HoK allows issued tokens to be bound to a client certificate as specified in [section 3](https://tools.ietf.org/id/draft-ietf-oauth-mtls-07.html#SenderConstrainedAccess) of **[[MTLS]](#nref-MTLS)**.


### Ciphers

Only the following cipher suites SHALL be permitted in accordance with [section 8.5](https://openid.net/specs/openid-financial-api-part-2-1_0.html#tls-considerations) of **[[FAPI-1.0-Advanced]](#nref-FAPI-1-0-Advanced)**:

-   TLS\_ECDHE\_RSA\_WITH\_AES\_128\_GCM\_SHA256
-   TLS\_ECDHE\_RSA\_WITH\_AES\_256\_GCM\_SHA384

The following cipher suites **SHOULD NOT** be supported:

-   TLS\_DHE\_RSA\_WITH\_AES\_128\_GCM\_SHA256
-   TLS\_DHE\_RSA\_WITH\_AES\_256\_GCM\_SHA384