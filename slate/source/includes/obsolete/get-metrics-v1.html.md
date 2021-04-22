---
title: Get Metrics v1
#language_tabs: # must be one of https://git.io/vQNgJ
#  - shell
#  - javascript

toc_footers:
  - <a href='../../index.html'>Consumer Data Standards</a>

search: false
---

# Get Metrics V1
This page documents the obsolete version 1 of the Get Metrics end point.

This version is to be ceased to be called by the CDR Register by **October 31st 2021** and can be decommissioned by affected data holders as of that date.
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

This end point allows the ACCC to obtain operational statistics from the Data Holder on the operation of their CDR compliant implementation. The statistics obtainable from this end point are determined by the non-functional requirements for the CDR regime.

###Endpoint Version
|   |  |
|---|--|
|Version|**1**

<h3 id="get-metrics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|period|query|string|optional|The period of metrics to be requested. Values can be CURRENT (meaning metrics for current day), HISTORIC (meaning metrics for previous days or months) or ALL. If absent the default is ALL.|
|x-v|header|string|mandatory|Version of the API end point requested by the client. Must be set to a positive integer. The data holder should respond with the highest supported version between [x-min-v](../../#request-headers) and [x-v](../../request-headers). If the value of [x-min-v](../../request-headers) is equal to or higher than the value of [x-v](../../request-headers) then the [x-min-v](../../request-headers) header should be treated as absent. If all versions requested are not supported then the data holder should respond with a 406 Not Acceptable. See [HTTP Headers](../../#request-headers)|
|x-min-v|header|string|optional|Minimum version of the API end point requested by the client. Must be set to a positive integer if provided. The data holder should respond with the highest supported version between [x-min-v]#request-headers) and [x-v](../../#request-headers). If all versions requested are not supported then the data holder should respond with a 406 Not Acceptable.|

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
      "currentMonth": 0,
      "previousMonths": [
        0
      ]
    },
    "performance": {
      "currentDay": 0,
      "previousDays": [
        0
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
      }
    },
    "sessionCount": {
      "currentDay": 0,
      "previousDays": [
        0
      ]
    },
    "averageTps": {
      "currentDay": 0,
      "previousDays": [
        0
      ]
    },
    "peakTps": {
      "currentDay": 0,
      "previousDays": [
        0
      ]
    },
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
    },
    "customerCount": 0,
    "recipientCount": 0
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
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[ResponseMetricsList](#schemaresponsemetricslist)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-v|string||The [version](##response-headers) of the API end point that the data holder has responded with.|

<aside class="success">
This operation may only be called by the CDR Register
</aside>

## Schemas

<h2 id="tocSresponsemetricslist">ResponseMetricsList</h2>

<a id="schemaresponsemetricslist"></a>

```json
{
  "data": {
    "requestTime": "string",
    "availability": {
      "currentMonth": 0,
      "previousMonths": [
        0
      ]
    },
    "performance": {
      "currentDay": 0,
      "previousDays": [
        0
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
      }
    },
    "sessionCount": {
      "currentDay": 0,
      "previousDays": [
        0
      ]
    },
    "averageTps": {
      "currentDay": 0,
      "previousDays": [
        0
      ]
    },
    "peakTps": {
      "currentDay": 0,
      "previousDays": [
        0
      ]
    },
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
    },
    "customerCount": 0,
    "recipientCount": 0
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
|» requestTime|[DateTimeString](#common-field-types)|mandatory|none|The date and time that the metrics in this payload were requested.|
|» availability|[AvailabilityMetrics](#schemaavailabilitymetrics)|conditional|none|Percentage availability of the CDR platform over time|
|» performance|[PerformanceMetrics](#schemaperformancemetrics)|conditional|none|Percentage of calls within the performance thresholds|
|» invocations|[InvocationMetrics](#schemainvocationmetrics)|conditional|none|Number of API calls in each performance tier over time|
|» averageResponse|[AverageResponseMetrics](#schemaaverageresponsemetrics)|conditional|none|Average response time in seconds, at millisecond resolution, within each performance tier|
|» sessionCount|[SessionCountMetrics](#schemasessioncountmetrics)|conditional|none|Session counts over time. Note that a session is defined as the provisioning of an Access Token.|
|» averageTps|[AverageTPSMetrics](#schemaaveragetpsmetrics)|conditional|none|Transactions per second over time|
|» peakTps|[PeakTPSMetrics](#schemapeaktpsmetrics)|conditional|none|Maximum record transactions per second over time|
|» errors|[ErrorMetrics](#schemaerrormetrics)|conditional|none|Number of calls resulting in error due to server execution over time|
|» rejections|[RejectionMetrics](#schemarejectionmetrics)|conditional|none|Number of calls rejected due to traffic thresholds over time|
|» customerCount|integer|conditional|none|Number of customers with active authorisations at the time of the call|
|» recipientCount|integer|conditional|none|Number of data recipients with active authorisations at the time of the call|
|links|[Links](#schemalinks)|mandatory|none|none|
|meta|[Meta](#schemameta)|optional|none|none|

<h2 id="tocSavailabilitymetrics">AvailabilityMetrics</h2>

<a id="schemaavailabilitymetrics"></a>

```json
{
  "currentMonth": 0,
  "previousMonths": [
    0
  ]
}

```

*Percentage availability of the CDR platform over time*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currentMonth|number|conditional|none|Percentage availability of the CDR platform so far for the current calendar month. 0.0 means 0%. 1.0 means 100%.|
|previousMonths|[number]|conditional|none|Percentage availability of the CDR platform for previous calendar months. The first element indicates the last month and so on. A maximum of twelve entries is required if available. 0.0 means 0%. 1.0 means 100%.|

<h2 id="tocSperformancemetrics">PerformanceMetrics</h2>

<a id="schemaperformancemetrics"></a>

```json
{
  "currentDay": 0,
  "previousDays": [
    0
  ]
}

```

*Percentage of calls within the performance thresholds*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currentDay|number|conditional|none|Percentage of calls within the performance threshold for the current day. 0.0 means 0%. 1.0 means 100%|
|previousDays|[number]|conditional|none|Percentage of calls within the performance threshold for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available. 0.0 means 0%. 1.0 means 100%|

<h2 id="tocSinvocationmetrics">InvocationMetrics</h2>

<a id="schemainvocationmetrics"></a>

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
  }
}

```

*Number of API calls in each performance tier over time*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|unauthenticated|object|conditional|none|API call counts for the unauthenticated tier|
|» currentDay|number|conditional|none|API call counts for current day|
|» previousDays|[number]|conditional|none|API call counts for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available|
|highPriority|object|conditional|none|API call counts for the high priority tier|
|» currentDay|number|conditional|none|API call counts for current day|
|» previousDays|[number]|conditional|none|API call counts for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available|
|lowPriority|object|conditional|none|API call counts for the low priority tier|
|» currentDay|number|conditional|none|API call counts for current day|
|» previousDays|[number]|conditional|none|API call counts for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available|
|unattended|object|conditional|none|API call counts for the unattended tier|
|» currentDay|number|conditional|none|API call counts for current day|
|» previousDays|[number]|conditional|none|API call counts for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available|
|largePayload|object|conditional|none|API call counts for the large payload tier|
|» currentDay|number|conditional|none|API call counts for current day|
|» previousDays|[number]|conditional|none|API call counts for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available|

<h2 id="tocSaverageresponsemetrics">AverageResponseMetrics</h2>

<a id="schemaaverageresponsemetrics"></a>

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
  }
}

