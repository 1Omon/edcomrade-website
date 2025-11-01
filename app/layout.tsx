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
  metadataBase: new URL("https://edcomrade.com"),
  title: {
    default: "EdComrade | Modernize Your School with Technology and Visibility",
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
    url: "https://edcomrade.com",
    title: "EdComrade | Transform Your School with Technology",
    description:
      "Ghana's premier educational technology company aiming to empower 500+ schools with integrated management, learning, and marketing solutions.",
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
      "Ghana's premier educational technology company aiming to empower 500+ schools with integrated solutions.",
    images: ["/og-image.jpg"],
    creator: "@edcomrade",
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
              name: "EdComrade Ltd.",
              legalName: "EdComrade Ltd.",
              alternateName: ["EdComrade", "EdComrade Ghana"],
              url: "https://edcomrade.com",
              logo: "https://edcomrade.com/full-logo.png",
              foundingDate: "2023",
              founders: [
                {
                  "@type": "Person",
                  name: "Solomon Annan Ayisi",
                  jobTitle: "Co-founder & CEO",
                  nationality: "Ghanaian",
                },
                {
                  "@type": "Person",
                  name: "Prince Sarfo",
                  jobTitle: "Co-founder & CTO",
                  nationality: "Ghanaian",
                },
              ],
              foundingLocation: {
                "@type": "Place",
                name: "Accra, Ghana",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Accra",
                addressCountry: "GH",
              },
              email: "edcomrade.gh@gmail.com",
              description:
                "EdComrade Ltd. is Africa’s Education Innovation & Infrastructure Company — the operating system where schools become unstoppable. We provide intelligent ERP systems, media solutions, and digital transformation for private schools across Africa.",
              slogan: "We digitize schools.",
              tagline:
                "The Operating System where African schools become unstoppable.",
              sameAs: [
                "https://www.linkedin.com/company/edcomradegh",
                "https://www.facebook.com/edcomrade",
                "https://x.com/edcomradegh",
                "https://instagram.com/edcomradegh",
              ],
              brand: {
                "@type": "Brand",
                name: "EdComrade",
                logo: "https://edcomrade.com/logo-icon.png",
                slogan: "We digitize schools.",
              },
              knowsAbout: [
                "Education Technology",
                "School Management Systems",
                "Educational Marketing",
                "Digital Transformation",
                "African Education Infrastructure",
                "Learning Management Systems",
                "AI in Education",
                "Educational Media Production",
              ],
              makesOffer: [
                {
                  "@type": "Offer",
                  name: "EdComrade ERP System",
                  description:
                    "A modular, cloud-based ERP system that automates school operations, integrates parents, and simplifies administration.",
                  category: "School Management Software",
                  priceCurrency: "GHS",
                  price: "5000-12000",
                  availability: "https://schema.org/InStock",
                },
                {
                  "@type": "Offer",
                  name: "EdComrade Media",
                  description:
                    "A professional school media and marketing package — including photography, videography, digital advertising, and storytelling.",
                  category: "Media Production Service",
                  priceCurrency: "GHS",
                  price: "3500",
                  availability: "https://schema.org/InStock",
                },
              ],
              areaServed: [{ "@type": "Country", name: "Ghana" }],
              keywords: [
                "EdComrade",
                "School ERP Ghana",
                "Education Technology Africa",
                "Private School Digitization",
                "EdTech Ghana",
                "African School Infrastructure",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
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
