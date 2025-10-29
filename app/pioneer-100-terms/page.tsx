// import type { Metadata } from "next";
// import Link from "next/link";

// export const metadata: Metadata = {
//   title: "EdComrade Pioneer 100 — Deposit & Refund Agreement",
//   description:
//     "Public summary of the EdComrade Pioneer 100 Deposit & Refund Agreement, including deposit terms, refund policy, responsibilities, and processes.",
//   openGraph: {
//     title: "EdComrade Pioneer 100 — Deposit & Refund Agreement",
//     description: "Public summary of terms for deposits, refunds, media rights, liability, and data protection.",
//   },
// };

// export default function Page() {
//   return (
//     <main className="min-h-screen bg-background px-6 lg:px-8 py-24">
//       <div className="max-w-3xl mx-auto">
//         <header className="mb-8">
//           <h1 className="text-3xl md:text-4xl font-semibold">EdComrade Pioneer 100 — Deposit & Refund Agreement (Public Summary)</h1>
//           <p className="text-sm text-muted-foreground mt-2">Last updated: [Insert date]</p>
//         </header>

//         {/* Summary box */}
//         <div className="mb-8 rounded-2xl border bg-muted/30 p-4 text-sm text-muted-foreground">
//           Deposits are fully refundable until December 31, 2025. Refunds require written request via
//           {" "}
//           <a className="underline" href="mailto:edcomrade.gh@gmail.com">edcomrade.gh@gmail.com</a>.
//           {" "}
//           You may also download a PDF copy of this agreement.
//           {" "}
//           <Link href="/pioneer-100-terms.pdf" className="underline">Download PDF</Link>
//           {"."}
//         </div>

//         <div className="prose prose-neutral dark:prose-invert max-w-none">
//           <p><strong>Effective Date:</strong> [Insert Date]</p>
//           <p><strong>Campaign Organizer:</strong> EdComrade Ltd. (“EdComrade”), a limited liability company registered in Ghana.</p>
//           <p><strong>Program:</strong> The “Pioneer 100” Digital School Media and Technology Program (“Program”).</p>

//           <h2 id="purpose">1. Purpose</h2>
//           <p>
//             This Agreement governs participation in the EdComrade Pioneer 100 program — a limited campaign for the first 100
//             private schools in Ghana to receive a comprehensive digital transformation package, including school website
//             development, media coverage, and early access to EdComrade software.
//           </p>

//           <h2 id="deposit">2. Deposit Requirement</h2>
//           <p>Each participating school (“Participant”) shall make a ₵1,000 deposit to reserve a slot in the Program.</p>
//           <p>
//             Deposits must be made through Paystack, Direct Mobile Money (MTN), or Bank Transfer to EdComrade’s designated
//             account(s). The deposit represents a commitment fee confirming the school’s interest and enabling scheduling for the
//             January 2026 National Media Tour.
//           </p>

//           <h2 id="refund">3. Refund Policy</h2>
//           <ul>
//             <li>Deposits are fully refundable until December 31, 2025, provided the school submits a formal written request.</li>
//             <li>After December 31, 2025, deposits become non-refundable but remain transferable to another EdComrade service or future media project within 6 months.</li>
//             <li>Refunds are processed within 14 business days of approval and issued to the same account used for payment.</li>
//             <li>If EdComrade fails to deliver its services or cancels the January 2026 tour without an alternative arrangement, all deposits shall be refunded in full.</li>
//           </ul>

//           <h2 id="scope">4. Scope of the Pioneer 100 Package</h2>
//           <ul>
//             <li>One (1) on-site media shoot (photo + short video feature)</li>
//             <li>Custom website and dashboard setup</li>
//             <li>Admissions marketing campaign</li>
//             <li>One free ERP module upon software adoption within 6 months</li>
//             <li>Training and onboarding support</li>
//             <li>“Pioneer School” certification badge</li>
//           </ul>
//           <p>Full deliverables are outlined in the campaign brochure and onboarding documentation.</p>

//           <h2 id="scheduling">5. Scheduling & Tour Commitments</h2>
//           <p>
//             EdComrade will conduct its National Media Tour across Ghana during January 2026, visiting each region to capture
//             registered schools. Schools will be contacted by EdComrade’s onboarding team to confirm their specific shoot window.
//             Participants must ensure their campus is accessible and ready for filming on the assigned date.
//           </p>

//           <h2 id="participant">6. Participant Responsibilities</h2>
//           <ul>
//             <li>Provide accurate information during registration.</li>
//             <li>Obtain parental/guardian consent for all students featured in media materials.</li>
//             <li>Designate an authorized representative for correspondence and on-site coordination.</li>
//             <li>Make final payment (₵2,500) before the scheduled shoot date.</li>
//           </ul>

