import { MinimalNav } from "@/components/minimal-nav";
import { Footer } from "@/components/footer";
import Link from "next/link";
import Image from "next/image";
import {
    ArrowRight,
    Shield,
    Bell,
    CreditCard,
    GraduationCap,
    Smartphone,
    Clock,
    Heart,
    CheckCircle2
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "For Parents | EdComrade",
    description:
        "Experience true peace of mind with EdComrade. Real-time academic updates, instant notifications, and secure fee payments for modern African parents.",
};

export default function ParentsPage() {
    return (
        <main className="min-h-screen bg-background">
            <MinimalNav />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6 lg:px-8 overflow-hidden">
                <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8 relative z-10">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary border border-secondary/20">
                            <Heart className="w-4 h-4 fill-current" />
                            <span className="font-medium text-sm">Parent Experience</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-tight">
                            Know more. <br />
                            <span className="text-secondary font-normal">Worry less.</span>
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                            The days of wondering how your child is doing are over.
                            EdComrade connects you directly to your child's classroom, giving you real-time visibility into their growth, safety, and success.
                        </p>
                        <div className="flex flex-wrap gap-4 pt-4">
                            <Link
                                href="#features"
                                className="bg-secondary text-secondary-foreground px-8 py-4 rounded-full text-lg font-medium hover:shadow-lg hover:scale-105 transition-all inline-flex items-center gap-2"
                            >
                                See How It Works
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                    <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-border">
                        <Image
                            src="/african-parent-smiling-while-checking-child-s-grad.jpeg"
                            alt="Happy parent checking student progress on phone"
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute bottom-6 left-6 right-6 bg-background/95 backdrop-blur-md p-6 rounded-2xl border border-border shadow-lg">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                    <Bell className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="font-medium text-sm text-muted-foreground">Just Now</p>
                                    <p className="font-semibold text-foreground">Kwame arrived at school safely (7:45 AM)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Signals */}
            <section className="py-12 bg-muted/30 border-y border-border/50">
                <div className="max-w-6xl mx-auto px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        {[
                            { label: "Used by Parents", value: "50,000+" },
                            { label: "Daily Updates", value: "1.2 Million" },
                            { label: "Partner Schools", value: "500+" },
                        ].map((stat, i) => (
                            <div key={i}>
                                <div className="text-4xl font-light text-primary mb-2">{stat.value}</div>
                                <div className="text-muted-foreground font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Core Benefits */}
            <section id="features" className="py-24 px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-light mb-6">Your child's education, in your pocket</h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            We've built the tools focused parents have been asking for. Simple, secure, and always accessible.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Smartphone className="w-8 h-8" />,
                                title: "Instant Updates",
                                desc: "Get notified the moment attendance is marked, homework is assigned, or grades are posted. No more surprises at end of term."
                            },
                            {
                                icon: <CreditCard className="w-8 h-8" />,
                                title: "Easy Fee Payments",
                                desc: "Pay school fees directly via Mobile Money (MTN, Vodafone, AT) instantly from the app. Get digital receipts immediately."
                            },
                            {
                                icon: <GraduationCap className="w-8 h-8" />,
                                title: "Academic Tracking",
                                desc: "View historical performance trends. Identify subjects where your child excels and where they might need extra support."
                            },
                            {
                                icon: <Shield className="w-8 h-8" />,
                                title: "Bank-Grade Security",
                                desc: "Your child's data and your payment information are protected by enterprise-grade encryption and security protocols."
                            },
                            {
                                icon: <Clock className="w-8 h-8" />,
                                title: "Attendance History",
                                desc: "Review daily arrival and departure times. Know exactly when your child is in the safe custody of the school."
                            },
                            {
                                icon: <Bell className="w-8 h-8" />,
                                title: "Direct Communication",
                                desc: "Message teachers and administrators directly through the secure portal without exchanging personal phone numbers."
                            }
                        ].map((item, i) => (
                            <div key={i} className="p-8 rounded-3xl border border-border hover:border-secondary/50 hover:shadow-lg transition-all bg-background group">
                                <div className="w-14 h-14 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-medium mb-3">{item.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-6 lg:px-8 bg-primary text-primary-foreground">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-light mb-8">
                        Does your child's school use EdComrade?
                    </h2>
                    <p className="text-xl opacity-90 mb-12 leading-relaxed max-w-2xl mx-auto">
                        Give your child the advantage of a digital education.
                        Refer their school today, and we'll help them get started with the modern tools you deserve.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/#contact"
                            className="bg-white text-primary px-8 py-4 rounded-full text-lg font-medium hover:bg-secondary hover:text-secondary-foreground transition-colors"
                        >
                            Refer a School
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
