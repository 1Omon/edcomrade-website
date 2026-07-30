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
  Building2,
  Sparkles,
  Layers,
  Send,
  X,
  Sliders,
  Zap,
} from "lucide-react";

// Module definition matching offerings.md
interface ModuleDef {
  id: string;
  name: string;
  badge?: string;
  isFree?: boolean;
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
    badge: "FREE PERMANENTLY",
    isFree: true,
    category: "Core Operations",
    description:
      "Admissions, Student Information System (SIS), Health Records, Timetabling, Staff Circulars, Fee Billing, ParentAide & Schoolpedia Profile.",
    rates: { under100: 0, t100_299: 0, t300_499: 0, t500plus: 0 },
    appliesTo: "total",
  },
  {
    id: "classroom",
    name: "Module 1 — Classroom & Exam Management",
    category: "Academic",
    description:
      "Per-period attendance, Lesson Notes & Assignments, Continuous Assessment, Report Cards (PDF), Early Warning & AI Narrative Report Generator.",
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
  const [isCalcOpen, setIsCalcOpen] = useState<boolean>(false);
  const [studentCount, setStudentCount] = useState<number>(300);
  const [boarderCount, setBoarderCount] = useState<number>(50);
  const [transportCount, setTransportCount] = useState<number>(60);
  const [selectedModuleIds, setSelectedModuleIds] = useState<string[]>([
    "core",
    "classroom",
    "finance",
  ]);
  const [isFiveYearLock, setIsFiveYearLock] = useState<boolean>(false);

  // Modal State for Request
  const [isRequestModalOpen, setIsRequestModalOpen] = useState<boolean>(false);
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
      if (mod.isFree)
        return { ...mod, rate: 0, applicableStudents: studentCount, cost: 0 };

      let count = studentCount;
      if (mod.appliesTo === "boarders")
        count = Math.min(boarderCount, studentCount);
      if (mod.appliesTo === "transport")
        count = Math.min(transportCount, studentCount);

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

  const toggleModule = (id: string) => {
    if (id === "core") return;
    setSelectedModuleIds((prev) =>
      prev.includes(id) ? prev.filter((mId) => mId !== id) : [...prev, id],
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

      {/* Hero — Steve Jobs Style: Pure clarity & high contrast */}
      <section
        style={{
          paddingTop: "150px",
          paddingBottom: "90px",
          background:
            "linear-gradient(135deg, var(--navy-dark) 0%, var(--navy) 100%)",
          color: "#fff",
        }}
      >
        <div
          className="container"
          style={{ textAlign: "center", maxWidth: "860px" }}
        >
          <span className="badge badge-gold" style={{ marginBottom: "24px" }}>
            The Digital School System — Core Administration Free Always
          </span>
          <h1
            style={{
              fontSize: "clamp(38px, 5.5vw, 68px)",
              fontWeight: 700,
              lineHeight: 1.08,
              marginBottom: "24px",
              fontFamily: "var(--serif)",
              letterSpacing: "-0.02em",
            }}
          >
            Digitize Your School Operations
          </h1>
          <p
            style={{
              fontSize: "19px",
              color: "rgba(255,255,255,0.78)",
              lineHeight: 1.6,
              marginBottom: "40px",
              maxWidth: "700px",
              margin: "0 auto 40px",
            }}
          >
            We believe running a school should be simple, elegant, and
            paperless. That is why the Core Administration module is completely
            free for every jurisdiction. Add power tools as your institution
            grows.
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "16px",
              flexWrap: "wrap",
            }}
          >
            <button
              onClick={() => setIsCalcOpen(true)}
              className="btn-white"
              style={{ cursor: "pointer" }}
            >
              <Calculator size={18} /> Launch Deployment Calculator
            </button>
            <Link
              href="/contact?subject=register-school"
              className="btn-primary"
            >
              Register Your School Free <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Mockup Preview Section */}
      <section style={{ padding: "60px 0 var(--section)", background: "#fff" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <div
            className="photo-card"
            style={{
              maxWidth: "980px",
              margin: "0 auto",
              aspectRatio: "16/9",
              boxShadow: "0 24px 64px rgba(26,60,94,0.12)",
              borderRadius: "20px",
              overflow: "hidden",
            }}
          >
            <Image
              src="/billing-page-mockup.png"
              alt="School management dashboard interface preview"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </div>
      </section>

      {/* Core Standard vs Optional Add-ons Overview */}
      <section
        style={{ padding: "var(--section) 0", background: "var(--paper-tint)" }}
      >
        <div className="container">
          <div
            style={{
              textAlign: "center",
              maxWidth: "600px",
              margin: "0 auto 60px",
            }}
          >
            <p className="eyebrow" style={{ marginBottom: "12px" }}>
              Architected for Performance
            </p>
            <h2
              style={{
                fontSize: "clamp(30px, 4vw, 44px)",
                fontWeight: 700,
                color: "var(--navy)",
              }}
            >
              Core Administration is Free. Permanently.
            </h2>
            <p style={{ fontSize: "16px", color: "var(--ink-mid)" }}>
              No trial periods. No expiring credit cards. Everything required to
              run admissions, student profiles, health records, and
              announcements is included out of the box.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "24px",
            }}
          >
            {[
              {
                title: "Core Student & Staff Records",
                desc: "Complete digital database for student profiles, emergency contacts, class allocations, and staff records.",
              },
              {
                title: "Automated Fee Billing & Receipts",
                desc: "Issue term invoices instantly, log mobile money or bank cash payments, and track outstanding balances.",
              },
              {
                title: "Daily Attendance & Timetabling",
                desc: "Real-time class attendance logging, timetable scheduling, and parent notifications.",
              },
              {
                title: "Health & Exeat Management",
                desc: "Log student clinic visits, medical histories, and digital exeat authorization workflow.",
              },
              {
                title: "ParentAide Portal Access",
                desc: "Direct smartphone access for parents to view circulars, attendance, and pay fees digitally.",
              },
              {
                title: "Schoolpedia Public Listing",
                desc: "Verified public profile on Schoolpedia for prospective parent discovery.",
              },
            ].map((f) => (
              <div key={f.title} className="card" style={{ padding: "28px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: "10px",
                  }}
                >
                  <CheckCircle size={18} color="var(--green-mid)" />
                  <h3
                    style={{
                      fontSize: "18px",
                      fontWeight: 700,
                      color: "var(--navy)",
                    }}
                  >
                    {f.title}
                  </h3>
                </div>
                <p
                  style={{
                    fontSize: "14px",
                    color: "var(--ink-mid)",
                    lineHeight: 1.6,
                  }}
                >
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modular Add-on Showcase */}
      <section style={{ padding: "var(--section) 0", background: "#fff" }}>
        <div className="container">
          <div
            style={{
              textAlign: "center",
              maxWidth: "600px",
              margin: "0 auto 60px",
            }}
          >
            <span className="badge badge-gold" style={{ marginBottom: "12px" }}>
              Pay Only For What You Use
            </span>
            <h2
              style={{
                fontSize: "clamp(30px, 4vw, 44px)",
                fontWeight: 700,
                color: "var(--navy)",
              }}
            >
              Specialized Add-on Modules
            </h2>
            <p style={{ fontSize: "16px", color: "var(--ink-mid)" }}>
              Activate advanced features as your school expands. All modules are
              billed per student, per term with no upfront infrastructure cost.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "24px",
            }}
          >
            {MODULES.filter((m) => !m.isFree).map((m) => (
              <div
                key={m.id}
                className="card"
                style={{
                  padding: "28px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "12px",
                    }}
                  >
                    <span className="badge badge-blue">{m.category}</span>
                    <span
                      style={{
                        fontSize: "13px",
                        fontWeight: 700,
                        color: "var(--navy)",
                      }}
                    >
                      From GHS {m.rates.t500plus.toFixed(2)}/term
                    </span>
                  </div>
                  <h3
                    style={{
                      fontSize: "18px",
                      fontWeight: 700,
                      color: "var(--navy)",
                      marginBottom: "8px",
                    }}
                  >
                    {m.name}
                  </h3>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "var(--ink-mid)",
                      lineHeight: 1.6,
                      marginBottom: "20px",
                    }}
                  >
                    {m.description}
                  </p>
                </div>
                <button
                  onClick={() => {
                    setSelectedModuleIds((prev) =>
                      prev.includes(m.id) ? prev : [...prev, m.id],
                    );
                    setIsCalcOpen(true);
                  }}
                  className="btn-ghost"
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    fontSize: "13px",
                    padding: "8px 16px",
                  }}
                >
                  Simulate Price in Calculator
                </button>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "48px" }}>
            <button
              onClick={() => setIsCalcOpen(true)}
              className="btn-primary"
              style={{ display: "inline-flex", gap: "10px" }}
            >
              <Sliders size={18} /> Open Interactive Deployment Calculator
            </button>
          </div>
        </div>
      </section>

      {/* Side-by-Side Comparison Section */}
      <section
        id="comparison"
        style={{ padding: "var(--section) 0", background: "var(--paper-tint)" }}
      >
        <div className="container">
          <div
            style={{
              textAlign: "center",
              maxWidth: "600px",
              margin: "0 auto 60px",
            }}
          >
            <p className="eyebrow" style={{ marginBottom: "12px" }}>
              Deployment Options
            </p>
            <h2
              style={{
                fontSize: "clamp(30px, 4vw, 44px)",
                fontWeight: 700,
                color: "var(--navy)",
              }}
            >
              Pioneers&apos; ERP vs. Custom App
            </h2>
            <p style={{ fontSize: "16px", color: "var(--ink-mid)" }}>
              Choose between our instant-deploy cloud platform or a dedicated,
              custom-branded institutional solution.
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
                  <th
                    style={{
                      padding: "20px 24px",
                      textAlign: "left",
                      fontSize: "15px",
                    }}
                  >
                    Key Feature
                  </th>
                  <th
                    style={{
                      padding: "20px 24px",
                      textAlign: "left",
                      fontSize: "15px",
                      width: "40%",
                    }}
                  >
                    Pioneers&apos; ERP (Cloud Platform)
                  </th>
                  <th
                    style={{
                      padding: "20px 24px",
                      textAlign: "left",
                      fontSize: "15px",
                      width: "40%",
                      background: "var(--navy)",
                    }}
                  >
                    Custom Institutional App
                  </th>
                </tr>
              </thead>
              <tbody style={{ fontSize: "14px", color: "var(--ink)" }}>
                {[
                  {
                    feature: "Target Institution",
                    pioneers:
                      "Private basic schools, SHS, and academies digitizing for the first time.",
                    custom:
                      "Established private institutions, international schools & multi-campus chains.",
                  },
                  {
                    feature: "Hosting & Domain",
                    pioneers: "Shared cloud — pioneers.edcomrade.com",
                    custom:
                      "Dedicated isolated cloud server on your domain (e.g. app.school.edu.gh)",
                  },
                  {
                    feature: "Branding & Parent App",
                    pioneers:
                      "Standardized Edcomrade interface & ParentAide mobile app",
                    custom:
                      "Fully custom branded interface & dedicated school ParentAide app",
                  },
                  {
                    feature: "Core Administration",
                    pioneers:
                      "100% Free permanent School Administration Module",
                    custom:
                      "Bespoke administrative workflows built to exact specifications",
                  },
                  {
                    feature: "Deployment Time",
                    pioneers: "Fast setup — live in 2 to 4 weeks",
                    custom:
                      "Complete custom software development & on-site staff training (~3 months)",
                  },
                  {
                    feature: "Pricing Model",
                    pioneers:
                      "Free Core + per-student per-term add-on modules (GHS 1–4/student)",
                    custom:
                      "Institutional Rent-to-Own License (from GHS 30,000) + annual maintenance",
                  },
                  {
                    feature: "Website & LMS",
                    pioneers:
                      "Verified Schoolpedia Public Profile included free",
                    custom:
                      "Cinematic, custom-built school website & optional LMS integration included",
                  },
                ].map((row, idx) => (
                  <tr
                    key={row.feature}
                    style={{
                      background: idx % 2 === 0 ? "#fff" : "var(--paper-tint)",
                    }}
                  >
                    <td
                      style={{
                        padding: "18px 24px",
                        fontWeight: 700,
                        color: "var(--navy)",
                      }}
                    >
                      {row.feature}
                    </td>
                    <td
                      style={{
                        padding: "18px 24px",
                        color: "var(--ink-mid)",
                        lineHeight: 1.5,
                      }}
                    >
                      {row.pioneers}
                    </td>
                    <td
                      style={{
                        padding: "18px 24px",
                        color: "var(--navy)",
                        fontWeight: 500,
                        lineHeight: 1.5,
                        background:
                          idx % 2 === 0
                            ? "rgba(26,60,94,0.02)"
                            : "rgba(26,60,94,0.05)",
                      }}
                    >
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

      {/* MODAL 1: Interactive Deployment Calculator Popup */}
      {isCalcOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(10,25,41,0.75)",
            backdropFilter: "blur(6px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9990,
            padding: "20px",
          }}
        >
          <div
            className="card"
            style={{
              maxWidth: "960px",
              width: "100%",
              padding: "36px",
              background: "#fff",
              position: "relative",
              maxHeight: "92vh",
              overflowY: "auto",
              boxShadow: "0 24px 60px rgba(0,0,0,0.3)",
              borderRadius: "24px",
            }}
          >
            <button
              onClick={() => setIsCalcOpen(false)}
              style={{
                position: "absolute",
                top: "24px",
                right: "24px",
                border: "none",
                background: "var(--paper-tint)",
                borderRadius: "50%",
                width: "36px",
                height: "36px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: "var(--navy)",
              }}
            >
              <X size={20} />
            </button>

            <div style={{ marginBottom: "28px" }}>
              <span
                className="badge badge-blue"
                style={{ marginBottom: "8px" }}
              >
                Interactive Deployment Tool
              </span>
              <h2
                style={{
                  fontSize: "28px",
                  fontWeight: 700,
                  color: "var(--navy)",
                }}
              >
                Module Price Calculator
              </h2>
              <p style={{ fontSize: "14px", color: "var(--ink-mid)" }}>
                Adjust student counts and select your desired modules to
                calculate your termly invoice.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "32px",
                alignItems: "start",
              }}
            >
              {/* Left Column: Sliders & Module Toggles */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                {/* Enrolment Sliders */}
                <div
                  style={{
                    padding: "20px",
                    borderRadius: "16px",
                    background: "var(--paper-tint)",
                    border: "1px solid var(--rule)",
                  }}
                >
                  <h4
                    style={{
                      fontSize: "15px",
                      fontWeight: 700,
                      color: "var(--navy)",
                      marginBottom: "16px",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <Building2 size={18} color="var(--cyan)" /> Student
                    Enrolment
                  </h4>

                  {/* Total Students */}
                  <div style={{ marginBottom: "16px" }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "6px",
                      }}
                    >
                      <label
                        style={{
                          fontWeight: 600,
                          fontSize: "13px",
                          color: "var(--navy)",
                        }}
                      >
                        Total Enrolled Students
                      </label>
                      <span
                        style={{
                          fontWeight: 700,
                          color: "var(--cyan)",
                          fontSize: "14px",
                        }}
                      >
                        {studentCount} Students
                      </span>
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
                    <div
                      style={{
                        fontSize: "11px",
                        color: "var(--ink-mid)",
                        marginTop: "2px",
                      }}
                    >
                      Pricing Tier:{" "}
                      <strong style={{ color: "var(--navy)" }}>
                        {tierLabel}
                      </strong>
                    </div>
                  </div>

                  {/* Boarders count if Hostel active */}
                  {selectedModuleIds.includes("hostel") && (
                    <div
                      style={{
                        marginBottom: "16px",
                        paddingTop: "12px",
                        borderTop: "1px solid var(--rule)",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          marginBottom: "6px",
                        }}
                      >
                        <label
                          style={{
                            fontWeight: 600,
                            fontSize: "13px",
                            color: "var(--navy)",
                          }}
                        >
                          Boarding Students
                        </label>
                        <span
                          style={{
                            fontWeight: 700,
                            color: "var(--gold)",
                            fontSize: "14px",
                          }}
                        >
                          {boarderCount} Boarders
                        </span>
                      </div>
                      <input
                        type="range"
                        min="5"
                        max={studentCount}
                        step="5"
                        value={boarderCount}
                        onChange={(e) =>
                          setBoarderCount(Number(e.target.value))
                        }
                        style={{ width: "100%", accentColor: "var(--gold)" }}
                      />
                    </div>
                  )}

                  {/* Transport count if Transport active */}
                  {selectedModuleIds.includes("transport") && (
                    <div
                      style={{
                        paddingTop: "12px",
                        borderTop: "1px solid var(--rule)",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          marginBottom: "6px",
                        }}
                      >
                        <label
                          style={{
                            fontWeight: 600,
                            fontSize: "13px",
                            color: "var(--navy)",
                          }}
                        >
                          Bus Transport Students
                        </label>
                        <span
                          style={{
                            fontWeight: 700,
                            color: "var(--green-mid)",
                            fontSize: "14px",
                          }}
                        >
                          {transportCount} Students
                        </span>
                      </div>
                      <input
                        type="range"
                        min="5"
                        max={studentCount}
                        step="5"
                        value={transportCount}
                        onChange={(e) =>
                          setTransportCount(Number(e.target.value))
                        }
                        style={{
                          width: "100%",
                          accentColor: "var(--green-mid)",
                        }}
                      />
                    </div>
                  )}
                </div>

                {/* Module Selection */}
                <div>
                  <h4
                    style={{
                      fontSize: "15px",
                      fontWeight: 700,
                      color: "var(--navy)",
                      marginBottom: "12px",
                    }}
                  >
                    Select Add-on Modules
                  </h4>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                  >
                    {MODULES.map((mod) => {
                      const isSelected = selectedModuleIds.includes(mod.id);
                      return (
                        <div
                          key={mod.id}
                          onClick={() => toggleModule(mod.id)}
                          style={{
                            padding: "12px 14px",
                            borderRadius: "10px",
                            border: isSelected
                              ? "2px solid var(--cyan)"
                              : "1px solid var(--rule)",
                            background: isSelected
                              ? "var(--paper-tint)"
                              : "#fff",
                            cursor: mod.isFree ? "default" : "pointer",
                            transition: "all 0.2s ease",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "8px",
                              }}
                            >
                              <div
                                style={{
                                  width: "18px",
                                  height: "18px",
                                  borderRadius: "4px",
                                  border: isSelected
                                    ? "none"
                                    : "2px solid var(--ink-mid)",
                                  background: isSelected
                                    ? mod.isFree
                                      ? "var(--green-mid)"
                                      : "var(--cyan)"
                                    : "transparent",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  color: "#fff",
                                }}
                              >
                                {isSelected && (
                                  <Check size={12} strokeWidth={3} />
                                )}
                              </div>
                              <span
                                style={{
                                  fontWeight: 600,
                                  fontSize: "14px",
                                  color: "var(--navy)",
                                }}
                              >
                                {mod.name}
                              </span>
                            </div>

                            {mod.isFree ? (
                              <span
                                className="badge badge-green"
                                style={{ fontSize: "10px" }}
                              >
                                FREE
                              </span>
                            ) : (
                              <span
                                style={{
                                  fontSize: "12px",
                                  fontWeight: 700,
                                  color: "var(--navy)",
                                }}
                              >
                                GHS {mod.rates[tierKey].toFixed(2)}/student
                              </span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Right Column: Live Invoice Breakdown */}
              <div>
                <div
                  style={{
                    padding: "28px",
                    background:
                      "linear-gradient(145deg, var(--navy-dark) 0%, var(--navy) 100%)",
                    color: "#fff",
                    borderRadius: "18px",
                    boxShadow: "0 16px 36px rgba(0,0,0,0.18)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "16px",
                    }}
                  >
                    <span className="badge badge-gold">CALCULATED INVOICE</span>
                    <span
                      style={{
                        fontSize: "12px",
                        color: "rgba(255,255,255,0.7)",
                      }}
                    >
                      3 Terms / Year
                    </span>
                  </div>

                  <div style={{ marginBottom: "20px" }}>
                    <div
                      style={{
                        fontSize: "12px",
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        color: "rgba(255,255,255,0.6)",
                      }}
                    >
                      Estimated Cost Per Term
                    </div>
                    <div
                      style={{
                        fontSize: "40px",
                        fontWeight: 700,
                        fontFamily: "var(--serif)",
                        color: "#fff",
                      }}
                    >
                      GHS{" "}
                      {finalCostPerTerm.toLocaleString("en-US", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </div>
                    <div style={{ fontSize: "13px", color: "var(--gold)" }}>
                      Annual total: GHS{" "}
                      {annualCost.toLocaleString("en-US", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </div>
                  </div>

                  {/* Discounts & Lock */}
                  <div
                    style={{
                      padding: "14px",
                      borderRadius: "10px",
                      background: "rgba(255,255,255,0.08)",
                      marginBottom: "20px",
                    }}
                  >
                    {hasBundleDiscount ? (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "6px",
                          color: "#4ade80",
                          fontSize: "12px",
                          fontWeight: 600,
                        }}
                      >
                        <Sparkles size={14} /> 15% Bundle Discount Applied (
                        {paidModulesCount} paid modules)
                      </div>
                    ) : (
                      <div
                        style={{
                          fontSize: "12px",
                          color: "rgba(255,255,255,0.7)",
                        }}
                      >
                        💡 Select 3+ paid modules for{" "}
                        <strong>15% bundle discount</strong>.
                      </div>
                    )}

                    <div
                      style={{
                        marginTop: "10px",
                        paddingTop: "10px",
                        borderTop: "1px solid rgba(255,255,255,0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "12px",
                          fontWeight: 600,
                          color: "#fff",
                        }}
                      >
                        5-Year Rate Lock-In
                      </span>
                      <input
                        type="checkbox"
                        checked={isFiveYearLock}
                        onChange={(e) => setIsFiveYearLock(e.target.checked)}
                        style={{
                          width: "18px",
                          height: "18px",
                          accentColor: "var(--gold)",
                        }}
                      />
                    </div>
                  </div>

                  {/* Forward Request Button */}
                  <button
                    onClick={() => {
                      setIsCalcOpen(false);
                      setIsRequestModalOpen(true);
                    }}
                    className="btn-white"
                    style={{ width: "100%", justifyContent: "center" }}
                  >
                    <Send size={16} /> Submit Deployment Request
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 2: Official Deployment Request Submission Form */}
      {isRequestModalOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0,0,0,0.65)",
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
              borderRadius: "20px",
            }}
          >
            <button
              onClick={() => setIsRequestModalOpen(false)}
              style={{
                position: "absolute",
                top: "20px",
                right: "20px",
                border: "none",
                background: "none",
                cursor: "pointer",
                color: "var(--ink-mid)",
              }}
            >
              <X size={20} />
            </button>

            {!formSubmitted ? (
              <form onSubmit={handleFormSubmit}>
                <span
                  className="badge badge-blue"
                  style={{ marginBottom: "12px" }}
                >
                  Official Deployment Request
                </span>
                <h3
                  style={{
                    fontSize: "24px",
                    fontWeight: 700,
                    color: "var(--navy)",
                    marginBottom: "8px",
                  }}
                >
                  Forward Selection to Admin
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    color: "var(--ink-mid)",
                    marginBottom: "24px",
                  }}
                >
                  Your simulated configuration ({paidModulesCount} paid modules
                  · GHS {finalCostPerTerm.toFixed(2)}/term) will be submitted
                  directly to our onboarding team.
                </p>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                  }}
                >
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "13px",
                        fontWeight: 600,
                        color: "var(--navy)",
                        marginBottom: "6px",
                      }}
                    >
                      School Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Heritage International Academy"
                      value={formData.schoolName}
                      onChange={(e) =>
                        setFormData({ ...formData, schoolName: e.target.value })
                      }
                      style={{
                        width: "100%",
                        padding: "12px",
                        border: "1px solid var(--rule)",
                        borderRadius: "8px",
                        fontSize: "14px",
                      }}
                    />
                  </div>

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "16px",
                    }}
                  >
                    <div>
                      <label
                        style={{
                          display: "block",
                          fontSize: "13px",
                          fontWeight: 600,
                          color: "var(--navy)",
                          marginBottom: "6px",
                        }}
                      >
                        Contact Person *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Headmaster / Proprietor"
                        value={formData.contactName}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            contactName: e.target.value,
                          })
                        }
                        style={{
                          width: "100%",
                          padding: "12px",
                          border: "1px solid var(--rule)",
                          borderRadius: "8px",
                          fontSize: "14px",
                        }}
                      />
                    </div>
                    <div>
                      <label
                        style={{
                          display: "block",
                          fontSize: "13px",
                          fontWeight: 600,
                          color: "var(--navy)",
                          marginBottom: "6px",
                        }}
                      >
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="024 XXX XXXX"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        style={{
                          width: "100%",
                          padding: "12px",
                          border: "1px solid var(--rule)",
                          borderRadius: "8px",
                          fontSize: "14px",
                        }}
                      />
                    </div>
                  </div>

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "16px",
                    }}
                  >
                    <div>
                      <label
                        style={{
                          display: "block",
                          fontSize: "13px",
                          fontWeight: 600,
                          color: "var(--navy)",
                          marginBottom: "6px",
                        }}
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="admin@school.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        style={{
                          width: "100%",
                          padding: "12px",
                          border: "1px solid var(--rule)",
                          borderRadius: "8px",
                          fontSize: "14px",
                        }}
                      />
                    </div>
                    <div>
                      <label
                        style={{
                          display: "block",
                          fontSize: "13px",
                          fontWeight: 600,
                          color: "var(--navy)",
                          marginBottom: "6px",
                        }}
                      >
                        City / Region
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Accra"
                        value={formData.city}
                        onChange={(e) =>
                          setFormData({ ...formData, city: e.target.value })
                        }
                        style={{
                          width: "100%",
                          padding: "12px",
                          border: "1px solid var(--rule)",
                          borderRadius: "8px",
                          fontSize: "14px",
                        }}
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary"
                    style={{
                      width: "100%",
                      justifyContent: "center",
                      marginTop: "12px",
                    }}
                  >
                    {isSubmitting
                      ? "Submitting Request..."
                      : "Submit Deployment Request"}{" "}
                    <ArrowRight size={16} />
                  </button>
                </div>
              </form>
            ) : (
              <div style={{ textAlign: "center", padding: "20px 0" }}>
                <CheckCircle
                  size={48}
                  color="var(--green-mid)"
                  style={{ margin: "0 auto 16px" }}
                />
                <h3
                  style={{
                    fontSize: "24px",
                    fontWeight: 700,
                    color: "var(--navy)",
                    marginBottom: "8px",
                  }}
                >
                  Request Received!
                </h3>
                <p
                  style={{
                    fontSize: "15px",
                    color: "var(--ink-mid)",
                    marginBottom: "24px",
                    lineHeight: 1.6,
                  }}
                >
                  Thank you. Your module configuration has been sent to the
                  Edcomrade platform admin. Our onboarding team will contact you
                  within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setIsRequestModalOpen(false);
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
