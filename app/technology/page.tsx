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
//             <h3 className="text-xl md:text-2xl font-semibold mb-3">
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
import { ArrowRight, Zap, Sparkles, Layers, CircuitBoard, CheckCircle2 } from "lucide-react"
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
      <section className="pt-32 pb-20 px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.08),transparent_50%)]" />
        
        <div className="relative max-w-6xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 backdrop-blur-sm border border-primary/20">
            <Sparkles className="w-4 h-4" />
            Built for African Schools
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-balance leading-[1.1]">
            Technology that
            <br />
            <span className="text-primary font-medium">understands schools.</span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground text-balance leading-relaxed max-w-4xl mx-auto font-light">
            At EdComrade, technology isn't a tool — it's a philosophy. We're
            building an intelligent ecosystem that simplifies daily operations,
            amplifies growth, and reshapes how schools connect with families,
            students, and their wider communities.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link
              href="#erp"
              className="bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-medium hover:opacity-90 transition-all hover:scale-[1.02] inline-flex items-center gap-2 shadow-lg"
            >
              Explore Our ERP
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="#demo"
              className="bg-background text-foreground px-8 py-4 rounded-full text-lg font-medium hover:bg-muted transition-all border-2 border-border inline-flex items-center gap-2"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>

      {/* ERP Section */}
      <section id="erp" className="py-20 md:py-28 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-primary font-medium">
              <CircuitBoard className="w-5 h-5" />
              Core Platform
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight">
              The EdComrade ERP System
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-4xl font-light">
              The digital backbone of every school in our ecosystem — a unified, cloud-based platform that connects administrators, teachers, parents, and students in one intelligent environment designed for clarity, accountability, and growth.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {[
              { title: "Student Information", desc: "Centralized records and tracking system", icon: "👥" },
              { title: "AI-Assisted Analytics", desc: "Smart attendance, grading & progress tracking", icon: "🤖" },
              { title: "Finance Dashboard", desc: "Fees, accounting & automated workflows", icon: "💰" },
              { title: "Staff Management", desc: "Smart timetable coordination", icon: "📋" },
              { title: "Real-time Messaging", desc: "Circulars, announcements & updates", icon: "💬" },
              { title: "Performance Hub", desc: "School-wide analytics and insights", icon: "📊" }
            ].map((feature, i) => (
              <div
                key={i}
                className="group p-6 rounded-2xl border-2 border-border hover:border-primary/50 hover:shadow-lg transition-all bg-card hover:bg-muted/50"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Parent App Highlight */}
          <div className="mt-12 bg-primary rounded-3xl p-8 md:p-12 text-primary-foreground relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
            <div className="relative max-w-3xl">
              <h3 className="text-3xl md:text-4xl font-light mb-4">
                One App for Parents
              </h3>
              <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed mb-6 font-light">
                Parents access everything through the <span className="font-semibold">EdComrade App</span> — a single mobile interface to track payments, results, attendance, and school updates. The system scales with your institution, offering new modules and automations as your operations grow more complex.
              </p>
              <div className="inline-flex items-center gap-2 bg-primary-foreground/20 backdrop-blur px-6 py-3 rounded-full text-sm font-medium border border-primary-foreground/20">
                <Zap className="w-4 h-4" />
                Scales with your institution
              </div>
            </div>
          </div>

          {/* Modules Tiers */}
          <div className="mt-12 bg-muted/40 rounded-3xl p-8 md:p-10">
            <h3 className="text-2xl md:text-3xl font-light mb-8 text-center">Module Tiers</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { tier: "Core", items: "Admissions, Records, Finance, Academics" },
                { tier: "Growth", items: "Analytics, Communication, Timetable, Events" },
                { tier: "Excellence", items: "AI Insights, Customization, Integrations" }
              ].map((tier, i) => (
                <div key={i} className="p-6 rounded-2xl bg-card border-2 border-border hover:border-primary/50 transition-colors">
                  <h4 className="font-semibold text-xl mb-3 text-primary">{tier.tier}</h4>
                  <p className="text-muted-foreground">{tier.items}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CUSTOM SYSTEMS */}
      <section className="py-20 md:py-28 px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-secondary font-medium">
                <Layers className="w-5 h-5" />
                Bespoke Solutions
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight">
                Custom Systems for Institutions
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed font-light">
                Beyond the ERP, EdComrade engineers bespoke digital infrastructures for advanced institutions — private tertiary schools, international academies, and school networks that demand control, design, and data precision.
              </p>
            </div>
            
            <div className="space-y-4">
              {[
                "Institution-specific dashboards and multi-campus analytics",
                "White-label student and staff portals with custom branding",
                "Full LMS integration and e-learning ecosystems",
                "Online examination, placement, and result publishing systems",
                "Custom domains, interfaces, and cloud hosting infrastructure"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border hover:shadow-md transition-shadow hover:border-secondary/50">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-12 p-8 bg-card rounded-2xl border-2 border-secondary/30">
            <p className="text-lg text-muted-foreground italic text-center">
              Every deployment is a co-creation. We map your structure, workflow, and hierarchy into software logic — so the system feels built for your school, not borrowed from another.
            </p>
          </div>
        </div>
      </section>

      {/* ADD-ONS */}
      <section className="py-20 md:py-28 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 text-primary font-medium">
              <Sparkles className="w-5 h-5" />
              Extend Your Power
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight">
              Add-Ons and Integrations
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed font-light">
              Schools can enhance their ERP anytime with specialized modules from our add-on library — intelligent extensions that scale capability without complexity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Learning Management System", desc: "LMS with AI grading assistant", icon: "📚" },
              { title: "Examination & Result Suite", desc: "Complete result publication system", icon: "✍️" },
              { title: "Financial Analytics", desc: "Asset management dashboards", icon: "📈" },
              { title: "Digital Library", desc: "Content management tools", icon: "🗂️" },
              { title: "AI Performance Prediction", desc: "Academic insights powered by ML", icon: "🎯" },
              { title: "Parent Engagement", desc: "Feedback & insights platform", icon: "💙" }
            ].map((addon, i) => (
              <div
                key={i}
                className="group p-6 rounded-2xl bg-card border-2 border-border hover:border-primary/50 hover:shadow-xl transition-all hover:bg-muted/50"
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{addon.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{addon.title}</h3>
                    <p className="text-muted-foreground">{addon.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-muted/40 rounded-2xl border-2 border-border">
            <p className="text-lg text-muted-foreground text-center">
              Each school receives <span className="font-semibold text-foreground">one complimentary add-on</span> during onboarding — with future modules released through regular system updates. We continuously expand integrations with platforms like Cloudinary, Resend, and third-party learning apps.
            </p>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="py-20 md:py-32 px-6 lg:px-8 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.08),transparent_50%)]" />
        
        <div className="relative max-w-5xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-primary-foreground text-balance">
            Our Philosophy
          </h2>
          <p className="text-xl md:text-2xl text-primary-foreground/95 leading-relaxed max-w-4xl mx-auto font-light">
            We believe African schools deserve world-class technology — not simplified versions of foreign systems. Our goal is to redefine what "digitized education" means in emerging economies by fusing design, intelligence, and context into one adaptive framework.
          </p>
          <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed max-w-3xl mx-auto font-light">
            EdComrade's engineering culture blends systems thinking, empathy, and precision — producing tools that work <span className="font-semibold italic">with</span> educators, not against them. Every feature is a commitment to make your school more connected, more transparent, and ultimately, more human.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section id="demo" className="py-24 md:py-32 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-balance">
            Ready to see EdComrade in your school?
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light">
            Book a personalized demo and see how our ERP, custom systems, and add-ons can simplify your operations and amplify your school's growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link
              href="/#contact"
              className="bg-secondary text-secondary-foreground px-10 py-5 rounded-full text-lg font-medium hover:opacity-90 transition-all hover:scale-[1.02] inline-flex items-center justify-center gap-2 shadow-lg"
            >
              Schedule a Demo
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/pricing"
              className="bg-background text-foreground px-10 py-5 rounded-full text-lg font-medium hover:bg-muted transition-all border-2 border-border inline-flex items-center justify-center gap-2"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}