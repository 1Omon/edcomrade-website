// "use client";
// import { MinimalNav } from "@/components/minimal-nav";
// import Link from "next/link";
// import { useEffect, useMemo, useState } from "react";
// import { z } from "zod";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";

// const ReservationSchema = z.object({
//   schoolName: z.string().min(2),
//   schoolType: z.string().min(2),
//   region: z.string().min(2),
//   city: z.string().min(2),
//   contactName: z.string().min(2),
//   contactRole: z.string().min(2),
//   phone: z.string().min(8),
//   email: z.string().email(),
//   hasWebsite: z.enum(["modern", "outdated", "none"]),
//   preferredDates: z.array(z.string()).optional(),
//   hearAbout: z.string().optional(),
//   marketingOptIn: z.boolean().optional(),
//   consentAccepted: z.literal(true),
// })

// type ReservationValues = z.infer<typeof ReservationSchema>

// export default function Page() {
//   const [remaining, setRemaining] = useState<number | null>(null)
//   const totalSlots = 100
//   const { register, handleSubmit, formState: { errors, isSubmitting }, setValue } = useForm<ReservationValues>({
//     resolver: zodResolver(ReservationSchema)
//   })

//   useEffect(() => {
//     fetch('/api/pioneer-100').then(r => r.json()).then(({ total }) => {
//       const remainingCalc = totalSlots - Number(total || 0)
//       setRemaining(Math.max(0, remainingCalc))
//     }).catch(() => setRemaining(null))
//   }, [])

//   useEffect(() => {
//     const draft = localStorage.getItem('pioneer_form')
//     if (draft) {
//       try { const parsed = JSON.parse(draft); Object.entries(parsed).forEach(([k, v]) => setValue(k as any, v as any)) } catch {}
//     }
//   }, [setValue])

//   const onSubmit = async (values: ReservationValues) => {
//     localStorage.setItem('pioneer_form', JSON.stringify(values))
//     const body = new FormData()
//     Object.entries(values).forEach(([k, v]) => {
//       if (Array.isArray(v)) v.forEach(val => body.append(k, String(val)))
//       else body.append(k, String(v as any))
//     })
//     const res = await fetch('/api/pioneer-100', { method: 'POST', body })
//     if (!res.ok) return alert('Could not reserve. Try again.')
//     const { id } = await res.json()
//     const initRes = await fetch('/api/pioneer-100/init', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ reservationId: id, email: values.email, schoolName: values.schoolName }) })
//     if (!initRes.ok) return alert('Payment initialization failed')
//     const init = await initRes.json()
//     window.location.href = init.authorization_url
//   }

//   const remainingLabel = useMemo(() => {
//     if (remaining === null) return '—'
//     return String(remaining)
//   }, [remaining])

//   return (
//     <main className="min-h-screen bg-background">
//       <MinimalNav />

//       {/* Hero */}
//       <section className="pt-24 md:pt-32 pb-12 px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto grid md:flex  gap-8 items-center">
//           <div className="md:col-span-3 space-y-6">
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-balance">
//               Join the EdComrade Pioneer 100 — Be Among Ghana’s First Digitally Powered Schools
//             </h1>
//             <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
//               Reserve your spot with a ₵1,000 refundable deposit and secure priority on our January 2026 National School Media Tour. Website. Cinematic media. Admissions campaign. Pioneer privileges.
//             </p>
//             <div className="flex flex-wrap gap-3 items-center">
//               <a href="#reserve" className="bg-secondary text-secondary-foreground px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity" aria-label="Reserve Pioneer Slot (₵1,000 deposit)">Reserve Pioneer Slot — ₵1,000</a>
//               <Link href="#" className="underline">Download Program Brief (PDF)</Link>
//               <div className="ml-auto md:ml-0 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-sm">
//                 <span>100 total slots — <strong>{remainingLabel} remaining</strong></span>
//               </div>
//             </div>
//             <p className="text-xs text-muted-foreground">Deposit refundable until Dec 31, 2025. Full terms apply. <Link href="/pioneer-100-terms" className="underline">Read terms</Link>.</p>
//           </div>
//           {/* <div className="md:col-span-2 bg-background border border-border rounded-2xl p-6 shadow-sm">
//             <div className="space-y-2">
//               <div className="font-medium">Priority on-site media shoot</div>
//               <div className="text-sm text-muted-foreground">Secure a slot during our January 2026 National Tour.</div>
//             </div>
//           </div> */}
//         </div>
//       </section>

