/* static data  */

const ISSUES = [
  {
    icon: '📋',
    iconClass: 'icon-high',
    sev: 'sev-high',
    sevLabel: 'High Impact',
    title: 'No structured data (Schema.org)',
    desc: 'The page has no JSON-LD or microdata markup. AI crawlers rely on structured data to understand what a page is about and extract entities like products, FAQs, and authors.',
    fix: '> Add FAQ, Article, or Organization schema to key pages'
  },
  {
    icon: '📝',
    iconClass: 'icon-high',
    sev: 'sev-high',
    sevLabel: 'High Impact',
    title: 'Heading hierarchy is broken',
    desc: 'Multiple H1 tags detected, and H3s appear without parent H2s. AI language models parse document outlines like a table of contents. A broken structure means content gets misattributed during retrieval.',
    fix: '> One H1 per page, then H2 sections, then H3 subsections'
  },
  {
    icon: '❓',
    iconClass: 'icon-med',
    sev: 'sev-med',
    sevLabel: 'Medium Impact',
    title: 'No FAQ or Q&A content found',
    desc: 'FAQ sections are among the most cited content in AI-generated answers. Your site has no naturally phrased question-and-answer pairs that match how users ask queries to LLMs.',
    fix: '> Add a FAQ section with plain-language questions per major topic'
  },
  {
    icon: '🔗',
    iconClass: 'icon-med',
    sev: 'sev-med',
    sevLabel: 'Medium Impact',
    title: 'Thin internal linking structure',
    desc: 'Pages are poorly connected. AI crawlers use link graphs to infer topic authority. Isolated pages score lower for topical relevance even if the content itself is strong.',
    fix: '> Link related articles from within body content, not just navigation'
  },
  {
    icon: '🖼️',
    iconClass: 'icon-med',
    sev: 'sev-med',
    sevLabel: 'Medium Impact',
    title: 'Images missing descriptive alt text',
    desc: 'Several images have empty or generic alt attributes. Alt text is one of the few signals AI systems use to understand visual content and connect it to surrounding context.',
    fix: '> Write alt text that describes what the image shows, not just its filename'
  },
  {
    icon: '📄',
    iconClass: 'icon-low',
    sev: 'sev-low',
    sevLabel: 'Low Impact',
    title: 'Meta descriptions missing or too short',
    desc: 'Some pages have no meta description and others are under 80 characters. AI tools that summarize pages often pull from meta descriptions as a quick content signal.',
    fix: '> Write 140-160 character descriptions that summarize the page accurately'
  },
  {
    icon: '⚡',
    iconClass: 'icon-low',
    sev: 'sev-low',
    sevLabel: 'Low Impact',
    title: 'Page speed may limit crawl depth',
    desc: 'Slow-loading pages get shallower crawls. If your site takes over 3 seconds to respond, automated crawlers may skip deep pages entirely, leaving good content unindexed.',
    fix: '> Aim for under 2s TTFB, compress images, defer non-critical JS'
  },
  {
    icon: '🧭',
    iconClass: 'icon-high',
    sev: 'sev-high',
    sevLabel: 'High Impact',
    title: 'No clear author or entity signals',
    desc: 'AI systems prefer citing content with clear authorship (E-E-A-T). No author bylines, no About page with entity markup, and no author schema found on content pages.',
    fix: '> Add author pages with Person schema and link them from all articles'
  }
];

const RECOMMENDATIONS = [
  {
    title: 'Build a topic cluster',
    desc: 'Pick your 3 core topics and create a pillar page for each, with 5-8 supporting articles linked from the body text.'
  },
  {
    title: 'Add JSON-LD schema',
    desc: 'Start with FAQPage and Article schema. These are the two types AI tools reference most when generating cited answers.'
  },
  {
    title: 'Write for how people ask',
    desc: 'Rewrite section headings as questions. "What is X?" performs far better in AI-surfaced results than "Overview of X."'
  },
  {
    title: 'Establish entity identity',
    desc: 'Create or claim your Google Knowledge Panel, add Organization schema, and link to social profiles from the footer.'
  },
  {
    title: 'Audit your sitemap',
    desc: 'Make sure your XML sitemap is current and submitted. AI crawlers use sitemaps to prioritize what to index first.'
  }
];
