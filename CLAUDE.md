# DraftShield™ — Claude Code Project Guide

This is the working brief for Claude Code sessions on this project. It documents the brand, the stack, and the conventions to follow when editing.

---

## What this is

**DraftShield™** is the launch site for a premium adhesive-backed foam weatherstrip made by **Columbia Aluminum Products** under the **TrimMaster®** brand. The product ships at Home Depot. The site is a **static React 19 SPA**, deployed to **Vercel**.

---

## Stack

| Layer | Tech |
|---|---|
| Framework | React 19 + Vite 7 (static build, no SSR, no API) |
| Styling | Tailwind CSS 4 + custom OKLCH design tokens |
| UI | shadcn/ui on Radix primitives |
| Routing | Wouter v3 (client-side SPA routing) |
| Motion | Framer Motion + CSS transitions |
| Icons | Lucide React |
| Language | TypeScript 5.6 |
| Package manager | pnpm 10 |
| Deploy | Vercel (`vercel.json` configured for SPA rewrites) |

---

## Dev commands

```bash
pnpm install       # install deps
pnpm dev           # start vite dev server (default :3000)
pnpm build         # production build → dist/public
pnpm preview       # preview the production build locally
pnpm check         # tsc --noEmit
pnpm format        # prettier --write .
```

`.claude/launch.json` is wired to start `pnpm dev` for the Claude Code preview tools.

---

## Project structure

```
client/
  index.html                  ← Google Fonts + SEO meta
  public/
    placeholders/             ← Branded SVG placeholders (replace with real photos)
  src/
    App.tsx                   ← Routes (wouter Switch)
    main.tsx                  ← React entry
    index.css                 ← OKLCH design tokens + global styles
    lib/
      data.ts                 ← ALL product data, SKUs, copy, savings/sizing logic
      images.ts               ← Image URL registry (currently → /placeholders/*.svg)
      utils.ts                ← cn() helper
    components/
      Navigation.tsx          ← Sticky dark nav
      Footer.tsx              ← Footer with link grid + legal bar
      ErrorBoundary.tsx
      ManusDialog.tsx         ← (legacy name, harmless modal helper)
      ui/                     ← shadcn/ui primitives
    contexts/
      ThemeContext.tsx
    hooks/
      useScrollReveal.ts      ← IntersectionObserver entrance animations
      useMobile.tsx, useComposition.ts, usePersistFn.ts
    pages/
      Home.tsx                ← / (10-section homepage)
      Products.tsx            ← /product
      ProductDetail.tsx       ← /product/:slug
      WhereToApply.tsx        ← /where-to-apply
      SizingGuide.tsx         ← /install/sizing-guide
      Science.tsx             ← /science
      Calculator.tsx          ← /savings
      Install.tsx             ← /install (5-step peel-and-stick + cold-weather + FAQ)
      About.tsx               ← /about (Corona, CA heritage + timeline)
      WhereToBuy.tsx          ← /where-to-buy
      Contact.tsx             ← /contact
      Guarantee.tsx           ← /guarantee (5-year written guarantee + claim flow + formal terms)
      NotFound.tsx, Pro.tsx, ByApplication.tsx   ← legacy/redirect stubs
vercel.json                   ← SPA rewrites + cache headers
```

---

## Routes

| Route | Page |
|---|---|
| `/` | Home |
| `/product` | Products overview (5 sizes) |
| `/product/:slug` | ProductDetail — slugs: `universal`, `narrow`, `standard`, `wide`, `multi-pack` |
| `/where-to-apply` | WhereToApply |
| `/science` | Science |
| `/savings` | Calculator |
| `/install` | Install |
| `/install/sizing-guide` | SizingGuide |
| `/about` | About |
| `/where-to-buy` | WhereToBuy |
| `/contact` | Contact |
| `/guarantee` | Guarantee |
| `/products`, `/calculator`, `/by-application`, `/pro` | → redirects to v2 routes |

---

## Brand design system

### Color palette (OKLCH in CSS, hex for reference)

| Token | Hex | Usage |
|---|---|---|
| `--ds-midnight` | `#0E1929` | Primary background |
| `--ds-navy` | `#1A2E44` | Secondary background, cards |
| `--ds-orange` | `#F26419` | Primary CTA, accent, highlights |
| `--ds-cream` | `#F5F0E8` | Light section backgrounds |
| `--ds-steel` | `#A8B0BA` | Body text on dark backgrounds |

### Typography

- **Display / Headlines**: `Archivo Black` (Google Fonts)
- **Body / UI**: `Inter` (Google Fonts)
- Headline letter-spacing: `-0.02em` to `-0.03em`
- Body line-height: `1.6`–`1.7`

