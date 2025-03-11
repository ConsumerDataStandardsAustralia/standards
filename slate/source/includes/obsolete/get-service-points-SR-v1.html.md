---
title: Get Service Points (SR) v1

#language_tabs: # must be one of https://git.io/vQNgJ
#  - shell
#  - javascript

toc_footers:
  - <a href='../../index.html'>Consumer Data Standards</a>

search: false
---

# Get Service Points (SR) V1
This page documents version 1 of the Get Service Points (SR) endpoint. 

Secondary Data Holders (i.e. AEMO) can retire this version after **March 16th 2026**. Primary data holders (i.e. energy retailers) must update to newer versions prior to this date.

## Get Service Points (SR)

<p id="get-service-points-sr" class="orig-anchor"></p>

> Code samples

```http
POST https://tls.sdh.example.com/cds-au/v1/secondary/energy/electricity/servicepoints HTTP/1.1
Host: tls.sdh.example.com
Content-Type: application/json
Accept: application/json
x-v: string
x-min-v: string
x-fapi-interaction-id: string
x-cds-arrangement: string
```

```javascript--nodejs
const fetch = require('node-fetch');
const inputBody = '{
  "data": {
    "servicePointIds": [
      "string"
    ]
  },
  "meta": {}
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'x-v':'string',
  'x-min-v':'string',
  'x-fapi-interaction-id':'string',
  'x-cds-arrangement':'string'
};

fetch('https://tls.sdh.example.com/cds-au/v1/secondary/energy/electricity/servicepoints', {
  method: 'POST',
  body: inputBody,
  headers: headers
}).then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

`POST /secondary/energy/electricity/servicepoints`

Obtain a list of service points owned by the customer that has authorised the current session.

> Body parameter

```json
{
  "data": {
    "servicePointIds": [
      "string"
    ]
  },
  "meta": {}
}
```

<h3 id="cdr-energy-secondary-data-holder-api_get-service-points-sr_endpoint-version">Endpoint Version</h3>
|   |  |
|---|--|
|Version|**1**

<h3 id="cdr-energy-secondary-data-holder-api_get-service-points-sr_parameters">Parameters</h3>

|Name|In|Type|Required|Default|Description|
|---|---|---|---|---|---|
|page|query|[PositiveInteger](#common-field-types)|optional|`1`|Page of results to request (standard pagination).|
|page-size|query|[PositiveInteger](#common-field-types)|optional|`25`|Page size to request. Default is 25 (standard pagination).|
|x-v|header|string|mandatory||Version of the API endpoint requested by the client. Must be set to a positive integer. The endpoint should respond with the highest supported version between [_x-min-v_](#request-headers) and [_x-v_](#request-headers). If the value of [_x-min-v_](#request-headers) is equal to or higher than the value of [_x-v_](#request-headers) then the [_x-min-v_](#request-headers) header should be treated as absent. If all versions requested are not supported then the endpoint **MUST** respond with a `406 Not Acceptable`. See [HTTP Headers](#request-headers).|
|x-min-v|header|string|optional||Minimum version of the API endpoint requested by the client. Must be set to a positive integer if provided. The endpoint should respond with the highest supported version between [_x-min-v_](#request-headers) and [_x-v_](#request-headers). If all versions requested are not supported then the endpoint **MUST** respond with a `406 Not Acceptable`.|
|x-fapi-interaction-id|header|string|mandatory||The _x-fapi-interaction-id_ header value provided by the Data Recipient. If not supplied by the Data Recipient, the primary Data Holder **MUST** create a unique **[[RFC4122]](#nref-RFC4122)** UUID value for the _x-fapi-interaction-id_ header.|
|x-cds-arrangement|header|string|mandatory||A unique string representing a consent arrangement between a Data Recipient Software Product and Data Holder for a given consumer. The identifier **MUST** be unique per customer according to the definition of customer in the CDR Federation section of this profile. The _x-cds-arrangement_ should contain the arrangement ID for the consent that the request is being made under and will be used for tracing and audit purposes. This field **MUST** be populated but AEMO **MUST NOT** seek to validate the consent associated with the arrangement.|
|body|body|[RequestSDHServicePointIdListV1](#schemacdr-energy-secondary-data-holder-apirequestsdhservicepointidlistv1)|mandatory||Request payload containing a list of _servicePointId_ values to obtain data for.|

> Example responses

> 200 Response

```json
{
  "data": {
    "servicePoints": [
      {
        "servicePointId": "string",
        "nationalMeteringId": "string",
        "servicePointClassification": "EXTERNAL_PROFILE",
        "servicePointStatus": "ACTIVE",
        "jurisdictionCode": "ALL",
        "isGenerator": false,
        "validFromDate": "string",
        "lastUpdateDateTime": "string",
        "consumerProfile": {
          "classification": "BUSINESS",
          "threshold": "LOW"
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

<h3 id="cdr-energy-secondary-data-holder-api_get-service-points-sr_responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[EnergyServicePointListResponse](#schemacdr-energy-secondary-data-holder-apienergyservicepointlistresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The following error codes **MUST** be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Missing Required Field](#error-400-field-missing)</li><li>[400 - Invalid Page Size](#error-400-field-invalid-page-size)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li></ul>|[ResponseErrorListV2](#schemacdr-energy-secondary-data-holder-apiresponseerrorlistv2)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|The following error codes **MUST** be supported:<br/><ul class="error-code-list"><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|[ResponseErrorListV2](#schemacdr-energy-secondary-data-holder-apiresponseerrorlistv2)|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|The following error codes **MUST** be supported:<br/><ul class="error-code-list"><li>[422 - Invalid Page](#error-422-field-invalid-page)</li></ul>|[ResponseErrorListV2](#schemacdr-energy-secondary-data-holder-apiresponseerrorlistv2)|

<h3 id="cdr-energy-secondary-data-holder-api_get-service-points-sr_response-headers">Response Headers</h3>

|Status|Header|Type|Required|Description|
|---|---|---|---|---|
|200|x-v|string|mandatory|The [payload version](#response-headers) that the endpoint has responded with.|
|200|x-fapi-interaction-id|string|mandatory|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|400|x-fapi-interaction-id|string|optional|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|406|x-fapi-interaction-id|string|mandatory|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|422|x-fapi-interaction-id|string|mandatory|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|

  
    
      <aside class="success">
This operation may only be called by an Energy Retailer using the information security policies defined by AEMO.
</aside>

<h2 class="schema-heading" id="cdr-energy-api-schemas">Schemas</h2>

<h3 class="schema-toc" id="cdr-energy-secondary-data-holder-api_schemas_tocSenergyservicepointlistresponse">EnergyServicePointListResponse</h3>
<p id="tocSenergyservicepointlistresponse" class="orig-anchor"></p>

<p>
  <a id="cdr-energy-secondary-data-holder-api_schema-base_energyservicepointlistresponse"></a>
  <a class="schema-anchor" id="schemacdr-energy-secondary-data-holder-apienergyservicepointlistresponse"></a>
</p>

```json
{
  "data": {
    "servicePoints": [
      {
        "servicePointId": "string",
        "nationalMeteringId": "string",
        "servicePointClassification": "EXTERNAL_PROFILE",
        "servicePointStatus": "ACTIVE",
        "jurisdictionCode": "ALL",
        "isGenerator": false,
        "validFromDate": "string",
        "lastUpdateDateTime": "string",
        "consumerProfile": {
          "classification": "BUSINESS",
          "threshold": "LOW"
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

<h3 id="cdr-energy-secondary-data-holder-api_energyservicepointlistresponse_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|data|object|mandatory||none|
|» servicePoints|[[EnergyServicePoint](#schemacdr-energy-secondary-data-holder-apienergyservicepoint)]|mandatory||none|
|links|[LinksPaginated](#schemacdr-energy-secondary-data-holder-apilinkspaginated)|mandatory||none|
|meta|[MetaPaginated](#schemacdr-energy-secondary-data-holder-apimetapaginated)|mandatory||none|

<h3 class="schema-toc" id="cdr-energy-secondary-data-holder-api_schemas_tocSenergyservicepoint">EnergyServicePoint</h3>
<p id="tocSenergyservicepoint" class="orig-anchor"></p>

<p>
  <a id="cdr-energy-secondary-data-holder-api_schema-base_energyservicepoint"></a>
  <a class="schema-anchor" id="schemacdr-energy-secondary-data-holder-apienergyservicepoint"></a>
</p>

```json
{
  "servicePointId": "string",
  "nationalMeteringId": "string",
  "servicePointClassification": "EXTERNAL_PROFILE",
  "servicePointStatus": "ACTIVE",
  "jurisdictionCode": "ALL",
  "isGenerator": false,
  "validFromDate": "string",
  "lastUpdateDateTime": "string",
  "consumerProfile": {
    "classification": "BUSINESS",
    "threshold": "LOW"
  }
}
```

<h3 id="cdr-energy-secondary-data-holder-api_energyservicepoint_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|servicePointId|[EnergySDHServicePointId](#schemacdr-energy-secondary-data-holder-apienergysdhservicepointid)|mandatory||The independent ID of the service point, known in the industry as the National Meter Identifier (NMI). Note that the _servicePointId_ will be replaced with NMI for all interactions between Data Holder and AEMO.|
|nationalMeteringId|string|mandatory||The independent ID of the service point, known in the industry as the NMI.|
|servicePointClassification|[Enum](#common-field-types)|mandatory||The classification of the service point as defined in MSATS procedures.|
|servicePointStatus|[Enum](#common-field-types)|mandatory||Code used to indicate the status of the service point. Note the details for the enumeration values below: <ul><li>`ACTIVE`: An active, energised, service point</li><li>`DE_ENERGISED`: The service point exists but is deenergised</li><li>`EXTINCT`: The service point has been permanently decommissioned</li><li>`GREENFIELD`: Applies to a service point that has never been energised</li><li>`OFF_MARKET`: Applies when the service point is no longer settled in the NEM.</li></ul>|
|jurisdictionCode|[Enum](#common-field-types)|mandatory||Jurisdiction code to which the service point belongs. This code defines the jurisdictional rules which apply to the service point. Note the details of enumeration values below: <ul><li>`ALL`: All Jurisdictions</li><li>`ACT`: Australian Capital Territory</li><li>`NEM`: National Electricity Market</li><li>`NSW`: New South Wales</li><li>`QLD`: Queensland</li><li>`SA`: South Australia</li><li>`TAS`: Tasmania</li><li>`VIC`: Victoria.</li></ul>|
|isGenerator|[Boolean](#common-field-types)|optional|`false`|This flag determines whether the energy at this connection point is to be treated as consumer load or as a generating unit (this may include generator auxiliary loads). If absent defaults to `false`. <br>**Note:** Only applicable for scheduled or semischeduled generators, does not indicate on site generation by consumer.|
|validFromDate|[DateString](#common-field-types)|mandatory||The latest start date from which the constituent data sets of this service point became valid.|
|lastUpdateDateTime|[DateTimeString](#common-field-types)|mandatory||The date and time that the information for this service point was modified.|
|consumerProfile|object|optional||none|
|» classification|[Enum](#common-field-types)|optional||A code that defines the consumer class as defined in the National Energy Retail Regulations, or in overriding Jurisdictional instruments.|
|» threshold|[Enum](#common-field-types)|optional||A code that defines the consumption threshold as defined in the National Energy Retail Regulations, or in overriding Jurisdictional instruments. Note the details of enumeration values below: <ul><li>`LOW`: Consumption is less than the 'lower consumption threshold' as defined in the National Energy Retail Regulations</li><li>`MEDIUM`: Consumption is equal to or greater than the 'lower consumption threshold', but less than the 'upper consumption threshold', as defined in the National Energy Retail Regulations</li><li>`HIGH`: Consumption is equal to or greater than the 'upper consumption threshold' as defined in the National Energy Retail Regulations.</li></ul>|

<h4 id="cdr-energy-secondary-data-holder-api_energyservicepoint_enumerated-values-main">Enumerated Values</h4>

|Property|Value|
|---|---|
|servicePointClassification|EXTERNAL_PROFILE|
|servicePointClassification|GENERATOR|
|servicePointClassification|LARGE|
|servicePointClassification|SMALL|
|servicePointClassification|WHOLESALE|
|servicePointClassification|NON_CONTEST_UNMETERED_LOAD|
|servicePointClassification|NON_REGISTERED_EMBEDDED_GENERATOR|
|servicePointClassification|DISTRIBUTION_WHOLESALE|
|servicePointStatus|ACTIVE|
|servicePointStatus|DE_ENERGISED|
|servicePointStatus|EXTINCT|
|servicePointStatus|GREENFIELD|
|servicePointStatus|OFF_MARKET|
|jurisdictionCode|ALL|
|jurisdictionCode|ACT|
|jurisdictionCode|NEM|
|jurisdictionCode|NSW|
|jurisdictionCode|QLD|
|jurisdictionCode|SA|
|jurisdictionCode|TAS|
|jurisdictionCode|VIC|
|classification|BUSINESS|
|classification|RESIDENTIAL|
|threshold|LOW|
|threshold|MEDIUM|
|threshold|HIGH|

<h3 class="schema-toc" id="cdr-energy-secondary-data-holder-api_schemas_tocSrequestsdhservicepointidlistv1">RequestSDHServicePointIdListV1</h3>
<p id="tocSrequestsdhservicepointidlistv1" class="orig-anchor"></p>

<p>
  <a id="cdr-energy-secondary-data-holder-api_schema-base_requestsdhservicepointidlist"></a>
  <a class="schema-anchor" id="schemacdr-energy-secondary-data-holder-apirequestsdhservicepointidlistv1"></a>
</p>

```json
{
  "data": {
    "servicePointIds": [
      "string"
    ]
  },
  "meta": {}
}
```

<h3 id="cdr-energy-secondary-data-holder-api_requestsdhservicepointidlistv1_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|data|object|mandatory||none|
|» servicePointIds|[[EnergySDHServicePointId](#schemacdr-energy-secondary-data-holder-apienergysdhservicepointid)]|mandatory||Array of _servicePointId_ values to obtain data for.|
|meta|[Meta](#schemacdr-energy-secondary-data-holder-apimeta)|optional||none|

<h3 class="schema-toc" id="cdr-energy-secondary-data-holder-api_schemas_tocSenergysdhservicepointid">EnergySDHServicePointId</h3>
<p id="tocSenergysdhservicepointid" class="orig-anchor"></p>

<p>
  <a id="cdr-energy-secondary-data-holder-api_schema-base_energysdhservicepointid"></a>
  <a class="schema-anchor" id="schemacdr-energy-secondary-data-holder-apienergysdhservicepointid"></a>
</p>

```json
"string"
```

*The independent ID of the service point, known in the industry as the National Meter Identifier (NMI). Note that the _servicePointId_ will be replaced with NMI for all interactions between Data Holder and AEMO.*

<h3 id="cdr-energy-secondary-data-holder-api_energysdhservicepointid_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|*anonymous*|[ASCIIString](#common-field-types)|mandatory||The independent ID of the service point, known in the industry as the National Meter Identifier (NMI). Note that the _servicePointId_ will be replaced with NMI for all interactions between Data Holder and AEMO.|

<h3 class="schema-toc" id="cdr-energy-secondary-data-holder-api_schemas_tocSresponseerrorlistv2">ResponseErrorListV2</h3>
<p id="tocSresponseerrorlistv2" class="orig-anchor"></p>

<p>
  <a id="cdr-energy-secondary-data-holder-api_schema-base_responseerrorlist"></a>
  <a class="schema-anchor" id="schemacdr-energy-secondary-data-holder-apiresponseerrorlistv2"></a>
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

<h3 id="cdr-energy-secondary-data-holder-api_responseerrorlistv2_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|errors|[[ErrorV2](#schemacdr-energy-secondary-data-holder-apierrorv2)]|mandatory||List of errors.|

<h3 class="schema-toc" id="cdr-energy-secondary-data-holder-api_schemas_tocSerrorv2">ErrorV2</h3>
<p id="tocSerrorv2" class="orig-anchor"></p>

<p>
  <a id="cdr-energy-secondary-data-holder-api_schema-base_error"></a>
  <a class="schema-anchor" id="schemacdr-energy-secondary-data-holder-apierrorv2"></a>
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

<h3 id="cdr-energy-secondary-data-holder-api_errorv2_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|code|string|mandatory||The code of the error encountered. Where the error is specific to the respondent, an application-specific error code, expressed as a string value. If the error is application-specific, the URN code that the specific error extends must be provided in the _meta_ object. Otherwise, the value is the error code URN.|
|title|string|mandatory||A short, human-readable summary of the problem that **MUST NOT** change from occurrence to occurrence of the problem represented by the error code.|
|detail|string|mandatory||A human-readable explanation specific to this occurrence of the problem.|
|meta|object|conditional||Additional data for customised error codes.|
|» urn|string|conditional||The CDR error code URN which the application-specific error code extends. Mandatory if the error _code_ is an application-specific error rather than a standardised error code.|

<h3 class="schema-toc" id="cdr-energy-secondary-data-holder-api_schemas_tocSlinkspaginated">LinksPaginated</h3>
<p id="tocSlinkspaginated" class="orig-anchor"></p>

<p>
  <a id="cdr-energy-secondary-data-holder-api_schema-base_linkspaginated"></a>
  <a class="schema-anchor" id="schemacdr-energy-secondary-data-holder-apilinkspaginated"></a>
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

<h3 id="cdr-energy-secondary-data-holder-api_linkspaginated_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|self|[URIString](#common-field-types)|mandatory||Fully qualified link that generated the current response document.|
|first|[URIString](#common-field-types)|conditional||URI to the first page of this set. Mandatory if this response is not the first page.|
|prev|[URIString](#common-field-types)|conditional||URI to the previous page of this set. Mandatory if this response is not the first page.|
|next|[URIString](#common-field-types)|conditional||URI to the next page of this set. Mandatory if this response is not the last page.|
|last|[URIString](#common-field-types)|conditional||URI to the last page of this set. Mandatory if this response is not the last page.|

<h3 class="schema-toc" id="cdr-energy-secondary-data-holder-api_schemas_tocSmetapaginated">MetaPaginated</h3>
<p id="tocSmetapaginated" class="orig-anchor"></p>

<p>
  <a id="cdr-energy-secondary-data-holder-api_schema-base_metapaginated"></a>
  <a class="schema-anchor" id="schemacdr-energy-secondary-data-holder-apimetapaginated"></a>
</p>

```json
{
  "totalRecords": 0,
  "totalPages": 0
}
```

<h3 id="cdr-energy-secondary-data-holder-api_metapaginated_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|totalRecords|[NaturalNumber](#common-field-types)|mandatory||The total number of records in the full set. See [pagination](#pagination).|
|totalPages|[NaturalNumber](#common-field-types)|mandatory||The total number of pages in the full set. See [pagination](#pagination).|