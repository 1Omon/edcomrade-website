"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Magnetic } from "@/components/ui/magnetic";
import {
  Check,
  ArrowRight,
  Camera,
  Globe,
  MapPin,
  Award,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  Zap
} from "lucide-react";
import { LeadForm } from "@/components/lead-form";

export default function Digital100Page() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-primary selection:text-white">
      <Navigation />

      {/* Hero — Get Your School Found */}
      <Section className="min-h-[95vh] flex items-center bg-black relative overflow-hidden">
        {/* Visual Glows */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-black to-black opacity-60" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-secondary/10 blur-[150px] rounded-full opacity-40 animate-pulse" />

        <Container className="relative z-10 py-30">
          <div className="max-w-5xl mx-auto text-center space-y-12 pt-20">
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-semibold tracking-[0.3em] uppercase text-zinc-400">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              Cohort 1: Now Open
            </div>

            <h1 className="text-5xl md:text-[8rem] font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500 leading-[0.85]">
              Get Found. <br /> Get Trusted.
            </h1>

            <p className="text-xl md:text-3xl text-zinc-400 font-light max-w-3xl mx-auto leading-tight">
              If parents can&apos;t find you on Google, do you exist? <br />
              <span className="text-white font-medium">We are choosing 100 schools for a complete digital transformation. Professional media, a new website, and Google visibility — all in one package.</span>
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-10">
              <Magnetic strength={0.2}>
                <Button size="xl" variant="premium" className="rounded-full px-16 text-xl h-16" asChild>
                  <Link href="#apply">Apply to Join</Link>
                </Button>
              </Magnetic>
              <Magnetic strength={0.1}>
                <Link href="#details" className="text-zinc-500 hover:text-white transition-colors underline-offset-8 hover:underline text-lg">
                  See what&apos;s included
                </Link>
              </Magnetic>
            </div>
          </div>
        </Container>
      </Section>

      {/* The Problem — Invisible Excellence */}
      <Section intensity="none" className="bg-zinc-950 border-y border-white/5 py-32 md:py-48">
        <Container>
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-10">
              <span className="text-xs font-bold uppercase tracking-[0.4em] text-secondary">The Problem</span>
              <h2 className="text-4xl md:text-7xl font-bold tracking-tight">
                Invisible <br /> Excellence.
              </h2>
              <p className="text-lg md:text-2xl text-zinc-400 leading-relaxed">
                There are amazing private schools in Ghana — with great results and dedicated staff — that look hidden online. Broken links, blurry photos, or simply not appearing on Google Maps.
              </p>
              <p className="text-lg md:text-2xl text-zinc-300 font-medium leading-relaxed italic">
                Parents judge your school before they ever visit. If your digital presence doesn&apos;t reflect your actual quality, you are losing parents to schools that look better online, even if they aren&apos;t better in person.
              </p>
            </div>
            <div className="aspect-square bg-zinc-900 rounded-[3rem] border border-white/5 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center text-center p-8">
                <span className="text-zinc-600 font-mono text-sm uppercase tracking-widest leading-relaxed">
                  (We rebuild your school&apos;s <br /> digital foundation from scratch)
                </span>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* What's Included — The Project */}
      <Section id="details" intensity="none" className="bg-black py-32 md:py-48">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-24 space-y-6">
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-primary">The Package</span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight">Everything, coordinated.</h2>
            <p className="text-xl md:text-2xl text-zinc-400 font-light max-w-2xl mx-auto">We don&apos;t just give you a login. We do the work for you. Every Digital 100 school receives:</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PackageCard
              icon={Camera}
              title="Professional Media Shoot"
              desc="A production team visits your school to produce high-quality photography and video content that shows your school at its best."
            />
            <PackageCard
              icon={Globe}
              title="Custom School Website"
              desc="A mobile-optimized, fast-loading website that parents love to use. No more generic templates that look like everyone else."
            />
            <PackageCard
              icon={MapPin}
              title="Google & SEO Mastery"
              desc="We optimize your Google Maps profile and ensure you show up when parents search for the best schools in your area."
            />
            <PackageCard
              icon={Award}
              title="Verified Schoolpedia Profile"
              desc="A premium listing on Ghana&apos;s official school directory, complete with your verified credentials and professional media."
            />
            <PackageCard
              icon={Zap}
              title="The School ERP"
              desc="Full setup of your new management system — student records, fees, and report cards — ready for your staff to use."
            />
            <PackageCard
              icon={Sparkles}
              title="ParentAide Activation"
              desc="We onboard your parents onto the app so they can see their children&apos;s progress and pay fees from their phones."
            />
          </div>
        </Container>
      </Section>

      {/* The Deal — GH₵ 5,000 Total */}
      <Section intensity="strong" className="bg-white text-black py-40">
        <Container className="max-w-5xl text-center space-y-12">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-zinc-100 text-xs font-bold uppercase tracking-[0.3em] mb-4">Pricing & Partnership</div>
          <h2 className="text-4xl md:text-[6rem] font-bold tracking-tighter leading-[0.9]">One flat fee. <br /> <span className="text-primary italic">No hidden costs.</span></h2>
          <p className="text-xl md:text-3xl font-light text-zinc-600 leading-tight max-w-3xl mx-auto">
            The Digital 100 package is valued at over GH₵ 15,000. Under this initiative, selected schools pay a single contribution:
          </p>
          
          <div className="flex flex-col items-center justify-center space-y-2 py-8">
            <span className="text-6xl md:text-9xl font-bold tracking-tighter">GH₵ 5,000</span>
            <span className="text-sm font-bold uppercase tracking-widest text-zinc-400">Includes everything listed above</span>
          </div>

          <div className="bg-zinc-100 rounded-[3rem] p-12 lg:p-20 text-left space-y-12 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-1 gap-12">
              <div className="space-y-4">
                <h4 className="text-2xl font-bold">Why the investment?</h4>
                <p className="text-zinc-600 text-lg leading-relaxed">
                  We invest the rest of the capital because we want to partner with schools that are serious about excellence. When your school looks great and runs properly on our system, our entire ecosystem of tools becomes more valuable to parents across Ghana.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Final Call — Apply for the 2026 Intake */}
      <Section id="apply" className="bg-zinc-950 py-40">
        <Container className="max-w-4xl space-y-20">
          <div className="text-center space-y-8">
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-primary">Applications Open</span>
            <h2 className="text-5xl md:text-8xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500">
              Join the 100.
            </h2>
            <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto font-light">
              We are currently reviewing applications for the 100 schools for the 2026 intake. Slots are assigned on a regional basis.
            </p>
          </div>

          <LeadForm
            type="pioneer"
            title="Register Your Interest"
            subtitle="Start your application for the Digital 100 cohort."
            className="bg-zinc-900 border-white/5 text-white"
            buttonLabel="Apply to Join Digital 100"
            footerNote="Selected schools will be contacted for an in-person meeting and media site survey within two business days."
          />
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
