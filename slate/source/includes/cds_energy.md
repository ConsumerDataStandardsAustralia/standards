

## Get Generic Plans

<a id="opIdlistPlans"></a>

> Code samples

```http
GET /energy/plans HTTP/1.1

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
|Version|**1**

<h3 id="get-generic-plans-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type|query|string|optional|Used to filter results on the type field.  Any one of the valid values for this field can be supplied plus 'ALL'.  If absent defaults to 'ALL'|
|fuelType|query|string|optional|Used to filter results on the fuelType field.  Any one of the valid values for this field can be supplied plus 'ALL'.  If absent defaults to 'ALL'|
|effective|query|string|optional|Allows for the filtering of plans based on whether the current time is within the period of time defined as effective by the effectiveFrom and effectiveTo fields. Valid values are ‘CURRENT’, ‘FUTURE’ and ‘ALL’. If absent defaults to 'CURRENT'|
|updated-since|query|[DateTimeString](#common-field-types)|optional|Only include plans that have been updated after the specified date and time.  If absent defaults to include all plans|
|brand|query|string|optional|Used to filter results on the brand field.  If absent defaults to include all plans|
|page|query|[PositiveInteger](#common-field-types)|optional|Page of results to request (standard pagination)|
|page-size|query|[PositiveInteger](#common-field-types)|optional|Page size to request.  Default is 25 (standard pagination)|
|x-v|header|string|mandatory|Version of the API end point requested by the client. Must be set to a positive integer. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If the value of [x-min-v](#request-headers) is equal to or higher than the value of [x-v](#request-headers) then the [x-min-v](#request-headers) header should be treated as absent. If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable. See [HTTP Headers](#request-headers)|
|x-min-v|header|string|optional|Minimum version of the API end point requested by the client. Must be set to a positive integer if provided. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable.|

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
          ],
          "distributors": [
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
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Invalid Page Size](#error-400-field-invalid-page-size)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li></ul>|[ResponseErrorListV2](#schemacdr-energy-apiresponseerrorlistv2)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|[ResponseErrorListV2](#schemacdr-energy-apiresponseerrorlistv2)|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[422 - Invalid Page](#error-422-field-invalid-page)</li></ul>|[ResponseErrorListV2](#schemacdr-energy-apiresponseerrorlistv2)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-v|string||The [version](#response-headers) of the API end point that the data holder has responded with.|

  
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

```

```javascript
var headers = {
  'Accept':'application/json',
  'x-v':'string',
  'x-min-v':'string'

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

Obtain detailed information on a single energy plan offered openly to the market.

Other Versions: [v1](includes/obsolete/get-generic-plan-detail-v1.html)

###Endpoint Version
|   |  |
|---|--|
|Version|**2**

<h3 id="get-generic-plan-detail-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|planId|path|string|mandatory|ID of the specific plan requested|
|x-v|header|string|mandatory|Version of the API end point requested by the client. Must be set to a positive integer. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If the value of [x-min-v](#request-headers) is equal to or higher than the value of [x-v](#request-headers) then the [x-min-v](#request-headers) header should be treated as absent. If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable. See [HTTP Headers](#request-headers)|
|x-min-v|header|string|optional|Minimum version of the API end point requested by the client. Must be set to a positive integer if provided. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable.|

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
      ],
      "distributors": [
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
      "timeZone": "LOCAL",
      "isFixed": true,
      "variation": "string",
      "onExpiryDescription": "string",
      "paymentOption": [
        "PAPER_BILL"
      ],
      "intrinsicGreenPower": {
        "greenPercentage": "string"
      },
      "controlledLoad": [
        {
          "displayName": "string",
          "rateBlockUType": "singleRate",
          "startDate": "string",
          "endDate": "string",
          "singleRate": {
            "displayName": "string",
            "description": "string",
            "dailySupplyCharge": "string",
            "rates": [
              {
                "unitPrice": "string",
                "measureUnit": "KWH",
                "volume": 0
              }
            ]
          },
          "timeOfUseRates": [
            {
              "displayName": "string",
              "description": "string",
              "dailySupplyCharge": "string",
              "rates": [
                {
                  "unitPrice": "string",
                  "measureUnit": "KWH",
                  "volume": 0
                }
              ],
              "timeOfUse": [
                {
                  "days": [
                    "SUN"
                  ],
                  "startTime": "string",
                  "endTime": "string",
                  "additionalInfo": "string",
                  "additionalInfoUri": "string"
                }
              ],
              "type": "PEAK"
            }
          ]
        }
      ],
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
          "startDate": "string",
          "endDate": "string",
          "scheme": "PREMIUM",
          "payerType": "GOVERNMENT",
          "tariffUType": "singleTariff",
          "singleTariff": {
            "rates": [
              {
                "unitPrice": "string",
                "measureUnit": "KWH",
                "volume": 0
              }
            ]
          },
          "timeVaryingTariffs": {
            "type": "PEAK",
            "rates": [
              {
                "unitPrice": "string",
                "measureUnit": "KWH",
                "volume": 0
              }
            ],
            "timeVariations": [
              {
                "days": [
                  "SUN"
                ],
                "startTime": "string",
                "endTime": "string"
              }
            ]
          }
        }
      ],
      "tariffPeriod": [
        {
          "type": "ENVIRONMENTAL",
          "displayName": "string",
          "startDate": "string",
          "endDate": "string",
          "dailySupplyCharges": "string",
          "timeZone": "LOCAL",
          "rateBlockUType": "singleRate",
          "singleRate": {
            "displayName": "string",
            "description": "string",
            "generalUnitPrice": "string",
            "rates": [
              {
                "unitPrice": "string",
                "measureUnit": "KWH",
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
                  "measureUnit": "KWH",
                  "volume": 0
                }
              ],
              "timeOfUse": [
                {
                  "days": [
                    "SUN"
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
              "measureUnit": "KWH",
              "startTime": "string",
              "endTime": "string",
              "days": [
                "SUN"
              ],
              "minDemand": "string",
              "maxDemand": "string",
              "measurementPeriod": "DAY",
              "chargePeriod": "DAY"
            }
          ]
        }
      ],
      "termType": "1_YEAR",
      "benefitPeriod": "string",
      "terms": "string",
      "meterTypes": [
        "string"
      ],
      "coolingOffDays": 0,
      "billFrequency": [
        "string"
      ]
    },
    "electricityContract": {
      "additionalFeeInformation": "string",
      "pricingModel": "SINGLE_RATE",
      "timeZone": "LOCAL",
      "isFixed": true,
      "variation": "string",
      "onExpiryDescription": "string",
      "paymentOption": [
        "PAPER_BILL"
      ],
      "intrinsicGreenPower": {
        "greenPercentage": "string"
      },
      "controlledLoad": [
        {
          "displayName": "string",
          "rateBlockUType": "singleRate",
          "startDate": "string",
          "endDate": "string",
          "singleRate": {
            "displayName": "string",
            "description": "string",
            "dailySupplyCharge": "string",
            "rates": [
              {
                "unitPrice": "string",
                "measureUnit": "KWH",
                "volume": 0
              }
            ]
          },
          "timeOfUseRates": [
            {
              "displayName": "string",
              "description": "string",
              "dailySupplyCharge": "string",
              "rates": [
                {
                  "unitPrice": "string",
                  "measureUnit": "KWH",
                  "volume": 0
                }
              ],
              "timeOfUse": [
                {
                  "days": [
                    "SUN"
                  ],
                  "startTime": "string",
                  "endTime": "string",
                  "additionalInfo": "string",
                  "additionalInfoUri": "string"
                }
              ],
              "type": "PEAK"
            }
          ]
        }
      ],
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
          "startDate": "string",
          "endDate": "string",
          "scheme": "PREMIUM",
          "payerType": "GOVERNMENT",
          "tariffUType": "singleTariff",
          "singleTariff": {
            "rates": [
              {
                "unitPrice": "string",
                "measureUnit": "KWH",
                "volume": 0
              }
            ]
          },
          "timeVaryingTariffs": {
            "type": "PEAK",
            "rates": [
              {
                "unitPrice": "string",
                "measureUnit": "KWH",
                "volume": 0
              }
            ],
            "timeVariations": [
              {
                "days": [
                  "SUN"
                ],
                "startTime": "string",
                "endTime": "string"
              }
            ]
          }
        }
      ],
      "tariffPeriod": [
        {
          "type": "ENVIRONMENTAL",
          "displayName": "string",
          "startDate": "string",
          "endDate": "string",
          "dailySupplyCharges": "string",
          "timeZone": "LOCAL",
          "rateBlockUType": "singleRate",
          "singleRate": {
            "displayName": "string",
            "description": "string",
            "generalUnitPrice": "string",
            "rates": [
              {
                "unitPrice": "string",
                "measureUnit": "KWH",
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
                  "measureUnit": "KWH",
                  "volume": 0
                }
              ],
              "timeOfUse": [
                {
                  "days": [
                    "SUN"
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
              "measureUnit": "KWH",
              "startTime": "string",
              "endTime": "string",
              "days": [
                "SUN"
              ],
              "minDemand": "string",
              "maxDemand": "string",
              "measurementPeriod": "DAY",
              "chargePeriod": "DAY"
            }
          ]
        }
      ],
      "termType": "1_YEAR",
      "benefitPeriod": "string",
      "terms": "string",
      "meterTypes": [
        "string"
      ],
      "coolingOffDays": 0,
      "billFrequency": [
        "string"
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
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[EnergyPlanResponseV2](#schemacdr-energy-apienergyplanresponsev2)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li></ul>|[ResponseErrorListV2](#schemacdr-energy-apiresponseerrorlistv2)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[404 - Invalid Resource](#error-404-resource-invalid)</li></ul>|[ResponseErrorListV2](#schemacdr-energy-apiresponseerrorlistv2)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|[ResponseErrorListV2](#schemacdr-energy-apiresponseerrorlistv2)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-v|string||The [version](#response-headers) of the API end point that the data holder has responded with.|

  
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
|Version|**1**

<h3 id="get-service-points-parameters">Parameters</h3>

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
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[EnergyServicePointListResponse](#schemacdr-energy-apienergyservicepointlistresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Invalid Page Size](#error-400-field-invalid-page-size)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li></ul>|[ResponseErrorListV2](#schemacdr-energy-apiresponseerrorlistv2)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|[ResponseErrorListV2](#schemacdr-energy-apiresponseerrorlistv2)|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[422 - Invalid Page](#error-422-field-invalid-page)</li></ul>|[ResponseErrorListV2](#schemacdr-energy-apiresponseerrorlistv2)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-v|string||The [version](#response-headers) of the API end point that the data holder has responded with.|
|200|x-fapi-interaction-id|string||An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|400|x-fapi-interaction-id|string||An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|406|x-fapi-interaction-id|string||An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|422|x-fapi-interaction-id|string||An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|

  
    
      <aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
<a href="#authorisation-scopes">energy:electricity.servicepoints.basic:read</a>
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

Obtain detailed standing information for a specific service point that is owned by the customer that has authorised the current session

###Endpoint Version
|   |  |
|---|--|
|Version|**1**

<h3 id="get-service-point-detail-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|servicePointId|path|string|mandatory|ID of the specific service point requested.  This is a tokenised ID previous obtained from the Service Point List Data end point.  Note that it is not a nationalMeteringId.|
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

<h3 id="get-service-point-detail-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[EnergyServicePointDetailResponse](#schemacdr-energy-apienergyservicepointdetailresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li></ul>|[ResponseErrorListV2](#schemacdr-energy-apiresponseerrorlistv2)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[404 - Unavailable Service Point](#error-404-unavailable-service-point)</li><li>[404 - Invalid Service Point](#error-404-invalid-service-point)</li></ul>|[ResponseErrorListV2](#schemacdr-energy-apiresponseerrorlistv2)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|[ResponseErrorListV2](#schemacdr-energy-apiresponseerrorlistv2)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-v|string||The [version](#response-headers) of the API end point that the data holder has responded with.|
|200|x-fapi-interaction-id|string||An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|400|x-fapi-interaction-id|string||An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|404|x-fapi-interaction-id|string||An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|406|x-fapi-interaction-id|string||An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|

  
    
      <aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
<a href="#authorisation-scopes">energy:electricity.servicepoints.detail:read</a>
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
|Version|**1**

<h3 id="get-usage-for-service-point-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|servicePointId|path|string|mandatory|ID of the specific service point requested.  This is a tokenised ID previous obtained from the Service Point List Data end point.  Note that it is not a nationalMeteringId.|
|oldest-date|query|[DateString](#common-field-types)|optional|Constrain the request to records with effective date at or after this date. If absent defaults to newest-date minus 24 months.  Format is aligned to DateString common type|
|newest-date|query|[DateString](#common-field-types)|optional|Constrain the request to records with effective date at or before this date.  If absent defaults to current date.  Format is aligned to DateString common type|
|interval-reads|query|string|optional|Type of interval reads. Any one of the valid values for this field can be supplied. If absent defaults to NONE|
|page|query|[PositiveInteger](#common-field-types)|optional|Page of results to request (standard pagination)|
|page-size|query|[PositiveInteger](#common-field-types)|optional|Page size to request.  Default is 25 (standard pagination)|
|x-v|header|string|mandatory|Version of the API end point requested by the client. Must be set to a positive integer. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If the value of [x-min-v](#request-headers) is equal to or higher than the value of [x-v](#request-headers) then the [x-min-v](#request-headers) header should be treated as absent. If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable. See [HTTP Headers](#request-headers)|
|x-min-v|header|string|optional|Minimum version of the API end point requested by the client. Must be set to a positive integer if provided. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable.|
|x-fapi-interaction-id|header|string|optional|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|x-fapi-auth-date|header|string|conditional|The time when the customer last logged in to the Data Recipient Software Product as described in **[[FAPI-R-Draft]](#nref-FAPI-R-Draft)**.  Required for all resource calls (customer present and unattended). Not required for unauthenticated calls.|
|x-fapi-customer-ip-address|header|string|optional|The customer's original IP address if the customer is currently logged in to the data recipient. The presence of this header indicates that the API is being called in a customer present context. Not to be included for unauthenticated calls.|
|x-cds-client-headers|header|[Base64](#common-field-types)|conditional|The customer's original standard http headers [Base64](#common-field-types) encoded, including the original User Agent header, if the customer is currently logged in to the data recipient. Mandatory for customer present calls.  Not required for unattended or unauthenticated calls.|

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
          "readQualities": [
            {
              "startInterval": 0,
              "endInterval": 0,
              "quality": "SUBSTITUTE"
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
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[EnergyUsageListResponse](#schemacdr-energy-apienergyusagelistresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Invalid Page Size](#error-400-field-invalid-page-size)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li></ul>|[ResponseErrorListV2](#schemacdr-energy-apiresponseerrorlistv2)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[404 - Unavailable Service Point](#error-404-unavailable-service-point)</li><li>[404 - Invalid Service Point](#error-404-invalid-service-point)</li></ul>|[ResponseErrorListV2](#schemacdr-energy-apiresponseerrorlistv2)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|[ResponseErrorListV2](#schemacdr-energy-apiresponseerrorlistv2)|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[422 - Invalid Page](#error-422-field-invalid-page)</li></ul>|[ResponseErrorListV2](#schemacdr-energy-apiresponseerrorlistv2)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-v|string||The [version](#response-headers) of the API end point that the data holder has responded with.|
|200|x-fapi-interaction-id|string||An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|400|x-fapi-interaction-id|string||An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|404|x-fapi-interaction-id|string||An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|406|x-fapi-interaction-id|string||An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|422|x-fapi-interaction-id|string||An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|

  
    
      <aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
<a href="#authorisation-scopes">energy:electricity.usage:read</a>
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
|Version|**1**

<h3 id="get-bulk-usage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|interval-reads|query|string|optional|Type of interval reads. Any one of the valid values for this field can be supplied. If absent defaults to NONE|
|oldest-date|query|[DateString](#common-field-types)|optional|Constrain the request to records with effective date at or after this date. If absent defaults to newest-date minus 24 months.  Format is aligned to DateString common type|
|newest-date|query|[DateString](#common-field-types)|optional|Constrain the request to records with effective date at or before this date.  If absent defaults to current date.  Format is aligned to DateString common type|
|page|query|[PositiveInteger](#common-field-types)|optional|Page of results to request (standard pagination)|
|page-size|query|[PositiveInteger](#common-field-types)|optional|Page size to request.  Default is 25 (standard pagination)|
|x-v|header|string|mandatory|Version of the API end point requested by the client. Must be set to a positive integer. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If the value of [x-min-v](#request-headers) is equal to or higher than the value of [x-v](#request-headers) then the [x-min-v](#request-headers) header should be treated as absent. If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable. See [HTTP Headers](#request-headers)|
|x-min-v|header|string|optional|Minimum version of the API end point requested by the client. Must be set to a positive integer if provided. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable.|
|x-fapi-interaction-id|header|string|optional|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|x-fapi-auth-date|header|string|conditional|The time when the customer last logged in to the Data Recipient Software Product as described in **[[FAPI-R-Draft]](#nref-FAPI-R-Draft)**.  Required for all resource calls (customer present and unattended). Not required for unauthenticated calls.|
|x-fapi-customer-ip-address|header|string|optional|The customer's original IP address if the customer is currently logged in to the data recipient. The presence of this header indicates that the API is being called in a customer present context. Not to be included for unauthenticated calls.|
|x-cds-client-headers|header|[Base64](#common-field-types)|conditional|The customer's original standard http headers [Base64](#common-field-types) encoded, including the original User Agent header, if the customer is currently logged in to the data recipient. Mandatory for customer present calls.  Not required for unattended or unauthenticated calls.|

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
          "readQualities": [
            {
              "startInterval": 0,
              "endInterval": 0,
              "quality": "SUBSTITUTE"
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
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[EnergyUsageListResponse](#schemacdr-energy-apienergyusagelistresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Invalid Page Size](#error-400-field-invalid-page-size)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li></ul>|[ResponseErrorListV2](#schemacdr-energy-apiresponseerrorlistv2)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|[ResponseErrorListV2](#schemacdr-energy-apiresponseerrorlistv2)|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[422 - Invalid Page](#error-422-field-invalid-page)</li></ul>|[ResponseErrorListV2](#schemacdr-energy-apiresponseerrorlistv2)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-v|string||The [version](#response-headers) of the API end point that the data holder has responded with.|
|200|x-fapi-interaction-id|string||An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|400|x-fapi-interaction-id|string||An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|406|x-fapi-interaction-id|string||An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|422|x-fapi-interaction-id|string||An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|

  
    
      <aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
<a href="#authorisation-scopes">energy:electricity.usage:read</a>
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
|Version|**1**

<h3 id="get-usage-for-specific-service-points-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|oldest-date|query|[DateString](#common-field-types)|optional|Constrain the request to records with effective date at or after this date. If absent defaults to newest-date minus 24 months.  Format is aligned to DateString common type|
|newest-date|query|[DateString](#common-field-types)|optional|Constrain the request to records with effective date at or before this date.  If absent defaults to current date.  Format is aligned to DateString common type|
|interval-reads|query|string|optional|Type of interval reads. Any one of the valid values for this field can be supplied. If absent defaults to NONE|
|page|query|[PositiveInteger](#common-field-types)|optional|Page of results to request (standard pagination)|
|page-size|query|[PositiveInteger](#common-field-types)|optional|Page size to request.  Default is 25 (standard pagination)|
|x-v|header|string|mandatory|Version of the API end point requested by the client. Must be set to a positive integer. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If the value of [x-min-v](#request-headers) is equal to or higher than the value of [x-v](#request-headers) then the [x-min-v](#request-headers) header should be treated as absent. If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable. See [HTTP Headers](#request-headers)|
|x-min-v|header|string|optional|Minimum version of the API end point requested by the client. Must be set to a positive integer if provided. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable.|
|x-fapi-interaction-id|header|string|optional|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|x-fapi-auth-date|header|string|conditional|The time when the customer last logged in to the Data Recipient Software Product as described in **[[FAPI-R-Draft]](#nref-FAPI-R-Draft)**.  Required for all resource calls (customer present and unattended). Not required for unauthenticated calls.|
|x-fapi-customer-ip-address|header|string|optional|The customer's original IP address if the customer is currently logged in to the data recipient. The presence of this header indicates that the API is being called in a customer present context. Not to be included for unauthenticated calls.|
|x-cds-client-headers|header|[Base64](#common-field-types)|conditional|The customer's original standard http headers [Base64](#common-field-types) encoded, including the original User Agent header, if the customer is currently logged in to the data recipient. Mandatory for customer present calls.  Not required for unattended or unauthenticated calls.|
|body|body|[servicePointIdList](#schemacdr-energy-apiservicepointidlist)|mandatory|Request payload containing list of specific Service Points to obtain data for|
|» data|body|object|mandatory|none|
|»» servicePointIds|body|[string]|mandatory|Array of specific servicePointIds to obtain data for|
|» meta|body|[Meta](#schemacdr-energy-apimeta)|optional|none|

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
          "readQualities": [
            {
              "startInterval": 0,
              "endInterval": 0,
              "quality": "SUBSTITUTE"
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
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[EnergyUsageListResponse](#schemacdr-energy-apienergyusagelistresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Invalid Page Size](#error-400-field-invalid-page-size)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li></ul>|[ResponseErrorListV2](#schemacdr-energy-apiresponseerrorlistv2)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|[ResponseErrorListV2](#schemacdr-energy-apiresponseerrorlistv2)|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[422 - Invalid Page](#error-422-field-invalid-page)</li><li>[422 - Unavailable Service Point](#error-422-unavailable-service-point)</li><li>[422 - Invalid Service Point](#error-422-invalid-service-point)</li></ul>|[ResponseErrorListV2](#schemacdr-energy-apiresponseerrorlistv2)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-v|string||The [version](#response-headers) of the API end point that the data holder has responded with.|
|200|x-fapi-interaction-id|string||An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|400|x-fapi-interaction-id|string||An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|406|x-fapi-interaction-id|string||An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|422|x-fapi-interaction-id|string||An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|

  
    
      <aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
<a href="#authorisation-scopes">energy:electricity.usage:read</a>
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
|Version|**1**

<h3 id="get-der-for-service-point-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|servicePointId|path|string|mandatory|ID of the specific service point requested.  This is a tokenised ID previous obtained from the Service Point List Data end point.  Note that it is not a nationalMeteringId.|
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

<h3 id="get-der-for-service-point-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[EnergyDerDetailResponse](#schemacdr-energy-apienergyderdetailresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li></ul>|[ResponseErrorListV2](#schemacdr-energy-apiresponseerrorlistv2)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[404 - Unavailable Service Point](#error-404-unavailable-service-point)</li><li>[404 - Invalid Service Point](#error-404-invalid-service-point)</li></ul>|[ResponseErrorListV2](#schemacdr-energy-apiresponseerrorlistv2)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|[ResponseErrorListV2](#schemacdr-energy-apiresponseerrorlistv2)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-v|string||The [version](#response-headers) of the API end point that the data holder has responded with.|
|200|x-fapi-interaction-id|string||An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|400|x-fapi-interaction-id|string||An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|404|x-fapi-interaction-id|string||An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|406|x-fapi-interaction-id|string||An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|

  
    
      <aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
<a href="#authorisation-scopes">energy:electricity.der:read</a>
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
|Version|**1**

<h3 id="get-bulk-der-parameters">Parameters</h3>

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

<h3 id="get-bulk-der-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[EnergyDerListResponse](#schemacdr-energy-apienergyderlistresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Invalid Page Size](#error-400-field-invalid-page-size)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li></ul>|[ResponseErrorListV2](#schemacdr-energy-apiresponseerrorlistv2)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|[ResponseErrorListV2](#schemacdr-energy-apiresponseerrorlistv2)|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[422 - Invalid Page](#error-422-field-invalid-page)</li></ul>|[ResponseErrorListV2](#schemacdr-energy-apiresponseerrorlistv2)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-v|string||The [version](#response-headers) of the API end point that the data holder has responded with.|
|200|x-fapi-interaction-id|string||An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|400|x-fapi-interaction-id|string||An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|406|x-fapi-interaction-id|string||An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|422|x-fapi-interaction-id|string||An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|

  
    
      <aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
<a href="#authorisation-scopes">energy:electricity.der:read</a>
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
|Version|**1**

<h3 id="get-der-for-specific-service-points-parameters">Parameters</h3>

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
|body|body|[servicePointIdList](#schemacdr-energy-apiservicepointidlist)|mandatory|Request payload containing list of specific Service Points to obtain data for|
|» data|body|object|mandatory|none|
|»» servicePointIds|body|[string]|mandatory|Array of specific servicePointIds to obtain data for|
|» meta|body|[Meta](#schemacdr-energy-apimeta)|optional|none|

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

<h3 id="get-der-for-specific-service-points-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[EnergyDerListResponse](#schemacdr-energy-apienergyderlistresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Invalid Page Size](#error-400-field-invalid-page-size)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li></ul>|[ResponseErrorListV2](#schemacdr-energy-apiresponseerrorlistv2)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|[ResponseErrorListV2](#schemacdr-energy-apiresponseerrorlistv2)|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[422 - Invalid Page](#error-422-field-invalid-page)</li><li>[422 - Unavailable Service Point](#error-422-unavailable-service-point)</li><li>[422 - Invalid Service Point](#error-422-invalid-service-point)</li></ul>|[ResponseErrorListV2](#schemacdr-energy-apiresponseerrorlistv2)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-v|string||The [version](#response-headers) of the API end point that the data holder has responded with.|
|200|x-fapi-interaction-id|string||An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|400|x-fapi-interaction-id|string||An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|406|x-fapi-interaction-id|string||An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|422|x-fapi-interaction-id|string||An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|

  
    
      <aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
<a href="#authorisation-scopes">energy:electricity.der:read</a>
</aside>

    
  

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

Other Versions: [v1](includes/obsolete/get-energy-accounts-v1.html)

###Endpoint Version
|   |  |
|---|--|
|Version|**2**

<h3 id="get-energy-accounts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|open-status|query|string|optional|Used to filter results according to open/closed status. Values can be OPEN, CLOSED or ALL. If absent then ALL is assumed|
|page|query|[PositiveInteger](#common-field-types)|optional|Page of results to request (standard pagination)|
|page-size|query|[PositiveInteger](#common-field-types)|optional|Page size to request.  Default is 25 (standard pagination)|
|x-v|header|string|mandatory|Version of the API end point requested by the client. Must be set to a positive integer. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If the value of [x-min-v](#request-headers) is equal to or higher than the value of [x-v](#request-headers) then the [x-min-v](#request-headers) header should be treated as absent. If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable. See [HTTP Headers](#request-headers)|
|x-min-v|header|string|optional|Minimum version of the API end point requested by the client. Must be set to a positive integer if provided. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable.|
|x-fapi-interaction-id|header|string|optional|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|x-fapi-auth-date|header|string|conditional|The time when the customer last logged in to the Data Recipient Software Product as described in **[[FAPI-R-Draft]](#nref-FAPI-R-Draft)**.  Required for all resource calls (customer present and unattended). Not required for unauthenticated calls.|
|x-fapi-customer-ip-address|header|string|optional|The customer's original IP address if the customer is currently logged in to the data recipient. The presence of this header indicates that the API is being called in a customer present context. Not to be included for unauthenticated calls.|
|x-cds-client-headers|header|[Base64](#common-field-types)|conditional|The customer's original standard http headers [Base64](#common-field-types) encoded, including the original User Agent header, if the customer is currently logged in to the data recipient. Mandatory for customer present calls.  Not required for unattended or unauthenticated calls.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|open-status|ALL|
|open-status|CLOSED|
|open-status|OPEN|

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
        "openStatus": "CLOSED",
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
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[EnergyAccountListResponseV2](#schemacdr-energy-apienergyaccountlistresponsev2)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Invalid Page Size](#error-400-field-invalid-page-size)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li></ul>|[ResponseErrorListV2](#schemacdr-energy-apiresponseerrorlistv2)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|[ResponseErrorListV2](#schemacdr-energy-apiresponseerrorlistv2)|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[422 - Invalid Page](#error-422-field-invalid-page)</li></ul>|[ResponseErrorListV2](#schemacdr-energy-apiresponseerrorlistv2)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-v|string||The [version](#response-headers) of the API end point that the data holder has responded with.|
|200|x-fapi-interaction-id|string||An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|400|x-fapi-interaction-id|string||An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|406|x-fapi-interaction-id|string||An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|422|x-fapi-interaction-id|string||An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|

  
    
      <aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
<a href="#authorisation-scopes">energy:accounts.basic:read</a>
</aside>

    
  

## Get Energy Account Detail

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

Other Versions: [v1](includes/obsolete/get-energy-account-detail-v1.html) [v2](includes/obsolete/get-energy-account-detail-v2.html)

###Endpoint Version
|   |  |
|---|--|
|Version|**3**

<h3 id="get-energy-account-detail-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|mandatory|ID of a specific account to obtain data for.  This is a tokenised ID previous obtained from the Account List end point.|
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
    "accountId": "string",
    "accountNumber": "string",
    "displayName": "string",
    "openStatus": "CLOSED",
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
        },
        "planDetail": {
          "fuelType": "ELECTRICITY",
          "isContingentPlan": false,
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
            "timeZone": "LOCAL",
            "isFixed": true,
            "variation": "string",
            "onExpiryDescription": "string",
            "paymentOption": [
              "PAPER_BILL"
            ],
            "intrinsicGreenPower": {
              "greenPercentage": "string"
            },
            "controlledLoad": [
              {
                "displayName": "string",
                "rateBlockUType": "singleRate",
                "startDate": "string",
                "endDate": "string",
                "singleRate": {
                  "displayName": "string",
                  "description": "string",
                  "dailySupplyCharge": "string",
                  "rates": [
                    {}
                  ]
                },
                "timeOfUseRates": [
                  {
                    "displayName": "string",
                    "description": "string",
                    "dailySupplyCharge": "string",
                    "rates": [],
                    "timeOfUse": [],
                    "type": "PEAK"
                  }
                ]
              }
            ],
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
                "startDate": "string",
                "endDate": "string",
                "scheme": "PREMIUM",
                "payerType": "GOVERNMENT",
                "tariffUType": "singleTariff",
                "singleTariff": {
                  "rates": [
                    {}
                  ]
                },
                "timeVaryingTariffs": {
                  "type": "PEAK",
                  "rates": [
                    {}
                  ],
                  "timeVariations": [
                    {}
                  ]
                }
              }
            ],
            "tariffPeriod": [
              {
                "type": "ENVIRONMENTAL",
                "displayName": "string",
                "startDate": "string",
                "endDate": "string",
                "dailySupplyCharges": "string",
                "timeZone": "LOCAL",
                "rateBlockUType": "singleRate",
                "singleRate": {
                  "displayName": "string",
                  "description": "string",
                  "generalUnitPrice": "string",
                  "rates": [
                    {}
                  ],
                  "period": "string"
                },
                "timeOfUseRates": [
                  {
                    "displayName": "string",
                    "description": "string",
                    "rates": [],
                    "timeOfUse": [],
                    "type": "PEAK"
                  }
                ],
                "demandCharges": [
                  {
                    "displayName": "string",
                    "description": "string",
                    "amount": "string",
                    "measureUnit": "KWH",
                    "startTime": "string",
                    "endTime": "string",
                    "days": [],
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
            "timeZone": "LOCAL",
            "isFixed": true,
            "variation": "string",
            "onExpiryDescription": "string",
            "paymentOption": [
              "PAPER_BILL"
            ],
            "intrinsicGreenPower": {
              "greenPercentage": "string"
            },
            "controlledLoad": [
              {
                "displayName": "string",
                "rateBlockUType": "singleRate",
                "startDate": "string",
                "endDate": "string",
                "singleRate": {
                  "displayName": "string",
                  "description": "string",
                  "dailySupplyCharge": "string",
                  "rates": [
                    {}
                  ]
                },
                "timeOfUseRates": [
                  {
                    "displayName": "string",
                    "description": "string",
                    "dailySupplyCharge": "string",
                    "rates": [],
                    "timeOfUse": [],
                    "type": "PEAK"
                  }
                ]
              }
            ],
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
                "startDate": "string",
                "endDate": "string",
                "scheme": "PREMIUM",
                "payerType": "GOVERNMENT",
                "tariffUType": "singleTariff",
                "singleTariff": {
                  "rates": [
                    {}
                  ]
                },
                "timeVaryingTariffs": {
                  "type": "PEAK",
                  "rates": [
                    {}
                  ],
                  "timeVariations": [
                    {}
                  ]
                }
              }
            ],
            "tariffPeriod": [
              {
                "type": "ENVIRONMENTAL",
                "displayName": "string",
                "startDate": "string",
                "endDate": "string",
                "dailySupplyCharges": "string",
                "timeZone": "LOCAL",
                "rateBlockUType": "singleRate",
                "singleRate": {
                  "displayName": "string",
                  "description": "string",
                  "generalUnitPrice": "string",
                  "rates": [
                    {}
                  ],
                  "period": "string"
                },
                "timeOfUseRates": [
                  {
                    "displayName": "string",
                    "description": "string",
                    "rates": [],
                    "timeOfUse": [],
                    "type": "PEAK"
                  }
                ],
                "demandCharges": [
                  {
                    "displayName": "string",
                    "description": "string",
                    "amount": "string",
                    "measureUnit": "KWH",
                    "startTime": "string",
                    "endTime": "string",
                    "days": [],
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
      }
    ]
  },
  "links": {
    "self": "string"
  },
  "meta": {}
}
```

