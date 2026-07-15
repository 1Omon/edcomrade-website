"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

/* ─────────────────────────────────────────────
   Shared Layout Primitives
───────────────────────────────────────────── */
function Label({ children, color = "text-[#2E8BC0]" }: { children: React.ReactNode, color?: string }) {
  return (
    <p
      className={`text-[11px] font-semibold uppercase mb-2 ${color}`}
      style={{ letterSpacing: "0.12em" }}
    >
      {children}
    </p>
  );
}

export default function EdMediaPageClient() {
  const services = [
    {
      title: "Digital Magazine",
      desc: "High-quality editorial features highlighting your school's unique strengths, published to a nationwide audience of parents and educators.",
    },
    {
      title: "Social Media Management",
      desc: "Professional curation of your school's digital presence. We build engagement and trust on the platforms parents use most.",
    },
    {
      title: "School Event Coverage",
      desc: "Cinematic photography and videography for speech days, sports festivals, and graduations.",
    },
    {
      title: "Brand Consultation",
      desc: "Strategic guidance on how to position your institution in a competitive market. We help you find your unique voice.",
    },
    {
      title: "Education Advertising",
      desc: "Targeted campaigns across Schoolpedia and our partner networks to drive admissions during peak enrolment seasons.",
    },
    {
      title: "PR and Media Outreach",
      desc: "Get your school's achievements featured in major national publications and news outlets.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className="bg-white pt-32 pb-16 md:pt-40 md:pb-24 px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h1
            className="font-extrabold text-[#1A3C5E]"
            style={{
              fontSize: "clamp(56px, 8vw, 96px)",
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
            }}
          >
            Visibility for schools that deserve to be seen.
          </h1>
          <p className="text-gray-600 mt-6 max-w-[600px]" style={{ fontSize: 18, lineHeight: 1.7 }}>
            EdMedia is Edcomrade's media and publishing arm — helping educational institutions build their public identity.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-white py-20 md:py-24 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <Label>OUR SERVICES</Label>
          <h2
            className="font-bold text-[#1A3C5E] mb-12"
            style={{ fontSize: "clamp(32px, 4vw, 48px)", lineHeight: 1.1, letterSpacing: "-0.02em" }}
          >
            How we build your brand.
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div key={i} className="bg-[#F0F4F8] p-8 rounded-xl">
                <h3 className="font-semibold text-[#1A3C5E] mb-3" style={{ fontSize: 20 }}>{s.title}</h3>
                <p className="text-gray-600" style={{ fontSize: 17, lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Magazine Section */}
      <section className="bg-[#1A3C5E] py-20 md:py-24 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <Label color="text-[#2E8BC0]">THE MAGAZINE</Label>
          <h2
            className="font-bold text-white mb-6 max-w-3xl"
            style={{ fontSize: "clamp(32px, 4vw, 48px)", lineHeight: 1.1, letterSpacing: "-0.02em" }}
          >
            The Edcomrade Education Magazine spotlights schools leading in innovation and social responsibility.
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-16">
            {/* TODO: add magazine cover images */}
            <div className="w-full bg-[#1E3A52] rounded-xl flex items-center justify-center border border-white/10" style={{ aspectRatio: "3/4" }}>
              <span className="text-white/20 text-xs font-semibold uppercase tracking-widest">Issue 01</span>
            </div>
            <div className="w-full bg-[#1E3A52] rounded-xl flex items-center justify-center border border-white/10" style={{ aspectRatio: "3/4" }}>
              <span className="text-white/20 text-xs font-semibold uppercase tracking-widest">Issue 02</span>
            </div>
            <div className="hidden md:flex w-full bg-[#1E3A52] rounded-xl items-center justify-center border border-white/10" style={{ aspectRatio: "3/4" }}>
              <span className="text-white/20 text-xs font-semibold uppercase tracking-widest">Issue 03</span>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry CTA */}
      <section className="bg-white py-24 md:py-32 px-6 md:px-8 text-center border-b border-[#E5E7EB]">
        <div className="max-w-3xl mx-auto">
          <h2
            className="font-extrabold text-[#1A3C5E] mb-8"
            style={{ fontSize: "clamp(32px, 5vw, 56px)", lineHeight: 1, letterSpacing: "-0.02em" }}
          >
            Want EdMedia working for your school?
          </h2>
          <Link
            href="/contact?subject=edmedia"
            className="inline-flex items-center gap-2 bg-[#1A3C5E] text-white px-8 py-4 rounded-lg font-bold transition-colors hover:bg-[#1E3A52]"
            style={{ fontSize: 16 }}
          >
            Get in touch <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
