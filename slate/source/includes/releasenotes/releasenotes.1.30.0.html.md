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
- [Standards Maintenance #629 - Maintenance Iteration 18 Holistic Feedback](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/629)
- [Standards Maintenance #631 - Updates to 'Revoking consent' Standards](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/631)
- [Standards Maintenance #632 - Concurrent consent support and cdr_arrangement_id](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/632)


### Decision Proposals
This release addresses the following Decision Proposals published on [Standards](https://github.com/ConsumerDataStandardsAustralia/standards/issues):

- [Decision Proposal #XXX - Title](https://github.com/ConsumerDataStandardsAustralia/standards/issues/XXX)


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
| Updated Principles | [**Standards Staging #370**](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/370): Added reference to 'Consumer Experience (CX) Principles' in the introductory sentence and reformatted CX Principle 4 and 5. | [Principles](../../#principles)


## API Endpoints
|Change|Description|Link|
|------|-----------|----|


## Information Security Profile
|Change|Description|Link|
|------|-----------|----|
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


## Consumer Experience
|Change|Description|Link|
|------|-----------|----|
| Fixed typo | [**Standards Staging #388**](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/388): Fixed typo in the Amending Authorisation Standards section | [Amending Authorisation Standards](../../#amending-authorisation-standards)

## Non-Functional Requirements
|Change|Description|Link|
|------|-----------|----|


## Additional Standards
|Change|Description|Link|
|------|-----------|----|


## Known Issues
|Change|Description|Link|
|------|-----------|----|
