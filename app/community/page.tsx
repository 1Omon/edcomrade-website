import { MinimalNav } from "@/components/minimal-nav";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowRight, BookOpen, Tv, FlaskConical } from "lucide-react";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Community & Media | EdComrade",
  description: "The Pulse of African Education. Digital Magazine, Inter-school Competitions, and the Future of Learning.",
};

export default function CommunityPage() {
  return (
    <main className="min-h-screen bg-background">
      <MinimalNav />

      {/* Hero */}
      <section className="pt-32 pb-24 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary-foreground text-sm font-medium mb-6">
            The Pulse of Education
          </div>
          <h1 className="text-5xl md:text-7xl font-light tracking-tight text-balance mb-6">
            More than a platform. <br />
            <span className="font-bold">A Digital Renaissance.</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto font-light">
            We are building the media engine that celebrates African education.
            From digital magazines to televised competitions, we are making smart exciting again.
          </p>
        </div>
      </section>

      {/* 1. The Magazine */}
      <section className="py-24 px-6 lg:px-8 bg-black text-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 order-2 lg:order-1">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white mb-6">
              <BookOpen className="w-6 h-6" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">The EdComrade Magazine</h2>
            <p className="text-xl text-gray-400 leading-relaxed">
              The first premium digital publication dedicated to the business and lifestyle of education in Ghana.
            </p>
            <ul className="space-y-4 text-gray-300">
              <li className="flex gap-4">
                <span className="text-secondary font-bold">01</span>
                <p>Exclusive interviews with top School Owners & Educators.</p>
              </li>
              <li className="flex gap-4">
                <span className="text-secondary font-bold">02</span>
                <p>Policy analysis and "State of Education" reports.</p>
              </li>
              <li className="flex gap-4">
                <span className="text-secondary font-bold">03</span>
                <p>Student success stories and alumni spotlights.</p>
              </li>
            </ul>
            <button className="text-white border-b border-secondary pb-1 hover:text-secondary transition-colors text-lg">
              Read Latest Issue (Coming Soon)
            </button>
          </div>
          <div className="order-1 lg:order-2 relative h-[500px] bg-white/5 rounded-2xl overflow-hidden border border-white/10">
            {/* Magazine Cover Mockup Placeholder */}
            <div className="absolute inset-0 flex items-center justify-center text-center p-8">
              <div className="space-y-4">
                <p className="uppercase tracking-[0.2em] text-sm text-gray-500">Issue 001</p>
                <h3 className="text-5xl font-serif italic">The Digital<br />Pioneers</h3>
                <p className="text-sm text-gray-400">Featuring Ghana's Top 100 Innovative Schools</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Edutainment */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[500px] bg-primary/5 rounded-2xl overflow-hidden border border-primary/10">
            <Image
              src="/african-students-competing-in-academic-olympiad--f.jpg"
              alt="Students competing"
              fill
              className="object-cover opacity-80 grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <div className="space-y-8">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
              <Tv className="w-6 h-6" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">Edutainment & Competitions</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We are bringing the excitement of the &quot;NSMQ&quot; to every subject and every grade.
              Making academic excellence a spectator sport.
            </p>
            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              <div className="p-6 rounded-xl bg-muted/50 border border-border">
                <h4 className="font-bold mb-2">The Shark Tank</h4>
                <p className="text-sm text-muted-foreground">Student entrepreneurship challenges pitching real ideas.</p>
              </div>
              <div className="p-6 rounded-xl bg-muted/50 border border-border">
                <h4 className="font-bold mb-2">Code Warriors</h4>
                <p className="text-sm text-muted-foreground">Inter-school coding and robotics hackathons.</p>
              </div>
              <div className="p-6 rounded-xl bg-muted/50 border border-border">
                <h4 className="font-bold mb-2">Debate League</h4>
                <p className="text-sm text-muted-foreground">National debate championship for high schools.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Future Lab */}
      <section className="py-24 px-6 lg:px-8 bg-secondary text-secondary-foreground">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <FlaskConical className="w-16 h-16 mx-auto opacity-80" />
          <h2 className="text-4xl md:text-6xl font-bold">The Future Lab</h2>
          <p className="text-xl md:text-2xl leading-relaxed opacity-90">
            Our R&D division tailored for the African continent. We are constantly researching how AI, VR, and Blockchain can solve specific Ghanaian educational challenges.
          </p>
          <p className="font-mono text-sm opacity-70">
            CURRENT EXPERIMENT: &quot;Offline-First AI Tutoring for Rural Areas&quot;
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
