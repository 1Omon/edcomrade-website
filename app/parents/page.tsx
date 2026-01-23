"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
    Eye,
    ShieldCheck,
    Network,
    Telescope,
    ArrowRight,
    Smartphone,
    Users,
    History,
    Bell,
    CreditCard
} from "lucide-react";
import Link from "next/link";

export default function ParentsPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navigation />

            {/* Hero — Digital Peace of Mind */}
            <Section className="min-[90vh] flex items-center pt-40 pb-20">
                <Container>
                    <div className="max-w-5xl space-y-12">
                        <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-secondary/5 border border-secondary/10 text-xs font-bold tracking-[0.4em] uppercase text-secondary">
                            Ecosystem Layer 2: Network
                        </div>
                        <h1 className="text-7xl md:text-9xl font-bold tracking-tighter leading-[0.85]">
                            Digital <br /> <span className="text-secondary italic">Peace of Mind.</span>
                        </h1>
                        <p className="text-2xl md:text-4xl text-muted-foreground font-light max-w-3xl leading-tight">
                            Education should not be a "black box". ParentAide is a direct, verified window into your child's journey. Legitimacy in every update.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-8 pt-6">
                            <Button size="xl" variant="secondary" className="rounded-full px-12 text-xl shadow-2xl shadow-secondary/20" asChild>
                                <Link href="#download">Join the Network</Link>
                            </Button>
                            <Button variant="outline" size="xl" className="rounded-full px-12 text-xl" asChild>
                                <Link href="/schoolpedia">Find Verified Schools</Link>
                            </Button>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* The Parent Experience — Network Power */}
            <Section intensity="soft" className="py-32 md:py-48 border-y border-border/50 bg-secondary/5">
                <Container>
                    <div className="grid lg:grid-cols-2 gap-24 items-center mb-32">
                        <div className="relative aspect-[3/4] bg-zinc-900 rounded-[4rem] overflow-hidden shadow-2xl ring-1 ring-white/10 group">
                            {/* Mobile App Mockup Placeholder */}
                            <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-black flex items-center justify-center text-white/20">
                                <p className="font-mono text-sm uppercase tracking-widest">(ParentAide App Interface)</p>
                            </div>
                        </div>
                        <div className="space-y-12">
                            <div className="space-y-6">
                                <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground">Always <br /> Connected.</h2>
                                <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">
                                    No more guessing. No more missing announcements. No more chasing receipts. ParentAide is the digital bridge between home and school.
                                </p>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-8">
                                <FeatureItem icon={Eye} title="Real-time Pulse" desc="Instant attendance and safety alerts. Know they arrived." />
                                <FeatureItem icon={Network} title="Direct Bridge" desc="Secure channel to teachers and administrators." />
                                <FeatureItem icon={ShieldCheck} title="Financial Clarity" desc="Pay fees and view verified history on your phone." />
                                <FeatureItem icon={Telescope} title="Performance Track" desc="Visual progress reports and data-driven insights." />
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <FeatureCard
                            icon={Bell}
                            title="Instant Authority"
                            desc="Receive official announcements directly. No noise, just the information you need for your child's success."
                        />
                        <FeatureCard
                            icon={Smartphone}
                            title="Instant Visibility"
                            desc="Designed for the busy parent. Everything—from attendance to academic results—available in three taps."
                        />
                        <FeatureCard
                            icon={History}
                            title="Legitimacy Ledger"
                            desc="View a verified history of your child's academic and financial records. Data that provides peace of mind."
                        />
                    </div>
                </Container>
            </Section>

            {/* Final Call */}
            <Section intensity="none" className="py-40">
                <Container className="max-w-4xl text-center space-y-12">
                    <h2 className="text-6xl md:text-8xl font-bold tracking-tighter">Join the Future.</h2>
                    <p className="text-2xl md:text-3xl text-muted-foreground font-light leading-relaxed">
                        Become a partner in your child's educational journey. <br />
                        <span className="text-foreground font-medium">Verify your school's participation today.</span>
                    </p>
                    <div className="pt-10">
                        <Button size="xl" variant="secondary" className="rounded-full px-16 text-xl shadow-2xl shadow-secondary/20">
                            Search for Your School <ArrowRight className="ml-3" />
                        </Button>
                    </div>
                </Container>
            </Section>

            <Footer />
        </main>
    );
}

function FeatureItem({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) {
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

function FeatureCard({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) {
    return (
        <Card className="p-10 hover:border-secondary/20 transition-all duration-500 group">
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
