---
title: Consumer Data Standards - v1.32.0 Release Notes

#language_tabs: # must be one of https://git.io/vQNgJ

toc_footers:
  - <a href='../../index.html'>Consumer Data Standards</a>

search: false
---

# V1.32.0 Release Notes
Release notes for version v1.32.0 of the [CDR Standards](../../index.html).

## Changes Made
### Change Requests

This release addresses the following minor defects raised on [Standards Staging](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues):

- [Standards Staging #410 - Clarify RateString description and examples](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/410)
- [Standards Staging #411 - Fix typos](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/411)
- [Standards Staging #413 - Merge Change Log and Archives sections](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/413)
- [Standards Staging #417 - Non-existent property "amount" listed as required](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/417)
- [Standards Staging #418 - Add a link to CX Guidelines to the left menu pane of the Standards](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/418)
- [Standards Staging #419 - Field name styling](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/419)
- [Standards Staging #426 - Error in Telco OAS components](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/426)
- [Standards Staging #437 - Remove Known Issues](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/437)
- [Standards Staging #438 - Improve code sample section styling](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/438)

This release addresses the following change requests raised on [Standards Maintenance](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues):

- [Standards Maintenance #641 - Update CDS documentation to clarify expected rate value 'sign' (+/-) for each RateType](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/641)
- [Standards Maintenance #647 - Maintenance Iteration 20 Holistic Feedback](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/647)
- [Standards Maintenance #648 - Adopt BCP 195 for TLS ciphers](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/648)
- [Standards Maintenance #652 - Specify units of currency to be used for the AmountString field type](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/652)
- [Standards Maintenance #653 - EnergyPlanTariffPeriod - cater for plans with no dailySupplyCharge](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/653)


### Decision Proposals
This release addresses the following Decision Proposals published on [Standards](https://github.com/ConsumerDataStandardsAustralia/standards/issues):

- [Decision Proposal #XXX - Title](https://github.com/ConsumerDataStandardsAustralia/standards/issues/XXX)


## General Changes
|Change|Description|Link|
|------|-----------|----|
| Change summary | [**Standards Maintenance #XXX**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/XXX): Change detail | [Standards section](../../#section)
| Change summary | [**Decision Proposal #XXX**](https://github.com/ConsumerDataStandardsAustralia/standards/issues/XXX): Change detail | [Standards section](../../#section)
| Fix typos | [**Standards Staging #411**](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/411): Fixed typos and formatting in multiple specification files (documentation) including correction to the '400 - Missing _Required_ Field' error title. | N/A
| Changelog section | [**Standards Staging #413**](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/413): Merged the Change Log and Archives sections | [Changelog and archives](../../#changelog-and-archives)
| Add CX Guidelines link | [**Standards Staging #418**](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/418): Added CX Guidelines link to side/footer navigation | [Introduction](../../#introduction)
| Improve Code sample styling | [**Standards Staging #438**](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/438): Improved styling of 'Code samples' displayed in the Non-Normative Examples tab and updated the Register server URL in the OpenAPI specification to refer to the actual Base URLs | [Code samples throughout](../../?examples)<br>[Register APIs](../../?diff#register-apis)
| Adjustment rate format clarification | [**Standards Maintenance #641**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/641): Clarified the format of 'bonus', 'discount' and 'penalty' adjustment rate values | [Deposit Adjustment Rate Types](../../#tocSproductdepositadjustmentratetypedoc)<br>[Lending Adjustment Rate Types](../../#tocSproductlendingadjustmentratetypedoc)


## Introduction
|Change|Description|Link|
|------|-----------|----|


## High Level Standards
|Change|Description|Link|
|------|-----------|----|
| Common Field Types examples | [**Standards Staging #410**](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/410): Clarified formatting of RateString type | [Common Field Types](../../#common-field-types)
| Changed URIString example | [**Standards Maintenance #647**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/647): Updated URIString example to use HTTPS not HTTP. Addresses [issue comment](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/647#issuecomment-2234764756) | [Security Profile](../../#common-field-types)
| Updated AmountString description | [**Standards Maintenance #652**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/652): Updated the description of the AmountString field type, clarifying the currency format and noting it defaults to AUD. | [Common Field Types](../../#common-field-types)


## API Endpoints
|Change|Description|Link|
|------|-----------|----|
| Corrected required properties | [**Standards Staging #417**](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/417): Corrected mistake in the _timeVaryingTariffs_ schema which specified _amount_ as a required property | [Energy APIs](../../#energy-apis)
| Update field name styling | [**Standards Staging #419**](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/419): Updated styling of field names in the Banking APIs section, including Product Categories and Product & Account Components | [Banking APIs](../../#banking-apis)
| Corrected field description for `tariffUType` | [**Standards Maintenance #647**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/647): Updated the field description for `tariffUType` where the incorrect description was copied in error. Addresses [issue comment](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/647#issuecomment-2222175955) | [Energy APIs](../../#energy-apis)
| Amend <i>dailySupplyChargeType</i> description | [**Standards Maintenance #653**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/653): Amended the  description of the <i>EnergyPlanTariffPeriodV2.dailySupplyChargeType</i> field to remove the default value assumption of `SINGLE` if the field is not provided, allowing plans without a specific daily supply charge to be shared. This change will be included in the existing 11 Nov 2024 FDO for Get Generic Plan Detail v4 and Get Energy Account Detail v5, and will be treated as errata to avoid a version update.| [Energy APIs](../../#energy-apis)


## Information Security Profile
|Change|Description|Link|
|------|-----------|----|
| Typo fix for `authorization_code` | [**Standards Maintenance #647**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/647): Corrected spelling mistake. Addresses [issue comment](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/647#issuecomment-2199060934) | [Security Profile](../../#security-profile)
| Removed redundant statement | [**Standards Maintenance #647**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/647): Simplified and removed redundant statement for client ID issuance. Addresses [issue comment](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/647#issuecomment-2212872798) | [Security Profile](../../#security-profile)
| Adopt BCP195 for supported ciphers | Update TLS Cipher requirements to align to FAPI 2.0 and adoption of BCP195. Addresses [issue 648](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/648#issue-2383325264). | [Security Profile -> Transaction Security -> Ciphers](../../#transaction-security)|


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
| Correction to Telco specification | [**Standards Staging #426**](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/426): Corrected error in specification of response headers | [Candidate Standards](../../#candidate-standards)


## Known Issues
|Change|Description|Link|
|------|-----------|----|
| Remove Known issues | [**Standards Staging #437**](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/437): Removed three known issues related to Register endpoint specfications that are resolved | [Known Issues](../../#known-issues)
