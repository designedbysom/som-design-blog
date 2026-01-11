# Context Summary: The Design Engineer's Log

**Generated:** 2026-01-10 16:30  
**Branch:** `test/image-add`  
**Latest Commit:** `b45940d - feat(article): add hero image and responsive layout improvements`

## Project Status

**Current Active Modules:**

1. **Article Page (`src/pages/Article.tsx`)** - Fully implemented and styled

   - Complete typography hierarchy (H1, H2, H3, body, code, blockquotes, lists)
   - Hero image support with responsive width (96% of container, 60px spacing)
   - Responsive layout: 95% width on mobile, 90% on desktop
   - Content processing for bold text rendering
   - Currently using sample post data structure

2. **Home Page (`src/pages/Home.tsx`)** - Skeleton only

   - Placeholder component with comments for planned sections:
     - Hero Section (Manifesto)
     - Experience Table (Trajectory)
     - Latest Writing feed
     - Footer with social links

3. **Writing Page (`src/pages/Writing.tsx`)** - Skeleton only

   - Placeholder component with comments for planned structure:
     - Year-grouped chronological list
     - Date + Title format

4. **Content Processing (`src/lib/processContent.ts`)** - Active

   - Processes markdown-style bold text (`**text**`) into React elements
   - Used in Article component for inline bold rendering

5. **Font System (`src/index.css`, `tailwind.config.js`)** - Active
   - Switzer font family integrated (Regular, Medium, Semibold, Bold)
   - Local font files hosted in `public/fonts/`
   - Currently testing on `test/image-add` branch

## Architecture

**Key Structural Decisions:**

1. **Code Splitting with React Lazy Loading**

   - All page components use `lazy()` import with Suspense boundary
   - Route-based code splitting implemented in `App.tsx`
   - Fallback UI shows minimal "Loading..." message

2. **MDX Support Configured But Not Active**

   - Vite MDX plugin installed and configured (`@mdx-js/rollup`, `remark-gfm`)
   - Currently using TypeScript data structures for content (`sample-post.ts`)
   - Future migration path ready when MDX content authoring begins

3. **Path Aliases for Clean Imports**

   - `@/` prefix resolves to `./src/` directory
   - Configured in `vite.config.ts` with `path.resolve()`
   - Used throughout components (e.g., `@/data/sample-post`, `@/lib/processContent`)

4. **TypeScript Strict Mode**

   - Full type safety enforced
   - All components properly typed
   - Post data structure defined in `sample-post.ts`

5. **Design System Implementation**

   - PRD (`prd.md`) serves as single source of truth for design specifications
   - Typography, spacing, and colors strictly adhere to PRD
   - Changes made to `Article.tsx` are synced back to PRD for consistency

6. **Performance Optimizations**

   - `useMemo` hooks in Article component to avoid re-processing content on every render
   - Date formatting memoized
   - Content processing happens once per content change

7. **Font Strategy**
   - Testing Switzer font family on `test/image-add` branch
   - Local font hosting with `@font-face` declarations
   - Fallback to system fonts if Switzer fails to load
   - Font files stored in `public/fonts/` for static serving

## Component Structure

**Naming Conventions:**

- Page components: PascalCase (`Article.tsx`, `Home.tsx`, `Writing.tsx`)
- Utility functions: camelCase (`processContent.ts`, `utils.ts`)
- UI components: lowercase with dash (`button.tsx` in `components/ui/`)
- Data files: kebab-case (`sample-post.ts`)

**Folder Hierarchy:**

```
src/
├── pages/          # Route-level components (Article, Home, Writing)
├── components/     # Reusable UI components
│   └── ui/        # Shadcn UI components (button.tsx)
├── lib/           # Utility functions and helpers
├── data/          # Static data structures (sample-post.ts)
└── App.tsx        # Root component with routing
```

**Component Patterns:**

- Function components with TypeScript interfaces
- Props destructuring at component signature
- Conditional rendering with early returns where appropriate
- Content mapping with `.map()` for lists

## Change Log

**Critical Bugs Fixed:**

