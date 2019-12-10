---
title: Consumer Data Standards - v1.1.0 Release Notes

#language_tabs: # must be one of https://git.io/vQNgJ

toc_footers:
  - <a href='../../index.html'>Consumer Data Standards</a>

search: false
---

# V1.1.0 Release Notes
Release notes for version 1.1.0 of the [CDR Standards](../../index.html).

## High Level Standards
|Change|Description|Link|
|------|-----------|----|
|`Content-Type` header optionality|Clarified that the Content-Type header is only mandatory for PUT and POST calls|[HTTP Headers Section](../../index.html#http-headers)
|`x-fapi-interaction-id` description clarification|A clarification of the description recommended by the CDR Engineering team|[HTTP Headers Section](../../index.html#http-headers)
|`x-cds-subject` header removed| This header has been removed from the standards based on community consultation|[HTTP Headers Section](../../index.html#http-headers)
|Modification of `x-cds-User-Agent` header|The `x-cds-User-Agent` header has been renamed to `x-cds-client-headers` and clarified to exclude specific types of headers|[HTTP Headers Section](../../index.html#http-headers)
|Bug fix for rate type| In a previous decision the limitation of the rate type to plus or minus 100% was agreed to be removed.  This has not been fixed|[Common Field Types Section](../../index.html#common-field-types)

## API End Points
|Change|Description|Link|
|------|-----------|----|
|Clarified description of `productName`|Clarified that the `productName` field in the account structure is set by the data holder not the account holder|[BankingAccount Section](../../index.html#tocSbankingaccount)
|`accountName` optional for domestic payee|For some Banks the account name field is not captured for domestic payees so this field has been made optional|[BankingDomesticPayeeAccount Section](../../index.html#tocSbankingdomesticpayeeaccount)
|Aggregated transaction clarification|The handling of the sharing of data related to aggregated transactions has been added to the description of the transaction history end point|[Get Transactions For Account Section](../../index.html#get-transactions-for-account)
|Term deposit maturity instructions as array|The termDeposit field in the account detail structure has been converted into an array|[BankingAccountDetail Section](../../index.html#tocSbankingaccountdetail)
|International payees with domestic accounts clarification| Description for how to represent international payees that are represented as a domestic account for payment purposes|[Get Payee Detail Section](../../index.html#get-payee-detail)
|Corrected description for `amount` field| The `amount` field in scheduled payments had an incorrect description text which has been fixed|[BankingScheduledPaymentSet Section](../../index.html#tocSbankingscheduledpaymentset)
|Updates to scheduled payments| Series of amendments to the scheduled payments structure for lastWeekDay|[LastWeekday Section](../../index.html#tocSbankingscheduledpaymentrecurrencelastweekday)
|Clarification of ISO 8601 usage| Clarification that the recurrence syntax in ISO 8601 will not be used|Various
|Card art in product end points| Version 2 of Get Products and Get Product Detail has been added to allow for the inclusion of card art fields|[Banking APIs Section](../../index.html#consumer-data-standards-banking-apis)

## Information Security Profile
|Change|Description|Link|
|------|-----------|----|
|Normative reference versions|Added specific dates or versions to the normative reference table to avoid ambiguity|[Normative References](../../index.html#normative-references)
|Removed references to Vectors Of Trust|This change was recommended via the maintenance iteration to remove ambiguity from the standards|[InfoSec End Points Section](../../index.html#end-points) & [Scopes and Claims Section](../../index.html#scopes-and-claims)
|Clarified id_token non-normative sample|Non-normative id_token has been modified to include the `refresh_token_expires_at` and `sharing_expires_at` claims|[Scopes and Claims Section](../../index.html#scopes-and-claims)
|Added CORS support for public end points| Added a CORS section allowing for CORS to be enabled for Get Status, Get Outages, Get Products and Get Product Detail end points|[CORS Section](../../index.html#cors)
|Removal of MTLS for specific end points| Removal of the MTLS requirements for<br/><ul><li>The revocation end point hosted by Data Recipients</li><li>The JWKS end point hosted by Data Recipients</li><li>The JWKS end point hosted by Data Holders</li><li>The OIDC discovery end point hosted by Data Holders</li></ul>|[InfoSec End Points Section](../../index.html#end-points)

## Consumer Experience
No Change
