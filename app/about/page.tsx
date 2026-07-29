import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Edcomrade — Built in Ghana, Built for Africa",
  description:
    "Edcomrade was founded in Accra in 2023 to give every Ghanaian school the software, visibility, and media presence it deserves.",
};

export default function AboutPage() {
  return (
    <main style={{ backgroundColor: "var(--color-paper)" }}>
      <Navigation />

      {/* Hero */}
      <section style={{ paddingTop: "140px", paddingBottom: "80px" }}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div style={{ borderTop: "1px solid var(--color-rule)", paddingTop: "16px", marginBottom: "32px" }}>
            <span style={{ fontSize: "var(--text-xs)", letterSpacing: "var(--tracking-wider)", textTransform: "uppercase", color: "var(--color-accent)", fontWeight: 600 }}>
              OUR STORY
            </span>
          </div>
          <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-hero)", fontWeight: 700, lineHeight: 0.95, letterSpacing: "var(--tracking-tight)", color: "var(--color-ink)", maxWidth: "850px", marginBottom: "48px" }}>
            Built in Ghana. Built for Africa.
          </h1>

          {/* Founding story — editorial prose */}
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            <div className="lg:col-span-2 space-y-6" style={{ fontSize: "var(--text-lg)", color: "var(--color-ink-muted)", lineHeight: 1.75 }}>
              <p>
                In 2023, Solomon Ayisi visited a well-regarded private school in Accra and found the bursar managing fee records in a notebook. Not a spreadsheet — a notebook, with a pen. The school had 400 students, a dedicated teaching staff, and parents who drove their children an hour each way because the institution had a reputation. It also had no way to communicate that reputation to anyone outside its immediate catchment.
              </p>
              <p>
                That visit became the founding question of Edcomrade: why do Ghana&apos;s best schools remain invisible? Not because they lack quality — but because they lack infrastructure. Digital infrastructure. The kind that makes a school searchable, trustworthy, and connected to the families who are looking for exactly what that school offers.
              </p>
              <p>
                Solomon chose to build a company instead of deploying to one school. He partnered with Prince Sarfo, a software engineer who had spent years building enterprise systems, and they started with a simple constraint: every product had to work on the infrastructure Ghana actually has — not the infrastructure Silicon Valley assumes. Slow internet. Mobile-first users. Trust built in person, not through ads.
              </p>
            </div>
            <div>
              <div style={{ border: "1px solid var(--color-rule)", padding: "24px", borderLeft: "3px solid var(--color-accent)" }}>
                <p style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-xl)", fontStyle: "italic", color: "var(--color-ink)", lineHeight: 1.5 }}>
                  &ldquo;The administration eats the education. We want to end that.&rdquo;
                </p>
                <p style={{ fontSize: "var(--text-xs)", color: "var(--color-ink-faint)", marginTop: "12px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  Solomon A. Ayisi · Founder
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission — dark section */}
      <section style={{ backgroundColor: "var(--color-dark)", padding: "80px 0" }}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 text-center">
          <p style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-4xl)", fontStyle: "italic", color: "#fff", lineHeight: 1.3, fontWeight: 600 }}>
            We modernise African schools.<br />
            We centre education around parents.<br />
            We make excellence visible.
          </p>
        </div>
      </section>

      {/* Team */}
      <section style={{ backgroundColor: "var(--color-paper)", padding: "80px 0" }}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div style={{ borderTop: "1px solid var(--color-rule)", paddingTop: "16px", marginBottom: "48px" }}>
            <span style={{ fontSize: "var(--text-xs)", letterSpacing: "var(--tracking-wider)", textTransform: "uppercase", color: "var(--color-accent)", fontWeight: 600, display: "block", marginBottom: "8px" }}>
              THE TEAM
            </span>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-3xl)", fontWeight: 700, lineHeight: 1.15, color: "var(--color-ink)" }}>
              Two builders. One company.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Solomon A. Ayisi", role: "CEO & Founder", bio: "Former educator turned entrepreneur. Built Edcomrade after realising the right infrastructure was missing, not the talent." },
              { name: "Prince Sarfo", role: "CTO & Co-Founder", bio: "Enterprise software engineer with a decade of system architecture experience. Builds what African schools actually need." },
            ].map((m) => (
              <div key={m.name}>
                {/* TODO: add team member photo */}
                <div style={{ border: "1px solid var(--color-rule)", aspectRatio: "1/1", backgroundColor: "var(--color-paper-warm)", marginBottom: "16px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontSize: "var(--text-xs)", color: "var(--color-ink-faint)", fontFamily: "var(--font-mono)" }}>PHOTO</span>
                </div>
                <p style={{ fontSize: "var(--text-base)", fontWeight: 600, color: "var(--color-ink)" }}>{m.name}</p>
                <p style={{ fontSize: "var(--text-sm)", color: "var(--color-ink-faint)", marginBottom: "8px" }}>{m.role}</p>
                <p style={{ fontSize: "var(--text-sm)", color: "var(--color-ink-muted)", lineHeight: 1.7 }}>{m.bio}</p>
              </div>
            ))}
            {/* TODO: add team member */}
          </div>
        </div>
      </section>

      {/* Vision Horizons */}
      <section style={{ backgroundColor: "var(--color-paper-warm)", padding: "80px 0" }}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div style={{ borderTop: "1px solid var(--color-rule)", paddingTop: "16px", marginBottom: "48px" }}>
            <span style={{ fontSize: "var(--text-xs)", letterSpacing: "var(--tracking-wider)", textTransform: "uppercase", color: "var(--color-accent)", fontWeight: 600, display: "block", marginBottom: "8px" }}>
              VISION HORIZONS
            </span>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-3xl)", fontWeight: 700, lineHeight: 1.15, color: "var(--color-ink)" }}>
              Where we are going.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[
              { h: "Horizon 1", title: "Digital Foundations", desc: "Every school in Ghana has access to free ERP infrastructure, a verified online profile, and a connected parent community. This is Edcomrade today." },
              { h: "Horizon 2", title: "African Expansion", desc: "Pioneers' Software and Schoolpedia expand to Nigeria, Kenya, and Senegal. The model is built to port. The infrastructure already works." },
              { h: "Horizon 3", title: "Education Intelligence", desc: "Aggregate anonymised data from thousands of schools becomes the most accurate picture of African education ever assembled — and we make it useful." },
            ].map((v) => (
              <div key={v.h} style={{ borderTop: "1px solid var(--color-rule)", paddingTop: "16px" }}>
                <div style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-5xl)", fontWeight: 700, color: "var(--color-rule)", lineHeight: 1, marginBottom: "12px" }}>
                  {v.h}
                </div>
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-2xl)", fontWeight: 600, color: "var(--color-ink)", marginBottom: "12px" }}>{v.title}</h3>
                <p style={{ fontSize: "var(--text-base)", color: "var(--color-ink-muted)", lineHeight: 1.75 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
