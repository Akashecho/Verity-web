# 🎨 Verity Web - UI/UX Design Rules & Skills Guide

> **Comprehensive design system for distinctive, production-grade frontend interfaces**

---

## 📋 Table of Contents

1. [Design Context Protocol](#design-context-protocol)
2. [Typography Rules](#typography-rules)
3. [Color & Theme](#color--theme)
4. [Layout & Space](#layout--space)
5. [Visual Details & AI Slop Bans](#visual-details--ai-slop-bans)
6. [Motion & Animation](#motion--animation)
7. [Interaction Patterns](#interaction-patterns)
8. [Responsive Design](#responsive-design)
9. [Accessibility Guidelines](#accessibility-guidelines)
10. [UX Writing](#ux-writing)
11. [Skills Reference](#skills-reference)
12. [AI Slop Test Checklist](#ai-slop-test-checklist)

---

## 🔍 Design Context Protocol

### Required Context (Before Any Design Work)

Every design task needs these three elements:

| Element | Question to Answer |
|---------|-------------------|
| **Target Audience** | Who uses this? In what context? |
| **Use Cases** | What jobs are they trying to get done? |
| **Brand Personality** | How should the interface feel? |

> **CRITICAL**: Code tells you WHAT was built, not WHO it's for or what it should feel like. Only the creator can provide this context.

### Context Gathering Order

1. Check current instructions for `## Design Context` section
2. Read `.impeccable.md` from project root (if exists)
3. Run `/impeccable teach` if no context available

### Design Direction Framework

```
┌─────────────────────────────────────────────────────────┐
│  PURPOSE: What problem does this solve? Who uses it?   │
│  TONE: Pick an extreme - brutalist, minimal, maximal,   │
│        retro-futuristic, luxury, playful, etc.          │
│  CONSTRAINTS: Framework, performance, accessibility     │
│  DIFFERENTIATION: The ONE thing someone will remember   │
└─────────────────────────────────────────────────────────┘
```

---

## 🔤 Typography Rules

### Font Selection Procedure

**DO THIS BEFORE TYPING ANY FONT NAME:**

```text
Step 1: Read brief → Write 3 words for brand voice
        (e.g., "warm and mechanical and opinionated")
        
Step 2: List 3 fonts you would normally use → Reject ALL
        from reflex_fonts_to_reject list
        
Step 3: Browse font catalogs with 3 brand words in mind
        Sources: Google Fonts, Pangram Pangram, Future Fonts,
        Adobe Fonts, ABC Dinamo, Klim Type Foundry, Velvetyne
        
Step 4: Cross-check result - right font is NOT necessarily
        a serif for "elegant" or sans for "technical"
```

### Fonts to Reject (Monoculture Busters)

```
❌ Fraunces, Newsreader, Lora, Crimson Pro, Playfair Display
❌ Cormorant, Syne, IBM Plex (Mono/Sans/Serif), Space Mono
❌ Space Grotesk, Inter, DM Sans, DM Serif, Outfit
❌ Plus Jakarta Sans, Instrument Sans, Instrument Serif
```

### Typography Principles

| Rule | Implementation |
|------|----------------|
| Use modular scale | Fluid sizing (clamp) for marketing, fixed rem for apps |
| Use fewer sizes with more contrast | 5-step scale with ≥1.25 ratio |
| Line-height scales inversely with length | Narrow columns = tighter, wide = looser |
| Light text on dark = more breathing room | Add 0.05-0.1 to normal line-height |
| Cap line length | ~65-75ch for body text |

### DO / DON'T

```
✅ DO: Use fluid typography (clamp) on headings
✅ DO: Vary font weights and sizes for hierarchy
✅ DO: Pair distinctive display + refined body font
✅ DO: Aim for ≥1.25 ratio between size steps

❌ DON'T: Use Inter, Roboto, Arial, system defaults
❌ DON'T: Use monospace for "technical" vibes shorthand
❌ DON'T: Put large icons with rounded corners above headings
❌ DON'T: Use only one font family
❌ DON'T: Set long body passages in uppercase
```

---

## 🎨 Color & Theme

### Color Principles (OKLCH over HSL)

```css
/* ✅ CORRECT: OKLCH - perceptually uniform */
color: oklch(0.55 0.2 260);

/* ❌ AVOID: HSL - same steps don't LOOK equal */
color: hsl(260, 60%, 50%);
```

### Color Rules

| Rule | Reason |
|------|--------|
| Tint neutrals toward brand hue | Even 0.005-0.01 chroma creates cohesion |
| 60-30-10 rule is about WEIGHT, not pixels | 60% neutral/surface, 30% secondary, 10% accent |
| Reduce chroma toward white/black | High chroma at extreme lightness looks garish |
| Never use pure black (#000) or white (#fff) | Always tint |

### Theme Selection (Context-Driven)

| Context | Theme |
|---------|-------|
| Fast trading, late night usage | Dark |
| Hospital portal, anxious patients | Light |
| Children's app, Sunday morning | Light |
| SRE dashboard, dark office | Dark |
| Music player, headphones at night | Dark |
| Food magazine, coffee break | Light |

### DO / DON'T

```
✅ DO: Use OKLCH, color-mix, light-dark functions
✅ DO: Tint neutrals toward brand hue
✅ DO: Choose theme based on ACTUAL user context

❌ DON'T: Gray text on colored backgrounds (looks washed out)
❌ DON'T: Pure black/white - always tint
❌ DON'T: Cyan-on-dark, purple-to-blue gradients, neon
❌ DON'T: Gradient text (see Absolute Bans below)
❌ DON'T: Default to dark mode "to look cool"
```

---

## 📐 Layout & Space

### Spatial System (4pt Scale)

```
Semantic names, NOT pixel-named:
✅ --space-sm, --space-md, --space-lg
❌ --spacing-8, --spacing-16, --spacing-24

Scale: 4, 8, 12, 16, 24, 32, 48, 64, 96
Note: 8pt is too coarse - often want 12px
```

### Layout Principles

| Principle | Implementation |
|-----------|----------------|
| Use `gap` instead of margins | Eliminates margin collapse |
| Vary spacing for hierarchy | Extra space above = more important |
| Break the grid intentionally | Asymmetry for emphasis |
| Self-adjusting grid | `repeat(auto-fit, minmax(280px, 1fr))` |
| Container queries for components | Components adapt to container, not viewport |

### DO / DON'T

```
✅ DO: Create visual rhythm through varied spacing
✅ DO: Fluid spacing with clamp()
✅ DO: Asymmetric compositions, left-aligned layouts
✅ DO: Cap body text at 65-75ch

❌ DON'T: Wrap everything in cards
❌ DON'T: Nest cards inside cards
❌ DON'T: Identical card grids (icon + heading + text)
❌ DON'T: Hero metric layout (big number + small label)
❌ DON'T: Center everything - left-aligned feels more designed
❌ DON'T: Same spacing everywhere (monotonous)
```

---

## 🚫 Visual Details & AI Slop Bans

### ⚠️ ABSOLUTE BANS - Never Acceptable

These are the most recognizable AI design tells. **Match and refuse.**

#### BAN 1: Side-Stripe Borders

```
PATTERN: border-left: or border-right: with width > 1px
FORBIDDEN: border-left: 3px solid red, border-left: 4px var(--color-warning)
WHY: Most overused "design touch" - never looks intentional
REWRITE: Use full borders, background tints, leading numbers/icons
```

#### BAN 2: Gradient Text

```
PATTERN: background-clip: text with gradient background
FORBIDDEN: background-clip: text + linear-gradient/radial-gradient
WHY: Top 3 AI design tells - decorative, not meaningful
REWRITE: Use single solid color for text
```

### Other Forbidden Patterns

```
❌ Glassmorphism everywhere (blur, glass cards, glow borders)
❌ Sparklines as decoration (convey nothing)
❌ Rounded rectangles with generic drop shadows
❌ Modals when there's a better alternative (modals are lazy)
❌ Border-left or border-right as colored accent stripe
```

### DO / DON'T

```
✅ DO: Use intentional decorative elements that reinforce brand
✅ DO: Make elements purposeful, not decorative

❌ DON'T: Use side-stripe borders
❌ DON'T: Use gradient text for impact
❌ DON'T: Overuse glassmorphism
❌ DON'T: Use sparklines as decoration
```

---

## 🎬 Motion & Animation

### Motion Principles

| Principle | Implementation |
|-----------|----------------|
| Focus on high-impact moments | One orchestrated page load > scattered micro-interactions |
| Use exponential easing | ease-out-quart/quint/expo for natural deceleration |
| Height animations | Use grid-template-rows instead of animating height |
| Transform and opacity only | Never animate layout properties |

### Timing Guidelines

| Animation Type | Duration | Easing |
|----------------|----------|--------|
| Micro interactions | 150ms | ease-out |
| Standard transitions | 250ms | ease-in-out |
| Complex (modals, dropdowns) | 400ms | cubic-bezier |
| Page transitions | 300ms | ease-out |

### DO / DON'T

```
✅ DO: Use motion to convey state changes (entrances, exits, feedback)
✅ DO: Use exponential easing for natural deceleration
✅ DO: Use grid-template-rows for height animations

❌ DON'T: Animate layout properties (width, height, padding, margin)
❌ DON'T: Use bounce or elastic easing (dated and tacky)
❌ DON'T: Scatter micro-interactions without orchestration
```

---

## 👆 Interaction Patterns

### Interaction Principles

| Principle | Description |
|-----------|-------------|
| Optimistic UI | Update immediately, sync later |
| Progressive disclosure | Start simple, reveal sophistication through interaction |
| Empty states that teach | Show users how to use the interface |
| Fast response | Every interactive surface feels responsive |

### Button Hierarchy

```
Primary    → Main actions (one per view)
Secondary  → Secondary actions
Ghost      → Tertiary actions (subtle)
Text/Link  → Navigation or inline actions
```

### DO / DON'T

```
✅ DO: Make interactions feel fast
✅ DO: Use progressive disclosure
✅ DO: Design empty states that teach
✅ DO: Make every interactive surface intentional

❌ DON'T: Repeat information users can already see
❌ DON'T: Make every button primary (hierarchy matters)
```

---

## 📱 Responsive Design

### Responsive Principles

| Approach | When to Use |
|----------|-------------|
| Container queries (`@container`) | Component-level responsiveness |
| Viewport queries | Page-level layout |
| Mobile-first | Start with mobile, enhance upward |

### DO / DON'T

```
✅ DO: Use container queries for components
✅ DO: Adapt interface for different contexts
✅ DO: Start mobile-first

❌ DON'T: Hide critical functionality on mobile
❌ DON'T: Simply shrink the interface
❌ DON'T: Amputate features instead of adapting
```

---

## ♿ Accessibility Guidelines

### Accessibility Checklist

| Priority | Requirement |
|----------|-------------|
| P0 | Color contrast ratio 4.5:1 minimum |
| P0 | Focus indicators on all interactive elements |
| P0 | ARIA labels on icons and buttons |
| P0 | Semantic HTML structure |
| P1 | Alt text on all images |
| P1 | Keyboard navigation support |
| P1 | Form labels associated with inputs |
| P2 | Skip to content link |
| P2 | Reduced motion support |
| P2 | Screen reader testing |

### Focus States

```css
:focus-visible {
  outline: none;
  ring: 2px;
  ring-color: var(--color-primary);
  ring-offset: 2px;
}
```

---

## ✍️ UX Writing

### Writing Principles

| Principle | Implementation |
|-----------|----------------|
| Every word earns its place | No filler, no redundancy |
| Clear, not clever | Don't sacrifice clarity for cleverness |
| Action-oriented | Start with verbs for buttons |
| Specific error messages | Tell users what happened and how to fix |

### Content Rules

```
✅ DO: Make every word earn its place
✅ DO: Use active voice
✅ DO: Be specific in error messages
✅ DO: Use consistent terminology

❌ DON'T: Repeat information users can already see
❌ DON'T: Use jargon without explanation
❌ DON'T: Use placeholder-y text ("Click here", "Enter value")
```

### Microcopy Examples

| Context | Good | Bad |
|---------|------|-----|
| Empty state | "No projects yet. Create your first project to get started." | "Nothing here" |
| Error | "Email address is invalid. Check format: name@company.com" | "Invalid input" |
| Button | "Save changes" | "Submit" |
| Confirmation | "Project created successfully" | "Success" |

---

## 🎯 Skills Reference

### Available Design Skills

| Skill | When to Use | Invocation |
|-------|-------------|------------|
| **impeccable** | Production-grade frontend interfaces, craft mode for shape-then-build | `/impeccable` |
| **frontend-ui-ux** | Stunning UI/UX without mockups | `/frontend-ui-ux` |
| **critique** | UX evaluation with quantitative scoring | `/critique` |
| **shape** | Plan UX/UI before coding | `/shape` |
| **polish** | Final quality pass | `/polish` |
| **animate** | Add purposeful animations | `/animate` |
| **audit** | Technical quality checks | `/audit` |
| **adapt** | Responsive design | `/adapt` |
| **layout** | Improve spacing and rhythm | `/layout` |
| **colorize** | Add strategic color | `/colorize` |
| **delight** | Add personality and polish | `/delight` |
| **distill** | Simplify and declutter | `/distill` |
| **typeset** | Typography improvements | `/typeset` |
| **clarify** | Improve UX copy and labels | `/clarify` |
| **bolder** | Amplify boring designs | `/bolder` |
| **quieter** | Tone down aggressive designs | `/quieter` |

### Skill Usage Examples

```
/impeccable craft build a checkout flow
/impeccable teach
/impeccable extract component-library

/shape plan the settings page UX
/critique evaluate the dashboard
/polish final review before launch
/animate add micro-interactions to buttons
```

---

## ✅ AI Slop Test Checklist

**Before shipping, ask: "If I said 'AI made this,' would they believe immediately?"**

### Visual Checkpoints

- [ ] No side-stripe borders on cards/list items
- [ ] No gradient text
- [ ] No glassmorphism everywhere
- [ ] No sparklines as decoration
- [ ] No rounded rectangles with generic shadows
- [ ] No modals when better alternatives exist
- [ ] Not centered everything
- [ ] Not identical card grids

### Typography Checkpoints

- [ ] Font is NOT in reflex_fonts_to_reject list
- [ ] Using display + body font pairing
- [ ] Clear type hierarchy (≥1.25 ratio)
- [ ] Line length capped at 65-75ch
- [ ] Not using monospace for "technical" shorthand

### Color Checkpoints

- [ ] Using OKLCH, not HSL
- [ ] Neutrals tinted toward brand hue
- [ ] No pure black/white
- [ ] Theme chosen based on user context
- [ ] No gray text on colored backgrounds

### Layout Checkpoints

- [ ] Varied spacing creates rhythm
- [ ] Asymmetric layout, not centered everything
- [ ] Using gap, not margins
- [ ] Self-adjusting grid for responsiveness
- [ ] Cards only when needed

### Interaction Checkpoints

- [ ] Motion feels purposeful, not scattered
- [ ] Exponential easing used
- [ ] No bounce/elastic animations
- [ ] Progressive disclosure implemented
- [ ] Empty states teach the interface

### Accessibility Checkpoints

- [ ] Color contrast ≥4.5:1
- [ ] Focus indicators visible
- [ ] ARIA labels present
- [ ] Keyboard navigation works
- [ ] Reduced motion respected

---

## 📝 Implementation Notes

### Component Structure Template

```tsx
// 1. Imports
import React from 'react';
import styles from './Component.module.css';

// 2. Types
interface ComponentProps {
  title: string;
  variant?: 'primary' | 'secondary';
}

// 3. Component
export const Component: React.FC<ComponentProps> = ({ 
  title, 
  variant = 'primary' 
}) => {
  // 4. Hooks
  // 5. Logic
  // 6. Render
  return <div className={styles[variant]}>{title}</div>;
};

// 7. Export default (if needed)
export default Component;
```

### CSS Module Pattern

```css
/* Component.module.css */
.component {
  padding: var(--space-4);
  border-radius: var(--radius-md);
  transition: all var(--transition-standard);
}

.component:hover {
  transform: scale(1.02);
  box-shadow: var(--shadow-md);
}
```

---

## 🔗 Related Documentation

- [CLAUDE.md](../CLAUDE.md) - Project setup and structure
- [Design System Tokens](../src/styles/globals.css) - CSS variables and tokens
- [Component Library](../src/components/ui/) - Reusable UI components

---

*Last updated: 2026-04-23*
*Version: 1.0.0*
*Purpose: Production-grade UI/UX rules for Verity Web*