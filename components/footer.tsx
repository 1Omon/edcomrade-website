import Link from "next/link";

function Col({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p
        style={{
          fontSize: "var(--text-xs)",
          letterSpacing: "var(--tracking-wider)",
          textTransform: "uppercase",
          color: "var(--color-ink-faint)",
          fontWeight: 600,
          marginBottom: "16px",
        }}
      >
        {title}
      </p>
      <nav className="flex flex-col gap-3">{children}</nav>
    </div>
  );
}

function FLink({ href, children, external }: { href: string; children: React.ReactNode; external?: boolean }) {
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      style={{ fontSize: "var(--text-sm)", color: "var(--color-ink-muted)" }}
      className="hover:text-[var(--color-ink)] transition-colors"
    >
      {children}
    </Link>
  );
}

export function Footer() {
  return (
    <footer
      style={{ backgroundColor: "var(--color-paper-warm)", borderTop: "1px solid var(--color-rule)" }}
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 py-16 md:py-20">
        {/* Top grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 pb-14" style={{ borderBottom: "1px solid var(--color-rule)" }}>
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "22px",
                  fontWeight: 700,
                  color: "var(--color-ink)",
                  letterSpacing: "-0.02em",
                }}
              >
                Edcomrade
              </span>
            </Link>
            <p style={{ fontSize: "var(--text-sm)", color: "var(--color-ink-faint)", lineHeight: 1.7, maxWidth: "200px" }}>
              Education&apos;s ally in the digital age. Built in Ghana.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <Link href="https://x.com/edcomradegh" target="_blank" rel="noopener noreferrer" aria-label="Edcomrade on X"
                className="w-8 h-8 border border-[var(--color-rule)] flex items-center justify-center text-[var(--color-ink-faint)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-colors text-xs font-bold rounded-[3px]">
                𝕏
              </Link>
              <Link href="https://linkedin.com/company/edcomrade" target="_blank" rel="noopener noreferrer" aria-label="Edcomrade on LinkedIn"
                className="w-8 h-8 border border-[var(--color-rule)] flex items-center justify-center text-[var(--color-ink-faint)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-colors text-xs font-bold rounded-[3px]">
                in
              </Link>
              <Link href="https://instagram.com/edcomradegh" target="_blank" rel="noopener noreferrer" aria-label="Edcomrade on Instagram"
                className="w-8 h-8 border border-[var(--color-rule)] flex items-center justify-center text-[var(--color-ink-faint)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-colors text-xs font-bold rounded-[3px]">
                IG
              </Link>
            </div>
          </div>

          <Col title="Software">
            <FLink href="/software">Pioneers&apos; Software</FLink>
            <FLink href="/software#custom">Custom App</FLink>
            <FLink href="/parentaide">ParentAide</FLink>
          </Col>

          <Col title="Platform">
            <FLink href="/schoolpedia">Schoolpedia</FLink>
            <FLink href="https://schoolpedia.edcomrade.com" external>Directory ↗</FLink>
            <FLink href="/edmedia">EdMedia</FLink>
            <FLink href="/amplifiers">Amplifiers</FLink>
          </Col>

          <Col title="Company">
            <FLink href="/about">About Us</FLink>
            <FLink href="/manifesto">Manifesto</FLink>
            <FLink href="/contact">Contact</FLink>
          </Col>

          <Col title="Support">
            <FLink href="https://wa.me/233555284923" external>WhatsApp</FLink>
            <FLink href="mailto:partner@edcomrade.com" external>Email</FLink>
          </Col>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p style={{ fontSize: "var(--text-xs)", color: "var(--color-ink-faint)" }}>
            © {new Date().getFullYear()} S.A Edcomrade Ventures. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[var(--color-green)] inline-block" />
            <p style={{ fontSize: "var(--text-xs)", color: "var(--color-ink-faint)", fontFamily: "var(--font-mono)" }}>
              Built in Ghana · Built for Africa
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
