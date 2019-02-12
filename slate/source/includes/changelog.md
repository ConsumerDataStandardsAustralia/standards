# Change Log

The following table lists the changes made to these standards in reverse date order (most recent change is at the top).

|Change Date|Description|Detail Of change|
|-----------|-----------|----------------|
|21/12/2018|Transaction payloads|Removed incorrect inclusion of accountId, displayName and nickname for transaction response payloads|
|20/12/2018|Version 0.20|Version updated formally to version 0.20 for Christmas Draft|
|20/12/2018|Updated documentation|Documentation has been automatically generated from the swagger for consistency|
|20/12/2018|Known issues|Added a section identifying known issues with the standards that are under review|
|20/12/2018|Cursor based pagination|Added commentary in pagination section on the potential use of cursors|
|20/12/2018|Minor amendments to response codes|Additional wording to support caching and inserted a cross reference to the error payload section|
|20/12/2018|Minor amendments to extensibility|Minor wording changes for clarity and included reference to addition of new query parameters|
|20/12/2018|Unauthenticated end points|Modified URI structure commentary to allow for a different provider path for unauthenticated end points|
|20/12/2018|Festive spirit|Critical update - added a Santa hat to the logo|
|20/12/2018|FAPI Headers|Added FAPI specific headers arising from the InfoSec work|
|19/12/2018|PAFAddress|Added detail for the PAFAddress model based on the Australia Post PAF file format definition|
|19/12/2018|RateString common type|Changed the RateString type to represent rates such that 100% is represented by the value 1.0|
|19/12/2018|URIString common type|Corrected the name of the URIString common type|
|19/12/2018|Updated swagger files|Swagger files were updated to address feedback.  Documentation has not been changed to reflect these changes unless stated.  Changes are as follows:<ul><li>Fixed up numerous field descriptions based on feedback</li><li>Fixed all country fields to use ISO 3166 Alpha-3</li><li>Fixed all documentation errors raised in [published feedback summary](https://github.com/ConsumerDataStandardsAustralia/standards/issues/39#issuecomment-444021850) except addition of PAFAddress</li><li>Added all minor amendments raised in [published feedback summary](https://github.com/ConsumerDataStandardsAustralia/standards/issues/39#issuecomment-444021850)</li><li>Modifications according to responses in technical feedback section documented in [published feedback summary](https://github.com/ConsumerDataStandardsAustralia/standards/issues/39#issuecomment-444021850)</li><li>organisationType for Organisation model is now required due to addition of OTHER value</li></ul>|
|19/12/2018|Masking rules|Added specificity to the masking guidance for the masked string primitives|
|18/12/2018|Updated swagger files|Swagger files were updated to address feedback.  Documentation has not been changed to reflect these changes unless stated.  Changes are as follows:<ul><li>Extracted common query parameters</li><li>Extracted enums with repeated use</li><li>Used schema composition to facilitate model inheritance</li><li>Removed erroneous default values</li><li>Corrected for JSON syntax errors</li><li>Standardised Operation IDs and Model names</li><li>Change $type fields to PType (also fixed in doco)</li></ul>|
|18/12/2018|Addition of change log|This change log was added to the standards documentation|
