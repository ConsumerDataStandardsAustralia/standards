

<h2 id="cdr-participant-discovery-api_get-data-holder-brands">Get Data Holder Brands</h2>
<p id="get-data-holder-brands" class="orig-anchor"></p>

> Code samples

```http
GET https://<register-base-url>/cdr-register/v1/{industry}/data-holders/brands HTTP/1.1
Host: <register-base-url>
Accept: application/json
Authorization: string
x-v: 1
x-min-v: string
```

```javascript--nodejs
const fetch = require('node-fetch');
const headers = {
  'Accept':'application/json',
  'Authorization':'string',
  'x-v':'1',
  'x-min-v':'string'
};

fetch('https://<register-base-url>/cdr-register/v1/{industry}/data-holders/brands', {
  method: 'GET',
  headers: headers
}).then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

`GET /cdr-register/v1/{industry}/data-holders/brands`

Allows Data Recipients to discover Data Holder Brands available in the CDR ecosystem.

Obsolete versions: [v1](../../../../includes/obsolete/get-data-holder-brands-v1.html), [v2](../../../../includes/obsolete/get-data-holder-brands-v2.html)

<h3 id="cdr-participant-discovery-api_get-data-holder-brands_endpoint-version">Endpoint Version</h3>
|   |  |
|---|--|
|Version|**3**

<h3 id="cdr-participant-discovery-api_get-data-holder-brands_parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|industry|path|[Enum](#common-field-types)|mandatory|The industry the participant is retrieving data for (Banking, etc)|
|Authorization|header|[ExternalRef](#common-field-types)|mandatory|An Authorisation Token as per **[[RFC6750]](#nref-RFC6750)**.|
|x-v|header|string|optional|The version of the API endpoint requested by the client. Must be set to a positive integer. For backwards compatiblity defaults to 1 if absent. Note that once version 1 is decommissioned the header will be mandatory for a valid response to be obtained|
|x-min-v|header|string|optional|The [minimum version](https://consumerdatastandardsaustralia.github.io/standards/#http-headers) of the API endpoint requested by the client. Must be set to a positive integer if provided.|
|updated-since|query|[DateTimeString](#common-field-types)|optional|query filter returns results updated since the specified date-time|
|page|query|[PositiveInteger](#common-field-types)|optional|the page number to return|
|page-size|query|[PositiveInteger](#common-field-types)|optional|the number of records to return per page|

<h4 id="cdr-participant-discovery-api_get-data-holder-brands_enumerated-values-parameters">Enumerated Values</h4>

|Parameter|Value|
|---|---|
|industry|banking|
|industry|energy|
|industry|non-bank-lending|
|industry|telco|
|industry|all|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "dataHolderBrandId": "string",
      "brandName": "string",
      "industries": [
        "banking"
      ],
      "logoUri": "string",
      "legalEntity": {
        "legalEntityId": "string",
        "legalEntityName": "string",
        "logoUri": "string",
        "registrationNumber": "string",
        "registrationDate": "string",
        "registeredCountry": "string",
        "abn": "string",
        "acn": "string",
        "arbn": "string",
        "anzsicDivision": "string",
        "organisationType": "SOLE_TRADER",
        "status": "ACTIVE"
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
      "lastUpdated": "string"
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

<h3 id="cdr-participant-discovery-api_get-data-holder-brands_responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[ResponseRegisterDataHolderBrandList](#schemacdr-participant-discovery-apiresponseregisterdataholderbrandlist)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Missing Required Header / Invalid Version / Invalid Path Parameter|[ResponseErrorListV2](#schemacdr-participant-discovery-apiresponseerrorlistv2)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Invalid Bearer Token|None|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|Unsupported Version|[ResponseErrorListV2](#schemacdr-participant-discovery-apiresponseerrorlistv2)|

<h3 id="cdr-participant-discovery-api_get-data-holder-brands_response-headers">Response Headers</h3>

|Status|Header|Type|Description|
|---|---|---|---|---|
|200|x-v|string|The version of the API endpoint that the CDR Register has responded with.|
|401|WWW-Authenticate|[ExternalRef](#common-field-types)|The Response Header Field as per **[[RFC6750]](#nref-RFC6750)**|

  
    
      <aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
<a href="#authorisation-scopes">cdr-register:read</a>
</aside>

    
  

<h2 id="cdr-participant-discovery-api_get-data-holder-brands-summary">Get Data Holder Brands Summary</h2>
<p id="get-data-holder-brands-summary" class="orig-anchor"></p>

> Code samples

```http
GET https://<register-base-url>/cdr-register/v1/{industry}/data-holders/brands/summary HTTP/1.1
Host: <register-base-url>
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

