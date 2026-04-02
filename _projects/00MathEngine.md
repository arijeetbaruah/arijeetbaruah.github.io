---
layout: game
title: "Maths Engine"
description: "Maths Engine is a Unity plugin that allows designers to visually configure mathematical formulas using ScriptableObjects, Prefabs, and config assets instead of hardcoded code. It transforms math into data. Designers build formulas visually. Programmers evaluate them at runtime. "
image: "https://raw.githubusercontent.com/arijeetbaruah/Maths-Engine/refs/heads/main/docs/images/social-preview.png"
role: Programmer, Owner
collection: portfolio
type: Open-Source Plugin
category: Plugin
link:
    text: Documentation
    url: https://arijeetbaruah.github.io/Maths-Engine/
tech:
    - Unity
    - C#
    - Editor Scripting
tags:
    - Unity3D
    - C#
    - Plugin
    - Maths
---
<!-- PROBLEM -->
<div class="content-block">
  <div class="block-label">
    <span class="block-num">01</span>
    <h2 class="block-title">The Problem</h2>
    <div class="block-line"></div>
  </div>
  <div class="overview-text">
    <p>
      Gameplay systems often rely on <strong>complex, frequently changing formulas</strong> —
      damage calculations, economy scaling, AI weights, and progression curves.
      These are usually hardcoded, making iteration slow and error-prone.
    </p>
    <p>
      Designers depend on programmers for even small tweaks, and as formulas grow,
      the code becomes difficult to maintain, debug, and extend.
    </p>
    <p>
      Math Engine solves this by introducing a <strong>node-based, data-driven formula system</strong>
      — allowing complex expressions to be built visually, modified without code changes,
      and evaluated efficiently at runtime.
    </p>
  </div>
</div>

<!-- HOW IT WORKS -->
<div class="content-block">
  <div class="block-label">
    <span class="block-num">02</span>
    <h2 class="block-title">How It Works</h2>
    <div class="block-line"></div>
  </div>

  <div class="flow-steps">
    <div class="flow-step">
      <div class="flow-num">01</div>
      <div class="flow-body">
        <div class="flow-title">Build formula graph</div>
        <div class="flow-desc">Create formulas using a node-based editor. Each node represents an operation, constant, or variable.</div>
      </div>
    </div>
    <div class="flow-arrow">→</div>
    <div class="flow-step">
      <div class="flow-num">02</div>
      <div class="flow-body">
        <div class="flow-title">Serialize as data</div>
        <div class="flow-desc">Graphs are stored as assets, making them reusable, versionable, and editable without touching code.</div>
      </div>
    </div>
    <div class="flow-arrow">→</div>
    <div class="flow-step">
      <div class="flow-num">03</div>
      <div class="flow-body">
        <div class="flow-title">Evaluate at runtime</div>
        <div class="flow-desc">A runtime evaluator traverses the graph and computes results efficiently with minimal allocations.</div>
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
      <div class="fc-glyph">⬡</div>
      <div class="fc-title">Node-Based Architecture</div>
      <div class="fc-desc">Formulas are represented as graphs of interconnected nodes, enabling modular, reusable, and easily debuggable expressions.</div>
    </div>

    <div class="feature-card feature-card--highlight">
      <div class="fc-glyph">⚡</div>
      <div class="fc-title">Efficient Runtime Evaluation</div>
      <div class="fc-desc">Custom evaluator traverses graphs with minimal allocations, supporting deeply nested expressions without performance overhead.</div>
    </div>

    <div class="feature-card">
      <div class="fc-glyph">{ }</div>
      <div class="fc-title">Extensible Node System</div>
      <div class="fc-desc">New operations can be added easily by defining new node types, making the system scalable for different gameplay needs.</div>
    </div>

    <div class="feature-card">
      <div class="fc-glyph">#</div>
      <div class="fc-title">Strongly-Typed Inputs</div>
      <div class="fc-desc">Supports structured input data, allowing formulas to safely reference gameplay variables without string-based lookups.</div>
    </div>

    <div class="feature-card">
      <div class="fc-glyph">◈</div>
      <div class="fc-title">Editor Tooling</div>
      <div class="fc-desc">Custom Unity editor for creating, editing, and debugging formula graphs visually.</div>
    </div>

    <div class="feature-card">
      <div class="fc-glyph">↻</div>
      <div class="fc-title">Reusable Graph Assets</div>
      <div class="fc-desc">Graphs are stored as assets and can be reused across multiple systems like combat, economy, and AI.</div>
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
    <div class="challenge-title">Bridging designer flexibility with runtime performance</div>
    <p class="challenge-text">
      Math Engine sits at the intersection of <strong>tooling and runtime systems</strong>.
      It required designing a graph architecture that is flexible enough for designers,
      while still being efficient enough for real-time gameplay evaluation.
      <br><br>
      One of the key challenges was handling <strong>Unity serialization limitations</strong>,
      especially around cyclic graph structures and asset persistence. Ensuring graphs
      remained stable across reloads without duplication required careful data design.
      <br><br>
      The runtime evaluator was built to avoid unnecessary allocations and handle
      deeply nested expressions, making it viable for use in performance-critical systems
      such as combat and AI.
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
      <div class="context-cell-key">Documentation</div>
      <div class="context-cell-val"><a href="{{ page.link.url }}" target="_blank" style="color:var(--green)">{{ page.link.url }}</a></div>
    </div>
    <div class="context-cell">
      <div class="context-cell-key">Source Code</div>
      <div class="context-cell-val"><a href="https://github.com/arijeetbaruah/Maths-Engine" target="_blank" style="color:var(--green)">github.com/arijeetbaruah/DataSmith</a></div>
    </div>
    <div class="context-cell">
      <div class="context-cell-key">Unity Asset Store</div>
      <div class="context-cell-val">Coming soon. Will be available as a package directly importable via the Package Manager.</div>
    </div>
    <div class="context-cell">
      <div class="context-cell-key">Stack</div>
      <div class="context-cell-val">Unity3D · C# · Editor Scripting · Graph-based architecture · Runtime evaluation systems</div>
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
