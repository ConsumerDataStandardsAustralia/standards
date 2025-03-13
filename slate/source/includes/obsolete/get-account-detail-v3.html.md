---
title: Get Account Detail v3

#language_tabs: # must be one of https://git.io/vQNgJ
#  - shell
#  - javascript

toc_footers:
  - <a href='../../index.html'>Consumer Data Standards</a>

includes:
  - footer

search: false
---

# Get Account Detail V3
This page documents the obsolete version 3 of the Get Account Detail endpoint.

Data Holders can retire this version after **May 11th 2026**. Data Recipients must update to newer versions prior to this date.


<h2 id="cdr-banking-api_get-account-detail">Get Account Detail</h2>
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

Obsolete versions: [v1](../../includes/obsolete/get-account-detail-v1.html), [v2](../../includes/obsolete/get-account-detail-v2.html).

<h3 id="cdr-banking-api_get-account-detail_endpoint-version">Endpoint Version</h3>
|   |  |
|---|--|
|Version|**3**

<h3 id="cdr-banking-api_get-account-detail_parameters">Parameters</h3>

|Name|In|Type|Required|Default|Description|
|---|---|---|---|---|---|
|accountId|path|[BankingAccountId](#schemacdr-banking-apibankingaccountid)|mandatory||The _accountId_ to obtain data for. _accountId_ values are returned by account list endpoints.|
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
        "lendingRateType": "FIXED",
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
    ],
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
        "feeType": "DEPOSIT",
        "amount": "string",
        "balanceRate": "string",
        "transactionRate": "string",
        "accruedRate": "string",
        "accrualFrequency": "string",
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

<h3 id="cdr-banking-api_get-account-detail_responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[ResponseBankingAccountByIdV3](#schemacdr-banking-apiresponsebankingaccountbyidv3)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The following error codes **MUST** be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Missing Required Field](#error-400-field-missing)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li></ul>|[ResponseErrorListV2](#schemacdr-banking-apiresponseerrorlistv2)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The following error codes **MUST** be supported:<br/><ul class="error-code-list"><li>[404 - Unavailable Banking Account](#error-404-authorisation-unavailable-banking-account)</li><li>[404 - Invalid Banking Account](#error-404-authorisation-invalid-banking-account)</li></ul>|[ResponseErrorListV2](#schemacdr-banking-apiresponseerrorlistv2)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|The following error codes **MUST** be supported:<br/><ul class="error-code-list"><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|[ResponseErrorListV2](#schemacdr-banking-apiresponseerrorlistv2)|

<h3 id="cdr-banking-api_get-account-detail_response-headers">Response Headers</h3>

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

<h3 class="schema-toc" id="cdr-banking-api_schemas_tocSresponsebankingproductlistv2">ResponseBankingProductListV2</h3>
<p id="tocSresponsebankingproductlistv2" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api_schema-base_responsebankingproductlist"></a>
  <a class="schema-anchor" id="schemacdr-banking-apiresponsebankingproductlistv2"></a>
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

