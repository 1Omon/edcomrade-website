"use client";

import { CreditCard, Bell, Calendar, GraduationCap, ShoppingBag, Search, Award, Bus, Sparkles } from "lucide-react";
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

export default function ParentAidePageClient() {
  const features = [
    {
      name: "Fee & Bill Payments",
      desc: "Pay school fees directly from your phone via the secure ParentAide Wallet.",
      icon: CreditCard,
    },
    {
      name: "School Communication",
      desc: "Receive announcements, notices, and emergency alerts instantly from administration.",
      icon: Bell,
    },
    {
      name: "Attendance Tracking",
      desc: "See when your child is present, late, or absent — in real time each morning.",
      icon: Calendar,
    },
    {
      name: "Academic Performance",
      desc: "View official report cards, continuous assessments, and grades each term.",
      icon: GraduationCap,
    },
    {
      name: "Education Marketplace",
      desc: "Order textbooks, uniforms, and essential school supplies before term starts.",
      icon: ShoppingBag,
    },
    {
      name: "School Enrolment",
      desc: "Discover verified schools on Schoolpedia and apply directly through the app.",
      icon: Search,
    },
    {
      name: "Scholarship Discovery",
      desc: "Browse educational bursaries and merit scholarships available for your child.",
      icon: Award,
    },
    {
      name: "Bus & Pickup Safety",
      desc: "Get automated notifications when your child boards or alights the school bus.",
      icon: Bus,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className="bg-white pt-32 pb-16 md:pt-40 md:pb-24 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <span className="clay-badge bg-[#E8F5EE] text-[#1B5E20] mb-4">
            Free for Parents & Guardians
          </span>
          <h1
            className="font-extrabold text-[#2E8BC0] max-w-4xl"
            style={{
              fontSize: "clamp(44px, 7vw, 84px)",
              lineHeight: 0.96,
              letterSpacing: "-0.03em",
            }}
          >
            Everything about your child&apos;s school.
            <br />
            <span className="text-[#1A3C5E]">In your pocket.</span>
          </h1>
          <p className="text-gray-600 mt-6 max-w-[520px] text-lg leading-relaxed">
            ParentAide connects parents and guardians directly to their child&apos;s school — simplifying payments, tracking academics, and ensuring child safety.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-[#F4F7FA] py-20 md:py-28 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Label>App Features</Label>
            <h2 className="font-bold text-[#1A3C5E] text-3xl md:text-4xl">
              8 powerful tools in one simple mobile app.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feat, i) => {
              const Icon = feat.icon;
              return (
                <div key={i} className="clay-card p-6 flex flex-col justify-between clay-card-hover">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[#2E8BC0]/10 text-[#2E8BC0] flex items-center justify-center mb-4 shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-[#1A3C5E] text-lg mb-2">{feat.name}</h3>
                    <p className="text-gray-600 text-xs leading-relaxed">{feat.desc}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] font-bold text-[#2E8BC0]">
                    <span>ParentAide Mobile</span>
                    <span>Free</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Wallet Explainer */}
      <section className="bg-[#1A3C5E] text-white py-20 md:py-28 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <Label>ParentAide Wallet</Label>
          <h2 className="font-bold text-white text-3xl md:text-4xl mb-12 max-w-2xl">
            One wallet. Every school payment settled instantly.
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="clay-card-dark p-7 clay-card-dark-hover">
              <span className="text-[#2E8BC0] font-bold text-xs tracking-wider uppercase block mb-3">01 · Top Up</span>
              <h3 className="font-bold text-white text-xl mb-2">Fund Securely</h3>
              <p className="text-white/70 text-sm leading-relaxed">Top up your ParentAide Wallet via Mobile Money (MTN, Telecel, AT) or Paystack card payments.</p>
            </div>

            <div className="clay-card-dark p-7 clay-card-dark-hover">
              <span className="text-[#2E8BC0] font-bold text-xs tracking-wider uppercase block mb-3">02 · Pay Fees</span>
              <h3 className="font-bold text-white text-xl mb-2">Settle Tuition</h3>
              <p className="text-white/70 text-sm leading-relaxed">No bank queues. Pay school fees, PTA dues, and excursion bills directly to your school&apos;s verified account.</p>
            </div>

            <div className="clay-card-dark p-7 clay-card-dark-hover">
              <span className="text-[#2E8BC0] font-bold text-xs tracking-wider uppercase block mb-3">03 · Shop Items</span>
              <h3 className="font-bold text-white text-xl mb-2">Buy Supplies</h3>
              <p className="text-white/70 text-sm leading-relaxed">Order approved textbooks, uniform sets, and stationery directly from the in-app school store.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Marketplace */}
      <section className="bg-white py-20 md:py-28 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <Label>The Marketplace</Label>
          <h2 className="font-bold text-[#1A3C5E] text-3xl md:text-4xl mb-12">
            The school marketplace, right in your hands.
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="clay-surface p-8 clay-card-hover border-t-4 border-t-[#2E8BC0]">
              <span className="clay-badge bg-white text-[#2E8BC0] mb-4">Official School Stores</span>
              <h3 className="font-bold text-[#1A3C5E] text-2xl mb-3">Direct School Purchases</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Buy directly from your child&apos;s school — official uniforms, customized books, badges, and PE gear, packed and ready before term re-opens.
              </p>
            </div>

            <div className="clay-surface p-8 clay-card-hover border-t-4 border-t-[#B8973A]">
              <span className="clay-badge bg-white text-[#B8973A] mb-4">Third-Party Vendors</span>
              <h3 className="font-bold text-[#1A3C5E] text-2xl mb-3">Verified Educational Suppliers</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Browse partner bookshops, stationery suppliers, uniform tailors, and educational technology vendors all integrated into one trusted marketplace.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="bg-[#1A3C5E] text-white py-24 md:py-32 px-6 md:px-8 text-center border-t border-white/10">
        <div className="max-w-3xl mx-auto">
          <span className="clay-badge bg-white/10 text-white border border-white/20 mb-6">
            Mobile App In Development
          </span>
          <h2 className="font-extrabold text-white text-3xl md:text-5xl mb-6">
            ParentAide is coming soon.
          </h2>
          <p className="text-white/70 text-base max-w-xl mx-auto mb-10">
            We are preparing ParentAide for iOS and Android launch. Sign up to get notified when the app becomes available for your school.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              disabled
              className="clay-btn clay-btn-outline-white px-8 py-3.5 text-sm cursor-not-allowed opacity-60 gap-3"
            >
              <span>App Store</span>
              <span className="clay-badge bg-white/20 text-white text-[10px]">Coming Soon</span>
            </button>

            <button
              disabled
              className="clay-btn clay-btn-outline-white px-8 py-3.5 text-sm cursor-not-allowed opacity-60 gap-3"
            >
              <span>Google Play</span>
              <span className="clay-badge bg-white/20 text-white text-[10px]">Coming Soon</span>
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
