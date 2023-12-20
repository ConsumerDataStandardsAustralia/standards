---
title: Consumer Data Standards - v1.29.0 Release Notes

#language_tabs: # must be one of https://git.io/vQNgJ

toc_footers:
  - <a href='../../index.html'>Consumer Data Standards</a>

search: false
---

# V1.29.0 Release Notes
Release notes for version v1.29.0 of the [CDR Standards](../../index.html).

## Changes Made
### Change Requests

This release addresses the following minor defects raised on [Standards Staging](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues):

- [Staging Issue 222 - Resolve links within the standards to specific errors and other parts](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/222)
- [Staging Issue 288 - Gap in CDS specs around the mandatory nature of 'redirect_uri' in the Token Request](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/288)
- [Staging Issue 312 - Typos in Change Log and Archives](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/312)
- [Staging Issue 334 - Add visual indicator for different Standards categories](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/334)
- [Staging Issue 338 - Sub-menus in CX Standards](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/338)
- [Staging Issue 348 - Change previousDays data type to '[NaturalNumber]' in Get Metrics AuthorisationMetricsV2.abandonmentsByStage](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/348)
- [Staging Issue 349 - Enum parameters in endpoints are not reflected correctly](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/349)

This release addresses the following change requests raised on [Standards Maintenance](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues):

- [Standards Maintenance Issue 587 - EnergyBillingDemandTransactionV2 - Measure Unit](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/587)
- [Standards Maintenance Issue 612 - Maintenance Iteration 17 Holistic Feedback](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/612)
- [Standards Maintenance Issue 613 - Time format change request for Energy Plan Data](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/613)
- [Standards Maintenance Issue 620 - Authorization Response Algs should be conditional in RegistrationProperties](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/620)

### Decision Proposals

This release addresses the following Decision Proposals published on [Standards](https://github.com/ConsumerDataStandardsAustralia/standards/issues):

- [Decision Proposal 318 - Non-Bank Lending Standards](https://github.com/ConsumerDataStandardsAustralia/standards/issues/318)
- [Decision Proposal 333 - Business Consumer Provisions](https://github.com/ConsumerDataStandardsAustralia/standards/issues/333)
- [Decision Proposal 334 - Data Holder Dashboards](https://github.com/ConsumerDataStandardsAustralia/standards/issues/334)

## General Changes
|Change|Description|Link|
|------|-----------|----|
|Navigation links|**[Standards Staging #222](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/222):** Updated anchor links throughout the Standards to remove duplicates, and updated menu navigation code to prevent the page from jumping to the previous section when opening in a new window.|Most navigation links|
|Documentation correction|**[Standards Staging #312](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/312):** Minor typos in table headings|[Change Log](../../#change-log), [Archives](../../#archives)|
|Standards category ribbon|**[Standards Staging #334](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/334):** Added a red ribbon below the CDS logo on different Standards versions to visually distinguish them from the binding version|[Draft](../../#draft-standards), [Candidate](../../#candidate-standards), [Staging](https://consumerdatastandardsaustralia.github.io/standards-staging/), [Archived](../../#archives), and superseded endpoint version pages|
|CX navigation links|**[Standards Staging #338](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/338):** Included subheadings in Consumer Experience navigation for two sections|[Consumer Experience](../../#consumer-experience)|
|Common Field Types in arrays|**[Standards Staging #348](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/348):** Properties defined in response schemas with specific 'Common Field Types' values inside arrays should show the specific type instead of a generic type | Response Properties tables |
|Enum property type|**[Standards Staging #349](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/349):** Request parameters defined with enumerated values will now show the type as 'Enum' instead of 'string' | Request Parameters tables |
|Obligation Date Reference|Added a reference to the Obligation Date Schedule|[Future Dated Obligations](../../#future-dated-obligations)|
|Updated DSB Link|Updated the reference to informaiton on the DSB|[Introduction](../../#introduction)|
|Updated Example|Added redirect_uri to the Client authentication example in the non-normative examples|[Client Authentication](../../#client-authentication)|


## Introduction

|Change|Description|Link|
|------|-----------|----|


## High Level Standards

|Change|Description|Link|
|------|-----------|----|

## API End Points

|Change|Description|Link|
|------|-----------|----|
| Measure Unit in EnergyBillingDemandTransaction | **[Standards Maintenance #587](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/587):** Added new field `measureUnit` in EnergyBillingDemandTransaction. Incremented versions of `Get Billing for Account`, `Get Billing for Specific Account` and `Get Bulk Billing` endpoints | [Energy APIs](../../#energy-apis) |
| Change time field type | [**Standards Maintenance #613**](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/613): Change the type of time fields in energy plan data to ExternalRef referring to [ISO 8601 Times](https://en.wikipedia.org/wiki/ISO_8601#Times) specification. | [Energy APIs](../../#energy-apis) |
|Register API Names|Minor changes to the names of the Register APIs in the summary table|[Register APIs](../../#register-apis)|
|Term Deposit Account Types|Added additional additionalValue field explanations for term deposit account types|[Product Deposit Rate Types](../../#product-amp-account-components)|
|Corrected Field References|ified references to three incorrect field labels (tierMinimumValue, tierMaximumValue, tierUnitOfMeasure) in the property descriptions of BankingProductRateTierV3|[BankingProductRateTierV3](../../#cdr-banking-api_schemas_tocSbankingproductratetierv3)|
|Normative Ref Update|Add reference to RFC7636 to the entry for PKCE|[Normative References](../../#normative-references)|
|Number Clarification|Clarified that a number can be integer or decimal|[Common Field Types](../../#common-field-types)|

#product-amp-account-components
## Information Security Profile

|Change|Description|Link|
|------|-----------|----|

## Register Standards

|Change|Description|Link|
|------|-----------|----|
|Field Clarification|Changed authorization_signed_response_alg and authorization_encrypted_response_alg from optional to conditional to align to the field description|[Client Registration](../../#client-registration)|


## Consumer Experience

|Change|Description|Link|
|------|-----------|----|
|Dashboard Standards|**[Decision Proposal #334](https://github.com/ConsumerDataStandardsAustralia/standards/issues/334):** Added Dashboard Standards section to include detail for Data Holder Dashboards|[Dashboard Standards](../../#consumer-experience_dashboard-standards)|
|Business Consumer Provisions|**[Decision Proposal #333](https://github.com/ConsumerDataStandardsAustralia/standards/issues/333):** Updated requirements for Business consumer statements and Business consumer disclosure consents|[Consent Standards](../../#consent-standards)|
|New Guidelines Link|Updated the CX Guidelines link to the new site|[Consumer Experience](../../#consumer-experience)|


## Non-Functional Requirements

|Change|Description|Link|
|------|-----------|----|

## Additional Standards

|Change|Description|Link|
|------|-----------|----|
|Non-Bank Lending Candidate Standards|**[Decision Proposal #318](https://github.com/ConsumerDataStandardsAustralia/standards/issues/318):** The Draft Non-Bank Lending Standards have been made as Candidate Standards. No other changes were made between the Draft and Candidate version.|[Additional Standards](../../#additional-standards)|
|Version Delta|No changes were made to the [Candidate Standards for Banking Decision Proposal 306](../../includes/additional/candidates/dp306/banking-dp306.html) in this release, but the Version Delta notes in that Candidate have been retained from version 1.28.0 for reference. |[Additional Standards](../../#additional-standards)|

## Known Issues

TBC