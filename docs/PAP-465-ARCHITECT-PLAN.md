# PAP-465 — Architect Plan

## Ticket goal

Improve the portfolio UI so it looks more convincingly like a premium **AI Engineer portfolio**, not just a generic dark SaaS landing page.

This phase is **planning only**. No application code should be changed by the Architect.

## Current stack confirmed

- **Framework:** Next.js 15 App Router
- **UI:** React 19 + TypeScript
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Styling:** custom global CSS in `app/globals.css`
- **Content source:** `data/portfolio.ts`
- **Page model:** single-page portfolio rendered by `components/PortfolioPage.tsx`
- **Custom API routes:** none found

## Current app surface reviewed

### Pages
- `app/page.tsx`
- `app/layout.tsx`

### Main composition
- `components/PortfolioPage.tsx`

### Supporting UI components
- `components/Hero.tsx`
- `components/Navbar.tsx`
- `components/AnimatedBackground.tsx`
- `components/ProjectCard.tsx`
- `components/SkillCard.tsx`
- `components/SectionHeading.tsx`
- `components/ContactForm.tsx`

### Content/data layer
- `data/portfolio.ts`

## Scope analysis

The current implementation already satisfies most of the original section checklist:

- sticky navbar
- animated hero
- about/skills/projects/services/experience/testimonials/contact/footer
- glassmorphism styling
- responsive layout
- scroll reveal/motion

The weakness is **presentation quality and AI-specific brand language**, not missing pages.

## Main UI problems to solve

1. **Hero looks good but not distinctive enough**
   - The current dashboard is clean, but it reads like a generic SaaS block instead of an AI engineer command center.

2. **Too much uniform card treatment**
   - Many sections use the same glass card pattern with similar spacing and rhythm, which flattens hierarchy.

3. **Projects lack visual storytelling**
   - The current project cards all use the same fake chart visual, so they do not feel tailored to AI, dashboards, automations, or product systems.

4. **About/profile area feels placeholder-heavy**
   - The circular “AI” avatar is functional but not premium enough for the desired brand impression.

5. **Skills and services are informative but visually repetitive**
   - Good content, but the interaction model and layout are too static for a high-end portfolio.

6. **Testimonials/contact/footer finish is weaker than the top of the page**
   - The page starts strong, then loses visual intensity and “crafted” feeling lower down.

## Web research takeaways to inform the redesign

From current 2026 UI trend research and portfolio inspiration, the strongest relevant direction is:

1. **Bento-grid hierarchy**
   - Use mixed card sizes to create visual rhythm and stronger scanning.
   - Best fit for hero side panels, skills summary, and project highlight layouts.

2. **Refined dark glassmorphism**
   - Keep translucent panels, but reduce “samey blur everywhere.”
   - Use more layered depth: subtle borders, sharper contrast, controlled glow, and selective noise.

3. **Visible AI interface motifs**
   - AI-focused portfolios increasingly show system surfaces: command panels, model telemetry, workflow states, orchestration steps, and structured outputs.
   - This is more believable than abstract neon blobs alone.

4. **Dark-first with clearer contrast discipline**
   - Stronger typography contrast and spacing matter more than more effects.
   - The redesign should feel sharper, not merely busier.

## Recommended design direction

Position the site as:

> **A premium AI product engineer portfolio with command-center UI cues, modular bento composition, and stronger case-study presentation.**

The visual tone should remain dark/futuristic, but move from **“generic glass landing page”** to **“AI systems builder / product engineer showcase.”**

## Architecture plan for Grunt

### 1) Keep the stack and architecture stable

Do **not** introduce Tailwind or a UI framework during this ticket.

Reason:
- The app already uses a clean global-CSS system.
- This is a UI polish/refactor task, not a stack migration.
- A migration would create unnecessary risk and noise.

### 2) Refactor, don’t rebuild the page model

Keep:
- `app/page.tsx` as the entry point
- `PortfolioPage` as the top-level page composition
- `data/portfolio.ts` as the main content source

Change the **section layouts and component visuals**, not the overall information architecture.

