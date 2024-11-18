
## Certificate Management

```diff
Clarified Server Certificate statements for Data Holders and Data Recipients and referred to Participant endpoints detail
```

### Issued by the Register for Data Holders
Certificate | Function | Notes
-----------|------------------------------------------|------------------------------
| <span style="white-space: nowrap;">**Server Certificate(s)**</span> | Certificate is issued to a FQDN.<br><br>Secures the endpoints as detailed in [Participant endpoints](#participant-endpoints). | It will be up to the DH on how these endpoints are segregated. They may all be on the one domain (so only one certificate required) or could be separated.

### Issued by the Register CA for Data Recipients



Certificate | Function | Notes
-----------|------------------------------------------|------------------------------
| **Client Certificate** | Secures the following:<ul><li>Consuming Register APIs.<li>Consuming Data Holder APIs.</ul>
| <span style="white-space: nowrap;">**Server Certificate(s)**</span> | Certificate is issued to a FQDN. | Not currently required by Data Recipients.

### CDR Certificate Authority
[DigiCert](https://www.digicert.com) acts as the certificate authority that issues and manages certificates to CDR participants as directed by the ACCC Register in its capacity as the CDR Registrar.


### Certificate Trust Model



The CDR utilises a private certificate trust chain for all Register CA secured endpoints being hosted by [Data Holders](#participant-endpoints), [Data Recipients](#participant-endpoints) and the [Register](#register-apis).

This trust chain encompasses a set of root and intermediate CAs issued for the test and production environments.

|||
|---|---|
|**Test Environment**| Details provided to participants when they begin CTS process |
||
|**Production Environment**|[CA Root Production](includes/register/certificates/production/ca_root_prod.cer)</br>[CA Intermediate Production](includes/register/certificates/production/ca_intermediate_prod.cer)|



### Certificate Signing Request Profile
When requesting the Register CA certificates, certificate signing requests will need to be provided, conforming to the following profile:

CSR Field | Required | Server | Client
-----------|----------|----------|----------
|**Common Name (CN)**| Mandatory | Primary DNS Name</br>*e.g. api1.test.entity.com* | Software Product Name
|**SAN**| Optional | Secondary DNS Name(s) </br>*e.g. api2.test.entity.com* | N/A
|**Organization (O)**| Mandatory| Brand Name | Brand Name
|**Organizational Unit (OU)**| Mandatory| Consumer Data Right | Consumer Data Right
|**Country (C)**| Mandatory | Country of participant</br>*e.g. AU* | Country of participant</br>*e.g. AU*
|**State (ST)**| Optional | State of the Participant</br>*e.g. New South Wales* | State of the Participant</br>*e.g. New South Wales*
|**Locality (L)**| Optional | Locality of the Participant</br>*e.g. Sydney* | Locality of the Participant</br>*e.g. Sydney*
|**Email Address**| Optional | Participant's email address to be</br> displayed in the issued certificate | Participant's email address to be</br> displayed in the issued certificate
|**Signature Algorithm**| Mandatory | SHA256 | SHA256
|**Key Algorithm**| Mandatory | RSA | RSA
|**Key Size**| Mandatory | 2048 | 2048

**Note:** optional values, if provided, will be validated to be correct.

Please refer to the [Register onboarding guide](https://www.accc.gov.au/focus-areas/consumer-data-right-cdr-0/on-boarding-guide) for further information on certificate issuance.

### Certificate Usage
Further details on the Register CA issued certificates can be found in the [ACCC Certificate Practice Statement V1.0](https://www.cdr.gov.au/sites/default/files/2020-12/CDR%20-%20ACCC%20Certification%20practice%20statement.pdf).

### Certificate Validation
Certificate validation must check:

**1. Checking for certificate validity**

Verify private key signature is mathematically linked to the presented public key certificate, presented certificate identifies trusted User/Application and/or Service and certificate is both valid and not revoked.

**2. Issuer‐to‐subject name chaining**

Signatures from Issuing CA’s and associated CA public key certificates are trusted, valid and not revoked.

**3. Policy and key use constraints**

Each certificate has the applicable and appropriate x.509 certificate extensions, e.g. CA and CRL signing, Digital Signing, Client and Server Authentication, etc.

**4. Revocation Status**

Status is checked through Certificate Revocation Lists (CRL) or Online Certificate Status Protocol (OCSP) responders, identified in each certificate in the chain.

The Certificate Practice Statement provides details for DigiCert's certificate validation requirements and a summary has been provided in the CDR Support Portal article: [Certificate Validation](https://cdr-support.zendesk.com/hc/en-us/articles/900005826963-Certificate-Validation).

### OCSP stapling
The use of OCSP Stapling within the CDR ecosystem is not recommended.
