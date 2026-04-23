# Verity Web - Project Guide

## 🤖 Project Identity

- **Project**: Verity Web
- **Type**: Web Application Development
- **Stack**: Modern JavaScript/TypeScript, React/Next.js, Node.js
- **Design System**: Custom with Tailwind CSS

---

## 🏗️ Project Structure

```
verity web/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/          # Next.js pages
│   ├── layouts/        # Page layouts
│   ├── styles/         # Global styles
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utilities and libraries
│   ├── types/          # TypeScript types
│   └── assets/         # Images, fonts, icons
├── public/             # Static files
├── config/             # Configuration files
├── tests/              # Test files
├── docs/               # Documentation
└── scripts/            # Build scripts
```

---

## 🎨 Design Principles

### Core Values

1. **Consistency First** - Every element must follow the design system
2. **Accessibility Always** - WCAG 2.1 AA compliance minimum
3. **Mobile-First** - Design for mobile, enhance for desktop
4. **Performance Critical** - Lighthouse score 90+ for all pages
5. **Progressive Enhancement** - Work without JS, enhance with it

### Visual Design

| Token | Value | Usage |
|-------|-------|-------|
| Primary | `#6366F1` | Main actions, CTAs |
| Secondary | `#EC4899` | Accents, highlights |
| Neutral | `#1E293B` | Text, borders |
| Background | `#F8FAFC` | Page background |
| Surface | `#FFFFFF` | Cards, modals |
| Success | `#10B981` | Success states |
| Warning | `#F59E0B` | Warnings |
| Error | `#EF4444` | Errors |

### Typography Scale

| Name | Size | Weight | Usage |
|------|------|--------|-------|
| Display | 48px | 800 | Hero headings |
| H1 | 32px | 700 | Page titles |
| H2 | 24px | 600 | Section headers |
| H3 | 20px | 600 | Subsections |
| Body | 16px | 400 | Default text |
| Small | 14px | 400 | Captions |
| Micro | 12px | 500 | Labels, badges |

### Spacing System

```css
--space-1: 4px;   /* Micro gaps */
--space-2: 8px;   /* Tight spacing */
--space-3: 12px;  /* Default gap */
--space-4: 16px;  /* Comfortable */
--space-5: 24px;  /* Section gap */
--space-6: 32px;  /* Large sections */
--space-8: 48px;  /* Hero spacing */
--space-10: 64px; /* Major sections */
```

### Border Radius

```css
--radius-sm: 4px;   /* Small elements */
--radius-md: 8px;   /* Buttons, inputs */
--radius-lg: 12px;  /* Cards */
--radius-xl: 16px;  /* Modals */
--radius-full: 9999px; /* Pills, avatars */
```

### Shadows

```css
--shadow-sm: 0 1px 2px rgba(0,0,0,0.05);   /* Subtle */
--shadow-md: 0 4px 6px rgba(0,0,0,0.07);   /* Cards */
--shadow-lg: 0 10px 15px rgba(0,0,0,0.1);  /* Elevated */
--shadow-xl: 0 20px 25px rgba(0,0,0,0.15); /* Modals */
```

### Breakpoints

```css
--sm: 640px;   /* Mobile landscape */
--md: 768px;   /* Tablet */
--lg: 1024px;  /* Laptop */
--xl: 1280px;  /* Desktop */
--2xl: 1536px; /* Large screens */
```

---

## 🎯 UI/UX Guidelines

### Component Hierarchy

1. **Layout Components** - Header, Footer, Sidebar, Container
2. **Container Components** - Cards, Panels, Sections
3. **Form Components** - Input, Select, Checkbox, Radio
4. **Action Components** - Button, Link, Icon Button
5. **Feedback Components** - Toast, Alert, Modal, Tooltip
6. **Data Components** - Table, List, Badge, Tag

### Interaction Patterns

| Pattern | Trigger | Response |
|---------|---------|----------|
| Hover | Mouse enter | Scale 1.02, shadow increase |
| Active | Click | Scale 0.98, color darken |
| Focus | Tab | Ring outline 2px primary |
| Disabled | N/A | 50% opacity, no pointer |
| Loading | N/A | Pulse animation, spinner |

### Accessibility Checklist

- [ ] Color contrast ratio 4.5:1 minimum
- [ ] Focus indicators on all interactive elements
- [ ] ARIA labels on icons and buttons
- [ ] Alt text on all images
- [ ] Keyboard navigation support
- [ ] Skip to content link
- [ ] Semantic HTML structure
- [ ] Form labels associated with inputs

### Animation Guidelines

