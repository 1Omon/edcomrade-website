"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
    Fingerprint,
    ShieldCheck,
    Zap,
    Lock,
    ArrowRight,
    TrendingUp,
    Users,
    Globe,
    Cpu,
    BarChart3
} from "lucide-react";
import Link from "next/link";

export default function SchoolsPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navigation />

            {/* Hero — The OS for Institutions */}
            <Section className="min-[90vh] flex items-center pt-40 pb-20">
                <Container>
                    <div className="max-w-5xl space-y-12">
                        <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-primary/5 border border-primary/10 text-xs font-bold tracking-[0.4em] uppercase text-primary">
                            Ecosystem Layer 1: Infrastructure
                        </div>
                        <h1 className="text-7xl md:text-9xl font-bold tracking-tighter leading-[0.85]">
                            The OS for <br /> <span className="text-primary italic">Institutions.</span>
                        </h1>
                        <p className="text-2xl md:text-4xl text-muted-foreground font-light max-w-3xl leading-tight">
                            Fragmentation is expensive. EdComrade is the unified backbone that turns a school building into a digital institution.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-8 pt-6">
                            <Button size="xl" className="rounded-full px-12 text-xl shadow-2xl shadow-primary/20" asChild>
                                <Link href="#contact">Deploy Infrastructure</Link>
                            </Button>
                            <Button variant="outline" size="xl" className="rounded-full px-12 text-xl" asChild>
                                <Link href="/campaigns/digital-100">Join Digital 100</Link>
                            </Button>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* The Core Capabilities — Infrastructure First */}
            <Section intensity="soft" className="py-32 md:py-48 border-y border-border/50">
                <Container>
                    <div className="grid lg:grid-cols-2 gap-24 items-end mb-32">
                        <div className="space-y-6">
                            <h2 className="text-5xl md:text-7xl font-bold tracking-tight">Built for <br /> Sovereign Control.</h2>
                            <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">
                                We don't just provide software; we provide the foundation for digital visibility, operational integrity, and long-term data sovereignty.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-4 justify-start lg:justify-end">
                            <CapabilityBadge icon={Fingerprint} label="Institutional Identity" />
                            <CapabilityBadge icon={ShieldCheck} label="Fee Integrity" />
                            <CapabilityBadge icon={Cpu} label="System Automation" />
                            <CapabilityBadge icon={BarChart3} label="Data Intelligence" />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <FeatureCard
                            icon={Fingerprint}
                            title="Visibility (Schoolpedia)"
                            desc="Claim your institutional record. Verify your results, your facilities, and your legacy. If parents can't find you on the map, you don't exist."
                        />
                        <FeatureCard
                            icon={ShieldCheck}
                            title="Operational Integrity"
                            desc="Digital fee collection and automated student records. End the leakages. Provide dignity and clarity to both the bursar and the family."
                        />
                        <FeatureCard
                            icon={TrendingUp}
                            title="Growth Intelligence"
                            desc="Real-time admissions tracking and retention data. Use intelligence to predict your next generation of students, not just count the current ones."
                        />
                        <FeatureCard
                            icon={Users}
                            title="Instructional Sovereignty"
                            desc="Automate lesson notes, grading, and attendance. Free your teachers from the prison of paperwork so they can focus on inspiration."
                        />
                        <FeatureCard
                            icon={Globe}
                            title="Global Presence"
                            desc="A mobile-responsive institutional website that integrates directly with your operations. Seamless inquiries from phone to dashboard."
                        />
                        <FeatureCard
                            icon={Lock}
                            title="Institutional Memory"
                            desc="Ten years of student history, staff records, and financial data. Secure, searchable, and owned completely by your institution."
                        />
                    </div>
                </Container>
            </Section>

            {/* Call to Inevitability */}
            <Section intensity="none" className="py-40">
                <Container className="max-w-4xl text-center space-y-12">
                    <h2 className="text-6xl md:text-8xl font-bold tracking-tighter">Inevitable Progress.</h2>
                    <p className="text-2xl md:text-3xl text-muted-foreground font-light leading-relaxed">
                        The world is digitizing. Your school either leads this change or is eventually replaced by it. <br />
                        <span className="text-foreground font-medium">Build your foundation today.</span>
                    </p>
                    <div className="pt-10">
                        <Button size="xl" className="rounded-full px-16 text-xl shadow-2xl shadow-primary/20">
                            Request Implementation <ArrowRight className="ml-3" />
                        </Button>
                    </div>
                </Container>
            </Section>

            <Footer />
        </main>
    );
}

function CapabilityBadge({ icon: Icon, label }: { icon: any, label: string }) {
    return (
        <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-background border border-border shadow-sm">
            <Icon className="w-5 h-5 text-primary" />
            <span className="text-sm font-bold tracking-tight">{label}</span>
        </div>
    );
}

function FeatureCard({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) {
    return (
        <Card className="p-10 hover:border-primary/20 transition-all duration-500 group">
            <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <Icon className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4 tracking-tight">{title}</h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
                {desc}
            </p>
        </Card>
    );
}
