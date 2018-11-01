## Common Schemas

<h3 id="tocSaccountsresponse">AccountsResponse</h3>

<a id="schemaaccountsresponse"></a>

```json
{
  "links": {
    "self": "http://example.com",
    "first": "http://example.com",
    "prev": "http://example.com",
    "next": "http://example.com",
    "last": "http://example.com"
  },
  "meta": {
    "totalRecords": 6,
    "totalPages": 2
  },
  "data": {
    "accounts": [
      {
        "accountId": "string",
        "displayName": "string",
        "nickname": "string",
        "maskedNumber": "string",
        "productCategory": "PERS_AT_CALL_DEPOSITS",
        "providerType": "string",
        "balance": {
          "balanceType": "deposits",
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
    ]
  }
}

```

### Properties

*allOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[APIResponseMeta](#schemaapiresponsemeta)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» data|object|true|none|none|
|»» accounts|[[Account](#schemaaccount)]|true|none|List of Accounts.|

<h3 id="tocSaccountresponse">AccountResponse</h3>

<a id="schemaaccountresponse"></a>

```json
{
  "links": {
    "self": "http://example.com",
    "first": "http://example.com",
    "prev": "http://example.com",
    "next": "http://example.com",
    "last": "http://example.com"
  },
  "data": {
    "accountId": "string",
    "displayName": "string",
    "nickname": "string",
    "maskedNumber": "string",
    "productCategory": "PERS_AT_CALL_DEPOSITS",
    "providerType": "string",
    "balance": {
      "balanceType": "deposits",
      "currentBalance": {
        "amount": 300.56,
        "currency": "AUD"
      },
      "availableBalance": {
        "amount": 300.56,
        "currency": "AUD"
      }
    },
    "features": [
      {
        "featureType": "DEBIT_CARD",
        "discountType": "DEBIT_CARD"
      }
    ],
    "fees": [
      {
        "name": "string",
        "feeType": "PERIODIC",
        "amount": 0,
        "additionalInfo": "string",
        "additionalInfoUri": "http://example.com",
        "discounts": [
          {
            "discountType": "BALANCE",
            "additionalValue": 0
          }
        ],
        "additionalValue": "DAILY"
      }
    ],
    "depositRates": [
      {
        "rate": "string",
        "additionalInfo": "string",
        "additionalInfoUri": "http://example.com",
        "depositRateType": "FIXED",
        "additionalValue": "2018-11-01T05:33:52Z",
        "discountType": "FIXED"
      }
    ],
    "lendingRates": [
      {
        "rate": "string",
        "additionalInfo": "string",
        "additionalInfoUri": "http://example.com",
        "lendingRateType": "FIXED",
        "additionalValue": "2018-11-01T05:33:52Z",
        "discountType": "FIXED"
      }
    ],
    "bundleName": "string",
    "specificAccount": {
      "accountType": "termDeposit",
      "depositDate": "2018-11-01",
      "maturityDate": "2018-11-01",
      "maturityAmount": 0
    },
    "address": {
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
  }
}

```

### Properties

*allOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[APIResponse](#schemaapiresponse)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» data|[AccountDetail](#schemaaccountdetail)|true|none|none|

<h3 id="tocSaccountsbalancesresponse">AccountsBalancesResponse</h3>

<a id="schemaaccountsbalancesresponse"></a>

```json
{
  "links": {
    "self": "http://example.com",
    "first": "http://example.com",
    "prev": "http://example.com",
    "next": "http://example.com",
    "last": "http://example.com"
  },
  "meta": {
    "totalRecords": 6,
    "totalPages": 2
  },
  "data": {
    "balances": [
      {
        "accountId": "string",
        "balance": {
          "balanceType": "deposits",
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
    ]
  }
}

```

### Properties

*allOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[APIResponseMeta](#schemaapiresponsemeta)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» data|object|true|none|none|
|»» balances|[[AccountBalance](#schemaaccountbalance)]|true|none|List of Balances.|

<h3 id="tocSaccountstransactionsresponse">AccountsTransactionsResponse</h3>

<a id="schemaaccountstransactionsresponse"></a>

```json
{
  "links": {
    "self": "http://example.com",
    "first": "http://example.com",
    "prev": "http://example.com",
    "next": "http://example.com",
    "last": "http://example.com"
  },
  "meta": {
    "totalRecords": 6,
    "totalPages": 2
  },
  "data": {
    "transactions": [
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
    ]
  }
}

```

### Properties

*allOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[APIResponseMeta](#schemaapiresponsemeta)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» data|object|true|none|none|
|»» transactions|[[AccountTransaction](#schemaaccounttransaction)]|true|none|none|

<h3 id="tocSaccounttransactionresponse">AccountTransactionResponse</h3>

<a id="schemaaccounttransactionresponse"></a>

```json
{
  "links": {
    "self": "http://example.com",
    "first": "http://example.com",
    "prev": "http://example.com",
    "next": "http://example.com",
    "last": "http://example.com"
  },
  "meta": {
    "totalRecords": 6,
    "totalPages": 2
  },
  "data": {
    "accountId": "string",
    "displayName": "string",
    "nickname": "string",
    "transaction": {
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
  }
}

```

### Properties

*allOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[APIResponseMeta](#schemaapiresponsemeta)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» data|object|true|none|none|
|»» accountId|[AccountId](#schemaaccountid)|true|none|A unique ID of the account adhering to the standards for ID permanence.|
|»» displayName|string|true|none|The display name of the account as defined by the bank. This should not incorporate account numbers or PANs.  If it does, the values should be masked according to the rules of the `MaskedAccountNumber` type.|
|»» nickname|string|false|none|A customer supplied nickname for the account.|
|»» transaction|[TransactionDetail](#schematransactiondetail)|false|none|none|

<h3 id="tocSaccounttransactionsresponse">AccountTransactionsResponse</h3>

<a id="schemaaccounttransactionsresponse"></a>

```json
{
  "links": {
    "self": "http://example.com",
    "first": "http://example.com",
    "prev": "http://example.com",
    "next": "http://example.com",
    "last": "http://example.com"
  },
  "meta": {
    "totalRecords": 6,
    "totalPages": 2
  },
  "data": {
    "accountId": "string",
    "displayName": "string",
    "nickname": "string",
    "transactions": [
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
    ]
  }
}

```

### Properties

*allOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[APIResponseMeta](#schemaapiresponsemeta)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» data|object|true|none|none|
|»» accountId|[AccountId](#schemaaccountid)|true|none|A unique ID of the account adhering to the standards for ID permanence.|
|»» displayName|string|true|none|The display name of the account as defined by the bank. This should not incorporate account numbers or PANs.  If it does, the values should be masked according to the rules of the `MaskedAccountNumber` type.|
|»» nickname|string|false|none|A customer supplied nickname for the account.|
|»» transactions|[[TransactionBasic](#schematransactionbasic)]|true|none|The list of transactions returned. These are expected to be ordered with the most recent transaction first.|

<h3 id="tocSaccountdirectdebitsresponse">AccountDirectDebitsResponse</h3>

<a id="schemaaccountdirectdebitsresponse"></a>

```json
{
  "links": {
    "self": "http://example.com",
    "first": "http://example.com",
    "prev": "http://example.com",
    "next": "http://example.com",
    "last": "http://example.com"
  },
  "meta": {
    "totalRecords": 6,
    "totalPages": 2
  },
  "data": {
    "directDebitAuthorisations": [
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
    ]
  }
}

```

### Properties

*allOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[APIResponseMeta](#schemaapiresponsemeta)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» data|object|true|none|none|
|»» directDebitAuthorisations|[[AccountDirectDebit](#schemaaccountdirectdebit)]|true|none|The list of authorisations returned.|

<h3 id="tocSproductsresponse">ProductsResponse</h3>

<a id="schemaproductsresponse"></a>

```json
{
  "links": {
    "self": "http://example.com",
    "first": "http://example.com",
    "prev": "http://example.com",
    "next": "http://example.com",
    "last": "http://example.com"
  },
  "meta": {
    "totalRecords": 6,
    "totalPages": 2
  },
  "data": {
    "products": [
      {
        "productId": "string",
        "effectiveFrom": "2018-11-01T05:33:52Z",
        "effectiveTo": "2018-11-01T05:33:52Z",
        "lastUpdated": "2018-11-01T05:33:52Z",
        "productCategory": "PERS_AT_CALL_DEPOSITS",
        "name": "string",
        "description": "string",
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
    ]
  }
}

```

### Properties

*allOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[APIResponseMeta](#schemaapiresponsemeta)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» data|object|true|none|none|
|»» products|[[Product](#schemaproduct)]|true|none|The list of products returned.|

<h3 id="tocSproductresponse">ProductResponse</h3>

<a id="schemaproductresponse"></a>

```json
{
  "links": {
    "self": "http://example.com",
    "first": "http://example.com",
    "prev": "http://example.com",
    "next": "http://example.com",
    "last": "http://example.com"
  },
  "meta": {
    "totalRecords": 6,
    "totalPages": 2
  },
  "data": {
    "productId": "string",
    "effectiveFrom": "2018-11-01T05:33:52Z",
    "effectiveTo": "2018-11-01T05:33:52Z",
    "lastUpdated": "2018-11-01T05:33:52Z",
    "productCategory": "PERS_AT_CALL_DEPOSITS",
    "name": "string",
    "description": "string",
    "applicationUri": "http://example.com",
    "isNegotiable": true,
    "additionalInformation": {
      "overviewUri": "http://example.com",
      "termsUri": "http://example.com",
      "eligibilityUri": "http://example.com",
      "feesAndPricingUri": "http://example.com",
      "bundleUri": "http://example.com"
    },
    "features": [
      {
        "featureType": "DEBIT_CARD",
        "discountType": "DEBIT_CARD"
      }
    ],
    "fees": [
      {
        "name": "string",
        "feeType": "PERIODIC",
        "amount": 0,
        "additionalInfo": "string",
        "additionalInfoUri": "http://example.com",
        "discounts": [
          {
            "discountType": "BALANCE",
            "additionalValue": 0
          }
        ],
        "additionalValue": "DAILY"
      }
    ],
    "depositRates": [
      {
        "rate": "string",
        "additionalInfo": "string",
        "additionalInfoUri": "http://example.com",
        "depositRateType": "FIXED",
        "additionalValue": "2018-11-01T05:33:52Z",
        "discountType": "FIXED"
      }
    ],
    "lendingRates": [
      {
        "rate": "string",
        "additionalInfo": "string",
        "additionalInfoUri": "http://example.com",
        "lendingRateType": "FIXED",
        "additionalValue": "2018-11-01T05:33:52Z",
        "discountType": "FIXED"
      }
    ],
    "constraints": [
      {
        "constraintType": "MIN_BALANCE",
        "additionalValue": 0
      }
    ],
    "eligibility": [
      {
        "additionalInfo": "string",
        "additionalInfoUri": "http://example.com",
        "eligibilityType": "BUSINESS"
      }
    ]
  }
}

```

### Properties

*allOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[APIResponseMeta](#schemaapiresponsemeta)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» data|[ProductDetail](#schemaproductdetail)|true|none|none|

<h3 id="tocSpayeesresponse">PayeesResponse</h3>

<a id="schemapayeesresponse"></a>

```json
{
  "links": {
    "self": "http://example.com",
    "first": "http://example.com",
    "prev": "http://example.com",
    "next": "http://example.com",
    "last": "http://example.com"
  },
  "meta": {
    "totalRecords": 6,
    "totalPages": 2
  },
  "data": {
    "payees": [
      {
        "payeeId": "string",
        "nickname": "string",
        "description": "string",
        "type": "DOMESTIC"
      }
    ]
  }
}

```

### Properties

*allOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[APIResponseMeta](#schemaapiresponsemeta)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» data|object|true|none|none|
|»» payees|[[Payee](#schemapayee)]|true|none|The list of payyees returned.|

<h3 id="tocSpayeeresponse">PayeeResponse</h3>

<a id="schemapayeeresponse"></a>

```json
{
  "links": {
    "self": "http://example.com",
    "first": "http://example.com",
    "prev": "http://example.com",
    "next": "http://example.com",
    "last": "http://example.com"
  },
  "data": {
    "payeeId": "string",
    "nickname": "string",
    "description": "string",
    "type": "DOMESTIC",
    "payee": {
      "payeeType": "domestic",
      "domesticAccountPayee": {
        "domesticPayeeType": "payId",
        "name": "string",
        "identifier": "string",
        "type": "EMAIL"
      }
    }
  }
}

```

### Properties

*allOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[APIResponse](#schemaapiresponse)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» data|[PayeeDetail](#schemapayeedetail)|true|none|none|

<h3 id="tocSpayeetypeenum">PayeeTypeEnum</h3>

<a id="schemapayeetypeenum"></a>

```json
"DOMESTIC"

```

*The enumeration of payee types.*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|The enumeration of payee types.|

#### Enumerated Values

|Property|Value|
|---|---|
|*anonymous*|DOMESTIC|
|*anonymous*|INTERNATIONAL|
|*anonymous*|BILLER|

<h3 id="tocSpayeeid">PayeeId</h3>

<a id="schemapayeeid"></a>

```json
"string"

```

*ID of the payee adhering to the rules of ID permanence.*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string(ASCII)|false|none|ID of the payee adhering to the rules of ID permanence.|

<h3 id="tocSpayee">Payee</h3>

<a id="schemapayee"></a>

```json
{
  "payeeId": "string",
  "nickname": "string",
  "description": "string",
  "type": "DOMESTIC"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|payeeId|[PayeeId](#schemapayeeid)|true|none|ID of the payee adhering to the rules of ID permanence.|
|nickname|string|true|none|A description of the payee provided by the customer.|
|description|string|false|none|A description of the payee provided by the customer.|
|type|[PayeeTypeEnum](#schemapayeetypeenum)|true|none|The enumeration of payee types.|

<h3 id="tocSpayeedetail">PayeeDetail</h3>

<a id="schemapayeedetail"></a>

```json
{
  "payeeId": "string",
  "nickname": "string",
  "description": "string",
  "type": "DOMESTIC",
  "payee": {
    "payeeType": "domestic",
    "domesticAccountPayee": {
      "domesticPayeeType": "payId",
      "name": "string",
      "identifier": "string",
      "type": "EMAIL"
    }
  }
}

```

### Properties

*allOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[Payee](#schemapayee)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» payee|any|true|none|none|

*oneOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»» *anonymous*|[DomesticPayeeType](#schemadomesticpayeetype)|false|none|none|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»» *anonymous*|[BillerPayeeType](#schemabillerpayeetype)|false|none|none|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»» *anonymous*|[InternationalPayeeType](#schemainternationalpayeetype)|false|none|none|

<h3 id="tocSpayeetype">PayeeType</h3>

<a id="schemapayeetype"></a>

```json
{
  "payeeType": "domestic"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|payeeType|string|true|none|The Payee type.|

#### Enumerated Values

|Property|Value|
|---|---|
|payeeType|domestic|
|payeeType|biller|
|payeeType|international|

<h3 id="tocSdomesticpayeesubtype">DomesticPayeeSubType</h3>

<a id="schemadomesticpayeesubtype"></a>

```json
{
  "domesticPayeeType": "account"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domesticPayeeType|string|true|none|The Domestic Payee type.|

#### Enumerated Values

|Property|Value|
|---|---|
|domesticPayeeType|account|
|domesticPayeeType|payId|

<h3 id="tocSaccountdomesticpayeetype">AccountDomesticPayeeType</h3>

<a id="schemaaccountdomesticpayeetype"></a>

```json
{
  "domesticPayeeType": "account",
  "accountName": "string",
  "bsb": "string",
  "accountNumber": "string"
}

```

### Properties

*allOf - discriminator: DomesticPayeeSubType.domesticPayeeType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[DomesticPayeeSubType](#schemadomesticpayeesubtype)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» accountName|string|true|none|name of the account to pay to.|
|» bsb|string|true|none|BSB of the account to pay to.|
|» accountNumber|string|true|none|Number of the account to pay to.|
|» domesticPayeeType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|domesticPayeeType|account|

<h3 id="tocSpayiddomesticpayeetype">PayIDDomesticPayeeType</h3>

<a id="schemapayiddomesticpayeetype"></a>

```json
{
  "domesticPayeeType": "payId",
  "name": "string",
  "identifier": "string",
  "type": "EMAIL"
}

```

### Properties

*allOf - discriminator: DomesticPayeeSubType.domesticPayeeType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[DomesticPayeeSubType](#schemadomesticpayeesubtype)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» name|string|true|none|The name assiged to the PayID by the owner of the PayID.|
|» identifier|string|true|none|The identifier of the PayID.|
|» type|string|true|none|The type of PayID.|
|» domesticPayeeType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|EMAIL|
|type|MOBILE|
|type|ORG_NUMBER|
|domesticPayeeType|payId|

<h3 id="tocSdomesticpayeetype">DomesticPayeeType</h3>

<a id="schemadomesticpayeetype"></a>

```json
{
  "payeeType": "domestic",
  "domesticAccountPayee": {
    "domesticPayeeType": "payId",
    "name": "string",
    "identifier": "string",
    "type": "EMAIL"
  }
}

```

### Properties

*allOf - discriminator: PayeeType.payeeType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[PayeeType](#schemapayeetype)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» domesticAccountPayee|any|true|none|none|

*oneOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»» *anonymous*|[PayIDDomesticPayeeType](#schemapayiddomesticpayeetype)|false|none|none|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»» *anonymous*|[AccountDomesticPayeeType](#schemaaccountdomesticpayeetype)|false|none|none|

*continued*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» payeeType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|payeeType|domestic|

<h3 id="tocSbillerpayeetype">BillerPayeeType</h3>

<a id="schemabillerpayeetype"></a>

```json
{
  "payeeType": "biller",
  "billerCode": "string",
  "crn": "string",
  "billerName": "string"
}

```

### Properties

*allOf - discriminator: PayeeType.payeeType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[PayeeType](#schemapayeetype)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» billerCode|string|true|none|BPay Biller Code of the Biller.|
|» crn|string|true|none|BPay CRN of the Biller.|
|» billerName|string|true|none|Name of the Biller.|
|» payeeType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|payeeType|biller|

<h3 id="tocSinternationalpayeetype">InternationalPayeeType</h3>

<a id="schemainternationalpayeetype"></a>

```json
{
  "payeeType": "international",
  "beneficiaryDetails": {
    "name": "string",
    "country": "string",
    "address": "string",
    "message": "string"
  },
  "bankDetails": {
    "country": "string",
    "accountNumber": "string",
    "bankAddress": {
      "name": "string",
      "address": "string"
    },
    "swiftCode": "string",
    "sortCode": "string",
    "chipNumber": "string",
    "routingNumber": "string"
  }
}

```

### Properties

*allOf - discriminator: PayeeType.payeeType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[PayeeType](#schemapayeetype)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» beneficiaryDetails|object|true|none|none|
|»» name|string|true|none|Name of the beneficiary.|
|»» country|string|true|none|Country where the beneficiary resides.|
|»» address|string|true|none|Address of the beneficiary.|
|»» message|string|false|none|Response message for the payment.|
|» bankDetails|object|false|none|none|
|»» country|string|true|none|Country of the recipient institution.|
|»» accountNumber|string|true|none|Accont targeted for payment.|
|»» bankAddress|object|false|none|none|
|»»» name|string|true|none|Name of the recipient bank.|
|»»» address|string|true|none|Address of the recipient bank.|
|»» swiftCode|string|false|none|Swift bank code.|
|»» sortCode|string|false|none|Sort code used for account idenfitication in some jurisdictions..|
|»» chipNumber|string|false|none|Number for the Clearing House Interbank Payments system.|
|»» routingNumber|string|false|none|International bank routing number.|
|» payeeType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|payeeType|international|

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
  "providerType": "string",
  "balance": {
    "balanceType": "deposits",
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
|balance|any|true|none|none|

*oneOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[DepositBalanceType](#schemadepositbalancetype)|false|none|none|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[LendingBalanceType](#schemalendingbalancetype)|false|none|none|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[MultiCurrencyPursesType](#schemamulticurrencypursestype)|false|none|none|

<h3 id="tocSaccountdetail">AccountDetail</h3>

<a id="schemaaccountdetail"></a>

```json
{
  "accountId": "string",
  "displayName": "string",
  "nickname": "string",
  "maskedNumber": "string",
  "productCategory": "PERS_AT_CALL_DEPOSITS",
  "providerType": "string",
  "balance": {
    "balanceType": "deposits",
    "currentBalance": {
      "amount": 300.56,
      "currency": "AUD"
    },
    "availableBalance": {
      "amount": 300.56,
      "currency": "AUD"
    }
  },
  "features": [
    {
      "featureType": "DEBIT_CARD",
      "discountType": "DEBIT_CARD"
    }
  ],
  "fees": [
    {
      "name": "string",
      "feeType": "PERIODIC",
      "amount": 0,
      "additionalInfo": "string",
      "additionalInfoUri": "http://example.com",
      "discounts": [
        {
          "discountType": "BALANCE",
          "additionalValue": 0
        }
      ],
      "additionalValue": "DAILY"
    }
  ],
  "depositRates": [
    {
      "rate": "string",
      "additionalInfo": "string",
      "additionalInfoUri": "http://example.com",
      "depositRateType": "FIXED",
      "additionalValue": "2018-11-01T05:33:52Z",
      "discountType": "FIXED"
    }
  ],
  "lendingRates": [
    {
      "rate": "string",
      "additionalInfo": "string",
      "additionalInfoUri": "http://example.com",
      "lendingRateType": "FIXED",
      "additionalValue": "2018-11-01T05:33:52Z",
      "discountType": "FIXED"
    }
  ],
  "bundleName": "string",
  "specificAccount": {
    "accountType": "termDeposit",
    "depositDate": "2018-11-01",
    "maturityDate": "2018-11-01",
    "maturityAmount": 0
  },
  "address": {
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
}

```

### Properties

*allOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[Account](#schemaaccount)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[ProductCommon](#schemaproductcommon)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» bundleName|string|false|none|Indicates if this account is park of a bundle that is providing additional benefit to the customer.|
|» specificAccount|any|true|none|none|

*oneOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»» *anonymous*|[TermDepositAccountType](#schematermdepositaccounttype)|false|none|none|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»» *anonymous*|[CreditCardAccountType](#schemacreditcardaccounttype)|false|none|none|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»» *anonymous*|[LoanAccountType](#schemaloanaccounttype)|false|none|none|

*continued*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» address|any|true|none|none|

*oneOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»» *anonymous*|[SimpleAddress](#schemasimpleaddress)|false|none|none|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»» *anonymous*|[PAFAddress](#schemapafaddress)|false|none|none|

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

<h3 id="tocSproduct">Product</h3>

<a id="schemaproduct"></a>

```json
{
  "productId": "string",
  "effectiveFrom": "2018-11-01T05:33:52Z",
  "effectiveTo": "2018-11-01T05:33:52Z",
  "lastUpdated": "2018-11-01T05:33:52Z",
  "productCategory": "PERS_AT_CALL_DEPOSITS",
  "name": "string",
  "description": "string",
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
|productId|string(ASCII)|true|none|A provider specific unique identifier for this product. This identifier must be unique to a product but does not otherwise need to adhere to ID permanence guidelines.|
|effectiveFrom|[DateTimeString](#common-field-types)|false|none|A description of the product.|
|effectiveTo|[DateTimeString](#common-field-types)|false|none|The date and time at which this product will be retired and will no longer be offered.|
|lastUpdated|[DateTimeString](#common-field-types)|true|none|A description of the product.|
|productCategory|[ProductCategory](#schemaproductcategory)|true|none|The the product category an account aligns withs.|
|name|string|true|none|The display name of the product.|
|description|string|true|none|The description of the product.|
|applicationUri|string(uri)|false|none|A link to an application web page where this product can be applied for.|
|isNegotiable|boolean|true|none|Indicates whether the product is specifically designed so that fees and prices are negotiated depending on context. While all products are open to a degree of negotiation this flag indicates that negotiation is expected and thus that the provision of specific fees and rates is not applicable.|
|additionalInformation|object|false|none|Object that contains links to additional information on specific topics.|
|» overviewUri|string(uri)|false|none|General overview of the product.|
|» termsUri|string(uri)|false|none|Terms and conditions for the product.|
|» eligibilityUri|string(uri)|false|none|Eligibility rules and criteria for the product.|
|» feesAndPricingUri|string(uri)|false|none|Description of fees, pricing, discounts, exemptions and bonuses for the product.|
|» bundleUri|string(uri)|false|none|Description of a bundle that this product can be part of.|

<h3 id="tocSproductdetail">ProductDetail</h3>

<a id="schemaproductdetail"></a>

```json
{
  "productId": "string",
  "effectiveFrom": "2018-11-01T05:33:52Z",
  "effectiveTo": "2018-11-01T05:33:52Z",
  "lastUpdated": "2018-11-01T05:33:52Z",
  "productCategory": "PERS_AT_CALL_DEPOSITS",
  "name": "string",
  "description": "string",
  "applicationUri": "http://example.com",
  "isNegotiable": true,
  "additionalInformation": {
    "overviewUri": "http://example.com",
    "termsUri": "http://example.com",
    "eligibilityUri": "http://example.com",
    "feesAndPricingUri": "http://example.com",
    "bundleUri": "http://example.com"
  },
  "features": [
    {
      "featureType": "DEBIT_CARD",
      "discountType": "DEBIT_CARD"
    }
  ],
  "fees": [
    {
      "name": "string",
      "feeType": "PERIODIC",
      "amount": 0,
      "additionalInfo": "string",
      "additionalInfoUri": "http://example.com",
      "discounts": [
        {
          "discountType": "BALANCE",
          "additionalValue": 0
        }
      ],
      "additionalValue": "DAILY"
    }
  ],
  "depositRates": [
    {
      "rate": "string",
      "additionalInfo": "string",
      "additionalInfoUri": "http://example.com",
      "depositRateType": "FIXED",
      "additionalValue": "2018-11-01T05:33:52Z",
      "discountType": "FIXED"
    }
  ],
  "lendingRates": [
    {
      "rate": "string",
      "additionalInfo": "string",
      "additionalInfoUri": "http://example.com",
      "lendingRateType": "FIXED",
      "additionalValue": "2018-11-01T05:33:52Z",
      "discountType": "FIXED"
    }
  ],
  "constraints": [
    {
      "constraintType": "MIN_BALANCE",
      "additionalValue": 0
    }
  ],
  "eligibility": [
    {
      "additionalInfo": "string",
      "additionalInfoUri": "http://example.com",
      "eligibilityType": "BUSINESS"
    }
  ]
}

```

### Properties

*allOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[Product](#schemaproduct)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[ProductCommon](#schemaproductcommon)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» constraints|[oneOf]|false|none|none|

*oneOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»» *anonymous*|[MinBalanceConstraintType](#schemaminbalanceconstrainttype)|false|none|The minimum balance required for the product.|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»» *anonymous*|[OpeningBalanceConstraintType](#schemaopeningbalanceconstrainttype)|false|none|An opening balance is required for the product.|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»» *anonymous*|[MaxLimitConstraintType](#schemamaxlimitconstrainttype)|false|none|A maximum credit line exists.|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»» *anonymous*|[MinLimitConstraintType](#schemaminlimitconstrainttype)|false|none|A minimum credit line exists.|

*continued*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» eligibility|[oneOf]|false|none|none|

*oneOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»» *anonymous*|[BusinessEligibilityType](#schemabusinesseligibilitytype)|false|none|Only business may apply for the account.|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»» *anonymous*|[PensionRecipientEligibilityType](#schemapensionrecipienteligibilitytype)|false|none|A recipient of a government pension may apply for the product.|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»» *anonymous*|[MinAgeEligibilityType](#schemaminageeligibilitytype)|false|none|Only customers older than a minimum age may apply.|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»» *anonymous*|[MinTurnoverEligibilityType](#schemaminturnovereligibilitytype)|false|none|Only a business with greater than a minimum turnover may apply.|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»» *anonymous*|[StaffEligibilityType](#schemastaffeligibilitytype)|false|none|Only a staff member of the provider may apply.|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»» *anonymous*|[OtherEligibilityType](#schemaothereligibilitytype)|false|none|Another elibility criteria exists as described in the additionalInfo field|

<h3 id="tocSproductcommon">ProductCommon</h3>

<a id="schemaproductcommon"></a>

```json
{
  "features": [
    {
      "featureType": "DEBIT_CARD",
      "discountType": "DEBIT_CARD"
    }
  ],
  "fees": [
    {
      "name": "string",
      "feeType": "PERIODIC",
      "amount": 0,
      "additionalInfo": "string",
      "additionalInfoUri": "http://example.com",
      "discounts": [
        {
          "discountType": "BALANCE",
          "additionalValue": 0
        }
      ],
      "additionalValue": "DAILY"
    }
  ],
  "depositRates": [
    {
      "rate": "string",
      "additionalInfo": "string",
      "additionalInfoUri": "http://example.com",
      "depositRateType": "FIXED",
      "additionalValue": "2018-11-01T05:33:52Z",
      "discountType": "FIXED"
    }
  ],
  "lendingRates": [
    {
      "rate": "string",
      "additionalInfo": "string",
      "additionalInfoUri": "http://example.com",
      "lendingRateType": "FIXED",
      "additionalValue": "2018-11-01T05:33:52Z",
      "discountType": "FIXED"
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|features|[oneOf]|false|none|none|

*oneOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[DebitCardFeatureType](#schemadebitcardfeaturetype)|false|none|A debit card is available for the product.|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[AdditionalCardsFeatureType](#schemaadditionalcardsfeaturetype)|false|none|Addtional cards can be requested.|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[UnlimitedTransactionsFeatureType](#schemaunlimitedtransactionsfeaturetype)|false|none|Unlimited free transactions available.|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[FreeTransactionsFeatureType](#schemafreetransactionsfeaturetype)|false|none|A set number of free transactions available each month.|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[LoyaltyProgramFeatureType](#schemaloyaltyprogramfeaturetype)|false|none|A points based loyalty program is available.|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[OffsetFeatureType](#schemaoffsetfeaturetype)|false|none|An offset account can be connected to the product.|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[OverdraftFeatureType](#schemaoverdraftfeaturetype)|false|none|An overdraft can be applied for.|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[RedrawFeatureType](#schemaredrawfeaturetype)|false|none|Redraw of repaid principal is available.|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[InsuranceFeatureType](#schemainsurancefeaturetype)|false|none|Insurance is provided as an additional feature of the product.|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[BalanceTransfersFeatureType](#schemabalancetransfersfeaturetype)|false|none|Balance transfers can be made from the account (eg. for credit cards).|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[IntFreeDaysFeatureType](#schemaintfreedaysfeaturetype)|false|none|Interest free period for purchases.|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[IntFreeMonthsFeatureType](#schemaintfreemonthsfeaturetype)|false|none|Interest free period for purchases.|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[IntFreeDaysTransfersFeatureType](#schemaintfreedaystransfersfeaturetype)|false|none|Interest free period for balance transfers.|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[IntFreeMonthsTransfersFeatureType](#schemaintfreemonthstransfersfeaturetype)|false|none|Interest free period for balance transfers.|

*continued*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fees|[oneOf]|false|none|none|

*oneOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[PeriodicFeeType](#schemaperiodicfeetype)|false|none|A periodic fee such as a monthly account servicing fee.|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[TransactionFeeType](#schematransactionfeetype)|false|none|A fee for each transaction (above any free transactions in a period)|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[ExitFeeType](#schemaexitfeetype)|false|none|A fee for closing the product|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[OverdrawFeeType](#schemaoverdrawfeetype)|false|none|A fee for overdrawing the account|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[MinBalanceFeeType](#schemaminbalancefeetype)|false|none|A periodic fee such as a monthly account servicing fee.|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[RedrawFeeType](#schemaredrawfeetype)|false|none|A fee for performing a redraw transaction.|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[OtherEventFeeType](#schemaothereventfeetype)|false|none|A fee for another type of event not already specified in the existing set.|

*continued*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|depositRates|[oneOf]|false|none|none|

*oneOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[FixedDepositRateType](#schemafixeddepositratetype)|false|none|Fixed rate for a period of time.|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[BonusDepositRateType](#schemabonusdepositratetype)|false|none|The bonus rate obtained by originating a bundle instead of a standalone product.|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[BonusDepositRateType](#schemabonusdepositratetype)|false|none|The bonus rate obtained by originating a bundle instead of a standalone product.|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[VariableDepositRateType](#schemavariabledepositratetype)|false|none|The variable base rate for the product.|

*continued*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lendingRates|[oneOf]|false|none|none|

*oneOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[FixedLendingRateType](#schemafixedlendingratetype)|false|none|Fixed rate for a period of time.|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[HoneymoonLendingRateType](#schemahoneymoonlendingratetype)|false|none|A honeymoon discount that will expire after a set number of months.|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[DiscountLendingRateType](#schemadiscountlendingratetype)|false|none|A specific discount rate that may be applied.|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[PenaltyLendingRateType](#schemapenaltylendingratetype)|false|none|A specific penalty rate that may be applied.|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[BundleDiscountLendingRateType](#schemabundlediscountlendingratetype)|false|none|A discount rate obtained by originating a bundle instead of a standalone product.|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[VariableLendingRateType](#schemavariablelendingratetype)|false|none|A variable base rate for the product.|

<h3 id="tocSeligibilitytype">EligibilityType</h3>

<a id="schemaeligibilitytype"></a>

```json
{
  "additionalInfo": "string",
  "additionalInfoUri": "http://example.com",
  "eligibilityType": "BUSINESS"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalInfo|string|false|none|Display text containing additional information relevant to the eligibility type.|
|additionalInfoUri|string(uri)|false|none|Link to a web page with more information on this eligibility criteria.|
|eligibilityType|string|true|none|The type of product eligibility.|

#### Enumerated Values

|Property|Value|
|---|---|
|eligibilityType|BUSINESS|
|eligibilityType|PERSON_RECIPIENT|
|eligibilityType|MIN_AGE|
|eligibilityType|MIN_TURNOVER|
|eligibilityType|STAFF|
|eligibilityType|OTHER|

<h3 id="tocSbusinesseligibilitytype">BusinessEligibilityType</h3>

<a id="schemabusinesseligibilitytype"></a>

```json
{
  "additionalInfo": "string",
  "additionalInfoUri": "http://example.com",
  "eligibilityType": "BUSINESS"
}

```

*Only business may apply for the account.*

### Properties

*allOf - discriminator: EligibilityType.eligibilityType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[EligibilityType](#schemaeligibilitytype)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» eligibilityType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|eligibilityType|BUSINESS|

<h3 id="tocSpensionrecipienteligibilitytype">PensionRecipientEligibilityType</h3>

<a id="schemapensionrecipienteligibilitytype"></a>

```json
{
  "additionalInfo": "string",
  "additionalInfoUri": "http://example.com",
  "eligibilityType": "PERSON_RECIPIENT"
}

```

*A recipient of a government pension may apply for the product.*

### Properties

*allOf - discriminator: EligibilityType.eligibilityType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[EligibilityType](#schemaeligibilitytype)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» eligibilityType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|eligibilityType|PERSON_RECIPIENT|

<h3 id="tocSminageeligibilitytype">MinAgeEligibilityType</h3>

<a id="schemaminageeligibilitytype"></a>

```json
{
  "additionalInfo": "string",
  "additionalInfoUri": "http://example.com",
  "eligibilityType": "MIN_AGE",
  "additionalValue": 0
}

```

*Only customers older than a minimum age may apply.*

### Properties

*allOf - discriminator: EligibilityType.eligibilityType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[EligibilityType](#schemaeligibilitytype)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» additionalValue|integer(int32)|false|none|The minimum age in years.|
|» eligibilityType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|eligibilityType|MIN_AGE|

<h3 id="tocSminturnovereligibilitytype">MinTurnoverEligibilityType</h3>

<a id="schemaminturnovereligibilitytype"></a>

```json
{
  "additionalInfo": "string",
  "additionalInfoUri": "http://example.com",
  "eligibilityType": "MIN_TURNOVER",
  "additionalValue": 0
}

```

*Only a business with greater than a minimum turnover may apply.*

### Properties

*allOf - discriminator: EligibilityType.eligibilityType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[EligibilityType](#schemaeligibilitytype)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» additionalValue|number|false|none|The minimum turnover.|
|» eligibilityType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|eligibilityType|MIN_TURNOVER|

<h3 id="tocSstaffeligibilitytype">StaffEligibilityType</h3>

<a id="schemastaffeligibilitytype"></a>

```json
{
  "additionalInfo": "string",
  "additionalInfoUri": "http://example.com",
  "eligibilityType": "STAFF"
}

```

*Only a staff member of the provider may apply.*

### Properties

*allOf - discriminator: EligibilityType.eligibilityType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[EligibilityType](#schemaeligibilitytype)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» eligibilityType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|eligibilityType|STAFF|

<h3 id="tocSothereligibilitytype">OtherEligibilityType</h3>

<a id="schemaothereligibilitytype"></a>

```json
{
  "additionalInfo": "string",
  "additionalInfoUri": "http://example.com",
  "eligibilityType": "OTHER",
  "additionalValue": "string"
}

```

*Another elibility criteria exists as described in the additionalInfo field*

### Properties

*allOf - discriminator: EligibilityType.eligibilityType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[EligibilityType](#schemaeligibilitytype)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» additionalValue|string|false|none|Value relevant to the criteria.|
|» eligibilityType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|eligibilityType|OTHER|

<h3 id="tocSconstrainttype">ConstraintType</h3>

<a id="schemaconstrainttype"></a>

```json
{
  "constraintType": "MIN_BALANCE"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|constraintType|string|true|none|The type of product constraint.|

#### Enumerated Values

|Property|Value|
|---|---|
|constraintType|MIN_BALANCE|
|constraintType|OPENING_BALANCE|
|constraintType|MAX_LIMIT|
|constraintType|MIN_LIMIT|

<h3 id="tocSminbalanceconstrainttype">MinBalanceConstraintType</h3>

<a id="schemaminbalanceconstrainttype"></a>

```json
{
  "constraintType": "MIN_BALANCE",
  "additionalValue": 0
}

```

*The minimum balance required for the product.*

### Properties

*allOf - discriminator: ConstraintType.constraintType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[ConstraintType](#schemaconstrainttype)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» additionalValue|number|false|none|The minimum balance.|
|» constraintType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|constraintType|MIN_BALANCE|

<h3 id="tocSopeningbalanceconstrainttype">OpeningBalanceConstraintType</h3>

<a id="schemaopeningbalanceconstrainttype"></a>

```json
{
  "constraintType": "OPENING_BALANCE",
  "additionalValue": 0
}

```

*An opening balance is required for the product.*

### Properties

*allOf - discriminator: ConstraintType.constraintType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[ConstraintType](#schemaconstrainttype)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» additionalValue|number|false|none|The minimum opening balance.|
|» constraintType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|constraintType|OPENING_BALANCE|

<h3 id="tocSmaxlimitconstrainttype">MaxLimitConstraintType</h3>

<a id="schemamaxlimitconstrainttype"></a>

```json
{
  "constraintType": "MAX_LIMIT",
  "additionalValue": 0
}

```

*A maximum credit line exists.*

### Properties

*allOf - discriminator: ConstraintType.constraintType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[ConstraintType](#schemaconstrainttype)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» additionalValue|number|false|none|The maximum limit.|
|» constraintType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|constraintType|MAX_LIMIT|

<h3 id="tocSminlimitconstrainttype">MinLimitConstraintType</h3>

<a id="schemaminlimitconstrainttype"></a>

```json
{
  "constraintType": "MIN_LIMIT",
  "additionalValue": 0
}

```

*A minimum credit line exists.*

### Properties

*allOf - discriminator: ConstraintType.constraintType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[ConstraintType](#schemaconstrainttype)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» additionalValue|number|false|none|The minimum limit.|
|» constraintType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|constraintType|MIN_LIMIT|

<h3 id="tocSlendingratetype">LendingRateType</h3>

<a id="schemalendingratetype"></a>

```json
{
  "rate": "string",
  "additionalInfo": "string",
  "additionalInfoUri": "http://example.com",
  "lendingRateType": "FIXED"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rate|string(rate)|true|none|The rate to be applied.|
|additionalInfo|string|false|none|Display text providing more information on the fee.|
|additionalInfoUri|string(uri)|false|none|Link to a web page with more information on this fee.|
|lendingRateType|string|false|none|The type of deposit rate.|

#### Enumerated Values

|Property|Value|
|---|---|
|lendingRateType|FIXED|
|lendingRateType|HONEYMOON|
|lendingRateType|DISCOUNT|
|lendingRateType|PENALTY|
|lendingRateType|BUNDLE_DISCOUNT|
|lendingRateType|VARIABLE|

<h3 id="tocSfixedlendingratetype">FixedLendingRateType</h3>

<a id="schemafixedlendingratetype"></a>

```json
{
  "rate": "string",
  "additionalInfo": "string",
  "additionalInfoUri": "http://example.com",
  "lendingRateType": "FIXED",
  "additionalValue": "2018-11-01T05:33:52Z",
  "discountType": "FIXED"
}

```

*Fixed rate for a period of time.*

### Properties

*allOf - discriminator: LendingRateType.lendingRateType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[LendingRateType](#schemalendingratetype)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» additionalValue|[DateTimeString](#common-field-types)|false|none|When the fixed rate will expire.|
|» discountType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|discountType|FIXED|

<h3 id="tocShoneymoonlendingratetype">HoneymoonLendingRateType</h3>

<a id="schemahoneymoonlendingratetype"></a>

```json
{
  "rate": "string",
  "additionalInfo": "string",
  "additionalInfoUri": "http://example.com",
  "lendingRateType": "FIXED",
  "additionalValue": "2018-11-01T05:33:52Z",
  "discountType": "HONEYMOON"
}

```

*A honeymoon discount that will expire after a set number of months.*

### Properties

*allOf - discriminator: LendingRateType.lendingRateType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[LendingRateType](#schemalendingratetype)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» additionalValue|[DateTimeString](#common-field-types)|false|none|When the honeymoon rate will expire.|
|» discountType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|discountType|HONEYMOON|

<h3 id="tocSdiscountlendingratetype">DiscountLendingRateType</h3>

<a id="schemadiscountlendingratetype"></a>

```json
{
  "rate": "string",
  "additionalInfo": "string",
  "additionalInfoUri": "http://example.com",
  "lendingRateType": "FIXED",
  "additionalValue": "string",
  "discountType": "DISCOUNT"
}

```

*A specific discount rate that may be applied.*

### Properties

*allOf - discriminator: LendingRateType.lendingRateType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[LendingRateType](#schemalendingratetype)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» additionalValue|string|false|none|Description of the discount.|
|» discountType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|discountType|DISCOUNT|

<h3 id="tocSpenaltylendingratetype">PenaltyLendingRateType</h3>

<a id="schemapenaltylendingratetype"></a>

```json
{
  "rate": "string",
  "additionalInfo": "string",
  "additionalInfoUri": "http://example.com",
  "lendingRateType": "FIXED",
  "additionalValue": "string",
  "discountType": "PENALTY"
}

```

*A specific penalty rate that may be applied.*

### Properties

*allOf - discriminator: LendingRateType.lendingRateType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[LendingRateType](#schemalendingratetype)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» additionalValue|string|false|none|Description of the penalty.|
|» discountType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|discountType|PENALTY|

<h3 id="tocSbundlediscountlendingratetype">BundleDiscountLendingRateType</h3>

<a id="schemabundlediscountlendingratetype"></a>

```json
{
  "rate": "string",
  "additionalInfo": "string",
  "additionalInfoUri": "http://example.com",
  "lendingRateType": "FIXED",
  "additionalValue": "string",
  "discountType": "BUNDLE_DISCOUNT"
}

```

*A discount rate obtained by originating a bundle instead of a standalone product.*

### Properties

*allOf - discriminator: LendingRateType.lendingRateType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[LendingRateType](#schemalendingratetype)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» additionalValue|string|false|none|The name of the bundle.|
|» discountType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|discountType|BUNDLE_DISCOUNT|

<h3 id="tocSvariablelendingratetype">VariableLendingRateType</h3>

<a id="schemavariablelendingratetype"></a>

```json
{
  "rate": "string",
  "additionalInfo": "string",
  "additionalInfoUri": "http://example.com",
  "lendingRateType": "FIXED",
  "discountType": "VARIABLE"
}

```

*A variable base rate for the product.*

### Properties

*allOf - discriminator: LendingRateType.lendingRateType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[LendingRateType](#schemalendingratetype)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» discountType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|discountType|VARIABLE|

<h3 id="tocSdepositratetype">DepositRateType</h3>

<a id="schemadepositratetype"></a>

```json
{
  "rate": "string",
  "additionalInfo": "string",
  "additionalInfoUri": "http://example.com",
  "depositRateType": "FIXED"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rate|string(rate)|true|none|The rate to be applied.|
|additionalInfo|string|false|none|Display text providing more information on the fee.|
|additionalInfoUri|string(uri)|false|none|Link to a web page with more information on this fee.|
|depositRateType|string|true|none|The type of deposit rate.|

#### Enumerated Values

|Property|Value|
|---|---|
|depositRateType|FIXED|
|depositRateType|BONUS|
|depositRateType|BUNDLE_BONUS|
|depositRateType|VARIABLE|

<h3 id="tocSfixeddepositratetype">FixedDepositRateType</h3>

<a id="schemafixeddepositratetype"></a>

```json
{
  "rate": "string",
  "additionalInfo": "string",
  "additionalInfoUri": "http://example.com",
  "depositRateType": "FIXED",
  "additionalValue": "2018-11-01T05:33:52Z",
  "discountType": "FIXED"
}

```

*Fixed rate for a period of time.*

### Properties

*allOf - discriminator: DepositRateType.depositRateType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[DepositRateType](#schemadepositratetype)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» additionalValue|[DateTimeString](#common-field-types)|false|none|When the fixed rate will expire.|
|» discountType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|discountType|FIXED|

<h3 id="tocSbonusdepositratetype">BonusDepositRateType</h3>

<a id="schemabonusdepositratetype"></a>

```json
{
  "rate": "string",
  "additionalInfo": "string",
  "additionalInfoUri": "http://example.com",
  "depositRateType": "FIXED",
  "additionalValue": "string",
  "discountType": "BONUS"
}

```

*The bonus rate obtained by originating a bundle instead of a standalone product.*

### Properties

*allOf - discriminator: DepositRateType.depositRateType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[DepositRateType](#schemadepositratetype)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» additionalValue|string|false|none|The name of the bundle.|
|» discountType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|discountType|BONUS|

<h3 id="tocSvariabledepositratetype">VariableDepositRateType</h3>

<a id="schemavariabledepositratetype"></a>

```json
{
  "rate": "string",
  "additionalInfo": "string",
  "additionalInfoUri": "http://example.com",
  "depositRateType": "FIXED",
  "discountType": "VARIABLE"
}

```

*The variable base rate for the product.*

### Properties

*allOf - discriminator: DepositRateType.depositRateType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[DepositRateType](#schemadepositratetype)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» discountType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|discountType|VARIABLE|

<h3 id="tocSfeaturetype">FeatureType</h3>

<a id="schemafeaturetype"></a>

```json
{
  "featureType": "DEBIT_CARD"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|featureType|string|true|none|The type of discount|

#### Enumerated Values

|Property|Value|
|---|---|
|featureType|DEBIT_CARD|
|featureType|ADDITIONAL_CARDS|
|featureType|UNLIMITED_TXNS|
|featureType|FREE_TXNS|
|featureType|LOYALTY_PROGRAM|
|featureType|OFFSET|
|featureType|OVERDRAFT|
|featureType|REDRAW|
|featureType|INSURANCE|
|featureType|BALANCE_TRANSFERS|
|featureType|INT_FREE_DAYS|
|featureType|INT_FREE_MONTHS|
|featureType|INT_FREE_DAYS_TRNSFRS|
|featureType|INT_FREE_MONTHS_TRNSFRS|

<h3 id="tocSdebitcardfeaturetype">DebitCardFeatureType</h3>

<a id="schemadebitcardfeaturetype"></a>

```json
{
  "featureType": "DEBIT_CARD",
  "discountType": "DEBIT_CARD"
}

```

*A debit card is available for the product.*

### Properties

*allOf - discriminator: FeatureType.featureType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[FeatureType](#schemafeaturetype)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» discountType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|discountType|DEBIT_CARD|

<h3 id="tocSadditionalcardsfeaturetype">AdditionalCardsFeatureType</h3>

<a id="schemaadditionalcardsfeaturetype"></a>

```json
{
  "featureType": "DEBIT_CARD",
  "additionalValue": 0,
  "discountType": "ADDITIONAL_CARDS"
}

```

*Addtional cards can be requested.*

### Properties

*allOf - discriminator: FeatureType.featureType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[FeatureType](#schemafeaturetype)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» additionalValue|integer(int32)|true|none|The maximum number of addtional cards.|
|» discountType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|discountType|ADDITIONAL_CARDS|

<h3 id="tocSunlimitedtransactionsfeaturetype">UnlimitedTransactionsFeatureType</h3>

<a id="schemaunlimitedtransactionsfeaturetype"></a>

```json
{
  "featureType": "DEBIT_CARD",
  "discountType": "UNLIMITED_TXNS"
}

```

*Unlimited free transactions available.*

### Properties

*allOf - discriminator: FeatureType.featureType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[FeatureType](#schemafeaturetype)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» discountType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|discountType|UNLIMITED_TXNS|

<h3 id="tocSfreetransactionsfeaturetype">FreeTransactionsFeatureType</h3>

<a id="schemafreetransactionsfeaturetype"></a>

```json
{
  "featureType": "DEBIT_CARD",
  "additionalValue": 0,
  "discountType": "FREE_TXNS"
}

```

*A set number of free transactions available each month.*

### Properties

*allOf - discriminator: FeatureType.featureType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[FeatureType](#schemafeaturetype)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» additionalValue|integer(int32)|true|none|The number of free transactions.|
|» discountType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|discountType|FREE_TXNS|

<h3 id="tocSloyaltyprogramfeaturetype">LoyaltyProgramFeatureType</h3>

<a id="schemaloyaltyprogramfeaturetype"></a>

```json
{
  "featureType": "DEBIT_CARD",
  "additionalValue": "string",
  "discountType": "LOYALTY_PROGRAM"
}

```

*A points based loyalty program is available.*

### Properties

*allOf - discriminator: FeatureType.featureType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[FeatureType](#schemafeaturetype)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» additionalValue|string|true|none|The name of the loyalty program.|
|» discountType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|discountType|LOYALTY_PROGRAM|

<h3 id="tocSoffsetfeaturetype">OffsetFeatureType</h3>

<a id="schemaoffsetfeaturetype"></a>

```json
{
  "featureType": "DEBIT_CARD",
  "discountType": "OFFSET"
}

```

*An offset account can be connected to the product.*

### Properties

*allOf - discriminator: FeatureType.featureType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[FeatureType](#schemafeaturetype)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» discountType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|discountType|OFFSET|

<h3 id="tocSoverdraftfeaturetype">OverdraftFeatureType</h3>

<a id="schemaoverdraftfeaturetype"></a>

```json
{
  "featureType": "DEBIT_CARD",
  "discountType": "OVERDRAFT"
}

```

*An overdraft can be applied for.*

### Properties

*allOf - discriminator: FeatureType.featureType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[FeatureType](#schemafeaturetype)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» discountType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|discountType|OVERDRAFT|

<h3 id="tocSredrawfeaturetype">RedrawFeatureType</h3>

<a id="schemaredrawfeaturetype"></a>

```json
{
  "featureType": "DEBIT_CARD",
  "discountType": "REDRAW"
}

```

*Redraw of repaid principal is available.*

### Properties

*allOf - discriminator: FeatureType.featureType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[FeatureType](#schemafeaturetype)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» discountType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|discountType|REDRAW|

<h3 id="tocSinsurancefeaturetype">InsuranceFeatureType</h3>

<a id="schemainsurancefeaturetype"></a>

```json
{
  "featureType": "DEBIT_CARD",
  "additionalValue": "string",
  "discountType": "INSURANCE"
}

```

*Insurance is provided as an additional feature of the product.*

### Properties

*allOf - discriminator: FeatureType.featureType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[FeatureType](#schemafeaturetype)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» additionalValue|string|true|none|Description of the type of insurance.|
|» discountType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|discountType|INSURANCE|

<h3 id="tocSbalancetransfersfeaturetype">BalanceTransfersFeatureType</h3>

<a id="schemabalancetransfersfeaturetype"></a>

```json
{
  "featureType": "DEBIT_CARD",
  "discountType": "BALANCE_TRANSFERS"
}

```

*Balance transfers can be made from the account (eg. for credit cards).*

### Properties

*allOf - discriminator: FeatureType.featureType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[FeatureType](#schemafeaturetype)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» discountType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|discountType|BALANCE_TRANSFERS|

<h3 id="tocSintfreedaysfeaturetype">IntFreeDaysFeatureType</h3>

<a id="schemaintfreedaysfeaturetype"></a>

```json
{
  "featureType": "DEBIT_CARD",
  "additionalValue": 0,
  "discountType": "INT_FREE_DAYS"
}

```

*Interest free period for purchases.*

### Properties

*allOf - discriminator: FeatureType.featureType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[FeatureType](#schemafeaturetype)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» additionalValue|integer(int32)|true|none|Days of interest free period.|
|» discountType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|discountType|INT_FREE_DAYS|

<h3 id="tocSintfreemonthsfeaturetype">IntFreeMonthsFeatureType</h3>

<a id="schemaintfreemonthsfeaturetype"></a>

```json
{
  "featureType": "DEBIT_CARD",
  "additionalValue": 0,
  "discountType": "INT_FREE_MONTHS"
}

```

*Interest free period for purchases.*

### Properties

*allOf - discriminator: FeatureType.featureType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[FeatureType](#schemafeaturetype)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» additionalValue|integer(int32)|true|none|Month of interest free period.|
|» discountType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|discountType|INT_FREE_MONTHS|

<h3 id="tocSintfreedaystransfersfeaturetype">IntFreeDaysTransfersFeatureType</h3>

<a id="schemaintfreedaystransfersfeaturetype"></a>

```json
{
  "featureType": "DEBIT_CARD",
  "additionalValue": 0,
  "discountType": "INT_FREE_DAYS_TRNSFRS"
}

```

*Interest free period for balance transfers.*

### Properties

*allOf - discriminator: FeatureType.featureType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[FeatureType](#schemafeaturetype)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» additionalValue|integer(int32)|true|none|Days of interest free period.|
|» discountType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|discountType|INT_FREE_DAYS_TRNSFRS|

<h3 id="tocSintfreemonthstransfersfeaturetype">IntFreeMonthsTransfersFeatureType</h3>

<a id="schemaintfreemonthstransfersfeaturetype"></a>

```json
{
  "featureType": "DEBIT_CARD",
  "additionalValue": 0,
  "discountType": "INT_FREE_MONTHS_TRNSFRS"
}

```

*Interest free period for balance transfers.*

### Properties

*allOf - discriminator: FeatureType.featureType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[FeatureType](#schemafeaturetype)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» additionalValue|integer(int32)|true|none|Months of interest free period.|
|» discountType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|discountType|INT_FREE_MONTHS_TRNSFRS|

<h3 id="tocSfeetype">FeeType</h3>

<a id="schemafeetype"></a>

```json
{
  "name": "string",
  "feeType": "PERIODIC",
  "amount": 0,
  "additionalInfo": "string",
  "additionalInfoUri": "http://example.com",
  "discounts": [
    {
      "discountType": "BALANCE",
      "additionalValue": 0
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Name of the fee.|
|feeType|string|true|none|The type of fee,|
|amount|number|true|none|Amound charged for the fee assumiung to be in AUD.|
|additionalInfo|string|true|none|Display text providing more information on the fee.|
|additionalInfoUri|string(uri)|true|none|Link to a web page with more information on this fee.|
|discounts|[oneOf]|false|none|none|

*oneOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[BalanceDiscountType](#schemabalancediscounttype)|false|none|Discount on a fee for maintaining a set balance.  As the discount applies to a fee the period is the same as for the fee.|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[DepositsDiscountType](#schemadepositsdiscounttype)|false|none|Discount for depositing a certain amount of money in a period.  As the discount applies to a fee the period is the same as for the fee.|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[PaymentsDiscountType](#schemapaymentsdiscounttype)|false|none|Discount for depositing a certain amount of money in a period.  As the discount applies to a fee the period is the same as for the fee.|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[BundleDiscountType](#schemabundlediscounttype)|false|none|Discount for originating a bundle instead of a standalone product.|

#### Enumerated Values

|Property|Value|
|---|---|
|feeType|PERIODIC|
|feeType|TRANSACTION|
|feeType|EXIT|
|feeType|OVERDRAW|
|feeType|MIN_BALANCE|
|feeType|REDRAW|
|feeType|OTHER_EVENT|

<h3 id="tocSdiscounttype">DiscountType</h3>

<a id="schemadiscounttype"></a>

```json
{
  "discountType": "BALANCE"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|discountType|string|true|none|The type of discount|

#### Enumerated Values

|Property|Value|
|---|---|
|discountType|BALANCE|
|discountType|DEPOSITS|
|discountType|PAYMENTS|
|discountType|BUNDLE|

<h3 id="tocSbalancediscounttype">BalanceDiscountType</h3>

<a id="schemabalancediscounttype"></a>

```json
{
  "discountType": "BALANCE",
  "additionalValue": 0
}

```

*Discount on a fee for maintaining a set balance.  As the discount applies to a fee the period is the same as for the fee.*

### Properties

*allOf - discriminator: DiscountType.discountType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[DiscountType](#schemadiscounttype)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» additionalValue|number|true|none|The minimum balance.|
|» discountType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|discountType|BALANCE|

<h3 id="tocSdepositsdiscounttype">DepositsDiscountType</h3>

<a id="schemadepositsdiscounttype"></a>

```json
{
  "discountType": "DEPOSITS",
  "additionalValue": 0
}

```

*Discount for depositing a certain amount of money in a period.  As the discount applies to a fee the period is the same as for the fee.*

### Properties

*allOf - discriminator: DiscountType.discountType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[DiscountType](#schemadiscounttype)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» additionalValue|number|true|none|The minimum deposit amount.|
|» discountType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|discountType|DEPOSITS|

<h3 id="tocSpaymentsdiscounttype">PaymentsDiscountType</h3>

<a id="schemapaymentsdiscounttype"></a>

```json
{
  "discountType": "PAYMENTS",
  "additionalValue": 0
}

```

*Discount for depositing a certain amount of money in a period.  As the discount applies to a fee the period is the same as for the fee.*

### Properties

*allOf - discriminator: DiscountType.discountType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[DiscountType](#schemadiscounttype)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» additionalValue|number|true|none|The payment threshold amount.|
|» discountType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|discountType|PAYMENTS|

<h3 id="tocSbundlediscounttype">BundleDiscountType</h3>

<a id="schemabundlediscounttype"></a>

```json
{
  "discountType": "BUNDLE",
  "additionalValue": "string"
}

```

*Discount for originating a bundle instead of a standalone product.*

### Properties

*allOf - discriminator: DiscountType.discountType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[DiscountType](#schemadiscounttype)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» additionalValue|string|true|none|The name of the application bundle.|
|» discountType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|discountType|BUNDLE|

<h3 id="tocSperiodicfeetype">PeriodicFeeType</h3>

<a id="schemaperiodicfeetype"></a>

```json
{
  "name": "string",
  "feeType": "PERIODIC",
  "amount": 0,
  "additionalInfo": "string",
  "additionalInfoUri": "http://example.com",
  "discounts": [
    {
      "discountType": "BALANCE",
      "additionalValue": 0
    }
  ],
  "additionalValue": "DAILY"
}

```

*A periodic fee such as a monthly account servicing fee.*

### Properties

*allOf - discriminator: FeeType.feeType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[FeeType](#schemafeetype)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» additionalValue|[ChargePeriod](#schemachargeperiod)|true|none|The period of charge|
|» feeType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|feeType|PERIODIC|

<h3 id="tocStransactionfeetype">TransactionFeeType</h3>

<a id="schematransactionfeetype"></a>

```json
{
  "name": "string",
  "feeType": "TRANSACTION",
  "amount": 0,
  "additionalInfo": "string",
  "additionalInfoUri": "http://example.com",
  "discounts": [
    {
      "discountType": "BALANCE",
      "additionalValue": 0
    }
  ],
  "additionalValue": "string"
}

```

*A fee for each transaction (above any free transactions in a period)*

### Properties

*allOf - discriminator: FeeType.feeType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[FeeType](#schemafeetype)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» additionalValue|string|true|none|A description of the type of transaction|
|» feeType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|feeType|TRANSACTION|

<h3 id="tocSexitfeetype">ExitFeeType</h3>

<a id="schemaexitfeetype"></a>

```json
{
  "name": "string",
  "feeType": "EXIT",
  "amount": 0,
  "additionalInfo": "string",
  "additionalInfoUri": "http://example.com",
  "discounts": [
    {
      "discountType": "BALANCE",
      "additionalValue": 0
    }
  ]
}

```

*A fee for closing the product*

### Properties

*allOf - discriminator: FeeType.feeType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[FeeType](#schemafeetype)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» feeType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|feeType|EXIT|

<h3 id="tocSoverdrawfeetype">OverdrawFeeType</h3>

<a id="schemaoverdrawfeetype"></a>

```json
{
  "name": "string",
  "feeType": "OVERDRAW",
  "amount": 0,
  "additionalInfo": "string",
  "additionalInfoUri": "http://example.com",
  "discounts": [
    {
      "discountType": "BALANCE",
      "additionalValue": 0
    }
  ]
}

```

*A fee for overdrawing the account*

### Properties

*allOf - discriminator: FeeType.feeType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[FeeType](#schemafeetype)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» feeType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|feeType|OVERDRAW|

<h3 id="tocSminbalancefeetype">MinBalanceFeeType</h3>

<a id="schemaminbalancefeetype"></a>

```json
{
  "name": "string",
  "feeType": "MIN_BALANCE",
  "amount": 0,
  "additionalInfo": "string",
  "additionalInfoUri": "http://example.com",
  "discounts": [
    {
      "discountType": "BALANCE",
      "additionalValue": 0
    }
  ],
  "additionalValue": "DAILY"
}

```

*A periodic fee such as a monthly account servicing fee.*

### Properties

*allOf - discriminator: FeeType.feeType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[FeeType](#schemafeetype)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» additionalValue|[ChargePeriod](#schemachargeperiod)|true|none|The period of charge|
|» feeType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|feeType|MIN_BALANCE|

<h3 id="tocSredrawfeetype">RedrawFeeType</h3>

<a id="schemaredrawfeetype"></a>

```json
{
  "name": "string",
  "feeType": "REDRAW",
  "amount": 0,
  "additionalInfo": "string",
  "additionalInfoUri": "http://example.com",
  "discounts": [
    {
      "discountType": "BALANCE",
      "additionalValue": 0
    }
  ]
}

```

*A fee for performing a redraw transaction.*

### Properties

*allOf - discriminator: FeeType.feeType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[FeeType](#schemafeetype)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» feeType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|feeType|REDRAW|

<h3 id="tocSothereventfeetype">OtherEventFeeType</h3>

<a id="schemaothereventfeetype"></a>

```json
{
  "name": "string",
  "feeType": "OTHER_EVENT",
  "amount": 0,
  "additionalInfo": "string",
  "additionalInfoUri": "http://example.com",
  "discounts": [
    {
      "discountType": "BALANCE",
      "additionalValue": 0
    }
  ],
  "additionalValue": "string"
}

```

*A fee for another type of event not already specified in the existing set.*

### Properties

*allOf - discriminator: FeeType.feeType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[FeeType](#schemafeetype)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» additionalValue|string|true|none|A text description of the event.|
|» feeType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|feeType|OTHER_EVENT|

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

<h3 id="tocSaccounttype">AccountType</h3>

<a id="schemaaccounttype"></a>

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

<h3 id="tocStermdepositaccounttype">TermDepositAccountType</h3>

<a id="schematermdepositaccounttype"></a>

```json
{
  "accountType": "termDeposit",
  "depositDate": "2018-11-01",
  "maturityDate": "2018-11-01",
  "maturityAmount": 0
}

```

### Properties

*allOf - discriminator: AccountType.accountType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[AccountType](#schemaaccounttype)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» depositDate|string(date)|true|none|The date of the original deposit.|
|» maturityDate|string(date)|true|none|Maturity date for the term deposit.|
|» maturityAmount|number|true|none|Amount to be paid upon maturity|
|» accountType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|accountType|termDeposit|

<h3 id="tocScreditcardaccounttype">CreditCardAccountType</h3>

<a id="schemacreditcardaccounttype"></a>

```json
{
  "accountType": "creditCard",
  "minPaymentAmount": 0,
  "minPaymentDate": "2018-11-01"
}

```

### Properties

*allOf - discriminator: AccountType.accountType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[AccountType](#schemaaccounttype)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» minPaymentAmount|number|true|none|Minimum payment amount for the card.|
|» minPaymentDate|string(date)|true|none|Date that a minimum payment for the card is due.|
|» accountType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|accountType|creditCard|

<h3 id="tocSloanaccounttype">LoanAccountType</h3>

<a id="schemaloanaccounttype"></a>

```json
{
  "accountType": "loan",
  "loanEndDate": "2018-11-01",
  "nextInstalmentDate": "2018-11-01",
  "minInstalmentAmount": 0,
  "maxRedraw": 0,
  "minRedraw": 0,
  "offsetAccountId": "string"
}

```

### Properties

*allOf - discriminator: AccountType.accountType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[AccountType](#schemaaccounttype)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» loanEndDate|string(date)|true|none|Date that the loan is due to be repaid in full.|
|» nextInstalmentDate|string(date)|true|none|Next date that an installment is required.|
|» minInstalmentAmount|number|true|none|Minimum Amount of next instalment.|
|» maxRedraw|number|false|none|Maximum amount of funds that can be redrawn.  If not present redraw is not available even if the feature exists for the account.|
|» minRedraw|number(date)|false|none|none|
|» offsetAccountId|any|false|none|none|

*allOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»» *anonymous*|[AccountId](#schemaaccountid)|false|none|A unique ID of the account adhering to the standards for ID permanence.|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»» *anonymous*|any|false|none|The accoundId for an offset account attached to this loan.|

*continued*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» accountType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|accountType|loan|

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
  "balance": {
    "balanceType": "deposits",
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
|balance|any|true|none|none|

*oneOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[DepositBalanceType](#schemadepositbalancetype)|false|none|none|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[LendingBalanceType](#schemalendingbalancetype)|false|none|none|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[MultiCurrencyPursesType](#schemamulticurrencypursestype)|false|none|none|

<h3 id="tocSbalancetype">BalanceType</h3>

<a id="schemabalancetype"></a>

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

<h3 id="tocSdepositbalancetype">DepositBalanceType</h3>

<a id="schemadepositbalancetype"></a>

```json
{
  "balanceType": "deposits",
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

*allOf - discriminator: BalanceType.balanceType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[BalanceType](#schemabalancetype)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» currentBalance|[CurrencyAmount](#schemacurrencyamount)|true|none|The current balance of the account at this time. Should align to the current balance available via other channels such as ATM balance enquiry or Internet Banking.|
|» availableBalance|[CurrencyAmount](#schemacurrencyamount)|true|none|Object represent the current balance for the account.  Assumed to be positive or zero.|
|» balanceType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|balanceType|deposits|

<h3 id="tocSlendingbalancetype">LendingBalanceType</h3>

<a id="schemalendingbalancetype"></a>

```json
{
  "balanceType": "lending",
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

*allOf - discriminator: BalanceType.balanceType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[BalanceType](#schemabalancetype)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» accountBalance|[CurrencyAmount](#schemacurrencyamount)|true|none|Object represent the balance for the loan, line of credit or credit card.|
|» availableBalance|[CurrencyAmount](#schemacurrencyamount)|true|none|The available balance for the account. Assumed to be positive or zero.|
|» creditLimit|[CurrencyAmount](#schemacurrencyamount)|true|none|The maximum amount of credit that is avaible for this account. Assumed to be positive or zero.|
|» amortisedLimit|[CurrencyAmount](#schemacurrencyamount)|false|none|The available limit amortised according to payement schedule.|
|» balanceType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|balanceType|lending|

<h3 id="tocSmulticurrencypursestype">MultiCurrencyPursesType</h3>

<a id="schemamulticurrencypursestype"></a>

```json
{
  "balanceType": "purses",
  "purses": [
    {
      "amount": 300.56,
      "currency": "AUD"
    }
  ]
}

```

### Properties

*allOf - discriminator: BalanceType.balanceType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[BalanceType](#schemabalancetype)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» purses|[[CurrencyAmount](#schemacurrencyamount)]|true|none|List of Purses.|
|» balanceType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|balanceType|purses|

<h3 id="tocSproductcategory">ProductCategory</h3>

<a id="schemaproductcategory"></a>

```json
"PERS_AT_CALL_DEPOSITS"

```

*The the product category an account aligns withs.*

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

<h3 id="tocSapiresponse">APIResponse</h3>

<a id="schemaapiresponse"></a>

```json
{
  "links": {
    "self": "http://example.com",
    "first": "http://example.com",
    "prev": "http://example.com",
    "next": "http://example.com",
    "last": "http://example.com"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|links|[Links](#schemalinks)|true|none|none|

<h3 id="tocSapiresponsemeta">APIResponseMeta</h3>

<a id="schemaapiresponsemeta"></a>

```json
{
  "links": {
    "self": "http://example.com",
    "first": "http://example.com",
    "prev": "http://example.com",
    "next": "http://example.com",
    "last": "http://example.com"
  },
  "meta": {
    "totalRecords": 6,
    "totalPages": 2
  }
}

```

### Properties

*allOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[APIResponse](#schemaapiresponse)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» meta|[Meta](#schemameta)|true|none|none|

<h3 id="tocSmeta">Meta</h3>

<a id="schemameta"></a>

```json
{
  "totalRecords": 6,
  "totalPages": 2
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|totalRecords|integer(int32)|true|none|The total number of records in the  full set.|
|totalPages|integer(int32)|true|none|The total number of pages in the  full set.|

<h3 id="tocSlinks">Links</h3>

<a id="schemalinks"></a>

```json
{
  "self": "http://example.com",
  "first": "http://example.com",
  "prev": "http://example.com",
  "next": "http://example.com",
  "last": "http://example.com"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|self|string(uri)|true|none|Fully qualified link  to this  API  call.|
|first|string(uri)|false|none|URI to  the  first  page of this set. Mandatory  if this  response is  not  the  first  page.|
|prev|string(uri)|false|none|URI to  the  previous page of this set. Mandatory if this response is not the first page.|
|next|string(uri)|false|none|URI to the next page of this set. Mandatory if this response is not the last page.|
|last|string(uri)|false|none|URI to the last page of this set.  Mandatory if this response is not the last page.|

<h3 id="tocSerror">Error</h3>

<a id="schemaerror"></a>

```json
{
  "code": "string",
  "title": "string",
  "detail": "string"
}

```

*This is the standard representaton of an error.*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|true|none|none|
|title|string|true|none|none|
|detail|string|true|none|none|
