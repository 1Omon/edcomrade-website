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
import { LeadForm } from "@/components/lead-form";
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
                            Connection & <br /> <span className="text-secondary italic">Peace of Mind.</span>
                        </h1>
                        <p className="text-xl md:text-4xl text-muted-foreground font-light max-w-4xl mx-auto leading-tight">
                            Education should not be a "mystery". ParentAide gives you a direct, clear window into your child's journey, so you're always kept in the loop.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-6">
                            <Magnetic strength={0.2}>
                                <Button size="xl" variant="secondary" className="rounded-full px-12 text-xl shadow-2xl shadow-secondary/20" asChild>
                                    <Link href="#download">Get the App</Link>
                                </Button>
                            </Magnetic>
                            <Magnetic strength={0.1}>
                                <Button variant="outline" size="xl" className="rounded-full px-12 text-xl" asChild>
                                    <Link href="/schoolpedia">Find Top Schools</Link>
                                </Button>
                            </Magnetic>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* The Parent Experience — Always Connected */}
            <Section intensity="soft" className="py-32 md:py-48 border-y border-border/50 bg-secondary/5">
                <Container>
                    <div className="grid lg:grid-cols-2 gap-24 items-center mb-32">
                        <div className="relative aspect-[3/4] bg-zinc-900 rounded-[4rem] overflow-hidden shadow-2xl ring-1 ring-white/10 group">
                            <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-black flex items-center justify-center text-white/20">
                                <p className="font-mono text-sm uppercase tracking-widest">(Simple App Interface)</p>
                            </div>
                        </div>
                        <div className="space-y-12">
                            <div className="space-y-6">
                                <h2 className="text-4xl md:text-7xl font-bold tracking-tight text-foreground">Stay <br /> Connected.</h2>
                                <p className="text-lg md:text-2xl text-muted-foreground font-light leading-relaxed">
                                    No more missed announcements or chasing receipts. ParentAide is the simple bridge between your home and your child's school.
                                </p>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-8">
                                <FeatureItem icon={Eye} title="Daily Progress" desc="Instant attendance and safety alerts. See what they're learning." />
                                <FeatureItem icon={Network} title="Direct Chat" desc="A secure and easy channel to reach teachers and the office." />
                                <FeatureItem icon={ShieldCheck} title="Clear Payments" desc="Pay fees and see your payment history right on your phone." />
                                <FeatureItem icon={Telescope} title="Future Goals" desc="Clear progress reports to help you spot your child's strengths." />
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <FeatureCard
                            icon={Bell}
                            title="Easy Updates"
                            desc="Receive the school's official news directly. Stay organized and informed about everything happening at school."
                        />
                        <FeatureCard
                            icon={Smartphone}
                            title="Made for You"
                            desc="Designed for busy parents. Check grades, attendance, and more in just a few taps on your phone."
                        />
                        <FeatureCard
                            icon={History}
                            title="Safe Records"
                            desc="Keep a clear, verified history of your child's school journey. It's information that gives you true peace of mind."
                        />
                    </div>
                </Container>
            </Section>

            {/* Final Call — Get in Touch */}
            <Section id="contact" intensity="none" className="py-40">
                <Container className="max-w-4xl space-y-20">
                    <div className="text-center space-y-8">
                        <h2 className="text-4xl md:text-8xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-foreground to-muted-foreground/50">
                            Join the Community.
                        </h2>
                        <p className="text-xl md:text-3xl text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto">
                            Become a true partner in your child's education. See if your school is ready to connect with the network today.
                        </p>
                    </div>

                    <LeadForm
                        type="inquiry"
                        title="Stay Informed"
                        subtitle="Let's get your school connected."
                    />
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
