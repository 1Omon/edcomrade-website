"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, Sparkles } from "lucide-react";

const PRODUCTS = [
  {
    href: "/software",
    name: "Pioneers' Software",
    desc: "Free ERP for schools digitising now",
    badge: "Free Tier",
  },
  {
    href: "/software#custom",
    name: "Custom App",
    desc: "Bespoke system built for your school",
    badge: "Premium",
  },
  {
    href: "/parentaide",
    name: "ParentAide",
    desc: "The parent and guardian app",
    badge: "Free for Parents",
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
    const onScroll = () => setScrolled(window.scrollY > 40);
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
      {/* ── Floating clay nav bar ── */}
      <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-3 transition-all duration-300">
        <nav
          className={[
            "max-w-6xl mx-auto rounded-full px-6 py-3 transition-all duration-300 flex items-center justify-between gap-6",
            scrolled
              ? "bg-white/90 backdrop-blur-md shadow-clay-card border border-white/80"
              : "bg-white/70 backdrop-blur-sm border border-white/40 shadow-sm",
          ].join(" ")}
        >
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center">
            <Image
              src="/full-logo.png"
              alt="Edcomrade"
              width={115}
              height={34}
              className="h-8 w-auto"
              priority
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-7">
            {/* Products dropdown */}
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setDropdownOpen(v => !v)}
                className="flex items-center gap-1.5 text-[15px] font-semibold text-[#1A3C5E] hover:text-[#2E8BC0] transition-colors py-1"
                aria-expanded={dropdownOpen}
                aria-haspopup="true"
              >
                Products
                <ChevronDown
                  className={[
                    "w-4 h-4 text-[#2E8BC0] transition-transform duration-200",
                    dropdownOpen && "rotate-180",
                  ].join(" ")}
                />
              </button>

              {dropdownOpen && (
                <div
                  role="menu"
                  className="absolute top-full left-0 mt-3 w-80 clay-card p-3 z-50 animate-in fade-in zoom-in-95 duration-150"
                >
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#2E8BC0] px-3 py-1.5 mb-1 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" /> School Ecosystem
                  </div>
                  {PRODUCTS.map(p => (
                    <Link
                      key={p.href}
                      href={p.href}
                      role="menuitem"
                      onClick={() => setDropdownOpen(false)}
                      className="block p-3 rounded-xl hover:bg-[#F4F7FA] transition-colors group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[14px] font-bold text-gray-900 group-hover:text-[#1A3C5E]">
                          {p.name}
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#2E8BC0]/10 text-[#2E8BC0]">
                          {p.badge}
                        </span>
                      </div>
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
                  "text-[15px] font-semibold transition-colors py-1",
                  pathname.startsWith(l.href)
                    ? "text-[#2E8BC0]"
                    : "text-[#1A3C5E] hover:text-[#2E8BC0]",
                ].join(" ")}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Desktop Clay CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="https://schoolpedia.edcomrade.com"
              target="_blank"
              rel="noopener noreferrer"
              className="clay-btn clay-btn-outline px-5 py-2 text-[14px]"
            >
              List Your School
            </Link>
            <Link
              href="/contact"
              className="clay-btn clay-btn-primary px-6 py-2 text-[14px]"
            >
              Get Started
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden p-2 text-[#1A3C5E] rounded-full hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </nav>
      </header>

      {/* ── Mobile overlay ── */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* ── Mobile slide-in panel (clay container) ── */}
      <div
        className={[
          "fixed top-3 right-3 bottom-3 z-50 w-[310px] clay-card bg-white flex flex-col transition-transform duration-300 md:hidden overflow-hidden p-0",
          mobileOpen ? "translate-x-0" : "translate-x-[110%]",
        ].join(" ")}
      >
        {/* Panel header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E5E7EB] bg-[#F4F7FA]">
          <Image src="/full-logo.png" alt="Edcomrade" width={105} height={30} className="h-7 w-auto" />
          <button
            className="p-1.5 text-gray-600 rounded-full hover:bg-gray-200 transition-colors"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Links */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6">
          {/* Products group */}
          <div>
            <p className="text-[11px] font-bold tracking-wider uppercase text-[#2E8BC0] mb-3">
              Products & Software
            </p>
            <div className="space-y-2">
              {PRODUCTS.map(p => (
                <Link
                  key={p.href}
                  href={p.href}
                  className="block p-3 rounded-xl bg-[#F4F7FA] hover:bg-[#2E8BC0]/10 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[15px] font-bold text-gray-900">{p.name}</span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#2E8BC0] bg-white px-2 py-0.5 rounded-full">
                      {p.badge}
                    </span>
                  </div>
                  <span className="text-[13px] text-gray-500 block mt-0.5">{p.desc}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Company links */}
          <div className="space-y-1 pt-2 border-t border-[#E5E7EB]">
            <p className="text-[11px] font-bold tracking-wider uppercase text-gray-400 mb-2">
              Navigation
            </p>
            {NAV_LINKS.map(l => (
              <Link
                key={l.href}
                href={l.href}
                className="block text-[15px] font-semibold text-gray-800 py-2.5 px-3 rounded-lg hover:bg-gray-100 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="https://schoolpedia.edcomrade.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-[15px] font-semibold text-[#2E8BC0] py-2.5 px-3 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              List Your School ↗
            </Link>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="p-5 border-t border-[#E5E7EB] bg-[#F4F7FA]">
          <Link
            href="/contact"
            className="clay-btn clay-btn-primary w-full py-3 text-[15px]"
            onClick={() => setMobileOpen(false)}
          >
            Get Started
          </Link>
        </div>
      </div>
    </>
  );
}
