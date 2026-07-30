import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { ArrowRight, CheckCircle, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Amplifiers Programme — Partner With Edcomrade",
  description:
    "Earn recurring commission bringing Edcomrade's School Administration Module to schools in your community for up to three years.",
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
            Help schools digitise. Earn recurring income.
          </h1>
          <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.75)", lineHeight: 1.6, marginBottom: "36px" }}>
            Introduce Edcomrade&apos;s School Administration Module to private schools in your region. Every time a school pays their term fee subscription, you earn up to 20% recurring commission.
          </p>
          <Link href="https://grind.xcuxion.com" target="_blank" rel="noopener noreferrer" className="btn-white">
            Join Amplifiers on Grind <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Commission Tiers */}
      <section style={{ padding: "var(--section) 0", background: "#fff" }}>
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
      <section style={{ padding: "var(--section) 0", background: "var(--paper-tint)", textAlign: "center" }}>
        <div className="container" style={{ maxWidth: "560px" }}>
          <h2 style={{ fontSize: "clamp(30px, 4vw, 44px)", fontWeight: 700, color: "var(--navy)", marginBottom: "16px" }}>
            Start earning this term.
          </h2>
          <p style={{ fontSize: "16px", color: "var(--ink-mid)", marginBottom: "32px" }}>
            Sign up as an independent sales partner on Grind and get access to marketing materials and tracking.
          </p>
          <Link href="https://grind.xcuxion.com" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Apply now on Grind <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
