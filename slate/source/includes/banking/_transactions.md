
## Get Transactions For Account

<a id="opIdgetAccountTransactions"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://myserver.com/cds-au/banking/v1/accounts/{accountId}/transactions \
  -H 'Accept: application/json' \
  -H 'x-v: 1' \
  -H 'x-min-v: 1' \
  -H 'x-<<PID>>-Id: string' \
  -H 'x-Correlation-Id: string' \
  -H 'Authorization: Bearer {access-token}'

```

```javascript
var headers = {
  'Accept':'application/json',
  'x-v':'1',
  'x-min-v':'1',
  'x-<<PID>>-Id':'string',
  'x-Correlation-Id':'string',
  'Authorization':'Bearer {access-token}'

};

$.ajax({
  url: 'https://myserver.com/cds-au/banking/v1/accounts/{accountId}/transactions',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`GET /accounts/{accountId}/transactions`

*Account Specific Transactions.*

Obtain transactions for a specific account.

<h3 id="getaccounttransactions-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|[AccountId](#schemaaccountid)|true|ID of the Account.  Must have previously been returned from one of the account list end points.|
|x-v|header|integer(int32)|true|Version of the API end point requested by the client. Must be set to a positive integer. If the version(s) requested is not supported then the provider should respond with a `406 Not Acceptable`.|
|x-min-v|header|integer(int32)|false|Minimum version of the API end point requested by the client. Must be set to a positive integer if provided. The provider should respond with the highest supported version between `x-min-v` and `x-v`.|
|x-<<PID>>-Id|header|string|false|A provider specific version of extension fields. Should not be used in conjunction with `x-min-v`.|
|x-Correlation-Id|header|string|false|The version of the API end point that the provider has responded with.|
|start-time|query|[DateTimeString](#common-field-types)|false|Constrains the transaction history request to transactions with effective time at or after this date/time.  If absent, defaults to today.|
|min-amount|query|number|false|Filter transactions to only transactions with amounts higher or equal to than this amount.|
|max-amount|query|number|false|Filter transactions to only transactions with amounts less than or equal to than this amount.|
|text|query|string(ASCII)|false|Filter transactions to only transactions where this string value is found as a substring of either the reference or description fields.|
|page|query|integer(int32)|false|Page  of results to  request  (standard  pagination).|
|page-size|query|integer(int32)|false|Page  size to  request. Default is  25 (standard pagination).|

#### Detailed descriptions

**x-v**: Version of the API end point requested by the client. Must be set to a positive integer. If the version(s) requested is not supported then the provider should respond with a `406 Not Acceptable`.

**x-min-v**: Minimum version of the API end point requested by the client. Must be set to a positive integer if provided. The provider should respond with the highest supported version between `x-min-v` and `x-v`.

If all versions requested are not supported then the provider should respond with a `406 Not Acceptable`.

> Example responses

> 200 Response

```json
{
  "links": {
    "self": "http://example.com",
    "first": "http://example.com",
    "prev": "http://example.com",
    "next": "http://example.com",
    "last": "http://example.com"
  },
  "meta": {
    "totalRecords": 6,
    "totalPages": 2
  },
  "data": {
    "accountId": "string",
    "displayName": "string",
    "nickname": "string",
    "transactions": [
      {
        "transactionId": "string",
        "status": "PENDING",
        "description": "string",
        "postDateTime": "2018-11-01T05:33:52Z",
        "executionDateTime": "2018-11-01T05:33:52Z",
        "amount": {
          "amount": 300.56,
          "currency": "AUD"
        },
        "reference": "string"
      }
    ]
  }
}
```

<h3 id="getaccounttransactions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[AccountTransactionsResponse](#schemaaccounttransactionsresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-v|integer|int32|The version of the API end point that the provider has responded with.|
|200|x-Correlation-Id|string||Reflected value of the correlation ID provided by the data consumer in the request headers. If no correlation ID was provided in the request this header should not be supplied. If a correlation ID was provided in the request then this header is mandatory.|

<aside class="notice">
To perform this operation, you must be authenticated by means of one of the following methods:
openId ( Scopes: bank_transactions )
</aside>

## Get Transaction Detail

<a id="opIdgetAccountTransaction"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://myserver.com/cds-au/banking/v1/accounts/{accountId}/transactions/{transactionId} \
  -H 'Accept: application/json' \
  -H 'x-v: 1' \
  -H 'x-min-v: 1' \
  -H 'x-<<PID>>-Id: string' \
  -H 'x-Correlation-Id: string' \
  -H 'Authorization: Bearer {access-token}'

```

```javascript
var headers = {
  'Accept':'application/json',
  'x-v':'1',
  'x-min-v':'1',
  'x-<<PID>>-Id':'string',
  'x-Correlation-Id':'string',
  'Authorization':'Bearer {access-token}'

};

$.ajax({
  url: 'https://myserver.com/cds-au/banking/v1/accounts/{accountId}/transactions/{transactionId}',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`GET /accounts/{accountId}/transactions/{transactionId}`

*Detailed Transaction Data.*

Obtain additional information for a specific transaction for a specific account.

<h3 id="getaccounttransaction-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|[AccountId](#schemaaccountid)|true|ID of the Account.  Must have previously been returned from one of the account list end points.|
|transactionId|path|[TransactionId](#schematransactionid)|true|ID of the Transaction obtained from a previous call to one of the transaction end points.|
|x-v|header|integer(int32)|true|Version of the API end point requested by the client. Must be set to a positive integer. If the version(s) requested is not supported then the provider should respond with a `406 Not Acceptable`.|
|x-min-v|header|integer(int32)|false|Minimum version of the API end point requested by the client. Must be set to a positive integer if provided. The provider should respond with the highest supported version between `x-min-v` and `x-v`.|
|x-<<PID>>-Id|header|string|false|A provider specific version of extension fields. Should not be used in conjunction with `x-min-v`.|
|x-Correlation-Id|header|string|false|The version of the API end point that the provider has responded with.|

#### Detailed descriptions

**x-v**: Version of the API end point requested by the client. Must be set to a positive integer. If the version(s) requested is not supported then the provider should respond with a `406 Not Acceptable`.

**x-min-v**: Minimum version of the API end point requested by the client. Must be set to a positive integer if provided. The provider should respond with the highest supported version between `x-min-v` and `x-v`.

If all versions requested are not supported then the provider should respond with a `406 Not Acceptable`.

> Example responses

> 200 Response

```json
{
  "links": {
    "self": "http://example.com",
    "first": "http://example.com",
    "prev": "http://example.com",
    "next": "http://example.com",
    "last": "http://example.com"
  },
  "meta": {
    "totalRecords": 6,
    "totalPages": 2
  },
  "data": {
    "accountId": "string",
    "displayName": "string",
    "nickname": "string",
    "transaction": {
      "transactionId": "string",
      "status": "PENDING",
      "description": "string",
      "postDateTime": "2018-11-01T05:33:52Z",
      "executionDateTime": "2018-11-01T05:33:52Z",
      "amount": {
        "amount": 300.56,
        "currency": "AUD"
      },
      "reference": "string",
      "extendedData": {
        "payer": "string",
        "payee": "string",
        "extensionType": "extendedDescription",
        "extendedDescription": "string",
        "service": "X2P1.01"
      }
    }
  }
}
```

<h3 id="getaccounttransaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[AccountTransactionResponse](#schemaaccounttransactionresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-v|integer|int32|The version of the API end point that the provider has responded with.|
|200|x-Correlation-Id|string||Reflected value of the correlation ID provided by the data consumer in the request headers. If no correlation ID was provided in the request this header should not be supplied. If a correlation ID was provided in the request then this header is mandatory.|

<aside class="notice">
To perform this operation, you must be authenticated by means of one of the following methods:
openId ( Scopes: bank_transactions )
</aside>

## Get Bulk Transactions

<a id="opIdgetAccountsTransactions"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://myserver.com/cds-au/banking/v1/accounts/transactions \
  -H 'Accept: application/json' \
  -H 'x-v: 1' \
  -H 'x-min-v: 1' \
  -H 'x-<<PID>>-Id: string' \
  -H 'x-Correlation-Id: string' \
  -H 'Authorization: Bearer {access-token}'

```

```javascript
var headers = {
  'Accept':'application/json',
  'x-v':'1',
  'x-min-v':'1',
  'x-<<PID>>-Id':'string',
  'x-Correlation-Id':'string',
  'Authorization':'Bearer {access-token}'

};

$.ajax({
  url: 'https://myserver.com/cds-au/banking/v1/accounts/transactions',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`GET /accounts/transactions`

*Bulk Transaction Data.*

Obtain transactions for multiple, filtered accounts.

<h3 id="getaccountstransactions-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|x-v|header|integer(int32)|true|Version of the API end point requested by the client. Must be set to a positive integer. If the version(s) requested is not supported then the provider should respond with a `406 Not Acceptable`.|
|x-min-v|header|integer(int32)|false|Minimum version of the API end point requested by the client. Must be set to a positive integer if provided. The provider should respond with the highest supported version between `x-min-v` and `x-v`.|
|x-<<PID>>-Id|header|string|false|A provider specific version of extension fields. Should not be used in conjunction with `x-min-v`.|
|x-Correlation-Id|header|string|false|The version of the API end point that the provider has responded with.|
|product-category|query|[ProductCategory](#schemaproductcategory)|false|Used to filter results on the productCategory field in the account end points. Any one of the valid values for this field can be supplied. If absent then all accounts returned.|
|start-time|query|[DateTimeString](#common-field-types)|false|Constrains the transaction history request to transactions with effective time at or after this date/time.  If absent, defaults to today.|
|min-amount|query|number|false|Filter transactions to only transactions with amounts higher or equal to than this amount.|
|max-amount|query|number|false|Filter transactions to only transactions with amounts less than or equal to than this amount.|
|text|query|string(ASCII)|false|Filter transactions to only transactions where this string value is found as a substring of either the reference or description fields.|
|page|query|integer(int32)|false|Page  of results to  request  (standard  pagination).|
|page-size|query|integer(int32)|false|Page  size to  request. Default is  25 (standard pagination).|

#### Detailed descriptions

**x-v**: Version of the API end point requested by the client. Must be set to a positive integer. If the version(s) requested is not supported then the provider should respond with a `406 Not Acceptable`.

**x-min-v**: Minimum version of the API end point requested by the client. Must be set to a positive integer if provided. The provider should respond with the highest supported version between `x-min-v` and `x-v`.

If all versions requested are not supported then the provider should respond with a `406 Not Acceptable`.

#### Enumerated Values

|Parameter|Value|
|---|---|
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
  "links": {
    "self": "http://example.com",
    "first": "http://example.com",
    "prev": "http://example.com",
    "next": "http://example.com",
    "last": "http://example.com"
  },
  "meta": {
    "totalRecords": 6,
    "totalPages": 2
  },
  "data": {
    "transactions": [
      {
        "transactionId": "string",
        "status": "PENDING",
        "description": "string",
        "postDateTime": "2018-11-01T05:33:52Z",
        "executionDateTime": "2018-11-01T05:33:52Z",
        "amount": {
          "amount": 300.56,
          "currency": "AUD"
        },
        "reference": "string",
        "accountId": "string",
        "isDetailAvailable": true
      }
    ]
  }
}
```

<h3 id="getaccountstransactions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[AccountsTransactionsResponse](#schemaaccountstransactionsresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-v|integer|int32|The version of the API end point that the provider has responded with.|
|200|x-Correlation-Id|string||Reflected value of the correlation ID provided by the data consumer in the request headers. If no correlation ID was provided in the request this header should not be supplied. If a correlation ID was provided in the request then this header is mandatory.|

<aside class="notice">
To perform this operation, you must be authenticated by means of one of the following methods:
openId ( Scopes: bank_transactions )
</aside>

## Get Transactions For Specific Accounts

<a id="opIdfindSpecificAccountTransactions"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://myserver.com/cds-au/banking/v1/accounts/transactions \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'x-v: 1' \
  -H 'x-min-v: 1' \
  -H 'x-<<PID>>-Id: string' \
  -H 'x-Correlation-Id: string' \
  -H 'Authorization: Bearer {access-token}'

```

```javascript
var headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'x-v':'1',
  'x-min-v':'1',
  'x-<<PID>>-Id':'string',
  'x-Correlation-Id':'string',
  'Authorization':'Bearer {access-token}'

};

$.ajax({
  url: 'https://myserver.com/cds-au/banking/v1/accounts/transactions',
  method: 'post',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`POST /accounts/transactions`

*Specific Transactions Data.*

Obtain transactions for a specific list of account Ids.

> Body parameter

```json
{
  "data": [
    "string"
  ]
}
```

<h3 id="findspecificaccounttransactions-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|x-v|header|integer(int32)|true|Version of the API end point requested by the client. Must be set to a positive integer. If the version(s) requested is not supported then the provider should respond with a `406 Not Acceptable`.|
|x-min-v|header|integer(int32)|false|Minimum version of the API end point requested by the client. Must be set to a positive integer if provided. The provider should respond with the highest supported version between `x-min-v` and `x-v`.|
|x-<<PID>>-Id|header|string|false|A provider specific version of extension fields. Should not be used in conjunction with `x-min-v`.|
|x-Correlation-Id|header|string|false|The version of the API end point that the provider has responded with.|
|start-time|query|[DateTimeString](#common-field-types)|false|Constrains the transaction history request to transactions with effective time at or after this date/time.  If absent, defaults to today.|
|min-amount|query|number|false|Filter transactions to only transactions with amounts higher or equal to than this amount.|
|max-amount|query|number|false|Filter transactions to only transactions with amounts less than or equal to than this amount.|
|text|query|string(ASCII)|false|Filter transactions to only transactions where this string value is found as a substring of either the reference or description fields.|
|page|query|integer(int32)|false|Page  of results to  request  (standard  pagination).|
|page-size|query|integer(int32)|false|Page  size to  request. Default is  25 (standard pagination).|
|body|body|[accountIds](#schemaaccountids)|true|Request for an array of specific accountIds.|
|» data|body|[string]|true|Array of  accountIds.|

#### Detailed descriptions

**x-v**: Version of the API end point requested by the client. Must be set to a positive integer. If the version(s) requested is not supported then the provider should respond with a `406 Not Acceptable`.

**x-min-v**: Minimum version of the API end point requested by the client. Must be set to a positive integer if provided. The provider should respond with the highest supported version between `x-min-v` and `x-v`.

If all versions requested are not supported then the provider should respond with a `406 Not Acceptable`.

> Example responses

> 200 Response

```json
{
  "links": {
    "self": "http://example.com",
    "first": "http://example.com",
    "prev": "http://example.com",
    "next": "http://example.com",
    "last": "http://example.com"
  },
  "meta": {
    "totalRecords": 6,
    "totalPages": 2
  },
  "data": {
    "balances": [
      {
        "accountId": "string",
        "balance": {
          "balanceType": "deposits",
          "currentBalance": {
            "amount": 300.56,
            "currency": "AUD"
          },
          "availableBalance": {
            "amount": 300.56,
            "currency": "AUD"
          }
        }
      }
    ]
  }
}
```

<h3 id="findspecificaccounttransactions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[AccountsBalancesResponse](#schemaaccountsbalancesresponse)|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|The request was well formed but was unable to be processed due to business logic specific to the request.|Inline|

<h3 id="findspecificaccounttransactions-responseschema">Response Schema</h3>

Status Code **422**

*List of Errors.*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Error](#schemaerror)]|false|none|List of Errors.|
|» code|string|true|none|none|
|» title|string|true|none|none|
|» detail|string|true|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-v|integer|int32|The version of the API end point that the provider has responded with.|
|200|x-Correlation-Id|string||Reflected value of the correlation ID provided by the data consumer in the request headers. If no correlation ID was provided in the request this header should not be supplied. If a correlation ID was provided in the request then this header is mandatory.|

<aside class="notice">
To perform this operation, you must be authenticated by means of one of the following methods:
openId ( Scopes: bank_transactions )
</aside>