| Type | Duration | Easing | Usage |
|------|----------|--------|-------|
| Micro | 150ms | ease-out | Hover states |
| Standard | 250ms | ease-in-out | Transitions |
| Complex | 400ms | cubic-bezier | Modals, dropdowns |
| Page | 300ms | ease-out | Route changes |

---

## 🛠️ Development Workflow

### File Naming Convention

```bash
# Components (PascalCase)
Button.tsx
Header.tsx
UserCard.tsx

# Hooks (camelCase with 'use' prefix)
useAuth.ts
useLocalStorage.ts

# Utils (camelCase)
formatDate.ts
validateEmail.ts

# Types (PascalCase)
User.ts
ApiResponse.ts

# Styles (match component name)
Button.module.css
Header.module.css
```

### Component Structure

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
export const Component: React.FC<ComponentProps> = ({ title, variant = 'primary' }) => {
  // 4. Hooks
  // 5. Logic
  // 6. Render
  return <div className={styles[variant]}>{title}</div>;
};

// 7. Export default (if needed)
export default Component;
```

### CSS Methodology

Using **CSS Modules** with design tokens from globals:

```css
/* Button.module.css */
.button {
  padding: var(--space-3) var(--space-5);
  border-radius: var(--radius-md);
  font-size: 1rem;
  font-weight: 500;
  transition: all 250ms ease-in-out;
}

.button:hover {
  transform: scale(1.02);
  box-shadow: var(--shadow-md);
}
```

---

## 📦 Required Dependencies

### Core
```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "next": "^14.0.0"
  },
  "devDependencies": {
    "typescript": "^5.0.0",
    "tailwindcss": "^3.4.0",
    "eslint": "^8.0.0",
    "prettier": "^3.0.0"
  }
}
```

### Recommended Additions
```json
{
  "dependencies": {
    "@headlessui/react": "^1.7.0",
    "lucide-react": "^0.300.0",
    "clsx": "^2.0.0",
    "tailwind-merge": "^2.0.0"
  }
}
```

---

## 🚀 Quick Start Commands

```bash
# Development
npm run dev          # Start dev server
npm run build        # Production build
npm run lint         # Run ESLint
npm run format       # Format with Prettier

# Testing
npm run test         # Run tests
npm run test:watch   # Watch mode

# Utilities
npx tailwindcss init # Initialize Tailwind
npx @tailwindcss/forms# Add forms plugin
```

---

## 🎭 Design Skills Available

Use `$skill-name` to invoke:

| Skill | Purpose |
|-------|---------|
| `$impeccable` | Production-grade frontend interfaces |
| `$frontend-ui-ux` | Stunning UI/UX without mockups |
| `$critique` | UX evaluation and scoring |
| `$shape` | Plan UX/UI before coding |
| `$polish` | Final quality pass |
| `$animate` | Add purposeful animations |
| `$audit` | Technical quality checks |
| `$adapt` | Responsive design |
| `$layout` | Improve spacing and rhythm |
| `$colorize` | Add strategic color |
| `$delight` | Add personality and polish |
| `$distill` | Simplify and declutter |

---

## 📝 Code Standards

### TypeScript

- Always use explicit types for function parameters
- Use interfaces for object shapes
- Use type for unions and intersections
- Avoid `any` - use `unknown` with type guards

### React

- Use functional components with hooks
- Memoize expensive computations with `useMemo`
- Use `useCallback` for event handlers passed to children
- Keep components under 200 lines

### Performance

- Lazy load components with `next/dynamic`
- Use proper image optimization (`next/image`)
- Implement code splitting per route
- Use virtualization for long lists

---

## 🔍 Debug & Verify

### Pre-commit Checks

1. Run ESLint: `npm run lint`
2. Run TypeScript check: `npx tsc --noEmit`
3. Run tests: `npm run test`
4. Build check: `npm run build`

### Common Issues

| Issue | Solution |
|-------|----------|
| Type errors | Run `npx tsc --noEmit` |
| Lint errors | Run `npm run lint -- --fix` |
| Style issues | Run `npm run format` |
| Build fails | Check for circular deps |

---

## 📚 Learning Resources

- Tailwind CSS Docs: https://tailwindcss.com
- Headless UI: https://headlessui.com
- Lucide Icons: https://lucide.dev
- MDN Web Docs: https://developer.mozilla.org

---

## 🎯 Current Priority

- [ ] Initialize project structure
- [ ] Set up Tailwind CSS with design tokens
- [ ] Create base component library
- [ ] Implement responsive layout system
- [ ] Add design system documentation

---

*Last updated: 2026-04-23*