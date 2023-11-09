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

None

This release addresses the following change requests raised on [Standards Maintenance](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues):

None

### Decision Proposals

This release addresses the following Decision Proposals published on [Standards](https://github.com/ConsumerDataStandardsAustralia/standards/issues):

- [Decision Proposal 306 - Updates to Banking Product and Account Detail](https://github.com/ConsumerDataStandardsAustralia/standards/issues/306) (See [Decision Proposal 306 Candidate](#additional-standards) below)
- [Decision Proposal 318 - Non-Bank Lending Standards](https://github.com/ConsumerDataStandardsAustralia/standards/issues/318) (See [Non-Bank Lending Draft](#additional-standards) below)

## General Changes
|Change|Description|Link|
|------|-----------|----|
| Enum property type | Properties defined with enumerated values will now show the type as 'Enum' instead of 'string' | All schema Properties tables |

## Introduction

None

## High Level Standards

None

## API End Points

None

## Information Security Profile

None

## Register Standards

None

## Consumer Experience

None

## Non-Functional Requirements

None

## Additional Standards

|Change|Description|Link|
|------|-----------|----|
| Decision Proposal 306 Candidate | <ul><li>Changed the `cardArt` array to a `cardOption` object to provide additional card details in 'Get Products', 'Get Product Detail' and 'Get Account Detail'.<li>Added the `FEE` `lendingRateType` value to support lending products that have a fee-based rather than rate-based cost. This type may be expected to align to the new `PRINCIPAL_AND_FEE` `repaymentType`.<li>Added the `BALANCE_TRANSFER` `lendingRateType` value to extend support for credit card plan detail.<li>Updated the `creditCard` schema in 'Get Account Detail' to allow an array of plan types, each with specific rates, repayments, adjustments and features.<li>Added `revertRate`, `revertProductId`, `rateStartDate` and `rateEndDate` fields to respective lending rate schemas to support 'revert' rate details.<li>Added `referenceRate` to multiple lending and deposit rate schemas.<li>Added `adjustmentToBase` and `adjustmentBundle` fields to the 'BankingProductLendingRate' and 'BankingProductDepositRate' schemas. The `adjustmentToBase` field is provided to allow an adjustment rate type to specify which base rate type the adjustment applies to, where many may be offered for a product.<li>Updated and added the `applicabilityConditions` field in the 'BankingProductLendingRate', 'BankingProductDepositRate' and 'BankingProductRateTier' schemas.<li>Added the `applicationType` field to clarify whether an associated `applicationFrequency` value is to be expected.<li>Updated the description of the `features` property of 'Get Product Detail' and 'Get Account Detail' to clarify that the schema also supports providing details of any key operational product limitations.<li>Updated the description of the `constraints` property of 'Get Product Detail' to clarify that the schema is only intended to provide details of constraints on application for the product.<li>Added new `featureType` values to support operational limitations and the `OTHER` `constraintType` to allow additional detail to be provided.<li>Added new `feeCategory` field and new `feeType` values to improve classification and comparison of fees.<li>Updated the 'BankingProductFee' schema to separate different fee types by UType and added minimum and maximum fee details and `feeCap` fields.<li>Incorporated rate detail into the 'Get Account Detail' schemas to provide specific rate fields separated from the generic Product Reference rate objects.<li>Extended the `termDeposit` schema in 'Get Account Detail' to allow each deposit to be specified with specific rates and terms.<li>Updated the 'adjustment' rate type values to remove the `INTRODUCTORY`, `BUNDLE_BONUS`, `BUNDLE_DISCOUNT_FIXED`, `BUNDLE_DISCOUNT_VARIABLE` options. Time and bundle-based rate detail will be supported through new fields to capture that detail: `adjustmentBundle`, `adjustmentPeriod` and `adjustmentEndDate`, leaving the `additionalValue` field available for other detail where necessary.<li>Added a `deposit` schema in 'Get Account Detail' to provide rate detail for general deposit structures without term deposit maturity detail.<li>Removed the `specificAccountUType` field in 'Get Account Detail' to clarify that multiple types may be present in a single account.<li>Updated the 'Use of additionalValue Field' descriptions for the `PENSION_RECIPIENT` and `STUDENT` 'Product Eligibility' and 'Product Discount Eligibility' types.<li>Updated the description of the `comparisonRate` field to clarify how it could be interpreted when associated with an adjustment rate type.<li>Updated the description of the rate tier `unitOfMeasure` field to clarify the format of the associated values, including specifying `PERCENT` values as a RateString.<li>This candidate incorporates the latest Non-Bank Lending (NBL) [Draft](../../#draft-standards) changes including the `BUY_NOW_PAY_LATER` product category value, the `instalments` object, and related feature and fee types. The endpoint versions incremented due to changes related to the NBL Draft only, are:<ul><li>Get Accounts (v3)<li>Get Bulk Balances (v2)<li>Get Bulk Direct Debits (v2)<li>Get Scheduled Payments Bulk (v3).<li>Other NBL changes affecting the Register APIs are only shown in the [NBL Draft](../../#draft-standards).</ul><li>The endpoint versions incremented primarily for Decision Proposal 306, but also including NBL detail are: <ul><li>Get Account Detail (v4)<li>Get Products (v4)<li>Get Product Detail (v5).</ul><li>Corrected minor typos and updated documentation formatting.</ul> | [Candidate Standards](../../#candidate-standards) |
| Non-Bank Lending Draft | <ul><li>Updated Register endpoint versions affected by the addition of the `non-bank-lending` value in the `industry` query and `industries` response field.<li>The endpoint versions incremented due to these changes are: <ul><li>Get Data Holder Brands (v3)<li>Get Data Holder Brands Summary (v2)<li>Get Data Holder Statuses (v2).</ul><li>Previous Register endpoint versions are available through the respective 'Obsolete versions' links.</ul><ul><li>Updated Banking endpoint versions affected by the addition of the `BUY_NOW_PAY_LATER` value in the `product-category` query.<li>Added `instalments` object in 'Get Product Detail' and 'Get Account Detail' endpoints.<li>Added `EXTRA_DOWN_PAYMENT` `featureType` to support 'Buy Now, Pay Later' or similar products where a variable down-payment may be made.<li>Added the 'Product Categories' section to include a general description of the `BUY_NOW_PAY_LATER` category.<li>Added the 'Product & Account Components' section to include descriptions of the previously included `PAYMENT_LATE` and `UPFRONT_PER_PLAN` `feeType` values.<li>The endpoint versions incremented due to these changes are: <ul><li>Get Accounts (v3)<li>Get Bulk Balances (v2)<li>Get Account Detail (v4)<li>Get Bulk Direct Debits (v2)<li>Get Scheduled Payments Bulk (v3)<li>Get Products (v4)<li>Get Product Detail (v5).</ul><li>Previous Banking endpoint versions are available through the respective 'Obsolete versions' links.<li>Corrected minor typos and updated documentation formatting.<li>Added Consumer Experience section with Banking Language for reference only.</ul>|[Draft Standards](../../#draft-standards)|

## Known Issues

None