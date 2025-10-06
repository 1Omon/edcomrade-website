import type React from "react"
import { cn } from "@/lib/utils"

interface GlassmorphismCardProps {
  children: React.ReactNode
  className?: string
}

export function GlassmorphismCard({ children, className }: GlassmorphismCardProps) {
  return (
    <div
      className={cn(
        "relative backdrop-blur-xl bg-background/60 border border-border/50 rounded-3xl shadow-2xl",
        "before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-br before:from-primary/5 before:to-secondary/5 before:opacity-50",
        className,
      )}
    >
      <div className="relative z-10">{children}</div>
    </div>
  )
}
