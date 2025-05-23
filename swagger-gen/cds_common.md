

<!-- Endpoint tag group description -->
<!-- Data Holder Customer endpoints -->

<h2 id="cdr-common-api_get-customer">Get Customer</h2>
<p id="get-customer" class="orig-anchor"></p>

> Code samples

```http
GET https://mtls.dh.example.com/cds-au/v1/common/customer HTTP/1.1
Host: mtls.dh.example.com
Accept: application/json
x-v: string
x-min-v: string
x-fapi-interaction-id: string
x-fapi-auth-date: string
x-fapi-customer-ip-address: string
x-cds-client-headers: string
```

```javascript--nodejs
const fetch = require('node-fetch');
const headers = {
  'Accept':'application/json',
  'x-v':'string',
  'x-min-v':'string',
  'x-fapi-interaction-id':'string',
  'x-fapi-auth-date':'string',
  'x-fapi-customer-ip-address':'string',
  'x-cds-client-headers':'string'
};

fetch('https://mtls.dh.example.com/cds-au/v1/common/customer', {
  method: 'GET',
  headers: headers
}).then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

`GET /common/customer`

Obtain basic information on the customer that has authorised the current session.

<h3 id='cdr-common-api_get-customer_conventions'>Conventions</h3>
In the customer payloads there are conventions that are explained below.

#### Given Names

_firstName_ represents the first of a person's given names.

_middleNames_ represents a collection of given names if the person has more than one given name.

Where a data holder holds a person's given names as a single string in source systems, it may not possible in some situations to reliably split these given names into their component first and middle names. In these situations, data holders **MAY** use the _firstName_ field to return the single string of given names and an empty _middleNames_ array.

For example, if a person's given names are "John Paul Winston" and the Data Holder is unable to determine which is the first name, they can return `"firstName": "John Paul Winston"`.

<h3 id="cdr-common-api_get-customer_endpoint-version">Endpoint Version</h3>
|   |  |
|---|--|
|Version|**1**

<h3 id="cdr-common-api_get-customer_parameters">Parameters</h3>

|Name|In|Type|Required|Default|Description|
|---|---|---|---|---|---|
|x-v|header|string|mandatory||Version of the API endpoint requested by the client. Must be set to a positive integer. The endpoint should respond with the highest supported version between [_x-min-v_](#request-headers) and [_x-v_](#request-headers). If the value of [_x-min-v_](#request-headers) is equal to or higher than the value of [_x-v_](#request-headers) then the [_x-min-v_](#request-headers) header should be treated as absent. If all versions requested are not supported then the endpoint **MUST** respond with a `406 Not Acceptable`. See [HTTP Headers](#request-headers).|
|x-min-v|header|string|optional||Minimum version of the API endpoint requested by the client. Must be set to a positive integer if provided. The endpoint should respond with the highest supported version between [_x-min-v_](#request-headers) and [_x-v_](#request-headers). If all versions requested are not supported then the endpoint **MUST** respond with a `406 Not Acceptable`.|
|x-fapi-interaction-id|header|string|optional||An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|x-fapi-auth-date|header|string|conditional||The time when the customer last logged in to the Data Recipient Software Product as described in **[[FAPI-1.0-Baseline]](#nref-FAPI-1-0-Baseline)**. Required for all resource calls (customer present and unattended). Not required for unauthenticated calls.|
|x-fapi-customer-ip-address|header|string|optional||The customer's original IP address if the customer is currently logged in to the Data Recipient Software Product. The presence of this header indicates that the API is being called in a customer present context. Not to be included for unauthenticated calls.|
|x-cds-client-headers|header|[Base64](#common-field-types)|conditional||The customer's original standard http headers [Base64](#common-field-types) encoded, including the original User-Agent header, if the customer is currently logged in to the Data Recipient Software Product. Mandatory for customer present calls. Not required for unattended or unauthenticated calls.|

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
      "occupationCodeVersion": "ANZSCO_1220.0_2006_V1.0"
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
      "isACNCRegistered": null,
      "industryCode": "string",
      "industryCodeVersion": "ANZSIC_1292.0_2006_V1.0",
      "organisationType": "COMPANY",
      "registeredCountry": "AUS",
      "establishmentDate": "string"
    }
  },
  "links": {
    "self": "string"
  },
  "meta": {}
}
```

<h3 id="cdr-common-api_get-customer_responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[ResponseCommonCustomer](#schemacdr-common-apiresponsecommoncustomer)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The following error codes **MUST** be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Missing Required Field](#error-400-field-missing)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li></ul>|[ResponseErrorListV2](#schemacdr-common-apiresponseerrorlistv2)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|The following error codes **MUST** be supported:<br/><ul class="error-code-list"><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|[ResponseErrorListV2](#schemacdr-common-apiresponseerrorlistv2)|

<h3 id="cdr-common-api_get-customer_response-headers">Response Headers</h3>

