## Common Schemas

<h3 id="tocStransactionbasic">TransactionBasic</h3>

<a id="schematransactionbasic"></a>

```json
{
  "transactionId": "string",
  "status": "PENDING",
  "description": "string",
  "postDateTime": "2018-11-01T05:33:52Z",
  "executionDateTime": "2018-11-01T05:33:52Z",
  "amount": {
    "amount": 300.56,
    "currency": "AUD"
  },
  "reference": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|transactionId|[TransactionId](#schematransactionid)|false|none|A unique ID of the transaction adhering to the standards for ID permanence. This field is mandatory in this payload as it is a reflection of the requested transaction in the path parameter.|
|status|[TransactionStatus](#schematransactionstatus)|true|none|Status of the transaction.|
|description|string|true|none|The transaction description as applied by the financial institution.|
|postDateTime|[DateTimeString](#common-field-types)|false|none|The time the transaction was posted. This field is MANDATORY if the transaction has status POSTED. This is the time that appears on a standard statement.|
|executionDateTime|[DateTimeString](#common-field-types)|false|none|The time the transaction was executed by the originating customer, if available.|
|amount|[CurrencyAmount](#schemacurrencyamount)|false|none|The value of the transaction. Negative values mean money was outgoing.|
|reference|string|true|none|The reference for the transaction provided by the originating institution.|

<h3 id="tocStransactiondetail">TransactionDetail</h3>

<a id="schematransactiondetail"></a>

```json
{
  "transactionId": "string",
  "status": "PENDING",
  "description": "string",
  "postDateTime": "2018-11-01T05:33:52Z",
  "executionDateTime": "2018-11-01T05:33:52Z",
  "amount": {
    "amount": 300.56,
    "currency": "AUD"
  },
  "reference": "string",
  "extendedData": {
    "payer": "string",
    "payee": "string",
    "extensionType": "extendedDescription",
    "extendedDescription": "string",
    "service": "X2P1.01"
  }
}

```

### Properties

*allOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[TransactionBasic](#schematransactionbasic)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|A transaction with extended detail.|
|» extendedData|[ExtendedTransactionData](#schemaextendedtransactiondata)|false|none|Contains more detailed information specific to transactions originated via NPP.|

<h3 id="tocSaccounttransaction">AccountTransaction</h3>

<a id="schemaaccounttransaction"></a>

```json
{
  "transactionId": "string",
  "status": "PENDING",
  "description": "string",
  "postDateTime": "2018-11-01T05:33:52Z",
  "executionDateTime": "2018-11-01T05:33:52Z",
  "amount": {
    "amount": 300.56,
    "currency": "AUD"
  },
  "reference": "string",
  "accountId": "string",
  "isDetailAvailable": true
}

```

### Properties

*allOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[TransactionBasic](#schematransactionbasic)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» accountId|[AccountId](#schemaaccountid)|true|none|A unique ID of the account adhering to the standards for ID permanence.|
|» isDetailAvailable|boolean|true|none|none|

<h3 id="tocSextendedtransactiondata">ExtendedTransactionData</h3>

<a id="schemaextendedtransactiondata"></a>

```json
{
  "payer": "string",
  "payee": "string",
  "extensionType": "extendedDescription",
  "extendedDescription": "string",
  "service": "X2P1.01"
}

```

*Contains more detailed information specific to transactions originated via NPP.*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|payer|string|false|none|Label of the originating payer. Mandatory for an inbound payment.|
|payee|string|false|none|Label of the target PayID. Mandatory for an outbound payment.|
|extensionType|string|false|none|Optional extended data provided specific to transaction originated via NPP.|
|extendedDescription|string|false|none|An extended string description.  Only present if specified by the extensionType field.|
|service|string|true|none|Identifier of the applicable overlay service.|

#### Enumerated Values

|Property|Value|
|---|---|
|extensionType|extendedDescription|
|service|X2P1.01|

<h3 id="tocStransactionstatus">TransactionStatus</h3>

<a id="schematransactionstatus"></a>

```json
"PENDING"

