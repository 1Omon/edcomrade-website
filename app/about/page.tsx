import { MinimalNav } from "@/components/minimal-nav"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us | Our Story & Mission",
  description:
    "From a college project in 2019 to Ghana's premier edtech company. Learn how ACE Educational Systems is transforming education across Africa with technology and partnership.",
  openGraph: {
    title: "About ACE Educational Systems | Our Story & Mission",
    description:
      "From college project to transforming 500+ schools across Ghana. Our journey and vision for African education.",
    images: ["/og-about.jpg"],
  },
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <MinimalNav />

      {/* Hero with Image */}
      <section className="pt-32 pb-24 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl lg:text-7xl font-light tracking-tight text-balance mb-6">
            It started with a
            <br />
            <span className="text-primary font-medium">simple idea</span>
          </h1>
          <p className="text-xl lg:text-2xl text-muted-foreground text-balance leading-relaxed max-w-3xl mx-auto font-light">
            What if schools could focus on teaching, while technology handled everything else?
          </p>
        </div>
      </section>

      <section className="py-12 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden h-[400px] md:h-[500px] shadow-2xl">
            <Image
              src="/young-african-computer-science-students-working-to.jpg"
              alt="ACE founding team working on the original project"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-16">
          <div>
            <div className="text-sm font-semibold text-primary mb-4">2019 — The Beginning</div>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-balance mb-6">
              A college project that became a mission
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              ACE began as a mini-project by a group of computer science students who noticed something troubling:
              school administrators spent more time wrestling with spreadsheets than supporting teachers. Students
              waited weeks for exam results. Parents had no visibility into their children's progress.
            </p>
          </div>

          <div className="bg-accent rounded-3xl p-12 lg:p-16">
            <p className="text-2xl lg:text-3xl font-medium text-balance leading-relaxed">
              "We realized that the tools schools needed didn't exist—not in a way that was affordable, integrated, or
              built for African contexts."
            </p>
            <p className="text-lg text-muted-foreground mt-6">— Founding Team, ACE Educational Systems</p>
          </div>

          <div className="relative rounded-3xl overflow-hidden h-[300px] md:h-[400px]">
            <Image src="/african-school-administrator-overwhelmed-with-pape.jpg" alt="The problem ACE solves" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-8 text-white">
                <p className="text-xl md:text-2xl font-medium">
                  "School administrators spent more time wrestling with spreadsheets than supporting teachers."
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold text-primary mb-4">2020 — First Deployment</div>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-balance mb-6">
              From prototype to production
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Our first partner school took a chance on us. Within months, they reduced administrative overhead by 60%,
              digitized their entire student records system, and launched online fee payments with Mobile Money
              integration. Word spread quickly.
            </p>
          </div>

          <div>
            <div className="text-sm font-semibold text-primary mb-4">2022 — Rapid Growth</div>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-balance mb-6">Scaling Up</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We reached 100+ schools across Ghana and launched the ACE Community Network for inter-school
              collaboration.
            </p>
          </div>

          <div>
            <div className="text-sm font-semibold text-secondary mb-4">2025 — Leading the Future</div>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-balance mb-6">Transforming Education</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              500+ schools have been transformed. We are expanding across Africa and building the future of education
              technology.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-32 px-6 lg:px-8 bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary-foreground text-balance mb-8">
            Our ambition is bigger than software
          </h2>
          <p className="text-xl text-primary-foreground/90 text-balance leading-relaxed max-w-3xl mx-auto">
            We're building an ecosystem where schools don't just survive—they thrive. Where technology removes barriers
            instead of creating them. Where every institution, regardless of size, has access to world-class tools and a
            community of peers pushing education forward.
          </p>
        </div>
      </section>

      {/* The Plan Forward */}
      <section className="py-32 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-balance mb-16 text-center">What's next</h2>

          <div className="space-y-12">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <div className="text-6xl font-bold text-primary mb-4">01</div>
              </div>
              <div className="md:col-span-2 space-y-4">
                <h3 className="text-2xl font-semibold">Expand the ecosystem</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Connect 1,000+ schools across Africa by 2026. Build partnerships that enable inter-school
                  competitions, resource sharing, and collaborative innovation.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <div className="text-6xl font-bold text-primary mb-4">02</div>
              </div>
              <div className="md:col-span-2 space-y-4">
                <h3 className="text-2xl font-semibold">AI-powered insights</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Launch predictive analytics that help schools identify at-risk students early, optimize resource
                  allocation, and personalize learning pathways at scale.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <div className="text-6xl font-bold text-secondary mb-4">03</div>
              </div>
              <div className="md:col-span-2 space-y-4">
                <h3 className="text-2xl font-semibold">Marketing as a service</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Help schools tell their stories better. From brand strategy to digital campaigns, we're building tools
                  that make every institution stand out in a competitive market.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 lg:px-8 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-balance mb-16 text-center">
            What we believe
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="relative rounded-3xl overflow-hidden h-[250px]">
              <Image src="/african-students-engaged-in-learning-with-teacher-.jpg" alt="Education first" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-semibold">Education First</h3>
                </div>
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden h-[250px]">
              <Image src="/placeholder.svg?height=250&width=400" alt="Built for Africa" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-semibold">Built for Africa</h3>
                </div>
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden h-[250px]">
              <Image
                src="/placeholder.svg?height=250&width=400"
                alt="Partnership over profit"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-semibold">Partnership Over Profit</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Education first</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Technology should serve learning, not complicate it. Every feature we build starts with the question:
                does this help students succeed?
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Built for Africa</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From Mobile Money integration to offline-first design, we understand the unique challenges and
                opportunities of African education.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Partnership over profit</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We succeed when schools succeed. Our pricing is transparent, our support is unlimited, and our
                commitment is long-term.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="py-24 px-6 lg:px-8 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-light tracking-tight text-balance mb-16 text-center">Our journey</h2>

          <div className="space-y-12">
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0 w-32 text-right">
                <div className="text-2xl font-medium text-primary">2019</div>
              </div>
              <div className="flex-1 border-l-2 border-primary pl-8 pb-12">
                <h3 className="text-2xl font-medium mb-3">The Beginning</h3>
                <p className="text-lg text-muted-foreground leading-relaxed font-light">
                  Started as a college mini-project by computer science students who saw schools drowning in paperwork
                </p>
              </div>
            </div>

            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0 w-32 text-right">
                <div className="text-2xl font-medium text-primary">2020</div>
              </div>
              <div className="flex-1 border-l-2 border-primary pl-8 pb-12">
                <h3 className="text-2xl font-medium mb-3">First Deployment</h3>
                <p className="text-lg text-muted-foreground leading-relaxed font-light">
                  Our first partner school reduced admin overhead by 60% within months. Word spread quickly.
                </p>
              </div>
            </div>

            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0 w-32 text-right">
                <div className="text-2xl font-medium text-primary">2022</div>
              </div>
              <div className="flex-1 border-l-2 border-primary pl-8 pb-12">
                <h3 className="text-2xl font-medium mb-3">Rapid Growth</h3>
                <p className="text-lg text-muted-foreground leading-relaxed font-light">
                  Reached 100+ schools across Ghana. Launched ACE Community Network for inter-school collaboration.
                </p>
              </div>
            </div>

            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0 w-32 text-right">
                <div className="text-2xl font-medium text-secondary">2025</div>
              </div>
              <div className="flex-1 border-l-2 border-secondary pl-8">
                <h3 className="text-2xl font-medium mb-3">Leading the Future</h3>
                <p className="text-lg text-muted-foreground leading-relaxed font-light">
                  500+ schools transformed. Expanding across Africa. Building the future of education technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-balance mb-6">
            Join us in transforming education
          </h2>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            Whether you're a school administrator, educator, or education advocate, there's a place for you in the ACE
            community.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link
              href="/#contact"
              className="bg-secondary text-secondary-foreground px-8 py-4 rounded-full text-lg font-medium hover:opacity-90 transition-opacity inline-flex items-center gap-2"
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/community"
              className="text-foreground px-8 py-4 rounded-full text-lg font-medium hover:bg-accent transition-colors"
            >
              Explore Community
            </Link>
          </div>
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
