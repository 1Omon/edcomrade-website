import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"
import { CustomCursor } from "@/components/custom-cursor"
import { ScrollProgress } from "@/components/scroll-progress"
import { MobileBottomNav } from "@/components/mobile-bottom-nav"

export const metadata: Metadata = {
  title: "ACE Educational Systems | Transforming Education in Africa",
  description:
    "Integrated software solutions and strategic partnerships that empower schools to operate seamlessly and grow confidently.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <CustomCursor />
        <ScrollProgress />
        <Suspense fallback={<div>Loading...</div>}>
          {children}
          <Analytics />
        </Suspense>
        <MobileBottomNav />
      </body>
    </html>
  )
}
