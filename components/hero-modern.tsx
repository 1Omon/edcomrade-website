"use client";

import Link from "next/link";
import { ArrowRight, Play, Globe, ShieldCheck, Zap } from "lucide-react";
import { CONTENT_BY_ROLE } from "@/lib/content-constants";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

interface HeroModernProps {
    userRole: string;
}

export default function HeroModern({ userRole }: HeroModernProps) {
    const role = userRole as keyof typeof CONTENT_BY_ROLE || "public";
    const content = CONTENT_BY_ROLE[role].hero;

    return (
        <section className="relative min-h-[95vh] flex items-center overflow-hidden bg-background">
            {/* Infrastructure Visual Layer */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_oklch(0.40_0.16_260_/_0.08),_transparent_60%)]" />
                <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent z-10" />

                {/* Visual Metaphor: Modern African Education */}
                <div className="absolute top-0 right-0 w-2/3 h-full grayscale-[0.2] opacity-40 hover:grayscale-0 transition-all duration-1000">
                    <img
                        src="/modern-african-classroom-with-students-using-table.jpeg"
                        alt="Infrastructure for Excellence"
                        className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent via-background/40 to-background" />
                </div>
            </div>

            <Container className="relative z-20 pt-32 pb-20">
                <div className="max-w-4xl space-y-12 animate-in fade-in slide-in-from-bottom-12 duration-1000 ease-out">

                    <div className="inline-flex items-center gap-4 px-5 py-2 rounded-full bg-primary/5 border border-primary/10 shadow-sm backdrop-blur-sm group hover:bg-primary/10 transition-colors">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        <span className="text-xs font-bold text-primary uppercase tracking-[0.4em]">
                            {content.badge}
                        </span>
                    </div>

                    <h1 className="text-7xl sm:text-8xl lg:text-[10rem] font-bold tracking-tighter text-foreground leading-[0.85]">
                        {content.title}
                    </h1>

                    <p className="text-2xl md:text-4xl text-muted-foreground leading-tight max-w-2xl font-light">
                        {content.subtitle}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-8 pt-6">
                        <Button size="xl" className="rounded-full px-12 text-xl shadow-2xl shadow-primary/20 group h-16" asChild>
                            <Link href="#contact">
                                {content.ctaPrimary} <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </Button>

                        <Button variant="outline" size="xl" className="rounded-full px-12 text-xl h-16 border-border hover:bg-muted/50" asChild>
                            <Link href="/campaigns/digital-100">
                                {content.ctaSecondary}
                            </Link>
                        </Button>
                    </div>

                    <div className="pt-12 grid grid-cols-2 md:grid-cols-3 gap-12 items-center">
                        <div className="flex items-center gap-3 text-muted-foreground group">
                            <div className="w-10 h-10 rounded-xl bg-muted/50 flex items-center justify-center group-hover:text-primary transition-colors">
                                <ShieldCheck className="w-5 h-5" />
                            </div>
                            <span className="text-sm font-semibold tracking-tight">Verified Trust</span>
                        </div>
                        <div className="flex items-center gap-3 text-muted-foreground group">
                            <div className="w-10 h-10 rounded-xl bg-muted/50 flex items-center justify-center group-hover:text-primary transition-colors">
                                <Globe className="w-5 h-5" />
                            </div>
                            <span className="text-sm font-semibold tracking-tight">Global Visibility</span>
                        </div>
                        <div className="hidden md:flex items-center gap-3 text-muted-foreground group">
                            <div className="w-10 h-10 rounded-xl bg-muted/50 flex items-center justify-center group-hover:text-primary transition-colors">
                                <Zap className="w-5 h-5" />
                            </div>
                            <span className="text-sm font-semibold tracking-tight">Rapid Deployment</span>
                        </div>
                    </div>

                </div>
            </Container>

            {/* Subtle Infrastructure Pattern Overlay */}
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-border to-transparent opacity-50" />
        </section>
    );
}
