import Link from "next/link";
import {
  ArrowRight,
  Zap,
  Layers,
  Puzzle,
  Sparkles,
  Rocket,
  Award,
  Users,
  DollarSign,
  Bell,
  Brain,
  BookOpen,
  TrendingUp,
  Clock,
  CheckCircle2,
  Target,
} from "lucide-react";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";
import { MinimalNav } from "@/components/minimal-nav";
import { FC } from "react";
import Image from "next/image";


export const metadata: Metadata = {
  metadataBase: new URL("https://edcomrade.com"),
  title: {
    default:
      "EdComrade Technology | School Management System, ERP & Digital Infrastructure for Ghanaian Schools",
    template: "%s | EdComrade Technology",
  },
  description:
    "EdComrade provides the most advanced school management technology in Ghana — ERP system, parent portal, AI tools, custom digital infrastructure, Schoolpedia integration, analytics, communication, finance, academics, and more.",
  keywords: [
    "EdComrade",
    "school ERP Ghana",
    "school management system Ghana",
    "school software Ghana",
    "parent portal Ghana",
    "school technology Africa",
    "education technology Ghana",
    "AI school systems",
    "school analytics Ghana",
    "private school software Ghana",
    "Schoolpedia integration",
    "Ghana school digitization",
    "LMS Ghana",
    "online school tools Ghana",
    "school automation Ghana",
    "best ERP for schools Ghana"
  ],
  openGraph: {
    type: "website",
    locale: "en_GH",
    url: "https://edcomrade.com/technology",
    title:
      "EdComrade Technology | Modern School ERP, AI Tools & Digital Ecosystem",
    description:
      "A modern technology ecosystem for Ghanaian schools — ERP, parent portal, AI-driven insights, Schoolpedia visibility, communication tools, analytics, and custom infrastructure.",
    images: [
      {
        url: "/og-technology.jpg",
        width: 1200,
        height: 630,
        alt: "EdComrade Technology – ERP & Digital Infrastructure for Schools",
      },
    ],
    siteName: "EdComrade",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "EdComrade Technology | Intelligent ERP & School Management for Ghana",
    description:
      "EdComrade builds digital tools that simplify school operations — ERP, parent portal, Schoolpedia integration, AI analytics, and custom systems.",
    images: ["/og-technology.jpg"],
    creator: "@edcomrade",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://edcomrade.com/technology",
  },
}

