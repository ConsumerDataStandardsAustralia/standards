## URI Structure
>Some example URIs that meet this standard are:  

```
1. https://www.bank.com.au/api/cds-au/v1/banking/accounts
2. https://www.bank.com.au/api/cds-au/v1/banking/accounts/abc123/transactions/?x=y#bar
3. https://www.bank.com.au/complex/uri/taxonomy/cds-au/v1/banking/products?page=2
4. https://www.energyretailer.com.au/api/cds-au/v1/energy/usage
5. https://www.energyretailer.com.au/api/cds-au/v1/ACME/apply
```

>The holder path for each example is:  

```
1. www.bank.com.au/api
2. www.bank.com.au/api
3. www.bank.com.au/complex/uri/taxonomy
4. www.energyretailer.com.au/api
5. www.energyretailer.com.au/api
```

>The Base Path for each example is:  

```
1. https://www.bank.com.au/api/cds-au/v1/banking
2. https://www.bank.com.au/api/cds-au/v1/banking
3. https://www.bank.com.au/complex/uri/taxonomy/cds-au/v1/banking
4. https://www.energyretailer.com.au/api/cds-au/v1/energy
5. https://www.energyretailer.com.au/api/cds-au/v1/ACME
```

>The Resource Path for each example is:  

```
1. https://www.bank.com.au/api/cds-au/v1/banking/accounts
2. https://www.bank.com.au/api/cds-au/v1/banking/accounts/abc123/transactions
3. https://www.bank.com.au/complex/uri/taxonomy/cds-au/v1/banking/products
4. https://www.energyretailer.com.au/api/cds-au/v1/energy/usage
5. https://www.energyretailer.com.au/api/cds-au/v1/ACME/apply
```

The URI structure for API end points in the standards MUST be implemented as follows:  
<pre class="display-inline light-box highlight">
<b>uri-string</b> =  "https://" <b>\<holder-path\></b> "/" <b>cds-au</b> "/" <b>\<version\></b> "/" ( <b>\<industry\></b> | <b>\<HID\></b> ) "/" <b>\<resource\></b>

The components of this URI structure are described as follows:
<ul><li><b>\<holder-path\></b>  = string.
The holder path is a path set by the data holder. It can be any URI desired by the holder. While all authenticated end points must be accessible under the same holder path the data holder may stipulate a different holder path for unauthenticated end points.</li>
<li><b>cds-au</b>         = "cds-au" string.
This is a static string representing the end points defined by the Consumer Data Standards for Australia. This static string allows for separation from other APIs available at the same base holder path and also allows for extension if the standards are adopted by another jurisdiction in whole or in part.</li>
<li><b>\<version\></b>      = "v1" string.
The major version of the high level standards. This is not the version of the endpoint or the payload being requested but the version of the overall standards being applied. This version number will be “v” followed by the major version of the standards as a positive integer (e.g. v1, v12 or v76).</li>
<li><b>\<industry\></b>     = banking / energy / telco / common
A static string used to separate APIs for a specific industry. As standards for new industries are defined the list of industry strings will be extended.
Note that the currently accepted values for the `industry` component of the Base Path are:
<ul><li><b>banking</b> = "banking" string. For APIs related to banking and potentially wider financial services data,</li><li><b>energy</b>  = "energy" string. For APIs related to the energy distribution industry,</li><li><b>telco</b>   = "telco" string. For APIs related to telecommunications,</li><li><b>common</b>  = "common" string. For APIs that potentially span industries.</li></ul></li>
<li><b>\<HID\></b>          = string.
The Holder Identifier used to denote extension API categories for a specific holder.</li>
<li><b>\<resource\></b>     = string.
The URI for the specific resource requested. This end point URI will be defined as part of the end point definitions for each API group.
</li></ul>
</pre>
<div class="clear both"></div>

<a id="uri-base-path"></a>
**Base Path**  
Base Path is intended to be the portion of the URL up to but not including the endpoint resource. In other words, the base path is the portion of the URL up to and including the `<industry>` or `<HID>` component. The Base Path string is defined as follows:

`https:// <holder-path> / cds-au / <version> / ( <industry> | <HID> )`

<a id="uri-resource-path"></a>
**Resource Path**  
The Resource Path is intended to be the portion of the URL including the Base Path and resource location. The Resource Path string is defined as: `<base-path> / <resource>`.

### Resource URIs

Resources that are collections, and members of collections, will follow the [JSONAPI.org](http://jsonapi.org) recommendation.

Under this model, collections, individual members and collection sub-resources would be accessed as follows:

 <span></span> | <span></span>
-|-
`GET …/accounts` | Returns an array of accounts
`GET …/accounts/{id}` | Returns the detail of a specific account
`GET …/accounts/transactions` | Returns the transactions of multiple accounts
`GET …/accounts/{id}/transactions` | Returns the transactions of a specific account
`POST …/accounts` | Create a new account
`POST …/accounts/search` | Returns an array of accounts based on a complex query

The final example above represents a complex query accessed via a POST request.  In this situation the POST URI should be applied to a sub-resource of the collection.  A POST to a collection is reserved for the creation of a new collection member.

If no valid sub-resource exists then a dedicated sub-resource should be created, such as the “search” URI listed in the example above.
