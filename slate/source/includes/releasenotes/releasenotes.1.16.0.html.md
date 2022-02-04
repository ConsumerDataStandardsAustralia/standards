---
title: Consumer Data Standards - v1.16.0 Release Notes

#language_tabs: # must be one of https://git.io/vQNgJ

toc_footers:
  - <a href='../../index.html'>Consumer Data Standards</a>

search: false
---

# V1.16.0 Release Notes
Release notes for version v1.16.0 of the [CDR Standards](../../index.html).

This release minor errata and documentation fixes.

## High Level Standards

|Change|Description|Link|
|------|-----------|----|
| Introduction | Corrected link for RFC2119 | [Introduction](../../#introduction) |
| Energy endpoint versioning | Updated description of energy bulk balance API in endpoint version schedule from "Get Bulk Balances (Energy)" to "Get Bulk Balances for Energy" to align with standards | [Endpoint Versioning Schedule](../endpoint-version-schedule/)


## API End Points

|Change|Description|Link|
|------|-----------|----|
| Register APIs | Corrected GetDataHolderBrands `RegisterDataHolderAuth` and `jwksEndpoint` schema definitions to clarify their usage in DH to ADR client authentication | [Register APIs](../../#register-apis)|
| Register APIs | Corrected Register OpenId Provider Config Document definition defect renaming `request_object_signing_alg_values_supported` to `token_endpoint_auth_signing_alg_values_supported` | [Register APIs](../../#register-apis)|
| Banking APIs | Corrected GetProducts response reference from `ResponseBankingProductList` to `ResponseBankingProductListV2` | [Banking APIs](../../#banking-apis)|
| Energy schema | Change type of page and page-size in Energy APIs to PositiveInteger | [Energy Schema](../../#energy-apis) |


## Information Security Profile

|Change|Description|Link|
|------|-----------|----|
| Client Authentication | Removed duplicate section: **Data Holders calling Data Recipients** | [Client Authentication](../../#client-authentication)|
| Authentication Flows | Clarified requirements for Data Recipient Software Products S256 code challenge method | [Authentication Flows](../../#authentication-flows) |
| Normative References | Updated the normative reference for RFC9126 to add the link to the associated standard |  [Normative References](../../#normative-references) |


## Consumer Experience

|Change|Description|Link|
|------|-----------|----|
