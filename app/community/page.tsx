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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-balance ">
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

{/* Why Join Us + Social Proof (Merged Section) */}
<section className="relative py-28 md:py-36 px-6 lg:px-8 overflow-hidden">
  {/* Background image with cinematic overlay */}
  <div 
    className="absolute inset-0 z-0 bg-cover bg-center brightness-50" 
    style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=2000&auto=format&fit=crop')",
    }}
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-0" />

  <div className="relative z-10 max-w-5xl mx-auto text-center space-y-10">
    <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white text-balance">
      Why Join the <span className="font-semibold text-secondary">Pioneer 100</span> Movement
    </h2>
    <p className="text-lg md:text-xl text-gray-200 leading-relaxed font-light max-w-3xl mx-auto">
      Because your school deserves to grow alongside others who share your ambition.  
      Because we see schools as <strong>brands</strong> — and brands as <strong>communities</strong>.  
      When you stand with EdComrade, you’re not just building your reputation —  
      you’re helping shape the story of education across Africa.
    </p>

    {/* Image gallery for emotional storytelling */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-12">
      <div className="rounded-2xl overflow-hidden shadow-lg">
        <img 
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop" 
          alt="School collaboration" 
          className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="rounded-2xl overflow-hidden shadow-lg">
        <img 
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop" 
          alt="Innovation and leadership" 
          className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="rounded-2xl overflow-hidden shadow-lg">
        <img 
          src="https://images.unsplash.com/photo-1573496799515-eef1b06a4932?q=80&w=800&auto=format&fit=crop" 
          alt="Community of schools" 
          className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="rounded-2xl overflow-hidden shadow-lg">
        <img 
          src="https://images.unsplash.com/photo-1497493292307-31c376b6e479?q=80&w=800&auto=format&fit=crop" 
          alt="Growth and progress" 
          className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
    </div>

    {/* Call to action */}
    <div className="flex flex-wrap items-center justify-center gap-4">
      <Link 
        href="/pioneer-100" 
        className="bg-secondary text-secondary-foreground px-8 py-4 rounded-full text-lg font-medium hover:opacity-90 transition-opacity inline-flex items-center gap-2"
      >
        Join Pioneer 100
        <ArrowRight className="w-5 h-5" />
      </Link>
      <Link 
        href="/#contact" 
        className="border border-white text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white hover:text-black transition-colors"
      >
        Talk to our team
      </Link>
    </div>

    {/* Social proof embedded for authority */}
    <div className="pt-20 text-white/90">
      <div className="text-6xl font-bold text-secondary mb-3">500+</div>
      <h3 className="text-3xl lg:text-4xl font-semibold mb-4">
        Schools Estimated to Join the Network
      </h3>
      <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
        From small rural schools to large urban institutions, the EdComrade community is expanding —  
        a movement of educators, innovators, and visionaries shaping Africa’s educational renaissance.
      </p>
    </div>
  </div>
</section>


      {/* Schools in the EdComrade Community */}
      {/* <section className="py-24 px-6 lg:px-8 bg-muted/30">
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
      </section> */}

      {/* Footer */}
      <Footer/>
    </main>
  )
}



// "use client"

// import Image from "next/image"
// import Link from "next/link"
// import { motion } from "framer-motion"

// export default function CommunityPage() {
//   return (
//     <main className="bg-white text-gray-900 overflow-hidden">
//       {/* === HERO SECTION === */}
//       <section className="relative h-[90vh] flex items-center justify-center text-center">
//         <Image
//           src="https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1600&q=80"
//           alt="Students walking together at sunrise"
//           fill
//           className="object-cover brightness-75"
//           priority
//         />
//         <div className="relative z-10 px-6">
//           <motion.h1
//             className="text-5xl md:text-7xl font-light text-white leading-tight drop-shadow-xl"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//           >
//             A movement of
//             <br />
//             <span className="font-semibold text-primary">schools rising together.</span>
//           </motion.h1>
//           <motion.p
//             className="mt-6 text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto font-light"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.6 }}
//           >
//             Join a nationwide network of excellence designed to empower, inspire, and celebrate schools that dare to lead.
//           </motion.p>

//           <motion.div
//             className="mt-10"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 1 }}
//           >
//             <Link
//               href="/pioneer-100"
//               className="bg-primary text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-primary/90 transition"
//             >
//               Join Pioneer 100
//             </Link>
//           </motion.div>
//         </div>
//       </section>

