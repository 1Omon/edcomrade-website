"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"

interface ParallaxSectionProps {
  children: React.ReactNode
  speed?: number
  className?: string
}

export function ParallaxSection({ children, speed = 0.5, className = "" }: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return

      const rect = ref.current.getBoundingClientRect()
      const scrolled = window.scrollY
      const elementTop = rect.top + scrolled

      const parallax = (scrolled - elementTop) * speed
      setOffset(parallax)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [speed])

  return (
    <div ref={ref} className={className}>
      <div style={{ transform: `translateY(${offset}px)`, transition: "transform 0.1s ease-out" }}>{children}</div>
    </div>
  )
}
