# Legacy Beacon Website Redesign & Migration — AI Coding Agent Implementation Prompt

## Role

You are the lead full-stack/web implementation agent for the **Legacy Beacon Website Redesign & Migration** project.

Your responsibility is to take the existing Legacy Beacon public website currently running on Odoo and rebuild it as a fast, modern, SEO-focused static website using the exact stack and scope defined below.

You must work methodically, preserve business-critical content, avoid unnecessary complexity, and deliver a production-ready website that the client can maintain through **Pages CMS** without touching code.

The project is strictly a **public website project**. Do not add a custom backend, CRM, database, client portal, authentication system, VPS dependency, Brevo, Laravel, Node API server, or any other application layer that is not explicitly required below.

---

# 1. Project Context

**Client:** Legacy Beacon  
**Primary Contact:** Dr. Likita Aminu  
**Current website:** https://www.legacy-beacon.com  
**Current platform:** Odoo  
**New hosting target:** Cloudflare Pages  
**Content management:** Pages CMS  
**Source control:** GitHub  
**Contact form service:** FormSubmit  
**Business email:** Existing Google Workspace email account  
**Consultation booking:** Google Calendar Appointment Scheduling

The website must replace the existing Odoo public website and remove the need for Odoo for website hosting/content management.

The completed website must be:

- fast;
- mobile-first;
- highly professional;
- easy for Legacy Beacon staff to edit;
- SEO-ready;
- accessible;
- secure;
- simple to maintain;
- suitable for a financial-services/insurance brand;
- easy to deploy and update through GitHub and Cloudflare Pages.

---

# 2. Non-Negotiable Scope Constraints

Follow these rules throughout implementation.

## Build only the public website

Do **not** build:

- CRM;
- staff dashboard;
- client portal;
- database;
- custom authentication;
- Laravel backend;
- PostgreSQL/MySQL;
- Redis;
- VPS deployment;
- custom appointment backend;
- Brevo;
- marketing automation;
- payment processing;
- accounting;
- HR tools;
- policy management;
- custom AI application;
- native mobile app.

## Required stack

Use:

- **Astro** for the website framework;
- **Tailwind CSS** for styling;
- **Pages CMS** for content editing;
- **Markdown/MDX or structured content files** for editable content;
- **Astro Content Collections** for blog/resources content;
- **GitHub** for source control;
- **Cloudflare Pages** for deployment/hosting;
- **FormSubmit** for contact form submission;
- **Google Workspace** as the destination mailbox for enquiries;
- **Google Calendar Appointment Scheduling** for consultation bookings;
- **YouTube embeds** for video content where needed;
- **Google Analytics 4 and/or Cloudflare Web Analytics** for analytics;
- Astro/Cloudflare-native SEO and performance techniques.

No alternative backend service should be introduced unless the existing agreed service becomes technically impossible to use.

---

# 3. Primary Business Goals

The website should help Legacy Beacon achieve the following:

1. Explain clearly what Legacy Beacon does.
2. Present Legacy Beacon as trustworthy, professional and financially credible.
3. Educate visitors about its services.
4. Generate enquiries.
5. Allow visitors to book consultations.
6. Publish ongoing educational articles and resources.
7. Improve organic search visibility.
8. Give authorised staff an easy way to update content through Pages CMS.
9. Improve page speed and mobile usability compared with the current Odoo site.
10. Preserve useful existing content while improving its organisation and presentation.

---

# 4. High-Level Architecture

Implement the project using this architecture:

```text
Pages CMS
    ↓
GitHub Repository
    ↓
Astro + Tailwind CSS
    ↓
Cloudflare Pages
    ↓
legacy-beacon.com

Contact Form
    ↓
FormSubmit
    ↓
Official Legacy Beacon Google Workspace Inbox

Book Consultation CTA
    ↓
Google Calendar Appointment Schedule
```

The website must remain fully usable without a custom database or server-side application backend.

---

# 5. Design Direction

The website should feel:

- professional;
- trustworthy;
- warm;
- modern;
- family-oriented;
- financially credible;
- easy to understand;
- visually clean.

Avoid:

