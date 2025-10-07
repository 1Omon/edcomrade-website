"use client"

import { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"
import { cn } from "@/lib/utils"

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-24 md:bottom-8 left-4 md:left-8 z-50 bg-foreground text-background p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none",
      )}
      aria-label="Back to top"
    >
      <ArrowUp className="w-6 h-6" />
    </button>
  )
}
