# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
Two audiences of equal weight: recruiters/employers evaluating Faizan for mechatronics and product-engineering roles, and prospective clients hiring engineering services (mechanical design, prototyping). Success for either is downloading the resume or sending an enquiry through the contact form.

## Product Purpose
A personal portfolio for Muhammad Faizan Tahir, a mechatronics engineer. It presents biography, education, experience, skills, services, featured projects and contact options, so a visitor can judge fit and get in touch.

## Positioning
He takes hardware products from idea to working prototype and into the real world. He works across mechanical design (SolidWorks, sheet metal), PCB design and embedded firmware, so one person carries a product from CAD to a running machine. Leadership (President of Air Astronomical Society, General Secretary of Wall of Hope) is supporting proof that he can lead teams, not the headline.

## Operating Context
Visitors arrive on desktop or mobile, scan the home page sections (Hero, About, Skills, Services, Portfolio, Contact), open /projects for additional work, download the resume PDF, and submit the contact form.

## Capabilities and Constraints
- React 18, TypeScript, Vite, Tailwind, shadcn/Radix, React Router.
- Routes `/` and `/projects` (plus not-found) must keep working unchanged.
- Resume link must keep pointing to `public/Faizan_Resume.pdf`.
- EmailJS contact form must stay fully functional; its service ID, template ID and public key must not be changed, hardcoded or exposed (leave them in the existing env/config setup).
- Colors must be defined as design tokens (CSS variables / Tailwind theme), not scattered hex values.
- Fully responsive on mobile and desktop.
- `npm run build` must finish with zero TypeScript or build errors.
- Content lives in component-local arrays (see PROJECT_CONTEXT.md).

## Brand Commitments
Locked "Indigo" light palette (binding): background #FAF9FF, surface #FFFFFF, text #1E1B4B, muted #55536E, accent #6D28D9. It fully replaces the current dark default; leftover dark-theme classes are to be removed, and contrast (buttons, links, form fields, focus states) must be readable.

## Evidence on Hand
- Cofounder of Embotics: IoT reverse vending machine won first place at the All Pakistan Business Plan Competition 2025 with a PKR 250,000 grant.
- Freelance client mechanical design projects delivered since February 2024.
- Resume PDF at `public/Faizan_Resume.pdf`; profile image at `src/assets/Faizan.png`.
- Do not invent facts, links or metrics; use TODO markers for anything missing.

## Product Principles
1. Show the full path from CAD to running machine; range is the claim, proof is the projects.
2. Real results lead (Embotics, freelance delivery); leadership supports.
3. Two audiences, one clear next step: resume or contact is always within reach.
4. Nothing invented: missing facts stay marked TODO.

## Accessibility & Inclusion
Readable contrast across all components, including buttons, links, form fields and visible focus states, on mobile and desktop.
