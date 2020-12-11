---
title: Consumer Data Standards - v1.6.0 Release Notes

#language_tabs: # must be one of https://git.io/vQNgJ

toc_footers:
  - <a href='../../index.html'>Consumer Data Standards</a>

search: false
---

# V1.6.0 Release Notes
Release notes for version 1.6.0 of the [CDR Standards](../../index.html).

## High Level Standards

|Change|Description|Link|
|------|-----------|----|
| Remove duplicate entries from the Future Dated Obligations table | The future dated obligations included a duplication of Get Product V2 and Get Product Detail V1 obligations. The redundant entries have been removed | [Future Dated Obligations](../../#future-dated-obligations) |

## API End Points

No Changes

## Information Security Profile
|Change|Description|Link|
|------|-----------|----|
| Updated requirements for setting and validating the "audience" claim in Client Authentication for Data Recipients calling Data Holders | Client Authentication has been updated to align to upstream standards. Data Recipients continue to pass the URL of the endpoint being invoked until the end of March. At which time, Data Holders must validate that the audience claim is either the issuer identifier, Token endpoint URL or the URL of the endpoint being invoked. | [Client Authentication](../../#client-authentication) |

## Consumer Experience

No Changes
