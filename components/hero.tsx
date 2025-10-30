"use client"

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[100vh] flex flex-col justify-center items-center px-6 sm:px-10 lg:px-16 overflow-hidden bg-[url('/modern-african-classroom-with-students-using-table.jpg')] bg-cover bg-center bg-no-repeat">
      {/* dark overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90 backdrop-blur-[2px]" />

      {/* optional digital network texture */}
      <div className="absolute inset-0 bg-[url('/grid-light.svg')] opacity-10 mix-blend-overlay" />

      <div className="relative z-10 max-w-6xl mx-auto text-center text-white">
        <h1 className="text-5xl  lg:text-6xl font-light leading-tight mb-8 animate-fade-in">
          Ghana’s schools,{" "}
          <span className="font-semibold text-primary">digitized and made visible.</span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto text-gray-200 leading-relaxed font-light mb-12 animate-slide-up">
          We merge <span className="text-white/90 font-medium">storytelling, software, and systems</span> 
          to build your school’s digital backbone.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 animate-fade-in-delay">
          <Link
            href="#contact"
            className="w-full sm:w-auto bg-primary text-primary-foreground px-10 sm:px-12 py-5 sm:py-6 rounded-full text-lg sm:text-xl font-medium hover:bg-primary/90 transition-all inline-flex items-center justify-center gap-3 shadow-lg shadow-primary/30"
          >
            Get a 15-min demo
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </Link>
          <Link
            href="/pioneer-100"
            className="w-full sm:w-auto text-white/90 border border-white/30 hover:border-white/50 px-10 sm:px-12 py-5 sm:py-6 rounded-full text-lg sm:text-xl font-medium hover:bg-white/10 transition-all"
          >
            Join Pioneer 100
          </Link>
        </div>
      </div>

      {/* subtle fade animation definitions */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fadeIn 1.2s ease forwards; }
        .animate-slide-up { animation: fadeIn 1.5s ease 0.3s forwards; opacity: 0; }
        .animate-fade-in-delay { animation: fadeIn 1.8s ease 0.6s forwards; opacity: 0; }
      `}</style>
    </section>
  );
}
