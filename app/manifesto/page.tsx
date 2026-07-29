import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Edcomrade Manifesto — Helping Schools Build Their Future",
  description:
    "An open essay on why Ghana's best schools are invisible, why paper administration holds African education back, and how Edcomrade is changing both.",
};

export default function ManifestoPage() {
  return (
    <main style={{ backgroundColor: "var(--color-paper)" }}>
      <Navigation />

      {/* Header */}
      <section style={{ paddingTop: "140px", paddingBottom: "60px", backgroundColor: "var(--color-paper)" }}>
        <div className="max-w-[800px] mx-auto px-6">
          <div style={{ borderTop: "1px solid var(--color-rule)", paddingTop: "16px", marginBottom: "32px" }}>
            <span style={{ fontSize: "var(--text-xs)", letterSpacing: "var(--tracking-wider)", textTransform: "uppercase", color: "var(--color-accent)", fontWeight: 600 }}>
              AN ESSAY BY EDCOMRADE
            </span>
          </div>
          <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-hero)", fontWeight: 700, lineHeight: 0.95, letterSpacing: "var(--tracking-tight)", color: "var(--color-ink)", marginBottom: "24px" }}>
            Helping Schools Build Their Future.
          </h1>
          <p style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-2xl)", fontStyle: "italic", color: "var(--color-ink-muted)", lineHeight: 1.4, marginBottom: "32px" }}>
            Why paper administration holds African education back, why the best schools remain invisible, and how we are building the digital home for education.
          </p>
          <div style={{ borderTop: "1px solid var(--color-rule)", borderBottom: "1px solid var(--color-rule)", padding: "12px 0", fontSize: "var(--text-xs)", color: "var(--color-ink-faint)", fontFamily: "var(--font-mono)", display: "flex", justifyContent: "space-between" }}>
            <span>PUBLISHED BY EDCOMRADE MEDIA · ACCRA, GHANA</span>
          </div>
        </div>
      </section>

      {/* Essay Content */}
      <section style={{ backgroundColor: "var(--color-paper)", paddingBottom: "100px" }}>
        <div className="max-w-[800px] mx-auto px-6">
          <article className="space-y-8" style={{ fontSize: "var(--text-lg)", color: "var(--color-ink-muted)", lineHeight: 1.8 }}>
            
            <p className="drop-cap">
              Ghana is home to world-class educational institutions—built on legacy, sacrifice, and brilliance—that are effectively invisible to the digital world. Paper registers, WhatsApp announcements, hand-written receipt books, and end-of-term handouts are still the norm across 90% of private schools in West Africa.
            </p>

            <p>
              Fragmentation is the silent tax on African progress. Drowning in paper, isolated from parents, and lost on the map, schools are leaking the trust they have spent decades building. When a parent cannot find a school&apos;s verified record online, when a bursary receipt cannot be validated, when attendance records vanish into physical files — the barrier to institutional trust becomes insurmountable.
            </p>

            <blockquote style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-3xl)", fontStyle: "italic", color: "var(--color-ink)", lineHeight: 1.3, borderLeft: "3px solid var(--color-accent)", paddingLeft: "24px", margin: "48px 0" }}>
              &ldquo;Visibility is legitimacy. If a parent cannot find your verified record, the barrier to trust is insurmountable.&rdquo;
            </blockquote>

            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-3xl)", fontWeight: 700, color: "var(--color-ink)", paddingTop: "24px" }}>
              The Three Pillars of Educational Modernisation
            </h2>

            <p>
              We believe that modernising a school is not about selling complex software licenses. It requires solving three connected problems simultaneously:
            </p>

            <div className="space-y-6 pt-4">
              <div style={{ borderTop: "1px solid var(--color-rule)", paddingTop: "16px" }}>
                <span style={{ fontSize: "var(--text-xs)", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-accent)" }}>PILLAR I</span>
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-2xl)", fontWeight: 600, color: "var(--color-ink)", margin: "8px 0" }}>
                  Operational Infrastructure (The ERP)
                </h3>
                <p style={{ fontSize: "var(--text-base)", color: "var(--color-ink-muted)" }}>
                  Every school needs a reliable digital backbone. Admissions, student records, fee billing, timetables, and staff management must be consolidated into one secure cloud system.
                </p>
              </div>

              <div style={{ borderTop: "1px solid var(--color-rule)", paddingTop: "16px" }}>
                <span style={{ fontSize: "var(--text-xs)", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-accent)" }}>PILLAR II</span>
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-2xl)", fontWeight: 600, color: "var(--color-ink)", margin: "8px 0" }}>
                  Public Intelligence & Discovery (Schoolpedia)
                </h3>
                <p style={{ fontSize: "var(--text-base)", color: "var(--color-ink-muted)" }}>
                  Excellence deserves to be found. Parents deserve transparent information on curricula, fees, and facilities before making life-changing enrolment decisions.
                </p>
              </div>

              <div style={{ borderTop: "1px solid var(--color-rule)", paddingTop: "16px" }}>
                <span style={{ fontSize: "var(--text-xs)", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-accent)" }}>PILLAR III</span>
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-2xl)", fontWeight: 600, color: "var(--color-ink)", margin: "8px 0" }}>
                  Parent Connectivity (ParentAide)
                </h3>
                <p style={{ fontSize: "var(--text-base)", color: "var(--color-ink-muted)" }}>
                  The gap between school and home must be closed. When parents receive real-time attendance alerts, digital report sheets, and instant fee receipts on their phones, trust becomes automatic.
                </p>
              </div>
            </div>

            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-3xl)", fontWeight: 700, color: "var(--color-ink)", paddingTop: "32px" }}>
              Our Commitment
            </h2>

            <p>
              We built Pioneers&apos; Software with a core administration module that is permanently free. We did this because cost should never be the reason a Ghanaian school remains in the paper age. We charge only when a school is ready for advanced modular expansion.
            </p>

            <p>
              We are not just selling software. We are installing the digital foundation for the next fifty years of African education.
            </p>

            <div style={{ borderTop: "2px solid var(--color-ink)", paddingTop: "32px", marginTop: "64px" }}>
              <p style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-xl)", fontWeight: 700, color: "var(--color-ink)" }}>
                S.A Edcomrade Ventures
              </p>
              <p style={{ fontSize: "var(--text-sm)", color: "var(--color-ink-faint)" }}>
                Accra, Ghana · 2026
              </p>
              <div className="pt-6">
                <Link href="/contact" style={{ backgroundColor: "var(--color-ink)", color: "#fff", fontSize: "var(--text-sm)", fontWeight: 600, padding: "10px 20px", borderRadius: "3px", display: "inline-block" }}>
                  Join Us as a School Partner →
                </Link>
              </div>
            </div>

          </article>
        </div>
      </section>

      <Footer />
    </main>
  );
}
