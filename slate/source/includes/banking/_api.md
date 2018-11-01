<!--
<h1 id="CDS-AU-Open-Banking-API-Bank-Account-Direct-Debits">Bank Account Direct Debits</h1>

Everything about the Bank Account Direct Debits
-->

## getAccountDirectDebits

<a id="opIdgetAccountDirectDebits"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://myserver.com/cds-au/banking/v1/accounts/{accountId}/direct-debits \
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
  url: 'https://myserver.com/cds-au/banking/v1/accounts/{accountId}/direct-debits',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`GET /accounts/{accountId}/direct-debits`

*Account Specific Direct Debit Authorisations.*

Obtain direct debit authorisations for a specific accounnt list of accounts.

<h3 id="getaccountdirectdebits-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|[AccountId](#schemaaccountid)|true|ID of the Account.  Must have previously been returned from one of the account list end points.|
|x-v|header|integer(int32)|true|Version of the API end point requested by the client. Must be set to a positive integer. If the version(s) requested is not supported then the provider should respond with a `406 Not Acceptable`.|
|x-min-v|header|integer(int32)|false|Minimum version of the API end point requested by the client. Must be set to a positive integer if provided. The provider should respond with the highest supported version between `x-min-v` and `x-v`.|
|x-<<PID>>-Id|header|string|false|A provider specific version of extension fields. Should not be used in conjunction with `x-min-v`.|
|x-Correlation-Id|header|string|false|The version of the API end point that the provider has responded with.|
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
    "directDebitAuthorisations": [
      {
        "accountId": "string",
        "authorisedEntity": {
          "name": "string",
          "financialInsitution": "string",
          "abn": "string",
          "acn": "string"
        },
        "lastDebitDateTime": "2018-11-01T05:33:52Z",
        "lastDebitAmount": 300.56
      }
    ]
  }
}
```

<h3 id="getaccountdirectdebits-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[AccountDirectDebitsResponse](#schemaaccountdirectdebitsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
openId ( Scopes: detailed_bank_account )
</aside>

## getAccountsDirectDebits

<a id="opIdgetAccountsDirectDebits"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://myserver.com/cds-au/banking/v1/accounts/direct-debits \
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
  url: 'https://myserver.com/cds-au/banking/v1/accounts/direct-debits',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`GET /accounts/direct-debits`

*Bulk Direct Debit Authorisations Data.*

Obtain direct debit authorisations for multiple, filtered accounts.

<h3 id="getaccountsdirectdebits-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|x-v|header|integer(int32)|true|Version of the API end point requested by the client. Must be set to a positive integer. If the version(s) requested is not supported then the provider should respond with a `406 Not Acceptable`.|
|x-min-v|header|integer(int32)|false|Minimum version of the API end point requested by the client. Must be set to a positive integer if provided. The provider should respond with the highest supported version between `x-min-v` and `x-v`.|
|x-<<PID>>-Id|header|string|false|A provider specific version of extension fields. Should not be used in conjunction with `x-min-v`.|
|x-Correlation-Id|header|string|false|The version of the API end point that the provider has responded with.|
|product-category|query|[ProductCategory](#schemaproductcategory)|false|Used to filter results on the productCategory field in the account end points. Any one of the valid values for this field can be supplied. If absent then all accounts returned.|
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
    "directDebitAuthorisations": [
      {
        "accountId": "string",
        "authorisedEntity": {
          "name": "string",
          "financialInsitution": "string",
          "abn": "string",
          "acn": "string"
        },
        "lastDebitDateTime": "2018-11-01T05:33:52Z",
        "lastDebitAmount": 300.56
      }
    ]
  }
}
```

<h3 id="getaccountsdirectdebits-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[AccountDirectDebitsResponse](#schemaaccountdirectdebitsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
openId ( Scopes: detailed_bank_account )
</aside>

## findSpecificDirectDebits

<a id="opIdfindSpecificDirectDebits"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://myserver.com/cds-au/banking/v1/accounts/direct-debits \
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
  url: 'https://myserver.com/cds-au/banking/v1/accounts/direct-debits',
  method: 'post',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`POST /accounts/direct-debits`

*Specific Direct Debit Authorisations Data.*

Obtain direct debit authorisations for a specified list of accounts.

> Body parameter

```json
{
  "data": [
    "string"
  ]
}
```

<h3 id="findspecificdirectdebits-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|x-v|header|integer(int32)|true|Version of the API end point requested by the client. Must be set to a positive integer. If the version(s) requested is not supported then the provider should respond with a `406 Not Acceptable`.|
|x-min-v|header|integer(int32)|false|Minimum version of the API end point requested by the client. Must be set to a positive integer if provided. The provider should respond with the highest supported version between `x-min-v` and `x-v`.|
|x-<<PID>>-Id|header|string|false|A provider specific version of extension fields. Should not be used in conjunction with `x-min-v`.|
|x-Correlation-Id|header|string|false|The version of the API end point that the provider has responded with.|
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
    "directDebitAuthorisations": [
      {
        "accountId": "string",
        "authorisedEntity": {
          "name": "string",
          "financialInsitution": "string",
          "abn": "string",
          "acn": "string"
        },
        "lastDebitDateTime": "2018-11-01T05:33:52Z",
        "lastDebitAmount": 300.56
      }
    ]
  }
}
```

<h3 id="findspecificdirectdebits-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[AccountDirectDebitsResponse](#schemaaccountdirectdebitsresponse)|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|The request was well formed but was unable to be processed due to business logic specific to the request.|Inline|

<h3 id="findspecificdirectdebits-responseschema">Response Schema</h3>

Status Code **422**

*List of Errors.*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Error](#schemaerror)]|false|none|List of Errors.|
|» code|string|true|none|none|
|» title|string|true|none|none|
|» detail|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
openId ( Scopes: basic_bank_account )
</aside>

<!--
<h1 id="CDS-AU-Open-Banking-API-Bank-Account-Transactions">Bank Account Transactions</h1>

Everything about the Bank Account Transactions
-->

## getAccountTransactions

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
|start-time|query|string(date-time)|false|Constrains the transaction history request to transactions with effective time at or after this date/time.  If absent, defaults to today.|
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

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
openId ( Scopes: bank_transaction )
</aside>

## getAccountTransaction

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

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
openId ( Scopes: bank_transaction )
</aside>

## getAccountsTransactions

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
|start-time|query|string(date-time)|false|Constrains the transaction history request to transactions with effective time at or after this date/time.  If absent, defaults to today.|
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

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
openId ( Scopes: bank_transaction )
</aside>

## findSpecificAccountTransactions

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
|start-time|query|string(date-time)|false|Constrains the transaction history request to transactions with effective time at or after this date/time.  If absent, defaults to today.|
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

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
openId ( Scopes: bank_transaction )
</aside>

<!--
<h1 id="CDS-AU-Open-Banking-API-Bank-Products">Bank Products</h1>

Everything about the Bank Products
-->

## getProducts

<a id="opIdgetProducts"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://myserver.com/cds-au/banking/v1/products \
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
  url: 'https://myserver.com/cds-au/banking/v1/products',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`GET /products`

*Product List Data.*

Obtain a list of products that are currently openly offered to the market.

<h3 id="getproducts-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|x-v|header|integer(int32)|true|Version of the API end point requested by the client. Must be set to a positive integer. If the version(s) requested is not supported then the provider should respond with a `406 Not Acceptable`.|
|x-min-v|header|integer(int32)|false|Minimum version of the API end point requested by the client. Must be set to a positive integer if provided. The provider should respond with the highest supported version between `x-min-v` and `x-v`.|
|x-<<PID>>-Id|header|string|false|A provider specific version of extension fields. Should not be used in conjunction with `x-min-v`.|
|x-Correlation-Id|header|string|false|The version of the API end point that the provider has responded with.|
|product-category|query|[ProductCategory](#schemaproductcategory)|false|Used to filter results on the productCategory field in the account end points. Any one of the valid values for this field can be supplied. If absent then all accounts returned.|
|effective|query|boolean|false|If true then only include products that are effective right now and exclude products that may be available at a future time.  If false only include products effective in the future. If absent defaults to include all products.|
|updated-since|query|string(date-time)|false|Only include products that have been updated after the specified date and time.  If absent defaults to include all products.|
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
    "products": [
      {
        "productId": "string",
        "effectiveFrom": "2018-11-01T05:33:52Z",
        "effectiveTo": "2018-11-01T05:33:52Z",
        "lastUpdated": "2018-11-01T05:33:52Z",
        "productCategory": "PERS_AT_CALL_DEPOSITS",
        "name": "string",
        "description": "string",
        "applicationUri": "http://example.com",
        "isNegotiable": true,
        "additionalInformation": {
          "overviewUri": "http://example.com",
          "termsUri": "http://example.com",
          "eligibilityUri": "http://example.com",
          "feesAndPricingUri": "http://example.com",
          "bundleUri": "http://example.com"
        }
      }
    ]
  }
}
```

<h3 id="getproducts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[ProductsResponse](#schemaproductsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
openId ( Scopes: openid )
</aside>

## getProduct

<a id="opIdgetProduct"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://myserver.com/cds-au/banking/v1/products/{productId} \
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
  url: 'https://myserver.com/cds-au/banking/v1/products/{productId}',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`GET /products/{productId}`

*Detailed Product Data.*

Obtain detailed information on a single product offered openly to the market.

<h3 id="getproduct-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|productId|path|string(ASCII)|true|ID of the specific Product request.|
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
    "productId": "string",
    "effectiveFrom": "2018-11-01T05:33:52Z",
    "effectiveTo": "2018-11-01T05:33:52Z",
    "lastUpdated": "2018-11-01T05:33:52Z",
    "productCategory": "PERS_AT_CALL_DEPOSITS",
    "name": "string",
    "description": "string",
    "applicationUri": "http://example.com",
    "isNegotiable": true,
    "additionalInformation": {
      "overviewUri": "http://example.com",
      "termsUri": "http://example.com",
      "eligibilityUri": "http://example.com",
      "feesAndPricingUri": "http://example.com",
      "bundleUri": "http://example.com"
    },
    "features": [
      {
        "featureType": "DEBIT_CARD",
        "discountType": "DEBIT_CARD"
      }
    ],
    "fees": [
      {
        "name": "string",
        "feeType": "PERIODIC",
        "amount": 0,
        "additionalInfo": "string",
        "additionalInfoUri": "http://example.com",
        "discounts": [
          {
            "discountType": "BALANCE",
            "additionalValue": 0
          }
        ],
        "additionalValue": "DAILY"
      }
    ],
    "depositRates": [
      {
        "rate": "string",
        "additionalInfo": "string",
        "additionalInfoUri": "http://example.com",
        "depositRateType": "FIXED",
        "additionalValue": "2018-11-01T05:33:52Z",
        "discountType": "FIXED"
      }
    ],
    "lendingRates": [
      {
        "rate": "string",
        "additionalInfo": "string",
        "additionalInfoUri": "http://example.com",
        "lendingRateType": "FIXED",
        "additionalValue": "2018-11-01T05:33:52Z",
        "discountType": "FIXED"
      }
    ],
    "constraints": [
      {
        "constraintType": "MIN_BALANCE",
        "additionalValue": 0
      }
    ],
    "eligibility": [
      {
        "additionalInfo": "string",
        "additionalInfoUri": "http://example.com",
        "eligibilityType": "BUSINESS"
      }
    ]
  }
}
```

<h3 id="getproduct-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[ProductResponse](#schemaproductresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-v|integer|int32|The version of the API end point that the provider has responded with.|
|200|x-Correlation-Id|string||Reflected value of the correlation ID provided by the data consumer in the request headers. If no correlation ID was provided in the request this header should not be supplied. If a correlation ID was provided in the request then this header is mandatory.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
openId ( Scopes: openid )
</aside>

<!--
<h1 id="CDS-AU-Open-Banking-API-Bank-Payees">Bank Payees</h1>

Everything about the Bank Payees
-->

## getPayees

<a id="opIdgetPayees"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://myserver.com/cds-au/banking/v1/payees \
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
  url: 'https://myserver.com/cds-au/banking/v1/payees',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`GET /payees`

*Payee Data.*

Obtain a list of pre-registered payees.

<h3 id="getpayees-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|x-v|header|integer(int32)|true|Version of the API end point requested by the client. Must be set to a positive integer. If the version(s) requested is not supported then the provider should respond with a `406 Not Acceptable`.|
|x-min-v|header|integer(int32)|false|Minimum version of the API end point requested by the client. Must be set to a positive integer if provided. The provider should respond with the highest supported version between `x-min-v` and `x-v`.|
|x-<<PID>>-Id|header|string|false|A provider specific version of extension fields. Should not be used in conjunction with `x-min-v`.|
|x-Correlation-Id|header|string|false|The version of the API end point that the provider has responded with.|
|type|query|[PayeeTypeEnum](#schemapayeetypeenum)|false|Filter on type payee.|
|page|query|integer(int32)|false|Page  of results to  request  (standard  pagination).|
|page-size|query|integer(int32)|false|Page  size to  request. Default is  25 (standard pagination).|

#### Detailed descriptions

**x-v**: Version of the API end point requested by the client. Must be set to a positive integer. If the version(s) requested is not supported then the provider should respond with a `406 Not Acceptable`.

**x-min-v**: Minimum version of the API end point requested by the client. Must be set to a positive integer if provided. The provider should respond with the highest supported version between `x-min-v` and `x-v`.

If all versions requested are not supported then the provider should respond with a `406 Not Acceptable`.

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|DOMESTIC|
|type|INTERNATIONAL|
|type|BILLER|

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
    "payees": [
      {
        "payeeId": "string",
        "nickname": "string",
        "description": "string",
        "type": "DOMESTIC"
      }
    ]
  }
}
```

