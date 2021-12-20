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
| Register APIs | Corrected Register Discovery Document definition defect renaming `request_object_signing_alg_values_supported` to `token_endpoint_auth_signing_alg_values_supported` | [Register APIs](../../#register-apis)|
| Energy schema | Fixed a schema bug which included an extraneous comma that caused OAS3 validation issues | [Energy Schema](../../#energy-apis) |

## Information Security Profile

|Change|Description|Link|
|------|-----------|----|
| Authorization non-normative example | Updated the non-normative example to show the request of the `sharing_expires_at` and `refresh_token_expires_at` claims | [Authorisation End Point](../../#authorisation-end-point) |

## Consumer Experience

|Change|Description|Link|
|------|-----------|----|
