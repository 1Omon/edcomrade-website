import type { Metadata } from "next";
import Image from "next/image";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import EduMediaClientForm from "./edmedia-client";
import { ArrowRight, Camera, Newspaper, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "EduMedia — Publishing & Visibility for Great Schools",
  description:
    "Spotlight your school with digital publication, professional campus photography, and institutional branding.",
};

export default function EduMediaPage() {
  return (
    <main style={{ background: "var(--paper)" }}>
      <Navigation />

      {/* Hero */}
      <section style={{ paddingTop: "140px", paddingBottom: "80px", background: "linear-gradient(135deg, var(--navy-dark) 0%, var(--navy) 100%)", color: "#fff" }}>
        <div className="container" style={{ textAlign: "center", maxWidth: "860px" }}>
          <span className="badge badge-gold" style={{ marginBottom: "20px" }}>
            <Newspaper size={12} /> EduMedia Publishing
          </span>
          <h1 style={{ fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 700, lineHeight: 1.1, marginBottom: "20px" }}>
            Give your school the visibility it deserves.
          </h1>
          <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.75)", lineHeight: 1.6, marginBottom: "36px" }}>
            We publish school spotlights, event coverage, and leadership interviews that help great schools build trust with parents.
          </p>
          <a href="#enquire" className="btn-white">
            Feature your school <ArrowRight size={16} />
          </a>
        </div>
      </section>

      {/* Real Photo Showcase */}
      <section style={{ padding: "var(--section) 0", background: "#fff" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
            <div className="photo-card" style={{ aspectRatio: "4/3" }}>
              <Image src="/african-students-engaged-in-learning-with-teacher-.jpg" alt="Teacher and students classroom coverage" fill style={{ objectFit: "cover" }} />
            </div>
            <div className="photo-card" style={{ aspectRatio: "4/3" }}>
              <Image src="/diverse-group-of-african-school-leaders-networking.jpg" alt="School leaders networking" fill style={{ objectFit: "cover" }} />
            </div>
            <div className="photo-card" style={{ aspectRatio: "4/3" }}>
              <Image src="/young-african-computer-science-students-working-on.jpg" alt="Students in computer lab" fill style={{ objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section style={{ padding: "var(--section) 0", background: "var(--paper-tint)" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "560px", margin: "0 auto 60px" }}>
            <p className="eyebrow" style={{ marginBottom: "12px" }}>Media packages</p>
            <h2 style={{ fontSize: "clamp(30px, 4vw, 44px)", fontWeight: 700, color: "var(--navy)" }}>
              How we showcase your school.
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
            {[
              { icon: Newspaper, badge: "Editorial Spotlight", title: "School Feature Article", desc: "A written feature highlighting your school's history, facilities, and academic achievements." },
              { icon: Camera, badge: "Event Coverage", title: "Campus Photography", desc: "Professional photography for graduations, open days, sports events, and website assets." },
              { icon: Award, badge: "Digital PR", title: "Proprietor Interview", desc: "In-depth editorial interview with school founders published across Edcomrade channels." },
            ].map((s) => (
              <div key={s.title} className="card" style={{ padding: "32px" }}>
                <s.icon size={24} color="var(--cyan)" style={{ marginBottom: "16px" }} />
                <span className="badge badge-blue" style={{ marginBottom: "12px" }}>{s.badge}</span>
                <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--navy)", marginBottom: "8px" }}>{s.title}</h3>
                <p style={{ fontSize: "14px", color: "var(--ink-mid)", lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="enquire" style={{ padding: "var(--section) 0", background: "#fff" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <div className="card" style={{ padding: "40px" }}>
            <h2 style={{ fontSize: "28px", fontWeight: 700, color: "var(--navy)", marginBottom: "8px" }}>Feature your school</h2>
            <p style={{ fontSize: "14px", color: "var(--ink-mid)", marginBottom: "28px" }}>
              Fill in your details below and our media team will get in touch within 24 hours.
            </p>
            <EduMediaClientForm />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
