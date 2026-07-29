"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, ShieldCheck, CheckCircle2, Star, BookOpen, Layers, Users, TrendingUp } from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const articles = [
  {
    category: "School Spotlight",
    badgeClass: "mag-badge-cyan",
    headline: "The Accra school that digitised in two weeks — and never looked back.",
    date: "June 2026 · EdMedia",
    excerpt: "When St. Francis Ridge switched to Pioneers' ERP, the bursar was sceptical. Eight days later, she was training staff across 3 campuses.",
    readTime: "4 min read",
  },
  {
    category: "Parent Intelligence",
    badgeClass: "mag-badge-gold",
    headline: "Why Ghanaian parents are choosing verified schools in 2026.",
    date: "May 2026 · EdMedia",
    excerpt: "Schoolpedia data shows verified schools attract 3x more direct admissions enquiries than unverified listings.",
    readTime: "5 min read",
  },
  {
    category: "Digital 100",
    badgeClass: "mag-badge-green",
    headline: "Hecta International becomes inaugural Digital 100 member.",
    date: "April 2026 · EdMedia",
    excerpt: "We documented every step of Hecta's onboarding. Here is what changed in their admissions pipeline in week one.",
    readTime: "3 min read",
  },
];

export default function HomePageClient() {
  return (
    <main style={{ backgroundColor: "var(--color-paper)" }}>
      <Navigation />

      {/* ── 1. HERO SECTION ── */}
      <section style={{ paddingTop: "150px", paddingBottom: "80px", backgroundColor: "var(--color-paper)" }}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Copy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="mag-badge-cyan">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Ghana&apos;s Education Intelligence & Software</span>
              </div>
              
              <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-hero)", lineHeight: 0.95, letterSpacing: "-0.03em", color: "var(--color-navy)", fontWeight: 700 }}>
                The digital home for Ghanaian education.
              </h1>

              <p style={{ fontSize: "var(--text-lg)", color: "var(--color-ink-muted)", lineHeight: 1.75, maxWidth: "600px" }}>
                Edcomrade provides free school management software, connects parents to report cards, and publishes the stories that make African schools legendary.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  href="/software"
                  className="inline-flex items-center justify-center px-7 py-3.5 text-base font-bold text-white bg-[#1A3C5E] hover:bg-[#2E8BC0] rounded-lg shadow-md hover:shadow-lg transition-all gap-2"
                >
                  <span>Explore Pioneers&apos; Free ERP</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/schoolpedia"
                  className="inline-flex items-center justify-center px-7 py-3.5 text-base font-bold text-[#1A3C5E] bg-white border-2 border-[#1A3C5E]/20 hover:border-[#2E8BC0] rounded-lg transition-all gap-2"
                >
                  <span>Search Schoolpedia</span>
                </Link>
              </div>

              {/* Key Trust Signals */}
              <div className="grid sm:grid-cols-3 gap-6 pt-6 border-t border-gray-200">
                <div>
                  <div className="font-serif text-2xl font-bold text-[#1A3C5E]">100% Free</div>
                  <div className="text-xs text-slate-500">Core ERP Module</div>
                </div>
                <div>
                  <div className="font-serif text-2xl font-bold text-[#2E8BC0]">120+</div>
                  <div className="text-xs text-slate-500">Schools Listed</div>
                </div>
                <div>
                  <div className="font-serif text-2xl font-bold text-[#B8973A]">Verified</div>
                  <div className="text-xs text-slate-500">School Profiles</div>
                </div>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5">
              <div className="mag-card p-3 bg-white">
                <div className="img-zoom-container rounded-lg overflow-hidden relative aspect-[4/3]">
                  <Image
                    src="/images/hero-classroom.png"
                    alt="Ghanaian school students learning with digital tablets"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="mag-badge-green">LIVE IN ACCRA</span>
                    <span className="text-xs font-mono text-slate-400">Pioneers&apos; Deployment</span>
                  </div>
                  <p className="font-serif text-lg font-bold text-[#1A3C5E]">
                    Students at St. Francis Ridge using digital lesson materials.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 2. SCROLLING TICKER BAR ── */}
      <section className="bg-[#1A3C5E] text-white py-4 border-y border-white/10 overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 flex flex-wrap justify-between items-center text-xs font-mono gap-4">
          <span className="flex items-center gap-2 text-[#2E8BC0] font-bold">
            <TrendingUp className="w-4 h-4" /> DIGITAL 100 CAMPAIGN
          </span>
          <span className="text-white/80">30 Schools Onboarded in Greater Accra</span>
          <span className="text-[#B8973A] font-bold">5-Year Price Guarantee Active</span>
          <Link href="/software#pioneers" className="text-white hover:text-[#2E8BC0] underline font-bold">
            Register School Today →
          </Link>
        </div>
      </section>

      {/* ── 3. THE THREE PILLARS (ECOSYSTEM) ── */}
      <section style={{ padding: "90px 0", backgroundColor: "var(--color-paper-warm)" }}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="section-header-brand">
            <span className="text-xs font-mono uppercase tracking-widest text-[#2E8BC0] font-bold block mb-2">
              THE EDCOMRADE ECOSYSTEM
            </span>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-4xl)", fontWeight: 700, color: "var(--color-navy)" }}>
              Three connected platforms modernising African education.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1: Pioneers */}
            <div className="mag-card p-8 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#1B5E20]/10 text-[#1B5E20] flex items-center justify-center font-bold">
                  <Layers className="w-6 h-6" />
                </div>
                <span className="mag-badge-green">FOR SCHOOL ADMINISTRATION</span>
                <h3 className="font-serif text-2xl font-bold text-[#1A3C5E]">Pioneers&apos; Free ERP</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Centralised student records, fee billing via Paystack, conflict-free exam scheduling, and staff payroll. Core module permanently free.
                </p>
              </div>
              <div className="pt-6 border-t border-gray-100 mt-6">
                <Link href="/software" className="text-sm font-bold text-[#1B5E20] hover:underline flex items-center gap-1.5">
                  Learn About Pioneers&apos; ERP <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Card 2: Schoolpedia */}
            <div className="mag-card p-8 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#2E8BC0]/10 text-[#2E8BC0] flex items-center justify-center font-bold">
                  <BookOpen className="w-6 h-6" />
                </div>
                <span className="mag-badge-cyan">PUBLIC DISCOVERY</span>
                <h3 className="font-serif text-2xl font-bold text-[#1A3C5E]">Schoolpedia Directory</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Ghana&apos;s verified public school map. Search institutions by fee range, facilities, BECE performance, and curriculum.
                </p>
              </div>
              <div className="pt-6 border-t border-gray-100 mt-6">
                <Link href="/schoolpedia" className="text-sm font-bold text-[#2E8BC0] hover:underline flex items-center gap-1.5">
                  Search Schoolpedia <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Card 3: ParentAide */}
            <div className="mag-card p-8 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#B8973A]/10 text-[#B8973A] flex items-center justify-center font-bold">
                  <Users className="w-6 h-6" />
                </div>
                <span className="mag-badge-gold">PARENT CONNECTIVITY</span>
                <h3 className="font-serif text-2xl font-bold text-[#1A3C5E]">ParentAide Mobile</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Real-time attendance notifications, digital term report sheets, and instant Mobile Money fee payments straight to parents&apos; phones.
                </p>
              </div>
              <div className="pt-6 border-t border-gray-100 mt-6">
                <Link href="/parentaide" className="text-sm font-bold text-[#B8973A] hover:underline flex items-center gap-1.5">
                  Explore ParentAide <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. VISUAL FEATURE SPOTLIGHT — SOFTWARE DASHBOARD ── */}
      <section style={{ padding: "90px 0", backgroundColor: "var(--color-paper)" }}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="mag-badge-cyan">PROPRIETOR CONTROL</span>
              <h2 className="font-serif text-4xl font-bold text-[#1A3C5E] leading-tight">
                Designed for the bursar and proprietor who value precision.
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                No complex training required. Pioneers&apos; ERP brings student bio data, fee ledgers, exam performance, and attendance records into a single clean dashboard built for African internet speeds.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  "Double-entry fee accounting with automated Paystack mobile money receipts",
                  "Automated terminal report sheet generation with grade calculations",
                  "Conflict-free exam & staff timetable generator built in",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#2E8BC0] flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-slate-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Link
                  href="/software"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#1A3C5E] text-white font-bold text-sm hover:bg-[#2E8BC0] transition-colors"
                >
                  <span>View Software Features</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="mag-card p-3">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src="/images/software-dashboard.png"
                    alt="School Management ERP Dashboard interface on laptop"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 5. VISUAL FEATURE SPOTLIGHT — PARENTAIDE ── */}
      <section style={{ padding: "90px 0", backgroundColor: "#EEF4F8" }}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="mag-card p-3">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src="/images/parent-app.png"
                    alt="Ghanaian mother viewing school report card on smartphone"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              <span className="mag-badge-gold">FAMILY TRUST</span>
              <h2 className="font-serif text-4xl font-bold text-[#1A3C5E] leading-tight">
                Give parents peace of mind on their smartphones.
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                ParentAide removes the friction between school and home. Parents receive instant notifications when fee receipts are generated or terminal reports are published by the academic office.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  "Pay school fees instantly via MTN MoMo, Telecel Cash, or Visa card",
                  "Access student report cards and historical performance graphs anytime",
                  "Receive morning attendance roll-call alerts for child safety",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#B8973A] flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-slate-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Link
                  href="/parentaide"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#B8973A] text-white font-bold text-sm hover:bg-[#a08230] transition-colors"
                >
                  <span>Explore ParentAide App</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 6. EDMEDIA MAGAZINE SECTION ── */}
      <section style={{ padding: "90px 0", backgroundColor: "var(--color-paper)" }}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b-2 border-[#2E8BC0] pb-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#2E8BC0] font-bold block mb-2">
                FROM EDMEDIA PUBLISHING
              </span>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-4xl)", fontWeight: 700, color: "var(--color-navy)" }}>
                Stories of excellence in African education.
              </h2>
            </div>
            <Link href="/edmedia" className="text-sm font-bold text-[#2E8BC0] hover:underline mt-4 md:mt-0 flex items-center gap-1">
              View All Articles <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {articles.map((art, i) => (
              <div key={i} className="mag-card p-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className={art.badgeClass}>{art.category}</span>
                    <span className="text-xs font-mono text-slate-400">{art.readTime}</span>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#1A3C5E] leading-snug hover:text-[#2E8BC0] transition-colors cursor-pointer">
                    {art.headline}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {art.excerpt}
                  </p>
                </div>
                <div className="pt-4 border-t border-gray-100 mt-6 text-xs text-slate-400 font-mono">
                  {art.date}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. BOTTOM SEPTEMBER COHORT CTA BANNER ── */}
      <section className="bg-[#1A3C5E] text-white py-20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 text-center space-y-6">
          <span className="mag-badge-gold">LIMITED SEPTEMBER ONBOARDING</span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white max-w-3xl mx-auto leading-tight">
            Bring Pioneers&apos; Free ERP to your school before the new term begins.
          </h2>
          <p className="text-white/80 text-lg max-w-xl mx-auto">
            Our onboarding team handles setup, staff training, and initial data import in 7 days.
          </p>
          <div className="pt-4 flex justify-center gap-4">
            <Link
              href="/contact?subject=register-school"
              className="px-8 py-4 rounded-lg bg-[#2E8BC0] hover:bg-[#2576A5] text-white font-bold text-base shadow-lg transition-all flex items-center gap-2"
            >
              <span>Register Your School Free</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
