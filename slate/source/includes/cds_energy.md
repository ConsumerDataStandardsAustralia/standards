

## Get Generic Plans

<a id="opIdlistPlans"></a>

> Code samples

```http
GET /energy/plans HTTP/1.1

Accept: application/json
x-v: string
x-min-v: string
x-fapi-interaction-id: string

```

```javascript
var headers = {
  'Accept':'application/json',
  'x-v':'string',
  'x-min-v':'string',
  'x-fapi-interaction-id':'string'

};

$.ajax({
  url: '/energy/plans',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`GET /energy/plans`

Obtain a list of energy plans that are currently offered to the market.

Note that the results returned by this end point are expected to be ordered in descending order according to `lastUpdated`.

###Endpoint Version
|   |  |
|---|--|
|Version|**undefined**

<h3 id="get-generic-plans-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type|query|string|optional|Used to filter results on the type field.  Any one of the valid values for this field can be supplied plus 'ALL'.  If absent defaults to 'ALL'|
|fuelType|query|string|optional|Used to filter results on the fuelType field.  Any one of the valid values for this field can be supplied plus 'ALL'.  If absent defaults to 'ALL'|
|effective|query|string|optional|Allows for the filtering of plans based on whether the current time is within the period of time defined as effective by the effectiveFrom and effectiveTo fields. Valid values are ‘CURRENT’, ‘FUTURE’ and ‘ALL’. If absent defaults to 'CURRENT'|
|updated-since|query|[DateTimeString](#common-field-types)|optional|Only include plans that have been updated after the specified date and time.  If absent defaults to include all plans|
|brand|query|string|optional|Used to filter results on the brand field.  If absent defaults to include all plans|
|page|query|number|optional|Page of results to request (standard pagination)|
|page-size|query|number|optional|Page size to request.  Default is 25 (standard pagination)|
|x-v|header|string|mandatory|Version of the API end point requested by the client. Must be set to a positive integer. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If the value of [x-min-v](#request-headers) is equal to or higher than the value of [x-v](#request-headers) then the [x-min-v](#request-headers) header should be treated as absent. If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable. See [HTTP Headers](#request-headers)|
|x-min-v|header|string|optional|Minimum version of the API end point requested by the client. Must be set to a positive integer if provided. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable.|
|x-fapi-interaction-id|header|string|optional|An [RFC4122](https://tools.ietf.org/html/rfc4122) UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a [RFC4122] UUID value is required to be provided in the response header to track the interaction.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|STANDING|
|type|MARKET|
|type|REGULATED|
|type|ALL|
|fuelType|ELECTRICITY|
|fuelType|GAS|
|fuelType|DUAL|
|fuelType|ALL|
|effective|CURRENT|
|effective|FUTURE|
|effective|ALL|

> Example responses

> 200 Response

```json
{
  "data": {
    "plans": [
      {
        "planId": "string",
        "effectiveFrom": "string",
        "effectiveTo": "string",
        "lastUpdated": "string",
        "displayName": "string",
        "description": "string",
        "type": "STANDING",
        "fuelType": "ELECTRICITY",
        "brand": "string",
        "brandName": "string",
        "applicationUri": "string",
        "additionalInformation": {
          "overviewUri": "string",
          "termsUri": "string",
          "eligibilityUri": "string",
          "pricingUri": "string",
          "bundleUri": "string"
        },
        "customerType": "RESIDENTIAL",
        "geography": {
          "excludedPostcodes": [
            "string"
          ],
          "includedPostcodes": [
            "string"
          ]
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

<h3 id="get-generic-plans-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[EnergyPlanListResponse](#schemacdr-energy-apienergyplanlistresponse)|

  
    <aside class="success">
This operation does not require authentication
</aside>

  

## Get Generic Plan Detail

<a id="opIdgetPlan"></a>

> Code samples

```http
GET /energy/plans/{planId} HTTP/1.1

Accept: application/json
x-v: string
x-min-v: string
x-fapi-interaction-id: string

```

```javascript
var headers = {
  'Accept':'application/json',
  'x-v':'string',
  'x-min-v':'string',
  'x-fapi-interaction-id':'string'

};

$.ajax({
  url: '/energy/plans/{planId}',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`GET /energy/plans/{planId}`

Obtain detailed information on a single energy plan offered openly to the market

###Endpoint Version
|   |  |
|---|--|
|Version|**undefined**

<h3 id="get-generic-plan-detail-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|planId|path|string|mandatory|ID of the specific plan requested|
|x-v|header|string|mandatory|Version of the API end point requested by the client. Must be set to a positive integer. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If the value of [x-min-v](#request-headers) is equal to or higher than the value of [x-v](#request-headers) then the [x-min-v](#request-headers) header should be treated as absent. If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable. See [HTTP Headers](#request-headers)|
|x-min-v|header|string|optional|Minimum version of the API end point requested by the client. Must be set to a positive integer if provided. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable.|
|x-fapi-interaction-id|header|string|optional|An [RFC4122](https://tools.ietf.org/html/rfc4122) UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a [RFC4122] UUID value is required to be provided in the response header to track the interaction.|

> Example responses

> 200 Response

```json
{
  "data": {
    "planId": "string",
    "effectiveFrom": "string",
    "effectiveTo": "string",
    "lastUpdated": "string",
    "displayName": "string",
    "description": "string",
    "type": "STANDING",
    "fuelType": "ELECTRICITY",
    "brand": "string",
    "brandName": "string",
    "applicationUri": "string",
    "additionalInformation": {
      "overviewUri": "string",
      "termsUri": "string",
      "eligibilityUri": "string",
      "pricingUri": "string",
      "bundleUri": "string"
    },
    "customerType": "RESIDENTIAL",
    "geography": {
      "excludedPostcodes": [
        "string"
      ],
      "includedPostcodes": [
        "string"
      ]
    },
    "meteringCharges": [
      {
        "displayName": "string",
        "description": "string",
        "minimumValue": "string",
        "maximumValue": "string",
        "period": "string"
      }
    ],
    "gasContract": {
      "additionalFeeInformation": "string",
      "pricingModel": "SINGLE_RATE",
      "termType": "1_YEAR",
      "timeZone": "LOCAL",
      "benefitPeriod": "string",
      "terms": "string",
      "isFixed": true,
      "variation": "string",
      "onExpiryDescription": "string",
      "meterTypes": [
        "string"
      ],
      "coolingOffDays": "string",
      "billFrequency": [
        "string"
      ],
      "paymentOption": [
        "PAPER_BILL"
      ],
      "intrinsicGreenPower": {
        "greenPercentage": "string"
      },
      "controlledLoad": {
        "displayName": "string",
        "description": "string",
        "dailyCharge": "string",
        "period": "string",
        "rates": [
          {
            "unitPrice": "string",
            "volume": 0
          }
        ]
      },
      "incentives": [
        {
          "displayName": "string",
          "description": "string",
          "category": "GIFT",
          "eligibility": "string"
        }
      ],
      "discounts": [
        {
          "displayName": "string",
          "description": "string",
          "type": "CONDITIONAL",
          "category": "PAY_ON_TIME",
          "endDate": "string",
          "methodUType": "percentOfBill",
          "percentOfBill": {
            "rate": "string"
          },
          "percentOfUse": {
            "rate": "string"
          },
          "fixedAmount": {
            "amount": "string"
          },
          "percentOverThreshold": {
            "rate": "string",
            "usageAmount": "string"
          }
        }
      ],
      "greenPowerCharges": [
        {
          "displayName": "string",
          "description": "string",
          "scheme": "GREENPOWER",
          "type": "FIXED_PER_DAY",
          "tiers": [
            {
              "percentGreen": "string",
              "rate": "string",
              "amount": "string"
            }
          ]
        }
      ],
      "eligibility": [
        {
          "type": "EXISTING_CUST",
          "information": "string",
          "description": "string"
        }
      ],
      "fees": [
        {
          "type": "EXIT",
          "term": "FIXED",
          "amount": "string",
          "rate": "string",
          "description": "string"
        }
      ],
      "solarFeedInTariff": [
        {
          "displayName": "string",
          "description": "string",
          "scheme": "PREMIUM",
          "payerType": "GOVERNMENT",
          "tariffUType": "GOVERNMENT",
          "singleTariff": {
            "amount": "string"
          },
          "timeVaryingTariffs": {
            "type": "PEAK",
            "amount": "string",
            "timeVariations": [
              {
                "days": {
                  "weekdays": true,
                  "weekend": true
                },
                "startTime": "string",
                "endTime": "string"
              }
            ]
          }
        }
      ],
      "tariffPeriod": [
        {
          "displayName": "string",
          "startDate": "string",
          "endDate": "string",
          "dailySupplyCharges": "string",
          "rateBlockUType": "singleRate",
          "singleRate": {
            "displayName": "string",
            "description": "string",
            "generalUnitPrice": "string",
            "rates": [
              {
                "unitPrice": "string",
                "volume": 0
              }
            ],
            "period": "string"
          },
          "timeOfUseRates": [
            {
              "displayName": "string",
              "description": "string",
              "rates": [
                {
                  "unitPrice": "string",
                  "volume": 0
                }
              ],
              "timeOfUse": [
                {
                  "days": [
                    "SUNDAY"
                  ],
                  "startTime": "string",
                  "endTime": "string"
                }
              ],
              "type": "PEAK"
            }
          ],
          "demandCharges": [
            {
              "displayName": "string",
              "description": "string",
              "amount": "string",
              "startTime": "string",
              "endTime": "string",
              "days": {
                "weekdays": true,
                "saturday": true,
                "sunday": true
              },
              "minDemand": "string",
              "maxDemand": "string",
              "measurementPeriod": "DAY",
              "chargePeriod": "DAY"
            }
          ]
        }
      ]
    },
    "electricityContract": {
      "additionalFeeInformation": "string",
      "pricingModel": "SINGLE_RATE",
      "termType": "1_YEAR",
      "timeZone": "LOCAL",
      "benefitPeriod": "string",
      "terms": "string",
      "isFixed": true,
      "variation": "string",
      "onExpiryDescription": "string",
      "meterTypes": [
        "string"
      ],
      "coolingOffDays": "string",
      "billFrequency": [
        "string"
      ],
      "paymentOption": [
        "PAPER_BILL"
      ],
      "intrinsicGreenPower": {
        "greenPercentage": "string"
      },
      "controlledLoad": {
        "displayName": "string",
        "description": "string",
        "dailyCharge": "string",
        "period": "string",
        "rates": [
          {
            "unitPrice": "string",
            "volume": 0
          }
        ]
      },
      "incentives": [
        {
          "displayName": "string",
          "description": "string",
          "category": "GIFT",
          "eligibility": "string"
        }
      ],
      "discounts": [
        {
          "displayName": "string",
          "description": "string",
          "type": "CONDITIONAL",
          "category": "PAY_ON_TIME",
          "endDate": "string",
          "methodUType": "percentOfBill",
          "percentOfBill": {
            "rate": "string"
          },
          "percentOfUse": {
            "rate": "string"
          },
          "fixedAmount": {
            "amount": "string"
          },
          "percentOverThreshold": {
            "rate": "string",
            "usageAmount": "string"
          }
        }
      ],
      "greenPowerCharges": [
        {
          "displayName": "string",
          "description": "string",
          "scheme": "GREENPOWER",
          "type": "FIXED_PER_DAY",
          "tiers": [
            {
              "percentGreen": "string",
              "rate": "string",
              "amount": "string"
            }
          ]
        }
      ],
      "eligibility": [
        {
          "type": "EXISTING_CUST",
          "information": "string",
          "description": "string"
        }
      ],
      "fees": [
        {
          "type": "EXIT",
          "term": "FIXED",
          "amount": "string",
          "rate": "string",
          "description": "string"
        }
      ],
      "solarFeedInTariff": [
        {
          "displayName": "string",
          "description": "string",
          "scheme": "PREMIUM",
          "payerType": "GOVERNMENT",
          "tariffUType": "GOVERNMENT",
          "singleTariff": {
            "amount": "string"
          },
          "timeVaryingTariffs": {
            "type": "PEAK",
            "amount": "string",
            "timeVariations": [
              {
                "days": {
                  "weekdays": true,
                  "weekend": true
                },
                "startTime": "string",
                "endTime": "string"
              }
            ]
          }
        }
      ],
      "tariffPeriod": [
        {
          "displayName": "string",
          "startDate": "string",
          "endDate": "string",
          "dailySupplyCharges": "string",
          "rateBlockUType": "singleRate",
          "singleRate": {
            "displayName": "string",
            "description": "string",
            "generalUnitPrice": "string",
            "rates": [
              {
                "unitPrice": "string",
                "volume": 0
              }
            ],
            "period": "string"
          },
          "timeOfUseRates": [
            {
              "displayName": "string",
              "description": "string",
              "rates": [
                {
                  "unitPrice": "string",
                  "volume": 0
                }
              ],
              "timeOfUse": [
                {
                  "days": [
                    "SUNDAY"
                  ],
                  "startTime": "string",
                  "endTime": "string"
                }
              ],
              "type": "PEAK"
            }
          ],
          "demandCharges": [
            {
              "displayName": "string",
              "description": "string",
              "amount": "string",
              "startTime": "string",
              "endTime": "string",
              "days": {
                "weekdays": true,
                "saturday": true,
                "sunday": true
              },
              "minDemand": "string",
              "maxDemand": "string",
              "measurementPeriod": "DAY",
              "chargePeriod": "DAY"
            }
          ]
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

<h3 id="get-generic-plan-detail-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[EnergyPlanResponse](#schemacdr-energy-apienergyplanresponse)|

  
    <aside class="success">
This operation does not require authentication
</aside>

  

## Get Service Points

<a id="opIdlistServicePoints"></a>

> Code samples

```http
GET /energy/electricity/servicepoints HTTP/1.1

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
  url: '/energy/electricity/servicepoints',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`GET /energy/electricity/servicepoints`

Obtain a list of service points owned by the customer that has authorised the current session

###Endpoint Version
|   |  |
|---|--|
|Version|**undefined**

<h3 id="get-service-points-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|number|optional|Page of results to request (standard pagination)|
|page-size|query|number|optional|Page size to request.  Default is 25 (standard pagination)|
|x-v|header|string|mandatory|Version of the API end point requested by the client. Must be set to a positive integer. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If the value of [x-min-v](#request-headers) is equal to or higher than the value of [x-v](#request-headers) then the [x-min-v](#request-headers) header should be treated as absent. If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable. See [HTTP Headers](#request-headers)|
|x-min-v|header|string|optional|Minimum version of the API end point requested by the client. Must be set to a positive integer if provided. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable.|
|x-fapi-interaction-id|header|string|optional|An [RFC4122](https://tools.ietf.org/html/rfc4122) UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a [RFC4122] UUID value is required to be provided in the response header to track the interaction.|
|x-fapi-auth-date|header|string|optional|The time when the customer last logged in to the data recipient. Required for all resource calls (customer present and unattended). Not to be included for unauthenticated calls.|
|x-fapi-customer-ip-address|header|string|optional|The customer's original IP address if the customer is currently logged in to the data recipient. The presence of this header indicates that the API is being called in a customer present context. Not to be included for unauthenticated calls.|
|x-cds-client-headers|header|[Base64](#common-field-types)|optional|The customer's original standard http headers [Base64](#common-field-types) encoded, including the original User Agent header, if the customer is currently logged in to the data recipient. Mandatory for customer present calls.  Not required for unattended or unauthenticated calls.|

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

<h3 id="get-service-points-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|Inline|

<h3 id="get-service-points-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Description|
|---|---|---|---|
|» data|object|mandatory|none|
|»» servicePoints|[object]|mandatory|none|
|»»» servicePointId|string|mandatory|The ID of the service point for use in the CDR APIs.  Created according to the rules for ID permanence|
|»»» nationalMeteringId|string|mandatory|The independent ID of the service point, known in the industry as the NMI|
|»»» servicePointClassification|string|mandatory|The classification of the service point as defined in MSATS procedures|
|»»» servicePointStatus|string|mandatory|Code used to indicate the status of the service point|
|»»» jurisdictionCode|string|mandatory|Jurisdiction code to which the service point belongs.This code defines the jurisdictional rules which apply to the service point|
|»»» isGenerator|boolean|optional|This flag determines whether the energy at this connection point is to be treated as consumer load or as a generating unit(this may include generator auxiliary loads).If absent defaults to false|
|»»» validFromDate|[DateString](#common-field-types)|mandatory|The start date from which this service point first became valid|
|»»» lastUpdateDateTime|[DateTimeString](#common-field-types)|mandatory|The date and time that the information for this service point was modified|
|»»» consumerProfile|object|optional|none|
|»»»» classification|string|optional|A code that defines the consumer class as defined in the National Energy Retail Regulations, or in overriding Jurisdictional instruments|
|»»»» threshold|any|optional|A code that defines the consumption threshold as defined in the National Energy Retail Regulations, or in overriding Jurisdictional instruments|
|»»» links|[LinksPaginated](#schemacdr-energy-apilinkspaginated)|mandatory|none|
|»»»» self|[URIString](#common-field-types)|mandatory|Fully qualified link that generated the current response document|
|»»»» first|[URIString](#common-field-types)|conditional|URI to the first page of this set. Mandatory if this response is not the first page|
|»»»» prev|[URIString](#common-field-types)|conditional|URI to the previous page of this set. Mandatory if this response is not the first page|
|»»»» next|[URIString](#common-field-types)|conditional|URI to the next page of this set. Mandatory if this response is not the last page|
|»»»» last|[URIString](#common-field-types)|conditional|URI to the last page of this set. Mandatory if this response is not the last page|
|»»» meta|[MetaPaginated](#schemacdr-energy-apimetapaginated)|mandatory|none|
|»»»» totalRecords|[NaturalNumber](#common-field-types)|mandatory|The total number of records in the full set. See [pagination](#pagination).|
|»»»» totalPages|[NaturalNumber](#common-field-types)|mandatory|The total number of pages in the full set. See [pagination](#pagination).|

#### Enumerated Values

|Property|Value|
|---|---|
|servicePointClassification|EXTERNAL_PROFILE|
|servicePointClassification|GENERATOR|
|servicePointClassification|INTERCONNECTOR|
|servicePointClassification|LARGE|
|servicePointClassification|SAMPLE|
|servicePointClassification|SMALL|
|servicePointClassification|WHOLESALE|
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
|classification|BULK|
|classification|XBOUNDARY|
|classification|NCONUML|
|classification|NREG|
|classification|DWHOLSAL|
|threshold|LOW|
|threshold|MEDIUM|
|threshold|HIGH|

  
    <aside class="success">
This operation does not require authentication
</aside>

  

## Get Service Point Detail

<a id="opIdgetServicePoint"></a>

> Code samples

```http
GET /energy/electricity/servicepoints/{servicePointId} HTTP/1.1

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
  url: '/energy/electricity/servicepoints/{servicePointId}',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`GET /energy/electricity/servicepoints/{servicePointId}`

Obtain a list of service points owned by the customer that has authorised the current session

###Endpoint Version
|   |  |
|---|--|
|Version|**undefined**

<h3 id="get-service-point-detail-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|servicePointId|path|string|mandatory|ID of the specific service point requested.  This is a tokenised ID previous obtained from the Service Point List Data end point.  Note that it is not a nationalMeteringId.|
|x-v|header|string|mandatory|Version of the API end point requested by the client. Must be set to a positive integer. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If the value of [x-min-v](#request-headers) is equal to or higher than the value of [x-v](#request-headers) then the [x-min-v](#request-headers) header should be treated as absent. If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable. See [HTTP Headers](#request-headers)|
|x-min-v|header|string|optional|Minimum version of the API end point requested by the client. Must be set to a positive integer if provided. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable.|
|x-fapi-interaction-id|header|string|optional|An [RFC4122](https://tools.ietf.org/html/rfc4122) UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a [RFC4122] UUID value is required to be provided in the response header to track the interaction.|
|x-fapi-auth-date|header|string|optional|The time when the customer last logged in to the data recipient. Required for all resource calls (customer present and unattended). Not to be included for unauthenticated calls.|
|x-fapi-customer-ip-address|header|string|optional|The customer's original IP address if the customer is currently logged in to the data recipient. The presence of this header indicates that the API is being called in a customer present context. Not to be included for unauthenticated calls.|
|x-cds-client-headers|header|[Base64](#common-field-types)|optional|The customer's original standard http headers [Base64](#common-field-types) encoded, including the original User Agent header, if the customer is currently logged in to the data recipient. Mandatory for customer present calls.  Not required for unattended or unauthenticated calls.|

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
    "lastUpdateDateTime": "string",
    "creationDateTime": "string",
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
        "role": "FRMP",
        "location": {
          "addressUType": "simple",
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
      }
    ],
    "meters": {
      "meterId": "string",
      "specifications": {
        "status": "CURRENT",
        "installationType": "BASIC",
        "manufacturer": "string",
        "model": "string",
        "readType": "string"
      },
      "streams": {
        "streamId": "string",
        "averagedDailyLoad": 0,
        "registerConsumptionType": "INTERVAL",
        "networkTariffType": "string",
        "unitOfMeasure": "string",
        "timeOfDay": "string",
        "multiplier": 0,
        "controlledLoad": "string",
        "consumptionType": "ACTUAL"
      }
    }
  },
  "links": {
    "self": "string"
  },
  "meta": {}
}
```

<h3 id="get-service-point-detail-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|Inline|

<h3 id="get-service-point-detail-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Description|
|---|---|---|---|
|» data|object|mandatory|none|
|»» servicePointId|string|mandatory|The ID of the service point for use in the CDR APIs.  Created according to the rules for ID permanence|
|»» nationalMeteringId|string|mandatory|The independent ID of the service point, known in the industry as the NMI|
|»» servicePointClassification|string|mandatory|The classification of the service point as defined in MSATS procedures|
|»» servicePointStatus|string|mandatory|Code used to indicate the status of the service point|
|»» jurisdictionCode|string|mandatory|Jurisdiction code to which the service point belongs.This code defines the jurisdictional rules which apply to the service point|
|»» isGenerator|boolean|optional|This flag determines whether the energy at this connection point is to be treated as consumer load or as a generating unit(this may include generator auxiliary loads).If absent defaults to false|
|»» lastUpdateDateTime|[DateTimeString](#common-field-types)|mandatory|The date and time that the information for this service point was modified|
|»» creationDateTime|[DateTimeString](#common-field-types)|optional|The date and time that this service point was created as a data entity|
|»» consumerProfile|object|optional|none|
|»»» classification|string|optional|A code that defines the consumer class as defined in the National Energy Retail Regulations, or in overriding Jurisdictional instruments|
|»»» threshold|any|optional|A code that defines the consumption threshold as defined in the National Energy Retail Regulations, or in overriding Jurisdictional instruments|
|»» distributionLossFactor|object|mandatory|none|
|»»» code|string|mandatory|A code used to identify data loss factor for the service point values.  Refer to AEMO distribution loss factor documents for each financial year to interpret|
|»»» description|string|mandatory|Description of the data loss factor code and value|
|»»» lossValue|string|mandatory|The value associated with the loss factor code|
|»» relatedParticipants|[object]|mandatory|none|
|»»» party|string|mandatory|An identifier of the party related to this service point|
|»»» role|string|mandatory|The role performed by this participant in relation to the service point|
|»»» location|object|mandatory|none|
|»»»» addressUType|string|mandatory|The type of address object present|
|»»»» simple|object|conditional|The address of the service point.  Mandatory if addressUType is set to simple|
|»»»»» mailingName|string|optional|Name of the individual or business formatted for inclusion in an address used for physical mail|
|»»»»» addressLine1|string|mandatory|First line of the standard address object|
|»»»»» addressLine2|string|optional|Second line of the standard address object|
|»»»»» addressLine3|string|optional|Third line of the standard address object|
|»»»»» postcode|string|conditional|Mandatory for Australian addresses|
|»»»»» city|string|mandatory|Name of the city or locality|
|»»»»» state|string|mandatory|Free text if the country is not Australia. If country is Australia then must be one of the values defined by the [State Type Abbreviation](https://auspost.com.au/content/dam/auspost_corp/media/documents/australia-post-data-guide.pdf) in the PAF file format. NSW, QLD, VIC, NT, WA, SA, TAS, ACT, AAT|
|»»»»» country|[ExternalRef](#common-field-types)|optional|A valid [ISO 3166 Alpha-3](https://www.iso.org/iso-3166-country-codes.html) country code. Australia (AUS) is assumed if country is not present.|
|»»»» paf|object|conditional|The address of the service point.  Mandatory if addressUType is set to paf. Formatted according to the file format defined by the [PAF file format](https://auspost.com.au/content/dam/auspost_corp/media/documents/australia-post-data-guide.pdf)|
|»»»»» dpid|string|optional|Unique identifier for an address as defined by Australia Post.  Also known as Delivery Point Identifier|
|»»»»» thoroughfareNumber1|[PositiveInteger](#common-field-types)|optional|Thoroughfare number for a property (first number in a property ranged address)|
|»»»»» thoroughfareNumber1Suffix|string|optional|Suffix for the thoroughfare number. Only relevant is thoroughfareNumber1 is populated|
|»»»»» thoroughfareNumber2|[PositiveInteger](#common-field-types)|optional|Second thoroughfare number (only used if the property has a ranged address eg 23-25)|
|»»»»» thoroughfareNumber2Suffix|string|optional|Suffix for the second thoroughfare number. Only relevant is thoroughfareNumber2 is populated|
|»»»»» flatUnitType|string|optional|Type of flat or unit for the address|
|»»»»» flatUnitNumber|string|optional|Unit number (including suffix, if applicable)|
|»»»»» floorLevelType|string|optional|Type of floor or level for the address|
|»»»»» floorLevelNumber|string|optional|Floor or level number (including alpha characters)|
|»»»»» lotNumber|string|optional|Allotment number for the address|
|»»»»» buildingName1|string|optional|Building/Property name 1|
|»»»»» buildingName2|string|optional|Building/Property name 2|
|»»»»» streetName|string|optional|The name of the street|
|»»»»» streetType|string|optional|The street type. Valid enumeration defined by Australia Post PAF code file|
|»»»»» streetSuffix|string|optional|The street type suffix. Valid enumeration defined by Australia Post PAF code file|
|»»»»» postalDeliveryType|string|optional|Postal delivery type. (eg. PO BOX). Valid enumeration defined by Australia Post PAF code file|
|»»»»» postalDeliveryNumber|[PositiveInteger](#common-field-types)|optional|Postal delivery number if the address is a postal delivery type|
|»»»»» postalDeliveryNumberPrefix|string|optional|Postal delivery number prefix related to the postal delivery number|
|»»»»» postalDeliveryNumberSuffix|string|optional|Postal delivery number suffix related to the postal delivery number|
|»»»»» localityName|string|mandatory|Full name of locality|
|»»»»» postcode|string|mandatory|Postcode for the locality|
|»»»»» state|string|mandatory|State in which the address belongs. Valid enumeration defined by Australia Post PAF code file [State Type Abbreviation](https://auspost.com.au/content/dam/auspost_corp/media/documents/australia-post-data-guide.pdf). NSW, QLD, VIC, NT, WA, SA, TAS, ACT, AAT|
|»»»» meters|object|mandatory|none|
|»»»»» meterId|string|mandatory|The meter ID uniquely identifies a meter for a given service point.  Is unique in the context of the service point.  Is not globally unique|
|»»»»» specifications|object|mandatory|Technical characteristics of the meter|
|»»»»»» status|string|mandatory|A code to denote the status of the meter|
|»»»»»» installationType|string|mandatory|The metering Installation type code indicates whether the metering installation has to be manually read|
|»»»»»» manufacturer|string|optional|Free text field to identify the manufacturer of the installed meter|
|»»»»»» model|string|optional|Free text field to identify the meter manufacturer’s designation for the meter model|
|»»»»»» readType|string|optional|Code to denote the method and frequency of Meter Reading|
|»»»»» streams|object|mandatory|Usage data streams available from the meter|
|»»»»»» streamId|string|mandatory|Unique identifier of the stream within this service point.  Is not globally unique|
|»»»»»» averagedDailyLoad|number|optional|The energy delivered through a connection point or metering point over an extended period normalised to a 'per day' basis (kWh)|
|»»»»»» registerConsumptionType|string|mandatory|Indicates the consumption type of register|
|»»»»»» networkTariffType|string|mandatory|The Network Tariff Code is a free text field containing a code supplied and published by the local network service provider|
|»»»»»» unitOfMeasure|string|optional|The unit of measure for data held in this register|
|»»»»»» timeOfDay|string|optional|Code to identify the time validity of register contents|
|»»»»»» multiplier|number|optional|Multiplier required to take a register value and turn it into a value representing billable energy|
|»»»»»» controlledLoad|string|optional|Indicates whether the energy recorded by this register is created under a Controlled Load regime. ControlledLoad field will have 'No' if register does not relate to a Controlled Load.  If the register relates to a Controlled Load, it should contain a description of the Controlled Load regime.|
|»»»»»» consumptionType|string|optional|Actual/Subtractive Indicator|
|»»»»» links|[Links](#schemacdr-energy-apilinks)|mandatory|none|
|»»»»»» self|[URIString](#common-field-types)|mandatory|Fully qualified link that generated the current response document|
|»»»»» meta|[Meta](#schemacdr-energy-apimeta)|mandatory|none|

#### Enumerated Values

|Property|Value|
|---|---|
|servicePointClassification|EXTERNAL_PROFILE|
|servicePointClassification|GENERATOR|
|servicePointClassification|INTERCONNECTOR|
|servicePointClassification|LARGE|
|servicePointClassification|SAMPLE|
|servicePointClassification|SMALL|
|servicePointClassification|WHOLESALE|
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
|role|LR|
|role|MDP|
|role|MPB|
|role|MPC|
|role|NEMM|
|role|NSP2|
|role|ROLR|
|role|RP|
|addressUType|simple|
|addressUType|paf|
|status|CURRENT|
|status|REMOVED|
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
|registerConsumptionType|NON_MARKET_ACTIVE_IMPORT|
|registerConsumptionType|NON_MARKET_ACTIVE|
|registerConsumptionType|NON_MARKET_REACTIVE_IMPORT|
|registerConsumptionType|NON_MARKET_REACTIVE|
|consumptionType|ACTUAL|
|consumptionType|CUMULATIVE|

  
    <aside class="success">
This operation does not require authentication
</aside>

  

## Get Usage For Service Point

<a id="opIdgetUsageForServicePoint"></a>

> Code samples

```http
GET /energy/electricity/servicepoints/{servicePointId}/usage HTTP/1.1

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
  url: '/energy/electricity/servicepoints/{servicePointId}/usage',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`GET /energy/electricity/servicepoints/{servicePointId}/usage`

Obtain a list of electricity usage data from a particular service point

###Endpoint Version
|   |  |
|---|--|
|Version|**undefined**

<h3 id="get-usage-for-service-point-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|servicePointId|path|string|mandatory|ID of the specific service point requested.  This is a tokenised ID previous obtained from the Service Point List Data end point.  Note that it is not a nationalMeteringId.|
|page|query|number|optional|Page of results to request (standard pagination)|
|page-size|query|number|optional|Page size to request.  Default is 25 (standard pagination)|
|x-v|header|string|mandatory|Version of the API end point requested by the client. Must be set to a positive integer. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If the value of [x-min-v](#request-headers) is equal to or higher than the value of [x-v](#request-headers) then the [x-min-v](#request-headers) header should be treated as absent. If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable. See [HTTP Headers](#request-headers)|
|x-min-v|header|string|optional|Minimum version of the API end point requested by the client. Must be set to a positive integer if provided. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable.|
|x-fapi-interaction-id|header|string|optional|An [RFC4122](https://tools.ietf.org/html/rfc4122) UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a [RFC4122] UUID value is required to be provided in the response header to track the interaction.|
|x-fapi-auth-date|header|string|optional|The time when the customer last logged in to the data recipient. Required for all resource calls (customer present and unattended). Not to be included for unauthenticated calls.|
|x-fapi-customer-ip-address|header|string|optional|The customer's original IP address if the customer is currently logged in to the data recipient. The presence of this header indicates that the API is being called in a customer present context. Not to be included for unauthenticated calls.|
|x-cds-client-headers|header|[Base64](#common-field-types)|optional|The customer's original standard http headers [Base64](#common-field-types) encoded, including the original User Agent header, if the customer is currently logged in to the data recipient. Mandatory for customer present calls.  Not required for unattended or unauthenticated calls.|

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
        "meterSerial": "string",
        "readStartDate": "string",
        "readEndDate": "string",
        "unitOfMeasure": "KWH",
        "readUType": "basicRead",
        "basicRead": {
          "quality": "ACTUAL",
          "value": 0
        },
        "intervalRead": {
          "readIntervalLength": "string",
          "aggregateValue": 0,
          "intervalReads": [
            {
              "quality": "ACTUAL",
              "value": 0
            }
          ]
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

<h3 id="get-usage-for-service-point-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|Inline|

<h3 id="get-usage-for-service-point-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Description|
|---|---|---|---|
|» data|object|mandatory|none|
|»» reads|[object]|mandatory|Array of meter reads|
|»»» servicePointId|string|mandatory|Tokenised ID of the service point to be used for referring to the service point in the CDR API suite.  To be created in accordance with CDR ID permanence requirements|
|»»» registerId|string|optional|Register ID of the meter register where the meter reads are obtained|
|»»» registerSuffix|string|mandatory|Register suffix of the meter register where the meter reads are obtained|
|»»» meterSerial|string|optional|Meter serial number as it appears in customer’s bill|
|»»» readStartDate|[DateString](#common-field-types)|mandatory|Date time when the meter reads start|
|»»» readEndDate|[DateString](#common-field-types)|optional|Date time when the meter reads end.  If absent then assumed to be equal to readStartDate.  In this case the entry represents data for a single date specified by readStartDate|
|»»» unitOfMeasure|string|optional|Unit of measure of the meter reads. If absent then assumed to be KWH|
|»»» readUType|string|mandatory|Specify the type of the meter read data|
|»»» basicRead|object|conditional|Mandatory if readUType is set to basicRead|
|»»»» quality|string|optional|The quality of the read taken.  If absent then assumed to be ACTUAL|
|»»»» value|number|mandatory|Meter read value.  If positive then it means consumption, if negative it means export|
|»»» intervalRead|object|conditional|Mandatory if readUType is set to intervalRead|
|»»»» readIntervalLength|[PositiveInteger](#common-field-types)|optional|Read interval length in minutes|
|»»»» aggregateValue|number|mandatory|The aggregate sum of the interval read values.  If positive then it means net consumption, if negative it means net export from the premise|
|»»»» intervalReads|[object]|mandatory|Array of reads with each element indicating the read for the interval specified by readIntervalLength beginning at midnight of readStartDate|
|»»»»» quality|string|optional|The quality of the read taken.  If absent then assumed to be ACTUAL|
|»»»»» value|number|mandatory|Interval value.  If positive then it means consumption, if negative it means export|
|»»»» links|[LinksPaginated](#schemacdr-energy-apilinkspaginated)|mandatory|none|
|»»»»» self|[URIString](#common-field-types)|mandatory|Fully qualified link that generated the current response document|
|»»»»» first|[URIString](#common-field-types)|conditional|URI to the first page of this set. Mandatory if this response is not the first page|
|»»»»» prev|[URIString](#common-field-types)|conditional|URI to the previous page of this set. Mandatory if this response is not the first page|
|»»»»» next|[URIString](#common-field-types)|conditional|URI to the next page of this set. Mandatory if this response is not the last page|
|»»»»» last|[URIString](#common-field-types)|conditional|URI to the last page of this set. Mandatory if this response is not the last page|
|»»»» meta|[MetaPaginated](#schemacdr-energy-apimetapaginated)|mandatory|none|
|»»»»» totalRecords|[NaturalNumber](#common-field-types)|mandatory|The total number of records in the full set. See [pagination](#pagination).|
|»»»»» totalPages|[NaturalNumber](#common-field-types)|mandatory|The total number of pages in the full set. See [pagination](#pagination).|

#### Enumerated Values

|Property|Value|
|---|---|
|unitOfMeasure|KWH|
|unitOfMeasure|GWH|
|readUType|basicRead|
|readUType|intervalRead|
|quality|ACTUAL|
|quality|SUBSTITUTE|
|quality|FINAL_SUBSTITUTE|
|quality|ACTUAL|
|quality|SUBSTITUTE|
|quality|FINAL_SUBSTITUTE|

  
    <aside class="success">
This operation does not require authentication
</aside>

  

## Get Bulk Usage

<a id="opIdlistUsageBulk"></a>

> Code samples

```http
GET /energy/electricity/servicepoints/usage HTTP/1.1

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
  url: '/energy/electricity/servicepoints/usage',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`GET /energy/electricity/servicepoints/usage`

Obtain usage data for all service points associated with the customer

###Endpoint Version
|   |  |
|---|--|
|Version|**undefined**

<h3 id="get-bulk-usage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|number|optional|Page of results to request (standard pagination)|
|page-size|query|number|optional|Page size to request.  Default is 25 (standard pagination)|
|x-v|header|string|mandatory|Version of the API end point requested by the client. Must be set to a positive integer. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If the value of [x-min-v](#request-headers) is equal to or higher than the value of [x-v](#request-headers) then the [x-min-v](#request-headers) header should be treated as absent. If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable. See [HTTP Headers](#request-headers)|
|x-min-v|header|string|optional|Minimum version of the API end point requested by the client. Must be set to a positive integer if provided. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable.|
|x-fapi-interaction-id|header|string|optional|An [RFC4122](https://tools.ietf.org/html/rfc4122) UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a [RFC4122] UUID value is required to be provided in the response header to track the interaction.|
|x-fapi-auth-date|header|string|optional|The time when the customer last logged in to the data recipient. Required for all resource calls (customer present and unattended). Not to be included for unauthenticated calls.|
|x-fapi-customer-ip-address|header|string|optional|The customer's original IP address if the customer is currently logged in to the data recipient. The presence of this header indicates that the API is being called in a customer present context. Not to be included for unauthenticated calls.|
|x-cds-client-headers|header|[Base64](#common-field-types)|optional|The customer's original standard http headers [Base64](#common-field-types) encoded, including the original User Agent header, if the customer is currently logged in to the data recipient. Mandatory for customer present calls.  Not required for unattended or unauthenticated calls.|

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
        "meterSerial": "string",
        "readStartDate": "string",
        "readEndDate": "string",
        "unitOfMeasure": "KWH",
        "readUType": "basicRead",
        "basicRead": {
          "quality": "ACTUAL",
          "value": 0
        },
        "intervalRead": {
          "readIntervalLength": "string",
          "aggregateValue": 0,
          "intervalReads": [
            {
              "quality": "ACTUAL",
              "value": 0
            }
          ]
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

<h3 id="get-bulk-usage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|Inline|

<h3 id="get-bulk-usage-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Description|
|---|---|---|---|
|» data|object|mandatory|none|
|»» reads|[object]|mandatory|Array of meter reads|
|»»» servicePointId|string|mandatory|Tokenised ID of the service point to be used for referring to the service point in the CDR API suite.  To be created in accordance with CDR ID permanence requirements|
|»»» registerId|string|optional|Register ID of the meter register where the meter reads are obtained|
|»»» registerSuffix|string|mandatory|Register suffix of the meter register where the meter reads are obtained|
|»»» meterSerial|string|optional|Meter serial number as it appears in customer’s bill|
|»»» readStartDate|[DateString](#common-field-types)|mandatory|Date time when the meter reads start|
|»»» readEndDate|[DateString](#common-field-types)|optional|Date time when the meter reads end.  If absent then assumed to be equal to readStartDate.  In this case the entry represents data for a single date specified by readStartDate|
|»»» unitOfMeasure|string|optional|Unit of measure of the meter reads. If absent then assumed to be KWH|
|»»» readUType|string|mandatory|Specify the type of the meter read data|
|»»» basicRead|object|conditional|Mandatory if readUType is set to basicRead|
|»»»» quality|string|optional|The quality of the read taken.  If absent then assumed to be ACTUAL|
|»»»» value|number|mandatory|Meter read value.  If positive then it means consumption, if negative it means export|
|»»» intervalRead|object|conditional|Mandatory if readUType is set to intervalRead|
|»»»» readIntervalLength|[PositiveInteger](#common-field-types)|optional|Read interval length in minutes|
|»»»» aggregateValue|number|mandatory|The aggregate sum of the interval read values.  If positive then it means net consumption, if negative it means net export from the premise|
|»»»» intervalReads|[object]|mandatory|Array of reads with each element indicating the read for the interval specified by readIntervalLength beginning at midnight of readStartDate|
|»»»»» quality|string|optional|The quality of the read taken.  If absent then assumed to be ACTUAL|
|»»»»» value|number|mandatory|Interval value.  If positive then it means consumption, if negative it means export|
|»»»» links|[LinksPaginated](#schemacdr-energy-apilinkspaginated)|mandatory|none|
|»»»»» self|[URIString](#common-field-types)|mandatory|Fully qualified link that generated the current response document|
|»»»»» first|[URIString](#common-field-types)|conditional|URI to the first page of this set. Mandatory if this response is not the first page|
|»»»»» prev|[URIString](#common-field-types)|conditional|URI to the previous page of this set. Mandatory if this response is not the first page|
|»»»»» next|[URIString](#common-field-types)|conditional|URI to the next page of this set. Mandatory if this response is not the last page|
|»»»»» last|[URIString](#common-field-types)|conditional|URI to the last page of this set. Mandatory if this response is not the last page|
|»»»» meta|[MetaPaginated](#schemacdr-energy-apimetapaginated)|mandatory|none|
|»»»»» totalRecords|[NaturalNumber](#common-field-types)|mandatory|The total number of records in the full set. See [pagination](#pagination).|
|»»»»» totalPages|[NaturalNumber](#common-field-types)|mandatory|The total number of pages in the full set. See [pagination](#pagination).|

#### Enumerated Values

|Property|Value|
|---|---|
|unitOfMeasure|KWH|
|unitOfMeasure|GWH|
|readUType|basicRead|
|readUType|intervalRead|
|quality|ACTUAL|
|quality|SUBSTITUTE|
|quality|FINAL_SUBSTITUTE|
|quality|ACTUAL|
|quality|SUBSTITUTE|
|quality|FINAL_SUBSTITUTE|

  
    <aside class="success">
This operation does not require authentication
</aside>

  

## Get Usage For Specific Service Points

<a id="opIdlistUsageForServicePoints"></a>

> Code samples

```http
POST /energy/electricity/servicepoints/usage HTTP/1.1

Content-Type: application/json
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
  'Content-Type':'application/json',
  'Accept':'application/json',
  'x-v':'string',
  'x-min-v':'string',
  'x-fapi-interaction-id':'string',
  'x-fapi-auth-date':'string',
  'x-fapi-customer-ip-address':'string',
  'x-cds-client-headers':'string'

};

$.ajax({
  url: '/energy/electricity/servicepoints/usage',
  method: 'post',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`POST /energy/electricity/servicepoints/usage`

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
|Version|**undefined**

<h3 id="get-usage-for-specific-service-points-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|number|optional|Page of results to request (standard pagination)|
|page-size|query|number|optional|Page size to request.  Default is 25 (standard pagination)|
|x-v|header|string|mandatory|Version of the API end point requested by the client. Must be set to a positive integer. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If the value of [x-min-v](#request-headers) is equal to or higher than the value of [x-v](#request-headers) then the [x-min-v](#request-headers) header should be treated as absent. If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable. See [HTTP Headers](#request-headers)|
|x-min-v|header|string|optional|Minimum version of the API end point requested by the client. Must be set to a positive integer if provided. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable.|
|x-fapi-interaction-id|header|string|optional|An [RFC4122](https://tools.ietf.org/html/rfc4122) UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a [RFC4122] UUID value is required to be provided in the response header to track the interaction.|
|x-fapi-auth-date|header|string|optional|The time when the customer last logged in to the data recipient. Required for all resource calls (customer present and unattended). Not to be included for unauthenticated calls.|
|x-fapi-customer-ip-address|header|string|optional|The customer's original IP address if the customer is currently logged in to the data recipient. The presence of this header indicates that the API is being called in a customer present context. Not to be included for unauthenticated calls.|
|x-cds-client-headers|header|[Base64](#common-field-types)|optional|The customer's original standard http headers [Base64](#common-field-types) encoded, including the original User Agent header, if the customer is currently logged in to the data recipient. Mandatory for customer present calls.  Not required for unattended or unauthenticated calls.|
|body|body|[servicePointIdList](#schemacdr-energy-apiservicepointidlist)|mandatory|Request payload containing list of specific Service Points to obtain data for|
|» data|body|object|mandatory|none|
|»» servicePointIds|body|[string]|mandatory|Array of specific servicePointIds to obtain data for|
|» meta|body|[Meta](#schemacdr-energy-apimeta)|mandatory|none|

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
        "meterSerial": "string",
        "readStartDate": "string",
        "readEndDate": "string",
        "unitOfMeasure": "KWH",
        "readUType": "basicRead",
        "basicRead": {
          "quality": "ACTUAL",
          "value": 0
        },
        "intervalRead": {
          "readIntervalLength": "string",
          "aggregateValue": 0,
          "intervalReads": [
            {
              "quality": "ACTUAL",
              "value": 0
            }
          ]
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

<h3 id="get-usage-for-specific-service-points-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|Inline|

<h3 id="get-usage-for-specific-service-points-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Description|
|---|---|---|---|
|» data|object|mandatory|none|
|»» reads|[object]|mandatory|Array of meter reads|
|»»» servicePointId|string|mandatory|Tokenised ID of the service point to be used for referring to the service point in the CDR API suite.  To be created in accordance with CDR ID permanence requirements|
|»»» registerId|string|optional|Register ID of the meter register where the meter reads are obtained|
|»»» registerSuffix|string|mandatory|Register suffix of the meter register where the meter reads are obtained|
|»»» meterSerial|string|optional|Meter serial number as it appears in customer’s bill|
|»»» readStartDate|[DateString](#common-field-types)|mandatory|Date time when the meter reads start|
|»»» readEndDate|[DateString](#common-field-types)|optional|Date time when the meter reads end.  If absent then assumed to be equal to readStartDate.  In this case the entry represents data for a single date specified by readStartDate|
|»»» unitOfMeasure|string|optional|Unit of measure of the meter reads. If absent then assumed to be KWH|
|»»» readUType|string|mandatory|Specify the type of the meter read data|
|»»» basicRead|object|conditional|Mandatory if readUType is set to basicRead|
|»»»» quality|string|optional|The quality of the read taken.  If absent then assumed to be ACTUAL|
|»»»» value|number|mandatory|Meter read value.  If positive then it means consumption, if negative it means export|
|»»» intervalRead|object|conditional|Mandatory if readUType is set to intervalRead|
|»»»» readIntervalLength|[PositiveInteger](#common-field-types)|optional|Read interval length in minutes|
|»»»» aggregateValue|number|mandatory|The aggregate sum of the interval read values.  If positive then it means net consumption, if negative it means net export from the premise|
|»»»» intervalReads|[object]|mandatory|Array of reads with each element indicating the read for the interval specified by readIntervalLength beginning at midnight of readStartDate|
|»»»»» quality|string|optional|The quality of the read taken.  If absent then assumed to be ACTUAL|
|»»»»» value|number|mandatory|Interval value.  If positive then it means consumption, if negative it means export|
|»»»» links|[LinksPaginated](#schemacdr-energy-apilinkspaginated)|mandatory|none|
|»»»»» self|[URIString](#common-field-types)|mandatory|Fully qualified link that generated the current response document|
|»»»»» first|[URIString](#common-field-types)|conditional|URI to the first page of this set. Mandatory if this response is not the first page|
|»»»»» prev|[URIString](#common-field-types)|conditional|URI to the previous page of this set. Mandatory if this response is not the first page|
|»»»»» next|[URIString](#common-field-types)|conditional|URI to the next page of this set. Mandatory if this response is not the last page|
|»»»»» last|[URIString](#common-field-types)|conditional|URI to the last page of this set. Mandatory if this response is not the last page|
|»»»» meta|[MetaPaginated](#schemacdr-energy-apimetapaginated)|mandatory|none|
|»»»»» totalRecords|[NaturalNumber](#common-field-types)|mandatory|The total number of records in the full set. See [pagination](#pagination).|
|»»»»» totalPages|[NaturalNumber](#common-field-types)|mandatory|The total number of pages in the full set. See [pagination](#pagination).|

#### Enumerated Values

|Property|Value|
|---|---|
|unitOfMeasure|KWH|
|unitOfMeasure|GWH|
|readUType|basicRead|
|readUType|intervalRead|
|quality|ACTUAL|
|quality|SUBSTITUTE|
|quality|FINAL_SUBSTITUTE|
|quality|ACTUAL|
|quality|SUBSTITUTE|
|quality|FINAL_SUBSTITUTE|

  
    <aside class="success">
This operation does not require authentication
</aside>

  

## Get DER For Service Point

<a id="opIdgetDERForServicePoint"></a>

> Code samples

```http
GET /energy/electricity/servicepoints/{servicePointId}/der HTTP/1.1

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
  url: '/energy/electricity/servicepoints/{servicePointId}/der',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`GET /energy/electricity/servicepoints/{servicePointId}/der`

Obtain a list of DER data from a particular service point

###Endpoint Version
|   |  |
|---|--|
|Version|**undefined**

<h3 id="get-der-for-service-point-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|servicePointId|path|string|mandatory|ID of the specific service point requested.  This is a tokenised ID previous obtained from the Service Point List Data end point.  Note that it is not a nationalMeteringId.|
|x-v|header|string|mandatory|Version of the API end point requested by the client. Must be set to a positive integer. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If the value of [x-min-v](#request-headers) is equal to or higher than the value of [x-v](#request-headers) then the [x-min-v](#request-headers) header should be treated as absent. If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable. See [HTTP Headers](#request-headers)|
|x-min-v|header|string|optional|Minimum version of the API end point requested by the client. Must be set to a positive integer if provided. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable.|
|x-fapi-interaction-id|header|string|optional|An [RFC4122](https://tools.ietf.org/html/rfc4122) UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a [RFC4122] UUID value is required to be provided in the response header to track the interaction.|
|x-fapi-auth-date|header|string|optional|The time when the customer last logged in to the data recipient. Required for all resource calls (customer present and unattended). Not to be included for unauthenticated calls.|
|x-fapi-customer-ip-address|header|string|optional|The customer's original IP address if the customer is currently logged in to the data recipient. The presence of this header indicates that the API is being called in a customer present context. Not to be included for unauthenticated calls.|
|x-cds-client-headers|header|[Base64](#common-field-types)|optional|The customer's original standard http headers [Base64](#common-field-types) encoded, including the original User Agent header, if the customer is currently logged in to the data recipient. Mandatory for customer present calls.  Not required for unattended or unauthenticated calls.|

> Example responses

> 200 Response

```json
{
  "data": {
    "servicePointId": "string",
    "approvedCapacity": 0,
    "availablePhasesCount": 0,
    "installedPhasesCount": 0,
    "islandableInstallation": "string",
    "hasCentralProtectionControl": false,
    "protectionMode": {
      "exportLimitkva": 0,
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
        "count": "string",
        "equipmentType": "string",
        "manufacturerName": "string",
        "inverterSeries": "string",
        "inverterModelNumber": "string",
        "commissioningDate": "string",
        "installationStage": "string",
        "status": "ACTIVE",
        "inverterDeviceCapacity": 0,
        "derDevices": [
          {
            "count": 0,
            "manufacturer": "string",
            "modelNumber": "string",
            "status": "ACTIVE",
            "installationStage": 0,
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

<h3 id="get-der-for-service-point-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|Inline|

<h3 id="get-der-for-service-point-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Description|
|---|---|---|---|
|» data|[derRecord](#schemacdr-energy-apiderrecord)|mandatory|none|
|»» servicePointId|string|mandatory|Tokenised ID of the service point to be used for referring to the service point in the CDR API suite.  To be created in accordance with CDR ID permanence requirements|
|»» approvedCapacity|number|mandatory|Approved small generating unit capacity as agreed with NSP in the connection agreement, expressed in kVA|
|»» availablePhasesCount|number|mandatory|The number of phases available for the installation of DER|
|»» installedPhasesCount|number|mandatory|The number of phases that DER is installed on|
|»» islandableInstallation|string|mandatory|For identification of small generating units designed with the ability to operate in an islanded mode|
|»» hasCentralProtectionControl|boolean|optional|For DER installations where NSPs specify the need for additional forms of protection above those inbuilt in an inverter.  If absent then assumed to be false|
|»» protectionMode|object|conditional|Required only when the hasCentralProtectionAndControl flag is set to true|
|»»» exportLimitkva|number|optional|Maximum amount of power (kVA) that may be exported from a connection point to the grid, as monitored by a control / relay function. A null value indicates no limit|
|»»» underFrequencyProtection|number|optional|Protective function limit. Default value 47 Hz according to AS4777-1: 2016 Table 2|
|»»» underFrequencyProtectionDelay|number|optional|Trip delay time in seconds. Default value 2 seconds according to AS4777-1: 2016 Table 2|
|»»» overFrequencyProtection|number|optional|Protective function limit. Default value 52 Hz according to AS4777-1: 2016 Table 2|
|»»» overFrequencyProtectionDelay|number|optional|Trip delay time in seconds. Default value 2 seconds according to AS4777-1: 2016 Table 2|
|»»» underVoltageProtection|number|optional|Protective function limit. Default value 180V according to AS4777-1: 2016 Table 2|
|»»» underVoltageProtectionDelay|number|optional|Trip delay time in seconds. Default value 2 seconds according to AS4777-1: 2016 Table 2|
|»»» overVoltageProtection|number|optional|Protective function limit. Default value 260 V according to AS4777-1: 2016 Table 2|
|»»» overVoltageProtectionDelay|number|optional|Trip delay time in seconds. Default value 2 seconds according to AS4777-1: 2016 Table 2|
|»»» sustainedOverVoltage|number|optional|Sustained over voltage|
|»»» sustainedOverVoltageDelay|number|optional|Trip delay time in seconds|
|»»» frequencyRateOfChange|number|optional|Rate of change of frequency trip point (Hz/s)|
|»»» voltageVectorShift|number|optional|Trip angle in degrees|
|»»» interTripScheme|string|optional|Description of the form of inter-trip (e.g. 'from local substation')|
|»»» neutralVoltageDisplacement|number|optional|Trip voltage|
|»» acConnections|[object]|optional|none|
|»»» connectionIdentifier|number|mandatory|AC Connection ID as defined in the DER register.  Does not align with CDR ID permanence standards|
|»»» count|[PositiveInteger](#common-field-types)|mandatory|Number of AC Connections in the group. For the suite of AC Connections to be considered as a group, all of the AC Connections included must have the same attributes|
|»»» equipmentType|string|optional|Indicates whether the DER device is connected via an inverter (and what category of inverter it is) or not (e.g. rotating machine)|
|»»» manufacturerName|string|optional|The name of the inverter manufacturer|
|»»» inverterSeries|string|optional|The inverter series|
|»»» inverterModelNumber|string|optional|The inverter model number|
|»»» commissioningDate|[DateString](#common-field-types)|optional|The date that the DER installation is commissioned|
|»»» installationStage|string|optional|Description of the installation stage|
|»»» status|string|optional|Code used to indicate the status of the Inverter. This will be used to identify if an inverter is active or inactive or decommissioned|
|»»» inverterDeviceCapacity|number|optional|The rated AC output power that is listed in the product specified by the manufacturer|
|»»» derDevices|[object]|optional|none|
|»»»» count|number|mandatory|Number of devices in the group of DER devices|
|»»»» manufacturer|string|optional|The name of the device manufacturer|
|»»»» modelNumber|string|optional|The model number of the device|
|»»»» status|string|optional|Code used to indicate the status of the device. This will be used to identify if an inverter is active or inactive or decommissioned|
|»»»» installationStage|number|optional|Description of the device installation stage|
|»»»» type|string|optional|Used to indicate the primary technology used in the DER device|
|»»»» subtype|string|optional|This field is also used to record for example the battery chemistry, or the type of PV panel. It is also used to record if a battery is contained in an electric vehicle connected in a vehicle-to-grid arrangement|
|»»»» nominalRatedCapacity|number|optional|Maximum output in kVA that is listed in the product specification by the manufacturer. This refers to the capacity of each unit within the device group|
|»»»» nominalStorageCapacity|number|optional|Maximum storage capacity in kVAh. This refers to the capacity of each storage module within the device group|
|»»» links|[Links](#schemacdr-energy-apilinks)|mandatory|none|
|»»»» self|[URIString](#common-field-types)|mandatory|Fully qualified link that generated the current response document|
|»»» meta|[Meta](#schemacdr-energy-apimeta)|mandatory|none|

#### Enumerated Values

|Property|Value|
|---|---|
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

  
    <aside class="success">
This operation does not require authentication
</aside>

  

## Get Bulk DER

<a id="opIdlistDERBulk"></a>

> Code samples

```http
GET /energy/electricity/servicepoints/der HTTP/1.1

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
  url: '/energy/electricity/servicepoints/der',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`GET /energy/electricity/servicepoints/der`

Obtain DER data for all service points associated with the customer

###Endpoint Version
|   |  |
|---|--|
|Version|**undefined**

<h3 id="get-bulk-der-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|number|optional|Page of results to request (standard pagination)|
|page-size|query|number|optional|Page size to request.  Default is 25 (standard pagination)|
|x-v|header|string|mandatory|Version of the API end point requested by the client. Must be set to a positive integer. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If the value of [x-min-v](#request-headers) is equal to or higher than the value of [x-v](#request-headers) then the [x-min-v](#request-headers) header should be treated as absent. If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable. See [HTTP Headers](#request-headers)|
|x-min-v|header|string|optional|Minimum version of the API end point requested by the client. Must be set to a positive integer if provided. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable.|
|x-fapi-interaction-id|header|string|optional|An [RFC4122](https://tools.ietf.org/html/rfc4122) UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a [RFC4122] UUID value is required to be provided in the response header to track the interaction.|
|x-fapi-auth-date|header|string|optional|The time when the customer last logged in to the data recipient. Required for all resource calls (customer present and unattended). Not to be included for unauthenticated calls.|
|x-fapi-customer-ip-address|header|string|optional|The customer's original IP address if the customer is currently logged in to the data recipient. The presence of this header indicates that the API is being called in a customer present context. Not to be included for unauthenticated calls.|
|x-cds-client-headers|header|[Base64](#common-field-types)|optional|The customer's original standard http headers [Base64](#common-field-types) encoded, including the original User Agent header, if the customer is currently logged in to the data recipient. Mandatory for customer present calls.  Not required for unattended or unauthenticated calls.|

> Example responses

> 200 Response

```json
{
  "data": {
    "derRecords": [
      {
        "servicePointId": "string",
        "approvedCapacity": 0,
        "availablePhasesCount": 0,
        "installedPhasesCount": 0,
        "islandableInstallation": "string",
        "hasCentralProtectionControl": false,
        "protectionMode": {
          "exportLimitkva": 0,
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
            "count": "string",
            "equipmentType": "string",
            "manufacturerName": "string",
            "inverterSeries": "string",
            "inverterModelNumber": "string",
            "commissioningDate": "string",
            "installationStage": "string",
            "status": "ACTIVE",
            "inverterDeviceCapacity": 0,
            "derDevices": [
              {
                "count": 0,
                "manufacturer": "string",
                "modelNumber": "string",
                "status": "ACTIVE",
                "installationStage": 0,
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

<h3 id="get-bulk-der-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|Inline|

<h3 id="get-bulk-der-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Description|
|---|---|---|---|
|» data|object|mandatory|none|
|»» derRecords|[[derRecord](#schemacdr-energy-apiderrecord)]|mandatory|Array of meter reads|
|»»» servicePointId|string|mandatory|Tokenised ID of the service point to be used for referring to the service point in the CDR API suite.  To be created in accordance with CDR ID permanence requirements|
|»»» approvedCapacity|number|mandatory|Approved small generating unit capacity as agreed with NSP in the connection agreement, expressed in kVA|
|»»» availablePhasesCount|number|mandatory|The number of phases available for the installation of DER|
|»»» installedPhasesCount|number|mandatory|The number of phases that DER is installed on|
|»»» islandableInstallation|string|mandatory|For identification of small generating units designed with the ability to operate in an islanded mode|
|»»» hasCentralProtectionControl|boolean|optional|For DER installations where NSPs specify the need for additional forms of protection above those inbuilt in an inverter.  If absent then assumed to be false|
|»»» protectionMode|object|conditional|Required only when the hasCentralProtectionAndControl flag is set to true|
|»»»» exportLimitkva|number|optional|Maximum amount of power (kVA) that may be exported from a connection point to the grid, as monitored by a control / relay function. A null value indicates no limit|
|»»»» underFrequencyProtection|number|optional|Protective function limit. Default value 47 Hz according to AS4777-1: 2016 Table 2|
|»»»» underFrequencyProtectionDelay|number|optional|Trip delay time in seconds. Default value 2 seconds according to AS4777-1: 2016 Table 2|
|»»»» overFrequencyProtection|number|optional|Protective function limit. Default value 52 Hz according to AS4777-1: 2016 Table 2|
|»»»» overFrequencyProtectionDelay|number|optional|Trip delay time in seconds. Default value 2 seconds according to AS4777-1: 2016 Table 2|
|»»»» underVoltageProtection|number|optional|Protective function limit. Default value 180V according to AS4777-1: 2016 Table 2|
|»»»» underVoltageProtectionDelay|number|optional|Trip delay time in seconds. Default value 2 seconds according to AS4777-1: 2016 Table 2|
|»»»» overVoltageProtection|number|optional|Protective function limit. Default value 260 V according to AS4777-1: 2016 Table 2|
|»»»» overVoltageProtectionDelay|number|optional|Trip delay time in seconds. Default value 2 seconds according to AS4777-1: 2016 Table 2|
|»»»» sustainedOverVoltage|number|optional|Sustained over voltage|
|»»»» sustainedOverVoltageDelay|number|optional|Trip delay time in seconds|
|»»»» frequencyRateOfChange|number|optional|Rate of change of frequency trip point (Hz/s)|
|»»»» voltageVectorShift|number|optional|Trip angle in degrees|
|»»»» interTripScheme|string|optional|Description of the form of inter-trip (e.g. 'from local substation')|
|»»»» neutralVoltageDisplacement|number|optional|Trip voltage|
|»»» acConnections|[object]|optional|none|
|»»»» connectionIdentifier|number|mandatory|AC Connection ID as defined in the DER register.  Does not align with CDR ID permanence standards|
|»»»» count|[PositiveInteger](#common-field-types)|mandatory|Number of AC Connections in the group. For the suite of AC Connections to be considered as a group, all of the AC Connections included must have the same attributes|
|»»»» equipmentType|string|optional|Indicates whether the DER device is connected via an inverter (and what category of inverter it is) or not (e.g. rotating machine)|
|»»»» manufacturerName|string|optional|The name of the inverter manufacturer|
|»»»» inverterSeries|string|optional|The inverter series|
|»»»» inverterModelNumber|string|optional|The inverter model number|
|»»»» commissioningDate|[DateString](#common-field-types)|optional|The date that the DER installation is commissioned|
|»»»» installationStage|string|optional|Description of the installation stage|
|»»»» status|string|optional|Code used to indicate the status of the Inverter. This will be used to identify if an inverter is active or inactive or decommissioned|
|»»»» inverterDeviceCapacity|number|optional|The rated AC output power that is listed in the product specified by the manufacturer|
|»»»» derDevices|[object]|optional|none|
|»»»»» count|number|mandatory|Number of devices in the group of DER devices|
|»»»»» manufacturer|string|optional|The name of the device manufacturer|
|»»»»» modelNumber|string|optional|The model number of the device|
|»»»»» status|string|optional|Code used to indicate the status of the device. This will be used to identify if an inverter is active or inactive or decommissioned|
|»»»»» installationStage|number|optional|Description of the device installation stage|
|»»»»» type|string|optional|Used to indicate the primary technology used in the DER device|
|»»»»» subtype|string|optional|This field is also used to record for example the battery chemistry, or the type of PV panel. It is also used to record if a battery is contained in an electric vehicle connected in a vehicle-to-grid arrangement|
|»»»»» nominalRatedCapacity|number|optional|Maximum output in kVA that is listed in the product specification by the manufacturer. This refers to the capacity of each unit within the device group|
|»»»»» nominalStorageCapacity|number|optional|Maximum storage capacity in kVAh. This refers to the capacity of each storage module within the device group|
|»»»» links|[LinksPaginated](#schemacdr-energy-apilinkspaginated)|mandatory|none|
|»»»»» self|[URIString](#common-field-types)|mandatory|Fully qualified link that generated the current response document|
|»»»»» first|[URIString](#common-field-types)|conditional|URI to the first page of this set. Mandatory if this response is not the first page|
|»»»»» prev|[URIString](#common-field-types)|conditional|URI to the previous page of this set. Mandatory if this response is not the first page|
|»»»»» next|[URIString](#common-field-types)|conditional|URI to the next page of this set. Mandatory if this response is not the last page|
|»»»»» last|[URIString](#common-field-types)|conditional|URI to the last page of this set. Mandatory if this response is not the last page|
|»»»» meta|[MetaPaginated](#schemacdr-energy-apimetapaginated)|mandatory|none|
|»»»»» totalRecords|[NaturalNumber](#common-field-types)|mandatory|The total number of records in the full set. See [pagination](#pagination).|
|»»»»» totalPages|[NaturalNumber](#common-field-types)|mandatory|The total number of pages in the full set. See [pagination](#pagination).|

#### Enumerated Values

|Property|Value|
|---|---|
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

  
    <aside class="success">
This operation does not require authentication
</aside>

  

## Get DER For Specific Service Points

<a id="opIdlistDERForServicePoints"></a>

> Code samples

```http
POST /energy/electricity/servicepoints/der HTTP/1.1

Content-Type: application/json
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
  'Content-Type':'application/json',
  'Accept':'application/json',
  'x-v':'string',
  'x-min-v':'string',
  'x-fapi-interaction-id':'string',
  'x-fapi-auth-date':'string',
  'x-fapi-customer-ip-address':'string',
  'x-cds-client-headers':'string'

};

$.ajax({
  url: '/energy/electricity/servicepoints/der',
  method: 'post',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`POST /energy/electricity/servicepoints/der`

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
|Version|**undefined**

<h3 id="get-der-for-specific-service-points-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|number|optional|Page of results to request (standard pagination)|
|page-size|query|number|optional|Page size to request.  Default is 25 (standard pagination)|
|x-v|header|string|mandatory|Version of the API end point requested by the client. Must be set to a positive integer. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If the value of [x-min-v](#request-headers) is equal to or higher than the value of [x-v](#request-headers) then the [x-min-v](#request-headers) header should be treated as absent. If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable. See [HTTP Headers](#request-headers)|
|x-min-v|header|string|optional|Minimum version of the API end point requested by the client. Must be set to a positive integer if provided. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable.|
|x-fapi-interaction-id|header|string|optional|An [RFC4122](https://tools.ietf.org/html/rfc4122) UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a [RFC4122] UUID value is required to be provided in the response header to track the interaction.|
|x-fapi-auth-date|header|string|optional|The time when the customer last logged in to the data recipient. Required for all resource calls (customer present and unattended). Not to be included for unauthenticated calls.|
|x-fapi-customer-ip-address|header|string|optional|The customer's original IP address if the customer is currently logged in to the data recipient. The presence of this header indicates that the API is being called in a customer present context. Not to be included for unauthenticated calls.|
|x-cds-client-headers|header|[Base64](#common-field-types)|optional|The customer's original standard http headers [Base64](#common-field-types) encoded, including the original User Agent header, if the customer is currently logged in to the data recipient. Mandatory for customer present calls.  Not required for unattended or unauthenticated calls.|
|body|body|[servicePointIdList](#schemacdr-energy-apiservicepointidlist)|mandatory|Request payload containing list of specific Service Points to obtain data for|
|» data|body|object|mandatory|none|
|»» servicePointIds|body|[string]|mandatory|Array of specific servicePointIds to obtain data for|
|» meta|body|[Meta](#schemacdr-energy-apimeta)|mandatory|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "derRecords": [
      {
        "servicePointId": "string",
        "approvedCapacity": 0,
        "availablePhasesCount": 0,
        "installedPhasesCount": 0,
        "islandableInstallation": "string",
        "hasCentralProtectionControl": false,
        "protectionMode": {
          "exportLimitkva": 0,
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
            "count": "string",
            "equipmentType": "string",
            "manufacturerName": "string",
            "inverterSeries": "string",
            "inverterModelNumber": "string",
            "commissioningDate": "string",
            "installationStage": "string",
            "status": "ACTIVE",
            "inverterDeviceCapacity": 0,
            "derDevices": [
              {
                "count": 0,
                "manufacturer": "string",
                "modelNumber": "string",
                "status": "ACTIVE",
                "installationStage": 0,
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

<h3 id="get-der-for-specific-service-points-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|Inline|

<h3 id="get-der-for-specific-service-points-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Description|
|---|---|---|---|
|» data|object|mandatory|none|
|»» derRecords|[[derRecord](#schemacdr-energy-apiderrecord)]|mandatory|Array of meter reads|
|»»» servicePointId|string|mandatory|Tokenised ID of the service point to be used for referring to the service point in the CDR API suite.  To be created in accordance with CDR ID permanence requirements|
|»»» approvedCapacity|number|mandatory|Approved small generating unit capacity as agreed with NSP in the connection agreement, expressed in kVA|
|»»» availablePhasesCount|number|mandatory|The number of phases available for the installation of DER|
|»»» installedPhasesCount|number|mandatory|The number of phases that DER is installed on|
|»»» islandableInstallation|string|mandatory|For identification of small generating units designed with the ability to operate in an islanded mode|
|»»» hasCentralProtectionControl|boolean|optional|For DER installations where NSPs specify the need for additional forms of protection above those inbuilt in an inverter.  If absent then assumed to be false|
|»»» protectionMode|object|conditional|Required only when the hasCentralProtectionAndControl flag is set to true|
|»»»» exportLimitkva|number|optional|Maximum amount of power (kVA) that may be exported from a connection point to the grid, as monitored by a control / relay function. A null value indicates no limit|
|»»»» underFrequencyProtection|number|optional|Protective function limit. Default value 47 Hz according to AS4777-1: 2016 Table 2|
|»»»» underFrequencyProtectionDelay|number|optional|Trip delay time in seconds. Default value 2 seconds according to AS4777-1: 2016 Table 2|
|»»»» overFrequencyProtection|number|optional|Protective function limit. Default value 52 Hz according to AS4777-1: 2016 Table 2|
|»»»» overFrequencyProtectionDelay|number|optional|Trip delay time in seconds. Default value 2 seconds according to AS4777-1: 2016 Table 2|
|»»»» underVoltageProtection|number|optional|Protective function limit. Default value 180V according to AS4777-1: 2016 Table 2|
|»»»» underVoltageProtectionDelay|number|optional|Trip delay time in seconds. Default value 2 seconds according to AS4777-1: 2016 Table 2|
|»»»» overVoltageProtection|number|optional|Protective function limit. Default value 260 V according to AS4777-1: 2016 Table 2|
|»»»» overVoltageProtectionDelay|number|optional|Trip delay time in seconds. Default value 2 seconds according to AS4777-1: 2016 Table 2|
|»»»» sustainedOverVoltage|number|optional|Sustained over voltage|
|»»»» sustainedOverVoltageDelay|number|optional|Trip delay time in seconds|
|»»»» frequencyRateOfChange|number|optional|Rate of change of frequency trip point (Hz/s)|
|»»»» voltageVectorShift|number|optional|Trip angle in degrees|
|»»»» interTripScheme|string|optional|Description of the form of inter-trip (e.g. 'from local substation')|
|»»»» neutralVoltageDisplacement|number|optional|Trip voltage|
|»»» acConnections|[object]|optional|none|
|»»»» connectionIdentifier|number|mandatory|AC Connection ID as defined in the DER register.  Does not align with CDR ID permanence standards|
|»»»» count|[PositiveInteger](#common-field-types)|mandatory|Number of AC Connections in the group. For the suite of AC Connections to be considered as a group, all of the AC Connections included must have the same attributes|
|»»»» equipmentType|string|optional|Indicates whether the DER device is connected via an inverter (and what category of inverter it is) or not (e.g. rotating machine)|
|»»»» manufacturerName|string|optional|The name of the inverter manufacturer|
|»»»» inverterSeries|string|optional|The inverter series|
|»»»» inverterModelNumber|string|optional|The inverter model number|
|»»»» commissioningDate|[DateString](#common-field-types)|optional|The date that the DER installation is commissioned|
|»»»» installationStage|string|optional|Description of the installation stage|
|»»»» status|string|optional|Code used to indicate the status of the Inverter. This will be used to identify if an inverter is active or inactive or decommissioned|
|»»»» inverterDeviceCapacity|number|optional|The rated AC output power that is listed in the product specified by the manufacturer|
|»»»» derDevices|[object]|optional|none|
|»»»»» count|number|mandatory|Number of devices in the group of DER devices|
|»»»»» manufacturer|string|optional|The name of the device manufacturer|
|»»»»» modelNumber|string|optional|The model number of the device|
|»»»»» status|string|optional|Code used to indicate the status of the device. This will be used to identify if an inverter is active or inactive or decommissioned|
|»»»»» installationStage|number|optional|Description of the device installation stage|
|»»»»» type|string|optional|Used to indicate the primary technology used in the DER device|
|»»»»» subtype|string|optional|This field is also used to record for example the battery chemistry, or the type of PV panel. It is also used to record if a battery is contained in an electric vehicle connected in a vehicle-to-grid arrangement|
|»»»»» nominalRatedCapacity|number|optional|Maximum output in kVA that is listed in the product specification by the manufacturer. This refers to the capacity of each unit within the device group|
|»»»»» nominalStorageCapacity|number|optional|Maximum storage capacity in kVAh. This refers to the capacity of each storage module within the device group|
|»»»» links|[LinksPaginated](#schemacdr-energy-apilinkspaginated)|mandatory|none|
|»»»»» self|[URIString](#common-field-types)|mandatory|Fully qualified link that generated the current response document|
|»»»»» first|[URIString](#common-field-types)|conditional|URI to the first page of this set. Mandatory if this response is not the first page|
|»»»»» prev|[URIString](#common-field-types)|conditional|URI to the previous page of this set. Mandatory if this response is not the first page|
|»»»»» next|[URIString](#common-field-types)|conditional|URI to the next page of this set. Mandatory if this response is not the last page|
|»»»»» last|[URIString](#common-field-types)|conditional|URI to the last page of this set. Mandatory if this response is not the last page|
|»»»» meta|[MetaPaginated](#schemacdr-energy-apimetapaginated)|mandatory|none|
|»»»»» totalRecords|[NaturalNumber](#common-field-types)|mandatory|The total number of records in the full set. See [pagination](#pagination).|
|»»»»» totalPages|[NaturalNumber](#common-field-types)|mandatory|The total number of pages in the full set. See [pagination](#pagination).|

#### Enumerated Values

|Property|Value|
|---|---|
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

  
    <aside class="success">
This operation does not require authentication
</aside>

  

## Get Accounts

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
|Version|**undefined**

<h3 id="get-accounts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|number|optional|Page of results to request (standard pagination)|
|page-size|query|number|optional|Page size to request.  Default is 25 (standard pagination)|
|x-v|header|string|mandatory|Version of the API end point requested by the client. Must be set to a positive integer. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If the value of [x-min-v](#request-headers) is equal to or higher than the value of [x-v](#request-headers) then the [x-min-v](#request-headers) header should be treated as absent. If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable. See [HTTP Headers](#request-headers)|
|x-min-v|header|string|optional|Minimum version of the API end point requested by the client. Must be set to a positive integer if provided. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable.|
|x-fapi-interaction-id|header|string|optional|An [RFC4122](https://tools.ietf.org/html/rfc4122) UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a [RFC4122] UUID value is required to be provided in the response header to track the interaction.|
|x-fapi-auth-date|header|string|optional|The time when the customer last logged in to the data recipient. Required for all resource calls (customer present and unattended). Not to be included for unauthenticated calls.|
|x-fapi-customer-ip-address|header|string|optional|The customer's original IP address if the customer is currently logged in to the data recipient. The presence of this header indicates that the API is being called in a customer present context. Not to be included for unauthenticated calls.|
|x-cds-client-headers|header|[Base64](#common-field-types)|optional|The customer's original standard http headers [Base64](#common-field-types) encoded, including the original User Agent header, if the customer is currently logged in to the data recipient. Mandatory for customer present calls.  Not required for unattended or unauthenticated calls.|

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

<h3 id="get-accounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|Inline|

<h3 id="get-accounts-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Description|
|---|---|---|---|
|» data|object|mandatory|none|
|»» accounts|[object]|mandatory|Array of accounts|
|»»» accountId|string|mandatory|The ID of the account.  To be created in accordance with CDR ID permanence requirements|
|»»» accountNumber|string|optional|Optional identifier of the account as defined by the data holder.  This must be the value presented on physical statements (if it exists) and must not be used for the value of accountId|
|»»» displayName|string|optional|An optional display name for the account if one exists or can be derived.  The content of this field is at the discretion of the data holder|
|»»» creationDate|[DateString](#common-field-types)|mandatory|The date that the account was created or opened|
|»»» servicePointIds|[string]|mandatory|An array of servicePointIds, representing NMIs, that this account is linked to|
|»»» planOverview|object|mandatory|none|
|»»»» displayName|string|optional|The name of the plan if one exists|
|»»»» startDate|[DateString](#common-field-types)|mandatory|The start date of the applicability of this plan|
|»»»» endDate|[DateString](#common-field-types)|optional|The end date of the applicability of this plan|
|»»» links|[LinksPaginated](#schemacdr-energy-apilinkspaginated)|mandatory|none|
|»»»» self|[URIString](#common-field-types)|mandatory|Fully qualified link that generated the current response document|
|»»»» first|[URIString](#common-field-types)|conditional|URI to the first page of this set. Mandatory if this response is not the first page|
|»»»» prev|[URIString](#common-field-types)|conditional|URI to the previous page of this set. Mandatory if this response is not the first page|
|»»»» next|[URIString](#common-field-types)|conditional|URI to the next page of this set. Mandatory if this response is not the last page|
|»»»» last|[URIString](#common-field-types)|conditional|URI to the last page of this set. Mandatory if this response is not the last page|
|»»» meta|[MetaPaginated](#schemacdr-energy-apimetapaginated)|mandatory|none|
|»»»» totalRecords|[NaturalNumber](#common-field-types)|mandatory|The total number of records in the full set. See [pagination](#pagination).|
|»»»» totalPages|[NaturalNumber](#common-field-types)|mandatory|The total number of pages in the full set. See [pagination](#pagination).|

  
    <aside class="success">
This operation does not require authentication
</aside>

  

## Get Account Detail

<a id="opIdgetAccount"></a>

> Code samples

```http
GET /energy/accounts/{accountId} HTTP/1.1

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
  url: '/energy/accounts/{accountId}',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`GET /energy/accounts/{accountId}`

Obtain detailed information for a specific energy account

###Endpoint Version
|   |  |
|---|--|
|Version|**undefined**

<h3 id="get-account-detail-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|mandatory|ID of a specific account to obtain data for.  This is a tokenised ID previous obtained from the Account List end point.|
|x-v|header|string|mandatory|Version of the API end point requested by the client. Must be set to a positive integer. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If the value of [x-min-v](#request-headers) is equal to or higher than the value of [x-v](#request-headers) then the [x-min-v](#request-headers) header should be treated as absent. If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable. See [HTTP Headers](#request-headers)|
|x-min-v|header|string|optional|Minimum version of the API end point requested by the client. Must be set to a positive integer if provided. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable.|
|x-fapi-interaction-id|header|string|optional|An [RFC4122](https://tools.ietf.org/html/rfc4122) UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a [RFC4122] UUID value is required to be provided in the response header to track the interaction.|
|x-fapi-auth-date|header|string|optional|The time when the customer last logged in to the data recipient. Required for all resource calls (customer present and unattended). Not to be included for unauthenticated calls.|
|x-fapi-customer-ip-address|header|string|optional|The customer's original IP address if the customer is currently logged in to the data recipient. The presence of this header indicates that the API is being called in a customer present context. Not to be included for unauthenticated calls.|
|x-cds-client-headers|header|[Base64](#common-field-types)|optional|The customer's original standard http headers [Base64](#common-field-types) encoded, including the original User Agent header, if the customer is currently logged in to the data recipient. Mandatory for customer present calls.  Not required for unattended or unauthenticated calls.|

> Example responses

> 200 Response

```json
{
  "data": {
    "accountId": "string",
    "accountNumber": "string",
    "displayName": "string",
    "creationDate": "string",
    "servicePointIds": [
      "string"
    ],
    "planOverview": {
      "displayName": "string",
      "startDate": "string",
      "endDate": "string"
    },
    "planDetail": {
      "fuelType": "ELECTRICITY",
      "meteringCharges": [
        {
          "displayName": "string",
          "description": "string",
          "minimumValue": "string",
          "maximumValue": "string",
          "period": "string"
        }
      ],
      "gasContract": {
        "additionalFeeInformation": "string",
        "pricingModel": "SINGLE_RATE",
        "termType": "1_YEAR",
        "timeZone": "LOCAL",
        "benefitPeriod": "string",
        "terms": "string",
        "isFixed": true,
        "variation": "string",
        "onExpiryDescription": "string",
        "meterTypes": [
          "string"
        ],
        "coolingOffDays": "string",
        "billFrequency": [
          "string"
        ],
        "paymentOption": [
          "PAPER_BILL"
        ],
        "intrinsicGreenPower": {
          "greenPercentage": "string"
        },
        "controlledLoad": {
          "displayName": "string",
          "description": "string",
          "dailyCharge": "string",
          "period": "string",
          "rates": [
            {
              "unitPrice": "string",
              "volume": 0
            }
          ]
        },
        "incentives": [
          {
            "displayName": "string",
            "description": "string",
            "category": "GIFT",
            "eligibility": "string"
          }
        ],
        "discounts": [
          {
            "displayName": "string",
            "description": "string",
            "type": "CONDITIONAL",
            "category": "PAY_ON_TIME",
            "endDate": "string",
            "methodUType": "percentOfBill",
            "percentOfBill": {
              "rate": "string"
            },
            "percentOfUse": {
              "rate": "string"
            },
            "fixedAmount": {
              "amount": "string"
            },
            "percentOverThreshold": {
              "rate": "string",
              "usageAmount": "string"
            }
          }
        ],
        "greenPowerCharges": [
          {
            "displayName": "string",
            "description": "string",
            "scheme": "GREENPOWER",
            "type": "FIXED_PER_DAY",
            "tiers": [
              {
                "percentGreen": "string",
                "rate": "string",
                "amount": "string"
              }
            ]
          }
        ],
        "eligibility": [
          {
            "type": "EXISTING_CUST",
            "information": "string",
            "description": "string"
          }
        ],
        "fees": [
          {
            "type": "EXIT",
            "term": "FIXED",
            "amount": "string",
            "rate": "string",
            "description": "string"
          }
        ],
        "solarFeedInTariff": [
          {
            "displayName": "string",
            "description": "string",
            "scheme": "PREMIUM",
            "payerType": "GOVERNMENT",
            "tariffUType": "GOVERNMENT",
            "singleTariff": {
              "amount": "string"
            },
            "timeVaryingTariffs": {
              "type": "PEAK",
              "amount": "string",
              "timeVariations": [
                {
                  "days": {
                    "weekdays": true,
                    "weekend": true
                  },
                  "startTime": "string",
                  "endTime": "string"
                }
              ]
            }
          }
        ],
        "tariffPeriod": [
          {
            "displayName": "string",
            "startDate": "string",
            "endDate": "string",
            "dailySupplyCharges": "string",
            "rateBlockUType": "singleRate",
            "singleRate": {
              "displayName": "string",
              "description": "string",
              "generalUnitPrice": "string",
              "rates": [
                {
                  "unitPrice": "string",
                  "volume": 0
                }
              ],
              "period": "string"
            },
            "timeOfUseRates": [
              {
                "displayName": "string",
                "description": "string",
                "rates": [
                  {
                    "unitPrice": "string",
                    "volume": 0
                  }
                ],
                "timeOfUse": [
                  {
                    "days": [],
                    "startTime": "string",
                    "endTime": "string"
                  }
                ],
                "type": "PEAK"
              }
            ],
            "demandCharges": [
              {
                "displayName": "string",
                "description": "string",
                "amount": "string",
                "startTime": "string",
                "endTime": "string",
                "days": {
                  "weekdays": true,
                  "saturday": true,
                  "sunday": true
                },
                "minDemand": "string",
                "maxDemand": "string",
                "measurementPeriod": "DAY",
                "chargePeriod": "DAY"
              }
            ]
          }
        ]
      },
      "electricityContract": {
        "additionalFeeInformation": "string",
        "pricingModel": "SINGLE_RATE",
        "termType": "1_YEAR",
        "timeZone": "LOCAL",
        "benefitPeriod": "string",
        "terms": "string",
        "isFixed": true,
        "variation": "string",
        "onExpiryDescription": "string",
        "meterTypes": [
          "string"
        ],
        "coolingOffDays": "string",
        "billFrequency": [
          "string"
        ],
        "paymentOption": [
          "PAPER_BILL"
        ],
        "intrinsicGreenPower": {
          "greenPercentage": "string"
        },
        "controlledLoad": {
          "displayName": "string",
          "description": "string",
          "dailyCharge": "string",
          "period": "string",
          "rates": [
            {
              "unitPrice": "string",
              "volume": 0
            }
          ]
        },
        "incentives": [
          {
            "displayName": "string",
            "description": "string",
            "category": "GIFT",
            "eligibility": "string"
          }
        ],
        "discounts": [
          {
            "displayName": "string",
            "description": "string",
            "type": "CONDITIONAL",
            "category": "PAY_ON_TIME",
            "endDate": "string",
            "methodUType": "percentOfBill",
            "percentOfBill": {
              "rate": "string"
            },
            "percentOfUse": {
              "rate": "string"
            },
            "fixedAmount": {
              "amount": "string"
            },
            "percentOverThreshold": {
              "rate": "string",
              "usageAmount": "string"
            }
          }
        ],
        "greenPowerCharges": [
          {
            "displayName": "string",
            "description": "string",
            "scheme": "GREENPOWER",
            "type": "FIXED_PER_DAY",
            "tiers": [
              {
                "percentGreen": "string",
                "rate": "string",
                "amount": "string"
              }
            ]
          }
        ],
        "eligibility": [
          {
            "type": "EXISTING_CUST",
            "information": "string",
            "description": "string"
          }
        ],
        "fees": [
          {
            "type": "EXIT",
            "term": "FIXED",
            "amount": "string",
            "rate": "string",
            "description": "string"
          }
        ],
        "solarFeedInTariff": [
          {
            "displayName": "string",
            "description": "string",
            "scheme": "PREMIUM",
            "payerType": "GOVERNMENT",
            "tariffUType": "GOVERNMENT",
            "singleTariff": {
              "amount": "string"
            },
            "timeVaryingTariffs": {
              "type": "PEAK",
              "amount": "string",
              "timeVariations": [
                {
                  "days": {
                    "weekdays": true,
                    "weekend": true
                  },
                  "startTime": "string",
                  "endTime": "string"
                }
              ]
            }
          }
        ],
        "tariffPeriod": [
          {
            "displayName": "string",
            "startDate": "string",
            "endDate": "string",
            "dailySupplyCharges": "string",
            "rateBlockUType": "singleRate",
            "singleRate": {
              "displayName": "string",
              "description": "string",
              "generalUnitPrice": "string",
              "rates": [
                {
                  "unitPrice": "string",
                  "volume": 0
                }
              ],
              "period": "string"
            },
            "timeOfUseRates": [
              {
                "displayName": "string",
                "description": "string",
                "rates": [
                  {
                    "unitPrice": "string",
                    "volume": 0
                  }
                ],
                "timeOfUse": [
                  {
                    "days": [],
                    "startTime": "string",
                    "endTime": "string"
                  }
                ],
                "type": "PEAK"
              }
            ],
            "demandCharges": [
              {
                "displayName": "string",
                "description": "string",
                "amount": "string",
                "startTime": "string",
                "endTime": "string",
                "days": {
                  "weekdays": true,
                  "saturday": true,
                  "sunday": true
                },
                "minDemand": "string",
                "maxDemand": "string",
                "measurementPeriod": "DAY",
                "chargePeriod": "DAY"
              }
            ]
          }
        ]
      }
    },
    "authorisedContacts": [
      {
        "firstName": "string",
        "lastName": "string",
        "middleNames": [
          "string"
        ],
        "prefix": "string",
        "suffix": "string"
      }
    ]
  },
  "links": {
    "self": "string"
  },
  "meta": {}
}
```

<h3 id="get-account-detail-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|Inline|

<h3 id="get-account-detail-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Description|
|---|---|---|---|
|» data|object|mandatory|none|
|»» accountId|string|mandatory|The ID of the account.  To be created in accordance with CDR ID permanence requirements|
|»» accountNumber|string|optional|Optional identifier of the account as defined by the data holder.  This must be the value presented on physical statements (if it exists) and must not be used for the value of accountId|
|»» displayName|string|optional|An optional display name for the account if one exists or can be derived.  The content of this field is at the discretion of the data holder|
|»» creationDate|[DateString](#common-field-types)|mandatory|The date that the account was created or opened|
|»» servicePointIds|[string]|mandatory|An array of servicePointIds, representing NMIs, that this account is linked to|
|»» planOverview|object|mandatory|none|
|»»» displayName|string|optional|The name of the plan if one exists|
|»»» startDate|[DateString](#common-field-types)|mandatory|The start date of the applicability of this plan|
|»»» endDate|[DateString](#common-field-types)|optional|The end date of the applicability of this plan|
|»» planDetail|object|mandatory|Detail on the plan applicable to this account|
|»»» fuelType|string|mandatory|The fuel types covered by the plan|
|»»» meteringCharges|[object]|optional|Charges for metering included in the plan|
|»»»» displayName|string|mandatory|Display name of the charge|
|»»»» description|string|optional|Description of the charge|
|»»»» minimumValue|[AmountString](#common-field-types)|mandatory|Minimum value of the charge if the charge is a range or the absolute value of the charge if no range is specified|
|»»»» maximumValue|[AmountString](#common-field-types)|optional|The upper limit of the charge if the charge could occur in a range|
|»»»» period|[ExternalRef](#common-field-types)|optional|The charges that occur on a schedule indicates the frequency. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)|
|»»» gasContract|[EnergyPlanContract](#schemacdr-energy-apienergyplancontract)|conditional|none|
|»»»» additionalFeeInformation|string|optional|Free text field containing additional information of the fees for this contract|
|»»»» pricingModel|string|mandatory|The pricing model for the contract.  Contracts for gas must use SINGLE_RATE.  Note that the detail for the enumeration values are:<ul><li>**SINGLE_RATE** - all energy usage is charged at a single unit rate no matter when it is consumed. Multiple unit rates may exist that correspond to varying volumes of usage i.e. a ‘block’ or ‘step’ tariff (first 50kWh @ X cents, next 50kWh at Y cents etc.</li><li>**SINGLE_RATE_CONT_LOAD** - as above, but with an additional, separate unit rate charged for all energy usage from a controlled load i.e. separately metered appliance like hot water service, pool pump etc.</li><li>**TIME_OF_USE** - energy usage is charged at unit rates that vary dependent on time of day and day of week that the energy is consumed</li><li>**TIME_OF_USE_CONT_LOAD** - as above, but with an additional, separate unit rate charged for all energy usage from a controlled load i.e. separately metered appliance like hot water service, pool pump etc.</li><li>**FLEXIBLE** - energy usage is charged at unit rates that vary based on external factors</li><li>**FLEXIBLE_CONT_LOAD** - as above, but with an additional, separate unit rate charged for all energy usage from a controlled load i.e. separately metered appliance like hot water service, pool pump etc.</li><li>**QUOTA** - all energy usage is charged at a single fixed rate, up to a specified usage quota/allowance. All excess usage beyond the allowance is then charged at a single unit rate (may not be the best way to explain it but it is essentially a ‘subscription’ or telco style product i.e. $50/month for up to 150kWh included usage</li></ul>|
|»»»» termType|string|optional|The term for the contract.  If absent assumes no specified term|
|»»»» timeZone|string|conditional|Required if pricingModel is set to TIME_OF_USE.  Defines the time zone to use for calculation of the time of use thresholds|
|»»»» benefitPeriod|string|conditional|Description of the benefit period.  Should only be present if termType has the value ONGOING|
|»»»» terms|string|optional|Free text description of the terms for the contract|
|»»»» isFixed|boolean|mandatory|Flag indicating whether prices are fixed or variable|
|»»»» variation|string|conditional|Free text description of price variation policy and conditions for the contract.  Mandatory if isFixed is true|
|»»»» onExpiryDescription|string|optional|Free text field that describes what will occur on or prior to expiry of the fixed contract term or benefit period|
|»»»» meterTypes|[string]|optional|An array of the meter types that this contract is available for|
|»»»» coolingOffDays|[PositiveInteger](#common-field-types)|conditional|Number of days in the cooling off period for the contract.  Mandatory for plans with type of MARKET|
|»»»» billFrequency|[string]|mandatory|An array of the available billing schedules for this contract. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)|
|»»»» paymentOption|[string]|mandatory|Payment options for this contract|
|»»»» intrinsicGreenPower|object|optional|Describes intrinsic green power for the plan.  If present then the plan includes a percentage of green power in the base plan. Should not be present for gas contracts|
|»»»»» greenPercentage|[RateString](#common-field-types)|mandatory|Percentage of green power intrinsically included in the plan|
|»»»» controlledLoad|[EnergyPlanControlledLoad](#schemacdr-energy-apienergyplancontrolledload)|conditional|Required if pricing model is SINGLE_RATE_CONT_LOAD or TIME_OF_USE_CONT_LOAD|
|»»»»» displayName|string|mandatory|A display name for the controlled load tier|
|»»»»» description|string|optional|A description of the controlled load tier|
|»»»»» dailyCharge|[AmountString](#common-field-types)|mandatory|The daily supply charge (exclusive of GST) for this controlled load tier|
|»»»»» period|[ExternalRef](#common-field-types)|mandatory|The period for which the controlled load rate applies. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)|
|»»»»» rates|[object]|mandatory|Array of controlled load rates in order of usage volume|
|»»»»»» unitPrice|[AmountString](#common-field-types)|mandatory|Unit price of usage per kWh (exclusive of GST)|
|»»»»»» volume|number|optional|Volume in kWh that this rate applies to.  Only applicable for ‘stepped’ rates where different rates apply for different volumes of usage in a period|
|»»»»» incentives|[object]|optional|Optional list of incentives available for the contract|
|»»»»»» displayName|string|mandatory|The display name of the incentive|
|»»»»»» description|string|mandatory|The description of the incentive|
|»»»»»» category|string|mandatory|The type of the incentive|
|»»»»»» eligibility|string|optional|A display message outlining an eligibility criteria that may apply|
|»»»»» discounts|[object]|optional|Optional list of discounts available for the contract|
|»»»»»» displayName|string|mandatory|The display name of the discount|
|»»»»»» description|string|optional|The description of the discount|
|»»»»»» type|string|mandatory|The type of the discount|
|»»»»»» category|string|optional|The type of the discount.  Mandatory if the discount type is CONDITIONAL|
|»»»»»» endDate|[DateString](#common-field-types)|optional|Optional end date for the discount after which the discount is no longer available|
|»»»»»» methodUType|string|mandatory|The method of calculation of the discount|
|»»»»»» percentOfBill|object|optional|Required if methodUType is percentOfBill|
|»»»»»»» rate|[RateString](#common-field-types)|mandatory|The rate of the discount applied to the bill amount|
|»»»»»» percentOfUse|object|optional|Required if methodUType is percentOfUse|
|»»»»»»» rate|[RateString](#common-field-types)|mandatory|The rate of the discount applied to the usageamount|
|»»»»»» fixedAmount|object|optional|Required if methodUType is fixedAmount|
|»»»»»»» amount|[AmountString](#common-field-types)|mandatory|The amount of the discount|
|»»»»»» percentOverThreshold|object|optional|Required if methodUType is percentOverThreshold|
|»»»»»»» rate|[RateString](#common-field-types)|mandatory|The rate of the discount over the usage amount|
|»»»»»»» usageAmount|[AmountString](#common-field-types)|mandatory|The usage amount threshold above which the discount applies|
|»»»»»» greenPowerCharges|[object]|optional|Optional list of charges applicable to green power|
|»»»»»»» displayName|string|mandatory|The display name of the charge|
|»»»»»»» description|string|optional|The description of the charge|
|»»»»»»» scheme|string|mandatory|The applicable green power scheme|
|»»»»»»» type|string|mandatory|The type of charge|
|»»»»»»» tiers|[object]|mandatory|Array of charge tiers based on the percentage of green power used for the period implied by the type.  Array is in order of increasing percentage of green power|
|»»»»»»»» percentGreen|[RateString](#common-field-types)|mandatory|The upper percentage of green power used applicable for this tier|
|»»»»»»»» rate|[RateString](#common-field-types)|conditional|The rate of the charge if the type implies the application of a rate|
|»»»»»»»» amount|[AmountString](#common-field-types)|conditional|The amount of the charge if the type implies the application of a fixed amount|
|»»»»»»» eligibility|[object]|optional|Eligibility restrictions or requirements|
|»»»»»»»» type|string|mandatory|The type of the eligibility restriction.<br/>The CONTINGENT_PLAN value indicates that the plan is contingent on the customer taking up an alternate fuel plan from the same retailer (for instance, if the fuelType is ELECTRICITY then a GAS plan from the same retailer must be taken up)|
|»»»»»»»» information|string|mandatory|Information of the eligibility restriction specific to the type of the restriction|
|»»»»»»»» description|string|optional|A description of the eligibility restriction|
|»»»»»»» fees|[object]|optional|An array of fees applicable to the plan|
|»»»»»»»» type|string|mandatory|The type of the fee|
|»»»»»»»» term|string|mandatory|The term of the fee|
|»»»»»»»» amount|[AmountString](#common-field-types)|conditional|The fee amount. Required if term is not PERCENT_OF_BILL|
|»»»»»»»» rate|[RateString](#common-field-types)|conditional|The fee rate. Required if term is PERCENT_OF_BILL|
|»»»»»»»» description|string|optional|A description of the fee|
|»»»»»»» solarFeedInTariff|[object]|optional|Array of feed in tariffs for solar power|
|»»»»»»»» displayName|string|mandatory|The name of the tariff|
|»»»»»»»» description|string|optional|A description of the tariff|
|»»»»»»»» scheme|string|mandatory|The applicable scheme|
|»»»»»»»» payerType|string|mandatory|The type of the payer|
|»»»»»»»» tariffUType|string|mandatory|The type of the payer|
|»»»»»»»» singleTariff|object|conditional|Represents a constant tariff.  Mandatory if tariffUType is set to singleTariff|
|»»»»»»»»» amount|[AmountString](#common-field-types)|mandatory|The tariff amount|
|»»»»»»»» timeVaryingTariffs|object|conditional|Represents a tariff based on time.  Mandatory if tariffUType is set to timeVaryingTariffs|
|»»»»»»»»» type|string|optional|The type of the charging time period. If absent applies to all periods|
|»»»»»»»»» amount|[AmountString](#common-field-types)|mandatory|The tariff amount|
|»»»»»»»»» timeVariations|[object]|mandatory|Array of time periods for which this tariff is applicable|
|»»»»»»»»»» days|object|optional|none|
|»»»»»»»»»»» weekdays|boolean|mandatory|Indicates whether the tariff is applicable Monday to Friday|
|»»»»»»»»»»» weekend|boolean|mandatory|Indicates whether the tariff is applicable Saturday and Sunday|
|»»»»»»»»»» startTime|[TimeString](#common-field-types)|optional|The beginning of the time period per day for which the tariff applies.  If absent assumes start of day (ie. midnight)|
|»»»»»»»»»» endTime|[TimeString](#common-field-types)|optional|The end of the time period per day for which the tariff applies.  If absent assumes end of day (ie. one second before midnight)|
|»»»»»»»»» tariffPeriod|[object]|mandatory|Array of tariff periods|
|»»»»»»»»»» displayName|string|mandatory|The name of the tariff period|
|»»»»»»»»»» startDate|string|mandatory|The start date of the tariff period in a calendar year.  Formatted in mm-dd format|
|»»»»»»»»»» endDate|string|mandatory|The end date of the tariff period in a calendar year.  Formatted in mm-dd format|
|»»»»»»»»»» dailySupplyCharges|[AmountString](#common-field-types)|mandatory|The amount of access charge for the tariff period, in cents per day exclusive of GST.|
|»»»»»»»»»» rateBlockUType|string|mandatory|Specifies the type of rate applicable to this tariff period|
|»»»»»»»»»» singleRate|object|conditional|Object representing a single rate.  Required if rateBlockUType is singleRate|
|»»»»»»»»»»» displayName|string|mandatory|Display name of the rate|
|»»»»»»»»»»» description|string|optional|Description of the rate|
|»»»»»»»»»»» generalUnitPrice|[AmountString](#common-field-types)|conditional|The block rate (unit price) for any usage above the included fixed usage, in cents per kWh inclusive of GST.  Only required if pricingModel field is ‘QUOTA’|
|»»»»»»»»»»» rates|[object]|mandatory|Array of controlled load rates in order of usage volume|
|»»»»»»»»»»»» unitPrice|[AmountString](#common-field-types)|mandatory|Unit price of usage per kWh (exclusive of GST)|
|»»»»»»»»»»»» volume|number|optional|Volume in kWh that this rate applies to.  Only applicable for ‘stepped’ rates where different rates apply for different volumes of usage in a period|
|»»»»»»»»»»» period|[ExternalRef](#common-field-types)|optional|Usage period for which the block rate applies. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)|
|»»»»»»»»»» timeOfUseRates|[object]|conditional|Array of objects representing time of use rates.  Required if rateBlockUType is timeOfUseRates|
|»»»»»»»»»»» displayName|string|mandatory|Display name of the rate|
|»»»»»»»»»»» description|string|optional|Description of the rate|
|»»»»»»»»»»» rates|[object]|mandatory|Array of controlled load rates in order of usage volume|
|»»»»»»»»»»»» unitPrice|[AmountString](#common-field-types)|mandatory|Unit price of usage per kWh (exclusive of GST)|
|»»»»»»»»»»»» volume|number|optional|Volume in kWh that this rate applies to.  Only applicable for ‘stepped’ rates where different rates apply for different volumes of usage in a period|
|»»»»»»»»»»» timeOfUse|[object]|mandatory|Array of times of use|
|»»»»»»»»»»»» days|[string]|mandatory|The days that the rate applies to|
|»»»»»»»»»»»» startTime|string|mandatory|Start of the period in HHMM format using 24 hour clock format|
|»»»»»»»»»»»» endTime|string|mandatory|End of the period in HHMM format using 24 hour clock format|
|»»»»»»»»»»» type|string|mandatory|The type of usage that the rate applies to|
|»»»»»»»»»» demandCharges|[object]|conditional|Array of demand charges.  Required if rateBlockUType is demandCharges|
|»»»»»»»»»»» displayName|string|mandatory|Display name of the charge|
|»»»»»»»»»»» description|string|optional|Description of the charge|
|»»»»»»»»»»» amount|[AmountString](#common-field-types)|mandatory|The charge amount per kWh exclusive of GST|
|»»»»»»»»»»» startTime|string|mandatory|Start of the period in HHMM format using 24 hour clock format|
|»»»»»»»»»»» endTime|string|mandatory|End of the period in HHMM format using 24 hour clock format|
|»»»»»»»»»»» days|object|optional|Object containing demand tariff by day of week|
|»»»»»»»»»»»» weekdays|boolean|mandatory|Indicates the demand tariff is applicable on weekdays|
|»»»»»»»»»»»» saturday|boolean|mandatory|Indicates the demand tariff is applicable on Saturdays|
|»»»»»»»»»»»» sunday|boolean|mandatory|Indicates the demand tariff is applicable on Sundays|
|»»»»»»»»»»» minDemand|[AmountString](#common-field-types)|optional|Minimum demand for this demand tariff in kW.  If absent then 0 is assumed|
|»»»»»»»»»»» maxDemand|[AmountString](#common-field-types)|optional|Maximum demand for this demand tariff in kW.  If present, must be higher than the value of the minDemand field|
|»»»»»»»»»»» measurementPeriod|string|mandatory|Application period for the demand tariff|
|»»»»»»»»»»» chargePeriod|string|mandatory|Charge period for the demand tariff|
|»»»»»»»»»» electricityContract|[EnergyPlanContract](#schemacdr-energy-apienergyplancontract)|conditional|none|
|»»»»»»»»» authorisedContacts|[object]|mandatory|An array of additional contacts that are authorised to act on this account|
|»»»»»»»»»» firstName|string|optional|For people with single names this field need not be present. The single name should be in the lastName field|
|»»»»»»»»»» lastName|string|mandatory|For people with single names the single name should be in this field|
|»»»»»»»»»» middleNames|[string]|optional|Field is mandatory but array may be empty|
|»»»»»»»»»» prefix|string|optional|Also known as title or salutation. The prefix to the name (e.g. Mr, Mrs, Ms, Miss, Sir, etc)|
|»»»»»»»»»» suffix|string|optional|Used for a trailing suffix to the name (e.g. Jr)|
|»»»»»»»»» links|[Links](#schemacdr-energy-apilinks)|mandatory|none|
|»»»»»»»»»» self|[URIString](#common-field-types)|mandatory|Fully qualified link that generated the current response document|
|»»»»»»»»» meta|[Meta](#schemacdr-energy-apimeta)|mandatory|none|

#### Enumerated Values

|Property|Value|
|---|---|
|fuelType|ELECTRICITY|
|fuelType|GAS|
|fuelType|DUAL|
|pricingModel|SINGLE_RATE|
|pricingModel|SINGLE_RATE_CONT_LOAD|
|pricingModel|TIME_OF_USE|
|pricingModel|TIME_OF_USE_CONT_LOAD|
|pricingModel|FLEXIBLE|
|pricingModel|FLEXIBLE_CONT_LOAD|
|pricingModel|QUOTA|
|termType|1_YEAR|
|termType|2_YEAR|
|termType|3_YEAR|
|termType|4_YEAR|
|termType|5_YEAR|
|termType|ONGOING|
|termType|OTHER|
|timeZone|LOCAL|
|timeZone|AEST|
|category|GIFT|
|category|ACCOUNT_CREDIT|
|category|OTHER|
|type|CONDITIONAL|
|type|GUARANTEED|
|category|PAY_ON_TIME|
|category|DIRECT_DEBIT|
|category|GUARANTEED_DISCOUNT|
|category|OTHER|
|methodUType|percentOfBill|
|methodUType|percentOfUse|
|methodUType|fixedAmount|
|methodUType|percentOverThreshold|
|scheme|GREENPOWER|
|scheme|OTHER|
|type|FIXED_PER_DAY|
|type|FIXED_PER_WEEK|
|type|FIXED_PER_MONTH|
|type|FIXED_PER_UNIT|
|type|PERCENT_OF_USE|
|type|PERCENT_OF_BILL|
|type|EXISTING_CUST|
|type|EXISTING_POOL|
|type|EXISTING_SOLAR|
|type|EXISTING_BATTERY|
|type|EXISTING_SMART_METER|
|type|EXISTING_BASIC_METER|
|type|SENIOR_CARD|
|type|SMALL_BUSINESS|
|type|NO_SOLAR_FIT|
|type|NEW_CUSTOMER|
|type|ONLINE_ONLY|
|type|REQ_EQUIP_SUPPLIER|
|type|THIRD_PARTY_ONLY|
|type|SPORT_CLUB_MEMBER|
|type|ORG_MEMBER|
|type|SPECIFIC_LOCATION|
|type|MINIMUM_USAGE|
|type|LOYALTY_MEMBER|
|type|GROUP_BUY_MEMBER|
|type|CONTINGENT_PLAN|
|type|OTHER|
|type|EXIT|
|type|ESTABLISHMENT|
|type|LATE_PAYMENT|
|type|DISCONNECTION|
|type|DISCONNECT_MOVE_OUT|
|type|DISCONNECT_NON_PAY|
|type|RECONNECTION|
|type|CONNECTION|
|type|PAYMENT_PROCESSING|
|type|CC_PROCESSING|
|type|CHEQUE_DISHONOUR|
|type|DD_DISHONOUR|
|type|MEMBERSHIP|
|type|CONTRIBUTION|
|type|PAPER_BILL|
|type|OTHER|
|term|FIXED|
|term|1_YEAR|
|term|2_YEAR|
|term|3_YEAR|
|term|4_YEAR|
|term|5_YEAR|
|term|PERCENT_OF_BILL|
|term|ANNUAL|
|term|DAILY|
|term|MONTHLY|
|term|BIANNUAL|
|scheme|PREMIUM|
|scheme|OTHER|
|payerType|GOVERNMENT|
|payerType|RETAILER|
|tariffUType|GOVERNMENT|
|tariffUType|RETAILER|
|type|PEAK|
|type|OFF_PEAK|
|type|SHOULDER|
|rateBlockUType|singleRate|
|rateBlockUType|timeOfUseRates|
|rateBlockUType|demandCharges|
|type|PEAK|
|type|OFF_PEAK|
|type|SHOULDER|
|type|SHOULDER1|
|type|SHOULDER2|
|measurementPeriod|DAY|
|measurementPeriod|MONTH|
|measurementPeriod|TARIFF_PERIOD|
|chargePeriod|DAY|
|chargePeriod|MONTH|
|chargePeriod|TARIFF_PERIOD|

  
    <aside class="success">
This operation does not require authentication
</aside>

  

## Get Agreed Payment Schedule

<a id="opIdgetPaymentSchedule"></a>

> Code samples

```http
GET /energy/accounts/{accountId}/payment-schedule HTTP/1.1

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
  url: '/energy/accounts/{accountId}/payment-schedule',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`GET /energy/accounts/{accountId}/payment-schedule`

Obtain the agreed payment schedule and details, if any, for a specific energy account

###Endpoint Version
|   |  |
|---|--|
|Version|**undefined**

<h3 id="get-agreed-payment-schedule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|mandatory|ID of a specific account to obtain data for.  This is a tokenised ID previous obtained from the Account List end point.|
|x-v|header|string|mandatory|Version of the API end point requested by the client. Must be set to a positive integer. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If the value of [x-min-v](#request-headers) is equal to or higher than the value of [x-v](#request-headers) then the [x-min-v](#request-headers) header should be treated as absent. If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable. See [HTTP Headers](#request-headers)|
|x-min-v|header|string|optional|Minimum version of the API end point requested by the client. Must be set to a positive integer if provided. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable.|
|x-fapi-interaction-id|header|string|optional|An [RFC4122](https://tools.ietf.org/html/rfc4122) UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a [RFC4122] UUID value is required to be provided in the response header to track the interaction.|
|x-fapi-auth-date|header|string|optional|The time when the customer last logged in to the data recipient. Required for all resource calls (customer present and unattended). Not to be included for unauthenticated calls.|
|x-fapi-customer-ip-address|header|string|optional|The customer's original IP address if the customer is currently logged in to the data recipient. The presence of this header indicates that the API is being called in a customer present context. Not to be included for unauthenticated calls.|
|x-cds-client-headers|header|[Base64](#common-field-types)|optional|The customer's original standard http headers [Base64](#common-field-types) encoded, including the original User Agent header, if the customer is currently logged in to the data recipient. Mandatory for customer present calls.  Not required for unattended or unauthenticated calls.|

> Example responses

> 200 Response

```json
{
  "data": {
    "amount": "string",
    "paymentScheduleUType": "cardDebit",
    "cardDebit": {
      "cardScheme": "VISA",
      "paymentFrequency": "string",
      "calculationType": "STATIC"
    },
    "directDebit": {
      "isTokenised": "string",
      "bsb": "string",
      "accountNumber": "string",
      "paymentFrequency": "string",
      "calculationType": "STATIC"
    },
    "manualPayment": {
      "billFrequency": "string"
    }
  },
  "links": {
    "self": "string"
  },
  "meta": {}
}
```

<h3 id="get-agreed-payment-schedule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|Inline|

<h3 id="get-agreed-payment-schedule-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Description|
|---|---|---|---|
|» data|object|mandatory|none|
|»» amount|[AmountString](#common-field-types)|optional|Optional payment amount indicating that a constant payment amount is scheduled to be paid (used in bill smooting scenarios)|
|»» paymentScheduleUType|string|mandatory|The type of object present in this response|
|»» cardDebit|object|conditional|Represents a regular credit card payment schedule. Mandatory if paymentScheduleUType is set to cardDebit|
|»»» cardScheme|string|mandatory|The type of credit card held on file|
|»»» paymentFrequency|[ExternalRef](#common-field-types)|mandatory|The frequency that payments will occur.  Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)|
|»»» calculationType|string|mandatory|The mechanism by which the payment amount is calculated|
|»» directDebit|object|conditional|Represents a regular direct debit from a specified bank account. Mandatory if paymentScheduleUType is set to directDebit|
|»»» isTokenised|string|optional|Flag indicating that the account details are tokenised and cannot be shared.  False if absent.  If false then bsb and accountNumber should not be expected to be included|
|»»» bsb|string|conditional|The unmasked BSB for the account to be debited. Is expected to be formatted as digits only with leading zeros included and no punctuation or spaces.  Is required if isTokenised is absent or false|
|»»» accountNumber|string|conditional|The unmasked account number for the account to be debited. Is expected to be formatted as digits only with leading zeros included and no punctuation or spaces.  Is required if isTokenised is absent or false|
|»»» paymentFrequency|[ExternalRef](#common-field-types)|mandatory|The frequency that payments will occur.  Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)|
|»»» calculationType|string|mandatory|The mechanism by which the payment amount is calculated|
|»» manualPayment|object|conditional|Represents a manual payment schedule where the customer pays in response to a delivered statement. Mandatory if paymentScheduleUType is set to manualPayment|
|»»» billFrequency|[ExternalRef](#common-field-types)|mandatory|The frequency with which a bill will be issued.  Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)|
|»» links|[Links](#schemacdr-energy-apilinks)|mandatory|none|
|»»» self|[URIString](#common-field-types)|mandatory|Fully qualified link that generated the current response document|
|»» meta|[Meta](#schemacdr-energy-apimeta)|mandatory|none|

#### Enumerated Values

|Property|Value|
|---|---|
|paymentScheduleUType|cardDebit|
|paymentScheduleUType|directDebit|
|paymentScheduleUType|manualPayment|
|cardScheme|VISA|
|cardScheme|MASTERCARD|
|cardScheme|AMEX|
|cardScheme|DINERS|
|cardScheme|OTHER|
|cardScheme|UNKNOWN|
|calculationType|STATIC|
|calculationType|BALANCE|
|calculationType|CALCULATED|
|calculationType|STATIC|
|calculationType|BALANCE|
|calculationType|CALCULATED|

  
    <aside class="success">
This operation does not require authentication
</aside>

  

## Get Concessions

<a id="opIdgetConcessions"></a>

> Code samples

```http
GET /energy/accounts/{accountId}/concessions HTTP/1.1

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
  url: '/energy/accounts/{accountId}/concessions',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`GET /energy/accounts/{accountId}/concessions`

Obtain the details of any concessions or hardship arrangements applied to a specific energy account

###Endpoint Version
|   |  |
|---|--|
|Version|**undefined**

<h3 id="get-concessions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|mandatory|ID of a specific account to obtain data for.  This is a tokenised ID previous obtained from the Account List end point.|
|x-v|header|string|mandatory|Version of the API end point requested by the client. Must be set to a positive integer. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If the value of [x-min-v](#request-headers) is equal to or higher than the value of [x-v](#request-headers) then the [x-min-v](#request-headers) header should be treated as absent. If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable. See [HTTP Headers](#request-headers)|
|x-min-v|header|string|optional|Minimum version of the API end point requested by the client. Must be set to a positive integer if provided. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable.|
|x-fapi-interaction-id|header|string|optional|An [RFC4122](https://tools.ietf.org/html/rfc4122) UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a [RFC4122] UUID value is required to be provided in the response header to track the interaction.|
|x-fapi-auth-date|header|string|optional|The time when the customer last logged in to the data recipient. Required for all resource calls (customer present and unattended). Not to be included for unauthenticated calls.|
|x-fapi-customer-ip-address|header|string|optional|The customer's original IP address if the customer is currently logged in to the data recipient. The presence of this header indicates that the API is being called in a customer present context. Not to be included for unauthenticated calls.|
|x-cds-client-headers|header|[Base64](#common-field-types)|optional|The customer's original standard http headers [Base64](#common-field-types) encoded, including the original User Agent header, if the customer is currently logged in to the data recipient. Mandatory for customer present calls.  Not required for unattended or unauthenticated calls.|

> Example responses

> 200 Response

```json
{
  "data": {
    "concessions": [
      {
        "displayName": "string",
        "additionalInfo": "string",
        "additionalInfoUri": "string",
        "startDate": "string",
        "endDate": "string",
        "dailyDiscount": "string",
        "monthlyDiscount": "string",
        "yearlyDiscount": "string",
        "percentageDiscount": "string"
      }
    ]
  },
  "links": {
    "self": "string"
  },
  "meta": {}
}
```

<h3 id="get-concessions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|Inline|

<h3 id="get-concessions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Description|
|---|---|---|---|
|» data|object|mandatory|none|
|»» concessions|[object]|mandatory|Array may be empty if no concessions exist|
|»»» displayName|string|mandatory|The display name of the concession|
|»»» additionalInfo|string|optional|Display text providing more information on the concession|
|»»» additionalInfoUri|[URIString](#common-field-types)|optional|Optional link to additional information regarding the concession|
|»»» startDate|[DateString](#common-field-types)|optional|Optional start date for the application of the concession|
|»»» endDate|[DateString](#common-field-types)|optional|Optional end date for the application of the concession|
|»»» dailyDiscount|[AmountString](#common-field-types)|conditional|Daily discount value due to the concession.  At least one dailyDiscount, monthlyDiscount, yearlyDiscount and percentageDiscount must be provided|
|»»» monthlyDiscount|[AmountString](#common-field-types)|conditional|Monthly discount value due to the concession.  At least one dailyDiscount, monthlyDiscount, yearlyDiscount and percentageDiscount must be provided|
|»»» yearlyDiscount|[AmountString](#common-field-types)|conditional|Annual discount value due to the concession.  At least one dailyDiscount, monthlyDiscount, yearlyDiscount and percentageDiscount must be provided|
|»»» percentageDiscount|[RateString](#common-field-types)|conditional|Percentage of each invoice to be discounted due to the concession.  At least one dailyDiscount, monthlyDiscount, yearlyDiscount and percentageDiscount must be provided|
|»» links|[Links](#schemacdr-energy-apilinks)|mandatory|none|
|»»» self|[URIString](#common-field-types)|mandatory|Fully qualified link that generated the current response document|
|»» meta|[Meta](#schemacdr-energy-apimeta)|mandatory|none|

  
    <aside class="success">
This operation does not require authentication
</aside>

  

## Get Balance For Account

<a id="opIdgetBalanceForAccount"></a>

> Code samples

```http
GET /energy/accounts/{accountId}/balance HTTP/1.1

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
  url: '/energy/accounts/{accountId}/balance',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`GET /energy/accounts/{accountId}/balance`

Obtain the current balance for a specific account

###Endpoint Version
|   |  |
|---|--|
|Version|**undefined**

<h3 id="get-balance-for-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|mandatory|ID of a specific account to obtain data for.  This is a tokenised ID previous obtained from the Account List end point.|
|x-v|header|string|mandatory|Version of the API end point requested by the client. Must be set to a positive integer. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If the value of [x-min-v](#request-headers) is equal to or higher than the value of [x-v](#request-headers) then the [x-min-v](#request-headers) header should be treated as absent. If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable. See [HTTP Headers](#request-headers)|
|x-min-v|header|string|optional|Minimum version of the API end point requested by the client. Must be set to a positive integer if provided. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable.|
|x-fapi-interaction-id|header|string|optional|An [RFC4122](https://tools.ietf.org/html/rfc4122) UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a [RFC4122] UUID value is required to be provided in the response header to track the interaction.|
|x-fapi-auth-date|header|string|optional|The time when the customer last logged in to the data recipient. Required for all resource calls (customer present and unattended). Not to be included for unauthenticated calls.|
|x-fapi-customer-ip-address|header|string|optional|The customer's original IP address if the customer is currently logged in to the data recipient. The presence of this header indicates that the API is being called in a customer present context. Not to be included for unauthenticated calls.|
|x-cds-client-headers|header|[Base64](#common-field-types)|optional|The customer's original standard http headers [Base64](#common-field-types) encoded, including the original User Agent header, if the customer is currently logged in to the data recipient. Mandatory for customer present calls.  Not required for unattended or unauthenticated calls.|

> Example responses

> 200 Response

```json
{
  "data": {
    "balance": "string"
  },
  "links": {
    "self": "string"
  },
  "meta": {}
}
```

<h3 id="get-balance-for-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|Inline|

<h3 id="get-balance-for-account-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Description|
|---|---|---|---|
|» data|object|mandatory|none|
|»» balance|[AmountString](#common-field-types)|mandatory|The current balance of the account.  A positive value indicates that amount is owing to be paid.  A negative value indicates that the account is in credit|
|» links|[Links](#schemacdr-energy-apilinks)|mandatory|none|
|»» self|[URIString](#common-field-types)|mandatory|Fully qualified link that generated the current response document|
|» meta|[Meta](#schemacdr-energy-apimeta)|mandatory|none|

  
    <aside class="success">
This operation does not require authentication
</aside>

  

## Get Bulk Balances

<a id="opIdlistBalancesBulk"></a>

> Code samples

```http
GET /energy/accounts/balances HTTP/1.1

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
  url: '/energy/accounts/balances',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`GET /energy/accounts/balances`

Obtain the current balance for all accounts

###Endpoint Version
|   |  |
|---|--|
|Version|**undefined**

<h3 id="get-bulk-balances-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|number|optional|Page of results to request (standard pagination)|
|page-size|query|number|optional|Page size to request.  Default is 25 (standard pagination)|
|x-v|header|string|mandatory|Version of the API end point requested by the client. Must be set to a positive integer. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If the value of [x-min-v](#request-headers) is equal to or higher than the value of [x-v](#request-headers) then the [x-min-v](#request-headers) header should be treated as absent. If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable. See [HTTP Headers](#request-headers)|
|x-min-v|header|string|optional|Minimum version of the API end point requested by the client. Must be set to a positive integer if provided. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable.|
|x-fapi-interaction-id|header|string|optional|An [RFC4122](https://tools.ietf.org/html/rfc4122) UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a [RFC4122] UUID value is required to be provided in the response header to track the interaction.|
|x-fapi-auth-date|header|string|optional|The time when the customer last logged in to the data recipient. Required for all resource calls (customer present and unattended). Not to be included for unauthenticated calls.|
|x-fapi-customer-ip-address|header|string|optional|The customer's original IP address if the customer is currently logged in to the data recipient. The presence of this header indicates that the API is being called in a customer present context. Not to be included for unauthenticated calls.|
|x-cds-client-headers|header|[Base64](#common-field-types)|optional|The customer's original standard http headers [Base64](#common-field-types) encoded, including the original User Agent header, if the customer is currently logged in to the data recipient. Mandatory for customer present calls.  Not required for unattended or unauthenticated calls.|

> Example responses

> 200 Response

```json
{
  "data": {
    "balances": [
      {
        "accountId": "string",
        "balance": "string"
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

<h3 id="get-bulk-balances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|Inline|

<h3 id="get-bulk-balances-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Description|
|---|---|---|---|
|» data|object|mandatory|none|
|»» balances|[object]|mandatory|Array of account balances|
|»»» accountId|string|mandatory|The ID of the account|
|»»» balance|[AmountString](#common-field-types)|mandatory|The current balance of the account.  A positive value indicates that amount is owing to be paid.  A negative value indicates that the account is in credit|
|»» links|[LinksPaginated](#schemacdr-energy-apilinkspaginated)|mandatory|none|
|»»» self|[URIString](#common-field-types)|mandatory|Fully qualified link that generated the current response document|
|»»» first|[URIString](#common-field-types)|conditional|URI to the first page of this set. Mandatory if this response is not the first page|
|»»» prev|[URIString](#common-field-types)|conditional|URI to the previous page of this set. Mandatory if this response is not the first page|
|»»» next|[URIString](#common-field-types)|conditional|URI to the next page of this set. Mandatory if this response is not the last page|
|»»» last|[URIString](#common-field-types)|conditional|URI to the last page of this set. Mandatory if this response is not the last page|
|»» meta|[MetaPaginated](#schemacdr-energy-apimetapaginated)|mandatory|none|
|»»» totalRecords|[NaturalNumber](#common-field-types)|mandatory|The total number of records in the full set. See [pagination](#pagination).|
|»»» totalPages|[NaturalNumber](#common-field-types)|mandatory|The total number of pages in the full set. See [pagination](#pagination).|

  
    <aside class="success">
This operation does not require authentication
</aside>

  

## Get Balances For Specific Accounts

<a id="opIdlistBalancesForAccounts"></a>

> Code samples

```http
POST /energy/accounts/balances HTTP/1.1

Content-Type: application/json
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
  'Content-Type':'application/json',
  'Accept':'application/json',
  'x-v':'string',
  'x-min-v':'string',
  'x-fapi-interaction-id':'string',
  'x-fapi-auth-date':'string',
  'x-fapi-customer-ip-address':'string',
  'x-cds-client-headers':'string'

};

$.ajax({
  url: '/energy/accounts/balances',
  method: 'post',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`POST /energy/accounts/balances`

Obtain the current balance for a specified set of accounts

> Body parameter

```json
{
  "data": {
    "accountIds": [
      "string"
    ]
  },
  "meta": {}
}
```

###Endpoint Version
|   |  |
|---|--|
|Version|**undefined**

<h3 id="get-balances-for-specific-accounts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|number|optional|Page of results to request (standard pagination)|
|page-size|query|number|optional|Page size to request.  Default is 25 (standard pagination)|
|x-v|header|string|mandatory|Version of the API end point requested by the client. Must be set to a positive integer. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If the value of [x-min-v](#request-headers) is equal to or higher than the value of [x-v](#request-headers) then the [x-min-v](#request-headers) header should be treated as absent. If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable. See [HTTP Headers](#request-headers)|
|x-min-v|header|string|optional|Minimum version of the API end point requested by the client. Must be set to a positive integer if provided. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable.|
|x-fapi-interaction-id|header|string|optional|An [RFC4122](https://tools.ietf.org/html/rfc4122) UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a [RFC4122] UUID value is required to be provided in the response header to track the interaction.|
|x-fapi-auth-date|header|string|optional|The time when the customer last logged in to the data recipient. Required for all resource calls (customer present and unattended). Not to be included for unauthenticated calls.|
|x-fapi-customer-ip-address|header|string|optional|The customer's original IP address if the customer is currently logged in to the data recipient. The presence of this header indicates that the API is being called in a customer present context. Not to be included for unauthenticated calls.|
|x-cds-client-headers|header|[Base64](#common-field-types)|optional|The customer's original standard http headers [Base64](#common-field-types) encoded, including the original User Agent header, if the customer is currently logged in to the data recipient. Mandatory for customer present calls.  Not required for unattended or unauthenticated calls.|
|body|body|[accountIdList](#schemacdr-energy-apiaccountidlist)|mandatory|Request payload containing list of specific Accounts to obtain data for|
|» data|body|object|mandatory|none|
|»» accountIds|body|[string]|mandatory|Array of specific accountIds to obtain data for|
|» meta|body|[Meta](#schemacdr-energy-apimeta)|mandatory|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "balances": [
      {
        "accountId": "string",
        "balance": "string"
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

<h3 id="get-balances-for-specific-accounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|Inline|

<h3 id="get-balances-for-specific-accounts-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Description|
|---|---|---|---|
|» data|object|mandatory|none|
|»» balances|[object]|mandatory|Array of account balances|
|»»» accountId|string|mandatory|The ID of the account|
|»»» balance|[AmountString](#common-field-types)|mandatory|The current balance of the account.  A positive value indicates that amount is owing to be paid.  A negative value indicates that the account is in credit|
|»» links|[LinksPaginated](#schemacdr-energy-apilinkspaginated)|mandatory|none|
|»»» self|[URIString](#common-field-types)|mandatory|Fully qualified link that generated the current response document|
|»»» first|[URIString](#common-field-types)|conditional|URI to the first page of this set. Mandatory if this response is not the first page|
|»»» prev|[URIString](#common-field-types)|conditional|URI to the previous page of this set. Mandatory if this response is not the first page|
|»»» next|[URIString](#common-field-types)|conditional|URI to the next page of this set. Mandatory if this response is not the last page|
|»»» last|[URIString](#common-field-types)|conditional|URI to the last page of this set. Mandatory if this response is not the last page|
|»» meta|[MetaPaginated](#schemacdr-energy-apimetapaginated)|mandatory|none|
|»»» totalRecords|[NaturalNumber](#common-field-types)|mandatory|The total number of records in the full set. See [pagination](#pagination).|
|»»» totalPages|[NaturalNumber](#common-field-types)|mandatory|The total number of pages in the full set. See [pagination](#pagination).|

  
    <aside class="success">
This operation does not require authentication
</aside>

  

## Get Invoices For Account

<a id="opIdgetInvoicesForAccount"></a>

> Code samples

```http
GET /energy/accounts/{accountId}/invoices HTTP/1.1

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
  url: '/energy/accounts/{accountId}/invoices',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`GET /energy/accounts/{accountId}/invoices`

Obtain the invoices for a specific account

###Endpoint Version
|   |  |
|---|--|
|Version|**undefined**

<h3 id="get-invoices-for-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|mandatory|ID of a specific account to obtain data for.  This is a tokenised ID previous obtained from the Account List end point.|
|newest-date|query|[DateString](#common-field-types)|optional|Constrain the request to records with effective date at or before this date.  If absent defaults to current date.  Format is aligned to DateString common type|
|oldest-date|query|[DateString](#common-field-types)|optional|Constrain the request to records with effective date at or after this date. If absent defaults to newest-date minus 24 months days.  Format is aligned to DateString common type|
|page|query|number|optional|Page of results to request (standard pagination)|
|page-size|query|number|optional|Page size to request.  Default is 25 (standard pagination)|
|x-v|header|string|mandatory|Version of the API end point requested by the client. Must be set to a positive integer. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If the value of [x-min-v](#request-headers) is equal to or higher than the value of [x-v](#request-headers) then the [x-min-v](#request-headers) header should be treated as absent. If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable. See [HTTP Headers](#request-headers)|
|x-min-v|header|string|optional|Minimum version of the API end point requested by the client. Must be set to a positive integer if provided. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable.|
|x-fapi-interaction-id|header|string|optional|An [RFC4122](https://tools.ietf.org/html/rfc4122) UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a [RFC4122] UUID value is required to be provided in the response header to track the interaction.|
|x-fapi-auth-date|header|string|optional|The time when the customer last logged in to the data recipient. Required for all resource calls (customer present and unattended). Not to be included for unauthenticated calls.|
|x-fapi-customer-ip-address|header|string|optional|The customer's original IP address if the customer is currently logged in to the data recipient. The presence of this header indicates that the API is being called in a customer present context. Not to be included for unauthenticated calls.|
|x-cds-client-headers|header|[Base64](#common-field-types)|optional|The customer's original standard http headers [Base64](#common-field-types) encoded, including the original User Agent header, if the customer is currently logged in to the data recipient. Mandatory for customer present calls.  Not required for unattended or unauthenticated calls.|

> Example responses

> 200 Response

```json
{
  "data": {
    "invoices": [
      {
        "accountId": "string",
        "invoiceNumber": "string",
        "issueDate": "string",
        "dueDate": "string",
        "period": {
          "startDate": "string",
          "endDate": "string"
        },
        "invoiceAmount": "string",
        "payOnTimeDiscount": {
          "amount": "string",
          "date": "string"
        },
        "balanceAtIssue": "string",
        "servicePoints": [
          "string"
        ],
        "gas": {
          "totalUsageCharges": "string",
          "totalOnceOffCharges": "string",
          "totalOnceOffDiscounts": "string"
        },
        "electricity": {
          "totalUsageCharges": "string",
          "totalGenerationCredits": "string",
          "totalOnceOffCharges": "string",
          "totalOnceOffDiscounts": "string"
        },
        "totalAccountCharges": "string",
        "totalAccountDiscounts": "string",
        "paymentStatus": "PAID"
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

<h3 id="get-invoices-for-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|Inline|

<h3 id="get-invoices-for-account-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Description|
|---|---|---|---|
|» data|object|mandatory|none|
|»» invoices|[object]|mandatory|Array of invoices sorted by date in descending order|
|»»» accountId|string|mandatory|The ID of the account for which the invoice was issued|
|»»» invoiceNumber|string|optional|The number assigned to this invoice by the energy Retailer|
|»»» issueDate|[DateString](#common-field-types)|mandatory|The date that the invoice was actually issued (as opposed to generated or calculated)|
|»»» dueDate|[DateString](#common-field-types)|optional|The date that the invoice is due to be paid|
|»»» period|object|mandatory|Object containing the start and end date for the period covered by the invoice|
|»»»» startDate|[DateString](#common-field-types)|mandatory|The start date of the period covered by this invoice|
|»»»» endDate|[DateString](#common-field-types)|mandatory|The end date of the period covered by this invoice|
|»»» invoiceAmount|[AmountString](#common-field-types)|optional|The net amount due for this invoice regardless of previous balance|
|»»» payOnTimeDiscount|object|optional|A discount for on time payment|
|»»»» amount|[AmountString](#common-field-types)|mandatory|The amount that will be discounted if the invoice is paid by the date specified|
|»»»» date|[DateString](#common-field-types)|mandatory|The date by which the invoice must be paid to receive the pay on time discount|
|»»» balanceAtIssue|[AmountString](#common-field-types)|mandatory|The account balance at the time the invoice was issued|
|»»» servicePoints|[string]|mandatory|Array of service point IDs to which this invoice applies. May be empty if the invoice contains no electricity usage related charges|
|»»» gas|object|optional|Object contain charges and credits related to gas usage|
|»»»» totalUsageCharges|[AmountString](#common-field-types)|mandatory|The aggregate total of usage charges for the period covered by the invoice|
|»»»» totalOnceOffCharges|[AmountString](#common-field-types)|mandatory|The aggregate total of any once off charges arising from electricity usage for the period covered by the invoice|
|»»»» totalOnceOffDiscounts|[AmountString](#common-field-types)|mandatory|The aggregate total of any once off discounts or credits arising from electricity usage for the period covered by the invoice|
|»»» electricity|object|optional|Object contain charges and credits related to electricity usage|
|»»»» totalUsageCharges|[AmountString](#common-field-types)|mandatory|The aggregate total of usage charges for the period covered by the invoice|
|»»»» totalGenerationCredits|[AmountString](#common-field-types)|mandatory|The aggregate total of generation credits for the period covered by the invoice|
|»»»» totalOnceOffCharges|[AmountString](#common-field-types)|mandatory|The aggregate total of any once off charges arising from electricity usage for the period covered by the invoice|
|»»»» totalOnceOffDiscounts|[AmountString](#common-field-types)|mandatory|The aggregate total of any once off discounts or credits arising from electricity usage for the period covered by the invoice|
|»»» totalAccountCharges|[AmountString](#common-field-types)|mandatory|The aggregate total of account level charges for the period covered by the invoice|
|»»» totalAccountDiscounts|[AmountString](#common-field-types)|mandatory|The aggregate total of account level discounts or credits for the period covered by the invoice|
|»»» paymentStatus|string|mandatory|Indicator of the payment status for the invoice|
|»» links|[LinksPaginated](#schemacdr-energy-apilinkspaginated)|mandatory|none|
|»»» self|[URIString](#common-field-types)|mandatory|Fully qualified link that generated the current response document|
|»»» first|[URIString](#common-field-types)|conditional|URI to the first page of this set. Mandatory if this response is not the first page|
|»»» prev|[URIString](#common-field-types)|conditional|URI to the previous page of this set. Mandatory if this response is not the first page|
|»»» next|[URIString](#common-field-types)|conditional|URI to the next page of this set. Mandatory if this response is not the last page|
|»»» last|[URIString](#common-field-types)|conditional|URI to the last page of this set. Mandatory if this response is not the last page|
|»» meta|[MetaPaginated](#schemacdr-energy-apimetapaginated)|mandatory|none|
|»»» totalRecords|[NaturalNumber](#common-field-types)|mandatory|The total number of records in the full set. See [pagination](#pagination).|
|»»» totalPages|[NaturalNumber](#common-field-types)|mandatory|The total number of pages in the full set. See [pagination](#pagination).|

#### Enumerated Values

|Property|Value|
|---|---|
|paymentStatus|PAID|
|paymentStatus|PARTIALLY_PAID|
|paymentStatus|NOT_PAID|

  
    <aside class="success">
This operation does not require authentication
</aside>

  

## Get Bulk Invoices

<a id="opIdlistInvoicesBulk"></a>

> Code samples

```http
GET /energy/accounts/invoices HTTP/1.1

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
  url: '/energy/accounts/invoices',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`GET /energy/accounts/invoices`

Obtain the invoices for all accounts

###Endpoint Version
|   |  |
|---|--|
|Version|**undefined**

<h3 id="get-bulk-invoices-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|newest-date|query|[DateString](#common-field-types)|optional|Constrain the request to records with effective date at or before this date.  If absent defaults to current date.  Format is aligned to DateString common type|
|oldest-date|query|[DateString](#common-field-types)|optional|Constrain the request to records with effective date at or after this date. If absent defaults to newest-date minus 24 months days.  Format is aligned to DateString common type|
|page|query|number|optional|Page of results to request (standard pagination)|
|page-size|query|number|optional|Page size to request.  Default is 25 (standard pagination)|
|x-v|header|string|mandatory|Version of the API end point requested by the client. Must be set to a positive integer. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If the value of [x-min-v](#request-headers) is equal to or higher than the value of [x-v](#request-headers) then the [x-min-v](#request-headers) header should be treated as absent. If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable. See [HTTP Headers](#request-headers)|
|x-min-v|header|string|optional|Minimum version of the API end point requested by the client. Must be set to a positive integer if provided. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable.|
|x-fapi-interaction-id|header|string|optional|An [RFC4122](https://tools.ietf.org/html/rfc4122) UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a [RFC4122] UUID value is required to be provided in the response header to track the interaction.|
|x-fapi-auth-date|header|string|optional|The time when the customer last logged in to the data recipient. Required for all resource calls (customer present and unattended). Not to be included for unauthenticated calls.|
|x-fapi-customer-ip-address|header|string|optional|The customer's original IP address if the customer is currently logged in to the data recipient. The presence of this header indicates that the API is being called in a customer present context. Not to be included for unauthenticated calls.|
|x-cds-client-headers|header|[Base64](#common-field-types)|optional|The customer's original standard http headers [Base64](#common-field-types) encoded, including the original User Agent header, if the customer is currently logged in to the data recipient. Mandatory for customer present calls.  Not required for unattended or unauthenticated calls.|

> Example responses

> 200 Response

```json
{
  "data": {
    "invoices": [
      {
        "accountId": "string",
        "invoiceNumber": "string",
        "issueDate": "string",
        "dueDate": "string",
        "period": {
          "startDate": "string",
          "endDate": "string"
        },
        "invoiceAmount": "string",
        "payOnTimeDiscount": {
          "amount": "string",
          "date": "string"
        },
        "balanceAtIssue": "string",
        "servicePoints": [
          "string"
        ],
        "gas": {
          "totalUsageCharges": "string",
          "totalOnceOffCharges": "string",
          "totalOnceOffDiscounts": "string"
        },
        "electricity": {
          "totalUsageCharges": "string",
          "totalGenerationCredits": "string",
          "totalOnceOffCharges": "string",
          "totalOnceOffDiscounts": "string"
        },
        "totalAccountCharges": "string",
        "totalAccountDiscounts": "string",
        "paymentStatus": "PAID"
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

<h3 id="get-bulk-invoices-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|Inline|

<h3 id="get-bulk-invoices-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Description|
|---|---|---|---|
|» data|object|mandatory|none|
|»» invoices|[object]|mandatory|Array of invoices sorted by date in descending order|
|»»» accountId|string|mandatory|The ID of the account for which the invoice was issued|
|»»» invoiceNumber|string|optional|The number assigned to this invoice by the energy Retailer|
|»»» issueDate|[DateString](#common-field-types)|mandatory|The date that the invoice was actually issued (as opposed to generated or calculated)|
|»»» dueDate|[DateString](#common-field-types)|optional|The date that the invoice is due to be paid|
|»»» period|object|mandatory|Object containing the start and end date for the period covered by the invoice|
|»»»» startDate|[DateString](#common-field-types)|mandatory|The start date of the period covered by this invoice|
|»»»» endDate|[DateString](#common-field-types)|mandatory|The end date of the period covered by this invoice|
|»»» invoiceAmount|[AmountString](#common-field-types)|optional|The net amount due for this invoice regardless of previous balance|
|»»» payOnTimeDiscount|object|optional|A discount for on time payment|
|»»»» amount|[AmountString](#common-field-types)|mandatory|The amount that will be discounted if the invoice is paid by the date specified|
|»»»» date|[DateString](#common-field-types)|mandatory|The date by which the invoice must be paid to receive the pay on time discount|
|»»» balanceAtIssue|[AmountString](#common-field-types)|mandatory|The account balance at the time the invoice was issued|
|»»» servicePoints|[string]|mandatory|Array of service point IDs to which this invoice applies. May be empty if the invoice contains no electricity usage related charges|
|»»» gas|object|optional|Object contain charges and credits related to gas usage|
|»»»» totalUsageCharges|[AmountString](#common-field-types)|mandatory|The aggregate total of usage charges for the period covered by the invoice|
|»»»» totalOnceOffCharges|[AmountString](#common-field-types)|mandatory|The aggregate total of any once off charges arising from electricity usage for the period covered by the invoice|
|»»»» totalOnceOffDiscounts|[AmountString](#common-field-types)|mandatory|The aggregate total of any once off discounts or credits arising from electricity usage for the period covered by the invoice|
|»»» electricity|object|optional|Object contain charges and credits related to electricity usage|
|»»»» totalUsageCharges|[AmountString](#common-field-types)|mandatory|The aggregate total of usage charges for the period covered by the invoice|
|»»»» totalGenerationCredits|[AmountString](#common-field-types)|mandatory|The aggregate total of generation credits for the period covered by the invoice|
|»»»» totalOnceOffCharges|[AmountString](#common-field-types)|mandatory|The aggregate total of any once off charges arising from electricity usage for the period covered by the invoice|
|»»»» totalOnceOffDiscounts|[AmountString](#common-field-types)|mandatory|The aggregate total of any once off discounts or credits arising from electricity usage for the period covered by the invoice|
|»»» totalAccountCharges|[AmountString](#common-field-types)|mandatory|The aggregate total of account level charges for the period covered by the invoice|
|»»» totalAccountDiscounts|[AmountString](#common-field-types)|mandatory|The aggregate total of account level discounts or credits for the period covered by the invoice|
|»»» paymentStatus|string|mandatory|Indicator of the payment status for the invoice|
|»» links|[LinksPaginated](#schemacdr-energy-apilinkspaginated)|mandatory|none|
|»»» self|[URIString](#common-field-types)|mandatory|Fully qualified link that generated the current response document|
|»»» first|[URIString](#common-field-types)|conditional|URI to the first page of this set. Mandatory if this response is not the first page|
|»»» prev|[URIString](#common-field-types)|conditional|URI to the previous page of this set. Mandatory if this response is not the first page|
|»»» next|[URIString](#common-field-types)|conditional|URI to the next page of this set. Mandatory if this response is not the last page|
|»»» last|[URIString](#common-field-types)|conditional|URI to the last page of this set. Mandatory if this response is not the last page|
|»» meta|[MetaPaginated](#schemacdr-energy-apimetapaginated)|mandatory|none|
|»»» totalRecords|[NaturalNumber](#common-field-types)|mandatory|The total number of records in the full set. See [pagination](#pagination).|
|»»» totalPages|[NaturalNumber](#common-field-types)|mandatory|The total number of pages in the full set. See [pagination](#pagination).|

#### Enumerated Values

|Property|Value|
|---|---|
|paymentStatus|PAID|
|paymentStatus|PARTIALLY_PAID|
|paymentStatus|NOT_PAID|

  
    <aside class="success">
This operation does not require authentication
</aside>

  

## Get Invoices For Specific Accounts

<a id="opIdlistInvoicesForAccounts"></a>

> Code samples

```http
POST /energy/accounts/invoices HTTP/1.1

Content-Type: application/json
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
  'Content-Type':'application/json',
  'Accept':'application/json',
  'x-v':'string',
  'x-min-v':'string',
  'x-fapi-interaction-id':'string',
  'x-fapi-auth-date':'string',
  'x-fapi-customer-ip-address':'string',
  'x-cds-client-headers':'string'

};

$.ajax({
  url: '/energy/accounts/invoices',
  method: 'post',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`POST /energy/accounts/invoices`

Obtain invoices for a specified set of accounts

> Body parameter

```json
{
  "data": {
    "accountIds": [
      "string"
    ]
  },
  "meta": {}
}
```

###Endpoint Version
|   |  |
|---|--|
|Version|**undefined**

<h3 id="get-invoices-for-specific-accounts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|newest-date|query|[DateString](#common-field-types)|optional|Constrain the request to records with effective date at or before this date.  If absent defaults to current date.  Format is aligned to DateString common type|
|oldest-date|query|[DateString](#common-field-types)|optional|Constrain the request to records with effective date at or after this date. If absent defaults to newest-date minus 24 months days.  Format is aligned to DateString common type|
|page|query|number|optional|Page of results to request (standard pagination)|
|page-size|query|number|optional|Page size to request.  Default is 25 (standard pagination)|
|x-v|header|string|mandatory|Version of the API end point requested by the client. Must be set to a positive integer. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If the value of [x-min-v](#request-headers) is equal to or higher than the value of [x-v](#request-headers) then the [x-min-v](#request-headers) header should be treated as absent. If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable. See [HTTP Headers](#request-headers)|
|x-min-v|header|string|optional|Minimum version of the API end point requested by the client. Must be set to a positive integer if provided. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable.|
|x-fapi-interaction-id|header|string|optional|An [RFC4122](https://tools.ietf.org/html/rfc4122) UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a [RFC4122] UUID value is required to be provided in the response header to track the interaction.|
|x-fapi-auth-date|header|string|optional|The time when the customer last logged in to the data recipient. Required for all resource calls (customer present and unattended). Not to be included for unauthenticated calls.|
|x-fapi-customer-ip-address|header|string|optional|The customer's original IP address if the customer is currently logged in to the data recipient. The presence of this header indicates that the API is being called in a customer present context. Not to be included for unauthenticated calls.|
|x-cds-client-headers|header|[Base64](#common-field-types)|optional|The customer's original standard http headers [Base64](#common-field-types) encoded, including the original User Agent header, if the customer is currently logged in to the data recipient. Mandatory for customer present calls.  Not required for unattended or unauthenticated calls.|
|body|body|[accountIdList](#schemacdr-energy-apiaccountidlist)|mandatory|Request payload containing list of specific Accounts to obtain data for|
|» data|body|object|mandatory|none|
|»» accountIds|body|[string]|mandatory|Array of specific accountIds to obtain data for|
|» meta|body|[Meta](#schemacdr-energy-apimeta)|mandatory|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "invoices": [
      {
        "accountId": "string",
        "invoiceNumber": "string",
        "issueDate": "string",
        "dueDate": "string",
        "period": {
          "startDate": "string",
          "endDate": "string"
        },
        "invoiceAmount": "string",
        "payOnTimeDiscount": {
          "amount": "string",
          "date": "string"
        },
        "balanceAtIssue": "string",
        "servicePoints": [
          "string"
        ],
        "gas": {
          "totalUsageCharges": "string",
          "totalOnceOffCharges": "string",
          "totalOnceOffDiscounts": "string"
        },
        "electricity": {
          "totalUsageCharges": "string",
          "totalGenerationCredits": "string",
          "totalOnceOffCharges": "string",
          "totalOnceOffDiscounts": "string"
        },
        "totalAccountCharges": "string",
        "totalAccountDiscounts": "string",
        "paymentStatus": "PAID"
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

<h3 id="get-invoices-for-specific-accounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|Inline|

<h3 id="get-invoices-for-specific-accounts-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Description|
|---|---|---|---|
|» data|object|mandatory|none|
|»» invoices|[object]|mandatory|Array of invoices sorted by date in descending order|
|»»» accountId|string|mandatory|The ID of the account for which the invoice was issued|
|»»» invoiceNumber|string|optional|The number assigned to this invoice by the energy Retailer|
|»»» issueDate|[DateString](#common-field-types)|mandatory|The date that the invoice was actually issued (as opposed to generated or calculated)|
|»»» dueDate|[DateString](#common-field-types)|optional|The date that the invoice is due to be paid|
|»»» period|object|mandatory|Object containing the start and end date for the period covered by the invoice|
|»»»» startDate|[DateString](#common-field-types)|mandatory|The start date of the period covered by this invoice|
|»»»» endDate|[DateString](#common-field-types)|mandatory|The end date of the period covered by this invoice|
|»»» invoiceAmount|[AmountString](#common-field-types)|optional|The net amount due for this invoice regardless of previous balance|
|»»» payOnTimeDiscount|object|optional|A discount for on time payment|
|»»»» amount|[AmountString](#common-field-types)|mandatory|The amount that will be discounted if the invoice is paid by the date specified|
|»»»» date|[DateString](#common-field-types)|mandatory|The date by which the invoice must be paid to receive the pay on time discount|
|»»» balanceAtIssue|[AmountString](#common-field-types)|mandatory|The account balance at the time the invoice was issued|
|»»» servicePoints|[string]|mandatory|Array of service point IDs to which this invoice applies. May be empty if the invoice contains no electricity usage related charges|
|»»» gas|object|optional|Object contain charges and credits related to gas usage|
|»»»» totalUsageCharges|[AmountString](#common-field-types)|mandatory|The aggregate total of usage charges for the period covered by the invoice|
|»»»» totalOnceOffCharges|[AmountString](#common-field-types)|mandatory|The aggregate total of any once off charges arising from electricity usage for the period covered by the invoice|
|»»»» totalOnceOffDiscounts|[AmountString](#common-field-types)|mandatory|The aggregate total of any once off discounts or credits arising from electricity usage for the period covered by the invoice|
|»»» electricity|object|optional|Object contain charges and credits related to electricity usage|
|»»»» totalUsageCharges|[AmountString](#common-field-types)|mandatory|The aggregate total of usage charges for the period covered by the invoice|
|»»»» totalGenerationCredits|[AmountString](#common-field-types)|mandatory|The aggregate total of generation credits for the period covered by the invoice|
|»»»» totalOnceOffCharges|[AmountString](#common-field-types)|mandatory|The aggregate total of any once off charges arising from electricity usage for the period covered by the invoice|
|»»»» totalOnceOffDiscounts|[AmountString](#common-field-types)|mandatory|The aggregate total of any once off discounts or credits arising from electricity usage for the period covered by the invoice|
|»»» totalAccountCharges|[AmountString](#common-field-types)|mandatory|The aggregate total of account level charges for the period covered by the invoice|
|»»» totalAccountDiscounts|[AmountString](#common-field-types)|mandatory|The aggregate total of account level discounts or credits for the period covered by the invoice|
|»»» paymentStatus|string|mandatory|Indicator of the payment status for the invoice|
|»» links|[LinksPaginated](#schemacdr-energy-apilinkspaginated)|mandatory|none|
|»»» self|[URIString](#common-field-types)|mandatory|Fully qualified link that generated the current response document|
|»»» first|[URIString](#common-field-types)|conditional|URI to the first page of this set. Mandatory if this response is not the first page|
|»»» prev|[URIString](#common-field-types)|conditional|URI to the previous page of this set. Mandatory if this response is not the first page|
|»»» next|[URIString](#common-field-types)|conditional|URI to the next page of this set. Mandatory if this response is not the last page|
|»»» last|[URIString](#common-field-types)|conditional|URI to the last page of this set. Mandatory if this response is not the last page|
|»» meta|[MetaPaginated](#schemacdr-energy-apimetapaginated)|mandatory|none|
|»»» totalRecords|[NaturalNumber](#common-field-types)|mandatory|The total number of records in the full set. See [pagination](#pagination).|
|»»» totalPages|[NaturalNumber](#common-field-types)|mandatory|The total number of pages in the full set. See [pagination](#pagination).|

#### Enumerated Values

|Property|Value|
|---|---|
|paymentStatus|PAID|
|paymentStatus|PARTIALLY_PAID|
|paymentStatus|NOT_PAID|

  
    <aside class="success">
This operation does not require authentication
</aside>

  

## Get Billing For Account

<a id="opIdgetBillingForAccount"></a>

> Code samples

```http
GET /energy/accounts/{accountId}/billing HTTP/1.1

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
  url: '/energy/accounts/{accountId}/billing',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`GET /energy/accounts/{accountId}/billing`

Obtain the billing transactions for a specific account

###Endpoint Version
|   |  |
|---|--|
|Version|**undefined**

<h3 id="get-billing-for-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|mandatory|ID of a specific account to obtain data for.  This is a tokenised ID previous obtained from the Account List end point.|
|newest-time|query|[DateTimeString](#common-field-types)|optional|Constrain the request to records with effective time at or before this date/time.  If absent defaults to current date/time.  Format is aligned to DateTimeString common type|
|oldest-time|query|[DateTimeString](#common-field-types)|optional|Constrain the request to records with effective time at or after this date/time. If absent defaults to newest-time minus 12 months.  Format is aligned to DateTimeString common type|
|page|query|number|optional|Page of results to request (standard pagination)|
|page-size|query|number|optional|Page size to request.  Default is 25 (standard pagination)|
|x-v|header|string|mandatory|Version of the API end point requested by the client. Must be set to a positive integer. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If the value of [x-min-v](#request-headers) is equal to or higher than the value of [x-v](#request-headers) then the [x-min-v](#request-headers) header should be treated as absent. If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable. See [HTTP Headers](#request-headers)|
|x-min-v|header|string|optional|Minimum version of the API end point requested by the client. Must be set to a positive integer if provided. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable.|
|x-fapi-interaction-id|header|string|optional|An [RFC4122](https://tools.ietf.org/html/rfc4122) UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a [RFC4122] UUID value is required to be provided in the response header to track the interaction.|
|x-fapi-auth-date|header|string|optional|The time when the customer last logged in to the data recipient. Required for all resource calls (customer present and unattended). Not to be included for unauthenticated calls.|
|x-fapi-customer-ip-address|header|string|optional|The customer's original IP address if the customer is currently logged in to the data recipient. The presence of this header indicates that the API is being called in a customer present context. Not to be included for unauthenticated calls.|
|x-cds-client-headers|header|[Base64](#common-field-types)|optional|The customer's original standard http headers [Base64](#common-field-types) encoded, including the original User Agent header, if the customer is currently logged in to the data recipient. Mandatory for customer present calls.  Not required for unattended or unauthenticated calls.|

> Example responses

> 200 Response

```json
{
  "data": {
    "transactions": [
      {
        "accountId": "string",
        "executionDateTime": "string",
        "transactionUType": "usage",
        "usage": {
          "servicePointId": "string",
          "invoiceNumber": "string",
          "timeOfUseType": "PEAK",
          "isEstimate": true,
          "startDate": "string",
          "endDate": "string",
          "usage": 0,
          "amount": "string",
          "adjustments": [
            {
              "amount": "string",
              "description": "string"
            }
          ]
        },
        "onceOff": {
          "servicePointId": "string",
          "invoiceNumber": "string",
          "amount": "string",
          "description": "string"
        },
        "payment": {
          "amount": "string",
          "method": "DIRECT_DEBIT"
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

<h3 id="get-billing-for-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|Inline|

<h3 id="get-billing-for-account-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Description|
|---|---|---|---|
|» data|object|mandatory|none|
|»» transactions|[object]|mandatory|Array of transactions sorted by date and time in descending order|
|»»» accountId|string|mandatory|The ID of the account for which transaction applies|
|»»» executionDateTime|[DateTimeString](#common-field-types)|mandatory|The date and time that the transaction occurred|
|»»» transactionUType|string|mandatory|Indicator of the type of transaction object present in this record|
|»»» usage|object|conditional|Represents a usage charge or generation credit.  Mandatory if transactionUType is equal to usage|
|»»»» servicePointId|string|optional|The ID of the service point to which this transaction applies if any|
|»»»» invoiceNumber|string|optional|The number of the invoice in which this transaction is included if it has been issued|
|»»»» timeOfUseType|string|mandatory|The time of use type that the transaction applies to|
|»»»» isEstimate|boolean|optional|Flag indicating if the usage is estimated or actual.  True indicates estimate.  False or absent indicates actual|
|»»»» startDate|[DateTimeString](#common-field-types)|mandatory|Date and time when the usage period starts|
|»»»» endDate|[DateTimeString](#common-field-types)|mandatory|Date and time when the usage period ends|
|»»»» usage|number|mandatory|The usage for the period in kWh.  A negative value indicates power generated|
|»»»» amount|[AmountString](#common-field-types)|mandatory|The amount charged or credited for this transaction prior to any adjustments being applied.  A negative value indicates a credit|
|»»»» adjustments|[object]|optional|Optional array of adjustments arising for this transaction|
|»»»»» amount|[AmountString](#common-field-types)|mandatory|The amount of the adjustment|
|»»»»» description|string|mandatory|A free text description of the adjustment|
|»»»» onceOff|object|conditional|Represents a once off charge or credit.  Mandatory if transactionUType is equal to onceOff|
|»»»»» servicePointId|string|optional|The ID of the service point to which this transaction applies if any|
|»»»»» invoiceNumber|string|optional|The number of the invoice in which this transaction is included if it has been issued|
|»»»»» amount|[AmountString](#common-field-types)|mandatory|The amount of the charge or credit.  A positive value indicates a charge and a negative value indicates a credit|
|»»»»» description|string|mandatory|A free text description of the item|
|»»»» payment|object|conditional|Represents a payment to the account.  Mandatory if transactionUType is equal to payment|
|»»»»» amount|[AmountString](#common-field-types)|mandatory|The amount paid|
|»»»»» method|string|mandatory|The method of payment|
|»»»» links|[LinksPaginated](#schemacdr-energy-apilinkspaginated)|mandatory|none|
|»»»»» self|[URIString](#common-field-types)|mandatory|Fully qualified link that generated the current response document|
|»»»»» first|[URIString](#common-field-types)|conditional|URI to the first page of this set. Mandatory if this response is not the first page|
|»»»»» prev|[URIString](#common-field-types)|conditional|URI to the previous page of this set. Mandatory if this response is not the first page|
|»»»»» next|[URIString](#common-field-types)|conditional|URI to the next page of this set. Mandatory if this response is not the last page|
|»»»»» last|[URIString](#common-field-types)|conditional|URI to the last page of this set. Mandatory if this response is not the last page|
|»»»» meta|[MetaPaginated](#schemacdr-energy-apimetapaginated)|mandatory|none|
|»»»»» totalRecords|[NaturalNumber](#common-field-types)|mandatory|The total number of records in the full set. See [pagination](#pagination).|
|»»»»» totalPages|[NaturalNumber](#common-field-types)|mandatory|The total number of pages in the full set. See [pagination](#pagination).|

#### Enumerated Values

|Property|Value|
|---|---|
|transactionUType|usage|
|transactionUType|onceOff|
|transactionUType|payment|
|timeOfUseType|PEAK|
|timeOfUseType|OFF_PEAK|
|timeOfUseType|OFF_PEAK_DC|
|timeOfUseType|SHOULDER|
|timeOfUseType|SHOULDER1|
|timeOfUseType|SHOULDER2|
|method|DIRECT_DEBIT|
|method|CARD|
|method|TRANSFER|
|method|BPAY|
|method|CASH|
|method|CHEQUE|
|method|OTHER|

  
    <aside class="success">
This operation does not require authentication
</aside>

  

## Get Bulk Billing

<a id="opIdlistBillingBulk"></a>

> Code samples

```http
GET /energy/accounts/billing HTTP/1.1

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
  url: '/energy/accounts/billing',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`GET /energy/accounts/billing`

Obtain billing transactions for all accounts

###Endpoint Version
|   |  |
|---|--|
|Version|**undefined**

<h3 id="get-bulk-billing-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|newest-time|query|[DateTimeString](#common-field-types)|optional|Constrain the request to records with effective time at or before this date/time.  If absent defaults to current date/time.  Format is aligned to DateTimeString common type|
|oldest-time|query|[DateTimeString](#common-field-types)|optional|Constrain the request to records with effective time at or after this date/time. If absent defaults to newest-time minus 12 months.  Format is aligned to DateTimeString common type|
|page|query|number|optional|Page of results to request (standard pagination)|
|page-size|query|number|optional|Page size to request.  Default is 25 (standard pagination)|
|x-v|header|string|mandatory|Version of the API end point requested by the client. Must be set to a positive integer. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If the value of [x-min-v](#request-headers) is equal to or higher than the value of [x-v](#request-headers) then the [x-min-v](#request-headers) header should be treated as absent. If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable. See [HTTP Headers](#request-headers)|
|x-min-v|header|string|optional|Minimum version of the API end point requested by the client. Must be set to a positive integer if provided. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable.|
|x-fapi-interaction-id|header|string|optional|An [RFC4122](https://tools.ietf.org/html/rfc4122) UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a [RFC4122] UUID value is required to be provided in the response header to track the interaction.|
|x-fapi-auth-date|header|string|optional|The time when the customer last logged in to the data recipient. Required for all resource calls (customer present and unattended). Not to be included for unauthenticated calls.|
|x-fapi-customer-ip-address|header|string|optional|The customer's original IP address if the customer is currently logged in to the data recipient. The presence of this header indicates that the API is being called in a customer present context. Not to be included for unauthenticated calls.|
|x-cds-client-headers|header|[Base64](#common-field-types)|optional|The customer's original standard http headers [Base64](#common-field-types) encoded, including the original User Agent header, if the customer is currently logged in to the data recipient. Mandatory for customer present calls.  Not required for unattended or unauthenticated calls.|

> Example responses

> 200 Response

```json
{
  "data": {
    "transactions": [
      {
        "accountId": "string",
        "executionDateTime": "string",
        "transactionUType": "usage",
        "usage": {
          "servicePointId": "string",
          "invoiceNumber": "string",
          "timeOfUseType": "PEAK",
          "isEstimate": true,
          "startDate": "string",
          "endDate": "string",
          "usage": 0,
          "amount": "string",
          "adjustments": [
            {
              "amount": "string",
              "description": "string"
            }
          ]
        },
        "onceOff": {
          "servicePointId": "string",
          "invoiceNumber": "string",
          "amount": "string",
          "description": "string"
        },
        "payment": {
          "amount": "string",
          "method": "DIRECT_DEBIT"
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

<h3 id="get-bulk-billing-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|Inline|

<h3 id="get-bulk-billing-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Description|
|---|---|---|---|
|» data|object|mandatory|none|
|»» transactions|[object]|mandatory|Array of transactions sorted by date and time in descending order|
|»»» accountId|string|mandatory|The ID of the account for which transaction applies|
|»»» executionDateTime|[DateTimeString](#common-field-types)|mandatory|The date and time that the transaction occurred|
|»»» transactionUType|string|mandatory|Indicator of the type of transaction object present in this record|
|»»» usage|object|conditional|Represents a usage charge or generation credit.  Mandatory if transactionUType is equal to usage|
|»»»» servicePointId|string|optional|The ID of the service point to which this transaction applies if any|
|»»»» invoiceNumber|string|optional|The number of the invoice in which this transaction is included if it has been issued|
|»»»» timeOfUseType|string|mandatory|The time of use type that the transaction applies to|
|»»»» isEstimate|boolean|optional|Flag indicating if the usage is estimated or actual.  True indicates estimate.  False or absent indicates actual|
|»»»» startDate|[DateTimeString](#common-field-types)|mandatory|Date and time when the usage period starts|
|»»»» endDate|[DateTimeString](#common-field-types)|mandatory|Date and time when the usage period ends|
|»»»» usage|number|mandatory|The usage for the period in kWh.  A negative value indicates power generated|
|»»»» amount|[AmountString](#common-field-types)|mandatory|The amount charged or credited for this transaction prior to any adjustments being applied.  A negative value indicates a credit|
|»»»» adjustments|[object]|optional|Optional array of adjustments arising for this transaction|
|»»»»» amount|[AmountString](#common-field-types)|mandatory|The amount of the adjustment|
|»»»»» description|string|mandatory|A free text description of the adjustment|
|»»»» onceOff|object|conditional|Represents a once off charge or credit.  Mandatory if transactionUType is equal to onceOff|
|»»»»» servicePointId|string|optional|The ID of the service point to which this transaction applies if any|
|»»»»» invoiceNumber|string|optional|The number of the invoice in which this transaction is included if it has been issued|
|»»»»» amount|[AmountString](#common-field-types)|mandatory|The amount of the charge or credit.  A positive value indicates a charge and a negative value indicates a credit|
|»»»»» description|string|mandatory|A free text description of the item|
|»»»» payment|object|conditional|Represents a payment to the account.  Mandatory if transactionUType is equal to payment|
|»»»»» amount|[AmountString](#common-field-types)|mandatory|The amount paid|
|»»»»» method|string|mandatory|The method of payment|
|»»»» links|[LinksPaginated](#schemacdr-energy-apilinkspaginated)|mandatory|none|
|»»»»» self|[URIString](#common-field-types)|mandatory|Fully qualified link that generated the current response document|
|»»»»» first|[URIString](#common-field-types)|conditional|URI to the first page of this set. Mandatory if this response is not the first page|
|»»»»» prev|[URIString](#common-field-types)|conditional|URI to the previous page of this set. Mandatory if this response is not the first page|
|»»»»» next|[URIString](#common-field-types)|conditional|URI to the next page of this set. Mandatory if this response is not the last page|
|»»»»» last|[URIString](#common-field-types)|conditional|URI to the last page of this set. Mandatory if this response is not the last page|
|»»»» meta|[MetaPaginated](#schemacdr-energy-apimetapaginated)|mandatory|none|
|»»»»» totalRecords|[NaturalNumber](#common-field-types)|mandatory|The total number of records in the full set. See [pagination](#pagination).|
|»»»»» totalPages|[NaturalNumber](#common-field-types)|mandatory|The total number of pages in the full set. See [pagination](#pagination).|

#### Enumerated Values

|Property|Value|
|---|---|
|transactionUType|usage|
|transactionUType|onceOff|
|transactionUType|payment|
|timeOfUseType|PEAK|
|timeOfUseType|OFF_PEAK|
|timeOfUseType|OFF_PEAK_DC|
|timeOfUseType|SHOULDER|
|timeOfUseType|SHOULDER1|
|timeOfUseType|SHOULDER2|
|method|DIRECT_DEBIT|
|method|CARD|
|method|TRANSFER|
|method|BPAY|
|method|CASH|
|method|CHEQUE|
|method|OTHER|

  
    <aside class="success">
This operation does not require authentication
</aside>

  

## Get Billing For Specific Accounts

<a id="opIdlistBillingForAccounts"></a>

> Code samples

```http
POST /energy/accounts/billing HTTP/1.1

Content-Type: application/json
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
  'Content-Type':'application/json',
  'Accept':'application/json',
  'x-v':'string',
  'x-min-v':'string',
  'x-fapi-interaction-id':'string',
  'x-fapi-auth-date':'string',
  'x-fapi-customer-ip-address':'string',
  'x-cds-client-headers':'string'

};

$.ajax({
  url: '/energy/accounts/billing',
  method: 'post',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`POST /energy/accounts/billing`

Obtain billing for a specified set of accounts

> Body parameter

```json
{
  "data": {
    "accountIds": [
      "string"
    ]
  },
  "meta": {}
}
```

###Endpoint Version
|   |  |
|---|--|
|Version|**undefined**

<h3 id="get-billing-for-specific-accounts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|newest-time|query|[DateTimeString](#common-field-types)|optional|Constrain the request to records with effective time at or before this date/time.  If absent defaults to current date/time.  Format is aligned to DateTimeString common type|
|oldest-time|query|[DateTimeString](#common-field-types)|optional|Constrain the request to records with effective time at or after this date/time. If absent defaults to newest-time minus 12 months.  Format is aligned to DateTimeString common type|
|page|query|number|optional|Page of results to request (standard pagination)|
|page-size|query|number|optional|Page size to request.  Default is 25 (standard pagination)|
|x-v|header|string|mandatory|Version of the API end point requested by the client. Must be set to a positive integer. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If the value of [x-min-v](#request-headers) is equal to or higher than the value of [x-v](#request-headers) then the [x-min-v](#request-headers) header should be treated as absent. If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable. See [HTTP Headers](#request-headers)|
|x-min-v|header|string|optional|Minimum version of the API end point requested by the client. Must be set to a positive integer if provided. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable.|
|x-fapi-interaction-id|header|string|optional|An [RFC4122](https://tools.ietf.org/html/rfc4122) UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a [RFC4122] UUID value is required to be provided in the response header to track the interaction.|
|x-fapi-auth-date|header|string|optional|The time when the customer last logged in to the data recipient. Required for all resource calls (customer present and unattended). Not to be included for unauthenticated calls.|
|x-fapi-customer-ip-address|header|string|optional|The customer's original IP address if the customer is currently logged in to the data recipient. The presence of this header indicates that the API is being called in a customer present context. Not to be included for unauthenticated calls.|
|x-cds-client-headers|header|[Base64](#common-field-types)|optional|The customer's original standard http headers [Base64](#common-field-types) encoded, including the original User Agent header, if the customer is currently logged in to the data recipient. Mandatory for customer present calls.  Not required for unattended or unauthenticated calls.|
|body|body|[accountIdList](#schemacdr-energy-apiaccountidlist)|mandatory|Request payload containing list of specific Accounts to obtain data for|
|» data|body|object|mandatory|none|
|»» accountIds|body|[string]|mandatory|Array of specific accountIds to obtain data for|
|» meta|body|[Meta](#schemacdr-energy-apimeta)|mandatory|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "transactions": [
      {
        "accountId": "string",
        "executionDateTime": "string",
        "transactionUType": "usage",
        "usage": {
          "servicePointId": "string",
          "invoiceNumber": "string",
          "timeOfUseType": "PEAK",
          "isEstimate": true,
          "startDate": "string",
          "endDate": "string",
          "usage": 0,
          "amount": "string",
          "adjustments": [
            {
              "amount": "string",
              "description": "string"
            }
          ]
        },
        "onceOff": {
          "servicePointId": "string",
          "invoiceNumber": "string",
          "amount": "string",
          "description": "string"
        },
        "payment": {
          "amount": "string",
          "method": "DIRECT_DEBIT"
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

<h3 id="get-billing-for-specific-accounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|Inline|

<h3 id="get-billing-for-specific-accounts-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Description|
|---|---|---|---|
|» data|object|mandatory|none|
|»» transactions|[object]|mandatory|Array of transactions sorted by date and time in descending order|
|»»» accountId|string|mandatory|The ID of the account for which transaction applies|
|»»» executionDateTime|[DateTimeString](#common-field-types)|mandatory|The date and time that the transaction occurred|
|»»» transactionUType|string|mandatory|Indicator of the type of transaction object present in this record|
|»»» usage|object|conditional|Represents a usage charge or generation credit.  Mandatory if transactionUType is equal to usage|
|»»»» servicePointId|string|optional|The ID of the service point to which this transaction applies if any|
|»»»» invoiceNumber|string|optional|The number of the invoice in which this transaction is included if it has been issued|
|»»»» timeOfUseType|string|mandatory|The time of use type that the transaction applies to|
|»»»» isEstimate|boolean|optional|Flag indicating if the usage is estimated or actual.  True indicates estimate.  False or absent indicates actual|
|»»»» startDate|[DateTimeString](#common-field-types)|mandatory|Date and time when the usage period starts|
|»»»» endDate|[DateTimeString](#common-field-types)|mandatory|Date and time when the usage period ends|
|»»»» usage|number|mandatory|The usage for the period in kWh.  A negative value indicates power generated|
|»»»» amount|[AmountString](#common-field-types)|mandatory|The amount charged or credited for this transaction prior to any adjustments being applied.  A negative value indicates a credit|
|»»»» adjustments|[object]|optional|Optional array of adjustments arising for this transaction|
|»»»»» amount|[AmountString](#common-field-types)|mandatory|The amount of the adjustment|
|»»»»» description|string|mandatory|A free text description of the adjustment|
|»»»» onceOff|object|conditional|Represents a once off charge or credit.  Mandatory if transactionUType is equal to onceOff|
|»»»»» servicePointId|string|optional|The ID of the service point to which this transaction applies if any|
|»»»»» invoiceNumber|string|optional|The number of the invoice in which this transaction is included if it has been issued|
|»»»»» amount|[AmountString](#common-field-types)|mandatory|The amount of the charge or credit.  A positive value indicates a charge and a negative value indicates a credit|
|»»»»» description|string|mandatory|A free text description of the item|
|»»»» payment|object|conditional|Represents a payment to the account.  Mandatory if transactionUType is equal to payment|
|»»»»» amount|[AmountString](#common-field-types)|mandatory|The amount paid|
|»»»»» method|string|mandatory|The method of payment|
|»»»» links|[LinksPaginated](#schemacdr-energy-apilinkspaginated)|mandatory|none|
|»»»»» self|[URIString](#common-field-types)|mandatory|Fully qualified link that generated the current response document|
|»»»»» first|[URIString](#common-field-types)|conditional|URI to the first page of this set. Mandatory if this response is not the first page|
|»»»»» prev|[URIString](#common-field-types)|conditional|URI to the previous page of this set. Mandatory if this response is not the first page|
|»»»»» next|[URIString](#common-field-types)|conditional|URI to the next page of this set. Mandatory if this response is not the last page|
|»»»»» last|[URIString](#common-field-types)|conditional|URI to the last page of this set. Mandatory if this response is not the last page|
|»»»» meta|[MetaPaginated](#schemacdr-energy-apimetapaginated)|mandatory|none|
|»»»»» totalRecords|[NaturalNumber](#common-field-types)|mandatory|The total number of records in the full set. See [pagination](#pagination).|
|»»»»» totalPages|[NaturalNumber](#common-field-types)|mandatory|The total number of pages in the full set. See [pagination](#pagination).|

#### Enumerated Values

|Property|Value|
|---|---|
|transactionUType|usage|
|transactionUType|onceOff|
|transactionUType|payment|
|timeOfUseType|PEAK|
|timeOfUseType|OFF_PEAK|
|timeOfUseType|OFF_PEAK_DC|
|timeOfUseType|SHOULDER|
|timeOfUseType|SHOULDER1|
|timeOfUseType|SHOULDER2|
|method|DIRECT_DEBIT|
|method|CARD|
|method|TRANSFER|
|method|BPAY|
|method|CASH|
|method|CHEQUE|
|method|OTHER|

  
    <aside class="success">
This operation does not require authentication
</aside>

  

<h2 class="schema-heading" id="cdr-energy-api-schemas">Schemas</h2>
<a class="schema-link" id="cdr-energy-api-schemas"></a>

<h2 class="schema-toc" id="tocSenergyplanlistresponse">EnergyPlanListResponse</h2>

<a id="schemacdr-energy-apienergyplanlistresponse"></a>

```json
{
  "data": {
    "plans": [
      {
        "planId": "string",
        "effectiveFrom": "string",
        "effectiveTo": "string",
        "lastUpdated": "string",
        "displayName": "string",
        "description": "string",
        "type": "STANDING",
        "fuelType": "ELECTRICITY",
        "brand": "string",
        "brandName": "string",
        "applicationUri": "string",
        "additionalInformation": {
          "overviewUri": "string",
          "termsUri": "string",
          "eligibilityUri": "string",
          "pricingUri": "string",
          "bundleUri": "string"
        },
        "customerType": "RESIDENTIAL",
        "geography": {
          "excludedPostcodes": [
            "string"
          ],
          "includedPostcodes": [
            "string"
          ]
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
|» plans|[[EnergyPlan](#schemacdr-energy-apienergyplan)]|mandatory|Array of plans|
|links|[LinksPaginated](#schemacdr-energy-apilinkspaginated)|mandatory|none|
|meta|[MetaPaginated](#schemacdr-energy-apimetapaginated)|mandatory|none|

<h2 class="schema-toc" id="tocSenergyplanresponse">EnergyPlanResponse</h2>

<a id="schemacdr-energy-apienergyplanresponse"></a>

```json
{
  "data": {
    "planId": "string",
    "effectiveFrom": "string",
    "effectiveTo": "string",
    "lastUpdated": "string",
    "displayName": "string",
    "description": "string",
    "type": "STANDING",
    "fuelType": "ELECTRICITY",
    "brand": "string",
    "brandName": "string",
    "applicationUri": "string",
    "additionalInformation": {
      "overviewUri": "string",
      "termsUri": "string",
      "eligibilityUri": "string",
      "pricingUri": "string",
      "bundleUri": "string"
    },
    "customerType": "RESIDENTIAL",
    "geography": {
      "excludedPostcodes": [
        "string"
      ],
      "includedPostcodes": [
        "string"
      ]
    },
    "meteringCharges": [
      {
        "displayName": "string",
        "description": "string",
        "minimumValue": "string",
        "maximumValue": "string",
        "period": "string"
      }
    ],
    "gasContract": {
      "additionalFeeInformation": "string",
      "pricingModel": "SINGLE_RATE",
      "termType": "1_YEAR",
      "timeZone": "LOCAL",
      "benefitPeriod": "string",
      "terms": "string",
      "isFixed": true,
      "variation": "string",
      "onExpiryDescription": "string",
      "meterTypes": [
        "string"
      ],
      "coolingOffDays": "string",
      "billFrequency": [
        "string"
      ],
      "paymentOption": [
        "PAPER_BILL"
      ],
      "intrinsicGreenPower": {
        "greenPercentage": "string"
      },
      "controlledLoad": {
        "displayName": "string",
        "description": "string",
        "dailyCharge": "string",
        "period": "string",
        "rates": [
          {
            "unitPrice": "string",
            "volume": 0
          }
        ]
      },
      "incentives": [
        {
          "displayName": "string",
          "description": "string",
          "category": "GIFT",
          "eligibility": "string"
        }
      ],
      "discounts": [
        {
          "displayName": "string",
          "description": "string",
          "type": "CONDITIONAL",
          "category": "PAY_ON_TIME",
          "endDate": "string",
          "methodUType": "percentOfBill",
          "percentOfBill": {
            "rate": "string"
          },
          "percentOfUse": {
            "rate": "string"
          },
          "fixedAmount": {
            "amount": "string"
          },
          "percentOverThreshold": {
            "rate": "string",
            "usageAmount": "string"
          }
        }
      ],
      "greenPowerCharges": [
        {
          "displayName": "string",
          "description": "string",
          "scheme": "GREENPOWER",
          "type": "FIXED_PER_DAY",
          "tiers": [
            {
              "percentGreen": "string",
              "rate": "string",
              "amount": "string"
            }
          ]
        }
      ],
      "eligibility": [
        {
          "type": "EXISTING_CUST",
          "information": "string",
          "description": "string"
        }
      ],
      "fees": [
        {
          "type": "EXIT",
          "term": "FIXED",
          "amount": "string",
          "rate": "string",
          "description": "string"
        }
      ],
      "solarFeedInTariff": [
        {
          "displayName": "string",
          "description": "string",
          "scheme": "PREMIUM",
          "payerType": "GOVERNMENT",
          "tariffUType": "GOVERNMENT",
          "singleTariff": {
            "amount": "string"
          },
          "timeVaryingTariffs": {
            "type": "PEAK",
            "amount": "string",
            "timeVariations": [
              {
                "days": {
                  "weekdays": true,
                  "weekend": true
                },
                "startTime": "string",
                "endTime": "string"
              }
            ]
          }
        }
      ],
      "tariffPeriod": [
        {
          "displayName": "string",
          "startDate": "string",
          "endDate": "string",
          "dailySupplyCharges": "string",
          "rateBlockUType": "singleRate",
          "singleRate": {
            "displayName": "string",
            "description": "string",
            "generalUnitPrice": "string",
            "rates": [
              {
                "unitPrice": "string",
                "volume": 0
              }
            ],
            "period": "string"
          },
          "timeOfUseRates": [
            {
              "displayName": "string",
              "description": "string",
              "rates": [
                {
                  "unitPrice": "string",
                  "volume": 0
                }
              ],
              "timeOfUse": [
                {
                  "days": [
                    "SUNDAY"
                  ],
                  "startTime": "string",
                  "endTime": "string"
                }
              ],
              "type": "PEAK"
            }
          ],
          "demandCharges": [
            {
              "displayName": "string",
              "description": "string",
              "amount": "string",
              "startTime": "string",
              "endTime": "string",
              "days": {
                "weekdays": true,
                "saturday": true,
                "sunday": true
              },
              "minDemand": "string",
              "maxDemand": "string",
              "measurementPeriod": "DAY",
              "chargePeriod": "DAY"
            }
          ]
        }
      ]
    },
    "electricityContract": {
      "additionalFeeInformation": "string",
      "pricingModel": "SINGLE_RATE",
      "termType": "1_YEAR",
      "timeZone": "LOCAL",
      "benefitPeriod": "string",
      "terms": "string",
      "isFixed": true,
      "variation": "string",
      "onExpiryDescription": "string",
      "meterTypes": [
        "string"
      ],
      "coolingOffDays": "string",
      "billFrequency": [
        "string"
      ],
      "paymentOption": [
        "PAPER_BILL"
      ],
      "intrinsicGreenPower": {
        "greenPercentage": "string"
      },
      "controlledLoad": {
        "displayName": "string",
        "description": "string",
        "dailyCharge": "string",
        "period": "string",
        "rates": [
          {
            "unitPrice": "string",
            "volume": 0
          }
        ]
      },
      "incentives": [
        {
          "displayName": "string",
          "description": "string",
          "category": "GIFT",
          "eligibility": "string"
        }
      ],
      "discounts": [
        {
          "displayName": "string",
          "description": "string",
          "type": "CONDITIONAL",
          "category": "PAY_ON_TIME",
          "endDate": "string",
          "methodUType": "percentOfBill",
          "percentOfBill": {
            "rate": "string"
          },
          "percentOfUse": {
            "rate": "string"
          },
          "fixedAmount": {
            "amount": "string"
          },
          "percentOverThreshold": {
            "rate": "string",
            "usageAmount": "string"
          }
        }
      ],
      "greenPowerCharges": [
        {
          "displayName": "string",
          "description": "string",
          "scheme": "GREENPOWER",
          "type": "FIXED_PER_DAY",
          "tiers": [
            {
              "percentGreen": "string",
              "rate": "string",
              "amount": "string"
            }
          ]
        }
      ],
      "eligibility": [
        {
          "type": "EXISTING_CUST",
          "information": "string",
          "description": "string"
        }
      ],
      "fees": [
        {
          "type": "EXIT",
          "term": "FIXED",
          "amount": "string",
          "rate": "string",
          "description": "string"
        }
      ],
      "solarFeedInTariff": [
        {
          "displayName": "string",
          "description": "string",
          "scheme": "PREMIUM",
          "payerType": "GOVERNMENT",
          "tariffUType": "GOVERNMENT",
          "singleTariff": {
            "amount": "string"
          },
          "timeVaryingTariffs": {
            "type": "PEAK",
            "amount": "string",
            "timeVariations": [
              {
                "days": {
                  "weekdays": true,
                  "weekend": true
                },
                "startTime": "string",
                "endTime": "string"
              }
            ]
          }
        }
      ],
      "tariffPeriod": [
        {
          "displayName": "string",
          "startDate": "string",
          "endDate": "string",
          "dailySupplyCharges": "string",
          "rateBlockUType": "singleRate",
          "singleRate": {
            "displayName": "string",
            "description": "string",
            "generalUnitPrice": "string",
            "rates": [
              {
                "unitPrice": "string",
                "volume": 0
              }
            ],
            "period": "string"
          },
          "timeOfUseRates": [
            {
              "displayName": "string",
              "description": "string",
              "rates": [
                {
                  "unitPrice": "string",
                  "volume": 0
                }
              ],
              "timeOfUse": [
                {
                  "days": [
                    "SUNDAY"
                  ],
                  "startTime": "string",
                  "endTime": "string"
                }
              ],
              "type": "PEAK"
            }
          ],
          "demandCharges": [
            {
              "displayName": "string",
              "description": "string",
              "amount": "string",
              "startTime": "string",
              "endTime": "string",
              "days": {
                "weekdays": true,
                "saturday": true,
                "sunday": true
              },
              "minDemand": "string",
              "maxDemand": "string",
              "measurementPeriod": "DAY",
              "chargePeriod": "DAY"
            }
          ]
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

|Name|Type|Required|Description|
|---|---|---|---|
|data|[EnergyPlanDetail](#schemacdr-energy-apienergyplandetail)|mandatory|none|
|links|[Links](#schemacdr-energy-apilinks)|mandatory|none|
|meta|[Meta](#schemacdr-energy-apimeta)|mandatory|none|

<h2 class="schema-toc" id="tocSenergyplan">EnergyPlan</h2>

<a id="schemacdr-energy-apienergyplan"></a>

```json
{
  "planId": "string",
  "effectiveFrom": "string",
  "effectiveTo": "string",
  "lastUpdated": "string",
  "displayName": "string",
  "description": "string",
  "type": "STANDING",
  "fuelType": "ELECTRICITY",
  "brand": "string",
  "brandName": "string",
  "applicationUri": "string",
  "additionalInformation": {
    "overviewUri": "string",
    "termsUri": "string",
    "eligibilityUri": "string",
    "pricingUri": "string",
    "bundleUri": "string"
  },
  "customerType": "RESIDENTIAL",
  "geography": {
    "excludedPostcodes": [
      "string"
    ],
    "includedPostcodes": [
      "string"
    ]
  }
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|planId|[ASCIIString](#common-field-types)|mandatory|The ID of the specific plan|
|effectiveFrom|[DateTimeString](#common-field-types)|optional|The date and time from which this plan is effective (ie. is available for origination). Used to enable the articulation of products to the regime before they are available for customers to originate|
|effectiveTo|[DateTimeString](#common-field-types)|optional|The date and time at which this plan will be retired and will no longer be offered. Used to enable the managed deprecation of plans|
|lastUpdated|[DateTimeString](#common-field-types)|mandatory|The last date and time that the information for this plan was changed (or the creation date for the plan if it has never been altered)|
|displayName|string|optional|The display name of the plan|
|description|string|optional|A description of the plan|
|type|string|mandatory|The type of the plan|
|fuelType|string|mandatory|The fuel types covered by the plan|
|brand|[ASCIIString](#common-field-types)|mandatory|The ID of the brand under which this plan is offered|
|brandName|string|mandatory|The display name of the brand under which this plan is offered|
|applicationUri|[URIString](#common-field-types)|optional|A link to an application web page where this plan can be applied for|
|additionalInformation|object|optional|Object that contains links to additional information on specific topics|
|» overviewUri|[URIString](#common-field-types)|optional|A link to a general overview of the plan|
|» termsUri|[URIString](#common-field-types)|optional|A link to terms and conditions for the plan|
|» eligibilityUri|[URIString](#common-field-types)|optional|A link to detail on eligibility criteria for the plan|
|» pricingUri|[URIString](#common-field-types)|optional|A link to detail on pricing for the plan|
|» bundleUri|[URIString](#common-field-types)|optional|A link to detail on bundles that this plan can be a part of|
|customerType|string|optional|The type of customer that the plan is offered to.  If absent then the plan is available to all customers|
|geography|object|optional|Describes the geographical area that the plan is available for.  If absent then it is assumed the plan is not geographically limited|
|» excludedPostcodes|[string]|optional|Array of valid Australian post codes that are specifically excluded from the plan.  Each element is a single four digit postcode (e.g. 3000) or a range of postcodes defined by two four digit postcodes and a hyphen (e.g. 3000-3999)|
|» includedPostcodes|[string]|optional|Array of valid Australian post codes that are included from the plan.  If absent defaults to all non-excluded post codes.  Each element is a single four digit postcode (e.g. 3000) or a range of postcodes defined by two four digit postcodes and a hyphen (e.g. 3000-3999)|

#### Enumerated Values

|Property|Value|
|---|---|
|type|STANDING|
|type|MARKET|
|type|REGULATED|
|fuelType|ELECTRICITY|
|fuelType|GAS|
|fuelType|DUAL|
|customerType|RESIDENTIAL|
|customerType|BUSINESS|

<h2 class="schema-toc" id="tocSenergyplandetail">EnergyPlanDetail</h2>

<a id="schemacdr-energy-apienergyplandetail"></a>

```json
{
  "planId": "string",
  "effectiveFrom": "string",
  "effectiveTo": "string",
  "lastUpdated": "string",
  "displayName": "string",
  "description": "string",
  "type": "STANDING",
  "fuelType": "ELECTRICITY",
  "brand": "string",
  "brandName": "string",
  "applicationUri": "string",
  "additionalInformation": {
    "overviewUri": "string",
    "termsUri": "string",
    "eligibilityUri": "string",
    "pricingUri": "string",
    "bundleUri": "string"
  },
  "customerType": "RESIDENTIAL",
  "geography": {
    "excludedPostcodes": [
      "string"
    ],
    "includedPostcodes": [
      "string"
    ]
  },
  "meteringCharges": [
    {
      "displayName": "string",
      "description": "string",
      "minimumValue": "string",
      "maximumValue": "string",
      "period": "string"
    }
  ],
  "gasContract": {
    "additionalFeeInformation": "string",
    "pricingModel": "SINGLE_RATE",
    "termType": "1_YEAR",
    "timeZone": "LOCAL",
    "benefitPeriod": "string",
    "terms": "string",
    "isFixed": true,
    "variation": "string",
    "onExpiryDescription": "string",
    "meterTypes": [
      "string"
    ],
    "coolingOffDays": "string",
    "billFrequency": [
      "string"
    ],
    "paymentOption": [
      "PAPER_BILL"
    ],
    "intrinsicGreenPower": {
      "greenPercentage": "string"
    },
    "controlledLoad": {
      "displayName": "string",
      "description": "string",
      "dailyCharge": "string",
      "period": "string",
      "rates": [
        {
          "unitPrice": "string",
          "volume": 0
        }
      ]
    },
    "incentives": [
      {
        "displayName": "string",
        "description": "string",
        "category": "GIFT",
        "eligibility": "string"
      }
    ],
    "discounts": [
      {
        "displayName": "string",
        "description": "string",
        "type": "CONDITIONAL",
        "category": "PAY_ON_TIME",
        "endDate": "string",
        "methodUType": "percentOfBill",
        "percentOfBill": {
          "rate": "string"
        },
        "percentOfUse": {
          "rate": "string"
        },
        "fixedAmount": {
          "amount": "string"
        },
        "percentOverThreshold": {
          "rate": "string",
          "usageAmount": "string"
        }
      }
    ],
    "greenPowerCharges": [
      {
        "displayName": "string",
        "description": "string",
        "scheme": "GREENPOWER",
        "type": "FIXED_PER_DAY",
        "tiers": [
          {
            "percentGreen": "string",
            "rate": "string",
            "amount": "string"
          }
        ]
      }
    ],
    "eligibility": [
      {
        "type": "EXISTING_CUST",
        "information": "string",
        "description": "string"
      }
    ],
    "fees": [
      {
        "type": "EXIT",
        "term": "FIXED",
        "amount": "string",
        "rate": "string",
        "description": "string"
      }
    ],
    "solarFeedInTariff": [
      {
        "displayName": "string",
        "description": "string",
        "scheme": "PREMIUM",
        "payerType": "GOVERNMENT",
        "tariffUType": "GOVERNMENT",
        "singleTariff": {
          "amount": "string"
        },
        "timeVaryingTariffs": {
          "type": "PEAK",
          "amount": "string",
          "timeVariations": [
            {
              "days": {
                "weekdays": true,
                "weekend": true
              },
              "startTime": "string",
              "endTime": "string"
            }
          ]
        }
      }
    ],
    "tariffPeriod": [
      {
        "displayName": "string",
        "startDate": "string",
        "endDate": "string",
        "dailySupplyCharges": "string",
        "rateBlockUType": "singleRate",
        "singleRate": {
          "displayName": "string",
          "description": "string",
          "generalUnitPrice": "string",
          "rates": [
            {
              "unitPrice": "string",
              "volume": 0
            }
          ],
          "period": "string"
        },
        "timeOfUseRates": [
          {
            "displayName": "string",
            "description": "string",
            "rates": [
              {
                "unitPrice": "string",
                "volume": 0
              }
            ],
            "timeOfUse": [
              {
                "days": [
                  "SUNDAY"
                ],
                "startTime": "string",
                "endTime": "string"
              }
            ],
            "type": "PEAK"
          }
        ],
        "demandCharges": [
          {
            "displayName": "string",
            "description": "string",
            "amount": "string",
            "startTime": "string",
            "endTime": "string",
            "days": {
              "weekdays": true,
              "saturday": true,
              "sunday": true
            },
            "minDemand": "string",
            "maxDemand": "string",
            "measurementPeriod": "DAY",
            "chargePeriod": "DAY"
          }
        ]
      }
    ]
  },
  "electricityContract": {
    "additionalFeeInformation": "string",
    "pricingModel": "SINGLE_RATE",
    "termType": "1_YEAR",
    "timeZone": "LOCAL",
    "benefitPeriod": "string",
    "terms": "string",
    "isFixed": true,
    "variation": "string",
    "onExpiryDescription": "string",
    "meterTypes": [
      "string"
    ],
    "coolingOffDays": "string",
    "billFrequency": [
      "string"
    ],
    "paymentOption": [
      "PAPER_BILL"
    ],
    "intrinsicGreenPower": {
      "greenPercentage": "string"
    },
    "controlledLoad": {
      "displayName": "string",
      "description": "string",
      "dailyCharge": "string",
      "period": "string",
      "rates": [
        {
          "unitPrice": "string",
          "volume": 0
        }
      ]
    },
    "incentives": [
      {
        "displayName": "string",
        "description": "string",
        "category": "GIFT",
        "eligibility": "string"
      }
    ],
    "discounts": [
      {
        "displayName": "string",
        "description": "string",
        "type": "CONDITIONAL",
        "category": "PAY_ON_TIME",
        "endDate": "string",
        "methodUType": "percentOfBill",
        "percentOfBill": {
          "rate": "string"
        },
        "percentOfUse": {
          "rate": "string"
        },
        "fixedAmount": {
          "amount": "string"
        },
        "percentOverThreshold": {
          "rate": "string",
          "usageAmount": "string"
        }
      }
    ],
    "greenPowerCharges": [
      {
        "displayName": "string",
        "description": "string",
        "scheme": "GREENPOWER",
        "type": "FIXED_PER_DAY",
        "tiers": [
          {
            "percentGreen": "string",
            "rate": "string",
            "amount": "string"
          }
        ]
      }
    ],
    "eligibility": [
      {
        "type": "EXISTING_CUST",
        "information": "string",
        "description": "string"
      }
    ],
    "fees": [
      {
        "type": "EXIT",
        "term": "FIXED",
        "amount": "string",
        "rate": "string",
        "description": "string"
      }
    ],
    "solarFeedInTariff": [
      {
        "displayName": "string",
        "description": "string",
        "scheme": "PREMIUM",
        "payerType": "GOVERNMENT",
        "tariffUType": "GOVERNMENT",
        "singleTariff": {
          "amount": "string"
        },
        "timeVaryingTariffs": {
          "type": "PEAK",
          "amount": "string",
          "timeVariations": [
            {
              "days": {
                "weekdays": true,
                "weekend": true
              },
              "startTime": "string",
              "endTime": "string"
            }
          ]
        }
      }
    ],
    "tariffPeriod": [
      {
        "displayName": "string",
        "startDate": "string",
        "endDate": "string",
        "dailySupplyCharges": "string",
        "rateBlockUType": "singleRate",
        "singleRate": {
          "displayName": "string",
          "description": "string",
          "generalUnitPrice": "string",
          "rates": [
            {
              "unitPrice": "string",
              "volume": 0
            }
          ],
          "period": "string"
        },
        "timeOfUseRates": [
          {
            "displayName": "string",
            "description": "string",
            "rates": [
              {
                "unitPrice": "string",
                "volume": 0
              }
            ],
            "timeOfUse": [
              {
                "days": [
                  "SUNDAY"
                ],
                "startTime": "string",
                "endTime": "string"
              }
            ],
            "type": "PEAK"
          }
        ],
        "demandCharges": [
          {
            "displayName": "string",
            "description": "string",
            "amount": "string",
            "startTime": "string",
            "endTime": "string",
            "days": {
              "weekdays": true,
              "saturday": true,
              "sunday": true
            },
            "minDemand": "string",
            "maxDemand": "string",
            "measurementPeriod": "DAY",
            "chargePeriod": "DAY"
          }
        ]
      }
    ]
  }
}

```

### Properties

*allOf*

|Name|Type|Required|Description|
|---|---|---|---|
|*anonymous*|[EnergyPlan](#schemacdr-energy-apienergyplan)|mandatory|none|

*and*

|Name|Type|Required|Description|
|---|---|---|---|
|*anonymous*|object|mandatory|none|
|» meteringCharges|[object]|optional|Charges for metering included in the plan|
|»» displayName|string|mandatory|Display name of the charge|
|»» description|string|optional|Description of the charge|
|»» minimumValue|[AmountString](#common-field-types)|mandatory|Minimum value of the charge if the charge is a range or the absolute value of the charge if no range is specified|
|»» maximumValue|[AmountString](#common-field-types)|optional|The upper limit of the charge if the charge could occur in a range|
|»» period|[ExternalRef](#common-field-types)|optional|The charges that occur on a schedule indicates the frequency. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)|
|» gasContract|[EnergyPlanContract](#schemacdr-energy-apienergyplancontract)|conditional|The details of the terms for the supply of electricity under this plan.  Is mandatory if fuelType is set to GAS or DUAL|
|» electricityContract|[EnergyPlanContract](#schemacdr-energy-apienergyplancontract)|conditional|The details of the terms for the supply of electricity under this plan.  Is mandatory if fuelType is set to ELECTRICITY or DUAL|

<h2 class="schema-toc" id="tocSenergyplancontract">EnergyPlanContract</h2>

<a id="schemacdr-energy-apienergyplancontract"></a>

```json
{
  "additionalFeeInformation": "string",
  "pricingModel": "SINGLE_RATE",
  "termType": "1_YEAR",
  "timeZone": "LOCAL",
  "benefitPeriod": "string",
  "terms": "string",
  "isFixed": true,
  "variation": "string",
  "onExpiryDescription": "string",
  "meterTypes": [
    "string"
  ],
  "coolingOffDays": "string",
  "billFrequency": [
    "string"
  ],
  "paymentOption": [
    "PAPER_BILL"
  ],
  "intrinsicGreenPower": {
    "greenPercentage": "string"
  },
  "controlledLoad": {
    "displayName": "string",
    "description": "string",
    "dailyCharge": "string",
    "period": "string",
    "rates": [
      {
        "unitPrice": "string",
        "volume": 0
      }
    ]
  },
  "incentives": [
    {
      "displayName": "string",
      "description": "string",
      "category": "GIFT",
      "eligibility": "string"
    }
  ],
  "discounts": [
    {
      "displayName": "string",
      "description": "string",
      "type": "CONDITIONAL",
      "category": "PAY_ON_TIME",
      "endDate": "string",
      "methodUType": "percentOfBill",
      "percentOfBill": {
        "rate": "string"
      },
      "percentOfUse": {
        "rate": "string"
      },
      "fixedAmount": {
        "amount": "string"
      },
      "percentOverThreshold": {
        "rate": "string",
        "usageAmount": "string"
      }
    }
  ],
  "greenPowerCharges": [
    {
      "displayName": "string",
      "description": "string",
      "scheme": "GREENPOWER",
      "type": "FIXED_PER_DAY",
      "tiers": [
        {
          "percentGreen": "string",
          "rate": "string",
          "amount": "string"
        }
      ]
    }
  ],
  "eligibility": [
    {
      "type": "EXISTING_CUST",
      "information": "string",
      "description": "string"
    }
  ],
  "fees": [
    {
      "type": "EXIT",
      "term": "FIXED",
      "amount": "string",
      "rate": "string",
      "description": "string"
    }
  ],
  "solarFeedInTariff": [
    {
      "displayName": "string",
      "description": "string",
      "scheme": "PREMIUM",
      "payerType": "GOVERNMENT",
      "tariffUType": "GOVERNMENT",
      "singleTariff": {
        "amount": "string"
      },
      "timeVaryingTariffs": {
        "type": "PEAK",
        "amount": "string",
        "timeVariations": [
          {
            "days": {
              "weekdays": true,
              "weekend": true
            },
            "startTime": "string",
            "endTime": "string"
          }
        ]
      }
    }
  ],
  "tariffPeriod": [
    {
      "displayName": "string",
      "startDate": "string",
      "endDate": "string",
      "dailySupplyCharges": "string",
      "rateBlockUType": "singleRate",
      "singleRate": {
        "displayName": "string",
        "description": "string",
        "generalUnitPrice": "string",
        "rates": [
          {
            "unitPrice": "string",
            "volume": 0
          }
        ],
        "period": "string"
      },
      "timeOfUseRates": [
        {
          "displayName": "string",
          "description": "string",
          "rates": [
            {
              "unitPrice": "string",
              "volume": 0
            }
          ],
          "timeOfUse": [
            {
              "days": [
                "SUNDAY"
              ],
              "startTime": "string",
              "endTime": "string"
            }
          ],
          "type": "PEAK"
        }
      ],
      "demandCharges": [
        {
          "displayName": "string",
          "description": "string",
          "amount": "string",
          "startTime": "string",
          "endTime": "string",
          "days": {
            "weekdays": true,
            "saturday": true,
            "sunday": true
          },
          "minDemand": "string",
          "maxDemand": "string",
          "measurementPeriod": "DAY",
          "chargePeriod": "DAY"
        }
      ]
    }
  ]
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|additionalFeeInformation|string|optional|Free text field containing additional information of the fees for this contract|
|pricingModel|string|mandatory|The pricing model for the contract.  Contracts for gas must use SINGLE_RATE.  Note that the detail for the enumeration values are:<ul><li>**SINGLE_RATE** - all energy usage is charged at a single unit rate no matter when it is consumed. Multiple unit rates may exist that correspond to varying volumes of usage i.e. a ‘block’ or ‘step’ tariff (first 50kWh @ X cents, next 50kWh at Y cents etc.</li><li>**SINGLE_RATE_CONT_LOAD** - as above, but with an additional, separate unit rate charged for all energy usage from a controlled load i.e. separately metered appliance like hot water service, pool pump etc.</li><li>**TIME_OF_USE** - energy usage is charged at unit rates that vary dependent on time of day and day of week that the energy is consumed</li><li>**TIME_OF_USE_CONT_LOAD** - as above, but with an additional, separate unit rate charged for all energy usage from a controlled load i.e. separately metered appliance like hot water service, pool pump etc.</li><li>**FLEXIBLE** - energy usage is charged at unit rates that vary based on external factors</li><li>**FLEXIBLE_CONT_LOAD** - as above, but with an additional, separate unit rate charged for all energy usage from a controlled load i.e. separately metered appliance like hot water service, pool pump etc.</li><li>**QUOTA** - all energy usage is charged at a single fixed rate, up to a specified usage quota/allowance. All excess usage beyond the allowance is then charged at a single unit rate (may not be the best way to explain it but it is essentially a ‘subscription’ or telco style product i.e. $50/month for up to 150kWh included usage</li></ul>|
|termType|string|optional|The term for the contract.  If absent assumes no specified term|
|timeZone|string|conditional|Required if pricingModel is set to TIME_OF_USE.  Defines the time zone to use for calculation of the time of use thresholds|
|benefitPeriod|string|conditional|Description of the benefit period.  Should only be present if termType has the value ONGOING|
|terms|string|optional|Free text description of the terms for the contract|
|isFixed|boolean|mandatory|Flag indicating whether prices are fixed or variable|
|variation|string|conditional|Free text description of price variation policy and conditions for the contract.  Mandatory if isFixed is true|
|onExpiryDescription|string|optional|Free text field that describes what will occur on or prior to expiry of the fixed contract term or benefit period|
|meterTypes|[string]|optional|An array of the meter types that this contract is available for|
|coolingOffDays|[PositiveInteger](#common-field-types)|conditional|Number of days in the cooling off period for the contract.  Mandatory for plans with type of MARKET|
|billFrequency|[string]|mandatory|An array of the available billing schedules for this contract. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)|
|paymentOption|[string]|mandatory|Payment options for this contract|
|intrinsicGreenPower|object|optional|Describes intrinsic green power for the plan.  If present then the plan includes a percentage of green power in the base plan. Should not be present for gas contracts|
|» greenPercentage|[RateString](#common-field-types)|mandatory|Percentage of green power intrinsically included in the plan|
|controlledLoad|[EnergyPlanControlledLoad](#schemacdr-energy-apienergyplancontrolledload)|conditional|Required if pricing model is SINGLE_RATE_CONT_LOAD or TIME_OF_USE_CONT_LOAD|
|incentives|[EnergyPlanIncentives](#schemacdr-energy-apienergyplanincentives)|optional|Optional list of incentives available for the contract|
|discounts|[EnergyPlanDiscounts](#schemacdr-energy-apienergyplandiscounts)|optional|Optional list of discounts available for the contract|
|greenPowerCharges|[EnergyPlanGreenPowerCharges](#schemacdr-energy-apienergyplangreenpowercharges)|optional|Optional list of charges applicable to green power|
|eligibility|[EnergyPlanEligibility](#schemacdr-energy-apienergyplaneligibility)|optional|Eligibility restrictions or requirements|
|fees|[EnergyPlanFees](#schemacdr-energy-apienergyplanfees)|optional|An array of fees applicable to the plan|
|solarFeedInTariff|[EnergyPlanSolarFeedInTariff](#schemacdr-energy-apienergyplansolarfeedintariff)|optional|Array of feed in tariffs for solar power|
|tariffPeriod|[EnergyPlanTariffPeriod](#schemacdr-energy-apienergyplantariffperiod)|mandatory|Array of tariff periods|

#### Enumerated Values

|Property|Value|
|---|---|
|pricingModel|SINGLE_RATE|
|pricingModel|SINGLE_RATE_CONT_LOAD|
|pricingModel|TIME_OF_USE|
|pricingModel|TIME_OF_USE_CONT_LOAD|
|pricingModel|FLEXIBLE|
|pricingModel|FLEXIBLE_CONT_LOAD|
|pricingModel|QUOTA|
|termType|1_YEAR|
|termType|2_YEAR|
|termType|3_YEAR|
|termType|4_YEAR|
|termType|5_YEAR|
|termType|ONGOING|
|termType|OTHER|
|timeZone|LOCAL|
|timeZone|AEST|

<h2 class="schema-toc" id="tocSenergyplancontrolledload">EnergyPlanControlledLoad</h2>

<a id="schemacdr-energy-apienergyplancontrolledload"></a>

```json
{
  "displayName": "string",
  "description": "string",
  "dailyCharge": "string",
  "period": "string",
  "rates": [
    {
      "unitPrice": "string",
      "volume": 0
    }
  ]
}

```

*Required if pricing model is SINGLE_RATE_CONT_LOAD or TIME_OF_USE_CONT_LOAD*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|displayName|string|mandatory|A display name for the controlled load tier|
|description|string|optional|A description of the controlled load tier|
|dailyCharge|[AmountString](#common-field-types)|mandatory|The daily supply charge (exclusive of GST) for this controlled load tier|
|period|[ExternalRef](#common-field-types)|mandatory|The period for which the controlled load rate applies. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)|
|rates|[object]|mandatory|Array of controlled load rates in order of usage volume|
|» unitPrice|[AmountString](#common-field-types)|mandatory|Unit price of usage per kWh (exclusive of GST)|
|» volume|number|optional|Volume in kWh that this rate applies to.  Only applicable for ‘stepped’ rates where different rates apply for different volumes of usage in a period|

<h2 class="schema-toc" id="tocSenergyplanincentives">EnergyPlanIncentives</h2>

<a id="schemacdr-energy-apienergyplanincentives"></a>

```json
[
  {
    "displayName": "string",
    "description": "string",
    "category": "GIFT",
    "eligibility": "string"
  }
]

```

*Optional list of incentives available for the contract*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|displayName|string|mandatory|The display name of the incentive|
|description|string|mandatory|The description of the incentive|
|category|string|mandatory|The type of the incentive|
|eligibility|string|optional|A display message outlining an eligibility criteria that may apply|

#### Enumerated Values

|Property|Value|
|---|---|
|category|GIFT|
|category|ACCOUNT_CREDIT|
|category|OTHER|

<h2 class="schema-toc" id="tocSenergyplandiscounts">EnergyPlanDiscounts</h2>

<a id="schemacdr-energy-apienergyplandiscounts"></a>

```json
[
  {
    "displayName": "string",
    "description": "string",
    "type": "CONDITIONAL",
    "category": "PAY_ON_TIME",
    "endDate": "string",
    "methodUType": "percentOfBill",
    "percentOfBill": {
      "rate": "string"
    },
    "percentOfUse": {
      "rate": "string"
    },
    "fixedAmount": {
      "amount": "string"
    },
    "percentOverThreshold": {
      "rate": "string",
      "usageAmount": "string"
    }
  }
]

```

*Optional list of discounts available for the contract*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|displayName|string|mandatory|The display name of the discount|
|description|string|optional|The description of the discount|
|type|string|mandatory|The type of the discount|
|category|string|optional|The type of the discount.  Mandatory if the discount type is CONDITIONAL|
|endDate|[DateString](#common-field-types)|optional|Optional end date for the discount after which the discount is no longer available|
|methodUType|string|mandatory|The method of calculation of the discount|
|percentOfBill|object|optional|Required if methodUType is percentOfBill|
|» rate|[RateString](#common-field-types)|mandatory|The rate of the discount applied to the bill amount|
|percentOfUse|object|optional|Required if methodUType is percentOfUse|
|» rate|[RateString](#common-field-types)|mandatory|The rate of the discount applied to the usageamount|
|fixedAmount|object|optional|Required if methodUType is fixedAmount|
|» amount|[AmountString](#common-field-types)|mandatory|The amount of the discount|
|percentOverThreshold|object|optional|Required if methodUType is percentOverThreshold|
|» rate|[RateString](#common-field-types)|mandatory|The rate of the discount over the usage amount|
|» usageAmount|[AmountString](#common-field-types)|mandatory|The usage amount threshold above which the discount applies|

#### Enumerated Values

|Property|Value|
|---|---|
|type|CONDITIONAL|
|type|GUARANTEED|
|category|PAY_ON_TIME|
|category|DIRECT_DEBIT|
|category|GUARANTEED_DISCOUNT|
|category|OTHER|
|methodUType|percentOfBill|
|methodUType|percentOfUse|
|methodUType|fixedAmount|
|methodUType|percentOverThreshold|

<h2 class="schema-toc" id="tocSenergyplangreenpowercharges">EnergyPlanGreenPowerCharges</h2>

<a id="schemacdr-energy-apienergyplangreenpowercharges"></a>

```json
[
  {
    "displayName": "string",
    "description": "string",
    "scheme": "GREENPOWER",
    "type": "FIXED_PER_DAY",
    "tiers": [
      {
        "percentGreen": "string",
        "rate": "string",
        "amount": "string"
      }
    ]
  }
]

```

*Optional list of charges applicable to green power*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|displayName|string|mandatory|The display name of the charge|
|description|string|optional|The description of the charge|
|scheme|string|mandatory|The applicable green power scheme|
|type|string|mandatory|The type of charge|
|tiers|[object]|mandatory|Array of charge tiers based on the percentage of green power used for the period implied by the type.  Array is in order of increasing percentage of green power|
|» percentGreen|[RateString](#common-field-types)|mandatory|The upper percentage of green power used applicable for this tier|
|» rate|[RateString](#common-field-types)|conditional|The rate of the charge if the type implies the application of a rate|
|» amount|[AmountString](#common-field-types)|conditional|The amount of the charge if the type implies the application of a fixed amount|

#### Enumerated Values

|Property|Value|
|---|---|
|scheme|GREENPOWER|
|scheme|OTHER|
|type|FIXED_PER_DAY|
|type|FIXED_PER_WEEK|
|type|FIXED_PER_MONTH|
|type|FIXED_PER_UNIT|
|type|PERCENT_OF_USE|
|type|PERCENT_OF_BILL|

<h2 class="schema-toc" id="tocSenergyplaneligibility">EnergyPlanEligibility</h2>

<a id="schemacdr-energy-apienergyplaneligibility"></a>

```json
[
  {
    "type": "EXISTING_CUST",
    "information": "string",
    "description": "string"
  }
]

```

*Eligibility restrictions or requirements*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|type|string|mandatory|The type of the eligibility restriction.<br/>The CONTINGENT_PLAN value indicates that the plan is contingent on the customer taking up an alternate fuel plan from the same retailer (for instance, if the fuelType is ELECTRICITY then a GAS plan from the same retailer must be taken up)|
|information|string|mandatory|Information of the eligibility restriction specific to the type of the restriction|
|description|string|optional|A description of the eligibility restriction|

#### Enumerated Values

|Property|Value|
|---|---|
|type|EXISTING_CUST|
|type|EXISTING_POOL|
|type|EXISTING_SOLAR|
|type|EXISTING_BATTERY|
|type|EXISTING_SMART_METER|
|type|EXISTING_BASIC_METER|
|type|SENIOR_CARD|
|type|SMALL_BUSINESS|
|type|NO_SOLAR_FIT|
|type|NEW_CUSTOMER|
|type|ONLINE_ONLY|
|type|REQ_EQUIP_SUPPLIER|
|type|THIRD_PARTY_ONLY|
|type|SPORT_CLUB_MEMBER|
|type|ORG_MEMBER|
|type|SPECIFIC_LOCATION|
|type|MINIMUM_USAGE|
|type|LOYALTY_MEMBER|
|type|GROUP_BUY_MEMBER|
|type|CONTINGENT_PLAN|
|type|OTHER|

<h2 class="schema-toc" id="tocSenergyplanfees">EnergyPlanFees</h2>

<a id="schemacdr-energy-apienergyplanfees"></a>

```json
[
  {
    "type": "EXIT",
    "term": "FIXED",
    "amount": "string",
    "rate": "string",
    "description": "string"
  }
]

```

*An array of fees applicable to the plan*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|type|string|mandatory|The type of the fee|
|term|string|mandatory|The term of the fee|
|amount|[AmountString](#common-field-types)|conditional|The fee amount. Required if term is not PERCENT_OF_BILL|
|rate|[RateString](#common-field-types)|conditional|The fee rate. Required if term is PERCENT_OF_BILL|
|description|string|optional|A description of the fee|

#### Enumerated Values

|Property|Value|
|---|---|
|type|EXIT|
|type|ESTABLISHMENT|
|type|LATE_PAYMENT|
|type|DISCONNECTION|
|type|DISCONNECT_MOVE_OUT|
|type|DISCONNECT_NON_PAY|
|type|RECONNECTION|
|type|CONNECTION|
|type|PAYMENT_PROCESSING|
|type|CC_PROCESSING|
|type|CHEQUE_DISHONOUR|
|type|DD_DISHONOUR|
|type|MEMBERSHIP|
|type|CONTRIBUTION|
|type|PAPER_BILL|
|type|OTHER|
|term|FIXED|
|term|1_YEAR|
|term|2_YEAR|
|term|3_YEAR|
|term|4_YEAR|
|term|5_YEAR|
|term|PERCENT_OF_BILL|
|term|ANNUAL|
|term|DAILY|
|term|MONTHLY|
|term|BIANNUAL|

<h2 class="schema-toc" id="tocSenergyplansolarfeedintariff">EnergyPlanSolarFeedInTariff</h2>

<a id="schemacdr-energy-apienergyplansolarfeedintariff"></a>

```json
[
  {
    "displayName": "string",
    "description": "string",
    "scheme": "PREMIUM",
    "payerType": "GOVERNMENT",
    "tariffUType": "GOVERNMENT",
    "singleTariff": {
      "amount": "string"
    },
    "timeVaryingTariffs": {
      "type": "PEAK",
      "amount": "string",
      "timeVariations": [
        {
          "days": {
            "weekdays": true,
            "weekend": true
          },
          "startTime": "string",
          "endTime": "string"
        }
      ]
    }
  }
]

```

*Array of feed in tariffs for solar power*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|displayName|string|mandatory|The name of the tariff|
|description|string|optional|A description of the tariff|
|scheme|string|mandatory|The applicable scheme|
|payerType|string|mandatory|The type of the payer|
|tariffUType|string|mandatory|The type of the payer|
|singleTariff|object|conditional|Represents a constant tariff.  Mandatory if tariffUType is set to singleTariff|
|» amount|[AmountString](#common-field-types)|mandatory|The tariff amount|
|timeVaryingTariffs|object|conditional|Represents a tariff based on time.  Mandatory if tariffUType is set to timeVaryingTariffs|
|» type|string|optional|The type of the charging time period. If absent applies to all periods|
|» amount|[AmountString](#common-field-types)|mandatory|The tariff amount|
|» timeVariations|[object]|mandatory|Array of time periods for which this tariff is applicable|
|»» days|object|optional|none|
|»»» weekdays|boolean|mandatory|Indicates whether the tariff is applicable Monday to Friday|
|»»» weekend|boolean|mandatory|Indicates whether the tariff is applicable Saturday and Sunday|
|»» startTime|[TimeString](#common-field-types)|optional|The beginning of the time period per day for which the tariff applies.  If absent assumes start of day (ie. midnight)|
|»» endTime|[TimeString](#common-field-types)|optional|The end of the time period per day for which the tariff applies.  If absent assumes end of day (ie. one second before midnight)|

#### Enumerated Values

|Property|Value|
|---|---|
|scheme|PREMIUM|
|scheme|OTHER|
|payerType|GOVERNMENT|
|payerType|RETAILER|
|tariffUType|GOVERNMENT|
|tariffUType|RETAILER|
|type|PEAK|
|type|OFF_PEAK|
|type|SHOULDER|

<h2 class="schema-toc" id="tocSenergyplantariffperiod">EnergyPlanTariffPeriod</h2>

<a id="schemacdr-energy-apienergyplantariffperiod"></a>

```json
[
  {
    "displayName": "string",
    "startDate": "string",
    "endDate": "string",
    "dailySupplyCharges": "string",
    "rateBlockUType": "singleRate",
    "singleRate": {
      "displayName": "string",
      "description": "string",
      "generalUnitPrice": "string",
      "rates": [
        {
          "unitPrice": "string",
          "volume": 0
        }
      ],
      "period": "string"
    },
    "timeOfUseRates": [
      {
        "displayName": "string",
        "description": "string",
        "rates": [
          {
            "unitPrice": "string",
            "volume": 0
          }
        ],
        "timeOfUse": [
          {
            "days": [
              "SUNDAY"
            ],
            "startTime": "string",
            "endTime": "string"
          }
        ],
        "type": "PEAK"
      }
    ],
    "demandCharges": [
      {
        "displayName": "string",
        "description": "string",
        "amount": "string",
        "startTime": "string",
        "endTime": "string",
        "days": {
          "weekdays": true,
          "saturday": true,
          "sunday": true
        },
        "minDemand": "string",
        "maxDemand": "string",
        "measurementPeriod": "DAY",
        "chargePeriod": "DAY"
      }
    ]
  }
]

```

*Array of tariff periods*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|displayName|string|mandatory|The name of the tariff period|
|startDate|string|mandatory|The start date of the tariff period in a calendar year.  Formatted in mm-dd format|
|endDate|string|mandatory|The end date of the tariff period in a calendar year.  Formatted in mm-dd format|
|dailySupplyCharges|[AmountString](#common-field-types)|mandatory|The amount of access charge for the tariff period, in cents per day exclusive of GST.|
|rateBlockUType|string|mandatory|Specifies the type of rate applicable to this tariff period|
|singleRate|object|conditional|Object representing a single rate.  Required if rateBlockUType is singleRate|
|» displayName|string|mandatory|Display name of the rate|
|» description|string|optional|Description of the rate|
|» generalUnitPrice|[AmountString](#common-field-types)|conditional|The block rate (unit price) for any usage above the included fixed usage, in cents per kWh inclusive of GST.  Only required if pricingModel field is ‘QUOTA’|
|» rates|[object]|mandatory|Array of controlled load rates in order of usage volume|
|»» unitPrice|[AmountString](#common-field-types)|mandatory|Unit price of usage per kWh (exclusive of GST)|
|»» volume|number|optional|Volume in kWh that this rate applies to.  Only applicable for ‘stepped’ rates where different rates apply for different volumes of usage in a period|
|» period|[ExternalRef](#common-field-types)|optional|Usage period for which the block rate applies. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)|
|timeOfUseRates|[object]|conditional|Array of objects representing time of use rates.  Required if rateBlockUType is timeOfUseRates|
|» displayName|string|mandatory|Display name of the rate|
|» description|string|optional|Description of the rate|
|» rates|[object]|mandatory|Array of controlled load rates in order of usage volume|
|»» unitPrice|[AmountString](#common-field-types)|mandatory|Unit price of usage per kWh (exclusive of GST)|
|»» volume|number|optional|Volume in kWh that this rate applies to.  Only applicable for ‘stepped’ rates where different rates apply for different volumes of usage in a period|
|» timeOfUse|[object]|mandatory|Array of times of use|
|»» days|[string]|mandatory|The days that the rate applies to|
|»» startTime|string|mandatory|Start of the period in HHMM format using 24 hour clock format|
|»» endTime|string|mandatory|End of the period in HHMM format using 24 hour clock format|
|» type|string|mandatory|The type of usage that the rate applies to|
|demandCharges|[object]|conditional|Array of demand charges.  Required if rateBlockUType is demandCharges|
|» displayName|string|mandatory|Display name of the charge|
|» description|string|optional|Description of the charge|
|» amount|[AmountString](#common-field-types)|mandatory|The charge amount per kWh exclusive of GST|
|» startTime|string|mandatory|Start of the period in HHMM format using 24 hour clock format|
|» endTime|string|mandatory|End of the period in HHMM format using 24 hour clock format|
|» days|object|optional|Object containing demand tariff by day of week|
|»» weekdays|boolean|mandatory|Indicates the demand tariff is applicable on weekdays|
|»» saturday|boolean|mandatory|Indicates the demand tariff is applicable on Saturdays|
|»» sunday|boolean|mandatory|Indicates the demand tariff is applicable on Sundays|
|» minDemand|[AmountString](#common-field-types)|optional|Minimum demand for this demand tariff in kW.  If absent then 0 is assumed|
|» maxDemand|[AmountString](#common-field-types)|optional|Maximum demand for this demand tariff in kW.  If present, must be higher than the value of the minDemand field|
|» measurementPeriod|string|mandatory|Application period for the demand tariff|
|» chargePeriod|string|mandatory|Charge period for the demand tariff|

#### Enumerated Values

|Property|Value|
|---|---|
|rateBlockUType|singleRate|
|rateBlockUType|timeOfUseRates|
|rateBlockUType|demandCharges|
|type|PEAK|
|type|OFF_PEAK|
|type|SHOULDER|
|type|SHOULDER1|
|type|SHOULDER2|
|measurementPeriod|DAY|
|measurementPeriod|MONTH|
|measurementPeriod|TARIFF_PERIOD|
|chargePeriod|DAY|
|chargePeriod|MONTH|
|chargePeriod|TARIFF_PERIOD|

<h2 class="schema-toc" id="tocSderrecord">derRecord</h2>

<a id="schemacdr-energy-apiderrecord"></a>

```json
{
  "servicePointId": "string",
  "approvedCapacity": 0,
  "availablePhasesCount": 0,
  "installedPhasesCount": 0,
  "islandableInstallation": "string",
  "hasCentralProtectionControl": false,
  "protectionMode": {
    "exportLimitkva": 0,
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
      "count": "string",
      "equipmentType": "string",
      "manufacturerName": "string",
      "inverterSeries": "string",
      "inverterModelNumber": "string",
      "commissioningDate": "string",
      "installationStage": "string",
      "status": "ACTIVE",
      "inverterDeviceCapacity": 0,
      "derDevices": [
        {
          "count": 0,
          "manufacturer": "string",
          "modelNumber": "string",
          "status": "ACTIVE",
          "installationStage": 0,
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
|servicePointId|string|mandatory|Tokenised ID of the service point to be used for referring to the service point in the CDR API suite.  To be created in accordance with CDR ID permanence requirements|
|approvedCapacity|number|mandatory|Approved small generating unit capacity as agreed with NSP in the connection agreement, expressed in kVA|
|availablePhasesCount|number|mandatory|The number of phases available for the installation of DER|
|installedPhasesCount|number|mandatory|The number of phases that DER is installed on|
|islandableInstallation|string|mandatory|For identification of small generating units designed with the ability to operate in an islanded mode|
|hasCentralProtectionControl|boolean|optional|For DER installations where NSPs specify the need for additional forms of protection above those inbuilt in an inverter.  If absent then assumed to be false|
|protectionMode|object|conditional|Required only when the hasCentralProtectionAndControl flag is set to true|
|» exportLimitkva|number|optional|Maximum amount of power (kVA) that may be exported from a connection point to the grid, as monitored by a control / relay function. A null value indicates no limit|
|» underFrequencyProtection|number|optional|Protective function limit. Default value 47 Hz according to AS4777-1: 2016 Table 2|
|» underFrequencyProtectionDelay|number|optional|Trip delay time in seconds. Default value 2 seconds according to AS4777-1: 2016 Table 2|
|» overFrequencyProtection|number|optional|Protective function limit. Default value 52 Hz according to AS4777-1: 2016 Table 2|
|» overFrequencyProtectionDelay|number|optional|Trip delay time in seconds. Default value 2 seconds according to AS4777-1: 2016 Table 2|
|» underVoltageProtection|number|optional|Protective function limit. Default value 180V according to AS4777-1: 2016 Table 2|
|» underVoltageProtectionDelay|number|optional|Trip delay time in seconds. Default value 2 seconds according to AS4777-1: 2016 Table 2|
|» overVoltageProtection|number|optional|Protective function limit. Default value 260 V according to AS4777-1: 2016 Table 2|
|» overVoltageProtectionDelay|number|optional|Trip delay time in seconds. Default value 2 seconds according to AS4777-1: 2016 Table 2|
|» sustainedOverVoltage|number|optional|Sustained over voltage|
|» sustainedOverVoltageDelay|number|optional|Trip delay time in seconds|
|» frequencyRateOfChange|number|optional|Rate of change of frequency trip point (Hz/s)|
|» voltageVectorShift|number|optional|Trip angle in degrees|
|» interTripScheme|string|optional|Description of the form of inter-trip (e.g. 'from local substation')|
|» neutralVoltageDisplacement|number|optional|Trip voltage|
|acConnections|[object]|optional|none|
|» connectionIdentifier|number|mandatory|AC Connection ID as defined in the DER register.  Does not align with CDR ID permanence standards|
|» count|[PositiveInteger](#common-field-types)|mandatory|Number of AC Connections in the group. For the suite of AC Connections to be considered as a group, all of the AC Connections included must have the same attributes|
|» equipmentType|string|optional|Indicates whether the DER device is connected via an inverter (and what category of inverter it is) or not (e.g. rotating machine)|
|» manufacturerName|string|optional|The name of the inverter manufacturer|
|» inverterSeries|string|optional|The inverter series|
|» inverterModelNumber|string|optional|The inverter model number|
|» commissioningDate|[DateString](#common-field-types)|optional|The date that the DER installation is commissioned|
|» installationStage|string|optional|Description of the installation stage|
|» status|string|optional|Code used to indicate the status of the Inverter. This will be used to identify if an inverter is active or inactive or decommissioned|
|» inverterDeviceCapacity|number|optional|The rated AC output power that is listed in the product specified by the manufacturer|
|» derDevices|[object]|optional|none|
|»» count|number|mandatory|Number of devices in the group of DER devices|
|»» manufacturer|string|optional|The name of the device manufacturer|
|»» modelNumber|string|optional|The model number of the device|
|»» status|string|optional|Code used to indicate the status of the device. This will be used to identify if an inverter is active or inactive or decommissioned|
|»» installationStage|number|optional|Description of the device installation stage|
|»» type|string|optional|Used to indicate the primary technology used in the DER device|
|»» subtype|string|optional|This field is also used to record for example the battery chemistry, or the type of PV panel. It is also used to record if a battery is contained in an electric vehicle connected in a vehicle-to-grid arrangement|
|»» nominalRatedCapacity|number|optional|Maximum output in kVA that is listed in the product specification by the manufacturer. This refers to the capacity of each unit within the device group|
|»» nominalStorageCapacity|number|optional|Maximum storage capacity in kVAh. This refers to the capacity of each storage module within the device group|

#### Enumerated Values

|Property|Value|
|---|---|
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

<h2 class="schema-toc" id="tocSlinks">Links</h2>

<a id="schemacdr-energy-apilinks"></a>

```json
{
  "self": "string"
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|self|[URIString](#common-field-types)|mandatory|Fully qualified link that generated the current response document|

<h2 class="schema-toc" id="tocSmeta">Meta</h2>

<a id="schemacdr-energy-apimeta"></a>

```json
{}

```

### Properties

*None*

<h2 class="schema-toc" id="tocSlinkspaginated">LinksPaginated</h2>

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

<h2 class="schema-toc" id="tocSmetapaginated">MetaPaginated</h2>

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

