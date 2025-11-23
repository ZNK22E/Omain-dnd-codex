---
title: "Git Rituals"
description: "The Observer’s minimal Git workflow for updating the Grand Archives."
---

> _“Ink without preservation is just spilt thought.”_

This is the **bare minimum Git you need** to keep the Grand Archives of Sacro Elcarion updated.  
No branching wizardry, no rebasing nightmares, just the daily rituals.

---

## 1. The usual flow

When you’ve added or edited notes in the Archives folder:

1. See what changed
2. Stage the changes
3. Commit them with a message
4. Push to the remote (GitHub)

In terminal (inside the repo folder):

```bash
# 1. See what changed
git status

# 2. See the exact lines changed (optional)
git diff

# 3. Stage everything you've changed
git add .

# 4. Commit with a message
git commit -m "Update session notes and lore"

# 5. Push to GitHub
git push
```

That’s the main ritual. If you only remember this, you’re fine.

---

## 2. Before you start writing: pull latest

If someone else (or future you on another machine) has made changes, pull first:

```bash
git pull
```

This grabs the latest version of the Grand Archives from GitHub before you begin editing.

**Habit:**

- Sit down to work - `git pull`
- Finish your updates - `git status` > `git add .` > `git commit` > `git push`

---

## 3. Reading the status like an archivist

```bash
git status
```

You’ll see files as:

- **modified:** you changed them
- **new file:** you created them
- **deleted:** you removed them

Anything under **“Changes to be committed”** is already staged.  
Anything under **“Changes not staged for commit”** still needs `git add`.

---

## 4. Making clean, meaningful commits

Good commit messages help you remember what changed later.

Examples:

```bash
git commit -m "Add Session 05 recap and Emberfall updates"
git commit -m "Create template for conflicts under Lore"
git commit -m "Update Elion NPC details and fix typos"
```

Avoid:

```bash
git commit -m "stuff"
git commit -m "fix"
git commit -m "idk man"
```

Your future self will hate you.

---

## 5. If Git complains about conflicts

Sometimes, after a `git pull`, Git may say there are **merge conflicts**.

This means both your local copy and the GitHub copy changed the same lines.  
VS Code or your editor will usually highlight this with markers like:

```text
<<<<<<< HEAD
your version
=======
remote version
>>>>>>> main
```

You’ll need to:

1. Edit the file to choose or merge the correct lines.
2. Remove the conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`).
3. Stage and commit again:

```bash
git add path/to/file.md
git commit -m "Resolve merge conflict in session notes"
git push
```

If it looks scary: **stop, ask the Scribe.**

---

## 6. Undoing mistakes (light version)

### You staged too much

```bash
git reset
```

This un-stages everything but keeps your file changes.

### You changed a file but haven’t committed yet

```bash
git checkout -- path/to/file.md
```

This discards your local changes to that file and resets it to the last committed version.

> ⚠️ This cannot be undone. Only use this if you’re sure you don’t want your edits.

---

## 7. Quick reference

```bash
git status          # What changed?
git diff            # What exactly changed?
git add .           # Stage all changes
git commit -m "..." # Save a snapshot with a message
git pull            # Get latest from GitHub
git push            # Send your changes to GitHub
```

If you ever feel lost, this sequence will usually get you home:

```bash
git status
git pull
git add .
git commit -m "Update Archives"
git push
```

_The Archives don’t demand perfection, only consistency._
