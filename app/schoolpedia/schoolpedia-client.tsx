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

export default function SchoolpediaPageClient() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className="bg-[#2E8BC0] pt-32 pb-20 md:pt-40 md:pb-28 px-6 md:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1
            className="font-extrabold text-white max-w-4xl mx-auto"
            style={{
              fontSize: "clamp(48px, 7vw, 88px)",
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
            }}
          >
            Find the right school.<br />
            Know what you're choosing.
          </h1>
          <p className="text-white/90 mt-6 max-w-[600px] mx-auto" style={{ fontSize: 18, lineHeight: 1.7 }}>
            Schoolpedia maps every school in Ghana — so parents can search, compare, and decide with confidence.
          </p>
          <div className="mt-10">
            <Link
              href="https://schoolpedia.edcomrade.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-[#1A3C5E] px-8 py-4 rounded-lg font-bold transition-colors hover:bg-gray-50"
              style={{ fontSize: 16 }}
            >
              Search Schools <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* For Parents */}
      <section className="bg-white py-20 md:py-24 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <Label>FOR PARENTS</Label>
          <h2
            className="font-bold text-[#1A3C5E] mb-12"
            style={{ fontSize: "clamp(32px, 4vw, 48px)", lineHeight: 1.1, letterSpacing: "-0.02em" }}
          >
            A smarter way to choose.
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#F0F4F8] p-8 rounded-xl">
              <h3 className="font-semibold text-[#1A3C5E] mb-3" style={{ fontSize: 20 }}>Search</h3>
              <p className="text-gray-600" style={{ fontSize: 17, lineHeight: 1.7 }}>
                Find schools by location, type, fees, and curriculum. Filter down to exactly what you need.
              </p>
            </div>
            <div className="bg-[#F0F4F8] p-8 rounded-xl">
              <h3 className="font-semibold text-[#1A3C5E] mb-3" style={{ fontSize: 20 }}>Compare</h3>
              <p className="text-gray-600" style={{ fontSize: 17, lineHeight: 1.7 }}>
                Side-by-side comparison of any two schools to see facilities, results, and fees clearly.
              </p>
            </div>
            <div className="bg-[#F0F4F8] p-8 rounded-xl">
              <h3 className="font-semibold text-[#1A3C5E] mb-3" style={{ fontSize: 20 }}>Enrol</h3>
              <p className="text-gray-600" style={{ fontSize: 17, lineHeight: 1.7 }}>
                Apply directly through the platform via ParentAide with just a few taps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* For Schools */}
      <section className="bg-[#1A3C5E] py-20 md:py-24 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <Label color="text-white/50">FOR SCHOOLS</Label>
          <h2
            className="font-bold text-white mb-12"
            style={{ fontSize: "clamp(32px, 4vw, 48px)", lineHeight: 1.1, letterSpacing: "-0.02em" }}
          >
            Your school's public profile.<br className="hidden md:block" />
            Built and verified by Edcomrade.
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#1E3A52] p-8 rounded-xl border border-white/5">
              <h3 className="font-semibold text-white mb-3" style={{ fontSize: 20 }}>Verified profile parents trust</h3>
              <p className="text-white/60" style={{ fontSize: 17, lineHeight: 1.7 }}>
                Stand out with a verified badge. Display your true fees, authentic photos, and accurate contact details.
              </p>
            </div>
            <div className="bg-[#1E3A52] p-8 rounded-xl border border-white/5">
              <h3 className="font-semibold text-white mb-3" style={{ fontSize: 20 }}>PR platform for achievements</h3>
              <p className="text-white/60" style={{ fontSize: 17, lineHeight: 1.7 }}>
                Post news, awards, and event highlights directly to your profile for prospective parents to see.
              </p>
            </div>
            <div className="bg-[#1E3A52] p-8 rounded-xl border border-white/5">
              <h3 className="font-semibold text-white mb-3" style={{ fontSize: 20 }}>Visibility when parents search</h3>
              <p className="text-white/60" style={{ fontSize: 17, lineHeight: 1.7 }}>
                Be the first school they see when searching in your local area.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="bg-[#F0F4F8] py-12 px-6 md:px-8 border-b border-[#E5E7EB]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="font-bold text-[#1A3C5E] mb-1" style={{ fontSize: 28 }}>
                120+ {/* TODO: connect to DB School count */}
              </p>
              <p className="text-gray-600 font-medium" style={{ fontSize: 14 }}>Schools Listed</p>
            </div>
            <div>
              <p className="font-bold text-[#1A3C5E] mb-1" style={{ fontSize: 28 }}>
                30+ {/* TODO: connect to DB verified count */}
              </p>
              <p className="text-gray-600 font-medium" style={{ fontSize: 14 }}>Verified Schools</p>
            </div>
            <div>
              <p className="font-bold text-[#1A3C5E] mb-1" style={{ fontSize: 28 }}>
                Free
              </p>
              <p className="text-gray-600 font-medium" style={{ fontSize: 14 }}>For every school to list</p>
            </div>
            <div>
              <p className="font-bold text-[#1A3C5E] mb-1" style={{ fontSize: 28 }}>
                Pioneers'
              </p>
              <p className="text-gray-600 font-medium" style={{ fontSize: 14 }}>Software powered</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-white py-20 md:py-24 px-6 md:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h2
            className="font-bold text-[#1A3C5E] mb-8"
            style={{ fontSize: "clamp(28px, 4vw, 40px)", lineHeight: 1.2, letterSpacing: "-0.01em" }}
          >
            Every school on Pioneers' Software gets a free verified Schoolpedia profile.
          </h2>
          <Link
            href="/software"
            className="inline-flex items-center justify-center gap-2 bg-[#1A3C5E] text-white px-8 py-4 rounded-lg font-bold transition-colors hover:bg-[#1E3A52]"
            style={{ fontSize: 16 }}
          >
            See Pioneers' Software <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
