---
layout: game
title: "DataSmith"
description: "Open-Source ORM plugin for Unity3D"
image: "https://github.com/arijeetbaruah/DataSmith/raw/main/docs/Image/Cover.jpg"
role: Programmer, Owner
collection: portfolio
type: Open-Source Plugin
category: Plugin
link:
    text: Documentation
    url: https://arijeetbaruah.github.io/DataSmith/
tech:
    - Unity
    - C#
    - Reflection
    - Editor Scripting
tags:
    - Unity3D
    - C#
    - Plugin
    - ORM
---
<a href="/#projects" class="back-link">← All Projects</a>

<!-- PROBLEM -->
<div class="content-block">
  <div class="block-label">
    <span class="block-num">01</span>
    <h2 class="block-title">The Problem</h2>
    <div class="block-line"></div>
  </div>
  <div class="overview-text">
    <p>
      Unity has no first-class solution for <strong>persisting structured gameplay data
      to a database</strong>. The common approaches — hand-writing SQL strings,
      using PlayerPrefs for everything, or pulling in heavyweight ORM libraries
      not designed for games — all create the same problem: fragile, boilerplate-heavy
      code that breaks when your data model changes.
    </p>
    <p>
      DataSmith solves this by bringing an <strong>ORM-style developer experience
      into Unity</strong> — you define your data model once using C# attributes,
      and DataSmith generates the strongly-typed models, table mappings, and
      fluent query API automatically. No SQL strings. No reflection at runtime.
      No boilerplate.
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
        <div class="flow-title">Define your model</div>
        <div class="flow-desc">Annotate a C# class with DataSmith attributes — column names, types, primary keys, relationships. No SQL, no schema files.</div>
      </div>
    </div>
    <div class="flow-arrow">→</div>
    <div class="flow-step">
      <div class="flow-num">02</div>
      <div class="flow-body">
        <div class="flow-title">Code generation</div>
        <div class="flow-desc">DataSmith reads your attributes and generates strongly-typed accessor classes and query builders at edit time — zero runtime reflection overhead.</div>
      </div>
    </div>
    <div class="flow-arrow">→</div>
    <div class="flow-step">
      <div class="flow-num">03</div>
      <div class="flow-body">
        <div class="flow-title">Query with fluent API</div>
        <div class="flow-desc">Use the generated fluent API to read, write, filter, and update records. Fully type-safe. Works with SQLite and custom file-based backends.</div>
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
      <div class="fc-glyph">//</div>
      <div class="fc-title">Zero Runtime Reflection</div>
      <div class="fc-desc">Code generation happens at edit time. At runtime, all accessors are strongly-typed compiled code — no reflection overhead, no boxing, no allocations from the ORM layer.</div>
    </div>

    <div class="feature-card feature-card--highlight">
      <div class="fc-glyph">{ }</div>
      <div class="fc-title">Attribute-Driven Models</div>
      <div class="fc-desc">Define your entire data schema in C# using custom attributes. DataSmith reads the class definition and generates everything else — models, queries, and table mappings.</div>
    </div>

    <div class="feature-card">
      <div class="fc-glyph">~</div>
      <div class="fc-title">Fluent Query API</div>
      <div class="fc-desc">Generated query builders support chained, lazy evaluation — filter, sort, join, and project records without writing SQL or building query strings manually.</div>
    </div>

    <div class="feature-card">
      <div class="fc-glyph">#</div>
      <div class="fc-title">Strongly-Typed Accessors</div>
      <div class="fc-desc">All generated getters, setters, and event callbacks are fully typed. Rename a field and the compiler tells you everywhere it breaks — no string-keyed lookups.</div>
    </div>

    <div class="feature-card">
      <div class="fc-glyph">⬡</div>
      <div class="fc-title">SQLite + File Backend</div>
      <div class="fc-desc">First-class SQLite support for persistent gameplay data. Custom file-based backend for lightweight, portable storage — no external dependencies required.</div>
    </div>

    <div class="feature-card">
      <div class="fc-glyph">◈</div>
      <div class="fc-title">Centralized Architecture</div>
      <div class="fc-desc">DataSmith enforces a single source of truth for data access. No scattered PlayerPrefs calls or ad-hoc serialization — all data flows through the same typed layer.</div>
    </div>

    <div class="feature-card">
      <div class="fc-glyph">↻</div>
      <div class="fc-title">Strongly-Typed Events</div>
      <div class="fc-desc">Generated change events fire when data is written — subscribe to model changes with typed delegates rather than polling or manual observer wiring.</div>
    </div>

    <div class="feature-card">
      <div class="fc-glyph">✦</div>
      <div class="fc-title">Designer-Friendly</div>
      <div class="fc-desc">Works inside the Unity Editor with custom inspector integration. Non-programmers can browse and edit data records without touching code or raw database files.</div>
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
    <div class="challenge-title">Building tooling that other developers actually use</div>
    <p class="challenge-text">
      Writing gameplay code is one skill. Writing a <strong>framework that other programmers
      build on top of</strong> — with a coherent API, zero-overhead guarantees, and enough
      flexibility to fit real project structures — is a different level of engineering entirely.
      <br><br>
      DataSmith required designing a <strong>code generation pipeline</strong> that correctly
      handles C# type reflection at edit time, emits valid compilable output, and stays
      in sync as models change. It also required thinking about the <strong>developer
      ergonomics</strong> of the API — making the fluent query interface feel natural
      to Unity developers who have never used an ORM before.
      <br><br>
      Publishing it as open-source and targeting the <strong>Unity Asset Store</strong>
      means it has to work reliably across different Unity versions, project configurations,
      and use cases — with documentation and examples that let someone new get started
      without help.
    </p>
  </div>
</div>

<!-- CONTEXT -->
<div class="content-block">
  <div class="block-label">
    <span class="block-num">05</span>
    <h2 class="block-title">Links</h2>
    <div class="block-line"></div>
  </div>
  <div class="context-grid">
    <div class="context-cell">
      <div class="context-cell-key">Documentation</div>
      <div class="context-cell-val"><a href="https://arijeetbaruah.github.io/DataSmith/" target="_blank" style="color:var(--green)">arijeetbaruah.github.io/DataSmith ↗</a><br>Full API reference, getting started guide, and examples.</div>
    </div>
    <div class="context-cell">
      <div class="context-cell-key">Source Code</div>
      <div class="context-cell-val"><a href="https://github.com/arijeetbaruah/DataSmith" target="_blank" style="color:var(--green)">github.com/arijeetbaruah/DataSmith ↗</a><br>Open-source. PRs and issues welcome.</div>
    </div>
    <div class="context-cell">
      <div class="context-cell-key">Unity Asset Store</div>
      <div class="context-cell-val">Coming soon. Will be available as a package directly importable via the Package Manager.</div>
    </div>
    <div class="context-cell">
      <div class="context-cell-key">Stack</div>
      <div class="context-cell-val">Unity3D · C# · Editor Scripting · Code Generation · SQLite · Custom file backend</div>
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
