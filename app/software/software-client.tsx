"use client";

import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

function SectionHeader({ label, headline, dark = false }: { label: string; headline: string; dark?: boolean }) {
  return (
    <div style={{ borderTop: `1px solid ${dark ? "var(--color-rule-dark)" : "var(--color-rule)"}`, paddingTop: "16px", marginBottom: "48px" }}>
      <span style={{ fontFamily: "var(--font-sans)", fontSize: "var(--text-xs)", letterSpacing: "var(--tracking-wider)", textTransform: "uppercase", color: dark ? "var(--color-gold)" : "var(--color-accent)", fontWeight: 600, display: "block", marginBottom: "8px" }}>
        {label}
      </span>
      <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-4xl)", letterSpacing: "var(--tracking-snug)", lineHeight: 1.1, color: dark ? "#fff" : "var(--color-ink)", fontWeight: 700 }}>
        {headline}
      </h2>
    </div>
  );
}

function FeatureRow({ name, desc, free = false }: { name: string; desc: string; free?: boolean }) {
  return (
    <div style={{ borderTop: "1px solid var(--color-rule)", padding: "16px 0", display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "24px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <span style={{ fontFamily: "var(--font-sans)", fontSize: "var(--text-base)", fontWeight: 600, color: "var(--color-ink)" }}>{name}</span>
        {free && (
          <span style={{ fontSize: "var(--text-xs)", fontWeight: 700, color: "var(--color-green)", letterSpacing: "0.06em", textTransform: "uppercase" }}>
            Free
          </span>
        )}
      </div>
      <p style={{ fontSize: "var(--text-sm)", color: "var(--color-ink-muted)", lineHeight: 1.6, maxWidth: "400px", textAlign: "right" }}>{desc}</p>
    </div>
  );
}

function FeatureRowDark({ name, desc }: { name: string; desc: string }) {
  return (
    <div style={{ borderTop: "1px solid var(--color-rule-dark)", padding: "16px 0", display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "24px" }}>
      <span style={{ fontFamily: "var(--font-sans)", fontSize: "var(--text-base)", fontWeight: 600, color: "#fff" }}>{name}</span>
      <p style={{ fontSize: "var(--text-sm)", color: "rgba(255,255,255,0.55)", lineHeight: 1.6, maxWidth: "400px", textAlign: "right" }}>{desc}</p>
    </div>
  );
}

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
  { name: "Hardware Procurement Support", desc: "Device sourcing consultation and setup for your labs and offices." },
  { name: "On-Site Staff Training", desc: "Dedicated training sessions run at your school. Not a Zoom link." },
  { name: "Priority SLA Maintenance", desc: "Guaranteed response times and a dedicated technical contact." },
];

const comparisonRows = [
  { feature: "Target Institution", p: "Schools digitising now", c: "Established institutions & chains" },
  { feature: "Starting Cost", p: "Core module permanently free", c: "License-to-own from GHS 30,000", better: "p" },
  { feature: "Ongoing Cost", p: "Per student/term for add-ons", c: "Annual maintenance or instalments" },
  { feature: "Domain Ownership", p: "Shared subdomain", c: "Dedicated domain (.edu.gh)", better: "c" },
  { feature: "Data Isolation", p: "Multi-tenant with data layer", c: "Dedicated server & database", better: "c" },
  { feature: "Deployment Time", p: "2–4 weeks", c: "~3 months", better: "p" },
  { feature: "AI Analytics", p: "Standard reporting", c: "Full predictive AI analytics", better: "c" },
  { feature: "ParentAide Connectivity", p: "Bundled free", c: "Bundled free" },
  { feature: "Schoolpedia Verification", p: "Included", c: "Included" },
  { feature: "Staff Onboarding", p: "Guided online workshops", c: "Dedicated on-site training", better: "c" },
  { feature: "5-Year Price Guarantee", p: "Yes", c: "Yes" },
  { feature: "Workflow Customisation", p: "Standardised modular settings", c: "100% bespoke engineering", better: "c" },
];

export default function SoftwareClient() {
  return (
    <div style={{ backgroundColor: "var(--color-paper)" }}>
      <Navigation />

      {/* Page Header */}
      <section style={{ paddingTop: "140px", paddingBottom: "80px", backgroundColor: "var(--color-paper)" }}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div style={{ borderTop: "1px solid var(--color-rule)", paddingTop: "16px", marginBottom: "32px" }}>
            <span style={{ fontSize: "var(--text-xs)", letterSpacing: "var(--tracking-wider)", textTransform: "uppercase", color: "var(--color-accent)", fontWeight: 600 }}>
              SCHOOL ERP SYSTEMS
            </span>
          </div>
          <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-hero)", fontWeight: 700, lineHeight: 0.95, letterSpacing: "var(--tracking-tight)", color: "var(--color-ink)", maxWidth: "800px", marginBottom: "24px" }}>
            Two ways to bring your school into the digital age.
          </h1>
          <p style={{ fontSize: "var(--text-lg)", color: "var(--color-ink-muted)", lineHeight: 1.75, maxWidth: "600px" }}>
            Pioneers&apos; Software is free, fast, and ready in weeks. Custom App is a bespoke institutional system built entirely around one school. Same mission. Different scale.
          </p>
          <div className="flex gap-4 mt-8">
            <a href="#pioneers" style={{ backgroundColor: "var(--color-ink)", color: "#fff", fontSize: "var(--text-sm)", fontWeight: 600, padding: "10px 20px", borderRadius: "3px" }}>
              Pioneers&apos; Software ↓
            </a>
            <a href="#custom" style={{ border: "1.5px solid var(--color-rule)", color: "var(--color-ink)", fontSize: "var(--text-sm)", fontWeight: 600, padding: "10px 20px", borderRadius: "3px" }}>
              Custom App ↓
            </a>
          </div>
        </div>
      </section>

      {/* ── PIONEERS' SOFTWARE ── */}
      <section id="pioneers" style={{ backgroundColor: "var(--color-paper-warm)", padding: "80px 0" }}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <SectionHeader label="PIONEERS' SOFTWARE" headline="Your school, running digitally. Free to start." />

          <blockquote style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-2xl)", fontStyle: "italic", lineHeight: 1.3, color: "var(--color-ink)", marginBottom: "48px", maxWidth: "700px" }}>
            &ldquo;Built for the school owner who knows it&apos;s time, but cannot afford the wrong first step.&rdquo;
          </blockquote>

          <div style={{ marginBottom: "48px" }}>
            {pioneersFeatures.map((f) => (
              <FeatureRow key={f.name} name={f.name} desc={f.desc} free={f.free} />
            ))}
          </div>

          {/* Pricing table */}
          <div style={{ border: "1px solid var(--color-rule)", borderRadius: "4px", overflow: "hidden", marginBottom: "48px" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "var(--font-sans)" }}>
              <thead>
                <tr style={{ borderBottom: "2px solid var(--color-ink)" }}>
                  <th style={{ padding: "12px 16px", textAlign: "left", fontSize: "var(--text-xs)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--color-ink-faint)" }}>Configuration</th>
                  <th style={{ padding: "12px 16px", textAlign: "right", fontSize: "var(--text-xs)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--color-ink-faint)" }}>Per Term</th>
                  <th style={{ padding: "12px 16px", textAlign: "right", fontSize: "var(--text-xs)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--color-ink-faint)" }}>Per Year</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { config: "100 students — Core Admin only", term: "Free", year: "Free", green: true },
                  { config: "200 students — 1 paid module (GHS 2)", term: "GHS 400", year: "GHS 1,200" },
                  { config: "300 students — 3 modules (15% discount)", term: "GHS 1,785", year: "GHS 5,355" },
                  { config: "400 students — 4 modules (15% discount)", term: "GHS 3,400", year: "GHS 10,200" },
                ].map((r, i) => (
                  <tr key={i} style={{ backgroundColor: i % 2 === 0 ? "var(--color-paper)" : "var(--color-paper-warm)", borderBottom: "1px solid var(--color-rule)" }}>
                    <td style={{ padding: "14px 16px", fontSize: "var(--text-sm)", fontWeight: 500, color: "var(--color-ink)" }}>{r.config}</td>
                    <td style={{ padding: "14px 16px", fontSize: "var(--text-sm)", fontWeight: 700, textAlign: "right", color: r.green ? "var(--color-green)" : "var(--color-ink)" }}>{r.term}</td>
                    <td style={{ padding: "14px 16px", fontSize: "var(--text-sm)", fontWeight: 700, textAlign: "right", color: r.green ? "var(--color-green)" : "var(--color-ink)" }}>{r.year}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 5-year lock-in callout */}
          <div style={{ border: "1px solid var(--color-rule)", borderLeft: "3px solid var(--color-gold)", padding: "24px 28px", borderRadius: "0 4px 4px 0" }}>
            <p style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-xl)", fontStyle: "italic", lineHeight: 1.5, color: "var(--color-ink)" }}>
              &ldquo;Activate 3 or more modules and lock your per-student pricing for five academic years — regardless of how your school grows.&rdquo;
            </p>
            <p style={{ fontSize: "var(--text-sm)", color: "var(--color-ink-faint)", marginTop: "12px" }}>
              5-Year Price Lock · Effective on activation of 3+ paid modules
            </p>
          </div>

          <div style={{ marginTop: "40px" }}>
            <Link href="/contact?subject=pioneers" style={{ backgroundColor: "var(--color-ink)", color: "#fff", fontSize: "var(--text-sm)", fontWeight: 600, padding: "10px 20px", borderRadius: "3px", display: "inline-block" }}
              className="hover:bg-[var(--color-navy)]">
              Register Your School — Free →
            </Link>
          </div>
        </div>
      </section>

      {/* ── CUSTOM APP ── */}
      <section id="custom" style={{ backgroundColor: "var(--color-dark)", padding: "80px 0" }}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div style={{ borderTop: "1px solid var(--color-rule-dark)", paddingTop: "16px", marginBottom: "48px" }}>
            <span style={{ fontSize: "var(--text-xs)", letterSpacing: "var(--tracking-wider)", textTransform: "uppercase", color: "var(--color-gold)", fontWeight: 600, display: "block", marginBottom: "8px" }}>
              CUSTOM APP
            </span>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-4xl)", lineHeight: 1.1, letterSpacing: "var(--tracking-snug)", color: "#fff", fontWeight: 700 }}>
              A system built entirely around your institution.
            </h2>
          </div>

          <blockquote style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-2xl)", fontStyle: "italic", lineHeight: 1.3, color: "rgba(255,255,255,0.8)", marginBottom: "48px", maxWidth: "700px" }}>
            &ldquo;For the school that has outgrown shared infrastructure — and wants a system that carries its name.&rdquo;
          </blockquote>

          <div style={{ marginBottom: "48px" }}>
            {customFeatures.map((f) => (
              <FeatureRowDark key={f.name} name={f.name} desc={f.desc} />
            ))}
          </div>

          {/* Deployment options */}
          <div style={{ border: "1px solid var(--color-rule-dark)", borderRadius: "4px", padding: "28px", marginBottom: "40px" }}>
            <p style={{ fontSize: "var(--text-xs)", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-gold)", marginBottom: "16px" }}>DEPLOYMENT OPTIONS & PRICING</p>
            {[
              { label: "Web PWA Portal", price: "From GHS 30,000" },
              { label: "Web + Mobile App (iOS & Android)", price: "Custom quote" },
              { label: "Web + Desktop Native App", price: "Custom quote" },
              { label: "School Chain — Multi-campus deployment", price: "Custom quote" },
            ].map((o) => (
              <div key={o.label} style={{ borderTop: "1px solid var(--color-rule-dark)", padding: "14px 0", display: "flex", justifyContent: "space-between" }}>
                <span style={{ fontSize: "var(--text-sm)", color: "#fff", fontWeight: 500 }}>{o.label}</span>
                <span style={{ fontSize: "var(--text-sm)", color: "var(--color-gold)", fontWeight: 700, fontFamily: "var(--font-mono)" }}>{o.price}</span>
              </div>
            ))}
          </div>

          <div style={{ border: "1px solid var(--color-rule-dark)", borderLeft: "3px solid var(--color-gold)", padding: "24px 28px", borderRadius: "0 4px 4px 0", marginBottom: "40px" }}>
            <p style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-xl)", fontStyle: "italic", lineHeight: 1.5, color: "rgba(255,255,255,0.85)" }}>
              &ldquo;School chains and multi-campus institutions receive consolidated dashboards, cross-campus analytics, and a unified management layer. One login. Every campus.&rdquo;
            </p>
          </div>

          <Link href="/contact?subject=custom-app" style={{ backgroundColor: "#fff", color: "var(--color-ink)", fontSize: "var(--text-sm)", fontWeight: 600, padding: "10px 20px", borderRadius: "3px", display: "inline-block" }}>
            Request a Custom App Demo →
          </Link>
        </div>
      </section>

      {/* ── COMPARISON TABLE ── */}
      <section style={{ backgroundColor: "var(--color-paper)", padding: "80px 0" }}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <SectionHeader label="SIDE BY SIDE" headline="Pioneers' Software vs Custom App." />
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "var(--font-sans)", minWidth: "600px" }}>
              <thead>
                <tr style={{ borderBottom: `2px solid var(--color-ink)` }}>
                  <th style={{ padding: "12px 16px", textAlign: "left", fontSize: "var(--text-xs)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--color-ink-faint)", width: "33%" }}>Feature</th>
                  <th style={{ padding: "12px 16px", textAlign: "left", fontSize: "var(--text-sm)", fontWeight: 700, color: "var(--color-accent)", width: "33%" }}>Pioneers&apos; Software</th>
                  <th style={{ padding: "12px 16px", textAlign: "left", fontSize: "var(--text-sm)", fontWeight: 700, color: "var(--color-gold)", width: "33%" }}>Custom App</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((r, i) => (
                  <tr key={i} style={{ backgroundColor: i % 2 === 0 ? "var(--color-paper)" : "var(--color-paper-warm)", borderBottom: "1px solid var(--color-rule)" }}>
                    <td style={{ padding: "14px 16px", fontSize: "var(--text-sm)", fontWeight: 600, color: "var(--color-ink)" }}>{r.feature}</td>
                    <td style={{ padding: "14px 16px", fontSize: "var(--text-sm)", color: r.better === "p" ? "var(--color-green)" : "var(--color-ink-muted)" }}>{r.p}</td>
                    <td style={{ padding: "14px 16px", fontSize: "var(--text-sm)", color: r.better === "c" ? "var(--color-green)" : "var(--color-ink-muted)" }}>{r.c}</td>
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
