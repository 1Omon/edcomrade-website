"use client";

import { useState } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { submitContactAction } from "@/app/actions";

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

  const inputStyle: React.CSSProperties = {
    width: "100%", border: "1px solid var(--color-rule)", borderRadius: "3px",
    padding: "10px 14px", fontSize: "var(--text-base)", fontFamily: "var(--font-sans)",
    color: "var(--color-ink)", backgroundColor: "var(--color-paper)", outline: "none",
    boxSizing: "border-box",
  };

  const labelStyle: React.CSSProperties = {
    fontSize: "var(--text-xs)", fontWeight: 600, letterSpacing: "0.08em",
    textTransform: "uppercase", color: "var(--color-ink-faint)",
    display: "block", marginBottom: "6px",
  };

  return (
    <main style={{ backgroundColor: "var(--color-paper)" }}>
      <Navigation />

      {/* Hero */}
      <section style={{ paddingTop: "140px", paddingBottom: "60px", backgroundColor: "var(--color-paper)" }}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div style={{ borderTop: "1px solid var(--color-rule)", paddingTop: "16px", marginBottom: "32px" }}>
            <span style={{ fontSize: "var(--text-xs)", letterSpacing: "var(--tracking-wider)", textTransform: "uppercase", color: "var(--color-accent)", fontWeight: 600 }}>
              GET IN TOUCH
            </span>
          </div>
          <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-hero)", fontWeight: 700, lineHeight: 0.95, letterSpacing: "var(--tracking-tight)", color: "var(--color-ink)", maxWidth: "850px", marginBottom: "24px" }}>
            Let&apos;s start a conversation.
          </h1>
          <p style={{ fontSize: "var(--text-lg)", color: "var(--color-ink-muted)", lineHeight: 1.75, maxWidth: "600px" }}>
            Whether you are a school proprietor looking to modernise operations, a parent with questions, or an educational partner, our team is ready to connect.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section style={{ backgroundColor: "var(--color-paper-warm)", padding: "80px 0" }}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            
            {/* Form Column */}
            <div className="lg:col-span-2">
              <div style={{ borderTop: "2px solid var(--color-ink)", paddingTop: "24px" }}>
                {isSuccess ? (
                  <div style={{ padding: "32px 0" }}>
                    <p style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-3xl)", color: "var(--color-ink)", fontWeight: 700, marginBottom: "16px" }}>
                      Thank you for reaching out.
                    </p>
                    <p style={{ fontSize: "var(--text-base)", color: "var(--color-ink-muted)", lineHeight: 1.75, marginBottom: "24px" }}>
                      Your message has been received by Edcomrade leadership. We respond within one business day.
                    </p>
                    <button
                      onClick={() => setIsSuccess(false)}
                      style={{
                        backgroundColor: "var(--color-ink)", color: "#fff",
                        fontSize: "var(--text-sm)", fontWeight: 600, padding: "10px 20px",
                        borderRadius: "3px", border: "none", cursor: "pointer",
                      }}
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-2xl)", fontWeight: 700, color: "var(--color-ink)", marginBottom: "24px" }}>
                      Send a Message
                    </h2>

                    <div>
                      <label style={labelStyle}>Full Name *</label>
                      <input type="text" name="name" required placeholder="E.g. Solomon Ayisi" style={inputStyle} />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label style={labelStyle}>Email Address *</label>
                        <input type="email" name="email" required placeholder="solomon@example.com" style={inputStyle} />
                      </div>
                      <div>
                        <label style={labelStyle}>Phone / WhatsApp</label>
                        <input type="tel" name="phone" placeholder="+233 55 528 4923" style={inputStyle} />
                      </div>
                    </div>

                    <div>
                      <label style={labelStyle}>I am a... *</label>
                      <select
                        name="role"
                        required
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        style={{ ...inputStyle, cursor: "pointer" }}
                      >
                        <option value="proprietor">School Proprietor / Headmaster</option>
                        <option value="parent">Parent or Guardian</option>
                        <option value="student">Student</option>
                        <option value="partner">Partner or Vendor</option>
                        <option value="other">General Enquiry</option>
                      </select>
                    </div>

                    {role === "proprietor" && (
                      <div>
                        <label style={labelStyle}>School Name</label>
                        <input type="text" name="schoolName" placeholder="E.g. Greenfield International School" style={inputStyle} />
                      </div>
                    )}

                    <div>
                      <label style={labelStyle}>Subject</label>
                      <input
                        type="text"
                        name="subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        placeholder="School Onboarding / Custom App Demo"
                        style={inputStyle}
                      />
                    </div>

                    <div>
                      <label style={labelStyle}>Message *</label>
                      <textarea
                        name="message"
                        required
                        rows={6}
                        placeholder="Tell us how we can help your school or answer your questions..."
                        style={{ ...inputStyle, resize: "vertical" }}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isPending}
                      style={{
                        backgroundColor: "var(--color-ink)", color: "#fff",
                        fontSize: "var(--text-sm)", fontWeight: 600, padding: "12px 28px",
                        borderRadius: "3px", cursor: isPending ? "not-allowed" : "pointer",
                        opacity: isPending ? 0.7 : 1, border: "none", letterSpacing: "0.02em",
                      }}
                    >
                      {isPending ? "Submitting..." : "Send Message →"}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Direct Info Column */}
            <div>
              <div style={{ borderTop: "2px solid var(--color-ink)", paddingTop: "24px" }}>
                <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-2xl)", fontWeight: 700, color: "var(--color-ink)", marginBottom: "24px" }}>
                  Direct Channels
                </h2>

                <div className="space-y-6">
                  <div style={{ borderTop: "1px solid var(--color-rule)", paddingTop: "16px" }}>
                    <span style={labelStyle}>EMAIL ADDRESS</span>
                    <a href="mailto:partner@edcomrade.com" style={{ fontFamily: "var(--font-sans)", fontSize: "var(--text-lg)", fontWeight: 600, color: "var(--color-accent)" }}>
                      partner@edcomrade.com
                    </a>
                  </div>

                  <div style={{ borderTop: "1px solid var(--color-rule)", paddingTop: "16px" }}>
                    <span style={labelStyle}>WHATSAPP & PHONE</span>
                    <a href="https://wa.me/233555284923" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "var(--font-sans)", fontSize: "var(--text-lg)", fontWeight: 600, color: "var(--color-ink)" }}>
                      +233 55 528 4923
                    </a>
                  </div>

                  <div style={{ borderTop: "1px solid var(--color-rule)", paddingTop: "16px" }}>
                    <span style={labelStyle}>HEAD OFFICE</span>
                    <p style={{ fontSize: "var(--text-base)", color: "var(--color-ink-muted)", lineHeight: 1.6 }}>
                      New Legon, Accra<br />
                      Ghana, West Africa
                    </p>
                  </div>

                  <div style={{ borderTop: "1px solid var(--color-rule)", paddingTop: "16px", backgroundColor: "var(--color-paper)", padding: "16px", borderRadius: "3px" }}>
                    <span style={{ fontSize: "var(--text-xs)", fontWeight: 700, color: "var(--color-green)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                      PRIORITY CALLBACK
                    </span>
                    <p style={{ fontSize: "var(--text-sm)", color: "var(--color-ink-muted)", marginTop: "6px", lineHeight: 1.6 }}>
                      School heads requesting a demo or Pioneers&apos; Software setup receive a priority callback within 4 hours during business days.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
