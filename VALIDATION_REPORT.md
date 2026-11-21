# Rebuild verification — 21 November 2026

**Source-of-truth** — bundled PDF was compared byte-for-byte with `21112026_AbhilashCV_Updated.pdf`: **matched**.

**Source syntax check** — nine `.ts`/`.tsx` files parsed with the TypeScript compiler frontend and transpiled without syntax diagnostics: **passed**. This is not equivalent to a full `tsc --noEmit` dependency-aware type check.

**Visual source checks** — nine SVG files parsed as XML; all have viewBox; CSS parsed without stylesheet syntax errors; two original PNG badge crops inspected: **passed**.

**Vector visual inspection** — rasterized all nine SVG files and inspected a contact sheet; the graphics use the approved conceptual/explanatory approach and do not contain employer UI screenshots: **passed**.

**Dependencies** — `npm install` was attempted but stalled due to restricted package registry/network access in this environment. `node_modules` were not installed. **Unverified**: lint, full typecheck, production build, responsive browser rendering and runtime route checks.

**Production readiness** — code and visual assets are prepared but do not claim deployment readiness until the steps below pass on a network-enabled machine:

```bash
npm install
npm run lint
npm run typecheck
npm run build
npm run dev
```

At 375px, 768px and 1440px verify text wrapping, SVG content fit, badge images, all `/work/[slug]` routes, links, and CV download. Confirm the contact information in the publicly downloadable CV is acceptable before deploying.

**Migration status** — the old Vercel / GitHub repository was not available for inspection. No existing deployed site was edited. Use `CLAUDE_CODE_MIGRATION_PROMPT.md` to merge the rebuild into the real source repository rather than replacing it blindly.
