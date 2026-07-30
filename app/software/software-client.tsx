"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import {
  CheckCircle,
  ArrowRight,
  Calculator,
  Check,
  Plus,
  HelpCircle,
  Building2,
  Sparkles,
  Shield,
  Layers,
  Send,
  X,
  Smartphone,
  Server,
  Globe,
  Award,
} from "lucide-react";

// Module definition matching offerings.md
interface ModuleDef {
  id: string;
  name: string;
  badge?: string;
  isFree?: boolean;
  isCustomOnly?: boolean;
  category: string;
  description: string;
  rates: {
    under100: number;
    t100_299: number;
    t300_499: number;
    t500plus: number;
  };
  appliesTo: "total" | "boarders" | "transport";
}

const MODULES: ModuleDef[] = [
  {
    id: "core",
    name: "Module 0 — School Administration",
    badge: "INCLUDED FREE",
    isFree: true,
    category: "Core Operations",
    description:
      "Admissions, Student Information System (SIS), Health Records, Timetabling, Staff Circulars, Basic Fee Billing, ParentAide & Schoolpedia Profile.",
    rates: { under100: 0, t100_299: 0, t300_499: 0, t500plus: 0 },
    appliesTo: "total",
  },
  {
    id: "classroom",
    name: "Module 1 — Classroom & Exam Management",
    category: "Academic",
    description:
      "Per-period attendance, Lesson Notes & Assignments, Continuous Assessment, Report Cards (PDF), Early Warning & AI Narrative Report Card Generator.",
    rates: { under100: 3.0, t100_299: 2.5, t300_499: 2.2, t500plus: 2.0 },
    appliesTo: "total",
  },
  {
    id: "hostel",
    name: "Module 2 — Hostel & Boarding Management",
    category: "Residential",
    description:
      "Hostel room allocation, Boarding fee billing, Exeat approval workflow via ParentAide, Welfare logs & Duty master roster.",
    rates: { under100: 4.0, t100_299: 3.5, t300_499: 3.2, t500plus: 3.0 },
    appliesTo: "boarders",
  },
  {
    id: "hr",
    name: "Module 3 — HR Management",
    category: "Administration",
    description:
      "Staff directory, Payroll computation (Ghana tax & SSNIT), Monthly PDF payslips, Leave application workflow & Staff Mobile App access.",
    rates: { under100: 3.0, t100_299: 2.5, t300_499: 2.2, t500plus: 2.0 },
    appliesTo: "total",
  },
  {
    id: "finance",
    name: "Module 4 — Finance Management",
    category: "Finance",
    description:
      "Double-entry bookkeeping, Custom chart of accounts, Expense recording, Budgeting, Bank reconciliation & GRA-compatible financial reports.",
    rates: { under100: 4.0, t100_299: 3.5, t300_499: 3.2, t500plus: 3.0 },
    appliesTo: "total",
  },
  {
    id: "alumni",
    name: "Module 5 — Alumni Management",
    category: "Community",
    description:
      "Alumni directory, Broadcast announcements to cohorts, Reunion event management & Donation tracking.",
    rates: { under100: 2.0, t100_299: 1.5, t300_499: 1.2, t500plus: 1.0 },
    appliesTo: "total",
  },
  {
    id: "transport",
    name: "Module 6 — Transportation & Safety",
    category: "Safety & Logistics",
    description:
      "Bus route management, Driver QR/Code pickup authorization, Real-time GPS tracking for parents in ParentAide & Missing child alerts.",
    rates: { under100: 3.0, t100_299: 2.5, t300_499: 2.2, t500plus: 2.0 },
    appliesTo: "transport",
  },
  {
    id: "ecommerce",
    name: "Module 7 — E-Commerce & Inventory",
    category: "Store & Inventory",
    description:
      "School asset registry, Consumable inventory tracking, School store creation, Parent orders via ParentAide Wallet & Smart Procurement AI suggestions.",
    rates: { under100: 2.0, t100_299: 2.0, t300_499: 2.0, t500plus: 2.0 },
    appliesTo: "total",
  },
];