<h3 id="cdr-banking-api_responsebankingproductlistv2_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|data|object|mandatory||none|
|» products|[[BankingProductV4](#schemacdr-banking-apibankingproductv4)]|mandatory||The list of products returned. If the filter results in an empty set then this array may have no records.|
|links|[LinksPaginated](#schemacdr-banking-apilinkspaginated)|mandatory||none|
|meta|[MetaPaginated](#schemacdr-banking-apimetapaginated)|mandatory||none|

<h3 class="schema-toc" id="cdr-banking-api_schemas_tocSbankingproductv4">BankingProductV4</h3>
<p id="tocSbankingproductv4" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api_schema-base_bankingproduct"></a>
  <a class="schema-anchor" id="schemacdr-banking-apibankingproductv4"></a>
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
      "title": "string",
      "imageUri": "string"
    }
  ]
}
```

<h3 id="cdr-banking-api_bankingproductv4_properties">Properties</h3>

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
|cardArt|[object]|optional||An array of card art images.|
|» title|string|optional||Display label for the specific image.|
|» imageUri|[URIString](#common-field-types)|mandatory||URI reference to a PNG, JPG or GIF image with proportions defined by ISO 7810 ID-1 and width no greater than 512 pixels. The URI reference may be a link or url-encoded data URI according to **[[RFC2397]](#nref-RFC2397)**.|

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

<h3 class="schema-toc" id="cdr-banking-api_schemas_tocSresponsebankingproductbyidv5">ResponseBankingProductByIdV5</h3>
<p id="tocSresponsebankingproductbyidv5" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api_schema-base_responsebankingproductbyid"></a>
  <a class="schema-anchor" id="schemacdr-banking-apiresponsebankingproductbyidv5"></a>
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
        "lendingRateType": "FIXED",
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

<h3 id="cdr-banking-api_responsebankingproductbyidv5_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|data|[BankingProductDetailV5](#schemacdr-banking-apibankingproductdetailv5)|mandatory||none|
|links|[Links](#schemacdr-banking-apilinks)|mandatory||none|
|meta|[Meta](#schemacdr-banking-apimeta)|optional||none|

<h3 class="schema-toc" id="cdr-banking-api_schemas_tocSbankingproductdetailv5">BankingProductDetailV5</h3>
<p id="tocSbankingproductdetailv5" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api_schema-base_bankingproductdetail"></a>
  <a class="schema-anchor" id="schemacdr-banking-apibankingproductdetailv5"></a>
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
      "lendingRateType": "FIXED",
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

<h3 id="cdr-banking-api_bankingproductdetailv5_properties">Properties</h3>

*allOf*

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|*anonymous*|[BankingProductV4](#schemacdr-banking-apibankingproductv4)|mandatory||none|

*and*

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|*anonymous*|object|mandatory||none|
|» bundles|[[BankingProductBundle](#schemacdr-banking-apibankingproductbundle)]|optional||An array of bundles that this product participates in. Each bundle is described by free form information but also by a list of _productID_ values of the other products that are included in the bundle. It is assumed that the current product is included in the bundle also.|
|» features|[[BankingProductFeatureV2](#schemacdr-banking-apibankingproductfeaturev2)]|optional||Array of features available for the product.|
|» constraints|[[BankingProductConstraintV2](#schemacdr-banking-apibankingproductconstraintv2)]|optional||Constraints on the application for or operation of the product such as minimum balances or limit thresholds.|
|» eligibility|[[BankingProductEligibility](#schemacdr-banking-apibankingproducteligibility)]|optional||Eligibility criteria for the product.|
|» fees|[[BankingProductFee](#schemacdr-banking-apibankingproductfee)]|optional||Fees applicable to the product.|
|» depositRates|[[BankingProductDepositRate](#schemacdr-banking-apibankingproductdepositrate)]|optional||Interest rates available for deposits.|
|» lendingRates|[[BankingProductLendingRateV2](#schemacdr-banking-apibankingproductlendingratev2)]|optional||Interest rates charged against lending balances.|

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

<h3 class="schema-toc" id="cdr-banking-api_schemas_tocSbankingproductfeaturev2">BankingProductFeatureV2</h3>
<p id="tocSbankingproductfeaturev2" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api_schema-base_bankingproductfeature"></a>
  <a class="schema-anchor" id="schemacdr-banking-apibankingproductfeaturev2"></a>
</p>

```json
{
  "featureType": "ADDITIONAL_CARDS",
  "additionalValue": "string",
  "additionalInfo": "string",
  "additionalInfoUri": "string"
}
```

<h3 id="cdr-banking-api_bankingproductfeaturev2_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|featureType|[Enum](#common-field-types)|mandatory||The type of feature described. For further details, refer to [Product Feature Types](#tocSproductfeaturetypedoc).|
|additionalValue|string|conditional||Generic field containing additional information relevant to the [_featureType_](#tocSproductfeaturetypedoc) specified. Whether mandatory or not is dependent on the value of the [_featureType_](#tocSproductfeaturetypedoc).|
|additionalInfo|string|conditional||Display text providing more information on the feature. Mandatory if [_featureType_](#tocSproductfeaturetypedoc) is set to `OTHER`.|
|additionalInfoUri|[URIString](#common-field-types)|optional||Link to a web page with more information on this feature.|

<h4 id="cdr-banking-api_bankingproductfeaturev2_enumerated-values-main">Enumerated Values</h4>

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

<h3 class="schema-toc" id="cdr-banking-api_schemas_tocSbankingproductconstraintv2">BankingProductConstraintV2</h3>
<p id="tocSbankingproductconstraintv2" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api_schema-base_bankingproductconstraint"></a>
  <a class="schema-anchor" id="schemacdr-banking-apibankingproductconstraintv2"></a>
</p>

```json
{
  "constraintType": "MAX_BALANCE",
  "additionalValue": "string",
  "additionalInfo": "string",
  "additionalInfoUri": "string"
}
```

<h3 id="cdr-banking-api_bankingproductconstraintv2_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|constraintType|[Enum](#common-field-types)|mandatory||The type of constraint described. For further details, refer to [Product Constraint Types](#tocSproductconstrainttypedoc).|
|additionalValue|string|conditional||Generic field containing additional information relevant to the [_constraintType_](#tocSproductconstrainttypedoc) specified. Whether mandatory or not is dependent on the value of [_constraintType_](#tocSproductconstrainttypedoc).|
|additionalInfo|string|optional||Display text providing more information on the constraint.|
|additionalInfoUri|[URIString](#common-field-types)|optional||Link to a web page with more information on the constraint.|

<h4 id="cdr-banking-api_bankingproductconstraintv2_enumerated-values-main">Enumerated Values</h4>

|Property|Value|
|---|---|
|constraintType|MAX_BALANCE|
|constraintType|MAX_LIMIT|
|constraintType|MAX_LVR|
|constraintType|MIN_BALANCE|
|constraintType|MIN_LIMIT|
|constraintType|MIN_LVR|
|constraintType|OPENING_BALANCE|

<h3 class="schema-toc" id="cdr-banking-api_schemas_tocSbankingproducteligibility">BankingProductEligibility</h3>
<p id="tocSbankingproducteligibility" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api_schema-base_bankingproducteligibility"></a>
  <a class="schema-anchor" id="schemacdr-banking-apibankingproducteligibility"></a>
</p>

```json
{
  "eligibilityType": "BUSINESS",
  "additionalValue": "string",
  "additionalInfo": "string",
  "additionalInfoUri": "string"
}
```

<h3 id="cdr-banking-api_bankingproducteligibility_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|eligibilityType|[Enum](#common-field-types)|mandatory||The type of eligibility criteria described. For further details, refer to [Product Eligibility Types](#tocSproducteligibilitytypedoc).|
|additionalValue|string|conditional||Generic field containing additional information relevant to the [_eligibilityType_](#tocSproducteligibilitytypedoc) specified. Whether mandatory or not is dependent on the value of [_eligibilityType_](#tocSproducteligibilitytypedoc).|
|additionalInfo|string|conditional||Display text providing more information on the [eligibility](#tocSproducteligibilitytypedoc) criteria. Mandatory if the field is set to `OTHER`.|
|additionalInfoUri|[URIString](#common-field-types)|optional||Link to a web page with more information on this eligibility criteria.|

<h4 id="cdr-banking-api_bankingproducteligibility_enumerated-values-main">Enumerated Values</h4>

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

<h3 class="schema-toc" id="cdr-banking-api_schemas_tocSbankingproductfee">BankingProductFee</h3>
<p id="tocSbankingproductfee" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api_schema-base_bankingproductfee"></a>
  <a class="schema-anchor" id="schemacdr-banking-apibankingproductfee"></a>
</p>

```json
{
  "name": "string",
  "feeType": "DEPOSIT",
  "amount": "string",
  "balanceRate": "string",
  "transactionRate": "string",
  "accruedRate": "string",
  "accrualFrequency": "string",
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

<h3 id="cdr-banking-api_bankingproductfee_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|name|string|mandatory||Name of the fee.|
|feeType|[Enum](#common-field-types)|mandatory||The type of fee. For further details, refer to [Product Fee Types](#tocSproductfeetypedoc).|
|amount|[AmountString](#common-field-types)|conditional||The amount charged for the fee. One of _amount_, _balanceRate_, _transactionRate_ and _accruedRate_ is mandatory unless the _feeType_ `VARIABLE` is supplied.|
|balanceRate|[RateString](#common-field-types)|conditional||A fee rate calculated based on a proportion of the balance. One of _amount_, _balanceRate_, _transactionRate_ and _accruedRate_ is mandatory unless the _feeType_ `VARIABLE` is supplied.|
|transactionRate|[RateString](#common-field-types)|conditional||A fee rate calculated based on a proportion of a transaction. One of _amount_, _balanceRate_, _transactionRate_ and _accruedRate_ is mandatory unless the _feeType_ `VARIABLE` is supplied.|
|accruedRate|[RateString](#common-field-types)|conditional||A fee rate calculated based on a proportion of the calculated interest accrued on the account. One of _amount_, _balanceRate_, _transactionRate_ and _accruedRate_ is mandatory unless the _feeType_ `VARIABLE` is supplied.|
|accrualFrequency|[ExternalRef](#common-field-types)|optional||The indicative frequency with which the fee is calculated on the account. Only applies if _balanceRate_ or _accruedRate_ is also present. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax).|
|currency|[CurrencyString](#common-field-types)|optional|`AUD`|The currency the fee will be charged in. Assumes `AUD` if absent.|
|additionalValue|string|conditional||Generic field containing additional information relevant to the [_feeType_](#tocSproductfeetypedoc) specified. Whether mandatory or not is dependent on the value of [_feeType_](#tocSproductfeetypedoc).|
|additionalInfo|string|optional||Display text providing more information on the fee.|
|additionalInfoUri|[URIString](#common-field-types)|optional||Link to a web page with more information on this fee.|
|discounts|[[BankingProductDiscount](#schemacdr-banking-apibankingproductdiscount)]|optional||An optional list of discounts to this fee that may be available.|

<h4 id="cdr-banking-api_bankingproductfee_enumerated-values-main">Enumerated Values</h4>

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

<h3 class="schema-toc" id="cdr-banking-api_schemas_tocSbankingproductdiscount">BankingProductDiscount</h3>
<p id="tocSbankingproductdiscount" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api_schema-base_bankingproductdiscount"></a>
  <a class="schema-anchor" id="schemacdr-banking-apibankingproductdiscount"></a>
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

<h3 id="cdr-banking-api_bankingproductdiscount_properties">Properties</h3>

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
|eligibility|[[BankingProductDiscountEligibility](#schemacdr-banking-apibankingproductdiscounteligibility)]|conditional||Eligibility constraints that apply to this discount. Mandatory if _discountType_ is `ELIGIBILITY_ONLY`.|

<h4 id="cdr-banking-api_bankingproductdiscount_enumerated-values-main">Enumerated Values</h4>

|Property|Value|
|---|---|
|discountType|BALANCE|
|discountType|DEPOSITS|
|discountType|ELIGIBILITY_ONLY|
|discountType|FEE_CAP|
|discountType|PAYMENTS|

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

<h3 class="schema-toc" id="cdr-banking-api_schemas_tocSbankingproductdepositrate">BankingProductDepositRate</h3>
<p id="tocSbankingproductdepositrate" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api_schema-base_bankingproductdepositrate"></a>
  <a class="schema-anchor" id="schemacdr-banking-apibankingproductdepositrate"></a>
</p>

```json
{
  "depositRateType": "VARIABLE",
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

<h3 id="cdr-banking-api_bankingproductdepositrate_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|depositRateType|[Enum](#common-field-types)|mandatory||The type of rate (`FIXED`, `VARIABLE`, `BONUS`, etc.) For further details, refer to [Product Deposit Rate Types](#tocSproductdepositratetypedoc).|
|rate|[RateString](#common-field-types)|mandatory||The rate to be applied.|
|calculationFrequency|[ExternalRef](#common-field-types)|optional||The period after which the rate is applied to the balance to calculate the amount due for the period. Calculation of the amount is often daily (as balances may change) but accumulated until the total amount is 'applied' to the account (see _applicationFrequency_). Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax).|
|applicationFrequency|[ExternalRef](#common-field-types)|optional||The period after which the calculated amount(s) (see _calculationFrequency_) are 'applied' (i.e. debited or credited) to the account. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax).|
|tiers|[[BankingProductRateTierV3](#schemacdr-banking-apibankingproductratetierv3)]|optional||Rate tiers applicable for this rate.|
|additionalValue|string|conditional||Generic field containing additional information relevant to the [_depositRateType_](#tocSproductdepositratetypedoc) specified. Whether mandatory or not is dependent on the value of [_depositRateType_](#tocSproductdepositratetypedoc).|
|additionalInfo|string|optional||Display text providing more information on the rate.|
|additionalInfoUri|[URIString](#common-field-types)|optional||Link to a web page with more information on this rate.|

<h4 id="cdr-banking-api_bankingproductdepositrate_enumerated-values-main">Enumerated Values</h4>

|Property|Value|
|---|---|
|depositRateType|BONUS|
|depositRateType|BUNDLE_BONUS|
|depositRateType|FIXED|
|depositRateType|FLOATING|
|depositRateType|INTRODUCTORY|
|depositRateType|MARKET_LINKED|
|depositRateType|VARIABLE|

<h3 class="schema-toc" id="cdr-banking-api_schemas_tocSbankingproductlendingratev2">BankingProductLendingRateV2</h3>
<p id="tocSbankingproductlendingratev2" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api_schema-base_bankingproductlendingrate"></a>
  <a class="schema-anchor" id="schemacdr-banking-apibankingproductlendingratev2"></a>
</p>

```json
{
  "lendingRateType": "FIXED",
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

<h3 id="cdr-banking-api_bankingproductlendingratev2_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|lendingRateType|[Enum](#common-field-types)|mandatory||The type of rate (`FIXED`, `VARIABLE`, etc.) For further details, refer to [Product Lending Rate Types](#tocSproductlendingratetypedoc).|
|rate|[RateString](#common-field-types)|mandatory||The rate to be applied.|
|comparisonRate|[RateString](#common-field-types)|optional||A comparison rate equivalent for this rate.|
|calculationFrequency|[ExternalRef](#common-field-types)|optional||The period after which the rate is applied to the balance to calculate the amount due for the period. Calculation of the amount is often daily (as balances may change) but accumulated until the total amount is 'applied' to the account (see _applicationFrequency_). Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax).|
|applicationFrequency|[ExternalRef](#common-field-types)|optional||The period after which the calculated amount(s) (see _calculationFrequency_) are 'applied' (i.e. debited or credited) to the account. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax).|
|interestPaymentDue|[Enum](#common-field-types)|optional||When loan payments are due to be paid within each period. The investment benefit of earlier payments affect the rate that can be offered.|
|repaymentType|[Enum](#common-field-types)|optional||Options in place for repayments. If absent, the lending rate is applicable to all repayment types.|
|loanPurpose|[Enum](#common-field-types)|optional||The reason for taking out the loan. If absent, the lending rate is applicable to all loan purposes.|
|tiers|[[BankingProductRateTierV3](#schemacdr-banking-apibankingproductratetierv3)]|optional||Rate tiers applicable for this rate.|
|additionalValue|string|conditional||Generic field containing additional information relevant to the [_lendingRateType_](#tocSproductlendingratetypedoc) specified. Whether mandatory or not is dependent on the value of [_lendingRateType_](#tocSproductlendingratetypedoc).|
|additionalInfo|string|optional||Display text providing more information on the rate.|
|additionalInfoUri|[URIString](#common-field-types)|optional||Link to a web page with more information on this rate.|

<h4 id="cdr-banking-api_bankingproductlendingratev2_enumerated-values-main">Enumerated Values</h4>

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

<h3 class="schema-toc" id="cdr-banking-api_schemas_tocSbankingproductratetierv3">BankingProductRateTierV3</h3>
<p id="tocSbankingproductratetierv3" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api_schema-base_bankingproductratetier"></a>
  <a class="schema-anchor" id="schemacdr-banking-apibankingproductratetierv3"></a>
</p>

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

*Defines the criteria and conditions for which a rate applies.*

<h3 id="cdr-banking-api_bankingproductratetierv3_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|name|string|mandatory||A display name for the tier.|
|unitOfMeasure|[Enum](#common-field-types)|mandatory||The unit of measure that applies to the _minimumValue_ and _maximumValue_ values e.g.,<ul><li>`DOLLAR` amount.<li>`PERCENT` (in the case of loan-to-value ratio or LVR).<li>Tier term period representing a discrete number of `MONTH`(s) or `DAY`(s) (in the case of term deposit tiers).</ul>|
|minimumValue|[Number](#common-field-types)|mandatory||The number of _unitOfMeasure_ units that form the lower bound of the tier. The tier should be inclusive of this value.|
|maximumValue|[Number](#common-field-types)|optional||The number of _unitOfMeasure_ units that form the upper bound of the tier or band. For a tier with a discrete value (as opposed to a range of values e.g., 1 month) this must be the same as _minimumValue_. Where this is the same as the _minimumValue_ value of the next-higher tier the referenced tier should be exclusive of this value. For example a term deposit of 2 months falls into the upper tier of the following tiers: (1 – 2 months, 2 – 3 months). If absent the tier's range has no upper bound.|
|rateApplicationMethod|[Enum](#common-field-types)|optional||The method used to calculate the amount to be applied using one or more tiers. A single rate may be applied to the entire balance or each applicable tier rate is applied to the portion of the balance that falls into that tier (referred to as 'bands' or 'steps').|
|applicabilityConditions|[BankingProductRateCondition](#schemacdr-banking-apibankingproductratecondition)|optional||Defines a condition for the applicability of a tiered rate.|
|additionalInfo|string|optional||Display text providing more information on the rate tier.|
|additionalInfoUri|[URIString](#common-field-types)|optional||Link to a web page with more information on this rate tier.|

<h4 id="cdr-banking-api_bankingproductratetierv3_enumerated-values-main">Enumerated Values</h4>

|Property|Value|
|---|---|
|unitOfMeasure|DAY|
|unitOfMeasure|DOLLAR|
|unitOfMeasure|MONTH|
|unitOfMeasure|PERCENT|
|rateApplicationMethod|PER_TIER|
|rateApplicationMethod|WHOLE_BALANCE|

<h3 class="schema-toc" id="cdr-banking-api_schemas_tocSbankingproductratecondition">BankingProductRateCondition</h3>
<p id="tocSbankingproductratecondition" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api_schema-base_bankingproductratecondition"></a>
  <a class="schema-anchor" id="schemacdr-banking-apibankingproductratecondition"></a>
</p>

```json
{
  "additionalInfo": "string",
  "additionalInfoUri": "string"
}
```

*Defines a condition for the applicability of a tiered rate.*

<h3 id="cdr-banking-api_bankingproductratecondition_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|additionalInfo|string|optional||Display text providing more information on the condition.|
|additionalInfoUri|[URIString](#common-field-types)|optional||Link to a web page with more information on this condition.|

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

<h3 class="schema-toc" id="cdr-banking-api_schemas_tocSresponsebankingaccountbyidv3">ResponseBankingAccountByIdV3</h3>
<p id="tocSresponsebankingaccountbyidv3" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api_schema-base_responsebankingaccountbyid"></a>
  <a class="schema-anchor" id="schemacdr-banking-apiresponsebankingaccountbyidv3"></a>
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
        "lendingRateType": "FIXED",
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
    ],
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
        "feeType": "DEPOSIT",
        "amount": "string",
        "balanceRate": "string",
        "transactionRate": "string",
        "accruedRate": "string",
        "accrualFrequency": "string",
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

<h3 id="cdr-banking-api_responsebankingaccountbyidv3_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|data|[BankingAccountDetailV3](#schemacdr-banking-apibankingaccountdetailv3)|mandatory||none|
|links|[Links](#schemacdr-banking-apilinks)|mandatory||none|
|meta|[Meta](#schemacdr-banking-apimeta)|optional||none|

<h3 class="schema-toc" id="cdr-banking-api_schemas_tocSbankingaccountdetailv3">BankingAccountDetailV3</h3>
<p id="tocSbankingaccountdetailv3" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api_schema-base_bankingaccountdetail"></a>
  <a class="schema-anchor" id="schemacdr-banking-apibankingaccountdetailv3"></a>
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
      "lendingRateType": "FIXED",
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
  ],
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
      "feeType": "DEPOSIT",
      "amount": "string",
      "balanceRate": "string",
      "transactionRate": "string",
      "accruedRate": "string",
      "accrualFrequency": "string",
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

<h3 id="cdr-banking-api_bankingaccountdetailv3_properties">Properties</h3>

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
|» termDeposit|[[BankingTermDepositAccount](#schemacdr-banking-apibankingtermdepositaccount)]|conditional||none|
|» creditCard|[BankingCreditCardAccount](#schemacdr-banking-apibankingcreditcardaccount)|conditional||none|
|» loan|[BankingLoanAccountV2](#schemacdr-banking-apibankingloanaccountv2)|conditional||none|
|» depositRate|[RateString](#common-field-types)|optional||Current rate to calculate interest earned being applied to deposit balances as it stands at the time of the API call.|
|» lendingRate|[RateString](#common-field-types)|optional||The current rate to calculate interest payable being applied to lending balances as it stands at the time of the API call.|
|» depositRates|[[BankingProductDepositRate](#schemacdr-banking-apibankingproductdepositrate)]|optional||Fully described deposit rates for this account based on the equivalent structure in Product Reference.|
|» lendingRates|[[BankingProductLendingRateV2](#schemacdr-banking-apibankingproductlendingratev2)]|optional||Fully described lending rates for this account based on the equivalent structure in Product Reference.|
|» features|[allOf]|optional||Array of features of the account based on the equivalent structure in Product Reference with the following additional field.|

*allOf*

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|»» *anonymous*|[BankingProductFeatureV2](#schemacdr-banking-apibankingproductfeaturev2)|mandatory||none|

*and*

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|»» *anonymous*|object|mandatory||none|
|»»» isActivated|[Boolean](#common-field-types)|optional|`true`|`true` if the feature is already activated and `false` if the feature is available for activation. Defaults to `true` if absent.<br>**Note:** this is an additional field appended to the feature object defined in the Product Reference payload.|

*continued*

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|» fees|[[BankingProductFee](#schemacdr-banking-apibankingproductfee)]|optional||Fees and charges applicable to the account based on the equivalent structure in Product Reference.|
|» addresses|[[CommonPhysicalAddress](#schemacdr-banking-apicommonphysicaladdress)]|optional||The addresses for the account to be used for correspondence.|

<h4 id="cdr-banking-api_bankingaccountdetailv3_enumerated-values-main">Enumerated Values</h4>

|Property|Value|
|---|---|
|specificAccountUType|creditCard|
|specificAccountUType|loan|
|specificAccountUType|termDeposit|

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

<h3 class="schema-toc" id="cdr-banking-api_schemas_tocSbankingloanaccountv2">BankingLoanAccountV2</h3>
<p id="tocSbankingloanaccountv2" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api_schema-base_bankingloanaccount"></a>
  <a class="schema-anchor" id="schemacdr-banking-apibankingloanaccountv2"></a>
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

<h3 id="cdr-banking-api_bankingloanaccountv2_properties">Properties</h3>

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
|repaymentType|[Enum](#common-field-types)|optional|`PRINCIPAL_AND_INTEREST`|Options in place for repayments. If absent defaults to `PRINCIPAL_AND_INTEREST`.|
|repaymentFrequency|[ExternalRef](#common-field-types)|optional||The expected or required repayment frequency. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax).|

<h4 id="cdr-banking-api_bankingloanaccountv2_enumerated-values-main">Enumerated Values</h4>

|Property|Value|
|---|---|
|repaymentType|INTEREST_ONLY|
|repaymentType|PRINCIPAL_AND_INTEREST|



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
| OTHER | Another eligibility criteria exists as described in the _additionalInfo_ field (if this option is specified then the _additionalInfo_ field is mandatory). | N/A |
| PENSION_RECIPIENT | Only a recipient of a government pension may apply for the product. | N/A |
| RESIDENCY_STATUS | An eligibility constraint based on residency status applies. | A description of the status required. |
| STAFF | Only a staff member of the provider may apply. | N/A |
| STUDENT | Only students may apply for the product. | N/A |



<a id="productfeetypedoc"></a>
<h3 id="tocSproductfeetypedoc">Product Fee Types</h3>

Description of the usage of the _feeType_ field as it applies to products.

| Value | Description | Use of _additionalValue_ Field |
| ----- | ----------- | ------------------------------ |
| DEPOSIT | A fee associated with making a deposit. | N/A |
| EVENT | A fee in relation to a particular event (e.g., ordering a new card, viewing a balance or stopping a cheque). | N/A |
| EXIT | A fee for closing the product. | N/A |
| PAYMENT | A fee associated with making a payment. | N/A |
| PERIODIC | A periodic fee such as a monthly account servicing fee. | The period of charge. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations). |
| PURCHASE | A fee associated with making a purchase at a merchant. | N/A |
| TRANSACTION | A fee associated with any transaction (incorporates `WITHDRAWAL`, `DEPOSIT`, `PAYMENT` and `PURCHASE`). | N/A |
| UPFRONT | A fee paid at the beginning of the product lifecycle, such as an establishment fee, loyalty program fee or application fee. | N/A |
| VARIABLE | An at-cost fee that is relevant to a customer's circumstances where the amount or rate may not be known until negotiated with the customer. | N/A |
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
| OTHER | Another eligibility criteria exists as described in the _additionalInfo_ field (if this option is specified then the _additionalInfo_ field is mandatory). | N/A |
| PENSION_RECIPIENT | Only a recipient of a government pension may receive the discount. | Optional. Should contain a description of which pensions qualify. |
| RESIDENCY_STATUS | An eligibility constraint based on residency status applies. | A description of the status required. |
| STAFF | Only a staff member of the provider may receive the discount. | N/A |
| STUDENT | Only students may receive the discount. | Optional. Should contain a description of who qualifies as a student, e.g., do apprentices qualify? |



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
