---
title: Consumer Data Standards - v1.15.0 Release Notes

#language_tabs: # must be one of https://git.io/vQNgJ

toc_footers:
  - <a href='../../index.html'>Consumer Data Standards</a>

search: false
---

# V1.15.0 Release Notes
Release notes for version v1.15.0 of the [CDR Standards](../../index.html).

This release minor errata and documentation fixes.

## High Level Standards

|Change|Description|Link|
|------|-----------|----|
| Navigation | Added schema list menu navigation and accordion to improve scrolling and usability | N/A |

## API End Points

|Change|Description|Link|
|------|-----------|----|
| Get Account Detail v2 | Changes to accomodate lending products without an instalment date or repayment frequency | [Get Account Details](../../#get-account-detail)
| Register APIs | Corrected GetDataHolderBrands `registerUType` and `jwksEndpoint` schema definitions to clarify their usage in DH to ADR client authentication | [Register APIs](../../#register-apis)|
| Register APIs | Corrected Register Discovery Document definition defect renaming `request_object_signing_alg_values_supported` to `token_endpoint_auth_signing_alg_values_supported` | [Register APIs](../../#register-apis)|
| Energy schema | Fixed a schema bug which included an extraneous comma that caused OAS3 validation issues | [Energy Schema](../../#energy-apis) |
| Extended Banking Product feature support | Changes to accomodate additional enumerated product features | [Get Account Details](../../#get-account-detail), and <br/>[Get Product Details](../../#get-product-detail) |
| Digital Wallet Payees | Changes to accomodate digital wallet payees | [Get Payees](../../#get-payees), and<br/>[Get Payee Detail](../../#get-payee-detail) |
| Get Customer Detail v2 | Changes to accomodate customer detail without a valid physical address for individual and non-individual consumers | [Get Customer Detail](../../#get-customer-detail)

## Information Security Profile

|Change|Description|Link|
|------|-----------|----|
| Registration Validation | Added clarification that registration validation and responses must adhere to NFRs | [Registration Validation](../../#client_registration) |
| Data Holder Responsibilities| Added requirements for CDR Register and Data Holders to cater for missing statuses in Register API responses | [Data Holder Responsibilities](../../#data-holder-responsibilities)|
| Certificate Mangement | Fixed broken links to statically hosted certificate trust chain files | [Certificate Management](../../#certificate-management)|
| Registration Validation | Provided clarification on registration request validation JWKS endpoint usage | [Registration Validation](../../#registration-validation)|
| Authorization non-normative example | Updated the non-normative example to show the request of the `sharing_expires_at` and `refresh_token_expires_at` claims | [Authorisation End Point](../../#authorisation-end-point) |

## Consumer Experience

|Change|Description|Link|
|------|-----------|----|
