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
  Edit,
} from "lucide-react";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Technology | The Connected Education System",
  description:
    "Explore the three pillars of EdComrade: Schoolpedia for discovery, the ERP with Admin CMS for control, and ParentAide for connection.",
};

export default function TechnologyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-24 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary-foreground text-sm font-medium">
            <RefreshCw className="w-4 h-4" />
            Connected Education Support System
          </div>

          <h1 className="text-5xl md:text-7xl font-light tracking-tight text-balance">
            Three parts. <br />
            <span className="font-bold">One trusted loop.</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            It's not just software. It's a system that connects <span className="text-foreground font-medium">how you run</span>, <span className="text-foreground font-medium">how you look</span>, and <span className="text-foreground font-medium">how you connect</span>.
          </p>
        </div>
      </section>

      {/* System 1: School ERP + CMS */}
      <section className="py-24 px-6 lg:px-8 bg-primary text-primary-foreground overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center border border-white/10">
              <Layout className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold">
              01. The School Management System
              <span className="block text-2xl md:text-3xl text-primary-foreground/70 font-light mt-2">With Integrated Admin CMS</span>
            </h2>
            <p className="text-lg text-primary-foreground/90 leading-relaxed">
              This is your command center. But unlike old systems that just store data, ours helps you publish it.
              Manage your students, fees, and staff—and then use the <strong>CMS Engine</strong> to instantly update your website and Schoolpedia profile.
            </p>

            <ul className="space-y-6 pt-4">
              <li className="flex gap-4">
                <span className="w-8 h-8 rounded-full bg-secondary/20 text-secondary flex items-center justify-center shrink-0 font-bold text-sm">✓</span>
                <div>
                  <h4 className="font-bold text-lg">Admin CMS Engine</h4>
                  <p className="text-primary-foreground/70 text-sm">Update your school's news, gallery, and admission forms instantly. No coding required.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="w-8 h-8 rounded-full bg-secondary/20 text-secondary flex items-center justify-center shrink-0 font-bold text-sm">✓</span>
                <div>
                  <h4 className="font-bold text-lg">Financial Clarity</h4>
                  <p className="text-primary-foreground/70 text-sm">Track every cedi. Generate professional fee reports and manage payroll effortlessly.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="w-8 h-8 rounded-full bg-secondary/20 text-secondary flex items-center justify-center shrink-0 font-bold text-sm">✓</span>
                <div>
                  <h4 className="font-bold text-lg">Academic Records</h4>
                  <p className="text-primary-foreground/70 text-sm">Secure, digitized student records that generate report cards with one click.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="relative h-[500px] bg-white/5 rounded-3xl border border-white/10 p-8 shadow-2xl">
            {/* Visual Representation of CMS/ERP */}
            <div className="absolute inset-x-8 top-8 bottom-8 flex flex-col gap-4">
              <div className="flex-1 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 flex flex-col justify-between">
                <div className="flex items-center justify-between mb-4">
                  <div className="h-4 w-32 bg-white/30 rounded"></div>
                  <Edit className="w-5 h-5 text-secondary" />
                </div>
                <div className="space-y-3">
                  <div className="h-2 w-full bg-white/10 rounded"></div>
                  <div className="h-2 w-full bg-white/10 rounded"></div>
                  <div className="h-2 w-2/3 bg-white/10 rounded"></div>
                </div>
                <div className="mt-4 px-4 py-2 bg-secondary text-secondary-foreground text-sm font-bold rounded-lg self-start">
                  Publish Update
                </div>
              </div>
              <div className="h-32 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-green-500/20 flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <div className="h-4 w-24 bg-white/30 rounded mb-2"></div>
                  <div className="h-3 w-40 bg-white/10 rounded"></div>
                </div>
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
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold">A</div>
                    <div className="flex-1">
                      <div className="h-3 w-20 bg-gray-200 rounded mb-1"></div>
                      <div className="h-2 w-full bg-gray-100 rounded"></div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">M</div>
                    <div className="flex-1">
                      <div className="h-3 w-20 bg-gray-200 rounded mb-1"></div>
                      <div className="h-2 w-full bg-gray-100 rounded"></div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="h-12 bg-primary rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-primary/30">Pay Fees</div>
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
              <span className="block text-2xl md:text-3xl text-muted-foreground font-light mt-2">Peace of Mind in a Pocket</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              For parents, trust comes from knowing. ParentAide gives them a window into their child's world without endless phone calls or lost notes.
            </p>

            <ul className="space-y-6 pt-4">
              <li className="flex gap-4">
                <span className="w-8 h-8 rounded-full bg-secondary/20 text-secondary-foreground flex items-center justify-center shrink-0 font-bold text-sm">✓</span>
                <div>
                  <h4 className="font-bold text-lg">Real-Time Updates</h4>
                  <p className="text-muted-foreground text-sm">Attendance, grades, and teacher remarks delivered instantly.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="w-8 h-8 rounded-full bg-secondary/20 text-secondary-foreground flex items-center justify-center shrink-0 font-bold text-sm">✓</span>
                <div>
                  <h4 className="font-bold text-lg">Stress-Free Payments</h4>
                  <p className="text-muted-foreground text-sm">Pay school fees via Mobile Money directly in the app. No queues.</p>
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
              <span className="block text-2xl md:text-3xl text-muted-foreground font-light mt-2">Where Trust is Found</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The public search engine for verified schools. It’s where your "Admin CMS" updates appear to the world, showing parents that you are open, modern, and excellent.
            </p>

            <ul className="space-y-6 pt-4">
              <li className="flex gap-4">
                <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 font-bold text-sm">✓</span>
                <div>
                  <h4 className="font-bold text-lg">Verified Blue Tick</h4>
                  <p className="text-muted-foreground text-sm">Stand out from competitors with verified data, not just marketing claims.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 font-bold text-sm">✓</span>
                <div>
                  <h4 className="font-bold text-lg">Direct Admissions</h4>
                  <p className="text-muted-foreground text-sm">Parents can apply directly from your profile, feeding straight into your ERP.</p>
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
            <div className="absolute top-8 right-8">
              <div className="bg-white/90 backdrop-blur text-primary px-4 py-2 rounded-full font-bold flex items-center gap-2 shadow-lg">
                <ShieldCheck className="w-5 h-5" /> Verified School
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Synergy */}
      <section className="py-32 px-6 lg:px-8 bg-secondary text-secondary-foreground text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <Zap className="w-16 h-16 mx-auto" />
          <h2 className="text-4xl md:text-6xl font-bold">The Magic is in the Connection</h2>
          <p className="text-xl md:text-2xl leading-relaxed opacity-90">
            When you update your <strong>Management System</strong>, your <strong>Website</strong> updates automatically.
            When a parent pays on the <strong>App</strong>, your <strong>Finance Records</strong> reconcile instantly.
          </p>
          <div className="pt-8">
            <Link href="/pioneers" className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform">
              Join the Pioneers
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
