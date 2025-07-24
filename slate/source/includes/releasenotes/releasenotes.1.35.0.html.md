---
title: Consumer Data Standards - v1.35.0 Release Notes

#language_tabs: # must be one of https://git.io/vQNgJ

toc_footers:
  - <a href='../../'>Consumer Data Standards</a>

includes:
  - footer

search: false
---

# V1.35.0 Release Notes
Release notes for version **1.35.0** of the [CDR Standards](../../).

## Changes Made
### Change Requests

This release addresses the following minor defects raised on [Standards Staging](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues):

- [Standards Staging #XXX - Title](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/XXX)

This release addresses the following change requests raised on [Standards Maintenance](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues):

- [Standards Maintenance #XXX - Title](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/XXX)


### Decisions
This release addresses the following Decisions published on [Standards](https://github.com/ConsumerDataStandardsAustralia/standards/issues):

- [Consultation Draft #369 - Redirect to App - Draft Standards](https://github.com/ConsumerDataStandardsAustralia/standards/issues/369)

#### Errata
The following <mark>corrections</mark> have been made to the changes resulting from [Decision 369](https://github.com/ConsumerDataStandardsAustralia/standards/issues/369):

|Standard Section|Decision text|Corrected text|
|------|-----------|------|
|[Baseline Credential Requirements](../../#baseline-credential-requirements)|**MUST ONLY** support authenticator types as permitted by the Levels of Assurance (LoA) requirements defined by <mark>**[TDIF]**</mark> unless otherwise excluded by the Restricted Credentials requirements.| **MUST ONLY** support authenticator types as permitted by the Levels of Assurance (LoA) requirements defined by <mark>**[DigitalID-Accreditation]**</mark> unless otherwise excluded by the Restricted Credentials requirements.|
|[Authorisation Standards](../../#authorisation-standards)|<mark>**Authentication:**</mark> Add or Switch Profiles|<mark>**Authorisation:**</mark> Add or Switch Profiles|
|[Redirect to App: Data Holders](../../#redirect-to-app_data-holders)|<mark>**Redirect to App:</mark> Data Holders**|**Data Holders**|
|[Redirect to App: Data Recipients](../../#redirect-to-app_data-recipients)|<mark>**Redirect to App:</mark> Data Recipients**|**Data Recipients**|


## General Changes
|Change|Description|Link|
|------|-----------|----|
| Change summary | [**Standards Staging #XXX**](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/XXX): Change detail. | [Standards section](../../#section)
| Change summary | [**Standards Maintenance #XXX**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/XXX): Change detail. | [Standards section](../../#section)
| Change summary | [**Decision Proposal #XXX**](https://github.com/ConsumerDataStandardsAustralia/standards/issues/XXX): Change detail. | [Standards section](../../#section)


## Introduction
|Change|Description|Link|
|------|-----------|----|
| FDO for Redirect to App changes | [**Decision #369**](https://github.com/ConsumerDataStandardsAustralia/standards/issues/369): Added FDOs for Redirect to App related changes. | [FDO](../../#future-dated-obligations) |
| Normative References update | [**Decision #369**](https://github.com/ConsumerDataStandardsAustralia/standards/issues/369): Updated Normative References with following:<ul><li>Replaced TDIF with DigitalID-Accreditation.</li><li>Added reference to RFC8252: OAuth 2.0 for Native Apps.</li></ul> | [Normative References](../../#normative-references) |

## High Level Standards
|Change|Description|Link|
|------|-----------|----|


## API Endpoints
|Change|Description|Link|
|------|-----------|----|


## Information Security Profile
|Change|Description|Link|
|------|-----------|----|
| Authentication Schedule | [**Decision #369**](https://github.com/ConsumerDataStandardsAustralia/standards/issues/369): Added new section **"Authentication Schedule"** with following sub-sections:<ul><li>Redirect to App</li><li>Decoupled Authentication</li><li>Fallback Authentication Flows</li></ui> | [Authentication Schedule](../../#authentication-schedule) |
| Overview update | [**Decision #369**](https://github.com/ConsumerDataStandardsAustralia/standards/issues/369): Removed "TDIF" from Symbols and Abbreviated terms list. | [Overview](../../#overview) |
| Authentication Flows changes | [**Decision #369**](https://github.com/ConsumerDataStandardsAustralia/standards/issues/369): <ul><li>Moved credential requirements from Baseline Security Provisions: Data Holders section to new Credential Requirements section.</li><li>Added  new section **"Redirect to App"**</li></ui>  | [Authentication Flows](../../#authentication-flows) |
| LoAs changes | [**Decision #369**](https://github.com/ConsumerDataStandardsAustralia/standards/issues/369): Update LoA Single Ordinal section by amending LoA 2 and LoA 3 and adding LoA 4  | [Levels of Assurance (LoAs)](../../#levels-of-assurance-loas) |
| Credential Requirements | [**Decision #369**](https://github.com/ConsumerDataStandardsAustralia/standards/issues/369): Added new **"Credential Requirements"** section with the following sub-sections:<ul><li>User Identifiers</li><li>Baseline Credential Requirements</li><li>One Time Password Credential Requirements</li><li>Restricted Credentials</li></ul> | [Credential Requirements](../../#credential-requirements) |



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

