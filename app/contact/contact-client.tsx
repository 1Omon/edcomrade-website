"use client";

import { useState } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { submitContactAction } from "@/app/actions";
import { Loader2 } from "lucide-react";

/* ─────────────────────────────────────────────
   Shared Layout Primitives
───────────────────────────────────────────── */
function Label({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="text-[11px] font-semibold uppercase text-[#2E8BC0] mb-2"
      style={{ letterSpacing: "0.12em" }}
    >
      {children}
    </p>
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
      alert("Something went wrong. Please try again.");
    } finally {
      setIsPending(false);
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className="bg-white pt-32 pb-16 md:pt-40 md:pb-24 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h1
            className="font-extrabold text-[#1A3C5E] max-w-4xl"
            style={{
              fontSize: "clamp(56px, 8vw, 96px)",
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
            }}
          >
            Let's start a conversation.
          </h1>
          <p className="text-gray-600 mt-6 max-w-[480px]" style={{ fontSize: 18, lineHeight: 1.7 }}>
            Whether you are a school owner looking to modernise operations, a parent with a question, or a brand wanting to partner with EdMedia, our team is ready to assist.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="bg-white pb-24 md:pb-32 px-6 md:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[1.5fr_1fr] gap-16 items-start">
          
          {/* Left Column — Form */}
          <div>
            {isSuccess ? (
              <div className="bg-[#F0F4F8] rounded-xl p-10 md:p-16 text-center">
                <h3 className="text-[24px] font-bold text-[#1A3C5E] mb-4">Thank you.</h3>
                <p className="text-gray-600 mb-8" style={{ fontSize: 17, lineHeight: 1.7 }}>
                  We will be in touch shortly — usually within one business day.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="bg-[#1A3C5E] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#1E3A52] transition-colors"
                  style={{ fontSize: 15 }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[13px] font-semibold text-gray-700 block">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="E.g. Solomon Ayisi"
                    className="w-full bg-[#F0F4F8] border border-transparent rounded-lg px-4 py-3 text-[15px] focus:bg-white focus:border-[#2E8BC0] outline-none transition-colors"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[13px] font-semibold text-gray-700 block">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="solomon@example.com"
                      className="w-full bg-[#F0F4F8] border border-transparent rounded-lg px-4 py-3 text-[15px] focus:bg-white focus:border-[#2E8BC0] outline-none transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[13px] font-semibold text-gray-700 block">Phone Number (Optional)</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+233 55 528 4923"
                      className="w-full bg-[#F0F4F8] border border-transparent rounded-lg px-4 py-3 text-[15px] focus:bg-white focus:border-[#2E8BC0] outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[13px] font-semibold text-gray-700 block">I am a...</label>
                  <select
                    name="role"
                    required
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full bg-[#F0F4F8] border border-transparent rounded-lg px-4 py-3 text-[15px] focus:bg-white focus:border-[#2E8BC0] outline-none transition-colors appearance-none"
                  >
                    <option value="proprietor">School Proprietor / Head</option>
                    <option value="parent">Parent or Guardian</option>
                    <option value="student">Student</option>
                    <option value="partner">Partner or Vendor</option>
                    <option value="other">Other Enquiry</option>
                  </select>
                </div>

                {role === "proprietor" && (
                  <div className="space-y-2">
                    <label className="text-[13px] font-semibold text-gray-700 block">School Name</label>
                    <input
                      type="text"
                      name="schoolName"
                      placeholder="E.g. Greenfield Academy"
                      className="w-full bg-[#F0F4F8] border border-transparent rounded-lg px-4 py-3 text-[15px] focus:bg-white focus:border-[#2E8BC0] outline-none transition-colors"
                    />
                  </div>
                )}

                <div className="space-y-2">
                  <label className="text-[13px] font-semibold text-gray-700 block">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Consultation Request"
                    className="w-full bg-[#F0F4F8] border border-transparent rounded-lg px-4 py-3 text-[15px] focus:bg-white focus:border-[#2E8BC0] outline-none transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[13px] font-semibold text-gray-700 block">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="How can we help your school or address your question?"
                    className="w-full bg-[#F0F4F8] border border-transparent rounded-lg px-4 py-3 text-[15px] focus:bg-white focus:border-[#2E8BC0] outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isPending}
                  className="w-full bg-[#1A3C5E] text-white py-[14px] rounded-lg font-semibold hover:bg-[#1E3A52] transition-colors flex items-center justify-center gap-2"
                  style={{ fontSize: 15 }}
                >
                  {isPending ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Column — Info */}
          <div>
            <h2 className="font-bold text-[#1A3C5E] mb-8" style={{ fontSize: 24, lineHeight: 1.3 }}>
              Contact Information
            </h2>

            <div className="space-y-8">
              <div>
                <Label>Email</Label>
                <a href="mailto:partner@edcomrade.com" className="font-semibold text-gray-900 hover:text-[#2E8BC0] transition-colors" style={{ fontSize: 17 }}>
                  partner@edcomrade.com
                </a>
              </div>
              <div>
                <Label>WhatsApp & Phone</Label>
                <a href="https://wa.me/233555284923" className="font-semibold text-gray-900 hover:text-[#2E8BC0] transition-colors" style={{ fontSize: 17 }}>
                  +233 55 528 4923
                </a>
              </div>
              <div>
                <Label>Office Address</Label>
                <p className="font-semibold text-gray-900" style={{ fontSize: 17 }}>
                  New Legon, Accra<br />
                  Ghana, West Africa
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
