> **Version 3 (CV-complete):** Eight case studies across API Gateway, Developer Experience, Climate Maps, MapTiles, cross-company Connected Device Lifecycle, enterprise provisioning, AI-assisted support and Ambee for Academia. See [CV_COVERAGE_AUDIT_V3.md](CV_COVERAGE_AUDIT_V3.md) for the 27/27 professional-experience bullet coverage map. This remains a static Next.js app suitable for GitHub Pages.

# Abhilash Mishra — Enterprise Product Manager Portfolio

A complete Next.js App Router portfolio, developed from **21112026_AbhilashCV_Updated.pdf** (21 November 2026), with two separately evidenced Anthropic course completions.

## What is inside

- A deliberately restrained, light editorial design: serif headings, precise dividers, readable layout, original vector explainers instead of fake employer dashboards or stock imagery.
- Homepage sections: introduction, grounded proof points, five detailed case studies, product approach, career timeline, independent products, education, professional development and contact.
- Five pre-rendered detail pages under `/work/[slug]`.
- Responsive navigation, accessible text and focus indicators, reduced-motion styling.
- SEO metadata, OG image, sitemap, robots file, downloadable CV.
- All content in `src/data/content.ts` for easy factual review.
- Original, performance-friendly SVG graphics for all five case studies and three independent projects; conceptual labels explicitly prevent confusion with real product screenshots.
- A hero systems illustration and two **actual** Anthropic completion-badge images cropped from the user-supplied screenshot.

## Run locally

Requires Node.js 20.9+ (tested with Node 22) and npm.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Validate production build

```bash
npm run lint
npm run typecheck
npm run build
npm run start
```

## Deploy to Vercel

1. Create a private GitHub repository and add this project (exclude `.next` and `node_modules`).
2. Import the repository into Vercel as a **Next.js** project.
3. Add `NEXT_PUBLIC_SITE_URL` in Vercel Project Settings → Environment Variables, using the exact production URL, e.g. `https://portfolio.yourdomain.com`, with no trailing slash.
4. Redeploy after setting the URL; this is used for canonical URLs, `robots.txt`, and `sitemap.xml`.
5. Verify routes, links, CV download, OG image, and mobile layouts in the deployed version.

## Accuracy and sources

**Primary source of truth:** the attached November 21, 2026 CV, copied to `public/Abhilash-Mishra-CV.pdf`. The site uses the CV's exact company titles and employment dates, rather than extrapolations from older drafts.

**Separately verified supplemental facts:** user's screenshot of completed Anthropic courses shows *Claude Code 101* and *Introduction to Claude Cowork*, issued 1 November 2026. These are explicitly labeled as **completed courses**, not professional certifications.

The content deliberately distinguishes:

- `$2.55M ARR` as the Fortune 500 **account scope**, not personal revenue generated.
- `22% Tier-2 escalation reduction` and `30% ordering workflow velocity` as **reported by Business/Product stakeholders**. The 30% is in the bundled CV and not spotlighted as an independently proven effect.
- `₹1.5Cr+` as **net-new contract revenue for a broader environmental-data product portfolio**, not one API feature's revenue.
- `sub-200ms` as **reported API query latency under continuous load**, not a guaranteed individual endpoint SLA.
- `20M+` as **MapTiles requests/month**, `10M+` as **API calls/month**, `20K+` as **Climate Maps monthly sessions** (distinct metrics).
- `1,200+` as **physical monitoring devices and weather stations**, not software integrations.
- `>99.5%` as reported platform uptime from the **current CV**; the site does not substitute earlier higher figures.
- Ambee for Academia and Enterprise API Dashboard use a **shared SSO capability**, not two unrelated SSO projects.

No endorsement, confidential employer screens, invented customer names or proprietary internal workflows are shown. For a claim-level audit against the source, see `CONTENT_AUDIT.md`.

## Customize

- **Copy**: `src/data/content.ts`.
- **Design**: `src/app/globals.css` CSS variables.
- **Meta and page title**: `src/app/layout.tsx` and route metadata.
- **Contact**: `profile` at the top of `src/data/content.ts`.
- **CV**: replace `public/Abhilash-Mishra-CV.pdf` if updated.
- **Headshot**: not included because an actual portrait was not supplied. Add your own image later; do not use AI-generated faces.
- **Course badges**: images are cropped directly from the completion screenshot shared by the user. They are shown as course-completion badges, not professional certifications. Add credential URLs only when available.

### Privacy note

The attached original CV PDF is copied into `public/`, which makes it **publicly downloadable when deployed**, including the email address and phone number printed in it. Remove that file and the download links if you do not want those details public.

## Editorial choices

This is a **new standalone rebuild**, not an in-place modification of your existing project: no existing repository source was provided. Keep a backup of your old site and compare the new work in staging before replacing production.

## Benchmark comparison and graphics

See `BENCHMARK_NOTES.md` for the publicly accessible Senior PM / product-leadership references and the specific layout and content patterns selected. The SVGs live in `public/visuals/` as small, editable source files; image dimensions are fixed to avoid layout shifts.

**Important:** these are simplified, *conceptual* diagrams, not internal architecture drawings or product screenshots. Each case page says so explicitly. No existing Vercel site has been modified because the live source repository was not supplied.

## Verification

See `VALIDATION_REPORT.md` for completed static checks and outstanding npm/build/browser checks. This archive is source-ready, but a successful production build has not been verified in this network-restricted environment.