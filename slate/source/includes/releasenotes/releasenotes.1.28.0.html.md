---
title: Consumer Data Standards - v1.28.0 Release Notes

#language_tabs: # must be one of https://git.io/vQNgJ

toc_footers:
  - <a href='../../index.html'>Consumer Data Standards</a>

search: false
---

# V1.28.0 Release Notes
Release notes for version v1.28.0 of the [CDR Standards](../../index.html).

## Changes Made
### Change Requests

This release addresses the following minor defects raised on [Standards Staging](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues):

- TBA

This release addresses the following change requests raised on [Standards Maintenance](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues):

- TBA

### Decision Proposals

This release addresses the following Decision Proposals published on [Standards](https://github.com/ConsumerDataStandardsAustralia/standards/issues):

- [Decision Proposal 318 - Non-Bank Lending Standards](https://github.com/ConsumerDataStandardsAustralia/standards/issues/318) (See [Non-Bank Lending Draft](#additional-standards) below)

## General Changes
|Change|Description|Link|
|------|-----------|----|
| TBA | TBA | TBA |

## Introduction

|Change|Description|Link|
|------|-----------|----|
| TBA | TBA | TBA |

## High Level Standards

|Change|Description|Link|
|------|-----------|----|
| TBA | TBA | TBA |

## API End Points

|Change|Description|Link|
|------|-----------|----|
| TBA | TBA | TBA |

## Information Security Profile

|Change|Description|Link|
|------|-----------|----|
| TBA | TBA | TBA |

## Register Standards

|Change|Description|Link|
|------|-----------|----|
| TBA | TBA | TBA |

## Consumer Experience

|Change|Description|Link|
|------|-----------|----|
| TBA | TBA | TBA |

## Non-Functional Requirements

|Change|Description|Link|
|------|-----------|----|
| TBA | TBA | TBA |

## Additional Standards

|Change|Description|Link|
|------|-----------|----|
| Non-Bank Lending Draft | <ul><li>Updated Register endpoint versions affected by the addition of the `non-bank-lending` value in the `industry` query and `industries` response field.<li>The endpoint versions incremented due to these changes are: <ul><li>Get Data Holder Brands (v3)<li>Get Data Holder Brands Summary (v2)<li>Get Data Holder Statuses (v2).</ul><li>Previous Register endpoint versions are available through the respective 'Obsolete versions' links.</ul><ul><li>Updated Banking endpoint versions affected by the addition of the `BUY_NOW_PAY_LATER` value in the `product-category` query.<li>Added `instalments` object in 'Get Product Detail' and 'Get Account Detail' endpoints.<li>Added `EXTRA_DOWN_PAYMENT` `featureType` to support 'Buy Now, Pay Later' or similar products where a variable down-payment may be made.<li>Added the 'Product Categories' section to include a general description of the `BUY_NOW_PAY_LATER` category.<li>Added the 'Product & Account Components' section to include descriptions of the previously included `PAYMENT_LATE` and `UPFRONT_PER_PLAN` `feeType` values.<li>The endpoint versions incremented due to these changes are: <ul><li>Get Accounts (v3)<li>Get Bulk Balances (v2)<li>Get Account Detail (v4)<li>Get Bulk Direct Debits (v2)<li>Get Scheduled Payments Bulk (v3)<li>Get Products (v4)<li>Get Product Detail (v5).</ul><li>Previous Banking endpoint versions are available through the respective 'Obsolete versions' links.<li>Corrected minor typos and updated documentation formatting.</ul>|[Draft Standards](../../#draft-standards)|

## Known Issues

|Change|Description|Link|
|------|-----------|----|
| TBA | TBA | TBA |
