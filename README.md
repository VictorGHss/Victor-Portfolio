# Vito.dev — Software Engineering Portfolio

Bilingual (`pt-br` / `en`) software engineering portfolio for **Victor Gabriel de Oliveira Hass** (`Vito.dev`), built with **Astro 5**, **TypeScript**, **React 19** islands, and **Motion**.

## Tech Stack

- **Framework:** Astro 5 (Static Site Generation)
- **Interactive Islands:** React 19 + Motion + Lucide React
- **Typography & Tokens:** `Syne`, `Plus Jakarta Sans`, `JetBrains Mono` (`src/styles/tokens.css`, `src/styles/global.css`)
- **i18n & SEO:** Localized static routes (`/pt-br/`, `/en/`), canonical URLs (`https://victorghss-portfolio.ctrls.dev.br`), `hreflang`, Open Graph (`public/og-image.png`), `@astrojs/sitemap`, `robots.txt`
- **Resumes:** `public/resume/victor-gabriel-cv-pt-br.pdf` and `public/resume/victor-gabriel-resume-en.pdf`

## Scripts

```bash
npm run dev      # Local dev server
npm run check    # Astro & TypeScript diagnostics
npm run lint     # ESLint across src/
npm run build    # Type-check + static build to dist/
npm test         # Verify built routes, resumes, SEO tags, and content rules
```

## Cloudflare Pages Deployment

- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Production URL:** `https://victorghss-portfolio.ctrls.dev.br`
