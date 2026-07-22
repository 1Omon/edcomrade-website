"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, Share2, Video, Compass, Megaphone, Newspaper, Sparkles } from "lucide-react";
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

export default function EdMediaPageClient() {
  const services = [
    {
      title: "Digital Magazine",
      desc: "High-quality editorial features highlighting your school's unique strengths, published to a nationwide audience of parents and educators.",
      icon: BookOpen,
    },
    {
      title: "Social Media Curation",
      desc: "Professional curation of your school's digital presence. We build engagement and trust on the platforms parents use most.",
      icon: Share2,
    },
    {
      title: "School Event Coverage",
      desc: "Cinematic photography and videography for speech days, sports festivals, anniversaries, and graduations.",
      icon: Video,
    },
    {
      title: "Brand Consultation",
      desc: "Strategic guidance on positioning your institution in a competitive market. We help you articulate your unique educational voice.",
      icon: Compass,
    },
    {
      title: "Education Advertising",
      desc: "Targeted campaigns across Schoolpedia and partner networks to drive admissions during peak enrolment seasons.",
      icon: Megaphone,
    },
    {
      title: "PR & Media Outreach",
      desc: "Get your school's achievements and academic milestones featured in major national publications and broadcasting outlets.",
      icon: Newspaper,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className="bg-white pt-32 pb-16 md:pt-40 md:pb-24 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <span className="clay-badge bg-[#E8F5EE] text-[#1B5E20] mb-4">
            EdMedia Department
          </span>
          <h1
            className="font-extrabold text-[#1A3C5E] max-w-4xl"
            style={{
              fontSize: "clamp(44px, 7vw, 84px)",
              lineHeight: 0.96,
              letterSpacing: "-0.03em",
            }}
          >
            Visibility for schools that
            <br />
            <span className="text-[#2E8BC0]">deserve to be seen.</span>
          </h1>
          <p className="text-gray-600 mt-6 max-w-[540px] text-lg leading-relaxed">
            EdMedia is Edcomrade&apos;s media and publishing arm — helping educational institutions craft their brand, showcase achievements, and connect with parents.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-[#F4F7FA] py-20 md:py-28 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Label>Our Services</Label>
            <h2 className="font-bold text-[#1A3C5E] text-3xl md:text-4xl">
              Strategic media tools designed for African education.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={i} className="clay-card p-8 flex flex-col justify-between clay-card-hover">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[#2E8BC0]/10 text-[#2E8BC0] flex items-center justify-center mb-5 shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-[#1A3C5E] text-xl mb-3">{s.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-gray-100 text-xs font-bold text-[#2E8BC0]">
                    EdMedia Department
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Magazine Section */}
      <section className="bg-[#1A3C5E] text-white py-20 md:py-28 px-6 md:px-8 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="clay-badge bg-white/10 text-white border border-white/20 mb-3">
              Print & Digital Publication
            </span>
            <h2 className="font-bold text-white text-3xl md:text-4xl">
              The Edcomrade Education Magazine spotlights schools leading in innovation.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Magazine Cover 01 */}
            <div className="clay-card-dark p-6 flex flex-col justify-between clay-card-dark-hover">
              <div className="w-full bg-[#162C40] rounded-2xl flex flex-col items-center justify-center p-8 border border-white/10 aspect-[3/4] mb-4">
                <BookOpen className="w-10 h-10 text-[#2E8BC0] mb-3" />
                <span className="text-white/40 text-xs font-bold uppercase tracking-widest">Issue 01 · 2025</span>
                <p className="text-white font-extrabold text-center text-sm mt-2">Ghana&apos;s Digital Education Pioneers</p>
              </div>
              <p className="text-white/70 text-xs font-medium text-center">Spotlighting pioneer basic schools adopting paperless administration.</p>
            </div>

            {/* Magazine Cover 02 */}
            <div className="clay-card-dark p-6 flex flex-col justify-between clay-card-dark-hover">
              <div className="w-full bg-[#162C40] rounded-2xl flex flex-col items-center justify-center p-8 border border-white/10 aspect-[3/4] mb-4">
                <BookOpen className="w-10 h-10 text-[#B8973A] mb-3" />
                <span className="text-white/40 text-xs font-bold uppercase tracking-widest">Issue 02 · 2025</span>
                <p className="text-white font-extrabold text-center text-sm mt-2">Parent Connectivity & STEM</p>
              </div>
              <p className="text-white/70 text-xs font-medium text-center">Exploring parent engagement and modern science facilities in Accra & Kumasi.</p>
            </div>

            {/* Magazine Cover 03 */}
            <div className="clay-card-dark p-6 flex flex-col justify-between clay-card-dark-hover hidden md:flex">
              <div className="w-full bg-[#162C40] rounded-2xl flex flex-col items-center justify-center p-8 border border-white/10 aspect-[3/4] mb-4">
                <BookOpen className="w-10 h-10 text-emerald-400 mb-3" />
                <span className="text-white/40 text-xs font-bold uppercase tracking-widest">Issue 03 · 2026</span>
                <p className="text-white font-extrabold text-center text-sm mt-2">The Future of African ERPs</p>
              </div>
              <p className="text-white/70 text-xs font-medium text-center">Interviews with school proprietors driving digital transformation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry CTA */}
      <section className="bg-white py-24 md:py-32 px-6 md:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-extrabold text-[#1A3C5E] text-3xl md:text-5xl mb-6">
            Want EdMedia working for your school?
          </h2>
          <p className="text-gray-600 text-base max-w-xl mx-auto mb-8">
            Contact our brand team to discuss custom magazine features, event coverage, or social media management.
          </p>
          <Link
            href="/contact?subject=edmedia"
            className="clay-btn clay-btn-primary px-8 py-3.5 text-sm font-bold gap-2"
          >
            Get in Touch with EdMedia <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
