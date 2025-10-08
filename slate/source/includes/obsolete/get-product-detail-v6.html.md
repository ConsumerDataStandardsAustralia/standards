---
title: Get Product Detail v6

#language_tabs: # must be one of https://git.io/vQNgJ
#  - shell
#  - javascript

toc_footers:
  - <a href='../../index.html'>Consumer Data Standards</a>

includes:
  - footer

search: false
---

# Get Product Detail V6
This page documents the obsolete version 6 of the Get Product Detail endpoint.

Data Holders can retire this version after **August 10th 2026**. Data Recipients must update to newer versions prior to this date.


<h2 id="cdr-banking-api_get-product-detail">Get Product Detail</h2>
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

Obsolete versions: [v1](../../includes/obsolete/get-product-detail-v1.html), [v2](../../includes/obsolete/get-product-detail-v2.html), [v3](../../includes/obsolete/get-product-detail-v3.html), [v4](../../includes/obsolete/get-product-detail-v4.html), [v5](../../includes/obsolete/get-product-detail-v5.html).

<h3 id="cdr-banking-api_get-product-detail_endpoint-version">Endpoint Version</h3>
|   |  |
|---|--|
|Version|**6**

<h3 id="cdr-banking-api_get-product-detail_parameters">Parameters</h3>

|Name|In|Type|Required|Default|Description|
|---|---|---|---|---|---|
|productId|path|[BankingProductId](#schemacdr-banking-apibankingproductid)|mandatory||The _productId_ to obtain data for. _productId_ values are returned by product list endpoints.|
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
    "cardArt": [
      {
        "cardScheme": "AMEX",
        "cardType": "CHARGE",
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
        "feeType": "CASH_ADVANCE",
        "feeMethodUType": "fixedAmount",
        "fixedAmount": {
          "amount": "string"
        },
        "rateBased": {
          "rateType": "BALANCE",
          "rate": "string",
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
            "discountMethodUType": "fixedAmount",
            "fixedAmount": {
              "amount": "string"
            },
            "rateBased": {
              "rateType": "BALANCE",
              "rate": "string",
              "amountRange": {
                "discountMinimum": "string",
                "discountMaximum": "string"
              }
            },
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
        "lendingRateType": "FIXED",
        "rate": "string",
        "comparisonRate": "string",
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
    ]
  },
  "links": {
    "self": "string"
  },
  "meta": {}
}
```

<h3 id="cdr-banking-api_get-product-detail_responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[ResponseBankingProductByIdV6](#schemacdr-banking-apiresponsebankingproductbyidv6)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The following error codes **MUST** be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Missing Required Field](#error-400-field-missing)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li></ul>|[ResponseErrorListV2](#schemacdr-banking-apiresponseerrorlistv2)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The following error codes **MUST** be supported:<br/><ul class="error-code-list"><li>[404 - Unavailable Resource](#error-404-resource-unavailable)</li><li>[404 - Invalid Resource](#error-404-resource-invalid)</li></ul>|[ResponseErrorListV2](#schemacdr-banking-apiresponseerrorlistv2)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|The following error codes **MUST** be supported:<br/><ul class="error-code-list"><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|[ResponseErrorListV2](#schemacdr-banking-apiresponseerrorlistv2)|

<h3 id="cdr-banking-api_get-product-detail_response-headers">Response Headers</h3>

|Status|Header|Type|Required|Description|
|---|---|---|---|---|
|200|x-v|string|mandatory|The [payload version](#response-headers) that the endpoint has responded with.|

  
    <aside class="success">
This operation does not require authentication.
</aside>



<h2 class="schema-heading" id="cdr-banking-api-schemas">Schemas</h2>

<h3 class="schema-toc" id="cdr-banking-api_schemas_tocSrequestaccountidlistv1">RequestAccountIdListV1</h3>
<p id="tocSrequestaccountidlistv1" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api_schema-base_requestaccountidlist"></a>
  <a class="schema-anchor" id="schemacdr-banking-apirequestaccountidlistv1"></a>
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

<h3 id="cdr-banking-api_requestaccountidlistv1_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|data|object|mandatory||none|
|» accountIds|[[BankingAccountId](#schemacdr-banking-apibankingaccountid)]|mandatory||Array of _accountId_ values to obtain data for.|
|meta|[Meta](#schemacdr-banking-apimeta)|optional||none|

<h3 class="schema-toc" id="cdr-banking-api_schemas_tocSresponsebankingproductlistv3">ResponseBankingProductListV3</h3>
<p id="tocSresponsebankingproductlistv3" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api_schema-base_responsebankingproductlist"></a>
  <a class="schema-anchor" id="schemacdr-banking-apiresponsebankingproductlistv3"></a>
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
        "cardArt": [
          {
            "cardScheme": "AMEX",
            "cardType": "CHARGE",
            "title": "string",
            "imageUri": "string"
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

<h3 id="cdr-banking-api_responsebankingproductlistv3_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|data|object|mandatory||none|
|» products|[[BankingProductV5](#schemacdr-banking-apibankingproductv5)]|mandatory||The list of products returned. If the filter results in an empty set then this array may have no records.|
|links|[LinksPaginated](#schemacdr-banking-apilinkspaginated)|mandatory||none|
|meta|[MetaPaginated](#schemacdr-banking-apimetapaginated)|mandatory||none|

<h3 class="schema-toc" id="cdr-banking-api_schemas_tocSbankingproductv5">BankingProductV5</h3>
<p id="tocSbankingproductv5" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api_schema-base_bankingproduct"></a>
  <a class="schema-anchor" id="schemacdr-banking-apibankingproductv5"></a>
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
  "cardArt": [
    {
      "cardScheme": "AMEX",
      "cardType": "CHARGE",
      "title": "string",
      "imageUri": "string"
    }
  ]
}
```

<h3 id="cdr-banking-api_bankingproductv5_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|productId|[BankingProductId](#schemacdr-banking-apibankingproductid)|mandatory||A data holder-specific unique identifier for a Banking product. This identifier must be unique to a product but does not otherwise need to adhere to ID permanence guidelines.|
|effectiveFrom|[DateTimeString](#common-field-types)|optional||The date and time from which this product is effective (i.e. is available for origination). Used to enable the articulation of products to the regime before they are available for customers to originate.|
|effectiveTo|[DateTimeString](#common-field-types)|optional||The date and time at which this product will be retired and will no longer be offered. Used to enable the managed deprecation of products.|
|lastUpdated|[DateTimeString](#common-field-types)|mandatory||The last date and time that the information for this product was changed (or the creation date for the product if it has never been altered).|
|productCategory|[BankingProductCategory](#schemacdr-banking-apibankingproductcategory)|mandatory||The category to which a product or account belongs. See [here](#product-categories) for more details.|
|name|string|mandatory||The display name of the product.|
|description|string|mandatory||A description of the product.|
|brand|string|mandatory||A label of the brand for the product. Able to be used for filtering. For data holders with single brands this value is still required.|
|brandName|string|optional||An optional display name of the brand.|
|applicationUri|[URIString](#common-field-types)|optional||A link to an application web page where this product can be applied for.|
|isTailored|[Boolean](#common-field-types)|mandatory||Indicates whether the product is specifically tailored to a circumstance. In this case fees and prices are significantly negotiated depending on context. While all products are open to a degree of tailoring this flag indicates that tailoring is expected and thus that the provision of specific fees and rates is not applicable.|
|additionalInformation|[BankingProductAdditionalInformationV2](#schemacdr-banking-apibankingproductadditionalinformationv2)|optional||Object that contains links to additional information on specific topics.|
|cardArt|[[BankingProductCardArt](#schemacdr-banking-apibankingproductcardart)]|optional||Information about any cards available with the account.|

<h3 class="schema-toc" id="cdr-banking-api_schemas_tocSbankingproductcardart">BankingProductCardArt</h3>
<p id="tocSbankingproductcardart" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api_schema-base_bankingproductcardart"></a>
  <a class="schema-anchor" id="schemacdr-banking-apibankingproductcardart"></a>
</p>

```json
{
  "cardScheme": "AMEX",
  "cardType": "CHARGE",
  "title": "string",
  "imageUri": "string"
}
```

<h3 id="cdr-banking-api_bankingproductcardart_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|cardScheme|[Enum](#common-field-types)|mandatory||Card scheme available with the account.|
|cardType|[Enum](#common-field-types)|mandatory||Card type available with the account.|
|title|string|optional||Display label for the specific image.|
|imageUri|[URIString](#common-field-types)|mandatory||URI reference to a PNG, JPG or GIF image with proportions defined by ISO 7810 ID-1 and width no greater than 512 pixels. The URI reference may be a link or url-encoded data URI according to **[[RFC2397]](#nref-RFC2397)**.|

<h4 id="cdr-banking-api_bankingproductcardart_enumerated-values-main">Enumerated Values</h4>

|Property|Value|
|---|---|
|cardScheme|AMEX|
|cardScheme|EFTPOS|
|cardScheme|MASTERCARD|
|cardScheme|VISA|
|cardScheme|OTHER|
|cardType|CHARGE|
|cardType|CREDIT|
|cardType|DEBIT|

<h3 class="schema-toc" id="cdr-banking-api_schemas_tocSbankingproductadditionalinformationv2">BankingProductAdditionalInformationV2</h3>
<p id="tocSbankingproductadditionalinformationv2" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api_schema-base_bankingproductadditionalinformation"></a>
  <a class="schema-anchor" id="schemacdr-banking-apibankingproductadditionalinformationv2"></a>
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

<h3 id="cdr-banking-api_bankingproductadditionalinformationv2_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|overviewUri|[URIString](#common-field-types)|conditional||General overview of the product. Mandatory if _additionalOverviewUris_ includes one or more supporting documents.|
|termsUri|[URIString](#common-field-types)|conditional||Terms and conditions for the product. Mandatory if _additionalTermsUris_ includes one or more supporting documents.|
|eligibilityUri|[URIString](#common-field-types)|conditional||Eligibility rules and criteria for the product. Mandatory if _additionalEligibilityUris_ includes one or more supporting documents.|
|feesAndPricingUri|[URIString](#common-field-types)|conditional||Description of fees, pricing, discounts, exemptions and bonuses for the product. Mandatory if _additionalFeesAndPricingUris_ includes one or more supporting documents.|
|bundleUri|[URIString](#common-field-types)|conditional||Description of a bundle that this product can be part of. Mandatory if _additionalBundleUris_ includes one or more supporting documents.|
|additionalOverviewUris|[[BankingProductAdditionalInformationV2_additionalInformationUris](#schemacdr-banking-apibankingproductadditionalinformationv2_additionalinformationuris)]|optional||An array of additional general overviews for the product or features of the product, if applicable. To be treated as secondary documents to the _overviewUri_. Only to be used if there is a primary _overviewUri_.|
|additionalTermsUris|[[BankingProductAdditionalInformationV2_additionalInformationUris](#schemacdr-banking-apibankingproductadditionalinformationv2_additionalinformationuris)]|optional||An array of additional terms and conditions for the product, if applicable. To be treated as secondary documents to the _termsUri_. Only to be used if there is a primary _termsUri_.|
|additionalEligibilityUris|[[BankingProductAdditionalInformationV2_additionalInformationUris](#schemacdr-banking-apibankingproductadditionalinformationv2_additionalinformationuris)]|optional||An array of additional eligibility rules and criteria for the product, if applicable. To be treated as secondary documents to the _eligibilityUri_. Only to be used if there is a primary _eligibilityUri_.|
|additionalFeesAndPricingUris|[[BankingProductAdditionalInformationV2_additionalInformationUris](#schemacdr-banking-apibankingproductadditionalinformationv2_additionalinformationuris)]|optional||An array of additional fees, pricing, discounts, exemptions and bonuses for the product, if applicable. To be treated as secondary documents to the _feesAndPricingUri_. Only to be used if there is a primary _feesAndPricingUri_.|
|additionalBundleUris|[[BankingProductAdditionalInformationV2_additionalInformationUris](#schemacdr-banking-apibankingproductadditionalinformationv2_additionalinformationuris)]|optional||An array of additional bundles for the product, if applicable. To be treated as secondary documents to the _bundleUri_. Only to be used if there is a primary _bundleUri_.|

<h3 class="schema-toc" id="cdr-banking-api_schemas_tocSbankingproductadditionalinformationv2_additionalinformationuris">BankingProductAdditionalInformationV2_additionalInformationUris</h3>
<p id="tocSbankingproductadditionalinformationv2_additionalinformationuris" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api_schema-base_bankingproductadditionalinformationv2_additionalinformationuris"></a>
  <a class="schema-anchor" id="schemacdr-banking-apibankingproductadditionalinformationv2_additionalinformationuris"></a>
</p>

```json
{
  "description": "string",
  "additionalInfoUri": "string"
}
```

<h3 id="cdr-banking-api_bankingproductadditionalinformationv2_additionalinformationuris_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|description|string|optional||Display text providing more information about the document URI.|
|additionalInfoUri|[URIString](#common-field-types)|mandatory||The URI describing the additional information.|

<h3 class="schema-toc" id="cdr-banking-api_schemas_tocSresponsebankingproductbyidv6">ResponseBankingProductByIdV6</h3>
<p id="tocSresponsebankingproductbyidv6" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api_schema-base_responsebankingproductbyid"></a>
  <a class="schema-anchor" id="schemacdr-banking-apiresponsebankingproductbyidv6"></a>
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
    "cardArt": [
      {
        "cardScheme": "AMEX",
        "cardType": "CHARGE",
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
        "feeType": "CASH_ADVANCE",
        "feeMethodUType": "fixedAmount",
        "fixedAmount": {
          "amount": "string"
        },
        "rateBased": {
          "rateType": "BALANCE",
          "rate": "string",
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
            "discountMethodUType": "fixedAmount",
            "fixedAmount": {
              "amount": "string"
            },
            "rateBased": {
              "rateType": "BALANCE",
              "rate": "string",
              "amountRange": {
                "discountMinimum": "string",
                "discountMaximum": "string"
              }
            },
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
        "lendingRateType": "FIXED",
        "rate": "string",
        "comparisonRate": "string",
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
    ]
  },
  "links": {
    "self": "string"
  },
  "meta": {}
}
```

<h3 id="cdr-banking-api_responsebankingproductbyidv6_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|data|[BankingProductDetailV6](#schemacdr-banking-apibankingproductdetailv6)|mandatory||none|
|links|[Links](#schemacdr-banking-apilinks)|mandatory||none|
|meta|[Meta](#schemacdr-banking-apimeta)|optional||none|

<h3 class="schema-toc" id="cdr-banking-api_schemas_tocSbankingproductdetailv6">BankingProductDetailV6</h3>
<p id="tocSbankingproductdetailv6" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api_schema-base_bankingproductdetail"></a>
  <a class="schema-anchor" id="schemacdr-banking-apibankingproductdetailv6"></a>
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
  "cardArt": [
    {
      "cardScheme": "AMEX",
      "cardType": "CHARGE",
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
      "feeType": "CASH_ADVANCE",
      "feeMethodUType": "fixedAmount",
      "fixedAmount": {
        "amount": "string"
      },
      "rateBased": {
        "rateType": "BALANCE",
        "rate": "string",
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
          "discountMethodUType": "fixedAmount",
          "fixedAmount": {
            "amount": "string"
          },
          "rateBased": {
            "rateType": "BALANCE",
            "rate": "string",
            "amountRange": {
              "discountMinimum": "string",
              "discountMaximum": "string"
            }
          },
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
      "lendingRateType": "FIXED",
      "rate": "string",
      "comparisonRate": "string",
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
  ]
}
```

<h3 id="cdr-banking-api_bankingproductdetailv6_properties">Properties</h3>

*allOf*

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|*anonymous*|[BankingProductV5](#schemacdr-banking-apibankingproductv5)|mandatory||none|

*and*

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|*anonymous*|object|mandatory||none|
|» bundles|[[BankingProductBundle](#schemacdr-banking-apibankingproductbundle)]|optional||An array of bundles that this product participates in. Each bundle is described by free form information but also by a list of _productID_ values of the other products that are included in the bundle. It is assumed that the current product is included in the bundle also.|
|» features|[[BankingProductFeatureV3](#schemacdr-banking-apibankingproductfeaturev3)]|optional||Array of features and limitations of the product.|
|» constraints|[[BankingProductConstraintV3](#schemacdr-banking-apibankingproductconstraintv3)]|optional||Constraints on the application for the product such as minimum balances or limit thresholds.|
|» eligibility|[[BankingProductEligibilityV2](#schemacdr-banking-apibankingproducteligibilityv2)]|optional||Eligibility criteria for the product.|
|» fees|[[BankingProductFeeV2](#schemacdr-banking-apibankingproductfeev2)]|optional||Fees applicable to the product.|
|» depositRates|[[BankingProductDepositRateV2](#schemacdr-banking-apibankingproductdepositratev2)]|optional||Interest rates available for deposits.|
|» lendingRates|[[BankingProductLendingRateV3](#schemacdr-banking-apibankingproductlendingratev3)]|optional||Interest rates charged against lending balances.|

<h3 class="schema-toc" id="cdr-banking-api_schemas_tocSbankingproductbundle">BankingProductBundle</h3>
<p id="tocSbankingproductbundle" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api_schema-base_bankingproductbundle"></a>
  <a class="schema-anchor" id="schemacdr-banking-apibankingproductbundle"></a>
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

<h3 id="cdr-banking-api_bankingproductbundle_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|name|string|mandatory||Name of the bundle.|
|description|string|mandatory||Description of the bundle.|
|additionalInfo|string|optional||Display text providing more information on the bundle.|
|additionalInfoUri|[URIString](#common-field-types)|optional||Link to a web page with more information on the bundle criteria and benefits.|
|productIds|[[BankingProductId](#schemacdr-banking-apibankingproductid)]|optional||Array of _productID_ values for products included in the bundle that are available via the product endpoints. Note that this array is not intended to represent a comprehensive model of the products included in the bundle and some products available for the bundle may not be available via the product reference endpoints.|

<h3 class="schema-toc" id="cdr-banking-api_schemas_tocSbankingproductfeaturev3">BankingProductFeatureV3</h3>
<p id="tocSbankingproductfeaturev3" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api_schema-base_bankingproductfeature"></a>
  <a class="schema-anchor" id="schemacdr-banking-apibankingproductfeaturev3"></a>
</p>

```json
{
  "featureType": "ADDITIONAL_CARDS",
  "additionalValue": "string",
  "additionalInfo": "string",
  "additionalInfoUri": "string"
}
```

<h3 id="cdr-banking-api_bankingproductfeaturev3_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|featureType|[Enum](#common-field-types)|mandatory||The type of feature described. For further details, refer to [Product Feature Types](#tocSproductfeaturetypedoc).|
|additionalValue|string|conditional||Generic field containing additional information relevant to the [_featureType_](#tocSproductfeaturetypedoc) specified. Whether mandatory or not is dependent on the value of the [_featureType_](#tocSproductfeaturetypedoc).|
|additionalInfo|string|conditional||Display text providing more information on the feature. Mandatory if [_featureType_](#tocSproductfeaturetypedoc) is set to `OTHER`.|
|additionalInfoUri|[URIString](#common-field-types)|optional||Link to a web page with more information on this feature.|

<h4 id="cdr-banking-api_bankingproductfeaturev3_enumerated-values-main">Enumerated Values</h4>

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
|featureType|FUNDS_AVAILABLE_AFTER|
|featureType|GUARANTOR|
|featureType|INSTALMENT_PLAN|
|featureType|INSURANCE|
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

<h3 class="schema-toc" id="cdr-banking-api_schemas_tocSbankingproductconstraintv3">BankingProductConstraintV3</h3>
<p id="tocSbankingproductconstraintv3" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api_schema-base_bankingproductconstraint"></a>
  <a class="schema-anchor" id="schemacdr-banking-apibankingproductconstraintv3"></a>
</p>

```json
{
  "constraintType": "MAX_BALANCE",
  "additionalValue": "string",
  "additionalInfo": "string",
  "additionalInfoUri": "string"
}
```

<h3 id="cdr-banking-api_bankingproductconstraintv3_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|constraintType|[Enum](#common-field-types)|mandatory||The type of constraint described. For further details, refer to [Product Constraint Types](#tocSproductconstrainttypedoc).|
|additionalValue|string|conditional||Generic field containing additional information relevant to the [_constraintType_](#tocSproductconstrainttypedoc) specified. Whether mandatory or not is dependent on the value of [_constraintType_](#tocSproductconstrainttypedoc).|
|additionalInfo|string|conditional||Display text providing more information on the constraint. Mandatory if the [_constraintType_](#tocSproductconstrainttypedoc) value is `OTHER`.|
|additionalInfoUri|[URIString](#common-field-types)|optional||Link to a web page with more information on the constraint.|

<h4 id="cdr-banking-api_bankingproductconstraintv3_enumerated-values-main">Enumerated Values</h4>

|Property|Value|
|---|---|
|constraintType|MAX_BALANCE|
|constraintType|MAX_LIMIT|
|constraintType|MAX_LVR|
|constraintType|MIN_BALANCE|
|constraintType|MIN_LIMIT|
|constraintType|MIN_LVR|
|constraintType|OPENING_BALANCE|
|constraintType|OTHER|

<h3 class="schema-toc" id="cdr-banking-api_schemas_tocSbankingproducteligibilityv2">BankingProductEligibilityV2</h3>
<p id="tocSbankingproducteligibilityv2" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api_schema-base_bankingproducteligibility"></a>
  <a class="schema-anchor" id="schemacdr-banking-apibankingproducteligibilityv2"></a>
</p>

```json
{
  "eligibilityType": "BUSINESS",
  "additionalValue": "string",
  "additionalInfo": "string",
  "additionalInfoUri": "string"
}
```

<h3 id="cdr-banking-api_bankingproducteligibilityv2_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|eligibilityType|[Enum](#common-field-types)|mandatory||The type of eligibility criteria described. For further details, refer to [Product Eligibility Types](#tocSproducteligibilitytypedoc).|
|additionalValue|string|conditional||Generic field containing additional information relevant to the [_eligibilityType_](#tocSproducteligibilitytypedoc) specified. Whether mandatory or not is dependent on the value of [_eligibilityType_](#tocSproducteligibilitytypedoc).|
|additionalInfo|string|conditional||Display text providing more information on the [eligibility](#tocSproducteligibilitytypedoc) criteria. Mandatory if the field is set to `OTHER`.|
|additionalInfoUri|[URIString](#common-field-types)|optional||Link to a web page with more information on this eligibility criteria.|

<h4 id="cdr-banking-api_bankingproducteligibilityv2_enumerated-values-main">Enumerated Values</h4>

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

<h3 class="schema-toc" id="cdr-banking-api_schemas_tocSbankingproductfeev2">BankingProductFeeV2</h3>
<p id="tocSbankingproductfeev2" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api_schema-base_bankingproductfee"></a>
  <a class="schema-anchor" id="schemacdr-banking-apibankingproductfeev2"></a>
</p>

```json
{
  "name": "string",
  "feeType": "CASH_ADVANCE",
  "feeMethodUType": "fixedAmount",
  "fixedAmount": {
    "amount": "string"
  },
  "rateBased": {
    "rateType": "BALANCE",
    "rate": "string",
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
      "discountMethodUType": "fixedAmount",
      "fixedAmount": {
        "amount": "string"
      },
      "rateBased": {
        "rateType": "BALANCE",
        "rate": "string",
        "amountRange": {
          "discountMinimum": "string",
          "discountMaximum": "string"
        }
      },
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

<h3 id="cdr-banking-api_bankingproductfeev2_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|name|string|mandatory||Name of the fee.|
|feeType|[Enum](#common-field-types)|mandatory||The type of fee. For further details, refer to [Product Fee Types](#tocSproductfeetypedoc).|
|feeMethodUType|[Enum](#common-field-types)|mandatory||Reference to the applicable fee charging method structure.|
|fixedAmount|[BankingFeeAmount](#schemacdr-banking-apibankingfeeamount)|conditional||Mandatory if the _feeMethodUType_ value is `fixedAmount`. Where the fee is a specific amount.|
|rateBased|[BankingFeeRate](#schemacdr-banking-apibankingfeerate)|conditional||Mandatory if the _feeMethodUType_ value is `rateBased`. Where the fee is based on a type of rate.|
|variable|[BankingFeeRange](#schemacdr-banking-apibankingfeerange)|conditional||Mandatory if the _feeMethodUType_ value is `variable`. Where the amount or rate may not be known until the fee is incurred.|
|feeCap|[AmountString](#common-field-types)|optional||The cap amount if multiple occurrences of the fee are capped to a limit.|
|feeCapPeriod|[ExternalRef](#common-field-types)|optional||Specifies a duration over which multiple occurrences of the fee will be capped. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax).|
|currency|[CurrencyString](#common-field-types)|optional|`AUD`|The currency the fee will be charged in. Assumes `AUD` if absent.|
|additionalValue|string|conditional||Generic field containing additional information relevant to the [_feeType_](#tocSproductfeetypedoc) specified. Whether mandatory or not is dependent on the value of [_feeType_](#tocSproductfeetypedoc).|
|additionalInfo|string|conditional||Display text providing more information on the fee. Mandatory if the [_feeType_](#tocSproductfeetypedoc) value is `OTHER`.|
|additionalInfoUri|[URIString](#common-field-types)|optional||Link to a web page with more information on this fee.|
|discounts|[[BankingProductDiscountV2](#schemacdr-banking-apibankingproductdiscountv2)]|optional||An optional list of discounts to this fee that may be available.|

<h4 id="cdr-banking-api_bankingproductfeev2_enumerated-values-main">Enumerated Values</h4>

|Property|Value|
|---|---|
|feeType|CASH_ADVANCE|
|feeType|DEPOSIT|
|feeType|DISHONOUR|
|feeType|ENQUIRY|
|feeType|EVENT|
|feeType|EXIT|
|feeType|LATE_PAYMENT|
|feeType|OTHER|
|feeType|PAYMENT|
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

<h3 class="schema-toc" id="cdr-banking-api_schemas_tocSbankingfeeamount">BankingFeeAmount</h3>
<p id="tocSbankingfeeamount" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api_schema-base_bankingfeeamount"></a>
  <a class="schema-anchor" id="schemacdr-banking-apibankingfeeamount"></a>
</p>

```json
{
  "amount": "string"
}
```

<h3 id="cdr-banking-api_bankingfeeamount_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|amount|[AmountString](#common-field-types)|mandatory||The specific amount charged for the fee each time it is incurred.|

<h3 class="schema-toc" id="cdr-banking-api_schemas_tocSbankingfeerate">BankingFeeRate</h3>
<p id="tocSbankingfeerate" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api_schema-base_bankingfeerate"></a>
  <a class="schema-anchor" id="schemacdr-banking-apibankingfeerate"></a>
</p>

```json
{
  "rateType": "BALANCE",
  "rate": "string",
  "accrualFrequency": "string",
  "amountRange": {
    "feeMinimum": "string",
    "feeMaximum": "string"
  }
}
```

<h3 id="cdr-banking-api_bankingfeerate_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|rateType|[Enum](#common-field-types)|mandatory||Type of fee rate calculation.<ul><li>`BALANCE` A fee rate based on a balance</li><li>`INTEREST_ACCRUED` A fee rate based on interest accrued</li><li>`TRANSACTION` A fee rate based on a transaction.</li></ul>|
|rate|[RateString](#common-field-types)|mandatory||The fee rate calculated according to the _rateType_.|
|accrualFrequency|[ExternalRef](#common-field-types)|optional||The indicative frequency with which the fee is calculated on the account if applicable. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax).|
|amountRange|[BankingFeeRange](#schemacdr-banking-apibankingfeerange)|optional||A minimum or maximum fee amount where a specific fixed amount is not known until the fee is incurred.|

<h4 id="cdr-banking-api_bankingfeerate_enumerated-values-main">Enumerated Values</h4>

|Property|Value|
|---|---|
|rateType|BALANCE|
|rateType|INTEREST_ACCRUED|
|rateType|TRANSACTION|

<h3 class="schema-toc" id="cdr-banking-api_schemas_tocSbankingfeerange">BankingFeeRange</h3>
<p id="tocSbankingfeerange" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api_schema-base_bankingfeerange"></a>
  <a class="schema-anchor" id="schemacdr-banking-apibankingfeerange"></a>
</p>

```json
{
  "feeMinimum": "string",
  "feeMaximum": "string"
}
```

*A minimum or maximum fee amount where a specific fixed amount is not known until the fee is incurred.*

<h3 id="cdr-banking-api_bankingfeerange_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|feeMinimum|[AmountString](#common-field-types)|optional||The minimum fee that will be charged per occurrence.|
|feeMaximum|[AmountString](#common-field-types)|optional||The maximum fee that will be charged per occurrence.|

<h3 class="schema-toc" id="cdr-banking-api_schemas_tocSbankingproductdiscountv2">BankingProductDiscountV2</h3>
<p id="tocSbankingproductdiscountv2" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api_schema-base_bankingproductdiscount"></a>
  <a class="schema-anchor" id="schemacdr-banking-apibankingproductdiscountv2"></a>
</p>

```json
{
  "description": "string",
  "discountType": "BALANCE",
  "discountMethodUType": "fixedAmount",
  "fixedAmount": {
    "amount": "string"
  },
  "rateBased": {
    "rateType": "BALANCE",
    "rate": "string",
    "amountRange": {
      "discountMinimum": "string",
      "discountMaximum": "string"
    }
  },
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

*Note that the currency of the fee discount is expected to be the same as the currency of the fee itself.*

<h3 id="cdr-banking-api_bankingproductdiscountv2_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|description|string|mandatory||Description of the discount.|
|discountType|[Enum](#common-field-types)|mandatory||The type of discount. For further details, refer to [Product Discount Types](#tocSproductdiscounttypedoc).|
|discountMethodUType|[Enum](#common-field-types)|mandatory||Reference to the applicable fee discount method structure.|
|fixedAmount|[BankingFeeDiscountAmount](#schemacdr-banking-apibankingfeediscountamount)|conditional||Mandatory if the _discountMethodUType_ value is `fixedAmount`. Where the discount is a specific amount.|
|rateBased|[BankingFeeDiscountRate](#schemacdr-banking-apibankingfeediscountrate)|conditional||Mandatory if the _discountMethodUType_ value is `rateBased`. Where the discount is based on a type of rate. Unless noted in _additionalInfo_, assumes the application and calculation frequency are the same as the corresponding fee.|
|additionalValue|string|conditional||Generic field containing additional information relevant to the [_discountType_](#tocSproductdiscounttypedoc) specified. Whether mandatory or not is dependent on the value of [_discountType_](#tocSproductdiscounttypedoc).|
|additionalInfo|string|optional||Display text providing more information on the discount.|
|additionalInfoUri|[URIString](#common-field-types)|optional||Link to a web page with more information on this discount.|
|eligibility|[[BankingProductDiscountEligibility](#schemacdr-banking-apibankingproductdiscounteligibility)]|conditional||Eligibility constraints that apply to this discount. Mandatory if _discountType_ is `ELIGIBILITY_ONLY`.|

<h4 id="cdr-banking-api_bankingproductdiscountv2_enumerated-values-main">Enumerated Values</h4>

|Property|Value|
|---|---|
|discountType|BALANCE|
|discountType|DEPOSITS|
|discountType|ELIGIBILITY_ONLY|
|discountType|FEE_CAP|
|discountType|PAYMENTS|
|discountMethodUType|fixedAmount|
|discountMethodUType|rateBased|

<h3 class="schema-toc" id="cdr-banking-api_schemas_tocSbankingfeediscountamount">BankingFeeDiscountAmount</h3>
<p id="tocSbankingfeediscountamount" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api_schema-base_bankingfeediscountamount"></a>
  <a class="schema-anchor" id="schemacdr-banking-apibankingfeediscountamount"></a>
</p>

```json
{
  "amount": "string"
}
```

<h3 id="cdr-banking-api_bankingfeediscountamount_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|amount|[AmountString](#common-field-types)|mandatory||The specific amount discounted from the fee each time it is incurred.|

<h3 class="schema-toc" id="cdr-banking-api_schemas_tocSbankingfeediscountrate">BankingFeeDiscountRate</h3>
<p id="tocSbankingfeediscountrate" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api_schema-base_bankingfeediscountrate"></a>
  <a class="schema-anchor" id="schemacdr-banking-apibankingfeediscountrate"></a>
</p>

```json
{
  "rateType": "BALANCE",
  "rate": "string",
  "amountRange": {
    "discountMinimum": "string",
    "discountMaximum": "string"
  }
}
```

<h3 id="cdr-banking-api_bankingfeediscountrate_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|rateType|[Enum](#common-field-types)|mandatory||Type of fee rate discount calculation.<ul><li>`BALANCE` A fee rate discount based on a balance</li><li>`FEE` A fee rate discount based on the fee to which the discount is attached</li><li>`INTEREST_ACCRUED` A fee rate discount based on interest accrued</li><li>`TRANSACTION` A fee rate discount based on a transaction.</li></ul>|
|rate|[RateString](#common-field-types)|mandatory||The fee rate discount calculated according to the _rateType_.|
|amountRange|[BankingFeeDiscountRange](#schemacdr-banking-apibankingfeediscountrange)|optional||A minimum or maximum fee discount amount where a specific fixed amount is not known until the fee is incurred.|

<h4 id="cdr-banking-api_bankingfeediscountrate_enumerated-values-main">Enumerated Values</h4>

|Property|Value|
|---|---|
|rateType|BALANCE|
|rateType|FEE|
|rateType|INTEREST_ACCRUED|
|rateType|TRANSACTION|

<h3 class="schema-toc" id="cdr-banking-api_schemas_tocSbankingfeediscountrange">BankingFeeDiscountRange</h3>
<p id="tocSbankingfeediscountrange" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api_schema-base_bankingfeediscountrange"></a>
  <a class="schema-anchor" id="schemacdr-banking-apibankingfeediscountrange"></a>
</p>

```json
{
  "discountMinimum": "string",
  "discountMaximum": "string"
}
```

*A minimum or maximum fee discount amount where a specific fixed amount is not known until the fee is incurred.*

<h3 id="cdr-banking-api_bankingfeediscountrange_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|discountMinimum|[AmountString](#common-field-types)|optional||The minimum fee discount that will be applied per occurrence.|
|discountMaximum|[AmountString](#common-field-types)|optional||The maximum fee discount that will be applied per occurrence.|

<h3 class="schema-toc" id="cdr-banking-api_schemas_tocSbankingproductdiscounteligibility">BankingProductDiscountEligibility</h3>
<p id="tocSbankingproductdiscounteligibility" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api_schema-base_bankingproductdiscounteligibility"></a>
  <a class="schema-anchor" id="schemacdr-banking-apibankingproductdiscounteligibility"></a>
</p>

```json
{
  "discountEligibilityType": "BUSINESS",
  "additionalValue": "string",
  "additionalInfo": "string",
  "additionalInfoUri": "string"
}
```

<h3 id="cdr-banking-api_bankingproductdiscounteligibility_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|discountEligibilityType|[Enum](#common-field-types)|mandatory||The type of the specific eligibility constraint for a discount. For further details, refer to [Product Discount Eligibility Types](#tocSproductdiscounteligibilitydoc).|
|additionalValue|string|conditional||Generic field containing additional information relevant to the [_discountEligibilityType_](#tocSproductdiscounteligibilitydoc) specified. Whether mandatory or not is dependent on the value of [_discountEligibilityType_](#tocSproductdiscounteligibilitydoc).|
|additionalInfo|string|conditional||Display text providing more information on this eligibility constraint. Whether mandatory or not is dependent on the value of [_discountEligibilityType_](#tocSproductdiscounteligibilitydoc).|
|additionalInfoUri|[URIString](#common-field-types)|optional||Link to a web page with more information on this eligibility constraint.|

<h4 id="cdr-banking-api_bankingproductdiscounteligibility_enumerated-values-main">Enumerated Values</h4>

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

<h3 class="schema-toc" id="cdr-banking-api_schemas_tocSbankingproductdepositratev2">BankingProductDepositRateV2</h3>
<p id="tocSbankingproductdepositratev2" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api_schema-base_bankingproductdepositrate"></a>
  <a class="schema-anchor" id="schemacdr-banking-apibankingproductdepositratev2"></a>
</p>

```json
{
  "depositRateType": "VARIABLE",
  "rate": "string",
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

<h3 id="cdr-banking-api_bankingproductdepositratev2_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|depositRateType|[Enum](#common-field-types)|mandatory||The type of rate (`FIXED`, `VARIABLE`, `BONUS`, etc.) For further details, refer to [Product Deposit Rate Types](#tocSproductdepositratetypedoc).|
|rate|[RateString](#common-field-types)|mandatory||The rate to be applied.|
|calculationFrequency|[ExternalRef](#common-field-types)|optional||The period after which the rate is applied to the balance to calculate the amount due for the period. Calculation of the amount is often daily (as balances may change) but accumulated until the total amount is 'applied' to the account (see _applicationFrequency_). Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax).|
|applicationType|[Enum](#common-field-types)|mandatory||The type of approach used to apply the rate to the account.|
|applicationFrequency|[ExternalRef](#common-field-types)|conditional||The period after which the calculated amount(s) (see _calculationFrequency_) are 'applied' (i.e. debited or credited) to the account. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax). Mandatory if the _applicationType_ value is `PERIODIC`.|
|tiers|[[BankingProductRateTierV4](#schemacdr-banking-apibankingproductratetierv4)]|optional||Rate tiers applicable for this rate.|
|applicabilityConditions|[[BankingProductRateConditionV2](#schemacdr-banking-apibankingproductrateconditionv2)]|optional||Applicability conditions for the rate.|
|additionalValue|string|conditional||Generic field containing additional information relevant to the [_depositRateType_](#tocSproductdepositratetypedoc) specified. Whether mandatory or not is dependent on the value of [_depositRateType_](#tocSproductdepositratetypedoc).|
|additionalInfo|string|optional||Display text providing more information on the rate.|
|additionalInfoUri|[URIString](#common-field-types)|optional||Link to a web page with more information on this rate.|

<h4 id="cdr-banking-api_bankingproductdepositratev2_enumerated-values-main">Enumerated Values</h4>

|Property|Value|
|---|---|
|depositRateType|BONUS|
|depositRateType|BUNDLE_BONUS|
|depositRateType|FIXED|
|depositRateType|FLOATING|
|depositRateType|INTRODUCTORY|
|depositRateType|MARKET_LINKED|
|depositRateType|VARIABLE|
|applicationType|MATURITY|
|applicationType|PERIODIC|
|applicationType|UPFRONT|

<h3 class="schema-toc" id="cdr-banking-api_schemas_tocSbankingproductlendingratev3">BankingProductLendingRateV3</h3>
<p id="tocSbankingproductlendingratev3" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api_schema-base_bankingproductlendingrate"></a>
  <a class="schema-anchor" id="schemacdr-banking-apibankingproductlendingratev3"></a>
</p>

```json
{
  "lendingRateType": "FIXED",
  "rate": "string",
  "comparisonRate": "string",
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

<h3 id="cdr-banking-api_bankingproductlendingratev3_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|lendingRateType|[Enum](#common-field-types)|mandatory||The type of rate (`FIXED`, `VARIABLE`, etc.) For further details, refer to [Product Lending Rate Types](#tocSproductlendingratetypedoc).|
|rate|[RateString](#common-field-types)|mandatory||The rate to be applied.|
|comparisonRate|[RateString](#common-field-types)|optional||A comparison rate equivalent for this rate.|
|calculationFrequency|[ExternalRef](#common-field-types)|optional||The period after which the rate is applied to the balance to calculate the amount due for the period. Calculation of the amount is often daily (as balances may change) but accumulated until the total amount is 'applied' to the account (see _applicationFrequency_). Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax).|
|applicationType|[Enum](#common-field-types)|mandatory||The type of approach used to apply the rate to the account.|
|applicationFrequency|[ExternalRef](#common-field-types)|conditional||The period after which the calculated amount(s) (see _calculationFrequency_) are 'applied' (i.e. debited or credited) to the account. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax). Mandatory if the _applicationType_ value is `PERIODIC`.|
|interestPaymentDue|[Enum](#common-field-types)|optional||When loan payments are due to be paid within each period. The investment benefit of earlier payments affect the rate that can be offered.|
|repaymentType|[Enum](#common-field-types)|mandatory||Option in place for repayments.|
|loanPurpose|[Enum](#common-field-types)|mandatory||The reason for taking out the loan.|
|tiers|[[BankingProductRateTierV4](#schemacdr-banking-apibankingproductratetierv4)]|optional||Rate tiers applicable for this rate.|
|applicabilityConditions|[[BankingProductRateConditionV2](#schemacdr-banking-apibankingproductrateconditionv2)]|optional||Applicability conditions for the rate.|
|additionalValue|string|conditional||Generic field containing additional information relevant to the [_lendingRateType_](#tocSproductlendingratetypedoc) specified. Whether mandatory or not is dependent on the value of [_lendingRateType_](#tocSproductlendingratetypedoc).|
|additionalInfo|string|optional||Display text providing more information on the rate.|
|additionalInfoUri|[URIString](#common-field-types)|optional||Link to a web page with more information on this rate.|

<h4 id="cdr-banking-api_bankingproductlendingratev3_enumerated-values-main">Enumerated Values</h4>

|Property|Value|
|---|---|
|lendingRateType|BALANCE_TRANSFER|
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
|applicationType|MATURITY|
|applicationType|PERIODIC|
|applicationType|UPFRONT|
|interestPaymentDue|IN_ADVANCE|
|interestPaymentDue|IN_ARREARS|
|repaymentType|INTEREST_ONLY|
|repaymentType|OTHER|
|repaymentType|PRINCIPAL_AND_INTEREST|
|repaymentType|UNCONSTRAINED|
|loanPurpose|INVESTMENT|
|loanPurpose|OTHER|
|loanPurpose|OWNER_OCCUPIED|
|loanPurpose|UNCONSTRAINED|

<h3 class="schema-toc" id="cdr-banking-api_schemas_tocSbankingproductratetierv4">BankingProductRateTierV4</h3>
<p id="tocSbankingproductratetierv4" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api_schema-base_bankingproductratetier"></a>
  <a class="schema-anchor" id="schemacdr-banking-apibankingproductratetierv4"></a>
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

<h3 id="cdr-banking-api_bankingproductratetierv4_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|name|string|mandatory||A display name for the tier.|
|unitOfMeasure|[Enum](#common-field-types)|mandatory||The unit of measure that applies to the _minimumValue_ and _maximumValue_ values, e.g.,<ul><li>`DOLLAR` for a dollar amount (with values in AmountString format)<li>`PERCENT` for Loan-to-Value Ratio or LVR (with values in RateString format)<li>`MONTH` or `DAY` for a period representing a discrete number of months or days for a fixed-term deposit or loan (with values as a string containing a positive integer).</ul>|
|minimumValue|string|mandatory||The number of _unitOfMeasure_ units that form the lower bound of the tier. The tier should be inclusive of this value.|
|maximumValue|string|optional||The number of _unitOfMeasure_ units that form the upper bound of the tier or band. For a tier with a discrete value (as opposed to a range of values e.g., 1 month) this must be the same as _minimumValue_. Where this is the same as the _minimumValue_ value of the next-higher tier the referenced tier should be exclusive of this value. For example a term deposit of 2 months falls into the upper tier of the following tiers: (1 – 2 months, 2 – 3 months). If absent the tier's range has no upper bound.|
|rateApplicationMethod|[Enum](#common-field-types)|optional||The method used to calculate the amount to be applied using one or more tiers. A single rate may be applied to the entire balance or each applicable tier rate is applied to the portion of the balance that falls into that tier (referred to as 'bands' or 'steps').|
|applicabilityConditions|[[BankingProductRateConditionV2](#schemacdr-banking-apibankingproductrateconditionv2)]|optional||Applicability conditions for the rate tier.|
|additionalInfo|string|optional||Display text providing more information on the rate tier.|
|additionalInfoUri|[URIString](#common-field-types)|optional||Link to a web page with more information on this rate tier.|

<h4 id="cdr-banking-api_bankingproductratetierv4_enumerated-values-main">Enumerated Values</h4>

|Property|Value|
|---|---|
|unitOfMeasure|DAY|
|unitOfMeasure|DOLLAR|
|unitOfMeasure|MONTH|
|unitOfMeasure|PERCENT|
|rateApplicationMethod|PER_TIER|
|rateApplicationMethod|WHOLE_BALANCE|

<h3 class="schema-toc" id="cdr-banking-api_schemas_tocSbankingproductrateconditionv2">BankingProductRateConditionV2</h3>
<p id="tocSbankingproductrateconditionv2" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api_schema-base_bankingproductratecondition"></a>
  <a class="schema-anchor" id="schemacdr-banking-apibankingproductrateconditionv2"></a>
</p>

```json
{
  "rateApplicabilityType": "NEW_CUSTOMER",
  "additionalValue": "string",
  "additionalInfo": "string",
  "additionalInfoUri": "string"
}
```

*Defines a condition for the applicability of a rate.*

<h3 id="cdr-banking-api_bankingproductrateconditionv2_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|rateApplicabilityType|[Enum](#common-field-types)|mandatory||Category of applicability condition associated with the rate. For more information refer to [Rate and Tier Applicability Types](#tocSbankingproductrateconditiondoc).|
|additionalValue|string|conditional||Generic field containing additional information relevant to the _rateApplicabilityType_ specified. Whether mandatory or not is dependent on the value of [_rateApplicabilityType_](#tocSbankingproductrateconditiondoc).|
|additionalInfo|string|conditional||Display text providing more information on the condition. Mandatory if the [_rateApplicabilityType_](#tocSbankingproductrateconditiondoc) value is `OTHER`.|
|additionalInfoUri|[URIString](#common-field-types)|optional||Link to a web page with more information on this condition.|

<h4 id="cdr-banking-api_bankingproductrateconditionv2_enumerated-values-main">Enumerated Values</h4>

|Property|Value|
|---|---|
|rateApplicabilityType|MIN_DEPOSITS|
|rateApplicabilityType|MIN_DEPOSIT_AMOUNT|
|rateApplicabilityType|DEPOSIT_BALANCE_INCREASED|
|rateApplicabilityType|EXISTING_CUST|
|rateApplicabilityType|NEW_ACCOUNTS|
|rateApplicabilityType|NEW_CUSTOMER|
|rateApplicabilityType|NEW_CUSTOMER_TO_GROUP|
|rateApplicabilityType|ONLINE_ONLY|
|rateApplicabilityType|OTHER|
|rateApplicabilityType|MIN_PURCHASES|
|rateApplicabilityType|MAX_WITHDRAWALS|
|rateApplicabilityType|MAX_WITHDRAWAL_AMOUNT|

<h3 class="schema-toc" id="cdr-banking-api_schemas_tocSresponsebankingaccountlistv2">ResponseBankingAccountListV2</h3>
<p id="tocSresponsebankingaccountlistv2" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api_schema-base_responsebankingaccountlist"></a>
  <a class="schema-anchor" id="schemacdr-banking-apiresponsebankingaccountlistv2"></a>
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

<h3 id="cdr-banking-api_responsebankingaccountlistv2_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|data|object|mandatory||none|
|» accounts|[[BankingAccountV2](#schemacdr-banking-apibankingaccountv2)]|mandatory||The list of accounts returned. If the filter results in an empty set then this array may have no records.|
|links|[LinksPaginated](#schemacdr-banking-apilinkspaginated)|mandatory||none|
|meta|[MetaPaginated](#schemacdr-banking-apimetapaginated)|mandatory||none|

<h3 class="schema-toc" id="cdr-banking-api_schemas_tocSbankingaccountv2">BankingAccountV2</h3>
<p id="tocSbankingaccountv2" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api_schema-base_bankingaccount"></a>
  <a class="schema-anchor" id="schemacdr-banking-apibankingaccountv2"></a>
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

<h3 id="cdr-banking-api_bankingaccountv2_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|accountId|[BankingAccountId](#schemacdr-banking-apibankingaccountid)|mandatory||Unique identifier for the account.|
|creationDate|[DateString](#common-field-types)|optional||Date that the account was created (if known).|
|displayName|string|mandatory||The display name of the account as defined by the bank. This should not incorporate account numbers or PANs. If it does the values should be masked according to the rules of the [MaskedAccountString](#common-field-types) common type.|
|nickname|string|optional||A customer supplied nickname for the account.|
|openStatus|[Enum](#common-field-types)|optional|`OPEN`|Open or closed status for the account. If not present then `OPEN` is assumed.|
|isOwned|[Boolean](#common-field-types)|optional|`true`|Flag indicating that the customer associated with the authorisation is an owner of the account. Does not indicate sole ownership, however. If not present then `true` is assumed.|
|accountOwnership|[Enum](#common-field-types)|mandatory||Value indicating the number of customers that have ownership of the account, according to the data holder's definition of account ownership. Does not indicate that all account owners are eligible consumers.|
|maskedNumber|[MaskedAccountString](#common-field-types)|mandatory||A masked version of the account. Whether BSB/Account Number, Credit Card PAN or another number.|
|productCategory|[BankingProductCategory](#schemacdr-banking-apibankingproductcategory)|mandatory||The category to which a product or account belongs. See [here](#product-categories) for more details.|
|productName|string|mandatory||The unique identifier of the account as defined by the data holder (akin to model number for the account).|

<h4 id="cdr-banking-api_bankingaccountv2_enumerated-values-main">Enumerated Values</h4>

|Property|Value|
|---|---|
|openStatus|CLOSED|
|openStatus|OPEN|
|accountOwnership|UNKNOWN|
|accountOwnership|ONE_PARTY|
|accountOwnership|TWO_PARTY|
|accountOwnership|MANY_PARTY|
|accountOwnership|OTHER|

<h3 class="schema-toc" id="cdr-banking-api_schemas_tocSresponsebankingaccountbyidv4">ResponseBankingAccountByIdV4</h3>
<p id="tocSresponsebankingaccountbyidv4" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api_schema-base_responsebankingaccountbyid"></a>
  <a class="schema-anchor" id="schemacdr-banking-apiresponsebankingaccountbyidv4"></a>
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
    "specificAccountUType": "creditCard",
    "termDeposit": [
      {
        "lodgementDate": "string",
        "maturityDate": "string",
        "maturityAmount": "string",
        "maturityCurrency": "AUD",
        "maturityInstructions": "HOLD_ON_MATURITY"
      }
    ],
    "creditCard": {
      "minPaymentAmount": "string",
      "paymentDueAmount": "string",
      "paymentCurrency": "AUD",
      "paymentDueDate": "string"
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
      "repaymentType": "INTEREST_ONLY",
      "repaymentFrequency": "string"
    },
    "depositRate": "string",
    "lendingRate": "string",
    "depositRates": [
      {
        "depositRateType": "VARIABLE",
        "rate": "string",
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
        "lendingRateType": "FIXED",
        "rate": "string",
        "comparisonRate": "string",
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
    "features": [
      {
        "featureType": "ADDITIONAL_CARDS",
        "additionalValue": "string",
        "additionalInfo": "string",
        "additionalInfoUri": "string",
        "isActivated": "ACTIVATED"
      }
    ],
    "fees": [
      {
        "name": "string",
        "feeType": "CASH_ADVANCE",
        "feeMethodUType": "fixedAmount",
        "fixedAmount": {
          "amount": "string"
        },
        "rateBased": {
          "rateType": "BALANCE",
          "rate": "string",
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
            "discountMethodUType": "fixedAmount",
            "fixedAmount": {
              "amount": "string"
            },
            "rateBased": {
              "rateType": "BALANCE",
              "rate": "string",
              "amountRange": {
                "discountMinimum": "string",
                "discountMaximum": "string"
              }
            },
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

<h3 id="cdr-banking-api_responsebankingaccountbyidv4_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|data|[BankingAccountDetailV4](#schemacdr-banking-apibankingaccountdetailv4)|mandatory||none|
|links|[Links](#schemacdr-banking-apilinks)|mandatory||none|
|meta|[Meta](#schemacdr-banking-apimeta)|optional||none|

<h3 class="schema-toc" id="cdr-banking-api_schemas_tocSbankingaccountdetailv4">BankingAccountDetailV4</h3>
<p id="tocSbankingaccountdetailv4" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api_schema-base_bankingaccountdetail"></a>
  <a class="schema-anchor" id="schemacdr-banking-apibankingaccountdetailv4"></a>
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
  "specificAccountUType": "creditCard",
  "termDeposit": [
    {
      "lodgementDate": "string",
      "maturityDate": "string",
      "maturityAmount": "string",
      "maturityCurrency": "AUD",
      "maturityInstructions": "HOLD_ON_MATURITY"
    }
  ],
  "creditCard": {
    "minPaymentAmount": "string",
    "paymentDueAmount": "string",
    "paymentCurrency": "AUD",
    "paymentDueDate": "string"
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
    "repaymentType": "INTEREST_ONLY",
    "repaymentFrequency": "string"
  },
  "depositRate": "string",
  "lendingRate": "string",
  "depositRates": [
    {
      "depositRateType": "VARIABLE",
      "rate": "string",
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
      "lendingRateType": "FIXED",
      "rate": "string",
      "comparisonRate": "string",
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
  "features": [
    {
      "featureType": "ADDITIONAL_CARDS",
      "additionalValue": "string",
      "additionalInfo": "string",
      "additionalInfoUri": "string",
      "isActivated": "ACTIVATED"
    }
  ],
  "fees": [
    {
      "name": "string",
      "feeType": "CASH_ADVANCE",
      "feeMethodUType": "fixedAmount",
      "fixedAmount": {
        "amount": "string"
      },
      "rateBased": {
        "rateType": "BALANCE",
        "rate": "string",
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
          "discountMethodUType": "fixedAmount",
          "fixedAmount": {
            "amount": "string"
          },
          "rateBased": {
            "rateType": "BALANCE",
            "rate": "string",
            "amountRange": {
              "discountMinimum": "string",
              "discountMaximum": "string"
            }
          },
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

<h3 id="cdr-banking-api_bankingaccountdetailv4_properties">Properties</h3>

*allOf*

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|*anonymous*|[BankingAccountV2](#schemacdr-banking-apibankingaccountv2)|mandatory||none|

*and*

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|*anonymous*|object|mandatory||none|
|» bsb|string|optional||The unmasked BSB for the account. Is expected to be formatted as digits only with leading zeros included and no punctuation or spaces.|
|» accountNumber|string|optional||The unmasked account number for the account. Should not be supplied if the account number is a PAN requiring PCI compliance. Is expected to be formatted as digits only with leading zeros included and no punctuation or spaces.|
|» bundleName|string|optional||Optional field to indicate if this account is part of a bundle that is providing additional benefit to the customer.|
|» specificAccountUType|[Enum](#common-field-types)|optional||The type of structure to present account specific fields.|
|» termDeposit|[[BankingTermDepositAccount](#schemacdr-banking-apibankingtermdepositaccount)]|conditional||Mandatory if the _specificAccountUType_ value is `termDeposit`.|
|» creditCard|[BankingCreditCardAccount](#schemacdr-banking-apibankingcreditcardaccount)|conditional||Mandatory if the _specificAccountUType_ value is `creditCard`.|
|» loan|[BankingLoanAccountV3](#schemacdr-banking-apibankingloanaccountv3)|conditional||Mandatory if the _specificAccountUType_ value is `loan`.|
|» depositRate|[RateString](#common-field-types)|optional||Current rate to calculate interest earned being applied to deposit balances as it stands at the time of the API call.|
|» lendingRate|[RateString](#common-field-types)|optional||The current rate to calculate interest payable being applied to lending balances as it stands at the time of the API call.|
|» depositRates|[[BankingProductDepositRateV2](#schemacdr-banking-apibankingproductdepositratev2)]|optional||Fully described deposit rates for this account based on the equivalent structure in Product Reference.|
|» lendingRates|[[BankingProductLendingRateV3](#schemacdr-banking-apibankingproductlendingratev3)]|optional||Fully described lending rates for this account based on the equivalent structure in Product Reference.|
|» features|[allOf]|optional||Array of features of the account based on the equivalent structure in Product Reference with the following additional field.|

*allOf*

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|»» *anonymous*|[BankingProductFeatureV3](#schemacdr-banking-apibankingproductfeaturev3)|mandatory||none|

*and*

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|»» *anonymous*|object|mandatory||none|
|»»» isActivated|[Enum](#common-field-types)|optional|`UNKNOWN`|<ul><li>`ACTIVATED` if the feature has been activated by the customer or is a standard feature of the product</li><li>`NOT_ACTIVATED` if the feature is not activated but is available for activation</li><li>`UNKNOWN` or absent if the activation state is unknown.</ul>**Note:** This is an additional field appended to the feature structure defined in the Product Reference payload.|

*continued*

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|» fees|[[BankingProductFeeV2](#schemacdr-banking-apibankingproductfeev2)]|optional||Fees and charges applicable to the account based on the equivalent structure in Product Reference.|
|» addresses|[[CommonPhysicalAddress](#schemacdr-banking-apicommonphysicaladdress)]|optional||The addresses for the account to be used for correspondence.|

<h4 id="cdr-banking-api_bankingaccountdetailv4_enumerated-values-main">Enumerated Values</h4>

|Property|Value|
|---|---|
|specificAccountUType|creditCard|
|specificAccountUType|loan|
|specificAccountUType|termDeposit|
|isActivated|ACTIVATED|
|isActivated|NOT_ACTIVATED|
|isActivated|UNKNOWN|

<h3 class="schema-toc" id="cdr-banking-api_schemas_tocSbankingtermdepositaccount">BankingTermDepositAccount</h3>
<p id="tocSbankingtermdepositaccount" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api_schema-base_bankingtermdepositaccount"></a>
  <a class="schema-anchor" id="schemacdr-banking-apibankingtermdepositaccount"></a>
</p>

```json
{
  "lodgementDate": "string",
  "maturityDate": "string",
  "maturityAmount": "string",
  "maturityCurrency": "AUD",
  "maturityInstructions": "HOLD_ON_MATURITY"
}
```

<h3 id="cdr-banking-api_bankingtermdepositaccount_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|lodgementDate|[DateString](#common-field-types)|mandatory||The lodgement date of the original deposit.|
|maturityDate|[DateString](#common-field-types)|mandatory||Maturity date for the term deposit.|
|maturityAmount|[AmountString](#common-field-types)|optional||Amount to be paid upon maturity. If absent it implies the amount to paid is variable and cannot currently be calculated.|
|maturityCurrency|[CurrencyString](#common-field-types)|optional|`AUD`|If absent assumes `AUD`.|
|maturityInstructions|[Enum](#common-field-types)|mandatory||Current instructions on action to be taken at maturity. This includes default actions that may be specified in the terms and conditions for the product e.g., roll-over to the same term and frequency of interest payments.|

<h4 id="cdr-banking-api_bankingtermdepositaccount_enumerated-values-main">Enumerated Values</h4>

|Property|Value|
|---|---|
|maturityInstructions|HOLD_ON_MATURITY|
|maturityInstructions|PAID_OUT_AT_MATURITY|
|maturityInstructions|ROLLED_OVER|

<h3 class="schema-toc" id="cdr-banking-api_schemas_tocSbankingcreditcardaccount">BankingCreditCardAccount</h3>
<p id="tocSbankingcreditcardaccount" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api_schema-base_bankingcreditcardaccount"></a>
  <a class="schema-anchor" id="schemacdr-banking-apibankingcreditcardaccount"></a>
</p>

```json
{
  "minPaymentAmount": "string",
  "paymentDueAmount": "string",
  "paymentCurrency": "AUD",
  "paymentDueDate": "string"
}
```

<h3 id="cdr-banking-api_bankingcreditcardaccount_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|minPaymentAmount|[AmountString](#common-field-types)|mandatory||The minimum payment amount due for the next card payment.|
|paymentDueAmount|[AmountString](#common-field-types)|mandatory||The amount due for the next card payment.|
|paymentCurrency|[CurrencyString](#common-field-types)|optional|`AUD`|If absent assumes `AUD`.|
|paymentDueDate|[DateString](#common-field-types)|mandatory||Date that the next payment for the card is due.|

<h3 class="schema-toc" id="cdr-banking-api_schemas_tocSbankingloanaccountv3">BankingLoanAccountV3</h3>
<p id="tocSbankingloanaccountv3" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api_schema-base_bankingloanaccount"></a>
  <a class="schema-anchor" id="schemacdr-banking-apibankingloanaccountv3"></a>
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
  "repaymentType": "INTEREST_ONLY",
  "repaymentFrequency": "string"
}
```

<h3 id="cdr-banking-api_bankingloanaccountv3_properties">Properties</h3>

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
|offsetAccountIds|[[BankingAccountId](#schemacdr-banking-apibankingaccountid)]|optional||The _accountId_ values of the configured offset accounts attached to this loan. Only offset accounts that can be accessed under the current authorisation should be included. It is expected behaviour that _offsetAccountEnabled_ is set to `true` but the _offsetAccountIds_ field is absent or empty. This represents a situation where an offset account exists but details can not be accessed under the current authorisation.|
|repaymentType|[Enum](#common-field-types)|mandatory||Option in place for repayments.|
|repaymentFrequency|[ExternalRef](#common-field-types)|optional||The expected or required repayment frequency. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax).|

<h4 id="cdr-banking-api_bankingloanaccountv3_enumerated-values-main">Enumerated Values</h4>

|Property|Value|
|---|---|
|repaymentType|INTEREST_ONLY|
|repaymentType|OTHER|
|repaymentType|PRINCIPAL_AND_INTEREST|
|repaymentType|UNCONSTRAINED|

<h3 class="schema-toc" id="cdr-banking-api_schemas_tocSresponsebankingtransactionlist">ResponseBankingTransactionList</h3>
<p id="tocSresponsebankingtransactionlist" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api_schema-base_responsebankingtransactionlist"></a>
  <a class="schema-anchor" id="schemacdr-banking-apiresponsebankingtransactionlist"></a>
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

<h3 id="cdr-banking-api_responsebankingtransactionlist_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|data|object|mandatory||none|
|» transactions|[[BankingTransaction](#schemacdr-banking-apibankingtransaction)]|mandatory||none|
|links|[LinksPaginated](#schemacdr-banking-apilinkspaginated)|mandatory||none|
|meta|[MetaPaginatedTransaction](#schemacdr-banking-apimetapaginatedtransaction)|mandatory||none|

<h3 class="schema-toc" id="cdr-banking-api_schemas_tocSbankingtransaction">BankingTransaction</h3>
<p id="tocSbankingtransaction" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api_schema-base_bankingtransaction"></a>
  <a class="schema-anchor" id="schemacdr-banking-apibankingtransaction"></a>
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

<h3 id="cdr-banking-api_bankingtransaction_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|accountId|[BankingAccountId](#schemacdr-banking-apibankingaccountid)|mandatory||Unique identifier for the account.|
|transactionId|[BankingTransactionId](#schemacdr-banking-apibankingtransactionid)|conditional||Unique identifier for the transaction. This is mandatory (through hashing if necessary) unless there are specific and justifiable technical reasons why a transaction cannot be uniquely identified for a particular account type. Mandatory if the _isDetailAvailable_ value is `true`.|
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

<h4 id="cdr-banking-api_bankingtransaction_enumerated-values-main">Enumerated Values</h4>

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

<h3 class="schema-toc" id="cdr-banking-api_schemas_tocSresponsebankingtransactionbyidv2">ResponseBankingTransactionByIdV2</h3>
<p id="tocSresponsebankingtransactionbyidv2" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api_schema-base_responsebankingtransactionbyid"></a>
  <a class="schema-anchor" id="schemacdr-banking-apiresponsebankingtransactionbyidv2"></a>
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
      "extensionUType": "nppPayload",
      "nppPayload": {
        "extendedDescription": "string",
        "endToEndId": "string",
        "purposeCode": "string",
        "service": "X2P1",
        "serviceVersion": "03"
      }
    }
  },
  "links": {
    "self": "string"
  },
  "meta": {}
}
```

<h3 id="cdr-banking-api_responsebankingtransactionbyidv2_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|data|[BankingTransactionDetailV2](#schemacdr-banking-apibankingtransactiondetailv2)|mandatory||none|
|links|[Links](#schemacdr-banking-apilinks)|mandatory||none|
|meta|[Meta](#schemacdr-banking-apimeta)|optional||none|

<h3 class="schema-toc" id="cdr-banking-api_schemas_tocSbankingtransactiondetailv2">BankingTransactionDetailV2</h3>
<p id="tocSbankingtransactiondetailv2" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api_schema-base_bankingtransactiondetail"></a>
  <a class="schema-anchor" id="schemacdr-banking-apibankingtransactiondetailv2"></a>
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
    "extensionUType": "nppPayload",
    "nppPayload": {
      "extendedDescription": "string",
      "endToEndId": "string",
      "purposeCode": "string",
      "service": "X2P1",
      "serviceVersion": "03"
    }
  }
}
```

<h3 id="cdr-banking-api_bankingtransactiondetailv2_properties">Properties</h3>

*allOf*

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|*anonymous*|[BankingTransaction](#schemacdr-banking-apibankingtransaction)|mandatory||none|

*and*

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|*anonymous*|object|mandatory||none|
|» extendedData|object|mandatory||none|
|»» payer|string|conditional||Label of the originating payer. Mandatory for inbound payment.|
|»» payee|string|conditional||Label of the target PayID. Mandatory for an outbound payment. The name assigned to the BSB/Account Number or PayID (by the owner of the PayID).|
|»» extensionUType|[Enum](#common-field-types)|optional||Optional extended data specific to transactions. Currently extended data is supported for NPP service overlays.|
|»» nppPayload|object|conditional||Required if the _extensionUType_ value is `nppPayload`.|
|»»» extendedDescription|string|conditional||An extended string description. Required if the _extensionUType_ value is `nppPayload`.|
|»»» endToEndId|string|optional||An end to end ID for the payment created at initiation.|
|»»» purposeCode|[ExternalRef](#common-field-types)|optional||Purpose of the payment. Format is defined by the NPP standards for the NPP overlay services including Osko (X2P1).|
|»»» service|[NppPaymentService](#schemacdr-banking-apinpppaymentservice)|mandatory||Identifier of the applicable overlay service. The _service_ is used in conjunction with the _serviceVersion_. See [here](#npp-services) for more details.|
|»»» serviceVersion|[ExternalRef](#common-field-types)|mandatory||Two-digit NPP service overlay version with leading zero.|

<h4 id="cdr-banking-api_bankingtransactiondetailv2_enumerated-values-main">Enumerated Values</h4>

|Property|Value|
|---|---|
|extensionUType|nppPayload|

<h3 class="schema-toc" id="cdr-banking-api_schemas_tocSresponsebankingaccountsbalancelist">ResponseBankingAccountsBalanceList</h3>
<p id="tocSresponsebankingaccountsbalancelist" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api_schema-base_responsebankingaccountsbalancelist"></a>
  <a class="schema-anchor" id="schemacdr-banking-apiresponsebankingaccountsbalancelist"></a>
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

<h3 id="cdr-banking-api_responsebankingaccountsbalancelist_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|data|object|mandatory||none|
|» balances|[[BankingBalance](#schemacdr-banking-apibankingbalance)]|mandatory||The list of balances returned.|
|links|[LinksPaginated](#schemacdr-banking-apilinkspaginated)|mandatory||none|
|meta|[MetaPaginated](#schemacdr-banking-apimetapaginated)|mandatory||none|

<h3 class="schema-toc" id="cdr-banking-api_schemas_tocSresponsebankingaccountsbalancebyid">ResponseBankingAccountsBalanceById</h3>
<p id="tocSresponsebankingaccountsbalancebyid" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api_schema-base_responsebankingaccountsbalancebyid"></a>
  <a class="schema-anchor" id="schemacdr-banking-apiresponsebankingaccountsbalancebyid"></a>
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

<h3 id="cdr-banking-api_responsebankingaccountsbalancebyid_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|data|[BankingBalance](#schemacdr-banking-apibankingbalance)|mandatory||none|
|links|[Links](#schemacdr-banking-apilinks)|mandatory||none|
|meta|[Meta](#schemacdr-banking-apimeta)|optional||none|

<h3 class="schema-toc" id="cdr-banking-api_schemas_tocSbankingbalance">BankingBalance</h3>
<p id="tocSbankingbalance" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api_schema-base_bankingbalance"></a>
  <a class="schema-anchor" id="schemacdr-banking-apibankingbalance"></a>
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

<h3 id="cdr-banking-api_bankingbalance_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|accountId|[BankingAccountId](#schemacdr-banking-apibankingaccountid)|mandatory||Unique identifier for the account.|
|currentBalance|[AmountString](#common-field-types)|mandatory||The balance of the account at this time. Should align to the balance available via other channels such as Internet Banking. Assumed to be negative if the customer has money owing.|
|availableBalance|[AmountString](#common-field-types)|mandatory||Balance representing the amount of funds available for transfer. Assumed to be zero or positive.|
|creditLimit|[AmountString](#common-field-types)|optional||Object representing the maximum amount of credit that is available for this account. Assumed to be zero if absent.|
|amortisedLimit|[AmountString](#common-field-types)|optional||Object representing the available limit amortised according to payment schedule. Assumed to be zero if absent.|
|currency|[CurrencyString](#common-field-types)|optional|`AUD`|The currency for the balance amounts. If absent assumed to be `AUD`.|
|purses|[[BankingBalancePurse](#schemacdr-banking-apibankingbalancepurse)]|optional||Optional array of balances for the account in other currencies. Included to support accounts that support multi-currency purses such as Travel Cards.|

<h3 class="schema-toc" id="cdr-banking-api_schemas_tocSbankingbalancepurse">BankingBalancePurse</h3>
<p id="tocSbankingbalancepurse" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api_schema-base_bankingbalancepurse"></a>
  <a class="schema-anchor" id="schemacdr-banking-apibankingbalancepurse"></a>
</p>

```json
{
  "amount": "string",
  "currency": "string"
}
```

<h3 id="cdr-banking-api_bankingbalancepurse_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|amount|[AmountString](#common-field-types)|mandatory||The balance available for this additional currency purse.|
|currency|[CurrencyString](#common-field-types)|optional||The currency for the purse.|

<h3 class="schema-toc" id="cdr-banking-api_schemas_tocSresponsebankingpayeelistv2">ResponseBankingPayeeListV2</h3>
<p id="tocSresponsebankingpayeelistv2" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api_schema-base_responsebankingpayeelist"></a>
  <a class="schema-anchor" id="schemacdr-banking-apiresponsebankingpayeelistv2"></a>
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

<h3 id="cdr-banking-api_responsebankingpayeelistv2_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|data|object|mandatory||none|
|» payees|[[BankingPayeeV2](#schemacdr-banking-apibankingpayeev2)]|mandatory||The list of payees returned.|
|links|[LinksPaginated](#schemacdr-banking-apilinkspaginated)|mandatory||none|
|meta|[MetaPaginated](#schemacdr-banking-apimetapaginated)|mandatory||none|

<h3 class="schema-toc" id="cdr-banking-api_schemas_tocSresponsebankingpayeebyidv2">ResponseBankingPayeeByIdV2</h3>
<p id="tocSresponsebankingpayeebyidv2" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api_schema-base_responsebankingpayeebyid"></a>
  <a class="schema-anchor" id="schemacdr-banking-apiresponsebankingpayeebyidv2"></a>
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

<h3 id="cdr-banking-api_responsebankingpayeebyidv2_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|data|[BankingPayeeDetailV2](#schemacdr-banking-apibankingpayeedetailv2)|mandatory||none|
|links|[Links](#schemacdr-banking-apilinks)|mandatory||none|
|meta|[Meta](#schemacdr-banking-apimeta)|optional||none|

<h3 class="schema-toc" id="cdr-banking-api_schemas_tocSbankingpayeev2">BankingPayeeV2</h3>
<p id="tocSbankingpayeev2" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api_schema-base_bankingpayee"></a>
  <a class="schema-anchor" id="schemacdr-banking-apibankingpayeev2"></a>
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

<h3 id="cdr-banking-api_bankingpayeev2_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|payeeId|[BankingPayeeId](#schemacdr-banking-apibankingpayeeid)|mandatory||Unique identifier for the payee.|
|nickname|string|mandatory||The short display name of the payee as provided by the customer. Where a customer has not provided a nickname, a display name derived by the bank for the payee consistent with existing digital banking channels.|
|description|string|optional||A description of the payee provided by the customer.|
|type|[Enum](#common-field-types)|mandatory||The type of payee.<ul><li>`DOMESTIC` means a registered payee for domestic payments including NPP.<li>`INTERNATIONAL` means a registered payee for international payments.<li>`BILLER` means a registered payee for BPAY.<li>`DIGITAL_WALLET` means a registered payee for a bank's digital wallet.</ul>|
|creationDate|[DateString](#common-field-types)|optional||The date the payee was created by the customer.|

<h4 id="cdr-banking-api_bankingpayeev2_enumerated-values-main">Enumerated Values</h4>

|Property|Value|
|---|---|
|type|BILLER|
|type|DIGITAL_WALLET|
|type|DOMESTIC|
|type|INTERNATIONAL|

<h3 class="schema-toc" id="cdr-banking-api_schemas_tocSbankingpayeedetailv2">BankingPayeeDetailV2</h3>
<p id="tocSbankingpayeedetailv2" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api_schema-base_bankingpayeedetail"></a>
  <a class="schema-anchor" id="schemacdr-banking-apibankingpayeedetailv2"></a>
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

<h3 id="cdr-banking-api_bankingpayeedetailv2_properties">Properties</h3>

*allOf*

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|*anonymous*|[BankingPayeeV2](#schemacdr-banking-apibankingpayeev2)|mandatory||none|

*and*

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|*anonymous*|object|mandatory||none|
|» payeeUType|[Enum](#common-field-types)|mandatory||Type of object included that describes the payee in detail.|
|» biller|[BankingBillerPayee](#schemacdr-banking-apibankingbillerpayee)|conditional||none|
|» domestic|[BankingDomesticPayee](#schemacdr-banking-apibankingdomesticpayee)|conditional||none|
|» digitalWallet|[BankingDigitalWalletPayee](#schemacdr-banking-apibankingdigitalwalletpayee)|conditional||none|
|» international|[BankingInternationalPayee](#schemacdr-banking-apibankinginternationalpayee)|conditional||none|

<h4 id="cdr-banking-api_bankingpayeedetailv2_enumerated-values-main">Enumerated Values</h4>

|Property|Value|
|---|---|
|payeeUType|biller|
|payeeUType|digitalWallet|
|payeeUType|domestic|
|payeeUType|international|

<h3 class="schema-toc" id="cdr-banking-api_schemas_tocSbankingdomesticpayee">BankingDomesticPayee</h3>
<p id="tocSbankingdomesticpayee" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api_schema-base_bankingdomesticpayee"></a>
  <a class="schema-anchor" id="schemacdr-banking-apibankingdomesticpayee"></a>
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

<h3 id="cdr-banking-api_bankingdomesticpayee_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|payeeAccountUType|[Enum](#common-field-types)|mandatory||Type of account object included. Valid values are: <ul><li>`account` A standard Australian account defined by BSB/Account Number.<li>`card` A credit or charge card to pay to (note that PANs are masked).<li>`payId` A PayID recognised by NPP.</ul>|
|account|[BankingDomesticPayeeAccount](#schemacdr-banking-apibankingdomesticpayeeaccount)|conditional||none|
|card|[BankingDomesticPayeeCard](#schemacdr-banking-apibankingdomesticpayeecard)|conditional||none|
|payId|[BankingDomesticPayeePayId](#schemacdr-banking-apibankingdomesticpayeepayid)|conditional||none|

<h4 id="cdr-banking-api_bankingdomesticpayee_enumerated-values-main">Enumerated Values</h4>

|Property|Value|
|---|---|
|payeeAccountUType|account|
|payeeAccountUType|card|
|payeeAccountUType|payId|

<h3 class="schema-toc" id="cdr-banking-api_schemas_tocSbankingdomesticpayeeaccount">BankingDomesticPayeeAccount</h3>
<p id="tocSbankingdomesticpayeeaccount" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api_schema-base_bankingdomesticpayeeaccount"></a>
  <a class="schema-anchor" id="schemacdr-banking-apibankingdomesticpayeeaccount"></a>
</p>

```json
{
  "accountName": "string",
  "bsb": "string",
  "accountNumber": "string"
}
```

<h3 id="cdr-banking-api_bankingdomesticpayeeaccount_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|accountName|string|optional||Name of the account to pay to.|
|bsb|string|mandatory||BSB of the account to pay to.|
|accountNumber|string|mandatory||Number of the account to pay to.|

<h3 class="schema-toc" id="cdr-banking-api_schemas_tocSbankingdomesticpayeecard">BankingDomesticPayeeCard</h3>
<p id="tocSbankingdomesticpayeecard" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api_schema-base_bankingdomesticpayeecard"></a>
  <a class="schema-anchor" id="schemacdr-banking-apibankingdomesticpayeecard"></a>
</p>

```json
{
  "cardNumber": "string"
}
```

<h3 id="cdr-banking-api_bankingdomesticpayeecard_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|cardNumber|[MaskedPANString](#common-field-types)|mandatory||Name of the account to pay to.|

<h3 class="schema-toc" id="cdr-banking-api_schemas_tocSbankingdomesticpayeepayid">BankingDomesticPayeePayId</h3>
<p id="tocSbankingdomesticpayeepayid" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api_schema-base_bankingdomesticpayeepayid"></a>
  <a class="schema-anchor" id="schemacdr-banking-apibankingdomesticpayeepayid"></a>
</p>

```json
{
  "name": "string",
  "identifier": "string",
  "type": "ABN"
}
```

<h3 id="cdr-banking-api_bankingdomesticpayeepayid_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|name|string|optional||The name assigned to the PayID by the owner of the PayID.|
|identifier|string|mandatory||The identifier of the PayID (dependent on type).|
|type|[Enum](#common-field-types)|mandatory||The type of the PayID.|

<h4 id="cdr-banking-api_bankingdomesticpayeepayid_enumerated-values-main">Enumerated Values</h4>

|Property|Value|
|---|---|
|type|ABN|
|type|EMAIL|
|type|ORG_IDENTIFIER|
|type|TELEPHONE|

<h3 class="schema-toc" id="cdr-banking-api_schemas_tocSbankingbillerpayee">BankingBillerPayee</h3>
<p id="tocSbankingbillerpayee" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api_schema-base_bankingbillerpayee"></a>
  <a class="schema-anchor" id="schemacdr-banking-apibankingbillerpayee"></a>
</p>

```json
{
  "billerCode": "string",
  "crn": "string",
  "billerName": "string"
}
```

<h3 id="cdr-banking-api_bankingbillerpayee_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|billerCode|string|mandatory||BPAY Biller Code of the Biller.|
|crn|string|conditional||BPAY CRN of the Biller (if available).<br/>Where the CRN contains sensitive information, it should be masked in line with how the Data Holder currently displays account identifiers in their existing online banking channels. If the contents of the CRN match the format of a Credit Card PAN they should be masked according to the rules applicable for [MaskedPANString](#common-field-types). If the contents are otherwise sensitive, then it should be masked using the rules applicable for the [MaskedAccountString](#common-field-types) common type.|
|billerName|string|mandatory||Name of the Biller.|

<h3 class="schema-toc" id="cdr-banking-api_schemas_tocSbankinginternationalpayee">BankingInternationalPayee</h3>
<p id="tocSbankinginternationalpayee" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api_schema-base_bankinginternationalpayee"></a>
  <a class="schema-anchor" id="schemacdr-banking-apibankinginternationalpayee"></a>
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

<h3 id="cdr-banking-api_bankinginternationalpayee_properties">Properties</h3>

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

<h3 class="schema-toc" id="cdr-banking-api_schemas_tocSbankingdigitalwalletpayee">BankingDigitalWalletPayee</h3>
<p id="tocSbankingdigitalwalletpayee" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api_schema-base_bankingdigitalwalletpayee"></a>
  <a class="schema-anchor" id="schemacdr-banking-apibankingdigitalwalletpayee"></a>
</p>

```json
{
  "name": "string",
  "identifier": "string",
  "type": "EMAIL",
  "provider": "PAYPAL_AU"
}
```

<h3 id="cdr-banking-api_bankingdigitalwalletpayee_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|name|string|mandatory||The display name of the wallet as given by the customer, else a default value defined by the data holder.|
|identifier|string|mandatory||The identifier of the digital wallet (dependent on type).|
|type|[Enum](#common-field-types)|mandatory||The type of the digital wallet identifier.|
|provider|[Enum](#common-field-types)|mandatory||The provider of the digital wallet.|

<h4 id="cdr-banking-api_bankingdigitalwalletpayee_enumerated-values-main">Enumerated Values</h4>

|Property|Value|
|---|---|
|type|EMAIL|
|type|CONTACT_NAME|
|type|TELEPHONE|
|provider|PAYPAL_AU|
|provider|OTHER|

<h3 class="schema-toc" id="cdr-banking-api_schemas_tocSresponsebankingdirectdebitauthorisationlist">ResponseBankingDirectDebitAuthorisationList</h3>
<p id="tocSresponsebankingdirectdebitauthorisationlist" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api_schema-base_responsebankingdirectdebitauthorisationlist"></a>
  <a class="schema-anchor" id="schemacdr-banking-apiresponsebankingdirectdebitauthorisationlist"></a>
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

<h3 id="cdr-banking-api_responsebankingdirectdebitauthorisationlist_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|data|object|mandatory||none|
|» directDebitAuthorisations|[[BankingDirectDebit](#schemacdr-banking-apibankingdirectdebit)]|mandatory||The list of authorisations returned.|
|links|[LinksPaginated](#schemacdr-banking-apilinkspaginated)|mandatory||none|
|meta|[MetaPaginated](#schemacdr-banking-apimetapaginated)|mandatory||none|

<h3 class="schema-toc" id="cdr-banking-api_schemas_tocSbankingdirectdebit">BankingDirectDebit</h3>
<p id="tocSbankingdirectdebit" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api_schema-base_bankingdirectdebit"></a>
  <a class="schema-anchor" id="schemacdr-banking-apibankingdirectdebit"></a>
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

<h3 id="cdr-banking-api_bankingdirectdebit_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|accountId|[BankingAccountId](#schemacdr-banking-apibankingaccountid)|mandatory||Unique identifier for the account.|
|authorisedEntity|[BankingAuthorisedEntity](#schemacdr-banking-apibankingauthorisedentity)|mandatory||none|
|lastDebitDateTime|[DateTimeString](#common-field-types)|optional||The date and time of the last debit executed under this authorisation.|
|lastDebitAmount|[AmountString](#common-field-types)|optional||The amount of the last debit executed under this authorisation.|

<h3 class="schema-toc" id="cdr-banking-api_schemas_tocSbankingauthorisedentity">BankingAuthorisedEntity</h3>
<p id="tocSbankingauthorisedentity" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api_schema-base_bankingauthorisedentity"></a>
  <a class="schema-anchor" id="schemacdr-banking-apibankingauthorisedentity"></a>
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

<h3 id="cdr-banking-api_bankingauthorisedentity_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|description|string|optional||Description of the authorised entity derived from previously executed direct debits.|
|financialInstitution|string|conditional||Name of the financial institution through which the direct debit will be executed. Is required unless the payment is made via a credit card scheme.|
|abn|string|optional||Australian Business Number for the authorised entity.|
|acn|string|optional||Australian Company Number for the authorised entity.|
|arbn|string|optional||Australian Registered Body Number for the authorised entity.|

<h3 class="schema-toc" id="cdr-banking-api_schemas_tocSresponsebankingscheduledpaymentslistv2">ResponseBankingScheduledPaymentsListV2</h3>
<p id="tocSresponsebankingscheduledpaymentslistv2" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api_schema-base_responsebankingscheduledpaymentslist"></a>
  <a class="schema-anchor" id="schemacdr-banking-apiresponsebankingscheduledpaymentslistv2"></a>
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

<h3 id="cdr-banking-api_responsebankingscheduledpaymentslistv2_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|data|object|mandatory||none|
|» scheduledPayments|[[BankingScheduledPaymentV2](#schemacdr-banking-apibankingscheduledpaymentv2)]|mandatory||The list of scheduled payments to return.|
|links|[LinksPaginated](#schemacdr-banking-apilinkspaginated)|mandatory||none|
|meta|[MetaPaginated](#schemacdr-banking-apimetapaginated)|mandatory||none|

<h3 class="schema-toc" id="cdr-banking-api_schemas_tocSbankingscheduledpaymentv2">BankingScheduledPaymentV2</h3>
<p id="tocSbankingscheduledpaymentv2" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api_schema-base_bankingscheduledpayment"></a>
  <a class="schema-anchor" id="schemacdr-banking-apibankingscheduledpaymentv2"></a>
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

<h3 id="cdr-banking-api_bankingscheduledpaymentv2_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|scheduledPaymentId|[BankingScheduledPaymentId](#schemacdr-banking-apibankingscheduledpaymentid)|mandatory||Unique identifier for the scheduled payment.|
|nickname|string|optional||The short display name of the scheduled payment as provided by the customer if provided. Where a customer has not provided a nickname, a display name derived by the bank for the scheduled payment should be provided that is consistent with existing digital banking channels.|
|payerReference|string|mandatory||The reference for the transaction that will be used by the originating institution for the purposes of constructing a statement narrative on the payer’s account. Empty string if no data provided.|
|payeeReference|string|conditional||The reference for the transaction, if applicable, that will be provided by the originating institution for all payments in the payment set. Empty string if no data provided.|
|status|[Enum](#common-field-types)|mandatory||Indicates whether the schedule is currently active. The value `SKIP` is equivalent to `ACTIVE` except that the customer has requested the next normal occurrence to be skipped.|
|from|[BankingScheduledPaymentFrom](#schemacdr-banking-apibankingscheduledpaymentfrom)|mandatory||Object containing details of the source of the payment. Currently only specifies an _accountId_ but provided as an object to facilitate future extensibility and consistency with the _to_ object.|
|paymentSet|[[BankingScheduledPaymentSetV2](#schemacdr-banking-apibankingscheduledpaymentsetv2)]|mandatory||[The set of payment amounts and destination accounts for this payment accommodating multi-part payments. A single entry indicates a simple payment with one destination account. Must have at least one entry.]|
|recurrence|[BankingScheduledPaymentRecurrence](#schemacdr-banking-apibankingscheduledpaymentrecurrence)|mandatory||Object containing the detail of the schedule for the payment.|

<h4 id="cdr-banking-api_bankingscheduledpaymentv2_enumerated-values-main">Enumerated Values</h4>

|Property|Value|
|---|---|
|status|ACTIVE|
|status|INACTIVE|
|status|SKIP|

<h3 class="schema-toc" id="cdr-banking-api_schemas_tocSbankingscheduledpaymentsetv2">BankingScheduledPaymentSetV2</h3>
<p id="tocSbankingscheduledpaymentsetv2" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api_schema-base_bankingscheduledpaymentset"></a>
  <a class="schema-anchor" id="schemacdr-banking-apibankingscheduledpaymentsetv2"></a>
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

<h3 id="cdr-banking-api_bankingscheduledpaymentsetv2_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|to|[BankingScheduledPaymentToV2](#schemacdr-banking-apibankingscheduledpaymenttov2)|mandatory||Object containing details of the destination of the payment. Used to specify a variety of payment destination types.|
|isAmountCalculated|[Boolean](#common-field-types)|optional|`false`|Flag indicating whether the amount of the payment is calculated based on the context of the event. For instance a payment to reduce the balance of a credit card to zero. If absent then `false` is assumed.|
|amount|[AmountString](#common-field-types)|conditional||The amount of the next payment if known. Mandatory unless the _isAmountCalculated_ field is set to `true`. Must be zero or positive if present.|
|currency|[CurrencyString](#common-field-types)|optional|`AUD`|The currency for the payment. `AUD` assumed if not present.|

<h3 class="schema-toc" id="cdr-banking-api_schemas_tocSbankingscheduledpaymenttov2">BankingScheduledPaymentToV2</h3>
<p id="tocSbankingscheduledpaymenttov2" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api_schema-base_bankingscheduledpaymentto"></a>
  <a class="schema-anchor" id="schemacdr-banking-apibankingscheduledpaymenttov2"></a>
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

<h3 id="cdr-banking-api_bankingscheduledpaymenttov2_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|toUType|[Enum](#common-field-types)|mandatory||The type of object provided that specifies the destination of the funds for the payment.|
|accountId|[BankingAccountId](#schemacdr-banking-apibankingaccountid)|conditional||Present if _toUType_ is set to `accountId`. Indicates that the payment is to another account that is accessible under the current consent.|
|payeeId|[BankingPayeeId](#schemacdr-banking-apibankingpayeeid)|conditional||Present if _toUType_ is set to `payeeId`. Indicates that the payment is to registered payee that can be accessed using the payee endpoint. If the Bank Payees scope has not been consented to then a _payeeId_ should not be provided and the full payee details should be provided instead.|
|nickname|string|conditional||The short display name of the payee as provided by the customer unless _toUType_ is set to `payeeId`. Where a customer has not provided a nickname, a display name derived by the bank for payee should be provided that is consistent with existing digital banking channels.|
|payeeReference|string|conditional||The reference for the transaction, if applicable, that will be provided by the originating institution for the specific payment. If not empty, it overrides the value provided at the BankingScheduledPayment level.|
|digitalWallet|[BankingDigitalWalletPayee](#schemacdr-banking-apibankingdigitalwalletpayee)|conditional||none|
|domestic|[BankingDomesticPayee](#schemacdr-banking-apibankingdomesticpayee)|conditional||none|
|biller|[BankingBillerPayee](#schemacdr-banking-apibankingbillerpayee)|conditional||none|
|international|[BankingInternationalPayee](#schemacdr-banking-apibankinginternationalpayee)|conditional||none|

<h4 id="cdr-banking-api_bankingscheduledpaymenttov2_enumerated-values-main">Enumerated Values</h4>

|Property|Value|
|---|---|
|toUType|accountId|
|toUType|biller|
|toUType|digitalWallet|
|toUType|domestic|
|toUType|international|
|toUType|payeeId|

<h3 class="schema-toc" id="cdr-banking-api_schemas_tocSbankingscheduledpaymentfrom">BankingScheduledPaymentFrom</h3>
<p id="tocSbankingscheduledpaymentfrom" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api_schema-base_bankingscheduledpaymentfrom"></a>
  <a class="schema-anchor" id="schemacdr-banking-apibankingscheduledpaymentfrom"></a>
</p>

```json
{
  "accountId": "string"
}
```

*Object containing details of the source of the payment. Currently only specifies an _accountId_ but provided as an object to facilitate future extensibility and consistency with the _to_ object.*

<h3 id="cdr-banking-api_bankingscheduledpaymentfrom_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|accountId|[BankingAccountId](#schemacdr-banking-apibankingaccountid)|mandatory||Unique identifier for the account.|

<h3 class="schema-toc" id="cdr-banking-api_schemas_tocSbankingscheduledpaymentrecurrence">BankingScheduledPaymentRecurrence</h3>
<p id="tocSbankingscheduledpaymentrecurrence" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api_schema-base_bankingscheduledpaymentrecurrence"></a>
  <a class="schema-anchor" id="schemacdr-banking-apibankingscheduledpaymentrecurrence"></a>
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

<h3 id="cdr-banking-api_bankingscheduledpaymentrecurrence_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|nextPaymentDate|[DateString](#common-field-types)|optional||The date of the next payment under the recurrence schedule.|
|recurrenceUType|[Enum](#common-field-types)|mandatory||The type of recurrence used to define the schedule.|
|onceOff|[BankingScheduledPaymentRecurrenceOnceOff](#schemacdr-banking-apibankingscheduledpaymentrecurrenceonceoff)|conditional||Indicates that the payment is a once off payment on a specific future date. Mandatory if _recurrenceUType_ is set to `onceOff`.|
|intervalSchedule|[BankingScheduledPaymentRecurrenceIntervalSchedule](#schemacdr-banking-apibankingscheduledpaymentrecurrenceintervalschedule)|conditional||Indicates that the schedule of payments is defined by a series of intervals. Mandatory if _recurrenceUType_ is set to `intervalSchedule`.|
|lastWeekDay|[BankingScheduledPaymentRecurrenceLastWeekday](#schemacdr-banking-apibankingscheduledpaymentrecurrencelastweekday)|conditional||Indicates that the schedule of payments is defined according to the last occurrence of a specific weekday in an interval. Mandatory if _recurrenceUType_ is set to `lastWeekDay`.|
|eventBased|[BankingScheduledPaymentRecurrenceEventBased](#schemacdr-banking-apibankingscheduledpaymentrecurrenceeventbased)|conditional||Indicates that the schedule of payments is defined according to an external event that cannot be predetermined. Mandatory if _recurrenceUType_ is set to `eventBased`.|

<h4 id="cdr-banking-api_bankingscheduledpaymentrecurrence_enumerated-values-main">Enumerated Values</h4>

|Property|Value|
|---|---|
|recurrenceUType|eventBased|
|recurrenceUType|intervalSchedule|
|recurrenceUType|lastWeekDay|
|recurrenceUType|onceOff|

<h3 class="schema-toc" id="cdr-banking-api_schemas_tocSbankingscheduledpaymentrecurrenceonceoff">BankingScheduledPaymentRecurrenceOnceOff</h3>
<p id="tocSbankingscheduledpaymentrecurrenceonceoff" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api_schema-base_bankingscheduledpaymentrecurrenceonceoff"></a>
  <a class="schema-anchor" id="schemacdr-banking-apibankingscheduledpaymentrecurrenceonceoff"></a>
</p>

```json
{
  "paymentDate": "string"
}
```

*Indicates that the payment is a once off payment on a specific future date. Mandatory if _recurrenceUType_ is set to `onceOff`.*

<h3 id="cdr-banking-api_bankingscheduledpaymentrecurrenceonceoff_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|paymentDate|[DateString](#common-field-types)|mandatory||The scheduled date for the once off payment.|

<h3 class="schema-toc" id="cdr-banking-api_schemas_tocSbankingscheduledpaymentrecurrenceintervalschedule">BankingScheduledPaymentRecurrenceIntervalSchedule</h3>
<p id="tocSbankingscheduledpaymentrecurrenceintervalschedule" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api_schema-base_bankingscheduledpaymentrecurrenceintervalschedule"></a>
  <a class="schema-anchor" id="schemacdr-banking-apibankingscheduledpaymentrecurrenceintervalschedule"></a>
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

<h3 id="cdr-banking-api_bankingscheduledpaymentrecurrenceintervalschedule_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|finalPaymentDate|[DateString](#common-field-types)|optional||The limit date after which no more payments should be made using this schedule. If both _finalPaymentDate_ and _paymentsRemaining_ are present then payments will stop according to the most constraining value. If neither field is present the payments will continue indefinitely.|
|paymentsRemaining|[PositiveInteger](#common-field-types)|optional||Indicates the number of payments remaining in the schedule. If both _finalPaymentDate_ and _paymentsRemaining_ are present then payments will stop according to the most constraining value, If neither field is present the payments will continue indefinitely.|
|nonBusinessDayTreatment|[Enum](#common-field-types)|optional|`ON`|Enumerated field giving the treatment where a scheduled payment date is not a business day. If absent assumed to be `ON`.<ul><li>`AFTER` - If a scheduled payment date is a non-business day the payment will be made on the first business day after the scheduled payment date.<li>`BEFORE` - If a scheduled payment date is a non-business day the payment will be made on the first business day before the scheduled payment date.<li>`ON` - If a scheduled payment date is a non-business day the payment will be made on that day regardless.<li>`ONLY` - Payments only occur on business days. If a scheduled payment date is a non-business day the payment will be ignored.</ul>|
|intervals|[[BankingScheduledPaymentInterval](#schemacdr-banking-apibankingscheduledpaymentinterval)]|mandatory||An array of interval objects defining the payment schedule. Each entry in the array is additive, in that it adds payments to the overall payment schedule. If multiple intervals result in a payment on the same day then only one payment will be made. Must have at least one entry.|

<h4 id="cdr-banking-api_bankingscheduledpaymentrecurrenceintervalschedule_enumerated-values-main">Enumerated Values</h4>

|Property|Value|
|---|---|
|nonBusinessDayTreatment|AFTER|
|nonBusinessDayTreatment|BEFORE|
|nonBusinessDayTreatment|ON|
|nonBusinessDayTreatment|ONLY|

<h3 class="schema-toc" id="cdr-banking-api_schemas_tocSbankingscheduledpaymentinterval">BankingScheduledPaymentInterval</h3>
<p id="tocSbankingscheduledpaymentinterval" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api_schema-base_bankingscheduledpaymentinterval"></a>
  <a class="schema-anchor" id="schemacdr-banking-apibankingscheduledpaymentinterval"></a>
</p>

```json
{
  "interval": "string",
  "dayInInterval": "string"
}
```

<h3 id="cdr-banking-api_bankingscheduledpaymentinterval_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|interval|[ExternalRef](#common-field-types)|mandatory||An interval for the payment. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax) with components less than a day in length ignored. This duration defines the period between payments starting with _nextPaymentDate_.|
|dayInInterval|[ExternalRef](#common-field-types)|optional||Uses an interval to define the ordinal day within the interval defined by the interval field on which the payment occurs. If the resulting duration is 0 days in length or larger than the number of days in the interval then the payment will occur on the last day of the interval. A duration of 1 day indicates the first day of the interval. If absent the assumed value is `P1D`. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax) with components less than a day in length ignored. The first day of a week is considered to be Monday.|

<h3 class="schema-toc" id="cdr-banking-api_schemas_tocSbankingscheduledpaymentrecurrencelastweekday">BankingScheduledPaymentRecurrenceLastWeekday</h3>
<p id="tocSbankingscheduledpaymentrecurrencelastweekday" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api_schema-base_bankingscheduledpaymentrecurrencelastweekday"></a>
  <a class="schema-anchor" id="schemacdr-banking-apibankingscheduledpaymentrecurrencelastweekday"></a>
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

<h3 id="cdr-banking-api_bankingscheduledpaymentrecurrencelastweekday_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|finalPaymentDate|[DateString](#common-field-types)|optional||The limit date after which no more payments should be made using this schedule. If both _finalPaymentDate_ and _paymentsRemaining_ are present then payments will stop according to the most constraining value. If neither field is present the payments will continue indefinitely.|
|paymentsRemaining|[PositiveInteger](#common-field-types)|optional||Indicates the number of payments remaining in the schedule. If both _finalPaymentDate_ and _paymentsRemaining_ are present then payments will stop according to the most constraining value. If neither field is present the payments will continue indefinitely.|
|interval|[ExternalRef](#common-field-types)|mandatory||The interval for the payment. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax) with components less than a day in length ignored. This duration defines the period between payments starting with _nextPaymentDate_.|
|lastWeekDay|[Enum](#common-field-types)|mandatory||The weekDay specified. The payment will occur on the last occurrence of this weekday in the interval.|
|nonBusinessDayTreatment|[Enum](#common-field-types)|optional|`ON`|Enumerated field giving the treatment where a scheduled payment date is not a business day. If absent assumed to be `ON`.<ul><li>`AFTER` - If a scheduled payment date is a non-business day the payment will be made on the first business day after the scheduled payment date.<li>`BEFORE` - If a scheduled payment date is a non-business day the payment will be made on the first business day before the scheduled payment date.<li>`ON` - If a scheduled payment date is a non-business day the payment will be made on that day regardless.<li>`ONLY` - Payments only occur on business days. If a scheduled payment date is a non-business day the payment will be ignored.</ul>|

<h4 id="cdr-banking-api_bankingscheduledpaymentrecurrencelastweekday_enumerated-values-main">Enumerated Values</h4>

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

<h3 class="schema-toc" id="cdr-banking-api_schemas_tocSbankingscheduledpaymentrecurrenceeventbased">BankingScheduledPaymentRecurrenceEventBased</h3>
<p id="tocSbankingscheduledpaymentrecurrenceeventbased" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api_schema-base_bankingscheduledpaymentrecurrenceeventbased"></a>
  <a class="schema-anchor" id="schemacdr-banking-apibankingscheduledpaymentrecurrenceeventbased"></a>
</p>

```json
{
  "description": "string"
}
```

*Indicates that the schedule of payments is defined according to an external event that cannot be predetermined. Mandatory if _recurrenceUType_ is set to `eventBased`.*

<h3 id="cdr-banking-api_bankingscheduledpaymentrecurrenceeventbased_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|description|string|mandatory||Description of the event and conditions that will result in the payment. Expected to be formatted for display to a customer.|

<h3 class="schema-toc" id="cdr-banking-api_schemas_tocScommonphysicaladdress">CommonPhysicalAddress</h3>
<p id="tocScommonphysicaladdress" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api_schema-base_commonphysicaladdress"></a>
  <a class="schema-anchor" id="schemacdr-banking-apicommonphysicaladdress"></a>
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

<h3 id="cdr-banking-api_commonphysicaladdress_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|addressUType|[Enum](#common-field-types)|mandatory||The type of address object present.|
|simple|[CommonSimpleAddress](#schemacdr-banking-apicommonsimpleaddress)|conditional||Required if _addressUType_ is set to `simple`.|
|paf|[CommonPAFAddress](#schemacdr-banking-apicommonpafaddress)|conditional||Australian address formatted according to the file format defined by the [PAF file format](https://auspost.com.au/content/dam/auspost_corp/media/documents/australia-post-data-guide.pdf). Required if _addressUType_ is set to `paf`.|

<h4 id="cdr-banking-api_commonphysicaladdress_enumerated-values-main">Enumerated Values</h4>

|Property|Value|
|---|---|
|addressUType|paf|
|addressUType|simple|

<h3 class="schema-toc" id="cdr-banking-api_schemas_tocScommonsimpleaddress">CommonSimpleAddress</h3>
<p id="tocScommonsimpleaddress" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api_schema-base_commonsimpleaddress"></a>
  <a class="schema-anchor" id="schemacdr-banking-apicommonsimpleaddress"></a>
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

<h3 id="cdr-banking-api_commonsimpleaddress_properties">Properties</h3>

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

<h3 class="schema-toc" id="cdr-banking-api_schemas_tocScommonpafaddress">CommonPAFAddress</h3>
<p id="tocScommonpafaddress" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api_schema-base_commonpafaddress"></a>
  <a class="schema-anchor" id="schemacdr-banking-apicommonpafaddress"></a>
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

<h3 id="cdr-banking-api_commonpafaddress_properties">Properties</h3>

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

<h3 class="schema-toc" id="cdr-banking-api_schemas_tocSlinks">Links</h3>
<p id="tocSlinks" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api_schema-base_links"></a>
  <a class="schema-anchor" id="schemacdr-banking-apilinks"></a>
</p>

```json
{
  "self": "string"
}
```

<h3 id="cdr-banking-api_links_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|self|[URIString](#common-field-types)|mandatory||Fully qualified link that generated the current response document.|

<h3 class="schema-toc" id="cdr-banking-api_schemas_tocSmeta">Meta</h3>
<p id="tocSmeta" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api_schema-base_meta"></a>
  <a class="schema-anchor" id="schemacdr-banking-apimeta"></a>
</p>

```json
{}
```

<h3 id="cdr-banking-api_meta_properties">Properties</h3>

*None*

<h3 class="schema-toc" id="cdr-banking-api_schemas_tocSlinkspaginated">LinksPaginated</h3>
<p id="tocSlinkspaginated" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api_schema-base_linkspaginated"></a>
  <a class="schema-anchor" id="schemacdr-banking-apilinkspaginated"></a>
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

<h3 id="cdr-banking-api_linkspaginated_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|self|[URIString](#common-field-types)|mandatory||Fully qualified link that generated the current response document.|
|first|[URIString](#common-field-types)|conditional||URI to the first page of this set. Mandatory if this response is not the first page.|
|prev|[URIString](#common-field-types)|conditional||URI to the previous page of this set. Mandatory if this response is not the first page.|
|next|[URIString](#common-field-types)|conditional||URI to the next page of this set. Mandatory if this response is not the last page.|
|last|[URIString](#common-field-types)|conditional||URI to the last page of this set. Mandatory if this response is not the last page.|

<h3 class="schema-toc" id="cdr-banking-api_schemas_tocSmetapaginated">MetaPaginated</h3>
<p id="tocSmetapaginated" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api_schema-base_metapaginated"></a>
  <a class="schema-anchor" id="schemacdr-banking-apimetapaginated"></a>
</p>

```json
{
  "totalRecords": 0,
  "totalPages": 0
}
```

<h3 id="cdr-banking-api_metapaginated_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|totalRecords|[NaturalNumber](#common-field-types)|mandatory||The total number of records in the full set. See [pagination](#pagination).|
|totalPages|[NaturalNumber](#common-field-types)|mandatory||The total number of pages in the full set. See [pagination](#pagination).|

<h3 class="schema-toc" id="cdr-banking-api_schemas_tocSmetapaginatedtransaction">MetaPaginatedTransaction</h3>
<p id="tocSmetapaginatedtransaction" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api_schema-base_metapaginatedtransaction"></a>
  <a class="schema-anchor" id="schemacdr-banking-apimetapaginatedtransaction"></a>
</p>

```json
{
  "totalRecords": 0,
  "totalPages": 0,
  "isQueryParamUnsupported": false
}
```

<h3 id="cdr-banking-api_metapaginatedtransaction_properties">Properties</h3>

*allOf*

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|*anonymous*|[MetaPaginated](#schemacdr-banking-apimetapaginated)|mandatory||none|

*and*

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|*anonymous*|object|mandatory||none|
|» isQueryParamUnsupported|[Boolean](#common-field-types)|optional|`false`|`true` if _text_ query parameter is not supported.|

<h3 class="schema-toc" id="cdr-banking-api_schemas_tocSresponseerrorlistv2">ResponseErrorListV2</h3>
<p id="tocSresponseerrorlistv2" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api_schema-base_responseerrorlist"></a>
  <a class="schema-anchor" id="schemacdr-banking-apiresponseerrorlistv2"></a>
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

<h3 id="cdr-banking-api_responseerrorlistv2_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|errors|[[ErrorV2](#schemacdr-banking-apierrorv2)]|mandatory||List of errors.|

<h3 class="schema-toc" id="cdr-banking-api_schemas_tocSerrorv2">ErrorV2</h3>
<p id="tocSerrorv2" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api_schema-base_error"></a>
  <a class="schema-anchor" id="schemacdr-banking-apierrorv2"></a>
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

<h3 id="cdr-banking-api_errorv2_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|code|string|mandatory||The code of the error encountered. Where the error is specific to the respondent, an application-specific error code, expressed as a string value. If the error is application-specific, the URN code that the specific error extends must be provided in the _meta_ object. Otherwise, the value is the error code URN.|
|title|string|mandatory||A short, human-readable summary of the problem that **MUST NOT** change from occurrence to occurrence of the problem represented by the error code.|
|detail|string|mandatory||A human-readable explanation specific to this occurrence of the problem.|
|meta|object|conditional||Additional data for customised error codes.|
|» urn|string|conditional||The CDR error code URN which the application-specific error code extends. Mandatory if the error _code_ is an application-specific error rather than a standardised error code.|

<h3 class="schema-toc" id="cdr-banking-api_schemas_tocSbankingproductcategory">BankingProductCategory</h3>
<p id="tocSbankingproductcategory" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api_schema-base_bankingproductcategory"></a>
  <a class="schema-anchor" id="schemacdr-banking-apibankingproductcategory"></a>
</p>

```json
"BUSINESS_LOANS"
```

*The category to which a product or account belongs. See [here](#product-categories) for more details.*

<h3 id="cdr-banking-api_bankingproductcategory_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|*anonymous*|[Enum](#common-field-types)|mandatory||The category to which a product or account belongs. See [here](#product-categories) for more details.|

<h4 id="cdr-banking-api_bankingproductcategory_enumerated-values-main">Enumerated Values</h4>

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

<h3 class="schema-toc" id="cdr-banking-api_schemas_tocSnpppaymentservice">NppPaymentService</h3>
<p id="tocSnpppaymentservice" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api_schema-base_npppaymentservice"></a>
  <a class="schema-anchor" id="schemacdr-banking-apinpppaymentservice"></a>
</p>

```json
"X2P1"
```

*Identifier of the applicable overlay service. The _service_ is used in conjunction with the _serviceVersion_. See [here](#npp-services) for more details.*

<h3 id="cdr-banking-api_npppaymentservice_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|*anonymous*|[Enum](#common-field-types)|mandatory||Identifier of the applicable overlay service. The _service_ is used in conjunction with the _serviceVersion_. See [here](#npp-services) for more details.|

<h4 id="cdr-banking-api_npppaymentservice_enumerated-values-main">Enumerated Values</h4>

|Property|Value|
|---|---|
|*anonymous*|X2P1|
|*anonymous*|IFTI|
|*anonymous*|BSCT|
|*anonymous*|CATSCT|

<h3 class="schema-toc" id="cdr-banking-api_schemas_tocSbankingproductid">BankingProductId</h3>
<p id="tocSbankingproductid" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api_schema-base_bankingproductid"></a>
  <a class="schema-anchor" id="schemacdr-banking-apibankingproductid"></a>
</p>

```json
"string"
```

*A data holder-specific unique identifier for a Banking product. This identifier must be unique to a product but does not otherwise need to adhere to ID permanence guidelines.*

<h3 id="cdr-banking-api_bankingproductid_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|*anonymous*|[ASCIIString](#common-field-types)|mandatory||A data holder-specific unique identifier for a Banking product. This identifier must be unique to a product but does not otherwise need to adhere to ID permanence guidelines.|

<h3 class="schema-toc" id="cdr-banking-api_schemas_tocSbankingaccountid">BankingAccountId</h3>
<p id="tocSbankingaccountid" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api_schema-base_bankingaccountid"></a>
  <a class="schema-anchor" id="schemacdr-banking-apibankingaccountid"></a>
</p>

```json
"string"
```

*A unique identifier for a Banking account, generated according to [CDR ID Permanence](#id-permanence) requirements.*

<h3 id="cdr-banking-api_bankingaccountid_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|*anonymous*|[ASCIIString](#common-field-types)|mandatory||A unique identifier for a Banking account, generated according to [CDR ID Permanence](#id-permanence) requirements.|

<h3 class="schema-toc" id="cdr-banking-api_schemas_tocSbankingtransactionid">BankingTransactionId</h3>
<p id="tocSbankingtransactionid" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api_schema-base_bankingtransactionid"></a>
  <a class="schema-anchor" id="schemacdr-banking-apibankingtransactionid"></a>
</p>

```json
"string"
```

*A unique identifier for a Banking transaction, generated according to [CDR ID Permanence](#id-permanence) requirements.*

<h3 id="cdr-banking-api_bankingtransactionid_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|*anonymous*|[ASCIIString](#common-field-types)|mandatory||A unique identifier for a Banking transaction, generated according to [CDR ID Permanence](#id-permanence) requirements.|

<h3 class="schema-toc" id="cdr-banking-api_schemas_tocSbankingscheduledpaymentid">BankingScheduledPaymentId</h3>
<p id="tocSbankingscheduledpaymentid" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api_schema-base_bankingscheduledpaymentid"></a>
  <a class="schema-anchor" id="schemacdr-banking-apibankingscheduledpaymentid"></a>
</p>

```json
"string"
```

*A unique identifier for a Banking scheduled payment, generated according to [CDR ID Permanence](#id-permanence) requirements.*

<h3 id="cdr-banking-api_bankingscheduledpaymentid_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|*anonymous*|[ASCIIString](#common-field-types)|mandatory||A unique identifier for a Banking scheduled payment, generated according to [CDR ID Permanence](#id-permanence) requirements.|

<h3 class="schema-toc" id="cdr-banking-api_schemas_tocSbankingpayeeid">BankingPayeeId</h3>
<p id="tocSbankingpayeeid" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api_schema-base_bankingpayeeid"></a>
  <a class="schema-anchor" id="schemacdr-banking-apibankingpayeeid"></a>
</p>

```json
"string"
```

*A unique identifier for a Banking payee, generated according to [CDR ID Permanence](#id-permanence) requirements.*

<h3 id="cdr-banking-api_bankingpayeeid_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|*anonymous*|[ASCIIString](#common-field-types)|mandatory||A unique identifier for a Banking payee, generated according to [CDR ID Permanence](#id-permanence) requirements.|


## Product Categories

The [_productCategory_ enumeration](#cdr-banking-api_schemas_tocSbankingproductcategory) provides the values for categorising products and accounts. These are explained in the following tables:

**Deposit Products**

| Enum | Description |
| ---- | ----------- |
| REGULATED_TRUST_ACCOUNTS | This grouping of products includes accounts where funds are held in trust in regulated industries with complex rules embedded on how the products must operate. Industries that require this sort of product include real estate agents, solicitors and conveyancers. |
| TERM_DEPOSITS | This grouping of products includes all accounts where cash is deposited in the account for a set time period with restrictions on when funds can be withdrawn. Includes traditional Term Deposits and specialised deposits with either fixed terms or notice periods for withdrawal of funds. |
| TRANS_AND_SAVINGS_ACCOUNTS | This grouping of products includes all accounts where cash is deposited in the account and is accessible to the customer when they choose. These are given many names on the market including Cash Accounts, Saving Accounts, Transaction Accounts, Current Accounts, Cheque Accounts, Passbook Accounts, etc. |
| TRAVEL_CARDS | This grouping of products includes prepaid cards with multi-currency capabilities. |

 **Lending Products**

| Enum | Description |
| ---- | ----------- |
| BUSINESS_LOANS | This grouping of products incorporates all types of lending for business purpose that is not a trade finance facility, lease, overdraft, residential mortgage, credit card or margin lending. It includes traditional term loans, bank guarantees and commercial bills. This category would incorporate both secured and unsecured business purpose lending including all business purpose equipment finance that is not covered by a lease. |
| CRED_AND_CHRG_CARDS | This grouping of products includes all lending products that are issued for the purpose of allowing a flexible line of credit accessed through use of a card. These may be called various names including Credit Cards, Charge Cards and Store Cards. |
| LEASES | This grouping of products will include all types of leases including Financial Lease, Operating Lease, Sale and leaseback, etc. |
| MARGIN_LOANS | This grouping of products includes all types of margin loans which let you borrow money to invest in traded assets including shares & commodities or in managed funds. |
| OVERDRAFTS | This grouping of products includes all types of lending which allows for the loan amount to be withdrawn, repaid, and redrawn again in any manner and any number of times, until the arrangement expires. These loans may be secured or unsecured, and generally don’t have set / minimum repayment requirements. |
| PERS_LOANS | This grouping of products includes all lending for personal purposes that is not a residential mortgage, credit card or margin lending. These loans may be unsecured loans and term loans for purchase assets used as security such as motor vehicles. These may be called various names including Personal Loans and Car Loans. |
| RESIDENTIAL_MORTGAGES | This grouping of products includes all lending products that are available for the primary purpose of borrowing for the purpose of purchasing or renovating residential property, where a residential property will be used as security. This group will include both fixed, variable & secured overdraft types of product and may include both owner-occupied and investment purpose borrowing. |
| TRADE_FINANCE | This grouping of products includes specialised lending products specifically designed to facilitate domestic & international trade. This includes the issuance of letters of credit, factoring, export credit. |


## Product & Account Components

<a id="productfeaturetypedoc"></a>
<h3 id="tocSproductfeaturetypedoc">Product Feature Types</h3>



Description of the usage of the _featureType_ field as it applies to products.

| Value | Description | Use of _additionalValue_ Field |
| ----- | ----------- | ------------------------------ |
| ADDITIONAL_CARDS | Additional cards can be requested. | The maximum number of additional cards. If no maximum then should be set to `null`. |
| BALANCE_TRANSFERS | Balance transfers can be made to the account (e.g., for credit cards). | N/A |
| BILL_PAYMENT | The product can be attached to an automatic budgeting and bill payment service. | Optional name of the service. |
| BONUS_REWARDS | Bonus loyalty rewards points are available. | Number of points available. |
| CARD_ACCESS | A card is available for the product to access funds. | Text describing list of card types that this product can be linked to. |
| CASHBACK_OFFER | Subject to terms, conditions and eligibility criteria, the product has a cashback offer for opening an account or by spending at a certain retailer. | The amount of the cashback offer (in AUD). |
| COMPLEMENTARY_PRODUCT_DISCOUNTS | Indicates that complementary, discounted offerings (such as gift cards, or discounted travel) is available. | Description of the complementary offering. |
| DIGITAL_BANKING | Access is available to online banking features for the product. | N/A |
| DIGITAL_WALLET | A Digital wallet can be attached to the product. | The name or brand of the wallet. |
| DONATE_INTEREST | Indicates that interest generated from the product can be automatically donated to a charity or community group. | N/A |
| EXTRA_REPAYMENTS | Indicates that the product has the option to accept extra repayments without incurring additional charges (for example Buy Now, Pay Later (BNPL) or line of credit products may offer the facility to repay instalments on an adhoc basis). | N/A |
| FRAUD_PROTECTION | The product includes fraud protection features. | N/A |
| FREE_TXNS | A set number of free transactions available per month. | The number of free transactions. |
| FREE_TXNS_ALLOWANCE | A set amount of transaction fee value that is discounted per month. | The amount of transaction fee discounted (in AUD). |
| FUNDS_AVAILABLE_AFTER | Deposited funds are available after a specified time period. This is distinct from a term deposit duration. | The specified time period. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations). |
| GUARANTOR | Subject to terms and conditions, the customer may be able to nominate a guarantor during the origination process. | N/A |
| INSTALMENT_PLAN | The product has the option to pay for eligible purchases over time with a set number of payments. | N/A |
| INSURANCE | Insurance is provided as an additional feature of the product. | Text description of the type of insurance (e.g., Travel Insurance). |
| INTEREST_FREE | Interest free period for purchases. | Interest free period. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations). |
| INTEREST_FREE_TRANSFERS | Interest free period for balance transfers. | Interest free period. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations). |
| LOYALTY_PROGRAM | A points based loyalty program is available. | Name of the loyalty program. |
| NOTIFICATIONS | Advanced notifications are available for the product. | Description of the notification capability. |
| NPP_ENABLED | An account of this product type can be used to receive funds as a result of a BSB/Number based NPP payment. | N/A |
| NPP_PAYID | An account of this product type can be used as the target of an NPP PayID. | N/A |
| OFFSET | An offset account can be connected to the product. | N/A |
| OTHER | Another feature that can not be included in any of the other categories. The _additionalInfo_ field is mandatory for this type. | N/A |
| OVERDRAFT | An overdraft can be applied for. | N/A |
| REDRAW | Redraw of repaid principal above minimum required is available. | N/A |
| RELATIONSHIP_MANAGEMENT | Relationship management is available for eligible customers. | N/A |
| UNLIMITED_TXNS | Unlimited free transactions available. | N/A |



<a id="productconstrainttypedoc"></a>
<h3 id="tocSproductconstrainttypedoc">Product Constraint Types</h3>



Description of the usage of the _constraintType_ field as it applies to products.

| Value | Description | Use of _additionalValue_ Field |
| ----- | ----------- | ------------------------------ |
| MAX_BALANCE | A maximum balance is required for the product. | The maximum balance in [AmountString](#common-field-types) format. |
| MAX_LIMIT | A maximum limit exists (such as a maximum loan balance denoting the borrowable amount or maximum allowable credit limit). | The maximum limit in [AmountString](#common-field-types) format. |
| MAX_LVR | A maximum LVR (Loan to Value Ratio) exists. | The maximum LVR in [RateString](#common-field-types) format. |
| MIN_BALANCE | A minimum balance is required for the product. | The minimum balance in [AmountString](#common-field-types) format. |
| MIN_LIMIT | A minimum limit exists (such as a minimum loan balance denoting the borrowable amount or minimum credit limit). | The minimum limit in [AmountString](#common-field-types) format. |
| MIN_LVR | A minimum LVR (Loan to Value Ratio) exists. | The minimum LVR in [RateString](#common-field-types) format. |
| OPENING_BALANCE | An opening balance is required for the product. | The minimum opening balance in [AmountString](#common-field-types) format. |
| OTHER | Another constraint that can not be included in any of the other categories. The _additionalInfo_ field is mandatory for this type. | N/A |



<a id="producteligibilitytypedoc"></a>
<h3 id="tocSproducteligibilitytypedoc">Product Eligibility Types</h3>



Description of the usage of the _eligibilityType_ field as it applies to products.

| Value | Description | Use of _additionalValue_ Field |
| ----- | ----------- | ------------------------------ |
| BUSINESS | Only business may apply for the account. | N/A |
| EMPLOYMENT_STATUS | An eligibility constraint based on employment status applies. | A description of the status required. |
| MAX_AGE | Only customers younger than a maximum age may apply. | The maximum age in years. |
| MIN_AGE | Only customers older than a minimum age may apply. | The minimum age in years. |
| MIN_INCOME | The customer must have an income greater than a specified threshold to obtain the product. | Minimum income in [AmountString](#common-field-types) format. |
| MIN_TURNOVER | Only a business with greater than a minimum turnover may apply. | Minimum turnover in [AmountString](#common-field-types) format. |
| NATURAL_PERSON | The customer must be a natural person rather than another legal entity. | N/A |
| OTHER | Another eligibility criteria exists as described in the _additionalInfo_ field. The _additionalInfo_ field is mandatory for this type. | N/A |
| PENSION_RECIPIENT | Only a recipient of a government pension may apply for the product. | Optional. If present, **MUST** contain a description of which pensions qualify. |
| RESIDENCY_STATUS | An eligibility constraint based on residency status applies. | A description of the status required. |
| STAFF | Only a staff member of the provider may apply. | N/A |
| STUDENT | Only students may apply for the product. | Optional. If present, **MUST** contain a description of who qualifies as a student, e.g., do apprentices qualify? |



<a id="productfeetypedoc"></a>
<h3 id="tocSproductfeetypedoc">Product Fee Types</h3>



Description of the usage of the _feeType_ field as it applies to products.

| Value | Description | Use of _additionalValue_ Field |
| ----- | ----------- | ------------------------------ |
| CASH_ADVANCE | A fee associated with a cash advance. | N/A |
| DEPOSIT | A fee associated with making a deposit. | N/A |
| DISHONOUR | A fee associated with a dishonour. | N/A |
| ENQUIRY | A fee associated with an enquiry, including a balance enquiry. | N/A |
| EVENT | A fee in relation to a particular event (e.g., ordering a new card, viewing a balance or stopping a cheque). | N/A |
| EXIT | A fee for closing the product. | N/A |
| LATE_PAYMENT | A fee associated with making a payment after a due date. | Number of days late, after which the associated fee will be applied. |
| OTHER | Another fee that can not be included in any of the other categories. The _additionalInfo_ field is mandatory for this type. | N/A |
| PAYMENT | A fee associated with making a payment. | N/A |
| PERIODIC | A periodic fee such as a monthly account servicing fee. | The period of charge. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations). |
| PURCHASE | A fee associated with making a purchase at a merchant. | N/A |
| REPLACEMENT | A fee associated with a receiving a replacement, including cards, cheques, statements, security tokens. | N/A |
| TRANSACTION | A fee associated with any transaction (incorporates `WITHDRAWAL`, `DEPOSIT`, `PAYMENT` and `PURCHASE`). | N/A |
| UPFRONT | A fee paid at the beginning of the product lifecycle, such as an establishment fee, loyalty program fee or application fee. | N/A |
| UPFRONT_PER_PLAN | A fee paid at the creation of a new payment plan, such as an instalment plan. | N/A |
| VARIATION | A fee associated with a request for a variation, including to an existing process, instruction or terms. | N/A |
| WITHDRAWAL | A fee associated with making a withdrawal. | N/A |



<a id="productdiscounttypedoc"></a>
<h3 id="tocSproductdiscounttypedoc">Product Discount Types</h3>

Description of the usage of the _discountType_ field as it applies to products.

| Value | Description | Use of _additionalValue_ Field |
| ----- | ----------- | ------------------------------ |
| BALANCE | Discount on a fee for maintaining a set balance. As the discount applies to a fee the period is the same as for the fee. | The minimum balance in [AmountString](#common-field-types) format. |
| DEPOSITS | Discount for depositing a certain amount of money in a period. As the discount applies to a fee the period is the same as for the fee. | The minimum deposit amount in [AmountString](#common-field-types) format. |
| ELIGIBILITY_ONLY | Discount applies based on customer eligibility (_eligibility_ array must be populated). | N/A |
| FEE_CAP | The _amount_, _balanceRate_, _transactionRate_, _accruedRate_ or _feeRate_ fields of the discount represent the maximum amount charged in a time period. | The time period for which the fee cap applies. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations). |
| PAYMENTS | Discount for outbound payments from the account under a certain amount of money in a period. As the discount applies to a fee the period is the same as for the fee. | The payment threshold amount in [AmountString](#common-field-types) format. |



<a id="productdiscounteligibilitydoc"></a>
<h3 id="tocSproductdiscounteligibilitydoc">Product Discount Eligibility Types</h3>



Description of the usage of the _discountEligibilityType_ field as it applies to products.

| Value | Description | Use of _additionalValue_ Field |
| ----- | ----------- | ------------------------------ |
| BUSINESS | A business or other non-person legal entity. | N/A |
| EMPLOYMENT_STATUS | An eligibility constraint based on employment status applies. | A description of the status required. |
| INTRODUCTORY | The discount is only available during an introductory period. | The period of time for the introductory discount. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations). |
| MAX_AGE | Only customers younger than a maximum age receive the discount. | The maximum age in years. |
| MIN_AGE | Only customers older than a minimum age receive the discount. | The minimum age in years. |
| MIN_INCOME | The customer must have an income greater than a specified threshold to obtain the discount. | Minimum income in [AmountString](#common-field-types) format. |
| MIN_TURNOVER | Only a business with greater than a minimum turnover is eligible. | Minimum turnover in [AmountString](#common-field-types) format. |
| NATURAL_PERSON | The customer must be a natural person rather than another legal entity. | N/A |
| OTHER | Another eligibility criteria exists as described in the _additionalInfo_ field. The _additionalInfo_ field is mandatory for this type. | N/A |
| PENSION_RECIPIENT | Only a recipient of a government pension may receive the discount. | Optional. If present, **MUST** contain a description of which pensions qualify. |
| RESIDENCY_STATUS | An eligibility constraint based on residency status applies. | A description of the status required. |
| STAFF | Only a staff member of the provider may receive the discount. | N/A |
| STUDENT | Only students may receive the discount. | Optional. If present, **MUST** contain a description of who qualifies as a student, e.g., do apprentices qualify? |



<a id="productdepositratetypedoc"></a>
<h3 id="tocSproductdepositratetypedoc">Product Deposit Rate Types</h3>

Description of the usage of the _depositRateType_ field as it applies to products.

<a id="productdepositbaseratetypedoc"></a>
<ul><li id="tocSproductdepositbaseratetypedoc"><b>Deposit Base Rate Types</b></li></ul>

A deposit product is expected to present a single Base rate corresponding to relevant selection criteria including the rate _tiers_ and _additionalValue_, where applicable.

| Value | Description | Use of _additionalValue_ Field |
| ----- | ----------- | ------------------------------ |
| FIXED | Fixed rate for a period of time. | The period of time fixed. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations). |
| FLOATING | A floating rate is relatively fixed but still adjusts under specific circumstances. | Details of the float parameters. |
| MARKET_LINKED | A rate that is linked to a specific market, commodity or asset class. | Details of the market linkage. |
| VARIABLE | A variable base rate for the product. | N/A |



<a id="productdepositadjustmentratetypedoc"></a>
<ul><li id="tocSproductdepositadjustmentratetypedoc"><b>Deposit Adjustment Rate Types</b></li></ul>

A product may have zero, one, or multiple adjustment rates that are taken to apply to a Base rate.

| Value | Description | Use of _additionalValue_ Field |
| ----- | ----------- | ------------------------------ |
| BONUS | A bonus rate available by meeting a specific criteria. A deposit 'bonus' _rate_ value **MUST** be specified as zero or a positive number in the RateString format. The formula to calculate an Effective rate would be (Base+Bonus). | A description of the criteria to obtain the bonus. |
| BUNDLE_BONUS | A bonus rate obtained by originating a bundle instead of a standalone product. A deposit 'bonus' _rate_ value **MUST** be specified as zero or a positive number in the RateString format. The formula to calculate an Effective rate would be (Base+Bonus). | The name of the bundle. |
| INTRODUCTORY | An introductory bonus that will expire after a set period. A deposit 'bonus' _rate_ value **MUST** be specified as zero or a positive number in the RateString format. The formula to calculate an Effective rate would be (Base+Bonus). | The period of time for the introductory rate. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations). |



<a id="productlendingratetypedoc"></a>
<h3 id="tocSproductlendingratetypedoc">Product Lending Rate Types</h3>

Description of the usage of the _lendingRateType_ field as it applies to products.

<a id="productlendingbaseratetypedoc"></a>
<ul><li id="tocSproductlendingbaseratetypedoc"><b>Lending Base Rate Types</b></li></ul>



A lending product is expected to present a single Base rate corresponding to relevant selection criteria including the rate _tiers_ and _additionalValue_, where applicable.

Card products may have two or more base rates, including `CASH_ADVANCE` and `PURCHASE` as they may apply to different transaction types within an account. The `PURCHASE` _lendingRateType_ is considered the rate commonly applicable to a card.

| Value | Description | Use of _additionalValue_ Field |
| ----- | ----------- | ------------------------------ |
| BALANCE_TRANSFER | Specific rate applied to balance transfers to the account. This is expected to apply to products in the `CRED_AND_CHRG_CARDS` category only. | N/A |
| CASH_ADVANCE | Specific rate applied to cash advances from the account. This is expected to apply to products in the `CRED_AND_CHRG_CARDS` category only. | N/A |
| FIXED | Fixed rate for a period of time. | The period of time fixed. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations). |
| FLOATING | A floating rate is relatively fixed but still adjusts under specific circumstances. | Details of the float parameters. |
| MARKET_LINKED | A rate that is linked to a specific market, commodity or asset class. | Details of the market linkage. |
| PURCHASE | Specific rate applied to purchases from the account. This is expected to apply to products in the `CRED_AND_CHRG_CARDS` category only. | N/A |
| VARIABLE | A variable base rate for the product. | N/A |



<a id="productlendingadjustmentratetypedoc"></a>
<ul><li id="tocSproductlendingadjustmentratetypedoc"><b>Lending Adjustment Rate Types</b></li></ul>

A product may have zero, one, or multiple adjustment rates that are taken to apply to a Base rate.

| Value | Description | Use of _additionalValue_ Field |
| ----- | ----------- | ------------------------------ |
| BUNDLE_DISCOUNT_FIXED | A discount rate off the fixed rate obtained by originating a bundle instead of a standalone product. A lending 'discount' _rate_ value **MUST** be specified as zero or a positive number in the RateString format. The formula to calculate an Effective rate would be (Base-Discount). | The name of the bundle. |
| BUNDLE_DISCOUNT_VARIABLE | A discount rate off the variable rate obtained by originating a bundle instead of a standalone product. A lending 'discount' _rate_ value **MUST** be specified as zero or a positive number in the RateString format. The formula to calculate an Effective rate would be (Base-Discount). | The name of the bundle. |
| DISCOUNT | A specific discount rate that may be applied. A discount rate reduces the interest payable. A lending 'discount' _rate_ value **MUST** be specified as zero or a positive number in the RateString format. The formula to calculate an Effective rate would be (Base-Discount). | Description of the discount rate that is applicable. |
| INTRODUCTORY | An introductory discount that will expire after a set period. A lending 'discount' _rate_ value **MUST** be specified as zero or a positive number in the RateString format. The formula to calculate an Effective rate would be (Base-Discount). | The period of time for the introductory rate. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations). |
| PENALTY | A specific penalty rate that may be applied. A penalty rate increases the interest payable. A lending 'penalty' _rate_ value **MUST** be specified as zero or a positive number in the RateString format. The formula to calculate an Effective rate would be (Base+Penalty). | Description of the penalty rate that is applicable. |



<a id="bankingtermdepositaccountedoc"></a>
<h3 id="tocSbankingtermdepositaccountypedoc">Banking Term Deposit Account Types</h3>

Description of the usage of the _maturityInstructions_ field as it applies to accounts.

| Value | Description | Use of _additionalValue_ Field |
| ----- | ----------- | ------------------------------ |
| HOLD_ON_MATURITY | Funds are held in a facility or similar mechanism managed by the data holder for a period of time until the customer provides instructions or the maximum period of the hold has elapsed. Funds may be renewed or withdrawn upon instructions by the customer. | N/A |
| PAID_OUT_AT_MATURITY | Funds are to be paid out at maturity. | N/A |
| ROLLED_OVER | Funds are to be rolled over at maturity. | N/A |



<a id="bankingproductrateconditiondoc"></a>
<h3 id="tocSbankingproductrateconditiondoc">Rate and Tier Applicability Types</h3>



Description of the usage of the _rateApplicabilityType_ field as it applies to products.

| Value | Description | Use of _additionalValue_ Field |
| ----- | ----------- | ------------------------------ |
| MIN_DEPOSITS | When a minimum number of deposits is made in a month, or the month prior. | Minimum number of deposits. |
| MIN_DEPOSIT_AMOUNT | When a minimum deposit amount is made in a month, or the month prior. | Minimum deposit in [AmountString](#common-field-types) format. |
| DEPOSIT_BALANCE_INCREASED | When the overall balance of the account, excluding interest, has increased over the month prior. | Minimum amount in [AmountString](#common-field-types) format. |
| EXISTING_CUST | Applicable to existing customers of the brand. | N/A |
| NEW_ACCOUNTS | Applicable to new accounts. | N/A |
| NEW_CUSTOMER | Applicable to new customers to the brand. | N/A |
| NEW_CUSTOMER_TO_GROUP | Applicable to new customers to a group of brands. | N/A |
| ONLINE_ONLY | Applicable to accounts originated online. | N/A |
| OTHER | Applicable under other conditions. The _additionalInfo_ field is mandatory for this type. | N/A |
| MIN_PURCHASES | When a minimum number of purchases is made and settled in a month, or the month prior. | Minimum number of purchases. |
| MAX_WITHDRAWALS | Applicable up to a maximum number of withdrawals in a month, or the month prior. | Maximum number of withdrawals. |
| MAX_WITHDRAWAL_AMOUNT | Applicable up to a maximum amount withdrawn in a month, or the month prior. | Maximum withdrawn in [AmountString](#common-field-types) format. |


## NPP Services

The [_service_ enumeration](#cdr-banking-api_schemas_tocSnpppaymentservice) provides the values for specifying New Payments Platform (NPP) payments by their NPP service category. These are explained in the following tables:

**NPP Service Overlay Codes**

| Value | Description |
| ----- | ----------- |
| X2P1 | Represents the Osko payment service that allow consumers and businesses to send money between eligible accounts in near real-time. |
| BSCT | Basic Single Credit Transfers means a credit payment message sent over the NPP without an overlay. It is an individual transaction that will be cleared then settled. |
| CATSCT | Category Purpose Payments denote categorised payments for super, tax and payroll payments. This service helps third parties to instruct financial institutions on the purpose of the payment and priority. These payments may represent additional reference information in the payment message, which can be presented to the payee. For example, "Adjustment pay for week ending 20/1/19" or "Commission payment for Quarter 1", up to date details of hours paid, superannuation contributions or details relevant to the employee payslip. |
| IFTI | International Funds Transfers Instructions (IFTIs) are payments sent between an Australian financial institution and an overseas financial institution. |
