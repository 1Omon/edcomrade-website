// // import { MinimalNav } from "@/components/minimal-nav"
// import Link from "next/link"
// import { ArrowRight } from "lucide-react"
// import { Footer } from "@/components/footer"
// import type { Metadata } from "next"
// import { MinimalNav } from "@/components/minimal-nav"

// export const metadata: Metadata = {
//   title: "Technology | Built to simplify today and amplify tomorrow",
//   description:
//     "Technology that understands schools — a living, evolving ecosystem that helps schools operate efficiently, grow visibility, and connect meaningfully with families.",
//   openGraph: {
//     title: "EdComrade Technology | Simplify today. Amplify tomorrow.",
//     description:
//       "A unified ecosystem for schools: ERP, custom systems, and intelligent add-ons designed for African education.",
//     images: ["/og-technology.jpg"],
//   },
// }

// export default function TechnologyPage() {
//   return (
//     <main className="min-h-screen bg-background">
//       <MinimalNav />

//       {/* HERO */}
//       <section className="pt-32 pb-16 px-6 lg:px-8">
//         <div className="max-w-5xl mx-auto text-center space-y-6">
//           <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-balance">
//             Technology that
//             <br />
//             <span className="text-primary font-medium">understands schools.</span>
//           </h1>
//           <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground text-balance leading-relaxed max-w-4xl mx-auto font-light">
//             At EdComrade, technology isn’t a tool — it’s a philosophy. We’re
//             building an intelligent ecosystem that simplifies daily operations,
//             amplifies growth, and reshapes how schools connect with families,
//             students, and their wider communities. From automation to analytics,
//             every system we build adapts to how education actually works — not
//             how software assumes it should.
//           </p>
//         </div>
//       </section>

//       {/* ERP */}
//       <section className="py-20 md:py-28 px-6 lg:px-8">
//         <div className="max-w-5xl mx-auto space-y-8">
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight">
//             1. The EdComrade ERP System
//           </h2>
//           <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
//             The EdComrade ERP is the digital backbone of every school in our
//             ecosystem — a unified, cloud-based platform that runs the school’s
//             heartbeat. It connects administrators, teachers, parents, and
//             students in one intelligent environment designed for clarity,
//             accountability, and growth.
//           </p>

//           <div>
//             <h3 className="text-xl md:text-2xl font-medium mb-3">
//               Core Capabilities
//             </h3>
//             <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
//               <li>Centralized student information system</li>
//               <li>AI-assisted attendance, grading, and progress tracking</li>
//               <li>Fees, accounting, and finance dashboards with automation</li>
//               <li>Staff management and smart timetable coordination</li>
//               <li>Real-time messaging, circulars, and announcements</li>
//               <li>Analytics hub for school performance insights</li>
//             </ul>
//           </div>

//           <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
//             Parents access everything through the{" "}
//             <span className="font-medium">EdComrade App</span> — a single mobile
//             interface to track payments, results, attendance, and school
//             updates. The system scales with your institution, offering new
//             modules and automations as your operations grow more complex.
//           </p>

//           <div className="bg-muted/40 rounded-2xl p-6 mt-8 space-y-3">
//             <h4 className="font-medium text-xl">Modules Overview</h4>
//             <p className="text-muted-foreground">
//               EdComrade ERP evolves in three tiers: <br />
//               <strong>Core</strong> (Admissions, Records, Finance, Academics) —{" "}
//               <strong>Growth</strong> (Analytics, Communication, Timetable,
//               Events) — and <strong>Excellence</strong> (AI Insights,
//               Customization, Integrations).
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* CUSTOM SYSTEMS */}
//       <section className="py-20 md:py-28 px-6 lg:px-8 bg-muted/30">
//         <div className="max-w-5xl mx-auto space-y-8">
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight">
//             2. Custom Systems for Institutions
//           </h2>
//           <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
//             Beyond the ERP, EdComrade engineers bespoke digital infrastructures
//             for advanced institutions — private tertiary schools, international
//             academies, and school networks that demand control, design, and data
//             precision.
//           </p>
//           <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
//             <li>Institution-specific dashboards and multi-campus analytics</li>
//             <li>White-label student and staff portals with custom branding</li>
//             <li>Full LMS integration and e-learning ecosystems</li>
//             <li>Online examination, placement, and result publishing systems</li>
//             <li>Custom domains, interfaces, and cloud hosting infrastructure</li>
//           </ul>
//           <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
//             Every deployment is a co-creation. We map your structure,
//             workflow, and hierarchy into software logic — so the system feels
//             built for your school, not borrowed from another.
//           </p>
//         </div>
//       </section>

