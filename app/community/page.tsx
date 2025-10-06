import { MinimalNav } from "@/components/minimal-nav"
import Link from "next/link"
import { ArrowRight, Users, Trophy, Lightbulb, TrendingUp, X } from "lucide-react"

export default function CommunityPage() {
  return (
    <main className="min-h-screen bg-background">
      <MinimalNav />

      {/* Hero */}
      <section className="pt-32 pb-24 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl lg:text-7xl font-bold tracking-tight text-balance mb-6">
            Grow faster
            <br />
            <span className="text-primary">together</span>
          </h1>
          <p className="text-xl lg:text-2xl text-muted-foreground text-balance leading-relaxed max-w-3xl mx-auto">
            Join a network of innovative schools collaborating to elevate education across Africa.
          </p>
        </div>
      </section>

      {/* Why Join */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-balance mb-16 text-center">
            Why join the ACE community?
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold">Shared resources</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Access a library of teaching materials, best practices, and operational templates created by schools
                like yours. Learn from peers who've solved the same challenges you're facing.
              </p>
            </div>

            <div className="space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Trophy className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold">Inter-school competitions</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Organize academic olympiads, sports tournaments, and innovation challenges. Give your students
                opportunities to compete, collaborate, and shine on a bigger stage.
              </p>
            </div>

            <div className="space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center">
                <Lightbulb className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-2xl font-semibold">Innovation exchange</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Pilot new teaching methods together. Share what works, iterate on what doesn't. The community moves
                faster than any single institution can alone.
              </p>
            </div>

            <div className="space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-2xl font-semibold">Marketing support</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Stand out in a crowded market. Get access to brand strategy workshops, digital marketing tools, and
                campaigns that help you attract and retain students.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Cost of Staying Outside - Neuromarketing: Loss Aversion */}
      <section className="py-32 px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-balance mb-12 text-center">
            The cost of going it alone
          </h2>

          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                <X className="w-5 h-5 text-destructive" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Isolated problem-solving</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Every challenge feels new because you're solving it alone. No peer network to learn from, no shared
                  playbook to reference.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                <X className="w-5 h-5 text-destructive" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Limited student opportunities</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Your students miss out on inter-school competitions, exchange programs, and the chance to build
                  networks beyond your campus.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                <X className="w-5 h-5 text-destructive" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Slower innovation</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Without a community pushing you forward, it's easy to fall behind. New teaching methods, technology
                  trends, and operational improvements pass you by.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                <X className="w-5 h-5 text-destructive" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Invisible in the market</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Schools with strong networks and marketing support attract more students. Without visibility, even
                  great institutions struggle to grow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Tiers */}
      <section className="py-32 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-balance mb-16 text-center">
            Choose your level
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter */}
            <div className="border border-border rounded-3xl p-8 space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-2">Starter</h3>
                <p className="text-muted-foreground">For schools beginning their digital journey</p>
              </div>
              <div className="text-4xl font-bold">Free</div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary">✓</span>
                  <span>Access to community forum</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">✓</span>
                  <span>Monthly webinars</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">✓</span>
                  <span>Resource library</span>
                </li>
              </ul>
              <Link
                href="/#contact"
                className="block w-full text-center border border-border px-6 py-3 rounded-full font-medium hover:bg-accent transition-colors"
              >
                Get Started
              </Link>
            </div>

            {/* Growth */}
            <div className="border-2 border-primary rounded-3xl p-8 space-y-6 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">Growth</h3>
                <p className="text-muted-foreground">For schools ready to scale</p>
              </div>
              <div className="text-4xl font-bold">Custom</div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary">✓</span>
                  <span>Everything in Starter</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">✓</span>
                  <span>Inter-school competitions</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">✓</span>
                  <span>Marketing workshops</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">✓</span>
                  <span>Priority support</span>
                </li>
              </ul>
              <Link
                href="/#contact"
                className="block w-full text-center bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
              >
                Contact Sales
              </Link>
            </div>

            {/* Enterprise */}
            <div className="border border-border rounded-3xl p-8 space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-2">Enterprise</h3>
                <p className="text-muted-foreground">For multi-campus institutions</p>
              </div>
              <div className="text-4xl font-bold">Custom</div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-secondary">✓</span>
                  <span>Everything in Growth</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-secondary">✓</span>
                  <span>Dedicated account manager</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-secondary">✓</span>
                  <span>Custom integrations</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-secondary">✓</span>
                  <span>White-label options</span>
                </li>
              </ul>
              <Link
                href="/#contact"
                className="block w-full text-center border border-border px-6 py-3 rounded-full font-medium hover:bg-accent transition-colors"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 px-6 lg:px-8 bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl font-bold text-primary-foreground mb-4">500+</div>
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground text-balance mb-6">
            Schools already in the network
          </h2>
          <p className="text-xl text-primary-foreground/90 leading-relaxed">
            From small rural schools to large urban institutions, the ACE community is growing every day.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-balance mb-6">Ready to join?</h2>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            Let's discuss which community tier is right for your institution.
          </p>
          <Link
            href="/#contact"
            className="bg-secondary text-secondary-foreground px-8 py-4 rounded-full text-lg font-medium hover:opacity-90 transition-opacity inline-flex items-center gap-2"
          >
            Get Started Today
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
