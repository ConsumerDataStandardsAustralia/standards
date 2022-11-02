

## Get Telco Products

<a id="opIdlistProducts"></a>

> Code samples

```http
GET https://data.holder.com.au/cds-au/v1/telco/products HTTP/1.1
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
  url: 'https://data.holder.com.au/cds-au/v1/telco/products',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`GET /telco/products`

Obtain a list of telco products that are currently offered to the market.

Note that the results returned by this end point are expected to be ordered in descending order according to `lastUpdated`.

###Endpoint Version
|   |  |
|---|--|
|Version|**1**

<h3 id="get-telco-products-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type|query|string|optional|Used to filter results on the type field.  Any one of the valid values for this field can be supplied. If absent, defaults to include all products. Valid values are ‘MOBILE’, ‘BROADBAND’|
|billing-type|query|string|optional|Used to filter results on the billing-type field.  Any one of the valid values for this field can be supplied. If absent, defaults to include all billing types. Valid values are ‘PRE_PAID’, ‘POST_PAID’, 'UPFRONT_PAID', 'OTHER'|
|effective|query|string|optional|Allows for the filtering of productd based on whether the current time is within the period of time defined as effective by the effectiveFrom and effectiveTo fields. Valid values are ‘CURRENT’, ‘FUTURE’ and ‘ALL’. If absent defaults to 'CURRENT'|
|updated-since|query|[DateTimeString](#common-field-types)|optional|Only include products that have been updated after the specified date and time.  If absent defaults to include all plans|
|brand|query|string|optional|Used to filter results on the brand field. If absent, defaults to include all products. For service providers that operate a number of mobile and internet brands|
|page|query|[PositiveInteger](#common-field-types)|optional|Page of results to request (standard pagination)|
|page-size|query|[PositiveInteger](#common-field-types)|optional|Page size to request.  Default is 25 (standard pagination)|
|x-v|header|string|mandatory|Version of the API end point requested by the client. Must be set to a positive integer. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If the value of [x-min-v](#request-headers) is equal to or higher than the value of [x-v](#request-headers) then the [x-min-v](#request-headers) header should be treated as absent. If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable. See [HTTP Headers](#request-headers)|
|x-min-v|header|string|optional|Minimum version of the API end point requested by the client. Must be set to a positive integer if provided. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|MOBILE|
|type|BROADBAND|
|billing-type|PRE_PAID|
|billing-type|POST_PAID|
|billing-type|UPFRONT_PAID|
|billing-type|OTHER|
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
        "productId": "string",
        "effectiveFrom": "string",
        "effectiveTo": "string",
        "lastUpdated": "string",
        "displayName": "string",
        "description": "string",
        "type": "MOBILE",
        "purpose": "PERSONAL",
        "billingType": "PRE_PAID",
        "contract": {
          "name": "string",
          "description": "string",
          "duration": 0,
          "contractURI": "string"
        },
        "bundle": true,
        "brand": "string",
        "brandName": "string",
        "pricing": [
          {
            "name": "string",
            "description": "string",
            "period": "string",
            "chargeAmount": "string"
          }
        ],
        "thirdPartyAgentId": "string",
        "thirdPartyAgentName": "string",
        "applicationUri": "string",
        "additionalInformation": {
          "overviewUri": "string",
          "termsUri": "string",
          "eligibilityUri": "string",
          "pricingUri": "string",
          "bundleUri": "string"
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

<h3 id="get-telco-products-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[TelcoProductListResponse](#schemacdr-telco-apitelcoproductlistresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Invalid Page Size](#error-400-field-invalid-page-size)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li></ul>|[ErrorListResponse](#schemacdr-telco-apierrorlistresponse)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|[ErrorListResponse](#schemacdr-telco-apierrorlistresponse)|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[422 - Invalid Page](#error-422-field-invalid-page)</li></ul>|[ErrorListResponse](#schemacdr-telco-apierrorlistresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-v|string||none|
|400|x-fapi-interaction-id|string||none|
|406|x-fapi-interaction-id|string||none|
|422|x-fapi-interaction-id|string||none|

  
    <aside class="success">
This operation does not require authentication
</aside>

  

## Get Telco Product Detail

<a id="opIdgetProduct"></a>

> Code samples

```http
GET https://data.holder.com.au/cds-au/v1/telco/products/{productId} HTTP/1.1
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
  url: 'https://data.holder.com.au/cds-au/v1/telco/products/{productId}',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`GET /telco/products/{productId}`

Obtain detailed information on a single telco prouct offered openly to the market

###Endpoint Version
|   |  |
|---|--|
|Version|**1**

