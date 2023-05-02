---
title: Consumer Data Standards - v1.24.0 Release Notes

#language_tabs: # must be one of https://git.io/vQNgJ

toc_footers:
  - <a href='../../index.html'>Consumer Data Standards</a>

search: false
---

# V1.24.0 Release Notes
Release notes for version v1.24.0 of the [CDR Standards](../../index.html).

## Changes Made
### Change Requests

This release addresses the following minor defects raised on [Standards Staging](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues):

- XXXX

This release addresses the following change requests raised on [Standards Maintenance](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues):

- [Issue 535: Standard appears to redefine requirements for private_key_jwt authentication](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/535)

### Decision Proposals

This release addresses the following Decision Proposals published on [Standards](https://github.com/ConsumerDataStandardsAustralia/standards/issues):

- XXXX

## Introduction

No Change

## High Level Standards

No Change


## API End Points

No Change

## Information Security Profile

|Change|Description|Link|
|------|-----------|----|
|RFC6749 conformant Private Key JWT Client Authentication | Change to support **[RFC7521]** such that, until November 13th 2023, clients authenticating using Private Key JWT are _recommended_ to provide the `client_id`, but no longer required. From November 13th 2023, it is then _optional_ to provide the `client_id`. This applies to ADRs and the CDR Register authenticating with Data Holders and ADRs authenticating with the CDR Register. During the RECOMMENDED phase in period, Data Holders and the CDR Register may reject clients that do not provide the `client_id`. ADRs may re-attempt client authentication by providing the `client_id`. During this phase in period, Data Holders and the CDR Register may stop requiring the `client_id`. If the client provides the `client_id`, the Data Holder/CDR Register must validate that its value is the same as the `iss` and `sub` claims in accordance with **[RFC7521](https://datatracker.ietf.org/doc/html/rfc7521#section-4.2)**| [Private Key JWT Client Authentication](../../#client-authentication) |

## Consumer Experience

No Change

## Known Issues

No Change
