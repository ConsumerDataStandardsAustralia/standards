
# Data Recipients
The following versioning schedule is reflective of the endpoints hosted by Data Recipient Software Products.
Data Recipients should take into account their commencement date within the CDR, relevant obligations in accordance with the CDR Rules, as well as any exemptions granted when factoring in which API versions are considered applicable.

| Section         | Sub-section                                  | Endpoint                                                   | Method | Version | Binding Date        | Retirement Date | Date Introduced    | Date Deprecated    |
|-----------------|----------------------------------------------|------------------------------------------------------------|--------|---------|---------------------|-----------------|--------------------|--------------------|
| InfoSec Profile | Security Endpoints > ADR Token Revocation Endpoint  | ``/token/revoke``                                       | <span class="method post">POST</span>   | 1.5.0   | 2020-07-01          | 2021-02-01      | 2019-09-30, V1.0.0 | 2020-04-17, V1.2.0 |
| InfoSec Profile | Security Endpoints >  CDR Arrangement Revocation Endpoint | ``<RecipientBaseUri>/arrangements/revoke``      | <span class="method post">POST</span>   | 1.5.0   | 2020-11-01          | N/A             | 2020-04-17, V1.2.0 | N/A                |
