---
layout: game
title: "Free Flow Puzzle"
description: "Recreated Free Flow Puzzle game using Unity3D"
image: "/assets/images/FreeFlowPuzzle.png"
collection: portfolio
type: Commercial Title
category: Game
tags:
    - Unity3D
    - C#
    - Mobile
    - Non-Commercial
role: Gameplay Programmer
genre: Puzzle
tech:
    - Unity3D
    - C#
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
      Built during college as a <strong>self-directed learning project</strong> —
      the goal was to take a game I enjoyed playing (Flow Free) and rebuild it
      from scratch to understand how it works under the hood. No tutorial followed,
      no assets purchased. Just reverse-engineering the mechanics by playing the
      original and implementing everything in Unity3D.
    </p>
    <p>
      The core challenge was the <strong>path-drawing system</strong> — handling touch
      input on a grid, tracking which cells belong to which colour path, enforcing
      puzzle rules (paths can't cross, all cells must be filled), and detecting
      a valid solve state. A small but mechanically precise problem that required
      clean data structures and careful input handling on mobile.
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
      <div class="mg-index">[01] — Core Mechanic</div>
      <div class="mg-title">Path Drawing System</div>
      <div class="mg-subtitle">Touch Input · Grid State · Rule Enforcement</div>
      <p class="mg-desc">
        The heart of the game — a touch-driven system that lets players draw colour
        paths across a grid. Tracks path state per colour, handles mid-path backtracking
        (dragging back over your own path to erase it), prevents paths from crossing,
        and resolves conflicts when a new path overtakes an existing one.
      </p>
      <div class="mg-pills">
        <span class="mg-pill">Touch input</span>
        <span class="mg-pill">Grid state machine</span>
        <span class="mg-pill">Backtrack handling</span>
        <span class="mg-pill">Conflict resolution</span>
      </div>
    </div>

    <div class="minigame-card">
      <div class="mg-index">[02] — Puzzle Logic</div>
      <div class="mg-title">Grid & Solve Detection</div>
      <div class="mg-subtitle">Data Model · Win Condition · Level Format</div>
      <p class="mg-desc">
        Built the grid data model that represents puzzle state — each cell knows
        its colour ownership, whether it's an endpoint, and whether it's occupied.
        Solve detection checks that all paths are connected endpoint-to-endpoint
        and that every cell on the grid is filled — the two conditions Flow Free
        requires for a valid solution.
      </p>
      <div class="mg-pills">
        <span class="mg-pill">Grid data model</span>
        <span class="mg-pill">Endpoint detection</span>
        <span class="mg-pill">Full-board validation</span>
        <span class="mg-pill">Level serialisation</span>
      </div>
    </div>

  </div>
</div>

<!-- VIDEO -->
<div class="content-block">
  <div class="block-label">
    <span class="block-num">03</span>
    <h2 class="block-title">Demo</h2>
    <div class="block-line"></div>
  </div>
  <div class="video-block">
    <div class="video-label">gameplay demo — free flow puzzle (unity3d)</div>
    <iframe src="https://www.youtube.com/embed/NSF5XPVqB0U" allowfullscreen></iframe>
  </div>
</div>

<!-- WHAT I LEARNED -->
<div class="content-block">
  <div class="block-label">
    <span class="block-num">04</span>
    <h2 class="block-title">What I Learned</h2>
    <div class="block-line"></div>
  </div>
  <div class="challenge-block">
    <div class="challenge-title">Rebuilding someone else's game teaches you what they had to solve</div>
    <p class="challenge-text">
      The interesting thing about re-implementing an existing game is you can't look
      up the answer — you have to figure out <strong>what the problem even is</strong>
      before you can solve it. Flow Free looks simple on the surface, but the
      path-drawing mechanic has a lot of edge cases: what happens when you drag
      back over your own path? What happens when you cross a colour that's already
      connected? What's the correct order of operations when a new path "steals"
      a cell from an existing one?
      <br><br>
      Working through those questions by playing the original, forming a hypothesis
      about the rules, and then implementing and testing them was a strong early
      lesson in <strong>thinking about game systems precisely</strong> — not just
      building something that looks right, but something that behaves correctly
      in every edge case.
    </p>
  </div>
</div>

