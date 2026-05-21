@AGENTS.md

# Funky Clicks — Project Guide

## What this is
A marketing website for Funky Clicks (a digital marketing / web design agency) built with Next.js 15 App Router + Payload CMS v3 as the headless CMS, deployed on AWS Amplify Gen 1 with Neon serverless PostgreSQL.

---

## Tech stack

| Layer | Choice |
|---|---|
| Framework | Next.js ~15.4.11 (App Router, TypeScript) |
| CMS | Payload v3.84.1 (`@payloadcms/next`, `@payloadcms/db-postgres`) |
| Database | Neon serverless Postgres (`sslmode=require&channel_binding=require`) |
| Styling | Tailwind CSS v4 (`@import "tailwindcss"`) + custom CSS vars |
| Font | Nunito (Google Fonts, loaded in frontend layout) |
| Hosting | AWS Amplify Gen 1 — Lambda SSR, app ID `dew71fhoiulih` |
| Icons | lucide-react |

---

## Route groups — critical layout separation

```
src/app/
  layout.tsx                        ← Root: pass-through ONLY, no CSS, no html/body
  (frontend)/
    layout.tsx                      ← Imports globals.css (Tailwind), Nunito font, Navbar, Footer
    [[...slug]]/page.tsx            ← Catch-all page renderer
    [[...slug]]/PagePreview.tsx     ← Client component with useLivePreview hook
  (payload)/
    admin/[[...segments]]/layout.tsx ← Imports @payloadcms/next/css THEN custom.css
    admin/custom.css                ← Brand overrides: purple palette, Nunito, pink buttons
    admin/importMap.js              ← Generated at build time, do NOT edit manually
  api/preview/route.ts              ← Enables Next.js draft mode, redirects to slug
```

**Never move `globals.css` to the root layout** — Tailwind's `@import "tailwindcss"` resets all browser styles and destroys the Payload admin CSS.

---

## Payload CMS

### Import map
The import map (`src/app/(payload)/admin/importMap.js`) **must be generated before `next build`**. The `payload generate:importmap` CLI fails on Node 22 with `ERR_REQUIRE_ASYNC_MODULE`. Use the custom script instead:

```bash
node --experimental-strip-types scripts/generate-importmap.mts
```

This runs automatically via `npm run build` (see `package.json`).

### Admin customisation
- **Theme**: locked to dark (`theme: 'dark'` in `payload.config.ts`)
- **Logo/Icon**: custom components at `src/components/payload/Logo.tsx` and `Icon.tsx`
- **CSS**: `src/app/(payload)/admin/custom.css` overrides `--color-base-*` with the purple brand palette and loads Nunito
- **Primary buttons**: pink `#f813a1` via CSS (unlayered styles beat `@layer payload-default`)

### Block groups
All 10 blocks are grouped in the admin block picker:

| Group | Blocks |
|---|---|
| Layout | Hero, Page Header |
| Content | Why Section, How It Works |
| Services | Services Overview, Service Detail, Training Courses |
| Conversion | CTA Strip, Pricing Grid, Contact Section |

### Live preview
- `Pages` collection has `admin.livePreview.url` pointing to `NEXT_PUBLIC_SERVER_URL`
- `/api/preview` enables Next.js draft mode and redirects
- `PagePreview.tsx` always mounts `useLivePreview` (not conditional on draft mode — Payload loads the iframe without enabling draft mode first)

---

## AWS Amplify deployment

### Env vars at runtime
Amplify Gen 1 Lambda does **not** inject env vars at runtime. The `amplify.yml` build step bakes them into `.next/env.json`, and `payload.config.ts` reads that file via `loadAmplifyEnv()` on cold start.

**Never commit `.env.local`** — `.gitignore` covers `.env*` (excluding `.env*.example`).

Set these in the Amplify console (Environment variables):
- `DATABASE_URI` — Neon connection string
- `PAYLOAD_SECRET` — random secret for Payload
- `NEXT_PUBLIC_SERVER_URL` — full public URL e.g. `https://main.dew71fhoiulih.amplifyapp.com`

### Checking build logs
```bash
aws amplify list-jobs --app-id dew71fhoiulih --branch-name main --max-results 5
aws amplify get-job --app-id dew71fhoiulih --branch-name main --job-id <N>
# copy logUrl from the BUILD step, then: curl -s "<url>" | grep -i error
```

### amplify.yml build order
1. `npm run build` → generates import map, then `next build`
2. `node --experimental-strip-types scripts/push-schema.mts` → Payload schema push to Neon
3. `node --experimental-strip-types scripts/seed.mts` → idempotent content seed
4. Write `.next/env.json` with runtime env vars

---

## Content model

### Pages collection
- **slug**: `home` maps to `/`, all others map to `/<slug>`
- **layout**: blocks field — the 10 blocks above compose each page
- Seeded pages: `home`, `services`, `pricing`, `training`, `contact`

### Other collections
- **Media**: file uploads, 5 MB limit
- **Users**: admin users (email/password auth)

### Globals
- **Navigation**: site nav links

---

## Brand colours

```css
--color-purple:       #68389a
--color-purple-dark:  #4a2570
--color-purple-light: #8a55b8
--color-pink:         #f813a1
--color-pink-light:   #ff72c9
--color-lavender:     #af6ff1
--color-off-white:    #fdf8ff
--color-dark:         #1a0a2e
--color-fc-text:      #2d1a4a
--color-fc-muted:     #6b5380
```

---

## Local dev

```bash
cp .env.local.example .env.local   # fill in DATABASE_URI and PAYLOAD_SECRET
npm install
npm run dev                        # http://localhost:3000
# Admin: http://localhost:3000/admin
```

Set `NEXT_PUBLIC_SERVER_URL=http://localhost:3000` in `.env.local` for live preview to work.
