"use client";

import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { FileQuestion, ArrowLeft } from "lucide-react";

export default function NotFound() {
    return (
        <main className="bg-background text-foreground">
            <Navigation />

            <Section className="flex items-center justify-center">
                <Container>
                    <div className="max-w-4xl mx-auto text-center space-y-6 pt-32">
                        {/* Visual Narrative: The missing node */}
                        {/* <div className="relative inline-flex items-center justify-center w-32 h-32 mx-auto">
                            <div className="absolute inset-0 bg-primary/5 rounded-[2rem] blur-2xl animate-pulse" />
                            <div className="relative w-24 h-24 bg-white/50 backdrop-blur-md border border-border/50 rounded-3xl flex items-center justify-center text-primary/50 shadow-2xl">
                                <FileQuestion className="w-12 h-12" />
                            </div>
                        </div> */}

                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-primary/5 border border-primary/10 text-xs font-bold tracking-[0.4em] uppercase text-primary mx-auto">
                                Error 404: Node Missing
                            </div>
                            <h1 className="text-6xl md:text-9xl font-bold tracking-tighter leading-[0.85] text-transparent bg-clip-text bg-gradient-to-b from-foreground to-muted-foreground/50">
                                Out of <br /> <span className="italic">Reach.</span>
                            </h1>
                            <p className="text-xl md:text-3xl text-muted-foreground font-light max-w-2xl mx-auto leading-tight">
                                The protocol you are trying to access does not exist in the current education ledger.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-10">
                            <Button size="xl" className="rounded-full px-12 text-xl shadow-2xl shadow-primary/20" asChild>
                                <Link href="/">
                                    <ArrowLeft className="mr-3 w-6 h-6" /> Return to Core
                                </Link>
                            </Button>
                            <Button variant="ghost" size="xl" className="text-muted-foreground hover:text-foreground transition-colors" asChild>
                                <Link href="/manifesto">Strategic Manifesto</Link>
                            </Button>
                        </div>

                        {/* Subtle Diagnostic Protocol */}
                        <div className="pt-24 opacity-20 hidden md:block">
                            <div className="flex justify-center gap-12 font-mono text-[10px] uppercase tracking-[0.5em] text-muted-foreground">
                                <span>Architecture: EdComrade OS</span>
                                <span>Status: Incomplete Request</span>
                                <span>Trace: 0x404_NOT_FOUND</span>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            <Footer />
        </main>
    );
}
