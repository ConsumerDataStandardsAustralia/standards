

<!-- Endpoint tag group description -->
<!-- Banking Product endpoints -->

<h2 id="cdr-banking-api-modified-for-dp306-_get-products">Get Products</h2>
<p id="get-products" class="orig-anchor"></p>

> Code samples

```http
GET https://tls.dh.example.com/cds-au/v1/banking/products HTTP/1.1
Host: tls.dh.example.com
Accept: application/json
x-v: string
x-min-v: string
```

```javascript--nodejs
const fetch = require('node-fetch');
const headers = {
  'Accept':'application/json',
  'x-v':'string',
  'x-min-v':'string'
};

fetch('https://tls.dh.example.com/cds-au/v1/banking/products', {
  method: 'GET',
  headers: headers
}).then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

`GET /banking/products`

Obtain a list of products that are currently openly offered to the market.

Note that the results returned by this endpoint are expected to be ordered in descending order according to _lastUpdated_.

### Conventions
In the product reference payloads there are a number of recurring conventions that are explained below.

#### Arrays Of Features

In the product detail payload there are a number of arrays articulating generic features, constraints, prices, etc. The intent of these arrays is as follows:

- Each element in an array has the same structure so that clients can reliably interpret the payloads
- Each element as a type element that is an enumeration of the specific aspect of a product being described, such as types of fees.
- Each element has a field named [_additionalValue_](#productfeaturetypedoc). This is a generic field with contents that will vary based on the type of object being described. The contents of this field for the `ADDITIONAL_CARDS` feature is the number of cards allowed while the contents of this field for the `MAX_LIMIT` constraint would be the maximum credit limit allowed for the product.
- An element in these arrays of the same type may appear more than once. For instance, a product may offer two separate loyalty programs that the customer can select from. A fixed term mortgage may have different rates for different term lengths.
- An element in these arrays may contain an _additionalInfo_ and _additionalInfoUri_ field. The _additionalInfo_ field is used to provide displayable text clarifying the purpose of the element in some way when the product is presented to a customer. The _additionalInfoUri_ provides a link to externally hosted information specifically relevant to that feature of the product.
- Depending on the type of data being represented there may be additional specific fields.

#### URIs To More Information

As the complexities and nuances of a financial product can not easily be fully expressed in a data structure without a high degree of complexity it is necessary to provide additional reference information that a potential customer can access so that they are fully informed of the features and implications of the product. The payloads for product reference therefore contain numerous fields that are provided to allow the product holder to describe the product more fully using a web page hosted on their online channels.

These URIs do not need to all link to different pages. If desired, they can all link to a single hosted page and use different HTML anchors to focus on a specific topic such as eligibility or fees.

#### Linkage To Accounts
From the moment that a customer applies for a product and an account is created the account and the product that spawned it will diverge. Rates and features of the product may change and a discount may be negotiated for the account.

For this reason, while _productCategory_ is a common field between accounts and products, there is no specific ID that can be used to link an account to a product within the regime.

Similarly, many of the fields and objects in the product payload will appear in the account detail payload but the structures and semantics are not identical as one refers to a product that can potentially be originated and one refers to an account that actually has been instantiated and created along with the associated decisions inherent in that process.

#### Dates
It is expected that data consumers needing this data will call relatively frequently to ensure the data they have is representative of the current offering from a bank. To minimise the volume and frequency of these calls the ability to set a _lastUpdated_ field with the date and time of the last update to this product is included. A call for a list of products can then be filtered to only return products that have been updated since the last time that data was obtained using the _updated-since_ query parameter.

In addition, the concept of effective date and time has also been included. This allows for a product to be marked for obsolescence, or introduction, from a certain time without the need for an update to show that a product has been changed. The inclusion of these dates also removes the need to represent deleted products in the payload. Products that are no longer offered can be marked not effective for a few weeks before they are then removed from the product set as an option entirely.

Obsolete versions: [v1](../../../../includes/obsolete/get-products-v1.html), [v2](../../../../includes/obsolete/get-products-v2.html), [v3](../../../../includes/obsolete/get-products-v3.html).

<h3 id="cdr-banking-api-modified-for-dp306-_get-products_endpoint-version">Endpoint Version</h3>
|   |  |
|---|--|
|Version|**4**

<h3 id="cdr-banking-api-modified-for-dp306-_get-products_parameters">Parameters</h3>

|Name|In|Type|Required|Default|Description|
|---|---|---|---|---|---|
|effective|query|[Enum](#common-field-types)|optional|`CURRENT`|Allows for the filtering of products based on whether the current time is within the period of time defined as effective by the _effectiveFrom_ and _effectiveTo_ fields. Valid values are `CURRENT`, `FUTURE` and `ALL`. If absent defaults to `CURRENT`.|
|updated-since|query|[DateTimeString](#common-field-types)|optional||Only include products that have been updated after the specified date and time. If absent defaults to include all products.|
|brand|query|string|optional||Filter results based on a specific brand.|
|product-category|query|[BankingProductCategoryV2](#schemacdr-banking-api-modified-for-dp306-bankingproductcategoryv2)|optional||Used to filter results on the _productCategory_ field applicable to accounts. Any one of the valid values for this field can be supplied. If absent then all accounts returned.|
|page|query|[PositiveInteger](#common-field-types)|optional|`1`|Page of results to request (standard pagination).|
|page-size|query|[PositiveInteger](#common-field-types)|optional|`25`|Page size to request. Default is 25 (standard pagination).|
|x-v|header|string|mandatory||Version of the API endpoint requested by the client. Must be set to a positive integer. The endpoint should respond with the highest supported version between [_x-min-v_](#request-headers) and [_x-v_](#request-headers). If the value of [_x-min-v_](#request-headers) is equal to or higher than the value of [_x-v_](#request-headers) then the [_x-min-v_](#request-headers) header should be treated as absent. If all versions requested are not supported then the endpoint **MUST** respond with a `406 Not Acceptable`. See [HTTP Headers](#request-headers).|
|x-min-v|header|string|optional||Minimum version of the API endpoint requested by the client. Must be set to a positive integer if provided. The endpoint should respond with the highest supported version between [_x-min-v_](#request-headers) and [_x-v_](#request-headers). If all versions requested are not supported then the endpoint **MUST** respond with a `406 Not Acceptable`.|

<h4 id="cdr-banking-api-modified-for-dp306-_get-products_enumerated-values-parameters">Enumerated Values</h4>

|Parameter|Value|
|---|---|
|effective|ALL|
|effective|CURRENT|
|effective|FUTURE|
|product-category|BUSINESS_LOANS|
|product-category|BUY_NOW_PAY_LATER|
|product-category|CRED_AND_CHRG_CARDS|
|product-category|LEASES|
|product-category|MARGIN_LOANS|
|product-category|OVERDRAFTS|
|product-category|PERS_LOANS|
|product-category|REGULATED_TRUST_ACCOUNTS|
|product-category|RESIDENTIAL_MORTGAGES|
|product-category|TERM_DEPOSITS|
|product-category|TRADE_FINANCE|
|product-category|TRANS_AND_SAVINGS_ACCOUNTS|
|product-category|TRAVEL_CARDS|

> Example responses

> 200 Response

```json
{
  "data": {
    "products": [
      {
        "productId": "string",
        "effectiveFrom": "string",
        "effectiveTo": "string",
        "lastUpdated": "string",
        "productCategory": "BUSINESS_LOANS",
        "name": "string",
        "description": "string",
        "brand": "string",
        "brandName": "string",
        "applicationUri": "string",
        "isTailored": true,
        "additionalInformation": {
          "overviewUri": "string",
          "termsUri": "string",
          "eligibilityUri": "string",
          "feesAndPricingUri": "string",
          "bundleUri": "string",
          "additionalOverviewUris": [
            {
              "description": "string",
              "additionalInfoUri": "string"
            }
          ],
          "additionalTermsUris": [
            {
              "description": "string",
              "additionalInfoUri": "string"
            }
          ],
          "additionalEligibilityUris": [
            {
              "description": "string",
              "additionalInfoUri": "string"
            }
          ],
          "additionalFeesAndPricingUris": [
            {
              "description": "string",
              "additionalInfoUri": "string"
            }
          ],
          "additionalBundleUris": [
            {
              "description": "string",
              "additionalInfoUri": "string"
            }
          ]
        },
        "cardOption": {
          "cardScheme": "AMEX",
          "cardType": "CHARGE",
          "cardImages": [
            {
              "title": "string",
              "imageUri": "string"
            }
          ]
        }
      }
    ]
  },
  "links": {
    "self": "string",
    "first": "string",
    "prev": "string",
    "next": "string",
    "last": "string"
  },
  "meta": {
    "totalRecords": 0,
    "totalPages": 0
  }
}
```

<h3 id="cdr-banking-api-modified-for-dp306-_get-products_responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[ResponseBankingProductListV3](#schemacdr-banking-api-modified-for-dp306-responsebankingproductlistv3)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The following error codes **MUST** be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Missing Required Field](#error-400-field-missing)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li><li>[400 - Invalid Date](#error-400-field-invalid-date-time)</li><li>[400 - Invalid Page Size](#error-400-field-invalid-page-size)</li></ul>|[ResponseErrorListV2](#schemacdr-banking-api-modified-for-dp306-responseerrorlistv2)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|The following error codes **MUST** be supported:<br/><ul class="error-code-list"><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|[ResponseErrorListV2](#schemacdr-banking-api-modified-for-dp306-responseerrorlistv2)|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|The following error codes **MUST** be supported:<br/><ul class="error-code-list"><li>[422 - Invalid Page](#error-422-field-invalid-page)</li></ul>|[ResponseErrorListV2](#schemacdr-banking-api-modified-for-dp306-responseerrorlistv2)|

<h3 id="cdr-banking-api-modified-for-dp306-_get-products_response-headers">Response Headers</h3>

|Status|Header|Type|Required|Description|
|---|---|---|---|---|
|200|x-v|string|mandatory|The [payload version](#response-headers) that the endpoint has responded with.|

  
    <aside class="success">
This operation does not require authentication.
</aside>

  

<h2 id="cdr-banking-api-modified-for-dp306-_get-product-detail">Get Product Detail</h2>
<p id="get-product-detail" class="orig-anchor"></p>

> Code samples

```http
GET https://tls.dh.example.com/cds-au/v1/banking/products/{productId} HTTP/1.1
Host: tls.dh.example.com
Accept: application/json
x-v: string
x-min-v: string
```

```javascript--nodejs
const fetch = require('node-fetch');
const headers = {
  'Accept':'application/json',
  'x-v':'string',
  'x-min-v':'string'
};

fetch('https://tls.dh.example.com/cds-au/v1/banking/products/{productId}', {
  method: 'GET',
  headers: headers
}).then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

`GET /banking/products/{productId}`

Obtain detailed information on a single product offered openly to the market.

Obsolete versions: [v1](../../../../includes/obsolete/get-product-detail-v1.html), [v2](../../../../includes/obsolete/get-product-detail-v2.html), [v3](../../../../includes/obsolete/get-product-detail-v3.html), [v4](../../../../includes/obsolete/get-product-detail-v4.html).

<h3 id="cdr-banking-api-modified-for-dp306-_get-product-detail_endpoint-version">Endpoint Version</h3>
|   |  |
|---|--|
|Version|**5**

<h3 id="cdr-banking-api-modified-for-dp306-_get-product-detail_parameters">Parameters</h3>

|Name|In|Type|Required|Default|Description|
|---|---|---|---|---|---|
|productId|path|[BankingProductId](#schemacdr-banking-api-modified-for-dp306-bankingproductid)|mandatory||The _productId_ to obtain data for. _productId_ values are returned by product list endpoints.|
|x-v|header|string|mandatory||Version of the API endpoint requested by the client. Must be set to a positive integer. The endpoint should respond with the highest supported version between [_x-min-v_](#request-headers) and [_x-v_](#request-headers). If the value of [_x-min-v_](#request-headers) is equal to or higher than the value of [_x-v_](#request-headers) then the [_x-min-v_](#request-headers) header should be treated as absent. If all versions requested are not supported then the endpoint **MUST** respond with a `406 Not Acceptable`. See [HTTP Headers](#request-headers).|
|x-min-v|header|string|optional||Minimum version of the API endpoint requested by the client. Must be set to a positive integer if provided. The endpoint should respond with the highest supported version between [_x-min-v_](#request-headers) and [_x-v_](#request-headers). If all versions requested are not supported then the endpoint **MUST** respond with a `406 Not Acceptable`.|

> Example responses

> 200 Response

```json
{
  "data": {
    "productId": "string",
    "effectiveFrom": "string",
    "effectiveTo": "string",
    "lastUpdated": "string",
    "productCategory": "BUSINESS_LOANS",
    "name": "string",
    "description": "string",
    "brand": "string",
    "brandName": "string",
    "applicationUri": "string",
    "isTailored": true,
    "additionalInformation": {
      "overviewUri": "string",
      "termsUri": "string",
      "eligibilityUri": "string",
      "feesAndPricingUri": "string",
      "bundleUri": "string",
      "additionalOverviewUris": [
        {
          "description": "string",
          "additionalInfoUri": "string"
        }
      ],
      "additionalTermsUris": [
        {
          "description": "string",
          "additionalInfoUri": "string"
        }
      ],
      "additionalEligibilityUris": [
        {
          "description": "string",
          "additionalInfoUri": "string"
        }
      ],
      "additionalFeesAndPricingUris": [
        {
          "description": "string",
          "additionalInfoUri": "string"
        }
      ],
      "additionalBundleUris": [
        {
          "description": "string",
          "additionalInfoUri": "string"
        }
      ]
    },
    "cardOption": {
      "cardScheme": "AMEX",
      "cardType": "CHARGE",
      "cardImages": [
        {
          "title": "string",
          "imageUri": "string"
        }
      ]
    },
    "bundles": [
      {
        "name": "string",
        "description": "string",
        "additionalInfo": "string",
        "additionalInfoUri": "string",
        "productIds": [
          "string"
        ]
      }
    ],
    "features": [
      {
        "featureType": "ADDITIONAL_CARDS",
        "additionalValue": "string",
        "additionalInfo": "string",
        "additionalInfoUri": "string"
      }
    ],
    "constraints": [
      {
        "constraintType": "MAX_BALANCE",
        "additionalValue": "string",
        "additionalInfo": "string",
        "additionalInfoUri": "string"
      }
    ],
    "eligibility": [
      {
        "eligibilityType": "BUSINESS",
        "additionalValue": "string",
        "additionalInfo": "string",
        "additionalInfoUri": "string"
      }
    ],
    "fees": [
      {
        "name": "string",
        "feeCategory": "CARD",
        "feeType": "CASH_ADVANCE",
        "feeMethodUType": "fixedAmount",
        "fixedAmount": {
          "amount": "string"
        },
        "rateBased": {
          "balanceRate": "string",
          "transactionRate": "string",
          "accruedRate": "string",
          "accrualFrequency": "string",
          "amountRange": {
            "feeMinimum": "string",
            "feeMaximum": "string"
          }
        },
        "variable": {
          "feeMinimum": "string",
          "feeMaximum": "string"
        },
        "feeCap": "string",
        "feeCapPeriod": "string",
        "currency": "AUD",
        "additionalValue": "string",
        "additionalInfo": "string",
        "additionalInfoUri": "string",
        "discounts": [
          {
            "description": "string",
            "discountType": "BALANCE",
            "amount": "string",
            "balanceRate": "string",
            "transactionRate": "string",
            "accruedRate": "string",
            "feeRate": "string",
            "additionalValue": "string",
            "additionalInfo": "string",
            "additionalInfoUri": "string",
            "eligibility": [
              {
                "discountEligibilityType": "BUSINESS",
                "additionalValue": "string",
                "additionalInfo": "string",
                "additionalInfoUri": "string"
              }
            ]
          }
        ]
      }
    ],
    "depositRates": [
      {
        "depositRateType": "VARIABLE",
        "rate": "string",
        "adjustmentToBase": "FIXED",
        "adjustmentBundle": "string",
        "calculationFrequency": "string",
        "applicationType": "PERIODIC",
        "applicationFrequency": "string",
        "tiers": [
          {
            "name": "string",
            "unitOfMeasure": "DAY",
            "minimumValue": "string",
            "maximumValue": "string",
            "rateApplicationMethod": "PER_TIER",
            "applicabilityConditions": [
              {
                "rateApplicabilityType": "NEW_CUSTOMER",
                "additionalValue": "string",
                "additionalInfo": "string",
                "additionalInfoUri": "string"
              }
            ],
            "additionalInfo": "string",
            "additionalInfoUri": "string"
          }
        ],
        "applicabilityConditions": [
          {
            "rateApplicabilityType": "NEW_CUSTOMER",
            "additionalValue": "string",
            "additionalInfo": "string",
            "additionalInfoUri": "string"
          }
        ],
        "additionalValue": "string",
        "additionalInfo": "string",
        "additionalInfoUri": "string"
      }
    ],
    "lendingRates": [
      {
        "lendingRateType": "DISCOUNT",
        "rate": "string",
        "referenceRate": "string",
        "comparisonRate": "string",
        "revertRate": "string",
        "revertProductId": "string",
        "adjustmentToBase": "BALANCE_TRANSFER",
        "adjustmentBundle": "string",
        "calculationFrequency": "string",
        "applicationType": "PERIODIC",
        "applicationFrequency": "string",
        "interestPaymentDue": "IN_ADVANCE",
        "repaymentType": "INTEREST_ONLY",
        "loanPurpose": "INVESTMENT",
        "tiers": [
          {
            "name": "string",
            "unitOfMeasure": "DAY",
            "minimumValue": "string",
            "maximumValue": "string",
            "rateApplicationMethod": "PER_TIER",
            "applicabilityConditions": [
              {
                "rateApplicabilityType": "NEW_CUSTOMER",
                "additionalValue": "string",
                "additionalInfo": "string",
                "additionalInfoUri": "string"
              }
            ],
            "additionalInfo": "string",
            "additionalInfoUri": "string"
          }
        ],
        "applicabilityConditions": [
          {
            "rateApplicabilityType": "NEW_CUSTOMER",
            "additionalValue": "string",
            "additionalInfo": "string",
            "additionalInfoUri": "string"
          }
        ],
        "additionalValue": "string",
        "additionalInfo": "string",
        "additionalInfoUri": "string"
      }
    ],
    "instalments": {
      "maximumPlanCount": 1,
      "instalmentsLimit": "string",
      "minimumPlanValue": "string",
      "maximumPlanValue": "string",
      "minimumSplit": 4,
      "maximumSplit": 4
    }
  },
  "links": {
    "self": "string"
  },
  "meta": {}
}
```

<h3 id="cdr-banking-api-modified-for-dp306-_get-product-detail_responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[ResponseBankingProductByIdV5](#schemacdr-banking-api-modified-for-dp306-responsebankingproductbyidv5)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The following error codes **MUST** be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Missing Required Field](#error-400-field-missing)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li></ul>|[ResponseErrorListV2](#schemacdr-banking-api-modified-for-dp306-responseerrorlistv2)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The following error codes **MUST** be supported:<br/><ul class="error-code-list"><li>[404 - Unavailable Resource](#error-404-resource-unavailable)</li><li>[404 - Invalid Resource](#error-404-resource-invalid)</li></ul>|[ResponseErrorListV2](#schemacdr-banking-api-modified-for-dp306-responseerrorlistv2)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|The following error codes **MUST** be supported:<br/><ul class="error-code-list"><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|[ResponseErrorListV2](#schemacdr-banking-api-modified-for-dp306-responseerrorlistv2)|

<h3 id="cdr-banking-api-modified-for-dp306-_get-product-detail_response-headers">Response Headers</h3>

|Status|Header|Type|Required|Description|
|---|---|---|---|---|
|200|x-v|string|mandatory|The [payload version](#response-headers) that the endpoint has responded with.|

  
    <aside class="success">
This operation does not require authentication.
</aside>

  

<!-- Endpoint tag group description -->
<!-- Banking Account endpoints -->

<h2 id="cdr-banking-api-modified-for-dp306-_get-accounts">Get Accounts</h2>
<p id="get-accounts" class="orig-anchor"></p>

> Code samples

```http
GET https://mtls.dh.example.com/cds-au/v1/banking/accounts HTTP/1.1
Host: mtls.dh.example.com
Accept: application/json
x-v: string
x-min-v: string
x-fapi-interaction-id: string
x-fapi-auth-date: string
x-fapi-customer-ip-address: string
x-cds-client-headers: string
```

```javascript--nodejs
const fetch = require('node-fetch');
const headers = {
  'Accept':'application/json',
  'x-v':'string',
  'x-min-v':'string',
  'x-fapi-interaction-id':'string',
  'x-fapi-auth-date':'string',
  'x-fapi-customer-ip-address':'string',
  'x-cds-client-headers':'string'
};

fetch('https://mtls.dh.example.com/cds-au/v1/banking/accounts', {
  method: 'GET',
  headers: headers
}).then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

`GET /banking/accounts`

Obtain a list of accounts.

Obsolete versions: [v1](../../../../includes/obsolete/get-accounts-v1.html), [v2](../../../../includes/obsolete/get-accounts-v2.html).

<h3 id="cdr-banking-api-modified-for-dp306-_get-accounts_endpoint-version">Endpoint Version</h3>
|   |  |
|---|--|
|Version|**3**

<h3 id="cdr-banking-api-modified-for-dp306-_get-accounts_parameters">Parameters</h3>

|Name|In|Type|Required|Default|Description|
|---|---|---|---|---|---|
|product-category|query|[BankingProductCategoryV2](#schemacdr-banking-api-modified-for-dp306-bankingproductcategoryv2)|optional||Used to filter results on the _productCategory_ field applicable to accounts. Any one of the valid values for this field can be supplied. If absent then all accounts returned.|
|open-status|query|[Enum](#common-field-types)|optional|`ALL`|Used to filter results according to open/closed status. Values can be `OPEN`, `CLOSED` or `ALL`. If absent then `ALL` is assumed.|
|is-owned|query|[Boolean](#common-field-types)|optional||Filters accounts based on whether they are owned by the authorised customer. `true` for owned accounts, `false` for unowned accounts and absent for all accounts.|
|page|query|[PositiveInteger](#common-field-types)|optional|`1`|Page of results to request (standard pagination).|
|page-size|query|[PositiveInteger](#common-field-types)|optional|`25`|Page size to request. Default is 25 (standard pagination).|
|x-v|header|string|mandatory||Version of the API endpoint requested by the client. Must be set to a positive integer. The endpoint should respond with the highest supported version between [_x-min-v_](#request-headers) and [_x-v_](#request-headers). If the value of [_x-min-v_](#request-headers) is equal to or higher than the value of [_x-v_](#request-headers) then the [_x-min-v_](#request-headers) header should be treated as absent. If all versions requested are not supported then the endpoint **MUST** respond with a `406 Not Acceptable`. See [HTTP Headers](#request-headers).|
|x-min-v|header|string|optional||Minimum version of the API endpoint requested by the client. Must be set to a positive integer if provided. The endpoint should respond with the highest supported version between [_x-min-v_](#request-headers) and [_x-v_](#request-headers). If all versions requested are not supported then the endpoint **MUST** respond with a `406 Not Acceptable`.|
|x-fapi-interaction-id|header|string|optional||An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|x-fapi-auth-date|header|string|conditional||The time when the customer last logged in to the Data Recipient Software Product as described in **[[FAPI-1.0-Baseline]](#nref-FAPI-1-0-Baseline)**. Required for all resource calls (customer present and unattended). Not required for unauthenticated calls.|
|x-fapi-customer-ip-address|header|string|optional||The customer's original IP address if the customer is currently logged in to the Data Recipient Software Product. The presence of this header indicates that the API is being called in a customer present context. Not to be included for unauthenticated calls.|
|x-cds-client-headers|header|[Base64](#common-field-types)|conditional||The customer's original standard http headers [Base64](#common-field-types) encoded, including the original User-Agent header, if the customer is currently logged in to the Data Recipient Software Product. Mandatory for customer present calls. Not required for unattended or unauthenticated calls.|

<h4 id="cdr-banking-api-modified-for-dp306-_get-accounts_enumerated-values-parameters">Enumerated Values</h4>

|Parameter|Value|
|---|---|
|product-category|BUSINESS_LOANS|
|product-category|BUY_NOW_PAY_LATER|
|product-category|CRED_AND_CHRG_CARDS|
|product-category|LEASES|
|product-category|MARGIN_LOANS|
|product-category|OVERDRAFTS|
|product-category|PERS_LOANS|
|product-category|REGULATED_TRUST_ACCOUNTS|
|product-category|RESIDENTIAL_MORTGAGES|
|product-category|TERM_DEPOSITS|
|product-category|TRADE_FINANCE|
|product-category|TRANS_AND_SAVINGS_ACCOUNTS|
|product-category|TRAVEL_CARDS|
|open-status|ALL|
|open-status|CLOSED|
|open-status|OPEN|

> Example responses

> 200 Response

```json
{
  "data": {
    "accounts": [
      {
        "accountId": "string",
        "creationDate": "string",
        "displayName": "string",
        "nickname": "string",
        "openStatus": "CLOSED",
        "isOwned": true,
        "accountOwnership": "UNKNOWN",
        "maskedNumber": "string",
        "productCategory": "BUSINESS_LOANS",
        "productName": "string"
      }
    ]
  },
  "links": {
    "self": "string",
    "first": "string",
    "prev": "string",
    "next": "string",
    "last": "string"
  },
  "meta": {
    "totalRecords": 0,
    "totalPages": 0
  }
}
```

<h3 id="cdr-banking-api-modified-for-dp306-_get-accounts_responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[ResponseBankingAccountListV3](#schemacdr-banking-api-modified-for-dp306-responsebankingaccountlistv3)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The following error codes **MUST** be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Missing Required Field](#error-400-field-missing)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li><li>[400 - Invalid Page Size](#error-400-field-invalid-page-size)</li></ul>|[ResponseErrorListV2](#schemacdr-banking-api-modified-for-dp306-responseerrorlistv2)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|The following error codes **MUST** be supported:<br/><ul class="error-code-list"><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|[ResponseErrorListV2](#schemacdr-banking-api-modified-for-dp306-responseerrorlistv2)|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|The following error codes **MUST** be supported:<br/><ul class="error-code-list"><li>[422 - Invalid Page](#error-422-field-invalid-page)</li></ul>|[ResponseErrorListV2](#schemacdr-banking-api-modified-for-dp306-responseerrorlistv2)|

<h3 id="cdr-banking-api-modified-for-dp306-_get-accounts_response-headers">Response Headers</h3>

|Status|Header|Type|Required|Description|
|---|---|---|---|---|
|200|x-v|string|mandatory|The [payload version](#response-headers) that the endpoint has responded with.|
|200|x-fapi-interaction-id|string|mandatory|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|400|x-fapi-interaction-id|string|mandatory|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|406|x-fapi-interaction-id|string|mandatory|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|422|x-fapi-interaction-id|string|mandatory|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|

  
    
      <aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
<a href="#authorisation-scopes">bank:accounts.basic:read.</a>
</aside>

    
  

<h2 id="cdr-banking-api-modified-for-dp306-_get-account-detail">Get Account Detail</h2>
<p id="get-account-detail" class="orig-anchor"></p>

> Code samples

```http
GET https://mtls.dh.example.com/cds-au/v1/banking/accounts/{accountId} HTTP/1.1
Host: mtls.dh.example.com
Accept: application/json
x-v: string
x-min-v: string
x-fapi-interaction-id: string
x-fapi-auth-date: string
x-fapi-customer-ip-address: string
x-cds-client-headers: string
```

```javascript--nodejs
const fetch = require('node-fetch');
const headers = {
  'Accept':'application/json',
  'x-v':'string',
  'x-min-v':'string',
  'x-fapi-interaction-id':'string',
  'x-fapi-auth-date':'string',
  'x-fapi-customer-ip-address':'string',
  'x-cds-client-headers':'string'
};

fetch('https://mtls.dh.example.com/cds-au/v1/banking/accounts/{accountId}', {
  method: 'GET',
  headers: headers
}).then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

`GET /banking/accounts/{accountId}`

Obtain detailed information on a single account.

Obsolete versions: [v1](../../../../includes/obsolete/get-account-detail-v1.html), [v2](../../../../includes/obsolete/get-account-detail-v2.html), [v3](../../../../includes/obsolete/get-account-detail-v3.html).

<h3 id="cdr-banking-api-modified-for-dp306-_get-account-detail_endpoint-version">Endpoint Version</h3>
|   |  |
|---|--|
|Version|**4**

<h3 id="cdr-banking-api-modified-for-dp306-_get-account-detail_parameters">Parameters</h3>

|Name|In|Type|Required|Default|Description|
|---|---|---|---|---|---|
|accountId|path|[BankingAccountId](#schemacdr-banking-api-modified-for-dp306-bankingaccountid)|mandatory||The _accountId_ to obtain data for. _accountId_ values are returned by account list endpoints.|
|x-v|header|string|mandatory||Version of the API endpoint requested by the client. Must be set to a positive integer. The endpoint should respond with the highest supported version between [_x-min-v_](#request-headers) and [_x-v_](#request-headers). If the value of [_x-min-v_](#request-headers) is equal to or higher than the value of [_x-v_](#request-headers) then the [_x-min-v_](#request-headers) header should be treated as absent. If all versions requested are not supported then the endpoint **MUST** respond with a `406 Not Acceptable`. See [HTTP Headers](#request-headers).|
|x-min-v|header|string|optional||Minimum version of the API endpoint requested by the client. Must be set to a positive integer if provided. The endpoint should respond with the highest supported version between [_x-min-v_](#request-headers) and [_x-v_](#request-headers). If all versions requested are not supported then the endpoint **MUST** respond with a `406 Not Acceptable`.|
|x-fapi-interaction-id|header|string|optional||An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|x-fapi-auth-date|header|string|conditional||The time when the customer last logged in to the Data Recipient Software Product as described in **[[FAPI-1.0-Baseline]](#nref-FAPI-1-0-Baseline)**. Required for all resource calls (customer present and unattended). Not required for unauthenticated calls.|
|x-fapi-customer-ip-address|header|string|optional||The customer's original IP address if the customer is currently logged in to the Data Recipient Software Product. The presence of this header indicates that the API is being called in a customer present context. Not to be included for unauthenticated calls.|
|x-cds-client-headers|header|[Base64](#common-field-types)|conditional||The customer's original standard http headers [Base64](#common-field-types) encoded, including the original User-Agent header, if the customer is currently logged in to the Data Recipient Software Product. Mandatory for customer present calls. Not required for unattended or unauthenticated calls.|

> Example responses

> 200 Response

```json
{
  "data": {
    "accountId": "string",
    "creationDate": "string",
    "displayName": "string",
    "nickname": "string",
    "openStatus": "CLOSED",
    "isOwned": true,
    "accountOwnership": "UNKNOWN",
    "maskedNumber": "string",
    "productCategory": "BUSINESS_LOANS",
    "productName": "string",
    "bsb": "string",
    "accountNumber": "string",
    "bundleName": "string",
    "cardOption": {
      "cardScheme": "AMEX",
      "cardType": "CHARGE",
      "cardImages": [
        {
          "title": "string",
          "imageUri": "string"
        }
      ]
    },
    "instalments": {
      "maximumPlanCount": 1,
      "instalmentsLimit": "string",
      "minimumPlanValue": "string",
      "maximumPlanValue": "string",
      "minimumSplit": 4,
      "maximumSplit": 4,
      "plans": [
        {
          "planNickname": "string",
          "creationDate": "string",
          "amount": "string",
          "duration": "string",
          "instalmentInterval": "string",
          "schedule": [
            {
              "amountDue": "string",
              "dueDate": "string"
            }
          ]
        }
      ]
    },
    "termDeposit": [
      {
        "lodgementDate": "string",
        "maturityDate": "string",
        "maturityAmount": "string",
        "maturityCurrency": "AUD",
        "maturityInstructions": "HOLD_ON_MATURITY",
        "depositRateDetail": {
          "depositRateType": "FIXED",
          "referenceRate": "string",
          "effectiveRate": "string",
          "calculationFrequency": "string",
          "applicationType": "PERIODIC",
          "applicationFrequency": "string",
          "tiers": [
            {
              "name": "string",
              "unitOfMeasure": "DAY",
              "minimumValue": "string",
              "maximumValue": "string",
              "rateApplicationMethod": "PER_TIER",
              "applicabilityConditions": [
                {
                  "rateApplicabilityType": "NEW_CUSTOMER",
                  "additionalValue": "string",
                  "additionalInfo": "string",
                  "additionalInfoUri": "string"
                }
              ],
              "additionalInfo": "string",
              "additionalInfoUri": "string"
            }
          ],
          "applicabilityConditions": [
            {
              "rateApplicabilityType": "NEW_CUSTOMER",
              "additionalValue": "string",
              "additionalInfo": "string",
              "additionalInfoUri": "string"
            }
          ],
          "additionalValue": "string",
          "additionalInfo": "string",
          "additionalInfoUri": "string",
          "adjustments": [
            {
              "adjustmentType": "BONUS",
              "amount": "string",
              "currency": "AUD",
              "rate": "string",
              "adjustmentBundle": "string",
              "adjustmentPeriod": "string",
              "adjustmentEndDate": "string",
              "additionalValue": "string",
              "additionalInfo": "string",
              "additionalInfoUri": "string"
            }
          ]
        }
      }
    ],
    "creditCard": {
      "minPaymentAmount": "string",
      "paymentDueAmount": "string",
      "paymentCurrency": "AUD",
      "paymentDueDate": "string",
      "cardPlans": [
        {
          "nickname": "string",
          "planType": "PURCHASE_PLAN",
          "atExpiryBalanceTransfersTo": "PURCHASE_PLAN",
          "planCreationDate": "string",
          "planPeriod": "string",
          "planEndDate": "string",
          "planReferenceRate": "string",
          "planEffectiveRate": "string",
          "minPaymentAmount": "string",
          "paymentDueAmount": "string",
          "paymentCurrency": "AUD",
          "paymentDueDate": "string",
          "additionalInfo": "string",
          "additionalInfoUri": "string",
          "interestFreePeriods": [
            {
              "from": "string",
              "to": "string"
            }
          ],
          "adjustments": [
            {
              "adjustmentType": "BONUS",
              "amount": "string",
              "currency": "AUD",
              "rate": "string",
              "adjustmentBundle": "string",
              "adjustmentPeriod": "string",
              "adjustmentEndDate": "string",
              "additionalValue": "string",
              "additionalInfo": "string",
              "additionalInfoUri": "string"
            }
          ],
          "planFeatures": [
            {
              "planFeatureType": "BALANCE_TRANSFER_ENDS_INTEREST_FREE",
              "period": "string",
              "endDate": "string",
              "additionalValue": "string",
              "additionalInfo": "string",
              "additionalInfoUri": "string"
            }
          ]
        }
      ]
    },
    "loan": {
      "originalStartDate": "string",
      "originalLoanAmount": "string",
      "originalLoanCurrency": "AUD",
      "loanEndDate": "string",
      "nextInstalmentDate": "string",
      "minInstalmentAmount": "string",
      "minInstalmentCurrency": "AUD",
      "maxRedraw": "string",
      "maxRedrawCurrency": "AUD",
      "minRedraw": "string",
      "minRedrawCurrency": "AUD",
      "offsetAccountEnabled": true,
      "offsetAccountIds": [
        "string"
      ],
      "lendingRateDetail": [
        {
          "loanPurpose": "OWNER_OCCUPIED",
          "repaymentType": "PRINCIPAL_AND_INTEREST",
          "rateStartDate": "string",
          "rateEndDate": "string",
          "revertProductId": "string",
          "repaymentUType": "fixedRate",
          "fixedRate": {
            "fixedPeriod": "string",
            "referenceRate": "string",
            "effectiveRate": "string",
            "calculationFrequency": "string",
            "applicationType": "PERIODIC",
            "applicationFrequency": "string",
            "interestPaymentDue": "IN_ADVANCE",
            "repaymentFrequency": "string",
            "additionalInfo": "string",
            "additionalInfoUri": "string"
          },
          "variableRate": {
            "variableRateType": "FLOATING",
            "referenceRate": "string",
            "effectiveRate": "string",
            "calculationFrequency": "string",
            "applicationType": "PERIODIC",
            "applicationFrequency": "string",
            "interestPaymentDue": "IN_ADVANCE",
            "repaymentFrequency": "string",
            "additionalValue": "string",
            "additionalInfo": "string",
            "additionalInfoUri": "string"
          },
          "feeAmount": {
            "amount": "string",
            "currency": "AUD",
            "repaymentDue": "IN_ADVANCE",
            "repaymentFrequency": "string",
            "additionalInfo": "string",
            "additionalInfoUri": "string"
          },
          "adjustments": [
            {
              "adjustmentType": "BONUS",
              "amount": "string",
              "currency": "AUD",
              "rate": "string",
              "adjustmentBundle": "string",
              "adjustmentPeriod": "string",
              "adjustmentEndDate": "string",
              "additionalValue": "string",
              "additionalInfo": "string",
              "additionalInfoUri": "string"
            }
          ]
        }
      ]
    },
    "deposit": {
      "lodgementDate": "string",
      "nickname": "string",
      "depositRateDetail": {
        "depositRateType": "FIXED",
        "referenceRate": "string",
        "effectiveRate": "string",
        "calculationFrequency": "string",
        "applicationType": "PERIODIC",
        "applicationFrequency": "string",
        "tiers": [
          {
            "name": "string",
            "unitOfMeasure": "DAY",
            "minimumValue": "string",
            "maximumValue": "string",
            "rateApplicationMethod": "PER_TIER",
            "applicabilityConditions": [
              {
                "rateApplicabilityType": "NEW_CUSTOMER",
                "additionalValue": "string",
                "additionalInfo": "string",
                "additionalInfoUri": "string"
              }
            ],
            "additionalInfo": "string",
            "additionalInfoUri": "string"
          }
        ],
        "applicabilityConditions": [
          {
            "rateApplicabilityType": "NEW_CUSTOMER",
            "additionalValue": "string",
            "additionalInfo": "string",
            "additionalInfoUri": "string"
          }
        ],
        "additionalValue": "string",
        "additionalInfo": "string",
        "additionalInfoUri": "string",
        "adjustments": [
          {
            "adjustmentType": "BONUS",
            "amount": "string",
            "currency": "AUD",
            "rate": "string",
            "adjustmentBundle": "string",
            "adjustmentPeriod": "string",
            "adjustmentEndDate": "string",
            "additionalValue": "string",
            "additionalInfo": "string",
            "additionalInfoUri": "string"
          }
        ]
      }
    },
    "features": [
      {
        "featureType": "ADDITIONAL_CARDS",
        "additionalValue": "string",
        "additionalInfo": "string",
        "additionalInfoUri": "string",
        "isActivated": true
      }
    ],
    "fees": [
      {
        "name": "string",
        "feeCategory": "CARD",
        "feeType": "CASH_ADVANCE",
        "feeMethodUType": "fixedAmount",
        "fixedAmount": {
          "amount": "string"
        },
        "rateBased": {
          "balanceRate": "string",
          "transactionRate": "string",
          "accruedRate": "string",
          "accrualFrequency": "string",
          "amountRange": {
            "feeMinimum": "string",
            "feeMaximum": "string"
          }
        },
        "variable": {
          "feeMinimum": "string",
          "feeMaximum": "string"
        },
        "feeCap": "string",
        "feeCapPeriod": "string",
        "currency": "AUD",
        "additionalValue": "string",
        "additionalInfo": "string",
        "additionalInfoUri": "string",
        "discounts": [
          {
            "description": "string",
            "discountType": "BALANCE",
            "amount": "string",
            "balanceRate": "string",
            "transactionRate": "string",
            "accruedRate": "string",
            "feeRate": "string",
            "additionalValue": "string",
            "additionalInfo": "string",
            "additionalInfoUri": "string",
            "eligibility": [
              {
                "discountEligibilityType": "BUSINESS",
                "additionalValue": "string",
                "additionalInfo": "string",
                "additionalInfoUri": "string"
              }
            ]
          }
        ]
      }
    ],
    "addresses": [
      {
        "addressUType": "paf",
        "simple": {
          "mailingName": "string",
          "addressLine1": "string",
          "addressLine2": "string",
          "addressLine3": "string",
          "postcode": "string",
          "city": "string",
          "state": "string",
          "country": "AUS"
        },
        "paf": {
          "dpid": "string",
          "thoroughfareNumber1": 0,
          "thoroughfareNumber1Suffix": "string",
          "thoroughfareNumber2": 0,
          "thoroughfareNumber2Suffix": "string",
          "flatUnitType": "string",
          "flatUnitNumber": "string",
          "floorLevelType": "string",
          "floorLevelNumber": "string",
          "lotNumber": "string",
          "buildingName1": "string",
          "buildingName2": "string",
          "streetName": "string",
          "streetType": "string",
          "streetSuffix": "string",
          "postalDeliveryType": "string",
          "postalDeliveryNumber": 0,
          "postalDeliveryNumberPrefix": "string",
          "postalDeliveryNumberSuffix": "string",
          "localityName": "string",
          "postcode": "string",
          "state": "string"
        }
      }
    ]
  },
  "links": {
    "self": "string"
  },
  "meta": {}
}
```

<h3 id="cdr-banking-api-modified-for-dp306-_get-account-detail_responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[ResponseBankingAccountByIdV4](#schemacdr-banking-api-modified-for-dp306-responsebankingaccountbyidv4)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The following error codes **MUST** be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Missing Required Field](#error-400-field-missing)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li></ul>|[ResponseErrorListV2](#schemacdr-banking-api-modified-for-dp306-responseerrorlistv2)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The following error codes **MUST** be supported:<br/><ul class="error-code-list"><li>[404 - Unavailable Banking Account](#error-404-authorisation-unavailable-banking-account)</li><li>[404 - Invalid Banking Account](#error-404-authorisation-invalid-banking-account)</li></ul>|[ResponseErrorListV2](#schemacdr-banking-api-modified-for-dp306-responseerrorlistv2)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|The following error codes **MUST** be supported:<br/><ul class="error-code-list"><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|[ResponseErrorListV2](#schemacdr-banking-api-modified-for-dp306-responseerrorlistv2)|

<h3 id="cdr-banking-api-modified-for-dp306-_get-account-detail_response-headers">Response Headers</h3>

|Status|Header|Type|Required|Description|
|---|---|---|---|---|
|200|x-v|string|mandatory|The [payload version](#response-headers) that the endpoint has responded with.|
|200|x-fapi-interaction-id|string|mandatory|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|400|x-fapi-interaction-id|string|mandatory|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|404|x-fapi-interaction-id|string|mandatory|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|406|x-fapi-interaction-id|string|mandatory|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|

  
    
      <aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
<a href="#authorisation-scopes">bank:accounts.detail:read.</a>
</aside>

    
  

<!-- Endpoint tag group description -->
<!-- Banking Account Balance endpoints -->

<h2 id="cdr-banking-api-modified-for-dp306-_get-bulk-balances">Get Bulk Balances</h2>
<p id="get-bulk-balances" class="orig-anchor"></p>

> Code samples

```http
GET https://mtls.dh.example.com/cds-au/v1/banking/accounts/balances HTTP/1.1
Host: mtls.dh.example.com
Accept: application/json
x-v: string
x-min-v: string
x-fapi-interaction-id: string
x-fapi-auth-date: string
x-fapi-customer-ip-address: string
x-cds-client-headers: string
```

```javascript--nodejs
const fetch = require('node-fetch');
const headers = {
  'Accept':'application/json',
  'x-v':'string',
  'x-min-v':'string',
  'x-fapi-interaction-id':'string',
  'x-fapi-auth-date':'string',
  'x-fapi-customer-ip-address':'string',
  'x-cds-client-headers':'string'
};

fetch('https://mtls.dh.example.com/cds-au/v1/banking/accounts/balances', {
  method: 'GET',
  headers: headers
}).then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

`GET /banking/accounts/balances`

Obtain balances for multiple, filtered accounts.

Obsolete versions: [v1](../../../../includes/obsolete/get-bulk-balances-v1.html).

<h3 id="cdr-banking-api-modified-for-dp306-_get-bulk-balances_endpoint-version">Endpoint Version</h3>
|   |  |
|---|--|
|Version|**2**

<h3 id="cdr-banking-api-modified-for-dp306-_get-bulk-balances_parameters">Parameters</h3>

|Name|In|Type|Required|Default|Description|
|---|---|---|---|---|---|
|product-category|query|[BankingProductCategoryV2](#schemacdr-banking-api-modified-for-dp306-bankingproductcategoryv2)|optional||Used to filter results on the _productCategory_ field applicable to accounts. Any one of the valid values for this field can be supplied. If absent then all accounts returned.|
|open-status|query|[Enum](#common-field-types)|optional|`ALL`|Used to filter results according to open/closed status. Values can be `OPEN`, `CLOSED` or `ALL`. If absent then `ALL` is assumed.|
|is-owned|query|[Boolean](#common-field-types)|optional||Filters accounts based on whether they are owned by the authorised customer. `true` for owned accounts, `false` for unowned accounts and absent for all accounts.|
|page|query|[PositiveInteger](#common-field-types)|optional|`1`|Page of results to request (standard pagination).|
|page-size|query|[PositiveInteger](#common-field-types)|optional|`25`|Page size to request. Default is 25 (standard pagination).|
|x-v|header|string|mandatory||Version of the API endpoint requested by the client. Must be set to a positive integer. The endpoint should respond with the highest supported version between [_x-min-v_](#request-headers) and [_x-v_](#request-headers). If the value of [_x-min-v_](#request-headers) is equal to or higher than the value of [_x-v_](#request-headers) then the [_x-min-v_](#request-headers) header should be treated as absent. If all versions requested are not supported then the endpoint **MUST** respond with a `406 Not Acceptable`. See [HTTP Headers](#request-headers).|
|x-min-v|header|string|optional||Minimum version of the API endpoint requested by the client. Must be set to a positive integer if provided. The endpoint should respond with the highest supported version between [_x-min-v_](#request-headers) and [_x-v_](#request-headers). If all versions requested are not supported then the endpoint **MUST** respond with a `406 Not Acceptable`.|
|x-fapi-interaction-id|header|string|optional||An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|x-fapi-auth-date|header|string|conditional||The time when the customer last logged in to the Data Recipient Software Product as described in **[[FAPI-1.0-Baseline]](#nref-FAPI-1-0-Baseline)**. Required for all resource calls (customer present and unattended). Not required for unauthenticated calls.|
|x-fapi-customer-ip-address|header|string|optional||The customer's original IP address if the customer is currently logged in to the Data Recipient Software Product. The presence of this header indicates that the API is being called in a customer present context. Not to be included for unauthenticated calls.|
|x-cds-client-headers|header|[Base64](#common-field-types)|conditional||The customer's original standard http headers [Base64](#common-field-types) encoded, including the original User-Agent header, if the customer is currently logged in to the Data Recipient Software Product. Mandatory for customer present calls. Not required for unattended or unauthenticated calls.|

<h4 id="cdr-banking-api-modified-for-dp306-_get-bulk-balances_enumerated-values-parameters">Enumerated Values</h4>

|Parameter|Value|
|---|---|
|product-category|BUSINESS_LOANS|
|product-category|BUY_NOW_PAY_LATER|
|product-category|CRED_AND_CHRG_CARDS|
|product-category|LEASES|
|product-category|MARGIN_LOANS|
|product-category|OVERDRAFTS|
|product-category|PERS_LOANS|
|product-category|REGULATED_TRUST_ACCOUNTS|
|product-category|RESIDENTIAL_MORTGAGES|
|product-category|TERM_DEPOSITS|
|product-category|TRADE_FINANCE|
|product-category|TRANS_AND_SAVINGS_ACCOUNTS|
|product-category|TRAVEL_CARDS|
|open-status|ALL|
|open-status|CLOSED|
|open-status|OPEN|

> Example responses

> 200 Response

```json
{
  "data": {
    "balances": [
      {
        "accountId": "string",
        "currentBalance": "string",
        "availableBalance": "string",
        "creditLimit": "string",
        "amortisedLimit": "string",
        "currency": "AUD",
        "purses": [
          {
            "amount": "string",
            "currency": "string"
          }
        ]
      }
    ]
  },
  "links": {
    "self": "string",
    "first": "string",
    "prev": "string",
    "next": "string",
    "last": "string"
  },
  "meta": {
    "totalRecords": 0,
    "totalPages": 0
  }
}
```

<h3 id="cdr-banking-api-modified-for-dp306-_get-bulk-balances_responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[ResponseBankingAccountsBalanceList](#schemacdr-banking-api-modified-for-dp306-responsebankingaccountsbalancelist)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The following error codes **MUST** be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Missing Required Field](#error-400-field-missing)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li><li>[400 - Invalid Page Size](#error-400-field-invalid-page-size)</li></ul>|[ResponseErrorListV2](#schemacdr-banking-api-modified-for-dp306-responseerrorlistv2)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|The following error codes **MUST** be supported:<br/><ul class="error-code-list"><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|[ResponseErrorListV2](#schemacdr-banking-api-modified-for-dp306-responseerrorlistv2)|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|The following error codes **MUST** be supported:<br/><ul class="error-code-list"><li>[422 - Invalid Page](#error-422-field-invalid-page)</li></ul>|[ResponseErrorListV2](#schemacdr-banking-api-modified-for-dp306-responseerrorlistv2)|

<h3 id="cdr-banking-api-modified-for-dp306-_get-bulk-balances_response-headers">Response Headers</h3>

|Status|Header|Type|Required|Description|
|---|---|---|---|---|
|200|x-v|string|mandatory|The [payload version](#response-headers) that the endpoint has responded with.|
|200|x-fapi-interaction-id|string|mandatory|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|400|x-fapi-interaction-id|string|mandatory|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|406|x-fapi-interaction-id|string|mandatory|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|422|x-fapi-interaction-id|string|mandatory|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|

  
    
      <aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
<a href="#authorisation-scopes">bank:accounts.basic:read.</a>
</aside>

    
  

<h2 id="cdr-banking-api-modified-for-dp306-_get-balances-for-specific-accounts">Get Balances For Specific Accounts</h2>
<p id="get-balances-for-specific-accounts" class="orig-anchor"></p>

> Code samples

```http
POST https://mtls.dh.example.com/cds-au/v1/banking/accounts/balances HTTP/1.1
Host: mtls.dh.example.com
Content-Type: application/json
Accept: application/json
x-v: string
x-min-v: string
x-fapi-interaction-id: string
x-fapi-auth-date: string
x-fapi-customer-ip-address: string
x-cds-client-headers: string
```

```javascript--nodejs
const fetch = require('node-fetch');
const inputBody = '{
  "data": {
    "accountIds": [
      "string"
    ]
  },
  "meta": {}
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'x-v':'string',
  'x-min-v':'string',
  'x-fapi-interaction-id':'string',
  'x-fapi-auth-date':'string',
  'x-fapi-customer-ip-address':'string',
  'x-cds-client-headers':'string'
};

fetch('https://mtls.dh.example.com/cds-au/v1/banking/accounts/balances', {
  method: 'POST',
  body: inputBody,
  headers: headers
}).then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

`POST /banking/accounts/balances`

Obtain balances for a specified list of accounts.

> Body parameter

```json
{
  "data": {
    "accountIds": [
      "string"
    ]
  },
  "meta": {}
}
```

<h3 id="cdr-banking-api-modified-for-dp306-_get-balances-for-specific-accounts_endpoint-version">Endpoint Version</h3>
|   |  |
|---|--|
|Version|**1**

<h3 id="cdr-banking-api-modified-for-dp306-_get-balances-for-specific-accounts_parameters">Parameters</h3>

|Name|In|Type|Required|Default|Description|
|---|---|---|---|---|---|
|page|query|[PositiveInteger](#common-field-types)|optional|`1`|Page of results to request (standard pagination).|
|page-size|query|[PositiveInteger](#common-field-types)|optional|`25`|Page size to request. Default is 25 (standard pagination).|
|x-v|header|string|mandatory||Version of the API endpoint requested by the client. Must be set to a positive integer. The endpoint should respond with the highest supported version between [_x-min-v_](#request-headers) and [_x-v_](#request-headers). If the value of [_x-min-v_](#request-headers) is equal to or higher than the value of [_x-v_](#request-headers) then the [_x-min-v_](#request-headers) header should be treated as absent. If all versions requested are not supported then the endpoint **MUST** respond with a `406 Not Acceptable`. See [HTTP Headers](#request-headers).|
|x-min-v|header|string|optional||Minimum version of the API endpoint requested by the client. Must be set to a positive integer if provided. The endpoint should respond with the highest supported version between [_x-min-v_](#request-headers) and [_x-v_](#request-headers). If all versions requested are not supported then the endpoint **MUST** respond with a `406 Not Acceptable`.|
|x-fapi-interaction-id|header|string|optional||An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|x-fapi-auth-date|header|string|conditional||The time when the customer last logged in to the Data Recipient Software Product as described in **[[FAPI-1.0-Baseline]](#nref-FAPI-1-0-Baseline)**. Required for all resource calls (customer present and unattended). Not required for unauthenticated calls.|
|x-fapi-customer-ip-address|header|string|optional||The customer's original IP address if the customer is currently logged in to the Data Recipient Software Product. The presence of this header indicates that the API is being called in a customer present context. Not to be included for unauthenticated calls.|
|x-cds-client-headers|header|[Base64](#common-field-types)|conditional||The customer's original standard http headers [Base64](#common-field-types) encoded, including the original User-Agent header, if the customer is currently logged in to the Data Recipient Software Product. Mandatory for customer present calls. Not required for unattended or unauthenticated calls.|
|body|body|[RequestAccountIdListV1](#schemacdr-banking-api-modified-for-dp306-requestaccountidlistv1)|mandatory||Request payload containing a list of _accountId_ values to obtain data for.|

> Example responses

> 200 Response

```json
{
  "data": {
    "balances": [
      {
        "accountId": "string",
        "currentBalance": "string",
        "availableBalance": "string",
        "creditLimit": "string",
        "amortisedLimit": "string",
        "currency": "AUD",
        "purses": [
          {
            "amount": "string",
            "currency": "string"
          }
        ]
      }
    ]
  },
  "links": {
    "self": "string",
    "first": "string",
    "prev": "string",
    "next": "string",
    "last": "string"
  },
  "meta": {
    "totalRecords": 0,
    "totalPages": 0
  }
}
```

<h3 id="cdr-banking-api-modified-for-dp306-_get-balances-for-specific-accounts_responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[ResponseBankingAccountsBalanceList](#schemacdr-banking-api-modified-for-dp306-responsebankingaccountsbalancelist)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The following error codes **MUST** be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Missing Required Field](#error-400-field-missing)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li><li>[400 - Invalid Page Size](#error-400-field-invalid-page-size)</li></ul>|[ResponseErrorListV2](#schemacdr-banking-api-modified-for-dp306-responseerrorlistv2)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|The following error codes **MUST** be supported:<br/><ul class="error-code-list"><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|[ResponseErrorListV2](#schemacdr-banking-api-modified-for-dp306-responseerrorlistv2)|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|The following error codes **MUST** be supported:<br/><ul class="error-code-list"><li>[422 - Invalid Page](#error-422-field-invalid-page)</li><li>[422 - Unavailable Banking Account](#error-422-authorisation-unavailable-banking-account)</li><li>[422 - Invalid Banking Account](#error-422-authorisation-invalid-banking-account)</li></ul>|[ResponseErrorListV2](#schemacdr-banking-api-modified-for-dp306-responseerrorlistv2)|

<h3 id="cdr-banking-api-modified-for-dp306-_get-balances-for-specific-accounts_response-headers">Response Headers</h3>

|Status|Header|Type|Required|Description|
|---|---|---|---|---|
|200|x-v|string|mandatory|The [payload version](#response-headers) that the endpoint has responded with.|
|200|x-fapi-interaction-id|string|mandatory|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|400|x-fapi-interaction-id|string|mandatory|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|406|x-fapi-interaction-id|string|mandatory|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|422|x-fapi-interaction-id|string|mandatory|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|

  
    
      <aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
<a href="#authorisation-scopes">bank:accounts.basic:read.</a>
</aside>

    
  

<h2 id="cdr-banking-api-modified-for-dp306-_get-account-balance">Get Account Balance</h2>
<p id="get-account-balance" class="orig-anchor"></p>

> Code samples

```http
GET https://mtls.dh.example.com/cds-au/v1/banking/accounts/{accountId}/balance HTTP/1.1
Host: mtls.dh.example.com
Accept: application/json
x-v: string
x-min-v: string
x-fapi-interaction-id: string
x-fapi-auth-date: string
x-fapi-customer-ip-address: string
x-cds-client-headers: string
```

```javascript--nodejs
const fetch = require('node-fetch');
const headers = {
  'Accept':'application/json',
  'x-v':'string',
  'x-min-v':'string',
  'x-fapi-interaction-id':'string',
  'x-fapi-auth-date':'string',
  'x-fapi-customer-ip-address':'string',
  'x-cds-client-headers':'string'
};

fetch('https://mtls.dh.example.com/cds-au/v1/banking/accounts/{accountId}/balance', {
  method: 'GET',
  headers: headers
}).then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

`GET /banking/accounts/{accountId}/balance`

Obtain the balance for a single specified account.

<h3 id="cdr-banking-api-modified-for-dp306-_get-account-balance_endpoint-version">Endpoint Version</h3>
|   |  |
|---|--|
|Version|**1**

<h3 id="cdr-banking-api-modified-for-dp306-_get-account-balance_parameters">Parameters</h3>

|Name|In|Type|Required|Default|Description|
|---|---|---|---|---|---|
|accountId|path|[BankingAccountId](#schemacdr-banking-api-modified-for-dp306-bankingaccountid)|mandatory||The _accountId_ to obtain data for. _accountId_ values are returned by account list endpoints.|
|x-v|header|string|mandatory||Version of the API endpoint requested by the client. Must be set to a positive integer. The endpoint should respond with the highest supported version between [_x-min-v_](#request-headers) and [_x-v_](#request-headers). If the value of [_x-min-v_](#request-headers) is equal to or higher than the value of [_x-v_](#request-headers) then the [_x-min-v_](#request-headers) header should be treated as absent. If all versions requested are not supported then the endpoint **MUST** respond with a `406 Not Acceptable`. See [HTTP Headers](#request-headers).|
|x-min-v|header|string|optional||Minimum version of the API endpoint requested by the client. Must be set to a positive integer if provided. The endpoint should respond with the highest supported version between [_x-min-v_](#request-headers) and [_x-v_](#request-headers). If all versions requested are not supported then the endpoint **MUST** respond with a `406 Not Acceptable`.|
|x-fapi-interaction-id|header|string|optional||An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|x-fapi-auth-date|header|string|conditional||The time when the customer last logged in to the Data Recipient Software Product as described in **[[FAPI-1.0-Baseline]](#nref-FAPI-1-0-Baseline)**. Required for all resource calls (customer present and unattended). Not required for unauthenticated calls.|
|x-fapi-customer-ip-address|header|string|optional||The customer's original IP address if the customer is currently logged in to the Data Recipient Software Product. The presence of this header indicates that the API is being called in a customer present context. Not to be included for unauthenticated calls.|
|x-cds-client-headers|header|[Base64](#common-field-types)|conditional||The customer's original standard http headers [Base64](#common-field-types) encoded, including the original User-Agent header, if the customer is currently logged in to the Data Recipient Software Product. Mandatory for customer present calls. Not required for unattended or unauthenticated calls.|

> Example responses

> 200 Response

```json
{
  "data": {
    "accountId": "string",
    "currentBalance": "string",
    "availableBalance": "string",
    "creditLimit": "string",
    "amortisedLimit": "string",
    "currency": "AUD",
    "purses": [
      {
        "amount": "string",
        "currency": "string"
      }
    ]
  },
  "links": {
    "self": "string"
  },
  "meta": {}
}
```

<h3 id="cdr-banking-api-modified-for-dp306-_get-account-balance_responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[ResponseBankingAccountsBalanceById](#schemacdr-banking-api-modified-for-dp306-responsebankingaccountsbalancebyid)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The following error codes **MUST** be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Missing Required Field](#error-400-field-missing)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li></ul>|[ResponseErrorListV2](#schemacdr-banking-api-modified-for-dp306-responseerrorlistv2)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The following error codes **MUST** be supported:<br/><ul class="error-code-list"><li>[404 - Unavailable Banking Account](#error-404-authorisation-unavailable-banking-account)</li><li>[404 - Invalid Banking Account](#error-404-authorisation-invalid-banking-account)</li></ul>|[ResponseErrorListV2](#schemacdr-banking-api-modified-for-dp306-responseerrorlistv2)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|The following error codes **MUST** be supported:<br/><ul class="error-code-list"><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|[ResponseErrorListV2](#schemacdr-banking-api-modified-for-dp306-responseerrorlistv2)|

<h3 id="cdr-banking-api-modified-for-dp306-_get-account-balance_response-headers">Response Headers</h3>

|Status|Header|Type|Required|Description|
|---|---|---|---|---|
|200|x-v|string|mandatory|The [payload version](#response-headers) that the endpoint has responded with.|
|200|x-fapi-interaction-id|string|mandatory|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|400|x-fapi-interaction-id|string|mandatory|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|404|x-fapi-interaction-id|string|mandatory|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|406|x-fapi-interaction-id|string|mandatory|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|

  
    
      <aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
<a href="#authorisation-scopes">bank:accounts.basic:read.</a>
</aside>

    
  

<!-- Endpoint tag group description -->
<!-- Banking Account Transaction endpoints -->

<h2 id="cdr-banking-api-modified-for-dp306-_get-transactions-for-account">Get Transactions For Account</h2>
<p id="get-transactions-for-account" class="orig-anchor"></p>

> Code samples

```http
GET https://mtls.dh.example.com/cds-au/v1/banking/accounts/{accountId}/transactions HTTP/1.1
Host: mtls.dh.example.com
Accept: application/json
x-v: string
x-min-v: string
x-fapi-interaction-id: string
x-fapi-auth-date: string
x-fapi-customer-ip-address: string
x-cds-client-headers: string
```

```javascript--nodejs
const fetch = require('node-fetch');
const headers = {
  'Accept':'application/json',
  'x-v':'string',
  'x-min-v':'string',
  'x-fapi-interaction-id':'string',
  'x-fapi-auth-date':'string',
  'x-fapi-customer-ip-address':'string',
  'x-cds-client-headers':'string'
};

fetch('https://mtls.dh.example.com/cds-au/v1/banking/accounts/{accountId}/transactions', {
  method: 'GET',
  headers: headers
}).then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

`GET /banking/accounts/{accountId}/transactions`

Obtain transactions for a specific account.

Some general notes that apply to all endpoints that retrieve transactions:<ul><li>Where multiple transactions are returned, transactions should be ordered according to effective date in descending order<li>As the date and time for a transaction can alter depending on status and transaction type two separate date/times are included in the payload. There are still some scenarios where neither of these time stamps is available. For the purpose of filtering and ordering it is expected that the data holder will use the "effective" date/time which will be defined as:<ul><li>Posted date/time if available, then<li>Execution date/time if available, then<li>A reasonable date/time nominated by the data holder using internal data structures</ul><li>For transaction amounts it should be assumed that a negative value indicates a reduction of the available balance on the account while a positive value indicates an increase in the available balance on the account<li>For aggregated transactions (i.e. groups of sub transactions reported as a single entry for the account) only the aggregated information, with as much consistent information across the subsidiary transactions as possible, is required to be shared.</ul>

<h3 id="cdr-banking-api-modified-for-dp306-_get-transactions-for-account_endpoint-version">Endpoint Version</h3>
|   |  |
|---|--|
|Version|**1**

<h3 id="cdr-banking-api-modified-for-dp306-_get-transactions-for-account_parameters">Parameters</h3>

|Name|In|Type|Required|Default|Description|
|---|---|---|---|---|---|
|accountId|path|[BankingAccountId](#schemacdr-banking-api-modified-for-dp306-bankingaccountid)|mandatory||The _accountId_ to obtain data for. _accountId_ values are returned by account list endpoints.|
|oldest-time|query|[DateTimeString](#common-field-types)|optional||Constrain the transaction history request to transactions with effective time at or after this date/time. If absent defaults to _newest-time_ minus 90 days. Format is aligned to [DateTimeString](#common-field-types) common type.|
|newest-time|query|[DateTimeString](#common-field-types)|optional||Constrain the transaction history request to transactions with effective time at or before this date/time. If absent defaults to today. Format is aligned to [DateTimeString](#common-field-types) common type.|
|min-amount|query|[AmountString](#common-field-types)|optional||Filter transactions to only transactions with amounts higher than or equal to this amount.|
|max-amount|query|[AmountString](#common-field-types)|optional||Filter transactions to only transactions with amounts less than or equal to this amount.|
|text|query|string|optional||Filter transactions to only transactions where this string value is found as a substring of either the _reference_ or _description_ fields. Format is arbitrary ASCII string. This parameter is optionally implemented by data holders. If it is not implemented then a response should be provided as normal without text filtering applied and an additional boolean field named _isQueryParamUnsupported_ should be included in the meta object and set to `true` (whether the text parameter is supplied or not).|
|page|query|[PositiveInteger](#common-field-types)|optional|`1`|Page of results to request (standard pagination).|
|page-size|query|[PositiveInteger](#common-field-types)|optional|`25`|Page size to request. Default is 25 (standard pagination).|
|x-v|header|string|mandatory||Version of the API endpoint requested by the client. Must be set to a positive integer. The endpoint should respond with the highest supported version between [_x-min-v_](#request-headers) and [_x-v_](#request-headers). If the value of [_x-min-v_](#request-headers) is equal to or higher than the value of [_x-v_](#request-headers) then the [_x-min-v_](#request-headers) header should be treated as absent. If all versions requested are not supported then the endpoint **MUST** respond with a `406 Not Acceptable`. See [HTTP Headers](#request-headers).|
|x-min-v|header|string|optional||Minimum version of the API endpoint requested by the client. Must be set to a positive integer if provided. The endpoint should respond with the highest supported version between [_x-min-v_](#request-headers) and [_x-v_](#request-headers). If all versions requested are not supported then the endpoint **MUST** respond with a `406 Not Acceptable`.|
|x-fapi-interaction-id|header|string|optional||An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|x-fapi-auth-date|header|string|conditional||The time when the customer last logged in to the Data Recipient Software Product as described in **[[FAPI-1.0-Baseline]](#nref-FAPI-1-0-Baseline)**. Required for all resource calls (customer present and unattended). Not required for unauthenticated calls.|
|x-fapi-customer-ip-address|header|string|optional||The customer's original IP address if the customer is currently logged in to the Data Recipient Software Product. The presence of this header indicates that the API is being called in a customer present context. Not to be included for unauthenticated calls.|
|x-cds-client-headers|header|[Base64](#common-field-types)|conditional||The customer's original standard http headers [Base64](#common-field-types) encoded, including the original User-Agent header, if the customer is currently logged in to the Data Recipient Software Product. Mandatory for customer present calls. Not required for unattended or unauthenticated calls.|

> Example responses

> 200 Response

```json
{
  "data": {
    "transactions": [
      {
        "accountId": "string",
        "transactionId": "string",
        "isDetailAvailable": true,
        "type": "DIRECT_DEBIT",
        "status": "PENDING",
        "description": "string",
        "postingDateTime": "string",
        "valueDateTime": "string",
        "executionDateTime": "string",
        "amount": "string",
        "currency": "AUD",
        "reference": "string",
        "merchantName": "string",
        "merchantCategoryCode": "string",
        "billerCode": "string",
        "billerName": "string",
        "crn": "string",
        "apcaNumber": "string"
      }
    ]
  },
  "links": {
    "self": "string",
    "first": "string",
    "prev": "string",
    "next": "string",
    "last": "string"
  },
  "meta": {
    "totalRecords": 0,
    "totalPages": 0,
    "isQueryParamUnsupported": false
  }
}
```

<h3 id="cdr-banking-api-modified-for-dp306-_get-transactions-for-account_responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[ResponseBankingTransactionList](#schemacdr-banking-api-modified-for-dp306-responsebankingtransactionlist)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The following error codes **MUST** be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Missing Required Field](#error-400-field-missing)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li><li>[400 - Invalid Page Size](#error-400-field-invalid-page-size)</li><li>[400 - Invalid Date](#error-400-field-invalid-date-time)</li></ul>|[ResponseErrorListV2](#schemacdr-banking-api-modified-for-dp306-responseerrorlistv2)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The following error codes **MUST** be supported:<br/><ul class="error-code-list"><li>[404 - Unavailable Banking Account](#error-404-authorisation-unavailable-banking-account)</li><li>[404 - Invalid Banking Account](#error-404-authorisation-invalid-banking-account)</li></ul>|[ResponseErrorListV2](#schemacdr-banking-api-modified-for-dp306-responseerrorlistv2)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|The following error codes **MUST** be supported:<br/><ul class="error-code-list"><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|[ResponseErrorListV2](#schemacdr-banking-api-modified-for-dp306-responseerrorlistv2)|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|The following error codes **MUST** be supported:<br/><ul class="error-code-list"><li>[422 - Invalid Page](#error-422-field-invalid-page)</li></ul>|[ResponseErrorListV2](#schemacdr-banking-api-modified-for-dp306-responseerrorlistv2)|

<h3 id="cdr-banking-api-modified-for-dp306-_get-transactions-for-account_response-headers">Response Headers</h3>

|Status|Header|Type|Required|Description|
|---|---|---|---|---|
|200|x-v|string|mandatory|The [payload version](#response-headers) that the endpoint has responded with.|
|200|x-fapi-interaction-id|string|mandatory|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|400|x-fapi-interaction-id|string|mandatory|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|404|x-fapi-interaction-id|string|mandatory|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|406|x-fapi-interaction-id|string|mandatory|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|422|x-fapi-interaction-id|string|mandatory|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|

  
    
      <aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
<a href="#authorisation-scopes">bank:transactions:read.</a>
</aside>

    
  

<h2 id="cdr-banking-api-modified-for-dp306-_get-transaction-detail">Get Transaction Detail</h2>
<p id="get-transaction-detail" class="orig-anchor"></p>

> Code samples

```http
GET https://mtls.dh.example.com/cds-au/v1/banking/accounts/{accountId}/transactions/{transactionId} HTTP/1.1
Host: mtls.dh.example.com
Accept: application/json
x-v: string
x-min-v: string
x-fapi-interaction-id: string
x-fapi-auth-date: string
x-fapi-customer-ip-address: string
x-cds-client-headers: string
```

```javascript--nodejs
const fetch = require('node-fetch');
const headers = {
  'Accept':'application/json',
  'x-v':'string',
  'x-min-v':'string',
  'x-fapi-interaction-id':'string',
  'x-fapi-auth-date':'string',
  'x-fapi-customer-ip-address':'string',
  'x-cds-client-headers':'string'
};

fetch('https://mtls.dh.example.com/cds-au/v1/banking/accounts/{accountId}/transactions/{transactionId}', {
  method: 'GET',
  headers: headers
}).then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

`GET /banking/accounts/{accountId}/transactions/{transactionId}`

Obtain detailed information on a transaction for a specific account.

<h3 id="cdr-banking-api-modified-for-dp306-_get-transaction-detail_endpoint-version">Endpoint Version</h3>
|   |  |
|---|--|
|Version|**1**

<h3 id="cdr-banking-api-modified-for-dp306-_get-transaction-detail_parameters">Parameters</h3>

|Name|In|Type|Required|Default|Description|
|---|---|---|---|---|---|
|accountId|path|[BankingAccountId](#schemacdr-banking-api-modified-for-dp306-bankingaccountid)|mandatory||The _accountId_ to obtain data for. _accountId_ values are returned by account list endpoints.|
|transactionId|path|[BankingTransactionId](#schemacdr-banking-api-modified-for-dp306-bankingtransactionid)|mandatory||The _transactionId_ to obtain data for. _transactionId_ values are returned by transaction list endpoints.|
|x-v|header|string|mandatory||Version of the API endpoint requested by the client. Must be set to a positive integer. The endpoint should respond with the highest supported version between [_x-min-v_](#request-headers) and [_x-v_](#request-headers). If the value of [_x-min-v_](#request-headers) is equal to or higher than the value of [_x-v_](#request-headers) then the [_x-min-v_](#request-headers) header should be treated as absent. If all versions requested are not supported then the endpoint **MUST** respond with a `406 Not Acceptable`. See [HTTP Headers](#request-headers).|
|x-min-v|header|string|optional||Minimum version of the API endpoint requested by the client. Must be set to a positive integer if provided. The endpoint should respond with the highest supported version between [_x-min-v_](#request-headers) and [_x-v_](#request-headers). If all versions requested are not supported then the endpoint **MUST** respond with a `406 Not Acceptable`.|
|x-fapi-interaction-id|header|string|optional||An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|x-fapi-auth-date|header|string|conditional||The time when the customer last logged in to the Data Recipient Software Product as described in **[[FAPI-1.0-Baseline]](#nref-FAPI-1-0-Baseline)**. Required for all resource calls (customer present and unattended). Not required for unauthenticated calls.|
|x-fapi-customer-ip-address|header|string|optional||The customer's original IP address if the customer is currently logged in to the Data Recipient Software Product. The presence of this header indicates that the API is being called in a customer present context. Not to be included for unauthenticated calls.|
|x-cds-client-headers|header|[Base64](#common-field-types)|conditional||The customer's original standard http headers [Base64](#common-field-types) encoded, including the original User-Agent header, if the customer is currently logged in to the Data Recipient Software Product. Mandatory for customer present calls. Not required for unattended or unauthenticated calls.|

> Example responses

> 200 Response

```json
{
  "data": {
    "accountId": "string",
    "transactionId": "string",
    "isDetailAvailable": true,
    "type": "DIRECT_DEBIT",
    "status": "PENDING",
    "description": "string",
    "postingDateTime": "string",
    "valueDateTime": "string",
    "executionDateTime": "string",
    "amount": "string",
    "currency": "AUD",
    "reference": "string",
    "merchantName": "string",
    "merchantCategoryCode": "string",
    "billerCode": "string",
    "billerName": "string",
    "crn": "string",
    "apcaNumber": "string",
    "extendedData": {
      "payer": "string",
      "payee": "string",
      "extensionUType": "x2p101Payload",
      "x2p101Payload": {
        "extendedDescription": "string",
        "endToEndId": "string",
        "purposeCode": "string"
      },
      "service": "X2P1.01"
    }
  },
  "links": {
    "self": "string"
  },
  "meta": {}
}
```

<h3 id="cdr-banking-api-modified-for-dp306-_get-transaction-detail_responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[ResponseBankingTransactionById](#schemacdr-banking-api-modified-for-dp306-responsebankingtransactionbyid)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The following error codes **MUST** be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Missing Required Field](#error-400-field-missing)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li><li>[400 - Invalid Date](#error-400-field-invalid-date-time)</li></ul>|[ResponseErrorListV2](#schemacdr-banking-api-modified-for-dp306-responseerrorlistv2)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The following error codes **MUST** be supported:<br/><ul class="error-code-list"><li>[404 - Unavailable Banking Account](#error-404-authorisation-unavailable-banking-account)</li><li>[404 - Invalid Banking Account](#error-404-authorisation-invalid-banking-account)</li><li>[404 - Unavailable Resource](#error-404-resource-unavailable)</li><li>[404 - Invalid Resource](#error-404-resource-invalid)</li></ul>|[ResponseErrorListV2](#schemacdr-banking-api-modified-for-dp306-responseerrorlistv2)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|The following error codes **MUST** be supported:<br/><ul class="error-code-list"><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|[ResponseErrorListV2](#schemacdr-banking-api-modified-for-dp306-responseerrorlistv2)|

<h3 id="cdr-banking-api-modified-for-dp306-_get-transaction-detail_response-headers">Response Headers</h3>

|Status|Header|Type|Required|Description|
|---|---|---|---|---|
|200|x-v|string|mandatory|The [payload version](#response-headers) that the endpoint has responded with.|
|200|x-fapi-interaction-id|string|mandatory|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|400|x-fapi-interaction-id|string|mandatory|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|404|x-fapi-interaction-id|string|mandatory|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|406|x-fapi-interaction-id|string|mandatory|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|

  
    
      <aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
<a href="#authorisation-scopes">bank:transactions:read.</a>
</aside>

    
  

<!-- Endpoint tag group description -->
<!-- Banking Account Direct Debit endpoints -->

<h2 id="cdr-banking-api-modified-for-dp306-_get-direct-debits-for-account">Get Direct Debits For Account</h2>
<p id="get-direct-debits-for-account" class="orig-anchor"></p>

> Code samples

```http
GET https://mtls.dh.example.com/cds-au/v1/banking/accounts/{accountId}/direct-debits HTTP/1.1
Host: mtls.dh.example.com
Accept: application/json
x-v: string
x-min-v: string
x-fapi-interaction-id: string
x-fapi-auth-date: string
x-fapi-customer-ip-address: string
x-cds-client-headers: string
```

```javascript--nodejs
const fetch = require('node-fetch');
const headers = {
  'Accept':'application/json',
  'x-v':'string',
  'x-min-v':'string',
  'x-fapi-interaction-id':'string',
  'x-fapi-auth-date':'string',
  'x-fapi-customer-ip-address':'string',
  'x-cds-client-headers':'string'
};

fetch('https://mtls.dh.example.com/cds-au/v1/banking/accounts/{accountId}/direct-debits', {
  method: 'GET',
  headers: headers
}).then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

`GET /banking/accounts/{accountId}/direct-debits`

Obtain direct debit authorisations for a specific account.

<h3 id="cdr-banking-api-modified-for-dp306-_get-direct-debits-for-account_endpoint-version">Endpoint Version</h3>
|   |  |
|---|--|
|Version|**1**

<h3 id="cdr-banking-api-modified-for-dp306-_get-direct-debits-for-account_parameters">Parameters</h3>

|Name|In|Type|Required|Default|Description|
|---|---|---|---|---|---|
|accountId|path|[BankingAccountId](#schemacdr-banking-api-modified-for-dp306-bankingaccountid)|mandatory||The _accountId_ to obtain data for. _accountId_ values are returned by account list endpoints.|
|page|query|[PositiveInteger](#common-field-types)|optional|`1`|Page of results to request (standard pagination).|
|page-size|query|[PositiveInteger](#common-field-types)|optional|`25`|Page size to request. Default is 25 (standard pagination).|
|x-v|header|string|mandatory||Version of the API endpoint requested by the client. Must be set to a positive integer. The endpoint should respond with the highest supported version between [_x-min-v_](#request-headers) and [_x-v_](#request-headers). If the value of [_x-min-v_](#request-headers) is equal to or higher than the value of [_x-v_](#request-headers) then the [_x-min-v_](#request-headers) header should be treated as absent. If all versions requested are not supported then the endpoint **MUST** respond with a `406 Not Acceptable`. See [HTTP Headers](#request-headers).|
|x-min-v|header|string|optional||Minimum version of the API endpoint requested by the client. Must be set to a positive integer if provided. The endpoint should respond with the highest supported version between [_x-min-v_](#request-headers) and [_x-v_](#request-headers). If all versions requested are not supported then the endpoint **MUST** respond with a `406 Not Acceptable`.|
|x-fapi-interaction-id|header|string|optional||An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|x-fapi-auth-date|header|string|conditional||The time when the customer last logged in to the Data Recipient Software Product as described in **[[FAPI-1.0-Baseline]](#nref-FAPI-1-0-Baseline)**. Required for all resource calls (customer present and unattended). Not required for unauthenticated calls.|
|x-fapi-customer-ip-address|header|string|optional||The customer's original IP address if the customer is currently logged in to the Data Recipient Software Product. The presence of this header indicates that the API is being called in a customer present context. Not to be included for unauthenticated calls.|
|x-cds-client-headers|header|[Base64](#common-field-types)|conditional||The customer's original standard http headers [Base64](#common-field-types) encoded, including the original User-Agent header, if the customer is currently logged in to the Data Recipient Software Product. Mandatory for customer present calls. Not required for unattended or unauthenticated calls.|

> Example responses

> 200 Response

```json
{
  "data": {
    "directDebitAuthorisations": [
      {
        "accountId": "string",
        "authorisedEntity": {
          "description": "string",
          "financialInstitution": "string",
          "abn": "string",
          "acn": "string",
          "arbn": "string"
        },
        "lastDebitDateTime": "string",
        "lastDebitAmount": "string"
      }
    ]
  },
  "links": {
    "self": "string",
    "first": "string",
    "prev": "string",
    "next": "string",
    "last": "string"
  },
  "meta": {
    "totalRecords": 0,
    "totalPages": 0
  }
}
```

<h3 id="cdr-banking-api-modified-for-dp306-_get-direct-debits-for-account_responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[ResponseBankingDirectDebitAuthorisationList](#schemacdr-banking-api-modified-for-dp306-responsebankingdirectdebitauthorisationlist)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The following error codes **MUST** be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Missing Required Field](#error-400-field-missing)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li><li>[400 - Invalid Page Size](#error-400-field-invalid-page-size)</li></ul>|[ResponseErrorListV2](#schemacdr-banking-api-modified-for-dp306-responseerrorlistv2)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The following error codes **MUST** be supported:<br/><ul class="error-code-list"><li>[404 - Unavailable Banking Account](#error-404-authorisation-unavailable-banking-account)</li><li>[404 - Invalid Banking Account](#error-404-authorisation-invalid-banking-account)</li></ul>|[ResponseErrorListV2](#schemacdr-banking-api-modified-for-dp306-responseerrorlistv2)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|The following error codes **MUST** be supported:<br/><ul class="error-code-list"><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|[ResponseErrorListV2](#schemacdr-banking-api-modified-for-dp306-responseerrorlistv2)|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|The following error codes **MUST** be supported:<br/><ul class="error-code-list"><li>[422 - Invalid Page](#error-422-field-invalid-page)</li></ul>|[ResponseErrorListV2](#schemacdr-banking-api-modified-for-dp306-responseerrorlistv2)|

<h3 id="cdr-banking-api-modified-for-dp306-_get-direct-debits-for-account_response-headers">Response Headers</h3>

|Status|Header|Type|Required|Description|
|---|---|---|---|---|
|200|x-v|string|mandatory|The [payload version](#response-headers) that the endpoint has responded with.|
|200|x-fapi-interaction-id|string|mandatory|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|400|x-fapi-interaction-id|string|mandatory|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|404|x-fapi-interaction-id|string|mandatory|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|406|x-fapi-interaction-id|string|mandatory|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|422|x-fapi-interaction-id|string|mandatory|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|

  
    
      <aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
<a href="#authorisation-scopes">bank:regular_payments:read.</a>
</aside>

    
  

<h2 id="cdr-banking-api-modified-for-dp306-_get-bulk-direct-debits">Get Bulk Direct Debits</h2>
<p id="get-bulk-direct-debits" class="orig-anchor"></p>

> Code samples

```http
GET https://mtls.dh.example.com/cds-au/v1/banking/accounts/direct-debits HTTP/1.1
Host: mtls.dh.example.com
Accept: application/json
x-v: string
x-min-v: string
x-fapi-interaction-id: string
x-fapi-auth-date: string
x-fapi-customer-ip-address: string
x-cds-client-headers: string
```

```javascript--nodejs
const fetch = require('node-fetch');
const headers = {
  'Accept':'application/json',
  'x-v':'string',
  'x-min-v':'string',
  'x-fapi-interaction-id':'string',
  'x-fapi-auth-date':'string',
  'x-fapi-customer-ip-address':'string',
  'x-cds-client-headers':'string'
};

fetch('https://mtls.dh.example.com/cds-au/v1/banking/accounts/direct-debits', {
  method: 'GET',
  headers: headers
}).then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

`GET /banking/accounts/direct-debits`

Obtain direct debit authorisations for multiple, filtered accounts.

Obsolete versions: [v1](../../../../includes/obsolete/get-bulk-direct-debits-v1.html).

<h3 id="cdr-banking-api-modified-for-dp306-_get-bulk-direct-debits_endpoint-version">Endpoint Version</h3>
|   |  |
|---|--|
|Version|**2**

<h3 id="cdr-banking-api-modified-for-dp306-_get-bulk-direct-debits_parameters">Parameters</h3>

|Name|In|Type|Required|Default|Description|
|---|---|---|---|---|---|
|product-category|query|[BankingProductCategoryV2](#schemacdr-banking-api-modified-for-dp306-bankingproductcategoryv2)|optional||Used to filter results on the _productCategory_ field applicable to accounts. Any one of the valid values for this field can be supplied. If absent then all accounts returned.|
|open-status|query|[Enum](#common-field-types)|optional|`ALL`|Used to filter results according to open/closed status. Values can be `OPEN`, `CLOSED` or `ALL`. If absent then `ALL` is assumed.|
|is-owned|query|[Boolean](#common-field-types)|optional||Filters accounts based on whether they are owned by the authorised customer. `true` for owned accounts, `false` for unowned accounts and absent for all accounts.|
|page|query|[PositiveInteger](#common-field-types)|optional|`1`|Page of results to request (standard pagination).|
|page-size|query|[PositiveInteger](#common-field-types)|optional|`25`|Page size to request. Default is 25 (standard pagination).|
|x-v|header|string|mandatory||Version of the API endpoint requested by the client. Must be set to a positive integer. The endpoint should respond with the highest supported version between [_x-min-v_](#request-headers) and [_x-v_](#request-headers). If the value of [_x-min-v_](#request-headers) is equal to or higher than the value of [_x-v_](#request-headers) then the [_x-min-v_](#request-headers) header should be treated as absent. If all versions requested are not supported then the endpoint **MUST** respond with a `406 Not Acceptable`. See [HTTP Headers](#request-headers).|
|x-min-v|header|string|optional||Minimum version of the API endpoint requested by the client. Must be set to a positive integer if provided. The endpoint should respond with the highest supported version between [_x-min-v_](#request-headers) and [_x-v_](#request-headers). If all versions requested are not supported then the endpoint **MUST** respond with a `406 Not Acceptable`.|
|x-fapi-interaction-id|header|string|optional||An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|x-fapi-auth-date|header|string|conditional||The time when the customer last logged in to the Data Recipient Software Product as described in **[[FAPI-1.0-Baseline]](#nref-FAPI-1-0-Baseline)**. Required for all resource calls (customer present and unattended). Not required for unauthenticated calls.|
|x-fapi-customer-ip-address|header|string|optional||The customer's original IP address if the customer is currently logged in to the Data Recipient Software Product. The presence of this header indicates that the API is being called in a customer present context. Not to be included for unauthenticated calls.|
|x-cds-client-headers|header|[Base64](#common-field-types)|conditional||The customer's original standard http headers [Base64](#common-field-types) encoded, including the original User-Agent header, if the customer is currently logged in to the Data Recipient Software Product. Mandatory for customer present calls. Not required for unattended or unauthenticated calls.|

<h4 id="cdr-banking-api-modified-for-dp306-_get-bulk-direct-debits_enumerated-values-parameters">Enumerated Values</h4>

|Parameter|Value|
|---|---|
|product-category|BUSINESS_LOANS|
|product-category|BUY_NOW_PAY_LATER|
|product-category|CRED_AND_CHRG_CARDS|
|product-category|LEASES|
|product-category|MARGIN_LOANS|
|product-category|OVERDRAFTS|
|product-category|PERS_LOANS|
|product-category|REGULATED_TRUST_ACCOUNTS|
|product-category|RESIDENTIAL_MORTGAGES|
|product-category|TERM_DEPOSITS|
|product-category|TRADE_FINANCE|
|product-category|TRANS_AND_SAVINGS_ACCOUNTS|
|product-category|TRAVEL_CARDS|
|open-status|ALL|
|open-status|CLOSED|
|open-status|OPEN|

> Example responses

> 200 Response

```json
{
  "data": {
    "directDebitAuthorisations": [
      {
        "accountId": "string",
        "authorisedEntity": {
          "description": "string",
          "financialInstitution": "string",
          "abn": "string",
          "acn": "string",
          "arbn": "string"
        },
        "lastDebitDateTime": "string",
        "lastDebitAmount": "string"
      }
    ]
  },
  "links": {
    "self": "string",
    "first": "string",
    "prev": "string",
    "next": "string",
    "last": "string"
  },
  "meta": {
    "totalRecords": 0,
    "totalPages": 0
  }
}
```

<h3 id="cdr-banking-api-modified-for-dp306-_get-bulk-direct-debits_responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[ResponseBankingDirectDebitAuthorisationList](#schemacdr-banking-api-modified-for-dp306-responsebankingdirectdebitauthorisationlist)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The following error codes **MUST** be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Missing Required Field](#error-400-field-missing)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li><li>[400 - Invalid Page Size](#error-400-field-invalid-page-size)</li></ul>|[ResponseErrorListV2](#schemacdr-banking-api-modified-for-dp306-responseerrorlistv2)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|The following error codes **MUST** be supported:<br/><ul class="error-code-list"><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|[ResponseErrorListV2](#schemacdr-banking-api-modified-for-dp306-responseerrorlistv2)|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|The following error codes **MUST** be supported:<br/><ul class="error-code-list"><li>[422 - Invalid Page](#error-422-field-invalid-page)</li></ul>|[ResponseErrorListV2](#schemacdr-banking-api-modified-for-dp306-responseerrorlistv2)|

<h3 id="cdr-banking-api-modified-for-dp306-_get-bulk-direct-debits_response-headers">Response Headers</h3>

|Status|Header|Type|Required|Description|
|---|---|---|---|---|
|200|x-v|string|mandatory|The [payload version](#response-headers) that the endpoint has responded with.|
|200|x-fapi-interaction-id|string|mandatory|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|400|x-fapi-interaction-id|string|mandatory|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|406|x-fapi-interaction-id|string|mandatory|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|422|x-fapi-interaction-id|string|mandatory|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|

  
    
      <aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
<a href="#authorisation-scopes">bank:regular_payments:read.</a>
</aside>

    
  

<h2 id="cdr-banking-api-modified-for-dp306-_get-direct-debits-for-specific-accounts">Get Direct Debits For Specific Accounts</h2>
<p id="get-direct-debits-for-specific-accounts" class="orig-anchor"></p>

> Code samples

```http
POST https://mtls.dh.example.com/cds-au/v1/banking/accounts/direct-debits HTTP/1.1
Host: mtls.dh.example.com
Content-Type: application/json
Accept: application/json
x-v: string
x-min-v: string
x-fapi-interaction-id: string
x-fapi-auth-date: string
x-fapi-customer-ip-address: string
x-cds-client-headers: string
```

```javascript--nodejs
const fetch = require('node-fetch');
const inputBody = '{
  "data": {
    "accountIds": [
      "string"
    ]
  },
  "meta": {}
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'x-v':'string',
  'x-min-v':'string',
  'x-fapi-interaction-id':'string',
  'x-fapi-auth-date':'string',
  'x-fapi-customer-ip-address':'string',
  'x-cds-client-headers':'string'
};

fetch('https://mtls.dh.example.com/cds-au/v1/banking/accounts/direct-debits', {
  method: 'POST',
  body: inputBody,
  headers: headers
}).then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

`POST /banking/accounts/direct-debits`

Obtain direct debit authorisations for a specified list of accounts.

> Body parameter

```json
{
  "data": {
    "accountIds": [
      "string"
    ]
  },
  "meta": {}
}
```

<h3 id="cdr-banking-api-modified-for-dp306-_get-direct-debits-for-specific-accounts_endpoint-version">Endpoint Version</h3>
|   |  |
|---|--|
|Version|**1**

<h3 id="cdr-banking-api-modified-for-dp306-_get-direct-debits-for-specific-accounts_parameters">Parameters</h3>

|Name|In|Type|Required|Default|Description|
|---|---|---|---|---|---|
|page|query|[PositiveInteger](#common-field-types)|optional|`1`|Page of results to request (standard pagination).|
|page-size|query|[PositiveInteger](#common-field-types)|optional|`25`|Page size to request. Default is 25 (standard pagination).|
|x-v|header|string|mandatory||Version of the API endpoint requested by the client. Must be set to a positive integer. The endpoint should respond with the highest supported version between [_x-min-v_](#request-headers) and [_x-v_](#request-headers). If the value of [_x-min-v_](#request-headers) is equal to or higher than the value of [_x-v_](#request-headers) then the [_x-min-v_](#request-headers) header should be treated as absent. If all versions requested are not supported then the endpoint **MUST** respond with a `406 Not Acceptable`. See [HTTP Headers](#request-headers).|
|x-min-v|header|string|optional||Minimum version of the API endpoint requested by the client. Must be set to a positive integer if provided. The endpoint should respond with the highest supported version between [_x-min-v_](#request-headers) and [_x-v_](#request-headers). If all versions requested are not supported then the endpoint **MUST** respond with a `406 Not Acceptable`.|
|x-fapi-interaction-id|header|string|optional||An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|x-fapi-auth-date|header|string|conditional||The time when the customer last logged in to the Data Recipient Software Product as described in **[[FAPI-1.0-Baseline]](#nref-FAPI-1-0-Baseline)**. Required for all resource calls (customer present and unattended). Not required for unauthenticated calls.|
|x-fapi-customer-ip-address|header|string|optional||The customer's original IP address if the customer is currently logged in to the Data Recipient Software Product. The presence of this header indicates that the API is being called in a customer present context. Not to be included for unauthenticated calls.|
|x-cds-client-headers|header|[Base64](#common-field-types)|conditional||The customer's original standard http headers [Base64](#common-field-types) encoded, including the original User-Agent header, if the customer is currently logged in to the Data Recipient Software Product. Mandatory for customer present calls. Not required for unattended or unauthenticated calls.|
|body|body|[RequestAccountIdListV1](#schemacdr-banking-api-modified-for-dp306-requestaccountidlistv1)|mandatory||Request payload containing a list of _accountId_ values to obtain data for.|

> Example responses

> 200 Response

```json
{
  "data": {
    "directDebitAuthorisations": [
      {
        "accountId": "string",
        "authorisedEntity": {
          "description": "string",
          "financialInstitution": "string",
          "abn": "string",
          "acn": "string",
          "arbn": "string"
        },
        "lastDebitDateTime": "string",
        "lastDebitAmount": "string"
      }
    ]
  },
  "links": {
    "self": "string",
    "first": "string",
    "prev": "string",
    "next": "string",
    "last": "string"
  },
  "meta": {
    "totalRecords": 0,
    "totalPages": 0
  }
}
```

<h3 id="cdr-banking-api-modified-for-dp306-_get-direct-debits-for-specific-accounts_responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[ResponseBankingDirectDebitAuthorisationList](#schemacdr-banking-api-modified-for-dp306-responsebankingdirectdebitauthorisationlist)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The following error codes **MUST** be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Missing Required Field](#error-400-field-missing)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li><li>[400 - Invalid Page Size](#error-400-field-invalid-page-size)</li></ul>|[ResponseErrorListV2](#schemacdr-banking-api-modified-for-dp306-responseerrorlistv2)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|The following error codes **MUST** be supported:<br/><ul class="error-code-list"><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|[ResponseErrorListV2](#schemacdr-banking-api-modified-for-dp306-responseerrorlistv2)|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|The following error codes **MUST** be supported:<br/><ul class="error-code-list"><li>[422 - Invalid Page](#error-422-field-invalid-page)</li><li>[422 - Unavailable Banking Account](#error-422-authorisation-unavailable-banking-account)</li><li>[422 - Invalid Banking Account](#error-422-authorisation-invalid-banking-account)</li></ul>|[ResponseErrorListV2](#schemacdr-banking-api-modified-for-dp306-responseerrorlistv2)|

<h3 id="cdr-banking-api-modified-for-dp306-_get-direct-debits-for-specific-accounts_response-headers">Response Headers</h3>

|Status|Header|Type|Required|Description|
|---|---|---|---|---|
|200|x-v|string|mandatory|The [payload version](#response-headers) that the endpoint has responded with.|
|200|x-fapi-interaction-id|string|mandatory|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|400|x-fapi-interaction-id|string|mandatory|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|406|x-fapi-interaction-id|string|mandatory|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|422|x-fapi-interaction-id|string|mandatory|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|

  
    
      <aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
<a href="#authorisation-scopes">bank:regular_payments:read.</a>
</aside>

    
  

<!-- Endpoint tag group description -->
<!-- Banking Account Scheduled Payment endpoints -->

<h2 id="cdr-banking-api-modified-for-dp306-_get-scheduled-payments-for-account">Get Scheduled Payments for Account</h2>
<p id="get-scheduled-payments-for-account" class="orig-anchor"></p>

> Code samples

```http
GET https://mtls.dh.example.com/cds-au/v1/banking/accounts/{accountId}/payments/scheduled HTTP/1.1
Host: mtls.dh.example.com
Accept: application/json
x-v: string
x-min-v: string
x-fapi-interaction-id: string
x-fapi-auth-date: string
x-fapi-customer-ip-address: string
x-cds-client-headers: string
```

```javascript--nodejs
const fetch = require('node-fetch');
const headers = {
  'Accept':'application/json',
  'x-v':'string',
  'x-min-v':'string',
  'x-fapi-interaction-id':'string',
  'x-fapi-auth-date':'string',
  'x-fapi-customer-ip-address':'string',
  'x-cds-client-headers':'string'
};

fetch('https://mtls.dh.example.com/cds-au/v1/banking/accounts/{accountId}/payments/scheduled', {
  method: 'GET',
  headers: headers
}).then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

`GET /banking/accounts/{accountId}/payments/scheduled`

Obtain scheduled, outgoing payments for a specific account.

Obsolete versions: [v1](../../../../includes/obsolete/get-scheduled-payments-for-account-v1.html).

<h3 id="cdr-banking-api-modified-for-dp306-_get-scheduled-payments-for-account_endpoint-version">Endpoint Version</h3>
|   |  |
|---|--|
|Version|**2**

<h3 id="cdr-banking-api-modified-for-dp306-_get-scheduled-payments-for-account_parameters">Parameters</h3>

|Name|In|Type|Required|Default|Description|
|---|---|---|---|---|---|
|accountId|path|[BankingAccountId](#schemacdr-banking-api-modified-for-dp306-bankingaccountid)|mandatory||The _accountId_ to obtain data for. _accountId_ values are returned by account list endpoints.|
|page|query|[PositiveInteger](#common-field-types)|optional|`1`|Page of results to request (standard pagination).|
|page-size|query|[PositiveInteger](#common-field-types)|optional|`25`|Page size to request. Default is 25 (standard pagination).|
|x-v|header|string|mandatory||Version of the API endpoint requested by the client. Must be set to a positive integer. The endpoint should respond with the highest supported version between [_x-min-v_](#request-headers) and [_x-v_](#request-headers). If the value of [_x-min-v_](#request-headers) is equal to or higher than the value of [_x-v_](#request-headers) then the [_x-min-v_](#request-headers) header should be treated as absent. If all versions requested are not supported then the endpoint **MUST** respond with a `406 Not Acceptable`. See [HTTP Headers](#request-headers).|
|x-min-v|header|string|optional||Minimum version of the API endpoint requested by the client. Must be set to a positive integer if provided. The endpoint should respond with the highest supported version between [_x-min-v_](#request-headers) and [_x-v_](#request-headers). If all versions requested are not supported then the endpoint **MUST** respond with a `406 Not Acceptable`.|
|x-fapi-interaction-id|header|string|optional||An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|x-fapi-auth-date|header|string|conditional||The time when the customer last logged in to the Data Recipient Software Product as described in **[[FAPI-1.0-Baseline]](#nref-FAPI-1-0-Baseline)**. Required for all resource calls (customer present and unattended). Not required for unauthenticated calls.|
|x-fapi-customer-ip-address|header|string|optional||The customer's original IP address if the customer is currently logged in to the Data Recipient Software Product. The presence of this header indicates that the API is being called in a customer present context. Not to be included for unauthenticated calls.|
|x-cds-client-headers|header|[Base64](#common-field-types)|conditional||The customer's original standard http headers [Base64](#common-field-types) encoded, including the original User-Agent header, if the customer is currently logged in to the Data Recipient Software Product. Mandatory for customer present calls. Not required for unattended or unauthenticated calls.|

> Example responses

> 200 Response

```json
{
  "data": {
    "scheduledPayments": [
      {
        "scheduledPaymentId": "string",
        "nickname": "string",
        "payerReference": "string",
        "payeeReference": "string",
        "status": "ACTIVE",
        "from": {
          "accountId": "string"
        },
        "paymentSet": [
          {
            "to": {
              "toUType": "accountId",
              "accountId": "string",
              "payeeId": "string",
              "nickname": "string",
              "payeeReference": "string",
              "digitalWallet": {
                "name": "string",
                "identifier": "string",
                "type": "EMAIL",
                "provider": "PAYPAL_AU"
              },
              "domestic": {
                "payeeAccountUType": "account",
                "account": {
                  "accountName": "string",
                  "bsb": "string",
                  "accountNumber": "string"
                },
                "card": {
                  "cardNumber": "string"
                },
                "payId": {
                  "name": "string",
                  "identifier": "string",
                  "type": "ABN"
                }
              },
              "biller": {
                "billerCode": "string",
                "crn": "string",
                "billerName": "string"
              },
              "international": {
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
                  "routingNumber": "string",
                  "legalEntityIdentifier": "string"
                }
              }
            },
            "isAmountCalculated": false,
            "amount": "string",
            "currency": "AUD"
          }
        ],
        "recurrence": {
          "nextPaymentDate": "string",
          "recurrenceUType": "eventBased",
          "onceOff": {
            "paymentDate": "string"
          },
          "intervalSchedule": {
            "finalPaymentDate": "string",
            "paymentsRemaining": 1,
            "nonBusinessDayTreatment": "AFTER",
            "intervals": [
              {
                "interval": "string",
                "dayInInterval": "string"
              }
            ]
          },
          "lastWeekDay": {
            "finalPaymentDate": "string",
            "paymentsRemaining": 1,
            "interval": "string",
            "lastWeekDay": "FRI",
            "nonBusinessDayTreatment": "AFTER"
          },
          "eventBased": {
            "description": "string"
          }
        }
      }
    ]
  },
  "links": {
    "self": "string",
    "first": "string",
    "prev": "string",
    "next": "string",
    "last": "string"
  },
  "meta": {
    "totalRecords": 0,
    "totalPages": 0
  }
}
```

<h3 id="cdr-banking-api-modified-for-dp306-_get-scheduled-payments-for-account_responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[ResponseBankingScheduledPaymentsListV2](#schemacdr-banking-api-modified-for-dp306-responsebankingscheduledpaymentslistv2)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The following error codes **MUST** be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Missing Required Field](#error-400-field-missing)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li><li>[400 - Invalid Page Size](#error-400-field-invalid-page-size)</li></ul>|[ResponseErrorListV2](#schemacdr-banking-api-modified-for-dp306-responseerrorlistv2)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The following error codes **MUST** be supported:<br/><ul class="error-code-list"><li>[404 - Unavailable Banking Account](#error-404-authorisation-unavailable-banking-account)</li><li>[404 - Invalid Banking Account](#error-404-authorisation-invalid-banking-account)</li></ul>|[ResponseErrorListV2](#schemacdr-banking-api-modified-for-dp306-responseerrorlistv2)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|The following error codes **MUST** be supported:<br/><ul class="error-code-list"><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|[ResponseErrorListV2](#schemacdr-banking-api-modified-for-dp306-responseerrorlistv2)|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|The following error codes **MUST** be supported:<br/><ul class="error-code-list"><li>[422 - Invalid Page](#error-422-field-invalid-page)</li></ul>|[ResponseErrorListV2](#schemacdr-banking-api-modified-for-dp306-responseerrorlistv2)|

<h3 id="cdr-banking-api-modified-for-dp306-_get-scheduled-payments-for-account_response-headers">Response Headers</h3>

|Status|Header|Type|Required|Description|
|---|---|---|---|---|
|200|x-v|string|mandatory|The [payload version](#response-headers) that the endpoint has responded with.|
|200|x-fapi-interaction-id|string|mandatory|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|400|x-fapi-interaction-id|string|mandatory|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|404|x-fapi-interaction-id|string|mandatory|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|406|x-fapi-interaction-id|string|mandatory|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|422|x-fapi-interaction-id|string|mandatory|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|

  
    
      <aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
<a href="#authorisation-scopes">bank:regular_payments:read.</a>
</aside>

    
  

<h2 id="cdr-banking-api-modified-for-dp306-_get-scheduled-payments-bulk">Get Scheduled Payments Bulk</h2>
<p id="get-scheduled-payments-bulk" class="orig-anchor"></p>

> Code samples

```http
GET https://mtls.dh.example.com/cds-au/v1/banking/payments/scheduled HTTP/1.1
Host: mtls.dh.example.com
Accept: application/json
x-v: string
x-min-v: string
x-fapi-interaction-id: string
x-fapi-auth-date: string
x-fapi-customer-ip-address: string
x-cds-client-headers: string
```

```javascript--nodejs
const fetch = require('node-fetch');
const headers = {
  'Accept':'application/json',
  'x-v':'string',
  'x-min-v':'string',
  'x-fapi-interaction-id':'string',
  'x-fapi-auth-date':'string',
  'x-fapi-customer-ip-address':'string',
  'x-cds-client-headers':'string'
};

fetch('https://mtls.dh.example.com/cds-au/v1/banking/payments/scheduled', {
  method: 'GET',
  headers: headers
}).then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

`GET /banking/payments/scheduled`

Obtain scheduled payments for multiple, filtered accounts that are the source of funds for the payments.

Obsolete versions: [v1](../../../../includes/obsolete/get-scheduled-payments-bulk-v1.html), [v2](../../../../includes/obsolete/get-scheduled-payments-bulk-v2.html).

<h3 id="cdr-banking-api-modified-for-dp306-_get-scheduled-payments-bulk_endpoint-version">Endpoint Version</h3>
|   |  |
|---|--|
|Version|**3**

<h3 id="cdr-banking-api-modified-for-dp306-_get-scheduled-payments-bulk_parameters">Parameters</h3>

|Name|In|Type|Required|Default|Description|
|---|---|---|---|---|---|
|product-category|query|[BankingProductCategoryV2](#schemacdr-banking-api-modified-for-dp306-bankingproductcategoryv2)|optional||Used to filter results on the _productCategory_ field applicable to accounts. Any one of the valid values for this field can be supplied. If absent then all accounts returned.|
|open-status|query|[Enum](#common-field-types)|optional|`ALL`|Used to filter results according to open/closed status. Values can be `OPEN`, `CLOSED` or `ALL`. If absent then `ALL` is assumed.|
|is-owned|query|[Boolean](#common-field-types)|optional||Filters accounts based on whether they are owned by the authorised customer. `true` for owned accounts, `false` for unowned accounts and absent for all accounts.|
|page|query|[PositiveInteger](#common-field-types)|optional|`1`|Page of results to request (standard pagination).|
|page-size|query|[PositiveInteger](#common-field-types)|optional|`25`|Page size to request. Default is 25 (standard pagination).|
|x-v|header|string|mandatory||Version of the API endpoint requested by the client. Must be set to a positive integer. The endpoint should respond with the highest supported version between [_x-min-v_](#request-headers) and [_x-v_](#request-headers). If the value of [_x-min-v_](#request-headers) is equal to or higher than the value of [_x-v_](#request-headers) then the [_x-min-v_](#request-headers) header should be treated as absent. If all versions requested are not supported then the endpoint **MUST** respond with a `406 Not Acceptable`. See [HTTP Headers](#request-headers).|
|x-min-v|header|string|optional||Minimum version of the API endpoint requested by the client. Must be set to a positive integer if provided. The endpoint should respond with the highest supported version between [_x-min-v_](#request-headers) and [_x-v_](#request-headers). If all versions requested are not supported then the endpoint **MUST** respond with a `406 Not Acceptable`.|
|x-fapi-interaction-id|header|string|optional||An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|x-fapi-auth-date|header|string|conditional||The time when the customer last logged in to the Data Recipient Software Product as described in **[[FAPI-1.0-Baseline]](#nref-FAPI-1-0-Baseline)**. Required for all resource calls (customer present and unattended). Not required for unauthenticated calls.|
|x-fapi-customer-ip-address|header|string|optional||The customer's original IP address if the customer is currently logged in to the Data Recipient Software Product. The presence of this header indicates that the API is being called in a customer present context. Not to be included for unauthenticated calls.|
|x-cds-client-headers|header|[Base64](#common-field-types)|conditional||The customer's original standard http headers [Base64](#common-field-types) encoded, including the original User-Agent header, if the customer is currently logged in to the Data Recipient Software Product. Mandatory for customer present calls. Not required for unattended or unauthenticated calls.|

<h4 id="cdr-banking-api-modified-for-dp306-_get-scheduled-payments-bulk_enumerated-values-parameters">Enumerated Values</h4>

|Parameter|Value|
|---|---|
|product-category|BUSINESS_LOANS|
|product-category|BUY_NOW_PAY_LATER|
|product-category|CRED_AND_CHRG_CARDS|
|product-category|LEASES|
|product-category|MARGIN_LOANS|
|product-category|OVERDRAFTS|
|product-category|PERS_LOANS|
|product-category|REGULATED_TRUST_ACCOUNTS|
|product-category|RESIDENTIAL_MORTGAGES|
|product-category|TERM_DEPOSITS|
|product-category|TRADE_FINANCE|
|product-category|TRANS_AND_SAVINGS_ACCOUNTS|
|product-category|TRAVEL_CARDS|
|open-status|ALL|
|open-status|CLOSED|
|open-status|OPEN|

> Example responses

> 200 Response

```json
{
  "data": {
    "scheduledPayments": [
      {
        "scheduledPaymentId": "string",
        "nickname": "string",
        "payerReference": "string",
        "payeeReference": "string",
        "status": "ACTIVE",
        "from": {
          "accountId": "string"
        },
        "paymentSet": [
          {
            "to": {
              "toUType": "accountId",
              "accountId": "string",
              "payeeId": "string",
              "nickname": "string",
              "payeeReference": "string",
              "digitalWallet": {
                "name": "string",
                "identifier": "string",
                "type": "EMAIL",
                "provider": "PAYPAL_AU"
              },
              "domestic": {
                "payeeAccountUType": "account",
                "account": {
                  "accountName": "string",
                  "bsb": "string",
                  "accountNumber": "string"
                },
                "card": {
                  "cardNumber": "string"
                },
                "payId": {
                  "name": "string",
                  "identifier": "string",
                  "type": "ABN"
                }
              },
              "biller": {
                "billerCode": "string",
                "crn": "string",
                "billerName": "string"
              },
              "international": {
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
                  "routingNumber": "string",
                  "legalEntityIdentifier": "string"
                }
              }
            },
            "isAmountCalculated": false,
            "amount": "string",
            "currency": "AUD"
          }
        ],
        "recurrence": {
          "nextPaymentDate": "string",
          "recurrenceUType": "eventBased",
          "onceOff": {
            "paymentDate": "string"
          },
          "intervalSchedule": {
            "finalPaymentDate": "string",
            "paymentsRemaining": 1,
            "nonBusinessDayTreatment": "AFTER",
            "intervals": [
              {
                "interval": "string",
                "dayInInterval": "string"
              }
            ]
          },
          "lastWeekDay": {
            "finalPaymentDate": "string",
            "paymentsRemaining": 1,
            "interval": "string",
            "lastWeekDay": "FRI",
            "nonBusinessDayTreatment": "AFTER"
          },
          "eventBased": {
            "description": "string"
          }
        }
      }
    ]
  },
  "links": {
    "self": "string",
    "first": "string",
    "prev": "string",
    "next": "string",
    "last": "string"
  },
  "meta": {
    "totalRecords": 0,
    "totalPages": 0
  }
}
```

<h3 id="cdr-banking-api-modified-for-dp306-_get-scheduled-payments-bulk_responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[ResponseBankingScheduledPaymentsListV2](#schemacdr-banking-api-modified-for-dp306-responsebankingscheduledpaymentslistv2)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The following error codes **MUST** be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Missing Required Field](#error-400-field-missing)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li><li>[400 - Invalid Page Size](#error-400-field-invalid-page-size)</li></ul>|[ResponseErrorListV2](#schemacdr-banking-api-modified-for-dp306-responseerrorlistv2)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|The following error codes **MUST** be supported:<br/><ul class="error-code-list"><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|[ResponseErrorListV2](#schemacdr-banking-api-modified-for-dp306-responseerrorlistv2)|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|The following error codes **MUST** be supported:<br/><ul class="error-code-list"><li>[422 - Invalid Page](#error-422-field-invalid-page)</li></ul>|[ResponseErrorListV2](#schemacdr-banking-api-modified-for-dp306-responseerrorlistv2)|

<h3 id="cdr-banking-api-modified-for-dp306-_get-scheduled-payments-bulk_response-headers">Response Headers</h3>

|Status|Header|Type|Required|Description|
|---|---|---|---|---|
|200|x-v|string|mandatory|The [payload version](#response-headers) that the endpoint has responded with.|
|200|x-fapi-interaction-id|string|mandatory|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|400|x-fapi-interaction-id|string|mandatory|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|406|x-fapi-interaction-id|string|mandatory|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|422|x-fapi-interaction-id|string|mandatory|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|

  
    
      <aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
<a href="#authorisation-scopes">bank:regular_payments:read.</a>
</aside>

    
  

<h2 id="cdr-banking-api-modified-for-dp306-_get-scheduled-payments-for-specific-accounts">Get Scheduled Payments For Specific Accounts</h2>
<p id="get-scheduled-payments-for-specific-accounts" class="orig-anchor"></p>

> Code samples

```http
POST https://mtls.dh.example.com/cds-au/v1/banking/payments/scheduled HTTP/1.1
Host: mtls.dh.example.com
Content-Type: application/json
Accept: application/json
x-v: string
x-min-v: string
x-fapi-interaction-id: string
x-fapi-auth-date: string
x-fapi-customer-ip-address: string
x-cds-client-headers: string
```

```javascript--nodejs
const fetch = require('node-fetch');
const inputBody = '{
  "data": {
    "accountIds": [
      "string"
    ]
  },
  "meta": {}
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'x-v':'string',
  'x-min-v':'string',
  'x-fapi-interaction-id':'string',
  'x-fapi-auth-date':'string',
  'x-fapi-customer-ip-address':'string',
  'x-cds-client-headers':'string'
};

fetch('https://mtls.dh.example.com/cds-au/v1/banking/payments/scheduled', {
  method: 'POST',
  body: inputBody,
  headers: headers
}).then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

`POST /banking/payments/scheduled`

Obtain scheduled payments for a specified list of accounts.

Obsolete versions: [v1](../../../../includes/obsolete/get-scheduled-payments-for-specific-accounts-v1.html).

> Body parameter

```json
{
  "data": {
    "accountIds": [
      "string"
    ]
  },
  "meta": {}
}
```

<h3 id="cdr-banking-api-modified-for-dp306-_get-scheduled-payments-for-specific-accounts_endpoint-version">Endpoint Version</h3>
|   |  |
|---|--|
|Version|**2**

<h3 id="cdr-banking-api-modified-for-dp306-_get-scheduled-payments-for-specific-accounts_parameters">Parameters</h3>

|Name|In|Type|Required|Default|Description|
|---|---|---|---|---|---|
|page|query|[PositiveInteger](#common-field-types)|optional|`1`|Page of results to request (standard pagination).|
|page-size|query|[PositiveInteger](#common-field-types)|optional|`25`|Page size to request. Default is 25 (standard pagination).|
|x-v|header|string|mandatory||Version of the API endpoint requested by the client. Must be set to a positive integer. The endpoint should respond with the highest supported version between [_x-min-v_](#request-headers) and [_x-v_](#request-headers). If the value of [_x-min-v_](#request-headers) is equal to or higher than the value of [_x-v_](#request-headers) then the [_x-min-v_](#request-headers) header should be treated as absent. If all versions requested are not supported then the endpoint **MUST** respond with a `406 Not Acceptable`. See [HTTP Headers](#request-headers).|
|x-min-v|header|string|optional||Minimum version of the API endpoint requested by the client. Must be set to a positive integer if provided. The endpoint should respond with the highest supported version between [_x-min-v_](#request-headers) and [_x-v_](#request-headers). If all versions requested are not supported then the endpoint **MUST** respond with a `406 Not Acceptable`.|
|x-fapi-interaction-id|header|string|optional||An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|x-fapi-auth-date|header|string|conditional||The time when the customer last logged in to the Data Recipient Software Product as described in **[[FAPI-1.0-Baseline]](#nref-FAPI-1-0-Baseline)**. Required for all resource calls (customer present and unattended). Not required for unauthenticated calls.|
|x-fapi-customer-ip-address|header|string|optional||The customer's original IP address if the customer is currently logged in to the Data Recipient Software Product. The presence of this header indicates that the API is being called in a customer present context. Not to be included for unauthenticated calls.|
|x-cds-client-headers|header|[Base64](#common-field-types)|conditional||The customer's original standard http headers [Base64](#common-field-types) encoded, including the original User-Agent header, if the customer is currently logged in to the Data Recipient Software Product. Mandatory for customer present calls. Not required for unattended or unauthenticated calls.|
|body|body|[RequestAccountIdListV1](#schemacdr-banking-api-modified-for-dp306-requestaccountidlistv1)|mandatory||Request payload containing a list of _accountId_ values to obtain data for.|

> Example responses

> 200 Response

```json
{
  "data": {
    "scheduledPayments": [
      {
        "scheduledPaymentId": "string",
        "nickname": "string",
        "payerReference": "string",
        "payeeReference": "string",
        "status": "ACTIVE",
        "from": {
          "accountId": "string"
        },
        "paymentSet": [
          {
            "to": {
              "toUType": "accountId",
              "accountId": "string",
              "payeeId": "string",
              "nickname": "string",
              "payeeReference": "string",
              "digitalWallet": {
                "name": "string",
                "identifier": "string",
                "type": "EMAIL",
                "provider": "PAYPAL_AU"
              },
              "domestic": {
                "payeeAccountUType": "account",
                "account": {
                  "accountName": "string",
                  "bsb": "string",
                  "accountNumber": "string"
                },
                "card": {
                  "cardNumber": "string"
                },
                "payId": {
                  "name": "string",
                  "identifier": "string",
                  "type": "ABN"
                }
              },
              "biller": {
                "billerCode": "string",
                "crn": "string",
                "billerName": "string"
              },
              "international": {
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
                  "routingNumber": "string",
                  "legalEntityIdentifier": "string"
                }
              }
            },
            "isAmountCalculated": false,
            "amount": "string",
            "currency": "AUD"
          }
        ],
        "recurrence": {
          "nextPaymentDate": "string",
          "recurrenceUType": "eventBased",
          "onceOff": {
            "paymentDate": "string"
          },
          "intervalSchedule": {
            "finalPaymentDate": "string",
            "paymentsRemaining": 1,
            "nonBusinessDayTreatment": "AFTER",
            "intervals": [
              {
                "interval": "string",
                "dayInInterval": "string"
              }
            ]
          },
          "lastWeekDay": {
            "finalPaymentDate": "string",
            "paymentsRemaining": 1,
            "interval": "string",
            "lastWeekDay": "FRI",
            "nonBusinessDayTreatment": "AFTER"
          },
          "eventBased": {
            "description": "string"
          }
        }
      }
    ]
  },
  "links": {
    "self": "string",
    "first": "string",
    "prev": "string",
    "next": "string",
    "last": "string"
  },
  "meta": {
    "totalRecords": 0,
    "totalPages": 0
  }
}
```

<h3 id="cdr-banking-api-modified-for-dp306-_get-scheduled-payments-for-specific-accounts_responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[ResponseBankingScheduledPaymentsListV2](#schemacdr-banking-api-modified-for-dp306-responsebankingscheduledpaymentslistv2)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The following error codes **MUST** be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Missing Required Field](#error-400-field-missing)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li><li>[400 - Invalid Page Size](#error-400-field-invalid-page-size)</li></ul>|[ResponseErrorListV2](#schemacdr-banking-api-modified-for-dp306-responseerrorlistv2)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|The following error codes **MUST** be supported:<br/><ul class="error-code-list"><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|[ResponseErrorListV2](#schemacdr-banking-api-modified-for-dp306-responseerrorlistv2)|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|The following error codes **MUST** be supported:<br/><ul class="error-code-list"><li>[422 - Invalid Page](#error-422-field-invalid-page)</li><li>[422 - Unavailable Banking Account](#error-422-authorisation-unavailable-banking-account)</li><li>[422 - Invalid Banking Account](#error-422-authorisation-invalid-banking-account)</li></ul>|[ResponseErrorListV2](#schemacdr-banking-api-modified-for-dp306-responseerrorlistv2)|

<h3 id="cdr-banking-api-modified-for-dp306-_get-scheduled-payments-for-specific-accounts_response-headers">Response Headers</h3>

|Status|Header|Type|Required|Description|
|---|---|---|---|---|
|200|x-v|string|mandatory|The [payload version](#response-headers) that the endpoint has responded with.|
|200|x-fapi-interaction-id|string|mandatory|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|400|x-fapi-interaction-id|string|mandatory|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|406|x-fapi-interaction-id|string|mandatory|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|422|x-fapi-interaction-id|string|mandatory|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|

  
    
      <aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
<a href="#authorisation-scopes">bank:regular_payments:read.</a>
</aside>

    
  

<!-- Endpoint tag group description -->
<!-- Banking Payee endpoints -->

<h2 id="cdr-banking-api-modified-for-dp306-_get-payees">Get Payees</h2>
<p id="get-payees" class="orig-anchor"></p>

> Code samples

```http
GET https://mtls.dh.example.com/cds-au/v1/banking/payees HTTP/1.1
Host: mtls.dh.example.com
Accept: application/json
x-v: string
x-min-v: string
x-fapi-interaction-id: string
x-fapi-auth-date: string
x-fapi-customer-ip-address: string
x-cds-client-headers: string
```

```javascript--nodejs
const fetch = require('node-fetch');
const headers = {
  'Accept':'application/json',
  'x-v':'string',
  'x-min-v':'string',
  'x-fapi-interaction-id':'string',
  'x-fapi-auth-date':'string',
  'x-fapi-customer-ip-address':'string',
  'x-cds-client-headers':'string'
};

fetch('https://mtls.dh.example.com/cds-au/v1/banking/payees', {
  method: 'GET',
  headers: headers
}).then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

`GET /banking/payees`

Obtain a list of pre-registered payees.

Obsolete versions: [v1](../../../../includes/obsolete/get-payees-v1.html).

<h3 id="cdr-banking-api-modified-for-dp306-_get-payees_endpoint-version">Endpoint Version</h3>
|   |  |
|---|--|
|Version|**2**

<h3 id="cdr-banking-api-modified-for-dp306-_get-payees_parameters">Parameters</h3>

|Name|In|Type|Required|Default|Description|
|---|---|---|---|---|---|
|type|query|[Enum](#common-field-types)|optional|`ALL`|Filter on the payee _type_ field. In addition to normal _type_ field values, `ALL` can be specified to retrieve all payees. If absent the assumed value is `ALL`.|
|page|query|[PositiveInteger](#common-field-types)|optional|`1`|Page of results to request (standard pagination).|
|page-size|query|[PositiveInteger](#common-field-types)|optional|`25`|Page size to request. Default is 25 (standard pagination).|
|x-v|header|string|mandatory||Version of the API endpoint requested by the client. Must be set to a positive integer. The endpoint should respond with the highest supported version between [_x-min-v_](#request-headers) and [_x-v_](#request-headers). If the value of [_x-min-v_](#request-headers) is equal to or higher than the value of [_x-v_](#request-headers) then the [_x-min-v_](#request-headers) header should be treated as absent. If all versions requested are not supported then the endpoint **MUST** respond with a `406 Not Acceptable`. See [HTTP Headers](#request-headers).|
|x-min-v|header|string|optional||Minimum version of the API endpoint requested by the client. Must be set to a positive integer if provided. The endpoint should respond with the highest supported version between [_x-min-v_](#request-headers) and [_x-v_](#request-headers). If all versions requested are not supported then the endpoint **MUST** respond with a `406 Not Acceptable`.|
|x-fapi-interaction-id|header|string|optional||An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|x-fapi-auth-date|header|string|conditional||The time when the customer last logged in to the Data Recipient Software Product as described in **[[FAPI-1.0-Baseline]](#nref-FAPI-1-0-Baseline)**. Required for all resource calls (customer present and unattended). Not required for unauthenticated calls.|
|x-fapi-customer-ip-address|header|string|optional||The customer's original IP address if the customer is currently logged in to the Data Recipient Software Product. The presence of this header indicates that the API is being called in a customer present context. Not to be included for unauthenticated calls.|
|x-cds-client-headers|header|[Base64](#common-field-types)|conditional||The customer's original standard http headers [Base64](#common-field-types) encoded, including the original User-Agent header, if the customer is currently logged in to the Data Recipient Software Product. Mandatory for customer present calls. Not required for unattended or unauthenticated calls.|

<h4 id="cdr-banking-api-modified-for-dp306-_get-payees_enumerated-values-parameters">Enumerated Values</h4>

|Parameter|Value|
|---|---|
|type|ALL|
|type|BILLER|
|type|DIGITAL_WALLET|
|type|DOMESTIC|
|type|INTERNATIONAL|

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
        "type": "BILLER",
        "creationDate": "string"
      }
    ]
  },
  "links": {
    "self": "string",
    "first": "string",
    "prev": "string",
    "next": "string",
    "last": "string"
  },
  "meta": {
    "totalRecords": 0,
    "totalPages": 0
  }
}
```

<h3 id="cdr-banking-api-modified-for-dp306-_get-payees_responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[ResponseBankingPayeeListV2](#schemacdr-banking-api-modified-for-dp306-responsebankingpayeelistv2)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The following error codes **MUST** be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Missing Required Field](#error-400-field-missing)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li><li>[400 - Invalid Page Size](#error-400-field-invalid-page-size)</li></ul>|[ResponseErrorListV2](#schemacdr-banking-api-modified-for-dp306-responseerrorlistv2)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|The following error codes **MUST** be supported:<br/><ul class="error-code-list"><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|[ResponseErrorListV2](#schemacdr-banking-api-modified-for-dp306-responseerrorlistv2)|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|The following error codes **MUST** be supported:<br/><ul class="error-code-list"><li>[422 - Invalid Page](#error-422-field-invalid-page)</li></ul>|[ResponseErrorListV2](#schemacdr-banking-api-modified-for-dp306-responseerrorlistv2)|

<h3 id="cdr-banking-api-modified-for-dp306-_get-payees_response-headers">Response Headers</h3>

|Status|Header|Type|Required|Description|
|---|---|---|---|---|
|200|x-v|string|mandatory|The [payload version](#response-headers) that the endpoint has responded with.|
|200|x-fapi-interaction-id|string|mandatory|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|400|x-fapi-interaction-id|string|mandatory|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|406|x-fapi-interaction-id|string|mandatory|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|422|x-fapi-interaction-id|string|mandatory|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|

  
    
      <aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
<a href="#authorisation-scopes">bank:payees:read.</a>
</aside>

    
  

<h2 id="cdr-banking-api-modified-for-dp306-_get-payee-detail">Get Payee Detail</h2>
<p id="get-payee-detail" class="orig-anchor"></p>

> Code samples

```http
GET https://mtls.dh.example.com/cds-au/v1/banking/payees/{payeeId} HTTP/1.1
Host: mtls.dh.example.com
Accept: application/json
x-v: string
x-min-v: string
x-fapi-interaction-id: string
x-fapi-auth-date: string
x-fapi-customer-ip-address: string
x-cds-client-headers: string
```

```javascript--nodejs
const fetch = require('node-fetch');
const headers = {
  'Accept':'application/json',
  'x-v':'string',
  'x-min-v':'string',
  'x-fapi-interaction-id':'string',
  'x-fapi-auth-date':'string',
  'x-fapi-customer-ip-address':'string',
  'x-cds-client-headers':'string'
};

fetch('https://mtls.dh.example.com/cds-au/v1/banking/payees/{payeeId}', {
  method: 'GET',
  headers: headers
}).then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

`GET /banking/payees/{payeeId}`

Obtain detailed information on a single payee.

Note that the payee sub-structure should be selected to represent the payment destination only rather than any known characteristics of the payment recipient.

Obsolete versions: [v1](../../../../includes/obsolete/get-payee-detail-v1.html).

<h3 id="cdr-banking-api-modified-for-dp306-_get-payee-detail_endpoint-version">Endpoint Version</h3>
|   |  |
|---|--|
|Version|**2**

<h3 id="cdr-banking-api-modified-for-dp306-_get-payee-detail_parameters">Parameters</h3>

|Name|In|Type|Required|Default|Description|
|---|---|---|---|---|---|
|payeeId|path|[BankingPayeeId](#schemacdr-banking-api-modified-for-dp306-bankingpayeeid)|mandatory||The _payeeId_ to obtain data for. _payeeId_ values are returned by payee list endpoints.|
|x-v|header|string|mandatory||Version of the API endpoint requested by the client. Must be set to a positive integer. The endpoint should respond with the highest supported version between [_x-min-v_](#request-headers) and [_x-v_](#request-headers). If the value of [_x-min-v_](#request-headers) is equal to or higher than the value of [_x-v_](#request-headers) then the [_x-min-v_](#request-headers) header should be treated as absent. If all versions requested are not supported then the endpoint **MUST** respond with a `406 Not Acceptable`. See [HTTP Headers](#request-headers).|
|x-min-v|header|string|optional||Minimum version of the API endpoint requested by the client. Must be set to a positive integer if provided. The endpoint should respond with the highest supported version between [_x-min-v_](#request-headers) and [_x-v_](#request-headers). If all versions requested are not supported then the endpoint **MUST** respond with a `406 Not Acceptable`.|
|x-fapi-interaction-id|header|string|optional||An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|x-fapi-auth-date|header|string|conditional||The time when the customer last logged in to the Data Recipient Software Product as described in **[[FAPI-1.0-Baseline]](#nref-FAPI-1-0-Baseline)**. Required for all resource calls (customer present and unattended). Not required for unauthenticated calls.|
|x-fapi-customer-ip-address|header|string|optional||The customer's original IP address if the customer is currently logged in to the Data Recipient Software Product. The presence of this header indicates that the API is being called in a customer present context. Not to be included for unauthenticated calls.|
|x-cds-client-headers|header|[Base64](#common-field-types)|conditional||The customer's original standard http headers [Base64](#common-field-types) encoded, including the original User-Agent header, if the customer is currently logged in to the Data Recipient Software Product. Mandatory for customer present calls. Not required for unattended or unauthenticated calls.|

> Example responses

> 200 Response

```json
{
  "data": {
    "payeeId": "string",
    "nickname": "string",
    "description": "string",
    "type": "BILLER",
    "creationDate": "string",
    "payeeUType": "biller",
    "biller": {
      "billerCode": "string",
      "crn": "string",
      "billerName": "string"
    },
    "domestic": {
      "payeeAccountUType": "account",
      "account": {
        "accountName": "string",
        "bsb": "string",
        "accountNumber": "string"
      },
      "card": {
        "cardNumber": "string"
      },
      "payId": {
        "name": "string",
        "identifier": "string",
        "type": "ABN"
      }
    },
    "digitalWallet": {
      "name": "string",
      "identifier": "string",
      "type": "EMAIL",
      "provider": "PAYPAL_AU"
    },
    "international": {
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
        "routingNumber": "string",
        "legalEntityIdentifier": "string"
      }
    }
  },
  "links": {
    "self": "string"
  },
  "meta": {}
}
```

<h3 id="cdr-banking-api-modified-for-dp306-_get-payee-detail_responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[ResponseBankingPayeeByIdV2](#schemacdr-banking-api-modified-for-dp306-responsebankingpayeebyidv2)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The following error codes **MUST** be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Missing Required Field](#error-400-field-missing)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li><li>[400 - Invalid Page Size](#error-400-field-invalid-page-size)</li></ul>|[ResponseErrorListV2](#schemacdr-banking-api-modified-for-dp306-responseerrorlistv2)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The following error codes **MUST** be supported:<br/><ul class="error-code-list"><li>[404 - Unavailable Resource](#error-404-resource-unavailable)</li><li>[404 - Invalid Resource](#error-404-resource-invalid)</li></ul>|[ResponseErrorListV2](#schemacdr-banking-api-modified-for-dp306-responseerrorlistv2)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|The following error codes **MUST** be supported:<br/><ul class="error-code-list"><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|[ResponseErrorListV2](#schemacdr-banking-api-modified-for-dp306-responseerrorlistv2)|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|The following error codes **MUST** be supported:<br/><ul class="error-code-list"><li>[422 - Invalid Page](#error-422-field-invalid-page)</li></ul>|[ResponseErrorListV2](#schemacdr-banking-api-modified-for-dp306-responseerrorlistv2)|

<h3 id="cdr-banking-api-modified-for-dp306-_get-payee-detail_response-headers">Response Headers</h3>

|Status|Header|Type|Required|Description|
|---|---|---|---|---|
|200|x-v|string|mandatory|The [payload version](#response-headers) that the endpoint has responded with.|
|200|x-fapi-interaction-id|string|mandatory|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|400|x-fapi-interaction-id|string|mandatory|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|404|x-fapi-interaction-id|string|mandatory|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|406|x-fapi-interaction-id|string|mandatory|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|422|x-fapi-interaction-id|string|mandatory|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|

  
    
      <aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
<a href="#authorisation-scopes">bank:payees:read.</a>
</aside>

    
  

<h2 class="schema-heading" id="cdr-banking-api-modified-for-dp306--schemas">Schemas</h2>

<h3 class="schema-toc" id="cdr-banking-api-modified-for-dp306-_schemas_tocSrequestaccountidlistv1">RequestAccountIdListV1</h3>
<p id="tocSrequestaccountidlistv1" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api-modified-for-dp306-_schema-base_requestaccountidlist"></a>
  <a class="schema-anchor" id="schemacdr-banking-api-modified-for-dp306-requestaccountidlistv1"></a>
</p>

```json
{
  "data": {
    "accountIds": [
      "string"
    ]
  },
  "meta": {}
}
```

<h3 id="cdr-banking-api-modified-for-dp306-_requestaccountidlistv1_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|data|object|mandatory||none|
|» accountIds|[[BankingAccountId](#schemacdr-banking-api-modified-for-dp306-bankingaccountid)]|mandatory||Array of _accountId_ values to obtain data for.|
|meta|[Meta](#schemacdr-banking-api-modified-for-dp306-meta)|optional||none|

<h3 class="schema-toc" id="cdr-banking-api-modified-for-dp306-_schemas_tocSresponsebankingproductlistv3">ResponseBankingProductListV3</h3>
<p id="tocSresponsebankingproductlistv3" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api-modified-for-dp306-_schema-base_responsebankingproductlist"></a>
  <a class="schema-anchor" id="schemacdr-banking-api-modified-for-dp306-responsebankingproductlistv3"></a>
</p>

```json
{
  "data": {
    "products": [
      {
        "productId": "string",
        "effectiveFrom": "string",
        "effectiveTo": "string",
        "lastUpdated": "string",
        "productCategory": "BUSINESS_LOANS",
        "name": "string",
        "description": "string",
        "brand": "string",
        "brandName": "string",
        "applicationUri": "string",
        "isTailored": true,
        "additionalInformation": {
          "overviewUri": "string",
          "termsUri": "string",
          "eligibilityUri": "string",
          "feesAndPricingUri": "string",
          "bundleUri": "string",
          "additionalOverviewUris": [
            {
              "description": "string",
              "additionalInfoUri": "string"
            }
          ],
          "additionalTermsUris": [
            {
              "description": "string",
              "additionalInfoUri": "string"
            }
          ],
          "additionalEligibilityUris": [
            {
              "description": "string",
              "additionalInfoUri": "string"
            }
          ],
          "additionalFeesAndPricingUris": [
            {
              "description": "string",
              "additionalInfoUri": "string"
            }
          ],
          "additionalBundleUris": [
            {
              "description": "string",
              "additionalInfoUri": "string"
            }
          ]
        },
        "cardOption": {
          "cardScheme": "AMEX",
          "cardType": "CHARGE",
          "cardImages": [
            {
              "title": "string",
              "imageUri": "string"
            }
          ]
        }
      }
    ]
  },
  "links": {
    "self": "string",
    "first": "string",
    "prev": "string",
    "next": "string",
    "last": "string"
  },
  "meta": {
    "totalRecords": 0,
    "totalPages": 0
  }
}
```

<h3 id="cdr-banking-api-modified-for-dp306-_responsebankingproductlistv3_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|data|object|mandatory||none|
|» products|[[BankingProductV5](#schemacdr-banking-api-modified-for-dp306-bankingproductv5)]|mandatory||The list of products returned. If the filter results in an empty set then this array may have no records.|
|links|[LinksPaginated](#schemacdr-banking-api-modified-for-dp306-linkspaginated)|mandatory||none|
|meta|[MetaPaginated](#schemacdr-banking-api-modified-for-dp306-metapaginated)|mandatory||none|

<h3 class="schema-toc" id="cdr-banking-api-modified-for-dp306-_schemas_tocSbankingproductv5">BankingProductV5</h3>
<p id="tocSbankingproductv5" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api-modified-for-dp306-_schema-base_bankingproduct"></a>
  <a class="schema-anchor" id="schemacdr-banking-api-modified-for-dp306-bankingproductv5"></a>
</p>

```json
{
  "productId": "string",
  "effectiveFrom": "string",
  "effectiveTo": "string",
  "lastUpdated": "string",
  "productCategory": "BUSINESS_LOANS",
  "name": "string",
  "description": "string",
  "brand": "string",
  "brandName": "string",
  "applicationUri": "string",
  "isTailored": true,
  "additionalInformation": {
    "overviewUri": "string",
    "termsUri": "string",
    "eligibilityUri": "string",
    "feesAndPricingUri": "string",
    "bundleUri": "string",
    "additionalOverviewUris": [
      {
        "description": "string",
        "additionalInfoUri": "string"
      }
    ],
    "additionalTermsUris": [
      {
        "description": "string",
        "additionalInfoUri": "string"
      }
    ],
    "additionalEligibilityUris": [
      {
        "description": "string",
        "additionalInfoUri": "string"
      }
    ],
    "additionalFeesAndPricingUris": [
      {
        "description": "string",
        "additionalInfoUri": "string"
      }
    ],
    "additionalBundleUris": [
      {
        "description": "string",
        "additionalInfoUri": "string"
      }
    ]
  },
  "cardOption": {
    "cardScheme": "AMEX",
    "cardType": "CHARGE",
    "cardImages": [
      {
        "title": "string",
        "imageUri": "string"
      }
    ]
  }
}
```

<h3 id="cdr-banking-api-modified-for-dp306-_bankingproductv5_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|productId|[BankingProductId](#schemacdr-banking-api-modified-for-dp306-bankingproductid)|mandatory||A data holder-specific unique identifier for a Banking product. This identifier must be unique to a product but does not otherwise need to adhere to ID permanence guidelines.|
|effectiveFrom|[DateTimeString](#common-field-types)|optional||The date and time from which this product is effective (i.e. is available for origination). Used to enable the articulation of products to the regime before they are available for customers to originate.|
|effectiveTo|[DateTimeString](#common-field-types)|optional||The date and time at which this product will be retired and will no longer be offered. Used to enable the managed deprecation of products.|
|lastUpdated|[DateTimeString](#common-field-types)|mandatory||The last date and time that the information for this product was changed (or the creation date for the product if it has never been altered).|
|productCategory|[BankingProductCategoryV2](#schemacdr-banking-api-modified-for-dp306-bankingproductcategoryv2)|mandatory||The category to which a product or account belongs. See [here](#product-categories) for more details.|
|name|string|mandatory||The display name of the product.|
|description|string|mandatory||A description of the product.|
|brand|string|mandatory||A label of the brand for the product. Able to be used for filtering. For data holders with single brands this value is still required.|
|brandName|string|optional||An optional display name of the brand.|
|applicationUri|[URIString](#common-field-types)|optional||A link to an application web page where this product can be applied for.|
|isTailored|[Boolean](#common-field-types)|mandatory||Indicates whether the product is specifically tailored to a circumstance. In this case fees and prices are significantly negotiated depending on context. While all products are open to a degree of tailoring this flag indicates that tailoring is expected and thus that the provision of specific fees and rates is not applicable.|
|additionalInformation|[BankingProductAdditionalInformationV2](#schemacdr-banking-api-modified-for-dp306-bankingproductadditionalinformationv2)|optional||Object that contains links to additional information on specific topics.|
|cardOption|[BankingProductCardOption](#schemacdr-banking-api-modified-for-dp306-bankingproductcardoption)|optional||Information about the type of card available with the account.|

<h3 class="schema-toc" id="cdr-banking-api-modified-for-dp306-_schemas_tocSbankingproductcardoption">BankingProductCardOption</h3>
<p id="tocSbankingproductcardoption" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api-modified-for-dp306-_schema-base_bankingproductcardoption"></a>
  <a class="schema-anchor" id="schemacdr-banking-api-modified-for-dp306-bankingproductcardoption"></a>
</p>

```json
{
  "cardScheme": "AMEX",
  "cardType": "CHARGE",
  "cardImages": [
    {
      "title": "string",
      "imageUri": "string"
    }
  ]
}
```

*Information about the type of card available with the account.*

<h3 id="cdr-banking-api-modified-for-dp306-_bankingproductcardoption_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|cardScheme|[Enum](#common-field-types)|mandatory||Card scheme available with the account.|
|cardType|[Enum](#common-field-types)|mandatory||Card type available with the account.|
|cardImages|[[BankingProductCardOption_cardImages](#schemacdr-banking-api-modified-for-dp306-bankingproductcardoption_cardimages)]|optional||An array of card art images.|

<h4 id="cdr-banking-api-modified-for-dp306-_bankingproductcardoption_enumerated-values-main">Enumerated Values</h4>

|Property|Value|
|---|---|
|cardScheme|AMEX|
|cardScheme|DINERS|
|cardScheme|EFTPOS|
|cardScheme|MASTERCARD|
|cardScheme|VISA|
|cardScheme|OTHER|
|cardType|CHARGE|
|cardType|CREDIT|
|cardType|DEBIT|

<h3 class="schema-toc" id="cdr-banking-api-modified-for-dp306-_schemas_tocSbankingproductcardoption_cardimages">BankingProductCardOption_cardImages</h3>
<p id="tocSbankingproductcardoption_cardimages" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api-modified-for-dp306-_schema-base_bankingproductcardoption_cardimages"></a>
  <a class="schema-anchor" id="schemacdr-banking-api-modified-for-dp306-bankingproductcardoption_cardimages"></a>
</p>

```json
{
  "title": "string",
  "imageUri": "string"
}
```

<h3 id="cdr-banking-api-modified-for-dp306-_bankingproductcardoption_cardimages_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|title|string|optional||Display label for the specific image.|
|imageUri|[URIString](#common-field-types)|mandatory||URI reference to a PNG, JPG or GIF image with proportions defined by ISO 7810 ID-1 and width no greater than 512 pixels. The URI reference may be a link or url-encoded data URI according to **[[RFC2397]](#nref-RFC2397)**.|

<h3 class="schema-toc" id="cdr-banking-api-modified-for-dp306-_schemas_tocSbankingproductadditionalinformationv2">BankingProductAdditionalInformationV2</h3>
<p id="tocSbankingproductadditionalinformationv2" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api-modified-for-dp306-_schema-base_bankingproductadditionalinformation"></a>
  <a class="schema-anchor" id="schemacdr-banking-api-modified-for-dp306-bankingproductadditionalinformationv2"></a>
</p>

```json
{
  "overviewUri": "string",
  "termsUri": "string",
  "eligibilityUri": "string",
  "feesAndPricingUri": "string",
  "bundleUri": "string",
  "additionalOverviewUris": [
    {
      "description": "string",
      "additionalInfoUri": "string"
    }
  ],
  "additionalTermsUris": [
    {
      "description": "string",
      "additionalInfoUri": "string"
    }
  ],
  "additionalEligibilityUris": [
    {
      "description": "string",
      "additionalInfoUri": "string"
    }
  ],
  "additionalFeesAndPricingUris": [
    {
      "description": "string",
      "additionalInfoUri": "string"
    }
  ],
  "additionalBundleUris": [
    {
      "description": "string",
      "additionalInfoUri": "string"
    }
  ]
}
```

*Object that contains links to additional information on specific topics.*

<h3 id="cdr-banking-api-modified-for-dp306-_bankingproductadditionalinformationv2_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|overviewUri|[URIString](#common-field-types)|conditional||General overview of the product. Mandatory if _additionalOverviewUris_ includes one or more supporting documents.|
|termsUri|[URIString](#common-field-types)|conditional||Terms and conditions for the product. Mandatory if _additionalTermsUris_ includes one or more supporting documents.|
|eligibilityUri|[URIString](#common-field-types)|conditional||Eligibility rules and criteria for the product. Mandatory if _additionalEligibilityUris_ includes one or more supporting documents.|
|feesAndPricingUri|[URIString](#common-field-types)|conditional||Description of fees, pricing, discounts, exemptions and bonuses for the product. Mandatory if _additionalFeesAndPricingUris_ includes one or more supporting documents.|
|bundleUri|[URIString](#common-field-types)|conditional||Description of a bundle that this product can be part of. Mandatory if _additionalBundleUris_ includes one or more supporting documents.|
|additionalOverviewUris|[[BankingProductAdditionalInformationV2_additionalInformationUris](#schemacdr-banking-api-modified-for-dp306-bankingproductadditionalinformationv2_additionalinformationuris)]|optional||An array of additional general overviews for the product or features of the product, if applicable. To be treated as secondary documents to the _overviewUri_. Only to be used if there is a primary _overviewUri_.|
|additionalTermsUris|[[BankingProductAdditionalInformationV2_additionalInformationUris](#schemacdr-banking-api-modified-for-dp306-bankingproductadditionalinformationv2_additionalinformationuris)]|optional||An array of additional terms and conditions for the product, if applicable. To be treated as secondary documents to the _termsUri_. Only to be used if there is a primary _termsUri_.|
|additionalEligibilityUris|[[BankingProductAdditionalInformationV2_additionalInformationUris](#schemacdr-banking-api-modified-for-dp306-bankingproductadditionalinformationv2_additionalinformationuris)]|optional||An array of additional eligibility rules and criteria for the product, if applicable. To be treated as secondary documents to the _eligibilityUri_. Only to be used if there is a primary _eligibilityUri_.|
|additionalFeesAndPricingUris|[[BankingProductAdditionalInformationV2_additionalInformationUris](#schemacdr-banking-api-modified-for-dp306-bankingproductadditionalinformationv2_additionalinformationuris)]|optional||An array of additional fees, pricing, discounts, exemptions and bonuses for the product, if applicable. To be treated as secondary documents to the _feesAndPricingUri_. Only to be used if there is a primary _feesAndPricingUri_.|
|additionalBundleUris|[[BankingProductAdditionalInformationV2_additionalInformationUris](#schemacdr-banking-api-modified-for-dp306-bankingproductadditionalinformationv2_additionalinformationuris)]|optional||An array of additional bundles for the product, if applicable. To be treated as secondary documents to the _bundleUri_. Only to be used if there is a primary _bundleUri_.|

<h3 class="schema-toc" id="cdr-banking-api-modified-for-dp306-_schemas_tocSbankingproductadditionalinformationv2_additionalinformationuris">BankingProductAdditionalInformationV2_additionalInformationUris</h3>
<p id="tocSbankingproductadditionalinformationv2_additionalinformationuris" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api-modified-for-dp306-_schema-base_bankingproductadditionalinformationv2_additionalinformationuris"></a>
  <a class="schema-anchor" id="schemacdr-banking-api-modified-for-dp306-bankingproductadditionalinformationv2_additionalinformationuris"></a>
</p>

```json
{
  "description": "string",
  "additionalInfoUri": "string"
}
```

<h3 id="cdr-banking-api-modified-for-dp306-_bankingproductadditionalinformationv2_additionalinformationuris_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|description|string|optional||Display text providing more information about the document URI.|
|additionalInfoUri|[URIString](#common-field-types)|mandatory||The URI describing the additional information.|

<h3 class="schema-toc" id="cdr-banking-api-modified-for-dp306-_schemas_tocSresponsebankingproductbyidv5">ResponseBankingProductByIdV5</h3>
<p id="tocSresponsebankingproductbyidv5" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api-modified-for-dp306-_schema-base_responsebankingproductbyid"></a>
  <a class="schema-anchor" id="schemacdr-banking-api-modified-for-dp306-responsebankingproductbyidv5"></a>
</p>

```json
{
  "data": {
    "productId": "string",
    "effectiveFrom": "string",
    "effectiveTo": "string",
    "lastUpdated": "string",
    "productCategory": "BUSINESS_LOANS",
    "name": "string",
    "description": "string",
    "brand": "string",
    "brandName": "string",
    "applicationUri": "string",
    "isTailored": true,
    "additionalInformation": {
      "overviewUri": "string",
      "termsUri": "string",
      "eligibilityUri": "string",
      "feesAndPricingUri": "string",
      "bundleUri": "string",
      "additionalOverviewUris": [
        {
          "description": "string",
          "additionalInfoUri": "string"
        }
      ],
      "additionalTermsUris": [
        {
          "description": "string",
          "additionalInfoUri": "string"
        }
      ],
      "additionalEligibilityUris": [
        {
          "description": "string",
          "additionalInfoUri": "string"
        }
      ],
      "additionalFeesAndPricingUris": [
        {
          "description": "string",
          "additionalInfoUri": "string"
        }
      ],
      "additionalBundleUris": [
        {
          "description": "string",
          "additionalInfoUri": "string"
        }
      ]
    },
    "cardOption": {
      "cardScheme": "AMEX",
      "cardType": "CHARGE",
      "cardImages": [
        {
          "title": "string",
          "imageUri": "string"
        }
      ]
    },
    "bundles": [
      {
        "name": "string",
        "description": "string",
        "additionalInfo": "string",
        "additionalInfoUri": "string",
        "productIds": [
          "string"
        ]
      }
    ],
    "features": [
      {
        "featureType": "ADDITIONAL_CARDS",
        "additionalValue": "string",
        "additionalInfo": "string",
        "additionalInfoUri": "string"
      }
    ],
    "constraints": [
      {
        "constraintType": "MAX_BALANCE",
        "additionalValue": "string",
        "additionalInfo": "string",
        "additionalInfoUri": "string"
      }
    ],
    "eligibility": [
      {
        "eligibilityType": "BUSINESS",
        "additionalValue": "string",
        "additionalInfo": "string",
        "additionalInfoUri": "string"
      }
    ],
    "fees": [
      {
        "name": "string",
        "feeCategory": "CARD",
        "feeType": "CASH_ADVANCE",
        "feeMethodUType": "fixedAmount",
        "fixedAmount": {
          "amount": "string"
        },
        "rateBased": {
          "balanceRate": "string",
          "transactionRate": "string",
          "accruedRate": "string",
          "accrualFrequency": "string",
          "amountRange": {
            "feeMinimum": "string",
            "feeMaximum": "string"
          }
        },
        "variable": {
          "feeMinimum": "string",
          "feeMaximum": "string"
        },
        "feeCap": "string",
        "feeCapPeriod": "string",
        "currency": "AUD",
        "additionalValue": "string",
        "additionalInfo": "string",
        "additionalInfoUri": "string",
        "discounts": [
          {
            "description": "string",
            "discountType": "BALANCE",
            "amount": "string",
            "balanceRate": "string",
            "transactionRate": "string",
            "accruedRate": "string",
            "feeRate": "string",
            "additionalValue": "string",
            "additionalInfo": "string",
            "additionalInfoUri": "string",
            "eligibility": [
              {
                "discountEligibilityType": "BUSINESS",
                "additionalValue": "string",
                "additionalInfo": "string",
                "additionalInfoUri": "string"
              }
            ]
          }
        ]
      }
    ],
    "depositRates": [
      {
        "depositRateType": "VARIABLE",
        "rate": "string",
        "adjustmentToBase": "FIXED",
        "adjustmentBundle": "string",
        "calculationFrequency": "string",
        "applicationType": "PERIODIC",
        "applicationFrequency": "string",
        "tiers": [
          {
            "name": "string",
            "unitOfMeasure": "DAY",
            "minimumValue": "string",
            "maximumValue": "string",
            "rateApplicationMethod": "PER_TIER",
            "applicabilityConditions": [
              {
                "rateApplicabilityType": "NEW_CUSTOMER",
                "additionalValue": "string",
                "additionalInfo": "string",
                "additionalInfoUri": "string"
              }
            ],
            "additionalInfo": "string",
            "additionalInfoUri": "string"
          }
        ],
        "applicabilityConditions": [
          {
            "rateApplicabilityType": "NEW_CUSTOMER",
            "additionalValue": "string",
            "additionalInfo": "string",
            "additionalInfoUri": "string"
          }
        ],
        "additionalValue": "string",
        "additionalInfo": "string",
        "additionalInfoUri": "string"
      }
    ],
    "lendingRates": [
      {
        "lendingRateType": "DISCOUNT",
        "rate": "string",
        "referenceRate": "string",
        "comparisonRate": "string",
        "revertRate": "string",
        "revertProductId": "string",
        "adjustmentToBase": "BALANCE_TRANSFER",
        "adjustmentBundle": "string",
        "calculationFrequency": "string",
        "applicationType": "PERIODIC",
        "applicationFrequency": "string",
        "interestPaymentDue": "IN_ADVANCE",
        "repaymentType": "INTEREST_ONLY",
        "loanPurpose": "INVESTMENT",
        "tiers": [
          {
            "name": "string",
            "unitOfMeasure": "DAY",
            "minimumValue": "string",
            "maximumValue": "string",
            "rateApplicationMethod": "PER_TIER",
            "applicabilityConditions": [
              {
                "rateApplicabilityType": "NEW_CUSTOMER",
                "additionalValue": "string",
                "additionalInfo": "string",
                "additionalInfoUri": "string"
              }
            ],
            "additionalInfo": "string",
            "additionalInfoUri": "string"
          }
        ],
        "applicabilityConditions": [
          {
            "rateApplicabilityType": "NEW_CUSTOMER",
            "additionalValue": "string",
            "additionalInfo": "string",
            "additionalInfoUri": "string"
          }
        ],
        "additionalValue": "string",
        "additionalInfo": "string",
        "additionalInfoUri": "string"
      }
    ],
    "instalments": {
      "maximumPlanCount": 1,
      "instalmentsLimit": "string",
      "minimumPlanValue": "string",
      "maximumPlanValue": "string",
      "minimumSplit": 4,
      "maximumSplit": 4
    }
  },
  "links": {
    "self": "string"
  },
  "meta": {}
}
```

<h3 id="cdr-banking-api-modified-for-dp306-_responsebankingproductbyidv5_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|data|[BankingProductDetailV5](#schemacdr-banking-api-modified-for-dp306-bankingproductdetailv5)|mandatory||none|
|links|[Links](#schemacdr-banking-api-modified-for-dp306-links)|mandatory||none|
|meta|[Meta](#schemacdr-banking-api-modified-for-dp306-meta)|optional||none|

<h3 class="schema-toc" id="cdr-banking-api-modified-for-dp306-_schemas_tocSbankingproductdetailv5">BankingProductDetailV5</h3>
<p id="tocSbankingproductdetailv5" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api-modified-for-dp306-_schema-base_bankingproductdetail"></a>
  <a class="schema-anchor" id="schemacdr-banking-api-modified-for-dp306-bankingproductdetailv5"></a>
</p>

```json
{
  "productId": "string",
  "effectiveFrom": "string",
  "effectiveTo": "string",
  "lastUpdated": "string",
  "productCategory": "BUSINESS_LOANS",
  "name": "string",
  "description": "string",
  "brand": "string",
  "brandName": "string",
  "applicationUri": "string",
  "isTailored": true,
  "additionalInformation": {
    "overviewUri": "string",
    "termsUri": "string",
    "eligibilityUri": "string",
    "feesAndPricingUri": "string",
    "bundleUri": "string",
    "additionalOverviewUris": [
      {
        "description": "string",
        "additionalInfoUri": "string"
      }
    ],
    "additionalTermsUris": [
      {
        "description": "string",
        "additionalInfoUri": "string"
      }
    ],
    "additionalEligibilityUris": [
      {
        "description": "string",
        "additionalInfoUri": "string"
      }
    ],
    "additionalFeesAndPricingUris": [
      {
        "description": "string",
        "additionalInfoUri": "string"
      }
    ],
    "additionalBundleUris": [
      {
        "description": "string",
        "additionalInfoUri": "string"
      }
    ]
  },
  "cardOption": {
    "cardScheme": "AMEX",
    "cardType": "CHARGE",
    "cardImages": [
      {
        "title": "string",
        "imageUri": "string"
      }
    ]
  },
  "bundles": [
    {
      "name": "string",
      "description": "string",
      "additionalInfo": "string",
      "additionalInfoUri": "string",
      "productIds": [
        "string"
      ]
    }
  ],
  "features": [
    {
      "featureType": "ADDITIONAL_CARDS",
      "additionalValue": "string",
      "additionalInfo": "string",
      "additionalInfoUri": "string"
    }
  ],
  "constraints": [
    {
      "constraintType": "MAX_BALANCE",
      "additionalValue": "string",
      "additionalInfo": "string",
      "additionalInfoUri": "string"
    }
  ],
  "eligibility": [
    {
      "eligibilityType": "BUSINESS",
      "additionalValue": "string",
      "additionalInfo": "string",
      "additionalInfoUri": "string"
    }
  ],
  "fees": [
    {
      "name": "string",
      "feeCategory": "CARD",
      "feeType": "CASH_ADVANCE",
      "feeMethodUType": "fixedAmount",
      "fixedAmount": {
        "amount": "string"
      },
      "rateBased": {
        "balanceRate": "string",
        "transactionRate": "string",
        "accruedRate": "string",
        "accrualFrequency": "string",
        "amountRange": {
          "feeMinimum": "string",
          "feeMaximum": "string"
        }
      },
      "variable": {
        "feeMinimum": "string",
        "feeMaximum": "string"
      },
      "feeCap": "string",
      "feeCapPeriod": "string",
      "currency": "AUD",
      "additionalValue": "string",
      "additionalInfo": "string",
      "additionalInfoUri": "string",
      "discounts": [
        {
          "description": "string",
          "discountType": "BALANCE",
          "amount": "string",
          "balanceRate": "string",
          "transactionRate": "string",
          "accruedRate": "string",
          "feeRate": "string",
          "additionalValue": "string",
          "additionalInfo": "string",
          "additionalInfoUri": "string",
          "eligibility": [
            {
              "discountEligibilityType": "BUSINESS",
              "additionalValue": "string",
              "additionalInfo": "string",
              "additionalInfoUri": "string"
            }
          ]
        }
      ]
    }
  ],
  "depositRates": [
    {
      "depositRateType": "VARIABLE",
      "rate": "string",
      "adjustmentToBase": "FIXED",
      "adjustmentBundle": "string",
      "calculationFrequency": "string",
      "applicationType": "PERIODIC",
      "applicationFrequency": "string",
      "tiers": [
        {
          "name": "string",
          "unitOfMeasure": "DAY",
          "minimumValue": "string",
          "maximumValue": "string",
          "rateApplicationMethod": "PER_TIER",
          "applicabilityConditions": [
            {
              "rateApplicabilityType": "NEW_CUSTOMER",
              "additionalValue": "string",
              "additionalInfo": "string",
              "additionalInfoUri": "string"
            }
          ],
          "additionalInfo": "string",
          "additionalInfoUri": "string"
        }
      ],
      "applicabilityConditions": [
        {
          "rateApplicabilityType": "NEW_CUSTOMER",
          "additionalValue": "string",
          "additionalInfo": "string",
          "additionalInfoUri": "string"
        }
      ],
      "additionalValue": "string",
      "additionalInfo": "string",
      "additionalInfoUri": "string"
    }
  ],
  "lendingRates": [
    {
      "lendingRateType": "DISCOUNT",
      "rate": "string",
      "referenceRate": "string",
      "comparisonRate": "string",
      "revertRate": "string",
      "revertProductId": "string",
      "adjustmentToBase": "BALANCE_TRANSFER",
      "adjustmentBundle": "string",
      "calculationFrequency": "string",
      "applicationType": "PERIODIC",
      "applicationFrequency": "string",
      "interestPaymentDue": "IN_ADVANCE",
      "repaymentType": "INTEREST_ONLY",
      "loanPurpose": "INVESTMENT",
      "tiers": [
        {
          "name": "string",
          "unitOfMeasure": "DAY",
          "minimumValue": "string",
          "maximumValue": "string",
          "rateApplicationMethod": "PER_TIER",
          "applicabilityConditions": [
            {
              "rateApplicabilityType": "NEW_CUSTOMER",
              "additionalValue": "string",
              "additionalInfo": "string",
              "additionalInfoUri": "string"
            }
          ],
          "additionalInfo": "string",
          "additionalInfoUri": "string"
        }
      ],
      "applicabilityConditions": [
        {
          "rateApplicabilityType": "NEW_CUSTOMER",
          "additionalValue": "string",
          "additionalInfo": "string",
          "additionalInfoUri": "string"
        }
      ],
      "additionalValue": "string",
      "additionalInfo": "string",
      "additionalInfoUri": "string"
    }
  ],
  "instalments": {
    "maximumPlanCount": 1,
    "instalmentsLimit": "string",
    "minimumPlanValue": "string",
    "maximumPlanValue": "string",
    "minimumSplit": 4,
    "maximumSplit": 4
  }
}
```

<h3 id="cdr-banking-api-modified-for-dp306-_bankingproductdetailv5_properties">Properties</h3>

*allOf*

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|*anonymous*|[BankingProductV5](#schemacdr-banking-api-modified-for-dp306-bankingproductv5)|mandatory||none|

*and*

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|*anonymous*|object|mandatory||none|
|» bundles|[[BankingProductBundle](#schemacdr-banking-api-modified-for-dp306-bankingproductbundle)]|optional||An array of bundles that this product participates in. Each bundle is described by free form information but also by a list of _productID_ values of the other products that are included in the bundle. It is assumed that the current product is included in the bundle also.|
|» features|[[BankingProductFeatureV3](#schemacdr-banking-api-modified-for-dp306-bankingproductfeaturev3)]|optional||Array of features and limitations of the product.|
|» constraints|[[BankingProductConstraintV2](#schemacdr-banking-api-modified-for-dp306-bankingproductconstraintv2)]|optional||Constraints on the application for the product such as minimum balances or limit thresholds.|
|» eligibility|[[BankingProductEligibility](#schemacdr-banking-api-modified-for-dp306-bankingproducteligibility)]|optional||Eligibility criteria for the product.|
|» fees|[[BankingProductFeeV2](#schemacdr-banking-api-modified-for-dp306-bankingproductfeev2)]|optional||Fees applicable to the product.|
|» depositRates|[[BankingProductDepositRateV2](#schemacdr-banking-api-modified-for-dp306-bankingproductdepositratev2)]|optional||Interest rates available for deposits.|
|» lendingRates|[[BankingProductLendingRateV3](#schemacdr-banking-api-modified-for-dp306-bankingproductlendingratev3)]|optional||Interest rates charged against lending balances.|
|» instalments|[BankingProductInstalments](#schemacdr-banking-api-modified-for-dp306-bankingproductinstalments)|optional||Details of instalment features on the account.|

<h3 class="schema-toc" id="cdr-banking-api-modified-for-dp306-_schemas_tocSbankingproductbundle">BankingProductBundle</h3>
<p id="tocSbankingproductbundle" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api-modified-for-dp306-_schema-base_bankingproductbundle"></a>
  <a class="schema-anchor" id="schemacdr-banking-api-modified-for-dp306-bankingproductbundle"></a>
</p>

```json
{
  "name": "string",
  "description": "string",
  "additionalInfo": "string",
  "additionalInfoUri": "string",
  "productIds": [
    "string"
  ]
}
```

<h3 id="cdr-banking-api-modified-for-dp306-_bankingproductbundle_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|name|string|mandatory||Name of the bundle.|
|description|string|mandatory||Description of the bundle.|
|additionalInfo|string|optional||Display text providing more information on the bundle.|
|additionalInfoUri|[URIString](#common-field-types)|optional||Link to a web page with more information on the bundle criteria and benefits.|
|productIds|[[BankingProductId](#schemacdr-banking-api-modified-for-dp306-bankingproductid)]|optional||Array of _productID_ values for products included in the bundle that are available via the product endpoints. Note that this array is not intended to represent a comprehensive model of the products included in the bundle and some products available for the bundle may not be available via the product reference endpoints.|

<h3 class="schema-toc" id="cdr-banking-api-modified-for-dp306-_schemas_tocSbankingproductfeaturev3">BankingProductFeatureV3</h3>
<p id="tocSbankingproductfeaturev3" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api-modified-for-dp306-_schema-base_bankingproductfeature"></a>
  <a class="schema-anchor" id="schemacdr-banking-api-modified-for-dp306-bankingproductfeaturev3"></a>
</p>

```json
{
  "featureType": "ADDITIONAL_CARDS",
  "additionalValue": "string",
  "additionalInfo": "string",
  "additionalInfoUri": "string"
}
```

*Array of features and limitations of the product.*

<h3 id="cdr-banking-api-modified-for-dp306-_bankingproductfeaturev3_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|featureType|[Enum](#common-field-types)|mandatory||The type of feature described. For further details, refer to [Product Feature Types](#tocSproductfeaturetypedoc).|
|additionalValue|string|conditional||Generic field containing additional information relevant to the [_featureType_](#tocSproductfeaturetypedoc) specified. Whether mandatory or not is dependent on the value of the [_featureType_](#tocSproductfeaturetypedoc).|
|additionalInfo|string|conditional||Display text providing more information on the feature. Mandatory if [_featureType_](#tocSproductfeaturetypedoc) is set to `OTHER`.|
|additionalInfoUri|[URIString](#common-field-types)|optional||Link to a web page with more information on this feature.|

<h4 id="cdr-banking-api-modified-for-dp306-_bankingproductfeaturev3_enumerated-values-main">Enumerated Values</h4>

|Property|Value|
|---|---|
|featureType|ADDITIONAL_CARDS|
|featureType|BALANCE_TRANSFERS|
|featureType|BILL_PAYMENT|
|featureType|BONUS_REWARDS|
|featureType|CARD_ACCESS|
|featureType|CASHBACK_OFFER|
|featureType|COMPLEMENTARY_PRODUCT_DISCOUNTS|
|featureType|EXTRA_DOWN_PAYMENT|
|featureType|DIGITAL_BANKING|
|featureType|DIGITAL_WALLET|
|featureType|DONATE_INTEREST|
|featureType|EXTRA_REPAYMENTS|
|featureType|FRAUD_PROTECTION|
|featureType|FREE_TXNS|
|featureType|FREE_TXNS_ALLOWANCE|
|featureType|FUNDS_AVAILABLE_AFTER|
|featureType|GUARANTOR|
|featureType|INSTALMENT_PLAN|
|featureType|INSURANCE|
|featureType|INTEREST_FREE|
|featureType|INTEREST_FREE_TRANSFERS|
|featureType|LOYALTY_PROGRAM|
|featureType|MAX_BALANCE|
|featureType|MAX_LIMIT|
|featureType|MAX_TXNS|
|featureType|MIN_BALANCE|
|featureType|MIN_LIMIT|
|featureType|NOTIFICATIONS|
|featureType|NPP_ENABLED|
|featureType|NPP_PAYID|
|featureType|OFFSET|
|featureType|OTHER|
|featureType|OVERDRAFT|
|featureType|REDRAW|
|featureType|RELATIONSHIP_MANAGEMENT|
|featureType|UNLIMITED_TXNS|

<h3 class="schema-toc" id="cdr-banking-api-modified-for-dp306-_schemas_tocSbankingproductconstraintv2">BankingProductConstraintV2</h3>
<p id="tocSbankingproductconstraintv2" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api-modified-for-dp306-_schema-base_bankingproductconstraint"></a>
  <a class="schema-anchor" id="schemacdr-banking-api-modified-for-dp306-bankingproductconstraintv2"></a>
</p>

```json
{
  "constraintType": "MAX_BALANCE",
  "additionalValue": "string",
  "additionalInfo": "string",
  "additionalInfoUri": "string"
}
```

<h3 id="cdr-banking-api-modified-for-dp306-_bankingproductconstraintv2_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|constraintType|[Enum](#common-field-types)|mandatory||The type of constraint described. For further details, refer to [Product Constraint Types](#tocSproductconstrainttypedoc).|
|additionalValue|string|conditional||Generic field containing additional information relevant to the [_constraintType_](#tocSproductconstrainttypedoc) specified. Whether mandatory or not is dependent on the value of [_constraintType_](#tocSproductconstrainttypedoc).|
|additionalInfo|string|conditional||Display text providing more information on the constraint. Mandatory if the [constraint type](#tocSproductconstrainttypedoc) is set to `OTHER`.|
|additionalInfoUri|[URIString](#common-field-types)|optional||Link to a web page with more information on the constraint.|

<h4 id="cdr-banking-api-modified-for-dp306-_bankingproductconstraintv2_enumerated-values-main">Enumerated Values</h4>

|Property|Value|
|---|---|
|constraintType|MAX_BALANCE|
|constraintType|MAX_LIMIT|
|constraintType|MIN_BALANCE|
|constraintType|MIN_LIMIT|
|constraintType|OPENING_BALANCE|
|constraintType|OTHER|

<h3 class="schema-toc" id="cdr-banking-api-modified-for-dp306-_schemas_tocSbankingproducteligibility">BankingProductEligibility</h3>
<p id="tocSbankingproducteligibility" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api-modified-for-dp306-_schema-base_bankingproducteligibility"></a>
  <a class="schema-anchor" id="schemacdr-banking-api-modified-for-dp306-bankingproducteligibility"></a>
</p>

```json
{
  "eligibilityType": "BUSINESS",
  "additionalValue": "string",
  "additionalInfo": "string",
  "additionalInfoUri": "string"
}
```

<h3 id="cdr-banking-api-modified-for-dp306-_bankingproducteligibility_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|eligibilityType|[Enum](#common-field-types)|mandatory||The type of eligibility criteria described. For further details, refer to [Product Eligibility Types](#tocSproducteligibilitytypedoc).|
|additionalValue|string|conditional||Generic field containing additional information relevant to the [_eligibilityType_](#tocSproducteligibilitytypedoc) specified. Whether mandatory or not is dependent on the value of [_eligibilityType_](#tocSproducteligibilitytypedoc).|
|additionalInfo|string|conditional||Display text providing more information on the [eligibility](#tocSproducteligibilitytypedoc) criteria. Mandatory if the field is set to `OTHER`.|
|additionalInfoUri|[URIString](#common-field-types)|optional||Link to a web page with more information on this eligibility criteria.|

<h4 id="cdr-banking-api-modified-for-dp306-_bankingproducteligibility_enumerated-values-main">Enumerated Values</h4>

|Property|Value|
|---|---|
|eligibilityType|BUSINESS|
|eligibilityType|EMPLOYMENT_STATUS|
|eligibilityType|MAX_AGE|
|eligibilityType|MIN_AGE|
|eligibilityType|MIN_INCOME|
|eligibilityType|MIN_TURNOVER|
|eligibilityType|NATURAL_PERSON|
|eligibilityType|OTHER|
|eligibilityType|PENSION_RECIPIENT|
|eligibilityType|RESIDENCY_STATUS|
|eligibilityType|STAFF|
|eligibilityType|STUDENT|

<h3 class="schema-toc" id="cdr-banking-api-modified-for-dp306-_schemas_tocSbankingproductfeev2">BankingProductFeeV2</h3>
<p id="tocSbankingproductfeev2" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api-modified-for-dp306-_schema-base_bankingproductfee"></a>
  <a class="schema-anchor" id="schemacdr-banking-api-modified-for-dp306-bankingproductfeev2"></a>
</p>

```json
{
  "name": "string",
  "feeCategory": "CARD",
  "feeType": "CASH_ADVANCE",
  "feeMethodUType": "fixedAmount",
  "fixedAmount": {
    "amount": "string"
  },
  "rateBased": {
    "balanceRate": "string",
    "transactionRate": "string",
    "accruedRate": "string",
    "accrualFrequency": "string",
    "amountRange": {
      "feeMinimum": "string",
      "feeMaximum": "string"
    }
  },
  "variable": {
    "feeMinimum": "string",
    "feeMaximum": "string"
  },
  "feeCap": "string",
  "feeCapPeriod": "string",
  "currency": "AUD",
  "additionalValue": "string",
  "additionalInfo": "string",
  "additionalInfoUri": "string",
  "discounts": [
    {
      "description": "string",
      "discountType": "BALANCE",
      "amount": "string",
      "balanceRate": "string",
      "transactionRate": "string",
      "accruedRate": "string",
      "feeRate": "string",
      "additionalValue": "string",
      "additionalInfo": "string",
      "additionalInfoUri": "string",
      "eligibility": [
        {
          "discountEligibilityType": "BUSINESS",
          "additionalValue": "string",
          "additionalInfo": "string",
          "additionalInfoUri": "string"
        }
      ]
    }
  ]
}
```

<h3 id="cdr-banking-api-modified-for-dp306-_bankingproductfeev2_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|name|string|mandatory||Name of the fee.|
|feeCategory|[Enum](#common-field-types)|mandatory||The category of fee, used to group _feeType_ values. For further details, refer to [Product Fee Categories](#tocSproductfeecategorydoc).|
|feeType|[Enum](#common-field-types)|mandatory||The type of fee. For further details, refer to [Product Fee Types](#tocSproductfeetypedoc).|
|feeMethodUType|[Enum](#common-field-types)|mandatory||The fee charge method.|
|fixedAmount|[BankingFeeAmount](#schemacdr-banking-api-modified-for-dp306-bankingfeeamount)|conditional||Present if _feeMethodUType_ is set to `fixedAmount`. Where the fee is a specific amount.|
|rateBased|[BankingFeeRate](#schemacdr-banking-api-modified-for-dp306-bankingfeerate)|conditional||Present if _feeMethodUType_ is set to `rateBased`. Where the fee is based on a type of rate.|
|variable|[BankingFeeRange](#schemacdr-banking-api-modified-for-dp306-bankingfeerange)|conditional||Present if _feeMethodUType_ is set to `variable`. Where the amount or rate may not be known until the fee is incurred.|
|feeCap|[AmountString](#common-field-types)|optional||The cap amount if multiple occurrences of the fee are capped to a limit.|
|feeCapPeriod|[ExternalRef](#common-field-types)|optional||Specifies a duration over which multiple occurrences of the fee will be capped. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax).|
|currency|[CurrencyString](#common-field-types)|optional|`AUD`|The currency the fee will be charged in. Assumes `AUD` if absent.|
|additionalValue|string|conditional||Generic field containing additional information relevant to the [_feeType_](#tocSproductfeetypedoc) specified. Whether mandatory or not is dependent on the value of [_feeType_](#tocSproductfeetypedoc).|
|additionalInfo|string|conditional||Display text providing more information on the fee.|
|additionalInfoUri|[URIString](#common-field-types)|optional||Link to a web page with more information on this fee.|
|discounts|[[BankingProductDiscount](#schemacdr-banking-api-modified-for-dp306-bankingproductdiscount)]|optional||An optional list of discounts to this fee that may be available.|

<h4 id="cdr-banking-api-modified-for-dp306-_bankingproductfeev2_enumerated-values-main">Enumerated Values</h4>

|Property|Value|
|---|---|
|feeCategory|APPLICATION|
|feeCategory|ATM|
|feeCategory|BRANCH|
|feeCategory|BUY_NOW_PAY_LATER|
|feeCategory|CARD|
|feeCategory|CHEQUE|
|feeCategory|CLOSURE|
|feeCategory|CORRESPONDENCE|
|feeCategory|FOREIGN_EXCHANGE|
|feeCategory|OTHER|
|feeCategory|POS|
|feeCategory|SERVICE|
|feeCategory|TELEGRAPHIC_TRANSFER|
|feeCategory|TELEPHONE_BANKING|
|feeCategory|TERMS_CONDITIONS|
|feeCategory|THIRD_PARTY|
|feeCategory|TRANSACTION|
|feeType|CASH_ADVANCE|
|feeType|DEPOSIT|
|feeType|DISHONOUR|
|feeType|ENQUIRY|
|feeType|EVENT|
|feeType|EXIT|
|feeType|OTHER|
|feeType|PAYMENT|
|feeType|PAYMENT_LATE|
|feeType|PERIODIC|
|feeType|PURCHASE|
|feeType|REPLACEMENT|
|feeType|TRANSACTION|
|feeType|UPFRONT|
|feeType|UPFRONT_PER_PLAN|
|feeType|VARIATION|
|feeType|WITHDRAWAL|
|feeMethodUType|fixedAmount|
|feeMethodUType|rateBased|
|feeMethodUType|variable|

<h3 class="schema-toc" id="cdr-banking-api-modified-for-dp306-_schemas_tocSbankingfeeamount">BankingFeeAmount</h3>
<p id="tocSbankingfeeamount" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api-modified-for-dp306-_schema-base_bankingfeeamount"></a>
  <a class="schema-anchor" id="schemacdr-banking-api-modified-for-dp306-bankingfeeamount"></a>
</p>

```json
{
  "amount": "string"
}
```

<h3 id="cdr-banking-api-modified-for-dp306-_bankingfeeamount_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|amount|[AmountString](#common-field-types)|mandatory||The specific amount charged for the fee each time it is incurred.|

<h3 class="schema-toc" id="cdr-banking-api-modified-for-dp306-_schemas_tocSbankingfeerate">BankingFeeRate</h3>
<p id="tocSbankingfeerate" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api-modified-for-dp306-_schema-base_bankingfeerate"></a>
  <a class="schema-anchor" id="schemacdr-banking-api-modified-for-dp306-bankingfeerate"></a>
</p>

```json
{
  "balanceRate": "string",
  "transactionRate": "string",
  "accruedRate": "string",
  "accrualFrequency": "string",
  "amountRange": {
    "feeMinimum": "string",
    "feeMaximum": "string"
  }
}
```

<h3 id="cdr-banking-api-modified-for-dp306-_bankingfeerate_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|balanceRate|[RateString](#common-field-types)|conditional||A fee rate calculated based on a proportion of the balance. One of _balanceRate_, _transactionRate_ and _accruedRate_ is mandatory.|
|transactionRate|[RateString](#common-field-types)|conditional||A fee rate calculated based on a proportion of a transaction. One of _balanceRate_, _transactionRate_ and _accruedRate_ is mandatory.|
|accruedRate|[RateString](#common-field-types)|conditional||A fee rate calculated based on a proportion of the calculated interest accrued on the account. One of _balanceRate_, _transactionRate_ and _accruedRate_ is mandatory.|
|accrualFrequency|[ExternalRef](#common-field-types)|optional||The indicative frequency with which the fee is calculated on the account. Only applies if _balanceRate_ or _accruedRate_ is also present. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax).|
|amountRange|[BankingFeeRange](#schemacdr-banking-api-modified-for-dp306-bankingfeerange)|optional||A minimum or maximum fee amount where a specific fixed amount is not known until the fee is incurred.|

<h3 class="schema-toc" id="cdr-banking-api-modified-for-dp306-_schemas_tocSbankingfeerange">BankingFeeRange</h3>
<p id="tocSbankingfeerange" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api-modified-for-dp306-_schema-base_bankingfeerange"></a>
  <a class="schema-anchor" id="schemacdr-banking-api-modified-for-dp306-bankingfeerange"></a>
</p>

```json
{
  "feeMinimum": "string",
  "feeMaximum": "string"
}
```

*A minimum or maximum fee amount where a specific fixed amount is not known until the fee is incurred.*

<h3 id="cdr-banking-api-modified-for-dp306-_bankingfeerange_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|feeMinimum|[AmountString](#common-field-types)|optional||The minimum fee that will be charged per occurrence.|
|feeMaximum|[AmountString](#common-field-types)|optional||The maximum fee that will be charged per occurrence.|

<h3 class="schema-toc" id="cdr-banking-api-modified-for-dp306-_schemas_tocSbankingproductdiscount">BankingProductDiscount</h3>
<p id="tocSbankingproductdiscount" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api-modified-for-dp306-_schema-base_bankingproductdiscount"></a>
  <a class="schema-anchor" id="schemacdr-banking-api-modified-for-dp306-bankingproductdiscount"></a>
</p>

```json
{
  "description": "string",
  "discountType": "BALANCE",
  "amount": "string",
  "balanceRate": "string",
  "transactionRate": "string",
  "accruedRate": "string",
  "feeRate": "string",
  "additionalValue": "string",
  "additionalInfo": "string",
  "additionalInfoUri": "string",
  "eligibility": [
    {
      "discountEligibilityType": "BUSINESS",
      "additionalValue": "string",
      "additionalInfo": "string",
      "additionalInfoUri": "string"
    }
  ]
}
```

<h3 id="cdr-banking-api-modified-for-dp306-_bankingproductdiscount_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|description|string|mandatory||Description of the discount.|
|discountType|[Enum](#common-field-types)|mandatory||The type of discount. For further details, refer to [Product Discount Types](#tocSproductdiscounttypedoc).|
|amount|[AmountString](#common-field-types)|conditional||Dollar value of the discount. One of _amount_, _balanceRate_, _transactionRate_, _accruedRate_ and _feeRate_ is mandatory.|
|balanceRate|[RateString](#common-field-types)|conditional||A discount rate calculated based on a proportion of the balance. Note that the currency of the fee discount is expected to be the same as the currency of the fee itself. One of _amount_, _balanceRate_, _transactionRate_, _accruedRate_ and _feeRate_ is mandatory. Unless noted in _additionalInfo_, assumes the application and calculation frequency are the same as the corresponding fee.|
|transactionRate|[RateString](#common-field-types)|conditional||A discount rate calculated based on a proportion of a transaction. Note that the currency of the fee discount is expected to be the same as the currency of the fee itself. One of _amount_, _balanceRate_, _transactionRate_, _accruedRate_ and _feeRate_ is mandatory.|
|accruedRate|[RateString](#common-field-types)|conditional||A discount rate calculated based on a proportion of the calculated interest accrued on the account. Note that the currency of the fee discount is expected to be the same as the currency of the fee itself. One of _amount_, _balanceRate_, _transactionRate_, _accruedRate_ and _feeRate_ is mandatory. Unless noted in _additionalInfo_, assumes the application and calculation frequency are the same as the corresponding fee.|
|feeRate|[RateString](#common-field-types)|conditional||A discount rate calculated based on a proportion of the fee to which this discount is attached. Note that the currency of the fee discount is expected to be the same as the currency of the fee itself. One of _amount_, _balanceRate_, _transactionRate_, _accruedRate_ and _feeRate_ is mandatory. Unless noted in _additionalInfo_, assumes the application and calculation frequency are the same as the corresponding fee.|
|additionalValue|string|conditional||Generic field containing additional information relevant to the [_discountType_](#tocSproductdiscounttypedoc) specified. Whether mandatory or not is dependent on the value of [_discountType_](#tocSproductdiscounttypedoc).|
|additionalInfo|string|optional||Display text providing more information on the discount.|
|additionalInfoUri|[URIString](#common-field-types)|optional||Link to a web page with more information on this discount.|
|eligibility|[[BankingProductDiscountEligibility](#schemacdr-banking-api-modified-for-dp306-bankingproductdiscounteligibility)]|conditional||Eligibility constraints that apply to this discount. Mandatory if _discountType_ is `ELIGIBILITY_ONLY`.|

<h4 id="cdr-banking-api-modified-for-dp306-_bankingproductdiscount_enumerated-values-main">Enumerated Values</h4>

|Property|Value|
|---|---|
|discountType|BALANCE|
|discountType|DEPOSITS|
|discountType|ELIGIBILITY_ONLY|
|discountType|FEE_CAP|
|discountType|PAYMENTS|

<h3 class="schema-toc" id="cdr-banking-api-modified-for-dp306-_schemas_tocSbankingproductdiscounteligibility">BankingProductDiscountEligibility</h3>
<p id="tocSbankingproductdiscounteligibility" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api-modified-for-dp306-_schema-base_bankingproductdiscounteligibility"></a>
  <a class="schema-anchor" id="schemacdr-banking-api-modified-for-dp306-bankingproductdiscounteligibility"></a>
</p>

```json
{
  "discountEligibilityType": "BUSINESS",
  "additionalValue": "string",
  "additionalInfo": "string",
  "additionalInfoUri": "string"
}
```

<h3 id="cdr-banking-api-modified-for-dp306-_bankingproductdiscounteligibility_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|discountEligibilityType|[Enum](#common-field-types)|mandatory||The type of the specific eligibility constraint for a discount. For further details, refer to [Product Discount Eligibility Types](#tocSproductdiscounteligibilitydoc).|
|additionalValue|string|conditional||Generic field containing additional information relevant to the [_discountEligibilityType_](#tocSproductdiscounteligibilitydoc) specified. Whether mandatory or not is dependent on the value of [_discountEligibilityType_](#tocSproductdiscounteligibilitydoc).|
|additionalInfo|string|conditional||Display text providing more information on this eligibility constraint. Whether mandatory or not is dependent on the value of [_discountEligibilityType_](#tocSproductdiscounteligibilitydoc).|
|additionalInfoUri|[URIString](#common-field-types)|optional||Link to a web page with more information on this eligibility constraint.|

<h4 id="cdr-banking-api-modified-for-dp306-_bankingproductdiscounteligibility_enumerated-values-main">Enumerated Values</h4>

|Property|Value|
|---|---|
|discountEligibilityType|BUSINESS|
|discountEligibilityType|EMPLOYMENT_STATUS|
|discountEligibilityType|INTRODUCTORY|
|discountEligibilityType|MAX_AGE|
|discountEligibilityType|MIN_AGE|
|discountEligibilityType|MIN_INCOME|
|discountEligibilityType|MIN_TURNOVER|
|discountEligibilityType|NATURAL_PERSON|
|discountEligibilityType|OTHER|
|discountEligibilityType|PENSION_RECIPIENT|
|discountEligibilityType|RESIDENCY_STATUS|
|discountEligibilityType|STAFF|
|discountEligibilityType|STUDENT|

<h3 class="schema-toc" id="cdr-banking-api-modified-for-dp306-_schemas_tocSbankingproductdepositratev2">BankingProductDepositRateV2</h3>
<p id="tocSbankingproductdepositratev2" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api-modified-for-dp306-_schema-base_bankingproductdepositrate"></a>
  <a class="schema-anchor" id="schemacdr-banking-api-modified-for-dp306-bankingproductdepositratev2"></a>
</p>

```json
{
  "depositRateType": "VARIABLE",
  "rate": "string",
  "adjustmentToBase": "FIXED",
  "adjustmentBundle": "string",
  "calculationFrequency": "string",
  "applicationType": "PERIODIC",
  "applicationFrequency": "string",
  "tiers": [
    {
      "name": "string",
      "unitOfMeasure": "DAY",
      "minimumValue": "string",
      "maximumValue": "string",
      "rateApplicationMethod": "PER_TIER",
      "applicabilityConditions": [
        {
          "rateApplicabilityType": "NEW_CUSTOMER",
          "additionalValue": "string",
          "additionalInfo": "string",
          "additionalInfoUri": "string"
        }
      ],
      "additionalInfo": "string",
      "additionalInfoUri": "string"
    }
  ],
  "applicabilityConditions": [
    {
      "rateApplicabilityType": "NEW_CUSTOMER",
      "additionalValue": "string",
      "additionalInfo": "string",
      "additionalInfoUri": "string"
    }
  ],
  "additionalValue": "string",
  "additionalInfo": "string",
  "additionalInfoUri": "string"
}
```

<h3 id="cdr-banking-api-modified-for-dp306-_bankingproductdepositratev2_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|depositRateType|[Enum](#common-field-types)|mandatory||The type of rate (`FIXED`, `VARIABLE`, `BONUS`, etc.) For further details, refer to [Product Deposit Rate Types](#tocSproductdepositratetypedoc).|
|rate|[RateString](#common-field-types)|mandatory||The rate to be applied.|
|adjustmentToBase|[Enum](#common-field-types)|optional||For an adjustment _depositRateType_, the base rate that the adjustment value will apply to. The value of the _additionalValue_ field may be used to further qualify the corresponding base.|
|adjustmentBundle|string|optional||The name of the bundle that makes the adjustment rate applicable.|
|calculationFrequency|[ExternalRef](#common-field-types)|optional||The period after which the rate is applied to the balance to calculate the amount due for the period. Calculation of the amount is often daily (as balances may change) but accumulated until the total amount is 'applied' to the account (see _applicationFrequency_). Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax).|
|applicationType|[Enum](#common-field-types)|optional||The type of approach used to apply the rate to the account. An _applicationFrequency_ value is only expected when the approach is `PERIODIC`.|
|applicationFrequency|[ExternalRef](#common-field-types)|optional||The period after which the calculated amount(s) (see _calculationFrequency_) are 'applied' (i.e. debited or credited) to the account. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax).|
|tiers|[[BankingProductRateTierV4](#schemacdr-banking-api-modified-for-dp306-bankingproductratetierv4)]|optional||Rate tiers applicable for this rate.|
|applicabilityConditions|[[BankingProductRateConditionV2](#schemacdr-banking-api-modified-for-dp306-bankingproductrateconditionv2)]|optional||Array of applicability conditions for a rate.|
|additionalValue|string|conditional||Generic field containing additional information relevant to the [_depositRateType_](#tocSproductdepositratetypedoc) specified. Whether mandatory or not is dependent on the value of [_depositRateType_](#tocSproductdepositratetypedoc).|
|additionalInfo|string|optional||Display text providing more information on the rate.|
|additionalInfoUri|[URIString](#common-field-types)|optional||Link to a web page with more information on this rate.|

<h4 id="cdr-banking-api-modified-for-dp306-_bankingproductdepositratev2_enumerated-values-main">Enumerated Values</h4>

|Property|Value|
|---|---|
|depositRateType|BONUS|
|depositRateType|FIXED|
|depositRateType|FLOATING|
|depositRateType|MARKET_LINKED|
|depositRateType|VARIABLE|
|adjustmentToBase|FIXED|
|adjustmentToBase|FLOATING|
|adjustmentToBase|MARKET_LINKED|
|adjustmentToBase|VARIABLE|
|applicationType|MATURITY|
|applicationType|PERIODIC|
|applicationType|UPFRONT|

<h3 class="schema-toc" id="cdr-banking-api-modified-for-dp306-_schemas_tocSbankingproductlendingratev3">BankingProductLendingRateV3</h3>
<p id="tocSbankingproductlendingratev3" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api-modified-for-dp306-_schema-base_bankingproductlendingrate"></a>
  <a class="schema-anchor" id="schemacdr-banking-api-modified-for-dp306-bankingproductlendingratev3"></a>
</p>

```json
{
  "lendingRateType": "DISCOUNT",
  "rate": "string",
  "referenceRate": "string",
  "comparisonRate": "string",
  "revertRate": "string",
  "revertProductId": "string",
  "adjustmentToBase": "BALANCE_TRANSFER",
  "adjustmentBundle": "string",
  "calculationFrequency": "string",
  "applicationType": "PERIODIC",
  "applicationFrequency": "string",
  "interestPaymentDue": "IN_ADVANCE",
  "repaymentType": "INTEREST_ONLY",
  "loanPurpose": "INVESTMENT",
  "tiers": [
    {
      "name": "string",
      "unitOfMeasure": "DAY",
      "minimumValue": "string",
      "maximumValue": "string",
      "rateApplicationMethod": "PER_TIER",
      "applicabilityConditions": [
        {
          "rateApplicabilityType": "NEW_CUSTOMER",
          "additionalValue": "string",
          "additionalInfo": "string",
          "additionalInfoUri": "string"
        }
      ],
      "additionalInfo": "string",
      "additionalInfoUri": "string"
    }
  ],
  "applicabilityConditions": [
    {
      "rateApplicabilityType": "NEW_CUSTOMER",
      "additionalValue": "string",
      "additionalInfo": "string",
      "additionalInfoUri": "string"
    }
  ],
  "additionalValue": "string",
  "additionalInfo": "string",
  "additionalInfoUri": "string"
}
```

<h3 id="cdr-banking-api-modified-for-dp306-_bankingproductlendingratev3_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|lendingRateType|[Enum](#common-field-types)|mandatory||The type of rate (`FIXED`, `VARIABLE`, etc.) For further details, refer to [Product Lending Rate Types](#tocSproductlendingratetypedoc).|
|rate|[RateString](#common-field-types)|conditional||The rate to be applied. Mandatory unless the _lendingRateType_ `FEE` is supplied.|
|referenceRate|[RateString](#common-field-types)|optional||The reference or index rate for this account option, or variant.|
|comparisonRate|[RateString](#common-field-types)|optional||A comparison rate equivalent for this rate. The comparison rate associated with an 'adjustment' [_lendingRateType_](#tocSproductlendingratetypedoc) is the full comparison rate assuming the adjusted rate is available for origination.|
|revertRate|[RateString](#common-field-types)|optional||The revert rate applicable after the respective rate expires. For example, `FIXED`, or `INTEREST_ONLY` rates may revert to a different rate when those terms expire. Expected where this product will continue to operate with a new 'revert' rate.|
|revertProductId|string|optional||A reference to a _productId_ that the associated product will revert to after the respective rate terms expire. For example, `FIXED`, or `INTEREST_ONLY` rates may revert to a different rate when those terms expire. Expected if the product will change when the rate reverts to different terms.|
|adjustmentToBase|[Enum](#common-field-types)|optional||For an adjustment _lendingRateType_, the base rate that the adjustment value will apply to. The values of the _repaymentType_, _loanPurpose_ and _additionalValue_ fields may be used to further qualify the corresponding base.|
|adjustmentBundle|string|optional||The name of the bundle that makes the adjustment rate applicable.|
|calculationFrequency|[ExternalRef](#common-field-types)|optional||The period after which the rate is applied to the balance to calculate the amount due for the period. Calculation of the amount is often daily (as balances may change) but accumulated until the total amount is 'applied' to the account (see _applicationFrequency_). Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax).|
|applicationType|[Enum](#common-field-types)|optional||The type of approach used to apply the rate to the account. An _applicationFrequency_ value is only expected when the approach is `PERIODIC`.|
|applicationFrequency|[ExternalRef](#common-field-types)|optional||The period after which the calculated amount(s) (see _calculationFrequency_) are 'applied' (i.e. debited or credited) to the account. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax).|
|interestPaymentDue|[Enum](#common-field-types)|optional||When loan payments are due to be paid within each period. The investment benefit of earlier payments affect the rate that can be offered.|
|repaymentType|[Enum](#common-field-types)|optional||Options in place for repayments. If absent, the lending rate is applicable to all repayment types.|
|loanPurpose|[Enum](#common-field-types)|optional||The reason for taking out the loan. If absent, the lending rate is applicable to all loan purposes.|
|tiers|[[BankingProductRateTierV4](#schemacdr-banking-api-modified-for-dp306-bankingproductratetierv4)]|optional||Rate tiers applicable for this rate.|
|applicabilityConditions|[[BankingProductRateConditionV2](#schemacdr-banking-api-modified-for-dp306-bankingproductrateconditionv2)]|optional||Array of applicability conditions for a rate.|
|additionalValue|string|conditional||Generic field containing additional information relevant to the [_lendingRateType_](#tocSproductlendingratetypedoc) specified. Whether mandatory or not is dependent on the value of [_lendingRateType_](#tocSproductlendingratetypedoc).|
|additionalInfo|string|optional||Display text providing more information on the rate.|
|additionalInfoUri|[URIString](#common-field-types)|optional||Link to a web page with more information on this rate.|

<h4 id="cdr-banking-api-modified-for-dp306-_bankingproductlendingratev3_enumerated-values-main">Enumerated Values</h4>

|Property|Value|
|---|---|
|lendingRateType|BALANCE_TRANSFER|
|lendingRateType|CASH_ADVANCE|
|lendingRateType|DISCOUNT|
|lendingRateType|FEE|
|lendingRateType|FIXED|
|lendingRateType|FLOATING|
|lendingRateType|MARKET_LINKED|
|lendingRateType|PENALTY|
|lendingRateType|PURCHASE|
|lendingRateType|VARIABLE|
|adjustmentToBase|BALANCE_TRANSFER|
|adjustmentToBase|CASH_ADVANCE|
|adjustmentToBase|FEE|
|adjustmentToBase|FIXED|
|adjustmentToBase|FLOATING|
|adjustmentToBase|MARKET_LINKED|
|adjustmentToBase|PURCHASE|
|adjustmentToBase|VARIABLE|
|applicationType|MATURITY|
|applicationType|PERIODIC|
|applicationType|UPFRONT|
|interestPaymentDue|IN_ADVANCE|
|interestPaymentDue|IN_ARREARS|
|repaymentType|INTEREST_ONLY|
|repaymentType|PRINCIPAL_AND_FEE|
|repaymentType|PRINCIPAL_AND_INTEREST|
|loanPurpose|INVESTMENT|
|loanPurpose|OWNER_OCCUPIED|

<h3 class="schema-toc" id="cdr-banking-api-modified-for-dp306-_schemas_tocSbankingproductratetierv4">BankingProductRateTierV4</h3>
<p id="tocSbankingproductratetierv4" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api-modified-for-dp306-_schema-base_bankingproductratetier"></a>
  <a class="schema-anchor" id="schemacdr-banking-api-modified-for-dp306-bankingproductratetierv4"></a>
</p>

```json
{
  "name": "string",
  "unitOfMeasure": "DAY",
  "minimumValue": "string",
  "maximumValue": "string",
  "rateApplicationMethod": "PER_TIER",
  "applicabilityConditions": [
    {
      "rateApplicabilityType": "NEW_CUSTOMER",
      "additionalValue": "string",
      "additionalInfo": "string",
      "additionalInfoUri": "string"
    }
  ],
  "additionalInfo": "string",
  "additionalInfoUri": "string"
}
```

*Defines the criteria and conditions for which a rate applies.*

<h3 id="cdr-banking-api-modified-for-dp306-_bankingproductratetierv4_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|name|string|mandatory||A display name for the tier.|
|unitOfMeasure|[Enum](#common-field-types)|mandatory||The unit of measure that applies to the _minimumValue_ and _maximumValue_ values, e.g.,<ul><li>`DOLLAR` for a dollar amount (with values in AmountString format)<li>`PERCENT` for Loan-to-Value Ratio or LVR (with values in RateString format)<li>`MONTH` or `DAY` for a period representing a discrete number of months or days for a fixed-term deposit or loan (with values as a string containing a positive integer).</ul>|
|minimumValue|string|mandatory||The number of _unitOfMeasure_ units that form the lower bound of the tier. The tier should be inclusive of this value.|
|maximumValue|string|optional||The number of _unitOfMeasure_ units that form the upper bound of the tier or band. For a tier with a discrete value (as opposed to a range of values e.g., 1 month) this must be the same as _minimumValue_. Where this is the same as the _minimumValue_ value of the next-higher tier the referenced tier should be exclusive of this value. For example a term deposit of 2 months falls into the upper tier of the following tiers: (1 – 2 months, 2 – 3 months). If absent the tier's range has no upper bound.|
|rateApplicationMethod|[Enum](#common-field-types)|optional||The method used to calculate the amount to be applied using one or more tiers. A single rate may be applied to the entire balance or each applicable tier rate is applied to the portion of the balance that falls into that tier (referred to as 'bands' or 'steps').|
|applicabilityConditions|[[BankingProductRateConditionV2](#schemacdr-banking-api-modified-for-dp306-bankingproductrateconditionv2)]|optional||Array of applicability conditions for a tier.|
|additionalInfo|string|optional||Display text providing more information on the rate tier.|
|additionalInfoUri|[URIString](#common-field-types)|optional||Link to a web page with more information on this rate tier.|

<h4 id="cdr-banking-api-modified-for-dp306-_bankingproductratetierv4_enumerated-values-main">Enumerated Values</h4>

|Property|Value|
|---|---|
|unitOfMeasure|DAY|
|unitOfMeasure|DOLLAR|
|unitOfMeasure|MONTH|
|unitOfMeasure|PERCENT|
|rateApplicationMethod|PER_TIER|
|rateApplicationMethod|WHOLE_BALANCE|

<h3 class="schema-toc" id="cdr-banking-api-modified-for-dp306-_schemas_tocSbankingproductrateconditionv2">BankingProductRateConditionV2</h3>
<p id="tocSbankingproductrateconditionv2" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api-modified-for-dp306-_schema-base_bankingproductratecondition"></a>
  <a class="schema-anchor" id="schemacdr-banking-api-modified-for-dp306-bankingproductrateconditionv2"></a>
</p>

```json
{
  "rateApplicabilityType": "NEW_CUSTOMER",
  "additionalValue": "string",
  "additionalInfo": "string",
  "additionalInfoUri": "string"
}
```

*Defines a condition for the applicability of a tiered rate.*

<h3 id="cdr-banking-api-modified-for-dp306-_bankingproductrateconditionv2_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|rateApplicabilityType|[Enum](#common-field-types)|optional||Category of applicability condition associated with the rate. For more information refer to [Rate and Tier Applicability Types](#tocSbankingproductrateconditiondoc).|
|additionalValue|string|conditional||Generic field containing additional information relevant to the _rateApplicabilityType_ specified. Whether mandatory or not is dependent on the value of [_rateApplicabilityType_](#tocSbankingproductrateconditiondoc).|
|additionalInfo|string|conditional||Display text providing more information on the condition.|
|additionalInfoUri|[URIString](#common-field-types)|optional||Link to a web page with more information on this condition.|

<h4 id="cdr-banking-api-modified-for-dp306-_bankingproductrateconditionv2_enumerated-values-main">Enumerated Values</h4>

|Property|Value|
|---|---|
|rateApplicabilityType|DEPOSITS_MIN|
|rateApplicabilityType|DEPOSITS_MIN_AMOUNT|
|rateApplicabilityType|DEPOSIT_BALANCE_INCREASED|
|rateApplicabilityType|EXISTING_CUST|
|rateApplicabilityType|NEW_ACCOUNTS|
|rateApplicabilityType|NEW_CUSTOMER|
|rateApplicabilityType|NEW_CUSTOMER_TO_GROUP|
|rateApplicabilityType|ONLINE_ONLY|
|rateApplicabilityType|OTHER|
|rateApplicabilityType|PURCHASES_MIN|
|rateApplicabilityType|WITHDRAWALS_MAX|
|rateApplicabilityType|WITHDRAWALS_MAX_AMOUNT|

<h3 class="schema-toc" id="cdr-banking-api-modified-for-dp306-_schemas_tocSbankingproductinstalments">BankingProductInstalments</h3>
<p id="tocSbankingproductinstalments" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api-modified-for-dp306-_schema-base_bankingproductinstalments"></a>
  <a class="schema-anchor" id="schemacdr-banking-api-modified-for-dp306-bankingproductinstalments"></a>
</p>

```json
{
  "maximumPlanCount": 1,
  "instalmentsLimit": "string",
  "minimumPlanValue": "string",
  "maximumPlanValue": "string",
  "minimumSplit": 4,
  "maximumSplit": 4
}
```

<h3 id="cdr-banking-api-modified-for-dp306-_bankingproductinstalments_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|maximumPlanCount|[PositiveInteger](#common-field-types)|mandatory||Total number of plans that may be created.|
|instalmentsLimit|[AmountString](#common-field-types)|mandatory||Maximum combined limit of all instalment plans that may be created.|
|minimumPlanValue|[AmountString](#common-field-types)|mandatory||Minimum value that can be opened as an instalment plan.|
|maximumPlanValue|[AmountString](#common-field-types)|mandatory||Maximum value that can be opened as an instalment plan.|
|minimumSplit|[PositiveInteger](#common-field-types)|mandatory||Minimum number of instalment payments a plan can be created with.|
|maximumSplit|[PositiveInteger](#common-field-types)|mandatory||Maximum number of instalment payments a plan can be created with.|

<h3 class="schema-toc" id="cdr-banking-api-modified-for-dp306-_schemas_tocSresponsebankingaccountlistv3">ResponseBankingAccountListV3</h3>
<p id="tocSresponsebankingaccountlistv3" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api-modified-for-dp306-_schema-base_responsebankingaccountlist"></a>
  <a class="schema-anchor" id="schemacdr-banking-api-modified-for-dp306-responsebankingaccountlistv3"></a>
</p>

```json
{
  "data": {
    "accounts": [
      {
        "accountId": "string",
        "creationDate": "string",
        "displayName": "string",
        "nickname": "string",
        "openStatus": "CLOSED",
        "isOwned": true,
        "accountOwnership": "UNKNOWN",
        "maskedNumber": "string",
        "productCategory": "BUSINESS_LOANS",
        "productName": "string"
      }
    ]
  },
  "links": {
    "self": "string",
    "first": "string",
    "prev": "string",
    "next": "string",
    "last": "string"
  },
  "meta": {
    "totalRecords": 0,
    "totalPages": 0
  }
}
```

<h3 id="cdr-banking-api-modified-for-dp306-_responsebankingaccountlistv3_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|data|object|mandatory||none|
|» accounts|[[BankingAccountV3](#schemacdr-banking-api-modified-for-dp306-bankingaccountv3)]|mandatory||The list of accounts returned. If the filter results in an empty set then this array may have no records.|
|links|[LinksPaginated](#schemacdr-banking-api-modified-for-dp306-linkspaginated)|mandatory||none|
|meta|[MetaPaginated](#schemacdr-banking-api-modified-for-dp306-metapaginated)|mandatory||none|

<h3 class="schema-toc" id="cdr-banking-api-modified-for-dp306-_schemas_tocSbankingaccountv3">BankingAccountV3</h3>
<p id="tocSbankingaccountv3" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api-modified-for-dp306-_schema-base_bankingaccount"></a>
  <a class="schema-anchor" id="schemacdr-banking-api-modified-for-dp306-bankingaccountv3"></a>
</p>

```json
{
  "accountId": "string",
  "creationDate": "string",
  "displayName": "string",
  "nickname": "string",
  "openStatus": "CLOSED",
  "isOwned": true,
  "accountOwnership": "UNKNOWN",
  "maskedNumber": "string",
  "productCategory": "BUSINESS_LOANS",
  "productName": "string"
}
```

<h3 id="cdr-banking-api-modified-for-dp306-_bankingaccountv3_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|accountId|[BankingAccountId](#schemacdr-banking-api-modified-for-dp306-bankingaccountid)|mandatory||Unique identifier for the account.|
|creationDate|[DateString](#common-field-types)|optional||Date that the account was created (if known).|
|displayName|string|mandatory||The display name of the account as defined by the bank. This should not incorporate account numbers or PANs. If it does the values should be masked according to the rules of the [MaskedAccountString](#common-field-types) common type.|
|nickname|string|optional||A customer supplied nickname for the account.|
|openStatus|[Enum](#common-field-types)|optional|`OPEN`|Open or closed status for the account. If not present then `OPEN` is assumed.|
|isOwned|[Boolean](#common-field-types)|optional|`true`|Flag indicating that the customer associated with the authorisation is an owner of the account. Does not indicate sole ownership, however. If not present then `true` is assumed.|
|accountOwnership|[Enum](#common-field-types)|mandatory||Value indicating the number of customers that have ownership of the account, according to the data holder's definition of account ownership. Does not indicate that all account owners are eligible consumers.|
|maskedNumber|[MaskedAccountString](#common-field-types)|mandatory||A masked version of the account. Whether BSB/Account Number, Credit Card PAN or another number.|
|productCategory|[BankingProductCategoryV2](#schemacdr-banking-api-modified-for-dp306-bankingproductcategoryv2)|mandatory||The category to which a product or account belongs. See [here](#product-categories) for more details.|
|productName|string|mandatory||The unique identifier of the account as defined by the data holder (akin to model number for the account).|

<h4 id="cdr-banking-api-modified-for-dp306-_bankingaccountv3_enumerated-values-main">Enumerated Values</h4>

|Property|Value|
|---|---|
|openStatus|CLOSED|
|openStatus|OPEN|
|accountOwnership|UNKNOWN|
|accountOwnership|ONE_PARTY|
|accountOwnership|TWO_PARTY|
|accountOwnership|MANY_PARTY|
|accountOwnership|OTHER|

<h3 class="schema-toc" id="cdr-banking-api-modified-for-dp306-_schemas_tocSresponsebankingaccountbyidv4">ResponseBankingAccountByIdV4</h3>
<p id="tocSresponsebankingaccountbyidv4" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api-modified-for-dp306-_schema-base_responsebankingaccountbyid"></a>
  <a class="schema-anchor" id="schemacdr-banking-api-modified-for-dp306-responsebankingaccountbyidv4"></a>
</p>

```json
{
  "data": {
    "accountId": "string",
    "creationDate": "string",
    "displayName": "string",
    "nickname": "string",
    "openStatus": "CLOSED",
    "isOwned": true,
    "accountOwnership": "UNKNOWN",
    "maskedNumber": "string",
    "productCategory": "BUSINESS_LOANS",
    "productName": "string",
    "bsb": "string",
    "accountNumber": "string",
    "bundleName": "string",
    "cardOption": {
      "cardScheme": "AMEX",
      "cardType": "CHARGE",
      "cardImages": [
        {
          "title": "string",
          "imageUri": "string"
        }
      ]
    },
    "instalments": {
      "maximumPlanCount": 1,
      "instalmentsLimit": "string",
      "minimumPlanValue": "string",
      "maximumPlanValue": "string",
      "minimumSplit": 4,
      "maximumSplit": 4,
      "plans": [
        {
          "planNickname": "string",
          "creationDate": "string",
          "amount": "string",
          "duration": "string",
          "instalmentInterval": "string",
          "schedule": [
            {
              "amountDue": "string",
              "dueDate": "string"
            }
          ]
        }
      ]
    },
    "termDeposit": [
      {
        "lodgementDate": "string",
        "maturityDate": "string",
        "maturityAmount": "string",
        "maturityCurrency": "AUD",
        "maturityInstructions": "HOLD_ON_MATURITY",
        "depositRateDetail": {
          "depositRateType": "FIXED",
          "referenceRate": "string",
          "effectiveRate": "string",
          "calculationFrequency": "string",
          "applicationType": "PERIODIC",
          "applicationFrequency": "string",
          "tiers": [
            {
              "name": "string",
              "unitOfMeasure": "DAY",
              "minimumValue": "string",
              "maximumValue": "string",
              "rateApplicationMethod": "PER_TIER",
              "applicabilityConditions": [
                {
                  "rateApplicabilityType": "NEW_CUSTOMER",
                  "additionalValue": "string",
                  "additionalInfo": "string",
                  "additionalInfoUri": "string"
                }
              ],
              "additionalInfo": "string",
              "additionalInfoUri": "string"
            }
          ],
          "applicabilityConditions": [
            {
              "rateApplicabilityType": "NEW_CUSTOMER",
              "additionalValue": "string",
              "additionalInfo": "string",
              "additionalInfoUri": "string"
            }
          ],
          "additionalValue": "string",
          "additionalInfo": "string",
          "additionalInfoUri": "string",
          "adjustments": [
            {
              "adjustmentType": "BONUS",
              "amount": "string",
              "currency": "AUD",
              "rate": "string",
              "adjustmentBundle": "string",
              "adjustmentPeriod": "string",
              "adjustmentEndDate": "string",
              "additionalValue": "string",
              "additionalInfo": "string",
              "additionalInfoUri": "string"
            }
          ]
        }
      }
    ],
    "creditCard": {
      "minPaymentAmount": "string",
      "paymentDueAmount": "string",
      "paymentCurrency": "AUD",
      "paymentDueDate": "string",
      "cardPlans": [
        {
          "nickname": "string",
          "planType": "PURCHASE_PLAN",
          "atExpiryBalanceTransfersTo": "PURCHASE_PLAN",
          "planCreationDate": "string",
          "planPeriod": "string",
          "planEndDate": "string",
          "planReferenceRate": "string",
          "planEffectiveRate": "string",
          "minPaymentAmount": "string",
          "paymentDueAmount": "string",
          "paymentCurrency": "AUD",
          "paymentDueDate": "string",
          "additionalInfo": "string",
          "additionalInfoUri": "string",
          "interestFreePeriods": [
            {
              "from": "string",
              "to": "string"
            }
          ],
          "adjustments": [
            {
              "adjustmentType": "BONUS",
              "amount": "string",
              "currency": "AUD",
              "rate": "string",
              "adjustmentBundle": "string",
              "adjustmentPeriod": "string",
              "adjustmentEndDate": "string",
              "additionalValue": "string",
              "additionalInfo": "string",
              "additionalInfoUri": "string"
            }
          ],
          "planFeatures": [
            {
              "planFeatureType": "BALANCE_TRANSFER_ENDS_INTEREST_FREE",
              "period": "string",
              "endDate": "string",
              "additionalValue": "string",
              "additionalInfo": "string",
              "additionalInfoUri": "string"
            }
          ]
        }
      ]
    },
    "loan": {
      "originalStartDate": "string",
      "originalLoanAmount": "string",
      "originalLoanCurrency": "AUD",
      "loanEndDate": "string",
      "nextInstalmentDate": "string",
      "minInstalmentAmount": "string",
      "minInstalmentCurrency": "AUD",
      "maxRedraw": "string",
      "maxRedrawCurrency": "AUD",
      "minRedraw": "string",
      "minRedrawCurrency": "AUD",
      "offsetAccountEnabled": true,
      "offsetAccountIds": [
        "string"
      ],
      "lendingRateDetail": [
        {
          "loanPurpose": "OWNER_OCCUPIED",
          "repaymentType": "PRINCIPAL_AND_INTEREST",
          "rateStartDate": "string",
          "rateEndDate": "string",
          "revertProductId": "string",
          "repaymentUType": "fixedRate",
          "fixedRate": {
            "fixedPeriod": "string",
            "referenceRate": "string",
            "effectiveRate": "string",
            "calculationFrequency": "string",
            "applicationType": "PERIODIC",
            "applicationFrequency": "string",
            "interestPaymentDue": "IN_ADVANCE",
            "repaymentFrequency": "string",
            "additionalInfo": "string",
            "additionalInfoUri": "string"
          },
          "variableRate": {
            "variableRateType": "FLOATING",
            "referenceRate": "string",
            "effectiveRate": "string",
            "calculationFrequency": "string",
            "applicationType": "PERIODIC",
            "applicationFrequency": "string",
            "interestPaymentDue": "IN_ADVANCE",
            "repaymentFrequency": "string",
            "additionalValue": "string",
            "additionalInfo": "string",
            "additionalInfoUri": "string"
          },
          "feeAmount": {
            "amount": "string",
            "currency": "AUD",
            "repaymentDue": "IN_ADVANCE",
            "repaymentFrequency": "string",
            "additionalInfo": "string",
            "additionalInfoUri": "string"
          },
          "adjustments": [
            {
              "adjustmentType": "BONUS",
              "amount": "string",
              "currency": "AUD",
              "rate": "string",
              "adjustmentBundle": "string",
              "adjustmentPeriod": "string",
              "adjustmentEndDate": "string",
              "additionalValue": "string",
              "additionalInfo": "string",
              "additionalInfoUri": "string"
            }
          ]
        }
      ]
    },
    "deposit": {
      "lodgementDate": "string",
      "nickname": "string",
      "depositRateDetail": {
        "depositRateType": "FIXED",
        "referenceRate": "string",
        "effectiveRate": "string",
        "calculationFrequency": "string",
        "applicationType": "PERIODIC",
        "applicationFrequency": "string",
        "tiers": [
          {
            "name": "string",
            "unitOfMeasure": "DAY",
            "minimumValue": "string",
            "maximumValue": "string",
            "rateApplicationMethod": "PER_TIER",
            "applicabilityConditions": [
              {
                "rateApplicabilityType": "NEW_CUSTOMER",
                "additionalValue": "string",
                "additionalInfo": "string",
                "additionalInfoUri": "string"
              }
            ],
            "additionalInfo": "string",
            "additionalInfoUri": "string"
          }
        ],
        "applicabilityConditions": [
          {
            "rateApplicabilityType": "NEW_CUSTOMER",
            "additionalValue": "string",
            "additionalInfo": "string",
            "additionalInfoUri": "string"
          }
        ],
        "additionalValue": "string",
        "additionalInfo": "string",
        "additionalInfoUri": "string",
        "adjustments": [
          {
            "adjustmentType": "BONUS",
            "amount": "string",
            "currency": "AUD",
            "rate": "string",
            "adjustmentBundle": "string",
            "adjustmentPeriod": "string",
            "adjustmentEndDate": "string",
            "additionalValue": "string",
            "additionalInfo": "string",
            "additionalInfoUri": "string"
          }
        ]
      }
    },
    "features": [
      {
        "featureType": "ADDITIONAL_CARDS",
        "additionalValue": "string",
        "additionalInfo": "string",
        "additionalInfoUri": "string",
        "isActivated": true
      }
    ],
    "fees": [
      {
        "name": "string",
        "feeCategory": "CARD",
        "feeType": "CASH_ADVANCE",
        "feeMethodUType": "fixedAmount",
        "fixedAmount": {
          "amount": "string"
        },
        "rateBased": {
          "balanceRate": "string",
          "transactionRate": "string",
          "accruedRate": "string",
          "accrualFrequency": "string",
          "amountRange": {
            "feeMinimum": "string",
            "feeMaximum": "string"
          }
        },
        "variable": {
          "feeMinimum": "string",
          "feeMaximum": "string"
        },
        "feeCap": "string",
        "feeCapPeriod": "string",
        "currency": "AUD",
        "additionalValue": "string",
        "additionalInfo": "string",
        "additionalInfoUri": "string",
        "discounts": [
          {
            "description": "string",
            "discountType": "BALANCE",
            "amount": "string",
            "balanceRate": "string",
            "transactionRate": "string",
            "accruedRate": "string",
            "feeRate": "string",
            "additionalValue": "string",
            "additionalInfo": "string",
            "additionalInfoUri": "string",
            "eligibility": [
              {
                "discountEligibilityType": "BUSINESS",
                "additionalValue": "string",
                "additionalInfo": "string",
                "additionalInfoUri": "string"
              }
            ]
          }
        ]
      }
    ],
    "addresses": [
      {
        "addressUType": "paf",
        "simple": {
          "mailingName": "string",
          "addressLine1": "string",
          "addressLine2": "string",
          "addressLine3": "string",
          "postcode": "string",
          "city": "string",
          "state": "string",
          "country": "AUS"
        },
        "paf": {
          "dpid": "string",
          "thoroughfareNumber1": 0,
          "thoroughfareNumber1Suffix": "string",
          "thoroughfareNumber2": 0,
          "thoroughfareNumber2Suffix": "string",
          "flatUnitType": "string",
          "flatUnitNumber": "string",
          "floorLevelType": "string",
          "floorLevelNumber": "string",
          "lotNumber": "string",
          "buildingName1": "string",
          "buildingName2": "string",
          "streetName": "string",
          "streetType": "string",
          "streetSuffix": "string",
          "postalDeliveryType": "string",
          "postalDeliveryNumber": 0,
          "postalDeliveryNumberPrefix": "string",
          "postalDeliveryNumberSuffix": "string",
          "localityName": "string",
          "postcode": "string",
          "state": "string"
        }
      }
    ]
  },
  "links": {
    "self": "string"
  },
  "meta": {}
}
```

<h3 id="cdr-banking-api-modified-for-dp306-_responsebankingaccountbyidv4_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|data|[BankingAccountDetailV4](#schemacdr-banking-api-modified-for-dp306-bankingaccountdetailv4)|mandatory||none|
|links|[Links](#schemacdr-banking-api-modified-for-dp306-links)|mandatory||none|
|meta|[Meta](#schemacdr-banking-api-modified-for-dp306-meta)|optional||none|

<h3 class="schema-toc" id="cdr-banking-api-modified-for-dp306-_schemas_tocSbankingaccountdetailv4">BankingAccountDetailV4</h3>
<p id="tocSbankingaccountdetailv4" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api-modified-for-dp306-_schema-base_bankingaccountdetail"></a>
  <a class="schema-anchor" id="schemacdr-banking-api-modified-for-dp306-bankingaccountdetailv4"></a>
</p>

```json
{
  "accountId": "string",
  "creationDate": "string",
  "displayName": "string",
  "nickname": "string",
  "openStatus": "CLOSED",
  "isOwned": true,
  "accountOwnership": "UNKNOWN",
  "maskedNumber": "string",
  "productCategory": "BUSINESS_LOANS",
  "productName": "string",
  "bsb": "string",
  "accountNumber": "string",
  "bundleName": "string",
  "cardOption": {
    "cardScheme": "AMEX",
    "cardType": "CHARGE",
    "cardImages": [
      {
        "title": "string",
        "imageUri": "string"
      }
    ]
  },
  "instalments": {
    "maximumPlanCount": 1,
    "instalmentsLimit": "string",
    "minimumPlanValue": "string",
    "maximumPlanValue": "string",
    "minimumSplit": 4,
    "maximumSplit": 4,
    "plans": [
      {
        "planNickname": "string",
        "creationDate": "string",
        "amount": "string",
        "duration": "string",
        "instalmentInterval": "string",
        "schedule": [
          {
            "amountDue": "string",
            "dueDate": "string"
          }
        ]
      }
    ]
  },
  "termDeposit": [
    {
      "lodgementDate": "string",
      "maturityDate": "string",
      "maturityAmount": "string",
      "maturityCurrency": "AUD",
      "maturityInstructions": "HOLD_ON_MATURITY",
      "depositRateDetail": {
        "depositRateType": "FIXED",
        "referenceRate": "string",
        "effectiveRate": "string",
        "calculationFrequency": "string",
        "applicationType": "PERIODIC",
        "applicationFrequency": "string",
        "tiers": [
          {
            "name": "string",
            "unitOfMeasure": "DAY",
            "minimumValue": "string",
            "maximumValue": "string",
            "rateApplicationMethod": "PER_TIER",
            "applicabilityConditions": [
              {
                "rateApplicabilityType": "NEW_CUSTOMER",
                "additionalValue": "string",
                "additionalInfo": "string",
                "additionalInfoUri": "string"
              }
            ],
            "additionalInfo": "string",
            "additionalInfoUri": "string"
          }
        ],
        "applicabilityConditions": [
          {
            "rateApplicabilityType": "NEW_CUSTOMER",
            "additionalValue": "string",
            "additionalInfo": "string",
            "additionalInfoUri": "string"
          }
        ],
        "additionalValue": "string",
        "additionalInfo": "string",
        "additionalInfoUri": "string",
        "adjustments": [
          {
            "adjustmentType": "BONUS",
            "amount": "string",
            "currency": "AUD",
            "rate": "string",
            "adjustmentBundle": "string",
            "adjustmentPeriod": "string",
            "adjustmentEndDate": "string",
            "additionalValue": "string",
            "additionalInfo": "string",
            "additionalInfoUri": "string"
          }
        ]
      }
    }
  ],
  "creditCard": {
    "minPaymentAmount": "string",
    "paymentDueAmount": "string",
    "paymentCurrency": "AUD",
    "paymentDueDate": "string",
    "cardPlans": [
      {
        "nickname": "string",
        "planType": "PURCHASE_PLAN",
        "atExpiryBalanceTransfersTo": "PURCHASE_PLAN",
        "planCreationDate": "string",
        "planPeriod": "string",
        "planEndDate": "string",
        "planReferenceRate": "string",
        "planEffectiveRate": "string",
        "minPaymentAmount": "string",
        "paymentDueAmount": "string",
        "paymentCurrency": "AUD",
        "paymentDueDate": "string",
        "additionalInfo": "string",
        "additionalInfoUri": "string",
        "interestFreePeriods": [
          {
            "from": "string",
            "to": "string"
          }
        ],
        "adjustments": [
          {
            "adjustmentType": "BONUS",
            "amount": "string",
            "currency": "AUD",
            "rate": "string",
            "adjustmentBundle": "string",
            "adjustmentPeriod": "string",
            "adjustmentEndDate": "string",
            "additionalValue": "string",
            "additionalInfo": "string",
            "additionalInfoUri": "string"
          }
        ],
        "planFeatures": [
          {
            "planFeatureType": "BALANCE_TRANSFER_ENDS_INTEREST_FREE",
            "period": "string",
            "endDate": "string",
            "additionalValue": "string",
            "additionalInfo": "string",
            "additionalInfoUri": "string"
          }
        ]
      }
    ]
  },
  "loan": {
    "originalStartDate": "string",
    "originalLoanAmount": "string",
    "originalLoanCurrency": "AUD",
    "loanEndDate": "string",
    "nextInstalmentDate": "string",
    "minInstalmentAmount": "string",
    "minInstalmentCurrency": "AUD",
    "maxRedraw": "string",
    "maxRedrawCurrency": "AUD",
    "minRedraw": "string",
    "minRedrawCurrency": "AUD",
    "offsetAccountEnabled": true,
    "offsetAccountIds": [
      "string"
    ],
    "lendingRateDetail": [
      {
        "loanPurpose": "OWNER_OCCUPIED",
        "repaymentType": "PRINCIPAL_AND_INTEREST",
        "rateStartDate": "string",
        "rateEndDate": "string",
        "revertProductId": "string",
        "repaymentUType": "fixedRate",
        "fixedRate": {
          "fixedPeriod": "string",
          "referenceRate": "string",
          "effectiveRate": "string",
          "calculationFrequency": "string",
          "applicationType": "PERIODIC",
          "applicationFrequency": "string",
          "interestPaymentDue": "IN_ADVANCE",
          "repaymentFrequency": "string",
          "additionalInfo": "string",
          "additionalInfoUri": "string"
        },
        "variableRate": {
          "variableRateType": "FLOATING",
          "referenceRate": "string",
          "effectiveRate": "string",
          "calculationFrequency": "string",
          "applicationType": "PERIODIC",
          "applicationFrequency": "string",
          "interestPaymentDue": "IN_ADVANCE",
          "repaymentFrequency": "string",
          "additionalValue": "string",
          "additionalInfo": "string",
          "additionalInfoUri": "string"
        },
        "feeAmount": {
          "amount": "string",
          "currency": "AUD",
          "repaymentDue": "IN_ADVANCE",
          "repaymentFrequency": "string",
          "additionalInfo": "string",
          "additionalInfoUri": "string"
        },
        "adjustments": [
          {
            "adjustmentType": "BONUS",
            "amount": "string",
            "currency": "AUD",
            "rate": "string",
            "adjustmentBundle": "string",
            "adjustmentPeriod": "string",
            "adjustmentEndDate": "string",
            "additionalValue": "string",
            "additionalInfo": "string",
            "additionalInfoUri": "string"
          }
        ]
      }
    ]
  },
  "deposit": {
    "lodgementDate": "string",
    "nickname": "string",
    "depositRateDetail": {
      "depositRateType": "FIXED",
      "referenceRate": "string",
      "effectiveRate": "string",
      "calculationFrequency": "string",
      "applicationType": "PERIODIC",
      "applicationFrequency": "string",
      "tiers": [
        {
          "name": "string",
          "unitOfMeasure": "DAY",
          "minimumValue": "string",
          "maximumValue": "string",
          "rateApplicationMethod": "PER_TIER",
          "applicabilityConditions": [
            {
              "rateApplicabilityType": "NEW_CUSTOMER",
              "additionalValue": "string",
              "additionalInfo": "string",
              "additionalInfoUri": "string"
            }
          ],
          "additionalInfo": "string",
          "additionalInfoUri": "string"
        }
      ],
      "applicabilityConditions": [
        {
          "rateApplicabilityType": "NEW_CUSTOMER",
          "additionalValue": "string",
          "additionalInfo": "string",
          "additionalInfoUri": "string"
        }
      ],
      "additionalValue": "string",
      "additionalInfo": "string",
      "additionalInfoUri": "string",
      "adjustments": [
        {
          "adjustmentType": "BONUS",
          "amount": "string",
          "currency": "AUD",
          "rate": "string",
          "adjustmentBundle": "string",
          "adjustmentPeriod": "string",
          "adjustmentEndDate": "string",
          "additionalValue": "string",
          "additionalInfo": "string",
          "additionalInfoUri": "string"
        }
      ]
    }
  },
  "features": [
    {
      "featureType": "ADDITIONAL_CARDS",
      "additionalValue": "string",
      "additionalInfo": "string",
      "additionalInfoUri": "string",
      "isActivated": true
    }
  ],
  "fees": [
    {
      "name": "string",
      "feeCategory": "CARD",
      "feeType": "CASH_ADVANCE",
      "feeMethodUType": "fixedAmount",
      "fixedAmount": {
        "amount": "string"
      },
      "rateBased": {
        "balanceRate": "string",
        "transactionRate": "string",
        "accruedRate": "string",
        "accrualFrequency": "string",
        "amountRange": {
          "feeMinimum": "string",
          "feeMaximum": "string"
        }
      },
      "variable": {
        "feeMinimum": "string",
        "feeMaximum": "string"
      },
      "feeCap": "string",
      "feeCapPeriod": "string",
      "currency": "AUD",
      "additionalValue": "string",
      "additionalInfo": "string",
      "additionalInfoUri": "string",
      "discounts": [
        {
          "description": "string",
          "discountType": "BALANCE",
          "amount": "string",
          "balanceRate": "string",
          "transactionRate": "string",
          "accruedRate": "string",
          "feeRate": "string",
          "additionalValue": "string",
          "additionalInfo": "string",
          "additionalInfoUri": "string",
          "eligibility": [
            {
              "discountEligibilityType": "BUSINESS",
              "additionalValue": "string",
              "additionalInfo": "string",
              "additionalInfoUri": "string"
            }
          ]
        }
      ]
    }
  ],
  "addresses": [
    {
      "addressUType": "paf",
      "simple": {
        "mailingName": "string",
        "addressLine1": "string",
        "addressLine2": "string",
        "addressLine3": "string",
        "postcode": "string",
        "city": "string",
        "state": "string",
        "country": "AUS"
      },
      "paf": {
        "dpid": "string",
        "thoroughfareNumber1": 0,
        "thoroughfareNumber1Suffix": "string",
        "thoroughfareNumber2": 0,
        "thoroughfareNumber2Suffix": "string",
        "flatUnitType": "string",
        "flatUnitNumber": "string",
        "floorLevelType": "string",
        "floorLevelNumber": "string",
        "lotNumber": "string",
        "buildingName1": "string",
        "buildingName2": "string",
        "streetName": "string",
        "streetType": "string",
        "streetSuffix": "string",
        "postalDeliveryType": "string",
        "postalDeliveryNumber": 0,
        "postalDeliveryNumberPrefix": "string",
        "postalDeliveryNumberSuffix": "string",
        "localityName": "string",
        "postcode": "string",
        "state": "string"
      }
    }
  ]
}
```

<h3 id="cdr-banking-api-modified-for-dp306-_bankingaccountdetailv4_properties">Properties</h3>

*allOf*

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|*anonymous*|[BankingAccountV3](#schemacdr-banking-api-modified-for-dp306-bankingaccountv3)|mandatory||none|

*and*

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|*anonymous*|object|mandatory||none|
|» bsb|string|optional||The unmasked BSB for the account. Is expected to be formatted as digits only with leading zeros included and no punctuation or spaces.|
|» accountNumber|string|optional||The unmasked account number for the account. Should not be supplied if the account number is a PAN requiring PCI compliance. Is expected to be formatted as digits only with leading zeros included and no punctuation or spaces.|
|» bundleName|string|optional||Optional field to indicate if this account is part of a bundle that is providing additional benefit to the customer.|
|» cardOption|[BankingProductCardOption](#schemacdr-banking-api-modified-for-dp306-bankingproductcardoption)|optional||Information about the type of card available with the account.|
|» instalments|[BankingAccountInstalments](#schemacdr-banking-api-modified-for-dp306-bankingaccountinstalments)|optional||Details of instalment features on the account.|
|» termDeposit|[[BankingTermDepositAccountV2](#schemacdr-banking-api-modified-for-dp306-bankingtermdepositaccountv2)]|optional||A structure suited to accounts that have term deposit-like features.|
|» creditCard|[BankingCreditCardAccountV2](#schemacdr-banking-api-modified-for-dp306-bankingcreditcardaccountv2)|optional||A structure suited to accounts that have credit card-like features.|
|» loan|[BankingLoanAccountV3](#schemacdr-banking-api-modified-for-dp306-bankingloanaccountv3)|optional||A structure suited to accounts that have loan-like features.|
|» deposit|[BankingDepositAccount](#schemacdr-banking-api-modified-for-dp306-bankingdepositaccount)|optional||A structure suited to accounts that have deposit-like features without term deposit maturity detail.|
|» features|[allOf]|optional||Array of features of the account based on the equivalent structure in Product Reference with the following additional field.|

*allOf*

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|»» *anonymous*|[BankingProductFeatureV3](#schemacdr-banking-api-modified-for-dp306-bankingproductfeaturev3)|mandatory||Array of features and limitations of the product.|

*and*

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|»» *anonymous*|object|mandatory||none|
|»»» isActivated|[Boolean](#common-field-types)|optional||<ul><li>`true` if the feature has been activated by the customer or is a standard feature of the product.<li>`false` if the feature is not activated but is available for activation.<li>`null` or absent if the activation state is unknown.</ul>**Note:** this is an additional field appended to the feature object defined in the Product Reference payload.|

*continued*

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|» fees|[[BankingProductFeeV2](#schemacdr-banking-api-modified-for-dp306-bankingproductfeev2)]|optional||Fees and charges applicable to the account based on the equivalent structure in Product Reference.|
|» addresses|[[CommonPhysicalAddress](#schemacdr-banking-api-modified-for-dp306-commonphysicaladdress)]|optional||The addresses for the account to be used for correspondence.|

<h3 class="schema-toc" id="cdr-banking-api-modified-for-dp306-_schemas_tocSbankingaccountinstalments">BankingAccountInstalments</h3>
<p id="tocSbankingaccountinstalments" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api-modified-for-dp306-_schema-base_bankingaccountinstalments"></a>
  <a class="schema-anchor" id="schemacdr-banking-api-modified-for-dp306-bankingaccountinstalments"></a>
</p>

```json
{
  "maximumPlanCount": 1,
  "instalmentsLimit": "string",
  "minimumPlanValue": "string",
  "maximumPlanValue": "string",
  "minimumSplit": 4,
  "maximumSplit": 4,
  "plans": [
    {
      "planNickname": "string",
      "creationDate": "string",
      "amount": "string",
      "duration": "string",
      "instalmentInterval": "string",
      "schedule": [
        {
          "amountDue": "string",
          "dueDate": "string"
        }
      ]
    }
  ]
}
```

*Details of instalment features on the account.*

<h3 id="cdr-banking-api-modified-for-dp306-_bankingaccountinstalments_properties">Properties</h3>

*allOf*

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|*anonymous*|[BankingProductInstalments](#schemacdr-banking-api-modified-for-dp306-bankingproductinstalments)|mandatory||none|

*and*

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|*anonymous*|object|mandatory||none|
|» plans|[[BankingInstalmentPlans](#schemacdr-banking-api-modified-for-dp306-bankinginstalmentplans)]|optional||Array of instalment plans.|

<h3 class="schema-toc" id="cdr-banking-api-modified-for-dp306-_schemas_tocSbankinginstalmentplans">BankingInstalmentPlans</h3>
<p id="tocSbankinginstalmentplans" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api-modified-for-dp306-_schema-base_bankinginstalmentplans"></a>
  <a class="schema-anchor" id="schemacdr-banking-api-modified-for-dp306-bankinginstalmentplans"></a>
</p>

```json
{
  "planNickname": "string",
  "creationDate": "string",
  "amount": "string",
  "duration": "string",
  "instalmentInterval": "string",
  "schedule": [
    {
      "amountDue": "string",
      "dueDate": "string"
    }
  ]
}
```

<h3 id="cdr-banking-api-modified-for-dp306-_bankinginstalmentplans_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|planNickname|string|mandatory||The short display name of the plan as provided by the customer. Where a customer has not provided a nickname, a display name derived by the data holder consistent with existing channels.|
|creationDate|[DateString](#common-field-types)|mandatory||The date the plan was created.|
|amount|[AmountString](#common-field-types)|mandatory||The total amount of the plan.|
|duration|[ExternalRef](#common-field-types)|mandatory||The original expected repayment duration. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax).|
|instalmentInterval|[ExternalRef](#common-field-types)|mandatory||The expected repayment interval. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax).|
|schedule|[[BankingInstalmentPlanSchedule](#schemacdr-banking-api-modified-for-dp306-bankinginstalmentplanschedule)]|mandatory||Array of expected repayment amounts and dates.|

<h3 class="schema-toc" id="cdr-banking-api-modified-for-dp306-_schemas_tocSbankinginstalmentplanschedule">BankingInstalmentPlanSchedule</h3>
<p id="tocSbankinginstalmentplanschedule" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api-modified-for-dp306-_schema-base_bankinginstalmentplanschedule"></a>
  <a class="schema-anchor" id="schemacdr-banking-api-modified-for-dp306-bankinginstalmentplanschedule"></a>
</p>

```json
{
  "amountDue": "string",
  "dueDate": "string"
}
```

<h3 id="cdr-banking-api-modified-for-dp306-_bankinginstalmentplanschedule_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|amountDue|[AmountString](#common-field-types)|mandatory||Amount due with this repayment.|
|dueDate|[DateString](#common-field-types)|mandatory||Date this repayment is due.|

<h3 class="schema-toc" id="cdr-banking-api-modified-for-dp306-_schemas_tocSbankingtermdepositaccountv2">BankingTermDepositAccountV2</h3>
<p id="tocSbankingtermdepositaccountv2" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api-modified-for-dp306-_schema-base_bankingtermdepositaccount"></a>
  <a class="schema-anchor" id="schemacdr-banking-api-modified-for-dp306-bankingtermdepositaccountv2"></a>
</p>

```json
{
  "lodgementDate": "string",
  "maturityDate": "string",
  "maturityAmount": "string",
  "maturityCurrency": "AUD",
  "maturityInstructions": "HOLD_ON_MATURITY",
  "depositRateDetail": {
    "depositRateType": "FIXED",
    "referenceRate": "string",
    "effectiveRate": "string",
    "calculationFrequency": "string",
    "applicationType": "PERIODIC",
    "applicationFrequency": "string",
    "tiers": [
      {
        "name": "string",
        "unitOfMeasure": "DAY",
        "minimumValue": "string",
        "maximumValue": "string",
        "rateApplicationMethod": "PER_TIER",
        "applicabilityConditions": [
          {
            "rateApplicabilityType": "NEW_CUSTOMER",
            "additionalValue": "string",
            "additionalInfo": "string",
            "additionalInfoUri": "string"
          }
        ],
        "additionalInfo": "string",
        "additionalInfoUri": "string"
      }
    ],
    "applicabilityConditions": [
      {
        "rateApplicabilityType": "NEW_CUSTOMER",
        "additionalValue": "string",
        "additionalInfo": "string",
        "additionalInfoUri": "string"
      }
    ],
    "additionalValue": "string",
    "additionalInfo": "string",
    "additionalInfoUri": "string",
    "adjustments": [
      {
        "adjustmentType": "BONUS",
        "amount": "string",
        "currency": "AUD",
        "rate": "string",
        "adjustmentBundle": "string",
        "adjustmentPeriod": "string",
        "adjustmentEndDate": "string",
        "additionalValue": "string",
        "additionalInfo": "string",
        "additionalInfoUri": "string"
      }
    ]
  }
}
```

<h3 id="cdr-banking-api-modified-for-dp306-_bankingtermdepositaccountv2_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|lodgementDate|[DateString](#common-field-types)|mandatory||The lodgement date of the original deposit.|
|maturityDate|[DateString](#common-field-types)|mandatory||Maturity date for the term deposit.|
|maturityAmount|[AmountString](#common-field-types)|optional||Amount to be paid upon maturity. If absent it implies the amount to paid is variable and cannot currently be calculated.|
|maturityCurrency|[CurrencyString](#common-field-types)|optional|`AUD`|If absent assumes `AUD`.|
|maturityInstructions|[Enum](#common-field-types)|mandatory||Current instructions on action to be taken at maturity. This includes default actions that may be specified in the terms and conditions for the product e.g., roll-over to the same term and frequency of interest payments.|
|depositRateDetail|[BankingDepositRateDetail](#schemacdr-banking-api-modified-for-dp306-bankingdepositratedetail)|optional||Detail about deposit rates and adjustments.|

<h4 id="cdr-banking-api-modified-for-dp306-_bankingtermdepositaccountv2_enumerated-values-main">Enumerated Values</h4>

|Property|Value|
|---|---|
|maturityInstructions|HOLD_ON_MATURITY|
|maturityInstructions|PAID_OUT_AT_MATURITY|
|maturityInstructions|ROLLED_OVER|

<h3 class="schema-toc" id="cdr-banking-api-modified-for-dp306-_schemas_tocSbankingdepositratedetail">BankingDepositRateDetail</h3>
<p id="tocSbankingdepositratedetail" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api-modified-for-dp306-_schema-base_bankingdepositratedetail"></a>
  <a class="schema-anchor" id="schemacdr-banking-api-modified-for-dp306-bankingdepositratedetail"></a>
</p>

```json
{
  "depositRateType": "FIXED",
  "referenceRate": "string",
  "effectiveRate": "string",
  "calculationFrequency": "string",
  "applicationType": "PERIODIC",
  "applicationFrequency": "string",
  "tiers": [
    {
      "name": "string",
      "unitOfMeasure": "DAY",
      "minimumValue": "string",
      "maximumValue": "string",
      "rateApplicationMethod": "PER_TIER",
      "applicabilityConditions": [
        {
          "rateApplicabilityType": "NEW_CUSTOMER",
          "additionalValue": "string",
          "additionalInfo": "string",
          "additionalInfoUri": "string"
        }
      ],
      "additionalInfo": "string",
      "additionalInfoUri": "string"
    }
  ],
  "applicabilityConditions": [
    {
      "rateApplicabilityType": "NEW_CUSTOMER",
      "additionalValue": "string",
      "additionalInfo": "string",
      "additionalInfoUri": "string"
    }
  ],
  "additionalValue": "string",
  "additionalInfo": "string",
  "additionalInfoUri": "string",
  "adjustments": [
    {
      "adjustmentType": "BONUS",
      "amount": "string",
      "currency": "AUD",
      "rate": "string",
      "adjustmentBundle": "string",
      "adjustmentPeriod": "string",
      "adjustmentEndDate": "string",
      "additionalValue": "string",
      "additionalInfo": "string",
      "additionalInfoUri": "string"
    }
  ]
}
```

*Detail about deposit rates and adjustments.*

<h3 id="cdr-banking-api-modified-for-dp306-_bankingdepositratedetail_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|depositRateType|[Enum](#common-field-types)|mandatory||The type of rate.|
|referenceRate|[RateString](#common-field-types)|mandatory||Reference rate for this account type and terms.|
|effectiveRate|[RateString](#common-field-types)|mandatory||Rate being paid for this deposit.|
|calculationFrequency|[ExternalRef](#common-field-types)|optional||The period after which the rate is applied to the balance to calculate the amount due for the period. Calculation of the amount is often daily (as balances may change) but accumulated until the total amount is 'applied' to the account (see _applicationFrequency_). Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax).|
|applicationType|[Enum](#common-field-types)|optional||The type of approach used to apply the rate to the account. An _applicationFrequency_ value is only expected when the approach is `PERIODIC`.|
|applicationFrequency|[ExternalRef](#common-field-types)|optional||The period after which the calculated amount(s) (see _calculationFrequency_) are 'applied' (i.e. debited or credited) to the account. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax).|
|tiers|[[BankingProductRateTierV4](#schemacdr-banking-api-modified-for-dp306-bankingproductratetierv4)]|optional||Rate tiers applicable for this rate.|
|applicabilityConditions|[[BankingProductRateConditionV2](#schemacdr-banking-api-modified-for-dp306-bankingproductrateconditionv2)]|optional||Array of applicability conditions for a rate.|
|additionalValue|string|conditional||Generic field containing additional information relevant to the [_depositRateType_](#tocSproductdepositratetypedoc) specified. Whether mandatory or not is dependent on the value of [_depositRateType_](#tocSproductdepositratetypedoc).|
|additionalInfo|string|optional||Display text providing more information on the rate.|
|additionalInfoUri|[URIString](#common-field-types)|optional||Link to a web page with more information on this rate.|
|adjustments|[[BankingRateAdjustments](#schemacdr-banking-api-modified-for-dp306-bankingrateadjustments)]|optional||Adjustments applicable to the rate.|

<h4 id="cdr-banking-api-modified-for-dp306-_bankingdepositratedetail_enumerated-values-main">Enumerated Values</h4>

|Property|Value|
|---|---|
|depositRateType|FIXED|
|depositRateType|FLOATING|
|depositRateType|MARKET_LINKED|
|depositRateType|VARIABLE|
|applicationType|MATURITY|
|applicationType|PERIODIC|
|applicationType|UPFRONT|

<h3 class="schema-toc" id="cdr-banking-api-modified-for-dp306-_schemas_tocSbankingrateadjustments">BankingRateAdjustments</h3>
<p id="tocSbankingrateadjustments" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api-modified-for-dp306-_schema-base_bankingrateadjustments"></a>
  <a class="schema-anchor" id="schemacdr-banking-api-modified-for-dp306-bankingrateadjustments"></a>
</p>

```json
{
  "adjustmentType": "BONUS",
  "amount": "string",
  "currency": "AUD",
  "rate": "string",
  "adjustmentBundle": "string",
  "adjustmentPeriod": "string",
  "adjustmentEndDate": "string",
  "additionalValue": "string",
  "additionalInfo": "string",
  "additionalInfoUri": "string"
}
```

*Information about adjustments to an associated rate.*

<h3 id="cdr-banking-api-modified-for-dp306-_bankingrateadjustments_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|adjustmentType|[Enum](#common-field-types)|mandatory||The type of adjustment. For further details, refer to [Deposit Adjustment Rate Types](#tocSproductdepositadjustmentratetypedoc) and [Lending Adjustment Rate Types](#tocSproductlendingadjustmentratetypedoc).|
|amount|[AmountString](#common-field-types)|optional||Adjustment amount if not a rate.|
|currency|[CurrencyString](#common-field-types)|optional|`AUD`|Adjustment amount currency. If absent assumes `AUD`.|
|rate|[RateString](#common-field-types)|optional||Adjustment to an associated base rate. The impact to the base rate depends on the type of base (deposit or loan) and the _adjustmentType_ (`BONUS`, `DISCOUNT` or `PENALTY`).|
|adjustmentBundle|string|optional||The name of the bundle that makes the adjustment rate applicable.|
|adjustmentPeriod|[ExternalRef](#common-field-types)|optional||The original or standard adjustment period after which the adjustment ends. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax).|
|adjustmentEndDate|[DateString](#common-field-types)|optional||Date the adjustment will cease to apply.|
|additionalValue|string|conditional||Generic field containing additional information relevant to the _adjustmentType_ specified. Whether mandatory or not is dependent on the value of _adjustmentType_.|
|additionalInfo|string|optional||Display text providing more information on the rate.|
|additionalInfoUri|[URIString](#common-field-types)|optional||Link to a web page with more information on this rate.|

<h4 id="cdr-banking-api-modified-for-dp306-_bankingrateadjustments_enumerated-values-main">Enumerated Values</h4>

|Property|Value|
|---|---|
|adjustmentType|BONUS|
|adjustmentType|DISCOUNT|
|adjustmentType|PENALTY|

<h3 class="schema-toc" id="cdr-banking-api-modified-for-dp306-_schemas_tocSbankingcreditcardaccountv2">BankingCreditCardAccountV2</h3>
<p id="tocSbankingcreditcardaccountv2" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api-modified-for-dp306-_schema-base_bankingcreditcardaccount"></a>
  <a class="schema-anchor" id="schemacdr-banking-api-modified-for-dp306-bankingcreditcardaccountv2"></a>
</p>

```json
{
  "minPaymentAmount": "string",
  "paymentDueAmount": "string",
  "paymentCurrency": "AUD",
  "paymentDueDate": "string",
  "cardPlans": [
    {
      "nickname": "string",
      "planType": "PURCHASE_PLAN",
      "atExpiryBalanceTransfersTo": "PURCHASE_PLAN",
      "planCreationDate": "string",
      "planPeriod": "string",
      "planEndDate": "string",
      "planReferenceRate": "string",
      "planEffectiveRate": "string",
      "minPaymentAmount": "string",
      "paymentDueAmount": "string",
      "paymentCurrency": "AUD",
      "paymentDueDate": "string",
      "additionalInfo": "string",
      "additionalInfoUri": "string",
      "interestFreePeriods": [
        {
          "from": "string",
          "to": "string"
        }
      ],
      "adjustments": [
        {
          "adjustmentType": "BONUS",
          "amount": "string",
          "currency": "AUD",
          "rate": "string",
          "adjustmentBundle": "string",
          "adjustmentPeriod": "string",
          "adjustmentEndDate": "string",
          "additionalValue": "string",
          "additionalInfo": "string",
          "additionalInfoUri": "string"
        }
      ],
      "planFeatures": [
        {
          "planFeatureType": "BALANCE_TRANSFER_ENDS_INTEREST_FREE",
          "period": "string",
          "endDate": "string",
          "additionalValue": "string",
          "additionalInfo": "string",
          "additionalInfoUri": "string"
        }
      ]
    }
  ]
}
```

<h3 id="cdr-banking-api-modified-for-dp306-_bankingcreditcardaccountv2_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|minPaymentAmount|[AmountString](#common-field-types)|mandatory||The minimum payment amount due for the next card payment.|
|paymentDueAmount|[AmountString](#common-field-types)|mandatory||The amount due for the next card payment.|
|paymentCurrency|[CurrencyString](#common-field-types)|optional|`AUD`|If absent assumes `AUD`.|
|paymentDueDate|[DateString](#common-field-types)|mandatory||Date that the next payment for the card is due.|
|cardPlans|[[BankingCreditCardPlan](#schemacdr-banking-api-modified-for-dp306-bankingcreditcardplan)]|mandatory||Card plans sorted in order of repayment allocation. Repayments are allocated to the first entry first.|

<h3 class="schema-toc" id="cdr-banking-api-modified-for-dp306-_schemas_tocSbankingcreditcardplan">BankingCreditCardPlan</h3>
<p id="tocSbankingcreditcardplan" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api-modified-for-dp306-_schema-base_bankingcreditcardplan"></a>
  <a class="schema-anchor" id="schemacdr-banking-api-modified-for-dp306-bankingcreditcardplan"></a>
</p>

```json
{
  "nickname": "string",
  "planType": "PURCHASE_PLAN",
  "atExpiryBalanceTransfersTo": "PURCHASE_PLAN",
  "planCreationDate": "string",
  "planPeriod": "string",
  "planEndDate": "string",
  "planReferenceRate": "string",
  "planEffectiveRate": "string",
  "minPaymentAmount": "string",
  "paymentDueAmount": "string",
  "paymentCurrency": "AUD",
  "paymentDueDate": "string",
  "additionalInfo": "string",
  "additionalInfoUri": "string",
  "interestFreePeriods": [
    {
      "from": "string",
      "to": "string"
    }
  ],
  "adjustments": [
    {
      "adjustmentType": "BONUS",
      "amount": "string",
      "currency": "AUD",
      "rate": "string",
      "adjustmentBundle": "string",
      "adjustmentPeriod": "string",
      "adjustmentEndDate": "string",
      "additionalValue": "string",
      "additionalInfo": "string",
      "additionalInfoUri": "string"
    }
  ],
  "planFeatures": [
    {
      "planFeatureType": "BALANCE_TRANSFER_ENDS_INTEREST_FREE",
      "period": "string",
      "endDate": "string",
      "additionalValue": "string",
      "additionalInfo": "string",
      "additionalInfoUri": "string"
    }
  ]
}
```

<h3 id="cdr-banking-api-modified-for-dp306-_bankingcreditcardplan_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|nickname|string|optional||A short display name of the deposit amount if provided by the customer. Where a customer has not provided a nickname, a display name derived by the bank consistent with existing digital banking channels may be provided.|
|planType|[BankingCardPlanTypes](#schemacdr-banking-api-modified-for-dp306-bankingcardplantypes)|mandatory||The credit card plan type.|
|atExpiryBalanceTransfersTo|[BankingCardPlanTypes](#schemacdr-banking-api-modified-for-dp306-bankingcardplantypes)|optional||A reference to the plan type that any balance will be transferred to at the expiry of this plan.|
|planCreationDate|[DateString](#common-field-types)|optional||Date this plan was created.|
|planPeriod|[ExternalRef](#common-field-types)|optional||Original duration for this plan. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax).|
|planEndDate|[DateString](#common-field-types)|optional||Date this plan is expected to end.|
|planReferenceRate|[RateString](#common-field-types)|mandatory||Reference rate for this plan type.|
|planEffectiveRate|[RateString](#common-field-types)|mandatory||Effective rate for this plan.|
|minPaymentAmount|[AmountString](#common-field-types)|optional||The minimum payment amount due for this plan.|
|paymentDueAmount|[AmountString](#common-field-types)|optional||The amount due for this plan.|
|paymentCurrency|[CurrencyString](#common-field-types)|optional|`AUD`|If absent assumes `AUD`.|
|paymentDueDate|[DateString](#common-field-types)|optional||Date that the next payment for this plan is due.|
|additionalInfo|string|optional||Display text providing more information on the plan.|
|additionalInfoUri|[URIString](#common-field-types)|optional||Link to a web page with more information on this plan.|
|interestFreePeriods|[object]|optional||Defines when any current or future interest-free periods will be applicable to this plan. The interest-free period itself will be specified through an associated `INTEREST_FREE` plan feature.|
|» from|[DateString](#common-field-types)|optional||The date any associated interest-free period will be available for the plan.|
|» to|[DateString](#common-field-types)|mandatory||The date any associated interest-free period will no longer be available.|
|adjustments|[[BankingRateAdjustments](#schemacdr-banking-api-modified-for-dp306-bankingrateadjustments)]|optional||Adjustments applicable to the plan rate.|
|planFeatures|[[BankingCardPlanFeatures](#schemacdr-banking-api-modified-for-dp306-bankingcardplanfeatures)]|optional||Array of features available or applicable to this plan.|

<h3 class="schema-toc" id="cdr-banking-api-modified-for-dp306-_schemas_tocSbankingcardplantypes">BankingCardPlanTypes</h3>
<p id="tocSbankingcardplantypes" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api-modified-for-dp306-_schema-base_bankingcardplantypes"></a>
  <a class="schema-anchor" id="schemacdr-banking-api-modified-for-dp306-bankingcardplantypes"></a>
</p>

```json
"PURCHASE_PLAN"
```

<h3 id="cdr-banking-api-modified-for-dp306-_bankingcardplantypes_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|*anonymous*|[Enum](#common-field-types)|mandatory||none|

<h4 id="cdr-banking-api-modified-for-dp306-_bankingcardplantypes_enumerated-values-main">Enumerated Values</h4>

|Property|Value|
|---|---|
|*anonymous*|BALANCE_TRANSFER_PLAN|
|*anonymous*|CASH_ADVANCE_PLAN|
|*anonymous*|INSTALMENT_PLAN|
|*anonymous*|PURCHASE_PLAN|

<h3 class="schema-toc" id="cdr-banking-api-modified-for-dp306-_schemas_tocSbankingcardplanfeatures">BankingCardPlanFeatures</h3>
<p id="tocSbankingcardplanfeatures" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api-modified-for-dp306-_schema-base_bankingcardplanfeatures"></a>
  <a class="schema-anchor" id="schemacdr-banking-api-modified-for-dp306-bankingcardplanfeatures"></a>
</p>

```json
{
  "planFeatureType": "BALANCE_TRANSFER_ENDS_INTEREST_FREE",
  "period": "string",
  "endDate": "string",
  "additionalValue": "string",
  "additionalInfo": "string",
  "additionalInfoUri": "string"
}
```

*Features and limitations available or applicable to the associated plan.*

<h3 id="cdr-banking-api-modified-for-dp306-_bankingcardplanfeatures_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|planFeatureType|[Enum](#common-field-types)|mandatory||Type of feature or limitation. For details refer to [Plan Feature Types](#tocSbankingproductplanfeaturedoc).|
|period|[ExternalRef](#common-field-types)|optional||Original duration of the feature or limitation. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax).|
|endDate|[DateString](#common-field-types)|optional||Date that the feature or limitation will cease to apply.|
|additionalValue|string|conditional||Detail associated with the _planFeatureType_. For details refer to [Plan Feature Types](#tocSbankingproductplanfeaturedoc).|
|additionalInfo|string|optional||Display text providing more information on the plan feature.|
|additionalInfoUri|[URIString](#common-field-types)|optional||Link to a web page with more information on this plan feature.|

<h4 id="cdr-banking-api-modified-for-dp306-_bankingcardplanfeatures_enumerated-values-main">Enumerated Values</h4>

|Property|Value|
|---|---|
|planFeatureType|BALANCE_TRANSFER_ENDS_INTEREST_FREE|
|planFeatureType|INSTALMENTS|
|planFeatureType|INTEREST_FREE|

<h3 class="schema-toc" id="cdr-banking-api-modified-for-dp306-_schemas_tocSbankingdepositaccount">BankingDepositAccount</h3>
<p id="tocSbankingdepositaccount" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api-modified-for-dp306-_schema-base_bankingdepositaccount"></a>
  <a class="schema-anchor" id="schemacdr-banking-api-modified-for-dp306-bankingdepositaccount"></a>
</p>

```json
{
  "lodgementDate": "string",
  "nickname": "string",
  "depositRateDetail": {
    "depositRateType": "FIXED",
    "referenceRate": "string",
    "effectiveRate": "string",
    "calculationFrequency": "string",
    "applicationType": "PERIODIC",
    "applicationFrequency": "string",
    "tiers": [
      {
        "name": "string",
        "unitOfMeasure": "DAY",
        "minimumValue": "string",
        "maximumValue": "string",
        "rateApplicationMethod": "PER_TIER",
        "applicabilityConditions": [
          {
            "rateApplicabilityType": "NEW_CUSTOMER",
            "additionalValue": "string",
            "additionalInfo": "string",
            "additionalInfoUri": "string"
          }
        ],
        "additionalInfo": "string",
        "additionalInfoUri": "string"
      }
    ],
    "applicabilityConditions": [
      {
        "rateApplicabilityType": "NEW_CUSTOMER",
        "additionalValue": "string",
        "additionalInfo": "string",
        "additionalInfoUri": "string"
      }
    ],
    "additionalValue": "string",
    "additionalInfo": "string",
    "additionalInfoUri": "string",
    "adjustments": [
      {
        "adjustmentType": "BONUS",
        "amount": "string",
        "currency": "AUD",
        "rate": "string",
        "adjustmentBundle": "string",
        "adjustmentPeriod": "string",
        "adjustmentEndDate": "string",
        "additionalValue": "string",
        "additionalInfo": "string",
        "additionalInfoUri": "string"
      }
    ]
  }
}
```

<h3 id="cdr-banking-api-modified-for-dp306-_bankingdepositaccount_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|lodgementDate|[DateString](#common-field-types)|optional||The lodgement date of the deposit.|
|nickname|[DateString](#common-field-types)|optional||A short display name of the deposit amount if provided by the customer. Where a customer has not provided a nickname, a display name derived by the bank consistent with existing digital banking channels may be provided.|
|depositRateDetail|[BankingDepositRateDetail](#schemacdr-banking-api-modified-for-dp306-bankingdepositratedetail)|optional||Detail about deposit rates and adjustments.|

<h3 class="schema-toc" id="cdr-banking-api-modified-for-dp306-_schemas_tocSbankingloanaccountv3">BankingLoanAccountV3</h3>
<p id="tocSbankingloanaccountv3" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api-modified-for-dp306-_schema-base_bankingloanaccount"></a>
  <a class="schema-anchor" id="schemacdr-banking-api-modified-for-dp306-bankingloanaccountv3"></a>
</p>

```json
{
  "originalStartDate": "string",
  "originalLoanAmount": "string",
  "originalLoanCurrency": "AUD",
  "loanEndDate": "string",
  "nextInstalmentDate": "string",
  "minInstalmentAmount": "string",
  "minInstalmentCurrency": "AUD",
  "maxRedraw": "string",
  "maxRedrawCurrency": "AUD",
  "minRedraw": "string",
  "minRedrawCurrency": "AUD",
  "offsetAccountEnabled": true,
  "offsetAccountIds": [
    "string"
  ],
  "lendingRateDetail": [
    {
      "loanPurpose": "OWNER_OCCUPIED",
      "repaymentType": "PRINCIPAL_AND_INTEREST",
      "rateStartDate": "string",
      "rateEndDate": "string",
      "revertProductId": "string",
      "repaymentUType": "fixedRate",
      "fixedRate": {
        "fixedPeriod": "string",
        "referenceRate": "string",
        "effectiveRate": "string",
        "calculationFrequency": "string",
        "applicationType": "PERIODIC",
        "applicationFrequency": "string",
        "interestPaymentDue": "IN_ADVANCE",
        "repaymentFrequency": "string",
        "additionalInfo": "string",
        "additionalInfoUri": "string"
      },
      "variableRate": {
        "variableRateType": "FLOATING",
        "referenceRate": "string",
        "effectiveRate": "string",
        "calculationFrequency": "string",
        "applicationType": "PERIODIC",
        "applicationFrequency": "string",
        "interestPaymentDue": "IN_ADVANCE",
        "repaymentFrequency": "string",
        "additionalValue": "string",
        "additionalInfo": "string",
        "additionalInfoUri": "string"
      },
      "feeAmount": {
        "amount": "string",
        "currency": "AUD",
        "repaymentDue": "IN_ADVANCE",
        "repaymentFrequency": "string",
        "additionalInfo": "string",
        "additionalInfoUri": "string"
      },
      "adjustments": [
        {
          "adjustmentType": "BONUS",
          "amount": "string",
          "currency": "AUD",
          "rate": "string",
          "adjustmentBundle": "string",
          "adjustmentPeriod": "string",
          "adjustmentEndDate": "string",
          "additionalValue": "string",
          "additionalInfo": "string",
          "additionalInfoUri": "string"
        }
      ]
    }
  ]
}
```

<h3 id="cdr-banking-api-modified-for-dp306-_bankingloanaccountv3_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|originalStartDate|[DateString](#common-field-types)|optional||Optional original start date for the loan.|
|originalLoanAmount|[AmountString](#common-field-types)|optional||Optional original loan value.|
|originalLoanCurrency|[CurrencyString](#common-field-types)|optional|`AUD`|If absent assumes `AUD`.|
|loanEndDate|[DateString](#common-field-types)|optional||Date that the loan is due to be repaid in full.|
|nextInstalmentDate|[DateString](#common-field-types)|optional||Next date that an instalment is required.|
|minInstalmentAmount|[AmountString](#common-field-types)|optional||Minimum amount of next instalment.|
|minInstalmentCurrency|[CurrencyString](#common-field-types)|optional|`AUD`|If absent assumes `AUD`.|
|maxRedraw|[AmountString](#common-field-types)|optional||Maximum amount of funds that can be redrawn. If not present redraw is not available even if the feature exists for the account.|
|maxRedrawCurrency|[CurrencyString](#common-field-types)|optional|`AUD`|If absent assumes `AUD`.|
|minRedraw|[AmountString](#common-field-types)|optional||Minimum redraw amount.|
|minRedrawCurrency|[CurrencyString](#common-field-types)|optional|`AUD`|If absent assumes `AUD`.|
|offsetAccountEnabled|[Boolean](#common-field-types)|optional||Set to `true` if one or more offset accounts are configured for this loan account.|
|offsetAccountIds|[[BankingAccountId](#schemacdr-banking-api-modified-for-dp306-bankingaccountid)]|optional||The _accountId_ values of the configured offset accounts attached to this loan. Only offset accounts that can be accessed under the current authorisation should be included. It is expected behaviour that _offsetAccountEnabled_ is set to `true` but the _offsetAccountIds_ field is absent or empty. This represents a situation where an offset account exists but details can not be accessed under the current authorisation.|
|lendingRateDetail|[[BankingLendingRateDetail](#schemacdr-banking-api-modified-for-dp306-bankinglendingratedetail)]|optional||Information about lending rates and adjustments.|

<h3 class="schema-toc" id="cdr-banking-api-modified-for-dp306-_schemas_tocSbankinglendingratedetail">BankingLendingRateDetail</h3>
<p id="tocSbankinglendingratedetail" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api-modified-for-dp306-_schema-base_bankinglendingratedetail"></a>
  <a class="schema-anchor" id="schemacdr-banking-api-modified-for-dp306-bankinglendingratedetail"></a>
</p>

```json
{
  "loanPurpose": "OWNER_OCCUPIED",
  "repaymentType": "PRINCIPAL_AND_INTEREST",
  "rateStartDate": "string",
  "rateEndDate": "string",
  "revertProductId": "string",
  "repaymentUType": "fixedRate",
  "fixedRate": {
    "fixedPeriod": "string",
    "referenceRate": "string",
    "effectiveRate": "string",
    "calculationFrequency": "string",
    "applicationType": "PERIODIC",
    "applicationFrequency": "string",
    "interestPaymentDue": "IN_ADVANCE",
    "repaymentFrequency": "string",
    "additionalInfo": "string",
    "additionalInfoUri": "string"
  },
  "variableRate": {
    "variableRateType": "FLOATING",
    "referenceRate": "string",
    "effectiveRate": "string",
    "calculationFrequency": "string",
    "applicationType": "PERIODIC",
    "applicationFrequency": "string",
    "interestPaymentDue": "IN_ADVANCE",
    "repaymentFrequency": "string",
    "additionalValue": "string",
    "additionalInfo": "string",
    "additionalInfoUri": "string"
  },
  "feeAmount": {
    "amount": "string",
    "currency": "AUD",
    "repaymentDue": "IN_ADVANCE",
    "repaymentFrequency": "string",
    "additionalInfo": "string",
    "additionalInfoUri": "string"
  },
  "adjustments": [
    {
      "adjustmentType": "BONUS",
      "amount": "string",
      "currency": "AUD",
      "rate": "string",
      "adjustmentBundle": "string",
      "adjustmentPeriod": "string",
      "adjustmentEndDate": "string",
      "additionalValue": "string",
      "additionalInfo": "string",
      "additionalInfoUri": "string"
    }
  ]
}
```

*Information about lending rates and adjustments. Future-dated rates allow scheduled rate changes such as 'revert' rates to be specified.*

<h3 id="cdr-banking-api-modified-for-dp306-_bankinglendingratedetail_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|loanPurpose|[Enum](#common-field-types)|optional||The reason for taking out the loan. If absent, the lending rate is applicable to all loan purposes.|
|repaymentType|[Enum](#common-field-types)|optional|`PRINCIPAL_AND_INTEREST`|Options in place for repayments. If absent defaults to `PRINCIPAL_AND_INTEREST`.|
|rateStartDate|[DateString](#common-field-types)|optional||Date this rate will begin to apply. If not specified, the rate is currently applicable to the account.|
|rateEndDate|[DateString](#common-field-types)|optional||Date this rate will cease to apply. If not specified, the rate on the account is not scheduled to change or 'revert' to a different rate setting.|
|revertProductId|string|optional||The _productId_ of the product that this account will revert to at the specified _rateEndDate_.|
|repaymentUType|[Enum](#common-field-types)|mandatory||The type of structure to present account specific fields.|
|fixedRate|[BankingLendingRateFixed](#schemacdr-banking-api-modified-for-dp306-bankinglendingratefixed)|optional||none|
|variableRate|[BankingLendingRateVariable](#schemacdr-banking-api-modified-for-dp306-bankinglendingratevariable)|optional||none|
|feeAmount|[BankingLendingFee](#schemacdr-banking-api-modified-for-dp306-bankinglendingfee)|optional||none|
|adjustments|[[BankingRateAdjustments](#schemacdr-banking-api-modified-for-dp306-bankingrateadjustments)]|optional||Adjustments applicable to the rate or fee.|

<h4 id="cdr-banking-api-modified-for-dp306-_bankinglendingratedetail_enumerated-values-main">Enumerated Values</h4>

|Property|Value|
|---|---|
|loanPurpose|INVESTMENT|
|loanPurpose|OWNER_OCCUPIED|
|repaymentType|INTEREST_ONLY|
|repaymentType|PRINCIPAL_AND_FEE|
|repaymentType|PRINCIPAL_AND_INTEREST|
|repaymentUType|fixedRate|
|repaymentUType|variableRate|
|repaymentUType|feeAmount|

<h3 class="schema-toc" id="cdr-banking-api-modified-for-dp306-_schemas_tocSbankinglendingratefixed">BankingLendingRateFixed</h3>
<p id="tocSbankinglendingratefixed" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api-modified-for-dp306-_schema-base_bankinglendingratefixed"></a>
  <a class="schema-anchor" id="schemacdr-banking-api-modified-for-dp306-bankinglendingratefixed"></a>
</p>

```json
{
  "fixedPeriod": "string",
  "referenceRate": "string",
  "effectiveRate": "string",
  "calculationFrequency": "string",
  "applicationType": "PERIODIC",
  "applicationFrequency": "string",
  "interestPaymentDue": "IN_ADVANCE",
  "repaymentFrequency": "string",
  "additionalInfo": "string",
  "additionalInfoUri": "string"
}
```

<h3 id="cdr-banking-api-modified-for-dp306-_bankinglendingratefixed_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|fixedPeriod|[ExternalRef](#common-field-types)|optional||The period of time for the fixed rate. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax).|
|referenceRate|[RateString](#common-field-types)|mandatory||Reference rate for this account type and terms.|
|effectiveRate|[RateString](#common-field-types)|mandatory||The current rate to calculate interest payable being applied to lending balances as it stands at the time of the API call.|
|calculationFrequency|[ExternalRef](#common-field-types)|optional||The period after which the rate is applied to the balance to calculate the amount due for the period. Calculation of the amount is often daily (as balances may change) but accumulated until the total amount is 'applied' to the account (see _applicationFrequency_). Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax).|
|applicationType|[Enum](#common-field-types)|optional||The type of approach used to apply the rate to the account. An _applicationFrequency_ value is only expected when the approach is `PERIODIC`.|
|applicationFrequency|[ExternalRef](#common-field-types)|optional||The period after which the calculated amount(s) (see _calculationFrequency_) are 'applied' (i.e. debited or credited) to the account. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax).|
|interestPaymentDue|[Enum](#common-field-types)|optional||When loan payments are due to be paid within each period. The investment benefit of earlier payments affect the rate that can be offered.|
|repaymentFrequency|[ExternalRef](#common-field-types)|optional||The expected or required repayment frequency. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax).|
|additionalInfo|string|optional||Display text providing more information on the rate.|
|additionalInfoUri|[URIString](#common-field-types)|optional||Link to a web page with more information on this rate.|

<h4 id="cdr-banking-api-modified-for-dp306-_bankinglendingratefixed_enumerated-values-main">Enumerated Values</h4>

|Property|Value|
|---|---|
|applicationType|MATURITY|
|applicationType|PERIODIC|
|applicationType|UPFRONT|
|interestPaymentDue|IN_ADVANCE|
|interestPaymentDue|IN_ARREARS|

<h3 class="schema-toc" id="cdr-banking-api-modified-for-dp306-_schemas_tocSbankinglendingratevariable">BankingLendingRateVariable</h3>
<p id="tocSbankinglendingratevariable" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api-modified-for-dp306-_schema-base_bankinglendingratevariable"></a>
  <a class="schema-anchor" id="schemacdr-banking-api-modified-for-dp306-bankinglendingratevariable"></a>
</p>

```json
{
  "variableRateType": "FLOATING",
  "referenceRate": "string",
  "effectiveRate": "string",
  "calculationFrequency": "string",
  "applicationType": "PERIODIC",
  "applicationFrequency": "string",
  "interestPaymentDue": "IN_ADVANCE",
  "repaymentFrequency": "string",
  "additionalValue": "string",
  "additionalInfo": "string",
  "additionalInfoUri": "string"
}
```

<h3 id="cdr-banking-api-modified-for-dp306-_bankinglendingratevariable_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|variableRateType|[Enum](#common-field-types)|mandatory||The type of variable rate.|
|referenceRate|[RateString](#common-field-types)|mandatory||Reference rate for this account type and terms.|
|effectiveRate|[RateString](#common-field-types)|mandatory||The current rate to calculate interest payable being applied to lending balances as it stands at the time of the API call.|
|calculationFrequency|[ExternalRef](#common-field-types)|optional||The period after which the rate is applied to the balance to calculate the amount due for the period. Calculation of the amount is often daily (as balances may change) but accumulated until the total amount is 'applied' to the account (see _applicationFrequency_). Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax).|
|applicationType|[Enum](#common-field-types)|optional||The type of approach used to apply the rate to the account. An _applicationFrequency_ value is only expected when the approach is `PERIODIC`.|
|applicationFrequency|[ExternalRef](#common-field-types)|optional||The period after which the calculated amount(s) (see _calculationFrequency_) are 'applied' (i.e. debited or credited) to the account. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax).|
|interestPaymentDue|[Enum](#common-field-types)|optional||When loan payments are due to be paid within each period. The investment benefit of earlier payments affect the rate that can be offered.|
|repaymentFrequency|[ExternalRef](#common-field-types)|optional||The expected or required repayment frequency. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax).|
|additionalValue|string|conditional||Generic field containing additional information relevant to the [_variableRateType_](#tocSproductlendingratetypedoc) specified. Whether mandatory or not is dependent on the value of [_variableRateType_](#tocSproductlendingratetypedoc).|
|additionalInfo|string|optional||Display text providing more information on the rate.|
|additionalInfoUri|[URIString](#common-field-types)|optional||Link to a web page with more information on this rate.|

<h4 id="cdr-banking-api-modified-for-dp306-_bankinglendingratevariable_enumerated-values-main">Enumerated Values</h4>

|Property|Value|
|---|---|
|variableRateType|FLOATING|
|variableRateType|MARKET_LINKED|
|variableRateType|VARIABLE|
|applicationType|MATURITY|
|applicationType|PERIODIC|
|applicationType|UPFRONT|
|interestPaymentDue|IN_ADVANCE|
|interestPaymentDue|IN_ARREARS|

<h3 class="schema-toc" id="cdr-banking-api-modified-for-dp306-_schemas_tocSbankinglendingfee">BankingLendingFee</h3>
<p id="tocSbankinglendingfee" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api-modified-for-dp306-_schema-base_bankinglendingfee"></a>
  <a class="schema-anchor" id="schemacdr-banking-api-modified-for-dp306-bankinglendingfee"></a>
</p>

```json
{
  "amount": "string",
  "currency": "AUD",
  "repaymentDue": "IN_ADVANCE",
  "repaymentFrequency": "string",
  "additionalInfo": "string",
  "additionalInfoUri": "string"
}
```

<h3 id="cdr-banking-api-modified-for-dp306-_bankinglendingfee_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|amount|[AmountString](#common-field-types)|mandatory||Minimum payment due at specified _repaymentFrequency_.|
|currency|[CurrencyString](#common-field-types)|optional|`AUD`|Currency of the fee. `AUD` assumed if not present.|
|repaymentDue|[Enum](#common-field-types)|optional||When loan payments are due to be paid within each period.|
|repaymentFrequency|[ExternalRef](#common-field-types)|optional||The expected or required repayment frequency. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax).|
|additionalInfo|string|optional||Display text providing more information on the fee.|
|additionalInfoUri|[URIString](#common-field-types)|optional||Link to a web page with more information on this fee.|

<h4 id="cdr-banking-api-modified-for-dp306-_bankinglendingfee_enumerated-values-main">Enumerated Values</h4>

|Property|Value|
|---|---|
|repaymentDue|IN_ADVANCE|
|repaymentDue|IN_ARREARS|

<h3 class="schema-toc" id="cdr-banking-api-modified-for-dp306-_schemas_tocSresponsebankingtransactionlist">ResponseBankingTransactionList</h3>
<p id="tocSresponsebankingtransactionlist" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api-modified-for-dp306-_schema-base_responsebankingtransactionlist"></a>
  <a class="schema-anchor" id="schemacdr-banking-api-modified-for-dp306-responsebankingtransactionlist"></a>
</p>

```json
{
  "data": {
    "transactions": [
      {
        "accountId": "string",
        "transactionId": "string",
        "isDetailAvailable": true,
        "type": "DIRECT_DEBIT",
        "status": "PENDING",
        "description": "string",
        "postingDateTime": "string",
        "valueDateTime": "string",
        "executionDateTime": "string",
        "amount": "string",
        "currency": "AUD",
        "reference": "string",
        "merchantName": "string",
        "merchantCategoryCode": "string",
        "billerCode": "string",
        "billerName": "string",
        "crn": "string",
        "apcaNumber": "string"
      }
    ]
  },
  "links": {
    "self": "string",
    "first": "string",
    "prev": "string",
    "next": "string",
    "last": "string"
  },
  "meta": {
    "totalRecords": 0,
    "totalPages": 0,
    "isQueryParamUnsupported": false
  }
}
```

<h3 id="cdr-banking-api-modified-for-dp306-_responsebankingtransactionlist_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|data|object|mandatory||none|
|» transactions|[[BankingTransaction](#schemacdr-banking-api-modified-for-dp306-bankingtransaction)]|mandatory||none|
|links|[LinksPaginated](#schemacdr-banking-api-modified-for-dp306-linkspaginated)|mandatory||none|
|meta|[MetaPaginatedTransaction](#schemacdr-banking-api-modified-for-dp306-metapaginatedtransaction)|mandatory||none|

<h3 class="schema-toc" id="cdr-banking-api-modified-for-dp306-_schemas_tocSbankingtransaction">BankingTransaction</h3>
<p id="tocSbankingtransaction" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api-modified-for-dp306-_schema-base_bankingtransaction"></a>
  <a class="schema-anchor" id="schemacdr-banking-api-modified-for-dp306-bankingtransaction"></a>
</p>

```json
{
  "accountId": "string",
  "transactionId": "string",
  "isDetailAvailable": true,
  "type": "DIRECT_DEBIT",
  "status": "PENDING",
  "description": "string",
  "postingDateTime": "string",
  "valueDateTime": "string",
  "executionDateTime": "string",
  "amount": "string",
  "currency": "AUD",
  "reference": "string",
  "merchantName": "string",
  "merchantCategoryCode": "string",
  "billerCode": "string",
  "billerName": "string",
  "crn": "string",
  "apcaNumber": "string"
}
```

<h3 id="cdr-banking-api-modified-for-dp306-_bankingtransaction_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|accountId|[BankingAccountId](#schemacdr-banking-api-modified-for-dp306-bankingaccountid)|mandatory||Unique identifier for the account.|
|transactionId|[BankingTransactionId](#schemacdr-banking-api-modified-for-dp306-bankingtransactionid)|conditional||Unique identifier for the transaction. This is mandatory (through hashing if necessary) unless there are specific and justifiable technical reasons why a transaction cannot be uniquely identified for a particular account type. It is mandatory if _isDetailAvailable_ is set to `true`.|
|isDetailAvailable|[Boolean](#common-field-types)|mandatory||`true` if extended information is available using the transaction detail endpoint. `false` if extended data is not available.|
|type|[Enum](#common-field-types)|mandatory||The type of the transaction.|
|status|[Enum](#common-field-types)|mandatory||Status of the transaction whether pending or posted. Note that there is currently no provision in the standards to guarantee the ability to correlate a pending transaction with an associated posted transaction.|
|description|string|mandatory||The transaction description as applied by the financial institution.|
|postingDateTime|[DateTimeString](#common-field-types)|conditional||The time the transaction was posted. This field is Mandatory if the transaction has status `POSTED`. This is the time that appears on a standard statement.|
|valueDateTime|[DateTimeString](#common-field-types)|optional||Date and time at which assets become available to the account owner in case of a credit entry, or cease to be available to the account owner in case of a debit transaction entry.|
|executionDateTime|[DateTimeString](#common-field-types)|optional||The time the transaction was executed by the originating customer, if available.|
|amount|[AmountString](#common-field-types)|mandatory||The value of the transaction. Negative values mean money was outgoing from the account.|
|currency|[CurrencyString](#common-field-types)|optional|`AUD`|The currency for the transaction amount. `AUD` assumed if not present.|
|reference|string|mandatory||The reference for the transaction provided by the originating institution. Empty string if no data provided.|
|merchantName|string|optional||Name of the merchant for an outgoing payment to a merchant.|
|merchantCategoryCode|string|optional||The merchant category code (or MCC) for an outgoing payment to a merchant.|
|billerCode|string|optional||BPAY Biller Code for the transaction (if available).|
|billerName|string|optional||Name of the BPAY biller for the transaction (if available).|
|crn|string|conditional||BPAY CRN for the transaction (if available).<br/>Where the CRN contains sensitive information, it should be masked in line with how the Data Holder currently displays account identifiers in their existing online banking channels. If the contents of the CRN match the format of a Credit Card PAN they should be masked according to the rules applicable for [MaskedPANString](#common-field-types). If the contents are otherwise sensitive, then it should be masked using the rules applicable for the [MaskedAccountString](#common-field-types) common type.|
|apcaNumber|string|optional||6 Digit APCA number for the initiating institution. The field is fixed-width and padded with leading zeros if applicable.|

<h4 id="cdr-banking-api-modified-for-dp306-_bankingtransaction_enumerated-values-main">Enumerated Values</h4>

|Property|Value|
|---|---|
|type|DIRECT_DEBIT|
|type|FEE|
|type|INTEREST_CHARGED|
|type|INTEREST_PAID|
|type|OTHER|
|type|PAYMENT|
|type|TRANSFER_INCOMING|
|type|TRANSFER_OUTGOING|
|status|PENDING|
|status|POSTED|

<h3 class="schema-toc" id="cdr-banking-api-modified-for-dp306-_schemas_tocSresponsebankingtransactionbyid">ResponseBankingTransactionById</h3>
<p id="tocSresponsebankingtransactionbyid" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api-modified-for-dp306-_schema-base_responsebankingtransactionbyid"></a>
  <a class="schema-anchor" id="schemacdr-banking-api-modified-for-dp306-responsebankingtransactionbyid"></a>
</p>

```json
{
  "data": {
    "accountId": "string",
    "transactionId": "string",
    "isDetailAvailable": true,
    "type": "DIRECT_DEBIT",
    "status": "PENDING",
    "description": "string",
    "postingDateTime": "string",
    "valueDateTime": "string",
    "executionDateTime": "string",
    "amount": "string",
    "currency": "AUD",
    "reference": "string",
    "merchantName": "string",
    "merchantCategoryCode": "string",
    "billerCode": "string",
    "billerName": "string",
    "crn": "string",
    "apcaNumber": "string",
    "extendedData": {
      "payer": "string",
      "payee": "string",
      "extensionUType": "x2p101Payload",
      "x2p101Payload": {
        "extendedDescription": "string",
        "endToEndId": "string",
        "purposeCode": "string"
      },
      "service": "X2P1.01"
    }
  },
  "links": {
    "self": "string"
  },
  "meta": {}
}
```

<h3 id="cdr-banking-api-modified-for-dp306-_responsebankingtransactionbyid_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|data|[BankingTransactionDetail](#schemacdr-banking-api-modified-for-dp306-bankingtransactiondetail)|mandatory||none|
|links|[Links](#schemacdr-banking-api-modified-for-dp306-links)|mandatory||none|
|meta|[Meta](#schemacdr-banking-api-modified-for-dp306-meta)|optional||none|

<h3 class="schema-toc" id="cdr-banking-api-modified-for-dp306-_schemas_tocSbankingtransactiondetail">BankingTransactionDetail</h3>
<p id="tocSbankingtransactiondetail" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api-modified-for-dp306-_schema-base_bankingtransactiondetail"></a>
  <a class="schema-anchor" id="schemacdr-banking-api-modified-for-dp306-bankingtransactiondetail"></a>
</p>

```json
{
  "accountId": "string",
  "transactionId": "string",
  "isDetailAvailable": true,
  "type": "DIRECT_DEBIT",
  "status": "PENDING",
  "description": "string",
  "postingDateTime": "string",
  "valueDateTime": "string",
  "executionDateTime": "string",
  "amount": "string",
  "currency": "AUD",
  "reference": "string",
  "merchantName": "string",
  "merchantCategoryCode": "string",
  "billerCode": "string",
  "billerName": "string",
  "crn": "string",
  "apcaNumber": "string",
  "extendedData": {
    "payer": "string",
    "payee": "string",
    "extensionUType": "x2p101Payload",
    "x2p101Payload": {
      "extendedDescription": "string",
      "endToEndId": "string",
      "purposeCode": "string"
    },
    "service": "X2P1.01"
  }
}
```

<h3 id="cdr-banking-api-modified-for-dp306-_bankingtransactiondetail_properties">Properties</h3>

*allOf*

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|*anonymous*|[BankingTransaction](#schemacdr-banking-api-modified-for-dp306-bankingtransaction)|mandatory||none|

*and*

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|*anonymous*|object|mandatory||none|
|» extendedData|object|mandatory||none|
|»» payer|string|conditional||Label of the originating payer. Mandatory for inbound payment.|
|»» payee|string|conditional||Label of the target PayID. Mandatory for an outbound payment. The name assigned to the BSB/Account Number or PayID (by the owner of the PayID).|
|»» extensionUType|[Enum](#common-field-types)|optional||Optional extended data specific to transactions originated via NPP.|
|»» x2p101Payload|object|conditional||none|
|»»» extendedDescription|string|conditional||An extended string description. Required if the _extensionUType_ value is `x2p101Payload`.|
|»»» endToEndId|string|optional||An end to end ID for the payment created at initiation.|
|»»» purposeCode|string|optional||Purpose of the payment. Format is defined by NPP standards for the x2p1.01 overlay service.|
|»» service|[Enum](#common-field-types)|mandatory||Identifier of the applicable overlay service. Valid values are: `X2P1.01`.|

<h4 id="cdr-banking-api-modified-for-dp306-_bankingtransactiondetail_enumerated-values-main">Enumerated Values</h4>

|Property|Value|
|---|---|
|extensionUType|x2p101Payload|
|service|X2P1.01|

<h3 class="schema-toc" id="cdr-banking-api-modified-for-dp306-_schemas_tocSresponsebankingaccountsbalancelist">ResponseBankingAccountsBalanceList</h3>
<p id="tocSresponsebankingaccountsbalancelist" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api-modified-for-dp306-_schema-base_responsebankingaccountsbalancelist"></a>
  <a class="schema-anchor" id="schemacdr-banking-api-modified-for-dp306-responsebankingaccountsbalancelist"></a>
</p>

```json
{
  "data": {
    "balances": [
      {
        "accountId": "string",
        "currentBalance": "string",
        "availableBalance": "string",
        "creditLimit": "string",
        "amortisedLimit": "string",
        "currency": "AUD",
        "purses": [
          {
            "amount": "string",
            "currency": "string"
          }
        ]
      }
    ]
  },
  "links": {
    "self": "string",
    "first": "string",
    "prev": "string",
    "next": "string",
    "last": "string"
  },
  "meta": {
    "totalRecords": 0,
    "totalPages": 0
  }
}
```

<h3 id="cdr-banking-api-modified-for-dp306-_responsebankingaccountsbalancelist_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|data|object|mandatory||none|
|» balances|[[BankingBalance](#schemacdr-banking-api-modified-for-dp306-bankingbalance)]|mandatory||The list of balances returned.|
|links|[LinksPaginated](#schemacdr-banking-api-modified-for-dp306-linkspaginated)|mandatory||none|
|meta|[MetaPaginated](#schemacdr-banking-api-modified-for-dp306-metapaginated)|mandatory||none|

<h3 class="schema-toc" id="cdr-banking-api-modified-for-dp306-_schemas_tocSresponsebankingaccountsbalancebyid">ResponseBankingAccountsBalanceById</h3>
<p id="tocSresponsebankingaccountsbalancebyid" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api-modified-for-dp306-_schema-base_responsebankingaccountsbalancebyid"></a>
  <a class="schema-anchor" id="schemacdr-banking-api-modified-for-dp306-responsebankingaccountsbalancebyid"></a>
</p>

```json
{
  "data": {
    "accountId": "string",
    "currentBalance": "string",
    "availableBalance": "string",
    "creditLimit": "string",
    "amortisedLimit": "string",
    "currency": "AUD",
    "purses": [
      {
        "amount": "string",
        "currency": "string"
      }
    ]
  },
  "links": {
    "self": "string"
  },
  "meta": {}
}
```

<h3 id="cdr-banking-api-modified-for-dp306-_responsebankingaccountsbalancebyid_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|data|[BankingBalance](#schemacdr-banking-api-modified-for-dp306-bankingbalance)|mandatory||none|
|links|[Links](#schemacdr-banking-api-modified-for-dp306-links)|mandatory||none|
|meta|[Meta](#schemacdr-banking-api-modified-for-dp306-meta)|optional||none|

<h3 class="schema-toc" id="cdr-banking-api-modified-for-dp306-_schemas_tocSbankingbalance">BankingBalance</h3>
<p id="tocSbankingbalance" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api-modified-for-dp306-_schema-base_bankingbalance"></a>
  <a class="schema-anchor" id="schemacdr-banking-api-modified-for-dp306-bankingbalance"></a>
</p>

```json
{
  "accountId": "string",
  "currentBalance": "string",
  "availableBalance": "string",
  "creditLimit": "string",
  "amortisedLimit": "string",
  "currency": "AUD",
  "purses": [
    {
      "amount": "string",
      "currency": "string"
    }
  ]
}
```

<h3 id="cdr-banking-api-modified-for-dp306-_bankingbalance_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|accountId|[BankingAccountId](#schemacdr-banking-api-modified-for-dp306-bankingaccountid)|mandatory||Unique identifier for the account.|
|currentBalance|[AmountString](#common-field-types)|mandatory||The balance of the account at this time. Should align to the balance available via other channels such as Internet Banking. Assumed to be negative if the customer has money owing.|
|availableBalance|[AmountString](#common-field-types)|mandatory||Balance representing the amount of funds available for transfer. Assumed to be zero or positive.|
|creditLimit|[AmountString](#common-field-types)|optional||Object representing the maximum amount of credit that is available for this account. Assumed to be zero if absent.|
|amortisedLimit|[AmountString](#common-field-types)|optional||Object representing the available limit amortised according to payment schedule. Assumed to be zero if absent.|
|currency|[CurrencyString](#common-field-types)|optional|`AUD`|The currency for the balance amounts. If absent assumed to be `AUD`.|
|purses|[[BankingBalancePurse](#schemacdr-banking-api-modified-for-dp306-bankingbalancepurse)]|optional||Optional array of balances for the account in other currencies. Included to support accounts that support multi-currency purses such as Travel Cards.|

<h3 class="schema-toc" id="cdr-banking-api-modified-for-dp306-_schemas_tocSbankingbalancepurse">BankingBalancePurse</h3>
<p id="tocSbankingbalancepurse" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api-modified-for-dp306-_schema-base_bankingbalancepurse"></a>
  <a class="schema-anchor" id="schemacdr-banking-api-modified-for-dp306-bankingbalancepurse"></a>
</p>

```json
{
  "amount": "string",
  "currency": "string"
}
```

<h3 id="cdr-banking-api-modified-for-dp306-_bankingbalancepurse_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|amount|[AmountString](#common-field-types)|mandatory||The balance available for this additional currency purse.|
|currency|[CurrencyString](#common-field-types)|optional||The currency for the purse.|

<h3 class="schema-toc" id="cdr-banking-api-modified-for-dp306-_schemas_tocSresponsebankingpayeelistv2">ResponseBankingPayeeListV2</h3>
<p id="tocSresponsebankingpayeelistv2" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api-modified-for-dp306-_schema-base_responsebankingpayeelist"></a>
  <a class="schema-anchor" id="schemacdr-banking-api-modified-for-dp306-responsebankingpayeelistv2"></a>
</p>

```json
{
  "data": {
    "payees": [
      {
        "payeeId": "string",
        "nickname": "string",
        "description": "string",
        "type": "BILLER",
        "creationDate": "string"
      }
    ]
  },
  "links": {
    "self": "string",
    "first": "string",
    "prev": "string",
    "next": "string",
    "last": "string"
  },
  "meta": {
    "totalRecords": 0,
    "totalPages": 0
  }
}
```

<h3 id="cdr-banking-api-modified-for-dp306-_responsebankingpayeelistv2_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|data|object|mandatory||none|
|» payees|[[BankingPayeeV2](#schemacdr-banking-api-modified-for-dp306-bankingpayeev2)]|mandatory||The list of payees returned.|
|links|[LinksPaginated](#schemacdr-banking-api-modified-for-dp306-linkspaginated)|mandatory||none|
|meta|[MetaPaginated](#schemacdr-banking-api-modified-for-dp306-metapaginated)|mandatory||none|

<h3 class="schema-toc" id="cdr-banking-api-modified-for-dp306-_schemas_tocSresponsebankingpayeebyidv2">ResponseBankingPayeeByIdV2</h3>
<p id="tocSresponsebankingpayeebyidv2" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api-modified-for-dp306-_schema-base_responsebankingpayeebyid"></a>
  <a class="schema-anchor" id="schemacdr-banking-api-modified-for-dp306-responsebankingpayeebyidv2"></a>
</p>

```json
{
  "data": {
    "payeeId": "string",
    "nickname": "string",
    "description": "string",
    "type": "BILLER",
    "creationDate": "string",
    "payeeUType": "biller",
    "biller": {
      "billerCode": "string",
      "crn": "string",
      "billerName": "string"
    },
    "domestic": {
      "payeeAccountUType": "account",
      "account": {
        "accountName": "string",
        "bsb": "string",
        "accountNumber": "string"
      },
      "card": {
        "cardNumber": "string"
      },
      "payId": {
        "name": "string",
        "identifier": "string",
        "type": "ABN"
      }
    },
    "digitalWallet": {
      "name": "string",
      "identifier": "string",
      "type": "EMAIL",
      "provider": "PAYPAL_AU"
    },
    "international": {
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
        "routingNumber": "string",
        "legalEntityIdentifier": "string"
      }
    }
  },
  "links": {
    "self": "string"
  },
  "meta": {}
}
```

<h3 id="cdr-banking-api-modified-for-dp306-_responsebankingpayeebyidv2_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|data|[BankingPayeeDetailV2](#schemacdr-banking-api-modified-for-dp306-bankingpayeedetailv2)|mandatory||none|
|links|[Links](#schemacdr-banking-api-modified-for-dp306-links)|mandatory||none|
|meta|[Meta](#schemacdr-banking-api-modified-for-dp306-meta)|optional||none|

<h3 class="schema-toc" id="cdr-banking-api-modified-for-dp306-_schemas_tocSbankingpayeev2">BankingPayeeV2</h3>
<p id="tocSbankingpayeev2" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api-modified-for-dp306-_schema-base_bankingpayee"></a>
  <a class="schema-anchor" id="schemacdr-banking-api-modified-for-dp306-bankingpayeev2"></a>
</p>

```json
{
  "payeeId": "string",
  "nickname": "string",
  "description": "string",
  "type": "BILLER",
  "creationDate": "string"
}
```

<h3 id="cdr-banking-api-modified-for-dp306-_bankingpayeev2_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|payeeId|[BankingPayeeId](#schemacdr-banking-api-modified-for-dp306-bankingpayeeid)|mandatory||Unique identifier for the payee.|
|nickname|string|mandatory||The short display name of the payee as provided by the customer. Where a customer has not provided a nickname, a display name derived by the bank for the payee consistent with existing digital banking channels.|
|description|string|optional||A description of the payee provided by the customer.|
|type|[Enum](#common-field-types)|mandatory||The type of payee.<ul><li>`DOMESTIC` means a registered payee for domestic payments including NPP.<li>`INTERNATIONAL` means a registered payee for international payments.<li>`BILLER` means a registered payee for BPAY.<li>`DIGITAL_WALLET` means a registered payee for a bank's digital wallet.</ul>|
|creationDate|[DateString](#common-field-types)|optional||The date the payee was created by the customer.|

<h4 id="cdr-banking-api-modified-for-dp306-_bankingpayeev2_enumerated-values-main">Enumerated Values</h4>

|Property|Value|
|---|---|
|type|BILLER|
|type|DIGITAL_WALLET|
|type|DOMESTIC|
|type|INTERNATIONAL|

<h3 class="schema-toc" id="cdr-banking-api-modified-for-dp306-_schemas_tocSbankingpayeedetailv2">BankingPayeeDetailV2</h3>
<p id="tocSbankingpayeedetailv2" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api-modified-for-dp306-_schema-base_bankingpayeedetail"></a>
  <a class="schema-anchor" id="schemacdr-banking-api-modified-for-dp306-bankingpayeedetailv2"></a>
</p>

```json
{
  "payeeId": "string",
  "nickname": "string",
  "description": "string",
  "type": "BILLER",
  "creationDate": "string",
  "payeeUType": "biller",
  "biller": {
    "billerCode": "string",
    "crn": "string",
    "billerName": "string"
  },
  "domestic": {
    "payeeAccountUType": "account",
    "account": {
      "accountName": "string",
      "bsb": "string",
      "accountNumber": "string"
    },
    "card": {
      "cardNumber": "string"
    },
    "payId": {
      "name": "string",
      "identifier": "string",
      "type": "ABN"
    }
  },
  "digitalWallet": {
    "name": "string",
    "identifier": "string",
    "type": "EMAIL",
    "provider": "PAYPAL_AU"
  },
  "international": {
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
      "routingNumber": "string",
      "legalEntityIdentifier": "string"
    }
  }
}
```

<h3 id="cdr-banking-api-modified-for-dp306-_bankingpayeedetailv2_properties">Properties</h3>

*allOf*

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|*anonymous*|[BankingPayeeV2](#schemacdr-banking-api-modified-for-dp306-bankingpayeev2)|mandatory||none|

*and*

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|*anonymous*|object|mandatory||none|
|» payeeUType|[Enum](#common-field-types)|mandatory||Type of object included that describes the payee in detail.|
|» biller|[BankingBillerPayee](#schemacdr-banking-api-modified-for-dp306-bankingbillerpayee)|conditional||none|
|» domestic|[BankingDomesticPayee](#schemacdr-banking-api-modified-for-dp306-bankingdomesticpayee)|conditional||none|
|» digitalWallet|[BankingDigitalWalletPayee](#schemacdr-banking-api-modified-for-dp306-bankingdigitalwalletpayee)|conditional||none|
|» international|[BankingInternationalPayee](#schemacdr-banking-api-modified-for-dp306-bankinginternationalpayee)|conditional||none|

<h4 id="cdr-banking-api-modified-for-dp306-_bankingpayeedetailv2_enumerated-values-main">Enumerated Values</h4>

|Property|Value|
|---|---|
|payeeUType|biller|
|payeeUType|digitalWallet|
|payeeUType|domestic|
|payeeUType|international|

<h3 class="schema-toc" id="cdr-banking-api-modified-for-dp306-_schemas_tocSbankingdomesticpayee">BankingDomesticPayee</h3>
<p id="tocSbankingdomesticpayee" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api-modified-for-dp306-_schema-base_bankingdomesticpayee"></a>
  <a class="schema-anchor" id="schemacdr-banking-api-modified-for-dp306-bankingdomesticpayee"></a>
</p>

```json
{
  "payeeAccountUType": "account",
  "account": {
    "accountName": "string",
    "bsb": "string",
    "accountNumber": "string"
  },
  "card": {
    "cardNumber": "string"
  },
  "payId": {
    "name": "string",
    "identifier": "string",
    "type": "ABN"
  }
}
```

<h3 id="cdr-banking-api-modified-for-dp306-_bankingdomesticpayee_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|payeeAccountUType|[Enum](#common-field-types)|mandatory||Type of account object included. Valid values are: <ul><li>`account` A standard Australian account defined by BSB/Account Number.<li>`card` A credit or charge card to pay to (note that PANs are masked).<li>`payId` A PayID recognised by NPP.</ul>|
|account|[BankingDomesticPayeeAccount](#schemacdr-banking-api-modified-for-dp306-bankingdomesticpayeeaccount)|conditional||none|
|card|[BankingDomesticPayeeCard](#schemacdr-banking-api-modified-for-dp306-bankingdomesticpayeecard)|conditional||none|
|payId|[BankingDomesticPayeePayId](#schemacdr-banking-api-modified-for-dp306-bankingdomesticpayeepayid)|conditional||none|

<h4 id="cdr-banking-api-modified-for-dp306-_bankingdomesticpayee_enumerated-values-main">Enumerated Values</h4>

|Property|Value|
|---|---|
|payeeAccountUType|account|
|payeeAccountUType|card|
|payeeAccountUType|payId|

<h3 class="schema-toc" id="cdr-banking-api-modified-for-dp306-_schemas_tocSbankingdomesticpayeeaccount">BankingDomesticPayeeAccount</h3>
<p id="tocSbankingdomesticpayeeaccount" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api-modified-for-dp306-_schema-base_bankingdomesticpayeeaccount"></a>
  <a class="schema-anchor" id="schemacdr-banking-api-modified-for-dp306-bankingdomesticpayeeaccount"></a>
</p>

```json
{
  "accountName": "string",
  "bsb": "string",
  "accountNumber": "string"
}
```

<h3 id="cdr-banking-api-modified-for-dp306-_bankingdomesticpayeeaccount_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|accountName|string|optional||Name of the account to pay to.|
|bsb|string|mandatory||BSB of the account to pay to.|
|accountNumber|string|mandatory||Number of the account to pay to.|

<h3 class="schema-toc" id="cdr-banking-api-modified-for-dp306-_schemas_tocSbankingdomesticpayeecard">BankingDomesticPayeeCard</h3>
<p id="tocSbankingdomesticpayeecard" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api-modified-for-dp306-_schema-base_bankingdomesticpayeecard"></a>
  <a class="schema-anchor" id="schemacdr-banking-api-modified-for-dp306-bankingdomesticpayeecard"></a>
</p>

```json
{
  "cardNumber": "string"
}
```

<h3 id="cdr-banking-api-modified-for-dp306-_bankingdomesticpayeecard_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|cardNumber|[MaskedPANString](#common-field-types)|mandatory||Name of the account to pay to.|

<h3 class="schema-toc" id="cdr-banking-api-modified-for-dp306-_schemas_tocSbankingdomesticpayeepayid">BankingDomesticPayeePayId</h3>
<p id="tocSbankingdomesticpayeepayid" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api-modified-for-dp306-_schema-base_bankingdomesticpayeepayid"></a>
  <a class="schema-anchor" id="schemacdr-banking-api-modified-for-dp306-bankingdomesticpayeepayid"></a>
</p>

```json
{
  "name": "string",
  "identifier": "string",
  "type": "ABN"
}
```

<h3 id="cdr-banking-api-modified-for-dp306-_bankingdomesticpayeepayid_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|name|string|optional||The name assigned to the PayID by the owner of the PayID.|
|identifier|string|mandatory||The identifier of the PayID (dependent on type).|
|type|[Enum](#common-field-types)|mandatory||The type of the PayID.|

<h4 id="cdr-banking-api-modified-for-dp306-_bankingdomesticpayeepayid_enumerated-values-main">Enumerated Values</h4>

|Property|Value|
|---|---|
|type|ABN|
|type|EMAIL|
|type|ORG_IDENTIFIER|
|type|TELEPHONE|

<h3 class="schema-toc" id="cdr-banking-api-modified-for-dp306-_schemas_tocSbankingbillerpayee">BankingBillerPayee</h3>
<p id="tocSbankingbillerpayee" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api-modified-for-dp306-_schema-base_bankingbillerpayee"></a>
  <a class="schema-anchor" id="schemacdr-banking-api-modified-for-dp306-bankingbillerpayee"></a>
</p>

```json
{
  "billerCode": "string",
  "crn": "string",
  "billerName": "string"
}
```

<h3 id="cdr-banking-api-modified-for-dp306-_bankingbillerpayee_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|billerCode|string|mandatory||BPAY Biller Code of the Biller.|
|crn|string|conditional||BPAY CRN of the Biller (if available).<br/>Where the CRN contains sensitive information, it should be masked in line with how the Data Holder currently displays account identifiers in their existing online banking channels. If the contents of the CRN match the format of a Credit Card PAN they should be masked according to the rules applicable for [MaskedPANString](#common-field-types). If the contents are otherwise sensitive, then it should be masked using the rules applicable for the [MaskedAccountString](#common-field-types) common type.|
|billerName|string|mandatory||Name of the Biller.|

<h3 class="schema-toc" id="cdr-banking-api-modified-for-dp306-_schemas_tocSbankinginternationalpayee">BankingInternationalPayee</h3>
<p id="tocSbankinginternationalpayee" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api-modified-for-dp306-_schema-base_bankinginternationalpayee"></a>
  <a class="schema-anchor" id="schemacdr-banking-api-modified-for-dp306-bankinginternationalpayee"></a>
</p>

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
    "routingNumber": "string",
    "legalEntityIdentifier": "string"
  }
}
```

<h3 id="cdr-banking-api-modified-for-dp306-_bankinginternationalpayee_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|beneficiaryDetails|object|mandatory||none|
|» name|string|optional||Name of the beneficiary.|
|» country|[ExternalRef](#common-field-types)|mandatory||Country where the beneficiary resides. A valid [ISO 3166 Alpha-3](https://www.iso.org/iso-3166-country-codes.html) country code.|
|» message|string|optional||Response message for the payment.|
|bankDetails|object|mandatory||none|
|» country|[ExternalRef](#common-field-types)|mandatory||Country of the recipient institution. A valid [ISO 3166 Alpha-3](https://www.iso.org/iso-3166-country-codes.html) country code.|
|» accountNumber|string|mandatory||Account Targeted for payment.|
|» bankAddress|object|optional||none|
|»» name|string|mandatory||Name of the recipient Bank.|
|»» address|string|mandatory||Address of the recipient Bank.|
|» beneficiaryBankBIC|[ExternalRef](#common-field-types)|optional||Swift bank code. Aligns with standard [ISO 9362](https://www.iso.org/standard/60390.html).|
|» fedWireNumber|string|optional||Number for Fedwire payment (Federal Reserve Wire Network).|
|» sortCode|string|optional||Sort code used for account identification in some jurisdictions.|
|» chipNumber|string|optional||Number for the Clearing House Interbank Payments System.|
|» routingNumber|string|optional||International bank routing number.|
|» legalEntityIdentifier|[ExternalRef](#common-field-types)|optional||The legal entity identifier (LEI) for the beneficiary. Aligns with [ISO 17442](https://www.iso.org/standard/59771.html).|

<h3 class="schema-toc" id="cdr-banking-api-modified-for-dp306-_schemas_tocSbankingdigitalwalletpayee">BankingDigitalWalletPayee</h3>
<p id="tocSbankingdigitalwalletpayee" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api-modified-for-dp306-_schema-base_bankingdigitalwalletpayee"></a>
  <a class="schema-anchor" id="schemacdr-banking-api-modified-for-dp306-bankingdigitalwalletpayee"></a>
</p>

```json
{
  "name": "string",
  "identifier": "string",
  "type": "EMAIL",
  "provider": "PAYPAL_AU"
}
```

<h3 id="cdr-banking-api-modified-for-dp306-_bankingdigitalwalletpayee_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|name|string|mandatory||The display name of the wallet as given by the customer, else a default value defined by the data holder.|
|identifier|string|mandatory||The identifier of the digital wallet (dependent on type).|
|type|[Enum](#common-field-types)|mandatory||The type of the digital wallet identifier.|
|provider|[Enum](#common-field-types)|mandatory||The provider of the digital wallet.|

<h4 id="cdr-banking-api-modified-for-dp306-_bankingdigitalwalletpayee_enumerated-values-main">Enumerated Values</h4>

|Property|Value|
|---|---|
|type|EMAIL|
|type|CONTACT_NAME|
|type|TELEPHONE|
|provider|PAYPAL_AU|
|provider|OTHER|

<h3 class="schema-toc" id="cdr-banking-api-modified-for-dp306-_schemas_tocSresponsebankingdirectdebitauthorisationlist">ResponseBankingDirectDebitAuthorisationList</h3>
<p id="tocSresponsebankingdirectdebitauthorisationlist" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api-modified-for-dp306-_schema-base_responsebankingdirectdebitauthorisationlist"></a>
  <a class="schema-anchor" id="schemacdr-banking-api-modified-for-dp306-responsebankingdirectdebitauthorisationlist"></a>
</p>

```json
{
  "data": {
    "directDebitAuthorisations": [
      {
        "accountId": "string",
        "authorisedEntity": {
          "description": "string",
          "financialInstitution": "string",
          "abn": "string",
          "acn": "string",
          "arbn": "string"
        },
        "lastDebitDateTime": "string",
        "lastDebitAmount": "string"
      }
    ]
  },
  "links": {
    "self": "string",
    "first": "string",
    "prev": "string",
    "next": "string",
    "last": "string"
  },
  "meta": {
    "totalRecords": 0,
    "totalPages": 0
  }
}
```

<h3 id="cdr-banking-api-modified-for-dp306-_responsebankingdirectdebitauthorisationlist_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|data|object|mandatory||none|
|» directDebitAuthorisations|[[BankingDirectDebit](#schemacdr-banking-api-modified-for-dp306-bankingdirectdebit)]|mandatory||The list of authorisations returned.|
|links|[LinksPaginated](#schemacdr-banking-api-modified-for-dp306-linkspaginated)|mandatory||none|
|meta|[MetaPaginated](#schemacdr-banking-api-modified-for-dp306-metapaginated)|mandatory||none|

<h3 class="schema-toc" id="cdr-banking-api-modified-for-dp306-_schemas_tocSbankingdirectdebit">BankingDirectDebit</h3>
<p id="tocSbankingdirectdebit" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api-modified-for-dp306-_schema-base_bankingdirectdebit"></a>
  <a class="schema-anchor" id="schemacdr-banking-api-modified-for-dp306-bankingdirectdebit"></a>
</p>

```json
{
  "accountId": "string",
  "authorisedEntity": {
    "description": "string",
    "financialInstitution": "string",
    "abn": "string",
    "acn": "string",
    "arbn": "string"
  },
  "lastDebitDateTime": "string",
  "lastDebitAmount": "string"
}
```

<h3 id="cdr-banking-api-modified-for-dp306-_bankingdirectdebit_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|accountId|[BankingAccountId](#schemacdr-banking-api-modified-for-dp306-bankingaccountid)|mandatory||Unique identifier for the account.|
|authorisedEntity|[BankingAuthorisedEntity](#schemacdr-banking-api-modified-for-dp306-bankingauthorisedentity)|mandatory||none|
|lastDebitDateTime|[DateTimeString](#common-field-types)|optional||The date and time of the last debit executed under this authorisation.|
|lastDebitAmount|[AmountString](#common-field-types)|optional||The amount of the last debit executed under this authorisation.|

<h3 class="schema-toc" id="cdr-banking-api-modified-for-dp306-_schemas_tocSbankingauthorisedentity">BankingAuthorisedEntity</h3>
<p id="tocSbankingauthorisedentity" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api-modified-for-dp306-_schema-base_bankingauthorisedentity"></a>
  <a class="schema-anchor" id="schemacdr-banking-api-modified-for-dp306-bankingauthorisedentity"></a>
</p>

```json
{
  "description": "string",
  "financialInstitution": "string",
  "abn": "string",
  "acn": "string",
  "arbn": "string"
}
```

<h3 id="cdr-banking-api-modified-for-dp306-_bankingauthorisedentity_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|description|string|optional||Description of the authorised entity derived from previously executed direct debits.|
|financialInstitution|string|conditional||Name of the financial institution through which the direct debit will be executed. Is required unless the payment is made via a credit card scheme.|
|abn|string|optional||Australian Business Number for the authorised entity.|
|acn|string|optional||Australian Company Number for the authorised entity.|
|arbn|string|optional||Australian Registered Body Number for the authorised entity.|

<h3 class="schema-toc" id="cdr-banking-api-modified-for-dp306-_schemas_tocSresponsebankingscheduledpaymentslistv2">ResponseBankingScheduledPaymentsListV2</h3>
<p id="tocSresponsebankingscheduledpaymentslistv2" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api-modified-for-dp306-_schema-base_responsebankingscheduledpaymentslist"></a>
  <a class="schema-anchor" id="schemacdr-banking-api-modified-for-dp306-responsebankingscheduledpaymentslistv2"></a>
</p>

```json
{
  "data": {
    "scheduledPayments": [
      {
        "scheduledPaymentId": "string",
        "nickname": "string",
        "payerReference": "string",
        "payeeReference": "string",
        "status": "ACTIVE",
        "from": {
          "accountId": "string"
        },
        "paymentSet": [
          {
            "to": {
              "toUType": "accountId",
              "accountId": "string",
              "payeeId": "string",
              "nickname": "string",
              "payeeReference": "string",
              "digitalWallet": {
                "name": "string",
                "identifier": "string",
                "type": "EMAIL",
                "provider": "PAYPAL_AU"
              },
              "domestic": {
                "payeeAccountUType": "account",
                "account": {
                  "accountName": "string",
                  "bsb": "string",
                  "accountNumber": "string"
                },
                "card": {
                  "cardNumber": "string"
                },
                "payId": {
                  "name": "string",
                  "identifier": "string",
                  "type": "ABN"
                }
              },
              "biller": {
                "billerCode": "string",
                "crn": "string",
                "billerName": "string"
              },
              "international": {
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
                  "routingNumber": "string",
                  "legalEntityIdentifier": "string"
                }
              }
            },
            "isAmountCalculated": false,
            "amount": "string",
            "currency": "AUD"
          }
        ],
        "recurrence": {
          "nextPaymentDate": "string",
          "recurrenceUType": "eventBased",
          "onceOff": {
            "paymentDate": "string"
          },
          "intervalSchedule": {
            "finalPaymentDate": "string",
            "paymentsRemaining": 1,
            "nonBusinessDayTreatment": "AFTER",
            "intervals": [
              {
                "interval": "string",
                "dayInInterval": "string"
              }
            ]
          },
          "lastWeekDay": {
            "finalPaymentDate": "string",
            "paymentsRemaining": 1,
            "interval": "string",
            "lastWeekDay": "FRI",
            "nonBusinessDayTreatment": "AFTER"
          },
          "eventBased": {
            "description": "string"
          }
        }
      }
    ]
  },
  "links": {
    "self": "string",
    "first": "string",
    "prev": "string",
    "next": "string",
    "last": "string"
  },
  "meta": {
    "totalRecords": 0,
    "totalPages": 0
  }
}
```

<h3 id="cdr-banking-api-modified-for-dp306-_responsebankingscheduledpaymentslistv2_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|data|object|mandatory||none|
|» scheduledPayments|[[BankingScheduledPaymentV2](#schemacdr-banking-api-modified-for-dp306-bankingscheduledpaymentv2)]|mandatory||The list of scheduled payments to return.|
|links|[LinksPaginated](#schemacdr-banking-api-modified-for-dp306-linkspaginated)|mandatory||none|
|meta|[MetaPaginated](#schemacdr-banking-api-modified-for-dp306-metapaginated)|mandatory||none|

<h3 class="schema-toc" id="cdr-banking-api-modified-for-dp306-_schemas_tocSbankingscheduledpaymentv2">BankingScheduledPaymentV2</h3>
<p id="tocSbankingscheduledpaymentv2" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api-modified-for-dp306-_schema-base_bankingscheduledpayment"></a>
  <a class="schema-anchor" id="schemacdr-banking-api-modified-for-dp306-bankingscheduledpaymentv2"></a>
</p>

```json
{
  "scheduledPaymentId": "string",
  "nickname": "string",
  "payerReference": "string",
  "payeeReference": "string",
  "status": "ACTIVE",
  "from": {
    "accountId": "string"
  },
  "paymentSet": [
    {
      "to": {
        "toUType": "accountId",
        "accountId": "string",
        "payeeId": "string",
        "nickname": "string",
        "payeeReference": "string",
        "digitalWallet": {
          "name": "string",
          "identifier": "string",
          "type": "EMAIL",
          "provider": "PAYPAL_AU"
        },
        "domestic": {
          "payeeAccountUType": "account",
          "account": {
            "accountName": "string",
            "bsb": "string",
            "accountNumber": "string"
          },
          "card": {
            "cardNumber": "string"
          },
          "payId": {
            "name": "string",
            "identifier": "string",
            "type": "ABN"
          }
        },
        "biller": {
          "billerCode": "string",
          "crn": "string",
          "billerName": "string"
        },
        "international": {
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
            "routingNumber": "string",
            "legalEntityIdentifier": "string"
          }
        }
      },
      "isAmountCalculated": false,
      "amount": "string",
      "currency": "AUD"
    }
  ],
  "recurrence": {
    "nextPaymentDate": "string",
    "recurrenceUType": "eventBased",
    "onceOff": {
      "paymentDate": "string"
    },
    "intervalSchedule": {
      "finalPaymentDate": "string",
      "paymentsRemaining": 1,
      "nonBusinessDayTreatment": "AFTER",
      "intervals": [
        {
          "interval": "string",
          "dayInInterval": "string"
        }
      ]
    },
    "lastWeekDay": {
      "finalPaymentDate": "string",
      "paymentsRemaining": 1,
      "interval": "string",
      "lastWeekDay": "FRI",
      "nonBusinessDayTreatment": "AFTER"
    },
    "eventBased": {
      "description": "string"
    }
  }
}
```

<h3 id="cdr-banking-api-modified-for-dp306-_bankingscheduledpaymentv2_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|scheduledPaymentId|[BankingScheduledPaymentId](#schemacdr-banking-api-modified-for-dp306-bankingscheduledpaymentid)|mandatory||Unique identifier for the scheduled payment.|
|nickname|string|optional||The short display name of the scheduled payment as provided by the customer if provided. Where a customer has not provided a nickname, a display name derived by the bank for the scheduled payment should be provided that is consistent with existing digital banking channels.|
|payerReference|string|mandatory||The reference for the transaction that will be used by the originating institution for the purposes of constructing a statement narrative on the payer’s account. Empty string if no data provided.|
|payeeReference|string|conditional||The reference for the transaction, if applicable, that will be provided by the originating institution for all payments in the payment set. Empty string if no data provided.|
|status|[Enum](#common-field-types)|mandatory||Indicates whether the schedule is currently active. The value `SKIP` is equivalent to `ACTIVE` except that the customer has requested the next normal occurrence to be skipped.|
|from|[BankingScheduledPaymentFrom](#schemacdr-banking-api-modified-for-dp306-bankingscheduledpaymentfrom)|mandatory||Object containing details of the source of the payment. Currently only specifies an _accountId_ but provided as an object to facilitate future extensibility and consistency with the _to_ object.|
|paymentSet|[[BankingScheduledPaymentSetV2](#schemacdr-banking-api-modified-for-dp306-bankingscheduledpaymentsetv2)]|mandatory||[The set of payment amounts and destination accounts for this payment accommodating multi-part payments. A single entry indicates a simple payment with one destination account. Must have at least one entry.]|
|recurrence|[BankingScheduledPaymentRecurrence](#schemacdr-banking-api-modified-for-dp306-bankingscheduledpaymentrecurrence)|mandatory||Object containing the detail of the schedule for the payment.|

<h4 id="cdr-banking-api-modified-for-dp306-_bankingscheduledpaymentv2_enumerated-values-main">Enumerated Values</h4>

|Property|Value|
|---|---|
|status|ACTIVE|
|status|INACTIVE|
|status|SKIP|

<h3 class="schema-toc" id="cdr-banking-api-modified-for-dp306-_schemas_tocSbankingscheduledpaymentsetv2">BankingScheduledPaymentSetV2</h3>
<p id="tocSbankingscheduledpaymentsetv2" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api-modified-for-dp306-_schema-base_bankingscheduledpaymentset"></a>
  <a class="schema-anchor" id="schemacdr-banking-api-modified-for-dp306-bankingscheduledpaymentsetv2"></a>
</p>

```json
{
  "to": {
    "toUType": "accountId",
    "accountId": "string",
    "payeeId": "string",
    "nickname": "string",
    "payeeReference": "string",
    "digitalWallet": {
      "name": "string",
      "identifier": "string",
      "type": "EMAIL",
      "provider": "PAYPAL_AU"
    },
    "domestic": {
      "payeeAccountUType": "account",
      "account": {
        "accountName": "string",
        "bsb": "string",
        "accountNumber": "string"
      },
      "card": {
        "cardNumber": "string"
      },
      "payId": {
        "name": "string",
        "identifier": "string",
        "type": "ABN"
      }
    },
    "biller": {
      "billerCode": "string",
      "crn": "string",
      "billerName": "string"
    },
    "international": {
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
        "routingNumber": "string",
        "legalEntityIdentifier": "string"
      }
    }
  },
  "isAmountCalculated": false,
  "amount": "string",
  "currency": "AUD"
}
```

*The set of payment amounts and destination accounts for this payment accommodating multi-part payments. A single entry indicates a simple payment with one destination account. Must have at least one entry.*

<h3 id="cdr-banking-api-modified-for-dp306-_bankingscheduledpaymentsetv2_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|to|[BankingScheduledPaymentToV2](#schemacdr-banking-api-modified-for-dp306-bankingscheduledpaymenttov2)|mandatory||Object containing details of the destination of the payment. Used to specify a variety of payment destination types.|
|isAmountCalculated|[Boolean](#common-field-types)|optional|`false`|Flag indicating whether the amount of the payment is calculated based on the context of the event. For instance a payment to reduce the balance of a credit card to zero. If absent then `false` is assumed.|
|amount|[AmountString](#common-field-types)|conditional||The amount of the next payment if known. Mandatory unless the _isAmountCalculated_ field is set to `true`. Must be zero or positive if present.|
|currency|[CurrencyString](#common-field-types)|optional|`AUD`|The currency for the payment. `AUD` assumed if not present.|

<h3 class="schema-toc" id="cdr-banking-api-modified-for-dp306-_schemas_tocSbankingscheduledpaymenttov2">BankingScheduledPaymentToV2</h3>
<p id="tocSbankingscheduledpaymenttov2" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api-modified-for-dp306-_schema-base_bankingscheduledpaymentto"></a>
  <a class="schema-anchor" id="schemacdr-banking-api-modified-for-dp306-bankingscheduledpaymenttov2"></a>
</p>

```json
{
  "toUType": "accountId",
  "accountId": "string",
  "payeeId": "string",
  "nickname": "string",
  "payeeReference": "string",
  "digitalWallet": {
    "name": "string",
    "identifier": "string",
    "type": "EMAIL",
    "provider": "PAYPAL_AU"
  },
  "domestic": {
    "payeeAccountUType": "account",
    "account": {
      "accountName": "string",
      "bsb": "string",
      "accountNumber": "string"
    },
    "card": {
      "cardNumber": "string"
    },
    "payId": {
      "name": "string",
      "identifier": "string",
      "type": "ABN"
    }
  },
  "biller": {
    "billerCode": "string",
    "crn": "string",
    "billerName": "string"
  },
  "international": {
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
      "routingNumber": "string",
      "legalEntityIdentifier": "string"
    }
  }
}
```

*Object containing details of the destination of the payment. Used to specify a variety of payment destination types.*

<h3 id="cdr-banking-api-modified-for-dp306-_bankingscheduledpaymenttov2_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|toUType|[Enum](#common-field-types)|mandatory||The type of object provided that specifies the destination of the funds for the payment.|
|accountId|[BankingAccountId](#schemacdr-banking-api-modified-for-dp306-bankingaccountid)|conditional||Present if _toUType_ is set to `accountId`. Indicates that the payment is to another account that is accessible under the current consent.|
|payeeId|[BankingPayeeId](#schemacdr-banking-api-modified-for-dp306-bankingpayeeid)|conditional||Present if _toUType_ is set to `payeeId`. Indicates that the payment is to registered payee that can be accessed using the payee endpoint. If the Bank Payees scope has not been consented to then a _payeeId_ should not be provided and the full payee details should be provided instead.|
|nickname|string|conditional||The short display name of the payee as provided by the customer unless _toUType_ is set to `payeeId`. Where a customer has not provided a nickname, a display name derived by the bank for payee should be provided that is consistent with existing digital banking channels.|
|payeeReference|string|conditional||The reference for the transaction, if applicable, that will be provided by the originating institution for the specific payment. If not empty, it overrides the value provided at the BankingScheduledPayment level.|
|digitalWallet|[BankingDigitalWalletPayee](#schemacdr-banking-api-modified-for-dp306-bankingdigitalwalletpayee)|conditional||none|
|domestic|[BankingDomesticPayee](#schemacdr-banking-api-modified-for-dp306-bankingdomesticpayee)|conditional||none|
|biller|[BankingBillerPayee](#schemacdr-banking-api-modified-for-dp306-bankingbillerpayee)|conditional||none|
|international|[BankingInternationalPayee](#schemacdr-banking-api-modified-for-dp306-bankinginternationalpayee)|conditional||none|

<h4 id="cdr-banking-api-modified-for-dp306-_bankingscheduledpaymenttov2_enumerated-values-main">Enumerated Values</h4>

|Property|Value|
|---|---|
|toUType|accountId|
|toUType|biller|
|toUType|digitalWallet|
|toUType|domestic|
|toUType|international|
|toUType|payeeId|

<h3 class="schema-toc" id="cdr-banking-api-modified-for-dp306-_schemas_tocSbankingscheduledpaymentfrom">BankingScheduledPaymentFrom</h3>
<p id="tocSbankingscheduledpaymentfrom" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api-modified-for-dp306-_schema-base_bankingscheduledpaymentfrom"></a>
  <a class="schema-anchor" id="schemacdr-banking-api-modified-for-dp306-bankingscheduledpaymentfrom"></a>
</p>

```json
{
  "accountId": "string"
}
```

*Object containing details of the source of the payment. Currently only specifies an _accountId_ but provided as an object to facilitate future extensibility and consistency with the _to_ object.*

<h3 id="cdr-banking-api-modified-for-dp306-_bankingscheduledpaymentfrom_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|accountId|[BankingAccountId](#schemacdr-banking-api-modified-for-dp306-bankingaccountid)|mandatory||Unique identifier for the account.|

<h3 class="schema-toc" id="cdr-banking-api-modified-for-dp306-_schemas_tocSbankingscheduledpaymentrecurrence">BankingScheduledPaymentRecurrence</h3>
<p id="tocSbankingscheduledpaymentrecurrence" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api-modified-for-dp306-_schema-base_bankingscheduledpaymentrecurrence"></a>
  <a class="schema-anchor" id="schemacdr-banking-api-modified-for-dp306-bankingscheduledpaymentrecurrence"></a>
</p>

```json
{
  "nextPaymentDate": "string",
  "recurrenceUType": "eventBased",
  "onceOff": {
    "paymentDate": "string"
  },
  "intervalSchedule": {
    "finalPaymentDate": "string",
    "paymentsRemaining": 1,
    "nonBusinessDayTreatment": "AFTER",
    "intervals": [
      {
        "interval": "string",
        "dayInInterval": "string"
      }
    ]
  },
  "lastWeekDay": {
    "finalPaymentDate": "string",
    "paymentsRemaining": 1,
    "interval": "string",
    "lastWeekDay": "FRI",
    "nonBusinessDayTreatment": "AFTER"
  },
  "eventBased": {
    "description": "string"
  }
}
```

*Object containing the detail of the schedule for the payment.*

<h3 id="cdr-banking-api-modified-for-dp306-_bankingscheduledpaymentrecurrence_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|nextPaymentDate|[DateString](#common-field-types)|optional||The date of the next payment under the recurrence schedule.|
|recurrenceUType|[Enum](#common-field-types)|mandatory||The type of recurrence used to define the schedule.|
|onceOff|[BankingScheduledPaymentRecurrenceOnceOff](#schemacdr-banking-api-modified-for-dp306-bankingscheduledpaymentrecurrenceonceoff)|conditional||Indicates that the payment is a once off payment on a specific future date. Mandatory if _recurrenceUType_ is set to `onceOff`.|
|intervalSchedule|[BankingScheduledPaymentRecurrenceIntervalSchedule](#schemacdr-banking-api-modified-for-dp306-bankingscheduledpaymentrecurrenceintervalschedule)|conditional||Indicates that the schedule of payments is defined by a series of intervals. Mandatory if _recurrenceUType_ is set to `intervalSchedule`.|
|lastWeekDay|[BankingScheduledPaymentRecurrenceLastWeekday](#schemacdr-banking-api-modified-for-dp306-bankingscheduledpaymentrecurrencelastweekday)|conditional||Indicates that the schedule of payments is defined according to the last occurrence of a specific weekday in an interval. Mandatory if _recurrenceUType_ is set to `lastWeekDay`.|
|eventBased|[BankingScheduledPaymentRecurrenceEventBased](#schemacdr-banking-api-modified-for-dp306-bankingscheduledpaymentrecurrenceeventbased)|conditional||Indicates that the schedule of payments is defined according to an external event that cannot be predetermined. Mandatory if _recurrenceUType_ is set to `eventBased`.|

<h4 id="cdr-banking-api-modified-for-dp306-_bankingscheduledpaymentrecurrence_enumerated-values-main">Enumerated Values</h4>

|Property|Value|
|---|---|
|recurrenceUType|eventBased|
|recurrenceUType|intervalSchedule|
|recurrenceUType|lastWeekDay|
|recurrenceUType|onceOff|

<h3 class="schema-toc" id="cdr-banking-api-modified-for-dp306-_schemas_tocSbankingscheduledpaymentrecurrenceonceoff">BankingScheduledPaymentRecurrenceOnceOff</h3>
<p id="tocSbankingscheduledpaymentrecurrenceonceoff" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api-modified-for-dp306-_schema-base_bankingscheduledpaymentrecurrenceonceoff"></a>
  <a class="schema-anchor" id="schemacdr-banking-api-modified-for-dp306-bankingscheduledpaymentrecurrenceonceoff"></a>
</p>

```json
{
  "paymentDate": "string"
}
```

*Indicates that the payment is a once off payment on a specific future date. Mandatory if _recurrenceUType_ is set to `onceOff`.*

<h3 id="cdr-banking-api-modified-for-dp306-_bankingscheduledpaymentrecurrenceonceoff_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|paymentDate|[DateString](#common-field-types)|mandatory||The scheduled date for the once off payment.|

<h3 class="schema-toc" id="cdr-banking-api-modified-for-dp306-_schemas_tocSbankingscheduledpaymentrecurrenceintervalschedule">BankingScheduledPaymentRecurrenceIntervalSchedule</h3>
<p id="tocSbankingscheduledpaymentrecurrenceintervalschedule" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api-modified-for-dp306-_schema-base_bankingscheduledpaymentrecurrenceintervalschedule"></a>
  <a class="schema-anchor" id="schemacdr-banking-api-modified-for-dp306-bankingscheduledpaymentrecurrenceintervalschedule"></a>
</p>

```json
{
  "finalPaymentDate": "string",
  "paymentsRemaining": 1,
  "nonBusinessDayTreatment": "AFTER",
  "intervals": [
    {
      "interval": "string",
      "dayInInterval": "string"
    }
  ]
}
```

*Indicates that the schedule of payments is defined by a series of intervals. Mandatory if _recurrenceUType_ is set to `intervalSchedule`.*

<h3 id="cdr-banking-api-modified-for-dp306-_bankingscheduledpaymentrecurrenceintervalschedule_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|finalPaymentDate|[DateString](#common-field-types)|optional||The limit date after which no more payments should be made using this schedule. If both _finalPaymentDate_ and _paymentsRemaining_ are present then payments will stop according to the most constraining value. If neither field is present the payments will continue indefinitely.|
|paymentsRemaining|[PositiveInteger](#common-field-types)|optional||Indicates the number of payments remaining in the schedule. If both _finalPaymentDate_ and _paymentsRemaining_ are present then payments will stop according to the most constraining value, If neither field is present the payments will continue indefinitely.|
|nonBusinessDayTreatment|[Enum](#common-field-types)|optional|`ON`|Enumerated field giving the treatment where a scheduled payment date is not a business day. If absent assumed to be `ON`.<ul><li>`AFTER` - If a scheduled payment date is a non-business day the payment will be made on the first business day after the scheduled payment date.<li>`BEFORE` - If a scheduled payment date is a non-business day the payment will be made on the first business day before the scheduled payment date.<li>`ON` - If a scheduled payment date is a non-business day the payment will be made on that day regardless.<li>`ONLY` - Payments only occur on business days. If a scheduled payment date is a non-business day the payment will be ignored.</ul>|
|intervals|[[BankingScheduledPaymentInterval](#schemacdr-banking-api-modified-for-dp306-bankingscheduledpaymentinterval)]|mandatory||An array of interval objects defining the payment schedule. Each entry in the array is additive, in that it adds payments to the overall payment schedule. If multiple intervals result in a payment on the same day then only one payment will be made. Must have at least one entry.|

<h4 id="cdr-banking-api-modified-for-dp306-_bankingscheduledpaymentrecurrenceintervalschedule_enumerated-values-main">Enumerated Values</h4>

|Property|Value|
|---|---|
|nonBusinessDayTreatment|AFTER|
|nonBusinessDayTreatment|BEFORE|
|nonBusinessDayTreatment|ON|
|nonBusinessDayTreatment|ONLY|

<h3 class="schema-toc" id="cdr-banking-api-modified-for-dp306-_schemas_tocSbankingscheduledpaymentinterval">BankingScheduledPaymentInterval</h3>
<p id="tocSbankingscheduledpaymentinterval" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api-modified-for-dp306-_schema-base_bankingscheduledpaymentinterval"></a>
  <a class="schema-anchor" id="schemacdr-banking-api-modified-for-dp306-bankingscheduledpaymentinterval"></a>
</p>

```json
{
  "interval": "string",
  "dayInInterval": "string"
}
```

<h3 id="cdr-banking-api-modified-for-dp306-_bankingscheduledpaymentinterval_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|interval|[ExternalRef](#common-field-types)|mandatory||An interval for the payment. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax) with components less than a day in length ignored. This duration defines the period between payments starting with _nextPaymentDate_.|
|dayInInterval|[ExternalRef](#common-field-types)|optional||Uses an interval to define the ordinal day within the interval defined by the interval field on which the payment occurs. If the resulting duration is 0 days in length or larger than the number of days in the interval then the payment will occur on the last day of the interval. A duration of 1 day indicates the first day of the interval. If absent the assumed value is `P1D`. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax) with components less than a day in length ignored. The first day of a week is considered to be Monday.|

<h3 class="schema-toc" id="cdr-banking-api-modified-for-dp306-_schemas_tocSbankingscheduledpaymentrecurrencelastweekday">BankingScheduledPaymentRecurrenceLastWeekday</h3>
<p id="tocSbankingscheduledpaymentrecurrencelastweekday" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api-modified-for-dp306-_schema-base_bankingscheduledpaymentrecurrencelastweekday"></a>
  <a class="schema-anchor" id="schemacdr-banking-api-modified-for-dp306-bankingscheduledpaymentrecurrencelastweekday"></a>
</p>

```json
{
  "finalPaymentDate": "string",
  "paymentsRemaining": 1,
  "interval": "string",
  "lastWeekDay": "FRI",
  "nonBusinessDayTreatment": "AFTER"
}
```

*Indicates that the schedule of payments is defined according to the last occurrence of a specific weekday in an interval. Mandatory if _recurrenceUType_ is set to `lastWeekDay`.*

<h3 id="cdr-banking-api-modified-for-dp306-_bankingscheduledpaymentrecurrencelastweekday_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|finalPaymentDate|[DateString](#common-field-types)|optional||The limit date after which no more payments should be made using this schedule. If both _finalPaymentDate_ and _paymentsRemaining_ are present then payments will stop according to the most constraining value. If neither field is present the payments will continue indefinitely.|
|paymentsRemaining|[PositiveInteger](#common-field-types)|optional||Indicates the number of payments remaining in the schedule. If both _finalPaymentDate_ and _paymentsRemaining_ are present then payments will stop according to the most constraining value. If neither field is present the payments will continue indefinitely.|
|interval|[ExternalRef](#common-field-types)|mandatory||The interval for the payment. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax) with components less than a day in length ignored. This duration defines the period between payments starting with _nextPaymentDate_.|
|lastWeekDay|[Enum](#common-field-types)|mandatory||The weekDay specified. The payment will occur on the last occurrence of this weekday in the interval.|
|nonBusinessDayTreatment|[Enum](#common-field-types)|optional|`ON`|Enumerated field giving the treatment where a scheduled payment date is not a business day. If absent assumed to be `ON`.<ul><li>`AFTER` - If a scheduled payment date is a non-business day the payment will be made on the first business day after the scheduled payment date.<li>`BEFORE` - If a scheduled payment date is a non-business day the payment will be made on the first business day before the scheduled payment date.<li>`ON` - If a scheduled payment date is a non-business day the payment will be made on that day regardless.<li>`ONLY` - Payments only occur on business days. If a scheduled payment date is a non-business day the payment will be ignored.</ul>|

<h4 id="cdr-banking-api-modified-for-dp306-_bankingscheduledpaymentrecurrencelastweekday_enumerated-values-main">Enumerated Values</h4>

|Property|Value|
|---|---|
|lastWeekDay|FRI|
|lastWeekDay|MON|
|lastWeekDay|SAT|
|lastWeekDay|SUN|
|lastWeekDay|THU|
|lastWeekDay|TUE|
|lastWeekDay|WED|
|nonBusinessDayTreatment|AFTER|
|nonBusinessDayTreatment|BEFORE|
|nonBusinessDayTreatment|ON|
|nonBusinessDayTreatment|ONLY|

<h3 class="schema-toc" id="cdr-banking-api-modified-for-dp306-_schemas_tocSbankingscheduledpaymentrecurrenceeventbased">BankingScheduledPaymentRecurrenceEventBased</h3>
<p id="tocSbankingscheduledpaymentrecurrenceeventbased" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api-modified-for-dp306-_schema-base_bankingscheduledpaymentrecurrenceeventbased"></a>
  <a class="schema-anchor" id="schemacdr-banking-api-modified-for-dp306-bankingscheduledpaymentrecurrenceeventbased"></a>
</p>

```json
{
  "description": "string"
}
```

*Indicates that the schedule of payments is defined according to an external event that cannot be predetermined. Mandatory if _recurrenceUType_ is set to `eventBased`.*

<h3 id="cdr-banking-api-modified-for-dp306-_bankingscheduledpaymentrecurrenceeventbased_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|description|string|mandatory||Description of the event and conditions that will result in the payment. Expected to be formatted for display to a customer.|

<h3 class="schema-toc" id="cdr-banking-api-modified-for-dp306-_schemas_tocScommonphysicaladdress">CommonPhysicalAddress</h3>
<p id="tocScommonphysicaladdress" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api-modified-for-dp306-_schema-base_commonphysicaladdress"></a>
  <a class="schema-anchor" id="schemacdr-banking-api-modified-for-dp306-commonphysicaladdress"></a>
</p>

```json
{
  "addressUType": "paf",
  "simple": {
    "mailingName": "string",
    "addressLine1": "string",
    "addressLine2": "string",
    "addressLine3": "string",
    "postcode": "string",
    "city": "string",
    "state": "string",
    "country": "AUS"
  },
  "paf": {
    "dpid": "string",
    "thoroughfareNumber1": 0,
    "thoroughfareNumber1Suffix": "string",
    "thoroughfareNumber2": 0,
    "thoroughfareNumber2Suffix": "string",
    "flatUnitType": "string",
    "flatUnitNumber": "string",
    "floorLevelType": "string",
    "floorLevelNumber": "string",
    "lotNumber": "string",
    "buildingName1": "string",
    "buildingName2": "string",
    "streetName": "string",
    "streetType": "string",
    "streetSuffix": "string",
    "postalDeliveryType": "string",
    "postalDeliveryNumber": 0,
    "postalDeliveryNumberPrefix": "string",
    "postalDeliveryNumberSuffix": "string",
    "localityName": "string",
    "postcode": "string",
    "state": "string"
  }
}
```

<h3 id="cdr-banking-api-modified-for-dp306-_commonphysicaladdress_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|addressUType|[Enum](#common-field-types)|mandatory||The type of address object present.|
|simple|[CommonSimpleAddress](#schemacdr-banking-api-modified-for-dp306-commonsimpleaddress)|conditional||Required if _addressUType_ is set to `simple`.|
|paf|[CommonPAFAddress](#schemacdr-banking-api-modified-for-dp306-commonpafaddress)|conditional||Australian address formatted according to the file format defined by the [PAF file format](https://auspost.com.au/content/dam/auspost_corp/media/documents/australia-post-data-guide.pdf). Required if _addressUType_ is set to `paf`.|

<h4 id="cdr-banking-api-modified-for-dp306-_commonphysicaladdress_enumerated-values-main">Enumerated Values</h4>

|Property|Value|
|---|---|
|addressUType|paf|
|addressUType|simple|

<h3 class="schema-toc" id="cdr-banking-api-modified-for-dp306-_schemas_tocScommonsimpleaddress">CommonSimpleAddress</h3>
<p id="tocScommonsimpleaddress" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api-modified-for-dp306-_schema-base_commonsimpleaddress"></a>
  <a class="schema-anchor" id="schemacdr-banking-api-modified-for-dp306-commonsimpleaddress"></a>
</p>

```json
{
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

*Required if _addressUType_ is set to `simple`.*

<h3 id="cdr-banking-api-modified-for-dp306-_commonsimpleaddress_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|mailingName|string|optional||Name of the individual or business formatted for inclusion in an address used for physical mail.|
|addressLine1|string|mandatory||First line of the standard address object.|
|addressLine2|string|optional||Second line of the standard address object.|
|addressLine3|string|optional||Third line of the standard address object.|
|postcode|string|conditional||Mandatory for Australian addresses.|
|city|string|mandatory||Name of the city or locality.|
|state|string|mandatory||Free text if the country is not Australia. If country is Australia then must be one of the values defined by the [State Type Abbreviation](https://auspost.com.au/content/dam/auspost_corp/media/documents/australia-post-data-guide.pdf) in the PAF file format. `NSW`, `QLD`, `VIC`, `NT`, `WA`, `SA`, `TAS`, `ACT`, `AAT`.|
|country|[ExternalRef](#common-field-types)|optional|`AUS`|A valid [ISO 3166 Alpha-3](https://www.iso.org/iso-3166-country-codes.html) country code. Australia (`AUS`) is assumed if country is not present.|

<h3 class="schema-toc" id="cdr-banking-api-modified-for-dp306-_schemas_tocScommonpafaddress">CommonPAFAddress</h3>
<p id="tocScommonpafaddress" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api-modified-for-dp306-_schema-base_commonpafaddress"></a>
  <a class="schema-anchor" id="schemacdr-banking-api-modified-for-dp306-commonpafaddress"></a>
</p>

```json
{
  "dpid": "string",
  "thoroughfareNumber1": 0,
  "thoroughfareNumber1Suffix": "string",
  "thoroughfareNumber2": 0,
  "thoroughfareNumber2Suffix": "string",
  "flatUnitType": "string",
  "flatUnitNumber": "string",
  "floorLevelType": "string",
  "floorLevelNumber": "string",
  "lotNumber": "string",
  "buildingName1": "string",
  "buildingName2": "string",
  "streetName": "string",
  "streetType": "string",
  "streetSuffix": "string",
  "postalDeliveryType": "string",
  "postalDeliveryNumber": 0,
  "postalDeliveryNumberPrefix": "string",
  "postalDeliveryNumberSuffix": "string",
  "localityName": "string",
  "postcode": "string",
  "state": "string"
}
```

*Australian address formatted according to the file format defined by the [PAF file format](https://auspost.com.au/content/dam/auspost_corp/media/documents/australia-post-data-guide.pdf). Required if _addressUType_ is set to `paf`.*

<h3 id="cdr-banking-api-modified-for-dp306-_commonpafaddress_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|dpid|string|optional||Unique identifier for an address as defined by Australia Post. Also known as Delivery Point Identifier.|
|thoroughfareNumber1|[PositiveInteger](#common-field-types)|optional||Thoroughfare number for a property (first number in a property ranged address).|
|thoroughfareNumber1Suffix|string|optional||Suffix for the thoroughfare number. Only relevant if _thoroughfareNumber1_ is populated.|
|thoroughfareNumber2|[PositiveInteger](#common-field-types)|optional||Second thoroughfare number (only used if the property has a ranged address, e.g., 23-25).|
|thoroughfareNumber2Suffix|string|optional||Suffix for the second thoroughfare number. Only relevant if _thoroughfareNumber2_ is populated.|
|flatUnitType|string|optional||Type of flat or unit for the address.|
|flatUnitNumber|string|optional||Unit number (including suffix, if applicable).|
|floorLevelType|string|optional||Type of floor or level for the address.|
|floorLevelNumber|string|optional||Floor or level number (including alpha characters).|
|lotNumber|string|optional||Allotment number for the address.|
|buildingName1|string|optional||Building/Property name 1.|
|buildingName2|string|optional||Building/Property name 2.|
|streetName|string|optional||The name of the street.|
|streetType|string|optional||The street type. Valid enumeration defined by Australia Post PAF code file.|
|streetSuffix|string|optional||The street type suffix. Valid enumeration defined by Australia Post PAF code file.|
|postalDeliveryType|string|optional||Postal delivery type. (e.g., PO BOX). Valid enumeration defined by Australia Post PAF code file.|
|postalDeliveryNumber|[PositiveInteger](#common-field-types)|optional||Postal delivery number if the address is a postal delivery type.|
|postalDeliveryNumberPrefix|string|optional||Postal delivery number prefix related to the postal delivery number.|
|postalDeliveryNumberSuffix|string|optional||Postal delivery number suffix related to the postal delivery number.|
|localityName|string|mandatory||Full name of locality.|
|postcode|string|mandatory||Postcode for the locality.|
|state|string|mandatory||State in which the address belongs. Valid enumeration defined by Australia Post PAF code file [State Type Abbreviation](https://auspost.com.au/content/dam/auspost_corp/media/documents/australia-post-data-guide.pdf). `NSW`, `QLD`, `VIC`, `NT`, `WA`, `SA`, `TAS`, `ACT`, `AAT`.|

<h3 class="schema-toc" id="cdr-banking-api-modified-for-dp306-_schemas_tocSlinks">Links</h3>
<p id="tocSlinks" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api-modified-for-dp306-_schema-base_links"></a>
  <a class="schema-anchor" id="schemacdr-banking-api-modified-for-dp306-links"></a>
</p>

```json
{
  "self": "string"
}
```

<h3 id="cdr-banking-api-modified-for-dp306-_links_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|self|[URIString](#common-field-types)|mandatory||Fully qualified link that generated the current response document.|

<h3 class="schema-toc" id="cdr-banking-api-modified-for-dp306-_schemas_tocSmeta">Meta</h3>
<p id="tocSmeta" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api-modified-for-dp306-_schema-base_meta"></a>
  <a class="schema-anchor" id="schemacdr-banking-api-modified-for-dp306-meta"></a>
</p>

```json
{}
```

<h3 id="cdr-banking-api-modified-for-dp306-_meta_properties">Properties</h3>

*None*

<h3 class="schema-toc" id="cdr-banking-api-modified-for-dp306-_schemas_tocSlinkspaginated">LinksPaginated</h3>
<p id="tocSlinkspaginated" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api-modified-for-dp306-_schema-base_linkspaginated"></a>
  <a class="schema-anchor" id="schemacdr-banking-api-modified-for-dp306-linkspaginated"></a>
</p>

```json
{
  "self": "string",
  "first": "string",
  "prev": "string",
  "next": "string",
  "last": "string"
}
```

<h3 id="cdr-banking-api-modified-for-dp306-_linkspaginated_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|self|[URIString](#common-field-types)|mandatory||Fully qualified link that generated the current response document.|
|first|[URIString](#common-field-types)|conditional||URI to the first page of this set. Mandatory if this response is not the first page.|
|prev|[URIString](#common-field-types)|conditional||URI to the previous page of this set. Mandatory if this response is not the first page.|
|next|[URIString](#common-field-types)|conditional||URI to the next page of this set. Mandatory if this response is not the last page.|
|last|[URIString](#common-field-types)|conditional||URI to the last page of this set. Mandatory if this response is not the last page.|

<h3 class="schema-toc" id="cdr-banking-api-modified-for-dp306-_schemas_tocSmetapaginated">MetaPaginated</h3>
<p id="tocSmetapaginated" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api-modified-for-dp306-_schema-base_metapaginated"></a>
  <a class="schema-anchor" id="schemacdr-banking-api-modified-for-dp306-metapaginated"></a>
</p>

```json
{
  "totalRecords": 0,
  "totalPages": 0
}
```

<h3 id="cdr-banking-api-modified-for-dp306-_metapaginated_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|totalRecords|[NaturalNumber](#common-field-types)|mandatory||The total number of records in the full set. See [pagination](#pagination).|
|totalPages|[NaturalNumber](#common-field-types)|mandatory||The total number of pages in the full set. See [pagination](#pagination).|

<h3 class="schema-toc" id="cdr-banking-api-modified-for-dp306-_schemas_tocSmetapaginatedtransaction">MetaPaginatedTransaction</h3>
<p id="tocSmetapaginatedtransaction" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api-modified-for-dp306-_schema-base_metapaginatedtransaction"></a>
  <a class="schema-anchor" id="schemacdr-banking-api-modified-for-dp306-metapaginatedtransaction"></a>
</p>

```json
{
  "totalRecords": 0,
  "totalPages": 0,
  "isQueryParamUnsupported": false
}
```

<h3 id="cdr-banking-api-modified-for-dp306-_metapaginatedtransaction_properties">Properties</h3>

*allOf*

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|*anonymous*|[MetaPaginated](#schemacdr-banking-api-modified-for-dp306-metapaginated)|mandatory||none|

*and*

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|*anonymous*|object|mandatory||none|
|» isQueryParamUnsupported|[Boolean](#common-field-types)|optional|`false`|`true` if _text_ query parameter is not supported.|

<h3 class="schema-toc" id="cdr-banking-api-modified-for-dp306-_schemas_tocSresponseerrorlistv2">ResponseErrorListV2</h3>
<p id="tocSresponseerrorlistv2" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api-modified-for-dp306-_schema-base_responseerrorlist"></a>
  <a class="schema-anchor" id="schemacdr-banking-api-modified-for-dp306-responseerrorlistv2"></a>
</p>

```json
{
  "errors": [
    {
      "code": "string",
      "title": "string",
      "detail": "string",
      "meta": {
        "urn": "string"
      }
    }
  ]
}
```

<h3 id="cdr-banking-api-modified-for-dp306-_responseerrorlistv2_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|errors|[[ErrorV2](#schemacdr-banking-api-modified-for-dp306-errorv2)]|mandatory||List of errors.|

<h3 class="schema-toc" id="cdr-banking-api-modified-for-dp306-_schemas_tocSerrorv2">ErrorV2</h3>
<p id="tocSerrorv2" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api-modified-for-dp306-_schema-base_error"></a>
  <a class="schema-anchor" id="schemacdr-banking-api-modified-for-dp306-errorv2"></a>
</p>

```json
{
  "code": "string",
  "title": "string",
  "detail": "string",
  "meta": {
    "urn": "string"
  }
}
```

<h3 id="cdr-banking-api-modified-for-dp306-_errorv2_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|code|string|mandatory||The code of the error encountered. Where the error is specific to the respondent, an application-specific error code, expressed as a string value. If the error is application-specific, the URN code that the specific error extends must be provided in the _meta_ object. Otherwise, the value is the error code URN.|
|title|string|mandatory||A short, human-readable summary of the problem that **MUST NOT** change from occurrence to occurrence of the problem represented by the error code.|
|detail|string|mandatory||A human-readable explanation specific to this occurrence of the problem.|
|meta|object|conditional||Additional data for customised error codes.|
|» urn|string|conditional||The CDR error code URN which the application-specific error code extends. Mandatory if the error _code_ is an application-specific error rather than a standardised error code.|

<h3 class="schema-toc" id="cdr-banking-api-modified-for-dp306-_schemas_tocSbankingproductcategoryv2">BankingProductCategoryV2</h3>
<p id="tocSbankingproductcategoryv2" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api-modified-for-dp306-_schema-base_bankingproductcategory"></a>
  <a class="schema-anchor" id="schemacdr-banking-api-modified-for-dp306-bankingproductcategoryv2"></a>
</p>

```json
"BUSINESS_LOANS"
```

*The category to which a product or account belongs. See [here](#product-categories) for more details.*

<h3 id="cdr-banking-api-modified-for-dp306-_bankingproductcategoryv2_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|*anonymous*|[Enum](#common-field-types)|mandatory||The category to which a product or account belongs. See [here](#product-categories) for more details.|

<h4 id="cdr-banking-api-modified-for-dp306-_bankingproductcategoryv2_enumerated-values-main">Enumerated Values</h4>

|Property|Value|
|---|---|
|*anonymous*|BUSINESS_LOANS|
|*anonymous*|BUY_NOW_PAY_LATER|
|*anonymous*|CRED_AND_CHRG_CARDS|
|*anonymous*|LEASES|
|*anonymous*|MARGIN_LOANS|
|*anonymous*|OVERDRAFTS|
|*anonymous*|PERS_LOANS|
|*anonymous*|REGULATED_TRUST_ACCOUNTS|
|*anonymous*|RESIDENTIAL_MORTGAGES|
|*anonymous*|TERM_DEPOSITS|
|*anonymous*|TRADE_FINANCE|
|*anonymous*|TRANS_AND_SAVINGS_ACCOUNTS|
|*anonymous*|TRAVEL_CARDS|

<h3 class="schema-toc" id="cdr-banking-api-modified-for-dp306-_schemas_tocSbankingproductid">BankingProductId</h3>
<p id="tocSbankingproductid" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api-modified-for-dp306-_schema-base_bankingproductid"></a>
  <a class="schema-anchor" id="schemacdr-banking-api-modified-for-dp306-bankingproductid"></a>
</p>

```json
"string"
```

*A data holder-specific unique identifier for a Banking product. This identifier must be unique to a product but does not otherwise need to adhere to ID permanence guidelines.*

<h3 id="cdr-banking-api-modified-for-dp306-_bankingproductid_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|*anonymous*|[ASCIIString](#common-field-types)|mandatory||A data holder-specific unique identifier for a Banking product. This identifier must be unique to a product but does not otherwise need to adhere to ID permanence guidelines.|

<h3 class="schema-toc" id="cdr-banking-api-modified-for-dp306-_schemas_tocSbankingaccountid">BankingAccountId</h3>
<p id="tocSbankingaccountid" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api-modified-for-dp306-_schema-base_bankingaccountid"></a>
  <a class="schema-anchor" id="schemacdr-banking-api-modified-for-dp306-bankingaccountid"></a>
</p>

```json
"string"
```

*A unique identifier for a Banking account, generated according to [CDR ID Permanence](#id-permanence) requirements.*

<h3 id="cdr-banking-api-modified-for-dp306-_bankingaccountid_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|*anonymous*|[ASCIIString](#common-field-types)|mandatory||A unique identifier for a Banking account, generated according to [CDR ID Permanence](#id-permanence) requirements.|

<h3 class="schema-toc" id="cdr-banking-api-modified-for-dp306-_schemas_tocSbankingtransactionid">BankingTransactionId</h3>
<p id="tocSbankingtransactionid" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api-modified-for-dp306-_schema-base_bankingtransactionid"></a>
  <a class="schema-anchor" id="schemacdr-banking-api-modified-for-dp306-bankingtransactionid"></a>
</p>

```json
"string"
```

*A unique identifier for a Banking transaction, generated according to [CDR ID Permanence](#id-permanence) requirements.*

<h3 id="cdr-banking-api-modified-for-dp306-_bankingtransactionid_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|*anonymous*|[ASCIIString](#common-field-types)|mandatory||A unique identifier for a Banking transaction, generated according to [CDR ID Permanence](#id-permanence) requirements.|

<h3 class="schema-toc" id="cdr-banking-api-modified-for-dp306-_schemas_tocSbankingscheduledpaymentid">BankingScheduledPaymentId</h3>
<p id="tocSbankingscheduledpaymentid" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api-modified-for-dp306-_schema-base_bankingscheduledpaymentid"></a>
  <a class="schema-anchor" id="schemacdr-banking-api-modified-for-dp306-bankingscheduledpaymentid"></a>
</p>

```json
"string"
```

*A unique identifier for a Banking scheduled payment, generated according to [CDR ID Permanence](#id-permanence) requirements.*

<h3 id="cdr-banking-api-modified-for-dp306-_bankingscheduledpaymentid_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|*anonymous*|[ASCIIString](#common-field-types)|mandatory||A unique identifier for a Banking scheduled payment, generated according to [CDR ID Permanence](#id-permanence) requirements.|

<h3 class="schema-toc" id="cdr-banking-api-modified-for-dp306-_schemas_tocSbankingpayeeid">BankingPayeeId</h3>
<p id="tocSbankingpayeeid" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api-modified-for-dp306-_schema-base_bankingpayeeid"></a>
  <a class="schema-anchor" id="schemacdr-banking-api-modified-for-dp306-bankingpayeeid"></a>
</p>

```json
"string"
```

*A unique identifier for a Banking payee, generated according to [CDR ID Permanence](#id-permanence) requirements.*

<h3 id="cdr-banking-api-modified-for-dp306-_bankingpayeeid_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|*anonymous*|[ASCIIString](#common-field-types)|mandatory||A unique identifier for a Banking payee, generated according to [CDR ID Permanence](#id-permanence) requirements.|

