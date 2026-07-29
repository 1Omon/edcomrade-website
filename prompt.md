You are redesigning the Edcomrade website. The audit is complete. You know the codebase in full. This prompt is your complete brief. Read every section before writing a single line of code.

---

## THE DESIGN CONCEPT — MAGAZINE FIRST

The new Edcomrade website is an **editorial magazine that also sells software**. Not a SaaS landing page. Not a portfolio. A publication — the kind you read, not just browse. Think of the front page of a serious broadsheet newspaper translated to the web: black ink on white paper, typographically confident, sections that feel like editorial spreads, and colour used the way a magazine uses a single accent in a headline — sparingly, precisely, with intention.

The brand colours (navy `#1A3C5E`, accent blue `#2E8BC0`, gold `#B8973A`, green `#1B5E20`) almost never fill large backgrounds. They live in hover states, thin rule lines, active indicators, accent words within headlines, and small badge elements. The dominant palette is **black on white** — then white on black for section inversions. That is it.

This is not minimalism for minimalism's sake. It is the visual grammar of a company that publishes things and builds things simultaneously — which is exactly what Edcomrade does. The editorial confidence signals authority. The software precision signals trust. Together they create a brand that feels like it has been around for a decade even though it launched in 2025.

---

## BEFORE YOU WRITE ANY CODE — FIX THESE FIRST

These are technical debts from the audit that must be resolved before the redesign begins. They are quick fixes and should take less than one session.

**TypeScript errors (10 total):**
- Fix all async `params` signature mismatches in `/admin/schools/[id]/page.ts`, `/api/schools/[id]/route.ts`. Change `params: { id: string }` to `params: Promise<{ id: string }>` and `await params` before destructuring, as required by Next.js 15.
- Fix `Promise<unknown>` return type on `POST` stream upload in `/api/upload/route.ts` — type it as `Promise<NextResponse>`.
- Fix `_id` typed as `unknown` in `/api/contact/route.ts`, `/api/digital-100/route.ts`, `/api/schools/[id]/route.ts`, `/api/schools/route.ts`, `/api/submissions/create/route.ts` — cast as `mongoose.Types.ObjectId` or `string` using `(doc._id as mongoose.Types.ObjectId).toString()`.

**Broken link:**
- The Paystack callback URL `/campaigns/digital-100/success` references a route that does not exist. Create a minimal `/campaigns/digital-100/success` page that shows a payment confirmation message and redirects to `/software` after 5 seconds. Or update the callback URL in `/api/digital-100/init/route.ts` to point to `/contact?status=paid`.

**Metadata gaps:**
- Add `metadata` exports to `/manifesto/page.tsx` and `/technology/page.tsx`.

**Unused components to delete:**
- Remove: `animated-counter.tsx`, `fade-in.tsx`, `faq-section.tsx`, `loading-skeleton.tsx`, `scroll-progress.tsx`, `go-back-navigation.tsx`, `lead-form.tsx`, `pioneer-pricing.tsx`, `ui/noise.tsx`, `ui/magnetic.tsx`, `ui/page-transition.tsx`.
- Do not delete: `navigation.tsx`, `footer.tsx`, `rich-text-editor.tsx`, `ui/button.tsx`, `ui/card.tsx`, `ui/container.tsx`.

Run `pnpm build` after these fixes. The build must pass with zero TypeScript errors before the redesign begins.

---

## THE DESIGN SYSTEM

Replace the current inconsistent token setup with this complete system. Apply it globally in `app/globals.css`. Never use hardcoded hex values in component files again.

