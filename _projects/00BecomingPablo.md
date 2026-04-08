---
layout: game
title: "Becoming Pablo"
description: "Becoming Pablo is a turn-based, Grand-Strategy, Steam title where I worked as a gameplay programmer, focusing on building scalable systems and improving the overall player experience."
image: assets/images/becomingPablo.jpg
role: Gameplay Programmer
link:
    text: View on Steam
    url: https://store.steampowered.com/app/3145440/Becoming_Pablo/
collection: portfolio
type: Commercial Title
category: Game
genre: Turn-Based Grand Strategy
tech:
    - Unity
    - C#
    - FMOD
tags:
    - Unity3D
    - C#
    - Grand Strategy
    - Commercial
feature: true
---
<a href="/#projects" class="back-link">← All Projects</a>

<!-- OVERVIEW -->
<div class="content-block">
  <div class="block-label">
    <span class="block-num">01</span>
    <h2 class="block-title">Overview</h2>
    <div class="block-line"></div>
  </div>
  <div class="overview-text">
    <p>
      Becoming Pablo is a <strong>turn-based grand-strategy game</strong> by Tentworks
      Interactive, set in the gritty 70s–90s drug trade. Players build and manage a cartel
      empire — conquering territories, running production lines, forging alliances, and
      surviving rival factions across Colombia, Korea, and Nigeria.
    </p>
    <p>
      I joined during pre-Alpha and have been responsible for a wide range of
      <strong>gameplay systems, engine integrations, and internal tooling</strong> —
      work that spans player-facing features, designer-facing tools, and low-level
      engine optimisation. The game is currently on Steam with a live demo available.
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
      <div class="sc-index">[01] — Gameplay</div>
      <div class="sc-title">Tech Tree System</div>
      <div class="sc-desc">
        Designed and implemented the game's R&D progression architecture — a
        scalable, data-driven tech tree that governs cartel upgrades, unlocks, and
        strategic choices. Built to support designer iteration without code changes,
        using ScriptableObjects with dependency graphs and unlock conditions.
      </div>
      <div class="sc-pills">
        <span class="mg-pill">ScriptableObjects</span>
        <span class="mg-pill">Dependency graph</span>
        <span class="mg-pill">Unlock conditions</span>
        <span class="mg-pill">Designer-editable</span>
      </div>
    </div>

    <div class="system-card system-card--featured">
      <div class="sc-index">[02] — Gameplay</div>
      <div class="sc-title">Family Tree / Faction System</div>
      <div class="sc-desc">
        Built the Family Tree system that drives faction relationships — tracking
        lineage, alliances, rivalries, and power structures across cartel families.
        Underpins the diplomacy and espionage layers of the grand-strategy loop.
      </div>
      <div class="sc-pills">
        <span class="mg-pill">Graph data structure</span>
        <span class="mg-pill">Faction relationships</span>
        <span class="mg-pill">Runtime queries</span>
        <span class="mg-pill">Diplomacy layer</span>
      </div>
    </div>

    <div class="system-card">
      <div class="sc-index">[03] — Tooling</div>
      <div class="sc-title">Google Sheets Data Pipeline</div>
      <div class="sc-desc">
        Built a live data pipeline that pulls game content directly from Google Sheets
        into Unity — parsing, validating, and converting spreadsheet rows into runtime
        data assets. Lets designers update balancing, dialogue, and config without
        touching the codebase.
      </div>
      <div class="sc-pills">
        <span class="mg-pill">Google Sheets API</span>
        <span class="mg-pill">Parsing & validation</span>
        <span class="mg-pill">ScriptableObject generation</span>
      </div>
    </div>

    <div class="system-card">
      <div class="sc-index">[04] — Tooling</div>
      <div class="sc-title">Custom Localization Editor</div>
      <div class="sc-desc">
        Developed a custom Unity Editor tool for managing localisation — allowing the
        team to add, edit, and preview translated strings across all supported languages
        from inside the editor, without external tooling or file editing.
      </div>
      <div class="sc-pills">
        <span class="mg-pill">Unity Editor extension</span>
        <span class="mg-pill">Multi-language</span>
        <span class="mg-pill">In-editor preview</span>
      </div>
    </div>

    <div class="system-card">
      <div class="sc-index">[05] — Integration</div>
      <div class="sc-title">Steam Integration</div>
      <div class="sc-desc">
        Integrated the Steamworks SDK — wiring up Steam Achievements, cloud save
        hooks, and platform callbacks. Ensures the game meets Steam's technical
        requirements for the published demo and upcoming full release.
      </div>
      <div class="sc-pills">
        <span class="mg-pill">Steamworks SDK</span>
        <span class="mg-pill">Achievements</span>
        <span class="mg-pill">Cloud saves</span>
      </div>
    </div>

    <div class="system-card">
      <div class="sc-index">[06] — Integration</div>
      <div class="sc-title">FMOD Audio Integration</div>
      <div class="sc-desc">
        Integrated FMOD Studio into the Unity project — setting up the event-driven
        audio architecture, wiring game state to adaptive music banks, and connecting
        the audio middleware pipeline for the sound team to work against.
      </div>
      <div class="sc-pills">
        <span class="mg-pill">FMOD Studio</span>
        <span class="mg-pill">Adaptive music</span>
        <span class="mg-pill">Event-driven audio</span>
      </div>
    </div>

    <div class="system-card">
      <div class="sc-index">[07] — UX</div>
      <div class="sc-title">Options Menu</div>
      <div class="sc-desc">
        Built the full options and settings system — graphics quality, audio channel
        volumes (wired to FMOD mixer buses), control remapping, and persistent
        settings via PlayerPrefs with safe defaults and reset functionality.
      </div>
      <div class="sc-pills">
        <span class="mg-pill">Settings persistence</span>
        <span class="mg-pill">FMOD mixer buses</span>
        <span class="mg-pill">Keybind remapping</span>
      </div>
    </div>

    <div class="system-card">
      <div class="sc-index">[08] — UX</div>
      <div class="sc-title">Loading Screen</div>
      <div class="sc-desc">
        Implemented an asynchronous loading screen system with progress tracking,
        tip/hint cycling, and smooth scene transitions — decoupling the loading
        pipeline from the UI layer for clean scene management.
      </div>
      <div class="sc-pills">
        <span class="mg-pill">Async scene loading</span>
        <span class="mg-pill">Progress callbacks</span>
        <span class="mg-pill">Scene management</span>
      </div>
    </div>

    <div class="system-card">
      <div class="sc-index">[09] — Performance</div>
      <div class="sc-title">Game Initialization Optimization</div>
      <div class="sc-desc">
        Profiled and refactored the game's startup sequence to reduce initialization
        time — restructuring load order, lazy-loading non-critical systems, and
        eliminating blocking operations on the main thread at startup.
      </div>
      <div class="sc-pills">
        <span class="mg-pill">Unity Profiler</span>
        <span class="mg-pill">Lazy initialization</span>
        <span class="mg-pill">Load order refactor</span>
      </div>
    </div>

  </div>
