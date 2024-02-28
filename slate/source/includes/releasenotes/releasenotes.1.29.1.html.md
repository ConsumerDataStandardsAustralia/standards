---
title: Consumer Data Standards - v1.29.1 Release Notes

#language_tabs: # must be one of https://git.io/vQNgJ

toc_footers:
  - <a href='../../index.html'>Consumer Data Standards</a>

search: false
---

# V1.29.1 Release Notes
Release notes for version v1.29.1 of the [CDR Standards](../../index.html).

## Changes Made
### Change Requests

This release addresses the following minor defects raised on [Standards Staging](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues):

- [Standards Staging Issue 368 - Fix Incorrect versions of Energy Billing APIs in v1.29.0](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/368)

This release addresses the following change requests raised on [Standards Maintenance](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues):

- [Maintenance Issue 612 - Maintenance Iteration 17 Holistic Feedback](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/612)

### Decision Proposals

None

## General Changes

None

## Introduction

None

## High Level Standards

None

## API End Points

None

## Information Security Profile

None

## Register Standards

|Change|Description|Link|
|------|-----------|----|
|Corrected typos|**[Maintenance Issue 612 - Maintenance Iteration 17 Holistic Feedback](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/612#issuecomment-1720719607):** Corrected typos in the description of the `kid` field in the 'JWK' schema of the 'Get JWKS' endpoint|[JWK schema](../../#cdr-participant-discovery-api_schemas_tocSjwk)|

## Consumer Experience

|Change|Description|Link|
|------|-----------|----|
|Removed reference to FDOs|**[Maintenance Issue 612 - Maintenance Iteration 17 Holistic Feedback](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/612#issuecomment-1730719461):** Removed reference to Future Dated Obligations as the obligation dates for the associated requirements have passed|[Amending Authorisation Standards](../../#amending-authorisation-standards)|

## Non-Functional Requirements

None

## Additional Standards

None

## Known Issues

|Change|Description|Link|
|------|-----------|----|
| Fixed Energy API Versions | **[Standards Staging #368](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/368):** Resolved the known issue of incorrect version of `Get Bulk Billing` and `Get Billing For Specific Accounts` APIs changing them from 2 to 3 | [Energy APIs](../../#energy-apis) |