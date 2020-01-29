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
|Defect: Data cluster language for basic scope|CX Standards: minor defect correction for location of ‘balances’.<br/>'Account name and type' now changed to 'Account name, type and balance'.<br/>'Account numbers, balances and features' now changed to 'Account numbers and features'.|[CX Standards](../../index.html#consumer-experience)<br/>Page 21: Data Standards Language|
|Single/Concurrent consent guideline|CX Guidelines: example for ADRs to present withdrawal election prior to establishing a new consent.|[CX Guidelines](../../index.html#consumer-experience)<br/>Page 64: Subsequent Consent|
|Rule 4.23(b) example: historical data|CX Guidelines: showing how DHs may present static ‘1 Jan 2017’ reference in authorisation flow to reflect rule 4.23(b).<br/>CX Guidelines now also suggest other locations for this information that are not required in the rules or standards.|[CX Guidelines](../../index.html#consumer-experience)<br/>Page 82: Authorise / Confirmation<br/>Page 96: ADR dashboard<br/>Page 108: DH Dashboard|
|Rule 7.4 and 7.9 example: compliance with Privacy Safeguards 5 and 10|CX Guidelines: example for privacy safeguard requirement on dashboards. Rules regarding disclosure of datasets, references to ADRs and DHs, and date of initial and final disclosure.|[CX Guidelines](../../index.html#consumer-experience)<br/>Page 96: ADR dashboard<br/>Page 108: DH dashboard|
|CDR Branding|CX Guidelines: official CDR branding included in screens that refer to accreditation, with reference to ACCC-supplied assets.|[CX Guidelines](../../index.html#consumer-experience)<br/>Pages 10, 37, 39, 77, 110|
|Accreditation check|CX Guidelines: statement regarding ACCC-provided URL for consumers to use to verify accreditation|[CX Guidelines](../../index.html#consumer-experience)<br/>Page 39, 111|
|Password copy|CX Guidelines: clarified example of copy regarding CDR participants never asking for consumer passwords. Presented in body copy and footer.|[CX Guidelines](../../index.html#consumer-experience)<br/>Pages 71 - 75|
|CDR Rule 7.12(2)(b)|CX Guidelines: inclusion of rule in reference to outsourced providers.|[CX Guidelines](../../index.html#consumer-experience)<br/>Page 58, 62|
|Design patterns|CX Guidelines: guideline on encouraging consumers to be privacy conscious.|[CX Guidelines](../../index.html#consumer-experience)<br/>Page 53, 95, 108|
|Rules references|CX Guidelines: amended rules references.|[CX Guidelines](../../index.html#consumer-experience)<br/>Pages 40, 58, 98, 99, 107|
|CDR Receipt: Rule 4.18|CX Guidelines: copy updated to clarify that ADRs may but are not required to provide a CDR receipt on the consumer dashboard.|[CX Guidelines](../../index.html#consumer-experience)<br/>Page 94|
