import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { Search, MapPin, BadgeCheck, ExternalLink, ArrowRight } from "lucide-react";
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

            {/* Hero */}
            <section className="relative pt-32 pb-24 px-6 lg:px-8 bg-black text-white overflow-hidden">
                {/* Abstract Abstract Background */}
                <div className="absolute top-0 right-0 w-full h-full opacity-20 pointer-events-none">
                    <div className="absolute right-0 top-20 w-96 h-96 bg-primary/40 rounded-full blur-3xl"></div>
                    <div className="absolute left-0 bottom-0 w-80 h-80 bg-secondary/20 rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-gray-300 mb-4">
                        <BadgeCheck className="w-4 h-4 text-secondary" />
                        <span className="text-sm font-medium">The Trusted School Directory</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
                        Find the perfect school <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-white">
                            with zero stress.
                        </span>
                    </h1>

                    <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
                        Schoolpedia is Ghana's first verified search engine for parents.
                        Compare fees, facilities, and academic performance in one place.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
                        <Link
                            href="https://schoolpedia.edcomrade.com"
                            target="_blank"
                            className="bg-primary text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-primary/90 transition-all flex items-center justify-center gap-3 w-full sm:w-auto shadow-lg shadow-primary/20"
                        >
                            <Search className="w-5 h-5" />
                            Launch Schoolpedia
                            <ExternalLink className="w-4 h-4 opacity-70" />
                        </Link>
                        <Link
                            href="/schools"
                            className="px-8 py-4 rounded-full text-lg font-medium border border-white/20 hover:bg-white/10 transition-colors w-full sm:w-auto"
                        >
                            I own a school
                        </Link>
                    </div>
                </div>
            </section>

            {/* Value Proposition */}
            <section className="py-24 px-6 lg:px-8 bg-muted/30">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-light mb-16">Why parents trust Schoolpedia</h2>

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
                </div>
            </section>

            {/* CTA for Schools */}
            <section className="py-24 px-6 lg:px-8 bg-white border-t border-gray-100">
                <div className="max-w-5xl mx-auto bg-black text-white rounded-[2rem] p-8 md:p-16 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -mr-12 -mt-12"></div>

                    <div className="relative z-10 space-y-6">
                        <h2 className="text-3xl md:text-5xl font-bold">Is your school missing?</h2>
                        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                            Over 5,000 parents visit Schoolpedia every month looking for schools like yours. Don't be invisible.
                        </p>
                        <div className="pt-4">
                            <Link
                                href="https://schoolpedia.edcomrade.com/contribute"
                                target="_blank"
                                className="inline-flex items-center gap-2 bg-secondary text-black px-8 py-3 rounded-full font-bold hover:bg-white transition-colors"
                            >
                                Get Listed on Schoolpedia
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
