# CheckMate - AI Readiness Audit

A lightweight tool that audits any website URL against the signals AI crawlers actually use: structured data, document semantics, content format, entity clarity, and crawlability.

**Live demo:** https://checkmate-one-pi.vercel.app

---

## Why I built this

Most SEO tools are calibrated for Google's 2018 crawler. The relevant question today is different: can an AI system understand your page well enough to cite it in a generated answer? CheckMate audits against that standard.

---

## What it checks

| Signal | Why it matters |
|---|---|
| Structured data (Schema.org) | AI tools use JSON-LD as ground truth for entity classification |
| Heading hierarchy | LLMs parse heading structure like a table of contents during retrieval |
| FAQ / Q&A content | Matches how users phrase queries to AI assistants |
| Author and entity signals | Maps to E-E-A-T, which affects citation authority |
| Crawlability (meta, speed, sitemap) | Determines how deep a crawler will index the site |

---

## Project structure

```
checkmate/
├── index.html        # Markup only, no inline scripts or styles
├── css/
│   └── style.css     # All styles, organized by component
└── js/
    ├── data.js       # Issue pool and recommendation data
    ├── score.js      # Scoring logic and URL utilities
    ├── ui.js         # DOM rendering functions
    └── app.js        # Event wiring and audit orchestration
```

---

## Running locally

No build step needed.

```bash
git clone https://github.com/yourusername/checkmate
cd checkmate
open index.html
```

Or use a local server if your browser blocks file:// requests:

```bash
npx serve .
```

---

## Deploying to Vercel

```bash
npm i -g vercel
vercel
```

Or drag the folder into [vercel.com/new](https://vercel.com/new). Since it is static HTML, it deploys in under 30 seconds with no configuration.

---

## Production roadmap

The current version uses deterministic URL-based scoring to demonstrate the audit framework. A production backend would:

1. Accept a URL via a POST endpoint
2. Fetch the page with Playwright (headless Chromium)
3. Parse the live DOM for heading structure and JSON-LD
4. Validate schema types against schema.org specs
5. Run a Lighthouse report for performance signals
6. Return a real, crawled score via a Node/Express API

The frontend is already structured to swap in a real API call in `app.js` without touching the UI or scoring display logic.

---

## Tech stack

- HTML, CSS, JavaScript, no framework
- Google Fonts (Syne + DM Mono + DM Sans)
- Zero dependencies, zero build tools, zero config

---
