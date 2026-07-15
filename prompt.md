You are working on the Edcomrade website — a Next.js project connected to MongoDB. The live site is at www.edcomrade.com. Your task is to completely revamp it to reflect the company's current direction, product portfolio, and brand identity.

**Start by doing the following before writing a single line of code:**

1. Read the entire codebase structure — map every page, component, layout, and API route that exists.
2. Identify the current tech patterns: how routing is structured (App Router or Pages Router), how styles are applied (Tailwind, CSS modules, styled-components, or other), how MongoDB is being used (Mongoose models, raw driver, or other), and whether there is any CMS or data-fetching layer.
3. Identify every page that currently exists and what content it holds.
4. Report your findings before making any changes.

---

**BRAND & DESIGN DIRECTION**

Take strong UI inspiration from novo.co. Study how they use it:

- Large, confident hero sections with bold typographic statements — not busy, not cluttered
- Clean section rhythm: one idea per section, stated plainly, supported visually
- Testimonials and social proof integrated naturally into the scroll
- Navigation that is structured by audience or product area, not a flat list
- Dark and light sections alternating deliberately to create visual breathing room
- Strong use of one accent colour against mostly neutral backgrounds
- Generous whitespace — the site never feels cramped

Do NOT copy Novo's content, tone, or structure literally. Edcomrade is an African edtech company, not a US fintech. The aesthetic direction is: modern, trustworthy, warm, and ambitious. The tone is confident and plain-spoken — not corporate, not startup-hype.

**Brand colours to use:**

