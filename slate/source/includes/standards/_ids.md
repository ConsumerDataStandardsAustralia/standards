## ID Permanence

Within these standards resource IDs are REQUIRED to comply with the following:

* An ID for a resource should only be specified in the API standard if an endpoint exists to
obtain detail for that resource or to change the state of the resource.
* If an ID is specified in the standards for a resource then it is mandatory and MUST be supplied, by the data holder, in accordance with the standards.
* If an ID is specified the ID value MUST be entirely arbitrary and have no inherent meaning. For instance, an ID should not be a combination of other fields or a string that can be parsed to extract meaningful information.
* IDs SHOULD be unique but that uniqueness may be within a clearly bounded context. For example, a beneficiary ID may be unique but only in the context of a specific account. The bounds of uniqueness should be clearly described in the standards definition for the endpoint.
* IDs MUST be immutable across sessions and consents but MUST NOT be transferable across Data Recipient Software Products. For example, "Data Recipient Software Product A" obtaining an account ID would get a different result from "Data Recipient Software Product B" obtaining the ID for the same account even if the same customer authorised the access. Under this constraint IDs cannot be usefully transferred between client organisations or data holders.
* IDs MUST NOT be transferable between different customers for the same Data Recipient Software Product. For example, a Data Recipient Software Product should obtain a different ID for a joint account if the ID was obtained independently using authorisations from both customers.
* In payloads the field name of _id_ should NEVER be used. Each ID field should be meaningfully named so that wherever that ID is used across multiple endpoints it always refers to the same ID set. For instance, the IDs for accounts would be represented in JSON in a field named _accountId_.
