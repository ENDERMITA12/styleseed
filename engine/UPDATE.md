# Updating StyleSeed

How to pull the latest engine updates into your existing project.

## Check for Updates

```bash
# In your styleseed clone
cd styleseed
git pull origin main

# See what changed
git log --oneline -10
```

## What's Safe to Update

| File/Directory | Safe to overwrite? | Why |
|---------------|-------------------|-----|
| `CLAUDE.md` | **Yes** | Engine guide, no project-specific content |
| `DESIGN-LANGUAGE.md` | **Yes** | Design rules, only additions |
| `.claude/skills/` | **Yes** | Skill definitions, no project state |
| `.cursorrules` | **Yes** | Cursor rules, generic |
| `components/ui/` | **Yes if unmodified** | Primitives — if you customized any, diff first |
| `tokens/` | **Yes** | JSON token source files |
| `utils/format.ts` | **Yes if unmodified** | Utility functions |
| `icons/index.tsx` | **Yes if unmodified** | Icon library |

## What NOT to Overwrite

| File/Directory | Why |
|---------------|-----|
| `src/styles/theme.css` | **Your skin** — has your brand colors |
| `components/patterns/` | You may have customized or added patterns |
| `scaffold/` | Only needed for new projects |
| Any file you've modified | Check `git diff` first |

## Update Commands

### Quick update (engine docs + skills only — always safe)
```bash
cp styleseed/engine/CLAUDE.md your-project/CLAUDE.md
cp styleseed/engine/DESIGN-LANGUAGE.md your-project/DESIGN-LANGUAGE.md
cp -r styleseed/engine/.claude/skills/ your-project/.claude/skills/
cp styleseed/engine/.cursorrules your-project/.cursorrules
```

### Full update (check for conflicts first)
```bash
# See what's different
diff -r styleseed/engine/components/ui/ your-project/src/components/ui/

# If no custom changes, safe to copy
cp -r styleseed/engine/components/ui/ your-project/src/components/ui/
```

## Version Tracking

Check your version vs latest:
```bash
# Latest version
cd styleseed && git describe --tags

# Or check GitHub releases
# https://github.com/bitjaru/styleseed/releases
```
