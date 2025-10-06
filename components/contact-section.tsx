"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Mail, Phone, MapPin } from "lucide-react"

export function ContactSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-balance">
              Let's start a
              <br />
              <span className="text-primary">conversation</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Whether you're ready to transform your school or just curious about what we do, we'd love to hear from
              you.
            </p>

            <div className="space-y-6">
              <Card className="p-6 flex items-start gap-4 border-border/50">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email Us</h3>
                  <p className="text-muted-foreground">info@aceedu.com</p>
                </div>
              </Card>

              <Card className="p-6 flex items-start gap-4 border-border/50">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="text-secondary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Call Us</h3>
                  <p className="text-muted-foreground">+234 800 000 0000</p>
                </div>
              </Card>

              <Card className="p-6 flex items-start gap-4 border-border/50">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Visit Us</h3>
                  <p className="text-muted-foreground">Lagos, Nigeria</p>
                </div>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-8 border-border/50">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                    First Name
                  </label>
                  <Input id="firstName" placeholder="John" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                    Last Name
                  </label>
                  <Input id="lastName" placeholder="Doe" />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input id="email" type="email" placeholder="john@school.com" />
              </div>

              <div>
                <label htmlFor="school" className="block text-sm font-medium mb-2">
                  School Name
                </label>
                <Input id="school" placeholder="Your School Name" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea id="message" placeholder="Tell us about your needs..." rows={5} />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground"
              >
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  )
}