### Design philosophy

**Cinematic Industrial Premium** — deep midnight backgrounds, Performance Orange accents, Archivo Black display type, generous whitespace, asymmetric layouts, no rounded corners on structural elements, no centered purple gradients.

---

## Key conventions

1. **Foam, not aluminum.** DraftShield is a closed-cell PU foam weatherstrip with acrylic adhesive. Never describe it as "aluminum extrusion" — that's a *different* TrimMaster product line. Columbia Aluminum is the parent company name only.
2. **Single product, five sizes.** Universal, Narrow, Standard, Wide, Multi-Pack. Don't introduce other SKUs without updating `data.ts`.
3. **Made in Corona, CA — since 1947.** Never Glendale. The About timeline and Contact address both use Corona.
4. **Home Depot only.** Every buy CTA goes to `HOME_DEPOT_URL` from `data.ts`. No direct e-commerce.
5. **Five-year written guarantee.** Every page references it. Terms live at `/guarantee`.
6. **No /pro page.** Removed in v2; redirects to `/about`. Trade/contractor inquiries route through `/contact` (subject: Trade & Contractor).
7. **Tailwind 4 OKLCH.** `@theme inline` blocks in `index.css` must use OKLCH, not HSL.
8. **Scroll reveal.** Use `useScrollReveal` from `@/hooks/useScrollReveal`. Add `reveal` class to elements, `stagger` to containers, then the IntersectionObserver flips them to `.visible`.
9. **No `client/public/` images.** Use `/placeholders/*.svg` for now; replace with a real CDN URL or local `public/` asset when product photography lands. Local raster files (jpg/png) in `public/` will balloon deploys.
10. **No server, no API.** This is a pure static SPA. Form submissions on `/contact` are client-side only (no backend).

---

## Image assets

All image URLs live in `client/src/lib/images.ts`. They currently point at local SVG placeholders in `client/public/placeholders/`:

```ts
IMG.hero          // Cinematic frost window
IMG.problem       // Failed foam tape closeup
IMG.product       // Product roll shot
IMG.science       // Construction layers
IMG.heritage      // Corona factory
IMG.logoWhite     // TrimMaster logo (light)
IMG.logoDark      // TrimMaster logo (dark)
IMG.logoEndorsed  // "A product of Columbia Aluminum"
```

When swapping in real photography, update `IMG` in one place — every component reads from it.

---

## Data layer (`client/src/lib/data.ts`)

| Export | Purpose |
|---|---|
| `SKUS: Sku[]` | 5 product SKUs with specs, copy, whereFits, HD link |
| `SKU_MAP` | `{ [slug]: Sku }` lookup |
| `APPLICATIONS` | 5 application areas (windows, doors, AC, garage, attic) |
| `CONSTRUCTION_LAYERS` | 5 foam construction layers |
| `SHARED_SPECS` | Shared spec table rows |
| `TRUST_MARKS` | Made in USA / Since 1947 / 5-Year Guarantee |
| `TESTIMONIALS` | 3 customer quotes |
| `SCIENCE_FACTS` | 4 stats |
| `FAQ_CATEGORIES` | 5 FAQ categories |
| `HOME_DEPOT_URL` | Base HD UTM link |
| `CLIMATE_ZONES` | ZIP-prefix → IECC zone mapping |
| `calculateSavings(sqFt, age, zone)` | `{ annualSavings, fiveYear, taxCredit }` |
| `getZoneFromZip(zip)` | `{ zone, label, recommended }` |
| `recommendSkuFromSizingGuide(...)` | Returns a SKU slug |

---

## Support email map (per copy package)

| Purpose | Email |
|---|---|
| General support | support@draftshield.com |
| Guarantee claims | guarantee@draftshield.com |
| Technical questions | tech@draftshield.com |
| Trade / pro inquiries | trade@draftshield.com |

---

## Deploy notes

- `vercel.json` rewrites every path to `/index.html` so wouter handles SPA routing.
- Build output: `dist/public/`. Vercel project's "Output Directory" must match.
- Build command: `pnpm build`. Install command: `pnpm install --frozen-lockfile`.
- No env vars are required for runtime. Add Vercel env vars only when you wire real analytics, contact form backend, etc.

---

## Suggested next features

- Real product photography to replace `/placeholders/*.svg`
- Home Depot per-SKU deep links in `SKUS[].hdLink`
- Wire `/contact` form to a real backend (Formspree, Resend, or Vercel Edge Function)
- Install tutorial video embeds on `/install`
- Privacy Policy + Terms of Use pages (footer currently routes both to `/contact` as a placeholder)
