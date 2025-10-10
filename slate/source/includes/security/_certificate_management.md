
## Certificate Management



### Issued by the Register for Data Holders
Certificate | Function | Notes
-----------|------------------------------------------|------------------------------
| <span style="white-space: nowrap;">**Server Certificate(s)**</span> | Certificate is issued to a FQDN.<br><br>Secures the endpoints as detailed in [Participant endpoints](#participant-endpoints). | It will be up to the DH on how these endpoints are segregated. They may all be on the one domain (so only one certificate required) or could be separated.

### Issued by the Register CA for Data Recipients



Certificate | Function | Notes
-----------|------------------------------------------|------------------------------
| **Client Certificate** | Secures the following:<ul><li>Consuming Register APIs.</li><li>Consuming Data Holder APIs.</li></ul>
| <span style="white-space: nowrap;">**Server Certificate(s)**</span> | Certificate is issued to a FQDN. | Not currently required by Data Recipients.


### Certificate Trust Model



The CDR utilises a private certificate trust chain for all Register CA secured endpoints being hosted by [Data Holders](#participant-endpoints), [Data Recipients](#participant-endpoints) and the [Register](#register-apis).

Operational detail related to the CDR Certificate Authority is maintained by the ACCC, and is [available here](https://consumerdataright.atlassian.net/wiki/spaces/DP/pages/360415310/Certificate+Management).


### Certificate Signing Request Profile
When requesting the Register CA certificates, certificate signing requests will need to be provided, conforming to the following profile:

CSR Field | Required | Server | Client
-----------|----------|----------|----------
|**Common Name (CN)**| Mandatory | Primary DNS Name<br>*e.g. api1.test.entity.com* | _Software Product Name_
|**SAN**| Optional | Secondary DNS Name(s) <br>*e.g. api2.test.entity.com* | N/A
|**Organization (O)**| Mandatory| _Brand Name_ | _Brand Name_
|**Organizational Unit (OU)**| Mandatory| `Consumer Data Right` | `Consumer Data Right`
|**Country (C)**| Mandatory | _Country of participant_<br>*e.g. AU* | _Country of participant_<br>*e.g. AU*
|**State (ST)**| Optional | _State of the Participant_<br>*e.g. New South Wales* | _State of the Participant_<br>*e.g. New South Wales*
|**Locality (L)**| Optional | _Locality of the Participant_<br>*e.g. Sydney* | _Locality of the Participant_<br>*e.g. Sydney*
|**Email Address**| Optional | _Participant's email address to be displayed in the issued certificate_ | _Participant's email address to be displayed in the issued certificate_
|**Signature Algorithm**| Mandatory | `SHA256` | `SHA256`
|**Key Algorithm**| Mandatory | `RSA` | `RSA`
|**Key Size**| Mandatory | `2048` | `2048`

**Note:** optional values, if provided, will be validated to be correct.

Please refer to the [Register onboarding guide](https://www.accc.gov.au/focus-areas/consumer-data-right-cdr-0/on-boarding-guide) for further information on certificate issuance.

### Certificate Usage
Further details on the Register CA issued certificates can be found on the [Digital certificate agreements](https://www.cdr.gov.au/resources/agreements/digital-certificate-agreements) page.

### Certificate Validation
Certificate validation must check:

**1. Checking for certificate validity**

Verify private key signature is mathematically linked to the presented public key certificate, presented certificate identifies trusted User/Application and/or Service and certificate is both valid and not revoked.

**2. Issuer‐to‐subject name chaining**

Signatures from Issuing CA's and associated CA public key certificates are trusted, valid and not revoked.

**3. Policy and key use constraints**

Each certificate has the applicable and appropriate x.509 certificate extensions, e.g. CA and CRL signing, Digital Signing, Client and Server Authentication, etc.

**4. Revocation Status**

Status is checked through Certificate Revocation Lists (CRL) or Online Certificate Status Protocol (OCSP) responders, identified in each certificate in the chain.

The Certificate Practice Statement provides details for certificate validation requirements and a summary has been provided in the CDR Support Portal article: [Certificate Validation](https://cdr-support.zendesk.com/hc/en-us/articles/900005826963-Certificate-Validation).

### OCSP stapling
The use of OCSP Stapling within the CDR ecosystem is not recommended.
