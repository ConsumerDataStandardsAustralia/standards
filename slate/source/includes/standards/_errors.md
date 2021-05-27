## Error Codes

These standards define a standard list of error codes that Data Recipients and Data Holders SHOULD or MUST conform to. Further,

* Data Recipients and Data Holders SHOULD use the standard error codes as defined
* Where a specific error code MUST be responded, this requirement is stated against the applicable error code or API endpoints
* Where a specific error code MAY be responded, this requirement is stated against the applicable error code or API endpoints
* Data Recipients and Data Holders MAY respond with application-specific error codes and in doing so, MUST respond with the <code>MetaError &raquo; urn</code> field populated with the standard CDR error code.

### Error Response Structure

> Non-Normative Example

```
{
  "errors": [
    {
      "code": "urn:au-cds:error:cds-banking:Authorisation/UnavailableBankingAccount",
      "title": "Unavailable Banking Account",
      "description": "808b5b1d-0798-4bdf-a3c8-f9cce2904eb2"
    }
  ]
}
```
<a name="error_payload"></a>The `errors` object will be an array of zero or more unnamed objects. The fields in each of these objects will be as follows:

* `code` field MUST be present: holds an end point specific error code. This MAY be a standard CDR error code or an application-specific error code.
* `title` field MUST be present: holds a human readable label of the error that is constant
per `code`
* `detail` field MUST be present: holds a human readable description of this specific error
* `meta` object MAY be present: holds additional end point specific data relevant to the error

If a Data Recipient or Data Holder responds with an application-specific error code, the standard CDR URN error code MUST be provided in the `MetaError` object.

<div class="clear both"></div>
#### URN Structure

When responding with a standard CDR error code, the URN structure is defined as follows:

<pre class="display-inline light-box highlight">
<b>urn-string</b> = "urn:" <b>NID</b> ":" <b>metatype</b> ":" <b>sub-type</b> ":" <b>error-category</b> "/" <b>error-code</b>

<ul><li><b>NID</b>            = "au-cds" string.</li>
<li><b>metatype</b>       = "error" string.</li>
<li><b>sub-type</b>       = cds-all / cds-register / cds-banking / cds-energy
<ul><li><b>cds-all</b>      = "cds-all" string. An error code common to all API responses,</li><li><b>cds-register</b> = "cds-register" string. Reserved for CDR Register issued error codes only,</li><li><b>cds-banking</b>  = "cds-banking" string. An error code specific to the CDR banking APIs only,</li><li><b>cds-energy</b>   = "cds-energy" string. An error code specific to the CDR energy APIs only.</li></ul></li>
<li><b>error-category</b> = string. The high-level category code for the error defined in the Consumer Data Standards</li>
<li><b>error-code</b>     = string. The specific error encountered, defined in the Consumer Data Standards</li></ul>
</pre>
<div class="clear both"></div>

### Standard Error Codes

A list of standard error codes to help categorise an error response. The applicable HTTP response code is also given.

#### General Errors

> Non-Normative Example

```
# A request to a Data Holder extension API is made where an application-specific error is returned
#
# Request
POST https://data.acme.com.au/cds-au/v1/banking/ACME-new-loan-application HTTP/1.1
Host: data.holder.com.au
Accept: application/json
x-ACME-v : 7

# Response
HTTP/1.1 400 Bad Request
Content-Type: application/json
{
  "errors": [
    {
      "code": "ACME-APPLY-017",
      "title": "Application Is Missing Product ID",
      "description": "A new loan application was requested but the product ID was not provided",
      "meta": {
         "urn": "urn:au-cds:error:cds-all:GeneralError/Expected"
      }
    }
  ]
}
```

