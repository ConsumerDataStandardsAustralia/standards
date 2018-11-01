## Get Payees

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
|type|query|[PayeeTypeEnum](#schemapayeetypeenum)|false|Filter on type payee.|
|page|query|integer(int32)|false|Page  of results to  request  (standard  pagination).|
|page-size|query|integer(int32)|false|Page  size to  request. Default is  25 (standard pagination).|

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
  "data": {
    "payees": [
      {
        "payeeId": "string",
        "nickname": "string",
        "description": "string",
        "type": "DOMESTIC"
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

<h3 id="getpayees-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[PayeesResponse](#schemapayeesresponse)|

<aside class="notice">
To perform this operation, you must be authenticated by means of one of the following methods:
openId ( Scopes: bank_payees )
</aside>

<h3 id="tocSpayeesresponse">PayeesResponse</h3>

<a id="schemapayeesresponse"></a>



### Properties

*allOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» data|object|true|none|none|
|»» payees|[[Payee](#schemapayee)]|true|none|The list of payyees returned.|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[PaginatedResponse](#paginatedresponse)|false|none|none|



## Get Payee Detail

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

> Example responses

> 200 Response

```json
{
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
  },
  "links": {
    "self": "http://example.com",
  },
  "meta": {
  }
}
```

<h3 id="getpayee-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[PayeeResponse](#schemapayeeresponse)|

<aside class="notice">
To perform this operation, you must be authenticated by means of one of the following methods:
openId ( Scopes: bank_payees )
</aside>

<h3 id="tocSpayeeresponse">PayeeResponse</h3>

<a id="schemapayeeresponse"></a>



### Properties

*allOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» data|[PayeeDetail](#schemapayeedetail)|true|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[StandardResponse](#standardresponse)|false|none|none|
