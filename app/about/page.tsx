import type { Metadata } from "next";
import Image from "next/image";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "About Edcomrade — Built in Ghana for African Schools",
  description:
    "We are building digital infrastructure to help schools in West Africa operate efficiently and connect with parents.",
};

export default function AboutPage() {
  return (
    <main style={{ background: "var(--paper)" }}>
      <Navigation />

      {/* Hero */}
      <section style={{ paddingTop: "140px", paddingBottom: "80px", background: "linear-gradient(135deg, var(--navy-dark) 0%, var(--navy) 100%)", color: "#fff" }}>
        <div className="container" style={{ textAlign: "center", maxWidth: "860px" }}>
          <span className="badge badge-blue" style={{ marginBottom: "20px" }}>
            Our Story
          </span>
          <h1 style={{ fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 700, lineHeight: 1.1, marginBottom: "20px" }}>
            Built in Accra. Made for African education.
          </h1>
          <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.75)", lineHeight: 1.6, marginBottom: "36px" }}>
            Edcomrade was started to solve a simple problem: Ghana&apos;s best private schools were managing vital student records and billing in physical paper notebooks.
          </p>
        </div>
      </section>

      {/* Story & Image */}
      <section style={{ padding: "var(--section) 0", background: "#fff" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "48px", alignItems: "center" }}>
            <div>
              <p className="eyebrow" style={{ marginBottom: "12px" }}>Why we exist</p>
              <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700, color: "var(--navy)", marginBottom: "20px" }}>
                Empowering school heads with zero-cost software.
              </h2>
              <p style={{ fontSize: "16px", color: "var(--ink-mid)", lineHeight: 1.7, marginBottom: "20px" }}>
                High software costs should never prevent a school from going digital. That&apos;s why we made the core School Administration Module permanently free for every Ghanaian school.
              </p>
              <p style={{ fontSize: "16px", color: "var(--ink-mid)", lineHeight: 1.7, marginBottom: "28px" }}>
                Today, we support school administrators, teachers, and parents with software, mobile app connections, and verified online directory listings.
              </p>
              <Link href="/contact?subject=register-school" className="btn-primary">
                Get started free <ArrowRight size={15} />
              </Link>
            </div>
            <div className="photo-card" style={{ aspectRatio: "4/3" }}>
              <Image src="/professional-african-female-school-administrator-p.jpeg" alt="School administrator portrait" fill style={{ objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section style={{ padding: "var(--section) 0", background: "var(--paper-tint)" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "560px", margin: "0 auto 60px" }}>
            <p className="eyebrow" style={{ marginBottom: "12px" }}>Leadership team</p>
            <h2 style={{ fontSize: "clamp(30px, 4vw, 44px)", fontWeight: 700, color: "var(--navy)" }}>
              The team behind Edcomrade.
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "32px", maxWidth: "900px", margin: "0 auto" }}>
            <div className="card" style={{ padding: "28px", textAlign: "center" }}>
              <div className="photo-card" style={{ width: "120px", height: "120px", borderRadius: "50%", margin: "0 auto 20px" }}>
                <Image src="/professional-african-male-headmaster-portrait.jpg" alt="Solomon Ayisi" fill style={{ objectFit: "cover" }} />
              </div>
              <h3 style={{ fontSize: "22px", fontWeight: 700, color: "var(--navy)", marginBottom: "4px" }}>Solomon A. Ayisi</h3>
              <p style={{ fontSize: "13px", color: "var(--cyan)", fontWeight: 600, marginBottom: "12px" }}>CEO & Founder</p>
              <p style={{ fontSize: "14px", color: "var(--ink-mid)", lineHeight: 1.6 }}>Systems architect and tech entrepreneur passionate about commercializing technology for social good</p>
            </div>

            <div className="card" style={{ padding: "28px", textAlign: "center" }}>
              <div className="photo-card" style={{ width: "120px", height: "120px", borderRadius: "50%", margin: "0 auto 20px" }}>
                <Image src="/professional-african-male-headmaster-portrait.jpg" alt="Prince Sarfo" fill style={{ objectFit: "cover" }} />
              </div>
              <h3 style={{ fontSize: "22px", fontWeight: 700, color: "var(--navy)", marginBottom: "4px" }}>Prince Sarfo</h3>
              <p style={{ fontSize: "13px", color: "var(--cyan)", fontWeight: 600, marginBottom: "12px" }}>CTO & Co-Founder</p>
              <p style={{ fontSize: "14px", color: "var(--ink-mid)", lineHeight: 1.6 }}>Software engineer with over half a decade of experience building enterprise web and mobile applications.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
