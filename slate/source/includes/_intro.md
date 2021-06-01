# Introduction
These standards have been developed as part of the Australian Government's introduction of the [Consumer Data Right](https://www.accc.gov.au/focus-areas/consumer-data-right "ACCC Consumer Data Right webpage") legislation to give Australians greater control over their data.

The Consumer Data Right (CDR) is intended to be applied sector by sector across the whole economy, beginning in the banking, energy and telecommunications sectors.  These standards have been developed to facilitate the Consumer Data Right by acting as a specific baseline for implementation.

These standards are maintained by the Data Standards Body (DSB), with the Data Standards Chair as the decision maker.  The DSB is part of the [Treasury](https://www.directory.gov.au/portfolios/treasury/data-standards-body "Data Standards Body"). The work of standards development is conducted in consultation with the [Australian Competition and Consumer Commission (ACCC)](https://www.accc.gov.au/focus-areas/consumer-data-right-cdr-0 "ACCC's CDR webpage") as co-regulator of the Consumer Data Right, along with the [Office of the Australian Information Commissioner (OAIC)](https://www.oaic.gov.au/consumer-data-right/about-the-consumer-data-right/ "OAIC CDR webpage").

The standards are required to be published. The obligations on CDR participants to apply the published standards commence on the commencement of the Consumer Data Right rules:

- where the rules require compliance with the standards, non-compliance with the standards may constitute a breach of the rules.
- where the standards are specified as binding standards as required by the Consumer Data Right rules for the purposes of s56FA of the legislation, they apply as under contract between a data holder and an accredited data recipient.  The legal effect of binding standards as between data holders and accredited data recipients is fully set out in s56FD and s56FE of the legislation.

## Future Dated Obligations

The standards, as published from time to time, may include specific statements indicating that a specific section of the standards will not take effect until a future date or may cease to have effect on some future date.

The table below highlights these areas of the standards.

|Section|Description|Applicable Date|
|-------|-----------|---------------|
|[Non-functional Requirements](#non-functional-requirements)|The non-functional requirements for the CDR regime are documented but are not yet binding with no specific future binding date being set as yet|Not yet specified|
|[Get Product Detail V3](#get-product-detail)|Version 3 of this end point must be made available by affected data holders by the end of February 2021|February 28th 2021|
|[Get Product Detail V2](#get-products)|Data holders may obsolete version 2 of this end point from May 31st 2021.  Data recipients must upgrade their implementations to use version 3 by this time|May 31st 2021|
|[Get Product Detail V2](#get-product-detail)|Version 2 of this end point must be made available by affected data holders by the end of July 2020|July 31st 2020|
|[Get Product Detail V1](#get-product-detail)|Data holders may obsolete version 1 of this end point from August 29th 2020.  Data recipients must upgrade their implementations to use version 2 by this time|August 29th 2020|
|[Get Products V3](#get-products)|Version 3 of this end point must be made available by affected data holders by the end of February 2021|February 28th 2021|
|[Get Products V2](#get-products)|Data holders may obsolete version 2 of this end point from May 31st 2021.  Data recipients must upgrade their implementations to use version 3 by this time|May 31st 2021|
|[Get Products V2](#get-products)|Version 2 of this end point must be made available by affected data holders by the end of July 2020|July 31st 2020|
|[Get Products V1](#get-products)|Data holders may obsolete version 1 of this end point from August 29th 2020.  Data recipients must upgrade their implementations to use version 2 by this time|August 29th 2020|
|Concurrent Consent|The target state concurrent consent solution covers various components of the Information Security profile is being phased in with alignment to the November 2020 implementation milestone set by the ACCC.  If this milestone moves then this obligation will also move.|November 1st 2020|
|[Token Revocation End Point](#token-revocation-end-point) | Data recipients may obsolete this end point from February 1st 2021.<br />Data holders may obsolete consent revocation via this end point from February 1st 2021, however they must still support oAuth token revocation. Data recipients must upgrade their implementations to use the Data Holder CDR Arrangement Revocation End Point by this time. | February 1st 2021|
|[Get Metrics V1](#get-metrics)|Data holders may obsolete version 1 of this end point from October 31st 2021. Data Holders who go live with consumer data sharing from July 1st 2021 MAY go live with only Get Metrics v2 support. The CDR Register must upgrade their implementation to use version 2 by this time|October 31st 2021|
|[Get Metrics V2](#get-metrics)|Version 2 of this end point must be made available by affected data holders by the end of July 2021|July 31st 2021|
|[Token Introspection claims](#introspection-end-point)|Whilst Data Holders must conform with the FAPI normative references, requiring the ``scope`` claim, the standards were clarified in v1.5.0 to clarify the minimum required set of claims to be supported by the Token Introspection end point. Data holders must support the ``scope`` claim not later than February 1st 2021|February 1st 2021|
|[Client Authentication for Data Recipients calling Data Holder](#client-authentication)| Client Authentication has been updated to align to upstream standards. From March 30th 2021, Data Holders must support multiple valid values for the audience claim for Data Recipient client authentication as outlined in that section. Data Recipients may continue to supply the URL of the endpoint being invoked, however according to upstream standards, it is recommended according to **[RFC8414]** that issuer identifier URL of the authorisation server should be used as the value of the audience.<br/>Until March 31st 2021, Data Recipients must continue to use the URL of the endpoint being invoked as the audience claim value. Data Holders must continue to accept and validate the URL of the endpoint being invoked. | March 30th 2021 |
| [Get Customer V1](#get-customer) | Data Holders providing valid ANZSIC and ANZSCO codes whose version is not ANZSIC_1292.0_2006_V2.0 and ANZSCO_1220.0_2013_V1.2 respectively must supply the appropriate version enumeration no later than July 1st 2021. The version codes allow data holders to reference the applicable document versions for the codes they hold. | July 1st 2021 |
| [Banking Term Deposit Account Types](#product-amp-account-components) | Data Holders who support maturity instructions for term deposits whereby funds are held in a facility or similar mechanism upon maturity must update relevant product data no later than July 1st 2021 | July 1st 2021 |
| [Token Introspection Endpoint claims](#end-points) | Mandatory claims were updated in accordance with RFC7662 | November 1st 2020 |
| [Amending Consent](#amending-authorisation-standards) |Data Holders MAY implement the following standards from July 1st 2021 when a CDR consumer is invited to amend a current authorisation as per rule 4.22A and the ADR has supplied a `cdr_arrangement_id`| July 1st 2021|
| [Amending Consent](#amending-authorisation-standards)|Data Holders MUST implement the following standards from November 1st 2021 when a CDR consumer is invited to amend a current authorisation as per rule 4.22A and the ADR has supplied a `cdr_arrangement_id`|November 1st 2021|
| [Standard Error Codes](#error-codes) | Data Recipients and Data Holders MAY implement the standard error codes from July 1st 2021 | July 1st 2021 |
| [Standard Error Codes](#error-codes) | Data Recipients and Data Holders MUST implement the standard error codes from February 1st 2022 | February 1st 2022 |
| [Standard Error Codes](#error-codes) | Data Holders MAY retire application-specific error codes in favour of standard error codes from November 1st 2022 | November 1st 2022 |


## Endpoint Version Schedule
A table-view of all endpoint versioning is available <a href='includes/endpoint-version-schedule/'>here</a>.

**Please note** this is currently experimental.