//       {/* Why Join */}
//       <section className="py-16 px-6 lg:px-8">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-3xl md:text-4xl font-semibold mb-8">Why join the Pioneer 100?</h2>
//           <div className="grid md:grid-cols-3 gap-6">
//             <div className="rounded-2xl border p-6"><div className="font-semibold mb-2">Be Seen</div><p className="text-muted-foreground">Cinematic media + website to attract parents and build trust.</p></div>
//             <div className="rounded-2xl border p-6"><div className="font-semibold mb-2">Be Efficient</div><p className="text-muted-foreground">Ready‑to‑use systems that simplify admin and communication.</p></div>
//             <div className="rounded-2xl border p-6"><div className="font-semibold mb-2">Be Legendary</div><p className="text-muted-foreground">Join pioneers shaping the future of education in Ghana.</p></div>
//           </div>
//           <div className="pt-6"><a href="#reserve" className="underline">Reserve your slot</a></div>
//         </div>
//       </section>

//       {/* What's Included */}
//       <section className="py-16 px-6 lg:px-8 bg-muted/30">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-3xl md:text-4xl font-semibold mb-8">Your School’s Full Digital Visibility Package</h2>
//           <div className="grid md:grid-cols-3 gap-6">
//             {[
//               ["Custom Website & Dashboard","Responsive website + CMS. Domain setup included."],
//               ["On-site Media Shoot","Pro photos + a 60–90s cinematic video during January Tour."],
//               ["Admissions Marketing Campaign","30‑day Facebook & Google campaign targeting local parents."],
//               ["Priority Scheduling & Pioneer Badge","Badge + directory highlight as an EdComrade Pioneer School."],
//               ["One Free Add‑on","Choose one ERP module free if you adopt within 6 months."],
//               ["Training & Support","Onboarding, basic CMS training, and technical support."],
//             ].map(([title, desc], i) => (
//               <div key={i} className="rounded-2xl border p-6">
//                 <div className="font-semibold mb-1">{title}</div>
//                 <p className="text-muted-foreground text-sm">{desc}</p>
//                 <button className="mt-3 text-sm underline">Learn more</button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* How It Works */}
//       <section className="py-16 px-6 lg:px-8">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-3xl md:text-4xl font-semibold mb-8">How it works</h2>
//           <div className="grid md:grid-cols-5 gap-4">
//             {[
//               ["Reserve","₵1,000 deposit to secure a spot"],
//               ["Onboard","Data collection & pre‑shoot checklist (3–7 days)"],
//               ["Shoot","Campus visit during January 2026 Tour"],
//               ["Deliver","Website, edited video, assets in 21 days"],
//               ["Grow","Optional ERP onboarding with Pioneer discount"],
//             ].map(([title, desc], i) => (
//               <div key={i} className="rounded-2xl border p-4">
//                 <div className="font-semibold">{title}</div>
//                 <p className="text-muted-foreground text-sm">{desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Pricing */}
//       <section className="py-16 px-6 lg:px-8 bg-muted/30">
//         <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
//           <div className="space-y-4">
//             <h2 className="text-3xl md:text-4xl font-semibold">Pricing & Payment</h2>
//             <p>Total Pioneer Package Price: <strong>₵3,500</strong> (₵1,000 deposit + ₵2,500 balance before shoot)</p>
//             <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
//               <li>Deposit: ₵1,000 — Refundable until Dec 31, 2025 (per T&Cs)</li>
//             </ul>
//             <div className="space-y-2">
//               <div className="font-medium">Payment Methods</div>
//               <ul className="list-disc pl-5 space-y-1 text-muted-foreground text-sm">
//                 <li>Paystack (Card & Mobile Money) — Recommended</li>
//                 <li>Direct Mobile Money (MTN) — Displayed number</li>
//                 <li>Bank Transfer — Account details provided</li>
//                 <li>Offline / Bank Deposit — Send proof to edcomrade.gh@gmail.com</li>
//               </ul>
//             </div>
//             <p className="text-sm text-muted-foreground">All payments are secure. Receipts and invoices sent automatically. Need instalments? Contact edcomrade.gh@gmail.com.</p>
//           </div>
          
