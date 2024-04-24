## Future Dated Obligations

```diff
Updated the date format in the 'Obligation Dates Schedule' table in the linked summary page to match the format in the 'Endpoint Version Schedule' tables to simplify cross-referencing. The aligned format is YYYY-MM-DD.
- 13/05/2024
+ 2024-05-13
```

The standards, as published from time to time, may include specific statements indicating that a specific section of the standards will not take effect until a future date or may cease to have effect on some future date. 

Please also refer to the [Obligation Date Schedule](includes/endpoint-version-schedule/#obligation-dates-schedule) which summarises obligation milestones.

The table below highlights these areas of the standards.

|Section|Description|Applicable Date|
|-------|-----------|---------------|
|[Get Account Detail V1](#cdr-banking-api_get-account-detail)|Data holders **MAY** retire version 1 of this end point from February 28th 2023.  Data recipients **MUST** upgrade their implementations to use version 2 by this time|February 28th 2023|
|[Get Product Detail V3](#cdr-banking-api_get-product-detail)|Data holders **MAY** retire version 3 of this end point from February 28th 2023.  Data recipients **MUST** upgrade their implementations to use version 4 by this time|February 28th 2023|
|[Get Customer Detail V1](#cdr-common-api_get-customer-detail)|Data holders **MAY** retire version 1 of this end point from February 28th 2023.  Data recipients **MUST** upgrade their implementations to use version 2 by this time|February 28th 2023|
|[Get Energy Accounts V2](#cdr-energy-api_get-energy-accounts)|Data Holders **MUST** implement v2 of this endpoint by **April 14th 2023** | April 14th 2023 |
|[Get Energy Account Detail V2](#cdr-energy-api_get-energy-account-detail)|<ul><li>Data Holders **MUST** implement v2 of this endpoint by **April 14th 2023**</li><li>Data Holders going live on, or after, November 1st 2023 are not required to support this version</li><ul> | April 14th 2023 |
|[Information Security profile](#security-profile) | FAPI 1.0 adoption is introduced across four phases.<br/><strong>Phase 3: Support Authorization Code Flow and Hybrid Flow</strong> includes, amongst other changes:<ul><li>Data Holders **MUST** support Authorization Code Flow</li><li>Data Holders **MUST** support Hybrid Flow</li></ul> | April 14th 2023 |
|[Error Codes: Secondary Data Holder flag](#error-codes)|<ul><li>Data Holders **MAY** implement the `isSecondaryDataHolderError` field on **November 15 2022**</li><li>Affected Data Holders **MUST** implement `isSecondaryDataHolderError` field by **May 15 2023**</li></ul> | May 15th 2023 |
|[Information Security profile](#security-profile) | FAPI 1.0 adoption is introduced across four phases.<br/><strong>Phase 4: Retire Hybrid Flow</strong>:<ul><li>Data Holders **MAY** retire Hybrid Flow</li></ul> | July 10th 2023 |
|[Get Accounts V2](#cdr-banking-api_get-accounts)|Version 2 of this end point **MUST** be made available by affected data holders by July 10th 2023|July 10th 2023|
|[Get Account Detail V3](#cdr-banking-api_get-account-detail)|Version 3 of this end point **MUST** be made available by affected data holders by July 10th 2023|July 10th 2023|
|[Get Generic Plan Detail V2](#cdr-energy-api_get-generic-plan-detail)|<ul><li>Data Holders **MUST** implement v2 of this endpoint by **November 1st 2023**</li><li>Data Holders **MAY** retire v1 of this endpoint from **September 9th 2024**</li></ul> | November 1st 2023 |
|[Get Energy Account Detail V3](#cdr-energy-api_get-energy-account-detail)|<ul><li>Data Holders **MUST** implement v3 of this endpoint by **November 1st 2023**</li><li>Data Holders **MAY** retire v2 of this endpoint from **September 9th 2024**</li></ul>| November 1st 2023 |
|[Get Billing For Account V2](#cdr-energy-api_get-billing-for-account)|<ul><li>Data Holders **MUST** implement v2 of this endpoint by **November 1st 2023**</li><li>Data Holders **MAY** retire v1 of this endpoint from **September 9th 2024**</li></ul>| November 1st 2023 |
|[Get Bulk Billing V2](#cdr-energy-api_get-bulk-billing)|<ul><li>Data Holders **MUST** implement v2 of this endpoint by **November 1st 2023**</li><li>Data Holders **MAY** retire v1 of this endpoint from **September 9th 2024**</li></ul>| November 1st 2023 |
|[Get Billing For Specific Accounts V2](#cdr-energy-api_get-billing-for-specific-accounts)|<ul><li>Data Holders **MUST** implement v2 of this endpoint by **November 1st 2023**</li><li>Data Holders **MAY** retire v1 of this endpoint from **September 9th 2024**</li></ul>| November 1st 2023 |
|[Get Metrics V4](#cdr-admin-api_get-metrics)|<ul><li>Data Holders **MUST** implement v4 or v5 of this endpoint by **November 1st 2023**</li><li>Data Holders **MAY** retire v4 of this endpoint once v5 is implemented</li></ul>| November 1st 2023 |
|[Private Key JWT Client Authentication](https://consumerdatastandardsaustralia.github.io/standards/?examples#client-authentication) | Change to support [**[RFC7521]**](#nref-RFC7521) such that, until November 13th 2023, clients authenticating using Private Key JWT are _recommended_ to provide the `client_id`, but no longer required. From November 13th 2023, it is then _optional_ to provide the `client_id`. This applies to ADRs and the CDR Register authenticating with Data Holders and ADRs authenticating with the CDR Register. | November 13th 2023 |
|[Get Accounts V1](#cdr-banking-api_get-accounts)|Data Holders **MAY** decommission v1 of this end point from March 11th 2024| March 11th 2024 |
|[Get Account Detail V2](#cdr-banking-api_get-account-detail)|Data Holders **MAY** decommission v2 of this end point from March 11th 2024| March 11th 2024 |
|[Get Scheduled Payments for Account V2](#cdr-banking-api_get-scheduled-payments-for-account)|<ul><li>Data Holders **MUST** implement v2 of this endpoint by **March 11th 2024**</li><li>Data Holders **MAY** retire v1 of this endpoint from **September 9th 2024**</li></ul> | March 11th 2024 |
|[Get Scheduled Payments Bulk V2](#cdr-banking-api_get-scheduled-payments-bulk)|<ul><li>Data Holders **MUST** implement v2 of this endpoint by **March 11th 2024**</li><li>Data Holders **MAY** retire v1 of this endpoint from **September 9th 2024**</li></ul> | March 11th 2024 |
|[Get Scheduled Payments For Specific Accounts V2](#cdr-banking-api_get-scheduled-payments-for-specific-accounts)|<ul><li>Data Holders **MUST** implement v2 of this endpoint by **March 11th 2024**</li><li>Data Holders **MAY** retire v1 of this endpoint from **September 9th 2024**</li></ul> | March 11th 2024 |
|[Get Metrics V3](#cdr-admin-api_get-metrics)|<ul><li>Data Holders **MAY** retire v3 of this endpoint by the earlier of **13th May 2024** or when the ACCC announce that this version is no longer being called</li><li>Data Holders going live on, or after, 1st November 2023 are not required to support this version</li></ul>| May 13th 2024 |
|[Get Metrics v5](#cdr-admin-api_get-metrics)|<ul><li>Data Holders **MUST** implement v5 of this endpoint by **May 13th 2024**</li><li>Data Holders **MAY** deprecate v4 of this endpoint once v5 is implemented</li></ul>| May 13th 2024 |
|[Data Holder Dashboards](#consumer-experience_dashboard-standards_data-holder-dashboards)|Data Holders **MUST** implement the following CX Standards by **July 1st 2024**<ul><li>Data Holder Dashboard: Amending authorisation details<li>Data Holder Dashboard: Data recipient handling details</ul>| July 1st 2024 |
|[Get Billing For Account](#cdr-energy-api_get-billing-for-account)|Data Holders **MAY** retire v2 of this endpoint by **September 9th 2024** if they implement v3| September 9th 2024 |
|[Get Bulk Billing](#cdr-energy-api_get-bulk-billing)|Data Holders **MAY** retire v2 of this endpoint by **September 9th 2024** if they implement v3| September 9th 2024 |
|[Get Billing For Specific Accounts](#cdr-energy-api_get-billing-for-specific-accounts)|Data Holders **MAY** retire v2 of this endpoint by **September 9th 2024** if they implement v3| September 9th 2024 |
|[Get Generic Plan Detail](#cdr-energy-api_get-generic-plan-detail)|<ul><li>Data Holders **MUST** implement v3 of this endpoint by **November 11th 2024**</li><li>Data Holder **MAY** retire v2 of this endpoint by **September 8th 2025**</li></ul>| November 11th 2024 |
|[Get Energy Account Detail](#cdr-energy-api_get-energy-account-detail)|<ul><li>Data Holders **MUST** implement v4 of this endpoint by **November 11th 2024**</li><li>Data Holder **MAY** retire v3 of this endpoint by **September 8th 2025**</li></ul>| November 11th 2024 |
