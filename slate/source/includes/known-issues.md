# Known Issues

There are certain aspects of the standards that are actively under review. These known issues are articulated in the following table.

Issue | Description
:---- | :----------
Register APIs use local version of common definitions | The Register APIs use a locally defined version of common schema definitions such as `ResponseErrorList` for error responses. These need to be updated to reference common swagger specifications inherited by the Common Swagger spec.
Register APIs don't specify standardised CDR error codes | The Register APIs need to be changed to support common CDR error codes to be consistent with the rest of the data standards.
Register APIs use different field type definitions | The Register APIs define their own field types that are not consistent with the [Common Field Types](#common-field-types) defined in the data standards. As part of porting the Register standards across to the primary data standards, the field types need to be re-aligned to use the common field type definitions. For example, `string (data-time)` should be changed to `DataTime` and `integer(int32)` should be changed to `PositiveInteger`.
DCR and Register Swagger naming conventions | The DCR and Register naming conventions are not consistent with the broader data standards. Field names should be standardised to camelCase and snake_case inline with the data standards
