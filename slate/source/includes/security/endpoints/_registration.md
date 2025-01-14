### Dynamic Client Registration endpoints

Data Holders MUST expose the following endpoints in accordance with **[[DCR]](#nref-DCR)**.

For more details of these endpoints see the [DCR APIs](#dcr-apis) section.

For additional statements on the operation of these endpoint during client registration see the [Client Registration](#client-registration) section.



| HTTP Verb | Auth Server Support | MTLS | HoK | Grant Type | Access Token Scope
|--------------|-------|:-------:|:-------:|------|-----------------------------------------------------------------------------
|**POST /register**| Required | <i class="icon-check"></i> | | N/A | None
|**GET /register/{clientID}**| Required | <i class="icon-check"></i> | <i class="icon-check"></i> | Client Credentials | `cdr:registration`
|**PUT /register/{clientID}**| Required | <i class="icon-check"></i> | <i class="icon-check"></i> | Client Credentials | `cdr:registration`
|**DELETE /register/{clientID}**| Optional | <i class="icon-check"></i> | <i class="icon-check"></i> | Client Credentials | `cdr:registration`

Additional statements regarding these endpoints:

* During registration management requests, Data Holders MUST validate that the scope of access tokens provided includes `cdr:registration`.
* Registration requests and responses must conform to the specification in the [DCR APIs](#dcr-apis) section.
* Any fields the Data Holder does not support MUST be ignored without error.
* Registrations MUST only be updated via a PUT operation on the registration endpoint.
* POST and PUT operations MUST accept the SSA payload.
* Update (PUT) operations are to be used for one of two scenarios:
  1. The client has updated their registration details on the CDR Register and updates this information to the data holder brands.
  2. A new version of the SSA has been released and the client updates this information to the data holder brands.
