---
title: Consumer Data Standards - v1.4.0 Release Notes

#language_tabs: # must be one of https://git.io/vQNgJ

toc_footers:
  - <a href='../../index.html'>Consumer Data Standards</a>

search: false
---

# V1.4.0 Release Notes
Release notes for version 1.4.0 of the [CDR Standards](../../index.html).

## High Level Standards
|Change|Description|Link|
|------|-----------|----|
|Non-normative examples fix in extensibility section|Updated example text|[Extensibility](../../#extensibility)|
|Syntax error in non-normative example|Added missing comma's|[Payloads](../../#payload-conventions)|
|Content-Type header|Added Content-Type header non-normative example|[HTTP Headers](../../#http-headers)|
|Accept header|Added Accept header non-normative example|[HTTP Headers](../../#http-headers)|

## API End Points
|Change|Description|Link|
|------|-----------|----|
|Add new fee type to support at-cost fees|Update Product Fee Type enumeration ``feeType`` to include this additional enumerated value ``VARIABLE``|[BankingProductFee](../../index.html#tocSbankingproductfee)|
|Update to field descriptions in ``BankingProductFee`` | Descriptions updates to ``amount``, ``balanceRate``, ``accruedRate`` and  ``transactionRate``|[BankingProductFee](../../index.html#tocSbankingproductfee)|
|Fix description of sorting order for Get Products|The documentation incorrectly referenced ``updated-since`` which is the filter attribute. Its been updated to ``lastUpdated`` which is a product attribute| [Get Products](../../#get-products)|
|Missing schema markdown for getProducts & getProductDetail V2|Included missing schema markdown|[Get Product Detail V2](https://consumerdatastandardsaustralia.github.io/standards/#get-product-detail)|
|Increment BankingProductLendingRate to V2|BankingProductLendingRate was not versioned in its last update|[BankingProductLendingRateV2](/#tocSbankingproductlendingratev2)|
|Incorrect Get Product Detail V3 implementation date|Updated to February 2021|[Get Product Detail](../../##get-product-detail)|
|Fix description of sorting order for Get Products|The documentation incorrectly referenced ``updated-since`` which is the filter attribute. Its been updated to ``lastUpdated`` which is a product attribute| [Get Products](../../#get-products)|

## Information Security Profile
|Change|Description|Link|
|------|-----------|----|
|Fix broken TDIF links|Updated to latest TDIF links|[Levels of Assurance](../../#levels-of-assurance-loas)|
|Informative References|Add RFC7231 to the Informative References section |[Informative References](../../#informative-references)|
|Update OpenID Connect Metadata description|Update to description for ``id_token_encryption_alg_values_supported``|[End Points](../../#end-points)|
|Update the OpenID Connect Metadata non-normative example|Updated values of ``id_token_encryption_alg_values_supported``|[End Points](../../#end-points)|
|Corrected "aud" claim in client authentication to Data Holder|Changed description to the Token Endpoint URL|[End Points](../../#end-points)|
|Introspection Endpoint|Updated Token Introspection documentation to include CDR Arrangement ID claim and non-normative example|[End Points](../../#end-points)|
|Error in statement on CDR Arrangement ID|CDR Arrangement ID statement incorrectly mentions the ID Token|[Identifiers and subject Types](../../#identifiers-and-subject-types)|
|Update to PAR non-normative example|Corrected client_id|[Identifiers and subject Types](../../#identifiers-and-subject-types)|
|Add authorisation to PAR non-normative example|Updated example to include authorisation step|[Identifiers and subject Types](../../#identifiers-and-subject-types)|
|Update to Token Introspection non-normative example|The request is incorrectly represented as a token request.|[Identifiers and subject Types](../../#identifiers-and-subject-types)|
|Update PAR Request non-normative example|Request object should contain standard claims such as sharing_duration as well as the new cdr_arrangement_id|[End Points](../../#end-points)|

## Consumer Experience
|Change|Description|Link|
|------|-----------|----|
|Permitting DHs to show unavailable joint accounts in authorisation flow|v1.3.0 of the CX Standards reflected ACCC’s position that DHs were not permitted to show unavailable joint accounts in the authorisation flow. The ACCC have revised this position to allow DHs to show unavailable joint accounts in the authorisation flow. <br><br>This revised position is reflected in V1.4.0 as optional for November 2020. This change (1) removes the statement on data holders not being permitted to show unavailable joint accounts and (2) includes a clarification on how unavailable accounts are to be interpreted.|[CX Standards](/pdfs/CX-Standards-v1.4.0.pdf) p. 16<br>[CX Guidelines](/pdfs/CX-Guidelines-v1.4.0.pdf) p. 25, 78-80|
