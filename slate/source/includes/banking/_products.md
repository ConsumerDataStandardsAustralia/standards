## Get Products

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
|product-category|query|[ProductCategory](#schemaproductcategory)|false|Used to filter results on the productCategory field in the account end points. Any one of the valid values for this field can be supplied. If absent then all accounts returned.|
|effective|query|boolean|false|If true then only include products that are effective right now and exclude products that may be available at a future time.  If false only include products effective in the future. If absent defaults to include all products.|
|updated-since|query|[DateTimeString](#common-field-types)|false|Only include products that have been updated after the specified date and time.  If absent defaults to include all products.|
|page|query|integer(int32)|false|Page  of results to  request  (standard  pagination).|
|page-size|query|integer(int32)|false|Page  size to  request. Default is  25 (standard pagination).|


> Example responses

> 200 Response

```json
{
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

<h3 id="getproducts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[ProductsResponse](#schemaproductsresponse)|

<aside class="notice">
This operation can be performed without authentication
</aside>

<h3 id="tocSproductsresponse">ProductsResponse</h3>

<a id="schemaproductsresponse"></a>


### Properties

*allOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» data|object|true|none|none|
|»» products|[[Product](#schemaproduct)]|true|none|The list of products returned.|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[PaginatedResponse](#paginatedresponse)|false|none|none|


## Get Product Detail

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

> Example responses

> 200 Response

```json
{
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

<h3 id="getproduct-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[ProductResponse](#schemaproductresponse)|

<aside class="notice">
This operation can be performed without authentication
</aside>

<h3 id="tocSproductresponse">ProductResponse</h3>

<a id="schemaproductresponse"></a>


### Properties

*allOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» data|[ProductDetail](#schemaproductdetail)|true|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[PaginatedResponse](#paginatedresponse)|false|none|none|
