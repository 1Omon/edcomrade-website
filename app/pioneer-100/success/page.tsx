import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pioneer 100 — Reservation Confirmed",
  description: "Your Pioneer 100 deposit was received. Next steps and onboarding checklist.",
}

export default function Page() {
  return (
    <main className="min-h-screen bg-background px-6 lg:px-8 py-24">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-medium">Thank you — Your Pioneer Slot is Reserved! 🎉</h1>
        <p className="text-lg text-muted-foreground">We’ve received your ₵1,000 deposit. Our onboarding team will contact you within 24 hours via WhatsApp or email.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
          <Link href="#" className="bg-secondary text-secondary-foreground px-6 py-3 rounded-full font-medium">Download Receipt (PDF)</Link>
          <Link href="#" className="border border-border px-6 py-3 rounded-full font-medium">View Onboarding Checklist</Link>
          <Link href="#" className="underline">Contact Onboarding Team (WhatsApp)</Link>
        </div>
      </div>
    </main>
  )
}


