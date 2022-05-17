---
title: Consumer Data Standards - v1.17.0 Release Notes

#language_tabs: # must be one of https://git.io/vQNgJ

toc_footers:
  - <a href='../../index.html'>Consumer Data Standards</a>

search: false
---

# V1.17.0 Release Notes
Release notes for version v1.17.0 of the [CDR Standards](../../index.html).

## Changes Made
### Change Requests

This release addresses the following change requests raised on [Standards Maintenance](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues):

- [Standards Maintenance Issue 503: Fix documentation defect for CDR Arrangement JWT method](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/503)
- [Standards Maintenance Issue 504: Correct Data Language for Contact Details (profile scope and individual claims)](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/504)
- [Standards Maintenance Issue 438: Representing adjustment transactions within the Billing Payload for C&I customers](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/438)
- [Standards Maintenance Issue 457: Energy - Get Service Point Detail register suffix should be optional](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/457)
- [Standards Maintenance Issue 482: JWT signing non-normative examples use unsupported signing algorithm)](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/482)
- [Standards Maintenance Issue 498: New Register Authenticated APIs versions require multiple authorisation scopes](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/498)

### Decision Proposals

This release addresses the following Decision Proposals published on [Standards](https://github.com/ConsumerDataStandardsAustralia/standards/issues):

- [Decision Proposal 237 - Maintenance Iteration 10](https://github.com/ConsumerDataStandardsAustralia/standards/issues/237)


## High Level Standards

|Change|Description|Link|
|------|-----------|----|
| Energy schema | [**Standards Maintenance #438**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/438) Added 'calculationFactors' and 'adjustments' objects to ['EnergyBillingOtherTransaction'](../../#tocSenergybillingothertransaction) model to allow consistent representation of any calculation factors (i.e. DLF or MLF) used for deriving other charges and any adjustments arising from other types of charges such as environmental charge. | [Energy Schema](../../#energy-apis) |
| Obligation date highlighting | Highlighting based on a date pickers has been added for the Endpoint versioning schedule to enhance documentation functionality. This feature allows users to select a target date and determine what obligations apply at that date. | [Endpoint versioning schedule](../../includes/endpoint-version-schedule/)
| Obligation Dates Table | A series of fixed obligation milestones were agreed in Maintenance Iteration 10. This set of milestones will be used to pin breaking changes to a deterministic series of possible obligation dates. | [Obligation Dates]() |
| Scrollable diffs and examples | Added previous and next buttons to support easy scrolling between all diffs and non-normative examples. This feature is context dependent on the tab being viewed | N/A |

## API End Points

|Change|Description|Link|
|------|-----------|----|
| Energy schema | [**Standards Maintenance #457**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/457) Made EnergyServicePointDetail.meters.registers.registerSuffix field optional | [Energy Schema](../../#energy-apis) |
| Register APIs | [**Standards Maintenance #498**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/498) New authenticated endpoints only require `cdr-register:read` as the authorisation scope | [Register APIs](../../#register-apis) |

## Information Security Profile

|Change|Description|Link|
|------|-----------|----|
| CDR Arrangement Revocation End Point | [Standards Maintenance Issue 503](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/503): Corrected the documentation to include CDR Arrangement Form Parameter and CDR Arrangement JWT methods. Previous versions did not include this documentation correctly. | [CDR Arrangement Revocation End Point](../../#cdr-arrangement-revocation-end-point)
| Self-signed JWT Client Authentication non-normative example | [**Standards Maintenance #482**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/482): Updated self-signed JWT client authentication non-normative example `alg` field from HS256 to PS256 | [Client Authentication](../../index.html#client-authentication) |
| CDR Arrangement Revocation End Point non-normative example | [**Standards Maintenance #482**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/482): Updated data recipient hosted CDR Arrangement Revocation End Point non-normative example `alg` field from HS256 to PS256 | [Security Endpoints](../../index.html#security-endpoints) |

## Consumer Experience

|Change|Description|Link|
|------|-----------|----|
| OIDC Contact Detail claims | [**Standards Maintenance #504**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/504): Data language standards have been corrected to clarify that individual OIDC standard contact detail claims must be requested individually and not using the OIDC profile scope. These claims are optional for the Data Holder support and Data Recipients should check the Data Holder's OIDD discovery document to determine which claims are supported by inspecting the `claims_supported` parameter. | [Profile scope](../../#profile-scope) |
