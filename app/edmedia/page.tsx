import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import Link from "next/link";
import EdmediaClientForm from "./edmedia-client";

export const metadata: Metadata = {
  title: "EdMedia & Publishing — Stories Schools Deserve",
  description:
    "Edcomrade's media arm covers schools with digital magazines, event photography, brand consultation, and school spotlight features across Ghana.",
};

const articles = [
  { category: "School Spotlight", headline: "The Accra school that digitised in two weeks — and never looked back.", date: "June 2026 · EdComrade Media", excerpt: "When St. Francis Ridge switched to Pioneers' Software, the bursar was sceptical. Eight days later, she was training the rest of the staff." },
  { category: "Parent Intelligence", headline: "Why Ghanaian parents are choosing schools differently in 2026.", date: "May 2026 · EdComrade Media", excerpt: "Schoolpedia data shows that verified schools attract three times more direct enquiries than unverified listings. The data gap is becoming a trust gap." },
  { category: "School Spotlight", headline: "EdMedia's inaugural school spotlight: Hecta International.", date: "April 2026 · EdComrade Media", excerpt: "Hecta International became the first school in the Digital 100. We documented every step of their onboarding — and what changed in week one." },
];

export default function EdmediaPage() {
  return (
    <main style={{ backgroundColor: "var(--color-paper)" }}>
      <Navigation />

      {/* Dark Hero */}
      <section style={{ backgroundColor: "var(--color-dark)", paddingTop: "140px", paddingBottom: "80px" }}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div style={{ borderTop: "1px solid var(--color-rule-dark)", paddingTop: "16px", marginBottom: "32px" }}>
            <span style={{ fontSize: "var(--text-xs)", letterSpacing: "var(--tracking-wider)", textTransform: "uppercase", color: "var(--color-accent)", fontWeight: 600 }}>
              EDMEDIA & PUBLISHING
            </span>
          </div>
          <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-hero)", fontWeight: 700, lineHeight: 0.95, letterSpacing: "var(--tracking-tight)", color: "#fff", maxWidth: "900px", marginBottom: "24px" }}>
            We tell the stories schools deserve to be known for.
          </h1>
          <p style={{ fontSize: "var(--text-lg)", color: "rgba(255,255,255,0.65)", lineHeight: 1.75, maxWidth: "600px" }}>
            EdMedia covers excellence in Ghanaian education — through digital publishing, event coverage, and brand consultation that makes schools memorable.
          </p>
        </div>
      </section>

      {/* Three Services */}
      <section style={{ backgroundColor: "var(--color-paper)", padding: "80px 0" }}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div style={{ borderTop: "1px solid var(--color-rule)", paddingTop: "16px", marginBottom: "48px" }}>
            <span style={{ fontSize: "var(--text-xs)", letterSpacing: "var(--tracking-wider)", textTransform: "uppercase", color: "var(--color-accent)", fontWeight: 600, display: "block", marginBottom: "8px" }}>
              WHAT EDMEDIA DOES
            </span>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-3xl)", fontWeight: 700, lineHeight: 1.15, color: "var(--color-ink)" }}>
              Three ways we make schools visible.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                label: "DIGITAL MAGAZINE",
                headline: "The EdComrade Magazine",
                desc: "The first premium digital publication dedicated to education in Ghana. Exclusive interviews with school leaders, policy analysis, and student success stories. Schools featured here are featured nationally.",
              },
              {
                label: "SCHOOL COVERAGE",
                headline: "Event & Campus Photography",
                desc: "Professional coverage of open days, graduation ceremonies, inter-school competitions, and flagship events. Content you can use — for your website, your social media, your Schoolpedia profile.",
              },
              {
                label: "BRAND CONSULTATION",
                headline: "School Brand Positioning",
                desc: "Your school has a story. We help you articulate it — through messaging strategy, visual identity review, and a content plan that builds the kind of trust that fills your admissions pipeline.",
              },
            ].map((s) => (
              <div key={s.label} style={{ borderTop: "2px solid var(--color-accent)", paddingTop: "16px" }}>
                <span style={{ fontSize: "var(--text-xs)", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-ink-faint)", display: "block", marginBottom: "12px" }}>{s.label}</span>
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-2xl)", fontWeight: 600, color: "var(--color-ink)", marginBottom: "12px", lineHeight: 1.2 }}>{s.headline}</h3>
                <p style={{ fontSize: "var(--text-base)", color: "var(--color-ink-muted)", lineHeight: 1.75 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Articles from the Magazine */}
      <section style={{ backgroundColor: "var(--color-paper-warm)", padding: "80px 0" }}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div style={{ borderTop: "1px solid var(--color-rule)", paddingTop: "16px", marginBottom: "48px" }}>
            <span style={{ fontSize: "var(--text-xs)", letterSpacing: "var(--tracking-wider)", textTransform: "uppercase", color: "var(--color-accent)", fontWeight: 600, display: "block", marginBottom: "8px" }}>
              FROM THE MAGAZINE
            </span>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-3xl)", fontWeight: 700, lineHeight: 1.15, color: "var(--color-ink)" }}>
              Latest stories.
            </h2>
          </div>
          <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
            {articles.map((a) => (
              <article key={a.headline} style={{ flex: 1, borderTop: "2px solid var(--color-rule)", paddingTop: "16px" }}>
                <span style={{ fontSize: "var(--text-xs)", letterSpacing: "var(--tracking-wide)", textTransform: "uppercase", color: "var(--color-accent)", fontWeight: 600, display: "block", marginBottom: "8px" }}>{a.category}</span>
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-xl)", fontWeight: 600, lineHeight: 1.3, color: "var(--color-ink)", marginBottom: "8px" }}>{a.headline}</h3>
                <p style={{ fontSize: "var(--text-xs)", color: "var(--color-ink-faint)", marginBottom: "12px" }}>{a.date}</p>
                <p style={{ fontSize: "var(--text-sm)", color: "var(--color-ink-muted)", lineHeight: 1.7 }}>{a.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section style={{ backgroundColor: "var(--color-paper)", padding: "80px 0" }}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div style={{ borderTop: "1px solid var(--color-rule)", paddingTop: "16px", marginBottom: "48px" }}>
            <span style={{ fontSize: "var(--text-xs)", letterSpacing: "var(--tracking-wider)", textTransform: "uppercase", color: "var(--color-accent)", fontWeight: 600, display: "block", marginBottom: "8px" }}>
              WORK WITH EDMEDIA
            </span>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-3xl)", fontWeight: 700, lineHeight: 1.15, color: "var(--color-ink)" }}>
              Tell us about your school.
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-16">
            <EdmediaClientForm />
            <div>
              <p style={{ fontSize: "var(--text-lg)", color: "var(--color-ink-muted)", lineHeight: 1.75, marginBottom: "32px" }}>
                EdMedia works with a small number of schools each quarter. We respond to every enquiry within two business days and schedule a discovery call before any commitment is made.
              </p>
              <div style={{ borderTop: "1px solid var(--color-rule)", paddingTop: "16px" }}>
                <p style={{ fontSize: "var(--text-sm)", color: "var(--color-ink-faint)", lineHeight: 1.7 }}>
                  For general media or partnership enquiries, email us directly at{" "}
                  <Link href="mailto:media@edcomrade.com" style={{ color: "var(--color-accent)" }}>media@edcomrade.com</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
