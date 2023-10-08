---
title: Get Metrics v4
#language_tabs: # must be one of https://git.io/vQNgJ
#  - shell
#  - javascript

toc_footers:
  - <a href='../../index.html'>Consumer Data Standards</a>

search: false
---

# Get Metrics V4
This page documents the deprecated version 4 of the Get Metrics end point.

This version **MUST** be implemented by **November 1st 2023** and **MAY** be retired once v5 has been implemented


## Get Metrics

<a id="opIdgetMetrics"></a>

> Code samples

```http
GET https://data.holder.com.au/cds-au/v1/admin/metrics HTTP/1.1
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
  url: 'https://data.holder.com.au/cds-au/v1/admin/metrics',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`GET /admin/metrics`

This end point allows the ACCC to obtain operational statistics from the Data Holder (at the Data Holder Brand level) on the operation of their CDR compliant implementation. The statistics obtainable from this end point are determined by the non-functional requirements for the CDR regime.

This end point is not required to be implemented by the Australian Energy Market Operator, the Australian Energy Regulator or the Department of State administered by the Minister of Victoria administering the National Electricity (Victoria) Act 2005 (Vic).

Obsolete versions: [v1](/includes/obsolete/get-metrics-v1.html) [v2](/includes/obsolete/get-metrics-v2.html).

Deprecated versions:

- [v3](/includes/obsolete/get-metrics-v3.html)

If the Data Holder supports private_key_jwt client authentication they MUST validate the scope.

###Endpoint Version
|   |  |
|---|--|
|Version|**4**

<h3 id="get-metrics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|period|query|string|optional|The period of metrics to be requested. Values can be CURRENT (meaning metrics for current period, dependent on the metric type), HISTORIC (meaning metrics for previous period, depending on the metric type) or ALL. If absent the default is ALL.|
|x-v|header|string|mandatory|Version of the API end point requested by the client. Must be set to a positive integer. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If the value of [x-min-v](#request-headers) is equal to or higher than the value of [x-v](#request-headers) then the [x-min-v](#request-headers) header should be treated as absent. If all versions requested are not supported then the data holder should respond with a 406 Not Acceptable. See [HTTP Headers](#request-headers)|
|x-min-v|header|string|optional|Minimum version of the API end point requested by the client. Must be set to a positive integer if provided. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If all versions requested are not supported then the data holder should respond with a 406 Not Acceptable.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|period|CURRENT|
|period|HISTORIC|
|period|ALL|

> Example responses

> 200 Response

```json
{
  "data": {
    "requestTime": "string",
    "availability": {
      "aggregate": {
        "currentMonth": "string",
        "previousMonths": [
          "string"
        ]
      },
      "unauthenticated": {
        "currentMonth": "string",
        "previousMonths": [
          "string"
        ]
      },
      "authenticated": {
        "currentMonth": "string",
        "previousMonths": [
          "string"
        ]
      }
    },
    "performance": {
      "currentDay": "string",
      "previousDays": [
        "string"
      ]
    },
    "invocations": {
      "unauthenticated": {
        "currentDay": 0,
        "previousDays": [
          0
        ]
      },
      "highPriority": {
        "currentDay": 0,
        "previousDays": [
          0
        ]
      },
      "lowPriority": {
        "currentDay": 0,
        "previousDays": [
          0
        ]
      },
      "unattended": {
        "currentDay": 0,
        "previousDays": [
          0
        ]
      },
      "largePayload": {
        "currentDay": 0,
        "previousDays": [
          0
        ]
      },
      "secondary": {
        "currentDay": 0,
        "previousDays": [
          0
        ]
      },
      "largeSecondary": {
        "currentDay": 0,
        "previousDays": [
          0
        ]
      }
    },
    "averageResponse": {
      "unauthenticated": {
        "currentDay": 0,
        "previousDays": [
          0
        ]
      },
      "highPriority": {
        "currentDay": 0,
        "previousDays": [
          0
        ]
      },
      "lowPriority": {
        "currentDay": 0,
        "previousDays": [
          0
        ]
      },
      "unattended": {
        "currentDay": 0,
        "previousDays": [
          0
        ]
      },
      "largePayload": {
        "currentDay": 0,
        "previousDays": [
          0
        ]
      },
      "secondary": {
        "primary": {
          "currentDay": 0,
          "previousDays": [
            0
          ]
        },
        "secondary": {
          "currentDay": 0,
          "previousDays": [
            0
          ]
        }
      },
      "largeSecondary": {
        "primary": {
          "currentDay": 0,
          "previousDays": [
            0
          ]
        },
        "secondary": {
          "currentDay": 0,
          "previousDays": [
            0
          ]
        }
      }
    },
    "sessionCount": {
      "currentDay": 0,
      "previousDays": [
        0
      ]
    },
    "averageTps": {
      "aggregate": {
        "currentDay": 0,
        "previousDays": [
          0
        ]
      },
      "unauthenticated": {
        "currentDay": 0,
        "previousDays": [
          0
        ]
      },
      "authenticated": {
        "currentDay": 0,
        "previousDays": [
          0
        ]
      }
    },
    "peakTps": {
      "aggregate": {
        "currentDay": 0,
        "previousDays": [
          0
        ]
      },
      "unauthenticated": {
        "currentDay": 0,
        "previousDays": [
          0
        ]
      },
      "authenticated": {
        "currentDay": 0,
        "previousDays": [
          0
        ]
      }
    },
    "errors": {
      "aggregate": {
        "currentDay": 0,
        "previousDays": [
          0
        ]
      },
      "unauthenticated": {
        "currentDay": {
          "500": 0,
          "property1": 0,
          "property2": 0
        },
        "previousDays": [
          {
            "500": 0,
            "property1": 0,
            "property2": 0
          }
        ]
      },
      "authenticated": {
        "currentDay": {
          "500": 0,
          "property1": 0,
          "property2": 0
        },
        "previousDays": [
          {
            "500": 0,
            "property1": 0,
            "property2": 0
          }
        ]
      }
    },
    "rejections": {
      "authenticated": {
        "currentDay": 0,
        "previousDays": [
          0
        ]
      },
      "unauthenticated": {
        "currentDay": 0,
        "previousDays": [
          0
        ]
      }
    },
    "customerCount": 0,
    "recipientCount": 0,
    "secondaryHolder": {
      "errors": {
        "currentDay": 0,
        "previousDays": [
          0
        ]
      },
      "rejections": {
        "currentDay": 0,
        "previousDays": [
          0
        ]
      }
    },
    "authorisations": {
      "activeAuthorisationCount": {
        "individual": 0,
        "nonIndividual": 0
      },
      "newAuthorisationCount": {
        "currentDay": {
          "onceOff": {
            "individual": 0,
            "nonIndividual": 0
          },
          "ongoing": {
            "individual": 0,
            "nonIndividual": 0
          }
        },
        "previousDays": [
          {
            "onceOff": {
              "individual": 0,
              "nonIndividual": 0
            },
            "ongoing": {
              "individual": 0,
              "nonIndividual": 0
            }
          }
        ]
      },
      "revokedAuthorisationCount": {
        "currentDay": {
          "individual": 0,
          "nonIndividual": 0
        },
        "previousDays": [
          {
            "individual": 0,
            "nonIndividual": 0
          }
        ]
      },
      "amendedAuthorisationCount": {
        "currentDay": {
          "individual": 0,
          "nonIndividual": 0
        },
        "previousDays": [
          {
            "individual": 0,
            "nonIndividual": 0
          }
        ]
      },
      "expiredAuthorisationCount": {
        "currentDay": {
          "individual": 0,
          "nonIndividual": 0
        },
        "previousDays": [
          {
            "individual": 0,
            "nonIndividual": 0
          }
        ]
      },
      "abandonedConsentFlowCount": {
        "currentDay": 0,
        "previousDays": [
          0
        ]
      }
    }
  },
  "links": {
    "self": "string"
  },
  "meta": {}
}
```

<h3 id="get-metrics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[ResponseMetricsListV4](#schemacdr-admin-apiresponsemetricslistv4)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Missing Field](#error-400-field-missing)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li></ul>|[ResponseErrorListV2](#schemacdr-admin-apiresponseerrorlistv2)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|[ResponseErrorListV2](#schemacdr-admin-apiresponseerrorlistv2)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-v|string||The [version](#response-headers) of the API end point that the data holder has responded with.|



      <aside class="notice">
If the Data Holder supports Private Key JWT client authentication to authenticate the CDR Register, authorisation requires the following scope:
<a href="#authorisation-scopes">admin:metrics.basic:read</a>.<br/><br/>
Otherwise, the scope is not applicable when the Data Holder supports Self-Signed JWT client authentication to authenticate the CDR Register.
</aside>

<aside class="success">
This operation may only be called by the CDR Register
</aside>




<h2 class="schema-heading" id="cdr-admin-api-schemas">Schemas</h2>
<a class="schema-link" id="cdr-admin-api-schemas"></a>

<h3 class="schema-toc" id="tocSresponsemetricslistv4">ResponseMetricsListV4</h3>

<a id="schemacdr-admin-apiresponsemetricslistv4"></a>

```json
{
  "data": {
    "requestTime": "string",
    "availability": {
      "aggregate": {
        "currentMonth": "string",
        "previousMonths": [
          "string"
        ]
      },
      "unauthenticated": {
        "currentMonth": "string",
        "previousMonths": [
          "string"
        ]
      },
      "authenticated": {
        "currentMonth": "string",
        "previousMonths": [
          "string"
        ]
      }
    },
    "performance": {
      "currentDay": "string",
      "previousDays": [
        "string"
      ]
    },
    "invocations": {
      "unauthenticated": {
        "currentDay": 0,
        "previousDays": [
          0
        ]
      },
      "highPriority": {
        "currentDay": 0,
        "previousDays": [
          0
        ]
      },
      "lowPriority": {
        "currentDay": 0,
        "previousDays": [
          0
        ]
      },
      "unattended": {
        "currentDay": 0,
        "previousDays": [
          0
        ]
      },
      "largePayload": {
        "currentDay": 0,
        "previousDays": [
          0
        ]
      },
      "secondary": {
        "currentDay": 0,
        "previousDays": [
          0
        ]
      },
      "largeSecondary": {
        "currentDay": 0,
        "previousDays": [
          0
        ]
      }
    },
    "averageResponse": {
      "unauthenticated": {
        "currentDay": 0,
        "previousDays": [
          0
        ]
      },
      "highPriority": {
        "currentDay": 0,
        "previousDays": [
          0
        ]
      },
      "lowPriority": {
        "currentDay": 0,
        "previousDays": [
          0
        ]
      },
      "unattended": {
        "currentDay": 0,
        "previousDays": [
          0
        ]
      },
      "largePayload": {
        "currentDay": 0,
        "previousDays": [
          0
        ]
      },
      "secondary": {
        "primary": {
          "currentDay": 0,
          "previousDays": [
            0
          ]
        },
        "secondary": {
          "currentDay": 0,
          "previousDays": [
            0
          ]
        }
      },
      "largeSecondary": {
        "primary": {
          "currentDay": 0,
          "previousDays": [
            0
          ]
        },
        "secondary": {
          "currentDay": 0,
          "previousDays": [
            0
          ]
        }
      }
    },
    "sessionCount": {
      "currentDay": 0,
      "previousDays": [
        0
      ]
    },
    "averageTps": {
      "aggregate": {
        "currentDay": 0,
        "previousDays": [
          0
        ]
      },
      "unauthenticated": {
        "currentDay": 0,
        "previousDays": [
          0
        ]
      },
      "authenticated": {
        "currentDay": 0,
        "previousDays": [
          0
        ]
      }
    },
    "peakTps": {
      "aggregate": {
        "currentDay": 0,
        "previousDays": [
          0
        ]
      },
      "unauthenticated": {
        "currentDay": 0,
        "previousDays": [
          0
        ]
      },
      "authenticated": {
        "currentDay": 0,
        "previousDays": [
          0
        ]
      }
    },
    "errors": {
      "aggregate": {
        "currentDay": 0,
        "previousDays": [
          0
        ]
      },
      "unauthenticated": {
        "currentDay": {
          "500": 0,
          "property1": 0,
          "property2": 0
        },
        "previousDays": [
          {
            "500": 0,
            "property1": 0,
            "property2": 0
          }
        ]
      },
      "authenticated": {
        "currentDay": {
          "500": 0,
          "property1": 0,
          "property2": 0
        },
        "previousDays": [
          {
            "500": 0,
            "property1": 0,
            "property2": 0
          }
        ]
      }
    },
    "rejections": {
      "authenticated": {
        "currentDay": 0,
        "previousDays": [
          0
        ]
      },
      "unauthenticated": {
        "currentDay": 0,
        "previousDays": [
          0
        ]
      }
    },
    "customerCount": 0,
    "recipientCount": 0,
    "secondaryHolder": {
      "errors": {
        "currentDay": 0,
        "previousDays": [
          0
        ]
      },
      "rejections": {
        "currentDay": 0,
        "previousDays": [
          0
        ]
      }
    },
    "authorisations": {
      "activeAuthorisationCount": {
        "individual": 0,
        "nonIndividual": 0
      },
      "newAuthorisationCount": {
        "currentDay": {
          "onceOff": {
            "individual": 0,
            "nonIndividual": 0
          },
          "ongoing": {
            "individual": 0,
            "nonIndividual": 0
          }
        },
        "previousDays": [
          {
            "onceOff": {
              "individual": 0,
              "nonIndividual": 0
            },
            "ongoing": {
              "individual": 0,
              "nonIndividual": 0
            }
          }
        ]
      },
      "revokedAuthorisationCount": {
        "currentDay": {
          "individual": 0,
          "nonIndividual": 0
        },
        "previousDays": [
          {
            "individual": 0,
            "nonIndividual": 0
          }
        ]
      },
      "amendedAuthorisationCount": {
        "currentDay": {
          "individual": 0,
          "nonIndividual": 0
        },
        "previousDays": [
          {
            "individual": 0,
            "nonIndividual": 0
          }
        ]
      },
      "expiredAuthorisationCount": {
        "currentDay": {
          "individual": 0,
          "nonIndividual": 0
        },
        "previousDays": [
          {
            "individual": 0,
            "nonIndividual": 0
          }
        ]
      },
      "abandonedConsentFlowCount": {
        "currentDay": 0,
        "previousDays": [
          0
        ]
      }
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
|data|object|mandatory|none|
|» requestTime|[DateTimeString](#common-field-types)|mandatory|The date and time that the metrics in this payload were requested.|
|» availability|[AvailabilityMetricsV2](#schemacdr-admin-apiavailabilitymetricsv2)|mandatory|Availability metrics|
|» performance|[PerformanceMetricsV2](#schemacdr-admin-apiperformancemetricsv2)|mandatory|Percentage of calls within the performance thresholds|
|» invocations|[InvocationMetricsV3](#schemacdr-admin-apiinvocationmetricsv3)|mandatory|Number of API calls in each performance tier over time|
|» averageResponse|[AverageResponseMetricsV2](#schemacdr-admin-apiaverageresponsemetricsv2)|mandatory|Average response time in seconds, at millisecond resolution, within each performance tier|
|» sessionCount|[SessionCountMetricsV2](#schemacdr-admin-apisessioncountmetricsv2)|mandatory|Session counts over time. Note that a session is defined as the provisioning of an Access Token.|
|» averageTps|[AverageTPSMetricsV2](#schemacdr-admin-apiaveragetpsmetricsv2)|mandatory|Average transactions per second over time|
|» peakTps|[PeakTPSMetricsV2](#schemacdr-admin-apipeaktpsmetricsv2)|mandatory|Peak transactions per second over time|
|» errors|[ErrorMetricsV2](#schemacdr-admin-apierrormetricsv2)|mandatory|Number of calls resulting in error due to server execution over time|
|» rejections|[RejectionMetricsV3](#schemacdr-admin-apirejectionmetricsv3)|mandatory|Number of calls rejected due to traffic thresholds over time|
|» customerCount|[NaturalNumber](#common-field-types)|mandatory|Number of customers with active authorisations at the time of the call|
|» recipientCount|[NaturalNumber](#common-field-types)|mandatory|Number of Data Recipient Software Products with active authorisations at the time of the call|
|» secondaryHolder|[SecondaryHolderMetricsV2](#schemacdr-admin-apisecondaryholdermetricsv2)|conditional|Errors and rejections received by the primary data holder from the secondary data holder.  Mandatory for data holders designated for a Shared Responsibility Data Request data cluster|
|» authorisations|[AuthorisationMetrics](#schemacdr-admin-apiauthorisationmetrics)|mandatory|Authorisation counts for the data holder|
|links|[Links](#schemacdr-admin-apilinks)|mandatory|none|
|meta|[Meta](#schemacdr-admin-apimeta)|optional|none|

<h3 class="schema-toc" id="tocSavailabilitymetricsv2">AvailabilityMetricsV2</h3>

<a id="schemacdr-admin-apiavailabilitymetricsv2"></a>

```json
{
  "aggregate": {
    "currentMonth": "string",
    "previousMonths": [
      "string"
    ]
  },
  "unauthenticated": {
    "currentMonth": "string",
    "previousMonths": [
      "string"
    ]
  },
  "authenticated": {
    "currentMonth": "string",
    "previousMonths": [
      "string"
    ]
  }
}

```

*Availability metrics*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|aggregate|object|mandatory|Aggregated availability metrics|
|» currentMonth|[RateString](#common-field-types)|conditional|Percentage availability of the CDR platform so far for the current calendar month. 0.0 means 0%. 1.0 means 100%. Must be a positive value or zero|
|» previousMonths|[string]|conditional|Percentage availability of the CDR platform for previous calendar months. The first element indicates the last month and so on. A maximum of twelve entries is required if available. 0.0 means 0%. 1.0 means 100%. Values must be a positive or zero|
|unauthenticated|object|mandatory|Availability metrics for the unauthenticated aspects of the CDR regime|
|» currentMonth|[RateString](#common-field-types)|conditional|Percentage availability of the CDR platform so far for the current calendar month. 0.0 means 0%. 1.0 means 100%. Must be a positive value or zero|
|» previousMonths|[string]|conditional|Percentage availability of the CDR platform for previous calendar months. The first element indicates the last month and so on. A maximum of twelve entries is required if available. 0.0 means 0%. 1.0 means 100%. Values must be a positive or zero|
|authenticated|object|mandatory|Availability metrics for the authenticated aspects of the CDR regime|
|» currentMonth|[RateString](#common-field-types)|conditional|Percentage availability of the CDR platform so far for the current calendar month. 0.0 means 0%. 1.0 means 100%. Must be a positive value or zero|
|» previousMonths|[string]|conditional|Percentage availability of the CDR platform for previous calendar months. The first element indicates the last month and so on. A maximum of twelve entries is required if available. 0.0 means 0%. 1.0 means 100%. Values must be a positive or zero|

<h3 class="schema-toc" id="tocSperformancemetricsv2">PerformanceMetricsV2</h3>

<a id="schemacdr-admin-apiperformancemetricsv2"></a>

```json
{
  "currentDay": "string",
  "previousDays": [
    "string"
  ]
}

```

*Percentage of calls within Primary Data Holder performance thresholds. Note that Secondary Data Holder performance <b>MUST</b> be excluded from this metric.*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|currentDay|[RateString](#common-field-types)|conditional|Percentage of calls within the performance threshold for the current day. 0.0 means 0%. 1.0 means 100%. Must be a positive value or zero|
|previousDays|[string]|conditional|Percentage of calls within the performance threshold for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available. 0.0 means 0%. 1.0 means 100%. Values must be a positive or zero|

<h3 class="schema-toc" id="tocSinvocationmetricsv3">InvocationMetricsV3</h3>

<a id="schemacdr-admin-apiinvocationmetricsv3"></a>

```json
{
  "unauthenticated": {
    "currentDay": 0,
    "previousDays": [
      0
    ]
  },
  "highPriority": {
    "currentDay": 0,
    "previousDays": [
      0
    ]
  },
  "lowPriority": {
    "currentDay": 0,
    "previousDays": [
      0
    ]
  },
  "unattended": {
    "currentDay": 0,
    "previousDays": [
      0
    ]
  },
  "largePayload": {
    "currentDay": 0,
    "previousDays": [
      0
    ]
  },
  "secondary": {
    "currentDay": 0,
    "previousDays": [
      0
    ]
  },
  "largeSecondary": {
    "currentDay": 0,
    "previousDays": [
      0
    ]
  }
}

```

*Number of API calls in each performance tier over time*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|unauthenticated|object|mandatory|API call counts for the unauthenticated tier|
|» currentDay|[NaturalNumber](#common-field-types)|conditional|API call counts for current day|
|» previousDays|[integer]|conditional|API call counts for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available|
|highPriority|object|mandatory|API call counts for the high priority tier|
|» currentDay|[NaturalNumber](#common-field-types)|conditional|API call counts for current day|
|» previousDays|[integer]|conditional|API call counts for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available|
|lowPriority|object|mandatory|API call counts for the low priority tier|
|» currentDay|[NaturalNumber](#common-field-types)|conditional|API call counts for current day|
|» previousDays|[integer]|conditional|API call counts for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available|
|unattended|object|mandatory|API call counts for the unattended tier|
|» currentDay|[NaturalNumber](#common-field-types)|conditional|API call counts for current day|
|» previousDays|[integer]|conditional|API call counts for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available|
|largePayload|object|mandatory|API call counts for the large payload tier|
|» currentDay|[NaturalNumber](#common-field-types)|conditional|API call counts for current day|
|» previousDays|[integer]|conditional|API call counts for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available|
|secondary|object|conditional|API call counts for the Shared Responsibility Data Requests tier.  Mandatory for data holders designated for a Shared Responsibility Data Request data cluster|
|» currentDay|[NaturalNumber](#common-field-types)|conditional|API call counts for current day|
|» previousDays|[integer]|conditional|API call counts for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available|
|largeSecondary|object|conditional|API call counts for the large Shared Responsibility Data Requests tier.  Mandatory for data holders designated for a Shared Responsibility Data Request data cluster|
|» currentDay|[NaturalNumber](#common-field-types)|conditional|API call counts for current day|
|» previousDays|[integer]|conditional|API call counts for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available|

<h3 class="schema-toc" id="tocSaverageresponsemetricsv2">AverageResponseMetricsV2</h3>

<a id="schemacdr-admin-apiaverageresponsemetricsv2"></a>

```json
{
  "unauthenticated": {
    "currentDay": 0,
    "previousDays": [
      0
    ]
  },
  "highPriority": {
    "currentDay": 0,
    "previousDays": [
      0
    ]
  },
  "lowPriority": {
    "currentDay": 0,
    "previousDays": [
      0
    ]
  },
  "unattended": {
    "currentDay": 0,
    "previousDays": [
      0
    ]
  },
  "largePayload": {
    "currentDay": 0,
    "previousDays": [
      0
    ]
  },
  "secondary": {
    "primary": {
      "currentDay": 0,
      "previousDays": [
        0
      ]
    },
    "secondary": {
      "currentDay": 0,
      "previousDays": [
        0
      ]
    }
  },
  "largeSecondary": {
    "primary": {
      "currentDay": 0,
      "previousDays": [
        0
      ]
    },
    "secondary": {
      "currentDay": 0,
      "previousDays": [
        0
      ]
    }
  }
}

```

*Average response time in seconds, at millisecond resolution, within each performance tier*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|unauthenticated|object|mandatory|Average response time for the unauthenticated tier|
|» currentDay|number|conditional|Average response time for current day|
|» previousDays|[number]|conditional|Average response time for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available.|
|highPriority|object|mandatory|Average response time for the high priority tier|
|» currentDay|number|conditional|Average response time for current day|
|» previousDays|[number]|conditional|Average response time for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available.|
|lowPriority|object|mandatory|Average response time for the low priority tier|
|» currentDay|number|conditional|Average response time for current day|
|» previousDays|[number]|conditional|Average response time for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available.|
|unattended|object|mandatory|Average response time for the unattended tier|
|» currentDay|number|conditional|Average response time for current day|
|» previousDays|[number]|conditional|Average response time for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available.|
|largePayload|object|mandatory|Average response time for the large payload tier|
|» currentDay|number|conditional|Average response time for current day|
|» previousDays|[number]|conditional|Average response time for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available.|
|secondary|object|conditional|Average response time for the secondary tier.  Mandatory for data holders designated for a Shared Responsibility Data Request data cluster|
|» primary|object|mandatory|Average response time as measured for the primary data holder|
|»» currentDay|number|conditional|Average response time for current day|
|»» previousDays|[number]|conditional|Average response time for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available.|
|» secondary|object|mandatory|Average response time as measured for the secondary data holder|
|»» currentDay|number|conditional|Average response time for current day|
|»» previousDays|[number]|conditional|Average response time for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available.|
|» largeSecondary|object|conditional|Average response time for the large payload tier.  Mandatory for data holders designated for a Shared Responsibility Data Request data cluster|
|»» primary|object|mandatory|Average response time as measured for the primary data holder|
|»»» currentDay|number|conditional|Average response time for current day|
|»»» previousDays|[number]|conditional|Average response time for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available.|
|»» secondary|object|mandatory|Average response time as measured for the secondary data holder|
|»»» currentDay|number|conditional|Average response time for current day|
|»»» previousDays|[number]|conditional|Average response time for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available.|

<h3 class="schema-toc" id="tocSsessioncountmetricsv2">SessionCountMetricsV2</h3>

<a id="schemacdr-admin-apisessioncountmetricsv2"></a>

```json
{
  "currentDay": 0,
  "previousDays": [
    0
  ]
}

```

*Session counts over time. Note that a session is defined as the provisioning of an Access Token.*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|currentDay|[NaturalNumber](#common-field-types)|conditional|Session count for current day|
|previousDays|[integer]|conditional|Session count for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available|

<h3 class="schema-toc" id="tocSaveragetpsmetricsv2">AverageTPSMetricsV2</h3>

<a id="schemacdr-admin-apiaveragetpsmetricsv2"></a>

```json
{
  "aggregate": {
    "currentDay": 0,
    "previousDays": [
      0
    ]
  },
  "unauthenticated": {
    "currentDay": 0,
    "previousDays": [
      0
    ]
  },
  "authenticated": {
    "currentDay": 0,
    "previousDays": [
      0
    ]
  }
}

```

*Average transactions per second over time*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|aggregate|object|mandatory|Aggregate average transactions per second over time for all endpoints|
|» currentDay|number|conditional|Average TPS for current day. Must be a positive value or zero|
|» previousDays|[number]|conditional|Average TPS for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available. Values must be a positive or zero|
|unauthenticated|object|mandatory|Average transactions per second over time for unauthenticated endpoints|
|» currentDay|number|conditional|Average TPS for current day. Must be a positive value or zero|
|» previousDays|[number]|conditional|Average TPS for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available. Values must be a positive or zero|
|authenticated|object|mandatory|Average transactions per second over time for authenticated endpoints|
|» currentDay|number|conditional|Average TPS for current day. Must be a positive value or zero|
|» previousDays|[number]|conditional|Average TPS for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available. Values must be a positive or zero|

<h3 class="schema-toc" id="tocSpeaktpsmetricsv2">PeakTPSMetricsV2</h3>

<a id="schemacdr-admin-apipeaktpsmetricsv2"></a>

```json
{
  "aggregate": {
    "currentDay": 0,
    "previousDays": [
      0
    ]
  },
  "unauthenticated": {
    "currentDay": 0,
    "previousDays": [
      0
    ]
  },
  "authenticated": {
    "currentDay": 0,
    "previousDays": [
      0
    ]
  }
}

```

*Peak transactions per second over time*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|aggregate|object|mandatory|Aggregate peak transactions per second over time for all endpoints|
|» currentDay|number|conditional|Peak TPS for current day. Must be a positive value or zero|
|» previousDays|[number]|conditional|Peak TPS for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available. Values must be a positive or zero|
|unauthenticated|object|mandatory|Peak transactions per second over time for unauthenticated endpoints|
|» currentDay|number|conditional|Peak TPS for current day. Must be a positive value or zero|
|» previousDays|[number]|conditional|Peak TPS for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available. Values must be a positive or zero|
|authenticated|object|mandatory|Peak transactions per second over time for authenticated endpoints|
|» currentDay|number|conditional|Peak TPS for current day. Must be a positive value or zero|
|» previousDays|[number]|conditional|Peak TPS for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available. Values must be a positive or zero|

<h3 class="schema-toc" id="tocSerrormetricsv2">ErrorMetricsV2</h3>

<a id="schemacdr-admin-apierrormetricsv2"></a>

```json
{
  "aggregate": {
    "currentDay": 0,
    "previousDays": [
      0
    ]
  },
  "unauthenticated": {
    "currentDay": {
      "500": 0,
      "property1": 0,
      "property2": 0
    },
    "previousDays": [
      {
        "500": 0,
        "property1": 0,
        "property2": 0
      }
    ]
  },
  "authenticated": {
    "currentDay": {
      "500": 0,
      "property1": 0,
      "property2": 0
    },
    "previousDays": [
      {
        "500": 0,
        "property1": 0,
        "property2": 0
      }
    ]
  }
}

```

*Number of calls resulting in error due to server execution over time*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|aggregate|object|mandatory|Aggregate number of calls resulting in error due to server execution over time for all endpoints|
|» currentDay|[NaturalNumber](#common-field-types)|conditional|Error counts for current day|
|» previousDays|[integer]|conditional|Error counts for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available|
|unauthenticated|object|mandatory|Number of calls resulting in error due to server execution over time for unauthenticated endpoints|
|» currentDay|object|conditional|Error counts, by HTTP error code, for current day|
|»» **additionalProperties**|[NaturalNumber](#common-field-types)|optional|Number of errors for a specific HTTP error code.  Note that the property name must be 3 digits represent the HTTP error code the error is for|
|»» 500|[NaturalNumber](#common-field-types)|optional|Number of errors for HTTP error code 500.  Note that this field is an example of a single entry due to the lack of OAS support for the JSON Schema `patternProperties` syntax.  See the `additionalProperties` field in this schema for the generic property structure for error code counts|
|» previousDays|[object]|conditional|Error counts, by HTTP error code, for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available|
|»» **additionalProperties**|[NaturalNumber](#common-field-types)|optional|Number of errors for a specific HTTP error code.  Note that the property name must be 3 digits represent the HTTP error code the error is for|
|»» 500|[NaturalNumber](#common-field-types)|optional|Number of errors for HTTP error code 500.  Note that this field is an example of a single entry due to the lack of OAS support JSON Schema `patternProperties` syntax.  See the `additionalProperties` field in this schema for the generic property structure for error code counts|
|» authenticated|object|mandatory|Number of calls resulting in error due to server execution over time for authenticated endpoints|
|»» currentDay|object|conditional|Error counts, by HTTP error code, for current day|
|»»» **additionalProperties**|[NaturalNumber](#common-field-types)|optional|Number of errors for a specific HTTP error code.  Note that the property name must be 3 digits represent the HTTP error code the error is for|
|»»» 500|[NaturalNumber](#common-field-types)|optional|Number of errors for HTTP error code 500.  Note that this field is an example of a single entry due to the lack of OAS support for the JSON Schema `patternProperties` syntax.  See the `additionalProperties` field in this schema for the generic property structure for error code counts|
|»» previousDays|[object]|conditional|Error counts, by HTTP error code, for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available|
|»»» **additionalProperties**|[NaturalNumber](#common-field-types)|optional|Number of errors for a specific HTTP error code.  Note that the property name must be 3 digits represent the HTTP error code the error is for|
|»»» 500|[NaturalNumber](#common-field-types)|optional|Number of errors for HTTP error code 500.  Note that this field is an example of a single entry due to the lack of OAS support JSON Schema `patternProperties` syntax.  See the `additionalProperties` field in this schema for the generic property structure for error code counts|

<h3 class="schema-toc" id="tocSrejectionmetricsv3">RejectionMetricsV3</h3>

<a id="schemacdr-admin-apirejectionmetricsv3"></a>

```json
{
  "authenticated": {
    "currentDay": 0,
    "previousDays": [
      0
    ]
  },
  "unauthenticated": {
    "currentDay": 0,
    "previousDays": [
      0
    ]
  }
}

```

*Number of calls rejected due to traffic thresholds over time*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|authenticated|object|mandatory|Rejection counts for all authenticated end points|
|» currentDay|[NaturalNumber](#common-field-types)|conditional|Number of calls rejected for current day|
|» previousDays|[integer]|conditional|Number of calls rejected for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available.|
|unauthenticated|object|mandatory|Rejection counts for all unauthenticated end points|
|» currentDay|[NaturalNumber](#common-field-types)|conditional|Number of calls rejected for current day|
|» previousDays|[integer]|conditional|Number of calls rejected for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available.|

<h3 class="schema-toc" id="tocSsecondaryholdermetricsv2">SecondaryHolderMetricsV2</h3>

<a id="schemacdr-admin-apisecondaryholdermetricsv2"></a>

```json
{
  "errors": {
    "currentDay": 0,
    "previousDays": [
      0
    ]
  },
  "rejections": {
    "currentDay": 0,
    "previousDays": [
      0
    ]
  }
}

```

*Errors and rejections received by the primary data holder from the secondary data holder.  Mandatory for data holders designated for a Shared Responsibility Data Request data cluster*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|errors|object|mandatory|Number of calls resulting in error due to server execution over time|
|» currentDay|[NaturalNumber](#common-field-types)|conditional|Number of errors for current day|
|» previousDays|[integer]|conditional|Number of errors for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available|
|rejections|object|mandatory|Number of calls rejected due to traffic thresholds over time|
|» currentDay|[NaturalNumber](#common-field-types)|conditional|Number of rejections for current day|
|» previousDays|[integer]|conditional|Number of rejections for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available|

<h3 class="schema-toc" id="tocSauthorisationmetrics">AuthorisationMetrics</h3>

<a id="schemacdr-admin-apiauthorisationmetrics"></a>

```json
{
  "activeAuthorisationCount": {
    "individual": 0,
    "nonIndividual": 0
  },
  "newAuthorisationCount": {
    "currentDay": {
      "onceOff": {
        "individual": 0,
        "nonIndividual": 0
      },
      "ongoing": {
        "individual": 0,
        "nonIndividual": 0
      }
    },
    "previousDays": [
      {
        "onceOff": {
          "individual": 0,
          "nonIndividual": 0
        },
        "ongoing": {
          "individual": 0,
          "nonIndividual": 0
        }
      }
    ]
  },
  "revokedAuthorisationCount": {
    "currentDay": {
      "individual": 0,
      "nonIndividual": 0
    },
    "previousDays": [
      {
        "individual": 0,
        "nonIndividual": 0
      }
    ]
  },
  "amendedAuthorisationCount": {
    "currentDay": {
      "individual": 0,
      "nonIndividual": 0
    },
    "previousDays": [
      {
        "individual": 0,
        "nonIndividual": 0
      }
    ]
  },
  "expiredAuthorisationCount": {
    "currentDay": {
      "individual": 0,
      "nonIndividual": 0
    },
    "previousDays": [
      {
        "individual": 0,
        "nonIndividual": 0
      }
    ]
  },
  "abandonedConsentFlowCount": {
    "currentDay": 0,
    "previousDays": [
      0
    ]
  }
}

```

*Authorisation counts for the data holder*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|activeAuthorisationCount|object|mandatory|The number of active ongoing authorisations|
|» individual|[NaturalNumber](#common-field-types)|mandatory|Active ongoing authorisation count for individual customers|
|» nonIndividual|[NaturalNumber](#common-field-types)|mandatory|Active ongoing authorisation count for non-individual customers|
|newAuthorisationCount|object|mandatory|The number of new authorisations|
|» currentDay|object|conditional|Number of new authorisations for the current day|
|»» onceOff|object|mandatory|New authorisation count for once-off authorisations|
|»»» individual|[NaturalNumber](#common-field-types)|mandatory|New authorisation count for individual customers|
|»»» nonIndividual|[NaturalNumber](#common-field-types)|mandatory|New authorisation count for non-individual customers|
|»» ongoing|object|mandatory|New authorisation count for ongoing authorisations|
|»»» individual|[NaturalNumber](#common-field-types)|mandatory|New authorisation count for individual customers|
|»»» nonIndividual|[NaturalNumber](#common-field-types)|mandatory|New authorisation count for non-individual customers|
|»» previousDays|[object]|conditional|Number of new authorisations for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available|
|»»» onceOff|object|mandatory|New authorisation count for once-off authorisations|
|»»»» individual|[NaturalNumber](#common-field-types)|mandatory|New authorisation count for individual customers|
|»»»» nonIndividual|[NaturalNumber](#common-field-types)|mandatory|New authorisation count for non-individual customers|
|»»» ongoing|object|mandatory|New authorisation count for ongoing authorisations|
|»»»» individual|[NaturalNumber](#common-field-types)|mandatory|New authorisation count for individual customers|
|»»»» nonIndividual|[NaturalNumber](#common-field-types)|mandatory|New authorisation count for non-individual customers|
|»»» revokedAuthorisationCount|object|mandatory|The number of revoked authorisations|
|»»»» currentDay|object|conditional|Number of revoked authorisations for the current day|
|»»»»» individual|[NaturalNumber](#common-field-types)|mandatory|Revoked authorisation count for individual customers|
|»»»»» nonIndividual|[NaturalNumber](#common-field-types)|mandatory|Revoked authorisation count for non-individual customers|
|»»»» previousDays|[object]|conditional|Number of revoked authorisations for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available|
|»»»»» individual|[NaturalNumber](#common-field-types)|mandatory|Revoked authorisation count for individual customers|
|»»»»» nonIndividual|[NaturalNumber](#common-field-types)|mandatory|Revoked authorisation count for non-individual customers|
|»»»» amendedAuthorisationCount|object|mandatory|The number of amended ongoing authorisations|
|»»»»» currentDay|object|conditional|Number of amended authorisations for the current day|
|»»»»»» individual|[NaturalNumber](#common-field-types)|mandatory|Amended authorisation count for individual customers|
|»»»»»» nonIndividual|[NaturalNumber](#common-field-types)|mandatory|Amended authorisation count for non-individual customers|
|»»»»» previousDays|[object]|conditional|Number of amended authorisations for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available|
|»»»»»» individual|[NaturalNumber](#common-field-types)|mandatory|Amended authorisation count for individual customers|
|»»»»»» nonIndividual|[NaturalNumber](#common-field-types)|mandatory|Amended authorisation count for non-individual customers|
|»»»»» expiredAuthorisationCount|object|mandatory|The number of expired ongoing authorisations|
|»»»»»» currentDay|object|conditional|Number of expired authorisations for the current day|
|»»»»»»» individual|[NaturalNumber](#common-field-types)|mandatory|Expired authorisation count for individual customers|
|»»»»»»» nonIndividual|[NaturalNumber](#common-field-types)|mandatory|Expired authorisation count for non-individual customers|
|»»»»»» previousDays|[object]|conditional|Number of expired authorisations for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available|
|»»»»»»» individual|[NaturalNumber](#common-field-types)|mandatory|Expired authorisation count for individual customers|
|»»»»»»» nonIndividual|[NaturalNumber](#common-field-types)|mandatory|Expired authorisation count for non-individual customers|
|»»»»»» abandonedConsentFlowCount|object|mandatory|The number of consents flows that were not successfully authorised|
|»»»»»»» currentDay|[NaturalNumber](#common-field-types)|conditional|Number of consents flows that were not successfully authorised for the current day|
|»»»»»»» previousDays|[integer]|conditional|Number of consents flows that were not successfully authorised for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available|

<h3 class="schema-toc" id="tocSlinks">Links</h3>

<a id="schemacdr-admin-apilinks"></a>

```json
{
  "self": "string"
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|self|[URIString](#common-field-types)|mandatory|Fully qualified link to this API call|

<h3 class="schema-toc" id="tocSmeta">Meta</h3>

<a id="schemacdr-admin-apimeta"></a>

```json
{}

```

### Properties

*None*

<h3 class="schema-toc" id="tocSmetaerror">MetaError</h3>

<a id="schemacdr-admin-apimetaerror"></a>

```json
{
  "urn": "string"
}

```

*Additional data for customised error codes*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|urn|string|conditional|The CDR error code URN which the application-specific error code extends. Mandatory if the error `code` is an application-specific error rather than a standardised error code.|

<h3 class="schema-toc" id="tocSresponseerrorlistv2">ResponseErrorListV2</h3>

<a id="schemacdr-admin-apiresponseerrorlistv2"></a>

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
|» meta|[MetaError](#schemacdr-admin-apimetaerror)|optional|Additional data for customised error codes|
