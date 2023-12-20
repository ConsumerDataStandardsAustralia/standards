

<h2 id="cdr-admin-api_metadata-update">Metadata Update</h2>
<p id="metadata-update" class="orig-anchor"></p>

> Code samples

```http
POST https://data.holder.com.au/cds-au/v1/admin/register/metadata HTTP/1.1
Host: data.holder.com.au
Content-Type: application/json
Accept: application/json
x-v: string
x-min-v: string

```

```javascript--nodejs
const fetch = require('node-fetch');
const inputBody = '{
  "data": {
    "action": "REFRESH"
  },
  "meta": {}
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'x-v':'string',
  'x-min-v':'string'

};

fetch('https://data.holder.com.au/cds-au/v1/admin/register/metadata',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

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

<h3 id="cdr-admin-api_metadata-update_endpoint-version">Endpoint Version</h3>
|   |  |
|---|--|
|Version|**1**

<h3 id="cdr-admin-api_metadata-update_parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-v|header|string|mandatory|Version of the API end point requested by the client. Must be set to a positive integer. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If the value of [x-min-v](#request-headers) is equal to or higher than the value of [x-v](#request-headers) then the [x-min-v](#request-headers) header should be treated as absent. If all versions requested are not supported then the data holder should respond with a 406 Not Acceptable. See [HTTP Headers](#request-headers)|
|x-min-v|header|string|optional|Minimum version of the API end point requested by the client. Must be set to a positive integer if provided. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If all versions requested are not supported then the data holder should respond with a 406 Not Acceptable.|
|body|body|[RequestMetaDataUpdate](#schemacdr-admin-apirequestmetadataupdate)|mandatory|none|

> Example responses

> 200 Response

```json
null
```

<h3 id="cdr-admin-api_metadata-update_responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Missing Field](#error-400-field-missing)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li></ul>|[ResponseErrorListV2](#schemacdr-admin-apiresponseerrorlistv2)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|[ResponseErrorListV2](#schemacdr-admin-apiresponseerrorlistv2)|

<h3 id="cdr-admin-api_metadata-update_response-schema">Response Schema</h3> 

<h3 id="cdr-admin-api_metadata-update_response-headers">Response Headers</h3>

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

    
  

<h2 id="cdr-admin-api_get-metrics">Get Metrics</h2>
<p id="get-metrics" class="orig-anchor"></p>

> Code samples

```http
GET https://data.holder.com.au/cds-au/v1/admin/metrics HTTP/1.1
Host: data.holder.com.au
Accept: application/json
x-v: string
x-min-v: string

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json',
  'x-v':'string',
  'x-min-v':'string'

};

