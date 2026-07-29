"use client";

import { useState } from "react";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

/* ─── Shared: Section Rule Header ─────────────────── */
function SectionHeader({
  label,
  headline,
  dark = false,
}: {
  label: string;
  headline: string;
  dark?: boolean;
}) {
  return (
    <div
      style={{
        borderTop: `1px solid ${dark ? "var(--color-rule-dark)" : "var(--color-rule)"}`,
        paddingTop: "var(--space-4)",
        marginBottom: "var(--space-8)",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "var(--text-xs)",
          letterSpacing: "var(--tracking-wider)",
          textTransform: "uppercase",
          color: "var(--color-accent)",
          fontWeight: 600,
          display: "block",
          marginBottom: "var(--space-2)",
        }}
      >
        {label}
      </span>
      <h2
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: "var(--text-3xl)",
          letterSpacing: "var(--tracking-snug)",
          lineHeight: "var(--leading-snug)",
          color: dark ? "#FFFFFF" : "var(--color-ink)",
          fontWeight: 700,
        }}
      >
        {headline}
      </h2>
    </div>
  );
}

/* ─── Ticker Strip ─────────────────────────────────── */
function TickerStrip() {
  const items = "120 SCHOOLS ON SCHOOLPEDIA · 30 VERIFIED · 2–4 WEEKS TO DEPLOY · FREE TO START · POWERED BY PIONEERS' ·";
  return (
    <div
      style={{ borderTop: "1px solid var(--color-rule)", borderBottom: "1px solid var(--color-rule)", overflow: "hidden", padding: "10px 0" }}
    >
      <div
        className="flex whitespace-nowrap"
        style={{
          animation: "ticker 30s linear infinite",
          fontSize: "var(--text-xs)",
          letterSpacing: "var(--tracking-wide)",
          color: "var(--color-ink-faint)",
          fontFamily: "var(--font-mono)",
        }}
      >
        {[...Array(4)].map((_, i) => (
          <span key={i} className="px-8">{items}</span>
        ))}
      </div>
      <style>{`
        @keyframes ticker {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

/* ─── Article Card (Magazine style) ───────────────── */
function ArticleCard({ category, headline, date, excerpt, dark = false }: {
  category: string; headline: string; date: string; excerpt: string; dark?: boolean;
}) {
  return (
    <article
      style={{
        borderTop: `2px solid ${dark ? "var(--color-rule-dark)" : "var(--color-rule)"}`,
        paddingTop: "var(--space-4)",
        flex: "1",
      }}
    >
      <span style={{
        fontSize: "var(--text-xs)", letterSpacing: "var(--tracking-wide)",
        textTransform: "uppercase", color: "var(--color-accent)", fontWeight: 600,
        display: "block", marginBottom: "var(--space-2)",
      }}>
        {category}
      </span>
      <h3 style={{
        fontFamily: "var(--font-serif)", fontSize: "var(--text-xl)", fontWeight: 600,
        lineHeight: 1.3, color: dark ? "#fff" : "var(--color-ink)",
        marginBottom: "var(--space-2)",
      }}>
        {headline}
      </h3>
      <p style={{ fontSize: "var(--text-xs)", color: "var(--color-ink-faint)", marginBottom: "var(--space-3)" }}>
        {date}
      </p>
      <p style={{
        fontSize: "var(--text-sm)", color: dark ? "rgba(255,255,255,0.65)" : "var(--color-ink-muted)",
        lineHeight: 1.7,
      }}>
        {excerpt}
      </p>
    </article>
  );
}

/* ─── Tab Panel ────────────────────────────────────── */
const PRODUCTS_TAB = [
  {
    name: "Pioneers' Software",
    desc: "A free cloud ERP that gives any school a full administrative backbone in weeks. Manage fees, attendance, grades, and more — with zero upfront cost.",
    href: "/software",
  },
  {
    name: "ParentAide",
    desc: "The mobile app that closes the gap between school and home. Parents receive real-time updates, pay fees, and track their child's progress from their phone.",
    href: "/parentaide",
  },
  {
    name: "Schoolpedia",
    desc: "Ghana's verified school discovery platform. Parents find and compare schools; schools build digital reputations that outlast any flyer.",
    href: "/schoolpedia",
  },
];

function EcosystemTab() {
  const [active, setActive] = useState(0);
  return (
    <div className="grid lg:grid-cols-2 gap-12 items-start">
      {/* Left: tab list */}
      <div className="flex flex-col gap-0" style={{ borderLeft: "1px solid var(--color-rule)" }}>
        {PRODUCTS_TAB.map((p, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className="text-left px-6 py-5 transition-colors"
            style={{
              borderLeft: `3px solid ${i === active ? "var(--color-accent)" : "transparent"}`,
              marginLeft: "-1px",
            }}
          >
            <div style={{
              fontFamily: "var(--font-sans)", fontSize: "var(--text-lg)", fontWeight: 600,
              color: i === active ? "var(--color-ink)" : "var(--color-ink-faint)",
              transition: "color 0.2s",
            }}>
              {p.name}
            </div>
            {i === active && (
              <p style={{ fontSize: "var(--text-sm)", color: "var(--color-ink-muted)", marginTop: "8px", lineHeight: 1.7 }}>
                {p.desc}
              </p>
            )}
          </button>
        ))}
        <div className="px-6 pt-4">
          <Link href={PRODUCTS_TAB[active].href}
            style={{
              fontSize: "var(--text-sm)", color: "var(--color-accent)",
              fontWeight: 600, textDecoration: "underline",
            }}>
            Learn about {PRODUCTS_TAB[active].name} →
          </Link>
        </div>
      </div>
      {/* Right: placeholder illustration */}
      <div
        style={{
          aspectRatio: "4/5", background: "var(--color-paper-warm)",
          border: "1px solid var(--color-rule)", display: "flex",
          alignItems: "center", justifyContent: "center",
          color: "var(--color-ink-faint)", fontSize: "var(--text-sm)",
          fontFamily: "var(--font-mono)",
        }}
      >
        {/* TODO: replace with product screenshot */}
        {PRODUCTS_TAB[active].name}
      </div>
    </div>
  );
}

/* ─── Homepage ─────────────────────────────────────── */
export default function HomePageClient() {
  return (
    <main style={{ backgroundColor: "var(--color-paper)" }}>
      <Navigation />

      {/* ── Section 1: The Masthead ── */}
      <section style={{ paddingTop: "120px", paddingBottom: "0", backgroundColor: "var(--color-paper)" }}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-end pb-16">
            {/* Left: headline */}
            <div className="lg:col-span-3">
              <h1
                style={{
                  fontFamily: "var(--font-serif)", fontSize: "var(--text-hero)",
                  fontWeight: 700, lineHeight: 0.95, letterSpacing: "-0.03em",
                  color: "var(--color-ink)", marginBottom: "var(--space-6)",
                }}
              >
                Education&apos;s<br />
                ally in the<br />
                <span style={{ color: "var(--color-accent)" }}>digital</span><br />
                age.
              </h1>
              <p style={{
                fontFamily: "var(--font-sans)", fontSize: "var(--text-lg)",
                color: "var(--color-ink-muted)", lineHeight: 1.75,
                maxWidth: "520px", marginBottom: "var(--space-8)",
              }}>
                Edcomrade gives Ghanaian schools the tools to run well, the visibility to be found, and the media to be known.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/software"
                  style={{
                    backgroundColor: "var(--color-ink)", color: "#fff",
                    fontSize: "var(--text-sm)", fontWeight: 600,
                    padding: "10px 20px", borderRadius: "3px",
                    letterSpacing: "0.02em", transition: "background 0.2s",
                    display: "inline-block",
                  }}
                  className="hover:bg-[var(--color-navy)]"
                >
                  Explore the Platform →
                </Link>
                <Link
                  href="/manifesto"
                  style={{
                    fontSize: "var(--text-sm)", color: "var(--color-ink)",
                    fontWeight: 500, textDecoration: "underline",
                    textUnderlineOffset: "3px",
                  }}
                >
                  Read Our Manifesto
                </Link>
              </div>
            </div>

            {/* Right: portrait photograph */}
            <div className="lg:col-span-2">
              <div
                style={{
                  border: "1px solid var(--color-rule)", position: "relative",
                  aspectRatio: "3/4", backgroundColor: "var(--color-paper-warm)",
                  overflow: "hidden",
                }}
              >
                {/* Placeholder for school photograph */}
                <div style={{
                  position: "absolute", inset: 0, display: "flex",
                  alignItems: "center", justifyContent: "center",
                  color: "var(--color-ink-faint)", fontSize: "var(--text-xs)",
                  fontFamily: "var(--font-mono)", textAlign: "center", padding: "24px",
                }}>
                  {/* TODO: replace with Ghanaian school photograph */}
                  SCHOOL PHOTOGRAPH
                </div>
              </div>
              <p style={{
                fontSize: "var(--text-xs)", color: "var(--color-ink-faint)",
                fontStyle: "italic", marginTop: "8px",
              }}>
                A private school in Accra — one of 120 listed on Schoolpedia.
              </p>
            </div>
          </div>
        </div>

        {/* Scrolling Ticker */}
        <TickerStrip />
      </section>

      {/* ── Section 2: Three Departments ── */}
      <section style={{ backgroundColor: "var(--color-paper)", padding: "80px 0" }}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <SectionHeader label="THE EDCOMRADE ECOSYSTEM" headline="Three departments. One mission." />
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mt-8">
            {[
              {
                dept: "SCHOOL ERP SYSTEMS",
                headline: "Give every school a digital backbone.",
                desc: "Pioneers' Software is free, fast, and built for Ghana. Custom App goes further — a bespoke system built entirely for one institution.",
                href: "/software",
              },
              {
                dept: "SCHOOLPEDIA",
                headline: "Make the right schools findable.",
                desc: "Ghana's verified school directory. Parents discover and compare. Schools build digital reputations that last longer than any flyer.",
                href: "/schoolpedia",
              },
              {
                dept: "EDMEDIA & PUBLISHING",
                headline: "Tell the stories schools deserve.",
                desc: "Digital magazine. School coverage. Brand consultation. Edcomrade publishes the narratives that make excellent schools known.",
                href: "/edmedia",
              },
            ].map((d) => (
              <div
                key={d.dept}
                style={{ borderTop: "2px solid var(--color-accent)", paddingTop: "var(--space-4)" }}
              >
                <span style={{
                  fontSize: "var(--text-xs)", letterSpacing: "var(--tracking-wider)",
                  textTransform: "uppercase", color: "var(--color-ink-faint)",
                  fontWeight: 600, display: "block", marginBottom: "12px",
                }}>
                  {d.dept}
                </span>
                <h3 style={{
                  fontFamily: "var(--font-serif)", fontSize: "var(--text-2xl)",
                  fontWeight: 600, lineHeight: 1.2, color: "var(--color-ink)",
                  marginBottom: "12px",
                }}>
                  {d.headline}
                </h3>
                <p style={{
                  fontSize: "var(--text-base)", color: "var(--color-ink-muted)",
                  lineHeight: 1.75, marginBottom: "16px",
                }}>
                  {d.desc}
                </p>
                <Link href={d.href} style={{
                  fontSize: "var(--text-sm)", color: "var(--color-accent)",
                  fontWeight: 600, textDecoration: "underline", textUnderlineOffset: "3px",
                }}>
                  Explore →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: The Problem ── */}
      <section style={{ backgroundColor: "var(--color-paper-warm)", padding: "80px 0" }}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <SectionHeader label="THE PROBLEM" headline="Why Edcomrade exists." />
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <blockquote style={{
                fontFamily: "var(--font-serif)", fontSize: "var(--text-3xl)",
                fontStyle: "italic", lineHeight: 1.2, color: "var(--color-ink)",
                letterSpacing: "var(--tracking-snug)", marginBottom: "var(--space-8)",
              }}>
                &ldquo;Ghana&apos;s best schools are often invisible to the parents searching for them.&rdquo;
              </blockquote>
              <p style={{ fontSize: "var(--text-lg)", color: "var(--color-ink-muted)", lineHeight: 1.75, marginBottom: "var(--space-4)" }}>
                Most Ghanaian schools still run on paper registers, WhatsApp groups, and end-of-term handouts. Every fee receipt is hand-written. Every grade is manually compiled. Every absence goes unreported until the parent shows up. The administration eats the education.
              </p>
              <p style={{ fontSize: "var(--text-lg)", color: "var(--color-ink-muted)", lineHeight: 1.75 }}>
                Meanwhile, parents searching for quality schools rely on word-of-mouth and roadside banners. The best-run private schools in Kumasi and Accra are invisible to families a neighbourhood away. Edcomrade changes both sides of this equation.
              </p>
            </div>

            {/* Stat column */}
            <div style={{ borderLeft: "1px solid var(--color-rule)", paddingLeft: "var(--space-8)" }}>
              {[
                { num: "90%", label: "of Ghanaian schools still manage records on paper" },
                { num: "120+", label: "schools now discoverable on Schoolpedia" },
                { num: "0 GHS", label: "to start on Pioneers' Software — free by design" },
              ].map((s) => (
                <div key={s.num} style={{ marginBottom: "var(--space-8)", paddingBottom: "var(--space-8)", borderBottom: "1px solid var(--color-rule)" }}>
                  <div style={{
                    fontFamily: "var(--font-serif)", fontSize: "var(--text-4xl)",
                    fontWeight: 700, color: "var(--color-ink)", lineHeight: 1,
                    marginBottom: "8px",
                  }}>
                    {s.num}
                  </div>
                  <p style={{ fontSize: "var(--text-sm)", color: "var(--color-ink-muted)", lineHeight: 1.6 }}>
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 4: How the Ecosystem Works ── */}
      <section style={{ backgroundColor: "var(--color-paper)", padding: "80px 0" }}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <SectionHeader label="HOW EDCOMRADE WORKS" headline="Three products. One school. One parent. Connected." />
          <EcosystemTab />
        </div>
      </section>

      {/* ── Section 5: From the Magazine ── */}
      <section style={{ backgroundColor: "var(--color-dark)", padding: "80px 0" }}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <SectionHeader label="FROM EDCOMRADE MEDIA" headline="Stories from the schools building Ghana's future." dark />
          <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
            <ArticleCard
              category="School Spotlight"
              headline="The Accra school that digitised in two weeks — and never looked back."
              date="June 2026 · EdComrade Media"
              excerpt="When St. Francis Ridge switched to Pioneers' Software, the bursar was sceptical. Eight days later, she was training the rest of the staff."
              dark
            />
            <ArticleCard
              category="Parent Intelligence"
              headline="Why Ghanaian parents are choosing schools differently in 2026."
              date="May 2026 · EdComrade Media"
              excerpt="Schoolpedia data shows that verified schools attract three times more direct enquiries than unverified listings. The data gap is becoming a trust gap."
              dark
            />
            <ArticleCard
              category="School Spotlight"
              headline="EdMedia's inaugural school spotlight: Hecta International."
              date="April 2026 · EdComrade Media"
              excerpt="Hecta International became the first school in the Digital 100. We documented every step of their onboarding — and what changed in week one."
              dark
            />
          </div>
          <div style={{ marginTop: "var(--space-8)", borderTop: "1px solid var(--color-rule-dark)", paddingTop: "var(--space-4)" }}>
            <Link href="/edmedia" style={{ color: "var(--color-accent)", fontSize: "var(--text-sm)", fontWeight: 600 }}>
              Read the Magazine →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Section 6: Testimonials ── */}
      <section style={{ backgroundColor: "var(--color-paper)", padding: "80px 0" }}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <SectionHeader label="WHAT SCHOOL HEADS SAY" headline="Heard from the schools already running on Edcomrade." />
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                quote: "Within a month we had full digital records for every student. Our parents actually WhatsApp to thank us now.",
                name: "Mrs. Abena Asante",
                role: "Proprietress, Sunrise Preparatory School, Kumasi",
              },
              {
                quote: "I was afraid it would be complicated. But my staff learned it in one session. The bursar won't go back to manual.",
                name: "Mr. Kwame Osei-Bonsu",
                role: "Headmaster, New Horizon Academy, Accra",
              },
              {
                quote: "Schoolpedia put us in front of parents we'd never have reached with our signage. Three new enrolments in the first term.",
                name: "Dr. Efua Mensah",
                role: "Director, Goldfield International School, Takoradi",
              },
            ].map((t, i) => (
              <div key={i}>
                {/* TODO: replace with real testimonial */}
                <blockquote style={{
                  fontFamily: "var(--font-serif)", fontSize: "var(--text-xl)",
                  fontStyle: "italic", lineHeight: 1.4, color: "var(--color-ink)",
                  marginBottom: "var(--space-4)",
                }}>
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div style={{ borderTop: "1px solid var(--color-rule)", paddingTop: "var(--space-3)" }}>
                  <p style={{ fontSize: "var(--text-sm)", fontWeight: 700, color: "var(--color-ink)" }}>{t.name}</p>
                  <p style={{ fontSize: "var(--text-sm)", color: "var(--color-ink-faint)" }}>{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 7: CTA Banner ── */}
      <section style={{ backgroundColor: "var(--color-ink)", padding: "80px 0" }}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 style={{
            fontFamily: "var(--font-serif)", fontSize: "var(--text-4xl)",
            fontWeight: 700, color: "#fff", lineHeight: 1.1,
            letterSpacing: "var(--tracking-snug)", marginBottom: "var(--space-4)",
          }}>
            The September deployment window is open.
          </h2>
          <p style={{
            fontSize: "var(--text-lg)", color: "rgba(255,255,255,0.65)",
            lineHeight: 1.75, marginBottom: "var(--space-8)",
          }}>
            Register before August 30th — schools confirm in the order they apply.
          </p>
          <Link
            href="/contact?subject=deploy"
            style={{
              backgroundColor: "#fff", color: "var(--color-ink)",
              fontSize: "var(--text-sm)", fontWeight: 600,
              padding: "10px 20px", borderRadius: "3px",
              display: "inline-block", letterSpacing: "0.02em",
            }}
          >
            Register Your School
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
