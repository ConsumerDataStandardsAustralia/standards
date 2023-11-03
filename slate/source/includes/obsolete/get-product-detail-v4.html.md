---
title: Get Product Detail v4

#language_tabs: # must be one of https://git.io/vQNgJ
#  - shell
#  - javascript

toc_footers:
  - <a href='../../index.html'>Consumer Data Standards</a>

search: false
---

# Get Product Detail V4
This page documents the obsolete version 4 of the Get Product Detail endpoint.

This version is to be ceased to be called by data recipients by **Date TBC** and can be decommissioned by data holders as of that date.


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

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json',
  'x-v':'string',
  'x-min-v':'string'

};

fetch('https://data.holder.com.au/cds-au/v1/banking/products/{productId}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /banking/products/{productId}`

Obtain detailed information on a single product offered openly to the market.

Obsolete versions: [v1](../../includes/obsolete/get-product-detail-v1.html), [v2](../../includes/obsolete/get-product-detail-v2.html), [v3](../../includes/obsolete/get-product-detail-v3.html)

###Endpoint Version
|   |  |
|---|--|
|Version|**4**

<h3 id="get-product-detail-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|productId|path|[ASCIIString](#common-field-types)|mandatory|ID of the specific product requested|
|x-v|header|string|mandatory|Version of the API end point requested by the client. Must be set to a positive integer. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If the value of [x-min-v](#request-headers) is equal to or higher than the value of [x-v](#request-headers) then the [x-min-v](#request-headers) header should be treated as absent. If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable. See [HTTP Headers](#request-headers)|
|x-min-v|header|string|optional|Minimum version of the API end point requested by the client. Must be set to a positive integer if provided. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable.|

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
        "feeType": "DEPOSIT",
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
        "depositRateType": "BONUS",
        "rate": "string",
        "calculationFrequency": "string",
        "applicationFrequency": "string",
        "tiers": [
          {
            "name": "string",
            "unitOfMeasure": "DAY",
            "minimumValue": 0,
            "maximumValue": 0,
            "rateApplicationMethod": "PER_TIER",
            "applicabilityConditions": {
              "additionalInfo": "string",
              "additionalInfoUri": "string"
            },
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
        "lendingRateType": "BUNDLE_DISCOUNT_FIXED",
        "rate": "string",
        "comparisonRate": "string",
        "calculationFrequency": "string",
        "applicationFrequency": "string",
        "interestPaymentDue": "IN_ADVANCE",
        "repaymentType": "INTEREST_ONLY",
        "loanPurpose": "INVESTMENT",
        "tiers": [
          {
            "name": "string",
            "unitOfMeasure": "DAY",
            "minimumValue": 0,
            "maximumValue": 0,
            "rateApplicationMethod": "PER_TIER",
            "applicabilityConditions": {
              "additionalInfo": "string",
              "additionalInfoUri": "string"
            },
            "additionalInfo": "string",
            "additionalInfoUri": "string"
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
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[ResponseBankingProductByIdV4](#schemacdr-banking-apiresponsebankingproductbyidv4)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Missing Field](#error-400-field-missing)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li></ul>|[ResponseErrorListV2](#schemacdr-banking-apiresponseerrorlistv2)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[404 - Unavailable Resource](#error-404-resource-unavailable)</li><li>[404 - Invalid Resource](#error-404-resource-invalid)</li></ul>|[ResponseErrorListV2](#schemacdr-banking-apiresponseerrorlistv2)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|[ResponseErrorListV2](#schemacdr-banking-apiresponseerrorlistv2)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-v|string||The [version](#response-headers) of the API end point that the data holder has responded with.|

  
    <aside class="success">
This operation does not require authentication
</aside>

  

<h2 class="schema-heading" id="cdr-banking-api-schemas">Schemas</h2>
<a class="schema-link" id="cdr-banking-api-schemas"></a>



<h3 class="schema-toc" id="tocSbankingproductv4">BankingProductV4</h3>

<a class="schema-anchor" id="schemacdr-banking-apibankingproductv4"></a>

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
  "cardArt": [
    {
      "title": "string",
      "imageUri": "string"
    }
  ]
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|productId|[ASCIIString](#common-field-types)|mandatory|A data holder specific unique identifier for this product. This identifier must be unique to a product but does not otherwise need to adhere to ID permanence guidelines.|
|effectiveFrom|[DateTimeString](#common-field-types)|optional|The date and time from which this product is effective (ie. is available for origination).  Used to enable the articulation of products to the regime before they are available for customers to originate|
|effectiveTo|[DateTimeString](#common-field-types)|optional|The date and time at which this product will be retired and will no longer be offered.  Used to enable the managed deprecation of products|
|lastUpdated|[DateTimeString](#common-field-types)|mandatory|The last date and time that the information for this product was changed (or the creation date for the product if it has never been altered)|
|productCategory|[BankingProductCategory](#schemacdr-banking-apibankingproductcategory)|mandatory|The category to which a product or account belongs. See [here](#product-categories) for more details|
|name|string|mandatory|The display name of the product|
|description|string|mandatory|A description of the product|
|brand|string|mandatory|A label of the brand for the product. Able to be used for filtering. For data holders with single brands this value is still required|
|brandName|string|optional|An optional display name of the brand|
|applicationUri|[URIString](#common-field-types)|optional|A link to an application web page where this product can be applied for.|
|isTailored|[Boolean](#common-field-types)|mandatory|Indicates whether the product is specifically tailored to a circumstance.  In this case fees and prices are significantly negotiated depending on context. While all products are open to a degree of tailoring this flag indicates that tailoring is expected and thus that the provision of specific fees and rates is not applicable|
|additionalInformation|[BankingProductAdditionalInformationV2](#schemacdr-banking-apibankingproductadditionalinformationv2)|optional|Object that contains links to additional information on specific topics|
|cardArt|[object]|optional|An array of card art images|
|» title|string|optional|Display label for the specific image|
|» imageUri|[URIString](#common-field-types)|mandatory|URI reference to a PNG, JPG or GIF image with proportions defined by ISO 7810 ID-1 and width no greater than 512 pixels. The URI reference may be a link or url-encoded data URI according to **[[RFC2397]](#nref-RFC2397)**|

<h3 class="schema-toc" id="tocSbankingproductadditionalinformationv2">BankingProductAdditionalInformationV2</h3>

<a class="schema-anchor" id="schemacdr-banking-apibankingproductadditionalinformationv2"></a>

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

*Object that contains links to additional information on specific topics*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|overviewUri|[URIString](#common-field-types)|conditional|General overview of the product. Mandatory if `additionalOverviewUris` includes one or more supporting documents.|
|termsUri|[URIString](#common-field-types)|conditional|Terms and conditions for the product. Mandatory if `additionalTermsUris` includes one or more supporting documents.|
|eligibilityUri|[URIString](#common-field-types)|conditional|Eligibility rules and criteria for the product. Mandatory if `additionalEligibilityUris` includes one or more supporting documents.|
|feesAndPricingUri|[URIString](#common-field-types)|conditional|Description of fees, pricing, discounts, exemptions and bonuses for the product. Mandatory if `additionalFeesAndPricingUris` includes one or more supporting documents.|
|bundleUri|[URIString](#common-field-types)|conditional|Description of a bundle that this product can be part of. Mandatory if `additionalBundleUris` includes one or more supporting documents.|
|additionalOverviewUris|[[BankingProductAdditionalInformationV2_additionalInformationUris](#schemacdr-banking-apibankingproductadditionalinformationv2_additionalinformationuris)]|optional|An array of additional general overviews for the product or features of the product, if applicable. To be treated as secondary documents to the `overviewUri`. Only to be used if there is a primary `overviewUri`.|
|additionalTermsUris|[[BankingProductAdditionalInformationV2_additionalInformationUris](#schemacdr-banking-apibankingproductadditionalinformationv2_additionalinformationuris)]|optional|An array of additional terms and conditions for the product, if applicable. To be treated as secondary documents to the `termsUri`. Only to be used if there is a primary `termsUri`.|
|additionalEligibilityUris|[[BankingProductAdditionalInformationV2_additionalInformationUris](#schemacdr-banking-apibankingproductadditionalinformationv2_additionalinformationuris)]|optional|An array of additional eligibility rules and criteria for the product, if applicable. To be treated as secondary documents to the `eligibilityUri`. Only to be used if there is a primary `eligibilityUri`.|
|additionalFeesAndPricingUris|[[BankingProductAdditionalInformationV2_additionalInformationUris](#schemacdr-banking-apibankingproductadditionalinformationv2_additionalinformationuris)]|optional|An array of additional fees, pricing, discounts, exemptions and bonuses for the product, if applicable. To be treated as secondary documents to the `feesAndPricingUri`. Only to be used if there is a primary `feesAndPricingUri`.|
|additionalBundleUris|[[BankingProductAdditionalInformationV2_additionalInformationUris](#schemacdr-banking-apibankingproductadditionalinformationv2_additionalinformationuris)]|optional|An array of additional bundles for the product, if applicable. To be treated as secondary documents to the `bundleUri`. Only to be used if there is a primary `bundleUri`.|

<h3 class="schema-toc" id="tocSbankingproductadditionalinformationv2_additionalinformationuris">BankingProductAdditionalInformationV2_additionalInformationUris</h3>

<a class="schema-anchor" id="schemacdr-banking-apibankingproductadditionalinformationv2_additionalinformationuris"></a>

```json
{
  "description": "string",
  "additionalInfoUri": "string"
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|description|string|optional|Display text providing more information about the document URI|
|additionalInfoUri|[URIString](#common-field-types)|mandatory|The URI describing the additional information|

<h3 class="schema-toc" id="tocSresponsebankingproductbyidv4">ResponseBankingProductByIdV4</h3>

<a class="schema-anchor" id="schemacdr-banking-apiresponsebankingproductbyidv4"></a>

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
        "feeType": "DEPOSIT",
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
        "depositRateType": "BONUS",
        "rate": "string",
        "calculationFrequency": "string",
        "applicationFrequency": "string",
        "tiers": [
          {
            "name": "string",
            "unitOfMeasure": "DAY",
            "minimumValue": 0,
            "maximumValue": 0,
            "rateApplicationMethod": "PER_TIER",
            "applicabilityConditions": {
              "additionalInfo": "string",
              "additionalInfoUri": "string"
            },
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
        "lendingRateType": "BUNDLE_DISCOUNT_FIXED",
        "rate": "string",
        "comparisonRate": "string",
        "calculationFrequency": "string",
        "applicationFrequency": "string",
        "interestPaymentDue": "IN_ADVANCE",
        "repaymentType": "INTEREST_ONLY",
        "loanPurpose": "INVESTMENT",
        "tiers": [
          {
            "name": "string",
            "unitOfMeasure": "DAY",
            "minimumValue": 0,
            "maximumValue": 0,
            "rateApplicationMethod": "PER_TIER",
            "applicabilityConditions": {
              "additionalInfo": "string",
              "additionalInfoUri": "string"
            },
            "additionalInfo": "string",
            "additionalInfoUri": "string"
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

|Name|Type|Required|Description|
|---|---|---|---|
|data|[BankingProductDetailV4](#schemacdr-banking-apibankingproductdetailv4)|mandatory|none|
|links|[Links](#schemacdr-banking-apilinks)|mandatory|none|
|meta|[Meta](#schemacdr-banking-apimeta)|optional|none|

<h3 class="schema-toc" id="tocSbankingproductdetailv4">BankingProductDetailV4</h3>

<a class="schema-anchor" id="schemacdr-banking-apibankingproductdetailv4"></a>

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
      "feeType": "DEPOSIT",
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
      "depositRateType": "BONUS",
      "rate": "string",
      "calculationFrequency": "string",
      "applicationFrequency": "string",
      "tiers": [
        {
          "name": "string",
          "unitOfMeasure": "DAY",
          "minimumValue": 0,
          "maximumValue": 0,
          "rateApplicationMethod": "PER_TIER",
          "applicabilityConditions": {
            "additionalInfo": "string",
            "additionalInfoUri": "string"
          },
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
      "lendingRateType": "BUNDLE_DISCOUNT_FIXED",
      "rate": "string",
      "comparisonRate": "string",
      "calculationFrequency": "string",
      "applicationFrequency": "string",
      "interestPaymentDue": "IN_ADVANCE",
      "repaymentType": "INTEREST_ONLY",
      "loanPurpose": "INVESTMENT",
      "tiers": [
        {
          "name": "string",
          "unitOfMeasure": "DAY",
          "minimumValue": 0,
          "maximumValue": 0,
          "rateApplicationMethod": "PER_TIER",
          "applicabilityConditions": {
            "additionalInfo": "string",
            "additionalInfoUri": "string"
          },
          "additionalInfo": "string",
          "additionalInfoUri": "string"
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

|Name|Type|Required|Description|
|---|---|---|---|
|*anonymous*|[BankingProductV4](#schemacdr-banking-apibankingproductv4)|mandatory|none|

*and*

|Name|Type|Required|Description|
|---|---|---|---|
|*anonymous*|object|mandatory|none|
|» bundles|[[BankingProductBundle](#schemacdr-banking-apibankingproductbundle)]|optional|An array of bundles that this product participates in.  Each bundle is described by free form information but also by a list of product IDs of the other products that are included in the bundle.  It is assumed that the current product is included in the bundle also|
|» features|[[BankingProductFeatureV2](#schemacdr-banking-apibankingproductfeaturev2)]|optional|Array of features available for the product|
|» constraints|[[BankingProductConstraint](#schemacdr-banking-apibankingproductconstraint)]|optional|Constraints on the application for or operation of the product such as minimum balances or limit thresholds|
|» eligibility|[[BankingProductEligibility](#schemacdr-banking-apibankingproducteligibility)]|optional|Eligibility criteria for the product|
|» fees|[[BankingProductFee](#schemacdr-banking-apibankingproductfee)]|optional|Fees applicable for the product|
|» depositRates|[[BankingProductDepositRate](#schemacdr-banking-apibankingproductdepositrate)]|optional|Interest rates available for deposits|
|» lendingRates|[[BankingProductLendingRateV2](#schemacdr-banking-apibankingproductlendingratev2)]|optional|Interest rates charged against lending balances|

<h3 class="schema-toc" id="tocSbankingproductbundle">BankingProductBundle</h3>

<a class="schema-anchor" id="schemacdr-banking-apibankingproductbundle"></a>

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

|Name|Type|Required|Description|
|---|---|---|---|
|name|string|mandatory|Name of the bundle|
|description|string|mandatory|Description of the bundle|
|additionalInfo|string|optional|Display text providing more information on the bundle|
|additionalInfoUri|[URIString](#common-field-types)|optional|Link to a web page with more information on the bundle criteria and benefits|
|productIds|[string]|optional|Array of product IDs for products included in the bundle that are available via the product end points.  Note that this array is not intended to represent a comprehensive model of the products included in the bundle and some products available for the bundle may not be available via the product reference end points|

<h3 class="schema-toc" id="tocSbankingproductfeaturev2">BankingProductFeatureV2</h3>

<a class="schema-anchor" id="schemacdr-banking-apibankingproductfeaturev2"></a>

```json
{
  "featureType": "ADDITIONAL_CARDS",
  "additionalValue": "string",
  "additionalInfo": "string",
  "additionalInfoUri": "string"
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|featureType|string|mandatory|The type of feature described|
|additionalValue|string|conditional|Generic field containing additional information relevant to the [featureType](#tocSproductfeaturetypedoc) specified. Whether mandatory or not is dependent on the value of the [featureType.](#tocSproductfeaturetypedoc)|
|additionalInfo|string|conditional|Display text providing more information on the feature. Mandatory if the [feature type](#tocSproductfeaturetypedoc) is set to OTHER|
|additionalInfoUri|[URIString](#common-field-types)|optional|Link to a web page with more information on this feature|

#### Enumerated Values

|Property|Value|
|---|---|
|featureType|ADDITIONAL_CARDS|
|featureType|BALANCE_TRANSFERS|
|featureType|BILL_PAYMENT|
|featureType|BONUS_REWARDS|
|featureType|CARD_ACCESS|
|featureType|CASHBACK_OFFER|
|featureType|COMPLEMENTARY_PRODUCT_DISCOUNTS|
|featureType|DIGITAL_BANKING|
|featureType|DIGITAL_WALLET|
|featureType|DONATE_INTEREST|
|featureType|EXTRA_REPAYMENTS|
|featureType|FRAUD_PROTECTION|
|featureType|FREE_TXNS|
|featureType|FREE_TXNS_ALLOWANCE|
|featureType|GUARANTOR|
|featureType|INSURANCE|
|featureType|INSTALMENT_PLAN|
|featureType|INTEREST_FREE|
|featureType|INTEREST_FREE_TRANSFERS|
|featureType|LOYALTY_PROGRAM|
|featureType|NOTIFICATIONS|
|featureType|NPP_ENABLED|
|featureType|NPP_PAYID|
|featureType|OFFSET|
|featureType|OTHER|
|featureType|OVERDRAFT|
|featureType|REDRAW|
|featureType|RELATIONSHIP_MANAGEMENT|
|featureType|UNLIMITED_TXNS|

<h3 class="schema-toc" id="tocSbankingproductconstraint">BankingProductConstraint</h3>

<a class="schema-anchor" id="schemacdr-banking-apibankingproductconstraint"></a>

```json
{
  "constraintType": "MAX_BALANCE",
  "additionalValue": "string",
  "additionalInfo": "string",
  "additionalInfoUri": "string"
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|constraintType|string|mandatory|The type of constraint described.  See the next section for an overview of valid values and their meaning|
|additionalValue|string|conditional|Generic field containing additional information relevant to the [constraintType](#tocSproductconstrainttypedoc) specified.  Whether mandatory or not is dependent on the value of [constraintType](#tocSproductconstrainttypedoc)|
|additionalInfo|string|optional|Display text providing more information the constraint|
|additionalInfoUri|[URIString](#common-field-types)|optional|Link to a web page with more information on the constraint|

#### Enumerated Values

|Property|Value|
|---|---|
|constraintType|MAX_BALANCE|
|constraintType|MAX_LIMIT|
|constraintType|MIN_BALANCE|
|constraintType|MIN_LIMIT|
|constraintType|OPENING_BALANCE|

<h3 class="schema-toc" id="tocSbankingproducteligibility">BankingProductEligibility</h3>

<a class="schema-anchor" id="schemacdr-banking-apibankingproducteligibility"></a>

```json
{
  "eligibilityType": "BUSINESS",
  "additionalValue": "string",
  "additionalInfo": "string",
  "additionalInfoUri": "string"
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|eligibilityType|string|mandatory|The type of eligibility criteria described.  See the next section for an overview of valid values and their meaning|
|additionalValue|string|conditional|Generic field containing additional information relevant to the [eligibilityType](#tocSproducteligibilitytypedoc) specified. Whether mandatory or not is dependent on the value of [eligibilityType](#tocSproducteligibilitytypedoc)|
|additionalInfo|string|conditional|Display text providing more information on the [eligibility](#tocSproducteligibilitytypedoc) criteria. Mandatory if the field is set to OTHER|
|additionalInfoUri|[URIString](#common-field-types)|optional|Link to a web page with more information on this eligibility criteria|

#### Enumerated Values

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

<h3 class="schema-toc" id="tocSbankingproductfee">BankingProductFee</h3>

<a class="schema-anchor" id="schemacdr-banking-apibankingproductfee"></a>

```json
{
  "name": "string",
  "feeType": "DEPOSIT",
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

|Name|Type|Required|Description|
|---|---|---|---|
|name|string|mandatory|Name of the fee|
|feeType|string|mandatory|The type of fee|
|amount|[AmountString](#common-field-types)|conditional|The amount charged for the fee. One of amount, balanceRate, transactionRate and accruedRate is mandatory unless the *feeType* "VARIABLE" is supplied|
|balanceRate|[RateString](#common-field-types)|conditional|A fee rate calculated based on a proportion of the balance. One of amount, balanceRate, transactionRate and accruedRate is mandatory unless the *feeType* "VARIABLE" is supplied.|
|transactionRate|[RateString](#common-field-types)|conditional|A fee rate calculated based on a proportion of a transaction. One of amount, balanceRate, transactionRate and accruedRate is mandatory unless the *feeType* "VARIABLE" is supplied|
|accruedRate|[RateString](#common-field-types)|conditional|A fee rate calculated based on a proportion of the calculated interest accrued on the account. One of amount, balanceRate, transactionRate and accruedRate is mandatory unless the *feeType* "VARIABLE" is supplied|
|accrualFrequency|[ExternalRef](#common-field-types)|optional|The indicative frequency with which the fee is calculated on the account. Only applies if balanceRate or accruedRate is also present. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)|
|currency|[CurrencyString](#common-field-types)|optional|The currency the fee will be charged in. Assumes AUD if absent|
|additionalValue|string|conditional|Generic field containing additional information relevant to the [feeType](#tocSproductfeetypedoc) specified. Whether mandatory or not is dependent on the value of [feeType](#tocSproductfeetypedoc)|
|additionalInfo|string|optional|Display text providing more information on the fee|
|additionalInfoUri|[URIString](#common-field-types)|optional|Link to a web page with more information on this fee|
|discounts|[[BankingProductDiscount](#schemacdr-banking-apibankingproductdiscount)]|optional|An optional list of discounts to this fee that may be available|

#### Enumerated Values

|Property|Value|
|---|---|
|feeType|DEPOSIT|
|feeType|EVENT|
|feeType|EXIT|
|feeType|PAYMENT|
|feeType|PERIODIC|
|feeType|PURCHASE|
|feeType|TRANSACTION|
|feeType|UPFRONT|
|feeType|VARIABLE|
|feeType|WITHDRAWAL|

<h3 class="schema-toc" id="tocSbankingproductdiscount">BankingProductDiscount</h3>

<a class="schema-anchor" id="schemacdr-banking-apibankingproductdiscount"></a>

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

|Name|Type|Required|Description|
|---|---|---|---|
|description|string|mandatory|Description of the discount|
|discountType|string|mandatory|The type of discount. See the next section for an overview of valid values and their meaning|
|amount|[AmountString](#common-field-types)|conditional|Dollar value of the discount. One of amount, balanceRate, transactionRate, accruedRate and feeRate is mandatory.|
|balanceRate|[RateString](#common-field-types)|conditional|A discount rate calculated based on a proportion of the balance. Note that the currency of the fee discount is expected to be the same as the currency of the fee itself. One of amount, balanceRate, transactionRate, accruedRate and feeRate is mandatory. Unless noted in additionalInfo, assumes the application and calculation frequency are the same as the corresponding fee|
|transactionRate|[RateString](#common-field-types)|conditional|A discount rate calculated based on a proportion of a transaction. Note that the currency of the fee discount is expected to be the same as the currency of the fee itself. One of amount, balanceRate, transactionRate, accruedRate and feeRate is mandatory|
|accruedRate|[RateString](#common-field-types)|conditional|A discount rate calculated based on a proportion of the calculated interest accrued on the account. Note that the currency of the fee discount is expected to be the same as the currency of the fee itself. One of amount, balanceRate, transactionRate, accruedRate and feeRate is mandatory. Unless noted in additionalInfo, assumes the application and calculation frequency are the same as the corresponding fee|
|feeRate|[RateString](#common-field-types)|conditional|A discount rate calculated based on a proportion of the fee to which this discount is attached. Note that the currency of the fee discount is expected to be the same as the currency of the fee itself. One of amount, balanceRate, transactionRate, accruedRate and feeRate is mandatory. Unless noted in additionalInfo, assumes the application and calculation frequency are the same as the corresponding fee|
|additionalValue|string|conditional|Generic field containing additional information relevant to the [discountType](#tocSproductdiscounttypedoc) specified. Whether mandatory or not is dependent on the value of [discountType](#tocSproductdiscounttypedoc)|
|additionalInfo|string|optional|Display text providing more information on the discount|
|additionalInfoUri|[URIString](#common-field-types)|optional|Link to a web page with more information on this discount|
|eligibility|[[BankingProductDiscountEligibility](#schemacdr-banking-apibankingproductdiscounteligibility)]|conditional|Eligibility constraints that apply to this discount. Mandatory if ``discountType`` is ``ELIGIBILITY_ONLY``.|

#### Enumerated Values

|Property|Value|
|---|---|
|discountType|BALANCE|
|discountType|DEPOSITS|
|discountType|ELIGIBILITY_ONLY|
|discountType|FEE_CAP|
|discountType|PAYMENTS|

<h3 class="schema-toc" id="tocSbankingproductdiscounteligibility">BankingProductDiscountEligibility</h3>

<a class="schema-anchor" id="schemacdr-banking-apibankingproductdiscounteligibility"></a>

```json
{
  "discountEligibilityType": "BUSINESS",
  "additionalValue": "string",
  "additionalInfo": "string",
  "additionalInfoUri": "string"
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|discountEligibilityType|string|mandatory|The type of the specific eligibility constraint for a discount|
|additionalValue|string|conditional|Generic field containing additional information relevant to the [discountEligibilityType](#tocSproductdiscounteligibilitydoc) specified. Whether mandatory or not is dependent on the value of [discountEligibilityType](#tocSproductdiscounteligibilitydoc)|
|additionalInfo|string|conditional|Display text providing more information on this eligibility constraint. Whether mandatory or not is dependent on the value of [discountEligibilityType](#tocSproductdiscounteligibilitydoc)|
|additionalInfoUri|[URIString](#common-field-types)|optional|Link to a web page with more information on this eligibility constraint|

#### Enumerated Values

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

<h3 class="schema-toc" id="tocSbankingproductdepositrate">BankingProductDepositRate</h3>

<a class="schema-anchor" id="schemacdr-banking-apibankingproductdepositrate"></a>

```json
{
  "depositRateType": "BONUS",
  "rate": "string",
  "calculationFrequency": "string",
  "applicationFrequency": "string",
  "tiers": [
    {
      "name": "string",
      "unitOfMeasure": "DAY",
      "minimumValue": 0,
      "maximumValue": 0,
      "rateApplicationMethod": "PER_TIER",
      "applicabilityConditions": {
        "additionalInfo": "string",
        "additionalInfoUri": "string"
      },
      "additionalInfo": "string",
      "additionalInfoUri": "string"
    }
  ],
  "additionalValue": "string",
  "additionalInfo": "string",
  "additionalInfoUri": "string"
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|depositRateType|string|mandatory|The type of rate (base, bonus, etc). See the next section for an overview of valid values and their meaning|
|rate|[RateString](#common-field-types)|mandatory|The rate to be applied|
|calculationFrequency|[ExternalRef](#common-field-types)|optional|The period after which the rate is applied to the balance to calculate the amount due for the period. Calculation of the amount is often daily (as balances may change) but accumulated until the total amount is 'applied' to the account (see applicationFrequency). Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)|
|applicationFrequency|[ExternalRef](#common-field-types)|optional|The period after which the calculated amount(s) (see calculationFrequency) are 'applied' (i.e. debited or credited) to the account. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)|
|tiers|[[BankingProductRateTierV3](#schemacdr-banking-apibankingproductratetierv3)]|optional|Rate tiers applicable for this rate|
|additionalValue|string|conditional|Generic field containing additional information relevant to the [depositRateType](#tocSproductdepositratetypedoc) specified. Whether mandatory or not is dependent on the value of [depositRateType](#tocSproductdepositratetypedoc)|
|additionalInfo|string|optional|Display text providing more information on the rate|
|additionalInfoUri|[URIString](#common-field-types)|optional|Link to a web page with more information on this rate|

#### Enumerated Values

|Property|Value|
|---|---|
|depositRateType|BONUS|
|depositRateType|BUNDLE_BONUS|
|depositRateType|FIXED|
|depositRateType|FLOATING|
|depositRateType|INTRODUCTORY|
|depositRateType|MARKET_LINKED|
|depositRateType|VARIABLE|

<h3 class="schema-toc" id="tocSbankingproductlendingratev2">BankingProductLendingRateV2</h3>

<a class="schema-anchor" id="schemacdr-banking-apibankingproductlendingratev2"></a>

```json
{
  "lendingRateType": "BUNDLE_DISCOUNT_FIXED",
  "rate": "string",
  "comparisonRate": "string",
  "calculationFrequency": "string",
  "applicationFrequency": "string",
  "interestPaymentDue": "IN_ADVANCE",
  "repaymentType": "INTEREST_ONLY",
  "loanPurpose": "INVESTMENT",
  "tiers": [
    {
      "name": "string",
      "unitOfMeasure": "DAY",
      "minimumValue": 0,
      "maximumValue": 0,
      "rateApplicationMethod": "PER_TIER",
      "applicabilityConditions": {
        "additionalInfo": "string",
        "additionalInfoUri": "string"
      },
      "additionalInfo": "string",
      "additionalInfoUri": "string"
    }
  ],
  "additionalValue": "string",
  "additionalInfo": "string",
  "additionalInfoUri": "string"
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|lendingRateType|string|mandatory|The type of rate (fixed, variable, etc). See the next section for an overview of valid values and their meaning|
|rate|[RateString](#common-field-types)|mandatory|The rate to be applied|
|comparisonRate|[RateString](#common-field-types)|optional|A comparison rate equivalent for this rate|
|calculationFrequency|[ExternalRef](#common-field-types)|optional|The period after which the rate is applied to the balance to calculate the amount due for the period. Calculation of the amount is often daily (as balances may change) but accumulated until the total amount is 'applied' to the account (see applicationFrequency). Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)|
|applicationFrequency|[ExternalRef](#common-field-types)|optional|The period after which the calculated amount(s) (see calculationFrequency) are 'applied' (i.e. debited or credited) to the account. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)|
|interestPaymentDue|string|optional|When loan payments are due to be paid within each period. The investment benefit of earlier payments affect the rate that can be offered|
|repaymentType|string|optional|Options in place for repayments. If absent, the lending rate is applicable to all repayment types|
|loanPurpose|string|optional|The reason for taking out the loan. If absent, the lending rate is applicable to all loan purposes|
|tiers|[[BankingProductRateTierV3](#schemacdr-banking-apibankingproductratetierv3)]|optional|Rate tiers applicable for this rate|
|additionalValue|string|conditional|Generic field containing additional information relevant to the [lendingRateType](#tocSproductlendingratetypedoc) specified. Whether mandatory or not is dependent on the value of [lendingRateType](#tocSproductlendingratetypedoc)|
|additionalInfo|string|optional|Display text providing more information on the rate.|
|additionalInfoUri|[URIString](#common-field-types)|optional|Link to a web page with more information on this rate|

#### Enumerated Values

|Property|Value|
|---|---|
|lendingRateType|BUNDLE_DISCOUNT_FIXED|
|lendingRateType|BUNDLE_DISCOUNT_VARIABLE|
|lendingRateType|CASH_ADVANCE|
|lendingRateType|DISCOUNT|
|lendingRateType|FIXED|
|lendingRateType|FLOATING|
|lendingRateType|INTRODUCTORY|
|lendingRateType|MARKET_LINKED|
|lendingRateType|PENALTY|
|lendingRateType|PURCHASE|
|lendingRateType|VARIABLE|
|interestPaymentDue|IN_ADVANCE|
|interestPaymentDue|IN_ARREARS|
|repaymentType|INTEREST_ONLY|
|repaymentType|PRINCIPAL_AND_INTEREST|
|loanPurpose|INVESTMENT|
|loanPurpose|OWNER_OCCUPIED|

<h3 class="schema-toc" id="tocSbankingproductratetierv3">BankingProductRateTierV3</h3>

<a class="schema-anchor" id="schemacdr-banking-apibankingproductratetierv3"></a>

```json
{
  "name": "string",
  "unitOfMeasure": "DAY",
  "minimumValue": 0,
  "maximumValue": 0,
  "rateApplicationMethod": "PER_TIER",
  "applicabilityConditions": {
    "additionalInfo": "string",
    "additionalInfoUri": "string"
  },
  "additionalInfo": "string",
  "additionalInfoUri": "string"
}

```

*Defines the criteria and conditions for which a rate applies*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|name|string|mandatory|A display name for the tier|
|unitOfMeasure|string|mandatory|The unit of measure that applies to the tierValueMinimum and tierValueMaximum values e.g. a **DOLLAR** amount. **PERCENT** (in the case of loan-to-value ratio or LVR). Tier term period representing a discrete number of **MONTH**'s or **DAY**'s (in the case of term deposit tiers)|
|minimumValue|[Number](#common-field-types)|mandatory|The number of tierUnitOfMeasure units that form the lower bound of the tier. The tier should be inclusive of this value|
|maximumValue|[Number](#common-field-types)|optional|The number of tierUnitOfMeasure units that form the upper bound of the tier or band. For a tier with a discrete value (as opposed to a range of values e.g. 1 month) this must be the same as tierValueMinimum. Where this is the same as the tierValueMinimum value of the next-higher tier the referenced tier should be exclusive of this value. For example a term deposit of 2 months falls into the upper tier of the following tiers: (1 – 2 months, 2 – 3 months). If absent the tier's range has no upper bound.|
|rateApplicationMethod|string|optional|The method used to calculate the amount to be applied using one or more tiers. A single rate may be applied to the entire balance or each applicable tier rate is applied to the portion of the balance that falls into that tier (referred to as 'bands' or 'steps')|
|applicabilityConditions|[BankingProductRateCondition](#schemacdr-banking-apibankingproductratecondition)|optional|Defines a condition for the applicability of a tiered rate|
|additionalInfo|string|optional|Display text providing more information on the rate tier.|
|additionalInfoUri|[URIString](#common-field-types)|optional|Link to a web page with more information on this rate tier|

#### Enumerated Values

|Property|Value|
|---|---|
|unitOfMeasure|DAY|
|unitOfMeasure|DOLLAR|
|unitOfMeasure|MONTH|
|unitOfMeasure|PERCENT|
|rateApplicationMethod|PER_TIER|
|rateApplicationMethod|WHOLE_BALANCE|

<h3 class="schema-toc" id="tocSbankingproductratecondition">BankingProductRateCondition</h3>

<a class="schema-anchor" id="schemacdr-banking-apibankingproductratecondition"></a>

```json
{
  "additionalInfo": "string",
  "additionalInfoUri": "string"
}

```

*Defines a condition for the applicability of a tiered rate*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|additionalInfo|string|optional|Display text providing more information on the condition|
|additionalInfoUri|[URIString](#common-field-types)|optional|Link to a web page with more information on this condition|



<h3 class="schema-toc" id="tocSlinks">Links</h3>

<a class="schema-anchor" id="schemacdr-banking-apilinks"></a>

```json
{
  "self": "string"
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|self|[URIString](#common-field-types)|mandatory|Fully qualified link that generated the current response document|

<h3 class="schema-toc" id="tocSmeta">Meta</h3>

<a class="schema-anchor" id="schemacdr-banking-apimeta"></a>

```json
{}

```

### Properties

*None*



<h3 class="schema-toc" id="tocSmetaerror">MetaError</h3>

<a class="schema-anchor" id="schemacdr-banking-apimetaerror"></a>

```json
{
  "urn": "string"
}

```

*Additional data for customised error codes*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|urn|string|conditional|The CDR error code URN which the application-specific error code extends. Mandatory if the error `code` is an application-specific error rather than a standardised error code.|

<h3 class="schema-toc" id="tocSresponseerrorlistv2">ResponseErrorListV2</h3>

<a class="schema-anchor" id="schemacdr-banking-apiresponseerrorlistv2"></a>

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

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|errors|[object]|mandatory|none|
|» code|string|mandatory|The code of the error encountered. Where the error is specific to the respondent, an application-specific error code, expressed as a string value. If the error is application-specific, the URN code that the specific error extends must be provided in the meta object. Otherwise, the value is the error code URN.|
|» title|string|mandatory|A short, human-readable summary of the problem that MUST NOT change from occurrence to occurrence of the problem represented by the error code.|
|» detail|string|mandatory|A human-readable explanation specific to this occurrence of the problem.|
|» meta|[MetaError](#schemacdr-banking-apimetaerror)|optional|Additional data for customised error codes|

<h3 class="schema-toc" id="tocSbankingproductcategory">BankingProductCategory</h3>

<a class="schema-anchor" id="schemacdr-banking-apibankingproductcategory"></a>

```json
"BUSINESS_LOANS"

```

*The category to which a product or account belongs. See [here](#product-categories) for more details*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|*anonymous*|string|mandatory|The category to which a product or account belongs. See [here](#product-categories) for more details|

#### Enumerated Values

|Property|Value|
|---|---|
|*anonymous*|BUSINESS_LOANS|
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


## Product & Account Components

<a id="productfeaturetypedoc"></a>
<h3 id="tocSproductfeaturetypedoc">Product Feature Types</h3>

Description of the usage of the featureType field as it applies to products.


|Value|Description|Use of additionalValue Field|
|-----|-----------|----------------------------|
|ADDITIONAL_CARDS|Additional cards can be requested|The maximum number of additional cards.  If no maximum then should be set to null|
|BALANCE_TRANSFERS|Balance transfers can be made to the account (eg. for credit cards)|NA|
|BILL_PAYMENT|The product can be attached to an automatic budgeting and bill payment service|Optional name of the service|
|BONUS_REWARDS|Bonus loyalty rewards points are available|Number of points available|
|CARD_ACCESS|A card is available for the product to access funds|Text describing list of card types that this product can be linked to|
|CASHBACK_OFFER | Subject to terms, conditions and eligibility criteria, the product has a cashback offer for opening an account or by spending at a certain retailer. | The amount of the cashback offer (in AUD) |
|COMPLEMENTARY_PRODUCT_DISCOUNTS|Indicates that complementary, discounted offerings (such as gift cards, or discounted travel) is available|Description of the complementary offering|
|DIGITAL_BANKING|Access is available to online banking features for the product|NA|
|DIGITAL_WALLET|A Digital wallet can be attached to the product|The name or brand of the wallet|
|DONATE_INTEREST|Indicates that interest generated from the product can be automatically donated to a charity or community group|NA|
|EXTRA_REPAYMENTS|Indicates that the product has the option to accept extra repayments without incurring additional charges (for example Buy Now, Pay Later (BNPL) or line of credit products may offer the facility to repay instalments on an adhoc basis).|NA|
|FRAUD_PROTECTION | The product includes fraud protection features. | NA |
|FREE_TXNS|A set number of free transactions available per month|The number of free transactions|
|FREE_TXNS_ALLOWANCE|A set amount of transaction fee value that is discounted per month|The amount of transaction fee discounted (in AUD)|
|GUARANTOR | Subject to terms and conditions, the customer may be able to nominate a guarantor during the origination process. | NA |
|INSURANCE|Insurance is provided as an additional feature of the product|Text description of the type of insurance (e.g. Travel Insurance)|
|INSTALMENT_PLAN | The product has the option to pay for eligible purchases over time with a set number of payments. | NA |
|INTEREST_FREE|Interest free period for purchases|Interest free period. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations)|
|INTEREST_FREE_TRANSFERS|Interest free period for balance transfers|Interest free period. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations)|
|LOYALTY_PROGRAM|A points based loyalty program is available|Name of the loyalty program|
|NOTIFICATIONS|Advanced notifications are available for the product|Description of the notification capability|
|NPP_ENABLED|An account of this product type can be used to receive funds as a result of a BSB/Number based NPP payment|NA|
|NPP_PAYID|An account of this product type can be used as the target of an NPP PayID|NA|
|OFFSET|An offset account can be connected to the product|NA|
|OTHER|Another feature that can not be included in any of the other categories.  The additionalInfo field is mandatory for this type|NA|
|OVERDRAFT|An overdraft can be applied for|NA|
|REDRAW|Redraw of repaid principal above minimum required is available|NA|
|RELATIONSHIP_MANAGEMENT | Relationship management is available for eligible customers. | NA |
|UNLIMITED_TXNS|Unlimited free transactions available|NA|



<a id="productconstrainttypedoc"></a>
<h3 id="tocSproductconstrainttypedoc">Product Constraint Types</h3>

Description of the usage of the constraintType field as it applies to products.

|Value|Description|Use of additionalValue Field|
|-----|-----------|----------------------------|
|MAX_BALANCE|A maximum balance is required for the product|The maximum balance in AmountString format|
|MAX_LIMIT|A maximum limit exists (such as a maximum loan balance denoting the borrowable amount or maximum allowable credit limit)|The maximum limit in AmountString format|
|MIN_BALANCE|A minimum balance is required for the product|The minimum balance in AmountString format|
|MIN_LIMIT|A minimum limit exists (such as a minimum loan balance denoting the borrowable amount or minimum credit limit)|The minimum limit in AmountString format|
|OPENING_BALANCE|An opening balance is required for the product|The minimum opening balance in AmountString format|



<a id="producteligibilitytypedoc"></a>
<h3 id="tocSproducteligibilitytypedoc">Product Eligibility Types</h3>

Description of the usage of the eligibilityType field as it applies to products.

|Value|Description|Use of additionalValue Field|
|-----|-----------|----------------------------|
|BUSINESS|Only business may apply for the account|NA|
|EMPLOYMENT_STATUS|An eligibility constraint based on employment status applies|A description of the status required|
|MAX_AGE|Only customers younger than a maximum age may apply|The maximum age in years|
|MIN_AGE|Only customers older than a minimum age may apply|The minimum age in years|
|MIN_INCOME|The customer must have an income greater than a specified threshold to obtain the product|Minimum income in AmountString format|
|MIN_TURNOVER|Only a business with greater than a minimum turnover may apply|Minimum turnover in AmountString format|
|NATURAL_PERSON|The customer must be a natural person rather than another legal entity|NA|
|OTHER|Another eligibility criteria exists as described in the additionalInfo field (if this option is specified then the additionalInfo field is mandatory)|NA|
|PENSION_RECIPIENT|Only a recipient of a government pension may apply for the product|NA|
|RESIDENCY_STATUS|An eligibility constraint based on residency status applies|A description of the status required|
|STAFF|Only a staff member of the provider may apply|NA|
|STUDENT|Only students may apply for the product|NA|



<a id="productfeetypedoc"></a>
<h3 id="tocSproductfeetypedoc">Product Fee Types</h3>

Description of the usage of the feeType field as it applies to products.

|Value|Description|Use of additionalValue Field|
|-----|-----------|----------------------------|
|DEPOSIT|A fee associated with making a deposit|NA|
|EVENT|A fee in relation to a particular event (e.g. ordering a new card, viewing a balance or stopping a cheque)|NA|
|EXIT|A fee for closing the product|NA|
|PAYMENT|A fee associated with making a payment|NA|
|PERIODIC|A periodic fee such as a monthly account servicing fee|The period of charge.  Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations)|
|PURCHASE|A fee associated with making a purchase at a merchant|NA|
|TRANSACTION|A fee associated with any transaction (incorporates WITHDRAWAL, DEPOSIT, PAYMENT and PURCHASE)|NA|
|UPFRONT|A fee paid at the beginning of the product lifecycle, such as an establishment fee, loyalty program fee or application fee|NA|
|VARIABLE|An at-cost fee that is relevant to a customer's circumstances where the amount or rate may not be known until negotiated with the customer|NA|
|WITHDRAWAL|A fee associated with making a withdrawal|NA|



<a id="productdiscounttypedoc"></a>
<h3 id="tocSproductdiscounttypedoc">Product Discount Types</h3>

Description of the usage of the discountType field as it applies to products.

|Value|Description|Use of additionalValue Field|
|-----|-----------|----------------------------|
|BALANCE|Discount on a fee for maintaining a set balance.  As the discount applies to a fee the period is the same as for the fee|The minimum balance in AmountString format|
|DEPOSITS|Discount for depositing a certain amount of money in a period.  As the discount applies to a fee the period is the same as for the fee|The minimum deposit amount in AmountString format|
|ELIGIBILITY_ONLY|Discount applies based on customer eligibility (eligibility array must be populated)|N/A|
|FEE_CAP|The amount, balanceRate, transactionRate, accruedRate or feeRate fields of the discount represent the maximum amount charged in a time period|The time period for which the fee cap applies. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations)|
|PAYMENTS|Discount for outbound payments from the account under a certain amount of money in a period.  As the discount applies to a fee the period is the same as for the fee|The payment threshold amount in AmountString format|



<a id="productdiscounteligibilitydoc"></a>
<h3 id="tocSproductdiscounteligibilitydoc">Product Discount Eligibility Types</h3>

Description of the usage of the discountEligibilityType field as it applies to products.

|Value|Description|Use of additionalValue Field|
|-----|-----------|----------------------------|
|BUSINESS|A business or other non-person legal entity|NA|
|EMPLOYMENT_STATUS|An eligibility constraint based on employment status applies|A description of the status required|
|INTRODUCTORY|The discount is only available during an introductory period|The period of time for the introductory discount.  Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations)|
|MAX_AGE|Only customers younger than a maximum age receive the discount|The maximum age in years
|MIN_AGE|Only customers older than a minimum age receive the discount|The minimum age in years|
|MIN_INCOME|The customer must have an income greater than a specified threshold to obtain the discount|Minimum income in AmountString format|
|MIN_TURNOVER|Only a business with greater than a minimum turnover is eligible|Minimum turnover in AmountString format|
|NATURAL_PERSON|The customer must be a natural person rather than another legal entity|NA|
|OTHER|Another eligibility criteria exists as described in the additionalInfo field (if this option is specified then the additionalInfo field is mandatory)|NA|
|PENSION_RECIPIENT|Only a recipient of a government pension may receive the discount|Optional. Should contain a description of which pensions qualify|
|RESIDENCY_STATUS|An eligibility constraint based on residency status applies|A description of the status required|
|STAFF|Only a staff member of the provider may receive the discount|NA|
|STUDENT|Only students may receive the discount|Optional. Should contain a description of who qualifies as a student, e.g. do apprentices qualify?|




<a id="productdepositratetypedoc"></a>
<h3 id="tocSproductdepositratetypedoc">Product Deposit Rate Types</h3>

Description of the usage of the depositRateType field as it applies to products.

<a id="productdepositbaseratetypedoc"></a>
<ul><li id="tocSproductdepositbaseratetypedoc"><b>Deposit Base Rate Types</b></li></ul>

A deposit product is expected to present a single Base rate corresponding to relevant selection criteria including the rate `tiers` and `additionalValue`, where applicable.

Value | Description | Use of additionalValue Field
-- | -- | --
FIXED | Fixed rate for a period of time | The period of time fixed. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations)
FLOATING | A floating rate is relatively fixed but still adjusts under specific circumstances | Details of the float parameters
MARKET_LINKED | A rate that is linked to a specific market, commodity or asset class | Details of the market linkage
VARIABLE | A variable base rate for the product | NA


<a id="productdepositadjustmentratetypedoc"></a>
<ul><li id="tocSproductdepositadjustmentratetypedoc"><b>Deposit Adjustment Rate Types</b></li></ul>

A product may have zero, one, or multiple adjustment rates that are taken to apply to a Base rate.

Value | Description | Use of additionalValue Field
-- | -- | --
BONUS | A bonus rate available by meeting a specific criteria | A description of the criteria to obtain the bonus
BUNDLE_BONUS | A bonus rate obtained by originating a bundle instead of a standalone product | The name of the bundle
INTRODUCTORY | An introductory bonus that will expire after a set period | The period of time for the introductory rate. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations)



<a id="productlendingratetypedoc"></a>
<h3 id="tocSproductlendingratetypedoc">Product Lending Rate Types</h3>

Description of the usage of the lendingRateType field as it applies to products.


<a id="productlendingbaseratetypedoc"></a>
<ul><li id="tocSproductlendingbaseratetypedoc"><b>Lending Base Rate Types</b></li></ul>

A lending product is expected to present a single Base rate corresponding to relevant selection criteria including the rate `tiers` and `additionalValue`, where applicable.

Card products may have two or more base rates, including `CASH_ADVANCE` and `PURCHASE` as they may apply to different transaction types within an account. The `PURCHASE` lendingRateType is considered the rate commonly applicable to a card.

Value | Description | Use of additionalValue Field
-- | -- | --
CASH_ADVANCE | Specific rate applied to cash advances from the account. This is expected to apply to products in the `CRED_AND_CHRG_CARDS` category only | NA
FIXED | Fixed rate for a period of time | The period of time fixed. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations)
FLOATING | A floating rate is relatively fixed but still adjusts under specific circumstances | Details of the float parameters
MARKET_LINKED | A rate that is linked to a specific market, commodity or asset class | Details of the market linkage
PURCHASE | Specific rate applied to purchases from the account. This is expected to apply to products in the `CRED_AND_CHRG_CARDS` category only | NA
VARIABLE | A variable base rate for the product | NA



<a id="productlendingadjustmentratetypedoc"></a>
<ul><li id="tocSproductlendingadjustmentratetypedoc"><b>Lending Adjustment Rate Types</b></li></ul>

A product may have zero, one, or multiple adjustment rates that are taken to apply to a Base rate.

Value | Description | Use of additionalValue Field
-- | -- | --
BUNDLE_DISCOUNT_FIXED | A discount rate off the fixed rate obtained by originating a bundle instead of a standalone product | The name of the bundle
BUNDLE_DISCOUNT_VARIABLE | A discount rate off the variable rate obtained by originating a bundle instead of a standalone product | The name of the bundle
DISCOUNT | A specific discount rate that may be applied. A discount rate reduces the interest payable | Description of the discount rate that is applicable
INTRODUCTORY | An introductory discount that will expire after a set period | The period of time for the introductory rate. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations)
PENALTY | A specific penalty rate that may be applied. A penalty rate increases the interest payable | Description of the penalty rate that is applicable


<a id="bankingtermdepositaccountedoc"></a>
<h3 id="tocSbankingtermdepositaccountypedoc">Banking Term Deposit Account Types</h3>

Description of the usage of the maturityInstructions field as it applies to accounts.

|Value|Description|Use of additionalValue Field|
|-----|-----------|----------------------------|
|HOLD_ON_MATURITY|Funds are held in a facility or similar mechanism managed by the data holder for a period of time until the customer provides instructions or the maximum period of the hold has elapsed. Funds may be renewed or withdrawn upon instructions by the customer|NA|
