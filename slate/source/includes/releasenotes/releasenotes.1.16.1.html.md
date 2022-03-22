---
title: Consumer Data Standards - v1.16.1 Release Notes

#language_tabs: # must be one of https://git.io/vQNgJ

toc_footers:
  - <a href='../../index.html'>Consumer Data Standards</a>

search: false
---

# V1.16.1 Release Notes
Release notes for version v1.16.1 of the [CDR Standards](../../index.html).

This release contains minor errata and documentation fixes as well as upgrades of swagger files to OpenAPI specification v3

## High Level Standards

|Change|Description|Link|
|------|-----------|----|
| Link to Endpoint Versioning | Added a link to the Endpoint Versioning Schedule in the High Level Standards's Versioning section | [Versioning](../../#versioning) |
| Normative and Informative Tooltips | Added tooltips for all normative and informative references to assist in quick translation of references to the upstream document reference | [Normative References](../../##normative-references) |
| Moved Normative and Informative references | Moved normative and informative references out of the Security standards section into the Introduction section to cover all standards | [Normative References](../../##normative-references) |

## API End Points

|Change|Description|Link|
|------|-----------|----|
| isTokenised type | The `isTokenised` field has been corrected to be a boolean type | [Energy APIs](../../#energy-apis)|
| positiveInteger types | Fields of common type `positiveInteger` have been corrected to be of 'integer' type in OAS | [Energy APIs](../../#energy-apis)|
| Optionality of Meta Objects | The optional/mandatory status of meta objects has been aligned with standard practice for CDR | [Energy APIs](../../#energy-apis)|
| x-fapi-iteraction-id | `x-fapi-iteraction-id` has been removed from the public Tariff endpoints | [Energy APIs](../../#energy-apis)|
| Enum Array Bug | Correct the bug where arrays of enums were not being listed with their enumeration values | [Energy APIs](../../#energy-apis)|
| controlledLoad flag | Corrected the description of the controlledLoad flag to match previous agreement with AEMO (applies to SDH endpoints also) | [Energy APIs](../../#energy-apis)|

## Information Security Profile

No changes

## Consumer Experience

|Change|Description|Link|
|------|-----------|----|
| BPAY capitalisation | Corrected the capitalisation of BPAY (from BPay) | [Banking Language](../../#banking-language)|
