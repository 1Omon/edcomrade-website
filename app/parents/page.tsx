"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Eye,
  ShieldCheck,
  ArrowRight,
  Smartphone,
  Users,
  History,
  Bell,
  CreditCard,
} from "lucide-react";
import Link from "next/link";
import { Magnetic } from "@/components/ui/magnetic";

export default function ParentsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero — Digital Peace of Mind */}
      <Section className="min-[90vh] flex items-center">
        <Container>
          <div className="max-w-5xl mx-auto text-center space-y-12 pt-48">
            <h1 className="text-5xl md:text-9xl font-bold tracking-tighter leading-[0.85] text-transparent bg-clip-text bg-gradient-to-b from-foreground to-muted-foreground/50">
              Your child&apos;s school <br />{" "}
              <span className="text-secondary italic">in your pocket.</span>
            </h1>
            <p className="text-xl md:text-3xl text-muted-foreground font-light max-w-4xl mx-auto leading-tight">
              Education should not be a &quot;mystery&quot;. ParentAide gives
              you a direct, clear window into your child&apos;s journey, so
              you&apos;re always kept in the loop.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-6">
              <Magnetic strength={0.2}>
                <Button
                  size="xl"
                  variant="secondary"
                  className="rounded-full px-12 text-xl shadow-2xl shadow-secondary/20 h-16"
                  asChild
                >
                  <Link href="https://schoolpedia.edcomrade.com">
                    Find a School on Schoolpedia
                  </Link>
                </Button>
              </Magnetic>
              <Magnetic strength={0.1}>
                <Button
                  variant="outline"
                  size="xl"
                  className="rounded-full px-12 text-xl h-16"
                  asChild
                >
                  <Link href="#refer">Refer My School</Link>
                </Button>
              </Magnetic>
            </div>
          </div>
        </Container>
      </Section>

      {/* The Parent Experience — Always Connected */}
      <Section
        intensity="soft"
        className="py-32 md:py-48 border-y border-border/50 bg-secondary/5"
      >
        <Container>
          <div className="grid lg:grid-cols-2 gap-24 items-center mb-32">
            <div className="relative aspect-[3/4] bg-zinc-900 rounded-[4rem] overflow-hidden shadow-2xl ring-1 ring-white/10 group">
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-black flex items-center justify-center text-white/20">
                <p className="font-mono text-sm uppercase tracking-widest">
                  (ParentAide App Interface)
                </p>
              </div>
            </div>
            <div className="space-y-12">
              <div className="space-y-6">
                <span className="text-xs font-bold uppercase tracking-[0.4em] text-secondary">
                  Why ParentAide?
                </span>
                <h2 className="text-4xl md:text-7xl font-bold tracking-tight text-foreground">
                  Stop chasing <br /> for updates.
                </h2>
                <p className="text-lg md:text-2xl text-muted-foreground font-light leading-relaxed">
                  No more missed announcements, lost report cards, or chasing
                  receipts. ParentAide is the simple bridge between your home
                  and your child&apos;s school.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                <FeatureItem
                  icon={Eye}
                  title="Daily Progress"
                  desc="Instant attendance and safety alerts. See what they're learning and how they're performing."
                />
                <FeatureItem
                  icon={Smartphone}
                  title="Direct Connection"
                  desc="Official school news and announcements delivered directly to your phone. No noise."
                />
                <FeatureItem
                  icon={ShieldCheck}
                  title="Verified Payments"
                  desc="Pay fees and see your full payment history and receipts right on your phone."
                />
                <FeatureItem
                  icon={History}
                  title="Safe Records"
                  desc="Keep a clear, verified history of your child's school journey from enrollment to graduation."
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={Bell}
              title="Instant Notifications"
              desc="Know the moment your child arrives at school or if there's an urgent announcement you need to see."
            />
            <FeatureCard
              icon={CreditCard}
              title="Transparent Billing"
              desc="View your outstanding balance, download receipts, and track your payment schedule without visiting the bursar."
            />
            <FeatureCard
              icon={Users}
              title="Direct Teacher Access"
              desc="Communicate with teachers and school leaders through a secure channel that keeps your data private."
            />
          </div>
        </Container>
      </Section>

      {/* Final Call — Refer Your School */}
      <Section id="refer" intensity="none" className="py-40">
        <Container className="max-w-4xl">
          <div className="bg-black text-white rounded-[3rem] p-12 md:p-24 text-center space-y-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent opacity-50" />
            <div className="relative z-10 space-y-8">
              <h2 className="text-4xl md:text-7xl font-bold tracking-tighter">
                Is your school <br /> on EdComrade?
              </h2>
              <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed max-w-2xl mx-auto">
                If your school doesn&apos;t use EdComrade yet, we can help them
                get started. Refer your school leader today and help your entire
                school community move forward.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6 pt-6">
                <Magnetic strength={0.2}>
                  <Button
                    size="xl"
                    variant="secondary"
                    className="rounded-full px-12 text-xl h-16"
                    asChild
                  >
                    <Link href="https://wa.me/233555284923?text=I'd%20like%20to%20refer%20my%20child's%20school%20to%20EdComrade">
                      Refer My School on WhatsApp
                    </Link>
                  </Button>
                </Magnetic>
                <Magnetic strength={0.1}>
                  <Button
                    variant="ghost"
                    size="xl"
                    className="text-zinc-400 hover:text-primary transition-colors"
                    asChild
                  >
                    <Link href="/schools">See What Schools Get</Link>
                  </Button>
                </Magnetic>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Footer />
    </main>
  );
}

function FeatureItem({
  icon: Icon,
  title,
  desc,
}: {
  icon: any;
  title: string;
  desc: string;
}) {
  return (
    <div className="space-y-3">
      <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
        <Icon className="w-5 h-5" />
      </div>
      <h4 className="text-xl font-bold tracking-tight">{title}</h4>
      <p className="text-muted-foreground leading-relaxed text-sm font-light">
        {desc}
      </p>
    </div>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  desc,
}: {
  icon: any;
  title: string;
  desc: string;
}) {
  return (
    <Card className="p-6 sm:p-10 hover:border-secondary/20 transition-all duration-500 group">
      <div className="w-16 h-16 rounded-2xl bg-secondary/5 flex items-center justify-center text-secondary mb-8 group-hover:bg-secondary group-hover:text-white transition-all duration-500">
        <Icon className="w-8 h-8" />
      </div>
      <h3 className="text-2xl font-bold mb-4 tracking-tight">{title}</h3>
      <p className="text-muted-foreground leading-relaxed text-lg font-light">
        {desc}
      </p>
    </Card>
  );
}
