

## Get Accounts

<a id="opIdlistAccounts"></a>

> Code samples

```http
GET https://data.holder.com.au/cds-au/v1/banking/accounts HTTP/1.1
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
  url: 'https://data.holder.com.au/cds-au/v1/banking/accounts',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`GET /banking/accounts`

Obtain a list of accounts

###Endpoint Version
|   |  |
|---|--|
|Version|**1**

<h3 id="get-accounts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|product-category|query|string|optional|Used to filter results on the productCategory field applicable to accounts. Any one of the valid values for this field can be supplied. If absent then all accounts returned.|
|open-status|query|string|optional|Used to filter results according to open/closed status. Values can be OPEN, CLOSED or ALL. If absent then ALL is assumed|
|is-owned|query|[Boolean](#common-field-types)|optional|Filters accounts based on whether they are owned by the authorised customer.  True for owned accounts, false for unowned accounts and absent for all accounts|
|page|query|[PositiveInteger](#common-field-types)|optional|Page of results to request (standard pagination)|
|page-size|query|[PositiveInteger](#common-field-types)|optional|Page size to request. Default is 25 (standard pagination)|
|x-v|header|string|mandatory|Version of the API end point requested by the client. Must be set to a positive integer. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If the value of [x-min-v](#request-headers) is equal to or higher than the value of [x-v](#request-headers) then the [x-min-v](#request-headers) header should be treated as absent. If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable. See [HTTP Headers](#request-headers)|
|x-min-v|header|string|optional|Minimum version of the API end point requested by the client. Must be set to a positive integer if provided. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable.|
|x-fapi-interaction-id|header|string|optional|An [RFC4122](https://tools.ietf.org/html/rfc4122) UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a [RFC4122] UUID value is required to be provided in the response header to track the interaction.|
|x-fapi-auth-date|header|string|optional|The time when the customer last logged in to the Data Recipient Software Product. Required for all resource calls (customer present and unattended). Not to be included for unauthenticated calls.|
|x-fapi-customer-ip-address|header|string|optional|The customer's original IP address if the customer is currently logged in to the Data Recipient Software Product. The presence of this header indicates that the API is being called in a customer present context. Not to be included for unauthenticated calls.|
|x-cds-client-headers|header|[Base64](#common-field-types)|optional|The customer's original standard http headers [Base64](#common-field-types) encoded, including the original User Agent header, if the customer is currently logged in to the Data Recipient Software Product. Mandatory for customer present calls.  Not required for unattended or unauthenticated calls.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|product-category|BUSINESS_LOANS|
|product-category|CRED_AND_CHRG_CARDS|
|product-category|LEASES|
|product-category|MARGIN_LOANS|
|product-category|OVERDRAFTS|
|product-category|PERS_LOANS|
|product-category|REGULATED_TRUST_ACCOUNTS|
|product-category|RESIDENTIAL_MORTGAGES|
|product-category|TERM_DEPOSITS|
|product-category|TRADE_FINANCE|
|product-category|TRANS_AND_SAVINGS_ACCOUNTS|
|product-category|TRAVEL_CARDS|
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
        "creationDate": "string",
        "displayName": "string",
        "nickname": "string",
        "openStatus": "CLOSED",
        "isOwned": true,
        "maskedNumber": "string",
        "productCategory": "BUSINESS_LOANS",
        "productName": "string"
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
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[ResponseBankingAccountList](#schemacdr-banking-apiresponsebankingaccountlist)|
|4xx|[**Client Error**](https://tools.ietf.org/html/rfc7231#section-6.5)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Invalid Page Size](#error-400-field-invalid-page-size)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li><li>[422 - Invalid Page](#error-422-field-invalid-page)</li></ul>|[ResponseErrorListV2](#schemacdr-banking-apiresponseerrorlistv2)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-v|string||The [version](#response-headers) of the API end point that the data holder has responded with.|
|200|x-fapi-interaction-id|string||An [RFC4122](https://tools.ietf.org/html/rfc4122) UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a [RFC4122] UUID value is required to be provided in the response header to track the interaction.|
|4xx|x-fapi-interaction-id|string||An [RFC4122](https://tools.ietf.org/html/rfc4122) UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a [RFC4122] UUID value is required to be provided in the response header to track the interaction.|

  
    
      <aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
<a href="#authorisation-scopes">bank:accounts.basic:read</a>
</aside>

    
  

## Get Bulk Balances

<a id="opIdlistBalancesBulk"></a>

> Code samples

```http
GET https://data.holder.com.au/cds-au/v1/banking/accounts/balances HTTP/1.1
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
  url: 'https://data.holder.com.au/cds-au/v1/banking/accounts/balances',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`GET /banking/accounts/balances`

Obtain balances for multiple, filtered accounts

###Endpoint Version
|   |  |
|---|--|
|Version|**1**

