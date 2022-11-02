

## Get Service Points (SR)

<a id="opIdlistServicePoints"></a>

> Code samples

```http
POST /secondary/energy/electricity/servicepoints HTTP/1.1

Content-Type: application/json
Accept: application/json
x-v: string
x-min-v: string
x-fapi-interaction-id: string
x-cds-arrangement: string

```

```javascript
var headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'x-v':'string',
  'x-min-v':'string',
  'x-fapi-interaction-id':'string',
  'x-cds-arrangement':'string'

};

$.ajax({
  url: '/secondary/energy/electricity/servicepoints',
  method: 'post',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`POST /secondary/energy/electricity/servicepoints`

Obtain a list of service points owned by the customer that has authorised the current session

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

###Endpoint Version
|   |  |
|---|--|
|Version|**1**

<h3 id="get-service-points-(sr)-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|[PositiveInteger](#common-field-types)|optional|Page of results to request (standard pagination)|
|page-size|query|[PositiveInteger](#common-field-types)|optional|Page size to request.  Default is 25 (standard pagination)|
|x-v|header|string|mandatory|Version of the API end point requested by the client. Must be set to a positive integer. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If the value of [x-min-v](#request-headers) is equal to or higher than the value of [x-v](#request-headers) then the [x-min-v](#request-headers) header should be treated as absent. If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable. See [HTTP Headers](#request-headers)|
|x-min-v|header|string|optional|Minimum version of the API end point requested by the client. Must be set to a positive integer if provided. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable.|
|x-fapi-interaction-id|header|string|mandatory|The x-fapi-interaction-id header value provided by the Data Recipient. If not supplied by the Data Recipient, the primary Data Holder MUST create a unique **[[RFC4122]](#nref-RFC4122)** UUID value for the x-fapi-interaction-id header.|
|x-cds-arrangement|header|string|mandatory|A unique string representing a consent arrangement between a Data Recipient Software Product and Data Holder for a given consumer. The identifier MUST be unique per customer according to the definition of customer in the CDR Federation section of this profile. The x-cds-arrangement should contain the arrangement ID for the consent that the request is being made under and will be used for tracing and audit purposes. This field MUST be populated but AEMO MUST NOT seek to validate the consent associated with the arrangement|
|body|body|[servicePointIdList](#schemacdr-energy-secondary-data-holder-apiservicepointidlist)|mandatory|Request payload containing list of specific Service Points to obtain data for|
|» data|body|object|mandatory|none|
|»» servicePointIds|body|[string]|mandatory|Array of specific NMIs to obtain data for|
|» meta|body|[Meta](#schemacdr-energy-secondary-data-holder-apimeta)|mandatory|none|

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
        "isGenerator": true,
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

<h3 id="get-service-points-(sr)-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[EnergyServicePointListResponse](#schemacdr-energy-secondary-data-holder-apienergyservicepointlistresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Invalid Page Size](#error-400-field-invalid-page-size)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li></ul>|[ErrorListResponse](#schemacdr-energy-secondary-data-holder-apierrorlistresponse)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|[ErrorListResponse](#schemacdr-energy-secondary-data-holder-apierrorlistresponse)|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[422 - Invalid Page](#error-422-field-invalid-page)</li></ul>|[ErrorListResponse](#schemacdr-energy-secondary-data-holder-apierrorlistresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-v|string||none|
|200|x-fapi-interaction-id|string||none|
|400|x-fapi-interaction-id|string||none|
|406|x-fapi-interaction-id|string||none|
|422|x-fapi-interaction-id|string||none|

  
    <aside class="success">
This operation does not require authentication
</aside>

  

## Get Service Point Detail (SR)

<a id="opIdgetServicePoint"></a>

> Code samples

```http
GET /secondary/energy/electricity/servicepoints/{servicePointId} HTTP/1.1

Accept: application/json
x-v: string
x-min-v: string
x-fapi-interaction-id: string
x-cds-arrangement: string

```

```javascript
var headers = {
  'Accept':'application/json',
  'x-v':'string',
  'x-min-v':'string',
  'x-fapi-interaction-id':'string',
  'x-cds-arrangement':'string'

};

