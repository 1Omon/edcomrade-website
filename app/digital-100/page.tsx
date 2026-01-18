import { MinimalNav } from "@/components/minimal-nav";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { Trophy, Check, ArrowRight, Star } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "The Digital 100 | EdComrade",
    description:
        "Join the ranks of the 100 most forward-thinking schools in the country. A prestigious initiative to modernize education across the continent.",
};

export default function Digital100Page() {
    return (
        <main className="min-h-screen bg-black text-white">
            <MinimalNav />

            {/* Hero */}
            <section className="relative pt-32 pb-24 px-6 overflow-hidden">
                {/* Ambient Background */}
                <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-primary/50 to-transparent opacity-50"></div>
                <div className="absolute top-20 right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse-slow"></div>

                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-secondary/50 bg-secondary/10 text-secondary mb-8">
                        <Trophy className="w-4 h-4" />
                        <span className="font-bold tracking-wider text-sm uppercase">Invitation Only</span>
                    </div>

                    <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-tight">
                        The Digital <span className="text-secondary">100</span>
                    </h1>

                    <p className="text-xl md:text-3xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
                        We are selecting 100 visionary schools to pioneer the future of education in Ghana. <br />
                        <span className="text-white font-medium">Will yours be one of them?</span>
                    </p>

                    <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center">
                        <Link href="#apply" className="bg-secondary text-black px-10 py-5 rounded-full text-xl font-bold hover:scale-105 transition-transform flex items-center justify-center gap-3">
                            Apply for the Cohort
                            <ArrowRight className="w-6 h-6" />
                        </Link>
                        <Link href="#benefits" className="border border-white/30 px-10 py-5 rounded-full text-xl font-medium hover:bg-white/10 transition-colors">
                            View Benefits
                        </Link>
                    </div>
                </div>
            </section>

            {/* Value Prop */}
            <section id="benefits" className="py-24 px-6 border-t border-white/10 bg-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-12">
                        {[
                            {
                                title: "Free Infrastructure",
                                desc: "Selected schools receive 12 months of the full EdComrade Operating System at zero cost to modernize their operations."
                            },
                            {
                                title: "National Recognition",
                                desc: "Be featured in our nationwide media campaign celebrating the pioneers of digital education."
                            },
                            {
                                title: "Hardware Support",
                                desc: "Exclusive access to device financing and hardware partnerships for your computer labs."
                            }
                        ].map((item, i) => (
                            <div key={i} className="space-y-4 p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-secondary/50 transition-colors">
                                <div className="w-12 h-12 rounded-full bg-secondary text-black flex items-center justify-center">
                                    <Star className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold">{item.title}</h3>
                                <p className="text-gray-400 leading-relaxed text-lg">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Application Form Placeholder */}
            <section id="apply" className="py-24 px-6">
                <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-white/10">
                    <div className="text-center mb-10">
                        <h2 className="text-4xl font-bold mb-4">Nominate Your School</h2>
                        <p className="text-gray-300">
                            Applications are reviewed on a rolling basis. Early submissions are prioritized.
                        </p>
                    </div>

                    <form className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-400">School Name</label>
                                <input type="text" className="w-full bg-black/50 border border-white/20 rounded-lg p-3 text-white focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-colors" placeholder="e.g. Royal Academy" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-400">School Location</label>
                                <input type="text" className="w-full bg-black/50 border border-white/20 rounded-lg p-3 text-white focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-colors" placeholder="e.g. East Legon" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-400">Administrator Name</label>
                            <input type="text" className="w-full bg-black/50 border border-white/20 rounded-lg p-3 text-white focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-colors" placeholder="Your full name" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-400">Best Contact Number</label>
                            <input type="tel" className="w-full bg-black/50 border border-white/20 rounded-lg p-3 text-white focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-colors" placeholder="+233..." />
                        </div>

                        <button type="button" className="w-full bg-secondary text-black font-bold text-lg py-4 rounded-xl hover:bg-white transition-colors mt-4">
                            Submit Nomination
                        </button>

                        <p className="text-xs text-center text-gray-500">
                            By submitting, you agree to being contacted by the EdComrade team for verification.
                        </p>
                    </form>
                </div>
            </section>

            <Footer />
        </main>
    );
}
