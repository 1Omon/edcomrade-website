import type { Metadata } from "next";
import Image from "next/image";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { Users, Smartphone, CreditCard, ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "ParentAide — The Essential App for School Parents",
  description:
    "Close the gap between school and home. Receive real-time attendance alerts, digital term reports, fee payment receipts, and direct school notices on your phone.",
};

export default function ParentaidePage() {
  return (
    <main style={{ backgroundColor: "var(--color-paper)" }}>
      <Navigation />

      {/* Hero Header */}
      <section style={{ paddingTop: "150px", paddingBottom: "80px", backgroundColor: "var(--color-paper)" }}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="mag-badge-gold">
                <Smartphone className="w-3.5 h-3.5" />
                <span>PARENTAIDE MOBILE APP</span>
              </span>
              <h1 className="font-serif text-5xl sm:text-6xl font-bold text-[#1A3C5E] leading-tight">
                The school day, delivered to your phone.
              </h1>
              <p className="text-slate-600 text-lg leading-relaxed">
                ParentAide connects Ghanaian families to their children&apos;s schools. Real-time attendance roll call, digital report cards, instant Paystack fee billing, and direct notices — all in one clean mobile experience.
              </p>
              <div className="pt-2">
                <Link
                  href="/contact?subject=parentaide"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-[#B8973A] hover:bg-[#a08230] text-white font-bold text-base shadow-md transition-all"
                >
                  <span>Get ParentAide For Your School</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="mag-card p-3">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src="/images/parent-app.png"
                    alt="Ghanaian mother checking ParentAide mobile app"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section style={{ padding: "90px 0", backgroundColor: "#EEF4F8" }}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 space-y-10">
          <div className="border-b-2 border-[#B8973A] pb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#B8973A] font-bold block mb-2">
              KEY CAPABILITIES
            </span>
            <h2 className="font-serif text-4xl font-bold text-[#1A3C5E]">
              What ParentAide gives families.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Instant Fee Billing & Paystack", desc: "Receive term invoices instantly and pay school fees via Mobile Money or bank card directly. Get instant digital receipts.", badgeClass: "mag-badge-green" },
              { title: "Digital Term Reports", desc: "No more lost paper report sheets. Access term grades, teacher remarks, and subject performance histories anytime.", badgeClass: "mag-badge-cyan" },
              { title: "Attendance & Safety Alerts", desc: "Know when your child arrives at school. Instant push notifications when morning roll call is taken.", badgeClass: "mag-badge-gold" },
              { title: "Direct School Channel", desc: "Receive official announcements, PTA meeting invites, and excursion notices directly from school leadership.", badgeClass: "mag-badge-cyan" },
            ].map((col, i) => (
              <div key={i} className="mag-card p-6 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <span className={col.badgeClass}>FEATURE</span>
                  <h3 className="font-serif text-xl font-bold text-[#1A3C5E] leading-snug">{col.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{col.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Synchronisation Section (Dark Navy) */}
      <section className="bg-[#0F2537] text-white py-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 space-y-10">
          <div className="border-b border-white/10 pb-4">
            <span className="mag-badge-cyan mb-2">AUTOMATIC SYNCHRONISATION</span>
            <h2 className="font-serif text-4xl font-bold text-white">Zero extra work for school staff.</h2>
            <p className="text-white/70 text-base max-w-2xl mt-4">
              ParentAide is not a separate system teachers have to manage. It connects directly to Pioneers&apos; ERP or your Custom App instance. When a teacher marks attendance or a bursar logs a fee, ParentAide updates the parent automatically.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: "01", step: "School enters data into ERP", desc: "Teachers enter marks and attendance into Pioneers' or Custom App as part of standard routine." },
              { num: "02", step: "Instant secure sync", desc: "Edcomrade's data engine encrypts and syncs records to ParentAide in real time." },
              { num: "03", step: "Parents receive update", desc: "Parents get clear, readable notifications and receipts on their smartphones." },
            ].map((s, i) => (
              <div key={i} className="bg-[#1A3C5E]/60 border border-white/10 p-8 rounded-xl space-y-3">
                <span className="font-mono text-3xl font-bold text-[#2E8BC0]">{s.num}</span>
                <h3 className="font-serif text-xl font-bold text-white">{s.step}</h3>
                <p className="text-white/70 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
