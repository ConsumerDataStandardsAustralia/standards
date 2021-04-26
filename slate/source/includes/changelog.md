# Change Log

The following table lists the changes made to these standards in reverse date order (most recent change is at the top).

|Change Date|Version|Description|Detail Of change|
|-----------|-------|-----------|----------------|
|29/04/2021|1.9.0| Changes arising from the sixth Data Standards Maintenance Iteration | See [release notes](includes/releasenotes/releasenotes.1.9.0.html) and [Decision 161](https://github.com/ConsumerDataStandardsAustralia/standards/issues/161) for details|
|16/04/2021|1.8.0| CX Standards for Amending Consent | See [release notes](includes/releasenotes/releasenotes.1.8.0.html) and [Decision 144](https://github.com/ConsumerDataStandardsAustralia/standards/issues/144) for details|
|10/03/2021|1.7.0|Changes arising from the fifth Banking Maintenance Iteration|See [release notes](includes/releasenotes/releasenotes.1.7.0.html) and [Decision 159](https://github.com/ConsumerDataStandardsAustralia/standards/issues/159) for details|
|23/12/2020|1.6.0|DP325 to address urgent community request regarding audience claim for client authentication for data recipients calling data holders|See [release notes](includes/releasenotes/releasenotes.1.6.0.html) for details|
|25/9/2020|1.5.1|Revert 1.5.0 CRN update|See [release notes](includes/releasenotes/releasenotes.1.5.1.html) for details|
|16/9/2020|1.5.0|Second Banking Maintenance Iteration 4 Release|See [release notes](includes/releasenotes/releasenotes.1.5.0.html) for details|
|12/8/2020|1.4.0|Banking Maintenance Iteration 4 Release|See [release notes](includes/releasenotes/releasenotes.1.4.0.html) for details|
|22/5/2020|1.3.1|Maintenance updates|Error Fixes<br/>See [release notes](includes/releasenotes/releasenotes.1.3.1.html) for detail
|17/4/2020|1.3.0|Minor Update Release|Incorporates maintenance iteration 2 changes along with a number other CX and technical changes<br/>See [release notes](includes/releasenotes/releasenotes.1.3.0.html) for detail
|31/1/2020|1.2.0|Phase 2 Baseline|Baseline version for the Phase 2 implementation of the CDR regime<br/>See [release notes](includes/releasenotes/releasenotes.1.2.0.html) for detail
|20/1/2020|1.1.1|Maintenance updates|Error Fixes<br/>See [release notes](includes/releasenotes/releasenotes.1.1.1.html) for detail
|10/12/2019|1.1.0|Banking Maintenance Iteration 1 Changes|Changes arising from iteration 1 of the banking maintenance cadence.<br/>See [release notes](includes/releasenotes/releasenotes.1.1.0.html) for detail
|12/11/2019|1.0.1|Patch update|Minor defect changes and clarifications.<br/>See [release notes](includes/releasenotes/releasenotes.1.0.1.html) for detail
|30/9/2019|1.0.0|Baseline version 1|This release is the baseline release for the standards that are intended for implementation February 2020 and contains minor updates as well as changes to align to the locked down CDR Rules and the updated CDR Register design
|4/9/2019|0.9.6|Defect fix release|This release addresses a series of documentation issues and other clarifications as identified via GitHub feedback
|15/7/2019|0.9.5|Incorporated May 2019 Feedback|This version incorporates the decisions arising from the consultation feedback obtained on the May 2019 draft of the standards (v0.9.3)
|27/6/2019|0.9.4|Documentation and error fixes from May draft|<ul><li>Added missing versioning headers x-v/ x-min-v</li><li>Removed Banking API's tag </li><li>Fixed nonBusinessDayTreatment enum default is an array</li><li>Removal of empty x-scope in product reference</li><li>BankingScheduledPaymentRecurrence removed required intervals field</li><li>Added Swagger Contact object</li><li>BankingScheduledPaymentRecurrence removed required intervals field</li><li>Minor updates to static documentation typos/ broken links</li><li>Added cross links to additionalValue descriptions for Product Reference enums</li><li>Minor updates to product reference samples</li></ul>
|29/5/2019|0.9.3|Final updates for May Draft|Addition of Discoverability, InfoSec Profile and minor corrections
|28/5/2019|0.9.2|Admin End Points|Added separate swagger/yaml as well as documentation for admin end points
|28/5/2019|0.9.1|Modified BankingProductRateTier.maximumValue to optional|Rebuild of docs
|28/5/2019|0.9.0|Incorporated Scheduled Payments Decision proposal 51|Swagger updates and Documentation changes
|13/5/2019|0.8.4|InfoSec Update|Imported the InfoSec content without update for recent proposals
|12/5/2019|0.8.3|Optionality Update|Clarified the meaning of a field declaration of optional
|7/5/2019|0.8.2|Minor fixes|Minor fixes for product category enum
|6/4/2019|0.8.1|Negative Rates|Modified RateString to allow for negative rates and not just positive or zero rates
|3/4/2019|0.8.0|Accounts and Balances v1 final|Applied changes to prepare for v1 version of Accounts and Balances end points and payloads documentation
|27/4/2019|0.7.0|April Feedback|Incorporated feedback from v1 draft decisions and feedback cycle 5
|23/4/2019|0.6.0|Payees & Customer v1 draft|Applied changes to prepare for v1 version of Payees & Customer end points and payloads documentation
|16/4/2019|0.5.0|Transaction v1 draft|Applied changes to prepare for v1 version of Transaction end points and payloads documentation
|16/4/2019|0.4.0|Direct Debit Auth v1 draft|Applied changes to prepare for v1 version of Direct Debit Authorisations end points and payloads documentation
|9/4/2019|0.3.0|Product Reference v1 final|Synchronised standards documentation and swagger with final Decision 054 - Product Reference v1
|11/3/2019|0.2.0|Product Reference v1 draft|Applied changes to prepare for v1 version of Product Reference end points and payloads|
|22/2/2019|0.2.0|Rate tier name|Addition of a name field for rate tiers|
|21/2/2019|0.2.0|Rate tiering|Added rate tiering and additional rate types based on community feedback|
|19/2/2019|0.2.0|Fees and Discounts|Updated product and account fees, discounts and elibilities based on community feedback|
|19/2/2019|0.2.0|Doc Sync|Synchronised the API documentation with the swagger files|
|11/2/2019|0.2.0|Consistency Fixes|Fixes to end points for consistency across the standard.  Changes as follows:<ul><li>Made the use of the data object consistent (all objects with mixin for properties)</li><li>Modifed the ErrorList object to ResponseErrorList as it really is a response object</li><li>Fixed required status for links and meta properties</li><li>Added query paging params for POST queries that return lists</li></ul>|
|4/2/2019|0.2.0|Object Model Names|Updated the swagger json and yaml files to make the object model names consistent|
|21/12/2018|0.2.0|Transaction payloads|Removed incorrect inclusion of accountId, displayName and nickname for transaction response payloads|
|20/12/2018|0.2.0|Version 0.20|Version updated formally to version 0.20 for Christmas Draft|
|20/12/2018|0.1.0|Updated documentation|Documentation has been automatically generated from the swagger for consistency|
|20/12/2018|0.1.0|Known issues|Added a section identifying known issues with the standards that are under review|
|20/12/2018|0.1.0|Cursor based pagination|Added commentary in pagination section on the potential use of cursors|
|20/12/2018|0.1.0|Minor amendments to response codes|Additional wording to support caching and inserted a cross reference to the error payload section|
|20/12/2018|0.1.0|Minor amendments to extensibility|Minor wording changes for clarity and included reference to addition of new query parameters|
|20/12/2018|0.1.0|Unauthenticated end points|Modified URI structure commentary to allow for a different provider path for unauthenticated end points|
|20/12/2018|0.1.0|Festive spirit|Critical update - added a Santa hat to the logo|
|20/12/2018|0.1.0|FAPI Headers|Added FAPI specific headers arising from the InfoSec work|
|19/12/2018|0.1.0|PAFAddress|Added detail for the PAFAddress model based on the Australia Post PAF file format definition|
|19/12/2018|0.1.0|RateString common type|Changed the RateString type to represent rates such that 100% is represented by the value 1.0|
|19/12/2018|0.1.0|URIString common type|Corrected the name of the URIString common type|
|19/12/2018|0.1.0|Updated swagger files|Swagger files were updated to address feedback.  Documentation has not been changed to reflect these changes unless stated.  Changes are as follows:<ul><li>Fixed up numerous field descriptions based on feedback</li><li>Fixed all country fields to use ISO 3166 Alpha-3</li><li>Fixed all documentation errors raised in [published feedback summary](https://github.com/ConsumerDataStandardsAustralia/standards/issues/39#issuecomment-444021850) except addition of PAFAddress</li><li>Added all minor amendments raised in [published feedback summary](https://github.com/ConsumerDataStandardsAustralia/standards/issues/39#issuecomment-444021850)</li><li>Modifications according to responses in technical feedback section documented in [published feedback summary](https://github.com/ConsumerDataStandardsAustralia/standards/issues/39#issuecomment-444021850)</li><li>organisationType for Organisation model is now required due to addition of OTHER value</li></ul>|
|19/12/2018|0.1.0|Masking rules|Added specificity to the masking guidance for the masked string primitives|
|18/12/2018|0.1.0|Updated swagger files|Swagger files were updated to address feedback.  Documentation has not been changed to reflect these changes unless stated.  Changes are as follows:<ul><li>Extracted common query parameters</li><li>Extracted enums with repeated use</li><li>Used schema composition to facilitate model inheritance</li><li>Removed erroneous default values</li><li>Corrected for JSON syntax errors</li><li>Standardised Operation IDs and Model names</li><li>Change $type fields to PType (also fixed in doco)</li></ul>|
|18/12/2018|0.1.0|Addition of change log|This change log was added to the standards documentation|
