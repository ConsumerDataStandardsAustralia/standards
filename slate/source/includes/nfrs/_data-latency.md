
## Data Latency
Within this proposal there is no specific requirement with regard to data latency (i.e. how up to date data should be). Instead, the requirement for data latency is that data presented via API endpoints should be commensurate to data presented via other primary digital channels.

For example, for a Bank that provides a mobile application as their primary digital experience, a balance presented via one of the balance endpoints should be the same as the balance presented through the mobile application.

To be able to manage network efficiency using normal mechanisms, a data holder making Shared Responsibility Data Requests may cache the results from the secondary data holder for a short period of time to accommodate repeated, duplicate, calls from the Data Recipient Software Product. Any such cache should be short lived.