<h3 id="getpayees-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[PayeesResponse](#schemapayeesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
openId ( Scopes: bank_payees )
</aside>

## getPayee

<a id="opIdgetPayee"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://myserver.com/cds-au/banking/v1/payees/{payeeId} \
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
  url: 'https://myserver.com/cds-au/banking/v1/payees/{payeeId}',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`GET /payees/{payeeId}`

*Detailed Payee Data.*

Obtain detailed information on a single payee.

<h3 id="getpayee-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|payeeId|path|[PayeeId](#schemapayeeid)|true|ID of the payee requested.|
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
  "data": {
    "payeeId": "string",
    "nickname": "string",
    "description": "string",
    "type": "DOMESTIC",
    "payee": {
      "payeeType": "domestic",
      "domesticAccountPayee": {
        "domesticPayeeType": "payId",
        "name": "string",
        "identifier": "string",
        "type": "EMAIL"
      }
    }
  }
}
```

<h3 id="getpayee-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[PayeeResponse](#schemapayeeresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-v|integer|int32|The version of the API end point that the provider has responded with.|
|200|x-Correlation-Id|string||Reflected value of the correlation ID provided by the data consumer in the request headers. If no correlation ID was provided in the request this header should not be supplied. If a correlation ID was provided in the request then this header is mandatory.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
openId ( Scopes: bank_payees )
</aside>

<!--
<h1 id="CDS-AU-Open-Banking-API-Bank-Accounts">Bank Accounts</h1>
-->

## getAccounts

<a id="opIdgetAccounts"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://myserver.com/cds-au/banking/v1/accounts \
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
  url: 'https://myserver.com/cds-au/banking/v1/accounts',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`GET /accounts`

*Account List Data.*

Obtain list of accounts.

<h3 id="getaccounts-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|x-v|header|integer(int32)|true|Version of the API end point requested by the client. Must be set to a positive integer. If the version(s) requested is not supported then the provider should respond with a `406 Not Acceptable`.|
|x-min-v|header|integer(int32)|false|Minimum version of the API end point requested by the client. Must be set to a positive integer if provided. The provider should respond with the highest supported version between `x-min-v` and `x-v`.|
|x-<<PID>>-Id|header|string|false|A provider specific version of extension fields. Should not be used in conjunction with `x-min-v`.|
|x-Correlation-Id|header|string|false|The version of the API end point that the provider has responded with.|
|product-category|query|[ProductCategory](#schemaproductcategory)|false|Used to filter results on the productCategory field in the account end points. Any one of the valid values for this field can be supplied. If absent then all accounts returned.|
|open-status|query|string|false|Used to filter results according to open/closed status. Values can be OPEN, CLOSED or ALL. If absent then ALL is assumed.|
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
|open-status|OPEN|
|open-status|CLOSED|
|open-status|ALL|

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
    "accounts": [
      {
        "accountId": "string",
        "displayName": "string",
        "nickname": "string",
        "maskedNumber": "string",
        "productCategory": "PERS_AT_CALL_DEPOSITS",
        "providerType": "string",
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

<h3 id="getaccounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[AccountsResponse](#schemaaccountsresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-v|integer|int32|The version of the API end point that the provider has responded with.|
|200|x-Correlation-Id|string||Reflected value of the correlation ID provided by the data consumer in the request headers. If no correlation ID was provided in the request this header should not be supplied. If a correlation ID was provided in the request then this header is mandatory.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
openId ( Scopes: basic_bank_account )
</aside>

## getAccount

<a id="opIdgetAccount"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://myserver.com/cds-au/banking/v1/accounts/{accountId} \
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
  url: 'https://myserver.com/cds-au/banking/v1/accounts/{accountId}',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`GET /accounts/{accountId}`

*Detailed Account Data.*

Obtain detailed information on a single account.

<h3 id="getaccount-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|[AccountId](#schemaaccountid)|true|ID of the Account.  Must have previously been returned from one of the account list end points.|
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
  "data": {
    "accountId": "string",
    "displayName": "string",
    "nickname": "string",
    "maskedNumber": "string",
    "productCategory": "PERS_AT_CALL_DEPOSITS",
    "providerType": "string",
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
    },
    "features": [
      {
        "featureType": "DEBIT_CARD",
        "discountType": "DEBIT_CARD"
      }
    ],
    "fees": [
      {
        "name": "string",
        "feeType": "PERIODIC",
        "amount": 0,
        "additionalInfo": "string",
        "additionalInfoUri": "http://example.com",
        "discounts": [
          {
            "discountType": "BALANCE",
            "additionalValue": 0
          }
        ],
        "additionalValue": "DAILY"
      }
    ],
    "depositRates": [
      {
        "rate": "string",
        "additionalInfo": "string",
        "additionalInfoUri": "http://example.com",
        "depositRateType": "FIXED",
        "additionalValue": "2018-11-01T05:33:52Z",
        "discountType": "FIXED"
      }
    ],
    "lendingRates": [
      {
        "rate": "string",
        "additionalInfo": "string",
        "additionalInfoUri": "http://example.com",
        "lendingRateType": "FIXED",
        "additionalValue": "2018-11-01T05:33:52Z",
        "discountType": "FIXED"
      }
    ],
    "bundleName": "string",
    "specificAccount": {
      "accountType": "termDeposit",
      "depositDate": "2018-11-01",
      "maturityDate": "2018-11-01",
      "maturityAmount": 0
    },
    "address": {
      "addressType": "simple",
      "mailingName": "string",
      "addressLine1": "string",
      "addressLine2": "string",
      "addressLine3": "string",
      "postcode": "string",
      "city": "string",
      "state": "string",
      "country": "AUS"
    }
  }
}
```

<h3 id="getaccount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[AccountResponse](#schemaaccountresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-v|integer|int32|The version of the API end point that the provider has responded with.|
|200|x-Correlation-Id|string||Reflected value of the correlation ID provided by the data consumer in the request headers. If no correlation ID was provided in the request this header should not be supplied. If a correlation ID was provided in the request then this header is mandatory.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
openId ( Scopes: detailed_bank_account )
</aside>

## getAccountsBalances

<a id="opIdgetAccountsBalances"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://myserver.com/cds-au/banking/v1/accounts/balances \
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
  url: 'https://myserver.com/cds-au/banking/v1/accounts/balances',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`GET /accounts/balances`

*Multiple Balances Data.*

Obtain balances for multiple, filtered accounts.

