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
  Users,
  Video,
  Target,
  TrendingUp,
  ArrowLeft,
} from "lucide-react";
import { MinimalNav } from "@/components/minimal-nav";
import { useRouter } from "next/navigation";
import Link from "next/link";

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
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm<ReservationValues>({
    resolver: zodResolver(ReservationSchema),
  });

  useEffect(() => {
    fetch("/api/digital-100")
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
    const res = await fetch("/api/digital-100", { method: "POST", body });
    if (!res.ok) return alert("Could not reserve. Try again.");
    const { id } = await res.json();
    const initRes = await fetch("/api/digital-100/init", {
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
      a: "Yes — refundable until Jan 31, 2025. Full T&Cs apply.",
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
    <main className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50 ">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 ">
          <div
            className="flex items-center h-16 cursor-pointer hover:text-primary transition"
            onClick={() => router.back()}
          >
            <ArrowLeft className="w-6 h-6 mr-2 " />
            <span className="">Go Back</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary border border-secondary/20">
              <Sparkles className="w-4 h-4" />
              <span className="font-medium text-sm">
                Limited to 100 Schools Nationwide
              </span>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-center mb-6">
            Join the{" "}
            <span className="text-primary font-medium">Digital 100</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground text-center max-w-3xl mx-auto mb-12 leading-relaxed">
            Be among Ghana's first digitally powered schools. Get a professional
            website, cinematic media, and priority access to our January 2026
            National Tour.
          </p>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 text-center">
              <div className="text-4xl font-light text-primary mb-2">
                {remainingLabel}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                Slots Remaining
              </div>
            </div>
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 text-center">
              <div className="text-4xl font-light text-primary mb-2">
                ₵5,000
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                Total Package
              </div>
            </div>
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 text-center">
              <div className="text-4xl font-light text-primary mb-2">
                Jan 2026
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                National Tour
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <Link
              href="#reserve"
              className="bg-secondary text-secondary-foreground px-8 py-4 rounded-full text-lg font-medium hover:shadow-lg hover:scale-105 transition-all inline-flex items-center gap-2"
            >
              Reserve Your Slot — ₵1,500
              <Star className="w-5 h-5" />
            </Link>
            <Link
              href="/pioneer-brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-background border-2 border-border px-8 py-4 rounded-full text-lg font-medium hover:border-primary transition-all"
            >
              View Program Brief (PDF)
            </Link>
          </div>

          <p className="text-center text-sm text-muted-foreground">
            ₵1,500 deposit refundable until Jan 31, 2025 ·{" "}
            <Link
              href="/campaigns/digital-100-terms"
              className="underline hover:text-primary"
            >
              View Terms
            </Link>
          </p>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-20 px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Elite Network
            </div>
            <h2 className="text-4xl md:text-5xl font-light mb-4">
              Why Join the Digital 100?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transform your school's digital presence and join an elite network
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Video className="w-8 h-8" />,
                title: "Be Seen",
                desc: "Cinematic media and a stunning website that attracts parents and builds instant trust.",
                color: "primary",
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Be Efficient",
                desc: "Ready-to-use systems that simplify administration and parent communication.",
                color: "secondary",
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Be Legendary",
                desc: "Join the pioneers shaping the future of education in Ghana with exclusive benefits.",
                color: "primary",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-background rounded-2xl p-8 border border-border hover:border-primary/50 hover:shadow-xl transition-all group"
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-${item.color}/10 flex items-center justify-center text-${item.color} mb-6 group-hover:scale-110 transition-transform`}
                >
                  {item.icon}
                </div>
                <h3 className="text-2xl font-light mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Complete Package
            </div>
            <h2 className="text-4xl md:text-5xl font-light mb-4">
              Your Complete Digital Package
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to stand out in 2026
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <MapPin className="w-6 h-6" />,
                title: "Custom Website & Dashboard",
                desc: "Responsive website with CMS. Domain setup and hosting included.",
              },
              {
                icon: <Video className="w-6 h-6" />,
                title: "On-site Media Shoot",
                desc: "Professional photos and a 60–90s cinematic video during our January Tour.",
              },
              {
                icon: <Target className="w-6 h-6" />,
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
                icon: <Users className="w-6 h-6" />,
                title: "Training & Support",
                desc: "Complete onboarding, CMS training, and ongoing technical support.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-background border border-border rounded-2xl p-6 hover:border-primary/50 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-light mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Simple Process
            </div>
            <h2 className="text-4xl md:text-5xl font-light">How It Works</h2>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {[
              {
                num: "01",
                title: "Reserve",
                desc: "₵1,500 deposit secures your spot",
              },
              {
                num: "02",
                title: "Onboard",
                desc: "Data collection & pre-shoot checklist (3–7 days)",
              },
              {
                num: "03",
                title: "Shoot",
                desc: "Campus visit during January 2026 Tour",
              },
              {
                num: "04",
                title: "Deliver",
                desc: "Website, video & assets in 21 days",
              },
              {
                num: "05",
                title: "Grow",
                desc: "Optional ERP with Pioneer discount",
              },
            ].map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-20 h-20 mx-auto bg-primary rounded-2xl flex items-center justify-center text-primary-foreground text-2xl font-light mb-4 shadow-lg">
                  {step.num}
                </div>
                <h3 className="text-xl font-light mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing & Form Section */}
      <section id="pricing" className="py-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Pricing Info */}
            <div className="space-y-6">
              <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Transparent Pricing
              </div>
              <h2 className="text-4xl md:text-5xl font-light mb-6">
                Simple, Transparent Pricing
              </h2>

              <div className="bg-primary text-primary-foreground rounded-3xl p-8 shadow-xl">
                <div className="text-5xl font-light mb-2">₵5,000</div>
                <div className="text-xl opacity-90 mb-6">
                  Total Pioneer Package
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 mt-1 flex-shrink-0" />
                    <span>₵1,500 deposit (refundable until Jan 31, 2025)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 mt-1 flex-shrink-0" />
                    <span>₵3,500 balance before shoot</span>
                  </div>
                </div>
              </div>

              <div className="bg-muted rounded-2xl p-6 border border-border">
                <h3 className="font-light text-lg mb-4">Payment Methods</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
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

              <p className="text-muted-foreground text-sm">
                Need installments? Contact{" "}
                <Link
                  className="hover:underline hover:text-primary"
                  href="mailto:edcomrade.gh@gmail.com"
                >
                  edcomrade.gh@gmail.com
                </Link>{" "}
                for flexible payment options.
              </p>
            </div>

            {/* Reserve Form */}
            <div
              id="reserve"
              className="bg-background border-2 border-border rounded-3xl p-8 shadow-xl"
            >
              <h3 className="text-2xl font-light mb-6">Reserve Your Spot</h3>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <input
                  placeholder="School/Institution Name*"
                  {...register("schoolName")}
                  className="w-full border border-border rounded-xl px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition bg-background"
                />

                <select
                  {...register("schoolType")}
                  className="w-full border border-border rounded-xl px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition bg-background"
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
                    className="border border-border rounded-xl px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition bg-background"
                  >
                    <option value="">Region*</option>
                    {[
                      "Greater Accra",
                      "Ashanti",
                      "Eastern",
                      "Oti",
                      "Central",
                      "Volta",
                      "Western",
                      "Western North",
                      "Northern",
                      "North East",
                      "Upper East",
                      "Upper West",
                      "Savannah",
                      "Ahafo",
                      "Bono",
                      "Bono East",
                    ].map((r) => (
                      <option key={r}>{r}</option>
                    ))}
                  </select>

                  <input
                    placeholder="City/Town*"
                    {...register("city")}
                    className="border border-border rounded-xl px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition bg-background"
                  />
                </div>

                <input
                  placeholder="Contact Person Name*"
                  {...register("contactName")}
                  className="w-full border border-border rounded-xl px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition bg-background"
                />

                <input
                  placeholder="Contact Person Role*"
                  {...register("contactRole")}
                  className="w-full border border-border rounded-xl px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition bg-background"
                />

                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="tel"
                    placeholder="Phone (WhatsApp)*"
                    {...register("phone")}
                    className="border border-border rounded-xl px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition bg-background"
                  />

                  <input
                    type="email"
                    placeholder="Email Address*"
                    {...register("email")}
                    className="border border-border rounded-xl px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition bg-background"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Does the school have a website?
                  </label>
                  <div className="flex flex-wrap gap-4">
                    <label className="inline-flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        value="modern"
                        {...register("hasWebsite")}
                        className="text-primary focus:ring-primary"
                      />
                      <span className="text-sm">Yes (modern)</span>
                    </label>
                    <label className="inline-flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        value="outdated"
                        {...register("hasWebsite")}
                        className="text-primary focus:ring-primary"
                      />
                      <span className="text-sm">Yes (outdated)</span>
                    </label>
                    <label className="inline-flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        value="none"
                        {...register("hasWebsite")}
                        className="text-primary focus:ring-primary"
                      />
                      <span className="text-sm">No</span>
                    </label>
                  </div>
                </div>

                <select
                  {...register("hearAbout")}
                  className="w-full border border-border rounded-xl px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition bg-background"
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

                <label className="flex items-start gap-3 text-sm cursor-pointer">
                  <input
                    type="checkbox"
                    {...register("consentAccepted")}
                    className="mt-1 text-primary focus:ring-primary rounded"
                  />
                  <span>
                    I confirm I am authorised to register this school and agree
                    to the Digital 100 Terms.
                  </span>
                </label>

                <label className="flex items-start gap-3 text-sm cursor-pointer">
                  <input
                    type="checkbox"
                    {...register("marketingOptIn")}
                    className="mt-1 text-primary focus:ring-primary rounded"
                  />
                  <span>I agree to receive updates from EdComrade.</span>
                </label>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-secondary text-secondary-foreground px-6 py-4 rounded-xl font-medium text-lg hover:shadow-lg hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Processing…" : "Proceed to Payment — ₵1,500"}
                </button>

                <p className="text-xs text-muted-foreground text-center">
                  Deposit reserves your spot. Refundable until{" "}
                  <b>Jan 31, 2025.</b>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Got Questions?
            </div>
            <h2 className="text-4xl md:text-5xl font-light">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="border border-border bg-background rounded-2xl overflow-hidden hover:border-primary/50 transition"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/50 transition"
                >
                  <span className="font-medium">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground transition-transform ${
                      expandedFaq === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {expandedFaq === i && (
                  <div className="px-6 pb-6 text-muted-foreground">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <p className="mb-2">
            By reserving a slot, you agree to the Digital 100 Terms & Refund
            Policy.{" "}
            <Link
              href="/campaigns/digital-100-terms"
              className="underline hover:opacity-80 transition"
            >
              View full terms
            </Link>
          </p>
          <p className="text-sm opacity-80 mb-4">
            You can also{" "}
            <Link
              href="/pioneer-brochure.pdf"
              download
              className="underline hover:opacity-100"
            >
              download our brochure
            </Link>
            .
          </p>

          <p className="text-sm opacity-70">
            © 2025 EdComrade. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
