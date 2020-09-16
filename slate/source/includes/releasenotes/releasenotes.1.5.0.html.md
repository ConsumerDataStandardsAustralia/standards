---
title: Consumer Data Standards - v1.5.0 Release Notes

#language_tabs: # must be one of https://git.io/vQNgJ

toc_footers:
  - <a href='../../index.html'>Consumer Data Standards</a>

search: false
---

# V1.5.0 Release Notes
Release notes for version 1.5.0 of the [CDR Standards](../../index.html).

## High Level Standards
|Change|Description|Link|
|------|-----------|----|
|Update NFR description|Update to the language for NFR thresholds to clarify how status and outage end points are addressed|[Non Functional Requirements](../../#performance-requirements)|
|Future Date Obligations|Future Dated Obligations for DP135 November consent changes and Maintenance Iteration 4 breaking changes|[Future Date Obligations](../../#future-dated-obligations)|
|Minor errata for 1.4.0|Fixed links and typos in 1.4.0 and correct use of common field types |   |
|Payload Conventions|Added section on Arrays to clarify how empty and single valued arrays should be treated | [Array conventions](../../#array-conventions) |
|NFR Performance Thresholds| Clarified end point performance tiers and removed ambiguous overlaps | [Performance Requirements](../../#performance-requirements) |

## API End Points
|Change|Description|Link|
|------|-----------|----|
|Update to CRN description|Update to the documentation to be clear on the expectations for masking any data that the data holder considers sensitive|[BankingBillerPayee](../../#tocSbankingbillerpayee)|
|BankingPayee nickname|Updated description of nickname|[BankingPayee](../../#tocSbankingpayee)|
|BankingBillerPayee update|Added crnType to BankingBillerPayee|[BankingBillerPayee](../../#tocSbankingbillerpayee)|
|Extend rejection counts for unauthenticated APIs|Introduced GetMetrics V2 and RejectionMetrics V2|[Get Metrics](../../#get-metrics)|
|Correct isPartial field type | Correctly references CDS Boolean common field type | [DiscoveryOutage](../../#tocSdiscoveryoutage)|
|Correct minimumValue and maximumValue field type | Correctly references CDS Number common field type | [BankingProductRateTierV3](../../#tocSbankingproductratetierv3) |
|Update to amount description|Update to the documentation for amount in BankingProductDiscount to remove grammatical mistakes| [BankingProductDiscount](../../#tocSbankingproductdiscount) |
|Update to BankingProductDiscountEligibility|Update to correctly define additionalInfo and the eligibility array to be conditional based on applicable constraints|[BankingProductDiscountEligibility](../../#tocSbankingproductdiscounteligibility)
|Update to Product Discount Type FEE_CAP description|Update to FEE_CAP description to correctly reference applicable rates|[Product Discount Types](../../#tocSproductdiscounttypedoc)
|Added typed version support for ANZSIC and ANZSCO codes|Added version support for industryCode and occupationCode to allow data holders to reference the applicable document versions for the codes they hold.  | [Get Customer](../../#get-customer) |
|Added Get Metrics v2 |Based on breaking changes, introduced v2 for Get Metrics end point |  [Get Metrics v2](../../#get-metrics) |

## Information Security Profile
|Change|Description|Link|
|------|-----------|----|
|Mandatory Claims for ID Token|Changes related to alignment with normative references of ID Token|[Tokens](../../#tokens)|
|Required use of Authentication Time claim|Updated description in the standards to remove the requirement for auth_time unless it is requested as an essential claim|[Scopes and Claims](../../#scopes-and-claims)|
|Updates to November consent changes|Updates the sections covering Concurrent Consent, PAR client authentication, CDR Arrangement Revocation and CDR Arrangement ID documenation based on [DP135](https://github.com/ConsumerDataStandardsAustralia/standards/files/5159401/Decision.135.-.November.2020.Consent.Obligations.pdf)|[Scopes and Claims](../../#scopes-and-claims)|
|Update token introspection endpoint|Updated token introspection text to align with normative reference and added scope claim|[Endpoints](../../#end-points)|

## Consumer Experience

No Changes
