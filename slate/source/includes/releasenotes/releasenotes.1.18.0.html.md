---
title: Consumer Data Standards - v1.18.0 Release Notes

#language_tabs: # must be one of https://git.io/vQNgJ

toc_footers:
  - <a href='../../index.html'>Consumer Data Standards</a>

search: false
---

# V1.18.0 Release Notes
Release notes for version v1.18.0 of the [CDR Standards](../../index.html).

## Changes Made
### Change Requests

This release addresses the following change requests raised on [Standards Maintenance](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues):

- [Standards Maintenance Issue 461: Documentation Improvement: EnergyPlanContract.variation](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/461)
- [Standards Maintenance Issue 499: Unknown field in Energy Secondary Data Holder OpenAPI spec](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/499)
- [Standards Maintenance Issue 511: Iteration 11 Holistic Feedback](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/511)
- [Standards Maintenance Issue 497: CommonEmailAddress - address format documentation](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/497)
- [Standards Maintenance Issue 489: v1.15.0 More ambiguity into x-fapi-auth-date not less](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/489)
- [Standards Maintenance Issue 487: DCR APIs non-normative examples would benefit from clarification](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/487)
- [Standards Maintenance Issue 521: Transition of required parameters in the CDR Arrangement JWT](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/521)
- [Standards Maintenance Issue 472: Modify Energy Plans structure to allow Time of Use based Controlled Load rates](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/472)
- [Standards Maintenance Issue 486: Allow ADRs to specify scopes for a Software Statement Assertion (SSA) to support cross industry software products](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/486)
- [Standards Maintenance Issue 510: Register API error codes need to be aligned with the CDS standardised error codes](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/510)
- [Standards Maintenance Issue 491: ID Token algorithm support requirements are ambiguous](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/491)
- [Standards Maintenance Issue 507: FDO for data holders ignoring unsupported authorisation scopes to be set earlier than energy release date](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/507)
- [Standards Maintenance Issue 481: Provide timeline of when multiple sectors per data holder brand will be supported](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/481)

### Decision Proposals

