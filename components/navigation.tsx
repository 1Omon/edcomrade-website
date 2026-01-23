"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Ecosystem Layers
  const navLinks = [
    { href: "/schools", label: "School OS", desc: "Digital Infrastructure" },
    { href: "/parents", label: "Parent Network", desc: "Digital Peace of Mind" },
    { href: "/intelligence", label: "Intelligence", desc: "Digital Visibility" },
    { href: "/about", label: "Our Story", desc: "The Mission" },
  ];

  const isDarkPage = pathname === "/campaigns/digital-100";

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-background/80 backdrop-blur-2xl border-b border-border py-4"
          : "bg-transparent py-8",
        isDarkPage && !isScrolled ? "text-white" : ""
      )}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo — The Foundation */}
          <Link href="/" className="flex items-center gap-4 group">
            <div className={cn(
              "w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:rotate-6 shadow-2xl shadow-primary/20",
              isScrolled ? "bg-primary" : "bg-primary"
            )}>
              <span className="text-primary-foreground font-light text-2xl tracking-tighter">EC</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tighter leading-none">EdComrade</span>
              <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-muted-foreground group-hover:text-primary transition-colors">Africa's Education OS</span>
            </div>
          </Link>

          {/* Desktop Navigation — The Network */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-medium transition-all hover:bg-muted/50 group relative",
                  pathname === link.href ? "text-primary" : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary" />
                )}
              </Link>
            ))}
          </div>

          {/* Action — The Execution */}
          <div className="hidden md:flex items-center gap-6">
            <Button variant="ghost" className="text-sm font-semibold" asChild>
              <Link href="/login">Portal</Link>
            </Button>
            <Button variant="premium" className="rounded-full px-8 shadow-xl shadow-primary/10" asChild>
              <Link href="/campaigns/digital-100">Get Digital 100</Link>
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-3 rounded-2xl bg-muted/50 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </Container>

      {/* Mobile Menu — Fullscreen Inevitability */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-0 bg-background/98 z-[100] md:hidden animate-in fade-in slide-in-from-top duration-500">
          <Container className="pt-32 space-y-12">
            <div className="flex flex-col gap-6">
              <span className="text-xs uppercase tracking-[0.5em] font-bold text-muted-foreground mb-4">Ecosystem Layers</span>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center justify-between py-4 border-b border-border group"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="flex flex-col">
                    <span className="text-4xl font-bold tracking-tighter group-active:text-primary transition-colors">{link.label}</span>
                    <span className="text-sm text-muted-foreground">{link.desc}</span>
                  </div>
                  <ChevronRight className="text-muted-foreground group-active:text-primary" />
                </Link>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-4 pt-12">
              <Button variant="outline" size="lg" className="rounded-2xl" asChild>
                <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>Portal</Link>
              </Button>
              <Button variant="premium" size="lg" className="rounded-2xl shadow-2xl" asChild>
                <Link href="/campaigns/digital-100" onClick={() => setIsMobileMenuOpen(false)}>Apply Now</Link>
              </Button>
            </div>
          </Container>
          <button
            className="absolute top-8 right-8 p-4 rounded-full bg-muted/50"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X size={32} />
          </button>
        </div>
      )}
    </nav>
  );
}
