import { MinimalNav } from "@/components/minimal-nav"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { ArrowRight, Eye, Cog, BarChart, Users, Sparkles, Target } from "lucide-react"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "About EdComrade | The Genesis Document",
  description:
    "EdComrade is the ecosystem digitizing Ghana's private schools — making excellence visible through storytelling, software, and systems.",
  openGraph: {
    title: "About EdComrade | The Genesis Document",
    description: "We digitize. You inspire. Building Ghana's digital education future.",
    images: ["/og-about.jpg"],
  },
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <MinimalNav />

      {/* Hero with Image */}
      <section className="pt-32 pb-16 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-8">
            <Sparkles className="w-4 h-4" />
            <span className="font-medium text-sm">Our Story</span>
          </div> */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight mb-6">
            The EdComrade Genesis
          </h1>
          <p className="text-xl md:text-2xl text-primary font-medium mb-8">
            We digitize. You inspire.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            An ecosystem engineered to make Ghana's private schools visible, measurable, and connected to the digital economy of tomorrow.
          </p>
        </div>
      </section>

      <section className="py-12 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden h-[400px] md:h-[500px] shadow-2xl border border-border">
            <Image
              src="/young-african-computer-science-students-working-on.jpg"
              alt="EdComrade founding team working on the original project"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Genesis Narrative */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-16">
          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Why We Exist
            </div>
            <h2 className="text-4xl md:text-5xl font-light mb-6">Make Excellence Visible</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              For decades, private schools carried the burden of innovation in silence. Many did extraordinary work without
              recognition because they lacked visibility and digital infrastructure. EdComrade was born to change that — to
              build the digital backbone of Ghana's private education sector by merging storytelling, software, and systems thinking.
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-3xl p-8 md:p-12 lg:p-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-medium">Our Philosophy</h3>
              </div>
            </div>
            <p className="text-lg md:text-2xl font-medium leading-relaxed">
              "Digital Excellence as Infrastructure": not just apps — an operational identity that helps schools evolve
              intelligently and competitively.
            </p>
          </div>

          <div className="relative rounded-3xl overflow-hidden h-[300px] md:h-[400px] border border-border shadow-xl">
            <Image src="/african-school-administrator-overwhelmed-with-pape.jpg" alt="The problem EdComrade solves" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
              <div className="p-6 md:p-8 text-white">
                <p className="text-xl md:text-2xl font-medium">
                  "School administrators spent more time wrestling with spreadsheets than supporting teachers."
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
              Our Framework
            </div>
            <h2 className="text-4xl md:text-5xl font-light">The Four Pillars of Progress</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  icon: <Eye className="w-6 h-6" />,
                  title: "Visibility",
                  desc: "Storytelling and branding that make excellence discoverable."
                },
                {
                  icon: <Cog className="w-6 h-6" />,
                  title: "Systems",
                  desc: "ERP that automates admissions, attendance, communication, reporting."
                },
                {
                  icon: <BarChart className="w-6 h-6" />,
                  title: "Performance",
                  desc: "Dashboards and analytics that measure and motivate."
                },
                {
                  icon: <Users className="w-6 h-6" />,
                  title: "Community",
                  desc: "A network that shares knowledge, tools, and opportunities."
                }
              ].map((pillar, i) => (
                <div key={i} className="bg-background border border-border rounded-2xl p-6 hover:border-primary/50 hover:shadow-lg transition-all">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                    {pillar.icon}
                  </div>
                  <h3 className="text-xl font-light mb-2">{pillar.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
              The EdComrade Index
            </div>
            <h2 className="text-4xl md:text-5xl font-light">Ghana's Digital Education Ranking</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We evaluate digital maturity, innovation, community impact, academic experience, and brand presence — not
              to compete, but to inspire elevation and make excellence contagious.
            </p>
          </div>

          <div className="bg-secondary/10 border border-secondary/20 rounded-3xl p-8 md:p-10">
            <div className="inline-block px-3 py-1 rounded-full bg-secondary/20 text-secondary text-sm font-medium mb-4">
              Now
            </div>
            <h2 className="text-3xl md:text-4xl font-light mb-4">The Digital 100</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              A national campaign to digitize the first 100 schools leading this transformation — full media, custom
              websites, standardized ERP, and recognition on the EdComrade Index.
            </p>
            <Link href="/campaigns/digital-100" className="inline-flex items-center gap-2 text-secondary font-medium hover:underline">
              Join Digital 100 <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 md:py-32 px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-8">
            Our ambition is bigger than software
          </h2>
          <p className="text-xl leading-relaxed max-w-3xl mx-auto opacity-90">
            We're building an ecosystem where schools don't just survive—they thrive. Where technology removes barriers
            instead of creating them. Where every institution, regardless of size, has access to world-class tools and a
            community of peers pushing education forward.
          </p>
        </div>
      </section>

      {/* The Plan Forward */}
      <section className="py-24 md:py-32 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Roadmap
            </div>
            <h2 className="text-4xl md:text-5xl font-light">What's Next</h2>
          </div>

          <div className="space-y-8">
            {[
              {
                num: "01",
                title: "Expand the ecosystem",
                desc: "Connect 1,000+ schools across Africa by 2026. Build partnerships that enable inter-school competitions, resource sharing, and collaborative innovation."
              },
              {
                num: "02",
                title: "AI-powered insights",
                desc: "Launch predictive analytics that help schools identify at-risk students early, optimize resource allocation, and personalize learning pathways at scale."
              },
              {
                num: "03",
                title: "Marketing as a service",
                desc: "Help schools tell their stories better. From brand strategy to digital campaigns, we're building tools that make every institution stand out in a competitive market."
              }
            ].map((item, i) => (
              <div key={i} className="bg-background border border-border rounded-2xl p-8 hover:border-primary/50 hover:shadow-lg transition-all">
                <div className="flex gap-6 items-start">
                  <div className="w-16 h-16 rounded-xl bg-primary flex items-center justify-center text-primary-foreground text-2xl font-light flex-shrink-0">
                    {item.num}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-light mb-3">{item.title}</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Our Values
            </div>
            <h2 className="text-4xl md:text-5xl font-light">What We Believe</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { src: "/african-students-engaged-in-learning-with-teacher-.jpg", title: "Education First" },
              { src: "/african-students-engaged-with-tablets-in-classroom.jpg?height=250&width=400", title: "Built for Africa" },
              { src: "/happy-african-school-administrator-using-modern-la.jpg?height=250&width=400", title: "Partnership Over Profit" }
            ].map((item, i) => (
              <div key={i} className="relative rounded-2xl overflow-hidden h-[250px] border border-border shadow-lg group">
                <Image src={item.src} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-light">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Education first",
                desc: "Technology should serve learning, not complicate it. Every feature we build starts with the question: does this help students succeed?"
              },
              {
                title: "Built for Africa",
                desc: "From Mobile Money integration to offline-first design, we understand the unique challenges and opportunities of African education."
              },
              {
                title: "Partnership over profit",
                desc: "We succeed when schools succeed. Our pricing is transparent, our support is unlimited, and our commitment is long-term."
              }
            ].map((value, i) => (
              <div key={i} className="space-y-4">
                <h3 className="text-2xl font-light">{value.title}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Timeline
            </div>
            <h2 className="text-4xl md:text-5xl font-light">Our Journey</h2>
          </div>

          <div className="space-y-0">
            {[
              {
                year: "2022",
                title: "The Beginning",
                desc: "Started as a college mini-project by computer science students who saw schools drowning in paperwork",
                color: "primary"
              },
              {
                year: "2023",
                title: "First Deployment",
                desc: "Our first partner school reduced admin overhead by 60% within months. Word spread quickly.",
                color: "primary"
              },
              {
                year: "2026",
                title: "Rapid Growth",
                desc: "Reach 100+ schools across Ghana. Launch EdComrade Community Network for inter-school collaboration.",
                color: "primary"
              },
              {
                year: "2028",
                title: "Leading the Future",
                desc: "500+ schools transformed. Expanding across Africa. Building the future of education technology.",
                color: "secondary"
              }
            ].map((item, i) => (
              <div key={i} className="flex gap-8 my-8 items-start">
                <div className="flex-shrink-0 w-32 text-right pt-2">
                  <div className={`text-2xl font-light text-${item.color}`}>{item.year}</div>
                </div>
                <div className={`flex-1 border-l-2 border-${item.color} pl-8 pb-12 last:pb-0`}>
                  {/* <div className={`w-4 h-4 rounded-full bg-${item.color} -ml-[25px] mb-4`}></div> */}
                  <h3 className="text-2xl font-light mb-3">{item.title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 px-6 lg:px-8 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-3xl p-12 md:p-16 text-center">
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              Join us in transforming education
            </h2>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-3xl mx-auto">
              Whether you're a school administrator, educator, or education advocate, there's a place for you in the EdComrade
              community.
            </p>
            <div className="flex items-center justify-center flex-wrap gap-4">
              <Link
                href="/#contact"
                className="bg-secondary text-secondary-foreground px-8 py-4 rounded-full text-lg font-medium hover:shadow-lg hover:scale-105 transition-all inline-flex items-center gap-2"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/community"
                className="bg-background border-2 border-border px-8 py-4 rounded-full text-lg font-medium hover:border-primary transition-all"
              >
                Explore Community
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer/>
    </main>
  )
}