"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
  }, [pathname]);

  const toggleDropdown = (menu: string) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <header
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 bg-[var(--color-paper)] transition-all duration-200 ${
        scrolled ? "border-b border-[var(--color-rule)]" : ""
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        {/* Brand Wordmark */}
        <Link href="/" className="group flex items-baseline gap-1">
          <span className="font-serif text-2xl lg:text-3xl font-extrabold tracking-tight text-[var(--color-ink)]">
            Edcomrade
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] inline-block"></span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium text-[var(--color-ink)]">
          {/* What We Do Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("what-we-do")}
              className={`flex items-center gap-1 hover:text-[var(--color-accent)] transition-colors py-2 ${
                pathname === "/software" || pathname === "/schoolpedia" || pathname === "/edmedia"
                  ? "text-[var(--color-accent)] border-b-2 border-[var(--color-accent)]"
                  : ""
              }`}
            >
              What We Do <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${openMenu === "what-we-do" ? "rotate-180" : ""}`} />
            </button>
            {openMenu === "what-we-do" && (
              <div className="absolute top-full left-0 mt-2 w-72 bg-white border border-[var(--color-rule)] rounded-[4px] p-4 shadow-none space-y-3 z-50">
                <Link
                  href="/software"
                  className="block hover:bg-[var(--color-paper-warm)] p-2 rounded-[3px] transition-colors"
                >
                  <div className="font-medium text-[var(--color-ink)] text-sm">School ERP Systems</div>
                  <div className="text-[12px] text-[var(--color-ink-faint)] mt-0.5">Pioneers&apos; Free ERP & Custom Institutional App</div>
                </Link>
                <Link
                  href="/schoolpedia"
                  className="block hover:bg-[var(--color-paper-warm)] p-2 rounded-[3px] transition-colors"
                >
                  <div className="font-medium text-[var(--color-ink)] text-sm">Schoolpedia</div>
                  <div className="text-[12px] text-[var(--color-ink-faint)] mt-0.5">Ghana&apos;s verified school discovery directory</div>
                </Link>
                <Link
                  href="/edmedia"
                  className="block hover:bg-[var(--color-paper-warm)] p-2 rounded-[3px] transition-colors"
                >
                  <div className="font-medium text-[var(--color-ink)] text-sm">EdMedia & Publishing</div>
                  <div className="text-[12px] text-[var(--color-ink-faint)] mt-0.5">Digital magazine, coverage & brand positioning</div>
                </Link>
              </div>
            )}
          </div>

          {/* Software Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("software")}
              className={`flex items-center gap-1 hover:text-[var(--color-accent)] transition-colors py-2 ${
                pathname === "/software" || pathname === "/parentaide"
                  ? "text-[var(--color-accent)] border-b-2 border-[var(--color-accent)]"
                  : ""
              }`}
            >
              Software <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${openMenu === "software" ? "rotate-180" : ""}`} />
            </button>
            {openMenu === "software" && (
              <div className="absolute top-full left-0 mt-2 w-72 bg-white border border-[var(--color-rule)] rounded-[4px] p-4 shadow-none space-y-3 z-50">
                <Link
                  href="/software"
                  className="block hover:bg-[var(--color-paper-warm)] p-2 rounded-[3px] transition-colors"
                >
                  <div className="font-medium text-[var(--color-ink)] text-sm">Pioneers&apos; Software</div>
                  <div className="text-[12px] text-[var(--color-ink-faint)] mt-0.5">Free cloud ERP for schools digitising today</div>
                </Link>
                <Link
                  href="/software#custom"
                  className="block hover:bg-[var(--color-paper-warm)] p-2 rounded-[3px] transition-colors"
                >
                  <div className="font-medium text-[var(--color-ink)] text-sm">Custom App</div>
                  <div className="text-[12px] text-[var(--color-ink-faint)] mt-0.5">Bespoke system built for elite institutions</div>
                </Link>
                <Link
                  href="/parentaide"
                  className="block hover:bg-[var(--color-paper-warm)] p-2 rounded-[3px] transition-colors"
                >
                  <div className="font-medium text-[var(--color-ink)] text-sm">ParentAide</div>
                  <div className="text-[12px] text-[var(--color-ink-faint)] mt-0.5">The essential mobile app for school parents</div>
                </Link>
              </div>
            )}
          </div>

          {/* Direct Link: Schoolpedia */}
          <Link
            href="/schoolpedia"
            className={`hover:text-[var(--color-accent)] transition-colors py-2 ${
              pathname === "/schoolpedia" ? "text-[var(--color-accent)] border-b-2 border-[var(--color-accent)]" : ""
            }`}
          >
            Schoolpedia
          </Link>

          {/* Work With Us Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("work-with-us")}
              className={`flex items-center gap-1 hover:text-[var(--color-accent)] transition-colors py-2 ${
                pathname === "/amplifiers"
                  ? "text-[var(--color-accent)] border-b-2 border-[var(--color-accent)]"
                  : ""
              }`}
            >
              Work With Us <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${openMenu === "work-with-us" ? "rotate-180" : ""}`} />
            </button>
            {openMenu === "work-with-us" && (
              <div className="absolute top-full left-0 mt-2 w-72 bg-white border border-[var(--color-rule)] rounded-[4px] p-4 shadow-none space-y-3 z-50">
                <Link
                  href="/amplifiers"
                  className="block hover:bg-[var(--color-paper-warm)] p-2 rounded-[3px] transition-colors"
                >
                  <div className="font-medium text-[var(--color-ink)] text-sm">Become an Amplifier</div>
                  <div className="text-[12px] text-[var(--color-ink-faint)] mt-0.5">Earn recurring commission bringing ERP to schools</div>
                </Link>
                <Link
                  href="/amplifiers#sales-executive"
                  className="block hover:bg-[var(--color-paper-warm)] p-2 rounded-[3px] transition-colors"
                >
                  <div className="font-medium text-[var(--color-ink)] text-sm">Sales Executive Role</div>
                  <div className="text-[12px] text-[var(--color-ink-faint)] mt-0.5">Enterprise Custom App sales for experienced reps</div>
                </Link>
                <Link
                  href="/contact?subject=partnership"
                  className="block hover:bg-[var(--color-paper-warm)] p-2 rounded-[3px] transition-colors"
                >
                  <div className="font-medium text-[var(--color-ink)] text-sm">Partner With Us</div>
                  <div className="text-[12px] text-[var(--color-ink-faint)] mt-0.5">Associations, NGOs & platform integrations</div>
                </Link>
              </div>
            )}
          </div>

          {/* Direct Link: About */}
          <Link
            href="/about"
            className={`hover:text-[var(--color-accent)] transition-colors py-2 ${
              pathname === "/about" ? "text-[var(--color-accent)] border-b-2 border-[var(--color-accent)]" : ""
            }`}
          >
            About
          </Link>
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/contact"
            className="border border-[var(--color-rule)] bg-transparent text-[var(--color-ink)] hover:border-[var(--color-ink)] text-sm font-medium px-4 py-2 rounded-[3px] transition-colors"
          >
            Enquire
          </Link>
          <Link
            href="/contact?subject=deploy"
            className="bg-[var(--color-ink)] text-white hover:bg-[var(--color-navy)] text-sm font-medium px-4 py-2 rounded-[3px] transition-colors"
          >
            Get Started →
          </Link>
        </div>

        {/* Mobile Hamburger Button (Two lines, editorial style) */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 focus:outline-none"
          aria-label="Toggle Menu"
        >
          <span className={`w-6 h-0.5 bg-[var(--color-ink)] transition-transform ${mobileOpen ? "rotate-45 translate-y-1" : ""}`} />
          <span className={`w-6 h-0.5 bg-[var(--color-ink)] transition-transform ${mobileOpen ? "-rotate-45 -translate-y-1" : ""}`} />
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 top-20 bg-white z-40 p-6 flex flex-col justify-between overflow-y-auto border-t border-[var(--color-rule)]">
          <div className="space-y-6 text-lg font-medium">
            <div className="border-b border-[var(--color-rule)] pb-4 space-y-3">
              <span className="text-[var(--text-xs)] uppercase tracking-[var(--tracking-wider)] text-[var(--color-accent)] font-mono">
                Software & Platform
              </span>
              <Link href="/software" className="block text-[var(--color-ink)]">Pioneers&apos; Software (Free ERP)</Link>
              <Link href="/software#custom" className="block text-[var(--color-ink)]">Custom App (Bespoke)</Link>
              <Link href="/parentaide" className="block text-[var(--color-ink)]">ParentAide App</Link>
            </div>

            <div className="border-b border-[var(--color-rule)] pb-4 space-y-3">
              <span className="text-[var(--text-xs)] uppercase tracking-[var(--tracking-wider)] text-[var(--color-accent)] font-mono">
                Ecosystem & Media
              </span>
              <Link href="/schoolpedia" className="block text-[var(--color-ink)]">Schoolpedia Directory</Link>
              <Link href="/edmedia" className="block text-[var(--color-ink)]">EdMedia & Publishing</Link>
              <Link href="/amplifiers" className="block text-[var(--color-ink)]">Work With Us (Amplifiers)</Link>
            </div>

            <div className="space-y-3">
              <Link href="/about" className="block text-[var(--color-ink)]">About Edcomrade</Link>
              <Link href="/manifesto" className="block text-[var(--color-ink)]">Strategic Manifesto</Link>
            </div>
          </div>

          <div className="pt-8 space-y-3 border-t border-[var(--color-rule)]">
            <Link
              href="/contact?subject=deploy"
              className="block w-full text-center bg-[var(--color-ink)] text-white text-base font-medium py-3 rounded-[3px]"
            >
              Get Started →
            </Link>
            <Link
              href="/contact"
              className="block w-full text-center border border-[var(--color-rule)] text-[var(--color-ink)] text-base font-medium py-3 rounded-[3px]"
            >
              Enquire
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
