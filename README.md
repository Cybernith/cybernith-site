# 🚀 Personal Portfolio — Next.js 14 + Tailwind CSS

A modern, responsive, developer-focused portfolio built with **Next.js 14**, **TypeScript**, and **Tailwind CSS** to showcase projects, skills, and experience with high performance and robust SEO/AI-SEO.

## ✨ Features

- ⚡ **Next.js 14** App Router (RSC)
- 🎨 **Tailwind CSS** + glass / neon gradients
- 📱 Fully **responsive** (mobile-first)
- 🧭 **Scroll-spy** header (hydration-safe)
- 🧩 Reusable components: `Hero`, `Services` (auto horizontal scroll), `Projects`, `Stack`, `About`, `Contact`
- 🧠 **SEO & AI-SEO**: Open Graph, Twitter cards, JSON-LD (Person/ItemList/CreativeWork), `sitemap.xml`, `robots.txt`, **`llms.txt`**
- 🖼️ Dynamic **OpenGraph** image via `app/opengraph-image.tsx`
- 🔍 Accessibility touches (aria labels, roles, focus)
- 🧪 Ready for lint/test; production build hardened
- 🚢 **CI/CD** via GitHub Actions → **Dokku** (guide + workflow)

---


## 🛠 Installation & Setup

1) **Clone**

```bash
git clone https://github.com/Cybernith/cybernith-site.git
cd cybernith-site
```

2) **Install deps**

```bash
npm ci
# or: yarn install / pnpm i
```

3) **Env (optional but recommended)**

Create `.env.local`:

```env
NODE_ENV=development
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_TELEMETRY_DISABLED=1
```

4) **Dev server**

```bash
npm run dev
# open http://localhost:3000
```

---

## 🏗 Build & Run (Production)

```bash
npm run build
npm start
```

`start` uses `next start -p ${PORT:-8080}` (works great on Dokku/VPS).

---

## 🔧 Tech Stack

| Technology   | Usage           |
| ------------ | --------------- |
| Next.js 14   | Framework       |
| React (RSC)  | UI + App Router |
| TypeScript   | Type safety     |
| Tailwind CSS | Styling         |
| PostCSS      | CSS processing  |

---

## 🔎 SEO / AI-SEO

- **Open Graph**: `app/opengraph-image.tsx` generates a 1200×630 OG image for social/link previews.
- **Metadata**: `app/layout.tsx` sets `metadata`, canonical, OpenGraph/Twitter cards, authors, keywords.
- **JSON-LD**:
    - `layout.tsx`: `Person` schema
    - `Projects.tsx`: `ItemList` of `CreativeWork`
    - `Stack.tsx`: `ItemList` → nested lists of technologies
- **Sitemap**: `app/sitemap.ts` and `public/sitemap.xml` (either works; prefer dynamic `sitemap.ts`).
- **Robots**: `app/robots.ts` + `public/robots.txt`
- **llms.txt**: `app/llms.txt/route.ts` (policy for AI crawlers)
- **Favicon**: put an icon at `public/favicon.ico` to silence `GET /favicon.ico` 404.

---

## 🧭 Header (Scroll-Spy, Hydration-Safe)

- Fixed glass header with anchor links:
    - `#hero`, `#services`, `#about`, `#stack`, `#work`, `#contact`
- **No hydration mismatch**: active state set **after mount** using `IntersectionObserver`.
- Smooth in-page scrolling without SSR/CSR divergence.

> Tip: add `scroll-mt-20` or section padding so anchors don’t hide under the fixed header.

---

## 🧷 Services Slider (Mobile)

- Horizontal **overflow-x** slider with snap, **auto-scroll every 2s** (hidden scrollbar).
- The auto-scroll runs only on the client; DOM classes are static at SSR to prevent hydration warnings.

---

## 📨 Contact

- Buttons for **WhatsApp**, **Telegram**, **Instagram**, **Call**, **Email** (with `mailto:` subject/body).
- All links `rel="noopener noreferrer"` where needed.