$.ajax({
  url: '/secondary/energy/electricity/servicepoints/{servicePointId}',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`GET /secondary/energy/electricity/servicepoints/{servicePointId}`

Obtain detailed standing information for a specific service point that is owned by the customer that has authorised the current session

###Endpoint Version
|   |  |
|---|--|
|Version|**1**

<h3 id="get-service-point-detail-(sr)-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|servicePointId|path|string|mandatory|The independent ID of the service point, known in the industry as the NMI. The  servicePointId will be replaced with NMI for all interactions between Data Holder and AEMO.|
|x-v|header|string|mandatory|Version of the API end point requested by the client. Must be set to a positive integer. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If the value of [x-min-v](#request-headers) is equal to or higher than the value of [x-v](#request-headers) then the [x-min-v](#request-headers) header should be treated as absent. If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable. See [HTTP Headers](#request-headers)|
|x-min-v|header|string|optional|Minimum version of the API end point requested by the client. Must be set to a positive integer if provided. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable.|
|x-fapi-interaction-id|header|string|mandatory|The x-fapi-interaction-id header value provided by the Data Recipient. If not supplied by the Data Recipient, the primary Data Holder MUST create a unique **[[RFC4122]](#nref-RFC4122)** UUID value for the x-fapi-interaction-id header.|
|x-cds-arrangement|header|string|mandatory|A unique string representing a consent arrangement between a Data Recipient Software Product and Data Holder for a given consumer. The identifier MUST be unique per customer according to the definition of customer in the CDR Federation section of this profile. The x-cds-arrangement should contain the arrangement ID for the consent that the request is being made under and will be used for tracing and audit purposes. This field MUST be populated but AEMO MUST NOT seek to validate the consent associated with the arrangement|

> Example responses

> 200 Response

```json
{
  "data": {
    "servicePointId": "string",
    "nationalMeteringId": "string",
    "servicePointClassification": "EXTERNAL_PROFILE",
    "servicePointStatus": "ACTIVE",
    "jurisdictionCode": "ALL",
    "isGenerator": true,
    "validFromDate": "string",
    "lastUpdateDateTime": "string",
    "consumerProfile": {
      "classification": "BUSINESS",
      "threshold": "LOW"
    },
    "distributionLossFactor": {
      "code": "string",
      "description": "string",
      "lossValue": "string"
    },
    "relatedParticipants": [
      {
        "party": "string",
        "role": "FRMP"
      }
    ],
    "location": {
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
    },
    "meters": [
      {
        "meterId": "string",
        "specifications": {
          "status": "CURRENT",
          "installationType": "BASIC",
          "manufacturer": "string",
          "model": "string",
          "readType": "string",
          "nextScheduledReadDate": "string"
        },
        "registers": [
          {
            "registerId": "string",
            "registerSuffix": "string",
            "averagedDailyLoad": 0,
            "registerConsumptionType": "INTERVAL",
            "networkTariffCode": "string",
            "unitOfMeasure": "string",
            "timeOfDay": "ALLDAY",
            "multiplier": 0,
            "controlledLoad": true,
            "consumptionType": "ACTUAL"
          }
        ]
      }
    ]
  },
  "links": {
    "self": "string"
  },
  "meta": {}
}
```

<h3 id="get-service-point-detail-(sr)-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[EnergyServicePointDetailResponse](#schemacdr-energy-secondary-data-holder-apienergyservicepointdetailresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li></ul>|[ErrorListResponse](#schemacdr-energy-secondary-data-holder-apierrorlistresponse)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[404 - Unavailable Service Point](#error-404-unavailable-service-point)</li><li>[404 - Invalid Service Point](#error-404-invalid-service-point)</li></ul>|[ErrorListResponse](#schemacdr-energy-secondary-data-holder-apierrorlistresponse)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|[ErrorListResponse](#schemacdr-energy-secondary-data-holder-apierrorlistresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-v|string||none|
|200|x-fapi-interaction-id|string||none|
|400|x-fapi-interaction-id|string||none|
|404|x-fapi-interaction-id|string||none|
|406|x-fapi-interaction-id|string||none|

  
    <aside class="success">
This operation does not require authentication
</aside>

  

## Get Usage For Service Point (SR)

<a id="opIdgetUsageForServicePoint"></a>

> Code samples

```http
GET /secondary/energy/electricity/servicepoints/{servicePointId}/usage HTTP/1.1

Accept: application/json
x-v: string
x-min-v: string
x-fapi-interaction-id: string
x-cds-arrangement: string

```

```javascript
var headers = {
  'Accept':'application/json',
  'x-v':'string',
  'x-min-v':'string',
  'x-fapi-interaction-id':'string',
  'x-cds-arrangement':'string'

};

$.ajax({
  url: '/secondary/energy/electricity/servicepoints/{servicePointId}/usage',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`GET /secondary/energy/electricity/servicepoints/{servicePointId}/usage`

Obtain a list of electricity usage data from a particular service point

###Endpoint Version
|   |  |
|---|--|
|Version|**1**

<h3 id="get-usage-for-service-point-(sr)-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|servicePointId|path|string|mandatory|The independent ID of the service point, known in the industry as the NMI. The  servicePointId will be replaced with NMI for all interactions between Data Holder and AEMO.|
|oldest-date|query|[DateString](#common-field-types)|optional|Constrain the request to records with effective date at or after this date. If absent defaults to newest-date minus 24 months.  Format is aligned to DateString common type|
|newest-date|query|[DateString](#common-field-types)|optional|Constrain the request to records with effective date at or before this date.  If absent defaults to current date.  Format is aligned to DateString common type|
|interval-reads|query|string|optional|Type of interval reads. Any one of the valid values for this field can be supplied. If absent defaults to NONE|
|page|query|[PositiveInteger](#common-field-types)|optional|Page of results to request (standard pagination)|
|page-size|query|[PositiveInteger](#common-field-types)|optional|Page size to request.  Default is 25 (standard pagination)|
|x-v|header|string|mandatory|Version of the API end point requested by the client. Must be set to a positive integer. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If the value of [x-min-v](#request-headers) is equal to or higher than the value of [x-v](#request-headers) then the [x-min-v](#request-headers) header should be treated as absent. If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable. See [HTTP Headers](#request-headers)|
|x-min-v|header|string|optional|Minimum version of the API end point requested by the client. Must be set to a positive integer if provided. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable.|
|x-fapi-interaction-id|header|string|mandatory|The x-fapi-interaction-id header value provided by the Data Recipient. If not supplied by the Data Recipient, the primary Data Holder MUST create a unique **[[RFC4122]](#nref-RFC4122)** UUID value for the x-fapi-interaction-id header.|
|x-cds-arrangement|header|string|mandatory|A unique string representing a consent arrangement between a Data Recipient Software Product and Data Holder for a given consumer. The identifier MUST be unique per customer according to the definition of customer in the CDR Federation section of this profile. The x-cds-arrangement should contain the arrangement ID for the consent that the request is being made under and will be used for tracing and audit purposes. This field MUST be populated but AEMO MUST NOT seek to validate the consent associated with the arrangement|

#### Enumerated Values

|Parameter|Value|
|---|---|
|interval-reads|NONE|
|interval-reads|MIN_30|
|interval-reads|FULL|

> Example responses

> 200 Response

```json
{
  "data": {
    "reads": [
      {
        "servicePointId": "string",
        "registerId": "string",
        "registerSuffix": "string",
        "meterId": "string",
        "controlledLoad": true,
        "readStartDate": "string",
        "readEndDate": "string",
        "unitOfMeasure": "string",
        "readUType": "basicRead",
        "basicRead": {
          "quality": "ACTUAL",
          "value": 0
        },
        "intervalRead": {
          "readIntervalLength": 0,
          "aggregateValue": 0,
          "intervalReads": [
            0
          ],
          "readQualities": {
            "startInterval": 0,
            "endInterval": 0,
            "quality": "SUBSTITUTE"
          }
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

<h3 id="get-usage-for-service-point-(sr)-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[EnergyUsageListResponse](#schemacdr-energy-secondary-data-holder-apienergyusagelistresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Invalid Page Size](#error-400-field-invalid-page-size)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li></ul>|[ErrorListResponse](#schemacdr-energy-secondary-data-holder-apierrorlistresponse)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[404 - Unavailable Service Point](#error-404-unavailable-service-point)</li><li>[404 - Invalid Service Point](#error-404-invalid-service-point)</li></ul>|[ErrorListResponse](#schemacdr-energy-secondary-data-holder-apierrorlistresponse)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|[ErrorListResponse](#schemacdr-energy-secondary-data-holder-apierrorlistresponse)|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[422 - Invalid Page](#error-422-field-invalid-page)</li></ul>|[ErrorListResponse](#schemacdr-energy-secondary-data-holder-apierrorlistresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-v|string||none|
|200|x-fapi-interaction-id|string||none|
|400|x-fapi-interaction-id|string||none|
|404|x-fapi-interaction-id|string||none|
|406|x-fapi-interaction-id|string||none|
|422|x-fapi-interaction-id|string||none|

  
    <aside class="success">
This operation does not require authentication
</aside>

  

## Get Usage For Specific Service Points (SR)

<a id="opIdlistUsageForServicePoints"></a>

> Code samples

```http
POST /secondary/energy/electricity/servicepoints/usage HTTP/1.1

Content-Type: application/json
Accept: application/json
x-v: string
x-min-v: string
x-fapi-interaction-id: string
x-cds-arrangement: string

```

```javascript
var headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'x-v':'string',
  'x-min-v':'string',
  'x-fapi-interaction-id':'string',
  'x-cds-arrangement':'string'

};

$.ajax({
  url: '/secondary/energy/electricity/servicepoints/usage',
  method: 'post',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`POST /secondary/energy/electricity/servicepoints/usage`

Obtain the electricity usage data for a specific set of service points

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

###Endpoint Version
|   |  |
|---|--|
|Version|**1**

<h3 id="get-usage-for-specific-service-points-(sr)-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|oldest-date|query|[DateString](#common-field-types)|optional|Constrain the request to records with effective date at or after this date. If absent defaults to newest-date minus 24 months.  Format is aligned to DateString common type|
|newest-date|query|[DateString](#common-field-types)|optional|Constrain the request to records with effective date at or before this date.  If absent defaults to current date.  Format is aligned to DateString common type|
|interval-reads|query|string|optional|Type of interval reads. Any one of the valid values for this field can be supplied. If absent defaults to NONE|
|page|query|[PositiveInteger](#common-field-types)|optional|Page of results to request (standard pagination)|
|page-size|query|[PositiveInteger](#common-field-types)|optional|Page size to request.  Default is 25 (standard pagination)|
|x-v|header|string|mandatory|Version of the API end point requested by the client. Must be set to a positive integer. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If the value of [x-min-v](#request-headers) is equal to or higher than the value of [x-v](#request-headers) then the [x-min-v](#request-headers) header should be treated as absent. If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable. See [HTTP Headers](#request-headers)|
|x-min-v|header|string|optional|Minimum version of the API end point requested by the client. Must be set to a positive integer if provided. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable.|
|x-fapi-interaction-id|header|string|mandatory|The x-fapi-interaction-id header value provided by the Data Recipient. If not supplied by the Data Recipient, the primary Data Holder MUST create a unique **[[RFC4122]](#nref-RFC4122)** UUID value for the x-fapi-interaction-id header.|
|x-cds-arrangement|header|string|mandatory|A unique string representing a consent arrangement between a Data Recipient Software Product and Data Holder for a given consumer. The identifier MUST be unique per customer according to the definition of customer in the CDR Federation section of this profile. The x-cds-arrangement should contain the arrangement ID for the consent that the request is being made under and will be used for tracing and audit purposes. This field MUST be populated but AEMO MUST NOT seek to validate the consent associated with the arrangement|
|body|body|[servicePointIdList](#schemacdr-energy-secondary-data-holder-apiservicepointidlist)|mandatory|Request payload containing list of specific Service Points to obtain data for|
|» data|body|object|mandatory|none|
|»» servicePointIds|body|[string]|mandatory|Array of specific NMIs to obtain data for|
|» meta|body|[Meta](#schemacdr-energy-secondary-data-holder-apimeta)|mandatory|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|interval-reads|NONE|
|interval-reads|MIN_30|
|interval-reads|FULL|

> Example responses

> 200 Response

```json
{
  "data": {
    "reads": [
      {
        "servicePointId": "string",
        "registerId": "string",
        "registerSuffix": "string",
        "meterId": "string",
        "controlledLoad": true,
        "readStartDate": "string",
        "readEndDate": "string",
        "unitOfMeasure": "string",
        "readUType": "basicRead",
        "basicRead": {
          "quality": "ACTUAL",
          "value": 0
        },
        "intervalRead": {
          "readIntervalLength": 0,
          "aggregateValue": 0,
          "intervalReads": [
            0
          ],
          "readQualities": {
            "startInterval": 0,
            "endInterval": 0,
            "quality": "SUBSTITUTE"
          }
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

<h3 id="get-usage-for-specific-service-points-(sr)-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[EnergyUsageListResponse](#schemacdr-energy-secondary-data-holder-apienergyusagelistresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Invalid Page Size](#error-400-field-invalid-page-size)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li></ul>|[ErrorListResponse](#schemacdr-energy-secondary-data-holder-apierrorlistresponse)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|[ErrorListResponse](#schemacdr-energy-secondary-data-holder-apierrorlistresponse)|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[422 - Invalid Page](#error-422-field-invalid-page)</li><li>[422 - Unavailable Service Point](#error-422-unavailable-service-point)</li><li>[422 - Invalid Service Point](#error-422-invalid-service-point)</li></ul>|[ErrorListResponse](#schemacdr-energy-secondary-data-holder-apierrorlistresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-v|string||none|
|200|x-fapi-interaction-id|string||none|
|400|x-fapi-interaction-id|string||none|
|406|x-fapi-interaction-id|string||none|
|422|x-fapi-interaction-id|string||none|

  
    <aside class="success">
This operation does not require authentication
</aside>

  

## Get DER For Service Point (SR)

<a id="opIdgetDERForServicePoint"></a>

> Code samples

```http
GET /secondary/energy/electricity/servicepoints/{servicePointId}/der HTTP/1.1

Accept: application/json
x-v: string
x-min-v: string
x-fapi-interaction-id: string
x-cds-arrangement: string

```

```javascript
var headers = {
  'Accept':'application/json',
  'x-v':'string',
  'x-min-v':'string',
  'x-fapi-interaction-id':'string',
  'x-cds-arrangement':'string'

};

$.ajax({
  url: '/secondary/energy/electricity/servicepoints/{servicePointId}/der',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`GET /secondary/energy/electricity/servicepoints/{servicePointId}/der`

Obtain a list of DER data from a particular service point

###Endpoint Version
|   |  |
|---|--|
|Version|**1**

<h3 id="get-der-for-service-point-(sr)-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|servicePointId|path|string|mandatory|The independent ID of the service point, known in the industry as the NMI. The  servicePointId will be replaced with NMI for all interactions between Data Holder and AEMO.|
|x-v|header|string|mandatory|Version of the API end point requested by the client. Must be set to a positive integer. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If the value of [x-min-v](#request-headers) is equal to or higher than the value of [x-v](#request-headers) then the [x-min-v](#request-headers) header should be treated as absent. If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable. See [HTTP Headers](#request-headers)|
|x-min-v|header|string|optional|Minimum version of the API end point requested by the client. Must be set to a positive integer if provided. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable.|
|x-fapi-interaction-id|header|string|mandatory|The x-fapi-interaction-id header value provided by the Data Recipient. If not supplied by the Data Recipient, the primary Data Holder MUST create a unique **[[RFC4122]](#nref-RFC4122)** UUID value for the x-fapi-interaction-id header.|
|x-cds-arrangement|header|string|mandatory|A unique string representing a consent arrangement between a Data Recipient Software Product and Data Holder for a given consumer. The identifier MUST be unique per customer according to the definition of customer in the CDR Federation section of this profile. The x-cds-arrangement should contain the arrangement ID for the consent that the request is being made under and will be used for tracing and audit purposes. This field MUST be populated but AEMO MUST NOT seek to validate the consent associated with the arrangement|

> Example responses

> 200 Response

```json
{
  "data": {
    "servicePointId": "string",
    "approvedCapacity": 0,
    "availablePhasesCount": 3,
    "installedPhasesCount": 3,
    "islandableInstallation": true,
    "hasCentralProtectionControl": false,
    "protectionMode": {
      "exportLimitKva": 0,
      "underFrequencyProtection": 0,
      "underFrequencyProtectionDelay": 0,
      "overFrequencyProtection": 0,
      "overFrequencyProtectionDelay": 0,
      "underVoltageProtection": 0,
      "underVoltageProtectionDelay": 0,
      "overVoltageProtection": 0,
      "overVoltageProtectionDelay": 0,
      "sustainedOverVoltage": 0,
      "sustainedOverVoltageDelay": 0,
      "frequencyRateOfChange": 0,
      "voltageVectorShift": 0,
      "interTripScheme": "string",
      "neutralVoltageDisplacement": 0
    },
    "acConnections": [
      {
        "connectionIdentifier": 0,
        "count": 0,
        "equipmentType": "INVERTER",
        "manufacturerName": "string",
        "inverterSeries": "string",
        "inverterModelNumber": "string",
        "commissioningDate": "string",
        "status": "ACTIVE",
        "inverterDeviceCapacity": 0,
        "derDevices": [
          {
            "deviceIdentifier": 0,
            "count": 0,
            "manufacturer": "string",
            "modelNumber": "string",
            "status": "ACTIVE",
            "type": "FOSSIL",
            "subtype": "string",
            "nominalRatedCapacity": 0,
            "nominalStorageCapacity": 0
          }
        ]
      }
    ]
  },
  "links": {
    "self": "string"
  },
  "meta": {}
}
```

<h3 id="get-der-for-service-point-(sr)-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[EnergyDerDetailResponse](#schemacdr-energy-secondary-data-holder-apienergyderdetailresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li></ul>|[ErrorListResponse](#schemacdr-energy-secondary-data-holder-apierrorlistresponse)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[404 - Unavailable Service Point](#error-404-unavailable-service-point)</li><li>[404 - Invalid Service Point](#error-404-invalid-service-point)</li></ul>|[ErrorListResponse](#schemacdr-energy-secondary-data-holder-apierrorlistresponse)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|[ErrorListResponse](#schemacdr-energy-secondary-data-holder-apierrorlistresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-v|string||none|
|200|x-fapi-interaction-id|string||none|
|400|x-fapi-interaction-id|string||none|
|404|x-fapi-interaction-id|string||none|
|406|x-fapi-interaction-id|string||none|

  
    <aside class="success">
This operation does not require authentication
</aside>

  

## Get DER For Specific Service Points (SR)

<a id="opIdlistDERForServicePoints"></a>

> Code samples

```http
POST /secondary/energy/electricity/servicepoints/der HTTP/1.1

Content-Type: application/json
Accept: application/json
x-v: string
x-min-v: string
x-fapi-interaction-id: string
x-cds-arrangement: string

```

```javascript
var headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'x-v':'string',
  'x-min-v':'string',
  'x-fapi-interaction-id':'string',
  'x-cds-arrangement':'string'

};

$.ajax({
  url: '/secondary/energy/electricity/servicepoints/der',
  method: 'post',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`POST /secondary/energy/electricity/servicepoints/der`

Obtain DER data for a specific set of service points

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

###Endpoint Version
|   |  |
|---|--|
|Version|**1**

<h3 id="get-der-for-specific-service-points-(sr)-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|[PositiveInteger](#common-field-types)|optional|Page of results to request (standard pagination)|
|page-size|query|[PositiveInteger](#common-field-types)|optional|Page size to request.  Default is 25 (standard pagination)|
|x-v|header|string|mandatory|Version of the API end point requested by the client. Must be set to a positive integer. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If the value of [x-min-v](#request-headers) is equal to or higher than the value of [x-v](#request-headers) then the [x-min-v](#request-headers) header should be treated as absent. If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable. See [HTTP Headers](#request-headers)|
|x-min-v|header|string|optional|Minimum version of the API end point requested by the client. Must be set to a positive integer if provided. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable.|
|x-fapi-interaction-id|header|string|mandatory|The x-fapi-interaction-id header value provided by the Data Recipient. If not supplied by the Data Recipient, the primary Data Holder MUST create a unique **[[RFC4122]](#nref-RFC4122)** UUID value for the x-fapi-interaction-id header.|
|x-cds-arrangement|header|string|mandatory|A unique string representing a consent arrangement between a Data Recipient Software Product and Data Holder for a given consumer. The identifier MUST be unique per customer according to the definition of customer in the CDR Federation section of this profile. The x-cds-arrangement should contain the arrangement ID for the consent that the request is being made under and will be used for tracing and audit purposes. This field MUST be populated but AEMO MUST NOT seek to validate the consent associated with the arrangement|
|body|body|[servicePointIdList](#schemacdr-energy-secondary-data-holder-apiservicepointidlist)|mandatory|Request payload containing list of specific Service Points to obtain data for|
|» data|body|object|mandatory|none|
|»» servicePointIds|body|[string]|mandatory|Array of specific NMIs to obtain data for|
|» meta|body|[Meta](#schemacdr-energy-secondary-data-holder-apimeta)|mandatory|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "derRecords": [
      {
        "servicePointId": "string",
        "approvedCapacity": 0,
        "availablePhasesCount": 3,
        "installedPhasesCount": 3,
        "islandableInstallation": true,
        "hasCentralProtectionControl": false,
        "protectionMode": {
          "exportLimitKva": 0,
          "underFrequencyProtection": 0,
          "underFrequencyProtectionDelay": 0,
          "overFrequencyProtection": 0,
          "overFrequencyProtectionDelay": 0,
          "underVoltageProtection": 0,
          "underVoltageProtectionDelay": 0,
          "overVoltageProtection": 0,
          "overVoltageProtectionDelay": 0,
          "sustainedOverVoltage": 0,
          "sustainedOverVoltageDelay": 0,
          "frequencyRateOfChange": 0,
          "voltageVectorShift": 0,
          "interTripScheme": "string",
          "neutralVoltageDisplacement": 0
        },
        "acConnections": [
          {
            "connectionIdentifier": 0,
            "count": 0,
            "equipmentType": "INVERTER",
            "manufacturerName": "string",
            "inverterSeries": "string",
            "inverterModelNumber": "string",
            "commissioningDate": "string",
            "status": "ACTIVE",
            "inverterDeviceCapacity": 0,
            "derDevices": [
              {
                "deviceIdentifier": 0,
                "count": 0,
                "manufacturer": "string",
                "modelNumber": "string",
                "status": "ACTIVE",
                "type": "FOSSIL",
                "subtype": "string",
                "nominalRatedCapacity": 0,
                "nominalStorageCapacity": 0
              }
            ]
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

<h3 id="get-der-for-specific-service-points-(sr)-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[EnergyDerListResponse](#schemacdr-energy-secondary-data-holder-apienergyderlistresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Invalid Page Size](#error-400-field-invalid-page-size)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li></ul>|[ErrorListResponse](#schemacdr-energy-secondary-data-holder-apierrorlistresponse)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|[ErrorListResponse](#schemacdr-energy-secondary-data-holder-apierrorlistresponse)|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[422 - Invalid Page](#error-422-field-invalid-page)</li><li>[422 - Unavailable Service Point](#error-422-unavailable-service-point)</li><li>[422 - Invalid Service Point](#error-422-invalid-service-point)</li></ul>|[ErrorListResponse](#schemacdr-energy-secondary-data-holder-apierrorlistresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-v|string||none|
|200|x-fapi-interaction-id|string||none|
|400|x-fapi-interaction-id|string||none|
|406|x-fapi-interaction-id|string||none|
|422|x-fapi-interaction-id|string||none|

  
    <aside class="success">
This operation does not require authentication
</aside>

  

<h2 class="schema-heading" id="cdr-energy-secondary-data-holder-api-schemas">Schemas</h2>
<a class="schema-link" id="cdr-energy-secondary-data-holder-api-schemas"></a>

<h3 class="schema-toc" id="tocSenergyservicepointlistresponse">EnergyServicePointListResponse</h3>

<a id="schemacdr-energy-secondary-data-holder-apienergyservicepointlistresponse"></a>

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
        "isGenerator": true,
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

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|data|object|mandatory|none|
|» servicePoints|[[EnergyServicePoint](#schemacdr-energy-secondary-data-holder-apienergyservicepoint)]|mandatory|none|
|links|[LinksPaginated](#schemacdr-energy-secondary-data-holder-apilinkspaginated)|mandatory|none|
|meta|[MetaPaginated](#schemacdr-energy-secondary-data-holder-apimetapaginated)|mandatory|none|

<h3 class="schema-toc" id="tocSenergyservicepointdetailresponse">EnergyServicePointDetailResponse</h3>

<a id="schemacdr-energy-secondary-data-holder-apienergyservicepointdetailresponse"></a>

```json
{
  "data": {
    "servicePointId": "string",
    "nationalMeteringId": "string",
    "servicePointClassification": "EXTERNAL_PROFILE",
    "servicePointStatus": "ACTIVE",
    "jurisdictionCode": "ALL",
    "isGenerator": true,
    "validFromDate": "string",
    "lastUpdateDateTime": "string",
    "consumerProfile": {
      "classification": "BUSINESS",
      "threshold": "LOW"
    },
    "distributionLossFactor": {
      "code": "string",
      "description": "string",
      "lossValue": "string"
    },
    "relatedParticipants": [
      {
        "party": "string",
        "role": "FRMP"
      }
    ],
    "location": {
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
    },
    "meters": [
      {
        "meterId": "string",
        "specifications": {
          "status": "CURRENT",
          "installationType": "BASIC",
          "manufacturer": "string",
          "model": "string",
          "readType": "string",
          "nextScheduledReadDate": "string"
        },
        "registers": [
          {
            "registerId": "string",
            "registerSuffix": "string",
            "averagedDailyLoad": 0,
            "registerConsumptionType": "INTERVAL",
            "networkTariffCode": "string",
            "unitOfMeasure": "string",
            "timeOfDay": "ALLDAY",
            "multiplier": 0,
            "controlledLoad": true,
            "consumptionType": "ACTUAL"
          }
        ]
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

|Name|Type|Required|Description|
|---|---|---|---|
|data|[EnergyServicePointDetail](#schemacdr-energy-secondary-data-holder-apienergyservicepointdetail)|mandatory|none|
|links|[Links](#schemacdr-energy-secondary-data-holder-apilinks)|mandatory|none|
|meta|[Meta](#schemacdr-energy-secondary-data-holder-apimeta)|optional|none|

<h3 class="schema-toc" id="tocSenergyusagelistresponse">EnergyUsageListResponse</h3>

<a id="schemacdr-energy-secondary-data-holder-apienergyusagelistresponse"></a>

```json
{
  "data": {
    "reads": [
      {
        "servicePointId": "string",
        "registerId": "string",
        "registerSuffix": "string",
        "meterId": "string",
        "controlledLoad": true,
        "readStartDate": "string",
        "readEndDate": "string",
        "unitOfMeasure": "string",
        "readUType": "basicRead",
        "basicRead": {
          "quality": "ACTUAL",
          "value": 0
        },
        "intervalRead": {
          "readIntervalLength": 0,
          "aggregateValue": 0,
          "intervalReads": [
            0
          ],
          "readQualities": {
            "startInterval": 0,
            "endInterval": 0,
            "quality": "SUBSTITUTE"
          }
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

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|data|object|mandatory|none|
|» reads|[[EnergyUsageRead](#schemacdr-energy-secondary-data-holder-apienergyusageread)]|mandatory|Array of meter reads sorted by NMI in ascending order followed by readStartDate in descending order|
|links|[LinksPaginated](#schemacdr-energy-secondary-data-holder-apilinkspaginated)|mandatory|none|
|meta|[MetaPaginated](#schemacdr-energy-secondary-data-holder-apimetapaginated)|mandatory|none|

<h3 class="schema-toc" id="tocSenergyderlistresponse">EnergyDerListResponse</h3>

<a id="schemacdr-energy-secondary-data-holder-apienergyderlistresponse"></a>

```json
{
  "data": {
    "derRecords": [
      {
        "servicePointId": "string",
        "approvedCapacity": 0,
        "availablePhasesCount": 3,
        "installedPhasesCount": 3,
        "islandableInstallation": true,
        "hasCentralProtectionControl": false,
        "protectionMode": {
          "exportLimitKva": 0,
          "underFrequencyProtection": 0,
          "underFrequencyProtectionDelay": 0,
          "overFrequencyProtection": 0,
          "overFrequencyProtectionDelay": 0,
          "underVoltageProtection": 0,
          "underVoltageProtectionDelay": 0,
          "overVoltageProtection": 0,
          "overVoltageProtectionDelay": 0,
          "sustainedOverVoltage": 0,
          "sustainedOverVoltageDelay": 0,
          "frequencyRateOfChange": 0,
          "voltageVectorShift": 0,
          "interTripScheme": "string",
          "neutralVoltageDisplacement": 0
        },
        "acConnections": [
          {
            "connectionIdentifier": 0,
            "count": 0,
            "equipmentType": "INVERTER",
            "manufacturerName": "string",
            "inverterSeries": "string",
            "inverterModelNumber": "string",
            "commissioningDate": "string",
            "status": "ACTIVE",
            "inverterDeviceCapacity": 0,
            "derDevices": [
              {
                "deviceIdentifier": 0,
                "count": 0,
                "manufacturer": "string",
                "modelNumber": "string",
                "status": "ACTIVE",
                "type": "FOSSIL",
                "subtype": "string",
                "nominalRatedCapacity": 0,
                "nominalStorageCapacity": 0
              }
            ]
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
|» derRecords|[[EnergyDerRecord](#schemacdr-energy-secondary-data-holder-apienergyderrecord)]|mandatory|Array of meter reads|
|links|[LinksPaginated](#schemacdr-energy-secondary-data-holder-apilinkspaginated)|mandatory|none|
|meta|[MetaPaginated](#schemacdr-energy-secondary-data-holder-apimetapaginated)|mandatory|none|

<h3 class="schema-toc" id="tocSenergyderdetailresponse">EnergyDerDetailResponse</h3>

<a id="schemacdr-energy-secondary-data-holder-apienergyderdetailresponse"></a>

```json
{
  "data": {
    "servicePointId": "string",
    "approvedCapacity": 0,
    "availablePhasesCount": 3,
    "installedPhasesCount": 3,
    "islandableInstallation": true,
    "hasCentralProtectionControl": false,
    "protectionMode": {
      "exportLimitKva": 0,
      "underFrequencyProtection": 0,
      "underFrequencyProtectionDelay": 0,
      "overFrequencyProtection": 0,
      "overFrequencyProtectionDelay": 0,
      "underVoltageProtection": 0,
      "underVoltageProtectionDelay": 0,
      "overVoltageProtection": 0,
      "overVoltageProtectionDelay": 0,
      "sustainedOverVoltage": 0,
      "sustainedOverVoltageDelay": 0,
      "frequencyRateOfChange": 0,
      "voltageVectorShift": 0,
      "interTripScheme": "string",
      "neutralVoltageDisplacement": 0
    },
    "acConnections": [
      {
        "connectionIdentifier": 0,
        "count": 0,
        "equipmentType": "INVERTER",
        "manufacturerName": "string",
        "inverterSeries": "string",
        "inverterModelNumber": "string",
        "commissioningDate": "string",
        "status": "ACTIVE",
        "inverterDeviceCapacity": 0,
        "derDevices": [
          {
            "deviceIdentifier": 0,
            "count": 0,
            "manufacturer": "string",
            "modelNumber": "string",
            "status": "ACTIVE",
            "type": "FOSSIL",
            "subtype": "string",
            "nominalRatedCapacity": 0,
            "nominalStorageCapacity": 0
          }
        ]
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

|Name|Type|Required|Description|
|---|---|---|---|
|data|[EnergyDerRecord](#schemacdr-energy-secondary-data-holder-apienergyderrecord)|mandatory|none|
|links|[Links](#schemacdr-energy-secondary-data-holder-apilinks)|mandatory|none|
|meta|[Meta](#schemacdr-energy-secondary-data-holder-apimeta)|mandatory|none|

<h3 class="schema-toc" id="tocSerrorlistresponse">ErrorListResponse</h3>

<a id="schemacdr-energy-secondary-data-holder-apierrorlistresponse"></a>

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

|Name|Type|Required|Description|
|---|---|---|---|
|errors|[object]|mandatory|none|
|» code|string|mandatory|The code of the error encountered. Where the error is specific to the respondent, an application-specific error code, expressed as a string value. If the error is application-specific, the URN code that the specific error extends must be provided in the meta object. Otherwise, the value is the error code URN.|
|» title|string|mandatory|A short, human-readable summary of the problem that MUST NOT change from occurrence to occurrence of the problem represented by the error code.|
|» detail|string|mandatory|A human-readable explanation specific to this occurrence of the problem.|
|» meta|object|optional|Additional data for customised error codes|
|»» urn|string|conditional|The CDR error code URN which the application-specific error code extends. Mandatory if the error `code` is an application-specific error rather than a standardised error code.|

<h3 class="schema-toc" id="tocSenergyservicepoint">EnergyServicePoint</h3>

<a id="schemacdr-energy-secondary-data-holder-apienergyservicepoint"></a>

```json
{
  "servicePointId": "string",
  "nationalMeteringId": "string",
  "servicePointClassification": "EXTERNAL_PROFILE",
  "servicePointStatus": "ACTIVE",
  "jurisdictionCode": "ALL",
  "isGenerator": true,
  "validFromDate": "string",
  "lastUpdateDateTime": "string",
  "consumerProfile": {
    "classification": "BUSINESS",
    "threshold": "LOW"
  }
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|servicePointId|string|mandatory|The independent ID of the service point, known in the industry as the National Meter Identifier (NMI). Note that the servicePointId will be replaced with NMI for all interactions between Data Holder and AEMO.|
|nationalMeteringId|string|mandatory|The independent ID of the service point, known in the industry as the NMI|
|servicePointClassification|string|mandatory|The classification of the service point as defined in MSATS procedures|
|servicePointStatus|string|mandatory|Code used to indicate the status of the service point. Note the details for the enumeration values below:<ul><li>**ACTIVE** - An active, energised, service point</li><li>**DE_ENERGISED** - The service point exists but is deenergised</li><li>**EXTINCT** - The service point has been permanently decommissioned</li><li>**GREENFIELD** - Applies to a service point that has never been energised</li><li>**OFF_MARKET** - Applies when the service point is no longer settled in the NEM</li></ul>|
|jurisdictionCode|string|mandatory|Jurisdiction code to which the service point belongs.This code defines the jurisdictional rules which apply to the service point. Note the details of enumeration values below:<ul><li>**ALL** - All Jurisdictions</li><li>**ACT** - Australian Capital Territory</li><li>**NEM** - National Electricity Market</li><li>**NSW** - New South Wales</li><li>**QLD** - Queensland</li><li>**SA** - South Australia</li><li>**TAS** - Tasmania</li><li>**VIC** - Victoria</li></ul>|
|isGenerator|boolean|optional|This flag determines whether the energy at this connection point is to be treated as consumer load or as a generating unit(this may include generator auxiliary loads). If absent defaults to false. <br>**Note:** Only applicable for scheduled or semischeduled generators, does not indicate on site generation by consumer|
|validFromDate|[DateString](#common-field-types)|mandatory|The start date from which this service point first became valid|
|lastUpdateDateTime|[DateTimeString](#common-field-types)|mandatory|The date and time that the information for this service point was modified|
|consumerProfile|object|optional|none|
|» classification|string|optional|A code that defines the consumer class as defined in the National Energy Retail Regulations, or in overriding Jurisdictional instruments|
|» threshold|any|optional|A code that defines the consumption threshold as defined in the National Energy Retail Regulations, or in overriding Jurisdictional instruments. Note the details of enumeration values below: <ul><li>**LOW** - Consumption is less than the ‘lower consumption threshold’ as defined in the National Energy Retail Regulations</li><li>**MEDIUM** - Consumption is equal to or greater than the ‘lower consumption threshold’, but less than the ‘upper consumption threshold’, as defined in the National Energy Retail Regulations</li><li>**HIGH** - Consumption is equal to or greater than the ‘upper consumption threshold’ as defined in the National Energy Retail Regulations</li></ul>|

#### Enumerated Values

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

<h3 class="schema-toc" id="tocSenergyservicepointdetail">EnergyServicePointDetail</h3>

<a id="schemacdr-energy-secondary-data-holder-apienergyservicepointdetail"></a>

```json
{
  "servicePointId": "string",
  "nationalMeteringId": "string",
  "servicePointClassification": "EXTERNAL_PROFILE",
  "servicePointStatus": "ACTIVE",
  "jurisdictionCode": "ALL",
  "isGenerator": true,
  "validFromDate": "string",
  "lastUpdateDateTime": "string",
  "consumerProfile": {
    "classification": "BUSINESS",
    "threshold": "LOW"
  },
  "distributionLossFactor": {
    "code": "string",
    "description": "string",
    "lossValue": "string"
  },
  "relatedParticipants": [
    {
      "party": "string",
      "role": "FRMP"
    }
  ],
  "location": {
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
  },
  "meters": [
    {
      "meterId": "string",
      "specifications": {
        "status": "CURRENT",
        "installationType": "BASIC",
        "manufacturer": "string",
        "model": "string",
        "readType": "string",
        "nextScheduledReadDate": "string"
      },
      "registers": [
        {
          "registerId": "string",
          "registerSuffix": "string",
          "averagedDailyLoad": 0,
          "registerConsumptionType": "INTERVAL",
          "networkTariffCode": "string",
          "unitOfMeasure": "string",
          "timeOfDay": "ALLDAY",
          "multiplier": 0,
          "controlledLoad": true,
          "consumptionType": "ACTUAL"
        }
      ]
    }
  ]
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|servicePointId|string|mandatory|The independent ID of the service point, known in the industry as the National Meter Identifier (NMI). Note that the servicePointId will be replaced with NMI for all interactions between Data Holder and AEMO.|
|nationalMeteringId|string|mandatory|The independent ID of the service point, known in the industry as the NMI|
|servicePointClassification|string|mandatory|The classification of the service point as defined in MSATS procedures|
|servicePointStatus|string|mandatory|Code used to indicate the status of the service point. Note the details for the enumeration values below:<ul><li>**ACTIVE** - An active, energised, service point</li><li>**DE_ENERGISED** - The service point exists but is deenergised</li><li>**EXTINCT** - The service point has been permanently decommissioned</li><li>**GREENFIELD** - Applies to a service point that has never been energised</li><li>**OFF_MARKET** - Applies when the service point is no longer settled in the NEM</li></ul>|
|jurisdictionCode|string|mandatory|Jurisdiction code to which the service point belongs.This code defines the jurisdictional rules which apply to the service point. Note the details of enumeration values below:<ul><li>**ALL** - All Jurisdictions</li><li>**ACT** - Australian Capital Territory</li><li>**NEM** - National Electricity Market</li><li>**NSW** - New South Wales</li><li>**QLD** - Queensland</li><li>**SA** - South Australia</li><li>**TAS** - Tasmania</li><li>**VIC** - Victoria</li></ul>|
|isGenerator|boolean|optional|This flag determines whether the energy at this connection point is to be treated as consumer load or as a generating unit(this may include generator auxiliary loads). If absent defaults to false. <br>**Note:** Only applicable for scheduled or semischeduled generators, does not indicate on site generation by consumer|
|validFromDate|[DateString](#common-field-types)|mandatory|The start date from which this service point first became valid|
|lastUpdateDateTime|[DateTimeString](#common-field-types)|mandatory|The date and time that the information for this service point was modified|
|consumerProfile|object|optional|none|
|» classification|string|optional|A code that defines the consumer class as defined in the National Energy Retail Regulations, or in overriding Jurisdictional instruments|
|» threshold|any|optional|A code that defines the consumption threshold as defined in the National Energy Retail Regulations, or in overriding Jurisdictional instruments. Note the details of enumeration values below: <ul><li>**LOW** - Consumption is less than the ‘lower consumption threshold’ as defined in the National Energy Retail Regulations</li><li>**MEDIUM** - Consumption is equal to or greater than the ‘lower consumption threshold’, but less than the ‘upper consumption threshold’, as defined in the National Energy Retail Regulations</li><li>**HIGH** - Consumption is equal to or greater than the ‘upper consumption threshold’ as defined in the National Energy Retail Regulations</li></ul>|
|distributionLossFactor|object|mandatory|none|
|» code|string|mandatory|A code used to identify data loss factor for the service point values.  Refer to AEMO distribution loss factor documents for each financial year to interpret|
|» description|string|mandatory|Description of the data loss factor code and value|
|» lossValue|string|mandatory|The value associated with the loss factor code|
|relatedParticipants|[object]|mandatory|none|
|» party|string|mandatory|The name of the party/orginsation related to this service point|
|» role|string|mandatory|The role performed by this participant in relation to the service point. Note the details of enumeration values below: <ul><li>**FRMP** - Financially Responsible Market Participant</li><li>**LNSP** - Local Network Service Provider or Embedded Network Manager for child connection points</li><li>**DRSP** - wholesale Demand Response and/or market ancillary Service Provider and note that where it is not relevant for a NMI it will not be included</li></ul>|
|location|[CommonPhysicalAddress](#schemacdr-energy-secondary-data-holder-apicommonphysicaladdress)|mandatory|Location of the servicepoint|
|meters|[object]|optional|The meters associated with the service point. This may be empty where there are no meters physically installed at the service point|
|» meterId|string|mandatory|The meter ID uniquely identifies a meter for a given service point.  It is unique in the context of the service point.  It is not globally unique|
|» specifications|object|mandatory|Technical characteristics of the meter|
|»» status|string|mandatory|A code to denote the status of the meter. Note the details of enumeration values below: <ul><li>**CURRENT** -Applies when a meter is current and not disconnected</li><li>**DISCONNECTED** - Applies when a meter is present but has been remotely disconnected</li></ul>|
|»» installationType|string|mandatory|The metering Installation type code indicates whether the metering installation has to be manually read. Note the details of enumeration values below: <ul><li>**BASIC** - Accumulation Meter – Type 6</li><li>**COMMS1** - Interval Meter with communications – Type 1</li><li>**COMMS2** - Interval Meter with communications – Type 2</li><li>**COMMS3** - Interval Meter with communications – Type 3</li><li>**COMMS4** - Interval Meter with communications – Type 4</li><li>**COMMS4C** - CT connected metering installation that meets the minimum services specifications</li><li>**COMMS4D** - Whole current metering installation that meets the minimum services specifications</li><li>**MRAM** - Small customer metering installation – Type 4A</li><li>**MRIM** - Manually Read Interval Meter – Type 5</li><li>**UMCP** - Unmetered Supply – Type 7</li><li>**VICAMI** - A relevant metering installation as defined in clause 9.9C of the NER</li><li>**NCONUML** - Non-contestable unmeter load - Introduced as part of Global Settlement</li></ul>|
|»» manufacturer|string|optional|Free text field to identify the manufacturer of the installed meter|
|»» model|string|optional|Free text field to identify the meter manufacturer’s designation for the meter model|
|»» readType|string|optional|Code to denote the method and frequency of Meter Reading. The value is formatted as follows: <ul><li>First Character = Remote (R) or Manual (M)</li><li>Second Character = Mode: T = telephone W = wireless P = powerline I = infra-red G = galvanic V = visual </li><li>Third Character = Frequency of Scheduled Meter Readings: 1 = Twelve times per year 2 = Six times per year 3 = Four times per year D = Daily or weekly</li><li>Optional Fourth Character = to identify what interval length the meter is capable of reading. This includes five, 15 and 30 minute granularity as the following: A – 5 minute B – 15 minute C – 30 minute D – Cannot convert to 5 minute (i.e. due to metering installation de-energised) M - Manually Read Accumulation Meter</li></ul> For example, <ul><li>MV3 = Manual, Visual, Quarterly</li> <li>MV3M = Manual, Visual, Quarterly, Manually Read Accumulation Meter</li> <li>RWDC = Remote, Wireless, Daily, 30 minutes interval</li></ul>|
|»» nextScheduledReadDate|[DateString](#common-field-types)|optional|This date is the next scheduled meter read date (NSRD) if a manual Meter Reading is required|
|» registers|[object]|optional|Usage data registers available from the meter. This may be empty where there are no meters physically installed at the service point|
|»» registerId|string|mandatory|Unique identifier of the register within this service point.  Is not globally unique|
|»» registerSuffix|string|optional|Register suffix of the meter register where the meter reads are obtained|
|»» averagedDailyLoad|number|optional|The energy delivered through a connection point or metering point over an extended period normalised to a 'per day' basis (kWh). This value is calculated annually.|
|»» registerConsumptionType|string|mandatory|Indicates the consumption type of register|
|»» networkTariffCode|string|optional|The Network Tariff Code is a free text field containing a code supplied and published by the local network service provider|
|»» unitOfMeasure|string|optional|The unit of measure for data held in this register|
|»» timeOfDay|string|optional|Code to identify the time validity of register contents|
|»» multiplier|number|optional|Multiplier required to take a register value and turn it into a value representing billable energy|
|»» controlledLoad|boolean|optional|Indicates whether the energy recorded by this register is created under a Controlled Load regime|
|»» consumptionType|string|optional|Actual/Subtractive Indicator. Note the details of enumeration values below: <ul><li>**ACTUAL** implies volume of energy actually metered between two dates</li><li>**CUMULATIVE** indicates a meter reading for a specific date. A second Meter Reading is required to determine the consumption between those two Meter Reading dates</li></ul>|

#### Enumerated Values

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
|role|FRMP|
|role|LNSP|
|role|DRSP|
|status|CURRENT|
|status|DISCONNECTED|
|installationType|BASIC|
|installationType|COMMS1|
|installationType|COMMS2|
|installationType|COMMS3|
|installationType|COMMS4|
|installationType|COMMS4C|
|installationType|COMMS4D|
|installationType|MRAM|
|installationType|MRIM|
|installationType|PROF|
|installationType|SAMPLE|
|installationType|UMCP|
|installationType|VICAMI|
|installationType|NCOLNUML|
|registerConsumptionType|INTERVAL|
|registerConsumptionType|BASIC|
|registerConsumptionType|PROFILE_DATA|
|registerConsumptionType|ACTIVE_IMPORT|
|registerConsumptionType|ACTIVE|
|registerConsumptionType|REACTIVE_IMPORT|
|registerConsumptionType|REACTIVE|
|timeOfDay|ALLDAY|
|timeOfDay|INTERVAL|
|timeOfDay|PEAK|
|timeOfDay|BUSINESS|
|timeOfDay|SHOULDER|
|timeOfDay|EVENING|
|timeOfDay|OFFPEAK|
|timeOfDay|CONTROLLED|
|timeOfDay|DEMAND|
|consumptionType|ACTUAL|
|consumptionType|CUMULATIVE|

<h3 class="schema-toc" id="tocSenergyusageread">EnergyUsageRead</h3>

<a id="schemacdr-energy-secondary-data-holder-apienergyusageread"></a>

```json
{
  "servicePointId": "string",
  "registerId": "string",
  "registerSuffix": "string",
  "meterId": "string",
  "controlledLoad": true,
  "readStartDate": "string",
  "readEndDate": "string",
  "unitOfMeasure": "string",
  "readUType": "basicRead",
  "basicRead": {
    "quality": "ACTUAL",
    "value": 0
  },
  "intervalRead": {
    "readIntervalLength": 0,
    "aggregateValue": 0,
    "intervalReads": [
      0
    ],
    "readQualities": {
      "startInterval": 0,
      "endInterval": 0,
      "quality": "SUBSTITUTE"
    }
  }
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|servicePointId|string|mandatory|The independent ID of the service point, known in the industry as the National Meter Identifier (NMI). Note that the servicePointId will be replaced with NMI for all interactions between Data Holder and AEMO.|
|registerId|string|optional|Register ID of the meter register where the meter reads are obtained|
|registerSuffix|string|mandatory|Register suffix of the meter register where the meter reads are obtained|
|meterId|string|optional|Meter id/serial number as it appears in customer’s bill. ID permanence rules do not apply.|
|controlledLoad|boolean|optional|Indicates whether the energy recorded by this register is created under a Controlled Load regime|
|readStartDate|[DateString](#common-field-types)|mandatory|Date when the meter reads start in AEST and assumed to start from 12:00 am AEST.|
|readEndDate|[DateString](#common-field-types)|optional|Date when the meter reads end in AEST.  If absent then assumed to be equal to readStartDate.  In this case the entry represents data for a single date specified by readStartDate.|
|unitOfMeasure|[ExternalRef](#common-field-types)|optional|Unit of measure of the meter reads. Refer to Appendix B of <a href='https://www.aemo.com.au/-/media/files/stakeholder_consultation/consultations/nem-consultations/2019/5ms-metering-package-2/final-determination/mdff-specification-nem12-nem13-v21-final-determination-clean.pdf?la=en&hash=03FCBA0D60E091DE00F2361AE76206EA'>MDFF Specification NEM12 NEM13 v2.1</a> for a list of possible values|
|readUType|string|mandatory|Specify the type of the meter read data|
|basicRead|object|conditional|Mandatory if readUType is set to basicRead|
|» quality|string|optional|The quality of the read taken.  If absent then assumed to be ACTUAL|
|» value|number|mandatory|Meter read value.  If positive then it means consumption, if negative it means export|
|intervalRead|object|conditional|Mandatory if readUType is set to intervalRead|
|» readIntervalLength|[PositiveInteger](#common-field-types)|conditional|Read interval length in minutes. Required when interval-reads query parameter equals FULL or MIN_30|
|» aggregateValue|number|mandatory|The aggregate sum of the interval read values. If positive then it means net consumption, if negative it means net export|
|» intervalReads|[number]|conditional|Array of Interval read values. If positive then it means consumption, if negative it means export. Required when interval-reads query parameter equals FULL or  MIN_30.<br>Each read value indicates the read for the interval specified by readIntervalLength beginning at midnight of readStartDate (for example 00:00 to 00:30 would be the first reading in a 30 minute Interval)|
|» readQualities|object|conditional|Specifies quality of reads that are not ACTUAL.  For read indices that are not specified, quality is assumed to be ACTUAL. If not present, all quality of all reads are assumed to be actual. Required when interval-reads query parameter equals FULL or MIN_30|
|»» startInterval|[PositiveInteger](#common-field-types)|mandatory|Start interval for read quality flag. First read begins at 1|
|»» endInterval|[PositiveInteger](#common-field-types)|mandatory|End interval for read quality flag|
|»» quality|string|mandatory|The quality of the read taken|

#### Enumerated Values

|Property|Value|
|---|---|
|readUType|basicRead|
|readUType|intervalRead|
|quality|ACTUAL|
|quality|SUBSTITUTE|
|quality|FINAL_SUBSTITUTE|
|quality|SUBSTITUTE|
|quality|FINAL_SUBSTITUTE|

<h3 class="schema-toc" id="tocSenergyderrecord">EnergyDerRecord</h3>

<a id="schemacdr-energy-secondary-data-holder-apienergyderrecord"></a>

```json
{
  "servicePointId": "string",
  "approvedCapacity": 0,
  "availablePhasesCount": 3,
  "installedPhasesCount": 3,
  "islandableInstallation": true,
  "hasCentralProtectionControl": false,
  "protectionMode": {
    "exportLimitKva": 0,
    "underFrequencyProtection": 0,
    "underFrequencyProtectionDelay": 0,
    "overFrequencyProtection": 0,
    "overFrequencyProtectionDelay": 0,
    "underVoltageProtection": 0,
    "underVoltageProtectionDelay": 0,
    "overVoltageProtection": 0,
    "overVoltageProtectionDelay": 0,
    "sustainedOverVoltage": 0,
    "sustainedOverVoltageDelay": 0,
    "frequencyRateOfChange": 0,
    "voltageVectorShift": 0,
    "interTripScheme": "string",
    "neutralVoltageDisplacement": 0
  },
  "acConnections": [
    {
      "connectionIdentifier": 0,
      "count": 0,
      "equipmentType": "INVERTER",
      "manufacturerName": "string",
      "inverterSeries": "string",
      "inverterModelNumber": "string",
      "commissioningDate": "string",
      "status": "ACTIVE",
      "inverterDeviceCapacity": 0,
      "derDevices": [
        {
          "deviceIdentifier": 0,
          "count": 0,
          "manufacturer": "string",
          "modelNumber": "string",
          "status": "ACTIVE",
          "type": "FOSSIL",
          "subtype": "string",
          "nominalRatedCapacity": 0,
          "nominalStorageCapacity": 0
        }
      ]
    }
  ]
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|servicePointId|string|mandatory|The independent ID of the service point, known in the industry as the National Meter Identifier (NMI). Note that the servicePointId will be replaced with NMI for all interactions between Data Holder and AEMO.|
|approvedCapacity|number|mandatory|Approved small generating unit capacity as agreed with NSP in the connection agreement, expressed in kVA. Value of 0 indicates no DER record exists for the given servicePointId|
|availablePhasesCount|[NaturalNumber](#common-field-types)|mandatory|The number of phases available for the installation of DER. Acceptable values are 0, 1, 2 or 3. Value of 0 indicates no DER record exists for the given servicePointId|
|installedPhasesCount|[NaturalNumber](#common-field-types)|mandatory|The number of phases that DER is connected to. Acceptable values are 0, 1, 2 or 3. Value of 0 indicates no DER record exists for the given servicePointId|
|islandableInstallation|[Boolean](#common-field-types)|mandatory|For identification of small generating units designed with the ability to operate in an islanded mode|
|hasCentralProtectionControl|boolean|optional|For DER installations where NSPs specify the need for additional forms of protection above those inbuilt in an inverter.  If absent then assumed to be false|
|protectionMode|object|conditional|Required only when the hasCentralProtectionAndControl flag is set to true.  One or more of the object fields will be provided to describe the protection modes in place|
|» exportLimitKva|number|optional|Maximum amount of power (kVA) that may be exported from a connection point to the grid, as monitored by a control / relay function. An absent value indicates no limit|
|» underFrequencyProtection|number|optional|Protective function limit in Hz.|
|» underFrequencyProtectionDelay|number|optional|Trip delay time in seconds.|
|» overFrequencyProtection|number|optional|Protective function limit in Hz.|
|» overFrequencyProtectionDelay|number|optional|Trip delay time in seconds.|
|» underVoltageProtection|number|optional|Protective function limit in V.|
|» underVoltageProtectionDelay|number|optional|Trip delay time in seconds.|
|» overVoltageProtection|number|optional|Protective function limit in V.|
|» overVoltageProtectionDelay|number|optional|Trip delay time in seconds.|
|» sustainedOverVoltage|number|optional|Sustained over voltage.|
|» sustainedOverVoltageDelay|number|optional|Sustained Over voltage protection delay in seconds.|
|» frequencyRateOfChange|number|optional|Rate of change of frequency trip point (Hz/s).|
|» voltageVectorShift|number|optional|Trip angle in degrees.|
|» interTripScheme|string|optional|Description of the form of inter-trip (e.g. 'from local substation').|
|» neutralVoltageDisplacement|number|optional|Trip voltage.|
|acConnections|[object]|mandatory|none|
|» connectionIdentifier|number|mandatory|AC Connection ID as defined in the DER register.  Does not align with CDR ID permanence standards|
|» count|[PositiveInteger](#common-field-types)|mandatory|Number of AC Connections in the group. For the suite of AC Connections to be considered as a group, all of the AC Connections included must have the same attributes|
|» equipmentType|string|optional|Indicates whether the DER device is connected via an inverter (and what category of inverter it is) or not (e.g. rotating machine). If absent, assume equipment type to be “OTHER”.|
|» manufacturerName|string|conditional|The name of the inverter manufacturer. Mandatory if equipmentType is INVERTER|
|» inverterSeries|string|conditional|The inverter series. Mandatory if equipmentType is INVERTER|
|» inverterModelNumber|string|conditional|The inverter model number. Mandatory if equipmentType is INVERTER|
|» commissioningDate|[DateString](#common-field-types)|mandatory|The date that the DER installation is commissioned|
|» status|string|mandatory|Code used to indicate the status of the Inverter. This will be used to identify if an inverter is active or inactive or decommissioned|
|» inverterDeviceCapacity|number|conditional|The rated AC output power that is listed in the product specified by the manufacturer. Mandatory if equipmentType is INVERTER. Default is 0 if value not known|
|» derDevices|[object]|mandatory|none|
|»» deviceIdentifier|number|mandatory|Unique identifier for a single DER device or a group of DER devices with the same attributes. Does not align with CDR ID permanence standards|
|»» count|[PositiveInteger](#common-field-types)|mandatory|Number of devices in the group of DER devices|
|»» manufacturer|string|optional|The name of the device manufacturer. If absent then assumed to be “unknown”|
|»» modelNumber|string|optional|The model number of the device. If absent then assumed to be “unknown”|
|»» status|string|optional|Code used to indicate the status of the device. This will be used to identify if an inverter is active or inactive or decommissioned|
|»» type|string|mandatory|Used to indicate the primary technology used in the DER device|
|»» subtype|string|optional|Used to indicate the primary technology used in the DER device. This field is also used to record for example the battery chemistry, or the type of PV panel. It is also used to record if a battery is contained in an electric vehicle connected in a vehicle-to-grid arrangement. If absent then assumed to be “other”|
|»» nominalRatedCapacity|number|mandatory|Maximum output in kVA that is listed in the product specification by the manufacturer. This refers to the capacity of each unit within the device group. Default is 0 if value not known|
|»» nominalStorageCapacity|number|conditional|Maximum storage capacity in kVAh. This refers to the capacity of each storage module within the device group. Mandatory if type is equal to “STORAGE”. Default is 0 if value not known|

#### Enumerated Values

|Property|Value|
|---|---|
|equipmentType|INVERTER|
|equipmentType|OTHER|
|status|ACTIVE|
|status|INACTIVE|
|status|DECOMMISSIONED|
|status|ACTIVE|
|status|INACTIVE|
|status|DECOMMISSIONED|
|type|FOSSIL|
|type|HYDRO|
|type|WIND|
|type|SOLAR_PV|
|type|RENEWABLE|
|type|GEOTHERMAL|
|type|STORAGE|
|type|OTHER|

<h3 class="schema-toc" id="tocScommonphysicaladdress">CommonPhysicalAddress</h3>

<a id="schemacdr-energy-secondary-data-holder-apicommonphysicaladdress"></a>

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

|Name|Type|Required|Description|
|---|---|---|---|
|addressUType|string|mandatory|The type of address object present|
|simple|[CommonSimpleAddress](#schemacdr-energy-secondary-data-holder-apicommonsimpleaddress)|conditional|Required if addressUType is set to simple|
|paf|[CommonPAFAddress](#schemacdr-energy-secondary-data-holder-apicommonpafaddress)|conditional|Australian address formatted according to the file format defined by the [PAF file format](https://auspost.com.au/content/dam/auspost_corp/media/documents/australia-post-data-guide.pdf). Required if addressUType is set to paf|

#### Enumerated Values

|Property|Value|
|---|---|
|addressUType|paf|
|addressUType|simple|

<h3 class="schema-toc" id="tocScommonsimpleaddress">CommonSimpleAddress</h3>

<a id="schemacdr-energy-secondary-data-holder-apicommonsimpleaddress"></a>

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

*Required if addressUType is set to simple*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|mailingName|string|optional|Name of the individual or business formatted for inclusion in an address used for physical mail|
|addressLine1|string|mandatory|First line of the standard address object|
|addressLine2|string|optional|Second line of the standard address object|
|addressLine3|string|optional|Third line of the standard address object|
|postcode|string|conditional|Mandatory for Australian addresses|
|city|string|mandatory|Name of the city or locality|
|state|string|mandatory|Free text if the country is not Australia. If country is Australia then must be one of the values defined by the [State Type Abbreviation](https://auspost.com.au/content/dam/auspost_corp/media/documents/australia-post-data-guide.pdf) in the PAF file format. NSW, QLD, VIC, NT, WA, SA, TAS, ACT, AAT|
|country|[ExternalRef](#common-field-types)|optional|A valid [ISO 3166 Alpha-3](https://www.iso.org/iso-3166-country-codes.html) country code. Australia (AUS) is assumed if country is not present.|

<h3 class="schema-toc" id="tocScommonpafaddress">CommonPAFAddress</h3>

<a id="schemacdr-energy-secondary-data-holder-apicommonpafaddress"></a>

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

*Australian address formatted according to the file format defined by the [PAF file format](https://auspost.com.au/content/dam/auspost_corp/media/documents/australia-post-data-guide.pdf). Required if addressUType is set to paf*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|dpid|string|optional|Unique identifier for an address as defined by Australia Post.  Also known as Delivery Point Identifier|
|thoroughfareNumber1|[PositiveInteger](#common-field-types)|optional|Thoroughfare number for a property (first number in a property ranged address)|
|thoroughfareNumber1Suffix|string|optional|Suffix for the thoroughfare number. Only relevant is thoroughfareNumber1 is populated|
|thoroughfareNumber2|[PositiveInteger](#common-field-types)|optional|Second thoroughfare number (only used if the property has a ranged address eg 23-25)|
|thoroughfareNumber2Suffix|string|optional|Suffix for the second thoroughfare number. Only relevant is thoroughfareNumber2 is populated|
|flatUnitType|string|optional|Type of flat or unit for the address|
|flatUnitNumber|string|optional|Unit number (including suffix, if applicable)|
|floorLevelType|string|optional|Type of floor or level for the address|
|floorLevelNumber|string|optional|Floor or level number (including alpha characters)|
|lotNumber|string|optional|Allotment number for the address|
|buildingName1|string|optional|Building/Property name 1|
|buildingName2|string|optional|Building/Property name 2|
|streetName|string|optional|The name of the street|
|streetType|string|optional|The street type. Valid enumeration defined by Australia Post PAF code file|
|streetSuffix|string|optional|The street type suffix. Valid enumeration defined by Australia Post PAF code file|
|postalDeliveryType|string|optional|Postal delivery type. (eg. PO BOX). Valid enumeration defined by Australia Post PAF code file|
|postalDeliveryNumber|[PositiveInteger](#common-field-types)|optional|Postal delivery number if the address is a postal delivery type|
|postalDeliveryNumberPrefix|string|optional|Postal delivery number prefix related to the postal delivery number|
|postalDeliveryNumberSuffix|string|optional|Postal delivery number suffix related to the postal delivery number|
|localityName|string|mandatory|Full name of locality|
|postcode|string|mandatory|Postcode for the locality|
|state|string|mandatory|State in which the address belongs. Valid enumeration defined by Australia Post PAF code file [State Type Abbreviation](https://auspost.com.au/content/dam/auspost_corp/media/documents/australia-post-data-guide.pdf). NSW, QLD, VIC, NT, WA, SA, TAS, ACT, AAT|

<h3 class="schema-toc" id="tocSlinks">Links</h3>

<a id="schemacdr-energy-secondary-data-holder-apilinks"></a>

```json
{
  "self": "string"
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|self|[URIString](#common-field-types)|mandatory|Fully qualified link that generated the current response document|

<h3 class="schema-toc" id="tocSmeta">Meta</h3>

<a id="schemacdr-energy-secondary-data-holder-apimeta"></a>

```json
{}

```

### Properties

*None*

<h3 class="schema-toc" id="tocSlinkspaginated">LinksPaginated</h3>

<a id="schemacdr-energy-secondary-data-holder-apilinkspaginated"></a>

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

<h3 class="schema-toc" id="tocSmetapaginated">MetaPaginated</h3>

<a id="schemacdr-energy-secondary-data-holder-apimetapaginated"></a>

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

