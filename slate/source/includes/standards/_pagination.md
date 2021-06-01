## Pagination

Each API end point that can return multiple records will stipulate whether pagination is supported for the end point or not. For end points that will return less than a reasonably sized page of results in the majority of circumstances support for paging may not be included.

Note that the use of paging for an end point does not require or preclude the use of filtering query parameters. It is expected that filtering and paging will be applied independently of each other.

### Query Parameters

The consumer will stipulate pagination requirements on the request using query parameters. When paging is supported the consumer MAY provide the following query parameters:

* **page** – the page number being requested (with the first page being 1)
* **page-size** – the number of records to return in each page

If the query parameters are not provided the following defaults will be assumed:

* **page** – a default of 1 (the first page) will be assumed
* **page-size** – a default of 25 will be assumed

### Response Fields

In addition to the data requested a holder MUST provide the following additional information in the response payload:

* <a name="pagination_links"></a>In the links object the following fields are to be provided:
    * **first** - A URI to request the first page. Mandatory if this response is not the first page.
    * **last** -  A URI to request the last page. Mandatory if this response is not the last page.
    * **prev** - A URI to the previous page. Mandatory if this response is not the first page.
    * **next** - A URI to the next page. Mandatory if this response is not the last page.
* In the `meta` object the following fields are to be provided:
    * **totalRecords** - The total number of records in the set. This field MUST be present.
    * **totalPages** - The total number of pages in the set. This field MUST be present. If **totalRecords** is 0 **totalPages** MUST be 0.

For each of these fields the page size specified in the request should be assumed when calculating
values.

### Additional Pagination Rules

* Holders are not expected to implement pagination with transaction isolation. The underlying data-set may change between two subsequent requests. This may result in situations where the same transaction is returned on more than one page.
* A maximum page size of `1000` records is assumed for all end points (unless otherwise stipulated in the end point definition). If a page size greater than this maximum is requested then an [Invalid Page Size](#error-400-field-invalid-page-size) error SHOULD be returned.

### Cursor Support

For performance reasons data holders may wish to support other pagination patterns such as cursors or continuation tokens.  While the standard does not explicitly support these additional mechanisms it is considered allowable to implement these patterns and expose them via the [pagination links](#pagination_links).

In this scenario the URIs included in the links for other pages may not be compliant with the standard and may, instead, include other query parameters that support another pagination pattern. It is expected that all other pagination requirements such as link fields and meta fields will still be supported if other patterns are implemented.

To allow for a more performant implementation data consumers are encouraged to utilise [pagination links](#pagination_links) wherever possible and only use constructed URIs for the first page or if random access to a specific set of records is required.
