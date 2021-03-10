---
title: Consumer Data Standards - v1.7.0 Release Notes

#language_tabs: # must be one of https://git.io/vQNgJ

toc_footers:
  - <a href='../../index.html'>Consumer Data Standards</a>

search: false
---

# V1.7.0 Release Notes
Release notes for version 1.7.0 of the [CDR Standards](../../index.html).

This release pertains to the changes approved by the Data Standards Chair in [Decision 159](https://github.com/ConsumerDataStandardsAustralia/standards/issues/159).

## High Level Standards

|Change|Description|Link|
|------|-----------|----|
| CDR Support Portal Link | Added a link to the CDR Support Portal in the side menu. |
| Natural sort-ordered enumerations | Enumerated lists have been sorted by natural sort order | |
| CDR Support Portal Link | Added a link to the CDR Support Portal in the side menu. | |

## API End Points

|Change|Description|Link|
|------|-----------|----|
| Fixed paymentsRemaining value in Scheduled Payment non-normative examples | Non-normative examples showed paymentsRemaining = 0 however paymentsRemaining is a PositiveInteger with a value of 1 or greater. | [Scheduled Payments APIs](../../#get-scheduled-payments-for-account) |
| Scheduled Payments | Corrected the description for the scheduled payment nickname and made payeeReference conditional, to be provided only if there is a global payee reference for the payment set. Introduced conditional payeeReference and nickname for the individualised payments in the scheduled payment set | [BankingScheduledPayment](../../#tocSbankingscheduledpayment) |
| Updated CRN description | The CRN description was updated for BankingBillerPayee and BankingTransaction to appropriately reference conditionality of the response based on data sensitivity considerations and availability of the data for the posted transaction or saved payee. |
| Draft Energy Standards Update | Updated the draft energy standards to accommodate the feedback from DP 149 | [Draft Energy Standards](../../draft/energy-draft.html) |

## Information Security Profile
|Change|Description|Link|
|------|-----------|----|
| One-Time Collection Consent | Clarified that one-time collection consent is permitted for a shraring duration up to 24 hours. This allows the Data Recipient to obtain a Refresh Token to collect data over a period longer than a single Access Token in case of technical issues during collection  | [Requesting Sharing Duration](../../#requesting-sharing-duration) |

## Consumer Experience

|Change|Description|Link|
|------|-----------|----|
| Added CX Standards into main Data Standards | CX Standards have been ported from the PDF version into the main Data Standards published on GitHub | [CX Standards](../../#consumer-experience) |
| Removal of optional message in CX Standard #18 | An optional message in *CX Standard #18 - Withdrawing Authorisation: Redundant Data* has been removed to align with the v2 rules on separate consents. | [Consumer Experience Standard #18](../../#withdrawal-standards)<br/><br/>[Decision Proposal 168](https://github.com/ConsumerDataStandardsAustralia/standards/issues/168) |
