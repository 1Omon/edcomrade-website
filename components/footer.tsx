import Link from "next/link";
import Image from "next/image";

function Col({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-[12px] font-bold tracking-wider uppercase text-[#2E8BC0] mb-5">
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
      className="text-[14px] text-white/70 hover:text-white transition-colors"
    >
      {children}
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#1A3C5E] text-white relative overflow-hidden">
      {/* Top clay accent strip */}
      <div className="h-2 w-full bg-gradient-to-r from-[#2E8BC0] via-[#B8973A] to-[#1B5E20]" />

      <div className="max-w-6xl mx-auto px-6 md:px-8 py-16 md:py-20">
        {/* Top grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 pb-14 border-b border-white/10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-block mb-4 opacity-95 hover:opacity-100 transition-opacity">
              <Image
                src="/full-logo.png"
                alt="Edcomrade"
                width={120}
                height={35}
                className="h-8 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-[14px] text-white/60 leading-relaxed max-w-[200px]">
              Your ally in everything education.
            </p>
            {/* Social icons in clay badges */}
            <div className="flex items-center gap-3 mt-6">
              <Link
                href="https://x.com/edcomradegh"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Edcomrade on X"
                className="w-9 h-9 rounded-full bg-[#1E3A52] flex items-center justify-center text-white/80 hover:text-white hover:bg-[#2E8BC0] transition-all text-xs font-bold shadow-sm"
              >
                𝕏
              </Link>
              <Link
                href="https://linkedin.com/company/edcomrade"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Edcomrade on LinkedIn"
                className="w-9 h-9 rounded-full bg-[#1E3A52] flex items-center justify-center text-white/80 hover:text-white hover:bg-[#2E8BC0] transition-all text-xs font-bold shadow-sm"
              >
                in
              </Link>
              <Link
                href="https://instagram.com/edcomradegh"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Edcomrade on Instagram"
                className="w-9 h-9 rounded-full bg-[#1E3A52] flex items-center justify-center text-white/80 hover:text-white hover:bg-[#2E8BC0] transition-all text-xs font-bold shadow-sm"
              >
                IG
              </Link>
            </div>
          </div>

          <Col title="Products">
            <FLink href="/software">Pioneers' Software</FLink>
            <FLink href="/software#custom">Custom App</FLink>
            <FLink href="/parentaide">ParentAide</FLink>
            <FLink href="https://schoolpedia.edcomrade.com" external>Schoolpedia ↗</FLink>
          </Col>

          <Col title="Company">
            <FLink href="/about">About Us</FLink>
            <FLink href="/edmedia">EdMedia</FLink>
            <FLink href="/manifesto">Manifesto</FLink>
            <FLink href="#">Careers</FLink>
          </Col>

          <Col title="Support">
            <FLink href="/contact">Contact Us</FLink>
            <FLink href="https://wa.me/233555284923" external>WhatsApp</FLink>
            <FLink href="mailto:partner@edcomrade.com" external>Email Support</FLink>
          </Col>

          <Col title="Legal">
            <FLink href="#">Privacy Policy</FLink>
            <FLink href="#">Terms of Service</FLink>
            <FLink href="#">Cookies</FLink>
          </Col>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <p className="text-[13px] text-white/45">
            © {new Date().getFullYear()} S.A Edcomrade Ventures. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#1B5E20] inline-block animate-pulse" />
            <p className="text-[13px] text-white/45 font-medium">
              Built in Ghana, built for Africa
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
