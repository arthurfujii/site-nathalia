# Implementation Plan: Modernize Landing Page Layout

**Branch**: `001-modernize-landing-page` | **Date**: 2026-03-29 | **Spec**: [spec.md](file:///d:/site_nathalia/specs/001-modernize-landing-page/spec.md)
**Input**: Feature specification from `/specs/001-modernize-landing-page/spec.md`

## Summary

This feature modernizes the layout of the existing single-page portfolio/services site at `src/app/page.tsx` using Tailwind CSS and Next.js, incorporating accessible UX elements, responsive design, and an integrated in-page contact form powered by a Nodemailer API endpoint.

## User Review Required

> [!IMPORTANT]
> Because you chose to adhere to existing brand guidelines, we will be adapting current CSS colors to a modern layout instead of a totally distinct new theme color. The UI refactor will touch almost all components.

## Technical Context

**Language/Version**: TypeScript / Next.js 15
**Primary Dependencies**: React 19, Tailwind CSS 4, Nodemailer, @tailwindcss/postcss, react-scroll
**Storage**: N/A (Stateless, email dispatch only)
**Testing**: ESLint/Prettier (Visual / Lighthouse Testing)
**Target Platform**: Desktop & Mobile Browser
**Project Type**: Web Application
**Performance Goals**: Lighthouse > 90
**Constraints**: Tailwind utility classes exclusively; follow established codebase typography & colors.
**Scale/Scope**: Single responsive landing page, ~10 UI components.

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- [x] UI handled as React Components (App Router)
- [x] Next.js optimization modules active (next/image)
- [x] High contrast requirements respected
- [x] TypeScript adherence (strictly typed `ContactFormPayload`)
- [x] CSS handled strictly via Tailwind.

## Project Structure

### Documentation (this feature)

```text
specs/001-modernize-landing-page/
├── plan.md              # This file
├── research.md          # Research findings mapping out Nodemailer logic
├── data-model.md        # Form payload structure
├── quickstart.md        # Execution steps, Env Var prerequisites
├── contracts/           # API Contract mapping
└── tasks.md             # Pending 
```

### Proposed Changes

#### `/` (Repository Root)

#### [NEW] [route.ts](file:///d:/site_nathalia/src/app/api/contact/route.ts)
The Next.js backend endpoint handling POST requests and integrating Nodemailer via SMTP credentials.

#### `src/components/sections`

#### [MODIFY] [Home.tsx](file:///d:/site_nathalia/src/components/sections/Home.tsx)
Modernize the Hero section spacing, alignment, and CTA buttons.

#### [MODIFY] [Especialidades.tsx](file:///d:/site_nathalia/src/components/sections/Especialidades.tsx)
Format as distinct clean modular cards with ample whitespace.

#### [MODIFY] [QuemSou.tsx](file:///d:/site_nathalia/src/components/sections/QuemSou.tsx)
Enhance reading contrast and responsive flow for image/text pairs.

#### [MODIFY] [Contato.tsx](file:///d:/site_nathalia/src/components/sections/Contato.tsx)
Integrate the in-page form corresponding to the `ContactFormPayload` logic, displaying success/error states directly on the page.

#### `src/app`

#### [MODIFY] [page.tsx](file:///d:/site_nathalia/src/app/page.tsx)
Add smooth scrolling capabilities wrapping sections and configuring metadata cleanly.

#### [MODIFY] [globals.css](file:///d:/site_nathalia/src/app/globals.css)
Migrate any remaining vanilla specific configurations clearly to Tailwind tokens if needed and remove obsolete styles.

## Open Questions
> All open questions resolved. We will use the IONOS SMTP server (`smtp.ionos.com`, Port 465, SSL/TLS) for Nodemailer.

## Verification Plan

### Automated Tests
- Run `npm run lint` and `npm run build` to ensure type safety around all UI changes.
- In-browser testing via Lighthouse panel manually or via CLI to verify the >90 Performance/Accessibility marks.

### Manual Verification
- Render the application locally (`npm run dev`), verify responsive adaptations via tool resizing, and test the smooth scroll and UI interactivity manually. Ensure Contact Form validation blocks invalid inputs and test sending a sandbox email.
