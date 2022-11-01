# Known Issues

There are certain aspects of the standards that are actively under review. These known issues are articulated in the following table.

Issue | Description
:---- | :----------
Register APIs use local version of common definitions | The Register APIs use a locally defined version of common schema definitions such as `ResponseErrorList` for error responses. These need to be updated to reference common swagger specifications inherited by the Common Swagger spec.
Register APIs use different field type definitions | The Register APIs define their own field types that are not consistent with the [Common Field Types](#common-field-types) defined in the data standards. As part of porting the Register standards across to the primary data standards, the field types need to be re-aligned to use the common field type definitions. For example, `string (data-time)` should be changed to `DataTime` and `integer(int32)` should be changed to `PositiveInteger`.
DCR and Register Swagger naming conventions | The DCR and Register naming conventions are not consistent with the broader data standards. Field names should be standardised to camelCase and snake_case inline with the data standards


## Future improvements


The following improvements will be incorporated into future versions of the Standards

### Standardise Register API Error Codes

Future versions of the CDR Register API error codes are to be aligned to the [Standards high-level error codes](#error-codes) as follows:

API | Updated Error Codes | New Error Codes
-- | -- | --
[Get Data Holder Brands](#get-data-holder-brands) | 400: <br />Missing Required Header / Invalid Header / Invalid Version / Invalid Field | 404: <br />Invalid Industry
[Get Software Statement Assertion (SSA)](#get-software-statement-assertion-ssa) | 400: <br />Missing Required Header / Invalid Header / Invalid Version / Invalid Field <br /><br />403: <br />The ADR or the ADR's Software Product is not active <br /><br />404: <br />Invalid Industry / Invalid Brand Id / Invalid Software Product Id |
[Get Data Holder Statuses](#get-data-holder-statuses) | 400: <br />Missing Required Header / Invalid Header / Invalid Version / Invalid Field | 404: <br />Invalid Industry
[Get Software Products Statuses](#get-software-products-statuses) | 400: <br />Missing Required Header / Invalid Header / Invalid Version / Invalid Field | 404: <br />Invalid Industry
[Get Data Recipients Statuses](#get-data-recipients-statuses) | 400: <br />Missing Required Header / Invalid Header / Invalid Version / Invalid Field | 404: <br />Invalid Industry
[Get Data Recipients](#get-data-recipients) | 400: <br />Missing Required Header / Invalid Header / Invalid Version / Invalid Field | 404: <br />Invalid Industry