fetch('https://data.holder.com.au/cds-au/v1/admin/metrics',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /admin/metrics`

This end point allows the ACCC to obtain operational statistics from the Data Holder (at the Data Holder Brand level) on the operation of their CDR compliant implementation. The statistics obtainable from this end point are determined by the non-functional requirements for the CDR regime.

This end point is not required to be implemented by the Australian Energy Market Operator, the Australian Energy Regulator or the Department of State administered by the Minister of Victoria administering the National Electricity (Victoria) Act 2005 (Vic).

NOTE: This version **MUST** be implemented by **May 13th 2024**

Obsolete versions: [v1](includes/obsolete/get-metrics-v1.html) [v2](includes/obsolete/get-metrics-v2.html).

Deprecated versions:

- [v3](includes/obsolete/get-metrics-v3.html) - Implementation not required for Data Holders going live on, or after, 1st November 2023.  Other Data Holders **MAY** retire this version from the earlier of **13th May 2024** or from the time the ACCC announce that they no longer call this version
- [v4](includes/obsolete/get-metrics-v4.html) - This version, or v5, **MUST** be implemented by **November 1st 2023**

If the Data Holder supports private_key_jwt client authentication they MUST validate the scope.

<h3 id="cdr-admin-api_get-metrics_endpoint-version">Endpoint Version</h3>
|   |  |
|---|--|
|Version|**5**

<h3 id="cdr-admin-api_get-metrics_parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|period|query|[Enum](#common-field-types)|optional|The period of metrics to be requested. Values can be CURRENT (meaning metrics for current period, dependent on the metric type), HISTORIC (meaning metrics for previous period, depending on the metric type) or ALL. If absent the default is ALL.|
|x-v|header|string|mandatory|Version of the API end point requested by the client. Must be set to a positive integer. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If the value of [x-min-v](#request-headers) is equal to or higher than the value of [x-v](#request-headers) then the [x-min-v](#request-headers) header should be treated as absent. If all versions requested are not supported then the data holder should respond with a 406 Not Acceptable. See [HTTP Headers](#request-headers)|
|x-min-v|header|string|optional|Minimum version of the API end point requested by the client. Must be set to a positive integer if provided. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If all versions requested are not supported then the data holder should respond with a 406 Not Acceptable.|

<h4 id="cdr-admin-api_get-metrics_enumerated-values-parameters">Enumerated Values</h4>

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
      "aggregate": {
        "currentDay": "string",
        "previousDays": [
          "string"
        ]
      },
      "highPriority": {
        "currentDay": [
          "string"
        ],
        "previousDays": [
          [
            "string"
          ]
        ]
      },
      "largePayload": {
        "currentDay": [
          "string"
        ],
        "previousDays": [
          [
            "string"
          ]
        ]
      },
      "lowPriority": {
        "currentDay": [
          "string"
        ],
        "previousDays": [
          [
            "string"
          ]
        ]
      },
      "unattended": {
        "currentDay": [
          "string"
        ],
        "previousDays": [
          [
            "string"
          ]
        ]
      },
      "unauthenticated": {
        "currentDay": [
          "string"
        ],
        "previousDays": [
          [
            "string"
          ]
        ]
      },
      "secondary": {
        "primary": {
          "currentDay": [
            "string"
          ],
          "previousDays": [
            [
              "string"
            ]
          ]
        },
        "secondary": {
          "currentDay": [
            "string"
          ],
          "previousDays": [
            [
              "string"
            ]
          ]
        }
      },
      "largeSecondary": {
        "primary": {
          "currentDay": [
            "string"
          ],
          "previousDays": [
            [
              "string"
            ]
          ]
        },
        "secondary": {
          "currentDay": [
            "string"
          ],
          "previousDays": [
            [
              "string"
            ]
          ]
        }
      }
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
      },
      "abandonmentsByStage": {
        "preIdentification": {
          "currentDay": 0,
          "previousDays": [
            0
          ]
        },
        "preAuthentication": {
          "currentDay": 0,
          "previousDays": [
            0
          ]
        },
        "preAccountSelection": {
          "currentDay": 0,
          "previousDays": [
            0
          ]
        },
        "preAuthorisation": {
          "currentDay": 0,
          "previousDays": [
            0
          ]
        },
        "rejected": {
          "currentDay": 0,
          "previousDays": [
            0
          ]
        },
        "failedTokenExchange": {
          "currentDay": 0,
          "previousDays": [
            0
          ]
        }
      }
    }
  },
  "links": {
    "self": "string"
  },
  "meta": {}
}
```

<h3 id="cdr-admin-api_get-metrics_responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[ResponseMetricsListV5](#schemacdr-admin-apiresponsemetricslistv5)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Missing Field](#error-400-field-missing)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li></ul>|[ResponseErrorListV2](#schemacdr-admin-apiresponseerrorlistv2)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|[ResponseErrorListV2](#schemacdr-admin-apiresponseerrorlistv2)|

<h3 id="cdr-admin-api_get-metrics_response-headers">Response Headers</h3>

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

<h3 class="schema-toc" id="cdr-admin-api_schemas_tocSrequestmetadataupdate">RequestMetaDataUpdate</h3>
<p id="tocSrequestmetadataupdate" class="orig-anchor"></p>

<a class="schema-anchor" id="schemacdr-admin-apirequestmetadataupdate"></a>

```json
{
  "data": {
    "action": "REFRESH"
  },
  "meta": {}
}

```

<h3 id="cdr-admin-api_requestmetadataupdate_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|data|object|mandatory|none|
|» action|[Enum](#common-field-types)|mandatory|The action to take for the meta data. At the moment the only option is REFRESH which requires the data holder to call the ACCC to refresh meta data as soon as practicable|
|meta|[Meta](#schemacdr-admin-apimeta)|optional|none|

<h4 id="cdr-admin-api_requestmetadataupdate_enumerated-values-main">Enumerated Values</h4>

|Property|Value|
|---|---|
|action|REFRESH|

<h3 class="schema-toc" id="cdr-admin-api_schemas_tocSresponsemetricslistv5">ResponseMetricsListV5</h3>
<p id="tocSresponsemetricslistv5" class="orig-anchor"></p>

<a class="schema-anchor" id="schemacdr-admin-apiresponsemetricslistv5"></a>

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
      "aggregate": {
        "currentDay": "string",
        "previousDays": [
          "string"
        ]
      },
      "highPriority": {
        "currentDay": [
          "string"
        ],
        "previousDays": [
          [
            "string"
          ]
        ]
      },
      "largePayload": {
        "currentDay": [
          "string"
        ],
        "previousDays": [
          [
            "string"
          ]
        ]
      },
      "lowPriority": {
        "currentDay": [
          "string"
        ],
        "previousDays": [
          [
            "string"
          ]
        ]
      },
      "unattended": {
        "currentDay": [
          "string"
        ],
        "previousDays": [
          [
            "string"
          ]
        ]
      },
      "unauthenticated": {
        "currentDay": [
          "string"
        ],
        "previousDays": [
          [
            "string"
          ]
        ]
      },
      "secondary": {
        "primary": {
          "currentDay": [
            "string"
          ],
          "previousDays": [
            [
              "string"
            ]
          ]
        },
        "secondary": {
          "currentDay": [
            "string"
          ],
          "previousDays": [
            [
              "string"
            ]
          ]
        }
      },
      "largeSecondary": {
        "primary": {
          "currentDay": [
            "string"
          ],
          "previousDays": [
            [
              "string"
            ]
          ]
        },
        "secondary": {
          "currentDay": [
            "string"
          ],
          "previousDays": [
            [
              "string"
            ]
          ]
        }
      }
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
      },
      "abandonmentsByStage": {
        "preIdentification": {
          "currentDay": 0,
          "previousDays": [
            0
          ]
        },
        "preAuthentication": {
          "currentDay": 0,
          "previousDays": [
            0
          ]
        },
        "preAccountSelection": {
          "currentDay": 0,
          "previousDays": [
            0
          ]
        },
        "preAuthorisation": {
          "currentDay": 0,
          "previousDays": [
            0
          ]
        },
        "rejected": {
          "currentDay": 0,
          "previousDays": [
            0
          ]
        },
        "failedTokenExchange": {
          "currentDay": 0,
          "previousDays": [
            0
          ]
        }
      }
    }
  },
  "links": {
    "self": "string"
  },
  "meta": {}
}

