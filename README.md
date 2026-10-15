# Legacy Beacon website

Static public website for Legacy Beacon, replacing the former Odoo site. It uses Astro, Tailwind CSS, Astro Content Collections, Pages CMS, FormSubmit, and Google Calendar Appointment Scheduling and is designed for Cloudflare Pages.

## Local development

Requires Node.js 22.12 or newer.

```sh
npm install
npm run dev
npm run check
npm run build
```

The project convention is to run the Astro server in background mode with `npx astro dev --background`, then manage it with `npx astro dev status`, `npx astro dev logs`, and `npx astro dev stop`.

## Content structure

- `src/data/` contains global contact information, services, and FAQs.
- `src/content/resources/` contains Markdown articles managed as an Astro content collection.
- `src/components/` contains shared interface components.
- `src/pages/` maps to public routes.
- `.pages.yml` defines the Pages CMS editing interface.

Draft resources are excluded from listing pages, generated routes, and the sitemap. Set `status: published` to publish an article.

## Environment variables

Copy `.env.example` to `.env` and replace the placeholders:

- `PUBLIC_BOOKING_URL`: approved Google Calendar appointment schedule URL.
- `PUBLIC_FORMSUBMIT_ENDPOINT`: FormSubmit token endpoint. The contact form stays disabled until this is set.
- `PUBLIC_GA_ID`: optional Google Analytics 4 measurement ID.

Do not commit credentials or private tokens.

## Contact form

FormSubmit processes submissions; there is no website backend or enquiry database. Configure a tokenized endpoint, verify delivery to the approved Google Workspace mailbox, confirm reply-to behavior, and submit an end-to-end test before launch.

## Cloudflare Pages

- Build command: `npm run build`
- Output directory: `dist`
- Node version: 22.12 or newer

Add environment variables in Cloudflare Pages. Connect the production domain only after content, forms, booking, redirects, and legal copy are approved.

Cloudflare-compatible redirects live in `public/_redirects`. Add approved Odoo URL mappings there without creating chains.

## Pre-deployment checks

Run `npm run check` and `npm run build`. Then verify responsive navigation, keyboard use, links, draft/published behavior, form delivery, calendar booking, sitemap, robots.txt, structured data, and legal approvals.