//           {/* Reserve Form */}
//           <div id="reserve" className="rounded-2xl border border-border p-6 bg-background shadow-sm">
//             <h3 className="text-xl font-semibold mb-4">Reserve Your Pioneer Slot — ₵1,000 Deposit</h3>
//             <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-4" noValidate>
//               <input placeholder="School/Institution Name*" {...register('schoolName')} aria-invalid={!!errors.schoolName} className="border border-border rounded px-3 py-2" />
//               <select {...register('schoolType')} className="border border-border rounded px-3 py-2">
//                 <option value="">School Type*</option>
//                 <option>Basic</option>
//                 <option>High School</option>
//                 <option>Tertiary</option>
//                 <option>Other</option>
//               </select>
//               <select {...register('region')} className="border border-border rounded px-3 py-2">
//                 <option value="">Region*</option>
//                 {['Greater Accra','Ashanti','Eastern','Central','Volta','Western','Northern','Upper East','Upper West','Bono'].map(r => <option key={r}>{r}</option>)}
//               </select>
//               <input placeholder="City/Town*" {...register('city')} className="border border-border rounded px-3 py-2" />
//               <input placeholder="Contact Person Name*" {...register('contactName')} className="border border-border rounded px-3 py-2" />
//               <input placeholder="Contact Person Role*" {...register('contactRole')} className="border border-border rounded px-3 py-2" />
//               <input type="tel" placeholder="Phone (WhatsApp)*" {...register('phone')} className="border border-border rounded px-3 py-2" />
//               <input type="email" placeholder="Email Address*" {...register('email')} className="border border-border rounded px-3 py-2" />
//               <div className="md:col-span-2">
//                 <label htmlFor="">Does the school have a website?</label>
//                 <div className="flex gap-4 items-center text-sm">
//                   <label className="inline-flex items-center gap-2"><input type="radio" value="modern" {...register('hasWebsite')} /> Yes (modern)</label>
//                   <label className="inline-flex items-center gap-2"><input type="radio" value="outdated" {...register('hasWebsite')} /> Yes (outdated/static)</label>
//                   <label className="inline-flex items-center gap-2"><input type="radio" value="none" {...register('hasWebsite')} /> No</label>
//                 </div>
//               </div>
//               <input placeholder="Preferred shoot dates (comma separated)" onChange={(e) => setValue('preferredDates', e.target.value.split(',').map(s => s.trim()).filter(Boolean))} className="border border-border rounded px-3 py-2 md:col-span-2" />
//               <select {...register('hearAbout')} className="border border-border rounded px-3 py-2 md:col-span-2">
//                 <option value="">How did you hear about Pioneer 100?</option>
//                 {['Social Media','Referral','Denomination','Event','Other'].map(o => <option key={o}>{o}</option>)}
//               </select>
//               <label className="md:col-span-2 text-sm inline-flex items-start gap-2"><input type="checkbox" {...register('consentAccepted')} /> <span>I confirm I am authorised to register this school. I have read and agree to the Pioneer 100 Terms & Refund Policy.</span></label>
//               <label className="md:col-span-2 text-sm inline-flex items-start gap-2"><input type="checkbox" {...register('marketingOptIn')} /> <span>I agree to receive email and WhatsApp updates from EdComrade.</span></label>
//               <button type="submit" disabled={isSubmitting} className="md:col-span-2 bg-secondary text-secondary-foreground px-4 py-3 rounded-full font-medium hover:opacity-90 transition-opacity">{isSubmitting ? 'Processing…' : 'Proceed to Payment — ₵1,000'}</button>
//               <p className="md:col-span-2 text-xs text-muted-foreground">Your ₵1,000 deposit reserves your spot. Refundable until Dec 31, 2025.</p>
//             </form>
//           </div>
//         </div>
//       </section>

