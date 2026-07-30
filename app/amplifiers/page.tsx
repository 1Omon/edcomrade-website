import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Amplifiers Programme — Partner With Edcomrade",
  description:
    "Earn recurring commission bringing Edcomrade's School Management Software to schools for up to three years.",
};

const tiers = [
  { name: "Scout", trigger: "1–5 schools", commission: "8%", desc: "Recurring term commission for 12 months" },
  { name: "Connector", trigger: "6–10 schools", commission: "12%", desc: "Recurring term commission for 24 months" },
  { name: "Builder", trigger: "11–25 schools", commission: "16%", desc: "Recurring term commission for 36 months" },
  { name: "Amplifier", trigger: "25+ schools", commission: "20%", desc: "Recurring term commission for 36 months + bonuses" },
];

export default function AmplifiersPage() {
  return (
    <main style={{ background: "var(--paper)" }}>
      <Navigation />

      {/* Hero */}
      <section style={{ paddingTop: "140px", paddingBottom: "80px", background: "linear-gradient(135deg, var(--navy-dark) 0%, var(--navy) 100%)", color: "#fff" }}>
        <div className="container" style={{ textAlign: "center", maxWidth: "860px" }}>
          <span className="badge badge-gold" style={{ marginBottom: "20px" }}>
            <TrendingUp size={12} /> Partner Programme
          </span>
          <h1 style={{ fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 700, lineHeight: 1.1, marginBottom: "20px" }}>
            Help schools digitize. Earn recurring income.
          </h1>
          <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.75)", lineHeight: 1.6, marginBottom: "36px" }}>
            Introduce our free School Management Software to private schools. Every time a school pays their premium subscription, you earn up to 20% recurring commission.
          </p>
          <Link href="https://grind.xcuxion.com" target="_blank" rel="noopener noreferrer" className="btn-white">
            Join Amplifiers on Grind <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* How it works */}
      <section style={{ padding: "var(--section) 0", background: "#fff" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "560px", margin: "0 auto 60px" }}>
            <p className="eyebrow" style={{ marginBottom: "12px" }}>How it works</p>
            <h2 style={{ fontSize: "clamp(30px, 4vw, 44px)", fontWeight: 700, color: "var(--navy)" }}>
              Three simple steps.
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "32px", maxWidth: "900px", margin: "0 auto" }}>
            {[
              { step: "01", title: "Sign up on Grind", desc: "Create your free Amplifiers account on the Grind platform and get access to your referral dashboard." },
              { step: "02", title: "Introduce schools", desc: "Share Edcomrade with school proprietors, headmasters, or administrators in your network." },
              { step: "03", title: "Earn every term", desc: "When a school you referred pays their subscription, your commission lands in your account automatically." },
            ].map((s) => (
              <div key={s.step} className="card" style={{ padding: "32px" }}>
                <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--cyan)", marginBottom: "12px" }}>Step {s.step}</div>
                <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--navy)", marginBottom: "10px" }}>{s.title}</h3>
                <p style={{ fontSize: "14px", color: "var(--ink-mid)", lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commission Tiers */}
      <section style={{ padding: "var(--section) 0", background: "var(--paper-tint)" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "560px", margin: "0 auto 60px" }}>
            <p className="eyebrow" style={{ marginBottom: "12px" }}>Simple tier structure</p>
            <h2 style={{ fontSize: "clamp(30px, 4vw, 44px)", fontWeight: 700, color: "var(--navy)" }}>
              Earn more as your portfolio grows.
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "24px" }}>
            {tiers.map((t) => (
              <div key={t.name} className="card" style={{ padding: "32px", textAlign: "center" }}>
                <span className="badge badge-blue" style={{ marginBottom: "16px" }}>{t.name}</span>
                <div style={{ fontSize: "13px", color: "var(--ink-mid)", fontWeight: 600, marginBottom: "12px" }}>{t.trigger}</div>
                <div style={{ fontSize: "48px", fontWeight: 700, color: "var(--navy)", fontFamily: "var(--serif)", marginBottom: "12px" }}>
                  {t.commission}
                </div>
                <p style={{ fontSize: "13px", color: "var(--ink-mid)", lineHeight: 1.5 }}>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "var(--section) 0", background: "var(--navy-dark)", color: "#fff", textAlign: "center" }}>
        <div className="container" style={{ maxWidth: "560px" }}>
          <h2 style={{ fontSize: "clamp(30px, 4vw, 44px)", fontWeight: 700, marginBottom: "16px" }}>
            Start earning this term.
          </h2>
          <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.7)", marginBottom: "32px", lineHeight: 1.65 }}>
            Sign up as an independent sales partner on Grind and get access to your referral dashboard, marketing materials, and real-time tracking.
          </p>
          <Link href="https://grind.xcuxion.com" target="_blank" rel="noopener noreferrer" className="btn-white">
            Apply now on Grind <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
