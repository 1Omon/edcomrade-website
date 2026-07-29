import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { ArrowRight, Sparkles, TrendingUp, Users, ShieldCheck, DollarSign } from "lucide-react";

export const metadata: Metadata = {
  title: "Amplifiers Programme — Work With Edcomrade",
  description:
    "Join the Edcomrade Amplifiers on Grind and earn recurring commission bringing Pioneers' ERP to schools in your community for up to three years.",
};

const tiers = [
  { name: "Scout", trigger: "First 5 schools activated", commission: "8%", desc: "Recurring on every term billing for 12 months", badgeClass: "mag-badge-cyan" },
  { name: "Connector", trigger: "10+ schools activated", commission: "12%", desc: "Recurring on every term billing for 24 months", badgeClass: "mag-badge-cyan" },
  { name: "Builder", trigger: "25+ schools activated", commission: "16%", desc: "Recurring on every term billing for 36 months", badgeClass: "mag-badge-gold" },
  { name: "Amplifier", trigger: "50+ schools activated", commission: "20%", desc: "Recurring on every term billing for 36 months + bonus", badgeClass: "mag-badge-green" },
];

const incomeProjections = [
  { schools: "10 schools", avgTerm: "GHS 1,200/term avg", commRate: "12%", termEarning: "GHS 1,440", yearEarning: "GHS 4,320" },
  { schools: "20 schools", avgTerm: "GHS 1,200/term avg", commRate: "12%", termEarning: "GHS 2,880", yearEarning: "GHS 8,640" },
  { schools: "50 schools", avgTerm: "GHS 1,500/term avg", commRate: "20%", termEarning: "GHS 15,000", yearEarning: "GHS 45,000" },
];

export default function AmplifiersPage() {
  return (
    <main style={{ backgroundColor: "var(--color-paper)" }}>
      <Navigation />

      {/* Hero Section */}
      <section style={{ paddingTop: "150px", paddingBottom: "80px", backgroundColor: "var(--color-paper)" }}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 space-y-6">
          <span className="mag-badge-cyan">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>WORK WITH EDCOMRADE</span>
          </span>
          <h1 className="font-serif text-5xl sm:text-6xl font-bold text-[#1A3C5E] leading-tight max-w-4xl">
            Amplify what schools can do in your community.
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl leading-relaxed">
            Bring Pioneers&apos; ERP to schools near you. Earn recurring income for up to three years. Join the Amplifiers Programme on Grind.
          </p>
        </div>
      </section>

      {/* Grind Platform — Dark Navy Container */}
      <section className="bg-[#0F2537] text-white py-20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 space-y-6">
          <span className="mag-badge-gold">THE GRIND PLATFORM</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white max-w-3xl leading-snug">
            Grind is the sales platform for independent reps who promote products they believe in — for real commissions.
          </h2>
          <p className="text-white/70 text-base max-w-2xl leading-relaxed">
            Every term a school you signed up pays their subscription, you earn your commission automatically. No caps. Transparent payouts.
          </p>
        </div>
      </section>

      {/* Tier Cards Grid */}
      <section style={{ padding: "90px 0", backgroundColor: "#EEF4F8" }}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 space-y-10">
          <div className="border-b-2 border-[#2E8BC0] pb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#2E8BC0] font-bold block mb-2">
              COMMISSION TIERS
            </span>
            <h2 className="font-serif text-4xl font-bold text-[#1A3C5E]">
              The more schools you bring, the higher your recurring percentage.
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {tiers.map((t, i) => (
              <div key={i} className="mag-card p-6 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className={t.badgeClass}>{t.name}</span>
                  <div className="font-mono text-xs text-slate-400 font-bold">{t.trigger}</div>
                  <div className="font-serif text-4xl font-bold text-[#1A3C5E] pt-2">{t.commission}</div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pt-4 border-t border-gray-100">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Income Table */}
      <section style={{ padding: "90px 0", backgroundColor: "var(--color-paper)" }}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 space-y-8">
          <div className="border-b-2 border-[#1B5E20] pb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#1B5E20] font-bold block mb-2">
              INCOME PROJECTIONS
            </span>
            <h2 className="font-serif text-4xl font-bold text-[#1A3C5E]">
              What your portfolio earns you.
            </h2>
          </div>

          <div className="mag-card p-6 overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b-2 border-[#1A3C5E] text-xs font-mono text-slate-500 uppercase">
                  <th className="py-3">Portfolio Size</th>
                  <th className="py-3">Avg Billing</th>
                  <th className="py-3">Rate</th>
                  <th className="py-3">Per Term</th>
                  <th className="py-3 text-right">Per Academic Year</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 font-semibold text-[#1A3C5E]">
                {incomeProjections.map((r, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-slate-50/50" : "bg-white"}>
                    <td className="py-3.5 font-bold text-[#1A3C5E]">{r.schools}</td>
                    <td className="py-3.5 text-slate-500 font-mono">{r.avgTerm}</td>
                    <td className="py-3.5 text-[#2E8BC0] font-bold">{r.commRate}</td>
                    <td className="py-3.5 font-bold">{r.termEarning}</td>
                    <td className="py-3.5 text-right text-[#1B5E20] font-bold text-base">{r.yearEarning}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="pt-4">
            <Link
              href="https://grind.xcuxion.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-[#2E8BC0] hover:bg-[#2576A5] text-white font-bold text-base shadow-md transition-all"
            >
              <span>Join Amplifiers on Grind</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
