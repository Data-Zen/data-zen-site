# Release Notes, v7

## Fixed

- Made scroll reveal animations safe if JavaScript fails or IntersectionObserver is unavailable. Content now remains visible by default.
- Added native contact form validation before opening the pre-filled email draft.
- Changed the 404 page home link from `/` to `./` so it works correctly on GitHub Pages staging paths.
- Added `social-card.png` for more reliable Open Graph and social link previews.
- Updated Open Graph and Twitter image metadata to use the PNG social card.

## Improved

- Tightened the SEO title and meta description.
- Focused the hero messaging more clearly around Snowflake, SQL Server migration, replication, performance optimization, dbt, Fivetran, Azure, and operational reliability.
- Softened broad or hard-to-prove claims, including phrases around "any scale", "cutting edge", and "zero tolerance".
- Removed em dash characters from the HTML, CSS, and JavaScript source.

## Deployment reminder

Upload the contents of this package directly to the GitHub repository root. Do not upload the containing folder itself.
