# CDR Register APIs
<aside class="warning">
  These endpoints are not implemented by Data Holders and Data Recipients. They are hosted by the Register for consumption by participants.
  Data Holders and Data Recipient Software Products are required to call these endpoints to obtain metadata that enables connection and registration between participants as well as obtaining the status of participants in the CDR.
  These statuses are provided authoritatively by the Register to allow participants to determine whether a connecting third-party is permitted to perform registration requests or data sharing requests.
</aside>

| Section              | Sub-section                               | Endpoint                                                 | Method | Version | Binding Date   | Retirement Date | Date Introduced    | Date Deprecated     |
|----------------------|-------------------------------------------|----------------------------------------------------------|--------|---------|----------------|-----------------|--------------------|---------------------|
| CDR Register APIs    | Get OpenId Provider Config                | ``/.well-known/openid-configuration``                        | <span class="method get">GET</span>    | None    | 2021-10-29&dagger;    | N/A             | 2021-10-29, V1.14.0&dagger; | N/A                 |
| CDR Register APIs    | Get JWKS                                  | ``/jwks``                                                    | <span class="method get">GET</span>    | None    | 2021-10-29&dagger;    | N/A             | 2021-10-29, V1.14.0&dagger; | N/A                 |
| CDR Register APIs    | Get Data Holder Brands                    | ``/{industry}/data-holders/brands``                          | <span class="method get">GET</span>    | V1      | 2021-10-29&dagger;    | 2023-04-07 | 2021-10-29, V1.14.0&dagger; | 2021-12-23, V1.15.0 |
| CDR Register APIs    | Get Data Holder Brands                    | ``/{industry}/data-holders/brands``                          | <span class="method get">GET</span>    | V2      | 2022-11-15    | N/A              | 2021-12-23, V1.15.0* | N/A |
| CDR Register APIs    | Get Software Statement Assertion (SSA) | ``/{industry}/data-recipients/``<br/>``brands/{dataRecipientBrandId}/``<br/>``software-products/{softwareProductId}/ssa`` | <span class="method get">GET</span>    | V2    | 2021-10-29&dagger;  | 2023-04-07 | 2021-10-29, V1.14.0&dagger; | 2021-12-23, V1.15.0 |
| CDR Register APIs    | Get Software Statement Assertion (SSA) | ``/{industry}/data-recipients/``<br/>``brands/{dataRecipientBrandId}/``<br/>``software-products/{softwareProductId}/ssa`` | <span class="method get">GET</span>    | V3    | 2022-11-15  | N/A             | 2021-12-23, V1.15.0 | N/A                 |
| CDR Register APIs    | Get Software Products Statuses | ``/{industry}/data-recipients/``<br/>``brands/software-products/status`` | <span class="method get">GET</span>  | V1  | 2021-10-29&dagger; | 2023-04-07 | 2021-10-29, V1.14.0&dagger; | 2021-12-23, V1.15.0 |
| CDR Register APIs    | Get Software Products Statuses | ``/{industry}/data-recipients/``<br/>``brands/software-products/status`` | <span class="method get">GET</span>  | V2  | 2022-11-15 | N/A | 2021-12-23, V1.15.0 | N/A                 |
| CDR Register APIs    | Get Data Recipient Statuses | ``/{industry}/data-recipients/status``                                     | <span class="method get">GET</span>    | V1     | 2021-10-29&dagger;    | 2023-04-07 | 2021-10-29, V1.14.0&dagger; | 2021-12-23, V1.15.0 |
| CDR Register APIs    | Get Data Recipient Statuses | ``/{industry}/data-recipients/status``                                     | <span class="method get">GET</span>    | V2     | 2022-11-15    | N/A              | 2021-12-23, V1.15.0 | N/A                 |
| CDR Register APIs    | Get Data Recipients                       | ``/{industry}/data-recipients``                              | <span class="method get">GET</span>    | V2     | 2021-10-29&dagger;    | 2023-04-07 | 2021-10-29, V1.14.0&dagger; | 2021-12-23, V1.15.0 |
| CDR Register APIs    | Get Data Recipients                       | ``/{industry}/data-recipients``                              | <span class="method get">GET</span>    | V3     | 2022-11-15    | N/A              | 2021-12-23, V1.15.0 | N/A |
| CDR Register APIs    | Get Data Holder Statuses                       | ``/{industry}/data-holders/status``                      | <span class="method get">GET</span>    | V1     | 2022-11-15    | N/A              | 2021-12-23, V1.15.0 | N/A |

**&dagger;NOTE:** The CDR Register standards were introduced into the Consumer Data Standards in v1.14.0. Prior to this the CDR Register specifications were hosted by the ACCC.

