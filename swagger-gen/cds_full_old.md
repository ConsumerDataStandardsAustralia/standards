

<h1 id="consumer-data-standards-banking-apis">Banking APIs</h1>

## Get Accounts

<a id="opIdlistAccounts"></a>

> Code samples

```http
GET https://data.provider.com.au/cds-au/v1/banking/accounts HTTP/1.1
Host: data.provider.com.au
Accept: application/json

```

```javascript
var headers = {
  'Accept':'application/json'

};

$.ajax({
  url: 'https://data.provider.com.au/cds-au/v1/banking/accounts',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`GET /banking/accounts`

Obtain a list of accounts

<h3 id="get-accounts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|open-status|query|string|Optional|Used to filter results according to open/closed status. Values can be OPEN, CLOSED or ALL. If absent then ALL is assumed|
|is-owned|query|string|Optional|Filters accounts based on whether they are owned by the authorised customer|
|product-category|query|string|Optional|Used to filter results on the productCategory field applicable to accounts. Any one of the valid values for this field can be supplied. If absent then all accounts returned.|
|page|query|integer|Optional|Page of results to request (standard pagination)|
|page-size|query|integer|Optional|Page size to request. Default is 25 (standard pagination)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|open-status|OPEN|
|open-status|CLOSED|
|open-status|ALL|
|is-owned|OWNED|
|is-owned|NOT_OWNED|
|is-owned|ALL|
|product-category|PERS_AT_CALL_DEPOSITS|
|product-category|BUS_AT_CALL_DEPOSITS|
|product-category|TERM_DEPOSITS|
|product-category|RESIDENTIAL_MORTGAGES|
|product-category|PERS_CRED_AND_CHRG_CARDS|
|product-category|BUS_CRED_AND_CHRG_CARDS|
|product-category|PERS_LOANS|
|product-category|PERS_LEASING|
|product-category|BUS_LEASING|
|product-category|TRADE_FINANCE|
|product-category|PERS_OVERDRAFT|
|product-category|BUS_OVERDRAFT|
|product-category|BUS_LOANS|
|product-category|FOREIGN_CURR_AT_CALL_DEPOSITS|
|product-category|FOREIGN_CURR_TERM_DEPOSITS|
|product-category|FOREIGN_CURR_LOAN|
|product-category|FOREIGN_CURRRENCT_OVERDRAFT|
|product-category|TRAVEL_CARD|

> Example responses

> 200 Response

```json
{
  "data": {
    "accounts": [
      {
        "accountId": "string",
        "displayName": "string",
        "nickname": "string",
        "maskedNumber": "string",
        "openStatus": "OPEN",
        "isOwned": "true",
        "productCategory": "PERS_AT_CALL_DEPOSITS",
        "productName": "string"
      }
    ]
  },
  "links": {
    "self": "string",
    "first": "string",
    "prev": "string",
    "next": "string",
    "last": "string"
  },
  "meta": {
    "totalRecords": 0,
    "totalPages": 0
  }
}
```

<h3 id="get-accounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[ResponseBankingAccounts](#schemaresponsebankingaccounts)|

<aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
bank_basic_accounts
</aside>

## Get Account Detail

<a id="opIdgetAccountDetail"></a>

> Code samples

```http
GET https://data.provider.com.au/cds-au/v1/banking/accounts/{accountId} HTTP/1.1
Host: data.provider.com.au
Accept: application/json

```

```javascript
var headers = {
  'Accept':'application/json'

};

