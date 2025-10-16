"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Mail, Phone, MapPin } from "lucide-react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"

const ContactSchema = z.object({
  firstName: z.string().min(2, "First name is too short"),
  lastName: z.string().optional(),
  email: z.string().email("Enter a valid email"),
  school: z.string().optional(),
  message: z.string().min(10, "Tell us a bit more (10+ chars)"),
})

type ContactValues = z.infer<typeof ContactSchema>

export function ContactSection() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactValues>({
    resolver: zodResolver(ContactSchema)
  })
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")

  const onSubmit = async (values: ContactValues) => {
    setStatus("idle")
    const body = new FormData()
    for (const [k, v] of Object.entries(values)) body.append(k, String(v ?? ""))
    const res = await fetch('/api/contact', { method: 'POST', body })
    if (!res.ok) { setStatus("error"); return }
    setStatus("success"); reset()
  }

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
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                    First Name
                  </label>
                  <Input id="firstName" placeholder="John" {...register('firstName')} aria-invalid={!!errors.firstName} />
                  {errors.firstName && <p className="mt-1 text-xs text-red-600">{errors.firstName.message}</p>}
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                    Last Name
                  </label>
                  <Input id="lastName" placeholder="Doe" {...register('lastName')} />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input id="email" type="email" placeholder="john@school.com" {...register('email')} aria-invalid={!!errors.email} />
                {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>}
              </div>

              <div>
                <label htmlFor="school" className="block text-sm font-medium mb-2">
                  School Name
                </label>
                <Input id="school" placeholder="Your School Name" {...register('school')} />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea id="message" placeholder="Tell us about your needs..." rows={5} {...register('message')} aria-invalid={!!errors.message} />
                {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message.message}</p>}
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending…' : status === 'success' ? 'Sent ✓' : 'Send Message'}
              </Button>
              {status === 'error' && <p className="text-center text-sm text-red-600">Something went wrong. Please try again.</p>}
            </form>
          </Card>
        </div>
      </div>
    </section>
  )
}
