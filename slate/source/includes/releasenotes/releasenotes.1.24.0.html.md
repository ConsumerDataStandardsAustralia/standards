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

- [Standards Maintenance Issue 483 - Large payload tier description error](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/483)
- [Standards Maintenance Issue 496 - Unauthenticated energy routes have unclear header documentation](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/496)
- [Standards Maintenance Issue 520 - Stepped solar feed in tariffs in Energy](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/520)
- [Standards Maintenance Issue 532 - Update `x-fapi-auth-date` description for Customer APIs](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/532)
- [Standards Maintenance Issue 535 - Standard appears to redefine requirements for private_key_jwt authentication](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/535)
- [Standards Maintenance Issue 565 - Maintenance Iteration 14 Holistic Feedback](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/565)
- [Standards Maintenance Issue 574 - Additional functionality to support account selection](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/574)

### Decision Proposals

This release addresses the following Decision Proposals published on [Standards](https://github.com/ConsumerDataStandardsAustralia/standards/issues):

- XXXX

## Introduction

No Change

## High Level Standards

|Change|Description|Link|
|------|-----------|----|
| Non Functional Requirements - Large Payloads | Corrected the requirement to remove reference to "unattended" because the tier applies to all calls both attended and unattended. | [Non-Functional Requirements](../../#performance-requirements)
| RateString example clarification| [**Standards Maintenance #565**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/565): Added actual % values represented by examples for `RateString` field type. Addresses [Issue 565 comment](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/565#issuecomment-1442968426). | [Common Field Types](../../#common-field-types) |


## API End Points

|Change|Description|Link|
|------|-----------|----|
| Bug Fix: Energy Public Endpoints | [**Standards Maintenance #496**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/496): Removed `x-fapi-interaction-id` from response headers of Get Energy Plans and Get Energy Plan Details public APIs. | [Energy APIs](../../#energy-apis) |
|`x-fapi-auth-date` references in Customer resource APIs | [Standards Maintenance #532](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/532): Aligned header documentation for for `x-fapi-auth-date` references in the Customer APIs to be consistent with the Banking APIs and Header section definitions. | [Customer APIs](../../#get-customer) |
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
| RFC6749 conformant Private Key JWT Client Authentication | Change to support **[RFC7521]** such that, until November 13th 2023, clients authenticating using Private Key JWT are _recommended_ to provide the `client_id`, but no longer required. From November 13th 2023, it is then _optional_ to provide the `client_id`. This applies to ADRs and the CDR Register authenticating with Data Holders and ADRs authenticating with the CDR Register. During the RECOMMENDED phase in period, Data Holders and the CDR Register may reject clients that do not provide the `client_id`. ADRs may re-attempt client authentication by providing the `client_id`. During this phase in period, Data Holders and the CDR Register may stop requiring the `client_id`. If the client provides the `client_id`, the Data Holder/CDR Register must validate that its value is the same as the `iss` and `sub` claims in accordance with **[RFC7521](https://datatracker.ietf.org/doc/html/rfc7521#section-4.2)**| [Private Key JWT Client Authentication](../../#client-authentication) |
| Certificate Management corrections| [**Standards Maintenance #565**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/565): Updated wording and corrected a typo in the "Issued by the Register CA for Data Recipients" table. Corrected a typo in the "CDR Certificate Authority" section. Addresses [Issue 565 comment](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/565#issuecomment-1340391109). | [Certificate Management](../../#certificate-management) |
| CORS clarification| [**Standards Maintenance #565**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/565): Added statements noting CORS is not required at relevant endpoints in Security Endpoints section. Addresses [Issue 565 comment](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/565#issuecomment-1477173448). | [Security Endpoints](../../#security-endpoints) |

## Consumer Experience

|Change|Description|Link|
|------|-----------|----|
| New Authorisation CX Standard | [**Standards Maintenance #574**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/574): Added new Authorisation CX Standard for additional account selection functionality in the authorisation flow. | [Authorisation Standards](../../#authorisation-standards) |

## Non Functional Requirements

|Change|Description|Link|
|------|-----------|----|
| Performance Requirements | [**Standards Maintenance #565**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/565): Listed specific APIs in the `Unattended` section. Fixed incorrect Energy API names. Addresses [Issue 565 comment](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/565#issuecomment-1480845969). | [Performance Requirements](../../#performance-requirements) |

## Known Issues

No Change