//           <h2 id="payments">7. Payment & Receipts</h2>
//           <p>
//             Upon payment of the deposit, the school receives an official digital receipt and onboarding pack by email/WhatsApp.
//             Balances are due before the scheduled shoot date. All payments are logged and acknowledged via official EdComrade channels.
//           </p>

//           <h2 id="withdrawal">8. Withdrawal & Cancellation</h2>
//           <p>
//             A Participant may withdraw from the Program any time before December 31, 2025. Written notice must be sent to
//             <a className="underline" href="mailto:edcomrade.gh@gmail.com"> edcomrade.gh@gmail.com</a> with subject line
//             “Refund Request – [School Name]”. Refunds are not automatic; written request and verification are required.
//           </p>

//           <h2 id="refund-process">9. Refund Request Process</h2>
//           <p>To initiate a refund, send an official email including:</p>
//           <ul>
//             <li>School Name</li>
//             <li>Payment Reference / Receipt</li>
//             <li>Payment Method</li>
//             <li>Account Details for Refund</li>
//             <li>Reason for Cancellation</li>
//           </ul>
//           <p>Refund confirmation will be issued within 5 business days of approval. Funds disbursed within 14 business days thereafter.</p>

//           <h2 id="media-rights">10. Media Rights & Usage</h2>
//           <p>
//             By participating, the school grants EdComrade limited permission to use captured content (photos/videos) for delivery
//             to the school, and for inclusion in EdComrade’s marketing or Pioneer 100 documentary (unless opted out in writing).
//             Schools may request restricted or private usage at any time.
//           </p>

//           <h2 id="liability">11. Liability</h2>
//           <p>
//             EdComrade shall not be held liable for delays caused by acts of God, government restrictions, or unforeseen
//             logistical challenges. In such cases, EdComrade may reschedule affected shoots or issue refunds at its discretion.
//             EdComrade’s total liability shall not exceed the total amount paid by the school.
//           </p>

//           <h2 id="data">12. Confidentiality & Data Protection</h2>
//           <p>
//             All school data and media files are handled under strict confidentiality and used only for onboarding,
//             communication, and service delivery. EdComrade complies with Ghana’s Data Protection Act, 2012 (Act 843).
//           </p>

//           <h2 id="law">13. Governing Law</h2>
//           <p>
//             This Agreement is governed by the laws of the Republic of Ghana. Disputes shall first be resolved amicably; failing
//             which, the matter shall be referred to arbitration under Ghanaian law.
//           </p>

//           <h2 id="acceptance">14. Acceptance</h2>
//           <p>
//             By making the ₵1,000 deposit or submitting the Pioneer 100 registration form, the Participant acknowledges that
//             they have read, understood, and agreed to the terms of this Agreement.
//           </p>

//           <p className="mt-6"><strong>Signed:</strong><br />For and on behalf of EdComrade Ltd.<br />Solomon Annan Ayisi<br />Founder & CEO</p>

//           <hr />

//           <h2 id="refund-template">2. Refund Request Template (for schools)</h2>
//           <p><strong>Subject:</strong> Refund Request – EdComrade Pioneer 100 Deposit</p>
//           <p><strong>To:</strong> edcomrade.gh@gmail.com</p>
//           <p><strong>Date:</strong> [Insert Date]</p>
//           <p>Include: School Name, Payment Reference, Payment Date, Method, Amount, Account Name & Number, Reason, and Contacts.</p>

//           <hr />

//           <h2 id="payment-confirmation">3. Payment Confirmation & Commitment Agreement</h2>
//           <p>
//             Upon payment, we confirm receipt of ₵1,000 and your reserved slot. Deposit is refundable until Dec 31, 2025.
//             You will receive onboarding steps within 24 hours.
//           </p>
//           <ul>
//             <li>School Name: [Auto‑filled]</li>
//             <li>Payment Reference: [Paystack Ref]</li>
//             <li>Date: [Auto‑filled]</li>
//             <li>Deposit Amount: ₵1,000</li>
//             <li>Tour Window: January 2026</li>
//           </ul>

//           <hr />

//           <h2 id="display-notes">4. Notes for Website Legal Page Display</h2>
//           <ul>
//             <li>Use clean section headers with anchors (#deposit, #refund, #liability, etc.).</li>
//             <li>Include last updated date at top of page.</li>
//             <li>Add summary box: “Deposits are fully refundable until December 31, 2025. Refunds require written request.”</li>
//             <li>Provide a downloadable PDF version of the agreement.</li>
//           </ul>
//         </div>
//       </div>
//     </main>
//   );
// }


