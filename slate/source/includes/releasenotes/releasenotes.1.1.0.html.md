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

## API End Points
|Change|Description|Link|
|------|-----------|----|
|Clarified description of `productName`|Clarified that the `productName` field in the account structure is set by the data holder not the account holder|[BankingAccount Section](../../index.html#schemabankingaccount)
|`accountName` optional for domestic payee|For some Banks the account name field is not captured for domestic payees so this field has been made optional|[BankingDomesticPayeeAccount Section](../../index.html##tocSbankingdomesticpayeeaccount)

## Information Security Profile
|Change|Description|Link|
|------|-----------|----|
|Normative reference versions|Added specific dates or versions to the normative reference table to avoid ambiguity|[Normative References](../../index.html#normative-references)
|Removed references to Vectors Of Trust|This change was recommended via the maintenance iteration to remove ambiguity from the standards|[InfoSec End Points Section](../../index.html#end-points) & [Scopes and Claims Section](../../index.html#scopes-and-claims)

## Consumer Experience
No Change
