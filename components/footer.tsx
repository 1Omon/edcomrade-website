import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { BsInstagram, BsLinkedin, BsTwitterX } from "react-icons/bs";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border/50 pt-20 pb-12 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Architectural Breadcrumb Protocol */}
        <div className="flex items-center gap-2 text-[12px] text-muted-foreground/40 font-medium mb-12 py-4 border-b border-border/30">
          <Link href="/" className="hover:text-foreground transition-colors">EdComrade Architecture</Link>
          <span>/</span>
          <span className="text-muted-foreground/60">Ecosystem Ledger</span>
        </div>

        {/* Branding & Logo Protocol */}
        <div className="mb-16">
          <Link href="/" className="opacity-80 hover:opacity-100 transition-opacity">
            <Image
              src="/full-logo.png"
              alt="EdComrade"
              width={160}
              height={30}
              className="grayscale brightness-0 dark:invert w-auto h-8"
            />
          </Link>
          <div className="mt-4 border-b border-border/50 pb-8">
            <p className="text-sm text-muted-foreground font-light tracking-tight max-w-sm">
              The Architecture of Africa's Educational Digital Sovereignty.
            </p>
          </div>
        </div>

        {/* Apple-style Columnar Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20 animate-in fade-in slide-in-from-bottom-5 duration-700">
          <FooterColumn title="Platform">
            <FooterLink href="/schools">School OS</FooterLink>
            <FooterLink href="/parents">Parent Network</FooterLink>
            <FooterLink href="/intelligence">Intelligence Layer</FooterLink>
            <FooterLink href="/how-it-works">The Roadmap</FooterLink>
          </FooterColumn>

          <FooterColumn title="Ecosystem">
            <FooterLink href="/campaigns/digital-100">Digital 100</FooterLink>
            <FooterLink href="/schoolpedia">Schoolpedia</FooterLink>
            <FooterLink href="/campaigns">Open Campaigns</FooterLink>
            <FooterLink href="/community">Community</FooterLink>
          </FooterColumn>

          <FooterColumn title="Architecture">
            <FooterLink href="/manifesto">Manifesto</FooterLink>
            <FooterLink href="/technology">Core Stack</FooterLink>
            <FooterLink href="/partners">Partnerships</FooterLink>
            <FooterLink href="/careers">Opportunity</FooterLink>
          </FooterColumn>

          <FooterColumn title="Contact">
            <FooterLink href="mailto:info@edcomrade.com">Deployment Support</FooterLink>
            <FooterLink href="tel:+233555284923">Inquiry Protocol</FooterLink>
            <FooterLink href="/contact">General Outreach</FooterLink>
          </FooterColumn>

          <FooterColumn title="Nodes" className="col-span-2 md:col-span-1">
            <div className="space-y-4">
              <p className="text-[11px] text-muted-foreground uppercase tracking-widest font-bold">Headquarters</p>
              <address className="not-italic text-sm text-muted-foreground font-light space-y-1">
                <p>Accra Protocol Hub</p>
                <p>Ghana, West Africa</p>
              </address>
              <div className="flex gap-4 pt-4">
                <SocialLink href="https://x.com/edcomradegh" icon={BsTwitterX} />
                <SocialLink href="https://linkedin.com/company/edcomrade" icon={BsLinkedin} />
                <SocialLink href="https://instagram.com/edcomradegh" icon={BsInstagram} />
              </div>
            </div>
          </FooterColumn>
        </div>

        {/* Legal & Utility Protocol */}
        <div className="pt-12 border-t border-border/50">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
            <div className="flex flex-wrap items-center gap-x-8 gap-y-2 text-[12px] text-muted-foreground/60 font-light">
              <span>© 2026 EdComrade Architecture.</span>
              <FooterLink href="#" isLegal>Privacy Policy</FooterLink>
              <FooterLink href="#" isLegal>Terms of Service</FooterLink>
              <FooterLink href="#" isLegal>Cookie Ledger</FooterLink>
              <FooterLink href="#" isLegal>Verification Standards</FooterLink>
            </div>

            <div className="text-[12px] text-muted-foreground/40 font-bold uppercase tracking-widest">
              Built for African Inevitability
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children, className }: { title: string, children: React.ReactNode, className?: string }) {
  return (
    <div className={cn("space-y-5", className)}>
      <h4 className="text-[12px] font-bold tracking-[0.2em] uppercase text-foreground/80">{title}</h4>
      <nav className="flex flex-col space-y-3">
        {children}
      </nav>
    </div>
  );
}

function FooterLink({ href, children, isLegal = false }: { href: string, children: React.ReactNode, isLegal?: boolean }) {
  return (
    <Link
      href={href}
      className={cn(
        "transition-colors hover:text-primary",
        isLegal ? "hover:underline" : "text-sm text-muted-foreground hover:translate-x-1 transition-transform inline-block"
      )}
    >
      {children}
    </Link>
  );
}

function SocialLink({ href, icon: Icon }: { href: string, icon: any }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-muted-foreground/50 hover:text-primary transition-colors transition-transform hover:-translate-y-1"
    >
      <Icon className="w-5 h-5" />
    </Link>
  );
}
