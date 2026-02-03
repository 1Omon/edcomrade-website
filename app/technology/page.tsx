"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import {
  Cpu,
  Zap,
  Network,
  Globe,
  Database,
  ShieldCheck,
  BarChart3,
  ArrowRight,
  RefreshCw,
  Share2,
  Lock
} from "lucide-react";
import Link from "next/link";

export default function TechnologyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      <Navigation />

      {/* Hero — The Technical Backbone */}
      <Section className="min-[90vh] flex items-center overflow-hidden relative">
        <Container>
          <div className="max-w-5xl mx-auto text-center space-y-12 pt-48">
            {/* <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-primary/5 border border-primary/10 text-xs font-bold tracking-[0.4em] uppercase text-primary mx-auto">
              Architecture & Protocol
            </div> */}
            <h1 className="text-5xl md:text-9xl font-bold tracking-tighter leading-[0.85] text-transparent bg-clip-text bg-gradient-to-b from-foreground to-muted-foreground/50">
              Interoperable <br /> <span className="text-primary italic">Intelligence.</span>
            </h1>
            <p className="text-xl md:text-4xl text-muted-foreground font-light max-w-4xl mx-auto leading-tight">
              We don't build features. We build a unified data protocol that connects the bursar, the teacher, the parent, and the public into one inevitable loop of trust.
            </p>
          </div>
        </Container>
      </Section>

      {/* The Integrated Loop — Visualizer */}
      <Section intensity="soft" className="py-32 md:py-48 border-y border-border/50 bg-muted/20">
        <Container>
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
              <h2 className="text-4xl md:text-7xl font-bold tracking-tight">The Unified <br /> Backbone.</h2>
              <p className="text-lg md:text-2xl text-muted-foreground font-light leading-relaxed">
                Fragmented software creates data silos. Edcomrade is a single system of record where every transaction, attendance record, and academic grade flows through a verified intelligence layer.
              </p>

              <div className="space-y-8">
                <TechStep
                  icon={Database}
                  title="Single System of Record"
                  desc="One database (SQL-optimized) for every stakeholder. Zero data duplication. Total institutional memory."
                />
                <TechStep
                  icon={Share2}
                  title="Automated Interoperability"
                  desc="When a teacher marks attendance, the Parent Network is notified instantly and the Institutional Report is updated in real-time."
                />
                <TechStep
                  icon={ShieldCheck}
                  title="Sovereign Security"
                  desc="Infrastructure-grade encryption protecting the most sensitive data of the next generation."
                />
              </div>
            </div>
            <div className="relative aspect-square bg-zinc-950 rounded-[4rem] overflow-hidden shadow-[0_0_100px_rgba(0,71,171,0.1)] ring-1 ring-white/10 group">
              {/* Architecture Schematic Placeholder */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_oklch(0.40_0.16_260_/_0.1),_transparent_80%)]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-zinc-700 font-mono text-sm uppercase tracking-[0.5em] animate-pulse">Architecture Layer 1.0</span>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Scale & Inevitability */}
      <Section intensity="none" className="py-40">
        <Container>
          <div className="grid md:grid-cols-3 gap-16">
            <div className="space-y-6">
              <Cpu className="w-12 h-12 text-primary" />
              <h3 className="text-3xl font-bold tracking-tight">School ERP</h3>
              <p className="text-xl text-muted-foreground font-light leading-relaxed">
                The technical engine for bursaries, admissions, and payroll. Optimized for African connectivity and institutional stability.
              </p>
            </div>
            <div className="space-y-6">
              <Network className="w-12 h-12 text-primary" />
              <h3 className="text-3xl font-bold tracking-tight">ParentAIde</h3>
              <p className="text-xl text-muted-foreground font-light leading-relaxed">
                A high-performance notification and payment conduit built on mobile-first architecture for the Ghanaian family.
              </p>
            </div>
            <div className="space-y-6">
              <Globe className="w-12 h-12 text-primary" />
              <h3 className="text-3xl font-bold tracking-tight">Schoolpedia</h3>
              <p className="text-xl text-muted-foreground font-light leading-relaxed">
                Public-facing intelligence that turns school data into verified digital reputations via the Schoolpedia API.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* The Blueprint Call */}
      <Section intensity="none" className="bg-black text-white py-40">
        <Container className="max-w-5xl text-center space-y-12">
          <h2 className="text-4xl md:text-8xl font-bold tracking-tighter">Deploy the System.</h2>
          <p className="text-xl md:text-3xl text-zinc-400 font-light leading-relaxed">
            We aren't just selling software. We are installing the digital infrastructure for the next 50 years of African education.
          </p>
          <div className="pt-10 flex flex-col sm:flex-row justify-center gap-8">
            <Button size="xl" className="rounded-full px-16 text-xl shadow-2xl shadow-primary/20" asChild>
              <Link href="/contact">Technical Implementation</Link>
            </Button>
            <Button variant="ghost" size="xl" className="text-zinc-500 hover:text-white transition-colors" asChild>
              <Link href="/manifesto">Strategic Manifesto</Link>
            </Button>
          </div>
        </Container>
      </Section>

      <Footer />
    </main>
  );
}

function TechStep({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <div className="flex gap-6 items-start group">
      <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 border border-primary/10">
        <Icon className="w-6 h-6" />
      </div>
      <div className="space-y-2">
        <h4 className="text-2xl font-bold tracking-tight">{title}</h4>
        <p className="text-muted-foreground leading-relaxed font-light">{desc}</p>
      </div>
    </div>
  );
}
