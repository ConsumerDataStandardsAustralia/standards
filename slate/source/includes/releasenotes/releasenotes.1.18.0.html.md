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
| Array Conventions - Payload Conventions | Fixed the HTML rendering for the Markdown bullet point list in the array conventions | [Payload Conventions](../../#payload-conventions)|

## API End Points

|Change|Description|Link|
|------|-----------|----|
| Energy schema | [**Standards Maintenance #514**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/514) Made changes to `EnergyUsageRead` structure of both primary and secondary data holder to optimise sharing of large volume of interval read data. The change also includes adding a new `interval-reads` query parameter to usage APIs. | [Energy Schema](../../#energy-apis) |
| Energy schema | [**Standards Maintenance #472**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/472) Made EnergyPlanControlledLoad into an array and updated structure to allow representation of time of use based rates. | [Energy Schema](../../#energy-apis) |
| Get Software Statement Assertion (SSA) | [**Standards Maintenance #486**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/486): Added reference to obsolete v1 of the GetSSA API | [Get Software Statement Assertion (SSA)](../../index.html#get-software-statement-assertion-ssa) |
| CDR Register APIs Endpoint Version Schedule | [**Standards Maintenance #486**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/486): Added version schedule for obsolete v1 of the GetSSA API | [Endpoint Version Schedule](../../includes/endpoint-version-schedule/#cdr-register-apis) |
| Register APIs | [**Standards Maintenance #481**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/481): Removed constraint that data holder brands only map to a single industry | [Register APIs](../../index.html#register-apis) |


## Information Security Profile

|Change|Description|Link|
|------|-----------|----|
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
