---
title: Consumer Data Standards - v1.24.0 Release Notes

#language_tabs: # must be one of https://git.io/vQNgJ

toc_footers:
  - <a href='../../index.html'>Consumer Data Standards</a>

search: false
---

# V1.24.0 Release Notes
Release notes for version v1.24.0 of the [CDR Standards](../../index.html).

## Changes Made
### Change Requests

This release addresses the following minor defects raised on [Standards Staging](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues):

- XXXX

This release addresses the following change requests raised on [Standards Maintenance](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues):

- [Standards Maintenance Issue 520 - Stepped solar feed in tariffs in Energy](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/520)

### Decision Proposals

This release addresses the following Decision Proposals published on [Standards](https://github.com/ConsumerDataStandardsAustralia/standards/issues):

- XXXX

## Introduction

No Change

## High Level Standards

No Change


## API End Points

|Change|Description|Link|
|------|-----------|----|
| Admin APIs - spelling correction| [**Standards Maintenance #565**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/565): Corrected spelling mistake in description of `RejectionMetricsV2.unauthenticated` field. Addresses [Issue 565 comment](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/565#issuecomment-1341720771). | [Admin APIs](../../#admin-apis) |
| Banking APIs - description update| [**Standards Maintenance #565**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/565): Fixed description of `BankingAccountDetailV3.lendingRates` field. Addresses [Issue 565 comment](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/565#issuecomment-1350218008). | [Banking APIs](../../#banking-apis) |
| Minor corrections| [**Standards Maintenance #565**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/565): <ul><li>Corrected various spelling and grammatical mistakes. Standardised `post codes` into `postcode`. Addresses [Issue 565 comment](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/565#issuecomment-1407931665). </li><li>Corrected grammatical mistakes in Session Requirements section. Addresses [Issue 565 comment](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/565#issuecomment-1425239638).</li><li>Corrected typo in Error Codes section. Addresses [Issue 565 comment](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/565#issuecomment-1453240097).</li></ul>| <ul><li>[Banking APIs](../../#banking-apis)</li><li>[Energy APIs](../../#energy-apis)</li><li>[Telco APIs](../../#telco-apis)</li><li>[Session Requirements](../../#session-requirements)</li><li>[Error Codes](../../#error-codes)</li></ul>|
| Get Metrics APIs - description update| [**Standards Maintenance #565**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/565): <ul><li>Updated description of `period` parameter in Get Metrics API. Addresses [Issue 565 comment](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/565#issuecomment-1453255983).</li><li>Updated description of `SecondaryHolderMetrics.rejections`. Addresses [Issue 565 comment](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/565#issuecomment-1340637893).</li></ul> | [Admin APIs](../../#admin-apis) |
| Product & Account Components - description update| [**Standards Maintenance #565**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/565): Updated description of `PENSION_RECIPIENT` value in `Product Eligibility Types` and `Product Discount Eligibility Types` tables. Addresses [Issue 565 comment](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/565#issuecomment-1491270045). | [Product & Account Components](../../#product-amp-account-components) |
| CORS clarification| [**Standards Maintenance #565**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/565): Added statements noting CORS is not required at relevant DCR and Register APIs. Addresses [Issue 565 comment](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/565#issuecomment-1477173448). | <ul><li>[DCR APIs](../../#dcr-apis)</li><li>[Register APIs](../../#register-apis)</li></ul>|
| Energy APIs | [**Standards Maintenance #520**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/520): <ul><li>Added `rates` object to `EnergyPlanSolarFeedInTariff` structure.</li><li>Incremented versions of Get Generic Plan Detail and Get Energy Account Detail APIs.</li></ul> | [Energy APIs](../../#energy-apis) |


## Information Security Profile

|Change|Description|Link|
|------|-----------|----|
| Certificate Management corrections| [**Standards Maintenance #565**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/565): Updated wording and corrected a typo in the "Issued by the Register CA for Data Recipients" table. Corrected a typo in the "CDR Certificate Authority" section. Addresses [Issue 565 comment](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/565#issuecomment-1340391109). | [Certificate Management](../../#certificate-management) |
| CORS clarification| [**Standards Maintenance #565**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/565): Added statements noting CORS is not required at relevant endpoints in Security Endpoints section. Addresses [Issue 565 comment](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/565#issuecomment-1477173448). | [Security Endpoints](../../#security-endpoints) |

## Consumer Experience

No Change

## Non Functional Requirements

|Change|Description|Link|
|------|-----------|----|
| Performance Requirements | [**Standards Maintenance #565**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/565): Listed specific APIs in the `Unattended` section. Fixed incorrect Energy API names. Addresses [Issue 565 comment](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/565#issuecomment-1480845969). | [Performance Requirements](../../#performance-requirements) |

## Known Issues

No Change
