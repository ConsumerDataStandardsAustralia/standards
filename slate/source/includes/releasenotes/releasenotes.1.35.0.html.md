---
title: Consumer Data Standards - v1.35.0 Release Notes

#language_tabs: # must be one of https://git.io/vQNgJ

toc_footers:
  - <a href='../../'>Consumer Data Standards</a>

includes:
  - footer

search: false
---

# V1.35.0 Release Notes
Release notes for version **1.35.0** of the [CDR Standards](../../).

## Changes Made
### Change Requests

This release addresses the following minor defects raised on [Standards Staging](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues):

- [Standards Staging #XXX - Title](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/XXX)

This release addresses the following change requests raised on [Standards Maintenance](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues):

- [Standards Maintenance #XXX - Title](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/XXX)


### Decisions
This release addresses the following Decisions published on [Standards](https://github.com/ConsumerDataStandardsAustralia/standards/issues):

- [Consultation Draft 367 - March 2025 Rules - Draft Standards](https://github.com/ConsumerDataStandardsAustralia/standards/issues/367)

#### Errata
The following <mark>corrections</mark> have been made to the changes resulting from [Decision 367](https://github.com/ConsumerDataStandardsAustralia/standards/issues/367):

|Standard Section|Decision text|Corrected text|
|----------------|-------------|--------------|
| [Future Dated Obligations](../../#future-dated-obligations)| Get Transactions for Account <mark>v3</mark><br><ul><li>Data Holders **MUST** implement <mark>v3</mark> of this endpoint by **November 9th 2026**</li><li>Data Holders **MAY** retire <mark>v2</mark> of this endpoint from **December 7th 2026**</li></ul> | Get Transactions for Account <mark>v2</mark><br><ul><li>Data Holders **MUST** implement <mark>v2</mark> of this endpoint by **November 9th 2026**</li><li>Data Holders **MAY** retire <mark>v1</mark> of this endpoint from **December 7th 2026**</li></ul> |
| [Future Dated Obligations](../../#future-dated-obligations)| Get Transaction Detail <mark>v4</mark><br><ul><li>Data Holders **MUST** implement <mark>v4</mark> of this endpoint by **November 9th 2026**</li><li>Data Holders **MAY** retire <mark>v3</mark> of this endpoint from **December 7th 2026**</li></ul> | Get Transaction Detail <mark>v3</mark><br><ul><li>Data Holders **MUST** implement <mark>v3</mark> of this endpoint by **November 9th 2026**</li><li>Data Holders **MAY** retire <mark>v2</mark> of this endpoint from **December 7th 2026**</li></ul> |


## General Changes
|Change|Description|Link|
|------|-----------|----|
| Change summary | [**Standards Staging #XXX**](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/XXX): Change detail. | [Standards section](../../#section)
| Change summary | [**Standards Maintenance #XXX**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/XXX): Change detail. | [Standards section](../../#section)
| Change summary | [**Decision Proposal #XXX**](https://github.com/ConsumerDataStandardsAustralia/standards/issues/XXX): Change detail. | [Standards section](../../#section)


## Introduction
|Change|Description|Link|
|------|-----------|----|
| March 2025 Rules including NBL and BNPL | [**Decision #367**](https://github.com/ConsumerDataStandardsAustralia/standards/issues/367): Changes related to the March 2025 Rules, including the introduction of the NBL sector and BNPL products. | [Future Dated Obligations](../../#future-dated-obligations)


## High Level Standards
|Change|Description|Link|
|------|-----------|----|
| Added Definitions section | [**Decision #367**](https://github.com/ConsumerDataStandardsAustralia/standards/issues/367): Added Definitions section to address usage of Banking and Non-Bank Lending language. | [Definitions](../../#definitions)


## API Endpoints
|Change|Description|Link|
|------|-----------|----|
| Added BNPL detail | [**Decision #367**](https://github.com/ConsumerDataStandardsAustralia/standards/issues/367): Updated affected Banking endpoints to accommodate BNPL products and features, and added '400 - Missing Required Header' error response. | [Banking APIs](../../#banking-apis)


## Information Security Profile
|Change|Description|Link|
|------|-----------|----|


## Register Standards
|Change|Description|Link|
|------|-----------|----|
| Added NBL detail | [**Decision #367**](https://github.com/ConsumerDataStandardsAustralia/standards/issues/367): Updated Register endpoints to accommodate Non-Bank Lending. | [Register APIs](../../#register-apis)


## Consumer Experience
|Change|Description|Link|
|------|-----------|----|
| Added NBL detail | [**Decision #367**](https://github.com/ConsumerDataStandardsAustralia/standards/issues/367): Updated CX language sections to refer to Non-Bank Lending. | [Data Language Standards: Common](../../#data-language-standards-common)<br>[Banking and Non-Bank Lending Language](../../#banking-and-non-bank-lending-language)


## Non-Functional Requirements
|Change|Description|Link|
|------|-----------|----|
| Added Get Instalments endpoints | [**Decision #367**](https://github.com/ConsumerDataStandardsAustralia/standards/issues/367): Specified performance requirements for new Get Instalments endpoints. | [Performance Requirements](../../#performance-requirements)


## Shared Responsibility
|Change|Description|Link|
|------|-----------|----|


## Additional Standards
|Change|Description|Link|
|------|-----------|----|
| Removed Non-Bank Lending Candidate | [**Decision #367**](https://github.com/ConsumerDataStandardsAustralia/standards/issues/367): Removed the Non-Bank Lending Candidate as the standards have now been integrated. | [Additional Standards](../../#additional-standards)


## Known Issues
|Change|Description|Link|
|------|-----------|----|
| Removed Non-Bank Lending Known Issues item | [**Decision #367**](https://github.com/ConsumerDataStandardsAustralia/standards/issues/367): Removed Non-Bank Lending Known Issues item regarding prior updates to the NBL Candidate. | [Known Issues](../../#known-issues)