<h3 id="getaccountsbalances-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|x-v|header|integer(int32)|true|Version of the API end point requested by the client. Must be set to a positive integer. If the version(s) requested is not supported then the provider should respond with a `406 Not Acceptable`.|
|x-min-v|header|integer(int32)|false|Minimum version of the API end point requested by the client. Must be set to a positive integer if provided. The provider should respond with the highest supported version between `x-min-v` and `x-v`.|
|x-<<PID>>-Id|header|string|false|A provider specific version of extension fields. Should not be used in conjunction with `x-min-v`.|
|x-Correlation-Id|header|string|false|The version of the API end point that the provider has responded with.|
|product-category|query|[ProductCategory](#schemaproductcategory)|false|Used to filter results on the productCategory field in the account end points. Any one of the valid values for this field can be supplied. If absent then all accounts returned.|
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

<h3 id="getaccountsbalances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[AccountsBalancesResponse](#schemaaccountsbalancesresponse)|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|The request was well formed but was unable to be processed due to business logic specific to the request.|Inline|

<h3 id="getaccountsbalances-responseschema">Response Schema</h3>

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

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
openId ( Scopes: basic_bank_account )
</aside>

## findSpecificAccountBalances

<a id="opIdfindSpecificAccountBalances"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://myserver.com/cds-au/banking/v1/accounts/balances \
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
  url: 'https://myserver.com/cds-au/banking/v1/accounts/balances',
  method: 'post',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`POST /accounts/balances`

*Specific Balances Data.*

Obtain balances for a specified list of account Ids.

> Body parameter

```json
{
  "data": [
    "string"
  ]
}
```

<h3 id="findspecificaccountbalances-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|x-v|header|integer(int32)|true|Version of the API end point requested by the client. Must be set to a positive integer. If the version(s) requested is not supported then the provider should respond with a `406 Not Acceptable`.|
|x-min-v|header|integer(int32)|false|Minimum version of the API end point requested by the client. Must be set to a positive integer if provided. The provider should respond with the highest supported version between `x-min-v` and `x-v`.|
|x-<<PID>>-Id|header|string|false|A provider specific version of extension fields. Should not be used in conjunction with `x-min-v`.|
|x-Correlation-Id|header|string|false|The version of the API end point that the provider has responded with.|
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

<h3 id="findspecificaccountbalances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[AccountsBalancesResponse](#schemaaccountsbalancesresponse)|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|The request was well formed but was unable to be processed due to business logic specific to the request.|Inline|

<h3 id="findspecificaccountbalances-responseschema">Response Schema</h3>

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

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
openId ( Scopes: basic_bank_account )
</aside>

<!--
# Schemas
-->

<h2 id="tocSaccountsresponse">AccountsResponse</h2>

<a id="schemaaccountsresponse"></a>

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
    "accounts": [
      {
        "accountId": "string",
        "displayName": "string",
        "nickname": "string",
        "maskedNumber": "string",
        "productCategory": "PERS_AT_CALL_DEPOSITS",
        "providerType": "string",
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

### Properties

*allOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[APIResponseMeta](#schemaapiresponsemeta)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» data|object|true|none|none|
|»» accounts|[[Account](#schemaaccount)]|true|none|List of Accounts.|

<h2 id="tocSaccountresponse">AccountResponse</h2>

<a id="schemaaccountresponse"></a>

```json
{
  "links": {
    "self": "http://example.com",
    "first": "http://example.com",
    "prev": "http://example.com",
    "next": "http://example.com",
    "last": "http://example.com"
  },
  "data": {
    "accountId": "string",
    "displayName": "string",
    "nickname": "string",
    "maskedNumber": "string",
    "productCategory": "PERS_AT_CALL_DEPOSITS",
    "providerType": "string",
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
    },
    "features": [
      {
        "featureType": "DEBIT_CARD",
        "discountType": "DEBIT_CARD"
      }
    ],
    "fees": [
      {
        "name": "string",
        "feeType": "PERIODIC",
        "amount": 0,
        "additionalInfo": "string",
        "additionalInfoUri": "http://example.com",
        "discounts": [
          {
            "discountType": "BALANCE",
            "additionalValue": 0
          }
        ],
        "additionalValue": "DAILY"
      }
    ],
    "depositRates": [
      {
        "rate": "string",
        "additionalInfo": "string",
        "additionalInfoUri": "http://example.com",
        "depositRateType": "FIXED",
        "additionalValue": "2018-11-01T05:33:52Z",
        "discountType": "FIXED"
      }
    ],
    "lendingRates": [
      {
        "rate": "string",
        "additionalInfo": "string",
        "additionalInfoUri": "http://example.com",
        "lendingRateType": "FIXED",
        "additionalValue": "2018-11-01T05:33:52Z",
        "discountType": "FIXED"
      }
    ],
    "bundleName": "string",
    "specificAccount": {
      "accountType": "termDeposit",
      "depositDate": "2018-11-01",
      "maturityDate": "2018-11-01",
      "maturityAmount": 0
    },
    "address": {
      "addressType": "simple",
      "mailingName": "string",
      "addressLine1": "string",
      "addressLine2": "string",
      "addressLine3": "string",
      "postcode": "string",
      "city": "string",
      "state": "string",
      "country": "AUS"
    }
  }
}

```

### Properties

*allOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[APIResponse](#schemaapiresponse)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» data|[AccountDetail](#schemaaccountdetail)|true|none|none|

<h2 id="tocSaccountsbalancesresponse">AccountsBalancesResponse</h2>

<a id="schemaaccountsbalancesresponse"></a>

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

### Properties

*allOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[APIResponseMeta](#schemaapiresponsemeta)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» data|object|true|none|none|
|»» balances|[[AccountBalance](#schemaaccountbalance)]|true|none|List of Balances.|

<h2 id="tocSaccountstransactionsresponse">AccountsTransactionsResponse</h2>

<a id="schemaaccountstransactionsresponse"></a>

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

### Properties

*allOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[APIResponseMeta](#schemaapiresponsemeta)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» data|object|true|none|none|
|»» transactions|[[AccountTransaction](#schemaaccounttransaction)]|true|none|none|

<h2 id="tocSaccounttransactionresponse">AccountTransactionResponse</h2>

<a id="schemaaccounttransactionresponse"></a>

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

### Properties

*allOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[APIResponseMeta](#schemaapiresponsemeta)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» data|object|true|none|none|
|»» accountId|[AccountId](#schemaaccountid)|true|none|A unique ID of the account adhering to the standards for ID permanence.|
|»» displayName|string|true|none|The display name of the account as defined by the bank. This should not incorporate account numbers or PANs.  If it does, the values should be masked according to the rules of the `MaskedAccountNumber` type.|
|»» nickname|string|false|none|A customer supplied nickname for the account.|
|»» transaction|[TransactionDetail](#schematransactiondetail)|false|none|none|

<h2 id="tocSaccounttransactionsresponse">AccountTransactionsResponse</h2>

<a id="schemaaccounttransactionsresponse"></a>

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

### Properties

*allOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[APIResponseMeta](#schemaapiresponsemeta)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» data|object|true|none|none|
|»» accountId|[AccountId](#schemaaccountid)|true|none|A unique ID of the account adhering to the standards for ID permanence.|
|»» displayName|string|true|none|The display name of the account as defined by the bank. This should not incorporate account numbers or PANs.  If it does, the values should be masked according to the rules of the `MaskedAccountNumber` type.|
|»» nickname|string|false|none|A customer supplied nickname for the account.|
|»» transactions|[[TransactionBasic](#schematransactionbasic)]|true|none|The list of transactions returned. These are expected to be ordered with the most recent transaction first.|

<h2 id="tocSaccountdirectdebitsresponse">AccountDirectDebitsResponse</h2>

<a id="schemaaccountdirectdebitsresponse"></a>

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
    "directDebitAuthorisations": [
      {
        "accountId": "string",
        "authorisedEntity": {
          "name": "string",
          "financialInsitution": "string",
          "abn": "string",
          "acn": "string"
        },
        "lastDebitDateTime": "2018-11-01T05:33:52Z",
        "lastDebitAmount": 300.56
      }
    ]
  }
}

```

### Properties

*allOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[APIResponseMeta](#schemaapiresponsemeta)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» data|object|true|none|none|
|»» directDebitAuthorisations|[[AccountDirectDebit](#schemaaccountdirectdebit)]|true|none|The list of authorisations returned.|

<h2 id="tocSproductsresponse">ProductsResponse</h2>

<a id="schemaproductsresponse"></a>

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
    "products": [
      {
        "productId": "string",
        "effectiveFrom": "2018-11-01T05:33:52Z",
        "effectiveTo": "2018-11-01T05:33:52Z",
        "lastUpdated": "2018-11-01T05:33:52Z",
        "productCategory": "PERS_AT_CALL_DEPOSITS",
        "name": "string",
        "description": "string",
        "applicationUri": "http://example.com",
        "isNegotiable": true,
        "additionalInformation": {
          "overviewUri": "http://example.com",
          "termsUri": "http://example.com",
          "eligibilityUri": "http://example.com",
          "feesAndPricingUri": "http://example.com",
          "bundleUri": "http://example.com"
        }
      }
    ]
  }
}

```

### Properties

*allOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[APIResponseMeta](#schemaapiresponsemeta)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» data|object|true|none|none|
|»» products|[[Product](#schemaproduct)]|true|none|The list of products returned.|

<h2 id="tocSproductresponse">ProductResponse</h2>

<a id="schemaproductresponse"></a>

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
    "productId": "string",
    "effectiveFrom": "2018-11-01T05:33:52Z",
    "effectiveTo": "2018-11-01T05:33:52Z",
    "lastUpdated": "2018-11-01T05:33:52Z",
    "productCategory": "PERS_AT_CALL_DEPOSITS",
    "name": "string",
    "description": "string",
    "applicationUri": "http://example.com",
    "isNegotiable": true,
    "additionalInformation": {
      "overviewUri": "http://example.com",
      "termsUri": "http://example.com",
      "eligibilityUri": "http://example.com",
      "feesAndPricingUri": "http://example.com",
      "bundleUri": "http://example.com"
    },
    "features": [
      {
        "featureType": "DEBIT_CARD",
        "discountType": "DEBIT_CARD"
      }
    ],
    "fees": [
      {
        "name": "string",
        "feeType": "PERIODIC",
        "amount": 0,
        "additionalInfo": "string",
        "additionalInfoUri": "http://example.com",
        "discounts": [
          {
            "discountType": "BALANCE",
            "additionalValue": 0
          }
        ],
        "additionalValue": "DAILY"
      }
    ],
    "depositRates": [
      {
        "rate": "string",
        "additionalInfo": "string",
        "additionalInfoUri": "http://example.com",
        "depositRateType": "FIXED",
        "additionalValue": "2018-11-01T05:33:52Z",
        "discountType": "FIXED"
      }
    ],
    "lendingRates": [
      {
        "rate": "string",
        "additionalInfo": "string",
        "additionalInfoUri": "http://example.com",
        "lendingRateType": "FIXED",
        "additionalValue": "2018-11-01T05:33:52Z",
        "discountType": "FIXED"
      }
    ],
    "constraints": [
      {
        "constraintType": "MIN_BALANCE",
        "additionalValue": 0
      }
    ],
    "eligibility": [
      {
        "additionalInfo": "string",
        "additionalInfoUri": "http://example.com",
        "eligibilityType": "BUSINESS"
      }
    ]
  }
}

```

### Properties

*allOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[APIResponseMeta](#schemaapiresponsemeta)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» data|[ProductDetail](#schemaproductdetail)|true|none|none|

<h2 id="tocSpayeesresponse">PayeesResponse</h2>

<a id="schemapayeesresponse"></a>

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
    "payees": [
      {
        "payeeId": "string",
        "nickname": "string",
        "description": "string",
        "type": "DOMESTIC"
      }
    ]
  }
}

```

### Properties

*allOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[APIResponseMeta](#schemaapiresponsemeta)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» data|object|true|none|none|
|»» payees|[[Payee](#schemapayee)]|true|none|The list of payyees returned.|

<h2 id="tocSpayeeresponse">PayeeResponse</h2>

<a id="schemapayeeresponse"></a>

```json
{
  "links": {
    "self": "http://example.com",
    "first": "http://example.com",
    "prev": "http://example.com",
    "next": "http://example.com",
    "last": "http://example.com"
  },
  "data": {
    "payeeId": "string",
    "nickname": "string",
    "description": "string",
    "type": "DOMESTIC",
    "payee": {
      "payeeType": "domestic",
      "domesticAccountPayee": {
        "domesticPayeeType": "payId",
        "name": "string",
        "identifier": "string",
        "type": "EMAIL"
      }
    }
  }
}

```

### Properties

*allOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[APIResponse](#schemaapiresponse)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» data|[PayeeDetail](#schemapayeedetail)|true|none|none|

<h2 id="tocSpayeetypeenum">PayeeTypeEnum</h2>

<a id="schemapayeetypeenum"></a>

```json
"DOMESTIC"

```

*The enumeration of payee types.*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|The enumeration of payee types.|

#### Enumerated Values

|Property|Value|
|---|---|
|*anonymous*|DOMESTIC|
|*anonymous*|INTERNATIONAL|
|*anonymous*|BILLER|

<h2 id="tocSpayeeid">PayeeId</h2>

<a id="schemapayeeid"></a>

```json
"string"

```

*ID of the payee adhering to the rules of ID permanence.*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string(ASCII)|false|none|ID of the payee adhering to the rules of ID permanence.|

<h2 id="tocSpayee">Payee</h2>

<a id="schemapayee"></a>

```json
{
  "payeeId": "string",
  "nickname": "string",
  "description": "string",
  "type": "DOMESTIC"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|payeeId|[PayeeId](#schemapayeeid)|true|none|ID of the payee adhering to the rules of ID permanence.|
|nickname|string|true|none|A description of the payee provided by the customer.|
|description|string|false|none|A description of the payee provided by the customer.|
|type|[PayeeTypeEnum](#schemapayeetypeenum)|true|none|The enumeration of payee types.|

<h2 id="tocSpayeedetail">PayeeDetail</h2>

<a id="schemapayeedetail"></a>

```json
{
  "payeeId": "string",
  "nickname": "string",
  "description": "string",
  "type": "DOMESTIC",
  "payee": {
    "payeeType": "domestic",
    "domesticAccountPayee": {
      "domesticPayeeType": "payId",
      "name": "string",
      "identifier": "string",
      "type": "EMAIL"
    }
  }
}

```

### Properties

*allOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[Payee](#schemapayee)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» payee|any|true|none|none|

*oneOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»» *anonymous*|[DomesticPayeeType](#schemadomesticpayeetype)|false|none|none|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»» *anonymous*|[BillerPayeeType](#schemabillerpayeetype)|false|none|none|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»» *anonymous*|[InternationalPayeeType](#schemainternationalpayeetype)|false|none|none|

<h2 id="tocSpayeetype">PayeeType</h2>

<a id="schemapayeetype"></a>

```json
{
  "payeeType": "domestic"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|payeeType|string|true|none|The Payee type.|

#### Enumerated Values

|Property|Value|
|---|---|
|payeeType|domestic|
|payeeType|biller|
|payeeType|international|

<h2 id="tocSdomesticpayeesubtype">DomesticPayeeSubType</h2>

<a id="schemadomesticpayeesubtype"></a>

```json
{
  "domesticPayeeType": "account"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domesticPayeeType|string|true|none|The Domestic Payee type.|

#### Enumerated Values

|Property|Value|
|---|---|
|domesticPayeeType|account|
|domesticPayeeType|payId|

<h2 id="tocSaccountdomesticpayeetype">AccountDomesticPayeeType</h2>

<a id="schemaaccountdomesticpayeetype"></a>

```json
{
  "domesticPayeeType": "account",
  "accountName": "string",
  "bsb": "string",
  "accountNumber": "string"
}

```

### Properties

*allOf - discriminator: DomesticPayeeSubType.domesticPayeeType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[DomesticPayeeSubType](#schemadomesticpayeesubtype)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» accountName|string|true|none|name of the account to pay to.|
|» bsb|string|true|none|BSB of the account to pay to.|
|» accountNumber|string|true|none|Number of the account to pay to.|
|» domesticPayeeType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|domesticPayeeType|account|

<h2 id="tocSpayiddomesticpayeetype">PayIDDomesticPayeeType</h2>

<a id="schemapayiddomesticpayeetype"></a>

```json
{
  "domesticPayeeType": "payId",
  "name": "string",
  "identifier": "string",
  "type": "EMAIL"
}

```

### Properties

*allOf - discriminator: DomesticPayeeSubType.domesticPayeeType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[DomesticPayeeSubType](#schemadomesticpayeesubtype)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» name|string|true|none|The name assiged to the PayID by the owner of the PayID.|
|» identifier|string|true|none|The identifier of the PayID.|
|» type|string|true|none|The type of PayID.|
|» domesticPayeeType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|EMAIL|
|type|MOBILE|
|type|ORG_NUMBER|
|domesticPayeeType|payId|

<h2 id="tocSdomesticpayeetype">DomesticPayeeType</h2>

<a id="schemadomesticpayeetype"></a>

```json
{
  "payeeType": "domestic",
  "domesticAccountPayee": {
    "domesticPayeeType": "payId",
    "name": "string",
    "identifier": "string",
    "type": "EMAIL"
  }
}

```

### Properties

*allOf - discriminator: PayeeType.payeeType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[PayeeType](#schemapayeetype)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» domesticAccountPayee|any|true|none|none|

*oneOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»» *anonymous*|[PayIDDomesticPayeeType](#schemapayiddomesticpayeetype)|false|none|none|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»» *anonymous*|[AccountDomesticPayeeType](#schemaaccountdomesticpayeetype)|false|none|none|

*continued*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» payeeType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|payeeType|domestic|

<h2 id="tocSbillerpayeetype">BillerPayeeType</h2>

<a id="schemabillerpayeetype"></a>

```json
{
  "payeeType": "biller",
  "billerCode": "string",
  "crn": "string",
  "billerName": "string"
}

```

### Properties

*allOf - discriminator: PayeeType.payeeType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[PayeeType](#schemapayeetype)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» billerCode|string|true|none|BPay Biller Code of the Biller.|
|» crn|string|true|none|BPay CRN of the Biller.|
|» billerName|string|true|none|Name of the Biller.|
|» payeeType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|payeeType|biller|

<h2 id="tocSinternationalpayeetype">InternationalPayeeType</h2>

<a id="schemainternationalpayeetype"></a>

```json
{
  "payeeType": "international",
  "beneficiaryDetails": {
    "name": "string",
    "country": "string",
    "address": "string",
    "message": "string"
  },
  "bankDetails": {
    "country": "string",
    "accountNumber": "string",
    "bankAddress": {
      "name": "string",
      "address": "string"
    },
    "swiftCode": "string",
    "sortCode": "string",
    "chipNumber": "string",
    "routingNumber": "string"
  }
}

```

### Properties

*allOf - discriminator: PayeeType.payeeType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[PayeeType](#schemapayeetype)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» beneficiaryDetails|object|true|none|none|
|»» name|string|true|none|Name of the beneficiary.|
|»» country|string|true|none|Country where the beneficiary resides.|
|»» address|string|true|none|Address of the beneficiary.|
|»» message|string|false|none|Response message for the payment.|
|» bankDetails|object|false|none|none|
|»» country|string|true|none|Country of the recipient institution.|
|»» accountNumber|string|true|none|Accont targeted for payment.|
|»» bankAddress|object|false|none|none|
|»»» name|string|true|none|Name of the recipient bank.|
|»»» address|string|true|none|Address of the recipient bank.|
|»» swiftCode|string|false|none|Swift bank code.|
|»» sortCode|string|false|none|Sort code used for account idenfitication in some jurisdictions..|
|»» chipNumber|string|false|none|Number for the Clearing House Interbank Payments system.|
|»» routingNumber|string|false|none|International bank routing number.|
|» payeeType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|payeeType|international|

<h2 id="tocStransactionbasic">TransactionBasic</h2>

<a id="schematransactionbasic"></a>

```json
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

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|transactionId|[TransactionId](#schematransactionid)|false|none|A unique ID of the transaction adhering to the standards for ID permanence. This field is mandatory in this payload as it is a reflection of the requested transaction in the path parameter.|
|status|[TransactionStatus](#schematransactionstatus)|true|none|Status of the transaction.|
|description|string|true|none|The transaction description as applied by the financial institution.|
|postDateTime|string(date-time)|false|none|The time the transaction was posted. This field is MANDATORY if the transaction has status POSTED. This is the time that appears on a standard statement.|
|executionDateTime|string(date-time)|false|none|The time the transaction was executed by the originating customer, if available.|
|amount|[CurrencyAmount](#schemacurrencyamount)|false|none|The value of the transaction. Negative values mean money was outgoing.|
|reference|string|true|none|The reference for the transaction provided by the originating institution.|

<h2 id="tocStransactiondetail">TransactionDetail</h2>

<a id="schematransactiondetail"></a>

```json
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
  "extendedData": {
    "payer": "string",
    "payee": "string",
    "extensionType": "extendedDescription",
    "extendedDescription": "string",
    "service": "X2P1.01"
  }
}

```

### Properties

*allOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[TransactionBasic](#schematransactionbasic)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|A transaction with extended detail.|
|» extendedData|[ExtendedTransactionData](#schemaextendedtransactiondata)|false|none|Contains more detailed information specific to transactions originated via NPP.|

<h2 id="tocSaccounttransaction">AccountTransaction</h2>

<a id="schemaaccounttransaction"></a>

```json
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

```

### Properties

*allOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[TransactionBasic](#schematransactionbasic)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» accountId|[AccountId](#schemaaccountid)|true|none|A unique ID of the account adhering to the standards for ID permanence.|
|» isDetailAvailable|boolean|true|none|none|

<h2 id="tocSextendedtransactiondata">ExtendedTransactionData</h2>

<a id="schemaextendedtransactiondata"></a>

```json
{
  "payer": "string",
  "payee": "string",
  "extensionType": "extendedDescription",
  "extendedDescription": "string",
  "service": "X2P1.01"
}

```

*Contains more detailed information specific to transactions originated via NPP.*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|payer|string|false|none|Label of the originating payer. Mandatory for an inbound payment.|
|payee|string|false|none|Label of the target PayID. Mandatory for an outbound payment.|
|extensionType|string|false|none|Optional extended data provided specific to transaction originated via NPP.|
|extendedDescription|string|false|none|An extended string description.  Only present if specified by the extensionType field.|
|service|string|true|none|Identifier of the applicable overlay service.|

#### Enumerated Values

|Property|Value|
|---|---|
|extensionType|extendedDescription|
|service|X2P1.01|

<h2 id="tocStransactionstatus">TransactionStatus</h2>

<a id="schematransactionstatus"></a>

```json
"PENDING"

```

*Status of the transaction.*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Status of the transaction.|

#### Enumerated Values

|Property|Value|
|---|---|
|*anonymous*|PENDING|
|*anonymous*|POSTED|

<h2 id="tocStransactionid">TransactionId</h2>

<a id="schematransactionid"></a>

```json
"string"

```

*A unique ID of the transaction adhering to the standards for ID permanence. This field is mandatory in this payload as it is a reflection of the requested transaction in the path parameter.*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string(ASCII)|false|none|A unique ID of the transaction adhering to the standards for ID permanence. This field is mandatory in this payload as it is a reflection of the requested transaction in the path parameter.|

<h2 id="tocSaccountdirectdebit">AccountDirectDebit</h2>

<a id="schemaaccountdirectdebit"></a>

```json
{
  "accountId": "string",
  "authorisedEntity": {
    "name": "string",
    "financialInsitution": "string",
    "abn": "string",
    "acn": "string"
  },
  "lastDebitDateTime": "2018-11-01T05:33:52Z",
  "lastDebitAmount": 300.56
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|[AccountId](#schemaaccountid)|true|none|A unique ID of the account adhering to the standards for ID permanence.|
|authorisedEntity|[AuthorisedEntity](#schemaauthorisedentity)|false|none|none|
|lastDebitDateTime|string(date-time)|false|none|The date and time of the last debit executed under this authorisation|
|lastDebitAmount|number|false|none|none|

<h2 id="tocSauthorisedentity">AuthorisedEntity</h2>

<a id="schemaauthorisedentity"></a>

```json
{
  "name": "string",
  "financialInsitution": "string",
  "abn": "string",
  "acn": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Name of the authorised entity.|
|financialInsitution|string|true|none|Name of the financial institution through which the direct debit will be executed.|
|abn|[ABN](#schemaabn)|false|none|Australian Business Number.|
|acn|[ACN](#schemaacn)|false|none|Australian Company Number.|

<h2 id="tocSabn">ABN</h2>

<a id="schemaabn"></a>

```json
"string"

```

*Australian Business Number.*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Australian Business Number.|

<h2 id="tocSacn">ACN</h2>

<a id="schemaacn"></a>

```json
"string"

```

*Australian Company Number.*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Australian Company Number.|

<h2 id="tocSaccount">Account</h2>

<a id="schemaaccount"></a>

```json
{
  "accountId": "string",
  "displayName": "string",
  "nickname": "string",
  "maskedNumber": "string",
  "productCategory": "PERS_AT_CALL_DEPOSITS",
  "providerType": "string",
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

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|[AccountId](#schemaaccountid)|true|none|A unique ID of the account adhering to the standards for ID permanence.|
|displayName|string|true|none|The display name of the account. If a customer provided nickname is available that value should be returned.|
|nickname|string|false|none|A customer supplied nick name for the account.|
|maskedNumber|[MaskedAccountNumber](#schemamaskedaccountnumber)|true|none|A masked version of the account. Whether BSB/Account Number, Credit Card PAN or another number this should be formatted with each digit masked and the last three digits unmasked.|
|productCategory|[ProductCategory](#schemaproductcategory)|false|none|The the product category an account aligns withs.|
|providerType|string|true|none|The unique type as defined by the account provider.|
|balance|any|true|none|none|

*oneOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[DepositBalanceType](#schemadepositbalancetype)|false|none|none|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[LendingBalanceType](#schemalendingbalancetype)|false|none|none|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[MultiCurrencyPursesType](#schemamulticurrencypursestype)|false|none|none|

<h2 id="tocSaccountdetail">AccountDetail</h2>

<a id="schemaaccountdetail"></a>

```json
{
  "accountId": "string",
  "displayName": "string",
  "nickname": "string",
  "maskedNumber": "string",
  "productCategory": "PERS_AT_CALL_DEPOSITS",
  "providerType": "string",
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
  },
  "features": [
    {
      "featureType": "DEBIT_CARD",
      "discountType": "DEBIT_CARD"
    }
  ],
  "fees": [
    {
      "name": "string",
      "feeType": "PERIODIC",
      "amount": 0,
      "additionalInfo": "string",
      "additionalInfoUri": "http://example.com",
      "discounts": [
        {
          "discountType": "BALANCE",
          "additionalValue": 0
        }
      ],
      "additionalValue": "DAILY"
    }
  ],
  "depositRates": [
    {
      "rate": "string",
      "additionalInfo": "string",
      "additionalInfoUri": "http://example.com",
      "depositRateType": "FIXED",
      "additionalValue": "2018-11-01T05:33:52Z",
      "discountType": "FIXED"
    }
  ],
  "lendingRates": [
    {
      "rate": "string",
      "additionalInfo": "string",
      "additionalInfoUri": "http://example.com",
      "lendingRateType": "FIXED",
      "additionalValue": "2018-11-01T05:33:52Z",
      "discountType": "FIXED"
    }
  ],
  "bundleName": "string",
  "specificAccount": {
    "accountType": "termDeposit",
    "depositDate": "2018-11-01",
    "maturityDate": "2018-11-01",
    "maturityAmount": 0
  },
  "address": {
    "addressType": "simple",
    "mailingName": "string",
    "addressLine1": "string",
    "addressLine2": "string",
    "addressLine3": "string",
    "postcode": "string",
    "city": "string",
    "state": "string",
    "country": "AUS"
  }
}

```

### Properties

*allOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[Account](#schemaaccount)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[ProductCommon](#schemaproductcommon)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» bundleName|string|false|none|Indicates if this account is park of a bundle that is providing additional benefit to the customer.|
|» specificAccount|any|true|none|none|

*oneOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»» *anonymous*|[TermDepositAccountType](#schematermdepositaccounttype)|false|none|none|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»» *anonymous*|[CreditCardAccountType](#schemacreditcardaccounttype)|false|none|none|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»» *anonymous*|[LoanAccountType](#schemaloanaccounttype)|false|none|none|

*continued*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» address|any|true|none|none|

*oneOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»» *anonymous*|[SimpleAddress](#schemasimpleaddress)|false|none|none|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»» *anonymous*|[PAFAddress](#schemapafaddress)|false|none|none|

<h2 id="tocSaddress">Address</h2>

<a id="schemaaddress"></a>

```json
{
  "addressType": "simple"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addressType|string|true|none|The Address type.|

#### Enumerated Values

|Property|Value|
|---|---|
|addressType|simple|
|addressType|paf|

<h2 id="tocSsimpleaddress">SimpleAddress</h2>

<a id="schemasimpleaddress"></a>

```json
{
  "addressType": "simple",
  "mailingName": "string",
  "addressLine1": "string",
  "addressLine2": "string",
  "addressLine3": "string",
  "postcode": "string",
  "city": "string",
  "state": "string",
  "country": "AUS"
}

```

### Properties

*allOf - discriminator: Address.addressType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[Address](#schemaaddress)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» mailingName|string|false|none|Name of the individual or business formatted for inclusion in an address used for physical mail.|
|» addressLine1|string|true|none|none|
|» addressLine2|string|false|none|none|
|» addressLine3|string|false|none|none|
|» postcode|string|false|none|Mandatory for Australian address.|
|» city|string|true|none|none|
|» state|string|true|none|Free text if the country is not Australia.  If country is Australia then must be one of the values defined by the ISO 3166:AU standard.|
|» country|[CountryCodeISO](#schemacountrycodeiso)|false|none|A valid ISO 3166 Alph-3 country code.|
|» addressType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|addressType|simple|

<h2 id="tocSpafaddress">PAFAddress</h2>

<a id="schemapafaddress"></a>

```json
{
  "addressType": "paf",
  "data": {}
}

```

### Properties

*allOf - discriminator: Address.addressType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[Address](#schemaaddress)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» addressType|string|false|none|none|
|» data|object|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|addressType|paf|

<h2 id="tocScountrycodeiso">CountryCodeISO</h2>

<a id="schemacountrycodeiso"></a>

```json
"AUS"

```

*A valid ISO 3166 Alph-3 country code.*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|A valid ISO 3166 Alph-3 country code.|

<h2 id="tocSproduct">Product</h2>

<a id="schemaproduct"></a>

```json
{
  "productId": "string",
  "effectiveFrom": "2018-11-01T05:33:52Z",
  "effectiveTo": "2018-11-01T05:33:52Z",
  "lastUpdated": "2018-11-01T05:33:52Z",
  "productCategory": "PERS_AT_CALL_DEPOSITS",
  "name": "string",
  "description": "string",
  "applicationUri": "http://example.com",
  "isNegotiable": true,
  "additionalInformation": {
    "overviewUri": "http://example.com",
    "termsUri": "http://example.com",
    "eligibilityUri": "http://example.com",
    "feesAndPricingUri": "http://example.com",
    "bundleUri": "http://example.com"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|productId|string(ASCII)|true|none|A provider specific unique identifier for this product. This identifier must be unique to a product but does not otherwise need to adhere to ID permanence guidelines.|
|effectiveFrom|string(date-time)|false|none|A description of the product.|
|effectiveTo|string(date-time)|false|none|The date and time at which this product will be retired and will no longer be offered.|
|lastUpdated|string(date-time)|true|none|A description of the product.|
|productCategory|[ProductCategory](#schemaproductcategory)|true|none|The the product category an account aligns withs.|
|name|string|true|none|The display name of the product.|
|description|string|true|none|The description of the product.|
|applicationUri|string(uri)|false|none|A link to an application web page where this product can be applied for.|
|isNegotiable|boolean|true|none|Indicates whether the product is specifically designed so that fees and prices are negotiated depending on context. While all products are open to a degree of negotiation this flag indicates that negotiation is expected and thus that the provision of specific fees and rates is not applicable.|
|additionalInformation|object|false|none|Object that contains links to additional information on specific topics.|
|» overviewUri|string(uri)|false|none|General overview of the product.|
|» termsUri|string(uri)|false|none|Terms and conditions for the product.|
|» eligibilityUri|string(uri)|false|none|Eligibility rules and criteria for the product.|
|» feesAndPricingUri|string(uri)|false|none|Description of fees, pricing, discounts, exemptions and bonuses for the product.|
|» bundleUri|string(uri)|false|none|Description of a bundle that this product can be part of.|

<h2 id="tocSproductdetail">ProductDetail</h2>

<a id="schemaproductdetail"></a>

```json
{
  "productId": "string",
  "effectiveFrom": "2018-11-01T05:33:52Z",
  "effectiveTo": "2018-11-01T05:33:52Z",
  "lastUpdated": "2018-11-01T05:33:52Z",
  "productCategory": "PERS_AT_CALL_DEPOSITS",
  "name": "string",
  "description": "string",
  "applicationUri": "http://example.com",
  "isNegotiable": true,
  "additionalInformation": {
    "overviewUri": "http://example.com",
    "termsUri": "http://example.com",
    "eligibilityUri": "http://example.com",
    "feesAndPricingUri": "http://example.com",
    "bundleUri": "http://example.com"
  },
  "features": [
    {
      "featureType": "DEBIT_CARD",
      "discountType": "DEBIT_CARD"
    }
  ],
  "fees": [
    {
      "name": "string",
      "feeType": "PERIODIC",
      "amount": 0,
      "additionalInfo": "string",
      "additionalInfoUri": "http://example.com",
      "discounts": [
        {
          "discountType": "BALANCE",
          "additionalValue": 0
        }
      ],
      "additionalValue": "DAILY"
    }
  ],
  "depositRates": [
    {
      "rate": "string",
      "additionalInfo": "string",
      "additionalInfoUri": "http://example.com",
      "depositRateType": "FIXED",
      "additionalValue": "2018-11-01T05:33:52Z",
      "discountType": "FIXED"
    }
  ],
  "lendingRates": [
    {
      "rate": "string",
      "additionalInfo": "string",
      "additionalInfoUri": "http://example.com",
      "lendingRateType": "FIXED",
      "additionalValue": "2018-11-01T05:33:52Z",
      "discountType": "FIXED"
    }
  ],
  "constraints": [
    {
      "constraintType": "MIN_BALANCE",
      "additionalValue": 0
    }
  ],
  "eligibility": [
    {
      "additionalInfo": "string",
      "additionalInfoUri": "http://example.com",
      "eligibilityType": "BUSINESS"
    }
  ]
}

```

### Properties

*allOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[Product](#schemaproduct)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[ProductCommon](#schemaproductcommon)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» constraints|[oneOf]|false|none|none|

*oneOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»» *anonymous*|[MinBalanceConstraintType](#schemaminbalanceconstrainttype)|false|none|The minimum balance required for the product.|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»» *anonymous*|[OpeningBalanceConstraintType](#schemaopeningbalanceconstrainttype)|false|none|An opening balance is required for the product.|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»» *anonymous*|[MaxLimitConstraintType](#schemamaxlimitconstrainttype)|false|none|A maximum credit line exists.|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»» *anonymous*|[MinLimitConstraintType](#schemaminlimitconstrainttype)|false|none|A minimum credit line exists.|

*continued*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» eligibility|[oneOf]|false|none|none|

*oneOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»» *anonymous*|[BusinessEligibilityType](#schemabusinesseligibilitytype)|false|none|Only business may apply for the account.|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»» *anonymous*|[PensionRecipientEligibilityType](#schemapensionrecipienteligibilitytype)|false|none|A recipient of a government pension may apply for the product.|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»» *anonymous*|[MinAgeEligibilityType](#schemaminageeligibilitytype)|false|none|Only customers older than a minimum age may apply.|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»» *anonymous*|[MinTurnoverEligibilityType](#schemaminturnovereligibilitytype)|false|none|Only a business with greater than a minimum turnover may apply.|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»» *anonymous*|[StaffEligibilityType](#schemastaffeligibilitytype)|false|none|Only a staff member of the provider may apply.|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»» *anonymous*|[OtherEligibilityType](#schemaothereligibilitytype)|false|none|Another elibility criteria exists as described in the additionalInfo field|

<h2 id="tocSproductcommon">ProductCommon</h2>

<a id="schemaproductcommon"></a>

```json
{
  "features": [
    {
      "featureType": "DEBIT_CARD",
      "discountType": "DEBIT_CARD"
    }
  ],
  "fees": [
    {
      "name": "string",
      "feeType": "PERIODIC",
      "amount": 0,
      "additionalInfo": "string",
      "additionalInfoUri": "http://example.com",
      "discounts": [
        {
          "discountType": "BALANCE",
          "additionalValue": 0
        }
      ],
      "additionalValue": "DAILY"
    }
  ],
  "depositRates": [
    {
      "rate": "string",
      "additionalInfo": "string",
      "additionalInfoUri": "http://example.com",
      "depositRateType": "FIXED",
      "additionalValue": "2018-11-01T05:33:52Z",
      "discountType": "FIXED"
    }
  ],
  "lendingRates": [
    {
      "rate": "string",
      "additionalInfo": "string",
      "additionalInfoUri": "http://example.com",
      "lendingRateType": "FIXED",
      "additionalValue": "2018-11-01T05:33:52Z",
      "discountType": "FIXED"
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|features|[oneOf]|false|none|none|

*oneOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[DebitCardFeatureType](#schemadebitcardfeaturetype)|false|none|A debit card is available for the product.|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[AdditionalCardsFeatureType](#schemaadditionalcardsfeaturetype)|false|none|Addtional cards can be requested.|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[UnlimitedTransactionsFeatureType](#schemaunlimitedtransactionsfeaturetype)|false|none|Unlimited free transactions available.|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[FreeTransactionsFeatureType](#schemafreetransactionsfeaturetype)|false|none|A set number of free transactions available each month.|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[LoyaltyProgramFeatureType](#schemaloyaltyprogramfeaturetype)|false|none|A points based loyalty program is available.|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[OffsetFeatureType](#schemaoffsetfeaturetype)|false|none|An offset account can be connected to the product.|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[OverdraftFeatureType](#schemaoverdraftfeaturetype)|false|none|An overdraft can be applied for.|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[RedrawFeatureType](#schemaredrawfeaturetype)|false|none|Redraw of repaid principal is available.|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[InsuranceFeatureType](#schemainsurancefeaturetype)|false|none|Insurance is provided as an additional feature of the product.|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[BalanceTransfersFeatureType](#schemabalancetransfersfeaturetype)|false|none|Balance transfers can be made from the account (eg. for credit cards).|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[IntFreeDaysFeatureType](#schemaintfreedaysfeaturetype)|false|none|Interest free period for purchases.|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[IntFreeMonthsFeatureType](#schemaintfreemonthsfeaturetype)|false|none|Interest free period for purchases.|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[IntFreeDaysTransfersFeatureType](#schemaintfreedaystransfersfeaturetype)|false|none|Interest free period for balance transfers.|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[IntFreeMonthsTransfersFeatureType](#schemaintfreemonthstransfersfeaturetype)|false|none|Interest free period for balance transfers.|

*continued*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fees|[oneOf]|false|none|none|

*oneOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[PeriodicFeeType](#schemaperiodicfeetype)|false|none|A periodic fee such as a monthly account servicing fee.|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[TransactionFeeType](#schematransactionfeetype)|false|none|A fee for each transaction (above any free transactions in a period)|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[ExitFeeType](#schemaexitfeetype)|false|none|A fee for closing the product|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[OverdrawFeeType](#schemaoverdrawfeetype)|false|none|A fee for overdrawing the account|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[MinBalanceFeeType](#schemaminbalancefeetype)|false|none|A periodic fee such as a monthly account servicing fee.|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[RedrawFeeType](#schemaredrawfeetype)|false|none|A fee for performing a redraw transaction.|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[OtherEventFeeType](#schemaothereventfeetype)|false|none|A fee for another type of event not already specified in the existing set.|

*continued*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|depositRates|[oneOf]|false|none|none|

*oneOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[FixedDepositRateType](#schemafixeddepositratetype)|false|none|Fixed rate for a period of time.|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[BonusDepositRateType](#schemabonusdepositratetype)|false|none|The bonus rate obtained by originating a bundle instead of a standalone product.|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[BonusDepositRateType](#schemabonusdepositratetype)|false|none|The bonus rate obtained by originating a bundle instead of a standalone product.|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[VariableDepositRateType](#schemavariabledepositratetype)|false|none|The variable base rate for the product.|

*continued*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lendingRates|[oneOf]|false|none|none|

*oneOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[FixedLendingRateType](#schemafixedlendingratetype)|false|none|Fixed rate for a period of time.|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[HoneymoonLendingRateType](#schemahoneymoonlendingratetype)|false|none|A honeymoon discount that will expire after a set number of months.|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[DiscountLendingRateType](#schemadiscountlendingratetype)|false|none|A specific discount rate that may be applied.|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[PenaltyLendingRateType](#schemapenaltylendingratetype)|false|none|A specific penalty rate that may be applied.|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[BundleDiscountLendingRateType](#schemabundlediscountlendingratetype)|false|none|A discount rate obtained by originating a bundle instead of a standalone product.|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[VariableLendingRateType](#schemavariablelendingratetype)|false|none|A variable base rate for the product.|

<h2 id="tocSeligibilitytype">EligibilityType</h2>

<a id="schemaeligibilitytype"></a>

```json
{
  "additionalInfo": "string",
  "additionalInfoUri": "http://example.com",
  "eligibilityType": "BUSINESS"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalInfo|string|false|none|Display text containing additional information relevant to the eligibility type.|
|additionalInfoUri|string(uri)|false|none|Link to a web page with more information on this eligibility criteria.|
|eligibilityType|string|true|none|The type of product eligibility.|

#### Enumerated Values

|Property|Value|
|---|---|
|eligibilityType|BUSINESS|
|eligibilityType|PERSON_RECIPIENT|
|eligibilityType|MIN_AGE|
|eligibilityType|MIN_TURNOVER|
|eligibilityType|STAFF|
|eligibilityType|OTHER|

<h2 id="tocSbusinesseligibilitytype">BusinessEligibilityType</h2>

<a id="schemabusinesseligibilitytype"></a>

```json
{
  "additionalInfo": "string",
  "additionalInfoUri": "http://example.com",
  "eligibilityType": "BUSINESS"
}

```

*Only business may apply for the account.*

### Properties

*allOf - discriminator: EligibilityType.eligibilityType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[EligibilityType](#schemaeligibilitytype)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» eligibilityType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|eligibilityType|BUSINESS|

<h2 id="tocSpensionrecipienteligibilitytype">PensionRecipientEligibilityType</h2>

<a id="schemapensionrecipienteligibilitytype"></a>

```json
{
  "additionalInfo": "string",
  "additionalInfoUri": "http://example.com",
  "eligibilityType": "PERSON_RECIPIENT"
}

```

*A recipient of a government pension may apply for the product.*

### Properties

*allOf - discriminator: EligibilityType.eligibilityType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[EligibilityType](#schemaeligibilitytype)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» eligibilityType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|eligibilityType|PERSON_RECIPIENT|

<h2 id="tocSminageeligibilitytype">MinAgeEligibilityType</h2>

<a id="schemaminageeligibilitytype"></a>

```json
{
  "additionalInfo": "string",
  "additionalInfoUri": "http://example.com",
  "eligibilityType": "MIN_AGE",
  "additionalValue": 0
}

```

*Only customers older than a minimum age may apply.*

### Properties

*allOf - discriminator: EligibilityType.eligibilityType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[EligibilityType](#schemaeligibilitytype)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» additionalValue|integer(int32)|false|none|The minimum age in years.|
|» eligibilityType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|eligibilityType|MIN_AGE|

<h2 id="tocSminturnovereligibilitytype">MinTurnoverEligibilityType</h2>

<a id="schemaminturnovereligibilitytype"></a>

```json
{
  "additionalInfo": "string",
  "additionalInfoUri": "http://example.com",
  "eligibilityType": "MIN_TURNOVER",
  "additionalValue": 0
}

```

*Only a business with greater than a minimum turnover may apply.*

### Properties

*allOf - discriminator: EligibilityType.eligibilityType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[EligibilityType](#schemaeligibilitytype)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» additionalValue|number|false|none|The minimum turnover.|
|» eligibilityType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|eligibilityType|MIN_TURNOVER|

<h2 id="tocSstaffeligibilitytype">StaffEligibilityType</h2>

<a id="schemastaffeligibilitytype"></a>

```json
{
  "additionalInfo": "string",
  "additionalInfoUri": "http://example.com",
  "eligibilityType": "STAFF"
}

```

*Only a staff member of the provider may apply.*

### Properties

*allOf - discriminator: EligibilityType.eligibilityType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[EligibilityType](#schemaeligibilitytype)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» eligibilityType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|eligibilityType|STAFF|

<h2 id="tocSothereligibilitytype">OtherEligibilityType</h2>

<a id="schemaothereligibilitytype"></a>

```json
{
  "additionalInfo": "string",
  "additionalInfoUri": "http://example.com",
  "eligibilityType": "OTHER",
  "additionalValue": "string"
}

```

*Another elibility criteria exists as described in the additionalInfo field*

### Properties

*allOf - discriminator: EligibilityType.eligibilityType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[EligibilityType](#schemaeligibilitytype)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» additionalValue|string|false|none|Value relevant to the criteria.|
|» eligibilityType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|eligibilityType|OTHER|

<h2 id="tocSconstrainttype">ConstraintType</h2>

<a id="schemaconstrainttype"></a>

```json
{
  "constraintType": "MIN_BALANCE"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|constraintType|string|true|none|The type of product constraint.|

#### Enumerated Values

|Property|Value|
|---|---|
|constraintType|MIN_BALANCE|
|constraintType|OPENING_BALANCE|
|constraintType|MAX_LIMIT|
|constraintType|MIN_LIMIT|

<h2 id="tocSminbalanceconstrainttype">MinBalanceConstraintType</h2>

<a id="schemaminbalanceconstrainttype"></a>

```json
{
  "constraintType": "MIN_BALANCE",
  "additionalValue": 0
}

```

*The minimum balance required for the product.*

### Properties

*allOf - discriminator: ConstraintType.constraintType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[ConstraintType](#schemaconstrainttype)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» additionalValue|number|false|none|The minimum balance.|
|» constraintType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|constraintType|MIN_BALANCE|

<h2 id="tocSopeningbalanceconstrainttype">OpeningBalanceConstraintType</h2>

<a id="schemaopeningbalanceconstrainttype"></a>

```json
{
  "constraintType": "OPENING_BALANCE",
  "additionalValue": 0
}

```

*An opening balance is required for the product.*

### Properties

*allOf - discriminator: ConstraintType.constraintType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[ConstraintType](#schemaconstrainttype)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» additionalValue|number|false|none|The minimum opening balance.|
|» constraintType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|constraintType|OPENING_BALANCE|

<h2 id="tocSmaxlimitconstrainttype">MaxLimitConstraintType</h2>

<a id="schemamaxlimitconstrainttype"></a>

```json
{
  "constraintType": "MAX_LIMIT",
  "additionalValue": 0
}

```

*A maximum credit line exists.*

### Properties

*allOf - discriminator: ConstraintType.constraintType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[ConstraintType](#schemaconstrainttype)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» additionalValue|number|false|none|The maximum limit.|
|» constraintType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|constraintType|MAX_LIMIT|

<h2 id="tocSminlimitconstrainttype">MinLimitConstraintType</h2>

<a id="schemaminlimitconstrainttype"></a>

```json
{
  "constraintType": "MIN_LIMIT",
  "additionalValue": 0
}

```

*A minimum credit line exists.*

### Properties

*allOf - discriminator: ConstraintType.constraintType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[ConstraintType](#schemaconstrainttype)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» additionalValue|number|false|none|The minimum limit.|
|» constraintType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|constraintType|MIN_LIMIT|

<h2 id="tocSlendingratetype">LendingRateType</h2>

<a id="schemalendingratetype"></a>

```json
{
  "rate": "string",
  "additionalInfo": "string",
  "additionalInfoUri": "http://example.com",
  "lendingRateType": "FIXED"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rate|string(rate)|true|none|The rate to be applied.|
|additionalInfo|string|false|none|Display text providing more information on the fee.|
|additionalInfoUri|string(uri)|false|none|Link to a web page with more information on this fee.|
|lendingRateType|string|false|none|The type of deposit rate.|

#### Enumerated Values

|Property|Value|
|---|---|
|lendingRateType|FIXED|
|lendingRateType|HONEYMOON|
|lendingRateType|DISCOUNT|
|lendingRateType|PENALTY|
|lendingRateType|BUNDLE_DISCOUNT|
|lendingRateType|VARIABLE|

<h2 id="tocSfixedlendingratetype">FixedLendingRateType</h2>

<a id="schemafixedlendingratetype"></a>

```json
{
  "rate": "string",
  "additionalInfo": "string",
  "additionalInfoUri": "http://example.com",
  "lendingRateType": "FIXED",
  "additionalValue": "2018-11-01T05:33:52Z",
  "discountType": "FIXED"
}

```

*Fixed rate for a period of time.*

### Properties

*allOf - discriminator: LendingRateType.lendingRateType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[LendingRateType](#schemalendingratetype)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» additionalValue|string(date-time)|false|none|When the fixed rate will expire.|
|» discountType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|discountType|FIXED|

<h2 id="tocShoneymoonlendingratetype">HoneymoonLendingRateType</h2>

<a id="schemahoneymoonlendingratetype"></a>

```json
{
  "rate": "string",
  "additionalInfo": "string",
  "additionalInfoUri": "http://example.com",
  "lendingRateType": "FIXED",
  "additionalValue": "2018-11-01T05:33:52Z",
  "discountType": "HONEYMOON"
}

```

*A honeymoon discount that will expire after a set number of months.*

### Properties

*allOf - discriminator: LendingRateType.lendingRateType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[LendingRateType](#schemalendingratetype)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» additionalValue|string(date-time)|false|none|When the honeymoon rate will expire.|
|» discountType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|discountType|HONEYMOON|

<h2 id="tocSdiscountlendingratetype">DiscountLendingRateType</h2>

<a id="schemadiscountlendingratetype"></a>

```json
{
  "rate": "string",
  "additionalInfo": "string",
  "additionalInfoUri": "http://example.com",
  "lendingRateType": "FIXED",
  "additionalValue": "string",
  "discountType": "DISCOUNT"
}

```

*A specific discount rate that may be applied.*

### Properties

*allOf - discriminator: LendingRateType.lendingRateType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[LendingRateType](#schemalendingratetype)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» additionalValue|string|false|none|Description of the discount.|
|» discountType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|discountType|DISCOUNT|

<h2 id="tocSpenaltylendingratetype">PenaltyLendingRateType</h2>

<a id="schemapenaltylendingratetype"></a>

```json
{
  "rate": "string",
  "additionalInfo": "string",
  "additionalInfoUri": "http://example.com",
  "lendingRateType": "FIXED",
  "additionalValue": "string",
  "discountType": "PENALTY"
}

```

*A specific penalty rate that may be applied.*

### Properties

*allOf - discriminator: LendingRateType.lendingRateType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[LendingRateType](#schemalendingratetype)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» additionalValue|string|false|none|Description of the penalty.|
|» discountType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|discountType|PENALTY|

<h2 id="tocSbundlediscountlendingratetype">BundleDiscountLendingRateType</h2>

<a id="schemabundlediscountlendingratetype"></a>

```json
{
  "rate": "string",
  "additionalInfo": "string",
  "additionalInfoUri": "http://example.com",
  "lendingRateType": "FIXED",
  "additionalValue": "string",
  "discountType": "BUNDLE_DISCOUNT"
}

```

*A discount rate obtained by originating a bundle instead of a standalone product.*

### Properties

*allOf - discriminator: LendingRateType.lendingRateType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[LendingRateType](#schemalendingratetype)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» additionalValue|string|false|none|The name of the bundle.|
|» discountType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|discountType|BUNDLE_DISCOUNT|

<h2 id="tocSvariablelendingratetype">VariableLendingRateType</h2>

<a id="schemavariablelendingratetype"></a>

```json
{
  "rate": "string",
  "additionalInfo": "string",
  "additionalInfoUri": "http://example.com",
  "lendingRateType": "FIXED",
  "discountType": "VARIABLE"
}

```

*A variable base rate for the product.*

### Properties

*allOf - discriminator: LendingRateType.lendingRateType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[LendingRateType](#schemalendingratetype)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» discountType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|discountType|VARIABLE|

<h2 id="tocSdepositratetype">DepositRateType</h2>

<a id="schemadepositratetype"></a>

```json
{
  "rate": "string",
  "additionalInfo": "string",
  "additionalInfoUri": "http://example.com",
  "depositRateType": "FIXED"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rate|string(rate)|true|none|The rate to be applied.|
|additionalInfo|string|false|none|Display text providing more information on the fee.|
|additionalInfoUri|string(uri)|false|none|Link to a web page with more information on this fee.|
|depositRateType|string|true|none|The type of deposit rate.|

#### Enumerated Values

|Property|Value|
|---|---|
|depositRateType|FIXED|
|depositRateType|BONUS|
|depositRateType|BUNDLE_BONUS|
|depositRateType|VARIABLE|

<h2 id="tocSfixeddepositratetype">FixedDepositRateType</h2>

<a id="schemafixeddepositratetype"></a>

```json
{
  "rate": "string",
  "additionalInfo": "string",
  "additionalInfoUri": "http://example.com",
  "depositRateType": "FIXED",
  "additionalValue": "2018-11-01T05:33:52Z",
  "discountType": "FIXED"
}

```

*Fixed rate for a period of time.*

### Properties

*allOf - discriminator: DepositRateType.depositRateType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[DepositRateType](#schemadepositratetype)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» additionalValue|string(date-time)|false|none|When the fixed rate will expire.|
|» discountType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|discountType|FIXED|

<h2 id="tocSbonusdepositratetype">BonusDepositRateType</h2>

<a id="schemabonusdepositratetype"></a>

```json
{
  "rate": "string",
  "additionalInfo": "string",
  "additionalInfoUri": "http://example.com",
  "depositRateType": "FIXED",
  "additionalValue": "string",
  "discountType": "BONUS"
}

```

*The bonus rate obtained by originating a bundle instead of a standalone product.*

### Properties

*allOf - discriminator: DepositRateType.depositRateType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[DepositRateType](#schemadepositratetype)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» additionalValue|string|false|none|The name of the bundle.|
|» discountType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|discountType|BONUS|

<h2 id="tocSvariabledepositratetype">VariableDepositRateType</h2>

<a id="schemavariabledepositratetype"></a>

```json
{
  "rate": "string",
  "additionalInfo": "string",
  "additionalInfoUri": "http://example.com",
  "depositRateType": "FIXED",
  "discountType": "VARIABLE"
}

```

*The variable base rate for the product.*

### Properties

*allOf - discriminator: DepositRateType.depositRateType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[DepositRateType](#schemadepositratetype)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» discountType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|discountType|VARIABLE|

<h2 id="tocSfeaturetype">FeatureType</h2>

<a id="schemafeaturetype"></a>

```json
{
  "featureType": "DEBIT_CARD"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|featureType|string|true|none|The type of discount|

#### Enumerated Values

|Property|Value|
|---|---|
|featureType|DEBIT_CARD|
|featureType|ADDITIONAL_CARDS|
|featureType|UNLIMITED_TXNS|
|featureType|FREE_TXNS|
|featureType|LOYALTY_PROGRAM|
|featureType|OFFSET|
|featureType|OVERDRAFT|
|featureType|REDRAW|
|featureType|INSURANCE|
|featureType|BALANCE_TRANSFERS|
|featureType|INT_FREE_DAYS|
|featureType|INT_FREE_MONTHS|
|featureType|INT_FREE_DAYS_TRNSFRS|
|featureType|INT_FREE_MONTHS_TRNSFRS|

<h2 id="tocSdebitcardfeaturetype">DebitCardFeatureType</h2>

<a id="schemadebitcardfeaturetype"></a>

```json
{
  "featureType": "DEBIT_CARD",
  "discountType": "DEBIT_CARD"
}

```

*A debit card is available for the product.*

### Properties

*allOf - discriminator: FeatureType.featureType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[FeatureType](#schemafeaturetype)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» discountType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|discountType|DEBIT_CARD|

<h2 id="tocSadditionalcardsfeaturetype">AdditionalCardsFeatureType</h2>

<a id="schemaadditionalcardsfeaturetype"></a>

```json
{
  "featureType": "DEBIT_CARD",
  "additionalValue": 0,
  "discountType": "ADDITIONAL_CARDS"
}

```

*Addtional cards can be requested.*

### Properties

*allOf - discriminator: FeatureType.featureType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[FeatureType](#schemafeaturetype)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» additionalValue|integer(int32)|true|none|The maximum number of addtional cards.|
|» discountType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|discountType|ADDITIONAL_CARDS|

<h2 id="tocSunlimitedtransactionsfeaturetype">UnlimitedTransactionsFeatureType</h2>

<a id="schemaunlimitedtransactionsfeaturetype"></a>

```json
{
  "featureType": "DEBIT_CARD",
  "discountType": "UNLIMITED_TXNS"
}

```

*Unlimited free transactions available.*

### Properties

*allOf - discriminator: FeatureType.featureType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[FeatureType](#schemafeaturetype)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» discountType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|discountType|UNLIMITED_TXNS|

<h2 id="tocSfreetransactionsfeaturetype">FreeTransactionsFeatureType</h2>

<a id="schemafreetransactionsfeaturetype"></a>

```json
{
  "featureType": "DEBIT_CARD",
  "additionalValue": 0,
  "discountType": "FREE_TXNS"
}

```

*A set number of free transactions available each month.*

### Properties

*allOf - discriminator: FeatureType.featureType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[FeatureType](#schemafeaturetype)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» additionalValue|integer(int32)|true|none|The number of free transactions.|
|» discountType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|discountType|FREE_TXNS|

<h2 id="tocSloyaltyprogramfeaturetype">LoyaltyProgramFeatureType</h2>

<a id="schemaloyaltyprogramfeaturetype"></a>

```json
{
  "featureType": "DEBIT_CARD",
  "additionalValue": "string",
  "discountType": "LOYALTY_PROGRAM"
}

```

*A points based loyalty program is available.*

### Properties

*allOf - discriminator: FeatureType.featureType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[FeatureType](#schemafeaturetype)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» additionalValue|string|true|none|The name of the loyalty program.|
|» discountType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|discountType|LOYALTY_PROGRAM|

<h2 id="tocSoffsetfeaturetype">OffsetFeatureType</h2>

<a id="schemaoffsetfeaturetype"></a>

```json
{
  "featureType": "DEBIT_CARD",
  "discountType": "OFFSET"
}

```

*An offset account can be connected to the product.*

### Properties

*allOf - discriminator: FeatureType.featureType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[FeatureType](#schemafeaturetype)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» discountType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|discountType|OFFSET|

<h2 id="tocSoverdraftfeaturetype">OverdraftFeatureType</h2>

<a id="schemaoverdraftfeaturetype"></a>

```json
{
  "featureType": "DEBIT_CARD",
  "discountType": "OVERDRAFT"
}

```

*An overdraft can be applied for.*

### Properties

*allOf - discriminator: FeatureType.featureType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[FeatureType](#schemafeaturetype)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» discountType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|discountType|OVERDRAFT|

<h2 id="tocSredrawfeaturetype">RedrawFeatureType</h2>

<a id="schemaredrawfeaturetype"></a>

```json
{
  "featureType": "DEBIT_CARD",
  "discountType": "REDRAW"
}

```

*Redraw of repaid principal is available.*

### Properties

*allOf - discriminator: FeatureType.featureType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[FeatureType](#schemafeaturetype)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» discountType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|discountType|REDRAW|

<h2 id="tocSinsurancefeaturetype">InsuranceFeatureType</h2>

<a id="schemainsurancefeaturetype"></a>

```json
{
  "featureType": "DEBIT_CARD",
  "additionalValue": "string",
  "discountType": "INSURANCE"
}

```

*Insurance is provided as an additional feature of the product.*

### Properties

*allOf - discriminator: FeatureType.featureType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[FeatureType](#schemafeaturetype)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» additionalValue|string|true|none|Description of the type of insurance.|
|» discountType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|discountType|INSURANCE|

<h2 id="tocSbalancetransfersfeaturetype">BalanceTransfersFeatureType</h2>

<a id="schemabalancetransfersfeaturetype"></a>

```json
{
  "featureType": "DEBIT_CARD",
  "discountType": "BALANCE_TRANSFERS"
}

```

*Balance transfers can be made from the account (eg. for credit cards).*

### Properties

*allOf - discriminator: FeatureType.featureType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[FeatureType](#schemafeaturetype)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» discountType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|discountType|BALANCE_TRANSFERS|

<h2 id="tocSintfreedaysfeaturetype">IntFreeDaysFeatureType</h2>

<a id="schemaintfreedaysfeaturetype"></a>

```json
{
  "featureType": "DEBIT_CARD",
  "additionalValue": 0,
  "discountType": "INT_FREE_DAYS"
}

```

*Interest free period for purchases.*

### Properties

*allOf - discriminator: FeatureType.featureType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[FeatureType](#schemafeaturetype)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» additionalValue|integer(int32)|true|none|Days of interest free period.|
|» discountType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|discountType|INT_FREE_DAYS|

<h2 id="tocSintfreemonthsfeaturetype">IntFreeMonthsFeatureType</h2>

<a id="schemaintfreemonthsfeaturetype"></a>

```json
{
  "featureType": "DEBIT_CARD",
  "additionalValue": 0,
  "discountType": "INT_FREE_MONTHS"
}

```

*Interest free period for purchases.*

### Properties

*allOf - discriminator: FeatureType.featureType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[FeatureType](#schemafeaturetype)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» additionalValue|integer(int32)|true|none|Month of interest free period.|
|» discountType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|discountType|INT_FREE_MONTHS|

<h2 id="tocSintfreedaystransfersfeaturetype">IntFreeDaysTransfersFeatureType</h2>

<a id="schemaintfreedaystransfersfeaturetype"></a>

```json
{
  "featureType": "DEBIT_CARD",
  "additionalValue": 0,
  "discountType": "INT_FREE_DAYS_TRNSFRS"
}

```

*Interest free period for balance transfers.*

### Properties

*allOf - discriminator: FeatureType.featureType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[FeatureType](#schemafeaturetype)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» additionalValue|integer(int32)|true|none|Days of interest free period.|
|» discountType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|discountType|INT_FREE_DAYS_TRNSFRS|

<h2 id="tocSintfreemonthstransfersfeaturetype">IntFreeMonthsTransfersFeatureType</h2>

<a id="schemaintfreemonthstransfersfeaturetype"></a>

```json
{
  "featureType": "DEBIT_CARD",
  "additionalValue": 0,
  "discountType": "INT_FREE_MONTHS_TRNSFRS"
}

```

*Interest free period for balance transfers.*

### Properties

*allOf - discriminator: FeatureType.featureType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[FeatureType](#schemafeaturetype)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» additionalValue|integer(int32)|true|none|Months of interest free period.|
|» discountType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|discountType|INT_FREE_MONTHS_TRNSFRS|

<h2 id="tocSfeetype">FeeType</h2>

<a id="schemafeetype"></a>

```json
{
  "name": "string",
  "feeType": "PERIODIC",
  "amount": 0,
  "additionalInfo": "string",
  "additionalInfoUri": "http://example.com",
  "discounts": [
    {
      "discountType": "BALANCE",
      "additionalValue": 0
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Name of the fee.|
|feeType|string|true|none|The type of fee,|
|amount|number|true|none|Amound charged for the fee assumiung to be in AUD.|
|additionalInfo|string|true|none|Display text providing more information on the fee.|
|additionalInfoUri|string(uri)|true|none|Link to a web page with more information on this fee.|
|discounts|[oneOf]|false|none|none|

*oneOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[BalanceDiscountType](#schemabalancediscounttype)|false|none|Discount on a fee for maintaining a set balance.  As the discount applies to a fee the period is the same as for the fee.|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[DepositsDiscountType](#schemadepositsdiscounttype)|false|none|Discount for depositing a certain amount of money in a period.  As the discount applies to a fee the period is the same as for the fee.|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[PaymentsDiscountType](#schemapaymentsdiscounttype)|false|none|Discount for depositing a certain amount of money in a period.  As the discount applies to a fee the period is the same as for the fee.|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[BundleDiscountType](#schemabundlediscounttype)|false|none|Discount for originating a bundle instead of a standalone product.|

#### Enumerated Values

|Property|Value|
|---|---|
|feeType|PERIODIC|
|feeType|TRANSACTION|
|feeType|EXIT|
|feeType|OVERDRAW|
|feeType|MIN_BALANCE|
|feeType|REDRAW|
|feeType|OTHER_EVENT|

<h2 id="tocSdiscounttype">DiscountType</h2>

<a id="schemadiscounttype"></a>

```json
{
  "discountType": "BALANCE"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|discountType|string|true|none|The type of discount|

#### Enumerated Values

|Property|Value|
|---|---|
|discountType|BALANCE|
|discountType|DEPOSITS|
|discountType|PAYMENTS|
|discountType|BUNDLE|

<h2 id="tocSbalancediscounttype">BalanceDiscountType</h2>

<a id="schemabalancediscounttype"></a>

```json
{
  "discountType": "BALANCE",
  "additionalValue": 0
}

```

*Discount on a fee for maintaining a set balance.  As the discount applies to a fee the period is the same as for the fee.*

### Properties

*allOf - discriminator: DiscountType.discountType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[DiscountType](#schemadiscounttype)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» additionalValue|number|true|none|The minimum balance.|
|» discountType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|discountType|BALANCE|

<h2 id="tocSdepositsdiscounttype">DepositsDiscountType</h2>

<a id="schemadepositsdiscounttype"></a>

```json
{
  "discountType": "DEPOSITS",
  "additionalValue": 0
}

```

*Discount for depositing a certain amount of money in a period.  As the discount applies to a fee the period is the same as for the fee.*

### Properties

*allOf - discriminator: DiscountType.discountType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[DiscountType](#schemadiscounttype)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» additionalValue|number|true|none|The minimum deposit amount.|
|» discountType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|discountType|DEPOSITS|

<h2 id="tocSpaymentsdiscounttype">PaymentsDiscountType</h2>

<a id="schemapaymentsdiscounttype"></a>

```json
{
  "discountType": "PAYMENTS",
  "additionalValue": 0
}

```

*Discount for depositing a certain amount of money in a period.  As the discount applies to a fee the period is the same as for the fee.*

### Properties

*allOf - discriminator: DiscountType.discountType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[DiscountType](#schemadiscounttype)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» additionalValue|number|true|none|The payment threshold amount.|
|» discountType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|discountType|PAYMENTS|

<h2 id="tocSbundlediscounttype">BundleDiscountType</h2>

<a id="schemabundlediscounttype"></a>

```json
{
  "discountType": "BUNDLE",
  "additionalValue": "string"
}

```

*Discount for originating a bundle instead of a standalone product.*

### Properties

*allOf - discriminator: DiscountType.discountType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[DiscountType](#schemadiscounttype)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» additionalValue|string|true|none|The name of the application bundle.|
|» discountType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|discountType|BUNDLE|

<h2 id="tocSperiodicfeetype">PeriodicFeeType</h2>

<a id="schemaperiodicfeetype"></a>

```json
{
  "name": "string",
  "feeType": "PERIODIC",
  "amount": 0,
  "additionalInfo": "string",
  "additionalInfoUri": "http://example.com",
  "discounts": [
    {
      "discountType": "BALANCE",
      "additionalValue": 0
    }
  ],
  "additionalValue": "DAILY"
}

```

*A periodic fee such as a monthly account servicing fee.*

### Properties

*allOf - discriminator: FeeType.feeType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[FeeType](#schemafeetype)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» additionalValue|[ChargePeriod](#schemachargeperiod)|true|none|The period of charge|
|» feeType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|feeType|PERIODIC|

<h2 id="tocStransactionfeetype">TransactionFeeType</h2>

<a id="schematransactionfeetype"></a>

```json
{
  "name": "string",
  "feeType": "TRANSACTION",
  "amount": 0,
  "additionalInfo": "string",
  "additionalInfoUri": "http://example.com",
  "discounts": [
    {
      "discountType": "BALANCE",
      "additionalValue": 0
    }
  ],
  "additionalValue": "string"
}

```

*A fee for each transaction (above any free transactions in a period)*

### Properties

*allOf - discriminator: FeeType.feeType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[FeeType](#schemafeetype)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» additionalValue|string|true|none|A description of the type of transaction|
|» feeType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|feeType|TRANSACTION|

<h2 id="tocSexitfeetype">ExitFeeType</h2>

<a id="schemaexitfeetype"></a>

```json
{
  "name": "string",
  "feeType": "EXIT",
  "amount": 0,
  "additionalInfo": "string",
  "additionalInfoUri": "http://example.com",
  "discounts": [
    {
      "discountType": "BALANCE",
      "additionalValue": 0
    }
  ]
}

```

*A fee for closing the product*

### Properties

*allOf - discriminator: FeeType.feeType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[FeeType](#schemafeetype)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» feeType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|feeType|EXIT|

<h2 id="tocSoverdrawfeetype">OverdrawFeeType</h2>

<a id="schemaoverdrawfeetype"></a>

```json
{
  "name": "string",
  "feeType": "OVERDRAW",
  "amount": 0,
  "additionalInfo": "string",
  "additionalInfoUri": "http://example.com",
  "discounts": [
    {
      "discountType": "BALANCE",
      "additionalValue": 0
    }
  ]
}

```

*A fee for overdrawing the account*

### Properties

*allOf - discriminator: FeeType.feeType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[FeeType](#schemafeetype)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» feeType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|feeType|OVERDRAW|

<h2 id="tocSminbalancefeetype">MinBalanceFeeType</h2>

<a id="schemaminbalancefeetype"></a>

```json
{
  "name": "string",
  "feeType": "MIN_BALANCE",
  "amount": 0,
  "additionalInfo": "string",
  "additionalInfoUri": "http://example.com",
  "discounts": [
    {
      "discountType": "BALANCE",
      "additionalValue": 0
    }
  ],
  "additionalValue": "DAILY"
}

```

*A periodic fee such as a monthly account servicing fee.*

### Properties

*allOf - discriminator: FeeType.feeType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[FeeType](#schemafeetype)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» additionalValue|[ChargePeriod](#schemachargeperiod)|true|none|The period of charge|
|» feeType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|feeType|MIN_BALANCE|

<h2 id="tocSredrawfeetype">RedrawFeeType</h2>

<a id="schemaredrawfeetype"></a>

```json
{
  "name": "string",
  "feeType": "REDRAW",
  "amount": 0,
  "additionalInfo": "string",
  "additionalInfoUri": "http://example.com",
  "discounts": [
    {
      "discountType": "BALANCE",
      "additionalValue": 0
    }
  ]
}

```

*A fee for performing a redraw transaction.*

### Properties

*allOf - discriminator: FeeType.feeType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[FeeType](#schemafeetype)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» feeType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|feeType|REDRAW|

<h2 id="tocSothereventfeetype">OtherEventFeeType</h2>

<a id="schemaothereventfeetype"></a>

```json
{
  "name": "string",
  "feeType": "OTHER_EVENT",
  "amount": 0,
  "additionalInfo": "string",
  "additionalInfoUri": "http://example.com",
  "discounts": [
    {
      "discountType": "BALANCE",
      "additionalValue": 0
    }
  ],
  "additionalValue": "string"
}

```

*A fee for another type of event not already specified in the existing set.*

### Properties

*allOf - discriminator: FeeType.feeType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[FeeType](#schemafeetype)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» additionalValue|string|true|none|A text description of the event.|
|» feeType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|feeType|OTHER_EVENT|

<h2 id="tocSchargeperiod">ChargePeriod</h2>

<a id="schemachargeperiod"></a>

```json
"DAILY"

```

*The period of charge*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|The period of charge|

#### Enumerated Values

|Property|Value|
|---|---|
|*anonymous*|DAILY|
|*anonymous*|WEEKLY|
|*anonymous*|MONTHLY|
|*anonymous*|QUARTERLY|
|*anonymous*|SEMI_ANNUALLY|
|*anonymous*|ANNUALLY|

<h2 id="tocSaccounttype">AccountType</h2>

<a id="schemaaccounttype"></a>

```json
{
  "accountType": "termDeposit"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountType|string|true|none|The specfic account type.|

#### Enumerated Values

|Property|Value|
|---|---|
|accountType|termDeposit|
|accountType|creditCard|
|accountType|loan|

<h2 id="tocStermdepositaccounttype">TermDepositAccountType</h2>

<a id="schematermdepositaccounttype"></a>

```json
{
  "accountType": "termDeposit",
  "depositDate": "2018-11-01",
  "maturityDate": "2018-11-01",
  "maturityAmount": 0
}

```

### Properties

*allOf - discriminator: AccountType.accountType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[AccountType](#schemaaccounttype)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» depositDate|string(date)|true|none|The date of the original deposit.|
|» maturityDate|string(date)|true|none|Maturity date for the term deposit.|
|» maturityAmount|number|true|none|Amount to be paid upon maturity|
|» accountType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|accountType|termDeposit|

<h2 id="tocScreditcardaccounttype">CreditCardAccountType</h2>

<a id="schemacreditcardaccounttype"></a>

```json
{
  "accountType": "creditCard",
  "minPaymentAmount": 0,
  "minPaymentDate": "2018-11-01"
}

```

### Properties

*allOf - discriminator: AccountType.accountType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[AccountType](#schemaaccounttype)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» minPaymentAmount|number|true|none|Minimum payment amount for the card.|
|» minPaymentDate|string(date)|true|none|Date that a minimum payment for the card is due.|
|» accountType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|accountType|creditCard|

<h2 id="tocSloanaccounttype">LoanAccountType</h2>

<a id="schemaloanaccounttype"></a>

```json
{
  "accountType": "loan",
  "loanEndDate": "2018-11-01",
  "nextInstalmentDate": "2018-11-01",
  "minInstalmentAmount": 0,
  "maxRedraw": 0,
  "minRedraw": 0,
  "offsetAccountId": "string"
}

```

### Properties

*allOf - discriminator: AccountType.accountType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[AccountType](#schemaaccounttype)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» loanEndDate|string(date)|true|none|Date that the loan is due to be repaid in full.|
|» nextInstalmentDate|string(date)|true|none|Next date that an installment is required.|
|» minInstalmentAmount|number|true|none|Minimum Amount of next instalment.|
|» maxRedraw|number|false|none|Maximum amount of funds that can be redrawn.  If not present redraw is not available even if the feature exists for the account.|
|» minRedraw|number(date)|false|none|none|
|» offsetAccountId|any|false|none|none|

*allOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»» *anonymous*|[AccountId](#schemaaccountid)|false|none|A unique ID of the account adhering to the standards for ID permanence.|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»» *anonymous*|any|false|none|The accoundId for an offset account attached to this loan.|

*continued*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» accountType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|accountType|loan|

<h2 id="tocSmaskedaccountnumber">MaskedAccountNumber</h2>

<a id="schemamaskedaccountnumber"></a>

```json
"string"

```

*A masked version of the account. Whether BSB/Account Number, Credit Card PAN or another number this should be formatted with each digit masked and the last three digits unmasked.*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|A masked version of the account. Whether BSB/Account Number, Credit Card PAN or another number this should be formatted with each digit masked and the last three digits unmasked.|

<h2 id="tocSaccountid">AccountId</h2>

<a id="schemaaccountid"></a>

```json
"string"

```

*A unique ID of the account adhering to the standards for ID permanence.*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string(ASCII)|false|none|A unique ID of the account adhering to the standards for ID permanence.|

<h2 id="tocSaccountbalance">AccountBalance</h2>

<a id="schemaaccountbalance"></a>

```json
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

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|[AccountId](#schemaaccountid)|true|none|A unique ID of the account adhering to the standards for ID permanence.|
|balance|any|true|none|none|

*oneOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[DepositBalanceType](#schemadepositbalancetype)|false|none|none|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[LendingBalanceType](#schemalendingbalancetype)|false|none|none|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[MultiCurrencyPursesType](#schemamulticurrencypursestype)|false|none|none|

<h2 id="tocSbalancetype">BalanceType</h2>

<a id="schemabalancetype"></a>

```json
{
  "balanceType": "deposits"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|balanceType|string|true|none|The balance type object provided for the account.|

#### Enumerated Values

|Property|Value|
|---|---|
|balanceType|deposits|
|balanceType|lending|
|balanceType|purses|

<h2 id="tocSdepositbalancetype">DepositBalanceType</h2>

<a id="schemadepositbalancetype"></a>

```json
{
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

```

### Properties

*allOf - discriminator: BalanceType.balanceType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[BalanceType](#schemabalancetype)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» currentBalance|[CurrencyAmount](#schemacurrencyamount)|true|none|The current balance of the account at this time. Should align to the current balance available via other channels such as ATM balance enquiry or Internet Banking.|
|» availableBalance|[CurrencyAmount](#schemacurrencyamount)|true|none|Object represent the current balance for the account.  Assumed to be positive or zero.|
|» balanceType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|balanceType|deposits|

<h2 id="tocSlendingbalancetype">LendingBalanceType</h2>

<a id="schemalendingbalancetype"></a>

```json
{
  "balanceType": "lending",
  "accountBalance": {
    "amount": 300.56,
    "currency": "AUD"
  },
  "availableBalance": {
    "amount": 300.56,
    "currency": "AUD"
  },
  "creditLimit": {
    "amount": 300.56,
    "currency": "AUD"
  },
  "amortisedLimit": {
    "amount": 300.56,
    "currency": "AUD"
  }
}

```

### Properties

*allOf - discriminator: BalanceType.balanceType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[BalanceType](#schemabalancetype)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» accountBalance|[CurrencyAmount](#schemacurrencyamount)|true|none|Object represent the balance for the loan, line of credit or credit card.|
|» availableBalance|[CurrencyAmount](#schemacurrencyamount)|true|none|The available balance for the account. Assumed to be positive or zero.|
|» creditLimit|[CurrencyAmount](#schemacurrencyamount)|true|none|The maximum amount of credit that is avaible for this account. Assumed to be positive or zero.|
|» amortisedLimit|[CurrencyAmount](#schemacurrencyamount)|false|none|The available limit amortised according to payement schedule.|
|» balanceType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|balanceType|lending|

<h2 id="tocSmulticurrencypursestype">MultiCurrencyPursesType</h2>

<a id="schemamulticurrencypursestype"></a>

```json
{
  "balanceType": "purses",
  "purses": [
    {
      "amount": 300.56,
      "currency": "AUD"
    }
  ]
}

```

### Properties

*allOf - discriminator: BalanceType.balanceType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[BalanceType](#schemabalancetype)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» purses|[[CurrencyAmount](#schemacurrencyamount)]|true|none|List of Purses.|
|» balanceType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|balanceType|purses|

<h2 id="tocSproductcategory">ProductCategory</h2>

<a id="schemaproductcategory"></a>

```json
"PERS_AT_CALL_DEPOSITS"

```

*The the product category an account aligns withs.*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|The the product category an account aligns withs.|

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

<h2 id="tocScurrencyamount">CurrencyAmount</h2>

<a id="schemacurrencyamount"></a>

```json
{
  "amount": 300.56,
  "currency": "AUD"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|number|true|none|none|
|currency|string|false|none|none|

<h2 id="tocSapiresponse">APIResponse</h2>

<a id="schemaapiresponse"></a>

```json
{
  "links": {
    "self": "http://example.com",
    "first": "http://example.com",
    "prev": "http://example.com",
    "next": "http://example.com",
    "last": "http://example.com"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|links|[Links](#schemalinks)|true|none|none|

<h2 id="tocSapiresponsemeta">APIResponseMeta</h2>

<a id="schemaapiresponsemeta"></a>

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
  }
}

```

### Properties

*allOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[APIResponse](#schemaapiresponse)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» meta|[Meta](#schemameta)|true|none|none|

<h2 id="tocSmeta">Meta</h2>

<a id="schemameta"></a>

```json
{
  "totalRecords": 6,
  "totalPages": 2
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|totalRecords|integer(int32)|true|none|The total number of records in the  full set.|
|totalPages|integer(int32)|true|none|The total number of pages in the  full set.|

<h2 id="tocSlinks">Links</h2>

<a id="schemalinks"></a>

```json
{
  "self": "http://example.com",
  "first": "http://example.com",
  "prev": "http://example.com",
  "next": "http://example.com",
  "last": "http://example.com"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|self|string(uri)|true|none|Fully qualified link  to this  API  call.|
|first|string(uri)|false|none|URI to  the  first  page of this set. Mandatory  if this  response is  not  the  first  page.|
|prev|string(uri)|false|none|URI to  the  previous page of this set. Mandatory if this response is not the first page.|
|next|string(uri)|false|none|URI to the next page of this set. Mandatory if this response is not the last page.|
|last|string(uri)|false|none|URI to the last page of this set.  Mandatory if this response is not the last page.|

<h2 id="tocSerror">Error</h2>

<a id="schemaerror"></a>

```json
{
  "code": "string",
  "title": "string",
  "detail": "string"
}

```

*This is the standard representaton of an error.*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|true|none|none|
|title|string|true|none|none|
|detail|string|true|none|none|

