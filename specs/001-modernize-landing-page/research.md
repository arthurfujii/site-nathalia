# Research Findings: Modernize Landing Page Layout

## 1. Contact Form Backend Integration
- **Decision**: Use Next.js App Router API Routes (`src/app/api/contact/route.ts`) combined with `nodemailer`.
- **Rationale**: `nodemailer` is already declared in `package.json`, avoiding new dependencies. Server-side API execution securely hides SMTP credentials using environment variables.
- **Alternatives considered**: 3rd-party services like Formspree or EmailJS. Rejected to keep data processing in-house and avoid free-tier limitations, leveraging existing packages.

## 2. In-page Smooth Navigation
- **Decision**: Use `react-scroll`.
- **Rationale**: The library `react-scroll` is explicitly listed in `package.json`. It provides robust and accessible smooth scrolling between internal anchors (e.g., from the Hero CTA to the Contact form).
- **Alternatives considered**: Native CSS `scroll-behavior: smooth`. Rejected because native scrolling lacks granular offset control needed when fixed headers obscure component tops.

## 3. Styling Constraints
- **Decision**: Tailwind CSS exclusively.
- **Rationale**: Project Constitution explicitly mandates it, and `tailwindcss v4` + `@tailwindcss/postcss` are already configured. It guarantees consistency and high performance.
- **Alternatives considered**: Vanilla CSS Modules. Rejected to adhere to Constitution guidelines for utility-centric pattern standardizations.
