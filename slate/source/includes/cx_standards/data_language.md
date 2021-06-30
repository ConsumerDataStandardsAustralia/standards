## Data Language Standards

>
<img src="./images/cx_standards0.png" width=375px/> <br>
<font size="1"> Example of data language standards presented in a consumer-facing interaction, where [1] refers to Data cluster language, and [2] refers to Data permission language.</font>

In accordance with CDR Rule 8.11 (1)(d), a data standard must be made to provide descriptions of the types of data to be used by CDR participants in making and responding to requests. Adherence to this language will help ensure there is a consistent interpretation and description of the consumer data that will be shared across different CDR implementations.

|Area|CX Standard|
|--------------------|------------------------------------------|
|**Data Language Standards:** Language to be used|<p>Data Recipients and Data Holders **MUST** use data language standards to describe data clusters and permissions in consumer-facing interactions as outlined in [Table 1](#individual-consumer).</p><p>Data language standards **MUST** be used when CDR data is being requested, reviewed, or access to such data is withdrawn.</p><p>Data Recipients and Data Holders <b>MUST</b> use the appropriate data standards language for business consumers as denoted with an '\*' in [Table 1](#individual-consumer).</p><p>Data Recipients and Data Holders **SHOULD** expand on the proposed language where appropriate to communicate further details of what is being shared.</p><p>Additional details **MAY** include additional information in context, such as in-line help or tool tips, and/or additional permissions where they may exist.</p><p>Examples of permission details that **MAY** be used and provided as in-line help are denoted with an '&dagger;' in [Table 1](#individual-consumer)</p>|
|**Data Language Standards:** Detailed scope requests|<p>If a scenario requires it, Data Holders and Data Recipients **MUST** merge and amend *Basic* and *Detailed* data cluster and permission language to show that *Detailed* scopes include *Basic* data.</p><p>Data Holders and Data Recipients **MUST** use the alternative language denoted with an '&Dagger;' in [Table 1](#individual-consumer) (rows greyed out for clarity).</p><p>**Example:** A Data Recipient presents the *Detailed* data cluster in a data request to a consumer, but does not present the *Basic* data cluster. The *Detailed* scope includes *Basic* data, but this is not apparent to the consumer based on the data cluster language and permissions used for the *Detailed* scope.</p>|


**Table 1.**

### Individual Consumer

|Data cluster language|Permission language|Authorisation Scopes|
|----------------------|------------------------------|-------------------|
|**Name and occupation**|Name<br>Occupation|common:customer.basic:read|
|**Contact Details**|Phone;<br>Email address;<br>Mail address;<br>Residential address;|common:customer.detail:read|
|**Name, occupation, contact details &Dagger;**|Name;<br>Occupation;<br>Phone;<br>Email address;<br>Mail address;<br>Residential address;|common:customer.detail:read|


### Business consumer

|Data cluster language|Permission language|Authorisation Scopes|
|----------------------|------------------------------|-------------------|
|**Organisation profile** *|Agent name and role;<br>Organisation name;<br>Organisation numbers (<i>ABN or ACN</i>);&dagger;<br>Charity status;<br>Establishment date;<br>Industry;<br>Organisation type<br>Country of registration;|common:customer.basic:read|
|**Organisation contact details** *|Organisation address;<br>Mail address;<br>Phone number;|common:customer.detail:read|
|**Organisation profile and contact details** *&Dagger;|Agent name and role;<br>Organisation name;<br>Organisation numbers (<i>ABN or ACN</i>),&dagger; <br>Charity status;<br>Establishment date;<br>Industry;<br>Organisation type;<br>Country of registration;<br>Organisation address;<br>Mail address;<br>Phone number;<br>|common:customer.detail:read|


### Common

|Data cluster language|Permission language|Authorisation Scopes|
|----------------------|------------------------------|-------------------|
|**Account name, type and balance**|Name of account;<br>Type of account;<br>Account balance;|bank:accounts.basic:read|
|**Account numbers and features**|Account number;<br>Interest rates;<br>Fees;<br>Discounts;<br>Account terms;<br>Account mail address;|bank:accounts.detail:read|
|**Account balance and details&Dagger;**|Name of account;<br>Type of account;<br>Account balance;<br>Account number;<br>Interest rates;<br>Fees;<br>Discounts;<br>Account terms;<br>Account mail address;|bank:accounts.detail:read|
|**Transaction details**|Incoming and outgoing transactions;<br>Amounts;<br>Dates;<br>Descriptions of transactions;<br>Who you have sent money to and received money from; *(e.g. their name)&dagger;*|bank:transactions:read|
|**Direct debits and scheduled payments**|Direct debits;<br>Scheduled payments;|bank:regular_payments:read|
|**Saved payees**|Names and details of accounts you have saved; *(e.g. their BSB and Account Number, BPay CRN and Biller code, or NPP PayID)&dagger;*|bank:payees:read|
