import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { BookOpen, Layers, Users, Sparkles, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "The Edcomrade Manifesto — Helping Schools Build Their Future",
  description:
    "An open essay on why Ghana's best schools are invisible, why paper administration holds African education back, and how Edcomrade is changing both.",
};

export default function ManifestoPage() {
  return (
    <main style={{ backgroundColor: "var(--color-paper)" }}>
      <Navigation />

      {/* Hero Header */}
      <section style={{ paddingTop: "150px", paddingBottom: "60px", backgroundColor: "var(--color-paper)" }}>
        <div className="max-w-[850px] mx-auto px-6 space-y-6">
          <span className="mag-badge-cyan">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AN ESSAY BY EDCOMRADE</span>
          </span>
          <h1 className="font-serif text-5xl sm:text-6xl font-bold text-[#1A3C5E] leading-tight">
            Helping Schools Build Their Future.
          </h1>
          <p className="font-serif text-2xl italic text-slate-600 leading-snug">
            Why paper administration holds African education back, why the best schools remain invisible, and how we are building the digital home for education.
          </p>
          <div className="pt-4 border-y border-gray-200 text-xs font-mono text-slate-400 uppercase tracking-wider flex justify-between">
            <span>PUBLISHED BY EDCOMRADE MEDIA · ACCRA, GHANA</span>
          </div>
        </div>
      </section>

      {/* Essay Body */}
      <section style={{ paddingBottom: "100px", backgroundColor: "var(--color-paper)" }}>
        <div className="max-w-[850px] mx-auto px-6">
          <article className="space-y-8 text-slate-700 text-lg leading-relaxed font-sans">
            
            <p className="drop-cap">
              Ghana is home to world-class educational institutions—built on legacy, sacrifice, and brilliance—that are effectively invisible to the digital world. Paper registers, WhatsApp announcements, hand-written receipt books, and end-of-term handouts are still the norm across 90% of private schools in West Africa.
            </p>

            <p>
              Fragmentation is the silent tax on African progress. Drowning in paper, isolated from parents, and lost on the map, schools are leaking the trust they have spent decades building. When a parent cannot find a school&apos;s verified record online, when a bursary receipt cannot be validated, when attendance records vanish into physical files — the barrier to institutional trust becomes insurmountable.
            </p>

            <blockquote className="font-serif text-3xl italic text-[#1A3C5E] border-l-4 border-[#2E8BC0] pl-6 my-10 py-2">
              &ldquo;Visibility is legitimacy. If a parent cannot find your verified record, the barrier to trust is insurmountable.&rdquo;
            </blockquote>

            <h2 className="font-serif text-3xl font-bold text-[#1A3C5E] pt-6">
              The Three Pillars of Educational Modernisation
            </h2>

            <div className="grid gap-6 pt-4">
              <div className="mag-card p-6 space-y-2">
                <span className="mag-badge-green">PILLAR I</span>
                <h3 className="font-serif text-2xl font-bold text-[#1A3C5E]">Operational Infrastructure (The ERP)</h3>
                <p className="text-slate-600 text-base">
                  Every school needs a reliable digital backbone. Admissions, student records, fee billing, timetables, and staff management must be consolidated into one secure cloud system.
                </p>
              </div>

              <div className="mag-card p-6 space-y-2">
                <span className="mag-badge-cyan">PILLAR II</span>
                <h3 className="font-serif text-2xl font-bold text-[#1A3C5E]">Public Intelligence & Discovery (Schoolpedia)</h3>
                <p className="text-slate-600 text-base">
                  Excellence deserves to be found. Parents deserve transparent information on curricula, fees, and facilities before making life-changing enrolment decisions.
                </p>
              </div>

              <div className="mag-card p-6 space-y-2">
                <span className="mag-badge-gold">PILLAR III</span>
                <h3 className="font-serif text-2xl font-bold text-[#1A3C5E]">Parent Connectivity (ParentAide)</h3>
                <p className="text-slate-600 text-base">
                  The gap between school and home must be closed. When parents receive real-time attendance alerts, digital report sheets, and instant fee receipts on their phones, trust becomes automatic.
                </p>
              </div>
            </div>

            <h2 className="font-serif text-3xl font-bold text-[#1A3C5E] pt-8">
              Our Commitment
            </h2>

            <p>
              We built Pioneers&apos; ERP with a core administration module that is permanently free. We did this because cost should never be the reason a Ghanaian school remains in the paper age. We charge only when a school is ready for advanced modular expansion.
            </p>

            <div className="pt-8 border-t-2 border-[#1A3C5E] mt-12 space-y-4">
              <div className="font-serif text-xl font-bold text-[#1A3C5E]">S.A Edcomrade Ventures</div>
              <div className="text-xs font-mono text-slate-400">Accra, Ghana · 2026</div>
              <div className="pt-4">
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#1A3C5E] text-white font-bold text-sm hover:bg-[#2E8BC0] transition-colors">
                  <span>Join Us as a Partner</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </article>
        </div>
      </section>

      <Footer />
    </main>
  );
}