1. **Corrupted `package.json` (Fixed: 2026-01-08)**

   - **Issue:** `EJSONPARSE` error during `npm run dev` - file was empty/corrupted
   - **Solution:** Restored from git history using `git checkout package.json`
   - **Root Cause:** Accidental file corruption during editing

2. **TypeScript Compiler Not Found (Fixed: 2026-01-08)**

   - **Issue:** `sh: tsc: command not found` and JSX implicit any errors
   - **Solution:** Deleted `node_modules` and `package-lock.json`, ran `npm install` for clean reinstall
   - **Root Cause:** Corrupted or incomplete `node_modules` directory

3. **Source Map Generator Module Error (Fixed: 2026-01-08)**

   - **Issue:** `Cannot find module './lib/source-map-generator'` during `vite build`
   - **Solution:** Removed problematic `@babel/core` directory, ran `npm install` again
   - **Root Cause:** Dependency conflict with `source-map` package

4. **Git Push Buffer Size (Fixed: 2026-01-10)**
   - **Issue:** HTTP 400 error when pushing large AVIF image files
   - **Solution:** Increased git HTTP buffer: `git config http.postBuffer 524288000`
   - **Root Cause:** Default buffer too small for large binary files

**Recent Feature Additions:**

1. **Hero Image Support (Added: 2026-01-10)**

   - Added `heroImage` field to post data structure
   - Implemented responsive image display below article header
   - 96% width with 60px vertical spacing
   - Edge-to-edge responsive behavior

2. **Responsive Typography and Layout (Refined: 2026-01-10)**

   - Title: 28px mobile, 32px desktop (`text-[28px] md:text-4xl`)
   - Content width: 95% mobile, 90% desktop (`w-[95%] md:w-[90%]`)
   - Title width: 90% (updated from 88%)
   - Consistent spacing and alignment

3. **Typography Hierarchy Refinement (Refined: 2026-01-07-08)**

   - Vertical spacing: 20px between paragraphs, 40px before headings, 20px after
   - Line height: 150% for body copy and list items
   - H2/H3 font weights: Semibold for H2, Bold for H3
   - H2/H3 tracking: Changed from `tracking-tight` to `tracking-normal`
   - Body copy color: Neutral-900 (updated from Zinc-600)

4. **Font Integration Testing (Added: 2026-01-10)**
   - Switzer font family installed locally
   - All font weights configured (Regular 400, Medium 500, Semibold 600, Bold 700)
   - Testing on `test/image-add` branch before merging to main

## Tech Stack

**Core Dependencies:**

- **React 19.2.3** - UI framework with latest concurrent features
- **React DOM 19.2.3** - DOM rendering
- **React Router DOM 7.11.0** - Client-side routing
- **TypeScript 5.9.3** - Type safety and developer experience

**Build & Dev Tools:**

- **Vite 7.3.0** - Build tool and dev server (HMR enabled)
- **@vitejs/plugin-react 5.1.2** - React support for Vite
- **@mdx-js/rollup 3.1.1** - MDX content support (configured, not yet active)
- **remark-gfm 4.0.1** - GitHub Flavored Markdown support for MDX

**Styling:**

- **Tailwind CSS 3.4.19** - Utility-first CSS framework
- **PostCSS 8.5.6** - CSS processing
- **Autoprefixer 10.4.23** - Vendor prefix automation
- **tailwind-merge 3.4.0** - Merge Tailwind classes without conflicts

**UI Components:**

- **Shadcn UI** - Component library (light mode only)
  - `@radix-ui/react-slot 1.2.4` - Radix UI primitives
  - `class-variance-authority 0.7.1` - Component variant management
  - `clsx 2.1.1` - Conditional class name utility

**Font Stack:**

- **Primary:** Switzer (Regular, Medium, Semibold, Bold) - Local files in `public/fonts/`
- **Mono:** Geist Mono (planned, not yet integrated)
- **Fallback:** System font stack (Apple, Windows, Linux)

**Content Processing:**

- Custom bold text processor (`processContent.ts`)
- Future: MDX for full markdown support

## Roadmap

**Immediate Next Steps:**