```css
:root {
  /* Typography */
  --font-serif: 'Playfair Display', Georgia, 'Times New Roman', serif;
  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-mono: 'JetBrains Mono', 'Fira Code', monospace;

  /* Neutral scale — the dominant palette */
  --color-ink:        #0A0A0A;   /* Primary text — near black, not pure black */
  --color-ink-muted:  #4B4B4B;   /* Secondary text */
  --color-ink-faint:  #8A8A8A;   /* Captions, metadata, labels */
  --color-paper:      #FFFFFF;   /* Primary background */
  --color-paper-warm: #F8F7F4;   /* Off-white — used for alternating sections */
  --color-rule:       #E0E0E0;   /* Horizontal rules, dividers, borders */
  --color-rule-dark:  #2A2A2A;   /* Rules on dark backgrounds */

  /* Dark inversion — used for section backgrounds, never for the whole page */
  --color-dark:       #111111;   /* Section inversion background */
  --color-dark-mid:   #1C1C1C;   /* Card on dark background */

  /* Brand accent — used sparingly */
  --color-navy:       #1A3C5E;   /* Hover states, active nav, dark CTA buttons */
  --color-accent:     #2E8BC0;   /* Accent words, links, category tags, rule accents */
  --color-gold:       #B8973A;   /* Custom App only — premium signal */
  --color-green:      #1B5E20;   /* Free tier, success states, verified badges */

  /* Spacing — base 4 system */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-6: 24px;
  --space-8: 32px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;
  --space-24: 96px;

  /* Layout */
  --content-max: 1200px;
  --content-wide: 1440px;
  --content-narrow: 720px;

  /* Type scale */
  --text-xs:   11px;
  --text-sm:   13px;
  --text-base: 16px;
  --text-lg:   18px;
  --text-xl:   22px;
  --text-2xl:  28px;
  --text-3xl:  36px;
  --text-4xl:  48px;
  --text-5xl:  64px;
  --text-hero: clamp(52px, 7vw, 88px);

  /* Leading */
  --leading-tight:  0.95;
  --leading-snug:   1.15;
  --leading-normal: 1.5;
  --leading-loose:  1.75;

  /* Tracking */
  --tracking-tight:  -0.03em;
  --tracking-snug:   -0.02em;
  --tracking-normal: 0em;
  --tracking-wide:   0.08em;
  --tracking-wider:  0.14em;
}
```

**Typography rules — non-negotiable:**

The serif (`Playfair Display`) is used exclusively for: hero headlines, section editorial headlines (h1 on content sections), pull quotes, and article titles. Load it from Google Fonts. It must be present on the page — it is the single most visible signal that this is a magazine.

The sans-serif (`Inter`) is used for: navigation, body text, labels, buttons, captions, data, table cells. Everything functional.

The mono (`JetBrains Mono`) is used only for: referral codes, data values in the platform section, technical specifications.

**The typographic hierarchy is fixed:**
```
Display (hero):  Playfair Display, var(--text-hero), weight 700, leading 0.95, tracking -0.03em
H1 (editorial):  Playfair Display, var(--text-4xl), weight 700, leading 1.1, tracking -0.02em
H2 (section):    Playfair Display, var(--text-3xl), weight 600, leading 1.15, tracking -0.02em
H3 (subsection): Inter, var(--text-2xl), weight 600, leading 1.2, tracking -0.01em
H4 (component):  Inter, var(--text-xl), weight 600, leading 1.3
Body:            Inter, var(--text-lg), weight 400, leading 1.75, color: var(--color-ink-muted)
Caption:         Inter, var(--text-sm), weight 400, color: var(--color-ink-faint)
Label:           Inter, var(--text-xs), weight 600, tracking 0.12em, UPPERCASE
```

**The column rule:**
Every major section uses a horizontal rule (`border-top: 1px solid var(--color-rule)`) to open it, in the style of a newspaper section divider. Above the rule: a category label in `var(--text-xs)` uppercase tracking. Below: the section heading. This is a signature visual pattern that runs throughout the entire site.

**Colour usage rules:**
- Large backgrounds: `var(--color-paper)` or `var(--color-paper-warm)` for light, `var(--color-dark)` for dark inversions.
- Text: `var(--color-ink)` for headings, `var(--color-ink-muted)` for body, `var(--color-ink-faint)` for metadata.
- Brand colours appear only as: the accent word in a headline (one word, `var(--color-accent)`), the underline/border on hover states, the active navigation indicator (3px left border, `var(--color-navy)`), the free badge (`var(--color-green)`), the Custom App gold accent (`var(--color-gold)`), and CTA button fills.
- Never fill a hero or large section background with navy or accent blue.

**The rule/label pattern in code:**
```tsx
<div className="section-header">
  <div className="section-rule" />       {/* border-top: 1px solid var(--color-rule) */}
  <span className="section-label">      {/* uppercase, xs, wide tracking, var(--color-accent) */}
    SCHOOL ERP SYSTEMS
  </span>
  <h2 className="section-headline">     {/* Playfair Display, 3xl */}
    Everything a school needs to run digitally.
  </h2>
</div>
```

---

## THE NAVIGATION

Replace the current navigation entirely. The new navigation is:

