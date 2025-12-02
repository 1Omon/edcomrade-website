import { MinimalNav } from "@/components/minimal-nav";
import { AnimatedCounter } from "@/components/animated-counter";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  ArrowRight,
  School,
  BookOpen,
  CreditCard,
  TrendingUp,
  Users,
  Trophy,
  CheckCircle2,
  Clock,
  Heart,
  Zap,
  Shield,
  Globe,
  BarChart3,
  FileCheck,
  Smartphone,
  AlertCircle,
  Sparkles,
  Target,
  Eye,
} from "lucide-react";
import { FAQSection } from "@/components/faq-section";
import { Footer } from "@/components/footer";
import Hero from "@/components/hero";

export const metadata: Metadata = {
  title: "EdComrade | We digitize. You inspire.",
  description:
    "EdComrade is building Ghana's digital education future — giving private schools visibility, systems, and intelligence to operate like 21st‑century institutions.",
  openGraph: {
    title: "EdComrade | We digitize. You inspire.",
    description:
      "An ecosystem that merges storytelling, software, and systems to make excellence visible.",
    images: ["/og-home.jpg"],
  },
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <MinimalNav />

      <div className="bg-secondary text-secondary-foreground py-3 px-4 text-center text-sm md:text-base font-medium sticky top-0 z-40 shadow-sm">
        <div className="flex items-center justify-center gap-2">
          <AlertCircle className="w-4 h-4" />
          <span>
            Limited spots available for Q1 2026 onboarding • Early adopters get
            50% off setup fees
          </span>
        </div>
      </div>

      {/* Hero Section */}
      <Hero />

      {/* Results Bar - Social Proof */}
      <section className="py-20 px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div>
              <AnimatedCounter
                end={500}
                suffix="+"
                className="text-6xl md:text-7xl font-light text-primary mb-3"
              />
              <p className="text-base md:text-lg text-muted-foreground">
                Schools To Be Transformed
              </p>
            </div>
            <div>
              <AnimatedCounter
                end={75}
                suffix="%"
                className="text-6xl md:text-7xl font-light text-primary mb-3"
              />
              <p className="text-base md:text-lg text-muted-foreground">
                Less Admin Work
              </p>
            </div>
            <div>
              <AnimatedCounter
                end={90}
                suffix="%"
                className="text-6xl md:text-7xl font-light text-secondary mb-3"
              />
              <p className="text-base md:text-lg text-muted-foreground">
                Parent Satisfaction
              </p>
            </div>
            <div>
              <AnimatedCounter
                end={45}
                suffix="%"
                className="text-6xl md:text-7xl font-light text-secondary mb-3"
              />
              <p className="text-base md:text-lg text-muted-foreground">
                Enrollment Growth
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="how-it-works" className="py-24 md:py-32 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Understanding Your Challenges
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6">
              We understand your challenges
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Every day, brilliant educators spend hours on paperwork instead of
              teaching. Parents feel disconnected. Schools lose students to
              competitors not because they lack quality, but because they lack
              visibility.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: <Clock className="w-7 h-7" />,
                title: "Drowning in paperwork",
                desc: "Student records scattered across files. Hours spent on reports that should take minutes. Lost information and incomplete data holding you back.",
                color: "destructive"
              },
              {
                icon: <Users className="w-7 h-7" />,
                title: "Communication breakdown",
                desc: "Parents complaining they don't know what's happening. Important announcements getting lost. No easy way to reach families during emergencies.",
                color: "destructive"
              },
              {
                icon: <CreditCard className="w-7 h-7" />,
                title: "Financial chaos",
                desc: "Chasing parents for fees. Unclear records of payments. Difficulty planning budgets without clear financial data and transparency concerns.",
                color: "destructive"
              },
              {
                icon: <TrendingUp className="w-7 h-7" />,
                title: "Losing to competitors",
                desc: "Parents choosing schools that 'look more modern.' Struggling to maintain enrollment. Feeling behind in the digital age despite excellent teaching.",
                color: "destructive"
              }
            ].map((item, i) => (
              <div key={i} className="bg-background border border-border rounded-2xl p-8 hover:border-primary/50 hover:shadow-lg transition-all">
                <div className={`w-14 h-14 rounded-xl bg-${item.color}/10 flex items-center justify-center text-${item.color} mb-6`}>
                  {item.icon}
                </div>
                <h3 className="text-2xl font-light mb-3">{item.title}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution - One Platform */}
      <section className="py-24 md:py-32 px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6">
            One ecosystem. Real transformation.
          </h2>
          <p className="text-xl md:text-2xl leading-relaxed opacity-90">
            Storytelling for visibility. Software for systems. Data for
            performance. Community for momentum.
          </p>
        </div>
      </section>

      {/* The EdComrade Framework */}
      <section className="py-24 md:py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Our Framework
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6">
              The EdComrade Framework
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Digital Excellence as Infrastructure — built on four pillars that
              turn schools into modern, trusted brands.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Eye className="w-6 h-6" />,
                title: "Visibility",
                desc: "Cinematic media, branding, and narrative to make excellence visible."
              },
              {
                icon: <School className="w-6 h-6" />,
                title: "Systems",
                desc: "Smart ERP that automates admissions, attendance, comms, and reporting."
              },
              {
                icon: <BarChart3 className="w-6 h-6" />,
                title: "Performance",
                desc: "Dashboards and analytics that track growth and inspire excellence."
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "Community",
                desc: "A collaborative network where schools share knowledge and momentum."
              }
            ].map((pillar, i) => (
              <div key={i} className="bg-background border border-border rounded-2xl p-8 hover:border-primary/50 hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-light mb-3">{pillar.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformation Stories */}
      <section className="py-24 md:py-32 px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto space-y-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-3xl overflow-hidden h-[400px] lg:h-[500px] border border-border shadow-xl">
              <Image
                src="/african-school-administrator-smiling-confidently-w.jpeg"
                alt="School administrator using EdComrade platform"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                For Administrators
              </div>
              <h2 className="text-4xl md:text-5xl font-light">
                From overwhelmed to{" "}
                <span className="text-primary">in control</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Every day, brilliant educators spend hours on paperwork instead
                of teaching. Parents feel disconnected. Schools lose students to
                competitors not because they lack quality, but because they lack
                visibility.
              </p>
              <p className="text-xl leading-relaxed font-medium">
                EdComrade changes that. One platform. Everything solved.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <div className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium">
                For Parents
              </div>
              <h2 className="text-4xl md:text-5xl font-light">
                Parents who feel{" "}
                <span className="text-secondary">connected</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Working parents no longer miss out on their children's
                education. With EdComrade's parent portal, they see grades,
                attendance, and school updates from their phones—anytime,
                anywhere.
              </p>
              <p className="text-xl leading-relaxed font-medium">
                90% of parents report feeling more connected to their child's
                learning journey.
              </p>
            </div>
            <div className="relative rounded-3xl overflow-hidden h-[400px] lg:h-[500px] order-1 lg:order-2 border border-border shadow-xl">
              <Image
                src="/african-parent-smiling-while-checking-child-s-grad.jpeg"
                alt="Parent using EdComrade mobile app"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-24 md:py-32 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Complete Solutions
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light">
              Everything your school needs
            </h2>
          </div>

          <div className="space-y-24">
            {/* School Management */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <School className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-3xl md:text-4xl font-light">
                  School Management
                </h3>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  End the paperwork nightmare. Manage students, staff,
                  attendance, and records in one unified system. See everything
                  about your school instantly from your phone or computer.
                </p>
                <ul className="space-y-3">
                  {[
                    "Digital student information system",
                    "Automated attendance tracking",
                    "Staff management & payroll",
                    "Parent communication portal"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative rounded-3xl overflow-hidden h-[400px] border border-border shadow-xl">
                <Image
                  src="/modern-school-management-dashboard-on-computer-scr.jpg"
                  alt="School management dashboard"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Learning Platform */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative rounded-3xl overflow-hidden h-[400px] order-2 lg:order-1 border border-border shadow-xl">
                <Image
                  src="/african-students-engaged-with-tablets-in-classroom.jpg"
                  alt="Students using learning platform"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-6 order-1 lg:order-2">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <BookOpen className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-3xl md:text-4xl font-light">
                  Learning Platform
                </h3>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Transform classrooms into dynamic digital learning
                  environments. Deliver courses online, manage assignments,
                  conduct assessments, and track progress—all integrated.
                </p>
                <ul className="space-y-3">
                  {[
                    "Course content delivery & management",
                    "Assignment submission & grading",
                    "Online examination with auto-grading",
                    "Progress tracking & analytics"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Finance & Billing */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <CreditCard className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-3xl md:text-4xl font-light">
                  Finance & Billing
                </h3>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Take control of your finances. Automated billing with Mobile
                  Money integration. Know exactly who has paid, send reminders,
                  and plan budgets with confidence.
                </p>
                <ul className="space-y-3">
                  {[
                    "Mobile Money integration (MTN, Vodafone, AirtelTigo)",
                    "Automated invoicing & payment reminders",
                    "Real-time payment tracking",
                    "Financial reports & budget planning"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative rounded-3xl overflow-hidden h-[400px] border border-border shadow-xl">
                <Image
                  src="/african-parent-using-mobile-phone-for-mobile-money.jpeg"
                  alt="Mobile Money payment"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Marketing & Branding */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative rounded-3xl overflow-hidden h-[400px] order-2 lg:order-1 border border-border shadow-xl">
                <Image
                  src="/professional-school-website-on-laptop-and-phone--m.jpeg"
                  alt="School branding materials"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-6 order-1 lg:order-2">
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-3xl md:text-4xl font-light">
                  Marketing & Branding
                </h3>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Stand out in a competitive market. Professional branding,
                  website design, social media management, and strategic
                  campaigns that attract and retain students.
                </p>
                <ul className="space-y-3">
                  {[
                    "Professional brand identity & logo design",
                    "Modern, mobile-responsive websites",
                    "Social media management & content creation",
                    "Event photography & videography"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Overview */}
      <section className="py-24 md:py-32 px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Flexible Options
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6">
              Choose your path to digital excellence
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Whether you're taking your first digital step or ready to reinvent
              your entire institution, EdComrade offers the tools, creativity, and
              systems to get you there.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* MEDIA PACKAGE */}
            <div className="bg-background border border-border rounded-3xl p-10 space-y-8 hover:border-primary/50 hover:shadow-xl transition-all">
              <div>
                <h3 className="text-3xl font-light mb-3">Media Package</h3>
                <p className="text-lg text-muted-foreground">
                  For schools ready to elevate their visibility, storytelling,
                  and admissions through modern digital media.
                </p>
              </div>
              <div>
                <div className="text-5xl font-light mb-2">₵ 5,000</div>
                <div className="text-muted-foreground">
                  one-time setup — optional yearly add-ons available
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  "Free PR via our Schoolpedia Network",
                  "Modern school website with CMS",
                  "Professional photography & videography",
                  "Social media management & ad campaigns",
                  "Admission marketing & storytelling",
                  "Training for digital content updates"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="#contact"
                className="block w-full text-center border-2 border-border px-6 py-4 rounded-full text-lg font-medium hover:border-primary hover:bg-primary/5 transition-all"
              >
                Get Started
              </Link>
            </div>

            {/* ERP PACKAGE */}
            <div className="bg-primary text-primary-foreground rounded-3xl p-10 space-y-8 relative hover:scale-105 transition-transform shadow-2xl">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground px-6 py-2 rounded-full text-sm font-light shadow-lg">
                MOST POPULAR
              </div>
              <div>
                <h3 className="text-3xl font-light mb-3">ERP System</h3>
                <p className="text-lg opacity-90">
                  For schools that want to automate their operations, connect
                  data, and simplify management with precision.
                </p>
              </div>
              <div>
                <div className="text-5xl font-light mb-2">₵ 6,000+</div>
                <div className="opacity-90">
                  per year — based on school size, type & modules selected
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  "Free PR via our Schoolpedia Network",
                  "Comprehensive school ERP system",
                  "Attendance, grading & reporting automation",
                  "Parent portal & mobile app access",
                  "Smart finance, fees & accounting tools",
                  "Analytics & performance insights"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="#contact"
                className="block w-full text-center bg-secondary text-secondary-foreground px-6 py-4 rounded-full text-lg font-medium hover:opacity-90 transition-opacity shadow-lg"
              >
                Get Started
              </Link>
            </div>

            {/* FULL TRANSFORMATION */}
            <div className="bg-background border border-border rounded-3xl p-10 space-y-8 hover:border-secondary/50 hover:shadow-xl transition-all">
              <div>
                <h3 className="text-3xl font-light mb-3">Full Transformation</h3>
                <p className="text-lg text-muted-foreground">
                  For visionary schools and institutions outsourcing their PR,
                  marketing, and technology to one trusted partner — EdComrade.
                </p>
              </div>
              <div>
                <div className="text-5xl font-light mb-2">Custom</div>
                <div className="text-muted-foreground">
                  Contact our sales team for a tailored plan
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  "Everything in Media + ERP",
                  "Dedicated marketing & PR management team",
                  "White-label customization & private cloud hosting",
                  "360° strategy for media, systems & growth",
                  "Dedicated success manager"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="#contact"
                className="block w-full text-center border-2 border-border px-6 py-4 rounded-full text-lg font-medium hover:border-secondary hover:bg-secondary/5 transition-all"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* EdComrade Community */}
      <section className="py-24 md:py-32 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Community Network
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6">
              Join the EdComrade Community
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              More than software—a network of innovative schools collaborating to
              elevate education across Africa
            </p>
          </div>

          <div className="relative rounded-3xl overflow-hidden h-[400px] md:h-[500px] mb-16 border border-border shadow-xl">
            <Image
              src="/diverse-group-of-african-students-from-different-s.jpeg"
              alt="EdComrade Community"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-12 text-white">
                <p className="text-3xl font-light">
                  500+ schools. One community. Endless possibilities.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Trophy className="w-10 h-10" />,
                title: "Inter-School Competitions",
                desc: "Academic olympiads, sports tournaments, science fairs, and innovation challenges. Give your students opportunities to compete and shine on a bigger stage."
              },
              {
                icon: <Users className="w-10 h-10" />,
                title: "Teacher Development",
                desc: "Professional training programs, best practices sharing, peer mentoring, and leadership development. Continuous learning for your educators."
              },
              {
                icon: <Globe className="w-10 h-10" />,
                title: "Student Exchange Programs",
                desc: "Sister school partnerships, virtual cultural exchanges, and international pen pal programs. Build global awareness and connections."
              }
            ].map((item, i) => (
              <div key={i} className="bg-background border border-border rounded-2xl p-8 hover:border-primary/50 hover:shadow-lg transition-all">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-light mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/community"
              className="inline-flex items-center gap-2 text-xl font-medium text-primary hover:underline"
            >
              Explore the Community
              <ArrowRight className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </section>

      {/* Built for Africa */}
      <section className="py-24 md:py-32 px-6 lg:px-8 bg-secondary text-secondary-foreground">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6">
              Built for Africa, by Africans
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Smartphone className="w-10 h-10" />,
                title: "Mobile Money Integration",
                desc: "Native support for MTN Mobile Money, Vodafone Cash, and AirtelTigo Money. Parents pay fees easily from their phones."
              },
              {
                icon: <Zap className="w-10 h-10" />,
                title: "Offline-First Design",
                desc: "Works even with unstable internet. Data syncs automatically when connection is restored. Never lose progress."
              },
              {
                icon: <FileCheck className="w-10 h-10" />,
                title: "GES Curriculum Aligned",
                desc: "Designed specifically for Ghana Education Service requirements. Local languages, academic calendars, and reporting standards."
              }
            ].map((item, i) => (
              <div key={i} className="text-center space-y-6">
                <div className="w-20 h-20 rounded-xl bg-secondary-foreground/10 flex items-center justify-center mx-auto">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-light">{item.title}</h3>
                <p className="text-lg opacity-90 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-32 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Success Stories
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light">
              Trusted by educators across Ghana
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                image: "/professional-african-male-headmaster-portrait--con.jpeg",
                name: "Dr. Kusi Mensah",
                role: "Headmaster, Accra",
                quote: "We used to spend entire weekends preparing reports. Now it takes minutes. EdComrade has given us our time back to focus on what matters—teaching our students."
              },
              {
                image: "/professional-african-female-school-administrator-p.jpeg",
                name: "Mrs. Abena Osei",
                role: "School Administrator, Kumasi",
                quote: "Our fee collection rate went from 60% to 95% in just six months. Parents love the Mobile Money integration, and we finally have clear financial visibility."
              },
              {
                image: "/professional-african-male-deputy-head-portrait--fr.jpeg",
                name: "Mr. Samuel Asante",
                role: "Deputy Head, Tema",
                quote: "Parents actually thank us now for keeping them informed. The communication portal has transformed our relationship with families."
              },
              {
                image: "/professional-african-female-school-owner-portrait-.jpeg",
                name: "Mrs. Patricia Koomson",
                role: "School Owner, Takoradi",
                quote: "Our enrollment increased by 30% after launching our new website and social media presence. EdComrade helped us tell our story to the right families."
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-background border border-border rounded-3xl p-8 hover:border-primary/50 hover:shadow-lg transition-all">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-border">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-light text-lg">{testimonial.name}</div>
                    <div className="text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
                <div className="flex gap-1 text-primary mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Heart key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  "{testimonial.quote}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 md:py-32 px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-8">
            Our mission is bigger than software
          </h2>
          <p className="text-xl md:text-2xl leading-relaxed mb-10 opacity-90">
            To transform one million students' educational experiences by 2030
            through innovative digital solutions and become the trusted partner
            for educational institutions across Africa.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-xl font-medium hover:underline"
          >
            Read Our Story
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>

      {/* Why Choose EdComrade */}
      <section className="py-24 md:py-32 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Why EdComrade
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light">
              Why schools choose EdComrade
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Secure & Reliable",
                desc: "Bank-level encryption, automated backups, 99.9% uptime guarantee",
                color: "primary"
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Local Support",
                desc: "Based in Ghana, same-day support in your timezone",
                color: "primary"
              },
              {
                icon: <BarChart3 className="w-8 h-8" />,
                title: "Proven Results",
                desc: "Over a dozen schools, measurable improvements in efficiency and enrollment",
                color: "secondary"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "True Partnership",
                desc: "We grow with you, providing training, support, and continuous innovation",
                color: "secondary"
              }
            ].map((item, i) => (
              <div key={i} className="bg-background border border-border rounded-2xl p-8 hover:border-primary/50 hover:shadow-lg transition-all text-center">
                <div className={`w-16 h-16 rounded-xl bg-${item.color}/10 flex items-center justify-center text-${item.color} mx-auto mb-6`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-light mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection />

      {/* Contact Section */}
      <section id="contact" className="py-24 md:py-32 px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Get Started
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6">
              Ready to transform your school?
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Let's discuss how EdComrade can help your institution thrive in the
              digital age.
            </p>
          </div>

          <div className="bg-background border-2 border-border rounded-3xl p-10 shadow-xl">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="School Name"
                  className="w-full px-6 py-4 rounded-xl bg-background border border-border text-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                />
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-6 py-4 rounded-xl bg-background border border-border text-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-6 py-4 rounded-xl bg-background border border-border text-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-6 py-4 rounded-xl bg-background border border-border text-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>
              <input
                type="number"
                placeholder="Number of Students"
                className="w-full px-6 py-4 rounded-xl bg-background border border-border text-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
              />
              <textarea
                placeholder="Tell us about your school and what you're looking for..."
                rows={4}
                className="w-full px-6 py-4 rounded-xl bg-background border border-border text-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
              />
              <button
                type="submit"
                className="w-full bg-secondary text-secondary-foreground px-8 py-5 rounded-full text-xl font-medium hover:shadow-lg hover:scale-105 transition-all"
              >
                Schedule Your Free Demo
              </button>
              <p className="text-center text-sm text-muted-foreground">
                We'll respond within 24 hours to schedule your personalized
                demonstration
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-32 px-6 lg:px-8 bg-secondary text-secondary-foreground">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6">
            The future of education is here
          </h2>
          <p className="text-xl md:text-2xl mb-10 leading-relaxed opacity-90">
            Join the 100 forward-thinking schools ready to transform education
            across Ghana
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#contact"
              className="w-full sm:w-auto bg-background text-foreground px-10 py-5 rounded-full text-xl font-medium hover:shadow-lg hover:scale-105 transition-all inline-flex items-center justify-center gap-2"
            >
              Get Started Today
              <ArrowRight className="w-6 h-6" />
            </Link>
            <Link
              href="/technology"
              className="w-full sm:w-auto border-2 border-secondary-foreground/20 px-10 py-5 rounded-full text-xl font-medium hover:bg-secondary-foreground/10 transition-all"
            >
              Explore Technology
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}