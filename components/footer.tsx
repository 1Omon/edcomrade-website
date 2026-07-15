import Link from "next/link";
import Image from "next/image";

function Col({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-white/40 mb-5">
        {title}
      </p>
      <nav className="flex flex-col gap-3">{children}</nav>
    </div>
  );
}

function FLink({
  href,
  children,
  external,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="text-[14px] text-white/60 hover:text-white transition-colors"
    >
      {children}
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#1A3C5E]">
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-16 md:py-20">
        {/* Top grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 pb-14 border-b border-white/10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-block mb-4 opacity-90 hover:opacity-100 transition-opacity">
              <Image
                src="/full-logo.png"
                alt="Edcomrade"
                width={110}
                height={32}
                className="h-8 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-[14px] text-white/50 leading-relaxed max-w-[180px]">
              Your ally in everything education.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-4 mt-6">
              <Link href="https://x.com/edcomradegh" target="_blank" rel="noopener noreferrer" aria-label="Edcomrade on X" className="text-white/40 hover:text-white transition-colors text-[13px] font-medium">𝕏</Link>
              <Link href="https://linkedin.com/company/edcomrade" target="_blank" rel="noopener noreferrer" aria-label="Edcomrade on LinkedIn" className="text-white/40 hover:text-white transition-colors text-[13px] font-medium">in</Link>
              <Link href="https://instagram.com/edcomradegh" target="_blank" rel="noopener noreferrer" aria-label="Edcomrade on Instagram" className="text-white/40 hover:text-white transition-colors text-[13px] font-medium">IG</Link>
            </div>
          </div>

          <Col title="Products">
            <FLink href="/software">Pioneers' Software</FLink>
            <FLink href="/software#custom">Custom App</FLink>
            <FLink href="/parentaide">ParentAide</FLink>
            <FLink href="https://schoolpedia.edcomrade.com" external>Schoolpedia ↗</FLink>
          </Col>

          <Col title="Company">
            <FLink href="/about">About</FLink>
            <FLink href="/edmedia">EdMedia</FLink>
            <FLink href="/manifesto">Manifesto</FLink>
            <FLink href="#">Careers</FLink>
          </Col>

          <Col title="Support">
            <FLink href="/contact">Contact Us</FLink>
            <FLink href="https://wa.me/233555284923" external>WhatsApp</FLink>
            <FLink href="mailto:partner@edcomrade.com" external>Email Us</FLink>
          </Col>

          <Col title="Legal">
            <FLink href="#">Privacy Policy</FLink>
            <FLink href="#">Terms of Service</FLink>
            <FLink href="#">Cookies</FLink>
          </Col>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between gap-3">
          <p className="text-[13px] text-white/35">
            © {new Date().getFullYear()} S.A Edcomrade Ventures
          </p>
          <p className="text-[13px] text-white/35">
            Built in Ghana, built for Africa
          </p>
        </div>
      </div>
    </footer>
  );
}