```

<h3 id="cdr-admin-api_responsemetricslistv5_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|data|object|mandatory|none|
|» requestTime|[DateTimeString](#common-field-types)|mandatory|The date and time that the metrics in this payload were requested.|
|» availability|[AvailabilityMetricsV2](#schemacdr-admin-apiavailabilitymetricsv2)|mandatory|Availability metrics|
|» performance|[PerformanceMetricsV3](#schemacdr-admin-apiperformancemetricsv3)|mandatory|Percentage of calls within the performance thresholds in each performance tier over time|
|» invocations|[InvocationMetricsV3](#schemacdr-admin-apiinvocationmetricsv3)|mandatory|Number of API calls in each performance tier over time|
|» averageResponse|[AverageResponseMetricsV2](#schemacdr-admin-apiaverageresponsemetricsv2)|mandatory|Average response time in seconds, at millisecond resolution, within each performance tier|
|» sessionCount|[SessionCountMetricsV2](#schemacdr-admin-apisessioncountmetricsv2)|mandatory|Session counts over time. Note that a session is defined as the provisioning of an Access Token.|
|» averageTps|[AverageTPSMetricsV2](#schemacdr-admin-apiaveragetpsmetricsv2)|mandatory|Average transactions per second over time|
|» peakTps|[PeakTPSMetricsV2](#schemacdr-admin-apipeaktpsmetricsv2)|mandatory|Peak transactions per second over time|
|» errors|[ErrorMetricsV2](#schemacdr-admin-apierrormetricsv2)|mandatory|Number of calls resulting in error due to server execution over time|
|» rejections|[RejectionMetricsV3](#schemacdr-admin-apirejectionmetricsv3)|mandatory|Number of calls rejected due to traffic thresholds over time|
|» customerCount|[NaturalNumber](#common-field-types)|mandatory|Number of customers with active authorisations at the time of the call|
|» recipientCount|[NaturalNumber](#common-field-types)|mandatory|Number of Data Recipient Software Products with active authorisations at the time of the call|
|» secondaryHolder|[SecondaryHolderMetricsV2](#schemacdr-admin-apisecondaryholdermetricsv2)|conditional|Errors and rejections received by the primary data holder from the secondary data holder.  Mandatory for data holders designated for a Shared Responsibility Data Request data cluster|
|» authorisations|[AuthorisationMetricsV2](#schemacdr-admin-apiauthorisationmetricsv2)|mandatory|Authorisation counts for the data holder|
|links|[Links](#schemacdr-admin-apilinks)|mandatory|none|
|meta|[Meta](#schemacdr-admin-apimeta)|optional|none|

<h3 class="schema-toc" id="cdr-admin-api_schemas_tocSavailabilitymetricsv2">AvailabilityMetricsV2</h3>
<p id="tocSavailabilitymetricsv2" class="orig-anchor"></p>

<a class="schema-anchor" id="schemacdr-admin-apiavailabilitymetricsv2"></a>

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

<h3 id="cdr-admin-api_availabilitymetricsv2_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|aggregate|object|mandatory|Aggregated availability metrics|
|» currentMonth|[RateString](#common-field-types)|conditional|Percentage availability of the CDR platform so far for the current calendar month. 0.0 means 0%. 1.0 means 100%. Must be a positive value or zero|
|» previousMonths|[[RateString]](#common-field-types)|conditional|Percentage availability of the CDR platform for previous calendar months. The first element indicates the last month and so on. A maximum of twelve entries is required if available. 0.0 means 0%. 1.0 means 100%. Values must be a positive or zero|
|unauthenticated|object|mandatory|Availability metrics for the unauthenticated aspects of the CDR regime|
|» currentMonth|[RateString](#common-field-types)|conditional|Percentage availability of the CDR platform so far for the current calendar month. 0.0 means 0%. 1.0 means 100%. Must be a positive value or zero|
|» previousMonths|[[RateString]](#common-field-types)|conditional|Percentage availability of the CDR platform for previous calendar months. The first element indicates the last month and so on. A maximum of twelve entries is required if available. 0.0 means 0%. 1.0 means 100%. Values must be a positive or zero|
|authenticated|object|mandatory|Availability metrics for the authenticated aspects of the CDR regime|
|» currentMonth|[RateString](#common-field-types)|conditional|Percentage availability of the CDR platform so far for the current calendar month. 0.0 means 0%. 1.0 means 100%. Must be a positive value or zero|
|» previousMonths|[[RateString]](#common-field-types)|conditional|Percentage availability of the CDR platform for previous calendar months. The first element indicates the last month and so on. A maximum of twelve entries is required if available. 0.0 means 0%. 1.0 means 100%. Values must be a positive or zero|

<h3 class="schema-toc" id="cdr-admin-api_schemas_tocSperformancemetricsv3">PerformanceMetricsV3</h3>
<p id="tocSperformancemetricsv3" class="orig-anchor"></p>

<a class="schema-anchor" id="schemacdr-admin-apiperformancemetricsv3"></a>

```json
{
  "aggregate": {
    "currentDay": "string",
    "previousDays": [
      "string"
    ]
  },
  "highPriority": {
    "currentDay": [
      "string"
    ],
    "previousDays": [
      [
        "string"
      ]
    ]
  },
  "largePayload": {
    "currentDay": [
      "string"
    ],
    "previousDays": [
      [
        "string"
      ]
    ]
  },
  "lowPriority": {
    "currentDay": [
      "string"
    ],
    "previousDays": [
      [
        "string"
      ]
    ]
  },
  "unattended": {
    "currentDay": [
      "string"
    ],
    "previousDays": [
      [
        "string"
      ]
    ]
  },
  "unauthenticated": {
    "currentDay": [
      "string"
    ],
    "previousDays": [
      [
        "string"
      ]
    ]
  },
  "secondary": {
    "primary": {
      "currentDay": [
        "string"
      ],
      "previousDays": [
        [
          "string"
        ]
      ]
    },
    "secondary": {
      "currentDay": [
        "string"
      ],
      "previousDays": [
        [
          "string"
        ]
      ]
    }
  },
  "largeSecondary": {
    "primary": {
      "currentDay": [
        "string"
      ],
      "previousDays": [
        [
          "string"
        ]
      ]
    },
    "secondary": {
      "currentDay": [
        "string"
      ],
      "previousDays": [
        [
          "string"
        ]
      ]
    }
  }
}

