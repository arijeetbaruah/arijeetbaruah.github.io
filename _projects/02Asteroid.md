---
layout: game
title: "Asteroid"
description: "A self-made asteroid game developed using C++ and the Simple and Fast Multimedia Library (SFML)"
image: "/assets/images/Astroid%20(3).png"
collection: portfolio
type: Personal Project
category: Game
tags:
    - C++
    - Custom Engine
    - 2D
link:
    text: Github Repository
    url: https://github.com/arijeetbaruah/Asteroid
role: Gameplay Programmer
genre: 2D Arcade
tech:
    - SFML
    - OpenGL
    - spdlog
    - yaml-cpp
---

<!-- PROBLEM -->
<div class="content-block">
  <div class="block-label">
    <span class="block-num">01</span>
    <h2 class="block-title">The Goal</h2>
    <div class="block-line"></div>
  </div>
  <div class="overview-text">
    <p>
      Asteroid is an <strong>arcade-style space shooter</strong> focused on responsive controls,
      scalable difficulty, and clean gameplay systems.
    </p>
    <p>
      The goal was to build a game that feels simple on the surface, but is backed by
      <strong>modular, extensible systems</strong> that support iteration, balancing,
      and feature expansion.
    </p>
    <p>
      My role focused on designing and implementing the <strong>core gameplay systems,
      tools, and runtime architecture</strong> that power the game.
    </p>
  </div>
</div>

<!-- HOW IT WORKS -->
<div class="content-block">
  <div class="block-label">
    <span class="block-num">02</span>
    <h2 class="block-title">Core Systems</h2>
    <div class="block-line"></div>
  </div>

  <div class="flow-steps">
    <div class="flow-step">
      <div class="flow-num">01</div>
      <div class="flow-body">
        <div class="flow-title">Gameplay Loop</div>
        <div class="flow-desc">Player movement, shooting, asteroid spawning, and collision systems form the core loop.</div>
      </div>
    </div>
    <div class="flow-arrow">→</div>
    <div class="flow-step">
      <div class="flow-num">02</div>
      <div class="flow-body">
        <div class="flow-title">Progression & Scaling</div>
        <div class="flow-desc">Difficulty increases dynamically through spawn rates, asteroid behavior, and scoring systems.</div>
      </div>
    </div>
    <div class="flow-arrow">→</div>
    <div class="flow-step">
      <div class="flow-num">03</div>
      <div class="flow-body">
        <div class="flow-title">Game Systems Layer</div>
        <div class="flow-desc">Audio, UI, save/load, and achievements integrate into a unified gameplay framework.</div>
      </div>
    </div>
  </div>
</div>

<!-- FEATURES -->
<div class="content-block">
  <div class="block-label">
    <span class="block-num">03</span>
    <h2 class="block-title">Features</h2>
    <div class="block-line"></div>
  </div>

  <div class="features-grid">

    <div class="feature-card feature-card--highlight">
      <div class="fc-glyph">✦</div>
      <div class="fc-title">Core Gameplay Systems</div>
      <div class="fc-desc">Implemented player controls, shooting mechanics, collision handling, and asteroid behavior systems.</div>
    </div>

    <div class="feature-card feature-card--highlight">
      <div class="fc-glyph">⚙</div>
      <div class="fc-title">Modular Architecture</div>
      <div class="fc-desc">Designed systems to be loosely coupled and extensible, enabling rapid iteration and feature additions.</div>
    </div>

    <div class="feature-card">
      <div class="fc-glyph">🔊</div>
      <div class="fc-title">FMOD Audio Integration</div>
      <div class="fc-desc">Integrated FMOD for dynamic sound effects and event-driven audio playback.</div>
    </div>

    <div class="feature-card">
      <div class="fc-glyph">🏆</div>
      <div class="fc-title">Steam Achievements</div>
      <div class="fc-desc">Implemented achievement tracking and integration using Steamworks API.</div>
    </div>

    <div class="feature-card">
      <div class="fc-glyph">💾</div>
      <div class="fc-title">Save / Load System</div>
      <div class="fc-desc">Built a reliable system for persisting player progress and high scores.</div>
    </div>

    <div class="feature-card">
      <div class="fc-glyph">🖥</div>
      <div class="fc-title">Options Menu</div>
      <div class="fc-desc">Implemented resolution, framerate, and graphics settings with runtime updates.</div>
    </div>

    <div class="feature-card">
      <div class="fc-glyph">⏳</div>
      <div class="fc-title">Optimized Initialization</div>
      <div class="fc-desc">Improved game startup performance by restructuring initialization logic and asset loading.</div>
    </div>

    <div class="feature-card">
      <div class="fc-glyph">🛠</div>
      <div class="fc-title">Tooling & Pipelines</div>
      <div class="fc-desc">Developed tools for faster data entry and validation, improving iteration speed during development.</div>
    </div>

  </div>