| Error Title      | Error Code            | HTTP Status Category | Description |  
| :--------------- | :-------------------- | :------------------- | :---------- |  
| <a id="error-4xx-expected-error"></a>Expected Error Encountered | <code>urn:au-cds:error:cds-all:<br/>GeneralError/Expected</code> | 4xx</td> | An error code that can be used, when an expected error occurs that is otherwise not covered by a more specific error.<br/><br/>The error description SHOULD be populated with a meaningful error description, without revealing sensitive information.<br/><br/>An application specific error code MAY be provided. The <code>MetaError &raquo; urn</code> MUST be populated with the standard CDR error code. |
| <a id="error-5xx-unexpected-error"></a>Unexpected Error Encountered | <code>urn:au-cds:error:cds-all:<br/>GeneralError/Unexpected</code> | 5xx | An error code that can be used, when an unexpected error occurs.<br/><br/>The error description SHOULD be populated with a meaningful error description, without revealing sensitive information.<br/><br/>An application specific error code MAY be provided. The <code>MetaError &raquo; urn</code> MUST be populated with the standard CDR error code. |
| <a id="error-4503-service-unavailable"></a>Service Unavailable | <code>urn:au-cds:error:cds-all:<br/>Service/Unavailable</code> | 503 (Service Unavailable) | A request is made but the API unavailable as due to an outage.<br/><br/>The error description MAY describe whether the outage is scheduled or unexpected and whether it is fully unavailable or partially unavailable. |

#### 400 Bad Request Errors

> Non-Normative Example

```
# A request to Get Accounts is made however
# the value of is-owned is not a Boolean value
#
# Request
GET https://data.holder.com.au/cds-au/v1/banking/accounts?is-owned=2007-05-01 HTTP/1.1
Host: data.holder.com.au
Accept: application/json

# Response
HTTP/1.1 400 Bad Request
Content-Type: application/json
{
  "errors": [
    {
      "code": "urn:au-cds:error:cds-all:Field/Invalid",
      "title": "Invalid Field",
      "description": "is-owned"
    }
  ]
}
```

