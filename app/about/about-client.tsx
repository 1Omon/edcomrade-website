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

export default function AboutPageClient() {
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
            Built in Ghana.<br />
            Built for Africa.
          </h1>
        </div>
      </section>

      {/* Founding Story */}
      <section className="bg-white pb-20 md:pb-24 px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          <Label>OUR STORY</Label>
          <div className="text-gray-600 space-y-6 mt-8" style={{ fontSize: 18, lineHeight: 1.8 }}>
            <p>
              In 2023, Solomon took his nephew to a boarding school. What should have been a straightforward enrolment turned into a gruelling process spanning four days. It involved endless paper forms, manual entrance exams, and tedious in-person purchases.
            </p>
            <p>
              As an incoming third-year Computer Science student at KNUST, Solomon saw an obvious problem hiding in plain sight. He decided to build a solution, turning his supervised mini-project into a functional MVP. Instead of guessing what schools needed, he went straight to the source, interviewing the headmaster at KNUST Basic School and the leadership at Hecta International School—the very school he had just enrolled his nephew in.
            </p>
            <p>
              The conversations revealed a systemic gap. Schools wanted to digitise, but existing solutions were either prohibitively expensive, too complex to deploy, or completely disconnected from parents. Rather than deploying the software to just one school, Solomon chose to build a company. That was the beginning of Edcomrade.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Block */}
      <section className="bg-[#1A3C5E] py-24 md:py-32 px-6 md:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2
            className="font-bold text-white"
            style={{ fontSize: "clamp(32px, 5vw, 56px)", lineHeight: 1.1, letterSpacing: "-0.02em" }}
          >
            We modernise African schools. We centre education around parents. We make excellence visible.
          </h2>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-white py-20 md:py-24 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <Label>THE TEAM</Label>
          <h2
            className="font-bold text-[#1A3C5E] mb-12"
            style={{ fontSize: "clamp(32px, 4vw, 48px)", lineHeight: 1.1, letterSpacing: "-0.02em" }}
          >
            Leadership
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-4xl">
            {/* Founders */}
            <div className="flex gap-6 items-start">
              <div className="w-20 h-20 bg-[#F0F4F8] rounded-full flex-shrink-0" />
              {/* TODO: add real photos */}
              <div>
                <h3 className="font-semibold text-[#1A3C5E] mb-1" style={{ fontSize: 20 }}>Solomon A. Ayisi</h3>
                <p className="text-[#2E8BC0] font-semibold mb-3" style={{ fontSize: 14 }}>CEO & Founder</p>
                <p className="text-gray-600" style={{ fontSize: 16, lineHeight: 1.6 }}>Leading product vision and business strategy to modernise African education.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-20 h-20 bg-[#F0F4F8] rounded-full flex-shrink-0" />
              {/* TODO: add real photos */}
              <div>
                <h3 className="font-semibold text-[#1A3C5E] mb-1" style={{ fontSize: 20 }}>Prince Sarfo</h3>
                <p className="text-[#2E8BC0] font-semibold mb-3" style={{ fontSize: 14 }}>CTO & Co-Founder</p>
                <p className="text-gray-600" style={{ fontSize: 16, lineHeight: 1.6 }}>Architecting robust, scalable systems that schools can rely on.</p>
              </div>
            </div>
          </div>

          <h3 className="font-bold text-[#1A3C5E] mb-8" style={{ fontSize: 24 }}>The Broader Team</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* TODO: add team members */}
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-[#F0F4F8] rounded-full mb-4" />
                <div className="h-4 w-24 bg-gray-200 rounded mb-2" />
                <div className="h-3 w-16 bg-gray-100 rounded" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="bg-[#F0F4F8] py-20 md:py-24 px-6 md:px-8 border-t border-[#E5E7EB]">
        <div className="max-w-6xl mx-auto">
          <Label>THE VISION</Label>
          <h2
            className="font-bold text-[#1A3C5E] mb-12"
            style={{ fontSize: "clamp(32px, 4vw, 48px)", lineHeight: 1.1, letterSpacing: "-0.02em" }}
          >
            Where we are going.
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-xl border border-[#E5E7EB]">
              <span className="text-[#2E8BC0] font-bold block mb-2" style={{ fontSize: 14 }}>Horizon 1</span>
              <span className="text-gray-400 font-medium block mb-4" style={{ fontSize: 13 }}>2025–2027</span>
              <ul className="space-y-3 text-gray-700" style={{ fontSize: 16, lineHeight: 1.6 }}>
                <li className="flex gap-3"><span className="text-[#2E8BC0]">•</span> 100+ schools on Pioneers'</li>
                <li className="flex gap-3"><span className="text-[#2E8BC0]">•</span> Schoolpedia as Ghana's go-to school search platform</li>
                <li className="flex gap-3"><span className="text-[#2E8BC0]">•</span> GHS 200,000 ARR</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl border border-[#E5E7EB]">
              <span className="text-[#2E8BC0] font-bold block mb-2" style={{ fontSize: 14 }}>Horizon 2</span>
              <span className="text-gray-400 font-medium block mb-4" style={{ fontSize: 13 }}>2027–2030</span>
              <ul className="space-y-3 text-gray-700" style={{ fontSize: 16, lineHeight: 1.6 }}>
                <li className="flex gap-3"><span className="text-[#2E8BC0]">•</span> 10,000 schools</li>
                <li className="flex gap-3"><span className="text-[#2E8BC0]">•</span> 3 million users</li>
                <li className="flex gap-3"><span className="text-[#2E8BC0]">•</span> Education financing and insurance</li>
                <li className="flex gap-3"><span className="text-[#2E8BC0]">•</span> Pan-African presence</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl border border-[#E5E7EB]">
              <span className="text-[#2E8BC0] font-bold block mb-2" style={{ fontSize: 14 }}>Horizon 3</span>
              <span className="text-gray-400 font-medium block mb-4" style={{ fontSize: 13 }}>2030+</span>
              <ul className="space-y-3 text-gray-700" style={{ fontSize: 16, lineHeight: 1.6 }}>
                <li className="flex gap-3"><span className="text-[#2E8BC0]">•</span> Edcomrade boarding facilities</li>
                <li className="flex gap-3"><span className="text-[#2E8BC0]">•</span> Foreign exchange programmes</li>
                <li className="flex gap-3"><span className="text-[#2E8BC0]">•</span> $5M ARR</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
