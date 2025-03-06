## Data Recipient Requirements
Data Recipient Software Products will be limited by the traffic thresholds documented in the previous section. In addition to this Data Recipients are expected to design their services according to the following principles:

- Services should be designed to minimise traffic with Data Holders
- Services should be designed to be resilient in the case of the rejection of a call by a Data Holder due to traffic threshold breaches
- Services should schedule unattended calls to avoid high traffic periods
- Unattended calls should be managed to avoid short term bursts of traffic.

### Low Velocity Data Sets
For endpoints that provide access to data that is low velocity (i.e. the data does not change frequently) the Data Recipient Software Product is expected to cache the results of any data they receive and not request the same resource again until the data may reasonably have changed.

For low velocity data sets, if the same data is requested repeatedly a Data Holder may reject subsequent requests for the same data during a specified period.

Identified low velocity data sets are to be handled according to the following table noting that:

- the Velocity Time Period is a continuous period of time in which calls beyond a specific threshold **MAY** be rejected by the Data Holder
- the Allowable Call Volume is the threshold number of calls to the same resource for the same arrangement above which calls **MAY** be rejected by the Data Holder.

| Data Set | Impacted Endpoints | Velocity Time Period | Allowable Call Volume |
|----------|--------------------|----------------------|-----------------------|
| NMI Standing Data | Get Service Point Detail | 24 hours | 10 calls |
| Energy Usage Data | Get Usage For Service Point, Get Bulk Usage, Get Usage For Specific Service Points | 24 hours | 10 calls |
| DER Data | Get DER For Service Point, Get Bulk DER, Get DER For Specific Service Points | 24 hours | 10 calls |
