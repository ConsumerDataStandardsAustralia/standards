---
title: Get Product Detail v2

#language_tabs: # must be one of https://git.io/vQNgJ
#  - shell
#  - javascript

toc_footers:
  - <a href='../../index.html'>Consumer Data Standards</a>

search: false
---

# Get Product Detail V2
This page documents the obsolete version 2 of the Get Product Detail end point.


## Get Product Detail

<a id="opIdgetProductDetail"></a>

> Code samples

```http
GET https://data.holder.com.au/cds-au/v1/banking/products/{productId} HTTP/1.1
Host: data.holder.com.au
Accept: application/json
x-v: string
x-min-v: string

```

```javascript
var headers = {
  'Accept':'application/json',
  'x-v':'string',
  'x-min-v':'string'

};

$.ajax({
  url: 'https://data.holder.com.au/cds-au/v1/banking/products/{productId}',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`GET /banking/products/{productId}`

Obtain detailed information on a single product offered openly to the market.

NOTE: This version must be implemented by **July 2020**

Obsolete versions: [v1](includes/obsolete/get-product-detail-v1.html)

###Endpoint Version
|   |  |
|---|--|
|Version|**2**

<h3 id="get-product-detail-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|productId|path|[ASCIIString](#common-field-types)|mandatory|ID of the specific product requested|
|x-v|header|string|mandatory|Version of the API end point requested by the client. Must be set to a positive integer. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If the value of [x-min-v](#request-headers) is equal to or higher than the value of [x-v](#request-headers) then the [x-min-v](#request-headers) header should be treated as absent. If all versions requested are not supported then the data holder should respond with a 406 Not Acceptable. See [HTTP Headers](#request-headers)|
|x-min-v|header|string|optional|Minimum version of the API end point requested by the client. Must be set to a positive integer if provided. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If all versions requested are not supported then the data holder should respond with a 406 Not Acceptable.|

> Example responses

> 200 Response

```json
{
  "data": {
    "productId": "string",
    "effectiveFrom": "string",
    "effectiveTo": "string",
    "lastUpdated": "string",
    "productCategory": "TRANS_AND_SAVINGS_ACCOUNTS",
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
      "bundleUri": "string"
    },
    "cardArt": [
      {
        "title": "string",
        "imageUri": "string"
      }
    ],
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
        "featureType": "CARD_ACCESS",
        "additionalValue": "string",
        "additionalInfo": "string",
        "additionalInfoUri": "string"
      }
    ],
    "constraints": [
      {
        "constraintType": "MIN_BALANCE",
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
        "feeType": "PERIODIC",
        "amount": "string",
        "balanceRate": "string",
        "transactionRate": "string",
        "accruedRate": "string",
        "accrualFrequency": "string",
        "currency": "string",
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
        "depositRateType": "FIXED",
        "rate": "string",
        "calculationFrequency": "string",
        "applicationFrequency": "string",
        "tiers": [
          {
            "name": "string",
            "unitOfMeasure": "DOLLAR",
            "minimumValue": 0,
            "maximumValue": 0,
            "rateApplicationMethod": "WHOLE_BALANCE",
            "applicabilityConditions": {
              "additionalInfo": "string",
              "additionalInfoUri": "string"
            },
            "subTier": {
              "name": "string",
              "unitOfMeasure": "DOLLAR",
              "minimumValue": 0,
              "maximumValue": 0,
              "rateApplicationMethod": "WHOLE_BALANCE",
              "applicabilityConditions": {
                "additionalInfo": "string",
                "additionalInfoUri": "string"
              }
            }
          }
        ],
        "additionalValue": "string",
        "additionalInfo": "string",
        "additionalInfoUri": "string"
      }
    ],
    "lendingRates": [
      {
        "lendingRateType": "FIXED",
        "rate": "string",
        "comparisonRate": "string",
        "calculationFrequency": "string",
        "applicationFrequency": "string",
        "interestPaymentDue": "IN_ARREARS",
        "tiers": [
          {
            "name": "string",
            "unitOfMeasure": "DOLLAR",
            "minimumValue": 0,
            "maximumValue": 0,
            "rateApplicationMethod": "WHOLE_BALANCE",
            "applicabilityConditions": {
              "additionalInfo": "string",
              "additionalInfoUri": "string"
            },
            "subTier": {
              "name": "string",
              "unitOfMeasure": "DOLLAR",
              "minimumValue": 0,
              "maximumValue": 0,
              "rateApplicationMethod": "WHOLE_BALANCE",
              "applicabilityConditions": {
                "additionalInfo": "string",
                "additionalInfoUri": "string"
              }
            }
          }
        ],
        "additionalValue": "string",
        "additionalInfo": "string",
        "additionalInfoUri": "string"
      }
    ]
  },
  "links": {
    "self": "string"
  },
  "meta": {}
}
```

<h3 id="get-product-detail-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[ResponseBankingProductById](#schemaresponsebankingproductbyid)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-v|string||The [version](#response-headers) of the API end point that the data holder has responded with.|

<aside class="success">
This operation does not require authentication
</aside>
