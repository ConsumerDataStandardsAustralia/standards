
# Introduction

```diff
The Version Delta tab can be used to see in context changes between
this version of the standards and the immediately previous version
of the standards.

This text is an example of a new addition to the standards:
+ New text added here

This text is an example of text removed from the standards:
- Old text removed

Note: changes to request and response payloads are listed at the
beginning of the relevant API section due to the documentation
being auto generated from OpenAPI specification files.
```

These standards have been developed as part of the Australian Government's introduction of the [Consumer Data Right](https://www.accc.gov.au/focus-areas/consumer-data-right "ACCC Consumer Data Right webpage") legislation to give Australians greater control over their data.

The Consumer Data Right (CDR) is intended to be applied sector by sector across the whole economy, beginning in the banking, energy and telecommunications sectors.  These standards have been developed to facilitate the Consumer Data Right by acting as a specific baseline for implementation.

These standards are maintained by the Data Standards Body (DSB), with the Data Standards Chair as the decision maker.  The DSB is part of the [Treasury](https://www.directory.gov.au/portfolios/treasury/data-standards-body "Data Standards Body"). The work of standards development is conducted in consultation with the [Australian Competition and Consumer Commission (ACCC)](https://www.accc.gov.au/focus-areas/consumer-data-right-cdr-0 "ACCC's CDR webpage") as co-regulator of the Consumer Data Right, along with the [Office of the Australian Information Commissioner (OAIC)](https://www.oaic.gov.au/consumer-data-right/about-the-consumer-data-right/ "OAIC CDR webpage").

The standards are required to be published. The obligations on CDR participants to apply the published standards commence on the commencement of the Consumer Data Right rules:

- where the rules require compliance with the standards, non-compliance with the standards may constitute a breach of the rules.
- where the standards are specified as binding standards as required by the Consumer Data Right rules for the purposes of s56FA of the legislation, they apply as under contract between a data holder and an accredited data recipient.  The legal effect of binding standards as between data holders and accredited data recipients is fully set out in s56FD and s56FE of the legislation.


## Version

These standards represent version 1.15.0 of the high level standards.  See the [versioning section](#versioning) for more information on how versions are managed in the standard.

## Interpretation

Note that, in these standards, the key words **MUST**, **MUST NOT**, **REQUIRED**, **SHALL**, **SHALL NOT**, **SHOULD**, **SHOULD NOT**, **RECOMMENDED**, **MAY**, and **OPTIONAL** are to be interpreted as described in [RFC2119](http://tools.ietf.org/html/rfc2119).


## Future Dated Obligations

The standards, as published from time to time, may include specific statements indicating that a specific section of the standards will not take effect until a future date or may cease to have effect on some future date.

The table below highlights these areas of the standards.

|Section|Description|Applicable Date|
|-------|-----------|---------------|
|[Standard Error Codes](#error-codes) | Data Recipients and Data Holders MAY implement the standard error codes from July 1st 2021 | July 1st 2021 |
|[Get Metrics V2](#get-metrics)|Version 2 of this end point must be made available by affected data holders by the end of July 2021|July 31st 2021|
|[Get Metrics V1](#get-metrics)|Data holders may obsolete version 1 of this end point from October 31st 2021. Data Holders who go live with consumer data sharing from July 1st 2021 MAY go live with only Get Metrics v2 support. The CDR Register must upgrade their implementation to use version 2 by this time|October 31st 2021|
|[Amending Consent](#amending-authorisation-standards)|Data Holders MUST implement the following standards from November 1st 2021 when a CDR consumer is invited to amend a current authorisation as per rule 4.22A and the ADR has supplied a `cdr_arrangement_id`|November 1st 2021|
|[CX Standards: Unavailable Accounts](#authorisation-standards)|Data Holders **MAY** implement the following data standards effective from 1 November 2021:<ul><li>**Unavailable Accounts:** No accounts can be shown</li><li>**Unavailable Accounts:** Authorisation not permitted</li><li>**Unavailable Accounts:** Request sharing rights</li></ul>|November 1st 2021|
|[CX Standards: Withdrawals](#withdrawal-standards)|Data Holders **MUST** implement the following data standards effective from 1 February 2022:<ul><li>**Withdrawal:** Secondary User Instruction</li></ul>|February 1st 2022|
|[Standard Error Codes](#error-codes) | Data Recipients and Data Holders MUST implement the standard error codes from February 1st 2022 | February 1st 2022 |
|[Data Recipient CDR Arrangement Endpoint](#cdr-arrangement-revocation-end-point) | From March 31st 2022, Data Recipients **MUST** support "CDR Arrangement JWT" method and "CDR Arrangement Form Parameter" method. <br/>Data Recipients **SHOULD** support the "CDR Arrangement JWT" method before March 31st 2022 | March 31st 2022 |
|[Profile Scope Data Language](#profile-scope)|For new and amended consents and authorisations only, CDR participants **SHOULD** comply with the following standards from 1 February 2022, but **MUST** comply by 1 July 2022:<ul><li>Technical Standards: Revised Claims</li><li>CX Standards: Profile Scope - Data Language Standards</li></ul>**Note:** These standards changes **do not** apply to existing consents and authorisations unless they are amended on or following the compliance dates. | July 1st 2022 |
|[CX Standards: Joint Accounts](#consumer-experience) | Data holders MUST implement the following data standards from 1 July 2022:<ul><li>Notifications: Alternative notification schedules for joint accounts</li><li>Notifications: Joint account alerts</li><li>Authorisation: Pending status</li><li>Withdrawal: Joint accounts</li></ul> | July 1st 2022 |
|[Information Security profile](#security-profile) | FAPI 1.0 adoption is introduced across three phases.<br/><strong>Phase 1: Voluntary FAPI 1.0 support & hygiene enhancements</strong> includes, amongst other changes:<ul><li>Enforces requirements for authorisation code, token and request object use</li><li>Data Holders MAY support of FAPI 1.0 Final</li><li>Data Holders MAY support of Authorization Code Flow (including PKCE and JARM) in conjunction with Hybrid Flow</li></ul> | July 4th 2022 |
|[Get Payee Detail V2](#get-payee-detail)|Version 2 of this end point must be made available by affected data holders by July 31st 2022|July 31st 2022|
|[Data Recipient CDR Arrangement Endpoint](#cdr-arrangement-revocation-end-point) | From July 31st 2022, Data Recipients **MUST** only support "CDR Arrangement JWT" method and **MUST** reject "CDR Arrangement Form Parameter" method. <br/>Data Holders **MUST** revoke consent using "CDR Arrangement JWT" method only. <br/>Data Holders **SHOULD** use the "CDR Arrangement JWT" method from March 31st 2022| July 31st 2022 |
|[Get Payees V2](#get-payees)|Version 2 of this end point must be made available by affected data holders by July 31st 2022|July 31st 2022|
|[Self-Signed JWT Client Authentication](#self-signed-jwt-client-authentication) | Until July 31st 2022, Data Recipients MUST accept the [Resource Path](#uri-resource-path) for the endpoint and the ``<RecipientBaseURI>`` as a valid audience value. From July 31st 2022, Data Holders MUST use an audience value matching the Resource Path for the endpoint and the Data Recipient MUST verify the audience matches the Resource Path for the endpoint. | July 31st 2022 |
|[Get Payees V1](#get-payees)|Data holders may obsolete version 1 of this end point from August 31st 2022.  Data recipients must upgrade their implementations to use version 2 by this time|August 31st 2022|
|[Get Payee Detail V1](#get-payee-detail)|Data holders may obsolete version 1 of this end point from August 31st 2022.  Data recipients must upgrade their implementations to use version 2 by this time|August 31st 2022|
|[Get Data Holder Brands V2](#get-data-holder-brands)&Dagger;|CDR Register must introduce version 2 of this end point by August 30th 2022&dagger;.  Data recipients may upgrade their implementations to use this version from this time|August 30th 2022&dagger;|
|[Get Software Statement Assertion (SSA) V3](#get-software-statement-assertion-ssa)|CDR Register must introduce version 3 of this end point by August 30th 2022&dagger;.  Data recipients may upgrade their implementations to use this version from this time|August 30th 2022&dagger;|
|[Get Software Products Statuses V2](#get-software-products-statuses)|CDR Register must introduce version 2 of this end point by August 30th 2022&dagger;.  Data holders may upgrade their implementations to use this version from this time|August 30th 2022&dagger;|
|[Get Data Recipient Statuses V2](#get-data-recipients-statuses)|CDR Register must introduce version 2 of this end point by August 30th 2022&dagger;.  Data holders may upgrade their implementations to use this version from this time|August 30th 2022&dagger;|
|[Get Data Recipients V3](#get-data-recipients)|CDR Register must introduce version 3 of this end point by August 30th 2022&dagger;.  Data holders may upgrade their implementations to use this version from this time|August 30th 2022&dagger;|
|[Get Data Holder Statuses V1](#get-data-holder-statuses)|CDR Register must introduce version 3 of this end point by August 30th 2022&dagger;|August 30th 2022&dagger;|
|[Information Security profile](#security-profile) | FAPI 1.0 adoption is introduced across three phases.<br/><strong>Phase 2: FAPI 1.0 Final (Baseline & Advanced)</strong> includes, amongst other changes:<ul><li>Enforces additional requirements for authorisation code, token and request object use</li><li>Enforces PAR-only authorisation request data submission</li><li>Refresh token cycling is not permitted</li><li>Data Holders and Data Recipients MUST support FAPI 1.0 Final including RFC9126 , RFC7636 and JARM</li><li>Data Holders SHOULD support of Authorization Code Flow in conjunction with Hybrid Flow</li></ul> | September 16th 2022 |
|[Get Metrics V3](#get-metrics)|Version 3 of this end point must be made available by affected data holders by October 1st 2022|October 1st 2022|
|[Standard Error Codes](#error-codes) | Data Holders MAY retire application-specific error codes in favour of standard error codes from November 1st 2022 | November 1st 2022 |
|[Get Account Detail V2](#get-account-detail)|Version 2 of this end point must be made available by affected data holders by November 30th 2022|November 30th 2022|
|[Get Customer Detail V2](#get-customer-detail)|Version 2 of this end point must be made available by affected data holders by November 30th 2022|November 30th 2022|
|[Get Product Detail V4](#get-product-detail)|Version 4 of this end point must be made available by affected data holders by November 30th 2022|November 30th 2022|
|[Get Metrics V2](#get-metrics)|Data holders may obsolete version 2 of this end point from December 5th 2022. Data Holders in the energy sector MAY go live with only Get Metrics v3 support. The CDR Register must upgrade their implementation to use version 3 by this time|December 5th 2022|
|[Get Account Detail V1](#get-account-detail)|Data holders may obsolete version 1 of this end point from February 28th 2023.  Data recipients must upgrade their implementations to use version 2 by this time|February 28th 2023|
|[Get Product Detail V3](#get-product-detail)|Data holders may obsolete version 3 of this end point from February 28th 2023.  Data recipients must upgrade their implementations to use version 4 by this time|February 28th 2023|
|[Get Customer Detail V1](#get-customer-detail)|Data holders may obsolete version 1 of this end point from February 28th 2023.  Data recipients must upgrade their implementations to use version 2 by this time|February 28th 2023|
|[Information Security profile](#security-profile) | FAPI 1.0 adoption is introduced across three phases.<br/><strong>Phase 3: Retire Hybrid Flow</strong> includes, amongst other changes:<ul><li>Data Holders MUST support Authorization Code Flow</li><li>Data Holders MAY retire Hybrid Flow</li></ul> | April 7th 2023 |

**&dagger;NOTE:** Further consultation required with the ACCC to confirm this obligation date

**&Dagger;NOTE:** Get Data Holder Brands V2 definition is still subject to change


## Endpoint Version Schedule
A table-view of all endpoint versioning is available <a href='includes/endpoint-version-schedule/'>here</a>.
