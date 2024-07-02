<h2 class="schema-heading" id="consumer-experience_consent-standards">Consent Standards</h2>

```diff
Added following CX Standard to clarify CDR Arrangement ID is required for consent and authorisation amendments:
+ Consent: Amendment of Collection Consents and Authorisations
```

|Area|CX Standard|
|-------------------|------------------------------|
|**Consent:**<br/>Amendment of Collection Consents and Authorisations |When notifying a Data Holder of an amended collection consent as per rules 4.18C or 4.20S, Data Recipients **MUST** supply the relevant CDR Arrangement ID to the Data Holder according to [Specifying an existing arrangement](#specifying-an-existing-arrangement). Providing the CDR Arrangement ID is necessary to trigger the Data Holder authorisation flow simplifications outlined in the [Amending Authorisation Standards](#amending-authorisation-standards). Failure to supply the CDR Arrangement ID will result in the full authorisation flow and a disconnected data sharing arrangement history on consumer dashboards.|
|**Consent:**<br/>Redirection|Data recipients **MUST** notify consumers of redirection prior to authentication.|
|**Business consumer statement:** Method|When seeking a business consumer statement, data recipients **MUST** invite the business consumer to give the business consumer statement in a manner that is explicit, express, and through an active selection or declaration.<br><br>The giving of a business consumer statement **MUST** be clearly separated from any other interaction or information provided to the consumer and **MUST NOT** be implied or bundled with any other permission.|
|**Business consumer statement:** Content|Data recipients **MUST** use plain and concise language when inviting a consumer to give a business consumer statement.|
|**Disclosure consent:**<br/>Collection source|In the course of seeking a consumer’s consent to disclose data as part of a disclosure consent:<ol><li>Data Recipients **MUST** specify which CDR Participant(s) they collected the associated CDR data from</li><li>Data Recipients **SHOULD** specify the sector(s) the data was collected from or associated with</li></ol>**Note:**<ul><li>Point (1) only requires the Data Recipient to refer to the CDR Participant(s) immediately preceding them in the disclosure chain, which may not always include a consumer’s Data Holder(s)</li><li>This standard is proposed to apply to all data to be disclosed by a Data Recipient, including unmodified, aggregated, derived, and transformed CDR data</li><li>Where applicable, the existing data language standards apply to descriptions of CDR data that have not been modified</li></ul>|
|**Disclosure Consent:** Descriptions of Data to be Collected and Disclosed|If:<ol><li>An accredited person is seeking a collection consent to collect CDR data from a particular accredited data recipient; or</li><li>An accredited data recipient is seeking a disclosure consent from a consumer to disclose CDR data;</li></ol>and the data subject to the disclosure or collection is not within the data language standards as it does not relate to a relevant data cluster, then that data **MUST** be described in language that is as easy to understand as practicable.|

<h3 class="schema-toc" data-cds-menu="h3" id="consumer-experience_consent-standards_disclosure-consent-insight-descriptions">Disclosure Consent: Insight Descriptions</h3>

The standards in this section outline insight description requirements that apply where an insight disclosure consent is being sought and may also feature in CDR Receipts and Dashboards. These standards do not alter any existing rules obligations for CDR receipts or dashboards.

**Note:** The use of the term ‘data recipients’ to refer to accredited data recipients is consistent with the data standards nomenclature. Where these standards refer to ‘data recipient’, this should not be taken to mean a non-accredited person or trusted adviser.

|Area|CX Standard|
|-------------------|------------------------------|
|**Insight disclosure:** <br>Insight comprehension|Data recipients **MUST** use plain and concise language to describe what an insight would reveal or describe.<br><br>Where possible and practical, the actual insight **SHOULD** be displayed to the consumer prior to the insight being disclosed. <br><br>Where it is not possible to display the actual insight, accredited data recipients **SHOULD** include an example of the insight that demonstrates what the insight may reveal or describe. Accredited data recipients **SHOULD** make clear that any such examples are hypothetical.|
|**Insight disclosure:** <br>Insight timing|Data recipients **MUST** specify the period the insight will refer to and **MAY** note when the insight will be or is expected to be generated.|
|**Insight disclosure:** <br>Purpose of insight |Data recipients **SHOULD** explain the purpose of generating the insight.|
|**Insight disclosure:** <br>Insight generation|Data recipients **MAY** explain how the insight will be generated using plain and concise language, which **MAY** include: <ul><li>what method(s) would be used to generate the insight(s);<li>who would be involved in generating the insight(s), such as the specific actor(s); and</li><li>what information sources would be used to generate the insight, such as the specific dataset(s)</li></ul></ol>|

<h3 class="schema-toc" data-cds-menu="h3" id="consumer-experience_consent-standards_disclosure-consent-non-accredited-person-disclosure-notification">Disclosure Consent: Non-Accredited Person Disclosure Notification</h3>



The standards in this section outline requirements that apply when a disclosure consent is being sought to disclose data to a non-accredited person, which includes insight disclosure consents, business consumer disclosure consents, and trusted adviser disclosure consents.

These standards will feature where such a disclosure consent is being sought and may, as stated in any accompanying notes, also feature in CDR Receipts and Dashboards.

**Note:** The use of the term ‘data recipients’ to refer to accredited data recipients is consistent with the data standards nomenclature. Where these standards refer to ‘data recipient’, this should not be taken to mean a non-accredited person or trusted adviser.



|Area|CX Standard|
|-------------------|------------------------------|
|**Disclosure consent:** <br> CDR protections|Data recipients **MUST** state that data disclosed to a non-accredited person will not be regulated as part of the Consumer Data Right.<br><br>This information **SHOULD** be immediately viewable by the consumer without further interaction.<br><br>Data recipients **MAY** include a plain and concise explanation of what this means, which **MAY** include information on the Consumer Data Right, and **MAY** include a link to the [Office of the Australian Information Commissioner guidance on the Consumer Data Right.](https://www.oaic.gov.au/consumer-data-right)|
|**Disclosure consent:** <br> Review|Data recipients **MUST** advise the consumer to review how the non-accredited person will handle their data.|
|**Disclosure consent:** <br> Data handling|If available, data recipients **MAY** include a link to any relevant data handling policies of the non-accredited person, such as their Privacy Policy.|
|**Disclosure consent:** <br> Complaints |Data recipients **MUST** provide plain and concise information on dispute resolution and making a complaint. This **SHOULD** reflect the process and information contained in the data recipient’s CDR policy related to complaints. This **MAY** also include a link to the accredited data recipient’s CDR policy.|
|**Disclosure consent:** <br> Insight records |When seeking an insight disclosure consent, data recipients **MUST** provide instructions for how the consumer can access further records, including the actual insights (as per Rules 1.14 and 9.5).|
|**Disclosure consent:** <br>  Notification record |Data recipients **MUST** provide the information contained in the disclosure notification otherwise than in the  consent flow. This **SHOULD** be contained in the consumer’s CDR Receipt. This **SHOULD** also be accessible in the consumer dashboard as part of the data sharing arrangement details. <br><br>**Note 1:** The information to be included is limited to the following standards: CDR Protections; Review; Data Handling; Complaints; and Insight Records. The scope of information to include will depend on the accredited person’s specific implementation.<br><br>**Note 2:** This standard does not alter any existing rules obligations for CDR receipts or dashboards.|
