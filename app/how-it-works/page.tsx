"use client";

import { useRef } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle2, Zap, Smartphone, Globe, ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { GlassmorphismCard } from "@/components/glassmorphism-card";
import { FAQSection } from "@/components/faq-section";
import { Magnetic } from "@/components/ui/magnetic";

export default function HowItWorksPage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <main className="min-h-screen bg-background selection:bg-primary/20">
            <Navigation />

            {/* Hero — The Connected Ecosystem */}
            <Section className="min-h-[90vh] flex items-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,_oklch(0.40_0.16_260_/_0.05),_transparent_70%)]" />
                <Container className="relative z-10">
                    <div className="max-w-5xl mx-auto text-center space-y-12 pt-48">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="text-6xl md:text-[10rem] font-bold tracking-tighter leading-[0.85] text-transparent bg-clip-text bg-gradient-to-b from-foreground to-muted-foreground/50">
                                How it <br /> <span className="text-primary italic">Works.</span>
                            </h1>
                        </motion.div>
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-xl md:text-4xl text-muted-foreground font-light max-w-4xl mx-auto leading-tight"
                        >
                            EdComrade isn&apos;t just one app. It&apos;s a connected ecosystem of three tools designed to solve the three biggest problems private schools face.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="pt-10"
                        >
                            <Button size="xl" className="rounded-full px-12 h-16 text-lg" asChild>
                                <Link href="#ecosystem">Explore the Ecosystem <ArrowRight className="ml-2 w-5 h-5" /></Link>
                            </Button>
                        </motion.div>
                    </div>
                </Container>
            </Section>

            {/* The 3 Tools — Interactive Stepper */}
            <div id="ecosystem" ref={containerRef} className="relative py-20 lg:py-40">
                {/* Vertical Progress Line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border/50 -translate-x-1/2 hidden lg:block" />
                <motion.div 
                    className="absolute left-1/2 top-0 bottom-0 w-1 bg-primary origin-top -translate-x-1/2 hidden lg:block"
                    style={{ scaleY }}
                />

                {/* TOOL 1: THE ERP */}
                <Section intensity="none" className="z-10 relative mb-32 lg:mb-64">
                    <Container>
                        <div className="grid lg:grid-cols-2 gap-24 items-center">
                            <motion.div 
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="order-2 lg:order-1"
                            >
                                <GlassmorphismCard className="p-10 md:p-16 border-primary/20 shadow-primary/5">
                                    <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-8">Layer 1</div>
                                    <div className="flex items-center gap-6 mb-8">
                                        <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center text-white shadow-xl shadow-primary/20">
                                            <Zap className="w-8 h-8" />
                                        </div>
                                        <h3 className="text-4xl font-bold">School ERP</h3>
                                    </div>
                                    <p className="text-xl text-muted-foreground mb-10 leading-relaxed font-light">The backbone for your staff. Student records, automated fee billing, grading, and staff management — all in one secure system.</p>
                                    <ul className="space-y-4">
                                        {["Institutional Control", "Financial Transparency", "Staff Accountability"].map((item, i) => (
                                            <li key={i} className="flex gap-4 items-center text-lg font-medium">
                                                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                                    <CheckCircle2 className="w-4 h-4" />
                                                </div>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </GlassmorphismCard>
                            </motion.div>
                            <motion.div 
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="order-1 lg:order-2"
                            >
                                <h2 className="text-4xl md:text-7xl font-bold mb-8 leading-tight tracking-[calc(var(--tracking-tighter)*2)]">It keeps you <br /><span className="text-primary italic">Organised.</span></h2>
                                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light">
                                    No more lost records or messy paperwork. Your staff works on a single system that keeps everything in its right place.
                                </p>
                            </motion.div>
                        </div>
                    </Container>
                </Section>

                {/* TOOL 2: PARENTAIDE */}
                <Section intensity="none" className="z-10 relative mb-32 lg:mb-64">
                    <Container>
                        <div className="grid lg:grid-cols-2 gap-24 items-center">
                            <motion.div 
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="space-y-8"
                            >
                                <h2 className="text-4xl md:text-7xl font-bold leading-tight tracking-tighter">It keeps parents <br /><span className="text-secondary italic">Connected.</span></h2>
                                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light">
                                    Parents see their children&apos;s grades, attendance, and fee balances in real time on their phones. No more chasing for updates.
                                </p>
                            </motion.div>
                            <motion.div 
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                <GlassmorphismCard className="p-10 md:p-16 border-secondary/20 shadow-secondary/5">
                                    <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-secondary/10 text-secondary-foreground text-xs font-bold uppercase tracking-widest mb-8">Layer 2</div>
                                    <div className="flex items-center gap-6 mb-8">
                                        <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center text-white shadow-xl shadow-secondary/20">
                                            <Smartphone className="w-8 h-8" />
                                        </div>
                                        <h3 className="text-4xl font-bold">ParentAide</h3>
                                    </div>
                                    <p className="text-xl text-muted-foreground mb-10 leading-relaxed font-light">The app for your parents. A direct, clear window into their children&apos;s education and a simple way to stay involved.</p>
                                    <ul className="space-y-4">
                                        {["Real-time Attendance", "Digital Fee Receipts", "Verified Communications"].map((item, i) => (
                                            <li key={i} className="flex gap-4 items-center text-lg font-medium">
                                                <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                                                    <CheckCircle2 className="w-4 h-4" />
                                                </div>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </GlassmorphismCard>
                            </motion.div>
                        </div>
                    </Container>
                </Section>

                {/* TOOL 3: SCHOOLPEDIA */}
                <Section intensity="none" className="z-10 relative">
                    <Container>
                        <div className="grid lg:grid-cols-2 gap-24 items-center">
                            <motion.div 
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="order-2 lg:order-1"
                            >
                                <GlassmorphismCard className="p-10 md:p-16 bg-zinc-950/80 border-white/10 shadow-white/5">
                                    <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 text-white/60 text-xs font-bold uppercase tracking-widest mb-8">Layer 3</div>
                                    <div className="flex items-center gap-6 mb-8">
                                        <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-black shadow-xl shadow-white/20">
                                            <Globe className="w-8 h-8" />
                                        </div>
                                        <h3 className="text-4xl font-bold text-white">Schoolpedia</h3>
                                    </div>
                                    <p className="text-xl text-zinc-400 mb-10 leading-relaxed font-light">The platform for the public. A verified directory where parents discover, compare, and trust the best schools in Ghana.</p>
                                    <ul className="space-y-4">
                                        {["SEO Visibility", "Verified Profiles", "Growth in Admissions"].map((item, i) => (
                                            <li key={i} className="flex gap-4 items-center text-lg font-medium text-zinc-300">
                                                <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-white">
                                                    <CheckCircle2 className="w-4 h-4" />
                                                </div>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </GlassmorphismCard>
                            </motion.div>
                            <motion.div 
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="order-1 lg:order-2"
                            >
                                <h2 className="text-4xl md:text-7xl font-bold mb-8 leading-tight tracking-tighter">It keeps you <br /><span className="text-foreground italic">Found.</span></h2>
                                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light">
                                    Being found on Google and having a verified listing on Schoolpedia builds instant trust with prospective parents.
                                </p>
                            </motion.div>
                        </div>
                    </Container>
                </Section>
            </div>

            {/* Entry Points — Two Ways to Join */}
            <Section intensity="soft" className="py-40 bg-zinc-50 border-t border-border/50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 blur-[100px] rounded-full" />
                <Container>
                    <div className="max-w-4xl mx-auto text-center mb-24 space-y-6">
                        <span className="text-xs font-bold uppercase tracking-[0.4em] text-primary">Your Entry Point</span>
                        <h2 className="text-5xl md:text-[8rem] font-bold tracking-tighter text-foreground leading-[0.85]">Two ways <br /> to start.</h2>
                        <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">Whether you need total digital transformation or a simple way to fix your management records.</p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        <motion.div 
                            whileHover={{ y: -10 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <GlassmorphismCard className="p-12 md:p-16 h-full flex flex-col space-y-8 bg-white/40">
                                <h4 className="text-3xl font-bold tracking-tight">The Pioneers Programme</h4>
                                <p className="text-lg text-muted-foreground font-light leading-relaxed">For schools that want to focus on management first. Get 6 months of free ERP access, full training, and ongoing support for your staff.</p>
                                <div className="flex-grow" />
                                <Magnetic>
                                    <Button asChild size="xl" variant="outline" className="rounded-full px-12 h-16 text-lg border-primary/20 hover:bg-primary/5 w-full">
                                        <Link href="/schools#get-started">Apply for Pioneers</Link>
                                    </Button>
                                </Magnetic>
                            </GlassmorphismCard>
                        </motion.div>
                        <motion.div 
                            whileHover={{ y: -10 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="relative"
                        >
                            <div className="absolute -top-4 -right-4 z-20">
                                <div className="bg-primary text-white text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-full shadow-lg">Recommended</div>
                            </div>
                            <GlassmorphismCard className="p-12 md:p-16 h-full flex flex-col space-y-8 bg-black text-white shadow-xl shadow-primary/10 border-white/10">
                                <h4 className="text-3xl font-bold tracking-tight text-white">The Digital 100</h4>
                                <p className="text-lg text-zinc-400 font-light leading-relaxed">For schools ready for a complete digital overhaul. Professional photography, custom website, Google optimization, and ERP setup — all for a flat fee.</p>
                                <div className="flex-grow" />
                                <Magnetic>
                                    <Button asChild size="xl" variant="premium" className="rounded-full px-12 h-16 text-lg w-full">
                                        <Link href="/campaigns/digital-100">Apply for Digital 100</Link>
                                    </Button>
                                </Magnetic>
                            </GlassmorphismCard>
                        </motion.div>
                    </div>
                </Container>
            </Section>

            {/* FAQ Segment */}
            <FAQSection />

            <Footer />
        </main>
    );
}