## Concrete implementation plan

### A. Hero section — strongest redesign target

**Files likely touched:**
- `components/Hero.tsx`
- `app/globals.css`
- possibly `data/portfolio.ts`

**Plan:**
- Replace the current right-side single dashboard card with a more **AI command-center bento cluster**.
- Keep the left-side headline/CTA/stats structure, but strengthen the typography and spacing.
- Split the hero visual into 3–4 modules such as:
  - model activity panel
  - workflow pipeline panel
  - deployment/system health panel
  - short code/output panel
- Add stronger “live system” cues: status dots, latency/accuracy labels, event chips, orchestration steps.
- Keep the rotating text effect, but tune it to feel more intentional and premium.

**Expected outcome:**
The first viewport should immediately say **AI engineer** instead of generic SaaS.

### B. About section — improve identity and credibility

**Files likely touched:**
- `components/PortfolioPage.tsx`
- `app/globals.css`

**Plan:**
- Convert the about section into a more editorial two-column block with stronger hierarchy.
- Replace the basic avatar emphasis with a more polished profile/identity card or systems-profile card.
- Keep the highlights, but present them as a structured capability matrix or mini bento grid instead of equal-looking pills only.

**Expected outcome:**
The section should feel like a professional positioning block, not filler between hero and skills.

### C. Skills section — add hierarchy, not just more chips

**Files likely touched:**
- `components/SkillCard.tsx`
- `components/PortfolioPage.tsx`
- `app/globals.css`
- possibly `data/portfolio.ts`

**Plan:**
- Keep the existing skill categories, but redesign them into a more premium layout.
- Options:
  - large featured AI/Full Stack categories + smaller supporting cards
  - bento grid with category prominence
  - small metric or capability labels inside each card
- Improve chip styling so they read like a curated system, not default tags.

**Expected outcome:**
Skills should read as a productized engineering toolkit with strong specialization in AI systems.

### D. Projects section — biggest portfolio credibility upgrade after hero

**Files likely touched:**
- `components/ProjectCard.tsx`
- `components/PortfolioPage.tsx`
- `app/globals.css`
- `data/portfolio.ts`

**Plan:**
- Redesign project cards so each one has a more specific visual language.
- Replace the identical chart graphic with project-specific mockup patterns such as:
  - chatbot conversation / assistant panel
  - analytics dashboard
  - automation pipeline / node flow
  - ecommerce metrics + order stream
  - content generation workspace
- Increase the visual separation between project preview and project details.
- Give featured projects more case-study feel using stack, outcomes, features, or role framing.
- If scope allows, make the first 1–2 projects visually larger than the rest.

**Expected outcome:**
Projects should feel like tailored product builds, not cloned cards with different text.

### E. Services section — reduce repetition

**Files likely touched:**
- `components/PortfolioPage.tsx`
- `app/globals.css`

**Plan:**
- Keep the service list, but change card rhythm and icon treatment.
- Use stronger section framing, possibly with:
  - alternating emphasis cards
  - grouped service families
  - better icon containers and hover states

**Expected outcome:**
Services should support the brand without feeling like a duplicated skills block.

### F. Experience section — keep structure, improve finish

**Files likely touched:**
- `components/PortfolioPage.tsx`
- `app/globals.css`

**Plan:**
- Keep the timeline pattern because it fits the content.
- Improve contrast, spacing, glow discipline, and motion polish.
- Consider tighter technology badge styling and clearer year/title grouping.

**Expected outcome:**
The timeline should feel premium and readable, not just decorative.

### G. Testimonials section — add motion or layout personality

**Files likely touched:**
- `components/PortfolioPage.tsx`
- `app/globals.css`
- maybe new testimonial-specific component if helpful

**Plan:**
- Keep cards if implementation speed matters, but redesign them with stronger spacing and hierarchy.
- Prefer either:
  - horizontal snap-scroll feel, or
  - featured central quote + supporting cards
- Improve avatar placeholder styling and rating presentation.

**Expected outcome:**
This section should feel intentionally designed, not left as a simple three-card grid.