export default function SoftwareClient() {
  // Calculator state
  const [studentCount, setStudentCount] = useState<number>(300);
  const [boarderCount, setBoarderCount] = useState<number>(50);
  const [transportCount, setTransportCount] = useState<number>(60);
  const [selectedModuleIds, setSelectedModuleIds] = useState<string[]>([
    "core",
    "classroom",
    "finance",
  ]);
  const [isFiveYearLock, setIsFiveYearLock] = useState<boolean>(false);

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    schoolName: "",
    contactName: "",
    email: "",
    phone: "",
    city: "",
  });

  // Calculate pricing tier key
  const tierKey = useMemo(() => {
    if (studentCount < 100) return "under100";
    if (studentCount < 300) return "t100_299";
    if (studentCount < 500) return "t300_499";
    return "t500plus";
  }, [studentCount]);

  const tierLabel = useMemo(() => {
    if (studentCount < 100) return "Under 100 students";
    if (studentCount < 300) return "100–299 students";
    if (studentCount < 500) return "300–499 students";
    return "500+ students";
  }, [studentCount]);

  // Calculate itemized costs
  const moduleCosts = useMemo(() => {
    return selectedModuleIds.map((id) => {
      const mod = MODULES.find((m) => m.id === id)!;
      if (mod.isFree) return { ...mod, rate: 0, applicableStudents: studentCount, cost: 0 };

      let count = studentCount;
      if (mod.appliesTo === "boarders") count = Math.min(boarderCount, studentCount);
      if (mod.appliesTo === "transport") count = Math.min(transportCount, studentCount);

      const rate = mod.rates[tierKey];
      const cost = rate * count;
      return { ...mod, rate, applicableStudents: count, cost };
    });
  }, [selectedModuleIds, tierKey, studentCount, boarderCount, transportCount]);

  const paidModulesCount = useMemo(() => {
    return moduleCosts.filter((m) => !m.isFree).length;
  }, [moduleCosts]);

  const rawCostPerTerm = useMemo(() => {
    return moduleCosts.reduce((sum, m) => sum + m.cost, 0);
  }, [moduleCosts]);

  const hasBundleDiscount = paidModulesCount >= 3;
  const discountAmount = hasBundleDiscount ? rawCostPerTerm * 0.15 : 0;
  const finalCostPerTerm = rawCostPerTerm - discountAmount;
  const annualCost = finalCostPerTerm * 3;

  // Toggle module selection
  const toggleModule = (id: string) => {
    if (id === "core") return; // Core is permanent
    setSelectedModuleIds((prev) =>
      prev.includes(id) ? prev.filter((mId) => mId !== id) : [...prev, id]
    );
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/deployments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          studentCount,
          boarderCount,
          transportCount,
          selectedModules: selectedModuleIds,
          isFiveYearLock,
          hasBundleDiscount,
          costPerTermGHS: finalCostPerTerm,
          annualCostGHS: annualCost,
        }),
      });

      if (res.ok) {
        setFormSubmitted(true);
      } else {
        alert("Submission failed. Please check details and try again.");
      }
    } catch (err) {
      console.error(err);
      alert("An unexpected error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main style={{ background: "var(--paper)" }}>
      <Navigation />

      {/* Hero */}
      <section
        style={{
          paddingTop: "140px",
          paddingBottom: "80px",
          background:
            "linear-gradient(135deg, var(--navy-dark) 0%, var(--navy) 100%)",
          color: "#fff",
        }}
      >
        <div
          className="container"
          style={{ textAlign: "center", maxWidth: "860px" }}
        >
          <span className="badge badge-green" style={{ marginBottom: "20px" }}>
            School Management Software — Free Core
          </span>
          <h1
            style={{
              fontSize: "clamp(36px, 5vw, 64px)",
              fontWeight: 700,
              lineHeight: 1.1,
              marginBottom: "20px",
              fontFamily: "var(--serif)",
            }}
          >
            Modular School Software. <br /> Pay Only For What You Need.
          </h1>
          <p
            style={{
              fontSize: "18px",
              color: "rgba(255,255,255,0.75)",
              lineHeight: 1.6,
              marginBottom: "36px",
            }}
          >
            Every school gets our School Administration Module 100% free, permanently. Activate specialized modules as your school grows.
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "14px",
              flexWrap: "wrap",
            }}
          >
            <a href="#simulator" className="btn-white">
              <Calculator size={16} /> Open Deployment Simulator
            </a>
            <a
              href="#comparison"
              className="btn-ghost"
              style={{ color: "#fff", borderColor: "rgba(255,255,255,0.3)" }}
            >
              Pioneers vs. Custom App
            </a>
          </div>
        </div>
      </section>

      {/* Simulator Section */}
      <section id="simulator" style={{ padding: "var(--section) 0", background: "#fff" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "640px", margin: "0 auto 48px" }}>
            <span className="badge badge-blue" style={{ marginBottom: "12px" }}>
              Interactive Pricing Tool
            </span>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 700, color: "var(--navy)" }}>
              Deployment Cost Simulator
            </h2>
            <p style={{ fontSize: "16px", color: "var(--ink-mid)" }}>
              Select your student numbers and add-on modules below to simulate your school&apos;s termly invoice.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "36px", alignItems: "start" }}>
            
            {/* Left Column: Inputs & Modules */}
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              
              {/* Enrolment Sliders */}
              <div className="card" style={{ padding: "28px", borderTop: "4px solid var(--cyan)" }}>
                <h3 style={{ fontSize: "18px", fontWeight: 700, color: "var(--navy)", marginBottom: "20px", display: "flex", alignItems: "center", gap: "8px" }}>
                  <Building2 size={20} color="var(--cyan)" /> 1. School Enrolment Details
                </h3>

                {/* Total Students */}
                <div style={{ marginBottom: "20px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                    <label style={{ fontWeight: 600, fontSize: "14px", color: "var(--navy)" }}>Total Enrolled Students</label>
                    <span style={{ fontWeight: 700, color: "var(--cyan)" }}>{studentCount} Students</span>
                  </div>
                  <input
                    type="range"
                    min="30"
                    max="1200"
                    step="10"
                    value={studentCount}
                    onChange={(e) => setStudentCount(Number(e.target.value))}
                    style={{ width: "100%", accentColor: "var(--cyan)" }}
                  />
                  <div style={{ fontSize: "12px", color: "var(--ink-mid)", marginTop: "4px" }}>
                    Active Tier: <strong style={{ color: "var(--navy)" }}>{tierLabel}</strong>
                  </div>
                </div>

                {/* Boarders count if Hostel active */}
                {selectedModuleIds.includes("hostel") && (
                  <div style={{ marginBottom: "20px", paddingTop: "16px", borderTop: "1px solid var(--rule)" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                      <label style={{ fontWeight: 600, fontSize: "14px", color: "var(--navy)" }}>Boarding Students</label>
                      <span style={{ fontWeight: 700, color: "var(--gold)" }}>{boarderCount} Boarders</span>
                    </div>
                    <input
                      type="range"
                      min="5"
                      max={studentCount}
                      step="5"
                      value={boarderCount}
                      onChange={(e) => setBoarderCount(Number(e.target.value))}
                      style={{ width: "100%", accentColor: "var(--gold)" }}
                    />
                  </div>
                )}

                {/* Transport count if Transport active */}
                {selectedModuleIds.includes("transport") && (
                  <div style={{ paddingTop: "16px", borderTop: "1px solid var(--rule)" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                      <label style={{ fontWeight: 600, fontSize: "14px", color: "var(--navy)" }}>Bus Transport Students</label>
                      <span style={{ fontWeight: 700, color: "var(--green-mid)" }}>{transportCount} Students</span>
                    </div>
                    <input
                      type="range"
                      min="5"
                      max={studentCount}
                      step="5"
                      value={transportCount}
                      onChange={(e) => setTransportCount(Number(e.target.value))}
                      style={{ width: "100%", accentColor: "var(--green-mid)" }}
                    />
                  </div>
                )}
              </div>

              {/* Module Selection List */}
              <div className="card" style={{ padding: "28px" }}>
                <h3 style={{ fontSize: "18px", fontWeight: 700, color: "var(--navy)", marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
                  <Layers size={20} color="var(--navy)" /> 2. Select Platform Modules
                </h3>

                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {MODULES.map((mod) => {
                    const isSelected = selectedModuleIds.includes(mod.id);
                    return (
                      <div
                        key={mod.id}
                        onClick={() => toggleModule(mod.id)}
                        style={{
                          padding: "16px",
                          borderRadius: "12px",
                          border: isSelected ? "2px solid var(--cyan)" : "1px solid var(--rule)",
                          background: isSelected ? "var(--paper-tint)" : "#fff",
                          cursor: mod.isFree ? "default" : "pointer",
                          transition: "all 0.2s ease",
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "4px" }}>
                          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                            <div
                              style={{
                                width: "20px",
                                height: "20px",
                                borderRadius: "4px",
                                border: isSelected ? "none" : "2px solid var(--ink-mid)",
                                background: isSelected ? (mod.isFree ? "var(--green-mid)" : "var(--cyan)") : "transparent",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: "#fff",
                              }}
                            >
                              {isSelected && <Check size={14} strokeWidth={3} />}
                            </div>
                            <span style={{ fontWeight: 700, fontSize: "15px", color: "var(--navy)" }}>{mod.name}</span>
                          </div>

                          {mod.isFree ? (
                            <span className="badge badge-green" style={{ fontSize: "11px" }}>FREE ALWAYS</span>
                          ) : (
                            <span style={{ fontSize: "13px", fontWeight: 700, color: "var(--navy)" }}>
                              GHS {mod.rates[tierKey].toFixed(2)} <span style={{ fontSize: "11px", color: "var(--ink-mid)", fontWeight: 400 }}>/student/term</span>
                            </span>
                          )}
                        </div>
                        <p style={{ fontSize: "13px", color: "var(--ink-mid)", paddingLeft: "30px", margin: 0 }}>
                          {mod.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Right Column: Live Calculation Summary Card */}
            <div style={{ position: "sticky", top: "120px" }}>
              <div
                className="card"
                style={{
                  padding: "32px",
                  background: "linear-gradient(145deg, var(--navy-dark) 0%, var(--navy) 100%)",
                  color: "#fff",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                  <span className="badge badge-gold">ESTIMATED INVOICE</span>
                  <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.7)" }}>3 Academic Terms / Year</span>
                </div>

                {/* Cost Per Term Big Display */}
                <div style={{ marginBottom: "24px" }}>
                  <div style={{ fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.08em", color: "rgba(255,255,255,0.6)" }}>
                    Cost Per Term
                  </div>
                  <div style={{ fontSize: "44px", fontWeight: 700, fontFamily: "var(--serif)", color: "#fff" }}>
                    GHS {finalCostPerTerm.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </div>
                  <div style={{ fontSize: "14px", color: "var(--gold)" }}>
                    Annual total: GHS {annualCost.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </div>
                </div>

                {/* Applied Discounts */}
                <div style={{ padding: "16px", borderRadius: "8px", background: "rgba(255,255,255,0.08)", marginBottom: "24px" }}>
                  {hasBundleDiscount ? (
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#4ade80", fontSize: "13px", fontWeight: 600 }}>
                      <Sparkles size={16} /> 15% Bundle Discount Applied ({paidModulesCount} paid modules active)
                    </div>
                  ) : (
                    <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.7)" }}>
                      💡 Tip: Activate 3+ paid modules to unlock <strong>15% bundle discount</strong> on your invoice.
                    </div>
                  )}

                  {/* 5-Year Lock Toggle */}
                  <div style={{ marginTop: "12px", paddingTop: "12px", borderTop: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div>
                      <div style={{ fontSize: "13px", fontWeight: 600, color: "#fff" }}>5-Year Rate Lock-In</div>
                      <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.6)" }}>Freeze today&apos;s rates for 5 years</div>
                    </div>
                    <input
                      type="checkbox"
                      checked={isFiveYearLock}
                      onChange={(e) => setIsFiveYearLock(e.target.checked)}
                      style={{ width: "20px", height: "20px", accentColor: "var(--gold)" }}
                    />
                  </div>
                </div>

                {/* Module breakdown list */}
                <div style={{ marginBottom: "28px" }}>
                  <div style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "rgba(255,255,255,0.5)", marginBottom: "12px" }}>
                    Selected Modules Breakdown ({moduleCosts.length})
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "13px" }}>
                    {moduleCosts.map((m) => (
                      <div key={m.id} style={{ display: "flex", justifyContent: "space-between", color: "rgba(255,255,255,0.85)" }}>
                        <span>{m.name.split("—")[1] || m.name}</span>
                        <span style={{ fontWeight: 600, color: m.isFree ? "#4ade80" : "#fff" }}>
                          {m.isFree ? "Free" : `GHS ${m.cost.toFixed(2)}`}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Forward Selection CTA */}
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="btn-white"
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  <Send size={16} /> Send Deployment Request
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Side-by-Side Comparison Section */}
      <section id="comparison" style={{ padding: "var(--section) 0", background: "var(--paper-tint)" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 60px" }}>
            <p className="eyebrow" style={{ marginBottom: "12px" }}>Institutional Choice</p>
            <h2 style={{ fontSize: "clamp(30px, 4vw, 44px)", fontWeight: 700, color: "var(--navy)" }}>
              Pioneers&apos; ERP vs. Custom App
            </h2>
            <p style={{ fontSize: "16px", color: "var(--ink-mid)" }}>
              Which offering aligns best with your school&apos;s size, identity, and infrastructure requirements?
            </p>
          </div>

          <div style={{ overflowX: "auto" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "separate",
                borderSpacing: 0,
                background: "#fff",
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
              }}
            >
              <thead>
                <tr style={{ background: "var(--navy-dark)", color: "#fff" }}>
                  <th style={{ padding: "20px 24px", textAlign: "left", fontSize: "15px" }}>Key Feature</th>
                  <th style={{ padding: "20px 24px", textAlign: "left", fontSize: "15px", width: "40%" }}>
                    Pioneers&apos; ERP (Cloud Platform)
                  </th>
                  <th style={{ padding: "20px 24px", textAlign: "left", fontSize: "15px", width: "40%", background: "var(--navy)" }}>
                    Custom Institutional App
                  </th>
                </tr>
              </thead>
              <tbody style={{ fontSize: "14px", color: "var(--ink)" }}>
                {[
                  {
                    feature: "Target Institution",
                    pioneers: "Private basic schools, SHS, and academies digitizing for the first time.",
                    custom: "Established private institutions, international schools & multi-campus chains.",
                  },
                  {
                    feature: "Hosting & Domain",
                    pioneers: "Shared cloud — pioneers.edcomrade.com/[school-id]",
                    custom: "Dedicated isolated cloud server on your domain (e.g. app.school.edu.gh)",
                  },
                  {
                    feature: "Branding & Parent App",
                    pioneers: "Standardized Edcomrade interface & ParentAide mobile app",
                    custom: "Fully custom branded interface & dedicated school ParentAide app",
                  },
                  {
                    feature: "Core Administration",
                    pioneers: "100% Free permanent School Administration Module",
                    custom: "Bespoke administrative workflows built to exact specifications",
                  },
                  {
                    feature: "Deployment Time",
                    pioneers: "Fast setup — live in 2 to 4 weeks",
                    custom: "Complete custom software development & on-site staff training (~3 months)",
                  },
                  {
                    feature: "Pricing Model",
                    pioneers: "Free Core + per-student per-term add-on modules (GHS 1–4/student)",
                    custom: "Institutional Rent-to-Own License (from GHS 30,000) + annual maintenance",
                  },
                  {
                    feature: "Website & LMS",
                    pioneers: "Verified Schoolpedia Public Profile included free",
                    custom: "Cinematic, custom-built school website & optional LMS integration included",
                  },
                ].map((row, idx) => (
                  <tr key={row.feature} style={{ background: idx % 2 === 0 ? "#fff" : "var(--paper-tint)" }}>
                    <td style={{ padding: "18px 24px", fontWeight: 700, color: "var(--navy)" }}>{row.feature}</td>
                    <td style={{ padding: "18px 24px", color: "var(--ink-mid)", lineHeight: 1.5 }}>{row.pioneers}</td>
                    <td style={{ padding: "18px 24px", color: "var(--navy)", fontWeight: 500, lineHeight: 1.5, background: idx % 2 === 0 ? "rgba(26,60,94,0.02)" : "rgba(26,60,94,0.05)" }}>
                      {row.custom}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Footer />

      {/* Deployment Request Modal */}
      {isModalOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0,0,0,0.6)",
            backdropFilter: "blur(4px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
            padding: "20px",
          }}
        >
          <div
            className="card"
            style={{
              maxWidth: "540px",
              width: "100%",
              padding: "36px",
              background: "#fff",
              position: "relative",
              maxHeight: "90vh",
              overflowY: "auto",
            }}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              style={{ position: "absolute", top: "20px", right: "20px", border: "none", background: "none", cursor: "pointer", color: "var(--ink-mid)" }}
            >
              <X size={20} />
            </button>

            {!formSubmitted ? (
              <form onSubmit={handleFormSubmit}>
                <span className="badge badge-blue" style={{ marginBottom: "12px" }}>
                  Official Deployment Request
                </span>
                <h3 style={{ fontSize: "24px", fontWeight: 700, color: "var(--navy)", marginBottom: "8px" }}>
                  Forward Selection to Admin
                </h3>
                <p style={{ fontSize: "14px", color: "var(--ink-mid)", marginBottom: "24px" }}>
                  Your simulated configuration ({paidModulesCount} paid modules · GHS {finalCostPerTerm.toFixed(2)}/term) will be submitted directly to our onboarding team.
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "var(--navy)", marginBottom: "6px" }}>School Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Heritage International Academy"
                      value={formData.schoolName}
                      onChange={(e) => setFormData({ ...formData, schoolName: e.target.value })}
                      style={{ width: "100%", padding: "12px", border: "1px solid var(--rule)", borderRadius: "8px", fontSize: "14px" }}
                    />
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                    <div>
                      <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "var(--navy)", marginBottom: "6px" }}>Contact Person *</label>
                      <input
                        type="text"
                        required
                        placeholder="Headmaster / Proprietor"
                        value={formData.contactName}
                        onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                        style={{ width: "100%", padding: "12px", border: "1px solid var(--rule)", borderRadius: "8px", fontSize: "14px" }}
                      />
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "var(--navy)", marginBottom: "6px" }}>Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="024 XXX XXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        style={{ width: "100%", padding: "12px", border: "1px solid var(--rule)", borderRadius: "8px", fontSize: "14px" }}
                      />
                    </div>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                    <div>
                      <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "var(--navy)", marginBottom: "6px" }}>Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="admin@school.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        style={{ width: "100%", padding: "12px", border: "1px solid var(--rule)", borderRadius: "8px", fontSize: "14px" }}
                      />
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "var(--navy)", marginBottom: "6px" }}>City / Region</label>
                      <input
                        type="text"
                        placeholder="e.g. Accra"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        style={{ width: "100%", padding: "12px", border: "1px solid var(--rule)", borderRadius: "8px", fontSize: "14px" }}
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary"
                    style={{ width: "100%", justifyContent: "center", marginTop: "12px" }}
                  >
                    {isSubmitting ? "Submitting Request..." : "Submit Deployment Request"} <ArrowRight size={16} />
                  </button>
                </div>
              </form>
            ) : (
              <div style={{ textAlign: "center", padding: "20px 0" }}>
                <CheckCircle size={48} color="var(--green-mid)" style={{ margin: "0 auto 16px" }} />
                <h3 style={{ fontSize: "24px", fontWeight: 700, color: "var(--navy)", marginBottom: "8px" }}>
                  Request Received!
                </h3>
                <p style={{ fontSize: "15px", color: "var(--ink-mid)", marginBottom: "24px", lineHeight: 1.6 }}>
                  Thank you. Your module configuration has been sent to the Edcomrade platform admin. Our onboarding team will contact you within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setIsModalOpen(false);
                    setFormSubmitted(false);
                  }}
                  className="btn-primary"
                >
                  Done
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
