---
layout: post
title: "Async Loading Screens in Unity — A Template Pattern Approach"
subtitle: "How I identified three distinct loading sequences — main menu, campaign, and sandbox — extracted their shared structure into a base loader class, and used the template pattern to let each define its own unique flow."
date: 2026-06-09
category: deep-dive
tags:
  - Unity
  - C#
  - architecture
  - patterns
  - UI
---

Becoming Pablo has three distinct scenes that all need loading screens, but with meaningfully different sequences. The main menu needs to initialise player data, check for updates, and set up persistent systems. The campaign scene needs to load the map, spawn the game state, wire up audio, load story and dialogue assets, and hand off control to the game loop. The sandbox scene is similar but leaner — no story, no dialogue, no analytics overhead. Same surface — progress bar, tips, percentage counter — three different sequences underneath.

The naive approach is to write three loading routines and accept the duplication. The problem is that loading sequences are fragile. The order matters. Error handling matters. The handoff to the UI matters. Duplicating all of that means any structural fix needs to be made three times, and any divergence between them becomes a future bug.

What I did instead was identify what the three sequences had in common, pull that into a **base loader class** with abstract hooks, and let each sequence implement its own concrete version. That's the template pattern — and this is why it's worth reaching for.

---

## Identifying the Common Structure

Before writing any code, I mapped out all three sequences side by side:

**Main Menu Loader:**
1. Show loading screen
2. Initialise save system
3. Fetch remote config
4. Load main menu scene async
5. Hide loading screen, hand off

**Campaign Loader:**
1. Show loading screen
2. Load campaign scene async
3. Initialise game state
4. Load story / dialogue assets
5. Set up audio banks
6. Track analytics event
7. Hide loading screen, hand off

**Sandbox Loader:**
1. Show loading screen
2. Load sandbox scene async
3. Initialise game state
4. Set up audio banks
5. Hide loading screen, hand off

The pattern is clear. All three start by showing a loading screen and end by hiding it. All three have a middle section of async work that reports progress. All three need error handling. But Campaign has story loading and analytics that Sandbox deliberately skips — Sandbox is the lean version of the same gameplay scene, without narrative overhead.

That shared shape goes in the base class. The middle section — and the decision of what to include or omit — is what each concrete loader implements.

---

## The Base Loader Structure

The base class defines the skeleton of the loading sequence. The entry point — `StartLoading` — is fixed and not overridable. Subclasses fill in the abstract pieces:

```
BaseSceneLoader
├── StartLoading()                  ← fixed, sealed in base
│   ├── UI.Show()
│   ├── OnLoadStart()               ← hook, optional override
│   ├── RunLoadSequence()           ← abstract, must implement
│   ├── OnLoadComplete()            ← hook, optional override
│   └── UI.Hide()
│   └── [on error] OnLoadFailed()  ← hook, optional override
│
├── RunLoadSequence()               ← abstract
└── ReportProgress(value, label)   ← utility, call from RunLoadSequence
```

`StartLoading` is the template — the sequence is locked in. Subclasses cannot reorder `Show → Load → Complete → Hide`. What they control is what happens inside each hook, and what work `RunLoadSequence` performs.

`ReportProgress` is a utility method the subclass calls during `RunLoadSequence` to push a 0–1 float and a step label to the UI. The base class forwards it to the loading screen — neither the subclass nor the base class knows anything about Sliders or TextMeshPro.

---

## The Three Concrete Loaders

Each loader derives from `BaseSceneLoader` and defines its own sequence:

**Main Menu — pseudocode:**

```
MainMenuLoader extends BaseSceneLoader

  OnLoadStart:
    track analytics: "menu_load_start"

  RunLoadSequence:
    ReportProgress(0.0, "Initialising save data")
    await SaveSystem.Initialise()
    ReportProgress(0.33, "Initialising save data")

    ReportProgress(0.33, "Fetching config")
    await RemoteConfig.Fetch()
    ReportProgress(0.66, "Fetching config")

    ReportProgress(0.66, "Loading menu")
    await LoadScene("MainMenu")
    ReportProgress(1.0, "Loading menu")
```