$.ajax({
  url: 'https://data.provider.com.au/cds-au/v1/banking/accounts/{accountId}',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`GET /banking/accounts/{accountId}`

Obtain detailed information on a single account

<h3 id="get-account-detail-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string(ASCIIString)|Mandatory|A tokenised identifier for the account which is unique but not shareable|

> Example responses

> 200 Response

```json
{
  "data": {
    "accountId": "string",
    "displayName": "string",
    "nickname": "string",
    "maskedNumber": "string",
    "openStatus": "OPEN",
    "isOwned": "true",
    "productCategory": "PERS_AT_CALL_DEPOSITS",
    "productName": "string",
    "bsb": "string",
    "accountNumber": "string",
    "bundleName": "string",
    "specificAccountUType": "termDeposit",
    "termDeposit": {
      "lodgementDate": "string",
      "maturityDate": "string",
      "maturityAmount": "string",
      "maturityCurrency": "string",
      "maturityInstructions": "ROLLED_OVER"
    },
    "creditCard": {
      "minPaymentAmount": "string",
      "paymentDueAmount": "string",
      "paymentCurrency": "string",
      "paymentDueDate": "string"
    },
    "loan": {
      "originalStartDate": "string",
      "originalLoanAmount": "string",
      "originalLoanCurrency": "string",
      "loanEndDate": "string",
      "nextInstalmentDate": "string",
      "minInstalmentAmount": "string",
      "minInstalmentCurrency": "string",
      "maxRedraw": "string",
      "maxRedrawCurrency": "string",
      "minRedraw": "string",
      "minRedrawCurrency": "string",
      "offsetAccountEnabled": true,
      "offsetAccountIds": [
        "string"
      ],
      "repaymentFrequency": "string",
      "repaymentType": "INTEREST_ONLY"
    },
    "features": [
      {
        "featureType": "CARD_ACCESS",
        "additionalValue": "string"
      }
    ],
    "fees": [
      {
        "name": "string",
        "feeType": "PERIODIC",
        "amount": "string",
        "balanceRate": "string",
        "transactionRate": "string",
        "currency": "string",
        "additionalValue": "string",
        "additionalInfo": "string",
        "additionalInfoUri": "string",
        "discounts": [
          {
            "description": "string",
            "discountType": "BALANCE",
            "amount": "string",
            "additionalValue": "string"
          }
        ]
      }
    ],
    "depositRates": [
      {
        "depositRateType": "FIXED",
        "rate": "string",
        "additionalValue": "string",
        "additionalInfo": "string",
        "additionalInfoUri": "string"
      }
    ],
    "lendingRates": [
      {
        "lendingRateType": "FIXED",
        "rate": "string",
        "additionalValue": "string",
        "additionalInfo": "string",
        "additionalInfoUri": "string"
      }
    ],
    "address": {
      "addressUType": "simple",
      "simple": {
        "mailingName": "string",
        "addressLine1": "string",
        "addressLine2": "string",
        "addressLine3": "string",
        "postcode": "string",
        "city": "string",
        "state": "string",
        "country": "string"
      },
      "paf": {
        "dpid": "string",
        "thoroughfareNumber1": 0,
        "thoroughfareNumber1Suffix": "string",
        "thoroughfareNumber2": 0,
        "thoroughfareNumber2Suffix": "string",
        "flatUnitNumber": "string",
        "floorLevelNumber": "string",
        "lotNumber": 0,
        "buildingName1": "string",
        "buildingName2": "string",
        "streetName": "string",
        "streetType": "string",
        "streetSuffix": "string",
        "postalDeliveryType": "string",
        "postalDeliveryNumber": 0,
        "postalDeliveryNumberPrefix": "string",
        "postalDeliveryNumberSuffix": "string",
        "localityName": "string",
        "postcode": "string",
        "state": "string"
      }
    }
  },
  "links": {
    "self": "string"
  },
  "meta": {}
}
```

<h3 id="get-account-detail-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[ResponseBankingAccount](#schemaresponsebankingaccount)|

<aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
bank_detailed_accounts
</aside>

## Get Bulk Balances

<a id="opIdlistBalancesBulk"></a>

> Code samples

```http
GET https://data.provider.com.au/cds-au/v1/banking/accounts/balances HTTP/1.1
Host: data.provider.com.au
Accept: application/json

```

```javascript
var headers = {
  'Accept':'application/json'

};

$.ajax({
  url: 'https://data.provider.com.au/cds-au/v1/banking/accounts/balances',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`GET /banking/accounts/balances`

Obtain balances for multiple, filtered accounts

<h3 id="get-bulk-balances-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|open-status|query|string|Optional|Used to filter results according to open/closed status. Values can be OPEN, CLOSED or ALL. If absent then ALL is assumed|
|is-owned|query|string|Optional|Filters accounts based on whether they are owned by the authorised customer|
|product-category|query|string|Optional|Used to filter results on the productCategory field applicable to accounts. Any one of the valid values for this field can be supplied. If absent then all accounts returned.|
|page|query|integer|Optional|Page of results to request (standard pagination)|
|page-size|query|integer|Optional|Page size to request. Default is 25 (standard pagination)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|open-status|OPEN|
|open-status|CLOSED|
|open-status|ALL|
|is-owned|OWNED|
|is-owned|NOT_OWNED|
|is-owned|ALL|
|product-category|PERS_AT_CALL_DEPOSITS|
|product-category|BUS_AT_CALL_DEPOSITS|
|product-category|TERM_DEPOSITS|
|product-category|RESIDENTIAL_MORTGAGES|
|product-category|PERS_CRED_AND_CHRG_CARDS|
|product-category|BUS_CRED_AND_CHRG_CARDS|
|product-category|PERS_LOANS|
|product-category|PERS_LEASING|
|product-category|BUS_LEASING|
|product-category|TRADE_FINANCE|
|product-category|PERS_OVERDRAFT|
|product-category|BUS_OVERDRAFT|
|product-category|BUS_LOANS|
|product-category|FOREIGN_CURR_AT_CALL_DEPOSITS|
|product-category|FOREIGN_CURR_TERM_DEPOSITS|
|product-category|FOREIGN_CURR_LOAN|
|product-category|FOREIGN_CURRRENCT_OVERDRAFT|
|product-category|TRAVEL_CARD|

> Example responses

> 200 Response

```json
{
  "data": {
    "balances": [
      {
        "accountId": "string",
        "balanceUType": "deposit",
        "deposit": {
          "currentBalance": {
            "amount": "string",
            "currency": "string"
          },
          "availableBalance": {
            "amount": "string",
            "currency": "string"
          }
        },
        "lending": {
          "accountBalance": {
            "amount": "string",
            "currency": "string"
          },
          "availableBalance": {
            "amount": "string",
            "currency": "string"
          },
          "creditLimit": {
            "amount": "string",
            "currency": "string"
          },
          "amortisedLimit": {
            "amount": "string",
            "currency": "string"
          }
        },
        "purses": [
          {
            "amount": "string",
            "currency": "string"
          }
        ]
      }
    ]
  },
  "links": {
    "self": "string",
    "first": "string",
    "prev": "string",
    "next": "string",
    "last": "string"
  },
  "meta": {
    "totalRecords": 0,
    "totalPages": 0
  }
}
```

<h3 id="get-bulk-balances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|resource listing the financial balances for the account|[ResponseBankingAccountsBalances](#schemaresponsebankingaccountsbalances)|

<aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
bank_basic_accounts
</aside>

## Get Balances For Specific Accounts

<a id="opIdlistBalancesSpecificAccounts"></a>

> Code samples

```http
POST https://data.provider.com.au/cds-au/v1/banking/accounts/balances HTTP/1.1
Host: data.provider.com.au
Content-Type: application/json
Accept: application/json

```

```javascript
var headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'

};

$.ajax({
  url: 'https://data.provider.com.au/cds-au/v1/banking/accounts/balances',
  method: 'post',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`POST /banking/accounts/balances`

Obtain balances for a specified list of accounts

> Body parameter

```json
{
  "data": {
    "accountIds": [
      "string"
    ]
  },
  "meta": {}
}
```

<h3 id="get-balances-for-specific-accounts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[RequestAccountIds](#schemarequestaccountids)|Mandatory|The list of account IDs to obtain information for|

> Example responses

> 200 Response

```json
{
  "data": {
    "balances": [
      {
        "accountId": "string",
        "balanceUType": "deposit",
        "deposit": {
          "currentBalance": {
            "amount": "string",
            "currency": "string"
          },
          "availableBalance": {
            "amount": "string",
            "currency": "string"
          }
        },
        "lending": {
          "accountBalance": {
            "amount": "string",
            "currency": "string"
          },
          "availableBalance": {
            "amount": "string",
            "currency": "string"
          },
          "creditLimit": {
            "amount": "string",
            "currency": "string"
          },
          "amortisedLimit": {
            "amount": "string",
            "currency": "string"
          }
        },
        "purses": [
          {
            "amount": "string",
            "currency": "string"
          }
        ]
      }
    ]
  },
  "links": {
    "self": "string",
    "first": "string",
    "prev": "string",
    "next": "string",
    "last": "string"
  },
  "meta": {
    "totalRecords": 0,
    "totalPages": 0
  }
}
```

<h3 id="get-balances-for-specific-accounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[ResponseBankingAccountsBalances](#schemaresponsebankingaccountsbalances)|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|The request was well formed but was unable to be processed due to business logic specific to the request|[ErrorList](#schemaerrorlist)|

<aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
bank_basic_accounts
</aside>

## Get Transactions For Account

<a id="opIdgetTransactions"></a>

> Code samples

```http
GET https://data.provider.com.au/cds-au/v1/banking/accounts/{accountId}/transactions HTTP/1.1
Host: data.provider.com.au
Accept: application/json

```

```javascript
var headers = {
  'Accept':'application/json'

};

$.ajax({
  url: 'https://data.provider.com.au/cds-au/v1/banking/accounts/{accountId}/transactions',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`GET /banking/accounts/{accountId}/transactions`

Obtain transactions for a specific account
Some general notes that apply to all end points that retrieve transactions:

- Where multiple transactions are returned transactions should be ordered according to effective date in descending order
- As the date and time for a transaction can alter depending on status and transaction type two separate date/times are included in the payload. There are still some scenarios where neither of these time stamps is available. For the purpose of filtering and ordering it is expected that the provider will use the “effective” date/time which will be defined as:
		- Posted date/time if available, then
		- Execution date/time if available, then
		- A reasonable date/time nominated by the data provider using internal data structures
- For transaction amounts it should be assumed that a negative value indicates a reduction of the available balance on the account while a positive value indicates an increase in the available balance on the account

<h3 id="get-transactions-for-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string(ASCIIString)|Mandatory|ID of the account to get transactions for.  Must have previously been returned by one of the account list end points.|
|start-time|query|string(DateTimeString)|Optional|Constrain the transaction history request to transactions with effective time at or after this date/time. If absent defaults to current time. Format is aligned to DateTimeString common type|
|end-time|query|string(DateTimeString)|Optional|Constrain the transaction history request to transactions with effective time at or before this date/time. If absent defaults to start-time plus 100 days. Format is aligned to DateTimeString common type|
|min-amount|query|string(AmountString)|Optional|Filter transactions to only transactions with amounts higher or equal to than this amount|
|max-amount|query|string(AmountString)|Optional|Filter transactions to only transactions with amounts less than or equal to than this amount|
|text|query|string|Optional|Filter transactions to only transactions where this string value is found as a substring of either the reference or description fields. Format is arbitrary ASCII string|
|page|query|integer|Optional|Page of results to request (standard pagination)|
|page-size|query|integer|Optional|Page size to request. Default is 25 (standard pagination)|

> Example responses

> 200 Response

```json
{
  "data": {
    "transactions": [
      {
        "accountId": "string",
        "transactionId": "string",
        "isDetailAvailable": true,
        "type": "FEE",
        "status": "PENDING",
        "description": "string",
        "postingDateTime": "string",
        "valueDateTime": "string",
        "executionDateTime": "string",
        "amount": "string",
        "currency": "string",
        "reference": "string",
        "merchantName": "string",
        "merchantCategoryCode": "string",
        "billerCode": "string",
        "billerName": "string",
        "crn": "string",
        "apcaNumber": "string"
      }
    ]
  },
  "links": {
    "self": "string",
    "first": "string",
    "prev": "string",
    "next": "string",
    "last": "string"
  },
  "meta": {
    "totalRecords": 0,
    "totalPages": 0
  }
}
```

<h3 id="get-transactions-for-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[ResponseBankingTransactions](#schemaresponsebankingtransactions)|

<aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
bank_transactions
</aside>

## Get Transaction Detail

<a id="opIdgetTransactionDetail"></a>

> Code samples

```http
GET https://data.provider.com.au/cds-au/v1/banking/accounts/{accountId}/transactions/{transactionId} HTTP/1.1
Host: data.provider.com.au
Accept: application/json

```

```javascript
var headers = {
  'Accept':'application/json'

};

$.ajax({
  url: 'https://data.provider.com.au/cds-au/v1/banking/accounts/{accountId}/transactions/{transactionId}',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`GET /banking/accounts/{accountId}/transactions/{transactionId}`

Obtain detailed information on a transaction for a specific account

<h3 id="get-transaction-detail-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string(ASCIIString)|Mandatory|The account id token that is used to uniquely represent the account|
|transactionId|path|string(ASCIIString)|Mandatory|The unique identifier for the specific transaction for which details are being requested|

> Example responses

> 200 Response

```json
{
  "data": {
    "transaction": {
      "accountId": "string",
      "transactionId": "string",
      "isDetailAvailable": true,
      "type": "FEE",
      "status": "PENDING",
      "description": "string",
      "postingDateTime": "string",
      "valueDateTime": "string",
      "executionDateTime": "string",
      "amount": "string",
      "currency": "string",
      "reference": "string",
      "merchantName": "string",
      "merchantCategoryCode": "string",
      "billerCode": "string",
      "billerName": "string",
      "crn": "string",
      "apcaNumber": "string",
      "extendedData": {
        "payer": "string",
        "payee": "string",
        "extensionUType": "extendedDescription",
        "extendedDescription": "string",
        "serviceId": "X2P1.01"
      }
    }
  },
  "links": {
    "self": "string"
  },
  "meta": {}
}
```

<h3 id="get-transaction-detail-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[ResponseBankingTransactionDetail](#schemaresponsebankingtransactiondetail)|

<aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
bank_transactions
</aside>

## Get Transactions For Multiple Accounts

<a id="opIdlistTransactionsBulk"></a>

> Code samples

```http
GET https://data.provider.com.au/cds-au/v1/banking/accounts/transactions HTTP/1.1
Host: data.provider.com.au
Accept: application/json

```

```javascript
var headers = {
  'Accept':'application/json'

};

$.ajax({
  url: 'https://data.provider.com.au/cds-au/v1/banking/accounts/transactions',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`GET /banking/accounts/transactions`

Obtain transactions for multiple, filtered accounts

<h3 id="get-transactions-for-multiple-accounts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|open-status|query|string|Optional|Used to filter results according to open/closed status. Values can be OPEN, CLOSED or ALL. If absent then ALL is assumed|
|is-owned|query|string|Optional|Filters accounts based on whether they are owned by the authorised customer|
|product-category|query|string|Optional|Used to filter results on the productCategory field applicable to accounts. Any one of the valid values for this field can be supplied. If absent then all accounts returned.|
|start-time|query|string(DateTimeString)|Optional|Constrain the transaction history request to transactions with effective time at or after this date/time. If absent defaults to current time. Format is aligned to DateTimeString common type|
|end-time|query|string(DateTimeString)|Optional|Constrain the transaction history request to transactions with effective time at or before this date/time. If absent defaults to start-time plus 100 days. Format is aligned to DateTimeString common type|
|min-amount|query|string(AmountString)|Optional|Filter transactions to only transactions with amounts higher or equal to than this amount|
|max-amount|query|string(AmountString)|Optional|Filter transactions to only transactions with amounts less than or equal to than this amount|
|text|query|string|Optional|Filter transactions to only transactions where this string value is found as a substring of either the reference or description fields. Format is arbitrary ASCII string|
|page|query|integer|Optional|Page of results to request (standard pagination)|
|page-size|query|integer|Optional|Page size to request. Default is 25 (standard pagination)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|open-status|OPEN|
|open-status|CLOSED|
|open-status|ALL|
|is-owned|OWNED|
|is-owned|NOT_OWNED|
|is-owned|ALL|
|product-category|PERS_AT_CALL_DEPOSITS|
|product-category|BUS_AT_CALL_DEPOSITS|
|product-category|TERM_DEPOSITS|
|product-category|RESIDENTIAL_MORTGAGES|
|product-category|PERS_CRED_AND_CHRG_CARDS|
|product-category|BUS_CRED_AND_CHRG_CARDS|
|product-category|PERS_LOANS|
|product-category|PERS_LEASING|
|product-category|BUS_LEASING|
|product-category|TRADE_FINANCE|
|product-category|PERS_OVERDRAFT|
|product-category|BUS_OVERDRAFT|
|product-category|BUS_LOANS|
|product-category|FOREIGN_CURR_AT_CALL_DEPOSITS|
|product-category|FOREIGN_CURR_TERM_DEPOSITS|
|product-category|FOREIGN_CURR_LOAN|
|product-category|FOREIGN_CURRRENCT_OVERDRAFT|
|product-category|TRAVEL_CARD|

> Example responses

> 200 Response

```json
{
  "data": {
    "transactions": [
      {
        "accountId": "string",
        "transactionId": "string",
        "isDetailAvailable": true,
        "type": "FEE",
        "status": "PENDING",
        "description": "string",
        "postingDateTime": "string",
        "valueDateTime": "string",
        "executionDateTime": "string",
        "amount": "string",
        "currency": "string",
        "reference": "string",
        "merchantName": "string",
        "merchantCategoryCode": "string",
        "billerCode": "string",
        "billerName": "string",
        "crn": "string",
        "apcaNumber": "string"
      }
    ]
  },
  "links": {
    "self": "string",
    "first": "string",
    "prev": "string",
    "next": "string",
    "last": "string"
  },
  "meta": {
    "totalRecords": 0,
    "totalPages": 0
  }
}
```

<h3 id="get-transactions-for-multiple-accounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[ResponseBankingTransactions](#schemaresponsebankingtransactions)|

<aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
bank_transactions
</aside>

## Get Transactions For Specific Accounts

<a id="opIdlistTransactionsSpecificAccounts"></a>

> Code samples

```http
POST https://data.provider.com.au/cds-au/v1/banking/accounts/transactions HTTP/1.1
Host: data.provider.com.au
Content-Type: application/json
Accept: application/json

```

```javascript
var headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'

};

$.ajax({
  url: 'https://data.provider.com.au/cds-au/v1/banking/accounts/transactions',
  method: 'post',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`POST /banking/accounts/transactions`

Obtain transactions for a specified list of transactions.

> Body parameter

```json
{
  "data": {
    "accountIds": [
      "string"
    ]
  },
  "meta": {}
}
```

<h3 id="get-transactions-for-specific-accounts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start-time|query|string(DateTimeString)|Optional|Constrain the transaction history request to transactions with effective time at or after this date/time. If absent defaults to current time. Format is aligned to DateTimeString common type|
|end-time|query|string(DateTimeString)|Optional|Constrain the transaction history request to transactions with effective time at or before this date/time. If absent defaults to start-time plus 100 days. Format is aligned to DateTimeString common type|
|min-amount|query|string(AmountString)|Optional|Filter transactions to only transactions with amounts higher or equal to than this amount|
|max-amount|query|string(AmountString)|Optional|Filter transactions to only transactions with amounts less than or equal to than this amount|
|text|query|string|Optional|Filter transactions to only transactions where this string value is found as a substring of either the reference or description fields. Format is arbitrary ASCII string|
|page|query|integer|Optional|Page of results to request (standard pagination)|
|page-size|query|integer|Optional|Page size to request. Default is 25 (standard pagination)|
|body|body|[RequestAccountIds](#schemarequestaccountids)|Mandatory|The list of account IDs to obtain information for|

> Example responses

> 200 Response

```json
{
  "data": {
    "transactions": [
      {
        "accountId": "string",
        "transactionId": "string",
        "isDetailAvailable": true,
        "type": "FEE",
        "status": "PENDING",
        "description": "string",
        "postingDateTime": "string",
        "valueDateTime": "string",
        "executionDateTime": "string",
        "amount": "string",
        "currency": "string",
        "reference": "string",
        "merchantName": "string",
        "merchantCategoryCode": "string",
        "billerCode": "string",
        "billerName": "string",
        "crn": "string",
        "apcaNumber": "string"
      }
    ]
  },
  "links": {
    "self": "string",
    "first": "string",
    "prev": "string",
    "next": "string",
    "last": "string"
  },
  "meta": {
    "totalRecords": 0,
    "totalPages": 0
  }
}
```

<h3 id="get-transactions-for-specific-accounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[ResponseBankingTransactions](#schemaresponsebankingtransactions)|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|The request was well formed but was unable to be processed due to business logic specific to the request|[ErrorList](#schemaerrorlist)|

<aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
bank_transactions
</aside>

## Get Direct Debits For Account

<a id="opIdlistDirectDebits"></a>

> Code samples

```http
GET https://data.provider.com.au/cds-au/v1/banking/accounts/{accountId}/direct-debits HTTP/1.1
Host: data.provider.com.au
Accept: application/json

```

```javascript
var headers = {
  'Accept':'application/json'

};

$.ajax({
  url: 'https://data.provider.com.au/cds-au/v1/banking/accounts/{accountId}/direct-debits',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`GET /banking/accounts/{accountId}/direct-debits`

Obtain direct debit authorisations for a specific account

<h3 id="get-direct-debits-for-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string(ASCIIString)|Mandatory|ID of the account to get direct debit authorisations for.  Must have previously been returned by one of the account list end points.|
|page|query|integer|Optional|Page of results to request (standard pagination)|
|page-size|query|integer|Optional|Page size to request. Default is 25 (standard pagination)|

> Example responses

> 200 Response

```json
{
  "data": {
    "directDebitAuthorisations": [
      {
        "accountId": "string",
        "authorisedEntity": {
          "name": "string",
          "financialInstitution": "string",
          "abn": "string",
          "acn": "string",
          "arbn": "string"
        },
        "lastDebitDateTime": "string",
        "lastDebitAmount": "string"
      }
    ]
  },
  "links": {
    "self": "string",
    "first": "string",
    "prev": "string",
    "next": "string",
    "last": "string"
  },
  "meta": {
    "totalRecords": 0,
    "totalPages": 0
  }
}
```

<h3 id="get-direct-debits-for-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[ResponseBankingDirectDebits](#schemaresponsebankingdirectdebits)|

<aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
bank_detailed_accounts
</aside>

## Get Bulk Direct Debits

<a id="opIdlistDirectDebitsBulk"></a>

> Code samples

```http
GET https://data.provider.com.au/cds-au/v1/banking/accounts/direct-debits HTTP/1.1
Host: data.provider.com.au
Accept: application/json

```

```javascript
var headers = {
  'Accept':'application/json'

};

$.ajax({
  url: 'https://data.provider.com.au/cds-au/v1/banking/accounts/direct-debits',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`GET /banking/accounts/direct-debits`

Obtain direct debit authorisations for multiple, filtered accounts

<h3 id="get-bulk-direct-debits-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|is-owned|query|string|Optional|Filters accounts based on whether they are owned by the authorised customer|
|product-category|query|string|Optional|Used to filter results on the productCategory field applicable to accounts. Any one of the valid values for this field can be supplied. If absent then all accounts returned.|
|page|query|integer|Optional|Page of results to request (standard pagination)|
|page-size|query|integer|Optional|Page size to request. Default is 25 (standard pagination)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|is-owned|OWNED|
|is-owned|NOT_OWNED|
|is-owned|ALL|
|product-category|PERS_AT_CALL_DEPOSITS|
|product-category|BUS_AT_CALL_DEPOSITS|
|product-category|TERM_DEPOSITS|
|product-category|RESIDENTIAL_MORTGAGES|
|product-category|PERS_CRED_AND_CHRG_CARDS|
|product-category|BUS_CRED_AND_CHRG_CARDS|
|product-category|PERS_LOANS|
|product-category|PERS_LEASING|
|product-category|BUS_LEASING|
|product-category|TRADE_FINANCE|
|product-category|PERS_OVERDRAFT|
|product-category|BUS_OVERDRAFT|
|product-category|BUS_LOANS|
|product-category|FOREIGN_CURR_AT_CALL_DEPOSITS|
|product-category|FOREIGN_CURR_TERM_DEPOSITS|
|product-category|FOREIGN_CURR_LOAN|
|product-category|FOREIGN_CURRRENCT_OVERDRAFT|
|product-category|TRAVEL_CARD|

> Example responses

> 200 Response

```json
{
  "data": {
    "directDebitAuthorisations": [
      {
        "accountId": "string",
        "authorisedEntity": {
          "name": "string",
          "financialInstitution": "string",
          "abn": "string",
          "acn": "string",
          "arbn": "string"
        },
        "lastDebitDateTime": "string",
        "lastDebitAmount": "string"
      }
    ]
  },
  "links": {
    "self": "string",
    "first": "string",
    "prev": "string",
    "next": "string",
    "last": "string"
  },
  "meta": {
    "totalRecords": 0,
    "totalPages": 0
  }
}
```

<h3 id="get-bulk-direct-debits-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[ResponseBankingDirectDebits](#schemaresponsebankingdirectdebits)|

<aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
bank_detailed_accounts
</aside>

## Get Direct Debits For Specific Accounts

<a id="opIdlistDirectDebitsSpecificAccounts"></a>

> Code samples

```http
POST https://data.provider.com.au/cds-au/v1/banking/accounts/direct-debits HTTP/1.1
Host: data.provider.com.au
Content-Type: application/json
Accept: application/json

```

```javascript
var headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'

};

$.ajax({
  url: 'https://data.provider.com.au/cds-au/v1/banking/accounts/direct-debits',
  method: 'post',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`POST /banking/accounts/direct-debits`

Obtain direct debit authorisations for a specified list of accounts

> Body parameter

```json
{
  "data": {
    "accountIds": [
      "string"
    ]
  },
  "meta": {}
}
```

<h3 id="get-direct-debits-for-specific-accounts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[RequestAccountIds](#schemarequestaccountids)|Mandatory|The list of account IDs to obtain information for|

> Example responses

> 200 Response

```json
{
  "data": {
    "directDebitAuthorisations": [
      {
        "accountId": "string",
        "authorisedEntity": {
          "name": "string",
          "financialInstitution": "string",
          "abn": "string",
          "acn": "string",
          "arbn": "string"
        },
        "lastDebitDateTime": "string",
        "lastDebitAmount": "string"
      }
    ]
  },
  "links": {
    "self": "string",
    "first": "string",
    "prev": "string",
    "next": "string",
    "last": "string"
  },
  "meta": {
    "totalRecords": 0,
    "totalPages": 0
  }
}
```

<h3 id="get-direct-debits-for-specific-accounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[ResponseBankingDirectDebits](#schemaresponsebankingdirectdebits)|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|The request was well formed but was unable to be processed due to business logic specific to the request|[ErrorList](#schemaerrorlist)|

<aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
bank_detailed_accounts
</aside>

## Get Payees

<a id="opIdlistPayees"></a>

> Code samples

```http
GET https://data.provider.com.au/cds-au/v1/banking/payees HTTP/1.1
Host: data.provider.com.au
Accept: application/json

```

```javascript
var headers = {
  'Accept':'application/json'

};

$.ajax({
  url: 'https://data.provider.com.au/cds-au/v1/banking/payees',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`GET /banking/payees`

Obtain a list of pre-registered payees

<h3 id="get-payees-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type|query|string|Optional|Filter on the payee type field.  In addition to normal type field values, ALL can be specified to retrieve all payees.  If absent the assumed value is ALL|
|page|query|integer|Optional|Page of results to request (standard pagination)|
|page-size|query|integer|Optional|Page size to request. Default is 25 (standard pagination)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|DOMESTIC|
|type|INTERNATIONAL|
|type|BILLER|
|type|ALL|

> Example responses

> 200 Response

```json
{
  "data": {
    "payees": [
      {
        "payeeId": "string",
        "nickname": "string",
        "description": "string",
        "type": "DOMESTIC",
        "creationDate": "string"
      }
    ]
  },
  "links": {
    "self": "string",
    "first": "string",
    "prev": "string",
    "next": "string",
    "last": "string"
  },
  "meta": {
    "totalRecords": 0,
    "totalPages": 0
  }
}
```

<h3 id="get-payees-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[ResponseBankingPayees](#schemaresponsebankingpayees)|

<aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
bank_basic_accounts
</aside>

## Get Payee Detail

<a id="opIdgetPayeeDetail"></a>

> Code samples

```http
GET https://data.provider.com.au/cds-au/v1/banking/payees/{payeeId} HTTP/1.1
Host: data.provider.com.au
Accept: application/json

```

```javascript
var headers = {
  'Accept':'application/json'

};

$.ajax({
  url: 'https://data.provider.com.au/cds-au/v1/banking/payees/{payeeId}',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`GET /banking/payees/{payeeId}`

Obtain detailed information on a single payee

<h3 id="get-payee-detail-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|payeeId|path|string(ASCIIString)|Mandatory|The ID used to locate the details of a particular payee|

> Example responses

> 200 Response

```json
{
  "data": {
    "payeeId": "string",
    "nickname": "string",
    "description": "string",
    "type": "DOMESTIC",
    "creationDate": "string",
    "payeeUType": "domestic",
    "domestic": {
      "payeeAccountUType": "account",
      "account": {
        "accountName": "string",
        "bsb": "string",
        "accountNumber": "string"
      },
      "card": {
        "cardNumber": "string"
      },
      "payId": {
        "name": "string",
        "identifier": "string",
        "type": "EMAIL"
      }
    },
    "biller": {
      "billerCode": "string",
      "crn": "string",
      "billerName": "string"
    },
    "international": {
      "beneficiaryDetails": {
        "name": "string",
        "country": "string",
        "message": "string"
      },
      "bankDetails": {
        "country": "string",
        "accountNumber": "string",
        "bankAddress": {
          "name": "string",
          "address": "string"
        },
        "beneficiaryBankBIC": "string",
        "fedWireNumber": "string",
        "sortCode": "string",
        "chipNumber": "string",
        "routingNumber": "string",
        "legalEntityIdentifier": "string"
      }
    }
  },
  "links": {
    "self": "string"
  },
  "meta": {}
}
```

<h3 id="get-payee-detail-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[ResponseBankingPayeeDetails](#schemaresponsebankingpayeedetails)|

<aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
bank_payees
</aside>

## Get Products

<a id="opIdlistProducts"></a>

> Code samples

```http
GET https://data.provider.com.au/cds-au/v1/banking/products HTTP/1.1
Host: data.provider.com.au
Accept: application/json

```

```javascript
var headers = {
  'Accept':'application/json'

};

$.ajax({
  url: 'https://data.provider.com.au/cds-au/v1/banking/products',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`GET /banking/products`

Obtain a list of products that are currently openly offered to the market

Note that the results returned by this end point are expected to be ordered according to updated-since

### Conventions
In the product reference payloads there are a number of recurring conventions that are explained here, in one place.

#### Arrays Of Features

In the product detail payload there are a number of arrays articulating generic features, constraints, prices, etc. The intent of these arrays is as follows:

- Each element in an array has the same structure so that clients can reliably interpret the payloads
- Each element as a type element that is an enumeration of the specific aspect of a product being described, such as types of fees.
- Each element has a field name additionalValue. This is a generic field with contents that will vary based on the type of object being described. The contents of this field for the ADDITIONAL_CARDS feature is the number of cards allowed while the contents of this field for the MAX_LIMIT constraint would be the maximum credit limit allowed for the product.
- An element in these arrays of the same type may appear more than once. For instance, a product may offer two separate loyalty programs that the customer can select from. A fixed term mortgage may have different rates for different term lengths.
- An element in these arrays may contain an additionalInfo and additionalInfoUri field. The additionalInfo field is used to provide displayable text clarifying the purpose of the element in some way when the product is presented to a customer. The additionalInfoUri provides a link to externally hosted information specifically relevant to that feature of the product.

#### URIs To More Information

As the complexities and nuances of a financial product can not easily be fully expressed in a data structure without a high degree of complexity it is necessary to provide additional reference information that a potential customer can access so that they are fully informed of the features and implications of the product. The payloads for product reference therefore contain numerous fields that are provided to allow the product provider to describe the product more fully using a web page hosted on their on channels.

These URIs do not need to all link to different pages. If desired, they can all link to a single hosted page and use difference HTML anchors to focus on a specific topic such as eligibility or fees.

#### Linkage To Accounts
From the moment that a customer applies for a product and an account is created the account and the product that spawned it will diverge. Rates and features of the product may change and a discount may be negotiated for the account.

For this reason productCategory is a common field between accounts and products but there is not common linkage field specific to a product that appears within the account payloads.

Similarly, many of the fields and objects in the product payload will appear in the account detail payload but the full sets of options are not identical between the two entities.

#### Dates
It is expected that data consumers needing this data will call relatively frequently to ensure the data they have is representative of the current offering from a bank. To minimise the volume and frequency of these calls the ability to set a lastUpdated field with the date and time of the last update to this product is included. A call for a list of products can then be filtered to only return products that have been updated since the last time that data was obtained.

In addition the concept of effective date and time has also been included. This allows for a product to be marked for obsolescence, or introduction, from a certain time without the need for an update to show that a product has been changed. The inclusion of these dates also removes the need to represent deleted products in the payload. Products that are no long offered can be marked not effective for a few weeks before they are then removed from the product set as an option entirely.

<h3 id="get-products-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|effective|query|string|Optional|Allows for the filtering of products based on whether the current time is within the period of time defined as effective by the effectiveFrom and effectiveTo fields.  If absent defaults to 'CURRENT'|
|updated-since|query|string(DateTimeString)|Optional|Only include products that have been updated after the specified date and time. If absent defaults to include all products|
|brand|query|string|Optional|Filter results based on a specific brand|
|product-category|query|string|Optional|Used to filter results on the productCategory field applicable to accounts. Any one of the valid values for this field can be supplied. If absent then all accounts returned.|
|page|query|integer|Optional|Page of results to request (standard pagination)|
|page-size|query|integer|Optional|Page size to request. Default is 25 (standard pagination)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|effective|CURRENT|
|effective|FUTURE|
|effective|ALL|
|product-category|PERS_AT_CALL_DEPOSITS|
|product-category|BUS_AT_CALL_DEPOSITS|
|product-category|TERM_DEPOSITS|
|product-category|RESIDENTIAL_MORTGAGES|
|product-category|PERS_CRED_AND_CHRG_CARDS|
|product-category|BUS_CRED_AND_CHRG_CARDS|
|product-category|PERS_LOANS|
|product-category|PERS_LEASING|
|product-category|BUS_LEASING|
|product-category|TRADE_FINANCE|
|product-category|PERS_OVERDRAFT|
|product-category|BUS_OVERDRAFT|
|product-category|BUS_LOANS|
|product-category|FOREIGN_CURR_AT_CALL_DEPOSITS|
|product-category|FOREIGN_CURR_TERM_DEPOSITS|
|product-category|FOREIGN_CURR_LOAN|
|product-category|FOREIGN_CURRRENCT_OVERDRAFT|
|product-category|TRAVEL_CARD|

> Example responses

> 200 Response

```json
{
  "data": {
    "products": [
      {
        "productId": "string",
        "effectiveFrom": "string",
        "effectiveTo": "string",
        "lastUpdated": "string",
        "productCategory": "PERS_AT_CALL_DEPOSITS",
        "name": "string",
        "description": "string",
        "brand": "string",
        "brandName": "string",
        "applicationUri": "string",
        "isTailored": true,
        "additionalInformation": {
          "overviewUri": "string",
          "termsUri": "string",
          "eligibilityUri": "string",
          "feesAndPricingUri": "string",
          "bundleUri": "string"
        }
      }
    ]
  },
  "links": {
    "self": "string",
    "first": "string",
    "prev": "string",
    "next": "string",
    "last": "string"
  },
  "meta": {
    "totalRecords": 0,
    "totalPages": 0
  }
}
```

<h3 id="get-products-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[ResponseBankingProducts](#schemaresponsebankingproducts)|

<aside class="success">
This operation does not require authentication
</aside>

## Get Product Detail

<a id="opIdgetProductDetail"></a>

> Code samples

```http
GET https://data.provider.com.au/cds-au/v1/banking/products/{productId} HTTP/1.1
Host: data.provider.com.au
Accept: application/json

```

```javascript
var headers = {
  'Accept':'application/json'

};

$.ajax({
  url: 'https://data.provider.com.au/cds-au/v1/banking/products/{productId}',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`GET /banking/products/{productId}`

Obtain detailed information on a single product offered openly to the market

<h3 id="get-product-detail-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|productId|path|string(ASCIIString)|Mandatory|ID of the specific product requested|

> Example responses

> 200 Response

```json
{
  "data": {
    "productId": "string",
    "effectiveFrom": "string",
    "effectiveTo": "string",
    "lastUpdated": "string",
    "productCategory": "PERS_AT_CALL_DEPOSITS",
    "name": "string",
    "description": "string",
    "brand": "string",
    "brandName": "string",
    "applicationUri": "string",
    "isTailored": true,
    "additionalInformation": {
      "overviewUri": "string",
      "termsUri": "string",
      "eligibilityUri": "string",
      "feesAndPricingUri": "string",
      "bundleUri": "string"
    },
    "bundles": [
      {
        "name": "string",
        "description": "string",
        "additionalInfoUri": "string",
        "productIds": [
          "string"
        ]
      }
    ],
    "features": [
      {
        "featureType": "CARD_ACCESS",
        "additionalValue": "string"
      }
    ],
    "constraints": [
      {
        "constraintType": "MIN_BALANCE",
        "additionalValue": "string"
      }
    ],
    "eligibility": [
      {
        "eligibilityType": "BUSINESS",
        "additionalValue": "string",
        "additionalInfo": "string",
        "additionalInfoUri": "string"
      }
    ],
    "fees": [
      {
        "name": "string",
        "feeType": "PERIODIC",
        "amount": "string",
        "balanceRate": "string",
        "transactionRate": "string",
        "currency": "string",
        "additionalValue": "string",
        "additionalInfo": "string",
        "additionalInfoUri": "string",
        "discounts": [
          {
            "description": "string",
            "discountType": "BALANCE",
            "amount": "string",
            "additionalValue": "string"
          }
        ]
      }
    ],
    "depositRates": [
      {
        "depositRateType": "FIXED",
        "rate": "string",
        "additionalValue": "string",
        "additionalInfo": "string",
        "additionalInfoUri": "string"
      }
    ],
    "lendingRates": [
      {
        "lendingRateType": "FIXED",
        "rate": "string",
        "additionalValue": "string",
        "additionalInfo": "string",
        "additionalInfoUri": "string"
      }
    ]
  },
  "links": {
    "self": "string"
  },
  "meta": {}
}
```

<h3 id="get-product-detail-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[ResponseBankingProduct](#schemaresponsebankingproduct)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="consumer-data-standards-common-apis">Common APIs</h1>

## Get Customer

<a id="opIdgetCustomer"></a>

> Code samples

```http
GET https://data.provider.com.au/cds-au/v1/common/customer HTTP/1.1
Host: data.provider.com.au
Accept: application/json

```

```javascript
var headers = {
  'Accept':'application/json'

};

$.ajax({
  url: 'https://data.provider.com.au/cds-au/v1/common/customer',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`GET /common/customer`

Obtain basic information on the customer that has authorised the current session

> Example responses

> 200 Response

```json
{
  "data": {
    "customerUType": "person",
    "person": {
      "lastUpdateTime": "string",
      "firstName": "string",
      "lastName": "string",
      "middleNames": [
        "string"
      ],
      "prefix": "string",
      "suffix": "string",
      "occupationCode": "string"
    },
    "organisation": {
      "lastUpdateTime": "string",
      "agentFirstName": "string",
      "agentLastName": "string",
      "agentRole": "string",
      "businessName": "string",
      "legalName": "string",
      "shortName": "string",
      "abn": "string",
      "acn": "string",
      "isACNCRegistered": true,
      "industryCode": "string",
      "organisationType": "SOLE_TRADER",
      "registeredCountry": "string",
      "establishmentDate": "string"
    }
  },
  "links": {
    "self": "string"
  },
  "meta": {}
}
```

<h3 id="get-customer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[ResponseCommonCustomer](#schemaresponsecommoncustomer)|

<aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
common_basic_customer
</aside>

## Get Customer Detail

<a id="opIdgetCustomerDetail"></a>

> Code samples

```http
GET https://data.provider.com.au/cds-au/v1/common/customer/detail HTTP/1.1
Host: data.provider.com.au
Accept: application/json

```

```javascript
var headers = {
  'Accept':'application/json'

};

$.ajax({
  url: 'https://data.provider.com.au/cds-au/v1/common/customer/detail',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`GET /common/customer/detail`

Obtain detailed information on the authorised customer within the current session.

> Example responses

> 200 Response

```json
{
  "data": {
    "customerUType": "person",
    "person": {
      "lastUpdateTime": "string",
      "firstName": "string",
      "lastName": "string",
      "middleNames": [
        "string"
      ],
      "prefix": "string",
      "suffix": "string",
      "occupationCode": "string",
      "phoneNumbers": [
        {
          "isPreferred": true,
          "purpose": "MOBILE",
          "countryCode": "string",
          "areaCode": "string",
          "number": "string",
          "extension": "string",
          "fullNumber": "string"
        }
      ],
      "emailAddresses": [
        {
          "isPreferred": true,
          "purpose": "WORK",
          "address": "string"
        }
      ],
      "physicalAddresses": [
        {
          "purpose": "REGISTERED",
          "addressUType": "simple",
          "simple": {
            "mailingName": "string",
            "addressLine1": "string",
            "addressLine2": "string",
            "addressLine3": "string",
            "postcode": "string",
            "city": "string",
            "state": "string",
            "country": "string"
          },
          "paf": {
            "dpid": "string",
            "thoroughfareNumber1": 0,
            "thoroughfareNumber1Suffix": "string",
            "thoroughfareNumber2": 0,
            "thoroughfareNumber2Suffix": "string",
            "flatUnitNumber": "string",
            "floorLevelNumber": "string",
            "lotNumber": 0,
            "buildingName1": "string",
            "buildingName2": "string",
            "streetName": "string",
            "streetType": "string",
            "streetSuffix": "string",
            "postalDeliveryType": "string",
            "postalDeliveryNumber": 0,
            "postalDeliveryNumberPrefix": "string",
            "postalDeliveryNumberSuffix": "string",
            "localityName": "string",
            "postcode": "string",
            "state": "string"
          }
        }
      ]
    },
    "organisation": {
      "lastUpdateTime": "string",
      "agentFirstName": "string",
      "agentLastName": "string",
      "agentRole": "string",
      "businessName": "string",
      "legalName": "string",
      "shortName": "string",
      "abn": "string",
      "acn": "string",
      "isACNCRegistered": true,
      "industryCode": "string",
      "organisationType": "SOLE_TRADER",
      "registeredCountry": "string",
      "establishmentDate": "string",
      "physicalAddresses": [
        {
          "purpose": "REGISTERED",
          "addressUType": "simple",
          "simple": {
            "mailingName": "string",
            "addressLine1": "string",
            "addressLine2": "string",
            "addressLine3": "string",
            "postcode": "string",
            "city": "string",
            "state": "string",
            "country": "string"
          },
          "paf": {
            "dpid": "string",
            "thoroughfareNumber1": 0,
            "thoroughfareNumber1Suffix": "string",
            "thoroughfareNumber2": 0,
            "thoroughfareNumber2Suffix": "string",
            "flatUnitNumber": "string",
            "floorLevelNumber": "string",
            "lotNumber": 0,
            "buildingName1": "string",
            "buildingName2": "string",
            "streetName": "string",
            "streetType": "string",
            "streetSuffix": "string",
            "postalDeliveryType": "string",
            "postalDeliveryNumber": 0,
            "postalDeliveryNumberPrefix": "string",
            "postalDeliveryNumberSuffix": "string",
            "localityName": "string",
            "postcode": "string",
            "state": "string"
          }
        }
      ]
    }
  },
  "links": {
    "self": "string"
  },
  "meta": {}
}
```

<h3 id="get-customer-detail-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[ResponseCommonCustomerDetailed](#schemaresponsecommoncustomerdetailed)|

<aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
common_detailed_customer
</aside>

# Schemas

<h2 id="tocSrequestaccountids">RequestAccountIds</h2>

<a id="schemarequestaccountids"></a>

```json
{
  "data": {
    "accountIds": [
      "string"
    ]
  },
  "meta": {}
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|Mandatory|none|none|
|» accountIds|[string]|Mandatory|none|none|
|meta|[Meta](#schemameta)|Mandatory|none|none|

<h2 id="tocSresponsebankingproducts">ResponseBankingProducts</h2>

<a id="schemaresponsebankingproducts"></a>

```json
{
  "data": {
    "products": [
      {
        "productId": "string",
        "effectiveFrom": "string",
        "effectiveTo": "string",
        "lastUpdated": "string",
        "productCategory": "PERS_AT_CALL_DEPOSITS",
        "name": "string",
        "description": "string",
        "brand": "string",
        "brandName": "string",
        "applicationUri": "string",
        "isTailored": true,
        "additionalInformation": {
          "overviewUri": "string",
          "termsUri": "string",
          "eligibilityUri": "string",
          "feesAndPricingUri": "string",
          "bundleUri": "string"
        }
      }
    ]
  },
  "links": {
    "self": "string",
    "first": "string",
    "prev": "string",
    "next": "string",
    "last": "string"
  },
  "meta": {
    "totalRecords": 0,
    "totalPages": 0
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|Mandatory|none|none|
|» products|[[Product](#schemaproduct)]|Mandatory|none|none|
|links|[LinksPaginated](#schemalinkspaginated)|Mandatory|none|none|
|meta|[MetaPaginated](#schemametapaginated)|Mandatory|none|none|

<h2 id="tocSproduct">Product</h2>

<a id="schemaproduct"></a>

```json
{
  "productId": "string",
  "effectiveFrom": "string",
  "effectiveTo": "string",
  "lastUpdated": "string",
  "productCategory": "PERS_AT_CALL_DEPOSITS",
  "name": "string",
  "description": "string",
  "brand": "string",
  "brandName": "string",
  "applicationUri": "string",
  "isTailored": true,
  "additionalInformation": {
    "overviewUri": "string",
    "termsUri": "string",
    "eligibilityUri": "string",
    "feesAndPricingUri": "string",
    "bundleUri": "string"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|productId|string(ASCIIString)|Mandatory|none|A provider specific unique identifier for this product. This identifier must be unique to a product but does not otherwise need to adhere to ID permanence guidelines.|
|effectiveFrom|string(DateTimeString)|Optional|none|The date and time from which this product is effective (ie. is available for origination).  Used to enable the articulation of products to the regime before they are available for customers to originate|
|effectiveTo|string(DateTimeString)|Optional|none|The date and time at which this product will be retired and will no longer be offered.  Used to enable the managed deprecation of products|
|lastUpdated|string(DateTimeString)|Mandatory|none|The last date and time that the information for this product was changed (or the creation date for the product if it has never been altered)|
|productCategory|[EnumProductCategory](#schemaenumproductcategory)|Mandatory|none|The list of available product categories for categorising products and accounts|
|name|string|Mandatory|none|The display name of the product|
|description|string|Mandatory|none|A description of the product|
|brand|string|Mandatory|none|A label of the brand for the product. Able to be used for filtering. For data providers with single brands this value is still required|
|brandName|string|Optional|none|An optional display name of the brand|
|applicationUri|string(URIString)|Optional|none|A link to the an application web page where this product can be applied for.|
|isTailored|boolean|Mandatory|none|Indicates whether the product is specifically tailored to a circumstance.  In this case fees and prices are significantly negotiated depending on context. While all products are open to a degree of tailoring this flag indicates that tailoring is expected and thus that the provision of specific fees and rates is not applicable|
|additionalInformation|object|Optional|none|none|
|» overviewUri|string(URIString)|Optional|none|General overview of the product|
|» termsUri|string(URIString)|Optional|none|Terms and conditions for the product|
|» eligibilityUri|string(URIString)|Optional|none|Eligibility rules and criteria for the product|
|» feesAndPricingUri|string(URIString)|Optional|none|Description of fees, pricing, discounts, exemptions and bonuses for the product|
|» bundleUri|string(URIString)|Optional|none|Description of a bundle that this product can be part of|

<h2 id="tocSresponsebankingproduct">ResponseBankingProduct</h2>

<a id="schemaresponsebankingproduct"></a>

```json
{
  "data": {
    "productId": "string",
    "effectiveFrom": "string",
    "effectiveTo": "string",
    "lastUpdated": "string",
    "productCategory": "PERS_AT_CALL_DEPOSITS",
    "name": "string",
    "description": "string",
    "brand": "string",
    "brandName": "string",
    "applicationUri": "string",
    "isTailored": true,
    "additionalInformation": {
      "overviewUri": "string",
      "termsUri": "string",
      "eligibilityUri": "string",
      "feesAndPricingUri": "string",
      "bundleUri": "string"
    },
    "bundles": [
      {
        "name": "string",
        "description": "string",
        "additionalInfoUri": "string",
        "productIds": [
          "string"
        ]
      }
    ],
    "features": [
      {
        "featureType": "CARD_ACCESS",
        "additionalValue": "string"
      }
    ],
    "constraints": [
      {
        "constraintType": "MIN_BALANCE",
        "additionalValue": "string"
      }
    ],
    "eligibility": [
      {
        "eligibilityType": "BUSINESS",
        "additionalValue": "string",
        "additionalInfo": "string",
        "additionalInfoUri": "string"
      }
    ],
    "fees": [
      {
        "name": "string",
        "feeType": "PERIODIC",
        "amount": "string",
        "balanceRate": "string",
        "transactionRate": "string",
        "currency": "string",
        "additionalValue": "string",
        "additionalInfo": "string",
        "additionalInfoUri": "string",
        "discounts": [
          {
            "description": "string",
            "discountType": "BALANCE",
            "amount": "string",
            "additionalValue": "string"
          }
        ]
      }
    ],
    "depositRates": [
      {
        "depositRateType": "FIXED",
        "rate": "string",
        "additionalValue": "string",
        "additionalInfo": "string",
        "additionalInfoUri": "string"
      }
    ],
    "lendingRates": [
      {
        "lendingRateType": "FIXED",
        "rate": "string",
        "additionalValue": "string",
        "additionalInfo": "string",
        "additionalInfoUri": "string"
      }
    ]
  },
  "links": {
    "self": "string"
  },
  "meta": {}
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[ProductDetail](#schemaproductdetail)|Mandatory|none|none|
|links|[Links](#schemalinks)|Mandatory|none|none|
|meta|[Meta](#schemameta)|Mandatory|none|none|

<h2 id="tocSproductdetail">ProductDetail</h2>

<a id="schemaproductdetail"></a>

```json
{
  "productId": "string",
  "effectiveFrom": "string",
  "effectiveTo": "string",
  "lastUpdated": "string",
  "productCategory": "PERS_AT_CALL_DEPOSITS",
  "name": "string",
  "description": "string",
  "brand": "string",
  "brandName": "string",
  "applicationUri": "string",
  "isTailored": true,
  "additionalInformation": {
    "overviewUri": "string",
    "termsUri": "string",
    "eligibilityUri": "string",
    "feesAndPricingUri": "string",
    "bundleUri": "string"
  },
  "bundles": [
    {
      "name": "string",
      "description": "string",
      "additionalInfoUri": "string",
      "productIds": [
        "string"
      ]
    }
  ],
  "features": [
    {
      "featureType": "CARD_ACCESS",
      "additionalValue": "string"
    }
  ],
  "constraints": [
    {
      "constraintType": "MIN_BALANCE",
      "additionalValue": "string"
    }
  ],
  "eligibility": [
    {
      "eligibilityType": "BUSINESS",
      "additionalValue": "string",
      "additionalInfo": "string",
      "additionalInfoUri": "string"
    }
  ],
  "fees": [
    {
      "name": "string",
      "feeType": "PERIODIC",
      "amount": "string",
      "balanceRate": "string",
      "transactionRate": "string",
      "currency": "string",
      "additionalValue": "string",
      "additionalInfo": "string",
      "additionalInfoUri": "string",
      "discounts": [
        {
          "description": "string",
          "discountType": "BALANCE",
          "amount": "string",
          "additionalValue": "string"
        }
      ]
    }
  ],
  "depositRates": [
    {
      "depositRateType": "FIXED",
      "rate": "string",
      "additionalValue": "string",
      "additionalInfo": "string",
      "additionalInfoUri": "string"
    }
  ],
  "lendingRates": [
    {
      "lendingRateType": "FIXED",
      "rate": "string",
      "additionalValue": "string",
      "additionalInfo": "string",
      "additionalInfoUri": "string"
    }
  ]
}

```

### Properties

*allOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[Product](#schemaproduct)|Optional|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|Optional|none|none|
|» bundles|[[ProductBundles](#schemaproductbundles)]|Optional|none|none|
|» features|[[ProductFeatures](#schemaproductfeatures)]|Optional|none|none|
|» constraints|[[ProductConstraints](#schemaproductconstraints)]|Optional|none|none|
|» eligibility|[[ProductEligibility](#schemaproducteligibility)]|Optional|none|none|
|» fees|[[ProductFees](#schemaproductfees)]|Optional|none|none|
|» depositRates|[[ProductDepositRates](#schemaproductdepositrates)]|Optional|none|none|
|» lendingRates|[[ProductLendingRates](#schemaproductlendingrates)]|Optional|none|none|

<h2 id="tocSproductbundles">ProductBundles</h2>

<a id="schemaproductbundles"></a>

```json
{
  "name": "string",
  "description": "string",
  "additionalInfoUri": "string",
  "productIds": [
    "string"
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|Mandatory|none|Name of the bundle|
|description|string|Mandatory|none|Description of the bundle|
|additionalInfoUri|string(URIString)|Optional|none|Link to a web page with more information on the bundle criteria and benefits|
|productIds|[string]|Mandatory|none|Array of product IDs for products included in the bundle|

<h2 id="tocSproductfeatures">ProductFeatures</h2>

<a id="schemaproductfeatures"></a>

```json
{
  "featureType": "CARD_ACCESS",
  "additionalValue": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|featureType|string|Mandatory|none|The type of feature described|
|additionalValue|string|Conditional|none|Generic field containing additional information relevant to the featureType specified. Whether mandatory or not is dependent on the value of featureType|

#### Enumerated Values

|Property|Value|
|---|---|
|featureType|CARD_ACCESS|
|featureType|ADDITIONAL_CARDS|
|featureType|UNLIMITED_TXNS|
|featureType|FREE_TXNS|
|featureType|FREE_TXNS_ALLOWANCE|
|featureType|LOYALTY_PROGRAM|
|featureType|OFFSET|
|featureType|OVERDRAFT|
|featureType|REDRAW|
|featureType|INSURANCE|
|featureType|BALANCE_TRANSFERS|
|featureType|INTEREST_FREE|
|featureType|INTEREST_FREE_TRANSFERS|
|featureType|DIGITAL_WALLET|
|featureType|DIGITAL_BANKING|
|featureType|NPP_PAYID|
|featureType|NPP_ENABLED|
|featureType|DONATE_INTEREST|
|featureType|BILL_PAYMENT|

<h2 id="tocSproductconstraints">ProductConstraints</h2>

<a id="schemaproductconstraints"></a>

```json
{
  "constraintType": "MIN_BALANCE",
  "additionalValue": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|constraintType|string|Mandatory|none|The type of constraint described.  See the next section for an overview of valid values and their meaning|
|additionalValue|string|Conditional|none|Generic field containing additional information relevant to the constraintType specified.  Whether mandatory or not is dependent on the value of constraintType|

#### Enumerated Values

|Property|Value|
|---|---|
|constraintType|MIN_BALANCE|
|constraintType|OPENING_BALANCE|
|constraintType|MAX_LIMIT|
|constraintType|MIN_LIMIT|

<h2 id="tocSproducteligibility">ProductEligibility</h2>

<a id="schemaproducteligibility"></a>

```json
{
  "eligibilityType": "BUSINESS",
  "additionalValue": "string",
  "additionalInfo": "string",
  "additionalInfoUri": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eligibilityType|string|Mandatory|none|The type of eligibility criteria described.  See the next section for an overview of valid values and their meaning|
|additionalValue|string|Conditional|none|Generic field containing additional information relevant to the eligibilityType specified.  Whether mandatory or not is dependent on the value of eligibilityType|
|additionalInfo|string|Conditional|none|Display text providing more information on the eligibility criteria. Mandatory if the eligibilityType field is set to OTHER|
|additionalInfoUri|string(URIString)|Optional|none|Link to a web page with more information on this eligibility criteria|

#### Enumerated Values

|Property|Value|
|---|---|
|eligibilityType|BUSINESS|
|eligibilityType|PENSION_RECIPIENT|
|eligibilityType|MIN_AGE|
|eligibilityType|MAX_AGE|
|eligibilityType|MIN_INCOME|
|eligibilityType|MIN_TURNOVER|
|eligibilityType|STAFF|
|eligibilityType|STUDENT|
|eligibilityType|EMPLOYMENT_STATUS|
|eligibilityType|RESIDENCY_STATUS|
|eligibilityType|OTHER|

<h2 id="tocSproductfees">ProductFees</h2>

<a id="schemaproductfees"></a>

```json
{
  "name": "string",
  "feeType": "PERIODIC",
  "amount": "string",
  "balanceRate": "string",
  "transactionRate": "string",
  "currency": "string",
  "additionalValue": "string",
  "additionalInfo": "string",
  "additionalInfoUri": "string",
  "discounts": [
    {
      "description": "string",
      "discountType": "BALANCE",
      "amount": "string",
      "additionalValue": "string"
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|Mandatory|none|Name of the fee|
|feeType|string|Mandatory|none|The type of fee|
|amount|string(AmountString)|Conditional|none|The amount charged for the fee. Assumed to be in AUD. One of amount, balanceRate and transactionRate is mandatory|
|balanceRate|string(RateString)|Conditional|none|A fee rate calculated based on a proportion of the balance. Assumed to be in AUD. One of amount, balanceRate and transactionRate is mandatory|
|transactionRate|string(RateString)|Conditional|none|A fee rate calculated based on a proportion of a transaction. Assumed to be in AUD. One of amount, balanceRate and transactionRate is mandatory|
|currency|string(CurrencyString)|Optional|none|The currency the fee will be charged in. Assumes AUD if absent|
|additionalValue|string|Conditional|none|Generic field containing additional information relevant to the feeType specified. Whether mandatory or not is dependent on the value of feeType|
|additionalInfo|string|Optional|none|Display text providing more information on the fee|
|additionalInfoUri|string(URIString)|Optional|none|Link to a web page with more information on this fee|
|discounts|[[ProductDiscounts](#schemaproductdiscounts)]|Optional|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|feeType|PERIODIC|
|feeType|TRANSACTION|
|feeType|ESTABLISHMENT|
|feeType|EXIT|
|feeType|OVERDRAW|
|feeType|MIN_BALANCE|
|feeType|REDRAW|
|feeType|CHEQUE_CASH|
|feeType|CHEQUE_STOP|
|feeType|CHEQUE_BOOK|
|feeType|CARD_REPLACE|
|feeType|PAPER_STATEMENT|
|feeType|OTHER_EVENT|

<h2 id="tocSproductdiscounts">ProductDiscounts</h2>

<a id="schemaproductdiscounts"></a>

```json
{
  "description": "string",
  "discountType": "BALANCE",
  "amount": "string",
  "additionalValue": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|Mandatory|none|Description of the discount|
|discountType|string|Mandatory|none|The type of discount. See the next section for an overview of valid values and their meaning|
|amount|string(AmountString)|Mandatory|none|Value of the discount. Note that the currency of the fee discount is expected to be the same as the currency of the fee itself|
|additionalValue|string|Conditional|none|Generic field containing additional information relevant to the discountType specified. Whether mandatory or not is dependent on the value of discountType|

#### Enumerated Values

|Property|Value|
|---|---|
|discountType|BALANCE|
|discountType|DEPOSITS|
|discountType|PAYMENTS|
|discountType|BUNDLE|

<h2 id="tocSproductdepositrates">ProductDepositRates</h2>

<a id="schemaproductdepositrates"></a>

```json
{
  "depositRateType": "FIXED",
  "rate": "string",
  "additionalValue": "string",
  "additionalInfo": "string",
  "additionalInfoUri": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|depositRateType|string|Mandatory|none|The type of rate (base, bonus, etc). See the next section for an overview of valid values and their meaning|
|rate|string(RateString)|Mandatory|none|The rate to be applied|
|additionalValue|string|Conditional|none|Generic field containing additional information relevant to the depositRateType specified. Whether mandatory or not is dependent on the value of depositRateType|
|additionalInfo|string|Optional|none|Display text providing more information on the fee|
|additionalInfoUri|string(URIString)|Optional|none|Link to a web page with more information on this fee|

#### Enumerated Values

|Property|Value|
|---|---|
|depositRateType|FIXED|
|depositRateType|BONUS|
|depositRateType|BUNDLE_BONUS|
|depositRateType|VARIABLE|
|depositRateType|INTRODUCTORY|

<h2 id="tocSproductlendingrates">ProductLendingRates</h2>

<a id="schemaproductlendingrates"></a>

```json
{
  "lendingRateType": "FIXED",
  "rate": "string",
  "additionalValue": "string",
  "additionalInfo": "string",
  "additionalInfoUri": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lendingRateType|string|Mandatory|none|The type of rate (fixed, variable, etc). See the next section for an overview of valid values and their meaning|
|rate|string(RateString)|Mandatory|none|The rate to be applied|
|additionalValue|string|Conditional|none|Information relevant to the lendingRateType specified.  Whether mandatory or not is dependent on the Generic field containing additional information relevant to the lendingRateType specified. Whether mandatory or not is dependent on the value of lendingRateType|
|additionalInfo|string|Optional|none|Display text providing more information on the fee.|
|additionalInfoUri|string(URIString)|Optional|none|Link to a web page with more information  on this fee|

#### Enumerated Values

|Property|Value|
|---|---|
|lendingRateType|FIXED|
|lendingRateType|INTRODUCTORY|
|lendingRateType|DISCOUNT|
|lendingRateType|PENALTY|
|lendingRateType|BUNDLE_DISCOUNT|
|lendingRateType|FLOATING|
|lendingRateType|MARKET_LINKED|
|lendingRateType|CASH_ADVANCE|
|lendingRateType|VARIABLE|
|lendingRateType|COMPARISON|

<h2 id="tocSresponsebankingaccounts">ResponseBankingAccounts</h2>

<a id="schemaresponsebankingaccounts"></a>

```json
{
  "data": {
    "accounts": [
      {
        "accountId": "string",
        "displayName": "string",
        "nickname": "string",
        "maskedNumber": "string",
        "openStatus": "OPEN",
        "isOwned": "true",
        "productCategory": "PERS_AT_CALL_DEPOSITS",
        "productName": "string"
      }
    ]
  },
  "links": {
    "self": "string",
    "first": "string",
    "prev": "string",
    "next": "string",
    "last": "string"
  },
  "meta": {
    "totalRecords": 0,
    "totalPages": 0
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|Mandatory|none|none|
|» accounts|[[Account](#schemaaccount)]|Mandatory|none|none|
|links|[LinksPaginated](#schemalinkspaginated)|Mandatory|none|none|
|meta|[MetaPaginated](#schemametapaginated)|Mandatory|none|none|

<h2 id="tocSaccount">Account</h2>

<a id="schemaaccount"></a>

```json
{
  "accountId": "string",
  "displayName": "string",
  "nickname": "string",
  "maskedNumber": "string",
  "openStatus": "OPEN",
  "isOwned": "true",
  "productCategory": "PERS_AT_CALL_DEPOSITS",
  "productName": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|string(ASCIIString)|Mandatory|none|A unique ID of the account adhering to the standards for ID permanence|
|displayName|string|Mandatory|none|The display name of the account. If a customer provided nickname is available that value should be returned|
|nickname|string|Optional|none|A customer supplied nick name for the account|
|maskedNumber|string(MaskedAccountString)|Mandatory|none|A masked version of the account. Whether BSB/Account Number, Credit Card PAN or another number this should be formatted with each digit masked and the last three digits unmasked|
|openStatus|string|Optional|none|Open or closed status for the account.  If not present then OPEN is assumed|
|isOwned|boolean|Optional|none|Flag indicating that the customer associated with the authorisation is an owner of the account.  Does not indicate sole ownership, however.  If no present then 'true' is assumed|
|productCategory|[EnumProductCategory](#schemaenumproductcategory)|Mandatory|none|The list of available product categories for categorising products and accounts|
|productName|string|Mandatory|none|A unique name or identifier for the account class for this account as defined by the account provider.  Not expected to be used for display|

#### Enumerated Values

|Property|Value|
|---|---|
|openStatus|OPEN|
|openStatus|CLOSED|

<h2 id="tocSresponsebankingaccount">ResponseBankingAccount</h2>

<a id="schemaresponsebankingaccount"></a>

```json
{
  "data": {
    "accountId": "string",
    "displayName": "string",
    "nickname": "string",
    "maskedNumber": "string",
    "openStatus": "OPEN",
    "isOwned": "true",
    "productCategory": "PERS_AT_CALL_DEPOSITS",
    "productName": "string",
    "bsb": "string",
    "accountNumber": "string",
    "bundleName": "string",
    "specificAccountUType": "termDeposit",
    "termDeposit": {
      "lodgementDate": "string",
      "maturityDate": "string",
      "maturityAmount": "string",
      "maturityCurrency": "string",
      "maturityInstructions": "ROLLED_OVER"
    },
    "creditCard": {
      "minPaymentAmount": "string",
      "paymentDueAmount": "string",
      "paymentCurrency": "string",
      "paymentDueDate": "string"
    },
    "loan": {
      "originalStartDate": "string",
      "originalLoanAmount": "string",
      "originalLoanCurrency": "string",
      "loanEndDate": "string",
      "nextInstalmentDate": "string",
      "minInstalmentAmount": "string",
      "minInstalmentCurrency": "string",
      "maxRedraw": "string",
      "maxRedrawCurrency": "string",
      "minRedraw": "string",
      "minRedrawCurrency": "string",
      "offsetAccountEnabled": true,
      "offsetAccountIds": [
        "string"
      ],
      "repaymentFrequency": "string",
      "repaymentType": "INTEREST_ONLY"
    },
    "features": [
      {
        "featureType": "CARD_ACCESS",
        "additionalValue": "string"
      }
    ],
    "fees": [
      {
        "name": "string",
        "feeType": "PERIODIC",
        "amount": "string",
        "balanceRate": "string",
        "transactionRate": "string",
        "currency": "string",
        "additionalValue": "string",
        "additionalInfo": "string",
        "additionalInfoUri": "string",
        "discounts": [
          {
            "description": "string",
            "discountType": "BALANCE",
            "amount": "string",
            "additionalValue": "string"
          }
        ]
      }
    ],
    "depositRates": [
      {
        "depositRateType": "FIXED",
        "rate": "string",
        "additionalValue": "string",
        "additionalInfo": "string",
        "additionalInfoUri": "string"
      }
    ],
    "lendingRates": [
      {
        "lendingRateType": "FIXED",
        "rate": "string",
        "additionalValue": "string",
        "additionalInfo": "string",
        "additionalInfoUri": "string"
      }
    ],
    "address": {
      "addressUType": "simple",
      "simple": {
        "mailingName": "string",
        "addressLine1": "string",
        "addressLine2": "string",
        "addressLine3": "string",
        "postcode": "string",
        "city": "string",
        "state": "string",
        "country": "string"
      },
      "paf": {
        "dpid": "string",
        "thoroughfareNumber1": 0,
        "thoroughfareNumber1Suffix": "string",
        "thoroughfareNumber2": 0,
        "thoroughfareNumber2Suffix": "string",
        "flatUnitNumber": "string",
        "floorLevelNumber": "string",
        "lotNumber": 0,
        "buildingName1": "string",
        "buildingName2": "string",
        "streetName": "string",
        "streetType": "string",
        "streetSuffix": "string",
        "postalDeliveryType": "string",
        "postalDeliveryNumber": 0,
        "postalDeliveryNumberPrefix": "string",
        "postalDeliveryNumberSuffix": "string",
        "localityName": "string",
        "postcode": "string",
        "state": "string"
      }
    }
  },
  "links": {
    "self": "string"
  },
  "meta": {}
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[AccountDetail](#schemaaccountdetail)|Mandatory|none|none|
|links|[Links](#schemalinks)|Mandatory|none|none|
|meta|[Meta](#schemameta)|Mandatory|none|none|

<h2 id="tocSaccountdetail">AccountDetail</h2>

<a id="schemaaccountdetail"></a>

```json
{
  "accountId": "string",
  "displayName": "string",
  "nickname": "string",
  "maskedNumber": "string",
  "openStatus": "OPEN",
  "isOwned": "true",
  "productCategory": "PERS_AT_CALL_DEPOSITS",
  "productName": "string",
  "bsb": "string",
  "accountNumber": "string",
  "bundleName": "string",
  "specificAccountUType": "termDeposit",
  "termDeposit": {
    "lodgementDate": "string",
    "maturityDate": "string",
    "maturityAmount": "string",
    "maturityCurrency": "string",
    "maturityInstructions": "ROLLED_OVER"
  },
  "creditCard": {
    "minPaymentAmount": "string",
    "paymentDueAmount": "string",
    "paymentCurrency": "string",
    "paymentDueDate": "string"
  },
  "loan": {
    "originalStartDate": "string",
    "originalLoanAmount": "string",
    "originalLoanCurrency": "string",
    "loanEndDate": "string",
    "nextInstalmentDate": "string",
    "minInstalmentAmount": "string",
    "minInstalmentCurrency": "string",
    "maxRedraw": "string",
    "maxRedrawCurrency": "string",
    "minRedraw": "string",
    "minRedrawCurrency": "string",
    "offsetAccountEnabled": true,
    "offsetAccountIds": [
      "string"
    ],
    "repaymentFrequency": "string",
    "repaymentType": "INTEREST_ONLY"
  },
  "features": [
    {
      "featureType": "CARD_ACCESS",
      "additionalValue": "string"
    }
  ],
  "fees": [
    {
      "name": "string",
      "feeType": "PERIODIC",
      "amount": "string",
      "balanceRate": "string",
      "transactionRate": "string",
      "currency": "string",
      "additionalValue": "string",
      "additionalInfo": "string",
      "additionalInfoUri": "string",
      "discounts": [
        {
          "description": "string",
          "discountType": "BALANCE",
          "amount": "string",
          "additionalValue": "string"
        }
      ]
    }
  ],
  "depositRates": [
    {
      "depositRateType": "FIXED",
      "rate": "string",
      "additionalValue": "string",
      "additionalInfo": "string",
      "additionalInfoUri": "string"
    }
  ],
  "lendingRates": [
    {
      "lendingRateType": "FIXED",
      "rate": "string",
      "additionalValue": "string",
      "additionalInfo": "string",
      "additionalInfoUri": "string"
    }
  ],
  "address": {
    "addressUType": "simple",
    "simple": {
      "mailingName": "string",
      "addressLine1": "string",
      "addressLine2": "string",
      "addressLine3": "string",
      "postcode": "string",
      "city": "string",
      "state": "string",
      "country": "string"
    },
    "paf": {
      "dpid": "string",
      "thoroughfareNumber1": 0,
      "thoroughfareNumber1Suffix": "string",
      "thoroughfareNumber2": 0,
      "thoroughfareNumber2Suffix": "string",
      "flatUnitNumber": "string",
      "floorLevelNumber": "string",
      "lotNumber": 0,
      "buildingName1": "string",
      "buildingName2": "string",
      "streetName": "string",
      "streetType": "string",
      "streetSuffix": "string",
      "postalDeliveryType": "string",
      "postalDeliveryNumber": 0,
      "postalDeliveryNumberPrefix": "string",
      "postalDeliveryNumberSuffix": "string",
      "localityName": "string",
      "postcode": "string",
      "state": "string"
    }
  }
}

```

### Properties

*allOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[Account](#schemaaccount)|Optional|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|Optional|none|none|
|» bsb|string|Optional|none|The unmasked BSB for the account.  Is expected to be formatted as digits only with leading zeros included and no punctuation or spaces|
|» accountNumber|string|Optional|none|The unmasked account number for the account.  Should not be supplied if the account number is a PAN requiring PCI compliance. Is expected to be formatted as digits only with leading zeros included and no punctuation or spaces|
|» bundleName|string|Optional|none|Optional field to indicate if this account is part of a bundle that is providing additional benefit for to the customer|
|» specificAccountUType|string|Optional|none|The type of structure to present account specific fields.|
|» termDeposit|[TermDepositAccount](#schematermdepositaccount)|Conditional|none|none|
|» creditCard|[CreditCardAccount](#schemacreditcardaccount)|Conditional|none|none|
|» loan|[LoanAccount](#schemaloanaccount)|Conditional|none|none|
|» features|[[AccountFeatures](#schemaaccountfeatures)]|Optional|none|none|
|» fees|[[AccountFees](#schemaaccountfees)]|Optional|none|none|
|» depositRates|[[AccountDepositRates](#schemaaccountdepositrates)]|Optional|none|none|
|» lendingRates|[[AccountLendingRates](#schemaaccountlendingrates)]|Optional|none|none|
|» address|[PhysicalAddress](#schemaphysicaladdress)|Optional|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|specificAccountUType|termDeposit|
|specificAccountUType|creditCard|
|specificAccountUType|loan|

<h2 id="tocStermdepositaccount">TermDepositAccount</h2>

<a id="schematermdepositaccount"></a>

```json
{
  "lodgementDate": "string",
  "maturityDate": "string",
  "maturityAmount": "string",
  "maturityCurrency": "string",
  "maturityInstructions": "ROLLED_OVER"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lodgementDate|string(DateString)|Mandatory|none|The lodgement date of the original deposit|
|maturityDate|string(DateString)|Mandatory|none|Maturity date for the term deposit|
|maturityAmount|string(AmountString)|Optional|none|Amount to be paid upon maturity. If absent it implies the amount to paid is variable and cannot currently be calculated|
|maturityCurrency|string(CurrencyString)|Optional|none|If absent assumes AUD|
|maturityInstructions|string|Mandatory|none|Current instructions on action to be taken at maturity|

#### Enumerated Values

|Property|Value|
|---|---|
|maturityInstructions|ROLLED_OVER|
|maturityInstructions|PAID_OUT_AT_MATURITY|

<h2 id="tocScreditcardaccount">CreditCardAccount</h2>

<a id="schemacreditcardaccount"></a>

```json
{
  "minPaymentAmount": "string",
  "paymentDueAmount": "string",
  "paymentCurrency": "string",
  "paymentDueDate": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|minPaymentAmount|string(AmountString)|Mandatory|none|The minimum payment amount due for the next card payment|
|paymentDueAmount|string(AmountString)|Mandatory|none|The amount due for the next card payment|
|paymentCurrency|string(CurrencyString)|Optional|none|If absent assumes AUD|
|paymentDueDate|string(DateString)|Mandatory|none|Date that the next payment for the card is due|

<h2 id="tocSloanaccount">LoanAccount</h2>

<a id="schemaloanaccount"></a>

```json
{
  "originalStartDate": "string",
  "originalLoanAmount": "string",
  "originalLoanCurrency": "string",
  "loanEndDate": "string",
  "nextInstalmentDate": "string",
  "minInstalmentAmount": "string",
  "minInstalmentCurrency": "string",
  "maxRedraw": "string",
  "maxRedrawCurrency": "string",
  "minRedraw": "string",
  "minRedrawCurrency": "string",
  "offsetAccountEnabled": true,
  "offsetAccountIds": [
    "string"
  ],
  "repaymentFrequency": "string",
  "repaymentType": "INTEREST_ONLY"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|originalStartDate|string(DateString)|Optional|none|Optional original start date for the loan|
|originalLoanAmount|string(AmountString)|Optional|none|Optional original loan value|
|originalLoanCurrency|string(CurrencyString)|Optional|none|If absent assumes AUD|
|loanEndDate|string(DateString)|Optional|none|Date that the loan is due to be repaid in full|
|nextInstalmentDate|string(DateString)|Optional|none|Next date that an instalment is required|
|minInstalmentAmount|string(AmountString)|Optional|none|Minimum amount of next instalment|
|minInstalmentCurrency|string(CurrencyString)|Optional|none|If absent assumes AUD|
|maxRedraw|string(AmountString)|Optional|none|Maximum amount of funds that can be redrawn. If not present redraw is not available even if the feature exists for the account|
|maxRedrawCurrency|string(CurrencyString)|Optional|none|If absent assumes AUD|
|minRedraw|string(AmountString)|Optional|none|Minimum redraw amount|
|minRedrawCurrency|string(CurrencyString)|Optional|none|If absent assumes AUD|
|offsetAccountEnabled|boolean|Optional|none|Set to true if one or more offset accounts are configured for this loan account|
|offsetAccountIds|[string]|Optional|none|The accountIDs of the configured offset accounts attached to this loan. Only offset accounts that can be accesses under the current authorisation should be included. It is expected behaviour that offsetAccountEnabled is set to true but the offsetAccountIds field is absent or empty. This represents a situation where an offset account exists but details can not be accessed under the current authorisation|
|repaymentFrequency|string|Optional|none|The expected or required repayment frequency. Formatted according to ISO 8601 Durations|
|repaymentType|string|Optional|none|Options in place for repayments. If absent defaults to PRINCIPAL_AND_INTEREST|

#### Enumerated Values

|Property|Value|
|---|---|
|repaymentType|INTEREST_ONLY|
|repaymentType|PRINCIPAL_AND_INTEREST|

<h2 id="tocSaccountfeatures">AccountFeatures</h2>

<a id="schemaaccountfeatures"></a>

```json
{
  "featureType": "CARD_ACCESS",
  "additionalValue": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|featureType|string|Mandatory|none|The type of feature described|
|additionalValue|string|Conditional|none|Generic field containing additional information relevant to the featureType specified. Whether mandatory or not is dependent on the value of featureType|

#### Enumerated Values

|Property|Value|
|---|---|
|featureType|CARD_ACCESS|
|featureType|ADDITIONAL_CARDS|
|featureType|UNLIMITED_TXNS|
|featureType|FREE_TXNS|
|featureType|FREE_TXNS_ALLOWANCE|
|featureType|LOYALTY_PROGRAM|
|featureType|OFFSET|
|featureType|OVERDRAFT|
|featureType|REDRAW|
|featureType|INSURANCE|
|featureType|BALANCE_TRANSFERS|
|featureType|INTEREST_FREE|
|featureType|INTEREST_FREE_TRANSFERS|
|featureType|DIGITAL_WALLET|
|featureType|DIGITAL_BANKING|
|featureType|NPP_PAYID|
|featureType|NPP_ENABLED|
|featureType|DONATE_INTEREST|
|featureType|BILL_PAYMENT|

<h2 id="tocSaccountfees">AccountFees</h2>

<a id="schemaaccountfees"></a>

```json
{
  "name": "string",
  "feeType": "PERIODIC",
  "amount": "string",
  "balanceRate": "string",
  "transactionRate": "string",
  "currency": "string",
  "additionalValue": "string",
  "additionalInfo": "string",
  "additionalInfoUri": "string",
  "discounts": [
    {
      "description": "string",
      "discountType": "BALANCE",
      "amount": "string",
      "additionalValue": "string"
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|Mandatory|none|Name of the fee|
|feeType|string|Mandatory|none|The type of fee|
|amount|string(AmountString)|Conditional|none|The amount charged for the fee. Assumed to be in AUD. One of amount, balanceRate and transactionRate is mandatory|
|balanceRate|string(RateString)|Conditional|none|A fee rate calculated based on a proportion of the balance. Assumed to be in AUD. One of amount, balanceRate and transactionRate is mandatory|
|transactionRate|string(RateString)|Conditional|none|A fee rate calculated based on a proportion of a transaction. Assumed to be in AUD. One of amount, balanceRate and transactionRate is mandatory|
|currency|string(CurrencyString)|Optional|none|The currency the fee will be charged in. Assumes AUD if absent|
|additionalValue|string|Conditional|none|Generic field containing additional information relevant to the feeType specified. Whether mandatory or not is dependent on the value of feeType|
|additionalInfo|string|Optional|none|Display text providing more information on the fee|
|additionalInfoUri|string(URIString)|Optional|none|Link to a web page with more information on this fee|
|discounts|[[AccountDiscounts](#schemaaccountdiscounts)]|Optional|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|feeType|PERIODIC|
|feeType|TRANSACTION|
|feeType|EXIT|
|feeType|OVERDRAW|
|feeType|MIN_BALANCE|
|feeType|REDRAW|
|feeType|CHEQUE_CASH|
|feeType|CHEQUE_STOP|
|feeType|CHEQUE_BOOK|
|feeType|CARD_REPLACE|
|feeType|PAPER_STATEMENT|
|feeType|OTHER_EVENT|

<h2 id="tocSaccountdiscounts">AccountDiscounts</h2>

<a id="schemaaccountdiscounts"></a>

```json
{
  "description": "string",
  "discountType": "BALANCE",
  "amount": "string",
  "additionalValue": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|Mandatory|none|Description of the discount|
|discountType|string|Mandatory|none|The type of discount. See the next section for an overview of valid values and their meaning|
|amount|string(AmountString)|Mandatory|none|Value of the discount. Note that the currency of the fee discount is expected to be the same as the currency of the fee itself|
|additionalValue|string|Conditional|none|Generic field containing additional information relevant to the discountType specified. Whether mandatory or not is dependent on the value of discountType|

#### Enumerated Values

|Property|Value|
|---|---|
|discountType|BALANCE|
|discountType|DEPOSITS|
|discountType|PAYMENTS|
|discountType|BUNDLE|

<h2 id="tocSaccountdepositrates">AccountDepositRates</h2>

<a id="schemaaccountdepositrates"></a>

```json
{
  "depositRateType": "FIXED",
  "rate": "string",
  "additionalValue": "string",
  "additionalInfo": "string",
  "additionalInfoUri": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|depositRateType|string|Mandatory|none|The type of rate (base, bonus, etc). See the next section for an overview of valid values and their meaning|
|rate|string(RateString)|Mandatory|none|The rate to be applied|
|additionalValue|string|Conditional|none|Generic field containing additional information relevant to the depositRateType specified. Whether mandatory or not is dependent on the value of depositRateType|
|additionalInfo|string|Optional|none|Display text providing more information on the fee|
|additionalInfoUri|string(URIString)|Optional|none|Link to a web page with more information on this fee|

#### Enumerated Values

|Property|Value|
|---|---|
|depositRateType|FIXED|
|depositRateType|BONUS|
|depositRateType|BUNDLE_BONUS|
|depositRateType|VARIABLE|
|depositRateType|INTRODUCTORY|

<h2 id="tocSaccountlendingrates">AccountLendingRates</h2>

<a id="schemaaccountlendingrates"></a>

```json
{
  "lendingRateType": "FIXED",
  "rate": "string",
  "additionalValue": "string",
  "additionalInfo": "string",
  "additionalInfoUri": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lendingRateType|string|Mandatory|none|The type of rate (fixed, variable, etc). See the next section for an overview of valid values and their meaning|
|rate|string(RateString)|Mandatory|none|The rate to be applied|
|additionalValue|string|Conditional|none|Information relevant to the lendingRateType specified.  Whether mandatory or not is dependent on the Generic field containing additional information relevant to the lendingRateType specified. Whether mandatory or not is dependent on the value of lendingRateType|
|additionalInfo|string|Optional|none|Display text providing more information on the fee.|
|additionalInfoUri|string(URIString)|Optional|none|Link to a web page with more information  on this fee|

#### Enumerated Values

|Property|Value|
|---|---|
|lendingRateType|FIXED|
|lendingRateType|INTRODUCTORY|
|lendingRateType|DISCOUNT|
|lendingRateType|PENALTY|
|lendingRateType|BUNDLE_DISCOUNT|
|lendingRateType|FLOATING|
|lendingRateType|MARKET_LINKED|
|lendingRateType|CASH_ADVANCE|
|lendingRateType|VARIABLE|
|lendingRateType|COMPARISON|

<h2 id="tocSresponsebankingtransactions">ResponseBankingTransactions</h2>

<a id="schemaresponsebankingtransactions"></a>

```json
{
  "data": {
    "transactions": [
      {
        "accountId": "string",
        "transactionId": "string",
        "isDetailAvailable": true,
        "type": "FEE",
        "status": "PENDING",
        "description": "string",
        "postingDateTime": "string",
        "valueDateTime": "string",
        "executionDateTime": "string",
        "amount": "string",
        "currency": "string",
        "reference": "string",
        "merchantName": "string",
        "merchantCategoryCode": "string",
        "billerCode": "string",
        "billerName": "string",
        "crn": "string",
        "apcaNumber": "string"
      }
    ]
  },
  "links": {
    "self": "string",
    "first": "string",
    "prev": "string",
    "next": "string",
    "last": "string"
  },
  "meta": {
    "totalRecords": 0,
    "totalPages": 0
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|Mandatory|none|none|
|» transactions|[[Transaction](#schematransaction)]|Mandatory|none|none|
|links|[LinksPaginated](#schemalinkspaginated)|Mandatory|none|none|
|meta|[MetaPaginated](#schemametapaginated)|Mandatory|none|none|

<h2 id="tocStransaction">Transaction</h2>

<a id="schematransaction"></a>

```json
{
  "accountId": "string",
  "transactionId": "string",
  "isDetailAvailable": true,
  "type": "FEE",
  "status": "PENDING",
  "description": "string",
  "postingDateTime": "string",
  "valueDateTime": "string",
  "executionDateTime": "string",
  "amount": "string",
  "currency": "string",
  "reference": "string",
  "merchantName": "string",
  "merchantCategoryCode": "string",
  "billerCode": "string",
  "billerName": "string",
  "crn": "string",
  "apcaNumber": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|string(ASCIIString)|Mandatory|none|A unique ID of the account adhering to the standards for ID permanence|
|transactionId|string(ASCIIString)|Conditional|none|A unique ID of the transaction adhering to the standards for ID permanence. This is mandatory (through hashing if necessary) unless there are specific and justifiable technical reasons why a transaction cannot be uniquely identified for a particular account type|
|isDetailAvailable|boolean|Mandatory|none|True if extended information is available using the transaction detail end point. False if extended data is not available|
|type|string|Mandatory|none|The type of the transaction|
|status|string|Mandatory|none|Status of the transaction whether pending or posted.  Note that there is currently no provision in the standards to gaurantee the ability to correlate a pending transaction with an associated posted transaction|
|description|string|Mandatory|none|The transaction description as applied by the financial institution|
|postingDateTime|string(DateTimeString)|Conditional|none|The time the transaction was posted. This field is mandatory if the transaction has status POSTED. This is the time that appears on a standard statement|
|valueDateTime|string(DateTimeString)|Optional|none|Date and time at which assets become available to the account owner in case of a credit entry, or cease to be available to the account owner in case of a debit transaction entry|
|executionDateTime|string(DateTimeString)|Optional|none|The time the transaction was executed by the originating customer, if available|
|amount|string(AmountString)|Optional|none|The value of the transaction. Negative values mean money was outgoing from the account|
|currency|string(CurrencyString)|Optional|none|The currency for the transaction amount. AUD assumed if not present|
|reference|string|Mandatory|none|The reference for the transaction provided by the originating institution.  Empty string if no data provided|
|merchantName|string|Optional|none|Name of the merchant for an outgoing payment to a merchant|
|merchantCategoryCode|string|Optional|none|The merchant category code (or MCC) for an outgoing payment to a merchant|
|billerCode|string|Optional|none|BPay Biller Code for the transaction (if available)|
|billerName|string|Optional|none|Name of the BPay biller for the transaction (if available)|
|crn|string|Optional|none|BPay CRN for the transaction (if available)|
|apcaNumber|string|Optional|none|6 Digit APCA number for the initiating institution|

#### Enumerated Values

|Property|Value|
|---|---|
|type|FEE|
|type|INTEREST_CHARGED|
|type|INTEREST_PAID|
|type|TRANSFER_OUTGOING|
|type|TRANSFER_INCOMING|
|type|PAYMENT|
|type|OTHER|
|status|PENDING|
|status|POSTED|

<h2 id="tocSresponsebankingtransactiondetail">ResponseBankingTransactionDetail</h2>

<a id="schemaresponsebankingtransactiondetail"></a>

```json
{
  "data": {
    "transaction": {
      "accountId": "string",
      "transactionId": "string",
      "isDetailAvailable": true,
      "type": "FEE",
      "status": "PENDING",
      "description": "string",
      "postingDateTime": "string",
      "valueDateTime": "string",
      "executionDateTime": "string",
      "amount": "string",
      "currency": "string",
      "reference": "string",
      "merchantName": "string",
      "merchantCategoryCode": "string",
      "billerCode": "string",
      "billerName": "string",
      "crn": "string",
      "apcaNumber": "string",
      "extendedData": {
        "payer": "string",
        "payee": "string",
        "extensionUType": "extendedDescription",
        "extendedDescription": "string",
        "serviceId": "X2P1.01"
      }
    }
  },
  "links": {
    "self": "string"
  },
  "meta": {}
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|Mandatory|none|none|
|» transaction|[TransactionDetail](#schematransactiondetail)|Mandatory|none|none|
|links|[Links](#schemalinks)|Mandatory|none|none|
|meta|[Meta](#schemameta)|Mandatory|none|none|

<h2 id="tocStransactiondetail">TransactionDetail</h2>

<a id="schematransactiondetail"></a>

```json
{
  "accountId": "string",
  "transactionId": "string",
  "isDetailAvailable": true,
  "type": "FEE",
  "status": "PENDING",
  "description": "string",
  "postingDateTime": "string",
  "valueDateTime": "string",
  "executionDateTime": "string",
  "amount": "string",
  "currency": "string",
  "reference": "string",
  "merchantName": "string",
  "merchantCategoryCode": "string",
  "billerCode": "string",
  "billerName": "string",
  "crn": "string",
  "apcaNumber": "string",
  "extendedData": {
    "payer": "string",
    "payee": "string",
    "extensionUType": "extendedDescription",
    "extendedDescription": "string",
    "serviceId": "X2P1.01"
  }
}

```

### Properties

*allOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[Transaction](#schematransaction)|Optional|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|Optional|none|none|
|» extendedData|object|Mandatory|none|none|
|»» payer|string|Conditional|none|Name or description of the originating payer.  Mandatory for inbound payment|
|»» payee|string|Conditional|none|Name or description of the target payee. Mandatory for an outbound payment|
|»» extensionUType|string|Optional|none|Optional extended data provided specific to transaction originated via NPP|
|»» extendedDescription|string|Conditional|none|An extended string description. Only present if specified by the extensionUType field|
|»» serviceId|string|Optional|none|Identifier of the applicable NPP payment service|

#### Enumerated Values

|Property|Value|
|---|---|
|extensionUType|extendedDescription|
|serviceId|X2P1.01|

<h2 id="tocSresponsebankingaccountsbalances">ResponseBankingAccountsBalances</h2>

<a id="schemaresponsebankingaccountsbalances"></a>

```json
{
  "data": {
    "balances": [
      {
        "accountId": "string",
        "balanceUType": "deposit",
        "deposit": {
          "currentBalance": {
            "amount": "string",
            "currency": "string"
          },
          "availableBalance": {
            "amount": "string",
            "currency": "string"
          }
        },
        "lending": {
          "accountBalance": {
            "amount": "string",
            "currency": "string"
          },
          "availableBalance": {
            "amount": "string",
            "currency": "string"
          },
          "creditLimit": {
            "amount": "string",
            "currency": "string"
          },
          "amortisedLimit": {
            "amount": "string",
            "currency": "string"
          }
        },
        "purses": [
          {
            "amount": "string",
            "currency": "string"
          }
        ]
      }
    ]
  },
  "links": {
    "self": "string",
    "first": "string",
    "prev": "string",
    "next": "string",
    "last": "string"
  },
  "meta": {
    "totalRecords": 0,
    "totalPages": 0
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|Mandatory|none|none|
|» balances|[[Balance](#schemabalance)]|Mandatory|none|none|
|links|[LinksPaginated](#schemalinkspaginated)|Mandatory|none|none|
|meta|[MetaPaginated](#schemametapaginated)|Mandatory|none|none|

<h2 id="tocSbalance">Balance</h2>

<a id="schemabalance"></a>

```json
{
  "accountId": "string",
  "balanceUType": "deposit",
  "deposit": {
    "currentBalance": {
      "amount": "string",
      "currency": "string"
    },
    "availableBalance": {
      "amount": "string",
      "currency": "string"
    }
  },
  "lending": {
    "accountBalance": {
      "amount": "string",
      "currency": "string"
    },
    "availableBalance": {
      "amount": "string",
      "currency": "string"
    },
    "creditLimit": {
      "amount": "string",
      "currency": "string"
    },
    "amortisedLimit": {
      "amount": "string",
      "currency": "string"
    }
  },
  "purses": [
    {
      "amount": "string",
      "currency": "string"
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|string(ASCIIString)|Mandatory|none|A unique ID of the account adhering to the standards for ID permanence|
|balanceUType|string|Mandatory|none|The type of balance object provided for the account|
|deposit|[DepositBalance](#schemadepositbalance)|Conditional|none|none|
|lending|[LendingBalance](#schemalendingbalance)|Conditional|none|none|
|purses|[[CurrencyAmount](#schemacurrencyamount)]|Conditional|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|balanceUType|deposit|
|balanceUType|lending|
|balanceUType|purses|

<h2 id="tocSdepositbalance">DepositBalance</h2>

<a id="schemadepositbalance"></a>

```json
{
  "currentBalance": {
    "amount": "string",
    "currency": "string"
  },
  "availableBalance": {
    "amount": "string",
    "currency": "string"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currentBalance|[CurrencyAmount](#schemacurrencyamount)|Mandatory|none|none|
|availableBalance|[CurrencyAmount](#schemacurrencyamount)|Mandatory|none|none|

<h2 id="tocSlendingbalance">LendingBalance</h2>

<a id="schemalendingbalance"></a>

```json
{
  "accountBalance": {
    "amount": "string",
    "currency": "string"
  },
  "availableBalance": {
    "amount": "string",
    "currency": "string"
  },
  "creditLimit": {
    "amount": "string",
    "currency": "string"
  },
  "amortisedLimit": {
    "amount": "string",
    "currency": "string"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountBalance|[CurrencyAmount](#schemacurrencyamount)|Mandatory|none|none|
|availableBalance|[CurrencyAmount](#schemacurrencyamount)|Mandatory|none|none|
|creditLimit|[CurrencyAmount](#schemacurrencyamount)|Mandatory|none|none|
|amortisedLimit|[CurrencyAmount](#schemacurrencyamount)|Optional|none|none|

<h2 id="tocScurrencyamount">CurrencyAmount</h2>

<a id="schemacurrencyamount"></a>

```json
{
  "amount": "string",
  "currency": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|string(AmountString)|Mandatory|none|The current balance of the account at this time. Should align to the current balance available via other channels such as ATM balance enquiry or Internet Banking|
|currency|string(CurrencyString)|Optional|none|If not present assumes AUD|

<h2 id="tocSresponsebankingpayees">ResponseBankingPayees</h2>

<a id="schemaresponsebankingpayees"></a>

```json
{
  "data": {
    "payees": [
      {
        "payeeId": "string",
        "nickname": "string",
        "description": "string",
        "type": "DOMESTIC",
        "creationDate": "string"
      }
    ]
  },
  "links": {
    "self": "string",
    "first": "string",
    "prev": "string",
    "next": "string",
    "last": "string"
  },
  "meta": {
    "totalRecords": 0,
    "totalPages": 0
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|Mandatory|none|none|
|» payees|[[Payee](#schemapayee)]|Mandatory|none|The list of payees returned|
|links|[LinksPaginated](#schemalinkspaginated)|Mandatory|none|none|
|meta|[MetaPaginated](#schemametapaginated)|Mandatory|none|none|

<h2 id="tocSresponsebankingpayeedetails">ResponseBankingPayeeDetails</h2>

<a id="schemaresponsebankingpayeedetails"></a>

```json
{
  "data": {
    "payeeId": "string",
    "nickname": "string",
    "description": "string",
    "type": "DOMESTIC",
    "creationDate": "string",
    "payeeUType": "domestic",
    "domestic": {
      "payeeAccountUType": "account",
      "account": {
        "accountName": "string",
        "bsb": "string",
        "accountNumber": "string"
      },
      "card": {
        "cardNumber": "string"
      },
      "payId": {
        "name": "string",
        "identifier": "string",
        "type": "EMAIL"
      }
    },
    "biller": {
      "billerCode": "string",
      "crn": "string",
      "billerName": "string"
    },
    "international": {
      "beneficiaryDetails": {
        "name": "string",
        "country": "string",
        "message": "string"
      },
      "bankDetails": {
        "country": "string",
        "accountNumber": "string",
        "bankAddress": {
          "name": "string",
          "address": "string"
        },
        "beneficiaryBankBIC": "string",
        "fedWireNumber": "string",
        "sortCode": "string",
        "chipNumber": "string",
        "routingNumber": "string",
        "legalEntityIdentifier": "string"
      }
    }
  },
  "links": {
    "self": "string"
  },
  "meta": {}
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[PayeeDetail](#schemapayeedetail)|Mandatory|none|none|
|links|[Links](#schemalinks)|Mandatory|none|none|
|meta|[Meta](#schemameta)|Mandatory|none|none|

<h2 id="tocSpayee">Payee</h2>

<a id="schemapayee"></a>

```json
{
  "payeeId": "string",
  "nickname": "string",
  "description": "string",
  "type": "DOMESTIC",
  "creationDate": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|payeeId|string(ASCIIString)|Mandatory|none|ID of the payee adhering to the rules of ID permanence|
|nickname|string|Mandatory|none|The short display name of the payee as provided by the customer|
|description|string|Optional|none|A description of the payee provided by the customer|
|type|string|Mandatory|none|The type of payee. DOMESTIC means a registered payee for domestic payments including NPP. INTERNATIONAL means a registered payee for international payments. BILLER means a registered payee for BPAY|
|creationDate|string(DateString)|Optional|none|The date the payee was created by the customer|

#### Enumerated Values

|Property|Value|
|---|---|
|type|DOMESTIC|
|type|INTERNATIONAL|
|type|BILLER|

<h2 id="tocSpayeedetail">PayeeDetail</h2>

<a id="schemapayeedetail"></a>

```json
{
  "payeeId": "string",
  "nickname": "string",
  "description": "string",
  "type": "DOMESTIC",
  "creationDate": "string",
  "payeeUType": "domestic",
  "domestic": {
    "payeeAccountUType": "account",
    "account": {
      "accountName": "string",
      "bsb": "string",
      "accountNumber": "string"
    },
    "card": {
      "cardNumber": "string"
    },
    "payId": {
      "name": "string",
      "identifier": "string",
      "type": "EMAIL"
    }
  },
  "biller": {
    "billerCode": "string",
    "crn": "string",
    "billerName": "string"
  },
  "international": {
    "beneficiaryDetails": {
      "name": "string",
      "country": "string",
      "message": "string"
    },
    "bankDetails": {
      "country": "string",
      "accountNumber": "string",
      "bankAddress": {
        "name": "string",
        "address": "string"
      },
      "beneficiaryBankBIC": "string",
      "fedWireNumber": "string",
      "sortCode": "string",
      "chipNumber": "string",
      "routingNumber": "string",
      "legalEntityIdentifier": "string"
    }
  }
}

```

### Properties

*allOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[Payee](#schemapayee)|Optional|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|Optional|none|none|
|» payeeUType|string|Mandatory|none|Type of object included that describes the payee in detail|
|» domestic|[DomesticPayee](#schemadomesticpayee)|Conditional|none|none|
|» biller|[BillerPayee](#schemabillerpayee)|Conditional|none|none|
|» international|[InternationalPayee](#schemainternationalpayee)|Conditional|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|payeeUType|domestic|
|payeeUType|biller|
|payeeUType|international|

<h2 id="tocSdomesticpayee">DomesticPayee</h2>

<a id="schemadomesticpayee"></a>

```json
{
  "payeeAccountUType": "account",
  "account": {
    "accountName": "string",
    "bsb": "string",
    "accountNumber": "string"
  },
  "card": {
    "cardNumber": "string"
  },
  "payId": {
    "name": "string",
    "identifier": "string",
    "type": "EMAIL"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|payeeAccountUType|string|Mandatory|none|Type of account object included. Valid values are: { payeeAccountUType - - account A standard Australian account defined by BSB/Account Number payId A PayID recognised by NPP|
|account|[DomesticPayeeAccount](#schemadomesticpayeeaccount)|Conditional|none|none|
|card|[DomesticPayeeCard](#schemadomesticpayeecard)|Conditional|none|none|
|payId|[DomesticPayeePayId](#schemadomesticpayeepayid)|Conditional|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|payeeAccountUType|account|
|payeeAccountUType|card|
|payeeAccountUType|payId|

<h2 id="tocSdomesticpayeeaccount">DomesticPayeeAccount</h2>

<a id="schemadomesticpayeeaccount"></a>

```json
{
  "accountName": "string",
  "bsb": "string",
  "accountNumber": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountName|string|Mandatory|none|Name of the account to pay to|
|bsb|string|Mandatory|none|BSB of the account to pay to|
|accountNumber|string|Mandatory|none|Number of the account to pay to|

<h2 id="tocSdomesticpayeecard">DomesticPayeeCard</h2>

<a id="schemadomesticpayeecard"></a>

```json
{
  "cardNumber": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cardNumber|string(MaskedPANString)|Mandatory|none|Name of the account to pay to|

<h2 id="tocSdomesticpayeepayid">DomesticPayeePayId</h2>

<a id="schemadomesticpayeepayid"></a>

```json
{
  "name": "string",
  "identifier": "string",
  "type": "EMAIL"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|Optional|none|The name assigned to the PayID by the owner of the PayID|
|identifier|string|Mandatory|none|The identifier of the PayID (dependent on type)|
|type|string|Mandatory|none|The type of the PayID|

#### Enumerated Values

|Property|Value|
|---|---|
|type|EMAIL|
|type|MOBILE|
|type|ORG_NUMBER|
|type|ORG_NAME|

<h2 id="tocSbillerpayee">BillerPayee</h2>

<a id="schemabillerpayee"></a>

```json
{
  "billerCode": "string",
  "crn": "string",
  "billerName": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billerCode|string|Mandatory|none|BPay Biller Code of the Biller|
|crn|string|Conditional|none|BPay CRN of the Biller. If the contents of the CRN match the format of a Credit Card PAN then it should be masked using the rules applicable for the MaskedPANString common type|
|billerName|string|Mandatory|none|Name of the Biller|

<h2 id="tocSinternationalpayee">InternationalPayee</h2>

<a id="schemainternationalpayee"></a>

```json
{
  "beneficiaryDetails": {
    "name": "string",
    "country": "string",
    "message": "string"
  },
  "bankDetails": {
    "country": "string",
    "accountNumber": "string",
    "bankAddress": {
      "name": "string",
      "address": "string"
    },
    "beneficiaryBankBIC": "string",
    "fedWireNumber": "string",
    "sortCode": "string",
    "chipNumber": "string",
    "routingNumber": "string",
    "legalEntityIdentifier": "string"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|beneficiaryDetails|object|Mandatory|none|none|
|» name|string|Optional|none|Name of the beneficiary|
|» country|string|Mandatory|none|Country where the beneficiary resides. A valid ISO 3166 Alpha-3 country code|
|» message|string|Optional|none|Response message for the payment|
|bankDetails|object|Mandatory|none|none|
|» country|string|Mandatory|none|Country of the recipient institution. A valid ISO 3166 Alpha-3 country code|
|» accountNumber|string|Mandatory|none|Account Targeted for payment|
|» bankAddress|object|Optional|none|none|
|»» name|string|Mandatory|none|Name of the recipient Bank|
|»» address|string|Mandatory|none|Address of the recipient Bank|
|» beneficiaryBankBIC|string|Optional|none|Swift bank code.  Aligns with standard [ISO 9362](https://www.iso.org/standard/60390.html)|
|» fedWireNumber|string|Optional|none|Number for Fedwire payment (Federal Reserve Wire Network)|
|» sortCode|string|Optional|none|Sort code used for account identification in some jurisdictions|
|» chipNumber|string|Optional|none|Number for the Clearing House Interbank Payments System|
|» routingNumber|string|Optional|none|International bank routing number|
|» legalEntityIdentifier|string|Optional|none|The legal entity identifier (LEI) for the beneficiary.  Aligns with [ISO 17442](https://www.iso.org/standard/59771.html)|

<h2 id="tocSresponsebankingdirectdebits">ResponseBankingDirectDebits</h2>

<a id="schemaresponsebankingdirectdebits"></a>

```json
{
  "data": {
    "directDebitAuthorisations": [
      {
        "accountId": "string",
        "authorisedEntity": {
          "name": "string",
          "financialInstitution": "string",
          "abn": "string",
          "acn": "string",
          "arbn": "string"
        },
        "lastDebitDateTime": "string",
        "lastDebitAmount": "string"
      }
    ]
  },
  "links": {
    "self": "string",
    "first": "string",
    "prev": "string",
    "next": "string",
    "last": "string"
  },
  "meta": {
    "totalRecords": 0,
    "totalPages": 0
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|Mandatory|none|none|
|» directDebitAuthorisations|[[DirectDebits](#schemadirectdebits)]|Mandatory|none|The list of authorisations returned|
|links|[LinksPaginated](#schemalinkspaginated)|Mandatory|none|none|
|meta|[MetaPaginated](#schemametapaginated)|Mandatory|none|none|

<h2 id="tocSdirectdebits">DirectDebits</h2>

<a id="schemadirectdebits"></a>

```json
{
  "accountId": "string",
  "authorisedEntity": {
    "name": "string",
    "financialInstitution": "string",
    "abn": "string",
    "acn": "string",
    "arbn": "string"
  },
  "lastDebitDateTime": "string",
  "lastDebitAmount": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|string(ASCIIString)|Mandatory|none|A unique ID of the account adhering to the standards for ID permanence.|
|authorisedEntity|[AuthorisedEntity](#schemaauthorisedentity)|Optional|none|none|
|lastDebitDateTime|string(DateTimeString)|Optional|none|The date and time of the last debit executed under this authorisation|
|lastDebitAmount|string(AmountString)|Optional|none|The amount of the last debit executed under this authorisation|

<h2 id="tocSauthorisedentity">AuthorisedEntity</h2>

<a id="schemaauthorisedentity"></a>

```json
{
  "name": "string",
  "financialInstitution": "string",
  "abn": "string",
  "acn": "string",
  "arbn": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|Mandatory|none|Name of the authorised entity|
|financialInstitution|string|Mandatory|none|Name of the financial institution through which the direct debit will be executed|
|abn|string|Optional|none|Australian Business Number for the authorised entity|
|acn|string|Optional|none|Australian Business Number for the authorised entity|
|arbn|string|Optional|none|Australian Registered Body Number for the authorised entity|

<h2 id="tocSresponsecommoncustomer">ResponseCommonCustomer</h2>

<a id="schemaresponsecommoncustomer"></a>

```json
{
  "data": {
    "customerUType": "person",
    "person": {
      "lastUpdateTime": "string",
      "firstName": "string",
      "lastName": "string",
      "middleNames": [
        "string"
      ],
      "prefix": "string",
      "suffix": "string",
      "occupationCode": "string"
    },
    "organisation": {
      "lastUpdateTime": "string",
      "agentFirstName": "string",
      "agentLastName": "string",
      "agentRole": "string",
      "businessName": "string",
      "legalName": "string",
      "shortName": "string",
      "abn": "string",
      "acn": "string",
      "isACNCRegistered": true,
      "industryCode": "string",
      "organisationType": "SOLE_TRADER",
      "registeredCountry": "string",
      "establishmentDate": "string"
    }
  },
  "links": {
    "self": "string"
  },
  "meta": {}
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|Mandatory|none|none|
|» customerUType|string|Mandatory|none|The type of customer object that is present|
|» person|[Person](#schemaperson)|Optional|none|none|
|» organisation|[Organisation](#schemaorganisation)|Optional|none|none|
|links|[Links](#schemalinks)|Mandatory|none|none|
|meta|[Meta](#schemameta)|Mandatory|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|customerUType|person|
|customerUType|organisation|

<h2 id="tocSresponsecommoncustomerdetailed">ResponseCommonCustomerDetailed</h2>

<a id="schemaresponsecommoncustomerdetailed"></a>

```json
{
  "data": {
    "customerUType": "person",
    "person": {
      "lastUpdateTime": "string",
      "firstName": "string",
      "lastName": "string",
      "middleNames": [
        "string"
      ],
      "prefix": "string",
      "suffix": "string",
      "occupationCode": "string",
      "phoneNumbers": [
        {
          "isPreferred": true,
          "purpose": "MOBILE",
          "countryCode": "string",
          "areaCode": "string",
          "number": "string",
          "extension": "string",
          "fullNumber": "string"
        }
      ],
      "emailAddresses": [
        {
          "isPreferred": true,
          "purpose": "WORK",
          "address": "string"
        }
      ],
      "physicalAddresses": [
        {
          "purpose": "REGISTERED",
          "addressUType": "simple",
          "simple": {
            "mailingName": "string",
            "addressLine1": "string",
            "addressLine2": "string",
            "addressLine3": "string",
            "postcode": "string",
            "city": "string",
            "state": "string",
            "country": "string"
          },
          "paf": {
            "dpid": "string",
            "thoroughfareNumber1": 0,
            "thoroughfareNumber1Suffix": "string",
            "thoroughfareNumber2": 0,
            "thoroughfareNumber2Suffix": "string",
            "flatUnitNumber": "string",
            "floorLevelNumber": "string",
            "lotNumber": 0,
            "buildingName1": "string",
            "buildingName2": "string",
            "streetName": "string",
            "streetType": "string",
            "streetSuffix": "string",
            "postalDeliveryType": "string",
            "postalDeliveryNumber": 0,
            "postalDeliveryNumberPrefix": "string",
            "postalDeliveryNumberSuffix": "string",
            "localityName": "string",
            "postcode": "string",
            "state": "string"
          }
        }
      ]
    },
    "organisation": {
      "lastUpdateTime": "string",
      "agentFirstName": "string",
      "agentLastName": "string",
      "agentRole": "string",
      "businessName": "string",
      "legalName": "string",
      "shortName": "string",
      "abn": "string",
      "acn": "string",
      "isACNCRegistered": true,
      "industryCode": "string",
      "organisationType": "SOLE_TRADER",
      "registeredCountry": "string",
      "establishmentDate": "string",
      "physicalAddresses": [
        {
          "purpose": "REGISTERED",
          "addressUType": "simple",
          "simple": {
            "mailingName": "string",
            "addressLine1": "string",
            "addressLine2": "string",
            "addressLine3": "string",
            "postcode": "string",
            "city": "string",
            "state": "string",
            "country": "string"
          },
          "paf": {
            "dpid": "string",
            "thoroughfareNumber1": 0,
            "thoroughfareNumber1Suffix": "string",
            "thoroughfareNumber2": 0,
            "thoroughfareNumber2Suffix": "string",
            "flatUnitNumber": "string",
            "floorLevelNumber": "string",
            "lotNumber": 0,
            "buildingName1": "string",
            "buildingName2": "string",
            "streetName": "string",
            "streetType": "string",
            "streetSuffix": "string",
            "postalDeliveryType": "string",
            "postalDeliveryNumber": 0,
            "postalDeliveryNumberPrefix": "string",
            "postalDeliveryNumberSuffix": "string",
            "localityName": "string",
            "postcode": "string",
            "state": "string"
          }
        }
      ]
    }
  },
  "links": {
    "self": "string"
  },
  "meta": {}
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|Mandatory|none|none|
|» customerUType|string|Mandatory|none|The type of customer object that is present|
|» person|[PersonDetail](#schemapersondetail)|Optional|none|none|
|» organisation|[OrganisationDetail](#schemaorganisationdetail)|Optional|none|none|
|links|[Links](#schemalinks)|Mandatory|none|none|
|meta|[Meta](#schemameta)|Mandatory|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|customerUType|person|
|customerUType|organisation|

<h2 id="tocSperson">Person</h2>

<a id="schemaperson"></a>

```json
{
  "lastUpdateTime": "string",
  "firstName": "string",
  "lastName": "string",
  "middleNames": [
    "string"
  ],
  "prefix": "string",
  "suffix": "string",
  "occupationCode": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lastUpdateTime|string(DateTimeString)|Mandatory|none|The date and time that this record was last updated by the customer.  If no update has occurred then this date should reflect the initial creation date for the data|
|firstName|string|Optional|none|For people with single names this field need not be present.  The single name should be in the lastName field|
|lastName|string|Mandatory|none|For people with single names the single name should be in this field|
|middleNames|[string]|Mandatory|none|Field is mandatory but array may be empty|
|prefix|string|Optional|none|Also known as title or salutation.  The prefix to the name (e.g. Mr, Mrs, Ms, Miss, Sir, etc)|
|suffix|string|Optional|none|Used for a trailing suffix to the name (e.g. Jr)|
|occupationCode|string|Optional|none|Value is a valid [ANZCO v1.2](http://www.abs.gov.au/ANZSCO) Standard Occupation classification.|

<h2 id="tocSpersondetail">PersonDetail</h2>

<a id="schemapersondetail"></a>

```json
{
  "lastUpdateTime": "string",
  "firstName": "string",
  "lastName": "string",
  "middleNames": [
    "string"
  ],
  "prefix": "string",
  "suffix": "string",
  "occupationCode": "string",
  "phoneNumbers": [
    {
      "isPreferred": true,
      "purpose": "MOBILE",
      "countryCode": "string",
      "areaCode": "string",
      "number": "string",
      "extension": "string",
      "fullNumber": "string"
    }
  ],
  "emailAddresses": [
    {
      "isPreferred": true,
      "purpose": "WORK",
      "address": "string"
    }
  ],
  "physicalAddresses": [
    {
      "purpose": "REGISTERED",
      "addressUType": "simple",
      "simple": {
        "mailingName": "string",
        "addressLine1": "string",
        "addressLine2": "string",
        "addressLine3": "string",
        "postcode": "string",
        "city": "string",
        "state": "string",
        "country": "string"
      },
      "paf": {
        "dpid": "string",
        "thoroughfareNumber1": 0,
        "thoroughfareNumber1Suffix": "string",
        "thoroughfareNumber2": 0,
        "thoroughfareNumber2Suffix": "string",
        "flatUnitNumber": "string",
        "floorLevelNumber": "string",
        "lotNumber": 0,
        "buildingName1": "string",
        "buildingName2": "string",
        "streetName": "string",
        "streetType": "string",
        "streetSuffix": "string",
        "postalDeliveryType": "string",
        "postalDeliveryNumber": 0,
        "postalDeliveryNumberPrefix": "string",
        "postalDeliveryNumberSuffix": "string",
        "localityName": "string",
        "postcode": "string",
        "state": "string"
      }
    }
  ]
}

```

### Properties

*allOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[Person](#schemaperson)|Optional|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|Optional|none|none|
|» phoneNumbers|[[PhoneNumber](#schemaphonenumber)]|Mandatory|none|At least one record is required|
|» emailAddresses|[[EmailAddress](#schemaemailaddress)]|Mandatory|none|May be empty|
|» physicalAddresses|[[PhysicalAddressWithPurpose](#schemaphysicaladdresswithpurpose)]|Mandatory|none|Must contain at least one address. One and only one address may have the purpose of REGISTERED. Zero or one, and no more than one, record may have the purpose of MAIL. If zero then the REGISTERED address is to be used for mail|

<h2 id="tocSorganisation">Organisation</h2>

<a id="schemaorganisation"></a>

```json
{
  "lastUpdateTime": "string",
  "agentFirstName": "string",
  "agentLastName": "string",
  "agentRole": "string",
  "businessName": "string",
  "legalName": "string",
  "shortName": "string",
  "abn": "string",
  "acn": "string",
  "isACNCRegistered": true,
  "industryCode": "string",
  "organisationType": "SOLE_TRADER",
  "registeredCountry": "string",
  "establishmentDate": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lastUpdateTime|string(DateTimeString)|Mandatory|none|The date and time that this record was last updated by the customer. If no update has occurred then this date should reflect the initial creation date for the data|
|agentFirstName|string|Optional|none|The first name of the individual providing access on behalf of the organisation. For people with single names this field need not be present.  The single name should be in the lastName field|
|agentLastName|string|Mandatory|none|The last name of the individual providing access on behalf of the organisation. For people with single names the single name should be in this field|
|agentRole|string|Mandatory|none|The role of the individual identified as the agent who is providing authorisation.  Expected to be used for display.  Default to “Unspecified” if the role is not known|
|businessName|string|Mandatory|none|Name of the organisation|
|legalName|string|Optional|none|Legal name, if different to the business name|
|shortName|string|Optional|none|Short name used for communication, if  different to the business name|
|abn|string|Optional|none|Australian Business Number for the organisation|
|acn|string|Optional|none|Australian Company Number for the organisation. Required only if an ACN is applicable for the organisation type|
|isACNCRegistered|boolean|Optional|none|True if registered with the ACNC.  False if not. Absent or null if not confirmed.|
|industryCode|string|Optional|none|[ANZSIC (2006)](http://www.abs.gov.au/anzsic) code for the organisation.|
|organisationType|string|Mandatory|none|Legal organisation type|
|registeredCountry|string|Optional|none|Enumeration with values from ISO 3166 Alpha-3 country codes.  Assumed to be AUS if absent|
|establishmentDate|string(DateString)|Optional|none|The date the organisation described was established|

#### Enumerated Values

|Property|Value|
|---|---|
|organisationType|SOLE_TRADER|
|organisationType|COMPANY|
|organisationType|PARTNERSHIP|
|organisationType|TRUST|
|organisationType|GOVERNMENT_ENTITY|
|organisationType|OTHER|

<h2 id="tocSorganisationdetail">OrganisationDetail</h2>

<a id="schemaorganisationdetail"></a>

```json
{
  "lastUpdateTime": "string",
  "agentFirstName": "string",
  "agentLastName": "string",
  "agentRole": "string",
  "businessName": "string",
  "legalName": "string",
  "shortName": "string",
  "abn": "string",
  "acn": "string",
  "isACNCRegistered": true,
  "industryCode": "string",
  "organisationType": "SOLE_TRADER",
  "registeredCountry": "string",
  "establishmentDate": "string",
  "physicalAddresses": [
    {
      "purpose": "REGISTERED",
      "addressUType": "simple",
      "simple": {
        "mailingName": "string",
        "addressLine1": "string",
        "addressLine2": "string",
        "addressLine3": "string",
        "postcode": "string",
        "city": "string",
        "state": "string",
        "country": "string"
      },
      "paf": {
        "dpid": "string",
        "thoroughfareNumber1": 0,
        "thoroughfareNumber1Suffix": "string",
        "thoroughfareNumber2": 0,
        "thoroughfareNumber2Suffix": "string",
        "flatUnitNumber": "string",
        "floorLevelNumber": "string",
        "lotNumber": 0,
        "buildingName1": "string",
        "buildingName2": "string",
        "streetName": "string",
        "streetType": "string",
        "streetSuffix": "string",
        "postalDeliveryType": "string",
        "postalDeliveryNumber": 0,
        "postalDeliveryNumberPrefix": "string",
        "postalDeliveryNumberSuffix": "string",
        "localityName": "string",
        "postcode": "string",
        "state": "string"
      }
    }
  ]
}

```

### Properties

*allOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[Organisation](#schemaorganisation)|Optional|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|Optional|none|none|
|» physicalAddresses|[[PhysicalAddressWithPurpose](#schemaphysicaladdresswithpurpose)]|Mandatory|none|Must contain at least one address. One and only one address may have the purpose of REGISTERED. Zero or one, and no more than one, record may have the purpose of MAIL. If zero then the REGISTERED address is to be used for mail|

<h2 id="tocSphonenumber">PhoneNumber</h2>

<a id="schemaphonenumber"></a>

```json
{
  "isPreferred": true,
  "purpose": "MOBILE",
  "countryCode": "string",
  "areaCode": "string",
  "number": "string",
  "extension": "string",
  "fullNumber": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|isPreferred|boolean|Conditional|none|Required to be true for one and only one entry to indicate the preferred phone number.  Assumed to be 'false' if not present|
|purpose|string|Mandatory|none|The purpose of the number as specified by the customer|
|countryCode|string|Optional|none|If absent, assumed to be Australia (+61). The + should be included|
|areaCode|string|Conditional|none|Required for non Mobile Phones, if field is present and refers to Australian code - the leading 0 should be omitted.|
|number|string|Mandatory|none|The actual phone number, with leading zeros as appropriate|
|extension|string|Optional|none|An extension number (if applicable)|
|fullNumber|string|Mandatory|none|Fully formatted phone number with country code, area code, number and extension incorporated. Formatted according to section 5.1.4. of RFC 3966|

#### Enumerated Values

|Property|Value|
|---|---|
|purpose|MOBILE|
|purpose|HOME|
|purpose|WORK|
|purpose|OTHER|
|purpose|INTERNATIONAL|
|purpose|UNSPECIFIED|

<h2 id="tocSemailaddress">EmailAddress</h2>

<a id="schemaemailaddress"></a>

```json
{
  "isPreferred": true,
  "purpose": "WORK",
  "address": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|isPreferred|boolean|Mandatory|none|Required for one and only one email record in the collection. Denotes the default email address|
|purpose|string|Mandatory|none|The purpose for the email, as specified by the customer (Enumeration)|
|address|string|Mandatory|none|A correctly formatted email address, as defined by the addr_spec format in RFC_5322|

#### Enumerated Values

|Property|Value|
|---|---|
|purpose|WORK|
|purpose|HOME|
|purpose|OTHER|
|purpose|UNSPECIFIED|

<h2 id="tocSphysicaladdresswithpurpose">PhysicalAddressWithPurpose</h2>

<a id="schemaphysicaladdresswithpurpose"></a>

```json
{
  "purpose": "REGISTERED",
  "addressUType": "simple",
  "simple": {
    "mailingName": "string",
    "addressLine1": "string",
    "addressLine2": "string",
    "addressLine3": "string",
    "postcode": "string",
    "city": "string",
    "state": "string",
    "country": "string"
  },
  "paf": {
    "dpid": "string",
    "thoroughfareNumber1": 0,
    "thoroughfareNumber1Suffix": "string",
    "thoroughfareNumber2": 0,
    "thoroughfareNumber2Suffix": "string",
    "flatUnitNumber": "string",
    "floorLevelNumber": "string",
    "lotNumber": 0,
    "buildingName1": "string",
    "buildingName2": "string",
    "streetName": "string",
    "streetType": "string",
    "streetSuffix": "string",
    "postalDeliveryType": "string",
    "postalDeliveryNumber": 0,
    "postalDeliveryNumberPrefix": "string",
    "postalDeliveryNumberSuffix": "string",
    "localityName": "string",
    "postcode": "string",
    "state": "string"
  }
}

```

### Properties

*allOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|Optional|none|none|
|» purpose|string|Mandatory|none|Enumeration of values indicating the purpose of the physical address|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[PhysicalAddress](#schemaphysicaladdress)|Optional|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|purpose|REGISTERED|
|purpose|MAIL|
|purpose|PHYSICAL|
|purpose|WORK|
|purpose|OTHER|

<h2 id="tocSphysicaladdress">PhysicalAddress</h2>

<a id="schemaphysicaladdress"></a>

```json
{
  "addressUType": "simple",
  "simple": {
    "mailingName": "string",
    "addressLine1": "string",
    "addressLine2": "string",
    "addressLine3": "string",
    "postcode": "string",
    "city": "string",
    "state": "string",
    "country": "string"
  },
  "paf": {
    "dpid": "string",
    "thoroughfareNumber1": 0,
    "thoroughfareNumber1Suffix": "string",
    "thoroughfareNumber2": 0,
    "thoroughfareNumber2Suffix": "string",
    "flatUnitNumber": "string",
    "floorLevelNumber": "string",
    "lotNumber": 0,
    "buildingName1": "string",
    "buildingName2": "string",
    "streetName": "string",
    "streetType": "string",
    "streetSuffix": "string",
    "postalDeliveryType": "string",
    "postalDeliveryNumber": 0,
    "postalDeliveryNumberPrefix": "string",
    "postalDeliveryNumberSuffix": "string",
    "localityName": "string",
    "postcode": "string",
    "state": "string"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addressUType|string|Mandatory|none|The type of address object present|
|simple|[SimpleAddress](#schemasimpleaddress)|Conditional|none|none|
|paf|[PAFAddress](#schemapafaddress)|Conditional|none|Australian address formatted according to the file format defined by the [PAF file format](https://auspost.com.au/content/dam/auspost_corp/media/documents/australia-post-data-guide.pdf)|

#### Enumerated Values

|Property|Value|
|---|---|
|addressUType|simple|
|addressUType|paf|

<h2 id="tocSsimpleaddress">SimpleAddress</h2>

<a id="schemasimpleaddress"></a>

```json
{
  "mailingName": "string",
  "addressLine1": "string",
  "addressLine2": "string",
  "addressLine3": "string",
  "postcode": "string",
  "city": "string",
  "state": "string",
  "country": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mailingName|string|Optional|none|Name of the individual or business formatted for inclusion in an address used for physical mail|
|addressLine1|string|Mandatory|none|First line of the standard address object|
|addressLine2|string|Optional|none|Second line of the standard address object|
|addressLine3|string|Optional|none|Third line of the standard address object|
|postcode|string|Conditional|none|Mandatory for Australian addresses|
|city|string|Mandatory|none|Name of the city or locality|
|state|string|Mandatory|none|Free text if the country is not Australia. If country is Australia then must be one of the values defined by the ISO 3166:AU standard|
|country|string|Optional|none|A valid ISO 3166 Alpha-3 country code|

<h2 id="tocSpafaddress">PAFAddress</h2>

<a id="schemapafaddress"></a>

```json
{
  "dpid": "string",
  "thoroughfareNumber1": 0,
  "thoroughfareNumber1Suffix": "string",
  "thoroughfareNumber2": 0,
  "thoroughfareNumber2Suffix": "string",
  "flatUnitNumber": "string",
  "floorLevelNumber": "string",
  "lotNumber": 0,
  "buildingName1": "string",
  "buildingName2": "string",
  "streetName": "string",
  "streetType": "string",
  "streetSuffix": "string",
  "postalDeliveryType": "string",
  "postalDeliveryNumber": 0,
  "postalDeliveryNumberPrefix": "string",
  "postalDeliveryNumberSuffix": "string",
  "localityName": "string",
  "postcode": "string",
  "state": "string"
}

```

*Australian address formatted according to the file format defined by the [PAF file format](https://auspost.com.au/content/dam/auspost_corp/media/documents/australia-post-data-guide.pdf)*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dpid|string|Optional|none|Unique identifier for an address as defined by Australia Post.  Also known as Delivery Point Identifier|
|thoroughfareNumber1|integer|Optional|none|Thoroughfare number for a property (first number in a property ranged address)|
|thoroughfareNumber1Suffix|string|Optional|none|Suffix for the thoroughfare number. Only relevant is thoroughfareNumber1 is populated|
|thoroughfareNumber2|integer|Optional|none|Second thoroughfare number (only used if the property has a ranged address eg 23-25)|
|thoroughfareNumber2Suffix|string|Optional|none|Suffix for the second thoroughfare number. Only relevant is thoroughfareNumber2 is populated|
|flatUnitNumber|string|Optional|none|Unit number (including suffix, if applicable)|
|floorLevelNumber|string|Optional|none|Floor or level number (including alpha characters)|
|lotNumber|integer|Optional|none|Allotment number for the address|
|buildingName1|string|Optional|none|Building/Property name 1|
|buildingName2|string|Optional|none|Building/Property name 2|
|streetName|string|Optional|none|The name of the street|
|streetType|string|Optional|none|The street type. Valid enumeration defined by Australia Post PAF code file|
|streetSuffix|string|Optional|none|The street type suffix. Valid enumeration defined by Australia Post PAF code file|
|postalDeliveryType|string|Optional|none|Postal delivery type. (eg. PO BOX). Valid enumeration defined by Australia Post PAF code file|
|postalDeliveryNumber|integer|Optional|none|Postal delivery number if the address is a postal delivery type|
|postalDeliveryNumberPrefix|string|Optional|none|Postal delivery number prefix related to the postal delivery number|
|postalDeliveryNumberSuffix|string|Optional|none|Postal delivery number suffix related to the postal delivery number|
|localityName|string|Mandatory|none|Full name of locality|
|postcode|string|Mandatory|none|Postcode for the locality|
|state|string|Mandatory|none|State in which the address belongs. Valid enumeration defined by Australia Post PAF code file|

<h2 id="tocSlinks">Links</h2>

<a id="schemalinks"></a>

```json
{
  "self": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|self|string(URIString)|Optional|none|Fully qualified link to this API call|

<h2 id="tocSmeta">Meta</h2>

<a id="schemameta"></a>

```json
{}

```

### Properties

*None*

<h2 id="tocSlinkspaginated">LinksPaginated</h2>

<a id="schemalinkspaginated"></a>

```json
{
  "self": "string",
  "first": "string",
  "prev": "string",
  "next": "string",
  "last": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|self|string(URIString)|Optional|none|Fully qualified link to this API call|
|first|string(URIString)|Conditional|none|URI to the first page of this set. Mandatory if this response is not the first page|
|prev|string(URIString)|Conditional|none|URI to the first previous page of this set. Mandatory if this response is not the first page|
|next|string(URIString)|Conditional|none|URI to the first next page of this set. Mandatory if this response is not the last page|
|last|string(URIString)|Conditional|none|URI to the first last page of this set. Mandatory if this response is not the last page|

<h2 id="tocSmetapaginated">MetaPaginated</h2>

<a id="schemametapaginated"></a>

```json
{
  "totalRecords": 0,
  "totalPages": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|totalRecords|integer(NaturalNumber)|Optional|none|The total number of records in the full set|
|totalPages|integer(NaturalNumber)|Optional|none|The total number of pages in the full set|

<h2 id="tocSerrorlist">ErrorList</h2>

<a id="schemaerrorlist"></a>

```json
{
  "errors": [
    {
      "code": "string",
      "title": "string",
      "detail": "string",
      "meta": {}
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[object]|Mandatory|none|none|
|» code|string|Mandatory|none|The code of the error|
|» title|string|Mandatory|none|A displayable title of the error type|
|» detail|string|Mandatory|none|Detail of the error|
|» meta|object|Optional|none|Optional additional data for specific error types|

<h2 id="tocSenumproductcategory">EnumProductCategory</h2>

<a id="schemaenumproductcategory"></a>

```json
"PERS_AT_CALL_DEPOSITS"

```

*The list of available product categories for categorising products and accounts*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|Optional|none|The list of available product categories for categorising products and accounts|

#### Enumerated Values

|Property|Value|
|---|---|
|*anonymous*|PERS_AT_CALL_DEPOSITS|
|*anonymous*|BUS_AT_CALL_DEPOSITS|
|*anonymous*|TERM_DEPOSITS|
|*anonymous*|RESIDENTIAL_MORTGAGES|
|*anonymous*|PERS_CRED_AND_CHRG_CARDS|
|*anonymous*|BUS_CRED_AND_CHRG_CARDS|
|*anonymous*|PERS_LOANS|
|*anonymous*|PERS_LEASING|
|*anonymous*|BUS_LEASING|
|*anonymous*|TRADE_FINANCE|
|*anonymous*|PERS_OVERDRAFT|
|*anonymous*|BUS_OVERDRAFT|
|*anonymous*|BUS_LOANS|
|*anonymous*|FOREIGN_CURR_AT_CALL_DEPOSITS|
|*anonymous*|FOREIGN_CURR_TERM_DEPOSITS|
|*anonymous*|FOREIGN_CURR_LOAN|
|*anonymous*|FOREIGN_CURRRENCT_OVERDRAFT|
|*anonymous*|TRAVEL_CARD|

