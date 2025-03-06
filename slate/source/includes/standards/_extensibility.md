## Extensibility

The Consumer Data Right standards will not cover all possible data sets or APIs that participants may wish to expose. Participants may also wish to innovate on top of the API standards by offering additional data to meet specific market opportunities. It is desirable that the standards not only allow for this to occur but actively encourage it with specific additions to the standards to enable such extension.

At the same time, it is important that a participant seeking to provide extensions does not hinder a data consumer that is only built for the published standards.

To accommodate these concerns the standards incorporate the following considerations specifically related to extension by data holders.


The three types of extension that the standards address are:

1. Data holder offering entirely new API categories that are not covered by the API Standards.
2. Data holder offering additional endpoints to an API category that is already covered by the standards.
3. Data holder offering additional fields to the response payloads for an endpoint defined in the standards.

###Holder Identifier

> For example, the prefixes for the four major Banks included in the first phases of implementation would be:
<ul>
<li>`CBA` – Commonwealth Bank</li>
<li>`WBC` – Westpac Banking Corporation</li>
<li>`ANZ` – ANZ Banking Group</li>
<li>`NAB` – National Australia Bank</li>
</ul>

Data holders seeking to extend the standards **MUST** nominate a prefix to identify all extensions. Extended fields and endpoints and would use this prefix consistently. This prefix would be, by preference, the ASX symbol for the holder. Care should be taken not to use a prefix already adopted by another holder in the regime.

In these standards, where a Holder Identifier would be included, the term `<HID>` will be used.

###New API Categories

When extending by adding new API categories a holder **MUST** add these to the overall URI structure by substituting the industry element with the Holder (Provider) ID.

For instance, the standard URI base path is structured as:  
`https:// <holder-path> / cds-au / <version> / <industry> / <resource>`

For the extension API categories for a specific holder they would be structured as:  
`https:// <holder-path> / cds-au / <version> / <HID> / <resource>`

The endpoints defined under this structure, including the payloads of these endpoints do not need to be prefixed in any way. The fact that they are underneath the holder section implies that they are additional to the standard.


Note that:

* This mechanism **MUST NOT** be used to create modified duplicates of the endpoints defined in the API Standards
* The endpoints in this area **MUST** comply with the standard's conventions and principles including naming conventions and data types.

###New endpoints In Existing API Categories

When creating new endpoints that are in parallel to existing API categories in the standard the Holder Identifier **MUST** be used to prefix the highest URI element where divergence occurs.

For example, assume an existing balance endpoint is defined as follows:  
`<base-path>/accounts/{account ID}/transactions`

and the holder wishes to add an endpoint that summarises balance movement for a specific time period then they may define the endpoint as:  
`<base-path>/account/{account ID}/<HID>-balance-movement`


Note that:

* The prefix is defined as the Holder Identifier followed by a hyphen.
* As the entire endpoint is new, the request and payload fields do not need to be prefixed in any way.
* Care should be taken to ensure there is no collision with an endpoint defined in the standards by specifying an extension at the same level as a variable URI element (such as at the same level of the {account ID} in the example above).
* If an endpoint has multiple levels in the resource path only the highest point where divergence with the standard occurs needs to be prefixed.
* The new endpoint **MUST** comply with standard's conventions and principles including naming conventions and data types.

###Additional Fields In An Existing Response Payload

When adding a new field in an existing payload the field can be added to the JSON by prefixing the string `<HID>-`.

If an object is being added as an extension only the highest level object name needs to be prefixed. Any fields inside the extended object can be named normally.


Note that:

* Existing fields **MUST NOT** be modified in any way. This includes adding new enumeration values to enum type fields.
* A mandatory field **MUST NOT** be made optional as the result of an extension.
* Request payloads can also be extended but the resulting endpoint should still execute successfully if the extension field is not present (by implication, extension fields in request payloads **MUST** be optional).
* New query parameters **MAY** be added along the same lines as a new field in a request payload (i.e. prefixed, non-mandatory and no side effects if not present).
* New headers **MAY** be added along the same lines as a new field in a request payload with the exception that the new header should be prefixed `x-<HID>-`.
* New fields **MUST** comply with the naming conventions and data type standards used.

###Additional Query Parameters

When adding support for a new query parameter to an existing endpoint that a data consumer is expected to supply, the new parameter should be prefixed by the string `<HID>-` to avoid potential collision with extension by another data holder.

###Extension Versioning

As described previously in the [versioning section](#versioning) the standard provides for multiple versions of each API endpoint. This implies the need for extensions to also be versioned.

An optional header <i>x-&lt;HID&gt;-v</i> will be supported for all endpoints that can be used by the data consumer to request a specific version of extension fields to include in the response. See the section on [HTTP Headers](#http-headers) for more information on the use of this header.
