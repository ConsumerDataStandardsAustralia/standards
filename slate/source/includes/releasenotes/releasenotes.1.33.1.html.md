---
title: Consumer Data Standards - v1.33.1 Release Notes

#language_tabs: # must be one of https://git.io/vQNgJ

toc_footers:
  - <a href='../../'>Consumer Data Standards</a>

includes:
  - footer

search: false
---

# V1.33.1 Release Notes
Release notes for version **1.33.1** of the [CDR Standards](../../).

## Changes Made
### Change Requests

This release addresses the following minor defects raised on [Standards Staging](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues):

- [Standards Staging #183 - Refactor swagger definitions to factor out reusable components](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/183)
- [Standards Staging #428 - Fixes for Telco spec.](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/428)
- [Standards Staging #472 - Bug fixes - typos and formatting](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/472)

This release addresses the following change requests raised on [Standards Maintenance](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues):

- [Standards Maintenance #XXX - Title](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/XXX)


### Decision Proposals
This release addresses the following Decision Proposals published on [Standards](https://github.com/ConsumerDataStandardsAustralia/standards/issues):

- [Decision Proposal #XXX - Title](https://github.com/ConsumerDataStandardsAustralia/standards/issues/XXX)


## General Changes
|Change|Description|Link|
|------|-----------|----|
| Refactor swagger definitions | [**Standards Staging #183**](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/183): Key changes resulting from this issue are described below as part of Staging #472. | N/A
| Fixes for Telco spec. | [**Standards Staging #428**](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/428): Key changes resulting from this issue are described below as part of Staging #472. | N/A
| Refactor, bug fixes, typos and formatting | [**Standards Staging #472**](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/472): <ul><li>Corrected typos and text styling.</li><li>Requirements for endpoint response headers are now displayed.</li><li>For consistency, common statements referring to endpoint behaviour have been simplified to remove specific participant references. (e.g., 'the data holder MUST' and 'the Register MUST' have become 'the endpoint MUST')</li><li>Refactored all OpenAPI Spec. (OAS) files to use components consistently. Some components have been renamed to provide clarity or remain unique or consistent across the complete standards API suite.</li><li>Updated endpoint _tags_ in the OAS to improve grouping and sorting of endpoints in the Standards and other schema tools. The endpoint menu order has changed in the Register and Banking sections as a result.</li><li>Updated the referencing of the ResponseErrorList schema for consistency across all APIs and corrected the requirement of the _meta_ field from optional to conditional, to align to the condition specified in the _code_ field.</li><li>Updated some endpoint _operationId_ values for consistency and to ensure they are unique across the complete API suite.</li><li>Where field descriptions specified default values, they are now also specified in the schema and displayed in the schema Properties tables.</li><li>Updated description of Energy _minDemand_ field to represent the default value in the specified AmountString format (`0.00`) instead of `0`.</li><li>Corrected the specification of custom descriptions for referenced schemas that were ignored outside the rendering of the Standards page (e.g. other Swagger tools) by enclosing the referenced schemas in allOf statements.</li><li>Removed duplicate code (endpoint properties) in the Energy APIs and Energy Secondary DH APIs OAS - the _EnergyServicePointDetail_ schema now references common fields from the _EnergyServicePoint_ schema rather than duplicating them.</li><li>Created Enum schemas to allow frequently used values to reference a common source rather than being duplicated inline (Register: _industries_, Energy: _measureUnit_, _days_).</li><li>Consolidated multiple instances of common _requestBody_ schemas into _requestBodies_ components.</li><li>Removed the _x-codegen-request-body-name_ custom field specified a limited number of times in the following APIs (endpoint instances): DCR (2), Banking (3), Admin (1).</li><li>Where ID Permanence values were specified, previously discrete fields now reference a common schema component describing the respective field.</li><li>Removed unused schemas from the Telco OAS.</li><li>Added an item to the Known Issues section detailing EnergyDerRecord schema field defaults that may currently be unclear or inaccurate.</li><li>Added an item to the Known Issues section detailing Telco Candidate issues.</li></ul>These changes are not intended to modify the requirements or obligations of the Standards, but aim to clarify and improve the technical specifications supporting them. | N/A


## Introduction
|Change|Description|Link|
|------|-----------|----|


## High Level Standards
|Change|Description|Link|
|------|-----------|----|


## API Endpoints
|Change|Description|Link|
|------|-----------|----|


## Information Security Profile
|Change|Description|Link|
|------|-----------|----|


## Register Standards
|Change|Description|Link|
|------|-----------|----|


## Consumer Experience
|Change|Description|Link|
|------|-----------|----|


## Non-Functional Requirements
|Change|Description|Link|
|------|-----------|----|


## Additional Standards
|Change|Description|Link|
|------|-----------|----|


## Known Issues
|Change|Description|Link|
|------|-----------|----|

