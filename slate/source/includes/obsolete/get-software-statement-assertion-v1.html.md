---
title: Get Software Statement Assertion (SSA) V1
#language_tabs: # must be one of https://git.io/vQNgJ
#  - shell
#  - javascript

toc_footers:
  - <a href='../../index.html'>Consumer Data Standards</a>

search: false
---

# Get Software Statement Assertion (SSA) V1
This page documents the obsolete **version 1** of the Get Software Statement Assertion (SSA) end point.

<aside class="info">
This version was deprecated on 23rd December 2021 and retired on 21st September 2023
</aside>

The authorisation scopes returned in **v1** and **v2** of the Get Software Statement Assertion endpoint are explicitly defined as follows:

GetSSA Version | Categories returned | Authorisation Scopes returned in SSA
-- | -- | --
v1 & v2 | OIDC<br />Banking<br />Common<br />Registration | profile<br />openid<br /><br />bank:accounts.basic:read<br />bank:accounts.detail:read<br />bank:transactions:read<br />bank:payees:read<br />bank:regular_payments:read<br /><br />common:customer.basic:read<br />   common:customer.detail:read<br /><br />cdr:registration


## GetSoftwareStatementAssertion (SSA)

Get a Software Statement Assertion (SSA) for a software product on the CDR Register to be used for Dynamic Registration with a Data Holder

###Endpoint Version
|   |  |
|---|--|
|Version|**1**


<a id="opIdGetSoftwareStatementAssertion"></a>

> Code samples

```HTTP
GET https://<register-base-url>/cdr-register/v1/{industry}/data-recipients/brands/{dataRecipientBrandId}/software-products/{softwareProductId}/ssa HTTP/1.1
Host: <register-base-url>
Accept: application/json
Authorization: Bearer <access-token>
x-v: string

```

`GET /{industry}/data-recipients/brands/{dataRecipientBrandId}/software-products/{softwareProductId}/ssa`

<h3 id="get-a-software-statement-assertion-(ssa)-for-a-software-product-on-the-cdr-register-to-be-used-for-dynamic-client-registration-with-a-data-holder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|industry|path|string|true|The industry the participant is retrieving data for (Banking, etc)|
|dataRecipientBrandId|path|string|true|Unique id for the Accredited Data Recipient Brand that the Software Product is associated with in the CDR Register|
|softwareProductId|path|string|true|Unique id for the Accredited Data Recipient Software Product in the CDR Register|
|Authorization|header|string|true|An Authorisation Token as per [RFC6750](https://tools.ietf.org/html/rfc6750)|
|x-v|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|industry|banking|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="get-a-software-statement-assertion-(ssa)-for-a-software-product-on-the-cdr-register-to-be-used-for-dynamic-client-registration-with-a-data-holder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|string|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResponseErrorList](#schemaresponseerrorlist)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[ResponseErrorList](#schemaresponseerrorlist)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|Not Acceptable|None|


<aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scope: <span class="bold">cdr-register:bank:read</span>
</aside>

<h2 id="tocSresponseerrorlist">ResponseErrorList</h2>

<a id="schemaresponseerrorlist"></a>

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

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|true|none|none|

<h2 id="tocSerror">Error</h2>

<a id="schemaerror"></a>

```json
{
  "code": "string",
  "title": "string",
  "detail": "string",
  "meta": {}
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|true|none|Error code|
|title|string|true|none|Error title|
|detail|string|true|none|Error detail|
|meta|object|false|none|Optional additional data for specific error types|
