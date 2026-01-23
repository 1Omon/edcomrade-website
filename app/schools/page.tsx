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

export default function SchoolsPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navigation />

            {/* Hero — The Foundation for Modern Schools */}
            <Section className="min-[90vh] flex items-center">
                <Container>
                    <div className="max-w-5xl mx-auto text-center space-y-12 pt-32">
                        <h1 className="text-5xl md:text-9xl font-bold tracking-tighter leading-[0.85] text-transparent bg-clip-text bg-gradient-to-b from-foreground to-muted-foreground/50">
                            The System for <br /> <span className="text-primary italic">Better Schools.</span>
                        </h1>
                        <p className="text-xl md:text-4xl text-muted-foreground font-light max-w-4xl mx-auto leading-tight">
                            Running a school shouldn't be a struggle. Get the tools you need to manage everything in one place and show parents the excellence you provide.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-6">
                            <Button size="xl" className="rounded-full px-12 text-xl shadow-2xl shadow-primary/20" asChild>
                                <Link href="/contact">Build My School Profile</Link>
                            </Button>
                            <Button variant="outline" size="xl" className="rounded-full px-12 text-xl" asChild>
                                <Link href="/campaigns/digital-100">Join the Digital 100</Link>
                            </Button>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* The Core Benefits — Built for Success */}
            <Section intensity="soft" className="py-32 md:py-48 border-y border-border/50">
                <Container>
                    <div className="grid lg:grid-cols-2 gap-24 items-end mb-32">
                        <div className="space-y-6">
                            <h2 className="text-4xl md:text-7xl font-bold tracking-tight">Built to <br /> Help You Lead.</h2>
                            <p className="text-lg md:text-2xl text-muted-foreground font-light leading-relaxed">
                                We give you a solid foundation to manage your fees, grades, and parent communication with complete confidence.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-4 justify-start lg:justify-end">
                            <CapabilityBadge icon={Fingerprint} label="Professional Look" />
                            <CapabilityBadge icon={ShieldCheck} label="Clear Records" />
                            <CapabilityBadge icon={Cpu} label="Simple Setup" />
                            <CapabilityBadge icon={BarChart3} label="Better Insights" />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <FeatureCard
                            icon={Fingerprint}
                            title="Get Found (Schoolpedia)"
                            desc="Don't be invisible. We help you create a verified profile that makes it easy for parents to find your school and trust what you offer."
                        />
                        <FeatureCard
                            icon={ShieldCheck}
                            title="Clear Finances"
                            desc="Collect fees digitally and keep messy records away. Give parents professional receipts and give your bursar total peace of mind."
                        />
                        <FeatureCard
                            icon={TrendingUp}
                            title="Plan Your Growth"
                            desc="See at a glance how many students are joining and leaving. Use clear charts to plan for the next term with confidence."
                        />
                        <FeatureCard
                            icon={Users}
                            title="Support Your Teachers"
                            desc="Automate grading and lesson notes. When teachers spend less time on paperwork, they have more time to inspire students."
                        />
                        <FeatureCard
                            icon={Globe}
                            title="Your Modern Website"
                            desc="Get a professional website for your school that looks great on every phone. Let parents send inquiries directly to you."
                        />
                        <FeatureCard
                            icon={Lock}
                            title="School History"
                            desc="Years of student records and financial data safely saved. It's your history, protected by us, and always owned by you."
                        />
                    </div>
                </Container>
            </Section>

            {/* Final Call — Start Your Journey */}
            <Section id="contact" intensity="none" className="py-40">
                <Container className="max-w-4xl space-y-20">
                    <div className="text-center space-y-8">
                        <h2 className="text-4xl md:text-8xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-foreground to-muted-foreground/50">
                            Move Forward.
                        </h2>
                        <p className="text-xl md:text-3xl text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto">
                            The world is moving to digital. We make sure your school is leading the way, not being left behind.
                        </p>
                    </div>

                    <LeadForm
                        type="application"
                        title="Get Your Tools"
                        subtitle="Join the future of education in Ghana."
                    />
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
