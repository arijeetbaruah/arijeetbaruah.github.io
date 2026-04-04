---
layout: game
title: "Zombie Shooter"
description: "A solo student project — a first-person zombie shooter built in Game Maker 8, featuring level-based enemy spawning, weapon pickups with switching, and FSM-driven zombie AI."
image: "/assets/images/zombie3.png"
role: Solo Developer
collection: portfolio
type: Student Project
category: Game
genre: First-Person Shooter
tech:
    - Game Maker 8
    - GML
tags:
    - GameMaker
    - PC
    - Non-Commercial
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
      A <strong>first-person zombie shooter</strong> built solo in Game Maker 8 —
      one of the earliest projects in the portfolio, and notable for pushing a
      first-person perspective inside Game Maker's constraints, which has no native
      3D pipeline.
    </p>
    <p>
      The game features level-based zombie spawning that escalates across stages,
      a weapon pickup and switching system, enemy AI with chase and attack behaviours,
      and player movement and combat built entirely in GML from scratch.
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
      <div class="sc-index">[01] — Combat</div>
      <div class="sc-title">Weapon Pickups & Switching</div>
      <div class="sc-desc">
        Built a weapon system supporting multiple weapon types with distinct fire
        rates, damage values, and ammo pools — each acquirable as a pickup in the
        level. Players could switch between carried weapons on the fly, with the
        active weapon state driving the combat resolution and visual feedback.
        All weapon logic was authored in GML within Game Maker 8's event-driven
        architecture.
      </div>
      <div class="sc-pills">
        <span class="mg-pill">Multiple weapon types</span>
        <span class="mg-pill">Pickup system</span>
        <span class="mg-pill">Weapon switching</span>
        <span class="mg-pill">Ammo management</span>
        <span class="mg-pill">GML</span>
      </div>
    </div>
 
    <div class="system-card system-card--featured">
      <div class="sc-index">[02] — AI</div>
      <div class="sc-title">Zombie AI & Level Spawning</div>
      <div class="sc-desc">
        Implemented zombie enemy AI with chase and attack behaviours — enemies
        detect the player, navigate toward them, and trigger attack logic on
        proximity. Spawning was level-driven, with each stage introducing a defined
        set of enemies at designated spawn points, increasing in number and
        difficulty as the player progressed through levels.
      </div>
      <div class="sc-pills">
        <span class="mg-pill">Chase & attack behaviours</span>
        <span class="mg-pill">Player detection</span>
        <span class="mg-pill">Level-based spawning</span>
        <span class="mg-pill">Difficulty scaling</span>
      </div>
    </div>
 
    <div class="system-card">
      <div class="sc-index">[03] — Player</div>
      <div class="sc-title">First-Person Movement & Combat</div>
      <div class="sc-desc">
        Built first-person player movement and combat within Game Maker 8 —
        a non-trivial implementation given the engine's lack of a native 3D
        pipeline. Player locomotion, look direction, shooting, and hit
        registration were all implemented from scratch in GML.
      </div>
      <div class="sc-pills">
        <span class="mg-pill">First-person perspective</span>
        <span class="mg-pill">Player locomotion</span>
        <span class="mg-pill">Hit registration</span>
        <span class="mg-pill">Game Maker 8</span>
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
      <div class="context-cell-key">Role</div>
      <div class="context-cell-val"><strong>Solo developer.</strong> Designed and built every system — AI, weapons, spawning, and first-person player controls — entirely from scratch.</div>
    </div>
    <div class="context-cell">
      <div class="context-cell-key">Purpose</div>
      <div class="context-cell-val"><strong>Student project.</strong> An early exploration of first-person game mechanics, enemy AI, and level-based progression — built before moving to Unity.</div>
    </div>
    <div class="context-cell">
      <div class="context-cell-key">Tech</div>
      <div class="context-cell-val">Built in <strong>Game Maker 8</strong> using GML. Implementing a first-person perspective in GM8 required working around the engine's 2.5D limitations rather than using a native 3D pipeline.</div>
    </div>
    <div class="context-cell">
      <div class="context-cell-key">Status</div>
      <div class="context-cell-val"><strong>Completed student project.</strong> An early piece of work demonstrating the foundations that later fed into more complex Unity projects.</div>
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
