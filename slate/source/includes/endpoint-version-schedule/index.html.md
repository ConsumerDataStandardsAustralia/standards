---
layout: no_code_panel_layout
title: Consumer Data Standards - Endpoint Versioning Schedule

#language_tabs: # must be one of https://git.io/vQNgJ

toc_footers:
  - <a href='../../index.html'>Consumer Data Standards</a>

search: false
---
# Endpoint Version Schedule
The following tables describe the endpoint versions and the dates they become binding within the data standards.

**Binding Date** indicates the dates the particular version of an endpoint becomes binding in the data standards.

**Retirement Date** indicates, where relevant, denotes the date a specific version can be retired and is no longer supported. All consumers of the affected endpoint must upgrade to a more recent version currently available.

**Date Introduced** indicates the release of the standards, including release date, when the endpoint version was first introduced. This is not the Binding Date.

**Date Deprecated** indicates the release of the standards, including release date, when the endpoint version was first marked for deprecation. This is not the Retirement Date.

## Data Holders
The following versioning schedule is reflective of the endpoints hosted by Data Holders. Data Holders should take into account their phasing obligations in accordance with the CDR Rules as well as any exemptions granted, when determining which API versions are considered applicable.

| Section         | Sub-section                                  | Endpoint                                                   | Method | Version | Binding Date        | Retirement Date | Date Introduced    | Date Deprecated    |
|-----------------|----------------------------------------------|------------------------------------------------------------|--------|---------|---------------------|-----------------|--------------------|--------------------|
| Banking APIs    | Get Products                                 | /banking/products                                          | GET    | V1      | 2020-02-01          | 2020-09-29      | 2019-09-30, V1.0.0 | 2020-01-31, V1.2.0 |
| Banking APIs    | Get Products                                 | /banking/products                                          | GET    | V2      | 2020-07-31          | 2021-05-31      | 2020-01-31, V1.2.0 | 2021-04-29, V1.9.0 |
| Banking APIs    | Get Products                                 | /banking/products                                          | GET    | V3      | 2021-02-28          | N/A             | 2020-04-17, V1.3.0 | N/A                |
| Banking APIs    | Get Product Detail                           | /banking/product/{productId}                               | GET    | V1      | 2020-02-01          | 2020-09-29      | 2019-09-30, V1.0.0 | 2020-01-31, V1.2.0 |
| Banking APIs    | Get Product Detail                           | /banking/product/{productId}                               | GET    | V2      | 2020-07-31          | 2021-05-31      | 2020-01-31, V1.2.0 | 2021-04-29, V1.9.0 |
| Banking APIs    | Get Product Detail                           | /banking/product/{productId}                               | GET    | V3      | 2021-02-28          | N/A             | 2020-04-17, V1.3.0 | N/A                |
| Banking APIs    | Get Accounts                                 | /banking/accounts/                                         | GET    | V1      | 2020-07-01          | N/A             | 2019-09-30, V1.0.0 | N/A                |
| Banking APIs    | Get Account Balances                         | /banking/accounts/balances                                 | GET    | V1      | 2020-07-01          | N/A             | 2019-09-30, V1.0.0 | N/A                |
| Banking APIs    | Get Balances For Specific Accounts           | /banking/accounts/balances                                 | POST   | V1      | 2020-07-01          | N/A             | 2019-09-30, V1.0.0 | N/A                |
| Banking APIs    | Get Account Balance                          | /banking/accounts/{accountId}/balance                      | GET    | V1      | 2020-07-01          | N/A             | 2019-09-30, V1.0.0 | N/A                |
| Banking APIs    | Get Account Detail                           | /banking/accounts/{accountId}/                             | GET    | V1      | 2020-11-01          | N/A             | 2019-09-30, V1.0.0 | N/A                |
| Banking APIs    | Get Transactions For Account                 | /banking/accounts/{accountId}/transactions                 | GET    | V1      | 2020-07-01          | N/A             | 2019-09-30, V1.0.0 | N/A                |
| Banking APIs    | Get Transaction Detail                       | /banking/accounts/{accountId}/transactions/{transactionId} | GET    | V1      | 2020-07-01          | N/A             | 2019-09-30, V1.0.0 | N/A                |
| Banking APIs    | Get Direct Debits For Account                | /banking/accounts/{accountId}/direct-debits                | GET    | V1      | 2020-11-01          | N/A             | 2019-09-30, V1.0.0 | N/A                |
| Banking APIs    | Get Bulk Direct Debits                       | /banking/accounts/direct-debits                            | GET    | V1      | 2020-11-01          | N/A             | 2019-09-30, V1.0.0 | N/A                |
| Banking APIs    | Get Direct Debits For Specific Accounts      | /banking/accounts/direct-debits                            | POST   | V1      | 2020-11-01          | N/A             | 2019-09-30, V1.0.0 | N/A                |
| Banking APIs    | Get Scheduled Payments For Account           | /banking/accounts/{accountId}/payments/scheduled           | GET    | V1      | 2020-11-01          | N/A             | 2019-09-30, V1.0.0 | N/A                |
| Banking APIs    | Get Scheduled Payments Bulk                  | /banking/payments/scheduled                                | GET    | V1      | 2020-11-01          | N/A             | 2019-09-30, V1.0.0 | N/A                |
| Banking APIs    | Get Scheduled Payments For Specific Accounts | /banking/payments/scheduled                                | POST   | V1      | 2020-11-01          | N/A             | 2019-09-30, V1.0.0 | N/A                |
| Banking APIs    | Get Payees                                   | /banking/payees                                            | GET    | V1      | 2020-11-01          | N/A             | 2019-09-30, V1.0.0 | N/A                |
| Banking APIs    | Get Payee Detail                             | /banking/payees/{payeeId}                                  | GET    | V1      | 2020-11-01          | N/A             | 2019-09-30, V1.0.0 | N/A                |
| Common APIs     | Get Customer                                 | /common/customer                                           | GET    | V1      | 2020-07-01          | N/A             | 2019-09-30, V1.0.0 | N/A                |
| Common APIs     | Get Customer Detail                          | /common/customer/detail                                    | GET    | V1      | 2020-11-01          | N/A             | 2019-09-30, V1.0.0 | N/A                |
| Common APIs     | Get Status                                   | /discovery/status                                          | GET    | V1      | 2020-07-01          | N/A             | 2019-09-30, V1.0.0 | N/A                |
| Common APIs     | Get Outages                                  | /discovery/outages                                         | GET    | V1      | 2020-07-01          | N/A             | 2019-09-30, V1.0.0 | N/A                |
| Admin APIs      | Metadata Update                              | /admin/register/metadata                                   | POST   | V1      | 2020-07-01          | N/A             | 2019-09-30, V1.0.0 | N/A                |
| Admin APIs      | Get Metrics                                  | /admin/metrics                                             | GET    | V1      | 2020-07-01          | 2021-10-31      | 2019-09-30, V1.0.0 | 2021-04-29, V1.9.0 |
| Admin APIs      | Get Metrics                                  | /admin/metrics                                             | GET    | V2      | 2021-07-31          | N/A             | 2020-09-16, V1.5.0 | N/A                |
| InfoSec Profile | Endpoints                                    | CDR Arrangement Revocation Endpoint                        | POST   | 1.5.0   | 2020-11-01          | N/A             | 2020-04-17, V1.2.0 | N/A                |

## Data Recipients
The following versioning schedule is reflective of the endpoints hosted by Data Recipients.
Data Recipients should take into account their commencement date within the CDR, relevant obligations in accordance with the CDR Rules, as well as any exemptions granted when factoring in which API versions are considered applicable.

| Section         | Sub-section                                  | Endpoint                                                   | Method | Version | Binding Date        | Retirement Date | Date Introduced    | Date Deprecated    |
|-----------------|----------------------------------------------|------------------------------------------------------------|--------|---------|---------------------|-----------------|--------------------|--------------------|
| InfoSec Profile | Endpoints                                    | ADR Token Revocation Endpoint                              | POST   | 1.5.0   | 2020-07-01          | 2021-02-01      | 2019-09-30, V1.0.0 | 2020-04-17, V1.2.0 |
| InfoSec Profile | Endpoints                                    | CDR Arrangement Revocation Endpoint                        | POST   | 1.5.0   | 2020-11-01          | N/A             | 2020-04-17, V1.2.0 | N/A                |
