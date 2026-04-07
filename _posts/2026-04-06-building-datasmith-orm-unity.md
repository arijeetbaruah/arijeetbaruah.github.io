---
layout: post
title: "Building DataSmith — A Code-Generation ORM for Unity"
subtitle: "How I built a reflection-based ORM that generates type-safe C# repositories, SQL migrations, and Unity Editor tooling from plain C# class annotations — and why Unity needed it."
date: 2026-04-06
category: deep-dive
tags:
  - Unity
  - C#
  - open-source
  - tooling
  - code-generation
---

Every time I started a new Unity project that needed persistent data, I found myself writing the same things over and over. A `PlayerData` class. A `SaveManager` that serialized it to JSON. A handful of `GetPlayer()`, `SavePlayer()`, `DeletePlayer()` methods. Then the same thing again for `InventoryItem`. And `LevelProgress`. And `Settings`.

It was boilerplate — the kind of code that doesn't require thinking, just typing. And every time I wrote it, I wondered why I was the one doing it instead of a tool.

That question became **DataSmith** — an open-source ORM for Unity that generates type-safe data access code from C# class annotations, with three interchangeable backends: SQLite, JSON (via Newtonsoft), and Unity's ScriptableObject system.

---

## The Problem

Unity doesn't ship with a data access layer. If you want persistent data, you're on your own. The typical solutions each have tradeoffs:

**Raw SQLite** gives you a real relational database, but you're writing raw SQL strings scattered across your codebase. No type safety, no refactoring support, and a typo in a column name only surfaces at runtime.

**JSON serialization** is simple for small datasets but becomes unwieldy fast. You end up with a monolithic save file, manual versioning logic, and no way to query — only load-everything-then-filter.

**PlayerPrefs** is fine for a handful of values but falls apart the moment your data has any structure.

What I wanted was something closer to how ORMs work in web development — define your data model once, and have the repetitive access code generated automatically. Type-safe, backend-agnostic, and something any programmer on the team could use without knowing the underlying storage details.

---

## The Design

The core idea is simple: **annotate your C# classes, and DataSmith generates the rest.**

```csharp
[DataSmithTable]
public class PlayerData
{
    [PrimaryKey, AutoIncrement]
    public int Id { get; set; }

    [Column("player_name")]
    public string Name { get; set; }

    public int Score { get; set; }
    public System.DateTime LastSeen { get; set; }
}
```

From this single class definition, DataSmith generates:

- A **repository class** (`PlayerDataRepository`) with `Insert`, `Update`, `Delete`, `FindById`, `FindAll`, and `Query` methods — all fully typed
- A **SQL migration script** for the SQLite backend — creates the table with correct column types, handles schema changes
- **Unity Editor tooling** — a custom inspector window that lets designers browse, add, edit, and delete records at edit time without writing any code

The key constraint I set for myself: **the user's model class stays clean**. No base class inheritance, no interface implementation, no code changes required beyond the annotations.

---

## How Code Generation Works

DataSmith uses **C# Reflection combined with string building** at runtime inside the Unity Editor.

When you trigger generation (via the Editor menu or a custom asset), DataSmith:

1. **Scans the assembly** for all classes marked with `[DataSmithTable]`
2. **Reflects over each class** — reading its properties, their types, and their attributes
3. **Builds the output strings** — repository code, SQL DDL, and Editor window code — by walking the reflected metadata and emitting the appropriate lines
4. **Writes the generated `.cs` files** into a designated output folder in your project

```csharp
// Simplified — what the reflection pass looks like internally
foreach (var prop in modelType.GetProperties())
{
    var columnAttr = prop.GetCustomAttribute<ColumnAttribute>();
    var columnName = columnAttr?.Name ?? prop.Name.ToSnakeCase();
    var sqlType    = MapToSqlType(prop.PropertyType);

    ddlBuilder.AppendLine($"    {columnName} {sqlType},");
    repoBuilder.AppendLine(GenerateGetterSetter(prop, columnName));
}
```

The generated files are **plain C# that you can read, diff, and commit**. There's no magic at runtime — DataSmith's job is done at generation time, and the output is just normal code that any IDE understands.

---

## Three Backends, One Interface

The same repository interface works across all three backends. Swapping backends is a one-line config change — the calling code doesn't change at all.

**SQLite backend** uses [sqlite-net](https://github.com/praeclarum/sqlite-net) under the hood. Good for structured data that needs querying, relationships, or large datasets. Generated migrations handle `ALTER TABLE` for schema changes.

**JSON backend** uses Newtonsoft.Json for serialization. Each table maps to a `.json` file. Good for small datasets, human-readable saves, and projects where designers need to edit data files directly.

**ScriptableObject backend** stores records as Unity ScriptableObject assets. Good for game configuration data that lives in the project rather than user saves — items, levels, enemy stats. Designers can edit records directly in the Inspector.

---

## The Unity Editor Tooling

The generated Editor window was the part I found most satisfying to build.

Each `[DataSmithTable]` class gets a custom Editor window that renders a table of all current records — with inline editing, add/delete buttons, and a search field. It's generated from the same reflection pass as the repository, so it always matches the current model definition exactly.

For designers, this means they can work with game data without opening a CSV, editing a JSON file, or asking a programmer to hardcode values. For programmers, it means the data layer is self-documenting — the Editor window is a live view of exactly what's in the database.

---

## What I Learned

Building DataSmith taught me a lot about the limits of Reflection in Unity specifically. IL2CPP — Unity's AOT compilation backend for mobile and console — strips type metadata that Reflection depends on unless you explicitly preserve it. Getting DataSmith to work reliably on IL2CPP builds required adding `[Preserve]` attributes to generated code and documenting the `link.xml` configuration users need.

The other lesson was about scope. The first version tried to do too much — relationships, migrations with rollback, lazy loading. I stripped it back to the minimal useful thing: annotate a class, generate a repository, pick a backend. That constraint made the tool actually shippable and the codebase comprehensible to contributors.

---

## What's Next

DataSmith is open source and actively maintained. The areas I'm most interested in expanding:

- **Relationships** — `[ForeignKey]` support with generated join queries
- **Migration diffing** — automatically detecting schema changes between model versions and generating the appropriate `ALTER TABLE` statements
- **Cloud backend** — a fourth backend targeting Unity Gaming Services or Firebase for multiplayer-compatible persistent data

If you're building a Unity project and find yourself writing the same data access boilerplate again, give it a try.

[View DataSmith on GitHub →](https://github.com/arijeetbaruah/DataSmith)
