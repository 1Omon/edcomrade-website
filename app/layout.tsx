import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Suspense } from "react";
import { ScrollProgress } from "@/components/scroll-progress";
import { MobileBottomNav } from "@/components/mobile-bottom-nav";
import { CustomCursor } from "@/components/custom-cursor";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { BackToTop } from "@/components/back-to-top";
import { ExitIntentModal } from "@/components/exit-intent-modal";
import { LoadingSkeleton } from "@/components/loading-skeleton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aceedu.com"),
  title: {
    default: "EdComrade | Transform Your School with Technology",
    template: "%s | EdComrade",
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
    "EdComrade",
  ],
  authors: [{ name: "EdComrade" }],
  creator: "EdComrade",
  publisher: "EdComrade",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_GH",
    url: "https://aceedu.com",
    title: "EdComrade | Transform Your School with Technology",
    description:
      "Ghana's premier educational technology company empowering 500+ schools with integrated management, learning, and marketing solutions.",
    siteName: "EdComrade",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "EdComrade - Transforming Education in Africa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EdComrade | Transform Your School with Technology",
    description:
      "Ghana's premier educational technology company empowering 500+ schools with integrated solutions.",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
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
              name: "EdComrade",
              description:
                "Ghana's premier educational technology company providing integrated school management, learning platforms, and marketing solutions.",
              url: "https://aceedu.com",
              logo: "https://aceedu.com/logo.png",
              foundingDate: "2022",
              founders: [
                {
                  "@type": "Person",
                  name: "EdComrade Founding Team",
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
        <Suspense fallback={<LoadingSkeleton />}>
          {children}
          <Analytics />
        </Suspense>
        <MobileBottomNav />
        <WhatsAppButton />
        <BackToTop />
        <ExitIntentModal />
      </body>
    </html>
  );
}
