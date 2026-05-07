# Data-Zen Website v7

This package is a static GitHub Pages-ready website for Data-Zen.

## GitHub upload instructions

Upload the files in this folder directly to the root of the `data-zen-site` repository.

The repository root should look like this:

```text
index.html
styles.css
script.js
404.html
robots.txt
sitemap.xml
.nojekyll
logo.svg
favicon.svg
social-card.svg
social-card.png
```

Do not upload a parent folder that contains these files. `index.html` must be directly visible in the repository root.

## GitHub Pages settings

In the repository, go to:

```text
Settings > Pages
```

Use:

```text
Source: Deploy from a branch
Branch: main
Folder: /root
```

Commit the files, wait for the GitHub Pages deployment to finish, then test:

```text
https://data-zen.github.io/data-zen-site/
```

Only point `data-zen.com` to GitHub after the staging URL looks correct.

## Production domain notes

When you are ready to go live, add `data-zen.com` as the custom domain in GitHub Pages first, then update DNS. Do not delete email-related DNS records such as MX, SPF, DKIM, DMARC, or other TXT records.
