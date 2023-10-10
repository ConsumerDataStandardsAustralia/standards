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
- [Staging Issue 197 - Update client registration non-normative examples to include energy sectors](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/197)
- [Staging Issue 305 - Long lines break words and cause scrollbars](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/305)
- [Staging Issue 306 - Body parameter for JWT POST + PUT not displayed](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/306)
- [Staging Issue 307 - Incorrect non-normative example](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/307)
- [Staging Issue 308 - Fix link to FAPI section reference](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/308)
- [Staging Issue 309 - Property names wrapping to two lines](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/309)
- [Staging Issue 311 - Links to schemas land below the schema name](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/311)

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
| Links to schemas land below the schema name | **[Standards Staging #311](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/311):** Adjusted anchor links to keep schema name in view when navigating the Standards documentation | All schema Properties tables |
| Line wrapping and scrollbars | **[Standards Staging #305](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/305):** Improved line wrapping and removed horizontal scrollbars in the 'Non-normative Examples' and 'Version Delta' tab column. | [Non-normative Examples](../../?examples)<br>[Version Delta](../../?diff) |
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
| Property names wrapping to two lines | **[Standards Staging #309](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/309):** Changed to a non-breaking space between the indent chevron and property name in all schema Properties tables to prevent line wrapping | All schema Properties tables |
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
| Fix link to FAPI section reference | **[Standards Staging #308](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/308):** Updated link to section 8.6 of FAPI Advanced | [Client Registration](../../#client-registration) |
| Incorrect non-normative example | **[Standards Staging #307](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/307):** Updated the 'code_challenge_methods_supported' property of the OpenID Provider Configuration to be an array | [Security Endpoints](../../#security-endpoints) |
| Body parameter for JWT POST + PUT | **[Standards Staging #306](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/306):** Updated 'Non-normative Examples' to include JWT Body parameter for POST and PUT | [DCR APIs](../../#dcr-apis) |
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
