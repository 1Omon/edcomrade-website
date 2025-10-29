import { MinimalNav } from "@/components/minimal-nav"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { ArrowRight } from "lucide-react"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Community | Schools rising together",
  description:
    "More than technology — a movement of schools rising together. Join a vibrant network of educators across Africa for visibility, collaboration and growth.",
  openGraph: {
    title: "EdComrade Community | Schools rising together",
    description: "A collaborative network powering visibility, storytelling, and shared growth for African schools.",
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
            A movement of
            <br />
            <span className="text-primary font-medium"> schools rising together.</span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground text-balance leading-relaxed max-w-3xl mx-auto font-light">
            
            Join a nationwide network of excellence designed to empower, inspire, and celebrate schools that dare to lead.
          </p>
        </div>
      </section>

      <section className="py-12 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden h-[400px] md:h-[500px] shadow-2xl">
            <Image
              src="/diverse-group-of-african-school-leaders-networking.jpg?height=500&width=1200"
              alt="EdComrade Community members connecting"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* 1. The Power of the EdComrade Network */}
      <section className="py-24 md:py-32 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-balance">
              1. The Power of the EdComrade Network
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              The EdComrade Network connects hundreds of schools across Ghana (and soon, across Africa) into one collaborative digital ecosystem. Through shared infrastructure, events, and storytelling platforms, schools gain visibility, share insights, and attract more parents and opportunities.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl md:text-2xl font-semibold">As part of our network, schools enjoy:</h3>
            <ul className="list-disc pl-5 space-y-3 text-muted-foreground">
              <li><span className="font-medium text-foreground">Shared visibility:</span> Featured across the EdComrade directory, app, and campaigns.</li>
              <li><span className="font-medium text-foreground">Annual Events & Competitions:</span> Inter-school competitions and networking events for administrators, teachers, and students.</li>
              <li><span className="font-medium text-foreground">Professional storytelling:</span> Cinematic photography and video coverage that amplifies your brand story.</li>
              <li><span className="font-medium text-foreground">Collaborative learning:</span> Webinars, growth programs, and workshops on digital transformation and school branding.</li>
              <li><span className="font-medium text-foreground">Partner perks:</span> Access to exclusive partnerships (e.g., MTN broadband setup support, EdTech tool discounts, sponsorships).</li>
            </ul>
          </div>
        </div>
      </section>

      {/* What Community Means */}
      <section className="py-24 md:py-32 px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto space-y-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-balance text-center">
            What being part of EdComrade means
          </h2>

          <div className="space-y-12">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-medium">You learn from each other</h3>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                A school in Accra figured out an innovative way to improve parent engagement. A school in Kumasi
                developed a brilliant timetabling system. A school in Cape Coast created a scholarship program that
                increased enrollment by 40%. In the EdComrade Community, these insights don't stay siloed—they're shared,
                adapted, and implemented across the network.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-medium">Your students compete on bigger stages</h3>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Imagine your brightest Mathematics student competing against the best from 50 other schools in a
                national EdComrade Mathematics Olympiad. Your debate team facing off against schools from across the region.
                Your Science Club showcasing innovations at an inter-school fair. These aren't hypotheticals—they're
                regular events in the EdComrade Community.
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
                The EdComrade Community isn't just about taking—it's about contributing. Your innovations become case studies
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
                "We were struggling with student retention. I posted in the EdComrade Community forum, and within 24 hours,
                three headmasters shared their strategies. We implemented their ideas, adapted them to our context, and
                our retention improved by 35% in one term."
              </p>
              <p className="text-lg text-muted-foreground">— Headmaster, Private School in Cape Coast</p>
            </div>

            <div className="space-y-6">
              <p className="text-xl md:text-2xl font-medium leading-relaxed">
                "My daughter's school participates in EdComrade inter-school competitions. Last year, she competed in a
                national debate tournament and met students from 15 different schools. She's still in touch with them.
                It's not just about academics—it's about building networks and confidence."
              </p>
              <p className="text-lg text-muted-foreground">— Parent, Accra</p>
            </div>

            <div className="space-y-6">
              <p className="text-xl md:text-2xl font-medium leading-relaxed">
                "I'm a new teacher, and I was overwhelmed. Through the EdComrade Community, I was paired with a mentor from
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
                src="/african-students-competing-in-academic-olympiad--f.jpg?height=300&width=400"
                alt="Students competing in EdComrade inter-school competition"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative rounded-3xl overflow-hidden h-[300px] shadow-xl">
              <Image
                src="/african-teachers-in-professional-development-works.jpg?height=300&width=400"
                alt="Teachers in EdComrade professional development session"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative rounded-3xl overflow-hidden h-[300px] shadow-xl">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="School leaders connecting at EdComrade community event"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. The EdComrade Pioneer Circle */}
      <section className="py-24 md:py-32 px-6 lg:px-8 bg-primary">
        <div className="max-w-4xl mx-auto space-y-8 text-primary-foreground">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-balance">
            2. The EdComrade Pioneer Circle
          </h2>
          <p className="text-lg md:text-xl leading-relaxed">
            At the core of our community are the EdComrade Pioneers — the first 100 schools that believed in the vision early.
          </p>
          <h3 className="text-xl md:text-2xl font-semibold">Pioneer privileges include:</h3>
          <ul className="list-disc pl-5 space-y-3">
            <li>Locked‑in pricing for the first 3 years</li>
            <li>Exclusive early access to new tools and updates</li>
            <li>Priority event coverage and storytelling support each year</li>
            <li>Co‑branding as “EdComrade Pioneer Schools” across our ecosystem</li>
            <li>Influence over upcoming features via beta programs and advisory groups</li>
          </ul>
          <p className="text-lg md:text-xl leading-relaxed">
            Being a Pioneer School isn’t just a label — it’s a legacy. It marks you as one of the schools that helped shape the digital backbone of modern education in Africa.
          </p>
        </div>
      </section>

      {/* 3. The Spirit of Collaboration */}
      <section className="py-24 md:py-32 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-balance">
            3. The Spirit of Collaboration
          </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            We believe competition is healthy — but collaboration creates greatness. Every EdComrade school contributes to a shared pool of knowledge, growth strategies, and innovations.
          </p>
          <div className="space-y-3 text-muted-foreground">
            <p>Our network thrives on shared wins:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>When one school’s story goes viral, others gain recognition.</li>
              <li>When a new system feature is born, all schools benefit.</li>
              <li>When we host an event, the entire network gets stronger.</li>
            </ul>
          </div>
          <p className="text-lg md:text-xl leading-relaxed">
            Together, we’re not just redefining education. We’re building a collective advantage — a connected system where every school uplifts the others.
          </p>
        </div>
      </section>

      {/* 4. The Future We’re Building */}
      <section className="py-24 md:py-32 px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-balance text-center">
            4. The Future We’re Building
          </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            We’re laying the foundation for the EdComrade Learning Living Network — a vision where students from different schools interact, collaborate, and grow in homelike hubs that nurture real‑world learning, creativity, and community.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>Students from different schools live, learn, and grow under one ecosystem.</li>
            <li>Parents have full visibility into development, no matter the city.</li>
            <li>Schools share infrastructure, AI tutors, and digital resources.</li>
          </ul>
        </div>
      </section>

      {/* 5. Why Join Us */}
      <section className="py-24 md:py-32 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-balance">5. Why Join Us</h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
            Because your school deserves to grow with others who share your ambition. Because we see schools as brands — and brands as communities. When you stand with EdComrade, you’re not just building your reputation — you’re shaping the story of education in Africa.
          </p>
          <div className="flex items-center justify-center gap-3">
            <Link href="/pioneer-100" className="bg-secondary text-secondary-foreground px-8 py-4 rounded-full text-lg font-medium hover:opacity-90 transition-opacity inline-flex items-center gap-2">
              Join Pioneer 100
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/#contact" className="border border-border px-8 py-4 rounded-full text-lg font-medium hover:bg-accent transition-colors">
              Talk to our team
            </Link>
          </div>
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
            From small rural schools to large urban institutions, the EdComrade community is growing every day.
          </p>
        </div>
      </section>

      {/* Schools in the EdComrade Community */}
      <section className="py-24 px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-balance mb-12 text-center">
            Schools in the EdComrade Community
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
      <Footer/>
    </main>
  )
}
