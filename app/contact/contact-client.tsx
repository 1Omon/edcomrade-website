"use client";

import { useState } from "react";
import { Loader2, Mail, Phone, MapPin, Send, CheckCircle2, Sparkles } from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { submitContactAction } from "@/app/actions";

function Label({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2E8BC0]/10 text-[#2E8BC0] text-[11px] font-bold uppercase tracking-wider mb-3 shadow-xs">
      <Sparkles className="w-3 h-3" />
      <span>{children}</span>
    </div>
  );
}

interface ContactPageClientProps {
  initialSubject?: string;
}

export default function ContactPageClient({ initialSubject = "" }: ContactPageClientProps) {
  const [role, setRole] = useState<string>("other");
  const [isPending, setIsPending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [subject, setSubject] = useState(initialSubject);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsPending(true);
    const formData = new FormData(e.currentTarget);
    try {
      await submitContactAction(formData);
      setIsSuccess(true);
    } catch (error) {
      console.error(error);
      alert("Something went wrong submitting your message. Please try again.");
    } finally {
      setIsPending(false);
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className="bg-white pt-32 pb-12 md:pt-40 md:pb-20 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <span className="clay-badge bg-[#E8F5EE] text-[#1B5E20] mb-4">
            Get in Touch
          </span>
          <h1
            className="font-extrabold text-[#1A3C5E] max-w-4xl"
            style={{
              fontSize: "clamp(44px, 7vw, 84px)",
              lineHeight: 0.96,
              letterSpacing: "-0.03em",
            }}
          >
            Let&apos;s start a conversation.
          </h1>
          <p className="text-gray-600 mt-6 max-w-[540px] text-lg leading-relaxed">
            Whether you are a school proprietor looking to modernise operations, a parent with questions, or an educational partner, our team is ready to connect.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="bg-[#F4F7FA] py-16 md:py-24 px-6 md:px-8 border-t border-gray-200">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[1.5fr_1fr] gap-12 items-start">

          {/* Left Column — Clay Form */}
          <div className="clay-card p-8 md:p-12">
            {isSuccess ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-6 shadow-sm">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-[#1A3C5E] mb-3">Thank you for reaching out!</h3>
                <p className="text-gray-600 text-base max-w-md mx-auto mb-8 leading-relaxed">
                  Your message has been saved. Our team will review your inquiry and respond within one business day.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="clay-btn clay-btn-primary px-8 py-3 text-sm"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="font-bold text-[#1A3C5E] text-2xl mb-1">Send a Direct Message</h3>
                  <p className="text-xs text-gray-500 mb-6">Fill in the details below to connect with Edcomrade leadership.</p>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-700 block uppercase tracking-wider">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="E.g. Solomon Ayisi"
                    className="w-full clay-input px-4 py-3 text-sm text-gray-800"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-700 block uppercase tracking-wider">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="solomon@example.com"
                      className="w-full clay-input px-4 py-3 text-sm text-gray-800"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-700 block uppercase tracking-wider">Phone Number (WhatsApp)</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+233 55 528 4923"
                      className="w-full clay-input px-4 py-3 text-sm text-gray-800"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-700 block uppercase tracking-wider">I am a... *</label>
                  <select
                    name="role"
                    required
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full clay-input px-4 py-3 text-sm text-gray-800 bg-white"
                  >
                    <option value="proprietor">School Proprietor / Headmaster</option>
                    <option value="parent">Parent or Guardian</option>
                    <option value="student">Student</option>
                    <option value="partner">Partner or Vendor</option>
                    <option value="other">General Inquiry</option>
                  </select>
                </div>

                {role === "proprietor" && (
                  <div className="space-y-2 animate-in fade-in duration-200">
                    <label className="text-xs font-bold text-gray-700 block uppercase tracking-wider">School Name</label>
                    <input
                      type="text"
                      name="schoolName"
                      placeholder="E.g. Greenfield International School"
                      className="w-full clay-input px-4 py-3 text-sm text-gray-800"
                    />
                  </div>
                )}

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-700 block uppercase tracking-wider">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Consultation Request"
                    className="w-full clay-input px-4 py-3 text-sm text-gray-800"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-700 block uppercase tracking-wider">Message *</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us how we can help your school or answer your questions..."
                    className="w-full clay-input px-4 py-3 text-sm text-gray-800 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isPending}
                  className="clay-btn clay-btn-primary w-full py-3.5 text-sm gap-2 font-bold"
                >
                  {isPending ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Column — Info Cards */}
          <div className="space-y-6">
            <div className="clay-card p-8">
              <Label>Direct Channels</Label>
              <h3 className="font-bold text-[#1A3C5E] text-xl mb-6">Contact Information</h3>

              <div className="space-y-6 text-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#2E8BC0]/10 text-[#2E8BC0] flex items-center justify-center flex-shrink-0 shadow-xs">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 font-bold uppercase tracking-wider block">Email Address</span>
                    <a href="mailto:partner@edcomrade.com" className="font-bold text-[#1A3C5E] hover:text-[#2E8BC0] transition-colors text-base">
                      partner@edcomrade.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#2E8BC0]/10 text-[#2E8BC0] flex items-center justify-center flex-shrink-0 shadow-xs">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 font-bold uppercase tracking-wider block">WhatsApp & Call</span>
                    <a href="https://wa.me/233555284923" target="_blank" rel="noopener noreferrer" className="font-bold text-[#1A3C5E] hover:text-[#2E8BC0] transition-colors text-base">
                      +233 55 528 4923
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#2E8BC0]/10 text-[#2E8BC0] flex items-center justify-center flex-shrink-0 shadow-xs">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 font-bold uppercase tracking-wider block">Office Address</span>
                    <p className="font-bold text-[#1A3C5E] text-base leading-snug">
                      New Legon, Accra<br />
                      Ghana, West Africa
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="clay-card p-8 bg-[#1A3C5E] text-white">
              <span className="clay-badge bg-white/10 text-white border border-white/20 mb-3">
                Quick Response Guarantee
              </span>
              <h4 className="font-bold text-white text-lg mb-2">School Onboarding Consultation</h4>
              <p className="text-white/70 text-xs leading-relaxed">
                School heads requesting a demo or Pioneers&apos; Software setup receive priority phone callback within 4 hours during business days.
              </p>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
