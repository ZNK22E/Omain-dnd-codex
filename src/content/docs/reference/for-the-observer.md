---
title: "The Observer’s Mandate"
description: "How to feed the Grand Archives with new sessions, lore, characters, and locations."
---

> _“Ink fades. Memory lies. The Archives remember.”_  
> — Elion of the Stacks

Welcome, **Observer**.

This page explains how to grow the Grand Archives of Sacro Elcarion: where each kind of note lives, how to use the templates, and how to keep everything tidy so future you and your victims can still make sense of it all.

You do **not** need to know Astro, MDX, or web development magic, these are forbidden arts.  
If you can edit a markdown file and commit with Git, you can feed the Archives.

---

## 1. How the Archives are structured

Each shelf in the sidebar maps to a folder on disk:

| Shelf          | Path                           | What lives here                                         |
| -------------- | ------------------------------ | ------------------------------------------------------- |
| **Sessions**   | `src/content/docs/sessions/`   | Play logs for each session                              |
| **Characters** | `src/content/docs/characters/` | PCs, NPCs, and deities                                  |
| **Locations**  | `src/content/docs/locations/`  | Cities, villages, countries, landmarks                  |
| **Lore**       | `src/content/docs/lore/`       | Conflicts, religions, divinity, world-level information |
| **Reference**  | `src/content/docs/reference/`  | Meta docs like this one                                 |

Within those, subfolders mirror the Obsidian vault:

### Characters

```text
characters/
  honourable-mentions/
  influential-people/
  pantheon/
```

### Locations

```text
locations/
  cities-and-villages/
  countries/
  landmarks/
```

### Lore

```text
lore/
  conflicts/
  divinity/
  omain/
  religions/
```

### Sessions

```text
sessions/
  index.mdx
  template-session.md
  session-01-some-title.md
```

Each subfolder has a **template** file.  
Duplicate it, rename it, fill it in and you're done.

---

## 2. Golden rules for adding new entries

### 2.1 Pick the correct shelf

- A **play log** → `sessions/`
- A **person, NPC, PC, deity** → `characters/...`
- A **city, village, country, landmark** → `locations/...`
- **Worldbuilding, history, religion, conflicts** → `lore/...`

### 2.2 Copy the template

Inside every folder is a template named like:

```
_template-session.md
_template-influential.md
_template-country.md
_template-conflict.md
```

Duplicate it, rename it, then edit.

### 2.3 Add frontmatter

Every file must begin with a YAML block:

```yaml
---
title: "A Good, Descriptive Title"
description: "A short summary for search results and sidebars."
---
```

This makes Starlight recognise and display the page.

### 2.4 Write markdown

Everything beneath the frontmatter is normal markdown:

```md
## Summary

A paragraph of useful information.

## Key Details

- Bullet points work great.
```

### 2.5 Save, Commit, Push

The site rebuilds and updates automatically.

---

## 3. Drafts vs published entries

If you're still writing or the party hasn’t discovered something yet, in the front matter, add:

```yaml
draft: true
```

A **draft** YAML block will look like:

```yaml
---
title: "A Good, Descriptive Title"
description: "A short summary for search results and sidebars."
draft: true
---
```

- The page still exists
- You can open it directly
- It does **not** appear in the sidebar

Remove `draft: true` when ready to reveal it to the Archives.

---

## 4. Where the templates live

Quick guide:

| Folder                            | Use for                       |
| --------------------------------- | ----------------------------- |
| `sessions/`                       | Session recaps                |
| `characters/honourable-mentions/` | Minor NPCs                    |
| `characters/influential-people/`  | Major NPCs & powerful figures |
| `characters/pantheon/`            | Gods & divine beings          |
| `locations/cities-and-villages/`  | Settlements                   |
| `locations/countries/`            | Nations & states              |
| `locations/landmarks/`            | Ruins, towers, sacred sites   |
| `lore/conflicts/`                 | Wars, political struggles     |
| `lore/divinity/`                  | Cosmology & divine order      |
| `lore/religions/`                 | Churches, cults & faiths      |
| `lore/omain/`                     | World-scale notes             |

If in doubt, choose whatever feels most natural this is _your world_.

---

## 5. Naming conventions

### Filenames should use kebab-case

```
session-04-the-death-road.md
emberfall-city.md
church-of-sacro-elcarion.md
```

### Titles should be human-readable

```yaml
title: "Session 04 — The Death Road"
title: "Emberfall"
title: "Church of Sacro Elcarion"
```

### Sessions should include the session number

It keeps them sorted nicely.

---

## 6. Troubleshooting

### It’s not showing in the sidebar

Check:

- Is the file in the correct folder?
- Does it have frontmatter?
- Does it have a `title`?
- Is `draft: true` still set?

### The page URL looks strange

Remember: URLs come from filenames, not titles. Titles are a mere reflection for The Archives

### A subfolder isn’t appearing

Starlight only shows folders that contain at least one published page.

---

## 7. Final words for the Observer

The Archives are designed so you can:

- Write freely in Obsidian
- Move finished lore into the Archives
- Never think about formatting, routing, or code

Your only responsibilities are **naming, organising, and worldbuilding**, this is where the fun begins.

As long as you follow:

> right folder → copy template → rename → fill frontmatter → write markdown → commit

…the Grand Archives will grow into a living history of your world.

_The stacks await your ink, Observer. Continue the record._
