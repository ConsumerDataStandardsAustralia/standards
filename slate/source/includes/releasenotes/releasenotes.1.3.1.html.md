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

## API End Points
|Change|Description|Link|
|------|-----------|----|

## Information Security Profile
|Change|Description|Link|
|------|-----------|----|
|Markdown fix|Some of the markdown for the Arrangement end point was not formatted correctly.  This has been fixed.|[Security End Points](../../index.html#end-points)|
|Revocation end point for ADRs|The documentation covering the need for ADR's to host a revocation end point until November 2020 was inadvertently removed.  Revocation end point documentation has been modified to match the relevant decision proposals|[Security End Points](../../index.html#end-points)|

## Consumer Experience
|Change|Description|Link|
|------|-----------|----|
