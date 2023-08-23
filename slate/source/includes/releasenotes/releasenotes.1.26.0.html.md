---
title: Consumer Data Standards - v1.26.0 Release Notes

#language_tabs: # must be one of https://git.io/vQNgJ

toc_footers:
  - <a href='../../index.html'>Consumer Data Standards</a>

search: false
---

# V1.26.0 Release Notes
Release notes for version v1.26.0 of the [CDR Standards](../../index.html).

## Changes Made
### Change Requests

This release addresses the following minor defects raised on [Standards Staging](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues):

- [Staging Issue 280 - Typo in Account Detail bundleName description](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/280)
- [Staging Issue 271 - Typos in Get Transactions For Account parameters](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/271)
- [Staging Issue 270 - Get Accounts V1 link in FDO](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/270)
- [Staging Issue 268 - Remove character in aud description](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/268)
- [Staging Issue 256 - Typos in archived Register API versions](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/256)

This release addresses the following change requests raised on [Standards Maintenance](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues):

- None

### Decision Proposals

This release addresses the following Decision Proposals published on [Standards](https://github.com/ConsumerDataStandardsAustralia/standards/issues):

- [Decision Proposal 322 - Update Get Metrics Endpoint Schedule](https://github.com/ConsumerDataStandardsAustralia/standards/issues/322)

## Introduction

|Change|Description|Link|
|------|-----------|----|
| Broken Link | Fixed broken link to Get Accounts V1 future dated obligations section| [FDOs](../../#future-dated-obligations) |

## High Level Standards

No Change

## API End Points

|Change|Description|Link|
|------|-----------|----|
| Modified Get Metrics Obligations | Changes to the obligation dates for Get Metrics v3 as determined in [Decision 322](https://github.com/ConsumerDataStandardsAustralia/standards/issues/322) | [Admin APIs](../../#admin-apis) |
| bundleName Typo | Typo in bundleName field description | [BankingAccountDetailV3](../../#tocSbankingaccountdetailv3) |
| minAmount/maxAmout Typos | Typo in description of minAmount and maxAmount query parameters descriptions for Get Transactions For Account endpoint| [Get Transactions For Account](../../#get-transactions-for-account) |

## Information Security Profile

No Change

## Register Standards

|Change|Description|Link|
|------|-----------|----|
| aud Typo | Typo in aud field description in the ClientRegistration model| [ClientRegistration](../../#tocSclientregistration) |
| Typos In Archived Endpoints | Typo in the deprecation note for Get Data Holder Brands V1, Get Software Products Statuses V1, Get Data Recipient Statuses V1, and Get Data Recipients V2| [Register APIs](../../#register-apis) |

## Consumer Experience

No Change

## Non Functional Requirements

No Change

## Known Issues

Resolved the known issue related to the incorrect obligation date for Get Metrics v5
