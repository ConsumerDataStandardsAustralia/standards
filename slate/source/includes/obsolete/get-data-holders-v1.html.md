---
title: Get Data Holders V1
#language_tabs: # must be one of https://git.io/vQNgJ
#  - shell
#  - javascript

toc_footers:
  - <a href='../../index.html'>Consumer Data Standards</a>

search: false
---

# Get Data Holders V1
This page documents the obsolete **version 1** of the Get Data Holders end point.

<aside class="info">
This version is will remain valid until a deprecation schedule is set.
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

<h2 class="schema-toc" id="tocSdataholdersstatuslist">DataHoldersStatusList</h2>

<a id="schemacdr-participant-discovery-apidataholdersstatuslist"></a>

```json
{
  "data": [
    {
      "legalEntityId": "string",
      "status": "ACTIVE"
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
|data|[[DataHolderStatus](#schemacdr-participant-discovery-apidataholderstatus)]|mandatory|Response data for the query|
|links|[Links](#schemacdr-participant-discovery-apilinks)|mandatory|none|
|meta|[Meta](#schemacdr-participant-discovery-apimeta)|mandatory|none|

<h2 class="schema-toc" id="tocSdataholderstatus">DataHolderStatus</h2>

<a id="schemacdr-participant-discovery-apidataholderstatus"></a>

```json
{
  "legalEntityId": "string",
  "status": "ACTIVE"
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|legalEntityId|string|mandatory|Unique id of the Data Holdert Legal Entity issued by the CDR Register.|
|status|string|mandatory|Data Holder status in the CDR Register|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ACTIVE|
|status|REMOVED|