//       {/* ADD-ONS */}
//       <section className="py-20 md:py-28 px-6 lg:px-8">
//         <div className="max-w-5xl mx-auto space-y-8">
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight">
//             3. Add-Ons and Integrations
//           </h2>
//           <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
//             Schools can enhance their ERP anytime with specialized modules from
//             our add-on library — intelligent extensions that scale capability
//             without complexity.
//           </p>
//           <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
//             <li>Learning Management System (LMS) with AI grading assistant</li>
//             <li>Examination & Result Publication Suite</li>
//             <li>Financial analytics and asset management dashboards</li>
//             <li>Digital library and content management tools</li>
//             <li>AI-Powered Academic Performance Prediction</li>
//             <li>Parent engagement & feedback insights</li>
//           </ul>
//           <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
//             Each school receives one complimentary add-on during onboarding —
//             with future modules released through regular system updates. We
//             continuously expand integrations with platforms like Cloudinary,
//             Resend, and third-party learning apps to ensure your ecosystem grows
//             smarter every term.
//           </p>
//         </div>
//       </section>

//       {/* PHILOSOPHY */}
//       <section className="py-20 md:py-28 px-6 lg:px-8 bg-primary">
//         <div className="max-w-5xl mx-auto text-center space-y-6">
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-primary-foreground text-balance">
//             4. Our Philosophy
//           </h2>
//           <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed max-w-4xl mx-auto font-light">
//             We believe African schools deserve world-class technology — not
//             simplified versions of foreign systems. Our goal is to redefine what
//             “digitized education” means in emerging economies by fusing design,
//             intelligence, and context into one adaptive framework.
//           </p>
//           <p className="text-lg md:text-xl text-primary-foreground leading-relaxed max-w-3xl mx-auto font-light">
//             EdComrade’s engineering culture blends systems thinking, empathy,
//             and precision — producing tools that work *with* educators, not
//             against them. Every feature is a commitment to make your school more
//             connected, more transparent, and ultimately, more human.
//           </p>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="py-24 md:py-32 px-6 lg:px-8">
//         <div className="max-w-4xl mx-auto text-center space-y-8">
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-balance">
//             Ready to see EdComrade in your school?
//           </h2>
//           <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
//             Book a personalized demo and see how our ERP, custom systems, and
//             add-ons can simplify your operations and amplify your school’s
//             growth.
//           </p>
//           <Link
//             href="/#contact"
//             className="bg-secondary text-secondary-foreground px-8 py-4 rounded-full text-lg font-medium hover:opacity-90 transition-opacity inline-flex items-center gap-2"
//           >
//             Schedule a Demo
//             <ArrowRight className="w-5 h-5" />
//           </Link>
//         </div>
//       </section>

//       <Footer />
//     </main>
//   )
// }

import Link from "next/link"
import { ArrowRight, Zap, Layers, Puzzle, Sparkles } from "lucide-react"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"
import { MinimalNav } from "@/components/minimal-nav"

export const metadata: Metadata = {
  title: "Technology | Built to simplify today and amplify tomorrow",
  description:
    "Technology that understands schools — a living, evolving ecosystem that helps schools operate efficiently, grow visibility, and connect meaningfully with families.",
  openGraph: {
    title: "EdComrade Technology | Simplify today. Amplify tomorrow.",
    description:
      "A unified ecosystem for schools: ERP, custom systems, and intelligent add-ons designed for African education.",
    images: ["/og-technology.jpg"],
  },
}