1. **Complete Home Page Implementation**

   - Hero Section: Short bio and design philosophy manifesto
   - Experience Table: Career trajectory with minimalist design (Role, Company, Year columns)
   - Latest Writing: Top 3 recent posts preview
   - Footer: Social links (LinkedIn, Email)

2. **Complete Writing Page Implementation**

   - Year-grouped chronological list of all articles
   - Date + Title format per PRD specifications
   - Click navigation to article detail pages

3. **Font Decision**

   - Evaluate Switzer font on `test/image-add` branch
   - If approved, merge to main and update PRD
   - If rejected, test alternative fonts or revert to Inter

4. **MDX Migration**

   - Set up MDX content authoring workflow
   - Migrate from TypeScript data structures to MDX files
   - Implement dynamic route loading for `/writing/:slug`

5. **Navigation Bar**
   - Implement sticky navigation per PRD specs
   - Name (left) + "Writing" link (right)
   - Backdrop blur and subtle border

**Pending Tasks:**

1. **Content Authoring System**

   - Finalize MDX setup or choose alternative (e.g., markdown with frontmatter)
   - Create content folder structure
   - Implement dynamic post loading

2. **Design System Components**

   - "Trajectory" Table component for experience display
   - "Writing Feed" list component with year grouping
   - "Cover Pattern" Generator (Graph Paper, Noise, Diagonal variants)

3. **Performance Optimization**

   - Image optimization pipeline for hero images
   - Lazy loading for images below fold
   - Route prefetching strategy

4. **Type Definitions**

   - Create TypeScript interfaces for post data structure
   - Define content block types (paragraph, h2, h3, code, blockquote, list)
   - Type safety for MDX frontmatter

5. **Testing & Quality**
   - Responsive design testing across devices
   - Cross-browser compatibility check
   - Accessibility audit (WCAG compliance)

**Known Technical Debt:**

1. **Home.tsx and Writing.tsx** - Currently placeholder components
2. **Font Stack Mismatch** - PRD specifies Inter/Geist Mono, but Switzer is being tested
3. **Static Content** - Using `sample-post.ts` instead of dynamic content loading
4. **Missing Navigation** - No navigation bar implementation yet
5. **Image Assets** - Large AVIF files (1.3-1.7MB each) may need optimization pipeline

## Branch Status

**Current Branch:** `test/image-add`

- Testing Switzer font family
- Hero image implementation complete
- Responsive layout improvements
- Ready for evaluation before merging to main

**Branch Relationship:**

- `main` (remote: `origin/main`) - Production-ready code
- `test/image-add` (remote: `origin/test/image-add`) - Feature branch
- `master` (local) - Legacy branch, synced with previous checkpoint

**Repository:** `https://github.com/designedbysom/som-design-blog.git`

## Configuration Notes

**Vite Configuration:**

- MDX plugin configured with remark-gfm
- Path alias `@/` → `./src/`
- React plugin enabled

**Tailwind Configuration:**

- Switzer font in sans family (extended)
- Custom border radius variables
- Shadcn UI color system integrated
- Content paths: `./index.html`, `./src/**/*.{js,ts,jsx,tsx}`

**Cursor Configuration:**

- `.cursorignore` configured to exclude:
  - `package-lock.json`
  - Build artifacts (`dist/`, `*.map`)
  - Logs and editor files
  - OS files (`.DS_Store`)

**Git Configuration:**

- HTTP post buffer increased to 500MB for large file pushes
- Remote `origin` pointing to GitHub repository

## Design System Compliance

**Current Implementation Status:**

- ✅ Article page typography matches PRD exactly
- ✅ Color palette implemented (Zinc-950, Neutral-900, Zinc-500, etc.)
- ✅ Spacing system: 20px paragraphs, 40px before headings, 150% line height
- ✅ Responsive widths: 90% desktop, 95% mobile for content
- ⚠️ Font: Switzer being tested (PRD specifies Inter)
- ❌ Container width: Currently `max-w-[800px]` (PRD specifies `max-w-[640px]`)
- ❌ Home/Writing pages: Not yet implemented

**PRD Sync Status:**

- Typography specs updated in PRD to match implementation
- Color values verified and documented
- Spacing and layout specs reflect current code
- Font section needs update based on final decision