```

*Percentage of calls within the performance thresholds in each performance tier over time*

<h3 id="cdr-admin-api_performancemetricsv3_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|aggregate|object|optional|Percentage of calls within Primary Data Holder performance thresholds. Note that Secondary Data Holder performance <b>MUST</b> be excluded from this metric.|
|» currentDay|[RateString](#common-field-types)|conditional|Percentage of calls within the performance threshold for the current day. 0.0 means 0%. 1.0 means 100%. Must be a positive value or zero|
|» previousDays|[[RateString]](#common-field-types)|conditional|Percentage of calls within the performance threshold for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available. 0.0 means 0%. 1.0 means 100%. Values must be a positive or zero|
|highPriority|object|mandatory|Percentage of high priority calls within the performance thresholds|
|» currentDay|[[RateString]](#common-field-types)|conditional|Array of contiguous hourly metrics for the current day.  Each element represents a 1 hour period starting from 12am-1am.  Timezone for determining 12am must be consistent but is at the discretion of the Data Holder|
|» previousDays|[array]|conditional|Percentage of calls within the performance threshold for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available. 0.0 means 0%. 1.0 means 100%. Values must be a positive or zero|
|largePayload|object|mandatory|Percentage of large payload calls within the performance thresholds|
|» currentDay|[[RateString]](#common-field-types)|conditional|Array of contiguous hourly metrics for the current day.  Each element represents a 1 hour period starting from 12am-1am.  Timezone for determining 12am must be consistent but is at the discretion of the Data Holder|
|» previousDays|[array]|conditional|Percentage of calls within the performance threshold for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available. 0.0 means 0%. 1.0 means 100%. Values must be a positive or zero|
|lowPriority|object|mandatory|Percentage of low priority calls within the performance thresholds|
|» currentDay|[[RateString]](#common-field-types)|conditional|Array of contiguous hourly metrics for the current day.  Each element represents a 1 hour period starting from 12am-1am.  Timezone for determining 12am must be consistent but is at the discretion of the Data Holder|
|» previousDays|[array]|conditional|Percentage of calls within the performance threshold for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available. 0.0 means 0%. 1.0 means 100%. Values must be a positive or zero|
|unattended|object|mandatory|Percentage of unattended calls within the performance thresholds|
|» currentDay|[[RateString]](#common-field-types)|conditional|Array of contiguous hourly metrics for the current day.  Each element represents a 1 hour period starting from 12am-1am.  Timezone for determining 12am must be consistent but is at the discretion of the Data Holder|
|» previousDays|[array]|conditional|Percentage of calls within the performance threshold for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available. 0.0 means 0%. 1.0 means 100%. Values must be a positive or zero|
|unauthenticated|object|mandatory|Percentage of unauthenticated calls within the performance thresholds|
|» currentDay|[[RateString]](#common-field-types)|conditional|Array of contiguous hourly metrics for the current day.  Each element represents a 1 hour period starting from 12am-1am.  Timezone for determining 12am must be consistent but is at the discretion of the Data Holder|
|» previousDays|[array]|conditional|Percentage of calls within the performance threshold for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available. 0.0 means 0%. 1.0 means 100%. Values must be a positive or zero|
|secondary|object|conditional|Percentage of Shared Responsibility calls within the performance thresholds. Mandatory for data holders designated for a Shared Responsibility Data Request data cluster|
|» primary|object|mandatory|Percentage of Shared Responsibility calls within the performance thresholds for the primary data holder|
|»» currentDay|[[RateString]](#common-field-types)|conditional|Array of contiguous hourly metrics for the current day.  Each element represents a 1 hour period starting from 12am-1am.  Timezone for determining 12am must be consistent but is at the discretion of the Data Holder|
|»» previousDays|[array]|conditional|Percentage of calls within the performance threshold for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available. 0.0 means 0%. 1.0 means 100%. Values must be a positive or zero|
|» secondary|object|mandatory|Percentage of Shared Responsibility calls within the performance thresholds for the secondary data holder|
|»» currentDay|[[RateString]](#common-field-types)|conditional|Array of contiguous hourly metrics for the current day.  Each element represents a 1 hour period starting from 12am-1am.  Timezone for determining 12am must be consistent but is at the discretion of the Data Holder|
|»» previousDays|[array]|conditional|Percentage of calls within the performance threshold for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available. 0.0 means 0%. 1.0 means 100%. Values must be a positive or zero|
|largeSecondary|object|conditional|Percentage of large Shared Responsibility calls within the performance thresholds. Mandatory for data holders designated for a Shared Responsibility Data Request data cluster|
|» primary|object|mandatory|Percentage of large Shared Responsibility calls within the performance thresholds for the secondary data holder|
|»» currentDay|[[RateString]](#common-field-types)|conditional|Array of contiguous hourly metrics for the current day.  Each element represents a 1 hour period starting from 12am-1am.  Timezone for determining 12am must be consistent but is at the discretion of the Data Holder|
|»» previousDays|[array]|conditional|Percentage of calls within the performance threshold for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available. 0.0 means 0%. 1.0 means 100%. Values must be a positive or zero|
|» secondary|object|mandatory|Percentage of large Shared Responsibility calls within the performance thresholds for the secondary data holder|
|»» currentDay|[[RateString]](#common-field-types)|conditional|Array of contiguous hourly metrics for the current day.  Each element represents a 1 hour period starting from 12am-1am.  Timezone for determining 12am must be consistent but is at the discretion of the Data Holder|
|»» previousDays|[array]|conditional|Percentage of calls within the performance threshold for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available. 0.0 means 0%. 1.0 means 100%. Values must be a positive or zero|

<h3 class="schema-toc" id="cdr-admin-api_schemas_tocSinvocationmetricsv3">InvocationMetricsV3</h3>
<p id="tocSinvocationmetricsv3" class="orig-anchor"></p>

<a class="schema-anchor" id="schemacdr-admin-apiinvocationmetricsv3"></a>

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

<h3 id="cdr-admin-api_invocationmetricsv3_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|unauthenticated|object|mandatory|API call counts for the unauthenticated tier|
|» currentDay|[NaturalNumber](#common-field-types)|conditional|API call counts for current day|
|» previousDays|[[NaturalNumber]](#common-field-types)|conditional|API call counts for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available|
|highPriority|object|mandatory|API call counts for the high priority tier|
|» currentDay|[NaturalNumber](#common-field-types)|conditional|API call counts for current day|
|» previousDays|[[NaturalNumber]](#common-field-types)|conditional|API call counts for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available|
|lowPriority|object|mandatory|API call counts for the low priority tier|
|» currentDay|[NaturalNumber](#common-field-types)|conditional|API call counts for current day|
|» previousDays|[[NaturalNumber]](#common-field-types)|conditional|API call counts for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available|
|unattended|object|mandatory|API call counts for the unattended tier|
|» currentDay|[NaturalNumber](#common-field-types)|conditional|API call counts for current day|
|» previousDays|[[NaturalNumber]](#common-field-types)|conditional|API call counts for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available|
|largePayload|object|mandatory|API call counts for the large payload tier|
|» currentDay|[NaturalNumber](#common-field-types)|conditional|API call counts for current day|
|» previousDays|[[NaturalNumber]](#common-field-types)|conditional|API call counts for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available|
|secondary|object|conditional|API call counts for the Shared Responsibility Data Requests tier.  Mandatory for data holders designated for a Shared Responsibility Data Request data cluster|
|» currentDay|[NaturalNumber](#common-field-types)|conditional|API call counts for current day|
|» previousDays|[[NaturalNumber]](#common-field-types)|conditional|API call counts for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available|
|largeSecondary|object|conditional|API call counts for the large Shared Responsibility Data Requests tier.  Mandatory for data holders designated for a Shared Responsibility Data Request data cluster|
|» currentDay|[NaturalNumber](#common-field-types)|conditional|API call counts for current day|
|» previousDays|[[NaturalNumber]](#common-field-types)|conditional|API call counts for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available|

<h3 class="schema-toc" id="cdr-admin-api_schemas_tocSaverageresponsemetricsv2">AverageResponseMetricsV2</h3>
<p id="tocSaverageresponsemetricsv2" class="orig-anchor"></p>

<a class="schema-anchor" id="schemacdr-admin-apiaverageresponsemetricsv2"></a>

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

<h3 id="cdr-admin-api_averageresponsemetricsv2_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|unauthenticated|object|mandatory|Average response time for the unauthenticated tier|
|» currentDay|number|conditional|Average response time for current day|
|» previousDays|[number]|conditional|Average response time for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available.|
|highPriority|object|mandatory|Average response time for the high priority tier|
|» currentDay|number|conditional|Average response time for current day|
|» previousDays|[number]|conditional|Average response time for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available.|
|lowPriority|object|mandatory|Average response time for the low priority tier|
|» currentDay|number|conditional|Average response time for current day|
|» previousDays|[number]|conditional|Average response time for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available.|
|unattended|object|mandatory|Average response time for the unattended tier|
|» currentDay|number|conditional|Average response time for current day|
|» previousDays|[number]|conditional|Average response time for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available.|
|largePayload|object|mandatory|Average response time for the large payload tier|
|» currentDay|number|conditional|Average response time for current day|
|» previousDays|[number]|conditional|Average response time for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available.|
|secondary|object|conditional|Average response time for the secondary tier.  Mandatory for data holders designated for a Shared Responsibility Data Request data cluster|
|» primary|object|mandatory|Average response time as measured for the primary data holder|
|»» currentDay|number|conditional|Average response time for current day|
|»» previousDays|[number]|conditional|Average response time for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available.|
|» secondary|object|mandatory|Average response time as measured for the secondary data holder|
|»» currentDay|number|conditional|Average response time for current day|
|»» previousDays|[number]|conditional|Average response time for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available.|
|largeSecondary|object|conditional|Average response time for the large payload tier.  Mandatory for data holders designated for a Shared Responsibility Data Request data cluster|
|» primary|object|mandatory|Average response time as measured for the primary data holder|
|»» currentDay|number|conditional|Average response time for current day|
|»» previousDays|[number]|conditional|Average response time for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available.|
|» secondary|object|mandatory|Average response time as measured for the secondary data holder|
|»» currentDay|number|conditional|Average response time for current day|
|»» previousDays|[number]|conditional|Average response time for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available.|

<h3 class="schema-toc" id="cdr-admin-api_schemas_tocSsessioncountmetricsv2">SessionCountMetricsV2</h3>
<p id="tocSsessioncountmetricsv2" class="orig-anchor"></p>

<a class="schema-anchor" id="schemacdr-admin-apisessioncountmetricsv2"></a>

```json
{
  "currentDay": 0,
  "previousDays": [
    0
  ]
}

