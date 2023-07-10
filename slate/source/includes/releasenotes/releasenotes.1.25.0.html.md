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

- None

This release addresses the following change requests raised on [Standards Maintenance](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues):

- [Standards Maintenance Issue 516 - Get OpenId Provider Config and Get JWKS API documented paths are incorrect](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/516)
- [Standards Maintenance Issue 522 - OpenID Provider Configuration End Point parameter requirements](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/522)
- [Standards Maintenance Issue 536 - Define new toUType value to relevant schemas](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/536)
- [Standards Maintenance Issue 559 - FAPI 1.0 Final Phase 3 Obligation example for authorisation request using the Authorisation Code Flow does not have "response_mode" attribute](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/559)
- [Standards Maintenance Issue 586 - Maintenance Iteration 15 Holistic Feedback](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/586)
- [Standards Maintenance Issue 590 - Remove FAPI 1.0 draft references](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/590)
- [Standards Maintenance Issue 591 - Energy 'Get Agreed Payment Schedule' - BSB and Account Number Tokenisation/non-Tokenisation](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/591)
- [Standards Maintenance Issue 592 - EnergyBillingDemandTransaction - timeOfUseType - New Value](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/592)

### Decision Proposals

This release addresses the following Decision Proposals published on [Standards](https://github.com/ConsumerDataStandardsAustralia/standards/issues):

- [Decision Proposal 288 - Non-Functional Requirements Revision](https://github.com/ConsumerDataStandardsAustralia/standards/issues/288)
- [Decision Proposal 303 - Maintenance Iteration 15](https://github.com/ConsumerDataStandardsAustralia/standards/issues/303)

## Introduction

|Change|Description|Link|
|------|-----------|----|
| Removed legacy obligation dates | [**Standards Maintenance #586**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/586): Removed legacy obligation dates more than 6 months in the past. Addresses this issue [comment](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/586#issuecomment-1541298747)) | [Future Dated Obligations](../../#future-dated-obligations) |
| Added Data Holder Brands Summary API to endpoint schedule | [**Standards Maintenance #586**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/586): Included the Get Data Holder Brands Summary API into the endpoint version schedule. Addresses this issue [comment](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/586#issuecomment-1552304480) | [Endpoint Version Schedule](../../includes/endpoint-version-schedule/#endpoint-version-schedule) |
| Typo correction in the endpoint schedule | [**Standards Maintenance #586**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/586): Corrected typos in the endpoint version schedule. Addresses this issue [comment](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/586#issuecomment-1552317244) | [Endpoint Version Schedule](../../includes/endpoint-version-schedule/#endpoint-version-schedule) |
| Heading changes | [**Standards Maintenance #586**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/586): Renamed InfoSec Profile to Security Profile and CDR Register APIs to Register APIs in the endpoint version schedule. Addresses this issue [comment](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/586#issuecomment-1552523783) | [Endpoint Version Schedule](../../includes/endpoint-version-schedule/#endpoint-version-schedule) |
| Spelling mistake | [**Standards Maintenance #586**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/586): Fixed misspelling of "Register". Addresses this issue [comment](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/586#issuecomment-1569508043) | [Future Dated Obligations](../../#future-dated-obligations) |

## High Level Standards

No Change

## API End Points

|Change|Description|Link|
|------|-----------|----|
| Add `digitalWallet` to Scheduled Payments | [**Standards Maintenance #536**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/536): <ul><li>Added `digitalWallet` object to `BankingScheduledPaymentToV2` structure.</li><li>Incremented versions of Get Scheduled Payments For Account, Get Scheduled Payments Bulk and Get Scheduled Payments For Specific Accounts APIs.</li><li>Updated description of `name` field in the `EnergyPaymentSchedule.digitalWallet` and `TelcoPaymentScheduleDigitalWallet` structures for consistency </li></ul> | [Banking APIs](../../#banking-apis)</br>[Energy APIs](../../#energy-apis)</br>[Telco APIs](../../#telco-apis) |
| Corrected HTTP Methods | [**Standards Maintenance #586**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/590): Corrected the endpoint version schedule to correctly list POST not GET methods for energy APIs: <ul><li>Get Usage For Specific Service Points</li><li>Get Balances For Specific Energy Accounts</li></ul><br/>Addresses this issue [comment](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/586#issuecomment-1537800843)) | [Endpoint Version Schedule](../../includes/endpoint-version-schedule/#endpoint-version-schedule) |
| Get Products | [**Standards Maintenance #586**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/586): Corrected typo in the Get Products API description. Addresses this issue [comment](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/586#issuecomment-1573348181)) | [Get Products API](../../#get-products) |
| Energy APIs | [**Standards Maintenance #591**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/591): Updated description of  `EnergyPaymentSchedule.isTokenised` field to further clarify when it can be used | [Energy APIs](../../#energy-apis) |
| Energy APIs | [**Standards Maintenance #592**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/592): <ul><li>Added `ALL_DAY` and `EXCESS` values to `EnergyBillingDemandTransaction.timeOfUseType` field.  Added `ALL_DAY` value to  `EnergyBillingUsageTransaction.timeOfUseType ` field.</li><li>Incremented versions of Get Get Billing For Account, Get Bulk Billing	and Get Billing For Specific Accounts APIs.</li></ul>  | [Energy APIs](../../#energy-apis) |
| Get Metrics | Added v4 and v5 of the Get Metrics API| [Admin APIs](../../#admin-apis) |

## Information Security Profile

|Change|Description|Link|
|------|-----------|----|
| OpenID Provider Configuration End Point | [**Standards Maintenance #522**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/522): Provides an exhaustive list of the required OpenID discovery parameters Data Holders must publish. | [OpenID Provider Configuration End Point](../../#security-endpoints) |
| Authorization Code Flow non-normative example | [**Standards Maintenance #559**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/559): Added "response_mode" to the authorisation request examples in accordance with FAPI 1.0 requirements for Authorisation Code Flow and JARM use. | [Security Profile](../../#security-profile) |
| FAPI normative references | [**Standards Maintenance #590**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/590): Removed legacy draft FAPI references and legacy phasing ensuring all normative references for FAPI align to the final versions | [Security Profile](../../#security-profile) |

## Register Standards

|Change|Description|Link|
|------|-----------|----|
| Register Base Paths | [**Standards Maintenance #516**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/516): Match the endpoints paths for jwks and well known to match actual Register implementation. | [Register APIs](../../#register-apis) |

## Consumer Experience

No Change

## Non Functional Requirements

|Change|Description|Link|
|------|-----------|----|
| Site Wide TPS Tiers | Added authorisation based tiering for site wide TPS thresholds | [Traffic Thresholds](../../#traffic-thresholds) |
| Low Velocity Data Sets | Added NFRs applicable to data recipients to accommodate low velocity data sets | [Data Recipient Requirements](../../#data-recipient-requirements) |


## Known Issues

No Change
