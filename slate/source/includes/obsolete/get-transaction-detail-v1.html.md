---
title: Get Account Transaction v1

#language_tabs: # must be one of https://git.io/vQNgJ
#  - shell
#  - javascript

toc_footers:
  - <a href='../../index.html'>Consumer Data Standards</a>

search: false
---

# Get Transaction Detail V1
This page documents the obsolete version 1 of the Get Transaction Detail end point.

## Get Transaction Detail

<p id="get-transaction-detail" class="orig-anchor"></p>

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

```javascript--nodejs
const fetch = require('node-fetch');
const headers = {
  'Accept':'application/json',
  'x-v':'string',
  'x-min-v':'string',
  'x-fapi-interaction-id':'string',
  'x-fapi-auth-date':'string',
  'x-fapi-customer-ip-address':'string',
  'x-cds-client-headers':'string'
};

fetch('https://data.holder.com.au/cds-au/v1/banking/accounts/{accountId}/transactions/{transactionId}', {
  method: 'GET',
  headers: headers
}).then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

`GET /banking/accounts/{accountId}/transactions/{transactionId}`

Obtain detailed information on a transaction for a specific account.

<h3 id="cdr-banking-api_get-transaction-detail_endpoint-version">Endpoint Version</h3>
|   |  |
|---|--|
|Version|**1**

<h3 id="cdr-banking-api_get-transaction-detail_parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|[ASCIIString](../../#common-field-types)|mandatory|ID of the account to get transactions for. Must have previously been returned by one of the account list endpoints.|
|transactionId|path|[ASCIIString](../../#common-field-types)|mandatory|ID of the transaction obtained from a previous call to one of the other transaction endpoints.|
|x-v|header|string|mandatory|Version of the API endpoint requested by the client. Must be set to a positive integer. The data holder should respond with the highest supported version between [_x-min-v_](#request-headers) and [_x-v_](#request-headers). If the value of [_x-min-v_](#request-headers) is equal to or higher than the value of [_x-v_](#request-headers) then the [_x-min-v_](#request-headers) header should be treated as absent. If all versions requested are not supported then the data holder must respond with a `406 Not Acceptable`. See [HTTP Headers](#request-headers).|
|x-min-v|header|string|optional|Minimum version of the API endpoint requested by the client. Must be set to a positive integer if provided. The data holder should respond with the highest supported version between [_x-min-v_](#request-headers) and [_x-v_](#request-headers). If all versions requested are not supported then the data holder must respond with a `406 Not Acceptable`.|
|x-fapi-interaction-id|header|string|optional|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder must play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|x-fapi-auth-date|header|string|conditional|The time when the customer last logged in to the Data Recipient Software Product as described in **[[FAPI-1.0-Baseline]](#nref-FAPI-1-0-Baseline)**. Required for all resource calls (customer present and unattended). Not required for unauthenticated calls.|
|x-fapi-customer-ip-address|header|string|optional|The customer's original IP address if the customer is currently logged in to the Data Recipient Software Product. The presence of this header indicates that the API is being called in a customer present context. Not to be included for unauthenticated calls.|
|x-cds-client-headers|header|[Base64](../../#common-field-types)|conditional|The customer's original standard http headers [Base64](../../#common-field-types) encoded, including the original User-Agent header, if the customer is currently logged in to the Data Recipient Software Product. Mandatory for customer present calls. Not required for unattended or unauthenticated calls.|

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

<h3 id="cdr-banking-api_get-transaction-detail_responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[ResponseBankingTransactionById](#schemacdr-banking-apiresponsebankingtransactionbyid)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[400 - Invalid Field](#error-400-field-invalid)</li><li>[400 - Missing Required Field](#error-400-field-missing)</li><li>[400 - Invalid Version](#error-400-header-invalid-version)</li><li>[400 - Invalid Date](#error-400-field-invalid-date-time)</li></ul>|[ResponseErrorListV2](#schemacdr-banking-apiresponseerrorlistv2)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[404 - Unavailable Banking Account](#error-404-authorisation-unavailable-banking-account)</li><li>[404 - Invalid Banking Account](#error-404-authorisation-invalid-banking-account)</li><li>[404 - Unavailable Resource](#error-404-resource-unavailable)</li><li>[404 - Invalid Resource](#error-404-resource-invalid)</li></ul>|[ResponseErrorListV2](#schemacdr-banking-apiresponseerrorlistv2)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|The following error codes MUST be supported:<br/><ul class="error-code-list"><li>[406 - Unsupported Version](#error-406-header-unsupported-version)</li></ul>|[ResponseErrorListV2](#schemacdr-banking-apiresponseerrorlistv2)|

<h3 id="cdr-banking-api_get-transaction-detail_response-headers">Response Headers</h3>

|Status|Header|Type|Description|
|---|---|---|---|---|
|200|x-v|string|The [version](#response-headers) of the API endpoint that the data holder has responded with.|
|200|x-fapi-interaction-id|string|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder must play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|400|x-fapi-interaction-id|string|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder must play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|404|x-fapi-interaction-id|string|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder must play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|
|406|x-fapi-interaction-id|string|An **[[RFC4122]](#nref-RFC4122)** UUID used as a correlation id. If provided, the data holder must play back this value in the _x-fapi-interaction-id_ response header. If not provided a **[[RFC4122]](#nref-RFC4122)** UUID value is required to be provided in the response header to track the interaction.|

  
    
<aside class="notice">
To perform this operation, you must be authenticated and authorised with the following scopes:
<a href="#authorisation-scopes">bank:transactions:read</a>
</aside>

<h3 class="schema-toc" id="cdr-banking-api_schemas_tocSresponsebankingtransactionbyid">ResponseBankingTransactionById</h3>
<p id="tocSresponsebankingtransactionbyid" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api_schema-base_responsebankingtransactionbyid"></a>
  <a class="schema-anchor" id="schemacdr-banking-apiresponsebankingtransactionbyid"></a>
</p>

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

<h3 id="cdr-banking-api_responsebankingtransactionbyid_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|data|[BankingTransactionDetail](#schemacdr-banking-apibankingtransactiondetail)|mandatory|none|
|links|[Links](#schemacdr-banking-apilinks)|mandatory|none|
|meta|[Meta](#schemacdr-banking-apimeta)|optional|none|

<h3 class="schema-toc" id="cdr-banking-api_schemas_tocSbankingtransactiondetail">BankingTransactionDetail</h3>
<p id="tocSbankingtransactiondetail" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api_schema-base_bankingtransactiondetail"></a>
  <a class="schema-anchor" id="schemacdr-banking-apibankingtransactiondetail"></a>
</p>

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

<h3 id="cdr-banking-api_bankingtransactiondetail_properties">Properties</h3>

*allOf*

|Name|Type|Required|Description|
|---|---|---|---|
|*anonymous*|[BankingTransaction](#schemacdr-banking-apibankingtransaction)|mandatory|none|

*and*

|Name|Type|Required|Description|
|---|---|---|---|
|*anonymous*|object|mandatory|none|
|» extendedData|object|mandatory|none|
|»» payer|string|conditional|Label of the originating payer. Mandatory for inbound payment.|
|»» payee|string|conditional|Label of the target PayID. Mandatory for an outbound payment. The name assigned to the BSB/Account Number or PayID (by the owner of the PayID).|
|»» extensionUType|[Enum](../../#common-field-types)|optional|Optional extended data specific to transactions originated via NPP.|
|»» x2p101Payload|object|conditional|none|
|»»» extendedDescription|string|conditional|An extended string description. Required if the _extensionUType_ field is `x2p101Payload`.|
|»»» endToEndId|string|optional|An end to end ID for the payment created at initiation.|
|»»» purposeCode|string|optional|Purpose of the payment. Format is defined by NPP standards for the x2p1.01 overlay service.|
|»» service|[Enum](../../#common-field-types)|mandatory|Identifier of the applicable overlay service. Valid values are: `X2P1.01`.|

<h4 id="cdr-banking-api_bankingtransactiondetail_enumerated-values-main">Enumerated Values</h4>

|Property|Value|
|---|---|
|extensionUType|x2p101Payload|
|service|X2P1.01|


<h3 class="schema-toc" id="cdr-banking-api_schemas_tocSbankingtransaction">BankingTransaction</h3>
<p id="tocSbankingtransaction" class="orig-anchor"></p>

<p>
  <a id="cdr-banking-api_schema-base_bankingtransaction"></a>
  <a class="schema-anchor" id="schemacdr-banking-apibankingtransaction"></a>
</p>

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

<h3 id="cdr-banking-api_bankingtransaction_properties">Properties</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|accountId|[ASCIIString](../../#common-field-types)|mandatory|ID of the account for which transactions are provided.|
|transactionId|[ASCIIString](../../#common-field-types)|conditional|A unique ID of the transaction adhering to the standards for ID permanence. This is mandatory (through hashing if necessary) unless there are specific and justifiable technical reasons why a transaction cannot be uniquely identified for a particular account type. It is mandatory if _isDetailAvailable_ is set to `true`.|
|isDetailAvailable|[Boolean](../../#common-field-types)|mandatory|`true` if extended information is available using the transaction detail endpoint. `false` if extended data is not available.|
|type|[Enum](../../#common-field-types)|mandatory|The type of the transaction.|
|status|[Enum](../../#common-field-types)|mandatory|Status of the transaction whether pending or posted. Note that there is currently no provision in the standards to guarantee the ability to correlate a pending transaction with an associated posted transaction.|
|description|string|mandatory|The transaction description as applied by the financial institution.|
|postingDateTime|[DateTimeString](../../#common-field-types)|conditional|The time the transaction was posted. This field is Mandatory if the transaction has status `POSTED`. This is the time that appears on a standard statement.|
|valueDateTime|[DateTimeString](../../#common-field-types)|optional|Date and time at which assets become available to the account owner in case of a credit entry, or cease to be available to the account owner in case of a debit transaction entry.|
|executionDateTime|[DateTimeString](../../#common-field-types)|optional|The time the transaction was executed by the originating customer, if available.|
|amount|[AmountString](../../#common-field-types)|mandatory|The value of the transaction. Negative values mean money was outgoing from the account.|
|currency|[CurrencyString](../../#common-field-types)|optional|The currency for the transaction amount. `AUD` assumed if not present.|
|reference|string|mandatory|The reference for the transaction provided by the originating institution. Empty string if no data provided.|
|merchantName|string|optional|Name of the merchant for an outgoing payment to a merchant.|
|merchantCategoryCode|string|optional|The merchant category code (or MCC) for an outgoing payment to a merchant.|
|billerCode|string|optional|BPAY Biller Code for the transaction (if available).|
|billerName|string|optional|Name of the BPAY biller for the transaction (if available).|
|crn|string|conditional|BPAY CRN for the transaction (if available).<br/>Where the CRN contains sensitive information, it should be masked in line with how the Data Holder currently displays account identifiers in their existing online banking channels. If the contents of the CRN match the format of a Credit Card PAN they should be masked according to the rules applicable for [MaskedPANString](../../#common-field-types). If the contents are otherwise sensitive, then it should be masked using the rules applicable for the [MaskedAccountString](../../#common-field-types) common type.|
|apcaNumber|string|optional|6 Digit APCA number for the initiating institution. The field is fixed-width and padded with leading zeros if applicable.|

<h4 id="cdr-banking-api_bankingtransaction_enumerated-values-main">Enumerated Values</h4>

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
