"use client"

import { GraduationCap, BarChart3, CreditCard, Users, Megaphone, Shield } from "lucide-react"
import { Card } from "@/components/ui/card"

const services = [
  {
    icon: GraduationCap,
    title: "Learning Management",
    description:
      "Comprehensive LMS platforms that bring education to life with interactive content and seamless delivery.",
    color: "text-primary",
  },
  {
    icon: BarChart3,
    title: "School ERP Systems",
    description: "Integrated management solutions that streamline operations from admissions to academics.",
    color: "text-secondary",
  },
  {
    icon: CreditCard,
    title: "Finance & Billing",
    description: "Smart payment systems with Mobile Money integration, automated invoicing, and real-time tracking.",
    color: "text-primary",
  },
  {
    icon: Users,
    title: "Student Portals",
    description: "Engaging platforms for exams, voting, results, and student-parent communication.",
    color: "text-secondary",
  },
  {
    icon: Megaphone,
    title: "Marketing Solutions",
    description: "Strategic branding and digital marketing services that elevate your school's visibility.",
    color: "text-primary",
  },
  {
    icon: Shield,
    title: "Asset Tracking",
    description: "Comprehensive systems to manage and monitor school resources, inventory, and equipment.",
    color: "text-secondary",
  },
]

export function ServicesSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-balance">
            Everything your school needs.
            <br />
            <span className="text-primary">All in one place.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            From classroom to boardroom, we've built the tools that make education work better.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 bg-background group"
            >
              <div
                className={`w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${service.color}`}
              >
                <service.icon size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
