---
title: Get Billing For Specific Accounts v1

#language_tabs: # must be one of https://git.io/vQNgJ
#  - shell
#  - javascript

toc_footers:
  - <a href='../../index.html'>Consumer Data Standards</a>

search: false
---

# Get Billing For Specific Accounts V1
This page documents version 1 of the Get Billing For Specific Accounts end point. 

* Data Holder **MUST** implement Get Billing For Specific Accounts v2 by **November 1st 2023**.

This version is to be ceased to be called by data recipients by **September 9th 2024** and can be decommissioned by data holders as of that date.


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


<h2 id="tocSenergybillinglistresponse">EnergyBillingListResponse</h2>

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

<h2 id="tocSenergybillingtransaction">EnergyBillingTransaction</h2>

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

<h2 id="tocSenergybillingusagetransaction">EnergyBillingUsageTransaction</h2>

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

<h2 id="tocSenergybillingdemandtransaction">EnergyBillingDemandTransaction</h2>

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

<h2 id="tocSenergybillingonceofftransaction">EnergyBillingOnceOffTransaction</h2>

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

<h2 id="tocSenergybillingothertransaction">EnergyBillingOtherTransaction</h2>

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

<h2 id="tocSenergybillingpaymenttransaction">EnergyBillingPaymentTransaction</h2>

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