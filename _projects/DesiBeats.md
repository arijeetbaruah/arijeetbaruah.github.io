---
layout: game
title: "DesiBeat"
description: "A rhythm game with Indian Songs and ball which follows the tune"
image: https://raw.githubusercontent.com/arijeetbaruah/arijeetbaruah.github.io/master/assets/images/desibeats.jpg
collection: portfolio
category: Game
type: Commercial Title
tags:
    - Unity3D
    - C#
    - Mobile
    - Commercial
link:    
    text: Google Play
    url: https://play.google.com/store/apps/details?id=com.hungamagamestudio.desibeats&hl=en_IN&pli=1
role: Lead Developer
genre: Rhythm / Music
tech:
    - Unity
    - C#
    - Websockets
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
      DesiBeats is a <strong>live, revenue-generating rhythm game</strong> on Google Play
      by Hungama Game Studio — a Hyderabad-based mobile game studio. Players tap and guide
      a ball to the beat of popular Indian music tracks, earning gems, unlocking songs,
      and customising their experience through in-app purchases and ad-supported rewards.
    </p>
    <p>
      As <strong>lead developer</strong>, I was responsible for the overall game architecture
      and four of its most critical technical systems — real-time networking, backend
      integration, the event system, and a runtime config system that controls every
      configurable feature in the game without redeployment.
    </p>
  </div>

  <!-- Stats strip -->
  <div class="stats-strip">
    <div class="stat-strip-item">
      <div class="ssi-num">500K+</div>
      <div class="ssi-label">// downloads</div>
    </div>
    <div class="stat-strip-item">
      <div class="ssi-num">565</div>
      <div class="ssi-label">// reviews</div>
    </div>
    <div class="stat-strip-item">
      <div class="ssi-num">3.8★</div>
      <div class="ssi-label">// avg rating</div>
    </div>
    <div class="stat-strip-item">
      <div class="ssi-num">Live</div>
      <div class="ssi-label">// updated Oct 2025</div>
    </div>
  </div>
</div>

<!-- SYSTEMS -->
<div class="content-block">
  <div class="block-label">
    <span class="block-num">02</span>
    <h2 class="block-title">Systems Built</h2>
    <div class="block-line"></div>
  </div>

  <div class="minigame-grid">

    <div class="minigame-card">
      <div class="mg-index">[01] — Architecture</div>
      <div class="mg-title">Game Architecture</div>
      <div class="mg-subtitle">Lead Design · Scalable · Maintainable</div>
      <p class="mg-desc">
        Designed the overall architecture for the game from the ground up — establishing
        the module boundaries, dependency flow, scene management strategy, and data
        ownership patterns. Built to support a small team working in parallel without
        stepping on each other, and to scale as new features were added post-launch.
      </p>
      <div class="mg-pills">
        <span class="mg-pill">Module design</span>
        <span class="mg-pill">Scene management</span>
        <span class="mg-pill">Dependency flow</span>
        <span class="mg-pill">Team-scalable</span>
      </div>
    </div>

    <div class="minigame-card">
      <div class="mg-index">[02] — Networking</div>
      <div class="mg-title">WebSocket Integration</div>
      <div class="mg-subtitle">Real-time · Live Data · Persistent Connection</div>
      <p class="mg-desc">
        Implemented the real-time WebSocket layer for live game features — managing
        the connection lifecycle, reconnection logic, message serialisation/deserialisation,
        and routing incoming events to the correct game systems. Handles the persistent
        connection required for live song unlocking, gift timers, and real-time
        reward delivery.
      </p>
      <div class="mg-pills">
        <span class="mg-pill">WebSocket client</span>
        <span class="mg-pill">Reconnection logic</span>
        <span class="mg-pill">Message routing</span>
        <span class="mg-pill">Serialisation</span>
      </div>
    </div>

    <div class="minigame-card">
      <div class="mg-index">[03] — Backend</div>
      <div class="mg-title">REST API Integration</div>
      <div class="mg-subtitle">Auth · Songs · IAP · User Data</div>
      <p class="mg-desc">
        Built the REST API client layer — wrapping all backend endpoints for user
        authentication, song catalogue, in-app purchase validation, gem balances,
        leaderboards, and daily gift claims. Designed with a clean request/response
        abstraction so backend changes don't cascade into game logic.
      </p>
      <div class="mg-pills">
        <span class="mg-pill">HTTP client</span>
        <span class="mg-pill">Auth flow</span>
        <span class="mg-pill">IAP validation</span>
        <span class="mg-pill">Error handling</span>
      </div>
    </div>

    <div class="minigame-card">
      <div class="mg-index">[04] — Core</div>
      <div class="mg-title">Event System</div>
      <div class="mg-subtitle">Decoupled · Type-safe · Global</div>
      <p class="mg-desc">
        Implemented a centralised event system to decouple game systems from each
        other — UI, networking, audio, gameplay, and analytics all communicate
        through typed events without direct references. Eliminates spaghetti
        dependencies in a codebase where many systems react to the same triggers
        (song start, gem award, ad completion, etc).
      </p>
      <div class="mg-pills">
        <span class="mg-pill">Typed events</span>
        <span class="mg-pill">Decoupled systems</span>
        <span class="mg-pill">Subscribe / publish</span>
        <span class="mg-pill">No direct refs</span>
      </div>
    </div>

    <div class="minigame-card">
      <div class="mg-index">[05] — Config</div>
      <div class="mg-title">Runtime Config System</div>
      <div class="mg-subtitle">Feature Flags · Remote · Hot-configurable</div>
      <p class="mg-desc">
        Built a config system that controls every configurable feature in the game —
        ad frequencies, gem values, song unlock costs, gift refresh timers, revive
        counts, and feature flags. Values are fetched from the backend at startup
        and hot-applied without a game update, giving the studio full control over
        monetisation tuning and A/B testing post-launch.
      </p>
      <div class="mg-pills">
        <span class="mg-pill">Remote config</span>
        <span class="mg-pill">Feature flags</span>
        <span class="mg-pill">Hot-apply</span>
        <span class="mg-pill">A/B ready</span>
        <span class="mg-pill">No redeployment</span>
      </div>
    </div>

  </div>
