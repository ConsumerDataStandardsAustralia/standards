---
title: Consumer Data Standards - v1.34.0 Release Notes

#language_tabs: # must be one of https://git.io/vQNgJ

toc_footers:
  - <a href='../../'>Consumer Data Standards</a>

includes:
  - footer

search: false
---

# V1.34.0 Release Notes
Release notes for version **1.34.0** of the [CDR Standards](../../).

## Changes Made
### Change Requests

This release addresses the following minor defects raised on [Standards Staging](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues):

- [Standards Staging #477 - Add a list of Data Standards Chairs](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/477)
- [Standards Staging #479 - Update documentation links to Register endpoints](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/479)
- [Standards Staging #481 - Update energy endpoint version schedule](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/481)


### Decision Proposals
This release addresses the following Decision Proposals published on [Standards](https://github.com/ConsumerDataStandardsAustralia/standards/issues):

- [Decision Proposal #338 - Updates to Banking Products and Accounts](https://github.com/ConsumerDataStandardsAustralia/standards/issues/338)
- [Decision Proposal #361 - Energy LCCD Phase 2](https://github.com/ConsumerDataStandardsAustralia/standards/issues/361)


## General Changes
|Change|Description|Link|
|------|-----------|----|
| Update links | [**Standards Staging #479**](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/479): Corrected documentation links referring to Register endpoints. | N/A


## Introduction
|Change|Description|Link|
|------|-----------|----|
| FDO for LCCD changes | [**Decision Proposal #361**](https://github.com/ConsumerDataStandardsAustralia/standards/issues/361): Added FDOs for Last Consumer Change Date (LCCD) related changes in Energy standards. | [FDO](../../#future-dated-obligations)
| Added Data Standards Chair section | [**Standards Staging #477**](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/477): A new section has been added to the standards to cover the Data Standards Chair appointments. | [Data Standards Chair](../../#data-standards-chair)
| Updated Energy Endpoint Version Schedule | [**Standards Staging #481**](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/481): Replaced **"Energy Shared Responsibility APIs"** with **"Energy Secondary DH APIs"**. Moved endpoints from previous "Energy Shared Responsibility APIs" table into "Energy APIs" table. | [Endpoint Version Schedule](../../#endpoint-version-schedule)

## High Level Standards
None


## API Endpoints
|Change|Description|Link|
|------|-----------|----|
| Updates to Banking Products and Accounts | [**Decision Proposal #338**](https://github.com/ConsumerDataStandardsAustralia/standards/issues/338): Incorporated changes from Decision 338:<ul><li>Incremented endpoint versions:<ul><li>Get Products v4</li><li>Get Product Detail v6</li><li>Get Account Detail v4</li></ul></li><li>Changes incorporated into the updated versions include:<ul><li>Added _cardScheme_ and _cardType_ fields in the existing _cardArt_ object</li><li>Added `BALANCE_TRANSFER` _lendingRateType_ option</li><li>Modified the feature _isActivated_ field behaviour</li><li>Added `FUNDS_AVAILABLE_AFTER` _featureType_ option</li><li>Added `OTHER` _constraintType_ option</li><li>Clarified the descriptions of the _constraints_ and _features_ fields</li><li>Updated and aligned the `PENSION_RECIPIENT` and `STUDENT` eligibility and discount eligibility 'Use of additionalValue Field' details</li><li>Added `OTHER` and `UNCONSTRAINED` _repaymentType_ options and specified the field as mandatory</li><li>Added `OTHER` and `UNCONSTRAINED` _loanPurpose_ options and specified the field as mandatory</li><li>Modified the existing _applicabilityConditions_ structure in rate tier objects and added the same structure at the rate level</li><li>Added rate _applicationType_ field in rate objects and modified the corresponding _applicationFrequency_ field requirement</li><li>Changed the field type for the _minimumValue_ and _maximumValue_ fields in the rate tier structure from 'Number' to 'string'</li><li>Removed the `VARIABLE` _feeType_ value, added eight new _feeType_ values, and refined the fee and fee discount structures.</li></ul></li><li>Minor documentation updates for consistency.</li></ul> | [Banking APIs](../../#banking-apis)
| LCCD changes | [**Decision Proposal #361**](https://github.com/ConsumerDataStandardsAustralia/standards/issues/361): <ul><li>Incremented versions of Get Service Points, Get Service Point Detail, Get Service Points (SR) and Get Service Point Detail (SR) APIs to v2</li><li>Added new field EnergyServicePointV2.lastConsumerChangeDate.</li></ul> | [Energy APIs](../../#energy-apis), [Energy SDH APIs](../../#energy-secondary-dh-apis)


## Information Security Profile
None


## Register Standards
None


## Consumer Experience
None


## Non-Functional Requirements
None


## Shared Responsibility
|Change|Description|Link|
|------|-----------|----|
| LCCD changes | [**Decision Proposal #361**](https://github.com/ConsumerDataStandardsAustralia/standards/issues/361): Updated **Additional Requirements** section with notes for electricity usage data sharing using Last Consumer Change Date (LCCD). | [Additional Requirements](../../#additional-requirements)

## Additional Standards
|Change|Description|Link|
|------|-----------|----|
| Removed Candidate | [**Decision Proposal #338**](https://github.com/ConsumerDataStandardsAustralia/standards/issues/338): Removed Candidate Standards for Banking Decision Proposal 306. | [Additional Standards](../../#additional-standards)


## Known Issues
None