</div>

<!-- WHY IT MATTERS -->
<div class="content-block">
  <div class="block-label">
    <span class="block-num">04</span>
    <h2 class="block-title">Why It Matters</h2>
    <div class="block-line"></div>
  </div>
  <div class="challenge-block">
    <div class="challenge-title">Shipping a complete gameplay experience</div>
    <p class="challenge-text">
      Asteroid demonstrates the ability to take a game from concept to release,
      focusing on <strong>robust gameplay systems and production-ready code</strong>.
      <br><br>
      Beyond implementing features, the challenge was ensuring systems remained
      <strong>maintainable, scalable, and performant</strong> as the project evolved.
      This included optimizing initialization, integrating third-party systems like FMOD
      and Steamworks, and building tools to support rapid iteration.
      <br><br>
      The result is a complete, shipped product with a clean underlying architecture
      that supports future expansion.
    </p>
  </div>
</div>

<!-- LINKS -->
<div class="content-block">
  <div class="block-label">
    <span class="block-num">05</span>
    <h2 class="block-title">Links</h2>
    <div class="block-line"></div>
  </div>
  <div class="context-grid">
    <div class="context-cell">
      <div class="context-cell-key">Steam</div>
      <div class="context-cell-val"><a href="https://store.steampowered.com/app/3145440" target="_blank" style="color:var(--green)">View on Steam ↗</a></div>
    </div>
    <div class="context-cell">
      <div class="context-cell-key">Role</div>
      <div class="context-cell-val">Gameplay Programmer — core systems, tools, and integrations</div>
    </div>
    <div class="context-cell">
      <div class="context-cell-key">Systems</div>
      <div class="context-cell-val">Gameplay loop · Audio · UI · Save/Load · Achievements · Options</div>
    </div>
    <div class="context-cell">
      <div class="context-cell-key">Stack</div>
      <div class="context-cell-val">Unity3D · C# · FMOD · Steamworks · Editor scripting</div>
    </div>
  </div>
</div>
<style>
/* Flow steps */
.flow-steps {
  display: flex;
  align-items: stretch;
  gap: 0;
  background: var(--border);
  border: 1px solid var(--border);
  flex-wrap: wrap;
}

.flow-step {
  flex: 1;
  min-width: 200px;
  background: var(--card-bg);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  transition: background 0.2s;
}

.flow-step:hover { background: var(--bg3); }

.flow-arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg2);
  padding: 0 1rem;
  font-family: var(--mono);
  font-size: 20px;
  color: var(--green);
  flex-shrink: 0;
}

.flow-num {
  font-family: var(--mono);
  font-size: 10px;
  color: var(--green);
  letter-spacing: 0.15em;
}

.flow-title {
  font-family: var(--display);
  font-size: 18px;
  font-weight: 700;
  color: var(--text-hi);
  text-transform: uppercase;
  letter-spacing: 0.02em;
}

.flow-desc {
  font-size: 13px;
  color: var(--text-dim);
  line-height: 1.7;
}

/* Features grid */
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1px;
  background: var(--border);
  border: 1px solid var(--border);
}

.feature-card {
  background: var(--card-bg);
  padding: 1.75rem 2rem;
  transition: background 0.2s;
  position: relative;
  overflow: hidden;
}

.feature-card:hover { background: var(--bg3); }

.feature-card::before {
  content: '';
  position: absolute;
  bottom: 0; left: 0; right: 0;
  height: 2px;
  background: var(--green);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
}

.feature-card:hover::before { transform: scaleX(1); }

.feature-card--highlight {
  grid-column: span 2;
}

@media (max-width: 600px) {
  .feature-card--highlight { grid-column: span 1; }
  .flow-arrow { display: none; }
  .flow-steps { flex-direction: column; }
}

.fc-glyph {
  font-family: var(--mono);
  font-size: 18px;
  color: var(--green);
  margin-bottom: 0.6rem;
}

.fc-title {
  font-family: var(--display);
  font-size: 20px;
  font-weight: 700;
  color: var(--text-hi);
  text-transform: uppercase;
  letter-spacing: 0.02em;
  margin-bottom: 0.6rem;
}

.feature-card--highlight .fc-title { font-size: 24px; }

.fc-desc {
  font-size: 13px;
  color: var(--text);
  line-height: 1.8;
}
</style>

