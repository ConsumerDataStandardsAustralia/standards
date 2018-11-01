## getCustomer

<a id="opIdgetCustomer"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://myserver.com/cds-au/common/v1/customer \
  -H 'Accept: application/json' \
  -H 'x-v: 1' \
  -H 'x-min-v: 1' \
  -H 'x-<<PID>>-Id: string' \
  -H 'Authorization: Bearer {access-token}'

```

```javascript
var headers = {
  'Accept':'application/json',
  'x-v':'1',
  'x-min-v':'1',
  'x-<<PID>>-Id':'string',
  'Authorization':'Bearer {access-token}'

};

$.ajax({
  url: 'https://myserver.com/cds-au/common/v1/customer',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`GET /customer`

*Basic Customer Data.*

Obtain basic information on the customer that has authorised the current session.

<h3 id="getcustomer-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|x-v|header|integer(int32)|true|Version of the API end point requested by the client. Must be set to a positive integer. If the version(s) requested is not supported then the provider should respond with a `406 Not Acceptable`.|
|x-min-v|header|integer(int32)|false|Minimum version of the API end point requested by the client. Must be set to a positive integer if provided. The provider should respond with the highest supported version between `x-min-v` and `x-v`.|
|x-<<PID>>-Id|header|string|false|A provider specific version of extension fields. Should not be used in conjunction with `x-min-v`.|

#### Detailed descriptions

**x-v**: Version of the API end point requested by the client. Must be set to a positive integer. If the version(s) requested is not supported then the provider should respond with a `406 Not Acceptable`.

**x-min-v**: Minimum version of the API end point requested by the client. Must be set to a positive integer if provided. The provider should respond with the highest supported version between `x-min-v` and `x-v`.

If all versions requested are not supported then the provider should respond with a `406 Not Acceptable`.

> Example responses

> 200 Response

```json
{
  "links": {
    "self": "http://example.com"
  },
  "data": {
    "person": {
      "customerType": "person",
      "lastUpdateTime": "2018-11-01T05:32:18Z",
      "firstName": "string",
      "lastName": "string",
      "middleNames": [
        "string"
      ],
      "prefix": "string",
      "suffix": "string",
      "occupationCode": "string"
    },
    "organisation": {
      "customerType": "organisation",
      "lastUpdateTime": "2018-11-01T05:32:18Z",
      "agentRole": "Unspecified",
      "businessName": "string",
      "legalName": "string",
      "shortName": "string",
      "abn": "string",
      "acn": "string",
      "isACNRegistered": true,
      "industryCode": "string",
      "organisationType": "SOLE_TRADER",
      "registeredCountry": "AUS",
      "establishmentDate": "string"
    }
  }
}
```

<h3 id="getcustomer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[CustomerResponse](#schemacustomerresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-v|integer|int32|The version of the API end point that the provider has responded with.|
|200|x-Correlation-Id|string||Reflected value of the correlation ID provided by the data consumer in the request headers. If no correlation ID was provided in the request this header should not be supplied. If a correlation ID was provided in the request then this header is mandatory.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
openId ( Scopes: basic_customer )
</aside>

## getCustomerDetail

<a id="opIdgetCustomerDetail"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://myserver.com/cds-au/common/v1/customer/detail \
  -H 'Accept: application/json' \
  -H 'x-v: 1' \
  -H 'x-min-v: 1' \
  -H 'x-<<PID>>-Id: string' \
  -H 'Authorization: Bearer {access-token}'

```

```javascript
var headers = {
  'Accept':'application/json',
  'x-v':'1',
  'x-min-v':'1',
  'x-<<PID>>-Id':'string',
  'Authorization':'Bearer {access-token}'

};

$.ajax({
  url: 'https://myserver.com/cds-au/common/v1/customer/detail',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

`GET /customer/detail`

*Detailed Customer Data.*

Obtain detailed information on the customer that has authorised the current session.

<h3 id="getcustomerdetail-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|x-v|header|integer(int32)|true|Version of the API end point requested by the client. Must be set to a positive integer. If the version(s) requested is not supported then the provider should respond with a `406 Not Acceptable`.|
|x-min-v|header|integer(int32)|false|Minimum version of the API end point requested by the client. Must be set to a positive integer if provided. The provider should respond with the highest supported version between `x-min-v` and `x-v`.|
|x-<<PID>>-Id|header|string|false|A provider specific version of extension fields. Should not be used in conjunction with `x-min-v`.|

#### Detailed descriptions

**x-v**: Version of the API end point requested by the client. Must be set to a positive integer. If the version(s) requested is not supported then the provider should respond with a `406 Not Acceptable`.

**x-min-v**: Minimum version of the API end point requested by the client. Must be set to a positive integer if provided. The provider should respond with the highest supported version between `x-min-v` and `x-v`.

If all versions requested are not supported then the provider should respond with a `406 Not Acceptable`.

> Example responses

> 200 Response

```json
{
  "links": {
    "self": "http://example.com"
  },
  "data": {
    "customerType": "person",
    "lastUpdateTime": "2018-11-01T05:32:18Z",
    "firstName": "string",
    "lastName": "string",
    "middleNames": [
      "string"
    ],
    "prefix": "string",
    "suffix": "string",
    "occupationCode": "string",
    "phoneNumbers": [
      {
        "isPreferred": true,
        "purpose": "MOBILE",
        "countryCode": "61",
        "areaCode": "string",
        "number": "string",
        "extension": "string",
        "fullNumber": "string"
      }
    ],
    "emailAddresses": [
      {
        "isPreferred": true,
        "purpose": "WORK",
        "address": "user@example.com"
      }
    ],
    "physicalAddresses": [
      {
        "purpose": "REGISTERED",
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
    ]
  }
}
```

<h3 id="getcustomerdetail-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[CustomerDetailResponse](#schemacustomerdetailresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-v|integer|int32|The version of the API end point that the provider has responded with.|
|200|x-Correlation-Id|string||Reflected value of the correlation ID provided by the data consumer in the request headers. If no correlation ID was provided in the request this header should not be supplied. If a correlation ID was provided in the request then this header is mandatory.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
openId ( Scopes: detail_customer )
</aside>

<!-- ## Schemas -->

<h2 id="tocScustomerresponse">CustomerResponse</h2>

<a id="schemacustomerresponse"></a>

```json
{
  "links": {
    "self": "http://example.com"
  },
  "data": {
    "person": {
      "customerType": "person",
      "lastUpdateTime": "2018-11-01T05:32:18Z",
      "firstName": "string",
      "lastName": "string",
      "middleNames": [
        "string"
      ],
      "prefix": "string",
      "suffix": "string",
      "occupationCode": "string"
    },
    "organisation": {
      "customerType": "organisation",
      "lastUpdateTime": "2018-11-01T05:32:18Z",
      "agentRole": "Unspecified",
      "businessName": "string",
      "legalName": "string",
      "shortName": "string",
      "abn": "string",
      "acn": "string",
      "isACNRegistered": true,
      "industryCode": "string",
      "organisationType": "SOLE_TRADER",
      "registeredCountry": "AUS",
      "establishmentDate": "string"
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
|» data|[CustomerResponse_data](#schemacustomerresponse_data)|true|none|none|

<h2 id="tocScustomerdetailresponse">CustomerDetailResponse</h2>

<a id="schemacustomerdetailresponse"></a>

```json
{
  "links": {
    "self": "http://example.com"
  },
  "data": {
    "customerType": "person",
    "lastUpdateTime": "2018-11-01T05:32:18Z",
    "firstName": "string",
    "lastName": "string",
    "middleNames": [
      "string"
    ],
    "prefix": "string",
    "suffix": "string",
    "occupationCode": "string",
    "phoneNumbers": [
      {
        "isPreferred": true,
        "purpose": "MOBILE",
        "countryCode": "61",
        "areaCode": "string",
        "number": "string",
        "extension": "string",
        "fullNumber": "string"
      }
    ],
    "emailAddresses": [
      {
        "isPreferred": true,
        "purpose": "WORK",
        "address": "user@example.com"
      }
    ],
    "physicalAddresses": [
      {
        "purpose": "REGISTERED",
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
    ]
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
|» data|any|true|none|none|

*oneOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»» *anonymous*|[PersonDetail](#schemapersondetail)|false|none|none|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»» *anonymous*|[OrganisationDetail](#schemaorganisationdetail)|false|none|none|

<h2 id="tocScustomer">Customer</h2>

<a id="schemacustomer"></a>

```json
{
  "customerType": "person"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customerType|string|true|none|The Customer type.|

#### Enumerated Values

|Property|Value|
|---|---|
|customerType|person|
|customerType|organisation|

<h2 id="tocSperson">Person</h2>

<a id="schemaperson"></a>

```json
{
  "customerType": "person",
  "lastUpdateTime": "2018-11-01T05:32:18Z",
  "firstName": "string",
  "lastName": "string",
  "middleNames": [
    "string"
  ],
  "prefix": "string",
  "suffix": "string",
  "occupationCode": "string"
}

```

### Properties

*allOf - discriminator: Customer.customerType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[Customer](#schemacustomer)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|The individual who authorised the session.|
|» lastUpdateTime|string(date-time)|true|none|The date and time this this record was last updated.|
|» firstName|string|true|none|none|
|» lastName|string|true|none|none|
|» middleNames|[string]\|null|true|none|none|
|» prefix|string|true|none|Title or salutation.|
|» suffix|string|false|none|Used for a trailing suffix to the name.|
|» occupationCode|string|false|none|Value should be a valid ANZCO v1.2 Standard Occupation classification.|
|» customerType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|customerType|person|

<h2 id="tocSpersondetail">PersonDetail</h2>

<a id="schemapersondetail"></a>

```json
{
  "customerType": "person",
  "lastUpdateTime": "2018-11-01T05:32:18Z",
  "firstName": "string",
  "lastName": "string",
  "middleNames": [
    "string"
  ],
  "prefix": "string",
  "suffix": "string",
  "occupationCode": "string",
  "phoneNumbers": [
    {
      "isPreferred": true,
      "purpose": "MOBILE",
      "countryCode": "61",
      "areaCode": "string",
      "number": "string",
      "extension": "string",
      "fullNumber": "string"
    }
  ],
  "emailAddresses": [
    {
      "isPreferred": true,
      "purpose": "WORK",
      "address": "user@example.com"
    }
  ],
  "physicalAddresses": [
    {
      "purpose": "REGISTERED",
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
  ]
}

```

### Properties

*allOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[Person](#schemaperson)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» phoneNumbers|[[PhoneNumber](#schemaphonenumber)]|true|none|At least one record is required.|
|» emailAddresses|[[EmailAddress](#schemaemailaddress)]|true|none|May be empty.|
|» physicalAddresses|[[PhysicalAddress](#schemaphysicaladdress)]|true|none|Must contain at least one address.  One and only one address may have the purpose of REGISTERED. Zero or one, and no more than one, record may have the purpose of MAIL.  If zero then the REGISTERED address is to be used for mail.|

<h2 id="tocSorganisationdetail">OrganisationDetail</h2>

<a id="schemaorganisationdetail"></a>

```json
{
  "customerType": "organisation",
  "lastUpdateTime": "2018-11-01T05:32:18Z",
  "agentRole": "Unspecified",
  "businessName": "string",
  "legalName": "string",
  "shortName": "string",
  "abn": "string",
  "acn": "string",
  "isACNRegistered": true,
  "industryCode": "string",
  "organisationType": "SOLE_TRADER",
  "registeredCountry": "AUS",
  "establishmentDate": "string",
  "agentFirstName": "string",
  "agentLastName": "string",
  "physicalAddresses": [
    {
      "purpose": "REGISTERED",
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
  ]
}

```

### Properties

*allOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[Organisation](#schemaorganisation)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» agentFirstName|string|false|none|The first name of the individual providing access on behalf of the organisation. For people with single names the single name should be in the agentLastName field.|
|» agentLastName|string|true|none|The last name of the individual providing access on behalf of the organisation. For people with single names the single name should be in this field.|
|» physicalAddresses|[[PhysicalAddress](#schemaphysicaladdress)]|true|none|Must contain at least one address.  One and only one address may have the purpose of REGISTERED. Zero or one, and no more than one, record may have the purpose of MAIL.  If zero then the REGISTERED address is to be used for mail.|

<h2 id="tocSphonenumber">PhoneNumber</h2>

<a id="schemaphonenumber"></a>

```json
{
  "isPreferred": true,
  "purpose": "MOBILE",
  "countryCode": "61",
  "areaCode": "string",
  "number": "string",
  "extension": "string",
  "fullNumber": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|isPreferred|boolean|true|none|Required to be true for one and only one entry to indicate the preferred phone number.|
|purpose|string|true|none|The purpose of the number as specified by the customer.|
|countryCode|string|false|none|If absent, should be assumed to be +61 for Australia.  The + should be included.|
|areaCode|string|false|none|Required for non-mobile phone numbers. If this field is present and refers to an Australian area code, then the leading '0' should not be included.|
|number|string|true|none|The actual phone number with leading zeroes as appropriate.|
|extension|string|false|none|An extension number (if applicable).|
|fullNumber|string|true|none|Fully formatted phone number with country code, area code, number and extension incorporated. Formatted according to serction 5.1.4. of RFC 3966.|

#### Enumerated Values

|Property|Value|
|---|---|
|purpose|MOBILE|
|purpose|WORK|
|purpose|HOME|
|purpose|OTHER|
|purpose|INTERNATIONAL|
|purpose|UNSPECIFIED|

<h2 id="tocSemailaddress">EmailAddress</h2>

<a id="schemaemailaddress"></a>

```json
{
  "isPreferred": true,
  "purpose": "WORK",
  "address": "user@example.com"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|isPreferred|boolean|false|none|Required to be true for one and only one entry to indicate the preferred email address.|
|purpose|string|false|none|The purpose of the address as specified by the customer.|
|address|string(email)|true|none|The email address value.|

#### Enumerated Values

|Property|Value|
|---|---|
|purpose|WORK|
|purpose|HOME|
|purpose|OTHER|
|purpose|UNSPECIFIED|

<h2 id="tocScountrycodeiso">CountryCodeISO</h2>

<a id="schemacountrycodeiso"></a>

```json
"AUS"

```

*A valid ISO 3166 Alph-3 country code.*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|A valid ISO 3166 Alph-3 country code.|

<h2 id="tocSaddress">Address</h2>

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

<h2 id="tocSsimpleaddress">SimpleAddress</h2>

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

<h2 id="tocSpafaddress">PAFAddress</h2>

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

<h2 id="tocSphysicaladdress">PhysicalAddress</h2>

<a id="schemaphysicaladdress"></a>

```json
{
  "purpose": "REGISTERED",
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

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|purpose|string|true|none|none|
|address|any|true|none|none|

*oneOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[SimpleAddress](#schemasimpleaddress)|false|none|none|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[PAFAddress](#schemapafaddress)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|purpose|REGISTERED|
|purpose|MAIL|
|purpose|PHYSICAL|
|purpose|WORK|
|purpose|OTHER|

<h2 id="tocSorganisation">Organisation</h2>

<a id="schemaorganisation"></a>

```json
{
  "customerType": "organisation",
  "lastUpdateTime": "2018-11-01T05:32:18Z",
  "agentRole": "Unspecified",
  "businessName": "string",
  "legalName": "string",
  "shortName": "string",
  "abn": "string",
  "acn": "string",
  "isACNRegistered": true,
  "industryCode": "string",
  "organisationType": "SOLE_TRADER",
  "registeredCountry": "AUS",
  "establishmentDate": "string"
}

```

### Properties

*allOf - discriminator: Customer.customerType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[Customer](#schemacustomer)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|The authorisation was given to a business agent and this type represents that business.  This type should not be used where a retail customer was authorised.|
|» lastUpdateTime|string(date-time)|false|none|The date and time this this record was last updated.|
|» agentRole|string|false|none|The role of the individual identifed by the `Person` record in this organisation.  Expected to be used for display.|
|» businessName|string|false|none|Name of the organisation.|
|» legalName|string|false|none|Legal name, if different to the business name.|
|» shortName|string|false|none|Short name used for communication, if different to the business name.|
|» abn|[ABN](#schemaabn)|false|none|Australian Business Number.|
|» acn|[ACN](#schemaacn)|false|none|Australian Company Number.|
|» isACNRegistered|boolean|false|none|True if registered with the ACNC. False if not.|
|» industryCode|string|false|none|ANZIC (2006) code for the organisation.|
|» organisationType|string|false|none|none|
|» registeredCountry|[CountryCodeISO](#schemacountrycodeiso)|false|none|A valid ISO 3166 Alph-3 country code.|
|» establishmentDate|string(date-string)|false|none|The date the organisation described was established.|
|» customerType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|organisationType|SOLE_TRADER|
|organisationType|COMPANY|
|organisationType|PARTNERSHIP|
|organisationType|TRUST|
|customerType|organisation|

<h2 id="tocSabn">ABN</h2>

<a id="schemaabn"></a>

```json
"string"

```

*Australian Business Number.*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Australian Business Number.|

<h2 id="tocSacn">ACN</h2>

<a id="schemaacn"></a>

```json
"string"

```

*Australian Company Number.*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Australian Company Number.|

<h2 id="tocSapiresponse">APIResponse</h2>

<a id="schemaapiresponse"></a>

```json
{
  "links": {
    "self": "http://example.com"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|links|[Links](#schemalinks)|true|none|none|

<h2 id="tocSlinks">Links</h2>

<a id="schemalinks"></a>

```json
{
  "self": "http://example.com"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|self|string(uri)|true|none|Fully qualified link  to this  API  call.|

<h2 id="tocScustomerresponse_data">CustomerResponse_data</h2>

<a id="schemacustomerresponse_data"></a>

```json
{
  "person": {
    "customerType": "person",
    "lastUpdateTime": "2018-11-01T05:32:18Z",
    "firstName": "string",
    "lastName": "string",
    "middleNames": [
      "string"
    ],
    "prefix": "string",
    "suffix": "string",
    "occupationCode": "string"
  },
  "organisation": {
    "customerType": "organisation",
    "lastUpdateTime": "2018-11-01T05:32:18Z",
    "agentRole": "Unspecified",
    "businessName": "string",
    "legalName": "string",
    "shortName": "string",
    "abn": "string",
    "acn": "string",
    "isACNRegistered": true,
    "industryCode": "string",
    "organisationType": "SOLE_TRADER",
    "registeredCountry": "AUS",
    "establishmentDate": "string"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|person|[Person](#schemaperson)|false|none|none|
|organisation|[Organisation](#schemaorganisation)|false|none|none|

