---
title: Consumer Data Standards - v1.1.1 Release Notes

#language_tabs: # must be one of https://git.io/vQNgJ

toc_footers:
  - <a href='../../index.html'>Consumer Data Standards</a>

search: false
---

# V1.1.1 Release Notes
Release notes for version 1.1.1 of the [CDR Standards](../../index.html).

This version of the standards only contains fixes and clarifications.  None of the changes in this version materially impact the intent or meaning of the standards and no updates should be required for compliant implementations.

## High Level Standards
|Change|Description|Link|
|------|-----------|----|
|Summary of future binding|Added a section highlighting the sections of the standard where an obligation will commence at a future date|[Future Dated Obligations](../../index.html#future-dated-obligations)
|Updated known issues|Repurposed the known issues section to allow for clearer reporting of errata in each version|[Known Issues](../../index.html#known-issues)
|Correct slashes|Replaced back slashes with forward slashes in various places in samples and descriptive text|Various
|Removed sample files|Removed a series of obsolete samples were not linked but were included in the repository|Not Applicable
|`x-cds-client-headers` description|Ensured all descriptions for the `x-cds-client-headers` header are consistent across the standards|Various
|`x-fapi-interaction-id` description|Ensured all descriptions for the `x-fapi-interaction-id` header are consistent across the standards|Various
|NFR Tier Clarification|Updated the non-functional requirements section to include the end points added to the standards after this section was originally published.  Note that this section is still non-binding in the standards with no future binding date set|[Performance Requirements](../../index.html#performance-requirements)

## API End Points
|Change|Description|Link|
|------|-----------|----|
|`ANZSCO` spelling|Correction of incorrect spelling of `ANZSCO`|[Common Person](../../index.html#tocScommonperson)
|Remove `x-cds-subject`|The `x-cds-subject` header was removed in v1.1.0 but references remained in swagger files and end point documentation.  This has been corrected|Various
|Additional enum documentation|Added additional enumeration value documentation that was in the decision proposal but not the standards for the nonBusinessDayTreatment field|[nonBusinessDayTreatment Field](../../index.html#tocSbankingscheduledpaymentrecurrenceintervalschedule)
|UnitOfMeasure enum|Improved the docuementation for the UnitOfMeasure field|[UnitOfMeasure field](../../index.html#tocSbankingproductlendingrate)
|Anonymous objects|Corrected API end point documentation to indicate that anonymous objects are mandatory|Various

## Information Security Profile
|Change|Description|Link|
|------|-----------|----|
|`sharing_duration` type|Clarified that the type of the `sharing_duration` parameter of the request object is a number|[Requesting Sharing Duration](../../index.html#requesting-sharing-duration)
|Normative reference corrections|Fixed normative references that were inadvertently linking to RFC drafts rather than the final versions|[Normative References](../../index.html#normative-references)
|Removed obsolete rationale|An obsolete statement providing rationale for a past change to the standards that did not materially change the standards was removed|[Transaction Security](../../index.html#transaction-security)
|JWKS hosting|An incorrect statement indicating that the CDR Register would host participant JWKS was removed|[Client Authentication](../../index.html#client-authentication)
|JWKS for recipients|Corrected the documentation for the JWKS end point to indicate that recipients also need to host a JWKS end point|[JSON Web Key Set End Point](../../index.html#end-points)

## Consumer Experience
No Change
