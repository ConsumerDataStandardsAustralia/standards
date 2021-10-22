# Non-functional Requirements

The non-functional requirements (NFRs) for the Consumer Data Right regime cover a number of considerations:

- Minimum performance and availability expectations for data holders.  Included to ensure a reliable and performant service is offered to Data Recipients and customers.
- Maximum traffic expectations for data holders.  Included to ensure there is a ceiling for the amount of traffic that a data holder is expected to service.
- Requirements for reporting of performance.  Included to provide transparency of performance without the need for time consuming auditing or inspection.
- Requirements for data latency and quality.  Included to give a clear indication to the depth and recency of the data available under the regime.
- Limitations on the number of calls that a Data Recipient Software Product can make to a single provider.  Included to protect data holders from poorly designed or overly transactional Data Recipient implementations.

## Definitions
In the following definition of NFRs specific terms have the following meanings:

- **Data Recipient Software Product**: For the purposes of these NFRs a Data Recipient Software Product is defined, inline with the definition given in the [CDR Federation](#cdr-federation), as a configured application presented in the register meta data.  This acknowledges that a single accredited entity may be able to register multiple independent services (or apps) that can obtain authorisations from consumers independently of each other.
- **Secondary Responsibility Request**: A request made to a secondary data holder by a Data Holder for designated data to fulfil a Consumer Data Request made by a Data Recipient Software Product.
- **Session**: A session is defined as the life span of a unique Access Token.  Multiple API requests made with a single, valid, Access Token would be considered part of a single Session.
- **Customer Present**: Authenticated API requests made in direct response to interactions by the end customer using the digital services of the Data Recipient Software Product will be considered “Customer Present”.  Technically a data holder will define an API request as “Customer Present” if, and only if, the `x-fapi-customer-ip-address` header is populated with a valid IP address of the end customer’s device.
- **Customer Not Present**: Authenticated API requests that are not deemed to be “Customer Present”
- **Unattended**: A synonym of “Customer Not Present”
- **Authenticated**: API requests to API end points that the standards require to be protected by security mechanisms that enforce explicit customer authorisation
- **Unauthenticated**: API requests to API end points that the standards deem to be publicly available.  This implies that these end points may be accessed by any client without the client performing any authentication or authorisation actions
- **High Traffic Period**: Any time in the 18 hour period between 6am and 12am (midnight) is considered to be a high traffic period
- **Low Traffic Period**: Any time of the day not considered to be included in a high traffic period.
- **Large Payload**: An API which is capable of returning a large data response that would reasonably impose higher data retrieval times on the resource server. Typically bulk request end points.

## Session Requirements
A expiry time of a unique session should be set according to the statements included in the [Security Profile](#security-profile).

After a unique session is expired it is expected that the Data Recipient Software Product, for the same customer, may establish a new session as long as the authorisation is still valid.

## Availability Requirements
Service availability requirement for data holders and secondary data holders:
*99.5% per month*

The definition of a period of unavailability is any period of time when any of the API end points defined in the standard is unable to reliably provide a successful response to an appropriately constructed request.

The availability requirement applies to both authenticated and unauthenticated end points.

The availability requirement does not include planned outages.  Planned outages should be:

- Commensurate in length and frequency to other primary digital channels offered by the data holder,
- Published to Data Recipient Software Products with at least one week lead time for normal outages,
- May occur without notification if the change is to resolve a critical service or security issue.

The unavailability of a secondary data holder will mean that some requests cannot be fulfilled by a data holder making a secondary responsibility request.  This will not be taken to mean that the data holder is unavailable.

## Performance Requirements

API end point performance will be measured in response time of individual API requests from receipt of request to delivery of response.

It is understood that different response times can be measured depending on which technical layer of an API implementation stack is instrumented and that not all of the technical layers between the Data Recipient Software Product and the Data Holder will be in the control of the Data Holder.  As this is implementation specific it is expected that the Data Holder will ensure that the measurement of response time occurs as close to the Data Recipient Software Product as practicable.

In light of these considerations, the performance requirement for Data Holders is:

**95% of calls per hour responded to within a nominated threshold**

The nominated threshold for each end point will be according to the following table:

|Tier|Response Time|Applies To…|
|----|-------------|-----------|
|Unauthenticated|**1500ms**|All Unauthenticated end points not otherwise specified in a separate threshold.|
|High Priority|**1000ms**|All calls to the following end points:<ul><li>All InfoSec end points including Dynamic Client Registration</li><li>CDR Arrangement Revocation</li></ul>The following Unauthenticated end points:<ul>*Common*<li>Get Status</li><li>Get Outages</li></ul>Customer Present calls to the following end points:<ul>*Banking*<li>Get Accounts</li>*Energy*<li>Get Accounts</li><li>Get Account Detail</li><li>Get Balance For Account</li><li>Get Invoices For Account</li>*Common*<li>Get Customer</li><li>Get Customer Detail</li></ul>|
|Low Priority|**1500ms**|Customer Present calls to the following end points:<ul>*Banking*<li>Get Account Detail</li><li>Get Account Balance</li><li>Get Bulk Balances</li><li>Get Balances For Specific Accounts</li><li>Get Transactions For Account</li><li>Get Transaction Detail</li><li>Get Payees</li><li>Get Payee Detail</li><li>Get Direct Debits For Account</li><li>Get Scheduled Payments For Account</li><li>Get Scheduled Payments Bulk</li></li><li>Get Scheduled Payments For Specific Accounts</li>*Energy*<li>Get Agreed Payment Schedule</li><li>Get Concessions</li><li>Get Bulk Balances</li><li>Get Balances For Specific Accounts</li><li>Get Bulk Invoices</li><li>Get Invoices For Specific Accounts</li><li>Get Billing For Account</li></ul>|
|Unattended|**4000ms**|Unattended calls to the following end points that are not Large Payload end points:<ul><li>High Priority Authenticated end points</li><li>Low Priority Authenticated end points</li><li>All Admin end points.</li></ul>|
|Large Payload|**6000ms**|Any Unattended calls to the following end points:<ul>*Banking*<li>Get Bulk Direct Debits</li><li>Get Direct Debits For Specific Accounts</li>*Energy*<li>Get Bulk Billing</li><li>Get Billing For Specific Accounts</li></ul>|
|Secondary Request|**1000ms** (for data holders)<br/>**1500ms** (for secondary data holders)|Customer Present calls to the following end points:<ul>*Energy*<li>Get Service Points</li><li>Get Service Point Detail</li><li>Get DER For Service Point</li></ul>|
|Large Secondary Request|**1500ms** (for data holders)<br/>**4500ms** (for secondary data holders)|Unattended calls to the following end points:<ul>*Energy*<li>Get Service Points</li><li>Get Service Point Detail</li><li>Get DER For Service Point</li></ul>All calls to the following end points:<ul>*Energy*<li>Get Bulk Usage</li><li>Get Usage For Service Point</li><li>Get Usage For Specific Service Points</li><li>Get Bulk DER</li><li>Get DER For Specific Service Points</li></ul>|Customer Present calls to the following end points:<ul>*Energy*<li>Get Service Points</li><li>Get Service Point Detail</li><li>Get DER For Service Point</li></ul>|

Note that calls initiated in excess of a traffic threshold (see next section) may be excluded from the performance requirement.

## Traffic Thresholds
Calls in excess of the following traffic thresholds will be able to be freely throttled or rejected by a data holder without impact to their performance or availability requirements.

Traffic thresholds will be set using the following metrics:

- Number of sessions per day – the number of individual sessions initiated in a calendar day.
- Transactions Per Second (TPS) – the number of concurrent transactions each second.
- Number of calls – the number of end point calls initiated for a specified duration.

For Customer Present and authorisation traffic the following traffic thresholds will apply:

- Unlimited sessions per day
- 10 TPS per customer
- 50 TPS per Data Recipient Software Product

For Unattended traffic the following traffic thresholds will apply for low traffic periods:

- 20 sessions per day, per customer, per Data Recipient Software Product
- 100 total calls per session
- 5TPS per session
- 50 TPS per Data Recipient Software Product

For Unattended traffic during high traffic periods only best effort support is required.

For secure traffic (both Customer Present and Unattended) the following traffic thresholds will apply:

- 300 TPS total across all consumers

For Public traffic (i.e. traffic to unauthenticated end points) the following traffic thresholds will apply:

- 300 TPS total across all consumers (additive to secure traffic)

As traffic from Data Recipient Software Products to Data Holders will be shaped by the thresholds above, there are no specific thresholds applicable to secondary Data Holders.

## Data Recipient Requirements
Data Recipient Software Products will be limited by the traffic thresholds documented in the previous section.  In addition to this Data Recipients are expected to design their services according to the following principles:

- Services should be designed to minimise traffic with Data Holders
- Services should be designed to be resilient in the case of the rejection of a call by a Data Holder due to traffic threshold breaches
- Services should schedule unattended calls to avoid high traffic periods
- Unattended calls should be managed to avoid short term bursts of traffic

## Reporting Requirements
The mechanism for reporting will be via the CDR [Administration Endpoints](#admin-apis).

The following information is to be reported:

- Availability for current month
- Availability for each of the previous twelve months
- Percentage of calls within performance threshold for current day
- Percentage of calls within performance threshold for each of the previous seven days
- Number of calls within each performance tier for current day
- Number of calls within each performance tier for each of the previous seven days
- Average response time within each performance tier for current day
- Average response time within each performance tier for each of the previous seven days
- Number of sessions for current day
- Number of sessions for each of the previous seven days
- Peak total TPS for current day
- Peak total TPS for each of the previous seven days
- Average TPS for current day
- Average TPS for each of the previous seven days
- Number of calls resulting in error due to server execution for current day
- Number of calls resulting in error due to server execution for each of the previous seven days
- Number of calls rejected due to traffic thresholds for current day
- Number of calls rejected due to traffic thresholds for each of the previous seven days
- Number of customers with active authorisations
- Number of Data Recipient Software Products with active authorisations

## Data Latency
Within this proposal there is no specific requirement with regard to data latency (ie. how up to date data should be).  Instead, the requirement for data latency is that data presented via API end points should be commensurate to data presented via other primary digital channels.

For example, for a Bank that provides a mobile application as their primary digital experience, a balance presented via one of the balance end points should be the same as the balance presented through the mobile application.

To be able to manage network efficiency using normal mechanisms, a data holder making secondary responsibility requests may cache the results from the secondary data holder for a short period of time to accommodate repeated, duplicate, calls from the Data Recipient Software Product.  Any such cache should be short lived.

## Data Quality
Data holders are required to take reasonable steps to ensure that CDR data, having regard to the purpose for which it is held, is accurate and up to date.

A data holder is required to be able to demonstrate that reasonable steps to maintain data quality are being undertaken.


## Exemptions To Protect Service
In the event of the following extreme circumstances data holders will be able to obtain relief from non-functional requirements:

- Periods of time when the digital channels for the data holder are the target for a distributed denial of service or equivalent form of attack (this should result in http error `429 Too Many Requests` being returned).
- A significant increase in traffic from a poorly designed or misbehaving Data Recipient Software Product (this should result in http error `429 Too Many Requests` being returned).
- If the data holder identifies a situation where there is the potential for physical or financial harm or abuse (this should result in http error `403 Forbidden` being returned).
