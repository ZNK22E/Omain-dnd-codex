---
title: "Script of the Archives"
description: "Markdown guidance for writing clear, consistent entries in the Codex."
---

> _“Clarity of script is clarity of memory.”_

This guide shows the markdown you’ll actually use in the Grand Archives.  
Anything more complex is optional flavour, not a requirement.

---

## 1. Frontmatter (the page’s identity)

Every page in the Archives starts with **frontmatter**, a YAML block between `---` lines:

```yaml
---
title: "Session 03 — The Shattered Road"
description: "The party leaves Emberfall and realises the roads are no longer safe."
type: "session"
sessionNumber: 3
draft: true
---
```

- `title` - what appears in the sidebar and at the top of the page.
- `description` - short summary for search/preview.
- `draft: true` - hide from the sidebar until it’s ready.

After the second `---`, you write normal markdown.

---

## 2. Headings

Use `#` for headings. More `#` = smaller heading.

```md
# Main Title (usually supplied by frontmatter)

## Section

### Subsection

#### Sub-subsection
```

Recommended pattern for sessions:

```md
## Summary

## Cast

## Major Events

## Consequences

## Loot & Rewards
```

For lore/locations:

```md
## Overview

## History

## Important Figures

## Hooks
```

---

## 3. Emphasis (bold, italics)

```md
_italic text_
**bold text**
**_bold and italic_**
```

Example:

```md
The **Church of Sacro Elcarion** claims to serve the light, but its _methods_ suggest otherwise.
```

---

## 4. Lists

### Bullet lists

```md
- First point
- Second point
  - Indented sub-point
```

### Numbered lists

```md
1. First step
2. Second step
3. Third step
```

Perfect for timelines and ordered events.

---

## 5. Links

### Internal links (optional but nice)

If you know the URL/slug:

```md
See also: [Emberfall](/locations/cities-and-villages/emberfall/)
```

### External links

```md
[Official D&D SRD](https://www.dndbeyond.com/)
```

---

## 6. Tables (for clean structured info)

Tables are great for NPCs, factions, loot, etc.

```md
| Name          | Role               | Notes                         |
| ------------- | ------------------ | ----------------------------- |
| Elion         | Archivist          | Knows far too much.           |
| Jora          | Innkeeper          | Owns the Ember Inn.           |
| Father Malrec | Priest of Elcarion | Smiles too much at autopsies. |
```

Make sure the header row, separator row, and data rows all have the same number of `|` columns.

---

## 7. Code blocks (for mechanics, rolls, or technical notes)

Use triple backticks <code>```</code> to create a fenced block:

````md
```text
DC 15 Perception to notice the hidden sigil.
On a success: they sense they’re being watched.
On a failure: the sigil activates later, unnoticed.
```
````

````

(When writing this in a real file, remove the extra indentation/backticks around the example.)

You can also tag the block with a language like `bash`, `json`, etc. for technical notes.

---

## 8. Blockquotes (for in-world text or emphasis)

```md
> This is a blockquote.
> It can span multiple lines.
````

Example for lore:

```md
> “The First Turning was not a blessing. It was a bargain.”  
> — Fragment from the Ashen Tablets
```

---

## 9. Horizontal rules (scene breaks)

Use three or more dashes:

```md
---
```

Great for separating sections or scenes:

```md
## Major Events

- The caravan is found destroyed.
- The only survivor speaks of pale lights in the fog.

---

## Consequences

- Trade prices in Emberfall spike.
- The Church quietly sends its own investigators.
```

---

## 10. Images (optional, if/when used)

If you later add maps or character art and store them under `/public`:

```md
![Alt text for screen readers](/images/maps/emberfall-city-map.png)
```

Keep alt text short but descriptive.

---

## 11. Common patterns for the Observer

### Session layout

```md
---
title: "Session 05 — Into the Shattered Pass"
description: "The party braves the pass and discovers what stalks the old road."
type: "session"
sessionNumber: 5
---

## Summary

Brief recap of the session.

## Cast

- **Character** – role this session.
- **NPC** – how they were involved.

## Major Events

- Event 1
- Event 2

## Consequences

- Immediate fallout.
- Long-term repercussions.

## Loot & Rewards

- Gold, items, favours, information.
```

### Location layout

```md
---
title: "Emberfall"
description: "Trade-city built around an ever-burning forge."
type: "location"
category: "city"
region: "Central Omain"
---

## Overview

High-level description and vibe.

## Districts

- **Forge Quarter** – industrial, noisy, hot.
- **Sky Market** – precarious walkways and rope bridges.

## Important Figures

- **Elra the Forgemaster** – controls most metalwork.
- **Jora** – innkeeper and information broker.

## Hooks

- Rumours, quests, reasons to come back.
```

---

## 12. When in doubt

If something looks strange in the rendered site:

1. Check for missing closing `"` or `---` in the frontmatter.
2. Make sure headings start at `##` (since the page title is already `#`).
3. Ensure tables have the same number of columns per row.
4. Avoid mixing tabs and spaces around list bullets.

If it still misbehaves, hand it to the Scribe (your dev friend) and blame the quills.

_Your job is to remember the world. The markdown is just the script the Archives read._
