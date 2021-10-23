


## Get Customer

<a id="opIdgetCustomer"></a>

> Code samples

```http
GET https://data.holder.com.au/cds-au/v1/common/customer HTTP/1.1
Host: data.holder.com.au
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
  url: 'https://data.holder.com.au/cds-au/v1/common/customer',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`GET /common/customer`

Obtain basic information on the customer that has authorised the current session

### Conventions
In the customer payloads relevant conventions are explained here, in one place.

#### Given Names

`firstName` represents the first of a person's given names.

`middleNames` represents a collection of given names if the person has more than one given name.

Where a data holder holds a person's given names as a single string in source systems, it may not possible in some situations to reliably split these given names into their component first and middle names. In these situations, data holders MAY use the `firstName` field to return the single string of given names and an empty `middleNames` array.

For example, a person whose given names are "John Paul Winston" but the data holder cannot determine what is the first name, can return `"firstName": "John Paul Winston"`.

###Endpoint Version
|   |  |
|---|--|
|Version|**1**

<h3 id="get-customer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-v|header|string|mandatory|Version of the API end point requested by the client. Must be set to a positive integer. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If the value of [x-min-v](#request-headers) is equal to or higher than the value of [x-v](#request-headers) then the [x-min-v](#request-headers) header should be treated as absent. If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable. See [HTTP Headers](#request-headers)|
|x-min-v|header|string|optional|Minimum version of the API end point requested by the client. Must be set to a positive integer if provided. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable.|
|x-fapi-interaction-id|header|string|optional|An [RFC4122](https://tools.ietf.org/html/rfc4122) UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a [RFC4122] UUID value is required to be provided in the response header to track the interaction.|
|x-fapi-auth-date|header|string|optional|The time when the customer last logged in to the Data Recipient Software Product. Required for all resource calls (customer present and unattended). Not to be included for unauthenticated calls.|
|x-fapi-customer-ip-address|header|string|optional|The customer's original IP address if the customer is currently logged in to the Data Recipient Software Product. The presence of this header indicates that the API is being called in a customer present context. Not to be included for unauthenticated calls.|
|x-cds-client-headers|header|[Base64](#common-field-types)|optional|The customer's original standard http headers [Base64](#common-field-types) encoded, including the original User Agent header, if the customer is currently logged in to the Data Recipient Software Product. Mandatory for customer present calls.  Not required for unattended or unauthenticated calls.|

> Example responses

> 200 Response

```json
{
  "data": {
    "customerUType": "organisation",
    "person": {
      "lastUpdateTime": "string",
      "firstName": "string",
      "lastName": "string",
      "middleNames": [
        "string"
      ],
      "prefix": "string",
      "suffix": "string",
      "occupationCode": "string",
      "occupationCodeVersion": "ANZSCO_1220.0_2013_V1.2"
    },
    "organisation": {
      "lastUpdateTime": "string",
      "agentFirstName": "string",
      "agentLastName": "string",
      "agentRole": "string",
      "businessName": "string",
      "legalName": "string",
      "shortName": "string",
      "abn": "string",
      "acn": "string",
      "isACNCRegistered": true,
      "industryCode": "string",
      "industryCodeVersion": "ANZSIC_1292.0_2006_V2.0",
      "organisationType": "COMPANY",
      "registeredCountry": "string",
      "establishmentDate": "string"
    }
  },
  "links": {
    "self": "string"
  },
  "meta": {}
}
```

<h3 id="get-customer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[ResponseCommonCustomer](#schemaresponsecommoncustomer)|
|4xx|[**Client Error**](https://tools.ietf.org/html/rfc7231#section-6.5)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|[ResponseErrorListV2](#schemaresponseerrorlistv2)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-v|string||The [version](#response-headers) of the API end point that the data holder has responded with.|
|200|x-fapi-interaction-id|string||An [RFC4122](https://tools.ietf.org/html/rfc4122) UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a [RFC4122] UUID value is required to be provided in the response header to track the interaction.|
|4xx|x-fapi-interaction-id|string||An [RFC4122](https://tools.ietf.org/html/rfc4122) UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a [RFC4122] UUID value is required to be provided in the response header to track the interaction.|

  
    
      <aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
<a href="#authorisation-scopes">common:customer.basic:read</a>
</aside>

    
  

## Get Customer Detail

<a id="opIdgetCustomerDetail"></a>

> Code samples

```http
GET https://data.holder.com.au/cds-au/v1/common/customer/detail HTTP/1.1
Host: data.holder.com.au
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
  url: 'https://data.holder.com.au/cds-au/v1/common/customer/detail',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`GET /common/customer/detail`

Obtain detailed information on the authorised customer within the current session.

###Endpoint Version
|   |  |
|---|--|
|Version|**1**

