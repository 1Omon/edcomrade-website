"use client";

import { useState } from "react";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

/* ─────────────────────────────────────────────
   Shared Layout Primitives
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

function CustomLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="text-[11px] font-semibold uppercase text-[#B8973A] mb-2"
      style={{ letterSpacing: "0.12em" }}
    >
      {children}
    </p>
  );
}

export default function SoftwarePageClient() {
  const [activeTab, setActiveTab] = useState<"pioneers" | "custom">("pioneers");

  const pioneersFeatures = [
    {
      title: "Admissions Management",
      desc: "Digital forms, automated applicant tracking.",
    },
    {
      title: "Student Information System",
      desc: "Centralised records, grades, and term reports.",
    },
    {
      title: "Health Records",
      desc: "Medical history, allergies, and incident logs.",
    },
    {
      title: "Staff Communication",
      desc: "Instant messaging and notice board for teachers.",
    },
    {
      title: "Automated Timetable Scheduling",
      desc: "Conflict-free timetables generated instantly.",
    },
    {
      title: "Basic Fee Billing & Collection",
      desc: "Generate invoices and accept mobile money payments.",
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
    "01 Bespoke System Design",
    "02 Cinematic School Website",
    "03 Your Own .edu.gh Domain",
    "04 Full Data Ownership",
    "05 ParentAide Integration",
    "06 Schoolpedia Verified Profile",
    "07 AI-Powered Analytics",
    "08 Hardware Procurement Support",
    "09 Full Staff Training",
    "10 Annual Maintenance",
  ];

  const comparisonRows = [
    {
      feature: "Best for",
      p: "Schools digitising now",
      c: "Established schools & chains",
    },
    {
      feature: "Starting cost",
      p: "Free school administration module",
      c: "From GHS 30,000",
    },
    {
      feature: "Ongoing cost",
      p: "Per student/term (add-ons)",
      c: "Annual maintenance or instalments",
    },
    {
      feature: "Own domain",
      p: "No (pioneers.edcomrade.com)",
      c: "Yes (.edu.gh)",
    },
    {
      feature: "Data ownership",
      p: "Shared DB (isolated)",
      c: "Dedicated DB instance",
    },
    { feature: "Deployment time", p: "2–4 weeks", c: "~3 months" },
    { feature: "Website included", p: "No", c: "Yes (Cinematic design)" },
    { feature: "AI analytics", p: "No", c: "Yes" },
    { feature: "ParentAide", p: "Included", c: "Included" },
    { feature: "Schoolpedia profile", p: "Verified", c: "Verified" },
    { feature: "Hardware support", p: "Optional", c: "Included consultation" },
    { feature: "Staff training", p: "Online", c: "On-site" },
    { feature: "5-year price lock", p: "Yes", c: "Yes" },
    { feature: "Customisation", p: "Limited (settings)", c: "Fully bespoke" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Sticky Tab Navigation */}
      <div className="sticky top-[64px] z-40 bg-white/90 backdrop-blur-md border-b border-[#E5E7EB]">
        <div className="max-w-6xl mx-auto px-6 md:px-8 flex items-center justify-center gap-8 py-4">
          <button
            onClick={() => {
              setActiveTab("pioneers");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className={[
              "text-[15px] font-semibold transition-colors pb-1 border-b-2",
              activeTab === "pioneers"
                ? "text-[#1A3C5E] border-[#1A3C5E]"
                : "text-gray-500 border-transparent hover:text-gray-800",
            ].join(" ")}
          >
            Pioneers' Software
          </button>
          <button
            onClick={() => {
              setActiveTab("custom");
              const customSection = document.getElementById("custom");
              if (customSection) {
                const yOffset = -120;
                const y =
                  customSection.getBoundingClientRect().top +
                  window.pageYOffset +
                  yOffset;
                window.scrollTo({ top: y, behavior: "smooth" });
              }
            }}
            className={[
              "text-[15px] font-semibold transition-colors pb-1 border-b-2",
              activeTab === "custom"
                ? "text-[#B8973A] border-[#B8973A]"
                : "text-gray-500 border-transparent hover:text-gray-800",
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
        <section className="bg-[#1A3C5E] py-24 md:py-32 px-6 md:px-8">
          <div className="max-w-6xl mx-auto">
            <Label>PIONEERS' SOFTWARE</Label>
            <h1
              className="font-extrabold text-white max-w-4xl"
              style={{
                fontSize: "clamp(56px, 8vw, 96px)",
                lineHeight: 0.95,
                letterSpacing: "-0.03em",
              }}
            >
              Your school, running digitally.
              <br />
              <span className="text-[#2E8BC0]">Free</span> to start.
            </h1>
            <p
              className="text-[#CBD5E1] mt-6 max-w-[480px]"
              style={{ fontSize: 18, lineHeight: 1.7 }}
            >
              A shared ERP platform built for schools that need to modernise
              without a large upfront investment.
            </p>
          </div>
        </section>

        {/* Who it's for */}
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
              Who is it for?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Private Basic Schools",
                  desc: "Streamline admissions and keep parents informed.",
                },
                {
                  title: "Private SHS",
                  desc: "Manage boarding, academics, and exams efficiently.",
                },
                {
                  title: "Vocational & Tech Schools",
                  desc: "Organise schedules, staff, and student records.",
                },
              ].map((c, i) => (
                <div key={i} className="bg-[#F0F4F8] p-6 rounded-xl">
                  <h3
                    className="font-semibold text-[#1A3C5E] mb-2"
                    style={{ fontSize: 20, lineHeight: 1.3 }}
                  >
                    {c.title}
                  </h3>
                  <p
                    className="text-gray-600"
                    style={{ fontSize: 17, lineHeight: 1.7 }}
                  >
                    {c.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* School Administration Module — Free */}
        <section className="bg-[#E8F5EE] py-20 md:py-24 px-6 md:px-8 border-y border-[#1B5E20]/10">
          <div className="max-w-6xl mx-auto">
            <h2
              className="font-bold text-[#1B5E20] mb-12 max-w-3xl"
              style={{
                fontSize: "clamp(32px, 4vw, 48px)",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}
            >
              The School Administration Module is free for every school. Always.
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {pioneersFeatures.map((f, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-xl border border-[#1B5E20]/10"
                >
                  <h3
                    className="font-semibold text-[#1B5E20] mb-2"
                    style={{ fontSize: 20, lineHeight: 1.3 }}
                  >
                    {f.title}
                  </h3>
                  <p
                    className="text-gray-600"
                    style={{ fontSize: 17, lineHeight: 1.7 }}
                  >
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bundled Callout */}
        <section className="bg-[#F0F4F8] py-8 px-6 md:px-8 text-center border-b border-[#E5E7EB]">
          <p className="text-[#1A3C5E] font-medium" style={{ fontSize: 17 }}>
            Every Pioneers' school also gets{" "}
            <span className="font-bold">ParentAide</span> for parents and a
            verified <span className="font-bold">Schoolpedia</span> profile — at
            no extra cost.
          </p>
        </section>

        {/* Add-on Modules */}
        <section className="bg-[#F0F4F8] py-20 md:py-24 px-6 md:px-8">
          <div className="max-w-6xl mx-auto">
            <Label>PAID ADD-ONS</Label>
            <h2
              className="font-bold text-[#1A3C5E] mb-12"
              style={{
                fontSize: "clamp(32px, 4vw, 48px)",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}
            >
              Activate more when you're ready.
            </h2>
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              {addOnModules.map((m, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-xl border border-[#E5E7EB] flex flex-col justify-between"
                >
                  <h3
                    className="font-semibold text-[#1A3C5E] mb-4"
                    style={{ fontSize: 18, lineHeight: 1.3 }}
                  >
                    {m.name}
                  </h3>
                  <p
                    className="text-[#2E8BC0] font-bold"
                    style={{ fontSize: 16 }}
                  >
                    {m.price}{" "}
                    <span className="text-gray-500 font-normal text-[14px]">
                      / student / term
                    </span>
                  </p>
                </div>
              ))}
            </div>
            <p
              className="text-gray-600 mb-12"
              style={{ fontSize: 17, lineHeight: 1.7 }}
            >
              Activate 3 or more modules and receive 15% off. Lock in today's
              prices for 5 years.
            </p>

            {/* Sample costs table */}
            <div className="bg-white rounded-xl border border-[#E5E7EB] overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#F9FAFB] border-b border-[#E5E7EB]">
                    <th className="p-4 font-semibold text-[#1A3C5E] text-[15px]">
                      Scenario
                    </th>
                    <th className="p-4 font-semibold text-[#1A3C5E] text-[15px]">
                      Per Term
                    </th>
                    <th className="p-4 font-semibold text-[#1A3C5E] text-[15px]">
                      Per Year (3 terms)
                    </th>
                  </tr>
                </thead>
                <tbody className="text-[15px] text-gray-700">
                  <tr className="border-b border-[#E5E7EB]">
                    <td className="p-4">100 students (Core only)</td>
                    <td className="p-4 font-semibold text-[#1B5E20]">Free</td>
                    <td className="p-4 font-semibold text-[#1B5E20]">Free</td>
                  </tr>
                  <tr className="border-b border-[#E5E7EB]">
                    <td className="p-4">200 students (1 module @ GHS 2)</td>
                    <td className="p-4">GHS 400</td>
                    <td className="p-4">GHS 1,200</td>
                  </tr>
                  <tr className="border-b border-[#E5E7EB]">
                    <td className="p-4">
                      300 students (3 modules @ GHS 7, 15% disc.)
                    </td>
                    <td className="p-4">GHS 1,785</td>
                    <td className="p-4">GHS 5,355</td>
                  </tr>
                  <tr>
                    <td className="p-4">
                      400 students (4 modules @ GHS 10, 15% disc.)
                    </td>
                    <td className="p-4">GHS 3,400</td>
                    <td className="p-4">GHS 10,200</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>

      {/* ─────────────────────────────────────────────
         CUSTOM APP SECTION
      ───────────────────────────────────────────── */}
      <div
        id="custom"
        onMouseEnter={() => setActiveTab("custom")}
        onMouseLeave={() => setActiveTab("pioneers")}
      >
        {/* Hero */}
        <section className="bg-[#0D1F2D] py-24 md:py-32 px-6 md:px-8 border-t-[4px] border-[#B8973A]">
          <div className="max-w-6xl mx-auto">
            <CustomLabel>CUSTOM APP</CustomLabel>
            <h1
              className="font-extrabold text-white max-w-4xl"
              style={{
                fontSize: "clamp(56px, 8vw, 96px)",
                lineHeight: 0.95,
                letterSpacing: "-0.03em",
              }}
            >
              A school management system built entirely for your institution.
            </h1>
            <p
              className="text-[#CBD5E1] mt-6 max-w-[480px]"
              style={{ fontSize: 18, lineHeight: 1.7 }}
            >
              Your brand. Your domain. Your data. Built from the ground up.
            </p>
          </div>
        </section>

        {/* Who it's for */}
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
              Who is it for?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Established Private Schools",
                  desc: "Schools with unique processes requiring specific workflows.",
                },
                {
                  title: "International Schools",
                  desc: "Institutions needing complex grading and premium portals.",
                },
                {
                  title: "School Chains & Groups",
                  desc: "Centralised management across multiple campuses.",
                },
              ].map((c, i) => (
                <div key={i} className="bg-[#F0F4F8] p-6 rounded-xl">
                  <h3
                    className="font-semibold text-[#1A3C5E] mb-2"
                    style={{ fontSize: 20, lineHeight: 1.3 }}
                  >
                    {c.title}
                  </h3>
                  <p
                    className="text-gray-600"
                    style={{ fontSize: 17, lineHeight: 1.7 }}
                  >
                    {c.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* School Chains Note */}
            <div className="mt-12 bg-[#1E3A52] p-8 rounded-xl">
              <p
                className="text-white font-medium"
                style={{ fontSize: 17, lineHeight: 1.7 }}
              >
                <span className="text-[#B8973A] font-bold">
                  Managing multiple campuses?
                </span>{" "}
                We build centralised board dashboards that give leadership
                real-time visibility across every branch.
              </p>
            </div>
          </div>
        </section>

        {/* What you get */}
        <section className="bg-[#F0F4F8] py-20 md:py-24 px-6 md:px-8">
          <div className="max-w-6xl mx-auto">
            <h2
              className="font-bold text-[#1A3C5E] mb-12"
              style={{
                fontSize: "clamp(32px, 4vw, 48px)",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}
            >
              What you get.
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {customFeatures.map((f, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-xl border border-[#E5E7EB]"
                >
                  <p
                    className="font-semibold text-[#1A3C5E]"
                    style={{ fontSize: 17 }}
                  >
                    {f}
                  </p>
                </div>
              ))}
            </div>

            <h2
              className="font-bold text-[#1A3C5E] mb-8"
              style={{
                fontSize: "clamp(32px, 4vw, 48px)",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}
            >
              Delivery Platforms & Pricing
            </h2>
            <div className="bg-white rounded-xl border border-[#E5E7EB] overflow-hidden mb-16">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#F9FAFB] border-b border-[#E5E7EB]">
                    <th className="p-4 font-semibold text-[#1A3C5E] text-[15px]">
                      Platform Setup
                    </th>
                    <th className="p-4 font-semibold text-[#1A3C5E] text-[15px]">
                      Pricing
                    </th>
                  </tr>
                </thead>
                <tbody className="text-[15px] text-gray-700">
                  <tr className="border-b border-[#E5E7EB]">
                    <td className="p-4 font-medium">Web PWA</td>
                    <td className="p-4 text-[#B8973A] font-semibold">
                      Starts at GHS 30,000
                    </td>
                  </tr>
                  <tr className="border-b border-[#E5E7EB]">
                    <td className="p-4 font-medium">
                      Web + Mobile App (iOS/Android)
                    </td>
                    <td className="p-4">Custom Quote</td>
                  </tr>
                  <tr className="border-b border-[#E5E7EB]">
                    <td className="p-4 font-medium">Web + Desktop App</td>
                    <td className="p-4">Custom Quote</td>
                  </tr>
                  <tr className="border-b border-[#E5E7EB]">
                    <td className="p-4 font-medium">Web + Mobile + Desktop</td>
                    <td className="p-4">Custom Quote</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">
                      Desktop Only (Offline-first)
                    </td>
                    <td className="p-4">Custom Quote</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2
              className="font-bold text-[#1A3C5E] mb-8"
              style={{
                fontSize: "clamp(32px, 4vw, 48px)",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}
            >
              Deployment Timeline
            </h2>
            <div className="bg-white rounded-xl border border-[#E5E7EB] overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#F9FAFB] border-b border-[#E5E7EB]">
                    <th className="p-4 font-semibold text-[#1A3C5E] text-[15px]">
                      Phase
                    </th>
                    <th className="p-4 font-semibold text-[#1A3C5E] text-[15px]">
                      Duration
                    </th>
                  </tr>
                </thead>
                <tbody className="text-[15px] text-gray-700">
                  <tr className="border-b border-[#E5E7EB]">
                    <td className="p-4 font-medium">
                      Discovery & Requirements
                    </td>
                    <td className="p-4">Week 1–2</td>
                  </tr>
                  <tr className="border-b border-[#E5E7EB]">
                    <td className="p-4 font-medium">Design & Architecture</td>
                    <td className="p-4">Week 2–4</td>
                  </tr>
                  <tr className="border-b border-[#E5E7EB]">
                    <td className="p-4 font-medium">Development</td>
                    <td className="p-4">Week 4–10</td>
                  </tr>
                  <tr className="border-b border-[#E5E7EB]">
                    <td className="p-4 font-medium">Testing & QA</td>
                    <td className="p-4">Week 10–11</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">Deployment & Training</td>
                    <td className="p-4">Week 11–12</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>

      {/* ─────────────────────────────────────────────
         COMPARISON TABLE (Bottom)
      ───────────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-24 px-6 md:px-8 border-t border-[#E5E7EB]">
        <div className="max-w-6xl mx-auto">
          <h2
            className="font-bold text-[#1A3C5E] mb-12 text-center"
            style={{
              fontSize: "clamp(32px, 4vw, 48px)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            Compare Solutions
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="border-b-2 border-[#1A3C5E]">
                  <th className="p-4 font-semibold text-gray-400 text-[13px] uppercase tracking-wider w-1/3">
                    Feature
                  </th>
                  <th className="p-4 font-semibold text-[#1A3C5E] text-[16px] w-1/3">
                    Pioneers' Software
                  </th>
                  <th className="p-4 font-semibold text-[#B8973A] text-[16px] w-1/3">
                    Custom App
                  </th>
                </tr>
              </thead>
              <tbody className="text-[15px] text-gray-700">
                {comparisonRows.map((r, i) => (
                  <tr
                    key={i}
                    className="border-b border-[#E5E7EB] hover:bg-[#F9FAFB] transition-colors"
                  >
                    <td className="p-4 font-medium text-gray-900">
                      {r.feature}
                    </td>
                    <td className="p-4 text-gray-600">{r.p}</td>
                    <td className="p-4 font-medium">{r.c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
