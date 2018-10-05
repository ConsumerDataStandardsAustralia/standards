## URI Structure

>Some example URIs that meet this standard are:  
`http://www.bank.com.au/api/cds-au/v1/banking/accounts`  
`http://www.bank.com.au/complex/uri/taxonomy/cds-au/v1/banking/products`  
`http://www.energyretailer.com.au/api/cds-au/v1/energy/usage`

The URI structure for API end points in the standards MUST be implemented as follows:  
`<provider path> / cds-au / <version> / <industry> / <resource>`

The components of this URI structure are described as follows:

* **Provider Path**: The provider path is a base path set by the data provider. It can be any URI desired by the provider.
* **“cds-au”**: This is a static string representing the end points defined by the Consumer Data Standards for Australia. This static string allows for separation from other APIs available at the same base provider path and also allows for extension if the standards are adopted by another jurisdiction in whole or in part.
* **Version**: The version of the high level standards. This is not the version of the endpoint or the payload being requested but the version of the overall standards being applied. This version number will be “v” followed by a the version as a positive integer (e.g. v1, v12 or v76).
* **Industry**: A static string used to separate APIs for a specific industry. As standards for new industries are defined the list of industry strings will be extended.
* **Resource**: The URI for the specific resource requested. This end point URI will be defined as part of the end point definitions for each API group.

Note that the currently accepted values for the `Industry` component of the base path are:

* **banking** – for APIs related to banking and potentially wider financial services data
* **energy** – for APIs related to the energy distribution industry
* **telco** – for APIs related to telecommunications
* **common** – for APIs that potentially span industries
