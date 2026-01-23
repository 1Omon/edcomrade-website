"use client";

import { useState, useEffect } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import HeroModern from "@/components/hero-modern";
import { CONTENT_BY_ROLE } from "@/lib/content-constants";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ArrowRight, Check, School, Globe, Users, TrendingUp, Sparkles } from "lucide-react";
import { AnimatedCounter } from "@/components/animated-counter";
import Link from "next/link";
import { UserRole } from "./role-selection-modal";

export default function HomePageClient() {
    const [userRole, setUserRole] = useState<UserRole>("public");

    useEffect(() => {
        const savedRole = localStorage.getItem("edcomrade_perspective") as UserRole;
        if (savedRole) {
            setUserRole(savedRole);
        }
    }, []);

    const handleRoleChange = (role: UserRole) => {
        setUserRole(role);
        localStorage.setItem("edcomrade_perspective", role as string);
    };

    const role = userRole || "public";
    const content = CONTENT_BY_ROLE[role];

    return (
        <main className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
            <Navigation />

            {/* HERO — Infrastructure Entrance */}
            <HeroModern userRole={role} />

            {/* Perspective Switcher — Subtle Inception */}
            <div className="bg-muted/30 border-y border-border py-4">
                <Container className="flex items-center justify-center gap-8 text-sm font-medium text-muted-foreground overflow-x-auto whitespace-nowrap">
                    <span className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-primary" />
                        Explore Perspective:
                    </span>
                    <button
                        onClick={() => setUserRole("public")}
                        className={`transition-colors hover:text-foreground ${role === "public" ? "text-primary font-bold" : ""}`}
                    >
                        The Ecosystem
                    </button>
                    <button
                        onClick={() => setUserRole("school")}
                        className={`transition-colors hover:text-foreground ${role === "school" ? "text-primary font-bold" : ""}`}
                    >
                        For Institutions
                    </button>
                    <button
                        onClick={() => setUserRole("parent")}
                        className={`transition-colors hover:text-foreground ${role === "parent" ? "text-primary font-bold" : ""}`}
                    >
                        For Families
                    </button>
                </Container>
            </div>

            {/* TRUST BAR — The Evidence */}
            <div className="border-b border-border bg-white/50 backdrop-blur-sm">
                <Container className="py-12 md:py-20 text-center space-y-12">
                    <p className="text-sm font-bold uppercase tracking-[0.5em] text-muted-foreground">The Evidence of Scale</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                        <div>
                            <h4 className="text-5xl md:text-6xl font-bold tracking-tighter text-primary mb-2">
                                <AnimatedCounter end={500} suffix="+" />
                            </h4>
                            <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Schools Standardized</p>
                        </div>
                        <div>
                            <h4 className="text-5xl md:text-6xl font-bold tracking-tighter text-foreground mb-2">
                                <AnimatedCounter end={98} suffix="%" />
                            </h4>
                            <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">System Retention</p>
                        </div>
                        <div>
                            <h4 className="text-5xl md:text-6xl font-bold tracking-tighter text-foreground mb-2">
                                <AnimatedCounter end={3} suffix="M+" />
                            </h4>
                            <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Verified Records</p>
                        </div>
                        <div>
                            <h4 className="text-5xl md:text-6xl font-bold tracking-tighter text-secondary mb-2">
                                <AnimatedCounter end={24} suffix="/7" />
                            </h4>
                            <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Operational Support</p>
                        </div>
                    </div>
                </Container>
            </div>

            {/* REALITY CHECK (Dynamic based on Role) */}
            <Section intensity="none" className="py-24 md:py-40">
                <Container>
                    <div className="max-w-4xl mx-auto text-center mb-24">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 text-primary text-xs font-bold tracking-[0.3em] uppercase mb-8">
                            {content.reality.badge}
                        </div>
                        <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[0.9]">{content.reality.title}</h2>
                        <p className="text-xl md:text-3xl text-muted-foreground leading-relaxed font-light">{content.reality.description}</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {content.reality.items.map((item: any, i: number) => (
                            <Card key={i} className="group hover:border-primary/20 transition-all duration-500 overflow-hidden">
                                <CardHeader className="p-10">
                                    <div className="w-16 h-16 rounded-2xl bg-muted/50 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                        <item.icon className="w-8 h-8" />
                                    </div>
                                    <CardTitle className="text-2xl font-bold mb-4">{item.title}</CardTitle>
                                    <p className="text-muted-foreground leading-relaxed text-lg">
                                        {item.desc}
                                    </p>
                                </CardHeader>
                            </Card>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* THE SHIFT (Ecosystem Intro) */}
            <Section intensity="soft" className="border-y border-border/50 py-40">
                <Container>
                    <div className="grid lg:grid-cols-2 gap-32 items-center">
                        <div className="space-y-12">
                            <div className="space-y-6">
                                <span className="text-xs font-bold uppercase tracking-[0.4em] text-primary">The Connected Operating System</span>
                                <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-foreground leading-[0.85]">
                                    One System. <br /> <span className="text-primary italic">Total Inevitability.</span>
                                </h2>
                                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light">
                                    Fragmentation is the enemy of excellence. We bridge the gap between private ambition and institutional reality.
                                </p>
                            </div>

                            <div className="space-y-6">
                                {[
                                    { title: "Layer 1: School OS", desc: "The technical backbone for modern operations." },
                                    { title: "Layer 2: Parent Network", desc: "The verified bridge between school and home." },
                                    { title: "Layer 3: Global Visibility", desc: "Making African schools discoverable to the world." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-6 items-start group">
                                        <div className="text-4xl font-bold text-muted-foreground/30 group-hover:text-primary transition-colors">0{i + 1}</div>
                                        <div className="space-y-2">
                                            <h4 className="text-2xl font-bold tracking-tight">{item.title}</h4>
                                            <p className="text-muted-foreground leading-relaxed font-light">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="pt-8">
                                <Button asChild size="xl" className="rounded-full shadow-2xl">
                                    <Link href="/technology">Explore the Layers <ArrowRight className="ml-3" /></Link>
                                </Button>
                            </div>
                        </div>
                        <div className="relative aspect-square lg:aspect-[4/5] w-full bg-zinc-950 rounded-[4rem] overflow-hidden shadow-[0_0_100px_rgba(0,71,171,0.15)] ring-1 ring-white/5 group">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                            <div className="absolute inset-0 flex items-center justify-center text-zinc-800 font-mono text-sm uppercase tracking-[0.3em]">
                                Architecture Visualizer
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* CAMPAIGN TEASER */}
            <Section intensity="none" fullWidth className="bg-black text-white py-40">
                <Container>
                    <div className="max-w-5xl mx-auto text-center space-y-12">
                        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-white/10 bg-white/5 text-xs font-bold uppercase tracking-[0.5em] text-zinc-400">
                            Active Initiative
                        </div>
                        <h2 className="text-6xl md:text-[10rem] font-bold tracking-tighter leading-[0.8] text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-600">
                            Digital 100.
                        </h2>
                        <p className="text-2xl md:text-4xl text-zinc-400 max-w-3xl mx-auto leading-tight font-light">
                            100 schools selected for infrastructure transformation. <br />
                            <span className="text-white font-medium">Is your school ready to be seen?</span>
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-8 pt-10">
                            <Button asChild size="xl" variant="premium" className="rounded-full px-16 text-xl">
                                <Link href="/campaigns/digital-100">Apply to Cohort</Link>
                            </Button>
                            <Button asChild size="xl" variant="ghost" className="text-zinc-500 hover:text-white transition-colors">
                                <Link href="/campaigns/digital-100">Learn about Inevitability</Link>
                            </Button>
                        </div>
                    </div>
                </Container>
            </Section>

            <Footer />
        </main>
    );
}
