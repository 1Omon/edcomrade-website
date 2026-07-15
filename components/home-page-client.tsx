"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

/* ─────────────────────────────────────────────
   Reusable section label (small ALL-CAPS above heading)
───────────────────────────────────────────── */
function Label({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="text-[11px] font-semibold uppercase text-[#2E8BC0] mb-2"
      style={{ letterSpacing: "0.12em" }}
    >
      {children}
    </p>
  );
}

/* ─────────────────────────────────────────────
   Section 1 — HERO
   Split layout: left 55% text, right 45% photo
───────────────────────────────────────────── */
function HeroSection() {
  return (
    <section className="bg-[#1A3C5E] pt-24 pb-16 md:py-32 px-6 md:px-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[55fr_45fr] gap-12 md:gap-16 items-start">
        {/* Left — text */}
        <div>
          {/* Hero headline — tight leading and letter-spacing is critical */}
          <h1
            className="font-extrabold text-white"
            style={{
              fontSize: "clamp(56px, 8vw, 96px)",
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
            }}
          >
            Your school&apos;s
            <br />
            <span className="text-[#2E8BC0]">ally</span> in the
            <br />
            digital age.
          </h1>

          {/* Subheadline */}
          <p
            className="text-[#CBD5E1] mt-6 max-w-[480px]"
            style={{ fontSize: 18, lineHeight: 1.7 }}
          >
            Modernising schools, connecting parents, and putting every
            institution on the map.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#1A3C5E] px-6 py-3 rounded-lg font-semibold transition-colors hover:bg-gray-100"
              style={{ fontSize: 15 }}
            >
              Get Started <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="https://schoolpedia.edcomrade.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border text-white px-6 py-3 rounded-lg font-semibold transition-colors hover:bg-white/10"
              style={{
                fontSize: 15,
                borderWidth: "1.5px",
                borderColor: "rgba(255,255,255,0.4)",
              }}
            >
              Explore Schoolpedia
            </Link>
          </div>
        </div>

        {/* Right — photograph placeholder */}
        <div className="hidden md:block">
          <div
            className="w-full bg-[#1E3A52] rounded-xl overflow-hidden flex items-center justify-center"
            style={{ aspectRatio: "3/4" }}
          >
            {/* TODO: replace with real school photography */}
            <p className="text-white/20 text-xs uppercase tracking-widest">
              School photo
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Section 2 — TRUST STRIP
   Static stat strip between hero and first section
───────────────────────────────────────────── */
function TrustStrip() {
  const stats = [
    "120 schools on Schoolpedia",
    "30 verified schools",
    "2–4 week deployment",
    "Free to start",
  ];

  return (
    <div className="bg-white border-b border-[#E5E7EB] py-4 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
          {stats.map((s, i) => (
            <span
              key={i}
              className="text-[#2E8BC0] font-semibold"
              style={{ fontSize: 13, letterSpacing: "0.08em" }}
            >
              {s}
              {i < stats.length - 1 && (
                <span className="text-gray-300 ml-8 hidden sm:inline">·</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Section 3 — PROBLEM
   White bg, 3 cards with bold stat + one sentence
───────────────────────────────────────────── */
function ProblemSection() {
  const cards = [
    {
      stat: "9 in 10",
      copy: "schools still run on paper registers and spreadsheets.",
    },
    {
      stat: "Most",
      copy: "parents have no direct digital connection to their child's school.",
    },
    {
      stat: "Majority",
      copy: "of schools have no online presence that parents can find.",
    },
  ];

  return (
    <section className="bg-white py-20 md:py-24 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <Label>The Reality Today</Label>
        <h2
          className="font-bold text-[#1A3C5E]"
          style={{
            fontSize: "clamp(32px, 4vw, 48px)",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          Ghana&apos;s schools deserve
          <br className="hidden md:block" /> better tools.
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {cards.map((c, i) => (
            <div key={i} className="bg-[#F0F4F8] rounded-xl p-6">
              <p
                className="font-extrabold text-[#1A3C5E] mb-3"
                style={{
                  fontSize: "clamp(36px, 5vw, 52px)",
                  lineHeight: 1,
                  letterSpacing: "-0.02em",
                }}
              >
                {c.stat}
              </p>
              <p
                className="text-gray-600"
                style={{ fontSize: 17, lineHeight: 1.7 }}
              >
                {c.copy}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Section 4 — ECOSYSTEM
   Navy bg, 3 cards with slightly lighter fill
───────────────────────────────────────────── */
function EcosystemSection() {
  const depts = [
    {
      num: "01",
      name: "School ERP Systems",
      desc: "Software that runs your school. Pioneers' Software, Custom App, and ParentAide.",
      href: "/software",
      label: "Explore Software",
    },
    {
      num: "02",
      name: "Schoolpedia",
      desc: "Ghana's school intelligence platform. Parents search here. Schools are found here.",
      href: "https://schoolpedia.edcomrade.com",
      label: "Visit Schoolpedia",
      external: true,
    },
    {
      num: "03",
      name: "EdMedia",
      desc: "Visibility for schools that deserve to be seen. Media, magazine, and brand.",
      href: "/edmedia",
      label: "Learn More",
    },
  ];

  return (
    <section className="bg-[#1A3C5E] py-20 md:py-24 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <Label>The Edcomrade Ecosystem</Label>
        <h2
          className="font-bold text-white"
          style={{
            fontSize: "clamp(32px, 4vw, 48px)",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          Three departments.
          <br className="hidden md:block" /> One mission.
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {depts.map((d) => (
            <div
              key={d.num}
              className="bg-[#1E3A52] rounded-xl p-6 flex flex-col"
            >
              <span
                className="font-semibold text-[#2E8BC0] mb-4"
                style={{ fontSize: 11, letterSpacing: "0.12em" }}
              >
                {d.num}
              </span>
              <h3
                className="font-semibold text-white mb-3"
                style={{ fontSize: 20, lineHeight: 1.3 }}
              >
                {d.name}
              </h3>
              <p
                className="text-white/60 flex-1 mb-6"
                style={{ fontSize: 15, lineHeight: 1.7 }}
              >
                {d.desc}
              </p>
              <Link
                href={d.href}
                target={d.external ? "_blank" : undefined}
                rel={d.external ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-1.5 font-semibold text-[#2E8BC0] hover:gap-3 transition-all"
                style={{ fontSize: 14 }}
              >
                {d.label} <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Section 5 — HOW IT WORKS
   Tabbed left/right panel — Novo's stacked card pattern
───────────────────────────────────────────── */
const HOW_ITEMS = [
  {
    id: "pioneers",
    title: "Pioneers' Software",
    desc: "Your school runs digitally from day one. Free school administration module, 2–4 week deployment.",
    href: "/software",
    panelBg: "#EAF4FD",
    panelLabel: "School Admin Portal",
  },
  {
    id: "parentaide",
    title: "ParentAide",
    desc: "Parents stay connected from their phone. Fees, grades, attendance, marketplace.",
    href: "/parentaide",
    panelBg: "#E8F5EE",
    panelLabel: "ParentAide App",
  },
  {
    id: "schoolpedia",
    title: "Schoolpedia",
    desc: "Your school gets found by searching parents. Verified profile, searchable map.",
    href: "/schoolpedia",
    panelBg: "#1A3C5E",
    panelLabel: "Schoolpedia Directory",
  },
];

function HowItWorksSection() {
  const [active, setActive] = useState("pioneers");
  const panel = HOW_ITEMS.find((i) => i.id === active)!;

  return (
    <section className="bg-white py-20 md:py-24 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <Label>How Edcomrade Works</Label>
        <h2
          className="font-bold text-[#1A3C5E] mb-12"
          style={{
            fontSize: "clamp(32px, 4vw, 48px)",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          One ecosystem. Three ways
          <br className="hidden md:block" /> to help your school.
        </h2>

        <div className="grid md:grid-cols-[1fr_1fr] gap-8 items-start">
          {/* Left — stacked items */}
          <div className="flex flex-col gap-1">
            {HOW_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => setActive(item.id)}
                className={[
                  "text-left px-5 py-5 rounded-xl transition-all border-l-[3px]",
                  active === item.id
                    ? "border-[#2E8BC0] bg-[#F0F4F8]"
                    : "border-transparent hover:bg-[#F9FAFB]",
                ].join(" ")}
              >
                <p
                  className={[
                    "font-semibold mb-1 transition-colors",
                    active === item.id ? "text-[#1A3C5E]" : "text-gray-700",
                  ].join(" ")}
                  style={{ fontSize: 18, lineHeight: 1.3 }}
                >
                  {item.title}
                </p>
                <p
                  className="text-gray-500 mb-3"
                  style={{ fontSize: 15, lineHeight: 1.6 }}
                >
                  {item.desc}
                </p>
                <Link
                  href={item.href}
                  className="text-[#2E8BC0] font-semibold hover:underline"
                  style={{ fontSize: 14 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  Learn more →
                </Link>
              </button>
            ))}
          </div>

          {/* Right — panel */}
          <div
            className="hidden md:flex items-center justify-center rounded-xl"
            style={{
              aspectRatio: "4/5",
              background: panel.panelBg,
              transition: "background 0.2s",
            }}
          >
            {/* TODO: replace with product screenshot */}
            <p
              className="font-semibold"
              style={{
                fontSize: 13,
                letterSpacing: "0.08em",
                color:
                  panel.id === "schoolpedia"
                    ? "rgba(255,255,255,0.4)"
                    : "#9CA3AF",
              }}
            >
              {panel.panelLabel}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Section 6 — PRODUCTS
   Two large side-by-side cards
───────────────────────────────────────────── */
function ProductsSection() {
  const bullets = {
    pioneers: [
      "Free school administration module — forever",
      "2–4 week deployment",
      "Per-student, per-term add-ons",
      "5-year price lock",
    ],
    custom: [
      "Fully bespoke — nothing shared",
      "~3 month deployment",
      "Your own .edu.gh domain",
      "License-to-own from GHS 30,000",
    ],
  };

  return (
    <section className="bg-[#F0F4F8] py-20 md:py-24 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <Label>Our Software</Label>
        <h2
          className="font-bold text-[#1A3C5E] mb-12"
          style={{
            fontSize: "clamp(32px, 4vw, 48px)",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          Two ways to modernise your school.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Pioneers' */}
          <div className="bg-white rounded-xl overflow-hidden flex flex-col">
            <div className="bg-[#1A3C5E] px-6 py-5">
              <span className="inline-block bg-[#E8F5EE] text-[#1B5E20] text-[12px] font-semibold px-3 py-1 rounded-full mb-3">
                Free to start
              </span>
              <h3
                className="font-bold text-white"
                style={{
                  fontSize: 20,
                  lineHeight: 1.3,
                  letterSpacing: "-0.01em",
                }}
              >
                Pioneers&apos; Software
              </h3>
            </div>
            <div className="p-6 flex flex-col flex-1">
              <p
                className="text-gray-600 mb-6"
                style={{ fontSize: 15, lineHeight: 1.7 }}
              >
                For schools ready to digitise now. The school administration
                module is free — forever. Add more when you&apos;re ready.
              </p>
              <ul className="space-y-2.5 flex-1 mb-8">
                {bullets.pioneers.map((b) => (
                  <li
                    key={b}
                    className="flex items-center gap-3 text-gray-700"
                    style={{ fontSize: 14 }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2E8BC0] flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
              <Link
                href="/software"
                className="inline-flex items-center gap-2 font-semibold text-[#1A3C5E] hover:gap-4 transition-all"
                style={{ fontSize: 14 }}
              >
                See Pioneers&apos; <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Custom App — gold accent on top */}
          <div
            className="bg-white rounded-xl overflow-hidden flex flex-col"
            style={{ borderTop: "3px solid #B8973A" }}
          >
            <div className="bg-[#0D1F2D] px-6 py-5">
              <span
                className="inline-block text-[#B8973A] font-semibold mb-3"
                style={{ fontSize: 11, letterSpacing: "0.12em" }}
              >
                CUSTOM APP
              </span>
              <h3
                className="font-bold text-white"
                style={{
                  fontSize: 20,
                  lineHeight: 1.3,
                  letterSpacing: "-0.01em",
                }}
              >
                Built for your school alone.
              </h3>
            </div>
            <div className="p-6 flex flex-col flex-1">
              <p
                className="text-gray-600 mb-6"
                style={{ fontSize: 15, lineHeight: 1.7 }}
              >
                For schools building a legacy. A system built entirely around
                your operations, on your own domain.
              </p>
              <ul className="space-y-2.5 flex-1 mb-8">
                {bullets.custom.map((b) => (
                  <li
                    key={b}
                    className="flex items-center gap-3 text-gray-700"
                    style={{ fontSize: 14 }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B8973A] flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
              <Link
                href="/software#custom"
                className="inline-flex items-center gap-2 font-semibold text-[#B8973A] hover:gap-4 transition-all"
                style={{ fontSize: 14 }}
              >
                See Custom App <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Section 7 — TESTIMONIALS
   Novo card pattern: photo → label → heading → quote → name
───────────────────────────────────────────── */
const TESTIMONIALS = [
  {
    label: "Pioneer school, 2025",
    heading: "The admissions chaos is finally gone.",
    quote:
      "We used to spend the first two weeks of every term buried in application forms. With Pioneers', it all happens before school even starts.",
    name: "Madam Abena Asante",
    role: "Headmistress, [School Name Placeholder], Accra",
  },
  {
    label: "Pioneer school, 2025",
    heading: "Parents actually know what's happening now.",
    quote:
      "Before Edcomrade, parents only heard from us when there was a problem. Now they see everything — fees, grades, attendance — from their phone.",
    name: "Mr. Joseph Acheampong",
    role: "Proprietor, [School Name Placeholder], Kumasi",
  },
  {
    label: "Pioneer school, 2025",
    heading: "Setup was done in less than three weeks.",
    quote:
      "I expected months of back and forth. Our staff were trained and the system was live before the term started. I wasn't expecting that.",
    name: "Mrs. Efua Mensah-Boateng",
    role: "Head Teacher, [School Name Placeholder], Takoradi",
  },
];

function TestimonialsSection() {
  return (
    <section className="bg-white py-20 md:py-24 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2
          className="font-bold text-[#1A3C5E] mb-12"
          style={{
            fontSize: "clamp(32px, 4vw, 48px)",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          What school heads are saying.
        </h2>

        {/* Horizontal scroll on mobile, 3-col on desktop */}
        <div className="flex gap-6 overflow-x-auto pb-4 md:grid md:grid-cols-3 md:overflow-visible scrollbar-hide">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[280px] md:w-auto flex flex-col"
            >
              {/* TODO: replace with real testimonial from school head */}
              {/* Photo placeholder */}
              <div
                className="w-full bg-[#F0F4F8] rounded-xl mb-3"
                style={{ aspectRatio: "1/1" }}
              />

              <p className="text-gray-400 mt-3" style={{ fontSize: 12 }}>
                {t.label}
              </p>
              <h3
                className="font-bold text-[#1A3C5E] mt-2"
                style={{
                  fontSize: 20,
                  lineHeight: 1.3,
                  letterSpacing: "-0.01em",
                }}
              >
                &ldquo;{t.heading}&rdquo;
              </h3>
              <p
                className="text-gray-600 mt-2"
                style={{ fontSize: 15, lineHeight: 1.7 }}
              >
                {t.quote}
              </p>
              <p
                className="font-semibold text-gray-900 mt-3"
                style={{ fontSize: 14 }}
              >
                {t.name}
              </p>
              <p className="text-gray-400" style={{ fontSize: 13 }}>
                {t.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Section 8 — FEATURE LIST
   Dark navy, 4 clickable rows with border separator
───────────────────────────────────────────── */
const FEATURES = [
  {
    name: "School ERP Systems",
    desc: "Software that runs your school from admissions to alumni.",
    href: "/software",
  },
  {
    name: "Schoolpedia",
    desc: "Ghana's school discovery platform. Be found. Be verified.",
    href: "/schoolpedia",
  },
  {
    name: "ParentAide",
    desc: "The parent app. Fees, grades, communication, marketplace.",
    href: "/parentaide",
  },
  {
    name: "EdMedia",
    desc: "Visibility and media for schools building their brand.",
    href: "/edmedia",
  },
];

function FeatureListSection() {
  return (
    <section className="bg-[#1A3C5E] py-20 md:py-24 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <Label>What We Offer</Label>
        <h2
          className="font-bold text-white mb-10"
          style={{
            fontSize: "clamp(32px, 4vw, 48px)",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          Everything a modern school needs.
        </h2>

        <div>
          {FEATURES.map((f, i) => (
            <Link
              key={i}
              href={f.href}
              className="flex items-center justify-between gap-4 group transition-colors hover:bg-white/5"
              style={{
                padding: "20px 0",
                borderBottom:
                  i < FEATURES.length - 1
                    ? "1px solid rgba(255,255,255,0.1)"
                    : undefined,
              }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6">
                <span
                  className="font-semibold text-white"
                  style={{ fontSize: 18, minWidth: 220 }}
                >
                  {f.name}
                </span>
                <span className="text-white/60" style={{ fontSize: 15 }}>
                  {f.desc}
                </span>
              </div>
              <ArrowRight className="w-5 h-5 text-white/40 group-hover:text-white/70 flex-shrink-0 transition-colors" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Section 9 — CTA BANNER
   Navy, centred, one statement + one button
───────────────────────────────────────────── */
function CTABanner() {
  return (
    <section className="bg-[#1A3C5E] border-t border-white/10 py-20 md:py-24 px-6 md:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2
          className="font-extrabold text-white"
          style={{
            fontSize: "clamp(28px, 4vw, 48px)",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          120 schools on Schoolpedia.
          {/* TODO: connect to live DB school count */}
        </h2>
        <p
          className="mt-2"
          style={{ fontSize: 18, color: "rgba(255,255,255,0.7)" }}
        >
          Be one of the first schools live on Pioneers&apos; Software.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-white text-[#1A3C5E] font-semibold rounded-lg hover:bg-gray-100 transition-colors mt-8"
          style={{ fontSize: 15, padding: "14px 32px" }}
        >
          Register Your School
        </Link>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Page composition
───────────────────────────────────────────── */
export default function HomePageClient() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <TrustStrip />
      <ProblemSection />
      <EcosystemSection />
      <HowItWorksSection />
      <ProductsSection />
      <TestimonialsSection />
      <FeatureListSection />
      <CTABanner />
      <Footer />
    </div>
  );
}