```

*Status of the transaction.*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Status of the transaction.|

#### Enumerated Values

|Property|Value|
|---|---|
|*anonymous*|PENDING|
|*anonymous*|POSTED|

<h3 id="tocStransactionid">TransactionId</h3>

<a id="schematransactionid"></a>

```json
"string"

```

*A unique ID of the transaction adhering to the standards for ID permanence. This field is mandatory in this payload as it is a reflection of the requested transaction in the path parameter.*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string(ASCII)|false|none|A unique ID of the transaction adhering to the standards for ID permanence. This field is mandatory in this payload as it is a reflection of the requested transaction in the path parameter.|

<h3 id="tocSaccountdirectdebit">AccountDirectDebit</h3>

<a id="schemaaccountdirectdebit"></a>

```json
{
  "accountId": "string",
  "authorisedEntity": {
    "name": "string",
    "financialInsitution": "string",
    "abn": "string",
    "acn": "string"
  },
  "lastDebitDateTime": "2018-11-01T05:33:52Z",
  "lastDebitAmount": 300.56
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|[AccountId](#schemaaccountid)|true|none|A unique ID of the account adhering to the standards for ID permanence.|
|authorisedEntity|[AuthorisedEntity](#schemaauthorisedentity)|false|none|none|
|lastDebitDateTime|[DateTimeString](#common-field-types)|false|none|The date and time of the last debit executed under this authorisation|
|lastDebitAmount|number|false|none|none|

<h3 id="tocSauthorisedentity">AuthorisedEntity</h3>

<a id="schemaauthorisedentity"></a>

```json
{
  "name": "string",
  "financialInsitution": "string",
  "abn": "string",
  "acn": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Name of the authorised entity.|
|financialInsitution|string|true|none|Name of the financial institution through which the direct debit will be executed.|
|abn|[ABN](#schemaabn)|false|none|Australian Business Number.|
|acn|[ACN](#schemaacn)|false|none|Australian Company Number.|

<h3 id="tocSabn">ABN</h3>

<a id="schemaabn"></a>

```json
"string"

```

*Australian Business Number.*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Australian Business Number.|

<h3 id="tocSacn">ACN</h3>

<a id="schemaacn"></a>

```json
"string"

```

*Australian Company Number.*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Australian Company Number.|

<h3 id="tocSaccount">Account</h3>

<a id="schemaaccount"></a>

```json
{
  "accountId": "string",
  "displayName": "string",
  "nickname": "string",
  "maskedNumber": "string",
  "productCategory": "PERS_AT_CALL_DEPOSITS",
  "productType": "string",
  "balance$Type": "deposits",
  "deposits": {
    "currentBalance": {
      "amount": 300.56,
      "currency": "AUD"
    },
    "availableBalance": {
      "amount": 300.56,
      "currency": "AUD"
    }
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|[AccountId](#schemaaccountid)|true|none|A unique ID of the account adhering to the standards for ID permanence.|
|displayName|string|true|none|The display name of the account. If a customer provided nickname is available that value should be returned.|
|nickname|string|false|none|A customer supplied nick name for the account.|
|maskedNumber|[MaskedAccountNumber](#schemamaskedaccountnumber)|true|none|A masked version of the account. Whether BSB/Account Number, Credit Card PAN or another number this should be formatted with each digit masked and the last three digits unmasked.|
|productCategory|[ProductCategory](#schemaproductcategory)|false|none|The the product category an account aligns withs.|
|productType|string|true|none|The unique type as defined by the account provider.|
|»»balance$type|string|true|none|The type of balance object provided by the account provider (akin to model number)|
|»»anonymous|[DepositBalanceType](#schemadepositbalancetype)|false|none|none|
|»»anonymous|[LendingBalanceType](#schemalendingbalancetype)|false|none|none|
|»»anonymous|[MultiCurrencyPursesType](#schemamulticurrencypursestype)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|balance$type|deposits|
|balance$type|lending|
|balance$type|purses|

<h3 id="tocSaddress">Address</h3>

<a id="schemaaddress"></a>

```json
{
  "addressType": "simple"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addressType|string|true|none|The Address type.|

#### Enumerated Values

|Property|Value|
|---|---|
|addressType|simple|
|addressType|paf|

<h3 id="tocSsimpleaddress">SimpleAddress</h3>

<a id="schemasimpleaddress"></a>

```json
{
  "addressType": "simple",
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

*allOf - discriminator: Address.addressType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[Address](#schemaaddress)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» mailingName|string|false|none|Name of the individual or business formatted for inclusion in an address used for physical mail.|
|» addressLine1|string|true|none|none|
|» addressLine2|string|false|none|none|
|» addressLine3|string|false|none|none|
|» postcode|string|false|none|Mandatory for Australian address.|
|» city|string|true|none|none|
|» state|string|true|none|Free text if the country is not Australia.  If country is Australia then must be one of the values defined by the ISO 3166:AU standard.|
|» country|[CountryCodeISO](#schemacountrycodeiso)|false|none|A valid ISO 3166 Alph-3 country code.|
|» addressType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|addressType|simple|

<h3 id="tocSpafaddress">PAFAddress</h3>

<a id="schemapafaddress"></a>

```json
{
  "addressType": "paf",
  "data": {}
}

```

### Properties

*allOf - discriminator: Address.addressType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[Address](#schemaaddress)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» addressType|string|false|none|none|
|» data|object|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|addressType|paf|

<h3 id="tocScountrycodeiso">CountryCodeISO</h3>

<a id="schemacountrycodeiso"></a>

```json
"AUS"

```

*A valid ISO 3166 Alph-3 country code.*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|A valid ISO 3166 Alph-3 country code.|

<h3 id="tocSchargeperiod">ChargePeriod</h3>

<a id="schemachargeperiod"></a>

```json
"DAILY"

```

*The period of charge*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|The period of charge|

#### Enumerated Values

|Property|Value|
|---|---|
|*anonymous*|DAILY|
|*anonymous*|WEEKLY|
|*anonymous*|MONTHLY|
|*anonymous*|QUARTERLY|
|*anonymous*|SEMI_ANNUALLY|
|*anonymous*|ANNUALLY|

<h3 id="tocSmaskedaccountnumber">MaskedAccountNumber</h3>

<a id="schemamaskedaccountnumber"></a>

```json
"string"

```

*A masked version of the account. Whether BSB/Account Number, Credit Card PAN or another number this should be formatted with each digit masked and the last three digits unmasked.*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|A masked version of the account. Whether BSB/Account Number, Credit Card PAN or another number this should be formatted with each digit masked and the last three digits unmasked.|

<h3 id="tocSaccountid">AccountId</h3>

<a id="schemaaccountid"></a>

```json
"string"

```

*A unique ID of the account adhering to the standards for ID permanence.*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string(ASCII)|false|none|A unique ID of the account adhering to the standards for ID permanence.|

<h3 id="tocSaccountbalance">AccountBalance</h3>

<a id="schemaaccountbalance"></a>

```json
{
  "accountId": "string",
  "balance$Type": "deposits",
  "deposits": {
    "currentBalance": {
      "amount": 300.56,
      "currency": "AUD"
    },
    "availableBalance": {
      "amount": 300.56,
      "currency": "AUD"
    }
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|[AccountId](#schemaaccountid)|true|none|A unique ID of the account adhering to the standards for ID permanence.|
|»»balance$type|string|true|none|The type of balance object provided by the account provider (akin to model number)|
|»»anonymous|[DepositBalanceType](#schemadepositbalancetype)|false|none|none|
|»»anonymous|[LendingBalanceType](#schemalendingbalancetype)|false|none|none|
|»»anonymous|[MultiCurrencyPursesType](#schemamulticurrencypursestype)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|balance$type|deposits|
|balance$type|lending|
|balance$type|purses|

<h3 id="tocSdepositbalancetype">DepositBalanceType</h3>

<a id="schemadepositbalancetype"></a>

```json
{
  "currentBalance": {
    "amount": 300.56,
    "currency": "AUD"
  },
  "availableBalance": {
    "amount": 300.56,
    "currency": "AUD"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» currentBalance|[CurrencyAmount](#schemacurrencyamount)|true|none|The current balance of the account at this time. Should align to the current balance available via other channels such as ATM balance enquiry or Internet Banking.|
|» availableBalance|[CurrencyAmount](#schemacurrencyamount)|true|none|Object represent the current balance for the account.  Assumed to be positive or zero.|


<h3 id="tocSlendingbalancetype">LendingBalanceType</h3>

<a id="schemalendingbalancetype"></a>

```json
{
  "accountBalance": {
    "amount": 300.56,
    "currency": "AUD"
  },
  "availableBalance": {
    "amount": 300.56,
    "currency": "AUD"
  },
  "creditLimit": {
    "amount": 300.56,
    "currency": "AUD"
  },
  "amortisedLimit": {
    "amount": 300.56,
    "currency": "AUD"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» accountBalance|[CurrencyAmount](#schemacurrencyamount)|true|none|Object represent the balance for the loan, line of credit or credit card.|
|» availableBalance|[CurrencyAmount](#schemacurrencyamount)|true|none|The available balance for the account. Assumed to be positive or zero.|
|» creditLimit|[CurrencyAmount](#schemacurrencyamount)|true|none|The maximum amount of credit that is avaible for this account. Assumed to be positive or zero.|
|» amortisedLimit|[CurrencyAmount](#schemacurrencyamount)|false|none|The available limit amortised according to payement schedule.|

<h3 id="tocSmulticurrencypursestype">MultiCurrencyPursesType</h3>

<a id="schemamulticurrencypursestype"></a>

```json
{
  "purses": [
    {
      "amount": 300.56,
      "currency": "AUD"
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» purses|[[CurrencyAmount](#schemacurrencyamount)]|true|none|List of Purses.|

<h3 id="tocSproductcategory">ProductCategory</h3>

<a id="schemaproductcategory"></a>

*The product category an account aligns withs.*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|The the product category an account aligns withs.|

#### Enumerated Values

|Property|Value|
|---|---|
|*anonymous*|PERS_AT_CALL_DEPOSITS|
|*anonymous*|BUS_AT_CALL_DEPOSITS|
|*anonymous*|TERM_DEPOSITS|
|*anonymous*|RESIDENTIAL_MORTGAGES|
|*anonymous*|PERS_CRED_AND_CHRG_CARDS|
|*anonymous*|BUS_CRED_AND_CHRG_CARDS|
|*anonymous*|PERS_LOANS|
|*anonymous*|PERS_LEASING|
|*anonymous*|BUS_LEASING|
|*anonymous*|TRADE_FINANCE|
|*anonymous*|PERS_OVERDRAFT|
|*anonymous*|BUS_OVERDRAFT|
|*anonymous*|BUS_LOANS|
|*anonymous*|FOREIGN_CURR_AT_CALL_DEPOSITS|
|*anonymous*|FOREIGN_CURR_TERM_DEPOSITS|
|*anonymous*|FOREIGN_CURR_LOAN|
|*anonymous*|FOREIGN_CURRRENCT_OVERDRAFT|
|*anonymous*|TRAVEL_CARD|

<h3 id="tocScurrencyamount">CurrencyAmount</h3>

<a id="schemacurrencyamount"></a>

```json
{
  "amount": 300.56,
  "currency": "AUD"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|number|true|none|none|
|currency|string|false|none|none|
