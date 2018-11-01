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
|x-v|header|integer(int32)|true|Version of the API end point requested by the client. Must be set to a positive integer. If the version(s) requested is not supported then the provider should respond with a `406 Not Acceptable`.|
|x-min-v|header|integer(int32)|false|Minimum version of the API end point requested by the client. Must be set to a positive integer if provided. The provider should respond with the highest supported version between `x-min-v` and `x-v`.|
|x-<<PID>>-Id|header|string|false|A provider specific version of extension fields. Should not be used in conjunction with `x-min-v`.|
|x-Correlation-Id|header|string|false|The version of the API end point that the provider has responded with.|
|product-category|query|[ProductCategory](#schemaproductcategory)|false|Used to filter results on the productCategory field in the account end points. Any one of the valid values for this field can be supplied. If absent then all accounts returned.|
|effective|query|boolean|false|If true then only include products that are effective right now and exclude products that may be available at a future time.  If false only include products effective in the future. If absent defaults to include all products.|
|updated-since|query|[DateTimeString](#common-field-types)|false|Only include products that have been updated after the specified date and time.  If absent defaults to include all products.|
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

<aside class="notice">
This operation can be performed without authentication
</aside>

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

<aside class="notice">
This operation can be performed without authentication
</aside>