```

*Session counts over time. Note that a session is defined as the provisioning of an Access Token.*

<h3 id="cdr-admin-api_sessioncountmetricsv2_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|currentDay|[NaturalNumber](#common-field-types)|conditional|Session count for current day|
|previousDays|[[NaturalNumber]](#common-field-types)|conditional|Session count for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available|

<h3 class="schema-toc" id="cdr-admin-api_schemas_tocSaveragetpsmetricsv2">AverageTPSMetricsV2</h3>
<p id="tocSaveragetpsmetricsv2" class="orig-anchor"></p>

<a class="schema-anchor" id="schemacdr-admin-apiaveragetpsmetricsv2"></a>

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

<h3 id="cdr-admin-api_averagetpsmetricsv2_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|aggregate|object|mandatory|Aggregate average transactions per second over time for all endpoints|
|» currentDay|number|conditional|Average TPS for current day. Must be a positive value or zero|
|» previousDays|[number]|conditional|Average TPS for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available. Values must be a positive or zero|
|unauthenticated|object|mandatory|Average transactions per second over time for unauthenticated endpoints|
|» currentDay|number|conditional|Average TPS for current day. Must be a positive value or zero|
|» previousDays|[number]|conditional|Average TPS for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available. Values must be a positive or zero|
|authenticated|object|mandatory|Average transactions per second over time for authenticated endpoints|
|» currentDay|number|conditional|Average TPS for current day. Must be a positive value or zero|
|» previousDays|[number]|conditional|Average TPS for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available. Values must be a positive or zero|

<h3 class="schema-toc" id="cdr-admin-api_schemas_tocSpeaktpsmetricsv2">PeakTPSMetricsV2</h3>
<p id="tocSpeaktpsmetricsv2" class="orig-anchor"></p>

<a class="schema-anchor" id="schemacdr-admin-apipeaktpsmetricsv2"></a>

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

<h3 id="cdr-admin-api_peaktpsmetricsv2_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|aggregate|object|mandatory|Aggregate peak transactions per second over time for all endpoints|
|» currentDay|number|conditional|Peak TPS for current day. Must be a positive value or zero|
|» previousDays|[number]|conditional|Peak TPS for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available. Values must be a positive or zero|
|unauthenticated|object|mandatory|Peak transactions per second over time for unauthenticated endpoints|
|» currentDay|number|conditional|Peak TPS for current day. Must be a positive value or zero|
|» previousDays|[number]|conditional|Peak TPS for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available. Values must be a positive or zero|
|authenticated|object|mandatory|Peak transactions per second over time for authenticated endpoints|
|» currentDay|number|conditional|Peak TPS for current day. Must be a positive value or zero|
|» previousDays|[number]|conditional|Peak TPS for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available. Values must be a positive or zero|

<h3 class="schema-toc" id="cdr-admin-api_schemas_tocSerrormetricsv2">ErrorMetricsV2</h3>
<p id="tocSerrormetricsv2" class="orig-anchor"></p>

<a class="schema-anchor" id="schemacdr-admin-apierrormetricsv2"></a>

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

<h3 id="cdr-admin-api_errormetricsv2_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|aggregate|object|mandatory|Aggregate number of calls resulting in error due to server execution over time for all endpoints|
|» currentDay|[NaturalNumber](#common-field-types)|conditional|Error counts for current day|
|» previousDays|[[NaturalNumber]](#common-field-types)|conditional|Error counts for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available|
|unauthenticated|object|mandatory|Number of calls resulting in error due to server execution over time for unauthenticated endpoints|
|» currentDay|object|conditional|Error counts, by HTTP error code, for current day|
|»» **additionalProperties**|[NaturalNumber](#common-field-types)|optional|Number of errors for a specific HTTP error code.  Note that the property name must be 3 digits represent the HTTP error code the error is for|
|»» 500|[NaturalNumber](#common-field-types)|optional|Number of errors for HTTP error code 500.  Note that this field is an example of a single entry due to the lack of OAS support for the JSON Schema `patternProperties` syntax.  See the `additionalProperties` field in this schema for the generic property structure for error code counts|
|» previousDays|[object]|conditional|Error counts, by HTTP error code, for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available|
|»» **additionalProperties**|[NaturalNumber](#common-field-types)|optional|Number of errors for a specific HTTP error code.  Note that the property name must be 3 digits represent the HTTP error code the error is for|
|»» 500|[NaturalNumber](#common-field-types)|optional|Number of errors for HTTP error code 500.  Note that this field is an example of a single entry due to the lack of OAS support JSON Schema `patternProperties` syntax.  See the `additionalProperties` field in this schema for the generic property structure for error code counts|
|authenticated|object|mandatory|Number of calls resulting in error due to server execution over time for authenticated endpoints|
|» currentDay|object|conditional|Error counts, by HTTP error code, for current day|
|»» **additionalProperties**|[NaturalNumber](#common-field-types)|optional|Number of errors for a specific HTTP error code.  Note that the property name must be 3 digits represent the HTTP error code the error is for|
|»» 500|[NaturalNumber](#common-field-types)|optional|Number of errors for HTTP error code 500.  Note that this field is an example of a single entry due to the lack of OAS support for the JSON Schema `patternProperties` syntax.  See the `additionalProperties` field in this schema for the generic property structure for error code counts|
|» previousDays|[object]|conditional|Error counts, by HTTP error code, for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available|
|»» **additionalProperties**|[NaturalNumber](#common-field-types)|optional|Number of errors for a specific HTTP error code.  Note that the property name must be 3 digits represent the HTTP error code the error is for|
|»» 500|[NaturalNumber](#common-field-types)|optional|Number of errors for HTTP error code 500.  Note that this field is an example of a single entry due to the lack of OAS support JSON Schema `patternProperties` syntax.  See the `additionalProperties` field in this schema for the generic property structure for error code counts|

<h3 class="schema-toc" id="cdr-admin-api_schemas_tocSrejectionmetricsv3">RejectionMetricsV3</h3>
<p id="tocSrejectionmetricsv3" class="orig-anchor"></p>

<a class="schema-anchor" id="schemacdr-admin-apirejectionmetricsv3"></a>

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

<h3 id="cdr-admin-api_rejectionmetricsv3_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|authenticated|object|mandatory|Rejection counts for all authenticated end points|
|» currentDay|[NaturalNumber](#common-field-types)|conditional|Number of calls rejected for current day|
|» previousDays|[[NaturalNumber]](#common-field-types)|conditional|Number of calls rejected for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available.|
|unauthenticated|object|mandatory|Rejection counts for all unauthenticated end points|
|» currentDay|[NaturalNumber](#common-field-types)|conditional|Number of calls rejected for current day|
|» previousDays|[[NaturalNumber]](#common-field-types)|conditional|Number of calls rejected for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available.|

<h3 class="schema-toc" id="cdr-admin-api_schemas_tocSsecondaryholdermetricsv2">SecondaryHolderMetricsV2</h3>
<p id="tocSsecondaryholdermetricsv2" class="orig-anchor"></p>

<a class="schema-anchor" id="schemacdr-admin-apisecondaryholdermetricsv2"></a>

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

<h3 id="cdr-admin-api_secondaryholdermetricsv2_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|errors|object|mandatory|Number of calls resulting in error due to server execution over time|
|» currentDay|[NaturalNumber](#common-field-types)|conditional|Number of errors for current day|
|» previousDays|[[NaturalNumber]](#common-field-types)|conditional|Number of errors for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available|
|rejections|object|mandatory|Number of calls rejected due to traffic thresholds over time|
|» currentDay|[NaturalNumber](#common-field-types)|conditional|Number of rejections for current day|
|» previousDays|[[NaturalNumber]](#common-field-types)|conditional|Number of rejections for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available|

<h3 class="schema-toc" id="cdr-admin-api_schemas_tocSauthorisationmetricsv2">AuthorisationMetricsV2</h3>
<p id="tocSauthorisationmetricsv2" class="orig-anchor"></p>

<a class="schema-anchor" id="schemacdr-admin-apiauthorisationmetricsv2"></a>

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
  },
  "abandonmentsByStage": {
    "preIdentification": {
      "currentDay": 0,
      "previousDays": [
        0
      ]
    },
    "preAuthentication": {
      "currentDay": 0,
      "previousDays": [
        0
      ]
    },
    "preAccountSelection": {
      "currentDay": 0,
      "previousDays": [
        0
      ]
    },
    "preAuthorisation": {
      "currentDay": 0,
      "previousDays": [
        0
      ]
    },
    "rejected": {
      "currentDay": 0,
      "previousDays": [
        0
      ]
    },
    "failedTokenExchange": {
      "currentDay": 0,
      "previousDays": [
        0
      ]
    }
  }
}

```