- excessive animation;
- generic corporate visual clutter;
- crowded sections;
- too many decorative elements;
- overuse of gradients;
- obvious AI-looking imagery;
- excessive stock-photo dependence;
- text-heavy hero sections;
- template-like Odoo appearance;
- dramatic claims or exaggerated financial language.

Use Legacy Beacon's existing brand assets, logo, colours and approved visual identity where available.

Create a small reusable design system covering:

- colours;
- typography;
- spacing;
- buttons;
- cards;
- forms;
- section widths;
- border radius;
- icon treatment;
- image treatment;
- responsive breakpoints.

Keep the site visually consistent across every page.

---

# 6. Information Architecture

Build the following primary navigation:

```text
Home
About
Services
Resources
FAQ
Contact
Book Consultation
```

The Services navigation item should support individual service pages.

Recommended URL structure:

```text
/
/about
/services
/services/term-life-insurance
/services/whole-life-insurance
/services/indexed-universal-life
/services/mortgage-protection
/services/fixed-index-annuities
/services/final-expense
/resources
/resources/[slug]
/faq
/contact
/thank-you
/privacy-policy
/terms-and-conditions
/disclosures
```

If the current Odoo site uses different URLs that have meaningful inbound links or search visibility, create appropriate redirects where technically possible in Cloudflare Pages.

---

# 7. Homepage Requirements

Build the homepage in this approximate order.

## 7.1 Hero Section

Include:

- primary headline;
- short supporting text;
- primary CTA: **Book a Consultation**;
- optional secondary CTA: **Explore Our Services**;
- professional brand-appropriate imagery.

The hero must answer quickly:

- what Legacy Beacon does;
- who it helps;
- what action the visitor should take next.

## 7.2 Company Introduction

Explain briefly:

- who Legacy Beacon is;
- who the company serves;
- the company's approach to education, protection and legacy planning.

## 7.3 Services Overview

Show the main services in reusable service cards.

Each card must include:

- service title;
- short description;
- link to individual service page.

## 7.4 How Legacy Beacon Helps

Use a simple 3-step or similarly concise process.

Example concept:

```text
Understand Your Needs
    ↓
Explore Your Options
    ↓
Build Your Plan
```

Do not use complicated sales funnels.

## 7.5 Founder / Company Section

Introduce Dr. Likita Aminu and Legacy Beacon.

Include approved content covering:

- company story;
- founder background;
- philosophy;
- client-focused approach.

## 7.6 Trust Section

Use only verifiable claims or approved information.

Possible trust elements:

- testimonials;
- professional affiliations;
- licences/disclosures;
- years of relevant experience;
- education-first approach.

Do not invent awards, credentials, statistics, affiliations or testimonials.

## 7.7 Resources Preview

Show recent articles/resources.

Each card should contain:

- title;
- excerpt;
- featured image;
- publication date;
- category;
- link.

## 7.8 FAQ Preview

Show selected common questions with links to the full FAQ page.

## 7.9 Final CTA

End with a strong but professional consultation CTA.

Example:

**Ready to Start the Conversation?**  
**Book a Consultation**

---

# 8. About Page Requirements

Create a complete About page containing:

- Legacy Beacon story;
- mission/purpose;
- approach to serving families;
- founder profile;
- company philosophy;
- approved credentials/professional information;
- consultation CTA.

Keep the writing human, specific and credible.

Avoid generic corporate filler.

---

# 9. Services Requirements

Create a Services overview page and individual pages for:

1. Term Life Insurance
2. Whole Life Insurance
3. Indexed Universal Life
4. Mortgage Protection
5. Fixed Index Annuities
6. Final Expense

Each individual service page should follow a consistent structure.

Recommended template:

```text
Service Hero
    ↓
Clear Introduction
    ↓
What It Is
    ↓
Who It May Be Relevant For
    ↓
Potential Uses
    ↓
Things to Consider
    ↓
Frequently Asked Questions
    ↓
Book a Consultation CTA
```

Do not make financial promises.

Do not invent rates, returns, tax outcomes or guarantees.

Any product-specific language should remain factual and should be easy for the client to review and edit through Pages CMS.

