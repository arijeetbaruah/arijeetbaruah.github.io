---
layout: post
title: "How I Built SongBeats' Offline Mode — A Fuzzy Request Matcher for Unity"
subtitle: "When the server goes away, the game keeps playing. Here's how I built a request-matching cache and configurable response generator that simulates a live API entirely on the client."
date: 2026-04-08
category: deep-dive
tags:
  - Unity
  - C#
  - networking
  - architecture
  - mobile
---

Most offline modes are a lie. The game shows you a cached screen, blocks off half the features, and puts up a "no internet connection" banner until you reconnect. You're not really playing — you're waiting.

When I was brought onto SongBeats to build offline support, the brief was different: **the game should keep working**. Players should be able to play songs, earn scores, and progress — even when the server is completely unreachable. The catch was that SongBeats' core gameplay loop was deeply tied to live API calls. Song data, beat maps, scoring logic — all of it lived server-side.

This is what I built to solve it.

---

## The Problem

SongBeats communicated with a backend via REST API. During normal play, the client would send requests — fetch a song, submit a score, get a leaderboard — and the server would respond. The responses drove gameplay directly: beat maps told the game what notes to spawn, scoring endpoints calculated and returned the player's result.

Taking this offline meant solving two distinct problems:

1. **Data availability** — how do you serve song data and beat maps when there's no server to ask?
2. **Scoring logic** — the score calculation happened server-side. With no server, where does that go?

A naive cache — store the last response and replay it — wouldn't work. Requests carry parameters. A "fetch song" request for song ID 42 is different from one for song ID 7. A score submission carries the player's actual performance data. You can't just replay a saved response blindly.

---

## The Approach: Record, Match, Respond

The system works in three phases: **recording** during online sessions, **matching** when offline, and **generating** when no match is close enough.

### Phase 1 — Recording

While the player is online, every outgoing request and its corresponding response are intercepted and written to a local cache file. This happens transparently — no changes to the existing request code.

Each saved entry stores the full request (endpoint, method, parameters) and the full response body. But not all parameters are equal. Some parameters — like a song ID, or a difficulty level — are *essential* to identifying which response is relevant. Others — like a session token, or a timestamp — are noise that will differ on every request even if everything meaningful is the same.

So each API endpoint is configured with a list of **important variables** — parameters that must match for a cached response to be considered relevant at all.

Designers and programmers can inspect and adjust the important variable list per endpoint without touching code.

### Phase 2 — Matching

When the player goes offline and the client makes a request, instead of hitting the network it goes to the offline cache. The matcher searches all saved entries for the same endpoint, then scores each candidate against the incoming request.

The scoring works like this:

- For each parameter in the incoming request, compare it against the corresponding parameter in the saved entry
- Each matching parameter adds to the score
- **If the parameter is marked as important and it does not match, the candidate is immediately eliminated** — no partial credit

The candidate with the highest score after elimination wins. Its saved response is returned to the caller exactly as if it had come from the server.

```csharp
private CachedEntry FindBestMatch(ApiRequest incoming)
{
    var config    = GetConfig(incoming.endpoint);
    CachedEntry best  = null;
    int         bestScore = -1;

    foreach (var entry in cache.GetEntries(incoming.endpoint))
    {
        // Hard elimination on important variables
        bool eliminated = false;
        foreach (var key in config.importantVariables)
        {
            if (incoming.GetParam(key) != entry.request.GetParam(key))
            {
                eliminated = true;
                break;
            }
        }
        if (eliminated) continue;

        // Score remaining parameters
        int score = 0;
        foreach (var key in incoming.parameters.Keys)
        {
            if (entry.request.GetParam(key) == incoming.GetParam(key))
                score++;
        }

        if (score > bestScore)
        {
            bestScore = score;
            best      = entry;
        }
    }

    return best;
}
```

This approach handles the reality that cached entries are never a perfect match for future requests — but the closest match is usually close enough to be useful.

### Phase 3 — Generation

Matching works well for read requests — fetching song data, loading beat maps, getting configuration. But some requests genuinely can't be answered by replaying a saved response. Score submission is the clearest example: the player just performed a run with specific accuracy numbers, combo streaks, and timing data. There's no cached response that corresponds to *this exact performance*.

For these cases, each `ApiEndpointConfig` can reference a **custom response generator** — a class that receives the incoming request and produces a valid response from scratch:

```csharp
public abstract class OfflineResponseGenerator : ScriptableObject
{
    public abstract string Generate(ApiRequest request);
}
```

The score submission generator, for example, reads the performance data from the request, runs the same scoring formula the server would have used, and returns a properly structured response. The game receives it and behaves exactly as if the server had calculated it.