<h3 id="get-energy-account-detail-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[EnergyAccountDetailResponseV3](#schemacdr-energy-apienergyaccountdetailresponsev3)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li></ul>|[ResponseErrorListV2](#schemacdr-energy-apiresponseerrorlistv2)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[404 - Unavailable Energy Account](#error-404-unavailable-energy-account)</li><li>[404 - Invalid Energy Account](#error-404-invalid-energy-account)</li></ul>|[ResponseErrorListV2](#schemacdr-energy-apiresponseerrorlistv2)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|[ResponseErrorListV2](#schemacdr-energy-apiresponseerrorlistv2)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-v|string||The [version](#response-headers) of the API end point that the data holder has responded with.|
|200|x-fapi-interaction-id|string||An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|400|x-fapi-interaction-id|string||An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|404|x-fapi-interaction-id|string||An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|406|x-fapi-interaction-id|string||An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|

  
    
      <aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
<a href="#authorisation-scopes">energy:accounts.detail:read</a>
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

Obtain the agreed payment schedule and details, if any, for a specific energy account. 

Some general notes about this end point:

 <ul><li>This API describes how the consumer has elected to pay for their account</li><li>Payments initiated by the consumer are classified as manual payments. The billing frequency is captured for manual payments. The consumer may choose to pay on a different schedule/frequency. The payment method and frequency is not captured for manual payments</li><li>Payments that can be initiated by the retailer, based on a consumer's preferences and permission, include payments based on a direct debit, card debit or digital wallet setup. Each of these requires a payment frequency to be provided along with other relevant fields</li><li>Information about payment plans related to debt repayments or arrangements due to hardship is not captured within this API</li></ul>

###Endpoint Version
|   |  |
|---|--|
|Version|**1**

