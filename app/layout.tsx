import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { BackToTop } from "@/components/back-to-top";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://edcomrade.com"),
  title: {
    default: "Edcomrade | Your Ally in Everything Education",
    template: "%s | Edcomrade",
  },
  description:
    "Edcomrade modernises schools across Ghana — giving every institution the software, visibility, and parent connectivity it needs to thrive.",
  keywords: [
    "school management system Ghana",
    "private school platform Ghana",
    "school ERP Ghana",
    "ParentAide",
    "Schoolpedia",
    "Pioneers Software",
    "school website Ghana",
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
    title: "Edcomrade | Your Ally in Everything Education",
    description: "School ERP software, Ghana's school discovery platform, and the parent app — built for African education.",
    siteName: "Edcomrade",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Edcomrade" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Edcomrade | Your Ally in Everything Education",
    description: "School ERP software, Ghana's school discovery platform, and the parent app — built for African education.",
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
    <html lang="en">
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
              slogan: "Your ally in everything education.",
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
      <body className={`${inter.variable} font-sans antialiased`} suppressHydrationWarning>
        {children}
        <WhatsAppButton />
        <BackToTop />
        <Analytics />
      </body>
    </html>
  );
}