fetch('https://<register-base-url>/cdr-register/v1/{industry}/data-holders/brands/summary', {
  method: 'GET',
  headers: headers
}).then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

`GET /cdr-register/v1/{industry}/data-holders/brands/summary`

Endpoint used by participants to discover public details of Data Holder Brands from the CDR Register

Obsolete versions: [v1](../../../../includes/obsolete/get-data-holder-brands-summary-v1.html)

<h3 id="cdr-participant-discovery-api_get-data-holder-brands-summary_endpoint-version">Endpoint Version</h3>
|   |  |
|---|--|
|Version|**2**

<h3 id="cdr-participant-discovery-api_get-data-holder-brands-summary_parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|industry|path|[Enum](#common-field-types)|mandatory|The industry the participant is retrieving data for (Banking, etc)|
|x-v|header|string|mandatory|The version of the API endpoint requested by the client. Must be set to a positive integer.|
|x-min-v|header|string|optional|The [minimum version](https://consumerdatastandardsaustralia.github.io/standards/#http-headers) of the API endpoint requested by the client. Must be set to a positive integer if provided.|
|If-None-Match|header|[ASCIIString](#common-field-types)|optional|Makes the request method conditional on a recipient cache or origin server not having any current representation of the target resource with an entity-tag that does not match any of those listed in the field-value.|

<h4 id="cdr-participant-discovery-api_get-data-holder-brands-summary_enumerated-values-parameters">Enumerated Values</h4>

|Parameter|Value|
|---|---|
|industry|banking|
|industry|energy|
|industry|non-bank-lending|
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

<h3 id="cdr-participant-discovery-api_get-data-holder-brands-summary_responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[ResponseDataHoldersBrandSummaryList](#schemacdr-participant-discovery-apiresponsedataholdersbrandsummarylist)|
|304|[Not Modified](https://tools.ietf.org/html/rfc7232#section-4.1)|Not Modified - The current representation of the target resource matches with the entity-tag provided in the If-None-Match request header|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Missing Required Header / Invalid Version / Invalid Path Parameter|[ResponseErrorListV2](#schemacdr-participant-discovery-apiresponseerrorlistv2)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Industry Not Found|[ResponseErrorListV2](#schemacdr-participant-discovery-apiresponseerrorlistv2)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|Unsupported Version|[ResponseErrorListV2](#schemacdr-participant-discovery-apiresponseerrorlistv2)|

<h3 id="cdr-participant-discovery-api_get-data-holder-brands-summary_response-headers">Response Headers</h3>

|Status|Header|Type|Description|
|---|---|---|---|---|
|200|x-v|string|The version of the API endpoint that the CDR Register has responded with.|
|200|Etag|[ASCIIString](#common-field-types)|Entity tag that uniquely represents the requested resource.|
|304|Etag|[ASCIIString](#common-field-types)|Entity tag that uniquely represents the requested resource.|

  
    <aside class="success">
This operation does not require authentication
</aside>

  

<h2 id="cdr-participant-discovery-api_get-data-holder-statuses">Get Data Holder Statuses</h2>
<p id="get-data-holder-statuses" class="orig-anchor"></p>

> Code samples

```http
GET https://<register-base-url>/cdr-register/v1/{industry}/data-holders/status HTTP/1.1
Host: <register-base-url>
Accept: application/json
x-v: 1
x-min-v: string
If-None-Match: string
```

```javascript--nodejs
const fetch = require('node-fetch');
const headers = {
  'Accept':'application/json',
  'x-v':'1',
  'x-min-v':'string',
  'If-None-Match':'string'
};

fetch('https://<register-base-url>/cdr-register/v1/{industry}/data-holders/status', {
  method: 'GET',
  headers: headers
}).then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

`GET /cdr-register/v1/{industry}/data-holders/status`

Endpoint used by participants to discover the statuses for Data Holders from the CDR Register

Obsolete versions: [v1](../../../../includes/obsolete/get-data-holder-statuses-v1.html)

<h3 id="cdr-participant-discovery-api_get-data-holder-statuses_endpoint-version">Endpoint Version</h3>
|   |  |
|---|--|
|Version|**2**

<h3 id="cdr-participant-discovery-api_get-data-holder-statuses_parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|industry|path|[Enum](#common-field-types)|mandatory|The industry the participant is retrieving data for (Banking, etc)|
|x-v|header|string|optional|The version of the API endpoint requested by the client. Must be set to a positive integer. For backwards compatiblity defaults to 1 if absent. Note that once version 1 is decommissioned the header will be mandatory for a valid response to be obtained|
|x-min-v|header|string|optional|The [minimum version](https://consumerdatastandardsaustralia.github.io/standards/#http-headers) of the API endpoint requested by the client. Must be set to a positive integer if provided.|
|If-None-Match|header|[ASCIIString](#common-field-types)|optional|Makes the request method conditional on a recipient cache or origin server not having any current representation of the target resource with an entity-tag that does not match any of those listed in the field-value.|

<h4 id="cdr-participant-discovery-api_get-data-holder-statuses_enumerated-values-parameters">Enumerated Values</h4>

|Parameter|Value|
|---|---|
|industry|banking|
|industry|energy|
|industry|non-bank-lending|
|industry|telco|
|industry|all|

> Example responses

> 200 Response

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

<h3 id="cdr-participant-discovery-api_get-data-holder-statuses_responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[DataHoldersStatusList](#schemacdr-participant-discovery-apidataholdersstatuslist)|
|304|[Not Modified](https://tools.ietf.org/html/rfc7232#section-4.1)|Not Modified - The current representation of the target resource matches with the entity-tag provided in the If-None-Match request header|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Missing Required Header / Invalid Version / Invalid Path Parameter|[ResponseErrorListV2](#schemacdr-participant-discovery-apiresponseerrorlistv2)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|Unsupported Version|[ResponseErrorListV2](#schemacdr-participant-discovery-apiresponseerrorlistv2)|

<h3 id="cdr-participant-discovery-api_get-data-holder-statuses_response-headers">Response Headers</h3>

|Status|Header|Type|Description|
|---|---|---|---|---|
|200|x-v|string|The version of the API endpoint that the CDR Register has responded with.|
|200|Etag|[ASCIIString](#common-field-types)|Entity tag that uniquely represents the requested resource.|
|304|Etag|[ASCIIString](#common-field-types)|Entity tag that uniquely represents the requested resource.|

  
    <aside class="success">
This operation does not require authentication
</aside>

  

<h2 class="schema-heading" id="cdr-participant-discovery-api-schemas">Schemas</h2>

<h3 class="schema-toc" id="cdr-participant-discovery-api_schemas_tocSresponseregisterdataholderbrandlist">ResponseRegisterDataHolderBrandList</h3>
<p id="tocSresponseregisterdataholderbrandlist" class="orig-anchor"></p>

<p>
  <a id="cdr-participant-discovery-api_schema-base_responseregisterdataholderbrandlist"></a>
  <a class="schema-anchor" id="schemacdr-participant-discovery-apiresponseregisterdataholderbrandlist"></a>
</p>

```json
{
  "data": [
    {
      "dataHolderBrandId": "string",
      "brandName": "string",
      "industries": [
        "banking"
      ],
      "logoUri": "string",
      "legalEntity": {
        "legalEntityId": "string",
        "legalEntityName": "string",
        "logoUri": "string",
        "registrationNumber": "string",
        "registrationDate": "string",
        "registeredCountry": "string",
        "abn": "string",
        "acn": "string",
        "arbn": "string",
        "anzsicDivision": "string",
        "organisationType": "SOLE_TRADER",
        "status": "ACTIVE"
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
      "lastUpdated": "string"
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

<h3 id="cdr-participant-discovery-api_responseregisterdataholderbrandlist_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|data|[[RegisterDataHolderBrand](#schemacdr-participant-discovery-apiregisterdataholderbrand)]|mandatory|Response data for the query|
|links|[LinksPaginated](#schemacdr-participant-discovery-apilinkspaginated)|mandatory|none|
|meta|[MetaPaginated](#schemacdr-participant-discovery-apimetapaginated)|mandatory|none|

<h3 class="schema-toc" id="cdr-participant-discovery-api_schemas_tocSregisterdataholderbrand">RegisterDataHolderBrand</h3>
<p id="tocSregisterdataholderbrand" class="orig-anchor"></p>

<p>
  <a id="cdr-participant-discovery-api_schema-base_registerdataholderbrand"></a>
  <a class="schema-anchor" id="schemacdr-participant-discovery-apiregisterdataholderbrand"></a>
</p>

```json
{
  "dataHolderBrandId": "string",
  "brandName": "string",
  "industries": [
    "banking"
  ],
  "logoUri": "string",
  "legalEntity": {
    "legalEntityId": "string",
    "legalEntityName": "string",
    "logoUri": "string",
    "registrationNumber": "string",
    "registrationDate": "string",
    "registeredCountry": "string",
    "abn": "string",
    "acn": "string",
    "arbn": "string",
    "anzsicDivision": "string",
    "organisationType": "SOLE_TRADER",
    "status": "ACTIVE"
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
  "lastUpdated": "string"
}
```

<h3 id="cdr-participant-discovery-api_registerdataholderbrand_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|dataHolderBrandId|string|mandatory|Unique id of the Data Holder Brand issued by the CDR Register|
|brandName|string|mandatory|The name of Data Holder Brand|
|industries|[[Enum](#common-field-types)]|mandatory|The industries the Data Holder Brand belongs to|
|logoUri|[URIString](#common-field-types)|mandatory|Brand logo URI|
|legalEntity|[LegalEntityDetail](#schemacdr-participant-discovery-apilegalentitydetail)|mandatory|The data that is common to all organisations, regardless of the type (e.g. company, trust, partnership, government)|
|status|[Enum](#common-field-types)|mandatory|none|
|endpointDetail|[RegisterDataHolderBrandServiceEndpoint](#schemacdr-participant-discovery-apiregisterdataholderbrandserviceendpoint)|mandatory|Endpoints related to Data Holder Brand services|
|authDetails|[[RegisterDataHolderAuth](#schemacdr-participant-discovery-apiregisterdataholderauth)]|mandatory|[Defines the mechanism used and associated endpoints for Data Holder to Data Recipient authentication]|
|lastUpdated|[DateTimeString](#common-field-types)|mandatory|The date/time that the Data Holder Brand data was last updated in the Register|

<h4 id="cdr-participant-discovery-api_registerdataholderbrand_enumerated-values-main">Enumerated Values</h4>

|Property|Value|
|---|---|
|industries|banking|
|industries|energy|
|industries|non-bank-lending|
|industries|telco|
|status|ACTIVE|
|status|INACTIVE|
|status|REMOVED|

<h3 class="schema-toc" id="cdr-participant-discovery-api_schemas_tocSresponsedataholdersbrandsummarylist">ResponseDataHoldersBrandSummaryList</h3>
<p id="tocSresponsedataholdersbrandsummarylist" class="orig-anchor"></p>

<p>
  <a id="cdr-participant-discovery-api_schema-base_responsedataholdersbrandsummarylist"></a>
  <a class="schema-anchor" id="schemacdr-participant-discovery-apiresponsedataholdersbrandsummarylist"></a>
</p>

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

<h3 id="cdr-participant-discovery-api_responsedataholdersbrandsummarylist_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|data|[[DataHolderBrandSummary](#schemacdr-participant-discovery-apidataholderbrandsummary)]|mandatory|Response data for the query|
|links|[Links](#schemacdr-participant-discovery-apilinks)|mandatory|none|
|meta|[Meta](#schemacdr-participant-discovery-apimeta)|mandatory|none|

<h3 class="schema-toc" id="cdr-participant-discovery-api_schemas_tocSdataholderbrandsummary">DataHolderBrandSummary</h3>
<p id="tocSdataholderbrandsummary" class="orig-anchor"></p>

<p>
  <a id="cdr-participant-discovery-api_schema-base_dataholderbrandsummary"></a>
  <a class="schema-anchor" id="schemacdr-participant-discovery-apidataholderbrandsummary"></a>
</p>

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

<h3 id="cdr-participant-discovery-api_dataholderbrandsummary_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|dataHolderBrandId|string|optional|Unique id of the Data Holder Brand issued by the CDR Register|
|interimId|string|optional|Interim id of the Data Holder Brand issued by the CDR Register. This is to be used to uniquely identify the record when dataHolderBrandId is not populated and is not to be reused|
|brandName|string|mandatory|The name of Data Holder Brand|
|publicBaseUri|[URIString](#common-field-types)|mandatory|Base URI for the Data Holder's Consumer Data Standard public endpoints|
|logoUri|[URIString](#common-field-types)|mandatory|Brand logo URI|
|industries|[[Enum](#common-field-types)]|mandatory|The industries the Data Holder Brand belongs to|
|lastUpdated|[DateTimeString](#common-field-types)|mandatory|The date/time that the Data Holder Brand data was last updated in the Register|
|abn|string|optional|Australian Business Number for the organisation|
|acn|string|optional|Australian Company Number for the organisation|
|arbn|string|optional|Australian Registered Body Number. ARBNs are issued to registrable Australian bodies and foreign companies|

<h4 id="cdr-participant-discovery-api_dataholderbrandsummary_enumerated-values-main">Enumerated Values</h4>

|Property|Value|
|---|---|
|industries|banking|
|industries|energy|
|industries|non-bank-lending|
|industries|telco|

<h3 class="schema-toc" id="cdr-participant-discovery-api_schemas_tocSdataholdersstatuslist">DataHoldersStatusList</h3>
<p id="tocSdataholdersstatuslist" class="orig-anchor"></p>

<p>
  <a id="cdr-participant-discovery-api_schema-base_dataholdersstatuslist"></a>
  <a class="schema-anchor" id="schemacdr-participant-discovery-apidataholdersstatuslist"></a>
</p>

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

<h3 id="cdr-participant-discovery-api_dataholdersstatuslist_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|data|[[DataHolderStatus](#schemacdr-participant-discovery-apidataholderstatus)]|mandatory|Response data for the query|
|links|[Links](#schemacdr-participant-discovery-apilinks)|mandatory|none|
|meta|[Meta](#schemacdr-participant-discovery-apimeta)|mandatory|none|

<h3 class="schema-toc" id="cdr-participant-discovery-api_schemas_tocSdataholderstatus">DataHolderStatus</h3>
<p id="tocSdataholderstatus" class="orig-anchor"></p>

<p>
  <a id="cdr-participant-discovery-api_schema-base_dataholderstatus"></a>
  <a class="schema-anchor" id="schemacdr-participant-discovery-apidataholderstatus"></a>
</p>

```json
{
  "legalEntityId": "string",
  "status": "ACTIVE"
}
```

<h3 id="cdr-participant-discovery-api_dataholderstatus_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|legalEntityId|string|mandatory|Unique id of the Data Holder Legal Entity issued by the CDR Register.|
|status|[Enum](#common-field-types)|mandatory|Data Holder status in the CDR Register|

<h4 id="cdr-participant-discovery-api_dataholderstatus_enumerated-values-main">Enumerated Values</h4>

|Property|Value|
|---|---|
|status|ACTIVE|
|status|REMOVED|

<h3 class="schema-toc" id="cdr-participant-discovery-api_schemas_tocSlegalentitydetail">LegalEntityDetail</h3>
<p id="tocSlegalentitydetail" class="orig-anchor"></p>

<p>
  <a id="cdr-participant-discovery-api_schema-base_legalentitydetail"></a>
  <a class="schema-anchor" id="schemacdr-participant-discovery-apilegalentitydetail"></a>
</p>

```json
{
  "legalEntityId": "string",
  "legalEntityName": "string",
  "logoUri": "string",
  "registrationNumber": "string",
  "registrationDate": "string",
  "registeredCountry": "string",
  "abn": "string",
  "acn": "string",
  "arbn": "string",
  "anzsicDivision": "string",
  "organisationType": "SOLE_TRADER",
  "status": "ACTIVE"
}
```

*The data that is common to all organisations, regardless of the type (e.g. company, trust, partnership, government)*

<h3 id="cdr-participant-discovery-api_legalentitydetail_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|legalEntityId|string|mandatory|Unique id of the organisation issued by the CDR Register|
|legalEntityName|string|mandatory|Unique legal name of the organisation|
|logoUri|[URIString](#common-field-types)|mandatory|Legal Entity logo URI|
|registrationNumber|string|optional|Unique registration number (if the company is registered outside Australia)|
|registrationDate|[DateString](#common-field-types)|optional|Date of registration (if the company is registered outside Australia)|
|registeredCountry|string|optional|Country of registration (if the company is registered outside Australia)|
|abn|string|optional|Australian Business Number for the organisation|
|acn|string|optional|Australian Company Number for the organisation|
|arbn|string|optional|Australian Registered Body Number. ARBNs are issued to registrable Australian bodies and foreign companies|
|anzsicDivision|[ExternalRef](#common-field-types)|optional|ANZSIC division of the organisation. **[[ANZSIC-2006]](#iref-ANZSIC-2006)**|
|organisationType|[Enum](#common-field-types)|optional|Legal organisation type|
|status|[Enum](#common-field-types)|mandatory|none|

<h4 id="cdr-participant-discovery-api_legalentitydetail_enumerated-values-main">Enumerated Values</h4>

|Property|Value|
|---|---|
|organisationType|SOLE_TRADER|
|organisationType|COMPANY|
|organisationType|PARTNERSHIP|
|organisationType|TRUST|
|organisationType|GOVERNMENT_ENTITY|
|organisationType|OTHER|
|status|ACTIVE|
|status|REMOVED|

<h3 class="schema-toc" id="cdr-participant-discovery-api_schemas_tocSregisterdataholderbrandserviceendpoint">RegisterDataHolderBrandServiceEndpoint</h3>
<p id="tocSregisterdataholderbrandserviceendpoint" class="orig-anchor"></p>

<p>
  <a id="cdr-participant-discovery-api_schema-base_registerdataholderbrandserviceendpoint"></a>
  <a class="schema-anchor" id="schemacdr-participant-discovery-apiregisterdataholderbrandserviceendpoint"></a>
</p>

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

<h3 id="cdr-participant-discovery-api_registerdataholderbrandserviceendpoint_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|version|string|mandatory|The major version of the high level standards. This is not the version of the endpoint or the payload being requested but the version of the overall standards being applied. This version number will be "v" followed by the major version of the standards as a positive integer (e.g. v1, v12 or v76)|
|publicBaseUri|[URIString](#common-field-types)|mandatory|Base URI for the Data Holder's Consumer Data Standard public endpoints|
|resourceBaseUri|[URIString](#common-field-types)|mandatory|Base URI for the Data Holder's Consumer Data Standard resource endpoints|
|infosecBaseUri|[URIString](#common-field-types)|mandatory|Base URI for the Data Holder's Consumer Data Standard information security endpoints|
|extensionBaseUri|[URIString](#common-field-types)|optional|Base URI for the Data Holder extension endpoints to the Consumer Data Standard (optional)|
|websiteUri|[URIString](#common-field-types)|mandatory|Publicly available website or web resource URI|

<h3 class="schema-toc" id="cdr-participant-discovery-api_schemas_tocSregisterdataholderauth">RegisterDataHolderAuth</h3>
<p id="tocSregisterdataholderauth" class="orig-anchor"></p>

<p>
  <a id="cdr-participant-discovery-api_schema-base_registerdataholderauth"></a>
  <a class="schema-anchor" id="schemacdr-participant-discovery-apiregisterdataholderauth"></a>
</p>

```json
{
  "registerUType": "SIGNED-JWT",
  "jwksEndpoint": "string"
}
```

*Defines the mechanism used and associated endpoints for Data Holder to Data Recipient authentication*

<h3 id="cdr-participant-discovery-api_registerdataholderauth_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|registerUType|[Enum](#common-field-types)|mandatory|The type of authentication and authorisation mechanism in use|
|jwksEndpoint|[URIString](#common-field-types)|mandatory|JWKS endpoint used for authentication by the Data Holder with the Data Recipient|

<h4 id="cdr-participant-discovery-api_registerdataholderauth_enumerated-values-main">Enumerated Values</h4>

|Property|Value|
|---|---|
|registerUType|SIGNED-JWT|

<h3 class="schema-toc" id="cdr-participant-discovery-api_schemas_tocSlinkspaginated">LinksPaginated</h3>
<p id="tocSlinkspaginated" class="orig-anchor"></p>

<p>
  <a id="cdr-participant-discovery-api_schema-base_linkspaginated"></a>
  <a class="schema-anchor" id="schemacdr-participant-discovery-apilinkspaginated"></a>
</p>

```json
{
  "first": "string",
  "last": "string",
  "next": "string",
  "prev": "string",
  "self": "string"
}
```

<h3 id="cdr-participant-discovery-api_linkspaginated_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|first|[URIString](#common-field-types)|optional|URI to the first page of this set. Mandatory if this response is not the first page|
|last|[URIString](#common-field-types)|optional|URI to the last page of this set. Mandatory if this response is not the last page|
|next|[URIString](#common-field-types)|optional|URI to the next page of this set. Mandatory if this response is not the last page|
|prev|[URIString](#common-field-types)|optional|URI to the previous page of this set. Mandatory if this response is not the first page|
|self|[URIString](#common-field-types)|mandatory|Fully qualified link to this API call|

<h3 class="schema-toc" id="cdr-participant-discovery-api_schemas_tocSmetapaginated">MetaPaginated</h3>
<p id="tocSmetapaginated" class="orig-anchor"></p>

<p>
  <a id="cdr-participant-discovery-api_schema-base_metapaginated"></a>
  <a class="schema-anchor" id="schemacdr-participant-discovery-apimetapaginated"></a>
</p>

```json
{
  "totalPages": 0,
  "totalRecords": 0
}
```

<h3 id="cdr-participant-discovery-api_metapaginated_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|totalPages|[NaturalNumber](#common-field-types)|mandatory|The total number of pages in the full set|
|totalRecords|[NaturalNumber](#common-field-types)|mandatory|The total number of records in the full set|

<h3 class="schema-toc" id="cdr-participant-discovery-api_schemas_tocSlinks">Links</h3>
<p id="tocSlinks" class="orig-anchor"></p>

<p>
  <a id="cdr-participant-discovery-api_schema-base_links"></a>
  <a class="schema-anchor" id="schemacdr-participant-discovery-apilinks"></a>
</p>

```json
{
  "self": "string"
}
```

<h3 id="cdr-participant-discovery-api_links_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|self|[URIString](#common-field-types)|mandatory|Fully qualified link to this API call|

<h3 class="schema-toc" id="cdr-participant-discovery-api_schemas_tocSmeta">Meta</h3>
<p id="tocSmeta" class="orig-anchor"></p>

<p>
  <a id="cdr-participant-discovery-api_schema-base_meta"></a>
  <a class="schema-anchor" id="schemacdr-participant-discovery-apimeta"></a>
</p>

```json
{}
```

<h3 id="cdr-participant-discovery-api_meta_properties">Properties</h3>

*None*

<h3 class="schema-toc" id="cdr-participant-discovery-api_schemas_tocSmetaerror">MetaError</h3>
<p id="tocSmetaerror" class="orig-anchor"></p>

<p>
  <a id="cdr-participant-discovery-api_schema-base_metaerror"></a>
  <a class="schema-anchor" id="schemacdr-participant-discovery-apimetaerror"></a>
</p>

```json
{
  "urn": "string"
}
```

*Additional data for customised error codes*

<h3 id="cdr-participant-discovery-api_metaerror_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|urn|string|conditional|The CDR error code URN which the application-specific error code extends. Mandatory if the error `code` is an application-specific error rather than a standardised error code.|

<h3 class="schema-toc" id="cdr-participant-discovery-api_schemas_tocSresponseerrorlistv2">ResponseErrorListV2</h3>
<p id="tocSresponseerrorlistv2" class="orig-anchor"></p>

<p>
  <a id="cdr-participant-discovery-api_schema-base_responseerrorlist"></a>
  <a class="schema-anchor" id="schemacdr-participant-discovery-apiresponseerrorlistv2"></a>
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

<h3 id="cdr-participant-discovery-api_responseerrorlistv2_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|errors|[[ResponseErrorListV2_errors](#schemacdr-participant-discovery-apiresponseerrorlistv2_errors)]|mandatory|none|

<h3 class="schema-toc" id="cdr-participant-discovery-api_schemas_tocSresponseerrorlistv2_errors">ResponseErrorListV2_errors</h3>
<p id="tocSresponseerrorlistv2_errors" class="orig-anchor"></p>

<p>
  <a id="cdr-participant-discovery-api_schema-base_responseerrorlistv2_errors"></a>
  <a class="schema-anchor" id="schemacdr-participant-discovery-apiresponseerrorlistv2_errors"></a>
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

<h3 id="cdr-participant-discovery-api_responseerrorlistv2_errors_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|code|string|mandatory|The code of the error encountered. Where the error is specific to the respondent, an application-specific error code, expressed as a string value. If the error is application-specific, the URN code that the specific error extends must be provided in the meta object. Otherwise, the value is the error code URN.|
|title|string|mandatory|A short, human-readable summary of the problem that MUST NOT change from occurrence to occurrence of the problem represented by the error code.|
|detail|string|mandatory|A human-readable explanation specific to this occurrence of the problem.|
|meta|[MetaError](#schemacdr-participant-discovery-apimetaerror)|optional|Additional data for customised error codes|

