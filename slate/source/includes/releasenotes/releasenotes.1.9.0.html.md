---
title: Consumer Data Standards - v1.9.0 Release Notes

#language_tabs: # must be one of https://git.io/vQNgJ

toc_footers:
  - <a href='../../index.html'>Consumer Data Standards</a>

search: false
---

# V1.9.0 Release Notes
Release notes for version 1.9.0 of the [CDR Standards](../../index.html).

This release pertains to the changes approved by the Data Standards Chair in [Decision 161](https://github.com/ConsumerDataStandardsAustralia/standards/issues/161).

## High Level Standards

|Change|Description|Link|
|------|-----------|----|
| Updated documentation layout | Improved layout for documentation pages that do not require code samples such as release notes | N/A |
| Documentation fix for Request Headers | Newlines and wildcard symbols were not correctly formatted. This has been corrected for the Accept request header description | [HTTP Headers](../../#http-headers)

## API End Points

|Change|Description|Link|
|------|-----------|----|
| Added retirement date for the Get Metrics v1 endpoint | Retirement date of October 31st 2021 added for the Get Metics v1 endpoint | [Get Metrics v1](../obsolete/get-metrics-v1.html#get-metrics-v1) |
| Added retirement date for PRD v2 endpoints | Retirement date of May 31st 2021 added for PRD v2 endpoints | [Get Products v2](../obsolete/get-products-v2.html#get-products-v2) and [Get Product Details v2](../obsolete/get-product-detail-v2.html#get-product-detail-v2) |
| Rejection Metrics | Fixed documentation error with the optionality of the high-level response objects for the Metrics API payload response. | [RejectionMetricsV2](../../#tocSrejectionmetricsv2)|
| Draft Energy Standards Update | Updated the draft energy standards to accommodate the feedback from DP 173 | [Draft Energy Standards](../../draft/energy-draft.html) |

## Information Security Profile
|Change|Description|Link|
|------|-----------|----|
| Client Authentication | Changed the Client Authentication section of the standards to streamline it and included the optional Data Holder support of private_key_jwt client authentication of the CDR Register. | [Client Authentication](../../#client-authentication) |
| Audience claim for Data Recipients calling Data Holders | Previously the documentation included pre-March 31st audience claim requirements. These have been removed and the post-March 2021 requirements retained. | [Client Authentication](../../#client-authentication)|

## Consumer Experience

No change
