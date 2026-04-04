---
layout: game
title: "Song Beat"
description: "Song Beat is a mobile tap/lane-based rhythm game. I joined mid-development, contributing bug fixes alongside two significant engineering systems — an offline mode caching layer and a reflection-based REST API response parser."
image: "https://play-lh.googleusercontent.com/jgzjyPMu8QKO4-7nr5pRn133pRqwIMC1EJkIVCdzAhGfEw-dXdwQRBitulTYBnH1uQ=w2560-h1440"
role: Gameplay Programmer
collection: portfolio
type: Commercial Title
category: Game
genre: Rhythm Action
tech:
    - Unity
    - C#
tags:
    - Unity3D
    - C#
    - Mobile
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
      Song Beat is a <strong>mobile tap/lane-based rhythm game</strong> built in Unity3D,
      targeting iOS and Android. Players tap notes in time with Indian music tracks
      across a scrolling lane layout.
    </p>
    <p>
      I joined the project mid-development, contributing bug fixes alongside two
      significant backend engineering systems — an <strong>offline mode caching layer</strong>
      that allows the game to function without a server connection, and a
      <strong>reflection-based REST API response parser</strong> that replaced a brittle
      switch-case system with a configurable, automatically dispatched pipeline.
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
      <div class="sc-index">[01] — Networking</div>
      <div class="sc-title">Offline Mode & API Cache</div>
      <div class="sc-desc">
        Designed and implemented a caching layer that intercepts outgoing REST API
        requests, stores the responses locally, and serves cached data when the device
        is offline — simulating the server entirely on the client. The cache is
        parameter-aware, meaning responses are keyed and retrieved based on the
        specific parameters sent with each request, so the correct cached response
        is returned for each unique call rather than a single blanket fallback.
        This allowed the game to remain fully playable without a network connection,
        with no changes required to the existing request-side code.
      </div>
      <div class="sc-pills">
        <span class="mg-pill">REST API caching</span>
        <span class="mg-pill">Offline simulation</span>
        <span class="mg-pill">Parameter-aware lookup</span>
        <span class="mg-pill">Transparent interception</span>
        <span class="mg-pill">No upstream changes</span>
      </div>
    </div>
 
    <div class="system-card system-card--featured">
      <div class="sc-index">[02] — Architecture</div>
      <div class="sc-title">Reflection-Based API Response Parser</div>
      <div class="sc-desc">
        The existing REST API response handling used a large switch-case block —
        each response type required a new case, making the system fragile and
        difficult to extend. I replaced it with a reflection and dictionary-based
        dispatch system: response types are registered automatically, and the correct
        handler is resolved and invoked at runtime without any changes to the
        response handling code. New response types can be added by defining a
        handler class — the parser picks them up automatically with zero boilerplate.
      </div>
      <div class="sc-pills">
        <span class="mg-pill">C# reflection</span>
        <span class="mg-pill">Dictionary dispatch</span>
        <span class="mg-pill">Auto-registration</span>
        <span class="mg-pill">Zero-boilerplate extension</span>
        <span class="mg-pill">Replaces switch-case</span>
      </div>
    </div>
 
    <div class="system-card">
      <div class="sc-index">[03] — Maintenance</div>
      <div class="sc-title">Bug Fixing</div>
      <div class="sc-desc">
        Joined the project during active development and contributed bug fixes
        across the codebase — diagnosing and resolving issues in an existing system
        I hadn't built, requiring quick orientation with unfamiliar code.
      </div>
      <div class="sc-pills">
        <span class="mg-pill">Codebase onboarding</span>
        <span class="mg-pill">Defect diagnosis</span>
        <span class="mg-pill">Live project maintenance</span>
      </div>
    </div>
 
  </div>
</div>

<div class="content-block">
  <div class="block-label">
    <span class="block-num">03</span>
    <h2 class="block-title">Gameplay Preview</h2>
    <div class="block-line"></div>
  </div>
  <div class="video-block">
    <div class="video-label">gameplay preview — SongBeats</div>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/WRY5DMh3RLI?si=s2KaeAHdE2qQdngJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
      <div class="context-cell-key">Role</div>
      <div class="context-cell-val"><strong>Gameplay Programmer</strong>, joined mid-development. Responsible for bug fixes and two backend engineering systems built on top of an existing codebase.</div>
    </div>
    <div class="context-cell">
      <div class="context-cell-key">Game</div>
      <div class="context-cell-val">Mobile <strong>tap/lane-based rhythm game</strong> featuring Indian music tracks. Players tap notes in sync with songs across a scrolling lane layout on iOS and Android.</div>
    </div>
    <div class="context-cell">
      <div class="context-cell-key">Tech</div>
      <div class="context-cell-val">Built in <strong>Unity3D with C#</strong>. Backend communication via REST API with a custom caching and dispatch layer built on top of the existing network stack.</div>
    </div>
    <div class="context-cell">
      <div class="context-cell-key">Key contribution</div>
      <div class="context-cell-val">The offline cache and reflection-based parser are both <strong>additive systems</strong> — they extended the existing architecture without requiring changes to upstream code, minimising risk on a live project.</div>
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