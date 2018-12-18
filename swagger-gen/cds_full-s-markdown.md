Consumer Data Standards
=======================
API sets created by the Australian  Consumer Data Standards to meet the needs of the Consumer Data Right

**Version:** 1

**License:** [MIT Licence](https://opensource.org/licenses/MIT)

### /banking/accounts
---
##### ***GET***
**Summary:** Get Accounts

**Description:** Obtain a list of accounts

**Parameters**

| Name | Located in | Description | Required | Schema |
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

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Success | [200_GET_Banking_Accounts](#200_get_banking_accounts) |

### /banking/accounts/{accountId}
---
##### ***GET***
**Summary:** Get Account Detail

**Description:** Obtain detailed information on a single account

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| accountId | path | A tokenised identifier for the account which is unique but not shareable | Yes | string |

**Responses**

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Success | [200_GET_Banking_Account](#200_get_banking_account) |

### /banking/accounts/balances
---
##### ***GET***
**Summary:** Get Bulk Balances

**Description:** Obtain balances for multiple, filtered accounts

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| product-category | query | Used to filter results on the productCategory field applicable to accounts. Any one of the valid values for this field can be supplied. If absent then all accounts returned | No | string |
| page | query | Page of results to request (standard pagination) | No | integer |
| page-size | query | Page size to request. Default is 25 (standard pagination) | No | integer |

**Responses**

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | resource listing the financial balances for the account | [200_GET_Banking_Accounts_Balances](#200_get_banking_accounts_balances) |

##### ***POST***
**Summary:** Get Balances For Specific Accounts

**Description:** Obtain balances for a specified list of accounts

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| accountIds | body | The list of account IDs to obtain information for | Yes | [AccountIds_Request](#accountids_request) |

**Responses**

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Success | [200_GET_Banking_Accounts_Balances](#200_get_banking_accounts_balances) |
| 422 | The request was well formed but was unable to be processed due to business logic specific to the request | [422_Errors](#422_errors) |

### /banking/accounts/{accountId}/transactions
---
##### ***GET***
**Summary:** Get Transactions For Account

**Description:** Obtain transactions for a specific account

**Parameters**

| Name | Located in | Description | Required | Schema |
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

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Success | [200_GET_Banking_Account_Transactions](#200_get_banking_account_transactions) |

### /banking/accounts/{accountId}/transactions/{transactionId}
---
##### ***GET***
**Summary:** Get Transaction Detail

**Description:** Obtain detailed information on a transaction for a specific account

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| accountId | path | The account id token that is used to uniquely represent the account | Yes | string |
| transactionId | path | The unique identifier for the specific transaction for which details are being requested | Yes | string |

**Responses**

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Success | [200_GET_Banking_Transactions_Detail](#200_get_banking_transactions_detail) |

### /banking/accounts/transactions
---
##### ***GET***
**Summary:** Get Transactions For Account

**Description:** Obtain transactions for multiple, filtered accounts

**Parameters**

| Name | Located in | Description | Required | Schema |
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

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Success | [200_GET_Banking_Bulk_Transactions](#200_get_banking_bulk_transactions) |

##### ***POST***
**Summary:** Get Transactions For Specific Accounts

**Description:** Obtain transactions for a specified list of transactions.

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| start-time | query | Constrain the transaction history request to transactions with effective time at or after this date/time. If absent defaults to today. Format is aligned to DateTimeString common type | No | string |
| end-time | query | Constrain the transaction history request to transactions with effective time at or before this date/time. If absent defaults to start-time plus 100 days. Format is aligned to DateTimeString common type | No | string |
| min-amount | query | Filter transactions to only transactions with amounts higher or equal to this amount | No | number |
| max-amount | query | Filter transactions to only transactions with amounts less than or equal to than this amount | No | number |
| text | query | Filter transactions to only transactions where this string value is found as a substring of either the reference or description fields. Format is arbitrary ASCII string | No | string |
| page | query | Page of results to request (standard pagination) | No | integer |
| page-size | query | Page size to request. Default is 25 (standard pagination) | No | integer |
| accountIds | body | The list of account IDs to obtain information for | Yes | [AccountIds_Request](#accountids_request) |

**Responses**

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Success | [200_GET_Banking_Bulk_Transactions](#200_get_banking_bulk_transactions) |
| 422 | The request was well formed but was unable to be processed due to business logic specific to the request | [422_Errors](#422_errors) |

### /banking/accounts/{accountId}/direct-debits
---
##### ***GET***
**Summary:** Get Direct Debits For Account

**Description:** Obtain direct debit authorisations for a specific account

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| accountId | path | ID of the account to get direct debit authorisations for.  Must have previously been returned by one of the account list end points. | Yes | string |
| page | query | Page of results to request (standard pagination) | No | string |
| page-size | query | Page size to request.  Default is 25 (standard pagination) | No | string |

**Responses**

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Success | [200_GET_Banking_Direct-Debits](#200_get_banking_direct-debits) |

### /banking/accounts/direct-debits
---
##### ***GET***
**Summary:** Get Bulk Direct Debits

**Description:** Obtain direct debit authorisations for multiple, filtered accounts

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| page | query | Page of results to request (standard pagination) | No | integer |
| page-size | query | Page size to request.  Default is 25 (standard pagination) | No | integer |
| product-category | query | Used to filter results on the productCategory field applicable to accounts. Any one of the valid values for this field can be supplied. If absent then all accounts returned | No | string |

**Responses**

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Success | [200_GET_Banking_Direct-Debits](#200_get_banking_direct-debits) |

##### ***POST***
**Summary:** Get Direct Debits For Specific Accounts

**Description:** Obtain direct debit authorisations for a specified list of accounts

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| accountIds | body | The list of account IDs to obtain information for | Yes | [AccountIds_Request](#accountids_request) |

**Responses**

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Success | [200_GET_Banking_Direct-Debits](#200_get_banking_direct-debits) |
| 422 | The request was well formed but was unable to be processed due to business logic specific to the request | [422_Errors](#422_errors) |

### /banking/payees
---
##### ***GET***
**Summary:** Get Payees

**Description:** Obtain a list of pre-registered payees

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| type | query | Filter on the payee type field.  In addition to normal type field values, ALL can be specified to retrieve all payees.  If absent the assumed value is ALL | No | string |
| page | query | Page of results to request (standard pagination) | No | integer |
| page-size | query | Page size to request. Default is 25 (standard pagination) | No | integer |

**Responses**

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Success | [200_GET_Banking_Payees](#200_get_banking_payees) |

### /banking/payees/{payeeId}
---
##### ***GET***
**Summary:** Get Payee Detail

**Description:** Obtain detailed information on a single payee

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| payeeId | path | The ID used to locate the details of a particular payee | Yes | string |

**Responses**

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Success | [200_GET_Banking_Payee_Details](#200_get_banking_payee_details) |

### /banking/products
---
##### ***GET***
**Summary:** Get Products

**Description:** Obtain a list of products that are currently openly offered to the market

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| product-category | query | Used to filter results on the productCategory field. Any one of the valid values for this field can be supplied. If absent then all products returned | No | string |
| effective | query | If true then only include products that are effective right now and exclude products that may be available at a future time. If false only include products effective in the future. If absent defaults to include all products | No | boolean |
| updated-since | query | Only include products that have been updated after the specified date and time. If absent defaults to include all products | No | string |
| brand | query | Filter results based on a specific brand | No | string |
| page | query | Page of results to request (standard pagination) | No | integer |
| page-size | query | Page size to request. Default is 25 (standard pagination) | No | integer |

**Responses**

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Success | [200_GET_Banking_Products](#200_get_banking_products) |

### /banking/products/{productId}
---
##### ***GET***
**Summary:** Get Product Detail

**Description:** Obtain detailed information on a single product offered openly to the market

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| productId | path | ID of the specific product requested | Yes | string |

**Responses**

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Success | [200_GET_Banking_Product](#200_get_banking_product) |

### /common/customer
---
##### ***GET***
**Summary:** Get Customer

**Description:** Obtain basic information on the customer that has authorised the current session

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |

**Responses**

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Success | [200_GET_Common_Customer](#200_get_common_customer) |

### /common/customer/detail
---
##### ***GET***
**Summary:** Get Customer Detail

**Description:** Obtain detailed information on the authorised customer within the current session.

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |

**Responses**

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Success | [200_GET_Common_Customer_Detailed](#200_get_common_customer_detailed) |

### Models
---

### AccountIds_Request  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| data | object |  | Yes |
| meta | [Meta_Object](#meta_object) |  | Yes |

### 200_GET_Banking_Products  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| data | object |  | Yes |
| links | [LinksPaginated_Object](#linkspaginated_object) |  | Yes |
| meta | [MetaPaginated_Object](#metapaginated_object) |  | Yes |

### Product_Object  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| productId | string (ASCIIString) | A provider specific unique identifier for this product. This identifier must be unique to a product but does not otherwise need to adhere to ID permanence guidelines. | Yes |
| effectiveFrom | string (DateTimeString) | The date and time from which this product is effective (ie. is available for origination) | No |
| effectiveTo | string (DateTimeString) | The date and time at which this product will be retired and will no longer be offered | No |
| lastUpdated | string (DateTimeString) | The last date and time that the information for this product was changed (or the creation date for the product if it has never been altered) | Yes |
| productCategory | string | The category of the accounts generated from this product | Yes |
| name | string | The display name of the product | Yes |
| description | string | A description of the product | Yes |
| brand | string | A label of the brand for the product. Able to be used for filtering. For data providers with single brands this value is still required | Yes |
| brandName | string | An optional display name of the brand | No |
| applicationUri | string | A link to the an application web page where this product can be applied for. | No |
| isNegotiable | boolean | Indicates whether the product is specifically designed so that fees and prices are negotiated depending on context. While all products are open to a degree of negotiation this flag indicates that negotiation is expected and thus that the provision of specific fees and rates is not applicable | Yes |
| additionalInformation | object |  | No |

### 200_GET_Banking_Product  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| data | [ProductDetail_Object](#productdetail_object) |  | Yes |
| links | [Links_Object](#links_object) |  | Yes |
| meta | [Meta_Object](#meta_object) |  | Yes |

### ProductDetail_Object  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| productId | string (ASCIIString) | A provider specific unique identifier for this product. This identifier must be unique to a product but does not otherwise need to adhere to ID permanence guidelines. | Yes |
| effectiveFrom | string (DateTimeString) | The date and time from which this product is effective (ie. is available for origination) | No |
| effectiveTo | string (DateTimeString) | The date and time at which this product will be retired and will no longer be offered | No |
| lastUpdated | string (DateTimeString) | The last date and time that the information for this product was changed (or the creation date for the product if it has never been altered) | Yes |
| productCategory | string | The category of the accounts generated from this product | Yes |
| name | string | The display name of the product | Yes |
| description | string | A description of the product | Yes |
| brand | string | A label of the brand for the product. Able to be used for filtering. For data providers with single brands this value is still required | Yes |
| brandName | string | An optional display name of the brand | No |
| applicationUri | string | A link to the an application web page where this product can be applied for. | No |
| isNegotiable | boolean | Indicates whether the product is specifically designed so that fees and prices are negotiated depending on context. While all products are open to a degree of negotiation this flag indicates that negotiation is expected and thus that the provision of specific fees and rates is not applicable | Yes |
| additionalInformation | object |  | No |
| bundles | [ [ProductBundles_Object](#productbundles_object) ] |  | No |
| features | [ [ProductFeatures_Object](#productfeatures_object) ] |  | No |
| constraints | [ [ProductConstraints_Object](#productconstraints_object) ] |  | No |
| eligibility | [ [ProductEligibility_Object](#producteligibility_object) ] |  | No |
| fees | [ [ProductFees_Object](#productfees_object) ] |  | No |
| depositRates | [ [ProductDepositRates_Object](#productdepositrates_object) ] |  | No |
| lendingRates | [ [ProductLendingRates_Object](#productlendingrates_object) ] |  | No |

### ProductBundles_Object  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| name | string | Name of the bundle | Yes |
| description | string | Description of the bundle | Yes |
| additionalInfoUri | string (URIString) | Link to a web page with more information on the bundle criteria and benefits | No |
| productIds | [ string ] | Array of product IDs for products included in the bundle | Yes |

### ProductFeatures_Object  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| featureType | string | The type of feature described | Yes |
| additionalValue | string | Generic field containing additional information relevant to the featureType specified. Whether mandatory or not is dependent on the value of featureType | No |

### ProductConstraints_Object  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| constraintType | string | The type of constraint described.  See the next section for an overview of valid values and their meaning | Yes |
| additionalValue | string | Generic field containing additional information relevant to the constraintType specified.  Whether mandatory or not is dependent on the value of constraintType | No |

### ProductEligibility_Object  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| eligibilityType | string | The type of eligibility criteria described.  See the next section for an overview of valid values and their meaning | Yes |
| additionalValue | string | Generic field containing additional information relevant to the eligibilityType specified.  Whether mandatory or not is dependent on the value of eligibilityType | No |
| additionalInfo | string | Display text providing more information on the eligibility criteria. Mandatory if the eligibilityType field is set to OTHER | No |
| additionalInfoUri | string (URIString) | Link to a web page with more information on this eligibility criteria | No |

### ProductFees_Object  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| name | string | Name of the fee | Yes |
| feeType | string | The type of fee | Yes |
| amount | string (AmountString) | The amount charged for the fee. Assumed to be in AUD. One of amount, balanceRate and transactionRate is mandatory | No |
| balanceRate | string (RateString) | A fee rate calculated based on a proportion of the balance. Assumed to be in AUD. One of amount, balanceRate and transactionRate is mandatory | No |
| transactionRate | string (RateString) | A fee rate calculated based on a proportion of a transaction. Assumed to be in AUD. One of amount, balanceRate and transactionRate is mandatory | No |
| currency | string (CurrencyString) | The currency the fee will be charged in. Assumes AUD if absent | No |
| additionalValue | string | Generic field containing additional information relevant to the feeType specified. Whether mandatory or not is dependent on the value of feeType | No |
| additionalInfo | string | Display text providing more information on the fee | No |
| additionalInfoUri | string (URIString) | Link to a web page with more information on this fee | No |
| discounts | [ [ProductDiscounts_Object](#productdiscounts_object) ] |  | No |

### ProductDiscounts_Object  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| description | string | Description of the discount | Yes |
| discountType | string | The type of discount. See the next section for an overview of valid values and their meaning | Yes |
| amount | string (AmountString) | Value of the discount. Note that the currency of the fee discount is expected to be the same as the currency of the fee itself | Yes |
| additionalValue | string | Generic field containing additional information relevant to the discountType specified. Whether mandatory or not is dependent on the value of discountType | No |

### ProductDepositRates_Object  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| depositRateType | string | The type of rate (base, bonus, etc). See the next section for an overview of valid values and their meaning | Yes |
| rate | string (RateString) | The rate to be applied | Yes |
| additionalValue | string | Generic field containing additional information relevant to the depositRateType specified. Whether mandatory or not is dependent on the value of depositRateType | No |
| additionalInfo | string | Display text providing more information on the fee | No |
| additionalInfoUri | string (URIString) | Link to a web page with more information on this fee | No |

### ProductLendingRates_Object  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| lendingRateType | string | The type of rate (fixed, variable, etc). See the next section for an overview of valid values and their meaning | Yes |
| rate | string (RateString) | The rate to be applied | Yes |
| additionalValue | string | Information relevant to the lendingRateType specified.  Whether mandatory or not is dependent on the Generic field containing additional information relevant to the lendingRateType specified. Whether mandatory or not is dependent on the value of lendingRateType | No |
| additionalInfo | string | Display text providing more information on the fee. | No |
| additionalInfoUri | string (URIString) | Link to a web page with more information  on this fee | No |

### 200_GET_Banking_Accounts  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| data | object |  | Yes |
| links | [LinksPaginated_Object](#linkspaginated_object) |  | Yes |
| meta | [MetaPaginated_Object](#metapaginated_object) |  | Yes |

### Account_Object  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountid | string (ASCIIString) | A unique ID of the account adhering to the standards for ID permanence | No |
| displayName | string | The display name of the account. If a customer provided nickname is available that value should be returned | Yes |
| nickname | string | A customer supplied nick name for the account | No |
| maskedNumber | string (MaskedAccountString) | A masked version of the account. Whether BSB/Account Number, Credit Card PAN or another number this should be formatted with each digit masked and the last three digits unmasked | Yes |
| productCategory | string | The category of the product or account | Yes |
| providerType | string | The unique type as defined by the account provider | Yes |
| balance$type | string | The type of balance object provided for the account. Must be one of: debit Debit Balance Type (see above) Conditional credit Credit Balance Type (see above) Conditional Multi Currency Purses Type (see above) Conditional purses debit credit purses | Yes |
| deposits | [DepositsBalance_Object](#depositsbalance_object) |  | No |
| lending | [LendingBalance_Object](#lendingbalance_object) |  | No |
| purses | [ [CurrencyAmount_Object](#currencyamount_object) ] |  | No |

### 200_GET_Banking_Account  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| data | [AccountDetail_Object](#accountdetail_object) |  | Yes |
| links | [Links_Object](#links_object) |  | Yes |
| meta | [Meta_Object](#meta_object) |  | Yes |

### AccountDetail_Object  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountid | string (ASCIIString) | A unique ID of the account adhering to the standards for ID permanence | No |
| displayName | string | The display name of the account. If a customer provided nickname is available that value should be returned | Yes |
| nickname | string | A customer supplied nick name for the account | No |
| maskedNumber | string (MaskedAccountString) | A masked version of the account. Whether BSB/Account Number, Credit Card PAN or another number this should be formatted with each digit masked and the last three digits unmasked | Yes |
| productCategory | string | The category of the product or account | Yes |
| providerType | string | The unique type as defined by the account provider | Yes |
| balance$type | string | The type of balance object provided for the account. Must be one of: debit Debit Balance Type (see above) Conditional credit Credit Balance Type (see above) Conditional Multi Currency Purses Type (see above) Conditional purses debit credit purses | Yes |
| deposits | [DepositsBalance_Object](#depositsbalance_object) |  | No |
| lending | [LendingBalance_Object](#lendingbalance_object) |  | No |
| purses | [ [CurrencyAmount_Object](#currencyamount_object) ] |  | No |
| bundleName | string | Optional field to indicate if this account is part of a bundle that is providing additional benefit for to the customer | No |
| specificAccount$type | string | The type of structure to present account specific fields. | No |
| termDeposit | [TermDepositAccount_Object](#termdepositaccount_object) |  | No |
| creditCard | [CreditCardAccount_Object](#creditcardaccount_object) |  | No |
| loan | [LoanAccount_Object](#loanaccount_object) |  | No |
| features | [ [AccountFeatures_Object](#accountfeatures_object) ] |  | No |
| fees | [ [AccountFees_Object](#accountfees_object) ] |  | No |
| depositRates | [ [AccountDepositRates_Object](#accountdepositrates_object) ] |  | No |
| lendingRates | [ [AccountLendingRates_Object](#accountlendingrates_object) ] |  | No |
| address | object |  | No |

### TermDepositAccount_Object  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| lodgementDate | string (DateTimeString) | The lodgement date of the original deposit | Yes |
| maturityDate | string (DateTimeString) | Maturity date for the term deposit | Yes |
| maturityAmount | string (AmountString) | Amount to be paid upon maturity. If absent it implies the amount to paid is variable and cannot currently be calculated | No |
| maturityCurrency | string (CurrencyString) | If absent assumes AUD | No |
| maturityInstructions | string | Current instructions on action to be taken at maturity | Yes |

### CreditCardAccount_Object  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| minPaymentAmount | string (AmountString) | The minimum payment amount due for the next card payment | Yes |
| paymentDueAmount | string (AmountString) | The amount due for the next card payment | Yes |
| paymentCurrency | string (CurrencyString) | If absent assumes AUD | No |
| paymentDueDate | string (DateTimeString) | Date that the next payment for the card is due | Yes |

### LoanAccount_Object  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| originalStartDate | string (DateTimeString) | Optional original start date for the loan | No |
| originalLoanAmount | string (AmountString) | Optional original loan value | No |
| originalLoanCurrency | string (CurrencyString) | If absent assumes AUD | No |
| loanEndDate | string (DateTimeString) | Date that the loan is due to be repaid in full | Yes |
| nextInstalmentDate | string (DateTimeString) | Next date that an instalment is required | Yes |
| minInstalmentAmount | string (AmountString) | Minimum amount of next instalment | Yes |
| minInstalmentCurrency | string (CurrencyString) | If absent assumes AUD | No |
| maxRedraw | string (AmountString) | Maximum amount of funds that can be redrawn. If not present redraw is not available even if the feature exists for the account | No |
| maxRedrawCurrency | string (CurrencyString) | If absent assumes AUD | No |
| minRedraw | string | Minimum redraw amount | No |
| minRedrawCurrency | string (CurrencyString) | If absent assumes AUD | No |
| offsetAccountEnabled | boolean | Set to true if one or more offset accounts are configured for this loan account | No |
| offsetAccountIds | [ string ] | The accountIDs of the configured offset accounts attached to this loan. Only offset accounts that can be accesses under the current authorisation should be included. It is expected behaviour that offsetAccountEnabled is set to true but the offsetAccountIds field is absent or empty. This represents a situation where an offset account exists but details can not be accessed under the current authorisation | No |
| repaymentType | string | Options in place for repayments. If absent defaults to PRINCIPAL_AND_INTEREST | No |
| repaymentFrequency | string | The expected or required repayment frequency. Formatted according to ISO 8601 Durations | Yes |

### AccountFeatures_Object  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| featureType | string | The type of feature described | Yes |
| additionalValue | string | Generic field containing additional information relevant to the featureType specified. Whether mandatory or not is dependent on the value of featureType | No |

### AccountFees_Object  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| name | string | Name of the fee | Yes |
| feeType | string | The type of fee | Yes |
| amount | string (AmountString) | The amount charged for the fee. Assumed to be in AUD. One of amount, balanceRate and transactionRate is mandatory | No |
| balanceRate | string (RateString) | A fee rate calculated based on a proportion of the balance. Assumed to be in AUD. One of amount, balanceRate and transactionRate is mandatory | No |
| transactionRate | string (RateString) | A fee rate calculated based on a proportion of a transaction. Assumed to be in AUD. One of amount, balanceRate and transactionRate is mandatory | No |
| currency | string (CurrencyString) | The currency the fee will be charged in. Assumes AUD if absent | No |
| additionalValue | string | Generic field containing additional information relevant to the feeType specified. Whether mandatory or not is dependent on the value of feeType | No |
| additionalInfo | string | Display text providing more information on the fee | No |
| additionalInfoUri | string (URIString) | Link to a web page with more information on this fee | No |
| discounts | [ [AccountDiscounts_Object](#accountdiscounts_object) ] |  | No |

### AccountDiscounts_Object  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| description | string | Description of the discount | Yes |
| discountType | string | The type of discount. See the next section for an overview of valid values and their meaning | Yes |
| amount | string (AmountString) | Value of the discount. Note that the currency of the fee discount is expected to be the same as the currency of the fee itself | Yes |
| additionalValue | string | Generic field containing additional information relevant to the discountType specified. Whether mandatory or not is dependent on the value of discountType | No |

### AccountDepositRates_Object  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| depositRateType | string | The type of rate (base, bonus, etc). See the next section for an overview of valid values and their meaning | Yes |
| rate | string (RateString) | The rate to be applied | Yes |
| additionalValue | string | Generic field containing additional information relevant to the depositRateType specified. Whether mandatory or not is dependent on the value of depositRateType | No |
| additionalInfo | string | Display text providing more information on the fee | No |
| additionalInfoUri | string (URIString) | Link to a web page with more information on this fee | No |

### AccountLendingRates_Object  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| lendingRateType | string | The type of rate (fixed, variable, etc). See the next section for an overview of valid values and their meaning | Yes |
| rate | string (RateString) | The rate to be applied | Yes |
| additionalValue | string | Information relevant to the lendingRateType specified.  Whether mandatory or not is dependent on the Generic field containing additional information relevant to the lendingRateType specified. Whether mandatory or not is dependent on the value of lendingRateType | No |
| additionalInfo | string | Display text providing more information on the fee. | No |
| additionalInfoUri | string (URIString) | Link to a web page with more information  on this fee | No |

### 200_GET_Banking_Account_Transactions  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| data | object |  | Yes |
| links | [LinksPaginated_Object](#linkspaginated_object) |  | Yes |
| meta | [MetaPaginated_Object](#metapaginated_object) |  | Yes |

### Transaction_Object  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| transactionid | string (ASCIIString) | A unique ID of the transaction adhering to the standards for ID permanence. This is mandatory (through hashing if necessary) unless there are specific and justifiable technical reasons why a transaction cannot be uniquely identified for a particular account type | No |
| isDetailAvailable | boolean | True if extended information is available using the transaction detail end point. False if extended data is not available | Yes |
| status | string | Status of the transaction | Yes |
| description | string | The transaction description as applied by the financial institution | Yes |
| postDateTime | string (DateTimeString) | The time the transaction was posted. This field is mandatory if the transaction has status POSTED. This is the time that appears on a standard statement | No |
| executionDateTime | string (DateTimeString) | The time the transaction was executed by the originating customer, if available | No |
| amount | string (AmountString) | The value of the transaction. Negative values mean money was outgoing | No |
| currency | string (CurrencyString) | The currency for the transaction amount. AUD assumed if not present | No |
| reference | string | The reference for the transaction provided by the originating institution | Yes |

### 200_GET_Banking_Transactions_Detail  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| data | object |  | Yes |
| links | [Links_Object](#links_object) |  | Yes |
| meta | [Meta_Object](#meta_object) |  | Yes |

### TransactionDetail_Object  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| transactionid | string (ASCIIString) | A unique ID of the transaction adhering to the standards for ID permanence. This is mandatory (through hashing if necessary) unless there are specific and justifiable technical reasons why a transaction cannot be uniquely identified for a particular account type | No |
| status | string | Status of the transaction | Yes |
| description | string | The transaction description as applied by the financial institution | Yes |
| postDateTime | string (DateTimeString) | The time the transaction was posted. This field is mandatory if the transaction has status POSTED. This is the time that appears on a standard statement | No |
| executionDateTime | string (DateTimeString) | The time the transaction was executed by the originating customer, if available | No |
| amount | string (AmountString) | The value of the transaction. Negative values mean money was outgoing | No |
| currency | string (CurrencyString) | The currency for the transaction amount. AUD assumed if not present | No |
| reference | string | The reference for the transaction provided by the originating institution | Yes |
| extendedData | [TransactionExtendedData_Object](#transactionextendeddata_object) |  | No |

### TransactionExtendedData_Object  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| payer | string | Label of the originating payer.  Mandatory for inbound payment | No |
| payee | string | Label of the target PayID. Mandatory for an outbound payment | No |
| extension$type | string | Optional extended data provided specific to transaction originated via NPP | No |
| extendedDescription | string | An extended string description. Only present if specified by the extensionType field | No |
| service | string | Identifier of the applicable overlay service | Yes |

### 200_GET_Banking_Bulk_Transactions  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| data | object |  | Yes |
| links | [LinksPaginated_Object](#linkspaginated_object) |  | Yes |
| meta | [MetaPaginated_Object](#metapaginated_object) |  | Yes |

### BulkTransaction_Object  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountId | string (ASCIIString) | A unique ID of the account adhering to the standards for ID permanence | Yes |
| transactionid | string (ASCIIString) | A unique ID of the transaction adhering to the standards for ID permanence. This is mandatory (through hashing if necessary) unless there are specific and justifiable technical reasons why a transaction cannot be uniquely identified for a particular account type | No |
| isDetailAvailable | boolean | True if extended information is available using the transaction detail end point. False if extended data is not available | Yes |
| status | string | Status of the transaction | Yes |
| description | string | The transaction description as applied by the financial institution | Yes |
| postDateTime | string (DateTimeString) | The time the transaction was posted. This field is mandatory if the transaction has status POSTED. This is the time that appears on a standard statement | No |
| executionDateTime | string (DateTimeString) | The time the transaction was executed by the originating customer, if available | No |
| amount | string (AmountString) | The value of the transaction. Negative values mean money was outgoing | No |
| currency | string (CurrencyString) | The currency for the transaction amount. AUD assumed if not present | No |
| reference | string | The reference for the transaction provided by the originating institution | Yes |

### 200_GET_Banking_Accounts_Balances  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| data | object |  | Yes |
| links | [LinksPaginated_Object](#linkspaginated_object) |  | Yes |
| meta | [MetaPaginated_Object](#metapaginated_object) |  | Yes |

### Balance_Object  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountid | string | A unique ID of the account adhering to the standards for ID permanence | No |
| balance$type | string | The type of balance object provided for the account | Yes |
| deposits | [DepositsBalance_Object](#depositsbalance_object) |  | No |
| lending | [LendingBalance_Object](#lendingbalance_object) |  | No |
| purses | [ [CurrencyAmount_Object](#currencyamount_object) ] |  | No |

### DepositsBalance_Object  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| currentBalance | [CurrencyAmount_Object](#currencyamount_object) |  | Yes |
| availableBalance | [CurrencyAmount_Object](#currencyamount_object) |  | Yes |

### LendingBalance_Object  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountBalance | [CurrencyAmount_Object](#currencyamount_object) |  | Yes |
| availableBalance | [CurrencyAmount_Object](#currencyamount_object) |  | Yes |
| creditLimit | [CurrencyAmount_Object](#currencyamount_object) |  | Yes |
| amortisedLimit | [CurrencyAmount_Object](#currencyamount_object) |  | No |

### CurrencyAmount_Object  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| amount | string (AmountString) | The current balance of the account at this time. Should align to the current balance available via other channels such as ATM balance enquiry or Internet Banking | Yes |
| currency | string (CurrencyString) | If not present assumes AUD | No |

### 200_GET_Banking_Payees  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| data | object |  | Yes |
| links | [LinksPaginated_Object](#linkspaginated_object) |  | Yes |
| meta | [MetaPaginated_Object](#metapaginated_object) |  | Yes |

### 200_GET_Banking_Payee_Details  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| data | [PayeeDetail_Object](#payeedetail_object) |  | Yes |
| links | [Links_Object](#links_object) |  | Yes |
| meta | [Meta_Object](#meta_object) |  | Yes |

### Payee_Object  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| payeeId | string | ID of the payee adhering to the rules of ID permanence | Yes |
| nickname | string | The short display name of the payee as provided by the customer | Yes |
| description | string | A description of the payee provided by the customer | No |
| type | string | The type of payee. DOMESTIC means a registered payee for domestic payments including NPP. INTERNATIONAL means a registered payee for international payments. BILLER means a registered payee for BPAY | Yes |

### PayeeDetail_Object  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| payeeId | string | ID of the payee adhering to the rules of ID permanence | Yes |
| nickname | string | The short display name of the payee as provided by the customer | Yes |
| description | string | A description of the payee provided by the customer | No |
| type | string | The type of payee. DOMESTIC means a registered payee for domestic payments including NPP. INTERNATIONAL means a registered payee for international payments. BILLER means a registered payee for BPAY | Yes |
| payee$type | string | Type of object included that describes the payee in detail | Yes |
| domestic | [DomesticPayee_Object](#domesticpayee_object) |  | No |
| biller | [BillerPayee_Object](#billerpayee_object) |  | No |
| international | [InternationalPayee_Object](#internationalpayee_object) |  | No |

### DomesticPayee_Object  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| payeeAccount$type | string | Type of account object included. Valid values are: { payeeAccount$type - - account A standard Australian account defined by BSB/Account Number payId A PayID recognised by NPP | Yes |
| account | [DomesticPayeeAccount_Object](#domesticpayeeaccount_object) |  | No |
| card | [DomesticPayeeCard_Object](#domesticpayeecard_object) |  | No |
| payId | [DomesticPayeePayId_Object](#domesticpayeepayid_object) |  | No |

### DomesticPayeeAccount_Object  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountName | string | Name of the account to pay to | Yes |
| bsb | string | BSB of the account to pay to | Yes |
| accountNumber | string | Number of the account to pay to | Yes |

### DomesticPayeeCard_Object  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| cardNumber | string (MaskedPANString) | Name of the account to pay to | Yes |

### DomesticPayeePayId_Object  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| name | string | The name assigned to the PayID by the owner of the PayID | Yes |
| identifier | string | The identifier of the PayID (dependent on type) | Yes |
| type | string | The type of the PayID | Yes |

### BillerPayee_Object  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| billerCode | string | BPay Biller Code of the Biller | Yes |
| crn | string | BPay CRN of the Biller. If the contents of the CRN match the format of a Credit Card PAN then it should be masked using the rules applicable for the MaskedPANString common type | No |
| billerName | string | Name of the Biller | Yes |

### InternationalPayee_Object  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| beneficiaryDetails | object |  | Yes |
| bankDetails | object |  | Yes |

### 200_GET_Banking_Direct-Debits  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| data | object |  | Yes |
| links | [LinksPaginated_Object](#linkspaginated_object) |  | Yes |
| meta | [MetaPaginated_Object](#metapaginated_object) |  | Yes |

### DirectDebits_Object  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountId | string (ASCIIString) | A unique ID of the account adhering to the standards for ID permanence. | Yes |
| authorisedEntity | [AuthorisedEntity_Object](#authorisedentity_object) |  | No |
| lastDebitDateTime | string (DateTimeString) | The date and time of the last debit executed under this authorisation | No |
| lastDebitAmount | string (AmountString) | The amount of the last debit executed under this authorisation | No |

### AuthorisedEntity_Object  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| name | string | Name of the authorised entity | Yes |
| financialInstitution | string | Name of the financial institution through which the direct debit will be executed | Yes |
| abn | string | Australian Business Number for the authorised entity | No |
| acn | string | Australian Business Number for the authorised entity | No |

### 200_GET_Common_Customer  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| data | object |  | Yes |
| links | [Links_Object](#links_object) |  | Yes |
| meta | [Meta_Object](#meta_object) |  | Yes |

### 200_GET_Common_Customer_Detailed  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| data | object |  | Yes |
| links | [Links_Object](#links_object) |  | Yes |
| meta | [Meta_Object](#meta_object) |  | Yes |

### Person_Object  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| lastUpdateTime | string (DateTimeString) | The date and time that this record was last updated by the customer.  If no update has occurred then this date should reflect the initial creation date for the data | Yes |
| firstName | string | For people with single names this field need not be present.  The single name should be in the lastName field | No |
| lastName | string | For people with single names the single name should be in this field | Yes |
| middleNames | [ string ] | Field is mandatory but array may be empty | Yes |
| prefix | string | Also known as title or salutation.  The prefix to the name (e.g. Mr, Mrs, Ms, Miss, Sir, etc) | No |
| suffix | string | Used for a trailing suffix to the name (e.g. Jr) | No |
| occupationCode | string | Occupation code as defined by the ANZSCO  v1.2 Standard Classification of Occupations | No |

### PersonDetail_Object  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| lastUpdateTime | string (DateTimeString) | The date and time that this record was last updated by the customer.  If no update has occurred then this date should reflect the initial creation date for the data | Yes |
| firstName | string | For people with single names this field need not be present.  The single name should be in the lastName field | No |
| lastName | string | For people with single names the single name should be in this field | Yes |
| middleNames | [ string ] | Field is mandatory but array may be empty | Yes |
| prefix | string | Also known as title or salutation.  The prefix to the name (e.g. Mr, Mrs, Ms, Miss, Sir, etc) | No |
| suffix | string | Used for a trailing suffix to the name (e.g. Jr) | No |
| occupationCode | string | Occupation code as defined by the ANZSCO  v1.2 Standard Classification of Occupations | No |
| phoneNumbers | [ [PhoneNumber](#phonenumber) ] | At least one record is required | Yes |
| emailAddresses | [ [EmailAddress](#emailaddress) ] | May be empty | Yes |
| physicalAddresses | [ [PhysicalAddress_Object](#physicaladdress_object) ] | Must contain at least one address. One and only one address may have the purpose of REGISTERED. Zero or one, and no more than one, record may have the purpose of MAIL. If zero then the REGISTERED address is to be used for mail | Yes |

### Organisation_Object  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| lastUpdateTime | string (DateTimeString) | The date and time that this record was last updated by the customer. If no update has occurred then this date should reflect the initial creation date for the data | Yes |
| agentFirstName | string | The first name of the individual providing access on behalf of the organisation. For people with single names this field need not be present.  The single name should be in the lastName field | No |
| agentLastName | string | The last name of the individual providing access on behalf of the organisation. For people with single names the single name should be in this field | Yes |
| agentRole | string | The role of the individual identified as the agent who is providing authorisation.  Expected to be used for display.  Default to “Unspecified” if the role is not known | Yes |
| businessName | string | Name of the organisation | Yes |
| legalName | string | Legal name, if different to the business name | No |
| shortName | string | Short name used for communication, if  different to the business name | No |
| abn | string | Australian Business Number for the organisation | No |
| acn | string | Australian Company Number for the organisation. Required only if an ACN is applicable for the organisation type | No |
| isACNCRegistered | boolean | True if registered with the ACNC.  False if not. Absent or null if not confirmed. | No |
| industryCode | string | ANZSIC (2006) code for the organisation. | No |
| organisationType | string | Legal organisation type | Yes |
| registeredCountry | string | Enumeration with values from ISO 3166 Alpha-3 country codes.  Assumed to be AUS if absent | No |
| establishmentDate | string (DateTimeString) | The date the organisation described was established | No |

### OrganisationDetail_Object  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| lastUpdateTime | string (DateTimeString) | The date and time that this record was last updated by the customer. If no update has occurred then this date should reflect the initial creation date for the data | Yes |
| agentFirstName | string | The first name of the individual providing access on behalf of the organisation. For people with single names this field need not be present.  The single name should be in the lastName field | No |
| agentLastName | string | The last name of the individual providing access on behalf of the organisation. For people with single names the single name should be in this field | Yes |
| agentRole | string | The role of the individual identified as the agent who is providing authorisation.  Expected to be used for display.  Default to “Unspecified” if the role is not known | Yes |
| businessName | string | Name of the organisation | Yes |
| legalName | string | Legal name, if different to the business name | No |
| shortName | string | Short name used for communication, if  different to the business name | No |
| abn | string | Australian Business Number for the organisation | No |
| acn | string | Australian Company Number for the organisation. Required only if an ACN is applicable for the organisation type | No |
| isACNCRegistered | boolean | True if registered with the ACNC.  False if not. Absent or null if not confirmed. | No |
| industryCode | string | ANZSIC (2006) code for the organisation. | No |
| organisationType | string | Legal organisation type | Yes |
| registeredCountry | string | Enumeration with values from ISO 3166 Alpha-3 country codes.  Assumed to be AUS if absent | No |
| establishmentDate | string (DateTimeString) | The date the organisation described was established | No |
| physicalAddress | [ [PhysicalAddress_Object](#physicaladdress_object) ] | Must contain at least one address. One and only one address may have the purpose of REGISTERED. Zero or one, and no more than one, record may have the purpose of MAIL. If zero then the REGISTERED address is to be used for mail | Yes |

### PhoneNumber  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| isPreferred | boolean | Required to be true for one and only one entry to indicate the preferred phone number | Yes |
| purpose | string | The purpose of the number as specified by the customer | Yes |
| countryCode | string | If absent, assumed to be Australia (+61). The + should be included | No |
| areaCode | string | Required for non Mobile Phones, if field is present and refers to Australian code - the leading 0 should be omitted. | No |
| number | string | The actual phone number, with leading zeros as appropriate | Yes |
| extension | string | An extension number (if applicable) | No |
| fullNumber | string | Fully formatted phone number with country code, area code, number and extension incorporated. Formatted according to section 5.1.4. of RFC 3966 | Yes |

### EmailAddress  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| isPreferred | boolean | Required for one and only one email record in the collection. Denotes the default email address | Yes |
| purpose | string | The purpose for the email, as specified by the customer (Enumeration) | Yes |
| address | string | A correctly formatted email address, as defined by the addr_spec format in RFC_5322 | Yes |

### PhysicalAddress_Object  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| purpose | string | Enumeration of values indicating the purpose of the physical address | Yes |
| address$type | string | The type of address object present | Yes |
| simple | [SimpleAddress_Object](#simpleaddress_object) |  | No |
| paf | [PAFAddress_Object](#pafaddress_object) |  | No |

### SimpleAddress_Object  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| mailingName | string | Name of the individual or business formatted for inclusion in an address used for physical mail | No |
| addressLine1 | string | First line of the standard address object | Yes |
| addressLine2 | string | Second line of the standard address object | No |
| addressLine3 | string | Third line of the standard address object | No |
| postcode | string | Mandatory for Australian addresses | No |
| city | string | Name of the city or locality | Yes |
| state | string | Free text if the country is not Australia. If country is Australia then must be one of the values defined by the ISO 3166:AU standard | Yes |
| country | string | A valid ISO 3166 Alpha-3 country code | No |

### PAFAddress_Object  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| PAFAddress_Object | object |  |  |

### Links_Object  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| self | string (URIString) | Fully qualified link to this API call | No |

### Meta_Object  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Meta_Object | object |  |  |

### LinksPaginated_Object  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| self | string (URIString) | Fully qualified link to this API call | No |
| first | string (URIString) | URI to the first page of this set. Mandatory if this response is not the first page | No |
| prev | string (URIString) | URI to the first previous page of this set. Mandatory if this response is not the first page | No |
| next | string (URIString) | URI to the first next page of this set. Mandatory if this response is not the last page | No |
| last | string (URIString) | URI to the first last page of this set. Mandatory if this response is not the last page | No |

### MetaPaginated_Object  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| totalRecords | integer (NaturalNumber) | The total number of records in the full set | No |
| totalPages | integer (NaturalNumber) | The total number of pages in the full set | No |

### 422_Errors  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| errors | [ object ] |  | Yes |