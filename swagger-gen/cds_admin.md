


## Metadata Update

<a id="opIdmetadataUpdate"></a>

> Code samples

```http
POST https://data.holder.com.au/cds-au/v1/admin/register/metadata HTTP/1.1
Host: data.holder.com.au
Content-Type: application/json
Accept: application/json
x-v: string
x-min-v: string

```

```javascript
var headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'x-v':'string',
  'x-min-v':'string'

};

$.ajax({
  url: 'https://data.holder.com.au/cds-au/v1/admin/register/metadata',
  method: 'post',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`POST /admin/register/metadata`

Indicate that a critical update to the metadata for Accredited Data Recipients has been made and should be obtained

> Body parameter

```json
{
  "data": {
    "action": "REFRESH"
  },
  "meta": {}
}
```

###Endpoint Version
|   |  |
|---|--|
|Version|**1**

<h3 id="metadata-update-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-v|header|string|mandatory|Version of the API end point requested by the client. Must be set to a positive integer. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If the value of [x-min-v](#request-headers) is equal to or higher than the value of [x-v](#request-headers) then the [x-min-v](#request-headers) header should be treated as absent. If all versions requested are not supported then the data holder should respond with a 406 Not Acceptable. See [HTTP Headers](#request-headers)|
|x-min-v|header|string|optional|Minimum version of the API end point requested by the client. Must be set to a positive integer if provided. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If all versions requested are not supported then the data holder should respond with a 406 Not Acceptable.|
|body|body|[RequestMetaDataUpdate](#schemarequestmetadataupdate)|mandatory|none|

> Example responses

<h3 id="metadata-update-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|
|4xx|[**Client Error**](https://tools.ietf.org/html/rfc7231#section-6.5)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|None|

<h3 id="metadata-update-responseschema">Response Schema</h3>

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-v|string||The [version](#response-headers) of the API end point that the data holder has responded with.|

  
    
      <aside class="notice">
If the Data Holder supports Private Key JWT client authentication to authenticate the CDR Register, authorisation requires the following scope:
<a href="#authorisation-scopes">admin:metadata:update</a>.<br/><br/>
Otherwise, the scope is not applicable when the Data Holder supports Self-Signed JWT client authentication to authenticate the CDR Register.
</aside>

<aside class="success">
This operation may only be called by the CDR Register
</aside>

    
  

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

NOTE: This version must be implemented by **October 1st 2022**

Obsolete versions: [v1](includes/obsolete/get-metrics-v1.html) [v2](includes/obsolete/get-metrics-v2.html).

If the Data Holder supports private_key_jwt client authentication they MUST validate the scope.

###Endpoint Version
|   |  |
|---|--|
|Version|**3**

<h3 id="get-metrics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|period|query|string|optional|The period of metrics to be requested. Values can be CURRENT (meaning metrics for current day), HISTORIC (meaning metrics for previous days or months) or ALL. If absent the default is ALL.|
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
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[ResponseMetricsListV3](#schemaresponsemetricslistv3)|
|4xx|[**Client Error**](https://tools.ietf.org/html/rfc7231#section-6.5)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|None|

<h3 id="get-metrics-responseschema">Response Schema</h3>

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

    
  

<h2 class="schema-heading" id="consumer-data-standards-administration-end-points-schemas">Schemas</h2>
<a class="schema-link" id="consumer-data-standards-administration-end-points-schemas"></a>

<h2 class="schema-toc" id="tocSrequestmetadataupdate">RequestMetaDataUpdate</h2>

<a id="schemarequestmetadataupdate"></a>

```json
{
  "data": {
    "action": "REFRESH"
  },
  "meta": {}
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|mandatory|none|none|
|» action|string|mandatory|none|The action to take for the meta data. At the moment the only option is REFRESH which requires the data holder to call the ACCC to refresh meta data as soon as practicable|
|meta|[Meta](#schemameta)|optional|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|action|REFRESH|

<h2 class="schema-toc" id="tocSresponsemetricslistv3">ResponseMetricsListV3</h2>

<a id="schemaresponsemetricslistv3"></a>

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
    }
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
|» availability|[AvailabilityMetrics](#schemaavailabilitymetrics)|mandatory|none|Percentage availability of the CDR platform over time|
|» performance|[PerformanceMetrics](#schemaperformancemetrics)|mandatory|none|Percentage of calls within the performance thresholds|
|» invocations|[InvocationMetricsV2](#schemainvocationmetricsv2)|mandatory|none|Number of API calls in each performance tier over time|
|» averageResponse|[AverageResponseMetricsV2](#schemaaverageresponsemetricsv2)|mandatory|none|Average response time in seconds, at millisecond resolution, within each performance tier|
|» sessionCount|[SessionCountMetrics](#schemasessioncountmetrics)|mandatory|none|Session counts over time. Note that a session is defined as the provisioning of an Access Token.|
|» averageTps|[AverageTPSMetrics](#schemaaveragetpsmetrics)|mandatory|none|Transactions per second over time|
|» peakTps|[PeakTPSMetrics](#schemapeaktpsmetrics)|mandatory|none|Maximum record transactions per second over time|
|» errors|[ErrorMetrics](#schemaerrormetrics)|mandatory|none|Number of calls resulting in error due to server execution over time|
|» rejections|[RejectionMetricsV2](#schemarejectionmetricsv2)|mandatory|none|Number of calls rejected due to traffic thresholds over time|
|» customerCount|integer|mandatory|none|Number of customers with active authorisations at the time of the call|
|» recipientCount|integer|mandatory|none|Number of Data Recipient Software Products with active authorisations at the time of the call|
|» secondaryHolder|[SecondaryHolderMetrics](#schemasecondaryholdermetrics)|conditional|none|Errors and rejections received by the primary data holder from the secondary data holder.  Mandatory for data holders designated for a secondary responsibility request data cluster|
|links|[Links](#schemalinks)|mandatory|none|none|
|meta|[Meta](#schemameta)|optional|none|none|

<h2 class="schema-toc" id="tocSavailabilitymetrics">AvailabilityMetrics</h2>

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

<h2 class="schema-toc" id="tocSperformancemetrics">PerformanceMetrics</h2>

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

<h2 class="schema-toc" id="tocSinvocationmetricsv2">InvocationMetricsV2</h2>

<a id="schemainvocationmetricsv2"></a>

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

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|unauthenticated|object|mandatory|none|API call counts for the unauthenticated tier|
|» currentDay|number|conditional|none|API call counts for current day|
|» previousDays|[number]|conditional|none|API call counts for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available|
|highPriority|object|mandatory|none|API call counts for the high priority tier|
|» currentDay|number|conditional|none|API call counts for current day|
|» previousDays|[number]|conditional|none|API call counts for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available|
|lowPriority|object|mandatory|none|API call counts for the low priority tier|
|» currentDay|number|conditional|none|API call counts for current day|
|» previousDays|[number]|conditional|none|API call counts for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available|
|unattended|object|mandatory|none|API call counts for the unattended tier|
|» currentDay|number|conditional|none|API call counts for current day|
|» previousDays|[number]|conditional|none|API call counts for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available|
|largePayload|object|mandatory|none|API call counts for the large payload tier|
|» currentDay|number|conditional|none|API call counts for current day|
|» previousDays|[number]|conditional|none|API call counts for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available|
|secondary|object|conditional|none|API call counts for the secondary responsibility requests tier.  Mandatory for data holders designated for a secondary responsibility request data cluster|
|» currentDay|number|conditional|none|API call counts for current day|
|» previousDays|[number]|conditional|none|API call counts for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available|
|largeSecondary|object|conditional|none|API call counts for the large secondary responsibility requests tier.  Mandatory for data holders designated for a secondary responsibility request data cluster|
|» currentDay|number|conditional|none|API call counts for current day|
|» previousDays|[number]|conditional|none|API call counts for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available|

<h2 class="schema-toc" id="tocSaverageresponsemetricsv2">AverageResponseMetricsV2</h2>

<a id="schemaaverageresponsemetricsv2"></a>

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

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|unauthenticated|object|mandatory|none|Average response time for the unauthenticated tier|
|» currentDay|number|conditional|none|Average response time for current day|
|» previousDays|[number]|conditional|none|Average response time for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available.|
|highPriority|object|mandatory|none|Average response time for the high priority tier|
|» currentDay|number|conditional|none|Average response time for current day|
|» previousDays|[number]|conditional|none|Average response time for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available.|
|lowPriority|object|mandatory|none|Average response time for the low priority tier|
|» currentDay|number|conditional|none|Average response time for current day|
|» previousDays|[number]|conditional|none|Average response time for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available.|
|unattended|object|mandatory|none|Average response time for the unattended tier|
|» currentDay|number|conditional|none|Average response time for current day|
|» previousDays|[number]|conditional|none|Average response time for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available.|
|largePayload|object|mandatory|none|Average response time for the large payload tier|
|» currentDay|number|conditional|none|Average response time for current day|
|» previousDays|[number]|conditional|none|Average response time for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available.|
|secondary|object|conditional|none|Average response time for the secondary tier.  Mandatory for data holders designated for a secondary responsibility request data cluster|
|» primary|object|mandatory|none|Average response time as measured for the primary data holder|
|»» currentDay|number|conditional|none|Average response time for current day|
|»» previousDays|[number]|conditional|none|Average response time for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available.|
|» secondary|object|mandatory|none|Average response time as measured for the secondary data holder|
|»» currentDay|number|conditional|none|Average response time for current day|
|»» previousDays|[number]|conditional|none|Average response time for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available.|
|» largeSecondary|object|conditional|none|Average response time for the large payload tier.  Mandatory for data holders designated for a secondary responsibility request data cluster|
|»» primary|object|mandatory|none|Average response time as measured for the primary data holder|
|»»» currentDay|number|conditional|none|Average response time for current day|
|»»» previousDays|[number]|conditional|none|Average response time for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available.|
|»» secondary|object|mandatory|none|Average response time as measured for the secondary data holder|
|»»» currentDay|number|conditional|none|Average response time for current day|
|»»» previousDays|[number]|conditional|none|Average response time for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available.|

<h2 class="schema-toc" id="tocSsessioncountmetrics">SessionCountMetrics</h2>

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

<h2 class="schema-toc" id="tocSaveragetpsmetrics">AverageTPSMetrics</h2>

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

<h2 class="schema-toc" id="tocSpeaktpsmetrics">PeakTPSMetrics</h2>

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

<h2 class="schema-toc" id="tocSerrormetrics">ErrorMetrics</h2>

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

<h2 class="schema-toc" id="tocSrejectionmetricsv2">RejectionMetricsV2</h2>

<a id="schemarejectionmetricsv2"></a>

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

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authenticated|object|mandatory|none|Rejection counts for all authenticated end points|
|» currentDay|number|conditional|none|Number of calls rejected for current day|
|» previousDays|[number]|conditional|none|Number of calls rejected for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available.|
|unauthenticated|object|mandatory|none|Rejection counts for all uauthenticated end points|
|» currentDay|number|conditional|none|Number of calls rejected for current day|
|» previousDays|[number]|conditional|none|Number of calls rejected for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available.|

<h2 class="schema-toc" id="tocSsecondaryholdermetrics">SecondaryHolderMetrics</h2>

<a id="schemasecondaryholdermetrics"></a>

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

*Errors and rejections received by the primary data holder from the secondary data holder.  Mandatory for data holders designated for a secondary responsibility request data cluster*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|object|mandatory|none|Number of calls resulting in error due to server execution over time|
|» currentDay|number|conditional|none|Number of errors for current day|
|» previousDays|[number]|conditional|none|Number of errors for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available|
|rejections|object|mandatory|none|Number of calls resulting in a rejection due to server execution over time|
|» currentDay|number|conditional|none|Number of rejections for current day|
|» previousDays|[number]|conditional|none|Number of rejections for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available|

<h2 class="schema-toc" id="tocSlinks">Links</h2>

<a id="schemalinks"></a>

```json
{
  "self": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|self|[URIString](#common-field-types)|mandatory|none|Fully qualified link to this API call|

<h2 class="schema-toc" id="tocSmeta">Meta</h2>

<a id="schemameta"></a>

```json
{}

```

### Properties

*None*

