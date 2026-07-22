"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, Layers, Smartphone, Globe, Sparkles } from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

/* ─────────────────────────────────────────────
   Reusable section label (small ALL-CAPS above heading)
───────────────────────────────────────────── */
function Label({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2E8BC0]/10 text-[#2E8BC0] text-[11px] font-bold uppercase tracking-wider mb-3 shadow-xs">
      <Sparkles className="w-3 h-3" />
      <span>{children}</span>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Section 1 — HERO
───────────────────────────────────────────── */
function HeroSection() {
  return (
    <section className="bg-[#1A3C5E] pt-32 pb-20 md:pt-40 md:pb-28 px-6 md:px-8 relative overflow-hidden">
      {/* Soft clay background glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#2E8BC0]/20 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#B8973A]/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-[58fr_42fr] gap-12 md:gap-16 items-center relative z-10">
        {/* Left — text */}
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-white/90 text-[12px] font-bold uppercase tracking-wider mb-6 border border-white/15 backdrop-blur-sm shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#2E8BC0] animate-pulse" />
            Modernizing African Education
          </div>

          <h1
            className="font-extrabold text-white"
            style={{
              fontSize: "clamp(48px, 7vw, 88px)",
              lineHeight: 0.96,
              letterSpacing: "-0.03em",
            }}
          >
            Your school&apos;s
            <br />
            <span className="text-[#2E8BC0]">ally</span> in the
            <br />
            digital age.
          </h1>

          <p
            className="text-white/80 mt-6 max-w-[500px]"
            style={{ fontSize: 19, lineHeight: 1.6 }}
          >
            Edcomrade modernises schools across Ghana — giving every institution the software, visibility, and parent connectivity it needs to thrive.
          </p>

          {/* Clay CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mt-9">
            <Link
              href="/contact"
              className="clay-btn clay-btn-white px-7 py-3.5 text-[15px] gap-2 font-bold"
            >
              Get Started <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="https://schoolpedia.edcomrade.com"
              target="_blank"
              rel="noopener noreferrer"
              className="clay-btn clay-btn-outline-white px-7 py-3.5 text-[15px] font-semibold"
            >
              Explore Schoolpedia ↗
            </Link>
          </div>
        </div>

        {/* Right — Elevated Clay Card Graphic */}
        <div className="hidden md:block">
          <div className="clay-card-dark p-8 relative overflow-hidden border border-white/15">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#2E8BC0] flex items-center justify-center text-white font-bold text-sm shadow-xs">
                  EC
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">Ghana School Network</h4>
                  <p className="text-white/50 text-xs">Live Digital Dashboard</p>
                </div>
              </div>
              <span className="clay-badge bg-[#E8F5EE] text-[#1B5E20]">Live Status</span>
            </div>

            <div className="space-y-4">
              <div className="clay-surface bg-[#162C40] p-4 rounded-xl text-white">
                <div className="flex items-center justify-between text-xs text-white/60 mb-1">
                  <span>Schools Listed</span>
                  <span className="text-[#2E8BC0] font-bold">120+ Institutions</span>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="w-[85%] h-full bg-[#2E8BC0] rounded-full" />
                </div>
              </div>

              <div className="clay-surface bg-[#162C40] p-4 rounded-xl text-white">
                <div className="flex items-center justify-between text-xs text-white/60 mb-1">
                  <span>Parent Connection</span>
                  <span className="text-[#1B5E20] font-bold">Instant Updates</span>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="w-[92%] h-full bg-emerald-500 rounded-full" />
                </div>
              </div>

              <div className="p-4 rounded-xl bg-gradient-to-r from-[#2E8BC0]/20 to-[#B8973A]/20 border border-white/10 flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-[#B8973A] flex-shrink-0" />
                <div>
                  <h5 className="text-xs font-bold text-white">Verified School Profiles</h5>
                  <p className="text-[11px] text-white/60">Automated directory & verified badges</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Section 2 — TRUST STRIP
───────────────────────────────────────────── */
function TrustStrip() {
  const stats = [
    { label: "120+ Schools Listed", sub: "on Schoolpedia" },
    { label: "30+ Verified", sub: "Verified Profiles" },
    { label: "2–4 Weeks", sub: "Pioneers' Deployment" },
    { label: "Permanent Free Tier", sub: "Core Admin Module" },
  ];

  return (
    <div className="bg-[#F4F7FA] border-y border-[#E5E7EB] py-6 px-6 md:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((s, i) => (
          <div key={i} className="clay-card p-4">
            <p className="font-extrabold text-[#1A3C5E] text-lg md:text-xl">{s.label}</p>
            <p className="text-xs text-gray-500 font-medium">{s.sub}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Section 3 — PROBLEM
───────────────────────────────────────────── */
function ProblemSection() {
  const cards = [
    {
      stat: "9 in 10",
      title: "Paper Dependency",
      copy: "schools in Ghana still rely on manual paper registers, physical receipts, and spreadsheets.",
    },
    {
      stat: "85%",
      title: "Parent Isolation",
      copy: "of parents have no direct digital connection to track attendance, grades, or fee balances.",
    },
    {
      stat: "75%",
      title: "Zero Web Presence",
      copy: "of private schools have no search-optimized online listing for enrolling parents to discover.",
    },
  ];

  return (
    <section className="bg-white py-20 md:py-28 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <Label>The Reality Today</Label>
        <h2
          className="font-bold text-[#1A3C5E] max-w-2xl"
          style={{
            fontSize: "clamp(32px, 4vw, 48px)",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          Ghana&apos;s schools deserve better tools.
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {cards.map((c, i) => (
            <div key={i} className="clay-surface p-7 flex flex-col justify-between clay-card-hover">
              <div>
                <p
                  className="font-extrabold text-[#1A3C5E] mb-2"
                  style={{
                    fontSize: "clamp(40px, 5vw, 56px)",
                    lineHeight: 1,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {c.stat}
                </p>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{c.title}</h3>
                <p className="text-gray-600 text-[15px] leading-relaxed">
                  {c.copy}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-200/60 flex items-center justify-between text-xs font-semibold text-[#2E8BC0]">
                <span>Edcomrade Solution Available</span>
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Section 4 — ECOSYSTEM
───────────────────────────────────────────── */
function EcosystemSection() {
  const depts = [
    {
      num: "DEPARTMENT 01",
      name: "School ERP Systems",
      desc: "Comprehensive management software. Pioneers' Software, Custom App, and ParentAide app.",
      href: "/software",
      label: "Explore Software",
      icon: Zap,
      color: "#2E8BC0",
    },
    {
      num: "DEPARTMENT 02",
      name: "Schoolpedia Platform",
      desc: "Ghana's premier school intelligence directory. Parents search, compare, and enrol.",
      href: "https://schoolpedia.edcomrade.com",
      label: "Visit Schoolpedia",
      icon: Globe,
      external: true,
      color: "#1B5E20",
    },
    {
      num: "DEPARTMENT 03",
      name: "EdMedia & Publishing",
      desc: "Strategic visibility for leading institutions. Digital magazine, event coverage, and branding.",
      href: "/edmedia",
      label: "Learn More",
      icon: Layers,
      color: "#B8973A",
    },
  ];

  return (
    <section className="bg-[#1A3C5E] py-20 md:py-28 px-6 md:px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <Label>The Edcomrade Ecosystem</Label>
        <h2
          className="font-bold text-white max-w-2xl"
          style={{
            fontSize: "clamp(32px, 4vw, 48px)",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          Three departments.
          <br className="hidden md:block" /> One unified mission.
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-14">
          {depts.map((d) => {
            const Icon = d.icon;
            return (
              <div
                key={d.num}
                className="clay-card-dark p-7 flex flex-col justify-between clay-card-dark-hover"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[11px] font-bold tracking-wider uppercase text-[#2E8BC0]">
                      {d.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white shadow-xs">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-bold text-white text-xl mb-3">
                    {d.name}
                  </h3>
                  <p className="text-white/70 text-[15px] leading-relaxed mb-6">
                    {d.desc}
                  </p>
                </div>

                <Link
                  href={d.href}
                  target={d.external ? "_blank" : undefined}
                  rel={d.external ? "noopener noreferrer" : undefined}
                  className="clay-btn clay-btn-accent w-full py-2.5 text-xs font-bold gap-2"
                >
                  {d.label} <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Section 5 — HOW IT WORKS
───────────────────────────────────────────── */
const HOW_STEPS = [
  {
    step: "STEP 01",
    title: "School Onboarding",
    desc: "Your institution registers for Pioneers' Software (free core admin module) or commissions a bespoke Custom App. Setup takes 2 to 4 weeks.",
    badge: "2–4 Weeks Setup",
  },
  {
    step: "STEP 02",
    title: "Parent Connectivity",
    desc: "Parents download ParentAide on mobile. They top up their in-app wallet via Paystack, pay school fees, track attendance, and view academic reports.",
    badge: "Free Parent Mobile App",
  },
  {
    step: "STEP 03",
    title: "Public Schoolpedia Profile",
    desc: "Your school goes live with a verified Schoolpedia listing. Searching parents in your area discover your admissions, facilities, and excellence.",
    badge: "Ghana-Wide Discovery",
  },
];

function HowItWorksSection() {
  return (
    <section className="bg-white py-20 md:py-28 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Label>How It Works</Label>
          <h2
            className="font-bold text-[#1A3C5E]"
            style={{
              fontSize: "clamp(32px, 4vw, 48px)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            From paper to digital excellence in 3 clear steps.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {HOW_STEPS.map((s, i) => (
            <div key={i} className="clay-card p-8 flex flex-col justify-between relative clay-card-hover">
              <div className="absolute top-6 right-6 font-black text-gray-200 text-4xl select-none">
                0{i + 1}
              </div>

              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#2E8BC0] block mb-2">
                  {s.step}
                </span>
                <h3 className="font-bold text-gray-900 text-xl mb-3">{s.title}</h3>
                <p className="text-gray-600 text-[15px] leading-relaxed mb-6">
                  {s.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <span className="clay-badge bg-[#E8F5EE] text-[#1B5E20]">
                  {s.badge}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Section 6 — PRODUCTS OVERVIEW
───────────────────────────────────────────── */
function ProductsSection() {
  const pioneersBullets = [
    "Core Administration Module — permanently free",
    "Admissions, Student Info System & Health Records",
    "Automated conflict-free Timetable Generator",
    "Fee billing with integrated Paystack collection",
    "Paid add-ons (GHS 1–4 per student/term)",
  ];

  const customBullets = [
    "100% Bespoke architecture built for your school",
    "Deployed on your own .edu.gh domain & servers",
    "Cinematic custom web & mobile design",
    "Dedicated board dashboard & multi-campus analytics",
    "License-to-own licensing starting GHS 30,000",
  ];

  return (
    <section className="bg-[#F4F7FA] py-20 md:py-28 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Label>Our Software</Label>
          <h2
            className="font-bold text-[#1A3C5E]"
            style={{
              fontSize: "clamp(32px, 4vw, 48px)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            Choose the software path that fits your institution.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Pioneers' */}
          <div className="clay-card p-8 md:p-10 flex flex-col justify-between border-t-4 border-t-[#2E8BC0] clay-card-hover">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="clay-badge bg-[#E8F5EE] text-[#1B5E20]">
                  Free Core Admin
                </span>
                <span className="text-xs font-bold text-gray-400">PIONEERS&apos; SOFTWARE</span>
              </div>

              <h3 className="font-bold text-[#1A3C5E] text-2xl mb-3">
                Pioneers&apos; Software
              </h3>
              <p className="text-gray-600 text-[15px] leading-relaxed mb-6">
                Built for schools ready to digitise now without massive upfront software costs. Includes free core administration and modular paid add-ons.
              </p>

              <ul className="space-y-3 mb-8">
                {pioneersBullets.map((b, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-gray-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href="/software"
              className="clay-btn clay-btn-primary w-full py-3 text-sm gap-2"
            >
              Explore Pioneers&apos; Software <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Custom App */}
          <div className="clay-card p-8 md:p-10 flex flex-col justify-between border-t-4 border-t-[#B8973A] bg-white clay-card-hover">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="clay-badge bg-[#B8973A]/15 text-[#B8973A]">
                  Bespoke & Premium
                </span>
                <span className="text-xs font-bold text-gray-400">CUSTOM APP</span>
              </div>

              <h3 className="font-bold text-[#1A3C5E] text-2xl mb-3">
                Custom App
              </h3>
              <p className="text-gray-600 text-[15px] leading-relaxed mb-6">
                Built from the ground up for established private schools, international institutions, and school chains seeking a dedicated digital legacy.
              </p>

              <ul className="space-y-3 mb-8">
                {customBullets.map((b, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-gray-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#B8973A] flex-shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href="/software#custom"
              className="clay-btn clay-btn-gold w-full py-3 text-sm gap-2"
            >
              Explore Custom App <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Section 7 — TESTIMONIALS
───────────────────────────────────────────── */
const TESTIMONIALS = [
  {
    quote: "We used to spend the first two weeks of every term buried in paper application forms. With Pioneers', admissions happen digitally before school opens.",
    name: "Madam Abena Asante",
    role: "Headmistress, Takoradi Pioneer School",
    badge: "Pioneer School",
  },
  {
    quote: "Before Edcomrade, parents only heard from us when fees were overdue. Now they view report cards, fee balances, and attendance right from ParentAide.",
    name: "Mr. Joseph Acheampong",
    role: "Proprietor, Kumasi Academy Network",
    badge: "Verified School",
  },
  {
    quote: "Setup was completed in less than three weeks. Our teachers were fully trained and our Schoolpedia profile was live before the term started.",
    name: "Mrs. Efua Mensah-Boateng",
    role: "Proprietress, Accra Preparatory School",
    badge: "Pioneer School",
  },
];

function TestimonialsSection() {
  return (
    <section className="bg-white py-20 md:py-28 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Label>What School Heads Say</Label>
          <h2
            className="font-bold text-[#1A3C5E]"
            style={{
              fontSize: "clamp(32px, 4vw, 48px)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            Trusted by proprietors across Ghana.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="clay-surface p-8 flex flex-col justify-between clay-card-hover">
              <div>
                <span className="clay-badge bg-white text-[#2E8BC0] mb-4">
                  {t.badge}
                </span>
                <p className="text-gray-700 text-[15px] italic leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-gray-200 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1A3C5E] text-white flex items-center justify-center font-bold text-xs shadow-xs">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">{t.name}</h4>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Section 8 — CTA BANNER
───────────────────────────────────────────── */
function CTABanner() {
  return (
    <section className="bg-[#1A3C5E] text-white py-20 md:py-24 px-6 md:px-8 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <span className="clay-badge bg-white/10 text-white border border-white/20 mb-6">
          120+ Schools Listed
        </span>

        <h2
          className="font-extrabold text-white mb-4"
          style={{
            fontSize: "clamp(32px, 5vw, 56px)",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
          }}
        >
          Be one of the first schools live on Pioneers&apos; Software.
        </h2>

        <p className="text-white/80 text-lg max-w-xl mx-auto mb-8">
          Register your school today to get the free Core Administration Module, ParentAide connectivity, and a verified Schoolpedia listing.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/contact"
            className="clay-btn clay-btn-white px-8 py-3.5 text-[15px] font-bold gap-2"
          >
            Register Your School <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/software"
            className="clay-btn clay-btn-outline-white px-8 py-3.5 text-[15px] font-semibold"
          >
            Compare Software Options
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Page Composition
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
      <CTABanner />
      <Footer />
    </div>
  );
}