</div>

<!-- SCREENSHOTS -->
<div class="content-block">
  <div class="block-label">
    <span class="block-num">03</span>
    <h2 class="block-title">Screenshots</h2>
    <div class="block-line"></div>
  </div>
  <div class="screenshot-grid">
    <img src="https://play-lh.googleusercontent.com/kzkCEXqUKMiXsV_J_YuymnqBYPpNpSqq0DGUbe3KjUGIbPSv8ipnXqlrAHQFM53LC6svDn-rPk_EcSJPtS1-YQ=w526-h296" alt="DesiBeats gameplay" loading="lazy" />
    <img src="https://play-lh.googleusercontent.com/RyeA7p6mLjD5PBLXkC8pFBmRR_2xPhw5jdIyHP5OfwnaSlC6sNuSmuo0qUUk7EGRASeF-sNJgljbfSYONasq=w526-h296" alt="DesiBeats song select" loading="lazy" />
    <img src="https://play-lh.googleusercontent.com/Cj5aAftjhL8j6v7F1aMU1Vmz7Dcr7G8UjGqA74-TjA2H-cDwY_WnZMlspAGddwUzuQG08a7xUbQrxQA-p8_L7w=w526-h296" alt="DesiBeats UI" loading="lazy" />
    <img src="https://play-lh.googleusercontent.com/ldKVjBDH4T_mPU8vl8aSGLGUb9c_cv45_pvbRgyyoKYvBWbO5MzRAbDpLteZMFyBeUQTgKMn4tOMUyWZ8IfG=w526-h296" alt="DesiBeats rewards" loading="lazy" />
  </div>
</div>

<!-- CONTEXT -->
<div class="content-block">
  <div class="block-label">
    <span class="block-num">04</span>
    <h2 class="block-title">Context</h2>
    <div class="block-line"></div>
  </div>
  <div class="context-grid">
    <div class="context-cell">
      <div class="context-cell-key">Studio</div>
      <div class="context-cell-val"><strong>Hungama Game Studio</strong> (Hungama Gameshashtra Pvt. Ltd.) — Hyderabad-based mobile game studio. DesiBeats is their flagship title targeting the Indian music market.</div>
    </div>
    <div class="context-cell">
      <div class="context-cell-key">Game</div>
      <div class="context-cell-val">Rhythm game where a ball follows the beat of popular Indian tracks. Players tap to the music, earn gems, unlock songs, and customise their ball — with IAP and ad-based monetisation.</div>
    </div>
    <div class="context-cell">
      <div class="context-cell-key">My Role</div>
      <div class="context-cell-val"><strong>Lead Developer</strong> — responsible for overall game architecture and 5 core technical systems including the real-time networking and the remote config layer.</div>
    </div>
    <div class="context-cell">
      <div class="context-cell-key">Platform & Status</div>
      <div class="context-cell-val">Live on <strong>Google Play</strong>. <strong>500,000+ downloads</strong>. Last updated October 2025. Active user base with ongoing backend activity.</div>
    </div>
  </div>
</div>
<style>
/* Stats strip */
.stats-strip {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
  background: var(--border);
  border: 1px solid var(--border);
  margin-top: 2.5rem;
}

.stat-strip-item {
  background: var(--card-bg);
  padding: 1.5rem 1.75rem;
  position: relative;
  overflow: hidden;
  transition: background 0.2s;
}

.stat-strip-item:hover { background: var(--bg3); }

.stat-strip-item::after {
  content: '';
  position: absolute;
  bottom: 0; left: 0; right: 0;
  height: 2px;
  background: var(--green);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
}

.stat-strip-item:hover::after { transform: scaleX(1); }

.ssi-num {
  font-family: var(--display);
  font-size: 36px;
  font-weight: 900;
  color: var(--green);
  line-height: 1;
  margin-bottom: 4px;
}

.ssi-label {
  font-family: var(--mono);
  font-size: 10px;
  color: var(--text-dim);
  letter-spacing: 0.15em;
}

/* Screenshot grid */
.screenshot-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1px;
  background: var(--border);
  border: 1px solid var(--border);
}

.screenshot-grid img {
  width: 100%;
  height: 220px;
  object-fit: cover;
  display: block;
  filter: brightness(0.85) saturate(0.8);
  transition: filter 0.3s, transform 0.3s;
}

.screenshot-grid img:hover {
  filter: brightness(1) saturate(1);
  transform: scale(1.02);
  z-index: 1;
  position: relative;
}

@media (max-width: 600px) {
  .stats-strip { grid-template-columns: repeat(2, 1fr); }
  .screenshot-grid { grid-template-columns: 1fr; }
}
</style>
