## CDR Federation
The CDR Federation will facilitate the secure exchange of consumer data and federation metadata between
multiple system entities which will assume one or more of the following roles:

-   **Data Holder**:
    -   Multiple Data Holders will be supported.
-   **Data Recipient**:
    -   Multiple Data Recipients will be supported.
-   **Software Product**:
    -   Multiple Software Products will be supported for each Data Recipient.
- 	**Register**:
    -   A register will be supported and will be maintained by the Australian Competition and Consumer Commission (ACCC) acting in its capacity as the _Registrar_ for the CDR.
- 	**Customer**:
    -   The authorising customer that is authenticated by a Data Holder.

### Data Holder
The Data Holder (DH) is a system entity that authenticates a Customer
(resource owner or user), as part of an authorisation process initiated by a Data
Recipient, and issues an authorisation for that Data Recipient to access the Customer's data via published APIs.

A Data Holder assumes the role of an **[OIDC]** [OpenID Provider](https://openid.net/specs/openid-connect-core-1_0.html#Overview).

For the purposes of this standard a single designated organisation **MAY** be represented via the Register as multiple separate Data Holders to support multiple brands or market identities.


#### Multi-Brand Support (Separate Issuers For Data Holder Brands)

**From July 4th 2022**

* Where a Data Holder has multiple brands, each brand **MUST** have a separate issuer.

### Secondary Data Holder
A Secondary Data Holder (SDH) is a system entity that is designated to provide CDR data but does so via a standard Data Holder acting as a gateway.  A Secondary Data Holder does not interact directly with Data Recipients and is not registered with the Register.


A request for data from a Secondary Data Holder by a standard Data Holder is known as a *Shared Responsibility Data Request*.


See the [Shared Responsibility](#shared-responsibility) section contains standards related to Secondary Data Holders and Shared Responsibility Data Requests.

### Data Recipient
A Data Recipient (DR) is a system entity that is accredited to collect CDR data from Data Holders or other DRs through authorised Software Products.

A Data Recipient **MUST** be accredited in order to participate in the CDR Federation. Accreditation rules for Data Recipients are beyond the scope of this artefact. The process of accreditation is managed by the CDR Registrar.

For the purposes of this standard a single accredited organisation is represented via the Register as a single Data Recipient and **MAY** be represented by multiple separate Software Products to support multiple applications or services.

### Software Product
A Data Recipient Software Product (DRSP) is a system entity that is authorised by a Data Holder to access consumer resources (APIs). A Software Product **MUST** capture consumer consent prior to commencing an authorisation process with a Data Holder.

A Software Product **MUST** be registered with the Registrar and approved for use in order to participate in the CDR Federation.

A Software Product **MAY** be registered for use across one or more sectors (e.g. banking and energy).

A Software Product assumes the role of an **[OIDC]** [Relying Party (Client)](https://openid.net/specs/openid-connect-core-1_0.html#Overview).

### Register

The Register is a central point of discovery for both Data Holders and Data
Recipients. Data Holders and Data Recipients **MUST** be created as entities in the Register in order for them to participate as members of the CDR Federation.  The functionality of the Register will include but will not be limited to:

- **Management of Identities and Access**: The Register will allow registered persons, on behalf of Data Holders and Data Recipients, to manage the metadata of their associated organisations and systems.
- **Management of Certificates**: The Register will facilitate the issuing, management and revocation of digital certificates.
- **Discoverability and Search**: The Register will expose APIs and Web Interfaces in order to support metadata queries across Register entities.

### Customer

For the purposes of this standard a single person or individual **MAY** be represented as multiple Customers according to the practice of the Data Holder according to their existing digital channels.
