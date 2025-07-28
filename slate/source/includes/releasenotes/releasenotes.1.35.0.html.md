---
title: CDR Data Standards - v1.35.0 Release Notes

#language_tabs: # must be one of https://git.io/vQNgJ

toc_footers:
  - <a href='../../'>CDR Data Standards</a>

includes:
  - footer

search: false
---

# V1.35.0 Release Notes
Release notes for version **1.35.0** of the [CDR Data Standards](../../).

## Changes Made
### Change Requests

This release addresses the following minor defects raised on [Standards Staging](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues):

- [Standards Staging #476 - Maintenance Iteration 22 - typos and formatting](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/476)

This release addresses the following change requests raised on [Standards Maintenance](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues):

- [Standards Maintenance #650 - Weaken JARM Encryption Requirements for ADRs](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/650)
- [Standards Maintenance #671 - Remove deprecated Register scope detail](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/671)
- [Standards Maintenance #677 - Energy transaction fields should be conditional](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/677)
- [Standards Maintenance #681 - Retirement date for Get Transaction Detail V1](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/681)
- [Standards Maintenance #683 - Maintenance Iteration 22 Holistic Feedback](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/683)


### Decisions
This release addresses the following Decisions published on [Standards](https://github.com/ConsumerDataStandardsAustralia/standards/issues):

- [Consultation Draft #369 - Redirect to App - Draft Standards](https://github.com/ConsumerDataStandardsAustralia/standards/issues/369)
- [Consultation Draft #370 - Amendment of Banking Decision 338 Obligation Date - Draft Standards](https://github.com/ConsumerDataStandardsAustralia/standards/issues/370)


#### Errata
The following <mark>corrections</mark> have been made to the changes resulting from [Decision 369](https://github.com/ConsumerDataStandardsAustralia/standards/issues/369):

|Standard Section|Decision text|Corrected text|
|------|-----------|------|
|[Baseline Credential Requirements](../../#baseline-credential-requirements)|**MUST ONLY** support authenticator types as permitted by the Levels of Assurance (LoA) requirements defined by <mark>**[TDIF]**</mark> unless otherwise excluded by the Restricted Credentials requirements.| **MUST ONLY** support authenticator types as permitted by the Levels of Assurance (LoA) requirements defined by <mark>**[DigitalID-Accreditation]**</mark> unless otherwise excluded by the Restricted Credentials requirements.|
|[Authorisation Standards](../../#authorisation-standards)|<mark>**Authentication:**</mark> Add or Switch Profiles|<mark>**Authorisation:**</mark> Add or Switch Profiles|
|[Redirect to App: Data Holders](../../#authentication-schedule_redirect-to-app_data-holders)|<mark>**Redirect to App:</mark> Data Holders**|**Data Holders**|
|[Redirect to App: Data Recipients](../../#authentication-schedule_redirect-to-app_data-recipients)|<mark>**Redirect to App:</mark> Data Recipients**|**Data Recipients**|
|[Authentication Flows: Redirect to App](../../#authentication-flows_redirect-to-app)|No heading |Add headings <mark>**Data Holders**</mark> and <mark>**Data Recipients**</mark> |
|[Baseline Credential Requirements](../../#baseline-credential-requirements)|**MUST ONLY** support authenticator types as permitted by the <mark>Levels of Assurance (LoA)</mark> requirements defined <mark>by</mark> **[DigitalID-Accreditation]** unless otherwise excluded by the Restricted Credentials requirements. |**MUST ONLY** support authenticator types as permitted by the <mark>Authentication levels (AL)</mark> requirements defined <mark>in</mark> **[DigitalID-Accreditation]** unless otherwise excluded by the Restricted Credentials requirements. |

## General Changes
|Change|Description|Link|
|------|-----------|----|
| Branding and minor UI updates | [**Standards Staging #476**](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/476): Applied updated DSB branding/colour palette, replaced references to 'Consumer Data Standards' and 'CDR standards' with 'CDR Data Standards', UI updates for Version Delta scrolling, updated process for adding the 'archived version' message to historical versions, CSS adjustments to avoid horizontal scrollbars in schema tables. | N/A
| Known Issues | [**Standards Staging #476**](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/476): Added a Known Issues item for a pending change to the Certificate Management section and a Future improvements item for Metadata Update endpoint inconsistency. | [Known Issues](../../#known-issues)
| Remove deprecated Register scope detail | [**Standards Maintenance #671**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/671): Updated Admin & Registration scope table and Non-Normative Examples for the Register token and openid-configuration endpoints to replace placeholders and deprecated details with current values. | [Admin & Registration](../../#admin-amp-registration)<br>[Security Profile](../../#security-profile)
| Holistic Feedback | [**Standards Maintenance #683**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/683): Documentation and schema clarifications detailed in Maintenance issue #683 and noted in the Version Delta comments. | N/A


## Introduction
|Change|Description|Link|
|------|-----------|----|
| FDO for Redirect to App changes | [**Decision #369**](https://github.com/ConsumerDataStandardsAustralia/standards/issues/369): Added FDOs for Redirect to App related changes. | [FDO](../../#future-dated-obligations) |
| Normative References update | [**Decision #369**](https://github.com/ConsumerDataStandardsAustralia/standards/issues/369): Updated Normative References with following:<ul><li>Replaced TDIF with DigitalID-Accreditation.</li><li>Added reference to RFC8252: OAuth 2.0 for Native Apps.</li></ul> | [Normative References](../../#normative-references) |
| Amend Decision 338 FDOs | [**Decision #370**](https://github.com/ConsumerDataStandardsAustralia/standards/issues/370): Amendment of Banking Decision 338 Obligation Dates. | [Future Dated Obligations](../../#future-dated-obligations)
| Retirement date for Get Transaction Detail v1 | [**Standards Maintenance #681**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/681): Specified retirement date for Banking Get Transaction Detail v1 as 10th November 2025. | [Future Dated Obligations](../../#future-dated-obligations)


## High Level Standards
|Change|Description|Link|
|------|-----------|----|


## API Endpoints
|Change|Description|Link|
|------|-----------|----|
| Corrected Energy transaction field requirements | [**Standards Maintenance #677**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/677): Specified the _demand_ and _otherCharges_ fields in EnergyBillingTransactionV3 as conditional, to match their descriptions. | [Energy APIs](../../#energy-apis)


## Information Security Profile
|Change|Description|Link|
|------|-----------|----|
| Authentication Schedule | [**Decision #369**](https://github.com/ConsumerDataStandardsAustralia/standards/issues/369): Added new section **"Authentication Schedule"** with following sub-sections:<ul><li>Redirect to App</li><li>Decoupled Authentication</li><li>Fallback Authentication Flows</li></ui> | [Authentication Schedule](../../#authentication-schedule) |
| Overview update | [**Decision #369**](https://github.com/ConsumerDataStandardsAustralia/standards/issues/369): Removed "TDIF" from Symbols and Abbreviated terms list. | [Overview](../../#overview) |
| Authentication Flows changes | [**Decision #369**](https://github.com/ConsumerDataStandardsAustralia/standards/issues/369): <ul><li>Moved credential requirements from Baseline Security Provisions: Data Holders section to new Credential Requirements section.</li><li>Added  new section **"Redirect to App"**</li></ui>  | [Authentication Flows](../../#authentication-flows) |
| LoAs changes | [**Decision #369**](https://github.com/ConsumerDataStandardsAustralia/standards/issues/369): Update LoA Single Ordinal section by amending LoA 2 and LoA 3 and adding LoA 4  | [Levels of Assurance (LoAs)](../../#levels-of-assurance-loas) |
| Credential Requirements | [**Decision #369**](https://github.com/ConsumerDataStandardsAustralia/standards/issues/369): Added new **"Credential Requirements"** section with the following sub-sections:<ul><li>User Identifiers</li><li>Baseline Credential Requirements</li><li>One Time Password Credential Requirements</li><li>Restricted Credentials</li></ul> | [Credential Requirements](../../#credential-requirements) |
| Weaken JARM Encryption Requirements | [**Standards Maintenance #650**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/650): Updated the condition for when a Data Holder may perform authorization response encryption. | [Authentication Flows](../../#authentication-flows)


## Register Standards
|Change|Description|Link|
|------|-----------|----|


## Consumer Experience
|Change|Description|Link|
|------|-----------|----|
| Authentication Standards | [**Decision #369**](https://github.com/ConsumerDataStandardsAustralia/standards/issues/369): Added following new sections to **"Authentication Standards"**:<ul><li>Common Authentication Standards</li><li>Redirect to web with One Time Password (OTP)</li><li>Redirect to App</li></ul> | [Authentication Standards](../../#consumer-experience_authentication-standards) |
| Authorisation Standards | [**Decision #369**](https://github.com/ConsumerDataStandardsAustralia/standards/issues/369): Added new authorisation standard **"Authorisation: Add or Switch Profiles"**. | [Authorisation Standards](../../#authorisation-standards) |

## Non-Functional Requirements
|Change|Description|Link|
|------|-----------|----|


## Shared Responsibility
|Change|Description|Link|
|------|-----------|----|


## Additional Standards
|Change|Description|Link|
|------|-----------|----|


## Known Issues
|Change|Description|Link|
|------|-----------|----|
| Metadata Update Future improvement | [**Standards Staging #476**](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/476#issuecomment-2767684074): Added a Future improvements item for the specification of the Metadata Update endpoint. | [Future improvements](../../#future-improvements)

