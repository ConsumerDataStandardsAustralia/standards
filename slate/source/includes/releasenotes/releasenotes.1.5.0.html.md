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
|Future Date Obligations|Future Dated Obligations for DP135 November consent changes|[Future Date Obligations](../../#future-dated-obligations)|
|Minor errata for 1.4.0|Fixed links and typos in 1.4.0|   |

## API End Points
|Change|Description|Link|
|------|-----------|----|
|Update to CRN description|Update to the documentation to be clear on the expectations for masking any data that the data holder considers sensitive|[BankingBillerPayee](../../#tocSbankingbillerpayee)|
|BankingPayee nickname|Updated description of nickname|[BankingPayee](../../#tocSbankingpayee)|
|BankingBillerPayee update|Added crnType to  BankingBillerPayee|[BankingBillerPayee](../../#tocSbankingbillerpayee)|
|Extend rejection counts for unauthenticated APIs|Introduced GetMetrics V2 and RejectionMetrics V2|[Get Metrics](../../#get-metrics)|


## Information Security Profile
|Change|Description|Link|
|------|-----------|----|
|Mandatory Claims for ID Token|Changes related to alignment with normative references of ID Token|[Tokens](../../#tokens)|
|Required use of Authentication Time claim|Updated description in the standards to remove the requirement for auth_time unless it is requested as an essential claim|[Scopes and Claims](../../#scopes-and-claims)|
|Updates to CDR Arrangement ID|Updates the CDR Arrangement ID documenation based on [DP135](https://github.com/ConsumerDataStandardsAustralia/standards/files/5038628/Decision.Proposal.135.-.November.2020.Consent.Obligations-v2.pdf)|[Scopes and Claims](../../#scopes-and-claims)|
|Update token introspection endpoint|Updated token introspection text to align with normative reference and added scope claim|[Endpoints](../../#end-points)|

## Consumer Experience

No Changes
