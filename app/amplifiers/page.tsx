import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Amplifiers Programme — Work With Edcomrade",
  description:
    "Join the Edcomrade Amplifiers on Grind and earn recurring commission bringing Pioneers' Software to schools in your community for up to three years.",
};

const tiers = [
  {
    name: "Scout",
    trigger: "First 5 schools activated",
    commission: "8%",
    desc: "Recurring on every term billing for 12 months",
  },
  {
    name: "Connector",
    trigger: "10+ schools activated",
    commission: "12%",
    desc: "Recurring on every term billing for 24 months",
  },
  {
    name: "Builder",
    trigger: "25+ schools activated",
    commission: "16%",
    desc: "Recurring on every term billing for 36 months",
  },
  {
    name: "Amplifier",
    trigger: "50+ schools activated",
    commission: "20%",
    desc: "Recurring on every term billing for 36 months + bonus",
  },
];

const incomeProjections = [
  {
    schools: "10 schools",
    avgTerm: "GHS 1,200/term avg",
    commRate: "12%",
    termEarning: "GHS 1,440",
    yearEarning: "GHS 4,320",
  },
  {
    schools: "20 schools",
    avgTerm: "GHS 1,200/term avg",
    commRate: "12%",
    termEarning: "GHS 2,880",
    yearEarning: "GHS 8,640",
  },
  {
    schools: "50 schools",
    avgTerm: "GHS 1,500/term avg",
    commRate: "20%",
    termEarning: "GHS 15,000",
    yearEarning: "GHS 45,000",
  },
];

