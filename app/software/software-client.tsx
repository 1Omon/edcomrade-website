"use client";

import Link from "next/link";
import Image from "next/image";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { CheckCircle, ArrowRight, ShieldCheck, Zap } from "lucide-react";

export default function SoftwareClient() {
  return (
    <main style={{ background: "var(--paper)" }}>
      <Navigation />

      {/* Hero */}
      <section style={{ paddingTop: "140px", paddingBottom: "80px", background: "linear-gradient(135deg, var(--navy-dark) 0%, var(--navy) 100%)", color: "#fff" }}>
        <div className="container" style={{ textAlign: "center", maxWidth: "760px" }}>
          <span className="badge badge-green" style={{ marginBottom: "20px" }}>
            School Administration Module — 100% Free
          </span>
          <h1 style={{ fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 700, lineHeight: 1.1, marginBottom: "20px" }}>
            Upgrade your school's operating system.
          </h1>
          <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.75)", lineHeight: 1.6, marginBottom: "36px" }}>
            Replace outdated systems and expensive software with Edcomrade's free School Administration Module. Get full control over admissions, fees, and student data, completely integrated with Schoolpedia and ParentAide.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "14px", flexWrap: "wrap" }}>
            <Link href="/contact?subject=register-school" className="btn-white">
              Claim Free School ERP <ArrowRight size={16} />
            </Link>
            <a href="#pricing" className="btn-ghost" style={{ color: "#fff", borderColor: "rgba(255,255,255,0.3)" }}>
              View pricing
            </a>
          </div>
        </div>
      </section>

      {/* Real Screenshot Preview */}
      <section style={{ padding: "var(--section) 0", background: "#fff" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <div className="photo-card" style={{ maxWidth: "960px", margin: "0 auto", aspectRatio: "16/9", boxShadow: "0 20px 60px rgba(26,60,94,0.12)" }}>
            <Image
              src="/modern-school-management-dashboard-interface--clea.jpg"
              alt="School management dashboard interface"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section style={{ padding: "var(--section) 0", background: "var(--paper-tint)" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "560px", margin: "0 auto 60px" }}>
            <p className="eyebrow" style={{ marginBottom: "12px" }}>Built for clarity</p>
            <h2 style={{ fontSize: "clamp(30px, 4vw, 44px)", fontWeight: 700, color: "var(--navy)" }}>
              Everything included in the free core edition.
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
            {[
              { title: "Digital Student Records", desc: "Centralise student bio data, emergency contacts, and class placement in seconds." },
              { title: "Automated Fee Invoicing", desc: "Generate term bills and collect instant payments via Paystack and Mobile Money." },
              { title: "Attendance Tracking", desc: "Mark daily attendance on any tablet or smartphone with zero paperwork." },
              { title: "Report Card Generator", desc: "Calculate grades and publish printable report sheets in a few clicks." },
              { title: "Staff Directory", desc: "Manage teacher profiles, subject assignments, and school announcements." },
              { title: "Parent Communication", desc: "Send direct SMS and mobile app notices for PTA meetings and fee reminders." },
            ].map((f) => (
              <div key={f.title} className="card" style={{ padding: "28px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                  <CheckCircle size={18} color="var(--green-mid)" />
                  <h3 style={{ fontSize: "18px", fontWeight: 700, color: "var(--navy)" }}>{f.title}</h3>
                </div>
                <p style={{ fontSize: "14px", color: "var(--ink-mid)", lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Simple Pricing Section */}
      <section id="pricing" style={{ padding: "var(--section) 0", background: "#fff" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "560px", margin: "0 auto 60px" }}>
            <p className="eyebrow" style={{ marginBottom: "12px" }}>Honest pricing</p>
            <h2 style={{ fontSize: "clamp(30px, 4vw, 44px)", fontWeight: 700, color: "var(--navy)" }}>
              No hidden fees. Pick what fits your school.
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "32px", maxWidth: "900px", margin: "0 auto" }}>
            
            {/* Free Plan */}
            <div className="card" style={{ padding: "40px", borderTop: "4px solid var(--green-mid)" }}>
              <span className="badge badge-green" style={{ marginBottom: "16px" }}>FREE TIER</span>
              <h3 style={{ fontSize: "28px", fontWeight: 700, color: "var(--navy)", marginBottom: "8px" }}>School Admin Module</h3>
              <p style={{ fontSize: "14px", color: "var(--ink-mid)", marginBottom: "24px" }}>Perfect for primary and junior high schools modernising their operations.</p>
              <div style={{ fontSize: "42px", fontWeight: 700, color: "var(--navy)", marginBottom: "24px", fontFamily: "var(--serif)" }}>
                GHS 0 <span style={{ fontSize: "14px", color: "var(--ink-mid)", fontFamily: "var(--sans)", fontWeight: 400 }}>/ forever</span>
              </div>
              <ul style={{ marginBottom: "32px", fontSize: "14px", color: "var(--ink-mid)" }}>
                <li style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}><CheckCircle size={16} color="var(--green-mid)" /> Student & Staff Database</li>
                <li style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}><CheckCircle size={16} color="var(--green-mid)" /> Basic Paystack Fee Invoicing</li>
                <li style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}><CheckCircle size={16} color="var(--green-mid)" /> Attendance & Terminal Reports</li>
                <li style={{ display: "flex", alignItems: "center", gap: "8px" }}><CheckCircle size={16} color="var(--green-mid)" /> Schoolpedia Verified Listing</li>
              </ul>
              <Link href="/contact?subject=register-school" className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                Get started free <ArrowRight size={16} />
              </Link>
            </div>

            {/* Custom App Plan */}
            <div className="card" style={{ padding: "40px", borderTop: "4px solid var(--gold)" }}>
              <span className="badge badge-gold" style={{ marginBottom: "16px" }}>CUSTOM INSTITUTIONAL</span>
              <h3 style={{ fontSize: "28px", fontWeight: 700, color: "var(--navy)", marginBottom: "8px" }}>Custom App</h3>
              <p style={{ fontSize: "14px", color: "var(--ink-mid)", marginBottom: "24px" }}>For established private schools wanting their own brand & domain.</p>
              <div style={{ fontSize: "42px", fontWeight: 700, color: "var(--navy)", marginBottom: "24px", fontFamily: "var(--serif)" }}>
                Custom <span style={{ fontSize: "14px", color: "var(--ink-mid)", fontFamily: "var(--sans)", fontWeight: 400 }}>/ quote</span>
              </div>
              <ul style={{ marginBottom: "32px", fontSize: "14px", color: "var(--ink-mid)" }}>
                <li style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}><CheckCircle size={16} color="var(--gold)" /> Dedicated domain (.edu.gh)</li>
                <li style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}><CheckCircle size={16} color="var(--gold)" /> Isolated dedicated database server</li>
                <li style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}><CheckCircle size={16} color="var(--gold)" /> Branded ParentAide Mobile App</li>
                <li style={{ display: "flex", alignItems: "center", gap: "8px" }}><CheckCircle size={16} color="var(--gold)" /> Dedicated on-site staff training</li>
              </ul>
              <Link href="/contact?subject=custom-app" className="btn-ghost" style={{ width: "100%", justifyContent: "center" }}>
                Request consultation
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "var(--section) 0", background: "var(--navy-dark)", color: "#fff", textAlign: "center" }}>
        <div className="container" style={{ maxWidth: "600px" }}>
          <h2 style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 700, marginBottom: "20px" }}>
            Ready to set up your school?
          </h2>
          <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.7)", marginBottom: "32px" }}>
            Our team handles initial onboarding and data setup in under 7 days.
          </p>
          <Link href="/contact?subject=register-school" className="btn-white">
            Register your school free <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