<h3 id="get-bulk-balances-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|product-category|query|string|optional|Used to filter results on the productCategory field applicable to accounts. Any one of the valid values for this field can be supplied. If absent then all accounts returned.|
|open-status|query|string|optional|Used to filter results according to open/closed status. Values can be OPEN, CLOSED or ALL. If absent then ALL is assumed|
|is-owned|query|[Boolean](#common-field-types)|optional|Filters accounts based on whether they are owned by the authorised customer.  True for owned accounts, false for unowned accounts and absent for all accounts|
|page|query|[PositiveInteger](#common-field-types)|optional|Page of results to request (standard pagination)|
|page-size|query|[PositiveInteger](#common-field-types)|optional|Page size to request. Default is 25 (standard pagination)|
|x-v|header|string|mandatory|Version of the API end point requested by the client. Must be set to a positive integer. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If the value of [x-min-v](#request-headers) is equal to or higher than the value of [x-v](#request-headers) then the [x-min-v](#request-headers) header should be treated as absent. If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable. See [HTTP Headers](#request-headers)|
|x-min-v|header|string|optional|Minimum version of the API end point requested by the client. Must be set to a positive integer if provided. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable.|
|x-fapi-interaction-id|header|string|optional|An [RFC4122](https://tools.ietf.org/html/rfc4122) UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a [RFC4122] UUID value is required to be provided in the response header to track the interaction.|
|x-fapi-auth-date|header|string|optional|The time when the customer last logged in to the Data Recipient Software Product. Required for all resource calls (customer present and unattended). Not to be included for unauthenticated calls.|
|x-fapi-customer-ip-address|header|string|optional|The customer's original IP address if the customer is currently logged in to the Data Recipient Software Product. The presence of this header indicates that the API is being called in a customer present context. Not to be included for unauthenticated calls.|
|x-cds-client-headers|header|[Base64](#common-field-types)|optional|The customer's original standard http headers [Base64](#common-field-types) encoded, including the original User Agent header, if the customer is currently logged in to the Data Recipient Software Product. Mandatory for customer present calls.  Not required for unattended or unauthenticated calls.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|product-category|BUSINESS_LOANS|
|product-category|CRED_AND_CHRG_CARDS|
|product-category|LEASES|
|product-category|MARGIN_LOANS|
|product-category|OVERDRAFTS|
|product-category|PERS_LOANS|
|product-category|REGULATED_TRUST_ACCOUNTS|
|product-category|RESIDENTIAL_MORTGAGES|
|product-category|TERM_DEPOSITS|
|product-category|TRADE_FINANCE|
|product-category|TRANS_AND_SAVINGS_ACCOUNTS|
|product-category|TRAVEL_CARDS|
|open-status|ALL|
|open-status|CLOSED|
|open-status|OPEN|

> Example responses

> 200 Response

```json
{
  "data": {
    "balances": [
      {
        "accountId": "string",
        "currentBalance": "string",
        "availableBalance": "string",
        "creditLimit": "string",
        "amortisedLimit": "string",
        "currency": "string",
        "purses": [
          {
            "amount": "string",
            "currency": "string"
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

<h3 id="get-bulk-balances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[ResponseBankingAccountsBalanceList](#schemacdr-banking-apiresponsebankingaccountsbalancelist)|
|4xx|[**Client Error**](https://tools.ietf.org/html/rfc7231#section-6.5)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Invalid Page Size](#error-400-field-invalid-page-size)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li><li>[422 - Invalid Page](#error-422-field-invalid-page)</li></ul>|[ResponseErrorListV2](#schemacdr-banking-apiresponseerrorlistv2)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-v|string||The [version](#response-headers) of the API end point that the data holder has responded with.|
|200|x-fapi-interaction-id|string||An [RFC4122](https://tools.ietf.org/html/rfc4122) UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a [RFC4122] UUID value is required to be provided in the response header to track the interaction.|
|4xx|x-fapi-interaction-id|string||An [RFC4122](https://tools.ietf.org/html/rfc4122) UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a [RFC4122] UUID value is required to be provided in the response header to track the interaction.|

  
    
      <aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
<a href="#authorisation-scopes">bank:accounts.basic:read</a>
</aside>

    
  

## Get Balances For Specific Accounts

<a id="opIdlistBalancesSpecificAccounts"></a>

> Code samples

```http
POST https://data.holder.com.au/cds-au/v1/banking/accounts/balances HTTP/1.1
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
  url: 'https://data.holder.com.au/cds-au/v1/banking/accounts/balances',
  method: 'post',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`POST /banking/accounts/balances`

Obtain balances for a specified list of accounts

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

<h3 id="get-balances-for-specific-accounts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|[PositiveInteger](#common-field-types)|optional|Page of results to request (standard pagination)|
|page-size|query|[PositiveInteger](#common-field-types)|optional|Page size to request. Default is 25 (standard pagination)|
|x-v|header|string|mandatory|Version of the API end point requested by the client. Must be set to a positive integer. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If the value of [x-min-v](#request-headers) is equal to or higher than the value of [x-v](#request-headers) then the [x-min-v](#request-headers) header should be treated as absent. If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable. See [HTTP Headers](#request-headers)|
|x-min-v|header|string|optional|Minimum version of the API end point requested by the client. Must be set to a positive integer if provided. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable.|
|x-fapi-interaction-id|header|string|optional|An [RFC4122](https://tools.ietf.org/html/rfc4122) UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a [RFC4122] UUID value is required to be provided in the response header to track the interaction.|
|x-fapi-auth-date|header|string|optional|The time when the customer last logged in to the Data Recipient Software Product. Required for all resource calls (customer present and unattended). Not to be included for unauthenticated calls.|
|x-fapi-customer-ip-address|header|string|optional|The customer's original IP address if the customer is currently logged in to the Data Recipient Software Product. The presence of this header indicates that the API is being called in a customer present context. Not to be included for unauthenticated calls.|
|x-cds-client-headers|header|[Base64](#common-field-types)|optional|The customer's original standard http headers [Base64](#common-field-types) encoded, including the original User Agent header, if the customer is currently logged in to the Data Recipient Software Product. Mandatory for customer present calls.  Not required for unattended or unauthenticated calls.|
|body|body|[RequestAccountIds](#schemacdr-banking-apirequestaccountids)|mandatory|The list of account IDs to obtain balances for|

> Example responses

> 200 Response

```json
{
  "data": {
    "balances": [
      {
        "accountId": "string",
        "currentBalance": "string",
        "availableBalance": "string",
        "creditLimit": "string",
        "amortisedLimit": "string",
        "currency": "string",
        "purses": [
          {
            "amount": "string",
            "currency": "string"
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

<h3 id="get-balances-for-specific-accounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[ResponseBankingAccountsBalanceList](#schemacdr-banking-apiresponsebankingaccountsbalancelist)|
|4xx|[**Client Error**](https://tools.ietf.org/html/rfc7231#section-6.5)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Invalid Page Size](#error-400-field-invalid-page-size)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li><li>[422 - Invalid Page](#error-422-field-invalid-page)</li><li>[422 - Unavailable Banking Account](#error-422-authorisation-unavailable-banking-account)</li><li>[422 - Invalid Banking Account](#error-422-authorisation-invalid-banking-account)</li></ul>|[ResponseErrorListV2](#schemacdr-banking-apiresponseerrorlistv2)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-v|string||The [version](#response-headers) of the API end point that the data holder has responded with.|
|200|x-fapi-interaction-id|string||An [RFC4122](https://tools.ietf.org/html/rfc4122) UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a [RFC4122] UUID value is required to be provided in the response header to track the interaction.|
|4xx|x-fapi-interaction-id|string||An [RFC4122](https://tools.ietf.org/html/rfc4122) UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a [RFC4122] UUID value is required to be provided in the response header to track the interaction.|

  
    
      <aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
<a href="#authorisation-scopes">bank:accounts.basic:read</a>
</aside>

    
  

## Get Account Balance

<a id="opIdgetBalance"></a>

> Code samples

```http
GET https://data.holder.com.au/cds-au/v1/banking/accounts/{accountId}/balance HTTP/1.1
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
  url: 'https://data.holder.com.au/cds-au/v1/banking/accounts/{accountId}/balance',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`GET /banking/accounts/{accountId}/balance`

Obtain the balance for a single specified account

###Endpoint Version
|   |  |
|---|--|
|Version|**1**

<h3 id="get-account-balance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|[ASCIIString](#common-field-types)|mandatory|ID of the specific account requested|
|x-v|header|string|mandatory|Version of the API end point requested by the client. Must be set to a positive integer. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If the value of [x-min-v](#request-headers) is equal to or higher than the value of [x-v](#request-headers) then the [x-min-v](#request-headers) header should be treated as absent. If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable. See [HTTP Headers](#request-headers)|
|x-min-v|header|string|optional|Minimum version of the API end point requested by the client. Must be set to a positive integer if provided. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable.|
|x-fapi-interaction-id|header|string|optional|An [RFC4122](https://tools.ietf.org/html/rfc4122) UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a [RFC4122] UUID value is required to be provided in the response header to track the interaction.|
|x-fapi-auth-date|header|string|optional|The time when the customer last logged in to the Data Recipient Software Product. Required for all resource calls (customer present and unattended). Not to be included for unauthenticated calls.|
|x-fapi-customer-ip-address|header|string|optional|The customer's original IP address if the customer is currently logged in to the Data Recipient Software Product. The presence of this header indicates that the API is being called in a customer present context. Not to be included for unauthenticated calls.|
|x-cds-client-headers|header|[Base64](#common-field-types)|optional|The customer's original standard http headers [Base64](#common-field-types) encoded, including the original User Agent header, if the customer is currently logged in to the Data Recipient Software Product. Mandatory for customer present calls.  Not required for unattended or unauthenticated calls.|

> Example responses

> 200 Response

```json
{
  "data": {
    "accountId": "string",
    "currentBalance": "string",
    "availableBalance": "string",
    "creditLimit": "string",
    "amortisedLimit": "string",
    "currency": "string",
    "purses": [
      {
        "amount": "string",
        "currency": "string"
      }
    ]
  },
  "links": {
    "self": "string"
  },
  "meta": {}
}
```

<h3 id="get-account-balance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[ResponseBankingAccountsBalanceById](#schemacdr-banking-apiresponsebankingaccountsbalancebyid)|
|4xx|[**Client Error**](https://tools.ietf.org/html/rfc7231#section-6.5)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li><li>[404 - Unavailable Banking Account](#error-404-authorisation-unavailable-banking-account)</li><li>[404 - Invalid Banking Account](#error-404-authorisation-invalid-banking-account)</li><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|[ResponseErrorListV2](#schemacdr-banking-apiresponseerrorlistv2)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-v|string||The [version](#response-headers) of the API end point that the data holder has responded with.|
|200|x-fapi-interaction-id|string||An [RFC4122](https://tools.ietf.org/html/rfc4122) UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a [RFC4122] UUID value is required to be provided in the response header to track the interaction.|
|4xx|x-fapi-interaction-id|string||An [RFC4122](https://tools.ietf.org/html/rfc4122) UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a [RFC4122] UUID value is required to be provided in the response header to track the interaction.|

  
    
      <aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
<a href="#authorisation-scopes">bank:accounts.basic:read</a>
</aside>

    
  

## Get Account Detail

<a id="opIdgetAccountDetail"></a>

> Code samples

```http
GET https://data.holder.com.au/cds-au/v1/banking/accounts/{accountId} HTTP/1.1
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
  url: 'https://data.holder.com.au/cds-au/v1/banking/accounts/{accountId}',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`GET /banking/accounts/{accountId}`

Obtain detailed information on a single account

###Endpoint Version
|   |  |
|---|--|
|Version|**1**

<h3 id="get-account-detail-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|[ASCIIString](#common-field-types)|mandatory|A tokenised identifier for the account which is unique but not shareable|
|x-v|header|string|mandatory|Version of the API end point requested by the client. Must be set to a positive integer. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If the value of [x-min-v](#request-headers) is equal to or higher than the value of [x-v](#request-headers) then the [x-min-v](#request-headers) header should be treated as absent. If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable. See [HTTP Headers](#request-headers)|
|x-min-v|header|string|optional|Minimum version of the API end point requested by the client. Must be set to a positive integer if provided. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable.|
|x-fapi-interaction-id|header|string|optional|An [RFC4122](https://tools.ietf.org/html/rfc4122) UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a [RFC4122] UUID value is required to be provided in the response header to track the interaction.|
|x-fapi-auth-date|header|string|optional|The time when the customer last logged in to the Data Recipient Software Product. Required for all resource calls (customer present and unattended). Not to be included for unauthenticated calls.|
|x-fapi-customer-ip-address|header|string|optional|The customer's original IP address if the customer is currently logged in to the Data Recipient Software Product. The presence of this header indicates that the API is being called in a customer present context. Not to be included for unauthenticated calls.|
|x-cds-client-headers|header|[Base64](#common-field-types)|optional|The customer's original standard http headers [Base64](#common-field-types) encoded, including the original User Agent header, if the customer is currently logged in to the Data Recipient Software Product. Mandatory for customer present calls.  Not required for unattended or unauthenticated calls.|

> Example responses

> 200 Response

```json
{
  "data": {
    "accountId": "string",
    "creationDate": "string",
    "displayName": "string",
    "nickname": "string",
    "openStatus": "CLOSED",
    "isOwned": true,
    "maskedNumber": "string",
    "productCategory": "BUSINESS_LOANS",
    "productName": "string",
    "bsb": "string",
    "accountNumber": "string",
    "bundleName": "string",
    "specificAccountUType": "creditCard",
    "termDeposit": [
      {
        "lodgementDate": "string",
        "maturityDate": "string",
        "maturityAmount": "string",
        "maturityCurrency": "string",
        "maturityInstructions": "HOLD_ON_MATURITY"
      }
    ],
    "creditCard": {
      "minPaymentAmount": "string",
      "paymentDueAmount": "string",
      "paymentCurrency": "string",
      "paymentDueDate": "string"
    },
    "loan": {
      "originalStartDate": "string",
      "originalLoanAmount": "string",
      "originalLoanCurrency": "string",
      "loanEndDate": "string",
      "nextInstalmentDate": "string",
      "minInstalmentAmount": "string",
      "minInstalmentCurrency": "string",
      "maxRedraw": "string",
      "maxRedrawCurrency": "string",
      "minRedraw": "string",
      "minRedrawCurrency": "string",
      "offsetAccountEnabled": true,
      "offsetAccountIds": [
        "string"
      ],
      "repaymentType": "INTEREST_ONLY",
      "repaymentFrequency": "string"
    },
    "depositRate": "string",
    "lendingRate": "string",
    "depositRates": [
      {
        "depositRateType": "BONUS",
        "rate": "string",
        "calculationFrequency": "string",
        "applicationFrequency": "string",
        "tiers": [
          {
            "name": "string",
            "unitOfMeasure": "DAY",
            "minimumValue": 0,
            "maximumValue": 0,
            "rateApplicationMethod": "PER_TIER",
            "applicabilityConditions": {
              "additionalInfo": "string",
              "additionalInfoUri": "string"
            },
            "additionalInfo": "string",
            "additionalInfoUri": "string"
          }
        ],
        "additionalValue": "string",
        "additionalInfo": "string",
        "additionalInfoUri": "string"
      }
    ],
    "lendingRates": [
      {
        "lendingRateType": "BUNDLE_DISCOUNT_FIXED",
        "rate": "string",
        "comparisonRate": "string",
        "calculationFrequency": "string",
        "applicationFrequency": "string",
        "interestPaymentDue": "IN_ADVANCE",
        "repaymentType": "INTEREST_ONLY",
        "loanPurpose": "INVESTMENT",
        "tiers": [
          {
            "name": "string",
            "unitOfMeasure": "DAY",
            "minimumValue": 0,
            "maximumValue": 0,
            "rateApplicationMethod": "PER_TIER",
            "applicabilityConditions": {
              "additionalInfo": "string",
              "additionalInfoUri": "string"
            },
            "additionalInfo": "string",
            "additionalInfoUri": "string"
          }
        ],
        "additionalValue": "string",
        "additionalInfo": "string",
        "additionalInfoUri": "string"
      }
    ],
    "features": [
      {
        "featureType": "ADDITIONAL_CARDS",
        "additionalValue": "string",
        "additionalInfo": "string",
        "additionalInfoUri": "string",
        "isActivated": true
      }
    ],
    "fees": [
      {
        "name": "string",
        "feeType": "DEPOSIT",
        "amount": "string",
        "balanceRate": "string",
        "transactionRate": "string",
        "accruedRate": "string",
        "accrualFrequency": "string",
        "currency": "string",
        "additionalValue": "string",
        "additionalInfo": "string",
        "additionalInfoUri": "string",
        "discounts": [
          {
            "description": "string",
            "discountType": "BALANCE",
            "amount": "string",
            "balanceRate": "string",
            "transactionRate": "string",
            "accruedRate": "string",
            "feeRate": "string",
            "additionalValue": "string",
            "additionalInfo": "string",
            "additionalInfoUri": "string",
            "eligibility": [
              {
                "discountEligibilityType": "BUSINESS",
                "additionalValue": "string",
                "additionalInfo": "string",
                "additionalInfoUri": "string"
              }
            ]
          }
        ]
      }
    ],
    "addresses": [
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
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[ResponseBankingAccountById](#schemacdr-banking-apiresponsebankingaccountbyid)|
|4xx|[**Client Error**](https://tools.ietf.org/html/rfc7231#section-6.5)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li><li>[404 - Unavailable Banking Account](#error-404-authorisation-unavailable-banking-account)</li><li>[404 - Invalid Banking Account](#error-404-authorisation-invalid-banking-account)</li><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|[ResponseErrorListV2](#schemacdr-banking-apiresponseerrorlistv2)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-v|string||The [version](#response-headers) of the API end point that the data holder has responded with.|
|200|x-fapi-interaction-id|string||An [RFC4122](https://tools.ietf.org/html/rfc4122) UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a [RFC4122] UUID value is required to be provided in the response header to track the interaction.|
|4xx|x-fapi-interaction-id|string||An [RFC4122](https://tools.ietf.org/html/rfc4122) UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a [RFC4122] UUID value is required to be provided in the response header to track the interaction.|

  
    
      <aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
<a href="#authorisation-scopes">bank:accounts.detail:read</a>
</aside>

    
  

## Get Transactions For Account

<a id="opIdgetTransactions"></a>

> Code samples

```http
GET https://data.holder.com.au/cds-au/v1/banking/accounts/{accountId}/transactions HTTP/1.1
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
  url: 'https://data.holder.com.au/cds-au/v1/banking/accounts/{accountId}/transactions',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`GET /banking/accounts/{accountId}/transactions`

Obtain transactions for a specific account.

Some general notes that apply to all end points that retrieve transactions:

- Where multiple transactions are returned, transactions should be ordered according to effective date in descending order
- As the date and time for a transaction can alter depending on status and transaction type two separate date/times are included in the payload. There are still some scenarios where neither of these time stamps is available. For the purpose of filtering and ordering it is expected that the data holder will use the "effective" date/time which will be defined as:
  - Posted date/time if available, then
  - Execution date/time if available, then
  - A reasonable date/time nominated by the data holder using internal data structures
- For transaction amounts it should be assumed that a negative value indicates a reduction of the available balance on the account while a positive value indicates an increase in the available balance on the account
- For aggregated transactions (ie. groups of sub transactions reported as a single entry for the account) only the aggregated information, with as much consistent information accross the subsidiary transactions as possible, is required to be shared

###Endpoint Version
|   |  |
|---|--|
|Version|**1**

<h3 id="get-transactions-for-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|[ASCIIString](#common-field-types)|mandatory|ID of the account to get transactions for.  Must have previously been returned by one of the account list end points.|
|oldest-time|query|[DateTimeString](#common-field-types)|optional|Constrain the transaction history request to transactions with effective time at or after this date/time. If absent defaults to newest-time minus 90 days.  Format is aligned to DateTimeString common type|
|newest-time|query|[DateTimeString](#common-field-types)|optional|Constrain the transaction history request to transactions with effective time at or before this date/time.  If absent defaults to today.  Format is aligned to DateTimeString common type|
|min-amount|query|[AmountString](#common-field-types)|optional|Filter transactions to only transactions with amounts higher or equal to than this amount|
|max-amount|query|[AmountString](#common-field-types)|optional|Filter transactions to only transactions with amounts less than or equal to than this amount|
|text|query|string|optional|Filter transactions to only transactions where this string value is found as a substring of either the reference or description fields. Format is arbitrary ASCII string. This parameter is optionally implemented by data holders. If it is not implemented then a response should be provided as normal without text filtering applied and an additional boolean field named isQueryParamUnsupported should be included in the meta object and set to true (whether the text parameter is supplied or not)|
|page|query|[PositiveInteger](#common-field-types)|optional|Page of results to request (standard pagination)|
|page-size|query|[PositiveInteger](#common-field-types)|optional|Page size to request. Default is 25 (standard pagination)|
|x-v|header|string|mandatory|Version of the API end point requested by the client. Must be set to a positive integer. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If the value of [x-min-v](#request-headers) is equal to or higher than the value of [x-v](#request-headers) then the [x-min-v](#request-headers) header should be treated as absent. If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable. See [HTTP Headers](#request-headers)|
|x-min-v|header|string|optional|Minimum version of the API end point requested by the client. Must be set to a positive integer if provided. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable.|
|x-fapi-interaction-id|header|string|optional|An [RFC4122](https://tools.ietf.org/html/rfc4122) UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a [RFC4122] UUID value is required to be provided in the response header to track the interaction.|
|x-fapi-auth-date|header|string|optional|The time when the customer last logged in to the Data Recipient Software Product. Required for all resource calls (customer present and unattended). Not to be included for unauthenticated calls.|
|x-fapi-customer-ip-address|header|string|optional|The customer's original IP address if the customer is currently logged in to the Data Recipient Software Product. The presence of this header indicates that the API is being called in a customer present context. Not to be included for unauthenticated calls.|
|x-cds-client-headers|header|[Base64](#common-field-types)|optional|The customer's original standard http headers [Base64](#common-field-types) encoded, including the original User Agent header, if the customer is currently logged in to the Data Recipient Software Product. Mandatory for customer present calls.  Not required for unattended or unauthenticated calls.|

> Example responses

> 200 Response

```json
{
  "data": {
    "transactions": [
      {
        "accountId": "string",
        "transactionId": "string",
        "isDetailAvailable": true,
        "type": "DIRECT_DEBIT",
        "status": "PENDING",
        "description": "string",
        "postingDateTime": "string",
        "valueDateTime": "string",
        "executionDateTime": "string",
        "amount": "string",
        "currency": "string",
        "reference": "string",
        "merchantName": "string",
        "merchantCategoryCode": "string",
        "billerCode": "string",
        "billerName": "string",
        "crn": "string",
        "apcaNumber": "string"
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

<h3 id="get-transactions-for-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[ResponseBankingTransactionList](#schemacdr-banking-apiresponsebankingtransactionlist)|
|4xx|[**Client Error**](https://tools.ietf.org/html/rfc7231#section-6.5)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Invalid Page Size](#error-400-field-invalid-page-size)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li><li>[400 - Invalid Date](#error-400-field-invalid-date-time)</li><li>[404 - Unavailable Banking Account](#error-404-authorisation-unavailable-banking-account)</li><li>[404 - Invalid Banking Account](#error-404-authorisation-invalid-banking-account)</li><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li><li>[422 - Invalid Page](#error-422-field-invalid-page)</li></ul>|[ResponseErrorListV2](#schemacdr-banking-apiresponseerrorlistv2)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-v|string||The [version](#response-headers) of the API end point that the data holder has responded with.|
|200|x-fapi-interaction-id|string||An [RFC4122](https://tools.ietf.org/html/rfc4122) UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a [RFC4122] UUID value is required to be provided in the response header to track the interaction.|
|4xx|x-fapi-interaction-id|string||An [RFC4122](https://tools.ietf.org/html/rfc4122) UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a [RFC4122] UUID value is required to be provided in the response header to track the interaction.|

  
    
      <aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
<a href="#authorisation-scopes">bank:transactions:read</a>
</aside>

    
  

## Get Transaction Detail

<a id="opIdgetTransactionDetail"></a>

> Code samples

```http
GET https://data.holder.com.au/cds-au/v1/banking/accounts/{accountId}/transactions/{transactionId} HTTP/1.1
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
  url: 'https://data.holder.com.au/cds-au/v1/banking/accounts/{accountId}/transactions/{transactionId}',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`GET /banking/accounts/{accountId}/transactions/{transactionId}`

Obtain detailed information on a transaction for a specific account

###Endpoint Version
|   |  |
|---|--|
|Version|**1**

<h3 id="get-transaction-detail-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|[ASCIIString](#common-field-types)|mandatory|ID of the account to get transactions for.  Must have previously been returned by one of the account list end points|
|transactionId|path|[ASCIIString](#common-field-types)|mandatory|ID of the transaction obtained from a previous call to one of the other transaction end points|
|x-v|header|string|mandatory|Version of the API end point requested by the client. Must be set to a positive integer. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If the value of [x-min-v](#request-headers) is equal to or higher than the value of [x-v](#request-headers) then the [x-min-v](#request-headers) header should be treated as absent. If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable. See [HTTP Headers](#request-headers)|
|x-min-v|header|string|optional|Minimum version of the API end point requested by the client. Must be set to a positive integer if provided. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable.|
|x-fapi-interaction-id|header|string|optional|An [RFC4122](https://tools.ietf.org/html/rfc4122) UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a [RFC4122] UUID value is required to be provided in the response header to track the interaction.|
|x-fapi-auth-date|header|string|optional|The time when the customer last logged in to the Data Recipient Software Product. Required for all resource calls (customer present and unattended). Not to be included for unauthenticated calls.|
|x-fapi-customer-ip-address|header|string|optional|The customer's original IP address if the customer is currently logged in to the Data Recipient Software Product. The presence of this header indicates that the API is being called in a customer present context. Not to be included for unauthenticated calls.|
|x-cds-client-headers|header|[Base64](#common-field-types)|optional|The customer's original standard http headers [Base64](#common-field-types) encoded, including the original User Agent header, if the customer is currently logged in to the Data Recipient Software Product. Mandatory for customer present calls.  Not required for unattended or unauthenticated calls.|

> Example responses

> 200 Response

```json
{
  "data": {
    "accountId": "string",
    "transactionId": "string",
    "isDetailAvailable": true,
    "type": "DIRECT_DEBIT",
    "status": "PENDING",
    "description": "string",
    "postingDateTime": "string",
    "valueDateTime": "string",
    "executionDateTime": "string",
    "amount": "string",
    "currency": "string",
    "reference": "string",
    "merchantName": "string",
    "merchantCategoryCode": "string",
    "billerCode": "string",
    "billerName": "string",
    "crn": "string",
    "apcaNumber": "string",
    "extendedData": {
      "payer": "string",
      "payee": "string",
      "extensionUType": "x2p101Payload",
      "x2p101Payload": {
        "extendedDescription": "string",
        "endToEndId": "string",
        "purposeCode": "string"
      },
      "service": "X2P1.01"
    }
  },
  "links": {
    "self": "string"
  },
  "meta": {}
}
```

<h3 id="get-transaction-detail-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[ResponseBankingTransactionById](#schemacdr-banking-apiresponsebankingtransactionbyid)|
|4xx|[**Client Error**](https://tools.ietf.org/html/rfc7231#section-6.5)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li><li>[400 - Invalid Date](#error-400-field-invalid-date-time)</li><li>[404 - Unavailable Banking Account](#error-404-authorisation-unavailable-banking-account)</li><li>[404 - Invalid Banking Account](#error-404-authorisation-invalid-banking-account)</li><li>[Unavailable Resource](#error-404-resource-unavailable)</li><li>[Invalid Resource](#error-404-resource-invalid)</li><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|[ResponseErrorListV2](#schemacdr-banking-apiresponseerrorlistv2)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-v|string||The [version](#response-headers) of the API end point that the data holder has responded with.|
|200|x-fapi-interaction-id|string||An [RFC4122](https://tools.ietf.org/html/rfc4122) UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a [RFC4122] UUID value is required to be provided in the response header to track the interaction.|
|4xx|x-fapi-interaction-id|string||An [RFC4122](https://tools.ietf.org/html/rfc4122) UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a [RFC4122] UUID value is required to be provided in the response header to track the interaction.|

  
    
      <aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
<a href="#authorisation-scopes">bank:transactions:read</a>
</aside>

    
  

## Get Direct Debits For Account

<a id="opIdlistDirectDebits"></a>

> Code samples

```http
GET https://data.holder.com.au/cds-au/v1/banking/accounts/{accountId}/direct-debits HTTP/1.1
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
  url: 'https://data.holder.com.au/cds-au/v1/banking/accounts/{accountId}/direct-debits',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`GET /banking/accounts/{accountId}/direct-debits`

Obtain direct debit authorisations for a specific account

###Endpoint Version
|   |  |
|---|--|
|Version|**1**

<h3 id="get-direct-debits-for-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|[ASCIIString](#common-field-types)|mandatory|ID of the account to get direct debit authorisations for.  Must have previously been returned by one of the account list end points.|
|page|query|[PositiveInteger](#common-field-types)|optional|Page of results to request (standard pagination)|
|page-size|query|[PositiveInteger](#common-field-types)|optional|Page size to request. Default is 25 (standard pagination)|
|x-v|header|string|mandatory|Version of the API end point requested by the client. Must be set to a positive integer. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If the value of [x-min-v](#request-headers) is equal to or higher than the value of [x-v](#request-headers) then the [x-min-v](#request-headers) header should be treated as absent. If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable. See [HTTP Headers](#request-headers)|
|x-min-v|header|string|optional|Minimum version of the API end point requested by the client. Must be set to a positive integer if provided. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable.|
|x-fapi-interaction-id|header|string|optional|An [RFC4122](https://tools.ietf.org/html/rfc4122) UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a [RFC4122] UUID value is required to be provided in the response header to track the interaction.|
|x-fapi-auth-date|header|string|optional|The time when the customer last logged in to the Data Recipient Software Product. Required for all resource calls (customer present and unattended). Not to be included for unauthenticated calls.|
|x-fapi-customer-ip-address|header|string|optional|The customer's original IP address if the customer is currently logged in to the Data Recipient Software Product. The presence of this header indicates that the API is being called in a customer present context. Not to be included for unauthenticated calls.|
|x-cds-client-headers|header|[Base64](#common-field-types)|optional|The customer's original standard http headers [Base64](#common-field-types) encoded, including the original User Agent header, if the customer is currently logged in to the Data Recipient Software Product. Mandatory for customer present calls.  Not required for unattended or unauthenticated calls.|

> Example responses

> 200 Response

```json
{
  "data": {
    "directDebitAuthorisations": [
      {
        "accountId": "string",
        "authorisedEntity": {
          "description": "string",
          "financialInstitution": "string",
          "abn": "string",
          "acn": "string",
          "arbn": "string"
        },
        "lastDebitDateTime": "string",
        "lastDebitAmount": "string"
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

<h3 id="get-direct-debits-for-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[ResponseBankingDirectDebitAuthorisationList](#schemacdr-banking-apiresponsebankingdirectdebitauthorisationlist)|
|4xx|[**Client Error**](https://tools.ietf.org/html/rfc7231#section-6.5)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Invalid Page Size](#error-400-field-invalid-page-size)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li><li>[404 - Unavailable Banking Account](#error-404-authorisation-unavailable-banking-account)</li><li>[404 - Invalid Banking Account](#error-404-authorisation-invalid-banking-account)</li><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li><li>[422 - Invalid Page](#error-422-field-invalid-page)</li></ul>|[ResponseErrorListV2](#schemacdr-banking-apiresponseerrorlistv2)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-v|string||The [version](#response-headers) of the API end point that the data holder has responded with.|
|200|x-fapi-interaction-id|string||An [RFC4122](https://tools.ietf.org/html/rfc4122) UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a [RFC4122] UUID value is required to be provided in the response header to track the interaction.|
|4xx|x-fapi-interaction-id|string||An [RFC4122](https://tools.ietf.org/html/rfc4122) UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a [RFC4122] UUID value is required to be provided in the response header to track the interaction.|

  
    
      <aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
<a href="#authorisation-scopes">bank:regular_payments:read</a>
</aside>

    
  

## Get Bulk Direct Debits

<a id="opIdlistDirectDebitsBulk"></a>

> Code samples

```http
GET https://data.holder.com.au/cds-au/v1/banking/accounts/direct-debits HTTP/1.1
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
  url: 'https://data.holder.com.au/cds-au/v1/banking/accounts/direct-debits',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`GET /banking/accounts/direct-debits`

Obtain direct debit authorisations for multiple, filtered accounts

###Endpoint Version
|   |  |
|---|--|
|Version|**1**

<h3 id="get-bulk-direct-debits-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|product-category|query|string|optional|Used to filter results on the productCategory field applicable to accounts. Any one of the valid values for this field can be supplied. If absent then all accounts returned.|
|open-status|query|string|optional|Used to filter results according to open/closed status. Values can be OPEN, CLOSED or ALL. If absent then ALL is assumed|
|is-owned|query|[Boolean](#common-field-types)|optional|Filters accounts based on whether they are owned by the authorised customer.  True for owned accounts, false for unowned accounts and absent for all accounts|
|page|query|[PositiveInteger](#common-field-types)|optional|Page of results to request (standard pagination)|
|page-size|query|[PositiveInteger](#common-field-types)|optional|Page size to request. Default is 25 (standard pagination)|
|x-v|header|string|mandatory|Version of the API end point requested by the client. Must be set to a positive integer. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If the value of [x-min-v](#request-headers) is equal to or higher than the value of [x-v](#request-headers) then the [x-min-v](#request-headers) header should be treated as absent. If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable. See [HTTP Headers](#request-headers)|
|x-min-v|header|string|optional|Minimum version of the API end point requested by the client. Must be set to a positive integer if provided. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable.|
|x-fapi-interaction-id|header|string|optional|An [RFC4122](https://tools.ietf.org/html/rfc4122) UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a [RFC4122] UUID value is required to be provided in the response header to track the interaction.|
|x-fapi-auth-date|header|string|optional|The time when the customer last logged in to the Data Recipient Software Product. Required for all resource calls (customer present and unattended). Not to be included for unauthenticated calls.|
|x-fapi-customer-ip-address|header|string|optional|The customer's original IP address if the customer is currently logged in to the Data Recipient Software Product. The presence of this header indicates that the API is being called in a customer present context. Not to be included for unauthenticated calls.|
|x-cds-client-headers|header|[Base64](#common-field-types)|optional|The customer's original standard http headers [Base64](#common-field-types) encoded, including the original User Agent header, if the customer is currently logged in to the Data Recipient Software Product. Mandatory for customer present calls.  Not required for unattended or unauthenticated calls.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|product-category|BUSINESS_LOANS|
|product-category|CRED_AND_CHRG_CARDS|
|product-category|LEASES|
|product-category|MARGIN_LOANS|
|product-category|OVERDRAFTS|
|product-category|PERS_LOANS|
|product-category|REGULATED_TRUST_ACCOUNTS|
|product-category|RESIDENTIAL_MORTGAGES|
|product-category|TERM_DEPOSITS|
|product-category|TRADE_FINANCE|
|product-category|TRANS_AND_SAVINGS_ACCOUNTS|
|product-category|TRAVEL_CARDS|
|open-status|ALL|
|open-status|CLOSED|
|open-status|OPEN|

> Example responses

> 200 Response

```json
{
  "data": {
    "directDebitAuthorisations": [
      {
        "accountId": "string",
        "authorisedEntity": {
          "description": "string",
          "financialInstitution": "string",
          "abn": "string",
          "acn": "string",
          "arbn": "string"
        },
        "lastDebitDateTime": "string",
        "lastDebitAmount": "string"
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

<h3 id="get-bulk-direct-debits-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[ResponseBankingDirectDebitAuthorisationList](#schemacdr-banking-apiresponsebankingdirectdebitauthorisationlist)|
|4xx|[**Client Error**](https://tools.ietf.org/html/rfc7231#section-6.5)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Invalid Page Size](#error-400-field-invalid-page-size)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li><li>[422 - Invalid Page](#error-422-field-invalid-page)</li></ul>|[ResponseErrorListV2](#schemacdr-banking-apiresponseerrorlistv2)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-v|string||The [version](#response-headers) of the API end point that the data holder has responded with.|
|200|x-fapi-interaction-id|string||An [RFC4122](https://tools.ietf.org/html/rfc4122) UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a [RFC4122] UUID value is required to be provided in the response header to track the interaction.|
|4xx|x-fapi-interaction-id|string||An [RFC4122](https://tools.ietf.org/html/rfc4122) UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a [RFC4122] UUID value is required to be provided in the response header to track the interaction.|

  
    
      <aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
<a href="#authorisation-scopes">bank:regular_payments:read</a>
</aside>

    
  

## Get Direct Debits For Specific Accounts

<a id="opIdlistDirectDebitsSpecificAccounts"></a>

> Code samples

```http
POST https://data.holder.com.au/cds-au/v1/banking/accounts/direct-debits HTTP/1.1
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
  url: 'https://data.holder.com.au/cds-au/v1/banking/accounts/direct-debits',
  method: 'post',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`POST /banking/accounts/direct-debits`

Obtain direct debit authorisations for a specified list of accounts

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

<h3 id="get-direct-debits-for-specific-accounts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|[PositiveInteger](#common-field-types)|optional|Page of results to request (standard pagination)|
|page-size|query|[PositiveInteger](#common-field-types)|optional|Page size to request. Default is 25 (standard pagination)|
|x-v|header|string|mandatory|Version of the API end point requested by the client. Must be set to a positive integer. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If the value of [x-min-v](#request-headers) is equal to or higher than the value of [x-v](#request-headers) then the [x-min-v](#request-headers) header should be treated as absent. If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable. See [HTTP Headers](#request-headers)|
|x-min-v|header|string|optional|Minimum version of the API end point requested by the client. Must be set to a positive integer if provided. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable.|
|x-fapi-interaction-id|header|string|optional|An [RFC4122](https://tools.ietf.org/html/rfc4122) UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a [RFC4122] UUID value is required to be provided in the response header to track the interaction.|
|x-fapi-auth-date|header|string|optional|The time when the customer last logged in to the Data Recipient Software Product. Required for all resource calls (customer present and unattended). Not to be included for unauthenticated calls.|
|x-fapi-customer-ip-address|header|string|optional|The customer's original IP address if the customer is currently logged in to the Data Recipient Software Product. The presence of this header indicates that the API is being called in a customer present context. Not to be included for unauthenticated calls.|
|x-cds-client-headers|header|[Base64](#common-field-types)|optional|The customer's original standard http headers [Base64](#common-field-types) encoded, including the original User Agent header, if the customer is currently logged in to the Data Recipient Software Product. Mandatory for customer present calls.  Not required for unattended or unauthenticated calls.|
|body|body|[RequestAccountIds](#schemacdr-banking-apirequestaccountids)|mandatory|Array of specific accountIds to obtain authorisations for|

> Example responses

> 200 Response

```json
{
  "data": {
    "directDebitAuthorisations": [
      {
        "accountId": "string",
        "authorisedEntity": {
          "description": "string",
          "financialInstitution": "string",
          "abn": "string",
          "acn": "string",
          "arbn": "string"
        },
        "lastDebitDateTime": "string",
        "lastDebitAmount": "string"
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

<h3 id="get-direct-debits-for-specific-accounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[ResponseBankingDirectDebitAuthorisationList](#schemacdr-banking-apiresponsebankingdirectdebitauthorisationlist)|
|4xx|[**Client Error**](https://tools.ietf.org/html/rfc7231#section-6.5)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Invalid Page Size](#error-400-field-invalid-page-size)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li><li>[422 - Invalid Page](#error-422-field-invalid-page)</li><li>[422 - Unavailable Banking Account](#error-422-authorisation-unavailable-banking-account)</li><li>[422 - Invalid Banking Account](#error-422-authorisation-invalid-banking-account)</li></ul>|[ResponseErrorListV2](#schemacdr-banking-apiresponseerrorlistv2)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-v|string||The [version](#response-headers) of the API end point that the data holder has responded with.|
|200|x-fapi-interaction-id|string||An [RFC4122](https://tools.ietf.org/html/rfc4122) UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a [RFC4122] UUID value is required to be provided in the response header to track the interaction.|
|4xx|x-fapi-interaction-id|string||An [RFC4122](https://tools.ietf.org/html/rfc4122) UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a [RFC4122] UUID value is required to be provided in the response header to track the interaction.|

  
    
      <aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
<a href="#authorisation-scopes">bank:regular_payments:read</a>
</aside>

    
  

## Get Scheduled Payments for Account

<a id="opIdlistScheduledPayments"></a>

> Code samples

```http
GET https://data.holder.com.au/cds-au/v1/banking/accounts/{accountId}/payments/scheduled HTTP/1.1
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
  url: 'https://data.holder.com.au/cds-au/v1/banking/accounts/{accountId}/payments/scheduled',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`GET /banking/accounts/{accountId}/payments/scheduled`

Obtain scheduled, outgoing payments for a specific account

###Endpoint Version
|   |  |
|---|--|
|Version|**1**

<h3 id="get-scheduled-payments-for-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|[ASCIIString](#common-field-types)|mandatory|ID of the account to get scheduled payments for. Must have previously been returned by one of the account list end points. The account specified is the source account for the payment|
|page|query|[PositiveInteger](#common-field-types)|optional|Page of results to request (standard pagination)|
|page-size|query|[PositiveInteger](#common-field-types)|optional|Page size to request. Default is 25 (standard pagination)|
|x-v|header|string|mandatory|Version of the API end point requested by the client. Must be set to a positive integer. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If the value of [x-min-v](#request-headers) is equal to or higher than the value of [x-v](#request-headers) then the [x-min-v](#request-headers) header should be treated as absent. If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable. See [HTTP Headers](#request-headers)|
|x-min-v|header|string|optional|Minimum version of the API end point requested by the client. Must be set to a positive integer if provided. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable.|
|x-fapi-interaction-id|header|string|optional|An [RFC4122](https://tools.ietf.org/html/rfc4122) UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a [RFC4122] UUID value is required to be provided in the response header to track the interaction.|
|x-fapi-auth-date|header|string|optional|The time when the customer last logged in to the Data Recipient Software Product. Required for all resource calls (customer present and unattended). Not to be included for unauthenticated calls.|
|x-fapi-customer-ip-address|header|string|optional|The customer's original IP address if the customer is currently logged in to the Data Recipient Software Product. The presence of this header indicates that the API is being called in a customer present context. Not to be included for unauthenticated calls.|
|x-cds-client-headers|header|[Base64](#common-field-types)|optional|The customer's original standard http headers [Base64](#common-field-types) encoded, including the original User Agent header, if the customer is currently logged in to the Data Recipient Software Product. Mandatory for customer present calls.  Not required for unattended or unauthenticated calls.|

> Example responses

> 200 Response

```json
{
  "data": {
    "scheduledPayments": [
      {
        "scheduledPaymentId": "string",
        "nickname": "string",
        "payerReference": "string",
        "payeeReference": "string",
        "status": "ACTIVE",
        "from": {
          "accountId": "string"
        },
        "paymentSet": [
          {
            "to": {
              "toUType": "accountId",
              "accountId": "string",
              "payeeId": "string",
              "nickname": "string",
              "payeeReference": "string",
              "domestic": {
                "payeeAccountUType": "account",
                "account": {
                  "accountName": "string",
                  "bsb": "string",
                  "accountNumber": "string"
                },
                "card": {
                  "cardNumber": "string"
                },
                "payId": {
                  "name": "string",
                  "identifier": "string",
                  "type": "ABN"
                }
              },
              "biller": {
                "billerCode": "string",
                "crn": "string",
                "billerName": "string"
              },
              "international": {
                "beneficiaryDetails": {
                  "name": "string",
                  "country": "string",
                  "message": "string"
                },
                "bankDetails": {
                  "country": "string",
                  "accountNumber": "string",
                  "bankAddress": {
                    "name": "string",
                    "address": "string"
                  },
                  "beneficiaryBankBIC": "string",
                  "fedWireNumber": "string",
                  "sortCode": "string",
                  "chipNumber": "string",
                  "routingNumber": "string",
                  "legalEntityIdentifier": "string"
                }
              }
            },
            "isAmountCalculated": true,
            "amount": "string",
            "currency": "string"
          }
        ],
        "recurrence": {
          "nextPaymentDate": "string",
          "recurrenceUType": "eventBased",
          "onceOff": {
            "paymentDate": "string"
          },
          "intervalSchedule": {
            "finalPaymentDate": "string",
            "paymentsRemaining": 1,
            "nonBusinessDayTreatment": "AFTER",
            "intervals": [
              {
                "interval": "string",
                "dayInInterval": "string"
              }
            ]
          },
          "lastWeekDay": {
            "finalPaymentDate": "string",
            "paymentsRemaining": 1,
            "interval": "string",
            "lastWeekDay": "FRI",
            "nonBusinessDayTreatment": "AFTER"
          },
          "eventBased": {
            "description": "string"
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

<h3 id="get-scheduled-payments-for-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[ResponseBankingScheduledPaymentsList](#schemacdr-banking-apiresponsebankingscheduledpaymentslist)|
|4xx|[**Client Error**](https://tools.ietf.org/html/rfc7231#section-6.5)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Invalid Page Size](#error-400-field-invalid-page-size)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li><li>[404 - Unavailable Banking Account](#error-404-authorisation-unavailable-banking-account)</li><li>[404 - Invalid Banking Account](#error-404-authorisation-invalid-banking-account)</li><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li><li>[422 - Invalid Page](#error-422-field-invalid-page)</li></ul>|[ResponseErrorListV2](#schemacdr-banking-apiresponseerrorlistv2)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-v|string||The [version](#response-headers) of the API end point that the data holder has responded with.|
|200|x-fapi-interaction-id|string||An [RFC4122](https://tools.ietf.org/html/rfc4122) UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a [RFC4122] UUID value is required to be provided in the response header to track the interaction.|
|4xx|x-fapi-interaction-id|string||An [RFC4122](https://tools.ietf.org/html/rfc4122) UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a [RFC4122] UUID value is required to be provided in the response header to track the interaction.|

  
    
      <aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
<a href="#authorisation-scopes">bank:regular_payments:read</a>
</aside>

    
  

## Get Scheduled Payments Bulk

<a id="opIdlistScheduledPaymentsBulk"></a>

> Code samples

```http
GET https://data.holder.com.au/cds-au/v1/banking/payments/scheduled HTTP/1.1
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
  url: 'https://data.holder.com.au/cds-au/v1/banking/payments/scheduled',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`GET /banking/payments/scheduled`

Obtain scheduled payments for multiple, filtered accounts that are the source of funds for the payments

###Endpoint Version
|   |  |
|---|--|
|Version|**1**

<h3 id="get-scheduled-payments-bulk-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|product-category|query|string|optional|Used to filter results on the productCategory field applicable to accounts. Any one of the valid values for this field can be supplied. If absent then all accounts returned.|
|open-status|query|string|optional|Used to filter results according to open/closed status. Values can be OPEN, CLOSED or ALL. If absent then ALL is assumed|
|is-owned|query|[Boolean](#common-field-types)|optional|Filters accounts based on whether they are owned by the authorised customer.  True for owned accounts, false for unowned accounts and absent for all accounts|
|page|query|[PositiveInteger](#common-field-types)|optional|Page of results to request (standard pagination)|
|page-size|query|[PositiveInteger](#common-field-types)|optional|Page size to request. Default is 25 (standard pagination)|
|x-v|header|string|mandatory|Version of the API end point requested by the client. Must be set to a positive integer. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If the value of [x-min-v](#request-headers) is equal to or higher than the value of [x-v](#request-headers) then the [x-min-v](#request-headers) header should be treated as absent. If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable. See [HTTP Headers](#request-headers)|
|x-min-v|header|string|optional|Minimum version of the API end point requested by the client. Must be set to a positive integer if provided. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable.|
|x-fapi-interaction-id|header|string|optional|An [RFC4122](https://tools.ietf.org/html/rfc4122) UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a [RFC4122] UUID value is required to be provided in the response header to track the interaction.|
|x-fapi-auth-date|header|string|optional|The time when the customer last logged in to the Data Recipient Software Product. Required for all resource calls (customer present and unattended). Not to be included for unauthenticated calls.|
|x-fapi-customer-ip-address|header|string|optional|The customer's original IP address if the customer is currently logged in to the Data Recipient Software Product. The presence of this header indicates that the API is being called in a customer present context. Not to be included for unauthenticated calls.|
|x-cds-client-headers|header|[Base64](#common-field-types)|optional|The customer's original standard http headers [Base64](#common-field-types) encoded, including the original User Agent header, if the customer is currently logged in to the Data Recipient Software Product. Mandatory for customer present calls.  Not required for unattended or unauthenticated calls.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|product-category|BUSINESS_LOANS|
|product-category|CRED_AND_CHRG_CARDS|
|product-category|LEASES|
|product-category|MARGIN_LOANS|
|product-category|OVERDRAFTS|
|product-category|PERS_LOANS|
|product-category|REGULATED_TRUST_ACCOUNTS|
|product-category|RESIDENTIAL_MORTGAGES|
|product-category|TERM_DEPOSITS|
|product-category|TRADE_FINANCE|
|product-category|TRANS_AND_SAVINGS_ACCOUNTS|
|product-category|TRAVEL_CARDS|
|open-status|ALL|
|open-status|CLOSED|
|open-status|OPEN|

> Example responses

> 200 Response

```json
{
  "data": {
    "scheduledPayments": [
      {
        "scheduledPaymentId": "string",
        "nickname": "string",
        "payerReference": "string",
        "payeeReference": "string",
        "status": "ACTIVE",
        "from": {
          "accountId": "string"
        },
        "paymentSet": [
          {
            "to": {
              "toUType": "accountId",
              "accountId": "string",
              "payeeId": "string",
              "nickname": "string",
              "payeeReference": "string",
              "domestic": {
                "payeeAccountUType": "account",
                "account": {
                  "accountName": "string",
                  "bsb": "string",
                  "accountNumber": "string"
                },
                "card": {
                  "cardNumber": "string"
                },
                "payId": {
                  "name": "string",
                  "identifier": "string",
                  "type": "ABN"
                }
              },
              "biller": {
                "billerCode": "string",
                "crn": "string",
                "billerName": "string"
              },
              "international": {
                "beneficiaryDetails": {
                  "name": "string",
                  "country": "string",
                  "message": "string"
                },
                "bankDetails": {
                  "country": "string",
                  "accountNumber": "string",
                  "bankAddress": {
                    "name": "string",
                    "address": "string"
                  },
                  "beneficiaryBankBIC": "string",
                  "fedWireNumber": "string",
                  "sortCode": "string",
                  "chipNumber": "string",
                  "routingNumber": "string",
                  "legalEntityIdentifier": "string"
                }
              }
            },
            "isAmountCalculated": true,
            "amount": "string",
            "currency": "string"
          }
        ],
        "recurrence": {
          "nextPaymentDate": "string",
          "recurrenceUType": "eventBased",
          "onceOff": {
            "paymentDate": "string"
          },
          "intervalSchedule": {
            "finalPaymentDate": "string",
            "paymentsRemaining": 1,
            "nonBusinessDayTreatment": "AFTER",
            "intervals": [
              {
                "interval": "string",
                "dayInInterval": "string"
              }
            ]
          },
          "lastWeekDay": {
            "finalPaymentDate": "string",
            "paymentsRemaining": 1,
            "interval": "string",
            "lastWeekDay": "FRI",
            "nonBusinessDayTreatment": "AFTER"
          },
          "eventBased": {
            "description": "string"
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

<h3 id="get-scheduled-payments-bulk-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[ResponseBankingScheduledPaymentsList](#schemacdr-banking-apiresponsebankingscheduledpaymentslist)|
|4xx|[**Client Error**](https://tools.ietf.org/html/rfc7231#section-6.5)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Invalid Page Size](#error-400-field-invalid-page-size)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li><li>[422 - Invalid Page](#error-422-field-invalid-page)</li></ul>|[ResponseErrorListV2](#schemacdr-banking-apiresponseerrorlistv2)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-v|string||The [version](#response-headers) of the API end point that the data holder has responded with.|
|200|x-fapi-interaction-id|string||An [RFC4122](https://tools.ietf.org/html/rfc4122) UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a [RFC4122] UUID value is required to be provided in the response header to track the interaction.|
|4xx|x-fapi-interaction-id|string||An [RFC4122](https://tools.ietf.org/html/rfc4122) UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a [RFC4122] UUID value is required to be provided in the response header to track the interaction.|

  
    
      <aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
<a href="#authorisation-scopes">bank:regular_payments:read</a>
</aside>

    
  

## Get Scheduled Payments For Specific Accounts

<a id="opIdlistScheduledPaymentsSpecificAccounts"></a>

> Code samples

```http
POST https://data.holder.com.au/cds-au/v1/banking/payments/scheduled HTTP/1.1
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
  url: 'https://data.holder.com.au/cds-au/v1/banking/payments/scheduled',
  method: 'post',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`POST /banking/payments/scheduled`

Obtain scheduled payments for a specified list of accounts

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

<h3 id="get-scheduled-payments-for-specific-accounts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|[PositiveInteger](#common-field-types)|optional|Page of results to request (standard pagination)|
|page-size|query|[PositiveInteger](#common-field-types)|optional|Page size to request. Default is 25 (standard pagination)|
|x-v|header|string|mandatory|Version of the API end point requested by the client. Must be set to a positive integer. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If the value of [x-min-v](#request-headers) is equal to or higher than the value of [x-v](#request-headers) then the [x-min-v](#request-headers) header should be treated as absent. If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable. See [HTTP Headers](#request-headers)|
|x-min-v|header|string|optional|Minimum version of the API end point requested by the client. Must be set to a positive integer if provided. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable.|
|x-fapi-interaction-id|header|string|optional|An [RFC4122](https://tools.ietf.org/html/rfc4122) UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a [RFC4122] UUID value is required to be provided in the response header to track the interaction.|
|x-fapi-auth-date|header|string|optional|The time when the customer last logged in to the Data Recipient Software Product. Required for all resource calls (customer present and unattended). Not to be included for unauthenticated calls.|
|x-fapi-customer-ip-address|header|string|optional|The customer's original IP address if the customer is currently logged in to the Data Recipient Software Product. The presence of this header indicates that the API is being called in a customer present context. Not to be included for unauthenticated calls.|
|x-cds-client-headers|header|[Base64](#common-field-types)|optional|The customer's original standard http headers [Base64](#common-field-types) encoded, including the original User Agent header, if the customer is currently logged in to the Data Recipient Software Product. Mandatory for customer present calls.  Not required for unattended or unauthenticated calls.|
|body|body|[RequestAccountIds](#schemacdr-banking-apirequestaccountids)|mandatory|Array of specific accountIds to obtain scheduled payments for.  The accounts specified are the source of funds for the payments returned|

> Example responses

> 200 Response

```json
{
  "data": {
    "scheduledPayments": [
      {
        "scheduledPaymentId": "string",
        "nickname": "string",
        "payerReference": "string",
        "payeeReference": "string",
        "status": "ACTIVE",
        "from": {
          "accountId": "string"
        },
        "paymentSet": [
          {
            "to": {
              "toUType": "accountId",
              "accountId": "string",
              "payeeId": "string",
              "nickname": "string",
              "payeeReference": "string",
              "domestic": {
                "payeeAccountUType": "account",
                "account": {
                  "accountName": "string",
                  "bsb": "string",
                  "accountNumber": "string"
                },
                "card": {
                  "cardNumber": "string"
                },
                "payId": {
                  "name": "string",
                  "identifier": "string",
                  "type": "ABN"
                }
              },
              "biller": {
                "billerCode": "string",
                "crn": "string",
                "billerName": "string"
              },
              "international": {
                "beneficiaryDetails": {
                  "name": "string",
                  "country": "string",
                  "message": "string"
                },
                "bankDetails": {
                  "country": "string",
                  "accountNumber": "string",
                  "bankAddress": {
                    "name": "string",
                    "address": "string"
                  },
                  "beneficiaryBankBIC": "string",
                  "fedWireNumber": "string",
                  "sortCode": "string",
                  "chipNumber": "string",
                  "routingNumber": "string",
                  "legalEntityIdentifier": "string"
                }
              }
            },
            "isAmountCalculated": true,
            "amount": "string",
            "currency": "string"
          }
        ],
        "recurrence": {
          "nextPaymentDate": "string",
          "recurrenceUType": "eventBased",
          "onceOff": {
            "paymentDate": "string"
          },
          "intervalSchedule": {
            "finalPaymentDate": "string",
            "paymentsRemaining": 1,
            "nonBusinessDayTreatment": "AFTER",
            "intervals": [
              {
                "interval": "string",
                "dayInInterval": "string"
              }
            ]
          },
          "lastWeekDay": {
            "finalPaymentDate": "string",
            "paymentsRemaining": 1,
            "interval": "string",
            "lastWeekDay": "FRI",
            "nonBusinessDayTreatment": "AFTER"
          },
          "eventBased": {
            "description": "string"
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

<h3 id="get-scheduled-payments-for-specific-accounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[ResponseBankingScheduledPaymentsList](#schemacdr-banking-apiresponsebankingscheduledpaymentslist)|
|4xx|[**Client Error**](https://tools.ietf.org/html/rfc7231#section-6.5)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Invalid Page Size](#error-400-field-invalid-page-size)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li><li>[422 - Invalid Page](#error-422-field-invalid-page)</li><li>[422 - Unavailable Banking Account](#error-422-authorisation-unavailable-banking-account)</li><li>[422 - Invalid Banking Account](#error-422-authorisation-invalid-banking-account)</li></ul>|[ResponseErrorListV2](#schemacdr-banking-apiresponseerrorlistv2)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-v|string||The [version](#response-headers) of the API end point that the data holder has responded with.|
|200|x-fapi-interaction-id|string||An [RFC4122](https://tools.ietf.org/html/rfc4122) UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a [RFC4122] UUID value is required to be provided in the response header to track the interaction.|
|4xx|x-fapi-interaction-id|string||An [RFC4122](https://tools.ietf.org/html/rfc4122) UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a [RFC4122] UUID value is required to be provided in the response header to track the interaction.|

  
    
      <aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
<a href="#authorisation-scopes">bank:regular_payments:read</a>
</aside>

    
  

## Get Payees

<a id="opIdlistPayees"></a>

> Code samples

```http
GET https://data.holder.com.au/cds-au/v1/banking/payees HTTP/1.1
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
  url: 'https://data.holder.com.au/cds-au/v1/banking/payees',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`GET /banking/payees`

Obtain a list of pre-registered payees

###Endpoint Version
|   |  |
|---|--|
|Version|**1**

<h3 id="get-payees-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type|query|string|optional|Filter on the payee type field.  In addition to normal type field values, ALL can be specified to retrieve all payees.  If absent the assumed value is ALL|
|page|query|[PositiveInteger](#common-field-types)|optional|Page of results to request (standard pagination)|
|page-size|query|[PositiveInteger](#common-field-types)|optional|Page size to request. Default is 25 (standard pagination)|
|x-v|header|string|mandatory|Version of the API end point requested by the client. Must be set to a positive integer. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If the value of [x-min-v](#request-headers) is equal to or higher than the value of [x-v](#request-headers) then the [x-min-v](#request-headers) header should be treated as absent. If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable. See [HTTP Headers](#request-headers)|
|x-min-v|header|string|optional|Minimum version of the API end point requested by the client. Must be set to a positive integer if provided. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable.|
|x-fapi-interaction-id|header|string|optional|An [RFC4122](https://tools.ietf.org/html/rfc4122) UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a [RFC4122] UUID value is required to be provided in the response header to track the interaction.|
|x-fapi-auth-date|header|string|optional|The time when the customer last logged in to the Data Recipient Software Product. Required for all resource calls (customer present and unattended). Not to be included for unauthenticated calls.|
|x-fapi-customer-ip-address|header|string|optional|The customer's original IP address if the customer is currently logged in to the Data Recipient Software Product. The presence of this header indicates that the API is being called in a customer present context. Not to be included for unauthenticated calls.|
|x-cds-client-headers|header|[Base64](#common-field-types)|optional|The customer's original standard http headers [Base64](#common-field-types) encoded, including the original User Agent header, if the customer is currently logged in to the Data Recipient Software Product. Mandatory for customer present calls.  Not required for unattended or unauthenticated calls.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|ALL|
|type|BILLER|
|type|DOMESTIC|
|type|INTERNATIONAL|

> Example responses

> 200 Response

```json
{
  "data": {
    "payees": [
      {
        "payeeId": "string",
        "nickname": "string",
        "description": "string",
        "type": "BILLER",
        "creationDate": "string"
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

<h3 id="get-payees-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[ResponseBankingPayeeList](#schemacdr-banking-apiresponsebankingpayeelist)|
|4xx|[**Client Error**](https://tools.ietf.org/html/rfc7231#section-6.5)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Invalid Page Size](#error-400-field-invalid-page-size)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li><li>[422 - Invalid Page](#error-422-field-invalid-page)</li></ul>|[ResponseErrorListV2](#schemacdr-banking-apiresponseerrorlistv2)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-v|string||The [version](#response-headers) of the API end point that the data holder has responded with.|
|200|x-fapi-interaction-id|string||An [RFC4122](https://tools.ietf.org/html/rfc4122) UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a [RFC4122] UUID value is required to be provided in the response header to track the interaction.|
|4xx|x-fapi-interaction-id|string||An [RFC4122](https://tools.ietf.org/html/rfc4122) UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a [RFC4122] UUID value is required to be provided in the response header to track the interaction.|

  
    
      <aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
<a href="#authorisation-scopes">bank:payees:read</a>
</aside>

    
  

## Get Payee Detail

<a id="opIdgetPayeeDetail"></a>

> Code samples

```http
GET https://data.holder.com.au/cds-au/v1/banking/payees/{payeeId} HTTP/1.1
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
  url: 'https://data.holder.com.au/cds-au/v1/banking/payees/{payeeId}',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`GET /banking/payees/{payeeId}`

Obtain detailed information on a single payee.

Note that the payee sub-structure should be selected to represent the payment destination only rather than any known characteristics of the payment recipient

###Endpoint Version
|   |  |
|---|--|
|Version|**1**

<h3 id="get-payee-detail-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|payeeId|path|[ASCIIString](#common-field-types)|mandatory|The ID used to locate the details of a particular payee|
|x-v|header|string|mandatory|Version of the API end point requested by the client. Must be set to a positive integer. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If the value of [x-min-v](#request-headers) is equal to or higher than the value of [x-v](#request-headers) then the [x-min-v](#request-headers) header should be treated as absent. If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable. See [HTTP Headers](#request-headers)|
|x-min-v|header|string|optional|Minimum version of the API end point requested by the client. Must be set to a positive integer if provided. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable.|
|x-fapi-interaction-id|header|string|optional|An [RFC4122](https://tools.ietf.org/html/rfc4122) UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a [RFC4122] UUID value is required to be provided in the response header to track the interaction.|
|x-fapi-auth-date|header|string|optional|The time when the customer last logged in to the Data Recipient Software Product. Required for all resource calls (customer present and unattended). Not to be included for unauthenticated calls.|
|x-fapi-customer-ip-address|header|string|optional|The customer's original IP address if the customer is currently logged in to the Data Recipient Software Product. The presence of this header indicates that the API is being called in a customer present context. Not to be included for unauthenticated calls.|
|x-cds-client-headers|header|[Base64](#common-field-types)|optional|The customer's original standard http headers [Base64](#common-field-types) encoded, including the original User Agent header, if the customer is currently logged in to the Data Recipient Software Product. Mandatory for customer present calls.  Not required for unattended or unauthenticated calls.|

> Example responses

> 200 Response

```json
{
  "data": {
    "payeeId": "string",
    "nickname": "string",
    "description": "string",
    "type": "BILLER",
    "creationDate": "string",
    "payeeUType": "biller",
    "domestic": {
      "payeeAccountUType": "account",
      "account": {
        "accountName": "string",
        "bsb": "string",
        "accountNumber": "string"
      },
      "card": {
        "cardNumber": "string"
      },
      "payId": {
        "name": "string",
        "identifier": "string",
        "type": "ABN"
      }
    },
    "biller": {
      "billerCode": "string",
      "crn": "string",
      "billerName": "string"
    },
    "international": {
      "beneficiaryDetails": {
        "name": "string",
        "country": "string",
        "message": "string"
      },
      "bankDetails": {
        "country": "string",
        "accountNumber": "string",
        "bankAddress": {
          "name": "string",
          "address": "string"
        },
        "beneficiaryBankBIC": "string",
        "fedWireNumber": "string",
        "sortCode": "string",
        "chipNumber": "string",
        "routingNumber": "string",
        "legalEntityIdentifier": "string"
      }
    }
  },
  "links": {
    "self": "string"
  },
  "meta": {}
}
```

<h3 id="get-payee-detail-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[ResponseBankingPayeeById](#schemacdr-banking-apiresponsebankingpayeebyid)|
|4xx|[**Client Error**](https://tools.ietf.org/html/rfc7231#section-6.5)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Invalid Page Size](#error-400-field-invalid-page-size)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li><li>[404 - Unavailable Resource](#error-404-resource-unavailable)</li><li>[404 - Invalid Resource](#error-404-resource-invalid)</li><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li><li>[422 - Invalid Page](#error-422-field-invalid-page)</li></ul>|[ResponseErrorListV2](#schemacdr-banking-apiresponseerrorlistv2)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-v|string||The [version](#response-headers) of the API end point that the data holder has responded with.|
|200|x-fapi-interaction-id|string||An [RFC4122](https://tools.ietf.org/html/rfc4122) UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a [RFC4122] UUID value is required to be provided in the response header to track the interaction.|
|4xx|x-fapi-interaction-id|string||An [RFC4122](https://tools.ietf.org/html/rfc4122) UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a [RFC4122] UUID value is required to be provided in the response header to track the interaction.|

  
    
      <aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
<a href="#authorisation-scopes">bank:payees:read</a>
</aside>

    
  

## Get Products

<a id="opIdlistProducts"></a>

> Code samples

```http
GET https://data.holder.com.au/cds-au/v1/banking/products HTTP/1.1
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
  url: 'https://data.holder.com.au/cds-au/v1/banking/products',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`GET /banking/products`

Obtain a list of products that are currently openly offered to the market

Note that the results returned by this end point are expected to be ordered in descending order according to ``lastUpdated``.

### Conventions
In the product reference payloads there are a number of recurring conventions that are explained here, in one place.

#### Arrays Of Features

In the product detail payload there are a number of arrays articulating generic features, constraints, prices, etc. The intent of these arrays is as follows:

- Each element in an array has the same structure so that clients can reliably interpret the payloads
- Each element as a type element that is an enumeration of the specific aspect of a product being described, such as types of fees.
- Each element has a field name [additionalValue](#productfeaturetypedoc).  This is a generic field with contents that will vary based on the type of object being described. The contents of this field for the ADDITIONAL_CARDS feature is the number of cards allowed while the contents of this field for the MAX_LIMIT constraint would be the maximum credit limit allowed for the product.
- An element in these arrays of the same type may appear more than once. For instance, a product may offer two separate loyalty programs that the customer can select from. A fixed term mortgage may have different rates for different term lengths.
- An element in these arrays may contain an additionalInfo and additionalInfoUri field. The additionalInfo field is used to provide displayable text clarifying the purpose of the element in some way when the product is presented to a customer. The additionalInfoUri provides a link to externally hosted information specifically relevant to that feature of the product.
- Depending on the type of data being represented there may be additional specific fields.

#### URIs To More Information

As the complexities and nuances of a financial product can not easily be fully expressed in a data structure without a high degree of complexity it is necessary to provide additional reference information that a potential customer can access so that they are fully informed of the features and implications of the product. The payloads for product reference therefore contain numerous fields that are provided to allow the product holder to describe the product more fully using a web page hosted on their online channels.

These URIs do not need to all link to different pages. If desired, they can all link to a single hosted page and use difference HTML anchors to focus on a specific topic such as eligibility or fees.

#### Linkage To Accounts
From the moment that a customer applies for a product and an account is created the account and the product that spawned it will diverge.  Rates and features of the product may change and a discount may be negotiated for the account.

For this reason, while productCategory is a common field between accounts and products, there is no specific ID that can be used to link an account to a product within the regime.

Similarly, many of the fields and objects in the product payload will appear in the account detail payload but the structures and semantics are not identical as one refers to a product that can potentially be originated and one refers to an account that actual has been instantiated and created along with the associated decisions inherent in that process.

#### Dates
It is expected that data consumers needing this data will call relatively frequently to ensure the data they have is representative of the current offering from a bank.  To minimise the volume and frequency of these calls the ability to set a lastUpdated field with the date and time of the last update to this product is included.  A call for a list of products can then be filtered to only return products that have been updated since the last time that data was obtained using the updated-since query parameter.

In addition, the concept of effective date and time has also been included.  This allows for a product to be marked for obsolescence, or introduction, from a certain time without the need for an update to show that a product has been changed.  The inclusion of these dates also removes the need to represent deleted products in the payload.  Products that are no long offered can be marked not effective for a few weeks before they are then removed from the product set as an option entirely.

Obsolete versions: [v1](includes/obsolete/get-products-v1.html) [v2](includes/obsolete/get-products-v2.html)

###Endpoint Version
|   |  |
|---|--|
|Version|**3**

<h3 id="get-products-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|effective|query|string|optional|Allows for the filtering of products based on whether the current time is within the period of time defined as effective by the effectiveFrom and effectiveTo fields. Valid values are ‘CURRENT’, ‘FUTURE’ and ‘ALL’. If absent defaults to 'CURRENT'|
|updated-since|query|[DateTimeString](#common-field-types)|optional|Only include products that have been updated after the specified date and time. If absent defaults to include all products|
|brand|query|string|optional|Filter results based on a specific brand|
|product-category|query|string|optional|Used to filter results on the productCategory field applicable to accounts. Any one of the valid values for this field can be supplied. If absent then all accounts returned.|
|page|query|[PositiveInteger](#common-field-types)|optional|Page of results to request (standard pagination)|
|page-size|query|[PositiveInteger](#common-field-types)|optional|Page size to request. Default is 25 (standard pagination)|
|x-v|header|string|mandatory|Version of the API end point requested by the client. Must be set to a positive integer. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If the value of [x-min-v](#request-headers) is equal to or higher than the value of [x-v](#request-headers) then the [x-min-v](#request-headers) header should be treated as absent. If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable. See [HTTP Headers](#request-headers)|
|x-min-v|header|string|optional|Minimum version of the API end point requested by the client. Must be set to a positive integer if provided. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|effective|ALL|
|effective|CURRENT|
|effective|FUTURE|
|product-category|BUSINESS_LOANS|
|product-category|CRED_AND_CHRG_CARDS|
|product-category|LEASES|
|product-category|MARGIN_LOANS|
|product-category|OVERDRAFTS|
|product-category|PERS_LOANS|
|product-category|REGULATED_TRUST_ACCOUNTS|
|product-category|RESIDENTIAL_MORTGAGES|
|product-category|TERM_DEPOSITS|
|product-category|TRADE_FINANCE|
|product-category|TRANS_AND_SAVINGS_ACCOUNTS|
|product-category|TRAVEL_CARDS|

> Example responses

> 200 Response

```json
{
  "data": {
    "products": [
      {
        "productId": "string",
        "effectiveFrom": "string",
        "effectiveTo": "string",
        "lastUpdated": "string",
        "productCategory": "BUSINESS_LOANS",
        "name": "string",
        "description": "string",
        "brand": "string",
        "brandName": "string",
        "applicationUri": "string",
        "isTailored": true,
        "additionalInformation": {
          "overviewUri": "string",
          "termsUri": "string",
          "eligibilityUri": "string",
          "feesAndPricingUri": "string",
          "bundleUri": "string"
        },
        "cardArt": [
          {
            "title": "string",
            "imageUri": "string"
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

<h3 id="get-products-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[ResponseBankingProductList](#schemacdr-banking-apiresponsebankingproductlist)|
|4xx|[**Client Error**](https://tools.ietf.org/html/rfc7231#section-6.5)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Invalid Date](#error-400-field-invalid-date-time)</li><li>[400 - Invalid Page Size](#error-400-field-invalid-page-size)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li><li>[422 - Invalid Page](#error-422-field-invalid-page)</li></ul>|[ResponseErrorListV2](#schemacdr-banking-apiresponseerrorlistv2)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-v|string||The [version](#response-headers) of the API end point that the data holder has responded with.|

  
    <aside class="success">
This operation does not require authentication
</aside>

  

## Get Product Detail

<a id="opIdgetProductDetail"></a>

> Code samples

```http
GET https://data.holder.com.au/cds-au/v1/banking/products/{productId} HTTP/1.1
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
  url: 'https://data.holder.com.au/cds-au/v1/banking/products/{productId}',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`GET /banking/products/{productId}`

Obtain detailed information on a single product offered openly to the market.

Obsolete versions: [v1](includes/obsolete/get-product-detail-v1.html) [v2](includes/obsolete/get-product-detail-v2.html)

###Endpoint Version
|   |  |
|---|--|
|Version|**3**

<h3 id="get-product-detail-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|productId|path|[ASCIIString](#common-field-types)|mandatory|ID of the specific product requested|
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
    "productCategory": "BUSINESS_LOANS",
    "name": "string",
    "description": "string",
    "brand": "string",
    "brandName": "string",
    "applicationUri": "string",
    "isTailored": true,
    "additionalInformation": {
      "overviewUri": "string",
      "termsUri": "string",
      "eligibilityUri": "string",
      "feesAndPricingUri": "string",
      "bundleUri": "string"
    },
    "cardArt": [
      {
        "title": "string",
        "imageUri": "string"
      }
    ],
    "bundles": [
      {
        "name": "string",
        "description": "string",
        "additionalInfo": "string",
        "additionalInfoUri": "string",
        "productIds": [
          "string"
        ]
      }
    ],
    "features": [
      {
        "featureType": "ADDITIONAL_CARDS",
        "additionalValue": "string",
        "additionalInfo": "string",
        "additionalInfoUri": "string"
      }
    ],
    "constraints": [
      {
        "constraintType": "MAX_BALANCE",
        "additionalValue": "string",
        "additionalInfo": "string",
        "additionalInfoUri": "string"
      }
    ],
    "eligibility": [
      {
        "eligibilityType": "BUSINESS",
        "additionalValue": "string",
        "additionalInfo": "string",
        "additionalInfoUri": "string"
      }
    ],
    "fees": [
      {
        "name": "string",
        "feeType": "DEPOSIT",
        "amount": "string",
        "balanceRate": "string",
        "transactionRate": "string",
        "accruedRate": "string",
        "accrualFrequency": "string",
        "currency": "string",
        "additionalValue": "string",
        "additionalInfo": "string",
        "additionalInfoUri": "string",
        "discounts": [
          {
            "description": "string",
            "discountType": "BALANCE",
            "amount": "string",
            "balanceRate": "string",
            "transactionRate": "string",
            "accruedRate": "string",
            "feeRate": "string",
            "additionalValue": "string",
            "additionalInfo": "string",
            "additionalInfoUri": "string",
            "eligibility": [
              {
                "discountEligibilityType": "BUSINESS",
                "additionalValue": "string",
                "additionalInfo": "string",
                "additionalInfoUri": "string"
              }
            ]
          }
        ]
      }
    ],
    "depositRates": [
      {
        "depositRateType": "BONUS",
        "rate": "string",
        "calculationFrequency": "string",
        "applicationFrequency": "string",
        "tiers": [
          {
            "name": "string",
            "unitOfMeasure": "DAY",
            "minimumValue": 0,
            "maximumValue": 0,
            "rateApplicationMethod": "PER_TIER",
            "applicabilityConditions": {
              "additionalInfo": "string",
              "additionalInfoUri": "string"
            },
            "additionalInfo": "string",
            "additionalInfoUri": "string"
          }
        ],
        "additionalValue": "string",
        "additionalInfo": "string",
        "additionalInfoUri": "string"
      }
    ],
    "lendingRates": [
      {
        "lendingRateType": "BUNDLE_DISCOUNT_FIXED",
        "rate": "string",
        "comparisonRate": "string",
        "calculationFrequency": "string",
        "applicationFrequency": "string",
        "interestPaymentDue": "IN_ADVANCE",
        "repaymentType": "INTEREST_ONLY",
        "loanPurpose": "INVESTMENT",
        "tiers": [
          {
            "name": "string",
            "unitOfMeasure": "DAY",
            "minimumValue": 0,
            "maximumValue": 0,
            "rateApplicationMethod": "PER_TIER",
            "applicabilityConditions": {
              "additionalInfo": "string",
              "additionalInfoUri": "string"
            },
            "additionalInfo": "string",
            "additionalInfoUri": "string"
          }
        ],
        "additionalValue": "string",
        "additionalInfo": "string",
        "additionalInfoUri": "string"
      }
    ]
  },
  "links": {
    "self": "string"
  },
  "meta": {}
}
```

<h3 id="get-product-detail-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[ResponseBankingProductById](#schemacdr-banking-apiresponsebankingproductbyid)|
|4xx|[**Client Error**](https://tools.ietf.org/html/rfc7231#section-6.5)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li><li>[404 - Unavailable Resource](#error-404-resource-unavailable)</li><li>[404 - Invalid Resource](#error-404-resource-invalid)</li><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|[ResponseErrorListV2](#schemacdr-banking-apiresponseerrorlistv2)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-v|string||The [version](#response-headers) of the API end point that the data holder has responded with.|

  
    <aside class="success">
This operation does not require authentication
</aside>

  

<h2 class="schema-heading" id="cdr-banking-api-schemas">Schemas</h2>
<a class="schema-link" id="cdr-banking-api-schemas"></a>

<h2 class="schema-toc" id="tocSrequestaccountids">RequestAccountIds</h2>

<a id="schemacdr-banking-apirequestaccountids"></a>

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

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|data|object|mandatory|none|
|» accountIds|[string]|mandatory|none|
|meta|[Meta](#schemacdr-banking-apimeta)|optional|none|

<h2 class="schema-toc" id="tocSresponsebankingproductlist">ResponseBankingProductList</h2>

<a id="schemacdr-banking-apiresponsebankingproductlist"></a>

```json
{
  "data": {
    "products": [
      {
        "productId": "string",
        "effectiveFrom": "string",
        "effectiveTo": "string",
        "lastUpdated": "string",
        "productCategory": "BUSINESS_LOANS",
        "name": "string",
        "description": "string",
        "brand": "string",
        "brandName": "string",
        "applicationUri": "string",
        "isTailored": true,
        "additionalInformation": {
          "overviewUri": "string",
          "termsUri": "string",
          "eligibilityUri": "string",
          "feesAndPricingUri": "string",
          "bundleUri": "string"
        },
        "cardArt": [
          {
            "title": "string",
            "imageUri": "string"
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
|» products|[[BankingProductV3](#schemacdr-banking-apibankingproductv3)]|mandatory|The list of products returned.  If the filter results in an empty set then this array may have no records|
|links|[LinksPaginated](#schemacdr-banking-apilinkspaginated)|mandatory|none|
|meta|[MetaPaginated](#schemacdr-banking-apimetapaginated)|mandatory|none|

<h2 class="schema-toc" id="tocSbankingproductv3">BankingProductV3</h2>

<a id="schemacdr-banking-apibankingproductv3"></a>

```json
{
  "productId": "string",
  "effectiveFrom": "string",
  "effectiveTo": "string",
  "lastUpdated": "string",
  "productCategory": "BUSINESS_LOANS",
  "name": "string",
  "description": "string",
  "brand": "string",
  "brandName": "string",
  "applicationUri": "string",
  "isTailored": true,
  "additionalInformation": {
    "overviewUri": "string",
    "termsUri": "string",
    "eligibilityUri": "string",
    "feesAndPricingUri": "string",
    "bundleUri": "string"
  },
  "cardArt": [
    {
      "title": "string",
      "imageUri": "string"
    }
  ]
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|productId|[ASCIIString](#common-field-types)|mandatory|A data holder specific unique identifier for this product. This identifier must be unique to a product but does not otherwise need to adhere to ID permanence guidelines.|
|effectiveFrom|[DateTimeString](#common-field-types)|optional|The date and time from which this product is effective (ie. is available for origination).  Used to enable the articulation of products to the regime before they are available for customers to originate|
|effectiveTo|[DateTimeString](#common-field-types)|optional|The date and time at which this product will be retired and will no longer be offered.  Used to enable the managed deprecation of products|
|lastUpdated|[DateTimeString](#common-field-types)|mandatory|The last date and time that the information for this product was changed (or the creation date for the product if it has never been altered)|
|productCategory|[BankingProductCategory](#schemacdr-banking-apibankingproductcategory)|mandatory|The category to which a product or account belongs. See [here](#product-categories) for more details|
|name|string|mandatory|The display name of the product|
|description|string|mandatory|A description of the product|
|brand|string|mandatory|A label of the brand for the product. Able to be used for filtering. For data holders with single brands this value is still required|
|brandName|string|optional|An optional display name of the brand|
|applicationUri|[URIString](#common-field-types)|optional|A link to an application web page where this product can be applied for.|
|isTailored|[Boolean](#common-field-types)|mandatory|Indicates whether the product is specifically tailored to a circumstance.  In this case fees and prices are significantly negotiated depending on context. While all products are open to a degree of tailoring this flag indicates that tailoring is expected and thus that the provision of specific fees and rates is not applicable|
|additionalInformation|object|optional|Object that contains links to additional information on specific topics|
|» overviewUri|[URIString](#common-field-types)|optional|General overview of the product|
|» termsUri|[URIString](#common-field-types)|optional|Terms and conditions for the product|
|» eligibilityUri|[URIString](#common-field-types)|optional|Eligibility rules and criteria for the product|
|» feesAndPricingUri|[URIString](#common-field-types)|optional|Description of fees, pricing, discounts, exemptions and bonuses for the product|
|» bundleUri|[URIString](#common-field-types)|optional|Description of a bundle that this product can be part of|
|cardArt|[object]|optional|An array of card art images|
|» title|string|optional|Display label for the specific image|
|» imageUri|[URIString](#common-field-types)|mandatory|URI reference to a PNG, JPG or GIF image with proportions defined by ISO 7810 ID-1 and width no greater than 512 pixels. The URI reference may be a link or url-encoded data URI [RFC 2397](https://tools.ietf.org/html/rfc2397)|

<h2 class="schema-toc" id="tocSresponsebankingproductbyid">ResponseBankingProductById</h2>

<a id="schemacdr-banking-apiresponsebankingproductbyid"></a>

```json
{
  "data": {
    "productId": "string",
    "effectiveFrom": "string",
    "effectiveTo": "string",
    "lastUpdated": "string",
    "productCategory": "BUSINESS_LOANS",
    "name": "string",
    "description": "string",
    "brand": "string",
    "brandName": "string",
    "applicationUri": "string",
    "isTailored": true,
    "additionalInformation": {
      "overviewUri": "string",
      "termsUri": "string",
      "eligibilityUri": "string",
      "feesAndPricingUri": "string",
      "bundleUri": "string"
    },
    "cardArt": [
      {
        "title": "string",
        "imageUri": "string"
      }
    ],
    "bundles": [
      {
        "name": "string",
        "description": "string",
        "additionalInfo": "string",
        "additionalInfoUri": "string",
        "productIds": [
          "string"
        ]
      }
    ],
    "features": [
      {
        "featureType": "ADDITIONAL_CARDS",
        "additionalValue": "string",
        "additionalInfo": "string",
        "additionalInfoUri": "string"
      }
    ],
    "constraints": [
      {
        "constraintType": "MAX_BALANCE",
        "additionalValue": "string",
        "additionalInfo": "string",
        "additionalInfoUri": "string"
      }
    ],
    "eligibility": [
      {
        "eligibilityType": "BUSINESS",
        "additionalValue": "string",
        "additionalInfo": "string",
        "additionalInfoUri": "string"
      }
    ],
    "fees": [
      {
        "name": "string",
        "feeType": "DEPOSIT",
        "amount": "string",
        "balanceRate": "string",
        "transactionRate": "string",
        "accruedRate": "string",
        "accrualFrequency": "string",
        "currency": "string",
        "additionalValue": "string",
        "additionalInfo": "string",
        "additionalInfoUri": "string",
        "discounts": [
          {
            "description": "string",
            "discountType": "BALANCE",
            "amount": "string",
            "balanceRate": "string",
            "transactionRate": "string",
            "accruedRate": "string",
            "feeRate": "string",
            "additionalValue": "string",
            "additionalInfo": "string",
            "additionalInfoUri": "string",
            "eligibility": [
              {
                "discountEligibilityType": "BUSINESS",
                "additionalValue": "string",
                "additionalInfo": "string",
                "additionalInfoUri": "string"
              }
            ]
          }
        ]
      }
    ],
    "depositRates": [
      {
        "depositRateType": "BONUS",
        "rate": "string",
        "calculationFrequency": "string",
        "applicationFrequency": "string",
        "tiers": [
          {
            "name": "string",
            "unitOfMeasure": "DAY",
            "minimumValue": 0,
            "maximumValue": 0,
            "rateApplicationMethod": "PER_TIER",
            "applicabilityConditions": {
              "additionalInfo": "string",
              "additionalInfoUri": "string"
            },
            "additionalInfo": "string",
            "additionalInfoUri": "string"
          }
        ],
        "additionalValue": "string",
        "additionalInfo": "string",
        "additionalInfoUri": "string"
      }
    ],
    "lendingRates": [
      {
        "lendingRateType": "BUNDLE_DISCOUNT_FIXED",
        "rate": "string",
        "comparisonRate": "string",
        "calculationFrequency": "string",
        "applicationFrequency": "string",
        "interestPaymentDue": "IN_ADVANCE",
        "repaymentType": "INTEREST_ONLY",
        "loanPurpose": "INVESTMENT",
        "tiers": [
          {
            "name": "string",
            "unitOfMeasure": "DAY",
            "minimumValue": 0,
            "maximumValue": 0,
            "rateApplicationMethod": "PER_TIER",
            "applicabilityConditions": {
              "additionalInfo": "string",
              "additionalInfoUri": "string"
            },
            "additionalInfo": "string",
            "additionalInfoUri": "string"
          }
        ],
        "additionalValue": "string",
        "additionalInfo": "string",
        "additionalInfoUri": "string"
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
|data|[BankingProductDetailV3](#schemacdr-banking-apibankingproductdetailv3)|mandatory|none|
|links|[Links](#schemacdr-banking-apilinks)|mandatory|none|
|meta|[Meta](#schemacdr-banking-apimeta)|optional|none|

<h2 class="schema-toc" id="tocSbankingproductdetailv3">BankingProductDetailV3</h2>

<a id="schemacdr-banking-apibankingproductdetailv3"></a>

```json
{
  "productId": "string",
  "effectiveFrom": "string",
  "effectiveTo": "string",
  "lastUpdated": "string",
  "productCategory": "BUSINESS_LOANS",
  "name": "string",
  "description": "string",
  "brand": "string",
  "brandName": "string",
  "applicationUri": "string",
  "isTailored": true,
  "additionalInformation": {
    "overviewUri": "string",
    "termsUri": "string",
    "eligibilityUri": "string",
    "feesAndPricingUri": "string",
    "bundleUri": "string"
  },
  "cardArt": [
    {
      "title": "string",
      "imageUri": "string"
    }
  ],
  "bundles": [
    {
      "name": "string",
      "description": "string",
      "additionalInfo": "string",
      "additionalInfoUri": "string",
      "productIds": [
        "string"
      ]
    }
  ],
  "features": [
    {
      "featureType": "ADDITIONAL_CARDS",
      "additionalValue": "string",
      "additionalInfo": "string",
      "additionalInfoUri": "string"
    }
  ],
  "constraints": [
    {
      "constraintType": "MAX_BALANCE",
      "additionalValue": "string",
      "additionalInfo": "string",
      "additionalInfoUri": "string"
    }
  ],
  "eligibility": [
    {
      "eligibilityType": "BUSINESS",
      "additionalValue": "string",
      "additionalInfo": "string",
      "additionalInfoUri": "string"
    }
  ],
  "fees": [
    {
      "name": "string",
      "feeType": "DEPOSIT",
      "amount": "string",
      "balanceRate": "string",
      "transactionRate": "string",
      "accruedRate": "string",
      "accrualFrequency": "string",
      "currency": "string",
      "additionalValue": "string",
      "additionalInfo": "string",
      "additionalInfoUri": "string",
      "discounts": [
        {
          "description": "string",
          "discountType": "BALANCE",
          "amount": "string",
          "balanceRate": "string",
          "transactionRate": "string",
          "accruedRate": "string",
          "feeRate": "string",
          "additionalValue": "string",
          "additionalInfo": "string",
          "additionalInfoUri": "string",
          "eligibility": [
            {
              "discountEligibilityType": "BUSINESS",
              "additionalValue": "string",
              "additionalInfo": "string",
              "additionalInfoUri": "string"
            }
          ]
        }
      ]
    }
  ],
  "depositRates": [
    {
      "depositRateType": "BONUS",
      "rate": "string",
      "calculationFrequency": "string",
      "applicationFrequency": "string",
      "tiers": [
        {
          "name": "string",
          "unitOfMeasure": "DAY",
          "minimumValue": 0,
          "maximumValue": 0,
          "rateApplicationMethod": "PER_TIER",
          "applicabilityConditions": {
            "additionalInfo": "string",
            "additionalInfoUri": "string"
          },
          "additionalInfo": "string",
          "additionalInfoUri": "string"
        }
      ],
      "additionalValue": "string",
      "additionalInfo": "string",
      "additionalInfoUri": "string"
    }
  ],
  "lendingRates": [
    {
      "lendingRateType": "BUNDLE_DISCOUNT_FIXED",
      "rate": "string",
      "comparisonRate": "string",
      "calculationFrequency": "string",
      "applicationFrequency": "string",
      "interestPaymentDue": "IN_ADVANCE",
      "repaymentType": "INTEREST_ONLY",
      "loanPurpose": "INVESTMENT",
      "tiers": [
        {
          "name": "string",
          "unitOfMeasure": "DAY",
          "minimumValue": 0,
          "maximumValue": 0,
          "rateApplicationMethod": "PER_TIER",
          "applicabilityConditions": {
            "additionalInfo": "string",
            "additionalInfoUri": "string"
          },
          "additionalInfo": "string",
          "additionalInfoUri": "string"
        }
      ],
      "additionalValue": "string",
      "additionalInfo": "string",
      "additionalInfoUri": "string"
    }
  ]
}

```

### Properties

*allOf*

|Name|Type|Required|Description|
|---|---|---|---|
|*anonymous*|[BankingProductV3](#schemacdr-banking-apibankingproductv3)|mandatory|none|

*and*

|Name|Type|Required|Description|
|---|---|---|---|
|*anonymous*|object|mandatory|none|
|» bundles|[[BankingProductBundle](#schemacdr-banking-apibankingproductbundle)]|optional|An array of bundles that this product participates in.  Each bundle is described by free form information but also by a list of product IDs of the other products that are included in the bundle.  It is assumed that the current product is included in the bundle also|
|» features|[[BankingProductFeature](#schemacdr-banking-apibankingproductfeature)]|optional|Array of features available for the product|
|» constraints|[[BankingProductConstraint](#schemacdr-banking-apibankingproductconstraint)]|optional|Constraints on the application for or operation of the product such as minimum balances or limit thresholds|
|» eligibility|[[BankingProductEligibility](#schemacdr-banking-apibankingproducteligibility)]|optional|Eligibility criteria for the product|
|» fees|[[BankingProductFee](#schemacdr-banking-apibankingproductfee)]|optional|Fees applicable for the product|
|» depositRates|[[BankingProductDepositRate](#schemacdr-banking-apibankingproductdepositrate)]|optional|Interest rates available for deposits|
|» lendingRates|[[BankingProductLendingRateV2](#schemacdr-banking-apibankingproductlendingratev2)]|optional|Interest rates charged against lending balances|

<h2 class="schema-toc" id="tocSbankingproductbundle">BankingProductBundle</h2>

<a id="schemacdr-banking-apibankingproductbundle"></a>

```json
{
  "name": "string",
  "description": "string",
  "additionalInfo": "string",
  "additionalInfoUri": "string",
  "productIds": [
    "string"
  ]
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|name|string|mandatory|Name of the bundle|
|description|string|mandatory|Description of the bundle|
|additionalInfo|string|optional|Display text providing more information on the bundle|
|additionalInfoUri|[URIString](#common-field-types)|optional|Link to a web page with more information on the bundle criteria and benefits|
|productIds|[string]|optional|Array of product IDs for products included in the bundle that are available via the product end points.  Note that this array is not intended to represent a comprehensive model of the products included in the bundle and some products available for the bundle may not be available via the product reference end points|

<h2 class="schema-toc" id="tocSbankingproductfeature">BankingProductFeature</h2>

<a id="schemacdr-banking-apibankingproductfeature"></a>

```json
{
  "featureType": "ADDITIONAL_CARDS",
  "additionalValue": "string",
  "additionalInfo": "string",
  "additionalInfoUri": "string"
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|featureType|string|mandatory|The type of feature described|
|additionalValue|string|conditional|Generic field containing additional information relevant to the [featureType](#tocSproductfeaturetypedoc) specified. Whether mandatory or not is dependent on the value of the [featureType.](#tocSproductfeaturetypedoc)|
|additionalInfo|string|conditional|Display text providing more information on the feature. Mandatory if the [feature type](#tocSproductfeaturetypedoc) is set to OTHER|
|additionalInfoUri|[URIString](#common-field-types)|optional|Link to a web page with more information on this feature|

#### Enumerated Values

|Property|Value|
|---|---|
|featureType|ADDITIONAL_CARDS|
|featureType|BALANCE_TRANSFERS|
|featureType|BILL_PAYMENT|
|featureType|BONUS_REWARDS|
|featureType|CARD_ACCESS|
|featureType|COMPLEMENTARY_PRODUCT_DISCOUNTS|
|featureType|DIGITAL_BANKING|
|featureType|DIGITAL_WALLET|
|featureType|DONATE_INTEREST|
|featureType|FREE_TXNS|
|featureType|FREE_TXNS_ALLOWANCE|
|featureType|INSURANCE|
|featureType|INTEREST_FREE|
|featureType|INTEREST_FREE_TRANSFERS|
|featureType|LOYALTY_PROGRAM|
|featureType|NOTIFICATIONS|
|featureType|NPP_ENABLED|
|featureType|NPP_PAYID|
|featureType|OFFSET|
|featureType|OTHER|
|featureType|OVERDRAFT|
|featureType|REDRAW|
|featureType|UNLIMITED_TXNS|

<h2 class="schema-toc" id="tocSbankingproductconstraint">BankingProductConstraint</h2>

<a id="schemacdr-banking-apibankingproductconstraint"></a>

```json
{
  "constraintType": "MAX_BALANCE",
  "additionalValue": "string",
  "additionalInfo": "string",
  "additionalInfoUri": "string"
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|constraintType|string|mandatory|The type of constraint described.  See the next section for an overview of valid values and their meaning|
|additionalValue|string|conditional|Generic field containing additional information relevant to the [constraintType](#tocSproductconstrainttypedoc) specified.  Whether mandatory or not is dependent on the value of [constraintType](#tocSproductconstrainttypedoc)|
|additionalInfo|string|optional|Display text providing more information the constraint|
|additionalInfoUri|[URIString](#common-field-types)|optional|Link to a web page with more information on the constraint|

#### Enumerated Values

|Property|Value|
|---|---|
|constraintType|MAX_BALANCE|
|constraintType|MAX_LIMIT|
|constraintType|MIN_BALANCE|
|constraintType|MIN_LIMIT|
|constraintType|OPENING_BALANCE|

<h2 class="schema-toc" id="tocSbankingproducteligibility">BankingProductEligibility</h2>

<a id="schemacdr-banking-apibankingproducteligibility"></a>

```json
{
  "eligibilityType": "BUSINESS",
  "additionalValue": "string",
  "additionalInfo": "string",
  "additionalInfoUri": "string"
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|eligibilityType|string|mandatory|The type of eligibility criteria described.  See the next section for an overview of valid values and their meaning|
|additionalValue|string|conditional|Generic field containing additional information relevant to the [eligibilityType](#tocSproducteligibilitytypedoc) specified. Whether mandatory or not is dependent on the value of [eligibilityType](#tocSproducteligibilitytypedoc)|
|additionalInfo|string|conditional|Display text providing more information on the [eligibility](#tocSproducteligibilitytypedoc) criteria. Mandatory if the field is set to OTHER|
|additionalInfoUri|[URIString](#common-field-types)|optional|Link to a web page with more information on this eligibility criteria|

#### Enumerated Values

|Property|Value|
|---|---|
|eligibilityType|BUSINESS|
|eligibilityType|EMPLOYMENT_STATUS|
|eligibilityType|MAX_AGE|
|eligibilityType|MIN_AGE|
|eligibilityType|MIN_INCOME|
|eligibilityType|MIN_TURNOVER|
|eligibilityType|NATURAL_PERSON|
|eligibilityType|OTHER|
|eligibilityType|PENSION_RECIPIENT|
|eligibilityType|RESIDENCY_STATUS|
|eligibilityType|STAFF|
|eligibilityType|STUDENT|

<h2 class="schema-toc" id="tocSbankingproductfee">BankingProductFee</h2>

<a id="schemacdr-banking-apibankingproductfee"></a>

```json
{
  "name": "string",
  "feeType": "DEPOSIT",
  "amount": "string",
  "balanceRate": "string",
  "transactionRate": "string",
  "accruedRate": "string",
  "accrualFrequency": "string",
  "currency": "string",
  "additionalValue": "string",
  "additionalInfo": "string",
  "additionalInfoUri": "string",
  "discounts": [
    {
      "description": "string",
      "discountType": "BALANCE",
      "amount": "string",
      "balanceRate": "string",
      "transactionRate": "string",
      "accruedRate": "string",
      "feeRate": "string",
      "additionalValue": "string",
      "additionalInfo": "string",
      "additionalInfoUri": "string",
      "eligibility": [
        {
          "discountEligibilityType": "BUSINESS",
          "additionalValue": "string",
          "additionalInfo": "string",
          "additionalInfoUri": "string"
        }
      ]
    }
  ]
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|name|string|mandatory|Name of the fee|
|feeType|string|mandatory|The type of fee|
|amount|[AmountString](#common-field-types)|conditional|The amount charged for the fee. One of amount, balanceRate, transactionRate and accruedRate is mandatory unless the *feeType* "VARIABLE" is supplied|
|balanceRate|[RateString](#common-field-types)|conditional|A fee rate calculated based on a proportion of the balance. One of amount, balanceRate, transactionRate and accruedRate is mandatory unless the *feeType* "VARIABLE" is supplied.|
|transactionRate|[RateString](#common-field-types)|conditional|A fee rate calculated based on a proportion of a transaction. One of amount, balanceRate, transactionRate and accruedRate is mandatory unless the *feeType* "VARIABLE" is supplied|
|accruedRate|[RateString](#common-field-types)|conditional|A fee rate calculated based on a proportion of the calculated interest accrued on the account. One of amount, balanceRate, transactionRate and accruedRate is mandatory unless the *feeType* "VARIABLE" is supplied|
|accrualFrequency|[ExternalRef](#common-field-types)|optional|The indicative frequency with which the fee is calculated on the account. Only applies if balanceRate or accruedRate is also present. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)|
|currency|[CurrencyString](#common-field-types)|optional|The currency the fee will be charged in. Assumes AUD if absent|
|additionalValue|string|conditional|Generic field containing additional information relevant to the [feeType](#tocSproductfeetypedoc) specified. Whether mandatory or not is dependent on the value of [feeType](#tocSproductfeetypedoc)|
|additionalInfo|string|optional|Display text providing more information on the fee|
|additionalInfoUri|[URIString](#common-field-types)|optional|Link to a web page with more information on this fee|
|discounts|[[BankingProductDiscount](#schemacdr-banking-apibankingproductdiscount)]|optional|An optional list of discounts to this fee that may be available|

#### Enumerated Values

|Property|Value|
|---|---|
|feeType|DEPOSIT|
|feeType|EVENT|
|feeType|EXIT|
|feeType|PAYMENT|
|feeType|PERIODIC|
|feeType|PURCHASE|
|feeType|TRANSACTION|
|feeType|UPFRONT|
|feeType|VARIABLE|
|feeType|WITHDRAWAL|

<h2 class="schema-toc" id="tocSbankingproductdiscount">BankingProductDiscount</h2>

<a id="schemacdr-banking-apibankingproductdiscount"></a>

```json
{
  "description": "string",
  "discountType": "BALANCE",
  "amount": "string",
  "balanceRate": "string",
  "transactionRate": "string",
  "accruedRate": "string",
  "feeRate": "string",
  "additionalValue": "string",
  "additionalInfo": "string",
  "additionalInfoUri": "string",
  "eligibility": [
    {
      "discountEligibilityType": "BUSINESS",
      "additionalValue": "string",
      "additionalInfo": "string",
      "additionalInfoUri": "string"
    }
  ]
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|description|string|mandatory|Description of the discount|
|discountType|string|mandatory|The type of discount. See the next section for an overview of valid values and their meaning|
|amount|[AmountString](#common-field-types)|conditional|Dollar value of the discount. One of amount, balanceRate, transactionRate, accruedRate and feeRate is mandatory.|
|balanceRate|[RateString](#common-field-types)|conditional|A discount rate calculated based on a proportion of the balance. Note that the currency of the fee discount is expected to be the same as the currency of the fee itself. One of amount, balanceRate, transactionRate, accruedRate and feeRate is mandatory. Unless noted in additionalInfo, assumes the application and calculation frequency are the same as the corresponding fee|
|transactionRate|[RateString](#common-field-types)|conditional|A discount rate calculated based on a proportion of a transaction. Note that the currency of the fee discount is expected to be the same as the currency of the fee itself. One of amount, balanceRate, transactionRate, accruedRate and feeRate is mandatory|
|accruedRate|[RateString](#common-field-types)|conditional|A discount rate calculated based on a proportion of the calculated interest accrued on the account. Note that the currency of the fee discount is expected to be the same as the currency of the fee itself. One of amount, balanceRate, transactionRate, accruedRate and feeRate is mandatory. Unless noted in additionalInfo, assumes the application and calculation frequency are the same as the corresponding fee|
|feeRate|[RateString](#common-field-types)|conditional|A discount rate calculated based on a proportion of the fee to which this discount is attached. Note that the currency of the fee discount is expected to be the same as the currency of the fee itself. One of amount, balanceRate, transactionRate, accruedRate and feeRate is mandatory. Unless noted in additionalInfo, assumes the application and calculation frequency are the same as the corresponding fee|
|additionalValue|string|conditional|Generic field containing additional information relevant to the [discountType](#tocSproductdiscounttypedoc) specified. Whether mandatory or not is dependent on the value of [discountType](#tocSproductdiscounttypedoc)|
|additionalInfo|string|optional|Display text providing more information on the discount|
|additionalInfoUri|[URIString](#common-field-types)|optional|Link to a web page with more information on this discount|
|eligibility|[[BankingProductDiscountEligibility](#schemacdr-banking-apibankingproductdiscounteligibility)]|conditional|Eligibility constraints that apply to this discount. Mandatory if ``discountType`` is ``ELIGIBILITY_ONLY``.|

#### Enumerated Values

|Property|Value|
|---|---|
|discountType|BALANCE|
|discountType|DEPOSITS|
|discountType|ELIGIBILITY_ONLY|
|discountType|FEE_CAP|
|discountType|PAYMENTS|

<h2 class="schema-toc" id="tocSbankingproductdiscounteligibility">BankingProductDiscountEligibility</h2>

<a id="schemacdr-banking-apibankingproductdiscounteligibility"></a>

```json
{
  "discountEligibilityType": "BUSINESS",
  "additionalValue": "string",
  "additionalInfo": "string",
  "additionalInfoUri": "string"
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|discountEligibilityType|string|mandatory|The type of the specific eligibility constraint for a discount|
|additionalValue|string|conditional|Generic field containing additional information relevant to the [discountEligibilityType](#tocSproductdiscounteligibilitydoc) specified. Whether mandatory or not is dependent on the value of [discountEligibilityType](#tocSproductdiscounteligibilitydoc)|
|additionalInfo|string|conditional|Display text providing more information on this eligibility constraint. Whether mandatory or not is dependent on the value of [discountEligibilityType](#tocSproductdiscounteligibilitydoc)|
|additionalInfoUri|[URIString](#common-field-types)|optional|Link to a web page with more information on this eligibility constraint|

#### Enumerated Values

|Property|Value|
|---|---|
|discountEligibilityType|BUSINESS|
|discountEligibilityType|EMPLOYMENT_STATUS|
|discountEligibilityType|INTRODUCTORY|
|discountEligibilityType|MAX_AGE|
|discountEligibilityType|MIN_AGE|
|discountEligibilityType|MIN_INCOME|
|discountEligibilityType|MIN_TURNOVER|
|discountEligibilityType|NATURAL_PERSON|
|discountEligibilityType|OTHER|
|discountEligibilityType|PENSION_RECIPIENT|
|discountEligibilityType|RESIDENCY_STATUS|
|discountEligibilityType|STAFF|
|discountEligibilityType|STUDENT|

<h2 class="schema-toc" id="tocSbankingproductdepositrate">BankingProductDepositRate</h2>

<a id="schemacdr-banking-apibankingproductdepositrate"></a>

```json
{
  "depositRateType": "BONUS",
  "rate": "string",
  "calculationFrequency": "string",
  "applicationFrequency": "string",
  "tiers": [
    {
      "name": "string",
      "unitOfMeasure": "DAY",
      "minimumValue": 0,
      "maximumValue": 0,
      "rateApplicationMethod": "PER_TIER",
      "applicabilityConditions": {
        "additionalInfo": "string",
        "additionalInfoUri": "string"
      },
      "additionalInfo": "string",
      "additionalInfoUri": "string"
    }
  ],
  "additionalValue": "string",
  "additionalInfo": "string",
  "additionalInfoUri": "string"
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|depositRateType|string|mandatory|The type of rate (base, bonus, etc). See the next section for an overview of valid values and their meaning|
|rate|[RateString](#common-field-types)|mandatory|The rate to be applied|
|calculationFrequency|[ExternalRef](#common-field-types)|optional|The period after which the rate is applied to the balance to calculate the amount due for the period. Calculation of the amount is often daily (as balances may change) but accumulated until the total amount is 'applied' to the account (see applicationFrequency). Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)|
|applicationFrequency|[ExternalRef](#common-field-types)|optional|The period after which the calculated amount(s) (see calculationFrequency) are 'applied' (i.e. debited or credited) to the account. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)|
|tiers|[[BankingProductRateTierV3](#schemacdr-banking-apibankingproductratetierv3)]|optional|Rate tiers applicable for this rate|
|additionalValue|string|conditional|Generic field containing additional information relevant to the [depositRateType](#tocSproductdepositratetypedoc) specified. Whether mandatory or not is dependent on the value of [depositRateType](#tocSproductdepositratetypedoc)|
|additionalInfo|string|optional|Display text providing more information on the rate|
|additionalInfoUri|[URIString](#common-field-types)|optional|Link to a web page with more information on this rate|

#### Enumerated Values

|Property|Value|
|---|---|
|depositRateType|BONUS|
|depositRateType|BUNDLE_BONUS|
|depositRateType|FIXED|
|depositRateType|FLOATING|
|depositRateType|INTRODUCTORY|
|depositRateType|MARKET_LINKED|
|depositRateType|VARIABLE|

<h2 class="schema-toc" id="tocSbankingproductlendingratev2">BankingProductLendingRateV2</h2>

<a id="schemacdr-banking-apibankingproductlendingratev2"></a>

```json
{
  "lendingRateType": "BUNDLE_DISCOUNT_FIXED",
  "rate": "string",
  "comparisonRate": "string",
  "calculationFrequency": "string",
  "applicationFrequency": "string",
  "interestPaymentDue": "IN_ADVANCE",
  "repaymentType": "INTEREST_ONLY",
  "loanPurpose": "INVESTMENT",
  "tiers": [
    {
      "name": "string",
      "unitOfMeasure": "DAY",
      "minimumValue": 0,
      "maximumValue": 0,
      "rateApplicationMethod": "PER_TIER",
      "applicabilityConditions": {
        "additionalInfo": "string",
        "additionalInfoUri": "string"
      },
      "additionalInfo": "string",
      "additionalInfoUri": "string"
    }
  ],
  "additionalValue": "string",
  "additionalInfo": "string",
  "additionalInfoUri": "string"
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|lendingRateType|string|mandatory|The type of rate (fixed, variable, etc). See the next section for an overview of valid values and their meaning|
|rate|[RateString](#common-field-types)|mandatory|The rate to be applied|
|comparisonRate|[RateString](#common-field-types)|optional|A comparison rate equivalent for this rate|
|calculationFrequency|[ExternalRef](#common-field-types)|optional|The period after which the rate is applied to the balance to calculate the amount due for the period. Calculation of the amount is often daily (as balances may change) but accumulated until the total amount is 'applied' to the account (see applicationFrequency). Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)|
|applicationFrequency|[ExternalRef](#common-field-types)|optional|The period after which the calculated amount(s) (see calculationFrequency) are 'applied' (i.e. debited or credited) to the account. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)|
|interestPaymentDue|string|optional|When loan payments are due to be paid within each period. The investment benefit of earlier payments affect the rate that can be offered|
|repaymentType|string|optional|Options in place for repayments. If absent, the lending rate is applicable to all repayment types|
|loanPurpose|string|optional|The reason for taking out the loan. If absent, the lending rate is applicable to all loan purposes|
|tiers|[[BankingProductRateTierV3](#schemacdr-banking-apibankingproductratetierv3)]|optional|Rate tiers applicable for this rate|
|additionalValue|string|conditional|Generic field containing additional information relevant to the [lendingRateType](#tocSproductlendingratetypedoc) specified. Whether mandatory or not is dependent on the value of [lendingRateType](#tocSproductlendingratetypedoc)|
|additionalInfo|string|optional|Display text providing more information on the rate.|
|additionalInfoUri|[URIString](#common-field-types)|optional|Link to a web page with more information on this rate|

#### Enumerated Values

|Property|Value|
|---|---|
|lendingRateType|BUNDLE_DISCOUNT_FIXED|
|lendingRateType|BUNDLE_DISCOUNT_VARIABLE|
|lendingRateType|CASH_ADVANCE|
|lendingRateType|DISCOUNT|
|lendingRateType|FIXED|
|lendingRateType|FLOATING|
|lendingRateType|INTRODUCTORY|
|lendingRateType|MARKET_LINKED|
|lendingRateType|PENALTY|
|lendingRateType|PURCHASE|
|lendingRateType|VARIABLE|
|interestPaymentDue|IN_ADVANCE|
|interestPaymentDue|IN_ARREARS|
|repaymentType|INTEREST_ONLY|
|repaymentType|PRINCIPAL_AND_INTEREST|
|loanPurpose|INVESTMENT|
|loanPurpose|OWNER_OCCUPIED|

<h2 class="schema-toc" id="tocSbankingproductratetierv3">BankingProductRateTierV3</h2>

<a id="schemacdr-banking-apibankingproductratetierv3"></a>

```json
{
  "name": "string",
  "unitOfMeasure": "DAY",
  "minimumValue": 0,
  "maximumValue": 0,
  "rateApplicationMethod": "PER_TIER",
  "applicabilityConditions": {
    "additionalInfo": "string",
    "additionalInfoUri": "string"
  },
  "additionalInfo": "string",
  "additionalInfoUri": "string"
}

```

*Defines the criteria and conditions for which a rate applies*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|name|string|mandatory|A display name for the tier|
|unitOfMeasure|string|mandatory|The unit of measure that applies to the tierValueMinimum and tierValueMaximum values e.g. a **DOLLAR** amount. **PERCENT** (in the case of loan-to-value ratio or LVR). Tier term period representing a discrete number of **MONTH**'s or **DAY**'s (in the case of term deposit tiers)|
|minimumValue|[Number](#common-field-types)|mandatory|The number of tierUnitOfMeasure units that form the lower bound of the tier. The tier should be inclusive of this value|
|maximumValue|[Number](#common-field-types)|optional|The number of tierUnitOfMeasure units that form the upper bound of the tier or band. For a tier with a discrete value (as opposed to a range of values e.g. 1 month) this must be the same as tierValueMinimum. Where this is the same as the tierValueMinimum value of the next-higher tier the referenced tier should be exclusive of this value. For example a term deposit of 2 months falls into the upper tier of the following tiers: (1 – 2 months, 2 – 3 months). If absent the tier's range has no upper bound.|
|rateApplicationMethod|string|optional|The method used to calculate the amount to be applied using one or more tiers. A single rate may be applied to the entire balance or each applicable tier rate is applied to the portion of the balance that falls into that tier (referred to as 'bands' or 'steps')|
|applicabilityConditions|[BankingProductRateCondition](#schemacdr-banking-apibankingproductratecondition)|optional|Defines a condition for the applicability of a tiered rate|
|additionalInfo|string|optional|Display text providing more information on the rate tier.|
|additionalInfoUri|[URIString](#common-field-types)|optional|Link to a web page with more information on this rate tier|

#### Enumerated Values

|Property|Value|
|---|---|
|unitOfMeasure|DAY|
|unitOfMeasure|DOLLAR|
|unitOfMeasure|MONTH|
|unitOfMeasure|PERCENT|
|rateApplicationMethod|PER_TIER|
|rateApplicationMethod|WHOLE_BALANCE|

<h2 class="schema-toc" id="tocSbankingproductratecondition">BankingProductRateCondition</h2>

<a id="schemacdr-banking-apibankingproductratecondition"></a>

```json
{
  "additionalInfo": "string",
  "additionalInfoUri": "string"
}

```

*Defines a condition for the applicability of a tiered rate*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|additionalInfo|string|optional|Display text providing more information on the condition|
|additionalInfoUri|[URIString](#common-field-types)|optional|Link to a web page with more information on this condition|

<h2 class="schema-toc" id="tocSresponsebankingaccountlist">ResponseBankingAccountList</h2>

<a id="schemacdr-banking-apiresponsebankingaccountlist"></a>

```json
{
  "data": {
    "accounts": [
      {
        "accountId": "string",
        "creationDate": "string",
        "displayName": "string",
        "nickname": "string",
        "openStatus": "CLOSED",
        "isOwned": true,
        "maskedNumber": "string",
        "productCategory": "BUSINESS_LOANS",
        "productName": "string"
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
|» accounts|[[BankingAccount](#schemacdr-banking-apibankingaccount)]|mandatory|The list of accounts returned. If the filter results in an empty set then this array may have no records|
|links|[LinksPaginated](#schemacdr-banking-apilinkspaginated)|mandatory|none|
|meta|[MetaPaginated](#schemacdr-banking-apimetapaginated)|mandatory|none|

<h2 class="schema-toc" id="tocSbankingaccount">BankingAccount</h2>

<a id="schemacdr-banking-apibankingaccount"></a>

```json
{
  "accountId": "string",
  "creationDate": "string",
  "displayName": "string",
  "nickname": "string",
  "openStatus": "CLOSED",
  "isOwned": true,
  "maskedNumber": "string",
  "productCategory": "BUSINESS_LOANS",
  "productName": "string"
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|accountId|[ASCIIString](#common-field-types)|mandatory|A unique ID of the account adhering to the standards for ID permanence|
|creationDate|[DateString](#common-field-types)|optional|Date that the account was created (if known)|
|displayName|string|mandatory|The display name of the account as defined by the bank. This should not incorporate account numbers or PANs. If it does the values should be masked according to the rules of the MaskedAccountString common type.|
|nickname|string|optional|A customer supplied nick name for the account|
|openStatus|string|optional|Open or closed status for the account. If not present then OPEN is assumed|
|isOwned|[Boolean](#common-field-types)|optional|Flag indicating that the customer associated with the authorisation is an owner of the account. Does not indicate sole ownership, however. If not present then 'true' is assumed|
|maskedNumber|[MaskedAccountString](#common-field-types)|mandatory|A masked version of the account. Whether BSB/Account Number, Credit Card PAN or another number|
|productCategory|[BankingProductCategory](#schemacdr-banking-apibankingproductcategory)|mandatory|The category to which a product or account belongs. See [here](#product-categories) for more details|
|productName|string|mandatory|The unique identifier of the account as defined by the data holder (akin to model number for the account)|

#### Enumerated Values

|Property|Value|
|---|---|
|openStatus|CLOSED|
|openStatus|OPEN|

<h2 class="schema-toc" id="tocSresponsebankingaccountbyid">ResponseBankingAccountById</h2>

<a id="schemacdr-banking-apiresponsebankingaccountbyid"></a>

```json
{
  "data": {
    "accountId": "string",
    "creationDate": "string",
    "displayName": "string",
    "nickname": "string",
    "openStatus": "CLOSED",
    "isOwned": true,
    "maskedNumber": "string",
    "productCategory": "BUSINESS_LOANS",
    "productName": "string",
    "bsb": "string",
    "accountNumber": "string",
    "bundleName": "string",
    "specificAccountUType": "creditCard",
    "termDeposit": [
      {
        "lodgementDate": "string",
        "maturityDate": "string",
        "maturityAmount": "string",
        "maturityCurrency": "string",
        "maturityInstructions": "HOLD_ON_MATURITY"
      }
    ],
    "creditCard": {
      "minPaymentAmount": "string",
      "paymentDueAmount": "string",
      "paymentCurrency": "string",
      "paymentDueDate": "string"
    },
    "loan": {
      "originalStartDate": "string",
      "originalLoanAmount": "string",
      "originalLoanCurrency": "string",
      "loanEndDate": "string",
      "nextInstalmentDate": "string",
      "minInstalmentAmount": "string",
      "minInstalmentCurrency": "string",
      "maxRedraw": "string",
      "maxRedrawCurrency": "string",
      "minRedraw": "string",
      "minRedrawCurrency": "string",
      "offsetAccountEnabled": true,
      "offsetAccountIds": [
        "string"
      ],
      "repaymentType": "INTEREST_ONLY",
      "repaymentFrequency": "string"
    },
    "depositRate": "string",
    "lendingRate": "string",
    "depositRates": [
      {
        "depositRateType": "BONUS",
        "rate": "string",
        "calculationFrequency": "string",
        "applicationFrequency": "string",
        "tiers": [
          {
            "name": "string",
            "unitOfMeasure": "DAY",
            "minimumValue": 0,
            "maximumValue": 0,
            "rateApplicationMethod": "PER_TIER",
            "applicabilityConditions": {
              "additionalInfo": "string",
              "additionalInfoUri": "string"
            },
            "additionalInfo": "string",
            "additionalInfoUri": "string"
          }
        ],
        "additionalValue": "string",
        "additionalInfo": "string",
        "additionalInfoUri": "string"
      }
    ],
    "lendingRates": [
      {
        "lendingRateType": "BUNDLE_DISCOUNT_FIXED",
        "rate": "string",
        "comparisonRate": "string",
        "calculationFrequency": "string",
        "applicationFrequency": "string",
        "interestPaymentDue": "IN_ADVANCE",
        "repaymentType": "INTEREST_ONLY",
        "loanPurpose": "INVESTMENT",
        "tiers": [
          {
            "name": "string",
            "unitOfMeasure": "DAY",
            "minimumValue": 0,
            "maximumValue": 0,
            "rateApplicationMethod": "PER_TIER",
            "applicabilityConditions": {
              "additionalInfo": "string",
              "additionalInfoUri": "string"
            },
            "additionalInfo": "string",
            "additionalInfoUri": "string"
          }
        ],
        "additionalValue": "string",
        "additionalInfo": "string",
        "additionalInfoUri": "string"
      }
    ],
    "features": [
      {
        "featureType": "ADDITIONAL_CARDS",
        "additionalValue": "string",
        "additionalInfo": "string",
        "additionalInfoUri": "string",
        "isActivated": true
      }
    ],
    "fees": [
      {
        "name": "string",
        "feeType": "DEPOSIT",
        "amount": "string",
        "balanceRate": "string",
        "transactionRate": "string",
        "accruedRate": "string",
        "accrualFrequency": "string",
        "currency": "string",
        "additionalValue": "string",
        "additionalInfo": "string",
        "additionalInfoUri": "string",
        "discounts": [
          {
            "description": "string",
            "discountType": "BALANCE",
            "amount": "string",
            "balanceRate": "string",
            "transactionRate": "string",
            "accruedRate": "string",
            "feeRate": "string",
            "additionalValue": "string",
            "additionalInfo": "string",
            "additionalInfoUri": "string",
            "eligibility": [
              {
                "discountEligibilityType": "BUSINESS",
                "additionalValue": "string",
                "additionalInfo": "string",
                "additionalInfoUri": "string"
              }
            ]
          }
        ]
      }
    ],
    "addresses": [
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
|data|[BankingAccountDetail](#schemacdr-banking-apibankingaccountdetail)|mandatory|none|
|links|[Links](#schemacdr-banking-apilinks)|mandatory|none|
|meta|[Meta](#schemacdr-banking-apimeta)|optional|none|

<h2 class="schema-toc" id="tocSbankingaccountdetail">BankingAccountDetail</h2>

<a id="schemacdr-banking-apibankingaccountdetail"></a>

```json
{
  "accountId": "string",
  "creationDate": "string",
  "displayName": "string",
  "nickname": "string",
  "openStatus": "CLOSED",
  "isOwned": true,
  "maskedNumber": "string",
  "productCategory": "BUSINESS_LOANS",
  "productName": "string",
  "bsb": "string",
  "accountNumber": "string",
  "bundleName": "string",
  "specificAccountUType": "creditCard",
  "termDeposit": [
    {
      "lodgementDate": "string",
      "maturityDate": "string",
      "maturityAmount": "string",
      "maturityCurrency": "string",
      "maturityInstructions": "HOLD_ON_MATURITY"
    }
  ],
  "creditCard": {
    "minPaymentAmount": "string",
    "paymentDueAmount": "string",
    "paymentCurrency": "string",
    "paymentDueDate": "string"
  },
  "loan": {
    "originalStartDate": "string",
    "originalLoanAmount": "string",
    "originalLoanCurrency": "string",
    "loanEndDate": "string",
    "nextInstalmentDate": "string",
    "minInstalmentAmount": "string",
    "minInstalmentCurrency": "string",
    "maxRedraw": "string",
    "maxRedrawCurrency": "string",
    "minRedraw": "string",
    "minRedrawCurrency": "string",
    "offsetAccountEnabled": true,
    "offsetAccountIds": [
      "string"
    ],
    "repaymentType": "INTEREST_ONLY",
    "repaymentFrequency": "string"
  },
  "depositRate": "string",
  "lendingRate": "string",
  "depositRates": [
    {
      "depositRateType": "BONUS",
      "rate": "string",
      "calculationFrequency": "string",
      "applicationFrequency": "string",
      "tiers": [
        {
          "name": "string",
          "unitOfMeasure": "DAY",
          "minimumValue": 0,
          "maximumValue": 0,
          "rateApplicationMethod": "PER_TIER",
          "applicabilityConditions": {
            "additionalInfo": "string",
            "additionalInfoUri": "string"
          },
          "additionalInfo": "string",
          "additionalInfoUri": "string"
        }
      ],
      "additionalValue": "string",
      "additionalInfo": "string",
      "additionalInfoUri": "string"
    }
  ],
  "lendingRates": [
    {
      "lendingRateType": "BUNDLE_DISCOUNT_FIXED",
      "rate": "string",
      "comparisonRate": "string",
      "calculationFrequency": "string",
      "applicationFrequency": "string",
      "interestPaymentDue": "IN_ADVANCE",
      "repaymentType": "INTEREST_ONLY",
      "loanPurpose": "INVESTMENT",
      "tiers": [
        {
          "name": "string",
          "unitOfMeasure": "DAY",
          "minimumValue": 0,
          "maximumValue": 0,
          "rateApplicationMethod": "PER_TIER",
          "applicabilityConditions": {
            "additionalInfo": "string",
            "additionalInfoUri": "string"
          },
          "additionalInfo": "string",
          "additionalInfoUri": "string"
        }
      ],
      "additionalValue": "string",
      "additionalInfo": "string",
      "additionalInfoUri": "string"
    }
  ],
  "features": [
    {
      "featureType": "ADDITIONAL_CARDS",
      "additionalValue": "string",
      "additionalInfo": "string",
      "additionalInfoUri": "string",
      "isActivated": true
    }
  ],
  "fees": [
    {
      "name": "string",
      "feeType": "DEPOSIT",
      "amount": "string",
      "balanceRate": "string",
      "transactionRate": "string",
      "accruedRate": "string",
      "accrualFrequency": "string",
      "currency": "string",
      "additionalValue": "string",
      "additionalInfo": "string",
      "additionalInfoUri": "string",
      "discounts": [
        {
          "description": "string",
          "discountType": "BALANCE",
          "amount": "string",
          "balanceRate": "string",
          "transactionRate": "string",
          "accruedRate": "string",
          "feeRate": "string",
          "additionalValue": "string",
          "additionalInfo": "string",
          "additionalInfoUri": "string",
          "eligibility": [
            {
              "discountEligibilityType": "BUSINESS",
              "additionalValue": "string",
              "additionalInfo": "string",
              "additionalInfoUri": "string"
            }
          ]
        }
      ]
    }
  ],
  "addresses": [
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
  ]
}

```

### Properties

*allOf*

|Name|Type|Required|Description|
|---|---|---|---|
|*anonymous*|[BankingAccount](#schemacdr-banking-apibankingaccount)|mandatory|none|

*and*

|Name|Type|Required|Description|
|---|---|---|---|
|*anonymous*|object|mandatory|none|
|» bsb|string|optional|The unmasked BSB for the account. Is expected to be formatted as digits only with leading zeros included and no punctuation or spaces|
|» accountNumber|string|optional|The unmasked account number for the account. Should not be supplied if the account number is a PAN requiring PCI compliance. Is expected to be formatted as digits only with leading zeros included and no punctuation or spaces|
|» bundleName|string|optional|Optional field to indicate if this account is part of a bundle that is providing additional benefit for to the customer|
|» specificAccountUType|string|optional|The type of structure to present account specific fields.|
|» termDeposit|[[BankingTermDepositAccount](#schemacdr-banking-apibankingtermdepositaccount)]|conditional|none|
|» creditCard|[BankingCreditCardAccount](#schemacdr-banking-apibankingcreditcardaccount)|conditional|none|
|» loan|[BankingLoanAccount](#schemacdr-banking-apibankingloanaccount)|conditional|none|
|» depositRate|[RateString](#common-field-types)|optional|current rate to calculate interest earned being applied to deposit balances as it stands at the time of the API call|
|» lendingRate|[RateString](#common-field-types)|optional|The current rate to calculate interest payable being applied to lending balances as it stands at the time of the API call|
|» depositRates|[[BankingProductDepositRate](#schemacdr-banking-apibankingproductdepositrate)]|optional|Fully described deposit rates for this account based on the equivalent structure in Product Reference|
|» lendingRates|[[BankingProductLendingRateV2](#schemacdr-banking-apibankingproductlendingratev2)]|optional|Fully described deposit rates for this account based on the equivalent structure in Product Reference|
|» features|[allOf]|optional|Array of features of the account based on the equivalent structure in Product Reference with the following additional field|

*allOf*

|Name|Type|Required|Description|
|---|---|---|---|
|»» *anonymous*|[BankingProductFeature](#schemacdr-banking-apibankingproductfeature)|mandatory|none|

*and*

|Name|Type|Required|Description|
|---|---|---|---|
|»» *anonymous*|object|mandatory|none|
|»»» isActivated|[Boolean](#common-field-types)|optional|True if the feature is already activated and false if the feature is available for activation. Defaults to true if absent. (note this is an additional field appended to the feature object defined in the Product Reference payload)|

*continued*

|Name|Type|Required|Description|
|---|---|---|---|
|»» fees|[[BankingProductFee](#schemacdr-banking-apibankingproductfee)]|optional|Fees and charges applicable to the account based on the equivalent structure in Product Reference|
|»» addresses|[[CommonPhysicalAddress](#schemacdr-banking-apicommonphysicaladdress)]|optional|The addresses for the account to be used for correspondence|

#### Enumerated Values

|Property|Value|
|---|---|
|specificAccountUType|creditCard|
|specificAccountUType|loan|
|specificAccountUType|termDeposit|

<h2 class="schema-toc" id="tocSbankingtermdepositaccount">BankingTermDepositAccount</h2>

<a id="schemacdr-banking-apibankingtermdepositaccount"></a>

```json
{
  "lodgementDate": "string",
  "maturityDate": "string",
  "maturityAmount": "string",
  "maturityCurrency": "string",
  "maturityInstructions": "HOLD_ON_MATURITY"
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|lodgementDate|[DateString](#common-field-types)|mandatory|The lodgement date of the original deposit|
|maturityDate|[DateString](#common-field-types)|mandatory|Maturity date for the term deposit|
|maturityAmount|[AmountString](#common-field-types)|optional|Amount to be paid upon maturity. If absent it implies the amount to paid is variable and cannot currently be calculated|
|maturityCurrency|[CurrencyString](#common-field-types)|optional|If absent assumes AUD|
|maturityInstructions|string|mandatory|Current instructions on action to be taken at maturity. This includes default actions that may be specified in the terms and conditions for the product e.g. roll-over to the same term and frequency of interest payments|

#### Enumerated Values

|Property|Value|
|---|---|
|maturityInstructions|HOLD_ON_MATURITY|
|maturityInstructions|PAID_OUT_AT_MATURITY|
|maturityInstructions|ROLLED_OVER|

<h2 class="schema-toc" id="tocSbankingcreditcardaccount">BankingCreditCardAccount</h2>

<a id="schemacdr-banking-apibankingcreditcardaccount"></a>

```json
{
  "minPaymentAmount": "string",
  "paymentDueAmount": "string",
  "paymentCurrency": "string",
  "paymentDueDate": "string"
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|minPaymentAmount|[AmountString](#common-field-types)|mandatory|The minimum payment amount due for the next card payment|
|paymentDueAmount|[AmountString](#common-field-types)|mandatory|The amount due for the next card payment|
|paymentCurrency|[CurrencyString](#common-field-types)|optional|If absent assumes AUD|
|paymentDueDate|[DateString](#common-field-types)|mandatory|Date that the next payment for the card is due|

<h2 class="schema-toc" id="tocSbankingloanaccount">BankingLoanAccount</h2>

<a id="schemacdr-banking-apibankingloanaccount"></a>

```json
{
  "originalStartDate": "string",
  "originalLoanAmount": "string",
  "originalLoanCurrency": "string",
  "loanEndDate": "string",
  "nextInstalmentDate": "string",
  "minInstalmentAmount": "string",
  "minInstalmentCurrency": "string",
  "maxRedraw": "string",
  "maxRedrawCurrency": "string",
  "minRedraw": "string",
  "minRedrawCurrency": "string",
  "offsetAccountEnabled": true,
  "offsetAccountIds": [
    "string"
  ],
  "repaymentType": "INTEREST_ONLY",
  "repaymentFrequency": "string"
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|originalStartDate|[DateString](#common-field-types)|optional|Optional original start date for the loan|
|originalLoanAmount|[AmountString](#common-field-types)|optional|Optional original loan value|
|originalLoanCurrency|[CurrencyString](#common-field-types)|optional|If absent assumes AUD|
|loanEndDate|[DateString](#common-field-types)|mandatory|Date that the loan is due to be repaid in full|
|nextInstalmentDate|[DateString](#common-field-types)|mandatory|Next date that an instalment is required|
|minInstalmentAmount|[AmountString](#common-field-types)|optional|Minimum amount of next instalment|
|minInstalmentCurrency|[CurrencyString](#common-field-types)|optional|If absent assumes AUD|
|maxRedraw|[AmountString](#common-field-types)|optional|Maximum amount of funds that can be redrawn. If not present redraw is not available even if the feature exists for the account|
|maxRedrawCurrency|[CurrencyString](#common-field-types)|optional|If absent assumes AUD|
|minRedraw|[AmountString](#common-field-types)|optional|Minimum redraw amount|
|minRedrawCurrency|[CurrencyString](#common-field-types)|optional|If absent assumes AUD|
|offsetAccountEnabled|[Boolean](#common-field-types)|optional|Set to true if one or more offset accounts are configured for this loan account|
|offsetAccountIds|[string]|optional|The accountIDs of the configured offset accounts attached to this loan. Only offset accounts that can be accessed under the current authorisation should be included. It is expected behaviour that offsetAccountEnabled is set to true but the offsetAccountIds field is absent or empty. This represents a situation where an offset account exists but details can not be accessed under the current authorisation|
|repaymentType|string|optional|Options in place for repayments. If absent defaults to PRINCIPAL_AND_INTEREST|
|repaymentFrequency|[ExternalRef](#common-field-types)|mandatory|The expected or required repayment frequency. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)|

#### Enumerated Values

|Property|Value|
|---|---|
|repaymentType|INTEREST_ONLY|
|repaymentType|PRINCIPAL_AND_INTEREST|

<h2 class="schema-toc" id="tocSresponsebankingtransactionlist">ResponseBankingTransactionList</h2>

<a id="schemacdr-banking-apiresponsebankingtransactionlist"></a>

```json
{
  "data": {
    "transactions": [
      {
        "accountId": "string",
        "transactionId": "string",
        "isDetailAvailable": true,
        "type": "DIRECT_DEBIT",
        "status": "PENDING",
        "description": "string",
        "postingDateTime": "string",
        "valueDateTime": "string",
        "executionDateTime": "string",
        "amount": "string",
        "currency": "string",
        "reference": "string",
        "merchantName": "string",
        "merchantCategoryCode": "string",
        "billerCode": "string",
        "billerName": "string",
        "crn": "string",
        "apcaNumber": "string"
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
|» transactions|[[BankingTransaction](#schemacdr-banking-apibankingtransaction)]|mandatory|none|
|links|[LinksPaginated](#schemacdr-banking-apilinkspaginated)|mandatory|none|
|meta|[MetaPaginated](#schemacdr-banking-apimetapaginated)|mandatory|none|

<h2 class="schema-toc" id="tocSbankingtransaction">BankingTransaction</h2>

<a id="schemacdr-banking-apibankingtransaction"></a>

```json
{
  "accountId": "string",
  "transactionId": "string",
  "isDetailAvailable": true,
  "type": "DIRECT_DEBIT",
  "status": "PENDING",
  "description": "string",
  "postingDateTime": "string",
  "valueDateTime": "string",
  "executionDateTime": "string",
  "amount": "string",
  "currency": "string",
  "reference": "string",
  "merchantName": "string",
  "merchantCategoryCode": "string",
  "billerCode": "string",
  "billerName": "string",
  "crn": "string",
  "apcaNumber": "string"
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|accountId|[ASCIIString](#common-field-types)|mandatory|ID of the account for which transactions are provided|
|transactionId|[ASCIIString](#common-field-types)|conditional|A unique ID of the transaction adhering to the standards for ID permanence.  This is mandatory (through hashing if necessary) unless there are specific and justifiable technical reasons why a transaction cannot be uniquely identified for a particular account type. It is mandatory if `isDetailAvailable` is set to true.|
|isDetailAvailable|[Boolean](#common-field-types)|mandatory|True if extended information is available using the transaction detail end point. False if extended data is not available|
|type|string|mandatory|The type of the transaction|
|status|string|mandatory|Status of the transaction whether pending or posted. Note that there is currently no provision in the standards to guarantee the ability to correlate a pending transaction with an associated posted transaction|
|description|string|mandatory|The transaction description as applied by the financial institution|
|postingDateTime|[DateTimeString](#common-field-types)|conditional|The time the transaction was posted. This field is Mandatory if the transaction has status POSTED.  This is the time that appears on a standard statement|
|valueDateTime|[DateTimeString](#common-field-types)|optional|Date and time at which assets become available to the account owner in case of a credit entry, or cease to be available to the account owner in case of a debit transaction entry|
|executionDateTime|[DateTimeString](#common-field-types)|optional|The time the transaction was executed by the originating customer, if available|
|amount|[AmountString](#common-field-types)|mandatory|The value of the transaction. Negative values mean money was outgoing from the account|
|currency|[CurrencyString](#common-field-types)|optional|The currency for the transaction amount. AUD assumed if not present|
|reference|string|mandatory|The reference for the transaction provided by the originating institution. Empty string if no data provided|
|merchantName|string|optional|Name of the merchant for an outgoing payment to a merchant|
|merchantCategoryCode|string|optional|The merchant category code (or MCC) for an outgoing payment to a merchant|
|billerCode|string|optional|BPAY Biller Code for the transaction (if available)|
|billerName|string|optional|Name of the BPAY biller for the transaction (if available)|
|crn|string|conditional|BPAY CRN for the transaction (if available).<br/>Where the CRN contains sensitive information, it should be masked in line with how the Data Holder currently displays account identifiers in their existing online banking channels. If the contents of the CRN match the format of a Credit Card PAN they should be masked according to the rules applicable for MaskedPANString. If the contents are are otherwise sensitive, then it should be masked using the rules applicable for the MaskedAccountString common type.|
|apcaNumber|string|optional|6 Digit APCA number for the initiating institution. The field is fixed-width and padded with leading zeros if applicable.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|DIRECT_DEBIT|
|type|FEE|
|type|INTEREST_CHARGED|
|type|INTEREST_PAID|
|type|OTHER|
|type|PAYMENT|
|type|TRANSFER_INCOMING|
|type|TRANSFER_OUTGOING|
|status|PENDING|
|status|POSTED|

<h2 class="schema-toc" id="tocSresponsebankingtransactionbyid">ResponseBankingTransactionById</h2>

<a id="schemacdr-banking-apiresponsebankingtransactionbyid"></a>

```json
{
  "data": {
    "accountId": "string",
    "transactionId": "string",
    "isDetailAvailable": true,
    "type": "DIRECT_DEBIT",
    "status": "PENDING",
    "description": "string",
    "postingDateTime": "string",
    "valueDateTime": "string",
    "executionDateTime": "string",
    "amount": "string",
    "currency": "string",
    "reference": "string",
    "merchantName": "string",
    "merchantCategoryCode": "string",
    "billerCode": "string",
    "billerName": "string",
    "crn": "string",
    "apcaNumber": "string",
    "extendedData": {
      "payer": "string",
      "payee": "string",
      "extensionUType": "x2p101Payload",
      "x2p101Payload": {
        "extendedDescription": "string",
        "endToEndId": "string",
        "purposeCode": "string"
      },
      "service": "X2P1.01"
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
|data|[BankingTransactionDetail](#schemacdr-banking-apibankingtransactiondetail)|mandatory|none|
|links|[Links](#schemacdr-banking-apilinks)|mandatory|none|
|meta|[Meta](#schemacdr-banking-apimeta)|optional|none|

<h2 class="schema-toc" id="tocSbankingtransactiondetail">BankingTransactionDetail</h2>

<a id="schemacdr-banking-apibankingtransactiondetail"></a>

```json
{
  "accountId": "string",
  "transactionId": "string",
  "isDetailAvailable": true,
  "type": "DIRECT_DEBIT",
  "status": "PENDING",
  "description": "string",
  "postingDateTime": "string",
  "valueDateTime": "string",
  "executionDateTime": "string",
  "amount": "string",
  "currency": "string",
  "reference": "string",
  "merchantName": "string",
  "merchantCategoryCode": "string",
  "billerCode": "string",
  "billerName": "string",
  "crn": "string",
  "apcaNumber": "string",
  "extendedData": {
    "payer": "string",
    "payee": "string",
    "extensionUType": "x2p101Payload",
    "x2p101Payload": {
      "extendedDescription": "string",
      "endToEndId": "string",
      "purposeCode": "string"
    },
    "service": "X2P1.01"
  }
}

```

### Properties

*allOf*

|Name|Type|Required|Description|
|---|---|---|---|
|*anonymous*|[BankingTransaction](#schemacdr-banking-apibankingtransaction)|mandatory|none|

*and*

|Name|Type|Required|Description|
|---|---|---|---|
|*anonymous*|object|mandatory|none|
|» extendedData|object|mandatory|none|
|»» payer|string|conditional|Label of the originating payer. Mandatory for inbound payment|
|»» payee|string|conditional|Label of the target PayID.  Mandatory for an outbound payment. The name assigned to the BSB/Account Number or PayID (by the owner of the PayID)|
|»» extensionUType|string|optional|Optional extended data provided specific to transaction originated via NPP|
|»» x2p101Payload|object|optional|none|
|»»» extendedDescription|string|mandatory|An extended string description. Only present if specified by the extensionUType field|
|»»» endToEndId|string|optional|An end to end ID for the payment created at initiation|
|»»» purposeCode|string|optional|Purpose of the payment.  Format is defined by NPP standards for the x2p1.01 overlay service|
|»» service|string|mandatory|Identifier of the applicable overlay service. Valid values are: X2P1.01|

#### Enumerated Values

|Property|Value|
|---|---|
|extensionUType|x2p101Payload|
|service|X2P1.01|

<h2 class="schema-toc" id="tocSresponsebankingaccountsbalancelist">ResponseBankingAccountsBalanceList</h2>

<a id="schemacdr-banking-apiresponsebankingaccountsbalancelist"></a>

```json
{
  "data": {
    "balances": [
      {
        "accountId": "string",
        "currentBalance": "string",
        "availableBalance": "string",
        "creditLimit": "string",
        "amortisedLimit": "string",
        "currency": "string",
        "purses": [
          {
            "amount": "string",
            "currency": "string"
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
|» balances|[[BankingBalance](#schemacdr-banking-apibankingbalance)]|mandatory|The list of balances returned|
|links|[LinksPaginated](#schemacdr-banking-apilinkspaginated)|mandatory|none|
|meta|[MetaPaginated](#schemacdr-banking-apimetapaginated)|mandatory|none|

<h2 class="schema-toc" id="tocSresponsebankingaccountsbalancebyid">ResponseBankingAccountsBalanceById</h2>

<a id="schemacdr-banking-apiresponsebankingaccountsbalancebyid"></a>

```json
{
  "data": {
    "accountId": "string",
    "currentBalance": "string",
    "availableBalance": "string",
    "creditLimit": "string",
    "amortisedLimit": "string",
    "currency": "string",
    "purses": [
      {
        "amount": "string",
        "currency": "string"
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
|data|[BankingBalance](#schemacdr-banking-apibankingbalance)|mandatory|none|
|links|[Links](#schemacdr-banking-apilinks)|mandatory|none|
|meta|[Meta](#schemacdr-banking-apimeta)|optional|none|

<h2 class="schema-toc" id="tocSbankingbalance">BankingBalance</h2>

<a id="schemacdr-banking-apibankingbalance"></a>

```json
{
  "accountId": "string",
  "currentBalance": "string",
  "availableBalance": "string",
  "creditLimit": "string",
  "amortisedLimit": "string",
  "currency": "string",
  "purses": [
    {
      "amount": "string",
      "currency": "string"
    }
  ]
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|accountId|[ASCIIString](#common-field-types)|mandatory|A unique ID of the account adhering to the standards for ID permanence|
|currentBalance|[AmountString](#common-field-types)|mandatory|The balance of the account at this time. Should align to the balance available via other channels such as Internet Banking. Assumed to be negative if the customer has money owing|
|availableBalance|[AmountString](#common-field-types)|mandatory|Balance representing the amount of funds available for transfer. Assumed to be zero or positive|
|creditLimit|[AmountString](#common-field-types)|optional|Object representing the maximum amount of credit that is available for this account. Assumed to be zero if absent|
|amortisedLimit|[AmountString](#common-field-types)|optional|Object representing the available limit amortised according to payment schedule. Assumed to be zero if absent|
|currency|[CurrencyString](#common-field-types)|optional|The currency for the balance amounts. If absent assumed to be AUD|
|purses|[[BankingBalancePurse](#schemacdr-banking-apibankingbalancepurse)]|optional|Optional array of balances for the account in other currencies. Included to support accounts that support multi-currency purses such as Travel Cards|

<h2 class="schema-toc" id="tocSbankingbalancepurse">BankingBalancePurse</h2>

<a id="schemacdr-banking-apibankingbalancepurse"></a>

```json
{
  "amount": "string",
  "currency": "string"
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|amount|[AmountString](#common-field-types)|mandatory|The balance available for this additional currency purse|
|currency|[CurrencyString](#common-field-types)|optional|The currency for the purse|

<h2 class="schema-toc" id="tocSresponsebankingpayeelist">ResponseBankingPayeeList</h2>

<a id="schemacdr-banking-apiresponsebankingpayeelist"></a>

```json
{
  "data": {
    "payees": [
      {
        "payeeId": "string",
        "nickname": "string",
        "description": "string",
        "type": "BILLER",
        "creationDate": "string"
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
|» payees|[[BankingPayee](#schemacdr-banking-apibankingpayee)]|mandatory|The list of payees returned|
|links|[LinksPaginated](#schemacdr-banking-apilinkspaginated)|mandatory|none|
|meta|[MetaPaginated](#schemacdr-banking-apimetapaginated)|mandatory|none|

<h2 class="schema-toc" id="tocSresponsebankingpayeebyid">ResponseBankingPayeeById</h2>

<a id="schemacdr-banking-apiresponsebankingpayeebyid"></a>

```json
{
  "data": {
    "payeeId": "string",
    "nickname": "string",
    "description": "string",
    "type": "BILLER",
    "creationDate": "string",
    "payeeUType": "biller",
    "domestic": {
      "payeeAccountUType": "account",
      "account": {
        "accountName": "string",
        "bsb": "string",
        "accountNumber": "string"
      },
      "card": {
        "cardNumber": "string"
      },
      "payId": {
        "name": "string",
        "identifier": "string",
        "type": "ABN"
      }
    },
    "biller": {
      "billerCode": "string",
      "crn": "string",
      "billerName": "string"
    },
    "international": {
      "beneficiaryDetails": {
        "name": "string",
        "country": "string",
        "message": "string"
      },
      "bankDetails": {
        "country": "string",
        "accountNumber": "string",
        "bankAddress": {
          "name": "string",
          "address": "string"
        },
        "beneficiaryBankBIC": "string",
        "fedWireNumber": "string",
        "sortCode": "string",
        "chipNumber": "string",
        "routingNumber": "string",
        "legalEntityIdentifier": "string"
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
|data|[BankingPayeeDetail](#schemacdr-banking-apibankingpayeedetail)|mandatory|none|
|links|[Links](#schemacdr-banking-apilinks)|mandatory|none|
|meta|[Meta](#schemacdr-banking-apimeta)|optional|none|

<h2 class="schema-toc" id="tocSbankingpayee">BankingPayee</h2>

<a id="schemacdr-banking-apibankingpayee"></a>

```json
{
  "payeeId": "string",
  "nickname": "string",
  "description": "string",
  "type": "BILLER",
  "creationDate": "string"
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|payeeId|[ASCIIString](#common-field-types)|mandatory|ID of the payee adhering to the rules of ID permanence|
|nickname|string|mandatory|The short display name of the payee as provided by the customer. Where a customer has not provided a nickname, a display name derived by the bank for the payee consistent with existing digital banking channels|
|description|string|optional|A description of the payee provided by the customer|
|type|string|mandatory|The type of payee. DOMESTIC means a registered payee for domestic payments including NPP. INTERNATIONAL means a registered payee for international payments. BILLER means a registered payee for BPAY|
|creationDate|[DateString](#common-field-types)|optional|The date the payee was created by the customer|

#### Enumerated Values

|Property|Value|
|---|---|
|type|BILLER|
|type|DOMESTIC|
|type|INTERNATIONAL|

<h2 class="schema-toc" id="tocSbankingpayeedetail">BankingPayeeDetail</h2>

<a id="schemacdr-banking-apibankingpayeedetail"></a>

```json
{
  "payeeId": "string",
  "nickname": "string",
  "description": "string",
  "type": "BILLER",
  "creationDate": "string",
  "payeeUType": "biller",
  "domestic": {
    "payeeAccountUType": "account",
    "account": {
      "accountName": "string",
      "bsb": "string",
      "accountNumber": "string"
    },
    "card": {
      "cardNumber": "string"
    },
    "payId": {
      "name": "string",
      "identifier": "string",
      "type": "ABN"
    }
  },
  "biller": {
    "billerCode": "string",
    "crn": "string",
    "billerName": "string"
  },
  "international": {
    "beneficiaryDetails": {
      "name": "string",
      "country": "string",
      "message": "string"
    },
    "bankDetails": {
      "country": "string",
      "accountNumber": "string",
      "bankAddress": {
        "name": "string",
        "address": "string"
      },
      "beneficiaryBankBIC": "string",
      "fedWireNumber": "string",
      "sortCode": "string",
      "chipNumber": "string",
      "routingNumber": "string",
      "legalEntityIdentifier": "string"
    }
  }
}

```

### Properties

*allOf*

|Name|Type|Required|Description|
|---|---|---|---|
|*anonymous*|[BankingPayee](#schemacdr-banking-apibankingpayee)|mandatory|none|

*and*

|Name|Type|Required|Description|
|---|---|---|---|
|*anonymous*|object|mandatory|none|
|» payeeUType|string|mandatory|Type of object included that describes the payee in detail|
|» domestic|[BankingDomesticPayee](#schemacdr-banking-apibankingdomesticpayee)|conditional|none|
|» biller|[BankingBillerPayee](#schemacdr-banking-apibankingbillerpayee)|conditional|none|
|» international|[BankingInternationalPayee](#schemacdr-banking-apibankinginternationalpayee)|conditional|none|

#### Enumerated Values

|Property|Value|
|---|---|
|payeeUType|biller|
|payeeUType|domestic|
|payeeUType|international|

<h2 class="schema-toc" id="tocSbankingdomesticpayee">BankingDomesticPayee</h2>

<a id="schemacdr-banking-apibankingdomesticpayee"></a>

```json
{
  "payeeAccountUType": "account",
  "account": {
    "accountName": "string",
    "bsb": "string",
    "accountNumber": "string"
  },
  "card": {
    "cardNumber": "string"
  },
  "payId": {
    "name": "string",
    "identifier": "string",
    "type": "ABN"
  }
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|payeeAccountUType|string|mandatory|Type of account object included. Valid values are: **account** A standard Australian account defined by BSB/Account Number. **card** A credit or charge card to pay to (note that PANs are masked). **payId** A PayID recognised by NPP|
|account|[BankingDomesticPayeeAccount](#schemacdr-banking-apibankingdomesticpayeeaccount)|conditional|none|
|card|[BankingDomesticPayeeCard](#schemacdr-banking-apibankingdomesticpayeecard)|conditional|none|
|payId|[BankingDomesticPayeePayId](#schemacdr-banking-apibankingdomesticpayeepayid)|conditional|none|

#### Enumerated Values

|Property|Value|
|---|---|
|payeeAccountUType|account|
|payeeAccountUType|card|
|payeeAccountUType|payId|

<h2 class="schema-toc" id="tocSbankingdomesticpayeeaccount">BankingDomesticPayeeAccount</h2>

<a id="schemacdr-banking-apibankingdomesticpayeeaccount"></a>

```json
{
  "accountName": "string",
  "bsb": "string",
  "accountNumber": "string"
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|accountName|string|optional|Name of the account to pay to|
|bsb|string|mandatory|BSB of the account to pay to|
|accountNumber|string|mandatory|Number of the account to pay to|

<h2 class="schema-toc" id="tocSbankingdomesticpayeecard">BankingDomesticPayeeCard</h2>

<a id="schemacdr-banking-apibankingdomesticpayeecard"></a>

```json
{
  "cardNumber": "string"
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|cardNumber|[MaskedPANString](#common-field-types)|mandatory|Name of the account to pay to|

<h2 class="schema-toc" id="tocSbankingdomesticpayeepayid">BankingDomesticPayeePayId</h2>

<a id="schemacdr-banking-apibankingdomesticpayeepayid"></a>

```json
{
  "name": "string",
  "identifier": "string",
  "type": "ABN"
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|name|string|optional|The name assigned to the PayID by the owner of the PayID|
|identifier|string|mandatory|The identifier of the PayID (dependent on type)|
|type|string|mandatory|The type of the PayID|

#### Enumerated Values

|Property|Value|
|---|---|
|type|ABN|
|type|EMAIL|
|type|ORG_IDENTIFIER|
|type|TELEPHONE|

<h2 class="schema-toc" id="tocSbankingbillerpayee">BankingBillerPayee</h2>

<a id="schemacdr-banking-apibankingbillerpayee"></a>

```json
{
  "billerCode": "string",
  "crn": "string",
  "billerName": "string"
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|billerCode|string|mandatory|BPAY Biller Code of the Biller|
|crn|string|conditional|BPAY CRN of the Biller (if available).<br/>Where the CRN contains sensitive information, it should be masked in line with how the Data Holder currently displays account identifiers in their existing online banking channels. If the contents of the CRN match the format of a Credit Card PAN they should be masked according to the rules applicable for MaskedPANString. If the contents are are otherwise sensitive, then it should be masked using the rules applicable for the MaskedAccountString common type.|
|billerName|string|mandatory|Name of the Biller|

<h2 class="schema-toc" id="tocSbankinginternationalpayee">BankingInternationalPayee</h2>

<a id="schemacdr-banking-apibankinginternationalpayee"></a>

```json
{
  "beneficiaryDetails": {
    "name": "string",
    "country": "string",
    "message": "string"
  },
  "bankDetails": {
    "country": "string",
    "accountNumber": "string",
    "bankAddress": {
      "name": "string",
      "address": "string"
    },
    "beneficiaryBankBIC": "string",
    "fedWireNumber": "string",
    "sortCode": "string",
    "chipNumber": "string",
    "routingNumber": "string",
    "legalEntityIdentifier": "string"
  }
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|beneficiaryDetails|object|mandatory|none|
|» name|string|optional|Name of the beneficiary|
|» country|[ExternalRef](#common-field-types)|mandatory|Country where the beneficiary resides. A valid [ISO 3166 Alpha-3](https://www.iso.org/iso-3166-country-codes.html) country code|
|» message|string|optional|Response message for the payment|
|bankDetails|object|mandatory|none|
|» country|[ExternalRef](#common-field-types)|mandatory|Country of the recipient institution. A valid [ISO 3166 Alpha-3](https://www.iso.org/iso-3166-country-codes.html) country code|
|» accountNumber|string|mandatory|Account Targeted for payment|
|» bankAddress|object|optional|none|
|»» name|string|mandatory|Name of the recipient Bank|
|»» address|string|mandatory|Address of the recipient Bank|
|» beneficiaryBankBIC|[ExternalRef](#common-field-types)|optional|Swift bank code.  Aligns with standard [ISO 9362](https://www.iso.org/standard/60390.html)|
|» fedWireNumber|string|optional|Number for Fedwire payment (Federal Reserve Wire Network)|
|» sortCode|string|optional|Sort code used for account identification in some jurisdictions|
|» chipNumber|string|optional|Number for the Clearing House Interbank Payments System|
|» routingNumber|string|optional|International bank routing number|
|» legalEntityIdentifier|[ExternalRef](#common-field-types)|optional|The legal entity identifier (LEI) for the beneficiary.  Aligns with [ISO 17442](https://www.iso.org/standard/59771.html)|

<h2 class="schema-toc" id="tocSresponsebankingdirectdebitauthorisationlist">ResponseBankingDirectDebitAuthorisationList</h2>

<a id="schemacdr-banking-apiresponsebankingdirectdebitauthorisationlist"></a>

```json
{
  "data": {
    "directDebitAuthorisations": [
      {
        "accountId": "string",
        "authorisedEntity": {
          "description": "string",
          "financialInstitution": "string",
          "abn": "string",
          "acn": "string",
          "arbn": "string"
        },
        "lastDebitDateTime": "string",
        "lastDebitAmount": "string"
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
|» directDebitAuthorisations|[[BankingDirectDebit](#schemacdr-banking-apibankingdirectdebit)]|mandatory|The list of authorisations returned|
|links|[LinksPaginated](#schemacdr-banking-apilinkspaginated)|mandatory|none|
|meta|[MetaPaginated](#schemacdr-banking-apimetapaginated)|mandatory|none|

<h2 class="schema-toc" id="tocSbankingdirectdebit">BankingDirectDebit</h2>

<a id="schemacdr-banking-apibankingdirectdebit"></a>

```json
{
  "accountId": "string",
  "authorisedEntity": {
    "description": "string",
    "financialInstitution": "string",
    "abn": "string",
    "acn": "string",
    "arbn": "string"
  },
  "lastDebitDateTime": "string",
  "lastDebitAmount": "string"
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|accountId|[ASCIIString](#common-field-types)|mandatory|A unique ID of the account adhering to the standards for ID permanence.|
|authorisedEntity|[BankingAuthorisedEntity](#schemacdr-banking-apibankingauthorisedentity)|mandatory|none|
|lastDebitDateTime|[DateTimeString](#common-field-types)|optional|The date and time of the last debit executed under this authorisation|
|lastDebitAmount|[AmountString](#common-field-types)|optional|The amount of the last debit executed under this authorisation|

<h2 class="schema-toc" id="tocSbankingauthorisedentity">BankingAuthorisedEntity</h2>

<a id="schemacdr-banking-apibankingauthorisedentity"></a>

```json
{
  "description": "string",
  "financialInstitution": "string",
  "abn": "string",
  "acn": "string",
  "arbn": "string"
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|description|string|optional|Description of the authorised entity derived from previously executed direct debits|
|financialInstitution|string|conditional|Name of the financial institution through which the direct debit will be executed. Is required unless the payment is made via a credit card scheme|
|abn|string|optional|Australian Business Number for the authorised entity|
|acn|string|optional|Australian Company Number for the authorised entity|
|arbn|string|optional|Australian Registered Body Number for the authorised entity|

<h2 class="schema-toc" id="tocSresponsebankingscheduledpaymentslist">ResponseBankingScheduledPaymentsList</h2>

<a id="schemacdr-banking-apiresponsebankingscheduledpaymentslist"></a>

```json
{
  "data": {
    "scheduledPayments": [
      {
        "scheduledPaymentId": "string",
        "nickname": "string",
        "payerReference": "string",
        "payeeReference": "string",
        "status": "ACTIVE",
        "from": {
          "accountId": "string"
        },
        "paymentSet": [
          {
            "to": {
              "toUType": "accountId",
              "accountId": "string",
              "payeeId": "string",
              "nickname": "string",
              "payeeReference": "string",
              "domestic": {
                "payeeAccountUType": "account",
                "account": {
                  "accountName": "string",
                  "bsb": "string",
                  "accountNumber": "string"
                },
                "card": {
                  "cardNumber": "string"
                },
                "payId": {
                  "name": "string",
                  "identifier": "string",
                  "type": "ABN"
                }
              },
              "biller": {
                "billerCode": "string",
                "crn": "string",
                "billerName": "string"
              },
              "international": {
                "beneficiaryDetails": {
                  "name": "string",
                  "country": "string",
                  "message": "string"
                },
                "bankDetails": {
                  "country": "string",
                  "accountNumber": "string",
                  "bankAddress": {
                    "name": "string",
                    "address": "string"
                  },
                  "beneficiaryBankBIC": "string",
                  "fedWireNumber": "string",
                  "sortCode": "string",
                  "chipNumber": "string",
                  "routingNumber": "string",
                  "legalEntityIdentifier": "string"
                }
              }
            },
            "isAmountCalculated": true,
            "amount": "string",
            "currency": "string"
          }
        ],
        "recurrence": {
          "nextPaymentDate": "string",
          "recurrenceUType": "eventBased",
          "onceOff": {
            "paymentDate": "string"
          },
          "intervalSchedule": {
            "finalPaymentDate": "string",
            "paymentsRemaining": 1,
            "nonBusinessDayTreatment": "AFTER",
            "intervals": [
              {
                "interval": "string",
                "dayInInterval": "string"
              }
            ]
          },
          "lastWeekDay": {
            "finalPaymentDate": "string",
            "paymentsRemaining": 1,
            "interval": "string",
            "lastWeekDay": "FRI",
            "nonBusinessDayTreatment": "AFTER"
          },
          "eventBased": {
            "description": "string"
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
|data|object|mandatory|none|
|» scheduledPayments|[[BankingScheduledPayment](#schemacdr-banking-apibankingscheduledpayment)]|mandatory|The list of scheduled payments to return|
|links|[LinksPaginated](#schemacdr-banking-apilinkspaginated)|mandatory|none|
|meta|[MetaPaginated](#schemacdr-banking-apimetapaginated)|mandatory|none|

<h2 class="schema-toc" id="tocSbankingscheduledpayment">BankingScheduledPayment</h2>

<a id="schemacdr-banking-apibankingscheduledpayment"></a>

```json
{
  "scheduledPaymentId": "string",
  "nickname": "string",
  "payerReference": "string",
  "payeeReference": "string",
  "status": "ACTIVE",
  "from": {
    "accountId": "string"
  },
  "paymentSet": [
    {
      "to": {
        "toUType": "accountId",
        "accountId": "string",
        "payeeId": "string",
        "nickname": "string",
        "payeeReference": "string",
        "domestic": {
          "payeeAccountUType": "account",
          "account": {
            "accountName": "string",
            "bsb": "string",
            "accountNumber": "string"
          },
          "card": {
            "cardNumber": "string"
          },
          "payId": {
            "name": "string",
            "identifier": "string",
            "type": "ABN"
          }
        },
        "biller": {
          "billerCode": "string",
          "crn": "string",
          "billerName": "string"
        },
        "international": {
          "beneficiaryDetails": {
            "name": "string",
            "country": "string",
            "message": "string"
          },
          "bankDetails": {
            "country": "string",
            "accountNumber": "string",
            "bankAddress": {
              "name": "string",
              "address": "string"
            },
            "beneficiaryBankBIC": "string",
            "fedWireNumber": "string",
            "sortCode": "string",
            "chipNumber": "string",
            "routingNumber": "string",
            "legalEntityIdentifier": "string"
          }
        }
      },
      "isAmountCalculated": true,
      "amount": "string",
      "currency": "string"
    }
  ],
  "recurrence": {
    "nextPaymentDate": "string",
    "recurrenceUType": "eventBased",
    "onceOff": {
      "paymentDate": "string"
    },
    "intervalSchedule": {
      "finalPaymentDate": "string",
      "paymentsRemaining": 1,
      "nonBusinessDayTreatment": "AFTER",
      "intervals": [
        {
          "interval": "string",
          "dayInInterval": "string"
        }
      ]
    },
    "lastWeekDay": {
      "finalPaymentDate": "string",
      "paymentsRemaining": 1,
      "interval": "string",
      "lastWeekDay": "FRI",
      "nonBusinessDayTreatment": "AFTER"
    },
    "eventBased": {
      "description": "string"
    }
  }
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|scheduledPaymentId|[ASCIIString](#common-field-types)|mandatory|A unique ID of the scheduled payment adhering to the standards for ID permanence|
|nickname|string|optional|The short display name of the scheduled payment as provided by the customer if provided. Where a customer has not provided a nickname, a display name derived by the bank for the scheduled payment should be provided that is consistent with existing digital banking channels|
|payerReference|string|mandatory|The reference for the transaction that will be used by the originating institution for the purposes of constructing a statement narrative on the payer’s account. Empty string if no data provided|
|payeeReference|string|conditional|The reference for the transaction, if applicable, that will be provided by the originating institution for all payments in the payment set. Empty string if no data provided|
|status|string|mandatory|Indicates whether the schedule is currently active. The value SKIP is equivalent to ACTIVE except that the customer has requested the next normal occurrence to be skipped.|
|from|[BankingScheduledPaymentFrom](#schemacdr-banking-apibankingscheduledpaymentfrom)|mandatory|Object containing details of the source of the payment. Currently only specifies an account ID but provided as an object to facilitate future extensibility and consistency with the to object|
|paymentSet|[[BankingScheduledPaymentSet](#schemacdr-banking-apibankingscheduledpaymentset)]|mandatory|[The set of payment amounts and destination accounts for this payment accommodating multi-part payments. A single entry indicates a simple payment with one destination account. Must have at least one entry]|
|recurrence|[BankingScheduledPaymentRecurrence](#schemacdr-banking-apibankingscheduledpaymentrecurrence)|mandatory|Object containing the detail of the schedule for the payment|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ACTIVE|
|status|INACTIVE|
|status|SKIP|

<h2 class="schema-toc" id="tocSbankingscheduledpaymentset">BankingScheduledPaymentSet</h2>

<a id="schemacdr-banking-apibankingscheduledpaymentset"></a>

```json
{
  "to": {
    "toUType": "accountId",
    "accountId": "string",
    "payeeId": "string",
    "nickname": "string",
    "payeeReference": "string",
    "domestic": {
      "payeeAccountUType": "account",
      "account": {
        "accountName": "string",
        "bsb": "string",
        "accountNumber": "string"
      },
      "card": {
        "cardNumber": "string"
      },
      "payId": {
        "name": "string",
        "identifier": "string",
        "type": "ABN"
      }
    },
    "biller": {
      "billerCode": "string",
      "crn": "string",
      "billerName": "string"
    },
    "international": {
      "beneficiaryDetails": {
        "name": "string",
        "country": "string",
        "message": "string"
      },
      "bankDetails": {
        "country": "string",
        "accountNumber": "string",
        "bankAddress": {
          "name": "string",
          "address": "string"
        },
        "beneficiaryBankBIC": "string",
        "fedWireNumber": "string",
        "sortCode": "string",
        "chipNumber": "string",
        "routingNumber": "string",
        "legalEntityIdentifier": "string"
      }
    }
  },
  "isAmountCalculated": true,
  "amount": "string",
  "currency": "string"
}

```

*The set of payment amounts and destination accounts for this payment accommodating multi-part payments. A single entry indicates a simple payment with one destination account. Must have at least one entry*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|to|[BankingScheduledPaymentTo](#schemacdr-banking-apibankingscheduledpaymentto)|mandatory|Object containing details of the destination of the payment. Used to specify a variety of payment destination types|
|isAmountCalculated|[Boolean](#common-field-types)|optional|Flag indicating whether the amount of the payment is calculated based on the context of the event. For instance a payment to reduce the balance of a credit card to zero. If absent then false is assumed|
|amount|[AmountString](#common-field-types)|conditional|The amount of the next payment if known. Mandatory unless the isAmountCalculated field is set to true. Must be zero or positive if present|
|currency|[CurrencyString](#common-field-types)|optional|The currency for the payment. AUD assumed if not present|

<h2 class="schema-toc" id="tocSbankingscheduledpaymentto">BankingScheduledPaymentTo</h2>

<a id="schemacdr-banking-apibankingscheduledpaymentto"></a>

```json
{
  "toUType": "accountId",
  "accountId": "string",
  "payeeId": "string",
  "nickname": "string",
  "payeeReference": "string",
  "domestic": {
    "payeeAccountUType": "account",
    "account": {
      "accountName": "string",
      "bsb": "string",
      "accountNumber": "string"
    },
    "card": {
      "cardNumber": "string"
    },
    "payId": {
      "name": "string",
      "identifier": "string",
      "type": "ABN"
    }
  },
  "biller": {
    "billerCode": "string",
    "crn": "string",
    "billerName": "string"
  },
  "international": {
    "beneficiaryDetails": {
      "name": "string",
      "country": "string",
      "message": "string"
    },
    "bankDetails": {
      "country": "string",
      "accountNumber": "string",
      "bankAddress": {
        "name": "string",
        "address": "string"
      },
      "beneficiaryBankBIC": "string",
      "fedWireNumber": "string",
      "sortCode": "string",
      "chipNumber": "string",
      "routingNumber": "string",
      "legalEntityIdentifier": "string"
    }
  }
}

```

*Object containing details of the destination of the payment. Used to specify a variety of payment destination types*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|toUType|string|mandatory|The type of object provided that specifies the destination of the funds for the payment.|
|accountId|[ASCIIString](#common-field-types)|conditional|Present if toUType is set to accountId. Indicates that the payment is to another account that is accessible under the current consent|
|payeeId|[ASCIIString](#common-field-types)|conditional|Present if toUType is set to payeeId. Indicates that the payment is to registered payee that can be accessed using the payee end point. If the Bank Payees scope has not been consented to then a payeeId should not be provided and the full payee details should be provided instead|
|nickname|string|conditional|The short display name of the payee as provided by the customer unless toUType is set to payeeId. Where a customer has not provided a nickname, a display name derived by the bank for payee should be provided that is consistent with existing digital banking channels|
|payeeReference|string|conditional|The reference for the transaction, if applicable, that will be provided by the originating institution for the specific payment. If not empty, it overrides the value provided at the BankingScheduledPayment level.|
|domestic|[BankingDomesticPayee](#schemacdr-banking-apibankingdomesticpayee)|conditional|none|
|biller|[BankingBillerPayee](#schemacdr-banking-apibankingbillerpayee)|conditional|none|
|international|[BankingInternationalPayee](#schemacdr-banking-apibankinginternationalpayee)|conditional|none|

#### Enumerated Values

|Property|Value|
|---|---|
|toUType|accountId|
|toUType|biller|
|toUType|domestic|
|toUType|international|
|toUType|payeeId|

<h2 class="schema-toc" id="tocSbankingscheduledpaymentfrom">BankingScheduledPaymentFrom</h2>

<a id="schemacdr-banking-apibankingscheduledpaymentfrom"></a>

```json
{
  "accountId": "string"
}

```

*Object containing details of the source of the payment. Currently only specifies an account ID but provided as an object to facilitate future extensibility and consistency with the to object*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|accountId|[ASCIIString](#common-field-types)|mandatory|ID of the account that is the source of funds for the payment|

<h2 class="schema-toc" id="tocSbankingscheduledpaymentrecurrence">BankingScheduledPaymentRecurrence</h2>

<a id="schemacdr-banking-apibankingscheduledpaymentrecurrence"></a>

```json
{
  "nextPaymentDate": "string",
  "recurrenceUType": "eventBased",
  "onceOff": {
    "paymentDate": "string"
  },
  "intervalSchedule": {
    "finalPaymentDate": "string",
    "paymentsRemaining": 1,
    "nonBusinessDayTreatment": "AFTER",
    "intervals": [
      {
        "interval": "string",
        "dayInInterval": "string"
      }
    ]
  },
  "lastWeekDay": {
    "finalPaymentDate": "string",
    "paymentsRemaining": 1,
    "interval": "string",
    "lastWeekDay": "FRI",
    "nonBusinessDayTreatment": "AFTER"
  },
  "eventBased": {
    "description": "string"
  }
}

```

*Object containing the detail of the schedule for the payment*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|nextPaymentDate|[DateString](#common-field-types)|optional|The date of the next payment under the recurrence schedule|
|recurrenceUType|string|mandatory|The type of recurrence used to define the schedule|
|onceOff|[BankingScheduledPaymentRecurrenceOnceOff](#schemacdr-banking-apibankingscheduledpaymentrecurrenceonceoff)|conditional|Indicates that the payment is a once off payment on a specific future date. Mandatory if recurrenceUType is set to onceOff|
|intervalSchedule|[BankingScheduledPaymentRecurrenceIntervalSchedule](#schemacdr-banking-apibankingscheduledpaymentrecurrenceintervalschedule)|conditional|Indicates that the schedule of payments is defined by a series of intervals. Mandatory if recurrenceUType is set to intervalSchedule|
|lastWeekDay|[BankingScheduledPaymentRecurrenceLastWeekday](#schemacdr-banking-apibankingscheduledpaymentrecurrencelastweekday)|conditional|Indicates that the schedule of payments is defined according to the last occurrence of a specific weekday in an interval. Mandatory if recurrenceUType is set to lastWeekDay|
|eventBased|[BankingScheduledPaymentRecurrenceEventBased](#schemacdr-banking-apibankingscheduledpaymentrecurrenceeventbased)|conditional|Indicates that the schedule of payments is defined according to an external event that cannot be predetermined. Mandatory if recurrenceUType is set to eventBased|

#### Enumerated Values

|Property|Value|
|---|---|
|recurrenceUType|eventBased|
|recurrenceUType|intervalSchedule|
|recurrenceUType|lastWeekDay|
|recurrenceUType|onceOff|

<h2 class="schema-toc" id="tocSbankingscheduledpaymentrecurrenceonceoff">BankingScheduledPaymentRecurrenceOnceOff</h2>

<a id="schemacdr-banking-apibankingscheduledpaymentrecurrenceonceoff"></a>

```json
{
  "paymentDate": "string"
}

```

*Indicates that the payment is a once off payment on a specific future date. Mandatory if recurrenceUType is set to onceOff*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|paymentDate|[DateString](#common-field-types)|mandatory|The scheduled date for the once off payment|

<h2 class="schema-toc" id="tocSbankingscheduledpaymentrecurrenceintervalschedule">BankingScheduledPaymentRecurrenceIntervalSchedule</h2>

<a id="schemacdr-banking-apibankingscheduledpaymentrecurrenceintervalschedule"></a>

```json
{
  "finalPaymentDate": "string",
  "paymentsRemaining": 1,
  "nonBusinessDayTreatment": "AFTER",
  "intervals": [
    {
      "interval": "string",
      "dayInInterval": "string"
    }
  ]
}

```

*Indicates that the schedule of payments is defined by a series of intervals. Mandatory if recurrenceUType is set to intervalSchedule*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|finalPaymentDate|[DateString](#common-field-types)|optional|The limit date after which no more payments should be made using this schedule. If both finalPaymentDate and paymentsRemaining are present then payments will stop according to the most constraining value. If neither field is present the payments will continue indefinitely|
|paymentsRemaining|[PositiveInteger](#common-field-types)|optional|Indicates the number of payments remaining in the schedule. If both finalPaymentDate and paymentsRemaining are present then payments will stop according to the most constraining value, If neither field is present the payments will continue indefinitely|
|nonBusinessDayTreatment|string|optional|Enumerated field giving the treatment where a scheduled payment date is not a business day. If absent assumed to be ON.<br/>**AFTER** - If a scheduled payment date is a non-business day the payment will be made on the first business day after the scheduled payment date.<br/>**BEFORE** - If a scheduled payment date is a non-business day the payment will be made on the first business day before the scheduled payment date.<br/>**ON** - If a scheduled payment date is a non-business day the payment will be made on that day regardless.<br/>**ONLY** - Payments only occur on business days. If a scheduled payment date is a non-business day the payment will be ignored|
|intervals|[[BankingScheduledPaymentInterval](#schemacdr-banking-apibankingscheduledpaymentinterval)]|mandatory|An array of interval objects defining the payment schedule.  Each entry in the array is additive, in that it adds payments to the overall payment schedule.  If multiple intervals result in a payment on the same day then only one payment will be made. Must have at least one entry|

#### Enumerated Values

|Property|Value|
|---|---|
|nonBusinessDayTreatment|AFTER|
|nonBusinessDayTreatment|BEFORE|
|nonBusinessDayTreatment|ON|
|nonBusinessDayTreatment|ONLY|

<h2 class="schema-toc" id="tocSbankingscheduledpaymentinterval">BankingScheduledPaymentInterval</h2>

<a id="schemacdr-banking-apibankingscheduledpaymentinterval"></a>

```json
{
  "interval": "string",
  "dayInInterval": "string"
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|interval|[ExternalRef](#common-field-types)|mandatory|An interval for the payment. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations)  (excludes recurrence syntax) with components less than a day in length ignored. This duration defines the period between payments starting with nextPaymentDate|
|dayInInterval|[ExternalRef](#common-field-types)|optional|Uses an interval to define the ordinal day within the interval defined by the interval field on which the payment occurs. If the resulting duration is 0 days in length or larger than the number of days in the interval then the payment will occur on the last day of the interval. A duration of 1 day indicates the first day of the interval. If absent the assumed value is P1D. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax) with components less than a day in length ignored. The first day of a week is considered to be Monday.|

<h2 class="schema-toc" id="tocSbankingscheduledpaymentrecurrencelastweekday">BankingScheduledPaymentRecurrenceLastWeekday</h2>

<a id="schemacdr-banking-apibankingscheduledpaymentrecurrencelastweekday"></a>

```json
{
  "finalPaymentDate": "string",
  "paymentsRemaining": 1,
  "interval": "string",
  "lastWeekDay": "FRI",
  "nonBusinessDayTreatment": "AFTER"
}

```

*Indicates that the schedule of payments is defined according to the last occurrence of a specific weekday in an interval. Mandatory if recurrenceUType is set to lastWeekDay*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|finalPaymentDate|[DateString](#common-field-types)|optional|The limit date after which no more payments should be made using this schedule. If both finalPaymentDate and paymentsRemaining are present then payments will stop according to the most constraining value. If neither field is present the payments will continue indefinitely|
|paymentsRemaining|[PositiveInteger](#common-field-types)|optional|Indicates the number of payments remaining in the schedule. If both finalPaymentDate and paymentsRemaining are present then payments will stop according to the most constraining value. If neither field is present the payments will continue indefinitely|
|interval|[ExternalRef](#common-field-types)|mandatory|The interval for the payment. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax) with components less than a day in length ignored. This duration defines the period between payments starting with nextPaymentDate|
|lastWeekDay|string|mandatory|The weekDay specified. The payment will occur on the last occurrence of this weekday in the interval.|
|nonBusinessDayTreatment|string|optional|Enumerated field giving the treatment where a scheduled payment date is not a business day. If absent assumed to be ON.<br/>**AFTER** - If a scheduled payment date is a non-business day the payment will be made on the first business day after the scheduled payment date.<br/>**BEFORE** - If a scheduled payment date is a non-business day the payment will be made on the first business day before the scheduled payment date.<br/>**ON** - If a scheduled payment date is a non-business day the payment will be made on that day regardless.<br/>**ONLY** - Payments only occur on business days. If a scheduled payment date is a non-business day the payment will be ignored|

#### Enumerated Values

|Property|Value|
|---|---|
|lastWeekDay|FRI|
|lastWeekDay|MON|
|lastWeekDay|SAT|
|lastWeekDay|SUN|
|lastWeekDay|THU|
|lastWeekDay|TUE|
|lastWeekDay|WED|
|nonBusinessDayTreatment|AFTER|
|nonBusinessDayTreatment|BEFORE|
|nonBusinessDayTreatment|ON|
|nonBusinessDayTreatment|ONLY|

<h2 class="schema-toc" id="tocSbankingscheduledpaymentrecurrenceeventbased">BankingScheduledPaymentRecurrenceEventBased</h2>

<a id="schemacdr-banking-apibankingscheduledpaymentrecurrenceeventbased"></a>

```json
{
  "description": "string"
}

```

*Indicates that the schedule of payments is defined according to an external event that cannot be predetermined. Mandatory if recurrenceUType is set to eventBased*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|description|string|mandatory|Description of the event and conditions that will result in the payment. Expected to be formatted for display to a customer|

<h2 class="schema-toc" id="tocScommonphysicaladdress">CommonPhysicalAddress</h2>

<a id="schemacdr-banking-apicommonphysicaladdress"></a>

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
|simple|[CommonSimpleAddress](#schemacdr-banking-apicommonsimpleaddress)|conditional|none|
|paf|[CommonPAFAddress](#schemacdr-banking-apicommonpafaddress)|conditional|Australian address formatted according to the file format defined by the [PAF file format](https://auspost.com.au/content/dam/auspost_corp/media/documents/australia-post-data-guide.pdf)|

#### Enumerated Values

|Property|Value|
|---|---|
|addressUType|paf|
|addressUType|simple|

<h2 class="schema-toc" id="tocScommonsimpleaddress">CommonSimpleAddress</h2>

<a id="schemacdr-banking-apicommonsimpleaddress"></a>

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

<h2 class="schema-toc" id="tocScommonpafaddress">CommonPAFAddress</h2>

<a id="schemacdr-banking-apicommonpafaddress"></a>

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

*Australian address formatted according to the file format defined by the [PAF file format](https://auspost.com.au/content/dam/auspost_corp/media/documents/australia-post-data-guide.pdf)*

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

<h2 class="schema-toc" id="tocSlinks">Links</h2>

<a id="schemacdr-banking-apilinks"></a>

```json
{
  "self": "string"
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|self|[URIString](#common-field-types)|mandatory|Fully qualified link that generated the current response document|

<h2 class="schema-toc" id="tocSmeta">Meta</h2>

<a id="schemacdr-banking-apimeta"></a>

```json
{}

```

### Properties

*None*

<h2 class="schema-toc" id="tocSlinkspaginated">LinksPaginated</h2>

<a id="schemacdr-banking-apilinkspaginated"></a>

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

<h2 class="schema-toc" id="tocSmetapaginated">MetaPaginated</h2>

<a id="schemacdr-banking-apimetapaginated"></a>

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

<h2 class="schema-toc" id="tocSmetaerror">MetaError</h2>

<a id="schemacdr-banking-apimetaerror"></a>

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

<h2 class="schema-toc" id="tocSresponseerrorlistv2">ResponseErrorListV2</h2>

<a id="schemacdr-banking-apiresponseerrorlistv2"></a>

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
|» meta|[MetaError](#schemacdr-banking-apimetaerror)|optional|Additional data for customised error codes|

<h2 class="schema-toc" id="tocSbankingproductcategory">BankingProductCategory</h2>

<a id="schemacdr-banking-apibankingproductcategory"></a>

```json
"BUSINESS_LOANS"

```

*The category to which a product or account belongs. See [here](#product-categories) for more details*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|*anonymous*|string|mandatory|The category to which a product or account belongs. See [here](#product-categories) for more details|

#### Enumerated Values

|Property|Value|
|---|---|
|*anonymous*|BUSINESS_LOANS|
|*anonymous*|CRED_AND_CHRG_CARDS|
|*anonymous*|LEASES|
|*anonymous*|MARGIN_LOANS|
|*anonymous*|OVERDRAFTS|
|*anonymous*|PERS_LOANS|
|*anonymous*|REGULATED_TRUST_ACCOUNTS|
|*anonymous*|RESIDENTIAL_MORTGAGES|
|*anonymous*|TERM_DEPOSITS|
|*anonymous*|TRADE_FINANCE|
|*anonymous*|TRANS_AND_SAVINGS_ACCOUNTS|
|*anonymous*|TRAVEL_CARDS|

