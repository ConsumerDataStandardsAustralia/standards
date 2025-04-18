## Future Dated Obligations

```diff
Added Future Dated Obligations for the following new endpoint versions:
+ Get Products v4
+ Get Product Detail v6
+ Get Account Detail v4

Added FDOs for Last Consumer Change Date (LCCD) related changes in Energy standards
+ Get Service Points v2
+ Get Service Point Detail v2
+ Get Service Points (SR) v2
+ Get Service Point Detail (SR) v2
+ Energy -> Additional Requirements
```

The standards, as published from time to time, may include specific statements indicating that a specific section of the standards will not take effect until a future date or may cease to have effect on some future date. 

Please also refer to the [Obligation Date Schedule](includes/endpoint-version-schedule/#obligation-date-schedule) which summarises obligation milestones.

The table below highlights these areas of the standards.

|Section|Description|Applicable Date|
|-------|-----------|---------------|
|[Get Generic Plan Detail V2](#cdr-energy-api_get-generic-plan-detail)|<ul><li>Data Holders **MUST** implement v2 of this endpoint by **November 1st 2023**</li><li>Data Holders **MAY** retire v1 of this endpoint from **September 9th 2024**</li></ul> | November 1st 2023 |
|[Get Energy Account Detail V3](#cdr-energy-api_get-energy-account-detail)|<ul><li>Data Holders **MUST** implement v3 of this endpoint by **November 1st 2023**</li><li>Data Holders **MAY** retire v2 of this endpoint from **September 9th 2024**</li></ul>| November 1st 2023 |
|[Get Billing For Account V2](#cdr-energy-api_get-billing-for-account)|<ul><li>Data Holders **MUST** implement v2 of this endpoint by **November 1st 2023**</li><li>Data Holders **MAY** retire v1 of this endpoint from **September 9th 2024**</li></ul>| November 1st 2023 |
|[Get Bulk Billing V2](#cdr-energy-api_get-bulk-billing)|<ul><li>Data Holders **MUST** implement v2 of this endpoint by **November 1st 2023**</li><li>Data Holders **MAY** retire v1 of this endpoint from **September 9th 2024**</li></ul>| November 1st 2023 |
|[Get Billing For Specific Accounts V2](#cdr-energy-api_get-billing-for-specific-accounts)|<ul><li>Data Holders **MUST** implement v2 of this endpoint by **November 1st 2023**</li><li>Data Holders **MAY** retire v1 of this endpoint from **September 9th 2024**</li></ul>| November 1st 2023 |
|[Get Accounts V1](#cdr-banking-api_get-accounts)|Data Holders **MAY** decommission v1 of this endpoint from March 11th 2024| March 11th 2024 |
|[Get Account Detail V2](#cdr-banking-api_get-account-detail)|Data Holders **MAY** decommission v2 of this endpoint from March 11th 2024| March 11th 2024 |
|[Get Scheduled Payments for Account V2](#cdr-banking-api_get-scheduled-payments-for-account)|<ul><li>Data Holders **MUST** implement v2 of this endpoint by **March 11th 2024**</li><li>Data Holders **MAY** retire v1 of this endpoint from **September 9th 2024**</li></ul> | March 11th 2024 |
|[Get Scheduled Payments Bulk V2](#cdr-banking-api_get-scheduled-payments-bulk)|<ul><li>Data Holders **MUST** implement v2 of this endpoint by **March 11th 2024**</li><li>Data Holders **MAY** retire v1 of this endpoint from **September 9th 2024**</li></ul> | March 11th 2024 |
|[Get Scheduled Payments For Specific Accounts V2](#cdr-banking-api_get-scheduled-payments-for-specific-accounts)|<ul><li>Data Holders **MUST** implement v2 of this endpoint by **March 11th 2024**</li><li>Data Holders **MAY** retire v1 of this endpoint from **September 9th 2024**</li></ul> | March 11th 2024 |
|[Get Metrics V3](#cdr-admin-api_get-metrics)|<ul><li>Data Holders **MAY** retire v3 of this endpoint from the earlier of **13th May 2024** or when the ACCC announce that this version is no longer being called</li><li>Data Holders going live on, or after, 1st November 2023 are not required to support this version</li></ul>| May 13th 2024 |
|[Get Metrics v5](#cdr-admin-api_get-metrics)|<ul><li>Data Holders **MUST** implement v5 of this endpoint by **May 13th 2024**</li><li>Data Holders **MAY** deprecate v4 of this endpoint once v5 is implemented</li></ul>| May 13th 2024 |
|[Data Holder Dashboards](#consumer-experience_dashboard-standards_data-holder-dashboards)|Data Holders **MUST** implement the following CX Standards by **July 1st 2024**<ul><li>Data Holder Dashboard: Amending authorisation details<li>Data Holder Dashboard: Data recipient handling details</ul>| July 1st 2024 |
|[Get Billing For Account](#cdr-energy-api_get-billing-for-account)|Data Holders **MAY** retire v2 of this endpoint from **September 9th 2024** if they implement v3| September 9th 2024 |
|[Get Bulk Billing](#cdr-energy-api_get-bulk-billing)|Data Holders **MAY** retire v2 of this endpoint from **September 9th 2024** if they implement v3| September 9th 2024 |
|[Get Billing For Specific Accounts](#cdr-energy-api_get-billing-for-specific-accounts)|Data Holders **MAY** retire v2 of this endpoint from **September 9th 2024** if they implement v3| <span style="white-space: nowrap;">September 9th 2024</span> |
|[Get Generic Plan Detail](#cdr-energy-api_get-generic-plan-detail)|<ul><li>Data Holders **MUST** implement v3 of this endpoint by **November 11th 2024**</li><li>Data Holder **MAY** retire v2 of this endpoint from **March 3rd 2025**</li></ul>| <span style="white-space: nowrap;">November 11th 2024</span> |
|[Get Energy Account Detail](#cdr-energy-api_get-energy-account-detail)|<ul><li>Data Holders **MUST** implement v4 of this endpoint by **November 11th 2024**</li><li>Data Holder **MAY** retire v3 of this endpoint from **March 3rd 2025**</li></ul>| <span style="white-space: nowrap;">November 11th 2024</span> |
|[Transaction Security Ciphers](#transaction-security)|Data Holders and Data Recipients **MUST** only support BCP195 recommended ciphers by **March 17th 2025**| <span style="white-space: nowrap;">March 17th 2025</span> |
|[Get Metrics v5](#cdr-admin-api_get-metrics)|Data Holders **MUST** report on all applicable error codes by **May 12th 2025** | May 12th 2025 |
|[Tokens -> Refresh Tokens](#tokens)|Refresh Tokens **MUST** be issued with an _exp_ value equal to the time of the sharing duration authorised by the consumer from **May 12th 2025** | May 12th 2025 |
|[Authentication Flows](#authentication-flows)|Data Holders **SHALL** only support Authorization Code Flow from **May 12th 2025**. Data Recipients **SHALL** only send authorisation requests using Authorization Code Flow from this date. | May 12th 2025 |
|[Amending consent: Changing attributes](#consumer-experience_amending-consent-standards)| Binding consumer experience data standards for data recipients regarding the presentation of amending consent invitations on and after **14 July 2025** | July 14th 2025 |
|[CDR Receipts](#consumer-experience_notification-standards_cdr-receipts)| Binding consumer experience data standards for data recipients regarding the content and delivery of CDR Receipts on and after **14 July 2025** | July 14th 2025 |
|[90-day notifications](#consumer-experience_notification-standards_notifications-90-day-notifications)| Binding consumer experience data standards for data recipients regarding the content and delivery of 90-day notifications on and after **14 July 2025** | July 14th 2025 |
|[Get Product Detail v5](#cdr-banking-api_get-product-detail)|<ul><li>Data Holders **MUST** implement v5 of this endpoint by **July 14th 2025**</li><li>Data Holders **MAY** retire v4 of this endpoint from **November 10th 2025**</li></ul> | July 14th 2025 |
|[Get Transaction Detail V2](#cdr-banking-api_get-transaction-detail)|Get Transaction Detail V2 **MUST** be supported by **July 14th 2025** | July 14th 2025 |
|[Get Products v4](#cdr-banking-api_get-products)|<ul><li>Data Holders **MUST** implement v4 of this endpoint by **November 10th 2025**</li><li>Data Holders **MAY** retire v3 of this endpoint from **May 11th 2026**</li></ul> | November 10th 2025 |
|[Get Product Detail v6](#cdr-banking-api_get-product-detail)|<ul><li>Data Holders **MUST** implement v6 of this endpoint by **November 10th 2025**</li><li>Data Holders **MAY** retire v5 of this endpoint from **May 11th 2026**</li></ul> | November 10th 2025 |
|[Get Account Detail v4](#cdr-banking-api_get-account-detail)|<ul><li>Data Holders **MUST** implement v4 of this endpoint by **November 10th 2025**</li><li>Data Holders **MAY** retire v3 of this endpoint from **May 11th 2026**</li></ul> | November 10th 2025 |
|[Get Service Points v2](#cdr-energy-api_get-service-points)|<ul><li>Data Holders **MUST** implement v2 of this endpoint by **November 10th 2025**</li><li>Data Holders **MAY** retire v1 of this endpoint from **March 16th 2026**</li></ul> | November 10th 2025 |
|[Get Service Point Detail v2](#cdr-energy-api_get-service-point-detail)|<ul><li>Data Holders **MUST** implement v2 of this endpoint by **November 10th 2025**</li><li>Data Holders **MAY** retire v1 of this endpoint from **March 16th 2026**</li></ul> | November 10th 2025 |
|[Get Service Points (SR) v2](#cdr-energy-secondary-data-holder-api_get-service-points-sr)|<ul><li>Data Holders **MUST** implement v2 of this endpoint by **November 10th 2025**</li><li>Data Holders **MAY** retire v1 of this endpoint from **March 16th 2026**</li></ul> | November 10th 2025 |
|[Get Service Point Detail (SR) v2](#cdr-energy-secondary-data-holder-api_get-service-point-detail-sr)|<ul><li>Data Holders **MUST** implement v2 of this endpoint by **November 10th 2025**</li><li>Data Holders **MAY** retire v1 of this endpoint from **March 16th 2026**</li></ul> | November 10th 2025 |
|[Shared Responsibility -> Energy -> Additional Requirements](#additional-requirements)| Energy data holders **MUST** support additional requirements for sharing electricity usage data according to the Last Consumer Change Date (LCCD) by **November 10th 2025** | November 10th 2025 |