"use client";
import { useState } from "react";
import { FileText, Download, CheckCircle, AlertCircle, ChevronRight, Shield, Calendar, RefreshCw } from "lucide-react";

export default function TermsPage() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const sections = [
    { id: "purpose", title: "Purpose", icon: <FileText className="w-5 h-5" /> },
    { id: "deposit", title: "Deposit", icon: <CheckCircle className="w-5 h-5" /> },
    { id: "refund", title: "Refund Policy", icon: <RefreshCw className="w-5 h-5" /> },
    { id: "scope", title: "Package Scope", icon: <Shield className="w-5 h-5" /> },
    { id: "scheduling", title: "Scheduling", icon: <Calendar className="w-5 h-5" /> },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50 backdrop-blur-lg bg-white/90">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="font-semibold text-xl hover:text-indigo-600 transition">EdComrade</a>
          <a href="/pioneer-100" className="text-sm text-slate-600 hover:text-indigo-600 transition flex items-center gap-2">
            <ChevronRight className="w-4 h-4" />
            Back to Pioneer 100
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white py-20 px-6">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm mb-6">
            <Shield className="w-4 h-4" />
            <span>Legal Agreement</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Pioneer 100 Terms & Agreement
          </h1>
          
          <p className="text-xl text-white/90 mb-6">
            Clear, transparent terms for your school's participation in Ghana's digital education revolution
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href="/pioneer-100-terms.pdf" 
              className="bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all inline-flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download PDF
            </a>
            <a 
              href="#refund" 
              className="bg-white/20 backdrop-blur-sm border-2 border-white/40 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/30 transition-all"
            >
              View Refund Policy
            </a>
          </div>
          
          <p className="text-sm text-white/70 mt-6">Last updated: January 15, 2025</p>
        </div>
      </section>

      {/* Quick Summary */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-8 border-2 border-indigo-200 shadow-lg">
            <div className="flex items-start gap-4">
              <div className="bg-indigo-600 rounded-xl p-3 text-white">
                <AlertCircle className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-slate-900 mb-3">Quick Summary</h2>
                <div className="space-y-2 text-slate-700">
                  <p className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Deposits are fully refundable</strong> until December 31, 2025</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Simple refund process:</strong> Email request to <a href="mailto:edcomrade.gh@gmail.com" className="text-indigo-600 underline font-medium">edcomrade.gh@gmail.com</a></span>
                  </p>
                  <p className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>14-day refund processing</strong> after approval</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Total package: ₵3,500</strong> (₵1,000 deposit + ₵2,500 balance)</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar Navigation */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 bg-white rounded-2xl border border-slate-200 p-4 shadow-sm">
                <h3 className="font-semibold text-sm text-slate-500 uppercase tracking-wide mb-4">Contents</h3>
                <nav className="space-y-1">
                  {[
                    { id: "purpose", label: "Purpose" },
                    { id: "deposit", label: "Deposit" },
                    { id: "refund", label: "Refund Policy" },
                    { id: "scope", label: "Package Scope" },
                    { id: "scheduling", label: "Scheduling" },
                    { id: "participant", label: "Responsibilities" },
                    { id: "payments", label: "Payments" },
                    { id: "withdrawal", label: "Withdrawal" },
                    { id: "refund-process", label: "Refund Process" },
                    { id: "media-rights", label: "Media Rights" },
                    { id: "liability", label: "Liability" },
                    { id: "data", label: "Data Protection" },
                    { id: "law", label: "Governing Law" },
                    { id: "acceptance", label: "Acceptance" },
                  ].map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={() => setActiveSection(item.id)}
                      className={`block px-3 py-2 rounded-lg text-sm transition ${
                        activeSection === item.id
                          ? "bg-indigo-50 text-indigo-600 font-medium"
                          : "text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 md:p-12 space-y-12">
                {/* Agreement Header */}
                <div className="pb-6 border-b border-slate-200">
                  <p className="text-slate-600"><strong>Effective Date:</strong> January 15, 2025</p>
                  <p className="text-slate-600"><strong>Campaign Organizer:</strong> EdComrade Ltd., a limited liability company registered in Ghana</p>
                  <p className="text-slate-600"><strong>Program:</strong> The "Pioneer 100" Digital School Media and Technology Program</p>
                </div>

                {/* Section 1 */}
                <section id="purpose">
                  <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center text-sm font-bold">1</span>
                    Purpose
                  </h2>
                  <p className="text-slate-700 leading-relaxed">
                    This Agreement governs participation in the EdComrade Pioneer 100 program — a limited campaign for the first 100 private schools in Ghana to receive a comprehensive digital transformation package, including school website development, media coverage, and early access to EdComrade software.
                  </p>
                </section>

                {/* Section 2 */}
                <section id="deposit">
                  <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center text-sm font-bold">2</span>
                    Deposit Requirement
                  </h2>
                  <div className="space-y-4 text-slate-700 leading-relaxed">
                    <p>Each participating school ("Participant") shall make a <strong>₵1,000 deposit</strong> to reserve a slot in the Program.</p>
                    <p>Deposits must be made through Paystack, Direct Mobile Money (MTN), or Bank Transfer to EdComrade's designated account(s). The deposit represents a commitment fee confirming the school's interest and enabling scheduling for the January 2026 National Media Tour.</p>
                  </div>
                </section>

                {/* Section 3 - Highlighted */}
                <section id="refund" className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-200">
                  <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 bg-green-600 text-white rounded-lg flex items-center justify-center text-sm font-bold">3</span>
                    Refund Policy
                  </h2>
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Deposits are <strong>fully refundable until December 31, 2025</strong>, provided the school submits a formal written request.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>After December 31, 2025, deposits become non-refundable but remain <strong>transferable to another EdComrade service</strong> or future media project within 6 months.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Refunds are processed within <strong>14 business days</strong> of approval and issued to the same account used for payment.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>If EdComrade fails to deliver its services or cancels the January 2026 tour without an alternative arrangement, <strong>all deposits shall be refunded in full</strong>.</span>
                    </li>
                  </ul>
                </section>

                {/* Section 4 */}
                <section id="scope">
                  <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center text-sm font-bold">4</span>
                    Scope of the Pioneer 100 Package
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      "One (1) on-site media shoot (photo + short video feature)",
                      "Custom website and dashboard setup",
                      "Admissions marketing campaign",
                      "One free ERP module upon software adoption within 6 months",
                      "Training and onboarding support",
                      "'Pioneer School' certification badge"
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3 bg-slate-50 rounded-lg p-4">
                        <CheckCircle className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-slate-600 text-sm mt-4">Full deliverables are outlined in the campaign brochure and onboarding documentation.</p>
                </section>

                {/* Section 5 */}
                <section id="scheduling">
                  <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center text-sm font-bold">5</span>
                    Scheduling & Tour Commitments
                  </h2>
                  <p className="text-slate-700 leading-relaxed">
                    EdComrade will conduct its National Media Tour across Ghana during <strong>January 2026</strong>, visiting each region to capture registered schools. Schools will be contacted by EdComrade's onboarding team to confirm their specific shoot window. Participants must ensure their campus is accessible and ready for filming on the assigned date.
                  </p>
                </section>

                {/* Section 6 */}
                <section id="participant">
                  <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center text-sm font-bold">6</span>
                    Participant Responsibilities
                  </h2>
                  <ul className="space-y-3 text-slate-700">
                    {[
                      "Provide accurate information during registration",
                      "Obtain parental/guardian consent for all students featured in media materials",
                      "Designate an authorized representative for correspondence and on-site coordination",
                      "Make final payment (₵2,500) before the scheduled shoot date"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                {/* Section 7 */}
                <section id="payments">
                  <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center text-sm font-bold">7</span>
                    Payment & Receipts
                  </h2>
                  <p className="text-slate-700 leading-relaxed">
                    Upon payment of the deposit, the school receives an official digital receipt and onboarding pack by email/WhatsApp. Balances are due before the scheduled shoot date. All payments are logged and acknowledged via official EdComrade channels.
                  </p>
                </section>

                {/* Section 8 */}
                <section id="withdrawal">
                  <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center text-sm font-bold">8</span>
                    Withdrawal & Cancellation
                  </h2>
                  <p className="text-slate-700 leading-relaxed">
                    A Participant may withdraw from the Program any time before December 31, 2025. Written notice must be sent to <a href="mailto:edcomrade.gh@gmail.com" className="text-indigo-600 underline font-medium">edcomrade.gh@gmail.com</a> with subject line "Refund Request – [School Name]". Refunds are not automatic; written request and verification are required.
                  </p>
                </section>

                {/* Section 9 - Highlighted */}
                <section id="refund-process" className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border-2 border-blue-200">
                  <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center text-sm font-bold">9</span>
                    Refund Request Process
                  </h2>
                  <p className="text-slate-700 mb-4">To initiate a refund, send an official email including:</p>
                  <div className="space-y-2">
                    {[
                      "School Name",
                      "Payment Reference / Receipt",
                      "Payment Method",
                      "Account Details for Refund",
                      "Reason for Cancellation"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 bg-white rounded-lg p-3 text-sm">
                        <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                          {i + 1}
                        </div>
                        <span className="text-slate-700">{item}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-slate-700 mt-4 text-sm">Refund confirmation will be issued within 5 business days of approval. Funds disbursed within 14 business days thereafter.</p>
                </section>

                {/* Sections 10-14 */}
                {[
                  {
                    id: "media-rights",
                    num: 10,
                    title: "Media Rights & Usage",
                    content: "By participating, the school grants EdComrade limited permission to use captured content (photos/videos) for delivery to the school, and for inclusion in EdComrade's marketing or Pioneer 100 documentary (unless opted out in writing). Schools may request restricted or private usage at any time."
                  },
                  {
                    id: "liability",
                    num: 11,
                    title: "Liability",
                    content: "EdComrade shall not be held liable for delays caused by acts of God, government restrictions, or unforeseen logistical challenges. In such cases, EdComrade may reschedule affected shoots or issue refunds at its discretion. EdComrade's total liability shall not exceed the total amount paid by the school."
                  },
                  {
                    id: "data",
                    num: 12,
                    title: "Confidentiality & Data Protection",
                    content: "All school data and media files are handled under strict confidentiality and used only for onboarding, communication, and service delivery. EdComrade complies with Ghana's Data Protection Act, 2012 (Act 843)."
                  },
                  {
                    id: "law",
                    num: 13,
                    title: "Governing Law",
                    content: "This Agreement is governed by the laws of the Republic of Ghana. Disputes shall first be resolved amicably; failing which, the matter shall be referred to arbitration under Ghanaian law."
                  },
                  {
                    id: "acceptance",
                    num: 14,
                    title: "Acceptance",
                    content: "By making the ₵1,000 deposit or submitting the Pioneer 100 registration form, the Participant acknowledges that they have read, understood, and agreed to the terms of this Agreement."
                  }
                ].map((section) => (
                  <section key={section.id} id={section.id}>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                      <span className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center text-sm font-bold">{section.num}</span>
                      {section.title}
                    </h2>
                    <p className="text-slate-700 leading-relaxed">{section.content}</p>
                  </section>
                ))}

                {/* Signature */}
                <div className="pt-8 border-t border-slate-200">
                  <p className="text-slate-700"><strong>Signed:</strong></p>
                  <p className="text-slate-700">For and on behalf of EdComrade Ltd.</p>
                  <p className="text-slate-700 font-semibold">Solomon Annan Ayisi</p>
                  <p className="text-slate-600 text-sm">Founder & CEO</p>
                </div>
              </div>

              {/* Refund Template Card */}
              <div className="mt-8 bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <FileText className="w-6 h-6" />
                  Refund Request Email Template
                </h3>
                <div className="bg-slate-800/50 rounded-xl p-6 font-mono text-sm space-y-2">
                  <p><span className="text-slate-400">To:</span> edcomrade.gh@gmail.com</p>
                  <p><span className="text-slate-400">Subject:</span> Refund Request – EdComrade Pioneer 100 Deposit</p>
                  <p className="pt-4 text-slate-300">Dear EdComrade Team,</p>
                  <p className="text-slate-300">I am writing to request a refund for our Pioneer 100 deposit.</p>
                  <div className="pt-4 space-y-1 text-slate-300">
                    <p>School Name: [Your School Name]</p>
                    <p>Payment Reference: [Reference Number]</p>
                    <p>Payment Date: [Date]</p>
                    <p>Payment Method: [Method]</p>
                    <p>Amount: ₵1,000</p>
                    <p>Account Name: [Account Name]</p>
                    <p>Account Number: [Number]</p>
                    <p>Reason: [Brief explanation]</p>
                    <p>Contact: [Phone/Email]</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Join the Pioneer 100?</h2>
          <p className="text-xl text-white/90 mb-8">Secure your school's spot in Ghana's digital education revolution</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/pioneer-100#reserve" className="bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all">
              Reserve Your Slot
            </a>
            <a href="mailto:edcomrade.gh@gmail.com" className="bg-white/20 backdrop-blur-sm border-2 border-white/40 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/30 transition-all">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-slate-900 text-slate-400 text-sm text-center">
        <div className="max-w-4xl mx-auto">
          <p>© 2025 EdComrade Ltd. All rights reserved. Registered in Ghana.</p>
          <p className="mt-2">For questions about these terms, contact <a href="mailto:edcomrade.gh@gmail.com" className="underline hover:text-white transition">edcomrade.gh@gmail.com</a></p>
        </div>
      </footer>
    </main>
  );
}