import { MinimalNav } from "@/components/minimal-nav"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Technology | Built for African Education",
  description:
    "Discover how ACE's technology gives you time back to teach. Offline-first design, Mobile Money integration, GES curriculum aligned. Built specifically for African schools.",
  openGraph: {
    title: "ACE Technology | Built for African Education",
    description: "Technology that works when the internet doesn't. Built for African realities.",
    images: ["/og-technology.jpg"],
  },
}

export default function TechnologyPage() {
  return (
    <main className="min-h-screen bg-background">
      <MinimalNav />

      {/* Hero */}
      <section className="pt-32 pb-24 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-balance mb-6">
            Technology that gives you
            <br />
            <span className="text-primary font-medium">time to teach</span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground text-balance leading-relaxed max-w-3xl mx-auto font-light">
            Because the best use of technology is making it invisible, so you can focus on what matters most.
          </p>
        </div>
      </section>

      {/* Story 1: The Headmaster's Sunday */}
      <section className="py-24 md:py-32 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-6">
            <p className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed text-balance">
              It's Sunday evening. Mr. Osei, headmaster of a growing school in Kumasi, is at his desk. Again.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              He's been here since morning, manually compiling attendance records from five different notebooks. His
              daughter's birthday party ended hours ago. He missed it. Not because he doesn't care—but because 847
              students generate a mountain of paperwork that someone has to organize.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              This is the reality for thousands of school leaders across Ghana. Brilliant educators who became
              administrators to shape young minds, now spending weekends wrestling with spreadsheets and filing
              cabinets.
            </p>
          </div>

          <div className="h-px bg-border my-16" />

          <div className="space-y-6">
            <p className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed text-balance">
              What if that Sunday looked different?
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Mr. Osei opens his laptop. Three clicks. The attendance report for the entire term—automatically compiled,
              beautifully formatted, ready to share. Five minutes. He closes the laptop and heads home. His daughter is
              still awake. They have cake together.
            </p>
            <p className="text-lg md:text-xl leading-relaxed">
              This isn't a fantasy. This is what happens when technology works the way it should—quietly, efficiently,
              invisibly. Giving you back the time that matters.
            </p>
          </div>
        </div>
      </section>

      {/* Story 2: The Teacher's Breakthrough */}
      <section className="py-24 md:py-32 px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-6">
            <p className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed text-balance">
              Miss Adjei noticed something about Kwame.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              He was falling behind in Mathematics. Not dramatically—just a slow, steady decline over three weeks. In a
              class of 45 students, these patterns are easy to miss until it's too late. Until the term exam reveals
              what should have been caught weeks earlier.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              But Miss Adjei's school uses ACE. Every quiz, every assignment, every small assessment feeds into a system
              that watches for patterns. Not to replace her judgment—but to amplify it. To help her see what she might
              miss in the daily chaos of teaching.
            </p>
          </div>

          <div className="h-px bg-border my-16" />

          <div className="space-y-6">
            <p className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed text-balance">
              The system flagged Kwame's trend. Miss Adjei intervened early.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Two weeks of targeted support. Kwame caught up. By term's end, he was thriving. His mother sent a
              thank-you note: "I don't know how you noticed so quickly. Thank you for caring."
            </p>
            <p className="text-lg md:text-xl leading-relaxed">
              Miss Adjei didn't need to explain that it was the system. Because the system isn't the hero of this story.
              She is. The technology just made sure she had the information she needed, when she needed it.
            </p>
          </div>
        </div>
      </section>

      {/* Story 3: The Parent's Peace of Mind */}
      <section className="py-24 md:py-32 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-6">
            <p className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed text-balance">
              Mrs. Mensah works two jobs to afford her daughter's education.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              She leaves home at 6 AM, returns at 8 PM. Parent-teacher meetings happen during work hours she can't
              afford to miss. She wants to be involved in Ama's education—desperately. But the logistics of modern life
              make it nearly impossible.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              She feels guilty. Disconnected. Like she's failing as a parent because she can't physically be present at
              every school event.
            </p>
          </div>

          <div className="h-px bg-border my-16" />

          <div className="space-y-6">
            <p className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed text-balance">
              Then Ama's school adopted ACE.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Now, during her lunch break, Mrs. Mensah opens her phone. She sees Ama's latest test scores. Reads the
              teacher's comment: "Excellent improvement in Science!" Views photos from yesterday's cultural day. Pays
              next term's fees via Mobile Money. All in ten minutes.
            </p>
            <p className="text-lg md:text-xl leading-relaxed">
              She doesn't feel disconnected anymore. She feels present. Involved. Like a partner in her daughter's
              education, even when she can't physically be there. Technology didn't replace her presence—it extended it.
            </p>
          </div>
        </div>
      </section>

      {/* Before and after ACE */}
      <section className="py-24 md:py-32 px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-balance mb-16 text-center">
            Before and after ACE
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="relative rounded-3xl overflow-hidden h-[300px] border-4 border-destructive/20 shadow-xl">
                <Image
                  src="/stressed-african-school-administrator-surrounded-b.jpg?height=300&width=500"
                  alt="Before ACE: Overwhelmed with paperwork"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-destructive/90 text-destructive-foreground p-4">
                  <p className="font-medium">Before: Drowning in paperwork</p>
                </div>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed font-light">
                15+ hours per week on manual tasks. Disconnected parents. Lost opportunities.
              </p>
            </div>

            <div className="space-y-6">
              <div className="relative rounded-3xl overflow-hidden h-[300px] border-4 border-primary/20 shadow-xl">
                <Image
                  src="/happy-african-school-administrator-using-modern-la.jpg?height=300&width=500"
                  alt="After ACE: Efficient and confident"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-primary/90 text-primary-foreground p-4">
                  <p className="font-medium">After: Time to focus on teaching</p>
                </div>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed font-light">
                75% less admin work. 90% parent satisfaction. 25% enrollment growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* See it in action */}
      <section className="py-24 md:py-32 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-balance mb-16 text-center">
            See it in action
          </h2>

          <div className="space-y-12">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/modern-school-management-dashboard-interface--clea.jpg?height=600&width=1200"
                alt="ACE platform dashboard interface"
                width={1200}
                height={600}
                className="w-full"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="/mobile-app-showing-student-grades-and-attendance--.jpg?height=400&width=600"
                  alt="ACE mobile app for parents"
                  width={600}
                  height={400}
                  className="w-full"
                />
              </div>
              <div className="relative rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="/teacher-dashboard-with-class-management-and-assign.jpg?height=400&width=600"
                  alt="ACE teacher dashboard"
                  width={600}
                  height={400}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Philosophy */}
      <section className="py-24 md:py-32 px-6 lg:px-8 bg-primary">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-primary-foreground text-balance">
            This is how we think about technology
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/90 text-balance leading-relaxed max-w-3xl mx-auto font-light">
            It should be powerful enough to transform your school. Simple enough that you forget it's there. And
            designed with such care that it feels like it was built specifically for you.
          </p>
          <p className="text-lg md:text-xl text-primary-foreground/90 text-balance leading-relaxed max-w-3xl mx-auto font-light">
            Because it was.
          </p>
        </div>
      </section>

      {/* What Makes It Work */}
      <section className="py-24 md:py-32 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-balance text-center">
            Built for African realities
          </h2>

          <div className="space-y-12">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-medium">It works when the internet doesn't</h3>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                We know power cuts happen. Internet fails. Life is unpredictable. So we built a system that works
                offline and syncs automatically when connectivity returns. Your work never stops because the internet
                did.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-medium">It speaks your language</h3>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Not just English—but the language of Ghanaian education. GES curriculum structures. Mobile Money
                payments. Academic calendars that match your reality. We didn't adapt a foreign system. We built one
                from the ground up for you.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-medium">It grows with you</h3>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Start with student records. Add fee management when you're ready. Integrate online learning when it
                makes sense. You don't need everything on day one. The system adapts to your pace, not the other way
                around.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-medium">It protects what matters</h3>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Student data is sacred. We use bank-level encryption, automated backups, and security protocols that
                would make a cybersecurity expert proud. Your trust is earned through action, not promises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Bigger Picture */}
      <section className="py-24 md:py-32 px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-balance text-center">
            This is about more than efficiency
          </h2>

          <div className="space-y-6">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Yes, ACE will save you 15 hours a week on administrative tasks. Yes, it will improve parent satisfaction
              by 90%. Yes, schools using our platform see an average 25% increase in enrollment.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              But those are just numbers. The real story is what happens with those 15 hours you get back. The mentoring
              conversations. The curriculum innovations. The time to actually think about education instead of drowning
              in administration.
            </p>
            <p className="text-lg md:text-xl leading-relaxed">
              We're not building school management software. We're building a future where African educators have the
              tools they deserve. Where technology serves education, not the other way around. Where brilliant teachers
              can focus on teaching, and students can focus on learning.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-balance">
            See it in your school
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
            Let us show you how ACE can transform your daily operations. Not with a generic demo—but with a personalized
            walkthrough using your school's actual context.
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
