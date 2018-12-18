--- 

title: Consumer Data Standards 

language_tabs: 
   - shell 

toc_footers: 
   - <a href='#'>Sign Up for a Developer Key</a> 
   - <a href='https://github.com/lavkumarv'>Documentation Powered by lav</a> 

includes: 
   - errors 

search: true 

--- 

# Introduction 

API sets created by the Australian  Consumer Data Standards to meet the needs of the Consumer Data Right 

**Version:** 1 

# /BANKING/ACCOUNTS
## ***GET*** 

**Summary:** Get Accounts

**Description:** Obtain a list of accounts

### HTTP Request 
`***GET*** /banking/accounts` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| open-status | query | Used to filter results according to open/closed status. Values can be OPEN, CLOSED or ALL. If absent then ALL is assumed | No | string |
| product-category | query | Used to filter results on the productCategory field applicable to accounts. Any one of the valid values for this field can be supplied. If absent then all accounts returned. | No | string |
| page | query | Page of results to request (standard pagination) | No | integer |
| page-size | query | Page size to request. Default is 25 (standard pagination) | No | integer |
| start-time | query | Constrain the transaction history request to transactions with effective time at or after this date/time. If absent defaults to today. Format is aligned to DateTimeString common type | No | string |
| end-time | query | Constrain the transaction history request to transactions with effective time at or before this date/time. If absent defaults to start-time plus 100 days. Format is aligned to DateTimeString common type | No | string |
| min-amount | query | Filter transactions to only transactions with amounts higher or equal to than this amount | No | number |
| max-amount | query | Filter transactions to only transactions with amounts less than or equal to than this amount | No | number |
| text | query | Filter transactions to only transactions where this string value is found as a substring of either the reference or description fields. Format is arbitrary ASCII string | No | string |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

# /BANKING/ACCOUNTS/{ACCOUNTID}
## ***GET*** 

**Summary:** Get Account Detail

**Description:** Obtain detailed information on a single account

### HTTP Request 
`***GET*** /banking/accounts/{accountId}` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| accountId | path | A tokenised identifier for the account which is unique but not shareable | Yes | string |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

# /BANKING/ACCOUNTS/BALANCES
## ***GET*** 

**Summary:** Get Bulk Balances

**Description:** Obtain balances for multiple, filtered accounts

### HTTP Request 
`***GET*** /banking/accounts/balances` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| product-category | query | Used to filter results on the productCategory field applicable to accounts. Any one of the valid values for this field can be supplied. If absent then all accounts returned | No | string |
| page | query | Page of results to request (standard pagination) | No | integer |
| page-size | query | Page size to request. Default is 25 (standard pagination) | No | integer |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | resource listing the financial balances for the account |

## ***POST*** 

**Summary:** Get Balances For Specific Accounts

**Description:** Obtain balances for a specified list of accounts

### HTTP Request 
`***POST*** /banking/accounts/balances` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| accountIds | body | The list of account IDs to obtain information for | Yes |  |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |
| 422 | The request was well formed but was unable to be processed due to business logic specific to the request |

# /BANKING/ACCOUNTS/{ACCOUNTID}/TRANSACTIONS
## ***GET*** 

**Summary:** Get Transactions For Account

**Description:** Obtain transactions for a specific account

### HTTP Request 
`***GET*** /banking/accounts/{accountId}/transactions` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| accountId | path | ID of the account to get transactions for.  Must have previously been returned by one of the account list end points. | Yes | string |
| start-time | query | Constrain the transaction history request to transactions with effective time at or after this date/time. If absent defaults to today. Format is aligned to DateTimeString common type | No | string |
| end-time | query | Constrain the transaction history request to transactions with effective time at or before this date/time. If absent defaults to start-time plus 100 days. Format is aligned to DateTimeString common type | No | string |
| min-amount | query | Filter transactions to only transactions with amounts higher or equal to this amount | No | number |
| max-amount | query | Filter transactions to only transactions with amounts less than or equal to than this amount | No | number |
| text | query | Filter transactions to only transactions where this string value is found as a substring of either the reference or description fields. Format is arbitrary ASCII string | No | string |
| page | query | Page of results to request (standard pagination) | No | integer |
| page-size | query | Page size to request. Default is 25 (standard pagination) | No | integer |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

# /BANKING/ACCOUNTS/{ACCOUNTID}/TRANSACTIONS/{TRANSACTIONID}
## ***GET*** 

**Summary:** Get Transaction Detail

**Description:** Obtain detailed information on a transaction for a specific account

### HTTP Request 
`***GET*** /banking/accounts/{accountId}/transactions/{transactionId}` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| accountId | path | The account id token that is used to uniquely represent the account | Yes | string |
| transactionId | path | The unique identifier for the specific transaction for which details are being requested | Yes | string |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

# /BANKING/ACCOUNTS/TRANSACTIONS
## ***GET*** 

**Summary:** Get Transactions For Account

**Description:** Obtain transactions for multiple, filtered accounts

### HTTP Request 
`***GET*** /banking/accounts/transactions` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| product-category | query | Used to filter results on the productCategory field applicable to accounts. Any one of the valid values for this field can be supplied. If absent then all accounts returned | No | string |
| start-time | query | Constrain the transaction history request to transactions with effective time at or after this date/time. If absent defaults to today. Format is aligned to DateTimeString common type | No | string |
| end-time | query | Constrain the transaction history request to transactions with effective time at or before this date/time. If absent defaults to start-time plus 100 days. Format is aligned to DateTimeString common type | No | string |
| min-amount | query | Filter transactions to only transactions with amounts higher or equal to this amount | No | number |
| max-amount | query | Filter transactions to only transactions with amounts less than or equal to this amount | No | string |
| text | query | Filter transactions to only transactions where this string value is found as a substring of either the reference or description fields. Format is arbitrary ASCII string | No | string |
| page | query | Page of results to request (standard pagination) | No | integer |
| page-size | query | Page size to request. Default is 25 (standard pagination) | No | integer |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

