"use client";

import Link from "next/link";
import Image from "next/image";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { CheckCircle2, ShieldCheck, Layers, Sparkles, ArrowRight, Star } from "lucide-react";

const pioneersFeatures = [
  { name: "Core Administration", desc: "Student records, admissions, staff management. The foundation.", free: true },
  { name: "Admissions Management", desc: "Digital application forms, candidate scoring & automated tracking.", free: true },
  { name: "Student Information System", desc: "Centralised student bio, academic history, report cards & grades.", free: true },
  { name: "Staff Communication", desc: "Instant announcements, notice board & teacher broadcast messaging.", free: true },
  { name: "Basic Fee Billing", desc: "Generate digital term invoices and collect payments via Paystack.", free: true },
  { name: "Classroom & Exam Management", desc: "Conflict-free timetables and exam scheduling, generated automatically." },
  { name: "HR Management", desc: "Staff payroll, leave tracking, performance reviews & contracts." },
  { name: "Hostel & Boarding", desc: "Room allocation, boarding records, and house parent communication." },
  { name: "Finance Management", desc: "Full double-entry accounting, budget tracking, and financial reporting." },
  { name: "Transportation & Safety", desc: "Bus routes, pick-up tracking, and fleet management." },
];

const customFeatures = [
  { name: "Bespoke System Architecture", desc: "Database and API design built around your school's exact workflows." },
  { name: "Custom School Website & Portal", desc: "A cinematic web presence that reflects your institution's identity." },
  { name: "Dedicated Domain", desc: "Your school at your-school.edu.gh — data that belongs to you." },
  { name: "100% Data Ownership", desc: "Isolated dedicated servers. No shared infrastructure." },
  { name: "AI-Powered Analytics", desc: "Predictive academic and financial intelligence built in from day one." },
  { name: "Native ParentAide Integration", desc: "Parents get the full app experience, connected directly to your system." },
  { name: "Schoolpedia Verified Profile", desc: "Prominent verified listing on Ghana's school discovery platform." },
  { name: "On-Site Staff Training", desc: "Dedicated training sessions run at your school. Not a Zoom link." },
];

const comparisonRows = [
  { feature: "Target Institution", p: "Schools digitising now", c: "Established institutions & chains" },
  { feature: "Starting Cost", p: "Core module permanently free", c: "License-to-own from GHS 30,000", better: "p" },
  { feature: "Ongoing Cost", p: "Per student/term for add-ons", c: "Annual maintenance or instalments" },
  { feature: "Domain Ownership", p: "Shared subdomain", c: "Dedicated domain (.edu.gh)", better: "c" },
  { feature: "Data Isolation", p: "Multi-tenant with data layer", c: "Dedicated server & database", better: "c" },
  { feature: "Deployment Time", p: "2–4 weeks", c: "~3 months", better: "p" },
  { feature: "AI Analytics", p: "Standard reporting", c: "Full predictive AI analytics", better: "c" },
  { feature: "5-Year Price Guarantee", p: "Yes", c: "Yes" },
];

