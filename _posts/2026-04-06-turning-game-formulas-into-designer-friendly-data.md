---
layout: post
title: "MathEngine — Turning Game Formulas Into Designer-Friendly Data"
subtitle: "How I built a ScriptableObject-based node graph that lets designers configure and preview mathematical formulas visually — without touching code."
date: 2026-04-06
category: deep-dive
tags:
  - Unity
  - C#
  - open-source
  - tooling
  - game-design
---
 
There's a moment in most game projects where a designer asks: *"Can I just tweak the damage formula myself?"*
 
The honest answer is usually no. The formula lives somewhere in a C# file, probably hardcoded, possibly duplicated in three places. Changing it means finding a programmer, filing a task, waiting for a build. By the time the tweak is tested, everyone has forgotten what problem it was solving.
 
**MathEngine** is my answer to that problem — an open-source Unity plugin that lets designers define, configure, and preview mathematical formulas using ScriptableObjects, without writing or touching any code.
 
---
 
## The Problem With Hardcoded Math
 
Game formulas are everywhere. Damage calculation. XP curves. Spawn rate scaling. Loot probability weights. In most Unity projects, these live as magic numbers and inline expressions scattered across the codebase:
 
```csharp
// Somewhere in CombatManager.cs
float damage = (baseDamage * attackMultiplier) - (defence * 0.4f);
damage = Mathf.Clamp(damage, 1f, 999f);
```
 
This works, but it creates a wall between the people who define game feel — designers — and the systems that drive it. Every balance change is a programmer task. Every experiment requires a code change, a recompile, a new build.
 
The underlying issue isn't complexity. The formula above is simple. The issue is that **the formula is expressed in the wrong language** — C# instead of data.
 
---
 
## The Design: Formulas as ScriptableObject Graphs
 
MathEngine represents every formula as a **graph of connected ScriptableObjects**. Each node in the graph is a ScriptableObject with a single overridden method: `Evaluate(context)`. It takes a context object carrying named input values, performs its operation, and returns a `float`.
 
Nodes connect to each other by holding references to other ScriptableObjects. The root node is what you call at runtime. Evaluating it recursively evaluates its inputs, which evaluate their inputs, until the entire graph resolves to a single float.
 
```csharp
// What a node looks like internally
public abstract class MathNode : ScriptableObject
{
    public abstract float Evaluate(MathContext context);
}
 
// A multiply node — holds references to two input nodes
[CreateAssetMenu(menuName = "MathEngine/Multiply")]
public class MultiplyNode : MathNode
{
    public MathNode inputA;
    public MathNode inputB;
 
    public override float Evaluate(MathContext context)
    {
        return inputA.Evaluate(context) * inputB.Evaluate(context);
    }
}
```
 
A designer building a damage formula creates a `MultiplyNode` asset, assigns a `BaseStatNode` and an `AttackMultiplierNode` to its inputs, and the formula is complete — no code written, no recompile needed.
 
---
 
## The Node Library
 
MathEngine ships with a full library of built-in node types covering everything a typical game formula needs:
 
**Arithmetic** — `AddNode`, `SubtractNode`, `MultiplyNode`, `DivideNode` for basic operations between two inputs.
 
**Clamping & ranging** — `MinNode`, `MaxNode`, `ClampNode` for bounding outputs to valid ranges.
 
**Curves** — `AnimationCurveNode` wraps Unity's `AnimationCurve` asset, letting designers map one value to another visually. This is particularly powerful for XP curves, damage falloff, or any relationship that isn't linear.
 
**Randomness** — `RandomRangeNode` returns a random float between two bounds, re-evaluated each call. Useful for loot rolls, spawn variation, and crit damage.
 
**Constants & variables** — `ConstantNode` returns a fixed designer-set value. `ContextVariableNode` reads a named float from the runtime context — this is how live game state (player level, distance, health percentage) feeds into formulas.
 
**Custom operations** — the base `MathNode` class is public and designed to be extended. Adding a new node type means creating a ScriptableObject subclass and overriding `Evaluate()`. The new type appears in Unity's `CreateAssetMenu` immediately.
 
---
 
## Runtime Usage
 
Using a formula at runtime is two lines. Pass a context with the named inputs the formula expects, then call `Evaluate()` on the root node:
 
```csharp
// Build the context with runtime values
var context = new MathContext();
context.Set("baseDamage",       weapon.baseDamage);
context.Set("attackMultiplier", player.stats.attackMultiplier);
context.Set("defence",          target.stats.defence);
 
// Evaluate — returns a float
float damage = damageFormula.Evaluate(context);
```
 
`damageFormula` is a serialized reference to a `MathNode` asset — the root of whatever graph the designer built. The calling code doesn't know or care what the graph looks like. It just provides inputs and reads the output.
 
This separation is the core value of the system. **Programmers define what inputs are available. Designers define what to do with them.** Neither side needs to touch the other's work to iterate.
 
---
 
## In-Editor Preview
 
One of the most useful features is that designers don't need to run the game to test a formula. Each `MathNode` Inspector renders a preview panel where you can enter test input values and see the evaluated output immediately.
 
This means a designer can build a damage formula, plug in a few representative values — low-level player against high-defence enemy, high-level player against low-defence enemy — and verify the curve feels right, all from the Inspector, before the formula is ever wired into gameplay.
 
For `AnimationCurveNode` specifically, the curve editor and the live output update in sync as you drag control points, giving immediate visual feedback on how the mapping behaves.
 
---
 
## What I Learned
 
The recursive ScriptableObject graph pattern is clean but has one sharp edge: **circular references**. If a node somehow references itself — directly or through a chain — `Evaluate()` recurses infinitely. MathEngine guards against this with a depth counter in the context object that throws a descriptive exception rather than crashing Unity.
 
The other lesson was about the `ContextVariableNode` design. The first version used a string lookup at runtime to find named variables in the context. That worked but had no editor-time validation — typos in variable names only surfaced at runtime. The current version adds a custom PropertyDrawer that shows a dropdown of all context variables the calling code has registered, turning a runtime error into a compile-time selection.
 
---
 
## What's Next
 
The areas I want to expand:
 
- **Visual graph editor** — the current Inspector-based workflow works but a node graph view (using Unity's GraphView API) would make complex formulas much easier to read and edit
- **Integer and vector support** — the current system is float-only; supporting `int` and `Vector2/3` outputs via generics would cover more use cases
- **Formula validation** — static analysis of the graph at edit time to catch disconnected nodes, missing context variables, and division-by-zero risks before runtime
 
MathEngine is open source. If you've ever wanted to hand a formula to a designer and trust they can tune it without breaking the build, it might be worth a look.
 
[View MathEngine on GitHub →](https://github.com/arijeetbaruah/Maths-Engine)
