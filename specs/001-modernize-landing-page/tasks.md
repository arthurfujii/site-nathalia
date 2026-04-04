# Tasks: Modernize Landing Page Layout

**Input**: Design documents from `/specs/001-modernize-landing-page/`
**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/, quickstart.md

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Environment and structural initialization

- [x] T001 [P] Configure environment variables for Nodemailer in `.env.local` following `quickstart.md`
- [x] T002 [P] Verify optimal Tailwind CSS importing structure in `src/app/globals.css`

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST satisfy all upcoming sections

- [x] T003 Implement the `react-scroll` smooth scrolling mechanisms and section structural wrappers inside `src/app/page.tsx`

---

## Phase 3: User Story 1 - First Impressions and Navigation (Priority: P1) 🎯 MVP

**Goal**: Present visitors with a visually appealing, modern layout immediately to establish trust.

**Independent Test**: The landing page correctly loads a responsive Hero section displaying a clear value proposition and a prominent primary Call-To-Action.

### Implementation for User Story 1

- [x] T004 [US1] Refactor Hero layout, adjust responsive typography spacing, and improve primary CTA alignment in `src/components/sections/Home.tsx`

---

## Phase 4: User Story 2 - Discovering Services (Priority: P2)

**Goal**: Allow potential clients to easily read through services offered in an organized, legible format.

**Independent Test**: The Specialties and About Me sections scale dynamically across screen sizes with enhanced contrasts and card-based boundaries.

### Implementation for User Story 2

- [x] T005 [P] [US2] Reformat content into distinct modular, card-based areas with readable flow in `src/components/sections/Especialidades.tsx`
- [x] T006 [P] [US2] Improve reading contrast, spacing, and responsive layout scaling in `src/components/sections/QuemSou.tsx`

---

## Phase 5: User Story 3 - Contacting the Professional (Priority: P3)

**Goal**: Establish a frictionless way for prospects to reach out without refreshing the page.

**Independent Test**: Entering valid data and clicking submit properly triggers a successful delivery state, backed securely by an API Route.

### Implementation for User Story 3

- [x] T007 [P] [US3] Create the Next.js POST endpoint integrating Nodemailer logic and `ContactFormPayload` validation in `src/app/api/contact/route.ts`
- [x] T008 [US3] Connect the frontend UI to dispatch payloads asynchronously, resolving success/error states directly on the page in `src/components/sections/Contato.tsx`

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Code quality improvements directly correlating to measurable UI/UX goals.

- [x] T009 Purge and remove any remaining obsolete hard-coded CSS from `src/app/globals.css`
- [x] T010 Perform localized `npm run build` and generic Lighthouse audits across Chrome Developer Tools Desktop/Mobile profiles.

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3+)**: All depend on Foundational phase completion
  - Can proceed simultaneously (if staffed parallelly) or sequentially (P1 -> P2 -> P3)
- **Polish (Final Phase)**: Depends on all desired user stories completing

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Phase 2 - Independent.
- **User Story 2 (P2)**: Can start after Phase 2 - Independent.
- **User Story 3 (P3)**: Can start after Phase 2 - Independent.

### Parallel Opportunities

- **T001 & T002**: Environment configurations and Tailwind styles can run side-by-side.
- **T005 & T006**: Both informational sections run independently.
- **T007 & T008**: An API skeleton route can be mocked while the frontend component binds inputs iteratively.

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1 & 2
2. Complete Phase 3 (Hero Layout MVP)
3. STOP and VALIDATE visual regression independence

### Incremental Delivery

1. Integrate User Story 2 content sections. 
2. Validate scrolling flows and readability.
3. Integrate User Story 3 API logic.
4. Execute End-to-End Contact validations (Polish).
