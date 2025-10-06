"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Heart } from "lucide-react"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    quote:
      "We used to spend entire weekends preparing reports. Now it takes minutes. ACE has given us our time back to focus on what matters—teaching our students.",
    name: "Dr. Kwame Mensah",
    title: "Headmaster, Accra",
  },
  {
    quote:
      "Our fee collection rate went from 60% to 95% in just six months. Parents love the Mobile Money integration, and we finally have clear financial visibility.",
    name: "Mrs. Abena Osei",
    title: "School Administrator, Kumasi",
  },
  {
    quote:
      "Parents actually thank us now for keeping them informed. The communication portal has transformed our relationship with families.",
    name: "Mr. Kofi Asante",
    title: "Deputy Head, Tema",
  },
  {
    quote:
      "Our enrollment increased by 30% after launching our new website and social media presence. ACE helped us tell our story to the right families.",
    name: "Mrs. Ama Darko",
    title: "School Owner, Takoradi",
  },
]

export function SwipeableTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const minSwipeDistance = 50

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe && currentIndex < testimonials.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }

    if (isRightSwipe && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative overflow-hidden">
      <div
        ref={containerRef}
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full flex-shrink-0 px-4">
            <div className="bg-accent rounded-3xl p-10 space-y-6">
              <div className="flex gap-1 text-primary">
                {[...Array(5)].map((_, i) => (
                  <Heart key={i} className="w-6 h-6 fill-current" />
                ))}
              </div>
              <p className="text-xl leading-relaxed">{testimonial.quote}</p>
              <div>
                <div className="font-semibold text-lg">{testimonial.name}</div>
                <div className="text-muted-foreground">{testimonial.title}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-300",
              currentIndex === index ? "bg-primary w-8" : "bg-muted-foreground/30",
            )}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
