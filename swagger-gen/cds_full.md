---
title: Consumer Data Standards
language_tabs:
  - http: HTTP
  - javascript: Javascript
toc_footers: []
includes: []
search: false
highlight_theme: darkula
headingLevel: 2

---

<!-- Generator: Widdershins v3.6.6 -->

<section>
<h1 id="consumer-data-standards">Consumer Data Standards v0.3.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

API sets created by the Australian Consumer Data Standards to meet the needs of the Consumer Data Right

Base URLs:

* <a href="https://data.provider.com.au/cds-au/v1">https://data.provider.com.au/cds-au/v1</a>

License: <a href="https://opensource.org/licenses/MIT">MIT Licence</a>
</section>

<section>
<h1 id="consumer-data-standards-banking-apis">Banking APIs</h1>

<section>

## Get Accounts

<a id="opIdlistAccounts"></a>

> Code samples

```http
GET https://data.provider.com.au/cds-au/v1/banking/accounts HTTP/1.1
Host: data.provider.com.au
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'

};

fetch('https://data.provider.com.au/cds-au/v1/banking/accounts',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /banking/accounts`

Obtain a list of accounts

<section>
<h3 id="get-accounts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|open-status|query|string|false|Used to filter results according to open/closed status. Values can be OPEN, CLOSED or ALL. If absent then ALL is assumed|
|is-owned|query|string|false|Filters accounts based on whether they are owned by the authorised customer|
|product-category|query|string|false|Used to filter results on the productCategory field applicable to accounts. Any one of the valid values for this field can be supplied. If absent then all accounts returned.|
|page|query|integer|false|Page of results to request (standard pagination)|
|page-size|query|integer|false|Page size to request. Default is 25 (standard pagination)|

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

</section>

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
        "productCategory": "TRANS_AND_SAVINGS_ACCOUNTS",
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

<section>
<h3 id="get-accounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[ResponseBankingAccountList](#schemaresponsebankingaccountlist)|

</section>

<aside class="success">
This operation does not require authentication
</aside>

</section>

<section>

## Get Account Detail

<a id="opIdgetAccountDetail"></a>

> Code samples

```http
GET https://data.provider.com.au/cds-au/v1/banking/accounts/{accountId} HTTP/1.1
Host: data.provider.com.au
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'

};

fetch('https://data.provider.com.au/cds-au/v1/banking/accounts/{accountId}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /banking/accounts/{accountId}`

Obtain detailed information on a single account

<section>
<h3 id="get-account-detail-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string(ASCIIString)|true|A tokenised identifier for the account which is unique but not shareable|