//       {/* FAQs */}
//       <section className="py-16 px-6 lg:px-8">
//         <div className="max-w-5xl mx-auto space-y-6">
//           <h2 className="text-2xl md:text-3xl font-semibold">FAQs</h2>
//           <div className="space-y-4 text-sm text-muted-foreground">
//             <p><strong>Is the deposit refundable?</strong> Yes — refundable until Dec 31, 2025. Full T&Cs apply.</p>
//             <p><strong>What if you can’t visit our region in January?</strong> We’ll reschedule in the next window or refund per T&Cs.</p>
//             <p><strong>Do you work with schools that already have websites?</strong> Yes. We optimize or rebuild during onboarding.</p>
//             <p><strong>Can we add ERP later?</strong> Absolutely — pioneers get discounts and one free add‑on within six months.</p>
//             <p><strong>Who covers permissions and consent?</strong> Schools must obtain parental consent; we provide templates.</p>
//           </div>
//         </div>
//       </section>

//       {/* Footer note */}
//       <section className="py-12 px-6 lg:px-8 bg-muted/30">
//         <div className="max-w-5xl mx-auto text-sm text-muted-foreground">
//           By reserving a slot, you agree to the Pioneer 100 Terms & Refund Policy. <Link href="/pioneer-100-terms" className="underline">View full terms</Link>.
//         </div>
//       </section>
//     </main>
//   )
// }



"use client";
import { useState, useEffect, useMemo } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check, Star, MapPin, Calendar, Award, Sparkles, ChevronDown } from "lucide-react";

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
});

type ReservationValues = z.infer<typeof ReservationSchema>;

