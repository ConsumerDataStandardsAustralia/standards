## Get Direct Debits For Account

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

`GET /banking/accounts/{accountId}/direct-debits`

*Account Specific Direct Debit Authorisations.*

Obtain direct debit authorisations for a specific accounnt list of accounts.

<h3 id="getaccountdirectdebits-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|[AccountId](#schemaaccountid)|true|ID of the Account.  Must have previously been returned from one of the account list end points.|
|page|query|[PositiveInteger](#common-field-types)|false|Page  of results to  request  (standard  pagination).|
|page-size|query|[PositiveInteger](#common-field-types)|false|Page  size to  request. Default is  25 (standard pagination).|

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
          "financialInsitution": "string",
          "abn": "string",
          "acn": "string"
        },
        "lastDebitDateTime": "2018-11-01T05:33:52Z",
        "lastDebitAmount": 300.56
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

<h3 id="getaccountdirectdebits-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[AccountDirectDebitsResponse](#schemaaccountdirectdebitsresponse)|

<aside class="notice">
To perform this operation, you must be authenticated by means of one of the following methods:
openId ( Scopes: bank_detailed_accounts )
</aside>

## Get Bulk Direct Debits

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

`GET /banking/accounts/direct-debits`

*Bulk Direct Debit Authorisations Data.*

Obtain direct debit authorisations for multiple, filtered accounts.

<h3 id="getaccountsdirectdebits-parameters">Parameters</h3>

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

<h3 id="getaccountsdirectdebits-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[AccountDirectDebitsResponse](#schemaaccountdirectdebitsresponse)|

<aside class="notice">
To perform this operation, you must be authenticated by means of one of the following methods:
openId ( Scopes: bank_detailed_accounts )
</aside>

## Get Direct Debits For Specific Accounts

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

`POST /banking/accounts/direct-debits`

*Specific Direct Debit Authorisations Data.*

Obtain direct debit authorisations for a specified list of accounts.

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

<h3 id="findspecificdirectdebits-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|[PositiveInteger](#common-field-types)|false|Page  of results to  request  (standard  pagination).|
|page-size|query|[PositiveInteger](#common-field-types)|false|Page  size to  request. Default is  25 (standard pagination).|

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
|errors|[[Error](#error)]|false|none|List of Errors.|

<aside class="notice">
To perform this operation, you must be authenticated by means of one of the following methods:
openId ( Scopes: bank_detailed_accounts )
</aside>

<h3 id="tocSaccountdirectdebitsresponse">AccountDirectDebitsResponse</h3>

<a id="schemaaccountdirectdebitsresponse"></a>



### Properties

*allOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» data|object|true|none|none|
|»» directDebitAuthorisations|[[AccountDirectDebit](#schemaaccountdirectdebit)]|true|none|The list of authorisations returned.|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[PaginatedResponse](#paginatedresponse)|false|none|none|