<h3 id="get-agreed-payment-schedule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|mandatory|ID of a specific account to obtain data for.  This is a tokenised ID previous obtained from the Account List end point.|
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
    "paymentSchedules": [
      {
        "amount": "string",
        "paymentScheduleUType": "cardDebit",
        "cardDebit": {
          "cardScheme": "VISA",
          "paymentFrequency": "string",
          "calculationType": "STATIC"
        },
        "directDebit": {
          "isTokenised": true,
          "bsb": "string",
          "accountNumber": "string",
          "paymentFrequency": "string",
          "calculationType": "STATIC"
        },
        "digitalWallet": {
          "name": "string",
          "identifier": "string",
          "type": "EMAIL",
          "provider": "PAYPAL_AU",
          "paymentFrequency": "string",
          "calculationType": "STATIC"
        },
        "manualPayment": {
          "billFrequency": "string"
        }
      }
    ]
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
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[EnergyPaymentScheduleResponse](#schemacdr-energy-apienergypaymentscheduleresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li></ul>|[ResponseErrorListV2](#schemacdr-energy-apiresponseerrorlistv2)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[404 - Unavailable Energy Account](#error-404-unavailable-energy-account)</li><li>[404 - Invalid Energy Account](#error-404-invalid-energy-account)</li></ul>|[ResponseErrorListV2](#schemacdr-energy-apiresponseerrorlistv2)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|[ResponseErrorListV2](#schemacdr-energy-apiresponseerrorlistv2)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-v|string||The [version](#response-headers) of the API end point that the data holder has responded with.|
|200|x-fapi-interaction-id|string||An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|400|x-fapi-interaction-id|string||An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|404|x-fapi-interaction-id|string||An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|406|x-fapi-interaction-id|string||An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|

  
    
      <aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
<a href="#authorisation-scopes">energy:accounts.paymentschedule:read</a>
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

Obtain the details of any concessions or arrangements applied to a specific energy account

###Endpoint Version
|   |  |
|---|--|
|Version|**1**

<h3 id="get-concessions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|mandatory|ID of a specific account to obtain data for.  This is a tokenised ID previous obtained from the Account List end point.|
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
    "concessions": [
      {
        "type": "FIXED_AMOUNT",
        "displayName": "string",
        "additionalInfo": "string",
        "additionalInfoUri": "string",
        "startDate": "string",
        "endDate": "string",
        "discountFrequency": "string",
        "amount": "string",
        "percentage": "string",
        "appliedTo": [
          "INVOICE"
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

<h3 id="get-concessions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[EnergyConcessionsResponse](#schemacdr-energy-apienergyconcessionsresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li></ul>|[ResponseErrorListV2](#schemacdr-energy-apiresponseerrorlistv2)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[404 - Unavailable Energy Account](#error-404-unavailable-energy-account)</li><li>[404 - Invalid Energy Account](#error-404-invalid-energy-account)</li></ul>|[ResponseErrorListV2](#schemacdr-energy-apiresponseerrorlistv2)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|[ResponseErrorListV2](#schemacdr-energy-apiresponseerrorlistv2)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-v|string||The [version](#response-headers) of the API end point that the data holder has responded with.|
|200|x-fapi-interaction-id|string||An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|400|x-fapi-interaction-id|string||An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|404|x-fapi-interaction-id|string||An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|406|x-fapi-interaction-id|string||An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|

  
    
      <aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
<a href="#authorisation-scopes">energy:accounts.concessions:read</a>
</aside>

    
  

## Get Balance For Energy Account

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
|Version|**1**

<h3 id="get-balance-for-energy-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|mandatory|ID of a specific account to obtain data for.  This is a tokenised ID previous obtained from the Account List end point.|
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
    "balance": "string"
  },
  "links": {
    "self": "string"
  },
  "meta": {}
}
```

<h3 id="get-balance-for-energy-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[EnergyBalanceResponse](#schemacdr-energy-apienergybalanceresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li></ul>|[ResponseErrorListV2](#schemacdr-energy-apiresponseerrorlistv2)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[404 - Unavailable Energy Account](#error-404-unavailable-energy-account)</li><li>[404 - Invalid Energy Account](#error-404-invalid-energy-account)</li></ul>|[ResponseErrorListV2](#schemacdr-energy-apiresponseerrorlistv2)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|[ResponseErrorListV2](#schemacdr-energy-apiresponseerrorlistv2)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-v|string||The [version](#response-headers) of the API end point that the data holder has responded with.|
|200|x-fapi-interaction-id|string||An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|400|x-fapi-interaction-id|string||An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|404|x-fapi-interaction-id|string||An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|406|x-fapi-interaction-id|string||An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|

  
    
      <aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
<a href="#authorisation-scopes">energy:billing:read</a>
</aside>

    
  

## Get Bulk Balances for Energy

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
|Version|**1**

<h3 id="get-bulk-balances-for-energy-parameters">Parameters</h3>

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

<h3 id="get-bulk-balances-for-energy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[EnergyBalanceListResponse](#schemacdr-energy-apienergybalancelistresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Invalid Page Size](#error-400-field-invalid-page-size)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li></ul>|[ResponseErrorListV2](#schemacdr-energy-apiresponseerrorlistv2)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|[ResponseErrorListV2](#schemacdr-energy-apiresponseerrorlistv2)|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[422 - Invalid Page](#error-422-field-invalid-page)</li></ul>|[ResponseErrorListV2](#schemacdr-energy-apiresponseerrorlistv2)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-v|string||The [version](#response-headers) of the API end point that the data holder has responded with.|
|200|x-fapi-interaction-id|string||An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|400|x-fapi-interaction-id|string||An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|406|x-fapi-interaction-id|string||An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|422|x-fapi-interaction-id|string||An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|

  
    
      <aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
<a href="#authorisation-scopes">energy:billing:read</a>
</aside>

    
  

## Get Balances For Specific Energy Accounts

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
|Version|**1**

<h3 id="get-balances-for-specific-energy-accounts-parameters">Parameters</h3>

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
|body|body|[accountIdList](#schemacdr-energy-apiaccountidlist)|mandatory|Request payload containing list of specific Accounts to obtain data for|
|» data|body|object|mandatory|none|
|»» accountIds|body|[string]|mandatory|Array of specific accountIds to obtain data for|
|» meta|body|[Meta](#schemacdr-energy-apimeta)|optional|none|

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

<h3 id="get-balances-for-specific-energy-accounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[EnergyBalanceListResponse](#schemacdr-energy-apienergybalancelistresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Invalid Page Size](#error-400-field-invalid-page-size)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li></ul>|[ResponseErrorListV2](#schemacdr-energy-apiresponseerrorlistv2)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|[ResponseErrorListV2](#schemacdr-energy-apiresponseerrorlistv2)|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[422 - Invalid Page](#error-422-field-invalid-page)</li><li>[422 - Unavailable Energy Account](#error-422-unavailable-energy-account)</li><li>[422 - Invalid Energy Account](#error-422-invalid-energy-account)</li></ul>|[ResponseErrorListV2](#schemacdr-energy-apiresponseerrorlistv2)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-v|string||The [version](#response-headers) of the API end point that the data holder has responded with.|
|200|x-fapi-interaction-id|string||An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|400|x-fapi-interaction-id|string||An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|406|x-fapi-interaction-id|string||An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|422|x-fapi-interaction-id|string||An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|

  
    
      <aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
<a href="#authorisation-scopes">energy:billing:read</a>
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
|Version|**1**

<h3 id="get-invoices-for-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|mandatory|ID of a specific account to obtain data for.  This is a tokenised ID previous obtained from the Account List end point.|
|newest-date|query|[DateString](#common-field-types)|optional|Constrain the request to records with issue date at or before this date.  If absent defaults to current date.  Format is aligned to DateString common type|
|oldest-date|query|[DateString](#common-field-types)|optional|Constrain the request to records with issue date at or after this date. If absent defaults to newest-date minus 24 months.  Format is aligned to DateString common type|
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
        "gstAmount": "string",
        "payOnTimeDiscount": {
          "discountAmount": "string",
          "gstAmount": "string",
          "date": "string"
        },
        "balanceAtIssue": "string",
        "servicePoints": [
          "string"
        ],
        "gas": {
          "totalUsageCharges": "string",
          "totalGenerationCredits": "string",
          "totalOnceOffCharges": "string",
          "totalOnceOffDiscounts": "string",
          "otherCharges": [
            {
              "type": "ENVIRONMENTAL",
              "amount": "string",
              "description": "string"
            }
          ],
          "totalGst": "string"
        },
        "electricity": {
          "totalUsageCharges": "string",
          "totalGenerationCredits": "string",
          "totalOnceOffCharges": "string",
          "totalOnceOffDiscounts": "string",
          "otherCharges": [
            {
              "type": "ENVIRONMENTAL",
              "amount": "string",
              "description": "string"
            }
          ],
          "totalGst": "string"
        },
        "accountCharges": {
          "totalCharges": "string",
          "totalDiscounts": "string",
          "totalGst": "string"
        },
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
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[EnergyInvoiceListResponse](#schemacdr-energy-apienergyinvoicelistresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Invalid Page Size](#error-400-field-invalid-page-size)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li></ul>|[ResponseErrorListV2](#schemacdr-energy-apiresponseerrorlistv2)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[404 - Unavailable Energy Account](#error-404-unavailable-energy-account)</li><li>[404 - Invalid Energy Account](#error-404-invalid-energy-account)</li></ul>|[ResponseErrorListV2](#schemacdr-energy-apiresponseerrorlistv2)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|[ResponseErrorListV2](#schemacdr-energy-apiresponseerrorlistv2)|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[422 - Invalid Page](#error-422-field-invalid-page)</li></ul>|[ResponseErrorListV2](#schemacdr-energy-apiresponseerrorlistv2)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-v|string||The [version](#response-headers) of the API end point that the data holder has responded with.|
|200|x-fapi-interaction-id|string||An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|400|x-fapi-interaction-id|string||An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|404|x-fapi-interaction-id|string||An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|406|x-fapi-interaction-id|string||An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|422|x-fapi-interaction-id|string||An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|

  
    
      <aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
<a href="#authorisation-scopes">energy:billing:read</a>
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
|Version|**1**

<h3 id="get-bulk-invoices-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|newest-date|query|[DateString](#common-field-types)|optional|Constrain the request to records with issue date at or before this date.  If absent defaults to current date.  Format is aligned to DateString common type|
|oldest-date|query|[DateString](#common-field-types)|optional|Constrain the request to records with issue date at or after this date. If absent defaults to newest-date minus 24 months.  Format is aligned to DateString common type|
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
        "gstAmount": "string",
        "payOnTimeDiscount": {
          "discountAmount": "string",
          "gstAmount": "string",
          "date": "string"
        },
        "balanceAtIssue": "string",
        "servicePoints": [
          "string"
        ],
        "gas": {
          "totalUsageCharges": "string",
          "totalGenerationCredits": "string",
          "totalOnceOffCharges": "string",
          "totalOnceOffDiscounts": "string",
          "otherCharges": [
            {
              "type": "ENVIRONMENTAL",
              "amount": "string",
              "description": "string"
            }
          ],
          "totalGst": "string"
        },
        "electricity": {
          "totalUsageCharges": "string",
          "totalGenerationCredits": "string",
          "totalOnceOffCharges": "string",
          "totalOnceOffDiscounts": "string",
          "otherCharges": [
            {
              "type": "ENVIRONMENTAL",
              "amount": "string",
              "description": "string"
            }
          ],
          "totalGst": "string"
        },
        "accountCharges": {
          "totalCharges": "string",
          "totalDiscounts": "string",
          "totalGst": "string"
        },
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
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[EnergyInvoiceListResponse](#schemacdr-energy-apienergyinvoicelistresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Invalid Page Size](#error-400-field-invalid-page-size)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li></ul>|[ResponseErrorListV2](#schemacdr-energy-apiresponseerrorlistv2)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|[ResponseErrorListV2](#schemacdr-energy-apiresponseerrorlistv2)|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[422 - Invalid Page](#error-422-field-invalid-page)</li></ul>|[ResponseErrorListV2](#schemacdr-energy-apiresponseerrorlistv2)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-v|string||The [version](#response-headers) of the API end point that the data holder has responded with.|
|200|x-fapi-interaction-id|string||An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|400|x-fapi-interaction-id|string||An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|406|x-fapi-interaction-id|string||An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|422|x-fapi-interaction-id|string||An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|

  
    
      <aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
<a href="#authorisation-scopes">energy:billing:read</a>
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
|Version|**1**

<h3 id="get-invoices-for-specific-accounts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|newest-date|query|[DateString](#common-field-types)|optional|Constrain the request to records with issue date at or before this date.  If absent defaults to current date.  Format is aligned to DateString common type|
|oldest-date|query|[DateString](#common-field-types)|optional|Constrain the request to records with issue date at or after this date. If absent defaults to newest-date minus 24 months.  Format is aligned to DateString common type|
|page|query|[PositiveInteger](#common-field-types)|optional|Page of results to request (standard pagination)|
|page-size|query|[PositiveInteger](#common-field-types)|optional|Page size to request.  Default is 25 (standard pagination)|
|x-v|header|string|mandatory|Version of the API end point requested by the client. Must be set to a positive integer. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If the value of [x-min-v](#request-headers) is equal to or higher than the value of [x-v](#request-headers) then the [x-min-v](#request-headers) header should be treated as absent. If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable. See [HTTP Headers](#request-headers)|
|x-min-v|header|string|optional|Minimum version of the API end point requested by the client. Must be set to a positive integer if provided. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable.|
|x-fapi-interaction-id|header|string|optional|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|x-fapi-auth-date|header|string|conditional|The time when the customer last logged in to the Data Recipient Software Product as described in **[[FAPI-R-Draft]](#nref-FAPI-R-Draft)**.  Required for all resource calls (customer present and unattended). Not required for unauthenticated calls.|
|x-fapi-customer-ip-address|header|string|optional|The customer's original IP address if the customer is currently logged in to the data recipient. The presence of this header indicates that the API is being called in a customer present context. Not to be included for unauthenticated calls.|
|x-cds-client-headers|header|[Base64](#common-field-types)|conditional|The customer's original standard http headers [Base64](#common-field-types) encoded, including the original User Agent header, if the customer is currently logged in to the data recipient. Mandatory for customer present calls.  Not required for unattended or unauthenticated calls.|
|body|body|[accountIdList](#schemacdr-energy-apiaccountidlist)|mandatory|Request payload containing list of specific Accounts to obtain data for|
|» data|body|object|mandatory|none|
|»» accountIds|body|[string]|mandatory|Array of specific accountIds to obtain data for|
|» meta|body|[Meta](#schemacdr-energy-apimeta)|optional|none|

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
        "gstAmount": "string",
        "payOnTimeDiscount": {
          "discountAmount": "string",
          "gstAmount": "string",
          "date": "string"
        },
        "balanceAtIssue": "string",
        "servicePoints": [
          "string"
        ],
        "gas": {
          "totalUsageCharges": "string",
          "totalGenerationCredits": "string",
          "totalOnceOffCharges": "string",
          "totalOnceOffDiscounts": "string",
          "otherCharges": [
            {
              "type": "ENVIRONMENTAL",
              "amount": "string",
              "description": "string"
            }
          ],
          "totalGst": "string"
        },
        "electricity": {
          "totalUsageCharges": "string",
          "totalGenerationCredits": "string",
          "totalOnceOffCharges": "string",
          "totalOnceOffDiscounts": "string",
          "otherCharges": [
            {
              "type": "ENVIRONMENTAL",
              "amount": "string",
              "description": "string"
            }
          ],
          "totalGst": "string"
        },
        "accountCharges": {
          "totalCharges": "string",
          "totalDiscounts": "string",
          "totalGst": "string"
        },
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
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[EnergyInvoiceListResponse](#schemacdr-energy-apienergyinvoicelistresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Invalid Page Size](#error-400-field-invalid-page-size)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li></ul>|[ResponseErrorListV2](#schemacdr-energy-apiresponseerrorlistv2)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|[ResponseErrorListV2](#schemacdr-energy-apiresponseerrorlistv2)|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[422 - Invalid Page](#error-422-field-invalid-page)</li><li>[422 - Unavailable Energy Account](#error-422-unavailable-energy-account)</li><li>[422 - Invalid Energy Account](#error-422-invalid-energy-account)</li></ul>|[ResponseErrorListV2](#schemacdr-energy-apiresponseerrorlistv2)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-v|string||The [version](#response-headers) of the API end point that the data holder has responded with.|
|200|x-fapi-interaction-id|string||An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|400|x-fapi-interaction-id|string||An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|406|x-fapi-interaction-id|string||An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|422|x-fapi-interaction-id|string||An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|

  
    
      <aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
<a href="#authorisation-scopes">energy:billing:read</a>
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
|Version|**1**

<h3 id="get-billing-for-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|mandatory|ID of a specific account to obtain data for.  This is a tokenised ID previous obtained from the Account List end point.|
|newest-time|query|[DateTimeString](#common-field-types)|optional|Constrain the request to records with effective time at or before this date/time.  If absent defaults to current date/time.  Format is aligned to DateTimeString common type|
|oldest-time|query|[DateTimeString](#common-field-types)|optional|Constrain the request to records with effective time at or after this date/time. If absent defaults to newest-time minus 12 months.  Format is aligned to DateTimeString common type|
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
    "transactions": [
      {
        "accountId": "string",
        "executionDateTime": "string",
        "gst": "string",
        "transactionUType": "usage",
        "usage": {
          "servicePointId": "string",
          "invoiceNumber": "string",
          "timeOfUseType": "PEAK",
          "description": "string",
          "isEstimate": true,
          "startDate": "string",
          "endDate": "string",
          "measureUnit": "KWH",
          "usage": 0,
          "amount": "string",
          "calculationFactors": [
            {
              "value": 0,
              "type": "DLF"
            }
          ],
          "adjustments": [
            {
              "amount": "string",
              "description": "string"
            }
          ]
        },
        "demand": {
          "servicePointId": "string",
          "invoiceNumber": "string",
          "timeOfUseType": "PEAK",
          "description": "string",
          "isEstimate": true,
          "startDate": "string",
          "endDate": "string",
          "rate": 0,
          "amount": "string",
          "calculationFactors": [
            {
              "value": 0,
              "type": "DLF"
            }
          ],
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
        "otherCharges": {
          "servicePointId": "string",
          "invoiceNumber": "string",
          "startDate": "string",
          "endDate": "string",
          "type": "ENVIRONMENTAL",
          "amount": "string",
          "description": "string",
          "calculationFactors": [
            {
              "value": 0,
              "type": "DLF"
            }
          ],
          "adjustments": [
            {
              "amount": "string",
              "description": "string"
            }
          ]
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
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[EnergyBillingListResponse](#schemacdr-energy-apienergybillinglistresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Invalid Page Size](#error-400-field-invalid-page-size)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li></ul>|[ResponseErrorListV2](#schemacdr-energy-apiresponseerrorlistv2)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[404 - Unavailable Energy Account](#error-404-unavailable-energy-account)</li><li>[404 - Invalid Energy Account](#error-404-invalid-energy-account)</li></ul>|[ResponseErrorListV2](#schemacdr-energy-apiresponseerrorlistv2)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|[ResponseErrorListV2](#schemacdr-energy-apiresponseerrorlistv2)|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[422 - Invalid Page](#error-422-field-invalid-page)</li></ul>|[ResponseErrorListV2](#schemacdr-energy-apiresponseerrorlistv2)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-v|string||The [version](#response-headers) of the API end point that the data holder has responded with.|
|200|x-fapi-interaction-id|string||An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|400|x-fapi-interaction-id|string||An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|404|x-fapi-interaction-id|string||An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|406|x-fapi-interaction-id|string||An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|422|x-fapi-interaction-id|string||An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|

  
    
      <aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
<a href="#authorisation-scopes">energy:billing:read</a>
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
|Version|**1**

<h3 id="get-bulk-billing-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|newest-time|query|[DateTimeString](#common-field-types)|optional|Constrain the request to records with effective time at or before this date/time.  If absent defaults to current date/time.  Format is aligned to DateTimeString common type|
|oldest-time|query|[DateTimeString](#common-field-types)|optional|Constrain the request to records with effective time at or after this date/time. If absent defaults to newest-time minus 12 months.  Format is aligned to DateTimeString common type|
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
    "transactions": [
      {
        "accountId": "string",
        "executionDateTime": "string",
        "gst": "string",
        "transactionUType": "usage",
        "usage": {
          "servicePointId": "string",
          "invoiceNumber": "string",
          "timeOfUseType": "PEAK",
          "description": "string",
          "isEstimate": true,
          "startDate": "string",
          "endDate": "string",
          "measureUnit": "KWH",
          "usage": 0,
          "amount": "string",
          "calculationFactors": [
            {
              "value": 0,
              "type": "DLF"
            }
          ],
          "adjustments": [
            {
              "amount": "string",
              "description": "string"
            }
          ]
        },
        "demand": {
          "servicePointId": "string",
          "invoiceNumber": "string",
          "timeOfUseType": "PEAK",
          "description": "string",
          "isEstimate": true,
          "startDate": "string",
          "endDate": "string",
          "rate": 0,
          "amount": "string",
          "calculationFactors": [
            {
              "value": 0,
              "type": "DLF"
            }
          ],
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
        "otherCharges": {
          "servicePointId": "string",
          "invoiceNumber": "string",
          "startDate": "string",
          "endDate": "string",
          "type": "ENVIRONMENTAL",
          "amount": "string",
          "description": "string",
          "calculationFactors": [
            {
              "value": 0,
              "type": "DLF"
            }
          ],
          "adjustments": [
            {
              "amount": "string",
              "description": "string"
            }
          ]
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
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[EnergyBillingListResponse](#schemacdr-energy-apienergybillinglistresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Invalid Page Size](#error-400-field-invalid-page-size)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li></ul>|[ResponseErrorListV2](#schemacdr-energy-apiresponseerrorlistv2)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|[ResponseErrorListV2](#schemacdr-energy-apiresponseerrorlistv2)|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[422 - Invalid Page](#error-422-field-invalid-page)</li></ul>|[ResponseErrorListV2](#schemacdr-energy-apiresponseerrorlistv2)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-v|string||The [version](#response-headers) of the API end point that the data holder has responded with.|
|200|x-fapi-interaction-id|string||An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|400|x-fapi-interaction-id|string||An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|406|x-fapi-interaction-id|string||An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|422|x-fapi-interaction-id|string||An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|

  
    
      <aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
<a href="#authorisation-scopes">energy:billing:read</a>
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
|Version|**1**

<h3 id="get-billing-for-specific-accounts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|newest-time|query|[DateTimeString](#common-field-types)|optional|Constrain the request to records with effective time at or before this date/time.  If absent defaults to current date/time.  Format is aligned to DateTimeString common type|
|oldest-time|query|[DateTimeString](#common-field-types)|optional|Constrain the request to records with effective time at or after this date/time. If absent defaults to newest-time minus 12 months.  Format is aligned to DateTimeString common type|
|page|query|[PositiveInteger](#common-field-types)|optional|Page of results to request (standard pagination)|
|page-size|query|[PositiveInteger](#common-field-types)|optional|Page size to request.  Default is 25 (standard pagination)|
|x-v|header|string|mandatory|Version of the API end point requested by the client. Must be set to a positive integer. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If the value of [x-min-v](#request-headers) is equal to or higher than the value of [x-v](#request-headers) then the [x-min-v](#request-headers) header should be treated as absent. If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable. See [HTTP Headers](#request-headers)|
|x-min-v|header|string|optional|Minimum version of the API end point requested by the client. Must be set to a positive integer if provided. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable.|
|x-fapi-interaction-id|header|string|optional|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|x-fapi-auth-date|header|string|conditional|The time when the customer last logged in to the Data Recipient Software Product as described in **[[FAPI-R-Draft]](#nref-FAPI-R-Draft)**.  Required for all resource calls (customer present and unattended). Not required for unauthenticated calls.|
|x-fapi-customer-ip-address|header|string|optional|The customer's original IP address if the customer is currently logged in to the data recipient. The presence of this header indicates that the API is being called in a customer present context. Not to be included for unauthenticated calls.|
|x-cds-client-headers|header|[Base64](#common-field-types)|conditional|The customer's original standard http headers [Base64](#common-field-types) encoded, including the original User Agent header, if the customer is currently logged in to the data recipient. Mandatory for customer present calls.  Not required for unattended or unauthenticated calls.|
|body|body|[accountIdList](#schemacdr-energy-apiaccountidlist)|mandatory|Request payload containing list of specific Accounts to obtain data for|
|» data|body|object|mandatory|none|
|»» accountIds|body|[string]|mandatory|Array of specific accountIds to obtain data for|
|» meta|body|[Meta](#schemacdr-energy-apimeta)|optional|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "transactions": [
      {
        "accountId": "string",
        "executionDateTime": "string",
        "gst": "string",
        "transactionUType": "usage",
        "usage": {
          "servicePointId": "string",
          "invoiceNumber": "string",
          "timeOfUseType": "PEAK",
          "description": "string",
          "isEstimate": true,
          "startDate": "string",
          "endDate": "string",
          "measureUnit": "KWH",
          "usage": 0,
          "amount": "string",
          "calculationFactors": [
            {
              "value": 0,
              "type": "DLF"
            }
          ],
          "adjustments": [
            {
              "amount": "string",
              "description": "string"
            }
          ]
        },
        "demand": {
          "servicePointId": "string",
          "invoiceNumber": "string",
          "timeOfUseType": "PEAK",
          "description": "string",
          "isEstimate": true,
          "startDate": "string",
          "endDate": "string",
          "rate": 0,
          "amount": "string",
          "calculationFactors": [
            {
              "value": 0,
              "type": "DLF"
            }
          ],
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
        "otherCharges": {
          "servicePointId": "string",
          "invoiceNumber": "string",
          "startDate": "string",
          "endDate": "string",
          "type": "ENVIRONMENTAL",
          "amount": "string",
          "description": "string",
          "calculationFactors": [
            {
              "value": 0,
              "type": "DLF"
            }
          ],
          "adjustments": [
            {
              "amount": "string",
              "description": "string"
            }
          ]
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
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[EnergyBillingListResponse](#schemacdr-energy-apienergybillinglistresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Invalid Page Size](#error-400-field-invalid-page-size)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li></ul>|[ResponseErrorListV2](#schemacdr-energy-apiresponseerrorlistv2)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|[ResponseErrorListV2](#schemacdr-energy-apiresponseerrorlistv2)|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[422 - Invalid Page](#error-422-field-invalid-page)</li><li>[422 - Unavailable Energy Account](#error-422-unavailable-energy-account)</li><li>[422 - Invalid Energy Account](#error-422-invalid-energy-account)</li></ul>|[ResponseErrorListV2](#schemacdr-energy-apiresponseerrorlistv2)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-v|string||The [version](#response-headers) of the API end point that the data holder has responded with.|
|200|x-fapi-interaction-id|string||An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|400|x-fapi-interaction-id|string||An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|406|x-fapi-interaction-id|string||An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|422|x-fapi-interaction-id|string||An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|

  
    
      <aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
<a href="#authorisation-scopes">energy:billing:read</a>
</aside>

    
  

<h2 class="schema-heading" id="cdr-energy-api-schemas">Schemas</h2>
<a class="schema-link" id="cdr-energy-api-schemas"></a>

<h3 class="schema-toc" id="tocSenergyplanlistresponse">EnergyPlanListResponse</h3>

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
          ],
          "distributors": [
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

<h3 class="schema-toc" id="tocSenergyplanresponsev2">EnergyPlanResponseV2</h3>

<a id="schemacdr-energy-apienergyplanresponsev2"></a>

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
      ],
      "distributors": [
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
      "timeZone": "LOCAL",
      "isFixed": true,
      "variation": "string",
      "onExpiryDescription": "string",
      "paymentOption": [
        "PAPER_BILL"
      ],
      "intrinsicGreenPower": {
        "greenPercentage": "string"
      },
      "controlledLoad": [
        {
          "displayName": "string",
          "rateBlockUType": "singleRate",
          "startDate": "string",
          "endDate": "string",
          "singleRate": {
            "displayName": "string",
            "description": "string",
            "dailySupplyCharge": "string",
            "rates": [
              {
                "unitPrice": "string",
                "measureUnit": "KWH",
                "volume": 0
              }
            ]
          },
          "timeOfUseRates": [
            {
              "displayName": "string",
              "description": "string",
              "dailySupplyCharge": "string",
              "rates": [
                {
                  "unitPrice": "string",
                  "measureUnit": "KWH",
                  "volume": 0
                }
              ],
              "timeOfUse": [
                {
                  "days": [
                    "SUN"
                  ],
                  "startTime": "string",
                  "endTime": "string",
                  "additionalInfo": "string",
                  "additionalInfoUri": "string"
                }
              ],
              "type": "PEAK"
            }
          ]
        }
      ],
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
          "startDate": "string",
          "endDate": "string",
          "scheme": "PREMIUM",
          "payerType": "GOVERNMENT",
          "tariffUType": "singleTariff",
          "singleTariff": {
            "rates": [
              {
                "unitPrice": "string",
                "measureUnit": "KWH",
                "volume": 0
              }
            ]
          },
          "timeVaryingTariffs": {
            "type": "PEAK",
            "rates": [
              {
                "unitPrice": "string",
                "measureUnit": "KWH",
                "volume": 0
              }
            ],
            "timeVariations": [
              {
                "days": [
                  "SUN"
                ],
                "startTime": "string",
                "endTime": "string"
              }
            ]
          }
        }
      ],
      "tariffPeriod": [
        {
          "type": "ENVIRONMENTAL",
          "displayName": "string",
          "startDate": "string",
          "endDate": "string",
          "dailySupplyCharges": "string",
          "timeZone": "LOCAL",
          "rateBlockUType": "singleRate",
          "singleRate": {
            "displayName": "string",
            "description": "string",
            "generalUnitPrice": "string",
            "rates": [
              {
                "unitPrice": "string",
                "measureUnit": "KWH",
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
                  "measureUnit": "KWH",
                  "volume": 0
                }
              ],
              "timeOfUse": [
                {
                  "days": [
                    "SUN"
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
              "measureUnit": "KWH",
              "startTime": "string",
              "endTime": "string",
              "days": [
                "SUN"
              ],
              "minDemand": "string",
              "maxDemand": "string",
              "measurementPeriod": "DAY",
              "chargePeriod": "DAY"
            }
          ]
        }
      ],
      "termType": "1_YEAR",
      "benefitPeriod": "string",
      "terms": "string",
      "meterTypes": [
        "string"
      ],
      "coolingOffDays": 0,
      "billFrequency": [
        "string"
      ]
    },
    "electricityContract": {
      "additionalFeeInformation": "string",
      "pricingModel": "SINGLE_RATE",
      "timeZone": "LOCAL",
      "isFixed": true,
      "variation": "string",
      "onExpiryDescription": "string",
      "paymentOption": [
        "PAPER_BILL"
      ],
      "intrinsicGreenPower": {
        "greenPercentage": "string"
      },
      "controlledLoad": [
        {
          "displayName": "string",
          "rateBlockUType": "singleRate",
          "startDate": "string",
          "endDate": "string",
          "singleRate": {
            "displayName": "string",
            "description": "string",
            "dailySupplyCharge": "string",
            "rates": [
              {
                "unitPrice": "string",
                "measureUnit": "KWH",
                "volume": 0
              }
            ]
          },
          "timeOfUseRates": [
            {
              "displayName": "string",
              "description": "string",
              "dailySupplyCharge": "string",
              "rates": [
                {
                  "unitPrice": "string",
                  "measureUnit": "KWH",
                  "volume": 0
                }
              ],
              "timeOfUse": [
                {
                  "days": [
                    "SUN"
                  ],
                  "startTime": "string",
                  "endTime": "string",
                  "additionalInfo": "string",
                  "additionalInfoUri": "string"
                }
              ],
              "type": "PEAK"
            }
          ]
        }
      ],
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
          "startDate": "string",
          "endDate": "string",
          "scheme": "PREMIUM",
          "payerType": "GOVERNMENT",
          "tariffUType": "singleTariff",
          "singleTariff": {
            "rates": [
              {
                "unitPrice": "string",
                "measureUnit": "KWH",
                "volume": 0
              }
            ]
          },
          "timeVaryingTariffs": {
            "type": "PEAK",
            "rates": [
              {
                "unitPrice": "string",
                "measureUnit": "KWH",
                "volume": 0
              }
            ],
            "timeVariations": [
              {
                "days": [
                  "SUN"
                ],
                "startTime": "string",
                "endTime": "string"
              }
            ]
          }
        }
      ],
      "tariffPeriod": [
        {
          "type": "ENVIRONMENTAL",
          "displayName": "string",
          "startDate": "string",
          "endDate": "string",
          "dailySupplyCharges": "string",
          "timeZone": "LOCAL",
          "rateBlockUType": "singleRate",
          "singleRate": {
            "displayName": "string",
            "description": "string",
            "generalUnitPrice": "string",
            "rates": [
              {
                "unitPrice": "string",
                "measureUnit": "KWH",
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
                  "measureUnit": "KWH",
                  "volume": 0
                }
              ],
              "timeOfUse": [
                {
                  "days": [
                    "SUN"
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
              "measureUnit": "KWH",
              "startTime": "string",
              "endTime": "string",
              "days": [
                "SUN"
              ],
              "minDemand": "string",
              "maxDemand": "string",
              "measurementPeriod": "DAY",
              "chargePeriod": "DAY"
            }
          ]
        }
      ],
      "termType": "1_YEAR",
      "benefitPeriod": "string",
      "terms": "string",
      "meterTypes": [
        "string"
      ],
      "coolingOffDays": 0,
      "billFrequency": [
        "string"
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
|data|[EnergyPlanDetailV2](#schemacdr-energy-apienergyplandetailv2)|mandatory|none|
|links|[Links](#schemacdr-energy-apilinks)|mandatory|none|
|meta|[Meta](#schemacdr-energy-apimeta)|optional|none|

<h3 class="schema-toc" id="tocSenergyservicepointlistresponse">EnergyServicePointListResponse</h3>

<a id="schemacdr-energy-apienergyservicepointlistresponse"></a>

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
|» servicePoints|[[EnergyServicePoint](#schemacdr-energy-apienergyservicepoint)]|mandatory|none|
|links|[LinksPaginated](#schemacdr-energy-apilinkspaginated)|mandatory|none|
|meta|[MetaPaginated](#schemacdr-energy-apimetapaginated)|mandatory|none|

<h3 class="schema-toc" id="tocSenergyservicepointdetailresponse">EnergyServicePointDetailResponse</h3>

<a id="schemacdr-energy-apienergyservicepointdetailresponse"></a>

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
|data|[EnergyServicePointDetail](#schemacdr-energy-apienergyservicepointdetail)|mandatory|none|
|links|[Links](#schemacdr-energy-apilinks)|mandatory|none|
|meta|[Meta](#schemacdr-energy-apimeta)|optional|none|

<h3 class="schema-toc" id="tocSenergyusagelistresponse">EnergyUsageListResponse</h3>

<a id="schemacdr-energy-apienergyusagelistresponse"></a>

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
          "readQualities": [
            {
              "startInterval": 0,
              "endInterval": 0,
              "quality": "SUBSTITUTE"
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

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|data|object|mandatory|none|
|» reads|[[EnergyUsageRead](#schemacdr-energy-apienergyusageread)]|mandatory|Array of meter reads sorted by NMI in ascending order followed by readStartDate in descending order|
|links|[LinksPaginated](#schemacdr-energy-apilinkspaginated)|mandatory|none|
|meta|[MetaPaginated](#schemacdr-energy-apimetapaginated)|mandatory|none|

<h3 class="schema-toc" id="tocSenergyderlistresponse">EnergyDerListResponse</h3>

<a id="schemacdr-energy-apienergyderlistresponse"></a>

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
|» derRecords|[[EnergyDerRecord](#schemacdr-energy-apienergyderrecord)]|mandatory|Array of meter reads|
|links|[LinksPaginated](#schemacdr-energy-apilinkspaginated)|mandatory|none|
|meta|[MetaPaginated](#schemacdr-energy-apimetapaginated)|mandatory|none|

<h3 class="schema-toc" id="tocSenergyderdetailresponse">EnergyDerDetailResponse</h3>

<a id="schemacdr-energy-apienergyderdetailresponse"></a>

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
|data|[EnergyDerRecord](#schemacdr-energy-apienergyderrecord)|mandatory|none|
|links|[Links](#schemacdr-energy-apilinks)|mandatory|none|
|meta|[Meta](#schemacdr-energy-apimeta)|optional|none|

<h3 class="schema-toc" id="tocSenergyaccountlistresponsev2">EnergyAccountListResponseV2</h3>

<a id="schemacdr-energy-apienergyaccountlistresponsev2"></a>

```json
{
  "data": {
    "accounts": [
      {
        "accountId": "string",
        "accountNumber": "string",
        "displayName": "string",
        "openStatus": "CLOSED",
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
|» accounts|[[EnergyAccountV2](#schemacdr-energy-apienergyaccountv2)]|mandatory|Array of accounts|
|links|[LinksPaginated](#schemacdr-energy-apilinkspaginated)|mandatory|none|
|meta|[MetaPaginated](#schemacdr-energy-apimetapaginated)|mandatory|none|

<h3 class="schema-toc" id="tocSenergyaccountdetailresponsev3">EnergyAccountDetailResponseV3</h3>

<a id="schemacdr-energy-apienergyaccountdetailresponsev3"></a>

```json
{
  "data": {
    "accountId": "string",
    "accountNumber": "string",
    "displayName": "string",
    "openStatus": "CLOSED",
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
        },
        "planDetail": {
          "fuelType": "ELECTRICITY",
          "isContingentPlan": false,
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
            "timeZone": "LOCAL",
            "isFixed": true,
            "variation": "string",
            "onExpiryDescription": "string",
            "paymentOption": [
              "PAPER_BILL"
            ],
            "intrinsicGreenPower": {
              "greenPercentage": "string"
            },
            "controlledLoad": [
              {
                "displayName": "string",
                "rateBlockUType": "singleRate",
                "startDate": "string",
                "endDate": "string",
                "singleRate": {
                  "displayName": "string",
                  "description": "string",
                  "dailySupplyCharge": "string",
                  "rates": [
                    {}
                  ]
                },
                "timeOfUseRates": [
                  {
                    "displayName": "string",
                    "description": "string",
                    "dailySupplyCharge": "string",
                    "rates": [],
                    "timeOfUse": [],
                    "type": "PEAK"
                  }
                ]
              }
            ],
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
                "startDate": "string",
                "endDate": "string",
                "scheme": "PREMIUM",
                "payerType": "GOVERNMENT",
                "tariffUType": "singleTariff",
                "singleTariff": {
                  "rates": [
                    {}
                  ]
                },
                "timeVaryingTariffs": {
                  "type": "PEAK",
                  "rates": [
                    {}
                  ],
                  "timeVariations": [
                    {}
                  ]
                }
              }
            ],
            "tariffPeriod": [
              {
                "type": "ENVIRONMENTAL",
                "displayName": "string",
                "startDate": "string",
                "endDate": "string",
                "dailySupplyCharges": "string",
                "timeZone": "LOCAL",
                "rateBlockUType": "singleRate",
                "singleRate": {
                  "displayName": "string",
                  "description": "string",
                  "generalUnitPrice": "string",
                  "rates": [
                    {}
                  ],
                  "period": "string"
                },
                "timeOfUseRates": [
                  {
                    "displayName": "string",
                    "description": "string",
                    "rates": [],
                    "timeOfUse": [],
                    "type": "PEAK"
                  }
                ],
                "demandCharges": [
                  {
                    "displayName": "string",
                    "description": "string",
                    "amount": "string",
                    "measureUnit": "KWH",
                    "startTime": "string",
                    "endTime": "string",
                    "days": [],
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
            "timeZone": "LOCAL",
            "isFixed": true,
            "variation": "string",
            "onExpiryDescription": "string",
            "paymentOption": [
              "PAPER_BILL"
            ],
            "intrinsicGreenPower": {
              "greenPercentage": "string"
            },
            "controlledLoad": [
              {
                "displayName": "string",
                "rateBlockUType": "singleRate",
                "startDate": "string",
                "endDate": "string",
                "singleRate": {
                  "displayName": "string",
                  "description": "string",
                  "dailySupplyCharge": "string",
                  "rates": [
                    {}
                  ]
                },
                "timeOfUseRates": [
                  {
                    "displayName": "string",
                    "description": "string",
                    "dailySupplyCharge": "string",
                    "rates": [],
                    "timeOfUse": [],
                    "type": "PEAK"
                  }
                ]
              }
            ],
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
                "startDate": "string",
                "endDate": "string",
                "scheme": "PREMIUM",
                "payerType": "GOVERNMENT",
                "tariffUType": "singleTariff",
                "singleTariff": {
                  "rates": [
                    {}
                  ]
                },
                "timeVaryingTariffs": {
                  "type": "PEAK",
                  "rates": [
                    {}
                  ],
                  "timeVariations": [
                    {}
                  ]
                }
              }
            ],
            "tariffPeriod": [
              {
                "type": "ENVIRONMENTAL",
                "displayName": "string",
                "startDate": "string",
                "endDate": "string",
                "dailySupplyCharges": "string",
                "timeZone": "LOCAL",
                "rateBlockUType": "singleRate",
                "singleRate": {
                  "displayName": "string",
                  "description": "string",
                  "generalUnitPrice": "string",
                  "rates": [
                    {}
                  ],
                  "period": "string"
                },
                "timeOfUseRates": [
                  {
                    "displayName": "string",
                    "description": "string",
                    "rates": [],
                    "timeOfUse": [],
                    "type": "PEAK"
                  }
                ],
                "demandCharges": [
                  {
                    "displayName": "string",
                    "description": "string",
                    "amount": "string",
                    "measureUnit": "KWH",
                    "startTime": "string",
                    "endTime": "string",
                    "days": [],
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
|data|[EnergyAccountDetailV3](#schemacdr-energy-apienergyaccountdetailv3)|mandatory|none|
|links|[Links](#schemacdr-energy-apilinks)|mandatory|none|
|meta|[Meta](#schemacdr-energy-apimeta)|optional|none|

<h3 class="schema-toc" id="tocSenergypaymentscheduleresponse">EnergyPaymentScheduleResponse</h3>

<a id="schemacdr-energy-apienergypaymentscheduleresponse"></a>

```json
{
  "data": {
    "paymentSchedules": [
      {
        "amount": "string",
        "paymentScheduleUType": "cardDebit",
        "cardDebit": {
          "cardScheme": "VISA",
          "paymentFrequency": "string",
          "calculationType": "STATIC"
        },
        "directDebit": {
          "isTokenised": true,
          "bsb": "string",
          "accountNumber": "string",
          "paymentFrequency": "string",
          "calculationType": "STATIC"
        },
        "digitalWallet": {
          "name": "string",
          "identifier": "string",
          "type": "EMAIL",
          "provider": "PAYPAL_AU",
          "paymentFrequency": "string",
          "calculationType": "STATIC"
        },
        "manualPayment": {
          "billFrequency": "string"
        }
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
|data|object|mandatory|none|
|» paymentSchedules|[[EnergyPaymentSchedule](#schemacdr-energy-apienergypaymentschedule)]|mandatory|Array may be empty if no payment schedule exist|
|links|[Links](#schemacdr-energy-apilinks)|mandatory|none|
|meta|[Meta](#schemacdr-energy-apimeta)|optional|none|

<h3 class="schema-toc" id="tocSenergyconcessionsresponse">EnergyConcessionsResponse</h3>

<a id="schemacdr-energy-apienergyconcessionsresponse"></a>

```json
{
  "data": {
    "concessions": [
      {
        "type": "FIXED_AMOUNT",
        "displayName": "string",
        "additionalInfo": "string",
        "additionalInfoUri": "string",
        "startDate": "string",
        "endDate": "string",
        "discountFrequency": "string",
        "amount": "string",
        "percentage": "string",
        "appliedTo": [
          "INVOICE"
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
|data|object|mandatory|none|
|» concessions|[[EnergyConcession](#schemacdr-energy-apienergyconcession)]|mandatory|Array may be empty if no concessions exist|
|links|[Links](#schemacdr-energy-apilinks)|mandatory|none|
|meta|[Meta](#schemacdr-energy-apimeta)|optional|none|

<h3 class="schema-toc" id="tocSenergybalancelistresponse">EnergyBalanceListResponse</h3>

<a id="schemacdr-energy-apienergybalancelistresponse"></a>

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

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|data|object|mandatory|none|
|» balances|[object]|mandatory|Array of account balances|
|»» accountId|string|mandatory|The ID of the account|
|»» balance|[AmountString](#common-field-types)|mandatory|The current balance of the account.  A positive value indicates that amount is owing to be paid.  A negative value indicates that the account is in credit|
|» links|[LinksPaginated](#schemacdr-energy-apilinkspaginated)|mandatory|none|
|» meta|[MetaPaginated](#schemacdr-energy-apimetapaginated)|mandatory|none|

<h3 class="schema-toc" id="tocSenergybalanceresponse">EnergyBalanceResponse</h3>

<a id="schemacdr-energy-apienergybalanceresponse"></a>

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

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|data|object|mandatory|none|
|» balance|[AmountString](#common-field-types)|mandatory|The current balance of the account.  A positive value indicates that amount is owing to be paid.  A negative value indicates that the account is in credit|
|links|[Links](#schemacdr-energy-apilinks)|mandatory|none|
|meta|[Meta](#schemacdr-energy-apimeta)|optional|none|

<h3 class="schema-toc" id="tocSenergyinvoicelistresponse">EnergyInvoiceListResponse</h3>

<a id="schemacdr-energy-apienergyinvoicelistresponse"></a>

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
        "gstAmount": "string",
        "payOnTimeDiscount": {
          "discountAmount": "string",
          "gstAmount": "string",
          "date": "string"
        },
        "balanceAtIssue": "string",
        "servicePoints": [
          "string"
        ],
        "gas": {
          "totalUsageCharges": "string",
          "totalGenerationCredits": "string",
          "totalOnceOffCharges": "string",
          "totalOnceOffDiscounts": "string",
          "otherCharges": [
            {
              "type": "ENVIRONMENTAL",
              "amount": "string",
              "description": "string"
            }
          ],
          "totalGst": "string"
        },
        "electricity": {
          "totalUsageCharges": "string",
          "totalGenerationCredits": "string",
          "totalOnceOffCharges": "string",
          "totalOnceOffDiscounts": "string",
          "otherCharges": [
            {
              "type": "ENVIRONMENTAL",
              "amount": "string",
              "description": "string"
            }
          ],
          "totalGst": "string"
        },
        "accountCharges": {
          "totalCharges": "string",
          "totalDiscounts": "string",
          "totalGst": "string"
        },
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

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|data|object|mandatory|none|
|» invoices|[[EnergyInvoice](#schemacdr-energy-apienergyinvoice)]|mandatory|Array of invoices sorted by issue date in descending order|
|links|[LinksPaginated](#schemacdr-energy-apilinkspaginated)|mandatory|none|
|meta|[MetaPaginated](#schemacdr-energy-apimetapaginated)|mandatory|none|

<h3 class="schema-toc" id="tocSenergybillinglistresponse">EnergyBillingListResponse</h3>

<a id="schemacdr-energy-apienergybillinglistresponse"></a>

```json
{
  "data": {
    "transactions": [
      {
        "accountId": "string",
        "executionDateTime": "string",
        "gst": "string",
        "transactionUType": "usage",
        "usage": {
          "servicePointId": "string",
          "invoiceNumber": "string",
          "timeOfUseType": "PEAK",
          "description": "string",
          "isEstimate": true,
          "startDate": "string",
          "endDate": "string",
          "measureUnit": "KWH",
          "usage": 0,
          "amount": "string",
          "calculationFactors": [
            {
              "value": 0,
              "type": "DLF"
            }
          ],
          "adjustments": [
            {
              "amount": "string",
              "description": "string"
            }
          ]
        },
        "demand": {
          "servicePointId": "string",
          "invoiceNumber": "string",
          "timeOfUseType": "PEAK",
          "description": "string",
          "isEstimate": true,
          "startDate": "string",
          "endDate": "string",
          "rate": 0,
          "amount": "string",
          "calculationFactors": [
            {
              "value": 0,
              "type": "DLF"
            }
          ],
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
        "otherCharges": {
          "servicePointId": "string",
          "invoiceNumber": "string",
          "startDate": "string",
          "endDate": "string",
          "type": "ENVIRONMENTAL",
          "amount": "string",
          "description": "string",
          "calculationFactors": [
            {
              "value": 0,
              "type": "DLF"
            }
          ],
          "adjustments": [
            {
              "amount": "string",
              "description": "string"
            }
          ]
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

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|data|object|mandatory|none|
|» transactions|[[EnergyBillingTransaction](#schemacdr-energy-apienergybillingtransaction)]|mandatory|Array of transactions sorted by date and time in descending order|
|links|[LinksPaginated](#schemacdr-energy-apilinkspaginated)|mandatory|none|
|meta|[MetaPaginated](#schemacdr-energy-apimetapaginated)|mandatory|none|

<h3 class="schema-toc" id="tocSresponseerrorlistv2">ResponseErrorListV2</h3>

<a id="schemacdr-energy-apiresponseerrorlistv2"></a>

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

<h3 class="schema-toc" id="tocSenergyplan">EnergyPlan</h3>

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
    ],
    "distributors": [
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
|» excludedPostcodes|[string]|optional|Array of valid Australian postcodes that are specifically excluded from the plan.  Each element is a single four digit postcode (e.g. 3000) or a range of postcodes defined by two four digit postcodes and a hyphen (e.g. 3000-3999)|
|» includedPostcodes|[string]|optional|Array of valid Australian postcodes that are included from the plan.  If absent defaults to all non-excluded postcodes.  Each element is a single four digit postcode (e.g. 3000) or a range of postcodes defined by two four digit postcodes and a hyphen (e.g. 3000-3999)|
|» distributors|[string]|mandatory|Array of distributors for the plan. Must have at least one entry|

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

<h3 class="schema-toc" id="tocSenergyplandetailv2">EnergyPlanDetailV2</h3>

<a id="schemacdr-energy-apienergyplandetailv2"></a>

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
    ],
    "distributors": [
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
    "timeZone": "LOCAL",
    "isFixed": true,
    "variation": "string",
    "onExpiryDescription": "string",
    "paymentOption": [
      "PAPER_BILL"
    ],
    "intrinsicGreenPower": {
      "greenPercentage": "string"
    },
    "controlledLoad": [
      {
        "displayName": "string",
        "rateBlockUType": "singleRate",
        "startDate": "string",
        "endDate": "string",
        "singleRate": {
          "displayName": "string",
          "description": "string",
          "dailySupplyCharge": "string",
          "rates": [
            {
              "unitPrice": "string",
              "measureUnit": "KWH",
              "volume": 0
            }
          ]
        },
        "timeOfUseRates": [
          {
            "displayName": "string",
            "description": "string",
            "dailySupplyCharge": "string",
            "rates": [
              {
                "unitPrice": "string",
                "measureUnit": "KWH",
                "volume": 0
              }
            ],
            "timeOfUse": [
              {
                "days": [
                  "SUN"
                ],
                "startTime": "string",
                "endTime": "string",
                "additionalInfo": "string",
                "additionalInfoUri": "string"
              }
            ],
            "type": "PEAK"
          }
        ]
      }
    ],
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
        "startDate": "string",
        "endDate": "string",
        "scheme": "PREMIUM",
        "payerType": "GOVERNMENT",
        "tariffUType": "singleTariff",
        "singleTariff": {
          "rates": [
            {
              "unitPrice": "string",
              "measureUnit": "KWH",
              "volume": 0
            }
          ]
        },
        "timeVaryingTariffs": {
          "type": "PEAK",
          "rates": [
            {
              "unitPrice": "string",
              "measureUnit": "KWH",
              "volume": 0
            }
          ],
          "timeVariations": [
            {
              "days": [
                "SUN"
              ],
              "startTime": "string",
              "endTime": "string"
            }
          ]
        }
      }
    ],
    "tariffPeriod": [
      {
        "type": "ENVIRONMENTAL",
        "displayName": "string",
        "startDate": "string",
        "endDate": "string",
        "dailySupplyCharges": "string",
        "timeZone": "LOCAL",
        "rateBlockUType": "singleRate",
        "singleRate": {
          "displayName": "string",
          "description": "string",
          "generalUnitPrice": "string",
          "rates": [
            {
              "unitPrice": "string",
              "measureUnit": "KWH",
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
                "measureUnit": "KWH",
                "volume": 0
              }
            ],
            "timeOfUse": [
              {
                "days": [
                  "SUN"
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
            "measureUnit": "KWH",
            "startTime": "string",
            "endTime": "string",
            "days": [
              "SUN"
            ],
            "minDemand": "string",
            "maxDemand": "string",
            "measurementPeriod": "DAY",
            "chargePeriod": "DAY"
          }
        ]
      }
    ],
    "termType": "1_YEAR",
    "benefitPeriod": "string",
    "terms": "string",
    "meterTypes": [
      "string"
    ],
    "coolingOffDays": 0,
    "billFrequency": [
      "string"
    ]
  },
  "electricityContract": {
    "additionalFeeInformation": "string",
    "pricingModel": "SINGLE_RATE",
    "timeZone": "LOCAL",
    "isFixed": true,
    "variation": "string",
    "onExpiryDescription": "string",
    "paymentOption": [
      "PAPER_BILL"
    ],
    "intrinsicGreenPower": {
      "greenPercentage": "string"
    },
    "controlledLoad": [
      {
        "displayName": "string",
        "rateBlockUType": "singleRate",
        "startDate": "string",
        "endDate": "string",
        "singleRate": {
          "displayName": "string",
          "description": "string",
          "dailySupplyCharge": "string",
          "rates": [
            {
              "unitPrice": "string",
              "measureUnit": "KWH",
              "volume": 0
            }
          ]
        },
        "timeOfUseRates": [
          {
            "displayName": "string",
            "description": "string",
            "dailySupplyCharge": "string",
            "rates": [
              {
                "unitPrice": "string",
                "measureUnit": "KWH",
                "volume": 0
              }
            ],
            "timeOfUse": [
              {
                "days": [
                  "SUN"
                ],
                "startTime": "string",
                "endTime": "string",
                "additionalInfo": "string",
                "additionalInfoUri": "string"
              }
            ],
            "type": "PEAK"
          }
        ]
      }
    ],
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
        "startDate": "string",
        "endDate": "string",
        "scheme": "PREMIUM",
        "payerType": "GOVERNMENT",
        "tariffUType": "singleTariff",
        "singleTariff": {
          "rates": [
            {
              "unitPrice": "string",
              "measureUnit": "KWH",
              "volume": 0
            }
          ]
        },
        "timeVaryingTariffs": {
          "type": "PEAK",
          "rates": [
            {
              "unitPrice": "string",
              "measureUnit": "KWH",
              "volume": 0
            }
          ],
          "timeVariations": [
            {
              "days": [
                "SUN"
              ],
              "startTime": "string",
              "endTime": "string"
            }
          ]
        }
      }
    ],
    "tariffPeriod": [
      {
        "type": "ENVIRONMENTAL",
        "displayName": "string",
        "startDate": "string",
        "endDate": "string",
        "dailySupplyCharges": "string",
        "timeZone": "LOCAL",
        "rateBlockUType": "singleRate",
        "singleRate": {
          "displayName": "string",
          "description": "string",
          "generalUnitPrice": "string",
          "rates": [
            {
              "unitPrice": "string",
              "measureUnit": "KWH",
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
                "measureUnit": "KWH",
                "volume": 0
              }
            ],
            "timeOfUse": [
              {
                "days": [
                  "SUN"
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
            "measureUnit": "KWH",
            "startTime": "string",
            "endTime": "string",
            "days": [
              "SUN"
            ],
            "minDemand": "string",
            "maxDemand": "string",
            "measurementPeriod": "DAY",
            "chargePeriod": "DAY"
          }
        ]
      }
    ],
    "termType": "1_YEAR",
    "benefitPeriod": "string",
    "terms": "string",
    "meterTypes": [
      "string"
    ],
    "coolingOffDays": 0,
    "billFrequency": [
      "string"
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
|» gasContract|[EnergyPlanContractFullV2](#schemacdr-energy-apienergyplancontractfullv2)|conditional|The details of the terms for the supply of electricity under this plan.  Is mandatory if fuelType is set to GAS or DUAL|
|» electricityContract|[EnergyPlanContractFullV2](#schemacdr-energy-apienergyplancontractfullv2)|conditional|The details of the terms for the supply of electricity under this plan.  Is mandatory if fuelType is set to ELECTRICITY or DUAL|

<h3 class="schema-toc" id="tocSenergyplancontractv2">EnergyPlanContractV2</h3>

<a id="schemacdr-energy-apienergyplancontractv2"></a>

```json
{
  "additionalFeeInformation": "string",
  "pricingModel": "SINGLE_RATE",
  "timeZone": "LOCAL",
  "isFixed": true,
  "variation": "string",
  "onExpiryDescription": "string",
  "paymentOption": [
    "PAPER_BILL"
  ],
  "intrinsicGreenPower": {
    "greenPercentage": "string"
  },
  "controlledLoad": [
    {
      "displayName": "string",
      "rateBlockUType": "singleRate",
      "startDate": "string",
      "endDate": "string",
      "singleRate": {
        "displayName": "string",
        "description": "string",
        "dailySupplyCharge": "string",
        "rates": [
          {
            "unitPrice": "string",
            "measureUnit": "KWH",
            "volume": 0
          }
        ]
      },
      "timeOfUseRates": [
        {
          "displayName": "string",
          "description": "string",
          "dailySupplyCharge": "string",
          "rates": [
            {
              "unitPrice": "string",
              "measureUnit": "KWH",
              "volume": 0
            }
          ],
          "timeOfUse": [
            {
              "days": [
                "SUN"
              ],
              "startTime": "string",
              "endTime": "string",
              "additionalInfo": "string",
              "additionalInfoUri": "string"
            }
          ],
          "type": "PEAK"
        }
      ]
    }
  ],
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
      "startDate": "string",
      "endDate": "string",
      "scheme": "PREMIUM",
      "payerType": "GOVERNMENT",
      "tariffUType": "singleTariff",
      "singleTariff": {
        "rates": [
          {
            "unitPrice": "string",
            "measureUnit": "KWH",
            "volume": 0
          }
        ]
      },
      "timeVaryingTariffs": {
        "type": "PEAK",
        "rates": [
          {
            "unitPrice": "string",
            "measureUnit": "KWH",
            "volume": 0
          }
        ],
        "timeVariations": [
          {
            "days": [
              "SUN"
            ],
            "startTime": "string",
            "endTime": "string"
          }
        ]
      }
    }
  ],
  "tariffPeriod": [
    {
      "type": "ENVIRONMENTAL",
      "displayName": "string",
      "startDate": "string",
      "endDate": "string",
      "dailySupplyCharges": "string",
      "timeZone": "LOCAL",
      "rateBlockUType": "singleRate",
      "singleRate": {
        "displayName": "string",
        "description": "string",
        "generalUnitPrice": "string",
        "rates": [
          {
            "unitPrice": "string",
            "measureUnit": "KWH",
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
              "measureUnit": "KWH",
              "volume": 0
            }
          ],
          "timeOfUse": [
            {
              "days": [
                "SUN"
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
          "measureUnit": "KWH",
          "startTime": "string",
          "endTime": "string",
          "days": [
            "SUN"
          ],
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
|timeZone|string|conditional|Required if pricingModel is set to TIME_OF_USE.  Defines the time zone to use for calculation of the time of use thresholds. Defaults to AEST if absent|
|isFixed|boolean|mandatory|Flag indicating whether prices are fixed or variable|
|variation|string|conditional|Free text description of price variation policy and conditions for the contract.  Mandatory if `isFixed` is false|
|onExpiryDescription|string|optional|Free text field that describes what will occur on or prior to expiry of the fixed contract term or benefit period|
|paymentOption|[string]|mandatory|Payment options for this contract|
|intrinsicGreenPower|object|optional|Describes intrinsic green power for the plan.  If present then the plan includes a percentage of green power in the base plan. Should not be present for gas contracts|
|» greenPercentage|[RateString](#common-field-types)|mandatory|Percentage of green power intrinsically included in the plan|
|controlledLoad|[EnergyPlanControlledLoad](#schemacdr-energy-apienergyplancontrolledload)|conditional|Required if pricing model is SINGLE_RATE_CONT_LOAD or TIME_OF_USE_CONT_LOAD or FLEXIBLE_CONT_LOAD|
|incentives|[EnergyPlanIncentives](#schemacdr-energy-apienergyplanincentives)|optional|Optional list of incentives available for the contract|
|discounts|[EnergyPlanDiscounts](#schemacdr-energy-apienergyplandiscounts)|optional|Optional list of discounts available for the contract|
|greenPowerCharges|[EnergyPlanGreenPowerCharges](#schemacdr-energy-apienergyplangreenpowercharges)|optional|Optional list of charges applicable to green power|
|eligibility|[EnergyPlanEligibility](#schemacdr-energy-apienergyplaneligibility)|optional|Eligibility restrictions or requirements|
|fees|[EnergyPlanFees](#schemacdr-energy-apienergyplanfees)|optional|An array of fees applicable to the plan|
|solarFeedInTariff|[EnergyPlanSolarFeedInTariffV2](#schemacdr-energy-apienergyplansolarfeedintariffv2)|optional|Array of feed in tariffs for solar power|
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
|timeZone|LOCAL|
|timeZone|AEST|
|paymentOption|PAPER_BILL|
|paymentOption|CREDIT_CARD|
|paymentOption|DIRECT_DEBIT|
|paymentOption|BPAY|
|paymentOption|OTHER|

<h3 class="schema-toc" id="tocSenergyplancontractfullv2">EnergyPlanContractFullV2</h3>

<a id="schemacdr-energy-apienergyplancontractfullv2"></a>

```json
{
  "additionalFeeInformation": "string",
  "pricingModel": "SINGLE_RATE",
  "timeZone": "LOCAL",
  "isFixed": true,
  "variation": "string",
  "onExpiryDescription": "string",
  "paymentOption": [
    "PAPER_BILL"
  ],
  "intrinsicGreenPower": {
    "greenPercentage": "string"
  },
  "controlledLoad": [
    {
      "displayName": "string",
      "rateBlockUType": "singleRate",
      "startDate": "string",
      "endDate": "string",
      "singleRate": {
        "displayName": "string",
        "description": "string",
        "dailySupplyCharge": "string",
        "rates": [
          {
            "unitPrice": "string",
            "measureUnit": "KWH",
            "volume": 0
          }
        ]
      },
      "timeOfUseRates": [
        {
          "displayName": "string",
          "description": "string",
          "dailySupplyCharge": "string",
          "rates": [
            {
              "unitPrice": "string",
              "measureUnit": "KWH",
              "volume": 0
            }
          ],
          "timeOfUse": [
            {
              "days": [
                "SUN"
              ],
              "startTime": "string",
              "endTime": "string",
              "additionalInfo": "string",
              "additionalInfoUri": "string"
            }
          ],
          "type": "PEAK"
        }
      ]
    }
  ],
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
      "startDate": "string",
      "endDate": "string",
      "scheme": "PREMIUM",
      "payerType": "GOVERNMENT",
      "tariffUType": "singleTariff",
      "singleTariff": {
        "rates": [
          {
            "unitPrice": "string",
            "measureUnit": "KWH",
            "volume": 0
          }
        ]
      },
      "timeVaryingTariffs": {
        "type": "PEAK",
        "rates": [
          {
            "unitPrice": "string",
            "measureUnit": "KWH",
            "volume": 0
          }
        ],
        "timeVariations": [
          {
            "days": [
              "SUN"
            ],
            "startTime": "string",
            "endTime": "string"
          }
        ]
      }
    }
  ],
  "tariffPeriod": [
    {
      "type": "ENVIRONMENTAL",
      "displayName": "string",
      "startDate": "string",
      "endDate": "string",
      "dailySupplyCharges": "string",
      "timeZone": "LOCAL",
      "rateBlockUType": "singleRate",
      "singleRate": {
        "displayName": "string",
        "description": "string",
        "generalUnitPrice": "string",
        "rates": [
          {
            "unitPrice": "string",
            "measureUnit": "KWH",
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
              "measureUnit": "KWH",
              "volume": 0
            }
          ],
          "timeOfUse": [
            {
              "days": [
                "SUN"
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
          "measureUnit": "KWH",
          "startTime": "string",
          "endTime": "string",
          "days": [
            "SUN"
          ],
          "minDemand": "string",
          "maxDemand": "string",
          "measurementPeriod": "DAY",
          "chargePeriod": "DAY"
        }
      ]
    }
  ],
  "termType": "1_YEAR",
  "benefitPeriod": "string",
  "terms": "string",
  "meterTypes": [
    "string"
  ],
  "coolingOffDays": 0,
  "billFrequency": [
    "string"
  ]
}

```

### Properties

*allOf*

|Name|Type|Required|Description|
|---|---|---|---|
|*anonymous*|[EnergyPlanContractV2](#schemacdr-energy-apienergyplancontractv2)|mandatory|none|

*and*

|Name|Type|Required|Description|
|---|---|---|---|
|*anonymous*|object|mandatory|none|
|» termType|string|optional|The term for the contract.  If absent assumes no specified term|
|» benefitPeriod|string|conditional|Description of the benefit period.  Should only be present if termType has the value ONGOING|
|» terms|string|optional|Free text description of the terms for the contract|
|» meterTypes|[string]|optional|An array of the meter types that this contract is available for|
|» coolingOffDays|[PositiveInteger](#common-field-types)|conditional|Number of days in the cooling off period for the contract.  Mandatory for plans with type of MARKET|
|» billFrequency|[string]|mandatory|An array of the available billing schedules for this contract. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)|

#### Enumerated Values

|Property|Value|
|---|---|
|termType|1_YEAR|
|termType|2_YEAR|
|termType|3_YEAR|
|termType|4_YEAR|
|termType|5_YEAR|
|termType|ONGOING|
|termType|OTHER|

<h3 class="schema-toc" id="tocSenergyplancontrolledload">EnergyPlanControlledLoad</h3>

<a id="schemacdr-energy-apienergyplancontrolledload"></a>

```json
[
  {
    "displayName": "string",
    "rateBlockUType": "singleRate",
    "startDate": "string",
    "endDate": "string",
    "singleRate": {
      "displayName": "string",
      "description": "string",
      "dailySupplyCharge": "string",
      "rates": [
        {
          "unitPrice": "string",
          "measureUnit": "KWH",
          "volume": 0
        }
      ]
    },
    "timeOfUseRates": [
      {
        "displayName": "string",
        "description": "string",
        "dailySupplyCharge": "string",
        "rates": [
          {
            "unitPrice": "string",
            "measureUnit": "KWH",
            "volume": 0
          }
        ],
        "timeOfUse": [
          {
            "days": [
              "SUN"
            ],
            "startTime": "string",
            "endTime": "string",
            "additionalInfo": "string",
            "additionalInfoUri": "string"
          }
        ],
        "type": "PEAK"
      }
    ]
  }
]

```

*Required if pricing model is SINGLE_RATE_CONT_LOAD or TIME_OF_USE_CONT_LOAD or FLEXIBLE_CONT_LOAD*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|displayName|string|mandatory|A display name for the controlled load|
|rateBlockUType|string|mandatory|Specifies the type of controlloed load rate|
|startDate|[DateString](#common-field-types)|optional|Optional start date of the application of the controlled load rate|
|endDate|[DateString](#common-field-types)|optional|Optional end date of the application of the controlled load rate|
|singleRate|object|conditional|Object representing a single controlled load rate.  Required if rateBlockUType is singleRate|
|» displayName|string|mandatory|Display name of the controlled load rate|
|» description|string|optional|Description of the controlled load rate|
|» dailySupplyCharge|[AmountString](#common-field-types)|optional|The daily supply charge (exclusive of GST) for this controlled load tier|
|» rates|[object]|mandatory|Array of controlled load rates in order of usage volume|
|»» unitPrice|[AmountString](#common-field-types)|mandatory|Unit price of usage per  measure unit (exclusive of GST)|
|»» measureUnit|string|optional|The measurement unit of rate. Assumed to be KWH if absent|
|»» volume|number|optional|Volume in kWh that this rate applies to.  Only applicable for ‘stepped’ rates where different rates apply for different volumes of usage in a period|
|» timeOfUseRates|[object]|conditional|Array of objects representing time of use rates.  Required if rateBlockUType is timeOfUseRates|
|»» displayName|string|mandatory|Display name of the controlled load rate|
|»» description|string|optional|Description of the controlled load rate|
|»» dailySupplyCharge|[AmountString](#common-field-types)|optional|The daily supply charge (exclusive of GST) for this controlled load tier|
|»» rates|[object]|mandatory|Array of controlled load rates in order of usage volume|
|»»» unitPrice|[AmountString](#common-field-types)|mandatory|Unit price of usage per  measure unit (exclusive of GST)|
|»»» measureUnit|string|optional|The measurement unit of rate. Assumed to be KWH if absent|
|»»» volume|number|optional|Volume in kWh that this rate applies to.  Only applicable for ‘stepped’ rates where different rates apply for different volumes of usage in a period|
|»» timeOfUse|[object]|mandatory|Array of times of use.|
|»»» days|[string]|optional|The days that the rate applies to|
|»»» startTime|[TimeString](#common-field-types)|conditional|The beginning of the time period per day for which the controlled load rate applies. Required if endTime provided|
|»»» endTime|[TimeString](#common-field-types)|conditional|The end of the time period per day for which the controlled load rate applies. Required if startTime provided|
|»»» additionalInfo|string|conditional|Display text providing more information on the contrlled load, for e.g. controlled load availability if specific day/time is not known. Required if startTime and endTime absent or if additionalInfoUri provided|
|»»» additionalInfoUri|[URIString](#common-field-types)|optional|Optional link to additional information regarding the controlled load|
|»» type|string|mandatory|The type of usage that the rate applies to|

#### Enumerated Values

|Property|Value|
|---|---|
|rateBlockUType|singleRate|
|rateBlockUType|timeOfUseRates|
|measureUnit|KWH|
|measureUnit|KVA|
|measureUnit|KVAR|
|measureUnit|KVARH|
|measureUnit|KW|
|measureUnit|DAYS|
|measureUnit|METER|
|measureUnit|MONTH|
|measureUnit|KWH|
|measureUnit|KVA|
|measureUnit|KVAR|
|measureUnit|KVARH|
|measureUnit|KW|
|measureUnit|DAYS|
|measureUnit|METER|
|measureUnit|MONTH|
|days|SUN|
|days|MON|
|days|TUE|
|days|WED|
|days|THU|
|days|FRI|
|days|SAT|
|days|PUBLIC_HOLIDAYS|
|type|PEAK|
|type|OFF_PEAK|
|type|SHOULDER|
|type|SOLAR_SPONGE|

<h3 class="schema-toc" id="tocSenergyplanincentives">EnergyPlanIncentives</h3>

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

<h3 class="schema-toc" id="tocSenergyplandiscounts">EnergyPlanDiscounts</h3>

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
|percentOfBill|object|conditional|Required if methodUType is percentOfBill|
|» rate|[RateString](#common-field-types)|mandatory|The rate of the discount applied to the bill amount|
|percentOfUse|object|conditional|Required if methodUType is percentOfUse|
|» rate|[RateString](#common-field-types)|mandatory|The rate of the discount applied to the usageamount|
|fixedAmount|object|conditional|Required if methodUType is fixedAmount|
|» amount|[AmountString](#common-field-types)|mandatory|The amount of the discount|
|percentOverThreshold|object|conditional|Required if methodUType is percentOverThreshold|
|» rate|[RateString](#common-field-types)|mandatory|The rate of the discount over the usage amount|
|» usageAmount|[AmountString](#common-field-types)|mandatory|The usage amount threshold above which the discount applies|

#### Enumerated Values

|Property|Value|
|---|---|
|type|CONDITIONAL|
|type|GUARANTEED|
|type|OTHER|
|category|PAY_ON_TIME|
|category|DIRECT_DEBIT|
|category|GUARANTEED_DISCOUNT|
|category|OTHER|
|methodUType|percentOfBill|
|methodUType|percentOfUse|
|methodUType|fixedAmount|
|methodUType|percentOverThreshold|

<h3 class="schema-toc" id="tocSenergyplangreenpowercharges">EnergyPlanGreenPowerCharges</h3>

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

<h3 class="schema-toc" id="tocSenergyplaneligibility">EnergyPlanEligibility</h3>

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

<h3 class="schema-toc" id="tocSenergyplanfees">EnergyPlanFees</h3>

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
|term|WEEKLY|
|term|MONTHLY|
|term|BIANNUAL|
|term|VARIABLE|

<h3 class="schema-toc" id="tocSenergyplansolarfeedintariffv2">EnergyPlanSolarFeedInTariffV2</h3>

<a id="schemacdr-energy-apienergyplansolarfeedintariffv2"></a>

```json
[
  {
    "displayName": "string",
    "description": "string",
    "startDate": "string",
    "endDate": "string",
    "scheme": "PREMIUM",
    "payerType": "GOVERNMENT",
    "tariffUType": "singleTariff",
    "singleTariff": {
      "rates": [
        {
          "unitPrice": "string",
          "measureUnit": "KWH",
          "volume": 0
        }
      ]
    },
    "timeVaryingTariffs": {
      "type": "PEAK",
      "rates": [
        {
          "unitPrice": "string",
          "measureUnit": "KWH",
          "volume": 0
        }
      ],
      "timeVariations": [
        {
          "days": [
            "SUN"
          ],
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
|startDate|[DateString](#common-field-types)|optional|The start date of the application of the feed in tariff|
|endDate|[DateString](#common-field-types)|optional|The end date of the application of the feed in tariff|
|scheme|string|mandatory|The applicable scheme|
|payerType|string|mandatory|The type of the payer|
|tariffUType|string|mandatory|The type of the payer|
|singleTariff|object|conditional|Represents a constant tariff.  Mandatory if tariffUType is set to singleTariff|
|» rates|[object]|mandatory|Array of feed in rates|
|»» unitPrice|[AmountString](#common-field-types)|mandatory|Unit price of usage per measure unit (exclusive of GST)|
|»» measureUnit|string|optional|The measurement unit of rate. Assumed to be KWH if absent|
|»» volume|number|optional|Volume that this rate applies to. Only applicable for ‘stepped’ rates where different rates apply for different volumes of usage in a period|
|» timeVaryingTariffs|object|conditional|Represents a tariff based on time.  Mandatory if tariffUType is set to timeVaryingTariffs|
|»» type|string|optional|The type of the charging time period. If absent applies to all periods|
|»» rates|[object]|optional|Array of feed in rates|
|»»» unitPrice|[AmountString](#common-field-types)|mandatory|Unit price of usage per measure unit (exclusive of GST)|
|»»» measureUnit|string|optional|The measurement unit of rate. Assumed to be KWH if absent|
|»»» volume|number|optional|Volume that this rate applies to. Only applicable for ‘stepped’ rates where different rates apply for different volumes of usage in a period|
|»» timeVariations|[object]|mandatory|Array of time periods for which this tariff is applicable|
|»»» days|[string]|mandatory|The days that the tariff applies to. At least one entry required|
|»»» startTime|[TimeString](#common-field-types)|optional|The beginning of the time period per day for which the tariff applies.  If absent assumes start of day (ie. midnight)|
|»»» endTime|[TimeString](#common-field-types)|optional|The end of the time period per day for which the tariff applies.  If absent assumes end of day (ie. one second before midnight)|

#### Enumerated Values

|Property|Value|
|---|---|
|scheme|PREMIUM|
|scheme|OTHER|
|payerType|GOVERNMENT|
|payerType|RETAILER|
|tariffUType|singleTariff|
|tariffUType|timeVaryingTariffs|
|measureUnit|KWH|
|measureUnit|KVA|
|measureUnit|KVAR|
|measureUnit|KVARH|
|measureUnit|KW|
|measureUnit|DAYS|
|measureUnit|METER|
|measureUnit|MONTH|
|type|PEAK|
|type|OFF_PEAK|
|type|SHOULDER|
|measureUnit|KWH|
|measureUnit|KVA|
|measureUnit|KVAR|
|measureUnit|KVARH|
|measureUnit|KW|
|measureUnit|DAYS|
|measureUnit|METER|
|measureUnit|MONTH|
|days|SUN|
|days|MON|
|days|TUE|
|days|WED|
|days|THU|
|days|FRI|
|days|SAT|
|days|PUBLIC_HOLIDAYS|

<h3 class="schema-toc" id="tocSenergyplantariffperiod">EnergyPlanTariffPeriod</h3>

<a id="schemacdr-energy-apienergyplantariffperiod"></a>

```json
[
  {
    "type": "ENVIRONMENTAL",
    "displayName": "string",
    "startDate": "string",
    "endDate": "string",
    "dailySupplyCharges": "string",
    "timeZone": "LOCAL",
    "rateBlockUType": "singleRate",
    "singleRate": {
      "displayName": "string",
      "description": "string",
      "generalUnitPrice": "string",
      "rates": [
        {
          "unitPrice": "string",
          "measureUnit": "KWH",
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
            "measureUnit": "KWH",
            "volume": 0
          }
        ],
        "timeOfUse": [
          {
            "days": [
              "SUN"
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
        "measureUnit": "KWH",
        "startTime": "string",
        "endTime": "string",
        "days": [
          "SUN"
        ],
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
|type|string|optional|Type of charge. Assumed to be other if absent|
|displayName|string|mandatory|The name of the tariff period|
|startDate|string|mandatory|The start date of the tariff period in a calendar year.  Formatted in mm-dd format|
|endDate|string|mandatory|The end date of the tariff period in a calendar year.  Formatted in mm-dd format|
|dailySupplyCharges|[AmountString](#common-field-types)|optional|The amount of access charge for the tariff period, in dollars per day exclusive of GST.|
|timeZone|string|optional|Specifies the charge specific time zone for calculation of the time of use thresholds. If absent, timezone value in EnergyPlanContract is assumed.|
|rateBlockUType|string|mandatory|Specifies the type of rate applicable to this tariff period|
|singleRate|object|conditional|Object representing a single rate.  Required if rateBlockUType is singleRate|
|» displayName|string|mandatory|Display name of the rate|
|» description|string|optional|Description of the rate|
|» generalUnitPrice|[AmountString](#common-field-types)|conditional|The block rate (unit price) for any usage above the included fixed usage, in dollars per kWh inclusive of GST.  Only required if pricingModel field is ‘QUOTA’|
|» rates|[object]|mandatory|Array of controlled load rates in order of usage volume|
|»» unitPrice|[AmountString](#common-field-types)|mandatory|Unit price of usage per measure unit (exclusive of GST)|
|»» measureUnit|string|optional|The measurement unit of rate. Assumed to be KWH if absent|
|»» volume|number|optional|Volume in kWh that this rate applies to.  Only applicable for ‘stepped’ rates where different rates apply for different volumes of usage in a period|
|» period|[ExternalRef](#common-field-types)|optional|Usage period for which the block rate applies. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)|
|timeOfUseRates|[object]|conditional|Array of objects representing time of use rates.  Required if rateBlockUType is timeOfUseRates|
|» displayName|string|mandatory|Display name of the rate|
|» description|string|optional|Description of the rate|
|» rates|[object]|mandatory|Array of controlled load rates in order of usage volume|
|»» unitPrice|[AmountString](#common-field-types)|mandatory|Unit price of usage per  measure unit (exclusive of GST)|
|»» measureUnit|string|optional|The measurement unit of rate. Assumed to be KWH if absent|
|»» volume|number|optional|Volume in kWh that this rate applies to.  Only applicable for ‘stepped’ rates where different rates apply for different volumes of usage in a period|
|» timeOfUse|[object]|mandatory|Array of times of use|
|»» days|[string]|mandatory|The days that the rate applies to|
|»» startTime|[TimeString](#common-field-types)|mandatory|Start of the period|
|»» endTime|[TimeString](#common-field-types)|mandatory|End of the period|
|» type|string|mandatory|The type of usage that the rate applies to|
|demandCharges|[object]|conditional|Array of demand charges.  Required if rateBlockUType is demandCharges|
|» displayName|string|mandatory|Display name of the charge|
|» description|string|optional|Description of the charge|
|» amount|[AmountString](#common-field-types)|mandatory|The charge amount per  measure unit exclusive of GST|
|» measureUnit|string|optional|The measurement unit of charge amount. Assumed to be KWH if absent|
|» startTime|[TimeString](#common-field-types)|mandatory|Start of the period|
|» endTime|[TimeString](#common-field-types)|mandatory|End of the period|
|» days|[string]|optional|The days that the demand tariff applies to|
|» minDemand|[AmountString](#common-field-types)|optional|Minimum demand for this demand tariff in kW.  If absent then 0 is assumed|
|» maxDemand|[AmountString](#common-field-types)|optional|Maximum demand for this demand tariff in kW.  If present, must be higher than the value of the minDemand field|
|» measurementPeriod|string|mandatory|Application period for the demand tariff|
|» chargePeriod|string|mandatory|Charge period for the demand tariff|

#### Enumerated Values

|Property|Value|
|---|---|
|type|ENVIRONMENTAL|
|type|REGULATED|
|type|NETWORK|
|type|METERING|
|type|RETAIL_SERVICE|
|type|RCTI|
|type|OTHER|
|timeZone|LOCAL|
|timeZone|AEST|
|rateBlockUType|singleRate|
|rateBlockUType|timeOfUseRates|
|rateBlockUType|demandCharges|
|measureUnit|KWH|
|measureUnit|KVA|
|measureUnit|KVAR|
|measureUnit|KVARH|
|measureUnit|KW|
|measureUnit|DAYS|
|measureUnit|METER|
|measureUnit|MONTH|
|measureUnit|KWH|
|measureUnit|KVA|
|measureUnit|KVAR|
|measureUnit|KVARH|
|measureUnit|KW|
|measureUnit|DAYS|
|measureUnit|METER|
|measureUnit|MONTH|
|days|SUN|
|days|MON|
|days|TUE|
|days|WED|
|days|THU|
|days|FRI|
|days|SAT|
|days|PUBLIC_HOLIDAYS|
|type|PEAK|
|type|OFF_PEAK|
|type|SHOULDER|
|type|SHOULDER1|
|type|SHOULDER2|
|measureUnit|KWH|
|measureUnit|KVA|
|measureUnit|KVAR|
|measureUnit|KVARH|
|measureUnit|KW|
|measureUnit|DAYS|
|measureUnit|METER|
|measureUnit|MONTH|
|days|SUN|
|days|MON|
|days|TUE|
|days|WED|
|days|THU|
|days|FRI|
|days|SAT|
|days|PUBLIC_HOLIDAYS|
|measurementPeriod|DAY|
|measurementPeriod|MONTH|
|measurementPeriod|TARIFF_PERIOD|
|chargePeriod|DAY|
|chargePeriod|MONTH|
|chargePeriod|TARIFF_PERIOD|

<h3 class="schema-toc" id="tocSenergyservicepoint">EnergyServicePoint</h3>

<a id="schemacdr-energy-apienergyservicepoint"></a>

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
|servicePointId|string|mandatory|Tokenised ID of the service point to be used for referring to the service point in the CDR API suite. To be created in accordance with CDR ID permanence requirements|
|nationalMeteringId|string|mandatory|The independent ID of the service point, known in the industry as the NMI|
|servicePointClassification|string|mandatory|The classification of the service point as defined in MSATS procedures|
|servicePointStatus|string|mandatory|Code used to indicate the status of the service point. Note the details for the enumeration values below:<ul><li>**ACTIVE** - An active, energised, service point</li><li>**DE_ENERGISED** - The service point exists but is deenergised</li><li>**EXTINCT** - The service point has been permanently decommissioned</li><li>**GREENFIELD** - Applies to a service point that has never been energised</li><li>**OFF_MARKET** - Applies when the service point is no longer settled in the NEM</li></ul>|
|jurisdictionCode|string|mandatory|Jurisdiction code to which the service point belongs.This code defines the jurisdictional rules which apply to the service point. Note the details of enumeration values below:<ul><li>**ALL** - All Jurisdictions</li><li>**ACT** - Australian Capital Territory</li><li>**NEM** - National Electricity Market</li><li>**NSW** - New South Wales</li><li>**QLD** - Queensland</li><li>**SA** - South Australia</li><li>**TAS** - Tasmania</li><li>**VIC** - Victoria</li></ul>|
|isGenerator|boolean|optional|This flag determines whether the energy at this connection point is to be treated as consumer load or as a generating unit(this may include generator auxiliary loads). If absent defaults to false. <br>**Note:** Only applicable for scheduled or semischeduled generators, does not indicate on site generation by consumer|
|validFromDate|[DateString](#common-field-types)|mandatory|The latest start date from which the constituent data sets of this service point became valid|
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

<a id="schemacdr-energy-apienergyservicepointdetail"></a>

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
|servicePointId|string|mandatory|The tokenised ID of the service point for use in the CDR APIs.  Created according to the CDR rules for ID permanence|
|nationalMeteringId|string|mandatory|The independent ID of the service point, known in the industry as the NMI|
|servicePointClassification|string|mandatory|The classification of the service point as defined in MSATS procedures|
|servicePointStatus|string|mandatory|Code used to indicate the status of the service point. Note the details for the enumeration values below:<ul><li>**ACTIVE** - An active, energised, service point</li><li>**DE_ENERGISED** - The service point exists but is deenergised</li><li>**EXTINCT** - The service point has been permanently decommissioned</li><li>**GREENFIELD** - Applies to a service point that has never been energised</li><li>**OFF_MARKET** - Applies when the service point is no longer settled in the NEM</li></ul>|
|jurisdictionCode|string|mandatory|Jurisdiction code to which the service point belongs.This code defines the jurisdictional rules which apply to the service point. Note the details of enumeration values below:<ul><li>**ALL** - All Jurisdictions</li><li>**ACT** - Australian Capital Territory</li><li>**NEM** - National Electricity Market</li><li>**NSW** - New South Wales</li><li>**QLD** - Queensland</li><li>**SA** - South Australia</li><li>**TAS** - Tasmania</li><li>**VIC** - Victoria</li></ul>|
|isGenerator|boolean|optional|This flag determines whether the energy at this connection point is to be treated as consumer load or as a generating unit(this may include generator auxiliary loads). If absent defaults to false. <br>**Note:** Only applicable for scheduled or semischeduled generators, does not indicate on site generation by consumer|
|validFromDate|[DateString](#common-field-types)|mandatory|The latest start date from which the constituent data sets of this service point became valid|
|lastUpdateDateTime|[DateTimeString](#common-field-types)|mandatory|The date and time that the information for this service point was modified|
|consumerProfile|object|optional|none|
|» classification|string|optional|A code that defines the consumer class as defined in the National Energy Retail Regulations, or in overriding Jurisdictional instruments|
|» threshold|any|optional|A code that defines the consumption threshold as defined in the National Energy Retail Regulations, or in overriding Jurisdictional instruments. Note the details of enumeration values below: <ul><li>**LOW** - Consumption is less than the ‘lower consumption threshold’ as defined in the National Energy Retail Regulations</li><li>**MEDIUM** - Consumption is equal to or greater than the ‘lower consumption threshold’, but less than the ‘upper consumption threshold’, as defined in the National Energy Retail Regulations</li><li>**HIGH** - Consumption is equal to or greater than the ‘upper consumption threshold’ as defined in the National Energy Retail Regulations</li></ul>|
|distributionLossFactor|object|mandatory|none|
|» code|string|mandatory|A code used to identify data loss factor for the service point values.  Refer to AEMO distribution loss factor documents for each financial year to interpret|
|» description|string|mandatory|Description of the data loss factor code and value|
|» lossValue|string|mandatory|The value associated with the loss factor code|
|relatedParticipants|[object]|mandatory|none|
|» party|string|mandatory|The name of the party/organisation related to this service point|
|» role|string|mandatory|The role performed by this participant in relation to the service point. Note the details of enumeration values below: <ul><li>**FRMP** - Financially Responsible Market Participant</li><li>**LNSP** - Local Network Service Provider or Embedded Network Manager for child connection points</li><li>**DRSP** - wholesale Demand Response and/or market ancillary Service Provider and note that where it is not relevant for a NMI it will not be included</li></ul>|
|location|[CommonPhysicalAddress](#schemacdr-energy-apicommonphysicaladdress)|mandatory|Location of the servicepoint|
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

<a id="schemacdr-energy-apienergyusageread"></a>

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
    "readQualities": [
      {
        "startInterval": 0,
        "endInterval": 0,
        "quality": "SUBSTITUTE"
      }
    ]
  }
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|servicePointId|string|mandatory|Tokenised ID of the service point to be used for referring to the service point in the CDR API suite.  To be created in accordance with CDR ID permanence requirements|
|registerId|string|optional|Register ID of the meter register where the meter reads are obtained|
|registerSuffix|string|mandatory|Register suffix of the meter register where the meter reads are obtained|
|meterId|string|optional|Meter id/serial number as it appears in customer’s bill. ID permanence rules do not apply.|
|controlledLoad|boolean|optional|Indicates whether the energy recorded by this register is created under a Controlled Load regime|
|readStartDate|[DateString](#common-field-types)|mandatory|Date when the meter reads start in AEST and assumed to start from 12:00 am AEST.|
|readEndDate|[DateString](#common-field-types)|optional|Date when the meter reads end in AEST.  If absent then assumed to be equal to readStartDate.  In this case the entry represents data for a single date specified by readStartDate.|
|unitOfMeasure|[ExternalRef](#common-field-types)|optional|Unit of measure of the meter reads. Refer to Appendix B of <a href='https://www.aemo.com.au/-/media/files/stakeholder_consultation/consultations/nem-consultations/2019/5ms-metering-package-2/final-determination/mdff-specification-nem12-nem13-v21-final-determination-clean.pdf?la=en&hash=03FCBA0D60E091DE00F2361AE76206EA'>MDFF Specification NEM12 NEM13 v2.1</a> for a list of possible values.|
|readUType|string|mandatory|Specify the type of the meter read data|
|basicRead|object|conditional|Mandatory if readUType is set to basicRead|
|» quality|string|optional|The quality of the read taken.  If absent then assumed to be ACTUAL|
|» value|number|mandatory|Meter read value.  If positive then it means consumption, if negative it means export|
|intervalRead|object|conditional|Mandatory if readUType is set to intervalRead|
|» readIntervalLength|[PositiveInteger](#common-field-types)|conditional|Read interval length in minutes. Required when interval-reads query parameter equals FULL or MIN_30|
|» aggregateValue|number|mandatory|The aggregate sum of the interval read values. If positive then it means net consumption, if negative it means net export|
|» intervalReads|[number]|conditional|Array of Interval read values. If positive then it means consumption, if negative it means export. Required when interval-reads query parameter equals FULL or  MIN_30.<br>Each read value indicates the read for the interval specified by readIntervalLength beginning at midnight of readStartDate (for example 00:00 to 00:30 would be the first reading in a 30 minute Interval)|
|» readQualities|[object]|conditional|Specifies quality of reads that are not ACTUAL.  For read indices that are not specified, quality is assumed to be ACTUAL. If not present, all quality of all reads are assumed to be actual. Required when interval-reads query parameter equals FULL or MIN_30|
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

<a id="schemacdr-energy-apienergyderrecord"></a>

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
|servicePointId|string|mandatory|Tokenised ID of the service point to be used for referring to the service point in the CDR API suite.  To be created in accordance with CDR ID permanence requirements|
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

<h3 class="schema-toc" id="tocSenergyaccountbasev2">EnergyAccountBaseV2</h3>

<a id="schemacdr-energy-apienergyaccountbasev2"></a>

```json
{
  "accountId": "string",
  "accountNumber": "string",
  "displayName": "string",
  "openStatus": "CLOSED",
  "creationDate": "string"
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|accountId|string|mandatory|The ID of the account.  To be created in accordance with CDR ID permanence requirements|
|accountNumber|string|optional|Optional identifier of the account as defined by the data holder.  This must be the value presented on physical statements (if it exists) and must not be used for the value of accountId|
|displayName|string|optional|An optional display name for the account if one exists or can be derived.  The content of this field is at the discretion of the data holder|
|openStatus|string|optional|Open or closed status for the account. If not present then OPEN is assumed|
|creationDate|[DateString](#common-field-types)|conditional|The date that the account was created or opened. Mandatory if openStatus is OPEN|

#### Enumerated Values

|Property|Value|
|---|---|
|openStatus|CLOSED|
|openStatus|OPEN|

<h3 class="schema-toc" id="tocSenergyaccountv2">EnergyAccountV2</h3>

<a id="schemacdr-energy-apienergyaccountv2"></a>

```json
{
  "accountId": "string",
  "accountNumber": "string",
  "displayName": "string",
  "openStatus": "CLOSED",
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
|*anonymous*|[EnergyAccountBaseV2](#schemacdr-energy-apienergyaccountbasev2)|mandatory|none|

*and*

|Name|Type|Required|Description|
|---|---|---|---|
|*anonymous*|object|mandatory|The array of plans containing service points and associated plan details|
|» plans|[object]|mandatory|The array of plans containing service points and associated plan details|
|»» nickname|string|optional|Optional display name for the plan provided by the customer to help differentiate multiple plans|
|»» servicePointIds|[string]|mandatory|An array of servicePointIds, representing NMIs, that this plan is linked to.  If there are no service points allocated to this plan then an empty array would be expected|
|»» planOverview|object|conditional|Mandatory if openStatus is OPEN|
|»»» displayName|string|optional|The name of the plan if one exists|
|»»» startDate|[DateString](#common-field-types)|mandatory|The start date of the applicability of this plan|
|»»» endDate|[DateString](#common-field-types)|optional|The end date of the applicability of this plan|

<h3 class="schema-toc" id="tocSenergyaccountdetailv3">EnergyAccountDetailV3</h3>

<a id="schemacdr-energy-apienergyaccountdetailv3"></a>

```json
{
  "accountId": "string",
  "accountNumber": "string",
  "displayName": "string",
  "openStatus": "CLOSED",
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
      },
      "planDetail": {
        "fuelType": "ELECTRICITY",
        "isContingentPlan": false,
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
          "timeZone": "LOCAL",
          "isFixed": true,
          "variation": "string",
          "onExpiryDescription": "string",
          "paymentOption": [
            "PAPER_BILL"
          ],
          "intrinsicGreenPower": {
            "greenPercentage": "string"
          },
          "controlledLoad": [
            {
              "displayName": "string",
              "rateBlockUType": "singleRate",
              "startDate": "string",
              "endDate": "string",
              "singleRate": {
                "displayName": "string",
                "description": "string",
                "dailySupplyCharge": "string",
                "rates": [
                  {
                    "unitPrice": "string",
                    "measureUnit": "KWH",
                    "volume": 0
                  }
                ]
              },
              "timeOfUseRates": [
                {
                  "displayName": "string",
                  "description": "string",
                  "dailySupplyCharge": "string",
                  "rates": [
                    {}
                  ],
                  "timeOfUse": [
                    {}
                  ],
                  "type": "PEAK"
                }
              ]
            }
          ],
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
              "startDate": "string",
              "endDate": "string",
              "scheme": "PREMIUM",
              "payerType": "GOVERNMENT",
              "tariffUType": "singleTariff",
              "singleTariff": {
                "rates": [
                  {
                    "unitPrice": "string",
                    "measureUnit": "KWH",
                    "volume": 0
                  }
                ]
              },
              "timeVaryingTariffs": {
                "type": "PEAK",
                "rates": [
                  {
                    "unitPrice": "string",
                    "measureUnit": "KWH",
                    "volume": 0
                  }
                ],
                "timeVariations": [
                  {
                    "days": [],
                    "startTime": "string",
                    "endTime": "string"
                  }
                ]
              }
            }
          ],
          "tariffPeriod": [
            {
              "type": "ENVIRONMENTAL",
              "displayName": "string",
              "startDate": "string",
              "endDate": "string",
              "dailySupplyCharges": "string",
              "timeZone": "LOCAL",
              "rateBlockUType": "singleRate",
              "singleRate": {
                "displayName": "string",
                "description": "string",
                "generalUnitPrice": "string",
                "rates": [
                  {
                    "unitPrice": "string",
                    "measureUnit": "KWH",
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
                    {}
                  ],
                  "timeOfUse": [
                    {}
                  ],
                  "type": "PEAK"
                }
              ],
              "demandCharges": [
                {
                  "displayName": "string",
                  "description": "string",
                  "amount": "string",
                  "measureUnit": "KWH",
                  "startTime": "string",
                  "endTime": "string",
                  "days": [
                    "SUN"
                  ],
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
          "timeZone": "LOCAL",
          "isFixed": true,
          "variation": "string",
          "onExpiryDescription": "string",
          "paymentOption": [
            "PAPER_BILL"
          ],
          "intrinsicGreenPower": {
            "greenPercentage": "string"
          },
          "controlledLoad": [
            {
              "displayName": "string",
              "rateBlockUType": "singleRate",
              "startDate": "string",
              "endDate": "string",
              "singleRate": {
                "displayName": "string",
                "description": "string",
                "dailySupplyCharge": "string",
                "rates": [
                  {
                    "unitPrice": "string",
                    "measureUnit": "KWH",
                    "volume": 0
                  }
                ]
              },
              "timeOfUseRates": [
                {
                  "displayName": "string",
                  "description": "string",
                  "dailySupplyCharge": "string",
                  "rates": [
                    {}
                  ],
                  "timeOfUse": [
                    {}
                  ],
                  "type": "PEAK"
                }
              ]
            }
          ],
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
              "startDate": "string",
              "endDate": "string",
              "scheme": "PREMIUM",
              "payerType": "GOVERNMENT",
              "tariffUType": "singleTariff",
              "singleTariff": {
                "rates": [
                  {
                    "unitPrice": "string",
                    "measureUnit": "KWH",
                    "volume": 0
                  }
                ]
              },
              "timeVaryingTariffs": {
                "type": "PEAK",
                "rates": [
                  {
                    "unitPrice": "string",
                    "measureUnit": "KWH",
                    "volume": 0
                  }
                ],
                "timeVariations": [
                  {
                    "days": [],
                    "startTime": "string",
                    "endTime": "string"
                  }
                ]
              }
            }
          ],
          "tariffPeriod": [
            {
              "type": "ENVIRONMENTAL",
              "displayName": "string",
              "startDate": "string",
              "endDate": "string",
              "dailySupplyCharges": "string",
              "timeZone": "LOCAL",
              "rateBlockUType": "singleRate",
              "singleRate": {
                "displayName": "string",
                "description": "string",
                "generalUnitPrice": "string",
                "rates": [
                  {
                    "unitPrice": "string",
                    "measureUnit": "KWH",
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
                    {}
                  ],
                  "timeOfUse": [
                    {}
                  ],
                  "type": "PEAK"
                }
              ],
              "demandCharges": [
                {
                  "displayName": "string",
                  "description": "string",
                  "amount": "string",
                  "measureUnit": "KWH",
                  "startTime": "string",
                  "endTime": "string",
                  "days": [
                    "SUN"
                  ],
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
    }
  ]
}

```

### Properties

*allOf*

|Name|Type|Required|Description|
|---|---|---|---|
|*anonymous*|[EnergyAccountBaseV2](#schemacdr-energy-apienergyaccountbasev2)|mandatory|none|

*and*

|Name|Type|Required|Description|
|---|---|---|---|
|*anonymous*|object|mandatory|The array of plans containing service points and associated plan details|
|» plans|[object]|mandatory|The array of plans containing service points and associated plan details|
|»» nickname|string|optional|Optional display name for the plan provided by the customer to help differentiate multiple plans|
|»» servicePointIds|[string]|mandatory|An array of servicePointIds, representing NMIs, that this account is linked to|
|»» planOverview|object|conditional|Mandatory if openStatus is OPEN|
|»»» displayName|string|optional|The name of the plan if one exists|
|»»» startDate|[DateString](#common-field-types)|mandatory|The start date of the applicability of this plan|
|»»» endDate|[DateString](#common-field-types)|optional|The end date of the applicability of this plan|
|»» planDetail|object|conditional|Detail on the plan applicable to this account. Mandatory if openStatus is OPEN|
|»»» fuelType|string|mandatory|The fuel types covered by the plan|
|»»» isContingentPlan|boolean|optional|Flag that indicates that the plan is contingent on the customer taking up an alternate fuel plan from the same retailer (for instance, if the fuelType is ELECTRICITY then a GAS plan from the same retailer must be taken up). Has no meaning if the plan has a fuelType of DUAL. If absent the value is assumed to be false|
|»»» meteringCharges|[object]|optional|Charges for metering included in the plan|
|»»»» displayName|string|mandatory|Display name of the charge|
|»»»» description|string|optional|Description of the charge|
|»»»» minimumValue|[AmountString](#common-field-types)|mandatory|Minimum value of the charge if the charge is a range or the absolute value of the charge if no range is specified|
|»»»» maximumValue|[AmountString](#common-field-types)|optional|The upper limit of the charge if the charge could occur in a range|
|»»»» period|[ExternalRef](#common-field-types)|optional|The charges that occur on a schedule indicates the frequency. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)|
|»»» gasContract|[EnergyPlanContractV2](#schemacdr-energy-apienergyplancontractv2)|conditional|The details of the terms for the supply of electricity under this plan.  Is mandatory if fuelType is set to GAS or DUAL|
|»»» electricityContract|[EnergyPlanContractV2](#schemacdr-energy-apienergyplancontractv2)|conditional|The details of the terms for the supply of electricity under this plan.  Is mandatory if fuelType is set to ELECTRICITY or DUAL|
|»» authorisedContacts|[object]|optional|An array of additional contacts that are authorised to act on this account|
|»»» firstName|string|optional|For people with single names this field need not be present. The single name should be in the lastName field|
|»»» lastName|string|mandatory|For people with single names the single name should be in this field|
|»»» middleNames|[string]|optional|Field is mandatory but array may be empty|
|»»» prefix|string|optional|Also known as title or salutation. The prefix to the name (e.g. Mr, Mrs, Ms, Miss, Sir, etc)|
|»»» suffix|string|optional|Used for a trailing suffix to the name (e.g. Jr)|

#### Enumerated Values

|Property|Value|
|---|---|
|fuelType|ELECTRICITY|
|fuelType|GAS|
|fuelType|DUAL|

<h3 class="schema-toc" id="tocSenergypaymentschedule">EnergyPaymentSchedule</h3>

<a id="schemacdr-energy-apienergypaymentschedule"></a>

```json
{
  "amount": "string",
  "paymentScheduleUType": "cardDebit",
  "cardDebit": {
    "cardScheme": "VISA",
    "paymentFrequency": "string",
    "calculationType": "STATIC"
  },
  "directDebit": {
    "isTokenised": true,
    "bsb": "string",
    "accountNumber": "string",
    "paymentFrequency": "string",
    "calculationType": "STATIC"
  },
  "digitalWallet": {
    "name": "string",
    "identifier": "string",
    "type": "EMAIL",
    "provider": "PAYPAL_AU",
    "paymentFrequency": "string",
    "calculationType": "STATIC"
  },
  "manualPayment": {
    "billFrequency": "string"
  }
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|amount|[AmountString](#common-field-types)|optional|Optional payment amount indicating that a constant payment amount is scheduled to be paid (used in bill smoothing scenarios)|
|paymentScheduleUType|string|mandatory|The type of object present in this response|
|cardDebit|object|conditional|Represents a regular credit card payment schedule. Mandatory if paymentScheduleUType is set to cardDebit|
|» cardScheme|string|mandatory|The type of credit card held on file|
|» paymentFrequency|[ExternalRef](#common-field-types)|mandatory|The frequency that payments will occur.  Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)|
|» calculationType|string|mandatory|The mechanism by which the payment amount is calculated.  Explanation of values are as follows:<br/><ul><li>**STATIC** - Indicates a consistent, static amount, per payment</li><li>**BALANCE** - Indicates that the outstanding balance for the account is paid per period</li><li>**CALCULATED** - Indicates that the payment amount is variable and calculated using a pre-defined algorithm</li></ul>|
|directDebit|object|conditional|Represents a regular direct debit from a specified bank account. Mandatory if paymentScheduleUType is set to directDebit|
|» isTokenised|boolean|optional|Flag indicating that the account details are tokenised and cannot be shared.  False if absent|
|» bsb|string|conditional|The unmasked BSB for the account to be debited. Is expected to be formatted as digits only with leading zeros included and no punctuation or spaces.  Is required if isTokenised is absent or false|
|» accountNumber|string|conditional|The unmasked account number for the account to be debited. Is expected to be formatted as digits only with leading zeros included and no punctuation or spaces.  Is required if isTokenised is absent or false|
|» paymentFrequency|[ExternalRef](#common-field-types)|mandatory|The frequency that payments will occur.  Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)|
|» calculationType|string|mandatory|The mechanism by which the payment amount is calculated.  Explanation of values are as follows:<br/><ul><li>**STATIC** - Indicates a consistent, static amount, per payment</li><li>**BALANCE** - Indicates that the outstanding balance for the account is paid per period</li><li>**CALCULATED** - Indicates that the payment amount is variable and calculated using a pre-defined algorithm</li></ul>|
|digitalWallet|object|conditional|Represents a regular payment from a digital wallet. Mandatory if paymentScheduleUType is set to digitalWallet|
|» name|string|mandatory|The name assigned to the digital wallet by the owner of the wallet, else the display name provided by the digital wallet provider|
|» identifier|string|mandatory|The identifier of the digital wallet (dependent on type)|
|» type|string|mandatory|The type of the digital wallet identifier|
|» provider|string|mandatory|The provider of the digital wallet|
|» paymentFrequency|[ExternalRef](#common-field-types)|mandatory|The frequency that payments will occur.  Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)|
|» calculationType|string|mandatory|The mechanism by which the payment amount is calculated.  Explanation of values are as follows:<br/><ul><li>**STATIC** - Indicates a consistent, static amount, per payment</li><li>**BALANCE** - Indicates that the outstanding balance for the account is paid per period</li><li>**CALCULATED** - Indicates that the payment amount is variable and calculated using a pre-defined algorithm</li></ul>|
|manualPayment|object|conditional|Represents a manual payment schedule where the customer pays in response to a delivered statement. Mandatory if paymentScheduleUType is set to manualPayment|
|» billFrequency|[ExternalRef](#common-field-types)|mandatory|The frequency with which a bill will be issued.  Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)|

#### Enumerated Values

|Property|Value|
|---|---|
|paymentScheduleUType|cardDebit|
|paymentScheduleUType|directDebit|
|paymentScheduleUType|manualPayment|
|paymentScheduleUType|digitalWallet|
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
|type|EMAIL|
|type|CONTACT_NAME|
|type|TELEPHONE|
|provider|PAYPAL_AU|
|provider|OTHER|
|calculationType|STATIC|
|calculationType|BALANCE|
|calculationType|CALCULATED|

<h3 class="schema-toc" id="tocSenergyconcession">EnergyConcession</h3>

<a id="schemacdr-energy-apienergyconcession"></a>

```json
{
  "type": "FIXED_AMOUNT",
  "displayName": "string",
  "additionalInfo": "string",
  "additionalInfoUri": "string",
  "startDate": "string",
  "endDate": "string",
  "discountFrequency": "string",
  "amount": "string",
  "percentage": "string",
  "appliedTo": [
    "INVOICE"
  ]
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|type|string|mandatory|Indicator of the method of concession calculation|
|displayName|string|mandatory|The display name of the concession|
|additionalInfo|string|conditional|Display text providing more information on the concession. Mandatory if type is VARIABLE|
|additionalInfoUri|[URIString](#common-field-types)|optional|Optional link to additional information regarding the concession|
|startDate|[DateString](#common-field-types)|optional|Optional start date for the application of the concession|
|endDate|[DateString](#common-field-types)|optional|Optional end date for the application of the concession|
|discountFrequency|[ExternalRef](#common-field-types)|conditional|Conditional attribute for frequency at which a concession is applied. Required if type is FIXED_AMOUNT or FIXED_PERCENTAGE. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)|
|amount|[AmountString](#common-field-types)|conditional|Conditional attribute for the amount of discount for the concession- required if type is FIXED_AMOUNT|
|percentage|[RateString](#common-field-types)|conditional|Conditional attribute for the percentage of discount of concession - required if type is FIXED_PERCENTAGE|
|appliedTo|[string]|optional|Array of ENUM's to specify what the concession applies to. Multiple ENUM values can be provided. If absent, USAGE is assumed|

#### Enumerated Values

|Property|Value|
|---|---|
|type|FIXED_AMOUNT|
|type|FIXED_PERCENTAGE|
|type|VARIABLE|
|appliedTo|INVOICE|
|appliedTo|USAGE|
|appliedTo|SERVICE_CHARGE|
|appliedTo|CONTROLLED_LOAD|

<h3 class="schema-toc" id="tocSenergyinvoice">EnergyInvoice</h3>

<a id="schemacdr-energy-apienergyinvoice"></a>

```json
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
  "gstAmount": "string",
  "payOnTimeDiscount": {
    "discountAmount": "string",
    "gstAmount": "string",
    "date": "string"
  },
  "balanceAtIssue": "string",
  "servicePoints": [
    "string"
  ],
  "gas": {
    "totalUsageCharges": "string",
    "totalGenerationCredits": "string",
    "totalOnceOffCharges": "string",
    "totalOnceOffDiscounts": "string",
    "otherCharges": [
      {
        "type": "ENVIRONMENTAL",
        "amount": "string",
        "description": "string"
      }
    ],
    "totalGst": "string"
  },
  "electricity": {
    "totalUsageCharges": "string",
    "totalGenerationCredits": "string",
    "totalOnceOffCharges": "string",
    "totalOnceOffDiscounts": "string",
    "otherCharges": [
      {
        "type": "ENVIRONMENTAL",
        "amount": "string",
        "description": "string"
      }
    ],
    "totalGst": "string"
  },
  "accountCharges": {
    "totalCharges": "string",
    "totalDiscounts": "string",
    "totalGst": "string"
  },
  "paymentStatus": "PAID"
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|accountId|string|mandatory|The ID of the account for which the invoice was issued|
|invoiceNumber|string|mandatory|The number assigned to this invoice by the energy Retailer|
|issueDate|[DateString](#common-field-types)|mandatory|The date that the invoice was actually issued (as opposed to generated or calculated)|
|dueDate|[DateString](#common-field-types)|optional|The date that the invoice is due to be paid|
|period|object|conditional|Object containing the start and end date for the period covered by the invoice.  Mandatory if any usage or demand based charges are included in the invoice|
|» startDate|[DateString](#common-field-types)|mandatory|The start date of the period covered by this invoice|
|» endDate|[DateString](#common-field-types)|mandatory|The end date of the period covered by this invoice|
|invoiceAmount|[AmountString](#common-field-types)|optional|The net amount due for this invoice regardless of previous balance|
|gstAmount|[AmountString](#common-field-types)|optional|The total GST amount for this invoice.  If absent then zero is assumed|
|payOnTimeDiscount|object|optional|A discount for on time payment|
|» discountAmount|[AmountString](#common-field-types)|mandatory|The amount that will be discounted if the invoice is paid by the date specified|
|» gstAmount|[AmountString](#common-field-types)|optional|The GST amount that will be discounted if the invoice is paid by the date specified.  If absent then zero is assumed|
|» date|[DateString](#common-field-types)|mandatory|The date by which the invoice must be paid to receive the pay on time discount|
|balanceAtIssue|[AmountString](#common-field-types)|mandatory|The account balance at the time the invoice was issued|
|servicePoints|[string]|mandatory|Array of service point IDs to which this invoice applies. May be empty if the invoice contains no electricity usage related charges|
|gas|[EnergyInvoiceGasUsageCharges](#schemacdr-energy-apienergyinvoicegasusagecharges)|optional|Object containing charges and credits related to gas usage|
|electricity|[EnergyInvoiceElectricityUsageCharges](#schemacdr-energy-apienergyinvoiceelectricityusagecharges)|optional|Object containing charges and credits related to electricity usage|
|accountCharges|[EnergyInvoiceAccountCharges](#schemacdr-energy-apienergyinvoiceaccountcharges)|optional|Object contains account level charges and credits related to electricity usage|
|paymentStatus|string|mandatory|Indicator of the payment status for the invoice|

#### Enumerated Values

|Property|Value|
|---|---|
|paymentStatus|PAID|
|paymentStatus|PARTIALLY_PAID|
|paymentStatus|NOT_PAID|

<h3 class="schema-toc" id="tocSenergyinvoicegasusagecharges">EnergyInvoiceGasUsageCharges</h3>

<a id="schemacdr-energy-apienergyinvoicegasusagecharges"></a>

```json
{
  "totalUsageCharges": "string",
  "totalGenerationCredits": "string",
  "totalOnceOffCharges": "string",
  "totalOnceOffDiscounts": "string",
  "otherCharges": [
    {
      "type": "ENVIRONMENTAL",
      "amount": "string",
      "description": "string"
    }
  ],
  "totalGst": "string"
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|totalUsageCharges|[AmountString](#common-field-types)|mandatory|The aggregate total of usage charges for the period covered by the invoice (exclusive of GST)|
|totalGenerationCredits|[AmountString](#common-field-types)|mandatory|The aggregate total of generation credits for the period covered by the invoice (exclusive of GST)|
|totalOnceOffCharges|[AmountString](#common-field-types)|mandatory|The aggregate total of any once off charges arising from electricity usage for the period covered by the invoice (exclusive of GST)|
|totalOnceOffDiscounts|[AmountString](#common-field-types)|mandatory|The aggregate total of any once off discounts or credits arising from electricity usage for the period covered by the invoice (exclusive of GST)|
|otherCharges|[object]|optional|Optional array of charges that may be part of the invoice (for e.g. environmental charges for C&I consumers) (exclusive of GST)|
|» type|string|optional|Type of charge. Assumed to be other if absent|
|» amount|[AmountString](#common-field-types)|mandatory|The aggregate total of charges for this item (exclusive of GST)|
|» description|string|mandatory|A free text description of the type of charge|
|totalGst|[AmountString](#common-field-types)|optional|The total GST for all electricity usage charges.  If absent then zero is assumed|

#### Enumerated Values

|Property|Value|
|---|---|
|type|ENVIRONMENTAL|
|type|REGULATED|
|type|NETWORK|
|type|METERING|
|type|RETAIL_SERVICE|
|type|RCTI|
|type|OTHER|

<h3 class="schema-toc" id="tocSenergyinvoiceelectricityusagecharges">EnergyInvoiceElectricityUsageCharges</h3>

<a id="schemacdr-energy-apienergyinvoiceelectricityusagecharges"></a>

```json
{
  "totalUsageCharges": "string",
  "totalGenerationCredits": "string",
  "totalOnceOffCharges": "string",
  "totalOnceOffDiscounts": "string",
  "otherCharges": [
    {
      "type": "ENVIRONMENTAL",
      "amount": "string",
      "description": "string"
    }
  ],
  "totalGst": "string"
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|totalUsageCharges|[AmountString](#common-field-types)|mandatory|The aggregate total of usage charges for the period covered by the invoice (exclusive of GST)|
|totalGenerationCredits|[AmountString](#common-field-types)|mandatory|The aggregate total of generation credits for the period covered by the invoice (exclusive of GST)|
|totalOnceOffCharges|[AmountString](#common-field-types)|mandatory|The aggregate total of any once off charges arising from electricity usage for the period covered by the invoice (exclusive of GST)|
|totalOnceOffDiscounts|[AmountString](#common-field-types)|mandatory|The aggregate total of any once off discounts or credits arising from electricity usage for the period covered by the invoice (exclusive of GST)|
|otherCharges|[object]|optional|Optional array of charges that may be part of the invoice (for e.g. environmental charges for C&I consumers) (exclusive of GST)|
|» type|string|optional|Type of charge. Assumed to be other if absent|
|» amount|[AmountString](#common-field-types)|mandatory|The aggregate total of charges for this item (exclusive of GST)|
|» description|string|mandatory|A free text description of the type of charge|
|totalGst|[AmountString](#common-field-types)|optional|The total GST for all electricity usage charges.  If absent then zero is assumed|

#### Enumerated Values

|Property|Value|
|---|---|
|type|ENVIRONMENTAL|
|type|REGULATED|
|type|NETWORK|
|type|METERING|
|type|RETAIL_SERVICE|
|type|RCTI|
|type|OTHER|

<h3 class="schema-toc" id="tocSenergyinvoiceaccountcharges">EnergyInvoiceAccountCharges</h3>

<a id="schemacdr-energy-apienergyinvoiceaccountcharges"></a>

```json
{
  "totalCharges": "string",
  "totalDiscounts": "string",
  "totalGst": "string"
}

```

*Object contains account level charges and credits related to electricity usage*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|totalCharges|[AmountString](#common-field-types)|mandatory|The aggregate total of account level charges for the period covered by the invoice|
|totalDiscounts|[AmountString](#common-field-types)|mandatory|The aggregate total of account level discounts or credits for the period covered by the invoice|
|totalGst|[AmountString](#common-field-types)|optional|The total GST for all account level charges.  If absent then zero is assumed|

<h3 class="schema-toc" id="tocSenergybillingtransaction">EnergyBillingTransaction</h3>

<a id="schemacdr-energy-apienergybillingtransaction"></a>

```json
{
  "accountId": "string",
  "executionDateTime": "string",
  "gst": "string",
  "transactionUType": "usage",
  "usage": {
    "servicePointId": "string",
    "invoiceNumber": "string",
    "timeOfUseType": "PEAK",
    "description": "string",
    "isEstimate": true,
    "startDate": "string",
    "endDate": "string",
    "measureUnit": "KWH",
    "usage": 0,
    "amount": "string",
    "calculationFactors": [
      {
        "value": 0,
        "type": "DLF"
      }
    ],
    "adjustments": [
      {
        "amount": "string",
        "description": "string"
      }
    ]
  },
  "demand": {
    "servicePointId": "string",
    "invoiceNumber": "string",
    "timeOfUseType": "PEAK",
    "description": "string",
    "isEstimate": true,
    "startDate": "string",
    "endDate": "string",
    "rate": 0,
    "amount": "string",
    "calculationFactors": [
      {
        "value": 0,
        "type": "DLF"
      }
    ],
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
  "otherCharges": {
    "servicePointId": "string",
    "invoiceNumber": "string",
    "startDate": "string",
    "endDate": "string",
    "type": "ENVIRONMENTAL",
    "amount": "string",
    "description": "string",
    "calculationFactors": [
      {
        "value": 0,
        "type": "DLF"
      }
    ],
    "adjustments": [
      {
        "amount": "string",
        "description": "string"
      }
    ]
  },
  "payment": {
    "amount": "string",
    "method": "DIRECT_DEBIT"
  }
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|accountId|string|mandatory|The ID of the account for which transaction applies|
|executionDateTime|[DateTimeString](#common-field-types)|mandatory|The date and time that the transaction occurred|
|gst|[AmountString](#common-field-types)|optional|The GST incurred in the transaction.  Should not be included for credits or payments.  If absent zero is assumed|
|transactionUType|string|mandatory|Indicator of the type of transaction object present in this record|
|usage|[EnergyBillingUsageTransaction](#schemacdr-energy-apienergybillingusagetransaction)|conditional|Represents a usage charge or generation credit.  Mandatory if transactionUType is equal to usage|
|demand|[EnergyBillingDemandTransaction](#schemacdr-energy-apienergybillingdemandtransaction)|optional|Represents a demand charge or generation credit.  Mandatory if transactionUType is equal to demand|
|onceOff|[EnergyBillingOnceOffTransaction](#schemacdr-energy-apienergybillingonceofftransaction)|conditional|Represents a once off charge or credit.  Mandatory if transactionUType is equal to onceOff|
|otherCharges|[EnergyBillingOtherTransaction](#schemacdr-energy-apienergybillingothertransaction)|optional|Represents charge other than usage and once off.  Mandatory if transactionUType is equal to otherCharge|
|payment|[EnergyBillingPaymentTransaction](#schemacdr-energy-apienergybillingpaymenttransaction)|conditional|Represents a payment to the account.  Mandatory if transactionUType is equal to payment|

#### Enumerated Values

|Property|Value|
|---|---|
|transactionUType|usage|
|transactionUType|demand|
|transactionUType|onceOff|
|transactionUType|otherCharges|
|transactionUType|payment|

<h3 class="schema-toc" id="tocSenergybillingusagetransaction">EnergyBillingUsageTransaction</h3>

<a id="schemacdr-energy-apienergybillingusagetransaction"></a>

```json
{
  "servicePointId": "string",
  "invoiceNumber": "string",
  "timeOfUseType": "PEAK",
  "description": "string",
  "isEstimate": true,
  "startDate": "string",
  "endDate": "string",
  "measureUnit": "KWH",
  "usage": 0,
  "amount": "string",
  "calculationFactors": [
    {
      "value": 0,
      "type": "DLF"
    }
  ],
  "adjustments": [
    {
      "amount": "string",
      "description": "string"
    }
  ]
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|servicePointId|string|optional|The ID of the service point to which this transaction applies if any|
|invoiceNumber|string|optional|The number of the invoice in which this transaction is included if it has been issued|
|timeOfUseType|string|mandatory|The time of use type that the transaction applies to|
|description|string|optional|Optional description of the transaction that can be used for display purposes|
|isEstimate|boolean|optional|Flag indicating if the usage is estimated or actual.  True indicates estimate.  False or absent indicates actual|
|startDate|[DateTimeString](#common-field-types)|mandatory|Date and time when the usage period starts|
|endDate|[DateTimeString](#common-field-types)|mandatory|Date and time when the usage period ends|
|measureUnit|string|optional|The measurement unit of rate. Assumed to be KWH if absent|
|usage|number|mandatory|The usage for the period in measure unit.  A negative value indicates power generated|
|amount|[AmountString](#common-field-types)|mandatory|The amount charged or credited for this transaction prior to any adjustments being applied.  A negative value indicates a credit|
|calculationFactors|[object]|optional|Additional calculation factors that inform the transaction|
|» value|number|mandatory|The value of the calculation factor|
|» type|string|mandatory|The type of the calculation factor|
|adjustments|[object]|optional|Optional array of adjustments arising for this transaction|
|» amount|[AmountString](#common-field-types)|mandatory|The amount of the adjustment|
|» description|string|mandatory|A free text description of the adjustment|

#### Enumerated Values

|Property|Value|
|---|---|
|timeOfUseType|PEAK|
|timeOfUseType|OFF_PEAK|
|timeOfUseType|OFF_PEAK_DEMAND_CHARGE|
|timeOfUseType|SHOULDER|
|timeOfUseType|SHOULDER1|
|timeOfUseType|SHOULDER2|
|timeOfUseType|CONTROLLED_LOAD|
|timeOfUseType|SOLAR|
|timeOfUseType|AGGREGATE|
|measureUnit|KWH|
|measureUnit|KVA|
|measureUnit|KVAR|
|measureUnit|KVARH|
|measureUnit|KW|
|measureUnit|DAYS|
|measureUnit|METER|
|measureUnit|MONTH|
|type|DLF|
|type|MLF|

<h3 class="schema-toc" id="tocSenergybillingdemandtransaction">EnergyBillingDemandTransaction</h3>

<a id="schemacdr-energy-apienergybillingdemandtransaction"></a>

```json
{
  "servicePointId": "string",
  "invoiceNumber": "string",
  "timeOfUseType": "PEAK",
  "description": "string",
  "isEstimate": true,
  "startDate": "string",
  "endDate": "string",
  "rate": 0,
  "amount": "string",
  "calculationFactors": [
    {
      "value": 0,
      "type": "DLF"
    }
  ],
  "adjustments": [
    {
      "amount": "string",
      "description": "string"
    }
  ]
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|servicePointId|string|optional|The ID of the service point to which this transaction applies if any|
|invoiceNumber|string|optional|The number of the invoice in which this transaction is included if it has been issued|
|timeOfUseType|string|mandatory|The time of use type that the transaction applies to|
|description|string|optional|Optional description of the transaction that can be used for display purposes|
|isEstimate|boolean|optional|Flag indicating if the usage is estimated or actual.  True indicates estimate.  False or absent indicates actual|
|startDate|[DateTimeString](#common-field-types)|mandatory|Date and time when the demand period starts|
|endDate|[DateTimeString](#common-field-types)|mandatory|Date and time when the demand period ends|
|rate|number|mandatory|The rate for the demand charge in kVA.  A negative value indicates power generated|
|amount|[AmountString](#common-field-types)|mandatory|The amount charged or credited for this transaction prior to any adjustments being applied.  A negative value indicates a credit|
|calculationFactors|[object]|optional|Additional calculation factors that inform the transaction|
|» value|number|mandatory|The value of the calculation factor|
|» type|string|mandatory|The type of the calculation factor|
|adjustments|[object]|optional|Optional array of adjustments arising for this transaction|
|» amount|[AmountString](#common-field-types)|mandatory|The amount of the adjustment|
|» description|string|mandatory|A free text description of the adjustment|

#### Enumerated Values

|Property|Value|
|---|---|
|timeOfUseType|PEAK|
|timeOfUseType|OFF_PEAK|
|timeOfUseType|OFF_PEAK_DEMAND_CHARGE|
|timeOfUseType|SHOULDER|
|timeOfUseType|SHOULDER1|
|timeOfUseType|SHOULDER2|
|timeOfUseType|CONTROLLED_LOAD|
|timeOfUseType|SOLAR|
|timeOfUseType|AGGREGATE|
|type|DLF|
|type|MLF|

<h3 class="schema-toc" id="tocSenergybillingonceofftransaction">EnergyBillingOnceOffTransaction</h3>

<a id="schemacdr-energy-apienergybillingonceofftransaction"></a>

```json
{
  "servicePointId": "string",
  "invoiceNumber": "string",
  "amount": "string",
  "description": "string"
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|servicePointId|string|optional|The ID of the service point to which this transaction applies if any|
|invoiceNumber|string|optional|The number of the invoice in which this transaction is included if it has been issued|
|amount|[AmountString](#common-field-types)|mandatory|The amount of the charge or credit.  A positive value indicates a charge and a negative value indicates a credit|
|description|string|mandatory|A free text description of the item|

<h3 class="schema-toc" id="tocSenergybillingothertransaction">EnergyBillingOtherTransaction</h3>

<a id="schemacdr-energy-apienergybillingothertransaction"></a>

```json
{
  "servicePointId": "string",
  "invoiceNumber": "string",
  "startDate": "string",
  "endDate": "string",
  "type": "ENVIRONMENTAL",
  "amount": "string",
  "description": "string",
  "calculationFactors": [
    {
      "value": 0,
      "type": "DLF"
    }
  ],
  "adjustments": [
    {
      "amount": "string",
      "description": "string"
    }
  ]
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|servicePointId|string|optional|The ID of the service point to which this transaction applies if any|
|invoiceNumber|string|optional|The number of the invoice in which this transaction is included if it has been issued|
|startDate|[DateString](#common-field-types)|optional|Optional start date for the application of the charge|
|endDate|[DateString](#common-field-types)|optional|Optional end date for the application of the charge|
|type|string|optional|Type of charge. Assumed to be other if absent|
|amount|[AmountString](#common-field-types)|mandatory|The amount of the charge|
|description|string|mandatory|A free text description of the item|
|calculationFactors|[object]|optional|Additional calculation factors that inform the transaction|
|» value|number|mandatory|The value of the calculation factor|
|» type|string|mandatory|The type of the calculation factor|
|adjustments|[object]|optional|Optional array of adjustments arising for this transaction|
|» amount|[AmountString](#common-field-types)|mandatory|The amount of the adjustment|
|» description|string|mandatory|A free text description of the adjustment|

#### Enumerated Values

|Property|Value|
|---|---|
|type|ENVIRONMENTAL|
|type|REGULATED|
|type|NETWORK|
|type|METERING|
|type|RETAIL_SERVICE|
|type|RCTI|
|type|OTHER|
|type|DLF|
|type|MLF|

<h3 class="schema-toc" id="tocSenergybillingpaymenttransaction">EnergyBillingPaymentTransaction</h3>

<a id="schemacdr-energy-apienergybillingpaymenttransaction"></a>

```json
{
  "amount": "string",
  "method": "DIRECT_DEBIT"
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|amount|[AmountString](#common-field-types)|mandatory|The amount paid|
|method|string|mandatory|The method of payment|

#### Enumerated Values

|Property|Value|
|---|---|
|method|DIRECT_DEBIT|
|method|CARD|
|method|TRANSFER|
|method|BPAY|
|method|CASH|
|method|CHEQUE|
|method|OTHER|

<h3 class="schema-toc" id="tocScommonphysicaladdress">CommonPhysicalAddress</h3>

<a id="schemacdr-energy-apicommonphysicaladdress"></a>

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
|simple|[CommonSimpleAddress](#schemacdr-energy-apicommonsimpleaddress)|conditional|Required if addressUType is set to simple|
|paf|[CommonPAFAddress](#schemacdr-energy-apicommonpafaddress)|conditional|Australian address formatted according to the file format defined by the [PAF file format](https://auspost.com.au/content/dam/auspost_corp/media/documents/australia-post-data-guide.pdf). Required if addressUType is set to paf|

#### Enumerated Values

|Property|Value|
|---|---|
|addressUType|paf|
|addressUType|simple|

<h3 class="schema-toc" id="tocScommonsimpleaddress">CommonSimpleAddress</h3>

<a id="schemacdr-energy-apicommonsimpleaddress"></a>

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

<a id="schemacdr-energy-apicommonpafaddress"></a>

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

<h3 class="schema-toc" id="tocSmeta">Meta</h3>

<a id="schemacdr-energy-apimeta"></a>

```json
{}

```

### Properties

*None*

<h3 class="schema-toc" id="tocSlinkspaginated">LinksPaginated</h3>

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

<h3 class="schema-toc" id="tocSmetapaginated">MetaPaginated</h3>

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

