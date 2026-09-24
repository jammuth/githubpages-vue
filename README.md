# githubpages-vue

A Vue 3 + Vite app deployed to GitHub Pages at
https://jammuth.github.io/githubpages-vue/.

## Requirements

- Node.js `^20.19.0 || >=22.12.0` (see `.nvmrc`)

## Scripts

```sh
npm install      # install dependencies
npm run dev      # start the dev server
npm run build    # build to ./dist
npm run preview  # preview the production build
```

## Deployment

Every push to `main` runs `.github/workflows/deploy.yml`. The workflow builds
the app and publishes `./dist` to the `gh-pages` branch. The `base` option in
`vite.config.js` must match the repository name.
