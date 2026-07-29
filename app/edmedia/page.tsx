import type { Metadata } from "next";
import Image from "next/image";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import Link from "next/link";
import EdmediaClientForm from "./edmedia-client";
import { Newspaper, Sparkles, Camera, BookOpen, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "EdMedia & Publishing — Stories Schools Deserve",
  description:
    "Edcomrade's media arm covers schools with digital magazines, event photography, brand consultation, and school spotlight features across Ghana.",
};

const articles = [
  {
    category: "School Spotlight",
    headline: "The Accra school that digitised in two weeks — and never looked back.",
    date: "June 2026 · EdComrade Media",
    excerpt: "When St. Francis Ridge switched to Pioneers' ERP, the bursar was sceptical. Eight days later, she was training staff across 3 campuses.",
    readTime: "4 min read",
  },
  {
    category: "Parent Intelligence",
    headline: "Why Ghanaian parents are choosing verified schools in 2026.",
    date: "May 2026 · EdComrade Media",
    excerpt: "Schoolpedia data shows that verified schools attract three times more direct enquiries than unverified listings.",
    readTime: "5 min read",
  },
  {
    category: "Spotlight Feature",
    headline: "EdMedia's inaugural school spotlight: Hecta International.",
    date: "April 2026 · EdComrade Media",
    excerpt: "Hecta International became the first school in the Digital 100. We documented every step of their onboarding.",
    readTime: "3 min read",
  },
];

export default function EdmediaPage() {
  return (
    <main style={{ backgroundColor: "var(--color-paper)" }}>
      <Navigation />

      {/* Hero */}
      <section className="bg-[#0F2537] text-white pt-36 pb-20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="mag-badge-gold">
                <Newspaper className="w-3.5 h-3.5" />
                <span>EDMEDIA & PUBLISHING</span>
              </span>
              <h1 className="font-serif text-5xl sm:text-6xl font-bold text-white leading-tight">
                We tell the stories schools deserve to be known for.
              </h1>
              <p className="text-white/70 text-lg leading-relaxed max-w-2xl">
                EdMedia covers excellence in Ghanaian education — through digital publishing, campus photography, and institutional brand positioning.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="mag-card p-3 bg-[#1A3C5E] border-white/20">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src="/images/school-campus.png"
                    alt="School campus spotlight photograph"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ padding: "90px 0", backgroundColor: "#EEF4F8" }}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 space-y-10">
          <div className="border-b-2 border-[#2E8BC0] pb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#2E8BC0] font-bold block mb-2">
              WHAT EDMEDIA DOES
            </span>
            <h2 className="font-serif text-4xl font-bold text-[#1A3C5E]">
              Three ways we make schools visible.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="mag-card p-8 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#2E8BC0]/10 text-[#2E8BC0] flex items-center justify-center font-bold">
                <BookOpen className="w-6 h-6" />
              </div>
              <span className="mag-badge-cyan">DIGITAL MAGAZINE</span>
              <h3 className="font-serif text-2xl font-bold text-[#1A3C5E]">The EdComrade Magazine</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Ghana&apos;s digital publication dedicated to education. Interviews with school leaders, policy analysis, and student success stories.
              </p>
            </div>

            <div className="mag-card p-8 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#B8973A]/10 text-[#B8973A] flex items-center justify-center font-bold">
                <Camera className="w-6 h-6" />
              </div>
              <span className="mag-badge-gold">CAMPUS COVERAGE</span>
              <h3 className="font-serif text-2xl font-bold text-[#1A3C5E]">Photography & Media</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Professional photography for open days, graduation ceremonies, and flagship school events. Content for your website and Schoolpedia profile.
              </p>
            </div>

            <div className="mag-card p-8 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#1B5E20]/10 text-[#1B5E20] flex items-center justify-center font-bold">
                <Award className="w-6 h-6" />
              </div>
              <span className="mag-badge-green">BRAND POSITIONING</span>
              <h3 className="font-serif text-2xl font-bold text-[#1A3C5E]">Institutional PR</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Articulate your school&apos;s story — messaging strategy, visual identity review, and admissions trust building.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section style={{ padding: "90px 0", backgroundColor: "var(--color-paper)" }}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 space-y-8">
          <div className="border-b-2 border-[#1A3C5E] pb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#2E8BC0] font-bold block mb-2">
              LATEST STORIES
            </span>
            <h2 className="font-serif text-4xl font-bold text-[#1A3C5E]">From the magazine.</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {articles.map((a, i) => (
              <div key={i} className="mag-card p-6 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <span className="mag-badge-cyan">{a.category}</span>
                  <h3 className="font-serif text-xl font-bold text-[#1A3C5E] leading-snug">{a.headline}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{a.excerpt}</p>
                </div>
                <div className="text-xs font-mono text-slate-400 pt-4 border-t border-gray-100">{a.date}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section style={{ padding: "90px 0", backgroundColor: "#EEF4F8" }}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="mag-card p-8">
              <h2 className="font-serif text-3xl font-bold text-[#1A3C5E] mb-6">Work with EdMedia</h2>
              <EdmediaClientForm />
            </div>
            <div className="space-y-6 pt-4">
              <span className="mag-badge-gold">DISCOVERY CALL</span>
              <h3 className="font-serif text-3xl font-bold text-[#1A3C5E]">Feature your school.</h3>
              <p className="text-slate-600 text-base leading-relaxed">
                EdMedia works with a small number of schools each term to deliver high quality features and photography. Reach out today to discuss coverage options.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
