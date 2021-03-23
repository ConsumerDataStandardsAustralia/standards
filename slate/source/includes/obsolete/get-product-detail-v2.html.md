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

This version is to be ceased to be called by data recipients by **May 31st 2021** and can be decommissioned by data holders as of that date.

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
|productId|path|[ASCIIString](../../index.html#common-field-types)|mandatory|ID of the specific product requested|
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

...

<h2 id="tocSresponsebankingproductbyid">ResponseBankingProductById</h2>

<a id="schemaresponsebankingproductbyid"></a>

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

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[BankingProductDetail](#schemabankingproductdetail)|mandatory|none|none|
|links|[Links](#schemalinks)|mandatory|none|none|
|meta|[Meta](#schemameta)|optional|none|none|

<h2 id="tocSbankingproductdetail">BankingProductDetail</h2>

<a id="schemabankingproductdetail"></a>

```json
{
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
}

```

### Properties

*allOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[BankingProductV2](#schemabankingproductv2)|mandatory|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|mandatory|none|none|
|» bundles|[[BankingProductBundle](#schemabankingproductbundle)]|optional|none|An array of bundles that this product participates in.  Each bundle is described by free form information but also by a list of product IDs of the other products that are included in the bundle.  It is assumed that the current product is included in the bundle also|
|» features|[[BankingProductFeature](#schemabankingproductfeature)]|optional|none|Array of features available for the product|
|» constraints|[[BankingProductConstraint](#schemabankingproductconstraint)]|optional|none|Constraints on the application for or operation of the product such as minimum balances or limit thresholds|
|» eligibility|[[BankingProductEligibility](#schemabankingproducteligibility)]|optional|none|Eligibility criteria for the product|
|» fees|[[BankingProductFee](#schemabankingproductfee)]|optional|none|Fees applicable for the product|
|» depositRates|[[BankingProductDepositRate](#schemabankingproductdepositrate)]|optional|none|Interest rates available for deposits|
|» lendingRates|[[BankingProductLendingRate](#schemabankingproductlendingrate)]|optional|none|Interest rates charged against lending balances|

<h2 id="tocSbankingproductbundle">BankingProductBundle</h2>

<a id="schemabankingproductbundle"></a>

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

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|mandatory|none|Name of the bundle|
|description|string|mandatory|none|Description of the bundle|
|additionalInfo|string|optional|none|Display text providing more information on the bundle|
|additionalInfoUri|[URIString](../../index.html#common-field-types)|optional|none|Link to a web page with more information on the bundle criteria and benefits|
|productIds|[string]|optional|none|Array of product IDs for products included in the bundle that are available via the product end points.  Note that this array is not intended to represent a comprehensive model of the products included in the bundle and some products available for the bundle may not be available via the product reference end points|

<h2 id="tocSbankingproductfeature">BankingProductFeature</h2>

<a id="schemabankingproductfeature"></a>

```json
{
  "featureType": "CARD_ACCESS",
  "additionalValue": "string",
  "additionalInfo": "string",
  "additionalInfoUri": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|featureType|string|mandatory|none|The type of feature described|
|additionalValue|string|conditional|none|Generic field containing additional information relevant to the [featureType](#tocSproductfeaturetypedoc) specified. Whether mandatory or not is dependent on the value of the [featureType.](#tocSproductfeaturetypedoc)|
|additionalInfo|string|conditional|none|Display text providing more information on the feature. Mandatory if the [feature type](#tocSproductfeaturetypedoc) is set to OTHER|
|additionalInfoUri|[URIString](../../index.html#common-field-types)|optional|none|Link to a web page with more information on this feature|

#### Enumerated Values

|Property|Value|
|---|---|
|featureType|CARD_ACCESS|
|featureType|ADDITIONAL_CARDS|
|featureType|UNLIMITED_TXNS|
|featureType|FREE_TXNS|
|featureType|FREE_TXNS_ALLOWANCE|
|featureType|LOYALTY_PROGRAM|
|featureType|OFFSET|
|featureType|OVERDRAFT|
|featureType|REDRAW|
|featureType|INSURANCE|
|featureType|BALANCE_TRANSFERS|
|featureType|INTEREST_FREE|
|featureType|INTEREST_FREE_TRANSFERS|
|featureType|DIGITAL_WALLET|
|featureType|DIGITAL_BANKING|
|featureType|NPP_PAYID|
|featureType|NPP_ENABLED|
|featureType|DONATE_INTEREST|
|featureType|BILL_PAYMENT|
|featureType|COMPLEMENTARY_PRODUCT_DISCOUNTS|
|featureType|BONUS_REWARDS|
|featureType|NOTIFICATIONS|
|featureType|OTHER|

<h2 id="tocSbankingproductconstraint">BankingProductConstraint</h2>

<a id="schemabankingproductconstraint"></a>

```json
{
  "constraintType": "MIN_BALANCE",
  "additionalValue": "string",
  "additionalInfo": "string",
  "additionalInfoUri": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|constraintType|string|mandatory|none|The type of constraint described.  See the next section for an overview of valid values and their meaning|
|additionalValue|string|conditional|none|Generic field containing additional information relevant to the [constraintType](#tocSproductconstrainttypedoc) specified.  Whether mandatory or not is dependent on the value of [constraintType](#tocSproductconstrainttypedoc)|
|additionalInfo|string|optional|none|Display text providing more information the constraint|
|additionalInfoUri|[URIString](../../index.html#common-field-types)|optional|none|Link to a web page with more information on the constraint|

#### Enumerated Values

|Property|Value|
|---|---|
|constraintType|MIN_BALANCE|
|constraintType|MAX_BALANCE|
|constraintType|OPENING_BALANCE|
|constraintType|MAX_LIMIT|
|constraintType|MIN_LIMIT|

<h2 id="tocSbankingproducteligibility">BankingProductEligibility</h2>

<a id="schemabankingproducteligibility"></a>

```json
{
  "eligibilityType": "BUSINESS",
  "additionalValue": "string",
  "additionalInfo": "string",
  "additionalInfoUri": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eligibilityType|string|mandatory|none|The type of eligibility criteria described.  See the next section for an overview of valid values and their meaning|
|additionalValue|string|conditional|none|Generic field containing additional information relevant to the [eligibilityType](#tocSproducteligibilitytypedoc) specified. Whether mandatory or not is dependent on the value of [eligibilityType](#tocSproducteligibilitytypedoc)|
|additionalInfo|string|conditional|none|Display text providing more information on the [eligibility](#tocSproducteligibilitytypedoc) criteria. Mandatory if the field is set to OTHER|
|additionalInfoUri|[URIString](../../index.html#common-field-types)|optional|none|Link to a web page with more information on this eligibility criteria|

#### Enumerated Values

|Property|Value|
|---|---|
|eligibilityType|BUSINESS|
|eligibilityType|PENSION_RECIPIENT|
|eligibilityType|MIN_AGE|
|eligibilityType|MAX_AGE|
|eligibilityType|MIN_INCOME|
|eligibilityType|MIN_TURNOVER|
|eligibilityType|STAFF|
|eligibilityType|STUDENT|
|eligibilityType|EMPLOYMENT_STATUS|
|eligibilityType|RESIDENCY_STATUS|
|eligibilityType|NATURAL_PERSON|
|eligibilityType|OTHER|

<h2 id="tocSbankingproductfee">BankingProductFee</h2>

<a id="schemabankingproductfee"></a>

```json
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

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|mandatory|none|Name of the fee|
|feeType|string|mandatory|none|The type of fee|
|amount|[AmountString](../../index.html#common-field-types)|conditional|none|The amount charged for the fee. One of amount, balanceRate, transactionRate and accruedRate is mandatory|
|balanceRate|[RateString](../../index.html#common-field-types)|conditional|none|A fee rate calculated based on a proportion of the balance. One of amount, balanceRate, transactionRate and accruedRate is mandatory|
|transactionRate|[RateString](../../index.html#common-field-types)|conditional|none|A fee rate calculated based on a proportion of a transaction. One of amount, balanceRate, transactionRate and accruedRate is mandatory|
|accruedRate|[RateString](../../index.html#common-field-types)|conditional|none|A fee rate calculated based on a proportion of the calculated interest accrued on the account. One of amount, balanceRate, transactionRate and accruedRate is mandatory|
|accrualFrequency|[ExternalRef](../../index.html#common-field-types)|optional|none|The indicative frequency with which the fee is calculated on the account. Only applies if balanceRate or accruedRate is also present. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)|
|currency|[CurrencyString](../../index.html#common-field-types)|optional|none|The currency the fee will be charged in. Assumes AUD if absent|
|additionalValue|string|conditional|none|Generic field containing additional information relevant to the [feeType](#tocSproductfeetypedoc) specified. Whether mandatory or not is dependent on the value of [feeType](#tocSproductfeetypedoc)|
|additionalInfo|string|optional|none|Display text providing more information on the fee|
|additionalInfoUri|[URIString](../../index.html#common-field-types)|optional|none|Link to a web page with more information on this fee|
|discounts|[[BankingProductDiscount](#schemabankingproductdiscount)]|optional|none|An optional list of discounts to this fee that may be available|

#### Enumerated Values

|Property|Value|
|---|---|
|feeType|PERIODIC|
|feeType|TRANSACTION|
|feeType|WITHDRAWAL|
|feeType|DEPOSIT|
|feeType|PAYMENT|
|feeType|PURCHASE|
|feeType|EVENT|
|feeType|UPFRONT|
|feeType|EXIT|

<h2 id="tocSbankingproductdiscount">BankingProductDiscount</h2>

<a id="schemabankingproductdiscount"></a>

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

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|mandatory|none|Description of the discount|
|discountType|string|mandatory|none|The type of discount. See the next section for an overview of valid values and their meaning|
|amount|[AmountString](../../index.html#common-field-types)|conditional|none|Value of the discount. When following properties include one of amount, balanceRate, transactionRate, accruedRate and feeRate is mandatory|
|balanceRate|[RateString](../../index.html#common-field-types)|conditional|none|A discount rate calculated based on a proportion of the balance. Note that the currency of the fee discount is expected to be the same as the currency of the fee itself. One of amount, balanceRate, transactionRate, accruedRate and feeRate is mandatory. Unless noted in additionalInfo, assumes the application and calculation frequency are the same as the corresponding fee|
|transactionRate|[RateString](../../index.html#common-field-types)|conditional|none|A discount rate calculated based on a proportion of a transaction. Note that the currency of the fee discount is expected to be the same as the currency of the fee itself. One of amount, balanceRate, transactionRate, accruedRate and feeRate is mandatory|
|accruedRate|[RateString](../../index.html#common-field-types)|conditional|none|A discount rate calculated based on a proportion of the calculated interest accrued on the account. Note that the currency of the fee discount is expected to be the same as the currency of the fee itself. One of amount, balanceRate, transactionRate, accruedRate and feeRate is mandatory. Unless noted in additionalInfo, assumes the application and calculation frequency are the same as the corresponding fee|
|feeRate|[RateString](../../index.html#common-field-types)|conditional|none|A discount rate calculated based on a proportion of the fee to which this discount is attached. Note that the currency of the fee discount is expected to be the same as the currency of the fee itself. One of amount, balanceRate, transactionRate, accruedRate and feeRate is mandatory. Unless noted in additionalInfo, assumes the application and calculation frequency are the same as the corresponding fee|
|additionalValue|string|conditional|none|Generic field containing additional information relevant to the [discountType](#tocSproductdiscounttypedoc) specified. Whether mandatory or not is dependent on the value of [discountType](#tocSproductdiscounttypedoc)|
|additionalInfo|string|optional|none|Display text providing more information on the discount|
|additionalInfoUri|[URIString](../../index.html#common-field-types)|optional|none|Link to a web page with more information on this discount|
|eligibility|[[BankingProductDiscountEligibility](#schemabankingproductdiscounteligibility)]|optional|none|Eligibility constraints that apply to this discount|

#### Enumerated Values

|Property|Value|
|---|---|
|discountType|BALANCE|
|discountType|DEPOSITS|
|discountType|PAYMENTS|
|discountType|FEE_CAP|
|discountType|ELIGIBILITY_ONLY|

<h2 id="tocSbankingproductdiscounteligibility">BankingProductDiscountEligibility</h2>

<a id="schemabankingproductdiscounteligibility"></a>

```json
{
  "discountEligibilityType": "BUSINESS",
  "additionalValue": "string",
  "additionalInfo": "string",
  "additionalInfoUri": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|discountEligibilityType|string|mandatory|none|The type of the specific eligibility constraint for a discount|
|additionalValue|string|conditional|none|Generic field containing additional information relevant to the [discountEligibilityType](#tocSproductdiscounteligibilitydoc) specified. Whether mandatory or not is dependent on the value of [discountEligibilityType](#tocSproductdiscounteligibilitydoc)|
|additionalInfo|string|optional|none|Display text providing more information on this eligibility constraint|
|additionalInfoUri|[URIString](../../index.html#common-field-types)|optional|none|Link to a web page with more information on this eligibility constraint|

#### Enumerated Values

|Property|Value|
|---|---|
|discountEligibilityType|BUSINESS|
|discountEligibilityType|PENSION_RECIPIENT|
|discountEligibilityType|MIN_AGE|
|discountEligibilityType|MAX_AGE|
|discountEligibilityType|MIN_INCOME|
|discountEligibilityType|MIN_TURNOVER|
|discountEligibilityType|STAFF|
|discountEligibilityType|STUDENT|
|discountEligibilityType|EMPLOYMENT_STATUS|
|discountEligibilityType|RESIDENCY_STATUS|
|discountEligibilityType|NATURAL_PERSON|
|discountEligibilityType|INTRODUCTORY|
|discountEligibilityType|OTHER|

<h2 id="tocSbankingproductdepositrate">BankingProductDepositRate</h2>

<a id="schemabankingproductdepositrate"></a>

```json
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

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|depositRateType|string|mandatory|none|The type of rate (base, bonus, etc). See the next section for an overview of valid values and their meaning|
|rate|[RateString](../../index.html#common-field-types)|mandatory|none|The rate to be applied|
|calculationFrequency|[ExternalRef](../../index.html#common-field-types)|optional|none|The period after which the rate is applied to the balance to calculate the amount due for the period. Calculation of the amount is often daily (as balances may change) but accumulated until the total amount is 'applied' to the account (see applicationFrequency). Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)|
|applicationFrequency|[ExternalRef](../../index.html#common-field-types)|optional|none|The period after which the calculated amount(s) (see calculationFrequency) are 'applied' (i.e. debited or credited) to the account. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)|
|tiers|[[BankingProductRateTier](#schemabankingproductratetier)]|optional|none|Rate tiers applicable for this rate|
|additionalValue|string|conditional|none|Generic field containing additional information relevant to the [depositRateType](#tocSproductdepositratetypedoc) specified. Whether mandatory or not is dependent on the value of [depositRateType](#tocSproductdepositratetypedoc)|
|additionalInfo|string|optional|none|Display text providing more information on the rate|
|additionalInfoUri|[URIString](../../index.html#common-field-types)|optional|none|Link to a web page with more information on this rate|

#### Enumerated Values

|Property|Value|
|---|---|
|depositRateType|FIXED|
|depositRateType|BONUS|
|depositRateType|BUNDLE_BONUS|
|depositRateType|VARIABLE|
|depositRateType|INTRODUCTORY|
|depositRateType|FLOATING|
|depositRateType|MARKET_LINKED|

<h2 id="tocSbankingproductlendingrate">BankingProductLendingRate</h2>

<a id="schemabankingproductlendingrate"></a>

```json
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

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lendingRateType|string|mandatory|none|The type of rate (fixed, variable, etc). See the next section for an overview of valid values and their meaning|
|rate|[RateString](../../index.html#common-field-types)|mandatory|none|The rate to be applied|
|comparisonRate|[RateString](../../index.html#common-field-types)|optional|none|A comparison rate equivalent for this rate|
|calculationFrequency|[ExternalRef](../../index.html#common-field-types)|optional|none|The period after which the rate is applied to the balance to calculate the amount due for the period. Calculation of the amount is often daily (as balances may change) but accumulated until the total amount is 'applied' to the account (see applicationFrequency). Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)|
|applicationFrequency|[ExternalRef](../../index.html#common-field-types)|optional|none|The period after which the calculated amount(s) (see calculationFrequency) are 'applied' (i.e. debited or credited) to the account. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)|
|interestPaymentDue|string|optional|none|When loan payments are due to be paid within each period. The investment benefit of earlier payments affect the rate that can be offered|
|tiers|[[BankingProductRateTier](#schemabankingproductratetier)]|optional|none|Rate tiers applicable for this rate|
|additionalValue|string|conditional|none|Generic field containing additional information relevant to the [lendingRateType](#tocSproductlendingratetypedoc) specified. Whether mandatory or not is dependent on the value of [lendingRateType](#tocSproductlendingratetypedoc)|
|additionalInfo|string|optional|none|Display text providing more information on the rate.|
|additionalInfoUri|[URIString](../../index.html#common-field-types)|optional|none|Link to a web page with more information on this rate|

#### Enumerated Values

|Property|Value|
|---|---|
|lendingRateType|FIXED|
|lendingRateType|VARIABLE|
|lendingRateType|INTRODUCTORY|
|lendingRateType|DISCOUNT|
|lendingRateType|PENALTY|
|lendingRateType|FLOATING|
|lendingRateType|MARKET_LINKED|
|lendingRateType|CASH_ADVANCE|
|lendingRateType|PURCHASE|
|lendingRateType|BUNDLE_DISCOUNT_FIXED|
|lendingRateType|BUNDLE_DISCOUNT_VARIABLE|
|interestPaymentDue|IN_ARREARS|
|interestPaymentDue|IN_ADVANCE|

<h2 id="tocSbankingproductratetier">BankingProductRateTier</h2>

<a id="schemabankingproductratetier"></a>

```json
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

```

*Defines the criteria and conditions for which a rate applies*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|mandatory|none|A display name for the tier|
|unitOfMeasure|string|mandatory|none|The unit of measure that applies to the tierValueMinimum and tierValueMaximum values e.g. a **DOLLAR** amount. **PERCENT** (in the case of loan-to-value ratio or LVR). Tier term period representing a discrete number of **MONTH**'s or **DAY**'s (in the case of term deposit tiers)|
|minimumValue|number|mandatory|none|The number of tierUnitOfMeasure units that form the lower bound of the tier. The tier should be inclusive of this value|
|maximumValue|number|optional|none|The number of tierUnitOfMeasure units that form the upper bound of the tier or band. For a tier with a discrete value (as opposed to a range of values e.g. 1 month) this must be the same as tierValueMinimum. Where this is the same as the tierValueMinimum value of the next-higher tier the referenced tier should be exclusive of this value. For example a term deposit of 2 months falls into the upper tier of the following tiers: (1 – 2 months, 2 – 3 months). If absent the tier's range has no upper bound.|
|rateApplicationMethod|string|optional|none|The method used to calculate the amount to be applied using one or more tiers. A single rate may be applied to the entire balance or each applicable tier rate is applied to the portion of the balance that falls into that tier (referred to as 'bands' or 'steps')|
|applicabilityConditions|[BankingProductRateCondition](#schemabankingproductratecondition)|optional|none|Defines a condition for the applicability of a tiered rate|
|subTier|object|optional|none|Defines the sub-tier criteria and conditions for which a rate applies|
|» name|string|mandatory|none|A display name for the tier|
|» unitOfMeasure|string|mandatory|none|The unit of measure that applies to the tierValueMinimum and tierValueMaximum values e.g. a **DOLLAR** amount. **PERCENT** (in the case of loan-to-value ratio or LVR). Tier term period representing a discrete number of **MONTH**'s or **DAY**'s (in the case of term deposit tiers)|
|» minimumValue|number|mandatory|none|The number of tierUnitOfMeasure units that form the lower bound of the tier. The tier should be inclusive of this value|
|» maximumValue|number|mandatory|none|The number of tierUnitOfMeasure units that form the upper bound of the tier or band. For a tier with a discrete value (as opposed to a range of values e.g. 1 month) this must be the same as tierValueMinimum. Where this is the same as the tierValueMinimum value of the next-higher tier the referenced tier should be exclusive of this value. For example a term deposit of 2 months falls into the upper tier of the following tiers: (1 – 2 months, 2 – 3 months)|
|» rateApplicationMethod|string|optional|none|The method used to calculate the amount to be applied using one or more tiers. A single rate may be applied to the entire balance or each applicable tier rate is applied to the portion of the balance that falls into that tier (referred to as 'bands' or 'steps')|
|» applicabilityConditions|[BankingProductRateCondition](#schemabankingproductratecondition)|optional|none|Defines a condition for the applicability of a tiered rate|

#### Enumerated Values

|Property|Value|
|---|---|
|unitOfMeasure|DOLLAR|
|unitOfMeasure|PERCENT|
|unitOfMeasure|MONTH|
|unitOfMeasure|DAY|
|rateApplicationMethod|WHOLE_BALANCE|
|rateApplicationMethod|PER_TIER|
|unitOfMeasure|DOLLAR|
|unitOfMeasure|PERCENT|
|unitOfMeasure|MONTH|
|unitOfMeasure|DAY|
|rateApplicationMethod|WHOLE_BALANCE|
|rateApplicationMethod|PER_TIER|

<h2 id="tocSbankingproductratecondition">BankingProductRateCondition</h2>

<a id="schemabankingproductratecondition"></a>

```json
{
  "additionalInfo": "string",
  "additionalInfoUri": "string"
}

```
<h2 id="tocSlinkspaginated">LinksPaginated</h2>

<a id="schemalinkspaginated"></a>

```json
{
  "self": "string",
  "first": "string",
  "prev": "string",
  "next": "string",
  "last": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|self|[URIString](../../index.html#common-field-types)|mandatory|none|Fully qualified link that generated the current response document|
|first|[URIString](../../index.html#common-field-types)|conditional|none|URI to the first page of this set. Mandatory if this response is not the first page|
|prev|[URIString](../../index.html#common-field-types)|conditional|none|URI to the previous page of this set. Mandatory if this response is not the first page|
|next|[URIString](../../index.html#common-field-types)|conditional|none|URI to the next page of this set. Mandatory if this response is not the last page|
|last|[URIString](../../index.html#common-field-types)|conditional|none|URI to the last page of this set. Mandatory if this response is not the last page|

<h2 id="tocSmetapaginated">MetaPaginated</h2>

<a id="schemametapaginated"></a>

```json
{
  "totalRecords": 0,
  "totalPages": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|totalRecords|[NaturalNumber](../../index.html#common-field-types)|mandatory|none|The total number of records in the full set. See [pagination](../../index.html#pagination).|
|totalPages|[NaturalNumber](../../index.html#common-field-types)|mandatory|none|The total number of pages in the full set. See [pagination](../../index.html#pagination).|
