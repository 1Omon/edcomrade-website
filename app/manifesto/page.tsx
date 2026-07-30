import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "The Edcomrade Manifesto — Helping Schools Build Their Future",
  description:
    "Why paper administration holds African education back, and how we are building the digital home for education.",
};

export default function ManifestoPage() {
  return (
    <main style={{ background: "var(--paper)" }}>
      <Navigation />

      {/* Hero */}
      <section style={{ paddingTop: "140px", paddingBottom: "60px", background: "linear-gradient(135deg, var(--navy-dark) 0%, var(--navy) 100%)", color: "#fff" }}>
        <div className="container" style={{ textAlign: "center", maxWidth: "760px" }}>
          <span className="badge badge-gold" style={{ marginBottom: "20px" }}>Our Manifesto</span>
          <h1 style={{ fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 700, lineHeight: 1.1, marginBottom: "20px" }}>
            Helping schools build their future.
          </h1>
          <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.75)", lineHeight: 1.6 }}>
            Why paper administration holds African education back, and how we are fixing it.
          </p>
        </div>
      </section>

      {/* Essay Content */}
      <section style={{ padding: "var(--section) 0", background: "#fff" }}>
        <div className="container" style={{ maxWidth: "720px" }}>
          <article style={{ fontSize: "18px", color: "var(--ink)", lineHeight: 1.8 }}>
            <p className="drop-cap" style={{ marginBottom: "24px" }}>
              Ghana is home to world-class educational institutions—built on legacy, sacrifice, and brilliance—that are effectively invisible to the digital world. Paper registers, hand-written receipt books, and end-of-term handouts are still the norm across 90% of private schools in West Africa.
            </p>

            <p style={{ marginBottom: "24px" }}>
              Paper administration is the silent tax on African progress. Drowning in physical files, isolated from parents, and lost on the map, schools leak the trust they have spent decades building.
            </p>

            <blockquote style={{ borderLeft: "4px solid var(--cyan)", paddingLeft: "24px", fontFamily: "var(--serif)", fontSize: "24px", fontStyle: "italic", color: "var(--navy)", margin: "40px 0", lineHeight: 1.4 }}>
              &ldquo;Visibility is legitimacy. If a parent cannot find your verified record, the barrier to trust is insurmountable.&rdquo;
            </blockquote>

            <p style={{ marginBottom: "24px" }}>
              We built Pioneers&apos; ERP with a core administration module that is permanently free. Cost should never be the reason a Ghanaian school remains trapped in the paper age.
            </p>

            <div style={{ marginTop: "48px", paddingTop: "32px", borderTop: "1px solid var(--rule)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
              <div>
                <div style={{ fontWeight: 700, color: "var(--navy)" }}>S.A Edcomrade Ventures</div>
                <div style={{ fontSize: "13px", color: "var(--ink-mid)" }}>Accra, Ghana</div>
              </div>
              <Link href="/contact?subject=register-school" className="btn-primary">
                Join us — get started free <ArrowRight size={15} />
              </Link>
            </div>
          </article>
        </div>
      </section>

      <Footer />
    </main>
  );
}