export default function TechnologyPage() {
  return (
    <main className="min-h-screen bg-background">
      <MinimalNav />

      {/* Hero with Story Hook */}
      <section className="relative pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-8 mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              The Modern School Operating System
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight">
              It's Monday Morning.
              <br />
              <span className="text-primary font-medium">
                Do You Know Where Your Students Are?
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Mr. Mensah does. Mrs. Acheampong knows exactly who hasn't paid
              fees. Headmaster Thompson just approved 15 lesson notes from his
              phone. And Akosua's mum checked her daughter's results without
              calling the school office.
            </p>

            <p className="text-lg text-muted-foreground max-w-3xl mx-auto italic">
              Welcome to what happens when a Ghanaian school stops running on
              WhatsApp groups, Excel sheets named "FINAL_FINAL_v3_REAL.xlsx",
              and prayers.
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-border">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
              <div className="text-center space-y-4 p-8">
                <div className="w-32 h-32 mx-auto rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center border-4 border-primary/30">
                  <Zap className="w-16 h-16 text-primary" />
                </div>
                <p className="text-2xl font-light text-foreground/80">
                  Modern School Dashboard
                </p>
                <p className="text-sm text-muted-foreground">
                  Real-time insights • Seamless operations • Happy parents
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Story */}
      <section className="py-20 px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-xl border border-border">
              <div className="absolute inset-0 bg-gradient-to-br from-destructive/20 to-destructive/5 flex items-center justify-center p-8">
                <div className="space-y-6 text-center">
                  <div className="text-6xl">📊❌</div>
                  <div className="space-y-3">
                    <div className="bg-background/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                      <p className="text-sm font-medium text-muted-foreground">
                        Excel_Final_REAL_v3_2024.xlsx
                      </p>
                    </div>
                    <div className="bg-background/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                      <p className="text-sm font-medium text-muted-foreground">
                        WhatsApp: 47 unread messages
                      </p>
                    </div>
                    <div className="bg-background/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                      <p className="text-sm font-medium text-muted-foreground">
                        Notebook missing since Tuesday
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Story */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-light">
                Let's Be Honest About How
                <span className="text-primary font-medium">
                  {" "}
                  Most Schools Operate
                </span>
              </h2>

              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  It's 8:45 AM. The proprietress is juggling three phones — one
                  parent wants to know why Kwame's result isn't ready, another
                  is asking about next term's fees (for the fifth time), and the
                  accountant is calling about a payment that "got lost" in the
                  mobile money records.
                </p>

                <p>
                  Meanwhile, Teacher Adjoa is frantically printing attendance
                  sheets because the "system" is actually a notebook that went
                  missing last Tuesday.
                </p>

                <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-xl">
                  <p className="text-primary font-medium text-xl">
                    Here's the truth: Great schools are losing students to
                    mediocre schools with better websites.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Transformation */}
      <section className="py-24 px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-8 mb-16">
            <h2 className="text-4xl md:text-5xl font-light">
              What If Your School Worked Like
              <span className="font-medium"> This Instead?</span>
            </h2>

            {/* Center Image */}
            <div className="relative w-full max-w-4xl mx-auto h-[450px] md:h-[350px] rounded-3xl overflow-hidden shadow-2xl border-2 border-primary-foreground/20">
              <div className="absolute inset-0 bg-gradient-to-br from-background/95 to-background/90 backdrop-blur-sm">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-8 h-full">
                  <div className="bg-primary/10 rounded-2xl p-6 flex flex-col items-center justify-center text-center">
                    <Clock className="w-12 h-12 text-primary mb-3" />
                    <p className="text-sm font-medium text-foreground">
                      9:00 AM
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">
                      Dashboard loaded. All data synced.
                    </p>
                  </div>
                  <div className="bg-secondary/10 rounded-2xl p-6 flex flex-col items-center justify-center text-center">
                    <DollarSign className="w-12 h-12 text-secondary mb-3" />
                    <p className="text-sm font-medium text-foreground">
                      11:30 AM
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">
                      45 reminders sent. 15 paid instantly.
                    </p>
                  </div>
                  <div className="bg-primary/10 rounded-2xl p-6 flex flex-col items-center justify-center text-center">
                    <Users className="w-12 h-12 text-primary mb-3" />
                    <p className="text-sm font-medium text-foreground">
                      7:00 PM
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">
                      Parents check portal. Zero calls.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-2xl font-light text-center max-w-3xl mx-auto opacity-90">
            This isn't science fiction. It's what 50+ Ghanaian schools are
            already doing with
            <span className="font-medium mx-2">EdComrade SchoolOS</span>
          </p>
        </div>
      </section>

      {/* The Three Pillars - Visual Heavy */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              The Foundation
            </div>
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              Three Things Every School
              <span className="text-primary font-medium"> Needs to Thrive</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Not complicated software. Not foreign systems. Just these three
              essentials — done brilliantly.
            </p>
          </div>

          <div className="space-y-24">
            {/* 1. Website */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  <Award className="w-4 h-4" />
                  Digital First Impression
                </div>
                <h3 className="text-3xl md:text-4xl font-light">
                  A Website That Actually
                  <span className="text-primary font-medium"> Works</span>
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Not a Facebook page. Not a number on Google. A real,
                  professional, cinematic website that makes parents say "Wow,
                  this school is serious."
                </p>

                <div className="space-y-4">
                  {[
                    "Custom cinematic design (no templates)",
                    "Online admissions portal built-in",
                    "Galleries, programs, staff profiles",
                    "SEO optimized for local parent searches",
                    "Mobile-first responsive design",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-primary/10 rounded-xl p-6 border border-primary/20">
                  <p className="font-medium text-primary">
                    Result: 3× more admission enquiries in the first term
                  </p>
                </div>
              </div>

              {/* Image */}
              <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-border order-1 lg:order-2">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5">
                  <div className="p-8 space-y-4">
                    <div className="bg-background rounded-2xl shadow-xl border border-border overflow-hidden">
                      <div className="bg-primary/20 h-12 flex items-center px-4 gap-2">
                        <div className="w-3 h-3 rounded-full bg-destructive/50"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                      </div>
                      <div className="p-6 space-y-4">
                        <div className="text-center space-y-3">
                          <div className="w-20 h-20 rounded-full bg-primary/10 mx-auto flex items-center justify-center">
                            <Award className="w-10 h-10 text-primary" />
                          </div>
                          <h4 className="text-xl font-medium">
                            Excellence Academy
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            Shaping Tomorrow's Leaders
                          </p>
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                          <div className="bg-muted rounded-lg p-3 text-center">
                            <p className="text-xs text-muted-foreground">
                              Programs
                            </p>
                          </div>
                          <div className="bg-muted rounded-lg p-3 text-center">
                            <p className="text-xs text-muted-foreground">
                              Admissions
                            </p>
                          </div>
                          <div className="bg-muted rounded-lg p-3 text-center">
                            <p className="text-xs text-muted-foreground">
                              Gallery
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-center text-muted-foreground">
                      Beautiful, professional, converting.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. SchoolOS - Hero */}
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-12 border border-primary/20">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Image Left */}
                <div className="relative h-[450px] rounded-2xl overflow-hidden shadow-xl border border-border">
                  <div className="absolute inset-0 bg-background">
                    <div className="p-6 space-y-4">
                      {/* Dashboard mockup */}
                      <div className="bg-primary/5 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-4">
                          <h5 className="font-medium text-sm">
                            School Dashboard
                          </h5>
                          <span className="text-xs text-muted-foreground">
                            Today
                          </span>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          <div className="bg-background rounded-lg p-3 border border-border flex flex-col items-center justify-center">
                            <p className="text-xl md:text-2xl font-bold text-primary">
                              94%
                            </p>
                            <p className="text-xs text-muted-foreground">
                              Attendance
                            </p>
                          </div>
                          <div className="bg-background rounded-lg p-3 border border-border flex flex-col items-center justify-center">
                            <p className="text-xl md:text-2xl font-bold text-secondary">
                              ₵45k
                            </p>
                            <p className="text-xs text-muted-foreground">
                              Collected
                            </p>
                          </div>
                          <div className="bg-background rounded-lg p-3 border border-border flex flex-col items-center justify-center">
                            <p className="text-xl md:text-2xl font-bold">12</p>
                            <p className="text-xs text-muted-foreground">
                              Absent
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        {[
                          "Student Records",
                          "Fee Tracking",
                          "Lesson Notes",
                          "Reports",
                        ].map((item, i) => (
                          <div
                            key={i}
                            className="bg-background/50 rounded-lg p-3 border border-border flex items-center gap-3"
                          >
                            <CheckCircle2 className="w-4 h-4 text-primary" />
                            <span className="text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Right */}
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                    <Zap className="w-4 h-4" />
                    THE CORE SYSTEM
                  </div>
                  <h3 className="text-3xl md:text-4xl font-light">
                    SchoolOS — Your
                    <span className="text-primary font-medium">
                      {" "}
                      Digital Backbone
                    </span>
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Everything your school needs to run smoothly. No more
                    notebooks, Excel confusion, or "I'll check and get back to
                    you." Just clarity.
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: Users, text: "Student Management" },
                      { icon: DollarSign, text: "Fees & Billing" },
                      { icon: BookOpen, text: "Academic Records" },
                      { icon: Bell, text: "Communication" },
                      { icon: Target, text: "Attendance System" },
                      { icon: Layers, text: "Teacher Portal" },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="bg-background rounded-xl p-4 border border-border flex items-center gap-3"
                      >
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-5 h-5 text-primary" />
                        </div>
                        <span className="text-sm font-medium">{item.text}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-background rounded-xl p-6 border border-primary/30 shadow-lg">
                    <p className="text-sm text-muted-foreground">
                      💡{" "}
                      <span className="font-medium text-foreground">
                        Works on any device.
                      </span>{" "}
                      Teachers love it. Admins breathe easier.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Visibility */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content Left */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 text-secondary text-sm font-medium">
                  <TrendingUp className="w-4 h-4" />
                  Market Dominance
                </div>
                <h3 className="text-3xl md:text-4xl font-light">
                  Visibility That
                  <span className="text-secondary font-medium">
                    {" "}
                    Brings Students
                  </span>
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Great schools deserve to be seen. We put your achievements,
                  culture, and identity in front of thousands of parents
                  searching for schools.
                </p>

                <div className="space-y-4">
                  {[
                    "Featured on Schoolpedia national directory",
                    "Stories & achievements published termly",
                    "Media coverage on EdComrade platforms",
                    "SEO-optimized for parent discovery",
                    "Direct traffic to your admissions portal",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <ArrowRight className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-secondary/10 rounded-xl p-6 border border-secondary/20">
                  <p className="font-medium text-secondary">
                    Result: Parents find you before they find your competitors
                  </p>
                </div>
              </div>

              {/* Image Right */}
              <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-border">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-secondary/5 p-8">
                  <div className="bg-background rounded-2xl shadow-xl border border-border h-full overflow-hidden">
                    <div className="bg-secondary/20 p-4 border-b border-border">
                      <h4 className="font-medium">Schoolpedia</h4>
                      <p className="text-xs text-muted-foreground">
                        Ghana's School Directory
                      </p>
                    </div>
                    <div className="p-6 space-y-4">
                      {[
                        {
                          title: "Excellence Academy",
                          location: "Tema",
                          badge: "Featured",
                        },
                        {
                          title: "Bright Future School",
                          location: "Accra",
                          badge: "Top Rated",
                        },
                        {
                          title: "Heritage College",
                          location: "Kumasi",
                          badge: "New",
                        },
                      ].map((school, i) => (
                        <div
                          key={i}
                          className="bg-muted rounded-xl p-4 border border-border"
                        >
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h5 className="font-medium text-sm">
                                {school.title}
                              </h5>
                              <p className="text-xs text-muted-foreground">
                                {school.location}
                              </p>
                            </div>
                            <span className="px-2 py-1 bg-secondary/20 text-secondary text-xs rounded-full">
                              {school.badge}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Section */}
      <section className="py-24 px-6 lg:px-8 bg-secondary text-secondary-foreground">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/20 backdrop-blur-sm text-secondary-foreground text-sm font-medium">
                <Brain className="w-4 h-4" />
                Coming Soon: AI Superpower
              </div>
              <h2 className="text-4xl md:text-5xl font-light">
                What If Your School Had an
                <span className="font-medium"> AI Assistant?</span>
              </h2>
              <p className="text-xl opacity-90 leading-relaxed">
                We're building artificial intelligence features that will make
                your school 10× smarter than anything else in Ghana.
              </p>
            </div>

            {/* Right visual */}
            <div className="relative h-[300px] rounded-3xl overflow-hidden border-2 border-primary-foreground/20">
              <div className="absolute inset-0 bg-background/95 backdrop-blur-sm flex items-center justify-center">
                <div className="text-center space-y-4">
                  <Brain className="w-24 h-24 text-primary mx-auto" />
                  <p className="text-2xl font-light text-foreground">
                    AI-Powered Intelligence
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Making schools smarter, one insight at a time
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: BookOpen,
                title: "AI Lesson Notes Generator",
                desc: "Teachers type topics. AI drafts lesson notes instantly.",
              },
              {
                icon: TrendingUp,
                title: "Performance Prediction",
                desc: "AI spots struggling students early before exams.",
              },
              {
                icon: DollarSign,
                title: "Smart Fee Reminders",
                desc: "AI personalizes payment reminders by parent behavior.",
              },
              {
                icon: Users,
                title: "Attendance Anomaly Detection",
                desc: "AI flags unusual patterns and truancy trends.",
              },
              {
                icon: Award,
                title: "Report Card Narratives",
                desc: "AI writes personalized comments automatically.",
              },
              {
                icon: Bell,
                title: "Parent Communication Bot",
                desc: "WhatsApp bot answers questions 24/7.",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-background/10 backdrop-blur-lg rounded-2xl p-6 border border-secondary-foreground/20 hover:bg-background/20 transition-all"
              >
                <feature.icon className="w-10 h-10 text-secondary-foreground mb-4" />
                <h3 className="font-medium text-lg mb-2">{feature.title}</h3>
                <p className="text-sm opacity-80">{feature.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center bg-background/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/20">
            <p className="text-2xl font-light">
              This isn't just software anymore. This is giving your school{" "}
              <span className="font-medium">superpowers</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Choose Your Path
            </div>
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              Your School's
              <span className="text-primary font-medium">
                {" "}
                Transformation Package
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From digital first steps to complete market dominance — we have
              the perfect package for your school's journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Package A */}
            <div className="bg-background rounded-3xl p-8 border-2 border-border hover:border-primary/50 hover:shadow-xl transition-all">
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-medium mb-2">SchoolOS Basic</h3>
                  <p className="text-sm text-muted-foreground">
                    Run operations smoothly
                  </p>
                </div>
                <ul className="space-y-3">
                  {[
                    "Custom school website",
                    "Schoolpedia profile",
                    "Teacher portal",
                    "Admin dashboard",
                    "Attendance & reporting",
                    "Communication tools",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground italic">
                    For schools tired of manual processes
                  </p>
                </div>
              </div>
            </div>

            {/* Package B */}
            <div className="bg-background rounded-3xl p-8 border-2 border-secondary hover:border-secondary hover:shadow-xl transition-all">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                    <Brain className="w-6 h-6 text-secondary" />
                  </div>
                  <span className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-xs font-medium">
                    AI-POWERED
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-medium mb-2">
                    SchoolOS Premium
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Everything + AI features
                  </p>
                </div>
                <ul className="space-y-3">
                  {[
                    "All Basic features",
                    "AI integrations",
                    "Parent portal",
                    "Advanced analytics",
                    "Multi-campus",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground italic">
                    For schools ready to lead their market
                  </p>
                </div>
              </div>
            </div>

            {/* Package C - Featured */}
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8 border-4 border-primary relative hover:shadow-2xl transition-all">
              <div className="absolute -top-3 -right-3 bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-bold shadow-lg">
                MOST POPULAR
              </div>
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-2xl font-medium mb-2">Growth Bundle</h3>
                  <p className="text-sm text-muted-foreground">
                    Dominate your market completely
                  </p>
                </div>
                <ul className="space-y-3">
                  {[
                    "Premium website",
                    "SchoolOS Premium",
                    "Termly media coverage",
                    "Featured PR spotlights",
                    "Priority support",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-primary/20 bg-primary/5 -mx-8 px-8 py-4 -mb-8">
                  <p className="text-xs font-bold text-primary">
                    🏆 This is how elite schools stay elite
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Story */}
      <section className="py-24 px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Story Left */}
            <div className="space-y-6">
              <div className="inline-block px-3 py-1 rounded-full bg-secondary/20 text-secondary text-sm font-medium">
                Real Transformation
              </div>
              <h2 className="text-3xl md:text-4xl font-light">
                "But Will This Actually Work
                <span className="text-primary font-medium">
                  {" "}
                  for My School?"
                </span>
              </h2>

              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  That's what Mrs. Adwoa asked us in August 2024. Her school had
                  180 students, 15 teachers, and a Microsoft Excel file that
                  crashed twice a term.
                </p>

                <p>
                  By December, she had a website parents were sharing on
                  WhatsApp, an admin system her bursar actually enjoyed using,
                  and{" "}
                  <span className="font-bold text-primary">
                    23 new admission enquiries
                  </span>{" "}
                  — more than the previous two years combined.
                </p>

                <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-xl">
                  <p className="text-primary italic font-medium">
                    "I didn't believe them when they said it would change
                    everything. But it did. My teachers are happier. Parents
                    trust us more. And I actually have time to think about
                    growth instead of just surviving each term."
                  </p>
                  <p className="text-sm text-muted-foreground mt-3 font-medium">
                    — Headmaster, Accra
                  </p>
                </div>
              </div>
            </div>

            {/* Visual Right */}
            <div className="relative h-[450px] rounded-3xl overflow-hidden shadow-2xl border border-border">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 p-8 flex items-center justify-center">
                <div className="bg-background/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl max-w-sm">
                  <div className="text-center space-y-6">
                    <div className="space-y-2">
                      <p className="text-4xl font-bold text-primary">23</p>
                      <p className="text-sm text-muted-foreground">
                        New Admissions
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-muted rounded-xl p-4">
                        <p className="text-2xl font-bold text-secondary">180</p>
                        <p className="text-xs text-muted-foreground">
                          Students
                        </p>
                      </div>
                      <div className="bg-muted rounded-xl p-4">
                        <p className="text-2xl font-bold">15</p>
                        <p className="text-xs text-muted-foreground">
                          Teachers
                        </p>
                      </div>
                    </div>
                    <div className="pt-4 border-t border-border">
                      <p className="text-xs font-medium">
                        4 Months of Transformation
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 lg:px-8 bg-primary">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-8 text-primary-foreground">
            <h2 className="text-4xl md:text-5xl font-light">
              Stop Competing With Excel.
              <br />
              Start Competing With
              <span className="font-medium"> Excellence.</span>
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto leading-relaxed">
              Book a free demo and see exactly how EdComrade transforms schools
              like yours. No pressure. No jargon. Just a clear path forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <button className="bg-background text-primary px-10 py-5 rounded-full text-lg font-medium hover:shadow-2xl transition-all inline-flex items-center gap-3 group">
                Schedule Your Free Demo
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="bg-background/10 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto border border-primary-foreground/20">
              <p className="text-sm opacity-90">
                💡 First 10 schools this month get one premium add-on free for
                life
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
