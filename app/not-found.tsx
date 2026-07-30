"use client";

import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ArrowLeft, ArrowRight, Home } from "lucide-react";

export default function NotFound() {
  return (
    <main style={{ background: "var(--paper)" }}>
      <Navigation />

      <section
        style={{
          minHeight: "100svh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "120px",
          paddingBottom: "80px",
          background: "linear-gradient(135deg, var(--navy-dark) 0%, var(--navy) 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative background number */}
        <div
          style={{
            position: "absolute",
            fontSize: "clamp(200px, 35vw, 420px)",
            fontWeight: 900,
            color: "rgba(255,255,255,0.04)",
            letterSpacing: "-0.05em",
            lineHeight: 1,
            userSelect: "none",
            pointerEvents: "none",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontFamily: "var(--serif)",
            whiteSpace: "nowrap",
          }}
        >
          404
        </div>

        <div className="container" style={{ textAlign: "center", maxWidth: "680px", position: "relative", zIndex: 2 }}>
          <span className="badge badge-gold" style={{ marginBottom: "28px" }}>
            Page Not Found
          </span>

          <h1
            style={{
              fontSize: "clamp(42px, 7vw, 80px)",
              fontWeight: 700,
              lineHeight: 1.05,
              color: "#fff",
              letterSpacing: "-0.03em",
              marginBottom: "20px",
              fontFamily: "var(--serif)",
            }}
          >
            This page doesn&apos;t exist.
          </h1>

          <p
            style={{
              fontSize: "clamp(16px, 2vw, 19px)",
              color: "rgba(255,255,255,0.65)",
              lineHeight: 1.65,
              marginBottom: "44px",
              maxWidth: "480px",
              margin: "0 auto 44px",
            }}
          >
            You may have followed a broken link, or the page was moved. Let&apos;s get you back on track.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "14px", justifyContent: "center" }}>
            <Link href="/" className="btn-white">
              <Home size={16} /> Back to home
            </Link>
            <Link href="/contact" className="btn-ghost" style={{ color: "#fff", borderColor: "rgba(255,255,255,0.3)" }}>
              Contact us <ArrowRight size={16} />
            </Link>
          </div>

          {/* Quick links */}
          <div style={{ marginTop: "60px", paddingTop: "40px", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
            <p style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "20px" }}>
              Popular pages
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center" }}>
              {[
                { href: "/software", label: "School Management" },
                { href: "/schoolpedia", label: "Schoolpedia" },
                { href: "/parentaide", label: "ParentAide" },
                { href: "/about", label: "About Us" },
                { href: "/amplifiers", label: "Partner Programme" },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  style={{
                    fontSize: "13px",
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.55)",
                    textDecoration: "none",
                    padding: "8px 16px",
                    borderRadius: "999px",
                    border: "1px solid rgba(255,255,255,0.12)",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#fff";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.35)";
                    e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "rgba(255,255,255,0.55)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