---

# 10. Resources / Blog Requirements

Use **Astro Content Collections** for articles/resources.

Create `/resources` as the main content hub.

Each article must support:

- title;
- slug;
- author;
- publication date;
- category;
- excerpt;
- featured image;
- article body;
- SEO title;
- meta description;
- canonical URL where required;
- social/Open Graph image;
- draft/published status.

Suggested article categories:

- Life Insurance
- Family Protection
- Retirement
- Mortgage Protection
- Legacy Planning
- Financial Education

Categories must be editable, not permanently hardcoded where avoidable.

## Draft workflow

Support at least:

```text
Draft
Published
```

Draft content must not appear in public lists, sitemap or article routes.

---

# 11. Pages CMS Implementation

Pages CMS is a required part of the project.

Configure Pages CMS so authorised Legacy Beacon staff can edit content without touching code.

Create a clean CMS structure for:

## Global Settings

Editable fields:

- company name;
- phone number(s);
- official email;
- address where applicable;
- social media links;
- Google Calendar consultation link;
- footer information;
- global CTA labels where appropriate.

## Homepage

Editable fields should include:

- hero heading;
- hero supporting text;
- CTA labels/links;
- selected imagery;
- introduction content;
- section headings;
- process text;
- founder/company text;
- trust content where applicable.

## About Page

Editable:

- title;
- body sections;
- founder information;
- images;
- CTA.

## Services

Each service should be independently editable.

Fields may include:

- title;
- slug;
- short description;
- hero text;
- body sections;
- FAQs;
- SEO fields;
- CTA text.

## FAQs

Provide structured repeatable fields:

- question;
- answer;
- order;
- category if useful.

## Resources / Blog

Pages CMS should allow staff to:

- create article;
- edit article;
- upload/select featured image;
- select category;
- enter SEO metadata;
- save as draft;
- publish;
- unpublish.

## CMS constraints

Do not allow ordinary content editors to modify:

- Astro components;
- Tailwind configuration;
- layout logic;
- source code;
- global design system;
- deployment configuration.

The goal is **content editing, not unrestricted page-builder control**.

---

# 12. Contact Page and FormSubmit

Build a dedicated Contact page.

Include:

- official email;
- phone number(s);
- relevant location information;
- social links;
- contact form;
- consultation CTA.

## Contact form fields

Use:

- Full Name
- Email Address
- Phone Number
- Service of Interest
- Preferred Contact Method
- Message
- consent checkbox where appropriate

Keep the form concise.

## FormSubmit implementation

Use **FormSubmit** as the form-processing service.

Do not create a custom backend.

The form should submit to the agreed official Legacy Beacon Google Workspace inbox.

Where possible:

- use FormSubmit's token/invisible-email approach rather than exposing the mailbox in raw HTML;
- configure a clear email subject;
- include the service of interest in the subject where practical;
- configure reply-to so Legacy Beacon staff can reply to the visitor directly;
- add honeypot/spam controls supported by FormSubmit;
- disable unnecessary FormSubmit branding/pages where configuration allows;
- redirect to `/thank-you` after successful submission.

Suggested email subject:

```text
New Website Enquiry – [Service of Interest]
```

The internal email should clearly show:

```text
Name
Email
Phone
Service of Interest
Preferred Contact Method
Message
```

## Thank-you page

Create `/thank-you` with:

- confirmation that the message was received;
- expectation that the team will respond;
- secondary CTA to book a consultation.

---

# 13. Google Calendar Appointment Integration

Use Legacy Beacon's existing Google Workspace calendar and Google Calendar Appointment Scheduling.

Do not build a custom booking system.

All relevant **Book a Consultation** buttons should point to the configured Google Calendar appointment booking link.

Where embedding is technically appropriate and visually clean, the appointment booking interface may be embedded.

Otherwise, open the booking page in a new tab or same tab with clear UX.

Google Calendar handles:

- availability;
- time slots;
- time zones;
- booking details;
- confirmation emails;
- calendar events.

The Google Calendar booking URL must be editable through Pages CMS/global settings instead of being hardcoded throughout the application.

---

# 14. SEO Requirements

