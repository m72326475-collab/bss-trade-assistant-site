# BSS Trade Assistant website

A lightweight, static landing and download page for the free **BSS Trade Assistant** Windows companion. The desktop application itself lives in a separate repository; this repository contains only the website.

## Preview locally

No build step or dependencies are required. From the repository folder, run:

```bash
python3 -m http.server 8000
```

Then visit <http://localhost:8000>. Opening `index.html` directly also works, but a local server most closely matches GitHub Pages.

## Update links and version information

The editable site values are together at the top of `script.js`:

```js
const SITE_CONFIG = {
  DOWNLOAD_URL: "",
  ROBLOX_PROFILE_URL: "https://www.roblox.com/users/profile?username=bssbat",
  LATEST_VERSION: "Coming soon",
};
```

- Set `DOWNLOAD_URL` to the public `.exe` or GitHub Release URL when it is ready. Until then, the download button stays disabled and says **Coming soon**.
- Set `ROBLOX_PROFILE_URL` to the full Roblox profile URL shown by the active community button.
- Update `LATEST_VERSION` when publishing releases (reserved for future release messaging).

## Deploy with GitHub Pages

The included workflow deploys the site for free whenever a commit is pushed to `main`.

1. Push this repository to GitHub and make sure the default branch is named `main`.
2. Open the repository on GitHub and go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Open the **Actions** tab and allow the `Deploy static site to Pages` workflow to finish.
5. GitHub displays the public URL in the completed deployment and on the Pages settings screen.

All asset paths are relative, so the site works at a repository subpath such as `username.github.io/bss-trade-assistant-site/`.

## Important files

| File | Purpose |
| --- | --- |
| `index.html` | Semantic page content and the in-browser app mockup |
| `styles.css` | Responsive layout, colors, component styling, and motion preferences |
| `script.js` | Link configuration and mobile navigation |
| `assets/logo.svg` | Lightweight project logo |
| `.github/workflows/pages.yml` | Automatic GitHub Pages deployment |

## Replace the app mockup later

The current preview is HTML inside `.preview-wrap` in `index.html`, which keeps it crisp at every screen size. To replace it with a real screenshot:

1. Add an optimized WebP image to `assets/screenshots/`.
2. Replace the `<article class="app-window">…</article>` element with an `<img>` using a relative path, for example `assets/screenshots/app-preview.webp`.
3. Keep the surrounding `.preview-wrap` element and add useful alternative text describing the screenshot.

## Project principles

No backend, cookies, analytics, login, framework, external font, or paid service is used.
