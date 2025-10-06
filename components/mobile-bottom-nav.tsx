"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Users, Info, Cpu } from "lucide-react"
import { cn } from "@/lib/utils"

export function MobileBottomNav() {
  const pathname = usePathname()

  const links = [
    { href: "/", label: "Home", icon: Home },
    { href: "/about", label: "About", icon: Info },
    { href: "/community", label: "Community", icon: Users },
    { href: "/technology", label: "Tech", icon: Cpu },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-t border-border md:hidden pb-safe">
      <div className="flex items-center justify-around h-16 px-2">
        {links.map((link) => {
          const Icon = link.icon
          const isActive = pathname === link.href

          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "flex flex-col items-center justify-center gap-1 flex-1 py-2 px-1 rounded-lg transition-colors min-h-[60px]",
                isActive ? "text-primary bg-primary/10" : "text-muted-foreground active:bg-accent",
              )}
            >
              <Icon className="w-5 h-5" />
              <span className="text-xs font-medium">{link.label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
