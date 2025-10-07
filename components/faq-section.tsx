"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "Is ACE too complicated for my staff?",
    answer:
      "Not at all! ACE is designed for educators, not technology experts. Most teachers master the basics in their first training session. We provide comprehensive training and ongoing support to ensure your team feels confident.",
  },
  {
    question: "What happens to our current records?",
    answer:
      "We help transfer all your existing student and staff information into ACE. Nothing is lost, and everything becomes more organized and accessible. Our team handles the entire migration process.",
  },
  {
    question: "What if we have internet problems?",
    answer:
      "Critical functions work even without internet connection. When connectivity returns, everything automatically synchronizes. We've designed ACE specifically for African internet conditions.",
  },
  {
    question: "Can we try it before committing?",
    answer:
      "We offer a demonstration using your school's actual information so you can see exactly how it will benefit you. No commitment required for the demo.",
  },
  {
    question: "How quickly will we see results?",
    answer:
      "Most schools notice immediate improvements in organization and efficiency. Communication and financial benefits typically appear within the first month. Enrollment growth usually takes 3-6 months.",
  },
  {
    question: "What if we need something specific to our school?",
    answer:
      "ACE is designed to adapt to your needs. We regularly add new features based on feedback from schools like yours. For Excellence package users, we offer custom module development.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20 sm:py-28 md:py-36 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-balance mb-6 sm:mb-8 text-center">
          Questions we often answer
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground text-balance mb-16 sm:mb-20 text-center leading-relaxed font-light">
          Everything you need to know about transforming your school with ACE
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-accent/50 rounded-2xl overflow-hidden hover:bg-accent transition-colors">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left"
              >
                <span className="text-xl font-medium pr-8">{faq.question}</span>
                <ChevronDown
                  className={cn("w-6 h-6 flex-shrink-0 transition-transform", openIndex === index && "rotate-180")}
                />
              </button>
              {openIndex === index && (
                <div className="px-8 pb-6">
                  <p className="text-lg text-muted-foreground leading-relaxed font-light">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
