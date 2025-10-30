"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { X } from "lucide-react"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"

// Intelligent exit-intent: shows once per session when user truly intends to leave
export function ExitIntentModal() {
  const [isOpen, setIsOpen] = useState(false)
  const shownKey = useMemo(() => "edc_exit_modal_shown", [])
  const lastScrollY = useRef<number>(0)
  const idleTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem(shownKey)
    if (alreadyShown) return

    const openOnce = () => {
      sessionStorage.setItem(shownKey, "1")
      setIsOpen(true)
    }

    const onMouseLeaveTop = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        openOnce()
        cleanup()
      }
    }

    const onScroll = () => {
      const current = window.scrollY
      const delta = lastScrollY.current - current
      lastScrollY.current = current
      // Fast upward scroll suggests intent to navigate away/back
      if (delta > 200) {
        openOnce()
        cleanup()
      }
    }

    const startIdleTimer = () => {
      if (idleTimer.current) clearTimeout(idleTimer.current)
      idleTimer.current = setTimeout(() => {
        openOnce()
        cleanup()
      }, 45000) // ~45s idle
    }

    const onActivity = () => startIdleTimer()

    const cleanup = () => {
      document.removeEventListener("mouseleave", onMouseLeaveTop)
      window.removeEventListener("scroll", onScroll)
      document.removeEventListener("mousemove", onActivity)
      document.removeEventListener("keydown", onActivity)
      if (idleTimer.current) clearTimeout(idleTimer.current)
    }

    document.addEventListener("mouseleave", onMouseLeaveTop)
    window.addEventListener("scroll", onScroll, { passive: true })
    document.addEventListener("mousemove", onActivity)
    document.addEventListener("keydown", onActivity)
    startIdleTimer()

    return () => cleanup()
  }, [shownKey])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="exit-overlay"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="exit-title"
            className="bg-background rounded-3xl max-w-2xl w-full p-8 md:p-12 relative"
            initial={{ y: 20, scale: 0.98, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 10, scale: 0.98, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-accent transition-colors"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="text-center space-y-6">
              <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-2 text-sm">
                <span className="h-2 w-2 rounded-full bg-secondary" />
                Trusted by many forward-thinking schools
              </div>

              <h2 id="exit-title" className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-balance">
                Before you go — see how schools grow with EdComrade
              </h2>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                From smarter billing to effortless parent comms, we help schools modernize with tools that feel human.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
                <div className="rounded-2xl border border-border/60 p-4">
                  <p className="text-2xl font-semibold">98%</p>
                  <p className="text-sm text-muted-foreground">Faster fee reconciliation</p>
                </div>
                <div className="rounded-2xl border border-border/60 p-4">
                  <p className="text-2xl font-semibold">3x</p>
                  <p className="text-sm text-muted-foreground">Parent engagement uplift</p>
                </div>
                <div className="rounded-2xl border border-border/60 p-4">
                  <p className="text-2xl font-semibold"><span className="align-baseline">24/7</span></p>
                  <p className="text-sm text-muted-foreground">Reliable support</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="flex-1 bg-secondary text-secondary-foreground px-8 py-4 rounded-full text-lg font-medium hover:opacity-90 transition-opacity"
                >
                  Book a 15‑min intro
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex-1 border border-border px-8 py-4 rounded-full text-lg font-medium hover:bg-accent transition-colors"
                >
                  Continue browsing
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
