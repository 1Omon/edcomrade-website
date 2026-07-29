"use client";

import { useState } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { submitContactAction } from "@/app/actions";
import { Mail, Phone, MapPin, Send, CheckCircle2, Sparkles, ShieldCheck } from "lucide-react";

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
    <main style={{ backgroundColor: "var(--color-paper)" }}>
      <Navigation />

      {/* Hero Header */}
      <section style={{ paddingTop: "150px", paddingBottom: "60px", backgroundColor: "var(--color-paper)" }}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 space-y-6">
          <span className="mag-badge-cyan">
            <Sparkles className="w-3.5 h-3.5" />
            <span>GET IN TOUCH</span>
          </span>
          <h1 className="font-serif text-5xl sm:text-6xl font-bold text-[#1A3C5E] leading-tight max-w-4xl">
            Let&apos;s start a conversation.
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl leading-relaxed">
            Whether you are a school proprietor looking to modernise operations, a parent with questions, or an educational partner, our team is ready to connect.
          </p>
        </div>
      </section>

      {/* Main Form & Info Grid */}
      <section style={{ padding: "80px 0", backgroundColor: "#EEF4F8" }}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Form Card */}
            <div className="lg:col-span-7 mag-card p-8 sm:p-10">
              {isSuccess ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#E8F5EE] text-[#1B5E20] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-3xl font-bold text-[#1A3C5E]">Thank you for reaching out!</h3>
                  <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                    Your message has been received by Edcomrade leadership. We respond within one business day.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="px-6 py-3 rounded-lg bg-[#1A3C5E] text-white font-bold text-sm hover:bg-[#2E8BC0] transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h2 className="font-serif text-3xl font-bold text-[#1A3C5E]">Send a Message</h2>

                  <div className="space-y-2">
                    <label className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider block">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="E.g. Solomon Ayisi"
                      className="w-full bg-[#F8FAFC] border border-gray-200 rounded-lg px-4 py-3 text-sm font-sans text-slate-800 focus:outline-none focus:border-[#2E8BC0] transition-colors"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider block">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="solomon@example.com"
                        className="w-full bg-[#F8FAFC] border border-gray-200 rounded-lg px-4 py-3 text-sm font-sans text-slate-800 focus:outline-none focus:border-[#2E8BC0] transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider block">Phone / WhatsApp</label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="+233 55 528 4923"
                        className="w-full bg-[#F8FAFC] border border-gray-200 rounded-lg px-4 py-3 text-sm font-sans text-slate-800 focus:outline-none focus:border-[#2E8BC0] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider block">I am a... *</label>
                    <select
                      name="role"
                      required
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      className="w-full bg-[#F8FAFC] border border-gray-200 rounded-lg px-4 py-3 text-sm font-sans text-slate-800 focus:outline-none focus:border-[#2E8BC0] transition-colors cursor-pointer"
                    >
                      <option value="proprietor">School Proprietor / Headmaster</option>
                      <option value="parent">Parent or Guardian</option>
                      <option value="student">Student</option>
                      <option value="partner">Partner or Vendor</option>
                      <option value="other">General Inquiry</option>
                    </select>
                  </div>

                  {role === "proprietor" && (
                    <div className="space-y-2">
                      <label className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider block">School Name</label>
                      <input
                        type="text"
                        name="schoolName"
                        placeholder="E.g. Greenfield International School"
                        className="w-full bg-[#F8FAFC] border border-gray-200 rounded-lg px-4 py-3 text-sm font-sans text-slate-800 focus:outline-none focus:border-[#2E8BC0] transition-colors"
                      />
                    </div>
                  )}

                  <div className="space-y-2">
                    <label className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider block">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="School Onboarding / Custom App Demo"
                      className="w-full bg-[#F8FAFC] border border-gray-200 rounded-lg px-4 py-3 text-sm font-sans text-slate-800 focus:outline-none focus:border-[#2E8BC0] transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider block">Message *</label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell us how we can help your school or answer your questions..."
                      className="w-full bg-[#F8FAFC] border border-gray-200 rounded-lg px-4 py-3 text-sm font-sans text-slate-800 focus:outline-none focus:border-[#2E8BC0] transition-colors resize-y"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isPending}
                    className="w-full py-4 rounded-lg bg-[#1A3C5E] hover:bg-[#2E8BC0] text-white font-bold text-base shadow-md transition-colors flex items-center justify-center gap-2"
                  >
                    <span>{isPending ? "Submitting..." : "Send Message"}</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

            {/* Direct Info Cards */}
            <div className="lg:col-span-5 space-y-6">
              <div className="mag-card p-8 space-y-6">
                <span className="mag-badge-cyan">DIRECT CHANNELS</span>
                <h3 className="font-serif text-2xl font-bold text-[#1A3C5E]">Contact Information</h3>

                <div className="space-y-6 text-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#2E8BC0]/10 text-[#2E8BC0] flex items-center justify-center flex-shrink-0 font-bold">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 font-mono font-bold uppercase block">Email Address</span>
                      <a href="mailto:partner@edcomrade.com" className="font-bold text-[#1A3C5E] hover:text-[#2E8BC0] transition-colors text-base">
                        partner@edcomrade.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#2E8BC0]/10 text-[#2E8BC0] flex items-center justify-center flex-shrink-0 font-bold">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 font-mono font-bold uppercase block">WhatsApp & Direct Line</span>
                      <a href="https://wa.me/233555284923" target="_blank" rel="noopener noreferrer" className="font-bold text-[#1A3C5E] hover:text-[#2E8BC0] transition-colors text-base">
                        +233 55 528 4923
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#2E8BC0]/10 text-[#2E8BC0] flex items-center justify-center flex-shrink-0 font-bold">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 font-mono font-bold uppercase block">Office Address</span>
                      <p className="font-bold text-[#1A3C5E] text-base leading-snug">
                        New Legon, Accra<br />
                        Ghana, West Africa
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#0F2537] text-white p-8 rounded-xl space-y-3">
                <span className="mag-badge-gold">PRIORITY CALLBACK</span>
                <h4 className="font-serif text-xl font-bold text-white">School Onboarding Priority</h4>
                <p className="text-white/70 text-xs leading-relaxed">
                  School heads requesting a demo or Pioneers&apos; ERP setup receive priority phone callback within 4 hours during business days.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
