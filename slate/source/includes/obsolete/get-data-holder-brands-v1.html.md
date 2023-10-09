---
title: Get Data Holder Brands V1
#language_tabs: # must be one of https://git.io/vQNgJ
#  - shell
#  - javascript

toc_footers:
  - <a href='../../index.html'>Consumer Data Standards</a>

search: false
---

# Get Data Holder Brands V1
This page documents the obsolete **version 1** of the Get Data Holder Brands end point.

<aside class="info">
This version was deprecated on 23rd December 2021 and retired on 21st September 2023
</aside>


## Get Data Holder Brands

<a id="opIdGetDataHolderBrands"></a>

> Code samples

```http
GET https://<register-base-url>/cdr-register/v1/{industry}/data-holders/brands HTTP/1.1

Accept: application/json
Authorization: string
x-v: string

```

```javascript
var headers = {
  'Accept':'application/json',
  'Authorization':'string',
  'x-v':'string'

};

$.ajax({
  url: 'https://<register-base-url>/cdr-register/v1/{industry}/data-holders/brands',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`GET /cdr-register/v1/{industry}/data-holders/brands`

Allows Data Recipients to discover data holder brands available in the CDR ecosystem.

###Endpoint Version
|   |  |
|---|--|
|Version|**1**

<h3 id="get-data-holder-brands-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|industry|path|string|mandatory|The industry the participant is retrieving data for (Banking, etc)|
|updated-since|query|string(date-time)|optional|query filter returns data holder brands updated since the specified date-time|
|page|query|integer(int32)|optional|the page number to return|
|page-size|query|integer(int32)|optional|the number of records to return per page|
|Authorization|header|string|mandatory|An Authorisation Token as per [RFC6750](https://tools.ietf.org/html/rfc6750).|
|x-v|header|string|mandatory|The version of the API end point requested by the client. Must be set to a positive integer.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|industry|banking|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "dataHolderBrandId": "string",
      "brandName": "string",
      "industry": "banking",
      "logoUri": "string",
      "legalEntity": {
        "legalEntityId": "string",
        "legalEntityName": "string",
        "logoUri": "string",
        "registrationNumber": "string",
        "registrationDate": "2019-08-24",
        "registeredCountry": "string",
        "abn": "string",
        "acn": "string",
        "arbn": "string",
        "industryCode": "string",
        "organisationType": "SOLE_TRADER"
      },
      "status": "ACTIVE",
      "endpointDetail": {
        "version": "string",
        "publicBaseUri": "string",
        "resourceBaseUri": "string",
        "infosecBaseUri": "string",
        "extensionBaseUri": "string",
        "websiteUri": "string"
      },
      "authDetails": [
        {
          "registerUType": "SIGNED-JWT",
          "jwksEndpoint": "string"
        }
      ],
      "lastUpdated": "2019-08-24T14:15:22Z"
    }
  ],
  "links": {
    "first": "string",
    "last": "string",
    "next": "string",
    "prev": "string",
    "self": "string"
  },
  "meta": {
    "totalPages": 0,
    "totalRecords": 0
  }
}
```

<h3 id="get-data-holder-brands-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[ResponseRegisterDataHolderBrandList](#schemacdr-participant-discovery-apiresponseregisterdataholderbrandlist)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request</br>Invalid industry path parameter|[ResponseErrorList](#schemacdr-participant-discovery-apiresponseerrorlist)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Invalid Bearer Token|None|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|Invalid x-v header</br>Invalid Accept header|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-v|string||The version of the API end point that the CDR Register has responded with.|



      <aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
<a href="#authorisation-scopes">cdr-register:bank:read</a>
</aside>


<h2 class="schema-toc" id="tocSresponseregisterdataholderbrandlist">ResponseRegisterDataHolderBrandList</h2>

<a id="schemacdr-participant-discovery-apiresponseregisterdataholderbrandlist"></a>

```json
{
  "data": [
    {
      "dataHolderBrandId": "string",
      "brandName": "string",
      "industry": "banking",
      "logoUri": "string",
      "legalEntity": {
        "legalEntityId": "string",
        "legalEntityName": "string",
        "logoUri": "string",
        "registrationNumber": "string",
        "registrationDate": "2019-08-24",
        "registeredCountry": "string",
        "abn": "string",
        "acn": "string",
        "arbn": "string",
        "industryCode": "string",
        "organisationType": "SOLE_TRADER"
      },
      "status": "ACTIVE",
      "endpointDetail": {
        "version": "string",
        "publicBaseUri": "string",
        "resourceBaseUri": "string",
        "infosecBaseUri": "string",
        "extensionBaseUri": "string",
        "websiteUri": "string"
      },
      "authDetails": [
        {
          "registerUType": "SIGNED-JWT",
          "jwksEndpoint": "string"
        }
      ],
      "lastUpdated": "2019-08-24T14:15:22Z"
    }
  ],
  "links": {
    "first": "string",
    "last": "string",
    "next": "string",
    "prev": "string",
    "self": "string"
  },
  "meta": {
    "totalPages": 0,
    "totalRecords": 0
  }
}

```

