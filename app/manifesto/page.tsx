"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, ShieldCheck, Globe, Zap } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      <Navigation />

      {/* Hero — The Manifesto */}
      <Section className="min-[90vh] flex items-center">
        <Container className="max-w-5xl mx-auto text-center space-y-12 pt-32">
          {/* <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-primary/5 border border-primary/10 text-xs font-bold tracking-[0.4em] uppercase text-primary">
            The Manifesto
          </div> */}
          <h1 className="text-5xl md:text-9xl font-bold tracking-tighter leading-[0.85] text-transparent bg-clip-text bg-gradient-to-b from-foreground to-muted-foreground/50">
            The Inevitability <br /> of <span className="italic">Systems.</span>
          </h1>
          <p className="text-xl md:text-4xl text-muted-foreground font-light max-w-4xl mx-auto leading-tight">
            African education is not an "industry" to be disrupted. It is a $50B foundation to be standardized, verified, and interconnected.
          </p>
        </Container>
      </Section>

      {/* The Reality — The Lost Opportunity */}
      <Section intensity="soft" className="py-32 md:py-48 border-y border-border/50">
        <Container>
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            <div className="space-y-12">
              <h2 className="text-4xl md:text-7xl font-bold tracking-tight">The Digital <br /> Ghost Town.</h2>
              <p className="text-lg md:text-2xl text-muted-foreground font-light leading-relaxed">
                Ghana is home to world-class educational institutions—built on legacy, sacrifice, and brilliance—that are effectively invisible to the digital world.
              </p>
              <p className="text-lg md:text-2xl text-muted-foreground font-light leading-relaxed">
                Fragmentation is the silent tax on African progress. Drowning in paper, isolated from parents, and lost on the map, schools are leaking the trust they've worked decades to build.
              </p>
            </div>
            <div className="bg-background rounded-[3rem] p-12 md:p-16 border border-border shadow-2xl space-y-8">
              <div className="flex gap-6">
                <span className="text-4xl font-bold text-primary/30 italic">01.</span>
                <p className="text-lg font-medium leading-relaxed">Visibility is legitimacy. If a parent can't find your verified record, the barrier to trust is insurmountable.</p>
              </div>
              <div className="flex gap-6">
                <span className="text-4xl font-bold text-primary/30 italic">02.</span>
                <p className="text-lg font-medium leading-relaxed">Fragmentation is expensive. Isolated systems leak time, money, and institutional memory.</p>
              </div>
              <div className="flex gap-6">
                <span className="text-4xl font-bold text-primary/30 italic">03.</span>
                <p className="text-lg font-medium leading-relaxed">Interoperability is inevitable. The schools that Lead the OS will lead the next generation.</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* The Architecture — Moving Beyond Software */}
      <Section intensity="none" className="py-32 md:py-48 bg-zinc-950 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
        <Container>
          <div className="max-w-4xl mx-auto text-center space-y-12 mb-32">
            <h2 className="text-4xl md:text-8xl font-bold tracking-tighter">Beyond "Apps". <br /> <span className="text-primary italic">Infrastructure.</span></h2>
            <p className="text-lg md:text-2xl text-zinc-400 font-light leading-relaxed">
              We didn't build a management tool. We built the digital backbone of the African educational institution. A unified operating system for visibility, trust, and intelligence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-6 group">
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-primary transition-all duration-500">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight">Systemic Control</h3>
              <p className="text-zinc-500 leading-relaxed font-light">Eliminating operational leaks through standardized infrastructure-grade operations.</p>
            </div>
            <div className="space-y-6 group">
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-primary transition-all duration-500">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight">Verified Trust</h3>
              <p className="text-zinc-500 leading-relaxed font-light">The direct, digital bridge between institutional reality and parental peace of mind.</p>
            </div>
            <div className="space-y-6 group">
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-primary transition-all duration-500">
                <Globe className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight">Global Visibility</h3>
              <p className="text-zinc-500 leading-relaxed font-light">Claiming the map. making African excellence discoverable to the world.</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Leadership — The Architects */}
      <Section intensity="soft" className="py-32 md:py-48 border-y border-border/50">
        <Container>
          <div className="max-w-4xl mx-auto text-center space-y-8 mb-24">
            <h2 className="text-4xl md:text-7xl font-bold tracking-tight">The Architects.</h2>
            <p className="text-xl text-muted-foreground font-light leading-relaxed">
              We are a team of educators, engineers, and visionaries committed to building the digital future of African education.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <TeamMember
              name="Solomon Annan Ayisi"
              role="CEO & Chief Architect"
              bio="Directing the vision for the EdComrade OS and ecosystem interoperability."
              initials="SA"
            />
            <TeamMember
              name="Prince Sarfo"
              role="CTO & Head of Engineering"
              bio="Building the EdComrade OS and ecosystem interoperability."
              initials="PS"
            />
            <TeamMember
              name="Akua Asantewaa"
              role="Head of School Success"
              bio="Ensuring institutional transition from fragmentation to digital sovereignty."
              initials="AA"
            />
            <TeamMember
              name="Reginald Owusu"
              role="Head of AI"
              bio="Building the intelligence engine for EdComrade."
              initials="RO"
            />
            <TeamMember
              name="Judas Jackson"
              role="Software Engineer, School ERP"
              bio="Building the School ERP and Parent Portal."
              initials="JJ"
            />
            <TeamMember
              name="Emmanuel Antwi-Bosiako"
              role="Software Engineer, Schoolpedia"
              bio="Building the Schoolpedia ledger and national visibility protocols."
              initials="EA"
            />
            <TeamMember
              name="William "
              role="Software Engineer, School ERP"
              bio="Building the School ERP and Parent Portal."
              initials="EA"
            />
            <TeamMember
              name="Seth Amissah"
              role="Media Relations"
              bio="Capturing the story of African education."
              initials="SA"
            />
          </div>
        </Container>
      </Section>

      {/* Signature Area — The Commitment */}
      <Section intensity="none" className="py-32 md:py-52">
        <Container className="max-w-3xl mx-auto">
          <div className="space-y-12 text-center md:text-left">
            <div className="prose prose-2xl prose-zinc dark:prose-invert font-light leading-relaxed">
              <p>
                EdComrade is a promise of <strong>legitimacy</strong>.
                We are here because we believe that the brilliant teachers, determined headmasters, and ambitious students of Ghana deserve a system that is as world-class as their potential.
              </p>
              <p>
                We don't just write code. We build the architecture of inevitability.
              </p>
            </div>

            <div className="pt-12 flex flex-col md:flex-row items-center gap-8 justify-center md:justify-start">
              <div className="w-20 h-20 rounded-[2rem] bg-primary flex items-center justify-center text-white text-3xl font-bold shadow-2xl shadow-primary/30 shrink-0">
                SA
              </div>
              <div>
                <p className="text-2xl font-bold tracking-tight">Solomon Annan Ayisi</p>
                <p className="text-lg text-muted-foreground font-light tracking-[0.2em] uppercase">CEO & Architect • EdComrade</p>
              </div>
            </div>

            <div className="pt-16 flex justify-center md:justify-start">
              <Button size="xl" className="rounded-full px-16 text-xl shadow-2xl" asChild>
                <Link href="/campaigns/digital-100">Join the Project <ArrowRight className="ml-3" /></Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <Footer />
    </main>
  );
}

function TeamMember({ name, role, bio, initials }: { name: string, role: string, bio: string, initials: string }) {
  return (
    <div className="space-y-6 group">
      <div className="w-24 h-24 rounded-3xl bg-muted/50 flex items-center justify-center text-2xl font-bold text-muted-foreground/30 border border-border/50 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-2xl group-hover:shadow-primary/20">
        {initials}
      </div>
      <div className="space-y-2">
        <h3 className="text-2xl font-bold tracking-tight">{name}</h3>
        <p className="text-sm text-primary font-bold uppercase tracking-widest">{role}</p>
        <p className="text-muted-foreground font-light leading-relaxed">{bio}</p>
      </div>
    </div>
  );
}
