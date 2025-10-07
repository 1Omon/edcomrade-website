import { MinimalNav } from "@/components/minimal-nav"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Community | Join the Movement",
  description:
    "Join 500+ schools in the ACE Community Network. Free inter-school competitions, teacher development, student exchanges, and collaborative growth for all ACE users.",
  openGraph: {
    title: "ACE Community | Join the Educational Movement",
    description: "Connect with 500+ schools across Ghana. Free community benefits for all ACE users.",
    images: ["/og-community.jpg"],
  },
}

export default function CommunityPage() {
  return (
    <main className="min-h-screen bg-background">
      <MinimalNav />

      {/* Hero */}
      <section className="pt-32 pb-24 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-balance mb-6">
            You're not just getting software.
            <br />
            <span className="text-primary font-medium">You're joining a movement.</span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground text-balance leading-relaxed max-w-3xl mx-auto font-light">
            The ACE Community is where ambitious schools connect, collaborate, and grow together.
          </p>
        </div>
      </section>

      <section className="py-12 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden h-[400px] md:h-[500px] shadow-2xl">
            <Image
              src="/placeholder.svg?height=500&width=1200"
              alt="ACE Community members connecting"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Story: The Loneliness of Leadership */}
      <section className="py-24 md:py-32 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-6">
            <p className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed text-balance">
              Running a school can be lonely.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              You're making decisions that affect hundreds of lives. Navigating challenges that feel unique to your
              institution. Wondering if other schools face the same struggles, or if it's just you.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              You attend conferences where everyone shares their successes but rarely their failures. You read articles
              about "best practices" that seem impossible to implement in your context. You feel like you're solving
              every problem alone.
            </p>
          </div>

          <div className="h-px bg-border my-16" />

          <div className="space-y-6">
            <p className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed text-balance">
              What if you weren't alone?
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              The ACE Community is a network of over 500 schools across Ghana—from small rural institutions to large
              urban campuses. Schools that share your challenges, your ambitions, and your commitment to educational
              excellence.
            </p>
            <p className="text-lg md:text-xl leading-relaxed">
              When you join ACE, you don't just get access to our platform. You get access to a community of peers who
              understand exactly what you're going through. Because they're going through it too.
            </p>
          </div>
        </div>
      </section>

      {/* What Community Means */}
      <section className="py-24 md:py-32 px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto space-y-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-balance text-center">
            What being part of ACE means
          </h2>

          <div className="space-y-12">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-medium">You learn from each other</h3>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                A school in Accra figured out an innovative way to improve parent engagement. A school in Kumasi
                developed a brilliant timetabling system. A school in Tamale created a scholarship program that
                increased enrollment by 40%. In the ACE Community, these insights don't stay siloed—they're shared,
                adapted, and implemented across the network.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-medium">Your students compete on bigger stages</h3>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Imagine your brightest Mathematics student competing against the best from 50 other schools in a
                national ACE Mathematics Olympiad. Your debate team facing off against schools from across the region.
                Your Science Club showcasing innovations at an inter-school fair. These aren't hypotheticals—they're
                regular events in the ACE Community.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-medium">Your teachers grow together</h3>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Monthly professional development sessions. Peer mentoring programs connecting experienced educators with
                newer teachers. Subject-specific forums where your English teacher can discuss curriculum challenges
                with 200 other English teachers across Ghana. Your staff doesn't just work for your school—they're part
                of a national network of educators pushing each other toward excellence.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-medium">You build something bigger than your school</h3>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                The ACE Community isn't just about taking—it's about contributing. Your innovations become case studies
                for other schools. Your teachers mentor educators from other institutions. Your success stories inspire
                schools just starting their journey. You're not just improving your school—you're helping transform
                education across Africa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Real Stories */}
      <section className="py-24 md:py-32 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-balance text-center">
            Stories from the community
          </h2>

          <div className="space-y-16">
            <div className="space-y-6">
              <p className="text-xl md:text-2xl font-medium leading-relaxed">
                "We were struggling with student retention. I posted in the ACE Community forum, and within 24 hours,
                three headmasters shared their strategies. We implemented their ideas, adapted them to our context, and
                our retention improved by 35% in one term."
              </p>
              <p className="text-lg text-muted-foreground">— Headmaster, Private School in Cape Coast</p>
            </div>

            <div className="space-y-6">
              <p className="text-xl md:text-2xl font-medium leading-relaxed">
                "My daughter's school participates in ACE inter-school competitions. Last year, she competed in a
                national debate tournament and met students from 15 different schools. She's still in touch with them.
                It's not just about academics—it's about building networks and confidence."
              </p>
              <p className="text-lg text-muted-foreground">— Parent, Accra</p>
            </div>

            <div className="space-y-6">
              <p className="text-xl md:text-2xl font-medium leading-relaxed">
                "I'm a new teacher, and I was overwhelmed. Through the ACE Community, I was paired with a mentor from
                another school who's been teaching for 15 years. She's helped me navigate classroom management,
                curriculum planning, and parent communication. I don't know what I would have done without her."
              </p>
              <p className="text-lg text-muted-foreground">— Teacher, Junior High School in Kumasi</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative rounded-3xl overflow-hidden h-[300px] shadow-xl">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Students competing in ACE inter-school competition"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative rounded-3xl overflow-hidden h-[300px] shadow-xl">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Teachers in ACE professional development session"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative rounded-3xl overflow-hidden h-[300px] shadow-xl">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="School leaders connecting at ACE community event"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 md:py-32 px-6 lg:px-8 bg-primary">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-primary-foreground text-balance">
            Community benefits are free for ACE users
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/90 text-balance leading-relaxed max-w-3xl mx-auto font-light">
            When you use ACE's platform, you automatically become part of the community. No additional fees. No separate
            membership. It's part of who we are and what we believe—that schools grow faster together.
          </p>
        </div>
      </section>

      {/* Special Recognition */}
      <section className="py-24 md:py-32 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-balance text-center">
            Special recognition for pioneers
          </h2>

          <div className="space-y-6">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Some schools receive special treatment within the ACE Community—not because they pay more, but because of
              their unique contributions or circumstances:
            </p>

            <div className="space-y-8 mt-8">
              <div className="space-y-3">
                <h3 className="text-xl md:text-2xl font-medium">Early Adopters</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Schools that joined ACE in our early days helped shape what we've become. They get priority access to
                  new features, dedicated support, and recognition as community leaders.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl md:text-2xl font-medium">Rural & Underserved Schools</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Schools serving underserved communities receive additional support—subsidized pricing, extra training
                  sessions, and priority technical assistance. Excellence shouldn't depend on location.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl md:text-2xl font-medium">Innovation Leaders</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Schools that develop innovative practices and share them with the community are recognized as ACE
                  Innovation Partners. They get featured in case studies, speaking opportunities at community events,
                  and special collaboration opportunities.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl md:text-2xl font-medium">Community Contributors</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Schools whose teachers actively mentor others, whose leaders share insights in forums, and whose
                  students participate in community programs receive recognition and additional benefits. We believe in
                  rewarding those who give back.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Vision */}
      <section className="py-24 md:py-32 px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-balance text-center">
            We're building something bigger
          </h2>

          <div className="space-y-6">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              The ACE Community isn't just a network of schools using the same software. It's a movement of educators
              who believe that African education can lead the world. That our students deserve the same opportunities as
              students anywhere. That collaboration beats competition. That we rise by lifting others.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              By 2030, we envision a community of 1,000+ schools across 10 African countries. A network so strong that
              when one school innovates, hundreds benefit. Where a brilliant teacher in rural Ghana can mentor an
              educator in urban Nigeria. Where students compete, collaborate, and build friendships across borders.
            </p>
            <p className="text-lg md:text-xl leading-relaxed">
              This isn't just about better school management. It's about reimagining what African education can be when
              we work together.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-balance">
            Ready to be part of something bigger?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
            Join the ACE Community and connect with hundreds of schools committed to educational excellence.
          </p>
          <Link
            href="/#contact"
            className="bg-secondary text-secondary-foreground px-8 py-4 rounded-full text-lg font-medium hover:opacity-90 transition-opacity inline-flex items-center gap-2"
          >
            Join the Movement
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 px-6 lg:px-8 bg-primary">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-6xl font-bold text-primary-foreground mb-4">500+</div>
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground text-balance mb-6">
            Schools already in the network
          </h2>
          <p className="text-xl text-primary-foreground/90 leading-relaxed">
            From small rural schools to large urban institutions, the ACE community is growing every day.
          </p>
        </div>
      </section>

      {/* Schools in the ACE Community */}
      <section className="py-24 px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-balance mb-12 text-center">
            Schools in the ACE Community
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="bg-background rounded-2xl p-6 flex items-center justify-center h-24">
                <div className="text-sm font-medium text-muted-foreground">School Logo {i}</div>
              </div>
            ))}
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