---

## 🧹 Scripts

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start -p ${PORT:-8080}",
    "lint": "next lint",
    "test": "echo \"(optional)\""
  },
  "engines": { "node": ">=18.18 <23" }
}
```

Optional `next.config.ts`:

```ts
import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  reactStrictMode: true,
  // experimental: { reactCompiler: true }, // enable only if you need it
};
export default nextConfig;
```

---

## 🚢 Deployment

### Option A — Vercel (easiest)

1) Push repo to GitHub
2) Import at vercel.com → Deploy
3) Set `NEXT_PUBLIC_SITE_URL` to your domain (for absolute URLs in metadata).

### Option B — Dokku (VPS)

**One-time on server**

```bash
dokku apps:create cybernith-site
dokku proxy:ports-set cybernith-site http:80:8080
dokku config:set cybernith-site NODE_ENV=production NEXT_TELEMETRY_DISABLED=1 NEXT_PUBLIC_SITE_URL=https://your-domain.com
# SSL (optional):
# dokku letsencrypt:enable cybernith-site
```

**Procfile**

```
web: npm run start
```

**GitHub Actions CI/CD** (`.github/workflows/deploy.yml`)

```yaml
name: CI/CD – Deploy to Dokku
on:
  push:
    branches: [ "main" ]
  workflow_dispatch:

concurrency:
  group: deploy-prod
  cancel-in-progress: false

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    env:
      DOKKU_HOST: ${{ secrets.DOKKU_HOST }}
      DOKKU_APP:  ${{ secrets.DOKKU_APP }}
      DOKKU_USER: ${{ secrets.DOKKU_USER }}
      DOKKU_PORT: ${{ secrets.DOKKU_PORT }}
      NODE_VERSION: 20
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: ${{ env.NODE_VERSION }}
          cache: 'npm'
      - run: npm ci
      - run: npm run lint --if-present
      - run: npm run build
        env:
          NODE_ENV: production
          NEXT_TELEMETRY_DISABLED: 1
      - name: Add Dokku remote
        run: |
          git remote add dokku "ssh://${{ env.DOKKU_USER }}@${{ env.DOKKU_HOST }}:${{ env.DOKKU_PORT }}/${{ env.DOKKU_APP }}" || true
          git remote -v
      - name: Setup SSH Agent
        uses: webfactory/ssh-agent@v0.9.0
        with:
          ssh-private-key: ${{ secrets.SSH_PRIVATE_KEY }}
      - name: Known hosts
        run: ssh-keyscan -p "$DOKKU_PORT" "$DOKKU_HOST" >> ~/.ssh/known_hosts
      - name: Push to Dokku
        run: git push dokku HEAD:main -f
```

**GitHub Secrets needed**:

- `SSH_PRIVATE_KEY`
- `DOKKU_HOST`, `DOKKU_APP`, `DOKKU_USER`, `DOKKU_PORT`

---

## 📄 Content & Data

- **Projects**: `content/projects.json` → rendered in `Projects` with schema.org **CreativeWork** + external links.
- **Tech Stack**: `Stack` shows categories with inline SVG icons + schema.org **ItemList**.

---

## 🧰 Troubleshooting

- **Hydration mismatch**: avoid runtime-changing HTML in SSR.
- **/favicon.ico 404**: put `public/favicon.ico`.
- **Anchor offsets**: use `scroll-mt-20` for smooth section jumps.

---

## 📬 Contact

- **GitHub:** https://github.com/Cybernith
- **Telegram:** https://t.me/sorooshMorshedi
- **Instagram:** https://instagram.com/soroosh.morshedi
- **WhatsApp:** https://wa.me/989171035930
- **Email:** devolopersoroosh@gmail.com

---

## ⭐ Support

If you like this project, please star it ⭐  
Made with ❤️ by **Soroosh Morshedi (Cybernith)**