</div>

<!-- VIDEO -->
<div class="content-block">
  <div class="block-label">
    <span class="block-num">03</span>
    <h2 class="block-title">Gameplay Preview</h2>
    <div class="block-line"></div>
  </div>
  <div class="video-block">
    <div class="video-label">gameplay preview — becoming pablo (pre-alpha)</div>
    <iframe src="https://www.youtube.com/embed/HT19kmhqSiY" allowfullscreen></iframe>
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
      <div class="context-cell-val"><strong>Tentworks Interactive</strong> — indie studio founded by Jay Basani. Previously shipped City Block Builder. Becoming Pablo is their flagship current title, available on Steam with a public demo.</div>
    </div>
    <div class="context-cell">
      <div class="context-cell-key">Game</div>
      <div class="context-cell-val">Turn-based grand strategy set in the 70s–90s drug trade. Players choose from factions across <strong>Colombia, Korea, and Nigeria</strong> — managing cartels through base building, territory control, diplomacy, and espionage.</div>
    </div>
    <div class="context-cell">
      <div class="context-cell-key">My Scope</div>
      <div class="context-cell-val">Responsible for <strong>9 distinct systems</strong> spanning gameplay, tooling, third-party integrations, UX, and performance — working across the full stack of a live pre-Alpha Unity project.</div>
    </div>
    <div class="context-cell">
      <div class="context-cell-key">Status</div>
      <div class="context-cell-val"><strong>Currently in development.</strong> Pre-Alpha demo live on Steam. Full release in progress. Wishlisting open on the Steam page.</div>
    </div>
  </div>
</div>

<style>
/* Systems grid — extends sub-style.css for this page */
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
  border-bottom: none;
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
