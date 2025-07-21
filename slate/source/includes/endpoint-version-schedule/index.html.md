---
layout: no_code_panel_layout
title: Consumer Data Standards - Endpoint Versioning Schedule

#language_tabs: # must be one of https://git.io/vQNgJ

includes:
  - banking-dh
  - energy-dh
  - dcr
  - common-dh
  - register
  - data-recipients
  - footer

toc_footers:
  - <a href='../../'>Consumer Data Standards</a>

search: false
---

# Obligation Date Schedule
The following schedule represents future obligation dates. This includes a set of bi-monthly obligation milestone windows and historically assigned obligation dates.

The calendar of obligation milestones are published to provide predictability. This calendar does not mean that any obligations exist at these dates however when addressing the future dating of obligations for any breaking changes, this calendar will be used to pin those obligations to pre-determined obligation milestones.

These dates may be subject to change depending upon new or changed legislative and policy dates as well as optimisation and streamlining based on community feedback.

| Obligation Milestone | Milestone Date | # Obligations Assigned |
| :------------------- | :------------: | :--------------------: |
| **Y24 #1** | 2024-03-11 | 5 |
| **Y24 #2** | 2024-05-13 | 2 |
| **Y24 #3** | 2024-07-01 | 1 |
| **Y24 #4** | 2024-09-09 | 3 |
| **Y24 #5** | 2024-11-11 | 2 |
| **Y25 #1** | 2025-03-17 | 1 |
| **Y25 #2** | 2025-05-12 | 3 |
| **Y25 #3** | 2025-07-14 | 5 |
| **Y25 #4** | 2025-09-08 | 0 |
| **Y25 #5** | 2025-11-10 | 8 |
| **Y26 #1** | 2026-03-16 | 0 |
| **Y26 #2** | 2026-05-11 | 0 |
| **Y26 #3** | 2026-07-13 | 2 |
| **Y26 #4** | 2026-09-14 | 0 |
| **Y26 #5** | 2026-11-09 | 9 |
| **Y27 #1** | 2027-03-15 | 0 |
| **Y27 #2** | 2027-05-10 | 0 |
| **Y27 #3** | 2027-07-12 | 0 |
| **Y27 #4** | 2027-09-13 | 0 |
| **Y27 #5** | 2027-11-08 | 0 |

<div id="date-picker">
  <div class="input-group">
    <div class="input-group-prepend">
      <span class="input-group-text">Obligations @</span>
    </div>
    <input type="text" id="end-date" placeholder="End date" aria-label="End date" class="form-control end-date date-picker-input">
    <div class="collapse-obligations-toggle">
      <div class="toggle-title">Collapse obligations</div>
        <!-- Rounded switch -->
      <label class="switch">
        <input type="checkbox">
        <span class="slider round"></span>
      </label>
    </div>
    <div class="legend-title"><a href="#legend">Legend &#9432;</a></div>
  </div>
  <span class="cancel hide">×</span>
</div>
<div class="lightbox" id="legend"><a href="#" class="defocus"></a>
  <div class="legend">
      <div class="legend-title">Legend</div>
      <ul>
        <li><span class="legend-future-obligations"></span> <b>Future:</b> obligations that are due more than three months into the future.</li>
        <li><span class="legend-emerging-obligations"></span> <b>Emerging:</b> obligations that are due within the next three months.</li>
        <li><span class="legend-active-obligations"></span> <b>Active:</b> obligations that must currently be supported.</li>
        <li><span class="legend-deprecated-obligations"></span> <b>Deprecated:</b> obligations that are being phased out and have entered into a deprecation phase before being retired.</li>
        <li><span class="legend-retired-obligations"></span> <b>Retired:</b> obligations that have expired or are superceded and no longer need to be supported.</li>
      </ul>
  </div>
</div>

# Endpoint Version Schedule

The following tables describe the endpoint versions and the dates they become binding within the data standards.

**Binding Date** indicates the date the particular version of an endpoint becomes binding in the data standards.

**Retirement Date** indicates, where relevant, the date a specific version can be retired and is no longer supported. All consumers of the affected endpoint must upgrade to a more recent version currently available.

**Date Introduced** indicates the release of the standards, including release date, when the endpoint version was first introduced. This is not the Binding Date.

**Date Deprecated** indicates the release of the standards, including release date, when the endpoint version was first marked for deprecation. This is not the Retirement Date.

# Data Holders
The following versioning schedule is reflective of the endpoints hosted by Data Holders. Data Holders should take into account their phasing obligations in accordance with the CDR Rules as well as any exemptions granted, when determining which API versions are considered applicable.
