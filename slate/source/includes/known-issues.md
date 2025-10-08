# Known Issues



There are certain aspects of the standards that are actively under review. These known issues are articulated in the following table.

Issue | Description
:---- | :----------
Inconsistencies in Telco Candidate Standards | <ul><li>The Get Telco Products endpoint schema references an array of _plans_, which should be _products_.</li><li>Transaction endpoints reference a _serviceIds_ (plural) property described as an 'Array list', but with a Type as 'string'.</li><li>Redundant _service_ object in Telco Usage list endpoints.</li><li>Redundant _balance_ object in Telco Balance list endpoints.</li><li>Telco Usage list endpoints should have pagination links.</li><li>Some mandatory fields are not specified with valid 'required' statements, and some are incorrectly specified with default values.</li></ul>
Certificate Management | The [Certificate Management](#certificate-management) section is under review, pending a change expected to impact participants on 1 October 2025.<br>For more information refer to issue [#695 - Digicert Certificate Trust Chain Migration](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/695).


## Future improvements

The following improvements will be incorporated into future versions of the Standards.



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

### Standardise Banking Scheduled Payments endpoint paths

Future versions of the Banking _Get Scheduled Payments_ endpoints below could be aligned to the convention of [Get Scheduled Payments for Account](#cdr-banking-api_get-scheduled-payments-for-account) and other Banking 'accounts' endpoints as follows:

API | Current path | Proposed path
-- | -- | --
[Get Scheduled Payments Bulk](#cdr-banking-api_get-scheduled-payments-bulk) | `/banking/payments/scheduled` | `/banking/accounts/payments/scheduled`
[Get Scheduled Payments For Specific Accounts](#cdr-banking-api_get-scheduled-payments-for-specific-accounts) | `/banking/payments/scheduled` | `/banking/accounts/payments/scheduled`

### Address inconsistency in the Metadata Update endpoint response

- The `200 OK` response for the [Metadata Update](#cdr-admin-api_metadata-update) endpoint is currently presented as an 'Inline' schema, rendering as a `null` example response, where the specification defines an empty object `{}`. 
- The [Response Payload Structure](#response-payload-structure) section states that `200 OK` responses **MUST** contain _data_ and _links_ objects. 
- As this endpoint is expected to trigger an asynchronous process, a `202 Accepted` response code and an alternate response body may address these inconsistencies.
