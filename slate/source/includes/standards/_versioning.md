## Versioning

The standards have adopted a two level versioning strategy.  The high level standards (including principles, URI structure, payload naming conventions, etc) be versioned and each API end point will have an additional version specific to that end point.

###Standard Versioning

> The base URI structure containing the version for this standard is:  
`http://<provider path>/cds-au/v1/<resource>`

The high level standard will be versioned and this version will be in embedded in the [URI Structure](#uri-structure) for the APIs.  This documentation relates specifically to **version 1** of the high level standards.

###End Point Versioning
Each end point will have multiple versions independent of other end points.  A specific end point version will be requested by a client using a HTTP header. This header will be supported by all end points under the API standards.  See the section on [HTTP Headers](#http-headers) for more information on how versions are requested and supplied under the standards.
