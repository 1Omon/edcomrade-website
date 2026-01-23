import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata = {
    title: "How It Works | The Connected Ecosystem",
    description: "See how EdComrade connects schools, parents, and the public into one seamless loop of trust and efficiency.",
};

export default function HowItWorksPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navigation />

            {/* Hero */}
            <Section className="pt-40 pb-20">
                <Container>
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide uppercase">
                            The Ecosystem
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
                            It’s not just distinct tools.<br />
                            <span className="text-muted-foreground">It’s a trust loop.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                            Most schools have fragmentation. We give you connection.
                            See how our three systems work together to build a self-reinforcing cycle of growth.
                        </p>
                    </div>
                </Container>
            </Section>

            {/* The 3 Systems - Scroll Telling */}
            <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block" />

                {/* STEP 1: SCHOOLPEDIA */}
                <Section intensity="none" className="z-10 relative">
                    <Container>
                        <div className="grid md:grid-cols-2 gap-16 items-center">
                            <div className="order-2 md:order-1 flex justify-end">
                                <div className="bg-card border border-border rounded-3xl p-8 shadow-xl w-full max-w-md hover:-translate-y-2 transition-transform duration-500">
                                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                                        <span className="text-3xl font-bold">1</span>
                                    </div>
                                    <h3 className="text-3xl font-bold mb-4">Schoolpedia</h3>
                                    <p className="text-lg text-muted-foreground mb-6">The Discovery Engine.</p>
                                    <ul className="space-y-3">
                                        {["Verified School Profile", "SEO & Google Indexing", "Content Management"].map((item, i) => (
                                            <li key={i} className="flex gap-3 items-center text-muted-foreground">
                                                <CheckCircle2 className="w-5 h-5 text-primary" /> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="order-1 md:order-2 md:pl-12">
                                <div className="sticky top-32">
                                    <h2 className="text-4xl font-bold mb-6">It starts with <span className="text-primary">Visibility</span>.</h2>
                                    <p className="text-xl text-muted-foreground leading-relaxed max-w-md">
                                        Parents cannot choose you if they cannot find you. Schoolpedia authenticates your school and puts you on the map.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Container>
                </Section>

                {/* STEP 2: ERP */}
                <Section intensity="soft" className="z-10 relative">
                    <Container>
                        <div className="grid md:grid-cols-2 gap-16 items-center">
                            <div className="md:text-right md:pr-12">
                                <div className="sticky top-32">
                                    <h2 className="text-4xl font-bold mb-6">It works through <span className="text-primary">Efficiency</span>.</h2>
                                    <p className="text-xl text-muted-foreground leading-relaxed max-w-md ml-auto">
                                        Once students enroll, the ERP takes over. It manages fees, academics, and staff without the paperwork chaos.
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div className="bg-card border border-border rounded-3xl p-8 shadow-xl w-full max-w-md hover:-translate-y-2 transition-transform duration-500">
                                    <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary-foreground mb-6">
                                        <span className="text-3xl font-bold">2</span>
                                    </div>
                                    <h3 className="text-3xl font-bold mb-4">The ERP Core</h3>
                                    <p className="text-lg text-muted-foreground mb-6">The Operating Center.</p>
                                    <ul className="space-y-3">
                                        {["Student Records", "Fee Management", "Staff Payroll & Portal"].map((item, i) => (
                                            <li key={i} className="flex gap-3 items-center text-muted-foreground">
                                                <CheckCircle2 className="w-5 h-5 text-secondary" /> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Container>
                </Section>

                {/* STEP 3: PARENTAIDE */}
                <Section intensity="none" className="z-10 relative">
                    <Container>
                        <div className="grid md:grid-cols-2 gap-16 items-center">
                            <div className="order-2 md:order-1 flex justify-end">
                                <div className="bg-primary text-primary-foreground rounded-3xl p-8 shadow-2xl shadow-primary/20 w-full max-w-md hover:-translate-y-2 transition-transform duration-500">
                                    <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-white mb-6">
                                        <span className="text-3xl font-bold">3</span>
                                    </div>
                                    <h3 className="text-3xl font-bold mb-4">ParentAide</h3>
                                    <p className="text-lg text-primary-foreground/80 mb-6">The Trust Builder.</p>
                                    <ul className="space-y-3">
                                        {["Real-time Grade Updates", "Fee Receipts & History", "Direct Teacher Comms"].map((item, i) => (
                                            <li key={i} className="flex gap-3 items-center text-primary-foreground/80">
                                                <CheckCircle2 className="w-5 h-5 text-secondary" /> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="order-1 md:order-2 md:pl-12">
                                <div className="sticky top-32">
                                    <h2 className="text-4xl font-bold mb-6">It grows through <span className="text-primary">Trust</span>.</h2>
                                    <p className="text-xl text-muted-foreground leading-relaxed max-w-md">
                                        Happy parents become your best marketers. ParentAide keeps them informed, involved, and loyal.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Container>
                </Section>
            </div>

            {/* CTA */}
            <Section intensity="strong" className="py-32 text-center">
                <Container className="max-w-3xl space-y-8">
                    <h2 className="text-4xl md:text-5xl font-bold">Ready to close the loop?</h2>
                    <p className="text-xl opacity-90">
                        Join the schools that are no longer just surviving, but thriving.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Button size="xl" variant="default" className="bg-white text-secondary-foreground hover:bg-white/90" asChild>
                            <Link href="#contact">Get Started</Link>
                        </Button>
                    </div>
                </Container>
            </Section>

            <Footer />
        </main>
    );
}
