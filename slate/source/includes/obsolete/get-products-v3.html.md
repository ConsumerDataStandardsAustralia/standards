---
title: Get Products v3

#language_tabs: # must be one of https://git.io/vQNgJ
#  - shell
#  - javascript

toc_footers:
  - <a href='../../index.html'>Consumer Data Standards</a>

search: false
---

# Get Products V3
This page documents the obsolete version 3 of the Get Products endpoint.

This version is to be ceased to be called by data recipients by **Date TBC** and can be decommissioned by data holders as of that date.



## Get Products

<a id="opIdlistProducts"></a>

> Code samples

```http
GET https://data.holder.com.au/cds-au/v1/banking/products HTTP/1.1
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

fetch('https://data.holder.com.au/cds-au/v1/banking/products',
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

`GET /banking/products`

Obtain a list of products that are currently openly offered to the market

Note that the results returned by this end point are expected to be ordered in descending order according to ``lastUpdated``.

### Conventions
In the product reference payloads there are a number of recurring conventions that are explained here, in one place.

#### Arrays Of Features

In the product detail payload there are a number of arrays articulating generic features, constraints, prices, etc. The intent of these arrays is as follows:

- Each element in an array has the same structure so that clients can reliably interpret the payloads
- Each element as a type element that is an enumeration of the specific aspect of a product being described, such as types of fees.
- Each element has a field name [additionalValue](#productfeaturetypedoc).  This is a generic field with contents that will vary based on the type of object being described. The contents of this field for the ADDITIONAL_CARDS feature is the number of cards allowed while the contents of this field for the MAX_LIMIT constraint would be the maximum credit limit allowed for the product.
- An element in these arrays of the same type may appear more than once. For instance, a product may offer two separate loyalty programs that the customer can select from. A fixed term mortgage may have different rates for different term lengths.
- An element in these arrays may contain an additionalInfo and additionalInfoUri field. The additionalInfo field is used to provide displayable text clarifying the purpose of the element in some way when the product is presented to a customer. The additionalInfoUri provides a link to externally hosted information specifically relevant to that feature of the product.
- Depending on the type of data being represented there may be additional specific fields.

#### URIs To More Information

As the complexities and nuances of a financial product can not easily be fully expressed in a data structure without a high degree of complexity it is necessary to provide additional reference information that a potential customer can access so that they are fully informed of the features and implications of the product. The payloads for product reference therefore contain numerous fields that are provided to allow the product holder to describe the product more fully using a web page hosted on their online channels.

These URIs do not need to all link to different pages. If desired, they can all link to a single hosted page and use difference HTML anchors to focus on a specific topic such as eligibility or fees.

#### Linkage To Accounts
From the moment that a customer applies for a product and an account is created the account and the product that spawned it will diverge.  Rates and features of the product may change and a discount may be negotiated for the account.

For this reason, while productCategory is a common field between accounts and products, there is no specific ID that can be used to link an account to a product within the regime.

Similarly, many of the fields and objects in the product payload will appear in the account detail payload but the structures and semantics are not identical as one refers to a product that can potentially be originated and one refers to an account that actually has been instantiated and created along with the associated decisions inherent in that process.

#### Dates
It is expected that data consumers needing this data will call relatively frequently to ensure the data they have is representative of the current offering from a bank.  To minimise the volume and frequency of these calls the ability to set a lastUpdated field with the date and time of the last update to this product is included.  A call for a list of products can then be filtered to only return products that have been updated since the last time that data was obtained using the updated-since query parameter.

In addition, the concept of effective date and time has also been included.  This allows for a product to be marked for obsolescence, or introduction, from a certain time without the need for an update to show that a product has been changed.  The inclusion of these dates also removes the need to represent deleted products in the payload.  Products that are no long offered can be marked not effective for a few weeks before they are then removed from the product set as an option entirely.

Obsolete versions: [v1](../../includes/obsolete/get-products-v1.html), [v2](../../includes/obsolete/get-products-v2.html)

###Endpoint Version
|   |  |
|---|--|
|Version|**3**

<h3 id="get-products-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|effective|query|string|optional|Allows for the filtering of products based on whether the current time is within the period of time defined as effective by the effectiveFrom and effectiveTo fields. Valid values are ‘CURRENT’, ‘FUTURE’ and ‘ALL’. If absent defaults to 'CURRENT'|
|updated-since|query|[DateTimeString](#common-field-types)|optional|Only include products that have been updated after the specified date and time. If absent defaults to include all products|
|brand|query|string|optional|Filter results based on a specific brand|
|product-category|query|string|optional|Used to filter results on the productCategory field applicable to accounts. Any one of the valid values for this field can be supplied. If absent then all accounts returned.|
|page|query|[PositiveInteger](#common-field-types)|optional|Page of results to request (standard pagination)|
|page-size|query|[PositiveInteger](#common-field-types)|optional|Page size to request. Default is 25 (standard pagination)|
|x-v|header|string|mandatory|Version of the API end point requested by the client. Must be set to a positive integer. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If the value of [x-min-v](#request-headers) is equal to or higher than the value of [x-v](#request-headers) then the [x-min-v](#request-headers) header should be treated as absent. If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable. See [HTTP Headers](#request-headers)|
|x-min-v|header|string|optional|Minimum version of the API end point requested by the client. Must be set to a positive integer if provided. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|effective|ALL|
|effective|CURRENT|
|effective|FUTURE|
|product-category|BUSINESS_LOANS|
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

<h3 id="get-products-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[ResponseBankingProductListV2](#schemacdr-banking-apiresponsebankingproductlistv2)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Missing Field](#error-400-field-missing)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li><li>[400 - Invalid Date](#error-400-field-invalid-date-time)</li><li>[400 - Invalid Page Size](#error-400-field-invalid-page-size)</li></ul>|[ResponseErrorListV2](#schemacdr-banking-apiresponseerrorlistv2)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|[ResponseErrorListV2](#schemacdr-banking-apiresponseerrorlistv2)|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[422 - Invalid Page](#error-422-field-invalid-page)</li></ul>|[ResponseErrorListV2](#schemacdr-banking-apiresponseerrorlistv2)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-v|string||The [version](#response-headers) of the API end point that the data holder has responded with.|

  
    <aside class="success">
This operation does not require authentication
</aside>



<h2 class="schema-heading" id="cdr-banking-api-schemas">Schemas</h2>
<a class="schema-link" id="cdr-banking-api-schemas"></a>



<h3 class="schema-toc" id="tocSresponsebankingproductlistv2">ResponseBankingProductListV2</h3>

<a class="schema-anchor" id="schemacdr-banking-apiresponsebankingproductlistv2"></a>

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

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|data|object|mandatory|none|
|» products|[[BankingProductV4](#schemacdr-banking-apibankingproductv4)]|mandatory|The list of products returned.  If the filter results in an empty set then this array may have no records|
|links|[LinksPaginated](#schemacdr-banking-apilinkspaginated)|mandatory|none|
|meta|[MetaPaginated](#schemacdr-banking-apimetapaginated)|mandatory|none|

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



<h3 class="schema-toc" id="tocSlinkspaginated">LinksPaginated</h3>

<a class="schema-anchor" id="schemacdr-banking-apilinkspaginated"></a>

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

|Name|Type|Required|Description|
|---|---|---|---|
|self|[URIString](#common-field-types)|mandatory|Fully qualified link that generated the current response document|
|first|[URIString](#common-field-types)|conditional|URI to the first page of this set. Mandatory if this response is not the first page|
|prev|[URIString](#common-field-types)|conditional|URI to the previous page of this set. Mandatory if this response is not the first page|
|next|[URIString](#common-field-types)|conditional|URI to the next page of this set. Mandatory if this response is not the last page|
|last|[URIString](#common-field-types)|conditional|URI to the last page of this set. Mandatory if this response is not the last page|

<h3 class="schema-toc" id="tocSmetapaginated">MetaPaginated</h3>

<a class="schema-anchor" id="schemacdr-banking-apimetapaginated"></a>

```json
{
  "totalRecords": 0,
  "totalPages": 0
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|totalRecords|[NaturalNumber](#common-field-types)|mandatory|The total number of records in the full set. See [pagination](#pagination).|
|totalPages|[NaturalNumber](#common-field-types)|mandatory|The total number of pages in the full set. See [pagination](#pagination).|

<h3 class="schema-toc" id="tocSmetapaginatedtransaction">MetaPaginatedTransaction</h3>

<a class="schema-anchor" id="schemacdr-banking-apimetapaginatedtransaction"></a>

```json
{
  "totalRecords": 0,
  "totalPages": 0,
  "isQueryParamUnsupported": false
}

```

### Properties

*allOf*

|Name|Type|Required|Description|
|---|---|---|---|
|*anonymous*|[MetaPaginated](#schemacdr-banking-apimetapaginated)|mandatory|none|

*and*

|Name|Type|Required|Description|
|---|---|---|---|
|*anonymous*|object|mandatory|none|
|» isQueryParamUnsupported|[Boolean](#common-field-types)|optional|**true** if *"text"* query parameter is not supported|

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