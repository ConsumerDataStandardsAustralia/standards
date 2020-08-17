# Known Issues

<p>The following issue are an oversight in the 1.4.0 release and is included as errata. They will be corrected in the next release of the standards.</p>

<table>
<tr>
<td> <b>Mandatory Claims for ID Token</b> </td>
<td>
The related change request is: <a href="https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/227">Urgent documentation change required content of ID Token</a> as agreed in the<a href="https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/227#issuecomment-639285633"> outcomes of a workshop held on 5th June 2020</a>
<br><br>
This decision outlines a recommendation to align to normative standards.
<br><br>
The change will remove the following text in the <a href="https://consumerdatastandardsaustralia.github.io/standards/#tokens">Token</a> section of the standards:
<br><br>
As described under section 5.2.2 of the <b>FAPI-RW</b> profile, ID Tokens MUST include the following claims (in addition to the mandatory claims specified in section 2 of the <b>OIDC</b> standard) as part of Hybrid Flow authentication:
  <ul><li> nonce: String value used to associate a Client session with an ID Token. </li>
  <li> s_hash: Hash of the state value. </li>
  <li> c_hash: Hash of the authorisation_code value. </li></ul>

<br>
And replaced with:
<br><br>

 In addition to the mandatory claims specified in section 2 of the <b>OIDC</b> standard, required claims for ID Tokens as part of Hybrid Flow authentication must align to section 3.3 (Authentication using the Hybrid Flow) of the <b>OIDC</b> standards and sections 5.2.2 and 8.4.3 of the <b>FAPI-RW</b> profile.
</td>
</tr>
<tr>
<td><b>Alignment with OIDC on auth_time</b></td>
<td>
The related change request is: <a href="https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/228">Urgent documentation change required content of ID Token</a> as agreed in the<a href="https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/228#issuecomment-639285534"> outcomes of a workshop held on 5th June 2020</a>

<br>
That it must be returned in the ID Token when the normative standards require it
that it should not be returned from the UserInfo endpoint. The change will remove the following text in the <a href="https://consumerdatastandardsaustralia.github.io/standards/#scopes-and-claims">Scopes and Claims</a> section of the standards:

<br><br>
auth_time: Time when the End-User authentication occurred. Its value is a JSON number representing the number of seconds from 1970-01-01T00:00:00Z to the UTC auth_time.
<br><br>
And replaced with:
<br><br>
auth_time: Time when the End-User authentication occurred. Its value is a JSON number representing the number of seconds from 1970-01-01T00:00:00Z to the UTC auth_time. It MUST be returned by the Data Holder in the ID Token when the Data Recipient has requested it as an essential claim according to section 2 of the <b>OIDC</b> standard. It SHOULD NOT be returned via the UserInfo endpoint.
</td>
</tr>
</table>