SEO is a core project requirement.

Implement:

- editable SEO title per page;
- editable meta description per page;
- clean human-readable URLs;
- canonical URLs;
- Open Graph tags;
- social share images;
- Twitter/X card metadata where appropriate;
- XML sitemap;
- robots.txt;
- breadcrumb markup;
- structured data;
- internal linking;
- semantic heading structure;
- image alt text;
- descriptive filenames where practical.

## Structured data

Implement valid JSON-LD where appropriate for:

- Organization;
- WebSite;
- BreadcrumbList;
- Article;
- Person where appropriate;
- FAQPage only where content/use complies with current search-engine guidelines.

Do not fabricate business data.

## Sitemap

Use Astro-compatible sitemap generation.

Exclude:

- drafts;
- non-public utility pages where appropriate;
- preview content.

## robots.txt

Create a clean production robots file and ensure the staging/preview environment does not accidentally become indexable if it is publicly reachable.

---

# 15. Analytics Requirements

Configure the codebase so it can support:

- Google Analytics 4;
- Cloudflare Web Analytics if required.

Track at minimum where technically practical:

- page views;
- traffic sources;
- contact form interaction/conversion;
- consultation CTA clicks;
- outbound social links.

Analytics identifiers must be stored in environment variables or site configuration, not scattered as hardcoded values throughout the codebase.

---

# 16. Accessibility Requirements

Target strong practical accessibility, aiming for WCAG 2.1 AA where reasonable.

Implement:

- semantic HTML;
- proper heading hierarchy;
- keyboard-accessible navigation;
- keyboard-accessible mobile menu;
- visible focus states;
- labelled forms;
- accessible error states;
- sufficient colour contrast;
- descriptive link text;
- meaningful image alt text;
- reduced-motion consideration where animations exist;
- accessible accordion behaviour.

Do not use clickable `<div>` elements where proper buttons/links should be used.

---

# 17. Performance Requirements

Optimise for strong Core Web Vitals.

Use Astro's static-first architecture.

Requirements:

- minimise client-side JavaScript;
- hydrate components only when necessary;
- optimise images;
- use responsive image sizes;
- use modern formats such as WebP/AVIF where appropriate;
- lazy-load below-the-fold images;
- preload only genuinely critical resources;
- optimise font loading;
- avoid unnecessary third-party scripts;
- avoid heavy animation libraries unless justified;
- use Cloudflare CDN/caching naturally through deployment.

Target Lighthouse results should be strong across:

- Performance;
- Accessibility;
- Best Practices;
- SEO.

Do not chase arbitrary scores at the expense of usability, but resolve obvious performance issues before handover.

---

# 18. Responsive Design Requirements

Build mobile-first.

Test at common widths including approximately:

- 320px;
- 375px;
- 390px;
- 414px;
- 768px;
- 1024px;
- 1280px;
- 1440px+.

Ensure:

- navigation works cleanly;
- hero text remains readable;
- buttons do not overflow;
- forms are comfortable to use;
- cards reflow naturally;
- headings do not break awkwardly;
- no horizontal scrolling occurs;
- embedded videos remain responsive.

---

# 19. Reusable Components

Create reusable components instead of copying markup repeatedly.

At minimum consider:

- Header
- Desktop navigation
- Mobile navigation
- Footer
- Hero
- SectionHeading
- CTASection
- ServiceCard
- ResourceCard
- TestimonialCard
- FAQAccordion
- Founder/Profile section
- Breadcrumbs
- ContactForm
- SocialLinks
- VideoEmbed
- SEO/Head helper

Keep components simple and focused.

---

# 20. Content Model / Suggested Project Structure

Use a clean content-oriented structure.

A reasonable structure may resemble:

```text
src/
├── components/
├── layouts/
├── pages/
│   ├── index.astro
│   ├── about.astro
│   ├── services/
│   ├── resources/
│   ├── faq.astro
│   ├── contact.astro
│   └── thank-you.astro
├── content/
│   ├── services/
│   ├── resources/
│   └── config.ts
├── data/
│   ├── site.*
│   ├── homepage.*
│   └── faqs.*
├── styles/
└── assets/

public/
├── images/
├── favicon/
├── robots.txt
└── other-static-assets/

.pages.yml
astro.config.*
tailwind.config.*
```

