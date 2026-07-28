"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, Layers, Sparkles } from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

function Label({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2E8BC0]/10 text-[#2E8BC0] text-[11px] font-bold uppercase tracking-wider mb-3 shadow-xs">
      <Sparkles className="w-3 h-3" />
      <span>{children}</span>
    </div>
  );
}

function CustomLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#B8973A]/15 text-[#B8973A] text-[11px] font-bold uppercase tracking-wider mb-3 shadow-xs">
      <Sparkles className="w-3 h-3 text-[#B8973A]" />
      <span>{children}</span>
    </div>
  );
}

export default function SoftwarePageClient() {
  const [activeTab, setActiveTab] = useState<"pioneers" | "custom">("pioneers");

  const pioneersFeatures = [
    {
      title: "Admissions Management",
      desc: "Digital application forms, candidate scoring & automated applicant tracking.",
    },
    {
      title: "Student Information System",
      desc: "Centralised student bio, academic history, report cards & term grades.",
    },
    {
      title: "Health Records",
      desc: "Student medical history, allergies, emergency contacts & clinic incident logs.",
    },
    {
      title: "Staff Communication",
      desc: "Instant announcements, staff notice board & teacher broadcast messaging.",
    },
    {
      title: "Automated Timetable Scheduling",
      desc: "Conflict-free class and teacher timetables generated automatically.",
    },
    {
      title: "Basic Fee Billing & Collection",
      desc: "Generate digital term invoices and collect fee payments via Paystack.",
    },
  ];

  const addOnModules = [
    { name: "Classroom & Exam Management", price: "GHS 2–3" },
    { name: "HR Management", price: "GHS 2–3" },
    { name: "Hostel & Boarding Management", price: "GHS 3–4" },
    { name: "Finance Management", price: "GHS 3–4" },
    { name: "Transportation & Safety", price: "GHS 2–3" },
    { name: "E-commerce & Inventory", price: "GHS 2" },
    { name: "Alumni Management", price: "GHS 1–2" },
  ];

  const customFeatures = [
    "01 Bespoke System Architecture & Database Design",
    "02 Cinematic Custom School Website & Portal",
    "03 Dedicated Own Domain (.edu.gh)",
    "04 100% Data Ownership & Isolated Servers",
    "05 Native ParentAide Integration",
    "06 Schoolpedia Verified Institutional Profile",
    "07 AI-Powered Academic & Financial Analytics",
    "08 Hardware Procurement Support",
    "09 Comprehensive On-Site Staff Training",
    "10 Priority SLA Maintenance & Support",
  ];

  const comparisonRows = [
    { feature: "Target Institution", p: "Schools digitising now", c: "Established private schools & chains" },
    { feature: "Starting Cost", p: "Core Module Permanently Free", c: "License-to-own from GHS 30,000" },
    { feature: "Ongoing Cost Structure", p: "Pay per student/term for add-ons", c: "Annual maintenance or multi-year instalments" },
    { feature: "Domain Ownership", p: "Shared sub-domain (pioneers.edcomrade.com)", c: "Dedicated domain (your-school.edu.gh)" },
    { feature: "Data Isolation", p: "Multi-tenant with isolated data layer", c: "Dedicated server & database instance" },
    { feature: "Deployment Time", p: "2–4 Weeks", c: "~3 Months" },
    { feature: "Cinematic Website", p: "Verified Schoolpedia profile", c: "Included custom Web & Mobile portal" },
    { feature: "AI Analytics Engine", p: "Standard reporting", c: "Full predictive AI analytics" },
    { feature: "ParentAide Connectivity", p: "Bundled Free", c: "Bundled Free" },
    { feature: "Schoolpedia Verification", p: "Included", c: "Included" },
    { feature: "Hardware Consultation", p: "Optional", c: "Included" },
    { feature: "Staff Onboarding", p: "Guided Online Workshops", c: "Dedicated On-Site Training" },
    { feature: "5-Year Price Guarantee", p: "Yes (Lock in pricing)", c: "Yes (Fixed license terms)" },
    { feature: "Workflow Customisation", p: "Standardised modular settings", c: "100% Bespoke workflow engineering" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Sticky Clay Tab Navigation */}
      <div className="sticky top-[72px] z-40 bg-white/90 backdrop-blur-md border-b border-[#E5E7EB] py-3">
        <div className="max-w-6xl mx-auto px-6 md:px-8 flex items-center justify-center gap-4">
          <button
            onClick={() => {
              setActiveTab("pioneers");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className={[
              "inline-flex items-center justify-center font-semibold rounded-full px-6 py-2 text-sm transition-all",
              activeTab === "pioneers"
                ? "bg-[#1A3C5E] text-white hover:bg-[#163350] shadow-sm hover:shadow-md"
                : "bg-transparent text-gray-600 border border-gray-300 hover:bg-gray-50",
            ].join(" ")}
          >
            Pioneers&apos; Software
          </button>

          <button
            onClick={() => {
              setActiveTab("custom");
              const customSection = document.getElementById("custom");
              if (customSection) {
                const yOffset = -120;
                const y = customSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: "smooth" });
              }
            }}
            className={[
              "inline-flex items-center justify-center font-semibold rounded-full px-6 py-2 text-sm transition-all",
              activeTab === "custom"
                ? "bg-[#B8973A] text-white hover:bg-[#a38430] shadow-sm hover:shadow-md"
                : "bg-transparent text-gray-600 border border-gray-300 hover:bg-gray-50",
            ].join(" ")}
          >
            Custom App
          </button>
        </div>
      </div>

      {/* ─────────────────────────────────────────────
         PIONEERS' SOFTWARE SECTION
      ───────────────────────────────────────────── */}
      <div id="pioneers">
        {/* Hero */}
        <section className="bg-[#1A3C5E] py-24 md:py-32 px-6 md:px-8 relative overflow-hidden">
          <div className="max-w-6xl mx-auto">
            <Label>PIONEERS&apos; SOFTWARE</Label>
            <h1
              className="font-extrabold text-white max-w-4xl"
              style={{
                fontSize: "clamp(44px, 7vw, 84px)",
                lineHeight: 0.96,
                letterSpacing: "-0.03em",
              }}
            >
              Your school, running digitally.
              <br />
              <span className="text-[#2E8BC0]">Free</span> to start.
            </h1>
            <p className="text-white/80 mt-6 max-w-[540px] text-lg leading-relaxed">
              A cloud-hosted multi-tenant school ERP built for African schools that need to modernise without heavy upfront capital investments.
            </p>
          </div>
        </section>

        {/* Who it's for */}
        <section className="bg-white py-20 md:py-24 px-6 md:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-bold text-[#1A3C5E] text-3xl md:text-4xl mb-12">
              Who is Pioneers&apos; Software for?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Private Basic Schools", desc: "Streamline student admissions, health records, timetables, and parent communication." },
                { title: "Private Senior High Schools", desc: "Manage hostel boarding, terminal exams, grading, and multi-term fee billing." },
                { title: "Vocational & Technical Institutes", desc: "Organise practical schedules, staff communications, and fee invoicing." },
              ].map((c, i) => (
                <div key={i} className="bg-[#F4F7FA] rounded-2xl shadow-sm p-7 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                  <h3 className="font-bold text-[#1A3C5E] text-xl mb-2">{c.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Admin Module — Free Callout */}
        <section className="bg-[#E8F5EE] py-20 md:py-24 px-6 md:px-8 border-y border-[#1B5E20]/15">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
              <div>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white text-[#1B5E20] shadow-sm mb-3">
                  100% Free Core Module
                </span>
                <h2 className="font-bold text-[#1B5E20] text-3xl md:text-5xl max-w-3xl">
                  The Core Administration Module is free for every school. Forever.
                </h2>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center font-semibold rounded-full bg-[#1A3C5E] text-white hover:bg-[#163350] shadow-sm hover:shadow-md px-6 py-3 text-sm flex-shrink-0 transition-all duration-200"
              >
                Claim Free Access
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {pioneersFeatures.map((f, i) => (
                <div key={i} className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                  <div className="w-8 h-8 rounded-full bg-[#1B5E20]/10 flex items-center justify-center text-[#1B5E20] font-bold text-xs mb-3">
                    0{i + 1}
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{f.title}</h3>
                  <p className="text-gray-600 text-xs leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bundled Strip */}
        <section className="bg-[#1A3C5E] text-white py-8 px-6 md:px-8 text-center">
          <p className="text-sm md:text-base font-medium max-w-3xl mx-auto">
            Every Pioneers&apos; school automatically gets <span className="text-[#2E8BC0] font-bold">ParentAide</span> for parents and a verified <span className="text-[#2E8BC0] font-bold">Schoolpedia</span> profile — included at zero cost.
          </p>
        </section>

        {/* Add-on Modules */}
        <section className="bg-[#F4F7FA] py-20 md:py-24 px-6 md:px-8">
          <div className="max-w-6xl mx-auto">
            <Label>Modular Add-Ons</Label>
            <h2 className="font-bold text-[#1A3C5E] text-3xl md:text-4xl mb-4">
              Activate additional modules when your school is ready.
            </h2>
            <p className="text-gray-600 text-base max-w-2xl mb-12">
              Priced transparently per student per term. Activate 3 or more modules to receive a 15% discount and lock in your price for 5 years.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {addOnModules.map((m, i) => (
                <div key={i} className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 flex flex-col justify-between hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#2E8BC0]">Add-on Module</span>
                    <h3 className="font-bold text-[#1A3C5E] text-base mt-1 mb-3">{m.name}</h3>
                  </div>
                  <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-gray-500">Pricing</span>
                    <span className="text-sm font-extrabold text-[#2E8BC0]">{m.price} <span className="text-[10px] font-normal text-gray-400">/stud/term</span></span>
                  </div>
                </div>
              ))}
            </div>

            {/* Sample Pricing Table */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 overflow-hidden">
              <h3 className="font-bold text-[#1A3C5E] text-xl mb-4">Sample Pricing Calculations</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200 bg-[#F4F7FA]">
                      <th className="p-3.5 text-xs font-bold text-gray-600 uppercase tracking-wider">School Size & Module Configuration</th>
                      <th className="p-3.5 text-xs font-bold text-gray-600 uppercase tracking-wider">Est. Per Term</th>
                      <th className="p-3.5 text-xs font-bold text-gray-600 uppercase tracking-wider">Est. Per Year (3 terms)</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm divide-y divide-gray-100">
                    <tr>
                      <td className="p-3.5 font-semibold text-gray-800">100 students (Core Administration only)</td>
                      <td className="p-3.5 text-emerald-700 font-bold">Free</td>
                      <td className="p-3.5 text-emerald-700 font-bold">Free</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-semibold text-gray-800">200 students (1 paid module @ GHS 2)</td>
                      <td className="p-3.5 font-bold text-gray-900">GHS 400</td>
                      <td className="p-3.5 font-bold text-gray-900">GHS 1,200</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-semibold text-gray-800">300 students (3 modules @ GHS 7, 15% discount)</td>
                      <td className="p-3.5 font-bold text-[#2E8BC0]">GHS 1,785</td>
                      <td className="p-3.5 font-bold text-[#2E8BC0]">GHS 5,355</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-semibold text-gray-800">400 students (4 modules @ GHS 10, 15% discount)</td>
                      <td className="p-3.5 font-bold text-[#2E8BC0]">GHS 3,400</td>
                      <td className="p-3.5 font-bold text-[#2E8BC0]">GHS 10,200</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ─────────────────────────────────────────────
         CUSTOM APP SECTION
      ───────────────────────────────────────────── */}
      <div id="custom">
        <section className="bg-[#0D1F2D] py-24 md:py-32 px-6 md:px-8 border-t-4 border-[#B8973A] relative overflow-hidden">
          <div className="max-w-6xl mx-auto">
            <CustomLabel>CUSTOM APP PLATFORM</CustomLabel>
            <h1
              className="font-extrabold text-white max-w-4xl"
              style={{
                fontSize: "clamp(44px, 7vw, 84px)",
                lineHeight: 0.96,
                letterSpacing: "-0.03em",
              }}
            >
              A school management system built exclusively for your brand.
            </h1>
            <p className="text-white/80 mt-6 max-w-[540px] text-lg leading-relaxed">
              Your own domain (.edu.gh), dedicated database, cinematic portals, and custom workflows tailored to your school&apos;s legacy.
            </p>
          </div>
        </section>

        {/* Features & Deliverables */}
        <section className="bg-white py-20 md:py-24 px-6 md:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-bold text-[#1A3C5E] text-3xl md:text-4xl mb-12">
              What Custom App includes
            </h2>

            <div className="grid md:grid-cols-2 gap-4 mb-16">
              {customFeatures.map((f, i) => (
                <div key={i} className="bg-[#F4F7FA] rounded-2xl shadow-sm p-5 flex items-center gap-3 border border-[#B8973A]/20">
                  <CheckCircle2 className="w-5 h-5 text-[#B8973A] flex-shrink-0" />
                  <span className="text-sm font-bold text-gray-800">{f}</span>
                </div>
              ))}
            </div>

            {/* Platforms & Pricing Table */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-7 border-t-4 border-[#B8973A]">
                <h3 className="font-bold text-[#1A3C5E] text-xl mb-4">Deployment Options</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-[#F4F7FA] rounded-xl flex items-center justify-between">
                    <span className="text-sm font-semibold text-gray-800">Web PWA Portal</span>
                    <span className="text-xs font-extrabold text-[#B8973A]">From GHS 30,000</span>
                  </div>
                  <div className="p-3 bg-[#F4F7FA] rounded-xl flex items-center justify-between">
                    <span className="text-sm font-semibold text-gray-800">Web + Mobile App (iOS/Android)</span>
                    <span className="text-xs font-bold text-gray-500">Custom Quote</span>
                  </div>
                  <div className="p-3 bg-[#F4F7FA] rounded-xl flex items-center justify-between">
                    <span className="text-sm font-semibold text-gray-800">Web + Desktop Native App</span>
                    <span className="text-xs font-bold text-gray-500">Custom Quote</span>
                  </div>
                  <div className="p-3 bg-[#F4F7FA] rounded-xl flex items-center justify-between">
                    <span className="text-sm font-semibold text-gray-800">Web + Mobile + Desktop</span>
                    <span className="text-xs font-bold text-gray-500">Custom Quote</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-7 border-t-4 border-[#1A3C5E]">
                <h3 className="font-bold text-[#1A3C5E] text-xl mb-4">5-Phase Timeline (~3 Months)</h3>
                <div className="space-y-2.5 text-xs text-gray-700 font-medium">
                  <div className="p-3 bg-[#F4F7FA] rounded-xl flex items-center justify-between">
                    <span>Phase 1: Discovery & Specifications</span>
                    <span className="font-bold text-[#2E8BC0]">Weeks 1–2</span>
                  </div>
                  <div className="p-3 bg-[#F4F7FA] rounded-xl flex items-center justify-between">
                    <span>Phase 2: UI/UX & System Architecture</span>
                    <span className="font-bold text-[#2E8BC0]">Weeks 2–4</span>
                  </div>
                  <div className="p-3 bg-[#F4F7FA] rounded-xl flex items-center justify-between">
                    <span>Phase 3: Core Engineering & Modules</span>
                    <span className="font-bold text-[#2E8BC0]">Weeks 4–10</span>
                  </div>
                  <div className="p-3 bg-[#F4F7FA] rounded-xl flex items-center justify-between">
                    <span>Phase 4: Security & Penetration Testing</span>
                    <span className="font-bold text-[#2E8BC0]">Weeks 10–11</span>
                  </div>
                  <div className="p-3 bg-[#F4F7FA] rounded-xl flex items-center justify-between">
                    <span>Phase 5: Staff Training & Go-Live</span>
                    <span className="font-bold text-[#2E8BC0]">Weeks 11–12</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ─────────────────────────────────────────────
         COMPARISON TABLE (Full Matrix)
      ───────────────────────────────────────────── */}
      <section className="bg-[#F4F7FA] py-20 md:py-28 px-6 md:px-8 border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Label>Side-by-Side Comparison</Label>
            <h2 className="font-bold text-[#1A3C5E] text-3xl md:text-4xl">
              Compare Pioneers&apos; Software vs Custom App
            </h2>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[700px]">
                <thead>
                  <tr className="border-b-2 border-gray-200 bg-[#F4F7FA]">
                    <th className="p-3.5 text-xs font-bold text-gray-500 uppercase tracking-wider w-1/3">Feature</th>
                    <th className="p-3.5 text-sm font-bold text-[#2E8BC0] w-1/3">Pioneers&apos; Software</th>
                    <th className="p-3.5 text-sm font-bold text-[#B8973A] w-1/3">Custom App</th>
                  </tr>
                </thead>
                <tbody className="text-xs md:text-sm divide-y divide-gray-100">
                  {comparisonRows.map((r, idx) => (
                    <tr key={idx} className="hover:bg-gray-50 transition-colors">
                      <td className="p-3.5 font-bold text-gray-800">{r.feature}</td>
                      <td className="p-3.5 text-gray-600">{r.p}</td>
                      <td className="p-3.5 font-semibold text-gray-900">{r.c}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
