---
title: Consumer Data Standards - v1.3.1 Release Notes

#language_tabs: # must be one of https://git.io/vQNgJ

toc_footers:
  - <a href='../../index.html'>Consumer Data Standards</a>

search: false
---

# V1.3.1 Release Notes
Release notes for version 1.3.1 of the [CDR Standards](../../index.html).

## High Level Standards
|Change|Description|Link|
|------|-----------|----|
|Removal of aside comment|In the availability section there was a redundant comment indicating the notification method for outages is pending.  This has been removed|[Availability Requirements](../../index.html#availability-requirements)|
|Error response clarification|The requirement that a 406 response must be provided if x-v and x-min-v are not present was written before the must/should language was used with specific meaning.  This is not clarified as a MUST (as was intended) rather than a SHOULD.  This change has also been applied where the version headers are documented for end points.|[HTTP Headers](../../index.html#http-headers)|
|Example correction|Corrected the non-normative example for the base URI to remove the resource component|[Versioning](../../index.html#versioning)|

## API End Points
|Change|Description|Link|
|------|-----------|----|
|imageUri clarification|Add clarification to the imageUri field indicating that url-encoded data is valid for this field|[BankingProductV3 Model](../../index.html#tocSbankingproductv3)|
|MIN_LIMIT, MAX_LIMIT descriptions|Align the language used to describe the MIN_LIMIT and MAX_LIMIT fields to remove inconsistency and ambiguity|[Product & Account Components](../../index.html#product-amp-account-components)|
|Model versioning|Versioning of schema models to accommodate v3 of the PRD end points|Various|
|PRD v2 obsolescence date|Removed the obseloscence date for v2 PRD end points.  These were included erroneously|[Get Products v2](../../includes/obsolete/get-products-v2.html),<br/>[Get Product Detail v2](../../includes/obsolete/get-product-detail-v2.html-v2.html)|
|Invalid account ID|Clarification that a 422 error in response to an invalid Account ID is required even if only one ID in a group is invalid|POST APIs that query specific accounts|

## Information Security Profile
|Change|Description|Link|
|------|-----------|----|
|Markdown fix|Some of the markdown for the Arrangement end point was not formatted correctly.  This has been fixed.|[Security End Points](../../index.html#end-points)|
|Revocation end point for ADRs|The documentation covering the need for ADR's to host a revocation end point until November 2020 was inadvertently removed.  Revocation end point documentation has been modified to match the relevant decision proposals|[Security End Points](../../index.html#end-points)|
|Token example correction|Change the non-normative example in the Tokens section to correctly use numeric date values instead of strings|[Token](../../index.html#tokens)|
|Client auth for security end points|Clarify for the revocation and arrangement end points that client assertion is used to verify the identity of Data Recipients and bearer tokens are used to verify the identity of Data Holders|[Security End Points](../../index.html#end-points)|
|OIDC Discovery update|Corrected the non-normative example for ODIC Discovery end point to correctly specify the `tls_client_certificate_bound_access_tokens` field|[Security End Points](../../index.html#end-points)|

## Consumer Experience
No Change