This release addresses the following Decision Proposals published on [Standards](https://github.com/ConsumerDataStandardsAustralia/standards/issues):

- [Standards Maintenance Issue 514: Get Usage For ... Shared Responsibility APIs Payload size](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/514)

## Introduction

|Change|Description|Link|
|------|-----------|----|
| Future Dated Obligations | [**Standards Maintenance #507**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/507): Registration validation future obligation date changed from 15th November 2022 to 31st August 2022 | [Future Dated Obligations](../../index.html#future-dated-obligations) |

## High Level Standards

|Change|Description|Link|
|------|-----------|----|
| Introduction | Updated the introduction to include correct links to CDR agencies. | [Introduction](../../#introduction) |
| Informative References | Updated the informative reference for CDR and added new informative references for Treasury, ACCC and the OAIC. | [Introduction](../../#informative-references) |
| Array Conventions - Payload Conventions | Fixed the HTML rendering for the Markdown bullet point list in the array conventions | [Payload Conventions](../../#payload-conventions)|

## API End Points

|Change|Description|Link|
|------|-----------|----|
| (Energy) Fix conditional statement for contract variation | [**Standards Maintenance Issue #461**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/461): Corrected the EnergyPlanContract_variation conditional statement such that the `variation` is required if the `isFixed` property is `false`. | [Get Generic Plan Detail](../../#get-generic-plan-detail) and [Get Energy Account Detail](../../#get-energy-account-detail) |
| (Energy) Fix incorrect required reference in relatedParticipants | [**Standards Maintenance Issue #499**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/499): Corrected an issue with the EnergyServicePointDetail_relatedParticipants object that incorrectly referenced the `location` of a sibling object. This issue occurs in both consumer facing and Energy Secondary DH APIs. | [Get Service Point Detail](../../#get-service-point-detail) |
| CommonEmailAddress | [**Standards Maintenance #497**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/497): Fixed external reference for email format to be "addr-spec". | [Common APIs](../../#common-apis) |
| `x-fapi-auth-date` references in resource APIs | [**Standards Maintenance #489**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/489): Corrected the documentation for `x-fapi-auth-date` references. | [Banking APIs](../../#banking-apis) and [Energy APIs](../../#energy-apis)|
| DCR Non Normative Examples | [**Standards Maintenance #487**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/487): Fixed the URL for DCR examples to remove an extraneous /register/ path component | [DCR APIs](../..//#dcr-apis) |
| Energy schema | [**Standards Maintenance #514**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/514) Made changes to `EnergyUsageRead` structure of both primary and secondary data holder to optimise sharing of large volume of interval read data. The change also includes adding a new `interval-reads` query parameter to usage APIs. | [Energy Schema](../../#energy-apis) |
| Energy schema | [**Standards Maintenance #472**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/472) Made EnergyPlanControlledLoad into an array and updated structure to allow representation of time of use based rates. | [Energy Schema](../../#energy-apis) |
| Get Software Statement Assertion (SSA) | [**Standards Maintenance #486**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/486): Added reference to obsolete v1 of the GetSSA API | [Get Software Statement Assertion (SSA)](../../index.html#get-software-statement-assertion-ssa) |
| CDR Register APIs Endpoint Version Schedule | [**Standards Maintenance #486**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/486): Added version schedule for obsolete v1 of the GetSSA API | [Endpoint Version Schedule](../../includes/endpoint-version-schedule/#cdr-register-apis) |
| Register APIs | [**Standards Maintenance #481**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/481): Removed constraint that data holder brands only map to a single industry | [Register APIs](../../index.html#register-apis) |


## Information Security Profile

|Change|Description|Link|
|------|-----------|----|
| Profile scope data language link | [**Standards Maintenance #511**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/511): Fixed the link in the "OpenID Connect End-User Data" section linking to the CX Data Language: Profile Scope section. Addresses [Issue 511 comment](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/511#issuecomment-1135390550). | [Authorisation Scopes](../../#authorisation-scopes) |
| Formatting for Authorisation Code Flow | [**Standards Maintenance #511**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/511): Corrected the formatting of a bullet point list in the Authorisation Code Flow section obligations. Addresses [Issue 511 comment](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/511#issuecomment-1131001514). | [Authentication Flows](../../#authentication-flows) |
| Formatting for Mandatory Fields | [**Standards Maintenance #511**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/511): Corrected the formatting of a bullet point list in the Array Conventions' Mandatory Fields section. Addresses [Issue 511 comment](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/511#issuecomment-1138437892). | [Payload Conventions: Array Conventions - Mandatory Fields](../../#payload-conventions) |
| Schema typing for Energy APIs | [**Standards Maintenance #511**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/511): Corrected Updates for the Energy schema types, description and formatting. Addresses [Issue 511 comment](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/511#issuecomment-1178626247). | [Energy APIs](../../#energy-apis) |
| Sort order for Energy Usage Reads | [**Standards Maintenance #511**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/511): Updated description of EnergyUsageListResponse in Energy Data Holder and Secondary Data Holders endpoints with sort order. Addresses [Issue 511 comment](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/511#issuecomment-1138013171). | [Energy APIs](../../#energy-apis) |
| ADR hosted CDR Arrangement Revocation Endpoint | [**Standards Maintenance #521**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/521): Updates to accomodate JWT transition for lodgement of the CDR Arrangement ID and validation logic for ADRs. | [CDR Arrangement Revocation Endpoint](../../#security-endpoints) |
| Client Registration | [**Standards Maintenance #486**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/486): Get Software Statement Assertion API v1 & v2 has the scope claim explicitly defined | [Get Software Statement Assertion (SSA)](../../index.html#get-software-statement-assertion-ssa) |
| ID Token Algorithm Selection Considerations | [**Standards Maintenance #491**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/491): Added clarification on algorithm coverage required for data holders and data recipients | [Client Registration](../../index.html#client-registration) |


## Consumer Experience

|Change|Description|Link|
|------|-----------|----|
| | | |


## Known Issues

|Change|Description|Link|
|------|-----------|----|
| Future improvements | [**Standards Maintenance #510**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/510): Added future improvement Register API error codes need to be aligned with the CDS standardised error codes | [Known Issues](../../index.html#known-issues) |
