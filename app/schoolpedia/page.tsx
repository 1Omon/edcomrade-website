import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { Search, MapPin, BadgeCheck, ExternalLink, ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Schoolpedia | The Search Engine for Ghanaian Schools",
    description:
        "Find, compare, and verify the best schools in Ghana. The official directory for trust-verified educational institutions.",
};

export default function SchoolpediaPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navigation />

            {/* Hero — The Record of Truth */}
            <Section className="min-[90vh] flex items-center overflow-hidden">
                <Container>
                    <div className="max-w-5xl mx-auto text-center space-y-12 py-32">
                        {/* <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-primary/5 border border-primary/10 text-xs font-bold tracking-[0.4em] uppercase text-primary mx-auto">
                            The Ecosystem Ledger: Schoolpedia
                        </div> */}
                        <h1 className="text-5xl md:text-9xl font-bold tracking-tighter leading-[0.85] text-transparent bg-clip-text bg-gradient-to-b from-foreground to-muted-foreground/50">
                            The Record <br /> <span className="text-primary italic">of Truth.</span>
                        </h1>
                        <p className="text-xl md:text-4xl text-muted-foreground font-light max-w-4xl mx-auto leading-tight">
                            Fragmentation is the enemy of trust. Schoolpedia is the verified ledger for Ghanaian education, making excellence visible and discoverable.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-6">
                            <Button size="xl" className="rounded-full px-12 text-xl shadow-2xl shadow-primary/20" asChild>
                                <Link href="https://schoolpedia.edcomrade.com" target="_blank">Launch Schoolpedia <ExternalLink className="ml-2 w-5 h-5" /></Link>
                            </Button>
                            <Button variant="outline" size="xl" className="rounded-full px-12 text-xl" asChild>
                                <Link href="/schools">I own a school</Link>
                            </Button>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Value Proposition */}
            <Section intensity="soft" className="py-24 border-y border-border/50">
                <Container className="text-center">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-20">Why parents trust Schoolpedia</h2>

                    <div className="grid md:grid-cols-3 gap-12">
                        <div className="space-y-4">
                            <div className="w-16 h-16 mx-auto bg-background rounded-2xl flex items-center justify-center shadow-sm border border-border">
                                <BadgeCheck className="w-8 h-8 text-green-500" />
                            </div>
                            <h3 className="text-xl font-bold">Verified Data</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                No more "hearing from a friend". We verify facilities, fees, and results directly with school administration.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="w-16 h-16 mx-auto bg-background rounded-2xl flex items-center justify-center shadow-sm border border-border">
                                <MapPin className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold">Location Based</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Find the best schools in your specific neighborhood. Whether it's East Legon, Bantama, or Takoradi.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="w-16 h-16 mx-auto bg-background rounded-2xl flex items-center justify-center shadow-sm border border-border">
                                <ExternalLink className="w-8 h-8 text-secondary" />
                            </div>
                            <h3 className="text-xl font-bold">Direct Admissions</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Like what you see? Book a tour or apply for admission directly through the platform.
                            </p>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* CTA for Schools */}
            <Section id="contribute" className="py-24">
                <Container>
                    <div className="max-w-5xl mx-auto bg-foreground text-white rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -mr-12 -mt-12"></div>

                        <div className="relative z-10 space-y-6">
                            <h2 className="text-3xl md:text-5xl font-bold">Is your school missing?</h2>
                            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                                Over 5,000 parents visit Schoolpedia every month looking for schools like yours. Don't be invisible.
                            </p>
                            <div className="pt-8">
                                <Button size="xl" variant="secondary" className="rounded-full px-12" asChild>
                                    <Link
                                        href="https://schoolpedia.edcomrade.com/contribute"
                                        target="_blank"
                                    >
                                        Get Listed on Schoolpedia
                                        <ArrowRight className="ml-3 w-5 h-5" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            <Footer />
        </main>
    );
}
