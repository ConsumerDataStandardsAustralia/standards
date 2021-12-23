---
title: Get Data Recipients V2
#language_tabs: # must be one of https://git.io/vQNgJ
#  - shell
#  - javascript

toc_footers:
  - <a href='../../index.html'>Consumer Data Standards</a>

search: false
---

# Get Data Recipients V2
This page documents the obsolete **version 2** of the Get Data Recipients end point.

<aside class="info">
This version is will remain valid until a deprecation schedule is set.
</aside>



## Get Data Recipients

<a id="opIdGetDataRecipients"></a>

> Code samples

```http
GET https://<register-base-url>/cdr-register/v1/{industry}/data-recipients HTTP/1.1
Host: <register-base-url>
Accept: application/json
x-v: string

```

```javascript
var headers = {
  'Accept':'application/json',
  'x-v':'string'

};

$.ajax({
  url: 'https://<register-base-url>/cdr-register/v1/{industry}/data-recipients',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`GET /{industry}/data-recipients`

Endpoint used by participants to discover data recipients and associated brands and software products, available in the CDR ecosystem.

###Endpoint Version
|   |  |
|---|--|
|Version|**2**

<h3 id="get-data-recipients-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|industry|path|string|mandatory|The industry the participant is retrieving data for (Banking, etc)|
|x-v|header|string|optional|The version of the API end point requested by the client. Must be set to a positive integer.|

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
      "legalEntityId": "string",
      "legalEntityName": "string",
      "accreditationNumber": "string",
      "industry": "banking",
      "logoUri": "string",
      "dataRecipientBrands": [
        {
          "dataRecipientBrandId": "string",
          "brandName": "string",
          "logoUri": "string",
          "softwareProducts": [
            {
              "softwareProductId": "string",
              "softwareProductName": "string",
              "softwareProductDescription": "string",
              "logoUri": "string",
              "status": "ACTIVE"
            }
          ],
          "status": "ACTIVE"
        }
      ],
      "status": "ACTIVE",
      "lastUpdated": "2019-08-24T14:15:22Z"
    }
  ]
}
```

<h3 id="get-data-recipients-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[ResponseRegisterDataRecipientList](#schemacdr-participant-discovery-apiresponseregisterdatarecipientlist)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request</br>Invalid industry path parameter|[ResponseErrorList](#schemacdr-participant-discovery-apiresponseerrorlist)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|Invalid x-v header</br>Invalid Accept header|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-v|string||The version of the API end point that the CDR Register has responded with.|


    <aside class="success">
This operation does not require authentication
</aside>



<h2 class="schema-toc" id="tocSresponseregisterdatarecipientlist">ResponseRegisterDataRecipientList</h2>

<a id="schemacdr-participant-discovery-apiresponseregisterdatarecipientlist"></a>

```json
{
  "data": [
    {
      "legalEntityId": "string",
      "legalEntityName": "string",
      "accreditationNumber": "string",
      "industry": "banking",
      "logoUri": "string",
      "dataRecipientBrands": [
        {
          "dataRecipientBrandId": "string",
          "brandName": "string",
          "logoUri": "string",
          "softwareProducts": [
            {
              "softwareProductId": "string",
              "softwareProductName": "string",
              "softwareProductDescription": "string",
              "logoUri": "string",
              "status": "ACTIVE"
            }
          ],
          "status": "ACTIVE"
        }
      ],
      "status": "ACTIVE",
      "lastUpdated": "2019-08-24T14:15:22Z"
    }
  ]
}

```

*Response containing a list of Data Recipients in the CDR Register*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|data|[[RegisterDataRecipient](#schemacdr-participant-discovery-apiregisterdatarecipient)]|mandatory|Response data for the query|

<h2 class="schema-toc" id="tocSregisterdatarecipient">RegisterDataRecipient</h2>

<a id="schemacdr-participant-discovery-apiregisterdatarecipient"></a>

```json
{
  "legalEntityId": "string",
  "legalEntityName": "string",
  "accreditationNumber": "string",
  "industry": "banking",
  "logoUri": "string",
  "dataRecipientBrands": [
    {
      "dataRecipientBrandId": "string",
      "brandName": "string",
      "logoUri": "string",
      "softwareProducts": [
        {
          "softwareProductId": "string",
          "softwareProductName": "string",
          "softwareProductDescription": "string",
          "logoUri": "string",
          "status": "ACTIVE"
        }
      ],
      "status": "ACTIVE"
    }
  ],
  "status": "ACTIVE",
  "lastUpdated": "2019-08-24T14:15:22Z"
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|legalEntityId|string|mandatory|Unique id of the Data Recipient Legal Entity issued by the CDR Register|
|legalEntityName|string|mandatory|Legal name of the Data Recipient|
|accreditationNumber|string|mandatory|CDR Register issued human readable unique number given to Data Recipients upon accreditation|
|industry|string|mandatory|none|
|logoUri|[URIString](#common-field-types)|mandatory|Legal Entity logo URI|
|dataRecipientBrands|[[DataRecipientBrandMetaData](#schemacdr-participant-discovery-apidatarecipientbrandmetadata)]|optional|[Metadata related to Data Recipient Brand]|
|status|string|mandatory|none|
|lastUpdated|[DateTimeString](#common-field-types)|mandatory|The date/time that the Legal Entity was last updated in the CDR Register|

#### Enumerated Values

|Property|Value|
|---|---|
|industry|banking|
|status|ACTIVE|
|status|SUSPENDED|
|status|REVOKED|
|status|SURRENDERED|

<h2 class="schema-toc" id="tocSdatarecipientbrandmetadata">DataRecipientBrandMetaData</h2>

<a id="schemacdr-participant-discovery-apidatarecipientbrandmetadata"></a>

```json
{
  "dataRecipientBrandId": "string",
  "brandName": "string",
  "logoUri": "string",
  "softwareProducts": [
    {
      "softwareProductId": "string",
      "softwareProductName": "string",
      "softwareProductDescription": "string",
      "logoUri": "string",
      "status": "ACTIVE"
    }
  ],
  "status": "ACTIVE"
}

```

*Metadata related to Data Recipient Brand*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|dataRecipientBrandId|string|mandatory|Unique id of the Data Recipient brand issued by the CDR Register|
|brandName|string|mandatory|Data Recipient Brand name|
|logoUri|[URIString](#common-field-types)|mandatory|Data Recipient Brand logo URI|
|softwareProducts|[[SoftwareProductMetaData](#schemacdr-participant-discovery-apisoftwareproductmetadata)]|optional|[Data Recipient Brand Software Products]|
|status|string|mandatory|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ACTIVE|
|status|INACTIVE|
|status|REMOVED|

<h2 class="schema-toc" id="tocSsoftwareproductmetadata">SoftwareProductMetaData</h2>

<a id="schemacdr-participant-discovery-apisoftwareproductmetadata"></a>

```json
{
  "softwareProductId": "string",
  "softwareProductName": "string",
  "softwareProductDescription": "string",
  "logoUri": "string",
  "status": "ACTIVE"
}

```

*Data Recipient Brand Software Products*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|softwareProductId|string|mandatory|Unique id of the Data Recipient software product issued by the CDR Register|
|softwareProductName|string|mandatory|Name of the software product|
|softwareProductDescription|string|optional|Description of the software product|
|logoUri|[URIString](#common-field-types)|mandatory|Software product logo URI|
|status|string|mandatory|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ACTIVE|
|status|INACTIVE|
|status|REMOVED|



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
