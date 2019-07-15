## Versioning

The standards have adopted a two level versioning strategy.  The high level standards (including principles, Uniform Resource Identifier structure, payload naming conventions, etc) be versioned and each API end point will have an additional version specific to that end point.

###Documentation Versioning

> Sample versioning of the standards documentation is as follows:
`1.12.2 - meaning major version 1, minor version 12 and bugfix version 2 `

The standards documentation will be versioned using three version parts `<major>.<minor>.<bug fix>`.  This version will be used to describe updates in the [Change Log](#change-log).

Each of the three components will be independently incrementing integers and are described as follows:

* **major**: Major version of the standards.  Reserved for increment only when a set of changes are applied that are large enough to make co-existence in the same implementation environment with previous versions untenable.  This would include major changes to the information security profile, major changes to the high level standards or a change in basic protocols.
* **minor**: Significant changes to the standards.  This would include changes that require approval by the Chair of the Data Standards Body such as new end points and new versions of existing end points.
* **bug fix**: Minor documentation changes that clarify or correct the standards but do not meaningfully alter the standards.


###Uniform Resource Identifier (URI) Versioning

> The base URI structure containing the version for this standard is:  
`http://<holder path>/cds-au/v<major version>/<resource>`

The high level standard will be versioned as described above.  The major component of this version will be embedded in the [URI Structure](#uri-structure) for the APIs.  This allows for a data holder to support multiple major versions of the standards in production even if the significant breaking changes occur between major versions.

###End Point Versioning
Each end point will have multiple versions independent of other end points.  A specific end point version will be requested by a client using a HTTP header. This header will be supported by all end points under the API standards.  See the section on [HTTP Headers](#http-headers) for more information on how versions are requested and supplied under the standards.
