"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

/* ── Parallax hook ─────────────────────────────── */
function useParallax(speed = 0.3) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onScroll = () => {
      const y = window.scrollY * speed;
      el.style.transform = `translateY(${y}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [speed]);
  return ref;
}

export default function HomePageClient() {
  const heroImgRef = useParallax(0.25);

  return (
    <main style={{ background: "var(--paper)" }}>
      <Navigation />

      {/* ══════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════ */}
      <section style={{
        position: "relative",
        minHeight: "100svh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background: "linear-gradient(135deg, var(--navy-dark) 0%, var(--navy) 100%)",
      }}>

        {/* Parallax background image */}
        <div ref={heroImgRef} style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <Image
            src="/african-students-engaged-with-tablets-in-classroom.jpg"
            alt="Students in a modern classroom"
            fill
            style={{ objectFit: "cover", opacity: 0.18 }}
            priority
          />
        </div>

        {/* Gradient overlay */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(15,37,55,.95) 50%, rgba(15,37,55,.5))", zIndex: 1 }} />

        <div className="container" style={{ position: "relative", zIndex: 2, paddingTop: "120px", paddingBottom: "100px" }}>
          <div style={{ maxWidth: "680px" }}>

            <div className="badge badge-white" style={{ marginBottom: "28px" }}>
              🇬🇭 Built for Ghanaian schools
            </div>

            <h1 style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(42px, 6vw, 76px)",
              fontWeight: 700,
              lineHeight: 1.05,
              color: "#fff",
              letterSpacing: "-.03em",
              marginBottom: "24px",
            }}>
              Run your school.<br />
              <span style={{ color: "var(--gold)" }}>Not your paperwork.</span>
            </h1>

            <p style={{
              fontSize: "clamp(17px, 2vw, 20px)",
              color: "rgba(255,255,255,.75)",
              lineHeight: 1.65,
              marginBottom: "40px",
              maxWidth: "520px",
            }}>
              Pioneers&apos; ERP gives your school a free digital backbone — fee billing, student records, attendance, and parent communication. Set up in days, not months.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "14px", marginBottom: "48px" }}>
              <Link href="/contact?subject=register-school" className="btn-white">
                Start for free — it&apos;s GHS 0 <ArrowRight size={16} />
              </Link>
              <Link href="/software" className="btn-ghost" style={{ color: "#fff", borderColor: "rgba(255,255,255,.3)" }}>
                See what&apos;s included
              </Link>
            </div>

            {/* Social proof line */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "24px" }}>
              {[
                "No credit card required",
                "Live in under 7 days",
                "5-year price guarantee",
              ].map((t) => (
                <div key={t} style={{ display: "flex", alignItems: "center", gap: "7px", color: "rgba(255,255,255,.65)", fontSize: "13px" }}>
                  <CheckCircle size={14} color="var(--green-mid)" />
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div style={{ position: "absolute", bottom: "36px", left: "50%", transform: "translateX(-50%)", zIndex: 2, display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
          <div style={{ width: 1, height: 48, background: "rgba(255,255,255,.3)", animation: "fadeUp 1.5s ease infinite alternate" }} />
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          PROBLEM → SOLUTION BRIDGE
      ═══════════════════════════════════════════════ */}
      <section style={{ padding: "var(--section) 0", background: "#fff" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "40px", alignItems: "center" }}>

            {/* Left: before */}
            <div className="card" style={{ padding: "36px", borderLeft: "4px solid #EF4444" }}>
              <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "#EF4444", marginBottom: "12px" }}>Before Edcomrade</p>
              <div style={{ position: "relative", borderRadius: "12px", overflow: "hidden", marginBottom: "20px", aspectRatio: "4/3" }}>
                <Image src="/stressed-african-school-administrator-surrounded-b.jpg" alt="Stressed school administrator with paperwork" fill style={{ objectFit: "cover" }} />
              </div>
              <p style={{ fontSize: "15px", color: "var(--ink-mid)", lineHeight: 1.6 }}>
                Lost receipts. WhatsApp announcements. Parents calling the gate. End-of-term chaos.
              </p>
            </div>

            {/* Arrow */}
            <div style={{ textAlign: "center", fontSize: "40px" }} className="hidden md:block">→</div>

            {/* Right: after */}
            <div className="card" style={{ padding: "36px", borderLeft: "4px solid var(--green-mid)" }}>
              <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--green-mid)", marginBottom: "12px" }}>After Pioneers&apos; ERP</p>
              <div style={{ position: "relative", borderRadius: "12px", overflow: "hidden", marginBottom: "20px", aspectRatio: "4/3" }}>
                <Image src="/african-school-administrator-smiling-confidently-w.jpeg" alt="Confident school administrator with laptop" fill style={{ objectFit: "cover" }} />
              </div>
              <p style={{ fontSize: "15px", color: "var(--ink-mid)", lineHeight: 1.6 }}>
                Digital fee receipts. Instant parent notifications. Reports generated in one click.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          FEATURES — THREE PILLARS
      ═══════════════════════════════════════════════ */}
      <section style={{ padding: "var(--section) 0", background: "var(--paper-tint)" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "560px", margin: "0 auto 64px" }}>
            <p className="eyebrow" style={{ marginBottom: "12px" }}>The full ecosystem</p>
            <h2 style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 700, lineHeight: 1.15, color: "var(--navy)" }}>
              Everything your school community needs.
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
            {[
              {
                img: "/modern-school-management-dashboard-on-computer-scr.jpg",
                badge: "For Administrators",
                badgeClass: "badge-blue",
                title: "Pioneers' ERP",
                tagline: "Free school management software",
                body: "Fee billing, admissions, student records, timetables, staff payroll — one dashboard, zero spreadsheets.",
                cta: "Start for free",
                href: "/software",
              },
              {
                img: "/african-students-competing-in-academic-olympiad--f.jpg",
                badge: "For Parents",
                badgeClass: "badge-gold",
                title: "Schoolpedia",
                tagline: "Find and compare schools",
                body: "Parents search verified schools by location, fees, and results. Your school gets found by the right families.",
                cta: "Search schools",
                href: "/schoolpedia",
              },
              {
                img: "/african-parent-smiling-while-checking-child-s-grad.jpeg",
                badge: "For Families",
                badgeClass: "badge-green",
                title: "ParentAide",
                tagline: "School updates on your phone",
                body: "Attendance alerts, digital report cards, and Mobile Money fee payments — straight to parents' phones.",
                cta: "Learn more",
                href: "/parentaide",
              },
            ].map((item) => (
              <div key={item.title} className="card fade-up" style={{ overflow: "hidden" }}>
                <div className="photo-card" style={{ aspectRatio: "16/9", borderRadius: 0 }}>
                  <Image src={item.img} alt={item.title} fill style={{ objectFit: "cover" }} />
                </div>
                <div style={{ padding: "28px" }}>
                  <span className={`badge ${item.badgeClass}`} style={{ marginBottom: "14px" }}>{item.badge}</span>
                  <h3 style={{ fontSize: "22px", fontWeight: 700, color: "var(--navy)", marginBottom: "4px" }}>{item.title}</h3>
                  <p style={{ fontSize: "13px", color: "var(--cyan)", fontWeight: 600, marginBottom: "12px" }}>{item.tagline}</p>
                  <p style={{ fontSize: "14px", color: "var(--ink-mid)", lineHeight: 1.65, marginBottom: "20px" }}>{item.body}</p>
                  <Link href={item.href} style={{ fontSize: "14px", fontWeight: 700, color: "var(--navy)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "5px" }}>
                    {item.cta} <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SOCIAL PROOF / TRANSFORMATION
      ═══════════════════════════════════════════════ */}
      <section style={{ padding: "var(--section) 0", background: "#fff" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }} className="md:grid-cols-2 grid-cols-1">

            <div>
              <p className="eyebrow" style={{ marginBottom: "16px" }}>Real impact</p>
              <h2 style={{ fontSize: "clamp(30px, 4vw, 44px)", fontWeight: 700, lineHeight: 1.2, color: "var(--navy)", marginBottom: "24px" }}>
                Schools using Pioneers&apos; ERP spend 70% less time on admin.
              </h2>
              <p style={{ fontSize: "17px", color: "var(--ink-mid)", lineHeight: 1.7, marginBottom: "32px" }}>
                That&apos;s time back for teaching. For parents. For growing your enrolment. Not for chasing fee balances on WhatsApp.
              </p>
              <blockquote style={{ borderLeft: "3px solid var(--cyan)", paddingLeft: "20px", fontFamily: "var(--serif)", fontSize: "18px", fontStyle: "italic", color: "var(--navy)", lineHeight: 1.5, marginBottom: "12px" }}>
                &ldquo;I used to dread end-of-term billing. Now it takes me 20 minutes.&rdquo;
              </blockquote>
              <p style={{ fontSize: "13px", color: "var(--ink-mid)" }}>School Bursar, Accra</p>
              <div style={{ marginTop: "36px" }}>
                <Link href="/contact?subject=register-school" className="btn-primary">
                  Register your school free <ArrowRight size={15} />
                </Link>
              </div>
            </div>

            <div className="photo-card" style={{ aspectRatio: "4/5", position: "relative" }}>
              <Image src="/happy-african-school-administrator-using-modern-la.jpg" alt="Happy school administrator" fill style={{ objectFit: "cover", borderRadius: "20px" }} />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SOFTWARE PREVIEW
      ═══════════════════════════════════════════════ */}
      <section style={{ padding: "var(--section) 0", background: "var(--navy-dark)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <p className="eyebrow" style={{ color: "var(--cyan)", marginBottom: "16px" }}>What it looks like</p>
          <h2 style={{ fontSize: "clamp(30px, 4vw, 48px)", fontWeight: 700, color: "#fff", marginBottom: "16px" }}>
            A dashboard your staff will actually use.
          </h2>
          <p style={{ fontSize: "17px", color: "rgba(255,255,255,.6)", marginBottom: "48px", maxWidth: "480px", margin: "0 auto 48px" }}>
            Built for African internet speeds. Works on any device. No training days required.
          </p>
          <div style={{ borderRadius: "20px", overflow: "hidden", boxShadow: "0 40px 80px rgba(0,0,0,.5)", maxWidth: "900px", margin: "0 auto", position: "relative", aspectRatio: "16/9" }}>
            <Image src="/modern-school-management-dashboard-interface--clea.jpg" alt="Pioneers ERP Dashboard" fill style={{ objectFit: "cover" }} />
          </div>
          <div style={{ marginTop: "40px" }}>
            <Link href="/software" className="btn-white">
              Explore all features <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          FINAL CTA
      ═══════════════════════════════════════════════ */}
      <section style={{ padding: "var(--section) 0", background: "var(--paper-tint)" }}>
        <div className="container" style={{ textAlign: "center", maxWidth: "640px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(34px, 5vw, 56px)", fontWeight: 700, color: "var(--navy)", lineHeight: 1.1, marginBottom: "20px" }}>
            Your school deserves better than a notebook.
          </h2>
          <p style={{ fontSize: "18px", color: "var(--ink-mid)", lineHeight: 1.65, marginBottom: "36px" }}>
            Join the schools already running on Pioneers&apos; ERP. The core software is free, forever. No catch.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "14px", justifyContent: "center" }}>
            <Link href="/contact?subject=register-school" className="btn-primary" style={{ fontSize: "16px", padding: "16px 32px" }}>
              Register your school — free <ArrowRight size={16} />
            </Link>
            <Link href="/software" className="btn-ghost" style={{ fontSize: "16px", padding: "16px 32px" }}>
              Compare plans
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