- Primary navy: #1A3C5E
- Accent blue: #2E8BC0
- Use white and very light grays as background
- Sparingly use a warm gold (#B8973A) for premium accents (Custom App sections)
- Green (#1B5E20) for success states and free-tier callouts

**Typography:** Use a clean sans-serif system. Headings should be large and bold. Body text should be readable at small sizes on mobile.

---

**SITE ARCHITECTURE — PAGES TO BUILD**

Replace the existing site with the following page structure:

**`/` — Homepage**

Hero: Full-width section. Large headline: _"Your school's ally in the digital age."_ Subheadline: _"Edcomrade gives schools the tools to run better, helps parents stay connected, and puts every school in Ghana on the map."_ Two CTAs: "Get Started" and "Explore Schoolpedia".

Below the hero, build the following sections in order:

Section 1 — The Problem: _"Most schools in Ghana still run on paper. Most parents have no digital connection to their child's school. Most schools have no online presence at all."_ — Three-column stat or pain point cards.

Section 2 — The Ecosystem: Three cards representing the three departments. EdMedia (media and visibility), Schoolpedia (school intelligence platform), School ERP Systems (software for schools). Each links to its dedicated page.

Section 3 — How It Works: A three-step flow. Step 1: School joins Pioneers' or commissions a Custom App. Step 2: Parents download ParentAide and connect. Step 3: School appears on Schoolpedia and builds its reputation. Visually similar to Novo's "How to put Novo to work" section.

Section 4 — Products overview: Two side-by-side cards. Pioneers' Software (free to start, for schools digitising now) and Custom App (bespoke, for schools building a legacy). Both link to `/software`.

Section 5 — Social proof: Placeholder testimonial section. Use three placeholder cards with school-head quotes styled in the Novo testimonial format. Mark them clearly as `{/* TODO: replace with real testimonials */}`.

Section 6 — CTA banner: Dark navy background. _"120 schools already on Schoolpedia. Be one of the first on Pioneers'."_ CTA: "Register Your School".

**`/software` — Software Offerings**

This page presents both software products side by side and in depth. It must clearly communicate:

- The difference between Pioneers' Software and Custom App — who each is for, what each costs, what each includes
- Pioneers' free school administration module and paid add-on modules with pricing (GHS per student per term)
- Custom App as premium, bespoke, License-to-own licensing starting at GHS 30,000
- A comparison table at the bottom

Structure: Start with a tabbed or scrolled layout where Pioneers' and Custom App each get a dedicated section with their own visual identity. Pioneers' uses the blue/green palette (accessible, modern). Custom App uses the navy/gold palette (premium, exclusive).

Include a module grid for Pioneers' showing all 8 modules: Core Administration (free), Classroom & Exam Management, Hostel & Boarding, HR Management, Finance Management, Alumni Management, Transportation & Safety, E-commerce & Inventory.

**`/parentaide` — ParentAide**

Dedicated page for the parent app. Sections:

- Hero: _"Everything about your child's school. In your pocket."_
- Feature grid: fee payments via wallet, school communication, attendance tracking, academic results, marketplace, school enrolment, scholarship discovery, bus notifications
- Wallet explainer: how the ParentAide Wallet works (top up via Paystack, pay fees, buy items)
- Marketplace section: school stores + third-party vendors
- Download CTA (placeholder — app not yet live, use "Coming Soon" state)

**`/schoolpedia` — Schoolpedia**

Dedicated page for the intelligence platform. Sections:

- Hero: _"Find the right school. Know what you're choosing."_
- For Parents: search, compare, enrol
- For Schools: verified profile, PR platform, visibility to searching parents
- Stats: 120 schools listed, 30 verified (use real numbers, mark with `{/* TODO: update dynamically */}`)
- Link to schoolpedia.edcomrade.com

**`/edmedia` — EdMedia**

Department page for media and advertising arm. Sections:

- What EdMedia does: digital magazine, social media management, school event coverage, brand consultation, advertising
- For schools wanting visibility beyond the ERP
- Contact / enquiry CTA

**`/about` — About**

- The founding story (Solomon took his nephew to boarding school in 2023, four days of paper, decided to build a solution as his KNUST CS project)
- The mission: modernise African schools, centre education around parents
- The team: Solomon A. Ayisi (CEO & Founder), Prince Sarfo (CTO & Co-Founder), with placeholders for the rest of the team
- The vision: 10,000 schools, 3 million users, pan-African

**`/contact` — Contact**

Simple contact page. Email, WhatsApp link, address (New Legon, Accra, Ghana). A form that submits to a MongoDB-backed API route at `/api/contact`. Fields: name, school name (optional), role (proprietor / parent / other), message. On submit, save to a `contacts` collection in MongoDB and send a confirmation response.

---

**NAVIGATION**

Top navbar structure:

- Logo (left)
- Centre links: Products (dropdown → Pioneers' Software, Custom App, ParentAide), Schoolpedia, EdMedia, About
- Right: "List Your School" (links to Schoolpedia), "Get Started" (primary CTA button, navy fill)
- Mobile: hamburger menu

Footer structure (inspired by Novo's footer):

- Logo + tagline: _"Your ally in everything education."_
- Four columns: Products (Pioneers', Custom App, ParentAide, Schoolpedia), Company (About, EdMedia, Careers, Manifesto), Support (Contact, WhatsApp, Help), Legal (Privacy Policy, Terms)
- Bottom bar: © 2026 S.A Edcomrade Ventures | Built in Ghana, built for Africa
- Social icons: Twitter/X, LinkedIn, Instagram

---

**TECHNICAL REQUIREMENTS**

- Maintain the existing Next.js setup. Do not change the framework or introduce new routing paradigms unless the existing setup is broken.
- Keep MongoDB connection patterns consistent with how the existing codebase connects.
- All new pages should use the same layout wrapper the existing pages use, unless that layout needs to be updated as part of the revamp.
- Use Tailwind CSS if it is already in the project. If not, match whatever styling system is currently in use.
- All images are placeholder for now — use `next/image` with placeholder props or a neutral grey div with the correct aspect ratio. Add a comment `{/* TODO: replace with real image */}` on every placeholder.
- The site must be fully responsive. Mobile layout is as important as desktop.
- Metadata (`<title>`, `<meta description>`, Open Graph) must be set correctly on every page using Next.js Metadata API.
- Do not remove the existing Schoolpedia link (schoolpedia.edcomrade.com) — it is a live subdomain.
- Do not break any existing routes that may have inbound links (check before deleting pages).

---

**WHAT NOT TO DO**

- Do not use template UI kits or component libraries that would make the site look generic (no shadcn pre-built page templates, no Tailwind UI page clones)
- Do not add animations that slow the page or feel gimmicky — subtle fade-ins on scroll are acceptable
- Do not write placeholder copy that says "Lorem ipsum" — every section should have real Edcomrade content as specified above
- Do not hardcode the school count stats — pull them from MongoDB or mark them with a `{/* TODO: connect to DB */}` comment for later
- Do not change the domain, subdomain structure, or deployment configuration

---

**DELIVERABLES**

After reading the codebase and reporting your findings, implement the revamp page by page in this order:

1. Shared layout, navbar, and footer
2. Homepage
3. `/software`
4. `/parentaide`
5. `/schoolpedia`
6. `/about`
7. `/edmedia`
8. `/contact` with working MongoDB form submission

Commit or checkpoint after each page is complete. Do not attempt to build everything in one pass.

This is a solid plan. The agent read the codebase correctly and the structure is sound. Here is the updated version with corrections, additions, and precise design instructions tied to Novo's UI patterns:

---

# Edcomrade Website Revamp — Updated Implementation Plan

## Codebase Audit Findings (Confirmed Accurate)

The agent's audit is correct. Proceed with the following confirmed stack:

- Next.js 15.2.8, App Router
- Tailwind CSS v4 with OKLCH custom properties
- Mongoose v8, singleton connection via `lib/db.ts`
- NextAuth v4 protecting `/admin/*`
- Cloudinary for uploads
- 7 existing Mongoose models confirmed

No changes to the stack are needed.

---

## Content & Product Corrections

The agent must update all content to reflect Edcomrade's current structure before building any page. The existing site describes an older, narrower version of the company. The following is the authoritative product and company information to use across the entire site.

**Company name:** Edcomrade — registered as S.A Edcomrade Ventures. The tagline is: _"Your ally in everything education."_

**Three departments:**

1. **School ERP Systems** — the software department. Contains three products: Pioneers' Software, Custom App, and ParentAide.
2. **Schoolpedia** — Ghana's school intelligence platform at schoolpedia.edcomrade.com. Parents discover, compare, and enrol children in schools. Schools get a verified public profile. Revenue from banner advertising and sponsored listings.
3. **EdMedia** — the media and publishing department. Digital magazine, social media management, school event coverage, brand consultation, and advertising for schools and education-sector brands.

**Products under School ERP Systems:**

_Pioneers' Software_ — a cloud-hosted, multi-tenant school ERP at pioneers.edcomrade.com. Schools share the platform with full data isolation. The Core Administration Module is permanently free and includes: admissions management, student information system, health records, staff communication, timetable scheduling (automated with conflict detection), and basic fee billing with Paystack payment collection. Every school also gets a verified Schoolpedia profile and ParentAide bundled free. Paid add-on modules are priced per student per term: Classroom & Exam Management (GHS 2–3), HR Management (GHS 2–3), Hostel & Boarding Management (GHS 3–4), Finance Management (GHS 3–4), Transportation & Safety (GHS 2–3), E-commerce & Inventory (GHS 2), Alumni Management (GHS 1–2). Schools activating three or more modules get 15% off. Schools can lock in today's prices for five years.

_Custom App_ — a fully bespoke school management system and LMS built from the ground up for each school. Deployed on the school's own servers and domain (.edu.gh). License-to-own licensing: fixed license fee plus annual instalments over multiple years, or a one-time payment. Web-only PWA starts at GHS 30,000. Web plus mobile, web plus desktop, web plus mobile plus desktop, and desktop-only are each quoted separately. Deployment takes approximately three months. Custom App is for established private schools, international schools, and school chains.

_ParentAide_ — a mobile app for parents and guardians. Features: Schoolpedia access for school discovery and enrolment, fee and bill payment via an in-app wallet (topped up via Paystack), an education marketplace (school stores and third-party vendors including bookshops and uniform suppliers), scholarship and bursary discovery, school communication and announcements, child academic performance tracking, attendance notifications, bus boarding and alighting alerts, and pickup authorisation management. ParentAide is free for parents. Revenue from marketplace commissions and advertising. The app is not yet live — use a "Coming Soon" state on the download CTA.

**Key live stats to use (mark dynamic ones for DB connection):**

- Schools listed on Schoolpedia: ~120
- Verified schools on Schoolpedia: ~30
- Deployment time for Pioneers': 2–4 weeks
- Deployment time for Custom App: ~3 months

---

## Design Direction — Novo.co Patterns to Extract

The agent must study how novo.co achieves its visual quality and apply the same principles to Edcomrade's identity. Do not copy Novo's layout literally — extract the underlying design decisions.

**Specific Novo patterns to replicate in spirit:**

_Hero section:_ Novo uses a large, nearly full-viewport hero with an editorial-style headline broken across multiple lines, a real photograph integrated into the typographic layout (not just a background image), and a single short subheadline below. The headline uses mixed weight — some words bold, some regular — to create rhythm. Edcomrade's hero should do the same: large, confident, typographic. The headline is: _"Your school's ally in the digital age."_ Break it dramatically across lines. Use a real photo or a strong placeholder of an African school environment.

_Section rhythm:_ Novo alternates between white/light sections and dark sections deliberately. Each section contains exactly one idea stated in one headline. Edcomrade should follow this exactly — no section should try to explain two things at once. The dark sections use Edcomrade's navy (#1A3C5E). Light sections use white or a very light blue-gray (#F8FAFB).

_Cards:_ Novo's feature cards are borderless on white backgrounds — they use spacing and subtle background tint rather than borders or drop shadows to create separation. On dark backgrounds, cards use a slightly lighter dark fill. Edcomrade should do the same — avoid heavy card borders or aggressive box shadows.

_Typography scale:_ Novo uses very large headings (80–100px on desktop for hero) and clean body text around 17–18px. Section headings are 36–48px. The type feels editorial, not app-like. Edcomrade should match this scale. The existing Inter font is fine — keep it.

_Navigation:_ Novo's nav is minimal. Logo left, a few grouped links centre or left, two CTAs right. On scroll it gains a subtle background blur. The Products dropdown should feel like an editorial menu — clean list of product names with one-line descriptions, not icon-heavy tiles.

_Testimonial section:_ Novo's testimonials use large portrait photos, a bold pull-quote as the headline, and the customer's name and business below. They scroll horizontally or stack. Edcomrade's placeholder testimonials should be built in this exact format — ready to receive real school head quotes and photos.

_CTA banners:_ Novo uses full-width dark banners with a large statement and a single button. No decorative elements, no gradients. Just the message and the action. Edcomrade's "120 schools on Schoolpedia" banner should follow this pattern exactly.

_Mobile:_ Novo's mobile experience collapses gracefully — the hero still feels large and editorial, sections stack without losing their single-idea discipline. Edcomrade must match this. Test every section at 390px.

**Colour application rules for the agent:**

- Navy #1A3C5E: Dark section backgrounds, primary buttons, nav background on scroll
- Accent blue #2E8BC0: Links, hover states, icon accents, section label text (the small uppercase label above a heading, e.g. "SCHOOL ERP SYSTEMS")
- White #FFFFFF: Primary page background for light sections
- Light blue-gray #F0F4F8: Subtle card tint on white sections
- Gold #B8973A: Used only in Custom App sections — premium feel. Sparingly. Borders on Custom App cards, accent on pricing, one highlight word in the Custom App hero line.
- Green #1B5E20 / light green #E8F5EE: Free tier callouts, "School Administration Module — Free" badges, success states
- Red: Only for error states on forms

**Things to explicitly avoid:**

- Gradient backgrounds (no blue-to-purple gradients, no mesh gradients)
- Heavy drop shadows (use `shadow-sm` at most)
- Rounded corners larger than `rounded-xl` (prefer `rounded-lg`)
- Animations that move content during scroll in a way that distracts from reading
- Icon libraries that look generic (Heroicons is fine if already in the project, but use sparingly)
- Any component that looks like it came from a shadcn demo page

---

## Updated Page-by-Page Specification

### Phase 1 — Shared Layout, Navbar, Footer

**globals.css:** Add these as named CSS custom properties in addition to existing OKLCH tokens:

```css
--color-navy: #1a3c5e;
--color-accent: #2e8bc0;
--color-gold: #b8973a;
--color-green-dark: #1b5e20;
--color-green-light: #e8f5ee;
--color-surface: #f0f4f8;
```

**Navigation:** Structure exactly as follows:

Left: Edcomrade logo (existing `/full-logo.png`)

Centre-left grouped links:

- "Products" — dropdown containing:
  - Pioneers' Software — _"Free ERP for schools digitising now"_
  - Custom App — _"Bespoke system built for your school"_
  - ParentAide — _"The parent and guardian app"_
- "Schoolpedia" — links to schoolpedia.edcomrade.com (external, new tab)
- "EdMedia" — links to `/edmedia`
- "About" — links to `/about`

Right:

- "List Your School" — ghost/outline button, links to schoolpedia.edcomrade.com
- "Get Started" — filled navy button, links to `/contact`

On scroll: nav gains `backdrop-blur-md bg-white/90` with a bottom border `border-b border-gray-100`. Dropdown on hover, keyboard-accessible.

Mobile: Hamburger. Full-screen slide-down menu. All links visible. "Get Started" button at the bottom of the mobile menu.

**Footer:** Four columns on desktop, stacked on mobile:

Column 1 — Products: Pioneers' Software (`/software`), Custom App (`/software#custom`), ParentAide (`/parentaide`), Schoolpedia (external)

Column 2 — Company: About (`/about`), EdMedia (`/edmedia`), Manifesto (`/manifesto`), Careers (placeholder `#`)

Column 3 — Support: Contact (`/contact`), WhatsApp (existing button), Help (`mailto:partner@edcomrade.com`)

Column 4 — Legal: Privacy Policy, Terms of Service, Cookies (all placeholder `#` for now)

Below columns: Logo + tagline _"Your ally in everything education."_

Bottom bar: `© 2026 S.A Edcomrade Ventures | Built in Ghana, built for Africa`

Social icons: Twitter/X (x.com/edcomradegh), LinkedIn (linkedin.com/company/edcomrade), Instagram (instagram.com/edcomradegh)

---

### Phase 2 — Homepage (`/`)

Remove the role-switcher entirely. Build these sections in order:

**Section 1 — Hero**
Full viewport height. Dark navy background (#1A3C5E). Large editorial headline broken across three lines:

```
Your school's ally
in the digital
age.
```

Headline font size: 80–96px desktop, 48px mobile. Bold. White text. One word or phrase in accent blue — "digital" or "ally" depending on what reads best visually. Below the headline: a single subheadline in white at 18–20px: _"Edcomrade modernises schools, connects parents, and puts every institution in Ghana on the map."_ Two CTAs side by side: "Get Started" (white fill, navy text) and "Explore Schoolpedia" (ghost, white border). Right side or integrated into the layout: a strong photograph of an African classroom or school environment (placeholder div with `aspect-[3/4]` and a gray fill, comment: `{/* TODO: replace with real school photography */}`).

**Section 2 — The Problem**
White background. Small uppercase label in accent blue: "THE REALITY TODAY". Large heading: _"Ghana's schools deserve better tools."_ Three-column cards (borderless, light surface tint #F0F4F8):

- Card 1: _"9 in 10 schools still run on paper registers and spreadsheets."_
- Card 2: _"Most parents have no direct digital connection to their child's school."_
- Card 3: _"The majority of schools have no online presence parents can find."_
  Each card: bold stat or fraction at the top in large navy text, one sentence below in body text.

**Section 3 — The Ecosystem**
Navy background (#1A3C5E). Small uppercase label in accent blue: "THE EDCOMRADE ECOSYSTEM". Large heading in white: _"Three departments. One mission."_ Three cards side by side with a slightly lighter navy fill (#1E3448) and no borders:

- Card 1 — School ERP Systems: _"Software that runs your school. Pioneers' Software, Custom App, and ParentAide."_ Link: "Explore Software →"
- Card 2 — Schoolpedia: _"Ghana's school intelligence platform. Parents search here. Schools are found here."_ Link: "Visit Schoolpedia →"
- Card 3 — EdMedia: _"Visibility for schools that deserve to be seen. Media, magazine, and brand."_ Link: "Learn More →"

**Section 4 — How It Works**
White background. Label: "HOW IT WORKS". Heading: _"From invisible to indispensable in weeks."_ Three numbered steps (horizontal on desktop, stacked on mobile) — same visual pattern as Novo's "How to put Novo to work" section:

- Step 1: _"Your school joins Pioneers' or commissions a Custom App. Setup takes 2 to 4 weeks."_
- Step 2: _"Parents download ParentAide. They pay fees, track their child, and stay connected — from their phone."_
- Step 3: _"Your school goes live on Schoolpedia. Parents searching for schools in your area find you."_
  Each step: large number in accent blue, bold title, two-sentence description, optional "Learn more" link.

**Section 5 — Products**
Light surface background (#F0F4F8). Label: "OUR SOFTWARE". Heading: _"Two ways to modernise your school."_ Two large side-by-side cards:

Left card — Pioneers' Software. Blue/green palette. Navy header bar. Body: _"For schools ready to digitise now. The school administration module is free — forever. Add more when you're ready."_ Key points: Free school administration module, 2–4 week deployment, per-student-per-term pricing on add-ons, 5-year price lock. CTA: "See Pioneers' →" linking to `/software`.

Right card — Custom App. Navy/gold palette. Gold accent border on top. Body: _"For schools building a legacy. A system built entirely around your operations, on your own domain."_ Key points: Fully bespoke, ~3 month deployment, .edu.gh domain, License-to-own licensing from GHS 30,000. CTA: "See Custom App →" linking to `/software#custom`.

**Section 6 — Testimonials**
White background. Label: "WHAT SCHOOL HEADS SAY". Three placeholder cards in Novo's testimonial style. Each card: a gray circle avatar placeholder (60px), bold pull-quote in large text (22–24px), school head name and school name below. Comment: `{/* TODO: replace with real testimonial from school head */}`. Add three placeholder quotes that sound plausible for a Ghanaian school context (not generic — write them as if a Ghanaian school proprietor said them).

**Section 7 — CTA Banner**
Full-width navy (#1A3C5E). Centred. Large white text: _"120 schools are already on Schoolpedia."_ Below: _"Be one of the first on Pioneers' Software."_ Single CTA button: "Register Your School" — white fill, navy text. Links to `/contact`.

---

### Phase 3 — `/software`

This page has two distinct visual modes separated by a clear divider or tab system. Use a sticky section nav at the top that scrolls between "Pioneers' Software" and "Custom App" as the user scrolls (or use tab switching — choose whichever is cleaner).

**Pioneers' Software section — blue/green palette:**

Hero: Navy background. Label: "PIONEERS' SOFTWARE". Headline: _"Your school, running digitally. Free to start."_ Sub: _"A shared ERP platform built for schools that need to modernise without a large upfront investment."_

Who it's for: White section. Three-column cards: private basic schools, private SHS, vocational and technical schools.

School Administration Module — Free: Green callout banner full-width. Large text: _"The Core Administration Module is free for every school. Always."_ Below: six feature tiles in a 2×3 or 3×2 grid:

- Admissions Management
- Student Information System
- Health Records
- Staff Communication
- Automated Timetable Scheduling
- Basic Fee Billing & Paystack Collection

Each tile: small icon (or none), feature name in bold, one sentence description.

ParentAide + Schoolpedia bundled: A callout strip in light blue: _"Every Pioneers' school also gets ParentAide for parents and a verified Schoolpedia profile — at no extra cost."_

Add-on Modules: Surface background. Label: "PAID ADD-ONS". Heading: _"Activate more when you're ready."_ Eight module cards in a 4×2 grid (or responsive 2-col on mobile):

| Module                       | Price                    |
| ---------------------------- | ------------------------ |
| Classroom & Exam Management  | GHS 2–3 / student / term |
| HR Management                | GHS 2–3 / student / term |
| Hostel & Boarding Management | GHS 3–4 / student / term |
| Finance Management           | GHS 3–4 / student / term |
| Transportation & Safety      | GHS 2–3 / student / term |
| E-commerce & Inventory       | GHS 2 / student / term   |
| Alumni Management            | GHS 1–2 / student / term |

Note below grid: _"Activate 3 or more modules and receive 15% off. Lock in today's prices for 5 years."_

Sample costs table: Show four rows — 100 students / 200 students / 300 students (with 3 modules, 15% disc.) / 400 students (with 4 modules, 15% disc.) — per term and per year.

**Custom App section — navy/gold palette:**

Use `id="custom"` on this section so the footer and nav can deep-link to it.

Hero strip: Very dark navy (#0D1F2D). Gold accent label: "CUSTOM APP". Headline in white: _"A school management system built entirely for your institution."_ Subheadline in muted white: _"Your brand. Your domain. Your data. Built from the ground up."_

Who it's for: Three cards — established private schools, international schools, school chains and groups.

What you get: Ten-row feature table matching the product spec document:
01 Bespoke System Design, 02 Cinematic School Website, 03 Your Own .edu.gh Domain, 04 Full Data Ownership, 05 ParentAide Integration, 06 Schoolpedia Verified Profile, 07 AI-Powered Analytics, 08 Hardware Procurement Support, 09 Full Staff Training, 10 Annual Maintenance.

Delivery platforms pricing table: Web PWA (GHS 30,000+), Web + Mobile (custom quote), Web + Desktop (custom quote), Web + Mobile + Desktop (custom quote), Desktop Only (custom quote).

School chains note: A callout box. _"Managing multiple campuses? We build centralised board dashboards that give leadership real-time visibility across every branch."_

Timeline: Five-phase table: Discovery (Week 1–2), Design (Week 2–4), Development (Week 4–10), Testing (Week 10–11), Deployment & Training (Week 11–12).

**Comparison table** (bottom of page, white background):
14-row comparison table covering: Best for, Starting cost, Ongoing cost, Own domain, Data ownership, Deployment time, Website included, AI analytics, ParentAide, Schoolpedia profile, Hardware support, Staff training, 5-year price lock, Customisation.

---

### Phase 4 — `/parentaide`

Hero: White background with a large accent blue headline: _"Everything about your child's school. In your pocket."_ Sub: _"ParentAide connects parents to their child's school — for free."_

Eight-feature grid (2×4 on desktop, 1-col on mobile). Each feature: icon placeholder, bold name, one-sentence description:

1. Fee & Bill Payments — _"Pay school fees directly from your phone via the ParentAide Wallet."_
2. School Communication — _"Receive announcements, notices, and emergency alerts instantly."_
3. Attendance Tracking — _"See when your child is present, late, or absent — in real time."_
4. Academic Performance — _"View report cards, assignments, and grades each term."_
5. Education Marketplace — _"Order books, uniforms, and school supplies before term starts."_
6. School Enrolment — _"Find schools on Schoolpedia and apply directly through the app."_
7. Scholarship Discovery — _"Browse bursaries and scholarships available for your child."_
8. Bus & Pickup Safety — _"Get notified when your child boards or leaves the school bus."_

Wallet explainer section: Navy background. Heading: _"One wallet. Every school payment."_ Three steps horizontally: Top up via Paystack → Pay fees and bills instantly → Buy from the marketplace. Clean, simple, no decorative elements.

Marketplace section: White background. Heading: _"The school marketplace, in your hands."_ Two sub-cards: School Stores (_"Buy directly from your child's school — books, uniforms, and provisions, ready before term starts."_) and Third-Party Vendors (_"Bookshops, suppliers, and education brands all in one place."_).

Download CTA: Full-width navy banner. _"ParentAide is coming soon."_ Two placeholder buttons (App Store and Google Play) in disabled/greyed state with "Coming Soon" labels. Comment: `{/* TODO: replace with real store links when app is live */}`.

---

### Phase 5 — `/schoolpedia`

This page already exists. Rewrite its content completely.

Hero: Accent blue background. Headline: _"Find the right school. Know what you're choosing."_ Sub: _"Schoolpedia maps every school in Ghana — so parents can search, compare, and decide with confidence."_ CTA: "Search Schools" linking to schoolpedia.edcomrade.com.

For Parents section: White. Three columns — Search (find schools by location, type, fees), Compare (side-by-side comparison of any two schools), Enrol (apply directly through the platform via ParentAide).

For Schools section: Navy background. Heading: _"Your school's public profile. Built and verified by Edcomrade."_ Three benefits: Verified profile parents trust, PR platform for achievements and news, Visibility when parents search your area.

Stats strip: Light surface. Four stats side by side:

- 120+ Schools Listed (mark `{/* TODO: connect to DB School count */}`)
- 30+ Verified Schools (mark `{/* TODO: connect to DB */}`)
- Free for every school to list
- Powered by Pioneers' Software

Bottom CTA: _"Every school on Pioneers' Software gets a free verified Schoolpedia profile."_ Link to `/software`.

---

### Phase 6 — `/about`

Hero: White. Large navy headline: _"Built in Ghana. Built for Africa."_

Founding story section: One flowing text section — not bullet points. Tell the story properly: Solomon took his nephew to a boarding school in 2023, the admissions process took four days of paper forms, entrance exams, and manual purchases, and as an incoming third-year CS student at KNUST he decided to build a solution. His supervised mini project became the MVP. He interviewed the headmaster at KNUST Basic School and the school he had enrolled his nephew in (Hecta International School). He chose to build a company instead of deploying to one school.

Mission block: Navy background. Large white text: _"We modernise African schools. We centre education around parents. We make excellence visible."_

Team section: Two cards — Solomon A. Ayisi (CEO & Founder) and Prince Sarfo (CTO & Co-Founder). Each card: circular avatar placeholder, name, role, one sentence. Comment: `{/* TODO: add real photos */}`. Below the two founder cards: a row of blank placeholder cards for the broader team with comment: `{/* TODO: add team members */}`.

Vision section: Surface background. Three horizon cards:

- Horizon 1 (2025–2027): 100+ schools on Pioneers', Schoolpedia as Ghana's go-to school search platform, GHS 200,000 ARR
- Horizon 2 (2027–2030): 10,000 schools, 3 million users, education financing and insurance, pan-African presence
- Horizon 3 (2030+): Edcomrade boarding facilities, foreign exchange programmes, $5M ARR

---

### Phase 7 — `/edmedia`

Hero: White. Headline: _"Visibility for schools that deserve to be seen."_ Sub: _"EdMedia is Edcomrade's media and publishing arm — helping educational institutions build their public identity."_

Services grid (3×2): Digital Magazine, Social Media Management, School Event Coverage, Brand Consultation, Education Advertising, PR and Media Outreach. Each: bold name, two-sentence description.

Magazine section: Navy background. _"The Edcomrade Education Magazine spotlights schools leading in innovation and social responsibility."_ Placeholder for issue covers: three gray rectangles with `aspect-[3/4]` and comment `{/* TODO: add magazine cover images */}`.

Enquiry CTA: _"Want EdMedia working for your school?"_ Link to `/contact` with a pre-filled query param `?subject=edmedia` if possible.

---

### Phase 8 — `/contact` and MongoDB

**Contact model update:** The agent's proposed change is approved with one addition. The updated `Contact` model should have:

- `name` (string, required) — merged from firstName/lastName
- `email` (string, required)
- `phone` (string, optional) — add this field, it is important for Ghana where WhatsApp follow-up is the norm
- `schoolName` (string, optional)
- `role` (enum: `proprietor | parent | student | partner | other`, required)
- `subject` (string, optional) — to capture the pre-filled param from EdMedia and other pages
- `message` (string, required)
- `createdAt` (Date, default: Date.now)

Update the admin contacts view to reflect the new field names.

**Contact page:** Clean, simple. Two-column on desktop: left column has the form, right column has contact information (email, WhatsApp link, office address: New Legon, Accra, Ghana, West Africa). Form fields in order: Full Name, Email, Phone (optional), I am a... (role selector as radio or select), School Name (optional, appears when role is proprietor), Subject (pre-filled if query param present), Message. Submit button: "Send Message" in navy. Success state: replace form with a confirmation message _"Thank you. We will be in touch shortly — usually within one business day."_

---

## Items That Remain Unchanged

- All `/admin/*` routes — untouched
- All `/api/*` routes except `/api/contact` which gets the model update above
- `/manifesto` — keep route and content, add to footer under Company
- `/community` and `/technology` — keep routes alive, remove from nav, no content changes
- `/schools`, `/parents`, `/how-it-works` — keep routes alive with a simple redirect to the relevant new page (`/schools` → `/software`, `/parents` → `/parentaide`, `/how-it-works` → `/`) so inbound links do not break
- Existing WhatsApp button, BackToTop, ScrollProgress — keep in root layout
- CustomCursor and BackgroundBlobs — remove from root layout or make opt-in per page. They clash with the clean Novo-inspired aesthetic. A cursor effect and floating blobs will conflict with the editorial feel being built.
- Noise texture — keep, very subtle, adds depth without visual noise

---

## Build Order Confirmation

Proceed in exactly this order. Run `pnpm run build` and visually verify at 1440px and 390px after each phase before proceeding:

1. globals.css colour tokens + remove CustomCursor and BackgroundBlobs from root layout
2. Navigation and Footer
3. Homepage
4. `/software`
5. `/parentaide`
6. `/schoolpedia`
7. `/about`
8. `/edmedia`
9. `/contact` + Contact model + API update + admin contacts view update
10. Redirects for `/schools`, `/parents`, `/how-it-works`
