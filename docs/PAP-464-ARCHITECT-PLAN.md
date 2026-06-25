# PAP-464 — Architect Plan

## Issue summary

Vercel build completes successfully, but deployment is flagged after build because the app is pinned to a vulnerable Next.js version:

- `next`: `15.3.4`
- `eslint-config-next`: `15.3.4`

The log explicitly reports:

- `Vulnerable version of Next.js detected, please update immediately.`
- `next@15.3.4` has a security vulnerability.

This is therefore a dependency security remediation task, not a rendering/build failure.

## Stack confirmed

- Framework: Next.js App Router (`app/`)
- UI: React 19
- Language: TypeScript
- Motion/UI libs: Framer Motion, Lucide React
- Styling: global CSS in `app/globals.css`
- Package manager: npm (`package-lock.json` present)
- Hosting target: Vercel

## App surface reviewed

### Pages
- `app/page.tsx` — single entry page rendering `PortfolioPage`
- `app/layout.tsx` — root layout and metadata

### Components
- `components/PortfolioPage.tsx` — main single-page portfolio composition
- `components/Hero.tsx`
- `components/Navbar.tsx`
- `components/AnimatedBackground.tsx`
- `components/ProjectCard.tsx`
- `components/SkillCard.tsx`
- `components/SectionHeading.tsx`
- `components/ContactForm.tsx`

### Data/content
- `data/portfolio.ts` — content source for nav, projects, services, testimonials, contact info

### APIs / server routes
- No custom API routes found in `app/api/*`
- No backend integration coupled to Next server features was identified from the reviewed surface

## Root cause

The repository pins Next.js to `15.3.4`, which Vercel now rejects/warns as vulnerable. The current app already builds successfully, so the most likely minimal-risk fix is to upgrade within the same release line to the patched 15.3 dist-tag.

Confirmed available dist-tag:
- `next-15-3` → `15.3.9`

## Implementation plan for Grunt

1. **Upgrade framework dependencies**
   - Update `next` from `15.3.4` → `15.3.9`
   - Update `eslint-config-next` from `15.3.4` → `15.3.9`
   - Keep `react` and `react-dom` at `19.1.0` unless the upgrade forces a change

2. **Refresh lockfile**
   - Run npm install to regenerate `package-lock.json` with the patched Next.js tree
   - Ensure no unintended major dependency drift beyond the targeted bump

3. **Validate local quality gates**
   - Run `npm run build`
   - Run `npm run lint` if available in the environment and compatible with the installed dependencies
   - If linting fails because of environment/tooling mismatch unrelated to the Next patch, capture separately; do not broaden scope unless necessary

4. **Regression check app surface**
   - Sanity-check that App Router entrypoints still compile:
     - `app/layout.tsx`
     - `app/page.tsx`
   - Sanity-check interactive client components most likely to surface framework/runtime issues:
     - `components/PortfolioPage.tsx`
     - `components/ContactForm.tsx`
     - `components/Hero.tsx`
     - `components/Navbar.tsx`

5. **Deployment-focused acceptance criteria**
   - Production build succeeds
   - Lockfile reflects patched Next.js version
   - No TypeScript or compile regressions introduced
   - Vercel should no longer flag the known vulnerable `15.3.4` release after redeploy

## Expected file changes in implementation phase

Primary:
- `package.json`
- `package-lock.json`

Possible but not expected:
- no app/component source changes should be needed if the upgrade remains compatible

## Risk assessment

- **Low risk**: this looks like a patch-line dependency remediation, not a feature refactor
- **Main risk**: minor behavior or lint config changes introduced by patched Next.js packages
- **Mitigation**: stay on the `15.3.x` line (`15.3.9`) instead of jumping to `16.x`

## Suggested Grunt execution order

1. bump `next` and `eslint-config-next`
2. install dependencies
3. run build
4. run lint
5. only touch app code if the patch unexpectedly exposes compatibility issues

## Notes for Pedant

Focus review on:
- exact dependency versions in `package.json`
- lockfile consistency
- successful build evidence
- confirmation that no unnecessary app code changes were introduced for a dependency-only fix
