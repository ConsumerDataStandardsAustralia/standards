# Known Issues

There are certain aspects of the standards that are actively under review. These known issues are articulated in the following table.

```diff
Removed three known issues related to Register endpoint specfications that are resolved
```

Issue | Description
:---- | :----------
None | N/A


## Future improvements


The following improvements will be incorporated into future versions of the Standards

### Standardise Register API Error Codes

Future versions of the CDR Register API error codes are to be aligned to the [Standards high-level error codes](#error-codes) as follows:

API | Updated Error Codes | New Error Codes
-- | -- | --
[Get Data Holder Brands](#cdr-participant-discovery-api_get-data-holder-brands) | 400: <br />Missing Required Header / Invalid Header / Invalid Version / Invalid Field | 404: <br />Invalid Industry
[Get Software Statement Assertion (SSA)](#cdr-participant-discovery-api_get-software-statement-assertion-ssa) | 400: <br />Missing Required Header / Invalid Header / Invalid Version / Invalid Field <br /><br />403: <br />The ADR or the ADR's Software Product is not active <br /><br />404: <br />Invalid Industry / Invalid Brand Id / Invalid Software Product Id |
[Get Data Holder Statuses](#cdr-participant-discovery-api_get-data-holder-statuses) | 400: <br />Missing Required Header / Invalid Header / Invalid Version / Invalid Field | 404: <br />Invalid Industry
[Get Software Products Statuses](#cdr-participant-discovery-api_get-software-products-statuses) | 400: <br />Missing Required Header / Invalid Header / Invalid Version / Invalid Field | 404: <br />Invalid Industry
[Get Data Recipients Statuses](#cdr-participant-discovery-api_get-data-recipients-statuses) | 400: <br />Missing Required Header / Invalid Header / Invalid Version / Invalid Field | 404: <br />Invalid Industry
[Get Data Recipients](#cdr-participant-discovery-api_get-data-recipients) | 400: <br />Missing Required Header / Invalid Header / Invalid Version / Invalid Field | 404: <br />Invalid Industry
