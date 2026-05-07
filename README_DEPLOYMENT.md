# Data-Zen Website, GitHub Pages Flat Upload Package

This package is intentionally flat, with no `assets/` folder, to make browser upload into GitHub simpler.

Upload these files directly into the root of the `data-zen-site` repository:

- `index.html`
- `styles.css`
- `script.js`
- `404.html`
- `robots.txt`
- `sitemap.xml`
- `.nojekyll`
- `logo.svg`
- `favicon.svg`
- `social-card.svg`

Do not upload the parent folder itself.

GitHub Pages settings:

- Source: Deploy from a branch
- Branch: `main`
- Folder: `/root`

Test this first:

`https://data-zen.github.io/data-zen-site/`

Only after the GitHub Pages test URL looks correct should you add `data-zen.com` as a custom domain and change DNS.
