"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Cinematic Split Design */}
      <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2">
        {/* Left Section */}
        <div className="relative bg-gradient-to-br from-primary via-primary to-primary/90 flex items-center justify-center p-8 md:p-12 lg:p-16">
          <div className="absolute inset-0 bg-[url('/grid-light.svg')] opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

          {/* Soft ambient glows */}
          <div className="absolute top-20 left-20 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse-slower"></div>

          <div className="hidden lg:block relative z-10 w-full max-w-xl text-primary-foreground">
            <div className="space-y-6 md:space-y-8">
              <div className="inline-block px-4 py-2 rounded-full border border-primary-foreground/30 backdrop-blur-sm">
                <span className="text-sm font-medium">
                  Ghana’s Education Revolution
                </span>
              </div>

              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tighter">
                We
                <br />
                digitize.
              </h1>

              <div className="h-1 w-24 bg-secondary"></div>

              <p className="text-xl md:text-2xl lg:text-3xl font-light leading-relaxed opacity-90">
                Making Ghana’s private schools visible, measurable and
                unstoppable.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-row xs:flex-col gap-4 pt-4">
                <Link
                  href="#contact"
                  className="group bg-secondary text-secondary-foreground px-8 py-4 rounded-full text-lg font-medium hover:shadow-2xl hover:shadow-secondary/30 hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-3"
                >
                  Get your demo
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </Link>

                <Link
                  href="/pioneer-100"
                  className="group bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white/20 px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 inline-flex items-center justify-center gap-3 text-white"
                >
                  Pioneer 100
                  <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section Visual */}
        <div className="relative bg-black hidden lg:block">
          <img
            src="/modern-african-classroom-with-students-using-table.jpeg"
            alt="Modern African Classroom"
            className="absolute inset-0 w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-black via-black/50 to-transparent"></div>
        </div>
      </div>

      {/* Mobile Background */}
      <div className="lg:hidden absolute inset-0">
        <div className="relative h-full bg-gradient-to-br from-primary via-primary to-primary/90">
          <img
            src="/modern-african-classroom-with-students-using-table.jpeg"
            alt="Modern African Classroom"
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-primary/80 to-primary"></div>
        </div>
      </div>

      {/* Mobile Content Overlay */}
      <div className="lg:hidden relative z-20 w-full px-6 py-28 text-white">
        <div className="text-center space-y-8 animate-slide-up max-w-lg mx-auto">
          {/* Tag */}
          <div className="inline-block px-4 py-2 rounded-full border border-white/30 backdrop-blur-sm">
            <span className="text-xs sm:text-sm font-medium">
              Ghana’s Education Revolution
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight">
            We
            <br />
            digitize.
          </h1>

          {/* Divider */}
          <div className="h-1 w-20 mx-auto bg-secondary"></div>

          {/* Subtext */}
          <p className="text-base sm:text-lg font-light opacity-90 leading-relaxed max-w-md mx-auto">
            Making Ghana’s private schools visible, measurable & unstoppable.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
            <Link
              href="#contact"
              className="group bg-secondary text-secondary-foreground px-8 py-4 rounded-full text-base sm:text-lg font-semibold hover:shadow-2xl hover:shadow-secondary/30 hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-3"
            >
              Get your demo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>

            <Link
              href="/pioneer-100"
              className="group bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white/20 px-8 py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 inline-flex items-center justify-center gap-3 text-white"
            >
              Pioneer 100
              <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10"></div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes pulseSlow {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.1);
          }
        }
        @keyframes pulseSlower {
          0%,
          100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.4;
            transform: scale(1.15);
          }
        }
        .animate-pulse-slow {
          animation: pulseSlow 8s infinite;
        }
        .animate-pulse-slower {
          animation: pulseSlower 12s infinite;
        }
      `}</style>
    </section>
  );
}