</section>

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
    "productCategory": "TRANS_AND_SAVINGS_ACCOUNTS",
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
      "repaymentType": "string",
      "loanPurpose": "INTEREST_ONLY"
    },
    "features": [
      {
        "featureType": "CARD_ACCESS",
        "additionalValue": "string",
        "additionalInfo": "string",
        "additionalInfoUri": "string",
        "isActivated": "true"
      }
    ],
    "fees": [
      {
        "name": "string",
        "feeType": "PERIODIC",
        "amount": "string",
        "balanceRate": "string",
        "transactionRate": "string",
        "accruedRate": "string",
        "accrualFrequency": "string",
        "currency": "string",
        "additionalValue": "string",
        "additionalInfo": "string",
        "additionalInfoUri": "string",
        "discounts": [
          {
            "description": "string",
            "discountType": "BALANCE",
            "amount": "string",
            "balanceRate": "string",
            "transactionRate": "string",
            "accruedRate": "string",
            "additionalValue": "string",
            "eligibility": [
              {
                "discountEligibilityType": "BUSINESS",
                "additionalValue": "string",
                "additionalInfo": "string",
                "additionalInfoUri": "string"
              }
            ],
            "additionalInfo": "string",
            "additionalInfoUri": "string"
          }
        ]
      }
    ],
    "depositRates": [
      {
        "depositRateType": "FIXED",
        "rate": "string",
        "calculationFrequency": "string",
        "applicationFrequency": "string",
        "additionalValue": "string",
        "additionalInfo": "string",
        "additionalInfoUri": "string"
      }
    ],
    "lendingRates": [
      {
        "lendingRateType": "FIXED",
        "rate": "string",
        "calculationFrequency": "string",
        "applicationFrequency": "string",
        "interestPaymentDue": "IN_ARREARS",
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

<section>
<h3 id="get-account-detail-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[ResponseBankingAccountById](#schemaresponsebankingaccountbyid)|

</section>

<aside class="success">
This operation does not require authentication
</aside>

</section>

<section>

## Get Bulk Balances

<a id="opIdlistBalancesBulk"></a>

> Code samples

```http
GET https://data.provider.com.au/cds-au/v1/banking/accounts/balances HTTP/1.1
Host: data.provider.com.au
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'

};

fetch('https://data.provider.com.au/cds-au/v1/banking/accounts/balances',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /banking/accounts/balances`

Obtain balances for multiple, filtered accounts

<section>
<h3 id="get-bulk-balances-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|open-status|query|string|false|Used to filter results according to open/closed status. Values can be OPEN, CLOSED or ALL. If absent then ALL is assumed|
|is-owned|query|string|false|Filters accounts based on whether they are owned by the authorised customer|
|product-category|query|string|false|Used to filter results on the productCategory field applicable to accounts. Any one of the valid values for this field can be supplied. If absent then all accounts returned.|
|page|query|integer|false|Page of results to request (standard pagination)|
|page-size|query|integer|false|Page size to request. Default is 25 (standard pagination)|

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

</section>

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

<section>
<h3 id="get-bulk-balances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|resource listing the financial balances for the account|[ResponseBankingAccountsBalanceList](#schemaresponsebankingaccountsbalancelist)|

</section>

<aside class="success">
This operation does not require authentication
</aside>

</section>

<section>

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
const inputBody = '{
  "data": {
    "accountIds": [
      "string"
    ]
  },
  "meta": {}
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'

};

fetch('https://data.provider.com.au/cds-au/v1/banking/accounts/balances',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

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

<section>
<h3 id="get-balances-for-specific-accounts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer|false|Page of results to request (standard pagination)|
|page-size|query|integer|false|Page size to request. Default is 25 (standard pagination)|
|body|body|[RequestAccountIds](#schemarequestaccountids)|true|The list of account IDs to obtain information for|

</section>

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

<section>
<h3 id="get-balances-for-specific-accounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[ResponseBankingAccountsBalanceList](#schemaresponsebankingaccountsbalancelist)|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|The request was well formed but was unable to be processed due to business logic specific to the request|[ResponseErrorList](#schemaresponseerrorlist)|

</section>

<aside class="success">
This operation does not require authentication
</aside>

</section>

<section>

## Get Transactions For Account

<a id="opIdgetTransactions"></a>

> Code samples

```http
GET https://data.provider.com.au/cds-au/v1/banking/accounts/{accountId}/transactions HTTP/1.1
Host: data.provider.com.au
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'

};

fetch('https://data.provider.com.au/cds-au/v1/banking/accounts/{accountId}/transactions',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

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

<section>
<h3 id="get-transactions-for-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string(ASCIIString)|true|ID of the account to get transactions for.  Must have previously been returned by one of the account list end points.|
|start-time|query|string(DateTimeString)|false|Constrain the transaction history request to transactions with effective time at or after this date/time. If absent defaults to current time. Format is aligned to DateTimeString common type|
|end-time|query|string(DateTimeString)|false|Constrain the transaction history request to transactions with effective time at or before this date/time. If absent defaults to start-time plus 100 days. Format is aligned to DateTimeString common type|
|min-amount|query|string(AmountString)|false|Filter transactions to only transactions with amounts higher or equal to than this amount|
|max-amount|query|string(AmountString)|false|Filter transactions to only transactions with amounts less than or equal to than this amount|
|text|query|string|false|Filter transactions to only transactions where this string value is found as a substring of either the reference or description fields. Format is arbitrary ASCII string|
|page|query|integer|false|Page of results to request (standard pagination)|
|page-size|query|integer|false|Page size to request. Default is 25 (standard pagination)|

</section>

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

<section>
<h3 id="get-transactions-for-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[ResponseBankingTransactionList](#schemaresponsebankingtransactionlist)|

</section>

<aside class="success">
This operation does not require authentication
</aside>

</section>

<section>

## Get Transaction Detail

<a id="opIdgetTransactionDetail"></a>

> Code samples

```http
GET https://data.provider.com.au/cds-au/v1/banking/accounts/{accountId}/transactions/{transactionId} HTTP/1.1
Host: data.provider.com.au
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'

};

fetch('https://data.provider.com.au/cds-au/v1/banking/accounts/{accountId}/transactions/{transactionId}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /banking/accounts/{accountId}/transactions/{transactionId}`

Obtain detailed information on a transaction for a specific account

<section>
<h3 id="get-transaction-detail-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string(ASCIIString)|true|The account id token that is used to uniquely represent the account|
|transactionId|path|string(ASCIIString)|true|The unique identifier for the specific transaction for which details are being requested|

</section>

> Example responses

> 200 Response

```json
{
  "data": {
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
  },
  "links": {
    "self": "string"
  },
  "meta": {}
}
```

<section>
<h3 id="get-transaction-detail-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[ResponseBankingTransactionById](#schemaresponsebankingtransactionbyid)|

</section>

<aside class="success">
This operation does not require authentication
</aside>

</section>

<section>

## Get Transactions For Multiple Accounts

<a id="opIdlistTransactionsBulk"></a>

> Code samples

```http
GET https://data.provider.com.au/cds-au/v1/banking/accounts/transactions HTTP/1.1
Host: data.provider.com.au
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'

};

fetch('https://data.provider.com.au/cds-au/v1/banking/accounts/transactions',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /banking/accounts/transactions`

Obtain transactions for multiple, filtered accounts

<section>
<h3 id="get-transactions-for-multiple-accounts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|open-status|query|string|false|Used to filter results according to open/closed status. Values can be OPEN, CLOSED or ALL. If absent then ALL is assumed|
|is-owned|query|string|false|Filters accounts based on whether they are owned by the authorised customer|
|product-category|query|string|false|Used to filter results on the productCategory field applicable to accounts. Any one of the valid values for this field can be supplied. If absent then all accounts returned.|
|start-time|query|string(DateTimeString)|false|Constrain the transaction history request to transactions with effective time at or after this date/time. If absent defaults to current time. Format is aligned to DateTimeString common type|
|end-time|query|string(DateTimeString)|false|Constrain the transaction history request to transactions with effective time at or before this date/time. If absent defaults to start-time plus 100 days. Format is aligned to DateTimeString common type|
|min-amount|query|string(AmountString)|false|Filter transactions to only transactions with amounts higher or equal to than this amount|
|max-amount|query|string(AmountString)|false|Filter transactions to only transactions with amounts less than or equal to than this amount|
|text|query|string|false|Filter transactions to only transactions where this string value is found as a substring of either the reference or description fields. Format is arbitrary ASCII string|
|page|query|integer|false|Page of results to request (standard pagination)|
|page-size|query|integer|false|Page size to request. Default is 25 (standard pagination)|

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

</section>

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

<section>
<h3 id="get-transactions-for-multiple-accounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[ResponseBankingTransactionList](#schemaresponsebankingtransactionlist)|

</section>

<aside class="success">
This operation does not require authentication
</aside>

</section>

<section>

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
const inputBody = '{
  "data": {
    "accountIds": [
      "string"
    ]
  },
  "meta": {}
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'

};

fetch('https://data.provider.com.au/cds-au/v1/banking/accounts/transactions',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

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

<section>
<h3 id="get-transactions-for-specific-accounts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start-time|query|string(DateTimeString)|false|Constrain the transaction history request to transactions with effective time at or after this date/time. If absent defaults to current time. Format is aligned to DateTimeString common type|
|end-time|query|string(DateTimeString)|false|Constrain the transaction history request to transactions with effective time at or before this date/time. If absent defaults to start-time plus 100 days. Format is aligned to DateTimeString common type|
|min-amount|query|string(AmountString)|false|Filter transactions to only transactions with amounts higher or equal to than this amount|
|max-amount|query|string(AmountString)|false|Filter transactions to only transactions with amounts less than or equal to than this amount|
|text|query|string|false|Filter transactions to only transactions where this string value is found as a substring of either the reference or description fields. Format is arbitrary ASCII string|
|page|query|integer|false|Page of results to request (standard pagination)|
|page-size|query|integer|false|Page size to request. Default is 25 (standard pagination)|
|body|body|[RequestAccountIds](#schemarequestaccountids)|true|The list of account IDs to obtain information for|

</section>

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

<section>
<h3 id="get-transactions-for-specific-accounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[ResponseBankingTransactionList](#schemaresponsebankingtransactionlist)|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|The request was well formed but was unable to be processed due to business logic specific to the request|[ResponseErrorList](#schemaresponseerrorlist)|

</section>

<aside class="success">
This operation does not require authentication
</aside>

</section>

<section>

## Get Direct Debits For Account

<a id="opIdlistDirectDebits"></a>

> Code samples

```http
GET https://data.provider.com.au/cds-au/v1/banking/accounts/{accountId}/direct-debits HTTP/1.1
Host: data.provider.com.au
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'

};

fetch('https://data.provider.com.au/cds-au/v1/banking/accounts/{accountId}/direct-debits',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /banking/accounts/{accountId}/direct-debits`

Obtain direct debit authorisations for a specific account

<section>
<h3 id="get-direct-debits-for-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string(ASCIIString)|true|ID of the account to get direct debit authorisations for.  Must have previously been returned by one of the account list end points.|
|page|query|integer|false|Page of results to request (standard pagination)|
|page-size|query|integer|false|Page size to request. Default is 25 (standard pagination)|

</section>

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

<section>
<h3 id="get-direct-debits-for-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[ResponseBankingDirectDebitAuthorisationList](#schemaresponsebankingdirectdebitauthorisationlist)|

</section>

<aside class="success">
This operation does not require authentication
</aside>

</section>

<section>

## Get Bulk Direct Debits

<a id="opIdlistDirectDebitsBulk"></a>

> Code samples

```http
GET https://data.provider.com.au/cds-au/v1/banking/accounts/direct-debits HTTP/1.1
Host: data.provider.com.au
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'

};

fetch('https://data.provider.com.au/cds-au/v1/banking/accounts/direct-debits',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /banking/accounts/direct-debits`

Obtain direct debit authorisations for multiple, filtered accounts

<section>
<h3 id="get-bulk-direct-debits-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|is-owned|query|string|false|Filters accounts based on whether they are owned by the authorised customer|
|product-category|query|string|false|Used to filter results on the productCategory field applicable to accounts. Any one of the valid values for this field can be supplied. If absent then all accounts returned.|
|page|query|integer|false|Page of results to request (standard pagination)|
|page-size|query|integer|false|Page size to request. Default is 25 (standard pagination)|

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

</section>

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

<section>
<h3 id="get-bulk-direct-debits-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[ResponseBankingDirectDebitAuthorisationList](#schemaresponsebankingdirectdebitauthorisationlist)|

</section>

<aside class="success">
This operation does not require authentication
</aside>

</section>

<section>

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
const inputBody = '{
  "data": {
    "accountIds": [
      "string"
    ]
  },
  "meta": {}
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'

};

fetch('https://data.provider.com.au/cds-au/v1/banking/accounts/direct-debits',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

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

<section>
<h3 id="get-direct-debits-for-specific-accounts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer|false|Page of results to request (standard pagination)|
|page-size|query|integer|false|Page size to request. Default is 25 (standard pagination)|
|body|body|[RequestAccountIds](#schemarequestaccountids)|true|The list of account IDs to obtain information for|

</section>

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

<section>
<h3 id="get-direct-debits-for-specific-accounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[ResponseBankingDirectDebitAuthorisationList](#schemaresponsebankingdirectdebitauthorisationlist)|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|The request was well formed but was unable to be processed due to business logic specific to the request|[ResponseErrorList](#schemaresponseerrorlist)|

</section>

<aside class="success">
This operation does not require authentication
</aside>

</section>

<section>

## Get Payees

<a id="opIdlistPayees"></a>

> Code samples

```http
GET https://data.provider.com.au/cds-au/v1/banking/payees HTTP/1.1
Host: data.provider.com.au
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'

};

fetch('https://data.provider.com.au/cds-au/v1/banking/payees',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /banking/payees`

Obtain a list of pre-registered payees

<section>
<h3 id="get-payees-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type|query|string|false|Filter on the payee type field.  In addition to normal type field values, ALL can be specified to retrieve all payees.  If absent the assumed value is ALL|
|page|query|integer|false|Page of results to request (standard pagination)|
|page-size|query|integer|false|Page size to request. Default is 25 (standard pagination)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|DOMESTIC|
|type|INTERNATIONAL|
|type|BILLER|
|type|ALL|

</section>

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

<section>
<h3 id="get-payees-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[ResponseBankingPayeeList](#schemaresponsebankingpayeelist)|

</section>

<aside class="success">
This operation does not require authentication
</aside>

</section>

<section>

## Get Payee Detail

<a id="opIdgetPayeeDetail"></a>

> Code samples

```http
GET https://data.provider.com.au/cds-au/v1/banking/payees/{payeeId} HTTP/1.1
Host: data.provider.com.au
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'

};

fetch('https://data.provider.com.au/cds-au/v1/banking/payees/{payeeId}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /banking/payees/{payeeId}`

Obtain detailed information on a single payee

<section>
<h3 id="get-payee-detail-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|payeeId|path|string(ASCIIString)|true|The ID used to locate the details of a particular payee|

</section>

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

<section>
<h3 id="get-payee-detail-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[ResponseBankingPayeeById](#schemaresponsebankingpayeebyid)|

</section>

<aside class="success">
This operation does not require authentication
</aside>

</section>

<section>

## Get Products

<a id="opIdlistProducts"></a>

> Code samples

```http
GET https://data.provider.com.au/cds-au/v1/banking/products HTTP/1.1
Host: data.provider.com.au
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'

};

fetch('https://data.provider.com.au/cds-au/v1/banking/products',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

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

<section>
<h3 id="get-products-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|effective|query|string|false|Allows for the filtering of products based on whether the current time is within the period of time defined as effective by the effectiveFrom and effectiveTo fields. Valid values are ‘CURRENT’, ‘FUTURE’ and ‘ALL’. If absent defaults to 'CURRENT'|
|updated-since|query|string(DateTimeString)|false|Only include products that have been updated after the specified date and time. If absent defaults to include all products|
|brand|query|string|false|Filter results based on a specific brand|
|product-category|query|string|false|Used to filter results on the productCategory field applicable to accounts. Any one of the valid values for this field can be supplied. If absent then all accounts returned.|
|page|query|integer|false|Page of results to request (standard pagination)|
|page-size|query|integer|false|Page size to request. Default is 25 (standard pagination)|

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

</section>

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
        "productCategory": "TRANS_AND_SAVINGS_ACCOUNTS",
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

<section>
<h3 id="get-products-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[ResponseBankingProductList](#schemaresponsebankingproductlist)|

</section>

<aside class="success">
This operation does not require authentication
</aside>

</section>

<section>

## Get Product Detail

<a id="opIdgetProductDetail"></a>

> Code samples

```http
GET https://data.provider.com.au/cds-au/v1/banking/products/{productId} HTTP/1.1
Host: data.provider.com.au
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'

};

fetch('https://data.provider.com.au/cds-au/v1/banking/products/{productId}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /banking/products/{productId}`

Obtain detailed information on a single product offered openly to the market

<section>
<h3 id="get-product-detail-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|productId|path|string(ASCIIString)|true|ID of the specific product requested|

</section>

> Example responses

> 200 Response

```json
{
  "data": {
    "productId": "string",
    "effectiveFrom": "string",
    "effectiveTo": "string",
    "lastUpdated": "string",
    "productCategory": "TRANS_AND_SAVINGS_ACCOUNTS",
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
        "additionalInfo": "string",
        "additionalInfoUri": "string",
        "productIds": [
          "string"
        ]
      }
    ],
    "features": [
      {
        "featureType": "CARD_ACCESS",
        "additionalValue": "string",
        "additionalInfo": "string",
        "additionalInfoUri": "string"
      }
    ],
    "constraints": [
      {
        "constraintType": "MIN_BALANCE",
        "additionalValue": "string",
        "additionalInfo": "string",
        "additionalInfoUri": "string"
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
        "accruedRate": "string",
        "accrualFrequency": "string",
        "currency": "string",
        "additionalValue": "string",
        "additionalInfo": "string",
        "additionalInfoUri": "string",
        "discounts": [
          {
            "description": "string",
            "discountType": "BALANCE",
            "amount": "string",
            "balanceRate": "string",
            "transactionRate": "string",
            "accruedRate": "string",
            "feeRate": "string",
            "additionalValue": "string",
            "additionalInfo": "string",
            "additionalInfoUri": "string",
            "eligibility": [
              {
                "discountEligibilityType": "BUSINESS",
                "additionalValue": "string",
                "additionalInfo": "string",
                "additionalInfoUri": "string"
              }
            ]
          }
        ]
      }
    ],
    "depositRates": [
      {
        "depositRateType": "FIXED",
        "rate": "string",
        "calculationFrequency": "string",
        "applicationFrequency": "string",
        "tiers": [
          {
            "name": "string",
            "unitOfMeasure": "DOLLAR",
            "minimumValue": 0,
            "maximumValue": 0,
            "rateApplicationMethod": "WHOLE_BALANCE",
            "applicabilityConditions": {},
            "subTier": {
              "name": "string",
              "unitOfMeasure": "DOLLAR",
              "minimumValue": 0,
              "maximumValue": 0,
              "rateApplicationMethod": "WHOLE_BALANCE",
              "applicabilityConditions": {}
            }
          }
        ],
        "additionalValue": "string",
        "additionalInfo": "string",
        "additionalInfoUri": "string"
      }
    ],
    "lendingRates": [
      {
        "lendingRateType": "FIXED",
        "rate": "string",
        "comparisonRate": "string",
        "calculationFrequency": "string",
        "applicationFrequency": "string",
        "interestPaymentDue": "IN_ARREARS",
        "tiers": [
          {
            "name": "string",
            "unitOfMeasure": "DOLLAR",
            "minimumValue": 0,
            "maximumValue": 0,
            "rateApplicationMethod": "WHOLE_BALANCE",
            "applicabilityConditions": {},
            "subTier": {
              "name": "string",
              "unitOfMeasure": "DOLLAR",
              "minimumValue": 0,
              "maximumValue": 0,
              "rateApplicationMethod": "WHOLE_BALANCE",
              "applicabilityConditions": {}
            }
          }
        ],
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

<section>
<h3 id="get-product-detail-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[ResponseBankingProductById](#schemaresponsebankingproductbyid)|

</section>

<aside class="success">
This operation does not require authentication
</aside>

</section>

</section>

<section>
<h1 id="consumer-data-standards-common-apis">Common APIs</h1>

<section>

## Get Customer

<a id="opIdgetCustomer"></a>

> Code samples

```http
GET https://data.provider.com.au/cds-au/v1/common/customer HTTP/1.1
Host: data.provider.com.au
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'

};

fetch('https://data.provider.com.au/cds-au/v1/common/customer',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

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

<section>
<h3 id="get-customer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[ResponseCommonCustomer](#schemaresponsecommoncustomer)|

</section>

<aside class="success">
This operation does not require authentication
</aside>

</section>

<section>

## Get Customer Detail

<a id="opIdgetCustomerDetail"></a>

> Code samples

```http
GET https://data.provider.com.au/cds-au/v1/common/customer/detail HTTP/1.1
Host: data.provider.com.au
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'

};

fetch('https://data.provider.com.au/cds-au/v1/common/customer/detail',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

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

<section>
<h3 id="get-customer-detail-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[ResponseCommonCustomerDetail](#schemaresponsecommoncustomerdetail)|

</section>

<aside class="success">
This operation does not require authentication
</aside>

</section>

</section>

<section>

# Schemas

<section>
<h2 id="tocS_RequestAccountIds">RequestAccountIds</h2>
<!-- backwards compatibility -->
<a id="schemarequestaccountids"></a>
<a id="schema_RequestAccountIds"></a>
<a id="tocSrequestaccountids"></a>
<a id="tocsrequestaccountids"></a>

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

<section>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|true|none|none|
|» accountIds|[string]|true|none|none|
|meta|[Meta](#schemameta)|true|none|none|

</section>
</section>

<section>
<h2 id="tocS_ResponseBankingProductList">ResponseBankingProductList</h2>
<!-- backwards compatibility -->
<a id="schemaresponsebankingproductlist"></a>
<a id="schema_ResponseBankingProductList"></a>
<a id="tocSresponsebankingproductlist"></a>
<a id="tocsresponsebankingproductlist"></a>

```json
{
  "data": {
    "products": [
      {
        "productId": "string",
        "effectiveFrom": "string",
        "effectiveTo": "string",
        "lastUpdated": "string",
        "productCategory": "TRANS_AND_SAVINGS_ACCOUNTS",
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

<section>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|true|none|none|
|» products|[[BankingProduct](#schemabankingproduct)]|true|none|none|
|links|[LinksPaginated](#schemalinkspaginated)|true|none|none|
|meta|[MetaPaginated](#schemametapaginated)|true|none|none|

</section>
</section>

<section>
<h2 id="tocS_BankingProduct">BankingProduct</h2>
<!-- backwards compatibility -->
<a id="schemabankingproduct"></a>
<a id="schema_BankingProduct"></a>
<a id="tocSbankingproduct"></a>
<a id="tocsbankingproduct"></a>

```json
{
  "productId": "string",
  "effectiveFrom": "string",
  "effectiveTo": "string",
  "lastUpdated": "string",
  "productCategory": "TRANS_AND_SAVINGS_ACCOUNTS",
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

<section>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|productId|string(ASCIIString)|true|none|A provider specific unique identifier for this product. This identifier must be unique to a product but does not otherwise need to adhere to ID permanence guidelines.|
|effectiveFrom|string(DateTimeString)|false|none|The date and time from which this product is effective (ie. is available for origination).  Used to enable the articulation of products to the regime before they are available for customers to originate|
|effectiveTo|string(DateTimeString)|false|none|The date and time at which this product will be retired and will no longer be offered.  Used to enable the managed deprecation of products|
|lastUpdated|string(DateTimeString)|true|none|The last date and time that the information for this product was changed (or the creation date for the product if it has never been altered)|
|productCategory|[BankingEnumProductCategory](#schemabankingenumproductcategory)|true|none|The list of available product categories for categorising products and accounts.  See [here](#product-categories) for more details|
|name|string|true|none|The display name of the product|
|description|string|true|none|A description of the product|
|brand|string|true|none|A label of the brand for the product. Able to be used for filtering. For data providers with single brands this value is still required|
|brandName|string|false|none|An optional display name of the brand|
|applicationUri|string(URIString)|false|none|A link to the an application web page where this product can be applied for.|
|isTailored|boolean|true|none|Indicates whether the product is specifically tailored to a circumstance.  In this case fees and prices are significantly negotiated depending on context. While all products are open to a degree of tailoring this flag indicates that tailoring is expected and thus that the provision of specific fees and rates is not applicable|
|additionalInformation|object|false|none|none|
|» overviewUri|string(URIString)|false|none|General overview of the product|
|» termsUri|string(URIString)|false|none|Terms and conditions for the product|
|» eligibilityUri|string(URIString)|false|none|Eligibility rules and criteria for the product|
|» feesAndPricingUri|string(URIString)|false|none|Description of fees, pricing, discounts, exemptions and bonuses for the product|
|» bundleUri|string(URIString)|false|none|Description of a bundle that this product can be part of|

</section>
</section>

<section>
<h2 id="tocS_ResponseBankingProductById">ResponseBankingProductById</h2>
<!-- backwards compatibility -->
<a id="schemaresponsebankingproductbyid"></a>
<a id="schema_ResponseBankingProductById"></a>
<a id="tocSresponsebankingproductbyid"></a>
<a id="tocsresponsebankingproductbyid"></a>

```json
{
  "data": {
    "productId": "string",
    "effectiveFrom": "string",
    "effectiveTo": "string",
    "lastUpdated": "string",
    "productCategory": "TRANS_AND_SAVINGS_ACCOUNTS",
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
        "additionalInfo": "string",
        "additionalInfoUri": "string",
        "productIds": [
          "string"
        ]
      }
    ],
    "features": [
      {
        "featureType": "CARD_ACCESS",
        "additionalValue": "string",
        "additionalInfo": "string",
        "additionalInfoUri": "string"
      }
    ],
    "constraints": [
      {
        "constraintType": "MIN_BALANCE",
        "additionalValue": "string",
        "additionalInfo": "string",
        "additionalInfoUri": "string"
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
        "accruedRate": "string",
        "accrualFrequency": "string",
        "currency": "string",
        "additionalValue": "string",
        "additionalInfo": "string",
        "additionalInfoUri": "string",
        "discounts": [
          {
            "description": "string",
            "discountType": "BALANCE",
            "amount": "string",
            "balanceRate": "string",
            "transactionRate": "string",
            "accruedRate": "string",
            "feeRate": "string",
            "additionalValue": "string",
            "additionalInfo": "string",
            "additionalInfoUri": "string",
            "eligibility": [
              {
                "discountEligibilityType": "BUSINESS",
                "additionalValue": "string",
                "additionalInfo": "string",
                "additionalInfoUri": "string"
              }
            ]
          }
        ]
      }
    ],
    "depositRates": [
      {
        "depositRateType": "FIXED",
        "rate": "string",
        "calculationFrequency": "string",
        "applicationFrequency": "string",
        "tiers": [
          {
            "name": "string",
            "unitOfMeasure": "DOLLAR",
            "minimumValue": 0,
            "maximumValue": 0,
            "rateApplicationMethod": "WHOLE_BALANCE",
            "applicabilityConditions": {},
            "subTier": {
              "name": "string",
              "unitOfMeasure": "DOLLAR",
              "minimumValue": 0,
              "maximumValue": 0,
              "rateApplicationMethod": "WHOLE_BALANCE",
              "applicabilityConditions": {}
            }
          }
        ],
        "additionalValue": "string",
        "additionalInfo": "string",
        "additionalInfoUri": "string"
      }
    ],
    "lendingRates": [
      {
        "lendingRateType": "FIXED",
        "rate": "string",
        "comparisonRate": "string",
        "calculationFrequency": "string",
        "applicationFrequency": "string",
        "interestPaymentDue": "IN_ARREARS",
        "tiers": [
          {
            "name": "string",
            "unitOfMeasure": "DOLLAR",
            "minimumValue": 0,
            "maximumValue": 0,
            "rateApplicationMethod": "WHOLE_BALANCE",
            "applicabilityConditions": {},
            "subTier": {
              "name": "string",
              "unitOfMeasure": "DOLLAR",
              "minimumValue": 0,
              "maximumValue": 0,
              "rateApplicationMethod": "WHOLE_BALANCE",
              "applicabilityConditions": {}
            }
          }
        ],
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

<section>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[BankingProductDetail](#schemabankingproductdetail)|true|none|none|
|links|[Links](#schemalinks)|true|none|none|
|meta|[Meta](#schemameta)|true|none|none|

</section>
</section>

<section>
<h2 id="tocS_BankingProductDetail">BankingProductDetail</h2>
<!-- backwards compatibility -->
<a id="schemabankingproductdetail"></a>
<a id="schema_BankingProductDetail"></a>
<a id="tocSbankingproductdetail"></a>
<a id="tocsbankingproductdetail"></a>

```json
{
  "productId": "string",
  "effectiveFrom": "string",
  "effectiveTo": "string",
  "lastUpdated": "string",
  "productCategory": "TRANS_AND_SAVINGS_ACCOUNTS",
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
      "additionalInfo": "string",
      "additionalInfoUri": "string",
      "productIds": [
        "string"
      ]
    }
  ],
  "features": [
    {
      "featureType": "CARD_ACCESS",
      "additionalValue": "string",
      "additionalInfo": "string",
      "additionalInfoUri": "string"
    }
  ],
  "constraints": [
    {
      "constraintType": "MIN_BALANCE",
      "additionalValue": "string",
      "additionalInfo": "string",
      "additionalInfoUri": "string"
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
      "accruedRate": "string",
      "accrualFrequency": "string",
      "currency": "string",
      "additionalValue": "string",
      "additionalInfo": "string",
      "additionalInfoUri": "string",
      "discounts": [
        {
          "description": "string",
          "discountType": "BALANCE",
          "amount": "string",
          "balanceRate": "string",
          "transactionRate": "string",
          "accruedRate": "string",
          "feeRate": "string",
          "additionalValue": "string",
          "additionalInfo": "string",
          "additionalInfoUri": "string",
          "eligibility": [
            {
              "discountEligibilityType": "BUSINESS",
              "additionalValue": "string",
              "additionalInfo": "string",
              "additionalInfoUri": "string"
            }
          ]
        }
      ]
    }
  ],
  "depositRates": [
    {
      "depositRateType": "FIXED",
      "rate": "string",
      "calculationFrequency": "string",
      "applicationFrequency": "string",
      "tiers": [
        {
          "name": "string",
          "unitOfMeasure": "DOLLAR",
          "minimumValue": 0,
          "maximumValue": 0,
          "rateApplicationMethod": "WHOLE_BALANCE",
          "applicabilityConditions": {},
          "subTier": {
            "name": "string",
            "unitOfMeasure": "DOLLAR",
            "minimumValue": 0,
            "maximumValue": 0,
            "rateApplicationMethod": "WHOLE_BALANCE",
            "applicabilityConditions": {}
          }
        }
      ],
      "additionalValue": "string",
      "additionalInfo": "string",
      "additionalInfoUri": "string"
    }
  ],
  "lendingRates": [
    {
      "lendingRateType": "FIXED",
      "rate": "string",
      "comparisonRate": "string",
      "calculationFrequency": "string",
      "applicationFrequency": "string",
      "interestPaymentDue": "IN_ARREARS",
      "tiers": [
        {
          "name": "string",
          "unitOfMeasure": "DOLLAR",
          "minimumValue": 0,
          "maximumValue": 0,
          "rateApplicationMethod": "WHOLE_BALANCE",
          "applicabilityConditions": {},
          "subTier": {
            "name": "string",
            "unitOfMeasure": "DOLLAR",
            "minimumValue": 0,
            "maximumValue": 0,
            "rateApplicationMethod": "WHOLE_BALANCE",
            "applicabilityConditions": {}
          }
        }
      ],
      "additionalValue": "string",
      "additionalInfo": "string",
      "additionalInfoUri": "string"
    }
  ]
}

```

<section>

### Properties

allOf

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[BankingProduct](#schemabankingproduct)|false|none|none|

and

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» bundles|[[BankingProductBundle](#schemabankingproductbundle)]|false|none|none|
|» features|[[BankingProductFeature](#schemabankingproductfeature)]|false|none|none|
|» constraints|[[BankingProductConstraint](#schemabankingproductconstraint)]|false|none|none|
|» eligibility|[[BankingProductEligibility](#schemabankingproducteligibility)]|false|none|none|
|» fees|[[BankingProductFee](#schemabankingproductfee)]|false|none|none|
|» depositRates|[[BankingProductDepositRate](#schemabankingproductdepositrate)]|false|none|none|
|» lendingRates|[[BankingProductLendingRate](#schemabankingproductlendingrate)]|false|none|none|

</section>
</section>

<section>
<h2 id="tocS_BankingProductBundle">BankingProductBundle</h2>
<!-- backwards compatibility -->
<a id="schemabankingproductbundle"></a>
<a id="schema_BankingProductBundle"></a>
<a id="tocSbankingproductbundle"></a>
<a id="tocsbankingproductbundle"></a>

```json
{
  "name": "string",
  "description": "string",
  "additionalInfo": "string",
  "additionalInfoUri": "string",
  "productIds": [
    "string"
  ]
}

```

<section>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Name of the bundle|
|description|string|true|none|Description of the bundle|
|additionalInfo|string|false|none|Display text providing more information on the bundle|
|additionalInfoUri|string(URIString)|false|none|Link to a web page with more information on the bundle criteria and benefits|
|productIds|[string]|true|none|Array of product IDs for products included in the bundle|

</section>
</section>

<section>
<h2 id="tocS_BankingProductFeature">BankingProductFeature</h2>
<!-- backwards compatibility -->
<a id="schemabankingproductfeature"></a>
<a id="schema_BankingProductFeature"></a>
<a id="tocSbankingproductfeature"></a>
<a id="tocsbankingproductfeature"></a>

```json
{
  "featureType": "CARD_ACCESS",
  "additionalValue": "string",
  "additionalInfo": "string",
  "additionalInfoUri": "string"
}

```

<section>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|featureType|string|true|none|The type of feature described|
|additionalValue|string|false|none|Generic field containing additional information relevant to the featureType specified. Whether mandatory or not is dependent on the value of featureType|
|additionalInfo|string|false|none|Display text providing more information on the feature. Mandatory if the feature type is set to OTHER|
|additionalInfoUri|string(URIString)|false|none|Link to a web page with more information on this feature|

<section>

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
|featureType|COMPLEMENTARY_PRODUCT_DISCOUNTS|
|featureType|BONUS_REWARDS|
|featureType|NOTIFICATIONS|
|featureType|OTHER|

</section>

</section>
</section>

<section>
<h2 id="tocS_BankingProductConstraint">BankingProductConstraint</h2>
<!-- backwards compatibility -->
<a id="schemabankingproductconstraint"></a>
<a id="schema_BankingProductConstraint"></a>
<a id="tocSbankingproductconstraint"></a>
<a id="tocsbankingproductconstraint"></a>

```json
{
  "constraintType": "MIN_BALANCE",
  "additionalValue": "string",
  "additionalInfo": "string",
  "additionalInfoUri": "string"
}

```

<section>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|constraintType|string|true|none|The type of constraint described.  See the next section for an overview of valid values and their meaning|
|additionalValue|string|false|none|Generic field containing additional information relevant to the constraintType specified.  Whether mandatory or not is dependent on the value of constraintType|
|additionalInfo|string|false|none|Display text providing more information the constraint|
|additionalInfoUri|string(URIString)|false|none|Link to a web page with more information on the constraint|

<section>

#### Enumerated Values

|Property|Value|
|---|---|
|constraintType|MIN_BALANCE|
|constraintType|MAX_BALANCE|
|constraintType|OPENING_BALANCE|
|constraintType|MAX_LIMIT|
|constraintType|MIN_LIMIT|

</section>

</section>
</section>

<section>
<h2 id="tocS_BankingProductEligibility">BankingProductEligibility</h2>
<!-- backwards compatibility -->
<a id="schemabankingproducteligibility"></a>
<a id="schema_BankingProductEligibility"></a>
<a id="tocSbankingproducteligibility"></a>
<a id="tocsbankingproducteligibility"></a>

```json
{
  "eligibilityType": "BUSINESS",
  "additionalValue": "string",
  "additionalInfo": "string",
  "additionalInfoUri": "string"
}

```

<section>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eligibilityType|string|true|none|The type of eligibility criteria described.  See the next section for an overview of valid values and their meaning|
|additionalValue|string|false|none|Generic field containing additional information relevant to the eligibilityType specified.  Whether mandatory or not is dependent on the value of eligibilityType|
|additionalInfo|string|false|none|Display text providing more information on the eligibility criteria. Mandatory if the eligibilityType field is set to OTHER|
|additionalInfoUri|string(URIString)|false|none|Link to a web page with more information on this eligibility criteria|

<section>

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
|eligibilityType|NATURAL_PERSON|
|eligibilityType|OTHER|

</section>

</section>
</section>

<section>
<h2 id="tocS_BankingProductFee">BankingProductFee</h2>
<!-- backwards compatibility -->
<a id="schemabankingproductfee"></a>
<a id="schema_BankingProductFee"></a>
<a id="tocSbankingproductfee"></a>
<a id="tocsbankingproductfee"></a>

```json
{
  "name": "string",
  "feeType": "PERIODIC",
  "amount": "string",
  "balanceRate": "string",
  "transactionRate": "string",
  "accruedRate": "string",
  "accrualFrequency": "string",
  "currency": "string",
  "additionalValue": "string",
  "additionalInfo": "string",
  "additionalInfoUri": "string",
  "discounts": [
    {
      "description": "string",
      "discountType": "BALANCE",
      "amount": "string",
      "balanceRate": "string",
      "transactionRate": "string",
      "accruedRate": "string",
      "feeRate": "string",
      "additionalValue": "string",
      "additionalInfo": "string",
      "additionalInfoUri": "string",
      "eligibility": [
        {
          "discountEligibilityType": "BUSINESS",
          "additionalValue": "string",
          "additionalInfo": "string",
          "additionalInfoUri": "string"
        }
      ]
    }
  ]
}

```

<section>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Name of the fee|
|feeType|string|true|none|The type of fee|
|amount|string(AmountString)|true|none|The amount charged for the fee. One of amount, balanceRate, transactionRate and accruedRate is mandatory|
|balanceRate|string(RateString)|false|none|A fee rate calculated based on a proportion of the balance. One of amount, balanceRate, transactionRate and accruedRate is mandatory|
|transactionRate|string(RateString)|false|none|A fee rate calculated based on a proportion of a transaction. One of amount, balanceRate, transactionRate and accruedRate is mandatory|
|accruedRate|string(RateString)|false|none|A fee rate calculated based on a proportion of the calculated interest accrued on the account. One of amount, balanceRate, transactionRate and accruedRate is mandatory|
|accrualFrequency|string|false|none|The indicative frequency with which the fee is calculated on the account. Only applies if balanceRate or accruedRate is also present. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations)|
|currency|string(CurrencyString)|false|none|The currency the fee will be charged in. Assumes AUD if absent|
|additionalValue|string|false|none|Generic field containing additional information relevant to the feeType specified. Whether mandatory or not is dependent on the value of feeType|
|additionalInfo|string|false|none|Display text providing more information on the fee|
|additionalInfoUri|string(URIString)|false|none|Link to a web page with more information on this fee|
|discounts|[[BankingProductDiscount](#schemabankingproductdiscount)]|false|none|none|

<section>

#### Enumerated Values

|Property|Value|
|---|---|
|feeType|PERIODIC|
|feeType|TRANSACTION|
|feeType|WITHDRAWAL|
|feeType|DEPOSIT|
|feeType|PAYMENT|
|feeType|PURCHASE|
|feeType|EVENT|
|feeType|UPFRONT|
|feeType|EXIT|

</section>

</section>
</section>

<section>
<h2 id="tocS_BankingProductDiscount">BankingProductDiscount</h2>
<!-- backwards compatibility -->
<a id="schemabankingproductdiscount"></a>
<a id="schema_BankingProductDiscount"></a>
<a id="tocSbankingproductdiscount"></a>
<a id="tocsbankingproductdiscount"></a>

```json
{
  "description": "string",
  "discountType": "BALANCE",
  "amount": "string",
  "balanceRate": "string",
  "transactionRate": "string",
  "accruedRate": "string",
  "feeRate": "string",
  "additionalValue": "string",
  "additionalInfo": "string",
  "additionalInfoUri": "string",
  "eligibility": [
    {
      "discountEligibilityType": "BUSINESS",
      "additionalValue": "string",
      "additionalInfo": "string",
      "additionalInfoUri": "string"
    }
  ]
}

```

<section>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|true|none|Description of the discount|
|discountType|string|true|none|The type of discount. See the next section for an overview of valid values and their meaning|
|amount|string(AmountString)|true|none|Value of the discount|
|balanceRate|string(RateString)|false|none|A discount rate calculated based on a proportion of the balance. Note that the currency of the fee discount is expected to be the same as the currency of the fee itself. One of amount, balanceRate, transactionRate, accruedRate and feeRate is mandatory. Unless noted in additionalInfo, assumes the application and calculation frequency are the same as the corresponding fee|
|transactionRate|string(RateString)|false|none|A discount rate calculated based on a proportion of a transaction. Note that the currency of the fee discount is expected to be the same as the currency of the fee itself. One of amount, balanceRate, transactionRate, accruedRate and feeRate is mandatory|
|accruedRate|string(RateString)|false|none|A discount rate calculated based on a proportion of the calculated interest accrued on the account. Note that the currency of the fee discount is expected to be the same as the currency of the fee itself. One of amount, balanceRate, transactionRate, accruedRate and feeRate is mandatory. Unless noted in additionalInfo, assumes the application and calculation frequency are the same as the corresponding fee|
|feeRate|string(RateString)|false|none|A discount rate calculated based on a proportion of the fee to which this discount is attached. Note that the currency of the fee discount is expected to be the same as the currency of the fee itself. One of amount, balanceRate, transactionRate, accruedRate and feeRate is mandatory. Unless noted in additionalInfo, assumes the application and calculation frequency are the same as the corresponding fee|
|additionalValue|string|false|none|Generic field containing additional information relevant to the discountType specified. Whether mandatory or not is dependent on the value of discountType|
|additionalInfo|string|false|none|Display text providing more information on the discount|
|additionalInfoUri|string(URIString)|false|none|Link to a web page with more information on this discount|
|eligibility|[[BankingProductDiscountEligibility](#schemabankingproductdiscounteligibility)]|false|none|none|

<section>

#### Enumerated Values

|Property|Value|
|---|---|
|discountType|BALANCE|
|discountType|DEPOSITS|
|discountType|PAYMENTS|
|discountType|FEE_CAP|
|discountType|ELIGIBILITY_ONLY|

</section>

</section>
</section>

<section>
<h2 id="tocS_BankingProductDiscountEligibility">BankingProductDiscountEligibility</h2>
<!-- backwards compatibility -->
<a id="schemabankingproductdiscounteligibility"></a>
<a id="schema_BankingProductDiscountEligibility"></a>
<a id="tocSbankingproductdiscounteligibility"></a>
<a id="tocsbankingproductdiscounteligibility"></a>

```json
{
  "discountEligibilityType": "BUSINESS",
  "additionalValue": "string",
  "additionalInfo": "string",
  "additionalInfoUri": "string"
}

```

<section>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|discountEligibilityType|string|true|none|The type of the specific eligibility constraint for a discount|
|additionalValue|string|false|none|Generic field containing additional information relevant to the discountEligibilityType specified. Whether mandatory or not is dependent on the value of discountEligibilityType|
|additionalInfo|string|false|none|Display text providing more information on this eligibility constraint|
|additionalInfoUri|string(URIString)|false|none|Link to a web page with more information on this eligibility constraint|

<section>

#### Enumerated Values

|Property|Value|
|---|---|
|discountEligibilityType|BUSINESS|
|discountEligibilityType|PENSION_RECIPIENT|
|discountEligibilityType|MIN_AGE|
|discountEligibilityType|MAX_AGE|
|discountEligibilityType|MIN_INCOME|
|discountEligibilityType|MIN_TURNOVER|
|discountEligibilityType|STAFF|
|discountEligibilityType|STUDENT|
|discountEligibilityType|EMPLOYMENT_STATUS|
|discountEligibilityType|RESIDENCY_STATUS|
|discountEligibilityType|NATURAL_PERSON|
|discountEligibilityType|INTRODUCTORY|
|discountEligibilityType|OTHER|

</section>

</section>
</section>

<section>
<h2 id="tocS_BankingProductDepositRate">BankingProductDepositRate</h2>
<!-- backwards compatibility -->
<a id="schemabankingproductdepositrate"></a>
<a id="schema_BankingProductDepositRate"></a>
<a id="tocSbankingproductdepositrate"></a>
<a id="tocsbankingproductdepositrate"></a>

```json
{
  "depositRateType": "FIXED",
  "rate": "string",
  "calculationFrequency": "string",
  "applicationFrequency": "string",
  "tiers": [
    {
      "name": "string",
      "unitOfMeasure": "DOLLAR",
      "minimumValue": 0,
      "maximumValue": 0,
      "rateApplicationMethod": "WHOLE_BALANCE",
      "applicabilityConditions": {},
      "subTier": {
        "name": "string",
        "unitOfMeasure": "DOLLAR",
        "minimumValue": 0,
        "maximumValue": 0,
        "rateApplicationMethod": "WHOLE_BALANCE",
        "applicabilityConditions": {}
      }
    }
  ],
  "additionalValue": "string",
  "additionalInfo": "string",
  "additionalInfoUri": "string"
}

```

<section>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|depositRateType|string|true|none|The type of rate (base, bonus, etc). See the next section for an overview of valid values and their meaning|
|rate|string(RateString)|true|none|The rate to be applied|
|calculationFrequency|string|false|none|The period after which the rate is applied to the balance to calculate the amount due for the period. Calculation of the amount is often daily (as balances may change) but accumulated until the total amount is 'applied' to the account (see applicationFrequency). Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations)|
|applicationFrequency|string|false|none|The period after which the calculated amount(s) (see calculationFrequency) are 'applied' (i.e. debited or credited) to the account. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations)|
|tiers|[[BankingProductRateTier](#schemabankingproductratetier)]|false|none|Rate tiers applicable for this rate|
|additionalValue|string|false|none|Generic field containing additional information relevant to the depositRateType specified. Whether mandatory or not is dependent on the value of depositRateType|
|additionalInfo|string|false|none|Display text providing more information on the rate|
|additionalInfoUri|string(URIString)|false|none|Link to a web page with more information on this rate|

<section>

#### Enumerated Values

|Property|Value|
|---|---|
|depositRateType|FIXED|
|depositRateType|BONUS|
|depositRateType|BUNDLE_BONUS|
|depositRateType|VARIABLE|
|depositRateType|INTRODUCTORY|
|depositRateType|FLOATING|
|depositRateType|MARKET_LINKED|

</section>

</section>
</section>

<section>
<h2 id="tocS_BankingProductLendingRate">BankingProductLendingRate</h2>
<!-- backwards compatibility -->
<a id="schemabankingproductlendingrate"></a>
<a id="schema_BankingProductLendingRate"></a>
<a id="tocSbankingproductlendingrate"></a>
<a id="tocsbankingproductlendingrate"></a>

```json
{
  "lendingRateType": "FIXED",
  "rate": "string",
  "comparisonRate": "string",
  "calculationFrequency": "string",
  "applicationFrequency": "string",
  "interestPaymentDue": "IN_ARREARS",
  "tiers": [
    {
      "name": "string",
      "unitOfMeasure": "DOLLAR",
      "minimumValue": 0,
      "maximumValue": 0,
      "rateApplicationMethod": "WHOLE_BALANCE",
      "applicabilityConditions": {},
      "subTier": {
        "name": "string",
        "unitOfMeasure": "DOLLAR",
        "minimumValue": 0,
        "maximumValue": 0,
        "rateApplicationMethod": "WHOLE_BALANCE",
        "applicabilityConditions": {}
      }
    }
  ],
  "additionalValue": "string",
  "additionalInfo": "string",
  "additionalInfoUri": "string"
}

```

<section>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lendingRateType|string|true|none|The type of rate (fixed, variable, etc). See the next section for an overview of valid values and their meaning|
|rate|string(RateString)|true|none|The rate to be applied|
|comparisonRate|string(RateString)|false|none|A comparison rate equivalent for this rate|
|calculationFrequency|string|false|none|The period after which the rate is applied to the balance to calculate the amount due for the period. Calculation of the amount is often daily (as balances may change) but accumulated until the total amount is 'applied' to the account (see applicationFrequency). Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations)|
|applicationFrequency|string|false|none|The period after which the calculated amount(s) (see calculationFrequency) are 'applied' (i.e. debited or credited) to the account. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations)|
|interestPaymentDue|string|false|none|When loan payments are due to be paid within each period. The investment benefit of earlier payments affect the rate that can be offered|
|tiers|[[BankingProductRateTier](#schemabankingproductratetier)]|false|none|Rate tiers applicable for this rate|
|additionalValue|string|false|none|Generic field containing additional<br>information relevant to the<br>lendingRateType specified. Whether<br>mandatory or not is dependent on the<br>value of lendingRateType|
|additionalInfo|string|false|none|Display text providing more information on the rate.|
|additionalInfoUri|string(URIString)|false|none|Link to a web page with more information on this rate|

<section>

#### Enumerated Values

|Property|Value|
|---|---|
|lendingRateType|FIXED|
|lendingRateType|VARIABLE|
|lendingRateType|INTRODUCTORY|
|lendingRateType|DISCOUNT|
|lendingRateType|PENALTY|
|lendingRateType|FLOATING|
|lendingRateType|MARKET_LINKED|
|lendingRateType|CASH_ADVANCE|
|lendingRateType|PURCHASE|
|lendingRateType|BUNDLE_DISCOUNT_FIXED|
|lendingRateType|BUNDLE_DISCOUNT_VARIABLE|
|interestPaymentDue|IN_ARREARS|
|interestPaymentDue|IN_ADVANCE|

</section>

</section>
</section>

<section>
<h2 id="tocS_BankingProductRateTier">BankingProductRateTier</h2>
<!-- backwards compatibility -->
<a id="schemabankingproductratetier"></a>
<a id="schema_BankingProductRateTier"></a>
<a id="tocSbankingproductratetier"></a>
<a id="tocsbankingproductratetier"></a>

```json
{
  "name": "string",
  "unitOfMeasure": "DOLLAR",
  "minimumValue": 0,
  "maximumValue": 0,
  "rateApplicationMethod": "WHOLE_BALANCE",
  "applicabilityConditions": {},
  "subTier": {
    "name": "string",
    "unitOfMeasure": "DOLLAR",
    "minimumValue": 0,
    "maximumValue": 0,
    "rateApplicationMethod": "WHOLE_BALANCE",
    "applicabilityConditions": {}
  }
}

```

Defines the criteria and conditions for which a rate applies

<section>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|A display name for the tier|
|unitOfMeasure|string|true|none|The unit of measure that applies to the tierValueMinimum and tierValueMaximum values e.g. 'DOLLAR', 'MONTH' (in the case of term deposit tiers), 'PERCENT' (in the case of loan-to-value ratio or LVR)|
|minimumValue|number|true|none|The number of tierUnitOfMeasure units that form the lower bound of the tier. The tier should be inclusive of this value|
|maximumValue|number|true|none|The number of tierUnitOfMeasure units that form the upper bound of the tier or band. For a tier with a discrete value (as opposed to a range of values e.g. 1 month) this must be the same as tierValueMinimum. Where this is the same as the tierValueMinimum value of the next-higher tier the referenced tier should be exclusive of this value. For example a term deposit of 2 months falls into the upper tier of the following tiers: (1 – 2 months, 2 – 3 months)|
|rateApplicationMethod|string|false|none|The method used to calculate the amount to be applied using one or more tiers. A single rate may be applied to the entire balance or each applicable tier rate is applied to the portion of the balance that falls into that tier (referred to as 'bands' or 'steps')|
|applicabilityConditions|object|false|none|Other conditions required to be met for this rate to apply|
|subTier|object|false|none|Defines the sub-tier criteria and conditions for which a rate applies|
|» name|string|true|none|A display name for the tier|
|» unitOfMeasure|string|true|none|The unit of measure that applies to the tierValueMinimum and tierValueMaximum values e.g. 'DOLLAR', 'MONTH' (in the case of term deposit tiers), 'PERCENT' (in the case of loan-to-value ratio or LVR)|
|» minimumValue|number|true|none|The number of tierUnitOfMeasure units that form the lower bound of the tier. The tier should be inclusive of this value|
|» maximumValue|number|true|none|The number of tierUnitOfMeasure units that form the upper bound of the tier or band. For a tier with a discrete value (as opposed to a range of values e.g. 1 month) this must be the same as tierValueMinimum. Where this is the same as the tierValueMinimum value of the next-higher tier the referenced tier should be exclusive of this value. For example a term deposit of 2 months falls into the upper tier of the following tiers: (1 – 2 months, 2 – 3 months)|
|» rateApplicationMethod|string|false|none|The method used to calculate the amount to be applied using one or more tiers. A single rate may be applied to the entire balance or each applicable tier rate is applied to the portion of the balance that falls into that tier (referred to as 'bands' or 'steps')|
|» applicabilityConditions|object|false|none|Other conditions required to be met for this rate to apply|

<section>

#### Enumerated Values

|Property|Value|
|---|---|
|unitOfMeasure|DOLLAR|
|unitOfMeasure|PERCENT|
|unitOfMeasure|MONTH|
|unitOfMeasure|DAY|
|rateApplicationMethod|WHOLE_BALANCE|
|rateApplicationMethod|PER_TIER|
|unitOfMeasure|DOLLAR|
|unitOfMeasure|PERCENT|
|unitOfMeasure|MONTH|
|unitOfMeasure|DAY|
|rateApplicationMethod|WHOLE_BALANCE|
|rateApplicationMethod|PER_TIER|

</section>

</section>
</section>

<section>
<h2 id="tocS_BankingProductRateCondition">BankingProductRateCondition</h2>
<!-- backwards compatibility -->
<a id="schemabankingproductratecondition"></a>
<a id="schema_BankingProductRateCondition"></a>
<a id="tocSbankingproductratecondition"></a>
<a id="tocsbankingproductratecondition"></a>

```json
{
  "additionalInfo": "string",
  "additionalInfoUri": "string"
}

```

Defines a condition for the applicability of a tiered rate

<section>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalInfo|string|false|none|Display text providing more information on the condition|
|additionalInfoUri|string(URIString)|false|none|Link to a web page with more information on this condition|

</section>
</section>

<section>
<h2 id="tocS_ResponseBankingAccountList">ResponseBankingAccountList</h2>
<!-- backwards compatibility -->
<a id="schemaresponsebankingaccountlist"></a>
<a id="schema_ResponseBankingAccountList"></a>
<a id="tocSresponsebankingaccountlist"></a>
<a id="tocsresponsebankingaccountlist"></a>

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
        "productCategory": "TRANS_AND_SAVINGS_ACCOUNTS",
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

<section>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|true|none|none|
|» accounts|[[BankingAccount](#schemabankingaccount)]|true|none|none|
|links|[LinksPaginated](#schemalinkspaginated)|true|none|none|
|meta|[MetaPaginated](#schemametapaginated)|true|none|none|

</section>
</section>

<section>
<h2 id="tocS_BankingAccount">BankingAccount</h2>
<!-- backwards compatibility -->
<a id="schemabankingaccount"></a>
<a id="schema_BankingAccount"></a>
<a id="tocSbankingaccount"></a>
<a id="tocsbankingaccount"></a>

```json
{
  "accountId": "string",
  "displayName": "string",
  "nickname": "string",
  "maskedNumber": "string",
  "openStatus": "OPEN",
  "isOwned": "true",
  "productCategory": "TRANS_AND_SAVINGS_ACCOUNTS",
  "productName": "string"
}

```

<section>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|string(ASCIIString)|true|none|A unique ID of the account adhering to the standards for ID permanence|
|displayName|string|true|none|The display name of the account. If a customer provided nickname is available that value should be returned|
|nickname|string|false|none|A customer supplied nick name for the account|
|maskedNumber|string(MaskedAccountString)|true|none|A masked version of the account. Whether BSB/Account Number, Credit Card PAN or another number this should be formatted with each digit masked and the last three digits unmasked|
|openStatus|string|false|none|Open or closed status for the account.  If not present then OPEN is assumed|
|isOwned|boolean|false|none|Flag indicating that the customer associated with the authorisation is an owner of the account.  Does not indicate sole ownership, however.  If no present then 'true' is assumed|
|productCategory|[BankingEnumProductCategory](#schemabankingenumproductcategory)|true|none|The list of available product categories for categorising products and accounts.  See [here](#product-categories) for more details|
|productName|string|true|none|A unique name or identifier for the account class for this account as defined by the account provider.  Not expected to be used for display|

<section>

#### Enumerated Values

|Property|Value|
|---|---|
|openStatus|OPEN|
|openStatus|CLOSED|

</section>

</section>
</section>

<section>
<h2 id="tocS_ResponseBankingAccountById">ResponseBankingAccountById</h2>
<!-- backwards compatibility -->
<a id="schemaresponsebankingaccountbyid"></a>
<a id="schema_ResponseBankingAccountById"></a>
<a id="tocSresponsebankingaccountbyid"></a>
<a id="tocsresponsebankingaccountbyid"></a>

```json
{
  "data": {
    "accountId": "string",
    "displayName": "string",
    "nickname": "string",
    "maskedNumber": "string",
    "openStatus": "OPEN",
    "isOwned": "true",
    "productCategory": "TRANS_AND_SAVINGS_ACCOUNTS",
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
      "repaymentType": "string",
      "loanPurpose": "INTEREST_ONLY"
    },
    "features": [
      {
        "featureType": "CARD_ACCESS",
        "additionalValue": "string",
        "additionalInfo": "string",
        "additionalInfoUri": "string",
        "isActivated": "true"
      }
    ],
    "fees": [
      {
        "name": "string",
        "feeType": "PERIODIC",
        "amount": "string",
        "balanceRate": "string",
        "transactionRate": "string",
        "accruedRate": "string",
        "accrualFrequency": "string",
        "currency": "string",
        "additionalValue": "string",
        "additionalInfo": "string",
        "additionalInfoUri": "string",
        "discounts": [
          {
            "description": "string",
            "discountType": "BALANCE",
            "amount": "string",
            "balanceRate": "string",
            "transactionRate": "string",
            "accruedRate": "string",
            "additionalValue": "string",
            "eligibility": [
              {
                "discountEligibilityType": "BUSINESS",
                "additionalValue": "string",
                "additionalInfo": "string",
                "additionalInfoUri": "string"
              }
            ],
            "additionalInfo": "string",
            "additionalInfoUri": "string"
          }
        ]
      }
    ],
    "depositRates": [
      {
        "depositRateType": "FIXED",
        "rate": "string",
        "calculationFrequency": "string",
        "applicationFrequency": "string",
        "additionalValue": "string",
        "additionalInfo": "string",
        "additionalInfoUri": "string"
      }
    ],
    "lendingRates": [
      {
        "lendingRateType": "FIXED",
        "rate": "string",
        "calculationFrequency": "string",
        "applicationFrequency": "string",
        "interestPaymentDue": "IN_ARREARS",
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

<section>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[BankingAccountDetail](#schemabankingaccountdetail)|true|none|none|
|links|[Links](#schemalinks)|true|none|none|
|meta|[Meta](#schemameta)|true|none|none|

</section>
</section>

<section>
<h2 id="tocS_BankingAccountDetail">BankingAccountDetail</h2>
<!-- backwards compatibility -->
<a id="schemabankingaccountdetail"></a>
<a id="schema_BankingAccountDetail"></a>
<a id="tocSbankingaccountdetail"></a>
<a id="tocsbankingaccountdetail"></a>

```json
{
  "accountId": "string",
  "displayName": "string",
  "nickname": "string",
  "maskedNumber": "string",
  "openStatus": "OPEN",
  "isOwned": "true",
  "productCategory": "TRANS_AND_SAVINGS_ACCOUNTS",
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
    "repaymentType": "string",
    "loanPurpose": "INTEREST_ONLY"
  },
  "features": [
    {
      "featureType": "CARD_ACCESS",
      "additionalValue": "string",
      "additionalInfo": "string",
      "additionalInfoUri": "string",
      "isActivated": "true"
    }
  ],
  "fees": [
    {
      "name": "string",
      "feeType": "PERIODIC",
      "amount": "string",
      "balanceRate": "string",
      "transactionRate": "string",
      "accruedRate": "string",
      "accrualFrequency": "string",
      "currency": "string",
      "additionalValue": "string",
      "additionalInfo": "string",
      "additionalInfoUri": "string",
      "discounts": [
        {
          "description": "string",
          "discountType": "BALANCE",
          "amount": "string",
          "balanceRate": "string",
          "transactionRate": "string",
          "accruedRate": "string",
          "additionalValue": "string",
          "eligibility": [
            {
              "discountEligibilityType": "BUSINESS",
              "additionalValue": "string",
              "additionalInfo": "string",
              "additionalInfoUri": "string"
            }
          ],
          "additionalInfo": "string",
          "additionalInfoUri": "string"
        }
      ]
    }
  ],
  "depositRates": [
    {
      "depositRateType": "FIXED",
      "rate": "string",
      "calculationFrequency": "string",
      "applicationFrequency": "string",
      "additionalValue": "string",
      "additionalInfo": "string",
      "additionalInfoUri": "string"
    }
  ],
  "lendingRates": [
    {
      "lendingRateType": "FIXED",
      "rate": "string",
      "calculationFrequency": "string",
      "applicationFrequency": "string",
      "interestPaymentDue": "IN_ARREARS",
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

<section>

### Properties

allOf

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[BankingAccount](#schemabankingaccount)|false|none|none|

and

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» bsb|string|false|none|The unmasked BSB for the account.  Is expected to be formatted as digits only with leading zeros included and no punctuation or spaces|
|» accountNumber|string|false|none|The unmasked account number for the account.  Should not be supplied if the account number is a PAN requiring PCI compliance. Is expected to be formatted as digits only with leading zeros included and no punctuation or spaces|
|» bundleName|string|false|none|Optional field to indicate if this account is part of a bundle that is providing additional benefit for to the customer|
|» specificAccountUType|string|false|none|The type of structure to present account specific fields.|
|» termDeposit|[BankingTermDepositAccount](#schemabankingtermdepositaccount)|false|none|none|
|» creditCard|[BankingCreditCardAccount](#schemabankingcreditcardaccount)|false|none|none|
|» loan|[BankingLoanAccount](#schemabankingloanaccount)|false|none|none|
|» features|[[BankingAccountFeature](#schemabankingaccountfeature)]|false|none|none|
|» fees|[[BankingAccountFee](#schemabankingaccountfee)]|false|none|none|
|» depositRates|[[BankingAccountDepositRate](#schemabankingaccountdepositrate)]|false|none|none|
|» lendingRates|[[BankingAccountLendingRate](#schemabankingaccountlendingrate)]|false|none|none|
|» address|[CommonPhysicalAddress](#schemacommonphysicaladdress)|false|none|none|

<section>

#### Enumerated Values

|Property|Value|
|---|---|
|specificAccountUType|termDeposit|
|specificAccountUType|creditCard|
|specificAccountUType|loan|

</section>

</section>
</section>

<section>
<h2 id="tocS_BankingTermDepositAccount">BankingTermDepositAccount</h2>
<!-- backwards compatibility -->
<a id="schemabankingtermdepositaccount"></a>
<a id="schema_BankingTermDepositAccount"></a>
<a id="tocSbankingtermdepositaccount"></a>
<a id="tocsbankingtermdepositaccount"></a>

```json
{
  "lodgementDate": "string",
  "maturityDate": "string",
  "maturityAmount": "string",
  "maturityCurrency": "string",
  "maturityInstructions": "ROLLED_OVER"
}

```

<section>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lodgementDate|string(DateString)|true|none|The lodgement date of the original deposit|
|maturityDate|string(DateString)|true|none|Maturity date for the term deposit|
|maturityAmount|string(AmountString)|false|none|Amount to be paid upon maturity. If absent it implies the amount to paid is variable and cannot currently be calculated|
|maturityCurrency|string(CurrencyString)|false|none|If absent assumes AUD|
|maturityInstructions|string|true|none|Current instructions on action to be taken at maturity|

<section>

#### Enumerated Values

|Property|Value|
|---|---|
|maturityInstructions|ROLLED_OVER|
|maturityInstructions|PAID_OUT_AT_MATURITY|

</section>

</section>
</section>

<section>
<h2 id="tocS_BankingCreditCardAccount">BankingCreditCardAccount</h2>
<!-- backwards compatibility -->
<a id="schemabankingcreditcardaccount"></a>
<a id="schema_BankingCreditCardAccount"></a>
<a id="tocSbankingcreditcardaccount"></a>
<a id="tocsbankingcreditcardaccount"></a>

```json
{
  "minPaymentAmount": "string",
  "paymentDueAmount": "string",
  "paymentCurrency": "string",
  "paymentDueDate": "string"
}

```

<section>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|minPaymentAmount|string(AmountString)|true|none|The minimum payment amount due for the next card payment|
|paymentDueAmount|string(AmountString)|true|none|The amount due for the next card payment|
|paymentCurrency|string(CurrencyString)|false|none|If absent assumes AUD|
|paymentDueDate|string(DateString)|true|none|Date that the next payment for the card is due|

</section>
</section>

<section>
<h2 id="tocS_BankingLoanAccount">BankingLoanAccount</h2>
<!-- backwards compatibility -->
<a id="schemabankingloanaccount"></a>
<a id="schema_BankingLoanAccount"></a>
<a id="tocSbankingloanaccount"></a>
<a id="tocsbankingloanaccount"></a>

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
  "repaymentType": "string",
  "loanPurpose": "INTEREST_ONLY"
}

```

<section>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|originalStartDate|string(DateString)|false|none|Optional original start date for the loan|
|originalLoanAmount|string(AmountString)|false|none|Optional original loan value|
|originalLoanCurrency|string(CurrencyString)|false|none|If absent assumes AUD|
|loanEndDate|string(DateString)|false|none|Date that the loan is due to be repaid in full|
|nextInstalmentDate|string(DateString)|false|none|Next date that an instalment is required|
|minInstalmentAmount|string(AmountString)|false|none|Minimum amount of next instalment|
|minInstalmentCurrency|string(CurrencyString)|false|none|If absent assumes AUD|
|maxRedraw|string(AmountString)|false|none|Maximum amount of funds that can be redrawn. If not present redraw is not available even if the feature exists for the account|
|maxRedrawCurrency|string(CurrencyString)|false|none|If absent assumes AUD|
|minRedraw|string(AmountString)|false|none|Minimum redraw amount|
|minRedrawCurrency|string(CurrencyString)|false|none|If absent assumes AUD|
|offsetAccountEnabled|boolean|false|none|Set to true if one or more offset accounts are configured for this loan account|
|offsetAccountIds|[string]|false|none|The accountIDs of the configured offset accounts attached to this loan. Only offset accounts that can be accesses under the current authorisation should be included. It is expected behaviour that offsetAccountEnabled is set to true but the offsetAccountIds field is absent or empty. This represents a situation where an offset account exists but details can not be accessed under the current authorisation|
|repaymentFrequency|string|false|none|The expected or required repayment frequency. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations)|
|repaymentType|string|false|none|The reason for taking out the loan. The purpose generally affects the rate offered due to different risk profiles|
|loanPurpose|string|false|none|Options in place for repayments. If absent defaults to PRINCIPAL_AND_INTEREST|

<section>

#### Enumerated Values

|Property|Value|
|---|---|
|loanPurpose|INTEREST_ONLY|
|loanPurpose|PRINCIPAL_AND_INTEREST|

</section>

</section>
</section>

<section>
<h2 id="tocS_BankingAccountFeature">BankingAccountFeature</h2>
<!-- backwards compatibility -->
<a id="schemabankingaccountfeature"></a>
<a id="schema_BankingAccountFeature"></a>
<a id="tocSbankingaccountfeature"></a>
<a id="tocsbankingaccountfeature"></a>

```json
{
  "featureType": "CARD_ACCESS",
  "additionalValue": "string",
  "additionalInfo": "string",
  "additionalInfoUri": "string",
  "isActivated": "true"
}

```

<section>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|featureType|string|true|none|The type of feature described|
|additionalValue|string|false|none|Generic field containing additional information relevant to the featureType specified. Whether mandatory or not is dependent on the value of featureType|
|additionalInfo|string|false|none|Display text providing more information on the feature. Mandatory if the feature type is set to OTHER|
|additionalInfoUri|string(URIString)|false|none|Link to a web page with more information on this feature|
|isActivated|boolean|false|none|True if the feature is already activated and false if the feature is available for activation.  Defaults to true if absent|

<section>

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
|featureType|COMPLEMENTARY_PRODUCT_DISCOUNTS|
|featureType|BONUS_REWARDS|
|featureType|NOTIFICATIONS|
|featureType|OTHER|

</section>

</section>
</section>

<section>
<h2 id="tocS_BankingAccountFee">BankingAccountFee</h2>
<!-- backwards compatibility -->
<a id="schemabankingaccountfee"></a>
<a id="schema_BankingAccountFee"></a>
<a id="tocSbankingaccountfee"></a>
<a id="tocsbankingaccountfee"></a>

```json
{
  "name": "string",
  "feeType": "PERIODIC",
  "amount": "string",
  "balanceRate": "string",
  "transactionRate": "string",
  "accruedRate": "string",
  "accrualFrequency": "string",
  "currency": "string",
  "additionalValue": "string",
  "additionalInfo": "string",
  "additionalInfoUri": "string",
  "discounts": [
    {
      "description": "string",
      "discountType": "BALANCE",
      "amount": "string",
      "balanceRate": "string",
      "transactionRate": "string",
      "accruedRate": "string",
      "additionalValue": "string",
      "eligibility": [
        {
          "discountEligibilityType": "BUSINESS",
          "additionalValue": "string",
          "additionalInfo": "string",
          "additionalInfoUri": "string"
        }
      ],
      "additionalInfo": "string",
      "additionalInfoUri": "string"
    }
  ]
}

```

<section>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Name of the fee|
|feeType|string|true|none|The type of fee|
|amount|string(AmountString)|false|none|The amount charged for the fee. One of amount, balanceRate, transactionRate and accruedRate is mandatory|
|balanceRate|string(RateString)|false|none|A fee rate calculated based on a proportion of the balance. One of amount, balanceRate, transactionRate and accruedRate is mandatory|
|transactionRate|string(RateString)|false|none|A fee rate calculated based on a proportion of a transaction. One of amount, balanceRate, transactionRate and accruedRate is mandatory|
|accruedRate|string(RateString)|false|none|A fee rate calculated based on a proportion of the calculated interest accrued on the account. One of amount, balanceRate, transactionRate and accruedRate is mandatory|
|accrualFrequency|string(CurrencyString)|false|none|The indicative frequency with which the fee is calculated on the account. Only applies if accruedRate is also present. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations)|
|currency|string(CurrencyString)|false|none|The currency the fee will be charged in. Assumes AUD if absent|
|additionalValue|string|false|none|Generic field containing additional information relevant to the feeType specified. Whether mandatory or not is dependent on the value of feeType|
|additionalInfo|string|false|none|Display text providing more information on the fee|
|additionalInfoUri|string(URIString)|false|none|Link to a web page with more information on this fee|
|discounts|[[BankingAccountDiscount](#schemabankingaccountdiscount)]|false|none|none|

<section>

#### Enumerated Values

|Property|Value|
|---|---|
|feeType|PERIODIC|
|feeType|TRANSACTION|
|feeType|WITHDRAWAL|
|feeType|DEPOSIT|
|feeType|PAYMENT|
|feeType|PURCHASE|
|feeType|EVENT|
|feeType|UPFRONT|
|feeType|EXIT|

</section>

</section>
</section>

<section>
<h2 id="tocS_BankingAccountDiscount">BankingAccountDiscount</h2>
<!-- backwards compatibility -->
<a id="schemabankingaccountdiscount"></a>
<a id="schema_BankingAccountDiscount"></a>
<a id="tocSbankingaccountdiscount"></a>
<a id="tocsbankingaccountdiscount"></a>

```json
{
  "description": "string",
  "discountType": "BALANCE",
  "amount": "string",
  "balanceRate": "string",
  "transactionRate": "string",
  "accruedRate": "string",
  "additionalValue": "string",
  "eligibility": [
    {
      "discountEligibilityType": "BUSINESS",
      "additionalValue": "string",
      "additionalInfo": "string",
      "additionalInfoUri": "string"
    }
  ],
  "additionalInfo": "string",
  "additionalInfoUri": "string"
}

```

<section>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|true|none|Description of the discount|
|discountType|string|true|none|The type of discount. See the next section for an overview of valid values and their meaning|
|amount|string(AmountString)|false|none|Value of the discount. Note that the currency of the fee discount is expected to be the same as the currency of the fee itself. One of amount, balanceRate, transactionRate and accruedRate is mandatory|
|balanceRate|string(RateString)|false|none|A discount rate calculated based on a proportion of the balance. Note that the currency of the fee discount is expected to be the same as the currency of the fee itself. One of amount, balanceRate, transactionRate and accruedRate is mandatory. Unless noted in additionalInfo, assumes the application and calculation frequency are the same as the corresponding fee|
|transactionRate|string(RateString)|false|none|A discount rate calculated based on a proportion of atransaction. Note that the currency of the fee discount is expected to be the same as the currency of the fee itself. One of amount, balanceRate, transactionRate and accruedRate is mandatory|
|accruedRate|string(RateString)|false|none|A discount rate calculated based on a proportion of the calculated interest accrued on the account. Note that the currency of the fee discount is expected to be the same as the currency of the fee itself. One of amount, balanceRate, transactionRate and accruedRate is mandatory. Unless noted in additionalInfo, assumes the application and calculation frequency are the same as the corresponding fee|
|additionalValue|string|false|none|Generic field containing additional information relevant to the discountType specified. Whether mandatory or not is dependent on the value of discountType|
|eligibility|[[BankingAccountDiscountEligibility](#schemabankingaccountdiscounteligibility)]|false|none|none|
|additionalInfo|string|false|none|Display text providing more information on the discount|
|additionalInfoUri|string(URIString)|false|none|Link to a web page with more information on this discount|

<section>

#### Enumerated Values

|Property|Value|
|---|---|
|discountType|BALANCE|
|discountType|DEPOSITS|
|discountType|PAYMENTS|
|discountType|FEE_CAP|
|discountType|ELIGIBILITY_ONLY|

</section>

</section>
</section>

<section>
<h2 id="tocS_BankingAccountDiscountEligibility">BankingAccountDiscountEligibility</h2>
<!-- backwards compatibility -->
<a id="schemabankingaccountdiscounteligibility"></a>
<a id="schema_BankingAccountDiscountEligibility"></a>
<a id="tocSbankingaccountdiscounteligibility"></a>
<a id="tocsbankingaccountdiscounteligibility"></a>

```json
{
  "discountEligibilityType": "BUSINESS",
  "additionalValue": "string",
  "additionalInfo": "string",
  "additionalInfoUri": "string"
}

```

<section>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|discountEligibilityType|string|true|none|The type of the specific eligibility constraint for a discount|
|additionalValue|string|false|none|Generic field containing additional information relevant to the discountEligibilityType specified. Whether mandatory or not is dependent on the value of discountEligibilityType|
|additionalInfo|string|false|none|Display text providing more information on this eligibility constraint|
|additionalInfoUri|string(URIString)|false|none|Link to a web page with more information on this eligibility constraint|

<section>

#### Enumerated Values

|Property|Value|
|---|---|
|discountEligibilityType|BUSINESS|
|discountEligibilityType|PENSION_RECIPIENT|
|discountEligibilityType|MIN_AGE|
|discountEligibilityType|MAX_AGE|
|discountEligibilityType|MIN_INCOME|
|discountEligibilityType|MIN_TURNOVER|
|discountEligibilityType|STAFF|
|discountEligibilityType|STUDENT|
|discountEligibilityType|EMPLOYMENT_STATUS|
|discountEligibilityType|RESIDENCY_STATUS|
|discountEligibilityType|NATURAL_PERSON|
|discountEligibilityType|INTRODUCTORY|
|discountEligibilityType|OTHER|

</section>

</section>
</section>

<section>
<h2 id="tocS_BankingAccountDepositRate">BankingAccountDepositRate</h2>
<!-- backwards compatibility -->
<a id="schemabankingaccountdepositrate"></a>
<a id="schema_BankingAccountDepositRate"></a>
<a id="tocSbankingaccountdepositrate"></a>
<a id="tocsbankingaccountdepositrate"></a>

```json
{
  "depositRateType": "FIXED",
  "rate": "string",
  "calculationFrequency": "string",
  "applicationFrequency": "string",
  "additionalValue": "string",
  "additionalInfo": "string",
  "additionalInfoUri": "string"
}

```

<section>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|depositRateType|string|true|none|The type of rate (base, bonus, etc). See the next section for an overview of valid values and their meaning|
|rate|string(RateString)|true|none|The rate to be applied|
|calculationFrequency|string|false|none|The period after which the rate is applied to the balance to calculate the amount due for the period. Calculation of the amount is often daily (as balances may change) but accumulated until the total amount is 'applied' to the account (see applicationFrequency). Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations)|
|applicationFrequency|string|false|none|The period after which the calculated amount(s) (see calculationFrequency) are 'applied' (i.e. debited or credited) to the account. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations)|
|additionalValue|string|false|none|Generic field containing additional information relevant to the depositRateType specified. Whether mandatory or not is dependent on the value of depositRateType|
|additionalInfo|string|false|none|Display text providing more information on the fee|
|additionalInfoUri|string(URIString)|false|none|Link to a web page with more information on this fee|

<section>

#### Enumerated Values

|Property|Value|
|---|---|
|depositRateType|FIXED|
|depositRateType|BONUS|
|depositRateType|BUNDLE_BONUS|
|depositRateType|VARIABLE|
|depositRateType|INTRODUCTORY|
|depositRateType|FLOATING|
|depositRateType|MARKET_LINKED|

</section>

</section>
</section>

<section>
<h2 id="tocS_BankingAccountLendingRate">BankingAccountLendingRate</h2>
<!-- backwards compatibility -->
<a id="schemabankingaccountlendingrate"></a>
<a id="schema_BankingAccountLendingRate"></a>
<a id="tocSbankingaccountlendingrate"></a>
<a id="tocsbankingaccountlendingrate"></a>

```json
{
  "lendingRateType": "FIXED",
  "rate": "string",
  "calculationFrequency": "string",
  "applicationFrequency": "string",
  "interestPaymentDue": "IN_ARREARS",
  "additionalValue": "string",
  "additionalInfo": "string",
  "additionalInfoUri": "string"
}

```

<section>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lendingRateType|string|true|none|The type of rate (fixed, variable, etc). See the next section for an overview of valid values and their meaning|
|rate|string(RateString)|true|none|The rate to be applied|
|calculationFrequency|string|false|none|The period after which the rate is applied to the balance to calculate the amount due for the period. Calculation of the amount is often daily (as balances may change) but accumulated until the total amount is 'applied' to the account (see applicationFrequency). Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations)|
|applicationFrequency|string|false|none|The period after which the calculated amount(s) (see calculationFrequency) are 'applied' (i.e. debited or credited) to the account. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations)|
|interestPaymentDue|string|false|none|When loan payments are due to be paid within each period. The investment benefit of earlier payments affect the rate that can be offered|
|additionalValue|string|false|none|Information relevant to the lendingRateType specified.  Whether mandatory or not is dependent on the Generic field containing additional information relevant to the lendingRateType specified. Whether mandatory or not is dependent on the value of lendingRateType|
|additionalInfo|string|false|none|Display text providing more information on the fee.|
|additionalInfoUri|string(URIString)|false|none|Link to a web page with more information  on this fee|

<section>

#### Enumerated Values

|Property|Value|
|---|---|
|lendingRateType|FIXED|
|lendingRateType|VARIABLE|
|lendingRateType|INTRODUCTORY|
|lendingRateType|DISCOUNT|
|lendingRateType|PENALTY|
|lendingRateType|FLOATING|
|lendingRateType|MARKET_LINKED|
|lendingRateType|CASH_ADVANCE|
|lendingRateType|PURCHASE|
|lendingRateType|BUNDLE_DISCOUNT_FIXED|
|lendingRateType|BUNDLE_DISCOUNT_VARIABLE|
|interestPaymentDue|IN_ARREARS|
|interestPaymentDue|IN_ADVANCE|

</section>

</section>
</section>

<section>
<h2 id="tocS_ResponseBankingTransactionList">ResponseBankingTransactionList</h2>
<!-- backwards compatibility -->
<a id="schemaresponsebankingtransactionlist"></a>
<a id="schema_ResponseBankingTransactionList"></a>
<a id="tocSresponsebankingtransactionlist"></a>
<a id="tocsresponsebankingtransactionlist"></a>

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

<section>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|true|none|none|
|» transactions|[[BankingTransaction](#schemabankingtransaction)]|true|none|none|
|links|[LinksPaginated](#schemalinkspaginated)|true|none|none|
|meta|[MetaPaginated](#schemametapaginated)|true|none|none|

</section>
</section>

<section>
<h2 id="tocS_BankingTransaction">BankingTransaction</h2>
<!-- backwards compatibility -->
<a id="schemabankingtransaction"></a>
<a id="schema_BankingTransaction"></a>
<a id="tocSbankingtransaction"></a>
<a id="tocsbankingtransaction"></a>

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

<section>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|string(ASCIIString)|true|none|A unique ID of the account adhering to the standards for ID permanence|
|transactionId|string(ASCIIString)|false|none|A unique ID of the transaction adhering to the standards for ID permanence. This is mandatory (through hashing if necessary) unless there are specific and justifiable technical reasons why a transaction cannot be uniquely identified for a particular account type|
|isDetailAvailable|boolean|true|none|True if extended information is available using the transaction detail end point. False if extended data is not available|
|type|string|true|none|The type of the transaction|
|status|string|true|none|Status of the transaction whether pending or posted.  Note that there is currently no provision in the standards to gaurantee the ability to correlate a pending transaction with an associated posted transaction|
|description|string|true|none|The transaction description as applied by the financial institution|
|postingDateTime|string(DateTimeString)|false|none|The time the transaction was posted. This field is mandatory if the transaction has status POSTED. This is the time that appears on a standard statement|
|valueDateTime|string(DateTimeString)|false|none|Date and time at which assets become available to the account owner in case of a credit entry, or cease to be available to the account owner in case of a debit transaction entry|
|executionDateTime|string(DateTimeString)|false|none|The time the transaction was executed by the originating customer, if available|
|amount|string(AmountString)|false|none|The value of the transaction. Negative values mean money was outgoing from the account|
|currency|string(CurrencyString)|false|none|The currency for the transaction amount. AUD assumed if not present|
|reference|string|true|none|The reference for the transaction provided by the originating institution.  Empty string if no data provided|
|merchantName|string|false|none|Name of the merchant for an outgoing payment to a merchant|
|merchantCategoryCode|string|false|none|The merchant category code (or MCC) for an outgoing payment to a merchant|
|billerCode|string|false|none|BPay Biller Code for the transaction (if available)|
|billerName|string|false|none|Name of the BPay biller for the transaction (if available)|
|crn|string|false|none|BPay CRN for the transaction (if available)|
|apcaNumber|string|false|none|6 Digit APCA number for the initiating institution|

<section>

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

</section>

</section>
</section>

<section>
<h2 id="tocS_ResponseBankingTransactionById">ResponseBankingTransactionById</h2>
<!-- backwards compatibility -->
<a id="schemaresponsebankingtransactionbyid"></a>
<a id="schema_ResponseBankingTransactionById"></a>
<a id="tocSresponsebankingtransactionbyid"></a>
<a id="tocsresponsebankingtransactionbyid"></a>

```json
{
  "data": {
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
  },
  "links": {
    "self": "string"
  },
  "meta": {}
}

```

<section>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[BankingTransactionDetail](#schemabankingtransactiondetail)|true|none|none|
|links|[Links](#schemalinks)|true|none|none|
|meta|[Meta](#schemameta)|true|none|none|

</section>
</section>

<section>
<h2 id="tocS_BankingTransactionDetail">BankingTransactionDetail</h2>
<!-- backwards compatibility -->
<a id="schemabankingtransactiondetail"></a>
<a id="schema_BankingTransactionDetail"></a>
<a id="tocSbankingtransactiondetail"></a>
<a id="tocsbankingtransactiondetail"></a>

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

<section>

### Properties

allOf

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[BankingTransaction](#schemabankingtransaction)|false|none|none|

and

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» extendedData|object|true|none|none|
|»» payer|string|false|none|Name or description of the originating payer.  Mandatory for inbound payment|
|»» payee|string|false|none|Name or description of the target payee. Mandatory for an outbound payment|
|»» extensionUType|string|false|none|Optional extended data provided specific to transaction originated via NPP|
|»» extendedDescription|string|false|none|An extended string description. Only present if specified by the extensionUType field|
|»» serviceId|string|false|none|Identifier of the applicable NPP payment service|

<section>

#### Enumerated Values

|Property|Value|
|---|---|
|extensionUType|extendedDescription|
|serviceId|X2P1.01|

</section>

</section>
</section>

<section>
<h2 id="tocS_ResponseBankingAccountsBalanceList">ResponseBankingAccountsBalanceList</h2>
<!-- backwards compatibility -->
<a id="schemaresponsebankingaccountsbalancelist"></a>
<a id="schema_ResponseBankingAccountsBalanceList"></a>
<a id="tocSresponsebankingaccountsbalancelist"></a>
<a id="tocsresponsebankingaccountsbalancelist"></a>

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

<section>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|true|none|none|
|» balances|[[BankingBalance](#schemabankingbalance)]|true|none|none|
|links|[LinksPaginated](#schemalinkspaginated)|true|none|none|
|meta|[MetaPaginated](#schemametapaginated)|true|none|none|

</section>
</section>

<section>
<h2 id="tocS_BankingBalance">BankingBalance</h2>
<!-- backwards compatibility -->
<a id="schemabankingbalance"></a>
<a id="schema_BankingBalance"></a>
<a id="tocSbankingbalance"></a>
<a id="tocsbankingbalance"></a>

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

<section>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|string(ASCIIString)|true|none|A unique ID of the account adhering to the standards for ID permanence|
|balanceUType|string|true|none|The type of balance object provided for the account|
|deposit|[BankingDepositBalance](#schemabankingdepositbalance)|false|none|none|
|lending|[BankingLendingBalance](#schemabankinglendingbalance)|false|none|none|
|purses|[[CommonCurrencyAmount](#schemacommoncurrencyamount)]|false|none|none|

<section>

#### Enumerated Values

|Property|Value|
|---|---|
|balanceUType|deposit|
|balanceUType|lending|
|balanceUType|purses|

</section>

</section>
</section>

<section>
<h2 id="tocS_BankingDepositBalance">BankingDepositBalance</h2>
<!-- backwards compatibility -->
<a id="schemabankingdepositbalance"></a>
<a id="schema_BankingDepositBalance"></a>
<a id="tocSbankingdepositbalance"></a>
<a id="tocsbankingdepositbalance"></a>

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

<section>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currentBalance|[CommonCurrencyAmount](#schemacommoncurrencyamount)|true|none|none|
|availableBalance|[CommonCurrencyAmount](#schemacommoncurrencyamount)|true|none|none|

</section>
</section>

<section>
<h2 id="tocS_BankingLendingBalance">BankingLendingBalance</h2>
<!-- backwards compatibility -->
<a id="schemabankinglendingbalance"></a>
<a id="schema_BankingLendingBalance"></a>
<a id="tocSbankinglendingbalance"></a>
<a id="tocsbankinglendingbalance"></a>

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

<section>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountBalance|[CommonCurrencyAmount](#schemacommoncurrencyamount)|true|none|none|
|availableBalance|[CommonCurrencyAmount](#schemacommoncurrencyamount)|true|none|none|
|creditLimit|[CommonCurrencyAmount](#schemacommoncurrencyamount)|true|none|none|
|amortisedLimit|[CommonCurrencyAmount](#schemacommoncurrencyamount)|false|none|none|

</section>
</section>

<section>
<h2 id="tocS_ResponseBankingPayeeList">ResponseBankingPayeeList</h2>
<!-- backwards compatibility -->
<a id="schemaresponsebankingpayeelist"></a>
<a id="schema_ResponseBankingPayeeList"></a>
<a id="tocSresponsebankingpayeelist"></a>
<a id="tocsresponsebankingpayeelist"></a>

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

<section>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|true|none|none|
|» payees|[[BankingPayee](#schemabankingpayee)]|true|none|The list of payees returned|
|links|[LinksPaginated](#schemalinkspaginated)|true|none|none|
|meta|[MetaPaginated](#schemametapaginated)|true|none|none|

</section>
</section>

<section>
<h2 id="tocS_ResponseBankingPayeeById">ResponseBankingPayeeById</h2>
<!-- backwards compatibility -->
<a id="schemaresponsebankingpayeebyid"></a>
<a id="schema_ResponseBankingPayeeById"></a>
<a id="tocSresponsebankingpayeebyid"></a>
<a id="tocsresponsebankingpayeebyid"></a>

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

<section>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[BankingPayeeDetail](#schemabankingpayeedetail)|true|none|none|
|links|[Links](#schemalinks)|true|none|none|
|meta|[Meta](#schemameta)|true|none|none|

</section>
</section>

<section>
<h2 id="tocS_BankingPayee">BankingPayee</h2>
<!-- backwards compatibility -->
<a id="schemabankingpayee"></a>
<a id="schema_BankingPayee"></a>
<a id="tocSbankingpayee"></a>
<a id="tocsbankingpayee"></a>

```json
{
  "payeeId": "string",
  "nickname": "string",
  "description": "string",
  "type": "DOMESTIC",
  "creationDate": "string"
}

```

<section>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|payeeId|string(ASCIIString)|true|none|ID of the payee adhering to the rules of ID permanence|
|nickname|string|true|none|The short display name of the payee as provided by the customer|
|description|string|false|none|A description of the payee provided by the customer|
|type|string|true|none|The type of payee. DOMESTIC means a registered payee for domestic payments including NPP. INTERNATIONAL means a registered payee for international payments. BILLER means a registered payee for BPAY|
|creationDate|string(DateString)|false|none|The date the payee was created by the customer|

<section>

#### Enumerated Values

|Property|Value|
|---|---|
|type|DOMESTIC|
|type|INTERNATIONAL|
|type|BILLER|

</section>

</section>
</section>

<section>
<h2 id="tocS_BankingPayeeDetail">BankingPayeeDetail</h2>
<!-- backwards compatibility -->
<a id="schemabankingpayeedetail"></a>
<a id="schema_BankingPayeeDetail"></a>
<a id="tocSbankingpayeedetail"></a>
<a id="tocsbankingpayeedetail"></a>

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

<section>

### Properties

allOf

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[BankingPayee](#schemabankingpayee)|false|none|none|

and

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» payeeUType|string|true|none|Type of object included that describes the payee in detail|
|» domestic|[BankingDomesticPayee](#schemabankingdomesticpayee)|false|none|none|
|» biller|[BankingBillerPayee](#schemabankingbillerpayee)|false|none|none|
|» international|[BankingInternationalPayee](#schemabankinginternationalpayee)|false|none|none|

<section>

#### Enumerated Values

|Property|Value|
|---|---|
|payeeUType|domestic|
|payeeUType|biller|
|payeeUType|international|

</section>

</section>
</section>

<section>
<h2 id="tocS_BankingDomesticPayee">BankingDomesticPayee</h2>
<!-- backwards compatibility -->
<a id="schemabankingdomesticpayee"></a>
<a id="schema_BankingDomesticPayee"></a>
<a id="tocSbankingdomesticpayee"></a>
<a id="tocsbankingdomesticpayee"></a>

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

<section>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|payeeAccountUType|string|true|none|Type of account object included. Valid values are: { payeeAccountUType - - account A standard Australian account defined by BSB/Account Number payId A PayID recognised by NPP|
|account|[BankingDomesticPayeeAccount](#schemabankingdomesticpayeeaccount)|false|none|none|
|card|[BankingDomesticPayeeCard](#schemabankingdomesticpayeecard)|false|none|none|
|payId|[BankingDomesticPayeePayId](#schemabankingdomesticpayeepayid)|false|none|none|

<section>

#### Enumerated Values

|Property|Value|
|---|---|
|payeeAccountUType|account|
|payeeAccountUType|card|
|payeeAccountUType|payId|

</section>

</section>
</section>

<section>
<h2 id="tocS_BankingDomesticPayeeAccount">BankingDomesticPayeeAccount</h2>
<!-- backwards compatibility -->
<a id="schemabankingdomesticpayeeaccount"></a>
<a id="schema_BankingDomesticPayeeAccount"></a>
<a id="tocSbankingdomesticpayeeaccount"></a>
<a id="tocsbankingdomesticpayeeaccount"></a>

```json
{
  "accountName": "string",
  "bsb": "string",
  "accountNumber": "string"
}

```

<section>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountName|string|true|none|Name of the account to pay to|
|bsb|string|true|none|BSB of the account to pay to|
|accountNumber|string|true|none|Number of the account to pay to|

</section>
</section>

<section>
<h2 id="tocS_BankingDomesticPayeeCard">BankingDomesticPayeeCard</h2>
<!-- backwards compatibility -->
<a id="schemabankingdomesticpayeecard"></a>
<a id="schema_BankingDomesticPayeeCard"></a>
<a id="tocSbankingdomesticpayeecard"></a>
<a id="tocsbankingdomesticpayeecard"></a>

```json
{
  "cardNumber": "string"
}

```

<section>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cardNumber|string(MaskedPANString)|true|none|Name of the account to pay to|

</section>
</section>

<section>
<h2 id="tocS_BankingDomesticPayeePayId">BankingDomesticPayeePayId</h2>
<!-- backwards compatibility -->
<a id="schemabankingdomesticpayeepayid"></a>
<a id="schema_BankingDomesticPayeePayId"></a>
<a id="tocSbankingdomesticpayeepayid"></a>
<a id="tocsbankingdomesticpayeepayid"></a>

```json
{
  "name": "string",
  "identifier": "string",
  "type": "EMAIL"
}

```

<section>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The name assigned to the PayID by the owner of the PayID|
|identifier|string|true|none|The identifier of the PayID (dependent on type)|
|type|string|true|none|The type of the PayID|

<section>

#### Enumerated Values

|Property|Value|
|---|---|
|type|EMAIL|
|type|MOBILE|
|type|ORG_NUMBER|
|type|ORG_NAME|

</section>

</section>
</section>

<section>
<h2 id="tocS_BankingBillerPayee">BankingBillerPayee</h2>
<!-- backwards compatibility -->
<a id="schemabankingbillerpayee"></a>
<a id="schema_BankingBillerPayee"></a>
<a id="tocSbankingbillerpayee"></a>
<a id="tocsbankingbillerpayee"></a>

```json
{
  "billerCode": "string",
  "crn": "string",
  "billerName": "string"
}

```

<section>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billerCode|string|true|none|BPay Biller Code of the Biller|
|crn|string|false|none|BPay CRN of the Biller. If the contents of the CRN match the format of a Credit Card PAN then it should be masked using the rules applicable for the MaskedPANString common type|
|billerName|string|true|none|Name of the Biller|

</section>
</section>

<section>
<h2 id="tocS_BankingInternationalPayee">BankingInternationalPayee</h2>
<!-- backwards compatibility -->
<a id="schemabankinginternationalpayee"></a>
<a id="schema_BankingInternationalPayee"></a>
<a id="tocSbankinginternationalpayee"></a>
<a id="tocsbankinginternationalpayee"></a>

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

<section>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|beneficiaryDetails|object|true|none|none|
|» name|string|false|none|Name of the beneficiary|
|» country|string|true|none|Country where the beneficiary resides. A valid ISO 3166 Alpha-3 country code|
|» message|string|false|none|Response message for the payment|
|bankDetails|object|true|none|none|
|» country|string|true|none|Country of the recipient institution. A valid ISO 3166 Alpha-3 country code|
|» accountNumber|string|true|none|Account Targeted for payment|
|» bankAddress|object|false|none|none|
|»» name|string|true|none|Name of the recipient Bank|
|»» address|string|true|none|Address of the recipient Bank|
|» beneficiaryBankBIC|string|false|none|Swift bank code.  Aligns with standard [ISO 9362](https://www.iso.org/standard/60390.html)|
|» fedWireNumber|string|false|none|Number for Fedwire payment (Federal Reserve Wire Network)|
|» sortCode|string|false|none|Sort code used for account identification in some jurisdictions|
|» chipNumber|string|false|none|Number for the Clearing House Interbank Payments System|
|» routingNumber|string|false|none|International bank routing number|
|» legalEntityIdentifier|string|false|none|The legal entity identifier (LEI) for the beneficiary.  Aligns with [ISO 17442](https://www.iso.org/standard/59771.html)|

</section>
</section>

<section>
<h2 id="tocS_ResponseBankingDirectDebitAuthorisationList">ResponseBankingDirectDebitAuthorisationList</h2>
<!-- backwards compatibility -->
<a id="schemaresponsebankingdirectdebitauthorisationlist"></a>
<a id="schema_ResponseBankingDirectDebitAuthorisationList"></a>
<a id="tocSresponsebankingdirectdebitauthorisationlist"></a>
<a id="tocsresponsebankingdirectdebitauthorisationlist"></a>

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

<section>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|true|none|none|
|» directDebitAuthorisations|[[BankingDirectDebit](#schemabankingdirectdebit)]|true|none|The list of authorisations returned|
|links|[LinksPaginated](#schemalinkspaginated)|true|none|none|
|meta|[MetaPaginated](#schemametapaginated)|true|none|none|

</section>
</section>

<section>
<h2 id="tocS_BankingDirectDebit">BankingDirectDebit</h2>
<!-- backwards compatibility -->
<a id="schemabankingdirectdebit"></a>
<a id="schema_BankingDirectDebit"></a>
<a id="tocSbankingdirectdebit"></a>
<a id="tocsbankingdirectdebit"></a>

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

<section>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|string(ASCIIString)|true|none|A unique ID of the account adhering to the standards for ID permanence.|
|authorisedEntity|[BankingAuthorisedEntity](#schemabankingauthorisedentity)|false|none|none|
|lastDebitDateTime|string(DateTimeString)|false|none|The date and time of the last debit executed under this authorisation|
|lastDebitAmount|string(AmountString)|false|none|The amount of the last debit executed under this authorisation|

</section>
</section>

<section>
<h2 id="tocS_BankingAuthorisedEntity">BankingAuthorisedEntity</h2>
<!-- backwards compatibility -->
<a id="schemabankingauthorisedentity"></a>
<a id="schema_BankingAuthorisedEntity"></a>
<a id="tocSbankingauthorisedentity"></a>
<a id="tocsbankingauthorisedentity"></a>

```json
{
  "name": "string",
  "financialInstitution": "string",
  "abn": "string",
  "acn": "string",
  "arbn": "string"
}

```

<section>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Name of the authorised entity|
|financialInstitution|string|true|none|Name of the financial institution through which the direct debit will be executed|
|abn|string|false|none|Australian Business Number for the authorised entity|
|acn|string|false|none|Australian Business Number for the authorised entity|
|arbn|string|false|none|Australian Registered Body Number for the authorised entity|

</section>
</section>

<section>
<h2 id="tocS_ResponseCommonCustomer">ResponseCommonCustomer</h2>
<!-- backwards compatibility -->
<a id="schemaresponsecommoncustomer"></a>
<a id="schema_ResponseCommonCustomer"></a>
<a id="tocSresponsecommoncustomer"></a>
<a id="tocsresponsecommoncustomer"></a>

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

<section>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|true|none|none|
|» customerUType|string|true|none|The type of customer object that is present|
|» person|[CommonPerson](#schemacommonperson)|false|none|none|
|» organisation|[CommonOrganisation](#schemacommonorganisation)|false|none|none|
|links|[Links](#schemalinks)|true|none|none|
|meta|[Meta](#schemameta)|true|none|none|

<section>

#### Enumerated Values

|Property|Value|
|---|---|
|customerUType|person|
|customerUType|organisation|

</section>

</section>
</section>

<section>
<h2 id="tocS_ResponseCommonCustomerDetail">ResponseCommonCustomerDetail</h2>
<!-- backwards compatibility -->
<a id="schemaresponsecommoncustomerdetail"></a>
<a id="schema_ResponseCommonCustomerDetail"></a>
<a id="tocSresponsecommoncustomerdetail"></a>
<a id="tocsresponsecommoncustomerdetail"></a>

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

<section>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|true|none|none|
|» customerUType|string|true|none|The type of customer object that is present|
|» person|[CommonPersonDetail](#schemacommonpersondetail)|false|none|none|
|» organisation|[CommonOrganisationDetail](#schemacommonorganisationdetail)|false|none|none|
|links|[Links](#schemalinks)|true|none|none|
|meta|[Meta](#schemameta)|true|none|none|

<section>

#### Enumerated Values

|Property|Value|
|---|---|
|customerUType|person|
|customerUType|organisation|

</section>

</section>
</section>

<section>
<h2 id="tocS_CommonPerson">CommonPerson</h2>
<!-- backwards compatibility -->
<a id="schemacommonperson"></a>
<a id="schema_CommonPerson"></a>
<a id="tocScommonperson"></a>
<a id="tocscommonperson"></a>

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

<section>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lastUpdateTime|string(DateTimeString)|true|none|The date and time that this record was last updated by the customer.  If no update has occurred then this date should reflect the initial creation date for the data|
|firstName|string|false|none|For people with single names this field need not be present.  The single name should be in the lastName field|
|lastName|string|true|none|For people with single names the single name should be in this field|
|middleNames|[string]|true|none|Field is mandatory but array may be empty|
|prefix|string|false|none|Also known as title or salutation.  The prefix to the name (e.g. Mr, Mrs, Ms, Miss, Sir, etc)|
|suffix|string|false|none|Used for a trailing suffix to the name (e.g. Jr)|
|occupationCode|string|false|none|Value is a valid [ANZCO v1.2](http://www.abs.gov.au/ANZSCO) Standard Occupation classification.|

</section>
</section>

<section>
<h2 id="tocS_CommonPersonDetail">CommonPersonDetail</h2>
<!-- backwards compatibility -->
<a id="schemacommonpersondetail"></a>
<a id="schema_CommonPersonDetail"></a>
<a id="tocScommonpersondetail"></a>
<a id="tocscommonpersondetail"></a>

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

<section>

### Properties

allOf

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[CommonPerson](#schemacommonperson)|false|none|none|

and

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» phoneNumbers|[[CommonPhoneNumber](#schemacommonphonenumber)]|true|none|At least one record is required|
|» emailAddresses|[[CommonEmailAddress](#schemacommonemailaddress)]|true|none|May be empty|
|» physicalAddresses|[[CommonPhysicalAddressWithPurpose](#schemacommonphysicaladdresswithpurpose)]|true|none|Must contain at least one address. One and only one address may have the purpose of REGISTERED. Zero or one, and no more than one, record may have the purpose of MAIL. If zero then the REGISTERED address is to be used for mail|

</section>
</section>

<section>
<h2 id="tocS_CommonOrganisation">CommonOrganisation</h2>
<!-- backwards compatibility -->
<a id="schemacommonorganisation"></a>
<a id="schema_CommonOrganisation"></a>
<a id="tocScommonorganisation"></a>
<a id="tocscommonorganisation"></a>

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

<section>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lastUpdateTime|string(DateTimeString)|true|none|The date and time that this record was last updated by the customer. If no update has occurred then this date should reflect the initial creation date for the data|
|agentFirstName|string|false|none|The first name of the individual providing access on behalf of the organisation. For people with single names this field need not be present.  The single name should be in the lastName field|
|agentLastName|string|true|none|The last name of the individual providing access on behalf of the organisation. For people with single names the single name should be in this field|
|agentRole|string|true|none|The role of the individual identified as the agent who is providing authorisation.  Expected to be used for display.  Default to “Unspecified” if the role is not known|
|businessName|string|true|none|Name of the organisation|
|legalName|string|false|none|Legal name, if different to the business name|
|shortName|string|false|none|Short name used for communication, if  different to the business name|
|abn|string|false|none|Australian Business Number for the organisation|
|acn|string|false|none|Australian Company Number for the organisation. Required only if an ACN is applicable for the organisation type|
|isACNCRegistered|boolean|false|none|True if registered with the ACNC.  False if not. Absent or null if not confirmed.|
|industryCode|string|false|none|[ANZSIC (2006)](http://www.abs.gov.au/anzsic) code for the organisation.|
|organisationType|string|true|none|Legal organisation type|
|registeredCountry|string|false|none|Enumeration with values from ISO 3166 Alpha-3 country codes.  Assumed to be AUS if absent|
|establishmentDate|string(DateString)|false|none|The date the organisation described was established|

<section>

#### Enumerated Values

|Property|Value|
|---|---|
|organisationType|SOLE_TRADER|
|organisationType|COMPANY|
|organisationType|PARTNERSHIP|
|organisationType|TRUST|
|organisationType|GOVERNMENT_ENTITY|
|organisationType|OTHER|

</section>

</section>
</section>

<section>
<h2 id="tocS_CommonOrganisationDetail">CommonOrganisationDetail</h2>
<!-- backwards compatibility -->
<a id="schemacommonorganisationdetail"></a>
<a id="schema_CommonOrganisationDetail"></a>
<a id="tocScommonorganisationdetail"></a>
<a id="tocscommonorganisationdetail"></a>

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

<section>

### Properties

allOf

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[CommonOrganisation](#schemacommonorganisation)|false|none|none|

and

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» physicalAddresses|[[CommonPhysicalAddressWithPurpose](#schemacommonphysicaladdresswithpurpose)]|true|none|Must contain at least one address. One and only one address may have the purpose of REGISTERED. Zero or one, and no more than one, record may have the purpose of MAIL. If zero then the REGISTERED address is to be used for mail|

</section>
</section>

<section>
<h2 id="tocS_CommonPhoneNumber">CommonPhoneNumber</h2>
<!-- backwards compatibility -->
<a id="schemacommonphonenumber"></a>
<a id="schema_CommonPhoneNumber"></a>
<a id="tocScommonphonenumber"></a>
<a id="tocscommonphonenumber"></a>

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

<section>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|isPreferred|boolean|false|none|Required to be true for one and only one entry to indicate the preferred phone number.  Assumed to be 'false' if not present|
|purpose|string|true|none|The purpose of the number as specified by the customer|
|countryCode|string|false|none|If absent, assumed to be Australia (+61). The + should be included|
|areaCode|string|false|none|Required for non Mobile Phones, if field is present and refers to Australian code - the leading 0 should be omitted.|
|number|string|true|none|The actual phone number, with leading zeros as appropriate|
|extension|string|false|none|An extension number (if applicable)|
|fullNumber|string|true|none|Fully formatted phone number with country code, area code, number and extension incorporated. Formatted according to section 5.1.4. of RFC 3966|

<section>

#### Enumerated Values

|Property|Value|
|---|---|
|purpose|MOBILE|
|purpose|HOME|
|purpose|WORK|
|purpose|OTHER|
|purpose|INTERNATIONAL|
|purpose|UNSPECIFIED|

</section>

</section>
</section>

<section>
<h2 id="tocS_CommonEmailAddress">CommonEmailAddress</h2>
<!-- backwards compatibility -->
<a id="schemacommonemailaddress"></a>
<a id="schema_CommonEmailAddress"></a>
<a id="tocScommonemailaddress"></a>
<a id="tocscommonemailaddress"></a>

```json
{
  "isPreferred": true,
  "purpose": "WORK",
  "address": "string"
}

```

<section>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|isPreferred|boolean|true|none|Required for one and only one email record in the collection. Denotes the default email address|
|purpose|string|true|none|The purpose for the email, as specified by the customer (Enumeration)|
|address|string|true|none|A correctly formatted email address, as defined by the addr_spec format in RFC_5322|

<section>

#### Enumerated Values

|Property|Value|
|---|---|
|purpose|WORK|
|purpose|HOME|
|purpose|OTHER|
|purpose|UNSPECIFIED|

</section>

</section>
</section>

<section>
<h2 id="tocS_CommonPhysicalAddressWithPurpose">CommonPhysicalAddressWithPurpose</h2>
<!-- backwards compatibility -->
<a id="schemacommonphysicaladdresswithpurpose"></a>
<a id="schema_CommonPhysicalAddressWithPurpose"></a>
<a id="tocScommonphysicaladdresswithpurpose"></a>
<a id="tocscommonphysicaladdresswithpurpose"></a>

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

<section>

### Properties

allOf

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» purpose|string|true|none|Enumeration of values indicating the purpose of the physical address|

and

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[CommonPhysicalAddress](#schemacommonphysicaladdress)|false|none|none|

<section>

#### Enumerated Values

|Property|Value|
|---|---|
|purpose|REGISTERED|
|purpose|MAIL|
|purpose|PHYSICAL|
|purpose|WORK|
|purpose|OTHER|

</section>

</section>
</section>

<section>
<h2 id="tocS_CommonPhysicalAddress">CommonPhysicalAddress</h2>
<!-- backwards compatibility -->
<a id="schemacommonphysicaladdress"></a>
<a id="schema_CommonPhysicalAddress"></a>
<a id="tocScommonphysicaladdress"></a>
<a id="tocscommonphysicaladdress"></a>

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

<section>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addressUType|string|true|none|The type of address object present|
|simple|[CommonSimpleAddress](#schemacommonsimpleaddress)|false|none|none|
|paf|[CommonPAFAddress](#schemacommonpafaddress)|false|none|Australian address formatted according to the file format defined by the [PAF file format](https://auspost.com.au/content/dam/auspost_corp/media/documents/australia-post-data-guide.pdf)|

<section>

#### Enumerated Values

|Property|Value|
|---|---|
|addressUType|simple|
|addressUType|paf|

</section>

</section>
</section>

<section>
<h2 id="tocS_CommonSimpleAddress">CommonSimpleAddress</h2>
<!-- backwards compatibility -->
<a id="schemacommonsimpleaddress"></a>
<a id="schema_CommonSimpleAddress"></a>
<a id="tocScommonsimpleaddress"></a>
<a id="tocscommonsimpleaddress"></a>

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

<section>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mailingName|string|false|none|Name of the individual or business formatted for inclusion in an address used for physical mail|
|addressLine1|string|true|none|First line of the standard address object|
|addressLine2|string|false|none|Second line of the standard address object|
|addressLine3|string|false|none|Third line of the standard address object|
|postcode|string|false|none|Mandatory for Australian addresses|
|city|string|true|none|Name of the city or locality|
|state|string|true|none|Free text if the country is not Australia. If country is Australia then must be one of the values defined by the ISO 3166:AU standard|
|country|string|false|none|A valid ISO 3166 Alpha-3 country code|

</section>
</section>

<section>
<h2 id="tocS_CommonPAFAddress">CommonPAFAddress</h2>
<!-- backwards compatibility -->
<a id="schemacommonpafaddress"></a>
<a id="schema_CommonPAFAddress"></a>
<a id="tocScommonpafaddress"></a>
<a id="tocscommonpafaddress"></a>

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

Australian address formatted according to the file format defined by the [PAF file format](https://auspost.com.au/content/dam/auspost_corp/media/documents/australia-post-data-guide.pdf)

<section>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dpid|string|false|none|Unique identifier for an address as defined by Australia Post.  Also known as Delivery Point Identifier|
|thoroughfareNumber1|integer|false|none|Thoroughfare number for a property (first number in a property ranged address)|
|thoroughfareNumber1Suffix|string|false|none|Suffix for the thoroughfare number. Only relevant is thoroughfareNumber1 is populated|
|thoroughfareNumber2|integer|false|none|Second thoroughfare number (only used if the property has a ranged address eg 23-25)|
|thoroughfareNumber2Suffix|string|false|none|Suffix for the second thoroughfare number. Only relevant is thoroughfareNumber2 is populated|
|flatUnitNumber|string|false|none|Unit number (including suffix, if applicable)|
|floorLevelNumber|string|false|none|Floor or level number (including alpha characters)|
|lotNumber|integer|false|none|Allotment number for the address|
|buildingName1|string|false|none|Building/Property name 1|
|buildingName2|string|false|none|Building/Property name 2|
|streetName|string|false|none|The name of the street|
|streetType|string|false|none|The street type. Valid enumeration defined by Australia Post PAF code file|
|streetSuffix|string|false|none|The street type suffix. Valid enumeration defined by Australia Post PAF code file|
|postalDeliveryType|string|false|none|Postal delivery type. (eg. PO BOX). Valid enumeration defined by Australia Post PAF code file|
|postalDeliveryNumber|integer|false|none|Postal delivery number if the address is a postal delivery type|
|postalDeliveryNumberPrefix|string|false|none|Postal delivery number prefix related to the postal delivery number|
|postalDeliveryNumberSuffix|string|false|none|Postal delivery number suffix related to the postal delivery number|
|localityName|string|true|none|Full name of locality|
|postcode|string|true|none|Postcode for the locality|
|state|string|true|none|State in which the address belongs. Valid enumeration defined by Australia Post PAF code file|

</section>
</section>

<section>
<h2 id="tocS_CommonCurrencyAmount">CommonCurrencyAmount</h2>
<!-- backwards compatibility -->
<a id="schemacommoncurrencyamount"></a>
<a id="schema_CommonCurrencyAmount"></a>
<a id="tocScommoncurrencyamount"></a>
<a id="tocscommoncurrencyamount"></a>

```json
{
  "amount": "string",
  "currency": "string"
}

```

<section>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|string(AmountString)|true|none|The current balance of the account at this time. Should align to the current balance available via other channels such as ATM balance enquiry or Internet Banking|
|currency|string(CurrencyString)|false|none|If not present assumes AUD|

</section>
</section>

<section>
<h2 id="tocS_Links">Links</h2>
<!-- backwards compatibility -->
<a id="schemalinks"></a>
<a id="schema_Links"></a>
<a id="tocSlinks"></a>
<a id="tocslinks"></a>

```json
{
  "self": "string"
}

```

<section>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|self|string(URIString)|true|none|Fully qualified link to this API call|

</section>
</section>

<section>
<h2 id="tocS_Meta">Meta</h2>
<!-- backwards compatibility -->
<a id="schemameta"></a>
<a id="schema_Meta"></a>
<a id="tocSmeta"></a>
<a id="tocsmeta"></a>

```json
{}

```

<section>

### Properties

*None*

</section>
</section>

<section>
<h2 id="tocS_LinksPaginated">LinksPaginated</h2>
<!-- backwards compatibility -->
<a id="schemalinkspaginated"></a>
<a id="schema_LinksPaginated"></a>
<a id="tocSlinkspaginated"></a>
<a id="tocslinkspaginated"></a>

```json
{
  "self": "string",
  "first": "string",
  "prev": "string",
  "next": "string",
  "last": "string"
}

```

<section>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|self|string(URIString)|true|none|Fully qualified link to this API call|
|first|string(URIString)|false|none|URI to the first page of this set. Mandatory if this response is not the first page|
|prev|string(URIString)|false|none|URI to the first previous page of this set. Mandatory if this response is not the first page|
|next|string(URIString)|false|none|URI to the first next page of this set. Mandatory if this response is not the last page|
|last|string(URIString)|false|none|URI to the first last page of this set. Mandatory if this response is not the last page|

</section>
</section>

<section>
<h2 id="tocS_MetaPaginated">MetaPaginated</h2>
<!-- backwards compatibility -->
<a id="schemametapaginated"></a>
<a id="schema_MetaPaginated"></a>
<a id="tocSmetapaginated"></a>
<a id="tocsmetapaginated"></a>

```json
{
  "totalRecords": 0,
  "totalPages": 0
}

```

<section>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|totalRecords|integer(NaturalNumber)|true|none|The total number of records in the full set|
|totalPages|integer(NaturalNumber)|true|none|The total number of pages in the full set|

</section>
</section>

<section>
<h2 id="tocS_ResponseErrorList">ResponseErrorList</h2>
<!-- backwards compatibility -->
<a id="schemaresponseerrorlist"></a>
<a id="schema_ResponseErrorList"></a>
<a id="tocSresponseerrorlist"></a>
<a id="tocsresponseerrorlist"></a>

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

<section>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[object]|true|none|none|
|» code|string|true|none|The code of the error|
|» title|string|true|none|A displayable title of the error type|
|» detail|string|true|none|Detail of the error|
|» meta|object|false|none|Optional additional data for specific error types|

</section>
</section>

<section>
<h2 id="tocS_BankingEnumProductCategory">BankingEnumProductCategory</h2>
<!-- backwards compatibility -->
<a id="schemabankingenumproductcategory"></a>
<a id="schema_BankingEnumProductCategory"></a>
<a id="tocSbankingenumproductcategory"></a>
<a id="tocsbankingenumproductcategory"></a>

```json
"TRANS_AND_SAVINGS_ACCOUNTS"

```

The list of available product categories for categorising products and accounts.  See [here](#product-categories) for more details

<section>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|The list of available product categories for categorising products and accounts.  See [here](#product-categories) for more details|

<section>

#### Enumerated Values

|Property|Value|
|---|---|
|*anonymous*|TRANS_AND_SAVINGS_ACCOUNTS|
|*anonymous*|TERM_DEPOSITS|
|*anonymous*|TRAVEL_CARDS|
|*anonymous*|REGULATED_TRUST_ACCOUNTS|
|*anonymous*|RESIDENTIAL_MORTGAGES|
|*anonymous*|CRED_AND_CHRG_CARDS|
|*anonymous*|PERS_LOANS|
|*anonymous*|MARGIN_LOANS|
|*anonymous*|LEASES|
|*anonymous*|TRADE_FINANCE|

</section>

</section>
</section>

