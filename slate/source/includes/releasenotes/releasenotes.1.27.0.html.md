---
title: Consumer Data Standards - v1.27.0 Release Notes

#language_tabs: # must be one of https://git.io/vQNgJ

toc_footers:
  - <a href='../../index.html'>Consumer Data Standards</a>

search: false
---

# V1.27.0 Release Notes
Release notes for version v1.27.0 of the [CDR Standards](../../index.html).

## Changes Made
### Change Requests

This release addresses the following minor defects raised on [Standards Staging](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues):

- [Staging Issue 196 - Incorrect levelling of largeSecondary object](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/196)
- [Staging Issue #197 - Update client registration non-normative examples to include energy sectors](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/197)

This release addresses the following change requests raised on [Standards Maintenance](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues):

- [Maintenance Issue 469 - Add isQueryParamUnsupported to MetaPaginated for schema validation](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/469)
- [Maintenance Issue 599 - Maintenance Iteration 16 Holistic Feedback](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/599)
- [Maintenance Issue 605 - Metrics: Performance threshold including SDH](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/605)
- [Maintenance Issue 611 - Clarification of Energy PRD Obligations](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/611)

### Decision Proposals

This release addresses the following Decision Proposals published on [Standards](https://github.com/ConsumerDataStandardsAustralia/standards/issues):

- [Decision Proposal 313 - Maintenance Iteration 16](https://github.com/ConsumerDataStandardsAustralia/standards/issues/313)

## General Changes
|Change|Description|Link|
|------|-----------|----|
| Release notes for v1.25.0 | **[Standards Maintenance #599](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/599):** Updated release notes for v1.25.0. Addresses [this issue comment](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/599#issuecomment-1649587194) | [Change Log](../../#change-log) |

## Introduction

|Change|Description|Link|
|------|-----------|----|
| Updated CDR website link | **[Standards Maintenance #599](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/599):** Changed the link to the CDR website to be HTTPS with www. Addresses [this issue comment](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/599#issuecomment-1655029056) | [Informative References](../../#informative-references) |

## High Level Standards

|Change|Description|Link|
|------|-----------|----|
| No Change | | |

## API End Points

|Change|Description|Link|
|------|-----------|----|
| Incorrect levelling of largeSecondary object | **[Standards Staging #196](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/196):** Resolved documentation rendering bug causing incorrect indent level to be displayed for some properties | Multiple sections, including [Get Metrics](../../#get-metrics) |
| Corrected typos | **[Standards Maintenance #599](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/599):** Corrected descriptions mentioning electricity in the EnergyInvoiceGasUsageCharges schema. Addresses [this issue comment](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/599#issuecomment-1678450294) | [Energy APIs](../../#energy-apis) |
| Corrected requirement | **[Standards Maintenance #599](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/599):** Corrected the requirement for the authorisations property of Get Metrics v4 and v5 to be mandatory. Addresses [this issue comment](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/599#issuecomment-1691010927) | [Admin APIs](../../#admin-apis) |
| Bad Request responses | **[Standards Maintenance #599](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/599):** Removed duplicate '400 - Invalid Version' error codes from Banking endpoints and added '400 - Invalid Date' error codes to Energy and Energy Secondary DH endpoints. Addresses [this issue comment](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/599#issuecomment-1633531898) | [Banking APIs](../../#banking-apis)<br />[Energy APIs](../../#energy-apis)<br />[Energy Secondary DH APIs](../../#energy-secondary-dh-apis) |
| References to Other Versions in Telco | **[Standards Maintenance #599](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/599):** Removed references to 'Other Versions' in 'Get Telco Accounts' and 'Get Telco Account Detail' endpoints. Addresses [this issue comment](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/599#issuecomment-1663584916) | [Telco APIs](../../includes/additional/candidates/telco.html#telco-apis) |
| Clarified deprecated Energy endpoint expectations | **[Standards Maintenance #599](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/599):** Added clarification for 'Get Generic Plan Detail V1', 'Get Energy Account Detail V2', 'Get Billing For Account V1', 'Get Bulk Billing V1', 'Get Billing For Specific Accounts V1', for Data Holders going live on, or after, November 1st 2023. Addresses [this issue comment](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/599#issuecomment-1696556235) | [Energy APIs](../../#energy-apis) |
| Metrics: Performance threshold including SDH | **[Standards Maintenance #605](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/605):** Added statement to clarify that aggregate performance metrics exclude Secondary Data Holder performance | [Get Metrics](../../#get-metrics) |
| isQueryParamUnsupported property | **[Standards Maintenance #469](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/469):** Added MetaPaginatedTransaction schema to 'Get Transactions For Account' to include the isQueryParamUnsupported property | [Banking APIs](../../#banking-apis) |

## Information Security Profile

|Change|Description|Link|
|------|-----------|----|
| Updated non-normative SSA examples | **[Standards Staging #197](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/197):** Updated encoded and decoded example SSAs to include energy scopes and minor updates for clarity and consistency. | [Security Profile](../../#security-profile)<br>[DCR APIs](../../#dcr-apis) |
| Corrected typo | **[Standards Maintenance #599](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/599):** Corrected typo in the description of the `software_roles` field in the **Client Registration** and **DCR APIs** sections. Addresses [this issue comment](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/599#issuecomment-1700463647) | [Security Profile](../../#security-profile) |
| Updated reference | **[Standards Maintenance #599](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/599):** Updated [FAPI-RW-Draft] to refer to [FAPI-1.0-Advanced]. Addresses [this issue comment](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/599#issuecomment-1709482553) | [Security Profile](../../#security-profile) |
| Clarification of Energy PRD Obligations | **[Standards Maintenance #611](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/611):** Updated the description of the PublicBaseUri field to clarify requirements for the Energy sector | [Security Endpoints](../../#security-endpoints) |

## Register Standards

|Change|Description|Link|
|------|-----------|----|
| Corrected typo | **[Standards Maintenance #599](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/599):** Corrected typo in registeredCountry description. Addresses [this issue comment](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/599#issuecomment-1667114199) | [Register APIs](../../#register-apis) |
| Changed x-v headers to mandatory | **[Standards Maintenance #599](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/599):** Changed the x-v header from optional to mandatory and removed the default x-v in 'Get Data Holder Brands', 'Get Software Statement Assertion', 'Get Software Products Statues', 'Get Data Recipients Statues', 'Get Data Recipients'. Updated the x-v and x-min-v descriptions to align to other endpoints. Addresses [this issue comment](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/599#issuecomment-1689276435) | [Register APIs](../../#register-apis) |

## Consumer Experience

|Change|Description|Link|
|------|-----------|----|
| No Change | | |

## Non-Functional Requirements

|Change|Description|Link|
|------|-----------|----|
| No Change | | |

## Known Issues

No Change