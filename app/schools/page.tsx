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
import { LeadForm } from "@/components/lead-form";
import { Magnetic } from "@/components/ui/magnetic";

export default function SchoolsPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navigation />

            {/* Hero — Run your school without the chaos */}
            <Section className="min-[90vh] flex items-center">
                <Container>
                    <div className="max-w-5xl mx-auto text-center space-y-12 pt-48">
                        <h1 className="text-5xl md:text-9xl font-bold tracking-tighter leading-[0.85] text-transparent bg-clip-text bg-gradient-to-b from-foreground to-muted-foreground/50">
                            Run your school <br /> <span className="text-primary italic">without the chaos.</span>
                        </h1>
                        <p className="text-xl md:text-3xl text-muted-foreground font-light max-w-4xl mx-auto leading-tight">
                            Records, fees, parent communication, and staff management — all in one place. Built for Ghanaian private schools.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-6">
                            <Magnetic strength={0.2}>
                                <Button size="xl" className="rounded-full px-12 text-xl shadow-2xl shadow-primary/20 h-16" asChild>
                                    <Link href="#get-started">Start Your Free 6 Months</Link>
                                </Button>
                            </Magnetic>
                            <Magnetic strength={0.1}>
                                <Button variant="outline" size="xl" className="rounded-full px-12 text-xl h-16" asChild>
                                    <Link href="/campaigns/digital-100">Join the Digital 100</Link>
                                </Button>
                            </Magnetic>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* The Core Benefits — Built to Help You Lead */}
            <Section intensity="soft" className="py-32 md:py-48 border-y border-border/50">
                <Container>
                    <div className="grid lg:grid-cols-2 gap-24 items-end mb-32">
                        <div className="space-y-6">
                            <span className="text-xs font-bold uppercase tracking-[0.4em] text-primary">Built to Help You Lead</span>
                            <h2 className="text-4xl md:text-7xl font-bold tracking-tight">Everything your school needs. <br /> <span className="text-primary italic">Nothing you don't.</span></h2>
                            <p className="text-lg md:text-2xl text-muted-foreground font-light leading-relaxed">
                                We built EdComrade for the realities of running a private school in Ghana — not for a Silicon Valley startup.
                            </p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <FeatureCard
                            icon={Globe}
                            title="Get Found on Google and Schoolpedia"
                            desc="Don't be invisible to the families who are searching for you right now. We create a verified school profile that shows up when parents search — and tells the truth about how good your school is."
                        />
                        <FeatureCard
                            icon={BarChart3}
                            title="Fee Collection Without the Chase"
                            desc="Automated billing, digital payment tracking, and clear receipts for every family. Give your bursar real-time visibility into outstanding balances — without a single manual follow-up."
                        />
                        <FeatureCard
                            icon={TrendingUp}
                            title="Know Your Numbers"
                            desc="See enrollment trends, term-on-term comparisons, and financial health at a glance. Make decisions based on data, not instinct."
                        />
                        <FeatureCard
                            icon={Zap}
                            title="Give Your Teachers Time Back"
                            desc="Automated grading, digital lesson notes, and attendance tracking from their phone. Less paperwork means more teaching."
                        />
                        <FeatureCard
                            icon={Fingerprint}
                            title="A Website Your School Deserves"
                            desc="A professional, mobile-optimised school website that looks great, loads fast, and lets parents send enquiries directly to you."
                        />
                        <FeatureCard
                            icon={Lock}
                            title="Your School History — Protected"
                            desc="Every student record, every financial transaction, every report card — safely stored and always owned by you. Not lost when a staff member leaves."
                        />
                    </div>
                </Container>
            </Section>

            {/* Final Call — Parents are searching online */}
            <Section id="get-started" intensity="none" className="py-40">
                <Container className="max-w-4xl space-y-20">
                    <div className="text-center space-y-8">
                        <span className="text-xs font-bold uppercase tracking-[0.4em] text-primary">Why Now</span>
                        <h2 className="text-4xl md:text-8xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-foreground to-muted-foreground/50">
                            Parents are searching online.
                        </h2>
                        <p className="text-xl md:text-3xl text-muted-foreground font-light leading-relaxed max-w-3xl mx-auto">
                            The families you want to serve are already online — comparing schools, reading reviews, checking Google Maps. EdComrade ensures you are not invisible to the parents who would choose you.
                        </p>
                        <div className="pt-4">
                            <Magnetic strength={0.1}>
                                <Button size="lg" variant="outline" className="rounded-full px-10 border-primary/20 hover:bg-primary/5 h-14" asChild>
                                    <Link href="/campaigns/digital-100">See the Digital 100 Package</Link>
                                </Button>
                            </Magnetic>
                        </div>
                    </div>

                    <div className="pt-20">
                        <LeadForm
                            type="pioneer"
                            title="Start your free 6-month trial."
                            subtitle="No payment. No obligation. We set everything up and support you throughout."
                            footerNote="We review every application and respond within two business days. Pioneers slots are limited per region — earlier applications receive priority."
                            buttonLabel="Get Started — It's Free"
                        />
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
        <Card className="p-6 sm:p-10 hover:border-primary/20 transition-all duration-500 group">
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
