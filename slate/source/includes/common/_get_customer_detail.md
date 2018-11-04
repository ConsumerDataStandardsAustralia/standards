## Get Customer Detail

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

> Example responses

> 200 Response

```json
{
  "links": {
    "self": "http://example.com"
  },
  "data": {
    "customer$type": "person",
    "person": {
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
          "address$type": "simple",
          "simple": {
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
}
```

<h3 id="getcustomerdetail-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[CustomerDetailResponse](#schemacustomerdetailresponse)|

<aside class="notice">
To perform this operation, you must be authenticated by means of one of the following methods:
openId ( Scopes: common_detail_customer )
</aside>



<h3 id="tocScustomerdetailresponse">CustomerDetailResponse</h3>

<a id="schemacustomerdetailresponse"></a>


### Properties

*allOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» data|any|true|none|none|
|»» customer$type|string|true|none|The type of the customer.  Determines the main object returned|
|»» *anonymous*|[PersonDetail](#schemapersondetail)|false|none|none|
|»» *anonymous*|[OrganisationDetail](#schemaorganisationdetail)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[StandardResponse](#standardresponse)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|customer$type|person|
|customer$type|organisation|








<h3 id="tocSpersondetail">PersonDetail</h3>

<a id="schemapersondetail"></a>

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


<h3 id="tocSorganisationdetail">OrganisationDetail</h3>

<a id="schemaorganisationdetail"></a>

### Properties

*allOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[Organisation](#schemaorganisation)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» physicalAddresses|[[PhysicalAddress](#schemaphysicaladdress)]|true|none|Must contain at least one address.  One and only one address may have the purpose of REGISTERED. Zero or one, and no more than one, record may have the purpose of MAIL.  If zero then the REGISTERED address is to be used for mail.|



<h3 id="tocSphonenumber">PhoneNumber</h3>

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
|fullNumber|string|true|none|Fully formatted phone number with country code, area code, number and extension incorporated. Formatted according to [section 5.1.4. of RFC 3966](https://tools.ietf.org/html/rfc3966#section-5.1.4).|

#### Enumerated Values

|Property|Value|
|---|---|
|purpose|MOBILE|
|purpose|WORK|
|purpose|HOME|
|purpose|OTHER|
|purpose|INTERNATIONAL|
|purpose|UNSPECIFIED|







<h3 id="tocSemailaddress">EmailAddress</h3>

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
|address|string|true|none|The email address value formatted according to [RFC 5322](https://tools.ietf.org/html/rfc5322).|

#### Enumerated Values

|Property|Value|
|---|---|
|purpose|WORK|
|purpose|HOME|
|purpose|OTHER|
|purpose|UNSPECIFIED|






<h3 id="tocSphysicaladdress">PhysicalAddress</h3>

<a id="schemaphysicaladdress"></a>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|purpose|string|true|none|none|
|address$type|string|true|none|The type of address object that is present|
|address|any|true|none|none|
|simple|[SimpleAddress](#schemasimpleaddress)|false|none|none|
|paf|[PAFAddress](#schemapafaddress)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|purpose|REGISTERED|
|purpose|MAIL|
|purpose|PHYSICAL|
|purpose|WORK|
|purpose|OTHER|
|address$type|simple|
|address$type|paf|





<h3 id="tocSsimpleaddress">SimpleAddress</h3>

<a id="schemasimpleaddress"></a>


### Properties

*allOf*

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
|» state|string|true|none|Free text if the country is not Australia.  If country is Australia then must be one of the values defined by the [ISO 3166:AU](https://www.iso.org/obp/ui/#iso:code:3166:AU) standard.|
|» country|string|false|none|A valid [ISO 3166 Alpha-3](https://www.iso.org/iso-3166-country-codes.html) country code.|




<h3 id="tocSpafaddress">PAFAddress</h3>

<a id="schemapafaddress"></a>

### Properties

*allOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» data|object|true|none|none|
