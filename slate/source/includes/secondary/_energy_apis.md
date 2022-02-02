
### AEMO Endpoints

AEMO will expose the following end points, to retailers only, to service Shared Responsibility Data Requests:

* **Get Service Points**: Obtain high level details for a list of service points
* **Get Service Point Detail**: Obtain the detail for a specific service point
* **Get Usage For Service Point**: Obtain a list of electricity usage data from a particular service point
* **Get Usage For Specific Service Points**: Obtain the electricity usage data for a specific set of service points
* **Get DER For Service Point**: Obtain a list of DER data for a particular service point
* **Get DER For Specific Service Points**: Obtain DER data for a specific set of service points

The endpoints above MUST be implemented by AEMO exactly as they would be by Data Holders designated for the energy sector unless explicitly indicated otherwise in the following sections.

#### Secondary Base Path

The term `secondary` will be added to the URI path for these the AEMO versions of the
endpoints to create a clear separation between the secondary data holder version of the
endpoints and the primary data holder version of the endpoints.

For instance, the primary endpoint:
`GET <base>/energy/electricity/servicepoints`
would become the secondary endpoint:
`GET <base>/secondary/energy/electricity/servicepoints`

#### Endpoint Variations

The following variations to the endpoints published by AEMO from the energy sector endpoints apply:

* The `x-fapi-auth-date` header MUST NOT be passed to AEMO and AEMO MUST NOT require this header
* The `x-fapi-customer-ip-address` header MUST NOT be passed to AEMO and AEMO MUST NOT require this header
* The `x-cds-client-headers` header MUST NOT be passed to AEMO and AEMO MUST NOT require this header
* A new header named `x-cds-arrangement` must be passed to AEMO for every invocation. This header should contain the arrangement ID for the consent that the request is being made under and will be used for tracing and audit purposes. This field MUST be populated but AEMO MUST NOT seek to validate the consent associated with the arrangement
* All occurrences of the `servicePointId` field, whether in a request, a response, or as a query parameter should be populated with the equivalent `NationalMeteringId` in plain text
* Fields in the links object for all responses MUST be translated by the Data Holder into
values that are valid for a Data Recipient to be able to call back to the Data Holder
* The *Get Service Points* end point MUST be changed from a GET to a POST and will have the same request payload as the *Get Usage For Specific Service Points* endpoint

#### Additional Requirements

The following statements also apply to the endpoints published by AEMO:

* General headers should be provided as if the request were coming from the primary Data Holder and not propagated from the call made by the Data Recipient
* The `x-fapi-interaction-id` header must be propagated from the Data Recipient call to AEMO to allow for end to end tracing. If not supplied by the Data Recipient, the primary Data Holder MUST create a unique value for the `x-fapi-interaction-id` header before calling AEMO
* Endpoints that require knowledge of the NMIs that belong to the CDR Consumer have been
excluded from the AEMO endpoint set. This includes *Get Bulk Usage* and *Get Bulk DER*.  When a primary Data Holder is required to respond to these endpoints they should call the equivalent
endpoint for specific service points and provide the specific list of NMIs to AEMO
* Some primary Data Holders may interact with AEMO using multiple participant IDs. For these Data Holders it is possible that a single request from a CDR Consumer covering multiple NMIs would require multiple calls to AEMO if the NMIs were associated with multiple participant IDs owned by
the Data Holder. In this scenario the retailer MUST call AEMO multiple times and aggregate the results before responding to the Data Recipient
* If a request for usage data spans a time period when AEMO cannot definitively determine that the primary Data Holder was not in control of the NMI then:
  * AEMO MUST NOT respond with an error
  * AEMO MUST respond with the usage for the period that the primary Data Holder can be definitively determined to be in control of the NMI
  * AEMO MUST NOT share data outside the period of control of the primary Data Holder
* The primary Data Holder MUST ensure that the data requested and then shared with the Data Recipient is not outside the bounds of control of the specific CDR Consumer
