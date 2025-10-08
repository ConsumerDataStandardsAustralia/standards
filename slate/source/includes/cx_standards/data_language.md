## Data Language Standards: Common



> <img src="./images/cx_standards0.png" width="375px"><br>
Example of data language standards presented in a consumer-facing interaction, where [1] refers to Data cluster language, and [2] refers to Data permission language.

In accordance with CDR Rule 8.11(1)(d), a data standard must be made to provide descriptions of the types of data to be used by CDR participants in making and responding to requests. Adherence to this language will help ensure there is a consistent interpretation and description of the consumer data that will be shared across different CDR implementations.

|Area|CX Standard|
|--------------------|------------------------------------------|
|**Data Language Standards:** Language to be used|<p>Data Recipients and Data Holders **MUST** use data language standards to describe data clusters and permissions in consumer-facing interactions. See the [Banking and Non-Bank Lending Language](#banking-and-non-bank-lending-language) section for language to be used when requesting banking and non-bank lending data; and the [Energy Language](#energy-language) section for language to be used when requesting energy data.</p><p>Data language standards **MUST** be used when CDR data is being requested, reviewed, or access to such data is withdrawn.</p><p>Data Recipients and Data Holders <b>MUST</b> use the appropriate data standards language for business consumers as denoted with an '\*' for the relevant data.</p><p>Data Recipients and Data Holders **SHOULD** expand on the proposed language where appropriate to communicate further details of what is being shared.</p><p>Additional details **MAY** include additional information in context, such as in-line help or tool tips, and/or additional permissions where they may exist.</p><p>Examples of permission details that **MAY** be used and provided as in-line help are denoted with an '&dagger;' for the relevant data.</p>|
|**Data Language Standards:** Detailed scope requests|<p>If a scenario requires it, Data Holders and Data Recipients **MUST** merge and amend *Basic* and *Detailed* data cluster and permission language to show that *Detailed* scopes include *Basic* data.</p><p>Data Holders and Data Recipients **MUST** use the alternative language denoted with an '&Dagger;' for the relevant scope(s). See the [Banking and Non-Bank Lending Language](#banking-and-non-bank-lending-language) section for banking and non-bank lending data and the [Energy Language](#energy-language) section for energy data.</p><p>**Example:** A Data Recipient presents the *Detailed* data cluster in a data request to a consumer but does not present the *Basic* data cluster. The *Detailed* scope includes *Basic* data, but this is not apparent to the consumer based on the data cluster language and permissions used for the *Detailed* scope.</p>|

## Customer Language: Common

See below for the customer data language standards, which are common across all sectors.

### Individual Consumer

|Data cluster language|Permission language|Authorisation Scopes|
|----------------------|------------------------------|-------------------|
|**Name and occupation**|Name;<br>Occupation;|`common:customer.basic:read`|
|**Contact details**|Phone;<br>Email address;<br>Mail address;<br>Residential address;|`common:customer.detail:read`|
|**Name, occupation, contact details** &Dagger;|Name;<br>Occupation;<br>Phone;<br>Email address;<br>Mail address;<br>Residential address;|`common:customer.detail:read`|


### Business consumer

|Data cluster language|Permission language|Authorisation Scopes|
|----------------------|------------------------------|-------------------|
|**Organisation profile** *|Agent name and role;<br>Organisation name;<br>Organisation numbers (<i>ABN or ACN</i>); &dagger;<br>Charity status;<br>Establishment date;<br>Industry;<br>Organisation type<br>Country of registration;|`common:customer.basic:read`|
|**Organisation contact details** *|Organisation address;<br>Mail address;<br>Phone number;|`common:customer.detail:read`|
|**Organisation profile and contact details** *&Dagger;|Agent name and role;<br>Organisation name;<br>Organisation numbers (<i>ABN or ACN</i>); &dagger;<br>Charity status;<br>Establishment date;<br>Industry;<br>Organisation type;<br>Country of registration;<br>Organisation address;<br>Mail address;<br>Phone number;<br>|`common:customer.detail:read`|

<br/>

## Profile Scope and Standard Claims: Common

In accordance with **[[OIDC]](#nref-OIDC)** [section 5.4](https://openid.net/specs/openid-connect-core-1_0.html#ScopeClaims) and [section 5.5](https://openid.net/specs/openid-connect-core-1_0.html#ClaimsParameter), this language refers to the **[[OIDC]](#nref-OIDC)** `profile` scope and request of individual claims for the authenticated End-User.

|Data cluster language |<div style="width:250px">Permission language</div> |Authorisation Scopes|Required|
|----------------------|---------------------------------------------------|--------------------|--------|
| **Name** | Full name and title(s) |[OIDC Profile scope](https://openid.net/specs/openid-connect-core-1_0.html#ScopeClaims) or one or more of these standard **[[OIDC]](#nref-OIDC)** claims\*:<br/>`name`<br/>`given_name`<br/>`family_name`<br/>`updated_at`<br/><br/>\*See [5.4. Requesting Claims using Scope Values on the OIDC website](https://openid.net/specs/openid-connect-core-1_0.html#ScopeClaims) for more information. | Required |
| **Contact details** | Phone number;<br/>Email address;<br/>Mail address; |One or more of these standard **[[OIDC]](#nref-OIDC)** claims\*:<br/>`email`<br/>`email_verified`<br/>`phone_number`<br/>`phone_number_verified`<br/>`address`<br/><br/>\*See [5.4. Requesting Claims using Scope Values on the OIDC website](https://openid.net/specs/openid-connect-core-1_0.html#ScopeClaims) for more information. | Optional |

**Note:** For non-individual consumers, claims available via the profile scope will only return the details of the authenticated End-User and not the organisation or non-individual consumer.

<br>

## Banking and Non-Bank Lending Language



### Banking and Non-Bank Lending Accounts
See below for the data language standards for the banking and non-bank lending account scopes:

|Data cluster language|<div style="width:250px">Permission language</div>|Authorisation Scopes|
|----------------------|------------------------------|-------------------|
|**Account name, type and balance**|Name of account;<br>Type of account;<br>Account balance;|`bank:accounts.basic:read`|
|**Account numbers and features**|Account number;<br>Interest rates;<br>Fees;<br>Discounts;<br>Account terms;<br>Account mail address;|`bank:accounts.detail:read`|
|**Account balance and details** &Dagger;|Name of account;<br>Type of account;<br>Account balance;<br>Account number;<br>Interest rates;<br>Fees;<br>Discounts;<br>Account terms;<br>Account mail address;|`bank:accounts.detail:read`|

### Transactions
See below for the data language standards for the transactions scope:

|Data cluster language|Permission language|Authorisation Scopes|
|----------------------|------------------------------|-------------------|
|**Transaction details**|Incoming and outgoing transactions;<br>Amounts;<br>Dates;<br>Descriptions of transactions;<br>Who you have sent money to and received money from; *(e.g. their name)* &dagger;|`bank:transactions:read`|

### Regular Payments
See below for the data language standards for the regular payments scope:

|Data cluster language|<div style="width:250px">Permission language</div>|Authorisation Scopes|
|----------------------|------------------------------|-------------------|
|**Direct debits and scheduled payments**|Direct debits;<br>Scheduled payments;|`bank:regular_payments:read`|

### Payees
See below for the data language standards for the payees scope:

|Data cluster language|Permission language|Authorisation Scopes|
|----------------------|------------------------------|-------------------|
|**Saved payees**|Names and details of accounts you have saved; *(e.g. their BSB and Account Number, BPAY CRN and Biller code, or NPP PayID)* &dagger;|`bank:payees:read`|

<br>

## Energy Language

### Energy Accounts
See below for the data language standards for the energy accounts scopes:

|Data cluster language|Permission language|Authorisation Scopes|
|----------------------|------------------------------|-------------------|
|**Accounts and plans**|Account and plan information;|`energy:accounts.basic:read`|
|**Account and plan details**|Account type;<br>Fees, features, rates, and discounts;<br>Additional account users;|`energy:accounts.detail:read`|
|**Account and plan details** &Dagger;|Account and plan information;<br>Account type;<br>Fees, features, rates, and discounts;<br>Additional account users;|`energy:accounts.detail:read`|

### Concessions
See below for the data language standards for the concession scope:

|Data cluster language|Permission language|Authorisation Scopes|
|----------------------|------------------------------|-------------------|
|**Concessions and assistance**|Concession type;<br>Concession information;|`energy:accounts.concessions:read`|

### Payments
See below for the data language standards for the payments schedule scope:

|Data cluster language|Permission language|Authorisation Scopes|
|----------------------|------------------------------|-------------------|
|**Payment preferences**|Payment and billing frequency;<br>Any scheduled payment details;|`energy:accounts.paymentschedule:read`|

### Billing
See below for the data language standards for the billing scope:

|Data cluster language|Permission language|Authorisation Scopes|
|----------------------|------------------------------|-------------------|
|**Billing payments and history**|Account balance;<br>Payment method;<br>Payment status;<br>Charges, discounts, credits;<br>Billing date;<br>Usage for billing period;<br>Payment date;<br>Invoice number;|`energy:billing:read`|

### NMI Standing Data
See below for the data language standards for the NMI standing data scopes:

|Data cluster language|<div style="width:250px">Permission language</div>|Authorisation Scopes|
|----------------------|------------------------------|-------------------|
|**Electricity connection**|National Meter Identifier (NMI);<br>Customer type;<br>Connection point details;|`energy:electricity.servicepoints.basic:read`|
|**Electricity meter**|Supply address;<br>Meter details;<br>Associated service providers;|`energy:electricity.servicepoints.detail:read`|
|**Electricity connection and meter** &Dagger;|National Meter Identifier (NMI);<br>Supply address;<br>Customer type;<br>Connection point details;<br>Meter details;<br>Associated service providers;|`energy:electricity.servicepoints.detail:read`|

### Distributed Energy Resources (DER)
See below for the data language standards for the Distributed Energy Resources (DER) scope:

|Data cluster language|Permission language|Authorisation Scopes|
|----------------------|------------------------------|-------------------|
|**Energy generation and storage**|Generation information;<br>Generation or storage device type;<br>Device characteristics;<br>Devices that can operate without the grid;<br>Energy conversion information;|`energy:electricity.der:read`|

### Electricity Usage
See below for the data language standards for the electricity usage scope:

|Data cluster language|Permission language|Authorisation Scopes|
|----------------------|------------------------------|-------------------|
|**Electricity usage**|Usage;<br>Meter details;|`energy:electricity.usage:read`|
