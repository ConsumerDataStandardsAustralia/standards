---
title: Consumer Data Standards - v1.30.0 Release Notes

#language_tabs: # must be one of https://git.io/vQNgJ

toc_footers:
  - <a href='../../index.html'>Consumer Data Standards</a>

search: false
---

# V1.30.0 Release Notes
Release notes for version v1.30.0 of the [CDR Standards](../../index.html).

## Changes Made
### Change Requests

This release addresses the following minor defects raised on [Standards Staging](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues):

- [Standards Staging #310 - Review date format conventions](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/310)
- [Standards Staging #361 - Typo in sector_identifier_uri description](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/361)
- [Standards Staging #362 - Update PPID link](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/362)
- [Standards Staging #370 - Add 'Consumer Experience Principles' to the Introduction text in the Principles section of the CDS and add CX acronym](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/370)
- [Standards Staging #371 - Avoid scrollbars for long lines](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/371)
- [Standards Staging #376 - Custom field types for Response Headers are not displayed](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/376)
- [Standards Staging #388 - Fix typo in Amending Authorisation Standards: Changing Attributes](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/388)

This release addresses the following change requests raised on [Standards Maintenance](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues):

- [Standards Maintenance #543 - refresh_token_expires_at and sharing_expires_at claims listed as MUST be supported](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/543)
- [Standards Maintenance #624 - Improved structure for Solar Time Varying Tariffs](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/624)
- [Standards Maintenance #625 - Additional field to support Step Tariff calculations](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/625)
- [Standards Maintenance #627 - EnergyPlanTariffPeriod - Change to daily supply charge](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/627)
- [Standards Maintenance #629 - Maintenance Iteration 18 Holistic Feedback](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/629)
- [Standards Maintenance #631 - Updates to 'Revoking consent' Standards](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/631)
- [Standards Maintenance #632 - Concurrent consent support and cdr_arrangement_id](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/632)


### Decision Proposals
This release addresses the following Decision Proposals published on [Standards](https://github.com/ConsumerDataStandardsAustralia/standards/issues):

- [Decision Proposal #340 - Maintenance Iteration 18](https://github.com/ConsumerDataStandardsAustralia/standards/issues/340)


## General Changes
|Change|Description|Link|
|------|-----------|----|
| Updated documentation template | [**Standards Staging #376**](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/376): Request parameters and response headers with custom types defined in the schema (with `x-cds-type`) should now all be displayed with the correct type. The unused 'Format' column in the 'Response Headers' tables has also been removed. | [DCR APIs](../../#dcr-apis)<br>[Register APIs](../../#register-apis)
| Minor styling update | [**Standards Staging #371**](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/371): Improved line wrapping to avoid horizontal scrollbars in the 'Non-normative Examples' and 'Version Delta' tab columns. | [Non-normative Examples](../../?examples)<br>[Version Delta](../../?diff)


## Introduction
|Change|Description|Link|
|------|-----------|----|
| Updated date format | [**Standards Staging #310**](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/310): Updated the date format in the 'Obligation Dates Schedule' table in the linked summary page to match the format in the 'Endpoint Version Schedule' tables to simplify cross-referencing. The aligned format is YYYY-MM-DD. | [Future Dated Obligations](../../#future-dated-obligations)


## High Level Standards
|Change|Description|Link|
|------|-----------|----|
| Updated Non-normative Example | [**Standards Maintenance #629**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/629#issuecomment-1968023646): Removed incorrect Non-normative Example showing `Accept-Encoding: charset=UTF-8` | [HTTP Headers](../../#http-headers)
| Updated Principles | [**Standards Staging #370**](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/370): Added reference to 'Consumer Experience (CX) Principles' in the introductory sentence and reformatted CX Principle 4 and 5. | [Principles](../../#principles)


## API Endpoints
|Change|Description|Link|
|------|-----------|----|
| Banded Daily Supply Charges | [**Standards Maintenance #627**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/627#issuecomment-2024573078): Made following changes to `EnergyPlanTariffPeriod` to allow sharing of banded daily supply charges: <ul><li>Added `dailySupplyChargeType` - new ENUM field to note if the daily supply charge is single or banded</li><li>Added `bandedDailySupplyCharges`- A new object allowing representation of banded daily supply charges</li><li>Changed `dailySupplyCharges` to `dailySupplyCharge`</li></ul> | [Energy APIs](../../#energy-apis)
| Support Step Tariff calculations | [**Standards Maintenance #625**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/625#issuecomment-1993734451): Added new optional `period` field to the following to help support stepped tariff calculations: <ul><li>`EnergyPlanControlledLoad.singleRate`</li><li>`EnergyPlanSolarFeedInTariffV2.singleRate`</li><li>`EnergyPlanControlledLoad.timeOfUseRates`</li><li>`EnergyPlanSolarFeedInTariffV2.timeVaryingTariffs`</li><li>`EnergyPlanTariffPeriod.timeOfUseRates`</li></ul>  | [Energy APIs](../../#energy-apis)
| Improved structure for Solar Time Varying Tariffs  | [**Standards Maintenance #624**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/624#issuecomment-2019888328): <ul><li>Converted `solarFeedInTariff.timeVaringTariffs` into an array to allow representation of multiple feed in tariffs</li><li>Added new mandatory `displayName` field to `solarFeedInTariff.timeVaryingTariffs`</li><li>Added new ENUM values `CURRENT` and `VARIABLE` to `solarFeedInTariff.scheme`</li></ul> | [Energy APIs](../../#energy-apis)

## Information Security Profile
|Change|Description|Link|
|------|-----------|----|
| Clarified documentation | [**Standards Maintenance #629**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/629#issuecomment-1956098319): Clarified documentation to show that the "require_pushed_authorization_requests" parameter should be a Boolean `true` | [Request Object](../../#request-object)
| Updated documentation | [**Standards Maintenance #629**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/629#issuecomment-1940397162): Updated documentation to include link to string(JWT) schema from ClientRegistrationRequest | [ClientRegistrationRequest](../../#cdr-dynamic-client-registration-api_schemas_tocSclientregistrationrequest)
| Corrected typos | [**Standards Maintenance #629**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/629#issuecomment-1938107616): Changed 'Software Package' to 'Software Product' in two lines | [Participant Statuses](../../#participant-statuses)
| Corrected typo | [**Standards Maintenance #629**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/629#issuecomment-1920466440): Corrected typo in `cdr_arragement_id` | [Security Endpoints](../../#security-endpoints)
| Corrected typo | [**Standards Staging #361**](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/361): Corrected typo in the Description of `sector_identifier_uri` | [Client Registration](../../#client-registration)
| Updated link | [**Standards Staging #362**](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/362): Updated 'Pairwise Pseudonymous Identifier (PPID)' link | [Scopes and Claims](../../#scopes-and-claims)
| Updates to 'Revoking consent' Standards | [**Standards Maintenance #631**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/631): Updates to 'Revoking consent' requirements to align to rules | [Security Endpoints](../../#security-endpoints)
| Removed outdated statements | [**Standards Maintenance #632**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/632): Removed two outdated statements relating to the introduction of concurrent consent and retrospectively generating a cdr_arrangement_id. | [Identifiers and Subject Types](../../#identifiers-and-subject-types)
| Removed outdated statements | [**Standards Maintenance #543**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/543): Removed outdated statements related to the `refresh_token_expires_at` and `sharing_expires_at` claims | [Scopes and Claims](../../#scopes-and-claims)<br>[Request Object](../../#request-object)


## Register Standards
|Change|Description|Link|
|------|-----------|----|
| Clarified endpoint responses | [**Standards Maintenance #629**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/629#issuecomment-1930936447): Removed ResponseErrorListV2 as the 401 error response schema for 'Get Data Holder Brands' and 'Get Software Statement Assertion (SSA)'. These endpoints conform to RFC6750, returning an oAuth error in the WWW-Authenticate response header. | [Register APIs](../../#register-apis)


## Consumer Experience
|Change|Description|Link|
|------|-----------|----|
| Fixed typo | [**Standards Staging #388**](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/388): Fixed typo in the Amending Authorisation Standards section | [Amending Authorisation Standards](../../#amending-authorisation-standards)

## Non-Functional Requirements

None

## Additional Standards
|Change|Description|Link|
|------|-----------|----|
| Clarified endpoint response | [**Standards Maintenance #629**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/629#issuecomment-1930936447): Removed ResponseErrorListV2 as the 401 error response schema for 'Get Data Holder Brands'. This endpoint conform to RFC6750, returning an oAuth error in the WWW-Authenticate response header. | [Register APIs in the Non-Bank Lending Candidate Standards](../../#candidate-standards)


## Known Issues

None