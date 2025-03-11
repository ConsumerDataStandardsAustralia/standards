---
title: Get Service Point Detail v1

#language_tabs: # must be one of https://git.io/vQNgJ
#  - shell
#  - javascript

toc_footers:
  - <a href='../../index.html'>Consumer Data Standards</a>

search: false
---

# Get Service Point Detail V1
This page documents version 1 of the Get Service Point Detail endpoint. 

Data Holders can retire this version after **March 16th 2026**. Data Recipients must update to newer versions prior to this date.

## Get Service Point Detail

<p id="get-service-point-detail" class="orig-anchor"></p>

> Code samples

```http
GET https://mtls.dh.example.com/cds-au/v1/energy/electricity/servicepoints/{servicePointId} HTTP/1.1
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

fetch('https://mtls.dh.example.com/cds-au/v1/energy/electricity/servicepoints/{servicePointId}', {
  method: 'GET',
  headers: headers
}).then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

`GET /energy/electricity/servicepoints/{servicePointId}`

Obtain detailed standing information for a specific service point that is owned by the customer that has authorised the current session.

<h3 id="cdr-energy-api_get-service-point-detail_endpoint-version">Endpoint Version</h3>
|   |  |
|---|--|
|Version|**1**

<h3 id="cdr-energy-api_get-service-point-detail_parameters">Parameters</h3>

|Name|In|Type|Required|Default|Description|
|---|---|---|---|---|---|
|servicePointId|path|[EnergyServicePointId](#schemacdr-energy-apienergyservicepointid)|mandatory||The _servicePointId_ to obtain data for. _servicePointId_ values are returned by service point list endpoints. Note that it is not a _nationalMeteringId_.|
|x-v|header|string|mandatory||Version of the API endpoint requested by the client. Must be set to a positive integer. The endpoint should respond with the highest supported version between [_x-min-v_](#request-headers) and [_x-v_](#request-headers). If the value of [_x-min-v_](#request-headers) is equal to or higher than the value of [_x-v_](#request-headers) then the [_x-min-v_](#request-headers) header should be treated as absent. If all versions requested are not supported then the endpoint **MUST** respond with a `406 Not Acceptable`. See [HTTP Headers](#request-headers).|
|x-min-v|header|string|optional||Minimum version of the API endpoint requested by the client. Must be set to a positive integer if provided. The endpoint should respond with the highest supported version between [_x-min-v_](#request-headers) and [_x-v_](#request-headers). If all versions requested are not supported then the endpoint **MUST** respond with a `406 Not Acceptable`.|
|x-fapi-interaction-id|header|string|optional||An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|x-fapi-auth-date|header|string|conditional||The time when the customer last logged in to the Data Recipient Software Product as described in **[[FAPI-1.0-Baseline]](#nref-FAPI-1-0-Baseline)**. Required for all resource calls (customer present and unattended). Not required for unauthenticated calls.|
|x-fapi-customer-ip-address|header|string|optional||The customer's original IP address if the customer is currently logged in to the data recipient. The presence of this header indicates that the API is being called in a customer present context. Not to be included for unauthenticated calls.|
|x-cds-client-headers|header|[Base64](#common-field-types)|conditional||The customer's original standard http headers [Base64](#common-field-types) encoded, including the original User-Agent header, if the customer is currently logged in to the data recipient. Mandatory for customer present calls. Not required for unattended or unauthenticated calls.|

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
    "isGenerator": false,
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

<h3 id="cdr-energy-api_get-service-point-detail_responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[EnergyServicePointDetailResponse](#schemacdr-energy-apienergyservicepointdetailresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The following error codes **MUST** be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Missing Required Field](#error-400-field-missing)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li></ul>|[ResponseErrorListV2](#schemacdr-energy-apiresponseerrorlistv2)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The following error codes **MUST** be supported:<br/><ul class="error-code-list"><li>[404 - Unavailable Service Point](#error-404-unavailable-service-point)</li><li>[404 - Invalid Service Point](#error-404-invalid-service-point)</li></ul>|[ResponseErrorListV2](#schemacdr-energy-apiresponseerrorlistv2)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|The following error codes **MUST** be supported:<br/><ul class="error-code-list"><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|[ResponseErrorListV2](#schemacdr-energy-apiresponseerrorlistv2)|

<h3 id="cdr-energy-api_get-service-point-detail_response-headers">Response Headers</h3>

|Status|Header|Type|Required|Description|
|---|---|---|---|---|
|200|x-v|string|mandatory|The [payload version](#response-headers) that the endpoint has responded with.|
|200|x-fapi-interaction-id|string|mandatory|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|400|x-fapi-interaction-id|string|mandatory|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|404|x-fapi-interaction-id|string|mandatory|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|406|x-fapi-interaction-id|string|mandatory|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder **MUST** play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|

  
    
      <aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
<a href="#authorisation-scopes">energy:electricity.servicepoints.detail:read.</a>
</aside>


<h2 class="schema-heading" id="cdr-energy-api-schemas">Schemas</h2>

<h3 class="schema-toc" id="cdr-energy-api_schemas_tocSenergyservicepointdetailresponse">EnergyServicePointDetailResponse</h3>
<p id="tocSenergyservicepointdetailresponse" class="orig-anchor"></p>

<p>
  <a id="cdr-energy-api_schema-base_energyservicepointdetailresponse"></a>
  <a class="schema-anchor" id="schemacdr-energy-apienergyservicepointdetailresponse"></a>
</p>

```json
{
  "data": {
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

<h3 id="cdr-energy-api_energyservicepointdetailresponse_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|data|[EnergyServicePointDetail](#schemacdr-energy-apienergyservicepointdetail)|mandatory||none|
|links|[Links](#schemacdr-energy-apilinks)|mandatory||none|
|meta|[Meta](#schemacdr-energy-apimeta)|optional||none|

<h3 class="schema-toc" id="cdr-energy-api_schemas_tocSenergyservicepointdetail">EnergyServicePointDetail</h3>
<p id="tocSenergyservicepointdetail" class="orig-anchor"></p>

<p>
  <a id="cdr-energy-api_schema-base_energyservicepointdetail"></a>
  <a class="schema-anchor" id="schemacdr-energy-apienergyservicepointdetail"></a>
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

<h3 id="cdr-energy-api_energyservicepointdetail_properties">Properties</h3>

*allOf*

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|*anonymous*|[EnergyServicePoint](#schemacdr-energy-apienergyservicepoint)|mandatory||none|

*and*

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|*anonymous*|object|mandatory||none|
|» distributionLossFactor|object|mandatory||none|
|»» code|string|mandatory||A code used to identify data loss factor for the service point values. Refer to AEMO distribution loss factor documents for each financial year to interpret.|
|»» description|string|mandatory||Description of the data loss factor code and value.|
|»» lossValue|string|mandatory||The value associated with the loss factor code.|
|» relatedParticipants|[object]|mandatory||none|
|»» party|string|mandatory||The name of the party/organisation related to this service point.|
|»» role|[Enum](#common-field-types)|mandatory||The role performed by this participant in relation to the service point. Note the details of enumeration values below: <ul><li>`FRMP`: Financially Responsible Market Participant</li><li>`LNSP`: Local Network Service Provider or Embedded Network Manager for child connection points</li><li>`DRSP`: wholesale Demand Response and/or market ancillary Service Provider and note that where it is not relevant for a NMI it will not be included.</li></ul>|
|» location|[CommonPhysicalAddress](#schemacdr-energy-apicommonphysicaladdress)|mandatory||Location of the servicepoint.|
|» meters|[object]|optional||The meters associated with the service point. This may be empty where there are no meters physically installed at the service point.|
|»» meterId|string|mandatory||The meter ID uniquely identifies a meter for a given service point. It is unique in the context of the service point. It is not globally unique.|
|»» specifications|object|mandatory||Technical characteristics of the meter.|
|»»» status|[Enum](#common-field-types)|mandatory||A code to denote the status of the meter. Note the details of enumeration values below: <ul><li>`CURRENT`: Applies when a meter is current and not disconnected</li><li>`DISCONNECTED`: Applies when a meter is present but has been remotely disconnected.</li></ul>|
|»»» installationType|[Enum](#common-field-types)|mandatory||The metering Installation type code indicates whether the metering installation has to be manually read. Note the details of enumeration values below: <ul><li>`BASIC`: Accumulation Meter – Type 6</li><li>`COMMS1`: Interval Meter with communications – Type 1</li><li>`COMMS2`: Interval Meter with communications – Type 2</li><li>`COMMS3`: Interval Meter with communications – Type 3</li><li>`COMMS4`: Interval Meter with communications – Type 4</li><li>`COMMS4C`: CT connected metering installation that meets the minimum services specifications</li><li>`COMMS4D`: Whole current metering installation that meets the minimum services specifications</li><li>`MRAM`: Small customer metering installation – Type 4A</li><li>`MRIM`: Manually Read Interval Meter – Type 5</li><li>`UMCP`: Unmetered Supply – Type 7</li><li>`VICAMI`: A relevant metering installation as defined in clause 9.9C of the NER</li><li>`NCONUML`: Non-contestable unmeter load - Introduced as part of Global Settlement.</li></ul>|
|»»» manufacturer|string|optional||Free text field to identify the manufacturer of the installed meter.|
|»»» model|string|optional||Free text field to identify the meter manufacturer's designation for the meter model.|
|»»» readType|string|optional||Code to denote the method and frequency of Meter Reading. The value is formatted as follows: <ul><li>First Character = Remote (`R`) or Manual (`M`)</li><li>Second Character = Mode: `T` = telephone, `W` = wireless, `P` = powerline, `I` = infra-red, `G` = galvanic, `V` = visual</li><li>Third Character = Frequency of Scheduled Meter Readings: `1` = Twelve times per year, `2` = Six times per year, `3` = Four times per year, `D` = Daily or weekly</li><li>Optional Fourth Character = to identify what interval length the meter is capable of reading. This includes five, 15 and 30 minute granularity as the following: `A` = 5 minute, `B` = 15 minute, `C` = 30 minute, `D` = Cannot convert to 5 minute (i.e. due to metering installation de-energised), `M` = Manually Read Accumulation Meter.</li></ul>For example, <ul><li>`MV3` = Manual, Visual, Quarterly</li><li>`MV3M` = Manual, Visual, Quarterly, Manually Read Accumulation Meter</li><li>`RWDC` = Remote, Wireless, Daily, 30 minutes interval.</li></ul>|
|»»» nextScheduledReadDate|[DateString](#common-field-types)|optional||This date is the next scheduled meter read date (NSRD) if a manual Meter Reading is required.|
|»» registers|[object]|optional||Usage data registers available from the meter. This may be empty where there are no meters physically installed at the service point.|
|»»» registerId|string|mandatory||Unique identifier of the register within this service point. Is not globally unique.|
|»»» registerSuffix|string|optional||Register suffix of the meter register where the meter reads are obtained.|
|»»» averagedDailyLoad|number|optional||The energy delivered through a connection point or metering point over an extended period normalised to a 'per day' basis (kWh). This value is calculated annually.|
|»»» registerConsumptionType|[Enum](#common-field-types)|mandatory||Indicates the consumption type of register.|
|»»» networkTariffCode|string|optional||The Network Tariff Code is a free text field containing a code supplied and published by the local network service provider.|
|»»» unitOfMeasure|string|optional||The unit of measure for data held in this register.|
|»»» timeOfDay|[Enum](#common-field-types)|optional||Code to identify the time validity of register contents.|
|»»» multiplier|number|optional||Multiplier required to take a register value and turn it into a value representing billable energy.|
|»»» controlledLoad|[Boolean](#common-field-types)|optional||Indicates whether the energy recorded by this register is created under a Controlled Load regime.|
|»»» consumptionType|[Enum](#common-field-types)|optional||Actual/Subtractive Indicator. Note the details of enumeration values below: <ul><li>`ACTUAL`: implies volume of energy actually metered between two dates</li><li>`CUMULATIVE`: indicates a meter reading for a specific date. A second Meter Reading is required to determine the consumption between those two Meter Reading dates.</li></ul>|

<h4 id="cdr-energy-api_energyservicepointdetail_enumerated-values-main">Enumerated Values</h4>

|Property|Value|
|---|---|
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


<h3 class="schema-toc" id="cdr-energy-api_schemas_tocSenergyservicepoint">EnergyServicePoint</h3>
<p id="tocSenergyservicepoint" class="orig-anchor"></p>

<p>
  <a id="cdr-energy-api_schema-base_energyservicepoint"></a>
  <a class="schema-anchor" id="schemacdr-energy-apienergyservicepoint"></a>
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

<h3 id="cdr-energy-api_energyservicepoint_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|servicePointId|[EnergyServicePointId](#schemacdr-energy-apienergyservicepointid)|mandatory||Unique identifier for the service point.|
|nationalMeteringId|string|mandatory||The independent ID of the service point, known in the industry as the NMI.|
|servicePointClassification|[Enum](#common-field-types)|mandatory||The classification of the service point as defined in MSATS procedures.|
|servicePointStatus|[Enum](#common-field-types)|mandatory||Code used to indicate the status of the service point. Note the details for the enumeration values below:<ul><li>`ACTIVE`: An active, energised, service point</li><li>`DE_ENERGISED`: The service point exists but is deenergised</li><li>`EXTINCT`: The service point has been permanently decommissioned</li><li>`GREENFIELD`: Applies to a service point that has never been energised</li><li>`OFF_MARKET`: Applies when the service point is no longer settled in the NEM.</li></ul>|
|jurisdictionCode|[Enum](#common-field-types)|mandatory||Jurisdiction code to which the service point belongs.This code defines the jurisdictional rules which apply to the service point. Note the details of enumeration values below:<ul><li>`ALL`: All Jurisdictions</li><li>`ACT`: Australian Capital Territory</li><li>`NEM`: National Electricity Market</li><li>`NSW`: New South Wales</li><li>`QLD`: Queensland</li><li>`SA`: South Australia</li><li>`TAS`: Tasmania</li><li>`VIC`: Victoria.</li></ul>|
|isGenerator|[Boolean](#common-field-types)|optional|`false`|This flag determines whether the energy at this connection point is to be treated as consumer load or as a generating unit (this may include generator auxiliary loads). If absent defaults to `false`. <br>**Note:** Only applicable for scheduled or semischeduled generators, does not indicate on site generation by consumer.|
|validFromDate|[DateString](#common-field-types)|mandatory||The latest start date from which the constituent data sets of this service point became valid.|
|lastUpdateDateTime|[DateTimeString](#common-field-types)|mandatory||The date and time that the information for this service point was modified.|
|consumerProfile|object|optional||none|
|» classification|[Enum](#common-field-types)|optional||A code that defines the consumer class as defined in the National Energy Retail Regulations, or in overriding Jurisdictional instruments.|
|» threshold|[Enum](#common-field-types)|optional||A code that defines the consumption threshold as defined in the National Energy Retail Regulations, or in overriding Jurisdictional instruments. Note the details of enumeration values below: <ul><li>`LOW`: Consumption is less than the 'lower consumption threshold' as defined in the National Energy Retail Regulations</li><li>`MEDIUM`: Consumption is equal to or greater than the 'lower consumption threshold', but less than the 'upper consumption threshold', as defined in the National Energy Retail Regulations</li><li>`HIGH`: Consumption is equal to or greater than the 'upper consumption threshold' as defined in the National Energy Retail Regulations.</li></ul>|

<h4 id="cdr-energy-api_energyservicepoint_enumerated-values-main">Enumerated Values</h4>

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

<h3 class="schema-toc" id="cdr-energy-api_schemas_tocSenergyservicepointid">EnergyServicePointId</h3>
<p id="tocSenergyservicepointid" class="orig-anchor"></p>

<p>
  <a id="cdr-energy-api_schema-base_energyservicepointid"></a>
  <a class="schema-anchor" id="schemacdr-energy-apienergyservicepointid"></a>
</p>

```json
"string"
```

*A unique identifier for an Energy service point, generated according to [CDR ID Permanence](#id-permanence) requirements.*

<h3 id="cdr-energy-api_energyservicepointid_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|*anonymous*|[ASCIIString](#common-field-types)|mandatory||A unique identifier for an Energy service point, generated according to [CDR ID Permanence](#id-permanence) requirements.|

<h3 class="schema-toc" id="cdr-energy-api_schemas_tocScommonphysicaladdress">CommonPhysicalAddress</h3>
<p id="tocScommonphysicaladdress" class="orig-anchor"></p>

<p>
  <a id="cdr-energy-api_schema-base_commonphysicaladdress"></a>
  <a class="schema-anchor" id="schemacdr-energy-apicommonphysicaladdress"></a>
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

<h3 id="cdr-energy-api_commonphysicaladdress_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|addressUType|[Enum](#common-field-types)|mandatory||The type of address object present.|
|simple|[CommonSimpleAddress](#schemacdr-energy-apicommonsimpleaddress)|conditional||Required if _addressUType_ is set to `simple`.|
|paf|[CommonPAFAddress](#schemacdr-energy-apicommonpafaddress)|conditional||Australian address formatted according to the file format defined by the [PAF file format](https://auspost.com.au/content/dam/auspost_corp/media/documents/australia-post-data-guide.pdf). Required if _addressUType_ is set to `paf`.|

<h4 id="cdr-energy-api_commonphysicaladdress_enumerated-values-main">Enumerated Values</h4>

|Property|Value|
|---|---|
|addressUType|paf|
|addressUType|simple|

<h3 class="schema-toc" id="cdr-energy-api_schemas_tocScommonsimpleaddress">CommonSimpleAddress</h3>
<p id="tocScommonsimpleaddress" class="orig-anchor"></p>

<p>
  <a id="cdr-energy-api_schema-base_commonsimpleaddress"></a>
  <a class="schema-anchor" id="schemacdr-energy-apicommonsimpleaddress"></a>
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

<h3 id="cdr-energy-api_commonsimpleaddress_properties">Properties</h3>

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

<h3 class="schema-toc" id="cdr-energy-api_schemas_tocScommonpafaddress">CommonPAFAddress</h3>
<p id="tocScommonpafaddress" class="orig-anchor"></p>

<p>
  <a id="cdr-energy-api_schema-base_commonpafaddress"></a>
  <a class="schema-anchor" id="schemacdr-energy-apicommonpafaddress"></a>
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

<h3 id="cdr-energy-api_commonpafaddress_properties">Properties</h3>

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

<h3 class="schema-toc" id="cdr-energy-api_schemas_tocSresponseerrorlistv2">ResponseErrorListV2</h3>
<p id="tocSresponseerrorlistv2" class="orig-anchor"></p>

<p>
  <a id="cdr-energy-api_schema-base_responseerrorlist"></a>
  <a class="schema-anchor" id="schemacdr-energy-apiresponseerrorlistv2"></a>
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

<h3 id="cdr-energy-api_responseerrorlistv2_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|errors|[[ErrorV2](#schemacdr-energy-apierrorv2)]|mandatory||List of errors.|

<h3 class="schema-toc" id="cdr-energy-api_schemas_tocSerrorv2">ErrorV2</h3>
<p id="tocSerrorv2" class="orig-anchor"></p>

<p>
  <a id="cdr-energy-api_schema-base_error"></a>
  <a class="schema-anchor" id="schemacdr-energy-apierrorv2"></a>
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

<h3 id="cdr-energy-api_errorv2_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|code|string|mandatory||The code of the error encountered. Where the error is specific to the respondent, an application-specific error code, expressed as a string value. If the error is application-specific, the URN code that the specific error extends must be provided in the _meta_ object. Otherwise, the value is the error code URN.|
|title|string|mandatory||A short, human-readable summary of the problem that **MUST NOT** change from occurrence to occurrence of the problem represented by the error code.|
|detail|string|mandatory||A human-readable explanation specific to this occurrence of the problem.|
|meta|object|conditional||Additional data for customised error codes.|
|» urn|string|conditional||The CDR error code URN which the application-specific error code extends. Mandatory if the error _code_ is an application-specific error rather than a standardised error code.|

<h3 class="schema-toc" id="cdr-energy-api_schemas_tocSlinkspaginated">LinksPaginated</h3>
<p id="tocSlinkspaginated" class="orig-anchor"></p>

<p>
  <a id="cdr-energy-api_schema-base_linkspaginated"></a>
  <a class="schema-anchor" id="schemacdr-energy-apilinkspaginated"></a>
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

<h3 id="cdr-energy-api_linkspaginated_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|self|[URIString](#common-field-types)|mandatory||Fully qualified link that generated the current response document.|
|first|[URIString](#common-field-types)|conditional||URI to the first page of this set. Mandatory if this response is not the first page.|
|prev|[URIString](#common-field-types)|conditional||URI to the previous page of this set. Mandatory if this response is not the first page.|
|next|[URIString](#common-field-types)|conditional||URI to the next page of this set. Mandatory if this response is not the last page.|
|last|[URIString](#common-field-types)|conditional||URI to the last page of this set. Mandatory if this response is not the last page.|

<h3 class="schema-toc" id="cdr-energy-api_schemas_tocSmetapaginated">MetaPaginated</h3>
<p id="tocSmetapaginated" class="orig-anchor"></p>

<p>
  <a id="cdr-energy-api_schema-base_metapaginated"></a>
  <a class="schema-anchor" id="schemacdr-energy-apimetapaginated"></a>
</p>

```json
{
  "totalRecords": 0,
  "totalPages": 0
}
```

<h3 id="cdr-energy-api_metapaginated_properties">Properties</h3>

|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|totalRecords|[NaturalNumber](#common-field-types)|mandatory||The total number of records in the full set. See [pagination](#pagination).|
|totalPages|[NaturalNumber](#common-field-types)|mandatory||The total number of pages in the full set. See [pagination](#pagination).|