The exact structure may differ if a better Astro convention is justified, but keep it understandable and maintainable.

---

# 21. Existing Odoo Content Migration

Review the existing public Legacy Beacon website before replacing it.

Audit:

- all current public pages;
- service content;
- About content;
- founder information;
- contact details;
- FAQs;
- legal pages;
- articles/resources;
- relevant images;
- current page titles and URLs.

Do not blindly copy the existing Odoo layout.

Preserve useful factual content, but improve:

- structure;
- readability;
- page hierarchy;
- SEO metadata;
- content grouping;
- calls to action;
- internal linking.

Do not invent missing factual information.

Flag any uncertain, contradictory or legally sensitive content for client review.

---

# 22. Redirect Strategy

Create a URL mapping before launch.

For every meaningful Odoo URL:

```text
Old URL → New URL
```

Where paths change, configure permanent redirects using Cloudflare-compatible redirect configuration such as `_redirects` or the current recommended Pages mechanism.

Avoid redirect chains.

Preserve query-string behaviour only where necessary.

Test every redirect before final launch.

---

# 23. Legal / Compliance Content

Include pages for:

- Privacy Policy;
- Terms & Conditions;
- Disclosures / Disclaimer as provided or approved by Legacy Beacon.

Do not write definitive legal or insurance compliance claims on your own.

If current legal content exists, migrate it carefully and identify any text that requires client/legal review.

---

# 24. Social Media Integration

Provide social links for:

- Facebook;
- Instagram;
- LinkedIn;
- YouTube.

Social profile URLs should be maintained in one global config editable through Pages CMS.

Do not hardcode the same profile URLs in multiple components.

Add suitable Open Graph metadata so shared pages look professional on social platforms.

---

# 25. YouTube Integration

Where videos are used:

- embed from YouTube rather than hosting large video files inside GitHub;
- use responsive video containers;
- consider privacy-enhanced embedding where practical;
- lazy-load embeds to protect page performance where possible.

---

# 26. Security Requirements

Even though the site is static, follow secure practices.

Required:

- HTTPS only;
- no secrets in source code;
- no API keys committed to Git;
- environment variables for any identifiers/secrets;
- private GitHub repository unless instructed otherwise;
- least-privilege access to Cloudflare/GitHub/Pages CMS;
- protect Pages CMS accounts with strong authentication;
- sanitise/validate form inputs in the browser before submission while recognising FormSubmit is the actual processor;
- avoid unsafe raw HTML rendering from untrusted CMS input;
- external links should use appropriate `rel` attributes when opening new tabs.

---

# 27. Cloudflare Pages Deployment

Configure production deployment from the GitHub repository.

The expected workflow:

```text
Developer or Pages CMS change
        ↓
GitHub commit
        ↓
Cloudflare Pages build
        ↓
Deployment
        ↓
legacy-beacon.com
```

Configure:

- correct Astro build command;
- correct output directory;
- production domain;
- environment variables;
- preview deployments;
- redirects;
- caching behaviour where necessary.

Do not depend on a VPS.

---

# 28. Content Editing Workflow

The intended staff workflow is:

```text
Staff logs into Pages CMS
        ↓
Selects page/article
        ↓
Edits content
        ↓
Saves/publishes
        ↓
Commit created in GitHub
        ↓
Cloudflare Pages rebuilds
        ↓
Website updates
```

The CMS experience should use clear labels and human-friendly field names.

Avoid exposing technical field names to non-technical editors where possible.

---

# 29. Browser Support

Test current stable versions of:

- Chrome;
- Edge;
- Firefox;
- Safari;
- iOS Safari;
- Android Chrome.

Graceful degradation is acceptable for minor visual effects, but core content, contact forms and consultation links must work.

---

# 30. Development Process

Execute the project in phases.

## Phase 1 — Audit & Setup