//       {/* === SECTION 2: THE POWER OF THE NETWORK === */}
//       <section className="py-24 px-6 lg:px-12 bg-gradient-to-b from-white to-gray-50">
//         <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
//           <div className="relative h-[420px] rounded-3xl overflow-hidden shadow-xl">
//             <Image
//               src="https://images.unsplash.com/photo-1600607687920-4e2b9c65d4e7?auto=format&fit=crop&w=1600&q=80"
//               alt="Teacher guiding students outdoors"
//               fill
//               className="object-cover"
//             />
//           </div>
//           <div className="space-y-6">
//             <h2 className="text-4xl md:text-5xl font-light">
//               The Power of the <span className="font-semibold text-primary">EdComrade Network</span>
//             </h2>
//             <p className="text-lg text-gray-600 leading-relaxed">
//               The EdComrade Network connects hundreds of schools across Ghana into one collaborative digital ecosystem. Through shared infrastructure, events, and storytelling platforms, schools gain visibility, share insights, and attract more parents and opportunities.
//             </p>
//             <p className="text-lg text-gray-600 leading-relaxed">
//               As part of our network, schools enjoy shared visibility, annual competitions, professional storytelling, collaborative learning, and exclusive partner perks.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* === SECTION 3: WHAT COMMUNITY MEANS === */}
//       <section className="py-28 bg-gray-900 text-gray-50 relative">
//         <div className="absolute inset-0">
//           <Image
//             src="https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=1600&q=80"
//             alt="Aerial of a school campus"
//             fill
//             className="object-cover opacity-40"
//           />
//         </div>

//         <div className="relative max-w-6xl mx-auto text-center space-y-8 px-6">
//           <h2 className="text-4xl md:text-5xl font-light">
//             What being part of EdComrade means
//           </h2>
//           <p className="max-w-3xl mx-auto text-lg text-gray-200">
//             Every school joins a vibrant community that learns, shares, and grows together.
//           </p>

//           <div className="grid md:grid-cols-3 gap-8 mt-16">
//             {[
//               {
//                 title: "You Learn from Each Other",
//                 desc: "A school in Accra discovers a new way to drive parent engagement. Days later, that same idea is adopted by schools in Tamale and Takoradi. These insights are shared, adapted, and implemented across the network.",
//                 img: "https://i0.wp.com/www.gbcghanaonline.com/wp-content/uploads/2025/08/DEBATE-PIC-1-1.jpg",
//               },
//               {
//                 title: "Your Students Compete Nationally",
//                 desc: "Your brightest students compete in national EdComrade Olympiads. Your debate team faces off against schools from across the region. Your Science Club showcases innovations at inter-school fairs.",
//                 img: "https://st2.depositphotos.com/1011643/7062/i/950/depositphotos_70622223-stock-photo-group-of-african-college-students.jpg",
//               },
//               {
//                 title: "Your Teachers Grow Together",
//                 desc: "Monthly professional development sessions. Peer mentoring programs. Subject-specific forums where your teachers discuss curriculum challenges with hundreds of educators across Ghana.",
//                 img: "https://cdn.modernghana.com/content__/640/457/33201824712_ola_girls.jpg",
//               },
//             ].map((item, i) => (
//               <div key={i} className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 space-y-4">
//                 <div className="relative h-48 rounded-2xl overflow-hidden">
//                   <Image src={item.img} alt={item.title} fill className="object-cover" />
//                 </div>
//                 <h3 className="text-2xl font-semibold">{item.title}</h3>
//                 <p className="text-gray-200 text-base">{item.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* === SECTION 4: REAL STORIES === */}
//       <section className="py-24 px-6 lg:px-12 bg-gradient-to-b from-gray-50 to-white">
//         <div className="max-w-5xl mx-auto space-y-16">
//           <h2 className="text-center text-4xl md:text-5xl font-light">
//             Stories from the <span className="font-semibold text-primary">community</span>
//           </h2>

//           <div className="space-y-12">
//             <div className="bg-white rounded-3xl p-8 shadow-lg space-y-4">
//               <p className="text-xl md:text-2xl font-light leading-relaxed text-gray-700">
//                 "We were struggling with student retention. I posted in the EdComrade Community forum, and within 24 hours, three headmasters shared their strategies. We implemented their ideas, adapted them to our context, and our retention improved by 35% in one term."
//               </p>
//               <p className="text-lg text-gray-500">— Headmaster, Private School in Cape Coast</p>
//             </div>

//             <div className="bg-white rounded-3xl p-8 shadow-lg space-y-4">
//               <p className="text-xl md:text-2xl font-light leading-relaxed text-gray-700">
//                 "My daughter's school participates in EdComrade inter-school competitions. Last year, she competed in a national debate tournament and met students from 15 different schools. She's still in touch with them. It's not just about academics—it's about building networks and confidence."
//               </p>
//               <p className="text-lg text-gray-500">— Parent, Accra</p>
//             </div>

