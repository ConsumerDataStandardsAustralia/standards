## Pagination

Each API end point that can return multiple records will stipulate whether pagination is supported for the end point or not. For end points that will return less than a reasonably sized page of results in the majority of circumstances support for paging may not be included.

Note that the use of paging for an end point does not require or preclude the use of filtering query parameters. It is expected that filtering and paging will be applied independently of each other.

### Query Parameters

The consumer will stipulate pagination requirements on the request using query parameters. When paging is supported the consumer MAY provide the following query parameters:

* **page** – the page number being requested (with the first page being 1)
* **pageSize** – the number of records to return in each page

If the query parameters are not provided the following defaults will be assumed:

* **page** – a default of 1 (the first page) will be assumed
* **pageSize** – a default of 25 will be assumed

### Response Fields

In addition to the data requested a provider MUST provide the following additional information in the response payload:

* In the links object the following fields are to be provided:
    * **first** - A URI to request the first page. This field MUST be present.
    * **last** -  A URI to request the last page. This field MUST be present unless there is only one page in the set.
    * **prev** - A URI to the previous page. This field MUST be present unless the current page is the first page.
    * **next** - A URI to the next page. This field MUST be present unless the current page is the final page.
* In the `meta` object the following fields are to be provided:
    * **totalRecords** - The total number of records in the set. This field MUST be present.
    * **totalPages** - The total number of pages in the set. This field MUST be present.

For each of these fields the page size specified in the request should be assumed when calculating
values.

### Additional Pagination Rules

* Providers are not expected to implement pagination with transaction isolation. The underlying data-set may change between two subsequent requests. This may result in situations where the same transaction is returned on more than one page.
* A maximum page size of `1000` records is assumed for all end points (unless otherwise stipulated in the end point definition). If a page size greater than this maximum is requested then a HTTP status of `422 Unprocessable Entity` SHOULD be returned.
