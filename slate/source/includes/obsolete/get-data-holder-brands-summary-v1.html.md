---
title: Get Data Holder Brands Summary V1
#language_tabs: # must be one of https://git.io/vQNgJ
#  - shell
#  - javascript

toc_footers:
  - <a href='../../index.html'>Consumer Data Standards</a>

search: false
---

# Get Data Holder Brands Summary V1
This page documents the obsolete **version 1** of the Get Data Holder Brands Summary endpoint.

<aside class="info">
This version was deprecated on Date TBC and retired on Date TBC
</aside>


## Get Data Holder Brands Summary

<a id="opIdGetDataHolderBrandsSummary"></a>

> Code samples

```http
GET https://<register-base-url>/cdr-register/v1/{industry}/data-holders/brands/summary HTTP/1.1

Accept: application/json
x-v: string
x-min-v: string
If-None-Match: string

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json',
  'x-v':'string',
  'x-min-v':'string',
  'If-None-Match':'string'

};

fetch('https://<register-base-url>/cdr-register/v1/{industry}/data-holders/brands/summary',
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

`GET /cdr-register/v1/{industry}/data-holders/brands/summary`

Endpoint used by participants to discover public details of Data Holder Brands from the CDR Register

###Endpoint Version
|   |  |
|---|--|
|Version|**1**

<h3 id="get-data-holder-brands-summary-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|industry|path|string|mandatory|The industry the participant is retrieving data for (Banking, etc)|
|x-v|header|string|mandatory|Version of the API end point requested by the client. Must be set to a positive integer. The Register should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If the value of [x-min-v](#request-headers) is equal to or higher than the value of [x-v](#request-headers) then the [x-min-v](#request-headers) header should be treated as absent. If all versions requested are not supported then the Register must respond with a 406 Not Acceptable. See [HTTP Headers](#request-headers)|
|x-min-v|header|string|optional|Minimum version of the API end point requested by the client. Must be set to a positive integer if provided. The Register should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If all versions requested are not supported then the Register must respond with a 406 Not Acceptable.|
|If-None-Match|header|string|optional|Makes the request method conditional on a recipient cache or origin server not having any current representation of the target resource with an entity-tag that does not match any of those listed in the field-value.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|industry|banking|
|industry|energy|
|industry|telco|
|industry|all|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "dataHolderBrandId": "string",
      "interimId": "string",
      "brandName": "string",
      "publicBaseUri": "string",
      "logoUri": "string",
      "industries": [
        "banking"
      ],
      "lastUpdated": "string",
      "abn": "string",
      "acn": "string",
      "arbn": "string"
    }
  ],
  "links": {
    "self": "string"
  },
  "meta": {}
}
```

