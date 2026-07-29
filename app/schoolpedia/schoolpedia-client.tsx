"use client";

import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

function SectionHeader({ label, headline, dark = false }: { label: string; headline: string; dark?: boolean }) {
  return (
    <div style={{ borderTop: `1px solid ${dark ? "var(--color-rule-dark)" : "var(--color-rule)"}`, paddingTop: "16px", marginBottom: "48px" }}>
      <span style={{ fontFamily: "var(--font-sans)", fontSize: "var(--text-xs)", letterSpacing: "var(--tracking-wider)", textTransform: "uppercase", color: dark ? "var(--color-accent)" : "var(--color-accent)", fontWeight: 600, display: "block", marginBottom: "8px" }}>
        {label}
      </span>
      <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-3xl)", letterSpacing: "var(--tracking-snug)", lineHeight: 1.15, color: dark ? "#fff" : "var(--color-ink)", fontWeight: 700 }}>
        {headline}
      </h2>
    </div>
  );
}

export default function SchoolpediaPageClient() {
  return (
    <main style={{ backgroundColor: "var(--color-paper)" }}>
      <Navigation />

      {/* Hero */}
      <section style={{ paddingTop: "140px", paddingBottom: "80px", backgroundColor: "var(--color-paper)" }}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div style={{ borderTop: "1px solid var(--color-rule)", paddingTop: "16px", marginBottom: "32px" }}>
            <span style={{ fontSize: "var(--text-xs)", letterSpacing: "var(--tracking-wider)", textTransform: "uppercase", color: "var(--color-accent)", fontWeight: 600 }}>
              SCHOOLPEDIA DIRECTORY
            </span>
          </div>
          <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-hero)", fontWeight: 700, lineHeight: 0.95, letterSpacing: "var(--tracking-tight)", color: "var(--color-ink)", maxWidth: "850px", marginBottom: "24px" }}>
            Find the right school. Know what you&apos;re choosing.
          </h1>
          <p style={{ fontSize: "var(--text-lg)", color: "var(--color-ink-muted)", lineHeight: 1.75, maxWidth: "600px", marginBottom: "32px" }}>
            Schoolpedia maps verified private schools across Ghana — giving parents transparent fee structures, academic results, and direct enrolment channels.
          </p>
          <Link
            href="https://schoolpedia.edcomrade.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: "var(--color-ink)", color: "#fff",
              fontSize: "var(--text-sm)", fontWeight: 600, padding: "12px 24px",
              borderRadius: "3px", display: "inline-block", letterSpacing: "0.02em",
            }}
            className="hover:bg-[var(--color-navy)]"
          >
            Launch Schoolpedia Directory ↗
          </Link>
        </div>
      </section>

      {/* For Parents */}
      <section style={{ backgroundColor: "var(--color-paper-warm)", padding: "80px 0" }}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <SectionHeader label="FOR PARENTS & GUARDIANS" headline="A transparent way to find and compare schools in Ghana." />
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                title: "Targeted Search",
                desc: "Find schools by region, district, fee tier, curriculum (BECE, Cambridge, WASSCE), and facilities. Zero roadside billboard guesswork.",
              },
              {
                title: "Side-by-Side Comparison",
                desc: "Compare two institutions across key metrics — student-teacher ratio, transport availability, boarding options, and verified term fees.",
              },
              {
                title: "Direct Enrolment",
                desc: "Submit admission enquiries and application forms directly through ParentAide with instant notifications on application status.",
              },
            ].map((col, i) => (
              <div key={i} style={{ borderTop: "2px solid var(--color-accent)", paddingTop: "16px" }}>
                <span style={{ fontSize: "var(--text-xs)", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-ink-faint)", display: "block", marginBottom: "8px" }}>
                  0{i + 1} FEATURE
                </span>
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-2xl)", fontWeight: 600, color: "var(--color-ink)", marginBottom: "12px", lineHeight: 1.2 }}>
                  {col.title}
                </h3>
                <p style={{ fontSize: "var(--text-base)", color: "var(--color-ink-muted)", lineHeight: 1.75 }}>
                  {col.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For School Proprietors — Dark Section */}
      <section style={{ backgroundColor: "var(--color-dark)", padding: "80px 0" }}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <SectionHeader label="FOR SCHOOL PROPRIETORS" headline="Your school's verified digital profile." dark />
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                title: "Verified Trust Badge",
                desc: "Schools running on Pioneers' Software receive official verification. Authenticated photos, verified fee structures, and direct contact details.",
              },
              {
                title: "Institutional PR Platform",
                desc: "Publish school achievements, academic performance records, sporting milestones, and open house announcements directly to your public profile.",
              },
              {
                title: "Local Search Dominance",
                desc: "Rank first when parents search for private schools in your district. Schoolpedia profiles are SEO-optimised for local searches.",
              },
            ].map((col, i) => (
              <div key={i} style={{ borderTop: "1px solid var(--color-rule-dark)", paddingTop: "16px" }}>
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-xl)", fontWeight: 600, color: "#fff", marginBottom: "12px" }}>
                  {col.title}
                </h3>
                <p style={{ fontSize: "var(--text-sm)", color: "rgba(255,255,255,0.65)", lineHeight: 1.7 }}>
                  {col.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Directory Numbers */}
      <section style={{ backgroundColor: "var(--color-paper)", padding: "80px 0" }}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div style={{ borderTop: "1px solid var(--color-rule)", paddingTop: "16px", marginBottom: "48px" }}>
            <span style={{ fontSize: "var(--text-xs)", letterSpacing: "var(--tracking-wider)", textTransform: "uppercase", color: "var(--color-accent)", fontWeight: 600, display: "block", marginBottom: "8px" }}>
              DIRECTORY METRICS
            </span>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-3xl)", fontWeight: 700, color: "var(--color-ink)" }}>
              The numbers across Ghana.
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { num: "120+", label: "Schools listed across Ghana" },
              { num: "30+", label: "Verified school profiles" },
              { num: "0 GHS", label: "Cost to list your basic profile" },
              { num: "100%", label: "Integrated with ParentAide" },
            ].map((stat, i) => (
              <div key={i} style={{ borderTop: "1px solid var(--color-rule)", paddingTop: "16px" }}>
                <div style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-4xl)", fontWeight: 700, color: "var(--color-ink)", lineHeight: 1, marginBottom: "8px" }}>
                  {stat.num}
                </div>
                <p style={{ fontSize: "var(--text-sm)", color: "var(--color-ink-muted)", lineHeight: 1.5 }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "var(--color-ink)", padding: "80px 0" }}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 text-center">
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-4xl)", color: "#fff", fontWeight: 700, marginBottom: "16px" }}>
            Every Pioneers&apos; school gets a free verified profile.
          </h2>
          <p style={{ fontSize: "var(--text-lg)", color: "rgba(255,255,255,0.65)", marginBottom: "32px" }}>
            Get your school onto Pioneers&apos; Software today to verify your profile and reach prospective parents.
          </p>
          <Link
            href="/software"
            style={{
              backgroundColor: "#fff", color: "var(--color-ink)",
              fontSize: "var(--text-sm)", fontWeight: 600, padding: "12px 24px",
              borderRadius: "3px", display: "inline-block",
            }}
          >
            Claim Free Pioneers&apos; Software →
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