export default function PioneerPage() {
  const [remaining, setRemaining] = useState<number | null>(null);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const totalSlots = 100;

  const { register, handleSubmit, formState: { errors, isSubmitting }, setValue } = useForm<ReservationValues>({
    resolver: zodResolver(ReservationSchema)
  });

  useEffect(() => {
    // Simulated API call
    const remainingCalc = totalSlots - 23;
    setRemaining(Math.max(0, remainingCalc));
  }, []);

  const onSubmit = async (values: ReservationValues) => {
    console.log(values);
    alert('Form submitted! (This is a demo)');
  };

  const remainingLabel = useMemo(() => {
    if (remaining === null) return '—';
    return String(remaining);
  }, [remaining]);

  const faqs = [
    { q: "Is the deposit refundable?", a: "Yes — refundable until Dec 31, 2025. Full T&Cs apply." },
    { q: "What if you can't visit our region in January?", a: "We'll reschedule in the next window or refund per T&Cs." },
    { q: "Do you work with schools that already have websites?", a: "Yes. We optimize or rebuild during onboarding." },
    { q: "Can we add ERP later?", a: "Absolutely — pioneers get discounts and one free add‑on within six months." },
    { q: "Who covers permissions and consent?", a: "Schools must obtain parental consent; we provide templates." },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* Minimal Nav */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg border-b border-slate-200 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="font-semibold text-xl">EdComrade</div>
          <div className="flex items-center gap-6">
            <a href="#how-it-works" className="text-sm hover:text-slate-600 transition">How It Works</a>
            <a href="#pricing" className="text-sm hover:text-slate-600 transition">Pricing</a>
            <a href="#reserve" className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:shadow-lg hover:scale-105 transition-all">Reserve Slot</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute -bottom-20 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="max-w-6xl mx-auto relative">
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-full px-4 py-2 text-sm">
              <Sparkles className="w-4 h-4 text-indigo-600" />
              <span className="font-medium text-indigo-900">Limited to 100 Schools Nationwide</span>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-center text-slate-900 mb-6 leading-tight">
            Join the <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Pioneer 100</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-center text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Be among Ghana's first digitally powered schools. Get a professional website, cinematic media, and priority access to our January 2026 National Tour.
          </p>

          {/* Stats Bar */}
          <div className="flex flex-wrap justify-center gap-8 mb-10">
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600">{remainingLabel}</div>
              <div className="text-sm text-slate-600">Slots Remaining</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600">₵3,500</div>
              <div className="text-sm text-slate-600">Total Package</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600">Jan 2026</div>
              <div className="text-sm text-slate-600">National Tour</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <a href="#reserve" className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all inline-flex items-center gap-2">
              Reserve Your Slot — ₵1,000
              <Star className="w-5 h-5" />
            </a>
            <a href="#" className="bg-white border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-full font-semibold text-lg hover:border-indigo-600 hover:text-indigo-600 transition-all">
              Download Program Brief
            </a>
          </div>

          <p className="text-center text-sm text-slate-500">
            ₵1,000 deposit refundable until Dec 31, 2025 · <a href="#" className="underline hover:text-indigo-600">View Terms</a>
          </p>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Why Join the Pioneer 100?</h2>
            <p className="text-xl text-slate-600">Transform your school's digital presence and join an elite network</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "🎬", title: "Be Seen", desc: "Cinematic media and a stunning website that attracts parents and builds instant trust.", gradient: "from-blue-500 to-cyan-500" },
              { icon: "⚡", title: "Be Efficient", desc: "Ready-to-use systems that simplify administration and parent communication.", gradient: "from-purple-500 to-pink-500" },
              { icon: "🏆", title: "Be Legendary", desc: "Join the pioneers shaping the future of education in Ghana with exclusive benefits.", gradient: "from-orange-500 to-red-500" }
            ].map((item, i) => (
              <div key={i} className="group relative bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 border border-slate-200 hover:border-transparent hover:shadow-2xl transition-all duration-300">
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity`}></div>
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Your Complete Digital Package</h2>
            <p className="text-xl text-slate-600">Everything you need to stand out in 2026</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <MapPin className="w-6 h-6" />, title: "Custom Website & Dashboard", desc: "Responsive website with CMS. Domain setup and hosting included." },
              { icon: <Calendar className="w-6 h-6" />, title: "On-site Media Shoot", desc: "Professional photos and a 60–90s cinematic video during our January Tour." },
              { icon: <Sparkles className="w-6 h-6" />, title: "Admissions Marketing Campaign", desc: "30-day Facebook & Google ads targeting local parents in your region." },
              { icon: <Award className="w-6 h-6" />, title: "Priority Scheduling & Badge", desc: "Pioneer badge and directory highlight as an EdComrade Pioneer School." },
              { icon: <Star className="w-6 h-6" />, title: "One Free Add-on", desc: "Choose one ERP module free if you adopt our system within 6 months." },
              { icon: <Check className="w-6 h-6" />, title: "Training & Support", desc: "Complete onboarding, CMS training, and ongoing technical support." }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-white/20">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center text-white mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-900 mb-16">How It Works</h2>
          
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200"></div>
            
            <div className="grid md:grid-cols-5 gap-8 relative">
              {[
                { num: "01", title: "Reserve", desc: "₵1,000 deposit secures your spot", color: "from-indigo-500 to-indigo-600" },
                { num: "02", title: "Onboard", desc: "Data collection & pre-shoot checklist (3–7 days)", color: "from-purple-500 to-purple-600" },
                { num: "03", title: "Shoot", desc: "Campus visit during January 2026 Tour", color: "from-pink-500 to-pink-600" },
                { num: "04", title: "Deliver", desc: "Website, video & assets in 21 days", color: "from-orange-500 to-orange-600" },
                { num: "05", title: "Grow", desc: "Optional ERP with Pioneer discount", color: "from-cyan-500 to-cyan-600" }
              ].map((step, i) => (
                <div key={i} className="relative">
                  <div className={`w-24 h-24 mx-auto bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center text-white text-2xl font-bold mb-4 shadow-lg`}>
                    {step.num}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 text-center mb-2">{step.title}</h3>
                  <p className="text-slate-600 text-sm text-center leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & Form Section */}
      <section id="pricing" className="py-20 px-6 lg:px-8 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Pricing Info */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Simple, Transparent Pricing</h2>
              
              <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-8 shadow-2xl">
                <div className="text-5xl font-bold mb-2">₵3,500</div>
                <div className="text-xl opacity-90 mb-6">Total Pioneer Package</div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 mt-1 flex-shrink-0" />
                    <span>₵1,000 deposit (refundable until Dec 31, 2025)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 mt-1 flex-shrink-0" />
                    <span>₵2,500 balance before shoot</span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800 rounded-2xl p-6">
                <h3 className="font-bold text-lg mb-4">Payment Methods</h3>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></div>
                    Paystack (Card & Mobile Money) — Recommended
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></div>
                    Direct Mobile Money (MTN)
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></div>
                    Bank Transfer
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></div>
                    Offline / Bank Deposit
                  </li>
                </ul>
              </div>

              <p className="text-slate-400 text-sm">Need installments? Contact edcomrade.gh@gmail.com for flexible payment options.</p>
            </div>

            {/* Reserve Form */}
            <div id="reserve" className="bg-white rounded-3xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Reserve Your Spot</h3>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <input 
                  placeholder="School/Institution Name*" 
                  {...register('schoolName')} 
                  className="w-full border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition" 
                />
                
                <select {...register('schoolType')} className="w-full border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition">
                  <option value="">School Type*</option>
                  <option>Basic</option>
                  <option>High School</option>
                  <option>Tertiary</option>
                  <option>Other</option>
                </select>

                <div className="grid grid-cols-2 gap-4">
                  <select {...register('region')} className="border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition">
                    <option value="">Region*</option>
                    {['Greater Accra','Ashanti','Eastern','Central','Volta','Western','Northern','Upper East','Upper West','Bono'].map(r => <option key={r}>{r}</option>)}
                  </select>
                  
                  <input placeholder="City/Town*" {...register('city')} className="border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition" />
                </div>

                <input placeholder="Contact Person Name*" {...register('contactName')} className="w-full border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition" />
                
                <input placeholder="Contact Person Role*" {...register('contactRole')} className="w-full border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition" />

                <div className="grid grid-cols-2 gap-4">
                  <input type="tel" placeholder="Phone (WhatsApp)*" {...register('phone')} className="border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition" />
                  
                  <input type="email" placeholder="Email Address*" {...register('email')} className="border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Does the school have a website?</label>
                  <div className="flex flex-wrap gap-4">
                    <label className="inline-flex items-center gap-2 text-slate-700 cursor-pointer">
                      <input type="radio" value="modern" {...register('hasWebsite')} className="text-indigo-600 focus:ring-indigo-500" /> 
                      <span className="text-sm">Yes (modern)</span>
                    </label>
                    <label className="inline-flex items-center gap-2 text-slate-700 cursor-pointer">
                      <input type="radio" value="outdated" {...register('hasWebsite')} className="text-indigo-600 focus:ring-indigo-500" /> 
                      <span className="text-sm">Yes (outdated)</span>
                    </label>
                    <label className="inline-flex items-center gap-2 text-slate-700 cursor-pointer">
                      <input type="radio" value="none" {...register('hasWebsite')} className="text-indigo-600 focus:ring-indigo-500" /> 
                      <span className="text-sm">No</span>
                    </label>
                  </div>
                </div>

                <select {...register('hearAbout')} className="w-full border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition">
                  <option value="">How did you hear about us?</option>
                  {['Social Media','Referral','Denomination','Event','Other'].map(o => <option key={o}>{o}</option>)}
                </select>

                <label className="flex items-start gap-3 text-sm text-slate-700 cursor-pointer">
                  <input type="checkbox" {...register('consentAccepted')} className="mt-1 text-indigo-600 focus:ring-indigo-500 rounded" /> 
                  <span>I confirm I am authorised to register this school and agree to the Pioneer 100 Terms.</span>
                </label>

                <label className="flex items-start gap-3 text-sm text-slate-700 cursor-pointer">
                  <input type="checkbox" {...register('marketingOptIn')} className="mt-1 text-indigo-600 focus:ring-indigo-500 rounded" /> 
                  <span>I agree to receive updates from EdComrade.</span>
                </label>

                <button 
                  type="submit" 
                  disabled={isSubmitting} 
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Processing…' : 'Proceed to Payment — ₵1,000'}
                </button>

                <p className="text-xs text-slate-500 text-center">
                  Deposit reserves your spot. Refundable until Dec 31, 2025.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-900 mb-12">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-slate-200 rounded-2xl overflow-hidden hover:border-indigo-300 transition">
                <button 
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition"
                >
                  <span className="font-semibold text-slate-900">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${expandedFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {expandedFaq === i && (
                  <div className="px-6 pb-6 text-slate-600">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 lg:px-8 bg-slate-900 text-slate-400 text-sm text-center">
        <div className="max-w-4xl mx-auto">
          <p>By reserving a slot, you agree to the Pioneer 100 Terms & Refund Policy. <a href="#" className="underline hover:text-white transition">View full terms</a></p>
          <p className="mt-4">© 2025 EdComrade. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}