*Response containing a list of CDR Register Data Holder Brand objects*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|data|[[RegisterDataHolderBrand](#schemacdr-participant-discovery-apiregisterdataholderbrand)]|mandatory|Response data for the query|
|links|[LinksPaginated](#schemacdr-participant-discovery-apilinkspaginated)|mandatory|none|
|meta|[MetaPaginated](#schemacdr-participant-discovery-apimetapaginated)|mandatory|none|

<h2 class="schema-toc" id="tocSregisterdataholderbrand">RegisterDataHolderBrand</h2>

<a id="schemacdr-participant-discovery-apiregisterdataholderbrand"></a>

```json
{
  "dataHolderBrandId": "string",
  "brandName": "string",
  "industry": "banking",
  "logoUri": "string",
  "legalEntity": {
    "legalEntityId": "string",
    "legalEntityName": "string",
    "logoUri": "string",
    "registrationNumber": "string",
    "registrationDate": "2019-08-24",
    "registeredCountry": "string",
    "abn": "string",
    "acn": "string",
    "arbn": "string",
    "industryCode": "string",
    "organisationType": "SOLE_TRADER"
  },
  "status": "ACTIVE",
  "endpointDetail": {
    "version": "string",
    "publicBaseUri": "string",
    "resourceBaseUri": "string",
    "infosecBaseUri": "string",
    "extensionBaseUri": "string",
    "websiteUri": "string"
  },
  "authDetails": [
    {
      "registerUType": "SIGNED-JWT",
      "jwksEndpoint": "string"
    }
  ],
  "lastUpdated": "2019-08-24T14:15:22Z"
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|dataHolderBrandId|string|mandatory|Unique id of the Data Holder Brand issued by the CDR Register|
|brandName|string|mandatory|The name of Data Holder Brand|
|industry|string|mandatory|The industry the Data Holder brand belongs to (Banking, etc)|
|logoUri|[URIString](#common-field-types)|mandatory|Brand logo URI|
|legalEntity|[LegalEntityDetail](#schemacdr-participant-discovery-apilegalentitydetail)|mandatory|The data that is common to all organisations, regardless of the type (e.g. company, trust, partnership, government)|
|status|string|mandatory|none|
|endpointDetail|[RegisterDataHolderBrandServiceEndpoint](#schemacdr-participant-discovery-apiregisterdataholderbrandserviceendpoint)|mandatory|Endpoints related to Data Holder Brand services|
|authDetails|[[RegisterDataHolderAuth](#schemacdr-participant-discovery-apiregisterdataholderauth)]|mandatory|[Provides details of authorisation endpoints for Data Holders]|
|lastUpdated|[DateTimeString](#common-field-types)|mandatory|The date/time that the Data Holder Brand data was last updated in the Register|

#### Enumerated Values

|Property|Value|
|---|---|
|industry|banking|
|status|ACTIVE|
|status|INACTIVE|
|status|REMOVED|

<h2 class="schema-toc" id="tocSlegalentitydetail">LegalEntityDetail</h2>

<a id="schemacdr-participant-discovery-apilegalentitydetail"></a>

```json
{
  "legalEntityId": "string",
  "legalEntityName": "string",
  "logoUri": "string",
  "registrationNumber": "string",
  "registrationDate": "2019-08-24",
  "registeredCountry": "string",
  "abn": "string",
  "acn": "string",
  "arbn": "string",
  "industryCode": "string",
  "organisationType": "SOLE_TRADER"
}

```

*The data that is common to all organisations, regardless of the type (e.g. company, trust, partnership, government)*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|legalEntityId|string|mandatory|Unique id of the organisation issued by the CDR Register|
|legalEntityName|string|mandatory|Unique legal name of the organisation|
|logoUri|[URIString](#common-field-types)|mandatory|Legal Entity logo URI|
|registrationNumber|string|optional|Unique registration number (if the company is registered outside Australia)|
|registrationDate|[DateString](#common-field-types)|optional|Date of registration (if the company is registered outside Australia)|
|registeredCountry|string|optional|Country of registeration (if the company is registered outside Australia)|
|abn|string|optional|Australian Business Number for the organisation|
|acn|string|optional|Australian Company Number for the organisation|
|arbn|string|optional|Australian Registered Body Number.  ARBNs are issued to registrable Australian bodies and foreign companies|
|industryCode|string|optional|Industry Code for the organisation. [ANZSIC (2006)](http://www.abs.gov.au/anzsic)|
|organisationType|string|optional|Legal organisation type|

#### Enumerated Values

|Property|Value|
|---|---|
|organisationType|SOLE_TRADER|
|organisationType|COMPANY|
|organisationType|PARTNERSHIP|
|organisationType|TRUST|
|organisationType|GOVERNMENT_ENTITY|
|organisationType|OTHER|


<h2 class="schema-toc" id="tocSregisterdataholderbrandserviceendpoint">RegisterDataHolderBrandServiceEndpoint</h2>

<a id="schemacdr-participant-discovery-apiregisterdataholderbrandserviceendpoint"></a>

```json
{
  "version": "string",
  "publicBaseUri": "string",
  "resourceBaseUri": "string",
  "infosecBaseUri": "string",
  "extensionBaseUri": "string",
  "websiteUri": "string"
}

```

*Endpoints related to Data Holder Brand services*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|version|string|mandatory|The major version of the high level standards. This is not the version of the endpoint or the payload being requested but the version of the overall standards being applied. This version number will be "v" followed by the major version of the standards as a positive integer (e.g. v1, v12 or v76)|
|publicBaseUri|[URIString](#common-field-types)|mandatory|Base URI for the Data Holder's Consumer Data Standard public endpoints|
|resourceBaseUri|[URIString](#common-field-types)|mandatory|Base URI for the Data Holder's Consumer Data Standard resource endpoints|
|infosecBaseUri|[URIString](#common-field-types)|mandatory|Base URI for the Data Holder's Consumer Data Standard information security endpoints|
|extensionBaseUri|[URIString](#common-field-types)|optional|Base URI for the Data Holder extension endpoints to the Consumer Data Standard (optional)|
|websiteUri|[URIString](#common-field-types)|mandatory|Publicly available website or web resource URI|

<h2 class="schema-toc" id="tocSregisterdataholderauth">RegisterDataHolderAuth</h2>

<a id="schemacdr-participant-discovery-apiregisterdataholderauth"></a>

```json
{
  "registerUType": "SIGNED-JWT",
  "jwksEndpoint": "string"
}

```

*Provides details of authorisation endpoints for Data Holders*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|registerUType|string|mandatory|The type of authentication and authorisation mechanism in use|
|jwksEndpoint|[URIString](#common-field-types)|mandatory|JWKS endpoint for private_key_jwt client authentication with Data Recipient|

#### Enumerated Values

|Property|Value|
|---|---|
|registerUType|SIGNED-JWT|



<h2 class="schema-toc" id="tocSlinkspaginated">LinksPaginated</h2>

<a id="schemacdr-participant-discovery-apilinkspaginated"></a>

```json
{
  "first": "string",
  "last": "string",
  "next": "string",
  "prev": "string",
  "self": "string"
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|first|string|optional|URI to the first page of this set. Mandatory if this response is not the first page|
|last|string|optional|URI to the last page of this set. Mandatory if this response is not the last page|
|next|string|optional|URI to the next page of this set. Mandatory if this response is not the last page|
|prev|string|optional|URI to the previous page of this set. Mandatory if this response is not the first page|
|self|string|mandatory|Fully qualified link to this API call|

<h2 class="schema-toc" id="tocSmetapaginated">MetaPaginated</h2>

<a id="schemacdr-participant-discovery-apimetapaginated"></a>

```json
{
  "totalPages": 0,
  "totalRecords": 0
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|totalPages|integer(int32)|mandatory|The total number of pages in the full set|
|totalRecords|integer(int32)|mandatory|The total number of records in the full set|

<h2 class="schema-toc" id="tocSresponseerrorlist">ResponseErrorList</h2>

<a id="schemacdr-participant-discovery-apiresponseerrorlist"></a>

```json
{
  "errors": [
    {
      "code": "string",
      "title": "string",
      "detail": "string",
      "meta": {}
    }
  ]
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|errors|[[Error](#schemacdr-participant-discovery-apierror)]|mandatory|none|

<h2 class="schema-toc" id="tocSerror">Error</h2>

<a id="schemacdr-participant-discovery-apierror"></a>

```json
{
  "code": "string",
  "title": "string",
  "detail": "string",
  "meta": {}
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|code|string|mandatory|Error code|
|title|string|mandatory|Error title|
|detail|string|mandatory|Error detail|
|meta|object|optional|Optional additional data for specific error types|