Because the generator is a ScriptableObject, it's configured per-endpoint in the API config asset. Swapping or extending a generator doesn't require changes to the offline system itself — you just assign a different asset.

---

## The Type Architecture

The system is built on a hierarchy of generic base classes that use reflection to wire everything together automatically.

At the foundation are two base classes — `BaseRequest` and `BaseResponse<TGenerator>` — which carry the request/response fields as C# properties. `TGenerator` is the type of the custom response generator for that endpoint, making the generator strongly typed per request rather than a generic fallback.

On top of those sits `BaseRESTRequest<TRequest, TResponse>`, which handles the actual HTTP communication. Rather than hardcoding which fields are important or how responses are stored, this class uses **reflection to read the configuration at runtime** from a third class: `RESTRequestConfig<TRequestConfig, TRequest, TResponse>`.

`RESTRequestConfig` is what ties the system together. It derives per-endpoint and declares:

- Which fields from `TRequest` are marked as important (hard-elimination during matching)
- The **score weightage** of each non-important field — so a matching `difficulty` parameter can count more than a matching `locale` parameter
- The **storage strategy** for cached responses

```csharp
public abstract class RESTRequestConfig<TConfig, TRequest, TResponse>
    : ScriptableObject
    where TRequest  : BaseRequest
    where TResponse : BaseResponse<OfflineResponseGenerator>
{
    // Fields reflected from TRequest, marked with attributes
    // to indicate importance and score weight
}
```

Using reflection to read this config means that adding a new field to a request class — and tagging it with `[ImportantVariable]` or `[ScoreWeight(2)]` — is enough to integrate it into the matching system. No registration, no switch-case, no manual wiring.

---

## Storage Strategies

One of the cleanest parts of the design is how the cache storage itself is configurable per endpoint. Rather than a one-size-fits-all approach, each `RESTRequestConfig` specifies a storage strategy. Two are built in:

**Always Replace** stores exactly one cached response per unique set of important variable values. When a new response arrives for the same important variables, it overwrites the previous one. This is right for endpoints where you only ever need the latest state — user profile data, current song library, active event config.

**Queued Response** keeps multiple versions of the response up to a configured limit (say, 10 entries). When the limit is reached, the oldest entry is evicted to make room for the new one. This is right for endpoints where history matters — score submissions, match replays, any endpoint where you might want to return different responses across multiple offline calls rather than the same one repeatedly.

```csharp
public enum CacheStrategy { AlwaysReplace, QueuedResponse }

public abstract class RESTRequestConfig<TConfig, TRequest, TResponse>
    : ScriptableObject
{
    public CacheStrategy strategy;
    public int           queueLimit = 10; // only used by QueuedResponse
}
```

The matching and eviction logic is handled by the base class — the per-endpoint config just declares which strategy to use.

---

## What This Looks Like End-to-End

A player opens SongBeats on a plane with no wifi. They've played before, so the cache has entries from their previous sessions.

1. They tap a song. The client requests song data for ID 42. The offline matcher finds a cached entry for song 42 with a matching `song_id` important variable. The beat map loads normally.
2. They finish the song. The client submits their score. No cached response matches — score submissions are unique. The matcher falls back to the score generator, which calculates their result from the performance data in the request. The result screen shows their score.
3. They tap a song they've never played before — no cache entry exists. The matcher finds no candidates. The game surfaces a "not available offline" message for that specific song, while everything else keeps working.

---

## The Configuration Workflow

One of the goals from the start was that **adding offline support for a new endpoint shouldn't require a programmer**. The system is designed so that once the infrastructure is in place, extending it is a configuration task:

1. Add the endpoint to the API config ScriptableObject
2. Mark which parameters are important
3. If the endpoint needs generated responses, write a generator class and assign it

For most read endpoints, step 3 isn't needed at all — the matcher handles them with cached data.

---

## What I'd Do Differently

The biggest limitation of the current system is **cache staleness**. If a player hasn't been online for a long time and the server has updated song data or scoring parameters, their cache reflects the old state. The current system has no TTL or invalidation mechanism — entries live until the cache is cleared manually.

A proper solution would attach metadata to each cache entry — a server-provided version hash or timestamp — and invalidate stale entries when the player reconnects. That would keep the offline experience accurate without requiring a full cache rebuild on every session.

The other thing I'd revisit is the generator abstraction. ScriptableObject generators work well for simple cases, but generators that need access to complex game state — player progression, unlocks, server-side tables — quickly become awkward to wire up without an injection mechanism. A service-locator or dependency injection approach would make generators more powerful without making them harder to configure.

---

The system shipped and players haven't noticed it — which is exactly the right outcome for an offline mode. The game just works.

[View the project →](/projects/SongBeats.html)
