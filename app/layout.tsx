import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Suspense } from "react";
import { ScrollProgress } from "@/components/scroll-progress";
import { CustomCursor } from "@/components/custom-cursor";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { BackToTop } from "@/components/back-to-top";
import { ExitIntentModal } from "@/components/exit-intent-modal";
import { BackgroundBlobs } from "@/components/ui/background-blobs";
import { Noise } from "@/components/ui/noise";
import { PageTransitionWrapper } from "@/components/ui/page-transition";
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
    default: "EdComrade | Ghana's Private School Platform",
    template: "%s | EdComrade",
  },
  description:
    "Helping private schools in Ghana get found, trusted, and well-run. Join the Digital 100 or Pioneers Programme to transform your school's digital presence and operations.",
  keywords: [
    "school management system Ghana",
    "private school platform Ghana",
    "Digital 100 Ghana",
    "school ERP Ghana",
    "ParentAide",
    "Schoolpedia",
    "school website design Ghana",
    "school marketing Ghana",
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
    title: "EdComrade | Your School, Found and Well-Run",
    description:
      "Helping private schools in Ghana get found, trusted, and well-run.",
    siteName: "EdComrade",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "EdComrade - Your School, Found and Well-Run",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EdComrade | Your School, Found and Well-Run",
    description:
      "Helping private schools in Ghana get found, trusted, and well-run.",
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
              email: "partner@edcomrade.com",
              description:
                "EdComrade is a Ghanaian educational support organisation that helps private schools across Africa get found and trusted by families and run their operations efficiently.",
              slogan: "We digitize. You inspire.",
              tagline:
                "Your School, Found and Well-Run.",
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
                slogan: "We digitize. You inspire.",
              },
              knowsAbout: [
                "Education Technology",
                "School Management Systems",
                "Educational Marketing",
                "Digital Transformation",
                "African Education Infrastructure",
              ],
              makesOffer: [
                {
                  "@type": "Offer",
                  name: "EdComrade Pioneers Programme",
                  description:
                    "Free 6-month access to the full software suite for selected schools.",
                  category: "School Management Software",
                  priceCurrency: "GHS",
                  price: "0",
                  availability: "https://schema.org/InStock",
                },
                {
                  "@type": "Offer",
                  name: "EdComrade Digital 100",
                  description:
                    "A complete digital transformation package covering professional photography, video, website, Google Business Profile, and Schoolpedia listing.",
                  category: "Digital Transformation Package",
                  priceCurrency: "GHS",
                  price: "5000",
                  availability: "https://schema.org/InStock",
                },
              ],
              areaServed: [{ "@type": "Country", name: "Ghana" }],
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <Noise />
        <BackgroundBlobs />
        <CustomCursor />
        <ScrollProgress />
        <Suspense fallback={<LoadingSkeleton />}>
          <PageTransitionWrapper>
            {children}
          </PageTransitionWrapper>
          <Analytics />
        </Suspense>
        <WhatsAppButton />
        <BackToTop />
      </body>
    </html>
  );
}
