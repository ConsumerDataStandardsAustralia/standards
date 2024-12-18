---
title: Consumer Data Standards - v1.33.0 Release Notes

#language_tabs: # must be one of https://git.io/vQNgJ

toc_footers:
  - <a href='../../'>Consumer Data Standards</a>

search: false
---

# V1.33.0 Release Notes
Release notes for version **1.33.0** of the [CDR Standards](../../).

## Changes Made
### Change Requests

This release addresses the following minor defects raised on [Standards Staging](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues):

- [Standards Staging #429 - Refer to components in Banking API spec](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/429)
- [Standards Staging #431 - Fix spelling, grammar and punctuation](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/431)
- [Standards Staging #435 - Maintenance Iteration 21 - typos and formatting](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/435)
- [Standards Staging #442 - Apply consistent styling to the Common Field Types table](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/442)
- [Standards Staging #443 - Apply consistent styling in the Transaction Security section](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/443)
- [Standards Staging #463 - Remove redundant generated 'additional' file](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/463)
- [Standards Staging #468 - Update DSB Logo and links](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/468)

This release addresses the following change requests raised on [Standards Maintenance](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues):

- [Standards Maintenance #473 - Add RFC8174 to list of normative references and update the use of Requirements Levels](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/473)
- [Standards Maintenance #654 - Clarify Transaction Security requirements](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/654)
- [Standards Maintenance #655 - Get Metrics V5 error metrics documentation](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/655)
- [Standards Maintenance #657 - Addition of LVR in the enumerated values list for constraintType](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/657)
- [Standards Maintenance #661 - Obligation milestones for 2026 and 2027](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/661)
- [Standards Maintenance #663 - Maintenance Iteration 21 Holistic Feedback](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/663)
- [Standards Maintenance #664 - New Enums for Voluntary disclosure of additional service overlays](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/664)
- [Standards Maintenance #667 - Clean up of Refresh Token requirements](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/667)
- [Standards Maintenance #675 - PAR/RFC9126 in Normative references appears twice](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/675)
- [Standards Maintenance #666 - Retirement of OIDC Hybrid Flow](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/666)


### Decision Proposals
This release addresses the following Decision Proposals published on [Standards](https://github.com/ConsumerDataStandardsAustralia/standards/issues):

- [Decision Proposal #350 - August 2024 Rules - Standards Impacts](https://github.com/ConsumerDataStandardsAustralia/standards/issues/350)
- [Decision Proposal #356 - Maintenance Iteration 21](https://github.com/ConsumerDataStandardsAustralia/standards/issues/356)


## General Changes
|Change|Description|Link|
|------|-----------|----|
| Corrected typos, updated styling | [**Standards Staging #431**](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/431): Corrected typos, punctuation and grammar and applied _field_ and `value` styling in all sections. | N/A
| Make documentation links relative | [**Standards Staging #435**](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/435#issuecomment-2446093677): Documentation update to make navigation links relative | N/A
| Remove redundant file | [**Standards Staging #463**](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/463): Remove redundant generated 'additional' file to improve Standards build process | N/A
| Update DSB links | [**Standards Staging #468**](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/468): Changed CDS links to DSB, updated width of left navigation section. | 
| Replaced 'must' with '**MUST**' | [**Standards Maintenance #473**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/473#issuecomment-2139255321): Replaced 'must' with '**MUST**' in _x-v_, _x-min-v_ and _x-fapi-interaction-id_ header descriptions. | [Register APIs](../../#register-apis)<br>[Banking APIs](../../#banking-apis)<br>[Energy APIs](../../#energy-apis)<br>[Energy Secondary DH APIs](../../#energy-secondary-dh-apis)<br>[Common APIs](../../#common-apis)<br>[Additional Standards](../../#additional-standards)
| Updated servers in specs | [**Standards Maintenance #663**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/663#issuecomment-2357351062): Added and updated servers in all specs and updated hosts in examples | [Examples throughout](../../?examples#introduction)


## Introduction
|Change|Description|Link|
|------|-----------|----|
| Updated Obligation Date Schedule | [**Standards Maintenance #661**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/661): Added milestone dates for 2026 and 2027 to the Obligation Date Schedule | [Obligation Dates Schedule](../../includes/endpoint-version-schedule/index.html#obligation-dates-schedule)
| Clarified endpoint retirement dates | [**Standards Maintenance #663**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/663#issuecomment-2472253052): Updated 'MAY retire' statements from 'by (date)' to 'from (date)' | [Future Dated Obligations](../../#future-dated-obligations)
| Updated Normative References | [**Standards Maintenance #675**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/675): Combined entries for [PAR] and [RFC9126] in Normative References | [Normative References](../../#normative-references)


## High Level Standards
|Change|Description|Link|
|------|-----------|----|
| Common Field Types styling | [**Standards Staging #442**](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/442): Applied consistent styling in descriptions and Valid Examples | [Common Field Types](../../#common-field-types)


## API Endpoints
|Change|Description|Link|
|------|-----------|----|
| Refactor Banking API spec | [**Standards Staging #429**](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/429): Refactored Banking API specification file to refer to common components | [Banking APIs](../../#banking-apis)
| Updated field descriptions | [**Standards Maintenance #655**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/655): Updated the Description for the _additionalProperties_ and _500_ fields shown in the Get Metrics endpoint ErrorMetricsV2 structure. These clarifications are provided with an FDO of **Y25 #2: 2025-05-12** (12th May 2025). | [ErrorMetricsV2](../../#cdr-admin-api_schemas_tocSerrormetricsv2)
| Get Product Detail | [**Standards Maintenance #657**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/657): Incremented Get Product Detail to v5 to support new `MAX_LVR` and `MIN_LVR` constraint types | [Get Product Detail](../../#cdr-banking-api_get-product-detail)
| Banking: Extended NPP Service Overlay support | [**Standards Maintenance #664**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/664): This change extends Get Transaction Detail to support additional NPP service overlays and all versions of each service overlay. | [Banking: Get Transaction Detail V2](../../#cdr-banking-api_get-transaction-detail)


## Information Security Profile
|Change|Description|Link|
|------|-----------|----|
| Key word styling | [**Standards Staging #443**](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/443): Applied consistent styling to key words | [Transaction Security](../../#transaction-security)
| Clarified transaction security requirements | [**Standards Maintenance #654**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/654): Clarified sections referring to TLS and MTLS requirements. | [Transaction Security](../../#transaction-security)<br>[Certificate Management](../../#certificate-management)<br>[Dynamic Client Registration Endpoints](../../#dynamic-client-registration-endpoints)<br>[Participant Endpoints](../../#participant-endpoints)
| Updated link | [**Standards Maintenance #663**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/663#issuecomment-2370626204): Resolved broken link referring to section 3 of MTLS | [Holder of Key Mechanism](../../#holder-of-key-mechanism)
| Clarified 'CDR Arrangement JWT method' details | [**Standards Maintenance #663**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/663#issuecomment-2445941229): Removed duplicate line and clarified 'CDR Arrangement JWT method' details | [CDR Arrangement Revocation endpoint](../../#cdr-arrangement-revocation-endpoint)
| Retirement of OIDC Hybrid Flow | [**Standards Maintenance #666**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/666): Removed OIDC Hybrid Flow as a supported `response_type` | [Security Profile](../../#security-profile)
| Refresh Token expiry | [**Standards Maintenance #667**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/667): Refresh token expiry must be set to the sharing duration authorised by the consumer. | [Security Profile -> Tokens -> Refresh Token](../../#refresh-token)

## Register Standards
None


## Consumer Experience
|Change|Description|Link|
|------|-----------|----|
| August 2024 Rules - Standards Impacts | [**Decision Proposal #350**](https://github.com/ConsumerDataStandardsAustralia/standards/issues/350): Added detail for Amending Consent Standards, CDR Receipts and 90-day notifications. | [Amending Consent Standards](../../#consumer-experience_amending-consent-standards)<br>[CDR Receipts](../../#consumer-experience_notification-standards_cdr-receipts)<br>[90-day notifications](../../#consumer-experience_notification-standards_notifications-90-day-notifications)


## Non-Functional Requirements
|Change|Description|Link|
|------|-----------|----|
| Updated Reporting Requirements section | [**Standards Maintenance #663**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/663#issuecomment-2359965763): Removed outdated reporting detail and updated link to Get Metrics endpoint | [Reporting Requirements](../../?diff#reporting-requirements)


## Additional Standards
None

## Known Issues
None

<br>
<br>
<br>
<br>
