## StandardResponse

<a id="standardresponse"></a>

```json
{
  "links": {
    "self": "http://example.com",
  },
  "meta": {
  }
}

```

### Properties

*allOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[Links - Standard](#linksstandard)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» meta|Empty Object|true|none|none|

<h3 id="tocSlinks">Links - Standard</h3>

<a id="linksstandard"></a>

```json
{
  "self": "http://example.com",
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|self|URIString|true|none|Fully qualified link  to this  API  call.|



## PaginatedResponse

<a id="paginatedresponse"></a>

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
|*anonymous*|[Links - Paginated](#linkspaginated)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» meta|[Meta - Paginated](#metapaginated)|true|none|none|

<h3 id="tocSlinks">Links - Paginated</h3>

<a id="linkspaginated"></a>

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
|self|URIString|true|none|Fully qualified link  to this  API  call.|
|first|URIString|false|none|URI to  the  first  page of this set. Mandatory  if this  response is  not  the  first  page.|
|prev|URIString|false|none|URI to  the  previous page of this set. Mandatory if this response is not the first page.|
|next|URIString|false|none|URI to the next page of this set. Mandatory if this response is not the last page.|
|last|URIString|false|none|URI to the last page of this set.  Mandatory if this response is not the last page.|


<h3 id="tocSmeta">Meta - Paginated</h3>

<a id="metapaginated"></a>

```json
{
  "totalRecords": 6,
  "totalPages": 2
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|totalRecords|NaturalNumber|true|none|The total number of records in the  full set.|
|totalPages|NaturalNumber|true|none|The total number of pages in the  full set.|


<h2 id="tocSerror">Error</h2>

<a id="error"></a>

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