**Campaign — pseudocode:**

```
CampaignLoader extends BaseSceneLoader

  OnLoadStart:
    track analytics: "campaign_load_start"

  RunLoadSequence:
    ReportProgress(0.0,  "Loading map")
    await LoadScene("Campaign")
    ReportProgress(0.25, "Loading map")

    ReportProgress(0.25, "Initialising game")
    await GameState.Initialise(config)
    ReportProgress(0.5,  "Initialising game")

    ReportProgress(0.5,  "Loading story")
    await DialogueSystem.LoadAssets()
    ReportProgress(0.75, "Loading story")

    ReportProgress(0.75, "Loading audio")
    await AudioManager.LoadBanks()
    ReportProgress(1.0,  "Loading audio")

  OnLoadComplete:
    GameState.BeginPlay()
```

**Sandbox — pseudocode:**

```
SandboxLoader extends BaseSceneLoader

  RunLoadSequence:
    ReportProgress(0.0,  "Loading sandbox")
    await LoadScene("Sandbox")
    ReportProgress(0.4,  "Loading sandbox")

    ReportProgress(0.4,  "Initialising game")
    await GameState.Initialise(config)
    ReportProgress(0.7,  "Initialising game")

    ReportProgress(0.7,  "Loading audio")
    await AudioManager.LoadBanks()
    ReportProgress(1.0,  "Loading audio")

  OnLoadComplete:
    GameState.BeginPlay()
```

The difference between Campaign and Sandbox is not a flag or a conditional — it's the *absence* of `DialogueSystem.LoadAssets()` and the analytics hook. No `if (isSandbox)` anywhere. Each loader is a complete, self-contained description of its own sequence.

---

## The Class Hierarchy

```
BaseSceneLoader  (abstract)
├── MainMenuLoader
├── CampaignLoader
└── SandboxLoader
```

All three share the fixed `StartLoading` skeleton, error handling, and the `ReportProgress` utility. None share their `RunLoadSequence` implementations — those are entirely independent.

---

## The UI Layer

The loading screen UI is completely decoupled from all three loaders. It exposes three methods:

- `Show()` — activates the screen and starts the tip cycle
- `Hide()` — deactivates the screen and stops the tip cycle
- `UpdateProgress(value, stepName)` — updates the bar and percentage counter

The base class calls `Show` and `Hide`. Concrete loaders call `ReportProgress`, which the base class forwards to `UpdateProgress`. No loader ever references the UI directly.

Two details worth calling out:

**Progress smoothing.** The displayed progress value doesn't jump directly to the reported value — it moves toward it at a fixed rate per frame. A scene load can complete almost instantly, jumping progress by 40% in a single frame. Without smoothing, the bar jerks. With it, the experience feels polished regardless of how uneven the underlying async timing is.

**Tip cycling.** Tips rotate on their own fixed timer, completely independent of loading speed. Fast hardware or slow, the player always has something to read. The tip cycle starts when the screen shows and stops when it hides — it doesn't know or care how long loading takes.

---

## What the Template Pattern Buys You

The value here isn't code reuse in the obvious sense — the three `RunLoadSequence` implementations share almost no logic. The value is **structural consistency enforced by the compiler**.

All three loaders will always show the UI before doing work. All three will always hide it when done. All three will always route errors through `OnLoadFailed`. That's not a convention or a comment — it's a guarantee from the base class. A future developer adding a fourth loader inherits all of that for free.

The hooks — `OnLoadStart`, `OnLoadComplete`, `OnLoadFailed` — are the designed escape valves. When Campaign needs to call `GameState.BeginPlay()` after loading, it overrides `OnLoadComplete` and adds one line. The base class and the other loaders stay completely unchanged.

Fixed structure, flexible details, extensible without modification. That's the pattern doing its job.

---

[View Becoming Pablo on Steam →](https://store.steampowered.com/app/3145440/Becoming_Pablo/)
