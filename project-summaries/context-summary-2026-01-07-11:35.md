# Context Summary: Design Engineer's Log

**Generated:** 2026-01-07 11:35  
**Project:** Personal Design Blog - "The Design Engineer's Log"

---

## 1. Project Status

### Current Active Modules

**Core Application (`src/`)**

- **`main.tsx`**: Entry point with React 19, BrowserRouter setup, and defensive root element check
- **`App.tsx`**: Main routing configuration with three routes:
  - `/` → Home page
  - `/writing` → Writing index page
  - `/writing/:slug` → Individual article page
- **`index.css`**: Tailwind CSS directives and Shadcn UI CSS variables (light mode only)

**Pages (`src/pages/`)**

- **`Home.tsx`**: Placeholder for hero section, experience table, latest writing, and footer
- **`Writing.tsx`**: Placeholder for chronological writing feed grouped by year
- **`Article.tsx`**: Placeholder for article display with typed `useParams` hook

**Components (`src/components/ui/`)**

- **`button.tsx`**: Shadcn UI Button component (installed as test, currently unused)

**Utilities (`src/lib/`)**

- **`utils.ts`**: `cn()` utility function for merging Tailwind classes using `clsx` and `tailwind-merge`

### Configuration Files

- **`vite.config.ts`**: Vite config with React plugin and `@/` path alias resolver
- **`tsconfig.json`**: TypeScript config with strict mode, path aliases (`@/*`), and bundler module resolution
- **`tailwind.config.js`**: Tailwind v3 config with Shadcn theme extensions and CSS variable-based colors
- **`postcss.config.js`**: PostCSS config with Tailwind and Autoprefixer plugins
- **`components.json`**: Shadcn UI configuration (slate base color, CSS variables enabled, path aliases configured)

### Documentation

- **`prd.md`**: Comprehensive Product Requirements Document defining "Architectural Minimalism" design system
- **`file-structure.md`**: Site architecture specification

---

## 2. Architecture

### Key Structural Decisions

**Build System**

- **Vite 7.3.0** as the build tool (chosen for fast HMR and modern tooling)
- **TypeScript 5.9.3** with strict mode enabled
- **React 19.2.3** with React Router DOM 7.11.0 for client-side routing

**Styling Architecture**

- **Tailwind CSS v3.4.19** (downgraded from v4 for Shadcn compatibility)
- **Shadcn UI** installed and configured (light mode only, no dark mode)
- CSS variables-based theming system (HSL format)
- Path alias `@/` configured in both TypeScript and Vite for clean imports

**Component Pattern**

- Shadcn UI components live in `src/components/ui/`
- Utility functions in `src/lib/`
- Pages are separate from components (clear separation of concerns)
- No state management library yet (React hooks sufficient for current scope)

**Type Safety Philosophy**

- Strict TypeScript configuration
- No `any` types, `@ts-ignore`, or `eslint-disable` allowed
- Defensive coding patterns (null checks, proper error handling)
- Typed React Router hooks (`useParams<{ slug: string }>()`)

---

## 3. Component Structure

### Naming Conventions

- **Pages**: PascalCase, singular (e.g., `Home.tsx`, `Writing.tsx`, `Article.tsx`)
- **Components**: PascalCase, descriptive (e.g., `Button.tsx`)
- **Utilities**: camelCase functions (e.g., `cn()`)
- **Files**: kebab-case for config files, PascalCase for React components

### Folder Hierarchy

```
src/
├── components/
│   └── ui/          # Shadcn UI components
├── lib/
│   └── utils.ts     # Utility functions
├── pages/           # Route-level components
├── App.tsx          # Main app with routing
├── main.tsx         # Entry point
└── index.css        # Global styles + Tailwind
```

### Import Patterns

- Use `@/` alias for all internal imports (e.g., `@/components/ui/button`)
- Relative imports only for same-directory files
- External packages use standard npm import syntax

---

## 4. Change Log

### Critical Bugs Fixed

**1. Unsafe Non-Null Assertion in `main.tsx` (Commit: f89a26e)**

- **Issue**: Used `document.getElementById('root')!` with non-null assertion
- **Fix**: Added explicit null check with error throwing:
  ```typescript
  const rootElement = document.getElementById("root");
  if (!rootElement) {
    throw new Error("Root element not found");
  }
  ```
