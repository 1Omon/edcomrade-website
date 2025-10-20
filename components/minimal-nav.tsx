"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export function MinimalNav() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const links = [
    { href: "/", label: "Home" },
    { href: "/technology", label: "Technology" },
    { href: "/community", label: "Community" },
    { href: "/pioneer-100", label: "Pioneer 100" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-semibold tracking-tight">
            EdComrade
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-foreground",
                  pathname === link.href ? "text-foreground" : "text-muted-foreground",
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contact"
              className="text-sm font-medium bg-secondary text-secondary-foreground px-4 py-2 rounded-full hover:opacity-90 transition-opacity"
            >
              Get Started
            </Link>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-accent transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border">
          <div className="px-4 py-6 space-y-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "block text-lg font-medium py-2 transition-colors",
                  pathname === link.href ? "text-foreground" : "text-muted-foreground",
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center bg-secondary text-secondary-foreground px-6 py-3 rounded-full text-lg font-medium mt-4"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
