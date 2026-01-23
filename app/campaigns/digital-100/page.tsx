"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import {
  Check,
  ArrowRight,
  Camera,
  Globe,
  MapPin,
  Award,
  Sparkles,
  ShieldCheck,
  TrendingUp
} from "lucide-react";

export default function Digital100Page() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-primary selection:text-white">
      <Navigation />

      {/* Hero — The Inevitability Entrance */}
      <Section className="min-h-[95vh] flex items-center bg-black relative overflow-hidden">
        {/* Infrastructure Glows */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-black to-black opacity-60" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-secondary/10 blur-[150px] rounded-full opacity-40 animate-pulse" />

        <Container className="relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-12">
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-semibold tracking-[0.3em] uppercase text-zinc-400">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              National Infrastructure Project
            </div>

            <h1 className="text-7xl md:text-[10rem] font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500 leading-[0.85]">
              Visible. <br /> Trusted.
            </h1>

            <p className="text-2xl md:text-4xl text-zinc-400 font-light max-w-3xl mx-auto leading-tight">
              If they can't find you on Google, do you exist? <br />
              <span className="text-white font-medium">We are selecting 100 schools to digitize completely.</span>
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-10">
              <Button size="xl" variant="premium" className="rounded-full px-16 text-xl" asChild>
                <Link href="#apply">Apply for Cohort</Link>
              </Button>
              <Link href="#details" className="text-zinc-500 hover:text-white transition-colors underline-offset-8 hover:underline text-lg">
                See the infrastructure
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* The Hard Truth — Why It Matters */}
      <Section intensity="none" className="bg-zinc-950 border-y border-white/5">
        <Container>
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-10">
              <h2 className="text-5xl md:text-7xl font-bold tracking-tight">
                The Invisible <br /> Crisis.
              </h2>
              <p className="text-xl md:text-2xl text-zinc-400 leading-relaxed">
                There are incredible schools in Ghana—with legacy teachers and stunning facilities—that look and feel abandoned online.
                Broken links. Empty pages. No location on Google Maps.
              </p>
              <p className="text-xl md:text-2xl text-zinc-300 font-medium leading-relaxed">
                Parents judge you before they ever walk through your gates. <br />
                <span className="text-secondary italic">Don't let a bad digital impression cost you a generation of students.</span>
              </p>
            </div>
            <div className="aspect-square bg-zinc-900 rounded-[3rem] border border-white/5 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-zinc-600 font-mono text-sm uppercase tracking-widest">(Before vs After Transformation)</span>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* The Infrastructure — What's Included */}
      <Section id="details" intensity="none" className="bg-black">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-24 space-y-6">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight">The Overhaul.</h2>
            <p className="text-xl md:text-2xl text-zinc-400 font-light">Everything you need to look world-class. <span className="text-white font-medium">Zero upfront cost for selected schools.</span></p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PackageCard
              icon={Globe}
              title="Institutional Website"
              desc="A mobile-first, infrastructure-grade website that accepts inquiries and builds instant authority."
            />
            <PackageCard
              icon={Camera}
              title="Cinematic Media Shoot"
              desc="A professional day of photography and videography to showcase your campus as it truly is."
            />
            <PackageCard
              icon={MapPin}
              title="Google Maps Authority"
              desc="We claim and optimize your Google Business Profile. You show up when parents search."
            />
            <PackageCard
              icon={Award}
              title="Verification Badge"
              desc="Verified 'Trusted School' status on Schoolpedia—the record of truth for Ghanaian education."
            />
            <PackageCard
              icon={TrendingUp}
              title="Admissions Dashboard"
              desc="Digital forms and tracking so parents can apply from their phones, and you can track every lead."
            />
            <PackageCard
              icon={ShieldCheck}
              title="Ecosystem Identity"
              desc="Integrate into the EdComrade OS. Connect your operations, your parents, and your future."
            />
          </div>
        </Container>
      </Section>

      {/* The Model — Zero Upfront */}
      <Section intensity="strong" className="bg-white text-black py-40">
        <Container className="max-w-5xl text-center space-y-12">
          <h2 className="text-5xl md:text-8xl font-bold tracking-tight">The Inevitable Payoff.</h2>
          <p className="text-2xl md:text-4xl font-light text-zinc-600 leading-tight">
            We don't charge you to build your website. <br />
            We invest in your school's digital foundation because when you run properly, <span className="text-black font-semibold">everyone wins.</span>
          </p>
          <div className="bg-zinc-100 rounded-[3rem] p-12 lg:p-20 text-left space-y-8">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h4 className="text-2xl font-bold mb-4">Zero Development Cost</h4>
                <p className="text-zinc-500">Selected schools pay ₵0 for design, media shoots, or technical setup. We handle the heavy lifting.</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-4">Long-Term Partnership</h4>
                <p className="text-zinc-500">We grow together. As you use the EdComrade OS to run your school, our infrastructure pays for itself.</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Final Call */}
      <Section id="apply" className="bg-zinc-950 py-40">
        <Container className="max-w-4xl text-center space-y-10">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight">Be Among the 100.</h2>
          <p className="text-xl md:text-2xl text-zinc-400">
            We are currently reviewing applications for the 2026 cohort. <br />
            Is your school ready to be seen?
          </p>
          <div className="pt-10">
            <Button size="xl" variant="premium" className="rounded-full px-16 text-xl shadow-2xl shadow-primary/20">
              Start Application <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
          </div>
        </Container>
      </Section>

      <Footer />
    </main>
  );
}

function PackageCard({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <Card className="p-10 bg-zinc-950 border-white/5 hover:border-white/20 hover:bg-zinc-900/50 group">
      <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform duration-500">
        <Icon className="w-8 h-8" />
      </div>
      <h3 className="text-2xl font-bold mb-4 tracking-tight">{title}</h3>
      <p className="text-zinc-500 leading-relaxed text-lg">
        {desc}
      </p>
    </Card>
  );
}
