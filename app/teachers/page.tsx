import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import Link from "next/link";
import Image from "next/image";
import {
    BookOpen,
    Calendar,
    Users,
    Award,
    ArrowRight,
    TrendingUp,
    BrainCircuit,
    GraduationCap
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "For Teachers | EdComrade",
    description:
        "Empowering African educators with digital tools. Automate grading, track attendance, and connect with a continent-wide community of peers.",
};

export default function TeachersPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navigation />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6 lg:px-8 overflow-hidden">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8 relative z-10">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20">
                            <GraduationCap className="w-4 h-4" />
                            <span className="font-medium text-sm">The Teacher's Companion</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-tight">
                            Teach. Inspire. <br />
                            <span className="font-bold text-primary">Automate the rest.</span>
                        </h1>

                        <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                            You became a teacher to shape minds, not to fill out paperwork.
                            EdComrade gives you your weekends back by handling the administrative heavy lifting.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <Link
                                href="#tools"
                                className="bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-medium hover:bg-primary/90 transition-opacity inline-flex items-center gap-2"
                            >
                                Explore Tools
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="relative h-[500px] w-full bg-muted rounded-3xl overflow-hidden shadow-2xl skew-y-3">
                            <Image
                                src="/african-teacher-tablet.jpeg"
                                alt="Teacher using digital tools in classroom"
                                fill
                                className="object-cover"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div className="absolute bottom-6 left-6 text-white p-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden">
                                        <Image src="/teacher-profile.jpg" alt="Teacher" width={48} height={48} className="object-cover" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-lg">Madam Sarah</p>
                                        <p className="text-sm opacity-80">Saved 12 hours this week</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Toolkit */}
            <section id="tools" className="py-24 bg-muted/30">
                <div className="max-w-6xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-light mb-6">Your Digital Assistant</h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            A suite of tools designed specifically for the African classroom context.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <BookOpen className="w-8 h-8" />,
                                title: "Smart Lesson Plans",
                                desc: "Access a library of GES-compliant lesson plans. Customize them in minutes instead of writing from scratch."
                            },
                            {
                                icon: <TrendingUp className="w-8 h-8" />,
                                title: "Instant Grading",
                                desc: "Record assessment scores once and let the system calculate totals, positions, and report card remarks automatically."
                            },
                            {
                                icon: <Calendar className="w-8 h-8" />,
                                title: "One-Tap Attendance",
                                desc: "Mark class register in seconds on your phone. The system automatically notifies parents of absentees."
                            },
                            {
                                icon: <BrainCircuit className="w-8 h-8" />,
                                title: "AI Question Generator",
                                desc: "Generate quizzes and exam questions based on your syllabus topics instantly using our AI engine."
                            },
                            {
                                icon: <Users className="w-8 h-8" />,
                                title: "Parent Connect",
                                desc: "Send broadcast messages to your class parents for announcements or homework reminders without sharing your number."
                            },
                            {
                                icon: <Award className="w-8 h-8" />,
                                title: "Certification",
                                desc: "Earn digital badges and certificates for your proficiency in digital teaching tools to boost your CV."
                            }
                        ].map((item, i) => (
                            <div key={i} className="p-8 rounded-2xl bg-background border border-border hover:border-primary/50 hover:shadow-lg transition-all group">
                                <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-medium mb-3">{item.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Community CTA */}
            <section className="py-24 px-6 lg:px-8">
                <div className="max-w-5xl mx-auto bg-primary rounded-3xl p-12 lg:p-20 text-center text-primary-foreground relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -mr-20 -mt-20"></div>

                    <div className="relative z-10 space-y-8">
                        <h2 className="text-4xl md:text-5xl font-bold">Join the Teachers Network</h2>
                        <p className="text-xl max-w-2xl mx-auto opacity-90">
                            Connect with over 15,000 educators across the continent. Share resources, discuss challenges, and grow your career together.
                        </p>
                        <button className="bg-white text-primary px-10 py-4 rounded-full text-lg font-bold hover:bg-secondary hover:text-secondary-foreground transition-all">
                            Join Community for Free
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
