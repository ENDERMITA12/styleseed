# Creating a New Seed

This guide explains how to create a new design seed for StyleSeed using Claude Code.

## Prerequisites

- Claude Code installed
- Familiarity with the reference seed at `seeds/toss/`

## Step-by-Step

### Step 1: Copy this template

```bash
cp -r seeds/_template seeds/your-style
```

### Step 2: Define your design style

Before generating anything, write down your style's key characteristics:

- **Color palette**: What's the primary color? How many accent colors? Light/dark mode approach?
- **Typography**: What font(s)? What size scale? What hierarchy?
- **Layout**: Mobile-first? Desktop-first? Max width?
- **Spacing**: Base unit (4px? 6px? 8px?)
- **Shadows**: Subtle? Bold? None?
- **Interaction**: Minimal? Rich animations?

### Step 3: Generate with Claude Code

Open Claude Code in your new seed directory and use this prompt:

```
Look at seeds/toss/ as a reference implementation. I want to create a 
[Your Style]-style design language.

Key characteristics:
- [List your style characteristics from Step 2]
- [Color: ...]
- [Typography: ...]
- [Layout: ...]

Please generate:
1. DESIGN-LANGUAGE.md — following the same 60-rule structure as the toss seed,
   but adapted for [Your Style]. Include specific rules for colors, typography,
   spacing, layout, components, interaction, and forbidden patterns.

2. tokens/ — all 6 JSON files (colors.json, typography.json, spacing.json,
   radii.json, shadows.json, motion.json) matching your design language.

3. css/theme.css — Tailwind CSS v4 implementation of the tokens with both
   light and dark mode.

4. CLAUDE.md — AI integration guide for this specific design style.
```

### Step 4: Adapt pattern components

The toss seed has 16 pattern components. You can:
- **Reuse as-is** — if the component logic is the same (just tokens change)
- **Modify** — adjust spacing, layout, visual details
- **Remove** — if the pattern doesn't fit your style
- **Add new** — if your style needs unique patterns

### Step 5: Test

Build a sample page using your seed and Claude Code:

```
/ui-page Dashboard "Analytics dashboard with revenue, user stats, and activity feed"
```

Does it look like your intended design style? Iterate on the design language rules until AI output matches your vision.

### Step 6: Submit

1. Ensure all files in the seed structure are present (see CONTRIBUTING.md)
2. Add screenshots of pages built with your seed
3. Submit a PR

## Seed Structure Reference

```
seeds/your-style/
├── README.md              # Overview of this design style
├── CLAUDE.md              # AI integration guide
├── DESIGN-LANGUAGE.md     # Visual design rules (the core)
├── .claude/skills/        # Claude Code slash commands
├── tokens/
│   ├── colors.json        # Color palette + semantic tokens
│   ├── typography.json    # Font families, sizes, weights
│   ├── spacing.json       # Spacing scale
│   ├── radii.json         # Border radius values
│   ├── shadows.json       # Shadow definitions
│   └── motion.json        # Animation durations + easings
├── css/
│   ├── theme.css          # CSS custom properties + @theme inline
│   ├── base.css           # Element defaults
│   ├── fonts.css          # Font imports
│   └── index.css          # Entry point
├── components/
│   ├── ui/                # Primitives (can copy from toss seed)
│   └── patterns/          # Style-specific patterns
├── utils/
├── icons/
└── scaffold/
```

## Tips

- **Be specific in design rules**: "Cards have 16px border radius" is better than "Cards have rounded corners"
- **Include forbidden patterns**: What should the AI never do? These constraints are as important as the rules.
- **Test with real prompts**: Ask Claude to build various pages and see if the output matches your style.
- **Iterate on DESIGN-LANGUAGE.md**: This is the file that matters most. The more specific your rules, the better AI output.
