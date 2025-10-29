import { MinimalNav } from "@/components/minimal-nav"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { ArrowRight } from "lucide-react"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Technology | Built to simplify today and amplify tomorrow",
  description:
    "Technology that understands schools — a living, evolving ecosystem that helps schools operate efficiently, grow visibility, and connect meaningfully with families.",
  openGraph: {
    title: "EdComrade Technology | Simplify today. Amplify tomorrow.",
    description: "A unified ecosystem for schools: ERP, custom systems, and add‑ons designed for African education.",
    images: ["/og-technology.jpg"],
  },
}

export default function TechnologyPage() {
  return (
    <main className="min-h-screen bg-background">
      <MinimalNav />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-balance">
            Technology that             <br />
            <span className="text-primary font-medium">understands schools.</span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground text-balance leading-relaxed max-w-4xl mx-auto font-light">
            At EdComrade, we believe that great schools deserve great systems. Our technology is a living, evolving
            ecosystem that helps schools operate efficiently, grow their visibility, and connect meaningfully with
            families. Whether you manage one classroom or a multi‑campus network, EdComrade helps you run smarter,
            faster, and more beautifully.
          </p>
        </div>
      </section>

      {/* 1. ERP */}
      <section className="py-20 md:py-28 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight">1. The EdComrade ERP System</h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Our ERP (Enterprise Resource Planning) system is the heartbeat of every school on our platform — a unified,
            cloud‑based control center that powers daily operations with intelligence and simplicity. With secure access
            via <span className="font-medium">app.edcomrade.com</span>, administrators, staff, parents, and students
            collaborate seamlessly from anywhere.
          </p>
          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-3">Key Capabilities</h3>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>Centralized student records and performance tracking</li>
              <li>Automated attendance and grading systems</li>
              <li>Accounting and fee management dashboards</li>
              <li>Staff and timetable management</li>
              <li>Real‑time communication and notifications</li>
              <li>Integrated analytics with AI insights</li>
            </ul>
          </div>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Parents use the EdComrade mobile app to stay connected — monitoring progress, making payments, and receiving
            updates — all from their phones. The ERP is modular, intuitive, and scalable. Every feature evolves as your
            school grows, ensuring your technology always stays ahead of your needs.
          </p>
        </div>
      </section>

      {/* 2. Custom Systems */}
      <section className="py-20 md:py-28 px-6 lg:px-8 bg-muted/30">
        <div className="max-w-5xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight">2. Custom Systems for Institutions</h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            For schools and educational networks with advanced operational needs, we build custom systems hosted on
            unique domains and designed around their exact structure — going beyond the standard ERP.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>Fully personalized school management platforms</li>
            <li>Multi‑campus dashboards and analytics hubs</li>
            <li>Dedicated student portals for tertiary institutions</li>
            <li>Examination and e‑learning modules</li>
            <li>Brand‑specific user interfaces and system flows</li>
          </ul>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Each custom system is co‑designed with the institution — combining EdComrade’s proven infrastructure with
            deep customization, giving schools full ownership and distinction.
          </p>
        </div>
      </section>

      {/* 3. Add‑Ons */}
      <section className="py-20 md:py-28 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight">3. Add‑Ons and Integrations</h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Schools can activate extra modules anytime from our growing library of add‑ons, such as:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>Learning Management System (LMS)</li>
            <li>Examination & Results Portal</li>
            <li>Accounting & Asset Management Dashboards</li>
            <li>Voting and Survey Tools</li>
            <li>AI‑Powered Assistants for analytics, performance prediction, and personalized learning</li>
          </ul>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Every school gets one complimentary add‑on at onboarding — with more available as their digital maturity
            expands.
          </p>
        </div>
      </section>

      {/* 4. Philosophy */}
      <section className="py-20 md:py-28 px-6 lg:px-8 bg-primary">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-primary-foreground text-balance">4. Our Philosophy</h2>
          <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed max-w-4xl mx-auto font-light">
            We’re not just digitizing schools; we’re redesigning the educational experience. Our mission is to build
            Africa’s most intelligent and human‑centered school infrastructure — one that bridges the gap between
            innovation and impact.
          </p>
          <p className="text-lg md:text-xl text-primary-foreground leading-relaxed max-w-3xl mx-auto font-light">
            Every tool, feature, and line of code we create serves a single purpose: <span className="font-medium">to
            help schools become unforgettable.</span>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-balance">Ready to see it in your school?</h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
            Let us show you a personalized walkthrough of the ERP and add‑ons using your school’s context.
          </p>
          <Link
            href="/#contact"
            className="bg-secondary text-secondary-foreground px-8 py-4 rounded-full text-lg font-medium hover:opacity-90 transition-opacity inline-flex items-center gap-2"
          >
            Schedule Your Demo
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <Footer/>
    </main>
  )
}
