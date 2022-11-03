---
title: Consumer Data Standards - v1.20.0 Release Notes

#language_tabs: # must be one of https://git.io/vQNgJ

toc_footers:
  - <a href='../../index.html'>Consumer Data Standards</a>

search: false
---

# V1.20.0 Release Notes
Release notes for version v1.20.0 of the [CDR Standards](../../index.html).

## Changes Made
### Change Requests

This release addresses the following minor defects raised on [Standards Staging](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues):


This release addresses the following change requests raised on [Standards Maintenance](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues):

- [Standards Maintenance Issue 458 - FAPI 1.0 Non Normative Examples](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/458)
- [Standards Maintenance Issue 525: softwareProductDescription should be marked as mandatory](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/525)
- [Standards Maintenance Issue 411: Clarification of x-fapi-interaction-id header](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/411)
- [Standards Staging Issue 447: CORS typos in CDR](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/447)
- [Standards Maintenance Issue 414: Properties in BankingTransactionDetail objects](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/414)
- [Standards Maintenance Issue 506: Energy error codes for issues in data received by DH from SDH](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/506)
- [Standards Maintenance Issue 526: Energy / Get DER for Service Point - allow for no data](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/526)
- [Standards Maintenance Issue 524: EnergyDerRecord - mandatory values not available in AEMO's DER register](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/524)

### Decision Proposals

This release addresses the following Decision Proposals published on [Standards](https://github.com/ConsumerDataStandardsAustralia/standards/issues):

* [Decision Proposal 259 - Maintenance Iteration 12](https://github.com/ConsumerDataStandardsAustralia/standards/issues/259)


## Introduction

No changes

## High Level Standards

|Change|Description|Link|
|------|-----------|----|
| `x-fapi-interaction-id` header | [**Standards Maintenance #411**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/411): Additional clarification that the `x-fapi-interaction-id` request header is not required for unauthenticated APIs. | [HTTP Headers](../../#http-headers) |
| Error Codes - Error Response Structure|[**Standards Maintenance #506**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/506): Added `isSecondaryDataHolderError` Boolean field to Error Response Structure and updated [Future Date Obligation](../../#future-dated-obligations) section with the FDO date for the change. | [Error Codes](../../#error-codes) |


## API End Points

|Change|Description|Link|
|------|-----------|----|
| Get Data Recipients API | [**Standards Maintenance #525**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/525): Corrected response payload returned by the CDR Register to denote the `softwareProductDescription` as a required field. | [Get Data Recipients](../../#get-data-recipients) |
| BankingTransactionDetail schema fix | [**Standards Maintenance #414**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/414): Fixed the BankingTransactionDetail object to correctly show it as conditional based on the extensionUType. | [BankingTransactionDetail](../../#tocSbankingtransactiondetail) |
| Energy schema | [**Standards Maintenance #526**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/526): <ul><li>Changed type of `EnergyDerRecord.availablePhasesCount` and `EnergyDerRecord.installedPhasesCount` fields to `NaturalNumber`</li><li>Updated description of `approvedCapacity`, `availablePhasesCount` and `installedPhasesCount` in `EnergyDerRecord` to note a 0 value indicates no DER record is available</li></ul> | [Energy Schema](../../#energy-apis) |
| Energy schema | [**Standards Maintenance #524**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/524): Updated description of `inverterDeviceCapacity`, `derDevices.nominalRatedCapacity` and `derDevices.nominalStorageCapacity` fields in `EnergyDerRecord.acConnections` noting 0 as the default when value not known | [Energy Schema](../../#energy-apis) |
| Energy Swagger Defect | Defect fix for readQualities to make it an array instead of an object | [EnergyUsageRead Model](../../#tocSenergyservicepointdetail) |
| Energy Swagger Defect | Defect fix for readQualities to make it an array instead of an object (Secondary Holder version) | [EnergyUsageRead Model](../../##cdr-energy-secondary-data-holder-api-schemas) |
| Draft Telco standards | [**Decision Proposal #275**](https://github.com/ConsumerDataStandardsAustralia/standards/issues/275): Publish of draft (ie. non-binding) technical standards for the Telco sector for holistic review | [Telco Schema](../../#telco-apis) |


## Information Security Profile

|Change|Description|Link|
|------|-----------|----|
| Non-normative examples | [**Standards Maintenance Issue 458**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/458): Updated InfoSec non-normative examples with FAPI 1.0 Phase 3 flows | [Security Profile](../../#security-profile) |
| CORS typos | [**Standards Maintenance #447**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/447): Corrected the CORS protections to make clear they must be disabled for public APIs | [CORS](../../#cors) |


## Consumer Experience

No changes

## Known Issues

No changes