**Structure:**
```
[Edcomrade wordmark — serif, weight 700, ink colour]

[What We Do ▾]  [Software ▾]  [Schoolpedia]  [Work With Us ▾]  [About]

[Enquire]  [Get Started →]
```

**What We Do dropdown:**
- School ERP Systems
- Schoolpedia
- EdMedia & Publishing

**Software dropdown:**
- Pioneers' Software — *Free cloud ERP for schools*
- Custom App — *Bespoke system for institutions*
- ParentAide — *The parent mobile app*

**Work With Us dropdown:**
- Become an Amplifier
- Sales Executive Role
- Partner With Us

**Navigation design:**
- Default state: white background, `var(--color-ink)` text, `16px` Inter medium.
- On scroll past 80px: add `border-bottom: 1px solid var(--color-rule)`. No blur, no backdrop filter — just the rule line. Clean newspaper header.
- Hover on nav links: `var(--color-accent)` text. No background change.
- Active page: a 2px underline in `var(--color-accent)` under the link. Nothing else.
- Dropdowns: white background, `border: 1px solid var(--color-rule)`, `border-radius: 4px` (not rounded — editorial, not app-like), `padding: 16px`. Product names in `Inter` medium ink. Descriptions in `var(--color-ink-faint)` small. `8px` gap between items. No icons.
- CTA buttons: "Enquire" is `border: 1.5px solid var(--color-rule)`, transparent background, ink text. "Get Started →" is `background: var(--color-ink)`, white text. Both `14px` medium, `padding: 9px 18px`, `border-radius: 3px`.
- Mobile: hamburger (two lines, not three — editorial convention). Full-height slide from right, white background, all links vertical, "Get Started" as full-width ink button at bottom.

---

## THE PAGES

### Homepage (`/`)

**Section 1 — The Masthead**
Full viewport height. White background. This is the magazine front page.

Left column (60% width): the editorial headline across four lines in Playfair Display at `var(--text-hero)`:
```
Education's
ally in the
digital
age.
```
The word "digital" is in `var(--color-accent)`. Line height `0.95`. Letter spacing `-0.03em`. Below the headline: a single line in `Inter` body: *"Edcomrade gives Ghanaian schools the tools to run well, the visibility to be found, and the media to be known."* Two CTAs below: "Explore the Platform →" (ink button) and "Read Our Manifesto" (text link, underlined).

Right column (40% width): a tall photograph in portrait orientation. `border-radius: 0` — no rounding on images. A thin `1px solid var(--color-rule)` border around the image, like a newspaper photograph. Caption below the image in `var(--text-xs)` italic: *"A private school in Accra — one of 120 listed on Schoolpedia."*

Below the hero, spanning full width: a thin rule line, then a scrolling ticker strip in `var(--text-xs)` uppercase tracking wide: `120 SCHOOLS ON SCHOOLPEDIA · 30 VERIFIED · 2–4 WEEKS TO DEPLOY · FREE TO START · POWERED BY PIONEERS'` — repeating, slow scroll, `var(--color-ink-faint)` text on white. This is the broadsheet's front-page dateline.

**Section 2 — The Three Departments**
White background. Opens with the rule/label pattern: label "THE EDCOMRADE ECOSYSTEM", headline "Three departments. One mission."

Three department cards stacked in a row — but styled as newspaper section headers, not SaaS feature cards. Each card: a thin top border in `var(--color-accent)` (2px), department name in `var(--text-xs)` uppercase label, a large editorial headline in Playfair Display (`var(--text-2xl)`), a two-sentence description in body text, and a text link "Explore →". No box shadows. No card backgrounds. Just the content on white with that accent top border.

**Section 3 — The Problem**
`var(--color-paper-warm)` background. Opens with rule/label. A large pull quote centred: *"Ghana's best schools are often invisible to the parents searching for them."* In Playfair Display italic, `var(--text-3xl)`. Below: two paragraphs of editorial prose — no bullet points. To the right of the prose: a thin vertical rule (`1px solid var(--color-rule)`) separating a stat column showing three numbers: `90%` of schools on paper, `120+` schools discovered on Schoolpedia, `0 GHS` to start on Pioneers'.

**Section 4 — How the Ecosystem Works**
White background. Rule/label: "HOW EDCOMRADE WORKS". Headline: *"Three products. One school. One parent. Connected."*

