---
layout: game
title: "Vineyard Valley"
description: "Match 3 Game with hotel renovation"
image: "/assets/images/VineyardValley.jpg"
collection: portfolio
type: Commercial Title
category: Game
tags:
    - Unity3D
    - C#
    - Mobile
    - Commercial
link:    
    text: Google Play
    url: https://play.google.com/store/apps/details?id=com.jamcity.superchef&hl=en&gl=US
role: Gameplay Programmer
genre: Match-3 / Renovation
tech:
    - Unity3D
    - C#
    - ScriptableObjects
    - Odin Inspector
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
      Vineyard Valley is a <strong>match-3 puzzle and renovation game</strong> by
      Jam City — one of the largest mobile game studios in the US, known for
      Harry Potter: Hogwarts Mystery and Family Guy: The Quest for Stuff. The game
      blends colour-blast puzzle levels with a 3D overworld where players
      renovate and furnish The Tangled Vines, a rundown vineyard resort, across
      rooms including the kitchen, dining room, entrance, guest rooms, and gardens.
    </p>
    <p>
      My contribution was the <strong>overworld furniture customisation system</strong>
      — the feature that lets players select, preview, and apply furniture and
      décor choices to each room in the resort after completing puzzle levels.
      Built to be entirely <strong>data-driven and designer-configurable</strong>,
      using ScriptableObjects as the data layer and Odin Inspector to give the
      design team a clean, validated editor workflow.
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
      <div class="mg-index">[01] — Core System</div>
      <div class="mg-title">Furniture Customisation System</div>
      <div class="mg-subtitle">ScriptableObjects · Data-Driven · Per-Room</div>
      <p class="mg-desc">
        Designed and built the full furniture customisation system for the overworld
        hotel renovation loop. Each room in the resort supports multiple furniture
        slots, each slot has a set of available items with style variants, and each
        variant has its own asset reference, cost, and unlock condition. The entire
        catalogue is defined in ScriptableObjects — no room data, furniture item,
        or style variant is hardcoded. Adding a new room or a new furniture pack
        requires zero code changes.
      </p>
      <div class="mg-pills">
        <span class="mg-pill">ScriptableObject architecture</span>
        <span class="mg-pill">Per-room slot system</span>
        <span class="mg-pill">Style variant support</span>
        <span class="mg-pill">Asset reference management</span>
        <span class="mg-pill">Unlock conditions</span>
      </div>
    </div>

    <div class="minigame-card">
      <div class="mg-index">[02] — Tooling</div>
      <div class="mg-title">Odin Inspector Editor Integration</div>
      <div class="mg-subtitle">Designer-Friendly · Validated · In-Editor Preview</div>
      <p class="mg-desc">
        Integrated Odin Inspector to expose the ScriptableObject data in a
        clean, structured editor UI — giving the design team inline validation,
        dropdown selectors for furniture assets, conditional fields based on
        slot type, and visual grouping so the catalogue remained navigable as
        content scaled up. Designers could author and update furniture packs
        independently without needing a programmer.
      </p>
      <div class="mg-pills">
        <span class="mg-pill">Odin Inspector</span>
        <span class="mg-pill">Custom editor UI</span>
        <span class="mg-pill">Inline validation</span>
        <span class="mg-pill">Designer-autonomous workflow</span>
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
      <div class="context-cell-key">Studio</div>
      <div class="context-cell-val"><strong>Jam City</strong> — one of the largest mobile game studios in the US. Known for Harry Potter: Hogwarts Mystery, Family Guy: The Quest for Stuff, and Panda Pop. Vineyard Valley is one of their flagship original IPs.</div>
    </div>
    <div class="context-cell">
      <div class="context-cell-key">Game Loop</div>
      <div class="context-cell-val">Players solve colour-blast match-3 puzzle levels to earn stars. Stars fund renovation choices in the 3D overworld — selecting furniture, flooring, and décor for each room of the vineyard resort.</div>
    </div>
    <div class="context-cell">
      <div class="context-cell-key">My System's Role</div>
      <div class="context-cell-val">The furniture customisation system is the <strong>core reward loop</strong> of the overworld — it's what players spend their earned stars on, and what drives motivation to keep solving puzzles. Getting it right in terms of feel, speed, and content flexibility was critical.</div>
    </div>
    <div class="context-cell">
      <div class="context-cell-key">Why ScriptableObjects + Odin</div>
      <div class="context-cell-val">A commercial mobile title adds content continuously post-launch. A hardcoded furniture system would require a programmer for every new room or item. The SO + Odin approach made the content pipeline <strong>fully designer-owned</strong> — the right architecture for a live game.</div>
    </div>
  </div>
</div>
