# Design — Legacy Beacon

A locked design system for the Legacy Beacon website. New public pages should
extend this system rather than introduce a separate visual language.

## Genre

Modern-classic editorial: calm, trustworthy, family-focused, and financially
professional without appearing institutional.

## Macrostructure family

- Marketing pages: asymmetric editorial sections with clear typographic anchors.
- Utility pages: Long Document with a concise hero and a functional content workspace.
- Content pages: reading-led layouts with restrained marginal information.

## Theme

Warm paper surfaces, deep navy structure, quiet blue-grey rules, and gold used
only for emphasis and action. Canonical values live in `tokens.css`.

## Typography

- Display: Poppins, weight 700, roman.
- Body: Poppins, weights 400–600.
- Outlier: Playfair Display, reserved for occasional editorial emphasis.
- Display tracking: -0.04em.
- Type scale anchor: `--text-2xl`.

## Spacing

Use the named 4-point scale in `tokens.css`. Public page layouts must use the
shared container and preserve generous but controlled section spacing.

## Motion

- Easings: `--ease-out`, `--ease-in`, and `--ease-in-out`.
- Reveal pattern: none; content is present immediately.
- Reduced motion: all spatial transitions are removed.

## Microinteractions stance

- Quiet hover and active feedback; no celebratory UI.
- Focus rings appear immediately with at least 3:1 contrast.
- Disclosure controls use one restrained rotation.

## CTA voice

- Primary CTA: warm ivory or gold fill against navy, compact radius, direct copy.
- Secondary CTA: underlined or hairline link with clear directional language.

## Per-page allowances

- Marketing pages may use owned photography.
- Utility and content pages use typography and rules rather than decorative imagery.

## What pages must share

Logo, navy/gold palette, Poppins typography, button voice, field styling,
focus treatment, and the compact page-heading rhythm.

## What pages may differ on

Content composition, supporting rail, and the density required by the page task.

## Exports

The canonical CSS export is `tokens.css`. Tailwind v4, DTCG, and shadcn mappings
should mirror those token names when those formats are introduced.
