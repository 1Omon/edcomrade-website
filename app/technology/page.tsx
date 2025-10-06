import { MinimalNav } from "@/components/minimal-nav"
import Link from "next/link"
import { ArrowRight, Database, GraduationCap, CreditCard, BarChart3, FileCheck, Shield, Zap, Globe } from "lucide-react"

export default function TechnologyPage() {
  return (
    <main className="min-h-screen bg-background">
      <MinimalNav />

      {/* Hero */}
      <section className="pt-32 pb-24 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl lg:text-7xl font-bold tracking-tight text-balance mb-6">
            Powerful technology.
            <br />
            <span className="text-primary">Simple to use.</span>
          </h1>
          <p className="text-xl lg:text-2xl text-muted-foreground text-balance leading-relaxed max-w-3xl mx-auto">
            Everything your school needs in one integrated platform—built for African contexts.
          </p>
        </div>
      </section>

      {/* Core Modules */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-32">
          {/* School Management */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Database className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">School Management System</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Centralize student records, staff management, attendance tracking, and timetabling. Everything
                administrators need in one place.
              </p>
              <ul className="space-y-3 text-lg text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary">✓</span>
                  <span>Student enrollment & records</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">✓</span>
                  <span>Staff management & payroll</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">✓</span>
                  <span>Attendance & timetabling</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">✓</span>
                  <span>Parent communication portal</span>
                </li>
              </ul>
            </div>
            <div className="bg-accent rounded-3xl p-12 lg:p-16 flex items-center justify-center min-h-[400px]">
              <Database className="w-32 h-32 text-primary/20" />
            </div>
          </div>

          {/* Learning Management */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="bg-accent rounded-3xl p-12 lg:p-16 flex items-center justify-center min-h-[400px] order-2 lg:order-1">
              <GraduationCap className="w-32 h-32 text-primary/20" />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">Learning Management Platform</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Engage students with modern learning tools. Assignments, assessments, and collaboration—all in one
                place.
              </p>
              <ul className="space-y-3 text-lg text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary">✓</span>
                  <span>Course content delivery</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">✓</span>
                  <span>Assignment submission & grading</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">✓</span>
                  <span>Discussion forums & collaboration</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">✓</span>
                  <span>Progress tracking & analytics</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Finance & Billing */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-secondary" />
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">Finance & Billing</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Automated fee collection with Mobile Money integration. Track payments, generate invoices, and manage
                budgets effortlessly.
              </p>
              <ul className="space-y-3 text-lg text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-secondary">✓</span>
                  <span>Mobile Money integration (M-Pesa, MTN, etc.)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-secondary">✓</span>
                  <span>Automated invoicing & reminders</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-secondary">✓</span>
                  <span>Payment tracking & reconciliation</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-secondary">✓</span>
                  <span>Financial reporting & budgeting</span>
                </li>
              </ul>
            </div>
            <div className="bg-accent rounded-3xl p-12 lg:p-16 flex items-center justify-center min-h-[400px]">
              <CreditCard className="w-32 h-32 text-secondary/20" />
            </div>
          </div>

          {/* Examination Portal */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="bg-accent rounded-3xl p-12 lg:p-16 flex items-center justify-center min-h-[400px] order-2 lg:order-1">
              <FileCheck className="w-32 h-32 text-primary/20" />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                <FileCheck className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">Online Examination System</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Create, distribute, and grade exams digitally. Reduce paper waste and get results instantly.
              </p>
              <ul className="space-y-3 text-lg text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary">✓</span>
                  <span>Question bank management</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">✓</span>
                  <span>Automated grading & analytics</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">✓</span>
                  <span>Secure exam delivery</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">✓</span>
                  <span>Result publication & certificates</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Story */}
      <section className="py-32 px-6 lg:px-8 bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary-foreground text-balance mb-8">
            Everything works together
          </h2>
          <p className="text-xl text-primary-foreground/90 text-balance leading-relaxed max-w-3xl mx-auto">
            Our modules aren't separate tools—they're parts of one integrated ecosystem. Student data flows seamlessly
            from enrollment to graduation, giving you a complete picture at every step.
          </p>
        </div>
      </section>

      {/* Technical Excellence */}
      <section className="py-32 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-balance mb-16 text-center">
            Built for Africa
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-4 text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold">Secure & Reliable</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Bank-level encryption, automated backups, and 99.9% uptime guarantee. Your data is safe with us.
              </p>
            </div>

            <div className="space-y-4 text-center">
              <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto">
                <Zap className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-semibold">Offline-First</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Works even with unstable internet. Data syncs automatically when connection is restored.
              </p>
            </div>

            <div className="space-y-4 text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold">Local Payments</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Native support for M-Pesa, MTN Mobile Money, Airtel Money, and other local payment systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Diagram Placeholder */}
      <section className="py-24 px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-balance mb-12 text-center">
            Modular & Scalable
          </h2>
          <div className="bg-background rounded-3xl p-12 lg:p-16 border border-border">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="space-y-4">
                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
                  <Database className="w-10 h-10 text-primary" />
                </div>
                <div className="font-semibold">Core Platform</div>
                <p className="text-sm text-muted-foreground">Student & staff management</p>
              </div>
              <div className="space-y-4">
                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
                  <GraduationCap className="w-10 h-10 text-primary" />
                </div>
                <div className="font-semibold">Learning Modules</div>
                <p className="text-sm text-muted-foreground">LMS, exams, assessments</p>
              </div>
              <div className="space-y-4">
                <div className="w-20 h-20 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto">
                  <BarChart3 className="w-10 h-10 text-secondary" />
                </div>
                <div className="font-semibold">Business Tools</div>
                <p className="text-sm text-muted-foreground">Finance, marketing, analytics</p>
              </div>
            </div>
            <div className="mt-12 text-center text-muted-foreground">
              Choose the modules you need. Add more as you grow.
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-balance mb-6">See it in action</h2>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            Schedule a personalized demo and discover how ACE can transform your school.
          </p>
          <Link
            href="/#contact"
            className="bg-secondary text-secondary-foreground px-8 py-4 rounded-full text-lg font-medium hover:opacity-90 transition-opacity inline-flex items-center gap-2"
          >
            Request a Demo
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 lg:px-8 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="text-2xl font-bold mb-4">ACE</div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Transforming education through technology and partnership.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/technology" className="hover:text-foreground transition-colors">
                    Technology
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Demo
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/about" className="hover:text-foreground transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/community" className="hover:text-foreground transition-colors">
                    Community
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className="hover:text-foreground transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            © 2025 ACE Educational Systems. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  )
}
