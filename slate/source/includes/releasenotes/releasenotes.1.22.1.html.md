---
title: Consumer Data Standards - v1.22.1 Release Notes

#language_tabs: # must be one of https://git.io/vQNgJ

toc_footers:
  - <a href='../../index.html'>Consumer Data Standards</a>

search: false
---

# V1.22.1 Release Notes
Release notes for version v1.22.1 of the [CDR Standards](../../index.html).

## Changes Made
### Change Requests

This release addresses the following minor defects raised on [Standards Staging](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues):

- Issue [257](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/257): Notice for the Binding Data Standard
- Issue [255](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/255): Maintenance of obligation date tables
- Issue [254](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/254): Get Energy Account Detail V2 - Fix binding date
- Issue [245](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/254): Get Energy APIs: meta object should not be mandatory
- Issue [227](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/227): Spelling of "organisation" in description of EnergyServicePointDetail.party
- Issue [226](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/226): Standardise use of ResponseErrorListV2 for Energy APIs
- Issue [193](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/193): Incorrect link to Endpoint Version Schedule in Standards
- Issue [152](https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/152): Get Meta objects to be optional in energy requests


### Decision Proposals

This release is a patch release and does not include any changes arising from a decision of the Chair

## Introduction

|Change|Description|Link|
|------|-----------|----|
| Binding Statement | Added binding statement to the Introduction section | [Introduction](../../#introduction) |
| Align Obligation Dates | Corrections to the future dated obligations table | [FDOs](../../#future-dated-obligations) |
| Align Obligation Dates | Corrections to the obligation dates table | [Obligations Table](../endpoint-version-schedule/#obligation-dates-schedule) |
| Fix Binding Date | Correct the binding date for Get Energy Account Detail V2 in the end point schedule | [End Point Version Schedule](../endpoint-version-schedule/#endpoint-version-schedule) |
| Fix End Point Schedule Link | Correct the link for the end point version schedule | [End Point Version Section](../../#endpoint-version-schedule) |

## High Level Standards

No changes


## API End Points

|Change|Description|Link|
|------|-----------|----|
| Updated Telco Draft | Changes arising from ongoing consultation on the Telco standards have been incorporated | [Telcp APIs](../../#telco-apis) |
| Meta Objects Optional | Made the meta object in requests and non-list responses optional for energy APIs to align with decisions | [Energy APIs](../../#energy-apis) |
| Error List Model | Align the version of the energy error list with the banking sector | [Energy APIs](../../#energy-apis) |
| Typo | Fixed typo of 'organisation' | [Energy APIs](../../#energy-apis) |


## Information Security Profile

No changes

## Consumer Experience

No changes

## Known Issues

No changes