<h3 id="get-telco-product-detail-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|productId|path|string|mandatory|ID of the specific product requested|
|x-v|header|string|mandatory|Version of the API end point requested by the client. Must be set to a positive integer. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If the value of [x-min-v](#request-headers) is equal to or higher than the value of [x-v](#request-headers) then the [x-min-v](#request-headers) header should be treated as absent. If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable. See [HTTP Headers](#request-headers)|
|x-min-v|header|string|optional|Minimum version of the API end point requested by the client. Must be set to a positive integer if provided. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable.|

> Example responses

> 200 Response

```json
{
  "data": {
    "productId": "string",
    "effectiveFrom": "string",
    "effectiveTo": "string",
    "lastUpdated": "string",
    "displayName": "string",
    "description": "string",
    "type": "MOBILE",
    "purpose": "PERSONAL",
    "billingType": "PRE_PAID",
    "contract": {
      "name": "string",
      "description": "string",
      "duration": 0,
      "contractURI": "string"
    },
    "bundle": true,
    "brand": "string",
    "brandName": "string",
    "pricing": [
      {
        "name": "string",
        "description": "string",
        "period": "string",
        "chargeAmount": "string"
      }
    ],
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
    "meteringCharges": [
      {
        "displayName": "string",
        "description": "string",
        "minimumValue": "string",
        "maximumValue": "string",
        "period": "string"
      }
    ],
    "bundles": [
      {
        "displayName": "string",
        "description": "string",
        "bundleUri": "string",
        "features": [
          {
            "displayName": "string",
            "description": "string",
            "category": "DATA"
          }
        ]
      }
    ],
    "plans": [
      {
        "displayName": "string",
        "description": "string",
        "planUri": "string",
        "features": [
          {
            "displayName": "string",
            "description": "string"
          }
        ]
      }
    ],
    "discounts": [
      {
        "displayName": "string",
        "description": "string",
        "discountUri": "string",
        "features": [
          {
            "displayName": "string",
            "description": "string"
          }
        ]
      }
    ],
    "incentives": [
      {
        "displayName": "string",
        "description": "string",
        "incentiveUri": "string",
        "features": [
          {
            "displayName": "string",
            "description": "string"
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

<h3 id="get-telco-product-detail-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[TelcoProductResponse](#schemacdr-telco-apitelcoproductresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li></ul>|[ErrorListResponse](#schemacdr-telco-apierrorlistresponse)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[404 - Invalid Resource](#error-404-resource-invalid)</li></ul>|[ErrorListResponse](#schemacdr-telco-apierrorlistresponse)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|[ErrorListResponse](#schemacdr-telco-apierrorlistresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-v|string||none|
|400|x-fapi-interaction-id|string||none|
|404|x-fapi-interaction-id|string||none|
|406|x-fapi-interaction-id|string||none|

  
    <aside class="success">
This operation does not require authentication
</aside>

  

## Get Usage For a Service

<a id="opIdgetUsageForService"></a>

> Code samples

```http
GET https://data.holder.com.au/cds-au/v1/telco/account/{serviceId}/usage HTTP/1.1
Host: data.holder.com.au
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
  url: 'https://data.holder.com.au/cds-au/v1/telco/account/{serviceId}/usage',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`GET /telco/account/{serviceId}/usage`

Obtain a usage data from a particular service Id

###Endpoint Version
|   |  |
|---|--|
|Version|**1**

<h3 id="get-usage-for-a-service-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|serviceId|path|string|mandatory|ID of the specific service requested.  This is a tokenised ID returned from thhe account.|
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

> Example responses

> 200 Response

```json
{
  "data": {
    "accountId": "string",
    "services": [
      {
        "service": {
          "serviceId": "string",
          "displayName": "string",
          "phoneNumber": "string",
          "startDate": "string",
          "endDate": "string",
          "usage": {
            "data": {
              "upload": 0,
              "download": 0,
              "sessions": 0,
              "amount": "string",
              "roaming": {
                "download": 0,
                "amount": "string"
              }
            },
            "voice": {
              "national": {
                "duration": "string",
                "number": 0,
                "amount": "string"
              },
              "international": {
                "duration": "string",
                "number": 0,
                "amount": "string"
              },
              "roaming": {
                "duration": "string",
                "number": 0,
                "amount": "string"
              }
            },
            "messaging": {
              "sms": {
                "national": 0,
                "international": 0,
                "roaming": 0,
                "amount": "string"
              },
              "mms": {
                "national": 0,
                "international": 0,
                "roaming": 0,
                "amount": "string"
              }
            }
          }
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

<h3 id="get-usage-for-a-service-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[TelcoUsageResponse](#schemacdr-telco-apitelcousageresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Invalid Page Size](#error-400-field-invalid-page-size)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li></ul>|[ErrorListResponse](#schemacdr-telco-apierrorlistresponse)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[404 - Unavailable Service Point](#error-404-unavailable-service-point)</li><li>[404 - Invalid Service Point](#error-404-invalid-service-point)</li></ul>|[ErrorListResponse](#schemacdr-telco-apierrorlistresponse)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|[ErrorListResponse](#schemacdr-telco-apierrorlistresponse)|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[422 - Invalid Page](#error-422-field-invalid-page)</li></ul>|[ErrorListResponse](#schemacdr-telco-apierrorlistresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-v|string||none|
|200|x-fapi-interaction-id|string||none|
|400|x-fapi-interaction-id|string||none|
|404|x-fapi-interaction-id|string||none|
|406|x-fapi-interaction-id|string||none|
|422|x-fapi-interaction-id|string||none|

  
    
      <aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
<a href="#authorisation-scopes">telco:billing:read</a>
</aside>

    
  

## Get Usage

<a id="opIdlistUsage"></a>

> Code samples

```http
GET https://data.holder.com.au/cds-au/v1/telco/accounts/usage HTTP/1.1
Host: data.holder.com.au
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
  url: 'https://data.holder.com.au/cds-au/v1/telco/accounts/usage',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`GET /telco/accounts/usage`

Obtain usage data for all services associated with the customer

###Endpoint Version
|   |  |
|---|--|
|Version|**1**

<h3 id="get-usage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
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

> Example responses

> 200 Response

```json
{
  "data": {
    "accounts": [
      {
        "accountId": "string",
        "services": [
          {
            "service": {
              "serviceId": "string",
              "displayName": "string",
              "phoneNumber": "string",
              "startDate": "string",
              "endDate": "string",
              "usage": {
                "data": {
                  "upload": 0,
                  "download": 0,
                  "sessions": 0,
                  "amount": "string",
                  "roaming": {
                    "download": 0,
                    "amount": "string"
                  }
                },
                "voice": {
                  "national": {
                    "duration": "string",
                    "number": 0,
                    "amount": "string"
                  },
                  "international": {
                    "duration": "string",
                    "number": 0,
                    "amount": "string"
                  },
                  "roaming": {
                    "duration": "string",
                    "number": 0,
                    "amount": "string"
                  }
                },
                "messaging": {
                  "sms": {
                    "national": 0,
                    "international": 0,
                    "roaming": 0,
                    "amount": "string"
                  },
                  "mms": {
                    "national": 0,
                    "international": 0,
                    "roaming": 0,
                    "amount": "string"
                  }
                }
              }
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

<h3 id="get-usage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[TelcoUsageListResponse](#schemacdr-telco-apitelcousagelistresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Invalid Page Size](#error-400-field-invalid-page-size)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li></ul>|[ErrorListResponse](#schemacdr-telco-apierrorlistresponse)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|[ErrorListResponse](#schemacdr-telco-apierrorlistresponse)|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[422 - Invalid Page](#error-422-field-invalid-page)</li></ul>|[ErrorListResponse](#schemacdr-telco-apierrorlistresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-v|string||none|
|200|x-fapi-interaction-id|string||none|
|400|x-fapi-interaction-id|string||none|
|406|x-fapi-interaction-id|string||none|
|422|x-fapi-interaction-id|string||none|

  
    
      <aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
<a href="#authorisation-scopes">telco:billing:read</a>
</aside>

    
  

## Get Usage For a Specific Service

<a id="opIdlistUsageForService"></a>

> Code samples

```http
POST https://data.holder.com.au/cds-au/v1/telco/accounts/usage HTTP/1.1
Host: data.holder.com.au
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
  url: 'https://data.holder.com.au/cds-au/v1/telco/accounts/usage',
  method: 'post',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`POST /telco/accounts/usage`

Obtain usage data for a specific service

> Body parameter

```json
{
  "data": {
    "serviceIds": [
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

<h3 id="get-usage-for-a-specific-service-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountIds|path|string|mandatory|A seperated array of account IDs of specific accounts to obtain data for. This is a tokenised ID previous obtained from the Account List end point.|
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
|body|body|[serviceIdList](#schemacdr-telco-apiserviceidlist)|mandatory|Request payload containing list of specific Service Points to obtain data for|
|» data|body|object|mandatory|none|
|»» serviceIds|body|[string]|mandatory|Array of specific serviceIds to obtain data for|
|» meta|body|[Meta](#schemacdr-telco-apimeta)|mandatory|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "accounts": [
      {
        "accountId": "string",
        "services": [
          {
            "service": {
              "serviceId": "string",
              "displayName": "string",
              "phoneNumber": "string",
              "startDate": "string",
              "endDate": "string",
              "usage": {
                "data": {
                  "upload": 0,
                  "download": 0,
                  "sessions": 0,
                  "amount": "string",
                  "roaming": {
                    "download": 0,
                    "amount": "string"
                  }
                },
                "voice": {
                  "national": {
                    "duration": "string",
                    "number": 0,
                    "amount": "string"
                  },
                  "international": {
                    "duration": "string",
                    "number": 0,
                    "amount": "string"
                  },
                  "roaming": {
                    "duration": "string",
                    "number": 0,
                    "amount": "string"
                  }
                },
                "messaging": {
                  "sms": {
                    "national": 0,
                    "international": 0,
                    "roaming": 0,
                    "amount": "string"
                  },
                  "mms": {
                    "national": 0,
                    "international": 0,
                    "roaming": 0,
                    "amount": "string"
                  }
                }
              }
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

<h3 id="get-usage-for-a-specific-service-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[TelcoUsageListResponse](#schemacdr-telco-apitelcousagelistresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Invalid Page Size](#error-400-field-invalid-page-size)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li></ul>|[ErrorListResponse](#schemacdr-telco-apierrorlistresponse)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|[ErrorListResponse](#schemacdr-telco-apierrorlistresponse)|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[422 - Invalid Page](#error-422-field-invalid-page)</li><li>[422 - Unavailable Service Point](#error-422-unavailable-service-point)</li><li>[422 - Invalid Service Point](#error-422-invalid-service-point)</li></ul>|[ErrorListResponse](#schemacdr-telco-apierrorlistresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-v|string||none|
|200|x-fapi-interaction-id|string||none|
|400|x-fapi-interaction-id|string||none|
|406|x-fapi-interaction-id|string||none|
|422|x-fapi-interaction-id|string||none|

  
    
      <aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
<a href="#authorisation-scopes">telco:billing:read</a>
</aside>

    
  

## Get Telco Accounts

<a id="opIdlistAccounts"></a>

> Code samples

```http
GET https://data.holder.com.au/cds-au/v1/telco/accounts HTTP/1.1
Host: data.holder.com.au
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
  url: 'https://data.holder.com.au/cds-au/v1/telco/accounts',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`GET /telco/accounts`

Obtain the list of telco accounts available under the authorised consent

Other Versions: [v1](includes/obsolete/get-telco-accounts-v1.html)

###Endpoint Version
|   |  |
|---|--|
|Version|**2**

<h3 id="get-telco-accounts-parameters">Parameters</h3>

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
        "creationDate": "string",
        "lastUpdated": "string",
        "brand": "string",
        "openStatus": "CLOSED",
        "plans": [
          {
            "nickname": "string",
            "type": "MOBILE",
            "serviceIds": [
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

<h3 id="get-telco-accounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[TelcoAccountListResponse](#schemacdr-telco-apitelcoaccountlistresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Invalid Page Size](#error-400-field-invalid-page-size)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li></ul>|[ErrorListResponse](#schemacdr-telco-apierrorlistresponse)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|[ErrorListResponse](#schemacdr-telco-apierrorlistresponse)|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[422 - Invalid Page](#error-422-field-invalid-page)</li></ul>|[ErrorListResponse](#schemacdr-telco-apierrorlistresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-v|string||none|
|200|x-fapi-interaction-id|string||none|
|400|x-fapi-interaction-id|string||none|
|406|x-fapi-interaction-id|string||none|
|422|x-fapi-interaction-id|string||none|

  
    
      <aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
<a href="#authorisation-scopes">telco:accounts.basic:read</a>
</aside>

    
  

## Get Telco Account Detail

<a id="opIdgetAccount"></a>

> Code samples

```http
GET https://data.holder.com.au/cds-au/v1/telco/accounts/{accountId} HTTP/1.1
Host: data.holder.com.au
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
  url: 'https://data.holder.com.au/cds-au/v1/telco/accounts/{accountId}',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`GET /telco/accounts/{accountId}`

Obtain detailed information for a specific telco account

Other Versions: [v1](includes/obsolete/get-telco-account-detail-v1.html)

###Endpoint Version
|   |  |
|---|--|
|Version|**2**

<h3 id="get-telco-account-detail-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|mandatory|ID of a specific account to obtain data for.  This is a tokenised ID previous obtained from the Account List end point.|
|open-status|query|string|optional|Used to filter results according to open/closed status. Values can be OPEN, CLOSED or ALL. If absent then ALL is assumed|
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
    "accountId": "string",
    "accountNumber": "string",
    "displayName": "string",
    "creationDate": "string",
    "lastUpdated": "string",
    "brand": "string",
    "openStatus": "CLOSED",
    "plans": [
      {
        "nickname": "string",
        "serviceIds": [
          "string"
        ],
        "planOverview": {
          "displayName": "string",
          "startDate": "string",
          "endDate": "string"
        },
        "planDetail": {
          "charges": [
            {
              "displayName": "string",
              "description": "string",
              "minimumValue": "string",
              "maximumValue": "string",
              "period": "string"
            }
          ]
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

<h3 id="get-telco-account-detail-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[TelcoAccountDetailResponse](#schemacdr-telco-apitelcoaccountdetailresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li></ul>|[ErrorListResponse](#schemacdr-telco-apierrorlistresponse)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[404 - Unavailable Telco Account](#error-404-unavailable-telco-account)</li><li>[404 - Invalid Telco Account](#error-404-invalid-telco-account)</li></ul>|[ErrorListResponse](#schemacdr-telco-apierrorlistresponse)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|[ErrorListResponse](#schemacdr-telco-apierrorlistresponse)|

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
<a href="#authorisation-scopes">telco:accounts.detail:read</a>
</aside>

    
  

## Get Telco Agreed Payment Schedule

<a id="opIdgetPaymentSchedule"></a>

> Code samples

```http
GET https://data.holder.com.au/cds-au/v1/telco/accounts/{accountId}/payment-schedule HTTP/1.1
Host: data.holder.com.au
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
  url: 'https://data.holder.com.au/cds-au/v1/telco/accounts/{accountId}/payment-schedule',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`GET /telco/accounts/{accountId}/payment-schedule`

Obtain the agreed payment schedule and details, if any, for a specific telco account. 

Some general notes about this end point:

 <ul><li>This API describes how the consumer has elected to pay for their account</li><li>Payments initiated by the consumer are classified as manual payments. The billing frequency is captured for manual payments. The consumer may choose to pay on a different schedule/frequency. The payment method and frequency is not captured for manual payments</li><li>Payments that can be initiated by the retailer, based on a consumer's preferences and permission, include payments based on a direct debit, card debit or digital wallet setup. Each of these requires a payment frequency to be provided along with other relevant fields</li><li>Information about payment plans related to debt repayments or arrangements due to hardship is not captured within this API</li></ul>

###Endpoint Version
|   |  |
|---|--|
|Version|**1**

<h3 id="get-telco-agreed-payment-schedule-parameters">Parameters</h3>

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

<h3 id="get-telco-agreed-payment-schedule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[TelcoPaymentScheduleResponse](#schemacdr-telco-apitelcopaymentscheduleresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li></ul>|[ErrorListResponse](#schemacdr-telco-apierrorlistresponse)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[404 - Unavailable Telco Account](#error-404-unavailable-telco-account)</li><li>[404 - Invalid Telco Account](#error-404-invalid-telco-account)</li></ul>|[ErrorListResponse](#schemacdr-telco-apierrorlistresponse)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|[ErrorListResponse](#schemacdr-telco-apierrorlistresponse)|

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
<a href="#authorisation-scopes">telco:accounts.paymentschedule:read</a>
</aside>

    
  

## Get Telco Concessions

<a id="opIdgetConcessions"></a>

> Code samples

```http
GET https://data.holder.com.au/cds-au/v1/telco/accounts/{accountId}/concessions HTTP/1.1
Host: data.holder.com.au
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
  url: 'https://data.holder.com.au/cds-au/v1/telco/accounts/{accountId}/concessions',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`GET /telco/accounts/{accountId}/concessions`

Obtain the details of any concessions or arrangements applied to a specific telco account

###Endpoint Version
|   |  |
|---|--|
|Version|**1**

<h3 id="get-telco-concessions-parameters">Parameters</h3>

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
        "type": "CONCESSION",
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

<h3 id="get-telco-concessions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[TelcoConcessionsResponse](#schemacdr-telco-apitelcoconcessionsresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li></ul>|[ErrorListResponse](#schemacdr-telco-apierrorlistresponse)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[404 - Unavailable Telco Account](#error-404-unavailable-telco-account)</li><li>[404 - Invalid Telco Account](#error-404-invalid-telco-account)</li></ul>|[ErrorListResponse](#schemacdr-telco-apierrorlistresponse)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|[ErrorListResponse](#schemacdr-telco-apierrorlistresponse)|

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
<a href="#authorisation-scopes">telco:accounts:concessions:read</a>
</aside>

    
  

## Get Balance For Telco Account

<a id="opIdgetBalanceForAccount"></a>

> Code samples

```http
GET https://data.holder.com.au/cds-au/v1/telco/accounts/{accountId}/balance HTTP/1.1
Host: data.holder.com.au
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
  url: 'https://data.holder.com.au/cds-au/v1/telco/accounts/{accountId}/balance',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`GET /telco/accounts/{accountId}/balance`

Obtain the current balance for a specific account

###Endpoint Version
|   |  |
|---|--|
|Version|**1**

<h3 id="get-balance-for-telco-account-parameters">Parameters</h3>

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
    "balance": {
      "services": [
        {
          "serviceId": "string",
          "displayName": "string",
          "phoneNumber": "string",
          "startDate": "string",
          "endDate": "string",
          "balances": {
            "data": {
              "planType": "METERED",
              "description": "string",
              "upload": 0,
              "download": 0,
              "amount": "string",
              "roaming": {
                "download": 0,
                "amount": "string"
              }
            },
            "voice": {
              "planType": "METERED",
              "national": {
                "description": "string",
                "duration": "string",
                "number": 0,
                "amount": "string"
              },
              "international": {
                "description": "string",
                "duration": "string",
                "number": 0,
                "amount": "string"
              }
            },
            "messaging": {
              "planType": "METERED",
              "sms": {
                "description": "string",
                "national": 0,
                "international": 0,
                "amount": "string"
              },
              "mms": {
                "description": "string",
                "national": 0,
                "international": 0,
                "amount": "string"
              }
            }
          }
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

<h3 id="get-balance-for-telco-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[TelcoBalanceResponse](#schemacdr-telco-apitelcobalanceresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li></ul>|[ErrorListResponse](#schemacdr-telco-apierrorlistresponse)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[404 - Unavailable Telco Account](#error-404-unavailable-telco-account)</li><li>[404 - Invalid Telco Account](#error-404-invalid-telco-account)</li></ul>|[ErrorListResponse](#schemacdr-telco-apierrorlistresponse)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|[ErrorListResponse](#schemacdr-telco-apierrorlistresponse)|

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
<a href="#authorisation-scopes">telco:billing:read</a>
</aside>

    
  

## Get Balances for Telco Accounts

<a id="opIdlistBalance"></a>

> Code samples

```http
GET https://data.holder.com.au/cds-au/v1/telco/accounts/balance HTTP/1.1
Host: data.holder.com.au
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
  url: 'https://data.holder.com.au/cds-au/v1/telco/accounts/balance',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`GET /telco/accounts/balance`

Obtain the current balance for all accounts

###Endpoint Version
|   |  |
|---|--|
|Version|**1**

<h3 id="get-balances-for-telco-accounts-parameters">Parameters</h3>

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
        "balance": {
          "services": [
            {
              "serviceId": "string",
              "displayName": "string",
              "phoneNumber": "string",
              "startDate": "string",
              "endDate": "string",
              "balances": {
                "data": {
                  "planType": "METERED",
                  "description": "string",
                  "upload": 0,
                  "download": 0,
                  "amount": "string",
                  "roaming": {
                    "download": 0,
                    "amount": "string"
                  }
                },
                "voice": {
                  "planType": "METERED",
                  "national": {
                    "description": "string",
                    "duration": "string",
                    "number": 0,
                    "amount": "string"
                  },
                  "international": {
                    "description": "string",
                    "duration": "string",
                    "number": 0,
                    "amount": "string"
                  }
                },
                "messaging": {
                  "planType": "METERED",
                  "sms": {
                    "description": "string",
                    "national": 0,
                    "international": 0,
                    "amount": "string"
                  },
                  "mms": {
                    "description": "string",
                    "national": 0,
                    "international": 0,
                    "amount": "string"
                  }
                }
              }
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

<h3 id="get-balances-for-telco-accounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[TelcoBalanceListResponse](#schemacdr-telco-apitelcobalancelistresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Invalid Page Size](#error-400-field-invalid-page-size)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li></ul>|[ErrorListResponse](#schemacdr-telco-apierrorlistresponse)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|[ErrorListResponse](#schemacdr-telco-apierrorlistresponse)|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[422 - Invalid Page](#error-422-field-invalid-page)</li></ul>|[ErrorListResponse](#schemacdr-telco-apierrorlistresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-v|string||none|
|200|x-fapi-interaction-id|string||none|
|400|x-fapi-interaction-id|string||none|
|406|x-fapi-interaction-id|string||none|
|422|x-fapi-interaction-id|string||none|

  
    
      <aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
<a href="#authorisation-scopes">telco:billing:read</a>
</aside>

    
  

## Get Balances For Specific Telco Accounts

<a id="opIdlistBalancesForAccounts"></a>

> Code samples

```http
POST https://data.holder.com.au/cds-au/v1/telco/accounts/balance HTTP/1.1
Host: data.holder.com.au
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
  url: 'https://data.holder.com.au/cds-au/v1/telco/accounts/balance',
  method: 'post',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`POST /telco/accounts/balance`

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

<h3 id="get-balances-for-specific-telco-accounts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountIds|path|string|mandatory|A seperated array of account IDs of specific accounts to obtain data for. This is a tokenised ID previous obtained from the Account List end point.|
|page|query|[PositiveInteger](#common-field-types)|optional|Page of results to request (standard pagination)|
|page-size|query|[PositiveInteger](#common-field-types)|optional|Page size to request.  Default is 25 (standard pagination)|
|x-v|header|string|mandatory|Version of the API end point requested by the client. Must be set to a positive integer. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If the value of [x-min-v](#request-headers) is equal to or higher than the value of [x-v](#request-headers) then the [x-min-v](#request-headers) header should be treated as absent. If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable. See [HTTP Headers](#request-headers)|
|x-min-v|header|string|optional|Minimum version of the API end point requested by the client. Must be set to a positive integer if provided. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable.|
|x-fapi-interaction-id|header|string|optional|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|x-fapi-auth-date|header|string|conditional|The time when the customer last logged in to the Data Recipient Software Product as described in **[[FAPI-R-Draft]](#nref-FAPI-R-Draft)**.  Required for all resource calls (customer present and unattended). Not required for unauthenticated calls.|
|x-fapi-customer-ip-address|header|string|optional|The customer's original IP address if the customer is currently logged in to the data recipient. The presence of this header indicates that the API is being called in a customer present context. Not to be included for unauthenticated calls.|
|x-cds-client-headers|header|[Base64](#common-field-types)|conditional|The customer's original standard http headers [Base64](#common-field-types) encoded, including the original User Agent header, if the customer is currently logged in to the data recipient. Mandatory for customer present calls.  Not required for unattended or unauthenticated calls.|
|body|body|[accountIdList](#schemacdr-telco-apiaccountidlist)|mandatory|Request payload containing list of specific Accounts to obtain data for|
|» data|body|object|mandatory|none|
|»» accountIds|body|[string]|mandatory|Array of specific accountIds to obtain data for|
|» meta|body|[Meta](#schemacdr-telco-apimeta)|mandatory|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "balances": [
      {
        "accountId": "string",
        "balance": {
          "services": [
            {
              "serviceId": "string",
              "displayName": "string",
              "phoneNumber": "string",
              "startDate": "string",
              "endDate": "string",
              "balances": {
                "data": {
                  "planType": "METERED",
                  "description": "string",
                  "upload": 0,
                  "download": 0,
                  "amount": "string",
                  "roaming": {
                    "download": 0,
                    "amount": "string"
                  }
                },
                "voice": {
                  "planType": "METERED",
                  "national": {
                    "description": "string",
                    "duration": "string",
                    "number": 0,
                    "amount": "string"
                  },
                  "international": {
                    "description": "string",
                    "duration": "string",
                    "number": 0,
                    "amount": "string"
                  }
                },
                "messaging": {
                  "planType": "METERED",
                  "sms": {
                    "description": "string",
                    "national": 0,
                    "international": 0,
                    "amount": "string"
                  },
                  "mms": {
                    "description": "string",
                    "national": 0,
                    "international": 0,
                    "amount": "string"
                  }
                }
              }
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

<h3 id="get-balances-for-specific-telco-accounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[TelcoBalanceListResponse](#schemacdr-telco-apitelcobalancelistresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Invalid Page Size](#error-400-field-invalid-page-size)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li></ul>|[ErrorListResponse](#schemacdr-telco-apierrorlistresponse)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|[ErrorListResponse](#schemacdr-telco-apierrorlistresponse)|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[422 - Invalid Page](#error-422-field-invalid-page)</li><li>[422 - Unavailable Telco Account](#error-422-unavailable-telco-account)</li><li>[422 - Invalid Telco Account](#error-422-invalid-telco-account)</li></ul>|[ErrorListResponse](#schemacdr-telco-apierrorlistresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-v|string||none|
|200|x-fapi-interaction-id|string||none|
|400|x-fapi-interaction-id|string||none|
|406|x-fapi-interaction-id|string||none|
|422|x-fapi-interaction-id|string||none|

  
    
      <aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
<a href="#authorisation-scopes">telco:billing:read</a>
</aside>

    
  

## Get Invoices For Telco Account

<a id="opIdgetInvoicesForAccount"></a>

> Code samples

```http
GET https://data.holder.com.au/cds-au/v1/telco/accounts/{accountId}/invoices HTTP/1.1
Host: data.holder.com.au
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
  url: 'https://data.holder.com.au/cds-au/v1/telco/accounts/{accountId}/invoices',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`GET /telco/accounts/{accountId}/invoices`

Obtain the invoices for a specific account

###Endpoint Version
|   |  |
|---|--|
|Version|**1**

<h3 id="get-invoices-for-telco-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|mandatory|ID of a specific account to obtain data for.  This is a tokenised ID previous obtained from the Account List end point.|
|newest-date|query|[DateString](#common-field-types)|optional|Constrain the request to records with effective date at or before this date.  If absent defaults to current date.  Format is aligned to DateString common type|
|oldest-date|query|[DateString](#common-field-types)|optional|Constrain the request to records with effective date at or after this date. If absent defaults to newest-date minus 24 months.  Format is aligned to DateString common type|
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
        "services": [
          "string"
        ],
        "accountCharges": {
          "totalUsageCharges": "string",
          "totalOnceOffCharges": "string",
          "totalDiscounts": "string",
          "otherCharges": {
            "amount": "string",
            "description": "string",
            "type": "SERVICE"
          },
          "totalGst": "string"
        },
        "accountUsage": {
          "data": {
            "upload": 0,
            "download": 0,
            "sessions": 0,
            "amount": "string",
            "roaming": {
              "download": 0,
              "amount": "string"
            }
          },
          "voice": {
            "national": {
              "duration": "string",
              "number": 0,
              "amount": "string"
            },
            "international": {
              "duration": "string",
              "number": 0,
              "amount": "string"
            },
            "roaming": {
              "duration": "string",
              "number": 0,
              "amount": "string"
            }
          },
          "messaging": {
            "sms": {
              "national": 0,
              "international": 0,
              "roaming": 0,
              "amount": "string"
            },
            "mms": {
              "national": 0,
              "international": 0,
              "roaming": 0,
              "amount": "string"
            }
          }
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

<h3 id="get-invoices-for-telco-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[TelcoInvoiceListResponse](#schemacdr-telco-apitelcoinvoicelistresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Invalid Page Size](#error-400-field-invalid-page-size)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li></ul>|[ErrorListResponse](#schemacdr-telco-apierrorlistresponse)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[404 - Unavailable Telco Account](#error-404-unavailable-telco-account)</li><li>[404 - Invalid Telco Account](#error-404-invalid-telco-account)</li></ul>|[ErrorListResponse](#schemacdr-telco-apierrorlistresponse)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|[ErrorListResponse](#schemacdr-telco-apierrorlistresponse)|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[422 - Invalid Page](#error-422-field-invalid-page)</li></ul>|[ErrorListResponse](#schemacdr-telco-apierrorlistresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-v|string||none|
|200|x-fapi-interaction-id|string||none|
|400|x-fapi-interaction-id|string||none|
|404|x-fapi-interaction-id|string||none|
|406|x-fapi-interaction-id|string||none|
|422|x-fapi-interaction-id|string||none|

  
    
      <aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
<a href="#authorisation-scopes">telco:billing:read</a>
</aside>

    
  

## Get Telco Invoices

<a id="opIdlistInvoices"></a>

> Code samples

```http
GET https://data.holder.com.au/cds-au/v1/telco/accounts/invoices HTTP/1.1
Host: data.holder.com.au
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
  url: 'https://data.holder.com.au/cds-au/v1/telco/accounts/invoices',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`GET /telco/accounts/invoices`

Obtain the invoices for all accounts

###Endpoint Version
|   |  |
|---|--|
|Version|**1**

<h3 id="get-telco-invoices-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|newest-date|query|[DateString](#common-field-types)|optional|Constrain the request to records with effective date at or before this date.  If absent defaults to current date.  Format is aligned to DateString common type|
|oldest-date|query|[DateString](#common-field-types)|optional|Constrain the request to records with effective date at or after this date. If absent defaults to newest-date minus 24 months.  Format is aligned to DateString common type|
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
        "services": [
          "string"
        ],
        "accountCharges": {
          "totalUsageCharges": "string",
          "totalOnceOffCharges": "string",
          "totalDiscounts": "string",
          "otherCharges": {
            "amount": "string",
            "description": "string",
            "type": "SERVICE"
          },
          "totalGst": "string"
        },
        "accountUsage": {
          "data": {
            "upload": 0,
            "download": 0,
            "sessions": 0,
            "amount": "string",
            "roaming": {
              "download": 0,
              "amount": "string"
            }
          },
          "voice": {
            "national": {
              "duration": "string",
              "number": 0,
              "amount": "string"
            },
            "international": {
              "duration": "string",
              "number": 0,
              "amount": "string"
            },
            "roaming": {
              "duration": "string",
              "number": 0,
              "amount": "string"
            }
          },
          "messaging": {
            "sms": {
              "national": 0,
              "international": 0,
              "roaming": 0,
              "amount": "string"
            },
            "mms": {
              "national": 0,
              "international": 0,
              "roaming": 0,
              "amount": "string"
            }
          }
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

<h3 id="get-telco-invoices-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[TelcoInvoiceListResponse](#schemacdr-telco-apitelcoinvoicelistresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Invalid Page Size](#error-400-field-invalid-page-size)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li></ul>|[ErrorListResponse](#schemacdr-telco-apierrorlistresponse)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|[ErrorListResponse](#schemacdr-telco-apierrorlistresponse)|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[422 - Invalid Page](#error-422-field-invalid-page)</li></ul>|[ErrorListResponse](#schemacdr-telco-apierrorlistresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-v|string||none|
|200|x-fapi-interaction-id|string||none|
|400|x-fapi-interaction-id|string||none|
|406|x-fapi-interaction-id|string||none|
|422|x-fapi-interaction-id|string||none|

  
    
      <aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
<a href="#authorisation-scopes">telco:billing:read</a>
</aside>

    
  

## Get Invoices For Specific Telco Accounts

<a id="opIdlistInvoicesForAccounts"></a>

> Code samples

```http
POST https://data.holder.com.au/cds-au/v1/telco/accounts/invoices HTTP/1.1
Host: data.holder.com.au
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
  url: 'https://data.holder.com.au/cds-au/v1/telco/accounts/invoices',
  method: 'post',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`POST /telco/accounts/invoices`

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

<h3 id="get-invoices-for-specific-telco-accounts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountIds|path|string|mandatory|A seperated array of account IDs of specific accounts to obtain data for. This is a tokenised ID previous obtained from the Account List end point.|
|newest-date|query|[DateString](#common-field-types)|optional|Constrain the request to records with effective date at or before this date.  If absent defaults to current date.  Format is aligned to DateString common type|
|oldest-date|query|[DateString](#common-field-types)|optional|Constrain the request to records with effective date at or after this date. If absent defaults to newest-date minus 24 months.  Format is aligned to DateString common type|
|page|query|[PositiveInteger](#common-field-types)|optional|Page of results to request (standard pagination)|
|page-size|query|[PositiveInteger](#common-field-types)|optional|Page size to request.  Default is 25 (standard pagination)|
|x-v|header|string|mandatory|Version of the API end point requested by the client. Must be set to a positive integer. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If the value of [x-min-v](#request-headers) is equal to or higher than the value of [x-v](#request-headers) then the [x-min-v](#request-headers) header should be treated as absent. If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable. See [HTTP Headers](#request-headers)|
|x-min-v|header|string|optional|Minimum version of the API end point requested by the client. Must be set to a positive integer if provided. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable.|
|x-fapi-interaction-id|header|string|optional|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|x-fapi-auth-date|header|string|conditional|The time when the customer last logged in to the Data Recipient Software Product as described in **[[FAPI-R-Draft]](#nref-FAPI-R-Draft)**.  Required for all resource calls (customer present and unattended). Not required for unauthenticated calls.|
|x-fapi-customer-ip-address|header|string|optional|The customer's original IP address if the customer is currently logged in to the data recipient. The presence of this header indicates that the API is being called in a customer present context. Not to be included for unauthenticated calls.|
|x-cds-client-headers|header|[Base64](#common-field-types)|conditional|The customer's original standard http headers [Base64](#common-field-types) encoded, including the original User Agent header, if the customer is currently logged in to the data recipient. Mandatory for customer present calls.  Not required for unattended or unauthenticated calls.|
|body|body|[accountIdList](#schemacdr-telco-apiaccountidlist)|mandatory|Request payload containing list of specific Accounts to obtain data for|
|» data|body|object|mandatory|none|
|»» accountIds|body|[string]|mandatory|Array of specific accountIds to obtain data for|
|» meta|body|[Meta](#schemacdr-telco-apimeta)|mandatory|none|

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
        "services": [
          "string"
        ],
        "accountCharges": {
          "totalUsageCharges": "string",
          "totalOnceOffCharges": "string",
          "totalDiscounts": "string",
          "otherCharges": {
            "amount": "string",
            "description": "string",
            "type": "SERVICE"
          },
          "totalGst": "string"
        },
        "accountUsage": {
          "data": {
            "upload": 0,
            "download": 0,
            "sessions": 0,
            "amount": "string",
            "roaming": {
              "download": 0,
              "amount": "string"
            }
          },
          "voice": {
            "national": {
              "duration": "string",
              "number": 0,
              "amount": "string"
            },
            "international": {
              "duration": "string",
              "number": 0,
              "amount": "string"
            },
            "roaming": {
              "duration": "string",
              "number": 0,
              "amount": "string"
            }
          },
          "messaging": {
            "sms": {
              "national": 0,
              "international": 0,
              "roaming": 0,
              "amount": "string"
            },
            "mms": {
              "national": 0,
              "international": 0,
              "roaming": 0,
              "amount": "string"
            }
          }
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

<h3 id="get-invoices-for-specific-telco-accounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[TelcoInvoiceListResponse](#schemacdr-telco-apitelcoinvoicelistresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Invalid Page Size](#error-400-field-invalid-page-size)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li></ul>|[ErrorListResponse](#schemacdr-telco-apierrorlistresponse)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|[ErrorListResponse](#schemacdr-telco-apierrorlistresponse)|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[422 - Invalid Page](#error-422-field-invalid-page)</li><li>[422 - Unavailable Telco Account](#error-422-unavailable-telco-account)</li><li>[422 - Invalid Telco Account](#error-422-invalid-telco-account)</li></ul>|[ErrorListResponse](#schemacdr-telco-apierrorlistresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-v|string||none|
|200|x-fapi-interaction-id|string||none|
|400|x-fapi-interaction-id|string||none|
|406|x-fapi-interaction-id|string||none|
|422|x-fapi-interaction-id|string||none|

  
    
      <aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
<a href="#authorisation-scopes">telco:billing:read</a>
</aside>

    
  

## Get Transactions For Telco Account

<a id="opIdgetTransactionsForAccount"></a>

> Code samples

```http
GET https://data.holder.com.au/cds-au/v1/telco/accounts/{accountId}/transactions HTTP/1.1
Host: data.holder.com.au
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
  url: 'https://data.holder.com.au/cds-au/v1/telco/accounts/{accountId}/transactions',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`GET /telco/accounts/{accountId}/transactions`

Obtain the billing transactions for a specific account

###Endpoint Version
|   |  |
|---|--|
|Version|**1**

<h3 id="get-transactions-for-telco-account-parameters">Parameters</h3>

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
        "transactionUType": "account",
        "account": {
          "serviceIds": "string",
          "invoiceNumber": "string",
          "description": "string",
          "startDate": "string",
          "endDate": "string",
          "amount": "string",
          "adjustments": [
            {
              "amount": "string",
              "description": "string"
            }
          ]
        },
        "onceOff": {
          "serviceId": "string",
          "invoiceNumber": "string",
          "amount": "string",
          "description": "string"
        },
        "otherCharges": {
          "serviceId": "string",
          "invoiceNumber": "string",
          "startDate": "string",
          "endDate": "string",
          "type": "SERVICE",
          "amount": "string",
          "description": "string",
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

<h3 id="get-transactions-for-telco-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[TelcoTransactionListResponse](#schemacdr-telco-apitelcotransactionlistresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Invalid Page Size](#error-400-field-invalid-page-size)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li></ul>|[ErrorListResponse](#schemacdr-telco-apierrorlistresponse)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[404 - Unavailable Telco Account](#error-404-unavailable-telco-account)</li><li>[404 - Invalid Telco Account](#error-404-invalid-telco-account)</li></ul>|[ErrorListResponse](#schemacdr-telco-apierrorlistresponse)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|[ErrorListResponse](#schemacdr-telco-apierrorlistresponse)|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[422 - Invalid Page](#error-422-field-invalid-page)</li></ul>|[ErrorListResponse](#schemacdr-telco-apierrorlistresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-v|string||none|
|200|x-fapi-interaction-id|string||none|
|400|x-fapi-interaction-id|string||none|
|404|x-fapi-interaction-id|string||none|
|406|x-fapi-interaction-id|string||none|
|422|x-fapi-interaction-id|string||none|

  
    
      <aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
<a href="#authorisation-scopes">telco:billing:read</a>
</aside>

    
  

## Get Telco Transactions

<a id="opIdlistTransactions"></a>

> Code samples

```http
GET https://data.holder.com.au/cds-au/v1/telco/accounts/transactions HTTP/1.1
Host: data.holder.com.au
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
  url: 'https://data.holder.com.au/cds-au/v1/telco/accounts/transactions',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`GET /telco/accounts/transactions`

Obtain billing transactions for all accounts

###Endpoint Version
|   |  |
|---|--|
|Version|**1**

<h3 id="get-telco-transactions-parameters">Parameters</h3>

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
        "transactionUType": "account",
        "account": {
          "serviceIds": "string",
          "invoiceNumber": "string",
          "description": "string",
          "startDate": "string",
          "endDate": "string",
          "amount": "string",
          "adjustments": [
            {
              "amount": "string",
              "description": "string"
            }
          ]
        },
        "onceOff": {
          "serviceId": "string",
          "invoiceNumber": "string",
          "amount": "string",
          "description": "string"
        },
        "otherCharges": {
          "serviceId": "string",
          "invoiceNumber": "string",
          "startDate": "string",
          "endDate": "string",
          "type": "SERVICE",
          "amount": "string",
          "description": "string",
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

<h3 id="get-telco-transactions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[TelcoTransactionListResponse](#schemacdr-telco-apitelcotransactionlistresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Invalid Page Size](#error-400-field-invalid-page-size)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li></ul>|[ErrorListResponse](#schemacdr-telco-apierrorlistresponse)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|[ErrorListResponse](#schemacdr-telco-apierrorlistresponse)|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[422 - Invalid Page](#error-422-field-invalid-page)</li></ul>|[ErrorListResponse](#schemacdr-telco-apierrorlistresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-v|string||none|
|200|x-fapi-interaction-id|string||none|
|400|x-fapi-interaction-id|string||none|
|406|x-fapi-interaction-id|string||none|
|422|x-fapi-interaction-id|string||none|

  
    
      <aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
<a href="#authorisation-scopes">telco:billing:read</a>
</aside>

    
  

## Get Transactions For Specific Telco Accounts

<a id="opIdlistBillingForAccounts"></a>

> Code samples

```http
POST https://data.holder.com.au/cds-au/v1/telco/accounts/transactions HTTP/1.1
Host: data.holder.com.au
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
  url: 'https://data.holder.com.au/cds-au/v1/telco/accounts/transactions',
  method: 'post',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`POST /telco/accounts/transactions`

Obtain transactions for a specified set of accounts

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

<h3 id="get-transactions-for-specific-telco-accounts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountIds|path|string|mandatory|A seperated array of account IDs of specific accounts to obtain data for. This is a tokenised ID previous obtained from the Account List end point.|
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
|body|body|[accountIdList](#schemacdr-telco-apiaccountidlist)|mandatory|Request payload containing list of specific Accounts to obtain data for|
|» data|body|object|mandatory|none|
|»» accountIds|body|[string]|mandatory|Array of specific accountIds to obtain data for|
|» meta|body|[Meta](#schemacdr-telco-apimeta)|mandatory|none|

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
        "transactionUType": "account",
        "account": {
          "serviceIds": "string",
          "invoiceNumber": "string",
          "description": "string",
          "startDate": "string",
          "endDate": "string",
          "amount": "string",
          "adjustments": [
            {
              "amount": "string",
              "description": "string"
            }
          ]
        },
        "onceOff": {
          "serviceId": "string",
          "invoiceNumber": "string",
          "amount": "string",
          "description": "string"
        },
        "otherCharges": {
          "serviceId": "string",
          "invoiceNumber": "string",
          "startDate": "string",
          "endDate": "string",
          "type": "SERVICE",
          "amount": "string",
          "description": "string",
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

<h3 id="get-transactions-for-specific-telco-accounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[TelcoTransactionListResponse](#schemacdr-telco-apitelcotransactionlistresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Invalid Page Size](#error-400-field-invalid-page-size)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li></ul>|[ErrorListResponse](#schemacdr-telco-apierrorlistresponse)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|[ErrorListResponse](#schemacdr-telco-apierrorlistresponse)|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[422 - Invalid Page](#error-422-field-invalid-page)</li><li>[422 - Unavailable Telco Account](#error-422-unavailable-telco-account)</li><li>[422 - Invalid Telco Account](#error-422-invalid-telco-account)</li></ul>|[ErrorListResponse](#schemacdr-telco-apierrorlistresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-v|string||none|
|200|x-fapi-interaction-id|string||none|
|400|x-fapi-interaction-id|string||none|
|406|x-fapi-interaction-id|string||none|
|422|x-fapi-interaction-id|string||none|

  
    
      <aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
<a href="#authorisation-scopes">telco:billing:read</a>
</aside>

    
  

<h2 class="schema-heading" id="cdr-telco-api-schemas">Schemas</h2>
<a class="schema-link" id="cdr-telco-api-schemas"></a>

<h3 class="schema-toc" id="tocStelcoproductlistresponse">TelcoProductListResponse</h3>

<a id="schemacdr-telco-apitelcoproductlistresponse"></a>

```json
{
  "data": {
    "plans": [
      {
        "productId": "string",
        "effectiveFrom": "string",
        "effectiveTo": "string",
        "lastUpdated": "string",
        "displayName": "string",
        "description": "string",
        "type": "MOBILE",
        "purpose": "PERSONAL",
        "billingType": "PRE_PAID",
        "contract": {
          "name": "string",
          "description": "string",
          "duration": 0,
          "contractURI": "string"
        },
        "bundle": true,
        "brand": "string",
        "brandName": "string",
        "pricing": [
          {
            "name": "string",
            "description": "string",
            "period": "string",
            "chargeAmount": "string"
          }
        ],
        "thirdPartyAgentId": "string",
        "thirdPartyAgentName": "string",
        "applicationUri": "string",
        "additionalInformation": {
          "overviewUri": "string",
          "termsUri": "string",
          "eligibilityUri": "string",
          "pricingUri": "string",
          "bundleUri": "string"
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
|data|[TelcoProductListResponse_data](#schemacdr-telco-apitelcoproductlistresponse_data)|mandatory|none|
|links|[LinksPaginated](#schemacdr-telco-apilinkspaginated)|mandatory|none|
|meta|[MetaPaginated](#schemacdr-telco-apimetapaginated)|mandatory|none|

<h3 class="schema-toc" id="tocStelcoproductresponse">TelcoProductResponse</h3>

<a id="schemacdr-telco-apitelcoproductresponse"></a>

```json
{
  "data": {
    "productId": "string",
    "effectiveFrom": "string",
    "effectiveTo": "string",
    "lastUpdated": "string",
    "displayName": "string",
    "description": "string",
    "type": "MOBILE",
    "purpose": "PERSONAL",
    "billingType": "PRE_PAID",
    "contract": {
      "name": "string",
      "description": "string",
      "duration": 0,
      "contractURI": "string"
    },
    "bundle": true,
    "brand": "string",
    "brandName": "string",
    "pricing": [
      {
        "name": "string",
        "description": "string",
        "period": "string",
        "chargeAmount": "string"
      }
    ],
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
    "meteringCharges": [
      {
        "displayName": "string",
        "description": "string",
        "minimumValue": "string",
        "maximumValue": "string",
        "period": "string"
      }
    ],
    "bundles": [
      {
        "displayName": "string",
        "description": "string",
        "bundleUri": "string",
        "features": [
          {
            "displayName": "string",
            "description": "string",
            "category": "DATA"
          }
        ]
      }
    ],
    "plans": [
      {
        "displayName": "string",
        "description": "string",
        "planUri": "string",
        "features": [
          {
            "displayName": "string",
            "description": "string"
          }
        ]
      }
    ],
    "discounts": [
      {
        "displayName": "string",
        "description": "string",
        "discountUri": "string",
        "features": [
          {
            "displayName": "string",
            "description": "string"
          }
        ]
      }
    ],
    "incentives": [
      {
        "displayName": "string",
        "description": "string",
        "incentiveUri": "string",
        "features": [
          {
            "displayName": "string",
            "description": "string"
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
|data|[TelcoProductDetail](#schemacdr-telco-apitelcoproductdetail)|mandatory|none|
|links|[Links](#schemacdr-telco-apilinks)|mandatory|none|
|meta|[Meta](#schemacdr-telco-apimeta)|optional|none|

<h3 class="schema-toc" id="tocStelcousagelistresponse">TelcoUsageListResponse</h3>

<a id="schemacdr-telco-apitelcousagelistresponse"></a>

```json
{
  "data": {
    "accounts": [
      {
        "accountId": "string",
        "services": [
          {
            "service": {
              "serviceId": "string",
              "displayName": "string",
              "phoneNumber": "string",
              "startDate": "string",
              "endDate": "string",
              "usage": {
                "data": {
                  "upload": 0,
                  "download": 0,
                  "sessions": 0,
                  "amount": "string",
                  "roaming": {
                    "download": 0,
                    "amount": "string"
                  }
                },
                "voice": {
                  "national": {
                    "duration": "string",
                    "number": 0,
                    "amount": "string"
                  },
                  "international": {
                    "duration": "string",
                    "number": 0,
                    "amount": "string"
                  },
                  "roaming": {
                    "duration": "string",
                    "number": 0,
                    "amount": "string"
                  }
                },
                "messaging": {
                  "sms": {
                    "national": 0,
                    "international": 0,
                    "roaming": 0,
                    "amount": "string"
                  },
                  "mms": {
                    "national": 0,
                    "international": 0,
                    "roaming": 0,
                    "amount": "string"
                  }
                }
              }
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
|data|[TelcoUsageListResponse_data](#schemacdr-telco-apitelcousagelistresponse_data)|mandatory|none|
|links|[LinksPaginated](#schemacdr-telco-apilinkspaginated)|mandatory|none|
|meta|[MetaPaginated](#schemacdr-telco-apimetapaginated)|mandatory|none|

<h3 class="schema-toc" id="tocStelcousageresponse">TelcoUsageResponse</h3>

<a id="schemacdr-telco-apitelcousageresponse"></a>

```json
{
  "data": {
    "accountId": "string",
    "services": [
      {
        "service": {
          "serviceId": "string",
          "displayName": "string",
          "phoneNumber": "string",
          "startDate": "string",
          "endDate": "string",
          "usage": {
            "data": {
              "upload": 0,
              "download": 0,
              "sessions": 0,
              "amount": "string",
              "roaming": {
                "download": 0,
                "amount": "string"
              }
            },
            "voice": {
              "national": {
                "duration": "string",
                "number": 0,
                "amount": "string"
              },
              "international": {
                "duration": "string",
                "number": 0,
                "amount": "string"
              },
              "roaming": {
                "duration": "string",
                "number": 0,
                "amount": "string"
              }
            },
            "messaging": {
              "sms": {
                "national": 0,
                "international": 0,
                "roaming": 0,
                "amount": "string"
              },
              "mms": {
                "national": 0,
                "international": 0,
                "roaming": 0,
                "amount": "string"
              }
            }
          }
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
|data|[TelcoAccountUsage](#schemacdr-telco-apitelcoaccountusage)|mandatory|none|
|links|[LinksPaginated](#schemacdr-telco-apilinkspaginated)|mandatory|none|
|meta|[MetaPaginated](#schemacdr-telco-apimetapaginated)|mandatory|none|

<h3 class="schema-toc" id="tocStelcoaccountlistresponse">TelcoAccountListResponse</h3>

<a id="schemacdr-telco-apitelcoaccountlistresponse"></a>

```json
{
  "data": {
    "accounts": [
      {
        "accountId": "string",
        "accountNumber": "string",
        "displayName": "string",
        "creationDate": "string",
        "lastUpdated": "string",
        "brand": "string",
        "openStatus": "CLOSED",
        "plans": [
          {
            "nickname": "string",
            "type": "MOBILE",
            "serviceIds": [
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
|data|[TelcoAccountListResponse_data](#schemacdr-telco-apitelcoaccountlistresponse_data)|mandatory|none|
|links|[LinksPaginated](#schemacdr-telco-apilinkspaginated)|mandatory|none|
|meta|[MetaPaginated](#schemacdr-telco-apimetapaginated)|mandatory|none|

<h3 class="schema-toc" id="tocStelcoaccountdetailresponse">TelcoAccountDetailResponse</h3>

<a id="schemacdr-telco-apitelcoaccountdetailresponse"></a>

```json
{
  "data": {
    "accountId": "string",
    "accountNumber": "string",
    "displayName": "string",
    "creationDate": "string",
    "lastUpdated": "string",
    "brand": "string",
    "openStatus": "CLOSED",
    "plans": [
      {
        "nickname": "string",
        "serviceIds": [
          "string"
        ],
        "planOverview": {
          "displayName": "string",
          "startDate": "string",
          "endDate": "string"
        },
        "planDetail": {
          "charges": [
            {
              "displayName": "string",
              "description": "string",
              "minimumValue": "string",
              "maximumValue": "string",
              "period": "string"
            }
          ]
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
|data|[TelcoAccountDetail](#schemacdr-telco-apitelcoaccountdetail)|mandatory|none|
|links|[Links](#schemacdr-telco-apilinks)|mandatory|none|
|meta|[Meta](#schemacdr-telco-apimeta)|mandatory|none|

<h3 class="schema-toc" id="tocStelcopaymentscheduleresponse">TelcoPaymentScheduleResponse</h3>

<a id="schemacdr-telco-apitelcopaymentscheduleresponse"></a>

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
|data|[TelcoPaymentScheduleResponse_data](#schemacdr-telco-apitelcopaymentscheduleresponse_data)|mandatory|none|
|links|[Links](#schemacdr-telco-apilinks)|mandatory|none|
|meta|[Meta](#schemacdr-telco-apimeta)|mandatory|none|

<h3 class="schema-toc" id="tocStelcoconcessionsresponse">TelcoConcessionsResponse</h3>

<a id="schemacdr-telco-apitelcoconcessionsresponse"></a>

```json
{
  "data": {
    "concessions": [
      {
        "type": "CONCESSION",
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
|data|[TelcoConcessionsResponse_data](#schemacdr-telco-apitelcoconcessionsresponse_data)|mandatory|none|
|links|[Links](#schemacdr-telco-apilinks)|mandatory|none|
|meta|[Meta](#schemacdr-telco-apimeta)|mandatory|none|

<h3 class="schema-toc" id="tocStelcobalancelistresponse">TelcoBalanceListResponse</h3>

<a id="schemacdr-telco-apitelcobalancelistresponse"></a>

```json
{
  "data": {
    "balances": [
      {
        "accountId": "string",
        "balance": {
          "services": [
            {
              "serviceId": "string",
              "displayName": "string",
              "phoneNumber": "string",
              "startDate": "string",
              "endDate": "string",
              "balances": {
                "data": {
                  "planType": "METERED",
                  "description": "string",
                  "upload": 0,
                  "download": 0,
                  "amount": "string",
                  "roaming": {
                    "download": 0,
                    "amount": "string"
                  }
                },
                "voice": {
                  "planType": "METERED",
                  "national": {
                    "description": "string",
                    "duration": "string",
                    "number": 0,
                    "amount": "string"
                  },
                  "international": {
                    "description": "string",
                    "duration": "string",
                    "number": 0,
                    "amount": "string"
                  }
                },
                "messaging": {
                  "planType": "METERED",
                  "sms": {
                    "description": "string",
                    "national": 0,
                    "international": 0,
                    "amount": "string"
                  },
                  "mms": {
                    "description": "string",
                    "national": 0,
                    "international": 0,
                    "amount": "string"
                  }
                }
              }
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
|data|[TelcoBalanceListResponse_data](#schemacdr-telco-apitelcobalancelistresponse_data)|mandatory|none|
|links|[LinksPaginated](#schemacdr-telco-apilinkspaginated)|mandatory|none|
|meta|[MetaPaginated](#schemacdr-telco-apimetapaginated)|mandatory|none|

<h3 class="schema-toc" id="tocStelcobalanceresponse">TelcoBalanceResponse</h3>

<a id="schemacdr-telco-apitelcobalanceresponse"></a>

```json
{
  "data": {
    "accountId": "string",
    "balance": {
      "services": [
        {
          "serviceId": "string",
          "displayName": "string",
          "phoneNumber": "string",
          "startDate": "string",
          "endDate": "string",
          "balances": {
            "data": {
              "planType": "METERED",
              "description": "string",
              "upload": 0,
              "download": 0,
              "amount": "string",
              "roaming": {
                "download": 0,
                "amount": "string"
              }
            },
            "voice": {
              "planType": "METERED",
              "national": {
                "description": "string",
                "duration": "string",
                "number": 0,
                "amount": "string"
              },
              "international": {
                "description": "string",
                "duration": "string",
                "number": 0,
                "amount": "string"
              }
            },
            "messaging": {
              "planType": "METERED",
              "sms": {
                "description": "string",
                "national": 0,
                "international": 0,
                "amount": "string"
              },
              "mms": {
                "description": "string",
                "national": 0,
                "international": 0,
                "amount": "string"
              }
            }
          }
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
|data|[TelcoBalanceResponse_data](#schemacdr-telco-apitelcobalanceresponse_data)|mandatory|none|
|links|[Links](#schemacdr-telco-apilinks)|mandatory|none|
|meta|[Meta](#schemacdr-telco-apimeta)|mandatory|none|

<h3 class="schema-toc" id="tocStelcoinvoicelistresponse">TelcoInvoiceListResponse</h3>

<a id="schemacdr-telco-apitelcoinvoicelistresponse"></a>

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
        "services": [
          "string"
        ],
        "accountCharges": {
          "totalUsageCharges": "string",
          "totalOnceOffCharges": "string",
          "totalDiscounts": "string",
          "otherCharges": {
            "amount": "string",
            "description": "string",
            "type": "SERVICE"
          },
          "totalGst": "string"
        },
        "accountUsage": {
          "data": {
            "upload": 0,
            "download": 0,
            "sessions": 0,
            "amount": "string",
            "roaming": {
              "download": 0,
              "amount": "string"
            }
          },
          "voice": {
            "national": {
              "duration": "string",
              "number": 0,
              "amount": "string"
            },
            "international": {
              "duration": "string",
              "number": 0,
              "amount": "string"
            },
            "roaming": {
              "duration": "string",
              "number": 0,
              "amount": "string"
            }
          },
          "messaging": {
            "sms": {
              "national": 0,
              "international": 0,
              "roaming": 0,
              "amount": "string"
            },
            "mms": {
              "national": 0,
              "international": 0,
              "roaming": 0,
              "amount": "string"
            }
          }
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
|data|[TelcoInvoiceListResponse_data](#schemacdr-telco-apitelcoinvoicelistresponse_data)|mandatory|none|
|links|[LinksPaginated](#schemacdr-telco-apilinkspaginated)|mandatory|none|
|meta|[MetaPaginated](#schemacdr-telco-apimetapaginated)|mandatory|none|

<h3 class="schema-toc" id="tocStelcotransactionlistresponse">TelcoTransactionListResponse</h3>

<a id="schemacdr-telco-apitelcotransactionlistresponse"></a>

```json
{
  "data": {
    "transactions": [
      {
        "accountId": "string",
        "executionDateTime": "string",
        "gst": "string",
        "transactionUType": "account",
        "account": {
          "serviceIds": "string",
          "invoiceNumber": "string",
          "description": "string",
          "startDate": "string",
          "endDate": "string",
          "amount": "string",
          "adjustments": [
            {
              "amount": "string",
              "description": "string"
            }
          ]
        },
        "onceOff": {
          "serviceId": "string",
          "invoiceNumber": "string",
          "amount": "string",
          "description": "string"
        },
        "otherCharges": {
          "serviceId": "string",
          "invoiceNumber": "string",
          "startDate": "string",
          "endDate": "string",
          "type": "SERVICE",
          "amount": "string",
          "description": "string",
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
|data|[TelcoTransactionListResponse_data](#schemacdr-telco-apitelcotransactionlistresponse_data)|mandatory|none|
|links|[LinksPaginated](#schemacdr-telco-apilinkspaginated)|mandatory|none|
|meta|[MetaPaginated](#schemacdr-telco-apimetapaginated)|mandatory|none|

<h3 class="schema-toc" id="tocSerrorlistresponse">ErrorListResponse</h3>

<a id="schemacdr-telco-apierrorlistresponse"></a>

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
|errors|[[ErrorListResponse_errors](#schemacdr-telco-apierrorlistresponse_errors)]|mandatory|none|

<h3 class="schema-toc" id="tocStelcoproduct">TelcoProduct</h3>

<a id="schemacdr-telco-apitelcoproduct"></a>

```json
{
  "productId": "string",
  "effectiveFrom": "string",
  "effectiveTo": "string",
  "lastUpdated": "string",
  "displayName": "string",
  "description": "string",
  "type": "MOBILE",
  "purpose": "PERSONAL",
  "billingType": "PRE_PAID",
  "contract": {
    "name": "string",
    "description": "string",
    "duration": 0,
    "contractURI": "string"
  },
  "bundle": true,
  "brand": "string",
  "brandName": "string",
  "pricing": [
    {
      "name": "string",
      "description": "string",
      "period": "string",
      "chargeAmount": "string"
    }
  ],
  "thirdPartyAgentId": "string",
  "thirdPartyAgentName": "string",
  "applicationUri": "string",
  "additionalInformation": {
    "overviewUri": "string",
    "termsUri": "string",
    "eligibilityUri": "string",
    "pricingUri": "string",
    "bundleUri": "string"
  }
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|productId|[ASCIIString](#common-field-types)|mandatory|The ID of the specific product|
|effectiveFrom|[DateTimeString](#common-field-types)|optional|The date and time from which this product is effective (ie. is available for origination). Used to enable the articulation of products to the regime before they are available for customers to originate|
|effectiveTo|[DateTimeString](#common-field-types)|optional|The date and time at which this product will be retired and will no longer be offered. Used to enable the managed deprecation of plans|
|lastUpdated|[DateTimeString](#common-field-types)|optional|The last date and time that the information for this plan was changed (or the creation date for the plan if it has never been altered)|
|displayName|string|optional|The display name of the product|
|description|string|optional|A description of the product|
|type|string|mandatory|The type of product|
|purpose|string|optional|The purpose type of the product. If absent, then the value PERSONAL is assumed|
|billingType|string|mandatory|The type of product|
|contract|[TelcoContract](#schemacdr-telco-apitelcocontract)|conditional|Summary of the contract details. Required if a contract is required|
|bundle|boolean|optional|Required if part of a bundle. If not present FALSE is assumed|
|brand|string|mandatory|The ID of the brand under which this product is offered|
|brandName|string|mandatory|The display name of the brand under which this product is offered|
|pricing|[[TelcoProduct_pricing](#schemacdr-telco-apitelcoproduct_pricing)]|mandatory|List of pricing details for the product plan|
|thirdPartyAgentId|string|optional|The ID of the Third Party through which this product may be originated|
|thirdPartyAgentName|string|optional|The display name of the Third Party through which this product may be originated|
|applicationUri|[URIString](#common-field-types)|optional|A link to an application web page where this plan can be applied for|
|additionalInformation|[TelcoProduct_additionalInformation](#schemacdr-telco-apitelcoproduct_additionalinformation)|optional|Object that contains links to additional information on specific topics|

#### Enumerated Values

|Property|Value|
|---|---|
|type|MOBILE|
|type|BROADBAND|
|purpose|PERSONAL|
|purpose|BUSINESS|
|purpose|ALL|
|billingType|PRE_PAID|
|billingType|POST_PAID|
|billingType|UPFRONT_PAID|
|billingType|OTHER|

<h3 class="schema-toc" id="tocStelcoproductdetail">TelcoProductDetail</h3>

<a id="schemacdr-telco-apitelcoproductdetail"></a>

```json
{
  "productId": "string",
  "effectiveFrom": "string",
  "effectiveTo": "string",
  "lastUpdated": "string",
  "displayName": "string",
  "description": "string",
  "type": "MOBILE",
  "purpose": "PERSONAL",
  "billingType": "PRE_PAID",
  "contract": {
    "name": "string",
    "description": "string",
    "duration": 0,
    "contractURI": "string"
  },
  "bundle": true,
  "brand": "string",
  "brandName": "string",
  "pricing": [
    {
      "name": "string",
      "description": "string",
      "period": "string",
      "chargeAmount": "string"
    }
  ],
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
  "meteringCharges": [
    {
      "displayName": "string",
      "description": "string",
      "minimumValue": "string",
      "maximumValue": "string",
      "period": "string"
    }
  ],
  "bundles": [
    {
      "displayName": "string",
      "description": "string",
      "bundleUri": "string",
      "features": [
        {
          "displayName": "string",
          "description": "string",
          "category": "DATA"
        }
      ]
    }
  ],
  "plans": [
    {
      "displayName": "string",
      "description": "string",
      "planUri": "string",
      "features": [
        {
          "displayName": "string",
          "description": "string"
        }
      ]
    }
  ],
  "discounts": [
    {
      "displayName": "string",
      "description": "string",
      "discountUri": "string",
      "features": [
        {
          "displayName": "string",
          "description": "string"
        }
      ]
    }
  ],
  "incentives": [
    {
      "displayName": "string",
      "description": "string",
      "incentiveUri": "string",
      "features": [
        {
          "displayName": "string",
          "description": "string"
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
|*anonymous*|[TelcoProduct](#schemacdr-telco-apitelcoproduct)|mandatory|none|

*and*

|Name|Type|Required|Description|
|---|---|---|---|
|*anonymous*|[TelcoProductDetail_allOf](#schemacdr-telco-apitelcoproductdetail_allof)|mandatory|none|

<h3 class="schema-toc" id="tocStelcocontract">TelcoContract</h3>

<a id="schemacdr-telco-apitelcocontract"></a>

```json
{
  "name": "string",
  "description": "string",
  "duration": 0,
  "contractURI": "string"
}

```

*Summary of the contract details. Required if a contract is required*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|name|string|mandatory|Name of the contract|
|description|string|optional|Description if the contract|
|duration|number|mandatory|Minimum contract duration in months|
|contractURI|[URIString](#common-field-types)|optional|URI of the contract conditions|

<h3 class="schema-toc" id="tocStelcoservicedetail">TelcoServiceDetail</h3>

<a id="schemacdr-telco-apitelcoservicedetail"></a>

```json
{
  "serviceId": "string"
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|serviceId|string|mandatory|The tokenised ID of the service for use in the CDR APIs.  Created according to the CDR rules for ID permanence|

<h3 class="schema-toc" id="tocStelcoaccountusage">TelcoAccountUsage</h3>

<a id="schemacdr-telco-apitelcoaccountusage"></a>

```json
{
  "accountId": "string",
  "services": [
    {
      "service": {
        "serviceId": "string",
        "displayName": "string",
        "phoneNumber": "string",
        "startDate": "string",
        "endDate": "string",
        "usage": {
          "data": {
            "upload": 0,
            "download": 0,
            "sessions": 0,
            "amount": "string",
            "roaming": {
              "download": 0,
              "amount": "string"
            }
          },
          "voice": {
            "national": {
              "duration": "string",
              "number": 0,
              "amount": "string"
            },
            "international": {
              "duration": "string",
              "number": 0,
              "amount": "string"
            },
            "roaming": {
              "duration": "string",
              "number": 0,
              "amount": "string"
            }
          },
          "messaging": {
            "sms": {
              "national": 0,
              "international": 0,
              "roaming": 0,
              "amount": "string"
            },
            "mms": {
              "national": 0,
              "international": 0,
              "roaming": 0,
              "amount": "string"
            }
          }
        }
      }
    }
  ]
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|accountId|string|optional|Tokenised ID of the account. In accordance with CDR ID permanence requirements|
|services|[[TelcoAccountUsage_services](#schemacdr-telco-apitelcoaccountusage_services)]|optional|List of services that are part of the account|

<h3 class="schema-toc" id="tocStelcoserviceusage">TelcoServiceUsage</h3>

<a id="schemacdr-telco-apitelcoserviceusage"></a>

```json
{
  "serviceId": "string",
  "displayName": "string",
  "phoneNumber": "string",
  "startDate": "string",
  "endDate": "string",
  "usage": {
    "data": {
      "upload": 0,
      "download": 0,
      "sessions": 0,
      "amount": "string",
      "roaming": {
        "download": 0,
        "amount": "string"
      }
    },
    "voice": {
      "national": {
        "duration": "string",
        "number": 0,
        "amount": "string"
      },
      "international": {
        "duration": "string",
        "number": 0,
        "amount": "string"
      },
      "roaming": {
        "duration": "string",
        "number": 0,
        "amount": "string"
      }
    },
    "messaging": {
      "sms": {
        "national": 0,
        "international": 0,
        "roaming": 0,
        "amount": "string"
      },
      "mms": {
        "national": 0,
        "international": 0,
        "roaming": 0,
        "amount": "string"
      }
    }
  }
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|serviceId|string|mandatory|Tokenised ID of the service.  To be created in accordance with CDR ID permanence requirements|
|displayName|string|optional|Optional description of the service used for display purposes|
|phoneNumber|string|optional|Required if the service includes a phone number|
|startDate|[DateTimeString](#common-field-types)|optional|Date when the balance period started|
|endDate|[DateTimeString](#common-field-types)|optional|Date when the balance period ends|
|usage|[TelcoUsage](#schemacdr-telco-apitelcousage)|optional|Object containing usage summary|

<h3 class="schema-toc" id="tocStelcoaccountbase">TelcoAccountBase</h3>

<a id="schemacdr-telco-apitelcoaccountbase"></a>

```json
{
  "accountId": "string",
  "accountNumber": "string",
  "displayName": "string",
  "creationDate": "string",
  "lastUpdated": "string",
  "brand": "string",
  "openStatus": "CLOSED"
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|accountId|string|optional|The ID of the account. To be created in accordance with CDR ID permanence requirements|
|accountNumber|string|conditional|Masked identifier of the account as defined by the data holder. This must be the value presented on physical statements (required if it exists) and must not be used for the value of the accountId|
|displayName|string|optional|An optional display name for the account if one exists or can be derived. The content of this field is at the discretion of the data holder|
|creationDate|[DateString](#common-field-types)|optional|The date that the account was created or opened. Mandatory if openStatus is OPEN|
|lastUpdated|[DateString](#common-field-types)|optional|The date and time which the account was last updated|
|brand|string|optional|The retail name of the brand|
|openStatus|string|optional|Open or closed status for the account. If not present then OPEN is assumed|

#### Enumerated Values

|Property|Value|
|---|---|
|openStatus|CLOSED|
|openStatus|OPEN|

<h3 class="schema-toc" id="tocStelcoaccount">TelcoAccount</h3>

<a id="schemacdr-telco-apitelcoaccount"></a>

```json
{
  "accountId": "string",
  "accountNumber": "string",
  "displayName": "string",
  "creationDate": "string",
  "lastUpdated": "string",
  "brand": "string",
  "openStatus": "CLOSED",
  "plans": [
    {
      "nickname": "string",
      "type": "MOBILE",
      "serviceIds": [
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
|*anonymous*|[TelcoAccountBase](#schemacdr-telco-apitelcoaccountbase)|mandatory|none|

*and*

|Name|Type|Required|Description|
|---|---|---|---|
|*anonymous*|[TelcoAccount_allOf](#schemacdr-telco-apitelcoaccount_allof)|mandatory|The array of plans containing services and associated plan details|

<h3 class="schema-toc" id="tocStelcoaccountdetail">TelcoAccountDetail</h3>

<a id="schemacdr-telco-apitelcoaccountdetail"></a>

```json
{
  "accountId": "string",
  "accountNumber": "string",
  "displayName": "string",
  "creationDate": "string",
  "lastUpdated": "string",
  "brand": "string",
  "openStatus": "CLOSED",
  "plans": [
    {
      "nickname": "string",
      "serviceIds": [
        "string"
      ],
      "planOverview": {
        "displayName": "string",
        "startDate": "string",
        "endDate": "string"
      },
      "planDetail": {
        "charges": [
          {
            "displayName": "string",
            "description": "string",
            "minimumValue": "string",
            "maximumValue": "string",
            "period": "string"
          }
        ]
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
|*anonymous*|[TelcoAccountBase](#schemacdr-telco-apitelcoaccountbase)|mandatory|none|

*and*

|Name|Type|Required|Description|
|---|---|---|---|
|*anonymous*|[TelcoAccountDetail_allOf](#schemacdr-telco-apitelcoaccountdetail_allof)|mandatory|The array of plans containing services and associated plan details|

<h3 class="schema-toc" id="tocStelcopaymentschedule">TelcoPaymentSchedule</h3>

<a id="schemacdr-telco-apitelcopaymentschedule"></a>

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
|amount|[AmountString](#common-field-types)|optional|Optional payment amount indicating that a constant payment amount is scheduled to be paid (used in bill smooting scenarios)|
|paymentScheduleUType|string|mandatory|The type of object present in this response|
|cardDebit|[TelcoPaymentSchedule_cardDebit](#schemacdr-telco-apitelcopaymentschedule_carddebit)|conditional|Represents a regular credit card payment schedule. Mandatory if paymentScheduleUType is set to cardDebit|
|directDebit|[TelcoPaymentSchedule_directDebit](#schemacdr-telco-apitelcopaymentschedule_directdebit)|conditional|Represents a regular direct debit from a specified bank account. Mandatory if paymentScheduleUType is set to directDebit|
|digitalWallet|[TelcoPaymentSchedule_digitalWallet](#schemacdr-telco-apitelcopaymentschedule_digitalwallet)|conditional|Represents a regular payment from a digital wallet. Mandatory if paymentScheduleUType is set to digitalWallet|
|manualPayment|[TelcoPaymentSchedule_manualPayment](#schemacdr-telco-apitelcopaymentschedule_manualpayment)|conditional|Represents a manual payment schedule where the customer pays in response to a delivered statement. Mandatory if paymentScheduleUType is set to manualPayment|

#### Enumerated Values

|Property|Value|
|---|---|
|paymentScheduleUType|cardDebit|
|paymentScheduleUType|directDebit|
|paymentScheduleUType|manualPayment|
|paymentScheduleUType|digitalWallet|

<h3 class="schema-toc" id="tocStelcoconcession">TelcoConcession</h3>

<a id="schemacdr-telco-apitelcoconcession"></a>

```json
{
  "type": "CONCESSION",
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
|type|string|mandatory|The concession type|
|displayName|string|mandatory|The display name of the concession|
|additionalInfo|string|optional|Display text providing more information on the concession|
|additionalInfoUri|[URIString](#common-field-types)|optional|Optional link to additional information regarding the concession|
|startDate|[DateString](#common-field-types)|mandatory|Optional start date for the application of the concession|
|endDate|[DateString](#common-field-types)|optional|Optional end date for the application of the concession|
|discountFrequency|[ExternalRef](#common-field-types)|conditional|Conditional attribute for frequency at which a concession is applied. Required if type is FIXED_AMOUNT or FIXED_PERCENTAGE. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)|
|amount|[AmountString](#common-field-types)|conditional|Conditional attribute for the amount of discount for the concession- required if type is FIXED_AMOUNT|
|percentage|[RateString](#common-field-types)|conditional|Conditional attribute for the percentage of discount of concession - required if type is FIXED_PERCENTAGE|
|appliedTo|[string]|optional|Array of ENUM's to specify what the concession applies to. Multiple ENUM values can be provided. If absent, USAGE is assumed|

#### Enumerated Values

|Property|Value|
|---|---|
|type|CONCESSION|
|type|REBATE|
|type|GRANT|
|appliedTo|INVOICE|
|appliedTo|USAGE|

<h3 class="schema-toc" id="tocStelcoinvoice">TelcoInvoice</h3>

<a id="schemacdr-telco-apitelcoinvoice"></a>

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
  "services": [
    "string"
  ],
  "accountCharges": {
    "totalUsageCharges": "string",
    "totalOnceOffCharges": "string",
    "totalDiscounts": "string",
    "otherCharges": {
      "amount": "string",
      "description": "string",
      "type": "SERVICE"
    },
    "totalGst": "string"
  },
  "accountUsage": {
    "data": {
      "upload": 0,
      "download": 0,
      "sessions": 0,
      "amount": "string",
      "roaming": {
        "download": 0,
        "amount": "string"
      }
    },
    "voice": {
      "national": {
        "duration": "string",
        "number": 0,
        "amount": "string"
      },
      "international": {
        "duration": "string",
        "number": 0,
        "amount": "string"
      },
      "roaming": {
        "duration": "string",
        "number": 0,
        "amount": "string"
      }
    },
    "messaging": {
      "sms": {
        "national": 0,
        "international": 0,
        "roaming": 0,
        "amount": "string"
      },
      "mms": {
        "national": 0,
        "international": 0,
        "roaming": 0,
        "amount": "string"
      }
    }
  },
  "paymentStatus": "PAID"
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|accountId|string|mandatory|The ID of the account for which the invoice was issued. accountId must comply in accordance with CDR ID permanence|
|invoiceNumber|string|mandatory|The number assigned to this invoice by the telco Retailer|
|issueDate|[DateString](#common-field-types)|mandatory|The date that the invoice was actually issued (as opposed to generated or calculated)|
|dueDate|[DateString](#common-field-types)|optional|The date that the invoice is due to be paid|
|period|[TelcoInvoice_period](#schemacdr-telco-apitelcoinvoice_period)|conditional|Object containing the start and end date for the period covered by the invoice. Mandatory if any usage based charges are included in the invoice|
|invoiceAmount|[AmountString](#common-field-types)|optional|The net amount due for this invoice regardless of previous balance|
|gstAmount|[AmountString](#common-field-types)|optional|The total GST amount for this invoice.  If absent then zero is assumed|
|payOnTimeDiscount|[TelcoInvoice_payOnTimeDiscount](#schemacdr-telco-apitelcoinvoice_payontimediscount)|optional|A discount for on time payment|
|balanceAtIssue|[AmountString](#common-field-types)|mandatory|The account balance at the time the invoice was issued|
|services|[string]|mandatory|An array of service IDs to which this invoice applies. May be empty if the invoice contains no usage related charges|
|accountCharges|[TelcoInvoiceAccountCharges](#schemacdr-telco-apitelcoinvoiceaccountcharges)|optional|Object contain charges and credits related to usage|
|accountUsage|[TelcoUsage](#schemacdr-telco-apitelcousage)|optional|Object containing usage summary|
|paymentStatus|string|mandatory|Indicator of the payment status for the invoice|

#### Enumerated Values

|Property|Value|
|---|---|
|paymentStatus|PAID|
|paymentStatus|PARTIALLY_PAID|
|paymentStatus|NOT_PAID|

<h3 class="schema-toc" id="tocStelcousage">TelcoUsage</h3>

<a id="schemacdr-telco-apitelcousage"></a>

```json
{
  "data": {
    "upload": 0,
    "download": 0,
    "sessions": 0,
    "amount": "string",
    "roaming": {
      "download": 0,
      "amount": "string"
    }
  },
  "voice": {
    "national": {
      "duration": "string",
      "number": 0,
      "amount": "string"
    },
    "international": {
      "duration": "string",
      "number": 0,
      "amount": "string"
    },
    "roaming": {
      "duration": "string",
      "number": 0,
      "amount": "string"
    }
  },
  "messaging": {
    "sms": {
      "national": 0,
      "international": 0,
      "roaming": 0,
      "amount": "string"
    },
    "mms": {
      "national": 0,
      "international": 0,
      "roaming": 0,
      "amount": "string"
    }
  }
}

```

*Object containing usage summary*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|data|[TelcoUsage_data](#schemacdr-telco-apitelcousage_data)|mandatory|Summary of data usage|
|voice|[TelcoUsage_voice](#schemacdr-telco-apitelcousage_voice)|conditional|Summary of voice calls. Required if voice calls are included in product plan|
|messaging|[TelcoUsage_messaging](#schemacdr-telco-apitelcousage_messaging)|conditional|Summary of messaging. Required if messaging services is included in the product plan|

<h3 class="schema-toc" id="tocStelcoinvoiceaccountcharges">TelcoInvoiceAccountCharges</h3>

<a id="schemacdr-telco-apitelcoinvoiceaccountcharges"></a>

```json
{
  "totalUsageCharges": "string",
  "totalOnceOffCharges": "string",
  "totalDiscounts": "string",
  "otherCharges": {
    "amount": "string",
    "description": "string",
    "type": "SERVICE"
  },
  "totalGst": "string"
}

```

*Object contain charges and credits related to usage*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|totalUsageCharges|[AmountString](#common-field-types)|mandatory|The aggregate total of usage charges for the period covered by the invoice (exclusive of GST)|
|totalOnceOffCharges|[AmountString](#common-field-types)|mandatory|The aggregate total of any once off charges arising from usage for the period covered by the invoice (exclusive of GST)|
|totalDiscounts|[AmountString](#common-field-types)|mandatory|The aggregate total of account level discounts or credits for the period covered by the invoice|
|otherCharges|[TelcoInvoiceAccountCharges_otherCharges](#schemacdr-telco-apitelcoinvoiceaccountcharges_othercharges)|optional|Optional array of charges that may be part of the invoice (for example services fees) (exclusive of GST)|
|totalGst|[AmountString](#common-field-types)|optional|The total GST for all account level charges.  If absent then zero is assumed|

<h3 class="schema-toc" id="tocStelcobillingtransaction">TelcoBillingTransaction</h3>

<a id="schemacdr-telco-apitelcobillingtransaction"></a>

```json
{
  "accountId": "string",
  "executionDateTime": "string",
  "gst": "string",
  "transactionUType": "account",
  "account": {
    "serviceIds": "string",
    "invoiceNumber": "string",
    "description": "string",
    "startDate": "string",
    "endDate": "string",
    "amount": "string",
    "adjustments": [
      {
        "amount": "string",
        "description": "string"
      }
    ]
  },
  "onceOff": {
    "serviceId": "string",
    "invoiceNumber": "string",
    "amount": "string",
    "description": "string"
  },
  "otherCharges": {
    "serviceId": "string",
    "invoiceNumber": "string",
    "startDate": "string",
    "endDate": "string",
    "type": "SERVICE",
    "amount": "string",
    "description": "string",
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
|accountId|string|mandatory|The ID of the account for which the transaction occurred. accountId must comply in accordance with CDR ID permanence|
|executionDateTime|[DateTimeString](#common-field-types)|mandatory|The date and time that the transaction occurred|
|gst|[AmountString](#common-field-types)|optional|The GST incurred in the transaction.  Should not be included for credits or payments.  If absent zero is assumed|
|transactionUType|string|mandatory|Indicator of the type of transaction object present in this record|
|account|[TelcoBillingAccountTransaction](#schemacdr-telco-apitelcobillingaccounttransaction)|optional|none|
|onceOff|[TelcoBillingOnceOffTransaction](#schemacdr-telco-apitelcobillingonceofftransaction)|conditional|none|
|otherCharges|[TelcoBillingOtherTransaction](#schemacdr-telco-apitelcobillingothertransaction)|optional|none|
|payment|[TelcoBillingPaymentTransaction](#schemacdr-telco-apitelcobillingpaymenttransaction)|conditional|none|

#### Enumerated Values

|Property|Value|
|---|---|
|transactionUType|account|
|transactionUType|onceOff|
|transactionUType|otherCharges|
|transactionUType|payment|

<h3 class="schema-toc" id="tocStelcobillingaccounttransaction">TelcoBillingAccountTransaction</h3>

<a id="schemacdr-telco-apitelcobillingaccounttransaction"></a>

```json
{
  "serviceIds": "string",
  "invoiceNumber": "string",
  "description": "string",
  "startDate": "string",
  "endDate": "string",
  "amount": "string",
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
|serviceIds|string|optional|Array list of services IDs to which this transaction applies if any|
|invoiceNumber|string|optional|The number of the invoice in which this transaction is included if it has been issued|
|description|string|optional|Optional description of the transaction that can be used for display purposes|
|startDate|[DateTimeString](#common-field-types)|mandatory|Date and time when the usage period starts|
|endDate|[DateTimeString](#common-field-types)|mandatory|Date and time when the usage period ends|
|amount|[AmountString](#common-field-types)|mandatory|The amount charged or credited for this transaction prior to any adjustments being applied.  A negative value indicates a credit|
|adjustments|[[TelcoBillingAccountTransaction_adjustments](#schemacdr-telco-apitelcobillingaccounttransaction_adjustments)]|optional|Optional array of adjustments arising for this transaction|

<h3 class="schema-toc" id="tocStelcobillingonceofftransaction">TelcoBillingOnceOffTransaction</h3>

<a id="schemacdr-telco-apitelcobillingonceofftransaction"></a>

```json
{
  "serviceId": "string",
  "invoiceNumber": "string",
  "amount": "string",
  "description": "string"
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|serviceId|string|optional|The ID of the service to which this transaction applies if any|
|invoiceNumber|string|optional|The number of the invoice in which this transaction is included if it has been issued|
|amount|[AmountString](#common-field-types)|mandatory|The amount of the charge or credit.  A positive value indicates a charge and a negative value indicates a credit|
|description|string|mandatory|A free text description of the item|

<h3 class="schema-toc" id="tocStelcobillingothertransaction">TelcoBillingOtherTransaction</h3>

<a id="schemacdr-telco-apitelcobillingothertransaction"></a>

```json
{
  "serviceId": "string",
  "invoiceNumber": "string",
  "startDate": "string",
  "endDate": "string",
  "type": "SERVICE",
  "amount": "string",
  "description": "string",
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
|serviceId|string|optional|The ID of the service to which this transaction applies if any|
|invoiceNumber|string|optional|The number of the invoice in which this transaction is included if it has been issued|
|startDate|[DateString](#common-field-types)|optional|Optional start date for the application of the charge|
|endDate|[DateString](#common-field-types)|optional|Optional end date for the application of the charge|
|type|string|optional|Type of charge. Assumed to be OTHER if absent|
|amount|[AmountString](#common-field-types)|mandatory|The amount of the charge|
|description|string|mandatory|A free text description of the item|
|adjustments|[[TelcoBillingAccountTransaction_adjustments](#schemacdr-telco-apitelcobillingaccounttransaction_adjustments)]|optional|Optional array of adjustments arising for this transaction|

#### Enumerated Values

|Property|Value|
|---|---|
|type|SERVICE|
|type|NETWORK|
|type|EQUIPMENT|
|type|METERING|
|type|OTHER|

<h3 class="schema-toc" id="tocStelcobillingpaymenttransaction">TelcoBillingPaymentTransaction</h3>

<a id="schemacdr-telco-apitelcobillingpaymenttransaction"></a>

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
|method|VOUCHER|
|method|OTHER|

<h3 class="schema-toc" id="tocStelcobalance">TelcoBalance</h3>

<a id="schemacdr-telco-apitelcobalance"></a>

```json
{
  "services": [
    {
      "serviceId": "string",
      "displayName": "string",
      "phoneNumber": "string",
      "startDate": "string",
      "endDate": "string",
      "balances": {
        "data": {
          "planType": "METERED",
          "description": "string",
          "upload": 0,
          "download": 0,
          "amount": "string",
          "roaming": {
            "download": 0,
            "amount": "string"
          }
        },
        "voice": {
          "planType": "METERED",
          "national": {
            "description": "string",
            "duration": "string",
            "number": 0,
            "amount": "string"
          },
          "international": {
            "description": "string",
            "duration": "string",
            "number": 0,
            "amount": "string"
          }
        },
        "messaging": {
          "planType": "METERED",
          "sms": {
            "description": "string",
            "national": 0,
            "international": 0,
            "amount": "string"
          },
          "mms": {
            "description": "string",
            "national": 0,
            "international": 0,
            "amount": "string"
          }
        }
      }
    }
  ]
}

```

*Object containing account usage summary*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|services|[[TelcoServiceBalance](#schemacdr-telco-apitelcoservicebalance)]|mandatory|Summary of data usage|

<h3 class="schema-toc" id="tocStelcoservicebalance">TelcoServiceBalance</h3>

<a id="schemacdr-telco-apitelcoservicebalance"></a>

```json
{
  "serviceId": "string",
  "displayName": "string",
  "phoneNumber": "string",
  "startDate": "string",
  "endDate": "string",
  "balances": {
    "data": {
      "planType": "METERED",
      "description": "string",
      "upload": 0,
      "download": 0,
      "amount": "string",
      "roaming": {
        "download": 0,
        "amount": "string"
      }
    },
    "voice": {
      "planType": "METERED",
      "national": {
        "description": "string",
        "duration": "string",
        "number": 0,
        "amount": "string"
      },
      "international": {
        "description": "string",
        "duration": "string",
        "number": 0,
        "amount": "string"
      }
    },
    "messaging": {
      "planType": "METERED",
      "sms": {
        "description": "string",
        "national": 0,
        "international": 0,
        "amount": "string"
      },
      "mms": {
        "description": "string",
        "national": 0,
        "international": 0,
        "amount": "string"
      }
    }
  }
}

```

*Telco balances for a service*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|serviceId|string|optional|The serviceId representing a unique service identifier such as a mobile (MSISDN) or internet service (e.g NBN or ADSL)|
|displayName|string|optional|Optional description of the service used for display purposes|
|phoneNumber|string|conditional|Required if the service includes a phone number|
|startDate|[DateTimeString](#common-field-types)|optional|Date when the balance period started|
|endDate|[DateTimeString](#common-field-types)|optional|Date when the balance period ends|
|balances|[TelcoServiceBalance_balances](#schemacdr-telco-apitelcoservicebalance_balances)|optional|The serviceId representing a unique service identifier such as a mobile (MSISDN) or internet service (e.g NBN or ADSL)|

<h3 class="schema-toc" id="tocStelcoplantype">TelcoPlanType</h3>

<a id="schemacdr-telco-apitelcoplantype"></a>

```json
"METERED"

```

*Plan type for this feature. METERED: A plan is charged by usage for the feature. UNMETERED: A plan with no limits for a feature. LIMITED: Where plan limit inclusions apply. UNSUPPORTED: Feature is not supported*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|*anonymous*|string|mandatory|Plan type for this feature. METERED: A plan is charged by usage for the feature. UNMETERED: A plan with no limits for a feature. LIMITED: Where plan limit inclusions apply. UNSUPPORTED: Feature is not supported|

#### Enumerated Values

|Property|Value|
|---|---|
|*anonymous*|METERED|
|*anonymous*|UNMETERED|
|*anonymous*|LIMITED|
|*anonymous*|UNSUPPORTED|

<h3 class="schema-toc" id="tocScommonphysicaladdress">CommonPhysicalAddress</h3>

<a id="schemacdr-telco-apicommonphysicaladdress"></a>

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
|simple|[CommonSimpleAddress](#schemacdr-telco-apicommonsimpleaddress)|conditional|Required if addressUType is set to simple|
|paf|[CommonPAFAddress](#schemacdr-telco-apicommonpafaddress)|conditional|Australian address formatted according to the file format defined by the [PAF file format](https://auspost.com.au/content/dam/auspost_corp/media/documents/australia-post-data-guide.pdf). Required if addressUType is set to paf|

#### Enumerated Values

|Property|Value|
|---|---|
|addressUType|paf|
|addressUType|simple|

<h3 class="schema-toc" id="tocScommonsimpleaddress">CommonSimpleAddress</h3>

<a id="schemacdr-telco-apicommonsimpleaddress"></a>

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

<a id="schemacdr-telco-apicommonpafaddress"></a>

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

<a id="schemacdr-telco-apilinks"></a>

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

<a id="schemacdr-telco-apimeta"></a>

```json
{}

```

### Properties

*None*

<h3 class="schema-toc" id="tocSlinkspaginated">LinksPaginated</h3>

<a id="schemacdr-telco-apilinkspaginated"></a>

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

<a id="schemacdr-telco-apimetapaginated"></a>

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

<h3 class="schema-toc" id="tocStelcoproductlistresponse_data">TelcoProductListResponse_data</h3>

<a id="schemacdr-telco-apitelcoproductlistresponse_data"></a>

```json
{
  "plans": [
    {
      "productId": "string",
      "effectiveFrom": "string",
      "effectiveTo": "string",
      "lastUpdated": "string",
      "displayName": "string",
      "description": "string",
      "type": "MOBILE",
      "purpose": "PERSONAL",
      "billingType": "PRE_PAID",
      "contract": {
        "name": "string",
        "description": "string",
        "duration": 0,
        "contractURI": "string"
      },
      "bundle": true,
      "brand": "string",
      "brandName": "string",
      "pricing": [
        {
          "name": "string",
          "description": "string",
          "period": "string",
          "chargeAmount": "string"
        }
      ],
      "thirdPartyAgentId": "string",
      "thirdPartyAgentName": "string",
      "applicationUri": "string",
      "additionalInformation": {
        "overviewUri": "string",
        "termsUri": "string",
        "eligibilityUri": "string",
        "pricingUri": "string",
        "bundleUri": "string"
      }
    }
  ]
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|plans|[[TelcoProduct](#schemacdr-telco-apitelcoproduct)]|mandatory|Array of Products|

<h3 class="schema-toc" id="tocStelcousagelistresponse_data">TelcoUsageListResponse_data</h3>

<a id="schemacdr-telco-apitelcousagelistresponse_data"></a>

```json
{
  "accounts": [
    {
      "accountId": "string",
      "services": [
        {
          "service": {
            "serviceId": "string",
            "displayName": "string",
            "phoneNumber": "string",
            "startDate": "string",
            "endDate": "string",
            "usage": {
              "data": {
                "upload": 0,
                "download": 0,
                "sessions": 0,
                "amount": "string",
                "roaming": {
                  "download": 0,
                  "amount": "string"
                }
              },
              "voice": {
                "national": {
                  "duration": "string",
                  "number": 0,
                  "amount": "string"
                },
                "international": {
                  "duration": "string",
                  "number": 0,
                  "amount": "string"
                },
                "roaming": {
                  "duration": "string",
                  "number": 0,
                  "amount": "string"
                }
              },
              "messaging": {
                "sms": {
                  "national": 0,
                  "international": 0,
                  "roaming": 0,
                  "amount": "string"
                },
                "mms": {
                  "national": 0,
                  "international": 0,
                  "roaming": 0,
                  "amount": "string"
                }
              }
            }
          }
        }
      ]
    }
  ]
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|accounts|[[TelcoAccountUsage](#schemacdr-telco-apitelcoaccountusage)]|mandatory|Array of services for the account|

<h3 class="schema-toc" id="tocStelcoaccountlistresponse_data">TelcoAccountListResponse_data</h3>

<a id="schemacdr-telco-apitelcoaccountlistresponse_data"></a>

```json
{
  "accounts": [
    {
      "accountId": "string",
      "accountNumber": "string",
      "displayName": "string",
      "creationDate": "string",
      "lastUpdated": "string",
      "brand": "string",
      "openStatus": "CLOSED",
      "plans": [
        {
          "nickname": "string",
          "type": "MOBILE",
          "serviceIds": [
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
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|accounts|[[TelcoAccount](#schemacdr-telco-apitelcoaccount)]|mandatory|Array of accounts|

<h3 class="schema-toc" id="tocStelcopaymentscheduleresponse_data">TelcoPaymentScheduleResponse_data</h3>

<a id="schemacdr-telco-apitelcopaymentscheduleresponse_data"></a>

```json
{
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
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|paymentSchedules|[[TelcoPaymentSchedule](#schemacdr-telco-apitelcopaymentschedule)]|mandatory|Array may be empty if no payment schedule exist|

<h3 class="schema-toc" id="tocStelcoconcessionsresponse_data">TelcoConcessionsResponse_data</h3>

<a id="schemacdr-telco-apitelcoconcessionsresponse_data"></a>

```json
{
  "concessions": [
    {
      "type": "CONCESSION",
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
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|concessions|[[TelcoConcession](#schemacdr-telco-apitelcoconcession)]|mandatory|Array may be empty if no concessions exist|

<h3 class="schema-toc" id="tocStelcobalancelistresponse_data_balances">TelcoBalanceListResponse_data_balances</h3>

<a id="schemacdr-telco-apitelcobalancelistresponse_data_balances"></a>

```json
{
  "accountId": "string",
  "balance": {
    "services": [
      {
        "serviceId": "string",
        "displayName": "string",
        "phoneNumber": "string",
        "startDate": "string",
        "endDate": "string",
        "balances": {
          "data": {
            "planType": "METERED",
            "description": "string",
            "upload": 0,
            "download": 0,
            "amount": "string",
            "roaming": {
              "download": 0,
              "amount": "string"
            }
          },
          "voice": {
            "planType": "METERED",
            "national": {
              "description": "string",
              "duration": "string",
              "number": 0,
              "amount": "string"
            },
            "international": {
              "description": "string",
              "duration": "string",
              "number": 0,
              "amount": "string"
            }
          },
          "messaging": {
            "planType": "METERED",
            "sms": {
              "description": "string",
              "national": 0,
              "international": 0,
              "amount": "string"
            },
            "mms": {
              "description": "string",
              "national": 0,
              "international": 0,
              "amount": "string"
            }
          }
        }
      }
    ]
  }
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|accountId|string|mandatory|The ID of the account|
|balance|[TelcoBalance](#schemacdr-telco-apitelcobalance)|mandatory|Object containing account usage summary|

<h3 class="schema-toc" id="tocStelcobalancelistresponse_data">TelcoBalanceListResponse_data</h3>

<a id="schemacdr-telco-apitelcobalancelistresponse_data"></a>

```json
{
  "balances": [
    {
      "accountId": "string",
      "balance": {
        "services": [
          {
            "serviceId": "string",
            "displayName": "string",
            "phoneNumber": "string",
            "startDate": "string",
            "endDate": "string",
            "balances": {
              "data": {
                "planType": "METERED",
                "description": "string",
                "upload": 0,
                "download": 0,
                "amount": "string",
                "roaming": {
                  "download": 0,
                  "amount": "string"
                }
              },
              "voice": {
                "planType": "METERED",
                "national": {
                  "description": "string",
                  "duration": "string",
                  "number": 0,
                  "amount": "string"
                },
                "international": {
                  "description": "string",
                  "duration": "string",
                  "number": 0,
                  "amount": "string"
                }
              },
              "messaging": {
                "planType": "METERED",
                "sms": {
                  "description": "string",
                  "national": 0,
                  "international": 0,
                  "amount": "string"
                },
                "mms": {
                  "description": "string",
                  "national": 0,
                  "international": 0,
                  "amount": "string"
                }
              }
            }
          }
        ]
      }
    }
  ]
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|balances|[[TelcoBalanceListResponse_data_balances](#schemacdr-telco-apitelcobalancelistresponse_data_balances)]|mandatory|Array of account balances|

<h3 class="schema-toc" id="tocStelcobalanceresponse_data">TelcoBalanceResponse_data</h3>

<a id="schemacdr-telco-apitelcobalanceresponse_data"></a>

```json
{
  "accountId": "string",
  "balance": {
    "services": [
      {
        "serviceId": "string",
        "displayName": "string",
        "phoneNumber": "string",
        "startDate": "string",
        "endDate": "string",
        "balances": {
          "data": {
            "planType": "METERED",
            "description": "string",
            "upload": 0,
            "download": 0,
            "amount": "string",
            "roaming": {
              "download": 0,
              "amount": "string"
            }
          },
          "voice": {
            "planType": "METERED",
            "national": {
              "description": "string",
              "duration": "string",
              "number": 0,
              "amount": "string"
            },
            "international": {
              "description": "string",
              "duration": "string",
              "number": 0,
              "amount": "string"
            }
          },
          "messaging": {
            "planType": "METERED",
            "sms": {
              "description": "string",
              "national": 0,
              "international": 0,
              "amount": "string"
            },
            "mms": {
              "description": "string",
              "national": 0,
              "international": 0,
              "amount": "string"
            }
          }
        }
      }
    ]
  }
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|accountId|string|optional|The ID of the account|
|balance|[TelcoBalance](#schemacdr-telco-apitelcobalance)|mandatory|Object containing account usage summary|

<h3 class="schema-toc" id="tocStelcoinvoicelistresponse_data">TelcoInvoiceListResponse_data</h3>

<a id="schemacdr-telco-apitelcoinvoicelistresponse_data"></a>

```json
{
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
      "services": [
        "string"
      ],
      "accountCharges": {
        "totalUsageCharges": "string",
        "totalOnceOffCharges": "string",
        "totalDiscounts": "string",
        "otherCharges": {
          "amount": "string",
          "description": "string",
          "type": "SERVICE"
        },
        "totalGst": "string"
      },
      "accountUsage": {
        "data": {
          "upload": 0,
          "download": 0,
          "sessions": 0,
          "amount": "string",
          "roaming": {
            "download": 0,
            "amount": "string"
          }
        },
        "voice": {
          "national": {
            "duration": "string",
            "number": 0,
            "amount": "string"
          },
          "international": {
            "duration": "string",
            "number": 0,
            "amount": "string"
          },
          "roaming": {
            "duration": "string",
            "number": 0,
            "amount": "string"
          }
        },
        "messaging": {
          "sms": {
            "national": 0,
            "international": 0,
            "roaming": 0,
            "amount": "string"
          },
          "mms": {
            "national": 0,
            "international": 0,
            "roaming": 0,
            "amount": "string"
          }
        }
      },
      "paymentStatus": "PAID"
    }
  ]
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|invoices|[[TelcoInvoice](#schemacdr-telco-apitelcoinvoice)]|mandatory|Array of invoices sorted by issue date in descending order|

<h3 class="schema-toc" id="tocStelcotransactionlistresponse_data">TelcoTransactionListResponse_data</h3>

<a id="schemacdr-telco-apitelcotransactionlistresponse_data"></a>

```json
{
  "transactions": [
    {
      "accountId": "string",
      "executionDateTime": "string",
      "gst": "string",
      "transactionUType": "account",
      "account": {
        "serviceIds": "string",
        "invoiceNumber": "string",
        "description": "string",
        "startDate": "string",
        "endDate": "string",
        "amount": "string",
        "adjustments": [
          {
            "amount": "string",
            "description": "string"
          }
        ]
      },
      "onceOff": {
        "serviceId": "string",
        "invoiceNumber": "string",
        "amount": "string",
        "description": "string"
      },
      "otherCharges": {
        "serviceId": "string",
        "invoiceNumber": "string",
        "startDate": "string",
        "endDate": "string",
        "type": "SERVICE",
        "amount": "string",
        "description": "string",
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
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|transactions|[[TelcoBillingTransaction](#schemacdr-telco-apitelcobillingtransaction)]|mandatory|Array of transactions sorted by date and time in descending order|

<h3 class="schema-toc" id="tocSerrorlistresponse_meta">ErrorListResponse_meta</h3>

<a id="schemacdr-telco-apierrorlistresponse_meta"></a>

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

<h3 class="schema-toc" id="tocSerrorlistresponse_errors">ErrorListResponse_errors</h3>

<a id="schemacdr-telco-apierrorlistresponse_errors"></a>

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

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|code|string|mandatory|The code of the error encountered. Where the error is specific to the respondent, an application-specific error code, expressed as a string value. If the error is application-specific, the URN code that the specific error extends must be provided in the meta object. Otherwise, the value is the error code URN.|
|title|string|mandatory|A short, human-readable summary of the problem that MUST NOT change from occurrence to occurrence of the problem represented by the error code.|
|detail|string|mandatory|A human-readable explanation specific to this occurrence of the problem.|
|meta|[ErrorListResponse_meta](#schemacdr-telco-apierrorlistresponse_meta)|optional|Additional data for customised error codes|

<h3 class="schema-toc" id="tocStelcoproduct_pricing">TelcoProduct_pricing</h3>

<a id="schemacdr-telco-apitelcoproduct_pricing"></a>

```json
{
  "name": "string",
  "description": "string",
  "period": "string",
  "chargeAmount": "string"
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|name|string|mandatory|The display name of the pricing|
|description|string|mandatory|The description of the pricing|
|period|[ExternalRef](#common-field-types)|optional|The duration that occurs on a pricing schedule indicates the frequency. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)|
|chargeAmount|[AmountString](#common-field-types)|mandatory|The amount charged for the duration period|

<h3 class="schema-toc" id="tocStelcoproduct_additionalinformation">TelcoProduct_additionalInformation</h3>

<a id="schemacdr-telco-apitelcoproduct_additionalinformation"></a>

```json
{
  "overviewUri": "string",
  "termsUri": "string",
  "eligibilityUri": "string",
  "pricingUri": "string",
  "bundleUri": "string"
}

```

*Object that contains links to additional information on specific topics*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|overviewUri|[URIString](#common-field-types)|optional|A link to a general overview of the plan|
|termsUri|[URIString](#common-field-types)|optional|A link to terms and conditions for the plan|
|eligibilityUri|[URIString](#common-field-types)|optional|A link to detail on eligibility criteria for the plan|
|pricingUri|[URIString](#common-field-types)|optional|A link to detail on pricing for the plan|
|bundleUri|[URIString](#common-field-types)|optional|A link to detail on bundles that this plan can be a part of|

<h3 class="schema-toc" id="tocStelcoproductdetail_allof_meteringcharges">TelcoProductDetail_allOf_meteringCharges</h3>

<a id="schemacdr-telco-apitelcoproductdetail_allof_meteringcharges"></a>

```json
{
  "displayName": "string",
  "description": "string",
  "minimumValue": "string",
  "maximumValue": "string",
  "period": "string"
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|displayName|string|mandatory|Display name of the charge|
|description|string|optional|Description of the charge|
|minimumValue|[AmountString](#common-field-types)|mandatory|Minimum value of the charge if the charge is a range or the absolute value of the charge if no range is specified|
|maximumValue|[AmountString](#common-field-types)|optional|The upper limit of the charge if the charge could occur in a range|
|period|[ExternalRef](#common-field-types)|optional|The charges that occur on a schedule indicates the frequency. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)|

<h3 class="schema-toc" id="tocStelcoproductdetail_allof_features">TelcoProductDetail_allOf_features</h3>

<a id="schemacdr-telco-apitelcoproductdetail_allof_features"></a>

```json
{
  "displayName": "string",
  "description": "string",
  "category": "DATA"
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|displayName|string|mandatory|The display name of the feature|
|description|string|optional|The description of the feature|
|category|string|optional|The type of the feature|

#### Enumerated Values

|Property|Value|
|---|---|
|category|DATA|
|category|VOICE|
|category|MESSAGING|
|category|HANDSET|
|category|DEVICE|
|category|NETWORK|
|category|ENTERTAINMENT|
|category|SUBSCRIPTION|
|category|SOFTWARE|
|category|OTHER|

<h3 class="schema-toc" id="tocStelcoproductdetail_allof_bundles">TelcoProductDetail_allOf_bundles</h3>

<a id="schemacdr-telco-apitelcoproductdetail_allof_bundles"></a>

```json
{
  "displayName": "string",
  "description": "string",
  "bundleUri": "string",
  "features": [
    {
      "displayName": "string",
      "description": "string",
      "category": "DATA"
    }
  ]
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|displayName|string|mandatory|The display name of the product bundle|
|description|string|optional|The description of the product bundle|
|bundleUri|[URIString](#common-field-types)|optional|The URI of the product bundle|
|features|[[TelcoProductDetail_allOf_features](#schemacdr-telco-apitelcoproductdetail_allof_features)]|optional|Optional list of features of the bundle|

<h3 class="schema-toc" id="tocStelcoproductdetail_allof_features_1">TelcoProductDetail_allOf_features_1</h3>

<a id="schemacdr-telco-apitelcoproductdetail_allof_features_1"></a>

```json
{
  "displayName": "string",
  "description": "string"
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|displayName|string|mandatory|The display name of the feature|
|description|string|optional|The description of the feature|

<h3 class="schema-toc" id="tocStelcoproductdetail_allof_plans">TelcoProductDetail_allOf_plans</h3>

<a id="schemacdr-telco-apitelcoproductdetail_allof_plans"></a>

```json
{
  "displayName": "string",
  "description": "string",
  "planUri": "string",
  "features": [
    {
      "displayName": "string",
      "description": "string"
    }
  ]
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|displayName|string|mandatory|The display name of the product plan|
|description|string|optional|The display name of the product plan|
|planUri|[URIString](#common-field-types)|optional|The URI of the product plan|
|features|[[TelcoProductDetail_allOf_features_1](#schemacdr-telco-apitelcoproductdetail_allof_features_1)]|optional|Optional list of features of the plan|

<h3 class="schema-toc" id="tocStelcoproductdetail_allof_features_2">TelcoProductDetail_allOf_features_2</h3>

<a id="schemacdr-telco-apitelcoproductdetail_allof_features_2"></a>

```json
{
  "displayName": "string",
  "description": "string"
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|displayName|string|mandatory|The display name of the discount feature|
|description|string|optional|The description of the discount feature|

<h3 class="schema-toc" id="tocStelcoproductdetail_allof_discounts">TelcoProductDetail_allOf_discounts</h3>

<a id="schemacdr-telco-apitelcoproductdetail_allof_discounts"></a>

```json
{
  "displayName": "string",
  "description": "string",
  "discountUri": "string",
  "features": [
    {
      "displayName": "string",
      "description": "string"
    }
  ]
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|displayName|string|mandatory|The display name of the product plan|
|description|string|optional|The description name of the product plan|
|discountUri|[URIString](#common-field-types)|optional|The URI of the discount|
|features|[[TelcoProductDetail_allOf_features_2](#schemacdr-telco-apitelcoproductdetail_allof_features_2)]|optional|Optional list of features of the discount|

<h3 class="schema-toc" id="tocStelcoproductdetail_allof_features_3">TelcoProductDetail_allOf_features_3</h3>

<a id="schemacdr-telco-apitelcoproductdetail_allof_features_3"></a>

```json
{
  "displayName": "string",
  "description": "string"
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|displayName|string|mandatory|The display name of the incentive feature|
|description|string|optional|The description of the incentive feature|

<h3 class="schema-toc" id="tocStelcoproductdetail_allof_incentives">TelcoProductDetail_allOf_incentives</h3>

<a id="schemacdr-telco-apitelcoproductdetail_allof_incentives"></a>

```json
{
  "displayName": "string",
  "description": "string",
  "incentiveUri": "string",
  "features": [
    {
      "displayName": "string",
      "description": "string"
    }
  ]
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|displayName|string|mandatory|The display name of the incentive|
|description|string|optional|The description of the incentive|
|incentiveUri|[URIString](#common-field-types)|optional|The URI of the incentive|
|features|[[TelcoProductDetail_allOf_features_3](#schemacdr-telco-apitelcoproductdetail_allof_features_3)]|optional|Optional list of features of the incentive|

<h3 class="schema-toc" id="tocStelcoproductdetail_allof">TelcoProductDetail_allOf</h3>

<a id="schemacdr-telco-apitelcoproductdetail_allof"></a>

```json
{
  "meteringCharges": [
    {
      "displayName": "string",
      "description": "string",
      "minimumValue": "string",
      "maximumValue": "string",
      "period": "string"
    }
  ],
  "bundles": [
    {
      "displayName": "string",
      "description": "string",
      "bundleUri": "string",
      "features": [
        {
          "displayName": "string",
          "description": "string",
          "category": "DATA"
        }
      ]
    }
  ],
  "plans": [
    {
      "displayName": "string",
      "description": "string",
      "planUri": "string",
      "features": [
        {
          "displayName": "string",
          "description": "string"
        }
      ]
    }
  ],
  "discounts": [
    {
      "displayName": "string",
      "description": "string",
      "discountUri": "string",
      "features": [
        {
          "displayName": "string",
          "description": "string"
        }
      ]
    }
  ],
  "incentives": [
    {
      "displayName": "string",
      "description": "string",
      "incentiveUri": "string",
      "features": [
        {
          "displayName": "string",
          "description": "string"
        }
      ]
    }
  ]
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|meteringCharges|[[TelcoProductDetail_allOf_meteringCharges](#schemacdr-telco-apitelcoproductdetail_allof_meteringcharges)]|optional|Charges for metering included in the plan|
|bundles|[[TelcoProductDetail_allOf_bundles](#schemacdr-telco-apitelcoproductdetail_allof_bundles)]|optional|Bundles the product can be part of|
|plans|[[TelcoProductDetail_allOf_plans](#schemacdr-telco-apitelcoproductdetail_allof_plans)]|optional|Plans associated to the product|
|discounts|[[TelcoProductDetail_allOf_discounts](#schemacdr-telco-apitelcoproductdetail_allof_discounts)]|optional|Discounts associated to the product|
|incentives|[[TelcoProductDetail_allOf_incentives](#schemacdr-telco-apitelcoproductdetail_allof_incentives)]|optional|Incentives associated to the product|

<h3 class="schema-toc" id="tocStelcoaccountusage_services">TelcoAccountUsage_services</h3>

<a id="schemacdr-telco-apitelcoaccountusage_services"></a>

```json
{
  "service": {
    "serviceId": "string",
    "displayName": "string",
    "phoneNumber": "string",
    "startDate": "string",
    "endDate": "string",
    "usage": {
      "data": {
        "upload": 0,
        "download": 0,
        "sessions": 0,
        "amount": "string",
        "roaming": {
          "download": 0,
          "amount": "string"
        }
      },
      "voice": {
        "national": {
          "duration": "string",
          "number": 0,
          "amount": "string"
        },
        "international": {
          "duration": "string",
          "number": 0,
          "amount": "string"
        },
        "roaming": {
          "duration": "string",
          "number": 0,
          "amount": "string"
        }
      },
      "messaging": {
        "sms": {
          "national": 0,
          "international": 0,
          "roaming": 0,
          "amount": "string"
        },
        "mms": {
          "national": 0,
          "international": 0,
          "roaming": 0,
          "amount": "string"
        }
      }
    }
  }
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|service|[TelcoServiceUsage](#schemacdr-telco-apitelcoserviceusage)|mandatory|none|

<h3 class="schema-toc" id="tocStelcoaccount_allof_planoverview">TelcoAccount_allOf_planOverview</h3>

<a id="schemacdr-telco-apitelcoaccount_allof_planoverview"></a>

```json
{
  "displayName": "string",
  "startDate": "string",
  "endDate": "string"
}

```

*Mandatory if openStatus is OPEN*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|displayName|string|optional|The name of the plan if one exists|
|startDate|[DateString](#common-field-types)|mandatory|The start date of the applicability of this plan|
|endDate|[DateString](#common-field-types)|optional|The end date of the applicability of this plan|

<h3 class="schema-toc" id="tocStelcoaccount_allof_plans">TelcoAccount_allOf_plans</h3>

<a id="schemacdr-telco-apitelcoaccount_allof_plans"></a>

```json
{
  "nickname": "string",
  "type": "MOBILE",
  "serviceIds": [
    "string"
  ],
  "planOverview": {
    "displayName": "string",
    "startDate": "string",
    "endDate": "string"
  }
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|nickname|string|optional|Optional display name for the plan provided by the customer to help differentiate multiple plans|
|type|string|optional|The type of the plan|
|serviceIds|[string]|mandatory|An array of serviceId’s representing a unique service identifier such as a mobile (MSISDN) or internet service (e.g NBN or ADSL) If there are no serviceIds allocated to this plan then an empty array would be expected|
|planOverview|[TelcoAccount_allOf_planOverview](#schemacdr-telco-apitelcoaccount_allof_planoverview)|conditional|Mandatory if openStatus is OPEN|

#### Enumerated Values

|Property|Value|
|---|---|
|type|MOBILE|
|type|BROADBAND|

<h3 class="schema-toc" id="tocStelcoaccount_allof">TelcoAccount_allOf</h3>

<a id="schemacdr-telco-apitelcoaccount_allof"></a>

```json
{
  "plans": [
    {
      "nickname": "string",
      "type": "MOBILE",
      "serviceIds": [
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

*The array of plans containing services and associated plan details*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|plans|[[TelcoAccount_allOf_plans](#schemacdr-telco-apitelcoaccount_allof_plans)]|mandatory|The array of plans containing service and associated plan details|

<h3 class="schema-toc" id="tocStelcoaccountdetail_allof_plandetail">TelcoAccountDetail_allOf_planDetail</h3>

<a id="schemacdr-telco-apitelcoaccountdetail_allof_plandetail"></a>

```json
{
  "charges": [
    {
      "displayName": "string",
      "description": "string",
      "minimumValue": "string",
      "maximumValue": "string",
      "period": "string"
    }
  ]
}

```

*Detail on the plan applicable to this account. Mandatory if openStatus is OPEN*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|charges|[[TelcoProductDetail_allOf_meteringCharges](#schemacdr-telco-apitelcoproductdetail_allof_meteringcharges)]|optional|Charges for metering included in the plan|

<h3 class="schema-toc" id="tocStelcoaccountdetail_allof_authorisedcontacts">TelcoAccountDetail_allOf_authorisedContacts</h3>

<a id="schemacdr-telco-apitelcoaccountdetail_allof_authorisedcontacts"></a>

```json
{
  "firstName": "string",
  "lastName": "string",
  "middleNames": [
    "string"
  ],
  "prefix": "string",
  "suffix": "string"
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|firstName|string|optional|For people with single names this field need not be present. The single name should be in the lastName field|
|lastName|string|mandatory|For people with single names the single name should be in this field|
|middleNames|[string]|optional|Field is mandatory but array may be empty|
|prefix|string|optional|Also known as title or salutation. The prefix to the name (e.g. Mr, Mrs, Ms, Miss, Sir, etc)|
|suffix|string|optional|Used for a trailing suffix to the name (e.g. Jr)|

<h3 class="schema-toc" id="tocStelcoaccountdetail_allof_plans">TelcoAccountDetail_allOf_plans</h3>

<a id="schemacdr-telco-apitelcoaccountdetail_allof_plans"></a>

```json
{
  "nickname": "string",
  "serviceIds": [
    "string"
  ],
  "planOverview": {
    "displayName": "string",
    "startDate": "string",
    "endDate": "string"
  },
  "planDetail": {
    "charges": [
      {
        "displayName": "string",
        "description": "string",
        "minimumValue": "string",
        "maximumValue": "string",
        "period": "string"
      }
    ]
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

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|nickname|string|optional|Optional display name for the plan provided by the customer to help differentiate multiple plans|
|serviceIds|[string]|mandatory|An array of serviceId’s representing a unique service identifier such as a mobile (MSISDN) or internet service (e.g NBN or ADSL) If there are no serviceIds allocated to this plan then an empty array would be expected|
|planOverview|[TelcoAccount_allOf_planOverview](#schemacdr-telco-apitelcoaccount_allof_planoverview)|conditional|Mandatory if openStatus is OPEN|
|planDetail|[TelcoAccountDetail_allOf_planDetail](#schemacdr-telco-apitelcoaccountdetail_allof_plandetail)|conditional|Detail on the plan applicable to this account. Mandatory if openStatus is OPEN|
|authorisedContacts|[[TelcoAccountDetail_allOf_authorisedContacts](#schemacdr-telco-apitelcoaccountdetail_allof_authorisedcontacts)]|optional|An array of additional contacts that are authorised to act on this account|

<h3 class="schema-toc" id="tocStelcoaccountdetail_allof">TelcoAccountDetail_allOf</h3>

<a id="schemacdr-telco-apitelcoaccountdetail_allof"></a>

```json
{
  "plans": [
    {
      "nickname": "string",
      "serviceIds": [
        "string"
      ],
      "planOverview": {
        "displayName": "string",
        "startDate": "string",
        "endDate": "string"
      },
      "planDetail": {
        "charges": [
          {
            "displayName": "string",
            "description": "string",
            "minimumValue": "string",
            "maximumValue": "string",
            "period": "string"
          }
        ]
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

*The array of plans containing services and associated plan details*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|plans|[[TelcoAccountDetail_allOf_plans](#schemacdr-telco-apitelcoaccountdetail_allof_plans)]|mandatory|The array of plans containing services and associated plan details|

<h3 class="schema-toc" id="tocStelcopaymentschedule_carddebit">TelcoPaymentSchedule_cardDebit</h3>

<a id="schemacdr-telco-apitelcopaymentschedule_carddebit"></a>

```json
{
  "cardScheme": "VISA",
  "paymentFrequency": "string",
  "calculationType": "STATIC"
}

```

*Represents a regular credit card payment schedule. Mandatory if paymentScheduleUType is set to cardDebit*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|cardScheme|string|mandatory|The type of credit card held on file|
|paymentFrequency|[ExternalRef](#common-field-types)|mandatory|The frequency that payments will occur.  Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)|
|calculationType|string|mandatory|The mechanism by which the payment amount is calculated.  Explanation of values are as follows:<br/><ul><li>**STATIC** - Indicates a consistent, static amount, per payment</li><li>**BALANCE** - Indicates that the outstanding balance for the account is paid per period</li><li>**CALCULATED** - Indicates that the payment amount is variable and calculated using a pre-defined algorithm</li></ul>|

#### Enumerated Values

|Property|Value|
|---|---|
|cardScheme|VISA|
|cardScheme|MASTERCARD|
|cardScheme|AMEX|
|cardScheme|DINERS|
|cardScheme|OTHER|
|cardScheme|UNKNOWN|
|calculationType|STATIC|
|calculationType|BALANCE|
|calculationType|CALCULATED|

<h3 class="schema-toc" id="tocStelcopaymentschedule_directdebit">TelcoPaymentSchedule_directDebit</h3>

<a id="schemacdr-telco-apitelcopaymentschedule_directdebit"></a>

```json
{
  "isTokenised": true,
  "bsb": "string",
  "accountNumber": "string",
  "paymentFrequency": "string",
  "calculationType": "STATIC"
}

```

*Represents a regular direct debit from a specified bank account. Mandatory if paymentScheduleUType is set to directDebit*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|isTokenised|boolean|optional|Flag indicating that the account details are tokenised and cannot be shared.  False if absent|
|bsb|string|conditional|The unmasked BSB for the account to be debited. Is expected to be formatted as digits only with leading zeros included and no punctuation or spaces.  Is required if isTokenised is absent or false|
|accountNumber|string|conditional|The unmasked account number for the account to be debited. Is expected to be formatted as digits only with leading zeros included and no punctuation or spaces.  Is required if isTokenised is absent or false|
|paymentFrequency|[ExternalRef](#common-field-types)|mandatory|The frequency that payments will occur.  Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)|
|calculationType|string|mandatory|The mechanism by which the payment amount is calculated.  Explanation of values are as follows:<br/><ul><li>**STATIC** - Indicates a consistent, static amount, per payment</li><li>**BALANCE** - Indicates that the outstanding balance for the account is paid per period</li><li>**CALCULATED** - Indicates that the payment amount is variable and calculated using a pre-defined algorithm</li></ul>|

#### Enumerated Values

|Property|Value|
|---|---|
|calculationType|STATIC|
|calculationType|BALANCE|
|calculationType|CALCULATED|

<h3 class="schema-toc" id="tocStelcopaymentschedule_digitalwallet">TelcoPaymentSchedule_digitalWallet</h3>

<a id="schemacdr-telco-apitelcopaymentschedule_digitalwallet"></a>

```json
{
  "name": "string",
  "identifier": "string",
  "type": "EMAIL",
  "provider": "PAYPAL_AU",
  "paymentFrequency": "string",
  "calculationType": "STATIC"
}

```

*Represents a regular payment from a digital wallet. Mandatory if paymentScheduleUType is set to digitalWallet*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|name|string|mandatory|The name assigned to the digital wallet by the owner of the wallet, else the display name provided by the digital wallet provider|
|identifier|string|mandatory|The identifier of the digital wallet (dependent on type)|
|type|string|mandatory|The type of the digital wallet identifier|
|provider|string|mandatory|The provider of the digital wallet|
|paymentFrequency|[ExternalRef](#common-field-types)|mandatory|The frequency that payments will occur.  Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)|
|calculationType|string|mandatory|The mechanism by which the payment amount is calculated.  Explanation of values are as follows:<br/><ul><li>**STATIC** - Indicates a consistent, static amount, per payment</li><li>**BALANCE** - Indicates that the outstanding balance for the account is paid per period</li><li>**CALCULATED** - Indicates that the payment amount is variable and calculated using a pre-defined algorithm</li></ul>|

#### Enumerated Values

|Property|Value|
|---|---|
|type|EMAIL|
|type|CONTACT_NAME|
|type|TELEPHONE|
|provider|PAYPAL_AU|
|provider|OTHER|
|calculationType|STATIC|
|calculationType|BALANCE|
|calculationType|CALCULATED|

<h3 class="schema-toc" id="tocStelcopaymentschedule_manualpayment">TelcoPaymentSchedule_manualPayment</h3>

<a id="schemacdr-telco-apitelcopaymentschedule_manualpayment"></a>

```json
{
  "billFrequency": "string"
}

```

*Represents a manual payment schedule where the customer pays in response to a delivered statement. Mandatory if paymentScheduleUType is set to manualPayment*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|billFrequency|[ExternalRef](#common-field-types)|mandatory|The frequency with which a bill will be issued.  Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)|

<h3 class="schema-toc" id="tocStelcoinvoice_period">TelcoInvoice_period</h3>

<a id="schemacdr-telco-apitelcoinvoice_period"></a>

```json
{
  "startDate": "string",
  "endDate": "string"
}

```

*Object containing the start and end date for the period covered by the invoice. Mandatory if any usage based charges are included in the invoice*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|startDate|[DateString](#common-field-types)|mandatory|The start date of the period covered by this invoice|
|endDate|[DateString](#common-field-types)|mandatory|The end date of the period covered by this invoice|

<h3 class="schema-toc" id="tocStelcoinvoice_payontimediscount">TelcoInvoice_payOnTimeDiscount</h3>

<a id="schemacdr-telco-apitelcoinvoice_payontimediscount"></a>

```json
{
  "discountAmount": "string",
  "gstAmount": "string",
  "date": "string"
}

```

*A discount for on time payment*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|discountAmount|[AmountString](#common-field-types)|mandatory|The amount that will be discounted if the invoice is paid by the date specified|
|gstAmount|[AmountString](#common-field-types)|optional|The GST amount that will be discounted if the invoice is paid by the date specified.  If absent then zero is assumed|
|date|[DateString](#common-field-types)|mandatory|The date by which the invoice must be paid to receive the pay on time discount|

<h3 class="schema-toc" id="tocStelcousage_data_roaming">TelcoUsage_data_roaming</h3>

<a id="schemacdr-telco-apitelcousage_data_roaming"></a>

```json
{
  "download": 0,
  "amount": "string"
}

```

*Roaming Data Usage*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|download|number|conditional|Amount of data used while roaming in megabytes (MB)|
|amount|[AmountString](#common-field-types)|conditional|Amount value of data roaming charges|

<h3 class="schema-toc" id="tocStelcousage_data">TelcoUsage_data</h3>

<a id="schemacdr-telco-apitelcousage_data"></a>

```json
{
  "upload": 0,
  "download": 0,
  "sessions": 0,
  "amount": "string",
  "roaming": {
    "download": 0,
    "amount": "string"
  }
}

```

*Summary of data usage*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|upload|number|mandatory|Amount of data uploaded in megabytes (MB)|
|download|number|mandatory|Amount of data downloaded in megabytes (MB)|
|sessions|number|optional|Number of data sessions|
|amount|[AmountString](#common-field-types)|mandatory|Cost amount of data usage|
|roaming|[TelcoUsage_data_roaming](#schemacdr-telco-apitelcousage_data_roaming)|mandatory|Roaming Data Usage|

<h3 class="schema-toc" id="tocStelcousage_voice_national">TelcoUsage_voice_national</h3>

<a id="schemacdr-telco-apitelcousage_voice_national"></a>

```json
{
  "duration": "string",
  "number": 0,
  "amount": "string"
}

```

*National voice calls*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|duration|[TimeString](#common-field-types)|mandatory|Total duration (hours, minutes, and seconds) of national voice calls. Not limited to 24hrs|
|number|number|mandatory|Number of national voice calls|
|amount|[AmountString](#common-field-types)|mandatory|Cost amount of national calls|

<h3 class="schema-toc" id="tocStelcousage_voice_international">TelcoUsage_voice_international</h3>

<a id="schemacdr-telco-apitelcousage_voice_international"></a>

```json
{
  "duration": "string",
  "number": 0,
  "amount": "string"
}

```

*International voice calls*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|duration|[TimeString](#common-field-types)|mandatory|Total duration (hours, minutes, and seconds) of international voice calls. Not limited to 24hrs|
|number|number|mandatory|Number of international voice calls|
|amount|[AmountString](#common-field-types)|mandatory|Cost amount of international voice calls|

<h3 class="schema-toc" id="tocStelcousage_voice_roaming">TelcoUsage_voice_roaming</h3>

<a id="schemacdr-telco-apitelcousage_voice_roaming"></a>

```json
{
  "duration": "string",
  "number": 0,
  "amount": "string"
}

```

*Roaming voice calls*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|duration|[TimeString](#common-field-types)|mandatory|Total duration (hours, minutes, and seconds) of roaming voice calls. Not limited to 24hrs|
|number|number|mandatory|Number of roaming voice calls|
|amount|[AmountString](#common-field-types)|mandatory|Cost amount of roaming voice calls|

<h3 class="schema-toc" id="tocStelcousage_voice">TelcoUsage_voice</h3>

<a id="schemacdr-telco-apitelcousage_voice"></a>

```json
{
  "national": {
    "duration": "string",
    "number": 0,
    "amount": "string"
  },
  "international": {
    "duration": "string",
    "number": 0,
    "amount": "string"
  },
  "roaming": {
    "duration": "string",
    "number": 0,
    "amount": "string"
  }
}

```

*Summary of voice calls. Required if voice calls are included in product plan*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|national|[TelcoUsage_voice_national](#schemacdr-telco-apitelcousage_voice_national)|mandatory|National voice calls|
|international|[TelcoUsage_voice_international](#schemacdr-telco-apitelcousage_voice_international)|mandatory|International voice calls|
|roaming|[TelcoUsage_voice_roaming](#schemacdr-telco-apitelcousage_voice_roaming)|mandatory|Roaming voice calls|

<h3 class="schema-toc" id="tocStelcousage_messaging_sms">TelcoUsage_messaging_sms</h3>

<a id="schemacdr-telco-apitelcousage_messaging_sms"></a>

```json
{
  "national": 0,
  "international": 0,
  "roaming": 0,
  "amount": "string"
}

```

*Summary of SMS usage*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|national|number|mandatory|Number of national SMS messages sent. Including premium SMS services|
|international|number|mandatory|Number of international SMS messages sent. Including premium SMS services|
|roaming|number|mandatory|Number of roaming SMS messages sent. Including premium SMS services|
|amount|[AmountString](#common-field-types)|mandatory|Cost amount of SMS messages. Including premium SMS services|

<h3 class="schema-toc" id="tocStelcousage_messaging_mms">TelcoUsage_messaging_mms</h3>

<a id="schemacdr-telco-apitelcousage_messaging_mms"></a>

```json
{
  "national": 0,
  "international": 0,
  "roaming": 0,
  "amount": "string"
}

```

*Summary of MMS usage*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|national|number|mandatory|Number of national MMS messages sent|
|international|number|mandatory|ber of international MMS messages sent|
|roaming|number|mandatory|Number of roaming SMS messages sent. Including premium SMS services|
|amount|[AmountString](#common-field-types)|mandatory|Cost amount of MMS messages|

<h3 class="schema-toc" id="tocStelcousage_messaging">TelcoUsage_messaging</h3>

<a id="schemacdr-telco-apitelcousage_messaging"></a>

```json
{
  "sms": {
    "national": 0,
    "international": 0,
    "roaming": 0,
    "amount": "string"
  },
  "mms": {
    "national": 0,
    "international": 0,
    "roaming": 0,
    "amount": "string"
  }
}

```

*Summary of messaging. Required if messaging services is included in the product plan*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|sms|[TelcoUsage_messaging_sms](#schemacdr-telco-apitelcousage_messaging_sms)|mandatory|Summary of SMS usage|
|mms|[TelcoUsage_messaging_mms](#schemacdr-telco-apitelcousage_messaging_mms)|mandatory|Summary of MMS usage|

<h3 class="schema-toc" id="tocStelcoinvoiceaccountcharges_othercharges">TelcoInvoiceAccountCharges_otherCharges</h3>

<a id="schemacdr-telco-apitelcoinvoiceaccountcharges_othercharges"></a>

```json
{
  "amount": "string",
  "description": "string",
  "type": "SERVICE"
}

```

*Optional array of charges that may be part of the invoice (for example services fees) (exclusive of GST)*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|amount|[AmountString](#common-field-types)|mandatory|The aggregate total of charges for this item (exclusive of GST)|
|description|[AmountString](#common-field-types)|mandatory|A free text description of the charge|
|type|string|optional|A free text description of the charge|

#### Enumerated Values

|Property|Value|
|---|---|
|type|SERVICE|
|type|EQUIPMENT|
|type|NETWORK|
|type|HANDSET|
|type|DEVICE|
|type|ENTERTAINMENT|
|type|SUBSCRIPTION|
|type|SOFTWARE|
|type|OTHER|

<h3 class="schema-toc" id="tocStelcobillingaccounttransaction_adjustments">TelcoBillingAccountTransaction_adjustments</h3>

<a id="schemacdr-telco-apitelcobillingaccounttransaction_adjustments"></a>

```json
{
  "amount": "string",
  "description": "string"
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|amount|[AmountString](#common-field-types)|mandatory|The amount of the adjustment|
|description|string|mandatory|A free text description of the adjustment|

<h3 class="schema-toc" id="tocStelcoservicebalance_balances_data_roaming">TelcoServiceBalance_balances_data_roaming</h3>

<a id="schemacdr-telco-apitelcoservicebalance_balances_data_roaming"></a>

```json
{
  "download": 0,
  "amount": "string"
}

```

*Balance of data roaming charges. Required unless planType is UNSUPPORTED*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|download|number|conditional|Amount of data used overseas in megabytes (MB). Required unless planType is UNSUPPORTED|
|amount|[AmountString](#common-field-types)|conditional|Amount value of data roaming charges. Required unless planType is UNSUPPORTED|

<h3 class="schema-toc" id="tocStelcoservicebalance_balances_data">TelcoServiceBalance_balances_data</h3>

<a id="schemacdr-telco-apitelcoservicebalance_balances_data"></a>

```json
{
  "planType": "METERED",
  "description": "string",
  "upload": 0,
  "download": 0,
  "amount": "string",
  "roaming": {
    "download": 0,
    "amount": "string"
  }
}

```

*Summary of data balances*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|planType|[TelcoPlanType](#schemacdr-telco-apitelcoplantype)|optional|Plan type for this feature. METERED: A plan is charged by usage for the feature. UNMETERED: A plan with no limits for a feature. LIMITED: Where plan limit inclusions apply. UNSUPPORTED: Feature is not supported|
|description|string|conditional|An overview of plan limits. Required unless planType is UNSUPPORTED|
|upload|number|optional|Remaining upload data in megabytes (MB). Required unless planType is UNSUPPORTED or UNMETERED|
|download|number|optional|Remaining download data in megabytes (MB). Required unless planType is UNSUPPORTED or UNMETERED|
|amount|[AmountString](#common-field-types)|conditional|Remaining value amount of data available. Required unless planType is UNSUPPORTED or UNMETERED|
|roaming|[TelcoServiceBalance_balances_data_roaming](#schemacdr-telco-apitelcoservicebalance_balances_data_roaming)|optional|Balance of data roaming charges. Required unless planType is UNSUPPORTED|

<h3 class="schema-toc" id="tocStelcoservicebalance_balances_voice_national">TelcoServiceBalance_balances_voice_national</h3>

<a id="schemacdr-telco-apitelcoservicebalance_balances_voice_national"></a>

```json
{
  "description": "string",
  "duration": "string",
  "number": 0,
  "amount": "string"
}

```

*National voice calls*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|description|string|conditional|An overview of plan limits. Required unless planType is UNSUPPORTED|
|duration|[TimeString](#common-field-types)|conditional|Total duration (hours, minutes, and seconds) of national voice calls. Not limited to 24hrs. Required unless planType is UNSUPPORTED or UNMETERED|
|number|number|conditional|Number of national voice calls. Required unless planType is UNSUPPORTED or UNMETERED|
|amount|[AmountString](#common-field-types)|conditional|Amount balance of national calls. Required unless planType is UNSUPPORTED or UNMETERED|

<h3 class="schema-toc" id="tocStelcoservicebalance_balances_voice_international">TelcoServiceBalance_balances_voice_international</h3>

<a id="schemacdr-telco-apitelcoservicebalance_balances_voice_international"></a>

```json
{
  "description": "string",
  "duration": "string",
  "number": 0,
  "amount": "string"
}

```

*National voice calls*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|description|string|conditional|An overview of plan limits. Required unless planType is UNSUPPORTED|
|duration|[TimeString](#common-field-types)|optional|Total duration (hours, minutes, and seconds) of international voice calls available. Not limited to 24hrs. Required unless planType is UNSUPPORTED or UNMETERED|
|number|number|optional|Number of international voice calls available Required unless planType is UNSUPPORTED or UNMETERED|
|amount|[AmountString](#common-field-types)|conditional|Amount value of international calls available. Required unless planType is UNSUPPORTED or UNMETERED|

<h3 class="schema-toc" id="tocStelcoservicebalance_balances_voice">TelcoServiceBalance_balances_voice</h3>

<a id="schemacdr-telco-apitelcoservicebalance_balances_voice"></a>

```json
{
  "planType": "METERED",
  "national": {
    "description": "string",
    "duration": "string",
    "number": 0,
    "amount": "string"
  },
  "international": {
    "description": "string",
    "duration": "string",
    "number": 0,
    "amount": "string"
  }
}

```

*Summary of voice balances. Required if voice calls are included in product plan*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|planType|[TelcoPlanType](#schemacdr-telco-apitelcoplantype)|optional|Plan type for this feature. METERED: A plan is charged by usage for the feature. UNMETERED: A plan with no limits for a feature. LIMITED: Where plan limit inclusions apply. UNSUPPORTED: Feature is not supported|
|national|[TelcoServiceBalance_balances_voice_national](#schemacdr-telco-apitelcoservicebalance_balances_voice_national)|optional|National voice calls|
|international|[TelcoServiceBalance_balances_voice_international](#schemacdr-telco-apitelcoservicebalance_balances_voice_international)|optional|National voice calls|

<h3 class="schema-toc" id="tocStelcoservicebalance_balances_messaging_sms">TelcoServiceBalance_balances_messaging_sms</h3>

<a id="schemacdr-telco-apitelcoservicebalance_balances_messaging_sms"></a>

```json
{
  "description": "string",
  "national": 0,
  "international": 0,
  "amount": "string"
}

```

*Required if the service plan supports SMS messaging*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|description|string|conditional|An overview of plan limits. Required unless planType is UNSUPPORTED|
|national|number|conditional|Number of national SMS messages remaining. Required unless planType is UNSUPPORTED or UNMETERED|
|international|number|conditional|Number of international SMS messages remaining. Required unless planType is UNSUPPORTED or UNMETERED|
|amount|[AmountString](#common-field-types)|conditional|Amount value of SMS messages remaining. Required unless planType is UNSUPPORTED or UNMETERED|

<h3 class="schema-toc" id="tocStelcoservicebalance_balances_messaging_mms">TelcoServiceBalance_balances_messaging_mms</h3>

<a id="schemacdr-telco-apitelcoservicebalance_balances_messaging_mms"></a>

```json
{
  "description": "string",
  "national": 0,
  "international": 0,
  "amount": "string"
}

```

*Summary of MMS usage*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|description|string|conditional|An overview of plan limits. Required unless planType is UNSUPPORTED|
|national|number|conditional|Number of national MMS messages remaining. Required unless planType is UNSUPPORTED or UNMETERED|
|international|number|conditional|Number of international MMS messages remaining. Required unless planType is UNSUPPORTED or UNMETERED|
|amount|[AmountString](#common-field-types)|conditional|Amount value of MMS messages remaining. Required unless planType is UNSUPPORTED or UNMETERED|

<h3 class="schema-toc" id="tocStelcoservicebalance_balances_messaging">TelcoServiceBalance_balances_messaging</h3>

<a id="schemacdr-telco-apitelcoservicebalance_balances_messaging"></a>

```json
{
  "planType": "METERED",
  "sms": {
    "description": "string",
    "national": 0,
    "international": 0,
    "amount": "string"
  },
  "mms": {
    "description": "string",
    "national": 0,
    "international": 0,
    "amount": "string"
  }
}

```

*Summary of messaging. Required if messaging services is included in the product plan*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|planType|[TelcoPlanType](#schemacdr-telco-apitelcoplantype)|optional|Plan type for this feature. METERED: A plan is charged by usage for the feature. UNMETERED: A plan with no limits for a feature. LIMITED: Where plan limit inclusions apply. UNSUPPORTED: Feature is not supported|
|sms|[TelcoServiceBalance_balances_messaging_sms](#schemacdr-telco-apitelcoservicebalance_balances_messaging_sms)|mandatory|Required if the service plan supports SMS messaging|
|mms|[TelcoServiceBalance_balances_messaging_mms](#schemacdr-telco-apitelcoservicebalance_balances_messaging_mms)|mandatory|Summary of MMS usage|

<h3 class="schema-toc" id="tocStelcoservicebalance_balances">TelcoServiceBalance_balances</h3>

<a id="schemacdr-telco-apitelcoservicebalance_balances"></a>

```json
{
  "data": {
    "planType": "METERED",
    "description": "string",
    "upload": 0,
    "download": 0,
    "amount": "string",
    "roaming": {
      "download": 0,
      "amount": "string"
    }
  },
  "voice": {
    "planType": "METERED",
    "national": {
      "description": "string",
      "duration": "string",
      "number": 0,
      "amount": "string"
    },
    "international": {
      "description": "string",
      "duration": "string",
      "number": 0,
      "amount": "string"
    }
  },
  "messaging": {
    "planType": "METERED",
    "sms": {
      "description": "string",
      "national": 0,
      "international": 0,
      "amount": "string"
    },
    "mms": {
      "description": "string",
      "national": 0,
      "international": 0,
      "amount": "string"
    }
  }
}

```

*The serviceId representing a unique service identifier such as a mobile (MSISDN) or internet service (e.g NBN or ADSL)*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|data|[TelcoServiceBalance_balances_data](#schemacdr-telco-apitelcoservicebalance_balances_data)|optional|Summary of data balances|
|voice|[TelcoServiceBalance_balances_voice](#schemacdr-telco-apitelcoservicebalance_balances_voice)|optional|Summary of voice balances. Required if voice calls are included in product plan|
|messaging|[TelcoServiceBalance_balances_messaging](#schemacdr-telco-apitelcoservicebalance_balances_messaging)|optional|Summary of messaging. Required if messaging services is included in the product plan|