<h3 id="get-customer-detail-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-v|header|string|mandatory|Version of the API end point requested by the client. Must be set to a positive integer. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If the value of [x-min-v](#request-headers) is equal to or higher than the value of [x-v](#request-headers) then the [x-min-v](#request-headers) header should be treated as absent. If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable. See [HTTP Headers](#request-headers)|
|x-min-v|header|string|optional|Minimum version of the API end point requested by the client. Must be set to a positive integer if provided. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable.|
|x-fapi-interaction-id|header|string|optional|An [RFC4122](https://tools.ietf.org/html/rfc4122) UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a [RFC4122] UUID value is required to be provided in the response header to track the interaction.|
|x-fapi-auth-date|header|string|optional|The time when the customer last logged in to the Data Recipient Software Product. Required for all resource calls (customer present and unattended). Not to be included for unauthenticated calls.|
|x-fapi-customer-ip-address|header|string|optional|The customer's original IP address if the customer is currently logged in to the Data Recipient Software Product. The presence of this header indicates that the API is being called in a customer present context. Not to be included for unauthenticated calls.|
|x-cds-client-headers|header|[Base64](#common-field-types)|optional|The customer's original standard http headers [Base64](#common-field-types) encoded, including the original User Agent header, if the customer is currently logged in to the Data Recipient Software Product. Mandatory for customer present calls.  Not required for unattended or unauthenticated calls.|

> Example responses

> 200 Response

```json
{
  "data": {
    "customerUType": "organisation",
    "person": {
      "lastUpdateTime": "string",
      "firstName": "string",
      "lastName": "string",
      "middleNames": [
        "string"
      ],
      "prefix": "string",
      "suffix": "string",
      "occupationCode": "string",
      "occupationCodeVersion": "ANZSCO_1220.0_2013_V1.2",
      "phoneNumbers": [
        {
          "isPreferred": true,
          "purpose": "HOME",
          "countryCode": "string",
          "areaCode": "string",
          "number": "string",
          "extension": "string",
          "fullNumber": "string"
        }
      ],
      "emailAddresses": [
        {
          "isPreferred": true,
          "purpose": "HOME",
          "address": "string"
        }
      ],
      "physicalAddresses": [
        {
          "addressUType": "paf",
          "simple": {
            "mailingName": "string",
            "addressLine1": "string",
            "addressLine2": "string",
            "addressLine3": "string",
            "postcode": "string",
            "city": "string",
            "state": "string",
            "country": "AUS"
          },
          "paf": {
            "dpid": "string",
            "thoroughfareNumber1": 0,
            "thoroughfareNumber1Suffix": "string",
            "thoroughfareNumber2": 0,
            "thoroughfareNumber2Suffix": "string",
            "flatUnitType": "string",
            "flatUnitNumber": "string",
            "floorLevelType": "string",
            "floorLevelNumber": "string",
            "lotNumber": "string",
            "buildingName1": "string",
            "buildingName2": "string",
            "streetName": "string",
            "streetType": "string",
            "streetSuffix": "string",
            "postalDeliveryType": "string",
            "postalDeliveryNumber": 0,
            "postalDeliveryNumberPrefix": "string",
            "postalDeliveryNumberSuffix": "string",
            "localityName": "string",
            "postcode": "string",
            "state": "string"
          },
          "purpose": "MAIL"
        }
      ]
    },
    "organisation": {
      "lastUpdateTime": "string",
      "agentFirstName": "string",
      "agentLastName": "string",
      "agentRole": "string",
      "businessName": "string",
      "legalName": "string",
      "shortName": "string",
      "abn": "string",
      "acn": "string",
      "isACNCRegistered": true,
      "industryCode": "string",
      "industryCodeVersion": "ANZSIC_1292.0_2006_V2.0",
      "organisationType": "COMPANY",
      "registeredCountry": "string",
      "establishmentDate": "string",
      "physicalAddresses": [
        {
          "addressUType": "paf",
          "simple": {
            "mailingName": "string",
            "addressLine1": "string",
            "addressLine2": "string",
            "addressLine3": "string",
            "postcode": "string",
            "city": "string",
            "state": "string",
            "country": "AUS"
          },
          "paf": {
            "dpid": "string",
            "thoroughfareNumber1": 0,
            "thoroughfareNumber1Suffix": "string",
            "thoroughfareNumber2": 0,
            "thoroughfareNumber2Suffix": "string",
            "flatUnitType": "string",
            "flatUnitNumber": "string",
            "floorLevelType": "string",
            "floorLevelNumber": "string",
            "lotNumber": "string",
            "buildingName1": "string",
            "buildingName2": "string",
            "streetName": "string",
            "streetType": "string",
            "streetSuffix": "string",
            "postalDeliveryType": "string",
            "postalDeliveryNumber": 0,
            "postalDeliveryNumberPrefix": "string",
            "postalDeliveryNumberSuffix": "string",
            "localityName": "string",
            "postcode": "string",
            "state": "string"
          },
          "purpose": "MAIL"
        }
      ]
    }
  },
  "links": {
    "self": "string"
  },
  "meta": {}
}
```

<h3 id="get-customer-detail-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[ResponseCommonCustomerDetail](#schemaresponsecommoncustomerdetail)|
|4xx|[**Client Error**](https://tools.ietf.org/html/rfc7231#section-6.5)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|[ResponseErrorListV2](#schemaresponseerrorlistv2)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-v|string||The [version](#response-headers) of the API end point that the data holder has responded with.|
|200|x-fapi-interaction-id|string||An [RFC4122](https://tools.ietf.org/html/rfc4122) UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a [RFC4122] UUID value is required to be provided in the response header to track the interaction.|
|4xx|x-fapi-interaction-id|string||An [RFC4122](https://tools.ietf.org/html/rfc4122) UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a [RFC4122] UUID value is required to be provided in the response header to track the interaction.|

  
    
      <aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
<a href="#authorisation-scopes">common:customer.detail:read</a>
</aside>

    
  

## Get Status

<a id="opIdgetStatus"></a>

> Code samples

```http
GET https://data.holder.com.au/cds-au/v1/discovery/status HTTP/1.1
Host: data.holder.com.au
Accept: application/json
x-v: string
x-min-v: string

```

```javascript
var headers = {
  'Accept':'application/json',
  'x-v':'string',
  'x-min-v':'string'

};

$.ajax({
  url: 'https://data.holder.com.au/cds-au/v1/discovery/status',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`GET /discovery/status`

Obtain a health check status for the implementation

###Endpoint Version
|   |  |
|---|--|
|Version|**1**

<h3 id="get-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-v|header|string|mandatory|Version of the API end point requested by the client. Must be set to a positive integer. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If the value of [x-min-v](#request-headers) is equal to or higher than the value of [x-v](#request-headers) then the [x-min-v](#request-headers) header should be treated as absent. If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable. See [HTTP Headers](#request-headers)|
|x-min-v|header|string|optional|Minimum version of the API end point requested by the client. Must be set to a positive integer if provided. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable.|

> Example responses

> 200 Response

```json
{
  "data": {
    "status": "OK",
    "explanation": "string",
    "detectionTime": "string",
    "expectedResolutionTime": "string",
    "updateTime": "string"
  },
  "links": {
    "self": "string"
  },
  "meta": {}
}
```

<h3 id="get-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[ResponseCommonDiscoveryStatus](#schemaresponsecommondiscoverystatus)|
|4xx|[**Client Error**](https://tools.ietf.org/html/rfc7231#section-6.5)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|[ResponseErrorListV2](#schemaresponseerrorlistv2)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-v|string||The [version](#response-headers) of the API end point that the data holder has responded with.|

  
    <aside class="success">
This operation does not require authentication
</aside>

  

## Get Outages

<a id="opIdgetOutages"></a>

> Code samples

```http
GET https://data.holder.com.au/cds-au/v1/discovery/outages HTTP/1.1
Host: data.holder.com.au
Accept: application/json
x-v: string
x-min-v: string

```

```javascript
var headers = {
  'Accept':'application/json',
  'x-v':'string',
  'x-min-v':'string'

};

$.ajax({
  url: 'https://data.holder.com.au/cds-au/v1/discovery/outages',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`GET /discovery/outages`

Obtain a list of scheduled outages for the implementation

###Endpoint Version
|   |  |
|---|--|
|Version|**1**

<h3 id="get-outages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-v|header|string|mandatory|Version of the API end point requested by the client. Must be set to a positive integer. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If the value of [x-min-v](#request-headers) is equal to or higher than the value of [x-v](#request-headers) then the [x-min-v](#request-headers) header should be treated as absent. If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable. See [HTTP Headers](#request-headers)|
|x-min-v|header|string|optional|Minimum version of the API end point requested by the client. Must be set to a positive integer if provided. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable.|

> Example responses

> 200 Response

```json
{
  "data": {
    "outages": [
      {
        "outageTime": "string",
        "duration": "string",
        "isPartial": true,
        "explanation": "string"
      }
    ]
  },
  "links": {
    "self": "string"
  },
  "meta": {}
}
```

<h3 id="get-outages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[ResponseDiscoveryOutagesList](#schemaresponsediscoveryoutageslist)|
|4xx|[**Client Error**](https://tools.ietf.org/html/rfc7231#section-6.5)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|[ResponseErrorListV2](#schemaresponseerrorlistv2)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-v|string||The [version](#response-headers) of the API end point that the data holder has responded with.|

  
    <aside class="success">
This operation does not require authentication
</aside>

  

<h2 class="schema-heading" id="consumer-data-standards-schemas">Schemas</h2>
<a class="schema-link" id="consumer-data-standards-schemas"></a>

<h2 class="schema-toc" id="tocSresponsecommondiscoverystatus">ResponseCommonDiscoveryStatus</h2>

<a id="schemaresponsecommondiscoverystatus"></a>

```json
{
  "data": {
    "status": "OK",
    "explanation": "string",
    "detectionTime": "string",
    "expectedResolutionTime": "string",
    "updateTime": "string"
  },
  "links": {
    "self": "string"
  },
  "meta": {}
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|mandatory|none|none|
|» status|string|mandatory|none|Enumeration with values. OK (implementation is fully functional). PARTIAL_FAILURE (one or more end points are unexpectedly unavailable). UNAVAILABLE (the full implementation is unexpectedly unavailable). SCHEDULED_OUTAGE (an advertised outage is in effect)|
|» explanation|string|conditional|none|Provides an explanation of the current outage that can be displayed to an end customer. Mandatory if the status property is any value other than OK|
|» detectionTime|[DateTimeString](#common-field-types)|optional|none|The date and time that the current outage was detected. Should only be present if the status property is PARTIAL_FAILURE or UNAVAILABLE|
|» expectedResolutionTime|[DateTimeString](#common-field-types)|optional|none|The date and time that full service is expected to resume (if known). Should not be present if the status property has a value of OK.|
|» updateTime|[DateTimeString](#common-field-types)|mandatory|none|The date and time that this status was last updated by the Data Holder.|
|links|[Links](#schemalinks)|mandatory|none|none|
|meta|[Meta](#schemameta)|optional|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|
|status|PARTIAL_FAILURE|
|status|SCHEDULED_OUTAGE|
|status|UNAVAILABLE|

<h2 class="schema-toc" id="tocSresponsediscoveryoutageslist">ResponseDiscoveryOutagesList</h2>

<a id="schemaresponsediscoveryoutageslist"></a>

```json
{
  "data": {
    "outages": [
      {
        "outageTime": "string",
        "duration": "string",
        "isPartial": true,
        "explanation": "string"
      }
    ]
  },
  "links": {
    "self": "string"
  },
  "meta": {}
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|mandatory|none|none|
|» outages|[[DiscoveryOutage](#schemadiscoveryoutage)]|mandatory|none|List of scheduled outages. Property is mandatory but may contain and empty list if no outages are scheduled|
|links|[Links](#schemalinks)|mandatory|none|none|
|meta|[Meta](#schemameta)|optional|none|none|

<h2 class="schema-toc" id="tocSdiscoveryoutage">DiscoveryOutage</h2>

<a id="schemadiscoveryoutage"></a>

```json
{
  "outageTime": "string",
  "duration": "string",
  "isPartial": true,
  "explanation": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|outageTime|[DateTimeString](#common-field-types)|mandatory|none|Date and time that the outage is scheduled to begin|
|duration|[ExternalRef](#common-field-types)|mandatory|none|Planned duration of the outage. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)|
|isPartial|[Boolean](#common-field-types)|optional|none|Flag that indicates, if present and set to true, that the outage is only partial meaning that only a subset of normally available end points will be affected by the outage|
|explanation|string|mandatory|none|Provides an explanation of the current outage that can be displayed to an end customer|

<h2 class="schema-toc" id="tocSresponsecommoncustomer">ResponseCommonCustomer</h2>

<a id="schemaresponsecommoncustomer"></a>

```json
{
  "data": {
    "customerUType": "organisation",
    "person": {
      "lastUpdateTime": "string",
      "firstName": "string",
      "lastName": "string",
      "middleNames": [
        "string"
      ],
      "prefix": "string",
      "suffix": "string",
      "occupationCode": "string",
      "occupationCodeVersion": "ANZSCO_1220.0_2013_V1.2"
    },
    "organisation": {
      "lastUpdateTime": "string",
      "agentFirstName": "string",
      "agentLastName": "string",
      "agentRole": "string",
      "businessName": "string",
      "legalName": "string",
      "shortName": "string",
      "abn": "string",
      "acn": "string",
      "isACNCRegistered": true,
      "industryCode": "string",
      "industryCodeVersion": "ANZSIC_1292.0_2006_V2.0",
      "organisationType": "COMPANY",
      "registeredCountry": "string",
      "establishmentDate": "string"
    }
  },
  "links": {
    "self": "string"
  },
  "meta": {}
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|mandatory|none|none|
|» customerUType|string|mandatory|none|The type of customer object that is present|
|» person|[CommonPerson](#schemacommonperson)|conditional|none|Mandatory if `customerUType` is `person`|
|» organisation|[CommonOrganisation](#schemacommonorganisation)|conditional|none|Mandatory if `customerUType` is `organisation`|
|links|[Links](#schemalinks)|mandatory|none|none|
|meta|[Meta](#schemameta)|optional|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|customerUType|organisation|
|customerUType|person|

<h2 class="schema-toc" id="tocSresponsecommoncustomerdetail">ResponseCommonCustomerDetail</h2>

<a id="schemaresponsecommoncustomerdetail"></a>

```json
{
  "data": {
    "customerUType": "organisation",
    "person": {
      "lastUpdateTime": "string",
      "firstName": "string",
      "lastName": "string",
      "middleNames": [
        "string"
      ],
      "prefix": "string",
      "suffix": "string",
      "occupationCode": "string",
      "occupationCodeVersion": "ANZSCO_1220.0_2013_V1.2",
      "phoneNumbers": [
        {
          "isPreferred": true,
          "purpose": "HOME",
          "countryCode": "string",
          "areaCode": "string",
          "number": "string",
          "extension": "string",
          "fullNumber": "string"
        }
      ],
      "emailAddresses": [
        {
          "isPreferred": true,
          "purpose": "HOME",
          "address": "string"
        }
      ],
      "physicalAddresses": [
        {
          "addressUType": "paf",
          "simple": {
            "mailingName": "string",
            "addressLine1": "string",
            "addressLine2": "string",
            "addressLine3": "string",
            "postcode": "string",
            "city": "string",
            "state": "string",
            "country": "AUS"
          },
          "paf": {
            "dpid": "string",
            "thoroughfareNumber1": 0,
            "thoroughfareNumber1Suffix": "string",
            "thoroughfareNumber2": 0,
            "thoroughfareNumber2Suffix": "string",
            "flatUnitType": "string",
            "flatUnitNumber": "string",
            "floorLevelType": "string",
            "floorLevelNumber": "string",
            "lotNumber": "string",
            "buildingName1": "string",
            "buildingName2": "string",
            "streetName": "string",
            "streetType": "string",
            "streetSuffix": "string",
            "postalDeliveryType": "string",
            "postalDeliveryNumber": 0,
            "postalDeliveryNumberPrefix": "string",
            "postalDeliveryNumberSuffix": "string",
            "localityName": "string",
            "postcode": "string",
            "state": "string"
          },
          "purpose": "MAIL"
        }
      ]
    },
    "organisation": {
      "lastUpdateTime": "string",
      "agentFirstName": "string",
      "agentLastName": "string",
      "agentRole": "string",
      "businessName": "string",
      "legalName": "string",
      "shortName": "string",
      "abn": "string",
      "acn": "string",
      "isACNCRegistered": true,
      "industryCode": "string",
      "industryCodeVersion": "ANZSIC_1292.0_2006_V2.0",
      "organisationType": "COMPANY",
      "registeredCountry": "string",
      "establishmentDate": "string",
      "physicalAddresses": [
        {
          "addressUType": "paf",
          "simple": {
            "mailingName": "string",
            "addressLine1": "string",
            "addressLine2": "string",
            "addressLine3": "string",
            "postcode": "string",
            "city": "string",
            "state": "string",
            "country": "AUS"
          },
          "paf": {
            "dpid": "string",
            "thoroughfareNumber1": 0,
            "thoroughfareNumber1Suffix": "string",
            "thoroughfareNumber2": 0,
            "thoroughfareNumber2Suffix": "string",
            "flatUnitType": "string",
            "flatUnitNumber": "string",
            "floorLevelType": "string",
            "floorLevelNumber": "string",
            "lotNumber": "string",
            "buildingName1": "string",
            "buildingName2": "string",
            "streetName": "string",
            "streetType": "string",
            "streetSuffix": "string",
            "postalDeliveryType": "string",
            "postalDeliveryNumber": 0,
            "postalDeliveryNumberPrefix": "string",
            "postalDeliveryNumberSuffix": "string",
            "localityName": "string",
            "postcode": "string",
            "state": "string"
          },
          "purpose": "MAIL"
        }
      ]
    }
  },
  "links": {
    "self": "string"
  },
  "meta": {}
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|mandatory|none|none|
|» customerUType|string|mandatory|none|The type of customer object that is present|
|» person|[CommonPersonDetail](#schemacommonpersondetail)|conditional|none|Mandatory if `customerUType` is `person`|
|» organisation|[CommonOrganisationDetail](#schemacommonorganisationdetail)|conditional|none|Mandatory if `customerUType` is `organisation`|
|links|[Links](#schemalinks)|mandatory|none|none|
|meta|[Meta](#schemameta)|optional|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|customerUType|organisation|
|customerUType|person|

<h2 class="schema-toc" id="tocScommonperson">CommonPerson</h2>

<a id="schemacommonperson"></a>

```json
{
  "lastUpdateTime": "string",
  "firstName": "string",
  "lastName": "string",
  "middleNames": [
    "string"
  ],
  "prefix": "string",
  "suffix": "string",
  "occupationCode": "string",
  "occupationCodeVersion": "ANZSCO_1220.0_2013_V1.2"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lastUpdateTime|[DateTimeString](#common-field-types)|optional|none|The date and time that this record was last updated by the customer.  If no update has occurred then this date should reflect the initial creation date for the data|
|firstName|string|optional|none|For people with single names this field need not be present. The single name should be in the lastName field. Where a data holder cannot determine first and middle names from a collection of given names, a single string representing all given names MAY be provided.|
|lastName|string|mandatory|none|For people with single names the single name should be in this field|
|middleNames|[string]|mandatory|none|Field is mandatory but array may be empty|
|prefix|string|optional|none|Also known as title or salutation.  The prefix to the name (e.g. Mr, Mrs, Ms, Miss, Sir, etc)|
|suffix|string|optional|none|Used for a trailing suffix to the name (e.g. Jr)|
|occupationCode|[ExternalRef](#common-field-types)|optional|none|Value is a valid [ANZSCO](http://www.abs.gov.au/ANZSCO) Standard Occupation classification code. If the occupation code held by the data holder is not one of the supported [ANZSCO](http://www.abs.gov.au/ANZSCO) versions, then it must not be supplied.|
|occupationCodeVersion|string|conditional|none|The applicable [ANZSCO](http://www.abs.gov.au/ANZSCO) release version of the occupation code provided. Mandatory if an ``occupationCode`` is supplied. If ``occupationCode`` is supplied but ``occupationCodeVersion`` is absent, default is ``ANZSCO_1220.0_2013_V1.2``|

#### Enumerated Values

|Property|Value|
|---|---|
|occupationCodeVersion|ANZSCO_1220.0_2006_V1.0|
|occupationCodeVersion|ANZSCO_1220.0_2006_V1.1|
|occupationCodeVersion|ANZSCO_1220.0_2013_V1.2|
|occupationCodeVersion|ANZSCO_1220.0_2013_V1.3|

<h2 class="schema-toc" id="tocScommonpersondetail">CommonPersonDetail</h2>

<a id="schemacommonpersondetail"></a>

```json
{
  "lastUpdateTime": "string",
  "firstName": "string",
  "lastName": "string",
  "middleNames": [
    "string"
  ],
  "prefix": "string",
  "suffix": "string",
  "occupationCode": "string",
  "occupationCodeVersion": "ANZSCO_1220.0_2013_V1.2",
  "phoneNumbers": [
    {
      "isPreferred": true,
      "purpose": "HOME",
      "countryCode": "string",
      "areaCode": "string",
      "number": "string",
      "extension": "string",
      "fullNumber": "string"
    }
  ],
  "emailAddresses": [
    {
      "isPreferred": true,
      "purpose": "HOME",
      "address": "string"
    }
  ],
  "physicalAddresses": [
    {
      "addressUType": "paf",
      "simple": {
        "mailingName": "string",
        "addressLine1": "string",
        "addressLine2": "string",
        "addressLine3": "string",
        "postcode": "string",
        "city": "string",
        "state": "string",
        "country": "AUS"
      },
      "paf": {
        "dpid": "string",
        "thoroughfareNumber1": 0,
        "thoroughfareNumber1Suffix": "string",
        "thoroughfareNumber2": 0,
        "thoroughfareNumber2Suffix": "string",
        "flatUnitType": "string",
        "flatUnitNumber": "string",
        "floorLevelType": "string",
        "floorLevelNumber": "string",
        "lotNumber": "string",
        "buildingName1": "string",
        "buildingName2": "string",
        "streetName": "string",
        "streetType": "string",
        "streetSuffix": "string",
        "postalDeliveryType": "string",
        "postalDeliveryNumber": 0,
        "postalDeliveryNumberPrefix": "string",
        "postalDeliveryNumberSuffix": "string",
        "localityName": "string",
        "postcode": "string",
        "state": "string"
      },
      "purpose": "MAIL"
    }
  ]
}

```

### Properties

*allOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[CommonPerson](#schemacommonperson)|mandatory|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|mandatory|none|none|
|» phoneNumbers|[[CommonPhoneNumber](#schemacommonphonenumber)]|mandatory|none|Array is mandatory but may be empty if no phone numbers are held|
|» emailAddresses|[[CommonEmailAddress](#schemacommonemailaddress)]|mandatory|none|May be empty|
|» physicalAddresses|[[CommonPhysicalAddressWithPurpose](#schemacommonphysicaladdresswithpurpose)]|mandatory|none|Must contain at least one address. One and only one address may have the purpose of REGISTERED. Zero or one, and no more than one, record may have the purpose of MAIL. If zero then the REGISTERED address is to be used for mail|

<h2 class="schema-toc" id="tocScommonorganisation">CommonOrganisation</h2>

<a id="schemacommonorganisation"></a>

```json
{
  "lastUpdateTime": "string",
  "agentFirstName": "string",
  "agentLastName": "string",
  "agentRole": "string",
  "businessName": "string",
  "legalName": "string",
  "shortName": "string",
  "abn": "string",
  "acn": "string",
  "isACNCRegistered": true,
  "industryCode": "string",
  "industryCodeVersion": "ANZSIC_1292.0_2006_V2.0",
  "organisationType": "COMPANY",
  "registeredCountry": "string",
  "establishmentDate": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lastUpdateTime|[DateTimeString](#common-field-types)|optional|none|The date and time that this record was last updated by the customer. If no update has occurred then this date should reflect the initial creation date for the data|
|agentFirstName|string|optional|none|The first name of the individual providing access on behalf of the organisation. For people with single names this field need not be present.  The single name should be in the lastName field|
|agentLastName|string|mandatory|none|The last name of the individual providing access on behalf of the organisation. For people with single names the single name should be in this field|
|agentRole|string|mandatory|none|The role of the individual identified as the agent who is providing authorisation.  Expected to be used for display. Default to Unspecified if the role is not known|
|businessName|string|mandatory|none|Name of the organisation|
|legalName|string|optional|none|Legal name, if different to the business name|
|shortName|string|optional|none|Short name used for communication, if different to the business name|
|abn|string|optional|none|Australian Business Number for the organisation|
|acn|string|optional|none|Australian Company Number for the organisation. Required only if an ACN is applicable for the organisation type|
|isACNCRegistered|[Boolean](#common-field-types)|optional|none|True if registered with the ACNC.  False if not. Absent or null if not confirmed.|
|industryCode|[ExternalRef](#common-field-types)|optional|none|A valid [ANZSIC](http://www.abs.gov.au/ANZSIC) code for the organisation. If the industry code held by the data holder is not one of the supported [ANZSIC](http://www.abs.gov.au/ANZSIC) versions, then it must not be supplied.|
|industryCodeVersion|string|conditional|none|The applicable [ANZSIC](http://www.abs.gov.au/ANZSIC) release version of the industry code provided. Should only be supplied if ``industryCode`` is also supplied. If ``industryCode`` is supplied but ``industryCodeVersion`` is absent, default is ``ANZSIC_1292.0_2006_V2.0``|
|organisationType|string|mandatory|none|Legal organisation type|
|registeredCountry|[ExternalRef](#common-field-types)|optional|none|Enumeration with values from [ISO 3166 Alpha-3](https://www.iso.org/iso-3166-country-codes.html) country codes.  Assumed to be AUS if absent|
|establishmentDate|[DateString](#common-field-types)|optional|none|The date the organisation described was established|

#### Enumerated Values

|Property|Value|
|---|---|
|industryCodeVersion|ANZSIC_1292.0_2006_V1.0|
|industryCodeVersion|ANZSIC_1292.0_2006_V2.0|
|organisationType|COMPANY|
|organisationType|GOVERNMENT_ENTITY|
|organisationType|OTHER|
|organisationType|PARTNERSHIP|
|organisationType|SOLE_TRADER|
|organisationType|TRUST|

<h2 class="schema-toc" id="tocScommonorganisationdetail">CommonOrganisationDetail</h2>

<a id="schemacommonorganisationdetail"></a>

```json
{
  "lastUpdateTime": "string",
  "agentFirstName": "string",
  "agentLastName": "string",
  "agentRole": "string",
  "businessName": "string",
  "legalName": "string",
  "shortName": "string",
  "abn": "string",
  "acn": "string",
  "isACNCRegistered": true,
  "industryCode": "string",
  "industryCodeVersion": "ANZSIC_1292.0_2006_V2.0",
  "organisationType": "COMPANY",
  "registeredCountry": "string",
  "establishmentDate": "string",
  "physicalAddresses": [
    {
      "addressUType": "paf",
      "simple": {
        "mailingName": "string",
        "addressLine1": "string",
        "addressLine2": "string",
        "addressLine3": "string",
        "postcode": "string",
        "city": "string",
        "state": "string",
        "country": "AUS"
      },
      "paf": {
        "dpid": "string",
        "thoroughfareNumber1": 0,
        "thoroughfareNumber1Suffix": "string",
        "thoroughfareNumber2": 0,
        "thoroughfareNumber2Suffix": "string",
        "flatUnitType": "string",
        "flatUnitNumber": "string",
        "floorLevelType": "string",
        "floorLevelNumber": "string",
        "lotNumber": "string",
        "buildingName1": "string",
        "buildingName2": "string",
        "streetName": "string",
        "streetType": "string",
        "streetSuffix": "string",
        "postalDeliveryType": "string",
        "postalDeliveryNumber": 0,
        "postalDeliveryNumberPrefix": "string",
        "postalDeliveryNumberSuffix": "string",
        "localityName": "string",
        "postcode": "string",
        "state": "string"
      },
      "purpose": "MAIL"
    }
  ]
}

```

### Properties

*allOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[CommonOrganisation](#schemacommonorganisation)|mandatory|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|mandatory|none|none|
|» physicalAddresses|[[CommonPhysicalAddressWithPurpose](#schemacommonphysicaladdresswithpurpose)]|mandatory|none|Must contain at least one address. One and only one address may have the purpose of REGISTERED. Zero or one, and no more than one, record may have the purpose of MAIL. If zero then the REGISTERED address is to be used for mail|

<h2 class="schema-toc" id="tocScommonphonenumber">CommonPhoneNumber</h2>

<a id="schemacommonphonenumber"></a>

```json
{
  "isPreferred": true,
  "purpose": "HOME",
  "countryCode": "string",
  "areaCode": "string",
  "number": "string",
  "extension": "string",
  "fullNumber": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|isPreferred|[Boolean](#common-field-types)|optional|none|May be true for one and only one entry to indicate the preferred phone number. Assumed to be 'false' if not present|
|purpose|string|mandatory|none|The purpose of the number as specified by the customer|
|countryCode|string|optional|none|If absent, assumed to be Australia (+61). The + should be included|
|areaCode|string|conditional|none|Required for non Mobile Phones, if field is present and refers to Australian code - the leading 0 should be omitted.|
|number|string|mandatory|none|The actual phone number, with leading zeros as appropriate|
|extension|string|optional|none|An extension number (if applicable)|
|fullNumber|[ExternalRef](#common-field-types)|mandatory|none|Fully formatted phone number with country code, area code, number and extension incorporated. Formatted according to section 5.1.4. of [RFC 3966](https://www.ietf.org/rfc/rfc3966.txt)|

#### Enumerated Values

|Property|Value|
|---|---|
|purpose|HOME|
|purpose|INTERNATIONAL|
|purpose|MOBILE|
|purpose|OTHER|
|purpose|UNSPECIFIED|
|purpose|WORK|

<h2 class="schema-toc" id="tocScommonemailaddress">CommonEmailAddress</h2>

<a id="schemacommonemailaddress"></a>

```json
{
  "isPreferred": true,
  "purpose": "HOME",
  "address": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|isPreferred|[Boolean](#common-field-types)|optional|none|May be true for one and only one email record in the collection. Denotes the default email address|
|purpose|string|mandatory|none|The purpose for the email, as specified by the customer (Enumeration)|
|address|[ExternalRef](#common-field-types)|mandatory|none|A correctly formatted email address, as defined by the addr_spec format in [RFC 5322](https://www.ietf.org/rfc/rfc5322.txt)|

#### Enumerated Values

|Property|Value|
|---|---|
|purpose|HOME|
|purpose|OTHER|
|purpose|UNSPECIFIED|
|purpose|WORK|

<h2 class="schema-toc" id="tocScommonphysicaladdresswithpurpose">CommonPhysicalAddressWithPurpose</h2>

<a id="schemacommonphysicaladdresswithpurpose"></a>

```json
{
  "addressUType": "paf",
  "simple": {
    "mailingName": "string",
    "addressLine1": "string",
    "addressLine2": "string",
    "addressLine3": "string",
    "postcode": "string",
    "city": "string",
    "state": "string",
    "country": "AUS"
  },
  "paf": {
    "dpid": "string",
    "thoroughfareNumber1": 0,
    "thoroughfareNumber1Suffix": "string",
    "thoroughfareNumber2": 0,
    "thoroughfareNumber2Suffix": "string",
    "flatUnitType": "string",
    "flatUnitNumber": "string",
    "floorLevelType": "string",
    "floorLevelNumber": "string",
    "lotNumber": "string",
    "buildingName1": "string",
    "buildingName2": "string",
    "streetName": "string",
    "streetType": "string",
    "streetSuffix": "string",
    "postalDeliveryType": "string",
    "postalDeliveryNumber": 0,
    "postalDeliveryNumberPrefix": "string",
    "postalDeliveryNumberSuffix": "string",
    "localityName": "string",
    "postcode": "string",
    "state": "string"
  },
  "purpose": "MAIL"
}

```

### Properties

*allOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[CommonPhysicalAddress](#schemacommonphysicaladdress)|mandatory|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|mandatory|none|none|
|» purpose|string|mandatory|none|Enumeration of values indicating the purpose of the physical address|

#### Enumerated Values

|Property|Value|
|---|---|
|purpose|MAIL|
|purpose|OTHER|
|purpose|PHYSICAL|
|purpose|REGISTERED|
|purpose|WORK|

<h2 class="schema-toc" id="tocScommonphysicaladdress">CommonPhysicalAddress</h2>

<a id="schemacommonphysicaladdress"></a>

```json
{
  "addressUType": "paf",
  "simple": {
    "mailingName": "string",
    "addressLine1": "string",
    "addressLine2": "string",
    "addressLine3": "string",
    "postcode": "string",
    "city": "string",
    "state": "string",
    "country": "AUS"
  },
  "paf": {
    "dpid": "string",
    "thoroughfareNumber1": 0,
    "thoroughfareNumber1Suffix": "string",
    "thoroughfareNumber2": 0,
    "thoroughfareNumber2Suffix": "string",
    "flatUnitType": "string",
    "flatUnitNumber": "string",
    "floorLevelType": "string",
    "floorLevelNumber": "string",
    "lotNumber": "string",
    "buildingName1": "string",
    "buildingName2": "string",
    "streetName": "string",
    "streetType": "string",
    "streetSuffix": "string",
    "postalDeliveryType": "string",
    "postalDeliveryNumber": 0,
    "postalDeliveryNumberPrefix": "string",
    "postalDeliveryNumberSuffix": "string",
    "localityName": "string",
    "postcode": "string",
    "state": "string"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addressUType|string|mandatory|none|The type of address object present|
|simple|[CommonSimpleAddress](#schemacommonsimpleaddress)|conditional|none|none|
|paf|[CommonPAFAddress](#schemacommonpafaddress)|conditional|none|Australian address formatted according to the file format defined by the [PAF file format](https://auspost.com.au/content/dam/auspost_corp/media/documents/australia-post-data-guide.pdf)|

#### Enumerated Values

|Property|Value|
|---|---|
|addressUType|paf|
|addressUType|simple|

<h2 class="schema-toc" id="tocScommonsimpleaddress">CommonSimpleAddress</h2>

<a id="schemacommonsimpleaddress"></a>

```json
{
  "mailingName": "string",
  "addressLine1": "string",
  "addressLine2": "string",
  "addressLine3": "string",
  "postcode": "string",
  "city": "string",
  "state": "string",
  "country": "AUS"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mailingName|string|optional|none|Name of the individual or business formatted for inclusion in an address used for physical mail|
|addressLine1|string|mandatory|none|First line of the standard address object|
|addressLine2|string|optional|none|Second line of the standard address object|
|addressLine3|string|optional|none|Third line of the standard address object|
|postcode|string|conditional|none|Mandatory for Australian addresses|
|city|string|mandatory|none|Name of the city or locality|
|state|string|mandatory|none|Free text if the country is not Australia. If country is Australia then must be one of the values defined by the [State Type Abbreviation](https://auspost.com.au/content/dam/auspost_corp/media/documents/australia-post-data-guide.pdf) in the PAF file format. NSW, QLD, VIC, NT, WA, SA, TAS, ACT, AAT|
|country|[ExternalRef](#common-field-types)|optional|none|A valid [ISO 3166 Alpha-3](https://www.iso.org/iso-3166-country-codes.html) country code. Australia (AUS) is assumed if country is not present.|

<h2 class="schema-toc" id="tocScommonpafaddress">CommonPAFAddress</h2>

<a id="schemacommonpafaddress"></a>

```json
{
  "dpid": "string",
  "thoroughfareNumber1": 0,
  "thoroughfareNumber1Suffix": "string",
  "thoroughfareNumber2": 0,
  "thoroughfareNumber2Suffix": "string",
  "flatUnitType": "string",
  "flatUnitNumber": "string",
  "floorLevelType": "string",
  "floorLevelNumber": "string",
  "lotNumber": "string",
  "buildingName1": "string",
  "buildingName2": "string",
  "streetName": "string",
  "streetType": "string",
  "streetSuffix": "string",
  "postalDeliveryType": "string",
  "postalDeliveryNumber": 0,
  "postalDeliveryNumberPrefix": "string",
  "postalDeliveryNumberSuffix": "string",
  "localityName": "string",
  "postcode": "string",
  "state": "string"
}

```

*Australian address formatted according to the file format defined by the [PAF file format](https://auspost.com.au/content/dam/auspost_corp/media/documents/australia-post-data-guide.pdf)*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dpid|string|optional|none|Unique identifier for an address as defined by Australia Post.  Also known as Delivery Point Identifier|
|thoroughfareNumber1|[PositiveInteger](#common-field-types)|optional|none|Thoroughfare number for a property (first number in a property ranged address)|
|thoroughfareNumber1Suffix|string|optional|none|Suffix for the thoroughfare number. Only relevant is thoroughfareNumber1 is populated|
|thoroughfareNumber2|[PositiveInteger](#common-field-types)|optional|none|Second thoroughfare number (only used if the property has a ranged address eg 23-25)|
|thoroughfareNumber2Suffix|string|optional|none|Suffix for the second thoroughfare number. Only relevant is thoroughfareNumber2 is populated|
|flatUnitType|string|optional|none|Type of flat or unit for the address|
|flatUnitNumber|string|optional|none|Unit number (including suffix, if applicable)|
|floorLevelType|string|optional|none|Type of floor or level for the address|
|floorLevelNumber|string|optional|none|Floor or level number (including alpha characters)|
|lotNumber|string|optional|none|Allotment number for the address|
|buildingName1|string|optional|none|Building/Property name 1|
|buildingName2|string|optional|none|Building/Property name 2|
|streetName|string|optional|none|The name of the street|
|streetType|string|optional|none|The street type. Valid enumeration defined by Australia Post PAF code file|
|streetSuffix|string|optional|none|The street type suffix. Valid enumeration defined by Australia Post PAF code file|
|postalDeliveryType|string|optional|none|Postal delivery type. (eg. PO BOX). Valid enumeration defined by Australia Post PAF code file|
|postalDeliveryNumber|[PositiveInteger](#common-field-types)|optional|none|Postal delivery number if the address is a postal delivery type|
|postalDeliveryNumberPrefix|string|optional|none|Postal delivery number prefix related to the postal delivery number|
|postalDeliveryNumberSuffix|string|optional|none|Postal delivery number suffix related to the postal delivery number|
|localityName|string|mandatory|none|Full name of locality|
|postcode|string|mandatory|none|Postcode for the locality|
|state|string|mandatory|none|State in which the address belongs. Valid enumeration defined by Australia Post PAF code file [State Type Abbreviation](https://auspost.com.au/content/dam/auspost_corp/media/documents/australia-post-data-guide.pdf). NSW, QLD, VIC, NT, WA, SA, TAS, ACT, AAT|

<h2 class="schema-toc" id="tocSlinks">Links</h2>

<a id="schemalinks"></a>

```json
{
  "self": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|self|[URIString](#common-field-types)|mandatory|none|Fully qualified link that generated the current response document|

<h2 class="schema-toc" id="tocSmeta">Meta</h2>

<a id="schemameta"></a>

```json
{}

```

### Properties

*None*

<h2 class="schema-toc" id="tocSmetaerror">MetaError</h2>

<a id="schemametaerror"></a>

```json
{
  "urn": "string"
}

```

*Additional data for customised error codes*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|urn|string|conditional|none|The CDR error code URN which the application-specific error code extends. Mandatory if the error `code` is an application-specific error rather than a standardised error code.|

<h2 class="schema-toc" id="tocSresponseerrorlistv2">ResponseErrorListV2</h2>

<a id="schemaresponseerrorlistv2"></a>

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

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[object]|mandatory|none|none|
|» code|string|mandatory|none|The code of the error encountered. Where the error is specific to the respondent, an application-specific error code, expressed as a string value. If the error is application-specific, the URN code that the specific error extends must be provided in the meta object. Otherwise, the value is the error code URN.|
|» title|string|mandatory|none|A short, human-readable summary of the problem that MUST NOT change from occurrence to occurrence of the problem represented by the error code.|
|» detail|string|mandatory|none|A human-readable explanation specific to this occurrence of the problem.|
|» meta|[MetaError](#schemametaerror)|optional|none|Additional data for customised error codes|