//             <div className="bg-white rounded-3xl p-8 shadow-lg space-y-4">
//               <p className="text-xl md:text-2xl font-light leading-relaxed text-gray-700">
//                 "I'm a new teacher, and I was overwhelmed. Through the EdComrade Community, I was paired with a mentor from another school who's been teaching for 15 years. She's helped me navigate classroom management, curriculum planning, and parent communication."
//               </p>
//               <p className="text-lg text-gray-500">— Teacher, Junior High School in Kumasi</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* === SECTION 5: GALLERY === */}
//       <section className="py-24 bg-gray-50">
//         <div className="max-w-6xl mx-auto space-y-10 px-6">
//           <h2 className="text-center text-4xl md:text-5xl font-light">
//             Moments that define the <span className="font-semibold text-primary">movement</span>
//           </h2>

//           <div className="grid md:grid-cols-3 gap-6">
//             {[
//               "https://profuturo.education/wp-content/uploads/2021/05/IMG_5777-scaled.jpg",
//               "https://africancentreforschoolleadership.org/content/themes/yootheme/cache/a6/2267-scaled-a6cc4868.jpeg",
//               "https://www.vvob.org/sites/belgium/files/images/mainimagebig/a_school_leader_l_gives_constructive_feedback_to_a_teacher_after_lesson_observation.jpeg",
//               "https://i0.wp.com/esdev.org/wp-content/uploads/2023/08/teacher-pro.jpg?fit=650%2C433&ssl=1",
//               "https://bisghana.com.gh/wp-content/uploads/2016/12/Un-Day-2016-18-1170x568.jpg",
//               "https://www.ghanadistricts.com/Content/Slider/1fc59a1e-3951-4ca5-9fda-313ff82d27fc.jpg",
//             ].map((img, i) => (
//               <div key={i} className="relative h-64 md:h-80 rounded-3xl overflow-hidden shadow-lg">
//                 <Image src={img} alt="Gallery image" fill className="object-cover" />
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* === SECTION 6: PIONEER CIRCLE === */}
//       <section className="py-24 px-6 lg:px-12 bg-gradient-to-b from-white to-gray-50">
//         <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
//           <div className="space-y-6">
//             <h2 className="text-4xl md:text-5xl font-light">
//               The EdComrade <span className="font-semibold text-primary">Pioneer Circle</span>
//             </h2>
//             <p className="text-lg text-gray-600 leading-relaxed">
//               At the core of our community are the EdComrade Pioneers — the first 100 schools that believed in the vision early.
//             </p>
//             <ul className="space-y-3 text-gray-600">
//               <li className="flex items-start">
//                 <span className="text-primary mr-2">•</span>
//                 <span>Locked-in pricing for the first 3 years</span>
//               </li>
//               <li className="flex items-start">
//                 <span className="text-primary mr-2">•</span>
//                 <span>Exclusive early access to new tools and updates</span>
//               </li>
//               <li className="flex items-start">
//                 <span className="text-primary mr-2">•</span>
//                 <span>Priority event coverage and storytelling support</span>
//               </li>
//               <li className="flex items-start">
//                 <span className="text-primary mr-2">•</span>
//                 <span>Co-branding as "EdComrade Pioneer Schools"</span>
//               </li>
//             </ul>
//           </div>
//           <div className="relative h-[420px] rounded-3xl overflow-hidden shadow-xl">
//             <Image
//               src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1600&q=80"
//               alt="Students collaborating"
//               fill
//               className="object-cover"
//             />
//           </div>
//         </div>
//       </section>

//       {/* === SECTION 7: SOCIAL PROOF === */}
//       <section className="py-24 bg-gray-900 text-white text-center">
//         <div className="max-w-6xl mx-auto px-6">
//           <div className="text-6xl md:text-7xl font-bold mb-4">500+</div>
//           <h2 className="text-3xl md:text-4xl font-light mb-6">
//             Schools estimated to join the network
//           </h2>
//           <p className="text-xl text-gray-300 max-w-2xl mx-auto">
//             From small rural schools to large urban institutions, the EdComrade community is growing every day.
//           </p>
//         </div>
//       </section>

//       {/* === SECTION 8: CTA === */}
//       <section className="py-28 bg-primary text-white text-center">
//         <div className="max-w-4xl mx-auto space-y-8 px-6">
//           <h2 className="text-4xl md:text-5xl font-light">
//             Your school deserves to grow with others <br /> <span className="font-semibold">who share your ambition.</span>
//           </h2>
//           <p className="text-xl md:text-2xl font-light text-white/90">
//             When you stand with EdComrade, you're not just building your reputation — you're shaping the story of education in Africa.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Link
//               href="/pioneer-100"
//               className="bg-white text-primary px-10 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition"
//             >
//               Join the Pioneer 100
//             </Link>
//             <Link
//               href="/#contact"
//               className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition"
//             >
//               Talk to our team
//             </Link>
//           </div>
//         </div>
//       </section>
//     </main>
//   )
// }