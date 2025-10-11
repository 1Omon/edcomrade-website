import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Trophy, Users, Lightbulb, ArrowRight } from "lucide-react"
import Link from "next/link"

const benefits = [
  {
    icon: Trophy,
    title: "Competitions & Events",
    description: "Academic challenges, sports tournaments, and innovation showcases that bring schools together.",
  },
  {
    icon: Users,
    title: "Collaborative Network",
    description: "Exchange programs, shared resources, and partnerships that amplify collective success.",
  },
  {
    icon: Lightbulb,
    title: "Innovation Hub",
    description: "Access to cutting-edge tools, training, and support that keeps you ahead of the curve.",
  },
]

export function CommunityPreview() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-balance">
            Join a community where
            <br />
            <span className="text-secondary">growth is collective</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Being part of EdComrade means more than software. It means belonging to an ecosystem of forward-thinking schools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <Card key={index} className="p-8 text-center border-border/50 hover:border-primary/50 transition-colors">
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-6">
                <benefit.icon size={32} className="text-secondary" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/community">
            <Button size="lg" variant="outline" className="group bg-transparent">
              Explore Community Benefits
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
