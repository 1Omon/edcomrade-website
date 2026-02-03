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

            {/* Hero — Simple Steps to Success */}
            <Section className="min-[90vh] flex items-center">
                <Container>
                    <div className="max-w-5xl mx-auto text-center space-y-12 pt-48">
                        <h1 className="text-5xl md:text-9xl font-bold tracking-tighter leading-[0.85] text-transparent bg-clip-text bg-gradient-to-b from-foreground to-muted-foreground/50">
                            A Simple <br /> <span className="italic">Way.</span>
                        </h1>
                        <p className="text-xl md:text-4xl text-muted-foreground font-light max-w-4xl mx-auto leading-tight">
                            Education doesn't have to be complicated. EdComrade helps schools get found, stay organized, and build lasting trust with parents.
                        </p>
                    </div>
                </Container>
            </Section>

            {/* The 3 Steps - Simple Path */}
            <div className="relative py-20">
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
                                    <h3 className="text-3xl font-bold mb-4">Be Found</h3>
                                    <p className="text-lg text-muted-foreground mb-6">Let parents discover you online.</p>
                                    <ul className="space-y-3">
                                        {["Verified School Profile", "Easy-to-find on Google", "Showcase Your Best Work"].map((item, i) => (
                                            <li key={i} className="flex gap-3 items-center text-muted-foreground">
                                                <CheckCircle2 className="w-5 h-5 text-primary" /> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="order-1 md:order-2 md:pl-12">
                                <div className="sticky top-32">
                                    <h2 className="text-4xl font-bold mb-6">It starts with being <span className="text-primary">Seen</span>.</h2>
                                    <p className="text-xl text-muted-foreground leading-relaxed max-w-md">
                                        Parents can't choose your school if they can't find you. We put your school on the map with information they can trust.
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
                                    <h2 className="text-4xl font-bold mb-6">It works through <span className="text-primary">Getting Organized</span>.</h2>
                                    <p className="text-xl text-muted-foreground leading-relaxed max-w-md ml-auto">
                                        Once students join, our system takes over the hard work. It manages fees, grades, and staff without the messy paperwork.
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div className="bg-card border border-border rounded-3xl p-8 shadow-xl w-full max-w-md hover:-translate-y-2 transition-transform duration-500">
                                    <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary-foreground mb-6">
                                        <span className="text-3xl font-bold">2</span>
                                    </div>
                                    <h3 className="text-3xl font-bold mb-4">Stay Organized</h3>
                                    <p className="text-lg text-muted-foreground mb-6">The heart of your school.</p>
                                    <ul className="space-y-3">
                                        {["Secure Student Records", "Simple Fee Tracking", "Everything in One Place"].map((item, i) => (
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
                                    <h3 className="text-3xl font-bold mb-4">Keep Parents Happy</h3>
                                    <p className="text-lg text-primary-foreground/80 mb-6">Build lasting connections.</p>
                                    <ul className="space-y-3">
                                        {["Direct News to Phones", "Digital Fee Receipts", "Better Communication"].map((item, i) => (
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
                                        When parents are happy, your school grows. ParentAide keeps them informed, involved, and loyal to your school.
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
                    <h2 className="text-4xl md:text-5xl font-bold">Ready to Move Forward?</h2>
                    <p className="text-xl opacity-90">
                        Join the schools that are no longer just surviving, but truly flourishing.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Button size="xl" variant="default" className="bg-white text-secondary-foreground hover:bg-white/90" asChild>
                            <Link href="/campaigns/digital-100#apply">Get Started Today</Link>
                        </Button>
                    </div>
                </Container>
            </Section>

            <Footer />
        </main>
    );
}
