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

### Decision Proposals

This release addresses the following Decision Proposals published on [Standards](https://github.com/ConsumerDataStandardsAustralia/standards/issues):

- [Decision Proposal 237 - Maintenance Iteration 10](https://github.com/ConsumerDataStandardsAustralia/standards/issues/237)


## High Level Standards

|Change|Description|Link|
|------|-----------|----|


## API End Points

|Change|Description|Link|
|------|-----------|----|


## Information Security Profile

|Change|Description|Link|
|------|-----------|----|

## Consumer Experience

|Change|Description|Link|
|------|-----------|----|
| OIDC Contact Detail claims | [**Change Request 504**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/504): Data language standards have been corrected to clarify that individual OIDC standard contact detail claims must be requested individually and not using the OIDC profile scope. These claims are optional for the Data Holder support and Data Recipients should check the Data Holder's OIDD discovery document to determine which claims are supported by inspecting the `claims_supported` parameter. | [Profile scope](../../#profile-scope) |
