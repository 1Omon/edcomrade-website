import { MinimalNav } from "@/components/minimal-nav"
import { FadeIn } from "@/components/fade-in"
import { AnimatedCounter } from "@/components/animated-counter"
import { MagneticButton } from "@/components/magnetic-button"
import { TiltCard } from "@/components/tilt-card"
import { ParallaxSection } from "@/components/parallax-section"
import { GlassmorphismCard } from "@/components/glassmorphism-card"
import { SwipeableTestimonials } from "@/components/swipeable-testimonials"
import Link from "next/link"
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
} from "lucide-react"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <MinimalNav />

      {/* Hero Section */}
      <ParallaxSection speed={0.3}>
        <section className="pt-24 sm:pt-32 md:pt-40 pb-16 sm:pb-24 md:pb-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <FadeIn>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-balance mb-4 sm:mb-6 md:mb-8">
                Education.
                <br />
                <span className="text-primary">Transformed.</span>
              </h1>
            </FadeIn>
            <FadeIn delay={200}>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground text-balance mb-8 sm:mb-12 md:mb-16 max-w-4xl mx-auto leading-relaxed px-4">
                Ghana's premier educational technology company, empowering schools to operate seamlessly, communicate
                effectively, and thrive in the digital age.
              </p>
            </FadeIn>
            <FadeIn delay={400}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                <MagneticButton>
                  <Link
                    href="#contact"
                    className="w-full sm:w-auto bg-secondary text-secondary-foreground px-8 sm:px-10 py-4 sm:py-5 rounded-full text-lg sm:text-xl font-medium hover:scale-105 transition-transform inline-flex items-center justify-center gap-3 shadow-lg"
                  >
                    Start Your Journey
                    <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
                  </Link>
                </MagneticButton>
                <MagneticButton>
                  <Link
                    href="#how-it-works"
                    className="w-full sm:w-auto text-foreground px-8 sm:px-10 py-4 sm:py-5 rounded-full text-lg sm:text-xl font-medium hover:bg-accent transition-colors"
                  >
                    See How It Works
                  </Link>
                </MagneticButton>
              </div>
            </FadeIn>
          </div>
        </section>
      </ParallaxSection>

      {/* Results Bar - Social Proof */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12 text-center">
            <FadeIn delay={0}>
              <div>
                <AnimatedCounter
                  end={500}
                  suffix="+"
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-1 sm:mb-2"
                />
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground">Schools Transformed</p>
              </div>
            </FadeIn>
            <FadeIn delay={100}>
              <div>
                <AnimatedCounter
                  end={75}
                  suffix="%"
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-1 sm:mb-2"
                />
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground">Less Admin Work</p>
              </div>
            </FadeIn>
            <FadeIn delay={200}>
              <div>
                <AnimatedCounter
                  end={90}
                  suffix="%"
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-1 sm:mb-2"
                />
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground">Parent Satisfaction</p>
              </div>
            </FadeIn>
            <FadeIn delay={300}>
              <div>
                <AnimatedCounter
                  end={25}
                  suffix="%"
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-1 sm:mb-2"
                />
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground">Enrollment Growth</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Problem Section - Relatable Pain Points */}
      <section id="how-it-works" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance mb-4 sm:mb-6 text-center">
              We understand your challenges
            </h2>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground text-balance mb-12 sm:mb-16 md:mb-20 text-center max-w-3xl mx-auto leading-relaxed">
              Every day, brilliant educators spend hours on paperwork instead of teaching. Parents feel disconnected.
              Schools lose students to competitors not because they lack quality, but because they lack visibility.
            </p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
            <FadeIn delay={0}>
              <GlassmorphismCard className="p-6 sm:p-8 hover:scale-105 transition-transform">
                <div className="space-y-4 sm:space-y-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-destructive/10 flex items-center justify-center">
                    <Clock className="w-6 h-6 sm:w-7 sm:h-7 text-destructive" />
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold">Drowning in paperwork</h3>
                  <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
                    Student records scattered across files. Hours spent on reports that should take minutes. Lost
                    information and incomplete data holding you back.
                  </p>
                </div>
              </GlassmorphismCard>
            </FadeIn>

            <FadeIn delay={100}>
              <GlassmorphismCard className="p-6 sm:p-8 hover:scale-105 transition-transform">
                <div className="space-y-4 sm:space-y-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-destructive/10 flex items-center justify-center">
                    <Users className="w-6 h-6 sm:w-7 sm:h-7 text-destructive" />
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold">Communication breakdown</h3>
                  <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
                    Parents complaining they don't know what's happening. Important announcements getting lost. No easy
                    way to reach families during emergencies.
                  </p>
                </div>
              </GlassmorphismCard>
            </FadeIn>

            <FadeIn delay={200}>
              <GlassmorphismCard className="p-6 sm:p-8 hover:scale-105 transition-transform">
                <div className="space-y-4 sm:space-y-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-destructive/10 flex items-center justify-center">
                    <CreditCard className="w-6 h-6 sm:w-7 sm:h-7 text-destructive" />
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold">Financial chaos</h3>
                  <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
                    Chasing parents for fees. Unclear records of payments. Difficulty planning budgets without clear
                    financial data and transparency concerns.
                  </p>
                </div>
              </GlassmorphismCard>
            </FadeIn>

            <FadeIn delay={300}>
              <GlassmorphismCard className="p-6 sm:p-8 hover:scale-105 transition-transform">
                <div className="space-y-4 sm:space-y-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-destructive/10 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7 text-destructive" />
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold">Losing to competitors</h3>
                  <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
                    Parents choosing schools that "look more modern." Struggling to maintain enrollment. Feeling behind
                    in the digital age despite excellent teaching.
                  </p>
                </div>
              </GlassmorphismCard>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Solution - One Platform */}
      <ParallaxSection speed={0.2}>
        <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-primary">
          <div className="max-w-5xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground text-balance mb-4 sm:mb-6 md:mb-8">
                One platform. Everything solved.
              </h2>
            </FadeIn>
            <FadeIn delay={200}>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-primary-foreground/90 text-balance leading-relaxed px-4">
                ACE Educational Systems brings together school management, learning platforms, finance, and
                marketing—all integrated seamlessly to transform how your institution operates.
              </p>
            </FadeIn>
          </div>
        </section>
      </ParallaxSection>

      {/* Core Services */}
      <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance mb-12 sm:mb-16 md:mb-20 text-center">
              Everything your school needs
            </h2>
          </FadeIn>

          <div className="space-y-16 sm:space-y-24 md:space-y-32">
            {/* School Management */}
            <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-center">
              <FadeIn direction="left">
                <div className="space-y-4 sm:space-y-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <School className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                  </div>
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">School Management</h3>
                  <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
                    End the paperwork nightmare. Manage students, staff, attendance, and records in one unified system.
                    See everything about your school instantly from your phone or computer.
                  </p>
                  <ul className="space-y-3 sm:space-y-4 text-base sm:text-lg">
                    <li className="flex gap-3 items-start">
                      <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-1" />
                      <span>Digital student information system</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-1" />
                      <span>Automated attendance tracking</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-1" />
                      <span>Staff management & payroll</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-1" />
                      <span>Parent communication portal</span>
                    </li>
                  </ul>
                </div>
              </FadeIn>
              <FadeIn direction="right" delay={200}>
                <TiltCard className="bg-accent rounded-3xl p-10 sm:p-16 flex items-center justify-center min-h-[300px] sm:min-h-[400px]">
                  <School className="w-32 h-32 sm:w-40 sm:h-40 text-primary/20" />
                </TiltCard>
              </FadeIn>
            </div>

            {/* Learning Platform */}
            <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-center">
              <FadeIn direction="left" delay={200} className="order-2 lg:order-1">
                <TiltCard className="bg-accent rounded-3xl p-10 sm:p-16 flex items-center justify-center min-h-[300px] sm:min-h-[400px]">
                  <BookOpen className="w-32 h-32 sm:w-40 sm:h-40 text-primary/20" />
                </TiltCard>
              </FadeIn>
              <FadeIn direction="right" className="order-1 lg:order-2">
                <div className="space-y-4 sm:space-y-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <BookOpen className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                  </div>
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">Learning Platform</h3>
                  <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
                    Transform classrooms into dynamic digital learning environments. Deliver courses online, manage
                    assignments, conduct assessments, and track progress—all integrated.
                  </p>
                  <ul className="space-y-3 sm:space-y-4 text-base sm:text-lg">
                    <li className="flex gap-3 items-start">
                      <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-1" />
                      <span>Course content delivery & management</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-1" />
                      <span>Assignment submission & grading</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-1" />
                      <span>Online examination with auto-grading</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-1" />
                      <span>Progress tracking & analytics</span>
                    </li>
                  </ul>
                </div>
              </FadeIn>
            </div>

            {/* Finance & Billing */}
            <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-center">
              <FadeIn direction="left">
                <div className="space-y-4 sm:space-y-6">
                  <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center">
                    <CreditCard className="w-7 h-7 sm:w-8 sm:h-8 text-secondary" />
                  </div>
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">Finance & Billing</h3>
                  <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
                    Take control of your finances. Automated billing with Mobile Money integration. Know exactly who has
                    paid, send reminders, and plan budgets with confidence.
                  </p>
                  <ul className="space-y-3 sm:space-y-4 text-base sm:text-lg">
                    <li className="flex gap-3 items-start">
                      <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-secondary flex-shrink-0 mt-1" />
                      <span>Mobile Money integration (MTN, Vodafone, AirtelTigo)</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-secondary flex-shrink-0 mt-1" />
                      <span>Automated invoicing & payment reminders</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-secondary flex-shrink-0 mt-1" />
                      <span>Real-time payment tracking</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-secondary flex-shrink-0 mt-1" />
                      <span>Financial reports & budget planning</span>
                    </li>
                  </ul>
                </div>
              </FadeIn>
              <FadeIn direction="right" delay={200}>
                <TiltCard className="bg-accent rounded-3xl p-10 sm:p-16 flex items-center justify-center min-h-[300px] sm:min-h-[400px]">
                  <CreditCard className="w-32 h-32 sm:w-40 sm:h-40 text-secondary/20" />
                </TiltCard>
              </FadeIn>
            </div>

            {/* Marketing & Branding */}
            <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-center">
              <FadeIn direction="left" delay={200} className="order-2 lg:order-1">
                <TiltCard className="bg-accent rounded-3xl p-10 sm:p-16 flex items-center justify-center min-h-[300px] sm:min-h-[400px]">
                  <TrendingUp className="w-32 h-32 sm:w-40 sm:h-40 text-secondary/20" />
                </TiltCard>
              </FadeIn>
              <FadeIn direction="right" className="order-1 lg:order-2">
                <div className="space-y-4 sm:space-y-6">
                  <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center">
                    <TrendingUp className="w-7 h-7 sm:w-8 sm:h-8 text-secondary" />
                  </div>
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">Marketing & Branding</h3>
                  <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
                    Stand out in a competitive market. Professional branding, website design, social media management,
                    and strategic campaigns that attract and retain students.
                  </p>
                  <ul className="space-y-3 sm:space-y-4 text-base sm:text-lg">
                    <li className="flex gap-3 items-start">
                      <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-secondary flex-shrink-0 mt-1" />
                      <span>Professional brand identity & logo design</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-secondary flex-shrink-0 mt-1" />
                      <span>Modern, mobile-responsive websites</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-secondary flex-shrink-0 mt-1" />
                      <span>Social media management & content creation</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-secondary flex-shrink-0 mt-1" />
                      <span>Event photography & videography</span>
                    </li>
                  </ul>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Overview */}
      <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance mb-4 sm:mb-6 text-center">
              Choose your path to excellence
            </h2>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground text-balance mb-12 sm:mb-16 md:mb-20 text-center max-w-3xl mx-auto leading-relaxed">
              Flexible packages designed for schools at every stage of their digital journey
            </p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
            {/* Foundation Package */}
            <FadeIn delay={0}>
              <TiltCard className="bg-background border-2 border-border rounded-3xl p-8 sm:p-10 space-y-6 sm:space-y-8 hover:border-primary transition-colors hover:shadow-2xl">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3">Foundation</h3>
                  <p className="text-base sm:text-lg text-muted-foreground">
                    Perfect for schools ready to digitize core operations
                  </p>
                </div>
                <div>
                  <div className="text-4xl sm:text-5xl font-bold mb-1 sm:mb-2">GHS 2,000</div>
                  <div className="text-base sm:text-lg text-muted-foreground">+ GHS 15 per student/year</div>
                </div>
                <ul className="space-y-3 sm:space-y-4">
                  <li className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-base sm:text-lg">Student information system</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-base sm:text-lg">Attendance & grade management</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-base sm:text-lg">Parent SMS communication</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-base sm:text-lg">Professional school website</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-base sm:text-lg">Staff training & support</span>
                  </li>
                </ul>
                <MagneticButton className="w-full">
                  <Link
                    href="#contact"
                    className="block w-full text-center border-2 border-border px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium hover:bg-accent transition-colors"
                  >
                    Get Started
                  </Link>
                </MagneticButton>
              </TiltCard>
            </FadeIn>

            {/* Growth Package */}
            <FadeIn delay={100}>
              <TiltCard className="bg-primary text-primary-foreground border-2 border-primary rounded-3xl p-8 sm:p-10 space-y-6 sm:space-y-8 relative hover:scale-105 transition-transform shadow-2xl">
                <div className="absolute -top-4 sm:-top-5 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground px-4 sm:px-6 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold">
                  MOST POPULAR
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3">Growth</h3>
                  <p className="text-base sm:text-lg text-primary-foreground/90">
                    For schools seeking comprehensive transformation
                  </p>
                </div>
                <div>
                  <div className="text-4xl sm:text-5xl font-bold mb-1 sm:mb-2">GHS 3,500</div>
                  <div className="text-base sm:text-lg text-primary-foreground/90">+ GHS 20 per student/year</div>
                </div>
                <ul className="space-y-3 sm:space-y-4">
                  <li className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-0.5" />
                    <span className="text-base sm:text-lg">Everything in Foundation</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-0.5" />
                    <span className="text-base sm:text-lg">Advanced parent portal</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-0.5" />
                    <span className="text-base sm:text-lg">Mobile app (iOS & Android)</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-0.5" />
                    <span className="text-base sm:text-lg">Social media management</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-0.5" />
                    <span className="text-base sm:text-lg">Event photography (annual)</span>
                  </li>
                </ul>
                <MagneticButton className="w-full">
                  <Link
                    href="#contact"
                    className="block w-full text-center bg-secondary text-secondary-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium hover:opacity-90 transition-opacity"
                  >
                    Get Started
                  </Link>
                </MagneticButton>
              </TiltCard>
            </FadeIn>

            {/* Excellence Package */}
            <FadeIn delay={200}>
              <TiltCard className="bg-background border-2 border-border rounded-3xl p-8 sm:p-10 space-y-6 sm:space-y-8 hover:border-secondary transition-colors hover:shadow-2xl">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3">Excellence</h3>
                  <p className="text-base sm:text-lg text-muted-foreground">
                    For visionary institutions leading the future
                  </p>
                </div>
                <div>
                  <div className="text-4xl sm:text-5xl font-bold mb-1 sm:mb-2">GHS 8,000</div>
                  <div className="text-base sm:text-lg text-muted-foreground">+ GHS 25 per student/year</div>
                </div>
                <ul className="space-y-3 sm:space-y-4">
                  <li className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-base sm:text-lg">Everything in Growth</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-base sm:text-lg">White-label customization</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-base sm:text-lg">Full LMS & exam platform</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-base sm:text-lg">Dedicated account manager</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-base sm:text-lg">24/7 priority support</span>
                  </li>
                </ul>
                <MagneticButton className="w-full">
                  <Link
                    href="#contact"
                    className="block w-full text-center border-2 border-border px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium hover:bg-accent transition-colors"
                  >
                    Contact Sales
                  </Link>
                </MagneticButton>
              </TiltCard>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ACE Community Network */}
      <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance mb-4 sm:mb-6 text-center">
              Join the ACE Community
            </h2>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground text-balance mb-12 sm:mb-16 md:mb-20 text-center max-w-3xl mx-auto leading-relaxed">
              More than software—a network of innovative schools collaborating to elevate education across Africa
            </p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
            <FadeIn delay={0}>
              <GlassmorphismCard className="text-center p-6 sm:p-8 hover:scale-105 transition-transform">
                <div className="space-y-4 sm:space-y-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
                    <Trophy className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold">Inter-School Competitions</h3>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                    Academic olympiads, sports tournaments, science fairs, and innovation challenges. Give your students
                    opportunities to compete and shine on a bigger stage.
                  </p>
                </div>
              </GlassmorphismCard>
            </FadeIn>

            <FadeIn delay={100}>
              <GlassmorphismCard className="text-center p-6 sm:p-8 hover:scale-105 transition-transform">
                <div className="space-y-4 sm:space-y-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
                    <Users className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold">Teacher Development</h3>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                    Professional training programs, best practices sharing, peer mentoring, and leadership development.
                    Continuous learning for your educators.
                  </p>
                </div>
              </GlassmorphismCard>
            </FadeIn>

            <FadeIn delay={200}>
              <GlassmorphismCard className="text-center p-6 sm:p-8 hover:scale-105 transition-transform">
                <div className="space-y-4 sm:space-y-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto">
                    <Globe className="w-8 h-8 sm:w-10 sm:h-10 text-secondary" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold">Student Exchange Programs</h3>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                    Sister school partnerships, virtual cultural exchanges, and international pen pal programs. Build
                    global awareness and connections.
                  </p>
                </div>
              </GlassmorphismCard>
            </FadeIn>
          </div>

          <FadeIn delay={300}>
            <div className="mt-12 sm:mt-16 text-center">
              <MagneticButton>
                <Link
                  href="/community"
                  className="inline-flex items-center gap-2 sm:gap-3 text-lg sm:text-xl font-medium text-primary hover:underline"
                >
                  Explore the Community
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </Link>
              </MagneticButton>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Built for Africa */}
      <ParallaxSection speed={0.2}>
        <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-secondary">
          <div className="max-w-6xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-foreground text-balance mb-12 sm:mb-16 md:mb-20 text-center">
                Built for Africa, by Africans
              </h2>
            </FadeIn>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
              <FadeIn delay={0}>
                <div className="text-center space-y-4 sm:space-y-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-secondary-foreground/10 flex items-center justify-center mx-auto">
                    <Smartphone className="w-8 h-8 sm:w-10 sm:h-10 text-secondary-foreground" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-secondary-foreground">Mobile Money Integration</h3>
                  <p className="text-base sm:text-lg text-secondary-foreground/90 leading-relaxed">
                    Native support for MTN Mobile Money, Vodafone Cash, and AirtelTigo Money. Parents pay fees easily
                    from their phones.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={100}>
                <div className="text-center space-y-4 sm:space-y-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-secondary-foreground/10 flex items-center justify-center mx-auto">
                    <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-secondary-foreground" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-secondary-foreground">Offline-First Design</h3>
                  <p className="text-base sm:text-lg text-secondary-foreground/90 leading-relaxed">
                    Works even with unstable internet. Data syncs automatically when connection is restored. Never lose
                    progress.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={200}>
                <div className="text-center space-y-4 sm:space-y-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-secondary-foreground/10 flex items-center justify-center mx-auto">
                    <FileCheck className="w-8 h-8 sm:w-10 sm:h-10 text-secondary-foreground" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-secondary-foreground">GES Curriculum Aligned</h3>
                  <p className="text-base sm:text-lg text-secondary-foreground/90 leading-relaxed">
                    Designed specifically for Ghana Education Service requirements. Local languages, academic calendars,
                    and reporting standards.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      </ParallaxSection>

      {/* Testimonials */}
      <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance mb-12 sm:mb-16 md:mb-20 text-center">
              Trusted by educators across Ghana
            </h2>
          </FadeIn>

          <div className="md:hidden">
            <SwipeableTestimonials />
          </div>

          {/* Desktop grid view */}
          <div className="hidden md:grid md:grid-cols-2 gap-12">
            <FadeIn delay={0}>
              <TiltCard className="bg-accent rounded-3xl p-8 sm:p-10 space-y-6">
                <div className="flex gap-1 text-primary">
                  {[...Array(5)].map((_, i) => (
                    <Heart key={i} className="w-5 h-5 sm:w-6 sm:h-6 fill-current" />
                  ))}
                </div>
                <p className="text-base sm:text-xl leading-relaxed">
                  "We used to spend entire weekends preparing reports. Now it takes minutes. ACE has given us our time
                  back to focus on what matters—teaching our students."
                </p>
                <div>
                  <div className="font-semibold text-base sm:text-lg">Dr. Kwame Mensah</div>
                  <div className="text-muted-foreground">Headmaster, Accra</div>
                </div>
              </TiltCard>
            </FadeIn>

            <FadeIn delay={100}>
              <TiltCard className="bg-accent rounded-3xl p-8 sm:p-10 space-y-6">
                <div className="flex gap-1 text-primary">
                  {[...Array(5)].map((_, i) => (
                    <Heart key={i} className="w-5 h-5 sm:w-6 sm:h-6 fill-current" />
                  ))}
                </div>
                <p className="text-base sm:text-xl leading-relaxed">
                  "Our fee collection rate went from 60% to 95% in just six months. Parents love the Mobile Money
                  integration, and we finally have clear financial visibility."
                </p>
                <div>
                  <div className="font-semibold text-base sm:text-lg">Mrs. Abena Osei</div>
                  <div className="text-muted-foreground">School Administrator, Kumasi</div>
                </div>
              </TiltCard>
            </FadeIn>

            <FadeIn delay={200}>
              <TiltCard className="bg-accent rounded-3xl p-8 sm:p-10 space-y-6">
                <div className="flex gap-1 text-primary">
                  {[...Array(5)].map((_, i) => (
                    <Heart key={i} className="w-5 h-5 sm:w-6 sm:h-6 fill-current" />
                  ))}
                </div>
                <p className="text-base sm:text-xl leading-relaxed">
                  "Parents actually thank us now for keeping them informed. The communication portal has transformed our
                  relationship with families."
                </p>
                <div>
                  <div className="font-semibold text-base sm:text-lg">Mr. Kofi Asante</div>
                  <div className="text-muted-foreground">Deputy Head, Tema</div>
                </div>
              </TiltCard>
            </FadeIn>

            <FadeIn delay={300}>
              <TiltCard className="bg-accent rounded-3xl p-8 sm:p-10 space-y-6">
                <div className="flex gap-1 text-primary">
                  {[...Array(5)].map((_, i) => (
                    <Heart key={i} className="w-5 h-5 sm:w-6 sm:h-6 fill-current" />
                  ))}
                </div>
                <p className="text-base sm:text-xl leading-relaxed">
                  "Our enrollment increased by 30% after launching our new website and social media presence. ACE helped
                  us tell our story to the right families."
                </p>
                <div>
                  <div className="font-semibold text-base sm:text-lg">Mrs. Ama Darko</div>
                  <div className="text-muted-foreground">School Owner, Takoradi</div>
                </div>
              </TiltCard>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <ParallaxSection speed={0.2}>
        <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-primary">
          <div className="max-w-5xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground text-balance mb-4 sm:mb-6 md:mb-8">
                Our mission is bigger than software
              </h2>
            </FadeIn>
            <FadeIn delay={200}>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-primary-foreground/90 text-balance leading-relaxed mb-8 sm:mb-12">
                To transform one million students' educational experiences by 2030 through innovative digital solutions
                and become the trusted partner for educational institutions across Africa.
              </p>
            </FadeIn>
            <FadeIn delay={400}>
              <MagneticButton>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 sm:gap-3 text-lg sm:text-xl font-medium text-primary-foreground hover:underline"
                >
                  Read Our Story
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </Link>
              </MagneticButton>
            </FadeIn>
          </div>
        </section>
      </ParallaxSection>

      {/* Why Choose ACE */}
      <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance mb-12 sm:mb-16 md:mb-20 text-center">
              Why schools choose ACE
            </h2>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-12">
            <FadeIn delay={0}>
              <GlassmorphismCard className="text-center p-6 hover:scale-105 transition-transform">
                <div className="space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
                    <Shield className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Secure & Reliable</h3>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                    Bank-level encryption, automated backups, 99.9% uptime guarantee
                  </p>
                </div>
              </GlassmorphismCard>
            </FadeIn>

            <FadeIn delay={100}>
              <GlassmorphismCard className="text-center p-6 hover:scale-105 transition-transform">
                <div className="space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
                    <Heart className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Local Support</h3>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                    Based in Ghana, same-day support in your timezone
                  </p>
                </div>
              </GlassmorphismCard>
            </FadeIn>

            <FadeIn delay={200}>
              <GlassmorphismCard className="text-center p-6 hover:scale-105 transition-transform">
                <div className="space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto">
                    <BarChart3 className="w-7 h-7 sm:w-8 sm:h-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold">Proven Results</h3>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                    500+ schools, measurable improvements in efficiency and enrollment
                  </p>
                </div>
              </GlassmorphismCard>
            </FadeIn>

            <FadeIn delay={300}>
              <GlassmorphismCard className="text-center p-6 hover:scale-105 transition-transform">
                <div className="space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto">
                    <Users className="w-7 h-7 sm:w-8 sm:h-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold">True Partnership</h3>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                    We grow with you, providing training, support, and continuous innovation
                  </p>
                </div>
              </GlassmorphismCard>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance mb-4 sm:mb-6 text-center">
              Ready to transform your school?
            </h2>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-12 sm:mb-16 leading-relaxed text-center">
              Let's discuss how ACE can help your institution thrive in the digital age.
            </p>
          </FadeIn>
          <FadeIn delay={400}>
            <GlassmorphismCard className="p-6 sm:p-10">
              <form className="space-y-4 sm:space-y-6">
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <input
                    type="text"
                    placeholder="School Name"
                    className="w-full px-4 sm:px-6 py-3 sm:py-5 rounded-2xl bg-background border-2 border-border text-base sm:text-lg focus:outline-none focus:border-primary transition-colors"
                  />
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 sm:px-6 py-3 sm:py-5 rounded-2xl bg-background border-2 border-border text-base sm:text-lg focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 sm:px-6 py-3 sm:py-5 rounded-2xl bg-background border-2 border-border text-base sm:text-lg focus:outline-none focus:border-primary transition-colors"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 sm:px-6 py-3 sm:py-5 rounded-2xl bg-background border-2 border-border text-base sm:text-lg focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <input
                  type="number"
                  placeholder="Number of Students"
                  className="w-full px-4 sm:px-6 py-3 sm:py-5 rounded-2xl bg-background border-2 border-border text-base sm:text-lg focus:outline-none focus:border-primary transition-colors"
                />
                <textarea
                  placeholder="Tell us about your school and what you're looking for..."
                  rows={4}
                  className="w-full px-4 sm:px-6 py-3 sm:py-5 rounded-2xl bg-background border-2 border-border text-base sm:text-lg focus:outline-none focus:border-primary transition-colors resize-none"
                />
                <MagneticButton className="w-full">
                  <button
                    type="submit"
                    className="w-full bg-secondary text-secondary-foreground px-8 sm:px-10 py-4 sm:py-5 rounded-full text-lg sm:text-xl font-medium hover:scale-105 transition-transform shadow-lg"
                  >
                    Schedule Your Free Demo
                  </button>
                </MagneticButton>
                <p className="text-center text-xs sm:text-sm text-muted-foreground">
                  We'll respond within 24 hours to schedule your personalized demonstration
                </p>
              </form>
            </GlassmorphismCard>
          </FadeIn>
        </div>
      </section>

      {/* Final CTA */}
      <ParallaxSection speed={0.2}>
        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-secondary">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-secondary-foreground text-balance mb-4 sm:mb-6">
                The future of education is here
              </h2>
            </FadeIn>
            <FadeIn delay={200}>
              <p className="text-base sm:text-lg md:text-xl text-secondary-foreground/90 mb-8 sm:mb-10 leading-relaxed">
                Join 500+ forward-thinking schools already transforming education across Ghana
              </p>
            </FadeIn>
            <FadeIn delay={400}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                <MagneticButton>
                  <Link
                    href="#contact"
                    className="w-full sm:w-auto bg-background text-foreground px-8 sm:px-10 py-4 sm:py-5 rounded-full text-lg sm:text-xl font-medium hover:scale-105 transition-transform inline-flex items-center justify-center gap-3 shadow-lg"
                  >
                    Get Started Today
                    <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
                  </Link>
                </MagneticButton>
                <MagneticButton>
                  <Link
                    href="/technology"
                    className="w-full sm:w-auto text-secondary-foreground px-8 sm:px-10 py-4 sm:py-5 rounded-full text-lg sm:text-xl font-medium hover:bg-secondary-foreground/10 transition-colors"
                  >
                    Explore Technology
                  </Link>
                </MagneticButton>
              </div>
            </FadeIn>
          </div>
        </section>
      </ParallaxSection>

      {/* Footer */}
      <footer className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 border-t border-border mb-16 md:mb-0">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-5 gap-8 sm:gap-12 mb-12 sm:mb-16">
            <div className="md:col-span-2">
              <div className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">ACE</div>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4 sm:mb-6">
                Ghana's premier educational technology company, transforming schools through innovative digital
                solutions and strategic partnerships.
              </p>
              <div className="space-y-2 text-sm sm:text-base text-muted-foreground">
                <p>📍 Accra • Kumasi • Takoradi • Tamale</p>
                <p>📧 hello@aceedu.com</p>
                <p>📱 +233 XX XXX XXXX</p>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-base sm:text-lg mb-4 sm:mb-6">Product</h4>
              <ul className="space-y-2 sm:space-y-3 text-muted-foreground">
                <li>
                  <Link href="/technology" className="hover:text-foreground transition-colors text-base sm:text-lg">
                    Technology
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="hover:text-foreground transition-colors text-base sm:text-lg">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="hover:text-foreground transition-colors text-base sm:text-lg">
                    Demo
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-base sm:text-lg mb-4 sm:mb-6">Company</h4>
              <ul className="space-y-2 sm:space-y-3 text-muted-foreground">
                <li>
                  <Link href="/about" className="hover:text-foreground transition-colors text-base sm:text-lg">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/community" className="hover:text-foreground transition-colors text-base sm:text-lg">
                    Community
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors text-base sm:text-lg">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-base sm:text-lg mb-4 sm:mb-6">Connect</h4>
              <ul className="space-y-2 sm:space-y-3 text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors text-base sm:text-lg">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors text-base sm:text-lg">
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors text-base sm:text-lg">
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="hover:text-foreground transition-colors text-base sm:text-lg">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-6 sm:pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-muted-foreground">
            <p>© 2025 ACE Educational Systems. All rights reserved.</p>
            <div className="flex gap-4 sm:gap-6">
              <Link href="#" className="hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-foreground transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
