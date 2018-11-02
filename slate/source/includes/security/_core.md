## High Level Profile

Securing of the API end points defined by the standards will be accomplished through alignment with well defined industry protocols and security profiles.  Context specific constraints are then applied to these profiles to provide implementation clarity or reduce risk.

In particular the standards are aligned to the [Financial API (FAPI) Read/Wite profile](http://openid.net/specs/openid-financial-api-part-2.html).

Note that the FAPI Read/Write profile builds on the [FAPI Read Only profile](http://openid.net/specs/openid-financial-api-part-1.html)  and implies alignment with the use of [Open ID Connect](https://openid.net/specs/openid-connect-core-1_0.html).


## Additional Constraints

The FAPI Read/Write profile implies specific implementation decisions that are worthy of explicit statement. There are also some additional, specific constraints are applicable for implementations conforming to these standards:

- Only the Hybrid Authorisation flow will be supported
- Public Clients will not be supported.  All payload data will be transferred via backchannel communication
- Use of TLS mandated for all interactions
-	Requirement to use TLS 1.2 or greater
-	The version and configuration of TLS for implementations conforming with standards will not be a lower version, or less secure, than that of other digital channels deployed by the data provider
-	A TLS server certificate check shall be performed, as per RFC 6125
-	Mutual TLS will be used to secure back-channel communication between the data consumer and data provider
- For all interactions (except for authorisation) the cipher suites that may be used will be limited to:
    - TLS_DHE_RSA_WITH_AES_128_GCM_SHA256
    - TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256
    - TLS_DHE_RSA_WITH_AES_256_GCM_SHA384
    - TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384
