---
title: Get Data Recipient Statuses V1
#language_tabs: # must be one of https://git.io/vQNgJ
#  - shell
#  - javascript

toc_footers:
  - <a href='../../index.html'>Consumer Data Standards</a>

search: false
---

# Get Data Recipient Statuses V1
This page documents the obsolete **version 1** of the Get Data Recipient Statuses end point.

<aside class="info">
This version will remain valid until a deprecation schedule is set.
</aside>


## Get Data Recipient Statuses

<a id="opIdGetDataRecipientsStatus"></a>

> Code samples

```http
GET https://<register-base-url>/cdr-register/v1/{industry}/data-recipients/status HTTP/1.1
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
  url: 'https://<register-base-url>/cdr-register/v1/{industry}/data-recipients/status',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`GET /{industry}/data-recipients/status`

Endpoint used by participants to discover the statuses for Data Recipients from the CDR Register.

###Endpoint Version
|   |  |
|---|--|
|Version|**1**

<h3 id="get-data-recipient-statuses-parameters">Parameters</h3>

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
  "dataRecipients": [
    {
      "dataRecipientId": "string",
      "dataRecipientStatus": "ACTIVE"
    }
  ]
}
```

<h3 id="get-data-recipient-statuses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[DataRecipientsStatusList](#schemacdr-participant-discovery-apidatarecipientsstatuslist)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request</br>Invalid industry path parameter|[ResponseErrorList](#schemacdr-participant-discovery-apiresponseerrorlist)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|Invalid x-v header</br>Invalid Accept header|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-v|string||The version of the API end point that the CDR Register has responded with.|


    <aside class="success">
This operation does not require authentication
</aside>


<h2 class="schema-toc" id="tocSdatarecipientsstatuslist">DataRecipientsStatusList</h2>

<a id="schemacdr-participant-discovery-apidatarecipientsstatuslist"></a>

```json
{
  "dataRecipients": [
    {
      "dataRecipientId": "string",
      "dataRecipientStatus": "ACTIVE"
    }
  ]
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|dataRecipients|[[DataRecipientStatus](#schemacdr-participant-discovery-apidatarecipientstatus)]|mandatory|none|

<h2 class="schema-toc" id="tocSdatarecipientstatus">DataRecipientStatus</h2>

<a id="schemacdr-participant-discovery-apidatarecipientstatus"></a>

```json
{
  "dataRecipientId": "string",
  "dataRecipientStatus": "ACTIVE"
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|dataRecipientId|string|mandatory|Unique id of the Data Recipient issued by the CDR Register|
|dataRecipientStatus|string|mandatory|Data Recipient status in the CDR Register|

#### Enumerated Values

|Property|Value|
|---|---|
|dataRecipientStatus|ACTIVE|
|dataRecipientStatus|SUSPENDED|
|dataRecipientStatus|REVOKED|
|dataRecipientStatus|SURRENDERED|



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
