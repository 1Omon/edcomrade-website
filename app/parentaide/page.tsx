import type { Metadata } from "next";
import Image from "next/image";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import Link from "next/link";
import {
  ArrowRight,
  Smartphone,
  CheckCircle,
  Bell,
  CreditCard,
  BookOpen,
  Megaphone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "ParentAide — Stay Connected to Your Child's School",
  description:
    "Real-time attendance alerts, digital report cards, and instant fee payments straight to your phone.",
};

export default function ParentaidePage() {
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
            <Smartphone size={12} /> ParentAide Mobile App
          </span>
          <h1
            style={{
              fontSize: "clamp(36px, 5vw, 64px)",
              fontWeight: 700,
              lineHeight: 1.1,
              marginBottom: "20px",
            }}
          >
            Stay connected to your child&apos;s school day.
          </h1>
          <p
            style={{
              fontSize: "18px",
              color: "rgba(255,255,255,0.75)",
              lineHeight: 1.6,
              marginBottom: "36px",
            }}
          >
            ParentAide puts everything you need to know about your child&apos;s
            education right on your phone — attendance, grades, fees, and school
            announcements.
          </p>
          <Link href="/contact?subject=parentaide" className="btn-white">
            Get ParentAide for your school <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Real Parent Photo + Benefits */}
      <section style={{ padding: "var(--section) 0", background: "#fff" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "64px",
              alignItems: "center",
            }}
          >
            <div className="photo-card" style={{ aspectRatio: "4/3" }}>
              <Image
                src="/african-parent-smiling-while-checking-child-s-grad.jpeg"
                alt="Parent checking child report card on smartphone"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div>
              <p className="eyebrow" style={{ marginBottom: "12px" }}>
                Peace of mind
              </p>
              <h2
                style={{
                  fontSize: "clamp(28px, 4vw, 40px)",
                  fontWeight: 700,
                  color: "var(--navy)",
                  marginBottom: "20px",
                }}
              >
                No more lost report sheets or missed updates.
              </h2>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px",
                  fontSize: "15px",
                  color: "var(--ink-mid)",
                }}
              >
                {[
                  "Pay school fees instantly and securely from anywhere.",
                  "View term grades and historical progress anytime.",
                  "Get morning attendance roll-call alerts for child safety.",
                  "Receive official school and PTA notices on your phone.",
                ].map((item, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "start",
                      gap: "10px",
                    }}
                  >
                    <CheckCircle
                      size={18}
                      color="var(--green-mid)"
                      style={{ flexShrink: 0, marginTop: "2px" }}
                    />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section
        style={{ padding: "var(--section) 0", background: "var(--paper-tint)" }}
      >
        <div className="container">
          <div
            style={{
              textAlign: "center",
              maxWidth: "560px",
              margin: "0 auto 60px",
            }}
          >
            <p className="eyebrow" style={{ marginBottom: "12px" }}>
              What&apos;s included
            </p>
            <h2
              style={{
                fontSize: "clamp(30px, 4vw, 44px)",
                fontWeight: 700,
                color: "var(--navy)",
              }}
            >
              Everything parents actually need.
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "24px",
            }}
          >
            {[
              {
                icon: Bell,
                title: "Attendance Alerts",
                desc: "Instant notification the moment your child is marked present or absent each morning.",
              },
              {
                icon: BookOpen,
                title: "Digital Report Cards",
                desc: "View grades, teacher comments, and historical term results any time of year.",
              },
              {
                icon: CreditCard,
                title: "Instant Fee Payments",
                desc: "Pay school fees securely from your phone. Get a digital receipt immediately.",
              },
              {
                icon: Megaphone,
                title: "School Announcements",
                desc: "Receive official PTA notices, event reminders, and emergency alerts straight to your phone.",
              },
            ].map((f) => (
              <div key={f.title} className="card" style={{ padding: "28px" }}>
                <f.icon
                  size={24}
                  color="var(--cyan)"
                  style={{ marginBottom: "14px" }}
                />
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: 700,
                    color: "var(--navy)",
                    marginBottom: "8px",
                  }}
                >
                  {f.title}
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    color: "var(--ink-mid)",
                    lineHeight: 1.6,
                  }}
                >
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA for Schools */}
      <section
        style={{
          padding: "var(--section) 0",
          background: "var(--navy-dark)",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <div className="container" style={{ maxWidth: "600px" }}>
          <h2
            style={{
              fontSize: "clamp(30px, 4vw, 48px)",
              fontWeight: 700,
              marginBottom: "16px",
            }}
          >
            Give your parents this experience.
          </h2>
          <p
            style={{
              fontSize: "16px",
              color: "rgba(255,255,255,0.7)",
              marginBottom: "32px",
              lineHeight: 1.65,
            }}
          >
            ParentAide is included with every school that registers on
            Edcomrade. Set it up for your parents today.
          </p>
          <Link href="/contact?subject=parentaide" className="btn-white">
            Register your school free <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
