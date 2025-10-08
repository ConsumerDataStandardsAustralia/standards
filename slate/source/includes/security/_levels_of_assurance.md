## Levels of Assurance (LoAs)

Levels Of Assurance (LoAs), returned after a successful authentication **MUST** be represented in Single Ordinal form where a single LoA value is represented.

<a id="ordinal-loa"></a>
### Single Ordinal
A Single LoA value is carried in the _acr_ claim which is described in [section 2](https://openid.net/specs/openid-connect-core-1_0.html#IDToken) of **[[OIDC]](#nref-OIDC)**.

- An LoA of 2 is represented by the URI: `urn:cds.au:cdr:2`
  - The authenticators used to attain this level **MUST** achieve Single Factor Authentication as defined in [Authentication Schedule](#authentication-schedule).
  - The authenticators used to attain this level **MAY** conform with the Authentication Level 'AL1' rules specified under the Digital ID Accreditation Data Standards **[[DigitalID-Accreditation]](#nref-DigitalID-Accreditation)** Authentication Levels (Chapter 2) requirements.
- An LoA of 3 is represented by the URI: `urn:cds.au:cdr:3`
  - The authenticators used to attain this level **MUST** achieve Multi-Factor Authentication as defined in [Authentication Schedule](#authentication-schedule).
  - The authenticators used to attain this level **MAY** conform with the Authentication Level 'AL2' rules specified under the Digital ID Accreditation Data Standards **[[DigitalID-Accreditation]](#nref-DigitalID-Accreditation)** Authentication Levels (Chapter 2) requirements.
- An LoA of 4 is represented by the URI: `urn:cds.au:cdr:4`
  - The authenticators used to attain this level **MUST** conform with the Authentication Level 'AL3' rules specified under the Digital ID Accreditation Data Standards **[[DigitalID-Accreditation]](#nref-DigitalID-Accreditation)** Authentication Levels (Chapter 2) requirements.


*READ* operations **SHALL** only be allowed where __at least__ an LoA of 2 has been achieved during the establishment of consent.

*WRITE* operations **SHALL** only be allowed where:

- __At least__ an LoA of 3 has been achieved during the establishment of consent, or
- __At least__ an LoA of 2 has been achieved during the establishment of consent and a subsequent challenge/response has resulted in an LoA of 3 being achieved within the lifespan of the current Access Token.