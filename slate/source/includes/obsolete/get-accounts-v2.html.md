---
title: Get Accounts v2

#language_tabs: # must be one of https://git.io/vQNgJ
#  - shell
#  - javascript

toc_footers:
  - <a href='../../index.html'>Consumer Data Standards</a>

search: false
---

# Get Accounts V2
This page documents the obsolete version 2 of the Get Accounts endpoint.

This version is to be ceased to be called by data recipients by **Date TBC** and can be decommissioned by data holders as of that date.

## Get Accounts

<a id="opIdlistAccounts"></a>

> Code samples

```http
GET https://data.holder.com.au/cds-au/v1/banking/accounts HTTP/1.1
Host: data.holder.com.au
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

fetch('https://data.holder.com.au/cds-au/v1/banking/accounts',
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

`GET /banking/accounts`

Obtain a list of accounts.

Obsolete versions: [v1](../../includes/obsolete/get-accounts-v1.html)

###Endpoint Version
|   |  |
|---|--|
|Version|**2**

<h3 id="get-accounts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|product-category|query|string|optional|Used to filter results on the productCategory field applicable to accounts. Any one of the valid values for this field can be supplied. If absent then all accounts returned.|
|open-status|query|string|optional|Used to filter results according to open/closed status. Values can be OPEN, CLOSED or ALL. If absent then ALL is assumed|
|is-owned|query|[Boolean](#common-field-types)|optional|Filters accounts based on whether they are owned by the authorised customer.  True for owned accounts, false for unowned accounts and absent for all accounts|
|page|query|[PositiveInteger](#common-field-types)|optional|Page of results to request (standard pagination)|
|page-size|query|[PositiveInteger](#common-field-types)|optional|Page size to request. Default is 25 (standard pagination)|
|x-v|header|string|mandatory|Version of the API end point requested by the client. Must be set to a positive integer. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If the value of [x-min-v](#request-headers) is equal to or higher than the value of [x-v](#request-headers) then the [x-min-v](#request-headers) header should be treated as absent. If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable. See [HTTP Headers](#request-headers)|
|x-min-v|header|string|optional|Minimum version of the API end point requested by the client. Must be set to a positive integer if provided. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable.|
|x-fapi-interaction-id|header|string|optional|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|x-fapi-auth-date|header|string|conditional|The time when the customer last logged in to the Data Recipient Software Product as described in **[[FAPI-1.0-Baseline]](#nref-FAPI-1-0-Baseline)**.  Required for all resource calls (customer present and unattended). Not required for unauthenticated calls.|
|x-fapi-customer-ip-address|header|string|optional|The customer's original IP address if the customer is currently logged in to the Data Recipient Software Product. The presence of this header indicates that the API is being called in a customer present context. Not to be included for unauthenticated calls.|
|x-cds-client-headers|header|[Base64](#common-field-types)|conditional|The customer's original standard http headers [Base64](#common-field-types) encoded, including the original User Agent header, if the customer is currently logged in to the Data Recipient Software Product. Mandatory for customer present calls.  Not required for unattended or unauthenticated calls.|

#### Enumerated Values

|Parameter|Value|
|---|---|
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

<h3 id="get-accounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[ResponseBankingAccountListV2](#schemacdr-banking-apiresponsebankingaccountlistv2)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Missing Field](#error-400-field-missing)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li><li>[400 - Invalid Page Size](#error-400-field-invalid-page-size)</li></ul>|[ResponseErrorListV2](#schemacdr-banking-apiresponseerrorlistv2)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|[ResponseErrorListV2](#schemacdr-banking-apiresponseerrorlistv2)|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[422 - Invalid Page](#error-422-field-invalid-page)</li></ul>|[ResponseErrorListV2](#schemacdr-banking-apiresponseerrorlistv2)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-v|string||The [version](#response-headers) of the API end point that the data holder has responded with.|
|200|x-fapi-interaction-id|string||An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|400|x-fapi-interaction-id|string||An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|406|x-fapi-interaction-id|string||An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|422|x-fapi-interaction-id|string||An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|

  
    
      <aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
<a href="#authorisation-scopes">bank:accounts.basic:read</a>
</aside>



<h2 class="schema-heading" id="cdr-banking-api-schemas">Schemas</h2>
<a class="schema-link" id="cdr-banking-api-schemas"></a>



<h3 class="schema-toc" id="tocSresponsebankingaccountlistv2">ResponseBankingAccountListV2</h3>

<a class="schema-anchor" id="schemacdr-banking-apiresponsebankingaccountlistv2"></a>

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

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|data|object|mandatory|none|
|» accounts|[[BankingAccountV2](#schemacdr-banking-apibankingaccountv2)]|mandatory|The list of accounts returned. If the filter results in an empty set then this array may have no records|
|links|[LinksPaginated](#schemacdr-banking-apilinkspaginated)|mandatory|none|
|meta|[MetaPaginated](#schemacdr-banking-apimetapaginated)|mandatory|none|

<h3 class="schema-toc" id="tocSbankingaccountv2">BankingAccountV2</h3>

<a class="schema-anchor" id="schemacdr-banking-apibankingaccountv2"></a>

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

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|accountId|[ASCIIString](#common-field-types)|mandatory|A unique ID of the account adhering to the standards for ID permanence|
|creationDate|[DateString](#common-field-types)|optional|Date that the account was created (if known)|
|displayName|string|mandatory|The display name of the account as defined by the bank. This should not incorporate account numbers or PANs. If it does the values should be masked according to the rules of the MaskedAccountString common type.|
|nickname|string|optional|A customer supplied nick name for the account|
|openStatus|string|optional|Open or closed status for the account. If not present then OPEN is assumed|
|isOwned|[Boolean](#common-field-types)|optional|Flag indicating that the customer associated with the authorisation is an owner of the account. Does not indicate sole ownership, however. If not present then 'true' is assumed|
|accountOwnership|string|mandatory|Value indicating the number of customers that have ownership of the account, according to the data holder's definition of account ownership. Does not indicate that all account owners are eligible consumers|
|maskedNumber|[MaskedAccountString](#common-field-types)|mandatory|A masked version of the account. Whether BSB/Account Number, Credit Card PAN or another number|
|productCategory|[BankingProductCategory](#schemacdr-banking-apibankingproductcategory)|mandatory|The category to which a product or account belongs. See [here](#product-categories) for more details|
|productName|string|mandatory|The unique identifier of the account as defined by the data holder (akin to model number for the account)|

#### Enumerated Values

|Property|Value|
|---|---|
|openStatus|CLOSED|
|openStatus|OPEN|
|accountOwnership|UNKNOWN|
|accountOwnership|ONE_PARTY|
|accountOwnership|TWO_PARTY|
|accountOwnership|MANY_PARTY|
|accountOwnership|OTHER|



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

