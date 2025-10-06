"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import { useEffect, useRef } from "react"

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(144,190,109,0.05),transparent_50%),radial-gradient(circle_at_70%_50%,rgba(255,125,0,0.03),transparent_50%)]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32 text-center" ref={heroRef}>
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Overline */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Transforming Education in Africa
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance leading-[1.1]">
            Where schools
            <br />
            <span className="text-primary">thrive together</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Integrated software solutions and strategic partnerships that empower schools to operate seamlessly and grow
            confidently.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-base px-8 h-14 group"
            >
              Start Your Journey
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8 h-14 group bg-transparent">
              <Play className="mr-2 group-hover:scale-110 transition-transform" size={20} />
              Watch Demo
            </Button>
          </div>

          {/* Social Proof */}
          <div className="pt-12 flex flex-col items-center gap-4">
            <p className="text-sm text-muted-foreground">Trusted by leading schools across Africa</p>
            <div className="flex items-center gap-8 opacity-60">
              <div className="text-2xl font-bold">50+</div>
              <div className="w-px h-8 bg-border" />
              <div className="text-2xl font-bold">10K+</div>
              <div className="w-px h-8 bg-border" />
              <div className="text-2xl font-bold">99%</div>
            </div>
            <div className="flex items-center gap-8 text-xs text-muted-foreground">
              <span>Partner Schools</span>
              <span>Active Students</span>
              <span>Satisfaction Rate</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/20 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-foreground/40 rounded-full" />
        </div>
      </div>
    </section>
  )
}
