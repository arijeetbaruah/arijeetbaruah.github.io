---
layout: game
title: "RPG Game"
description: "A solo student project — a real-time action RPG built in Unity3D featuring melee and ranged combat, multiple weapon types, spells, FSM-driven enemy AI with a boss fight, inventory, and RPG stat progression."
image: "/assets/images/rpggame.png"
role: Solo Developer
link:
    text: View on GitHub
    url: https://github.com/arijeetbaruah
collection: portfolio
type: Student Project
category: Game
genre: Action RPG
tech:
    - Unity
    - C#
tags:
    - Unity3D
    - C#
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
      A <strong>real-time action RPG</strong> built solo as a student project in Unity3D.
      The game features melee and ranged combat, multiple weapon types, spells, a full
      inventory system, and RPG stat progression — all tied together with FSM-driven
      enemy AI that includes patrols, combat behaviours, multiple enemy types, and a
      boss fight.
    </p>
    <p>
      The focus was on building each system from scratch with clean, extensible
      architecture — learning how the core pillars of an RPG (combat, AI, stats,
      inventory) connect and depend on each other.
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
      <div class="sc-title">Weapon & Combat System</div>
      <div class="sc-desc">
        Built a real-time combat system supporting both melee and ranged weapon types,
        alongside spells — each with distinct attack ranges, damage types, and
        cooldown behaviours. Weapons were data-driven, making it straightforward to
        add new types without modifying the core combat logic. Hit detection, damage
        application, and knockback were all handled through a unified combat resolution
        layer shared across player and enemy actors.
      </div>
      <div class="sc-pills">
        <span class="mg-pill">Melee & ranged</span>
        <span class="mg-pill">Spell system</span>
        <span class="mg-pill">Data-driven weapons</span>
        <span class="mg-pill">Hit detection</span>
        <span class="mg-pill">Damage resolution</span>
      </div>
    </div>
 
    <div class="system-card system-card--featured">
      <div class="sc-index">[02] — AI</div>
      <div class="sc-title">Enemy AI (FSM)</div>
      <div class="sc-desc">
        Designed and implemented a Finite State Machine-driven AI system powering
        multiple enemy types — each with distinct patrol routes, detection radii,
        chase behaviours, and attack patterns. States transitioned based on player
        proximity, line-of-sight checks, and health thresholds. The boss fight used
        an extended FSM with phase transitions, escalating attack patterns, and
        special abilities triggered at health breakpoints.
      </div>
      <div class="sc-pills">
        <span class="mg-pill">Finite state machine</span>
        <span class="mg-pill">Patrol + chase + attack</span>
        <span class="mg-pill">Multiple enemy types</span>
        <span class="mg-pill">Boss phase transitions</span>
        <span class="mg-pill">Line-of-sight detection</span>
      </div>
    </div>
 
    <div class="system-card">
      <div class="sc-index">[03] — RPG Systems</div>
      <div class="sc-title">Character Stats & Progression</div>
      <div class="sc-desc">
        Implemented the RPG stat layer — health, attack, defence, and speed —
        with a progression system that scales values on level-up. Stats fed directly
        into the combat resolution system, so weapon damage, spell power, and
        incoming damage calculations all derived from the character's live stat values.
      </div>
      <div class="sc-pills">
        <span class="mg-pill">Stat system</span>
        <span class="mg-pill">Level progression</span>
        <span class="mg-pill">Combat integration</span>
      </div>
    </div>
 
    <div class="system-card">
      <div class="sc-index">[04] — Items</div>
      <div class="sc-title">Inventory System</div>
      <div class="sc-desc">
        Built a slot-based inventory system for managing weapons, spells, and
        consumables — with item pickup, equipping, and dropping. Equipment slots
        wired directly into the stat system so equipping an item updated the
        character's combat stats in real time.
      </div>
      <div class="sc-pills">
        <span class="mg-pill">Slot-based inventory</span>
        <span class="mg-pill">Equip & unequip</span>
        <span class="mg-pill">Stat integration</span>
        <span class="mg-pill">Consumables</span>
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
    <div class="video-label">gameplay preview — RPG Game</div>
    <iframe src="https://www.youtube.com/embed/eJKOZD9oS9k" allowfullscreen></iframe>
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
      <div class="context-cell-val"><strong>Solo developer.</strong> Designed, architected, and implemented every system in the project — from AI to inventory to combat resolution.</div>
    </div>
    <div class="context-cell">
      <div class="context-cell-key">Purpose</div>
      <div class="context-cell-val">Built as a <strong>student project</strong> to learn how the core pillars of an action RPG interconnect — combat, AI, progression, and inventory — by implementing each one from scratch.</div>
    </div>
    <div class="context-cell">
      <div class="context-cell-key">Tech</div>
      <div class="context-cell-val">Built in <strong>Unity3D with C#</strong>. No third-party gameplay frameworks — all systems written from the ground up.</div>
    </div>
    <div class="context-cell">
      <div class="context-cell-key">Status</div>
      <div class="context-cell-val"><strong>Completed student project.</strong> Full source available on GitHub.</div>
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