A tabbed panel — left side has three rows, each a clickable item: "Pioneers' Software", "ParentAide", "Schoolpedia". The active item has a 3px left border in `var(--color-accent)` and the product name becomes ink (not muted). The right panel shows a product illustration placeholder — a clean line-art style frame (not a screenshot blob). Use a `div` with `aspect-ratio: 4/5`, `background: var(--color-paper-warm)`, `border: 1px solid var(--color-rule)`, and centred text `{/* TODO: replace with product screenshot */}`.

**Section 5 — From the Magazine (EdMedia)**
`var(--color-dark)` background. White text. Rule/label in `var(--color-rule-dark)`: "FROM EDCOMRADE MEDIA". Headline in Playfair Display white: *"Stories from the schools building Ghana's future."*

Three article cards in a row. Each card: no background, just a top rule in `var(--color-rule-dark)`, a category tag (`var(--color-accent)` text), a Playfair Display headline in white, a caption-size date in `var(--color-ink-faint)`, and a two-sentence excerpt in small white body text. Below the cards: "Read the Magazine →" in `var(--color-accent)`.

Write three real placeholder article headlines: "The Accra school that digitised in two weeks — and never looked back." | "Why Ghanaian parents are choosing schools differently in 2026." | "EdMedia's inaugural school spotlight: Hecta International."

**Section 6 — Testimonials**
White background. Rule/label: "WHAT SCHOOL HEADS SAY". Three testimonial cards — no background, no box shadow. Each: a Playfair italic pull quote at `var(--text-xl)`, a rule line, then the person's name in `var(--text-sm)` bold and their role in `var(--color-ink-faint)`. Placeholder quotes written as plausible Ghanaian school heads. Mark all three `{/* TODO: replace with real testimonial */}`.

**Section 7 — The CTA Banner**
`var(--color-ink)` background. White text. Full width. `padding: 80px 0`. Left-aligned (not centred — editorial, not billboard). Large Playfair Display headline: *"The September deployment window is open."* Body line below: *"Register before August 30th — schools confirm in the order they apply."* CTA button: white background, ink text, `border-radius: 3px`. Nothing else.

---

### `/software` — Software Offerings

Opens with a full-width rule/label header: "SCHOOL ERP SYSTEMS". Editorial headline: *"Two ways to bring your school into the digital age."* A single sentence below explaining the difference between Pioneers' and Custom App.

**Pioneers' Software section:**
Rule/label: "PIONEERS' SOFTWARE". Large editorial headline. Who it's for — a single italic pull quote, not a grid. Then a clean feature list using the newspaper convention: each feature is a row with a thin bottom rule, feature name left in `Inter` medium, description right in body text. Free badge (green) on the core module items. Pricing table using the newspaper row pattern. 5-year lock-in callout as a boxed quote — Playfair italic inside a `border: 1px solid var(--color-rule)` box with a gold left accent border (`3px solid var(--color-gold)`).

**Custom App section** — `id="custom"`:
Rule/label in `var(--color-gold)`: "CUSTOM APP". Dark section (`var(--color-dark)` background). White Playfair Display headline: *"A system built entirely around your institution."* Premium feel — more whitespace, fewer elements. Feature list on dark background uses white text with `var(--color-rule-dark)` row dividers. Pricing brackets displayed as a clean table. School chains callout as a boxed quote on dark.

Comparison table at the bottom — newspaper table style. Header row with thin bottom border `var(--color-ink)`. Alternating rows in white and `var(--color-paper-warm)`. The "better" cell in each row gets a `var(--color-green)` text colour — no background highlighting.

---

### `/amplifiers` — The Amplifiers Programme

This page has its own energy — it is the most kinetic page on the site, but still within the magazine vocabulary.

Rule/label: "WORK WITH US". Playfair Display hero headline: *"Amplify what schools can do in your community."*

A full-width dark section explains what Grind is: *"Grind is the platform for independent sales reps and social media marketers who promote the products they believe in — in return for commissions and recognition. As an Edcomrade Amplifier on Grind, you bring Pioneers' Software to schools in your community and earn real recurring income for up to three years."*

Then: the tier system — four tiers displayed as newspaper columns side by side, each with a thin top rule, the tier name as the headline, the unlock trigger as the subheading, and the commission rate as the lead number in Playfair Display large.

Income projection displayed as an editorial table — the kind you'd see in a business newspaper. "What 20 schools earns you. What 50 schools earns you."

How to join — three steps as a numbered list in the newspaper convention: large numeral, step name, description.

