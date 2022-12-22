---
title: Consumer Data Standards - v1.22.0 Release Notes

#language_tabs: # must be one of https://git.io/vQNgJ

toc_footers:
  - <a href='../../index.html'>Consumer Data Standards</a>

search: false
---

# V1.22.0 Release Notes
Release notes for version v1.22.0 of the [CDR Standards](../../index.html).

## Changes Made
### Change Requests

This release addresses the following minor defects raised on [Standards Staging](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues): 

- [Fix for a missing font in styles](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/235)
- [Broken links in Register API section](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/234)

This release addresses the following change requests raised on [Standards Maintenance](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues):

- [Iteration 13 Holistic Feedback](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/551)
- [Specify if an Account is a joint account in the API response](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/513)
- [Update x-v header to be mandatory for Register APIs](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/544)
- [Update Register and DCR Swagger specs to use Common Field Types](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/546)


### Decision Proposals

This release addresses the following Decision Proposals published on [Standards](https://github.com/ConsumerDataStandardsAustralia/standards/issues):

- [Decision 272 - Maintenance Iteration 13](https://github.com/ConsumerDataStandardsAustralia/standards/issues/272)
- [Decision Proposal 275 - Holistic Feedback on Telco Standards](https://github.com/ConsumerDataStandardsAustralia/standards/issues/275) - Note that this is not a formal decision of the chair.  The Telco standards remain in draft form

## Introduction

No changes

## High Level Standards

No changes


## API End Points

|Change|Description|Link|
|------|-----------|----|
| DCR API Field Types | [**Standards Maintenance #546**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/546): Updated Dynamic Client Registration API specifications to use [Common Field Types](../../#common-field-types) | [DCR APIs](../../#dcr-apis) |
| Register API Field Types | [**Standards Maintenance #546**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/546): Updated Register API specifications to use [Common Field Types](../../#common-field-types) | [DCR APIs](../../#register-apis) |
| Register API x-v Comments | [**Standards Maintenance #544**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/544): Updated Register API x-v request header descriptions to specify the specific default value if not present | [DCR APIs](../../#register-apis) |
| Add Owner Field for Banking Accounts | [**Standards Maintenance #513**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/513): Adds a new `accountOwnership` field to banking account end points.  Change results in new end point versions | [Banking APIs](../../#banking-apis) |
| Telco Draft Standards Update | Updates arising from the feedback provided [Decision Proposal 275 - Holistic Feedback on Telco Standards](https://github.com/ConsumerDataStandardsAustralia/standards/issues/275) | [Draft Telco APIs](../../#telco-apis) |
| Holistic Feedback | Minor fixes arising from the feedback provided in the [Holistic Thread for Maintenance Iteration 13](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/551) | Various |


## Information Security Profile

No changes

## Consumer Experience

No changes

## Known Issues

No changes
