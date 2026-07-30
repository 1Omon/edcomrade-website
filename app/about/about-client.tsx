"use client";

import { Sparkles, Target, Compass, Award } from "lucide-react";
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

export default function AboutPageClient() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className="bg-white pt-32 pb-16 md:pt-40 md:pb-24 px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#E8F5EE] text-[#1B5E20] shadow-sm mb-4">
            Our Mission &amp; History
          </span>
          <h1
            className="font-extrabold text-[#1A3C5E] max-w-3xl"
            style={{
              fontSize: "clamp(44px, 7vw, 84px)",
              lineHeight: 0.96,
              letterSpacing: "-0.03em",
            }}
          >
            Great software.
            <br />
            <span className="text-[#2E8BC0]">Shouldn&apos;t be a luxury.</span>
          </h1>
        </div>
      </section>

      {/* Founding Story */}
      <section className="bg-[#F4F7FA] py-20 md:py-28 px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 md:p-12">
            <Label>Our Founding Story</Label>
            <h2 className="font-bold text-[#1A3C5E] text-2xl md:text-3xl mb-8">
              From a 4-day enrolment ordeal to a global edtech movement.
            </h2>

            <div className="text-gray-700 space-y-6 text-base md:text-lg leading-relaxed">
              <p>
                In 2023, Solomon took his nephew to a boarding school. What should have been a straightforward enrolment turned into a grueling process spanning four days. It involved endless paper forms, manual entrance exams, physical queues, and tedious in-person purchases.
              </p>
              <p>
                As a Computer Science student, Solomon saw an obvious problem hiding in plain sight. He decided to build a solution. Instead of guessing what schools needed, he went straight to the source — interviewing headmasters and school leadership to understand their daily operations.
              </p>
              <p>
                The conversations revealed a systemic gap. Schools wanted to digitize, but existing solutions were either prohibitively expensive, too complex for staff, or completely disconnected from parents. Rather than deploying the software to just one school, Solomon founded Edcomrade to build free, world-class management tools for education.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Block */}
      <section className="bg-[#1A3C5E] text-white py-24 md:py-32 px-6 md:px-8 relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/10 text-white border border-white/20 shadow-sm mb-6">
            Core Philosophy
          </span>
          <h2
            className="font-extrabold text-white"
            style={{ fontSize: "clamp(30px, 5vw, 54px)", lineHeight: 1.1, letterSpacing: "-0.02em" }}
          >
            We upgrade great schools.
            <br />
            We bring parents closer.
            <br />
            We make excellence visible.
          </h2>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="bg-white py-20 md:py-28 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Label>Leadership</Label>
            <h2 className="font-bold text-[#1A3C5E] text-3xl md:text-4xl">
              Meet the founders behind Edcomrade.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {/* Founder 1 */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left hover:-translate-y-1 hover:shadow-md transition-all duration-300">
              <div className="w-24 h-24 rounded-2xl bg-[#1A3C5E] text-white flex items-center justify-center font-bold text-2xl flex-shrink-0 shadow-md">
                SA
              </div>
              <div>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#2E8BC0]/15 text-[#2E8BC0] shadow-sm mb-2">CEO &amp; Founder</span>
                <h3 className="font-bold text-gray-900 text-xl mb-1">Solomon A. Ayisi</h3>
                <p className="text-xs text-gray-500 mb-3">Business Management</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Leading product vision, institutional partnerships, and commercial strategy to digitize great schools.
                </p>
              </div>
            </div>

            {/* Founder 2 */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left hover:-translate-y-1 hover:shadow-md transition-all duration-300">
              <div className="w-24 h-24 rounded-2xl bg-[#1E3A52] text-white flex items-center justify-center font-bold text-2xl flex-shrink-0 shadow-md">
                PS
              </div>
              <div>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#B8973A]/15 text-[#B8973A] shadow-sm mb-2">CTO &amp; Co-Founder</span>
                <h3 className="font-bold text-gray-900 text-xl mb-1">Prince Sarfo</h3>
                <p className="text-xs text-gray-500 mb-3">Systems Architect</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Building the secure, reliable systems that keep school data safe and accessible from anywhere.
                </p>
              </div>
            </div>
          </div>

          {/* Broader Team Placeholders */}
          <div className="bg-[#F4F7FA] rounded-2xl shadow-sm p-8 max-w-4xl mx-auto text-center">
            <h3 className="font-bold text-[#1A3C5E] text-xl mb-4">Engineering, Operations &amp; Support Team</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-white rounded-2xl border border-gray-200 shadow-sm p-4 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-[#1A3C5E]/10 text-[#1A3C5E] flex items-center justify-center font-bold text-xs mb-3">
                    EC 0{i}
                  </div>
                  <div className="h-3 w-20 bg-gray-300 rounded mb-1.5" />
                  <div className="h-2.5 w-14 bg-gray-200 rounded" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="bg-[#F4F7FA] py-20 md:py-28 px-6 md:px-8 border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Label>Strategic Horizon</Label>
            <h2 className="font-bold text-[#1A3C5E] text-3xl md:text-4xl">
              Where Edcomrade is heading.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 hover:-translate-y-1 hover:shadow-md transition-all duration-300 border-t-4 border-t-[#2E8BC0]">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-[#2E8BC0] uppercase tracking-wider">Horizon 1</span>
                <span className="text-xs font-bold text-gray-400">2025–2027</span>
              </div>
              <h3 className="font-bold text-[#1A3C5E] text-xl mb-4">Foundation &amp; Growth</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2.5">
                  <Target className="w-4 h-4 text-[#2E8BC0] flex-shrink-0 mt-0.5" />
                  <span>100+ schools on the School Management platform</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Target className="w-4 h-4 text-[#2E8BC0] flex-shrink-0 mt-0.5" />
                  <span>Schoolpedia established as the primary school discovery directory</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Target className="w-4 h-4 text-[#2E8BC0] flex-shrink-0 mt-0.5" />
                  <span>Target $500K ARR</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 hover:-translate-y-1 hover:shadow-md transition-all duration-300 border-t-4 border-t-[#B8973A]">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-[#B8973A] uppercase tracking-wider">Horizon 2</span>
                <span className="text-xs font-bold text-gray-400">2027–2030</span>
              </div>
              <h3 className="font-bold text-[#1A3C5E] text-xl mb-4">Global Expansion</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2.5">
                  <Compass className="w-4 h-4 text-[#B8973A] flex-shrink-0 mt-0.5" />
                  <span>10,000 schools worldwide</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Compass className="w-4 h-4 text-[#B8973A] flex-shrink-0 mt-0.5" />
                  <span>3 million active parents on ParentAide</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Compass className="w-4 h-4 text-[#B8973A] flex-shrink-0 mt-0.5" />
                  <span>Integrated education micro-financing &amp; fee insurance</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 hover:-translate-y-1 hover:shadow-md transition-all duration-300 border-t-4 border-t-[#1B5E20]">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-[#1B5E20] uppercase tracking-wider">Horizon 3</span>
                <span className="text-xs font-bold text-gray-400">2030+</span>
              </div>
              <h3 className="font-bold text-[#1A3C5E] text-xl mb-4">Platform Mastery</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2.5">
                  <Award className="w-4 h-4 text-[#1B5E20] flex-shrink-0 mt-0.5" />
                  <span>Edcomrade-backed boarding facilities &amp; campus infrastructure</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Award className="w-4 h-4 text-[#1B5E20] flex-shrink-0 mt-0.5" />
                  <span>International foreign exchange &amp; student travel programs</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Award className="w-4 h-4 text-[#1B5E20] flex-shrink-0 mt-0.5" />
                  <span>Target $5M+ ARR</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
