---
title: Get Energy Account Detail v2

#language_tabs: # must be one of https://git.io/vQNgJ
#  - shell
#  - javascript

toc_footers:
  - <a href='../../index.html'>Consumer Data Standards</a>

search: false
---

# Get Energy Account Detail V2
This page documents version 2 of the Get Energy Account Detail end point. 

* Data Holder **MUST** implement Get Energy Account Detail v3 by **November 1st 2023**.

This version is to be ceased to be called by data recipients by **September 9th 2024** and can be decommissioned by data holders as of that date.

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

Other Versions: [v1](./get-energy-account-detail-v1.html)

###Endpoint Version
|   |  |
|---|--|
|Version|**2**

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
                "scheme": "PREMIUM",
                "payerType": "GOVERNMENT",
                "tariffUType": "singleTariff",
                "singleTariff": {
                  "amount": "string"
                },
                "timeVaryingTariffs": {
                  "type": "PEAK",
                  "amount": "string",
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
                "scheme": "PREMIUM",
                "payerType": "GOVERNMENT",
                "tariffUType": "singleTariff",
                "singleTariff": {
                  "amount": "string"
                },
                "timeVaryingTariffs": {
                  "type": "PEAK",
                  "amount": "string",
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
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[EnergyAccountDetailResponseV2](#schemacdr-energy-apienergyaccountdetailresponsev2)|
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

<h2 id="tocSenergyaccountdetailresponsev2">EnergyAccountDetailResponseV2</h2>

<a id="schemacdr-energy-apienergyaccountdetailresponsev2"></a>

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
                "scheme": "PREMIUM",
                "payerType": "GOVERNMENT",
                "tariffUType": "singleTariff",
                "singleTariff": {
                  "amount": "string"
                },
                "timeVaryingTariffs": {
                  "type": "PEAK",
                  "amount": "string",
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
                "scheme": "PREMIUM",
                "payerType": "GOVERNMENT",
                "tariffUType": "singleTariff",
                "singleTariff": {
                  "amount": "string"
                },
                "timeVaryingTariffs": {
                  "type": "PEAK",
                  "amount": "string",
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
|data|[EnergyAccountDetailV2](#schemacdr-energy-apienergyaccountdetailv2)|mandatory|none|
|links|[Links](#schemacdr-energy-apilinks)|mandatory|none|
|meta|[Meta](#schemacdr-energy-apimeta)|optional|none|

<h2 id="tocSenergyaccountdetailv2">EnergyAccountDetailV2</h2>

<a id="schemacdr-energy-apienergyaccountdetailv2"></a>

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
              "scheme": "PREMIUM",
              "payerType": "GOVERNMENT",
              "tariffUType": "singleTariff",
              "singleTariff": {
                "amount": "string"
              },
              "timeVaryingTariffs": {
                "type": "PEAK",
                "amount": "string",
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
              "scheme": "PREMIUM",
              "payerType": "GOVERNMENT",
              "tariffUType": "singleTariff",
              "singleTariff": {
                "amount": "string"
              },
              "timeVaryingTariffs": {
                "type": "PEAK",
                "amount": "string",
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
|»»» gasContract|[EnergyPlanContract](#schemacdr-energy-apienergyplancontract)|conditional|The details of the terms for the supply of electricity under this plan.  Is mandatory if fuelType is set to GAS or DUAL|
|»»» electricityContract|[EnergyPlanContract](#schemacdr-energy-apienergyplancontract)|conditional|The details of the terms for the supply of electricity under this plan.  Is mandatory if fuelType is set to ELECTRICITY or DUAL|
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

<h2 id="tocSenergyaccountbasev2">EnergyAccountBaseV2</h2>

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

<h2 id="tocSenergyplancontract">EnergyPlanContract</h2>

<a id="schemacdr-energy-apienergyplancontract"></a>

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
      "scheme": "PREMIUM",
      "payerType": "GOVERNMENT",
      "tariffUType": "singleTariff",
      "singleTariff": {
        "amount": "string"
      },
      "timeVaryingTariffs": {
        "type": "PEAK",
        "amount": "string",
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
|timeZone|LOCAL|
|timeZone|AEST|
|paymentOption|PAPER_BILL|
|paymentOption|CREDIT_CARD|
|paymentOption|DIRECT_DEBIT|
|paymentOption|BPAY|
|paymentOption|OTHER|


<h2 id="tocSenergyplancontrolledload">EnergyPlanControlledLoad</h2>

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


<h2 id="tocSenergyplanincentives">EnergyPlanIncentives</h2>

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

<h2 id="tocSenergyplandiscounts">EnergyPlanDiscounts</h2>

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

<h2 id="tocSenergyplangreenpowercharges">EnergyPlanGreenPowerCharges</h2>

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

<h2 id="tocSenergyplaneligibility">EnergyPlanEligibility</h2>

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


<h2 id="tocSenergyplanfees">EnergyPlanFees</h2>

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


<h2 id="tocSenergyplansolarfeedintariff">EnergyPlanSolarFeedInTariff</h2>

<a id="schemacdr-energy-apienergyplansolarfeedintariff"></a>

```json
[
  {
    "displayName": "string",
    "description": "string",
    "scheme": "PREMIUM",
    "payerType": "GOVERNMENT",
    "tariffUType": "singleTariff",
    "singleTariff": {
      "amount": "string"
    },
    "timeVaryingTariffs": {
      "type": "PEAK",
      "amount": "string",
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
|scheme|string|mandatory|The applicable scheme|
|payerType|string|mandatory|The type of the payer|
|tariffUType|string|mandatory|The type of the payer|
|singleTariff|object|conditional|Represents a constant tariff.  Mandatory if tariffUType is set to singleTariff|
|» amount|[AmountString](#common-field-types)|mandatory|The tariff amount|
|timeVaryingTariffs|object|conditional|Represents a tariff based on time.  Mandatory if tariffUType is set to timeVaryingTariffs|
|» type|string|optional|The type of the charging time period. If absent applies to all periods|
|» amount|[AmountString](#common-field-types)|mandatory|The tariff amount|
|» timeVariations|[object]|mandatory|Array of time periods for which this tariff is applicable|
|»» days|[string]|mandatory|The days that the tariff applies to. At least one entry required|
|»» startTime|[TimeString](#common-field-types)|optional|The beginning of the time period per day for which the tariff applies.  If absent assumes start of day (ie. midnight)|
|»» endTime|[TimeString](#common-field-types)|optional|The end of the time period per day for which the tariff applies.  If absent assumes end of day (ie. one second before midnight)|

#### Enumerated Values

|Property|Value|
|---|---|
|scheme|PREMIUM|
|scheme|OTHER|
|payerType|GOVERNMENT|
|payerType|RETAILER|
|tariffUType|singleTariff|
|tariffUType|timeVaryingTariffs|
|type|PEAK|
|type|OFF_PEAK|
|type|SHOULDER|
|days|SUN|
|days|MON|
|days|TUE|
|days|WED|
|days|THU|
|days|FRI|
|days|SAT|
|days|PUBLIC_HOLIDAYS|


<h2 id="tocSenergyplantariffperiod">EnergyPlanTariffPeriod</h2>

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

<h2 id="tocSresponseerrorlistv2">ResponseErrorListV2</h2>

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


<h2 id="tocSlinks">Links</h2>

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

<h2 id="tocSmeta">Meta</h2>

<a id="schemacdr-energy-apimeta"></a>

```json
{}

```

### Properties

*None*