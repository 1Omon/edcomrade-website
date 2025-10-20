import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "EdComrade Pioneer 100 — Deposit & Refund Agreement",
  description:
    "Public summary of the EdComrade Pioneer 100 Deposit & Refund Agreement, including deposit terms, refund policy, responsibilities, and processes.",
  openGraph: {
    title: "EdComrade Pioneer 100 — Deposit & Refund Agreement",
    description: "Public summary of terms for deposits, refunds, media rights, liability, and data protection.",
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-background px-6 lg:px-8 py-24">
      <div className="max-w-3xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-semibold">EdComrade Pioneer 100 — Deposit & Refund Agreement (Public Summary)</h1>
          <p className="text-sm text-muted-foreground mt-2">Last updated: [Insert date]</p>
        </header>

        {/* Summary box */}
        <div className="mb-8 rounded-2xl border bg-muted/30 p-4 text-sm text-muted-foreground">
          Deposits are fully refundable until December 31, 2025. Refunds require written request via
          {" "}
          <a className="underline" href="mailto:onboard@edcomrade.com">onboard@edcomrade.com</a>.
          {" "}
          You may also download a PDF copy of this agreement.
          {" "}
          <Link href="/pioneer-100-terms.pdf" className="underline">Download PDF</Link>
          {"."}
        </div>

        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <p><strong>Effective Date:</strong> [Insert Date]</p>
          <p><strong>Campaign Organizer:</strong> EdComrade Ltd. (“EdComrade”), a limited liability company registered in Ghana.</p>
          <p><strong>Program:</strong> The “Pioneer 100” Digital School Media and Technology Program (“Program”).</p>

          <h2 id="purpose">1. Purpose</h2>
          <p>
            This Agreement governs participation in the EdComrade Pioneer 100 program — a limited campaign for the first 100
            private schools in Ghana to receive a comprehensive digital transformation package, including school website
            development, media coverage, and early access to EdComrade software.
          </p>

          <h2 id="deposit">2. Deposit Requirement</h2>
          <p>Each participating school (“Participant”) shall make a ₵1,000 deposit to reserve a slot in the Program.</p>
          <p>
            Deposits must be made through Paystack, Direct Mobile Money (MTN), or Bank Transfer to EdComrade’s designated
            account(s). The deposit represents a commitment fee confirming the school’s interest and enabling scheduling for the
            January 2026 National Media Tour.
          </p>

          <h2 id="refund">3. Refund Policy</h2>
          <ul>
            <li>Deposits are fully refundable until December 31, 2025, provided the school submits a formal written request.</li>
            <li>After December 31, 2025, deposits become non-refundable but remain transferable to another EdComrade service or future media project within 6 months.</li>
            <li>Refunds are processed within 14 business days of approval and issued to the same account used for payment.</li>
            <li>If EdComrade fails to deliver its services or cancels the January 2026 tour without an alternative arrangement, all deposits shall be refunded in full.</li>
          </ul>

          <h2 id="scope">4. Scope of the Pioneer 100 Package</h2>
          <ul>
            <li>One (1) on-site media shoot (photo + short video feature)</li>
            <li>Custom website and dashboard setup</li>
            <li>Admissions marketing campaign</li>
            <li>One free ERP module upon software adoption within 6 months</li>
            <li>Training and onboarding support</li>
            <li>“Pioneer School” certification badge</li>
          </ul>
          <p>Full deliverables are outlined in the campaign brochure and onboarding documentation.</p>

          <h2 id="scheduling">5. Scheduling & Tour Commitments</h2>
          <p>
            EdComrade will conduct its National Media Tour across Ghana during January 2026, visiting each region to capture
            registered schools. Schools will be contacted by EdComrade’s onboarding team to confirm their specific shoot window.
            Participants must ensure their campus is accessible and ready for filming on the assigned date.
          </p>

          <h2 id="participant">6. Participant Responsibilities</h2>
          <ul>
            <li>Provide accurate information during registration.</li>
            <li>Obtain parental/guardian consent for all students featured in media materials.</li>
            <li>Designate an authorized representative for correspondence and on-site coordination.</li>
            <li>Make final payment (₵2,500) before the scheduled shoot date.</li>
          </ul>

          <h2 id="payments">7. Payment & Receipts</h2>
          <p>
            Upon payment of the deposit, the school receives an official digital receipt and onboarding pack by email/WhatsApp.
            Balances are due before the scheduled shoot date. All payments are logged and acknowledged via official EdComrade channels.
          </p>

          <h2 id="withdrawal">8. Withdrawal & Cancellation</h2>
          <p>
            A Participant may withdraw from the Program any time before December 31, 2025. Written notice must be sent to
            <a className="underline" href="mailto:onboard@edcomrade.com"> onboard@edcomrade.com</a> with subject line
            “Refund Request – [School Name]”. Refunds are not automatic; written request and verification are required.
          </p>

          <h2 id="refund-process">9. Refund Request Process</h2>
          <p>To initiate a refund, send an official email including:</p>
          <ul>
            <li>School Name</li>
            <li>Payment Reference / Receipt</li>
            <li>Payment Method</li>
            <li>Account Details for Refund</li>
            <li>Reason for Cancellation</li>
          </ul>
          <p>Refund confirmation will be issued within 5 business days of approval. Funds disbursed within 14 business days thereafter.</p>

          <h2 id="media-rights">10. Media Rights & Usage</h2>
          <p>
            By participating, the school grants EdComrade limited permission to use captured content (photos/videos) for delivery
            to the school, and for inclusion in EdComrade’s marketing or Pioneer 100 documentary (unless opted out in writing).
            Schools may request restricted or private usage at any time.
          </p>

          <h2 id="liability">11. Liability</h2>
          <p>
            EdComrade shall not be held liable for delays caused by acts of God, government restrictions, or unforeseen
            logistical challenges. In such cases, EdComrade may reschedule affected shoots or issue refunds at its discretion.
            EdComrade’s total liability shall not exceed the total amount paid by the school.
          </p>

          <h2 id="data">12. Confidentiality & Data Protection</h2>
          <p>
            All school data and media files are handled under strict confidentiality and used only for onboarding,
            communication, and service delivery. EdComrade complies with Ghana’s Data Protection Act, 2012 (Act 843).
          </p>

          <h2 id="law">13. Governing Law</h2>
          <p>
            This Agreement is governed by the laws of the Republic of Ghana. Disputes shall first be resolved amicably; failing
            which, the matter shall be referred to arbitration under Ghanaian law.
          </p>

          <h2 id="acceptance">14. Acceptance</h2>
          <p>
            By making the ₵1,000 deposit or submitting the Pioneer 100 registration form, the Participant acknowledges that
            they have read, understood, and agreed to the terms of this Agreement.
          </p>

          <p className="mt-6"><strong>Signed:</strong><br />For and on behalf of EdComrade Ltd.<br />Solomon Annan Ayisi<br />Founder & CEO</p>

          <hr />

          <h2 id="refund-template">2. Refund Request Template (for schools)</h2>
          <p><strong>Subject:</strong> Refund Request – EdComrade Pioneer 100 Deposit</p>
          <p><strong>To:</strong> onboard@edcomrade.com</p>
          <p><strong>Date:</strong> [Insert Date]</p>
          <p>Include: School Name, Payment Reference, Payment Date, Method, Amount, Account Name & Number, Reason, and Contacts.</p>

          <hr />

          <h2 id="payment-confirmation">3. Payment Confirmation & Commitment Agreement</h2>
          <p>
            Upon payment, we confirm receipt of ₵1,000 and your reserved slot. Deposit is refundable until Dec 31, 2025.
            You will receive onboarding steps within 24 hours.
          </p>
          <ul>
            <li>School Name: [Auto‑filled]</li>
            <li>Payment Reference: [Paystack Ref]</li>
            <li>Date: [Auto‑filled]</li>
            <li>Deposit Amount: ₵1,000</li>
            <li>Tour Window: January 2026</li>
          </ul>

          <hr />

          <h2 id="display-notes">4. Notes for Website Legal Page Display</h2>
          <ul>
            <li>Use clean section headers with anchors (#deposit, #refund, #liability, etc.).</li>
            <li>Include last updated date at top of page.</li>
            <li>Add summary box: “Deposits are fully refundable until December 31, 2025. Refunds require written request.”</li>
            <li>Provide a downloadable PDF version of the agreement.</li>
          </ul>
        </div>
      </div>
    </main>
  );
}


