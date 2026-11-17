# Brightpress website (React + Vite), redesigned

Live: https://nishanshah1306-sys.github.io/nishant/

    npm install
    npm run dev
    npm run build

- Brand, contact details and navigation: `src/data/site.js`
- All 25 services (details, inclusions, tools, FAQs, process): `src/data/services.js`
- Pages: `src/pages` | Shared parts: `src/components` | Home sections: `src/components/home`
- Adding a service = adding one object to the `services` array. Its detail page is created automatically at `/services/<slug>`.
- On static hosting, redirect all routes to `index.html` (for example a `_redirects` file on Netlify: `/* /index.html 200`).

## Design
- The whole look lives in `src/styles/app.css`. Brand colours and fonts are the variables at the top (`--accent`, `--ink`, `--display` and so on).

## Projects
- Edit `src/data/projects.js`. These are dummy projects: replace names, results and `demo` links with real ones.
- Each project gets a case-study page at `/projects/<slug>` and a "Live demo" button that opens its `demo` URL.

## SEO and engagement (v4)
- **Every page is prerendered to real HTML** at build time (`scripts/prerender.mjs`), so Google, WhatsApp, LinkedIn and Facebook see full content instead of an empty page. Direct links to inner pages no longer 404 on GitHub Pages.
- **Per-page SEO tags**: unique title, description, canonical, Open Graph and Twitter cards via `<Seo />` (`src/seo/Seo.jsx`).
- **Structured data** (`src/seo/schema.js`): ProfessionalService, WebSite, BreadcrumbList, Service, FAQPage, Article and ItemList.
- **Generated on build**: `sitemap.xml`, `robots.txt`, `404.html`. Social share image: `public/og-image.png`.
- **Category pages have real URLs**: `/services/website-development`, `/services/digital-marketing`, `/services/maintenance-and-support` (old `?group=` links redirect).
- **Guides** (`src/data/guides.js`): add an object to publish a new article at `/guides/<slug>`.
- **Service-specific FAQs** (`serviceFaqs` in `src/data/services.js`) plus related projects and guides on each service page.

### Before you go live, edit `src/data/site.js`
- `phone`: the placeholder is hidden everywhere until you add a real number.
- `whatsapp`: add your number (digits with country code) to show WhatsApp buttons.
- `formEndpoint`: paste a Formspree endpoint so enquiries arrive without opening the visitor's email app.
- `url`: change it if you move to your own domain, then rebuild.
- `social`: links to your LinkedIn, Instagram and so on.
- In `src/data/projects.js`, replace the sample projects and add real `demo` links (placeholder example.com links are hidden).
