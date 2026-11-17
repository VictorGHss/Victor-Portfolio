# Vito.dev — Software Engineering Portfolio

Bilingual (`pt-br` / `en`) software engineering portfolio for **Victor Gabriel** (`Vito.dev`), built with **Astro**, **TypeScript**, **React** islands, and **Motion**.

## Tech Stack

- **Framework:** Astro 5 (Static Site Generation)
- **Interactive Islands:** React 19 + Motion + Lucide React
- **Styling:** Centralized CSS design tokens (`src/styles/tokens.css`, `src/styles/global.css`)
- **i18n & SEO:** Localized static routes (`/pt-br/`, `/en/`), canonical URLs, `hreflang`, Open Graph, `@astrojs/sitemap`, `robots.txt`

## Scripts

```bash
npm run dev      # Local dev server
npm run check    # Astro & TypeScript diagnostics
npm run lint     # ESLint across src/
npm run build    # Type-check + static build to dist/
npm test         # Verify built routes, SEO tags, and content rules
```

## Cloudflare Pages Deployment

- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Production domain:** `https://ctrls.dev.br`