| Error Title      | Error Code            | Description |  
| :--------------- | :-------------------- | :---------- |  
| <a id="error-400-field-missing"></a>Missing Required Field | <code>urn:au-cds:error:cds-all:<br/>Field/Missing</code> | The request is missing a mandatory field required for the API. It may be a missing query parameter or missing field in the request payload. This error code can be used, where a more specific validation error is not applicable.<br/><br/>The error description SHOULD be the parameter name of the missing field.<br/><br/>This error code MUST be supported for unauthenticated and authenticated APIs. |
| <a id="error-400-header-missing"></a>Missing Required Header | <code>urn:au-cds:error:cds-all:<br/>Header/Missing</code> | A required HTTP header has not been provided.<br/><br/>The error description SHOULD be the HTTP header name.<br/><br/>This error code SHOULD be supported for unauthenticated and authenticated APIs. |
| <a id="error-400-field-invalid"></a>Invalid Field | <code>urn:au-cds:error:cds-all:<br/>Field/Invalid</code> | Applies when the value of the URL parameter or request body parameter is an invalid type or the value violates the field's constraints as defined by the interface contract.<br/>For example, `is-owned` is a `Boolean` but a `DateString` value is provided.<br/><br/>The error description SHOULD be the parameter name of the invalid field. The error description MAY include further details explaining the valid format.<br/><br/>This error code MUST be supported for unauthenticated and authenticated APIs. |
| <a id="error-400-header-invalid"></a>Invalid Header | <code>urn:au-cds:error:cds-all:<br/>Header/Invalid</code> | Applies when a HTTP Header is provided but the value provided is an invalid type or violates the field type constraints as defined in the Consumer Data Standards.<br/><br/>The error description SHOULD be the HTTP header name. The error description MAY include further details explaining the valid format.<br/><br/>This error code SHOULD be supported for unauthenticated and authenticated APIs. |
| <a id="error-400-field-invalid-date-time"></a>Invalid Date | <code>urn:au-cds:error:cds-all:<br/>Field/InvalidDateTime</code> | An invalid date is provided. For example, a future date value is expected, but a date in past or current date is supplied. Applies to `DateTimeString`, `DateString`, and `TimeString` field types.<br/><br/>The error description SHOULD be the parameter name of the invalid date field. The error description MAY include further details explaining the expected date value.<br/><br/>This error code MUST be supported for unauthenticated and authenticated APIs. |
| <a id="error-400-field-invalid-page-size"></a>Invalid Page Size | <code>urn:au-cds:error:cds-all:<br/>Field/InvalidPageSize</code> | The value provided in the `page-size` pagination field is greater than the maximum allowed by the Consumer Data Standards (`page_size > 1000`).<br/><br/>This error code MUST be supported for unauthenticated and authenticated APIs. |
| <a id="error-400-header-invalid-version"></a>Invalid Version | <code>urn:au-cds:error:cds-all:<br/>Header/InvalidVersion</code> | A request is made for a version that is not a `PositiveInteger`.<br/>For example:<ul><li>`x-min-v`, `x-v` or `x-<HID>-v` are not `Integers` (e.g. `x-min-v=foo`, `x-v=bar`, `x-ACME-v=cheese`)</li><li>`x-min-v`, `x-v` or `x-<HID>-v` are not positive-value integers (they are an `Integer` but `<= 0`)</li></ul><br/>This error code MUST be supported for unauthenticated and authenticated APIs.<br/><br/>If the version header is a `PositiveInteger` but is not a version supported by the Data Holder, the [Unsupported Version code](#error-406-header-unsupported-version) applies. |

#### 403 (Forbidden) Errors

| Error Title      | Error Code            | Description |  
| :--------------- | :-------------------- | :---------- |  
| <a id="error-403-authorisation-adr-status-not-active"></a>ADR Status Is Not Active | <code>urn:au-cds:error:cds-all:<br/>Authorisation/AdrStatusNotActive</code> | The ADR or the ADR's software product is not "active".<br/><br/>The error description SHOULD contain the current status of the ADR software product. |
| <a id="error-403-authorisation-revoked-consent"></a>Consent Is Revoked | <code>urn:au-cds:error:cds-all:<br/>Authorisation/RevokedConsent</code> | The consumer's consent is no longer authorised (for example revoked or expired) and the requested resource will not be provided.<br/><br/>This error code SHOULD be supported for authenticated APIs. |
| <a id="error-403-authorisation-invalid-consent"></a>Consent Is Invalid | <code>urn:au-cds:error:cds-all:<br/>Authorisation/InvalidConsent</code> | The authorised consumer's consent is not associated to the resource requested, is insufficient to execute the resource or is in a status that prevents the resource being executed.<br/><br/>For example, if consent is awaiting authorisation of a secondary account holder.<br/><br/>The error description SHOULD be a description of the status of consent without revealing sensitive information.<br/><br/>This error code SHOULD be supported for authenticated APIs. |

#### 404 (Not Found) Errors

> Non-Normative Examples

```
# A request to a resource endpoint that does not exist
#
# Request
GET https://data.holder.com.au/cds-au/v1/banking/payments/294819e6-7ae0-4e20-900a-6a733fd97854/location HTTP/1.1
Host: data.holder.com.au
Accept: application/json

# Response
HTTP/1.1 404 Not Found
Content-Type: application/json
{
  "errors": [
    {
      "code": "urn:au-cds:error:cds-all:Resource/NotFound",
      "title": "Resource Not Found"
    }
  ]
}

# A request to a resource endpoint that exists in the data standards,
# but is not currently implemented
#
# Request
POST https://data.holder.com.au/cds-au/v1/admin/register/metadata HTTP/1.1
Host: data.holder.com.au
Accept: application/json

# Response
HTTP/1.1 404 Not Found
Content-Type: application/json
{
  "errors": [
    {
      "code": "urn:au-cds:error:cds-all:Resource/NotImplemented",
      "title": "Resource Not Implemented"
    }
  ]
}

#
# A request to a resource that is temporarily unavailable
#
# Request
GET https://data.holder.com.au/cds-au/v1/banking/accounts/b3f0c9d0/transactions/52e443ae13c5 HTTP/1.1
Host: data.holder.com.au
Accept: application/json

# Response
HTTP/1.1 404 Not Found
Content-Type: application/json
{
  "errors": [
    {
      "code": "urn:au-cds:error:cds-all:Resource/Unavailable",
      "title": "Unavailable Resource",
      "description": "52e443ae13c5"
    }
  ]
}

#
# A request to a get a banking account that is invalid
#
# Request
GET https://data.holder.com.au/cds-au/v1/banking/accounts/invalid-id/ HTTP/1.1
Host: data.holder.com.au
Accept: application/json

# Response
HTTP/1.1 404 Not Found
Content-Type: application/json
{
  "errors": [
    {
      "code": "urn:au-cds:error:cds-banking:Authorisation/InvalidBankingAccount",
      "title": "Invalid Banking Account",
      "description": "invalid-id"
    }
  ]
}

```

| Error Title      | Error Code            | Description |  
| :--------------- | :-------------------- | :---------- |  
| <a id="error-404-resource-not-implemented"></a>Resource Not Implemented | <code>urn:au-cds:error:cds-all:<br/>Resource/NotImplemented</code> | The requested resource URL is a valid API endpoint defined by the Consumer Data Standards, but it is not implemented or not currently supported.<br/><br/>This error code SHOULD be supported for unimplemented APIs.|
| <a id="error-404-resource-not-found"></a>Resource Not Found | <code>urn:au-cds:error:cds-all:<br/>Resource/NotFound</code> | The requested resource URL is not an API endpoint defined by the Consumer Data Standards and it is not a URL recognised by the Data Holder or Data Recipient. |
| <a id="error-404-resource-invalid"></a>Invalid Resource | <code>urn:au-cds:error:cds-all:<br/>Resource/Invalid</code> | The requested resource identifier is permanently unavailable. No subsequent request for the resource will be successful. Applies when the resource ID is provided in the URI.<br/><br/>The error description is the resource ID of the resource being requested.<br/><br/>This error code MUST be supported for unauthenticated and authenticated APIs. |
| <a id="error-404-resource-unavailable"></a>Unavailable Resource | <code>urn:au-cds:error:cds-all:<br/>Resource/Unavailable</code> | The requested resource identifier is temporarily unavailable. Subsequent requests for the resource may be successful. Applies when the resource ID is provided in the URI.<br/><br/>The error description is the resource ID of the resource being requested.<br/><br/>This error code MUST be supported for unauthenticated and authenticated APIs. |
| <a id="error-404-authorisation-invalid-banking-account"></a>Invalid Banking Account | <code>urn:au-cds:error:cds-banking:<br/>Authorisation/InvalidBankingAccount</code> | The requested bank account is permanently unavailable. No subsequent request for the account will be successful. Applies when the account ID is provided in the URI.<br/><br/>The error description is the account ID of the resource being requested.<br/><br/>This error code MUST be supported for authenticated APIs. |
| <a id="error-404-authorisation-unavailable-banking-account"></a>Unavailable Banking Account | <code>urn:au-cds:error:cds-banking:<br/>Authorisation/UnavailableBankingAccount</code> | The requested bank account is temporarily unavailable. Subsequent requests for the account may be successful. Applies when the account ID is provided in the URI.<br/><br/>The error description is the account ID of the resource being requested.<br/><br/>This error code MUST be supported for authenticated APIs. |

#### 406 (Not Acceptable) Errors

| Error Title      | Error Code            | Description |  
| :--------------- | :-------------------- | :---------- |  
| <a id="error-406-header-unsupported-version"></a>Unsupported Version | <code>urn:au-cds:error:cds-all:<br/>Header/UnsupportedVersion</code> | A request is made for a version that is lower than the minimum version or greater than maximum version the Data Holder supports for the requested endpoint.<br/><br/>The error description MAY include the minimum and maximum versions the Data Holder supports.<br/><br/>This error code MUST be supported for unauthenticated and authenticated APIs. |

#### 422 (Unprocessable Entity) Errors

> Non-Normative Example

```
#
# A bulk request to a get a banking account that is unavailable
#
# Request
POST https://data.holder.com.au/cds-au/v1/banking/accounts/balances HTTP/1.1
Host: data.holder.com.au
Accept: application/json

{
  "data": {
    "accountIds": [
      "b3f0c9d0-457d-4578-b0cd-52e443ae13c5",
      "b1bccd84-d29a-4233-8e44-be01c74eb85b"
    ]
  },
  "meta": {}
}

# Response
HTTP/1.1 422 Unprocessable Entity
Content-Type: application/json
{
  "errors": [
    {
      "code": "urn:au-cds:error:cds-all:Authorisation/UnavailableBankingAccount",
      "title": "Unavailable Banking Account",
      "description": "b3f0c9d0-457d-4578-b0cd-52e443ae13c5"
    }
  ]
}

```

| Error Title      | Error Code            | Description |  
| :--------------- | :-------------------- | :---------- |  
| <a id="error-422-resource-invalid"></a>Invalid Resource | <code>urn:au-cds:error:cds-all:<br/>Resource/Invalid</code> | The requested resource identifier is permanently unavailable. No subsequent request for the resource will be successful. Applies when the resource ID is provided in the request body.<br/><br/>The error description is the resource ID of the resource being requested.<br/><br/>This error code MUST be supported for authenticated APIs. |
| <a id="error-422-resource-unavailable"></a>Unavailable Resource | <code>urn:au-cds:error:cds-all:<br/>Resource/Unavailable</code> | The requested resource identifier is temporarily unavailable. Subsequent requests for the resource may be successful. Applies when the resource ID is provided in the URI.<br/><br/>The error description is the resource ID of the resource being requested.<br/><br/>This error code MUST be supported for authenticated APIs. |
| <a id="error-422-authorisation-invalid-banking-account"></a>Invalid Banking Account | <code>urn:au-cds:error:cds-banking:<br/>Authorisation/InvalidBankingAccount</code> | The requested bank account is permanently unavailable. No subsequent request for the account will be successful. Applies when the account ID is provided in the URI.<br/><br/>The error description is the account ID of the resource being requested.<br/><br/>This error code MUST be supported for authenticated APIs. |
| <a id="error-422-authorisation-unavailable-banking-account"></a>Unavailable Banking Account | <code>urn:au-cds:error:cds-banking:<br/>Authorisation/UnavailableBankingAccount</code> | The requested bank account is temporarily unavailable. Subsequent requests for the account may be successful. Applies when the account ID is provided in the URI.<br/><br/>The error description is the account ID of the resource being requested.<br/><br/>This error code MUST be supported for authenticated APIs. |
| <a id="error-422-authorisation-invalid-arrangement"></a>Invalid Consent Arrangement | <code>urn:au-cds:error:cds-all:<br/>Authorisation/InvalidArrangement</code> | The arrangement being executed has previously been revoked and no further action will be taken.<br/><br/>The error description is the CDR Arrangement ID of the being executed.<br/><br/>This error code MUST be supported for the Data Recipient and Data Holder CDR Arrangement Revocation endpoint. |
| <a id="error-422-field-invalid-page"></a>Invalid Page | <code>urn:au-cds:error:cds-all:<br/>Field/InvalidPage</code> | The page being requested it out of of range. For example, the valid pagination range is 5 pages and the client requested `page=10`).<br/><br/>The error description SHOULD be the maximum number of pages that are available.<br/><br/>This error code MUST be supported for unauthenticated and authenticated APIs. |