export default function SoftwareClient() {
  return (
    <main style={{ backgroundColor: "var(--color-paper)" }}>
      <Navigation />

      {/* Hero Header */}
      <section style={{ paddingTop: "150px", paddingBottom: "80px", backgroundColor: "var(--color-paper)" }}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="mag-badge-cyan">
                <Layers className="w-3.5 h-3.5" />
                <span>SCHOOL ERP SYSTEMS</span>
              </span>
              <h1 className="font-serif text-5xl sm:text-6xl font-bold text-[#1A3C5E] leading-tight">
                Two paths to modernise your school.
              </h1>
              <p className="text-slate-600 text-lg leading-relaxed">
                Pioneers&apos; ERP is 100% free to start and ready in weeks. Custom App is a bespoke institutional platform engineered for one school. Same mission. Different scale.
              </p>
              <div className="flex gap-4 pt-2">
                <a href="#pioneers" className="px-6 py-3 rounded-lg bg-[#1B5E20] hover:bg-[#154818] text-white font-bold text-sm shadow-sm transition-all">
                  Pioneers&apos; ERP (Free) ↓
                </a>
                <a href="#custom" className="px-6 py-3 rounded-lg bg-[#1A3C5E] hover:bg-[#2E8BC0] text-white font-bold text-sm shadow-sm transition-all">
                  Custom App ↓
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="mag-card p-3">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src="/images/software-dashboard.png"
                    alt="Pioneers ERP Dashboard"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── PIONEERS' SOFTWARE (FREE) ── */}
      <section id="pioneers" style={{ backgroundColor: "#EEF4F8", padding: "90px 0" }}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 space-y-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b-2 border-[#1B5E20] pb-4">
            <div>
              <span className="mag-badge-green mb-2">PIONEERS&apos; SOFTWARE</span>
              <h2 className="font-serif text-4xl font-bold text-[#1A3C5E]">
                Your school running digitally. Free to start.
              </h2>
            </div>
            <span className="text-xs font-mono text-[#1B5E20] font-bold uppercase tracking-wider mt-2 md:mt-0">
              CORE MODULE 100% FREE
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {pioneersFeatures.map((f, i) => (
              <div key={i} className="mag-card p-6 flex justify-between items-start">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[#1A3C5E] text-base">{f.name}</span>
                    {f.free && <span className="mag-badge-green text-[10px] py-0.5">FREE</span>}
                  </div>
                  <p className="text-xs text-slate-500">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Pricing Table Card */}
          <div className="mag-card p-8 space-y-6">
            <h3 className="font-serif text-2xl font-bold text-[#1A3C5E]">Transparent Modular Pricing</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-[#1A3C5E] text-xs font-mono text-slate-500 uppercase">
                    <th className="py-3">Configuration</th>
                    <th className="py-3 text-right">Per Term</th>
                    <th className="py-3 text-right">Per Academic Year</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 font-semibold text-[#1A3C5E]">
                  <tr className="bg-[#E8F5EE]/40">
                    <td className="py-3.5">100 students — Core Admin only</td>
                    <td className="py-3.5 text-right text-[#1B5E20] font-bold">Free</td>
                    <td className="py-3.5 text-right text-[#1B5E20] font-bold">Free</td>
                  </tr>
                  <tr>
                    <td className="py-3.5">200 students — 1 paid module (GHS 2/student)</td>
                    <td className="py-3.5 text-right">GHS 400</td>
                    <td className="py-3.5 text-right">GHS 1,200</td>
                  </tr>
                  <tr>
                    <td className="py-3.5">300 students — 3 modules (15% discount)</td>
                    <td className="py-3.5 text-right">GHS 1,785</td>
                    <td className="py-3.5 text-right">GHS 5,355</td>
                  </tr>
                  <tr>
                    <td className="py-3.5">400 students — 4 modules (15% discount)</td>
                    <td className="py-3.5 text-right">GHS 3,400</td>
                    <td className="py-3.5 text-right">GHS 10,200</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* 5-Year Lock Callout */}
            <div className="bg-[#FDF9EE] border-l-4 border-[#B8973A] p-5 rounded-r-lg">
              <p className="font-serif text-lg font-bold text-[#1A3C5E]">
                &ldquo;Activate 3 or more paid modules and lock your per-student pricing for five full academic years.&rdquo;
              </p>
            </div>
          </div>

          <div className="pt-2">
            <Link
              href="/contact?subject=pioneers"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-[#1B5E20] hover:bg-[#154818] text-white font-bold text-base shadow-md transition-all"
            >
              <span>Register Your School — Free</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CUSTOM APP (DARK NAVY SECTION) ── */}
      <section id="custom" className="bg-[#0F2537] text-white py-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 space-y-12">
          <div className="border-b border-white/10 pb-6">
            <span className="mag-badge-gold mb-2">CUSTOM APP</span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white">
              A bespoke system engineered for your institution.
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mt-4">
              For established schools and multi-campus chains that require dedicated domain, custom database architecture, and 100% data isolation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {customFeatures.map((f, i) => (
              <div key={i} className="bg-[#1A3C5E]/60 border border-white/10 p-6 rounded-xl space-y-2">
                <span className="font-bold text-white text-base block">{f.name}</span>
                <p className="text-xs text-white/60">{f.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#1A3C5E] border-2 border-[#B8973A] rounded-xl p-8 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#B8973A] font-bold">
              DEPLOYMENT & PRICING
            </span>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-t border-white/10 pt-4 gap-2">
              <span className="text-base font-bold text-white">Web PWA & Dedicated Portal</span>
              <span className="font-mono text-xl font-bold text-[#B8973A]">From GHS 30,000</span>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-t border-white/10 pt-4 gap-2">
              <span className="text-base font-bold text-white">Web + iOS & Android Native Apps</span>
              <span className="font-mono text-xl font-bold text-[#B8973A]">Custom Quote</span>
            </div>
          </div>

          <Link
            href="/contact?subject=custom-app"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-[#B8973A] hover:bg-[#a08230] text-white font-bold text-base shadow-lg transition-all"
          >
            <span>Request Custom App Consultation</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* ── COMPARISON MATRIX ── */}
      <section style={{ padding: "90px 0", backgroundColor: "var(--color-paper)" }}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 space-y-8">
          <div className="border-b-2 border-[#2E8BC0] pb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#2E8BC0] font-bold block mb-2">
              SIDE BY SIDE
            </span>
            <h2 className="font-serif text-4xl font-bold text-[#1A3C5E]">
              Pioneers&apos; ERP vs Custom App.
            </h2>
          </div>

          <div className="mag-card p-6 overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b-2 border-[#1A3C5E] text-xs font-mono text-slate-500 uppercase">
                  <th className="py-3 w-1/3">Feature</th>
                  <th className="py-3 w-1/3 text-[#1B5E20]">Pioneers&apos; ERP</th>
                  <th className="py-3 w-1/3 text-[#B8973A]">Custom App</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 font-semibold text-[#1A3C5E]">
                {comparisonRows.map((r, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-slate-50/50" : "bg-white"}>
                    <td className="py-3.5">{r.feature}</td>
                    <td className={`py-3.5 ${r.better === 'p' ? 'text-[#1B5E20] font-bold' : 'text-slate-600'}`}>{r.p}</td>
                    <td className={`py-3.5 ${r.better === 'c' ? 'text-[#B8973A] font-bold' : 'text-slate-600'}`}>{r.c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
