# Adarsh Singh — Portfolio

This is a React + Vite + Tailwind CSS portfolio for **Adarsh Singh**.
It includes animations via Framer Motion, an editable JSON config, Netlify config, and a GitHub Actions workflow that can deploy to Netlify.

## Quick start (local)

```bash
# 1. Install
npm install

# 2. Dev
npm run dev

# 3. Build
npm run build

# 4. Preview build
npm run preview
```

## Deploy to Netlify via GitHub Actions
1. Create a Netlify site and get `NETLIFY_AUTH_TOKEN` and `NETLIFY_SITE_ID`.
2. Add them as GitHub Secrets in your repository.
3. Push to the `main` branch — the GitHub Action will build and deploy.

## Included files
- `src/` — React source (components, App, main)
- `index.html` — Vite HTML entry
- `tailwind.config.cjs`, `postcss.config.cjs` — Tailwind setup
- `netlify.toml` — Netlify configuration
- `.github/workflows/deploy.yml` — GitHub Actions workflow to deploy to Netlify

## Notes
- Update `src/components/Adarsh_Singh_Portfolio.jsx` or download `public/portfolio-config.json` at runtime to change content.
- This repo expects Node 18+ and npm.