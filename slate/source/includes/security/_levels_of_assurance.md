## Levels of Assurance (LoAs)
Levels Of Assurance (LoAs), returned after a successful authentication MUST be represented in Single Ordinal form where a single LoA value is represented.

<a id="ordinal-loa"></a>
### Single Ordinal
A Single LoA value is carried in the `acr` claim which is described in [section 2](https://openid.net/specs/openid-connect-core-1_0.html#IDToken) of **[OIDC]**.

  - An LoA of 2 is represented by the URI: `urn:cds.au:cdr:2`
    - The authenticator used to attain this level MUST conform with the Credential Level `CL1` rules specified under the [Trusted Digital Identity Framework](https://www.dta.gov.au/our-projects/digital-identity/trusted-digital-identity-framework) **[TDIF]** Authentication Credential Requirements specification.


  - An LoA of 3 is represented by the URI: `urn:cds.au:cdr:3`
    - The authenticators used to attain this level MUST conform with the Credential Level `CL2` rules specified under the [Trusted Digital Identity Framework](https://www.dta.gov.au/our-projects/digital-identity/trusted-digital-identity-framework/framework-documents) **[TDIF]** Authentication Credential Requirements specification.

*READ* operations SHALL only be allowed where __at least__ an LoA of 2 has been achieved during the establishment of consent.

*WRITE* operations SHALL only be allowed where:

- __At least__ an LoA of 3 has been achieved during the establishment of consent, or
- __At least__ an LoA of 2 has been achieved during the establishment of consent and a subsequent challenge/response has resulted in an LoA of 3 being achieved within the lifespan of the current Access Token.
