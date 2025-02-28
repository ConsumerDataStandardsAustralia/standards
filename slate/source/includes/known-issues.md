# Known Issues

```diff
Added known issue regarding Energy API field default values

Added known issue regarding Telco Candidate API
```

There are certain aspects of the standards that are actively under review. These known issues are articulated in the following table.

Issue | Description
:---- | :----------
Some Energy and Energy SDH field defaults may be unclear | The following fields in the Energy and Energy Secondary DH EnergyDerRecord schema describe defaults that may not be required, or indicate values that may be inaccurate:<ul><li>_inverterDeviceCapacity_: A conditionally mandatory field with a default specified in the description. An actual value of `0` may be being provided by the Data Holder to represent an unknown capacity and the default may not be required. The field type may need to be clarified.</li><li>_manufacturer_: An optional field with "unknown" to be assumed if absent. Live data may indicate that the literal string `Unknown` is being provided in lieu of another value.</li><li>_modelNumber_: An optional field with "unknown" to be assumed if absent. Live data may indicate that the literal string `Unknown` is being provided in lieu of another value.</li><li>_subtype_: An optional field with "unknown" to be assumed if absent. Live data may indicate that the literal string `Unknown_subtype` is being provided in lieu of another value.</li><li>_nominalRatedCapacity_: A mandatory field with a default specified in the description. An actual value of `0` may be being provided by the Data Holder to represent an unknown capacity and the default may not be required. The field type may need to be clarified.</li><li>_nominalStorageCapacity_: A conditionally mandatory field with a default specified in the description. An actual value of `0` may be being provided by the Data Holder to represent an unknown capacity and the default may not be required. The field type may need to be clarified.</li></ul>
Inconsistencies in Telco Candidate Standards | <li>The Get Telco Products endpoint schema references an array of _plans_, which should be _products_.</li><li>Transaction endpoints reference a _serviceIds_ (plural) property described as an 'Array list', but with a Type as 'string'.</li><li>Redundant _service_ object in Telco Usage list endpoints.</li><li>Redundant _balance_ object in Telco Balance list endpoints.</li><li>Telco Usage list endpoints should have pagination links.</li><li>Some mandatory fields are not specified with valid 'required' statements, and some are incorrectly specified with default values.</li></ul>


## Future improvements

The following improvements will be incorporated into future versions of the Standards

### Standardise Register API Error Codes

Future versions of the CDR Register API error codes are to be aligned to the [Standards high-level error codes](#error-codes) as follows:

API | Updated Error Codes | New Error Codes
-- | -- | --
[Get Data Holder Brands](#cdr-participant-discovery-api_get-data-holder-brands) | 400: <br>Missing Required Header / Invalid Header / Invalid Version / Invalid Field | 404: <br>Invalid Industry
[Get Software Statement Assertion (SSA)](#cdr-participant-discovery-api_get-software-statement-assertion-ssa) | 400: <br>Missing Required Header / Invalid Header / Invalid Version / Invalid Field <br><br>403: <br>The ADR or the ADR's Software Product is not active <br><br>404: <br>Invalid Industry / Invalid Brand Id / Invalid Software Product Id |
[Get Data Holder Statuses](#cdr-participant-discovery-api_get-data-holder-statuses) | 400: <br>Missing Required Header / Invalid Header / Invalid Version / Invalid Field | 404: <br>Invalid Industry
[Get Software Products Statuses](#cdr-participant-discovery-api_get-software-products-statuses) | 400: <br>Missing Required Header / Invalid Header / Invalid Version / Invalid Field | 404: <br>Invalid Industry
[Get Data Recipients Statuses](#cdr-participant-discovery-api_get-data-recipients-statuses) | 400: <br>Missing Required Header / Invalid Header / Invalid Version / Invalid Field | 404: <br>Invalid Industry
[Get Data Recipients](#cdr-participant-discovery-api_get-data-recipients) | 400: <br>Missing Required Header / Invalid Header / Invalid Version / Invalid Field | 404: <br>Invalid Industry
