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
  TrendingUp
} from "lucide-react";
import { LeadForm } from "@/components/lead-form";

export default function Digital100Page() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-primary selection:text-white">
      <Navigation />

      {/* Hero — A New Beginning */}
      <Section className="min-h-[95vh] flex items-center bg-black relative overflow-hidden">
        {/* Visual Glows */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-black to-black opacity-60" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-secondary/10 blur-[150px] rounded-full opacity-40 animate-pulse" />

        <Container className="relative z-10 py-30">
          <div className="max-w-5xl mx-auto text-center space-y-12">
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-semibold tracking-[0.3em] uppercase text-zinc-400">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              Special Project for Schools
            </div>

            <h1 className="text-5xl md:text-[10rem] font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500 leading-[0.85]">
              Found. <br /> Trusted.
            </h1>

            <p className="text-xl md:text-4xl text-zinc-400 font-light max-w-3xl mx-auto leading-tight">
              If parents can't find you on Google, do you exist? <br />
              <span className="text-white font-medium">We are choosing 100 schools to help them get organized and get found.</span>
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-10">
              <Magnetic strength={0.2}>
                <Button size="xl" variant="premium" className="rounded-full px-16 text-xl" asChild>
                  <Link href="#apply">Apply Now</Link>
                </Button>
              </Magnetic>
              <Magnetic strength={0.1}>
                <Link href="#details" className="text-zinc-500 hover:text-white transition-colors underline-offset-8 hover:underline text-lg">
                  See what's included
                </Link>
              </Magnetic>
            </div>
          </div>
        </Container>
      </Section>

      {/* The Hard Truth — Why It Matters */}
      <Section intensity="none" className="bg-zinc-950 border-y border-white/5 py-12 md:py-24">
        <Container>
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-10">
              <h2 className="text-4xl md:text-7xl font-bold tracking-tight">
                Get <br /> Found.
              </h2>
              <p className="text-lg md:text-2xl text-zinc-400 leading-relaxed">
                There are amazing schools in Ghana—with great teachers and beautiful campuses—that look hidden online.
                Broken links. Empty pages. Or not even appearing on Google Maps.
              </p>
              <p className="text-lg md:text-2xl text-zinc-300 font-medium leading-relaxed">
                Parents judge you before they ever visit. <br />
                <span className="text-secondary italic">Don't let a poor digital profile cost you new students.</span>
              </p>
            </div>
            <div className="aspect-square bg-zinc-900 rounded-[3rem] border border-white/5 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center text-center p-8">
                <span className="text-zinc-600 font-mono text-sm uppercase tracking-widest">(We transform your school's digital home)</span>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* What's Included */}
      <Section id="details" intensity="none" className="bg-black py-12 md:py-24">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-24 space-y-6">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight">Ready to Shine.</h2>
            <p className="text-xl md:text-2xl text-zinc-400 font-light">Everything you need to look world-class. <span className="text-white font-medium">No upfront cost for the 100 schools we select.</span></p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PackageCard
              icon={Globe}
              title="A Modern Website"
              desc="A beautiful website that looks great on every phone, accepts inquiries, and builds instant trust."
            />
            <PackageCard
              icon={Camera}
              title="Professional Photos"
              desc="A full day of professional photography and video to show off your campus and your students."
            />
            <PackageCard
              icon={MapPin}
              title="Get on Google Maps"
              desc="We set up and optimize your Google profile so you show up when parents search for 'schools near me'."
            />
            <PackageCard
              icon={Award}
              title="Trusted School Badge"
              desc="A verified profile on Schoolpedia—Ghana's official directory where parents go to find the best schools."
            />
            <PackageCard
              icon={TrendingUp}
              title="Simple Admissions"
              desc="Digital application forms parents can fill on their phones, so you never miss another student."
            />
            <PackageCard
              icon={ShieldCheck}
              title="Modern Tools"
              desc="Get early access to our system. Connect your office, your parents, and your future in one place."
            />
          </div>
        </Container>
      </Section>

      {/* The Model — Zero Upfront */}
      <Section intensity="strong" className="bg-white text-black py-40">
        <Container className="max-w-5xl text-center space-y-12">
          <h2 className="text-4xl md:text-8xl font-bold tracking-tight">The Inevitable Payoff.</h2>
          <p className="text-xl md:text-4xl font-light text-zinc-600 leading-tight">
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

      {/* Final Call — Application Protocol */}
      <Section id="apply" className="bg-zinc-950 py-40">
        <Container className="max-w-4xl space-y-20">
          <div className="text-center space-y-8">
            <h2 className="text-5xl md:text-8xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500">
              Be Among the 100.
            </h2>
            <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto">
              We are currently reviewing applications for the 2026 cohort.
              Is your school ready to be seen?
            </p>
          </div>

          <LeadForm
            type="pioneer"
            title="Cohort Application"
            subtitle="Apply for Digital 100 priority onboarding."
            className="bg-zinc-900 border-white/5 text-white"
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
