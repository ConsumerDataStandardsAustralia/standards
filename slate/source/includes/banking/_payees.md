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

`GET /banking/payees`

*Payee Data.*

Obtain a list of pre-registered payees.

<h3 id="getpayees-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|type|query|string|false|Filter on type payee. If absent the assumed value is ALL.|
|page|query|[PositiveInteger](#common-field-types)|false|Page  of results to  request  (standard  pagination).|
|page-size|query|[PositiveInteger](#common-field-types)|false|Page  size to  request. Default is  25 (standard pagination).|

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
openId ( Scopes: bank_basic_accounts )
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

`GET /banking/payees/{payeeId}`

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



<h3 id="tocSpayeeid">PayeeId</h3>

<a id="schemapayeeid"></a>

```json
"string"

```

*ID of the payee adhering to the rules of ID permanence.*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[ASCII String](#common-field-types)|false|none|ID of the payee adhering to the rules of ID permanence.|



<h3 id="tocSpayee">Payee</h3>

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
|type|string|true|none|The enumeration of payee types.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|DOMESTIC|
|type|INTERNATIONAL|
|type|BILLER|


<h3 id="tocSpayeedetail">PayeeDetail</h3>

<a id="schemapayeedetail"></a>

```json
{
  "payeeId": "string",
  "nickname": "string",
  "description": "string",
  "type": "DOMESTIC",
  "payee$type": "domestic",
  "domestic": {
    "payeeAccount$type": "payId",
    "payId": {
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
|payee$type|string|false|none|Type of object included that describes the payee in detail.|

*oneOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domestic|[DomesticPayeeType](#schemadomesticpayeetype)|false|none|none|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|biller|[BillerPayeeType](#schemabillerpayeetype)|false|none|none|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|international|[InternationalPayeeType](#schemainternationalpayeetype)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|payee$type|domestic|
|payee$type|biller|
|payee$type|international|


<h3 id="tocSdomesticpayeetype">DomesticPayeeType</h3>

<a id="schemadomesticpayeetype"></a>

```json
{
  "payeeAccount$type": "payId",
  "payId": {
    "name": "string",
    "identifier": "string",
    "type": "EMAIL"
  }
}

```

### Properties

*allOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» payeeAccount$type|string|true|none|Type of account object included|

*oneOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» account|object|false|none|none|
|»» accountName|string|true|none|name of the account to pay to.|
|»» bsb|string|true|none|BSB of the account to pay to.|
|»» accountNumber|string|true|none|Number of the account to pay to.|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» card|object|false|none|none|
|»» cardNumber|[MaskedPANString](#common-field-types)|true|none|Masked PAN for the card to pay to.|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» payId|object|false|none|none|
|»» name|string|true|none|The name assiged to the PayID by the owner of the PayID.|
|»» identifier|string|true|none|The identifier of the PayID.|
|»» type|string|true|none|The type of PayID.|


#### Enumerated Values

|Property|Value|
|---|---|
|payeeAccount$type|account|
|payeeAccount$type|card|
|payeeAccount$type|payId|
|type|EMAIL|
|type|MOBILE|
|type|ORG_NUMBER|
|type|ORG_NAME|


<h3 id="tocSbillerpayeetype">BillerPayeeType</h3>

<a id="schemabillerpayeetype"></a>

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
|*anonymous*|object|false|none|none|
|» billerCode|string|true|none|BPay Biller Code of the Biller.|
|» crn|string|false|none|BPay CRN of the Biller. If the contents of the CRN match the format of a Credit Card PAN then it should be masked using the rules applicable for the MaskedPANString common type|
|» billerName|string|true|none|Name of the Biller.|


<h3 id="tocSinternationalpayeetype">InternationalPayeeType</h3>

<a id="schemainternationalpayeetype"></a>

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
    "routingNumber": "string"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» beneficiaryDetails|object|true|none|none|
|»» name|string|false|none|Name of the beneficiary.|
|»» country|string|true|none|Country where the beneficiary resides.|
|»» message|string|false|none|Response message for the payment.|
|» bankDetails|object|true|none|Details on the recipient institution and account for an international payment|
|»» country|string|true|none|Country of the recipient institution.|
|»» accountNumber|string|true|none|Accont targeted for payment.|
|»» bankAddress|object|false|none|none|
|»»» name|string|true|none|Name of the recipient bank.|
|»»» address|string|true|none|Address of the recipient bank.|
|»» beneficiaryBankBIC|string|false|none|Swift bank code.|
|»» fedWireNumber|string|false|none|Number for Fedwire payment (Federal Reserve Wire Network).|
|»» sortCode|string|false|none|Sort code used for account idenfitication in some jurisdictions..|
|»» chipNumber|string|false|none|Number for the Clearing House Interbank Payments system.|
|»» routingNumber|string|false|none|International bank routing number.|
