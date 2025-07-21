# Known Issues

```diff
- Removed Non-Bank Lending Known Issues item regarding prior updates to the NBL Candidate
```

There are certain aspects of the standards that are actively under review. These known issues are articulated in the following table.

Issue | Description
:---- | :----------
Inconsistencies in Telco Candidate Standards | <ul><li>The Get Telco Products endpoint schema references an array of _plans_, which should be _products_.</li><li>Transaction endpoints reference a _serviceIds_ (plural) property described as an 'Array list', but with a Type as 'string'.</li><li>Redundant _service_ object in Telco Usage list endpoints.</li><li>Redundant _balance_ object in Telco Balance list endpoints.</li><li>Telco Usage list endpoints should have pagination links.</li><li>Some mandatory fields are not specified with valid 'required' statements, and some are incorrectly specified with default values.</li></ul>


## Future improvements

The following improvements will be incorporated into future versions of the Standards

### Standardise Register API Error Codes

Future versions of the CDR Register API error codes are to be aligned to the [Standards high-level error codes](#error-codes) as follows:

API | Updated Error Codes | New Error Codes
-- | -- | --
[Get Data Holder Brands](#cdr-register-api_get-data-holder-brands) | 400: <br>Missing Required Header / Invalid Header / Invalid Version / Invalid Field | 404: <br>Invalid Industry
[Get Software Statement Assertion (SSA)](#cdr-register-api_get-software-statement-assertion-ssa) | 400: <br>Missing Required Header / Invalid Header / Invalid Version / Invalid Field <br><br>403: <br>The ADR or the ADR's Software Product is not active <br><br>404: <br>Invalid Industry / Invalid Brand Id / Invalid Software Product Id |
[Get Data Holder Statuses](#cdr-register-api_get-data-holder-statuses) | 400: <br>Missing Required Header / Invalid Header / Invalid Version / Invalid Field | 404: <br>Invalid Industry
[Get Software Products Statuses](#cdr-register-api_get-software-products-statuses) | 400: <br>Missing Required Header / Invalid Header / Invalid Version / Invalid Field | 404: <br>Invalid Industry
[Get Data Recipients Statuses](#cdr-register-api_get-data-recipients-statuses) | 400: <br>Missing Required Header / Invalid Header / Invalid Version / Invalid Field | 404: <br>Invalid Industry
[Get Data Recipients](#cdr-register-api_get-data-recipients) | 400: <br>Missing Required Header / Invalid Header / Invalid Version / Invalid Field | 404: <br>Invalid Industry
