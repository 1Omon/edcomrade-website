"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "all .3s ease",
        backgroundColor: scrolled ? "rgba(255,255,255,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(26,60,94,0.08)" : "none",
        boxShadow: scrolled ? "0 2px 20px rgba(26,60,94,0.06)" : "none",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "72px",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{ display: "flex", alignItems: "center", flexShrink: 0 }}
        >
          <Image
            src="/full-logo.png"
            alt="EdComrade"
            width={140}
            height={36}
            style={{ height: 36, width: "auto", objectFit: "contain" }}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav
          style={{ display: "flex", alignItems: "center", gap: "8px" }}
          className="hidden lg:flex"
        >
          {/* Platform dropdown */}
          <div
            style={{ position: "relative" }}
            onMouseEnter={() => setDropOpen(true)}
            onMouseLeave={() => setDropOpen(false)}
          >
            <button
              style={{
                display: "flex",
                alignItems: "center",
                gap: "4px",
                padding: "8px 14px",
                borderRadius: "8px",
                fontSize: "14px",
                fontWeight: 600,
                color: scrolled ? "var(--navy)" : "#fff",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                transition: "color .2s",
              }}
            >
              Platform <ChevronDown size={14} />
            </button>

            {dropOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  paddingTop: "8px",
                }}
              >
                <div
                  style={{
                    minWidth: "220px",
                    background: "#fff",
                    borderRadius: "14px",
                    border: "1px solid rgba(26,60,94,.08)",
                    padding: "8px",
                    boxShadow: "0 20px 60px rgba(26,60,94,.14)",
                  }}
                >
                  {[
                    {
                      href: "/software",
                      label: "School Management",
                      sub: "Free software for running your school",
                    },
                    {
                      href: "/schoolpedia",
                      label: "Schoolpedia",
                      sub: "The school discovery directory",
                    },
                    {
                      href: "/parentaide",
                      label: "ParentAide",
                      sub: "Mobile app for school parents",
                    },
                  ].map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      style={{
                        display: "block",
                        padding: "10px 14px",
                        borderRadius: "8px",
                        textDecoration: "none",
                        transition: "background .15s",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.background = "var(--paper-tint)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.background = "transparent")
                      }
                    >
                      <div
                        style={{
                          fontSize: "14px",
                          fontWeight: 600,
                          color: "var(--navy)",
                        }}
                      >
                        {item.label}
                      </div>
                      <div
                        style={{
                          fontSize: "12px",
                          color: "var(--ink-mid)",
                          marginTop: "2px",
                        }}
                      >
                        {item.sub}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {[
            { href: "/edumedia", label: "Media" },
            { href: "/amplifiers", label: "Partners" },
            { href: "/about", label: "About" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={{
                padding: "8px 14px",
                borderRadius: "8px",
                fontSize: "14px",
                fontWeight: 600,
                color: scrolled ? "var(--navy)" : "#fff",
                textDecoration: "none",
                transition: "color .2s",
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTAs */}
        <div
          className="hidden sm:flex"
          style={{ alignItems: "center", gap: "10px" }}
        >
          <Link
            href="/contact"
            style={{
              padding: "8px 16px",
              fontSize: "14px",
              fontWeight: 600,
              color: scrolled ? "var(--navy)" : "#fff",
              textDecoration: "none",
              opacity: 0.8,
              transition: "opacity .2s",
            }}
          >
            Contact
          </Link>
          <Link
            href="/contact?subject=register-school"
            className="btn-primary"
            style={{ padding: "10px 20px", fontSize: "14px" }}
          >
            Get started free <ArrowRight size={15} />
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            padding: "8px",
            color: scrolled ? "var(--navy)" : "#fff",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          style={{
            background: "#fff",
            borderTop: "1px solid var(--rule)",
            padding: "20px 24px 28px",
          }}
        >
          {[
            { href: "/software", label: "School Management — Free" },
            { href: "/schoolpedia", label: "Schoolpedia Directory" },
            { href: "/parentaide", label: "ParentAide Mobile" },
            { href: "/edumedia", label: "EduMedia Publishing" },
            { href: "/amplifiers", label: "Become a Partner" },
            { href: "/about", label: "About Edcomrade" },
            { href: "/contact", label: "Contact Us" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              style={{
                display: "block",
                padding: "12px 0",
                fontSize: "17px",
                fontWeight: 600,
                color: "var(--navy)",
                textDecoration: "none",
                borderBottom: "1px solid var(--rule)",
              }}
            >
              {item.label}
            </Link>
          ))}
          <div style={{ paddingTop: "20px" }}>
            <Link
              href="/contact?subject=register-school"
              className="btn-primary"
              style={{ width: "100%", justifyContent: "center" }}
            >
              Get started free <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
