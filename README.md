# Triad Tech Solutions — React Static Site

Modern React (Next.js) rebuild of the Triad Tech Solutions Drupal website.

## Stack

- Next.js 15 (static export)
- React 19
- Bootstrap 5.2 + ported Drupal theme CSS
- Content extracted from `backup.sql` → `content/site-data.json`
- Images from Drupal `files/` → `public/images/`

## Development

```bash
cd tts-revamp
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

Static output is written to `out/` for GitHub Pages deployment.

## Pages

| URL | Description |
|-----|-------------|
| `/` | Home |
| `/services-grid` | All services |
| `/web-design`, `/web-development`, etc. | Service detail pages |
| `/get-a-quote` | Contact page (form UI only) |
| `/web-package`, `/seo-packages` | Package landing pages |
| `/about-us`, `/blog`, `/leadership` | Supporting pages |

## Contact form

The contact form displays a success message on submit but does not send data to any backend.

## Deploy (GitHub Pages)

1. Enable GitHub Pages → Source: GitHub Actions
2. Push to `main` — workflow deploys `out/` automatically
3. Set custom domain `triadtechsolutions.in` in repo Settings → Pages