export default function AmplifiersPage() {
  return (
    <main style={{ backgroundColor: "var(--color-paper)" }}>
      <Navigation />

      {/* Hero */}
      <section style={{ paddingTop: "140px", paddingBottom: "80px" }}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div
            style={{
              borderTop: "1px solid var(--color-rule)",
              paddingTop: "16px",
              marginBottom: "32px",
            }}
          >
            <span
              style={{
                fontSize: "var(--text-xs)",
                letterSpacing: "var(--tracking-wider)",
                textTransform: "uppercase",
                color: "var(--color-accent)",
                fontWeight: 600,
              }}
            >
              WORK WITH US
            </span>
          </div>
          <h1
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "var(--text-hero)",
              fontWeight: 700,
              lineHeight: 0.95,
              letterSpacing: "var(--tracking-tight)",
              color: "var(--color-ink)",
              maxWidth: "900px",
              marginBottom: "24px",
            }}
          >
            Amplify what schools can do in your community.
          </h1>
          <p
            style={{
              fontSize: "var(--text-lg)",
              color: "var(--color-ink-muted)",
              lineHeight: 1.75,
              maxWidth: "600px",
            }}
          >
            Bring Pioneers&apos; Software to schools near you. Earn real
            recurring income for up to three years. Join the Amplifiers
            Programme on Grind.
          </p>
        </div>
      </section>

      {/* What is Grind — dark section */}
      <section
        style={{ backgroundColor: "var(--color-dark)", padding: "80px 0" }}
      >
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div
            style={{
              borderTop: "1px solid var(--color-rule-dark)",
              paddingTop: "16px",
              marginBottom: "32px",
            }}
          >
            <span
              style={{
                fontSize: "var(--text-xs)",
                letterSpacing: "var(--tracking-wider)",
                textTransform: "uppercase",
                color: "var(--color-accent)",
                fontWeight: 600,
              }}
            >
              THE GRIND PLATFORM
            </span>
          </div>
          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "var(--text-3xl)",
              color: "#fff",
              lineHeight: 1.3,
              maxWidth: "800px",
              marginBottom: "32px",
            }}
          >
            Grind is the platform for independent sales reps and social media
            marketers who promote the products they believe in — in return for
            commissions and recognition.
          </p>
          <p
            style={{
              fontSize: "var(--text-lg)",
              color: "rgba(255,255,255,0.65)",
              lineHeight: 1.75,
              maxWidth: "700px",
            }}
          >
            As an Edcomrade Amplifier on Grind, you bring Pioneers&apos;
            Software to schools in your community and earn real recurring income
            for up to three years. Every term a school you signed up pays their
            subscription, you earn your commission automatically.
          </p>
        </div>
      </section>

      {/* Tier System */}
      <section
        style={{
          backgroundColor: "var(--color-paper-warm)",
          padding: "80px 0",
        }}
      >
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div
            style={{
              borderTop: "1px solid var(--color-rule)",
              paddingTop: "16px",
              marginBottom: "48px",
            }}
          >
            <span
              style={{
                fontSize: "var(--text-xs)",
                letterSpacing: "var(--tracking-wider)",
                textTransform: "uppercase",
                color: "var(--color-accent)",
                fontWeight: 600,
                display: "block",
                marginBottom: "8px",
              }}
            >
              COMMISSION TIERS
            </span>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "var(--text-3xl)",
                fontWeight: 700,
                lineHeight: 1.15,
                color: "var(--color-ink)",
              }}
            >
              The more schools you bring, the more you earn.
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {tiers.map((t) => (
              <div
                key={t.name}
                style={{
                  borderTop: "2px solid var(--color-accent)",
                  paddingTop: "16px",
                }}
              >
                <span
                  style={{
                    fontSize: "var(--text-xs)",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--color-ink-faint)",
                    display: "block",
                    marginBottom: "8px",
                  }}
                >
                  {t.trigger}
                </span>
                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "var(--text-2xl)",
                    fontWeight: 700,
                    color: "var(--color-ink)",
                    marginBottom: "8px",
                  }}
                >
                  {t.name}
                </h3>
                <div
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "var(--text-4xl)",
                    fontWeight: 700,
                    color: "var(--color-accent)",
                    lineHeight: 1,
                    marginBottom: "12px",
                  }}
                >
                  {t.commission}
                </div>
                <p
                  style={{
                    fontSize: "var(--text-sm)",
                    color: "var(--color-ink-muted)",
                    lineHeight: 1.6,
                  }}
                >
                  {t.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Income Projection Table */}
      <section
        style={{ backgroundColor: "var(--color-paper)", padding: "80px 0" }}
      >
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div
            style={{
              borderTop: "1px solid var(--color-rule)",
              paddingTop: "16px",
              marginBottom: "48px",
            }}
          >
            <span
              style={{
                fontSize: "var(--text-xs)",
                letterSpacing: "var(--tracking-wider)",
                textTransform: "uppercase",
                color: "var(--color-accent)",
                fontWeight: 600,
                display: "block",
                marginBottom: "8px",
              }}
            >
              INCOME PROJECTIONS
            </span>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "var(--text-3xl)",
                fontWeight: 700,
                lineHeight: 1.15,
                color: "var(--color-ink)",
              }}
            >
              What your portfolio earns you.
            </h2>
          </div>
          <div style={{ overflowX: "auto" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontFamily: "var(--font-sans)",
              }}
            >
              <thead>
                <tr style={{ borderBottom: "2px solid var(--color-ink)" }}>
                  {[
                    "Portfolio Size",
                    "Avg School Billing",
                    "Commission Rate",
                    "Per Term",
                    "Per Academic Year",
                  ].map((h) => (
                    <th
                      key={h}
                      style={{
                        padding: "12px 16px",
                        textAlign: "left",
                        fontSize: "var(--text-xs)",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        color: "var(--color-ink-faint)",
                      }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {incomeProjections.map((r, i) => (
                  <tr
                    key={i}
                    style={{
                      backgroundColor:
                        i % 2 === 0
                          ? "var(--color-paper)"
                          : "var(--color-paper-warm)",
                      borderBottom: "1px solid var(--color-rule)",
                    }}
                  >
                    <td
                      style={{
                        padding: "14px 16px",
                        fontSize: "var(--text-base)",
                        fontWeight: 700,
                        color: "var(--color-ink)",
                      }}
                    >
                      {r.schools}
                    </td>
                    <td
                      style={{
                        padding: "14px 16px",
                        fontSize: "var(--text-sm)",
                        color: "var(--color-ink-muted)",
                        fontFamily: "var(--font-mono)",
                      }}
                    >
                      {r.avgTerm}
                    </td>
                    <td
                      style={{
                        padding: "14px 16px",
                        fontSize: "var(--text-sm)",
                        color: "var(--color-accent)",
                        fontWeight: 700,
                      }}
                    >
                      {r.commRate}
                    </td>
                    <td
                      style={{
                        padding: "14px 16px",
                        fontSize: "var(--text-sm)",
                        fontWeight: 700,
                        color: "var(--color-ink)",
                      }}
                    >
                      {r.termEarning}
                    </td>
                    <td
                      style={{
                        padding: "14px 16px",
                        fontSize: "var(--text-base)",
                        fontWeight: 700,
                        color: "var(--color-green)",
                      }}
                    >
                      {r.yearEarning}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* How to Join */}
      <section
        style={{
          backgroundColor: "var(--color-paper-warm)",
          padding: "80px 0",
        }}
      >
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div
            style={{
              borderTop: "1px solid var(--color-rule)",
              paddingTop: "16px",
              marginBottom: "48px",
            }}
          >
            <span
              style={{
                fontSize: "var(--text-xs)",
                letterSpacing: "var(--tracking-wider)",
                textTransform: "uppercase",
                color: "var(--color-accent)",
                fontWeight: 600,
                display: "block",
                marginBottom: "8px",
              }}
            >
              HOW TO JOIN
            </span>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "var(--text-3xl)",
                fontWeight: 700,
                lineHeight: 1.15,
                color: "var(--color-ink)",
              }}
            >
              Three steps to your first commission.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                num: "01",
                step: "Apply on Grind",
                desc: "Create your Amplifier profile on grind.xcuxion.com. Takes less than five minutes.",
              },
              {
                num: "02",
                step: "Complete your training",
                desc: "Seven days. Digital. Learn the product, learn the pitch, learn what schools need to hear.",
              },
              {
                num: "03",
                step: "Make your first school visit",
                desc: "Walk into any school within range. Present Pioneers'. Sign them up. Your commission starts the moment they activate.",
              },
            ].map((s) => (
              <div
                key={s.num}
                style={{
                  borderTop: "1px solid var(--color-rule)",
                  paddingTop: "16px",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "var(--text-5xl)",
                    fontWeight: 700,
                    color: "var(--color-rule)",
                    lineHeight: 1,
                    marginBottom: "12px",
                  }}
                >
                  {s.num}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "var(--text-xl)",
                    fontWeight: 600,
                    color: "var(--color-ink)",
                    marginBottom: "8px",
                  }}
                >
                  {s.step}
                </h3>
                <p
                  style={{
                    fontSize: "var(--text-base)",
                    color: "var(--color-ink-muted)",
                    lineHeight: 1.75,
                  }}
                >
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "48px" }}>
            <Link
              href="https://grind.xcuxion.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: "var(--color-accent)",
                color: "#fff",
                fontSize: "var(--text-sm)",
                fontWeight: 600,
                padding: "12px 24px",
                borderRadius: "3px",
                display: "inline-block",
                letterSpacing: "0.02em",
              }}
            >
              Join the Amplifiers on Grind →
            </Link>
          </div>
        </div>
      </section>

      {/* Sales Executive Role */}
      <section
        id="sales-executive"
        style={{ backgroundColor: "var(--color-dark)", padding: "80px 0" }}
      >
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div
            style={{
              borderTop: "1px solid var(--color-rule-dark)",
              paddingTop: "16px",
              marginBottom: "48px",
            }}
          >
            <span
              style={{
                fontSize: "var(--text-xs)",
                letterSpacing: "var(--tracking-wider)",
                textTransform: "uppercase",
                color: "var(--color-gold)",
                fontWeight: 600,
                display: "block",
                marginBottom: "8px",
              }}
            >
              SALES EXECUTIVE ROLE
            </span>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "var(--text-3xl)",
                fontWeight: 700,
                lineHeight: 1.15,
                color: "#fff",
              }}
            >
              Sell the Custom App. Close institutional deals.
            </h2>
          </div>
          <p
            style={{
              fontSize: "var(--text-lg)",
              color: "rgba(255,255,255,0.65)",
              lineHeight: 1.75,
              maxWidth: "700px",
              marginBottom: "40px",
            }}
          >
            The Custom App is a high-ticket institutional product — starting
            from GHS 30,000 per deployment. Sales Executives are experienced
            relationship builders who engage school proprietors, boards, and
            chains at the decision-making level. Bracket commissions starting at
            5% of contract value.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                label: "WHAT YOU DO",
                val: "Identify, pitch, and close Custom App deals with established private schools and chains",
              },
              {
                label: "WHAT YOU EARN",
                val: "5–8% of contract value. GHS 30,000 minimum contract = GHS 1,500 minimum commission per close",
              },
              {
                label: "WHAT YOU NEED",
                val: "Sales track record. School sector experience preferred. Own transport and phone required.",
              },
            ].map((i) => (
              <div
                key={i.label}
                style={{
                  borderTop: "1px solid var(--color-rule-dark)",
                  paddingTop: "16px",
                }}
              >
                <span
                  style={{
                    fontSize: "var(--text-xs)",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--color-gold)",
                    display: "block",
                    marginBottom: "8px",
                  }}
                >
                  {i.label}
                </span>
                <p
                  style={{
                    fontSize: "var(--text-sm)",
                    color: "rgba(255,255,255,0.65)",
                    lineHeight: 1.7,
                  }}
                >
                  {i.val}
                </p>
              </div>
            ))}
          </div>
          <Link
            href="https://grind.xcuxion.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              border: "1.5px solid var(--color-gold)",
              color: "var(--color-gold)",
              fontSize: "var(--text-sm)",
              fontWeight: 600,
              padding: "10px 20px",
              borderRadius: "3px",
              display: "inline-block",
            }}
          >
            Apply as a Sales Executive →
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
