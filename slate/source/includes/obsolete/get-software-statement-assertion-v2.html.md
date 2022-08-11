---
title: Get Software Statement Assertion (SSA) V2
#language_tabs: # must be one of https://git.io/vQNgJ
#  - shell
#  - javascript

toc_footers:
  - <a href='../../index.html'>Consumer Data Standards</a>

search: false
---

# Get Software Statement Assertion (SSA) V2
This page documents the obsolete **version 2** of the Get Software Statement Assertion (SSA) end point.

```diff
+ Added deprecatiopn date of 23rd December 2021 and retirement date of 7th April 2023

+ Added explicit authorisation scopes returned within the SSA scopes claim
```

<aside class="info">
This version was deprecated on 23rd December 2021 and will be retired on 7th April 2023 
</aside>

The authorisation scopes returned in **v1** and **v2** of the Get Software Statement Assertion endpoint are explicitly defined as follows:

GetSSA Version | Categories returned | Authorisation Scopes returned in SSA
-- | -- | --
v1 & v2 | OIDC<br />Banking<br />Common<br />Registration | profile<br />openid<br /><br />bank:accounts.basic:read<br />bank:accounts.detail:read<br />bank:transactions:read<br />bank:payees:read<br />bank:regular_payments:read<br /><br />common:customer.basic:read<br />   common:customer.detail:read<br /><br />cdr:registration



## Get  Software Statement Assertion (SSA)

<a id="opIdGetSoftwareStatementAssertion"></a>

> Code samples

```http
GET https://<register-base-url>/cdr-register/v1/{industry}/data-recipients/brands/{dataRecipientBrandId}/software-products/{softwareProductId}/ssa HTTP/1.1
Host: <register-base-url>
Accept: application/json
Authorization: string
x-v: string

```

```javascript
var headers = {
  'Accept':'application/json',
  'Authorization Endpoint (Register)':'string',
  'x-v':'string'

};

$.ajax({
  url: 'https://<register-base-url>/cdr-register/v1/{industry}/data-recipients/brands/{dataRecipientBrandId}/software-products/{softwareProductId}/ssa',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`GET /{industry}/data-recipients/brands/{dataRecipientBrandId}/software-products/{softwareProductId}/ssa`

Get a Software Statement Assertion (SSA) for a Data Recipient software product on the CDR Register to be used for Dynamic Client Registration with a Data Holder Brand.

###Endpoint Version
|   |  |
|---|--|
|Version|**2**

<h3 id="get-data-recipient-software-statement-assertion-(ssa)-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|industry|path|string|mandatory|The industry the participant is retrieving data for (Banking, etc)|
|dataRecipientBrandId|path|string|mandatory|Unique id for the Accredited Data Recipient Brand that the Software Product is associated with in the CDR Register|
|softwareProductId|path|string|mandatory|Unique id for the Accredited Data Recipient Software Product in the CDR Register|
|Authorization Endpoint (Register)|header|string|mandatory|An Authorisation Token as per [RFC6750](https://tools.ietf.org/html/rfc6750).|
|x-v|header|string|optional|The version of the API end point requested by the client. Must be set to a positive integer.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|industry|banking|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="get-data-recipient-software-statement-assertion-(ssa)-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|string|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid industry path parameter</br>Invalid SoftwareProductId|[ResponseErrorList](#schemacdr-participant-discovery-apiresponseerrorlist)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Invalid Bearer Token|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Invalid BrandId|[ResponseErrorList](#schemacdr-participant-discovery-apiresponseerrorlist)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|Invalid x-v header</br>Invalid Accept header|None|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|SSA fields invalid or incomplete|[ResponseErrorList](#schemacdr-participant-discovery-apiresponseerrorlist)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-v|string||The version of the API end point that the CDR Register has responded with.|



<aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
<a href="#authorisation-scopes">cdr-register:bank:read</a>
</aside>



<h2 id="tocSresponseerrorlist">ResponseErrorList</h2>

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

<h2 id="tocSerror">Error</h2>

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