```

*Average response time in seconds, at millisecond resolution, within each performance tier*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|unauthenticated|object|conditional|none|Average response time for the unauthenticated tier|
|» currentDay|number|conditional|none|Average response time for current day|
|» previousDays|[number]|conditional|none|Average response time for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available.|
|highPriority|object|conditional|none|Average response time for the high priority tier|
|» currentDay|number|conditional|none|Average response time for current day|
|» previousDays|[number]|conditional|none|Average response time for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available.|
|lowPriority|object|conditional|none|Average response time for the low priority tier|
|» currentDay|number|conditional|none|Average response time for current day|
|» previousDays|[number]|conditional|none|Average response time for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available.|
|unattended|object|conditional|none|Average response time for the unattended tier|
|» currentDay|number|conditional|none|Average response time for current day|
|» previousDays|[number]|conditional|none|Average response time for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available.|
|largePayload|object|conditional|none|Average response time for the large payload tier|
|» currentDay|number|conditional|none|Average response time for current day|
|» previousDays|[number]|conditional|none|Average response time for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available.|

<h2 id="tocSsessioncountmetrics">SessionCountMetrics</h2>

<a id="schemasessioncountmetrics"></a>

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

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currentDay|number|conditional|none|Session count for current day|
|previousDays|[number]|conditional|none|Session count for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available|

<h2 id="tocSaveragetpsmetrics">AverageTPSMetrics</h2>

<a id="schemaaveragetpsmetrics"></a>

```json
{
  "currentDay": 0,
  "previousDays": [
    0
  ]
}

```

*Transactions per second over time*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currentDay|number|conditional|none|Average TPS for current day|
|previousDays|[number]|conditional|none|Average TPS for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available|

<h2 id="tocSpeaktpsmetrics">PeakTPSMetrics</h2>

<a id="schemapeaktpsmetrics"></a>

```json
{
  "currentDay": 0,
  "previousDays": [
    0
  ]
}

```

*Maximum record transactions per second over time*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currentDay|number|conditional|none|Peak TPS for current day|
|previousDays|[number]|conditional|none|Peak TPS for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available|

<h2 id="tocSerrormetrics">ErrorMetrics</h2>

<a id="schemaerrormetrics"></a>

```json
{
  "currentDay": 0,
  "previousDays": [
    0
  ]
}

```

*Number of calls resulting in error due to server execution over time*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currentDay|number|conditional|none|Number of errors for current day|
|previousDays|[number]|conditional|none|Number of errors for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available|

<h2 id="tocSrejectionmetrics">RejectionMetrics</h2>

<a id="schemarejectionmetrics"></a>

```json
{
  "currentDay": 0,
  "previousDays": [
    0
  ]
}

```

*Number of calls rejected due to traffic thresholds over time*