#### CDR Register Errors
The following error codes apply to responses from the CDR Register. Data Recipient and Data Holder clients requesting data from the CDR Register may expect the following standard CDR error codes to be encountered:

| Error Title            | Error Code                           | HTTP Status Category | Description |  
| :--------------------- | :----------------------------------- | :------------------- | :---------- |  
| <a id="register-error-404-field-invalid-brand"></a>Invalid Brand | <code>urn:au-cds:error:cds-register:<br/>Field/InvalidBrand</code> | 404 (Not Found) | The brand provided to get the Data Recipient software statement assertion is invalid. Applies to the `dataRecipientBrandId` path parameter for CDR Register APIs. |
| <a id="register-error-400-field-invalid-industry"></a>Invalid Industry | <code>urn:au-cds:error:cds-register:<br/>Field/InvalidIndustry</code> | 404 (Not Found) | The industry requested in the path to get Data Recipient or Data Holder metadata is invalid / does not exist and cannot be found. Applies to the `industry` path parameter for CDR Register APIs. |
| <a id="register-error-403-field-invalid-software-product"></a>Invalid Software Product | <code>urn:au-cds:error:cds-register:<br/>Field/InvalidSoftwareProduct</code> | 404 (Not Found) | The software product requested to get the Data Recipient software statement assertion is invalid or cannot be found. Applies to the `softwareProductId` path parameter. |