export default function TechnologyPage() {
  return (
    <main className="min-h-screen bg-background">
      <MinimalNav />

      {/* HERO */}
      <section className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-8 mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              Intelligent School Management
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight">
              Technology that
              <br />
              <span className="text-primary font-medium">understands schools</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              An intelligent ecosystem that simplifies daily operations, amplifies growth, and reshapes how schools connect with families and communities.
            </p>
          </div>
        </div>
      </section>

      {/* KEY FEATURES GRID */}
      <section className="py-16 px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-medium mb-4">EdComrade ERP</h3>
              <p className="text-muted-foreground leading-relaxed">
                Your school's digital backbone. A unified platform connecting administrators, teachers, parents, and students.
              </p>
            </div>

            <div className="bg-background rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Layers className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-medium mb-4">Custom Systems</h3>
              <p className="text-muted-foreground leading-relaxed">
                Bespoke digital infrastructure for advanced institutions demanding control, design, and data precision.
              </p>
            </div>

            <div className="bg-background rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Puzzle className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-medium mb-4">Smart Add-Ons</h3>
              <p className="text-muted-foreground leading-relaxed">
                Intelligent extensions that scale capability without complexity. Enhance your ERP anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ERP SYSTEM */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                Core Platform
              </div>
              <h2 className="text-4xl md:text-5xl font-light">
                The EdComrade ERP System
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The digital backbone of every school in our ecosystem — a unified, cloud-based platform designed for clarity, accountability, and growth.
              </p>
              
              <div className="space-y-4 pt-4">
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Student Information Hub</h4>
                    <p className="text-muted-foreground text-sm">Centralized records, AI-assisted tracking, and real-time updates</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Financial Management</h4>
                    <p className="text-muted-foreground text-sm">Automated fees, accounting dashboards, and finance insights</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Parent Portal</h4>
                    <p className="text-muted-foreground text-sm">Mobile app for payments, results, attendance, and updates</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-12 border border-primary/20">
              <div className="space-y-6">
                <h3 className="text-2xl font-light">Three-Tier Evolution</h3>
                <div className="space-y-4">
                  <div className="bg-background rounded-xl p-4">
                    <h4 className="font-medium mb-2">Core</h4>
                    <p className="text-sm text-muted-foreground">Admissions, Records, Finance, Academics</p>
                  </div>
                  <div className="bg-background rounded-xl p-4">
                    <h4 className="font-medium mb-2">Growth</h4>
                    <p className="text-sm text-muted-foreground">Analytics, Communication, Timetable, Events</p>
                  </div>
                  <div className="bg-background rounded-xl p-4">
                    <h4 className="font-medium mb-2">Excellence</h4>
                    <p className="text-sm text-muted-foreground">AI Insights, Customization, Integrations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CUSTOM SYSTEMS */}
      <section className="py-24 px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-3xl p-12 border border-secondary/20">
              <div className="space-y-6">
                <h3 className="text-2xl font-light">Built for Your Institution</h3>
                <div className="space-y-3">
                  {[
                    "Multi-campus analytics",
                    "White-label portals",
                    "LMS integration",
                    "Online examination systems",
                    "Custom infrastructure"
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 bg-background rounded-lg p-3">
                      <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center">
                        <ArrowRight className="w-3 h-3 text-secondary" />
                      </div>
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6 order-1 lg:order-2">
              <div className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium">
                Enterprise Solutions
              </div>
              <h2 className="text-4xl md:text-5xl font-light">
                Custom Systems for Institutions
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Bespoke digital infrastructures for advanced institutions — private tertiary schools, international academies, and school networks that demand precision.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Every deployment is a co-creation. We map your structure, workflow, and hierarchy into software logic — so the system feels built for your school, not borrowed from another.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ADD-ONS */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Extend Your Capabilities
            </div>
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              Add-Ons and Integrations
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Enhance your ERP with specialized modules — intelligent extensions that scale capability without complexity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Learning Management System", desc: "AI grading assistant and content delivery" },
              { title: "Examination Suite", desc: "Online exams and result publication" },
              { title: "Financial Analytics", desc: "Asset management dashboards" },
              { title: "Digital Library", desc: "Content management tools" },
              { title: "Performance Prediction", desc: "AI-powered academic insights" },
              { title: "Parent Engagement", desc: "Feedback and insights platform" }
            ].map((addon, i) => (
              <div key={i} className="bg-background border border-border rounded-xl p-6 hover:border-primary/50 hover:shadow-lg transition-all">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Puzzle className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-medium mb-2">{addon.title}</h3>
                <p className="text-sm text-muted-foreground">{addon.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center bg-muted/40 rounded-2xl p-8">
            <p className="text-muted-foreground">
              Each school receives <span className="font-medium text-foreground">one complimentary add-on</span> during onboarding — with future modules released through regular system updates.
            </p>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="py-24 px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-light">
            Our Philosophy
          </h2>
          <p className="text-xl leading-relaxed opacity-90">
            We believe African schools deserve world-class technology — not simplified versions of foreign systems. Our goal is to redefine what "digitized education" means in emerging economies.
          </p>
          <p className="text-lg leading-relaxed opacity-80">
            EdComrade's engineering culture blends systems thinking, empathy, and precision — producing tools that work with educators, not against them. Every feature is a commitment to make your school more connected, more transparent, and ultimately, more human.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-muted/50 to-muted/30 rounded-3xl p-12 md:p-16 space-y-8">
            <h2 className="text-4xl md:text-5xl font-light">
              Ready to see EdComrade in your school?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Book a personalized demo and see how our ERP, custom systems, and add-ons can transform your operations.
            </p>
            <Link
              href="/#contact"
              className="bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-medium hover:opacity-90 transition-opacity inline-flex items-center gap-2 shadow-lg"
            >
              Schedule a Demo
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}