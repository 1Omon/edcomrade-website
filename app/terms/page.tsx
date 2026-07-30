import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Terms of Service — Edcomrade",
  description: "Terms and conditions governing the use of Edcomrade platforms, services, and applications.",
};

export default function TermsPage() {
  return (
    <main style={{ background: "var(--paper)" }}>
      <Navigation />

      {/* Hero */}
      <section
        style={{
          paddingTop: "140px",
          paddingBottom: "60px",
          background: "linear-gradient(135deg, var(--navy-dark) 0%, var(--navy) 100%)",
          color: "#fff",
        }}
      >
        <div className="container" style={{ textAlign: "center", maxWidth: "800px" }}>
          <span className="badge badge-gold" style={{ marginBottom: "20px" }}>
            Legal Framework
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
            Terms of Service
          </h1>
          <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.75)" }}>
            Last updated: July 2026 · S.A Edcomrade Ventures
          </p>
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: "var(--section) 0", background: "#fff" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <article style={{ fontSize: "16px", color: "var(--ink)", lineHeight: 1.8 }} className="space-y-8">
            <div>
              <h2 style={{ fontSize: "24px", fontWeight: 700, color: "var(--navy)", marginBottom: "12px" }}>
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing or using the services, websites (including edcomrade.com, pioneers.edcomrade.com, and schoolpedia.edcomrade.com), and mobile applications (including ParentAide) provided by S.A Edcomrade Ventures (&quot;Edcomrade&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), you agree to be bound by these Terms of Service.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: "24px", fontWeight: 700, color: "var(--navy)", marginBottom: "12px" }}>
                2. Software Provision &amp; Module Licensing
              </h2>
              <p style={{ marginBottom: "12px" }}>
                <strong>School Administration Module (Core):</strong> The core School Administration Module of Pioneers&apos; Software is provided completely free of charge to registered educational institutions. This includes basic admissions, student records, health tracking, timetabling, basic fee collection, ParentAide access, and a verified Schoolpedia listing.
              </p>
              <p>
                <strong>Paid Add-on Modules:</strong> Advanced modules (including Classroom &amp; Exam, Hostel &amp; Boarding, HR Management, Finance Management, Alumni Management, Transportation &amp; Safety, and E-Commerce &amp; Inventory) are optional paid add-ons priced on a per-student, per-term basis. Subscriptions are billed per academic term (3 terms per calendar year).
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: "24px", fontWeight: 700, color: "var(--navy)", marginBottom: "12px" }}>
                3. User Account Responsibilities
              </h2>
              <p>
                School administrators, staff, parents, and partners are responsible for maintaining the confidentiality of their account login credentials. You agree to notify Edcomrade immediately of any unauthorized access to your account.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: "24px", fontWeight: 700, color: "var(--navy)", marginBottom: "12px" }}>
                4. Payments, Billing &amp; Refunds
              </h2>
              <p style={{ marginBottom: "12px" }}>
                School fee payments made by parents via ParentAide are processed securely through payment gateways (including Paystack). Payments are disbursed according to the agreed schedule.
              </p>
              <p>
                Module subscription fees for paid add-ons are due at the beginning of each academic term. Deactivating a paid module will take effect at the end of the current paid term.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: "24px", fontWeight: 700, color: "var(--navy)", marginBottom: "12px" }}>
                5. Intellectual Property &amp; Data Ownership
              </h2>
              <p>
                Each educational institution retains full ownership of all student, financial, academic, and operational data inputted into the platform. Data can be exported at any time in standard formats (CSV/PDF). Edcomrade retains all intellectual property rights to the platform infrastructure, codebases, and brand marks.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: "24px", fontWeight: 700, color: "var(--navy)", marginBottom: "12px" }}>
                6. Limitation of Liability
              </h2>
              <p>
                Edcomrade provides services on an &quot;as is&quot; and &quot;as available&quot; basis. While we maintain industry-standard security and uptime measures, Edcomrade shall not be liable for indirect, incidental, or consequential damages resulting from service interruptions or third-party payment gateway failures.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: "24px", fontWeight: 700, color: "var(--navy)", marginBottom: "12px" }}>
                7. Contact &amp; Enquiries
              </h2>
              <p>
                For questions regarding these Terms, please contact S.A Edcomrade Ventures via our <a href="/contact" style={{ color: "var(--cyan)", textDecoration: "underline" }}>Contact Page</a>.
              </p>
            </div>
          </article>
        </div>
      </section>

      <Footer />
    </main>
  );
}
