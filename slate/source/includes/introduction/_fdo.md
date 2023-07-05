## Future Dated Obligations

The standards, as published from time to time, may include specific statements indicating that a specific section of the standards will not take effect until a future date or may cease to have effect on some future date.

The table below highlights these areas of the standards.


|Section|Description|Applicable Date|
|-------|-----------|---------------|
|[Get Metrics V3](#get-metrics)|Version 3 of this end point **MUST** be made available by affected data holders by October 1st 2022|October 1st 2022|
|[Standard Error Codes](#error-codes) | Data Holders **MAY** retire application-specific error codes in favour of standard error codes from November 1st 2022 | November 1st 2022 |
|[Data Recipient CDR Arrangement Endpoint](#cdr-arrangement-revocation-end-point) | From November 15th 2022, Data Recipients **MUST** validate the `cdr_arrangement_id`, if presented, is the same as the value included in the "CDR Arrangement JWT".| November 15th 2022 |
|[Get Energy Accounts V1](#get-energy-accounts)|<ul><li>Data Holders **MAY** go-live on November 15 2022 with v1 of this end point</li><li>Data Holders **MAY** decommission v1 of this end point as soon v2 is supported</li></ul>| November 15th 2022 |
|[Get Energy Account Detail V1](#get-energy-account-detail)|<ul><li>Data Holders **MAY** go-live on November 15 2022 with v1 of this end point</li><li>Data Holders **MAY** decommission v1 of this end point as soon v2 is supported</li></ul>| November 15th 2022 |
|[Get Account Detail V2](#get-account-detail)|Version 2 of this end point **MUST** be made available by affected data holders by November 30th 2022|November 30th 2022|
|[Get Customer Detail V2](#get-customer-detail)|Version 2 of this end point **MUST** be made available by affected data holders by November 30th 2022|November 30th 2022|
|[Get Product Detail V4](#get-product-detail)|Version 4 of this end point **MUST** be made available by affected data holders by November 30th 2022|November 30th 2022|
|[Get Metrics V2](#get-metrics)|Data holders **MAY** obsolete version 2 of this end point from December 5th 2022. Data Holders in the energy sector **MAY** go live with only Get Metrics v3 support. The CDR Register **MUST** upgrade their implementation to use version 3 by this time|December 5th 2022|
|[Get Account Detail V1](#get-account-detail)|Data holders **MAY** obsolete version 1 of this end point from February 28th 2023.  Data recipients **MUST** upgrade their implementations to use version 2 by this time|February 28th 2023|
|[Get Product Detail V3](#get-product-detail)|Data holders **MAY** obsolete version 3 of this end point from February 28th 2023.  Data recipients **MUST** upgrade their implementations to use version 4 by this time|February 28th 2023|
|[Get Customer Detail V1](#get-customer-detail)|Data holders **MAY** obsolete version 1 of this end point from February 28th 2023.  Data recipients **MUST** upgrade their implementations to use version 2 by this time|February 28th 2023|
|[Get Energy Accounts V2](#get-energy-accounts)|Data Holder **MUST** implement v2 of this endpoint by **April 14th 2023** | April 14th 2023 |
|[Get Energy Account Detail V2](#get-energy-account-detail)|Data Holder **MUST** implement v2 of this endpoint by **April 14th 2023** | April 14th 2023 |
|[Information Security profile](#security-profile) | FAPI 1.0 adoption is introduced across four phases.<br/><strong>Phase 3: Support Authorization Code Flow and Hybrid Flow</strong> includes, amongst other changes:<ul><li>Data Holders **MUST** support Authorization Code Flow</li><li>Data Holders **MUST** support Hybrid Flow</li></ul> | April 14th 2023 |
|[Error Codes: Secondary Data Holder flag](#error-codes)|<ul><li>Data Holders **MAY** implement the `isSecondaryDataHolderError` field on **November 15 2022**</li><li>Affected Data Holders **MUST** implement `isSecondaryDataHolderError` field by **May 15 2023**</li></ul> | May 15th 2023 |
|[Information Security profile](#security-profile) | FAPI 1.0 adoption is introduced across four phases.<br/><strong>Phase 4: Retire Hybrid Flow</strong>:<ul><li>Data Holders **MAY** retire Hybrid Flow</li></ul> | July 10th 2023 |
|[Get Accounts V2](#get-accounts)|Version 2 of this end point **MUST** be made available by affected data holders by July 10th 2023|July 10th 2023|
|[Get Account Detail V3](#get-account-detail)|Version 3 of this end point **MUST** be made available by affected data holders by July 10th 2023|July 10th 2023|
|[Get Generic Plan Detail V2](#get-generic-plan-detail)|<ul><li>Data Holder **MUST** implement v2 of this endpoint by **November 1st 2023**</li><li>Data Holders **MAY** obsolete v1 of this endpoint from **September 9th 2024**</li></ul> | November 1st 2023 |
|[Get Energy Account Detail V3](#get-account-detail)|<ul><li>Data Holder **MUST** implement v3 of this endpoint by **November 1st 2023**</li><li>Data Holders **MAY** obsolete v2 of this endpoint from **September 9th 2024**</li></ul>| November 1st 2023 |
|[Private Key JWT Client Authentication](#https://consumerdatastandardsaustralia.github.io/standards/?examples#client-authentication) | Change to support [**[RFC7521]**](#nref-RFC7521) such that, until November 13th 2023, clients authenticating using Private Key JWT are _recommended_ to provide the `client_id`, but no longer required. From November 13th 2023, it is then _optional_ to provide the `client_id`. This applies to ADRs and the CDR Register authenticating with Data Holders and ADRs authenticating with the CDR Regsiter. | November 13th 2023 |
|[Get Accounts V1](#get-account-detail)|Data Holders **MAY** decommission v1 of this end point from March 11th 2024| March 11th 2024 |
|[Get Account Detail V2](#get-account-detail)|Data Holders **MAY** decommission v2 of this end point from March 11th 2024| March 11th 2024 |
|[Get Scheduled Payments for Account V2](#get-scheduled-payments-for-account)|<ul><li>Data Holder **MUST** implement v2 of this endpoint by **March 11th 2024**</li><li>Data Holders **MAY** obsolete v1 of this endpoint from **September 9th 2024**</li></ul> | March 11th 2024 |
|[Get Scheduled Payments Bulk V2](#get-scheduled-payments-bulk)|<ul><li>Data Holder **MUST** implement v2 of this endpoint by **March 11th 2024**</li><li>Data Holders **MAY** obsolete v1 of this endpoint from **September 9th 2024**</li></ul> | March 11th 2024 |
|[Get Scheduled Payments For Specific Accounts V2](#get-scheduled-payments-for-specific-accounts)|<ul><li>Data Holder **MUST** implement v2 of this endpoint by **March 11th 2024**</li><li>Data Holders **MAY** obsolete v1 of this endpoint from **September 9th 2024**</li></ul> | March 11th 2024 |