CTA: "Join the Amplifiers on Grind →" — links to `https://grind.xcuxion.com`. This is the only outbound link on the page that opens in a new tab.

A second smaller section for the Custom App Sales Executive role — positioned as a sidebar within the same page or below with its own rule/label: "SALES EXECUTIVE ROLE". Shorter — what the role is, what it earns (bracket commissions), what you need. CTA: "Apply as a Sales Executive →" linking to `https://grind.xcuxion.com`.

---

### `/edmedia` — EdMedia

Rule/label: "EDMEDIA & PUBLISHING". Playfair Display headline: *"We tell the stories schools deserve to be known for."*

Dark section. Magazine masthead feel. Three services as editorial columns: Digital Magazine, School Coverage, Brand Consultation. Each: category label, headline, two-sentence description.

Below on white: the same three article cards from homepage Section 5 — use the same component.

Enquiry form for EdMedia services — minimal. Name, school name, service interested in (dropdown), message. Ink CTA button.

---

### `/about` — About

Rule/label: "OUR STORY". Playfair Display headline: *"Built in Ghana. Built for Africa."*

The founding story as genuine editorial prose — not a timeline, not bullet points. Three paragraphs. Written in the third person but warm. Ends with the sentence that converts: *"Solomon chose to build a company instead of deploying to one school."*

Dark section break: the mission statement in large Playfair italic centred on dark background. Three lines: *"We modernise African schools. / We centre education around parents. / We make excellence visible."*

Team section: Solomon and Prince as editorial profile cards — portrait photo (square, `border: 1px solid var(--color-rule)`), name in `Inter` medium, role in `var(--color-ink-faint)`, one sentence. Mark others `{/* TODO: add team member */}`.

Vision horizons as a clean three-column editorial section with Playfair Display horizon numbers and descriptions.

---

### `/schoolpedia` — Schoolpedia

Rule/label: "SCHOOLPEDIA". Playfair Display headline: *"Find the right school. Know what you're choosing."*

A mockup of the Schoolpedia search bar — styled with `border: 1.5px solid var(--color-ink)`, `border-radius: 3px`, placeholder text: *"Search by school name, area, or type..."*, and a magnifying glass icon. Non-functional — it links to `https://schoolpedia.edcomrade.com` on click.

Three editorial sections: For Parents (discover and compare), For Schools (the PR platform), For Everyone (the data). Each as a newspaper row — rule at top, label, headline, prose.

Stats row — four numbers in large Playfair Display with captions below. The newspaper dateline convention: `120+  Schools Listed` / `30  Verified` / `Free  To List` / `2026  Launch Year`.

CTA: "Search Schools on Schoolpedia →" links to `https://schoolpedia.edcomrade.com`.

---

### `/parentaide` — ParentAide

Rule/label: "PARENTAIDE". Playfair Display headline: *"Everything about your child's school. In your pocket."*

Feature grid — eight features displayed as a newspaper feature grid. Two columns. Each feature: a thin top rule, feature name in `Inter` medium ink, one-sentence description in body text. No icons — the typography carries it.

Wallet explainer as a full-width dark strip: *"One wallet. Every school payment."* Three horizontal steps.

Marketplace section as editorial prose with a pull quote.

Download CTA in "Coming Soon" disabled state — `border: 1px solid var(--color-rule)`, greyed text, `cursor: not-allowed`. Caption below: *"ParentAide for iOS and Android — coming soon."*

---

### `/contact` — Contact

Rule/label: "GET IN TOUCH". Playfair Display headline: *"We respond within two business days."*

Two columns. Left: the form — clean, no labels floating, all labels above their inputs, ink submit button. Right: contact details as editorial lines with thin top rules between each item.

Form fields: Full Name, Email, Phone, I am a... (select: Proprietor, Parent, Partner, Sales Enquiry, Other), School Name (conditional — shows when Proprietor is selected), Subject, Message. Success state replaces form with: *"Thank you. We will be in touch shortly."* in Playfair Display.

---

### `/manifesto` — Manifesto

This page should feel like an essay in a literary magazine.

Rule/label: "MANIFESTO". Date: "Accra, Ghana — 2025". Author: "Solomon A. Ayisi, Founder".

The text is full-width on mobile, `var(--content-narrow)` centred on desktop. Playfair Display body throughout — this is the one page where the serif is used for body text, not just headlines, because it is a long-form piece. `var(--text-lg)`, `leading-loose`. Section breaks use a centred `* * *` ornament. Drop cap on the first paragraph — the first letter is Playfair Display, `var(--text-hero)` size, floated left.

