"use client";

import Link from "next/link";
import Image from "next/image";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Search, ShieldCheck, ArrowRight } from "lucide-react";

export default function SchoolpediaPageClient() {
  return (
    <main style={{ background: "var(--paper)" }}>
      <Navigation />

      {/* Hero */}
      <section style={{ paddingTop: "140px", paddingBottom: "80px", background: "linear-gradient(135deg, var(--navy-dark) 0%, var(--navy) 100%)", color: "#fff" }}>
        <div className="container" style={{ textAlign: "center", maxWidth: "860px" }}>
          <span className="badge badge-gold" style={{ marginBottom: "20px" }}>
            <Search size={12} /> School Directory
          </span>
          <h1 style={{ fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 700, lineHeight: 1.1, marginBottom: "20px" }}>
            Find and verify top private schools.
          </h1>
          <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.75)", lineHeight: 1.6, marginBottom: "36px" }}>
            Parents use our directory to find transparent information on fees, facilities, and academic performance so they can choose the right school with confidence.
          </p>
          <Link href="https://schoolpedia.edcomrade.com" target="_blank" rel="noopener noreferrer" className="btn-white">
            Explore Schoolpedia Directory <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Directory Showcase Photo */}
      <section style={{ padding: "var(--section) 0", background: "#fff" }}>
        <div className="container">
          <div className="photo-card" style={{ maxWidth: "960px", margin: "0 auto", aspectRatio: "16/9" }}>
            <Image src="/african-students-competing-in-academic-olympiad--f.jpg" alt="Schoolpedia students showcase" fill style={{ objectFit: "cover" }} />
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: "var(--section) 0", background: "var(--paper-tint)" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "560px", margin: "0 auto 60px" }}>
            <p className="eyebrow" style={{ marginBottom: "12px" }}>Why list your school</p>
            <h2 style={{ fontSize: "clamp(30px, 4vw, 44px)", fontWeight: 700, color: "var(--navy)" }}>
              Get found by parents near you.
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
            <div className="card" style={{ padding: "32px" }}>
              <ShieldCheck size={28} color="var(--cyan)" style={{ marginBottom: "16px" }} />
              <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--navy)", marginBottom: "8px" }}>Verified Badge</h3>
              <p style={{ fontSize: "14px", color: "var(--ink-mid)", lineHeight: 1.6 }}>Schools using our School Management Software receive an official verified trust badge on their public profile.</p>
            </div>

            <div className="card" style={{ padding: "32px" }}>
              <Search size={28} color="var(--gold)" style={{ marginBottom: "16px" }} />
              <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--navy)", marginBottom: "8px" }}>Location &amp; Fee Search</h3>
              <p style={{ fontSize: "14px", color: "var(--ink-mid)", lineHeight: 1.6 }}>Parents filter schools by location, fee range, and curriculum type to find exactly what they need.</p>
            </div>

            <div className="card" style={{ padding: "32px" }}>
              <ArrowRight size={28} color="var(--green-mid)" style={{ marginBottom: "16px" }} />
              <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--navy)", marginBottom: "8px" }}>Direct Enquiries</h3>
              <p style={{ fontSize: "14px", color: "var(--ink-mid)", lineHeight: 1.6 }}>Parents can submit admission inquiry forms directly to your admissions officer.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
