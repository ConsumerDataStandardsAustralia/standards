---
title: Consumer Data Standards - v1.11.1 Release Notes

#language_tabs: # must be one of https://git.io/vQNgJ

toc_footers:
  - <a href='../../index.html'>Consumer Data Standards</a>

search: false
---

# V1.11.1 Release Notes
Release notes for version 1.11.1 of the [CDR Standards](../../index.html).

This release minor errata and documentation fixes.

## High Level Standards

|Change|Description|Link|
|------|-----------|----|
| Fixed website link | Fixed the link to the Consumer Data Standards website | N/A |

## API End Points

|Change|Description|Link|
|------|-----------|----|
| Base path terminology | Consistent use of terminology for holder path, base path, and resource path | N/A |
| Get Transactions For Account | Documentation fix to ensure quote marks render correctly in YAML | [Get Transactions For Account](../../#get-transactions-for-account)|
| Lending Products Categories | Fixed documentation where `TRADE FINANCE` is missing an underscore and it should be `TRADE_FINANCE` | [Product Categories](../../#product-categories) |

## Information Security Profile
|Change|Description|Link|
|------|-----------|----|
| Token Revocation | Updated token revocation endpoint documentation to remove legacy references to Data Recipient support for a Token Revocation endpoint. This has been replaced by the CDR Arrangement Revocation end point. | [Token Revocation](../../#token-revocation-end-point) |
| Normative references | Updated the FAPI normative references to correctly point to the Draft 06 version specified in the data standards | [Normative References](../../#normative-references)|

## Consumer Experience

|Change|Description|Link|
|------|-----------|----|
| Documentation fixes for Accessibility section | Removed duplicate sentence in "Content distinction" and fixed the WCAG hyperlink | [Accessibility](../../#accessibility-standards)|
