import type React from "react";
import type { Metadata } from "next";
import { Playfair_Display, Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { BackToTop } from "@/components/back-to-top";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://edcomrade.com"),
  title: {
    default: "Edcomrade | Education's Ally in the Digital Age",
    template: "%s | Edcomrade",
  },
  description:
    "Edcomrade gives Ghanaian schools the tools to run well, the visibility to be found, and the media to be known. Broadest educational publication & software platform in West Africa.",
  keywords: [
    "school management system Ghana",
    "private school platform Ghana",
    "school ERP Ghana",
    "ParentAide",
    "Schoolpedia",
    "Pioneers Software",
    "EdMedia",
    "Edcomrade",
  ],
  authors: [{ name: "Edcomrade" }],
  creator: "Edcomrade",
  publisher: "Edcomrade",
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: "website",
    locale: "en_GH",
    url: "https://edcomrade.com",
    title: "Edcomrade | Education's Ally in the Digital Age",
    description: "School ERP software, Ghana's school discovery platform, and the media publication — built for African education.",
    siteName: "Edcomrade",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Edcomrade" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Edcomrade | Education's Ally in the Digital Age",
    description: "School ERP software, Ghana's school discovery platform, and the media publication — built for African education.",
    images: ["/og-image.jpg"],
    creator: "@edcomradegh",
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
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${jetbrains.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "S.A Edcomrade Ventures",
              alternateName: ["Edcomrade", "Edcomrade Ghana"],
              url: "https://edcomrade.com",
              logo: "https://edcomrade.com/full-logo.png",
              foundingDate: "2023",
              founders: [
                { "@type": "Person", name: "Solomon A. Ayisi", jobTitle: "CEO & Founder" },
                { "@type": "Person", name: "Prince Sarfo", jobTitle: "CTO & Co-Founder" },
              ],
              foundingLocation: { "@type": "Place", name: "Accra, Ghana" },
              address: { "@type": "PostalAddress", addressLocality: "Accra", addressCountry: "GH" },
              email: "partner@edcomrade.com",
              description: "Edcomrade modernises African schools through ERP software, school discovery, and parent connectivity.",
              slogan: "Education's ally in the digital age.",
              sameAs: [
                "https://linkedin.com/company/edcomrade",
                "https://x.com/edcomradegh",
                "https://instagram.com/edcomradegh",
              ],
              areaServed: [{ "@type": "Country", name: "Ghana" }],
            }),
          }}
        />
      </head>
      <body className="bg-[var(--color-paper)] text-[var(--color-ink)] font-sans antialiased" suppressHydrationWarning>
        {children}
        <WhatsAppButton />
        <BackToTop />
        <Analytics />
      </body>
    </html>
  );
}
