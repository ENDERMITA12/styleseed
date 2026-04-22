<div align="center">

<br />

# styleseed

### The design system for Claude Code, Cursor, and vibe coding.

<br />

<a href="https://styleseed-demo.vercel.app">
  <img src="showcase/demo.gif" width="640" alt="StyleSeed live demo — same chat UI morphing across Toss, Raycast, and Arc brand skins" />
</a>

<br /><br />

[![▶ Open AI Chat Demo](https://img.shields.io/badge/▶_AI_Chat_Demo-Live-FF4E8B?style=for-the-badge&logoColor=white)](https://styleseed-demo.vercel.app)
&nbsp;
[![▶ Open Pricing Demo](https://img.shields.io/badge/▶_Pricing_Demo-Live-6C5CE7?style=for-the-badge&logoColor=white)](https://styleseed-demo.vercel.app/pricing)

**One component. Three brand DNAs.** Same chat UI morphing across Toss · Raycast · Arc — colors, radius, motion, shadows, gradients all driven by StyleSeed tokens. No rewrites. No conditional code. Just a `data-skin` attribute.

<br />

[![oosmetrics](https://api.oosmetrics.com/api/v1/badge/achievement/41c4272f-b2a8-4c64-8fcb-ca7750603ab9.svg)](https://oosmetrics.com/repo/bitjaru/styleseed)
![GitHub release](https://img.shields.io/github/v/release/bitjaru/styleseed?style=flat-square)
![GitHub stars](https://img.shields.io/github/stars/bitjaru/styleseed?style=flat-square)
![License](https://img.shields.io/github/license/bitjaru/styleseed?style=flat-square)

**Other repos teach LLMs what brands look like. StyleSeed teaches LLMs how designers think.**<br />
Data vs judgment. 69 design rules that Claude Code and Cursor read automatically — so the output stops looking generated and starts looking designed.

<br />

[Get Started](#get-started) · [Engine + Skins](#how-it-works-engine--skins) · [Skills](#11-ai-powered-skills) · [Wiki](../../wiki) · [한국어](README-KR.md)

<br />

</div>

---

## Who is this for?

- You asked **Claude Code** or **Cursor** to build a dashboard and it came out amateur-looking
- You're **vibe coding** a SaaS app and don't want to hire a designer
- You use **shadcn/ui** but the output still feels generic
- You want **Toss-style** refinement without reverse-engineering it yourself
- You're building a **Claude Code skill** or **Cursor rules** setup for design
- You ship fast with AI and need professional UI that doesn't look AI-generated

## Data vs Judgment

Every "help LLMs design better" project solves the wrong half of the problem. They feed the model more **design data** — brand palettes, font specs, shadow tokens, component libraries. I tried that first. Dumped Toss's entire design token JSON into my prompts. The output was still generic.

Then it hit me: **a junior designer with Toss's palette still ships ugly dashboards. A senior designer with only grayscale ships something refined.** The difference isn't what they have. It's what they know to do with it.

Design data is the paint. Design judgment is knowing where to put it.

StyleSeed is a **design engine** — 69 visual rules, 48 components, and 11 slash commands that teach LLMs the judgment, not just the data:

```
"The most refined black isn't #000 — it's #2A2A2A"
"One accent color in the entire app. Everything else grayscale. Restraint is elegance."
"Shadows at 4% opacity. If you can see it, it's already too much."
"Numbers and units at 2:1 ratio. 48px number, 24px unit. Always."
"Never repeat the same section type twice. Alternate tall and compact for rhythm."
"Card/background separation matters more than any border."
```

Nobody writes these down. They're baked into years of experience — invisible to outsiders, invisible to LLMs. StyleSeed writes them down, organizes them into six categories (color discipline, spatial rhythm, information hierarchy, shadow/elevation, component variance, motion/feedback), and hands them to Claude as a single markdown file it reads automatically.

The rules are **brand-agnostic** — they don't reference specific colors, only semantic tokens. Which means the same rulebook works whether your app looks like Toss, Vercel, or your client's weird purple brand. Swap the skin, the judgment carries over.

<div align="center">
  <img src="showcase/light-hero.png" width="260" alt="Light mode" />&nbsp;&nbsp;&nbsp;&nbsp;<img src="showcase/dark-hero.png" width="260" alt="Dark mode" />
  <br />
  <em>Same engine, different skins. Built with Claude Code. Zero designer.</em>
</div>

<details>
<summary><strong>See full page</strong></summary>
<div align="center">
  <img src="showcase/light-full.png" width="260" alt="Light full" />&nbsp;&nbsp;&nbsp;&nbsp;<img src="showcase/dark-full.png" width="260" alt="Dark full" />
</div>
</details>

## Works with Claude Design

[Claude Design](https://claude.ai/design/) generates UI fast — but it still picks `#000` for text, reaches for six accent colors, and floats cards with no background separation. The missing piece isn't more templates. It's the 69 rules that tell the model *when* to use which pattern and *why*.

**StyleSeed + Claude Design together:**

1. Claude Design generates the layout and components (fast scaffolding)
2. StyleSeed's 69 rules refine the output (design judgment layer)
3. Brand skins make it look like your brand, not like "AI made this"

Drop `DESIGN-LANGUAGE.md` into your Claude Design workflow and the same model produces noticeably more refined output — without changing a single prompt.

## Get Started

### Option 1: Interactive Setup (Recommended)

```bash
# Copy the engine into your project
cp -r engine/* your-project/

# Run the setup wizard
/ss-setup
```

The wizard walks you through:
1. App type (SaaS, e-commerce, fintech...)
2. Brand color or pick a skin (Toss, Stripe, Linear, Vercel, Notion...)
3. Or fetch any brand from [awesome-design-md](https://github.com/VoltAgent/awesome-design-md) (58+ brands)
4. Font preference
5. Generates your first page automatically

### Option 2: Manual Setup

```bash
# Copy engine (rules, components, skills)
cp -r engine/* your-project/

# Copy engine css to src/styles
cp -r engine/css/* your-project/src/styles/

# Pick a skin — copy theme.css alongside other css files
cp skins/stripe/theme.css your-project/src/styles/theme.css

# Copy components
cp -r engine/components/* your-project/src/components/
```

### Option 3: Just give AI the URL

```
Refer to https://github.com/bitjaru/styleseed — read engine/CLAUDE.md 
and engine/DESIGN-LANGUAGE.md, then build a SaaS dashboard.
Use skins/stripe/theme.css for the color palette.
```

### Option 4: Cursor

```bash
cp engine/.cursorrules your-project/.cursorrules
```

## How It Works: Engine + Skins

```
┌─────────────────────────────────────────────────┐
│  StyleSeed Engine (brand-agnostic)              │
│                                                 │
│  69 design rules · 48 components · 13 skills    │
│  Layout · Composition · Typography · UX · A11y  │
└──────────────────────┬──────────────────────────┘
                       │
              Pick a skin ↓
                       │
    ┌──────┬──────┬──────┬──────┬──────┬─────────┐
    │ Toss │Stripe│Linear│Vercel│Notion│ 58 more │
    │      │      │      │      │      │(awesome)│
    └──────┴──────┴──────┴──────┴──────┴─────────┘
```

**Engine** = how your app is structured (design intelligence)
- 69 visual design rules (layout, composition, rhythm, forbidden patterns)
- 48 React components (32 primitives + 16 patterns)
- 11 Claude Code skills (setup, UI, UX, accessibility)
- Works with ANY color palette

**Skin** = what your app looks like (visual identity)
- Just a `theme.css` file with color variables
- 5 built-in skins: Toss, Stripe, Linear, Vercel, Notion
- 58+ more available from [awesome-design-md](https://github.com/VoltAgent/awesome-design-md)
- Or create your own (change `--brand` and you're done)

### Data vs Judgment — how StyleSeed differs from every other "design for AI" repo

Most projects trying to fix AI-generated UI give the model more **data**. StyleSeed gives it **judgment**. They're complementary, not competing:

| | Data repos (e.g. [awesome-design-md](https://github.com/VoltAgent/awesome-design-md)) | StyleSeed |
|---|---|---|
| **Approach** | Brand palette collection | Design judgment engine |
| **Teaches the model** | What brands *look like* | How designers *think* |
| **Provides** | Colors, fonts, shadow values | 69 rules + semantic tokens + executable skills |
| **Example output** | "Use this shade of blue" | "The refined black isn't #000, it's #2A2A2A" |
| **Brand-specific?** | Yes — rules are tied to one brand | No — rules reference semantic tokens, work with any skin |
| **Components** | None | 48 React components |
| **AI skills** | None | 11 slash commands (executable rules) |
| **Scales with new brands** | Re-extract everything | Write one `theme.css`, reuse all rules |

**Data repos** = paint colors.<br/>
**StyleSeed** = the rulebook for where to put the paint.

Use them together: data repos provide the skin, StyleSeed provides the brain.

## Available Skins

| Skin | Style | Source |
|------|-------|--------|
| **[toss](skins/toss/)** | Korean fintech — purple, minimal, data-focused | Original |
| **[stripe](skins/stripe/)** | Professional — indigo, clean, multi-layer shadows | awesome-design-md |
| **[linear](skins/linear/)** | Dark-first — violet, minimal, developer-focused | awesome-design-md |
| **[vercel](skins/vercel/)** | Monochrome — black & white, geometric | awesome-design-md |
| **[notion](skins/notion/)** | Warm — blue accent, friendly, warm neutrals | awesome-design-md |
| **[58+ more](skins/_from-awesome-design-md/)** | Any brand from awesome-design-md | Auto-fetch via `/ss-setup` |

## Engine Contents

```
engine/
├── CLAUDE.md                 # AI reads this automatically
├── DESIGN-LANGUAGE.md        # 69 visual design rules (brand-agnostic)
├── .claude/skills/           # 13 slash commands (/ss-*)
│   ├── ss-setup/             #   Interactive setup wizard
│   ├── ss-page/              #   Scaffold pages
│   ├── ss-component/         #   Generate components
│   ├── ss-pattern/           #   Compose layouts
│   ├── ss-review/            #   Design compliance check
│   ├── ss-tokens/            #   Manage tokens
│   ├── ss-a11y/              #   Accessibility audit
│   ├── ss-lint/              #   Quick violation scan
│   ├── ss-update/            #   Pull latest engine
│   ├── ss-flow/              #   Design user flows
│   ├── ss-audit/             #   UX heuristic evaluation
│   ├── ss-copy/              #   Generate microcopy
│   └── ss-feedback/          #   Add loading/error/empty states
├── components/
│   ├── ui/                   # 32 primitives (shadcn/ui + motion)
│   └── patterns/             # 16 dashboard patterns
├── css/                      # base.css, fonts.css, index.css
├── tokens/                   # 6 JSON token files
├── utils/                    # Formatting utilities
├── icons/                    # Custom SVG icon library
└── scaffold/                 # Vite 6 + React 18 starter
```

## 13 AI-Powered Skills

### Setup
| Skill | What It Does |
|-------|-------------|
| `/ss-setup` | **Interactive wizard** — pick skin, brand color, font, generates first page |

### UI — Build It Right
| Skill | What It Does |
|-------|-------------|
| `/ss-component` | Generate components following design conventions |
| `/ss-page` | Scaffold pages with proper layout structure |
| `/ss-pattern` | Compose UI patterns (card grid, chart, list) |
| `/ss-review` | Audit code for design system violations |
| `/ss-tokens` | View, add, or modify design tokens |
| `/ss-a11y` | Accessibility audit (WCAG 2.2 AA) |
| `/ss-lint` | Quick automated lint — catches common violations in seconds |
| `/ss-update` | Pull latest engine updates — analyzes your project and updates safely |

### UX — Design It Right (No Designer Needed)
| Skill | What It Does |
|-------|-------------|
| `/ss-flow` | Design user flows (progressive disclosure, information pyramid) |
| `/ss-audit` | Nielsen's 10 usability heuristics evaluation |
| `/ss-copy` | Generate UX microcopy (buttons, errors, empty states, toasts) |
| `/ss-feedback` | Add loading/success/error/empty states to any component |

### Example Workflow

```bash
/ss-setup                    # Pick skin, configure project
/ss-page Dashboard           # Scaffold main page
/ss-copy "dashboard"         # Generate all microcopy
/ss-feedback src/Dashboard   # Add loading/error states
/ss-audit src/Dashboard      # Check UX quality
/ss-lint src/Dashboard       # Quick violation scan
/ss-review src/Dashboard     # Deep design compliance check
/ss-update                   # Pull latest engine updates
```

### Example Prompts

**New project:**
```
Refer to https://github.com/bitjaru/styleseed — read engine/CLAUDE.md 
and engine/DESIGN-LANGUAGE.md. Use skins/stripe/theme.css for colors.
Build a SaaS dashboard with revenue, users, and activity.
```

**Add a page (engine already in project):**
```
Follow CLAUDE.md and DESIGN-LANGUAGE.md rules.
Create a settings page with profile, notifications, and danger zone.
Run /ss-review when done.
```

**Improve existing page:**
```
Refactor src/Dashboard.tsx to follow DESIGN-LANGUAGE.md.
Check visual rhythm (rule 61) and KPI variation (rule 62).
```

**Update engine:**
```
/ss-update
```

## Example Design Rules

These are the kind of rules that make AI output look professional:

```
Rule: The most refined black isn't #000 — it's #2A2A2A.
      5-level grayscale: #2A → #3C → #6A → #7A → #9B

Rule: All content lives inside cards. Never on page background.
      Card (#FFF) vs background (#FAFAFA) contrast IS the separator.

Rule: Never repeat the same section type consecutively.
      Hero → Grid → Chart → Carousel → List (visual rhythm)

Rule: KPI cards must vary: 2 with trend arrows, 1 with progress bar,
      1 with comparison text. Never 4 identical cards.

Rule: Information density increases as you scroll down.
      Top: 48px (one number) → Bottom: 14px (detailed lists)
```

69 rules total. [See the full design language →](engine/DESIGN-LANGUAGE.md)

## Tech Stack

React 18 · TypeScript · Tailwind CSS v4 · Radix UI · Vite 6 · Lucide Icons · CVA

## StyleSeed vs. the alternatives

| | StyleSeed | shadcn/ui | Tailwind UI | Material UI | Generic AI output |
|---|---|---|---|---|---|
| Components | ✅ 48 | ✅ 50+ | ✅ | ✅ | ❌ |
| Design **judgment** (when to use what) | ✅ 69 rules | ❌ | ❌ | Partial | ❌ |
| Claude Code / Cursor integration | ✅ 11 skills | ❌ | ❌ | ❌ | — |
| Brand skins (Toss, Stripe, Linear...) | ✅ | ❌ | ❌ | ❌ | ❌ |
| Price | Free (MIT) | Free | $299+ | Free | — |
| Works *with* AI coding tools | ✅ | Indirect | Indirect | Indirect | — |

**TL;DR:** shadcn/ui gives you components. Tailwind UI gives you templates. StyleSeed gives you the *design judgment* that makes AI output stop looking like AI output.

## FAQ

**Q: Why does Claude Code / Cursor generate ugly UI?**
Because LLMs optimize for functional correctness, not visual refinement. They'll pick `#000` for text, `py-4` for spacing, `text-xl` for everything — all technically valid, all amateur. StyleSeed gives them the rules professional designers use.

**Q: Is this a shadcn/ui replacement?**
No — it's built *on top of* shadcn/ui patterns. StyleSeed components use the same Radix primitives and CVA conventions. Think of it as shadcn/ui + design judgment + AI-tool integration.

**Q: Does it work with Cursor too?**
Yes. The 69 design rules live in a `.cursorrules` file and `CLAUDE.md`. Cursor reads them automatically.

**Q: How is this different from awesome-design-md?**
awesome-design-md gives you brand DESIGN.md files (what). StyleSeed gives you the engine that turns any brand into a working app (how). They pair well.

**Q: Can I use it for a non-fintech app?**
Yes. The engine is brand-agnostic. Pick any skin, swap the brand color, ship.

## Documentation

Full docs in the **[Wiki](../../wiki)** — design rules reference, composition recipes, chart guides, skills reference.

## Contributing

### Create a New Skin

Just a `theme.css` + `skin.json`:
```bash
mkdir skins/your-brand
# Copy any existing skin as starting point
cp skins/toss/theme.css skins/your-brand/theme.css
# Change the --brand color and other values
```

### Improve the Engine

Better rules → better AI output:
- More specific design rules
- New pattern components
- Accessibility improvements
- New AI skills

See [CONTRIBUTING.md](CONTRIBUTING.md) for details.

## Updating

Already using StyleSeed? Quick update (always safe):

```bash
# Pull latest
cd styleseed && git pull

# Update design rules + skills (safe — no project-specific content)
cp styleseed/engine/DESIGN-LANGUAGE.md your-project/.claude/DESIGN-LANGUAGE.md
cp -r styleseed/engine/.claude/skills/ your-project/.claude/skills/
```

**Don't overwrite:** your `theme.css` (brand colors), `CLAUDE.md` (if project-specific), or customized components.

Full guide: [engine/UPDATE.md](engine/UPDATE.md)

**Get notified:** Click **Watch** → **Custom** → **Releases** on this repo.

## License

[MIT](LICENSE)

## Acknowledgments

- Design language inspired by [Toss](https://toss.im/design-system)
- Components based on [shadcn/ui](https://ui.shadcn.com/)
- Brand skins sourced from [awesome-design-md](https://github.com/VoltAgent/awesome-design-md)
- UX principles from [Laws of UX](https://lawsofux.com/) and [Nielsen Norman Group](https://www.nngroup.com/)