### Processing Errors

When a server encounters multiple problems for a single request, the most generally applicable HTTP error code **SHOULD** be used in the response. For instance, `400 Bad Request` might be appropriate for multiple 4xx errors or `500 Internal Server Error` might be appropriate for multiple 5xx errors.

A server **MAY** choose to stop processing as soon as a problem is encountered, or it **MAY** continue processing and encounter multiple problems. For instance, a server might process multiple attributes and then return multiple validation problems in a single response.

### Extensibility And Application Specific Errors

Error handling has been designed with extensibility in mind. Where an application supports error codes specific to that implementation, it is intended that implementations can extend the standard CDR error codes with application-specific error responses whilst maintaining interoperability for clients.

> Non-Normative Example

```
# Application-specific error code extends a standard CDR error code with
# details specific to the Data Holder
{
  "errors": [
    {
      "code": "acme-bank:JointAccountElectionRemoved",
      "title": "Joint Account Consent Election Is Removed",
      "description": "Description of the specific error encountered",
      "meta": {
        "urn": "urn:au-cds:error:cds-banking:Authorisation/UnavailableBankingAccount"
      }
    }
  ]
}
```

To assist clients, the Data Recipient or Data Holder **MUST** provide the application-specific error code in the <code>ResponseErrorListV2 &raquo; code</code> and the standard CDR error code in the <code>ResponseErrorListV2 &raquo; MetaError &raquo; urn</code> field denoting the standard error code the implementation extends.

