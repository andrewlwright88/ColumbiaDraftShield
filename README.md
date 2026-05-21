# DraftShield™

Product launch site for **DraftShield™** — a premium adhesive-backed foam weatherstrip by Columbia Aluminum Products (TrimMaster® brand). Static React 19 SPA, deployed to Vercel.

> See [`CLAUDE.md`](./CLAUDE.md) for the working brief Claude Code uses when editing this project — brand guidelines, file structure, key conventions, and route map.

---

## Stack

React 19 · Vite 7 · TypeScript 5.6 · Tailwind CSS 4 · shadcn/ui · Wouter · Framer Motion · pnpm

---

## Quick start

```bash
pnpm install
pnpm dev          # → http://localhost:3000
```

## Other commands

```bash
pnpm build        # production build → dist/public
pnpm preview      # preview the production build locally
pnpm check        # tsc --noEmit
pnpm format       # prettier --write .
```

---

## Project structure

```
client/
  index.html               ← SEO meta + Google Fonts
  public/placeholders/     ← SVG placeholders (swap with real photography)
  src/
    pages/                 ← One file per route
    components/            ← Navigation, Footer, ErrorBoundary, ui/ (shadcn)
    contexts/, hooks/      ← React contexts + custom hooks
    lib/
      data.ts              ← All product data, SKUs, copy, calculator logic
      images.ts            ← Image URL registry
      utils.ts             ← cn() helper
    App.tsx                ← Routes
    main.tsx               ← React entry
    index.css              ← OKLCH design tokens + global styles
vercel.json                ← SPA rewrites + cache headers
```

---

## Deploy

The project is configured for **Vercel** out of the box.

1. Push to the GitHub repo (this repo is connected).
2. Import the repo into Vercel — it picks up `vercel.json` automatically:
   - Build command: `pnpm build`
   - Install command: `pnpm install --frozen-lockfile`
   - Output directory: `dist/public`
3. No env vars required for the static build.

Because routing is client-side (Wouter), `vercel.json` rewrites every path to `/index.html`.

For other hosts: any static-file host works (Netlify, Cloudflare Pages, S3+CloudFront, GitHub Pages with SPA fallback). Just point them at `dist/public` after `pnpm build` and configure a "rewrite all to /index.html" fallback.

---

## Working with Claude Code

This repo includes `.claude/launch.json`, which makes the dev preview tools start `pnpm dev` automatically. Start a Claude Code session in this directory and ask it to:

- "Tour the site" — Claude scrolls every route and reports issues.
- "Build feature X" — Claude reads `CLAUDE.md`, the data layer, and applies the brand conventions.
- "Update [SKU] copy" — Claude knows all product copy lives in `client/src/lib/data.ts`.

See [`CLAUDE.md`](./CLAUDE.md) for the full project brief.

---

## Brand

Made in Corona, CA. Since 1947. Five-year written guarantee.

© Columbia Aluminum Products, Inc. · TrimMaster® · DraftShield™
