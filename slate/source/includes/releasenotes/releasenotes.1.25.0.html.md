---
title: Consumer Data Standards - v1.25.0 Release Notes

#language_tabs: # must be one of https://git.io/vQNgJ

toc_footers:
  - <a href='../../index.html'>Consumer Data Standards</a>

search: false
---

# V1.25.0 Release Notes
Release notes for version v1.25.0 of the [CDR Standards](../../index.html).

## Changes Made
### Change Requests

This release addresses the following minor defects raised on [Standards Staging](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues):

- <Add Minor Issues if any>

This release addresses the following change requests raised on [Standards Maintenance](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues):

- [Standards Maintenance Issue 536 - Define new toUType value to relevant schemas](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/536)
- [Standards Maintenance Issue TBC - TBC](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/TBC)
- [Standards Maintenance Issue 592 - EnergyBillingDemandTransaction - timeOfUseType - New Value](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/592)
- [Standards Maintenance Issue 591 - Energy 'Get Agreed Payment Schedule' - BSB and Account Number Tokenisation/non-Tokenisation](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/591)

### Decision Proposals

This release addresses the following Decision Proposals published on [Standards](https://github.com/ConsumerDataStandardsAustralia/standards/issues):

- [Decision Proposal TBC - Maintenance Iteration 15](https://github.com/ConsumerDataStandardsAustralia/standards/issues/TBC)
- [Decision Proposal 288 - Non-Functional Requirements Revision](https://github.com/ConsumerDataStandardsAustralia/standards/issues/288)

## Introduction

No Change

## High Level Standards

|Change|Description|Link|
|------|-----------|----|


## API End Points

|Change|Description|Link|
|------|-----------|----|
| Add `digitalWallet` to Scheduled Payments | [**Standards Maintenance #536**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/536): <ul><li>Added `digitalWallet` object to `BankingScheduledPaymentToV2` structure.</li><li>Incremented versions of Get Scheduled Payments For Account, Get Scheduled Payments Bulk and Get Scheduled Payments For Specific Accounts APIs.</li><li>Updated description of `name` field in the `EnergyPaymentSchedule.digitalWallet` and `TelcoPaymentScheduleDigitalWallet` structures for consistency </li></ul> | [Banking APIs](../../#banking-apis)</br>[Energy APIs](../../#energy-apis)</br>[Telco APIs](../../#telco-apis) |
| Energy APIs | [**Standards Maintenance #592**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/592): <ul><li>Added `ALL_DAY` and `EXCESS` values to `EnergyBillingDemandTransaction.timeOfUseType` field.  Added `ALL_DAY` value to  `EnergyBillingUsageTransaction.timeOfUseType ` field.</li><li>Incremented versions of Get Get Billing For Account, Get Bulk Billing	and Get Billing For Specific Accounts APIs.</li></ul>  | [Energy APIs](../../#energy-apis) |
| Energy APIs | [**Standards Maintenance #591**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/591): Updated description of  `EnergyPaymentSchedule.isTokenised` field to further clarify when it can be used | [Energy APIs](../../#energy-apis) |

## Information Security Profile

|Change|Description|Link|
|------|-----------|----|


## Consumer Experience

|Change|Description|Link|
|------|-----------|----|

## Non Functional Requirements

|Change|Description|Link|
|------|-----------|----|

## Known Issues

No Change
