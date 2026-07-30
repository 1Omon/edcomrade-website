"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "var(--navy-dark)",
        color: "#fff",
        paddingTop: "80px",
        paddingBottom: "48px",
      }}
    >
      <div className="container">
        {/* Top row */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "48px",
            justifyContent: "space-between",
            paddingBottom: "60px",
            borderBottom: "1px solid rgba(255,255,255,.1)",
          }}
        >
          {/* Brand */}
          <div style={{ maxWidth: "280px" }}>
            <Image
              src="/full-logo.png"
              alt="EdComrade"
              width={140}
              height={36}
              style={{
                height: 36,
                width: "auto",
                filter: "brightness(0) invert(1)",
                marginBottom: "16px",
              }}
            />
            <p
              style={{
                fontSize: "14px",
                lineHeight: 1.7,
                color: "rgba(255,255,255,.6)",
              }}
            >
              The modern software platform for schools worldwide. Built to make
              education better.
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginTop: "16px",
              }}
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "var(--green-mid)",
                  display: "inline-block",
                }}
              ></span>
              <span
                style={{
                  fontSize: "12px",
                  color: "rgba(255,255,255,.5)",
                  fontFamily: "var(--mono)",
                }}
              >
                School Management Software 100% Free
              </span>
            </div>
          </div>

          {/* Links grid */}
          <div style={{ display: "flex", gap: "48px", flexWrap: "wrap" }}>
            <div>
              <p
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: ".1em",
                  textTransform: "uppercase",
                  color: "var(--cyan)",
                  marginBottom: "16px",
                }}
              >
                Software
              </p>
              {[
                { href: "/software", label: "School Management — Free" },
                { href: "/software#custom", label: "Custom School App" },
                { href: "/schoolpedia", label: "Schoolpedia" },
                { href: "/parentaide", label: "ParentAide" },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  style={{
                    display: "block",
                    fontSize: "14px",
                    color: "rgba(255,255,255,.6)",
                    marginBottom: "10px",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "rgba(255,255,255,.6)")
                  }
                >
                  {l.label}
                </Link>
              ))}
            </div>
            <div>
              <p
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: ".1em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  marginBottom: "16px",
                }}
              >
                Company
              </p>
              {[
                { href: "/about", label: "About Us" },
                { href: "/edumedia", label: "EduMedia" },
                { href: "/amplifiers", label: "Become a Partner" },
                { href: "/manifesto", label: "Our Manifesto" },
                { href: "/contact", label: "Contact" },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  style={{
                    display: "block",
                    fontSize: "14px",
                    color: "rgba(255,255,255,.6)",
                    marginBottom: "10px",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "rgba(255,255,255,.6)")
                  }
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div style={{ maxWidth: "220px" }}>
            <p
              style={{
                fontSize: "18px",
                fontFamily: "var(--serif)",
                fontWeight: 700,
                color: "#fff",
                marginBottom: "12px",
                lineHeight: 1.3,
              }}
            >
              Ready to modernise your school?
            </p>
            <Link
              href="/contact?subject=register-school"
              className="btn-white"
              style={{ fontSize: "14px", padding: "12px 20px" }}
            >
              Get started free <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Bottom row */}
        <div
          style={{
            paddingTop: "28px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: "12px",
          }}
        >
          <p style={{ fontSize: "13px", color: "rgba(255,255,255,.35)" }}>
            © 2026 S.A Edcomrade Ventures Ltd. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "24px" }}>
            {[
              { href: "/manifesto", label: "Manifesto" },
              { href: "/contact", label: "Support" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                style={{
                  fontSize: "13px",
                  color: "rgba(255,255,255,.35)",
                  textDecoration: "none",
                }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