### H. Contact + footer — premium close

**Files likely touched:**
- `components/ContactForm.tsx`
- `components/PortfolioPage.tsx`
- `app/globals.css`
- maybe `app/layout.tsx` if metadata polish is included

**Plan:**
- Keep the form behavior client-side for this ticket unless explicitly asked to add backend handling.
- Upgrade the visual framing of the contact area so it feels like a CTA zone, not a standard form block.
- Make the footer cleaner and more brand-forward with better balance between identity, links, and social presence.

**Expected outcome:**
The page should finish as strongly as it begins.

## Data/content plan

### Keep centralized content in `data/portfolio.ts`

Possible safe additions if needed by Grunt:
- short project labels/status text
- project visual variant keys
- optional project metrics/outcomes
- service grouping labels
- hero system panel labels
- section support text tweaks for a stronger AI-engineer tone

### Do not add backend/API scope unless required

Current state:
- no custom API routes
- contact form is local-validation only

For this ticket:
- **No new API is required** to achieve the requested UI improvement.
- If Grunt wants future-readiness, they may leave structure that could later connect to `app/api/contact`, but actual API work should remain out of scope unless specifically requested.

## CSS/system plan

**Primary styling file:** `app/globals.css`

Recommended CSS changes:
- tighten spacing scale between sections
- introduce more section-specific layout classes
- sharpen contrast between surface levels
- reduce overuse of identical glass cards
- add richer hover/focus states selectively
- strengthen project visual treatments
- add bento/grid utilities where useful
- improve mobile stacking for redesigned hero and projects

## Pages / components / APIs summary for handoff

### Pages
- `app/page.tsx`: no architecture change expected
- `app/layout.tsx`: optional metadata polish only

### Components most likely to change
- `components/PortfolioPage.tsx`
- `components/Hero.tsx`
- `components/ProjectCard.tsx`
- `components/SkillCard.tsx`
- `components/ContactForm.tsx`
- `components/AnimatedBackground.tsx` (optional refinement)

### Potential new components worth creating
Only if Grunt wants cleaner separation:
- `components/HeroCommandPanel.tsx`
- `components/ProjectPreview.tsx`
- `components/TestimonialShowcase.tsx`
- `components/CapabilityHighlights.tsx`

These are optional; the ticket can still be completed without over-fragmenting the component tree.

### APIs
- No new API routes required
- No server action required
- Contact form backend integration remains optional and out of current scope

## Suggested implementation order for Grunt

1. redesign hero layout and supporting CSS
2. redesign project cards and project visual language
3. improve about + skills hierarchy
4. refine services + testimonials + contact sections
5. polish footer and background treatment
6. run responsive pass
7. run build/lint validation

## Acceptance criteria

Grunt should consider the ticket complete when:

1. The page reads visually as an **AI engineer portfolio**, not a generic SaaS template.
2. Hero and projects feel materially more premium than before.
3. Section hierarchy is stronger and less repetitive.
4. Mobile layout still works cleanly.
5. No unnecessary stack migration or backend scope creep is introduced.
6. `npm run build` passes.
7. `npm run lint` passes or any unrelated lint blocker is documented clearly.

## Risks and guardrails

### Risks
- Over-designing with too many effects can hurt readability.
- Adding too many new components can slow delivery without improving UX enough.
- Introducing Tailwind or a new library would create unnecessary churn.

### Guardrails
- Prioritize layout hierarchy over visual gimmicks.
- Prefer believable AI/system UI motifs over abstract neon decoration.
- Keep copy mostly intact unless small wording upgrades improve positioning.
- Preserve performance and responsiveness.

## Notes for Pedant

Review should focus on:
- whether the page now clearly communicates “AI Engineer portfolio”
- whether hero/project sections received meaningful visual upgrades
- whether implementation stayed within UI scope only
- whether any new complexity is justified
- whether mobile/readability/accessibility remained solid

## Delivery boundary for this phase

- No source implementation performed by Architect
- No PR creation
- No branch push
- Plan artifact only
