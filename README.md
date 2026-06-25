# Voithos AI

Front end for Voithos AI — an assistant that joins online meetings and produces
recordings, transcripts and summaries. The marketing site and the in-product screens
are built as a fast, statically rendered application: each marketing route ships as
static HTML with minimal JavaScript.

## Stack

- Next.js 16 (App Router) and React 19
- TypeScript
- Tailwind CSS v4

## Project structure

- `src/app/(marketing)/` — public pages: home, advantages, pricing, contacts, blog,
  privacy policy, log in, sign up
- `src/app/en/` — English landing page
- `src/app/app/` — in-product screens: meetings, contacts, AI training, settings,
  profile, support admin
- `src/components/` — shared UI: header, footer, buttons, form fields, icons

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## Notes

- Marketing routes are statically prerendered for a fast first paint.
- The deployment is kept out of search indexes through three layers: a `robots` meta
  tag, `robots.txt`, and an `X-Robots-Tag` response header.
- Icons are inline SVG (Material Icons glyph paths), so no icon font is shipped.