## ***POST*** 

**Summary:** Get Transactions For Specific Accounts

**Description:** Obtain transactions for a specified list of transactions.

### HTTP Request 
`***POST*** /banking/accounts/transactions` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| start-time | query | Constrain the transaction history request to transactions with effective time at or after this date/time. If absent defaults to today. Format is aligned to DateTimeString common type | No | string |
| end-time | query | Constrain the transaction history request to transactions with effective time at or before this date/time. If absent defaults to start-time plus 100 days. Format is aligned to DateTimeString common type | No | string |
| min-amount | query | Filter transactions to only transactions with amounts higher or equal to this amount | No | number |
| max-amount | query | Filter transactions to only transactions with amounts less than or equal to than this amount | No | number |
| text | query | Filter transactions to only transactions where this string value is found as a substring of either the reference or description fields. Format is arbitrary ASCII string | No | string |
| page | query | Page of results to request (standard pagination) | No | integer |
| page-size | query | Page size to request. Default is 25 (standard pagination) | No | integer |
| accountIds | body | The list of account IDs to obtain information for | Yes |  |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |
| 422 | The request was well formed but was unable to be processed due to business logic specific to the request |

# /BANKING/ACCOUNTS/{ACCOUNTID}/DIRECT-DEBITS
## ***GET*** 

**Summary:** Get Direct Debits For Account

**Description:** Obtain direct debit authorisations for a specific account

### HTTP Request 
`***GET*** /banking/accounts/{accountId}/direct-debits` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| accountId | path | ID of the account to get direct debit authorisations for.  Must have previously been returned by one of the account list end points. | Yes | string |
| page | query | Page of results to request (standard pagination) | No | string |
| page-size | query | Page size to request.  Default is 25 (standard pagination) | No | string |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

# /BANKING/ACCOUNTS/DIRECT-DEBITS
## ***GET*** 

**Summary:** Get Bulk Direct Debits

**Description:** Obtain direct debit authorisations for multiple, filtered accounts

### HTTP Request 
`***GET*** /banking/accounts/direct-debits` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| page | query | Page of results to request (standard pagination) | No | integer |
| page-size | query | Page size to request.  Default is 25 (standard pagination) | No | integer |
| product-category | query | Used to filter results on the productCategory field applicable to accounts. Any one of the valid values for this field can be supplied. If absent then all accounts returned | No | string |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

## ***POST*** 

**Summary:** Get Direct Debits For Specific Accounts

**Description:** Obtain direct debit authorisations for a specified list of accounts

### HTTP Request 
`***POST*** /banking/accounts/direct-debits` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| accountIds | body | The list of account IDs to obtain information for | Yes |  |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |
| 422 | The request was well formed but was unable to be processed due to business logic specific to the request |

# /BANKING/PAYEES
## ***GET*** 

**Summary:** Get Payees

**Description:** Obtain a list of pre-registered payees

### HTTP Request 
`***GET*** /banking/payees` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| type | query | Filter on the payee type field.  In addition to normal type field values, ALL can be specified to retrieve all payees.  If absent the assumed value is ALL | No | string |
| page | query | Page of results to request (standard pagination) | No | integer |
| page-size | query | Page size to request. Default is 25 (standard pagination) | No | integer |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

# /BANKING/PAYEES/{PAYEEID}
## ***GET*** 

**Summary:** Get Payee Detail

**Description:** Obtain detailed information on a single payee

### HTTP Request 
`***GET*** /banking/payees/{payeeId}` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| payeeId | path | The ID used to locate the details of a particular payee | Yes | string |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

# /BANKING/PRODUCTS
## ***GET*** 

**Summary:** Get Products

**Description:** Obtain a list of products that are currently openly offered to the market

### HTTP Request 
`***GET*** /banking/products` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| product-category | query | Used to filter results on the productCategory field. Any one of the valid values for this field can be supplied. If absent then all products returned | No | string |
| effective | query | If true then only include products that are effective right now and exclude products that may be available at a future time. If false only include products effective in the future. If absent defaults to include all products | No | boolean |
| updated-since | query | Only include products that have been updated after the specified date and time. If absent defaults to include all products | No | string |
| brand | query | Filter results based on a specific brand | No | string |
| page | query | Page of results to request (standard pagination) | No | integer |
| page-size | query | Page size to request. Default is 25 (standard pagination) | No | integer |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

# /BANKING/PRODUCTS/{PRODUCTID}
## ***GET*** 

**Summary:** Get Product Detail

**Description:** Obtain detailed information on a single product offered openly to the market

### HTTP Request 
`***GET*** /banking/products/{productId}` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| productId | path | ID of the specific product requested | Yes | string |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

# /COMMON/CUSTOMER
## ***GET*** 

**Summary:** Get Customer

**Description:** Obtain basic information on the customer that has authorised the current session

### HTTP Request 
`***GET*** /common/customer` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

# /COMMON/CUSTOMER/DETAIL
## ***GET*** 

**Summary:** Get Customer Detail

**Description:** Obtain detailed information on the authorised customer within the current session.

### HTTP Request 
`***GET*** /common/customer/detail` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

<!-- Converted with the swagger-to-slate https://github.com/lavkumarv/swagger-to-slate -->