|Status|Header|Type|Required|Description|
|---|---|---|---|---|
|200|x-v|string|mandatory|The [payload version](#response-headers) that the endpoint has responded with.|
|200|x-fapi-interaction-id|string|mandatory|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|400|x-fapi-interaction-id|string|mandatory|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|406|x-fapi-interaction-id|string|mandatory|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|

  
    
      <aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
<a href="#authorisation-scopes">common:customer.basic:read.</a>
</aside>

    
  

<h2 id="cdr-common-api_get-customer-detail">Get Customer Detail</h2>
<p id="get-customer-detail" class="orig-anchor"></p>

> Code samples

```http
GET https://mtls.dh.example.com/cds-au/v1/common/customer/detail HTTP/1.1
Host: mtls.dh.example.com
Accept: application/json
x-v: string
x-min-v: string
x-fapi-interaction-id: string
x-fapi-auth-date: string
x-fapi-customer-ip-address: string
x-cds-client-headers: string
```

```javascript--nodejs
const fetch = require('node-fetch');
const headers = {
  'Accept':'application/json',
  'x-v':'string',
  'x-min-v':'string',
  'x-fapi-interaction-id':'string',
  'x-fapi-auth-date':'string',
  'x-fapi-customer-ip-address':'string',
  'x-cds-client-headers':'string'
};

fetch('https://mtls.dh.example.com/cds-au/v1/common/customer/detail', {
  method: 'GET',
  headers: headers
}).then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

`GET /common/customer/detail`

Obtain detailed information on the authorised customer within the current session.

Obsolete versions: [v1](includes/obsolete/get-customer-detail-v1.html).

<h3 id="cdr-common-api_get-customer-detail_endpoint-version">Endpoint Version</h3>
|   |  |
|---|--|
|Version|**2**

<h3 id="cdr-common-api_get-customer-detail_parameters">Parameters</h3>

|Name|In|Type|Required|Default|Description|
|---|---|---|---|---|---|
|x-v|header|string|mandatory||Version of the API endpoint requested by the client. Must be set to a positive integer. The endpoint should respond with the highest supported version between [_x-min-v_](#request-headers) and [_x-v_](#request-headers). If the value of [_x-min-v_](#request-headers) is equal to or higher than the value of [_x-v_](#request-headers) then the [_x-min-v_](#request-headers) header should be treated as absent. If all versions requested are not supported then the endpoint **MUST** respond with a `406 Not Acceptable`. See [HTTP Headers](#request-headers).|
|x-min-v|header|string|optional||Minimum version of the API endpoint requested by the client. Must be set to a positive integer if provided. The endpoint should respond with the highest supported version between [_x-min-v_](#request-headers) and [_x-v_](#request-headers). If all versions requested are not supported then the endpoint **MUST** respond with a `406 Not Acceptable`.|
|x-fapi-interaction-id|header|string|optional||An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|x-fapi-auth-date|header|string|conditional||The time when the customer last logged in to the Data Recipient Software Product as described in **[[FAPI-1.0-Baseline]](#nref-FAPI-1-0-Baseline)**. Required for all resource calls (customer present and unattended). Not required for unauthenticated calls.|
|x-fapi-customer-ip-address|header|string|optional||The customer's original IP address if the customer is currently logged in to the Data Recipient Software Product. The presence of this header indicates that the API is being called in a customer present context. Not to be included for unauthenticated calls.|
|x-cds-client-headers|header|[Base64](#common-field-types)|conditional||The customer's original standard http headers [Base64](#common-field-types) encoded, including the original User-Agent header, if the customer is currently logged in to the Data Recipient Software Product. Mandatory for customer present calls. Not required for unattended or unauthenticated calls.|

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
      "occupationCodeVersion": "ANZSCO_1220.0_2006_V1.0",
      "phoneNumbers": [
        {
          "isPreferred": false,
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
      "isACNCRegistered": null,
      "industryCode": "string",
      "industryCodeVersion": "ANZSIC_1292.0_2006_V1.0",
      "organisationType": "COMPANY",
      "registeredCountry": "AUS",
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

<h3 id="cdr-common-api_get-customer-detail_responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[ResponseCommonCustomerDetailV2](#schemacdr-common-apiresponsecommoncustomerdetailv2)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The following error codes **MUST** be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Missing Required Field](#error-400-field-missing)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li></ul>|[ResponseErrorListV2](#schemacdr-common-apiresponseerrorlistv2)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|The following error codes **MUST** be supported:<br/><ul class="error-code-list"><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|[ResponseErrorListV2](#schemacdr-common-apiresponseerrorlistv2)|

<h3 id="cdr-common-api_get-customer-detail_response-headers">Response Headers</h3>

|Status|Header|Type|Required|Description|
|---|---|---|---|---|
|200|x-v|string|mandatory|The [payload version](#response-headers) that the endpoint has responded with.|
|200|x-fapi-interaction-id|string|mandatory|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|400|x-fapi-interaction-id|string|mandatory|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|406|x-fapi-interaction-id|string|mandatory|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|

  
    
      <aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
<a href="#authorisation-scopes">common:customer.detail:read.</a>
</aside>

    
  

<!-- Endpoint tag group description -->
<!-- Data Holder Operations endpoints -->

<h2 id="cdr-common-api_get-status">Get Status</h2>
<p id="get-status" class="orig-anchor"></p>

> Code samples

```http
GET https://tls.dh.example.com/cds-au/v1/discovery/status HTTP/1.1
Host: tls.dh.example.com
Accept: application/json
x-v: string
x-min-v: string
```

```javascript--nodejs
const fetch = require('node-fetch');
const headers = {
  'Accept':'application/json',
  'x-v':'string',
  'x-min-v':'string'
};

fetch('https://tls.dh.example.com/cds-au/v1/discovery/status', {
  method: 'GET',
  headers: headers
}).then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

`GET /discovery/status`

Obtain a health check status for the implementation.

<h3 id="cdr-common-api_get-status_endpoint-version">Endpoint Version</h3>
|   |  |
|---|--|
|Version|**1**

<h3 id="cdr-common-api_get-status_parameters">Parameters</h3>

|Name|In|Type|Required|Default|Description|
|---|---|---|---|---|---|
|x-v|header|string|mandatory||Version of the API endpoint requested by the client. Must be set to a positive integer. The endpoint should respond with the highest supported version between [_x-min-v_](#request-headers) and [_x-v_](#request-headers). If the value of [_x-min-v_](#request-headers) is equal to or higher than the value of [_x-v_](#request-headers) then the [_x-min-v_](#request-headers) header should be treated as absent. If all versions requested are not supported then the endpoint **MUST** respond with a `406 Not Acceptable`. See [HTTP Headers](#request-headers).|
|x-min-v|header|string|optional||Minimum version of the API endpoint requested by the client. Must be set to a positive integer if provided. The endpoint should respond with the highest supported version between [_x-min-v_](#request-headers) and [_x-v_](#request-headers). If all versions requested are not supported then the endpoint **MUST** respond with a `406 Not Acceptable`.|

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

<h3 id="cdr-common-api_get-status_responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[ResponseCommonDiscoveryStatus](#schemacdr-common-apiresponsecommondiscoverystatus)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The following error codes **MUST** be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Missing Required Field](#error-400-field-missing)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li></ul>|[ResponseErrorListV2](#schemacdr-common-apiresponseerrorlistv2)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|The following error codes **MUST** be supported:<br/><ul class="error-code-list"><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|[ResponseErrorListV2](#schemacdr-common-apiresponseerrorlistv2)|

<h3 id="cdr-common-api_get-status_response-headers">Response Headers</h3>

|Status|Header|Type|Required|Description|
|---|---|---|---|---|
|200|x-v|string|mandatory|The [payload version](#response-headers) that the endpoint has responded with.|

  
    <aside class="success">
This operation does not require authentication.
</aside>

  

<h2 id="cdr-common-api_get-outages">Get Outages</h2>
<p id="get-outages" class="orig-anchor"></p>

> Code samples

```http
GET https://tls.dh.example.com/cds-au/v1/discovery/outages HTTP/1.1
Host: tls.dh.example.com
Accept: application/json
x-v: string
x-min-v: string
```

```javascript--nodejs
const fetch = require('node-fetch');
const headers = {
  'Accept':'application/json',
  'x-v':'string',
  'x-min-v':'string'
};

fetch('https://tls.dh.example.com/cds-au/v1/discovery/outages', {
  method: 'GET',
  headers: headers
}).then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

`GET /discovery/outages`

Obtain a list of scheduled outages for the implementation.

<h3 id="cdr-common-api_get-outages_endpoint-version">Endpoint Version</h3>
|   |  |
|---|--|
|Version|**1**

<h3 id="cdr-common-api_get-outages_parameters">Parameters</h3>

|Name|In|Type|Required|Default|Description|
|---|---|---|---|---|---|
|x-v|header|string|mandatory||Version of the API endpoint requested by the client. Must be set to a positive integer. The endpoint should respond with the highest supported version between [_x-min-v_](#request-headers) and [_x-v_](#request-headers). If the value of [_x-min-v_](#request-headers) is equal to or higher than the value of [_x-v_](#request-headers) then the [_x-min-v_](#request-headers) header should be treated as absent. If all versions requested are not supported then the endpoint **MUST** respond with a `406 Not Acceptable`. See [HTTP Headers](#request-headers).|
|x-min-v|header|string|optional||Minimum version of the API endpoint requested by the client. Must be set to a positive integer if provided. The endpoint should respond with the highest supported version between [_x-min-v_](#request-headers) and [_x-v_](#request-headers). If all versions requested are not supported then the endpoint **MUST** respond with a `406 Not Acceptable`.|

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

<h3 id="cdr-common-api_get-outages_responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[ResponseDiscoveryOutagesList](#schemacdr-common-apiresponsediscoveryoutageslist)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The following error codes **MUST** be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Missing Required Field](#error-400-field-missing)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li></ul>|[ResponseErrorListV2](#schemacdr-common-apiresponseerrorlistv2)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|The following error codes **MUST** be supported:<br/><ul class="error-code-list"><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|[ResponseErrorListV2](#schemacdr-common-apiresponseerrorlistv2)|

<h3 id="cdr-common-api_get-outages_response-headers">Response Headers</h3>

|Status|Header|Type|Required|Description|
|---|---|---|---|---|
|200|x-v|string|mandatory|The [payload version](#response-headers) that the endpoint has responded with.|

  
    <aside class="success">
This operation does not require authentication.
</aside>

  

<h2 class="schema-heading" id="cdr-common-api-schemas">Schemas</h2>

<h3 class="schema-toc" id="cdr-common-api_schemas_tocSresponsecommondiscoverystatus">ResponseCommonDiscoveryStatus</h3>
<p id="tocSresponsecommondiscoverystatus" class="orig-anchor"></p>

<p>
  <a id="cdr-common-api_schema-base_responsecommondiscoverystatus"></a>
  <a class="schema-anchor" id="schemacdr-common-apiresponsecommondiscoverystatus"></a>
</p>

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

<h3 id="cdr-common-api_responsecommondiscoverystatus_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|data|object|mandatory||none|
|» status|[Enum](#common-field-types)|mandatory||Enumeration with values: <ul><li>`OK`: (implementation is fully functional).<li>`PARTIAL_FAILURE`: (one or more endpoints are unexpectedly unavailable).<li>`UNAVAILABLE`: (the full implementation is unexpectedly unavailable).<li>`SCHEDULED_OUTAGE`: (an advertised outage is in effect).</ul>|
|» explanation|string|conditional||Provides an explanation of the current outage that can be displayed to an end customer. Mandatory if the status property is any value other than `OK`.|
|» detectionTime|[DateTimeString](#common-field-types)|optional||The date and time that the current outage was detected. Should only be present if the status property is `PARTIAL_FAILURE` or `UNAVAILABLE`.|
|» expectedResolutionTime|[DateTimeString](#common-field-types)|optional||The date and time that full service is expected to resume (if known). Should not be present if the status property has a value of `OK`.|
|» updateTime|[DateTimeString](#common-field-types)|mandatory||The date and time that this status was last updated by the Data Holder.|
|links|[Links](#schemacdr-common-apilinks)|mandatory||none|
|meta|[Meta](#schemacdr-common-apimeta)|optional||none|

<h4 id="cdr-common-api_responsecommondiscoverystatus_enumerated-values-main">Enumerated Values</h4>

|Property|Value|
|---|---|
|status|OK|
|status|PARTIAL_FAILURE|
|status|SCHEDULED_OUTAGE|
|status|UNAVAILABLE|

<h3 class="schema-toc" id="cdr-common-api_schemas_tocSresponsediscoveryoutageslist">ResponseDiscoveryOutagesList</h3>
<p id="tocSresponsediscoveryoutageslist" class="orig-anchor"></p>

<p>
  <a id="cdr-common-api_schema-base_responsediscoveryoutageslist"></a>
  <a class="schema-anchor" id="schemacdr-common-apiresponsediscoveryoutageslist"></a>
</p>

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

<h3 id="cdr-common-api_responsediscoveryoutageslist_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|data|object|mandatory||none|
|» outages|[[DiscoveryOutage](#schemacdr-common-apidiscoveryoutage)]|mandatory||List of scheduled outages. Property is mandatory but may contain an empty list if no outages are scheduled.|
|links|[Links](#schemacdr-common-apilinks)|mandatory||none|
|meta|[Meta](#schemacdr-common-apimeta)|optional||none|

<h3 class="schema-toc" id="cdr-common-api_schemas_tocSdiscoveryoutage">DiscoveryOutage</h3>
<p id="tocSdiscoveryoutage" class="orig-anchor"></p>

<p>
  <a id="cdr-common-api_schema-base_discoveryoutage"></a>
  <a class="schema-anchor" id="schemacdr-common-apidiscoveryoutage"></a>
</p>

```json
{
  "outageTime": "string",
  "duration": "string",
  "isPartial": true,
  "explanation": "string"
}
```

<h3 id="cdr-common-api_discoveryoutage_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|outageTime|[DateTimeString](#common-field-types)|mandatory||Date and time that the outage is scheduled to begin.|
|duration|[ExternalRef](#common-field-types)|mandatory||Planned duration of the outage. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax).|
|isPartial|[Boolean](#common-field-types)|optional||Flag that indicates, if present and set to `true`, that the outage is only partial meaning that only a subset of normally available endpoints will be affected by the outage.|
|explanation|string|mandatory||Provides an explanation of the current outage that can be displayed to an end customer.|

<h3 class="schema-toc" id="cdr-common-api_schemas_tocSresponsecommoncustomer">ResponseCommonCustomer</h3>
<p id="tocSresponsecommoncustomer" class="orig-anchor"></p>

<p>
  <a id="cdr-common-api_schema-base_responsecommoncustomer"></a>
  <a class="schema-anchor" id="schemacdr-common-apiresponsecommoncustomer"></a>
</p>

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
      "occupationCodeVersion": "ANZSCO_1220.0_2006_V1.0"
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
      "isACNCRegistered": null,
      "industryCode": "string",
      "industryCodeVersion": "ANZSIC_1292.0_2006_V1.0",
      "organisationType": "COMPANY",
      "registeredCountry": "AUS",
      "establishmentDate": "string"
    }
  },
  "links": {
    "self": "string"
  },
  "meta": {}
}
```

<h3 id="cdr-common-api_responsecommoncustomer_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|data|object|mandatory||none|
|» customerUType|[Enum](#common-field-types)|mandatory||The type of customer object that is present.|
|» person|[CommonPerson](#schemacdr-common-apicommonperson)|conditional||none|
|» organisation|[CommonOrganisation](#schemacdr-common-apicommonorganisation)|conditional||none|
|links|[Links](#schemacdr-common-apilinks)|mandatory||none|
|meta|[Meta](#schemacdr-common-apimeta)|optional||none|

<h4 id="cdr-common-api_responsecommoncustomer_enumerated-values-main">Enumerated Values</h4>

|Property|Value|
|---|---|
|customerUType|organisation|
|customerUType|person|

<h3 class="schema-toc" id="cdr-common-api_schemas_tocSresponsecommoncustomerdetailv2">ResponseCommonCustomerDetailV2</h3>
<p id="tocSresponsecommoncustomerdetailv2" class="orig-anchor"></p>

<p>
  <a id="cdr-common-api_schema-base_responsecommoncustomerdetail"></a>
  <a class="schema-anchor" id="schemacdr-common-apiresponsecommoncustomerdetailv2"></a>
</p>

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
      "occupationCodeVersion": "ANZSCO_1220.0_2006_V1.0",
      "phoneNumbers": [
        {
          "isPreferred": false,
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
      "isACNCRegistered": null,
      "industryCode": "string",
      "industryCodeVersion": "ANZSIC_1292.0_2006_V1.0",
      "organisationType": "COMPANY",
      "registeredCountry": "AUS",
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

<h3 id="cdr-common-api_responsecommoncustomerdetailv2_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|data|object|mandatory||none|
|» customerUType|[Enum](#common-field-types)|mandatory||The type of customer object that is present.|
|» person|[CommonPersonDetailV2](#schemacdr-common-apicommonpersondetailv2)|conditional||none|
|» organisation|[CommonOrganisationDetailV2](#schemacdr-common-apicommonorganisationdetailv2)|conditional||none|
|links|[Links](#schemacdr-common-apilinks)|mandatory||none|
|meta|[Meta](#schemacdr-common-apimeta)|optional||none|

<h4 id="cdr-common-api_responsecommoncustomerdetailv2_enumerated-values-main">Enumerated Values</h4>

|Property|Value|
|---|---|
|customerUType|organisation|
|customerUType|person|

<h3 class="schema-toc" id="cdr-common-api_schemas_tocScommonperson">CommonPerson</h3>
<p id="tocScommonperson" class="orig-anchor"></p>

<p>
  <a id="cdr-common-api_schema-base_commonperson"></a>
  <a class="schema-anchor" id="schemacdr-common-apicommonperson"></a>
</p>

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
  "occupationCodeVersion": "ANZSCO_1220.0_2006_V1.0"
}
```

<h3 id="cdr-common-api_commonperson_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|lastUpdateTime|[DateTimeString](#common-field-types)|optional||The date and time that this record was last updated by the customer. If no update has occurred then this date should reflect the initial creation date for the data.|
|firstName|string|optional||For people with single names this field need not be present. The single name should be in the _lastName_ field. Where a data holder cannot determine first and middle names from a collection of given names, a single string representing all given names **MAY** be provided.|
|lastName|string|mandatory||For people with single names, the single name should be in this field.|
|middleNames|[string]|mandatory||Field is mandatory but array may be empty.|
|prefix|string|optional||Also known as title or salutation. The prefix to the name (e.g., Mr, Mrs, Ms, Miss, Sir, etc.)|
|suffix|string|optional||Used for a trailing suffix to the name (e.g., Jr.)|
|occupationCode|[ExternalRef](#common-field-types)|optional||Value is a valid **[[ANZSCO]](#iref-ANZSCO)** Standard Occupation classification code. If the occupation code held by the data holder is not one of the supported **[[ANZSCO]](#iref-ANZSCO)** versions, then it must not be supplied.|
|occupationCodeVersion|[Enum](#common-field-types)|conditional|`ANZSCO_1220.0_2013_V1.2`|The applicable **[[ANZSCO]](#iref-ANZSCO)** release version of the occupation code provided. Mandatory if an _occupationCode_ is supplied. If _occupationCode_ is supplied but _occupationCodeVersion_ is absent, default is `ANZSCO_1220.0_2013_V1.2`.|

<h4 id="cdr-common-api_commonperson_enumerated-values-main">Enumerated Values</h4>

|Property|Value|
|---|---|
|occupationCodeVersion|ANZSCO_1220.0_2006_V1.0|
|occupationCodeVersion|ANZSCO_1220.0_2006_V1.1|
|occupationCodeVersion|ANZSCO_1220.0_2013_V1.2|
|occupationCodeVersion|ANZSCO_1220.0_2013_V1.3|

<h3 class="schema-toc" id="cdr-common-api_schemas_tocScommonpersondetailv2">CommonPersonDetailV2</h3>
<p id="tocScommonpersondetailv2" class="orig-anchor"></p>

<p>
  <a id="cdr-common-api_schema-base_commonpersondetail"></a>
  <a class="schema-anchor" id="schemacdr-common-apicommonpersondetailv2"></a>
</p>

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
  "occupationCodeVersion": "ANZSCO_1220.0_2006_V1.0",
  "phoneNumbers": [
    {
      "isPreferred": false,
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

<h3 id="cdr-common-api_commonpersondetailv2_properties">Properties</h3>

*allOf*

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|*anonymous*|[CommonPerson](#schemacdr-common-apicommonperson)|mandatory||none|

*and*

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|*anonymous*|object|mandatory||none|
|» phoneNumbers|[[CommonPhoneNumber](#schemacdr-common-apicommonphonenumber)]|mandatory||Array is mandatory but may be empty if no phone numbers are held.|
|» emailAddresses|[[CommonEmailAddress](#schemacdr-common-apicommonemailaddress)]|mandatory||May be empty.|
|» physicalAddresses|[[CommonPhysicalAddressWithPurpose](#schemacdr-common-apicommonphysicaladdresswithpurpose)]|mandatory||Array is mandatory but may be empty if no valid addresses are held. One and only one address may have the purpose of `REGISTERED`. Zero or one, and no more than one, record may have the purpose of `MAIL`. If zero then the `REGISTERED` address is to be used for mail.|

<h3 class="schema-toc" id="cdr-common-api_schemas_tocScommonorganisation">CommonOrganisation</h3>
<p id="tocScommonorganisation" class="orig-anchor"></p>

<p>
  <a id="cdr-common-api_schema-base_commonorganisation"></a>
  <a class="schema-anchor" id="schemacdr-common-apicommonorganisation"></a>
</p>

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
  "isACNCRegistered": null,
  "industryCode": "string",
  "industryCodeVersion": "ANZSIC_1292.0_2006_V1.0",
  "organisationType": "COMPANY",
  "registeredCountry": "AUS",
  "establishmentDate": "string"
}
```

<h3 id="cdr-common-api_commonorganisation_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|lastUpdateTime|[DateTimeString](#common-field-types)|optional||The date and time that this record was last updated by the customer. If no update has occurred then this date should reflect the initial creation date for the data.|
|agentFirstName|string|optional||The first name of the individual providing access on behalf of the organisation. For people with single names this field need not be present. The single name should be in the _lastName_ field.|
|agentLastName|string|mandatory||The last name of the individual providing access on behalf of the organisation. For people with single names, the single name should be in this field.|
|agentRole|string|mandatory||The role of the individual identified as the agent who is providing authorisation. Expected to be used for display. Default to "Unspecified" if the role is not known.|
|businessName|string|mandatory||Name of the organisation.|
|legalName|string|optional||Legal name, if different to the business name.|
|shortName|string|optional||Short name used for communication, if different to the business name.|
|abn|string|optional||Australian Business Number for the organisation.|
|acn|string|optional||Australian Company Number for the organisation. Required only if an ACN is applicable for the organisation type.|
|isACNCRegistered|[Boolean](#common-field-types)|optional|`null`|`true` if registered with the ACNC. `false` if not. Absent or `null` if not confirmed.|
|industryCode|[ExternalRef](#common-field-types)|optional||A valid [ANZSIC](http://www.abs.gov.au/ANZSIC) code for the organisation. If the industry code held by the data holder is not one of the supported [ANZSIC](http://www.abs.gov.au/ANZSIC) versions, then it must not be supplied.|
|industryCodeVersion|[Enum](#common-field-types)|conditional|`ANZSIC_1292.0_2006_V2.0`|The applicable [ANZSIC](http://www.abs.gov.au/ANZSIC) release version of the industry code provided. Should only be supplied if _industryCode_ is also supplied. If _industryCode_ is supplied but _industryCodeVersion_ is absent, default is `ANZSIC_1292.0_2006_V2.0`.|
|organisationType|[Enum](#common-field-types)|mandatory||Legal organisation type.|
|registeredCountry|[ExternalRef](#common-field-types)|optional|`AUS`|Enumeration with values from [ISO 3166 Alpha-3](https://www.iso.org/iso-3166-country-codes.html) country codes. Assumed to be `AUS` if absent.|
|establishmentDate|[DateString](#common-field-types)|optional||The date the organisation described was established.|

<h4 id="cdr-common-api_commonorganisation_enumerated-values-main">Enumerated Values</h4>

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

<h3 class="schema-toc" id="cdr-common-api_schemas_tocScommonorganisationdetailv2">CommonOrganisationDetailV2</h3>
<p id="tocScommonorganisationdetailv2" class="orig-anchor"></p>

<p>
  <a id="cdr-common-api_schema-base_commonorganisationdetail"></a>
  <a class="schema-anchor" id="schemacdr-common-apicommonorganisationdetailv2"></a>
</p>

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
  "isACNCRegistered": null,
  "industryCode": "string",
  "industryCodeVersion": "ANZSIC_1292.0_2006_V1.0",
  "organisationType": "COMPANY",
  "registeredCountry": "AUS",
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

<h3 id="cdr-common-api_commonorganisationdetailv2_properties">Properties</h3>

*allOf*

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|*anonymous*|[CommonOrganisation](#schemacdr-common-apicommonorganisation)|mandatory||none|

*and*

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|*anonymous*|object|mandatory||none|
|» physicalAddresses|[[CommonPhysicalAddressWithPurpose](#schemacdr-common-apicommonphysicaladdresswithpurpose)]|mandatory||Array is mandatory but may be empty if no valid addresses are held. One and only one address may have the purpose of `REGISTERED`. Zero or one, and no more than one, record may have the purpose of `MAIL`. If zero then the `REGISTERED` address is to be used for mail.|

<h3 class="schema-toc" id="cdr-common-api_schemas_tocScommonphonenumber">CommonPhoneNumber</h3>
<p id="tocScommonphonenumber" class="orig-anchor"></p>

<p>
  <a id="cdr-common-api_schema-base_commonphonenumber"></a>
  <a class="schema-anchor" id="schemacdr-common-apicommonphonenumber"></a>
</p>

```json
{
  "isPreferred": false,
  "purpose": "HOME",
  "countryCode": "string",
  "areaCode": "string",
  "number": "string",
  "extension": "string",
  "fullNumber": "string"
}
```

<h3 id="cdr-common-api_commonphonenumber_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|isPreferred|[Boolean](#common-field-types)|optional|`false`|May be `true` for one and only one entry to indicate the preferred phone number. Assumed to be `false` if not present.|
|purpose|[Enum](#common-field-types)|mandatory||The purpose of the number as specified by the customer.|
|countryCode|string|optional||If absent, assumed to be Australia (`+61`). The `+` should be included.|
|areaCode|string|conditional||Required for non Mobile Phones, if field is present and refers to Australian code - the leading `0` should be omitted.|
|number|string|mandatory||The actual phone number, with leading zeros as appropriate.|
|extension|string|optional||An extension number (if applicable).|
|fullNumber|[ExternalRef](#common-field-types)|mandatory||Fully formatted phone number with country code, area code, number and extension incorporated. Formatted according to section 5.1.4. of **[[RFC3966]](#iref-RFC3966)**.|

<h4 id="cdr-common-api_commonphonenumber_enumerated-values-main">Enumerated Values</h4>

|Property|Value|
|---|---|
|purpose|HOME|
|purpose|INTERNATIONAL|
|purpose|MOBILE|
|purpose|OTHER|
|purpose|UNSPECIFIED|
|purpose|WORK|

<h3 class="schema-toc" id="cdr-common-api_schemas_tocScommonemailaddress">CommonEmailAddress</h3>
<p id="tocScommonemailaddress" class="orig-anchor"></p>

<p>
  <a id="cdr-common-api_schema-base_commonemailaddress"></a>
  <a class="schema-anchor" id="schemacdr-common-apicommonemailaddress"></a>
</p>

```json
{
  "isPreferred": true,
  "purpose": "HOME",
  "address": "string"
}
```

<h3 id="cdr-common-api_commonemailaddress_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|isPreferred|[Boolean](#common-field-types)|optional||May be `true` for one and only one email record in the collection. Denotes the default email address.|
|purpose|[Enum](#common-field-types)|mandatory||The purpose for the email, as specified by the customer.|
|address|[ExternalRef](#common-field-types)|mandatory||A correctly formatted email address, as defined by the addr-spec format in **[[RFC5322]](#nref-RFC5322)**.|

<h4 id="cdr-common-api_commonemailaddress_enumerated-values-main">Enumerated Values</h4>

|Property|Value|
|---|---|
|purpose|HOME|
|purpose|OTHER|
|purpose|UNSPECIFIED|
|purpose|WORK|

<h3 class="schema-toc" id="cdr-common-api_schemas_tocScommonphysicaladdresswithpurpose">CommonPhysicalAddressWithPurpose</h3>
<p id="tocScommonphysicaladdresswithpurpose" class="orig-anchor"></p>

<p>
  <a id="cdr-common-api_schema-base_commonphysicaladdresswithpurpose"></a>
  <a class="schema-anchor" id="schemacdr-common-apicommonphysicaladdresswithpurpose"></a>
</p>

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

<h3 id="cdr-common-api_commonphysicaladdresswithpurpose_properties">Properties</h3>

*allOf*

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|*anonymous*|[CommonPhysicalAddress](#schemacdr-common-apicommonphysicaladdress)|mandatory||none|

*and*

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|*anonymous*|object|mandatory||none|
|» purpose|[Enum](#common-field-types)|mandatory||Enumeration of values indicating the purpose of the physical address.|

<h4 id="cdr-common-api_commonphysicaladdresswithpurpose_enumerated-values-main">Enumerated Values</h4>

|Property|Value|
|---|---|
|purpose|MAIL|
|purpose|OTHER|
|purpose|PHYSICAL|
|purpose|REGISTERED|
|purpose|WORK|

<h3 class="schema-toc" id="cdr-common-api_schemas_tocScommonphysicaladdress">CommonPhysicalAddress</h3>
<p id="tocScommonphysicaladdress" class="orig-anchor"></p>

<p>
  <a id="cdr-common-api_schema-base_commonphysicaladdress"></a>
  <a class="schema-anchor" id="schemacdr-common-apicommonphysicaladdress"></a>
</p>

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

<h3 id="cdr-common-api_commonphysicaladdress_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|addressUType|[Enum](#common-field-types)|mandatory||The type of address object present.|
|simple|[CommonSimpleAddress](#schemacdr-common-apicommonsimpleaddress)|conditional||Required if _addressUType_ is set to `simple`.|
|paf|[CommonPAFAddress](#schemacdr-common-apicommonpafaddress)|conditional||Australian address formatted according to the file format defined by the [PAF file format](https://auspost.com.au/content/dam/auspost_corp/media/documents/australia-post-data-guide.pdf). Required if _addressUType_ is set to `paf`.|

<h4 id="cdr-common-api_commonphysicaladdress_enumerated-values-main">Enumerated Values</h4>

|Property|Value|
|---|---|
|addressUType|paf|
|addressUType|simple|

<h3 class="schema-toc" id="cdr-common-api_schemas_tocScommonsimpleaddress">CommonSimpleAddress</h3>
<p id="tocScommonsimpleaddress" class="orig-anchor"></p>

<p>
  <a id="cdr-common-api_schema-base_commonsimpleaddress"></a>
  <a class="schema-anchor" id="schemacdr-common-apicommonsimpleaddress"></a>
</p>

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

*Required if _addressUType_ is set to `simple`.*

<h3 id="cdr-common-api_commonsimpleaddress_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|mailingName|string|optional||Name of the individual or business formatted for inclusion in an address used for physical mail.|
|addressLine1|string|mandatory||First line of the standard address object.|
|addressLine2|string|optional||Second line of the standard address object.|
|addressLine3|string|optional||Third line of the standard address object.|
|postcode|string|conditional||Mandatory for Australian addresses.|
|city|string|mandatory||Name of the city or locality.|
|state|string|mandatory||Free text if the country is not Australia. If country is Australia then must be one of the values defined by the [State Type Abbreviation](https://auspost.com.au/content/dam/auspost_corp/media/documents/australia-post-data-guide.pdf) in the PAF file format. `NSW`, `QLD`, `VIC`, `NT`, `WA`, `SA`, `TAS`, `ACT`, `AAT`.|
|country|[ExternalRef](#common-field-types)|optional|`AUS`|A valid [ISO 3166 Alpha-3](https://www.iso.org/iso-3166-country-codes.html) country code. Australia (`AUS`) is assumed if country is not present.|

<h3 class="schema-toc" id="cdr-common-api_schemas_tocScommonpafaddress">CommonPAFAddress</h3>
<p id="tocScommonpafaddress" class="orig-anchor"></p>

<p>
  <a id="cdr-common-api_schema-base_commonpafaddress"></a>
  <a class="schema-anchor" id="schemacdr-common-apicommonpafaddress"></a>
</p>

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

*Australian address formatted according to the file format defined by the [PAF file format](https://auspost.com.au/content/dam/auspost_corp/media/documents/australia-post-data-guide.pdf). Required if _addressUType_ is set to `paf`.*

<h3 id="cdr-common-api_commonpafaddress_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|dpid|string|optional||Unique identifier for an address as defined by Australia Post. Also known as Delivery Point Identifier.|
|thoroughfareNumber1|[PositiveInteger](#common-field-types)|optional||Thoroughfare number for a property (first number in a property ranged address).|
|thoroughfareNumber1Suffix|string|optional||Suffix for the thoroughfare number. Only relevant if _thoroughfareNumber1_ is populated.|
|thoroughfareNumber2|[PositiveInteger](#common-field-types)|optional||Second thoroughfare number (only used if the property has a ranged address e.g., 23-25).|
|thoroughfareNumber2Suffix|string|optional||Suffix for the second thoroughfare number. Only relevant if _thoroughfareNumber2_ is populated.|
|flatUnitType|string|optional||Type of flat or unit for the address.|
|flatUnitNumber|string|optional||Unit number (including suffix, if applicable).|
|floorLevelType|string|optional||Type of floor or level for the address.|
|floorLevelNumber|string|optional||Floor or level number (including alpha characters).|
|lotNumber|string|optional||Allotment number for the address.|
|buildingName1|string|optional||Building/Property name 1.|
|buildingName2|string|optional||Building/Property name 2.|
|streetName|string|optional||The name of the street.|
|streetType|string|optional||The street type. Valid enumeration defined by Australia Post PAF code file.|
|streetSuffix|string|optional||The street type suffix. Valid enumeration defined by Australia Post PAF code file.|
|postalDeliveryType|string|optional||Postal delivery type. (e.g., PO BOX). Valid enumeration defined by Australia Post PAF code file.|
|postalDeliveryNumber|[PositiveInteger](#common-field-types)|optional||Postal delivery number if the address is a postal delivery type.|
|postalDeliveryNumberPrefix|string|optional||Postal delivery number prefix related to the postal delivery number.|
|postalDeliveryNumberSuffix|string|optional||Postal delivery number suffix related to the postal delivery number.|
|localityName|string|mandatory||Full name of locality.|
|postcode|string|mandatory||Postcode for the locality.|
|state|string|mandatory||State in which the address belongs. Valid enumeration defined by Australia Post PAF code file [State Type Abbreviation](https://auspost.com.au/content/dam/auspost_corp/media/documents/australia-post-data-guide.pdf). `NSW`, `QLD`, `VIC`, `NT`, `WA`, `SA`, `TAS`, `ACT`, `AAT`.|

<h3 class="schema-toc" id="cdr-common-api_schemas_tocSlinks">Links</h3>
<p id="tocSlinks" class="orig-anchor"></p>

<p>
  <a id="cdr-common-api_schema-base_links"></a>
  <a class="schema-anchor" id="schemacdr-common-apilinks"></a>
</p>

```json
{
  "self": "string"
}
```

<h3 id="cdr-common-api_links_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|self|[URIString](#common-field-types)|mandatory||Fully qualified link that generated the current response document.|

<h3 class="schema-toc" id="cdr-common-api_schemas_tocSmeta">Meta</h3>
<p id="tocSmeta" class="orig-anchor"></p>

<p>
  <a id="cdr-common-api_schema-base_meta"></a>
  <a class="schema-anchor" id="schemacdr-common-apimeta"></a>
</p>

```json
{}
```

<h3 id="cdr-common-api_meta_properties">Properties</h3>

*None*

<h3 class="schema-toc" id="cdr-common-api_schemas_tocSresponseerrorlistv2">ResponseErrorListV2</h3>
<p id="tocSresponseerrorlistv2" class="orig-anchor"></p>

<p>
  <a id="cdr-common-api_schema-base_responseerrorlist"></a>
  <a class="schema-anchor" id="schemacdr-common-apiresponseerrorlistv2"></a>
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

<h3 id="cdr-common-api_responseerrorlistv2_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|errors|[[ErrorV2](#schemacdr-common-apierrorv2)]|mandatory||List of errors.|

<h3 class="schema-toc" id="cdr-common-api_schemas_tocSerrorv2">ErrorV2</h3>
<p id="tocSerrorv2" class="orig-anchor"></p>

<p>
  <a id="cdr-common-api_schema-base_error"></a>
  <a class="schema-anchor" id="schemacdr-common-apierrorv2"></a>
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

<h3 id="cdr-common-api_errorv2_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|code|string|mandatory||The code of the error encountered. Where the error is specific to the respondent, an application-specific error code, expressed as a string value. If the error is application-specific, the URN code that the specific error extends must be provided in the _meta_ object. Otherwise, the value is the error code URN.|
|title|string|mandatory||A short, human-readable summary of the problem that **MUST NOT** change from occurrence to occurrence of the problem represented by the error code.|
|detail|string|mandatory||A human-readable explanation specific to this occurrence of the problem.|
|meta|object|conditional||Additional data for customised error codes.|
|» urn|string|conditional||The CDR error code URN which the application-specific error code extends. Mandatory if the error _code_ is an application-specific error rather than a standardised error code.|

