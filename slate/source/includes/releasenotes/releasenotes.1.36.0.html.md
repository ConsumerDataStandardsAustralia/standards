---
title: CDR Data Standards - v1.36.0 Release Notes

#language_tabs: # must be one of https://git.io/vQNgJ

toc_footers:
  - <a href='../../'>CDR Data Standards</a>

includes:
  - footer

search: false
---

# V1.36.0 Release Notes
Release notes for version **1.36.0** of the [CDR Data Standards](../../).

## Changes Made
### Change Requests

This release addresses the following minor defects raised on [Standards Staging](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues):

- None

This release addresses the following change requests raised on [Standards Maintenance](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues):

- None


### Decisions
This release addresses the following Decisions published on [Standards](https://github.com/ConsumerDataStandardsAustralia/standards/issues):

- [Consultation Draft #376 - White label brand arrangements](https://github.com/ConsumerDataStandardsAustralia/standards/issues/376)


## General Changes
None


## Introduction
None


## High Level Standards
None


## Authentication Schedule
None


## Consumer Experience
None


## Security Profile
|Change|Description|Link|
|------|-----------|----|
| Organization CSR field | [**Decision #376**](https://github.com/ConsumerDataStandardsAustralia/standards/issues/376): Updated Organization (O) field for the Server in the Certificate Signing Request Profile. | [Certificate Management](../../?diff#certificate-management)
| Added ProductBaseUri row | [**Decision #376**](https://github.com/ConsumerDataStandardsAustralia/standards/issues/376): Added ProductBaseUri row in Participant Endpoints table. | [Participant Endpoints](../../?diff#participant-endpoints)


## DCR APIs
None


## Register APIs
|Change|Description|Link|
|------|-----------|----|
| Added *brandGroup* field | [**Decision #376**](https://github.com/ConsumerDataStandardsAustralia/standards/issues/376): Added *brandGroup* field to Get Data Holder Brands and Get Data Holder Brands Summary endpoints to support white labelled brands. | [Register APIs](../../#register-apis)
| Added *productBaseUri* field | [**Decision #376**](https://github.com/ConsumerDataStandardsAustralia/standards/issues/376): Added *productBaseUri* field to Get Data Holder Brands and Get Data Holder Brands Summary endpoints to provide flexibility in PRD obligations and endpoint discovery. | [Register APIs](../../#register-apis)


## Authorisation Scopes
None


## Non-functional Requirements
None


## Banking APIs
|Change|Description|Link|
|------|-----------|----|
| Added *brandGroup* field | [**Decision #376**](https://github.com/ConsumerDataStandardsAustralia/standards/issues/376): Added *brandGroup* field to Banking PRD endpoints to support white labelled brands. | [Banking APIs](../../#banking-apis)


## Energy APIs
None


## Common APIs
None


## Admin APIs
None


## Shared Responsibility
None


## Energy Secondary DH APIs
None


## Additional Standards
None


## Known Issues
None

