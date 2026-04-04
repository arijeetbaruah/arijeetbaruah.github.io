---
layout: game
title: "Sony Atlas"
description: "Sony Atlas is a music analytics platform used by Sony Music stakeholders to analyse trends and make investment decisions. Built solo at Webonise Labs using Symfony 3."
image: "https://www.sme-atlas.com/images/header/logo.png?3"
role: Solo Developer
link:
    text: Visit Site
    url: https://www.sme-atlas.com/
collection: portfolio
type: Commercial Website
category: Website
genre:
tech:
    - Symfony 3
    - PHP
    - R Script
tags:
    - PHP
    - Symfony
    - Web
    - Commercial
feature: false
---

<!-- OVERVIEW -->
<div class="content-block">
  <div class="block-label">
    <span class="block-num">01</span>
    <h2 class="block-title">Overview</h2>
    <div class="block-line"></div>
  </div>
  <div class="overview-text">
    <p>
      Sony Atlas is a <strong>music analytics platform</strong> used by Sony Music
      stakeholders to analyse trends across their catalogue and make data-driven
      investment decisions. The platform ingests large volumes of music data,
      processes it, and surfaces it as interactive trend visualisations for
      internal analysts.
    </p>
    <p>
      I worked on this as the <strong>solo developer at Webonise Labs</strong>,
      implementing Google reCAPTCHA for form security, a robust CSV import pipeline
      for bulk data ingestion, and fixing data quality issues in client-supplied
      CSV files generated via R Script and PHP before they could be reliably
      imported.
    </p>
  </div>
</div>
 
<!-- SYSTEMS GRID -->
<div class="content-block">
  <div class="block-label">
    <span class="block-num">02</span>
    <h2 class="block-title">Systems Built</h2>
    <div class="block-line"></div>
  </div>
 
  <div class="systems-grid">
 
    <div class="system-card system-card--featured">
      <div class="sc-index">[01] — Data</div>
      <div class="sc-title">CSV Import Pipeline</div>
      <div class="sc-desc">
        Built a CSV import pipeline for bulk ingestion of music analytics data into
        the platform — handling large files with validation, transformation, and
        error reporting at each stage. The pipeline validated incoming rows against
        expected schema, applied data type coercions and column mappings before
        insert, and surfaced actionable error feedback for malformed records rather
        than failing silently. Designed to handle the volume and inconsistency of
        real client-supplied data files without manual intervention on each import.
      </div>
      <div class="sc-pills">
        <span class="mg-pill">CSV parsing</span>
        <span class="mg-pill">Schema validation</span>
        <span class="mg-pill">Data transformation</span>
        <span class="mg-pill">Error reporting</span>
        <span class="mg-pill">Large file handling</span>
        <span class="mg-pill">DB insert</span>
      </div>
    </div>
 
    <div class="system-card system-card--featured">
      <div class="sc-index">[02] — Data Quality</div>
      <div class="sc-title">CSV Data Fixing (R Script & PHP)</div>
      <div class="sc-desc">
        Client-supplied CSV files — generated via R Script and PHP — arrived with
        recurring data quality issues: incorrect data types and missing or mismatched
        columns that broke the import pipeline. Diagnosed the root causes in the
        upstream generation scripts, corrected the output to produce well-formed,
        consistently structured files, and hardened the import pipeline to handle
        the edge cases that remained — reducing import failures and manual
        intervention on the client data workflow.
      </div>
      <div class="sc-pills">
        <span class="mg-pill">R Script</span>
        <span class="mg-pill">PHP</span>
        <span class="mg-pill">Data type correction</span>
        <span class="mg-pill">Column mapping fixes</span>
        <span class="mg-pill">Pipeline hardening</span>
      </div>
    </div>
 
    <div class="system-card">
      <div class="sc-index">[03] — Security</div>
      <div class="sc-title">Google reCAPTCHA Integration</div>
      <div class="sc-desc">
        Integrated Google reCAPTCHA into the platform's forms within the Symfony 3
        framework — wiring server-side token verification into the form submission
        flow to protect against automated abuse on an internal-facing analytics tool.
      </div>
      <div class="sc-pills">
        <span class="mg-pill">Google reCAPTCHA</span>
        <span class="mg-pill">Server-side verification</span>
        <span class="mg-pill">Symfony 3</span>
        <span class="mg-pill">Form security</span>
      </div>
    </div>
 
  </div>
</div>
 
<!-- CONTEXT -->
<div class="content-block">
  <div class="block-label">
    <span class="block-num">03</span>
    <h2 class="block-title">Context</h2>
    <div class="block-line"></div>
  </div>
  <div class="context-grid">
    <div class="context-cell">
      <div class="context-cell-key">Client</div>
      <div class="context-cell-val"><strong>Sony Music Entertainment.</strong> An internal analytics platform used by stakeholders to analyse trends across Sony's music catalogue and guide investment decisions.</div>
    </div>
    <div class="context-cell">
      <div class="context-cell-key">Role</div>
      <div class="context-cell-val"><strong>Solo developer</strong> at Webonise Labs. Responsible for feature development, data pipeline work, and fixing upstream data quality issues in client-supplied files.</div>
    </div>
    <div class="context-cell">
      <div class="context-cell-key">Tech</div>
      <div class="context-cell-val">Built on <strong>Symfony 3 / PHP</strong>. Data processing involved R Script and PHP on the client side, with a custom CSV ingestion and validation pipeline on the platform side.</div>
    </div>
    <div class="context-cell">
      <div class="context-cell-key">Status</div>
      <div class="context-cell-val"><strong>Live.</strong> Available at <a href="https://www.sme-atlas.com/" target="_blank" style="color: var(--green);">sme-atlas.com</a>.</div>
    </div>
  </div>
</div>
 
<style>
.systems-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1px;
  background: var(--border);
  border: 1px solid var(--border);
}
 
.system-card {
  background: var(--card-bg);
  padding: 1.75rem 2rem;
  position: relative;
  overflow: hidden;
  transition: background 0.2s;
}
 
.system-card:hover { background: var(--bg3); }
 
.system-card::after {
  content: '';
  position: absolute;
  top: 0; left: 0;
  width: 2px; height: 0;
  background: var(--green);
  transition: height 0.3s ease;
}
.system-card:hover::after { height: 100%; }
 
.system-card--featured {
  grid-column: span 2;
}
 
@media (max-width: 680px) {
  .system-card--featured { grid-column: span 1; }
}
 
.sc-index {
  font-family: var(--mono);
  font-size: 10px;
  color: var(--text-dim);
  letter-spacing: 0.1em;
  margin-bottom: 0.6rem;
}
 
.sc-title {
  font-family: var(--display);
  font-size: 22px;
  font-weight: 900;
  color: var(--text-hi);
  text-transform: uppercase;
  letter-spacing: 0.02em;
  margin-bottom: 0.75rem;
}
 
.system-card--featured .sc-title { font-size: 26px; }
 
.sc-desc {
  font-size: 13px;
  color: var(--text);
  line-height: 1.8;
  margin-bottom: 1.25rem;
}
 
.sc-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
</style>
 