### Transition arrangements

> Non-Normative Examples

```
# Application-specific error code before transition

{ "errors": [
  {
    "code": "old error code",
    "title": "error message",
    "description": "Description of the specific error encountered"
  }
] }

# Application-specific error code during transition

{ "errors": [
  {
    "code": "old error code",
    "title": "error message",
    "description": "Description of the specific error encountered",
    "meta": {
      "urn": "urn:au-cds:error:cdr-all:Header/UnsupportedVersion"
    }
  }
] }

# Standardised-error code after retirement of application-specific error code

{ "errors": [
  {
    "code": "urn:au-cds:error:cdr-all:Header/UnsupportedVersion",    
    "title": "Unsupported Version",
    "description": "'x-v' must be greater than or equal to '2'"
  }
] }
```

If Data Recipients or Data Holders support custom error codes prior to February 1st 2022, the following transition arrangements apply:

* **Effective as soon as standardised error codes are supported by the Data Recipient or Data Holder:**  
    * If the Data Recipient or Data Holder supports application-specific error codes they **MUST** publish a mapping of those codes to the standard CDR error codes in a developer friendly way that is discoverable and freely available.
    * Data Recipients and Data Holders **MAY** publish this mapping any time prior to February 1st 2022.

* **Effective from February 1st 2022:** Data Holders and Data Recipients **MUST** support standardised error codes by this date and continue to support any custom error codes.
  * Standardised error codes **MUST** be provided in the <code>ResponseErrorListV2 &raquo; MetaError &raquo; urn</code> field
  * If applicable, application specific error codes **MUST** be provided in the <code>ResponseErrorListV2 &raquo; code</code>
  * Data Recipients and Data Holders **MAY** phase their transition to support standardised error codes such as by endpoint or per error code if preferred prior to this date.

* **Effective from November 1st 2022:** Data Holders and Data Recipients **MAY** deprecate any custom error codes
  * Standardised error codes **MAY** be provided in the <code>ResponseErrorListV2 &raquo; code</code> field if no application-specific error code applies
  * Application-specific error codes **MAY** be provided in the <code>ResponseErrorListV2 &raquo; code</code>

<!--</div>-->