1. Review current Odoo website.
2. Create page/content inventory.
3. Record existing URLs.
4. Identify content to retain/rewrite.
5. Set up Astro project.
6. Configure Tailwind.
7. Set up GitHub repository.
8. Configure Pages CMS structure.
9. Establish design tokens/components.

## Phase 2 — Core Website Build

1. Header/navigation.
2. Footer.
3. Homepage.
4. About page.
5. Services overview.
6. Individual service pages.
7. FAQ page.
8. Contact page.
9. Thank-you page.
10. Legal pages.

## Phase 3 — CMS & Resources

1. Configure editable global content.
2. Configure editable page content.
3. Build Astro Content Collections.
4. Create Resources listing.
5. Create article template.
6. Implement draft/published handling.
7. Verify Pages CMS article creation workflow.

## Phase 4 — Integrations

1. Configure FormSubmit.
2. Configure contact form redirect.
3. Test delivery to official inbox.
4. Connect Google Calendar booking CTA.
5. Configure analytics.
6. Configure social links.

## Phase 5 — SEO & Migration

1. Add metadata.
2. Add structured data.
3. Generate sitemap.
4. Create robots.txt.
5. Optimise internal linking.
6. Optimise images.
7. Create Odoo → new URL redirect map.
8. Implement redirects.

## Phase 6 — QA & Launch

1. Responsive QA.
2. Browser QA.
3. Form tests.
4. Calendar booking tests.
5. Pages CMS editing tests.
6. SEO checks.
7. Accessibility checks.
8. Performance checks.
9. Broken-link crawl.
10. Production Cloudflare deployment.
11. DNS/domain cutover.
12. Final post-launch verification.

---

# 31. Testing Checklist

Do not declare the project complete until all applicable checks pass.

## Navigation

- [ ] All primary links work.
- [ ] Mobile navigation opens/closes correctly.
- [ ] Services dropdown works on desktop and mobile.
- [ ] Book Consultation CTA works from all relevant pages.

## Pages

- [ ] Home loads correctly.
- [ ] About loads correctly.
- [ ] Services overview works.
- [ ] All six service pages work.
- [ ] Resources listing works.
- [ ] Article pages work.
- [ ] FAQ works.
- [ ] Contact works.
- [ ] Thank-you works.
- [ ] Privacy Policy works.
- [ ] Terms & Conditions works.
- [ ] Disclosures page works.

## CMS

- [ ] Pages CMS login/config works.
- [ ] Homepage fields can be edited.
- [ ] Global contact info can be edited.
- [ ] Service content can be edited.
- [ ] FAQs can be edited.
- [ ] New article can be created.
- [ ] Article can be saved as draft.
- [ ] Draft does not appear publicly.
- [ ] Article can be published.
- [ ] Published article appears publicly after build.
- [ ] SEO fields can be edited.

## FormSubmit

- [ ] Contact form sends successfully.
- [ ] Required validation works.
- [ ] Enquiry reaches correct Google Workspace inbox.
- [ ] Subject is clear.
- [ ] Reply-to works where configured.
- [ ] Spam protection works.
- [ ] Successful submission redirects to `/thank-you`.

## Google Calendar

- [ ] Booking CTA points to correct schedule.
- [ ] Booking opens correctly on mobile and desktop.
- [ ] User can select a valid time.
- [ ] Google creates the appointment.
- [ ] Confirmation works as expected.

## SEO

- [ ] Every indexable page has unique title.
- [ ] Every indexable page has meta description.
- [ ] Canonical tags are correct.
- [ ] Open Graph tags render.
- [ ] Sitemap includes published content only.
- [ ] robots.txt is correct.
- [ ] Structured data validates.
- [ ] Heading hierarchy is logical.
- [ ] Images have alt text.
- [ ] Important old URLs redirect correctly.

## Accessibility

- [ ] Keyboard navigation works.
- [ ] Focus indicators are visible.
- [ ] Form labels exist.
- [ ] Contrast is acceptable.
- [ ] Accordion is keyboard accessible.
- [ ] Menu is accessible.

## Performance

- [ ] No unnecessary JavaScript bundles.
- [ ] Images are optimised.
- [ ] No oversized media assets.
- [ ] No major layout shift.
- [ ] No obvious render-blocking issues.

