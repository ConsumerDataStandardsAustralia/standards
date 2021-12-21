---
title: Consumer Data Standards - v1.15.0 Release Notes

#language_tabs: # must be one of https://git.io/vQNgJ

toc_footers:
  - <a href='../../index.html'>Consumer Data Standards</a>

search: false
---

# V1.15.0 Release Notes
Release notes for version v1.15.0 of the [CDR Standards](../../index.html).

This release minor errata and documentation fixes.

## High Level Standards

|Change|Description|Link|
|------|-----------|----|


## API End Points

|Change|Description|Link|
|------|-----------|----|
| Energy schema | Fixed a schema bug which included an extraneous comma that caused OAS3 validation issues | [Energy Schema](../../#energy-apis) |

## Information Security Profile

|Change|Description|Link|
|------|-----------|----|
| Data Recipient CDR Arrangement Endpoint | Armoured the Data Recipient hosted CDR arrangement endpoint by requiring the Data Holder to present the `cdr_arrangement_id` in a signed JWT  |  [CDR Arrangement Revocation End Point](../../#cdr-arrangement-revocation-end-point)|
| Self-Signed JWT Audience | An immediate change to re-instate interoperability for Data Holders calling the Data Recipient's CDR Arrangement Revocation endpoint to revoke consent has been introduced. A phasing out of the multiple audience value support in favour of only the "resource path" for the end point being accessed is also introduced. | [Self-Signed JWT Client Authentication](../../#self-signed-jwt-client-authentication) |
| Adoption of FAPI 1.0 Final | FAPI 1.0 adoption is introduced across three phases:
<ul>
  <li><strong>Phase 1: Hygiene</strong>
      <ul>
        <li>Enforces requirements for authorisation code, token and request object use</li>
        <li>Data Holders MAY support of FAPI 1.0 Final</li>
        <li>Data Holders MAY support of Authorization Code Flow (including PKCE and JARM) in conjunction with Hybrid Flow</li>
      </ul>
    </li>
    <li><strong>Phase 2: FAPI 1.0 Final (Baseling & Advanced)</strong>
        <ul>
          <li>Enforces PAR-only authorisation request data submission</li>
          <li>Data Holders and Data Recipients MUST support FAPI 1.0 Final</li>
          <li>Data Holders MAY support of Authorization Code Flow in conjunction with Hybrid Flow</li>
        </ul>
      </li>
      <li><strong>Phase 3: Retire Hybrid Flow</strong>
          <ul>
            <li>Data Holders MUST support Authorization Code Flow</li>
            <li>Data Holders MAY retire Hybrid Flow</li>
          </ul>
        </li>
</ul>

## Consumer Experience

|Change|Description|Link|
|------|-----------|----|
