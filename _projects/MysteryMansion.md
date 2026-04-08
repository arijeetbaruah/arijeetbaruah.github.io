---
layout: game
title: "Mystery Mansion"
description: "Social deduction, survival game based on medieval murder mystery game using Unity"
image: "/assets/images/MystoryMansion.jpg"
collection: portfolio
category: Game
type: Commercial Title
tags:
    - Unity3D
    - C#
    - Mobile
    - NFT
    - Commercial
role: Gameplay Programmer
genre: NFT social dedection
tech:
  - Unity3D
  - C#
  - Photon PUN2
  - Odin Inspector
  - NFT Integration
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
      Mystery Mansion was an <strong>NFT-based social deduction game</strong> —
      an Among Us-style multiplayer experience set in a Victorian murder mystery world.
      Players were assigned roles (investigators or killers), completed tasks around
      the mansion to gather clues, and voted to eliminate suspects between rounds.
      Characters in the game were NFT-backed, giving holders unique playable avatars
      with on-chain ownership.
    </p>
    <p>
      I joined as a <strong>Gameplay Programmer</strong> working across three areas:
      integrating the NFT character customisation system, building in-game puzzles
      that players complete during rounds, and fixing bugs across the networked
      multiplayer codebase. The game used Photon PUN2 for real-time networking and
      Odin Inspector for editor tooling.
    </p>
    <p>
      Note: the game has since undergone significant visual and design changes since
      the Victorian-themed version I worked on. Screenshots from that era are no
      longer available publicly.
    </p>
  </div>
</div>

<!-- WHAT I BUILT -->
<div class="content-block">
  <div class="block-label">
    <span class="block-num">02</span>
    <h2 class="block-title">My Contributions</h2>
    <div class="block-line"></div>
  </div>

  <div class="minigame-grid">

    <div class="minigame-card">
      <div class="mg-index">[01] — Feature</div>
      <div class="mg-title">NFT Character Customisation</div>
      <div class="mg-subtitle">On-chain Identity · Visual Integration · Wallet-linked</div>
      <p class="mg-desc">
        Integrated the NFT character system — connecting wallet-held NFT metadata
        to in-game character appearance. When a player linked their wallet, the
        game read their NFT attributes (traits, visual properties) and applied them
        to their in-game avatar, giving each NFT holder a unique, verifiably-owned
        character in the Victorian mansion world.
      </p>
      <div class="mg-pills">
        <span class="mg-pill">NFT metadata parsing</span>
        <span class="mg-pill">Wallet integration</span>
        <span class="mg-pill">Dynamic character assembly</span>
        <span class="mg-pill">Trait-to-visual mapping</span>
      </div>
    </div>

    <div class="minigame-card">
      <div class="mg-index">[02] — Feature</div>
      <div class="mg-title">In-Game Puzzles</div>
      <div class="mg-subtitle">Task Mechanics · Player Interaction · Social Deduction Loop</div>
      <p class="mg-desc">
        Built puzzle mechanics that players complete during rounds as part of the
        investigator task flow — the same task structure that social deduction games
        use to keep non-killer players engaged and create observable behaviour for
        other players to read. Designed to be completable in short windows between
        social interactions, with clear visual feedback on progress.
      </p>
      <div class="mg-pills">
        <span class="mg-pill">Mini-game mechanics</span>
        <span class="mg-pill">Task flow integration</span>
        <span class="mg-pill">Progress feedback</span>
        <span class="mg-pill">Network-aware state</span>
      </div>
    </div>

    <div class="minigame-card">
      <div class="mg-index">[03] — Maintenance</div>
      <div class="mg-title">Bug Fixing</div>
      <div class="mg-subtitle">Networked Multiplayer · Live Codebase · Photon PUN2</div>
      <p class="mg-desc">
        Fixed bugs across the live multiplayer codebase — working in a Photon PUN2
        networked environment where most issues involve race conditions, authority
        mismatches, or state desync between clients. Reproducing and isolating
        bugs in a multiplayer context requires understanding the network layer
        well enough to reason about what each client sees at any given moment.
      </p>
      <div class="mg-pills">
        <span class="mg-pill">Photon PUN2</span>
        <span class="mg-pill">State desync debugging</span>
        <span class="mg-pill">Race condition analysis</span>
        <span class="mg-pill">Multiplayer reproduction</span>
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
      <div class="context-cell-key">Genre</div>
      <div class="context-cell-val">Social deduction multiplayer — similar structure to Among Us. Players take on roles, complete tasks, observe each other, discuss, and vote to eliminate suspects between rounds.</div>
    </div>
    <div class="context-cell">
      <div class="context-cell-key">Setting (my version)</div>
      <div class="context-cell-val"><strong>Victorian murder mystery</strong> — the theme when I worked on it. The game has since rebranded visually. No screenshots from the Victorian era are currently publicly available.</div>
    </div>
    <div class="context-cell">
      <div class="context-cell-key">NFT Layer</div>
      <div class="context-cell-val">Characters were NFTs — players linked their crypto wallet and their token's on-chain traits mapped directly to their in-game avatar's appearance. One of two NFT projects I've worked on (alongside Champions Ascension).</div>
    </div>
    <div class="context-cell">
      <div class="context-cell-key">Stack</div>
      <div class="context-cell-val">Unity3D · C# · Photon PUN2 for real-time networking · Odin Inspector for editor tooling · Mobile (Android/iOS)</div>
    </div>
  </div>
</div>
