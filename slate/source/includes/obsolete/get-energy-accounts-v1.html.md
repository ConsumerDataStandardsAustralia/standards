---
title: Get Energy Accounts v1

#language_tabs: # must be one of https://git.io/vQNgJ
#  - shell
#  - javascript

toc_footers:
  - <a href='../../index.html'>Consumer Data Standards</a>

search: false
---

# Get Energy Accounts V1
This page documents version 1 of the Get Energy Account end point. 

* Data Holders **MAY** go-live on November 15 2022 with this version. 
* Data Holders **MUST** implement Get Energy Accounts v2 by **April 7th 2023**.
* Data Holders **MAY** decommission Get Energy Accounts v1 as soon as Get Energy Accounts v2 is supported.
* Data Holders **MUST** provide values for all mandatory fields and select reasonable default values if the data is not available for closed accounts

This version is to be ceased to be called by data recipients when the Data Holder supports Get Energy Accounts v2. 

## Get Energy Accounts

<a id="opIdlistAccounts"></a>

> Code samples

```http
GET /energy/accounts HTTP/1.1

Accept: application/json
x-v: string
x-min-v: string
x-fapi-interaction-id: string
x-fapi-auth-date: string
x-fapi-customer-ip-address: string
x-cds-client-headers: string

```

```javascript
var headers = {
  'Accept':'application/json',
  'x-v':'string',
  'x-min-v':'string',
  'x-fapi-interaction-id':'string',
  'x-fapi-auth-date':'string',
  'x-fapi-customer-ip-address':'string',
  'x-cds-client-headers':'string'

};

$.ajax({
  url: '/energy/accounts',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`GET /energy/accounts`

Obtain the list of energy accounts available under the authorised consent

###Endpoint Version
|   |  |
|---|--|
|Version|**1**

<h3 id="get-energy-accounts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|[PositiveInteger](#common-field-types)|optional|Page of results to request (standard pagination)|
|page-size|query|[PositiveInteger](#common-field-types)|optional|Page size to request.  Default is 25 (standard pagination)|
|x-v|header|string|mandatory|Version of the API end point requested by the client. Must be set to a positive integer. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If the value of [x-min-v](#request-headers) is equal to or higher than the value of [x-v](#request-headers) then the [x-min-v](#request-headers) header should be treated as absent. If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable. See [HTTP Headers](#request-headers)|
|x-min-v|header|string|optional|Minimum version of the API end point requested by the client. Must be set to a positive integer if provided. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable.|
|x-fapi-interaction-id|header|string|optional|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|x-fapi-auth-date|header|string|conditional|The time when the customer last logged in to the Data Recipient Software Product as described in **[[FAPI-R-Draft]](#nref-FAPI-R-Draft)**.  Required for all resource calls (customer present and unattended). Not required for unauthenticated calls.|
|x-fapi-customer-ip-address|header|string|optional|The customer's original IP address if the customer is currently logged in to the data recipient. The presence of this header indicates that the API is being called in a customer present context. Not to be included for unauthenticated calls.|
|x-cds-client-headers|header|[Base64](#common-field-types)|conditional|The customer's original standard http headers [Base64](#common-field-types) encoded, including the original User Agent header, if the customer is currently logged in to the data recipient. Mandatory for customer present calls.  Not required for unattended or unauthenticated calls.|

> Example responses

> 200 Response

```json
{
  "data": {
    "accounts": [
      {
        "accountId": "string",
        "accountNumber": "string",
        "displayName": "string",
        "creationDate": "string",
        "plans": [
          {
            "nickname": "string",
            "servicePointIds": [
              "string"
            ],
            "planOverview": {
              "displayName": "string",
              "startDate": "string",
              "endDate": "string"
            }
          }
        ]
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

<h3 id="get-energy-accounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[EnergyAccountListResponse](#schemacdr-energy-apienergyaccountlistresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Invalid Page Size](#error-400-field-invalid-page-size)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li></ul>|[ErrorListResponse](#schemacdr-energy-apierrorlistresponse)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|[ErrorListResponse](#schemacdr-energy-apierrorlistresponse)|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[422 - Invalid Page](#error-422-field-invalid-page)</li></ul>|[ErrorListResponse](#schemacdr-energy-apierrorlistresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-v|string||none|
|200|x-fapi-interaction-id|string||none|
|400|x-fapi-interaction-id|string||none|
|406|x-fapi-interaction-id|string||none|
|422|x-fapi-interaction-id|string||none|

    
<aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
<a href="#authorisation-scopes">energy:accounts.basic:read</a>
</aside>

<h2 id="tocSenergyaccountlistresponse">EnergyAccountListResponse</h2>

<a id="schemacdr-energy-apienergyaccountlistresponse"></a>

```json
{
  "data": {
    "accounts": [
      {
        "accountId": "string",
        "accountNumber": "string",
        "displayName": "string",
        "creationDate": "string",
        "plans": [
          {
            "nickname": "string",
            "servicePointIds": [
              "string"
            ],
            "planOverview": {
              "displayName": "string",
              "startDate": "string",
              "endDate": "string"
            }
          }
        ]
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

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|data|object|mandatory|none|
|» accounts|[[EnergyAccount](#schemacdr-energy-apienergyaccount)]|mandatory|Array of accounts|
|links|[LinksPaginated](#schemacdr-energy-apilinkspaginated)|mandatory|none|
|meta|[MetaPaginated](#schemacdr-energy-apimetapaginated)|mandatory|none|

<h2 id="tocSenergyaccount">EnergyAccount</h2>

<a id="schemacdr-energy-apienergyaccount"></a>

```json
{
  "accountId": "string",
  "accountNumber": "string",
  "displayName": "string",
  "creationDate": "string",
  "plans": [
    {
      "nickname": "string",
      "servicePointIds": [
        "string"
      ],
      "planOverview": {
        "displayName": "string",
        "startDate": "string",
        "endDate": "string"
      }
    }
  ]
}

```

### Properties

*allOf*

|Name|Type|Required|Description|
|---|---|---|---|
|*anonymous*|[EnergyAccountBase](#schemacdr-energy-apienergyaccountbase)|mandatory|none|

*and*

|Name|Type|Required|Description|
|---|---|---|---|
|*anonymous*|object|mandatory|The array of plans containing service points and associated plan details|
|» plans|[object]|mandatory|The array of plans containing service points and associated plan details|
|»» nickname|string|optional|Optional display name for the plan provided by the customer to help differentiate multiple plans|
|»» servicePointIds|[string]|mandatory|An array of servicePointIds, representing NMIs, that this plan is linked to.  If there are no service points allocated to this plan then an empty array would be expected|
|»» planOverview|object|mandatory|none|
|»»» displayName|string|optional|The name of the plan if one exists|
|»»» startDate|[DateString](#common-field-types)|mandatory|The start date of the applicability of this plan|
|»»» endDate|[DateString](#common-field-types)|optional|The end date of the applicability of this plan|

<h2 id="tocSenergyaccountbase">EnergyAccountBase</h2>

<a id="schemacdr-energy-apienergyaccountbase"></a>

```json
{
  "accountId": "string",
  "accountNumber": "string",
  "displayName": "string",
  "creationDate": "string"
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|accountId|string|mandatory|The ID of the account.  To be created in accordance with CDR ID permanence requirements|
|accountNumber|string|optional|Optional identifier of the account as defined by the data holder.  This must be the value presented on physical statements (if it exists) and must not be used for the value of accountId|
|displayName|string|optional|An optional display name for the account if one exists or can be derived.  The content of this field is at the discretion of the data holder|
|creationDate|[DateString](#common-field-types)|mandatory|The date that the account was created or opened|

<h2 id="tocSlinkspaginated">LinksPaginated</h2>

<a id="schemacdr-energy-apilinkspaginated"></a>

```json
{
  "self": "string",
  "first": "string",
  "prev": "string",
  "next": "string",
  "last": "string"
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|self|[URIString](#common-field-types)|mandatory|Fully qualified link that generated the current response document|
|first|[URIString](#common-field-types)|conditional|URI to the first page of this set. Mandatory if this response is not the first page|
|prev|[URIString](#common-field-types)|conditional|URI to the previous page of this set. Mandatory if this response is not the first page|
|next|[URIString](#common-field-types)|conditional|URI to the next page of this set. Mandatory if this response is not the last page|
|last|[URIString](#common-field-types)|conditional|URI to the last page of this set. Mandatory if this response is not the last page|

<h2 id="tocSmetapaginated">MetaPaginated</h2>

<a id="schemacdr-energy-apimetapaginated"></a>

```json
{
  "totalRecords": 0,
  "totalPages": 0
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|totalRecords|[NaturalNumber](#common-field-types)|mandatory|The total number of records in the full set. See [pagination](#pagination).|
|totalPages|[NaturalNumber](#common-field-types)|mandatory|The total number of pages in the full set. See [pagination](#pagination).|
