# CLAUDE.md

Guidelines for future work in this repository.

## Build and Development Commands

Run commands from the project root:

- `npm run dev` - Start the Vite development server (configured for port 8080).
- `npm run lint` - Run ESLint across the project.
- `npx tsc --noEmit -p tsconfig.app.json` - Type-check the application source without emitting files.
- `npm run build` - Create the production build in `dist/`.
- `npm run build:dev` - Create a development-mode build.
- `npm run preview` - Preview the production build locally after building.
- Tests: `package.json` currently defines no test script or test runner. Do not report tests as run; if a test script is added, run `npm test` and report its result.

## Design Workflow (Impeccable)

- Use `/impeccable` for every UI/UX task (new sections, redesigns, layout, styling, copy, motion, polish, audits). Invoke the matching sub-command (e.g. `/impeccable shape`, `polish`, `layout`, `critique`) rather than editing markup ad hoc.
- Use `/portfolio-copywriter` for any portfolio wording (hero, about, project and experience text, positioning). Copy lives in `src/data/`; layout and styling stay with `/impeccable`.
- Product context lives in `PRODUCT.md`; keep it current and do not contradict it.
- The portfolio is being redesigned around the locked **Indigo** light theme: background `#FAF9FF`, surface `#FFFFFF`, text `#1E1B4B`, muted `#55536E`, accent `#6D28D9`. Define these only as tokens in `src/index.css` / `tailwind.config.ts`; do not scatter hex values in components, and do not reintroduce dark-theme classes.
- Never change or expose the EmailJS service ID, template ID or public key; keep routes `/` and `/projects` and the `Faizan_Resume.pdf` link intact; do not invent facts, links or metrics (use TODO markers).

## Edit Conventions

- Before adding or changing markup, inspect the target component and nearby components for existing structure, responsive behavior, Tailwind patterns, and shared classes.
- Prefer updating existing centralized data/content modules when they exist instead of embedding new content in presentation markup. This repository currently keeps most portfolio content in component-local arrays; update those established arrays unless a suitable shared data module exists or is intentionally introduced.
- Keep components modular: page components compose sections, reusable UI belongs in `src/components/ui/`, and route-level screens belong in `src/pages/`.
- Keep changes focused and preserve the existing public routes, component APIs, and behavior unless the task calls for a change.
- Use the `@/` alias for imports from `src/` where practical, consistent with nearby code.

## Styling and Code Patterns

- Use Tailwind utilities in JSX and prefer the existing semantic theme classes (`bg-background`, `text-foreground`, `text-muted-foreground`, `border-border`) over hard-coded colors.
- Reuse shared classes such as `tech-card` and `tech-button`. Define global tokens and shared styles in `src/index.css`; configure Tailwind theme extensions in `tailwind.config.ts`.
- Use the existing React function-component and TypeScript/TSX patterns. Follow the surrounding file's quote and semicolon style because formatting is not fully uniform.
- Use Lucide React for icons when suitable and keep icons consistent with existing components.
- Respect React Hooks lint rules and the ESLint configuration. Avoid unrelated cleanup or broad formatting changes.

## Verification

- After every code change, run `npx tsc --noEmit -p tsconfig.app.json`, `npm run lint`, and `npm run build` when applicable. Resolve newly introduced TypeScript, lint, or build errors before finishing.
- Run the relevant tests when a test script is available. This repository currently has no configured test command; mention that limitation instead of implying tests passed.
- For documentation-only changes, check the edited Markdown for diagnostics and review the diff for accuracy.
