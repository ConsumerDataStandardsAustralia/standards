## Get Customer

<a id="opIdgetCustomer"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://myserver.com/cds-au/common/v1/customer \
  -H 'Accept: application/json' \
  -H 'x-v: 1' \
  -H 'x-min-v: 1' \
  -H 'x-<<PID>>-Id: string' \
  -H 'Authorization: Bearer {access-token}'

```

```javascript
var headers = {
  'Accept':'application/json',
  'x-v':'1',
  'x-min-v':'1',
  'x-<<PID>>-Id':'string',
  'Authorization':'Bearer {access-token}'

};

$.ajax({
  url: 'https://myserver.com/cds-au/common/v1/customer',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`GET /common/customer`

*Basic Customer Data.*

Obtain basic information on the customer that has authorised the current session.

> Example responses

> 200 Response

```json
{
  "data": {
    "customer$type": "person",
    "person": {
      "customerType": "person",
      "lastUpdateTime": "2018-11-01T05:32:18Z",
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
      "lastUpdateTime": "2018-11-01T05:32:18Z",
      "agentFirstName": "string",
      "agentLastName": "string",
      "agentRole": "Unspecified",
      "businessName": "string",
      "legalName": "string",
      "shortName": "string",
      "abn": "string",
      "acn": "string",
      "isACNRegistered": true,
      "industryCode": "string",
      "organisationType": "SOLE_TRADER",
      "registeredCountry": "AUS",
      "establishmentDate": "string"
    }
  },
  "links": {
    "self": "http://example.com"
  },
  "meta": {
  }
}
```

<h3 id="getcustomer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[CustomerResponse](#schemacustomerresponse)|

<aside class="notice">
To perform this operation, you must be authenticated by means of one of the following methods:
openId ( Scopes: common_basic_customer )
</aside>

<h3 id="tocScustomerresponse">CustomerResponse</h3>

<a id="schemacustomerresponse"></a>

### Properties

*allOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» data|Object|true|none|none|
|»» customer$type|string|true|none|The type of the customer.  Determines the main object returned|
|»» person|[Person](#schemaperson)|false|none|none|
|»» organisation|[Organisation](#schemaorganisation)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[StandardResponse](#standardresponse)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|customer$type|person|
|customer$type|organisation|
