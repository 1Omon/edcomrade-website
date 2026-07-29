"use client";

import { useState } from "react";

export default function EdmediaClientForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      schoolName: (form.elements.namedItem("schoolName") as HTMLInputElement).value,
      role: (form.elements.namedItem("service") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
      subject: "EdMedia Enquiry",
    };
    try {
      await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      setSubmitted(true);
    } catch {
      /* silent */
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <p style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-2xl)", fontStyle: "italic", color: "var(--color-ink)", lineHeight: 1.4 }}>
        Thank you. We will be in touch within two business days.
      </p>
    );
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
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label style={labelStyle}>Your Name</label>
        <input name="name" required placeholder="Full name" style={inputStyle} />
      </div>
      <div>
        <label style={labelStyle}>Email</label>
        <input name="email" type="email" required placeholder="you@school.edu.gh" style={inputStyle} />
      </div>
      <div>
        <label style={labelStyle}>School Name</label>
        <input name="schoolName" placeholder="Your school's name" style={inputStyle} />
      </div>
      <div>
        <label style={labelStyle}>Service Interested In</label>
        <select name="service" style={{ ...inputStyle, cursor: "pointer" }}>
          <option value="Digital Magazine">Digital Magazine Feature</option>
          <option value="School Coverage">Event & Campus Coverage</option>
          <option value="Brand Consultation">Brand Consultation</option>
          <option value="General">General Enquiry</option>
        </select>
      </div>
      <div>
        <label style={labelStyle}>Message</label>
        <textarea name="message" required rows={5} placeholder="Tell us about your school and what you're looking for..." style={{ ...inputStyle, resize: "vertical" }} />
      </div>
      <button
        type="submit"
        disabled={loading}
        style={{
          backgroundColor: "var(--color-ink)", color: "#fff",
          fontSize: "var(--text-sm)", fontWeight: 600, padding: "10px 24px",
          borderRadius: "3px", cursor: loading ? "not-allowed" : "pointer",
          opacity: loading ? 0.7 : 1, border: "none",
        }}
      >
        {loading ? "Sending..." : "Send Enquiry →"}
      </button>
    </form>
  );
}
