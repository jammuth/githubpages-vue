# githubpages-vue

A Vue 3 + Vite + TypeScript app deployed to GitHub Pages at
https://jammuth.github.io/githubpages-vue/.

## Requirements

- Node.js `^20.19.0 || >=22.12.0` (see `.nvmrc`)

## Scripts

```sh
npm install           # install dependencies
npm run dev           # start the dev server
npm run build         # type-check and build to ./dist
npm run preview       # preview the production build
npm test              # run unit tests once (Vitest)
npm run test:watch    # run unit tests in watch mode
npm run lint          # lint and auto-fix (ESLint)
npm run format        # format sources (Prettier)
```

## Project layout

- `src/router/` – Vue Router routes (history mode, based on `import.meta.env.BASE_URL`)
- `src/views/` – route-level pages
- `src/components/` – reusable components
- `**/__tests__/` – Vitest + Vue Test Utils specs

## Deployment

Every push to `main` runs `.github/workflows/deploy.yml`, which builds the app
and publishes it with the official GitHub Pages actions. In the repository's
**Settings → Pages**, set **Source** to **GitHub Actions**.

The `base` option in `vite.config.ts` must match the repository name. The build
copies `index.html` to `404.html`, so deep links like `/githubpages-vue/about`
load the app instead of GitHub's 404 page.

Pull requests run `.github/workflows/ci.yml`: formatting, lint, unit tests,
type-check and build. Dependabot opens weekly update PRs for npm packages and
GitHub Actions.
