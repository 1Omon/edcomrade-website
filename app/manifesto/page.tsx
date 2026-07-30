import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { ArrowRight, Compass, ShieldCheck, Zap, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "The Edcomrade Manifesto — The Inevitability of Digital Education",
  description:
    "Why digitization is non-negotiable for modern education, and our commitment to putting world-class management software into every school.",
};

export default function ManifestoPage() {
  return (
    <main style={{ background: "var(--paper)" }}>
      <Navigation />

      {/* Hero */}
      <section
        style={{
          paddingTop: "140px",
          paddingBottom: "80px",
          background:
            "linear-gradient(135deg, var(--navy-dark) 0%, var(--navy) 100%)",
          color: "#fff",
        }}
      >
        <div
          className="container"
          style={{ textAlign: "center", maxWidth: "860px" }}
        >
          <span className="badge badge-gold" style={{ marginBottom: "20px" }}>
            Our Mandate &amp; Manifesto
          </span>
          <h1
            style={{
              fontSize: "clamp(36px, 5vw, 64px)",
              fontWeight: 700,
              lineHeight: 1.1,
              marginBottom: "20px",
              fontFamily: "var(--serif)",
            }}
          >
            Education is moving online. <br />
            No school should be left behind.
          </h1>
          <p
            style={{
              fontSize: "18px",
              color: "rgba(255,255,255,0.75)",
              lineHeight: 1.6,
            }}
          >
            The transition from physical paper to digital operations isn&apos;t
            just a tech trend — it&apos;s an inevitable shift. We exist to
            guarantee every school access to modern software.
          </p>
        </div>
      </section>

      {/* Core Tenets */}
      <section style={{ padding: "var(--section) 0", background: "#fff" }}>
        <div className="container" style={{ maxWidth: "840px" }}>
          <article
            style={{ fontSize: "18px", color: "var(--ink)", lineHeight: 1.8 }}
          >
            <h2
              style={{
                fontSize: "28px",
                fontWeight: 700,
                color: "var(--navy)",
                marginBottom: "16px",
              }}
            >
              1. Digitization is Inevitable
            </h2>
            <p style={{ marginBottom: "24px" }}>
              Every industry has undergone its digital transformation — banking,
              commerce, healthcare, and transport. Education is the next
              frontier. Today&apos;s parents manage their lives on smartphones,
              pay bills digitally, and expect instant transparency. Schools that
              rely on physical filing cabinets and paper slips will inevitably
              lose the trust of modern families.
            </p>

            <blockquote
              style={{
                borderLeft: "4px solid var(--cyan)",
                paddingLeft: "24px",
                fontFamily: "var(--serif)",
                fontSize: "22px",
                fontStyle: "italic",
                color: "var(--navy)",
                margin: "40px 0",
                lineHeight: 1.5,
              }}
            >
              &ldquo;Software shouldn&apos;t be an expensive luxury reserved for
              elite private academies. It is basic infrastructure that every
              school needs to function.&rdquo;
            </blockquote>

            <h2
              style={{
                fontSize: "28px",
                fontWeight: 700,
                color: "var(--navy)",
                marginBottom: "16px",
              }}
            >
              2. Our Universal Mandate
            </h2>
            <p style={{ marginBottom: "24px" }}>
              Our mandate is simple:{" "}
              <strong>
                to deploy our management software into every school across every
                jurisdiction we operate in.
              </strong>{" "}
              We believe that financial constraints should never lock an
              institution out of the digital age. By making our core school
              management tools 100% free forever, we remove the friction keeping
              schools in the paper era.
            </p>

            <h2
              style={{
                fontSize: "28px",
                fontWeight: 700,
                color: "var(--navy)",
                marginBottom: "16px",
              }}
            >
              3. Connected Ecosystems Win
            </h2>
            <p style={{ marginBottom: "24px" }}>
              A standalone Excel sheet is not digital transformation. Real
              modern school management connects school administrators, teachers,
              parents, and public discovery in one seamless loop. When parents
              get instant attendance updates and billing notifications on
              ParentAide, and prospective parents can find verified school
              records on Schoolpedia, the entire community thrives.
            </p>

            <div
              style={{
                marginTop: "48px",
                paddingTop: "32px",
                borderTop: "1px solid var(--rule)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "20px",
              }}
            >
              <div>
                <div
                  style={{
                    fontWeight: 700,
                    color: "var(--navy)",
                    fontSize: "16px",
                  }}
                >
                  Edcomrade Platform
                </div>
                <div style={{ fontSize: "14px", color: "var(--ink-mid)" }}>
                  Building the digital home for education.
                </div>
              </div>
              <Link
                href="/contact?subject=register-school"
                className="btn-primary"
              >
                Join the Movement — Get Started Free <ArrowRight size={15} />
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* Grid Summary */}
      <section
        style={{ padding: "var(--section) 0", background: "var(--paper-tint)" }}
      >
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "24px",
            }}
          >
            <div className="card" style={{ padding: "28px" }}>
              <Zap
                size={24}
                color="var(--cyan)"
                style={{ marginBottom: "12px" }}
              />
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "var(--navy)",
                  marginBottom: "8px",
                }}
              >
                Zero Barrier Entry
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  color: "var(--ink-mid)",
                  lineHeight: 1.6,
                }}
              >
                Free core software so every school, regardless of size, can
                digitize immediately.
              </p>
            </div>
            <div className="card" style={{ padding: "28px" }}>
              <Globe
                size={24}
                color="var(--gold)"
                style={{ marginBottom: "12px" }}
              />
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "var(--navy)",
                  marginBottom: "8px",
                }}
              >
                Jurisdiction Scale
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  color: "var(--ink-mid)",
                  lineHeight: 1.6,
                }}
              >
                Deploying across global markets with localized payment options
                and adaptative design.
              </p>
            </div>
            <div className="card" style={{ padding: "28px" }}>
              <ShieldCheck
                size={24}
                color="var(--green-mid)"
                style={{ marginBottom: "12px" }}
              />
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "var(--navy)",
                  marginBottom: "8px",
                }}
              >
                Parent Trust
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  color: "var(--ink-mid)",
                  lineHeight: 1.6,
                }}
              >
                Bringing transparency and real-time updates directly to
                parents&apos; mobile devices.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
