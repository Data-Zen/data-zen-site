# Exact GitHub Fix Steps

1. In GitHub, open `Data-Zen/data-zen-site`.
2. Click `Add file` > `Upload files`.
3. Extract this ZIP locally.
4. Open the extracted folder.
5. Select all files inside the extracted folder, not the folder itself.
6. Drag the selected files into GitHub.
7. Commit directly to `main` with message: `Fix flat GitHub Pages website files`.
8. Go to `Settings` > `Pages`.
9. Confirm:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
10. Wait for the Pages deployment to finish.
11. Open `https://data-zen.github.io/data-zen-site/`.
12. Press `Ctrl + F5` to hard refresh.

Optional cleanup after it works:

- Delete any accidental file named `download`.
- Delete any accidental root-level files that are not part of the package.
