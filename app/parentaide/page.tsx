import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ParentAide — The Essential App for School Parents",
  description:
    "Close the gap between school and home. Receive real-time attendance alerts, digital term reports, fee payment receipts, and direct school notices on your phone.",
};

export default function ParentaidePage() {
  return (
    <main style={{ backgroundColor: "var(--color-paper)" }}>
      <Navigation />

      {/* Hero */}
      <section style={{ paddingTop: "140px", paddingBottom: "80px", backgroundColor: "var(--color-paper)" }}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div style={{ borderTop: "1px solid var(--color-rule)", paddingTop: "16px", marginBottom: "32px" }}>
            <span style={{ fontSize: "var(--text-xs)", letterSpacing: "var(--tracking-wider)", textTransform: "uppercase", color: "var(--color-accent)", fontWeight: 600 }}>
              PARENTAIDE APP
            </span>
          </div>
          <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-hero)", fontWeight: 700, lineHeight: 0.95, letterSpacing: "var(--tracking-tight)", color: "var(--color-ink)", maxWidth: "850px", marginBottom: "24px" }}>
            The school day, delivered to your phone.
          </h1>
          <p style={{ fontSize: "var(--text-lg)", color: "var(--color-ink-muted)", lineHeight: 1.75, maxWidth: "600px", marginBottom: "32px" }}>
            ParentAide connects Ghanaian families to their children&apos;s schools. Real-time attendance, digital report cards, fee billing, and direct teacher notices — all in one clean mobile experience.
          </p>
          <div className="flex gap-4">
            <Link
              href="/contact?subject=parentaide"
              style={{
                backgroundColor: "var(--color-ink)", color: "#fff",
                fontSize: "var(--text-sm)", fontWeight: 600, padding: "12px 24px",
                borderRadius: "3px", display: "inline-block", letterSpacing: "0.02em",
              }}
              className="hover:bg-[var(--color-navy)]"
            >
              Get ParentAide for Your School →
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section style={{ backgroundColor: "var(--color-paper-warm)", padding: "80px 0" }}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div style={{ borderTop: "1px solid var(--color-rule)", paddingTop: "16px", marginBottom: "48px" }}>
            <span style={{ fontSize: "var(--text-xs)", letterSpacing: "var(--tracking-wider)", textTransform: "uppercase", color: "var(--color-accent)", fontWeight: 600, display: "block", marginBottom: "8px" }}>
              KEY CAPABILITIES
            </span>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-3xl)", fontWeight: 700, color: "var(--color-ink)" }}>
              What ParentAide gives families.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Instant Fee Billing & Paystack", desc: "Receive term invoices instantly and pay school fees via Mobile Money or bank card directly through Paystack. Get instant digital receipts." },
              { title: "Digital Term Reports", desc: "No more lost paper report sheets. Access term grades, teacher remarks, and subject performance histories anytime." },
              { title: "Attendance & Safety Alerts", desc: "Know when your child arrives at school. Instant push notifications when morning roll call is taken." },
              { title: "Direct School Channel", desc: "Receive official announcements, PTA meeting invites, and excursion notices directly from school leadership." },
            ].map((col, i) => (
              <div key={i} style={{ borderTop: "2px solid var(--color-accent)", paddingTop: "16px" }}>
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-xl)", fontWeight: 600, color: "var(--color-ink)", marginBottom: "12px", lineHeight: 1.3 }}>
                  {col.title}
                </h3>
                <p style={{ fontSize: "var(--text-sm)", color: "var(--color-ink-muted)", lineHeight: 1.7 }}>
                  {col.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works for Schools */}
      <section style={{ backgroundColor: "var(--color-dark)", padding: "80px 0" }}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div style={{ borderTop: "1px solid var(--color-rule-dark)", paddingTop: "16px", marginBottom: "48px" }}>
            <span style={{ fontSize: "var(--text-xs)", letterSpacing: "var(--tracking-wider)", textTransform: "uppercase", color: "var(--color-accent)", fontWeight: 600, display: "block", marginBottom: "8px" }}>
              AUTOMATIC SYNCHRONISATION
            </span>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-3xl)", fontWeight: 700, color: "#fff" }}>
              Zero extra work for school staff.
            </h2>
          </div>
          <p style={{ fontSize: "var(--text-lg)", color: "rgba(255,255,255,0.75)", lineHeight: 1.75, maxWidth: "700px", marginBottom: "32px" }}>
            ParentAide is not a separate system teachers have to manage. It connects directly to Pioneers&apos; Software or your Custom App instance. When a teacher marks attendance or a bursar logs a fee, ParentAide updates the parent automatically.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: "01", step: "School inputs data into ERP", desc: "Teachers enter marks and attendance into Pioneers' or Custom App as part of their standard routine." },
              { num: "02", step: "Instant secure sync", desc: "Edcomrade's data engine encrypts and syncs records to ParentAide in real time." },
              { num: "03", step: "Parents receive update", desc: "Parents get clear, readable notifications and receipts on their smartphones." },
            ].map((s) => (
              <div key={s.num} style={{ borderTop: "1px solid var(--color-rule-dark)", paddingTop: "16px" }}>
                <div style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-4xl)", fontWeight: 700, color: "var(--color-accent)", marginBottom: "8px" }}>{s.num}</div>
                <h3 style={{ fontFamily: "var(--font-sans)", fontSize: "var(--text-lg)", fontWeight: 600, color: "#fff", marginBottom: "8px" }}>{s.step}</h3>
                <p style={{ fontSize: "var(--text-sm)", color: "rgba(255,255,255,0.6)", lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "var(--color-paper)", padding: "80px 0" }}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 text-center">
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-4xl)", color: "var(--color-ink)", fontWeight: 700, marginBottom: "16px" }}>
            Bundled free with every Pioneers&apos; deployment.
          </h2>
          <p style={{ fontSize: "var(--text-lg)", color: "var(--color-ink-muted)", marginBottom: "32px" }}>
            Give your school&apos;s parents the app they will appreciate every single term.
          </p>
          <Link
            href="/software"
            style={{
              backgroundColor: "var(--color-ink)", color: "#fff",
              fontSize: "var(--text-sm)", fontWeight: 600, padding: "12px 24px",
              borderRadius: "3px", display: "inline-block",
            }}
          >
            Deploy Pioneers&apos; Software →
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
