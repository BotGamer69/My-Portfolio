# Project Context

## Overview

A personal portfolio site for a mechatronics engineer. It presents a professional introduction, biography, education and experience, technical skills, engineering services, featured projects, and contact options. The home page includes a resume link and a contact form; a separate Projects page lists additional work.

## Tech Stack

- React 18 with TypeScript and TSX for the UI.
- Vite for local development and production builds.
- Tailwind CSS for utility styling, with PostCSS and Autoprefixer.
- CSS custom properties for the shared color, surface, and radius tokens.
- React Router for `/`, `/projects`, and the not-found route.
- Radix UI primitives and shadcn-style components, with Lucide React icons.
- TanStack Query is provided at the app root; Framer Motion animates the Projects page; EmailJS sends contact-form submissions; Sonner and the local toast utilities display notifications.

## Directory Structure

- `public/` - Files served directly, including `Faizan_Resume.pdf` and static site assets.
- `src/main.tsx` - Browser entry point; mounts the React app and imports global CSS.
- `src/App.tsx` - App providers and route definitions.
- `src/pages/` - Route-level screens: `Index.tsx`, `Projects.tsx`, and `NotFound.tsx`.
- `src/components/` - Portfolio sections and navigation (`Hero`, `About`, `Skills`, `Services`, `Portfolio`, `Contact`, `Navigation`).
- `src/components/ui/` - Reusable UI primitives and wrappers.
- `src/assets/` - Imported images used by components.
- `src/hooks/` - Shared hooks, including toast and mobile helpers.
- `src/lib/` - Shared utility functions.
- `src/index.css` - Tailwind layers, global styles, and design-token CSS variables.
- `tailwind.config.ts` - Tailwind content paths, theme mappings, and animations.
- `vite.config.ts` - Vite plugins, dev server, and `@` alias to `src/`.
- `tsconfig*.json` - TypeScript compiler configuration and path alias.
- `package.json` - Dependencies and scripts (`dev`, `build`, `lint`, `preview`).

## Content Guide

Portfolio content is currently hard-coded in TSX components; there is no separate project or profile data file.

- **Projects page:** Edit the `projects` array in `src/pages/Projects.tsx` to update the full `/projects` listing.
- **Homepage featured projects:** Edit the `projects` array in `src/components/Portfolio.tsx`. This data is separate from the Projects page list, so update both files when a project should appear consistently in both places.
- **Bio and headline:** Edit `src/components/Hero.tsx` for the name, role/tagline, intro text, profile image import, and resume link. Edit `src/components/About.tsx` for the biography paragraph, education, work experience, and leadership entries.
- **Skills:** Edit `skillCategories` and the additional-skills list in `src/components/Skills.tsx`.
- **Contact information:** Edit `contactInfo` and `socialLinks` in `src/components/Contact.tsx`. Form labels and fields, submission handling, and EmailJS configuration are in that same component.
- **Section navigation:** Edit `navItems` in `src/components/Navigation.tsx` when changing home-page anchor labels or targets.
- **Images and resume:** Place imported component images in `src/assets/` and update the corresponding import. The resume link points to `public/Faizan_Resume.pdf`.

## Coding Rules

- Build UI as React function components in `.tsx` files; keep component files under `src/components/` and route screens under `src/pages/`. Components generally use a default export.
- Follow the existing pattern of keeping small, component-specific content arrays near the component that renders them. Keep route-level composition in the page and shared primitives in `src/components/ui/`.
- Prefer Tailwind utility classes in JSX. Reuse semantic theme classes such as `bg-background`, `text-foreground`, and `border-border`, plus existing shared classes like `tech-card` and `tech-button`, rather than hard-coding new colors.
- Define global design tokens and reusable global/component styles in `src/index.css`; map Tailwind theme names and animation utilities in `tailwind.config.ts`.
- Use the `@/` alias for imports from `src/` where it matches nearby code. Use Lucide React for icons, following existing components.
- Preserve the surrounding file's quote, semicolon, and formatting style; existing files are not fully uniform. ESLint applies recommended JavaScript/TypeScript rules and React Hooks checks; unused-variable linting is disabled, and React Refresh export issues are warnings.
- The default visual theme is dark through root CSS variables. Tailwind is configured for class-based dark mode, but there is no app-level theme toggle/provider currently wired into `App.tsx`.
