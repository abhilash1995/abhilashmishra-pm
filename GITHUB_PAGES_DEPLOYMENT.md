# Host the portfolio on GitHub Pages

The portfolio is designed to publish at **https://abhilash1995.github.io/abhilashmishra-pm/** using GitHub Actions, without Vercel or another hosting service.

## One-time repository setup

1. Review and merge the GitHub Pages configuration pull request after its build check passes.
2. Open **Settings → Pages → Build and deployment → Source**, and select **GitHub Actions**. Do not select “Deploy from a branch”: the Next.js application must build first.
3. In **Actions → Deploy portfolio to GitHub Pages**, run the workflow on **main** if the merge did not already trigger it.
4. When the build and deploy jobs succeed, open the address above.
5. Check all five case-study pages, CV download, badge images, responsive layout, and external links.

## How this works

- Next.js uses `output: 'export'`, which generates static HTML/CSS/JS in `out/`.
- The Actions workflow sets `PAGES_BASE_PATH` and `NEXT_PUBLIC_BASE_PATH` to `/abhilashmishra-pm`. This ensures routes, diagrams, course badges, and the downloadable PDF load at the repository subpath.
- `NEXT_PUBLIC_SITE_URL` is set to the public Pages URL for canonical URLs, robots and sitemap.
- Pull requests run the build/checks but do not publish. Only `main` and manual workflow runs from `main` can deploy.
- Local development stays at `http://localhost:3000`: use `npm install` and `npm run dev`.

## Troubleshooting

- **404 for images or CV:** Make sure the build uses both `PAGES_BASE_PATH=/abhilashmishra-pm` and `NEXT_PUBLIC_BASE_PATH=/abhilashmishra-pm`.
- **Deployment permission error:** Check that the Pages source is set to GitHub Actions and that the repository allows Actions.
- **Build failure:** Open the Actions run; fix any lint, Next.js export, or type-check errors before merging.
- **Future custom domain:** You can add a custom domain later through Settings → Pages and DNS, but it requires updating base-path and canonical URL configuration.

GitHub Pages is static hosting; it does not support server-only Next.js API routes, server actions, or server-side authentication. This portfolio is static and does not need those features.
