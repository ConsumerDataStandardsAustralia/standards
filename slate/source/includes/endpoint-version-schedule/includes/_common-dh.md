## Security APIs

| Section         | Sub-section                                  | Endpoint                                                   | Method | Version | Binding Date        | Retirement Date | Date Introduced    | Date Deprecated    |
|-----------------|----------------------------------------------|------------------------------------------------------------|--------|---------|---------------------|-----------------|--------------------|--------------------|
| Security Profile | Security Endpoints > CDR Arrangement Revocation Endpoint | ``<cdr_arrangement_revocation_endpoint>``      | <span class="method post">POST</span>  | 1.5.0   | 2020-11-01          | N/A             | 2020-04-17, V1.2.0 | N/A                |

**NOTE** Endpoints defined in normative references are not provided here.

## Common APIs

| Section         | Sub-section                                  | Endpoint                                                   | Method | Version | Binding Date        | Retirement Date | Date Introduced    | Date Deprecated    |
|-----------------|----------------------------------------------|------------------------------------------------------------|--------|---------|---------------------|-----------------|--------------------|--------------------|
| Common APIs     | Get Customer                                 | ``/common/customer``                                           | <span class="method get">GET</span>    | V1      | 2020-07-01          | N/A             | 2019-09-30, V1.0.0 | N/A                |
| Common APIs     | Get Customer Detail                          | ``/common/customer/detail``                                    | <span class="method get">GET</span>    | V1      | 2020-11-01          | 2023-02-28      | 2019-09-30, V1.0.0 | 2021-12-23, V1.15.0|
| Common APIs     | Get Customer Detail                          | ``/common/customer/detail``                                    | <span class="method get">GET</span>    | V2      | 2022-11-31          | N/A             | 2021-12-23, V1.15.0| N/A                |
| Common APIs     | Get Status                                   | ``/discovery/status``                                          | <span class="method get">GET</span>    | V1      | 2020-07-01          | N/A             | 2019-09-30, V1.0.0 | N/A                |
| Common APIs     | Get Outages                                  | ``/discovery/outages``                                         | <span class="method get">GET</span>    | V1      | 2020-07-01          | N/A             | 2019-09-30, V1.0.0 | N/A                |

## Admin APIs

| Section         | Sub-section                                  | Endpoint                                                   | Method | Version | Binding Date        | Retirement Date | Date Introduced    | Date Deprecated    |
|-----------------|----------------------------------------------|------------------------------------------------------------|--------|---------|---------------------|-----------------|--------------------|--------------------|
| Admin APIs      | Metadata Update                              | ``/admin/register/metadata``                                   | <span class="method post">POST</span>  | V1      | 2020-07-01          | N/A             | 2019-09-30, V1.0.0  | N/A                |
| Admin APIs      | Get Metrics                                  | ``/admin/metrics``                                             | <span class="method get">GET</span>    | V1      | 2020-07-01          | 2021-10-31      | 2019-09-30, V1.0.0  | 2021-04-29, V1.9.0 |
| Admin APIs      | Get Metrics                                  | ``/admin/metrics``                                             | <span class="method get">GET</span>    | V2      | 2021-07-31          | 2022-12-05      | 2020-09-16, V1.5.0  | 2021-10-06, V1.12.0                |
| Admin APIs      | Get Metrics                                  | ``/admin/metrics``                                             | <span class="method get">GET</span>    | V3      | 2022-10-01          | 2024-05-13 **&dagger;** | 2021-10-06, V1.12.0 | 2023-07-08, V1.25.0 |
| Admin APIs      | Get Metrics                                  | ``/admin/metrics``                                             | <span class="method get">GET</span>    | V4      | 2023-11-01          | When v5 Implemented | 2023-07-08, V1.25.0 | 2023-07-08, V1.25.0 |
| Admin APIs      | Get Metrics                                  | ``/admin/metrics``                                             | <span class="method get">GET</span>    | v5      | 2024-05-13          | N/A | 2023-07-08, V1.25.0 | N/A                |

**&dagger;NOTE:** the details of the retirement date for Get Metrics v3 is as follows:

* Implementation of Get Metrics v3 is not required for Data Holders going live on, or after, 1st November 2023
* Other Data Holders **MAY** retire this version from the earlier of **13th May 2024** or from the time the ACCC announce that they no longer call this version
