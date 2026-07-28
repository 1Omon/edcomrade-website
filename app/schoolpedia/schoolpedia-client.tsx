"use client";

import Link from "next/link";
import { ArrowRight, Search, SlidersHorizontal, CheckCircle2, ShieldCheck, Award, Eye, Sparkles } from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

function Label({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2E8BC0]/10 text-[#2E8BC0] text-[11px] font-bold uppercase tracking-wider mb-3 shadow-xs">
      <Sparkles className="w-3 h-3" />
      <span>{children}</span>
    </div>
  );
}

export default function SchoolpediaPageClient() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className="bg-[#2E8BC0] text-white pt-32 pb-20 md:pt-40 md:pb-28 px-6 md:px-8 relative overflow-hidden">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/15 text-white border border-white/25 shadow-sm mb-4">
            Ghana&apos;s School Intelligence Platform
          </span>
          <h1
            className="font-extrabold text-white max-w-4xl mx-auto"
            style={{
              fontSize: "clamp(44px, 7vw, 84px)",
              lineHeight: 0.96,
              letterSpacing: "-0.03em",
            }}
          >
            Find the right school.
            <br />
            Know what you&apos;re choosing.
          </h1>
          <p className="text-white/90 mt-6 max-w-[620px] mx-auto text-lg leading-relaxed">
            Schoolpedia maps every school in Ghana — so parents can search, compare fees and facilities, and decide with complete confidence.
          </p>

          <div className="mt-10 flex justify-center">
            <Link
              href="https://schoolpedia.edcomrade.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center font-semibold rounded-full bg-white text-[#1A3C5E] hover:bg-gray-50 shadow-sm hover:shadow-md px-8 py-3.5 text-base font-bold gap-2 transition-all duration-200"
            >
              Search Schools on Schoolpedia <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* For Parents */}
      <section className="bg-white py-20 md:py-28 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Label>For Parents & Guardians</Label>
            <h2 className="font-bold text-[#1A3C5E] text-3xl md:text-4xl">
              A transparent way to find and compare schools in Ghana.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#F4F7FA] rounded-2xl shadow-sm p-8 hover:-translate-y-1 hover:shadow-md transition-all duration-300 border-t-4 border-t-[#2E8BC0]">
              <div className="w-12 h-12 rounded-2xl bg-[#2E8BC0]/10 text-[#2E8BC0] flex items-center justify-center mb-5 shadow-xs">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-[#1A3C5E] text-xl mb-3">Targeted Search</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Find schools by location, school type (basic, SHS, vocational), fees range, and curriculum. Filter down to exactly what suits your family.
              </p>
            </div>

            <div className="bg-[#F4F7FA] rounded-2xl shadow-sm p-8 hover:-translate-y-1 hover:shadow-md transition-all duration-300 border-t-4 border-t-[#B8973A]">
              <div className="w-12 h-12 rounded-2xl bg-[#B8973A]/10 text-[#B8973A] flex items-center justify-center mb-5 shadow-xs">
                <SlidersHorizontal className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-[#1A3C5E] text-xl mb-3">Side-by-Side Comparison</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Compare any two institutions side-by-side to review facilities, extracurricular activities, BECE/WASSCE results, and fee structures.
              </p>
            </div>

            <div className="bg-[#F4F7FA] rounded-2xl shadow-sm p-8 hover:-translate-y-1 hover:shadow-md transition-all duration-300 border-t-4 border-t-[#1B5E20]">
              <div className="w-12 h-12 rounded-2xl bg-[#1B5E20]/10 text-[#1B5E20] flex items-center justify-center mb-5 shadow-xs">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-[#1A3C5E] text-xl mb-3">Direct Enrolment</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Submit admissions applications directly through the platform via ParentAide with real-time status updates from the school administration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* For Schools */}
      <section className="bg-[#1A3C5E] text-white py-20 md:py-28 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/10 text-white border border-white/20 shadow-sm mb-3">
              For School Proprietors
            </span>
            <h2 className="font-bold text-white text-3xl md:text-4xl">
              Your school&apos;s verified public profile. Built & verified by Edcomrade.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#1E3A52] rounded-2xl border border-white/10 shadow-lg p-8 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white font-bold text-sm mb-4">
                <ShieldCheck className="w-5 h-5 text-[#2E8BC0]" />
              </div>
              <h3 className="font-bold text-white text-xl mb-3">Verified Trust Badge</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Stand out with an official verified badge. Display authentic school photography, verified fee schedules, and official contact channels.
              </p>
            </div>

            <div className="bg-[#1E3A52] rounded-2xl border border-white/10 shadow-lg p-8 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white font-bold text-sm mb-4">
                <Award className="w-5 h-5 text-[#B8973A]" />
              </div>
              <h3 className="font-bold text-white text-xl mb-3">Institutional PR Platform</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Publish school achievements, academic awards, sporting victories, and upcoming open house events directly to your profile.
              </p>
            </div>

            <div className="bg-[#1E3A52] rounded-2xl border border-white/10 shadow-lg p-8 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white font-bold text-sm mb-4">
                <Eye className="w-5 h-5 text-emerald-400" />
              </div>
              <h3 className="font-bold text-white text-xl mb-3">Local Search Visibility</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Be the top result when parents search for private schools in your district, region, or city.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="bg-[#F4F7FA] py-12 px-6 md:px-8 border-y border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
              <p className="font-extrabold text-[#1A3C5E] text-2xl md:text-3xl mb-1">120+</p>
              <p className="text-xs text-gray-500 font-semibold">Schools Listed on Map</p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
              <p className="font-extrabold text-[#1A3C5E] text-2xl md:text-3xl mb-1">30+</p>
              <p className="text-xs text-gray-500 font-semibold">Verified School Profiles</p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
              <p className="font-extrabold text-emerald-700 text-2xl md:text-3xl mb-1">Free</p>
              <p className="text-xs text-gray-500 font-semibold">Listing For Every School</p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
              <p className="font-extrabold text-[#2E8BC0] text-2xl md:text-3xl mb-1">Pioneers&apos;</p>
              <p className="text-xs text-gray-500 font-semibold">Software Powered</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-white py-20 md:py-28 px-6 md:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-bold text-[#1A3C5E] text-3xl md:text-4xl mb-6">
            Every school on Pioneers&apos; Software gets a free verified Schoolpedia profile.
          </h2>
          <p className="text-gray-600 text-base mb-8">
            Register your institution today to gain instant search visibility across Ghana.
          </p>
          <Link
            href="/software"
            className="inline-flex items-center justify-center font-semibold rounded-full bg-[#1A3C5E] text-white hover:bg-[#163350] shadow-sm hover:shadow-md px-8 py-3.5 text-sm font-bold gap-2 transition-all duration-200"
          >
            Explore Pioneers&apos; Software <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
