"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
    Globe,
    BarChart3,
    Cpu,
    ShieldCheck,
    ArrowRight,
    Telescope,
    LineChart,
    PieChart,
    Search
} from "lucide-react";
import Link from "next/link";
import { LeadForm } from "@/components/lead-form";
import { Magnetic } from "@/components/ui/magnetic";

export default function IntelligencePage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navigation />

            {/* Hero — Making Progress Visible */}
            <Section className="min-[90vh] flex items-center">
                <Container>
                    <div className="max-w-5xl mx-auto text-center space-y-12 pt-32">
                        <h1 className="text-5xl md:text-9xl font-bold tracking-tighter leading-[0.85] text-transparent bg-clip-text bg-gradient-to-b from-foreground to-muted-foreground/50">
                            Clear <br /> <span className="text-primary italic">Information.</span>
                        </h1>
                        <p className="text-xl md:text-4xl text-muted-foreground font-light max-w-4xl mx-auto leading-tight">
                            Solving the trust gap. We turn messy data into clear information, making every school in Ghana easy to find, easy to measure, and easy to trust.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-6">
                            <Magnetic strength={0.2}>
                                <Button size="xl" className="rounded-full px-12 text-xl shadow-2xl shadow-primary/20" asChild>
                                    <Link href="https://schoolpedia.edcomrade.com">Find Your School</Link>
                                </Button>
                            </Magnetic>
                            <Magnetic strength={0.1}>
                                <Button variant="outline" size="xl" className="rounded-full px-12 text-xl" asChild>
                                    <Link href="/contact">Work With Us</Link>
                                </Button>
                            </Magnetic>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* The Information Layer — Helping the Community */}
            <Section intensity="soft" className="py-32 md:py-48 border-y border-border/50">
                <Container>
                    <div className="grid lg:grid-cols-2 gap-24 items-center mb-32">
                        <div className="space-y-12">
                            <div className="space-y-6">
                                <h2 className="text-4xl md:text-7xl font-bold tracking-tight text-foreground">A Record <br /> You Can Trust.</h2>
                                <p className="text-lg md:text-2xl text-muted-foreground font-light leading-relaxed">
                                    Schoolpedia is more than a list—it's where the truth about Ghanaian schools lives. We give schools a simple way to prove how great they really are.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex gap-6 items-start">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                        <Search className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-2xl font-bold tracking-tight">Easy Searching</h4>
                                        <p className="text-muted-foreground font-light">Parents find the right school using facts they can trust, not just rumors.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6 items-start">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                        <LineChart className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-2xl font-bold tracking-tight">Market Growth</h4>
                                        <p className="text-muted-foreground font-light">Helping educational leaders and investors understand how to support schools better.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative aspect-square bg-zinc-900 rounded-[4rem] overflow-hidden shadow-2xl ring-1 ring-white/10">
                            <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-black flex items-center justify-center text-white/20">
                                <p className="font-mono text-sm uppercase tracking-widest">(Simple Results Dashboard)</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <FeatureCard
                            icon={Globe}
                            title="Easy Discovery"
                            desc="Claim your school's digital spot. Create a professional profile that lets parents from across the world send you inquiries."
                        />
                        <FeatureCard
                            icon={BarChart3}
                            title="Smart Management"
                            desc="Real-time info that helps school groups manage multiple locations with clear records and better financial oversight."
                        />
                        <FeatureCard
                            icon={ShieldCheck}
                            title="Seal of Approval"
                            desc="The EdComrade Trust Mark—digital proof that your school is organized, verified, and performing at its best."
                        />
                    </div>
                </Container>
            </Section>

            {/* Strategic Partners — Intelligence Inquiry */}
            <Section id="contact" intensity="none" className="py-40">
                <Container className="max-w-4xl space-y-20">
                    <div className="text-center space-y-8">
                        <h2 className="text-4xl md:text-8xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-foreground to-muted-foreground/50 uppercase">
                            For Policy <br /> & Growth.
                        </h2>
                        <p className="text-xl md:text-3xl text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto">
                            Visibility is the first step to progress. Partner with the EdComrade OS to drive national education intelligence.
                        </p>
                    </div>

                    <LeadForm
                        type="partnership"
                        title="Ecosystem Partnership"
                        subtitle="Join the intelligence layer of African education."
                    />
                </Container>
            </Section>

            <Footer />
        </main>
    );
}

function FeatureCard({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) {
    return (
        <Card className="p-6 sm:p-10 hover:border-primary/20 transition-all duration-500 group">
            <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <Icon className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4 tracking-tight">{title}</h3>
            <p className="text-muted-foreground leading-relaxed text-lg font-light">
                {desc}
            </p>
        </Card>
    );
}
