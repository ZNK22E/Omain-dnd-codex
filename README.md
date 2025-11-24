# The Grand Archives of Sacro Elcarion

A Starlight/Astro-powered **D&D campaign codex** for the world of Omain. Built to sync with Obsidian and Git so the DM can update lore, sessions, characters, and locations with simple markdown files.

**Live Site:** [https://znk22e.github.io/Omain-dnd-codex/](https://znk22e.github.io/Omain-dnd-codex/), (soon to be migrated to a dedicated VPS & Domain).

## 1. Tech Stack

- **Astro**, **Starlight** and **CustomCSS** for docs theme
- **Markdown / MDX** for content
- **TypeScript-ready** config (but we haven't used this)
- Designed to work well with **Obsidian, Git and GitHub** workflows
- **Github Pages** for hosting

## 2. Prerequisites

Make sure you have:

- **Node.js** >= 18
- **npm** or pnpm/yarn if you prefer
- **Git**

Check versions:

```bash
node -v
npm -v
git --version
```

## 3. Getting Started (Local Dev Setup)

1. **Clone the repo**

   ```bash
   git clone https://github.com/ZNK22E/Omain-dnd-codex.git
   cd omain-dnd-codex
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the dev server**

   ```bash
   npm run dev
   ```

   Then open the printed URL in your browser, usually:

   - http://localhost:4321

4. **Stop the dev server**

   - Hit `Ctrl + C` in the terminal window running `npm run dev`.

## 4. Project Structure

```text
omain-dnd-codex/
├─ astro.config.mjs          # Astro + Starlight configuration
├─ package.json              # Scripts & dependencies
├─ .gitignore                # Files Git will ignore
├─ src/
│  ├─ styles/
│  │  └─ custom.css          # Custom theming (fonts, colors, hero styling, cards)
│  ├─ content/
│  │  └─ docs/               # All content lives here
│  │     ├─ index.mdx        # Homepage ("The Grand Archives")
│  │     ├─ sessions/        # The Session Ledger
│  │     │  ├─ index.mdx     # Sessions index page
│  │     │  └─ ...           # Individual session files
│  │     ├─ lore/            # The Lore Stacks
│  │     │  ├─ index.mdx
│  │     │  └─ ...           # Lore categories + articles
│  │     ├─ characters/      # The Character Index
│  │     │  ├─ index.mdx
│  │     │  └─ ...           # Character groups + NPC/PC pages
│  │     ├─ locations/       # The Atlas of Omain
│  │     │  ├─ index.mdx
│  │     │  └─ ...           # Countries, cities, landmarks
│  │     └─ reference/       # Observer tools & guides
│  │        ├─ index.mdx     # "Tools of the Observer" landing (not yet implemented)
│  │        └─ ...           # Git cheat sheet, Markdown cheat sheet, etc.
```

## 5. Routes & Navigation

Starlight maps docs files to routes like this:

- `/` Home
- `/sessions/` The Session Ledger
- `/lore/` The Lore Stacks
- `/characters/` The Character Index
- `/locations/` The Atlas of Omain
- `/reference/` Tools of the Observer

## 6. Editing Content (DM Guide)

### 6.1 Frontmatter Example

```md
---
title: "Session 01 — Prologue at the Ember Inn"
description: "The party meets amidst rumours, cheap ale, and a missing caravan contract."
---
```

### 6.2 File Naming Rules

- Use **kebab-case**
- Make filenames descriptive & permanent
- Good:
  - `session-03-fallen-moon.md`
  - `ember-inn.md`
- Avoid:
  - `new-lore.md`
  - `notes.md`

## 7. NPM Scripts

```bash
npm run dev
npm run build
npm run preview
```

This will, in order;

- Start the dev server
- Build the static site
- Preview the production build

## 8. Build & Preview

```bash
npm run build
npm run preview
```

Output site is served from:

```
dist/
```

## 9. Deployment Pipeline

This is currently served with Github Pages and will soon be migrated over to a dedicated VPS hosted by [Nathan K.](https://nkitch.com)

Running a deploy.yml provided by [Astro Documentation](https://docs.astro.build/en/guides/deploy/github/)

## 10. Git Workflow (Quick Rituals)

```bash
git status
git add .
git commit -m "Add Session 05 + two new NPCs"
git push origin main
```

To pull remote updates:

```bash
git pull origin main
```

## 11. Troubleshooting

**Page not appearing**

- Ensure it's inside `src/content/docs/`
- Ensure filename has `.md` or `.mdx`

**Sidebar missing entry**

- Add it to `astro.config.mjs` _or_
- Use autogenerate rules

**Frontmatter errors**

- Use spaces, not tabs
- Ensure `---` at the top

## 12. Contributing

Have a cool idea, formatting suggestion, or styling update?

Submit a PR or open an issue. Collaboration is always welcome.

## 13. License

This codex exists for storytelling, fun, and chaos. Use it, fork it, remix it.

## Contributors

List of everyone who has worked on the project, no matter the aspect, web development, lore writing/author and players. Everyone has made this possible.
if you want to put yourself on here, feel free and make sure you have stated what you have done for the project.

- **Edward** > Lore writer, creator of the Omain Campaign. The subsequent "Observer" (DM). Helped with web development and the mastermind behind Omain.
- **Nathan** > Web development. Brought the idea forward to create a website to log all our sessions which spiralled into what we have now, the "Codex".
- **Robbie** > Character building and lore expansion.
- **Matthew** > Lore expansion.
- **Deakin* > Character Building and lore expansion.  
