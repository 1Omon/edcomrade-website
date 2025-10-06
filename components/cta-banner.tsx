import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTABanner() {
  return (
    <section className="py-24 bg-secondary text-secondary-foreground">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-balance">
          Ready to transform your school?
        </h2>
        <p className="text-xl md:text-2xl opacity-90 mb-10 leading-relaxed text-pretty">
          Join the growing network of schools that are redefining education in Africa.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            variant="secondary"
            className="bg-background text-foreground hover:bg-background/90 px-8 h-14 group"
          >
            Schedule a Demo
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-secondary-foreground/20 text-secondary-foreground hover:bg-secondary-foreground/10 px-8 h-14 bg-transparent"
          >
            View Pricing
          </Button>
        </div>
      </div>
    </section>
  )
}