*Authorisation counts for the data holder*

<h3 id="cdr-admin-api_authorisationmetricsv2_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|activeAuthorisationCount|object|mandatory|The number of active ongoing authorisations|
|» individual|[NaturalNumber](#common-field-types)|mandatory|Active ongoing authorisation count for individual customers|
|» nonIndividual|[NaturalNumber](#common-field-types)|mandatory|Active ongoing authorisation count for non-individual customers|
|newAuthorisationCount|object|mandatory|The number of new authorisations|
|» currentDay|object|conditional|Number of new authorisations for the current day|
|»» onceOff|object|mandatory|New authorisation count for once-off authorisations|
|»»» individual|[NaturalNumber](#common-field-types)|mandatory|New authorisation count for individual customers|
|»»» nonIndividual|[NaturalNumber](#common-field-types)|mandatory|New authorisation count for non-individual customers|
|»» ongoing|object|mandatory|New authorisation count for ongoing authorisations|
|»»» individual|[NaturalNumber](#common-field-types)|mandatory|New authorisation count for individual customers|
|»»» nonIndividual|[NaturalNumber](#common-field-types)|mandatory|New authorisation count for non-individual customers|
|» previousDays|[object]|conditional|Number of new authorisations for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available|
|»» onceOff|object|mandatory|New authorisation count for once-off authorisations|
|»»» individual|[NaturalNumber](#common-field-types)|mandatory|New authorisation count for individual customers|
|»»» nonIndividual|[NaturalNumber](#common-field-types)|mandatory|New authorisation count for non-individual customers|
|»» ongoing|object|mandatory|New authorisation count for ongoing authorisations|
|»»» individual|[NaturalNumber](#common-field-types)|mandatory|New authorisation count for individual customers|
|»»» nonIndividual|[NaturalNumber](#common-field-types)|mandatory|New authorisation count for non-individual customers|
|revokedAuthorisationCount|object|mandatory|The number of revoked authorisations|
|» currentDay|object|conditional|Number of revoked authorisations for the current day|
|»» individual|[NaturalNumber](#common-field-types)|mandatory|Revoked authorisation count for individual customers|
|»» nonIndividual|[NaturalNumber](#common-field-types)|mandatory|Revoked authorisation count for non-individual customers|
|» previousDays|[object]|conditional|Number of revoked authorisations for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available|
|»» individual|[NaturalNumber](#common-field-types)|mandatory|Revoked authorisation count for individual customers|
|»» nonIndividual|[NaturalNumber](#common-field-types)|mandatory|Revoked authorisation count for non-individual customers|
|amendedAuthorisationCount|object|mandatory|The number of amended ongoing authorisations|
|» currentDay|object|conditional|Number of amended authorisations for the current day|
|»» individual|[NaturalNumber](#common-field-types)|mandatory|Amended authorisation count for individual customers|
|»» nonIndividual|[NaturalNumber](#common-field-types)|mandatory|Amended authorisation count for non-individual customers|
|» previousDays|[object]|conditional|Number of amended authorisations for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available|
|»» individual|[NaturalNumber](#common-field-types)|mandatory|Amended authorisation count for individual customers|
|»» nonIndividual|[NaturalNumber](#common-field-types)|mandatory|Amended authorisation count for non-individual customers|
|expiredAuthorisationCount|object|mandatory|The number of expired ongoing authorisations|
|» currentDay|object|conditional|Number of expired authorisations for the current day|
|»» individual|[NaturalNumber](#common-field-types)|mandatory|Expired authorisation count for individual customers|
|»» nonIndividual|[NaturalNumber](#common-field-types)|mandatory|Expired authorisation count for non-individual customers|
|» previousDays|[object]|conditional|Number of expired authorisations for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available|
|»» individual|[NaturalNumber](#common-field-types)|mandatory|Expired authorisation count for individual customers|
|»» nonIndividual|[NaturalNumber](#common-field-types)|mandatory|Expired authorisation count for non-individual customers|
|abandonedConsentFlowCount|object|mandatory|The number of consents flows that were not successfully authorised|
|» currentDay|[NaturalNumber](#common-field-types)|conditional|Number of consents flows that were not successfully authorised for the current day|
|» previousDays|[[NaturalNumber]](#common-field-types)|conditional|Number of consents flows that were not successfully authorised for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available|
|abandonmentsByStage|object|mandatory|Customer abandonment count per stage of the consent flow.  Note that the aggregated abandonment count for all stages for a period should equal the count in `abandonedConsentFlowCount` for the same period (ie. each abandoned consent should assigned to one, and only one, stage)|
|» preIdentification|object|mandatory|The number of authorisations that commenced with the data holder but the customer did not successfully identify their profile or user ID|
|»» currentDay|[NaturalNumber](#common-field-types)|conditional|Number of abandoned consent flows for this stage for the current day|
|»» previousDays|[[NaturalNumber]](#common-field-types)|conditional|Number of abandoned consent flows for this stage for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available|
|» preAuthentication|object|mandatory|The number of authorisations where the customer identified themselves (ie. they successfully identify the customer profile to use for the authorisation) but failed to provide a valid OTP or equivalent|
|»» currentDay|[NaturalNumber](#common-field-types)|conditional|Number of abandoned consent flows for this stage for the current day|
|»» previousDays|[[NaturalNumber]](#common-field-types)|conditional|Number of abandoned consent flows for this stage for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available|
|» preAccountSelection|object|mandatory|The number of authorisations where the customer successfully authenticated with a valid OTP or equivalent but abandoned the process before selecting accounts|
|»» currentDay|[NaturalNumber](#common-field-types)|conditional|Number of abandoned consent flows for this stage for the current day|
|»» previousDays|[[NaturalNumber]](#common-field-types)|conditional|Number of abandoned consent flows for this stage for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available|
|» preAuthorisation|object|mandatory|The number of authorisations where the customer has passed the account selection step but abandoned the process before approving or rejecting the consent being requested|
|»» currentDay|[NaturalNumber](#common-field-types)|conditional|Number of abandoned consent flows for this stage for the current day|
|»» previousDays|[[NaturalNumber]](#common-field-types)|conditional|Number of abandoned consent flows for this stage for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available|
|» rejected|object|mandatory|The number of authorisations where the customer actively rejected the authorisation rather than abandoning the process|
|»» currentDay|[NaturalNumber](#common-field-types)|conditional|Number of abandoned consent flows for this stage for the current day|
|»» previousDays|[[NaturalNumber]](#common-field-types)|conditional|Number of abandoned consent flows for this stage for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available|
|» failedTokenExchange|object|mandatory|The number of authorisations that completed the interactive flow with the consumer authorising the consent, but the ADR failed to - or was unable to - obtain a refresh or access token using the authorisation code|
|»» currentDay|[NaturalNumber](#common-field-types)|conditional|Number of abandoned consent flows for this stage for the current day|
|»» previousDays|[[NaturalNumber]](#common-field-types)|conditional|Number of abandoned consent flows for this stage for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available|

<h3 class="schema-toc" id="cdr-admin-api_schemas_tocSlinks">Links</h3>
<p id="tocSlinks" class="orig-anchor"></p>

<a class="schema-anchor" id="schemacdr-admin-apilinks"></a>

```json
{
  "self": "string"
}

```

<h3 id="cdr-admin-api_links_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|self|[URIString](#common-field-types)|mandatory|Fully qualified link to this API call|

<h3 class="schema-toc" id="cdr-admin-api_schemas_tocSmeta">Meta</h3>
<p id="tocSmeta" class="orig-anchor"></p>

<a class="schema-anchor" id="schemacdr-admin-apimeta"></a>

```json
{}

```

<h3 id="cdr-admin-api_meta_properties">Properties</h3>

*None*

<h3 class="schema-toc" id="cdr-admin-api_schemas_tocSmetaerror">MetaError</h3>
<p id="tocSmetaerror" class="orig-anchor"></p>

<a class="schema-anchor" id="schemacdr-admin-apimetaerror"></a>

```json
{
  "urn": "string"
}

```

*Additional data for customised error codes*

<h3 id="cdr-admin-api_metaerror_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|urn|string|conditional|The CDR error code URN which the application-specific error code extends. Mandatory if the error `code` is an application-specific error rather than a standardised error code.|

<h3 class="schema-toc" id="cdr-admin-api_schemas_tocSresponseerrorlistv2">ResponseErrorListV2</h3>
<p id="tocSresponseerrorlistv2" class="orig-anchor"></p>

<a class="schema-anchor" id="schemacdr-admin-apiresponseerrorlistv2"></a>

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

<h3 id="cdr-admin-api_responseerrorlistv2_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|errors|[object]|mandatory|none|
|» code|string|mandatory|The code of the error encountered. Where the error is specific to the respondent, an application-specific error code, expressed as a string value. If the error is application-specific, the URN code that the specific error extends must be provided in the meta object. Otherwise, the value is the error code URN.|
|» title|string|mandatory|A short, human-readable summary of the problem that MUST NOT change from occurrence to occurrence of the problem represented by the error code.|
|» detail|string|mandatory|A human-readable explanation specific to this occurrence of the problem.|
|» meta|[MetaError](#schemacdr-admin-apimetaerror)|optional|Additional data for customised error codes|

