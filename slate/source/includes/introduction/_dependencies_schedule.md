## Register Dependency Schedule

```diff
+ Added Register dependency schedule table to differentiate Register delivery from Participant future dated obligations
+ Added Get Data Holder Brands Summary API to the dependency schedule
```

The Register APIs dependency schedule specifies the latest dates the CDR Register can release API versions. Delivery past these dates may impact the ability for data holders and data recipients to meet their future dated obligations.



The table below highlights these dependency dates.

|Section|Description|Dependency Date|
|-------|-----------|---------------|
|[Get Data Holder Brands V2](#get-data-holder-brands)|CDR Register must introduce version 2 of this end point by November 15th 2022|November 15th 2022|
|[Get Software Statement Assertion (SSA) V3](#get-software-statement-assertion-ssa)|CDR Register must introduce version 3 of this end point by November 15th 2022|November 15th 2022|
|[Get Software Products Statuses V2](#get-software-products-statuses)|CDR Register must introduce version 2 of this end point by November 15th 2022|November 15th 2022|
|[Get Data Recipient Statuses V2](#get-data-recipients-statuses)|CDR Register must introduce version 2 of this end point by November 15th 2022|November 15th 2022|
|[Get Data Recipients V3](#get-data-recipients)|CDR Register must introduce version 3 of this end point by November 15th 2022|November 15th 2022|
|[Get Data Holder Statuses V1](#get-data-holder-statuses)|CDR Register must introduce version 1 of this end point by November 15th 2022|November 15th 2022|
|[Get Data Holder Brands Summary V1](#get-data-holder-brands-summary)|CDR Register must introduce version 1 of this end point by October 1st 2022|October 1st 2022|


The actual release dates for the Register APIs are expected to occur prior to these dates and are not defined by the Standards.

The Register API release schedule will be made available in the future.
