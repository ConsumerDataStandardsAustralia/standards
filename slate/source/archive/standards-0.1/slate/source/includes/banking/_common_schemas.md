<h2 id="tocBankingCommonSchemas">Common Schemas</h2>

<a id="schematransactionbasic"></a>
<h3 id="tocStransactionbasic">TransactionBasic</h3>


```json
{
  "transactionId": "string",
  "isDetailAvailable": true,
  "status": "PENDING",
  "description": "string",
  "postDateTime": "2018-11-01T05:33:52Z",
  "executionDateTime": "2018-11-01T05:33:52Z",
  "amount": 300.56,
  "currency": "AUD",
  "reference": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|transactionId|[TransactionId](#schematransactionid)|false|none|A unique ID of the transaction adhering to the standards for ID permanence. This is mandatory (through hashing if necessary) unless there are specific and justifiable technical reasons why a transaction cannot be uniquely identified for a particular account type|
|isDetailAvailable|boolean|true|none|True if extended information is available using the transaction detail end point. False if extended data is not available|
|status|[TransactionStatus](#schematransactionstatus)|true|none|Status of the transaction.|
|description|string|true|none|The transaction description as applied by the financial institution.|
|postDateTime|[DateTimeString](#common-field-types)|false|none|The time the transaction was posted. This field is mandatory if the transaction has status POSTED. This is the time that appears on a standard statement.|
|executionDateTime|[DateTimeString](#common-field-types)|false|none|The time the transaction was executed by the originating customer, if available.|
|amount|[AmountString](#common-field-types)|false|none|The value of the transaction. Negative values mean money was outgoing.|
|currency|[CurrencyString](#common-field-types)|false|none|The currency for the transaction amount. AUD assumed if not present.|
|reference|string|true|none|The reference for the transaction provided by the originating institution.|

<a id="schematransactiondetail"></a>
<h3 id="tocStransactiondetail">TransactionDetail</h3>


```json
{
  "transactionId": "string",
  "status": "PENDING",
  "description": "string",
  "postDateTime": "2018-11-01T05:33:52Z",
  "executionDateTime": "2018-11-01T05:33:52Z",
  "amount": 300.56,
  "currency": "AUD",
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

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|transactionId|[TransactionId](#schematransactionid)|false|none|A unique ID of the transaction adhering to the standards for ID permanence. This is mandatory (through hashing if necessary) unless there are specific and justifiable technical reasons why a transaction cannot be uniquely identified for a particular account type|
|status|[TransactionStatus](#schematransactionstatus)|true|none|Status of the transaction.|
|description|string|true|none|The transaction description as applied by the financial institution.|
|postDateTime|[DateTimeString](#common-field-types)|false|none|The time the transaction was posted. This field is mandatory if the transaction has status POSTED. This is the time that appears on a standard statement.|
|executionDateTime|[DateTimeString](#common-field-types)|false|none|The time the transaction was executed by the originating customer, if available.|
|amount|[AmountString](#common-field-types)|false|none|The value of the transaction. Negative values mean money was outgoing.|
|currency|[CurrencyString](#common-field-types)|false|none|The currency for the transaction amount. AUD assumed if not present.|
|reference|string|true|none|The reference for the transaction provided by the originating institution.|
|extendedData|[ExtendedTransactionData](#schemaextendedtransactiondata)|false|none|Contains more detailed information specific to transactions originated via NPP.|

<a id="schemaaccounttransaction"></a>
<h3 id="tocSaccounttransaction">AccountTransaction</h3>


```json
{
  "accountId": "string",
  "transactionId": "string",
  "isDetailAvailable": true,
  "status": "PENDING",
  "description": "string",
  "postDateTime": "2018-11-01T05:33:52Z",
  "executionDateTime": "2018-11-01T05:33:52Z",
  "amount": 300.56,
  "currency": "AUD",
  "reference": "string"
}

```

### Properties

*allOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» accountId|[AccountId](#schemaaccountid)|true|none|A unique ID of the account adhering to the standards for ID permanence.|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[TransactionBasic](#schematransactionbasic)|false|none|none|


<a id="schemaextendedtransactiondata"></a>
<h3 id="tocSextendedtransactiondata">ExtendedTransactionData</h3>


```json
{
  "payer": "string",
  "payee": "string",
  "extension$type": "extendedDescription",
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
|extension$type|string|false|none|Optional extended data provided specific to transaction originated via NPP.|
|extendedDescription|string|false|none|An extended string description.  Only present if specified by the extensionType field.|
|service|string|true|none|Identifier of the applicable overlay service.|

#### Enumerated Values

|Property|Value|
|---|---|
|extension$type|extendedDescription|
|service|X2P1.01|

<a id="schematransactionstatus"></a>
<h3 id="tocStransactionstatus">TransactionStatus</h3>


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

<a id="schematransactionid"></a>
<h3 id="tocStransactionid">TransactionId</h3>


```json
"string"

```

*A unique ID of the transaction adhering to the standards for ID permanence. This field is mandatory in this payload as it is a reflection of the requested transaction in the path parameter.*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[ASCII String](#common-field-types)|false|none|A unique ID of the transaction adhering to the standards for ID permanence. This field is mandatory in this payload as it is a reflection of the requested transaction in the path parameter.|

<a id="schemaaccountdirectdebit"></a>
<h3 id="tocSaccountdirectdebit">AccountDirectDebit</h3>


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
|authorisedEntity|[AuthorisedEntity](#schemaauthorisedentity)|false|none|Information on the authorised entity that is able to perform a direct debit|
|lastDebitDateTime|[DateTimeString](#common-field-types)|false|none|The date and time of the last debit executed under this authorisation|
|lastDebitAmount|[AmountString](#common-field-types)|false|none|The amount of the last debit executed under this authorisation|

<a id="schemaauthorisedentity"></a>
<h3 id="tocSauthorisedentity">AuthorisedEntity</h3>


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
|abn|[ABN](#schemaabn)|false|none|Australian Business Number for the authorised entity.|
|acn|[ACN](#schemaacn)|false|none|Australian Company Number for the authorised entity.|

<a id="schemaabn"></a>
<h3 id="tocSabn">ABN</h3>


```json
"string"

```

*Australian Business Number.*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Australian Business Number.|

<a id="schemaacn"></a>
<h3 id="tocSacn">ACN</h3>


```json
"string"

```

*Australian Company Number.*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Australian Company Number.|

<a id="schemaaccount"></a>
<h3 id="tocSaccount">Account</h3>


```json
{
  "accountId": "string",
  "displayName": "string",
  "nickname": "string",
  "maskedNumber": "string",
  "productCategory": "PERS_AT_CALL_DEPOSITS",
  "providerType": "string",
  "balance$type": "deposits",
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
|providerType|string|true|none|The unique type as defined by the account provider.|
|balance$type|string|true|none|The type of balance object provided for the account.|

*oneOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deposits|[DepositBalanceType](#schemadepositbalancetype)|false|none|none|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lending|[LendingBalanceType](#schemalendingbalancetype)|false|none|none|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|purses|[MultiCurrencyPursesType](#schemamulticurrencypursestype)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|balance$type|deposits|
|balance$type|lending|
|balance$type|purses|


<a id="schemaaccountdetail"></a>
<h3 id="tocSaccountdetail">AccountDetail</h3>


### Properties

*allOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[Account](#schemaaccount)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» bundleName|string|false|none|Indicates if this account is park of a bundle that is providing additional benefit to the customer.|
|» specificAccount$type|string|false|none|The type of structure to present account specific fields|

*oneOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» termDeposit|[TermDepositAccountType](#schematermdepositaccounttype)|false|none|none|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» creditCard|[CreditCardAccountType](#schemacreditcardaccounttype)|false|none|none|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» loan|[LoanAccountType](#schemaloanaccounttype)|false|none|none|

*continued*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» features|[[ProductFeature](#schemaproductfeature)]|false|none|Array of features on the account|
|» fees|[[ProductFee](#schemaproductfee)]|false|none|Fees and charges applicable to the account|
|» depositRates|[[ProductDepositRate](#schemaproductdepositrate)]|false|none|Interest rates available for deposits|
|» lendingRates|[[ProductLendingRate](#schemaproductlendingrate)]|false|none|Interest rates charged against lending balances|
|» address|object|false|none|The address for the account to be used for correspondence|
|»» address$type|string|true|none|The type of address object that is present|
|»» simple|[SimpleAddress](#schemasimpleaddress)|false|none|none|
|»» paf|[PAFAddress](#schemapafaddress)|false|none|none|


#### Enumerated Values

|Property|Value|
|---|---|
|specificAccount$type|termDeposit|
|specificAccount$type|creditCard|
|specificAccount$type|loan|
|address$type|simple|
|address$type|paf|


<a id="schemacountrycodeiso"></a>
<h3 id="tocScountrycodeiso">CountryCodeISO</h3>


```json
"AUS"

```

*A valid ISO 3166 Alph-3 country code.*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|A valid ISO 3166 Alph-3 country code.|



<a id="schemaproduct"></a>
<h3 id="tocSproduct">Product</h3>


```json
{
  "productId": "string",
  "effectiveFrom": "2018-11-01T05:33:52Z",
  "effectiveTo": "2018-11-01T05:33:52Z",
  "lastUpdated": "2018-11-01T05:33:52Z",
  "productCategory": "PERS_AT_CALL_DEPOSITS",
  "name": "string",
  "description": "string",
  "brand": "string",
  "brandName": "string",
  "applicationUri": "http://example.com",
  "isNegotiable": true,
  "additionalInformation": {
    "overviewUri": "http://example.com",
    "termsUri": "http://example.com",
    "eligibilityUri": "http://example.com",
    "feesAndPricingUri": "http://example.com",
    "bundleUri": "http://example.com"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|productId|[ASCII String](#common-field-types)|true|none|A provider specific unique identifier for this product. This identifier must be unique to a product but does not otherwise need to adhere to ID permanence guidelines.|
|effectiveFrom|[DateTimeString](#common-field-types)|false|none|A description of the product.|
|effectiveTo|[DateTimeString](#common-field-types)|false|none|The date and time at which this product will be retired and will no longer be offered.|
|lastUpdated|[DateTimeString](#common-field-types)|true|none|A description of the product.|
|productCategory|[ProductCategory](#schemaproductcategory)|true|none|The the product category an account aligns withs.|
|name|string|true|none|The display name of the product.|
|description|string|true|none|The description of the product.|
|brand|string|true|none|A label of the brand for the product. Able to be used for filtering. For data providers with single brands this value is still required.|
|brandName|string|false|none|An optional display name of the brand|
|applicationUri|[URIString](#common-field-types)|false|none|A link to an application web page where this product can be applied for.|
|isNegotiable|boolean|true|none|Indicates whether the product is specifically designed so that fees and prices are negotiated depending on context. While all products are open to a degree of negotiation this flag indicates that negotiation is expected and thus that the provision of specific fees and rates is not applicable.|
|additionalInformation|object|false|none|Object that contains links to additional information on specific topics.|
|» overviewUri|[URIString](#common-field-types)|false|none|General overview of the product.|
|» termsUri|[URIString](#common-field-types)|false|none|Terms and conditions for the product.|
|» eligibilityUri|[URIString](#common-field-types)|false|none|Eligibility rules and criteria for the product.|
|» feesAndPricingUri|[URIString](#common-field-types)|false|none|Description of fees, pricing, discounts, exemptions and bonuses for the product.|
|» bundleUri|[URIString](#common-field-types)|false|none|Description of a bundle that this product can be part of.|

<a id="schemaproductdetail"></a>
<h3 id="tocSproductdetail">ProductDetail</h3>


### Properties

*allOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[Product](#schemaproduct)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» bundles|[object]|false|none|An array of bundles that this product participates in. Each bundle is described by free form information but also by a list of product IDs of the other products that are included in the bundle. It is assumed that the current product is included in the bundle also|
|»» name|string|true|none|Name of the bundle|
|»» description|true|none|Description of the bundle|
|»» additionalInfoUri|[URIString](#common-field-types)|false|none|Link to a web page with more information on the bundle criteria and benefits|
|»» productIds|[string]|true|none|Array of product IDs for products included in the bundle|
|» features|[[ProductFeature](#schemaproductfeature)]|false|none|Array of features available for the product|
|» constraints|[[ProductConstraint](#schemaproductconstraint)]|false|none|Constraints on the application for or operation of the product such as minimum balances or limit thresholds|
|» eligibility|[[ProductEligibility](#schemaproducteligibility)]|false|none|Eligibility criteria for the product|
|» fees|[[ProductFee](#schemaproductfee)]|false|none|Fees and charges applicable for the product|
|» depositRates|[[ProductDepositRate](#schemaproductdepositrate)]|false|none|Interest rates available for deposits|
|» lendingRates|[[ProductLendingRate](#schemaproductlendingrate)]|false|none|Interest rates charged against lending balances|
|» repaymentType|string|false|none|For lending style products what are the options for repayments that are available. If absent (and relevant) defaults to PRINCIPAL_AND_INTEREST|

#### Enumerated Values

|Property|Value|
|---|---|
|repaymentType|INTEREST_ONLY|
|repaymentType|PRINCIPAL_AND_INTEREST|
|repaymentType|NEGOTIABLE|


<a id="schemaproductfeature"></a>
<h3 id="tocSProductFeature">ProductFeature</h3>


### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|true|none|none|
|» featureType|string|true|none|The type of feature described. See the note below for valid values and their meaning|
|» additionalValue|string|false|none|Generic field containing additional information relevant to the featureType specified. Whether mandatory or not is dependent on the value of featureType|

For an explanation of the featureType values and their meanings refer to [Product Feature Types](#productfeaturetypedoc) or [Account Feature Types](#accountfeaturetypedoc)


<a id="schemaproductconstraint"></a>
<h3 id="tocSProductConstraint">ProductConstraint</h3>


### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|true|none|none|
|» constraintType|string|true|none|The type of constraint described. See the note below for valid values and their meaning|
|» additionalValue|string|false|none|Generic field containing additional information relevant to the constraintType specified. Whether mandatory or not is dependent on the value of constraintType|

For an explanation of the constraintType values and their meanings refer to [Product Constraint Types](#productconstrainttypedoc)


<a id="schemaproducteligibility"></a>
<h3 id="tocSProductEligibility">ProductEligibility</h3>



### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|true|none|none|
|» eligibilityType|string|true|none|The type of eligibility criteria described. See the note below for valid values and their meaning|
|» additionalValue|string|false|none|Generic field containing additional information relevant to the eligibilityType specified. Whether mandatory or not is dependent on the value of eligibilityType|
|» additionalInfo|string|false|none|Display text providing more information on the eligibility criteria. Mandatory if the eligibilityType field is set to OTHER|
|» additionalInfoUri|[URIString](#common-field-types)|false|none|Link to a web page with more information on this eligibility criteria|

For an explanation of the eligibilityType values and their meanings refer to [Product Eligibility Types](#producteligibilitytypedoc)


<a id="schemaproductfee"></a>
<h3 id="tocSProductFee">ProductFee</h3>


### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|true|none|none|
|» name|string|true|none|Name of the fee|
|» feeType|string|true|none|The type of fee. See the note below for valid values and their meaning|
|» amount|[AmountString](#common-field-types)|false|none|The amount charged for the fee. Assumed to be in AUD. One of amount, balanceRate and transactionRate is mandatory.|
|» balanceRate|[RateString](#common-field-types)|false|none|A fee rate calculated based on a proportion of the balance. Assumed to be in AUD. One of amount, balanceRate and transactionRate is mandatory.|
|» transactionRate|[RateString](#common-field-types)|false|none|A fee rate calculated based on a proportion of a transaction. Assumed to be in AUD. One of amount, balanceRate and transactionRate is mandatory.|
|» currency|[CurrencyString](#common-field-types)|false|none|The currency the fee will be charged in. Assumes AUD if absent|
|» additionalValue|string|false|none|Generic field containing additional information relevant to the feeType specified. Whether mandatory or not is dependent on the value of feeType|
|» additionalInfo|string|false|none|Display text providing more information on the fee|
|» additionalInfoUri|[URIString](#common-field-types)|false|none|Optional Link to a web page with more information on this fee|
|» discounts|[[ProductDiscount](#schemaproductdiscount)]|false|none|An optional list of discounts to this fee that may be available|

For an explanation of the feeType values and their meanings refer to [Product Fee Types](#productfeetypedoc) or [Account Fee Types](#accountfeetypedoc)


<a id="schemaproductdiscount"></a>
<h3 id="tocSProductDiscount">ProductDiscount</h3>


### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|true|none|none|
|» description|string|true|none|Description of the discount|
|» discountType|string|true|none|The type of discount. See the note below for valid values and their meaning|
|» amount|[AmountString](#common-field-types)|true|none|Value of the discount. Note that the currency of the fee discount is expected to be the same as the currency of the fee itself|
|» additionalValue|string|false|none|Generic field containing additional information relevant to the discountType specified. Whether mandatory or not is dependent on the value of discountType|

For an explanation of the discountType values and their meanings refer to [Product Discount Types](#productdiscounttypedoc) or [Account Discount Types](#accountdiscounttypedoc)


<a id="schemaproductdepositrate"></a>
<h3 id="tocSProductDepositRate">ProductDepositRate</h3>



### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|true|none|none|
|» depositRateType|string|true|none|The type of rate (base, bonus, etc). See the next section for an overview of valid values and their meaning|
|» rate|[RateString](#common-field-types)|true|none|The rate to be applied|
|» additionalValue|string|false|none|Generic field containing additional information relevant to the depositRateType specified. Whether mandatory or not is dependent on the value of depositRateType|
|» additionalInfo|string|false|none|Display text providing more information on the rate|
|» additionalInfoUri|[URIString](#common-field-types)|false|none|Link to a web page with more information on this fee|

For an explanation of the depositRateType values and their meanings refer to [Product Deposit Rate Types](#productdepositratetypedoc) or [Account Deposit Rate Types](#accountdepositratetypedoc)


<a id="schemaproductlendingrate"></a>
<h3 id="tocSProductLendingRate">ProductLendingRate</h3>



### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|true|none|none|
|» lendingRateType|string|true|none|The type of rate (base, bonus, etc). See the next section for an overview of valid values and their meaning|
|» rate|[RateString](#common-field-types)|true|none|The rate to be applied|
|» additionalValue|string|false|none|Generic field containing additional information relevant to the lendingRateType specified. Whether mandatory or not is dependent on the value of lendingRateType|
|» additionalInfo|string|false|none|Display text providing more information on the rate|
|» additionalInfoUri|[URIString](#common-field-types)|false|none|Link to a web page with more information on this fee|

For an explanation of the lendingRateType values and their meanings refer to [Product Lending Rate Types](#productlendingratetypedoc) or [Account Lending Rate Types](#accountlendingratetypedoc)



<a id="schemaaccounttype"></a>
<h3 id="tocSaccounttype">AccountType</h3>


```json
{
  "accountType": "termDeposit"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountType|string|true|none|The specfic account type.|

#### Enumerated Values

|Property|Value|
|---|---|
|accountType|termDeposit|
|accountType|creditCard|
|accountType|loan|

<a id="schematermdepositaccounttype"></a>
<h3 id="tocStermdepositaccounttype">TermDepositAccountType</h3>


```json
{
  "lodgementDate": "2018-11-01",
  "maturityDate": "2018-11-01",
  "maturityAmount": 380,
  "maturityCurrency": "AUD",
  "maturityInstructions": "ROLLED_OVER"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|true|none|none|
|» lodgementDate|[DateString](#common-field-types)|true|none|The lodgement date of the original deposit.|
|» maturityDate|[DateString](#common-field-types)|true|none|Maturity date for the term deposit.|
|» maturityAmount|number|false|none|Amount to be paid upon maturity. If absent it implies the amount to paid is variable and cannot currently be calculated|
|» maturityCurrency|[CurrencyString](#common-field-types)|false|none|If absent assumes AUD.|
|» maturityInstructions|string|true|none|Current instructions on action to be taken at maturity.|

#### Enumerated Values

|Property|Value|
|---|---|
|maturityInstructions|ROLLED_OVER|
|maturityInstructions|PAID_OUT_AT_MATURITY|


<a id="schemacreditcardaccounttype"></a>
<h3 id="tocScreditcardaccounttype">CreditCardAccountType</h3>


```json
{
  "minPaymentAmount": 100,
  "paymentDueAmount": 200,
  "paymentCurrency": "AUD",
  "paymentDueDate": "2018-11-01"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|true|none|none|
|» minPaymentAmount|[AmountString](#common-field-types)|true|none|The minimum payment amount due for the next card payment.|
|» paymentDueAmount|[AmountString](#common-field-types)|true|none|The amount due for the next card payment.|
|» paymentCurrency|[CurrencyString](#common-field-types)|false|none|If absent assumes AUD.|
|» paymentDueDate|[DateString](#common-field-types)|true|none|Date that the next payment for the card is due.|


<a id="schemaloanaccounttype"></a>
<h3 id="tocSloanaccounttype">LoanAccountType</h3>


```json
{
  "originalStartDate": "2018-11-01",
  "originalLoanAmount": 200,
  "originalLoanCurrency": "AUD",
  "loanEndDate": "2018-11-01",
  "nextInstalmentDate": "2018-11-01",
  "minInstalmentAmount": 0,
  "minInstalmentCurrency": "AUD",
  "maxRedraw": 0,
  "maxRedrawCurrency": "AUD",
  "minRedraw": 0,
  "minRedrawCurrency": "AUD",
  "offsetAccountEnabled": true,
  "offsetAccountIds": ["string"],
  "repaymentType": "INTEREST_ONLY",
  "repaymentFrequency": "P1M"
}

```

### Properties

*allOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|true|none|none|
|» originalStartDate|[DateString](#common-field-types)|false|none|Optional original start date for the loan.|
|» originalLoanAmount|[AmountString](#common-field-types)|false|none|Optional original loan value.|
|» originalLoanCurrency|[CurrencyString](#common-field-types)|false|none|If absent assumes AUD.|
|» loanEndDate|[DateString](#common-field-types)|true|none|Date that the loan is due to be repaid in full.|
|» nextInstalmentDate|[DateString](#common-field-types)|true|none|Next date that an installment is required.|
|» minInstalmentAmount|[AmountString](#common-field-types)|true|none|Minimum Amount of next instalment.|
|» minInstalmentCurrency|[CurrencyString](#common-field-types)|false|none|If absent assumes AUD.|
|» maxRedraw|number|false|none|Maximum amount of funds that can be redrawn. If not present redraw is not available even if the feature exists for the account.|
|» maxRedrawCurrency|[CurrencyString](#common-field-types)|false|none|If absent assumes AUD.|
|» minRedraw|number(date)|false|none|none|
|» minRedrawCurrency|[CurrencyString](#common-field-types)|false|none|If absent assumes AUD.|
|» offsetAccountEnabled|boolean|false|none|Set to true if one or more offset accounts are configured for this loan account|
|» offsetAccountId|[[AccountId](#schemaaccountid)]|false|none|The accountIDs of the configured offset accounts attached to this loan. Only offset accounts that can be accesses under the current authorisation should be included. It is expected behaviour that offsetAccountEnabled is set to true but the offsetAccountIds field is absent or empty. This represents a situation where an offset account exists but details can not be accessed under the current authorisation.|
|» repaymentType|string|false|none|Options in place for repayments. If absent defaults to PRINCIPAL_AND_INTEREST.|
|» repaymentFrequency|string|true|none|The expected or required repayment frequency. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations)|

#### Enumerated Values

|Property|Value|
|---|---|
|repaymentType|INTEREST_ONLY|
|repaymentType|PRINCIPAL_AND_INTEREST|


<a id="schemamaskedaccountnumber"></a>
<h3 id="tocSmaskedaccountnumber">MaskedAccountNumber</h3>


```json
"string"

```

*A masked version of the account. Whether BSB/Account Number, Credit Card PAN or another number this should be formatted with each digit masked and the last three digits unmasked.*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|A masked version of the account. Whether BSB/Account Number, Credit Card PAN or another number this should be formatted with each digit masked and the last three digits unmasked.|

<a id="schemaaccountid"></a>
<h3 id="tocSaccountid">AccountId</h3>


```json
"string"

```

*A unique ID of the account adhering to the standards for ID permanence.*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[ASCIIString](#common-field-types)|false|none|A unique ID of the account adhering to the standards for ID permanence.|

<a id="schemaaccountbalance"></a>
<h3 id="tocSaccountbalance">AccountBalance</h3>


```json
{
  "accountId": "string",
  "balance$type": "deposits",
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
|balance$type|string|true|none|The type of balance object provided for the account.|

*oneOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deposits|[DepositBalanceType](#schemadepositbalancetype)|false|none|none|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lending|[LendingBalanceType](#schemalendingbalancetype)|false|none|none|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|purses|[MultiCurrencyPursesType](#schemamulticurrencypursestype)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|balance$type|deposits|
|balance$type|lending|
|balance$type|purses|


<a id="schemabalancetype"></a>
<h3 id="tocSbalancetype">BalanceType</h3>


```json
{
  "balanceType": "deposits"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|balanceType|string|true|none|The balance type object provided for the account.|

#### Enumerated Values

|Property|Value|
|---|---|
|balanceType|deposits|
|balanceType|lending|
|balanceType|purses|

<a id="schemadepositbalancetype"></a>
<h3 id="tocSdepositbalancetype">DepositBalanceType</h3>


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

<a id="schemalendingbalancetype"></a>
<h3 id="tocSlendingbalancetype">LendingBalanceType</h3>


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


<a id="schemamulticurrencypursestype"></a>
<h3 id="tocSmulticurrencypursestype">MultiCurrencyPursesType</h3>


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

<a id="schemaproductcategory"></a>
<h3 id="tocSproductcategory">ProductCategory</h3>


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

<a id="schemacurrencyamount"></a>
<h3 id="tocScurrencyamount">CurrencyAmount</h3>


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
