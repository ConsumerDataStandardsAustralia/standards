## Get Accounts

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
|product-category|query|[ProductCategory](#schemaproductcategory)|false|Used to filter results on the productCategory field in the account end points. Any one of the valid values for this field can be supplied. If absent then all accounts returned.|
|open-status|query|string|false|Used to filter results according to open/closed status. Values can be OPEN, CLOSED or ALL. If absent then ALL is assumed.|
|page|query|integer(int32)|false|Page  of results to  request  (standard  pagination).|
|page-size|query|integer(int32)|false|Page  size to  request. Default is  25 (standard pagination).|

#### Enumerated Values

|Parameter|Value|
|---|---|
|open-status|OPEN|
|open-status|CLOSED|
|open-status|ALL|

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
  },
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

<h3 id="getaccounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[AccountsResponse](#schemaaccountsresponse)|

<aside class="notice">
To perform this operation, you must be authenticated by means of one of the following methods:
openId ( Scopes: bank_basic_accounts )
</aside>

<h3 id="tocSaccountsresponse">AccountsResponse</h3>

<a id="schemaaccountsresponse"></a>


### Properties

*allOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» data|object|true|none|none|
|»» accounts|[[Account](#schemaaccount)]|true|none|List of Accounts.|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[PaginatedResponse](#paginatedresponse)|false|none|none|


## Get Account Detail

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

> Example responses

> 200 Response

```json
{
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
  },
  "links": {
    "self": "http://example.com"
  },
  "meta": {
  }
}
```

<h3 id="getaccount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[AccountResponse](#schemaaccountresponse)|

<aside class="notice">
To perform this operation, you must be authenticated by means of one of the following methods:
openId ( Scopes: bank_detailed_accounts )
</aside>

<h3 id="tocSaccountresponse">AccountResponse</h3>

<a id="schemaaccountresponse"></a>


### Properties

*allOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» data|[AccountDetail](#schemaaccountdetail)|true|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[StandardResponse](#standardresponse)|false|none|none|


## Get Bulk Balances

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
|page|query|integer(int32)|false|Page  of results to  request  (standard  pagination).|
|page-size|query|integer(int32)|false|Page  size to  request. Default is  25 (standard pagination).|

> Example responses

> 200 Response

```json
{
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
  },
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

<aside class="notice">
To perform this operation, you must be authenticated by means of one of the following methods:
openId ( Scopes: bank_basic_accounts )
</aside>

## Get Balances For Specific Accounts

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
|body|body|[accountIds](#schemaaccountids)|true|Request for an array of specific accountIds.|
|» data|body|[string]|true|Array of  accountIds.|


> Example responses

> 200 Response

```json
{
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
  },
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

<aside class="notice">
To perform this operation, you must be authenticated by means of one of the following methods:
openId ( Scopes: bank_basic_accounts )
</aside>

<h3 id="tocSaccountsbalancesresponse">AccountsBalancesResponse</h3>

<a id="schemaaccountsbalancesresponse"></a>


### Properties

*allOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» data|object|true|none|none|
|»» balances|[[AccountBalance](#schemaaccountbalance)]|true|none|List of Balances.|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[PaginatedResponse](#paginatedresponse)|false|none|none|
