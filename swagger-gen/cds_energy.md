

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

Obtain a list of energy plans that are currently offered to the market

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
        "thirdPartyAgentId": "string",
        "thirdPartyAgentName": "string",
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
          "supplyAreas": [
            {
              "supplyAreaId": "string",
              "displayName": "string",
              "distributor": "string",
              "state": "string"
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

<h3 id="get-generic-plans-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|Inline|

<h3 id="get-generic-plans-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» data|object|true|none|none|
|»» plans|[object]|true|none|Array of plans|
|»»» planId|string|true|none|The ID of the specific plan|
|»»» effectiveFrom|string|false|none|The date and time from which this plan is effective (ie. is available for origination). Used to enable the articulation of products to the regime before they are available for customers to originate|
|»»» effectiveTo|string|false|none|The date and time at which this plan will be retired and will no longer be offered. Used to enable the managed deprecation of plans|
|»»» lastUpdated|string|true|none|The last date and time that the information for this plan was changed (or the creation date for the plan if it has never been altered)|
|»»» displayName|string|false|none|The display name of the plan|
|»»» description|string|false|none|A description of the plan|
|»»» type|string|true|none|The type of the plan|
|»»» fuelType|string|true|none|The fuel types covered by the plan|
|»»» brand|string|true|none|The ID of the brand under which this plan is offered|
|»»» brandName|string|true|none|The display name of the brand under which this plan is offered|
|»»» thirdPartyAgentId|string|false|none|The ID of the Third Party through which this plan may be originated|
|»»» thirdPartyAgentName|string|false|none|The display name of the Third Party through which this plan may be originated|
|»»» applicationUri|string|false|none|A link to an application web page where this plan can be applied for|
|»»» additionalInformation|object|false|none|Object that contains links to additional information on specific topics|
|»»»» overviewUri|string|false|none|A link to a general overview of the plan|
|»»»» termsUri|string|false|none|A link to terms and conditions for the plan|
|»»»» eligibilityUri|string|false|none|A link to detail on eligibility criteria for the plan|
|»»»» pricingUri|string|false|none|A link to detail on pricing for the plan|
|»»»» bundleUri|string|false|none|A link to detail on bundles that this plan can be a part of|
|»»» customerType|string|false|none|The type of customer that the plan is offered to.  If absent then the plan is available to all customers|
|»»» geography|object|false|none|Describes the geographical area that the plan is available for.  If absent then it is assumed the plan is not geographically limited|
|»»»» excludedPostcodes|[string]|false|none|Array of valid Australian post codes that are specifically excluded from the plan|
|»»»» includedPostcodes|[string]|false|none|Array of valid Australian post codes that are included from the plan.  If absent defaults to all non-excluded post codes|
|»»»» supplyAreas|[object]|false|none|Array of supply areas for which this plan is available|
|»»»»» supplyAreaId|string|false|none|ID of the supply area|
|»»»»» displayName|string|false|none|Display name of the supply area|
|»»»»» distributor|string|false|none|The name of the distributor for the supply area|
|»»»»» state|string|false|none|The Australian state that the plan is applicable to.  Valid values are defined by Australia Post PAF code file State Type Abbreviation. For example: NSW, QLD, VIC, NT, WA, SA, TAS, ACT, AAT|
|»»»» links|[linksPaginated](#schemacdr-energy-apilinkspaginated)|true|none|none|
|»»»»» self|string|true|none|Fully qualified link that generated the current response document|
|»»»»» first|string|false|none|URI to the first page of this set. Mandatory if this response is not the first page|
|»»»»» prev|string|false|none|URI to the previous page of this set. Mandatory if this response is not the first page|
|»»»»» next|string|false|none|URI to the next page of this set. Mandatory if this response is not the last page|
|»»»»» last|string|false|none|URI to the last page of this set. Mandatory if this response is not the last page|
|»»»» meta|[metaPaginated](#schemacdr-energy-apimetapaginated)|true|none|none|
|»»»»» totalRecords|integer|true|none|The total number of records in the full set. See [pagination](#pagination).|
|»»»»» totalPages|integer|true|none|The total number of pages in the full set. See [pagination](#pagination).|

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
    "thirdPartyAgentId": "string",
    "thirdPartyAgentName": "string",
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
      "supplyAreas": [
        {
          "supplyAreaId": "string",
          "displayName": "string",
          "distributor": "string",
          "state": "string"
        }
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
      "paymentOption": [
        "PAPER_BILL"
      ],
      "incentives": [
        {
          "displayName": "string",
          "description": "string"
        }
      ],
      "discounts": [
        {
          "displayName": "string",
          "description": "string",
          "type": "CONDITIONAL",
          "category": "PAY_ON_TIME",
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
      "fee": [
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
          "type": "GOVERNMENT",
          "amount": "string",
          "description": "string"
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
            "period": "string",
            "rates": [
              {
                "unitPrice": "string",
                "volume": 0
              }
            ]
          },
          "timeOfUseRates": [
            {
              "displayName": "string",
              "description": "string",
              "type": "PEAK",
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
              "demandCharges": [
                {
                  "displayName": "string",
                  "description": "string",
                  "amount": "string",
                  "startTime": "string",
                  "endTime": "string"
                }
              ]
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
      "paymentOption": [
        "PAPER_BILL"
      ],
      "incentives": [
        {
          "displayName": "string",
          "description": "string"
        }
      ],
      "discounts": [
        {
          "displayName": "string",
          "description": "string",
          "type": "CONDITIONAL",
          "category": "PAY_ON_TIME",
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
      "fee": [
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
          "type": "GOVERNMENT",
          "amount": "string",
          "description": "string"
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
            "period": "string",
            "rates": [
              {
                "unitPrice": "string",
                "volume": 0
              }
            ]
          },
          "timeOfUseRates": [
            {
              "displayName": "string",
              "description": "string",
              "type": "PEAK",
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
              "demandCharges": [
                {
                  "displayName": "string",
                  "description": "string",
                  "amount": "string",
                  "startTime": "string",
                  "endTime": "string"
                }
              ]
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
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|Inline|

<h3 id="get-generic-plan-detail-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» data|object|true|none|none|
|»» planId|string|true|none|The ID of the specific plan|
|»» effectiveFrom|string|false|none|The date and time from which this plan is effective (ie. is available for origination). Used to enable the articulation of products to the regime before they are available for customers to originate|
|»» effectiveTo|string|false|none|The date and time at which this plan will be retired and will no longer be offered. Used to enable the managed deprecation of plans|
|»» lastUpdated|string|true|none|The last date and time that the information for this plan was changed (or the creation date for the plan if it has never been altered)|
|»» displayName|string|false|none|The display name of the plan|
|»» description|string|false|none|A description of the plan|
|»» type|string|true|none|The type of the plan|
|»» fuelType|string|true|none|The fuel types covered by the plan|
|»» brand|string|true|none|The ID of the brand under which this plan is offered|
|»» brandName|string|true|none|The display name of the brand under which this plan is offered|
|»» thirdPartyAgentId|string|false|none|The ID of the Third Party through which this plan may be originated|
|»» thirdPartyAgentName|string|false|none|The display name of the Third Party through which this plan may be originated|
|»» applicationUri|string|false|none|A link to an application web page where this plan can be applied for|
|»» additionalInformation|object|false|none|Object that contains links to additional information on specific topics|
|»»» overviewUri|string|false|none|A link to a general overview of the plan|
|»»» termsUri|string|false|none|A link to terms and conditions for the plan|
|»»» eligibilityUri|string|false|none|A link to detail on eligibility criteria for the plan|
|»»» pricingUri|string|false|none|A link to detail on pricing for the plan|
|»»» bundleUri|string|false|none|A link to detail on bundles that this plan can be a part of|
|»» customerType|string|false|none|The type of customer that the plan is offered to.  If absent then the plan is available to all customers|
|»» geography|object|false|none|Describes the geographical area that the plan is available for.  If absent then it is assumed the plan is not geographically limited|
|»»» excludedPostcodes|[string]|false|none|Array of valid Australian post codes that are specifically excluded from the plan|
|»»» includedPostcodes|[string]|false|none|Array of valid Australian post codes that are included from the plan.  If absent defaults to all non-excluded post codes|
|»»» supplyAreas|[object]|false|none|Array of supply areas for which this plan is available|
|»»»» supplyAreaId|string|false|none|ID of the supply area|
|»»»» displayName|string|false|none|Display name of the supply area|
|»»»» distributor|string|false|none|The name of the distributor for the supply area|
|»»»» state|string|false|none|The Australian state that the plan is applicable to.  Valid values are defined by Australia Post PAF code file State Type Abbreviation. For example: NSW, QLD, VIC, NT, WA, SA, TAS, ACT, AAT|
|»»» meteringCharges|[object]|false|none|Charges for metering included in the plan|
|»»»» displayName|string|true|none|Display name of the charge|
|»»»» description|string|false|none|Description of the charge|
|»»»» minimumValue|string|true|none|Minimum value of the charge if the charge is a range or the absolute value of the charge if no range is specified|
|»»»» maximumValue|string|false|none|The upper limit of the charge if the charge could occur in a range|
|»»»» period|string|false|none|The charges that occur on a schedule indicates the frequency. Formatted according to ISO 8601 Durations (excludes recurrence syntax)|
|»»» gasContract|object|false|none|The details of the terms for the supply of electricity under this plan.  Is mandatory if fuelType is set to GAS or DUAL|
|»»»» additionalFeeInformation|string|false|none|Free text field containing additional information of the fees for this contract|
|»»»» pricingModel|string|true|none|The pricing model for the contract.  Contracts for gas must use SINGLE_RATE.  Note that the detail for the enumeration values are:  * **SINGLE_RATE** - all energy usage is charged at a single unit rate no matter when it is consumed. Multiple unit rates may exist that correspond to varying volumes of usage i.e. a ‘block’ or ‘step’ tariff (first 50kWh @ X cents, next 50kWh at Y cents etc. * **SINGLE_RATE_CONT_LOAD** - as above, but with an additional, separate unit rate charged for all energy usage from a controlled load i.e. separately metered appliance like hot water service, pool pump etc. * **TIME_OF_USE** - energy usage is charged at unit rates that vary dependent on time of day and day of week that the energy is consumed * **TIME_OF_USE_CONT_LOAD** - as above, but with an additional, separate unit rate charged for all energy usage from a controlled load i.e. separately metered appliance like hot water service, pool pump etc. * **QUOTA** - all energy usage is charged at a single fixed rate, up to a specified usage quota/allowance. All excess usage beyond the allowance is then charged at a single unit rate (may not be the best way to explain it but it is essentially a ‘subscription’ or telco style product i.e. $50/month for up to 150kWh included usage|
|»»»» termType|string|false|none|The term for the contract.  If absent assumes no specified term|
|»»»» timeZone|string|false|none|Required if pricingModel is set to TIME_OF_USE.  Defines the time zone to use for calculation of the time of use thresholds|
|»»»» benefitPeriod|string|false|none|Description of the benefit period.  Should only be present if termType has the value ONGOING|
|»»»» terms|string|false|none|Free text description of the terms for the contract|
|»»»» isFixed|boolean|true|none|Flag indicating whether prices are fixed or variable|
|»»»» variation|string|false|none|Free text description of price variation policy and conditions for the contract.  Mandatory if isFixed is true|
|»»»» onExpiryDescription|string|false|none|Free text field that describes what will occur on or prior to expiry of the fixed contract term or benefit period|
|»»»» meterTypes|[string]|false|none|An array of the meter types that this contract is available for|
|»»»» coolingOffDays|string|false|none|Number of days in the cooling off period for the contract.  Mandatory for plans with type of MARKET|
|»»»» billFrequency|[string]|true|none|An array of the available billing schedules for this contract. Formatted according to ISO 8601 Durations (excludes recurrence syntax)|
|»»»» controlledLoad|object|false|none|Required if pricing model is SINGLE_RATE_CONT_LOAD or TIME_OF_USE_CONT_LOAD|
|»»»»» displayName|string|true|none|A display name for the controlled load tier|
|»»»»» description|string|false|none|A description of the controlled load tier|
|»»»»» dailyCharge|string|true|none|The daily supply charge (exclusive of GST) for this controlled load tier|
|»»»»» period|string|true|none|The period for which the controlled load rate applies. Formatted according to ISO 8601 Durations (excludes recurrence syntax)|
|»»»»» rates|[object]|true|none|Array of controlled load rates in order of usage volume|
|»»»»»» unitPrice|string|true|none|Unit price of usage per kWh (exclusive of GST)|
|»»»»»» volume|number|false|none|Volume in kWh that this rate applies to.  Only applicable for ‘stepped’ rates where different rates apply for different volumes of usage in a period|
|»»»»» paymentOption|[string]|true|none|Payment options for this contract|
|»»»»» incentives|[object]|false|none|Optional list of incentives available for the contract|
|»»»»»» displayName|string|true|none|The display name of the incentive|
|»»»»»» description|string|true|none|The description of the incentive|
|»»»»» discounts|[object]|false|none|Optional list of discounts available for the contract|
|»»»»»» displayName|string|true|none|The display name of the discount|
|»»»»»» description|string|false|none|The description of the discount|
|»»»»»» type|string|true|none|The type of the discount|
|»»»»»» category|string|false|none|The type of the discount.  Mandatory if the discount type is CONDITIONAL|
|»»»»»» methodUType|string|true|none|The method of calculation of the discount|
|»»»»»» percentOfBill|object|false|none|Required if methodUType is percentOfBill|
|»»»»»»» rate|string|true|none|The rate of the discount applied to the bill amount (some types of charges may be excluded from this discount based on plan terms)|
|»»»»»» percentOfUse|object|false|none|Required if methodUType is percentOfUse|
|»»»»»»» rate|string|true|none|The rate of the discount applied to the usageamount|
|»»»»»» fixedAmount|object|false|none|Required if methodUType is fixedAmount|
|»»»»»»» amount|string|true|none|The amount of the discount|
|»»»»»» percentOverThreshold|object|false|none|Required if methodUType is percentOverThreshold|
|»»»»»»» rate|string|true|none|The rate of the discount over the usage amount|
|»»»»»»» usageAmount|string|true|none|The usage amount threshold above which the discount applies|
|»»»»»» greenPowerCharges|[object]|false|none|Optional list of charges applicable to green power|
|»»»»»»» displayName|string|true|none|The display name of the charge|
|»»»»»»» description|string|false|none|The description of the charge|
|»»»»»»» type|string|true|none|The type of charge|
|»»»»»»» tiers|[object]|true|none|Array of charge tiers based on the percentage of green power used for the period implied by the type.  Array is in order of increasing percentage of green power|
|»»»»»»»» percentGreen|string|true|none|The upper percentage of green power used applicable for this tier|
|»»»»»»»» rate|string|false|none|The rate of the charge if the type implies the application of a rate|
|»»»»»»»» amount|string|false|none|The amount of the charge if the type implies the application of a fixed amount|
|»»»»»»» eligibility|[object]|false|none|Eligibility restrictions or requirements|
|»»»»»»»» type|string|true|none|The type of the eligibility restriction|
|»»»»»»»» information|string|true|none|Information of the eligibility restriction specific to the type of the restriction|
|»»»»»»»» description|string|false|none|A description of the eligibility restriction|
|»»»»»»» fee|[object]|false|none|An array of fees applicable to the plan|
|»»»»»»»» type|string|true|none|The type of the fee|
|»»»»»»»» term|string|true|none|The term of the fee|
|»»»»»»»» amount|string|false|none|The fee amount. Required if term is not PERCENT_OF_BILL|
|»»»»»»»» rate|string|false|none|The fee rate. Required if term is PERCENT_OF_BILL|
|»»»»»»»» description|string|false|none|A description of the fee|
|»»»»»»» solarFeedInTariff|[object]|false|none|Array of feed in tariffs for solar power|
|»»»»»»»» type|string|true|none|The type of the tariff|
|»»»»»»»» amount|string|false|none|The tariff amount per kWh|
|»»»»»»»» description|string|false|none|A description of the tariff|
|»»»»»»» tariffPeriod|[object]|true|none|Array of tariff periods|
|»»»»»»»» displayName|string|true|none|The name of the tariff period|
|»»»»»»»» startDate|string|false|none|The start date of the tariff period in a calendar year.  Required if there is more than one period.  Formatted in mm-dd format|
|»»»»»»»» endDate|string|false|none|The end date of the tariff period in a calendar year.  Required if there is more than one period.  Formatted in mm-dd format|
|»»»»»»»» dailySupplyCharges|string|true|none|The amount of access charge for the tariff period, in cents per day exclusive of GST.|
|»»»»»»»» rateBlockUType|string|true|none|Specifies the type of rate applicable to this tariff period|
|»»»»»»»» singleRate|object|false|none|Object representing a single rate.  Required if rateBlockUType is singleRate|
|»»»»»»»»» displayName|string|true|none|Display name of the rate|
|»»»»»»»»» description|string|false|none|Description of the rate|
|»»»»»»»»» generalUnitPrice|string|false|none|The block rate (unit price) for any usage above the included fixed usage, in cents per kWh inclusive of GST.  Only required if pricingModel field is ‘QUOTA’|
|»»»»»»»»» period|string|false|none|Usage period for which the block rate applies. Formatted according to ISO 8601 Durations (excludes recurrence syntax)|
|»»»»»»»»» rates|[object]|true|none|Array of controlled load rates in order of usage volume|
|»»»»»»»»»» unitPrice|string|true|none|Unit price of usage per kWh (exclusive of GST)|
|»»»»»»»»»» volume|number|false|none|Volume in kWh that this rate applies to.  Only applicable for ‘stepped’ rates where different rates apply for different volumes of usage in a period|
|»»»»»»»»» timeOfUseRates|[object]|false|none|Array of objects representing time of use rates.  Required if rateBlockUType is timeOfUseRates|
|»»»»»»»»»» displayName|string|true|none|Display name of the rate|
|»»»»»»»»»» description|string|false|none|Description of the rate|
|»»»»»»»»»» type|string|true|none|The type of usage that the rate applies to|
|»»»»»»»»»» rates|[object]|true|none|Array of controlled load rates in order of usage volume|
|»»»»»»»»»»» unitPrice|string|true|none|Unit price of usage per kWh (exclusive of GST)|
|»»»»»»»»»»» volume|number|false|none|Volume in kWh that this rate applies to.  Only applicable for ‘stepped’ rates where different rates apply for different volumes of usage in a period|
|»»»»»»»»»» timeOfUse|[object]|true|none|Array of times of use|
|»»»»»»»»»»» days|[string]|true|none|The days that the rate applies to|
|»»»»»»»»»»» startTime|string|true|none|Start of the period in HHMM format using 24 hour clock format|
|»»»»»»»»»»» endTime|string|true|none|End of the period in HHMM format using 24 hour clock format|
|»»»»»»»»»» demandCharges|[object]|false|none|Array of demand charges|
|»»»»»»»»»»» displayName|string|true|none|Display name of the charge|
|»»»»»»»»»»» description|string|false|none|Description of the charge|
|»»»»»»»»»»» amount|string|false|none|The charge amount per kWh exclusive of GST|
|»»»»»»»»»»» startTime|string|true|none|Start of the period in HHMM format using 24 hour clock format|
|»»»»»»»»»»» endTime|string|true|none|End of the period in HHMM format using 24 hour clock format|
|»»»»»»»»»» electricityContract|object|false|none|The details of the terms for the supply of electricity under this plan.  Is mandatory if fuelType is set to ELECTRICITY or DUAL|
|»»»»»»»»»»» additionalFeeInformation|string|false|none|Free text field containing additional information of the fees for this contract|
|»»»»»»»»»»» pricingModel|string|true|none|The pricing model for the contract.  Contracts for gas must use SINGLE_RATE.  Note that the detail for the enumeration values are:  * **SINGLE_RATE** - all energy usage is charged at a single unit rate no matter when it is consumed. Multiple unit rates may exist that correspond to varying volumes of usage i.e. a ‘block’ or ‘step’ tariff (first 50kWh @ X cents, next 50kWh at Y cents etc. * **SINGLE_RATE_CONT_LOAD** - as above, but with an additional, separate unit rate charged for all energy usage from a controlled load i.e. separately metered appliance like hot water service, pool pump etc. * **TIME_OF_USE** - energy usage is charged at unit rates that vary dependent on time of day and day of week that the energy is consumed * **TIME_OF_USE_CONT_LOAD** - as above, but with an additional, separate unit rate charged for all energy usage from a controlled load i.e. separately metered appliance like hot water service, pool pump etc. * **QUOTA** - all energy usage is charged at a single fixed rate, up to a specified usage quota/allowance. All excess usage beyond the allowance is then charged at a single unit rate (may not be the best way to explain it but it is essentially a ‘subscription’ or telco style product i.e. $50/month for up to 150kWh included usage|
|»»»»»»»»»»» termType|string|false|none|The term for the contract.  If absent assumes no specified term|
|»»»»»»»»»»» timeZone|string|false|none|Required if pricingModel is set to TIME_OF_USE.  Defines the time zone to use for calculation of the time of use thresholds|
|»»»»»»»»»»» benefitPeriod|string|false|none|Description of the benefit period.  Should only be present if termType has the value ONGOING|
|»»»»»»»»»»» terms|string|false|none|Free text description of the terms for the contract|
|»»»»»»»»»»» isFixed|boolean|true|none|Flag indicating whether prices are fixed or variable|
|»»»»»»»»»»» variation|string|false|none|Free text description of price variation policy and conditions for the contract.  Mandatory if isFixed is true|
|»»»»»»»»»»» onExpiryDescription|string|false|none|Free text field that describes what will occur on or prior to expiry of the fixed contract term or benefit period|
|»»»»»»»»»»» meterTypes|[string]|false|none|An array of the meter types that this contract is available for|
|»»»»»»»»»»» coolingOffDays|string|false|none|Number of days in the cooling off period for the contract.  Mandatory for plans with type of MARKET|
|»»»»»»»»»»» billFrequency|[string]|true|none|An array of the available billing schedules for this contract. Formatted according to ISO 8601 Durations (excludes recurrence syntax)|
|»»»»»»»»»»» controlledLoad|object|false|none|Required if pricing model is SINGLE_RATE_CONT_LOAD or TIME_OF_USE_CONT_LOAD|
|»»»»»»»»»»»» displayName|string|true|none|A display name for the controlled load tier|
|»»»»»»»»»»»» description|string|false|none|A description of the controlled load tier|
|»»»»»»»»»»»» dailyCharge|string|true|none|The daily supply charge (exclusive of GST) for this controlled load tier|
|»»»»»»»»»»»» period|string|true|none|The period for which the controlled load rate applies. Formatted according to ISO 8601 Durations (excludes recurrence syntax)|
|»»»»»»»»»»»» rates|[object]|true|none|Array of controlled load rates in order of usage volume|
|»»»»»»»»»»»»» unitPrice|string|true|none|Unit price of usage per kWh (exclusive of GST)|
|»»»»»»»»»»»»» volume|number|false|none|Volume in kWh that this rate applies to.  Only applicable for ‘stepped’ rates where different rates apply for different volumes of usage in a period|
|»»»»»»»»»»»» paymentOption|[string]|true|none|Payment options for this contract|
|»»»»»»»»»»»» incentives|[object]|false|none|Optional list of incentives available for the contract|
|»»»»»»»»»»»»» displayName|string|true|none|The display name of the incentive|
|»»»»»»»»»»»»» description|string|true|none|The description of the incentive|
|»»»»»»»»»»»» discounts|[object]|false|none|Optional list of discounts available for the contract|
|»»»»»»»»»»»»» displayName|string|true|none|The display name of the discount|
|»»»»»»»»»»»»» description|string|false|none|The description of the discount|
|»»»»»»»»»»»»» type|string|true|none|The type of the discount|
|»»»»»»»»»»»»» category|string|false|none|The type of the discount.  Mandatory if the discount type is CONDITIONAL|
|»»»»»»»»»»»»» methodUType|string|true|none|The method of calculation of the discount|
|»»»»»»»»»»»»» percentOfBill|object|false|none|Required if methodUType is percentOfBill|
|»»»»»»»»»»»»»» rate|string|true|none|The rate of the discount applied to the bill amount|
|»»»»»»»»»»»»» percentOfUse|object|false|none|Required if methodUType is percentOfUse|
|»»»»»»»»»»»»»» rate|string|true|none|The rate of the discount applied to the usageamount|
|»»»»»»»»»»»»» fixedAmount|object|false|none|Required if methodUType is fixedAmount|
|»»»»»»»»»»»»»» amount|string|true|none|The amount of the discount|
|»»»»»»»»»»»»» percentOverThreshold|object|false|none|Required if methodUType is percentOverThreshold|
|»»»»»»»»»»»»»» rate|string|true|none|The rate of the discount over the usage amount|
|»»»»»»»»»»»»»» usageAmount|string|true|none|The usage amount threshold above which the discount applies|
|»»»»»»»»»»»»» greenPowerCharges|[object]|false|none|Optional list of charges applicable to green power|
|»»»»»»»»»»»»»» displayName|string|true|none|The display name of the charge|
|»»»»»»»»»»»»»» description|string|false|none|The description of the charge|
|»»»»»»»»»»»»»» type|string|true|none|The type of charge|
|»»»»»»»»»»»»»» tiers|[object]|true|none|Array of charge tiers based on the percentage of green power used for the period implied by the type.  Array is in order of increasing percentage of green power|
|»»»»»»»»»»»»»»» percentGreen|string|true|none|The upper percentage of green power used applicable for this tier|
|»»»»»»»»»»»»»»» rate|string|false|none|The rate of the charge if the type implies the application of a rate|
|»»»»»»»»»»»»»»» amount|string|false|none|The amount of the charge if the type implies the application of a fixed amount|
|»»»»»»»»»»»»»» eligibility|[object]|false|none|Eligibility restrictions or requirements|
|»»»»»»»»»»»»»»» type|string|true|none|The type of the eligibility restriction|
|»»»»»»»»»»»»»»» information|string|true|none|Information of the eligibility restriction specific to the type of the restriction|
|»»»»»»»»»»»»»»» description|string|false|none|A description of the eligibility restriction|
|»»»»»»»»»»»»»» fee|[object]|false|none|An array of fees applicable to the plan|
|»»»»»»»»»»»»»»» type|string|true|none|The type of the fee|
|»»»»»»»»»»»»»»» term|string|true|none|The term of the fee|
|»»»»»»»»»»»»»»» amount|string|false|none|The fee amount. Required if term is not PERCENT_OF_BILL|
|»»»»»»»»»»»»»»» rate|string|false|none|The fee rate. Required if term is PERCENT_OF_BILL|
|»»»»»»»»»»»»»»» description|string|false|none|A description of the fee|
|»»»»»»»»»»»»»» solarFeedInTariff|[object]|false|none|Array of feed in tariffs for solar power|
|»»»»»»»»»»»»»»» type|string|true|none|The type of the tariff|
|»»»»»»»»»»»»»»» amount|string|false|none|The tariff amount per kWh|
|»»»»»»»»»»»»»»» description|string|false|none|A description of the tariff|
|»»»»»»»»»»»»»» tariffPeriod|[object]|true|none|Array of tariff periods|
|»»»»»»»»»»»»»»» displayName|string|true|none|The name of the tariff period|
|»»»»»»»»»»»»»»» startDate|string|false|none|The start date of the tariff period in a calendar year.  Required if there is more than one period.  Formatted in mm-dd format|
|»»»»»»»»»»»»»»» endDate|string|false|none|The end date of the tariff period in a calendar year.  Required if there is more than one period.  Formatted in mm-dd format|
|»»»»»»»»»»»»»»» dailySupplyCharges|string|true|none|The amount of access charge for the tariff period, in cents per day exclusive of GST.|
|»»»»»»»»»»»»»»» rateBlockUType|string|true|none|Specifies the type of rate applicable to this tariff period|
|»»»»»»»»»»»»»»» singleRate|object|false|none|Object representing a single rate.  Required if rateBlockUType is singleRate|
|»»»»»»»»»»»»»»»» displayName|string|true|none|Display name of the rate|
|»»»»»»»»»»»»»»»» description|string|false|none|Description of the rate|
|»»»»»»»»»»»»»»»» generalUnitPrice|string|false|none|The block rate (unit price) for any usage above the included fixed usage, in cents per kWh inclusive of GST.  Only required if pricingModel field is ‘QUOTA’|
|»»»»»»»»»»»»»»»» period|string|false|none|Usage period for which the block rate applies. Formatted according to ISO 8601 Durations (excludes recurrence syntax)|
|»»»»»»»»»»»»»»»» rates|[object]|true|none|Array of controlled load rates in order of usage volume|
|»»»»»»»»»»»»»»»»» unitPrice|string|true|none|Unit price of usage per kWh (exclusive of GST)|
|»»»»»»»»»»»»»»»»» volume|number|false|none|Volume in kWh that this rate applies to.  Only applicable for ‘stepped’ rates where different rates apply for different volumes of usage in a period|
|»»»»»»»»»»»»»»»» timeOfUseRates|[object]|false|none|Array of objects representing time of use rates.  Required if rateBlockUType is timeOfUseRates|
|»»»»»»»»»»»»»»»»» displayName|string|true|none|Display name of the rate|
|»»»»»»»»»»»»»»»»» description|string|false|none|Description of the rate|
|»»»»»»»»»»»»»»»»» type|string|true|none|The type of usage that the rate applies to|
|»»»»»»»»»»»»»»»»» rates|[object]|true|none|Array of controlled load rates in order of usage volume|
|»»»»»»»»»»»»»»»»»» unitPrice|string|true|none|Unit price of usage per kWh (exclusive of GST)|
|»»»»»»»»»»»»»»»»»» volume|number|false|none|Volume in kWh that this rate applies to.  Only applicable for ‘stepped’ rates where different rates apply for different volumes of usage in a period|
|»»»»»»»»»»»»»»»»» timeOfUse|[object]|true|none|Array of times of use|
|»»»»»»»»»»»»»»»»»» days|[string]|true|none|The days that the rate applies to|
|»»»»»»»»»»»»»»»»»» startTime|string|true|none|Start of the period in HHMM format using 24 hour clock format|
|»»»»»»»»»»»»»»»»»» endTime|string|true|none|End of the period in HHMM format using 24 hour clock format|
|»»»»»»»»»»»»»»»»» demandCharges|[object]|false|none|Array of demand charges|
|»»»»»»»»»»»»»»»»»» displayName|string|true|none|Display name of the charge|
|»»»»»»»»»»»»»»»»»» description|string|false|none|Description of the charge|
|»»»»»»»»»»»»»»»»»» amount|string|false|none|The charge amount per kWh exclusive of GST|
|»»»»»»»»»»»»»»»»»» startTime|string|true|none|Start of the period in HHMM format using 24 hour clock format|
|»»»»»»»»»»»»»»»»»» endTime|string|true|none|End of the period in HHMM format using 24 hour clock format|
|»»»»»»»»»»»»»»»»» links|[links](#schemacdr-energy-apilinks)|true|none|none|
|»»»»»»»»»»»»»»»»»» self|string|true|none|Fully qualified link that generated the current response document|
|»»»»»»»»»»»»»»»»» meta|[meta](#schemacdr-energy-apimeta)|true|none|none|

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
|term|WEEKLY|
|term|MONTHLY|
|term|BIANNUAL|
|type|GOVERNMENT|
|type|RETAILER|
|rateBlockUType|singleRate|
|rateBlockUType|timeOfUseRates|
|type|PEAK|
|type|OFF_PEAK|
|type|OFF_PEAK_DC|
|type|SHOULDER|
|type|SHOULDER1|
|type|SHOULDER2|
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
|term|WEEKLY|
|term|MONTHLY|
|term|BIANNUAL|
|type|GOVERNMENT|
|type|RETAILER|
|rateBlockUType|singleRate|
|rateBlockUType|timeOfUseRates|
|type|PEAK|
|type|OFF_PEAK|
|type|OFF_PEAK_DC|
|type|SHOULDER|
|type|SHOULDER1|
|type|SHOULDER2|

  
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

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» data|object|true|none|none|
|»» servicePoints|[object]|true|none|none|
|»»» servicePointId|string|true|none|The ID of the service point for use in the CDR APIs.  Created according to the rules for ID permanence|
|»»» nationalMeteringId|string|true|none|The independent ID of the service point, known in the industry as the NMI|
|»»» servicePointClassification|string|true|none|The classification of the service point as defined in MSATS procedures|
|»»» servicePointStatus|string|true|none|Code used to indicate the status of the service point|
|»»» jurisdictionCode|string|true|none|Jurisdiction code to which the service point belongs.This code defines the jurisdictional rules which apply to the service point|
|»»» isGenerator|boolean|false|none|This flag determines whether the energy at this connection point is to be treated as consumer load or as a generating unit(this may include generator auxiliary loads).If absent defaults to false|
|»»» validFromDate|string|true|none|The start date from which this service point first became valid|
|»»» lastUpdateDateTime|string|true|none|The date and time that the information for this service point was modified|
|»»» consumerProfile|object|false|none|none|
|»»»» classification|string|false|none|A code that defines the consumer class as defined in the National Energy Retail Regulations, or in overriding Jurisdictional instruments|
|»»»» threshold|any|false|none|A code that defines the consumption threshold as defined in the National Energy Retail Regulations, or in overriding Jurisdictional instruments|
|»»» links|[linksPaginated](#schemacdr-energy-apilinkspaginated)|true|none|none|
|»»»» self|string|true|none|Fully qualified link that generated the current response document|
|»»»» first|string|false|none|URI to the first page of this set. Mandatory if this response is not the first page|
|»»»» prev|string|false|none|URI to the previous page of this set. Mandatory if this response is not the first page|
|»»»» next|string|false|none|URI to the next page of this set. Mandatory if this response is not the last page|
|»»»» last|string|false|none|URI to the last page of this set. Mandatory if this response is not the last page|
|»»» meta|[metaPaginated](#schemacdr-energy-apimetapaginated)|true|none|none|
|»»»» totalRecords|integer|true|none|The total number of records in the full set. See [pagination](#pagination).|
|»»»» totalPages|integer|true|none|The total number of pages in the full set. See [pagination](#pagination).|

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

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» data|object|true|none|none|
|»» servicePointId|string|true|none|The ID of the service point for use in the CDR APIs.  Created according to the rules for ID permanence|
|»» nationalMeteringId|string|true|none|The independent ID of the service point, known in the industry as the NMI|
|»» servicePointClassification|string|true|none|The classification of the service point as defined in MSATS procedures|
|»» servicePointStatus|string|true|none|Code used to indicate the status of the service point|
|»» jurisdictionCode|string|true|none|Jurisdiction code to which the service point belongs.This code defines the jurisdictional rules which apply to the service point|
|»» isGenerator|boolean|false|none|This flag determines whether the energy at this connection point is to be treated as consumer load or as a generating unit(this may include generator auxiliary loads).If absent defaults to false|
|»» lastUpdateDateTime|string|true|none|The date and time that the information for this service point was modified|
|»» creationDateTime|string|false|none|The date and time that this service point was created as a data entity|
|»» consumerProfile|object|false|none|none|
|»»» classification|string|false|none|A code that defines the consumer class as defined in the National Energy Retail Regulations, or in overriding Jurisdictional instruments|
|»»» threshold|any|false|none|A code that defines the consumption threshold as defined in the National Energy Retail Regulations, or in overriding Jurisdictional instruments|
|»» distributionLossFactor|object|true|none|none|
|»»» code|string|true|none|A code used to identify data loss factor for the service point values.  Refer to AEMO distribution loss factor documents for each financial year to interpret|
|»»» description|string|true|none|Description of the data loss factor code and value|
|»»» lossValue|string|true|none|The value associated with the loss factor code|
|»» relatedParticipants|[object]|true|none|none|
|»»» party|string|true|none|An identifier of the party related to this service point|
|»»» role|string|true|none|The role performed by this participant in relation to the service point|
|»»» location|object|true|none|none|
|»»»» addressUType|string|true|none|The type of address object present|
|»»»» simple|object|false|none|The address of the service point.  Mandatory if addressUType is set to simple|
|»»»»» mailingName|string|false|none|Name of the individual or business formatted for inclusion in an address used for physical mail|
|»»»»» addressLine1|string|true|none|First line of the standard address object|
|»»»»» addressLine2|string|false|none|Second line of the standard address object|
|»»»»» addressLine3|string|false|none|Third line of the standard address object|
|»»»»» postcode|string|false|none|Mandatory for Australian addresses|
|»»»»» city|string|true|none|Name of the city or locality|
|»»»»» state|string|true|none|Free text if the country is not Australia. If country is Australia then must be one of the values defined by the [State Type Abbreviation](https://auspost.com.au/content/dam/auspost_corp/media/documents/australia-post-data-guide.pdf) in the PAF file format. NSW, QLD, VIC, NT, WA, SA, TAS, ACT, AAT|
|»»»»» country|string|false|none|A valid [ISO 3166 Alpha-3](https://www.iso.org/iso-3166-country-codes.html) country code. Australia (AUS) is assumed if country is not present.|
|»»»» paf|object|false|none|The address of the service point.  Mandatory if addressUType is set to paf. Formatted according to the file format defined by the [PAF file format](https://auspost.com.au/content/dam/auspost_corp/media/documents/australia-post-data-guide.pdf)|
|»»»»» dpid|string|false|none|Unique identifier for an address as defined by Australia Post.  Also known as Delivery Point Identifier|
|»»»»» thoroughfareNumber1|integer|false|none|Thoroughfare number for a property (first number in a property ranged address)|
|»»»»» thoroughfareNumber1Suffix|string|false|none|Suffix for the thoroughfare number. Only relevant is thoroughfareNumber1 is populated|
|»»»»» thoroughfareNumber2|integer|false|none|Second thoroughfare number (only used if the property has a ranged address eg 23-25)|
|»»»»» thoroughfareNumber2Suffix|string|false|none|Suffix for the second thoroughfare number. Only relevant is thoroughfareNumber2 is populated|
|»»»»» flatUnitType|string|false|none|Type of flat or unit for the address|
|»»»»» flatUnitNumber|string|false|none|Unit number (including suffix, if applicable)|
|»»»»» floorLevelType|string|false|none|Type of floor or level for the address|
|»»»»» floorLevelNumber|string|false|none|Floor or level number (including alpha characters)|
|»»»»» lotNumber|string|false|none|Allotment number for the address|
|»»»»» buildingName1|string|false|none|Building/Property name 1|
|»»»»» buildingName2|string|false|none|Building/Property name 2|
|»»»»» streetName|string|false|none|The name of the street|
|»»»»» streetType|string|false|none|The street type. Valid enumeration defined by Australia Post PAF code file|
|»»»»» streetSuffix|string|false|none|The street type suffix. Valid enumeration defined by Australia Post PAF code file|
|»»»»» postalDeliveryType|string|false|none|Postal delivery type. (eg. PO BOX). Valid enumeration defined by Australia Post PAF code file|
|»»»»» postalDeliveryNumber|integer|false|none|Postal delivery number if the address is a postal delivery type|
|»»»»» postalDeliveryNumberPrefix|string|false|none|Postal delivery number prefix related to the postal delivery number|
|»»»»» postalDeliveryNumberSuffix|string|false|none|Postal delivery number suffix related to the postal delivery number|
|»»»»» localityName|string|true|none|Full name of locality|
|»»»»» postcode|string|true|none|Postcode for the locality|
|»»»»» state|string|true|none|State in which the address belongs. Valid enumeration defined by Australia Post PAF code file [State Type Abbreviation](https://auspost.com.au/content/dam/auspost_corp/media/documents/australia-post-data-guide.pdf). NSW, QLD, VIC, NT, WA, SA, TAS, ACT, AAT|
|»»»» meters|object|true|none|none|
|»»»»» meterId|string|true|none|The meter ID uniquely identifies a meter for a given service point.  Is unique in the context of the service point.  Is not globally unique|
|»»»»» specifications|object|true|none|Technical characteristics of the meter|
|»»»»»» status|string|true|none|A code to denote the status of the meter|
|»»»»»» installationType|string|true|none|The metering Installation type code indicates whether the metering installation has to be manually read|
|»»»»»» manufacturer|string|false|none|Free text field to identify the manufacturer of the installed meter|
|»»»»»» model|string|false|none|Free text field to identify the meter manufacturer’s designation for the meter model|
|»»»»»» readType|string|false|none|Code to denote the method and frequency of Meter Reading|
|»»»»» streams|object|true|none|Usage data streams available from the meter|
|»»»»»» streamId|string|true|none|Unique identifier of the stream within this service point.  Is not globally unique|
|»»»»»» averagedDailyLoad|number|false|none|The energy delivered through a connection point or metering point over an extended period normalised to a 'per day' basis (kWh)|
|»»»»»» registerConsumptionType|string|true|none|Indicates the consumption type of register|
|»»»»»» networkTariffType|string|true|none|The Network Tariff Code is a free text field containing a code supplied and published by the local network service provider|
|»»»»»» unitOfMeasure|string|false|none|The unit of measure for data held in this register|
|»»»»»» timeOfDay|string|false|none|Code to identify the time validity of register contents|
|»»»»»» multiplier|number|false|none|Multiplier required to take a register value and turn it into a value representing billable energy|
|»»»»»» controlledLoad|string|false|none|Indicates whether the energy recorded by this register is created under a Controlled Load regime. ControlledLoad field will have 'No' if register does not relate to a Controlled Load.  If the register relates to a Controlled Load, it should contain a description of the Controlled Load regime.|
|»»»»»» consumptionType|string|false|none|Actual/Subtractive Indicator|
|»»»»» links|[links](#schemacdr-energy-apilinks)|true|none|none|
|»»»»»» self|string|true|none|Fully qualified link that generated the current response document|
|»»»»» meta|[meta](#schemacdr-energy-apimeta)|true|none|none|

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

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» data|object|true|none|none|
|»» reads|[object]|true|none|Array of meter reads|
|»»» servicePointId|string|true|none|Tokenised ID of the service point to be used for referring to the service point in the CDR API suite.  To be created in accordance with CDR ID permanence requirements|
|»»» registerId|string|false|none|Register ID of the meter register where the meter reads are obtained|
|»»» registerSuffix|string|true|none|Register suffix of the meter register where the meter reads are obtained|
|»»» meterSerial|string|false|none|Meter serial number as it appears in customer’s bill|
|»»» readStartDate|string|true|none|Date time when the meter reads start|
|»»» readEndDate|string|false|none|Date time when the meter reads end.  If absent then assumed to be equal to readStartDate.  In this case the entry represents data for a single date specified by readStartDate|
|»»» unitOfMeasure|string|false|none|Unit of measure of the meter reads. If absent then assumed to be KWH|
|»»» readUType|string|true|none|Specify the type of the meter read data|
|»»» basicRead|object|false|none|Mandatory if readUType is set to basicRead|
|»»»» quality|string|false|none|The quality of the read taken.  If absent then assumed to be ACTUAL|
|»»»» value|number|true|none|Meter read value.  If positive then it means consumption, if negative it means export|
|»»» intervalRead|object|false|none|Mandatory if readUType is set to intervalRead|
|»»»» readIntervalLength|string|false|none|Read interval length in minutes|
|»»»» aggregateValue|number|true|none|The aggregate sum of the interval read values.  If positive then it means net consumption, if negative it means net export from the premise|
|»»»» intervalReads|[object]|true|none|Array of reads with each element indicating the read for the interval specified by readIntervalLength beginning at midnight of readStartDate|
|»»»»» quality|string|false|none|The quality of the read taken.  If absent then assumed to be ACTUAL|
|»»»»» value|number|true|none|Interval value.  If positive then it means consumption, if negative it means export|
|»»»» links|[linksPaginated](#schemacdr-energy-apilinkspaginated)|true|none|none|
|»»»»» self|string|true|none|Fully qualified link that generated the current response document|
|»»»»» first|string|false|none|URI to the first page of this set. Mandatory if this response is not the first page|
|»»»»» prev|string|false|none|URI to the previous page of this set. Mandatory if this response is not the first page|
|»»»»» next|string|false|none|URI to the next page of this set. Mandatory if this response is not the last page|
|»»»»» last|string|false|none|URI to the last page of this set. Mandatory if this response is not the last page|
|»»»» meta|[metaPaginated](#schemacdr-energy-apimetapaginated)|true|none|none|
|»»»»» totalRecords|integer|true|none|The total number of records in the full set. See [pagination](#pagination).|
|»»»»» totalPages|integer|true|none|The total number of pages in the full set. See [pagination](#pagination).|

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

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» data|object|true|none|none|
|»» reads|[object]|true|none|Array of meter reads|
|»»» servicePointId|string|true|none|Tokenised ID of the service point to be used for referring to the service point in the CDR API suite.  To be created in accordance with CDR ID permanence requirements|
|»»» registerId|string|false|none|Register ID of the meter register where the meter reads are obtained|
|»»» registerSuffix|string|true|none|Register suffix of the meter register where the meter reads are obtained|
|»»» meterSerial|string|false|none|Meter serial number as it appears in customer’s bill|
|»»» readStartDate|string|true|none|Date time when the meter reads start|
|»»» readEndDate|string|false|none|Date time when the meter reads end.  If absent then assumed to be equal to readStartDate.  In this case the entry represents data for a single date specified by readStartDate|
|»»» unitOfMeasure|string|false|none|Unit of measure of the meter reads. If absent then assumed to be KWH|
|»»» readUType|string|true|none|Specify the type of the meter read data|
|»»» basicRead|object|false|none|Mandatory if readUType is set to basicRead|
|»»»» quality|string|false|none|The quality of the read taken.  If absent then assumed to be ACTUAL|
|»»»» value|number|true|none|Meter read value.  If positive then it means consumption, if negative it means export|
|»»» intervalRead|object|false|none|Mandatory if readUType is set to intervalRead|
|»»»» readIntervalLength|string|false|none|Read interval length in minutes|
|»»»» aggregateValue|number|true|none|The aggregate sum of the interval read values.  If positive then it means net consumption, if negative it means net export from the premise|
|»»»» intervalReads|[object]|true|none|Array of reads with each element indicating the read for the interval specified by readIntervalLength beginning at midnight of readStartDate|
|»»»»» quality|string|false|none|The quality of the read taken.  If absent then assumed to be ACTUAL|
|»»»»» value|number|true|none|Interval value.  If positive then it means consumption, if negative it means export|
|»»»» links|[linksPaginated](#schemacdr-energy-apilinkspaginated)|true|none|none|
|»»»»» self|string|true|none|Fully qualified link that generated the current response document|
|»»»»» first|string|false|none|URI to the first page of this set. Mandatory if this response is not the first page|
|»»»»» prev|string|false|none|URI to the previous page of this set. Mandatory if this response is not the first page|
|»»»»» next|string|false|none|URI to the next page of this set. Mandatory if this response is not the last page|
|»»»»» last|string|false|none|URI to the last page of this set. Mandatory if this response is not the last page|
|»»»» meta|[metaPaginated](#schemacdr-energy-apimetapaginated)|true|none|none|
|»»»»» totalRecords|integer|true|none|The total number of records in the full set. See [pagination](#pagination).|
|»»»»» totalPages|integer|true|none|The total number of pages in the full set. See [pagination](#pagination).|

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
|» meta|body|[meta](#schemacdr-energy-apimeta)|mandatory|none|

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

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» data|object|true|none|none|
|»» reads|[object]|true|none|Array of meter reads|
|»»» servicePointId|string|true|none|Tokenised ID of the service point to be used for referring to the service point in the CDR API suite.  To be created in accordance with CDR ID permanence requirements|
|»»» registerId|string|false|none|Register ID of the meter register where the meter reads are obtained|
|»»» registerSuffix|string|true|none|Register suffix of the meter register where the meter reads are obtained|
|»»» meterSerial|string|false|none|Meter serial number as it appears in customer’s bill|
|»»» readStartDate|string|true|none|Date time when the meter reads start|
|»»» readEndDate|string|false|none|Date time when the meter reads end.  If absent then assumed to be equal to readStartDate.  In this case the entry represents data for a single date specified by readStartDate|
|»»» unitOfMeasure|string|false|none|Unit of measure of the meter reads. If absent then assumed to be KWH|
|»»» readUType|string|true|none|Specify the type of the meter read data|
|»»» basicRead|object|false|none|Mandatory if readUType is set to basicRead|
|»»»» quality|string|false|none|The quality of the read taken.  If absent then assumed to be ACTUAL|
|»»»» value|number|true|none|Meter read value.  If positive then it means consumption, if negative it means export|
|»»» intervalRead|object|false|none|Mandatory if readUType is set to intervalRead|
|»»»» readIntervalLength|string|false|none|Read interval length in minutes|
|»»»» aggregateValue|number|true|none|The aggregate sum of the interval read values.  If positive then it means net consumption, if negative it means net export from the premise|
|»»»» intervalReads|[object]|true|none|Array of reads with each element indicating the read for the interval specified by readIntervalLength beginning at midnight of readStartDate|
|»»»»» quality|string|false|none|The quality of the read taken.  If absent then assumed to be ACTUAL|
|»»»»» value|number|true|none|Interval value.  If positive then it means consumption, if negative it means export|
|»»»» links|[linksPaginated](#schemacdr-energy-apilinkspaginated)|true|none|none|
|»»»»» self|string|true|none|Fully qualified link that generated the current response document|
|»»»»» first|string|false|none|URI to the first page of this set. Mandatory if this response is not the first page|
|»»»»» prev|string|false|none|URI to the previous page of this set. Mandatory if this response is not the first page|
|»»»»» next|string|false|none|URI to the next page of this set. Mandatory if this response is not the last page|
|»»»»» last|string|false|none|URI to the last page of this set. Mandatory if this response is not the last page|
|»»»» meta|[metaPaginated](#schemacdr-energy-apimetapaginated)|true|none|none|
|»»»»» totalRecords|integer|true|none|The total number of records in the full set. See [pagination](#pagination).|
|»»»»» totalPages|integer|true|none|The total number of pages in the full set. See [pagination](#pagination).|

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

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» data|[derRecord](#schemacdr-energy-apiderrecord)|true|none|none|
|»» servicePointId|string|true|none|Tokenised ID of the service point to be used for referring to the service point in the CDR API suite.  To be created in accordance with CDR ID permanence requirements|
|»» approvedCapacity|number|true|none|Approved small generating unit capacity as agreed with NSP in the connection agreement, expressed in kVA|
|»» availablePhasesCount|number|true|none|The number of phases available for the installation of DER|
|»» installedPhasesCount|number|true|none|The number of phases that DER is installed on|
|»» islandableInstallation|string|true|none|For identification of small generating units designed with the ability to operate in an islanded mode|
|»» hasCentralProtectionControl|boolean|false|none|For DER installations where NSPs specify the need for additional forms of protection above those inbuilt in an inverter.  If absent then assumed to be false|
|»» protectionMode|object|false|none|Required only when the hasCentralProtectionAndControl flag is set to true|
|»»» exportLimitkva|number|false|none|Maximum amount of power (kVA) that may be exported from a connection point to the grid, as monitored by a control / relay function. A null value indicates no limit|
|»»» underFrequencyProtection|number|false|none|Protective function limit. Default value 47 Hz according to AS4777-1: 2016 Table 2|
|»»» underFrequencyProtectionDelay|number|false|none|Trip delay time in seconds. Default value 2 seconds according to AS4777-1: 2016 Table 2|
|»»» overFrequencyProtection|number|false|none|Protective function limit. Default value 52 Hz according to AS4777-1: 2016 Table 2|
|»»» overFrequencyProtectionDelay|number|false|none|Trip delay time in seconds. Default value 2 seconds according to AS4777-1: 2016 Table 2|
|»»» underVoltageProtection|number|false|none|Protective function limit. Default value 180V according to AS4777-1: 2016 Table 2|
|»»» underVoltageProtectionDelay|number|false|none|Trip delay time in seconds. Default value 2 seconds according to AS4777-1: 2016 Table 2|
|»»» overVoltageProtection|number|false|none|Protective function limit. Default value 260 V according to AS4777-1: 2016 Table 2|
|»»» overVoltageProtectionDelay|number|false|none|Trip delay time in seconds. Default value 2 seconds according to AS4777-1: 2016 Table 2|
|»»» sustainedOverVoltage|number|false|none|Sustained over voltage|
|»»» sustainedOverVoltageDelay|number|false|none|Trip delay time in seconds|
|»»» frequencyRateOfChange|number|false|none|Rate of change of frequency trip point (Hz/s)|
|»»» voltageVectorShift|number|false|none|Trip angle in degrees|
|»»» interTripScheme|string|false|none|Description of the form of inter-trip (e.g. 'from local substation')|
|»»» neutralVoltageDisplacement|number|false|none|Trip voltage|
|»» acConnections|[object]|false|none|none|
|»»» connectionIdentifier|number|true|none|AC Connection ID as defined in the DER register.  Does not align with CDR ID permanence standards|
|»»» count|string|true|none|Number of AC Connections in the group. For the suite of AC Connections to be considered as a group, all of the AC Connections included must have the same attributes|
|»»» equipmentType|string|false|none|Indicates whether the DER device is connected via an inverter (and what category of inverter it is) or not (e.g. rotating machine)|
|»»» manufacturerName|string|false|none|The name of the inverter manufacturer|
|»»» inverterSeries|string|false|none|The inverter series|
|»»» inverterModelNumber|string|false|none|The inverter model number|
|»»» commissioningDate|string|false|none|The date that the DER installation is commissioned|
|»»» installationStage|string|false|none|Description of the installation stage|
|»»» status|string|false|none|Code used to indicate the status of the Inverter. This will be used to identify if an inverter is active or inactive or decommissioned|
|»»» inverterDeviceCapacity|number|false|none|The rated AC output power that is listed in the product specified by the manufacturer|
|»»» derDevices|[object]|false|none|none|
|»»»» count|number|true|none|Number of devices in the group of DER devices|
|»»»» manufacturer|string|false|none|The name of the device manufacturer|
|»»»» modelNumber|string|false|none|The model number of the device|
|»»»» status|string|false|none|Code used to indicate the status of the device. This will be used to identify if an inverter is active or inactive or decommissioned|
|»»»» installationStage|number|false|none|Description of the device installation stage|
|»»»» type|string|false|none|Used to indicate the primary technology used in the DER device|
|»»»» subtype|string|false|none|This field is also used to record for example the battery chemistry, or the type of PV panel. It is also used to record if a battery is contained in an electric vehicle connected in a vehicle-to-grid arrangement|
|»»»» nominalRatedCapacity|number|false|none|Maximum output in kVA that is listed in the product specification by the manufacturer. This refers to the capacity of each unit within the device group|
|»»»» nominalStorageCapacity|number|false|none|Maximum storage capacity in kVAh. This refers to the capacity of each storage module within the device group|
|»»» links|[links](#schemacdr-energy-apilinks)|true|none|none|
|»»»» self|string|true|none|Fully qualified link that generated the current response document|
|»»» meta|[meta](#schemacdr-energy-apimeta)|true|none|none|

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

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» data|object|true|none|none|
|»» derRecords|[[derRecord](#schemacdr-energy-apiderrecord)]|true|none|Array of meter reads|
|»»» servicePointId|string|true|none|Tokenised ID of the service point to be used for referring to the service point in the CDR API suite.  To be created in accordance with CDR ID permanence requirements|
|»»» approvedCapacity|number|true|none|Approved small generating unit capacity as agreed with NSP in the connection agreement, expressed in kVA|
|»»» availablePhasesCount|number|true|none|The number of phases available for the installation of DER|
|»»» installedPhasesCount|number|true|none|The number of phases that DER is installed on|
|»»» islandableInstallation|string|true|none|For identification of small generating units designed with the ability to operate in an islanded mode|
|»»» hasCentralProtectionControl|boolean|false|none|For DER installations where NSPs specify the need for additional forms of protection above those inbuilt in an inverter.  If absent then assumed to be false|
|»»» protectionMode|object|false|none|Required only when the hasCentralProtectionAndControl flag is set to true|
|»»»» exportLimitkva|number|false|none|Maximum amount of power (kVA) that may be exported from a connection point to the grid, as monitored by a control / relay function. A null value indicates no limit|
|»»»» underFrequencyProtection|number|false|none|Protective function limit. Default value 47 Hz according to AS4777-1: 2016 Table 2|
|»»»» underFrequencyProtectionDelay|number|false|none|Trip delay time in seconds. Default value 2 seconds according to AS4777-1: 2016 Table 2|
|»»»» overFrequencyProtection|number|false|none|Protective function limit. Default value 52 Hz according to AS4777-1: 2016 Table 2|
|»»»» overFrequencyProtectionDelay|number|false|none|Trip delay time in seconds. Default value 2 seconds according to AS4777-1: 2016 Table 2|
|»»»» underVoltageProtection|number|false|none|Protective function limit. Default value 180V according to AS4777-1: 2016 Table 2|
|»»»» underVoltageProtectionDelay|number|false|none|Trip delay time in seconds. Default value 2 seconds according to AS4777-1: 2016 Table 2|
|»»»» overVoltageProtection|number|false|none|Protective function limit. Default value 260 V according to AS4777-1: 2016 Table 2|
|»»»» overVoltageProtectionDelay|number|false|none|Trip delay time in seconds. Default value 2 seconds according to AS4777-1: 2016 Table 2|
|»»»» sustainedOverVoltage|number|false|none|Sustained over voltage|
|»»»» sustainedOverVoltageDelay|number|false|none|Trip delay time in seconds|
|»»»» frequencyRateOfChange|number|false|none|Rate of change of frequency trip point (Hz/s)|
|»»»» voltageVectorShift|number|false|none|Trip angle in degrees|
|»»»» interTripScheme|string|false|none|Description of the form of inter-trip (e.g. 'from local substation')|
|»»»» neutralVoltageDisplacement|number|false|none|Trip voltage|
|»»» acConnections|[object]|false|none|none|
|»»»» connectionIdentifier|number|true|none|AC Connection ID as defined in the DER register.  Does not align with CDR ID permanence standards|
|»»»» count|string|true|none|Number of AC Connections in the group. For the suite of AC Connections to be considered as a group, all of the AC Connections included must have the same attributes|
|»»»» equipmentType|string|false|none|Indicates whether the DER device is connected via an inverter (and what category of inverter it is) or not (e.g. rotating machine)|
|»»»» manufacturerName|string|false|none|The name of the inverter manufacturer|
|»»»» inverterSeries|string|false|none|The inverter series|
|»»»» inverterModelNumber|string|false|none|The inverter model number|
|»»»» commissioningDate|string|false|none|The date that the DER installation is commissioned|
|»»»» installationStage|string|false|none|Description of the installation stage|
|»»»» status|string|false|none|Code used to indicate the status of the Inverter. This will be used to identify if an inverter is active or inactive or decommissioned|
|»»»» inverterDeviceCapacity|number|false|none|The rated AC output power that is listed in the product specified by the manufacturer|
|»»»» derDevices|[object]|false|none|none|
|»»»»» count|number|true|none|Number of devices in the group of DER devices|
|»»»»» manufacturer|string|false|none|The name of the device manufacturer|
|»»»»» modelNumber|string|false|none|The model number of the device|
|»»»»» status|string|false|none|Code used to indicate the status of the device. This will be used to identify if an inverter is active or inactive or decommissioned|
|»»»»» installationStage|number|false|none|Description of the device installation stage|
|»»»»» type|string|false|none|Used to indicate the primary technology used in the DER device|
|»»»»» subtype|string|false|none|This field is also used to record for example the battery chemistry, or the type of PV panel. It is also used to record if a battery is contained in an electric vehicle connected in a vehicle-to-grid arrangement|
|»»»»» nominalRatedCapacity|number|false|none|Maximum output in kVA that is listed in the product specification by the manufacturer. This refers to the capacity of each unit within the device group|
|»»»»» nominalStorageCapacity|number|false|none|Maximum storage capacity in kVAh. This refers to the capacity of each storage module within the device group|
|»»»» links|[linksPaginated](#schemacdr-energy-apilinkspaginated)|true|none|none|
|»»»»» self|string|true|none|Fully qualified link that generated the current response document|
|»»»»» first|string|false|none|URI to the first page of this set. Mandatory if this response is not the first page|
|»»»»» prev|string|false|none|URI to the previous page of this set. Mandatory if this response is not the first page|
|»»»»» next|string|false|none|URI to the next page of this set. Mandatory if this response is not the last page|
|»»»»» last|string|false|none|URI to the last page of this set. Mandatory if this response is not the last page|
|»»»» meta|[metaPaginated](#schemacdr-energy-apimetapaginated)|true|none|none|
|»»»»» totalRecords|integer|true|none|The total number of records in the full set. See [pagination](#pagination).|
|»»»»» totalPages|integer|true|none|The total number of pages in the full set. See [pagination](#pagination).|

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
|» meta|body|[meta](#schemacdr-energy-apimeta)|mandatory|none|

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

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» data|object|true|none|none|
|»» derRecords|[[derRecord](#schemacdr-energy-apiderrecord)]|true|none|Array of meter reads|
|»»» servicePointId|string|true|none|Tokenised ID of the service point to be used for referring to the service point in the CDR API suite.  To be created in accordance with CDR ID permanence requirements|
|»»» approvedCapacity|number|true|none|Approved small generating unit capacity as agreed with NSP in the connection agreement, expressed in kVA|
|»»» availablePhasesCount|number|true|none|The number of phases available for the installation of DER|
|»»» installedPhasesCount|number|true|none|The number of phases that DER is installed on|
|»»» islandableInstallation|string|true|none|For identification of small generating units designed with the ability to operate in an islanded mode|
|»»» hasCentralProtectionControl|boolean|false|none|For DER installations where NSPs specify the need for additional forms of protection above those inbuilt in an inverter.  If absent then assumed to be false|
|»»» protectionMode|object|false|none|Required only when the hasCentralProtectionAndControl flag is set to true|
|»»»» exportLimitkva|number|false|none|Maximum amount of power (kVA) that may be exported from a connection point to the grid, as monitored by a control / relay function. A null value indicates no limit|
|»»»» underFrequencyProtection|number|false|none|Protective function limit. Default value 47 Hz according to AS4777-1: 2016 Table 2|
|»»»» underFrequencyProtectionDelay|number|false|none|Trip delay time in seconds. Default value 2 seconds according to AS4777-1: 2016 Table 2|
|»»»» overFrequencyProtection|number|false|none|Protective function limit. Default value 52 Hz according to AS4777-1: 2016 Table 2|
|»»»» overFrequencyProtectionDelay|number|false|none|Trip delay time in seconds. Default value 2 seconds according to AS4777-1: 2016 Table 2|
|»»»» underVoltageProtection|number|false|none|Protective function limit. Default value 180V according to AS4777-1: 2016 Table 2|
|»»»» underVoltageProtectionDelay|number|false|none|Trip delay time in seconds. Default value 2 seconds according to AS4777-1: 2016 Table 2|
|»»»» overVoltageProtection|number|false|none|Protective function limit. Default value 260 V according to AS4777-1: 2016 Table 2|
|»»»» overVoltageProtectionDelay|number|false|none|Trip delay time in seconds. Default value 2 seconds according to AS4777-1: 2016 Table 2|
|»»»» sustainedOverVoltage|number|false|none|Sustained over voltage|
|»»»» sustainedOverVoltageDelay|number|false|none|Trip delay time in seconds|
|»»»» frequencyRateOfChange|number|false|none|Rate of change of frequency trip point (Hz/s)|
|»»»» voltageVectorShift|number|false|none|Trip angle in degrees|
|»»»» interTripScheme|string|false|none|Description of the form of inter-trip (e.g. 'from local substation')|
|»»»» neutralVoltageDisplacement|number|false|none|Trip voltage|
|»»» acConnections|[object]|false|none|none|
|»»»» connectionIdentifier|number|true|none|AC Connection ID as defined in the DER register.  Does not align with CDR ID permanence standards|
|»»»» count|string|true|none|Number of AC Connections in the group. For the suite of AC Connections to be considered as a group, all of the AC Connections included must have the same attributes|
|»»»» equipmentType|string|false|none|Indicates whether the DER device is connected via an inverter (and what category of inverter it is) or not (e.g. rotating machine)|
|»»»» manufacturerName|string|false|none|The name of the inverter manufacturer|
|»»»» inverterSeries|string|false|none|The inverter series|
|»»»» inverterModelNumber|string|false|none|The inverter model number|
|»»»» commissioningDate|string|false|none|The date that the DER installation is commissioned|
|»»»» installationStage|string|false|none|Description of the installation stage|
|»»»» status|string|false|none|Code used to indicate the status of the Inverter. This will be used to identify if an inverter is active or inactive or decommissioned|
|»»»» inverterDeviceCapacity|number|false|none|The rated AC output power that is listed in the product specified by the manufacturer|
|»»»» derDevices|[object]|false|none|none|
|»»»»» count|number|true|none|Number of devices in the group of DER devices|
|»»»»» manufacturer|string|false|none|The name of the device manufacturer|
|»»»»» modelNumber|string|false|none|The model number of the device|
|»»»»» status|string|false|none|Code used to indicate the status of the device. This will be used to identify if an inverter is active or inactive or decommissioned|
|»»»»» installationStage|number|false|none|Description of the device installation stage|
|»»»»» type|string|false|none|Used to indicate the primary technology used in the DER device|
|»»»»» subtype|string|false|none|This field is also used to record for example the battery chemistry, or the type of PV panel. It is also used to record if a battery is contained in an electric vehicle connected in a vehicle-to-grid arrangement|
|»»»»» nominalRatedCapacity|number|false|none|Maximum output in kVA that is listed in the product specification by the manufacturer. This refers to the capacity of each unit within the device group|
|»»»»» nominalStorageCapacity|number|false|none|Maximum storage capacity in kVAh. This refers to the capacity of each storage module within the device group|
|»»»» links|[linksPaginated](#schemacdr-energy-apilinkspaginated)|true|none|none|
|»»»»» self|string|true|none|Fully qualified link that generated the current response document|
|»»»»» first|string|false|none|URI to the first page of this set. Mandatory if this response is not the first page|
|»»»»» prev|string|false|none|URI to the previous page of this set. Mandatory if this response is not the first page|
|»»»»» next|string|false|none|URI to the next page of this set. Mandatory if this response is not the last page|
|»»»»» last|string|false|none|URI to the last page of this set. Mandatory if this response is not the last page|
|»»»» meta|[metaPaginated](#schemacdr-energy-apimetapaginated)|true|none|none|
|»»»»» totalRecords|integer|true|none|The total number of records in the full set. See [pagination](#pagination).|
|»»»»» totalPages|integer|true|none|The total number of pages in the full set. See [pagination](#pagination).|

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

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» data|object|true|none|none|
|»» accounts|[object]|true|none|Array of accounts|
|»»» accountId|string|true|none|The ID of the account.  To be created in accordance with CDR ID permanence requirements|
|»»» accountNumber|string|false|none|Optional identifier of the account as defined by the data holder.  This must be the value presented on physical statements (if it exists) and must not be used for the value of accountId|
|»»» displayName|string|false|none|An optional display name for the account if one exists or can be derived.  The content of this field is at the discretion of the data holder|
|»»» creationDate|string|true|none|The date that the account was created or opened|
|»»» servicePointIds|[string]|true|none|An array of servicePointIds, representing NMIs, that this account is linked to|
|»»» planOverview|object|true|none|none|
|»»»» displayName|string|false|none|The name of the plan if one exists|
|»»»» startDate|string|true|none|The start date of the applicability of this plan|
|»»»» endDate|string|false|none|The end date of the applicability of this plan|
|»»» links|[linksPaginated](#schemacdr-energy-apilinkspaginated)|true|none|none|
|»»»» self|string|true|none|Fully qualified link that generated the current response document|
|»»»» first|string|false|none|URI to the first page of this set. Mandatory if this response is not the first page|
|»»»» prev|string|false|none|URI to the previous page of this set. Mandatory if this response is not the first page|
|»»»» next|string|false|none|URI to the next page of this set. Mandatory if this response is not the last page|
|»»»» last|string|false|none|URI to the last page of this set. Mandatory if this response is not the last page|
|»»» meta|[metaPaginated](#schemacdr-energy-apimetapaginated)|true|none|none|
|»»»» totalRecords|integer|true|none|The total number of records in the full set. See [pagination](#pagination).|
|»»»» totalPages|integer|true|none|The total number of pages in the full set. See [pagination](#pagination).|

  
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
        "timeZone": "LOCAL",
        "isFixed": true,
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
        "discounts": [
          {
            "displayName": "string",
            "description": "string",
            "type": "CONDITIONAL",
            "category": "PAY_ON_TIME",
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
        "fee": [
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
            "type": "GOVERNMENT",
            "amount": "string",
            "description": "string"
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
              "period": "string",
              "rates": [
                {
                  "unitPrice": "string",
                  "volume": 0
                }
              ]
            },
            "timeOfUseRates": [
              {
                "displayName": "string",
                "description": "string",
                "type": "PEAK",
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
                "demandCharges": [
                  {
                    "displayName": "string",
                    "description": "string",
                    "amount": "string",
                    "startTime": "string",
                    "endTime": "string"
                  }
                ]
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
        "discounts": [
          {
            "displayName": "string",
            "description": "string",
            "type": "CONDITIONAL",
            "category": "PAY_ON_TIME",
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
        "fee": [
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
            "type": "GOVERNMENT",
            "amount": "string",
            "description": "string"
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
              "period": "string",
              "rates": [
                {
                  "unitPrice": "string",
                  "volume": 0
                }
              ]
            },
            "timeOfUseRates": [
              {
                "displayName": "string",
                "description": "string",
                "type": "PEAK",
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
                "demandCharges": [
                  {
                    "displayName": "string",
                    "description": "string",
                    "amount": "string",
                    "startTime": "string",
                    "endTime": "string"
                  }
                ]
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

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» data|object|true|none|none|
|»» accountId|string|true|none|The ID of the account.  To be created in accordance with CDR ID permanence requirements|
|»» accountNumber|string|false|none|Optional identifier of the account as defined by the data holder.  This must be the value presented on physical statements (if it exists) and must not be used for the value of accountId|
|»» displayName|string|false|none|An optional display name for the account if one exists or can be derived.  The content of this field is at the discretion of the data holder|
|»» creationDate|string|true|none|The date that the account was created or opened|
|»» servicePointIds|[string]|true|none|An array of servicePointIds, representing NMIs, that this account is linked to|
|»» planOverview|object|true|none|none|
|»»» displayName|string|false|none|The name of the plan if one exists|
|»»» startDate|string|true|none|The start date of the applicability of this plan|
|»»» endDate|string|false|none|The end date of the applicability of this plan|
|»» planDetail|object|true|none|Detail on the plan applicable to this account|
|»»» fuelType|string|true|none|The fuel types covered by the plan|
|»»» meteringCharges|[object]|false|none|Charges for metering included in the plan|
|»»»» displayName|string|true|none|Display name of the charge|
|»»»» description|string|false|none|Description of the charge|
|»»»» minimumValue|string|true|none|Minimum value of the charge if the charge is a range or the absolute value of the charge if no range is specified|
|»»»» maximumValue|string|false|none|The upper limit of the charge if the charge could occur in a range|
|»»»» period|string|false|none|The charges that occur on a schedule indicates the frequency. Formatted according to ISO 8601 Durations (excludes recurrence syntax)|
|»»» gasContract|object|false|none|The details of the terms for the supply of electricity under this plan.  Is mandatory if fuelType is set to GAS or DUAL|
|»»»» additionalFeeInformation|string|false|none|Free text field containing additional information of the fees for this contract|
|»»»» pricingModel|string|true|none|The pricing model for the contract.  Contracts for gas must use SINGLE_RATE.  Note that the detail for the enumeration values are:  * **SINGLE_RATE** - all energy usage is charged at a single unit rate no matter when it is consumed. Multiple unit rates may exist that correspond to varying volumes of usage i.e. a ‘block’ or ‘step’ tariff (first 50kWh @ X cents, next 50kWh at Y cents etc. * **SINGLE_RATE_CONT_LOAD** - as above, but with an additional, separate unit rate charged for all energy usage from a controlled load i.e. separately metered appliance like hot water service, pool pump etc. * **TIME_OF_USE** - energy usage is charged at unit rates that vary dependent on time of day and day of week that the energy is consumed * **TIME_OF_USE_CONT_LOAD** - as above, but with an additional, separate unit rate charged for all energy usage from a controlled load i.e. separately metered appliance like hot water service, pool pump etc. * **QUOTA** - all energy usage is charged at a single fixed rate, up to a specified usage quota/allowance. All excess usage beyond the allowance is then charged at a single unit rate (may not be the best way to explain it but it is essentially a ‘subscription’ or telco style product i.e. $50/month for up to 150kWh included usage|
|»»»» timeZone|string|false|none|Required if pricingModel is set to TIME_OF_USE.  Defines the time zone to use for calculation of the time of use thresholds|
|»»»» isFixed|boolean|true|none|Flag indicating whether prices are fixed or variable|
|»»»» controlledLoad|object|false|none|Required if pricing model is SINGLE_RATE_CONT_LOAD or TIME_OF_USE_CONT_LOAD|
|»»»»» displayName|string|true|none|A display name for the controlled load tier|
|»»»»» description|string|false|none|A description of the controlled load tier|
|»»»»» dailyCharge|string|true|none|The daily supply charge (exclusive of GST) for this controlled load tier|
|»»»»» period|string|true|none|The period for which the controlled load rate applies. Formatted according to ISO 8601 Durations (excludes recurrence syntax)|
|»»»»» rates|[object]|true|none|Array of controlled load rates in order of usage volume|
|»»»»»» unitPrice|string|true|none|Unit price of usage per kWh (exclusive of GST)|
|»»»»»» volume|number|false|none|Volume in kWh that this rate applies to.  Only applicable for ‘stepped’ rates where different rates apply for different volumes of usage in a period|
|»»»»» discounts|[object]|false|none|Optional list of discounts available for the contract|
|»»»»»» displayName|string|true|none|The display name of the discount|
|»»»»»» description|string|false|none|The description of the discount|
|»»»»»» type|string|true|none|The type of the discount|
|»»»»»» category|string|false|none|The type of the discount.  Mandatory if the discount type is CONDITIONAL|
|»»»»»» methodUType|string|true|none|The method of calculation of the discount|
|»»»»»» percentOfBill|object|false|none|Required if methodUType is percentOfBill|
|»»»»»»» rate|string|true|none|The rate of the discount applied to the bill amount (some types of charges may be excluded from this discount based on plan terms)|
|»»»»»» percentOfUse|object|false|none|Required if methodUType is percentOfUse|
|»»»»»»» rate|string|true|none|The rate of the discount applied to the usageamount|
|»»»»»» fixedAmount|object|false|none|Required if methodUType is fixedAmount|
|»»»»»»» amount|string|true|none|The amount of the discount|
|»»»»»» percentOverThreshold|object|false|none|Required if methodUType is percentOverThreshold|
|»»»»»»» rate|string|true|none|The rate of the discount over the usage amount|
|»»»»»»» usageAmount|string|true|none|The usage amount threshold above which the discount applies|
|»»»»»» greenPowerCharges|[object]|false|none|Optional list of charges applicable to green power|
|»»»»»»» displayName|string|true|none|The display name of the charge|
|»»»»»»» description|string|false|none|The description of the charge|
|»»»»»»» type|string|true|none|The type of charge|
|»»»»»»» tiers|[object]|true|none|Array of charge tiers based on the percentage of green power used for the period implied by the type.  Array is in order of increasing percentage of green power|
|»»»»»»»» percentGreen|string|true|none|The upper percentage of green power used applicable for this tier|
|»»»»»»»» rate|string|false|none|The rate of the charge if the type implies the application of a rate|
|»»»»»»»» amount|string|false|none|The amount of the charge if the type implies the application of a fixed amount|
|»»»»»»» fee|[object]|false|none|An array of fees applicable to the plan|
|»»»»»»»» type|string|true|none|The type of the fee|
|»»»»»»»» term|string|true|none|The term of the fee|
|»»»»»»»» amount|string|false|none|The fee amount. Required if term is not PERCENT_OF_BILL|
|»»»»»»»» rate|string|false|none|The fee rate. Required if term is PERCENT_OF_BILL|
|»»»»»»»» description|string|false|none|A description of the fee|
|»»»»»»» solarFeedInTariff|[object]|false|none|Array of feed in tariffs for solar power|
|»»»»»»»» type|string|true|none|The type of the tariff|
|»»»»»»»» amount|string|false|none|The tariff amount per kWh|
|»»»»»»»» description|string|false|none|A description of the tariff|
|»»»»»»» tariffPeriod|[object]|true|none|Array of tariff periods|
|»»»»»»»» displayName|string|true|none|The name of the tariff period|
|»»»»»»»» startDate|string|false|none|The start date of the tariff period in a calendar year.  Required if there is more than one period.  Formatted in mm-dd format|
|»»»»»»»» endDate|string|false|none|The end date of the tariff period in a calendar year.  Required if there is more than one period.  Formatted in mm-dd format|
|»»»»»»»» dailySupplyCharges|string|true|none|The amount of access charge for the tariff period, in cents per day exclusive of GST.|
|»»»»»»»» rateBlockUType|string|true|none|Specifies the type of rate applicable to this tariff period|
|»»»»»»»» singleRate|object|false|none|Object representing a single rate.  Required if rateBlockUType is singleRate|
|»»»»»»»»» displayName|string|true|none|Display name of the rate|
|»»»»»»»»» description|string|false|none|Description of the rate|
|»»»»»»»»» generalUnitPrice|string|false|none|The block rate (unit price) for any usage above the included fixed usage, in cents per kWh inclusive of GST.  Only required if pricingModel field is ‘QUOTA’|
|»»»»»»»»» period|string|false|none|Usage period for which the block rate applies. Formatted according to ISO 8601 Durations (excludes recurrence syntax)|
|»»»»»»»»» rates|[object]|true|none|Array of controlled load rates in order of usage volume|
|»»»»»»»»»» unitPrice|string|true|none|Unit price of usage per kWh (exclusive of GST)|
|»»»»»»»»»» volume|number|false|none|Volume in kWh that this rate applies to.  Only applicable for ‘stepped’ rates where different rates apply for different volumes of usage in a period|
|»»»»»»»»» timeOfUseRates|[object]|false|none|Array of objects representing time of use rates.  Required if rateBlockUType is timeOfUseRates|
|»»»»»»»»»» displayName|string|true|none|Display name of the rate|
|»»»»»»»»»» description|string|false|none|Description of the rate|
|»»»»»»»»»» type|string|true|none|The type of usage that the rate applies to|
|»»»»»»»»»» rates|[object]|true|none|Array of controlled load rates in order of usage volume|
|»»»»»»»»»»» unitPrice|string|true|none|Unit price of usage per kWh (exclusive of GST)|
|»»»»»»»»»»» volume|number|false|none|Volume in kWh that this rate applies to.  Only applicable for ‘stepped’ rates where different rates apply for different volumes of usage in a period|
|»»»»»»»»»» timeOfUse|[object]|true|none|Array of times of use|
|»»»»»»»»»»» days|[string]|true|none|The days that the rate applies to|
|»»»»»»»»»»» startTime|string|true|none|Start of the period in HHMM format using 24 hour clock format|
|»»»»»»»»»»» endTime|string|true|none|End of the period in HHMM format using 24 hour clock format|
|»»»»»»»»»» demandCharges|[object]|false|none|Array of demand charges|
|»»»»»»»»»»» displayName|string|true|none|Display name of the charge|
|»»»»»»»»»»» description|string|false|none|Description of the charge|
|»»»»»»»»»»» amount|string|false|none|The charge amount per kWh exclusive of GST|
|»»»»»»»»»»» startTime|string|true|none|Start of the period in HHMM format using 24 hour clock format|
|»»»»»»»»»»» endTime|string|true|none|End of the period in HHMM format using 24 hour clock format|
|»»»»»»»»»» electricityContract|object|false|none|The details of the terms for the supply of electricity under this plan.  Is mandatory if fuelType is set to GAS or DUAL|
|»»»»»»»»»»» additionalFeeInformation|string|false|none|Free text field containing additional information of the fees for this contract|
|»»»»»»»»»»» pricingModel|string|true|none|The pricing model for the contract.  Contracts for gas must use SINGLE_RATE.  Note that the detail for the enumeration values are:  * **SINGLE_RATE** - all energy usage is charged at a single unit rate no matter when it is consumed. Multiple unit rates may exist that correspond to varying volumes of usage i.e. a ‘block’ or ‘step’ tariff (first 50kWh @ X cents, next 50kWh at Y cents etc. * **SINGLE_RATE_CONT_LOAD** - as above, but with an additional, separate unit rate charged for all energy usage from a controlled load i.e. separately metered appliance like hot water service, pool pump etc. * **TIME_OF_USE** - energy usage is charged at unit rates that vary dependent on time of day and day of week that the energy is consumed * **TIME_OF_USE_CONT_LOAD** - as above, but with an additional, separate unit rate charged for all energy usage from a controlled load i.e. separately metered appliance like hot water service, pool pump etc. * **QUOTA** - all energy usage is charged at a single fixed rate, up to a specified usage quota/allowance. All excess usage beyond the allowance is then charged at a single unit rate (may not be the best way to explain it but it is essentially a ‘subscription’ or telco style product i.e. $50/month for up to 150kWh included usage|
|»»»»»»»»»»» timeZone|string|false|none|Required if pricingModel is set to TIME_OF_USE.  Defines the time zone to use for calculation of the time of use thresholds|
|»»»»»»»»»»» isFixed|boolean|true|none|Flag indicating whether prices are fixed or variable|
|»»»»»»»»»»» controlledLoad|object|false|none|Required if pricing model is SINGLE_RATE_CONT_LOAD or TIME_OF_USE_CONT_LOAD|
|»»»»»»»»»»»» displayName|string|true|none|A display name for the controlled load tier|
|»»»»»»»»»»»» description|string|false|none|A description of the controlled load tier|
|»»»»»»»»»»»» dailyCharge|string|true|none|The daily supply charge (exclusive of GST) for this controlled load tier|
|»»»»»»»»»»»» period|string|true|none|The period for which the controlled load rate applies. Formatted according to ISO 8601 Durations (excludes recurrence syntax)|
|»»»»»»»»»»»» rates|[object]|true|none|Array of controlled load rates in order of usage volume|
|»»»»»»»»»»»»» unitPrice|string|true|none|Unit price of usage per kWh (exclusive of GST)|
|»»»»»»»»»»»»» volume|number|false|none|Volume in kWh that this rate applies to.  Only applicable for ‘stepped’ rates where different rates apply for different volumes of usage in a period|
|»»»»»»»»»»»» discounts|[object]|false|none|Optional list of discounts available for the contract|
|»»»»»»»»»»»»» displayName|string|true|none|The display name of the discount|
|»»»»»»»»»»»»» description|string|false|none|The description of the discount|
|»»»»»»»»»»»»» type|string|true|none|The type of the discount|
|»»»»»»»»»»»»» category|string|false|none|The type of the discount.  Mandatory if the discount type is CONDITIONAL|
|»»»»»»»»»»»»» methodUType|string|true|none|The method of calculation of the discount|
|»»»»»»»»»»»»» percentOfBill|object|false|none|Required if methodUType is percentOfBill|
|»»»»»»»»»»»»»» rate|string|true|none|The rate of the discount applied to the bill amount (some types of charges may be excluded from this discount based on plan terms)|
|»»»»»»»»»»»»» percentOfUse|object|false|none|Required if methodUType is percentOfUse|
|»»»»»»»»»»»»»» rate|string|true|none|The rate of the discount applied to the usageamount|
|»»»»»»»»»»»»» fixedAmount|object|false|none|Required if methodUType is fixedAmount|
|»»»»»»»»»»»»»» amount|string|true|none|The amount of the discount|
|»»»»»»»»»»»»» percentOverThreshold|object|false|none|Required if methodUType is percentOverThreshold|
|»»»»»»»»»»»»»» rate|string|true|none|The rate of the discount over the usage amount|
|»»»»»»»»»»»»»» usageAmount|string|true|none|The usage amount threshold above which the discount applies|
|»»»»»»»»»»»»» greenPowerCharges|[object]|false|none|Optional list of charges applicable to green power|
|»»»»»»»»»»»»»» displayName|string|true|none|The display name of the charge|
|»»»»»»»»»»»»»» description|string|false|none|The description of the charge|
|»»»»»»»»»»»»»» type|string|true|none|The type of charge|
|»»»»»»»»»»»»»» tiers|[object]|true|none|Array of charge tiers based on the percentage of green power used for the period implied by the type.  Array is in order of increasing percentage of green power|
|»»»»»»»»»»»»»»» percentGreen|string|true|none|The upper percentage of green power used applicable for this tier|
|»»»»»»»»»»»»»»» rate|string|false|none|The rate of the charge if the type implies the application of a rate|
|»»»»»»»»»»»»»»» amount|string|false|none|The amount of the charge if the type implies the application of a fixed amount|
|»»»»»»»»»»»»»» fee|[object]|false|none|An array of fees applicable to the plan|
|»»»»»»»»»»»»»»» type|string|true|none|The type of the fee|
|»»»»»»»»»»»»»»» term|string|true|none|The term of the fee|
|»»»»»»»»»»»»»»» amount|string|false|none|The fee amount. Required if term is not PERCENT_OF_BILL|
|»»»»»»»»»»»»»»» rate|string|false|none|The fee rate. Required if term is PERCENT_OF_BILL|
|»»»»»»»»»»»»»»» description|string|false|none|A description of the fee|
|»»»»»»»»»»»»»» solarFeedInTariff|[object]|false|none|Array of feed in tariffs for solar power|
|»»»»»»»»»»»»»»» type|string|true|none|The type of the tariff|
|»»»»»»»»»»»»»»» amount|string|false|none|The tariff amount per kWh|
|»»»»»»»»»»»»»»» description|string|false|none|A description of the tariff|
|»»»»»»»»»»»»»» tariffPeriod|[object]|true|none|Array of tariff periods|
|»»»»»»»»»»»»»»» displayName|string|true|none|The name of the tariff period|
|»»»»»»»»»»»»»»» startDate|string|false|none|The start date of the tariff period in a calendar year.  Required if there is more than one period.  Formatted in mm-dd format|
|»»»»»»»»»»»»»»» endDate|string|false|none|The end date of the tariff period in a calendar year.  Required if there is more than one period.  Formatted in mm-dd format|
|»»»»»»»»»»»»»»» dailySupplyCharges|string|true|none|The amount of access charge for the tariff period, in cents per day exclusive of GST.|
|»»»»»»»»»»»»»»» rateBlockUType|string|true|none|Specifies the type of rate applicable to this tariff period|
|»»»»»»»»»»»»»»» singleRate|object|false|none|Object representing a single rate.  Required if rateBlockUType is singleRate|
|»»»»»»»»»»»»»»»» displayName|string|true|none|Display name of the rate|
|»»»»»»»»»»»»»»»» description|string|false|none|Description of the rate|
|»»»»»»»»»»»»»»»» generalUnitPrice|string|false|none|The block rate (unit price) for any usage above the included fixed usage, in cents per kWh inclusive of GST.  Only required if pricingModel field is ‘QUOTA’|
|»»»»»»»»»»»»»»»» period|string|false|none|Usage period for which the block rate applies. Formatted according to ISO 8601 Durations (excludes recurrence syntax)|
|»»»»»»»»»»»»»»»» rates|[object]|true|none|Array of controlled load rates in order of usage volume|
|»»»»»»»»»»»»»»»»» unitPrice|string|true|none|Unit price of usage per kWh (exclusive of GST)|
|»»»»»»»»»»»»»»»»» volume|number|false|none|Volume in kWh that this rate applies to.  Only applicable for ‘stepped’ rates where different rates apply for different volumes of usage in a period|
|»»»»»»»»»»»»»»»» timeOfUseRates|[object]|false|none|Array of objects representing time of use rates.  Required if rateBlockUType is timeOfUseRates|
|»»»»»»»»»»»»»»»»» displayName|string|true|none|Display name of the rate|
|»»»»»»»»»»»»»»»»» description|string|false|none|Description of the rate|
|»»»»»»»»»»»»»»»»» type|string|true|none|The type of usage that the rate applies to|
|»»»»»»»»»»»»»»»»» rates|[object]|true|none|Array of controlled load rates in order of usage volume|
|»»»»»»»»»»»»»»»»»» unitPrice|string|true|none|Unit price of usage per kWh (exclusive of GST)|
|»»»»»»»»»»»»»»»»»» volume|number|false|none|Volume in kWh that this rate applies to.  Only applicable for ‘stepped’ rates where different rates apply for different volumes of usage in a period|
|»»»»»»»»»»»»»»»»» timeOfUse|[object]|true|none|Array of times of use|
|»»»»»»»»»»»»»»»»»» days|[string]|true|none|The days that the rate applies to|
|»»»»»»»»»»»»»»»»»» startTime|string|true|none|Start of the period in HHMM format using 24 hour clock format|
|»»»»»»»»»»»»»»»»»» endTime|string|true|none|End of the period in HHMM format using 24 hour clock format|
|»»»»»»»»»»»»»»»»» demandCharges|[object]|false|none|Array of demand charges|
|»»»»»»»»»»»»»»»»»» displayName|string|true|none|Display name of the charge|
|»»»»»»»»»»»»»»»»»» description|string|false|none|Description of the charge|
|»»»»»»»»»»»»»»»»»» amount|string|false|none|The charge amount per kWh exclusive of GST|
|»»»»»»»»»»»»»»»»»» startTime|string|true|none|Start of the period in HHMM format using 24 hour clock format|
|»»»»»»»»»»»»»»»»»» endTime|string|true|none|End of the period in HHMM format using 24 hour clock format|
|»»»»»»»»»»»»»»»»» authorisedContacts|[object]|true|none|An array of additional contacts that are authorised to act on this account|
|»»»»»»»»»»»»»»»»»» firstName|string|false|none|For people with single names this field need not be present. The single name should be in the lastName field|
|»»»»»»»»»»»»»»»»»» lastName|string|true|none|For people with single names the single name should be in this field|
|»»»»»»»»»»»»»»»»»» middleNames|[string]|false|none|Field is mandatory but array may be empty|
|»»»»»»»»»»»»»»»»»» prefix|string|false|none|Also known as title or salutation. The prefix to the name (e.g. Mr, Mrs, Ms, Miss, Sir, etc)|
|»»»»»»»»»»»»»»»»»» suffix|string|false|none|Used for a trailing suffix to the name (e.g. Jr)|
|»»»»»»»»»»»»»»»»» links|[links](#schemacdr-energy-apilinks)|true|none|none|
|»»»»»»»»»»»»»»»»»» self|string|true|none|Fully qualified link that generated the current response document|
|»»»»»»»»»»»»»»»»» meta|[meta](#schemacdr-energy-apimeta)|true|none|none|

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
|timeZone|LOCAL|
|timeZone|AEST|
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
|type|FIXED_PER_DAY|
|type|FIXED_PER_WEEK|
|type|FIXED_PER_MONTH|
|type|FIXED_PER_UNIT|
|type|PERCENT_OF_USE|
|type|PERCENT_OF_BILL|
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
|type|GOVERNMENT|
|type|RETAILER|
|rateBlockUType|singleRate|
|rateBlockUType|timeOfUseRates|
|type|PEAK|
|type|OFF_PEAK|
|type|OFF_PEAK_DC|
|type|SHOULDER|
|type|SHOULDER1|
|type|SHOULDER2|
|pricingModel|SINGLE_RATE|
|pricingModel|SINGLE_RATE_CONT_LOAD|
|pricingModel|TIME_OF_USE|
|pricingModel|TIME_OF_USE_CONT_LOAD|
|pricingModel|FLEXIBLE|
|pricingModel|FLEXIBLE_CONT_LOAD|
|pricingModel|QUOTA|
|timeZone|LOCAL|
|timeZone|AEST|
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
|type|FIXED_PER_DAY|
|type|FIXED_PER_WEEK|
|type|FIXED_PER_MONTH|
|type|FIXED_PER_UNIT|
|type|PERCENT_OF_USE|
|type|PERCENT_OF_BILL|
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
|type|GOVERNMENT|
|type|RETAILER|
|rateBlockUType|singleRate|
|rateBlockUType|timeOfUseRates|
|type|PEAK|
|type|OFF_PEAK|
|type|OFF_PEAK_DC|
|type|SHOULDER|
|type|SHOULDER1|
|type|SHOULDER2|

  
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

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» data|object|true|none|none|
|»» amount|string|false|none|Optional payment amount indicating that a constant payment amount is scheduled to be paid (used in bill smooting scenarios)|
|»» paymentScheduleUType|string|true|none|The type of object present in this response|
|»» cardDebit|object|false|none|Represents a regular credit card payment schedule. Mandatory if paymentScheduleUType is set to cardDebit|
|»»» cardScheme|string|true|none|The type of credit card held on file|
|»»» paymentFrequency|string|true|none|The frequency that payments will occur.  Formatted according to ISO 8601 Durations (excludes recurrence syntax)|
|»»» calculationType|string|true|none|The mechanism by which the payment amount is calculated|
|»» directDebit|object|false|none|Represents a regular direct debit from a specified bank account. Mandatory if paymentScheduleUType is set to directDebit|
|»»» isTokenised|string|false|none|Flag indicating that the account details are tokenised and cannot be shared.  False if absent.  If false then bsb and accountNumber should not be expected to be included|
|»»» bsb|string|false|none|The unmasked BSB for the account to be debited. Is expected to be formatted as digits only with leading zeros included and no punctuation or spaces.  Is required if isTokenised is absent or false|
|»»» accountNumber|string|false|none|The unmasked account number for the account to be debited. Is expected to be formatted as digits only with leading zeros included and no punctuation or spaces.  Is required if isTokenised is absent or false|
|»»» paymentFrequency|string|true|none|The frequency that payments will occur.  Formatted according to ISO 8601 Durations (excludes recurrence syntax)|
|»»» calculationType|string|true|none|The mechanism by which the payment amount is calculated|
|»» manualPayment|object|false|none|Represents a manual payment schedule where the customer pays in response to a delivered statement. Mandatory if paymentScheduleUType is set to manualPayment|
|»»» billFrequency|string|true|none|The frequency with which a bill will be issued.  Formatted according to ISO 8601 Durations (excludes recurrence syntax)|
|»» links|[links](#schemacdr-energy-apilinks)|true|none|none|
|»»» self|string|true|none|Fully qualified link that generated the current response document|
|»» meta|[meta](#schemacdr-energy-apimeta)|true|none|none|

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

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» data|object|true|none|none|
|»» concessions|[object]|true|none|Array may be empty if no concessions exist|
|»»» displayName|string|true|none|The display name of the concession|
|»»» additionalInfo|string|false|none|Display text providing more information on the concession|
|»»» additionalInfoUri|string|false|none|Optional link to additional information regarding the concession|
|»»» startDate|string|false|none|Optional start date for the application of the concession|
|»»» endDate|string|false|none|Optional end date for the application of the concession|
|»»» dailyDiscount|string|false|none|Daily discount value due to the concession.  At least one dailyDiscount, monthlyDiscount, yearlyDiscount and percentageDiscount must be provided|
|»»» monthlyDiscount|string|false|none|Monthly discount value due to the concession.  At least one dailyDiscount, monthlyDiscount, yearlyDiscount and percentageDiscount must be provided|
|»»» yearlyDiscount|string|false|none|Annual discount value due to the concession.  At least one dailyDiscount, monthlyDiscount, yearlyDiscount and percentageDiscount must be provided|
|»»» percentageDiscount|string|false|none|Percentage of each invoice to be discounted due to the concession.  At least one dailyDiscount, monthlyDiscount, yearlyDiscount and percentageDiscount must be provided|
|»» links|[links](#schemacdr-energy-apilinks)|true|none|none|
|»»» self|string|true|none|Fully qualified link that generated the current response document|
|»» meta|[meta](#schemacdr-energy-apimeta)|true|none|none|

  
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

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» data|object|true|none|none|
|»» balance|string|true|none|The current balance of the account.  A positive value indicates that amount is owing to be paid.  A negative value indicates that the account is in credit|
|» links|[links](#schemacdr-energy-apilinks)|true|none|none|
|»» self|string|true|none|Fully qualified link that generated the current response document|
|» meta|[meta](#schemacdr-energy-apimeta)|true|none|none|

  
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

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» data|object|true|none|none|
|»» balances|[object]|true|none|Array of account balances|
|»»» accountId|string|true|none|The ID of the account|
|»»» balance|string|true|none|The current balance of the account.  A positive value indicates that amount is owing to be paid.  A negative value indicates that the account is in credit|
|»» links|[linksPaginated](#schemacdr-energy-apilinkspaginated)|true|none|none|
|»»» self|string|true|none|Fully qualified link that generated the current response document|
|»»» first|string|false|none|URI to the first page of this set. Mandatory if this response is not the first page|
|»»» prev|string|false|none|URI to the previous page of this set. Mandatory if this response is not the first page|
|»»» next|string|false|none|URI to the next page of this set. Mandatory if this response is not the last page|
|»»» last|string|false|none|URI to the last page of this set. Mandatory if this response is not the last page|
|»» meta|[metaPaginated](#schemacdr-energy-apimetapaginated)|true|none|none|
|»»» totalRecords|integer|true|none|The total number of records in the full set. See [pagination](#pagination).|
|»»» totalPages|integer|true|none|The total number of pages in the full set. See [pagination](#pagination).|

  
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
|» meta|body|[meta](#schemacdr-energy-apimeta)|mandatory|none|

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

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» data|object|true|none|none|
|»» balances|[object]|true|none|Array of account balances|
|»»» accountId|string|true|none|The ID of the account|
|»»» balance|string|true|none|The current balance of the account.  A positive value indicates that amount is owing to be paid.  A negative value indicates that the account is in credit|
|»» links|[linksPaginated](#schemacdr-energy-apilinkspaginated)|true|none|none|
|»»» self|string|true|none|Fully qualified link that generated the current response document|
|»»» first|string|false|none|URI to the first page of this set. Mandatory if this response is not the first page|
|»»» prev|string|false|none|URI to the previous page of this set. Mandatory if this response is not the first page|
|»»» next|string|false|none|URI to the next page of this set. Mandatory if this response is not the last page|
|»»» last|string|false|none|URI to the last page of this set. Mandatory if this response is not the last page|
|»» meta|[metaPaginated](#schemacdr-energy-apimetapaginated)|true|none|none|
|»»» totalRecords|integer|true|none|The total number of records in the full set. See [pagination](#pagination).|
|»»» totalPages|integer|true|none|The total number of pages in the full set. See [pagination](#pagination).|

  
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

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» data|object|true|none|none|
|»» invoices|[object]|true|none|Array of invoices sorted by date in descending order|
|»»» accountId|string|true|none|The ID of the account for which the invoice was issued|
|»»» invoiceNumber|string|false|none|The number assigned to this invoice by the energy Retailer|
|»»» issueDate|string|true|none|The date that the invoice was actually issued (as opposed to generated or calculated)|
|»»» dueDate|string|false|none|The date that the invoice is due to be paid|
|»»» period|object|true|none|Object containing the start and end date for the period covered by the invoice|
|»»»» startDate|string|true|none|The start date of the period covered by this invoice|
|»»»» endDate|string|true|none|The end date of the period covered by this invoice|
|»»» invoiceAmount|string|false|none|The net amount due for this invoice regardless of previous balance|
|»»» payOnTimeDiscount|object|false|none|A discount for on time payment|
|»»»» amount|string|true|none|The amount that will be discounted if the invoice is paid by the date specified|
|»»»» date|string|true|none|The date by which the invoice must be paid to receive the pay on time discount|
|»»» balanceAtIssue|string|true|none|The account balance at the time the invoice was issued|
|»»» servicePoints|[string]|true|none|Array of service point IDs to which this invoice applies. May be empty if the invoice contains no electricity usage related charges|
|»»» gas|object|false|none|Object contain charges and credits related to gas usage|
|»»»» totalUsageCharges|string|true|none|The aggregate total of usage charges for the period covered by the invoice|
|»»»» totalOnceOffCharges|string|true|none|The aggregate total of any once off charges arising from electricity usage for the period covered by the invoice|
|»»»» totalOnceOffDiscounts|string|true|none|The aggregate total of any once off discounts or credits arising from electricity usage for the period covered by the invoice|
|»»» electricity|object|false|none|Object contain charges and credits related to electricity usage|
|»»»» totalUsageCharges|string|true|none|The aggregate total of usage charges for the period covered by the invoice|
|»»»» totalGenerationCredits|string|true|none|The aggregate total of generation credits for the period covered by the invoice|
|»»»» totalOnceOffCharges|string|true|none|The aggregate total of any once off charges arising from electricity usage for the period covered by the invoice|
|»»»» totalOnceOffDiscounts|string|true|none|The aggregate total of any once off discounts or credits arising from electricity usage for the period covered by the invoice|
|»»» totalAccountCharges|string|true|none|The aggregate total of account level charges for the period covered by the invoice|
|»»» totalAccountDiscounts|string|true|none|The aggregate total of account level discounts or credits for the period covered by the invoice|
|»»» paymentStatus|string|true|none|Indicator of the payment status for the invoice|
|»» links|[linksPaginated](#schemacdr-energy-apilinkspaginated)|true|none|none|
|»»» self|string|true|none|Fully qualified link that generated the current response document|
|»»» first|string|false|none|URI to the first page of this set. Mandatory if this response is not the first page|
|»»» prev|string|false|none|URI to the previous page of this set. Mandatory if this response is not the first page|
|»»» next|string|false|none|URI to the next page of this set. Mandatory if this response is not the last page|
|»»» last|string|false|none|URI to the last page of this set. Mandatory if this response is not the last page|
|»» meta|[metaPaginated](#schemacdr-energy-apimetapaginated)|true|none|none|
|»»» totalRecords|integer|true|none|The total number of records in the full set. See [pagination](#pagination).|
|»»» totalPages|integer|true|none|The total number of pages in the full set. See [pagination](#pagination).|

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

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» data|object|true|none|none|
|»» invoices|[object]|true|none|Array of invoices sorted by date in descending order|
|»»» accountId|string|true|none|The ID of the account for which the invoice was issued|
|»»» invoiceNumber|string|false|none|The number assigned to this invoice by the energy Retailer|
|»»» issueDate|string|true|none|The date that the invoice was actually issued (as opposed to generated or calculated)|
|»»» dueDate|string|false|none|The date that the invoice is due to be paid|
|»»» period|object|true|none|Object containing the start and end date for the period covered by the invoice|
|»»»» startDate|string|true|none|The start date of the period covered by this invoice|
|»»»» endDate|string|true|none|The end date of the period covered by this invoice|
|»»» invoiceAmount|string|false|none|The net amount due for this invoice regardless of previous balance|
|»»» payOnTimeDiscount|object|false|none|A discount for on time payment|
|»»»» amount|string|true|none|The amount that will be discounted if the invoice is paid by the date specified|
|»»»» date|string|true|none|The date by which the invoice must be paid to receive the pay on time discount|
|»»» balanceAtIssue|string|true|none|The account balance at the time the invoice was issued|
|»»» servicePoints|[string]|true|none|Array of service point IDs to which this invoice applies. May be empty if the invoice contains no electricity usage related charges|
|»»» gas|object|false|none|Object contain charges and credits related to gas usage|
|»»»» totalUsageCharges|string|true|none|The aggregate total of usage charges for the period covered by the invoice|
|»»»» totalOnceOffCharges|string|true|none|The aggregate total of any once off charges arising from electricity usage for the period covered by the invoice|
|»»»» totalOnceOffDiscounts|string|true|none|The aggregate total of any once off discounts or credits arising from electricity usage for the period covered by the invoice|
|»»» electricity|object|false|none|Object contain charges and credits related to electricity usage|
|»»»» totalUsageCharges|string|true|none|The aggregate total of usage charges for the period covered by the invoice|
|»»»» totalGenerationCredits|string|true|none|The aggregate total of generation credits for the period covered by the invoice|
|»»»» totalOnceOffCharges|string|true|none|The aggregate total of any once off charges arising from electricity usage for the period covered by the invoice|
|»»»» totalOnceOffDiscounts|string|true|none|The aggregate total of any once off discounts or credits arising from electricity usage for the period covered by the invoice|
|»»» totalAccountCharges|string|true|none|The aggregate total of account level charges for the period covered by the invoice|
|»»» totalAccountDiscounts|string|true|none|The aggregate total of account level discounts or credits for the period covered by the invoice|
|»»» paymentStatus|string|true|none|Indicator of the payment status for the invoice|
|»» links|[linksPaginated](#schemacdr-energy-apilinkspaginated)|true|none|none|
|»»» self|string|true|none|Fully qualified link that generated the current response document|
|»»» first|string|false|none|URI to the first page of this set. Mandatory if this response is not the first page|
|»»» prev|string|false|none|URI to the previous page of this set. Mandatory if this response is not the first page|
|»»» next|string|false|none|URI to the next page of this set. Mandatory if this response is not the last page|
|»»» last|string|false|none|URI to the last page of this set. Mandatory if this response is not the last page|
|»» meta|[metaPaginated](#schemacdr-energy-apimetapaginated)|true|none|none|
|»»» totalRecords|integer|true|none|The total number of records in the full set. See [pagination](#pagination).|
|»»» totalPages|integer|true|none|The total number of pages in the full set. See [pagination](#pagination).|

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
|» meta|body|[meta](#schemacdr-energy-apimeta)|mandatory|none|

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

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» data|object|true|none|none|
|»» invoices|[object]|true|none|Array of invoices sorted by date in descending order|
|»»» accountId|string|true|none|The ID of the account for which the invoice was issued|
|»»» invoiceNumber|string|false|none|The number assigned to this invoice by the energy Retailer|
|»»» issueDate|string|true|none|The date that the invoice was actually issued (as opposed to generated or calculated)|
|»»» dueDate|string|false|none|The date that the invoice is due to be paid|
|»»» period|object|true|none|Object containing the start and end date for the period covered by the invoice|
|»»»» startDate|string|true|none|The start date of the period covered by this invoice|
|»»»» endDate|string|true|none|The end date of the period covered by this invoice|
|»»» invoiceAmount|string|false|none|The net amount due for this invoice regardless of previous balance|
|»»» payOnTimeDiscount|object|false|none|A discount for on time payment|
|»»»» amount|string|true|none|The amount that will be discounted if the invoice is paid by the date specified|
|»»»» date|string|true|none|The date by which the invoice must be paid to receive the pay on time discount|
|»»» balanceAtIssue|string|true|none|The account balance at the time the invoice was issued|
|»»» servicePoints|[string]|true|none|Array of service point IDs to which this invoice applies. May be empty if the invoice contains no electricity usage related charges|
|»»» gas|object|false|none|Object contain charges and credits related to gas usage|
|»»»» totalUsageCharges|string|true|none|The aggregate total of usage charges for the period covered by the invoice|
|»»»» totalOnceOffCharges|string|true|none|The aggregate total of any once off charges arising from electricity usage for the period covered by the invoice|
|»»»» totalOnceOffDiscounts|string|true|none|The aggregate total of any once off discounts or credits arising from electricity usage for the period covered by the invoice|
|»»» electricity|object|false|none|Object contain charges and credits related to electricity usage|
|»»»» totalUsageCharges|string|true|none|The aggregate total of usage charges for the period covered by the invoice|
|»»»» totalGenerationCredits|string|true|none|The aggregate total of generation credits for the period covered by the invoice|
|»»»» totalOnceOffCharges|string|true|none|The aggregate total of any once off charges arising from electricity usage for the period covered by the invoice|
|»»»» totalOnceOffDiscounts|string|true|none|The aggregate total of any once off discounts or credits arising from electricity usage for the period covered by the invoice|
|»»» totalAccountCharges|string|true|none|The aggregate total of account level charges for the period covered by the invoice|
|»»» totalAccountDiscounts|string|true|none|The aggregate total of account level discounts or credits for the period covered by the invoice|
|»»» paymentStatus|string|true|none|Indicator of the payment status for the invoice|
|»» links|[linksPaginated](#schemacdr-energy-apilinkspaginated)|true|none|none|
|»»» self|string|true|none|Fully qualified link that generated the current response document|
|»»» first|string|false|none|URI to the first page of this set. Mandatory if this response is not the first page|
|»»» prev|string|false|none|URI to the previous page of this set. Mandatory if this response is not the first page|
|»»» next|string|false|none|URI to the next page of this set. Mandatory if this response is not the last page|
|»»» last|string|false|none|URI to the last page of this set. Mandatory if this response is not the last page|
|»» meta|[metaPaginated](#schemacdr-energy-apimetapaginated)|true|none|none|
|»»» totalRecords|integer|true|none|The total number of records in the full set. See [pagination](#pagination).|
|»»» totalPages|integer|true|none|The total number of pages in the full set. See [pagination](#pagination).|

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

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» data|object|true|none|none|
|»» transactions|[object]|true|none|Array of transactions sorted by date and time in descending order|
|»»» accountId|string|true|none|The ID of the account for which transaction applies|
|»»» executionDateTime|string|true|none|The date and time that the transaction occurred|
|»»» transactionUType|string|true|none|Indicator of the type of transaction object present in this record|
|»»» usage|object|false|none|Represents a usage charge or generation credit.  Mandatory if transactionUType is equal to usage|
|»»»» servicePointId|string|false|none|The ID of the service point to which this transaction applies if any|
|»»»» invoiceNumber|string|false|none|The number of the invoice in which this transaction is included if it has been issued|
|»»»» timeOfUseType|string|true|none|The time of use type that the transaction applies to|
|»»»» isEstimate|boolean|false|none|Flag indicating if the usage is estimated or actual.  True indicates estimate.  False or absent indicates actual|
|»»»» startDate|string|true|none|Date and time when the usage period starts|
|»»»» endDate|string|true|none|Date and time when the usage period ends|
|»»»» usage|number|true|none|The usage for the period in kWh.  A negative value indicates power generated|
|»»»» amount|string|true|none|The amount charged or credited for this transaction prior to any adjustments being applied.  A negative value indicates a credit|
|»»»» adjustments|[object]|false|none|Optional array of adjustments arising for this transaction|
|»»»»» amount|string|true|none|The amount of the adjustment|
|»»»»» description|string|true|none|A free text description of the adjustment|
|»»»» onceOff|object|false|none|Represents a once off charge or credit.  Mandatory if transactionUType is equal to onceOff|
|»»»»» servicePointId|string|false|none|The ID of the service point to which this transaction applies if any|
|»»»»» invoiceNumber|string|false|none|The number of the invoice in which this transaction is included if it has been issued|
|»»»»» amount|string|true|none|The amount of the charge or credit.  A positive value indicates a charge and a negative value indicates a credit|
|»»»»» description|string|true|none|A free text description of the item|
|»»»» payment|object|false|none|Represents a payment to the account.  Mandatory if transactionUType is equal to payment|
|»»»»» amount|string|true|none|The amount paid|
|»»»»» method|string|true|none|The method of payment|
|»»»» links|[linksPaginated](#schemacdr-energy-apilinkspaginated)|true|none|none|
|»»»»» self|string|true|none|Fully qualified link that generated the current response document|
|»»»»» first|string|false|none|URI to the first page of this set. Mandatory if this response is not the first page|
|»»»»» prev|string|false|none|URI to the previous page of this set. Mandatory if this response is not the first page|
|»»»»» next|string|false|none|URI to the next page of this set. Mandatory if this response is not the last page|
|»»»»» last|string|false|none|URI to the last page of this set. Mandatory if this response is not the last page|
|»»»» meta|[metaPaginated](#schemacdr-energy-apimetapaginated)|true|none|none|
|»»»»» totalRecords|integer|true|none|The total number of records in the full set. See [pagination](#pagination).|
|»»»»» totalPages|integer|true|none|The total number of pages in the full set. See [pagination](#pagination).|

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

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» data|object|true|none|none|
|»» transactions|[object]|true|none|Array of transactions sorted by date and time in descending order|
|»»» accountId|string|true|none|The ID of the account for which transaction applies|
|»»» executionDateTime|string|true|none|The date and time that the transaction occurred|
|»»» transactionUType|string|true|none|Indicator of the type of transaction object present in this record|
|»»» usage|object|false|none|Represents a usage charge or generation credit.  Mandatory if transactionUType is equal to usage|
|»»»» servicePointId|string|false|none|The ID of the service point to which this transaction applies if any|
|»»»» invoiceNumber|string|false|none|The number of the invoice in which this transaction is included if it has been issued|
|»»»» timeOfUseType|string|true|none|The time of use type that the transaction applies to|
|»»»» isEstimate|boolean|false|none|Flag indicating if the usage is estimated or actual.  True indicates estimate.  False or absent indicates actual|
|»»»» startDate|string|true|none|Date and time when the usage period starts|
|»»»» endDate|string|true|none|Date and time when the usage period ends|
|»»»» usage|number|true|none|The usage for the period in kWh.  A negative value indicates power generated|
|»»»» amount|string|true|none|The amount charged or credited for this transaction prior to any adjustments being applied.  A negative value indicates a credit|
|»»»» adjustments|[object]|false|none|Optional array of adjustments arising for this transaction|
|»»»»» amount|string|true|none|The amount of the adjustment|
|»»»»» description|string|true|none|A free text description of the adjustment|
|»»»» onceOff|object|false|none|Represents a once off charge or credit.  Mandatory if transactionUType is equal to onceOff|
|»»»»» servicePointId|string|false|none|The ID of the service point to which this transaction applies if any|
|»»»»» invoiceNumber|string|false|none|The number of the invoice in which this transaction is included if it has been issued|
|»»»»» amount|string|true|none|The amount of the charge or credit.  A positive value indicates a charge and a negative value indicates a credit|
|»»»»» description|string|true|none|A free text description of the item|
|»»»» payment|object|false|none|Represents a payment to the account.  Mandatory if transactionUType is equal to payment|
|»»»»» amount|string|true|none|The amount paid|
|»»»»» method|string|true|none|The method of payment|
|»»»» links|[linksPaginated](#schemacdr-energy-apilinkspaginated)|true|none|none|
|»»»»» self|string|true|none|Fully qualified link that generated the current response document|
|»»»»» first|string|false|none|URI to the first page of this set. Mandatory if this response is not the first page|
|»»»»» prev|string|false|none|URI to the previous page of this set. Mandatory if this response is not the first page|
|»»»»» next|string|false|none|URI to the next page of this set. Mandatory if this response is not the last page|
|»»»»» last|string|false|none|URI to the last page of this set. Mandatory if this response is not the last page|
|»»»» meta|[metaPaginated](#schemacdr-energy-apimetapaginated)|true|none|none|
|»»»»» totalRecords|integer|true|none|The total number of records in the full set. See [pagination](#pagination).|
|»»»»» totalPages|integer|true|none|The total number of pages in the full set. See [pagination](#pagination).|

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
|» meta|body|[meta](#schemacdr-energy-apimeta)|mandatory|none|

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

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» data|object|true|none|none|
|»» transactions|[object]|true|none|Array of transactions sorted by date and time in descending order|
|»»» accountId|string|true|none|The ID of the account for which transaction applies|
|»»» executionDateTime|string|true|none|The date and time that the transaction occurred|
|»»» transactionUType|string|true|none|Indicator of the type of transaction object present in this record|
|»»» usage|object|false|none|Represents a usage charge or generation credit.  Mandatory if transactionUType is equal to usage|
|»»»» servicePointId|string|false|none|The ID of the service point to which this transaction applies if any|
|»»»» invoiceNumber|string|false|none|The number of the invoice in which this transaction is included if it has been issued|
|»»»» timeOfUseType|string|true|none|The time of use type that the transaction applies to|
|»»»» isEstimate|boolean|false|none|Flag indicating if the usage is estimated or actual.  True indicates estimate.  False or absent indicates actual|
|»»»» startDate|string|true|none|Date and time when the usage period starts|
|»»»» endDate|string|true|none|Date and time when the usage period ends|
|»»»» usage|number|true|none|The usage for the period in kWh.  A negative value indicates power generated|
|»»»» amount|string|true|none|The amount charged or credited for this transaction prior to any adjustments being applied.  A negative value indicates a credit|
|»»»» adjustments|[object]|false|none|Optional array of adjustments arising for this transaction|
|»»»»» amount|string|true|none|The amount of the adjustment|
|»»»»» description|string|true|none|A free text description of the adjustment|
|»»»» onceOff|object|false|none|Represents a once off charge or credit.  Mandatory if transactionUType is equal to onceOff|
|»»»»» servicePointId|string|false|none|The ID of the service point to which this transaction applies if any|
|»»»»» invoiceNumber|string|false|none|The number of the invoice in which this transaction is included if it has been issued|
|»»»»» amount|string|true|none|The amount of the charge or credit.  A positive value indicates a charge and a negative value indicates a credit|
|»»»»» description|string|true|none|A free text description of the item|
|»»»» payment|object|false|none|Represents a payment to the account.  Mandatory if transactionUType is equal to payment|
|»»»»» amount|string|true|none|The amount paid|
|»»»»» method|string|true|none|The method of payment|
|»»»» links|[linksPaginated](#schemacdr-energy-apilinkspaginated)|true|none|none|
|»»»»» self|string|true|none|Fully qualified link that generated the current response document|
|»»»»» first|string|false|none|URI to the first page of this set. Mandatory if this response is not the first page|
|»»»»» prev|string|false|none|URI to the previous page of this set. Mandatory if this response is not the first page|
|»»»»» next|string|false|none|URI to the next page of this set. Mandatory if this response is not the last page|
|»»»»» last|string|false|none|URI to the last page of this set. Mandatory if this response is not the last page|
|»»»» meta|[metaPaginated](#schemacdr-energy-apimetapaginated)|true|none|none|
|»»»»» totalRecords|integer|true|none|The total number of records in the full set. See [pagination](#pagination).|
|»»»»» totalPages|integer|true|none|The total number of pages in the full set. See [pagination](#pagination).|

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

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|servicePointId|string|mandatory|none|Tokenised ID of the service point to be used for referring to the service point in the CDR API suite.  To be created in accordance with CDR ID permanence requirements|
|approvedCapacity|number|mandatory|none|Approved small generating unit capacity as agreed with NSP in the connection agreement, expressed in kVA|
|availablePhasesCount|number|mandatory|none|The number of phases available for the installation of DER|
|installedPhasesCount|number|mandatory|none|The number of phases that DER is installed on|
|islandableInstallation|string|mandatory|none|For identification of small generating units designed with the ability to operate in an islanded mode|
|hasCentralProtectionControl|boolean|optional|none|For DER installations where NSPs specify the need for additional forms of protection above those inbuilt in an inverter.  If absent then assumed to be false|
|protectionMode|object|conditional|none|Required only when the hasCentralProtectionAndControl flag is set to true|
|» exportLimitkva|number|optional|none|Maximum amount of power (kVA) that may be exported from a connection point to the grid, as monitored by a control / relay function. A null value indicates no limit|
|» underFrequencyProtection|number|optional|none|Protective function limit. Default value 47 Hz according to AS4777-1: 2016 Table 2|
|» underFrequencyProtectionDelay|number|optional|none|Trip delay time in seconds. Default value 2 seconds according to AS4777-1: 2016 Table 2|
|» overFrequencyProtection|number|optional|none|Protective function limit. Default value 52 Hz according to AS4777-1: 2016 Table 2|
|» overFrequencyProtectionDelay|number|optional|none|Trip delay time in seconds. Default value 2 seconds according to AS4777-1: 2016 Table 2|
|» underVoltageProtection|number|optional|none|Protective function limit. Default value 180V according to AS4777-1: 2016 Table 2|
|» underVoltageProtectionDelay|number|optional|none|Trip delay time in seconds. Default value 2 seconds according to AS4777-1: 2016 Table 2|
|» overVoltageProtection|number|optional|none|Protective function limit. Default value 260 V according to AS4777-1: 2016 Table 2|
|» overVoltageProtectionDelay|number|optional|none|Trip delay time in seconds. Default value 2 seconds according to AS4777-1: 2016 Table 2|
|» sustainedOverVoltage|number|optional|none|Sustained over voltage|
|» sustainedOverVoltageDelay|number|optional|none|Trip delay time in seconds|
|» frequencyRateOfChange|number|optional|none|Rate of change of frequency trip point (Hz/s)|
|» voltageVectorShift|number|optional|none|Trip angle in degrees|
|» interTripScheme|string|optional|none|Description of the form of inter-trip (e.g. 'from local substation')|
|» neutralVoltageDisplacement|number|optional|none|Trip voltage|
|acConnections|[object]|optional|none|none|
|» connectionIdentifier|number|mandatory|none|AC Connection ID as defined in the DER register.  Does not align with CDR ID permanence standards|
|» count|[PositiveInteger](#common-field-types)|mandatory|none|Number of AC Connections in the group. For the suite of AC Connections to be considered as a group, all of the AC Connections included must have the same attributes|
|» equipmentType|string|optional|none|Indicates whether the DER device is connected via an inverter (and what category of inverter it is) or not (e.g. rotating machine)|
|» manufacturerName|string|optional|none|The name of the inverter manufacturer|
|» inverterSeries|string|optional|none|The inverter series|
|» inverterModelNumber|string|optional|none|The inverter model number|
|» commissioningDate|[DateString](#common-field-types)|optional|none|The date that the DER installation is commissioned|
|» installationStage|string|optional|none|Description of the installation stage|
|» status|string|optional|none|Code used to indicate the status of the Inverter. This will be used to identify if an inverter is active or inactive or decommissioned|
|» inverterDeviceCapacity|number|optional|none|The rated AC output power that is listed in the product specified by the manufacturer|
|» derDevices|[object]|optional|none|none|
|»» count|number|mandatory|none|Number of devices in the group of DER devices|
|»» manufacturer|string|optional|none|The name of the device manufacturer|
|»» modelNumber|string|optional|none|The model number of the device|
|»» status|string|optional|none|Code used to indicate the status of the device. This will be used to identify if an inverter is active or inactive or decommissioned|
|»» installationStage|number|optional|none|Description of the device installation stage|
|»» type|string|optional|none|Used to indicate the primary technology used in the DER device|
|»» subtype|string|optional|none|This field is also used to record for example the battery chemistry, or the type of PV panel. It is also used to record if a battery is contained in an electric vehicle connected in a vehicle-to-grid arrangement|
|»» nominalRatedCapacity|number|optional|none|Maximum output in kVA that is listed in the product specification by the manufacturer. This refers to the capacity of each unit within the device group|
|»» nominalStorageCapacity|number|optional|none|Maximum storage capacity in kVAh. This refers to the capacity of each storage module within the device group|

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

<h2 class="schema-toc" id="tocSlinks">links</h2>

<a id="schemacdr-energy-apilinks"></a>

```json
{
  "self": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|self|[URIString](#common-field-types)|mandatory|none|Fully qualified link that generated the current response document|

<h2 class="schema-toc" id="tocSmeta">meta</h2>

<a id="schemacdr-energy-apimeta"></a>

```json
{}

```

### Properties

*None*

<h2 class="schema-toc" id="tocSlinkspaginated">linksPaginated</h2>

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

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|self|[URIString](#common-field-types)|mandatory|none|Fully qualified link that generated the current response document|
|first|[URIString](#common-field-types)|conditional|none|URI to the first page of this set. Mandatory if this response is not the first page|
|prev|[URIString](#common-field-types)|conditional|none|URI to the previous page of this set. Mandatory if this response is not the first page|
|next|[URIString](#common-field-types)|conditional|none|URI to the next page of this set. Mandatory if this response is not the last page|
|last|[URIString](#common-field-types)|conditional|none|URI to the last page of this set. Mandatory if this response is not the last page|

<h2 class="schema-toc" id="tocSmetapaginated">metaPaginated</h2>

<a id="schemacdr-energy-apimetapaginated"></a>

```json
{
  "totalRecords": 0,
  "totalPages": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|totalRecords|[NaturalNumber](#common-field-types)|mandatory|none|The total number of records in the full set. See [pagination](#pagination).|
|totalPages|[NaturalNumber](#common-field-types)|mandatory|none|The total number of pages in the full set. See [pagination](#pagination).|

