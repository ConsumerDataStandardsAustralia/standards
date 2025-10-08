## Future Dated Obligations



The standards, as published from time to time, may include specific statements indicating that a specific section of the standards will not take effect until a future date or may cease to have effect on some future date. 

Please also refer to the [Obligation Date Schedule](includes/endpoint-version-schedule/#obligation-date-schedule) which summarises obligation milestones.

The table below highlights these areas of the standards.

|Section|Description|Applicable Date|
|-------|-----------|---------------|
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
|[Get Transaction Detail v2](#cdr-banking-api_get-transaction-detail)|<ul><li>Data Holders **MUST** implement v2 of this endpoint by **July 14th 2025**</li><li>Data Holders **MAY** retire v1 of this endpoint from **November 10th 2025**</li></ul> | July 14th 2025 |
|[Get Service Points v2](#cdr-energy-api_get-service-points)|<ul><li>Data Holders **MUST** implement v2 of this endpoint by **November 10th 2025**</li><li>Data Holders **MAY** retire v1 of this endpoint from **March 16th 2026**</li></ul> | November 10th 2025 |
|[Get Service Point Detail v2](#cdr-energy-api_get-service-point-detail)|<ul><li>Data Holders **MUST** implement v2 of this endpoint by **November 10th 2025**</li><li>Data Holders **MAY** retire v1 of this endpoint from **March 16th 2026**</li></ul> | November 10th 2025 |
|[Get Service Points (SR) v2](#cdr-energy-secondary-data-holder-api_get-service-points-sr)|<ul><li>Data Holders **MUST** implement v2 of this endpoint by **November 10th 2025**</li><li>Data Holders **MAY** retire v1 of this endpoint from **March 16th 2026**</li></ul> | November 10th 2025 |
|[Get Service Point Detail (SR) v2](#cdr-energy-secondary-data-holder-api_get-service-point-detail-sr)|<ul><li>Data Holders **MUST** implement v2 of this endpoint by **November 10th 2025**</li><li>Data Holders **MAY** retire v1 of this endpoint from **March 16th 2026**</li></ul> | November 10th 2025 |
|[Shared Responsibility -> Energy -> Additional Requirements](#additional-requirements)| Energy data holders **MUST** support additional requirements for sharing electricity usage data according to the Last Consumer Change Date (LCCD) by **November 10th 2025** | November 10th 2025 |
|[JARM encryption requirements](#authentication-flows)| From **November 10th 2025**, Data Holders **SHALL NOT** perform authorization response encryption unless requested by the ADR | November 10th 2025 |
|[Get Products v4](#cdr-banking-api_get-products)|<ul><li>Data Holders **MUST** implement v4 of this endpoint by **March 16th 2026**</li><li>Data Holders **MAY** retire v3 of this endpoint from **May 11th 2026**</li></ul> | March 16th 2026 |
|[Get Product Detail v6](#cdr-banking-api_get-product-detail)|<ul><li>Data Holders **MUST** implement v6 of this endpoint by **March 16th 2026**</li><li>Data Holders **MAY** retire v5 of this endpoint from **May 11th 2026**</li></ul> | March 16th 2026 |
|[Get Account Detail v4](#cdr-banking-api_get-account-detail)|<ul><li>Data Holders **MUST** implement v4 of this endpoint by **March 16th 2026**</li><li>Data Holders **MAY** retire v3 of this endpoint from **May 11th 2026**</li></ul> | March 16th 2026 |
|[Get Products v5](#cdr-banking-api_get-products)|<ul><li>Data Holders **MUST** implement v5 of this endpoint by **July 13th 2026**</li><li>Data Holders **MAY** retire v4 of this endpoint from **August 10th 2026**</li></ul> | July 13th 2026 |
|[Get Product Detail v7](#cdr-banking-api_get-product-detail)|<ul><li>Data Holders **MUST** implement v7 of this endpoint by **July 13th 2026**</li><li>Data Holders **MAY** retire v6 of this endpoint from **August 10th 2026**</li></ul> | July 13th 2026 |
|[Get Accounts v3](#cdr-banking-api_get-accounts)|<ul><li>Data Holders **MUST** implement v3 of this endpoint by **November 9th 2026**</li><li>Data Holders **MAY** retire v2 of this endpoint from **December 7th 2026**</li></ul> | November 9th 2026 |
|[Get Account Detail v5](#cdr-banking-api_get-account-detail)|<ul><li>Data Holders **MUST** implement v5 of this endpoint by **November 9th 2026**</li><li>Data Holders **MAY** retire v4 of this endpoint from **December 7th 2026**</li></ul> | November 9th 2026 |
|[Get Bulk Balances v2](#cdr-banking-api_get-bulk-balances)|<ul><li>Data Holders **MUST** implement v2 of this endpoint by **November 9th 2026**</li><li>Data Holders **MAY** retire v1 of this endpoint from **December 7th 2026**</li></ul> | November 9th 2026 |
|[Get Bulk Direct Debits v2](#cdr-banking-api_get-bulk-direct-debits)|<ul><li>Data Holders **MUST** implement v2 of this endpoint by **November 9th 2026**</li><li>Data Holders **MAY** retire v1 of this endpoint from **December 7th 2026**</li></ul> | November 9th 2026 |
|[Get Scheduled Payments Bulk v3](#cdr-banking-api_get-scheduled-payments-bulk)|<ul><li>Data Holders **MUST** implement v3 of this endpoint by **November 9th 2026**</li><li>Data Holders **MAY** retire v2 of this endpoint from **December 7th 2026**</li></ul> | November 9th 2026 |
|[Get Transactions for Account v2](#cdr-banking-api_get-transactions-for-account)|<ul><li>Data Holders **MUST** implement v2 of this endpoint by **November 9th 2026**</li><li>Data Holders **MAY** retire v1 of this endpoint from **December 7th 2026**</li></ul> | November 9th 2026 |
|[Get Transaction Detail v3](#cdr-banking-api_get-transaction-detail)|<ul><li>Data Holders **MUST** implement v3 of this endpoint by **November 9th 2026**</li><li>Data Holders **MAY** retire v2 of this endpoint from **December 7th 2026**</li></ul> | November 9th 2026 |
|[Get Instalment Plans for Account v1](#cdr-banking-api_get-instalment-plans-for-account)|<ul><li>Data Holders **MUST** implement v1 of this endpoint by **November 9th 2026**</li></ul> | November 9th 2026 |
|[Get Instalment Plans Bulk v1](#cdr-banking-api_get-instalment-plans-bulk)|<ul><li>Data Holders **MUST** implement v1 of this endpoint by **November 9th 2026**</li></ul> | November 9th 2026 |
|[Redirect to App](#redirect-to-app)| Data holders and data recipients **MUST** implement these standards on and from **May 10th 2027**. | May 10th 2027 |
|[Authentication Flows](#authentication-flows)| Data holders and data recipients **MUST** implement these standards on and from **May 10th 2027**. | May 10th 2027 |
