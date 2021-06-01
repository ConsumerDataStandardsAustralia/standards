## Payload Conventions

This section of the standard outlines the request and response payload structures for all API end points as well as the naming conventions for fields.

### Request Payload Structure
>A sample request would be structured as follows:

```
{
  “data”: {
    ...
  },
  “meta”: {
    ...
  }
}
```


Each API request payload MUST have a JSON object at the root level known as the **root object**. This object MUST contain a `data` object to hold the primary data for the request.

The root object will contain a `meta` object if, and only if, it is specifically REQUIRED by the end point. The meta object is used to provide additional information such as second factor authorisation data, traffic management, pagination counts or other purposes that are complementary to the workings of the API.

The definition of the contents for the `data` object and `meta` object will be defined separately for each end point.

### Response Payload Structure
> A sample successful response:

```
{
  “data”: {
    ...
  },
  “links”: {
    “self”: “...”
  },
  “meta”: {
    ...
  }
}
```

>A sample unsuccessful response:

```
{
  “errors”: [
    {
      “code”: “...”,
      “title”: “...”,
      “detail”: “...”
    }, {
      “code”: “...”,
      “title”: “...”,
      “detail”: “...”,
      “meta”: {
        ...
      }
    }
  ]
}
```

Each API request payload MUST have a JSON object at the root level known as the **root object**.

The contents of the root object are as follows:

* If the response is successful (200 OK) the root object:
    * MUST contain a `data` object
    * MUST contain a `links` object
    * MAY contain a `meta` object if REQUIRED by the definition of the specific end point
* If the response is unsuccessful (not 200 OK) the root object:
    * MAY contain an `errors` object (as per the specific end point definition)

The definition of the contents for the `data` object and `meta` object will be defined separately for each end point.

The `links` object will contain links to related API end points. This will include links to support pagination.

The links object MUST contain a field named `self` that will have the fully qualified URI to the current request as a value.

The `errors` object is defined in the [Error Codes](#error_payload) section.

### Field Naming Conventions

#### Valid Characters In Field Names

All field names defined in either a request or response payload MUST be treated as case sensitive by clients and servers, and they MUST meet all of the following conditions:

* Member names MUST contain at least one character.
* Member names MUST contain only the allowed characters listed below:
    * U+0061 to U+007A, **a-z**
    * U+0041 to U+005A, **A-Z**
    * U+0030 to U+0039, **0-9**
* Additionally, the following characters are allowed in field names, except as the first or last character:
    * U+002D HYPHEN-MINUS, '**-**'
    * U+005F LOW LINE, '**_**'
    * U+0024 DOLLAR SIGN, '**$**'

Any other character MUST NOT be used in field names.

#### Field Naming Style

Field names MUST be meaningful names with defined semantics.

Fields representing the same data in different payloads or different parts of a payload MUST have
the same name.

Array types SHOULD have plural field names. All other field names SHOULD be singular.

Field names MUST be defined using camel case with the following clarifications:

* If a field name is a single acronym it SHOULD be lowercase
* If a field name contains an acronym along with other words it MAY be uppercase
* The first character in a field name SHOULD be lower case unless it is part of an acronym

Fields MUST NOT be named using reserved javascript tokens.

#### Maps
For JSON maps (i.e. key/value pairs) any Unicode character MAY be used as a field name and stylistic requirements do not apply.

### Field Property Conventions

#### Field Data Types

Each field defined for the payloads of an end point MUST have an assigned data type.

The list of valid data types are set out in the [common field types](#common-field-types) section. If a custom data type is required for a field then the field SHOULD be classified as a string with a clear description of how the property value is to be interpreted or defined.

#### Mandatory/Optional Fields

Each field defined for the payloads of an end point MUST have an assigned status of mandatory, optional or conditional.

Mandatory fields MUST be present and have a non-null value in a request or response payload for the payload to be considered valid.

Optional fields MAY be present but this is not guaranteed. It is also valid for these fields to be present but have a null value.  Note that optional fields indicate that data may sometimes not be held by a Data Holder and this is an expected scenario.   

Conditional fields MUST have an associated conditional statement. If the conditional statement is true in a specific request or response the field is considered mandatory. If the conditional statement is false then the field is considered optional.

<aside class="notice">
Note that optional fields are not considered optionally implementable by a Data Holder.

For instance, if a Data Holder holds data in digital form for a Customer that is represented in a payload then it is expected that this data will be shared when authorised by the Customer.  For payloads unrelated to Customers, such as product reference data, there is more discretion for the Data Holder but other drivers, such as complementary regulation or the requirement to align to other channels, should be taken into consideration.
</aside>

#### Empty/Null Fields

An empty field (ie. a field that is not present in a payload) will be considered equivalent with a field that is present with a `null` value.

An empty string (`“”`) is not considered to be equivalent to `null`.

A Boolean value of false is not considered to be equivalent to `null`. Optional Boolean fields, by implication, have three possible values: true, false and indeterminate (ie. `null`).

### Object conventions

> Sample union object structure:

```
“data”: {
	[
		{
			“shapeUType”: “circle”,
			“circle”: {
			}
		},
		{
			“shapeUType”: “square”,
			“square”: {
			}
		}
	]
}
```

A specific convention will apply to union objects.

In the standards a union object is used in a situation where a set of data can be represented with different sets of fields depending on the context.  To maintain strong typing of the fields one of a series of known object structures will be used.  An example where this technique is used in the standard is in the definition of account balances where balance information can be represented differently, but unambiguously, for different account types.

For union objects an additional field, with a known suffix, is used to identify the object type that has been provided specifically.

As the name of this field is constant it can be used to perform an indirect lookup on the object type that has actually been provided removing the need to scan for which object is present.

A field of this type will always be specified with the suffix `UType` meaning Union Type.

### Array Conventions

> Samples for providing array values:

```
## Many-values:
"middleNames": ["Geoff", "John"],
"errors": [
    {
      "code": "...",
      "title": "...",
      "detail": "..."
    }, {
      "code": "...",
      "title": "...",
      "detail": "..."
    }
]

## Single-value:
"middleNames": ["Geoff"],
"errors": [
    {
      "code": "...",
      "title": "...",
      "detail": "..."
    }
]

## Empty array:
"middleNames": [ ],
"errors": [ ]

```

Unless otherwise stated within the data standards, arrays are explicitly expressed in response payloads.

#### Mandatory fields

In objects where an array field is defined as having 0..n values, the array field must be explicitly expressed as an array in the payload, even if it only contains one item or is empty.

This applies equally for object arrays. Where a field is defined as an array value, the response should be:
* an array of objects,
* an array of values, or
* an empty array (``[]``).

An empty array is the representation for an array equivalent to an empty string.

#### Optional fields
If the field is optional a ``null`` value or omission of the field in the response is accepted.

<h4 id="payload-conventions-normative-references">Normative references</h4>
The only exception to this, unless explicitly stated, is normative standards. The requirements for expressing arrays within those normative standards apply per the normative references.
