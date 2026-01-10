# Product Requirements Document: The Design Engineer's Log

## 1. Executive Summary

**Identity:** The personal digital studio of a Senior Product Designer at Atlassian.
**Scope:** A holistic log of a "Product Builder." It is not limited to current work; it covers design systems, engineering patterns, product strategy, and the craft of software creation.
**Primary Signal:** **Multi-disciplinary Leadership.** The site must demonstrate that the author operates at the intersection of design, code, and strategy—capable of guiding a product from abstract concept to shipped reality.
**Aesthetic:** "Architectural Minimalism." A strict Light Mode aesthetic inspired by Swiss print design. High contrast, stark typography, and intentional whitespace.
**Goal:** To serve as a reputation vehicle that establishes the author as a Design Leader with the rare ability to build what they design.

## 2. Technical Stack

- **Core:** React (Vite).
- **Language:** TypeScript.
- **Routing:** React.
- **Styling:** Tailwind CSS.
- **UI Library:** Shadcn UI (Light Mode).
- **Icons:** Lucide React.
- **Typography:**
  - Primary: `Inter` (Google Fonts).
  - Mono: `Geist Mono` (Vercel).
- **Animation:** Framer Motion (Restricted to subtle opacity/y-axis shifts).

## 3. Design System ("Ink on Paper")

**Concept:** No shadows, no depth. Pure flat structure defined by whitespace and borders.

### Color Palette

- **Canvas:** `#FFFFFF` (Pure White).
- **Ink (Primary):** `#09090B` (Zinc-950) — Used for Headings and active states.
- **Graphite (Secondary):** `##3f3f46` (Zinc-700) — Used for Body text.
- **Stone (Muted):** `#71717A` (Zinc-500) — Used for Metadata, dates, and inactive icons.
- **Line:** `#E4E4E7` (Zinc-200) — Used for borders and dividers.
- **Accent:** `#18181B` (Zinc-900) — Pure black for high-priority interactions (buttons, links).

### Layout Geometry

- **Container:** Fixed width `max-w-[640px]`, centered.
- **Spacing:** Strict 4px baseline grid. Minimum section gap: `64px`.
- **Radius:** `rounded-sm` (6px) or `rounded-none`.

## 4. Typographical Hierarchy

**1. Title (H1)**

- **Usage:** Page titles / Article headlines.
- **Spec:** `Inter Semibold` | 32px (`text-4xl`) | Tracking `-0.03em` | Leading `1.25`.
- **Color:** Zinc-950.
- **Width:** 88% of parent container.
- **Tailwind:** `text-4xl font-semibold tracking-tight text-zinc-950 text-center w-[90%] mx-auto leading-tight`

**2. Section Heading (H2)**

- **Usage:** Major article dividers.
- **Spec:** `Inter Semibold` | 20px (`text-xl`) | Tracking `0em`.
- **Color:** Zinc-950.
- **Tailwind:** `text-xl font-semibold tracking-normal text-zinc-950`

**3. Subheading (H3)**

- **Usage:** Minor categories within a section.
- **Spec:** `Inter Bold` | 16px (`text-base`) | Tracking `0em`.
- **Color:** Zinc-900 (Darker than body).
- **Tailwind:** `text-base font-bold tracking-normal text-zinc-900`

**4. Body Copy (P)**

- **Usage:** Standard reading text.
- **Spec:** `Inter Regular` | 16px (`text-base`) | Leading `1.5`.
- **Color:** Neutral-900.
- **Tailwind:** `text-base leading-[1.5] text-neutral-900`

**5. Body Bold (Strong)**

- **Usage:** Inline emphasis.
- **Spec:** `Inter Semibold`.
- **Color:** Zinc-900 (Darker than surrounding text).
- **Tailwind:** `font-semibold text-zinc-900`

**6. Code Block (Pre)**

- **Usage:** Multi-line code snippets.
- **Spec:** `Geist Mono` | 13px.
- **Style:** Zinc-50 Background (`#FAFAFA`) + Zinc-200 Border.
- **Tailwind:** `bg-zinc-50 border border-zinc-200 rounded-sm p-4 text-[13px] font-mono text-zinc-800`

## 5. Key Component Specifications

### A. The "Trajectory" Table (Experience)

A component to display career history without looking like a standard resume.

- **Visual Style:** Minimalist list with no vertical borders.
- **Columns:**
  1.  **Role:** Primary text color, font-weight medium.
  2.  **Company:** Secondary text color.
  3.  **Year:** Right-aligned, Monospace, Muted color.
- **Interaction:** Row highlights with a very faint grey (`bg-zinc-50`) on hover.
- **Mobile Behavior:** Columns stack vertically (Role top, Company middle, Year bottom).

### B. The "Writing Feed" List

A component to display a chronological list of thoughts/articles.

- **Visual Style:** Table of Contents style.
- **Structure:**
  - **Date:** Left aligned, Monospace, Muted.
  - **Title:** Primary text, Inter.
- **Grouping:** Items must be visually grouped by **Year**.
- **Interaction:** Entire row is clickable. Hover state underlines the title.

### C. The "Cover Pattern" Generator

A reusable component to render decorative headers for articles without using image files.

- **Tech:** CSS/SVG Patterns.
- **Variants:**
  1.  **Graph Paper:** Subtle SVG dot grid (`fill-zinc-200`) on white.
  2.  **Noise:** High-contrast film grain overlay.
  3.  **Diagonal:** 45-degree thin lines (Architectural hatch style).

### D. Navigation Bar

- **Behavior:** Sticky top, `backdrop-blur-sm`, `bg-white/90`.
- **Border:** 1px solid border-bottom (`border-zinc-100`).
- **Elements:** Name (Left) and "Writing" Link (Right).

## 6. Content Requirements

- **Format:** Content will be authored in MDX.
- **Prose Styling:**
  - Use `prose-neutral`.
  - Links must have a thin, persistent underline (`decoration-zinc-300`).
  - `Blockquotes` must use a clean left border (`border-zinc-900`) with no italicization.
