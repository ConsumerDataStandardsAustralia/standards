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

`GET /banking/accounts`

*Account List Data.*

Obtain list of accounts.

<h3 id="getaccounts-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|product-category|query|[ProductCategory](#schemaproductcategory)|false|Used to filter results on the productCategory field in the account end points. Any one of the valid values for this field can be supplied. If absent then all accounts returned.|
|open-status|query|string|false|Used to filter results according to open/closed status. Values can be OPEN, CLOSED or ALL. If absent then ALL is assumed.|
|page|query|[PositiveInteger](#common-field-types)|false|Page  of results to  request  (standard  pagination).|
|page-size|query|[PositiveInteger](#common-field-types)|false|Page  size to  request. Default is  25 (standard pagination).|

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
        "productType": "string",
        "balance$type": "deposits",
        "deposits": {
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
|»» accounts|[[Account](#schemaaccount)]|true|none|The list of accounts returned. If the filter results in an empty set then this array may have no records.|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[PaginatedResponse](#paginatedresponse)|false|none|none|

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

`GET /banking/accounts/balances`

*Multiple Balances Data.*

Obtain balances for multiple, filtered accounts.

<h3 id="getaccountsbalances-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|product-category|query|[ProductCategory](#schemaproductcategory)|false|Used to filter results on the productCategory field in the account end points. Any one of the valid values for this field can be supplied. If absent then all accounts returned.|
|page|query|[PositiveInteger](#common-field-types)|false|Page  of results to  request  (standard  pagination).|
|page-size|query|[PositiveInteger](#common-field-types)|false|Page  size to  request. Default is  25 (standard pagination).|

> Example responses

> 200 Response

```json
{
  "data": {
    "balances": [
      {
        "accountId": "string",
        "$balance$type": "deposits",
        "deposits": {
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

`POST /banking/accounts/balances`

*Specific Balances Data.*

Obtain balances for a specified list of account Ids.

> Body parameter

```json
{
  "data": {
    "accountIds": [
      "string"
    ]
  },
  "meta": {
  }
}
```

<h3>Request Schema</h3>

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|true|none||
|» accountIds|[[AccountId](#schemaaccountid)]|true|none|Array of accountIds requested|
|meta|object|true|none||


> Example responses

> 200 Response

```json
{
  "data": {
    "balances": [
      {
        "accountId": "string",
        "balance$type" : "deposits",
        "deposits": {
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
|errors|[[Error](#error)]|false|none|List of Errors.|

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
