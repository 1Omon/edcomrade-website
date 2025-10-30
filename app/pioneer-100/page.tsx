"use client";
import { useState, useEffect, useMemo } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Check,
  Star,
  MapPin,
  Calendar,
  Award,
  Sparkles,
  ChevronDown,
} from "lucide-react";
import { MinimalNav } from "@/components/minimal-nav";

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

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm<ReservationValues>({
    resolver: zodResolver(ReservationSchema),
  });

  useEffect(() => {
    fetch("/api/pioneer-100")
      .then((r) => r.json())
      .then(({ total }) => {
        const remainingCalc = totalSlots - Number(total || 0);
        setRemaining(Math.max(0, remainingCalc));
      })
      .catch(() => setRemaining(null));
  }, []);

  useEffect(() => {
    const draft = localStorage.getItem("pioneer_form");
    if (draft) {
      try {
        const parsed = JSON.parse(draft);
        Object.entries(parsed).forEach(([k, v]) =>
          setValue(k as any, v as any)
        );
      } catch {}
    }
  }, [setValue]);

  const onSubmit = async (values: ReservationValues) => {
    localStorage.setItem("pioneer_form", JSON.stringify(values));
    const body = new FormData();
    Object.entries(values).forEach(([k, v]) => {
      if (Array.isArray(v)) v.forEach((val) => body.append(k, String(val)));
      else body.append(k, String(v as any));
    });
    const res = await fetch("/api/pioneer-100", { method: "POST", body });
    if (!res.ok) return alert("Could not reserve. Try again.");
    const { id } = await res.json();
    const initRes = await fetch("/api/pioneer-100/init", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        reservationId: id,
        email: values.email,
        schoolName: values.schoolName,
      }),
    });
    if (!initRes.ok) return alert("Payment initialization failed");
    const init = await initRes.json();
    window.location.href = init.authorization_url;
  };

  const remainingLabel = useMemo(() => {
    if (remaining === null) return "—";
    return String(remaining);
  }, [remaining]);

  const faqs = [
    {
      q: "Is the deposit refundable?",
      a: "Yes — refundable until Dec 31, 2025. Full T&Cs apply.",
    },
    {
      q: "What if you can't visit our region in January?",
      a: "We'll reschedule in the next window or refund per T&Cs.",
    },
    {
      q: "Do you work with schools that already have websites?",
      a: "Yes. We optimize or rebuild during onboarding.",
    },
    {
      q: "Can we add ERP later?",
      a: "Absolutely — pioneers get discounts and one free add‑on within six months.",
    },
    {
      q: "Who covers permissions and consent?",
      a: "Schools must obtain parental consent; we provide templates.",
    },
  ];

  return (
    <main className="min-h-screen ">
      <MinimalNav />
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative">
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 border border-secondary rounded-full px-4 py-2 text-sm">
              <Sparkles className="w-4 h-4 text-secondary" />
              <span className="font-medium text-secondary">
                Limited to 100 Schools Nationwide
              </span>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-balance mb-6 text-center">
            Join the{" "}
            <span className="bg-primary  bg-clip-text text-transparent">
              Pioneer 100
            </span>
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground text-balance leading-relaxed max-w-3xl mx-auto font-light text-center my-6">
            Be among Ghana's first digitally powered schools. Get a professional
            website, cinematic media, and priority access to our January 2026
            National Tour.
          </p>

          {/* Stats Bar */}
          <div className="flex flex-wrap justify-center gap-8 mb-10">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">
                {remainingLabel}
              </div>
              <div className="text-sm ">Slots Remaining</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">₵3,500</div>
              <div className="text-sm ">Total Package</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">Jan 2026</div>
              <div className="text-sm ">National Tour</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <a
              href="#reserve"
              className="bg-secondary px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all inline-flex items-center gap-2"
            >
              Reserve Your Slot — ₵1,000
              <Star className="w-5 h-5" />
            </a>
            <a
              href="/pioneer-brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border-2 border-slate-300 px-8 py-4 rounded-full font-semibold text-lg hover:border-indigo-600 hover:text-primary transition-all"
            >
              View Program Brief (PDF)
            </a>
          </div>

          <p className="text-center text-sm text-slate-500">
            ₵1,000 deposit refundable until Dec 31, 2025 ·{" "}
            <a
              href="/pioneer-100-terms"
              className="underline hover:text-primary"
            >
              View Terms
            </a>
          </p>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Join the Pioneer 100?
            </h2>
            <p className="text-xl ">
              Transform your school's digital presence and join an elite network
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🎬",
                title: "Be Seen",
                desc: "Cinematic media and a stunning website that attracts parents and builds instant trust.",
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                icon: "⚡",
                title: "Be Efficient",
                desc: "Ready-to-use systems that simplify administration and parent communication.",
                gradient: "from-purple-500 to-pink-500",
              },
              {
                icon: "🏆",
                title: "Be Legendary",
                desc: "Join the pioneers shaping the future of education in Ghana with exclusive benefits.",
                gradient: "from-orange-500 to-red-500",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 border border-slate-200 hover:border-transparent hover:shadow-2xl transition-all duration-300"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity`}
                ></div>
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className=" leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 px-6 lg:px-8 bg-accent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Your Complete Digital Package
            </h2>
            <p className="text-xl ">Everything you need to stand out in 2026</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <MapPin className="w-6 h-6" />,
                title: "Custom Website & Dashboard",
                desc: "Responsive website with CMS. Domain setup and hosting included.",
              },
              {
                icon: <Calendar className="w-6 h-6" />,
                title: "On-site Media Shoot",
                desc: "Professional photos and a 60–90s cinematic video during our January Tour.",
              },
              {
                icon: <Sparkles className="w-6 h-6" />,
                title: "Admissions Marketing Campaign",
                desc: "30-day Facebook & Google ads targeting local parents in your region.",
              },
              {
                icon: <Award className="w-6 h-6" />,
                title: "Priority Scheduling & Badge",
                desc: "Pioneer badge and directory highlight as an EdComrade Pioneer School.",
              },
              {
                icon: <Star className="w-6 h-6" />,
                title: "One Free Add-on",
                desc: "Choose one ERP module free if you adopt our system within 6 months.",
              },
              {
                icon: <Check className="w-6 h-6" />,
                title: "Training & Support",
                desc: "Complete onboarding, CMS training, and ongoing technical support.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-white/20"
              >
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className=" text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            How It Works
          </h2>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200"></div>

            <div className="grid md:grid-cols-5 gap-8 relative">
              {[
                {
                  num: "01",
                  title: "Reserve",
                  desc: "₵1,000 deposit secures your spot",
                  color: "from-indigo-500 to-indigo-600",
                },
                {
                  num: "02",
                  title: "Onboard",
                  desc: "Data collection & pre-shoot checklist (3–7 days)",
                  color: "from-purple-500 to-purple-600",
                },
                {
                  num: "03",
                  title: "Shoot",
                  desc: "Campus visit during January 2026 Tour",
                  color: "from-pink-500 to-pink-600",
                },
                {
                  num: "04",
                  title: "Deliver",
                  desc: "Website, video & assets in 21 days",
                  color: "from-orange-500 to-orange-600",
                },
                {
                  num: "05",
                  title: "Grow",
                  desc: "Optional ERP with Pioneer discount",
                  color: "from-cyan-500 to-cyan-600",
                },
              ].map((step, i) => (
                <div key={i} className="relative">
                  <div
                    className={`w-24 h-24 mx-auto bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center text-white text-2xl font-bold mb-4 shadow-lg`}
                  >
                    {step.num}
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2">
                    {step.title}
                  </h3>
                  <p className=" text-sm text-center leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & Form Section */}
      <section
        id="pricing"
        className="py-20 px-6 lg:px-8 bg-primary text-white"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Pricing Info */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Simple, Transparent Pricing
              </h2>

              <div className="bg-slate-800 rounded-3xl p-8 shadow-2xl">
                <div className="text-5xl font-bold mb-2">₵3,500</div>
                <div className="text-xl opacity-90 mb-6">
                  Total Pioneer Package
                </div>
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
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Paystack (Card & Mobile Money) — Recommended
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Direct Mobile Money (MTN)
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Bank Transfer
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Offline / Bank Deposit
                  </li>
                </ul>
              </div>

              <p className="text-slate-400 text-sm">
                Need installments? Contact{" "}
                <a
                  className="hover:underline hover:text-white"
                  href="mailto:edcomrade.gh@gmail.com"
                >
                  edcomrade.gh@gmail.com
                </a>{" "}
                for flexible payment options.
              </p>
            </div>

            {/* Reserve Form */}
            <div
              id="reserve"
              className="bg-white text-foreground rounded-3xl p-8 shadow-2xl"
            >
              <h3 className="text-2xl font-bold mb-6">Reserve Your Spot</h3>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <input
                  placeholder="School/Institution Name*"
                  {...register("schoolName")}
                  className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition"
                />

                <select
                  {...register("schoolType")}
                  className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition"
                >
                  <option value="">School Type*</option>
                  <option>Basic</option>
                  <option>High School</option>
                  <option>Tertiary</option>
                  <option>Other</option>
                </select>

                <div className="grid grid-cols-2 gap-4">
                  <select
                    {...register("region")}
                    className="border border-slate-300 rounded-xl px-4 py-3 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition"
                  >
                    <option value="">Region*</option>
                    {[
                      "Greater Accra",
                      "Ashanti",
                      "Eastern",
                      "Central",
                      "Volta",
                      "Western",
                      "Northern",
                      "Upper East",
                      "Upper West",
                      "Bono",
                    ].map((r) => (
                      <option key={r}>{r}</option>
                    ))}
                  </select>

                  <input
                    placeholder="City/Town*"
                    {...register("city")}
                    className="border border-slate-300 rounded-xl px-4 py-3 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition"
                  />
                </div>

                <input
                  placeholder="Contact Person Name*"
                  {...register("contactName")}
                  className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition"
                />

                <input
                  placeholder="Contact Person Role*"
                  {...register("contactRole")}
                  className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition"
                />

                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="tel"
                    placeholder="Phone (WhatsApp)*"
                    {...register("phone")}
                    className="border border-slate-300 rounded-xl px-4 py-3 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition"
                  />

                  <input
                    type="email"
                    placeholder="Email Address*"
                    {...register("email")}
                    className="border border-slate-300 rounded-xl px-4 py-3 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium  mb-2">
                    Does the school have a website?
                  </label>
                  <div className="flex flex-wrap gap-4">
                    <label className="inline-flex items-center gap-2  cursor-pointer">
                      <input
                        type="radio"
                        value="modern"
                        {...register("hasWebsite")}
                        className="text-primary focus:ring-indigo-500"
                      />
                      <span className="text-sm">Yes (modern)</span>
                    </label>
                    <label className="inline-flex items-center gap-2  cursor-pointer">
                      <input
                        type="radio"
                        value="outdated"
                        {...register("hasWebsite")}
                        className="text-primary focus:ring-indigo-500"
                      />
                      <span className="text-sm">Yes (outdated)</span>
                    </label>
                    <label className="inline-flex items-center gap-2  cursor-pointer">
                      <input
                        type="radio"
                        value="none"
                        {...register("hasWebsite")}
                        className="text-primary focus:ring-indigo-500"
                      />
                      <span className="text-sm">No</span>
                    </label>
                  </div>
                </div>

                <select
                  {...register("hearAbout")}
                  className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition"
                >
                  <option value="">How did you hear about us?</option>
                  {[
                    "Social Media",
                    "Referral",
                    "Denomination",
                    "Event",
                    "Other",
                  ].map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>

                <label className="flex items-start gap-3 text-sm  cursor-pointer">
                  <input
                    type="checkbox"
                    {...register("consentAccepted")}
                    className="mt-1 text-primary focus:ring-indigo-500 rounded"
                  />
                  <span>
                    I confirm I am authorised to register this school and agree
                    to the Pioneer 100 Terms.
                  </span>
                </label>

                <label className="flex items-start gap-3 text-sm  cursor-pointer">
                  <input
                    type="checkbox"
                    {...register("marketingOptIn")}
                    className="mt-1 text-primary focus:ring-indigo-500 rounded"
                  />
                  <span>I agree to receive updates from EdComrade.</span>
                </label>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-secondary  px-6 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Processing…" : "Proceed to Payment — ₵1,000"}
                </button>

                <p className="text-xs text-slate-500 text-center">
                  Deposit reserves your spot. Refundable until{" "}
                  <b>Dec 31, 2025.</b>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="border border-slate-200 rounded-2xl overflow-hidden hover:border-indigo-300 transition"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition"
                >
                  <span className="font-semibold">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform ${
                      expandedFaq === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {expandedFaq === i && <div className="px-6 pb-6 ">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 lg:px-8 bg-slate-900 text-slate-400 text-sm text-center">
        <div className="max-w-4xl mx-auto">
          <p>
            By reserving a slot, you agree to the Pioneer 100 Terms & Refund
            Policy.{" "}
            <a
              href="/pioneer-100-terms"
              className="underline hover:text-white transition"
            >
              View full terms
            </a>
          </p>
          <p className="text-sm text-slate-500 text-center mt-2">
            You can also{" "}
            <a
              href="/pioneer-brochure.pdf"
              download
              className="underline hover:text-primary"
            >
              download our brochure
            </a>
            .
          </p>

          <p className="mt-4">© 2025 EdComrade. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
