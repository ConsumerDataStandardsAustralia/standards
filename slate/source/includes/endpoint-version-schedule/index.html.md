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

toc_footers:
  - <a href='../../index.html'>Consumer Data Standards</a>

search: false
---

# Obligation Dates Schedule
The following schedule represents future obligation dates. This includes a set of bi-monthly obligation milestone windows and historically assigned obligation dates.

The calendar of obligation milestones are published to provide predictability. This calendar does not mean that any obligations exist at these dates however when addressing the future dating of obligations for any breaking changes, this calendar will be used to pin those obligations to pre-determined obligation milestones.

These dates may be subject to change depending upon new or changed legislative and policy dates as well as optimisation and streamlining based on community feedback.

| Obligation Milestone | Milestone Date | # Obligations Assigned |
| :------------------- | :------------: | :--------------------: |
| **Legacy FDO** | 28/02/2023 | 3 |
| **Y23 #1** | 14/04/2023 | 3 |
| **Y23 #2** | 15/05/2023 | 1 |
| **Y23 #3** | 10/07/2023 | 3 |
| **Y23 #4** | 11/09/2023 | 0 |
| Energy Tranche 3 | 01/11/2023 | 6 |
| **Y23 #5** | 13/11/2023 | 1 |
| **Y24 #1** | 11/03/2024 | 5 |
| **Y24 #2** | 13/05/2024 | 2 |
| **Y24 #3** | 01/07/2024 | 1 |
| **Y24 #4** | 09/09/2024 | 3 |
| **Y24 #5** | 11/11/2024 | 2 |

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
