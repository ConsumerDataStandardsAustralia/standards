## Common Schemas

<h3 id="tocSperson">Person</h3>

<a id="schemaperson"></a>

### Properties

*allOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|The individual who authorised the session.|
|» lastUpdateTime|[DateTimeString](#common-field-types)|true|none|The date and time this this record was last updated.|
|» firstName|string|true|none|none|
|» lastName|string|true|none|none|
|» middleNames|[string]|true|none|none|
|» prefix|string|true|none|Title or salutation.|
|» suffix|string|false|none|Used for a trailing suffix to the name.|
|» occupationCode|string|false|none|Value should be a valid [ANZCO v1.2](http://www.abs.gov.au/ANZSCO) Standard Occupation classification.|




<h3 id="tocSorganisation">Organisation</h3>

<a id="schemaorganisation"></a>

### Properties

*allOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|The authorisation was given to a business agent and this type represents that business.  This type should not be used where a retail customer was authorised.|
|» lastUpdateTime|[DateTimeString](#common-field-types)|false|none|The date and time this this record was last updated.|
|» agentFirstName|string|false|none|The first name of the individual providing access on behalf of the organisation. For people with single names this field need not be present.  The single name should be in the lastName field|
|» agentLastName|string|true|none|The last name of the individual providing access on behalf of the organisation. For people with single names the single name should be in this field|
|» agentRole|string|true|none|The role of the individual identifed by the `Person` record in this organisation.  Expected to be used for display.  Default to “Unspecified” if the role is not known|
|» businessName|string|true|none|Name of the organisation.|
|» legalName|string|false|none|Legal name, if different to the business name.|
|» shortName|string|false|none|Short name used for communication, if different to the business name.|
|» abn|string|false|none|Australian Business Number.|
|» acn|string|false|none|Australian Company Number.|
|» isACNCRegistered|boolean|false|none|True if registered with the ACNC. False if not. Absent or null if not confirmed.|
|» industryCode|string|false|none|[ANZIC (2006)](http://www.abs.gov.au/ausstats/abs@.nsf/mf/1292.0) code for the organisation.|
|» organisationType|string|false|none|none|
|» registeredCountry|string|false|none|A valid [ISO 3166 Alpha-3](https://www.iso.org/iso-3166-country-codes.html) country code.|
|» establishmentDate|[DateTimeString](#common-field-types)|false|none|The date the organisation described was established.|

#### Enumerated Values

|Property|Value|
|---|---|
|organisationType|SOLE_TRADER|
|organisationType|COMPANY|
|organisationType|PARTNERSHIP|
|organisationType|TRUST|
|organisationType|GOVERNMENT_ENTITY|
|organisationType|OTHER|
