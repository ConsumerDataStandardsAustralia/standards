---
title: Consumer Data Standards - v1.2.0 Release Notes

#language_tabs: # must be one of https://git.io/vQNgJ

toc_footers:
  - <a href='../../index.html'>Consumer Data Standards</a>

search: false
---

# V1.2.0 Release Notes
Release notes for version 1.2.0 of the [CDR Standards](../../index.html).

This version of the standards is considered to be the binding baseline for the Phase 2 implementation of the Consumer Data Right regime currently targeted for July 2020.

## High Level Standards
|Change|Description|Link|
|------|-----------|----|
|Binding Statement|Modified the introduction section to include a statement of binding that is aligned to the legal framework for the CDR regime|[Introduction](../../index.html#introduction)|
|Clarification of DateTimeString|Change to the description of the DateTimeString type to clarify the baselining of time to UTC.  This is a clarification only and does not materially change the standards|[Common Types Section](../../index.html#common-field-types)|

## API End Points
No Change


## Information Security Profile
|Change|Description|Link|
|------|-----------|----|
|Concurrent Consent Decision|Incorporated the changes articulated in [Decision 85](https://github.com/ConsumerDataStandardsAustralia/standards/issues/85) regarding concurrent consent|[Consent Section](../../index.html#consent)|
|Client Registration Discovery|Added the requirement that the client registration end point be included in the OIDC discovery response|[Security End Points Section](../../index.html#end-points)|
|Security TLS Certificate|The constraint that security end points requiring TLS only must use a certificate obtained from the CDR CA has been removed|[Security End Points Section](../../index.html#end-points)

## Consumer Experience
|Change|Description|Link|
|------|-----------|----|