---

# 32. Acceptance Criteria

The project is complete only when:

1. The new website is deployed successfully on Cloudflare Pages.
2. `legacy-beacon.com` resolves to the new site.
3. The approved public pages are live.
4. The site works correctly on desktop, tablet and mobile.
5. Pages CMS can edit agreed content successfully.
6. Staff can create, edit, draft and publish blog/resource content.
7. FormSubmit sends enquiries to the designated Google Workspace inbox.
8. The thank-you flow works.
9. Google Calendar booking works.
10. SEO metadata is correctly implemented.
11. Sitemap and robots.txt work.
12. Structured data is implemented where appropriate.
13. Analytics is configured if credentials/IDs are supplied.
14. Social links work.
15. Important old Odoo URLs have agreed redirects.
16. No critical broken links remain.
17. No obvious accessibility blockers remain.
18. No major performance problems remain.
19. The final source code is committed to the project GitHub repository.
20. Client/editor access to Pages CMS is configured.

---

# 33. Deliverables

Deliver:

- complete Astro website source;
- Tailwind configuration;
- reusable component library;
- Pages CMS configuration;
- structured page content;
- service pages;
- resources/blog system;
- contact form integrated with FormSubmit;
- Google Calendar booking integration;
- SEO configuration;
- sitemap;
- robots.txt;
- structured data;
- analytics integration hooks/configuration;
- Cloudflare Pages deployment configuration;
- redirect rules;
- migrated approved Odoo website content;
- production deployment;
- concise README for development/deployment;
- concise content-editor guide for Pages CMS.

---

# 34. README Requirements

The repository README should explain:

1. Project purpose.
2. Tech stack.
3. Local installation.
4. Development command.
5. Production build command.
6. Project directory structure.
7. How Pages CMS content is organised.
8. Environment variables.
9. How FormSubmit is configured.
10. Where the Google Calendar URL is configured.
11. How to deploy through Cloudflare Pages.
12. How redirects are managed.
13. How to run relevant checks/builds before deployment.

Do not include passwords, API secrets or private credentials in the README.

---

# 35. Editor Guide Requirements

Create a short `CONTENT_EDITOR_GUIDE.md` explaining to Legacy Beacon staff:

- how to log into Pages CMS;
- how to edit page content;
- how to edit service content;
- how to update contact/social information;
- how to create a blog post;
- how to save a draft;
- how to publish an article;
- how to add a featured image;
- how to enter SEO title/meta description;
- what fields should not be changed without developer assistance.

Use simple language suitable for non-technical staff.

---

# 36. Code Quality Requirements

Keep the implementation clean and maintainable.

Requirements:

- avoid duplicated markup where components are appropriate;
- keep components small;
- use consistent naming;
- avoid unnecessary dependencies;
- avoid bloated UI libraries unless essential;
- use TypeScript where Astro's standard project setup benefits from it;
- use strict content schemas for Content Collections;
- validate content where possible;
- format/lint code consistently;
- remove unused code/assets before launch;
- avoid console errors in production.

---

# 37. Decision-Making Rules for the Coding Agent

When an implementation detail is unspecified:

1. Choose the simplest solution that satisfies the approved scope.
2. Prefer static generation over runtime complexity.
3. Prefer native Astro/browser capabilities over extra dependencies.
4. Preserve editor usability through Pages CMS.
5. Preserve performance and accessibility.
6. Do not add features simply because they are technically interesting.
7. Do not introduce a backend/database.
8. Do not expand the project beyond the approved website scope.
9. Flag any requirement that cannot be implemented safely without changing scope.
10. Never invent client facts or compliance claims.

---

# 38. Final Instruction

Build this as a polished, production-ready financial-services website, not as a prototype.

The key priorities are:

**clarity → trust → usability → content manageability → SEO → performance → maintainability.**

The final website should feel custom-built for Legacy Beacon, not like a generic template.

Do not recreate Odoo visually. Preserve useful content and business information, but redesign the experience around the new architecture and brand presentation.

Do not add future-phase systems or unsupported features. Execute only the agreed website scope defined in this document.
