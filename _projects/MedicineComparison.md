---
layout: game
title: "Medicine Comparison and Suggestion System (Nestle)"
description: "Worked in a team of 5. My duties were to work in the integration of backend (Golang) with JavaScript frontend"
image: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d8/Nestl%C3%A9.svg/1280px-Nestl%C3%A9.svg.png"
collection: portfolio
category: Website
type: Commercial Website
tags:
    - GoLang
role: Full-Stack Developer
genre: Professional / Web
tech:
    - Golang
    - JavaScript
    - REST API
    - HTML/CSS
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
      Built at Webonise Labs for <strong>Nestlé</strong> — a web tool designed
      to assist doctors in finding Nestlé nutritional products as alternatives
      to conventional medicines. A doctor searches for any medicine by name,
      and the system returns relevant Nestlé products that address the same
      nutritional or therapeutic need, with comparison data to support the
      recommendation.
    </p>
    <p>
      This was a <strong>greenfield project built from scratch</strong> in a small
      team of 2–5. I was responsible for both the <strong>Golang server</strong>
      and the <strong>JavaScript frontend</strong> — designing the API, implementing
      the search and suggestion logic on the backend, and building the UI that
      doctors would interact with.
    </p>
  </div>
</div>

<!-- WHAT I BUILT -->
<div class="content-block">
  <div class="block-label">
    <span class="block-num">02</span>
    <h2 class="block-title">What I Built</h2>
    <div class="block-line"></div>
  </div>

  <div class="minigame-grid">

    <div class="minigame-card">
      <div class="mg-index">[01] — Backend</div>
      <div class="mg-title">Golang Server</div>
      <div class="mg-subtitle">REST API · Search Logic · Data Layer</div>
      <p class="mg-desc">
        Built the server from scratch in Golang — defining the REST API endpoints,
        implementing the medicine search and Nestlé product matching logic, and
        wiring up the data layer. Responsible for the full request lifecycle from
        HTTP handler to response, including input validation and error handling.
      </p>
      <div class="mg-pills">
        <span class="mg-pill">Golang</span>
        <span class="mg-pill">REST API design</span>
        <span class="mg-pill">Search & matching</span>
        <span class="mg-pill">Data layer</span>
        <span class="mg-pill">Error handling</span>
      </div>
    </div>

    <div class="minigame-card">
      <div class="mg-index">[02] — Frontend</div>
      <div class="mg-title">JavaScript Frontend</div>
      <div class="mg-subtitle">Doctor-facing UI · Search · Results Display</div>
      <p class="mg-desc">
        Built the client-side interface from scratch in JavaScript — the medicine
        search input, API call handling, and the results view that displays Nestlé
        alternatives with comparison information. Designed for a clinical context
        where clarity and speed of information retrieval matter most.
      </p>
      <div class="mg-pills">
        <span class="mg-pill">JavaScript</span>
        <span class="mg-pill">REST consumption</span>
        <span class="mg-pill">Search UI</span>
        <span class="mg-pill">Results display</span>
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
      <div class="context-cell-val"><strong>Nestlé</strong> — the tool was built for Nestlé's medical nutrition division, to help clinicians identify Nestlé nutritional products as alternatives when prescribing or recommending supplements.</div>
    </div>
    <div class="context-cell">
      <div class="context-cell-key">Company</div>
      <div class="context-cell-val"><strong>Webonise Labs</strong> — delivered as a client project during my time as a software developer there. One of two projects I worked on at Webonise alongside the DRF horse betting platform.</div>
    </div>
    <div class="context-cell">
      <div class="context-cell-key">My Scope</div>
      <div class="context-cell-val">Owned both the <strong>backend (Golang)</strong> and <strong>frontend (JavaScript)</strong> — a genuine full-stack contribution on a greenfield build, not integration work on an existing codebase.</div>
    </div>
    <div class="context-cell">
      <div class="context-cell-key">Status</div>
      <div class="context-cell-val">Internal / not publicly accessible. Built for Nestlé's internal clinical use — not a consumer-facing product.</div>
    </div>
  </div>
</div>

<style>
/* Solid hero variant — no image background */
.project-hero--solid {
  background: var(--bg2);
  border-bottom: 1px solid var(--border);
}

.project-hero--solid .project-hero-overlay {
  background: none;
}
</style>
