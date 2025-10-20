"use client";
import { MinimalNav } from "@/components/minimal-nav";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const ReservationSchema = z.object({
  schoolName: z.string().min(2),
  schoolType: z.string().min(2),
  region: z.string().min(2),
  city: z.string().min(2),
  contactName: z.string().min(2),
  contactRole: z.string().min(2),
  phone: z.string().min(8),
  email: z.string().email(),
  hasWebsite: z.enum(["modern", "outdated", "none"]),
  preferredDates: z.array(z.string()).optional(),
  hearAbout: z.string().optional(),
  marketingOptIn: z.boolean().optional(),
  consentAccepted: z.literal(true),
})

type ReservationValues = z.infer<typeof ReservationSchema>

export default function Page() {
  const [remaining, setRemaining] = useState<number | null>(null)
  const totalSlots = 100
  const { register, handleSubmit, formState: { errors, isSubmitting }, setValue } = useForm<ReservationValues>({
    resolver: zodResolver(ReservationSchema)
  })

  useEffect(() => {
    fetch('/api/pioneer-100').then(r => r.json()).then(({ total }) => {
      const remainingCalc = totalSlots - Number(total || 0)
      setRemaining(Math.max(0, remainingCalc))
    }).catch(() => setRemaining(null))
  }, [])

  useEffect(() => {
    const draft = localStorage.getItem('pioneer_form')
    if (draft) {
      try { const parsed = JSON.parse(draft); Object.entries(parsed).forEach(([k, v]) => setValue(k as any, v as any)) } catch {}
    }
  }, [setValue])

  const onSubmit = async (values: ReservationValues) => {
    localStorage.setItem('pioneer_form', JSON.stringify(values))
    const body = new FormData()
    Object.entries(values).forEach(([k, v]) => {
      if (Array.isArray(v)) v.forEach(val => body.append(k, String(val)))
      else body.append(k, String(v as any))
    })
    const res = await fetch('/api/pioneer-100', { method: 'POST', body })
    if (!res.ok) return alert('Could not reserve. Try again.')
    const { id } = await res.json()
    const initRes = await fetch('/api/pioneer-100/init', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ reservationId: id, email: values.email, schoolName: values.schoolName }) })
    if (!initRes.ok) return alert('Payment initialization failed')
    const init = await initRes.json()
    window.location.href = init.authorization_url
  }

  const remainingLabel = useMemo(() => {
    if (remaining === null) return '—'
    return String(remaining)
  }, [remaining])

  return (
    <main className="min-h-screen bg-background">
      <MinimalNav />

      {/* Hero */}
      <section className="pt-24 md:pt-32 pb-12 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-8 items-center">
          <div className="md:col-span-3 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-balance">
              Join the EdComrade Pioneer 100 — Be Among Ghana’s First Digitally Powered Schools
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Reserve your spot with a ₵1,000 refundable deposit and secure priority on our January 2026 National School Media Tour. Website. Cinematic media. Admissions campaign. Pioneer privileges.
            </p>
            <div className="flex flex-wrap gap-3 items-center">
              <a href="#reserve" className="bg-secondary text-secondary-foreground px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity" aria-label="Reserve Pioneer Slot (₵1,000 deposit)">Reserve Pioneer Slot — ₵1,000</a>
              <Link href="#" className="underline">Download Program Brief (PDF)</Link>
              <div className="ml-auto md:ml-0 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-sm">
                <span>100 total slots — <strong>{remainingLabel} remaining</strong></span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground">Deposit refundable until Dec 31, 2025. Full terms apply. <Link href="/pioneer-100-terms" className="underline">Read terms</Link>.</p>
          </div>
          <div className="md:col-span-2 bg-background border border-border rounded-2xl p-6 shadow-sm">
            <div className="space-y-2">
              <div className="font-medium">Priority on-site media shoot</div>
              <div className="text-sm text-muted-foreground">Secure a slot during our January 2026 National Tour.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8">Why join the Pioneer 100?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl border p-6"><div className="font-semibold mb-2">Be Seen</div><p className="text-muted-foreground">Cinematic media + website to attract parents and build trust.</p></div>
            <div className="rounded-2xl border p-6"><div className="font-semibold mb-2">Be Efficient</div><p className="text-muted-foreground">Ready‑to‑use systems that simplify admin and communication.</p></div>
            <div className="rounded-2xl border p-6"><div className="font-semibold mb-2">Be Legendary</div><p className="text-muted-foreground">Join pioneers shaping the future of education in Ghana.</p></div>
          </div>
          <div className="pt-6"><a href="#reserve" className="underline">Reserve your slot</a></div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8">Your School’s Full Digital Visibility Package</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              ["Custom Website & Dashboard","Responsive website + CMS. Domain setup included."],
              ["On-site Media Shoot","Pro photos + a 60–90s cinematic video during January Tour."],
              ["Admissions Marketing Campaign","30‑day Facebook & Google campaign targeting local parents."],
              ["Priority Scheduling & Pioneer Badge","Badge + directory highlight as an EdComrade Pioneer School."],
              ["One Free Add‑on","Choose one ERP module free if you adopt within 6 months."],
              ["Training & Support","Onboarding, basic CMS training, and technical support."],
            ].map(([title, desc], i) => (
              <div key={i} className="rounded-2xl border p-6">
                <div className="font-semibold mb-1">{title}</div>
                <p className="text-muted-foreground text-sm">{desc}</p>
                <button className="mt-3 text-sm underline">Learn more</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8">How it works</h2>
          <div className="grid md:grid-cols-5 gap-4">
            {[
              ["Reserve","₵1,000 deposit to secure a spot"],
              ["Onboard","Data collection & pre‑shoot checklist (3–7 days)"],
              ["Shoot","Campus visit during January 2026 Tour"],
              ["Deliver","Website, edited video, assets in 21 days"],
              ["Grow","Optional ERP onboarding with Pioneer discount"],
            ].map(([title, desc], i) => (
              <div key={i} className="rounded-2xl border p-4">
                <div className="font-semibold">{title}</div>
                <p className="text-muted-foreground text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-semibold">Pricing & Payment</h2>
            <p>Total Pioneer Package Price: <strong>₵3,500</strong> (₵1,000 deposit + ₵2,500 balance before shoot)</p>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
              <li>Deposit: ₵1,000 — Refundable until Dec 31, 2025 (per T&Cs)</li>
            </ul>
            <div className="space-y-2">
              <div className="font-medium">Payment Methods</div>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground text-sm">
                <li>Paystack (Card & Mobile Money) — Recommended</li>
                <li>Direct Mobile Money (MTN) — Displayed number</li>
                <li>Bank Transfer — Account details provided</li>
                <li>Offline / Bank Deposit — Send proof to onboard@edcomrade.com</li>
              </ul>
            </div>
            <p className="text-sm text-muted-foreground">All payments are secure. Receipts and invoices sent automatically. Need instalments? Contact onboard@edcomrade.com.</p>
          </div>
          
          {/* Reserve Form */}
          <div id="reserve" className="rounded-2xl border border-border p-6 bg-background shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Reserve Your Pioneer Slot — ₵1,000 Deposit</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-4" noValidate>
              <input placeholder="School/Institution Name*" {...register('schoolName')} aria-invalid={!!errors.schoolName} className="border border-border rounded px-3 py-2" />
              <select {...register('schoolType')} className="border border-border rounded px-3 py-2">
                <option value="">School Type*</option>
                <option>Basic</option>
                <option>High School</option>
                <option>Tertiary</option>
                <option>Other</option>
              </select>
              <select {...register('region')} className="border border-border rounded px-3 py-2">
                <option value="">Region*</option>
                {['Greater Accra','Ashanti','Eastern','Central','Volta','Western','Northern','Upper East','Upper West','Bono'].map(r => <option key={r}>{r}</option>)}
              </select>
              <input placeholder="City/Town*" {...register('city')} className="border border-border rounded px-3 py-2" />
              <input placeholder="Contact Person Name*" {...register('contactName')} className="border border-border rounded px-3 py-2" />
              <input placeholder="Contact Person Role*" {...register('contactRole')} className="border border-border rounded px-3 py-2" />
              <input type="tel" placeholder="Phone (WhatsApp)*" {...register('phone')} className="border border-border rounded px-3 py-2" />
              <input type="email" placeholder="Email Address*" {...register('email')} className="border border-border rounded px-3 py-2" />
              <div className="md:col-span-2">
                <label htmlFor="">Does the school have a website?</label>
                <div className="flex gap-4 items-center text-sm">
                  <label className="inline-flex items-center gap-2"><input type="radio" value="modern" {...register('hasWebsite')} /> Yes (modern)</label>
                  <label className="inline-flex items-center gap-2"><input type="radio" value="outdated" {...register('hasWebsite')} /> Yes (outdated/static)</label>
                  <label className="inline-flex items-center gap-2"><input type="radio" value="none" {...register('hasWebsite')} /> No</label>
                </div>
              </div>
              <input placeholder="Preferred shoot dates (comma separated)" onChange={(e) => setValue('preferredDates', e.target.value.split(',').map(s => s.trim()).filter(Boolean))} className="border border-border rounded px-3 py-2 md:col-span-2" />
              <select {...register('hearAbout')} className="border border-border rounded px-3 py-2 md:col-span-2">
                <option value="">How did you hear about Pioneer 100?</option>
                {['Social Media','Referral','Denomination','Event','Other'].map(o => <option key={o}>{o}</option>)}
              </select>
              <label className="md:col-span-2 text-sm inline-flex items-start gap-2"><input type="checkbox" {...register('consentAccepted')} /> <span>I confirm I am authorised to register this school. I have read and agree to the Pioneer 100 Terms & Refund Policy.</span></label>
              <label className="md:col-span-2 text-sm inline-flex items-start gap-2"><input type="checkbox" {...register('marketingOptIn')} /> <span>I agree to receive email and WhatsApp updates from EdComrade.</span></label>
              <button type="submit" disabled={isSubmitting} className="md:col-span-2 bg-secondary text-secondary-foreground px-4 py-3 rounded-full font-medium hover:opacity-90 transition-opacity">{isSubmitting ? 'Processing…' : 'Proceed to Payment — ₵1,000'}</button>
              <p className="md:col-span-2 text-xs text-muted-foreground">Your ₵1,000 deposit reserves your spot. Refundable until Dec 31, 2025.</p>
            </form>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold">FAQs</h2>
          <div className="space-y-4 text-sm text-muted-foreground">
            <p><strong>Is the deposit refundable?</strong> Yes — refundable until Dec 31, 2025. Full T&Cs apply.</p>
            <p><strong>What if you can’t visit our region in January?</strong> We’ll reschedule in the next window or refund per T&Cs.</p>
            <p><strong>Do you work with schools that already have websites?</strong> Yes. We optimize or rebuild during onboarding.</p>
            <p><strong>Can we add ERP later?</strong> Absolutely — pioneers get discounts and one free add‑on within six months.</p>
            <p><strong>Who covers permissions and consent?</strong> Schools must obtain parental consent; we provide templates.</p>
          </div>
        </div>
      </section>

      {/* Footer note */}
      <section className="py-12 px-6 lg:px-8 bg-muted/30">
        <div className="max-w-5xl mx-auto text-sm text-muted-foreground">
          By reserving a slot, you agree to the Pioneer 100 Terms & Refund Policy. <Link href="/pioneer-100-terms" className="underline">View full terms</Link>.
        </div>
      </section>
    </main>
  )
}

