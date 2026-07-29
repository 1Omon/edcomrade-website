import type { Metadata } from "next";
import Image from "next/image";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { Sparkles, Users, Layers, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "About Edcomrade — Built in Ghana, Built for Africa",
  description:
    "Edcomrade was founded in Accra in 2023 to give every Ghanaian school the software, visibility, and media presence it deserves.",
};

export default function AboutPage() {
  return (
    <main style={{ backgroundColor: "var(--color-paper)" }}>
      <Navigation />

      {/* Hero Header */}
      <section style={{ paddingTop: "150px", paddingBottom: "80px", backgroundColor: "var(--color-paper)" }}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="mag-badge-cyan">
                <Sparkles className="w-3.5 h-3.5" />
                <span>OUR FOUNDING STORY</span>
              </span>
              <h1 className="font-serif text-5xl sm:text-6xl font-bold text-[#1A3C5E] leading-tight">
                Built in Ghana. Built for Africa.
              </h1>
              <p className="text-slate-600 text-lg leading-relaxed">
                In 2023, Solomon Ayisi visited a well-regarded private school in Accra and found the bursar managing fee records in a paper notebook. That visit sparked Edcomrade: why do Ghana&apos;s best schools remain invisible?
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="mag-card p-3">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src="/images/hero-classroom.png"
                    alt="Founding story classroom vision"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Dark Mission Bar */}
      <section className="bg-[#0F2537] text-white py-16 text-center">
        <div className="max-w-[900px] mx-auto px-6 space-y-4">
          <span className="mag-badge-gold">OUR CORE MISSION</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-snug">
            We modernise African schools. We centre education around parents. We make excellence visible.
          </h2>
        </div>
      </section>

      {/* Founders Section */}
      <section style={{ padding: "90px 0", backgroundColor: "#EEF4F8" }}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 space-y-10">
          <div className="border-b-2 border-[#2E8BC0] pb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#2E8BC0] font-bold block mb-2">
              THE BUILDERS
            </span>
            <h2 className="font-serif text-4xl font-bold text-[#1A3C5E]">Leadership & Founders.</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="mag-card p-8 space-y-4">
              <span className="mag-badge-cyan">CEO & FOUNDER</span>
              <h3 className="font-serif text-2xl font-bold text-[#1A3C5E]">Solomon A. Ayisi</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Former educator turned software entrepreneur. Built Edcomrade after realizing the core digital infrastructure was missing for private schools in West Africa.
              </p>
            </div>

            <div className="mag-card p-8 space-y-4">
              <span className="mag-badge-gold">CTO & CO-FOUNDER</span>
              <h3 className="font-serif text-2xl font-bold text-[#1A3C5E]">Prince Sarfo</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Enterprise systems architect with over a decade of software engineering experience. Leads the core database engine powering Pioneers&apos; ERP and ParentAide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Horizons */}
      <section style={{ padding: "90px 0", backgroundColor: "var(--color-paper)" }}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 space-y-10">
          <div className="border-b-2 border-[#1A3C5E] pb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#2E8BC0] font-bold block mb-2">
              VISION HORIZONS
            </span>
            <h2 className="font-serif text-4xl font-bold text-[#1A3C5E]">Where we are going.</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { h: "Horizon 1", title: "Digital Foundations", desc: "Every school in Ghana has access to free ERP infrastructure, a verified online profile, and a connected parent community." },
              { h: "Horizon 2", title: "African Expansion", desc: "Pioneers' ERP and Schoolpedia expand to Nigeria, Kenya, and Senegal with local payment integrations." },
              { h: "Horizon 3", title: "Education Intelligence", desc: "Aggregated anonymised data from thousands of schools becomes the most accurate picture of African education ever assembled." },
            ].map((v, i) => (
              <div key={i} className="mag-card p-8 space-y-4">
                <span className="font-mono text-2xl font-bold text-[#2E8BC0]">{v.h}</span>
                <h3 className="font-serif text-2xl font-bold text-[#1A3C5E]">{v.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