- **Rationale**: Prevents runtime crashes if root element is missing, provides clear error message

**2. Untyped `useParams` in `Article.tsx` (Commit: f89a26e)**

- **Issue**: `useParams()` returned `string | undefined` but was used directly in JSX
- **Fix**: Added type parameter and null coalescing:
  ```typescript
  const { slug } = useParams<{ slug: string }>();
  // ... in JSX: {slug || 'Untitled'}
  ```
- **Rationale**: Type safety ensures slug is properly typed, fallback prevents undefined rendering

**3. Unused Imports Cleanup (Commit: f89a26e)**

- **Issue**: `App.tsx` imported unused `App.css` file
- **Fix**: Removed unused import
- **Rationale**: Clean codebase, no dead code

**4. Tailwind CSS Version Compatibility (During Shadcn Installation)**

- **Issue**: Initially installed Tailwind v4, but Shadcn requires v3
- **Fix**: Downgraded to `tailwindcss@^3` and updated config to CommonJS format
- **Rationale**: Shadcn UI CLI validation requires Tailwind v3 config format

---

## 5. Tech Stack

### Core Dependencies

**Runtime**

- **react** (^19.2.3): UI library
- **react-dom** (^19.2.3): React DOM renderer
- **react-router-dom** (^7.11.0): Client-side routing

**UI & Styling**

- **tailwindcss** (^3.4.19): Utility-first CSS framework
- **@radix-ui/react-slot** (^1.2.4): Radix UI primitive for Shadcn components
- **class-variance-authority** (^0.7.1): Component variant system
- **clsx** (^2.1.1): Conditional class name utility
- **tailwind-merge** (^3.4.0): Intelligent Tailwind class merging
- **lucide-react** (^0.562.0): Icon library

**Build Tools**

- **vite** (^7.3.0): Build tool and dev server
- **@vitejs/plugin-react** (^5.1.2): Vite React plugin
- **typescript** (^5.9.3): Type system
- **postcss** (^8.5.6): CSS processing
- **autoprefixer** (^10.4.23): CSS vendor prefixing

**Type Definitions**

- **@types/react** (^19.2.7)
- **@types/react-dom** (^19.2.3)
- **@types/node** (^25.0.3)

### Missing Dependencies (Per PRD)

- **framer-motion**: For subtle animations (opacity/y-axis shifts)
- **MDX/MDX loader**: For article content authoring
- **Inter font**: Google Fonts integration needed
- **Geist Mono font**: Vercel font integration needed
- **@tailwindcss/typography**: For prose styling (mentioned in PRD)

---

## 6. Roadmap

### Immediate Next Steps

**1. Design System Implementation**

- Replace Shadcn's default slate colors with PRD-specified Zinc palette
- Update `tailwind.config.js` with custom Zinc color scale
- Implement typography hierarchy (6 levels as specified in PRD)
- Configure Inter and Geist Mono fonts

**2. Core Components to Build**

- **Navigation Bar**: Sticky top nav with backdrop blur (`bg-white/90`, `border-zinc-100`)
- **Trajectory Table**: Experience display component (Role, Company, Year columns)
- **Writing Feed List**: Chronological article list grouped by year
- **Cover Pattern Generator**: SVG pattern component (Graph Paper, Noise, Diagonal variants)

**3. Content Infrastructure**

- Set up MDX processing (Vite MDX plugin or similar)
- Create content directory structure for articles
- Implement article metadata system (date, tags, title)
- Build article rendering pipeline

**4. Home Page Implementation**

- Hero section ("The Manifesto" - bio & philosophy)
- Experience table component integration
- Latest writing section (top 3 posts)
- Footer with social links (LinkedIn, Email)

**5. Writing Page Implementation**

- Year-based grouping logic
- Article link components with date + title
- Hover states and navigation

**6. Article Page Implementation**

- Large title display with monospace date
- Tags display
- MDX content rendering with prose styling
- "Next Post" footer link

### Pending Tasks

**Configuration**

- [ ] Add Framer Motion dependency
- [ ] Configure MDX processing
- [ ] Set up Google Fonts (Inter)
- [ ] Set up Geist Mono font
- [ ] Install @tailwindcss/typography for prose

**Design System**

