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
