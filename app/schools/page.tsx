import { MinimalNav } from "@/components/minimal-nav";
import { Footer } from "@/components/footer";
import Link from "next/link";
import Image from "next/image";
import { ROICalculator } from "@/components/conversion/roi-calculator";
import {
    BarChart3,
    Users,
    Megaphone,
    LayoutDashboard,
    CheckCircle2,
    ArrowRight,
    ShieldCheck,
    Zap
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "For Schools | EdComrade",
    description:
        "The Operating System for African Schools. Manage fees, academics, and admissions while growing your brand with our integrated media engine.",
};

export default function SchoolsPage() {
    return (
        <main className="min-h-screen bg-background">
            <MinimalNav />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6 lg:px-8 overflow-hidden bg-primary text-primary-foreground min-h-[90vh] flex items-center">
                {/* Abstract Background */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-[20%] -right-[10%] w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl"></div>
                    <div className="absolute top-[40%] -left-[10%] w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                            <span className="font-medium text-sm text-secondary">The School OS</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
                            Stop Managing Paper. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-white">
                                Start Managing Growth.
                            </span>
                        </h1>

                        <p className="text-xl md:text-2xl text-primary-foreground/80 leading-relaxed max-w-xl font-light">
                            The first platform that combines elite school management software with a powerful media engine to drive enrollment.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <Link
                                href="#roi"
                                className="bg-secondary text-secondary-foreground px-8 py-4 rounded-full text-lg font-bold hover:bg-white hover:text-primary transition-all inline-flex items-center gap-2"
                            >
                                Calculate Your ROI
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link
                                href="#features"
                                className="px-8 py-4 rounded-full text-lg font-medium border border-white/30 hover:bg-white/10 transition-all text-white"
                            >
                                Explore Features
                            </Link>
                        </div>
                    </div>

                    {/* Hero Visual - Dashboard Mockup */}
                    <div className="relative">
                        <div className="relative rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-2">
                            <Image
                                src="/dashboard-mockup.png"
                                alt="EdComrade School Dashboard Interface"
                                width={800}
                                height={600}
                                className="rounded-lg shadow-inner w-full h-auto"
                            />

                            {/* Floating Elements */}
                            <div className="absolute -bottom-8 -left-8 bg-background text-foreground p-6 rounded-2xl shadow-xl border border-border max-w-xs animate-slide-up">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="p-2 bg-green-100 text-green-700 rounded-full">
                                        <BarChart3 className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-muted-foreground font-semibold uppercase">Revenue Recovery</p>
                                        <p className="text-lg font-bold">+15% This Term</p>
                                    </div>
                                </div>
                                <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                                    <div className="h-full w-[85%] bg-green-500 rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Chaos to Control Transformation */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                            From <span className="text-red-500 line-through decoration-2">Chaos</span> to <span className="text-green-600">Control</span>
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            The difference between a struggling school and a top-tier institution isn't just facilities—it's <strong>systems</strong>.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 lg:gap-20 relative">
                        {/* The 'Before' - Chaos */}
                        <div className="space-y-8 relative">
                            <div className="absolute top-0 right-0 -mr-4 -mt-4 bg-red-100 text-red-600 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider transform rotate-3">
                                The Old Way
                            </div>
                            <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100 space-y-6 opacity-80 hover:opacity-100 transition-opacity">
                                <h3 className="text-2xl font-bold text-gray-700">Trapped in Operational Chaos</h3>
                                <ul className="space-y-4">
                                    <li className="flex gap-4 items-start text-gray-600">
                                        <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                                            <span className="text-red-600 font-bold">×</span>
                                        </div>
                                        <p><strong>Manual Systems:</strong> Heaps of paper files, lost records, and hours wasted on tasks that should take seconds.</p>
                                    </li>
                                    <li className="flex gap-4 items-start text-gray-600">
                                        <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                                            <span className="text-red-600 font-bold">×</span>
                                        </div>
                                        <p><strong>Financial Leaks:</strong> 70-85% fee collection rates. No visibility into who owes what until it's too late.</p>
                                    </li>
                                    <li className="flex gap-4 items-start text-gray-600">
                                        <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                                            <span className="text-red-600 font-bold">×</span>
                                        </div>
                                        <p><strong>Invisible Excellence:</strong> Doing great work but losing students to competitors who simply "look" better online.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Arrow separator for mobile/desktop */}
                        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg">
                            <ArrowRight className="w-8 h-8 text-gray-300" />
                        </div>

                        {/* The 'After' - EdComrade */}
                        <div className="space-y-8 relative">
                            <div className="absolute top-0 right-0 -mr-4 -mt-4 bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider transform -rotate-3">
                                The EdComrade Way
                            </div>
                            <div className="p-8 rounded-3xl bg-green-50/50 border border-green-100 space-y-6 shadow-sm">
                                <h3 className="text-2xl font-bold text-primary">A Well-Oiled Machine</h3>
                                <ul className="space-y-4">
                                    <li className="flex gap-4 items-start text-gray-800">
                                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                                            <CheckCircle2 className="w-5 h-5 text-green-600" />
                                        </div>
                                        <p><strong>Save 15-20 Hours/Week:</strong> Attendance, grading, and compliance happen automatically. Teachers just teach.</p>
                                    </li>
                                    <li className="flex gap-4 items-start text-gray-800">
                                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                                            <CheckCircle2 className="w-5 h-5 text-green-600" />
                                        </div>
                                        <p><strong>98% Fee Collection:</strong> Automated SMS reminders and easy Mobile Money payments close the gap.</p>
                                    </li>
                                    <li className="flex gap-4 items-start text-gray-800">
                                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                                            <CheckCircle2 className="w-5 h-5 text-green-600" />
                                        </div>
                                        <p><strong>Verifiable Reputation:</strong> Verified stats and stories on Schoolpedia attract the right parents.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ROI Section */}
            <section id="roi" className="py-24 bg-muted/30">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Okay, but is it worth the investment?</h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            See exactly how much revenue you are locking yourself out of.
                        </p>
                    </div>

                    <ROICalculator />
                </div>
            </section>

            {/* The Two Engines */}
            <section id="features" className="py-24 px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-6xl font-light tracking-tight mb-6">One Platform. Two Engines.</h2>
                        <p className="text-xl text-muted-foreground">Everything you need to run better and grow faster.</p>
                    </div>

                    <div className="space-y-32">
                        {/* Engine 1: Operations */}
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div className="order-2 lg:order-1 relative h-[500px] bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl overflow-hidden border border-blue-100">
                                {/* Abstract representation of operations */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <LayoutDashboard className="w-48 h-48 text-primary/10" />
                                </div>
                                <div className="absolute bottom-10 left-10 right-10 grid gap-4">
                                    <div className="bg-white p-4 rounded-xl shadow-sm border flex items-center gap-4">
                                        <CheckCircle2 className="text-green-500 w-6 h-6" />
                                        <span className="font-medium">Term Fees Collected: 98%</span>
                                    </div>
                                    <div className="bg-white p-4 rounded-xl shadow-sm border flex items-center gap-4">
                                        <CheckCircle2 className="text-green-500 w-6 h-6" />
                                        <span className="font-medium">Report Cards Generated: Instant</span>
                                    </div>
                                </div>
                            </div>
                            <div className="order-1 lg:order-2 space-y-8">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-primary/10 text-primary font-bold uppercase tracking-wider text-xs">
                                    The Operations Engine
                                </div>
                                <h3 className="text-4xl font-bold">World-Class Administration</h3>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Automate the boring stuff so you can focus on education. From complex fee structures to biometric attendance, we handle the heavy lifting.
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        "Automated Fee Collection & Receipting via Mobile Money",
                                        "Instant Academic Report Generation",
                                        "Teacher & Staff Payroll Management",
                                        "Inventory & Asset Tracking"
                                    ].map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <div className="mt-1 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                                                <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                                            </div>
                                            <span className="text-lg">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Engine 2: Growth */}
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div className="space-y-8">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-secondary/10 text-secondary-foreground font-bold uppercase tracking-wider text-xs">
                                    The Growth Engine
                                </div>
                                <h3 className="text-4xl font-bold">Unstoppable Brand Visibility</h3>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    You have great stories. We help you tell them to the world. Our integrated media tools turn your daily activities into marketing gold.
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        "Professional School Website (Included)",
                                        "Social Media Content Calendar & Templates",
                                        "Admissions CRM & Lead Tracking",
                                        "Participation in the 'Digital 100' Campaigns"
                                    ].map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <div className="mt-1 w-5 h-5 rounded-full bg-secondary/10 flex items-center justify-center">
                                                <Megaphone className="w-3.5 h-3.5 text-secondary-foreground" />
                                            </div>
                                            <span className="text-lg">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="relative h-[500px] bg-gradient-to-br from-yellow-50 to-orange-50 rounded-3xl overflow-hidden border border-orange-100">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <Zap className="w-48 h-48 text-secondary/20" />
                                </div>
                                {/* Placeholder for media content */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust/Security */}
            <section className="py-24 bg-primary text-primary-foreground">
                <div className="max-w-5xl mx-auto text-center space-y-12 px-6">
                    <ShieldCheck className="w-20 h-20 mx-auto text-secondary opacity-80" />
                    <h2 className="text-4xl md:text-5xl font-bold">Bank-Grade Security for Your Data</h2>
                    <p className="text-xl opacity-80 max-w-3xl mx-auto">
                        We understand that student data is sensitive. That's why EdComrade operates on enterprise-grade infrastructure with daily backups, end-to-end encryption, and 99.9% uptime guarantees.
                    </p>
                    <div className="grid sm:grid-cols-3 gap-8 pt-8">
                        <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                            <h4 className="font-bold text-lg mb-2">Encrypted</h4>
                            <p className="opacity-70 text-sm">All data is encrypted at rest and in transit.</p>
                        </div>
                        <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                            <h4 className="font-bold text-lg mb-2">Compliant</h4>
                            <p className="opacity-70 text-sm">Fully compliant with Data Protection regulations.</p>
                        </div>
                        <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                            <h4 className="font-bold text-lg mb-2">Backed Up</h4>
                            <p className="opacity-70 text-sm">Automatic daily backups ensure you never lose a record.</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
