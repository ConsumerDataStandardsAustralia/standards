---
title: Get Energy Accounts v1

#language_tabs: # must be one of https://git.io/vQNgJ
#  - shell
#  - javascript

toc_footers:
  - <a href='../../index.html'>Consumer Data Standards</a>

search: false
---

# Get Energy Account Detail V1
This page documents version 1 of the Get Energy Account Detail end point. 

* Data Holders **MAY** go-live on November 15 2022 with this version. 
* Data Holders **SHOULD** implement Get Energy Account Detail v2 as soon as possible. 
* Data Holders **MAY** decommission Get Energy Account Detail v1 as soon as Get Energy Accounts v2 is supported.
* Data Holders **MUST** provide values for all mandatory fields and select reasonable default values if the data is not available for closed accounts

This version is to be ceased to be called by data recipients when the Data Holder supports Get Energy Account Detail v2. 

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

###Endpoint Version
|   |  |
|---|--|
|Version|**1**

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
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[EnergyAccountDetailResponse](#schemacdr-energy-apienergyaccountdetailresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li></ul>|[ErrorListResponse](#schemacdr-energy-apierrorlistresponse)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[404 - Unavailable Energy Account](#error-404-unavailable-energy-account)</li><li>[404 - Invalid Energy Account](#error-404-invalid-energy-account)</li></ul>|[ErrorListResponse](#schemacdr-energy-apierrorlistresponse)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|[ErrorListResponse](#schemacdr-energy-apierrorlistresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-v|string||none|
|200|x-fapi-interaction-id|string||none|
|400|x-fapi-interaction-id|string||none|
|404|x-fapi-interaction-id|string||none|
|406|x-fapi-interaction-id|string||none|

  
    
      <aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
<a href="#authorisation-scopes">energy:accounts.detail:read</a>
</aside>

<h2 id="tocSenergyaccountdetailresponse">EnergyAccountDetailResponse</h2>

<a id="schemacdr-energy-apienergyaccountdetailresponse"></a>

```json
{
  "data": {
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
|data|[EnergyAccountDetail](#schemacdr-energy-apienergyaccountdetail)|mandatory|none|
|links|[Links](#schemacdr-energy-apilinks)|mandatory|none|
|meta|[Meta](#schemacdr-energy-apimeta)|mandatory|none|

<h2 id="tocSenergyaccountdetail">EnergyAccountDetail</h2>

<a id="schemacdr-energy-apienergyaccountdetail"></a>

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
|*anonymous*|[EnergyAccountBase](#schemacdr-energy-apienergyaccountbase)|mandatory|none|

*and*

|Name|Type|Required|Description|
|---|---|---|---|
|*anonymous*|object|mandatory|The array of plans containing service points and associated plan details|
|» plans|[object]|mandatory|The array of plans containing service points and associated plan details|
|»» nickname|string|optional|Optional display name for the plan provided by the customer to help differentiate multiple plans|
|»» servicePointIds|[string]|mandatory|An array of servicePointIds, representing NMIs, that this account is linked to|
|»» planOverview|object|mandatory|none|
|»»» displayName|string|optional|The name of the plan if one exists|
|»»» startDate|[DateString](#common-field-types)|mandatory|The start date of the applicability of this plan|
|»»» endDate|[DateString](#common-field-types)|optional|The end date of the applicability of this plan|
|»» planDetail|object|mandatory|Detail on the plan applicable to this account|
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
