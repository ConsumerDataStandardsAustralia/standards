## Data Language Standards


>
<img src="./images/cx_standards0.png" width=375px/> <br>
<font size="1"> Example of data language standards presented in a consumer-facing interaction, where [1] refers to Data cluster language, and [2] refers to Data permission language.</font>

In accordance with CDR Rule 8.11 (1)(d), a data standard must be made to provide descriptions of the types of data to be used by CDR participants in making and responding to requests. Adherence to this language will help ensure there is a consistent interpretation and description of the consumer data that will be shared across different CDR implementations.

|Area|CX Standard|
|--------------------|------------------------------------------|
|**Data Language Standards:** Language to be used|Data Recipients and Data Holders **MUST** use data language standards to describe data clusters and permissions in consumer-facing interactions as outlined in [Table 1](#individual-consumer) Data language standards <b>MUST</b> be used when CDR data is being requested, reviewed, or access to such data is withdrawn.<ul><li>Data language standards **MUST** be used when CDR data is being requested, reviewed, or access to such data is withdrawn.</ul></li><ul><li>Data Recipients and Data Holders <b>MUST</b> use the appropriate data standards language for business consumers as denoted with an ‘\*’ in [Table 1](#individual-consumer)</ul></li><ul><li>Data Recipients and Data Holders **SHOULD**  expand on the proposed language where appropriate to communicate further details of what is being shared.</ul></li><ul><li>Additional details **MAY** include additional information in context, such as in-line help or tool tips, and/or additional permissions where they may exist. denoted with an ‘&dagger;’ in [Table 1](#individual-consumer)</li><li>Examples of permission details that **MAY** be used and provided as in-line help are denoted with an ‘&dagger;’ in [Table 1](#individual-consumer)</li></ul></ul>|
|**Data Language Standards:** Detailed scope requests|If a scenario requires it, Data Holders and Data Recipients **MUST** merge and amend Basic and Detailed data cluster and permission language to show that Detailed scopes include Basic data. <ul><li>Data Holders and Data Recipients **MUST** use the alternative language denoted with an ‘&Dagger;’ in [Table 1](#individual-consumer) (rows greyed out for clarity).</ul></li>|


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

## Accessibility Standards


|Area|CX Standard|
|-------------------|------------------------------|
|**Accessibility**  |At a minimum, all CDR participants **MUST** seek to comply with the following accessibility guidelines throughout the Consent Model.<ul><li>These standards **SHOULD** be assessed, tested, and refined further by accessibility consultants directly involved in implementation.</li></ul>|
| **Accessibility** <br> Content distinction | Data recipients and data holders **MUST** seek to have all aspects of the Consent Model comply with [WCAG 1.4](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast.html) Data recipients and data holders **MUST** seek to have all aspects of the Consent Model comply with. This will make it easier to see and hear content, including separate foreground information from the background. This will make it easier to see and hear content, including separate foreground information from the background.  |
| **Accessibility** <br> Keyboard functionality| Data recipients and data holders **MUST** seek to have all aspects of the Consent Model comply with [WCAG 2.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/keyboard-operation.html). This will make all functionality available from a keyboard.|
| **Accessibility** <br> Pointer interactions  | Data recipients and data holders **MUST** seek to have all aspects of the Consent Model comply with [WCAG 2.5](https://www.w3.org/WAI/WCAG21/Understanding/pointer-accessible). This will make it easier to operate functionality using various input devices|
| **Accessibility** <br> Reading experiences| Data recipients and data holders **MUST** seek to have all aspects of the Consent Model comply with [WCAG 3.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/meaning.html). This will make text content readable and understandable|
| **Accessibility** <br> Input assistance  | Data recipients and data holders **MUST** seek to have all aspects of the Consent Model comply with [WCAG 3.3](https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error.html). This will help users avoid and correct mistakes.|

## Consent Standards

|Area|CX Standard|
|-------------------|------------------------------|
|**Seeking consent**|Data recipients **MUST** notify consumers of redirection prior to authentication.|

## Authentication Standards

|Area|CX Standard|
|-------------------|------------------------------|
|**Authentication:**<br>‘One Time Password’|Data holders and data recipients **MUST** clearly refer to a “One Time Password” in consumer-facing interactions and communications. The use of the term “One Time Password” **MAY** be presented alongside an existing term used by a data holder (e.g. Netcode, one time pin etc.).|
|**Authentication:**<br >Passwords|Data holders and data recipients **MUST** state in consumer-facing interactions and communications that services utilising the CDR do not need access to consumer passwords for the purposes of sharing data. The exact phrasing of this is at the discretion of the data holder and data recipient.|
|**Authentication:**<br> Password link  | Data holders **MUST NOT** include forgotten details links in redirect screens. The inclusion of such links is considered to increase the likelihood of phishing attacks.|
|**Authentication:**<br>OTP expiry|Data holders **MUST** communicate the expiry period of the OTP to the consumer in the authentication flow.|

## Authorisation Standards

|Area|CX Standard|
|-------------------|------------------------------|
|**Authorisation** & Account selection |Data holders **MUST** allow the consumer to select which of their accounts to share data from if the data request includes account-specific data and if there are multiple accounts available. The Data holder **MAY** omit this step if none of the data being requested is specific to an account (e.g. Saved Payees).<br><br>  Data holders **MAY** add a ‘profile selection’ step or equivalent prior to the account selection step if a single identifier provides access to different customer accounts. For example, one customer ID may give access to business customer and individual customer accounts. The ‘profile selection’ step **SHOULD** only be considered if it is an existing customer experience, and **SHOULD** be as minimal as possible to avoid introducing unwarranted friction (having regard to CDR Rule 4.24).<ul><li>If certain accounts are unavailable to share, data holders **SHOULD** show these unavailable accounts in the account-selection step.</li><ul><li>Data holders **SHOULD** communicate why these accounts cannot be selected, and this **SHOULD** be communicated as in-line help or as a modal to reduce on-screen content.</li><li>Data holders **MAY** provide instructions on how to make these accounts available to share, and this **SHOULD** be communicated as in-line help or as a modal to reduce on-screen content.</li><li>*Note:* Unavailable accounts are to be interpreted in accordance with the rules on eligible consumers and required consumer data.</li></ul></ul>|
|**Authorisation:**<br>Account confirm|Data holders **MUST** show which accounts the data is being shared from prior to confirming authorisation if the data request includes account-specific data. The data holder **MAY** omit this information if none of the data being requested is specific to an account (e.g. Saved Payees).|


## Amending Authorisation Standards
|Area|CX Standard|
|-------------------|------------------------------|
|**Authorisation:**<br/>Amending consent | **Effective from July 2021**: <br>The following standards apply when a Data Holder invites a CDR consumer to amend a current authorisation as per rule 4.22A and the ADR has supplied a *cdr_arrangement_id:*<br><br>
|Customer Profile|Where customer profile selection applies, Data Holders **MAY** omit the profile selection step and assume the customer profile associated with the existing authorisation. Data Holders **MAY** indicate which profile the authorisation relates to during the authorisation process.|
|Account Selection|Where account selection applies, Data Holders **MAY** pre-select accounts that were associated with the previous authorisation provided these accounts remain eligible and available. Data Holders **MAY** allow these accounts to be amended, and **MAY** provide information regarding the pre-selection of accounts.|
|Changing Attributes|Data Holders **MAY** indicate where a dataset is being added to an authorisation or a disclosure duration is being amended. Data Holders **MAY** apply this standard to other changing attributes, but this **MUST ONLY** apply where the attribute in the new authorisation differs to that of the previous authorisation. How a changed attributed is signified is at the Data Holder’s discretion.|

<br>Refer also to [Future Dated obligations](#future-dated-obligations)<br>

|Area|CX Standard|
|-------------------|------------------------------|
|**Authorisation:**<br/>Amending consent | **Effective from November 2021**: <br>The following standards apply when a Data Holder invites a CDR consumer to amend a current authorisation as per rule 4.22A and the ADR has supplied a *cdr_arrangement_id*:|
|Customer Profile|Where customer profile selection applies, Data Holders **SHOULD** omit the profile selection step and assume the customer profile associated with the existing authorisation. Data Holders **MAY** indicate which profile the authorisation relates to during the authorisation process.|
|Account Selection|Where account selection applies, Data Holders **MUST** pre-select accounts that were associated with the previous authorisation provided these accounts remain eligible and available to share. Data Holders **MAY** allow these accounts to be amended, and **MAY** provide information regarding the pre-selection of accounts.|
|Changing Attributes| Data Holders **MUST** indicate where a dataset is being added to an authorisation or a disclosure duration is being amended. Data Holders **MAY** apply this standard to other changing attributes, but this **MUST ONLY** apply where the attribute in the new authorisation differs to that of the previous authorisation. How a changed attributed is signified is at the Data Holder’s discretion.|

<br>Refer also to [Future Dated obligations](#future-dated-obligations)<br>

## Withdrawal Standards

|Area|CX Standard|
|-------------------|------------------------------|
|**Withdrawing consent**|If a data recipient does not have a general policy to delete redundant data, and the consumer has not already requested that their redundant data be deleted: <ul><li>Data recipients **MUST** allow consumers to elect to have their redundant data deleted as part of the withdrawal process prior to the final withdrawal step. </ul></li><ul><li>Data recipients **SHOULD** consider prompting consumers to exercise this right at appropriate times (e.g. when inaction on the part of the consumer may cause them to lose the opportunity to exercise the right to delete their redundant data).</ul></li>|
| **Withdrawing authorisation:**<br>Consequences| As part of the withdrawal process, the data holder **MUST** advise the consumer to review the consequences of withdrawal with the data recipient before they stop sharing their data. <ul><li>The data holder **MAY** consider using or paraphrasing the following message(s):</li><ul><li>*‘You should check with [Data Recipient] before you stop sharing to understand the consequences.’*</ul></li><ul><li>*‘You should check with [Data Recipient] to see if your service will be impacted before you stop sharing.’*</li></ul></ul>|
|**Withdrawing authorisation:**<br>Redundant data| As part of the withdrawal process, the data holder **MUST** inform the consumer about the handling of redundant data and the right to delete. <ul><li>The Data Holder **MAY** consider using or paraphrasing the following message(s):</li><ul><li>*‘CDR data is either deleted or de-identified when it is no longer required.’*</li><li>*‘[Data recipient] will have specific policies on how to handle your data once it’s no longer required.’*</li></ul></ul> |
