---
title: "Curating the Indexes"
description: "How the Observer keeps the Session, Lore, Character, and Location indexes tidy and useful."
---

> _“Shelves mean nothing if no one can find what they seek.”_

This guide explains how the **index pages** work in the Grand Archives, and how you, the Observer, can keep them clean and readable.

Each of the main shelves has an `index.mdx` file:

- `src/content/docs/sessions/index.mdx`
- `src/content/docs/lore/index.mdx`
- `src/content/docs/characters/index.mdx`
- `src/content/docs/locations/index.mdx`

These are **hand-crafted landing pages**. They give players and future-you a quick overview and easy entry points into the deeper notes.

You do **not** need to touch Astro or config files to update them — just edit the markdown/MDX.

---

## 1. How the Session Ledger index works

**File:** `src/content/docs/sessions/index.mdx`  
**Shelf:** Sessions = The Session Ledger

This page is where you list each session in a clean, chronological grid.

Inside the file you’ll see cards like this:

```mdx
<div class="library-grid">

<a class="library-card" href="./session-01-prologue-at-the-ember-inn/">
  <div class="library-card-icon">(SVG Image)</div>
  <h2>Session 01 — Prologue at the Ember Inn</h2>
  <p>Short one–two sentence summary of the session.</p>
</a>

  <!-- more cards here -->

</div>
```

To **add a new session**:

1. Create the full session page from your `template-session.md` file.
2. Copy an existing card in the grid.
3. Change:
   - `href` - the relative link to your new session file (no `.md` extension)
   - `<h2>` text - session number & title
   - `<p>` text - one–two sentence summary
4. Keep the cards in session order (01, 02, 03, ...).

> Tip: The icons are purely decorative. Use SVG images that feels right, for key sessions, arcs, etc. Should you have any issues, the scribe can lend his power.

---

## 2. The Lore Stacks index

**File:** `src/content/docs/lore/index.mdx`  
**Shelf:** Lore = The Lore Stacks

This index is a **map of big themes**, not every single lore article.

Use it to highlight the major categories:

- Conflicts
- Divinity
- Religions
- Omain (world-level notes)

A typical layout looks like:

```mdx
<div class="library-grid">
  <a class="library-card" href="./conflicts/">
    <div class="library-card-icon">(SVG Image)</div>
    <h2>Conflicts</h2>
    <p>Wars, political struggles, and tensions that shape the world.</p>
  </a>

{" "}

<a class="library-card" href="./divinity/">
  <div class="library-card-icon">(SVG Image)</div>
  <h2>Divinity</h2>
  <p>Cosmology, pantheons, and how divinity interacts with mortals.</p>
</a>

{" "}

<a class="library-card" href="./religions/">
  <div class="library-card-icon">(SVG Image)</div>
  <h2>Religions</h2>
  <p>Churches, cults, orders, and faiths across Omain.</p>
</a>

  <a class="library-card" href="./omain/">
    <div class="library-card-icon">(SVG Image)</div>
    <h2>Omain</h2>
    <p>High-level notes about continents, ages, and world history.</p>
  </a>
</div>
```

You rarely need to touch this page, only when:

- You add a whole new lore category, or
- You want to rewrite the blurbs to reflect how the campaign has evolved.

---

## 3. The Character Index

**File:** `src/content/docs/characters/index.mdx`  
**Shelf:** Characters = The Character Index

This index is a **hub** for character groups, not a list of every NPC.

Example structure:

```mdx
<div class="library-grid">
  <a class="library-card" href="./honourable-mentions/">
    <div class="library-card-icon">(SVG Image)</div>
    <h2>Honourable Mentions</h2>
    <p>Side characters and recurring faces the party keeps running into.</p>
  </a>

{" "}

<a class="library-card" href="./influential-people/">
  <div class="library-card-icon">(SVG Image)</div>
  <h2>Influential People</h2>
  <p>Rulers, fixers, guild leaders, and anyone with real pull.</p>
</a>

  <a class="library-card" href="./pantheon/">
    <div class="library-card-icon">(SVG Image)</div>
    <h2>Pantheon</h2>
    <p>Gods, saints, and entities that might answer a prayer… or not.</p>
  </a>
</div>
```

Use the subfolders (`honourable-mentions`, `influential-people`, `pantheon`) to store individual character pages.  
You can optionally add another section to spotlight **Player Characters** if you want.

---

## 4. The Atlas of Omain

**File:** `src/content/docs/locations/index.mdx`  
**Shelf:** Locations = The Atlas of Omain

This index summarises location types:

```mdx
<div class="library-grid">
  <a class="library-card" href="./cities-and-villages/">
    <div class="library-card-icon">(SVG Image)</div>
    <h2>Cities and Villages</h2>
    <p>Settlements where the party can trade, rest, and cause trouble.</p>
  </a>

{" "}

<a class="library-card" href="./countries/">
  <div class="library-card-icon">(SVG Image)</div>
  <h2>Countries</h2>
  <p>Kingdoms, republics, and empires that sway the fate of Omain.</p>
</a>

  <a class="library-card" href="./landmarks/">
    <div class="library-card-icon">(SVG Image)</div>
    <h2>Landmarks</h2>
    <p>Ruins, towers, forests, and places that matter to the story.</p>
  </a>
</div>
```

Inside each folder (`cities-and-villages`, `countries`, `landmarks`) you create individual markdown files for each place using their templates.

---

## 5. General rules for editing any index

1. **Don’t delete the frontmatter** at the top of the file.
2. Use the existing structure as a template, copy a card, change the bits you need.
3. Keep the language **short and punchy**. Cards are signposts, not full essays.
4. When you rename a folder or move things around, double-check `href="./something/"` paths still point where you expect.

If something breaks (404s, missing content), it’s almost always:

- A mistyped `href`
- A missing `/` at the end of the link
- Or a file being renamed without updating the link.

---

## 6. Recommended workflow after a session

1. **Write or tidy the session recap** in its own file under `sessions/` (using the template).
2. If new NPCs or locations were introduced, create their pages in `characters/` and `locations/`.
3. Add a new card to the **Session Ledger index** for that session.
4. If a major campaign arc or faction changed, consider updating a blurb on **Lore** or **Characters** index.
5. Commit and push your changes (`Git Rituals` covers this).

Do that consistently, and the indexes will always feel like curated shelves rather than random piles of parchment.

_The deeper the Archives grow, the more important these signposts become. Keep them sharp, and your future self will thank you._
