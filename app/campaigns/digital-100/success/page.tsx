"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export default function PaymentSuccessPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/software");
    }, 5000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <main className="min-h-screen bg-[var(--color-paper)] text-[var(--color-ink)] flex flex-col justify-between">
      <Navigation />

      <section className="py-32 px-6 max-w-3xl mx-auto text-center flex-1 flex flex-col justify-center items-center">
        <div className="w-16 h-16 rounded-full bg-[var(--color-green)] text-white flex items-center justify-center text-2xl font-bold mb-6">
          ✓
        </div>
        <span className="text-[var(--text-xs)] uppercase tracking-[var(--tracking-wider)] text-[var(--color-accent)] font-mono mb-2">
          PAYMENT CONFIRMED
        </span>
        <h1 className="font-serif text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Reservation Completed
        </h1>
        <p className="text-[var(--text-lg)] text-[var(--color-ink-muted)] leading-relaxed max-w-xl mx-auto mb-8 font-sans">
          Thank you for joining the Pioneers&apos; Digital 100 deployment window. Our team has received your deposit confirmation and will reach out to schedule your school onboarding.
        </p>

        <p className="text-[var(--text-sm)] text-[var(--color-ink-faint)] font-mono mb-6">
          Redirecting to software overview in 5 seconds...
        </p>

        <Link
          href="/software"
          className="inline-flex items-center justify-center bg-[var(--color-ink)] text-white font-sans text-sm font-medium px-6 py-3 rounded-[3px] hover:bg-[var(--color-navy)] transition-colors"
        >
          Return to Software Overview Now →
        </Link>
      </section>

      <Footer />
    </main>
  );
}
