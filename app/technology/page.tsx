import Link from "next/link";
import {
  ArrowRight,
  Zap,
  Smartphone,
  Globe,
  Database,
  Layout,
  MessageSquare,
  ShieldCheck,
  BarChart3,
  RefreshCw,
} from "lucide-react";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";
import { MinimalNav } from "@/components/minimal-nav";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Technology | The EdComrade Ecosystem",
  description:
    "Three powerful systems, one unified platform. Explore the School ERP, ParentAide App, and Schoolpedia — working together to transform your school.",
};

export default function TechnologyPage() {
  return (
    <main className="min-h-screen bg-background">
      <MinimalNav />

      {/* Hero */}
      <section className="pt-32 pb-24 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary-foreground text-sm font-medium">
            <RefreshCw className="w-4 h-4" />
            The EdComrade Ecosystem
          </div>

          <h1 className="text-5xl md:text-7xl font-light tracking-tight text-balance">
            Three Systems. <br />
            <span className="font-bold">One Unified Heartbeat.</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            We don't just sell "software". We provide a complete digital immune system for your school.
            Three interconnected platforms that handle your <span className="text-foreground font-medium">Operations</span>, <span className="text-foreground font-medium">Communication</span>, and <span className="text-foreground font-medium">Growth</span>.
          </p>
        </div>
      </section>

      {/* System 1: School ERP */}
      <section className="py-24 px-6 lg:px-8 bg-black text-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center border border-white/10">
              <Database className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold">
              01. The School ERP
              <span className="block text-2xl md:text-3xl text-gray-400 font-light mt-2">The Operational Engine</span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              This is the brain of your institution. It lives in the office, handling the heavy lifting of administration, finance, and academics.
            </p>

            <ul className="space-y-6 pt-4">
              <li className="flex gap-4">
                <span className="w-8 h-8 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center shrink-0 font-bold text-sm">✓</span>
                <div>
                  <h4 className="font-bold text-lg">Financial Command Center</h4>
                  <p className="text-gray-400 text-sm">Track fees, generate invoices, and manage payroll with forensic accuracy.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="w-8 h-8 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center shrink-0 font-bold text-sm">✓</span>
                <div>
                  <h4 className="font-bold text-lg">Academic Records</h4>
                  <p className="text-gray-400 text-sm">Digitize every exam score, lesson note, and attendance record instantly.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="w-8 h-8 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center shrink-0 font-bold text-sm">✓</span>
                <div>
                  <h4 className="font-bold text-lg">Staff Management</h4>
                  <p className="text-gray-400 text-sm">Monitor teacher performance and attendance effortlessly.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="relative h-[500px] bg-white/5 rounded-3xl border border-white/10 p-8">
            {/* Abstract UI Representation */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl"></div>
            <div className="relative z-10 grid grid-cols-2 gap-4 h-full content-center">
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/5">
                <BarChart3 className="w-8 h-8 text-blue-400 mb-4" />
                <div className="h-2 w-20 bg-white/20 rounded mb-2"></div>
                <div className="h-2 w-12 bg-white/10 rounded"></div>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/5 translate-y-8">
                <ShieldCheck className="w-8 h-8 text-green-400 mb-4" />
                <div className="h-2 w-20 bg-white/20 rounded mb-2"></div>
                <div className="h-2 w-12 bg-white/10 rounded"></div>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/5 -translate-y-8">
                <Layout className="w-8 h-8 text-purple-400 mb-4" />
                <div className="h-2 w-20 bg-white/20 rounded mb-2"></div>
                <div className="h-2 w-12 bg-white/10 rounded"></div>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/5">
                <Database className="w-8 h-8 text-orange-400 mb-4" />
                <div className="h-2 w-20 bg-white/20 rounded mb-2"></div>
                <div className="h-2 w-12 bg-white/10 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* System 2: ParentAide App */}
      <section className="py-24 px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative h-[600px] flex items-center justify-center">
            <div className="relative w-[300px] h-[600px] bg-black rounded-[3rem] border-8 border-gray-800 shadow-2xl overflow-hidden">
              <div className="absolute top-0 w-full h-8 bg-gray-800 rounded-b-xl z-20"></div>
              {/* Screen Content */}
              <div className="w-full h-full bg-white pt-12 px-6 pb-6 space-y-6">
                <div className="flex justify-between items-center">
                  <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                  <div className="w-8 h-8 bg-gray-100 rounded-lg"></div>
                </div>
                <div className="h-32 bg-secondary/10 rounded-2xl p-4 space-y-2">
                  <div className="h-4 w-20 bg-secondary/20 rounded"></div>
                  <div className="h-8 w-32 bg-secondary/40 rounded"></div>
                </div>
                <div className="space-y-4">
                  <div className="h-16 bg-gray-50 rounded-xl border border-gray-100"></div>
                  <div className="h-16 bg-gray-50 rounded-xl border border-gray-100"></div>
                  <div className="h-16 bg-gray-50 rounded-xl border border-gray-100"></div>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="h-12 bg-primary rounded-xl flex items-center justify-center text-white font-bold">Pay Fees</div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8 order-1 lg:order-2">
            <div className="w-16 h-16 rounded-2xl bg-secondary/20 flex items-center justify-center border border-secondary/20">
              <Smartphone className="w-8 h-8 text-secondary-foreground" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold">
              02. ParentAide App
              <span className="block text-2xl md:text-3xl text-muted-foreground font-light mt-2">The Bridge Home</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The days of lost circulars and WhatsApp spam are over. ParentAide is a dedicated mobile app that puts the school in every parent's pocket.
            </p>

            <ul className="space-y-6 pt-4">
              <li className="flex gap-4">
                <span className="w-8 h-8 rounded-full bg-secondary/20 text-secondary-foreground flex items-center justify-center shrink-0 font-bold text-sm">✓</span>
                <div>
                  <h4 className="font-bold text-lg">Instant Notifications</h4>
                  <p className="text-muted-foreground text-sm">"Kwame has arrived at school." Parents get peace of mind instantly.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="w-8 h-8 rounded-full bg-secondary/20 text-secondary-foreground flex items-center justify-center shrink-0 font-bold text-sm">✓</span>
                <div>
                  <h4 className="font-bold text-lg">Results & Homework</h4>
                  <p className="text-muted-foreground text-sm">View report cards and daily assignments without visiting the office.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="w-8 h-8 rounded-full bg-secondary/20 text-secondary-foreground flex items-center justify-center shrink-0 font-bold text-sm">✓</span>
                <div>
                  <h4 className="font-bold text-lg">Frictionless Payments</h4>
                  <p className="text-muted-foreground text-sm">Pay fees directly via Mobile Money (MTN, Telecel, AT) within the app.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* System 3: Schoolpedia */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20">
              <Globe className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold">
              03. Schoolpedia
              <span className="block text-2xl md:text-3xl text-muted-foreground font-light mt-2">The Digital Stage</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Stop being the best kept secret in your area. Schoolpedia is the verified search engine where parents find and fall in love with your school.
            </p>

            <ul className="space-y-6 pt-4">
              <li className="flex gap-4">
                <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 font-bold text-sm">✓</span>
                <div>
                  <h4 className="font-bold text-lg">Verified "Blue Tick" Status</h4>
                  <p className="text-muted-foreground text-sm">Prove your credibility with verified facilities and results.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 font-bold text-sm">✓</span>
                <div>
                  <h4 className="font-bold text-lg">Automatic SEO</h4>
                  <p className="text-muted-foreground text-sm">When parents search "best school in [Your Area]", you show up first.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 font-bold text-sm">✓</span>
                <div>
                  <h4 className="font-bold text-lg">Direct Admissions</h4>
                  <p className="text-muted-foreground text-sm">Inquiries from Schoolpedia flow directly into your ERP.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl border border-secondary/20">
            <Image
              src="/african-parent-smiling-while-checking-child-s-grad.jpeg"
              alt="Parent finding a school"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
            <div className="absolute bottom-8 left-8 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <p className="text-sm font-bold text-black">New Admission Inquiry</p>
              </div>
              <p className="text-xs text-gray-500 mt-1">Received via Schoolpedia • 2m ago</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Synergy */}
      <section className="py-32 px-6 lg:px-8 bg-secondary text-secondary-foreground text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <Zap className="w-16 h-16 mx-auto" />
          <h2 className="text-4xl md:text-6xl font-bold">The Magic is in the Mix</h2>
          <p className="text-xl md:text-2xl leading-relaxed opacity-90">
            These aren't separate tools. They talk to each other.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-left pt-8">
            <div className="bg-background/10 p-6 rounded-2xl backdrop-blur-sm border border-secondary-foreground/10">
              <p className="font-bold mb-2">1. Teacher Enters Marks</p>
              <p className="text-sm opacity-80">(In School ERP)</p>
            </div>
            <div className="hidden md:flex items-center justify-center">
              <ArrowRight className="w-8 h-8 opacity-50" />
            </div>
            <div className="bg-background/10 p-6 rounded-2xl backdrop-blur-sm border border-secondary-foreground/10">
              <p className="font-bold mb-2">2. Parent Gets Alert</p>
              <p className="text-sm opacity-80">(On ParentAide App)</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