Update the content to reflect the current company. Rewrite it as a 600-word op-ed by Solomon: why Ghanaian schools deserve better tools, what fragmentation costs them, what Edcomrade is doing about it, and what the next ten years could look like. Keep it honest, direct, and slightly uncomfortable — the best manifestos are.

---

### `/technology` — Technology

Keep this page but de-emphasise it. Remove from the footer nav (it was already unlinked from the header). Add a simple redirect from the footer link to `/software` instead. Update the metadata. Keep the content — it is useful for technical partners who find it via search.

---

## COMPONENT PATTERNS

**The newspaper row:** Used for feature lists, comparison rows, contact details. A `div` with `border-top: 1px solid var(--color-rule)`, `padding: 16px 0`, `display: flex`, `justify-content: space-between`. Left: label or feature name. Right: value or description.

**The article card:** Used on homepage and EdMedia page. No card background. `border-top: 2px solid var(--color-rule)`, `padding-top: 16px`. Category tag (color: `var(--color-accent)`, uppercase, `var(--text-xs)` tracking-wide). Headline in Playfair Display medium. Date in `var(--color-ink-faint)`. Two-sentence excerpt in body.

**The section rule header:**
```tsx
<div style={{ borderTop: '1px solid var(--color-rule)', paddingTop: '16px', marginBottom: '32px' }}>
  <span style={{ fontSize: 'var(--text-xs)', letterSpacing: 'var(--tracking-wider)',
    textTransform: 'uppercase', color: 'var(--color-accent)', fontFamily: 'var(--font-sans)' }}>
    {label}
  </span>
  <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-3xl)',
    letterSpacing: 'var(--tracking-snug)', lineHeight: 'var(--leading-snug)',
    color: 'var(--color-ink)', marginTop: '8px' }}>
    {headline}
  </h2>
</div>
```

**Buttons:**
- Primary: `background: var(--color-ink)`, `color: white`, `padding: 10px 20px`, `font-size: var(--text-sm)`, `font-weight: 600`, `border-radius: 3px`, `letter-spacing: 0.02em`. Hover: `background: var(--color-navy)`.
- Ghost: `border: 1.5px solid var(--color-rule)`, transparent background, `color: var(--color-ink)`. Hover: `border-color: var(--color-ink)`.
- Accent (rare): `background: var(--color-accent)`, white text. Only used where you need energy — the Amplifiers page CTA.

**No border-radius above 4px anywhere on the site.** Editorial design does not round things aggressively. `3px` on buttons. `4px` on dropdowns. `0px` on images.

**No box-shadows.** Depth is created through layout, whitespace, and rule lines — not elevation.

---

## WHAT TO REMOVE

- All `blur-3xl` and `blur-[120px]` background blob elements.
- All custom cursor components.
- All `PageTransitionWrapper` components.
- All `Noise` texture overlays.
- All `Magnetic` hover effects.
- The `ScrollProgress` bar.
- The `AnimatedCounter` — replace with static numbers. The magazine does not animate its statistics.
- All `hover:-translate-y-*` card lifts. Cards do not move on hover — the text colour changes and the accent rule appears.

**One subtle animation that stays:** A very simple opacity + translateY fade on page sections as they enter the viewport. `opacity: 0 → 1`, `translateY: 16px → 0`, duration `280ms`, easing `ease-out`. This is applied via Framer Motion or an Intersection Observer. Nothing more dramatic than this.

---

## BUILD ORDER

Build in this exact order. Run `pnpm build` after each phase.

1. Fix all TypeScript errors and broken links (pre-existing debt).
2. Implement the design system in `globals.css`. Set up Playfair Display from Google Fonts in `layout.tsx`.
3. Build the Navigation and Footer.
4. Build the Homepage — section by section in order.
5. Build `/software`.
6. Build `/amplifiers`.
7. Build `/edmedia`.
8. Build `/about`.
9. Build `/schoolpedia`.
10. Build `/parentaide`.
11. Build `/contact`.
12. Update `/manifesto` with new content and editorial styling.
13. Update metadata on all pages.
14. Final pass: check every page at 390px mobile and 1440px desktop. Check every hover state. Check every link.

Do not skip steps. Do not combine phases. Show a screenshot of each completed page at 1440px before moving to the next.