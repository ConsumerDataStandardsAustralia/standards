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

- [Standards Maintenance Issue 506: Energy error codes for issues in data received by DH from SDH](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/506)
- [Standards Maintenance Issue 526: Energy / Get DER for Service Point - allow for no data](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/526)
- [Standards Maintenance Issue 524: EnergyDerRecord - mandatory values not available in AEMO's DER register](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/524)

### Decision Proposals

This release addresses the following Decision Proposals published on [Standards](https://github.com/ConsumerDataStandardsAustralia/standards/issues):

* [Decision Proposal 259 - Maintenance Iteration 12](https://github.com/ConsumerDataStandardsAustralia/standards/issues/259)


## Introduction

|Change|Description|Link|
|------|-----------|----|
| | | |

## High Level Standards

|Change|Description|Link|
|------|-----------|----|
| Error Codes - Error Response Structure|[**Standards Maintenance #506**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/506): Added `isSecondaryDataHolderError` Boolean field to Error Response Structure and updated [Future Date Obligation](../../#future-dated-obligations) section with the FDO date for the change. | [Error Codes](../../#error-codes) |


## API End Points

|Change|Description|Link|
|------|-----------|----|
| Energy schema | [**Standards Maintenance #526**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/526): <ul><li>Changed type of `EnergyDerRecord.availablePhasesCount` and `EnergyDerRecord.installedPhasesCount` fields to `NaturalNumber`</li><li>Updated description of `approvedCapacity`, `availablePhasesCount` and `installedPhasesCount` in `EnergyDerRecord` to note a 0 value indicates no DER record is available</li></ul> | [Energy Schema](../../#energy-apis) |
| Energy schema | [**Standards Maintenance #524**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/524): Updated description of `inverterDeviceCapacity`, `derDevices.nominalRatedCapacity` and `derDevices.nominalStorageCapacity` fields in `EnergyDerRecord.acConnections` noting 0 as the default when value not known | [Energy Schema](../../#energy-apis) |


## Information Security Profile

|Change|Description|Link|
|------|-----------|----|
| | | |


## Consumer Experience

|Change|Description|Link|
|------|-----------|----|
| | | |


## Known Issues

|Change|Description|Link|
|------|-----------|----|
| | | |

