"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const PRODUCTS = [
  {
    href: "/software",
    name: "Pioneers' Software",
    desc: "Free ERP for schools digitising now",
  },
  {
    href: "/software#custom",
    name: "Custom App",
    desc: "Bespoke system built for your school",
  },
  {
    href: "/parentaide",
    name: "ParentAide",
    desc: "The parent and guardian app",
  },
];

const NAV_LINKS = [
  { href: "/schoolpedia", label: "Schoolpedia", external: false },
  { href: "/edmedia",     label: "EdMedia",     external: false },
  { href: "/about",       label: "About",       external: false },
];

export function Navigation() {
  const [scrolled, setScrolled]         = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen]     = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname    = usePathname();

  /* Scroll detection */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Close dropdown when clicking outside */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  /* Close everything on route change */
  useEffect(() => {
    setDropdownOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      {/* ── Main nav bar ── */}
      <nav
        style={{ height: 64 }}
        className={[
          "fixed top-0 left-0 right-0 z-50 flex items-center transition-all duration-200",
          scrolled
            ? "bg-white/85 backdrop-blur-[12px] border-b border-[#E5E7EB]"
            : "bg-transparent",
        ].join(" ")}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-8 w-full flex items-center justify-between gap-8">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/full-logo.png"
              alt="Edcomrade"
              width={110}
              height={32}
              className="h-8 w-auto"
              priority
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {/* Products dropdown */}
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setDropdownOpen(v => !v)}
                className="flex items-center gap-1 text-[14px] font-medium text-[#374151] hover:text-[#1A3C5E] transition-colors"
                aria-expanded={dropdownOpen}
                aria-haspopup="true"
              >
                Products
                <ChevronDown
                  className={[
                    "w-3.5 h-3.5 transition-transform duration-150",
                    dropdownOpen && "rotate-180",
                  ].join(" ")}
                />
              </button>

              {dropdownOpen && (
                <div
                  role="menu"
                  className="absolute top-full left-0 mt-2 w-72 bg-white border border-[#E5E7EB] rounded-xl py-2 z-50"
                  style={{ boxShadow: "0 8px 24px rgba(0,0,0,0.08)" }}
                >
                  {PRODUCTS.map(p => (
                    <Link
                      key={p.href}
                      href={p.href}
                      role="menuitem"
                      onClick={() => setDropdownOpen(false)}
                      className="block px-3 py-[10px] rounded-lg mx-1 hover:bg-[#F9FAFB] transition-colors"
                    >
                      <span className="block text-[14px] font-semibold text-gray-900">
                        {p.name}
                      </span>
                      <span className="block text-[13px] text-gray-500 mt-0.5">
                        {p.desc}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {NAV_LINKS.map(l => (
              <Link
                key={l.href}
                href={l.href}
                target={l.external ? "_blank" : undefined}
                rel={l.external ? "noopener noreferrer" : undefined}
                className={[
                  "text-[14px] font-medium transition-colors",
                  pathname.startsWith(l.href)
                    ? "text-[#1A3C5E]"
                    : "text-[#374151] hover:text-[#1A3C5E]",
                ].join(" ")}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="https://schoolpedia.edcomrade.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[15px] font-semibold text-[#374151] border border-[#D1D5DB] px-[16px] py-[8px] rounded-[6px] hover:border-gray-400 transition-colors"
            >
              List Your School
            </Link>
            <Link
              href="/contact"
              className="text-[15px] font-semibold text-white bg-[#1A3C5E] px-[16px] py-[8px] rounded-[6px] hover:bg-[#1E3A52] transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </nav>

      {/* ── Mobile overlay ── */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30 md:hidden"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* ── Mobile slide-in panel (from right) ── */}
      <div
        className={[
          "fixed top-0 right-0 bottom-0 z-50 w-[280px] bg-white flex flex-col transition-transform duration-200 md:hidden",
          mobileOpen ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
      >
        {/* Panel header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#F3F4F6]">
          <Image src="/full-logo.png" alt="Edcomrade" width={100} height={28} className="h-7 w-auto" />
          <button
            className="p-1 text-gray-600"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Links */}
        <div className="flex-1 overflow-y-auto">
          {/* Products group */}
          <div className="px-6 pt-4 pb-2">
            <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#2E8BC0] mb-3">
              Products
            </p>
            {PRODUCTS.map(p => (
              <Link
                key={p.href}
                href={p.href}
                className="flex flex-col py-3 border-b border-[#F3F4F6] last:border-0"
                onClick={() => setMobileOpen(false)}
              >
                <span className="text-[15px] font-semibold text-gray-900">{p.name}</span>
                <span className="text-[13px] text-gray-500 mt-0.5">{p.desc}</span>
              </Link>
            ))}
          </div>

          {/* Company links */}
          <div className="px-6 pt-2">
            {NAV_LINKS.map(l => (
              <Link
                key={l.href}
                href={l.href}
                className="block text-[15px] font-medium text-gray-800 py-3 border-b border-[#F3F4F6]"
                onClick={() => setMobileOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="https://schoolpedia.edcomrade.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-[15px] font-medium text-gray-800 py-3 border-b border-[#F3F4F6]"
              onClick={() => setMobileOpen(false)}
            >
              List Your School ↗
            </Link>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="p-4">
          <Link
            href="/contact"
            className="block w-full text-center text-[15px] font-semibold text-white bg-[#1A3C5E] py-3 rounded-lg hover:bg-[#1E3A52] transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Get Started
          </Link>
        </div>
      </div>
    </>
  );
}
