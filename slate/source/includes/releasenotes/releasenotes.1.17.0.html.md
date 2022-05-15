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
- [Standards Maintenance Issue 482: JWT signing non-normative examples use unsupported signing algorithm)](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/482)

### Decision Proposals

This release addresses the following Decision Proposals published on [Standards](https://github.com/ConsumerDataStandardsAustralia/standards/issues):

- [Decision Proposal 237 - Maintenance Iteration 10](https://github.com/ConsumerDataStandardsAustralia/standards/issues/237)


## High Level Standards

|Change|Description|Link|
|------|-----------|----|
| Obligation date highlighting | Highlighting based on a date pickers has been added for the Endpoint versioning schedule to enhance documentation functionality. This feature allows users to select a target date and determine what obligations apply at that date. | [Endpoint versioning schedule](../../includes/endpoint-version-schedule/)
| Obligation Dates Table | A series of fixed obligation milestones were agreed in Maintenance Iteration 10. This set of milestones will be used to pin breaking changes to a deterministic series of possible obligation dates. | [Obligation Dates]() |
| Scrollable diffs and examples | Added previous and next buttons to support easy scrolling between all diffs and non-normative examples. This feature is context dependent on the tab being viewed | N/A |

## API End Points

|Change|Description|Link|
|------|-----------|----|


## Information Security Profile

|Change|Description|Link|
|------|-----------|----|
| CDR Arrangement Revocation End Point | [Standards Maintenance Issue 503](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/503): Corrected the documentation to include CDR Arrangement Form Parameter and CDR Arrangement JWT methods. Previous versions did not include this documentation correctly. | [CDR Arrangement Revocation End Point](../../#cdr-arrangement-revocation-end-point)
| Self-signed JWT Client Authentication non-normative example | [**Standards Maintenance #482**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/482): Updated self-signed JWT client authentication non-normative example `alg` field from HS256 to PS256 | [Client Authentication](../../index.html#client-authentication) |
| CDR Arrangement Revocation End Point non-normative example | [**Standards Maintenance #482**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/482): Updated data recipient hosted CDR Arrangement Revocation End Point non-normative example `alg` field from HS256 to PS256 | [Security Endpoints](../../index.html#security-endpoints) |

## Consumer Experience

|Change|Description|Link|
|------|-----------|----|
