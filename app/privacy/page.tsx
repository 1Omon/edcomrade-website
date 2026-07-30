import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Privacy Policy — Edcomrade",
  description:
    "Privacy policy detailing how Edcomrade collects, protects, and uses student, school, and parent data.",
};

export default function PrivacyPage() {
  return (
    <main style={{ background: "var(--paper)" }}>
      <Navigation />

      {/* Hero */}
      <section
        style={{
          paddingTop: "140px",
          paddingBottom: "60px",
          background:
            "linear-gradient(135deg, var(--navy-dark) 0%, var(--navy) 100%)",
          color: "#fff",
        }}
      >
        <div
          className="container"
          style={{ textAlign: "center", maxWidth: "800px" }}
        >
          <span className="badge badge-gold" style={{ marginBottom: "20px" }}>
            Data Protection
          </span>
          <h1
            style={{
              fontSize: "clamp(36px, 5vw, 56px)",
              fontWeight: 700,
              lineHeight: 1.1,
              marginBottom: "16px",
              fontFamily: "var(--serif)",
            }}
          >
            Privacy Policy
          </h1>
          <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.75)" }}>
            Last updated: July 2026 · S.A Edcomrade Ventures
          </p>
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: "var(--section) 0", background: "#fff" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <article
            style={{ fontSize: "16px", color: "var(--ink)", lineHeight: 1.8 }}
            className="space-y-8"
          >
            <div>
              <h2
                style={{
                  fontSize: "24px",
                  fontWeight: 700,
                  color: "var(--navy)",
                  marginBottom: "12px",
                }}
              >
                1. Our Commitment to Student &amp; School Privacy
              </h2>
              <p>
                S.A Edcomrade Ventures (&quot;Edcomrade&quot;) recognizes that
                educational data — including student records, health logs,
                grades, and parent financial information — demands the highest
                standard of security and privacy. We do not sell or monetize
                personal student or family data under any circumstances.
              </p>
            </div>

            <div>
              <h2
                style={{
                  fontSize: "24px",
                  fontWeight: 700,
                  color: "var(--navy)",
                  marginBottom: "12px",
                }}
              >
                2. Information We Collect
              </h2>
              <ul
                style={{
                  listStyleType: "disc",
                  paddingLeft: "24px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                <li>
                  <strong>Institutional Information:</strong> School name,
                  contact details, intake structures, fee configurations, and
                  staff directories.
                </li>
                <li>
                  <strong>Student &amp; Parent Data:</strong> Name, class
                  placement, emergency contacts, medical notes (when entered
                  into Health Records), and ParentAide account credentials.
                </li>
                <li>
                  <strong>Transaction Records:</strong> Log of fee payments,
                  receipts, and order histories from ParentAide store module.
                  Financial credentials (card numbers, MoMo PINs) are processed
                  directly by certified payment gateways (Paystack) and are
                  never stored on Edcomrade servers.
                </li>
              </ul>
            </div>

            <div>
              <h2
                style={{
                  fontSize: "24px",
                  fontWeight: 700,
                  color: "var(--navy)",
                  marginBottom: "12px",
                }}
              >
                3. How We Use Data
              </h2>
              <p>
                Data is collected strictly to provide school administration
                services, facilitate parent-school communication, generate
                academic report cards, process fee billing, and enable
                ParentAide push notifications.
              </p>
            </div>

            <div>
              <h2
                style={{
                  fontSize: "24px",
                  fontWeight: 700,
                  color: "var(--navy)",
                  marginBottom: "12px",
                }}
              >
                4. Role-Based Access &amp; Security
              </h2>
              <p>
                Access to sensitive records (e.g., student health details or
                full financial books) is strictly restricted within the platform
                using role-based access control. Only designated school
                administrators, authorized health staff, or bursars can view
                specific module data.
              </p>
            </div>

            <div>
              <h2
                style={{
                  fontSize: "24px",
                  fontWeight: 700,
                  color: "var(--navy)",
                  marginBottom: "12px",
                }}
              >
                5. Data Retention &amp; Export Rights
              </h2>
              <p>
                Schools maintain full control over their records. School
                administrators may request full database exports or account
                deletion at any time. Archived records are retained securely in
                compliance with national educational data retention regulations.
              </p>
            </div>

            <div>
              <h2
                style={{
                  fontSize: "24px",
                  fontWeight: 700,
                  color: "var(--navy)",
                  marginBottom: "12px",
                }}
              >
                6. Contact Data Protection Officer
              </h2>
              <p>
                If you have questions about how your school or personal data is
                handled, please contact us via our{" "}
                <a
                  href="/contact"
                  style={{ color: "var(--cyan)", textDecoration: "underline" }}
                >
                  Contact Page
                </a>
                .
              </p>
            </div>
          </article>
        </div>
      </section>

      <Footer />
    </main>
  );
}
