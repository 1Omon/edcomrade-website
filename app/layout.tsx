import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"
import { ScrollProgress } from "@/components/scroll-progress"
import { MobileBottomNav } from "@/components/mobile-bottom-nav"
import { CustomCursor } from "@/components/custom-cursor"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://aceedu.com"),
  title: {
    default: "ACE Educational Systems | Transform Your School with Technology",
    template: "%s | ACE Educational Systems",
  },
  description:
    "Ghana's premier educational technology company. Integrated school management, learning platforms, and marketing solutions that empower schools to operate seamlessly and grow confidently. Join 500+ schools transforming education across Africa.",
  keywords: [
    "school management system Ghana",
    "educational technology Africa",
    "school ERP Ghana",
    "learning management system",
    "school billing software",
    "student information system",
    "school marketing Ghana",
    "education software Africa",
    "school administration software",
    "ACE Educational Systems",
  ],
  authors: [{ name: "ACE Educational Systems" }],
  creator: "ACE Educational Systems",
  publisher: "ACE Educational Systems",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_GH",
    url: "https://aceedu.com",
    title: "ACE Educational Systems | Transform Your School with Technology",
    description:
      "Ghana's premier educational technology company empowering 500+ schools with integrated management, learning, and marketing solutions.",
    siteName: "ACE Educational Systems",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ACE Educational Systems - Transforming Education in Africa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ACE Educational Systems | Transform Your School with Technology",
    description: "Ghana's premier educational technology company empowering 500+ schools with integrated solutions.",
    images: ["/og-image.jpg"],
    creator: "@aceedu",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "ACE Educational Systems",
              description:
                "Ghana's premier educational technology company providing integrated school management, learning platforms, and marketing solutions.",
              url: "https://aceedu.com",
              logo: "https://aceedu.com/logo.png",
              foundingDate: "2019",
              founders: [
                {
                  "@type": "Person",
                  name: "ACE Founding Team",
                },
              ],
              address: {
                "@type": "PostalAddress",
                addressCountry: "GH",
                addressLocality: "Accra",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+233-XX-XXX-XXXX",
                contactType: "Customer Service",
                email: "hello@aceedu.com",
                availableLanguage: ["English", "Twi", "Ga", "Ewe"],
              },
              sameAs: [
                "https://twitter.com/aceedu",
                "https://linkedin.com/company/aceedu",
                "https://facebook.com/aceedu",
              ],
              areaServed: {
                "@type": "Country",
                name: "Ghana",
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
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