<h3 id="get-data-holder-brands-summary-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[ResponseDataHoldersBrandSummaryList](#schemacdr-participant-discovery-apiresponsedataholdersbrandsummarylist)|
|304|[Not Modified](https://tools.ietf.org/html/rfc7232#section-4.1)|Not Modified - The current representation of the target resource matches with the entity-tag provided in the If-None-Match request header|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Missing Required Header / Invalid Version / Invalid Path Parameter|[ResponseErrorListV2](#schemacdr-participant-discovery-apiresponseerrorlistv2)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Industry Not Found|[ResponseErrorListV2](#schemacdr-participant-discovery-apiresponseerrorlistv2)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|Unsupported Version|[ResponseErrorListV2](#schemacdr-participant-discovery-apiresponseerrorlistv2)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-v|string||The version of the API end point that the CDR Register has responded with.|
|200|Etag|string||Entity tag that uniquely represents the requested resource.|
|304|Etag|string||Entity tag that uniquely represents the requested resource.|

  
    <aside class="success">
This operation does not require authentication
</aside>



<h2 class="schema-heading" id="cdr-participant-discovery-api-schemas">Schemas</h2>



<h3 class="schema-toc" id="tocSresponsedataholdersbrandsummarylist">ResponseDataHoldersBrandSummaryList</h3>

<a class="schema-anchor" id="schemacdr-participant-discovery-apiresponsedataholdersbrandsummarylist"></a>

```json
{
  "data": [
    {
      "dataHolderBrandId": "string",
      "interimId": "string",
      "brandName": "string",
      "publicBaseUri": "string",
      "logoUri": "string",
      "industries": [
        "banking"
      ],
      "lastUpdated": "string",
      "abn": "string",
      "acn": "string",
      "arbn": "string"
    }
  ],
  "links": {
    "self": "string"
  },
  "meta": {}
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|data|[[DataHolderBrandSummary](#schemacdr-participant-discovery-apidataholderbrandsummary)]|mandatory|Response data for the query|
|links|[Links](#schemacdr-participant-discovery-apilinks)|mandatory|none|
|meta|[Meta](#schemacdr-participant-discovery-apimeta)|mandatory|none|

<h3 class="schema-toc" id="tocSdataholderbrandsummary">DataHolderBrandSummary</h3>

<a class="schema-anchor" id="schemacdr-participant-discovery-apidataholderbrandsummary"></a>

```json
{
  "dataHolderBrandId": "string",
  "interimId": "string",
  "brandName": "string",
  "publicBaseUri": "string",
  "logoUri": "string",
  "industries": [
    "banking"
  ],
  "lastUpdated": "string",
  "abn": "string",
  "acn": "string",
  "arbn": "string"
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|dataHolderBrandId|string|optional|Unique id of the Data Holder Brand issued by the CDR Register|
|interimId|string|optional|Interim id of the Data Holder Brand issued by the CDR Register. This is to be used to uniquely identify the record when dataHolderBrandId is not populated and is not to be reused|
|brandName|string|mandatory|The name of Data Holder Brand|
|publicBaseUri|[URIString](#common-field-types)|mandatory|Base URI for the Data Holder's Consumer Data Standard public endpoints|
|logoUri|[URIString](#common-field-types)|mandatory|Brand logo URI|
|industries|[string]|mandatory|The industries the Data Holder Brand belongs to|
|lastUpdated|[DateTimeString](#common-field-types)|mandatory|The date/time that the Data Holder Brand data was last updated in the Register|
|abn|string|optional|Australian Business Number for the organisation|
|acn|string|optional|Australian Company Number for the organisation|
|arbn|string|optional|Australian Registered Body Number.  ARBNs are issued to registrable Australian bodies and foreign companies|

#### Enumerated Values

|Property|Value|
|---|---|
|industries|banking|
|industries|energy|
|industries|telco|



<h3 class="schema-toc" id="tocSlinks">Links</h3>

<a class="schema-anchor" id="schemacdr-participant-discovery-apilinks"></a>

```json
{
  "self": "string"
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|self|[URIString](#common-field-types)|mandatory|Fully qualified link to this API call|

<h3 class="schema-toc" id="tocSmeta">Meta</h3>

<a class="schema-anchor" id="schemacdr-participant-discovery-apimeta"></a>

```json
{}

```

### Properties

*None*

<h3 class="schema-toc" id="tocSmetaerror">MetaError</h3>

<a class="schema-anchor" id="schemacdr-participant-discovery-apimetaerror"></a>

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

<a class="schema-anchor" id="schemacdr-participant-discovery-apiresponseerrorlistv2"></a>

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
|errors|[[ResponseErrorListV2_errors](#schemacdr-participant-discovery-apiresponseerrorlistv2_errors)]|mandatory|none|

<h3 class="schema-toc" id="tocSresponseerrorlistv2_errors">ResponseErrorListV2_errors</h3>

<a class="schema-anchor" id="schemacdr-participant-discovery-apiresponseerrorlistv2_errors"></a>

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

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|code|string|mandatory|The code of the error encountered. Where the error is specific to the respondent, an application-specific error code, expressed as a string value. If the error is application-specific, the URN code that the specific error extends must be provided in the meta object. Otherwise, the value is the error code URN.|
|title|string|mandatory|A short, human-readable summary of the problem that MUST NOT change from occurrence to occurrence of the problem represented by the error code.|
|detail|string|mandatory|A human-readable explanation specific to this occurrence of the problem.|
|meta|[MetaError](#schemacdr-participant-discovery-apimetaerror)|optional|Additional data for customised error codes|

