"use client";

import Link from "next/link";
import Image from "next/image";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { BookOpen, Search, ShieldCheck, ArrowRight, Sparkles, SlidersHorizontal, CheckCircle2 } from "lucide-react";

export default function SchoolpediaPageClient() {
  return (
    <main style={{ backgroundColor: "var(--color-paper)" }}>
      <Navigation />

      {/* Hero Header */}
      <section style={{ paddingTop: "150px", paddingBottom: "80px", backgroundColor: "var(--color-paper)" }}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="mag-badge-cyan">
                <BookOpen className="w-3.5 h-3.5" />
                <span>SCHOOLPEDIA DIRECTORY</span>
              </span>
              <h1 className="font-serif text-5xl sm:text-6xl font-bold text-[#1A3C5E] leading-tight">
                Find the right school. Know what you&apos;re choosing.
              </h1>
              <p className="text-slate-600 text-lg leading-relaxed">
                Schoolpedia maps verified private schools across Ghana — giving parents transparent fee structures, academic results, and direct enrolment channels.
              </p>
              <div className="pt-2">
                <Link
                  href="https://schoolpedia.edcomrade.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-[#2E8BC0] hover:bg-[#2576A5] text-white font-bold text-base shadow-md transition-all"
                >
                  <span>Launch Schoolpedia Directory</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="mag-card p-3">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src="/images/school-campus.png"
                    alt="Verified school campus spotlight"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* For Parents Cards */}
      <section style={{ padding: "90px 0", backgroundColor: "#EEF4F8" }}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 space-y-10">
          <div className="border-b-2 border-[#2E8BC0] pb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#2E8BC0] font-bold block mb-2">
              FOR PARENTS & GUARDIANS
            </span>
            <h2 className="font-serif text-4xl font-bold text-[#1A3C5E]">
              A transparent way to find and compare schools in Ghana.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="mag-card p-8 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#2E8BC0]/10 text-[#2E8BC0] flex items-center justify-center font-bold">
                <Search className="w-6 h-6" />
              </div>
              <span className="mag-badge-cyan">SEARCH ENGINE</span>
              <h3 className="font-serif text-2xl font-bold text-[#1A3C5E]">Targeted Search</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Find schools by region, district, fee tier, curriculum (BECE, Cambridge, WASSCE), and facilities. Zero billboard guesswork.
              </p>
            </div>

            <div className="mag-card p-8 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#B8973A]/10 text-[#B8973A] flex items-center justify-center font-bold">
                <SlidersHorizontal className="w-6 h-6" />
              </div>
              <span className="mag-badge-gold">COMPARISON</span>
              <h3 className="font-serif text-2xl font-bold text-[#1A3C5E]">Side-by-Side View</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Compare two institutions across key metrics — student-teacher ratio, transport, boarding, and verified term fees.
              </p>
            </div>

            <div className="mag-card p-8 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#1B5E20]/10 text-[#1B5E20] flex items-center justify-center font-bold">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <span className="mag-badge-green">ADMISSIONS</span>
              <h3 className="font-serif text-2xl font-bold text-[#1A3C5E]">Direct Enrolment</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Submit application forms directly through ParentAide with instant notifications on application status.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* For School Proprietors (Dark Navy Container) */}
      <section className="bg-[#0F2537] text-white py-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 space-y-10">
          <div className="border-b border-white/10 pb-4">
            <span className="mag-badge-gold mb-2">FOR SCHOOL PROPRIETORS</span>
            <h2 className="font-serif text-4xl font-bold text-white">Your school&apos;s verified public profile.</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#1A3C5E]/60 border border-white/10 p-8 rounded-xl space-y-3">
              <span className="mag-badge-gold">TRUST BADGE</span>
              <h3 className="font-serif text-2xl font-bold text-white">Verified Profile</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Schools running on Pioneers&apos; ERP receive official verification. Display authenticated photos and fee schedules.
              </p>
            </div>

            <div className="bg-[#1A3C5E]/60 border border-white/10 p-8 rounded-xl space-y-3">
              <span className="mag-badge-cyan">PUBLIC RELATIONS</span>
              <h3 className="font-serif text-2xl font-bold text-white">Institutional PR</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Publish school achievements, academic awards, and open house announcements directly to your public profile.
              </p>
            </div>

            <div className="bg-[#1A3C5E]/60 border border-white/10 p-8 rounded-xl space-y-3">
              <span className="mag-badge-green">LOCAL SEARCH</span>
              <h3 className="font-serif text-2xl font-bold text-white">SEO Visibility</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Be the top result when parents search for private schools in your district or region across Ghana.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
