# Funky Clicks – Payload CMS + Neon Setup Guide

## 1. Neon Database Setup

1. Create a free account at [neon.tech](https://neon.tech)
2. Click **New Project** and give it a name (e.g. `funkyclicks`)
3. Once created, copy the **Connection String** from the dashboard
4. Open `.env.local` and replace the `DATABASE_URI` placeholder with your connection string:
   ```
   DATABASE_URI=postgresql://user:password@ep-xxx.neon.tech/neondb?sslmode=require
   ```
5. Also set a strong `PAYLOAD_SECRET` (any random string, 32+ characters):
   ```
   PAYLOAD_SECRET=some-long-random-string-here
   ```

## 2. First Run

```bash
npm run dev
```

- Visit `http://localhost:3000/admin`
- Payload will automatically migrate the database schema on first run
- Create your first admin user when prompted

## 3. Create Your Pages

In the Payload admin, go to **Pages** and create documents for:

| Title | Slug |
|-------|------|
| Home | `home` |
| Services | `services` |
| Pricing | `pricing` |
| Training | `training` |
| Contact | `contact` |

Add blocks to each page to build up the content. Refer to `funkyclicks prototype.html` for the original copy.

**Recommended block layouts:**

- **Home**: Hero → Why Section → Services Overview → How It Works → CTA Strip
- **Services**: Page Header → Service Detail (×4) → CTA Strip
- **Pricing**: Page Header → Pricing Grid (cards) → Pricing Grid (bundles) → Pricing Grid (consultancy)
- **Training**: Page Header → Training Courses → CTA Strip
- **Contact**: Page Header → Contact Section

## 4. Navigation Global

Go to **Globals → Navigation** and add links:

| Label | Slug | Is CTA? |
|-------|------|---------|
| Home | / | No |
| Services | /services | No |
| Pricing | /pricing | No |
| Training | /training | No |
| Book a Call | /contact | Yes |

> Note: The Navbar currently uses hardcoded links. You can wire it up to the Navigation global later if desired.

## 5. Lucide Icon Names

When adding icons to blocks (Why cards, Service Detail, etc.) use the PascalCase Lucide icon name, e.g.:
- `Target`, `Zap`, `Users`, `TrendingUp`, `BarChart2`, `Mail`, `Globe`
- Full list: [lucide.dev/icons](https://lucide.dev/icons)

## 6. Deploy to Vercel

1. Push to GitHub and connect the repo to Vercel
2. Add environment variables in the Vercel dashboard:
   - `DATABASE_URI` — your Neon connection string
   - `PAYLOAD_SECRET` — same secret as in `.env.local`
3. Deploy — Payload will auto-migrate the schema on first boot

**Tip:** Use the [Neon Vercel Integration](https://vercel.com/integrations/neon) to automatically manage the `DATABASE_URI` env var across preview and production environments.

## 7. Generating TypeScript Types

After making changes to your collections, regenerate the Payload types:

```bash
npx payload generate:types
```

This updates `src/payload-types.ts` with accurate TypeScript types for your collections.
