"use client";

import { useState } from "react";
import Image from "next/image";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { submitContactAction } from "@/app/actions";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

interface ContactPageClientProps {
  initialSubject?: string;
}

export default function ContactPageClient({ initialSubject = "" }: ContactPageClientProps) {
  const [role, setRole] = useState<string>("proprietor");
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
    <main style={{ background: "var(--paper)" }}>
      <Navigation />

      {/* Hero */}
      <section style={{ paddingTop: "140px", paddingBottom: "60px", background: "linear-gradient(135deg, var(--navy-dark) 0%, var(--navy) 100%)", color: "#fff" }}>
        <div className="container" style={{ textAlign: "center", maxWidth: "720px" }}>
          <span className="badge badge-blue" style={{ marginBottom: "20px" }}>Contact EdComrade</span>
          <h1 style={{ fontSize: "clamp(36px, 5vw, 60px)", fontWeight: 700, lineHeight: 1.1, marginBottom: "16px" }}>
            Let&apos;s talk about your school.
          </h1>
          <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.75)", lineHeight: 1.6 }}>
            Ready to claim your free school ERP, set up ParentAide, or feature your school on EdMedia? Send us a message below.
          </p>
        </div>
      </section>

      {/* Form Container */}
      <section style={{ padding: "var(--section) 0", background: "var(--paper-tint)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "48px", maxWidth: "1000px", margin: "0 auto" }}>
            
            {/* Form */}
            <div className="card" style={{ padding: "40px" }}>
              {isSuccess ? (
                <div style={{ textAlign: "center", padding: "40px 0" }}>
                  <CheckCircle size={48} color="var(--green-mid)" style={{ margin: "0 auto 16px" }} />
                  <h3 style={{ fontSize: "24px", fontWeight: 700, color: "var(--navy)", marginBottom: "8px" }}>Message received!</h3>
                  <p style={{ fontSize: "14px", color: "var(--ink-mid)", marginBottom: "24px" }}>
                    Our team will reach out to you within one business day.
                  </p>
                  <button onClick={() => setIsSuccess(false)} className="btn-primary">
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  <h2 style={{ fontSize: "24px", fontWeight: 700, color: "var(--navy)" }}>Send a message</h2>

                  <div>
                    <label style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: ".05em", color: "var(--ink-mid)", display: "block", marginBottom: "6px" }}>Full Name *</label>
                    <input type="text" name="name" required placeholder="E.g. Solomon Ayisi" style={{ width: "100%", padding: "12px 16px", borderRadius: "8px", border: "1px solid var(--rule)", fontSize: "14px", background: "var(--paper)" }} />
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                    <div>
                      <label style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: ".05em", color: "var(--ink-mid)", display: "block", marginBottom: "6px" }}>Email Address *</label>
                      <input type="email" name="email" required placeholder="solomon@example.com" style={{ width: "100%", padding: "12px 16px", borderRadius: "8px", border: "1px solid var(--rule)", fontSize: "14px", background: "var(--paper)" }} />
                    </div>
                    <div>
                      <label style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: ".05em", color: "var(--ink-mid)", display: "block", marginBottom: "6px" }}>Phone / WhatsApp</label>
                      <input type="tel" name="phone" placeholder="+233 55 528 4923" style={{ width: "100%", padding: "12px 16px", borderRadius: "8px", border: "1px solid var(--rule)", fontSize: "14px", background: "var(--paper)" }} />
                    </div>
                  </div>

                  <div>
                    <label style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: ".05em", color: "var(--ink-mid)", display: "block", marginBottom: "6px" }}>I am a... *</label>
                    <select name="role" required value={role} onChange={(e) => setRole(e.target.value)} style={{ width: "100%", padding: "12px 16px", borderRadius: "8px", border: "1px solid var(--rule)", fontSize: "14px", background: "var(--paper)" }}>
                      <option value="proprietor">School Proprietor / Headmaster</option>
                      <option value="parent">Parent or Guardian</option>
                      <option value="partner">Sales Partner / Amplifier</option>
                      <option value="other">General Inquiry</option>
                    </select>
                  </div>

                  {role === "proprietor" && (
                    <div>
                      <label style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: ".05em", color: "var(--ink-mid)", display: "block", marginBottom: "6px" }}>School Name</label>
                      <input type="text" name="schoolName" placeholder="E.g. St. Francis Academy" style={{ width: "100%", padding: "12px 16px", borderRadius: "8px", border: "1px solid var(--rule)", fontSize: "14px", background: "var(--paper)" }} />
                    </div>
                  )}

                  <div>
                    <label style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: ".05em", color: "var(--ink-mid)", display: "block", marginBottom: "6px" }}>Subject</label>
                    <input type="text" name="subject" value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Claim Free ERP / Inquiry" style={{ width: "100%", padding: "12px 16px", borderRadius: "8px", border: "1px solid var(--rule)", fontSize: "14px", background: "var(--paper)" }} />
                  </div>

                  <div>
                    <label style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: ".05em", color: "var(--ink-mid)", display: "block", marginBottom: "6px" }}>Message *</label>
                    <textarea name="message" required rows={4} placeholder="How can we help your school?" style={{ width: "100%", padding: "12px 16px", borderRadius: "8px", border: "1px solid var(--rule)", fontSize: "14px", background: "var(--paper)", resize: "vertical" }} />
                  </div>

                  <button type="submit" disabled={isPending} className="btn-primary" style={{ justifyContent: "center" }}>
                    {isPending ? "Submitting..." : "Send Message"} <Send size={16} />
                  </button>
                </form>
              )}
            </div>

            {/* Info */}
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <div className="card" style={{ padding: "32px" }}>
                <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--navy)", marginBottom: "20px" }}>Direct Channels</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "16px", fontSize: "14px", color: "var(--ink-mid)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <Mail size={18} color="var(--cyan)" />
                    <a href="mailto:partner@edcomrade.com" style={{ color: "var(--navy)", fontWeight: 600, textDecoration: "none" }}>partner@edcomrade.com</a>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <Phone size={18} color="var(--cyan)" />
                    <a href="https://wa.me/233555284923" target="_blank" rel="noopener noreferrer" style={{ color: "var(--navy)", fontWeight: 600, textDecoration: "none" }}>+233 55 528 4923</a>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <MapPin size={18} color="var(--cyan)" />
                    <span>New Legon, Accra, Ghana</span>
                  </div>
                </div>
              </div>

              <div style={{ background: "var(--navy-dark)", color: "#fff", padding: "28px", borderRadius: "16px" }}>
                <h4 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "8px" }}>Fast Onboarding</h4>
                <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.7)", lineHeight: 1.6 }}>
                  School heads requesting setup receive a phone callback within 4 hours during business days.
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
