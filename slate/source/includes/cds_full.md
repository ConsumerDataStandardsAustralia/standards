

<h1 id="consumer-data-standards-banking-apis">Banking APIs</h1>

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
|x-fapi-auth-date|header|string|optional|The time when the customer last logged in to the data recipient. Required for all resource calls (customer present and unattended). Not to be included for unauthenticated calls.|
|x-fapi-customer-ip-address|header|string|optional|The customer's original IP address if the customer is currently logged in to the data recipient. The presence of this header indicates that the API is being called in a customer present context. Not to be included for unauthenticated calls.|
|x-cds-client-headers|header|[Base64](#common-field-types)|optional|The customer's original standard http headers [Base64](#common-field-types) encoded, including the original User Agent header, if the customer is currently logged in to the data recipient. Mandatory for customer present calls.  Not required for unattended or unauthenticated calls.|

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
        "openStatus": "OPEN",
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
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[ResponseBankingAccountList](#schemaresponsebankingaccountlist)|
|4xx|[**Client Error**](https://tools.ietf.org/html/rfc7231#section-6.5)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Invalid Page Size](#error-400-field-invalid-page-size)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li><li>[422 - Invalid Page](#error-422-field-invalid-page)</li></ul>|[ResponseErrorListV2](#schemaresponseerrorlistv2)|

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
|x-fapi-auth-date|header|string|optional|The time when the customer last logged in to the data recipient. Required for all resource calls (customer present and unattended). Not to be included for unauthenticated calls.|
|x-fapi-customer-ip-address|header|string|optional|The customer's original IP address if the customer is currently logged in to the data recipient. The presence of this header indicates that the API is being called in a customer present context. Not to be included for unauthenticated calls.|
|x-cds-client-headers|header|[Base64](#common-field-types)|optional|The customer's original standard http headers [Base64](#common-field-types) encoded, including the original User Agent header, if the customer is currently logged in to the data recipient. Mandatory for customer present calls.  Not required for unattended or unauthenticated calls.|

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
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[ResponseBankingAccountsBalanceList](#schemaresponsebankingaccountsbalancelist)|
|4xx|[**Client Error**](https://tools.ietf.org/html/rfc7231#section-6.5)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Invalid Page Size](#error-400-field-invalid-page-size)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li><li>[422 - Invalid Page](#error-422-field-invalid-page)</li></ul>|[ResponseErrorListV2](#schemaresponseerrorlistv2)|

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
|x-fapi-auth-date|header|string|optional|The time when the customer last logged in to the data recipient. Required for all resource calls (customer present and unattended). Not to be included for unauthenticated calls.|
|x-fapi-customer-ip-address|header|string|optional|The customer's original IP address if the customer is currently logged in to the data recipient. The presence of this header indicates that the API is being called in a customer present context. Not to be included for unauthenticated calls.|
|x-cds-client-headers|header|[Base64](#common-field-types)|optional|The customer's original standard http headers [Base64](#common-field-types) encoded, including the original User Agent header, if the customer is currently logged in to the data recipient. Mandatory for customer present calls.  Not required for unattended or unauthenticated calls.|
|body|body|[RequestAccountIds](#schemarequestaccountids)|mandatory|The list of account IDs to obtain balances for|

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
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[ResponseBankingAccountsBalanceList](#schemaresponsebankingaccountsbalancelist)|
|4xx|[**Client Error**](https://tools.ietf.org/html/rfc7231#section-6.5)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Invalid Page Size](#error-400-field-invalid-page-size)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li><li>[422 - Invalid Page](#error-422-field-invalid-page)</li><li>[422 - Unavailable Banking Account](#error-422-authorisation-unavailable-banking-account)</li><li>[422 - Invalid Banking Account](#error-422-authorisation-invalid-banking-account)</li></ul>|[ResponseErrorListV2](#schemaresponseerrorlistv2)|

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
|x-fapi-auth-date|header|string|optional|The time when the customer last logged in to the data recipient. Required for all resource calls (customer present and unattended). Not to be included for unauthenticated calls.|
|x-fapi-customer-ip-address|header|string|optional|The customer's original IP address if the customer is currently logged in to the data recipient. The presence of this header indicates that the API is being called in a customer present context. Not to be included for unauthenticated calls.|
|x-cds-client-headers|header|[Base64](#common-field-types)|optional|The customer's original standard http headers [Base64](#common-field-types) encoded, including the original User Agent header, if the customer is currently logged in to the data recipient. Mandatory for customer present calls.  Not required for unattended or unauthenticated calls.|

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
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[ResponseBankingAccountsBalanceById](#schemaresponsebankingaccountsbalancebyid)|
|4xx|[**Client Error**](https://tools.ietf.org/html/rfc7231#section-6.5)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li><li>[404 - Unavailable Banking Account](#error-404-authorisation-unavailable-banking-account)</li><li>[404 - Invalid Banking Account](#error-404-authorisation-invalid-banking-account)</li><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|[ResponseErrorListV2](#schemaresponseerrorlistv2)|

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
|x-fapi-auth-date|header|string|optional|The time when the customer last logged in to the data recipient. Required for all resource calls (customer present and unattended). Not to be included for unauthenticated calls.|
|x-fapi-customer-ip-address|header|string|optional|The customer's original IP address if the customer is currently logged in to the data recipient. The presence of this header indicates that the API is being called in a customer present context. Not to be included for unauthenticated calls.|
|x-cds-client-headers|header|[Base64](#common-field-types)|optional|The customer's original standard http headers [Base64](#common-field-types) encoded, including the original User Agent header, if the customer is currently logged in to the data recipient. Mandatory for customer present calls.  Not required for unattended or unauthenticated calls.|

> Example responses

> 200 Response

```json
{
  "data": {
    "accountId": "string",
    "creationDate": "string",
    "displayName": "string",
    "nickname": "string",
    "openStatus": "OPEN",
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
      "repaymentType": "PRINCIPAL_AND_INTEREST",
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
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[ResponseBankingAccountById](#schemaresponsebankingaccountbyid)|
|4xx|[**Client Error**](https://tools.ietf.org/html/rfc7231#section-6.5)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li><li>[404 - Unavailable Banking Account](#error-404-authorisation-unavailable-banking-account)</li><li>[404 - Invalid Banking Account](#error-404-authorisation-invalid-banking-account)</li><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|[ResponseErrorListV2](#schemaresponseerrorlistv2)|

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
- As the date and time for a transaction can alter depending on status and transaction type two separate date/times are included in the payload. There are still some scenarios where neither of these time stamps is available. For the purpose of filtering and ordering it is expected that the data holder will use the “effective” date/time which will be defined as:
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
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[ResponseBankingTransactionList](#schemaresponsebankingtransactionlist)|
|4xx|[**Client Error**](https://tools.ietf.org/html/rfc7231#section-6.5)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Invalid Page Size](#error-400-field-invalid-page-size)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li><li>[400 - Invalid Date](#error-400-field-invalid-date-time)</li><li>[404 - Unavailable Banking Account](#error-404-authorisation-unavailable-banking-account)</li><li>[404 - Invalid Banking Account](#error-404-authorisation-invalid-banking-account)</li><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li><li>[422 - Invalid Page](#error-422-field-invalid-page)</li></ul>|[ResponseErrorListV2](#schemaresponseerrorlistv2)|

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
|x-fapi-auth-date|header|string|optional|The time when the customer last logged in to the data recipient. Required for all resource calls (customer present and unattended). Not to be included for unauthenticated calls.|
|x-fapi-customer-ip-address|header|string|optional|The customer's original IP address if the customer is currently logged in to the data recipient. The presence of this header indicates that the API is being called in a customer present context. Not to be included for unauthenticated calls.|
|x-cds-client-headers|header|[Base64](#common-field-types)|optional|The customer's original standard http headers [Base64](#common-field-types) encoded, including the original User Agent header, if the customer is currently logged in to the data recipient. Mandatory for customer present calls.  Not required for unattended or unauthenticated calls.|

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
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[ResponseBankingTransactionById](#schemaresponsebankingtransactionbyid)|
|4xx|[**Client Error**](https://tools.ietf.org/html/rfc7231#section-6.5)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li><li>[400 - Invalid Date](#error-400-field-invalid-date-time)</li><li>[404 - Unavailable Banking Account](#error-404-authorisation-unavailable-banking-account)</li><li>[404 - Invalid Banking Account](#error-404-authorisation-invalid-banking-account)</li><li>[Unavailable Resource](#error-404-resource-unavailable)</li><li>[Invalid Resource](#error-404-resource-invalid)</li><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|[ResponseErrorListV2](#schemaresponseerrorlistv2)|

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
|x-fapi-auth-date|header|string|optional|The time when the customer last logged in to the data recipient. Required for all resource calls (customer present and unattended). Not to be included for unauthenticated calls.|
|x-fapi-customer-ip-address|header|string|optional|The customer's original IP address if the customer is currently logged in to the data recipient. The presence of this header indicates that the API is being called in a customer present context. Not to be included for unauthenticated calls.|
|x-cds-client-headers|header|[Base64](#common-field-types)|optional|The customer's original standard http headers [Base64](#common-field-types) encoded, including the original User Agent header, if the customer is currently logged in to the data recipient. Mandatory for customer present calls.  Not required for unattended or unauthenticated calls.|

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
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[ResponseBankingDirectDebitAuthorisationList](#schemaresponsebankingdirectdebitauthorisationlist)|
|4xx|[**Client Error**](https://tools.ietf.org/html/rfc7231#section-6.5)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Invalid Page Size](#error-400-field-invalid-page-size)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li><li>[404 - Unavailable Banking Account](#error-404-authorisation-unavailable-banking-account)</li><li>[404 - Invalid Banking Account](#error-404-authorisation-invalid-banking-account)</li><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li><li>[422 - Invalid Page](#error-422-field-invalid-page)</li></ul>|[ResponseErrorListV2](#schemaresponseerrorlistv2)|

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
|x-fapi-auth-date|header|string|optional|The time when the customer last logged in to the data recipient. Required for all resource calls (customer present and unattended). Not to be included for unauthenticated calls.|
|x-fapi-customer-ip-address|header|string|optional|The customer's original IP address if the customer is currently logged in to the data recipient. The presence of this header indicates that the API is being called in a customer present context. Not to be included for unauthenticated calls.|
|x-cds-client-headers|header|[Base64](#common-field-types)|optional|The customer's original standard http headers [Base64](#common-field-types) encoded, including the original User Agent header, if the customer is currently logged in to the data recipient. Mandatory for customer present calls.  Not required for unattended or unauthenticated calls.|

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
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[ResponseBankingDirectDebitAuthorisationList](#schemaresponsebankingdirectdebitauthorisationlist)|
|4xx|[**Client Error**](https://tools.ietf.org/html/rfc7231#section-6.5)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Invalid Page Size](#error-400-field-invalid-page-size)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li><li>[422 - Invalid Page](#error-422-field-invalid-page)</li></ul>|[ResponseErrorListV2](#schemaresponseerrorlistv2)|

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
|x-fapi-auth-date|header|string|optional|The time when the customer last logged in to the data recipient. Required for all resource calls (customer present and unattended). Not to be included for unauthenticated calls.|
|x-fapi-customer-ip-address|header|string|optional|The customer's original IP address if the customer is currently logged in to the data recipient. The presence of this header indicates that the API is being called in a customer present context. Not to be included for unauthenticated calls.|
|x-cds-client-headers|header|[Base64](#common-field-types)|optional|The customer's original standard http headers [Base64](#common-field-types) encoded, including the original User Agent header, if the customer is currently logged in to the data recipient. Mandatory for customer present calls.  Not required for unattended or unauthenticated calls.|
|body|body|[RequestAccountIds](#schemarequestaccountids)|mandatory|Array of specific accountIds to obtain authorisations for|

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
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[ResponseBankingDirectDebitAuthorisationList](#schemaresponsebankingdirectdebitauthorisationlist)|
|4xx|[**Client Error**](https://tools.ietf.org/html/rfc7231#section-6.5)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Invalid Page Size](#error-400-field-invalid-page-size)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li><li>[422 - Invalid Page](#error-422-field-invalid-page)</li><li>[422 - Unavailable Banking Account](#error-422-authorisation-unavailable-banking-account)</li><li>[422 - Invalid Banking Account](#error-422-authorisation-invalid-banking-account)</li></ul>|[ResponseErrorListV2](#schemaresponseerrorlistv2)|

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
|x-fapi-auth-date|header|string|optional|The time when the customer last logged in to the data recipient. Required for all resource calls (customer present and unattended). Not to be included for unauthenticated calls.|
|x-fapi-customer-ip-address|header|string|optional|The customer's original IP address if the customer is currently logged in to the data recipient. The presence of this header indicates that the API is being called in a customer present context. Not to be included for unauthenticated calls.|
|x-cds-client-headers|header|[Base64](#common-field-types)|optional|The customer's original standard http headers [Base64](#common-field-types) encoded, including the original User Agent header, if the customer is currently logged in to the data recipient. Mandatory for customer present calls.  Not required for unattended or unauthenticated calls.|

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
            "nonBusinessDayTreatment": "ON",
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
            "nonBusinessDayTreatment": "ON"
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
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[ResponseBankingScheduledPaymentsList](#schemaresponsebankingscheduledpaymentslist)|
|4xx|[**Client Error**](https://tools.ietf.org/html/rfc7231#section-6.5)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Invalid Page Size](#error-400-field-invalid-page-size)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li><li>[404 - Unavailable Banking Account](#error-404-authorisation-unavailable-banking-account)</li><li>[404 - Invalid Banking Account](#error-404-authorisation-invalid-banking-account)</li><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li><li>[422 - Invalid Page](#error-422-field-invalid-page)</li></ul>|[ResponseErrorListV2](#schemaresponseerrorlistv2)|

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
|x-fapi-auth-date|header|string|optional|The time when the customer last logged in to the data recipient. Required for all resource calls (customer present and unattended). Not to be included for unauthenticated calls.|
|x-fapi-customer-ip-address|header|string|optional|The customer's original IP address if the customer is currently logged in to the data recipient. The presence of this header indicates that the API is being called in a customer present context. Not to be included for unauthenticated calls.|
|x-cds-client-headers|header|[Base64](#common-field-types)|optional|The customer's original standard http headers [Base64](#common-field-types) encoded, including the original User Agent header, if the customer is currently logged in to the data recipient. Mandatory for customer present calls.  Not required for unattended or unauthenticated calls.|

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
            "nonBusinessDayTreatment": "ON",
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
            "nonBusinessDayTreatment": "ON"
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
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[ResponseBankingScheduledPaymentsList](#schemaresponsebankingscheduledpaymentslist)|
|4xx|[**Client Error**](https://tools.ietf.org/html/rfc7231#section-6.5)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Invalid Page Size](#error-400-field-invalid-page-size)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li><li>[422 - Invalid Page](#error-422-field-invalid-page)</li></ul>|[ResponseErrorListV2](#schemaresponseerrorlistv2)|

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
|x-fapi-auth-date|header|string|optional|The time when the customer last logged in to the data recipient. Required for all resource calls (customer present and unattended). Not to be included for unauthenticated calls.|
|x-fapi-customer-ip-address|header|string|optional|The customer's original IP address if the customer is currently logged in to the data recipient. The presence of this header indicates that the API is being called in a customer present context. Not to be included for unauthenticated calls.|
|x-cds-client-headers|header|[Base64](#common-field-types)|optional|The customer's original standard http headers [Base64](#common-field-types) encoded, including the original User Agent header, if the customer is currently logged in to the data recipient. Mandatory for customer present calls.  Not required for unattended or unauthenticated calls.|
|body|body|[RequestAccountIds](#schemarequestaccountids)|mandatory|Array of specific accountIds to obtain scheduled payments for.  The accounts specified are the source of funds for the payments returned|

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
            "nonBusinessDayTreatment": "ON",
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
            "nonBusinessDayTreatment": "ON"
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
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[ResponseBankingScheduledPaymentsList](#schemaresponsebankingscheduledpaymentslist)|
|4xx|[**Client Error**](https://tools.ietf.org/html/rfc7231#section-6.5)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Invalid Page Size](#error-400-field-invalid-page-size)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li><li>[422 - Invalid Page](#error-422-field-invalid-page)</li><li>[422 - Unavailable Banking Account](#error-422-authorisation-unavailable-banking-account)</li><li>[422 - Invalid Banking Account](#error-422-authorisation-invalid-banking-account)</li></ul>|[ResponseErrorListV2](#schemaresponseerrorlistv2)|

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
|x-fapi-auth-date|header|string|optional|The time when the customer last logged in to the data recipient. Required for all resource calls (customer present and unattended). Not to be included for unauthenticated calls.|
|x-fapi-customer-ip-address|header|string|optional|The customer's original IP address if the customer is currently logged in to the data recipient. The presence of this header indicates that the API is being called in a customer present context. Not to be included for unauthenticated calls.|
|x-cds-client-headers|header|[Base64](#common-field-types)|optional|The customer's original standard http headers [Base64](#common-field-types) encoded, including the original User Agent header, if the customer is currently logged in to the data recipient. Mandatory for customer present calls.  Not required for unattended or unauthenticated calls.|

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
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[ResponseBankingPayeeList](#schemaresponsebankingpayeelist)|
|4xx|[**Client Error**](https://tools.ietf.org/html/rfc7231#section-6.5)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Invalid Page Size](#error-400-field-invalid-page-size)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li><li>[422 - Invalid Page](#error-422-field-invalid-page)</li></ul>|[ResponseErrorListV2](#schemaresponseerrorlistv2)|

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
|x-fapi-auth-date|header|string|optional|The time when the customer last logged in to the data recipient. Required for all resource calls (customer present and unattended). Not to be included for unauthenticated calls.|
|x-fapi-customer-ip-address|header|string|optional|The customer's original IP address if the customer is currently logged in to the data recipient. The presence of this header indicates that the API is being called in a customer present context. Not to be included for unauthenticated calls.|
|x-cds-client-headers|header|[Base64](#common-field-types)|optional|The customer's original standard http headers [Base64](#common-field-types) encoded, including the original User Agent header, if the customer is currently logged in to the data recipient. Mandatory for customer present calls.  Not required for unattended or unauthenticated calls.|

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
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[ResponseBankingPayeeById](#schemaresponsebankingpayeebyid)|
|4xx|[**Client Error**](https://tools.ietf.org/html/rfc7231#section-6.5)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Invalid Page Size](#error-400-field-invalid-page-size)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li><li>[404 - Unavailable Resource](#error-404-resource-unavailable)</li><li>[404 - Invalid Resource](#error-404-resource-invalid)</li><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li><li>[422 - Invalid Page](#error-422-field-invalid-page)</li></ul>|[ResponseErrorListV2](#schemaresponseerrorlistv2)|

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

NOTE: This version must be implemented by **February 2021**

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
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[ResponseBankingProductList](#schemaresponsebankingproductlist)|
|4xx|[**Client Error**](https://tools.ietf.org/html/rfc7231#section-6.5)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Invalid Date](#error-400-field-invalid-date-time)</li><li>[400 - Invalid Page Size](#error-400-field-invalid-page-size)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li><li>[422 - Invalid Page](#error-422-field-invalid-page)</li></ul>|[ResponseErrorListV2](#schemaresponseerrorlistv2)|

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

NOTE: This version must be implemented by **February 2021**

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
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[ResponseBankingProductById](#schemaresponsebankingproductbyid)|
|4xx|[**Client Error**](https://tools.ietf.org/html/rfc7231#section-6.5)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li><li>[404 - Unavailable Resource](#error-404-resource-unavailable)</li><li>[404 - Invalid Resource](#error-404-resource-invalid)</li><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|[ResponseErrorListV2](#schemaresponseerrorlistv2)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-v|string||The [version](#response-headers) of the API end point that the data holder has responded with.|

  
    <aside class="success">
This operation does not require authentication
</aside>

  

<h1 id="consumer-data-standards-common-apis">Common APIs</h1>

## Get Customer

<a id="opIdgetCustomer"></a>

> Code samples

```http
GET https://data.holder.com.au/cds-au/v1/common/customer HTTP/1.1
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
  url: 'https://data.holder.com.au/cds-au/v1/common/customer',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`GET /common/customer`

Obtain basic information on the customer that has authorised the current session

###Endpoint Version
|   |  |
|---|--|
|Version|**1**

<h3 id="get-customer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
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
    "customerUType": "organisation",
    "person": {
      "lastUpdateTime": "string",
      "firstName": "string",
      "lastName": "string",
      "middleNames": [
        "string"
      ],
      "prefix": "string",
      "suffix": "string",
      "occupationCode": "string",
      "occupationCodeVersion": "ANZSCO_1220.0_2013_V1.2"
    },
    "organisation": {
      "lastUpdateTime": "string",
      "agentFirstName": "string",
      "agentLastName": "string",
      "agentRole": "string",
      "businessName": "string",
      "legalName": "string",
      "shortName": "string",
      "abn": "string",
      "acn": "string",
      "isACNCRegistered": true,
      "industryCode": "string",
      "industryCodeVersion": "ANZSIC_1292.0_2006_V2.0",
      "organisationType": "COMPANY",
      "registeredCountry": "string",
      "establishmentDate": "string"
    }
  },
  "links": {
    "self": "string"
  },
  "meta": {}
}
```

<h3 id="get-customer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[ResponseCommonCustomer](#schemaresponsecommoncustomer)|
|4xx|[**Client Error**](https://tools.ietf.org/html/rfc7231#section-6.5)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|[ResponseErrorListV2](#schemaresponseerrorlistv2)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-v|string||The [version](#response-headers) of the API end point that the data holder has responded with.|
|200|x-fapi-interaction-id|string||An [RFC4122](https://tools.ietf.org/html/rfc4122) UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a [RFC4122] UUID value is required to be provided in the response header to track the interaction.|
|4xx|x-fapi-interaction-id|string||An [RFC4122](https://tools.ietf.org/html/rfc4122) UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a [RFC4122] UUID value is required to be provided in the response header to track the interaction.|

  
    
      <aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
<a href="#authorisation-scopes">common:customer.basic:read</a>
</aside>

    
  

## Get Customer Detail

<a id="opIdgetCustomerDetail"></a>

> Code samples

```http
GET https://data.holder.com.au/cds-au/v1/common/customer/detail HTTP/1.1
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
  url: 'https://data.holder.com.au/cds-au/v1/common/customer/detail',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`GET /common/customer/detail`

Obtain detailed information on the authorised customer within the current session.

###Endpoint Version
|   |  |
|---|--|
|Version|**1**

<h3 id="get-customer-detail-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
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
    "customerUType": "organisation",
    "person": {
      "lastUpdateTime": "string",
      "firstName": "string",
      "lastName": "string",
      "middleNames": [
        "string"
      ],
      "prefix": "string",
      "suffix": "string",
      "occupationCode": "string",
      "occupationCodeVersion": "ANZSCO_1220.0_2013_V1.2",
      "phoneNumbers": [
        {
          "isPreferred": true,
          "purpose": "HOME",
          "countryCode": "string",
          "areaCode": "string",
          "number": "string",
          "extension": "string",
          "fullNumber": "string"
        }
      ],
      "emailAddresses": [
        {
          "isPreferred": true,
          "purpose": "HOME",
          "address": "string"
        }
      ],
      "physicalAddresses": [
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
          },
          "purpose": "MAIL"
        }
      ]
    },
    "organisation": {
      "lastUpdateTime": "string",
      "agentFirstName": "string",
      "agentLastName": "string",
      "agentRole": "string",
      "businessName": "string",
      "legalName": "string",
      "shortName": "string",
      "abn": "string",
      "acn": "string",
      "isACNCRegistered": true,
      "industryCode": "string",
      "industryCodeVersion": "ANZSIC_1292.0_2006_V2.0",
      "organisationType": "COMPANY",
      "registeredCountry": "string",
      "establishmentDate": "string",
      "physicalAddresses": [
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
          },
          "purpose": "MAIL"
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

<h3 id="get-customer-detail-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[ResponseCommonCustomerDetail](#schemaresponsecommoncustomerdetail)|
|4xx|[**Client Error**](https://tools.ietf.org/html/rfc7231#section-6.5)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|[ResponseErrorListV2](#schemaresponseerrorlistv2)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-v|string||The [version](#response-headers) of the API end point that the data holder has responded with.|
|200|x-fapi-interaction-id|string||An [RFC4122](https://tools.ietf.org/html/rfc4122) UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a [RFC4122] UUID value is required to be provided in the response header to track the interaction.|
|4xx|x-fapi-interaction-id|string||An [RFC4122](https://tools.ietf.org/html/rfc4122) UUID used as a correlation id. If provided, the data holder must play back this value in the x-fapi-interaction-id response header. If not provided a [RFC4122] UUID value is required to be provided in the response header to track the interaction.|

  
    
      <aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
<a href="#authorisation-scopes">common:customer.detail:read</a>
</aside>

    
  

## Get Status

<a id="opIdgetStatus"></a>

> Code samples

```http
GET https://data.holder.com.au/cds-au/v1/discovery/status HTTP/1.1
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
  url: 'https://data.holder.com.au/cds-au/v1/discovery/status',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`GET /discovery/status`

Obtain a health check status for the implementation

###Endpoint Version
|   |  |
|---|--|
|Version|**1**

<h3 id="get-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-v|header|string|mandatory|Version of the API end point requested by the client. Must be set to a positive integer. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If the value of [x-min-v](#request-headers) is equal to or higher than the value of [x-v](#request-headers) then the [x-min-v](#request-headers) header should be treated as absent. If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable. See [HTTP Headers](#request-headers)|
|x-min-v|header|string|optional|Minimum version of the API end point requested by the client. Must be set to a positive integer if provided. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable.|

> Example responses

> 200 Response

```json
{
  "data": {
    "status": "OK",
    "explanation": "string",
    "detectionTime": "string",
    "expectedResolutionTime": "string",
    "updateTime": "string"
  },
  "links": {
    "self": "string"
  },
  "meta": {}
}
```

<h3 id="get-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[ResponseCommonDiscoveryStatus](#schemaresponsecommondiscoverystatus)|
|4xx|[**Client Error**](https://tools.ietf.org/html/rfc7231#section-6.5)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|[ResponseErrorListV2](#schemaresponseerrorlistv2)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-v|string||The [version](#response-headers) of the API end point that the data holder has responded with.|

  
    <aside class="success">
This operation does not require authentication
</aside>

  

## Get Outages

<a id="opIdgetOutages"></a>

> Code samples

```http
GET https://data.holder.com.au/cds-au/v1/discovery/outages HTTP/1.1
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
  url: 'https://data.holder.com.au/cds-au/v1/discovery/outages',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`GET /discovery/outages`

Obtain a list of scheduled outages for the implementation

###Endpoint Version
|   |  |
|---|--|
|Version|**1**

<h3 id="get-outages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-v|header|string|mandatory|Version of the API end point requested by the client. Must be set to a positive integer. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If the value of [x-min-v](#request-headers) is equal to or higher than the value of [x-v](#request-headers) then the [x-min-v](#request-headers) header should be treated as absent. If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable. See [HTTP Headers](#request-headers)|
|x-min-v|header|string|optional|Minimum version of the API end point requested by the client. Must be set to a positive integer if provided. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If all versions requested are not supported then the data holder must respond with a 406 Not Acceptable.|

> Example responses

> 200 Response

```json
{
  "data": {
    "outages": [
      {
        "outageTime": "string",
        "duration": "string",
        "isPartial": true,
        "explanation": "string"
      }
    ]
  },
  "links": {
    "self": "string"
  },
  "meta": {}
}
```

<h3 id="get-outages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[ResponseDiscoveryOutagesList](#schemaresponsediscoveryoutageslist)|
|4xx|[**Client Error**](https://tools.ietf.org/html/rfc7231#section-6.5)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|[ResponseErrorListV2](#schemaresponseerrorlistv2)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-v|string||The [version](#response-headers) of the API end point that the data holder has responded with.|

  
    <aside class="success">
This operation does not require authentication
</aside>

  

# Schemas

<h2 id="tocSrequestaccountids">RequestAccountIds</h2>

<a id="schemarequestaccountids"></a>

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

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|mandatory|none|none|
|» accountIds|[string]|mandatory|none|none|
|meta|[Meta](#schemameta)|optional|none|none|

<h2 id="tocSresponsebankingproductlist">ResponseBankingProductList</h2>

<a id="schemaresponsebankingproductlist"></a>

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

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|mandatory|none|none|
|» products|[[BankingProductV3](#schemabankingproductv3)]|mandatory|none|The list of products returned.  If the filter results in an empty set then this array may have no records|
|links|[LinksPaginated](#schemalinkspaginated)|mandatory|none|none|
|meta|[MetaPaginated](#schemametapaginated)|mandatory|none|none|

<h2 id="tocSbankingproductv3">BankingProductV3</h2>

<a id="schemabankingproductv3"></a>

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

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|productId|[ASCIIString](#common-field-types)|mandatory|none|A data holder specific unique identifier for this product. This identifier must be unique to a product but does not otherwise need to adhere to ID permanence guidelines.|
|effectiveFrom|[DateTimeString](#common-field-types)|optional|none|The date and time from which this product is effective (ie. is available for origination).  Used to enable the articulation of products to the regime before they are available for customers to originate|
|effectiveTo|[DateTimeString](#common-field-types)|optional|none|The date and time at which this product will be retired and will no longer be offered.  Used to enable the managed deprecation of products|
|lastUpdated|[DateTimeString](#common-field-types)|mandatory|none|The last date and time that the information for this product was changed (or the creation date for the product if it has never been altered)|
|productCategory|[BankingProductCategory](#schemabankingproductcategory)|mandatory|none|The category to which a product or account belongs. See [here](#product-categories) for more details|
|name|string|mandatory|none|The display name of the product|
|description|string|mandatory|none|A description of the product|
|brand|string|mandatory|none|A label of the brand for the product. Able to be used for filtering. For data holders with single brands this value is still required|
|brandName|string|optional|none|An optional display name of the brand|
|applicationUri|[URIString](#common-field-types)|optional|none|A link to an application web page where this product can be applied for.|
|isTailored|[Boolean](#common-field-types)|mandatory|none|Indicates whether the product is specifically tailored to a circumstance.  In this case fees and prices are significantly negotiated depending on context. While all products are open to a degree of tailoring this flag indicates that tailoring is expected and thus that the provision of specific fees and rates is not applicable|
|additionalInformation|object|optional|none|Object that contains links to additional information on specific topics|
|» overviewUri|[URIString](#common-field-types)|optional|none|General overview of the product|
|» termsUri|[URIString](#common-field-types)|optional|none|Terms and conditions for the product|
|» eligibilityUri|[URIString](#common-field-types)|optional|none|Eligibility rules and criteria for the product|
|» feesAndPricingUri|[URIString](#common-field-types)|optional|none|Description of fees, pricing, discounts, exemptions and bonuses for the product|
|» bundleUri|[URIString](#common-field-types)|optional|none|Description of a bundle that this product can be part of|
|cardArt|[object]|optional|none|An array of card art images|
|» title|string|optional|none|Display label for the specific image|
|» imageUri|[URIString](#common-field-types)|mandatory|none|URI reference to a PNG, JPG or GIF image with proportions defined by ISO 7810 ID-1 and width no greater than 512 pixels. The URI reference may be a link or url-encoded data URI [RFC 2397](https://tools.ietf.org/html/rfc2397)|

<h2 id="tocSresponsebankingproductbyid">ResponseBankingProductById</h2>

<a id="schemaresponsebankingproductbyid"></a>

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

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[BankingProductDetailV3](#schemabankingproductdetailv3)|mandatory|none|none|
|links|[Links](#schemalinks)|mandatory|none|none|
|meta|[Meta](#schemameta)|optional|none|none|

<h2 id="tocSbankingproductdetailv3">BankingProductDetailV3</h2>

<a id="schemabankingproductdetailv3"></a>

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

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[BankingProductV3](#schemabankingproductv3)|mandatory|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|mandatory|none|none|
|» bundles|[[BankingProductBundle](#schemabankingproductbundle)]|optional|none|An array of bundles that this product participates in.  Each bundle is described by free form information but also by a list of product IDs of the other products that are included in the bundle.  It is assumed that the current product is included in the bundle also|
|» features|[[BankingProductFeature](#schemabankingproductfeature)]|optional|none|Array of features available for the product|
|» constraints|[[BankingProductConstraint](#schemabankingproductconstraint)]|optional|none|Constraints on the application for or operation of the product such as minimum balances or limit thresholds|
|» eligibility|[[BankingProductEligibility](#schemabankingproducteligibility)]|optional|none|Eligibility criteria for the product|
|» fees|[[BankingProductFee](#schemabankingproductfee)]|optional|none|Fees applicable for the product|
|» depositRates|[[BankingProductDepositRate](#schemabankingproductdepositrate)]|optional|none|Interest rates available for deposits|
|» lendingRates|[[BankingProductLendingRateV2](#schemabankingproductlendingratev2)]|optional|none|Interest rates charged against lending balances|

<h2 id="tocSbankingproductbundle">BankingProductBundle</h2>

<a id="schemabankingproductbundle"></a>

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

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|mandatory|none|Name of the bundle|
|description|string|mandatory|none|Description of the bundle|
|additionalInfo|string|optional|none|Display text providing more information on the bundle|
|additionalInfoUri|[URIString](#common-field-types)|optional|none|Link to a web page with more information on the bundle criteria and benefits|
|productIds|[string]|optional|none|Array of product IDs for products included in the bundle that are available via the product end points.  Note that this array is not intended to represent a comprehensive model of the products included in the bundle and some products available for the bundle may not be available via the product reference end points|

<h2 id="tocSbankingproductfeature">BankingProductFeature</h2>

<a id="schemabankingproductfeature"></a>

```json
{
  "featureType": "ADDITIONAL_CARDS",
  "additionalValue": "string",
  "additionalInfo": "string",
  "additionalInfoUri": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|featureType|string|mandatory|none|The type of feature described|
|additionalValue|string|conditional|none|Generic field containing additional information relevant to the [featureType](#tocSproductfeaturetypedoc) specified. Whether mandatory or not is dependent on the value of the [featureType.](#tocSproductfeaturetypedoc)|
|additionalInfo|string|conditional|none|Display text providing more information on the feature. Mandatory if the [feature type](#tocSproductfeaturetypedoc) is set to OTHER|
|additionalInfoUri|[URIString](#common-field-types)|optional|none|Link to a web page with more information on this feature|

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

<h2 id="tocSbankingproductconstraint">BankingProductConstraint</h2>

<a id="schemabankingproductconstraint"></a>

```json
{
  "constraintType": "MAX_BALANCE",
  "additionalValue": "string",
  "additionalInfo": "string",
  "additionalInfoUri": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|constraintType|string|mandatory|none|The type of constraint described.  See the next section for an overview of valid values and their meaning|
|additionalValue|string|conditional|none|Generic field containing additional information relevant to the [constraintType](#tocSproductconstrainttypedoc) specified.  Whether mandatory or not is dependent on the value of [constraintType](#tocSproductconstrainttypedoc)|
|additionalInfo|string|optional|none|Display text providing more information the constraint|
|additionalInfoUri|[URIString](#common-field-types)|optional|none|Link to a web page with more information on the constraint|

#### Enumerated Values

|Property|Value|
|---|---|
|constraintType|MAX_BALANCE|
|constraintType|MAX_LIMIT|
|constraintType|MIN_BALANCE|
|constraintType|MIN_LIMIT|
|constraintType|OPENING_BALANCE|

<h2 id="tocSbankingproducteligibility">BankingProductEligibility</h2>

<a id="schemabankingproducteligibility"></a>

```json
{
  "eligibilityType": "BUSINESS",
  "additionalValue": "string",
  "additionalInfo": "string",
  "additionalInfoUri": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eligibilityType|string|mandatory|none|The type of eligibility criteria described.  See the next section for an overview of valid values and their meaning|
|additionalValue|string|conditional|none|Generic field containing additional information relevant to the [eligibilityType](#tocSproducteligibilitytypedoc) specified. Whether mandatory or not is dependent on the value of [eligibilityType](#tocSproducteligibilitytypedoc)|
|additionalInfo|string|conditional|none|Display text providing more information on the [eligibility](#tocSproducteligibilitytypedoc) criteria. Mandatory if the field is set to OTHER|
|additionalInfoUri|[URIString](#common-field-types)|optional|none|Link to a web page with more information on this eligibility criteria|

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

<h2 id="tocSbankingproductfee">BankingProductFee</h2>

<a id="schemabankingproductfee"></a>

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

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|mandatory|none|Name of the fee|
|feeType|string|mandatory|none|The type of fee|
|amount|[AmountString](#common-field-types)|conditional|none|The amount charged for the fee. One of amount, balanceRate, transactionRate and accruedRate is mandatory unless the *feeType* "VARIABLE" is supplied|
|balanceRate|[RateString](#common-field-types)|conditional|none|A fee rate calculated based on a proportion of the balance. One of amount, balanceRate, transactionRate and accruedRate is mandatory unless the *feeType* "VARIABLE" is supplied.|
|transactionRate|[RateString](#common-field-types)|conditional|none|A fee rate calculated based on a proportion of a transaction. One of amount, balanceRate, transactionRate and accruedRate is mandatory unless the *feeType* "VARIABLE" is supplied|
|accruedRate|[RateString](#common-field-types)|conditional|none|A fee rate calculated based on a proportion of the calculated interest accrued on the account. One of amount, balanceRate, transactionRate and accruedRate is mandatory unless the *feeType* "VARIABLE" is supplied|
|accrualFrequency|[ExternalRef](#common-field-types)|optional|none|The indicative frequency with which the fee is calculated on the account. Only applies if balanceRate or accruedRate is also present. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)|
|currency|[CurrencyString](#common-field-types)|optional|none|The currency the fee will be charged in. Assumes AUD if absent|
|additionalValue|string|conditional|none|Generic field containing additional information relevant to the [feeType](#tocSproductfeetypedoc) specified. Whether mandatory or not is dependent on the value of [feeType](#tocSproductfeetypedoc)|
|additionalInfo|string|optional|none|Display text providing more information on the fee|
|additionalInfoUri|[URIString](#common-field-types)|optional|none|Link to a web page with more information on this fee|
|discounts|[[BankingProductDiscount](#schemabankingproductdiscount)]|optional|none|An optional list of discounts to this fee that may be available|

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

<h2 id="tocSbankingproductdiscount">BankingProductDiscount</h2>

<a id="schemabankingproductdiscount"></a>

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

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|mandatory|none|Description of the discount|
|discountType|string|mandatory|none|The type of discount. See the next section for an overview of valid values and their meaning|
|amount|[AmountString](#common-field-types)|conditional|none|Dollar value of the discount. One of amount, balanceRate, transactionRate, accruedRate and feeRate is mandatory.|
|balanceRate|[RateString](#common-field-types)|conditional|none|A discount rate calculated based on a proportion of the balance. Note that the currency of the fee discount is expected to be the same as the currency of the fee itself. One of amount, balanceRate, transactionRate, accruedRate and feeRate is mandatory. Unless noted in additionalInfo, assumes the application and calculation frequency are the same as the corresponding fee|
|transactionRate|[RateString](#common-field-types)|conditional|none|A discount rate calculated based on a proportion of a transaction. Note that the currency of the fee discount is expected to be the same as the currency of the fee itself. One of amount, balanceRate, transactionRate, accruedRate and feeRate is mandatory|
|accruedRate|[RateString](#common-field-types)|conditional|none|A discount rate calculated based on a proportion of the calculated interest accrued on the account. Note that the currency of the fee discount is expected to be the same as the currency of the fee itself. One of amount, balanceRate, transactionRate, accruedRate and feeRate is mandatory. Unless noted in additionalInfo, assumes the application and calculation frequency are the same as the corresponding fee|
|feeRate|[RateString](#common-field-types)|conditional|none|A discount rate calculated based on a proportion of the fee to which this discount is attached. Note that the currency of the fee discount is expected to be the same as the currency of the fee itself. One of amount, balanceRate, transactionRate, accruedRate and feeRate is mandatory. Unless noted in additionalInfo, assumes the application and calculation frequency are the same as the corresponding fee|
|additionalValue|string|conditional|none|Generic field containing additional information relevant to the [discountType](#tocSproductdiscounttypedoc) specified. Whether mandatory or not is dependent on the value of [discountType](#tocSproductdiscounttypedoc)|
|additionalInfo|string|optional|none|Display text providing more information on the discount|
|additionalInfoUri|[URIString](#common-field-types)|optional|none|Link to a web page with more information on this discount|
|eligibility|[[BankingProductDiscountEligibility](#schemabankingproductdiscounteligibility)]|conditional|none|Eligibility constraints that apply to this discount. Mandatory if ``discountType`` is ``ELIGIBILITY_ONLY``.|

#### Enumerated Values

|Property|Value|
|---|---|
|discountType|BALANCE|
|discountType|DEPOSITS|
|discountType|ELIGIBILITY_ONLY|
|discountType|FEE_CAP|
|discountType|PAYMENTS|

<h2 id="tocSbankingproductdiscounteligibility">BankingProductDiscountEligibility</h2>

<a id="schemabankingproductdiscounteligibility"></a>

```json
{
  "discountEligibilityType": "BUSINESS",
  "additionalValue": "string",
  "additionalInfo": "string",
  "additionalInfoUri": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|discountEligibilityType|string|mandatory|none|The type of the specific eligibility constraint for a discount|
|additionalValue|string|conditional|none|Generic field containing additional information relevant to the [discountEligibilityType](#tocSproductdiscounteligibilitydoc) specified. Whether mandatory or not is dependent on the value of [discountEligibilityType](#tocSproductdiscounteligibilitydoc)|
|additionalInfo|string|conditional|none|Display text providing more information on this eligibility constraint. Whether mandatory or not is dependent on the value of [discountEligibilityType](#tocSproductdiscounteligibilitydoc)|
|additionalInfoUri|[URIString](#common-field-types)|optional|none|Link to a web page with more information on this eligibility constraint|

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

<h2 id="tocSbankingproductdepositrate">BankingProductDepositRate</h2>

<a id="schemabankingproductdepositrate"></a>

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

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|depositRateType|string|mandatory|none|The type of rate (base, bonus, etc). See the next section for an overview of valid values and their meaning|
|rate|[RateString](#common-field-types)|mandatory|none|The rate to be applied|
|calculationFrequency|[ExternalRef](#common-field-types)|optional|none|The period after which the rate is applied to the balance to calculate the amount due for the period. Calculation of the amount is often daily (as balances may change) but accumulated until the total amount is 'applied' to the account (see applicationFrequency). Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)|
|applicationFrequency|[ExternalRef](#common-field-types)|optional|none|The period after which the calculated amount(s) (see calculationFrequency) are 'applied' (i.e. debited or credited) to the account. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)|
|tiers|[[BankingProductRateTierV3](#schemabankingproductratetierv3)]|optional|none|Rate tiers applicable for this rate|
|additionalValue|string|conditional|none|Generic field containing additional information relevant to the [depositRateType](#tocSproductdepositratetypedoc) specified. Whether mandatory or not is dependent on the value of [depositRateType](#tocSproductdepositratetypedoc)|
|additionalInfo|string|optional|none|Display text providing more information on the rate|
|additionalInfoUri|[URIString](#common-field-types)|optional|none|Link to a web page with more information on this rate|

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

<h2 id="tocSbankingproductlendingratev2">BankingProductLendingRateV2</h2>

<a id="schemabankingproductlendingratev2"></a>

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

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lendingRateType|string|mandatory|none|The type of rate (fixed, variable, etc). See the next section for an overview of valid values and their meaning|
|rate|[RateString](#common-field-types)|mandatory|none|The rate to be applied|
|comparisonRate|[RateString](#common-field-types)|optional|none|A comparison rate equivalent for this rate|
|calculationFrequency|[ExternalRef](#common-field-types)|optional|none|The period after which the rate is applied to the balance to calculate the amount due for the period. Calculation of the amount is often daily (as balances may change) but accumulated until the total amount is 'applied' to the account (see applicationFrequency). Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)|
|applicationFrequency|[ExternalRef](#common-field-types)|optional|none|The period after which the calculated amount(s) (see calculationFrequency) are 'applied' (i.e. debited or credited) to the account. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)|
|interestPaymentDue|string|optional|none|When loan payments are due to be paid within each period. The investment benefit of earlier payments affect the rate that can be offered|
|repaymentType|string|optional|none|Options in place for repayments. If absent, the lending rate is applicable to all repayment types|
|loanPurpose|string|optional|none|The reason for taking out the loan. If absent, the lending rate is applicable to all loan purposes|
|tiers|[[BankingProductRateTierV3](#schemabankingproductratetierv3)]|optional|none|Rate tiers applicable for this rate|
|additionalValue|string|conditional|none|Generic field containing additional information relevant to the [lendingRateType](#tocSproductlendingratetypedoc) specified. Whether mandatory or not is dependent on the value of [lendingRateType](#tocSproductlendingratetypedoc)|
|additionalInfo|string|optional|none|Display text providing more information on the rate.|
|additionalInfoUri|[URIString](#common-field-types)|optional|none|Link to a web page with more information on this rate|

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

<h2 id="tocSbankingproductratetierv3">BankingProductRateTierV3</h2>

<a id="schemabankingproductratetierv3"></a>

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

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|mandatory|none|A display name for the tier|
|unitOfMeasure|string|mandatory|none|The unit of measure that applies to the tierValueMinimum and tierValueMaximum values e.g. a **DOLLAR** amount. **PERCENT** (in the case of loan-to-value ratio or LVR). Tier term period representing a discrete number of **MONTH**'s or **DAY**'s (in the case of term deposit tiers)|
|minimumValue|[Number](#common-field-types)|mandatory|none|The number of tierUnitOfMeasure units that form the lower bound of the tier. The tier should be inclusive of this value|
|maximumValue|[Number](#common-field-types)|optional|none|The number of tierUnitOfMeasure units that form the upper bound of the tier or band. For a tier with a discrete value (as opposed to a range of values e.g. 1 month) this must be the same as tierValueMinimum. Where this is the same as the tierValueMinimum value of the next-higher tier the referenced tier should be exclusive of this value. For example a term deposit of 2 months falls into the upper tier of the following tiers: (1 – 2 months, 2 – 3 months). If absent the tier's range has no upper bound.|
|rateApplicationMethod|string|optional|none|The method used to calculate the amount to be applied using one or more tiers. A single rate may be applied to the entire balance or each applicable tier rate is applied to the portion of the balance that falls into that tier (referred to as 'bands' or 'steps')|
|applicabilityConditions|[BankingProductRateCondition](#schemabankingproductratecondition)|optional|none|Defines a condition for the applicability of a tiered rate|
|additionalInfo|string|optional|none|Display text providing more information on the rate tier.|
|additionalInfoUri|[URIString](#common-field-types)|optional|none|Link to a web page with more information on this rate tier|

#### Enumerated Values

|Property|Value|
|---|---|
|unitOfMeasure|DAY|
|unitOfMeasure|DOLLAR|
|unitOfMeasure|MONTH|
|unitOfMeasure|PERCENT|
|rateApplicationMethod|PER_TIER|
|rateApplicationMethod|WHOLE_BALANCE|

<h2 id="tocSbankingproductratecondition">BankingProductRateCondition</h2>

<a id="schemabankingproductratecondition"></a>

```json
{
  "additionalInfo": "string",
  "additionalInfoUri": "string"
}

```

*Defines a condition for the applicability of a tiered rate*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalInfo|string|optional|none|Display text providing more information on the condition|
|additionalInfoUri|[URIString](#common-field-types)|optional|none|Link to a web page with more information on this condition|

<h2 id="tocSresponsebankingaccountlist">ResponseBankingAccountList</h2>

<a id="schemaresponsebankingaccountlist"></a>

```json
{
  "data": {
    "accounts": [
      {
        "accountId": "string",
        "creationDate": "string",
        "displayName": "string",
        "nickname": "string",
        "openStatus": "OPEN",
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

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|mandatory|none|none|
|» accounts|[[BankingAccount](#schemabankingaccount)]|mandatory|none|The list of accounts returned. If the filter results in an empty set then this array may have no records|
|links|[LinksPaginated](#schemalinkspaginated)|mandatory|none|none|
|meta|[MetaPaginated](#schemametapaginated)|mandatory|none|none|

<h2 id="tocSbankingaccount">BankingAccount</h2>

<a id="schemabankingaccount"></a>

```json
{
  "accountId": "string",
  "creationDate": "string",
  "displayName": "string",
  "nickname": "string",
  "openStatus": "OPEN",
  "isOwned": true,
  "maskedNumber": "string",
  "productCategory": "BUSINESS_LOANS",
  "productName": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|[ASCIIString](#common-field-types)|mandatory|none|A unique ID of the account adhering to the standards for ID permanence|
|creationDate|[DateString](#common-field-types)|optional|none|Date that the account was created (if known)|
|displayName|string|mandatory|none|The display name of the account as defined by the bank. This should not incorporate account numbers or PANs. If it does the values should be masked according to the rules of the MaskedAccountString common type.|
|nickname|string|optional|none|A customer supplied nick name for the account|
|openStatus|string|optional|none|Open or closed status for the account. If not present then OPEN is assumed|
|isOwned|[Boolean](#common-field-types)|optional|none|Flag indicating that the customer associated with the authorisation is an owner of the account. Does not indicate sole ownership, however. If not present then 'true' is assumed|
|maskedNumber|[MaskedAccountString](#common-field-types)|mandatory|none|A masked version of the account. Whether BSB/Account Number, Credit Card PAN or another number|
|productCategory|[BankingProductCategory](#schemabankingproductcategory)|mandatory|none|The category to which a product or account belongs. See [here](#product-categories) for more details|
|productName|string|mandatory|none|The unique identifier of the account as defined by the data holder (akin to model number for the account)|

#### Enumerated Values

|Property|Value|
|---|---|
|openStatus|CLOSED|
|openStatus|OPEN|

<h2 id="tocSresponsebankingaccountbyid">ResponseBankingAccountById</h2>

<a id="schemaresponsebankingaccountbyid"></a>

```json
{
  "data": {
    "accountId": "string",
    "creationDate": "string",
    "displayName": "string",
    "nickname": "string",
    "openStatus": "OPEN",
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
      "repaymentType": "PRINCIPAL_AND_INTEREST",
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

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[BankingAccountDetail](#schemabankingaccountdetail)|mandatory|none|none|
|links|[Links](#schemalinks)|mandatory|none|none|
|meta|[Meta](#schemameta)|optional|none|none|

<h2 id="tocSbankingaccountdetail">BankingAccountDetail</h2>

<a id="schemabankingaccountdetail"></a>

```json
{
  "accountId": "string",
  "creationDate": "string",
  "displayName": "string",
  "nickname": "string",
  "openStatus": "OPEN",
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
    "repaymentType": "PRINCIPAL_AND_INTEREST",
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

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[BankingAccount](#schemabankingaccount)|mandatory|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|mandatory|none|none|
|» bsb|string|optional|none|The unmasked BSB for the account. Is expected to be formatted as digits only with leading zeros included and no punctuation or spaces|
|» accountNumber|string|optional|none|The unmasked account number for the account. Should not be supplied if the account number is a PAN requiring PCI compliance. Is expected to be formatted as digits only with leading zeros included and no punctuation or spaces|
|» bundleName|string|optional|none|Optional field to indicate if this account is part of a bundle that is providing additional benefit for to the customer|
|» specificAccountUType|string|optional|none|The type of structure to present account specific fields.|
|» termDeposit|[[BankingTermDepositAccount](#schemabankingtermdepositaccount)]|conditional|none|none|
|» creditCard|[BankingCreditCardAccount](#schemabankingcreditcardaccount)|conditional|none|none|
|» loan|[BankingLoanAccount](#schemabankingloanaccount)|conditional|none|none|
|» depositRate|[RateString](#common-field-types)|optional|none|current rate to calculate interest earned being applied to deposit balances as it stands at the time of the API call|
|» lendingRate|[RateString](#common-field-types)|optional|none|The current rate to calculate interest payable being applied to lending balances as it stands at the time of the API call|
|» depositRates|[[BankingProductDepositRate](#schemabankingproductdepositrate)]|optional|none|Fully described deposit rates for this account based on the equivalent structure in Product Reference|
|» lendingRates|[[BankingProductLendingRateV2](#schemabankingproductlendingratev2)]|optional|none|Fully described deposit rates for this account based on the equivalent structure in Product Reference|
|» features|[allOf]|optional|none|Array of features of the account based on the equivalent structure in Product Reference with the following additional field|

*allOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»» *anonymous*|[BankingProductFeature](#schemabankingproductfeature)|mandatory|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»» *anonymous*|object|mandatory|none|none|
|»»» isActivated|[Boolean](#common-field-types)|optional|none|True if the feature is already activated and false if the feature is available for activation. Defaults to true if absent. (note this is an additional field appended to the feature object defined in the Product Reference payload)|

*continued*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»» fees|[[BankingProductFee](#schemabankingproductfee)]|optional|none|Fees and charges applicable to the account based on the equivalent structure in Product Reference|
|»» addresses|[[CommonPhysicalAddress](#schemacommonphysicaladdress)]|optional|none|The addresses for the account to be used for correspondence|

#### Enumerated Values

|Property|Value|
|---|---|
|specificAccountUType|creditCard|
|specificAccountUType|loan|
|specificAccountUType|termDeposit|

<h2 id="tocSbankingtermdepositaccount">BankingTermDepositAccount</h2>

<a id="schemabankingtermdepositaccount"></a>

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

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lodgementDate|[DateString](#common-field-types)|mandatory|none|The lodgement date of the original deposit|
|maturityDate|[DateString](#common-field-types)|mandatory|none|Maturity date for the term deposit|
|maturityAmount|[AmountString](#common-field-types)|optional|none|Amount to be paid upon maturity. If absent it implies the amount to paid is variable and cannot currently be calculated|
|maturityCurrency|[CurrencyString](#common-field-types)|optional|none|If absent assumes AUD|
|maturityInstructions|string|mandatory|none|Current instructions on action to be taken at maturity. This includes default actions that may be specified in the terms and conditions for the product e.g. roll-over to the same term and frequency of interest payments|

#### Enumerated Values

|Property|Value|
|---|---|
|maturityInstructions|HOLD_ON_MATURITY|
|maturityInstructions|PAID_OUT_AT_MATURITY|
|maturityInstructions|ROLLED_OVER|

<h2 id="tocSbankingcreditcardaccount">BankingCreditCardAccount</h2>

<a id="schemabankingcreditcardaccount"></a>

```json
{
  "minPaymentAmount": "string",
  "paymentDueAmount": "string",
  "paymentCurrency": "string",
  "paymentDueDate": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|minPaymentAmount|[AmountString](#common-field-types)|mandatory|none|The minimum payment amount due for the next card payment|
|paymentDueAmount|[AmountString](#common-field-types)|mandatory|none|The amount due for the next card payment|
|paymentCurrency|[CurrencyString](#common-field-types)|optional|none|If absent assumes AUD|
|paymentDueDate|[DateString](#common-field-types)|mandatory|none|Date that the next payment for the card is due|

<h2 id="tocSbankingloanaccount">BankingLoanAccount</h2>

<a id="schemabankingloanaccount"></a>

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
  "repaymentType": "PRINCIPAL_AND_INTEREST",
  "repaymentFrequency": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|originalStartDate|[DateString](#common-field-types)|optional|none|Optional original start date for the loan|
|originalLoanAmount|[AmountString](#common-field-types)|optional|none|Optional original loan value|
|originalLoanCurrency|[CurrencyString](#common-field-types)|optional|none|If absent assumes AUD|
|loanEndDate|[DateString](#common-field-types)|mandatory|none|Date that the loan is due to be repaid in full|
|nextInstalmentDate|[DateString](#common-field-types)|mandatory|none|Next date that an instalment is required|
|minInstalmentAmount|[AmountString](#common-field-types)|optional|none|Minimum amount of next instalment|
|minInstalmentCurrency|[CurrencyString](#common-field-types)|optional|none|If absent assumes AUD|
|maxRedraw|[AmountString](#common-field-types)|optional|none|Maximum amount of funds that can be redrawn. If not present redraw is not available even if the feature exists for the account|
|maxRedrawCurrency|[CurrencyString](#common-field-types)|optional|none|If absent assumes AUD|
|minRedraw|[AmountString](#common-field-types)|optional|none|Minimum redraw amount|
|minRedrawCurrency|[CurrencyString](#common-field-types)|optional|none|If absent assumes AUD|
|offsetAccountEnabled|[Boolean](#common-field-types)|optional|none|Set to true if one or more offset accounts are configured for this loan account|
|offsetAccountIds|[string]|optional|none|The accountIDs of the configured offset accounts attached to this loan. Only offset accounts that can be accessed under the current authorisation should be included. It is expected behaviour that offsetAccountEnabled is set to true but the offsetAccountIds field is absent or empty. This represents a situation where an offset account exists but details can not be accessed under the current authorisation|
|repaymentType|string|optional|none|Options in place for repayments. If absent defaults to PRINCIPAL_AND_INTEREST|
|repaymentFrequency|[ExternalRef](#common-field-types)|mandatory|none|The expected or required repayment frequency. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)|

#### Enumerated Values

|Property|Value|
|---|---|
|repaymentType|INTEREST_ONLY|
|repaymentType|PRINCIPAL_AND_INTEREST|

<h2 id="tocSresponsebankingtransactionlist">ResponseBankingTransactionList</h2>

<a id="schemaresponsebankingtransactionlist"></a>

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

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|mandatory|none|none|
|» transactions|[[BankingTransaction](#schemabankingtransaction)]|mandatory|none|none|
|links|[LinksPaginated](#schemalinkspaginated)|mandatory|none|none|
|meta|[MetaPaginated](#schemametapaginated)|mandatory|none|none|

<h2 id="tocSbankingtransaction">BankingTransaction</h2>

<a id="schemabankingtransaction"></a>

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

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|[ASCIIString](#common-field-types)|mandatory|none|ID of the account for which transactions are provided|
|transactionId|[ASCIIString](#common-field-types)|conditional|none|A unique ID of the transaction adhering to the standards for ID permanence.  This is mandatory (through hashing if necessary) unless there are specific and justifiable technical reasons why a transaction cannot be uniquely identified for a particular account type|
|isDetailAvailable|[Boolean](#common-field-types)|mandatory|none|True if extended information is available using the transaction detail end point. False if extended data is not available|
|type|string|mandatory|none|The type of the transaction|
|status|string|mandatory|none|Status of the transaction whether pending or posted. Note that there is currently no provision in the standards to guarantee the ability to correlate a pending transaction with an associated posted transaction|
|description|string|mandatory|none|The transaction description as applied by the financial institution|
|postingDateTime|[DateTimeString](#common-field-types)|conditional|none|The time the transaction was posted. This field is Mandatory if the transaction has status POSTED.  This is the time that appears on a standard statement|
|valueDateTime|[DateTimeString](#common-field-types)|optional|none|Date and time at which assets become available to the account owner in case of a credit entry, or cease to be available to the account owner in case of a debit transaction entry|
|executionDateTime|[DateTimeString](#common-field-types)|optional|none|The time the transaction was executed by the originating customer, if available|
|amount|[AmountString](#common-field-types)|mandatory|none|The value of the transaction. Negative values mean money was outgoing from the account|
|currency|[CurrencyString](#common-field-types)|optional|none|The currency for the transaction amount. AUD assumed if not present|
|reference|string|mandatory|none|The reference for the transaction provided by the originating institution. Empty string if no data provided|
|merchantName|string|optional|none|Name of the merchant for an outgoing payment to a merchant|
|merchantCategoryCode|string|optional|none|The merchant category code (or MCC) for an outgoing payment to a merchant|
|billerCode|string|optional|none|BPAY Biller Code for the transaction (if available)|
|billerName|string|optional|none|Name of the BPAY biller for the transaction (if available)|
|crn|string|conditional|none|BPAY CRN for the transaction (if available).<br/>Where the CRN contains sensitive information, it should be masked in line with how the Data Holder currently displays account identifiers in their existing online banking channels. If the contents of the CRN match the format of a Credit Card PAN they should be masked according to the rules applicable for MaskedPANString. If the contents are are otherwise sensitive, then it should be masked using the rules applicable for the MaskedAccountString common type.|
|apcaNumber|string|optional|none|6 Digit APCA number for the initiating institution. The field is fixed-width and padded with leading zeros if applicable.|

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

<h2 id="tocSresponsebankingtransactionbyid">ResponseBankingTransactionById</h2>

<a id="schemaresponsebankingtransactionbyid"></a>

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

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[BankingTransactionDetail](#schemabankingtransactiondetail)|mandatory|none|none|
|links|[Links](#schemalinks)|mandatory|none|none|
|meta|[Meta](#schemameta)|optional|none|none|

<h2 id="tocSbankingtransactiondetail">BankingTransactionDetail</h2>

<a id="schemabankingtransactiondetail"></a>

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

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[BankingTransaction](#schemabankingtransaction)|mandatory|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|mandatory|none|none|
|» extendedData|object|mandatory|none|none|
|»» payer|string|conditional|none|Label of the originating payer. Mandatory for inbound payment|
|»» payee|string|conditional|none|Label of the target PayID.  Mandatory for an outbound payment. The name assigned to the BSB/Account Number or PayID (by the owner of the PayID)|
|»» extensionUType|string|optional|none|Optional extended data provided specific to transaction originated via NPP|
|»» x2p101Payload|object|optional|none|none|
|»»» extendedDescription|string|mandatory|none|An extended string description. Only present if specified by the extensionUType field|
|»»» endToEndId|string|optional|none|An end to end ID for the payment created at initiation|
|»»» purposeCode|string|optional|none|Purpose of the payment.  Format is defined by NPP standards for the x2p1.01 overlay service|
|»» service|string|mandatory|none|Identifier of the applicable overlay service. Valid values are: X2P1.01|

#### Enumerated Values

|Property|Value|
|---|---|
|extensionUType|x2p101Payload|
|service|X2P1.01|

<h2 id="tocSresponsebankingaccountsbalancelist">ResponseBankingAccountsBalanceList</h2>

<a id="schemaresponsebankingaccountsbalancelist"></a>

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

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|mandatory|none|none|
|» balances|[[BankingBalance](#schemabankingbalance)]|mandatory|none|The list of balances returned|
|links|[LinksPaginated](#schemalinkspaginated)|mandatory|none|none|
|meta|[MetaPaginated](#schemametapaginated)|mandatory|none|none|

<h2 id="tocSresponsebankingaccountsbalancebyid">ResponseBankingAccountsBalanceById</h2>

<a id="schemaresponsebankingaccountsbalancebyid"></a>

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

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[BankingBalance](#schemabankingbalance)|mandatory|none|none|
|links|[Links](#schemalinks)|mandatory|none|none|
|meta|[Meta](#schemameta)|optional|none|none|

<h2 id="tocSbankingbalance">BankingBalance</h2>

<a id="schemabankingbalance"></a>

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

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|[ASCIIString](#common-field-types)|mandatory|none|A unique ID of the account adhering to the standards for ID permanence|
|currentBalance|[AmountString](#common-field-types)|mandatory|none|The balance of the account at this time. Should align to the balance available via other channels such as Internet Banking. Assumed to be negative if the customer has money owing|
|availableBalance|[AmountString](#common-field-types)|mandatory|none|Balance representing the amount of funds available for transfer. Assumed to be zero or positive|
|creditLimit|[AmountString](#common-field-types)|optional|none|Object representing the maximum amount of credit that is available for this account. Assumed to be zero if absent|
|amortisedLimit|[AmountString](#common-field-types)|optional|none|Object representing the available limit amortised according to payment schedule. Assumed to be zero if absent|
|currency|[CurrencyString](#common-field-types)|optional|none|The currency for the balance amounts. If absent assumed to be AUD|
|purses|[[BankingBalancePurse](#schemabankingbalancepurse)]|optional|none|Optional array of balances for the account in other currencies. Included to support accounts that support multi-currency purses such as Travel Cards|

<h2 id="tocSbankingbalancepurse">BankingBalancePurse</h2>

<a id="schemabankingbalancepurse"></a>

```json
{
  "amount": "string",
  "currency": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|[AmountString](#common-field-types)|mandatory|none|The balance available for this additional currency purse|
|currency|[CurrencyString](#common-field-types)|optional|none|The currency for the purse|

<h2 id="tocSresponsebankingpayeelist">ResponseBankingPayeeList</h2>

<a id="schemaresponsebankingpayeelist"></a>

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

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|mandatory|none|none|
|» payees|[[BankingPayee](#schemabankingpayee)]|mandatory|none|The list of payees returned|
|links|[LinksPaginated](#schemalinkspaginated)|mandatory|none|none|
|meta|[MetaPaginated](#schemametapaginated)|mandatory|none|none|

<h2 id="tocSresponsebankingpayeebyid">ResponseBankingPayeeById</h2>

<a id="schemaresponsebankingpayeebyid"></a>

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

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[BankingPayeeDetail](#schemabankingpayeedetail)|mandatory|none|none|
|links|[Links](#schemalinks)|mandatory|none|none|
|meta|[Meta](#schemameta)|optional|none|none|

<h2 id="tocSbankingpayee">BankingPayee</h2>

<a id="schemabankingpayee"></a>

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

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|payeeId|[ASCIIString](#common-field-types)|mandatory|none|ID of the payee adhering to the rules of ID permanence|
|nickname|string|mandatory|none|The short display name of the payee as provided by the customer. Where a customer has not provided a nickname, a display name derived by the bank for the payee consistent with existing digital banking channels|
|description|string|optional|none|A description of the payee provided by the customer|
|type|string|mandatory|none|The type of payee. DOMESTIC means a registered payee for domestic payments including NPP. INTERNATIONAL means a registered payee for international payments. BILLER means a registered payee for BPAY|
|creationDate|[DateString](#common-field-types)|optional|none|The date the payee was created by the customer|

#### Enumerated Values

|Property|Value|
|---|---|
|type|BILLER|
|type|DOMESTIC|
|type|INTERNATIONAL|

<h2 id="tocSbankingpayeedetail">BankingPayeeDetail</h2>

<a id="schemabankingpayeedetail"></a>

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

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[BankingPayee](#schemabankingpayee)|mandatory|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|mandatory|none|none|
|» payeeUType|string|mandatory|none|Type of object included that describes the payee in detail|
|» domestic|[BankingDomesticPayee](#schemabankingdomesticpayee)|conditional|none|none|
|» biller|[BankingBillerPayee](#schemabankingbillerpayee)|conditional|none|none|
|» international|[BankingInternationalPayee](#schemabankinginternationalpayee)|conditional|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|payeeUType|biller|
|payeeUType|domestic|
|payeeUType|international|

<h2 id="tocSbankingdomesticpayee">BankingDomesticPayee</h2>

<a id="schemabankingdomesticpayee"></a>

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

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|payeeAccountUType|string|mandatory|none|Type of account object included. Valid values are: **account** A standard Australian account defined by BSB/Account Number. **card** A credit or charge card to pay to (note that PANs are masked). **payId** A PayID recognised by NPP|
|account|[BankingDomesticPayeeAccount](#schemabankingdomesticpayeeaccount)|conditional|none|none|
|card|[BankingDomesticPayeeCard](#schemabankingdomesticpayeecard)|conditional|none|none|
|payId|[BankingDomesticPayeePayId](#schemabankingdomesticpayeepayid)|conditional|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|payeeAccountUType|account|
|payeeAccountUType|card|
|payeeAccountUType|payId|

<h2 id="tocSbankingdomesticpayeeaccount">BankingDomesticPayeeAccount</h2>

<a id="schemabankingdomesticpayeeaccount"></a>

```json
{
  "accountName": "string",
  "bsb": "string",
  "accountNumber": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountName|string|optional|none|Name of the account to pay to|
|bsb|string|mandatory|none|BSB of the account to pay to|
|accountNumber|string|mandatory|none|Number of the account to pay to|

<h2 id="tocSbankingdomesticpayeecard">BankingDomesticPayeeCard</h2>

<a id="schemabankingdomesticpayeecard"></a>

```json
{
  "cardNumber": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cardNumber|[MaskedPANString](#common-field-types)|mandatory|none|Name of the account to pay to|

<h2 id="tocSbankingdomesticpayeepayid">BankingDomesticPayeePayId</h2>

<a id="schemabankingdomesticpayeepayid"></a>

```json
{
  "name": "string",
  "identifier": "string",
  "type": "ABN"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|optional|none|The name assigned to the PayID by the owner of the PayID|
|identifier|string|mandatory|none|The identifier of the PayID (dependent on type)|
|type|string|mandatory|none|The type of the PayID|

#### Enumerated Values

|Property|Value|
|---|---|
|type|ABN|
|type|EMAIL|
|type|ORG_IDENTIFIER|
|type|TELEPHONE|

<h2 id="tocSbankingbillerpayee">BankingBillerPayee</h2>

<a id="schemabankingbillerpayee"></a>

```json
{
  "billerCode": "string",
  "crn": "string",
  "billerName": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billerCode|string|mandatory|none|BPAY Biller Code of the Biller|
|crn|string|conditional|none|BPAY CRN of the Biller (if available).<br/>Where the CRN contains sensitive information, it should be masked in line with how the Data Holder currently displays account identifiers in their existing online banking channels. If the contents of the CRN match the format of a Credit Card PAN they should be masked according to the rules applicable for MaskedPANString. If the contents are are otherwise sensitive, then it should be masked using the rules applicable for the MaskedAccountString common type.|
|billerName|string|mandatory|none|Name of the Biller|

<h2 id="tocSbankinginternationalpayee">BankingInternationalPayee</h2>

<a id="schemabankinginternationalpayee"></a>

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

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|beneficiaryDetails|object|mandatory|none|none|
|» name|string|optional|none|Name of the beneficiary|
|» country|[ExternalRef](#common-field-types)|mandatory|none|Country where the beneficiary resides. A valid [ISO 3166 Alpha-3](https://www.iso.org/iso-3166-country-codes.html) country code|
|» message|string|optional|none|Response message for the payment|
|bankDetails|object|mandatory|none|none|
|» country|[ExternalRef](#common-field-types)|mandatory|none|Country of the recipient institution. A valid [ISO 3166 Alpha-3](https://www.iso.org/iso-3166-country-codes.html) country code|
|» accountNumber|string|mandatory|none|Account Targeted for payment|
|» bankAddress|object|optional|none|none|
|»» name|string|mandatory|none|Name of the recipient Bank|
|»» address|string|mandatory|none|Address of the recipient Bank|
|» beneficiaryBankBIC|[ExternalRef](#common-field-types)|optional|none|Swift bank code.  Aligns with standard [ISO 9362](https://www.iso.org/standard/60390.html)|
|» fedWireNumber|string|optional|none|Number for Fedwire payment (Federal Reserve Wire Network)|
|» sortCode|string|optional|none|Sort code used for account identification in some jurisdictions|
|» chipNumber|string|optional|none|Number for the Clearing House Interbank Payments System|
|» routingNumber|string|optional|none|International bank routing number|
|» legalEntityIdentifier|[ExternalRef](#common-field-types)|optional|none|The legal entity identifier (LEI) for the beneficiary.  Aligns with [ISO 17442](https://www.iso.org/standard/59771.html)|

<h2 id="tocSresponsebankingdirectdebitauthorisationlist">ResponseBankingDirectDebitAuthorisationList</h2>

<a id="schemaresponsebankingdirectdebitauthorisationlist"></a>

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

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|mandatory|none|none|
|» directDebitAuthorisations|[[BankingDirectDebit](#schemabankingdirectdebit)]|mandatory|none|The list of authorisations returned|
|links|[LinksPaginated](#schemalinkspaginated)|mandatory|none|none|
|meta|[MetaPaginated](#schemametapaginated)|mandatory|none|none|

<h2 id="tocSbankingdirectdebit">BankingDirectDebit</h2>

<a id="schemabankingdirectdebit"></a>

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

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|[ASCIIString](#common-field-types)|mandatory|none|A unique ID of the account adhering to the standards for ID permanence.|
|authorisedEntity|[BankingAuthorisedEntity](#schemabankingauthorisedentity)|mandatory|none|none|
|lastDebitDateTime|[DateTimeString](#common-field-types)|optional|none|The date and time of the last debit executed under this authorisation|
|lastDebitAmount|[AmountString](#common-field-types)|optional|none|The amount of the last debit executed under this authorisation|

<h2 id="tocSbankingauthorisedentity">BankingAuthorisedEntity</h2>

<a id="schemabankingauthorisedentity"></a>

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

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|optional|none|Description of the authorised entity derived from previously executed direct debits|
|financialInstitution|string|optional|none|Name of the financial institution through which the direct debit will be executed. Is required unless the payment is made via a credit card scheme|
|abn|string|optional|none|Australian Business Number for the authorised entity|
|acn|string|optional|none|Australian Company Number for the authorised entity|
|arbn|string|optional|none|Australian Registered Body Number for the authorised entity|

<h2 id="tocSresponsebankingscheduledpaymentslist">ResponseBankingScheduledPaymentsList</h2>

<a id="schemaresponsebankingscheduledpaymentslist"></a>

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
            "nonBusinessDayTreatment": "ON",
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
            "nonBusinessDayTreatment": "ON"
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

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|mandatory|none|none|
|» scheduledPayments|[[BankingScheduledPayment](#schemabankingscheduledpayment)]|mandatory|none|The list of scheduled payments to return|
|links|[LinksPaginated](#schemalinkspaginated)|mandatory|none|none|
|meta|[MetaPaginated](#schemametapaginated)|mandatory|none|none|

<h2 id="tocSbankingscheduledpayment">BankingScheduledPayment</h2>

<a id="schemabankingscheduledpayment"></a>

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
      "nonBusinessDayTreatment": "ON",
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
      "nonBusinessDayTreatment": "ON"
    },
    "eventBased": {
      "description": "string"
    }
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|scheduledPaymentId|[ASCIIString](#common-field-types)|mandatory|none|A unique ID of the scheduled payment adhering to the standards for ID permanence|
|nickname|string|optional|none|The short display name of the scheduled payment as provided by the customer if provided. Where a customer has not provided a nickname, a display name derived by the bank for the scheduled payment should be provided that is consistent with existing digital banking channels|
|payerReference|string|mandatory|none|The reference for the transaction that will be used by the originating institution for the purposes of constructing a statement narrative on the payer’s account. Empty string if no data provided|
|payeeReference|string|conditional|none|The reference for the transaction, if applicable, that will be provided by the originating institution for all payments in the payment set. Empty string if no data provided|
|status|string|mandatory|none|Indicates whether the schedule is currently active. The value SKIP is equivalent to ACTIVE except that the customer has requested the next normal occurrence to be skipped.|
|from|[BankingScheduledPaymentFrom](#schemabankingscheduledpaymentfrom)|mandatory|none|Object containing details of the source of the payment. Currently only specifies an account ID but provided as an object to facilitate future extensibility and consistency with the to object|
|paymentSet|[[BankingScheduledPaymentSet](#schemabankingscheduledpaymentset)]|mandatory|none|[The set of payment amounts and destination accounts for this payment accommodating multi-part payments. A single entry indicates a simple payment with one destination account. Must have at least one entry]|
|recurrence|[BankingScheduledPaymentRecurrence](#schemabankingscheduledpaymentrecurrence)|mandatory|none|Object containing the detail of the schedule for the payment|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ACTIVE|
|status|INACTIVE|
|status|SKIP|

<h2 id="tocSbankingscheduledpaymentset">BankingScheduledPaymentSet</h2>

<a id="schemabankingscheduledpaymentset"></a>

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

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|to|[BankingScheduledPaymentTo](#schemabankingscheduledpaymentto)|mandatory|none|Object containing details of the destination of the payment. Used to specify a variety of payment destination types|
|isAmountCalculated|[Boolean](#common-field-types)|optional|none|Flag indicating whether the amount of the payment is calculated based on the context of the event. For instance a payment to reduce the balance of a credit card to zero. If absent then false is assumed|
|amount|[AmountString](#common-field-types)|conditional|none|The amount of the next payment if known. Mandatory unless the isAmountCalculated field is set to true. Must be zero or positive if present|
|currency|[CurrencyString](#common-field-types)|optional|none|The currency for the payment. AUD assumed if not present|

<h2 id="tocSbankingscheduledpaymentto">BankingScheduledPaymentTo</h2>

<a id="schemabankingscheduledpaymentto"></a>

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

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|toUType|string|mandatory|none|The type of object provided that specifies the destination of the funds for the payment.|
|accountId|[ASCIIString](#common-field-types)|conditional|none|Present if toUType is set to accountId. Indicates that the payment is to another account that is accessible under the current consent|
|payeeId|[ASCIIString](#common-field-types)|conditional|none|Present if toUType is set to payeeId. Indicates that the payment is to registered payee that can be accessed using the payee end point. If the Bank Payees scope has not been consented to then a payeeId should not be provided and the full payee details should be provided instead|
|nickname|string|conditional|none|The short display name of the payee as provided by the customer unless toUType is set to payeeId. Where a customer has not provided a nickname, a display name derived by the bank for payee should be provided that is consistent with existing digital banking channels|
|payeeReference|string|conditional|none|The reference for the transaction, if applicable, that will be provided by the originating institution for the specific payment. If not empty, it overrides the value provided at the BankingScheduledPayment level.|
|domestic|[BankingDomesticPayee](#schemabankingdomesticpayee)|conditional|none|none|
|biller|[BankingBillerPayee](#schemabankingbillerpayee)|conditional|none|none|
|international|[BankingInternationalPayee](#schemabankinginternationalpayee)|conditional|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|toUType|accountId|
|toUType|biller|
|toUType|domestic|
|toUType|international|
|toUType|payeeId|

<h2 id="tocSbankingscheduledpaymentfrom">BankingScheduledPaymentFrom</h2>

<a id="schemabankingscheduledpaymentfrom"></a>

```json
{
  "accountId": "string"
}

```

*Object containing details of the source of the payment. Currently only specifies an account ID but provided as an object to facilitate future extensibility and consistency with the to object*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|[ASCIIString](#common-field-types)|mandatory|none|ID of the account that is the source of funds for the payment|

<h2 id="tocSbankingscheduledpaymentrecurrence">BankingScheduledPaymentRecurrence</h2>

<a id="schemabankingscheduledpaymentrecurrence"></a>

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
    "nonBusinessDayTreatment": "ON",
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
    "nonBusinessDayTreatment": "ON"
  },
  "eventBased": {
    "description": "string"
  }
}

```

*Object containing the detail of the schedule for the payment*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPaymentDate|[DateString](#common-field-types)|optional|none|The date of the next payment under the recurrence schedule|
|recurrenceUType|string|mandatory|none|The type of recurrence used to define the schedule|
|onceOff|[BankingScheduledPaymentRecurrenceOnceOff](#schemabankingscheduledpaymentrecurrenceonceoff)|conditional|none|Indicates that the payment is a once off payment on a specific future date. Mandatory if recurrenceUType is set to onceOff|
|intervalSchedule|[BankingScheduledPaymentRecurrenceIntervalSchedule](#schemabankingscheduledpaymentrecurrenceintervalschedule)|conditional|none|Indicates that the schedule of payments is defined by a series of intervals. Mandatory if recurrenceUType is set to intervalSchedule|
|lastWeekDay|[BankingScheduledPaymentRecurrenceLastWeekday](#schemabankingscheduledpaymentrecurrencelastweekday)|conditional|none|Indicates that the schedule of payments is defined according to the last occurrence of a specific weekday in an interval. Mandatory if recurrenceUType is set to lastWeekDay|
|eventBased|[BankingScheduledPaymentRecurrenceEventBased](#schemabankingscheduledpaymentrecurrenceeventbased)|conditional|none|Indicates that the schedule of payments is defined according to an external event that cannot be predetermined. Mandatory if recurrenceUType is set to eventBased|

#### Enumerated Values

|Property|Value|
|---|---|
|recurrenceUType|eventBased|
|recurrenceUType|intervalSchedule|
|recurrenceUType|lastWeekDay|
|recurrenceUType|onceOff|

<h2 id="tocSbankingscheduledpaymentrecurrenceonceoff">BankingScheduledPaymentRecurrenceOnceOff</h2>

<a id="schemabankingscheduledpaymentrecurrenceonceoff"></a>

```json
{
  "paymentDate": "string"
}

```

*Indicates that the payment is a once off payment on a specific future date. Mandatory if recurrenceUType is set to onceOff*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|paymentDate|[DateString](#common-field-types)|mandatory|none|The scheduled date for the once off payment|

<h2 id="tocSbankingscheduledpaymentrecurrenceintervalschedule">BankingScheduledPaymentRecurrenceIntervalSchedule</h2>

<a id="schemabankingscheduledpaymentrecurrenceintervalschedule"></a>

```json
{
  "finalPaymentDate": "string",
  "paymentsRemaining": 1,
  "nonBusinessDayTreatment": "ON",
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

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|finalPaymentDate|[DateString](#common-field-types)|optional|none|The limit date after which no more payments should be made using this schedule. If both finalPaymentDate and paymentsRemaining are present then payments will stop according to the most constraining value. If neither field is present the payments will continue indefinitely|
|paymentsRemaining|[PositiveInteger](#common-field-types)|optional|none|Indicates the number of payments remaining in the schedule. If both finalPaymentDate and paymentsRemaining are present then payments will stop according to the most constraining value, If neither field is present the payments will continue indefinitely|
|nonBusinessDayTreatment|string|optional|none|Enumerated field giving the treatment where a scheduled payment date is not a business day. If absent assumed to be ON.<br/>**AFTER** - If a scheduled payment date is a non-business day the payment will be made on the first business day after the scheduled payment date.<br/>**BEFORE** - If a scheduled payment date is a non-business day the payment will be made on the first business day before the scheduled payment date.<br/>**ON** - If a scheduled payment date is a non-business day the payment will be made on that day regardless.<br/>**ONLY** - Payments only occur on business days. If a scheduled payment date is a non-business day the payment will be ignored|
|intervals|[[BankingScheduledPaymentInterval](#schemabankingscheduledpaymentinterval)]|mandatory|none|An array of interval objects defining the payment schedule.  Each entry in the array is additive, in that it adds payments to the overall payment schedule.  If multiple intervals result in a payment on the same day then only one payment will be made. Must have at least one entry|

#### Enumerated Values

|Property|Value|
|---|---|
|nonBusinessDayTreatment|AFTER|
|nonBusinessDayTreatment|BEFORE|
|nonBusinessDayTreatment|ON|
|nonBusinessDayTreatment|ONLY|

<h2 id="tocSbankingscheduledpaymentinterval">BankingScheduledPaymentInterval</h2>

<a id="schemabankingscheduledpaymentinterval"></a>

```json
{
  "interval": "string",
  "dayInInterval": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|interval|[ExternalRef](#common-field-types)|mandatory|none|An interval for the payment. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations)  (excludes recurrence syntax) with components less than a day in length ignored. This duration defines the period between payments starting with nextPaymentDate|
|dayInInterval|[ExternalRef](#common-field-types)|optional|none|Uses an interval to define the ordinal day within the interval defined by the interval field on which the payment occurs. If the resulting duration is 0 days in length or larger than the number of days in the interval then the payment will occur on the last day of the interval. A duration of 1 day indicates the first day of the interval. If absent the assumed value is P1D. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax) with components less than a day in length ignored. The first day of a week is considered to be Monday.|

<h2 id="tocSbankingscheduledpaymentrecurrencelastweekday">BankingScheduledPaymentRecurrenceLastWeekday</h2>

<a id="schemabankingscheduledpaymentrecurrencelastweekday"></a>

```json
{
  "finalPaymentDate": "string",
  "paymentsRemaining": 1,
  "interval": "string",
  "lastWeekDay": "FRI",
  "nonBusinessDayTreatment": "ON"
}

```

*Indicates that the schedule of payments is defined according to the last occurrence of a specific weekday in an interval. Mandatory if recurrenceUType is set to lastWeekDay*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|finalPaymentDate|[DateString](#common-field-types)|optional|none|The limit date after which no more payments should be made using this schedule. If both finalPaymentDate and paymentsRemaining are present then payments will stop according to the most constraining value. If neither field is present the payments will continue indefinitely|
|paymentsRemaining|[PositiveInteger](#common-field-types)|optional|none|Indicates the number of payments remaining in the schedule. If both finalPaymentDate and paymentsRemaining are present then payments will stop according to the most constraining value. If neither field is present the payments will continue indefinitely|
|interval|[ExternalRef](#common-field-types)|mandatory|none|The interval for the payment. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax) with components less than a day in length ignored. This duration defines the period between payments starting with nextPaymentDate|
|lastWeekDay|string|mandatory|none|The weekDay specified. The payment will occur on the last occurrence of this weekday in the interval.|
|nonBusinessDayTreatment|string|optional|none|Enumerated field giving the treatment where a scheduled payment date is not a business day. If absent assumed to be ON.<br/>**AFTER** - If a scheduled payment date is a non-business day the payment will be made on the first business day after the scheduled payment date.<br/>**BEFORE** - If a scheduled payment date is a non-business day the payment will be made on the first business day before the scheduled payment date.<br/>**ON** - If a scheduled payment date is a non-business day the payment will be made on that day regardless.<br/>**ONLY** - Payments only occur on business days. If a scheduled payment date is a non-business day the payment will be ignored|

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

<h2 id="tocSbankingscheduledpaymentrecurrenceeventbased">BankingScheduledPaymentRecurrenceEventBased</h2>

<a id="schemabankingscheduledpaymentrecurrenceeventbased"></a>

```json
{
  "description": "string"
}

```

*Indicates that the schedule of payments is defined according to an external event that cannot be predetermined. Mandatory if recurrenceUType is set to eventBased*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|mandatory|none|Description of the event and conditions that will result in the payment. Expected to be formatted for display to a customer|

<h2 id="tocSresponsecommondiscoverystatus">ResponseCommonDiscoveryStatus</h2>

<a id="schemaresponsecommondiscoverystatus"></a>

```json
{
  "data": {
    "status": "OK",
    "explanation": "string",
    "detectionTime": "string",
    "expectedResolutionTime": "string",
    "updateTime": "string"
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
|» status|string|mandatory|none|Enumeration with values. OK (implementation is fully functional). PARTIAL_FAILURE (one or more end points are unexpectedly unavailable). UNAVAILABLE (the full implementation is unexpectedly unavailable). SCHEDULED_OUTAGE (an advertised outage is in effect)|
|» explanation|string|conditional|none|Provides an explanation of the current outage that can be displayed to an end customer. Mandatory if the status property is any value other than OK|
|» detectionTime|[DateTimeString](#common-field-types)|optional|none|The date and time that the current outage was detected. Should only be present if the status property is PARTIAL_FAILURE or UNAVAILABLE|
|» expectedResolutionTime|[DateTimeString](#common-field-types)|optional|none|The date and time that full service is expected to resume (if known). Should not be present if the status property has a value of OK.|
|» updateTime|[DateTimeString](#common-field-types)|mandatory|none|The date and time that this status was last updated by the Data Holder.|
|links|[Links](#schemalinks)|mandatory|none|none|
|meta|[Meta](#schemameta)|optional|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|
|status|PARTIAL_FAILURE|
|status|SCHEDULED_OUTAGE|
|status|UNAVAILABLE|

<h2 id="tocSresponsediscoveryoutageslist">ResponseDiscoveryOutagesList</h2>

<a id="schemaresponsediscoveryoutageslist"></a>

```json
{
  "data": {
    "outages": [
      {
        "outageTime": "string",
        "duration": "string",
        "isPartial": true,
        "explanation": "string"
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

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|mandatory|none|none|
|» outages|[[DiscoveryOutage](#schemadiscoveryoutage)]|mandatory|none|List of scheduled outages. Property is mandatory but may contain and empty list if no outages are scheduled|
|links|[Links](#schemalinks)|mandatory|none|none|
|meta|[Meta](#schemameta)|optional|none|none|

<h2 id="tocSdiscoveryoutage">DiscoveryOutage</h2>

<a id="schemadiscoveryoutage"></a>

```json
{
  "outageTime": "string",
  "duration": "string",
  "isPartial": true,
  "explanation": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|outageTime|[DateTimeString](#common-field-types)|mandatory|none|Date and time that the outage is scheduled to begin|
|duration|[ExternalRef](#common-field-types)|mandatory|none|Planned duration of the outage. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)|
|isPartial|[Boolean](#common-field-types)|optional|none|Flag that indicates, if present and set to true, that the outage is only partial meaning that only a subset of normally available end points will be affected by the outage|
|explanation|string|mandatory|none|Provides an explanation of the current outage that can be displayed to an end customer|

<h2 id="tocSresponsecommoncustomer">ResponseCommonCustomer</h2>

<a id="schemaresponsecommoncustomer"></a>

```json
{
  "data": {
    "customerUType": "organisation",
    "person": {
      "lastUpdateTime": "string",
      "firstName": "string",
      "lastName": "string",
      "middleNames": [
        "string"
      ],
      "prefix": "string",
      "suffix": "string",
      "occupationCode": "string",
      "occupationCodeVersion": "ANZSCO_1220.0_2013_V1.2"
    },
    "organisation": {
      "lastUpdateTime": "string",
      "agentFirstName": "string",
      "agentLastName": "string",
      "agentRole": "string",
      "businessName": "string",
      "legalName": "string",
      "shortName": "string",
      "abn": "string",
      "acn": "string",
      "isACNCRegistered": true,
      "industryCode": "string",
      "industryCodeVersion": "ANZSIC_1292.0_2006_V2.0",
      "organisationType": "COMPANY",
      "registeredCountry": "string",
      "establishmentDate": "string"
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
|» customerUType|string|mandatory|none|The type of customer object that is present|
|» person|[CommonPerson](#schemacommonperson)|conditional|none|Mandatory if `customerUType` is `person`|
|» organisation|[CommonOrganisation](#schemacommonorganisation)|conditional|none|Mandatory if `customerUType` is `organisation`|
|links|[Links](#schemalinks)|mandatory|none|none|
|meta|[Meta](#schemameta)|optional|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|customerUType|organisation|
|customerUType|person|

<h2 id="tocSresponsecommoncustomerdetail">ResponseCommonCustomerDetail</h2>

<a id="schemaresponsecommoncustomerdetail"></a>

```json
{
  "data": {
    "customerUType": "organisation",
    "person": {
      "lastUpdateTime": "string",
      "firstName": "string",
      "lastName": "string",
      "middleNames": [
        "string"
      ],
      "prefix": "string",
      "suffix": "string",
      "occupationCode": "string",
      "occupationCodeVersion": "ANZSCO_1220.0_2013_V1.2",
      "phoneNumbers": [
        {
          "isPreferred": true,
          "purpose": "HOME",
          "countryCode": "string",
          "areaCode": "string",
          "number": "string",
          "extension": "string",
          "fullNumber": "string"
        }
      ],
      "emailAddresses": [
        {
          "isPreferred": true,
          "purpose": "HOME",
          "address": "string"
        }
      ],
      "physicalAddresses": [
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
          },
          "purpose": "MAIL"
        }
      ]
    },
    "organisation": {
      "lastUpdateTime": "string",
      "agentFirstName": "string",
      "agentLastName": "string",
      "agentRole": "string",
      "businessName": "string",
      "legalName": "string",
      "shortName": "string",
      "abn": "string",
      "acn": "string",
      "isACNCRegistered": true,
      "industryCode": "string",
      "industryCodeVersion": "ANZSIC_1292.0_2006_V2.0",
      "organisationType": "COMPANY",
      "registeredCountry": "string",
      "establishmentDate": "string",
      "physicalAddresses": [
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
          },
          "purpose": "MAIL"
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

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|mandatory|none|none|
|» customerUType|string|mandatory|none|The type of customer object that is present|
|» person|[CommonPersonDetail](#schemacommonpersondetail)|conditional|none|Mandatory if `customerUType` is `person`|
|» organisation|[CommonOrganisationDetail](#schemacommonorganisationdetail)|conditional|none|Mandatory if `customerUType` is `organisation`|
|links|[Links](#schemalinks)|mandatory|none|none|
|meta|[Meta](#schemameta)|optional|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|customerUType|organisation|
|customerUType|person|

<h2 id="tocScommonperson">CommonPerson</h2>

<a id="schemacommonperson"></a>

```json
{
  "lastUpdateTime": "string",
  "firstName": "string",
  "lastName": "string",
  "middleNames": [
    "string"
  ],
  "prefix": "string",
  "suffix": "string",
  "occupationCode": "string",
  "occupationCodeVersion": "ANZSCO_1220.0_2013_V1.2"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lastUpdateTime|[DateTimeString](#common-field-types)|optional|none|The date and time that this record was last updated by the customer.  If no update has occurred then this date should reflect the initial creation date for the data|
|firstName|string|optional|none|For people with single names this field need not be present.  The single name should be in the lastName field|
|lastName|string|mandatory|none|For people with single names the single name should be in this field|
|middleNames|[string]|mandatory|none|Field is mandatory but array may be empty|
|prefix|string|optional|none|Also known as title or salutation.  The prefix to the name (e.g. Mr, Mrs, Ms, Miss, Sir, etc)|
|suffix|string|optional|none|Used for a trailing suffix to the name (e.g. Jr)|
|occupationCode|[ExternalRef](#common-field-types)|optional|none|Value is a valid [ANZSCO](http://www.abs.gov.au/ANZSCO) Standard Occupation classification code. If the occupation code held by the data holder is not one of the supported [ANZSCO](http://www.abs.gov.au/ANZSCO) versions, then it must not be supplied.|
|occupationCodeVersion|string|conditional|none|The applicable [ANZSCO](http://www.abs.gov.au/ANZSCO) release version of the occupation code provided. Mandatory if an ``occupationCode`` is supplied. If ``occupationCode`` is supplied but ``occupationCodeVersion`` is absent, default is ``ANZSCO_1220.0_2013_V1.2``|

#### Enumerated Values

|Property|Value|
|---|---|
|occupationCodeVersion|ANZSCO_1220.0_2006_V1.0|
|occupationCodeVersion|ANZSCO_1220.0_2006_V1.1|
|occupationCodeVersion|ANZSCO_1220.0_2013_V1.2|
|occupationCodeVersion|ANZSCO_1220.0_2013_V1.3|

<h2 id="tocScommonpersondetail">CommonPersonDetail</h2>

<a id="schemacommonpersondetail"></a>

```json
{
  "lastUpdateTime": "string",
  "firstName": "string",
  "lastName": "string",
  "middleNames": [
    "string"
  ],
  "prefix": "string",
  "suffix": "string",
  "occupationCode": "string",
  "occupationCodeVersion": "ANZSCO_1220.0_2013_V1.2",
  "phoneNumbers": [
    {
      "isPreferred": true,
      "purpose": "HOME",
      "countryCode": "string",
      "areaCode": "string",
      "number": "string",
      "extension": "string",
      "fullNumber": "string"
    }
  ],
  "emailAddresses": [
    {
      "isPreferred": true,
      "purpose": "HOME",
      "address": "string"
    }
  ],
  "physicalAddresses": [
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
      },
      "purpose": "MAIL"
    }
  ]
}

```

### Properties

*allOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[CommonPerson](#schemacommonperson)|mandatory|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|mandatory|none|none|
|» phoneNumbers|[[CommonPhoneNumber](#schemacommonphonenumber)]|mandatory|none|Array is mandatory but may be empty if no phone numbers are held|
|» emailAddresses|[[CommonEmailAddress](#schemacommonemailaddress)]|mandatory|none|May be empty|
|» physicalAddresses|[[CommonPhysicalAddressWithPurpose](#schemacommonphysicaladdresswithpurpose)]|mandatory|none|Must contain at least one address. One and only one address may have the purpose of REGISTERED. Zero or one, and no more than one, record may have the purpose of MAIL. If zero then the REGISTERED address is to be used for mail|

<h2 id="tocScommonorganisation">CommonOrganisation</h2>

<a id="schemacommonorganisation"></a>

```json
{
  "lastUpdateTime": "string",
  "agentFirstName": "string",
  "agentLastName": "string",
  "agentRole": "string",
  "businessName": "string",
  "legalName": "string",
  "shortName": "string",
  "abn": "string",
  "acn": "string",
  "isACNCRegistered": true,
  "industryCode": "string",
  "industryCodeVersion": "ANZSIC_1292.0_2006_V2.0",
  "organisationType": "COMPANY",
  "registeredCountry": "string",
  "establishmentDate": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lastUpdateTime|[DateTimeString](#common-field-types)|optional|none|The date and time that this record was last updated by the customer. If no update has occurred then this date should reflect the initial creation date for the data|
|agentFirstName|string|optional|none|The first name of the individual providing access on behalf of the organisation. For people with single names this field need not be present.  The single name should be in the lastName field|
|agentLastName|string|mandatory|none|The last name of the individual providing access on behalf of the organisation. For people with single names the single name should be in this field|
|agentRole|string|mandatory|none|The role of the individual identified as the agent who is providing authorisation.  Expected to be used for display. Default to Unspecified if the role is not known|
|businessName|string|mandatory|none|Name of the organisation|
|legalName|string|optional|none|Legal name, if different to the business name|
|shortName|string|optional|none|Short name used for communication, if different to the business name|
|abn|string|optional|none|Australian Business Number for the organisation|
|acn|string|optional|none|Australian Company Number for the organisation. Required only if an ACN is applicable for the organisation type|
|isACNCRegistered|[Boolean](#common-field-types)|optional|none|True if registered with the ACNC.  False if not. Absent or null if not confirmed.|
|industryCode|[ExternalRef](#common-field-types)|optional|none|A valid [ANZSIC](http://www.abs.gov.au/ANZSIC) code for the organisation. If the industry code held by the data holder is not one of the supported [ANZSIC](http://www.abs.gov.au/ANZSIC) versions, then it must not be supplied.|
|industryCodeVersion|string|conditional|none|The applicable [ANZSIC](http://www.abs.gov.au/ANZSIC) release version of the industry code provided. Should only be supplied if ``industryCode`` is also supplied. If ``industryCode`` is supplied but ``industryCodeVersion`` is absent, default is ``ANZSIC_1292.0_2006_V2.0``|
|organisationType|string|mandatory|none|Legal organisation type|
|registeredCountry|[ExternalRef](#common-field-types)|optional|none|Enumeration with values from [ISO 3166 Alpha-3](https://www.iso.org/iso-3166-country-codes.html) country codes.  Assumed to be AUS if absent|
|establishmentDate|[DateString](#common-field-types)|optional|none|The date the organisation described was established|

#### Enumerated Values

|Property|Value|
|---|---|
|industryCodeVersion|ANZSIC_1292.0_2006_V1.0|
|industryCodeVersion|ANZSIC_1292.0_2006_V2.0|
|organisationType|COMPANY|
|organisationType|GOVERNMENT_ENTITY|
|organisationType|OTHER|
|organisationType|PARTNERSHIP|
|organisationType|SOLE_TRADER|
|organisationType|TRUST|

<h2 id="tocScommonorganisationdetail">CommonOrganisationDetail</h2>

<a id="schemacommonorganisationdetail"></a>

```json
{
  "lastUpdateTime": "string",
  "agentFirstName": "string",
  "agentLastName": "string",
  "agentRole": "string",
  "businessName": "string",
  "legalName": "string",
  "shortName": "string",
  "abn": "string",
  "acn": "string",
  "isACNCRegistered": true,
  "industryCode": "string",
  "industryCodeVersion": "ANZSIC_1292.0_2006_V2.0",
  "organisationType": "COMPANY",
  "registeredCountry": "string",
  "establishmentDate": "string",
  "physicalAddresses": [
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
      },
      "purpose": "MAIL"
    }
  ]
}

```

### Properties

*allOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[CommonOrganisation](#schemacommonorganisation)|mandatory|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|mandatory|none|none|
|» physicalAddresses|[[CommonPhysicalAddressWithPurpose](#schemacommonphysicaladdresswithpurpose)]|mandatory|none|Must contain at least one address. One and only one address may have the purpose of REGISTERED. Zero or one, and no more than one, record may have the purpose of MAIL. If zero then the REGISTERED address is to be used for mail|

<h2 id="tocScommonphonenumber">CommonPhoneNumber</h2>

<a id="schemacommonphonenumber"></a>

```json
{
  "isPreferred": true,
  "purpose": "HOME",
  "countryCode": "string",
  "areaCode": "string",
  "number": "string",
  "extension": "string",
  "fullNumber": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|isPreferred|[Boolean](#common-field-types)|optional|none|May be true for one and only one entry to indicate the preferred phone number. Assumed to be 'false' if not present|
|purpose|string|mandatory|none|The purpose of the number as specified by the customer|
|countryCode|string|optional|none|If absent, assumed to be Australia (+61). The + should be included|
|areaCode|string|conditional|none|Required for non Mobile Phones, if field is present and refers to Australian code - the leading 0 should be omitted.|
|number|string|mandatory|none|The actual phone number, with leading zeros as appropriate|
|extension|string|optional|none|An extension number (if applicable)|
|fullNumber|[ExternalRef](#common-field-types)|mandatory|none|Fully formatted phone number with country code, area code, number and extension incorporated. Formatted according to section 5.1.4. of [RFC 3966](https://www.ietf.org/rfc/rfc3966.txt)|

#### Enumerated Values

|Property|Value|
|---|---|
|purpose|HOME|
|purpose|INTERNATIONAL|
|purpose|MOBILE|
|purpose|OTHER|
|purpose|UNSPECIFIED|
|purpose|WORK|

<h2 id="tocScommonemailaddress">CommonEmailAddress</h2>

<a id="schemacommonemailaddress"></a>

```json
{
  "isPreferred": true,
  "purpose": "HOME",
  "address": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|isPreferred|[Boolean](#common-field-types)|optional|none|May be true for one and only one email record in the collection. Denotes the default email address|
|purpose|string|mandatory|none|The purpose for the email, as specified by the customer (Enumeration)|
|address|[ExternalRef](#common-field-types)|mandatory|none|A correctly formatted email address, as defined by the addr_spec format in [RFC 5322](https://www.ietf.org/rfc/rfc5322.txt)|

#### Enumerated Values

|Property|Value|
|---|---|
|purpose|HOME|
|purpose|OTHER|
|purpose|UNSPECIFIED|
|purpose|WORK|

<h2 id="tocScommonphysicaladdresswithpurpose">CommonPhysicalAddressWithPurpose</h2>

<a id="schemacommonphysicaladdresswithpurpose"></a>

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
  },
  "purpose": "MAIL"
}

```

### Properties

*allOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[CommonPhysicalAddress](#schemacommonphysicaladdress)|mandatory|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|mandatory|none|none|
|» purpose|string|mandatory|none|Enumeration of values indicating the purpose of the physical address|

#### Enumerated Values

|Property|Value|
|---|---|
|purpose|MAIL|
|purpose|OTHER|
|purpose|PHYSICAL|
|purpose|REGISTERED|
|purpose|WORK|

<h2 id="tocScommonphysicaladdress">CommonPhysicalAddress</h2>

<a id="schemacommonphysicaladdress"></a>

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

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addressUType|string|mandatory|none|The type of address object present|
|simple|[CommonSimpleAddress](#schemacommonsimpleaddress)|conditional|none|none|
|paf|[CommonPAFAddress](#schemacommonpafaddress)|conditional|none|Australian address formatted according to the file format defined by the [PAF file format](https://auspost.com.au/content/dam/auspost_corp/media/documents/australia-post-data-guide.pdf)|

#### Enumerated Values

|Property|Value|
|---|---|
|addressUType|paf|
|addressUType|simple|

<h2 id="tocScommonsimpleaddress">CommonSimpleAddress</h2>

<a id="schemacommonsimpleaddress"></a>

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

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mailingName|string|optional|none|Name of the individual or business formatted for inclusion in an address used for physical mail|
|addressLine1|string|mandatory|none|First line of the standard address object|
|addressLine2|string|optional|none|Second line of the standard address object|
|addressLine3|string|optional|none|Third line of the standard address object|
|postcode|string|conditional|none|Mandatory for Australian addresses|
|city|string|mandatory|none|Name of the city or locality|
|state|string|mandatory|none|Free text if the country is not Australia. If country is Australia then must be one of the values defined by the [State Type Abbreviation](https://auspost.com.au/content/dam/auspost_corp/media/documents/australia-post-data-guide.pdf) in the PAF file format. NSW, QLD, VIC, NT, WA, SA, TAS, ACT, AAT|
|country|[ExternalRef](#common-field-types)|optional|none|A valid [ISO 3166 Alpha-3](https://www.iso.org/iso-3166-country-codes.html) country code. Australia (AUS) is assumed if country is not present.|

<h2 id="tocScommonpafaddress">CommonPAFAddress</h2>

<a id="schemacommonpafaddress"></a>

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

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dpid|string|optional|none|Unique identifier for an address as defined by Australia Post.  Also known as Delivery Point Identifier|
|thoroughfareNumber1|[PositiveInteger](#common-field-types)|optional|none|Thoroughfare number for a property (first number in a property ranged address)|
|thoroughfareNumber1Suffix|string|optional|none|Suffix for the thoroughfare number. Only relevant is thoroughfareNumber1 is populated|
|thoroughfareNumber2|[PositiveInteger](#common-field-types)|optional|none|Second thoroughfare number (only used if the property has a ranged address eg 23-25)|
|thoroughfareNumber2Suffix|string|optional|none|Suffix for the second thoroughfare number. Only relevant is thoroughfareNumber2 is populated|
|flatUnitType|string|optional|none|Type of flat or unit for the address|
|flatUnitNumber|string|optional|none|Unit number (including suffix, if applicable)|
|floorLevelType|string|optional|none|Type of floor or level for the address|
|floorLevelNumber|string|optional|none|Floor or level number (including alpha characters)|
|lotNumber|string|optional|none|Allotment number for the address|
|buildingName1|string|optional|none|Building/Property name 1|
|buildingName2|string|optional|none|Building/Property name 2|
|streetName|string|optional|none|The name of the street|
|streetType|string|optional|none|The street type. Valid enumeration defined by Australia Post PAF code file|
|streetSuffix|string|optional|none|The street type suffix. Valid enumeration defined by Australia Post PAF code file|
|postalDeliveryType|string|optional|none|Postal delivery type. (eg. PO BOX). Valid enumeration defined by Australia Post PAF code file|
|postalDeliveryNumber|[PositiveInteger](#common-field-types)|optional|none|Postal delivery number if the address is a postal delivery type|
|postalDeliveryNumberPrefix|string|optional|none|Postal delivery number prefix related to the postal delivery number|
|postalDeliveryNumberSuffix|string|optional|none|Postal delivery number suffix related to the postal delivery number|
|localityName|string|mandatory|none|Full name of locality|
|postcode|string|mandatory|none|Postcode for the locality|
|state|string|mandatory|none|State in which the address belongs. Valid enumeration defined by Australia Post PAF code file [State Type Abbreviation](https://auspost.com.au/content/dam/auspost_corp/media/documents/australia-post-data-guide.pdf). NSW, QLD, VIC, NT, WA, SA, TAS, ACT, AAT|

<h2 id="tocSlinks">Links</h2>

<a id="schemalinks"></a>

```json
{
  "self": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|self|[URIString](#common-field-types)|mandatory|none|Fully qualified link that generated the current response document|

<h2 id="tocSmeta">Meta</h2>

<a id="schemameta"></a>

```json
{}

```

### Properties

*None*

<h2 id="tocSlinkspaginated">LinksPaginated</h2>

<a id="schemalinkspaginated"></a>

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

<h2 id="tocSmetapaginated">MetaPaginated</h2>

<a id="schemametapaginated"></a>

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

<h2 id="tocSmetaerror">MetaError</h2>

<a id="schemametaerror"></a>

```json
{
  "urn": "string"
}

```

*Additional data for customised error codes*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|urn|string|conditional|none|The CDR error code URN which the application-specific error code extends. Mandatory if the error `code` is an application-specific error rather than a standardised error code.|

<h2 id="tocSresponseerrorlistv2">ResponseErrorListV2</h2>

<a id="schemaresponseerrorlistv2"></a>

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

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[object]|mandatory|none|none|
|» code|string|mandatory|none|The code of the error encountered. Where the error is specific to the respondent, an application-specific error code, expressed as a string value. If the error is application-specific, the URN code that the specific error extends must be provided in the meta object. Otherwise, the value is the error code URN.|
|» title|string|mandatory|none|A short, human-readable summary of the problem that MUST NOT change from occurrence to occurrence of the problem represented by the error code.|
|» detail|string|mandatory|none|A human-readable explanation specific to this occurrence of the problem.|
|» meta|[MetaError](#schemametaerror)|optional|none|Additional data for customised error codes|

<h2 id="tocSbankingproductcategory">BankingProductCategory</h2>

<a id="schemabankingproductcategory"></a>

```json
"BUSINESS_LOANS"

```

*The category to which a product or account belongs. See [here](#product-categories) for more details*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|mandatory|none|The category to which a product or account belongs. See [here](#product-categories) for more details|

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

