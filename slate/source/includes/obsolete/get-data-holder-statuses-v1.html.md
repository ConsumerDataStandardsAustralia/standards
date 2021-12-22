---
title: Get Data Holder Statuses V1
#language_tabs: # must be one of https://git.io/vQNgJ
#  - shell
#  - javascript

toc_footers:
  - <a href='../../index.html'>Consumer Data Standards</a>

search: false
---

# Get Data Holder Statuses V1
This page documents the obsolete **version 1** of the Get Data Holder Statuses end point.

<aside class="info">
This version is will remain valid until a deprecation schedule is set.
</aside>

## Get Data Holder Statuses

<a id="opIdGetDataHolderStatuses"></a>

> Code samples

```http
GET https://<register-base-url>/cdr-register/v1/{industry}/data-holders/status HTTP/1.1

Accept: application/json
x-v: string
x-min-v: string
If-None-Match: string

```

```javascript
var headers = {
  'Accept':'application/json',
  'x-v':'string',
  'x-min-v':'string',
  'If-None-Match':'string'

};

$.ajax({
  url: 'https://<register-base-url>/cdr-register/v1/{industry}/data-holders/status',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`GET /cdr-register/v1/{industry}/data-holders/status`

Endpoint used by participants to discover the statuses for Data Holders from the CDR Register

###Endpoint Version
|   |  |
|---|--|
|Version|**1**

<h3 id="get-data-holder-statuses-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|industry|path|string|mandatory|The industry the participant is retrieving data for (Banking, etc)|
|x-v|header|string|mandatory|The version of the API end point requested by the client. Must be set to a positive integer.|
|x-min-v|header|string|optional|The [minimum version](https://consumerdatastandardsaustralia.github.io/standards/#http-headers) of the API end point requested by the client. Must be set to a positive integer if provided.|
|If-None-Match|header|string|optional|Makes the request method conditional on a recipient cache or origin server not having any current representation of the target resource with an entity-tag that does not match any of those listed in the field-value.|

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
      "status": "ACTIVE"
    }
  ],
  "links": {
    "self": "string"
  },
  "meta": {}
}
```

> 400 Response

<h3 id="get-data-holder-statuses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[DataHoldersStatusList](#schemacdr-participant-discovery-apidataholdersstatuslist)|
|304|[Not Modified](https://tools.ietf.org/html/rfc7232#section-4.1)|Not Modified - The current representation of the target resource matches with the entity-tag provided in the If-None-Match request header|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Missing Required Header / Invalid Version / Invalid Path Parameter|[ResponseErrorListV2](#schemacdr-participant-discovery-apiresponseerrorlistv2)|
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
