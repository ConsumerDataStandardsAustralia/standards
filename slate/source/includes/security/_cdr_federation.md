## CDR Federation
The CDR Federation will facilitate the secure exchange of consumer data and federation metadata between
multiple system entities which will assume one or more of the following roles:

-   **Data Holder**:
    -   Multiple Data Holders will be supported.
-   **Data Recipient**:
    -   Multiple Data Recipients will be supported.
- 	**Register**:
    -   A register will be supported and will be maintained by the Australian Competition and Consumer Commission (ACCC).
- 	**Customer**:
    -   The authorising customer that is authenticated by a Data Holder.

### Data Holder
The Data Holder (DH) is a system entity that authenticates a Customer
(resource owner or user), as part of an authorisation process initiated by a Data
Recipient, and issues an authorisation for that Data Recipient to access the Customer's data via published APIs.

A Data Holder assumes the role of an **[OIDC]** [OpenID Provider](https://openid.net/specs/openid-connect-core-1_0.html#Overview).

For the purposes of this standard a single designated organisation may be represented via the Register as multiple separate Data Holders to support multiple brands or market identities.

### Data Recipient
A Data Recipient (DR) is a system entity that is authorised by a Data Holder to access consumer resources (APIs). A Data Recipient MUST capture consumer consent prior to commencing an authorisation process with a Data Holder.

A Data Recipient MUST be accredited in order to participate in the CDR Federation. Accreditation rules for Data Recipients are beyond the scope of this artifact.

A Data Recipient assumes the role of an **[OIDC]** [Relying Party (Client)](https://openid.net/specs/openid-connect-core-1_0.html#Overview).

For the purposes of this standard a single accredited organisation may be represented via the Register as multiple separate Data Recipients to support multiple applications or services.

### Register
<aside class="warning">
NOTE: This section is reflective of the positioning of the Register in the CDR Rules Exposure Draft
</aside>

The Register is a central point of discovery for both Data Holders and Data
Recipients. Data Holders and Data Recipients must be created as entities in the Register in order for them to participate as members of the CDR Federation.  The functionality of the Register will include but will not be limited to:

- **Management of Identities and Access**: The Register will allow registered persons, on behalf of Data Holders and Data Recipients, to manage the metadata of their associated organisations and systems.
- **Management of Certificates**: The Register will facilitate the issuing, management and revocation of digital certificates.
- **Discoverability and Search**: The Register will expose APIs and Web Interfaces in order to support metadata queries across Register entities.

### Customer

For the purposes of this standard a single person or individual may be represented as multiple Customers according to the practice of the Data Holder according to their existing digital channels.
