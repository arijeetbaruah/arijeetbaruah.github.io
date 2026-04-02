---
layout: game
title: "Champions Ascension"
description: "Champions Ascension is an Arena RPG where you collect and battle your own squad of brutal gladiators. You will embark on the pulse-pounding story of a gladiator on a blood-soaked rise to glory!"
image: "https://images.ctfassets.net/ir6qj64pt374/5njMo81lJt4eMQCXCj4nbH/f5acf34a78eab2912b4215563dcd8730/alopha-web-hero.png"
collection: portfolio
type: Commercial Title
category: Game
tags:
    - Unity3D
    - C#
    - Arena RPG
    - Commercial
role: Gameplay Programmer
genre: Arena MMORPG
tech:
    - Unity
    - C#
    - Photon
---

<div class="content-block">
  <div class="block-label">
    <span class="block-num">01</span>
    <h2 class="block-title">Overview</h2>
    <div class="block-line"></div>
  </div>
  <div class="overview-text">
    <p>
      Champions Ascension is an <strong>NFT-based MMORPG</strong> developed by Plai Labs
      (backed by $32M in seed funding), set in the gladiatorial fantasy world of Massina.
      Players own, train, and battle NFT champions — earning in-game resources and ascending
      through tiers toward Eternal status.
    </p>
    <p>
      My role was to design and build the <strong>mini-games</strong> hosted inside
      The Sleeping Karkadon — the game's social tavern hub where NFT holders gathered
      during the pre-alpha Slice of Massina events. These mini-games were the primary
      live content for the game's earliest players and NFT holders.
    </p>
  </div>
</div>

<!-- MINI-GAMES -->
<div class="content-block">
  <div class="block-label">
    <span class="block-num">02</span>
    <h2 class="block-title">Mini-Games Built</h2>
    <div class="block-line"></div>
  </div>

  <div class="minigame-grid">

    <div class="minigame-card">
      <div class="mg-index">[01] — Racing</div>
      <div class="mg-title">Crab Racing</div>
      <div class="mg-subtitle">Physics · Real-time Multiplayer · Betting</div>
      <p class="mg-desc">
        Players select a crab and watch a chaotic race unfold on a circular tavern table.
        Winners earn tickets redeemable for NFT reward boxes. Built the full race simulation —
        crab AI locomotion, race state machine, ticket reward logic, and synchronized
        spectator view across all connected players.
      </p>
      <div class="mg-pills">
        <span class="mg-pill">Physics simulation</span>
        <span class="mg-pill">State machine</span>
        <span class="mg-pill">Photon RPC</span>
        <span class="mg-pill">Reward system</span>
        <span class="mg-pill">Spectator sync</span>
      </div>
    </div>

    <div class="minigame-card">
      <div class="mg-index">[02] — Strategy</div>
      <div class="mg-title">Dudo</div>
      <div class="mg-subtitle">Turn-based · Bluffing · Liar's Dice</div>
      <p class="mg-desc">
        A multiplayer bluffing dice game (also known as Liar's Dice). Each player rolls
        in secret, then bids on the total dice across the table — raising or calling
        bluff until someone shouts "Lo Dudo!" Built the full turn-flow system, hidden
        dice state, bid validation, Wild Ace rule logic, and networked game room management.
      </p>
      <div class="mg-pills">
        <span class="mg-pill">Turn management</span>
        <span class="mg-pill">Hidden state sync</span>
        <span class="mg-pill">Bid validation</span>
        <span class="mg-pill">Wild Ace logic</span>
        <span class="mg-pill">Room management</span>
      </div>
    </div>

  </div>
</div>

<!-- TECHNICAL CHALLENGE -->
<div class="content-block">
  <div class="block-label">
    <span class="block-num">03</span>
    <h2 class="block-title">Technical Challenge</h2>
    <div class="block-line"></div>
  </div>

  <div class="challenge-block">
    <div class="challenge-title">Multiplayer State Sync with Photon PUN2</div>
    <p class="challenge-text">
      The core challenge was keeping <strong>game state consistent across all clients</strong>
      in real time — especially for Dudo, where each player must see only their own dice
      but the bid history must be perfectly authoritative for everyone at the table.
      This required designing a <strong>custom hidden-state synchronisation system</strong>
      using Photon RPCs and room properties, so private dice rolls were never exposed
      to other clients while still being verifiable on resolution.
      <br><br>
      For Crab Racing, the challenge was different — ensuring the <strong>race simulation
      felt chaotic and fun</strong> while staying deterministic enough that all clients
      agreed on the outcome without a dedicated server. Solved by running the simulation
      on the Master Client and broadcasting checkpoints and final results via RPCs,
      while other clients ran a visual-only interpolated version locally.
    </p>
  </div>
</div>

<!-- GAMEPLAY VIDEO -->
<div class="content-block">
  <div class="block-label">
    <span class="block-num">04</span>
    <h2 class="block-title">Gameplay Preview</h2>
    <div class="block-line"></div>
  </div>
  <div class="video-block">
    <div class="video-label">gameplay — champions ascension pre-alpha</div>
    <video controls autoplay muted loop>
      <source src="https://videos.ctfassets.net/ir6qj64pt374/18c3W6NR03Ja7dnHTnsEqn/efa82638d0409188be0589e874a51ee5/25sec_VER2.mp4" />
    </video>
  </div>
</div>

<!-- CONTEXT -->
<div class="content-block">
  <div class="block-label">
    <span class="block-num">05</span>
    <h2 class="block-title">Context</h2>
    <div class="block-line"></div>
  </div>
  <div class="context-grid">
    <div class="context-cell">
      <div class="context-cell-key">Studio</div>
      <div class="context-cell-val"><strong>Plai Labs</strong> — formerly part of Jam City. Raised <strong>$32M</strong> in seed funding. Champions Ascension was their flagship title.</div>
    </div>
    <div class="context-cell">
      <div class="context-cell-key">Game World</div>
      <div class="context-cell-val">Set in <strong>Massina</strong>, a gladiatorial fantasy world. Players own NFT champions with unique traits, compete in the Colosseum Eternal, and earn on-chain rewards.</div>
    </div>
    <div class="context-cell">
      <div class="context-cell-key">My Mini-games</div>
      <div class="context-cell-val">Deployed inside <strong>The Sleeping Karkadon</strong> tavern — the social hub for Prime Eternal NFT holders during live Slice of Massina pre-alpha events.</div>
    </div>
    <div class="context-cell">
      <div class="context-cell-key">Platform</div>
      <div class="context-cell-val">PC (Windows). Built in <strong>Unity3D with C#</strong>. Real-time networking via <strong>Photon PUN2</strong>. Deployed to NFT holders via direct client download.</div>
    </div>
  </div>
</div>
