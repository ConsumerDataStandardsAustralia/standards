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

- [Standards Maintenance #650 - Weaken JARM Encryption Requirements for ADRs](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/650)
- [Standards Maintenance #671 - Remove deprecated Register scope detail](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/671)
- [Standards Maintenance #677 - Energy transaction fields should be conditional](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/677)
- [Standards Maintenance #681 - Retirement date for Get Transaction Detail V1](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/681)
- [Standards Maintenance #683 - Maintenance Iteration 22 Holistic Feedback](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/683)


### Decisions
This release addresses the following Decision published on [Standards](https://github.com/ConsumerDataStandardsAustralia/standards/issues):

- [Consultation Draft #370 - Amendment of Banking Decision 338 Obligation Date - Draft Standards](https://github.com/ConsumerDataStandardsAustralia/standards/issues/370)


## General Changes
|Change|Description|Link|
|------|-----------|----|
| Remove deprecated Register scope detail | [**Standards Maintenance #671**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/671): Updated Admin & Registration scope table and Non-Normative Examples for the Register token and openid-configuration endpoints to replace placeholders and deprecated details with current values. | [Admin & Registration](../../#admin-amp-registration)<br>[Security Profile](../../#security-profile)
| Holistic Feedback | [**Standards Maintenance #683**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/683): Documentation and schema clarifications detailed in Maintenance issue #683 and noted in the Version Delta comments. | N/A


## Introduction
|Change|Description|Link|
|------|-----------|----|
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
| Weaken JARM Encryption Requirements | [**Standards Maintenance #650**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/650): Updated the condition for when a Data Holder may perform authorization response encryption. | [Authentication Flows](../../#authentication-flows)


## Register Standards
|Change|Description|Link|
|------|-----------|----|


## Consumer Experience
|Change|Description|Link|
|------|-----------|----|


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

