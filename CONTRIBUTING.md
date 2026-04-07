# Contributing to StyleSeed

Thank you for your interest in contributing! StyleSeed thrives on community-created design seeds.

## Ways to Contribute

### 1. Create a New Seed (Most Impactful)

Each seed is a complete design language that AI coding tools can follow. The more seeds we have, the more design styles developers can choose from.

#### Quick Start: Use Claude Code to Create a Seed

The fastest way to create a new seed is to use Claude Code itself:

1. **Copy the template:**
   ```bash
   cp -r seeds/_template seeds/your-style-name
   ```

2. **Open Claude Code** in the `seeds/your-style-name/` directory

3. **Tell Claude:**
   ```
   Look at seeds/toss/ as a reference implementation. 
   Create a [Your Style]-style design language following the same structure.
   
   Style characteristics:
   - [Describe the visual style you want]
   - [Key color palette]
   - [Typography preferences]
   - [Layout patterns]
   ```

4. **Claude Code will generate:**
   - `DESIGN-LANGUAGE.md` — Visual design rules for your style
   - `tokens/` — Color palettes, typography scale, spacing, shadows
   - `css/theme.css` — Tailwind CSS v4 implementation
   - Adjusted pattern components matching your style

5. **Review and iterate** — Test by building a sample page with the seed

6. **Submit a PR** with your new seed

#### Seed Quality Checklist

- [ ] `DESIGN-LANGUAGE.md` has 500+ lines of specific, actionable design rules
- [ ] `CLAUDE.md` provides clear guidance for AI code generation
- [ ] `tokens/` has all 6 token files (colors, typography, spacing, radii, shadows, motion)
- [ ] `css/theme.css` implements all tokens as CSS custom properties
- [ ] Light and dark mode are both supported
- [ ] At least 5 pattern components are included or adapted
- [ ] No brand-specific content (use generic examples like "Acme Corp")
- [ ] Skills are present and reference the correct file paths

#### Naming Convention

- Use lowercase, single-word names: `toss`, `apple`, `linear`, `stripe`
- If multi-word is necessary, use hyphens: `material-you`

### 2. Improve an Existing Seed

- Fix design inconsistencies
- Add missing pattern components
- Improve design language rules (more specific = better AI output)
- Add accessibility rules
- Fix dark mode issues
- Improve UX skills

### 3. Add Components

- New pattern components that work across seeds
- Additional UI primitives (following shadcn/ui conventions)
- Utility functions

### 4. Documentation

- Fix typos or unclear explanations
- Add examples and usage patterns
- Translate documentation

## Seed Structure

Every seed must follow this structure:

```
seeds/your-style/
├── README.md              # Seed overview and setup instructions
├── CLAUDE.md              # AI integration guide (Claude Code reads this)
├── DESIGN-LANGUAGE.md     # Visual design rules (the core value)
├── .claude/skills/        # Claude Code slash commands
├── tokens/                # JSON design tokens
│   ├── colors.json
│   ├── typography.json
│   ├── spacing.json
│   ├── radii.json
│   ├── shadows.json
│   └── motion.json
├── css/
│   ├── theme.css          # CSS custom properties + Tailwind theme
│   ├── base.css           # Element defaults
│   ├── fonts.css          # Font imports
│   └── index.css          # Entry point
├── components/
│   ├── ui/                # Primitives (can reuse from toss seed)
│   └── patterns/          # Style-specific pattern components
├── utils/
├── icons/
└── scaffold/              # New project template
```

## Code Style

- **Components**: Use `function` declarations, `data-slot` attributes, `cn()` for classes
- **TypeScript**: Strict mode, `React.ComponentProps<>` for props
- **CSS**: Semantic tokens only (no hardcoded hex in components)
- **Tailwind**: Use utility classes, avoid arbitrary values where tokens exist

## Pull Request Process

1. Fork the repo and create a branch (`feat/new-seed-name` or `fix/description`)
2. Make your changes
3. Test with Claude Code — build a sample page to verify AI output quality
4. Submit a PR with:
   - Description of the seed's design philosophy
   - Screenshot of a page built with the seed
   - Any known limitations

## Questions?

Open an issue or start a discussion. We're happy to help!
