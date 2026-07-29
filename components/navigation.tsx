"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu, X, Sparkles, BookOpen, Layers, Users, Phone, ArrowRight, ShieldCheck, Newspaper } from "lucide-react";

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1A3C5E] text-white shadow-md transition-all duration-300">
      {/* Top Banner Ticker */}
      <div className="bg-[#0F2537] text-white text-[11px] font-mono py-1.5 px-6 border-b border-white/10 overflow-hidden">
        <div className="max-w-[1200px] mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1 bg-[#2E8BC0] text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
              <Sparkles className="w-3 h-3" /> SEPTEMBER 2026 COHORT
            </span>
            <span className="hidden sm:inline text-white/80">Digital 100 Schools Onboarding — Free ERP Setup Included</span>
          </div>
          <Link href="/software" className="text-[#2E8BC0] hover:underline font-bold flex items-center gap-1">
            Claim Free ERP <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>

      {/* Main Header Masthead */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 h-18 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-lg bg-[#2E8BC0] text-white flex items-center justify-center font-bold text-xl shadow-sm group-hover:scale-105 transition-transform">
            E
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-2xl font-bold tracking-tight text-white group-hover:text-[#2E8BC0] transition-colors">
              EdComrade
            </span>
            <span className="text-[9px] uppercase tracking-widest text-[#2E8BC0] font-mono font-semibold -mt-1">
              MAGAZINE & SOFTWARE
            </span>
          </div>
        </Link>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-white/90">
          {/* Dropdown: What We Do */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("what-we-do")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1.5 py-6 hover:text-[#2E8BC0] transition-colors">
              <span>Ecosystem</span>
              <ChevronDown className="w-4 h-4 text-white/60" />
            </button>

            {activeDropdown === "what-we-do" && (
              <div className="absolute top-full left-0 w-80 bg-white text-[#1A3C5E] rounded-xl shadow-xl border border-gray-100 p-4 space-y-2 animate-in fade-in duration-200">
                <Link href="/software" className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-[#EEF4F8] transition-colors">
                  <div className="p-2 rounded-md bg-[#2E8BC0]/10 text-[#2E8BC0] mt-0.5">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-sm text-[#1A3C5E]">Pioneers&apos; Software</div>
                    <div className="text-xs text-gray-500">Free ERP for Ghanaian schools</div>
                  </div>
                </Link>
                <Link href="/schoolpedia" className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-[#EEF4F8] transition-colors">
                  <div className="p-2 rounded-md bg-[#B8973A]/10 text-[#B8973A] mt-0.5">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-sm text-[#1A3C5E]">Schoolpedia</div>
                    <div className="text-xs text-gray-500">Verified directory of schools</div>
                  </div>
                </Link>
                <Link href="/parentaide" className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-[#EEF4F8] transition-colors">
                  <div className="p-2 rounded-md bg-[#1B5E20]/10 text-[#1B5E20] mt-0.5">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-sm text-[#1A3C5E]">ParentAide</div>
                    <div className="text-xs text-gray-500">Mobile app for school parents</div>
                  </div>
                </Link>
              </div>
            )}
          </div>

          <Link href="/software" className="hover:text-[#2E8BC0] transition-colors">
            Software & Pricing
          </Link>
          <Link href="/edmedia" className="flex items-center gap-1.5 hover:text-[#2E8BC0] transition-colors">
            <Newspaper className="w-4 h-4 text-[#2E8BC0]" />
            <span>EdMedia</span>
          </Link>
          <Link href="/amplifiers" className="hover:text-[#2E8BC0] transition-colors">
            Amplifiers
          </Link>
          <Link href="/about" className="hover:text-[#2E8BC0] transition-colors">
            About Us
          </Link>
        </nav>

        {/* Action CTAs */}
        <div className="hidden sm:flex items-center gap-4">
          <Link
            href="/contact"
            className="text-sm font-semibold text-white/90 hover:text-[#2E8BC0] transition-colors"
          >
            Enquire
          </Link>
          <Link
            href="/contact?subject=get-started"
            className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-bold text-white bg-[#2E8BC0] hover:bg-[#2576A5] rounded-full shadow-sm hover:shadow-md transition-all gap-1.5"
          >
            <span>Register School</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-white hover:text-[#2E8BC0] focus:outline-none"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#0F2537] border-t border-white/10 px-6 py-6 space-y-4">
          <Link href="/software" onClick={() => setMobileOpen(false)} className="block text-lg font-bold text-white py-2">
            Pioneers&apos; Software
          </Link>
          <Link href="/schoolpedia" onClick={() => setMobileOpen(false)} className="block text-lg font-bold text-white py-2">
            Schoolpedia Directory
          </Link>
          <Link href="/parentaide" onClick={() => setMobileOpen(false)} className="block text-lg font-bold text-white py-2">
            ParentAide Mobile
          </Link>
          <Link href="/edmedia" onClick={() => setMobileOpen(false)} className="block text-lg font-bold text-white py-2">
            EdMedia Publishing
          </Link>
          <Link href="/amplifiers" onClick={() => setMobileOpen(false)} className="block text-lg font-bold text-white py-2">
            Amplifiers Programme
          </Link>
          <Link href="/about" onClick={() => setMobileOpen(false)} className="block text-lg font-bold text-white py-2">
            About Edcomrade
          </Link>
          <Link href="/contact" onClick={() => setMobileOpen(false)} className="block text-lg font-bold text-[#2E8BC0] py-2">
            Contact & Support →
          </Link>
        </div>
      )}
    </header>
  );
}
