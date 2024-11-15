## Definitions
In the following definition of NFRs specific terms have the following meanings:

- **Data Recipient Software Product**: For the purposes of these NFRs a Data Recipient Software Product is defined, inline with the definition given in the [CDR Federation](#cdr-federation), as a configured application presented in the register meta data. This acknowledges that a single accredited entity may be able to register multiple independent services (or apps) that can obtain authorisations from consumers independently of each other.
- **Shared Responsibility Data Request**: A request made to a secondary data holder by a Data Holder for designated data to fulfil a Consumer Data Request made by a Data Recipient Software Product.
- **Session**: A session is defined as the life span of a unique Access Token. Multiple API requests made with a single, valid, Access Token would be considered part of a single Session.
- **Customer Present**: Authenticated API requests made in direct response to interactions by the end customer using the digital services of the Data Recipient Software Product will be considered "Customer Present". Technically a data holder will define an API request as "Customer Present" if, and only if, the _x-fapi-customer-ip-address_ header is populated with a valid IP address of the end customer's device.
- **Customer Not Present**: Authenticated API requests that are not deemed to be "Customer Present".
- **Unattended**: A synonym of "Customer Not Present".
- **Authenticated**: API requests to API endpoints that the standards require to be protected by security mechanisms that enforce explicit customer authorisation.
- **Unauthenticated**: API requests to API endpoints that the standards deem to be publicly available. This implies that these endpoints may be accessed by any client without the client performing any authentication or authorisation actions.
- **High Traffic Period**: Any time in the 18 hour period between 6am and 12am (midnight) is considered to be a high traffic period.
- **Low Traffic Period**: Any time of the day not considered to be included in a high traffic period.
- **Large Payload**: An API which is capable of returning a large data response that would reasonably impose higher data retrieval times on the resource server. Typically bulk request endpoints.
