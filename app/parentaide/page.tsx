import type { Metadata } from "next";
import Image from "next/image";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { ArrowRight, Smartphone, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "ParentAide — Mobile App for School Parents",
  description:
    "Receive attendance alerts, digital report cards, and fee payment receipts directly on your phone.",
};

export default function ParentaidePage() {
  return (
    <main style={{ background: "var(--paper)" }}>
      <Navigation />

      {/* Hero */}
      <section style={{ paddingTop: "140px", paddingBottom: "80px", background: "linear-gradient(135deg, var(--navy-dark) 0%, var(--navy) 100%)", color: "#fff" }}>
        <div className="container" style={{ textAlign: "center", maxWidth: "860px" }}>
          <span className="badge badge-green" style={{ marginBottom: "20px" }}>
            <Smartphone size={12} /> ParentAide Mobile App
          </span>
          <h1 style={{ fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 700, lineHeight: 1.1, marginBottom: "20px" }}>
            Stay connected to your child&apos;s school day.
          </h1>
          <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.75)", lineHeight: 1.6, marginBottom: "36px" }}>
            ParentAide brings real-time attendance alerts, digital report cards, and instant Mobile Money fee payments straight to parents&apos; mobile phones.
          </p>
          <Link href="/contact?subject=parentaide" className="btn-white">
            Get ParentAide for your school <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Real Parent Photo */}
      <section style={{ padding: "var(--section) 0", background: "#fff" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "48px", alignItems: "center" }}>
            <div className="photo-card" style={{ aspectRatio: "4/3" }}>
              <Image src="/african-parent-smiling-while-checking-child-s-grad.jpeg" alt="Parent checking child report card on smartphone" fill style={{ objectFit: "cover" }} />
            </div>
            <div>
              <p className="eyebrow" style={{ marginBottom: "12px" }}>Peace of mind</p>
              <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700, color: "var(--navy)", marginBottom: "20px" }}>
                No more lost report sheets or paper receipts.
              </h2>
              <div style={{ fontSize: "15px", color: "var(--ink-mid)" }}>
                {[
                  "Pay school fees instantly via MTN MoMo, Telecel Cash, or Visa.",
                  "View term grades and historical progress graphs anytime.",
                  "Get morning attendance roll-call alerts for child safety.",
                  "Receive official school and PTA notices on your phone.",
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "start", gap: "10px", marginBottom: "12px" }}>
                    <CheckCircle size={18} color="var(--green-mid)" style={{ flexShrink: 0, marginTop: "2px" }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
