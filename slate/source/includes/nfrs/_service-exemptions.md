
## Exemptions To Protect Service
In the event of the following extreme circumstances data holders will be able to obtain relief from non-functional requirements:

- Periods of time when the digital channels for the data holder are the target for a distributed denial of service or equivalent form of attack (this should result in http error `429 Too Many Requests` being returned).
- A significant increase in traffic from a poorly designed or misbehaving Data Recipient Software Product (this should result in http error `429 Too Many Requests` being returned).
- If the data holder identifies a situation where there is the potential for physical or financial harm or abuse (this should result in http error `403 Forbidden` being returned).
