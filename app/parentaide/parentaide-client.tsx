"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

/* ─────────────────────────────────────────────
   Shared Layout Primitives
───────────────────────────────────────────── */
function Label({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="text-[11px] font-semibold uppercase text-[#2E8BC0] mb-2"
      style={{ letterSpacing: "0.12em" }}
    >
      {children}
    </p>
  );
}

export default function ParentAidePageClient() {
  const features = [
    {
      name: "Fee & Bill Payments",
      desc: "Pay school fees directly from your phone via the ParentAide Wallet.",
    },
    {
      name: "School Communication",
      desc: "Receive announcements, notices, and emergency alerts instantly.",
    },
    {
      name: "Attendance Tracking",
      desc: "See when your child is present, late, or absent — in real time.",
    },
    {
      name: "Academic Performance",
      desc: "View report cards, assignments, and grades each term.",
    },
    {
      name: "Education Marketplace",
      desc: "Order books, uniforms, and school supplies before term starts.",
    },
    {
      name: "School Enrolment",
      desc: "Find schools on Schoolpedia and apply directly through the app.",
    },
    {
      name: "Scholarship Discovery",
      desc: "Browse bursaries and scholarships available for your child.",
    },
    {
      name: "Bus & Pickup Safety",
      desc: "Get notified when your child boards or leaves the school bus.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className="bg-white pt-32 pb-16 md:pt-40 md:pb-24 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h1
            className="font-extrabold text-[#2E8BC0] max-w-4xl"
            style={{
              fontSize: "clamp(56px, 8vw, 96px)",
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
            }}
          >
            Everything about your child's school.<br className="hidden md:block" />
            <span className="text-[#1A3C5E]">In your pocket.</span>
          </h1>
          <p className="text-gray-600 mt-6 max-w-[480px]" style={{ fontSize: 18, lineHeight: 1.7 }}>
            ParentAide connects parents to their child's school — for free.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-white py-20 md:py-24 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-x-12 md:gap-y-16">
            {features.map((feat, i) => (
              <div key={i} className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <div className="w-12 h-12 bg-[#F0F4F8] rounded-xl flex-shrink-0 flex items-center justify-center text-[#2E8BC0]">
                  {/* Icon placeholder */}
                  <div className="w-5 h-5 border-[2px] border-current rounded-sm opacity-50" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#1A3C5E] mb-2" style={{ fontSize: 20, lineHeight: 1.3 }}>{feat.name}</h3>
                  <p className="text-gray-600" style={{ fontSize: 17, lineHeight: 1.7 }}>{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wallet Explainer */}
      <section className="bg-[#1A3C5E] py-20 md:py-24 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <Label>PARENTAIDE WALLET</Label>
          <h2
            className="font-bold text-white mb-12"
            style={{ fontSize: "clamp(32px, 4vw, 48px)", lineHeight: 1.1, letterSpacing: "-0.02em" }}
          >
            One wallet. Every school payment.
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#1E3A52] p-8 rounded-xl">
              <span className="text-[#2E8BC0] font-semibold text-[13px] tracking-widest block mb-4">01</span>
              <p className="font-semibold text-white mb-2" style={{ fontSize: 18 }}>Top up via Paystack</p>
              <p className="text-white/60" style={{ fontSize: 15, lineHeight: 1.7 }}>Fund your wallet securely using Mobile Money or Card.</p>
            </div>
            <div className="bg-[#1E3A52] p-8 rounded-xl">
              <span className="text-[#2E8BC0] font-semibold text-[13px] tracking-widest block mb-4">02</span>
              <p className="font-semibold text-white mb-2" style={{ fontSize: 18 }}>Pay fees and bills instantly</p>
              <p className="text-white/60" style={{ fontSize: 15, lineHeight: 1.7 }}>No more bank queues. Settle school bills directly.</p>
            </div>
            <div className="bg-[#1E3A52] p-8 rounded-xl">
              <span className="text-[#2E8BC0] font-semibold text-[13px] tracking-widest block mb-4">03</span>
              <p className="font-semibold text-white mb-2" style={{ fontSize: 18 }}>Buy from the marketplace</p>
              <p className="text-white/60" style={{ fontSize: 15, lineHeight: 1.7 }}>Purchase books and uniforms directly through the app.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Marketplace */}
      <section className="bg-white py-20 md:py-24 px-6 md:px-8 border-b border-[#E5E7EB]">
        <div className="max-w-6xl mx-auto">
          <Label>THE MARKETPLACE</Label>
          <h2
            className="font-bold text-[#1A3C5E] mb-12"
            style={{ fontSize: "clamp(32px, 4vw, 48px)", lineHeight: 1.1, letterSpacing: "-0.02em" }}
          >
            The school marketplace, in your hands.
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#F0F4F8] p-8 rounded-xl">
              <h3 className="font-semibold text-[#1A3C5E] mb-3" style={{ fontSize: 20 }}>School Stores</h3>
              <p className="text-gray-600" style={{ fontSize: 17, lineHeight: 1.7 }}>
                Buy directly from your child's school — books, uniforms, and provisions, ready before term starts.
              </p>
            </div>
            <div className="bg-[#F0F4F8] p-8 rounded-xl">
              <h3 className="font-semibold text-[#1A3C5E] mb-3" style={{ fontSize: 20 }}>Third-Party Vendors</h3>
              <p className="text-gray-600" style={{ fontSize: 17, lineHeight: 1.7 }}>
                Bookshops, suppliers, and education brands all in one place.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="bg-[#1A3C5E] py-24 md:py-32 px-6 md:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2
            className="font-extrabold text-white mb-10"
            style={{ fontSize: "clamp(32px, 5vw, 56px)", lineHeight: 1, letterSpacing: "-0.02em" }}
          >
            ParentAide is coming soon.
          </h2>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* TODO: replace with real store links when app is live */}
            <button
              disabled
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white/5 border border-white/10 text-white/40 px-8 py-4 rounded-xl cursor-not-allowed"
            >
              <span className="font-semibold" style={{ fontSize: 16 }}>App Store</span>
              <span className="text-[10px] uppercase tracking-widest bg-white/10 px-2 py-0.5 rounded font-bold">Coming Soon</span>
            </button>
            <button
              disabled
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white/5 border border-white/10 text-white/40 px-8 py-4 rounded-xl cursor-not-allowed"
            >
              <span className="font-semibold" style={{ fontSize: 16 }}>Google Play</span>
              <span className="text-[10px] uppercase tracking-widest bg-white/10 px-2 py-0.5 rounded font-bold">Coming Soon</span>
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
