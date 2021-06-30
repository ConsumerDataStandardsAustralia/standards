---
title: Consumer Data Standards - v1.11.0 Release Notes

#language_tabs: # must be one of https://git.io/vQNgJ

toc_footers:
  - <a href='../../index.html'>Consumer Data Standards</a>

search: false
---

# V1.11.0 Release Notes
Release notes for version 1.11.0 of the [CDR Standards](../../index.html).

This release pertains to the changes approved by the Data Standards Chair in Decision Proposal 160, 178 and 187.

## High Level Standards

|Change|Description|Link|
|------|-----------|----|
| Contact details | Updated swagger schemas to reference Consumer Data Standards contact details  | N/A  |
| Error codes | Fixed the documentation to correctly refer to the `detail` parameter of the error response structure | [Error Codes](../../#error-codes) |
| Error codes | Fixed the description for 422 error codes that incorrectly referred to the URI instead of the request body | [422 (Unprocessable Entity) Error Codes](../../#422-unprocessable-entity-errors) |
| Future Dated Obligations | Obligations which were due more than 3 months since publication of this release of the standards have been removed. They remain accessible in the archived versions of the standards. They have been removed from the main (current) version to reduce ambiguity and keep the standards streamlined | [Future Dated Obligations](../../#future-dated-obligations) |

## API End Points

|Change|Description|Link|
|------|-----------|----|
| Direct Debit APIs | Fix to the swagger schema to correctly denote `financialInstitution` as conditional | [BankingAuthorisedEntity](../../#tocSbankingauthorisedentity) |
| Documentation bug in Product Fee Types | Removed documentation bug in Product Fee Types (maintenance issue #386) | [Product Fee Types](../../#tocSproductfeetypedoc) |
| Transaction ID description | Clarified that `transactionId` is required when `isDetailAvailable` is set to true | [Banking Transaction](../../#tocSbankingtransaction) |

## Information Security Profile
|Change|Description|Link|
|------|-----------|----|
| Levels of Assurance navigation anchor | Removed duplicate menu navigation anchor for levels of assurance | [Levels of Assurance](../../#levels-of-assurance-loas) |

## Consumer Experience

|Change|Description|Link|
|------|-----------|----|
| Modularised CX standards | Modularised the CX standards code for maintenance and build purposes | N/A |
| Re-formatted | Layout of the CX standards were changed and some improvements were made to the content areas and formatting | [Consumer Experience](../../#consumer-experience) |
| Disclosure Consents CX Standards | Standards introduced in relation to DP187 regarding disclosure consent standards, trusted advisers and insights | [Consumer Experience](../../#consumer-experience) |
| Separated Authorisation: Account selection statements | For improved readability, the statements were divided into three separate standards pertaining to authorisation | [Authorisation Standards](../../#authorisation-standards)|
| Unavailable Accounts | Added changes arising from DP160 in relation to unavailable accounts | [Authorisation Standards](../../#authorisation-standards)|
| Secondary User Instructions | Added changes arising from DP160 in relation to secondary user instructions | [Withdrawal Standards](../../#withdrawal-standards)|