- [ ] Update Tailwind config with Zinc color palette from PRD
- [ ] Create typography utility classes matching PRD specs
- [ ] Implement 4px baseline grid system
- [ ] Configure container max-width (640px) and centering

**Components**

- [ ] Build Navigation component
- [ ] Build Trajectory Table component
- [ ] Build Writing Feed component
- [ ] Build Cover Pattern Generator component
- [ ] Create article metadata types/interfaces

**Content**

- [ ] Design article file structure
- [ ] Create sample articles for testing
- [ ] Implement article parsing/loading logic

**Testing & Polish**

- [ ] Test responsive behavior (mobile stacking for Trajectory Table)
- [ ] Verify all hover states and interactions
- [ ] Ensure strict adherence to "Architectural Minimalism" aesthetic
- [ ] Validate typography hierarchy across all pages

---

## 7. Design System Notes

### Aesthetic Philosophy

**"Architectural Minimalism"** - Inspired by Swiss print design:

- No shadows, no depth
- Pure flat structure defined by whitespace and borders
- High contrast, stark typography
- Intentional whitespace
- Light mode only (strict requirement)

### Color System (To Be Implemented)

- Canvas: `#FFFFFF`
- Ink: `#09090B` (Zinc-950) - Headings, active states
- Graphite: `#3f3f46` (Zinc-700) - Body text
- Stone: `#A1A1AA` (Zinc-400) - Metadata, dates
- Line: `#E4E4E7` (Zinc-200) - Borders, dividers
- Accent: `#18181B` (Zinc-900) - Buttons, links

### Layout Constraints

- Container: `max-w-[640px]` centered
- Spacing: 4px baseline grid, 64px minimum section gaps
- Radius: `rounded-sm` (6px) or `rounded-none`

### Typography (To Be Implemented)

Six-level hierarchy using Inter (body) and Geist Mono (code):

1. Title (H1): `text-4xl font-semibold tracking-tight text-zinc-950`
2. Section Heading (H2): `text-xl font-medium tracking-tight text-zinc-950`
3. Subheading (H3): `text-base font-medium tracking-tight text-zinc-900`
4. Body Copy: `text-base leading-relaxed text-zinc-600`
5. Body Bold: `font-semibold text-zinc-900`
6. Code Block: `bg-zinc-50 border border-zinc-200 rounded-sm p-4 text-[13px] font-mono text-zinc-800`

---

## 8. Key Architectural Patterns

### Error Handling

- Defensive null checks (no non-null assertions)
- Explicit error messages for debugging
- Type-safe parameter extraction from routes

### Code Organization

- Clear separation: pages vs components vs utilities
- Path aliases for maintainability (`@/` prefix)
- TypeScript strict mode for type safety

### Styling Approach

- Utility-first with Tailwind CSS
- CSS variables for theming (HSL format)
- Component-level styling via Shadcn UI
- Global styles in `index.css` with Tailwind layers

### Future Considerations

- MDX will require build-time processing
- Article content likely needs static generation or dynamic loading
- Consider adding a content management approach (file-based vs CMS)

---

## 9. Git History

**Recent Commits:**

- `f89a26e` - feat: install Shadcn UI with Tailwind CSS and fix type safety issues
- `c33c662` - feat: initialize React blog project with routing structure

**Repository:** https://github.com/designedbysom/som-design-blog.git

---

## 10. Important Notes

### What's Working

- ✅ React + Vite + TypeScript setup complete
- ✅ React Router configured with three routes
- ✅ Shadcn UI installed and configured
- ✅ Tailwind CSS v3 working
- ✅ Path aliases (`@/`) functional
- ✅ Type safety enforced (strict mode)
- ✅ Build process verified (no errors)

### What's Not Yet Implemented

- ❌ Design system colors (still using Shadcn defaults)
- ❌ Typography hierarchy (fonts not loaded)
- ❌ All custom components (only Button exists as test)
- ❌ MDX content processing
- ❌ Article metadata system
- ❌ Navigation component
- ❌ Any actual content/UI beyond placeholders

### Critical Constraints

- **NO dark mode** - Light mode only (per PRD)
- **NO shadows or depth** - Flat design only
- **Strict type safety** - No `any`, `@ts-ignore`, or `eslint-disable`
- **Architectural Minimalism** - Must adhere to Swiss print design principles

---

**End of Context Summary**
