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
| Data Quality NFRs | Updated the data quality definitions regarding consumer data to align to upstream CDR Privacy Safeguards based on OAIC feedback | [Data Quality](../../#data-quality) |
| Navigation | Added schema list menu navigation and accordion to improve scrolling and usability | N/A |

## API End Points

|Change|Description|Link|
|------|-----------|----|
| All authenticated resource endpoints | Updated the schema to indicate the x-fapi-auth-date header is mandatory for authenticated endpoints | N/A |
| Get Account Detail v2 | Changes to accomodate lending products without an instalment date or repayment frequency | [Get Account Details](../../#get-account-detail)
| Register APIs | Corrected GetDataHolderBrands `registerUType` and `jwksEndpoint` schema definitions to clarify their usage in DH to ADR client authentication | [Register APIs](../../#register-apis)|
| Register APIs | Corrected Register Discovery Document definition defect renaming `request_object_signing_alg_values_supported` to `token_endpoint_auth_signing_alg_values_supported` | [Register APIs](../../#register-apis)|
| Energy schema | Fixed a schema bug which included an extraneous comma that caused OAS3 validation issues | [Energy Schema](../../#energy-apis) |
| Additional document URIs for Banking PRD | Support for secondary additional information URIs for banking product references | [Get Products](../../#get-products) |
| Binding Energy standards | Updated energy standards to remove non-binding notices and made changes to reflect "Shared Responsibility Requests" in line with the Rules where previously they were referred to as "Secondary Responsibility Requests" | [Energy Schema](../../#energy-apis) |
| Energy schema | Made EnergyPlanTariffPeriod.dailySupplyCharges optional to cater for C&I customers| [Energy Schema](../../#energy-apis) |
| Energy schema | Updated EnergyPlanSolarFeedInTariff.tariffUType with correct ENUM values | [Energy Schema](../../#energy-apis) |
| Energy schema | Updated Energy controlledLoad attribute description and Energy bulk balance endpoint menu text for clarity and consistency | [Energy Schema](../../#energy-apis) |
| Extended Banking Product feature support | Changes to accomodate additional enumerated product features | [Get Account Details](../../#get-account-detail), and <br/>[Get Product Details](../../#get-product-detail) |
| Digital Wallet Payees | Changes to accomodate digital wallet payees | [Get Payees](../../#get-payees), and<br/>[Get Payee Detail](../../#get-payee-detail) |
| Get Customer Detail v2 | Changes to accomodate customer detail without a valid physical address for individual and non-individual consumers | [Get Customer Detail](../../#get-customer-detail)

## Information Security Profile

|Change|Description|Link|
|------|-----------|----|
| Self-Signed JWT Audience | An immediate change to re-instate interoperability for Data Holders calling the Data Recipient's CDR Arrangement Revocation endpoint to revoke consent has been introduced. A phasing out of the multiple audience value support in favour of only the "resource path" for the end point being accessed is also introduced. | [Self-Signed JWT Client Authentication](../../#self-signed-jwt-client-authentication) |
| Data Recipient CDR Arrangement Endpoint | Armoured the Data Recipient hosted CDR arrangement endpoint by requiring the Data Holder to present the `cdr_arrangement_id` in a signed JWT  |  [CDR Arrangement Revocation End Point](../../#cdr-arrangement-revocation-end-point)|
| OIDC Profile Scope | Added supporting requirements and standards for presenting the OIDC profile scope and individual claims | [Scopes and Claims](../../#scopes-and-claims) |
| Registration Validation | Added clarification that registration validation and responses must adhere to NFRs | [Registration Validation](../../#client_registration) |
| Data Holder Responsibilities| Added requirements for CDR Register and Data Holders to cater for missing statuses in Register API responses | [Data Holder Responsibilities](../../#data-holder-responsibilities)|
| Certificate Mangement | Fixed broken links to statically hosted certificate trust chain files | [Certificate Management](../../#certificate-management)|
| Registration Validation | Provided clarification on registration request validation JWKS endpoint usage | [Registration Validation](../../#registration-validation)|
| Authorization non-normative example | Updated the non-normative example to show the request of the `sharing_expires_at` and `refresh_token_expires_at` claims | [Authorisation End Point](../../#authorisation-end-point) |

## Consumer Experience

|Change|Description|Link|
|------|-----------|----|
| OIDC Profile Scope | Added CX data language standards for presenting the OIDC profile scope and individual claims | [Profile scope CX](../../#profile-scope) |
| Joint Account CX Standards | Added the CX standards arising from Decision 162 in support of joint accounts and DOMS | [](../../#)|
