---
title: Get Products v2

#language_tabs: # must be one of https://git.io/vQNgJ
#  - shell
#  - javascript

toc_footers:
  - <a href='../../index.html'>Consumer Data Standards</a>

search: false
---

# Get Products V2
This page documents the obsolete version 2 of the Get Products end point.

This version is to be ceased to be called by data recipients by **May 31st 2021** and can be decommissioned by data holders as of that date.

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

```javascript
var headers = {
  'Accept':'application/json',
  'x-v':'string',
  'x-min-v':'string'

};

$.ajax({
  url: 'https://data.holder.com.au/cds-au/v1/banking/products',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`GET /banking/products`

Obtain a list of products that are currently openly offered to the market

Note that the results returned by this end point are expected to be ordered according to updated-since

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

Similarly, many of the fields and objects in the product payload will appear in the account detail payload but the structures and semantics are not identical as one refers to a product that can potentially be originated and one refers to an account that actual has been instantiated and created along with the associated decisions inherent in that process.

#### Dates
It is expected that data consumers needing this data will call relatively frequently to ensure the data they have is representative of the current offering from a bank.  To minimise the volume and frequency of these calls the ability to set a lastUpdated field with the date and time of the last update to this product is included.  A call for a list of products can then be filtered to only return products that have been updated since the last time that data was obtained using the updated-since query parameter.

In addition, the concept of effective date and time has also been included.  This allows for a product to be marked for obsolescence, or introduction, from a certain time without the need for an update to show that a product has been changed.  The inclusion of these dates also removes the need to represent deleted products in the payload.  Products that are no long offered can be marked not effective for a few weeks before they are then removed from the product set as an option entirely.

NOTE: This version must be implemented by **July 2020**

Obsolete versions: [v1](get-products-v1.html)

###Endpoint Version
|   |  |
|---|--|
|Version|**2**

<h3 id="get-products-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|effective|query|string|optional|Allows for the filtering of products based on whether the current time is within the period of time defined as effective by the effectiveFrom and effectiveTo fields. Valid values are ‘CURRENT’, ‘FUTURE’ and ‘ALL’. If absent defaults to 'CURRENT'|
|updated-since|query|[DateTimeString](../../index.html#common-field-types)|optional|Only include products that have been updated after the specified date and time. If absent defaults to include all products|
|brand|query|string|optional|Filter results based on a specific brand|
|product-category|query|string|optional|Used to filter results on the productCategory field applicable to accounts. Any one of the valid values for this field can be supplied. If absent then all accounts returned.|
|page|query|[PositiveInteger](../../index.html#common-field-types)|optional|Page of results to request (standard pagination)|
|page-size|query|[PositiveInteger](../../index.html#common-field-types)|optional|Page size to request. Default is 25 (standard pagination)|
|x-v|header|string|mandatory|Version of the API end point requested by the client. Must be set to a positive integer. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If the value of [x-min-v](#request-headers) is equal to or higher than the value of [x-v](#request-headers) then the [x-min-v](#request-headers) header should be treated as absent. If all versions requested are not supported then the data holder should respond with a 406 Not Acceptable. See [HTTP Headers](#request-headers)|
|x-min-v|header|string|optional|Minimum version of the API end point requested by the client. Must be set to a positive integer if provided. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If all versions requested are not supported then the data holder should respond with a 406 Not Acceptable.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|effective|CURRENT|
|effective|FUTURE|
|effective|ALL|
|product-category|TRANS_AND_SAVINGS_ACCOUNTS|
|product-category|TERM_DEPOSITS|
|product-category|TRAVEL_CARDS|
|product-category|REGULATED_TRUST_ACCOUNTS|
|product-category|RESIDENTIAL_MORTGAGES|
|product-category|CRED_AND_CHRG_CARDS|
|product-category|PERS_LOANS|
|product-category|MARGIN_LOANS|
|product-category|LEASES|
|product-category|TRADE_FINANCE|
|product-category|OVERDRAFTS|
|product-category|BUSINESS_LOANS|

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
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[ResponseBankingProductList](#schemaresponsebankingproductlist)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-v|string||The [version](#response-headers) of the API end point that the data holder has responded with.|

<aside class="success">
This operation does not require authentication
</aside>

<h2 id="tocSresponsebankingproductlist">ResponseBankingProductList</h2>

<a id="schemaresponsebankingproductlist"></a>

```json
{
  "data": {
    "products": [
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

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|mandatory|none|none|
|» products|[[BankingProductV2](#schemabankingproductv2)]|mandatory|none|The list of products returned.  If the filter results in an empty set then this array may have no records|
|links|[LinksPaginated](#schemalinkspaginated)|mandatory|none|none|
|meta|[MetaPaginated](#schemametapaginated)|mandatory|none|none|

<h2 id="tocSbankingproductv2">BankingProductV2</h2>

<a id="schemabankingproductv2"></a>

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
  ]
}
...

### Properties

<h2 id="tocSbankingproductv2">BankingProductV2</h2>

<a id="schemabankingproductv2"></a>

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
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|productId|[ASCIIString](../../index.html#common-field-types)|mandatory|none|A data holder specific unique identifier for this product. This identifier must be unique to a product but does not otherwise need to adhere to ID permanence guidelines.|
|effectiveFrom|[DateTimeString](../../index.html#common-field-types)|optional|none|The date and time from which this product is effective (ie. is available for origination).  Used to enable the articulation of products to the regime before they are available for customers to originate|
|effectiveTo|[DateTimeString](../../index.html#common-field-types)|optional|none|The date and time at which this product will be retired and will no longer be offered.  Used to enable the managed deprecation of products|
|lastUpdated|[DateTimeString](../../index.html#common-field-types)|mandatory|none|The last date and time that the information for this product was changed (or the creation date for the product if it has never been altered)|
|productCategory|[BankingProductCategory](#schemabankingproductcategory)|mandatory|none|The category to which a product or account belongs. See [here](#product-categories) for more details|
|name|string|mandatory|none|The display name of the product|
|description|string|mandatory|none|A description of the product|
|brand|string|mandatory|none|A label of the brand for the product. Able to be used for filtering. For data holders with single brands this value is still required|
|brandName|string|optional|none|An optional display name of the brand|
|applicationUri|[URIString](../../index.html#common-field-types)|optional|none|A link to an application web page where this product can be applied for.|
|isTailored|[Boolean](../../index.html#common-field-types)|mandatory|none|Indicates whether the product is specifically tailored to a circumstance.  In this case fees and prices are significantly negotiated depending on context. While all products are open to a degree of tailoring this flag indicates that tailoring is expected and thus that the provision of specific fees and rates is not applicable|
|additionalInformation|object|optional|none|Object that contains links to additional information on specific topics|
|» overviewUri|[URIString](../../index.html#common-field-types)|optional|none|General overview of the product|
|» termsUri|[URIString](../../index.html#common-field-types)|optional|none|Terms and conditions for the product|
|» eligibilityUri|[URIString](../../index.html#common-field-types)|optional|none|Eligibility rules and criteria for the product|
|» feesAndPricingUri|[URIString](../../index.html#common-field-types)|optional|none|Description of fees, pricing, discounts, exemptions and bonuses for the product|
|» bundleUri|[URIString](../../index.html#common-field-types)|optional|none|Description of a bundle that this product can be part of|
|cardArt|[object]|optional|none|An array of card art images|
|» title|string|optional|none|Display label for the specific image|
|» imageUri|[URIString](../../index.html#common-field-types)|mandatory|none|Link to a PNG, JPG or GIF image with proportions defined by ISO 7810 ID-1 and width no greater than 512 pixels|

<h2 id="tocSbankingproductcategory">BankingProductCategory</h2>

<a id="schemabankingproductcategory"></a>

```json
"TRANS_AND_SAVINGS_ACCOUNTS"

```

*The category to which a product or account belongs. See [here](../../index.html#product-categories) for more details*


### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|mandatory|none|The category to which a product or account belongs. See [here](#product-categories) for more details|

#### Enumerated Values

|Property|Value|
|---|---|
|*anonymous*|TRANS_AND_SAVINGS_ACCOUNTS|
|*anonymous*|TERM_DEPOSITS|
|*anonymous*|TRAVEL_CARDS|
|*anonymous*|REGULATED_TRUST_ACCOUNTS|
|*anonymous*|RESIDENTIAL_MORTGAGES|
|*anonymous*|CRED_AND_CHRG_CARDS|
|*anonymous*|PERS_LOANS|
|*anonymous*|MARGIN_LOANS|
|*anonymous*|LEASES|
|*anonymous*|TRADE_FINANCE|
|*anonymous*|OVERDRAFTS|
|*anonymous*|BUSINESS_LOANS|


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
