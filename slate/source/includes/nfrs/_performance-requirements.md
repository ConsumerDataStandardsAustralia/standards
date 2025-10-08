## Performance Requirements



API endpoint performance will be measured in response time of individual API requests from receipt of request to delivery of response.

It is understood that different response times can be measured depending on which technical layer of an API implementation stack is instrumented and that not all of the technical layers between the Data Recipient Software Product and the Data Holder will be in the control of the Data Holder. As this is implementation specific it is expected that the Data Holder will ensure that the measurement of response time occurs as close to the Data Recipient Software Product as practicable.

In light of these considerations, the performance requirement for Data Holders is:

**95% of calls per hour responded to within a nominated threshold.**

The nominated threshold for each endpoint will be according to the following table:

|Tier|Response Time|Applies To…|
|----|-------------|-----------|
|Unauthenticated|**1500ms**|All Unauthenticated endpoints not otherwise specified in a separate threshold.|
|High Priority|**1000ms**|All calls to the following endpoints:<ul><li>All InfoSec endpoints including Dynamic Client Registration</li><li>CDR Arrangement Revocation</li></ul>The following unauthenticated endpoints:<ul>*Common*<li>Get Status</li><li>Get Outages</li></ul>Customer Present calls to the following endpoints:<ul>*Banking*<li>Get Accounts</li><br>*Energy*<li>Get Energy Accounts</li><li>Get Energy Account Detail</li><li>Get Balance For Energy Account</li><li>Get Invoices For Account</li><br>*Common*<li>Get Customer</li><li>Get Customer Detail</li></ul>|
|Low Priority|**1500ms**|Customer Present calls to the following endpoints:<ul>*Banking*<li>Get Account Detail</li><li>Get Account Balance</li><li>Get Bulk Balances</li><li>Get Balances For Specific Accounts</li><li>Get Transactions For Account</li><li>Get Transaction Detail</li><li>Get Payees</li><li>Get Payee Detail</li><li>Get Direct Debits For Account</li><li>Get Scheduled Payments For Account</li><li>Get Scheduled Payments Bulk</li></li><li>Get Scheduled Payments For Specific Accounts</li><li>Get Instalment Plans For Account</li><li>Get Instalment Plans Bulk</li><br>*Energy*<li>Get Agreed Payment Schedule</li><li>Get Concessions</li><li>Get Bulk Balances for Energy</li><li>Get Balances For Specific Energy Accounts</li><li>Get Bulk Invoices</li><li>Get Invoices For Specific Accounts</li><li>Get Billing For Account</li></ul>|
|Unattended|**4000ms**|Unattended calls to the following endpoints:<ul>*Banking*<li>Get Accounts</li><li>Get Account Detail</li><li>Get Account Balance</li><li>Get Bulk Balances</li><li>Get Balances For Specific Accounts</li><li>Get Transactions For Account</li><li>Get Transaction Detail</li><li>Get Payees</li><li>Get Payee Detail</li><li>Get Direct Debits For Account</li><li>Get Scheduled Payments For Account</li><li>Get Scheduled Payments Bulk</li><li>Get Scheduled Payments For Specific Accounts</li><li>Get Instalment Plans For Account</li><li>Get Instalment Plans Bulk</li><br>*Energy*<li>Get Energy Accounts</li><li>Get Energy Account Detail</li><li>Get Balance For Energy Account</li><li>Get Invoices For Account</li><li>Get Agreed Payment Schedule</li><li>Get Concessions</li><li>Get Bulk Balances for Energy</li><li>Get Balances For Specific Energy Accounts</li><li>Get Bulk Invoices</li><li>Get Invoices For Specific Accounts</li><li>Get Billing For Account</li><br>*Common*<li>Get Customer</li><li>Get Customer Detail</li><br>*Admin*<li>Metadata Update</li><li>Get Metrics</li></ul>|
|Large Payload|**6000ms**|Any calls to the following endpoints:<ul>*Banking*<li>Get Bulk Direct Debits</li><li>Get Direct Debits For Specific Accounts</li><br>*Energy*<li>Get Bulk Billing</li><li>Get Billing For Specific Accounts</li></ul>|
|Secondary Request|**1000ms** (for data holders)<br/>**1500ms** (for secondary data holders)|Customer Present calls to the following endpoints:<ul>*Energy*<li>Get Service Points</li><li>Get Service Point Detail</li><li>Get DER For Service Point</li></ul>|
|Large Secondary Request|**1500ms** (for data holders)<br/>**4500ms** (for secondary data holders)|Unattended calls to the following endpoints:<ul>*Energy*<li>Get Service Points</li><li>Get Service Point Detail</li><li>Get DER For Service Point</li></ul>All calls to the following endpoints:<ul>*Energy*<li>Get Bulk Usage</li><li>Get Usage For Service Point</li><li>Get Usage For Specific Service Points</li><li>Get Bulk DER</li><li>Get DER For Specific Service Points</li></ul>|Customer Present calls to the following endpoints:<ul>*Energy*<li>Get Service Points</li><li>Get Service Point Detail</li><li>Get DER For Service Point</li></ul>|

Note that calls initiated in excess of a Traffic Threshold (see next section) may be excluded from the performance requirement.
