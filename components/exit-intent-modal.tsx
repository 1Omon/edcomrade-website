"use client"

import { useEffect, useState } from "react"
import { X, AlertCircle } from "lucide-react"
import Link from "next/link"

export function ExitIntentModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasShown, setHasShown] = useState(false)

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsOpen(true)
        setHasShown(true)
      }
    }

    document.addEventListener("mouseleave", handleMouseLeave)
    return () => document.removeEventListener("mouseleave", handleMouseLeave)
  }, [hasShown])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-background rounded-3xl max-w-2xl w-full p-8 md:p-12 relative animate-in fade-in zoom-in duration-300">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-accent transition-colors"
          aria-label="Close"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="text-center space-y-6">
          <div className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center mx-auto">
            <AlertCircle className="w-10 h-10 text-secondary" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight">Wait! Before you go...</h2>

          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light">
            Join 500+ schools already transforming education across Ghana
          </p>

          <div className="bg-secondary/10 rounded-2xl p-6 space-y-4">
            <p className="text-2xl font-medium text-secondary">Limited Time Offer</p>
            <p className="text-lg font-light">
              Early adopters get <span className="font-semibold text-2xl">50% off</span> setup fees for Q1 2025
              onboarding
            </p>
            <p className="text-sm text-muted-foreground font-light">Only 12 spots remaining</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="flex-1 bg-secondary text-secondary-foreground px-8 py-4 rounded-full text-lg font-medium hover:opacity-90 transition-opacity"
            >
              Claim Your Spot
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="flex-1 border border-border px-8 py-4 rounded-full text-lg font-medium hover:bg-accent transition-colors"
            >
              Maybe Later
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
