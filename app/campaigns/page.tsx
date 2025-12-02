import { MinimalNav } from "@/components/minimal-nav";
import { Footer } from "@/components/footer";
import { ArrowRight, Sparkles, Award, Globe, Star } from "lucide-react";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://edcomrade.com"),
  title: {
    default:
      "EdComrade Campaigns | Digital 100 & Pioneer 10 – Ghana’s Leading School Transformation Initiatives",
    template: "%s | EdComrade Campaigns",
  },
  description:
    "Join EdComrade’s Digital 100 and Pioneer 10 campaigns — limited opportunities for schools in Ghana to gain massive online visibility, modern school websites, Schoolpedia ranking, media coverage, and full digital transformation.",
  keywords: [
    "school management system Ghana",
    "school ERP Ghana",
    "school software Ghana",
    "best school software Ghana",
    "Schoolpedia Ghana",
    "private schools Ghana",
    "digital transformation schools",
    "EdComrade Digital 100",
    "EdComrade Pioneer 10",
    "school website Ghana",
    "school listing Ghana",
    "how to promote a school Ghana",
    "school publicity Ghana",
    "school media coverage Ghana",
    "school operations software",
    "EdComrade campaigns",
  ],
  openGraph: {
    type: "website",
    locale: "en_GH",
    url: "https://edcomrade.com/campaigns",
    title:
      "EdComrade Campaigns – Digital 100 & Pioneer 10 | Transform Your School Today",
    description:
      "Limited campaigns for schools seeking visibility, credibility, and operational excellence. Early schools receive Schoolpedia ranking advantages, websites, and complete digital transformation support.",
    siteName: "EdComrade",
    images: [
      {
        url: "/og-campaigns.jpg",
        width: 1200,
        height: 630,
        alt: "EdComrade Campaigns – Digital 100 and Pioneer 10",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "EdComrade Campaigns – Digital 100 & Pioneer 10 | School Visibility & Digital Transformation",
    description:
      "Exclusive campaigns for schools in Ghana. Get a modern website, Schoolpedia visibility, ERP tools, and priority ranking.",
    images: ["/og-campaigns.jpg"],
    creator: "@edcomrade",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://edcomrade.com/campaigns",
  },
};

export default function CampaignsPage() {
  return (
    <main className="min-h-screen bg-background">
      <MinimalNav />

      {/* HERO */}
      <section className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            Special Campaigns
          </div>

          <h1 className="text-5xl md:text-6xl font-light tracking-tight">
            Be among the first schools shaping <br />
            <span className="text-primary font-medium">
              the future of education
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Two exclusive opportunities designed for forward-thinking schools to
            boost visibility, modernize operations, and lead Ghana's digital
            transformation.
          </p>
        </div>
      </section>

      {/* DIGITAL 100 */}
      <section className="py-24 px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Text */}
          <div className="space-y-6">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
              Digital 100
            </div>

            <h2 className="text-4xl md:text-5xl font-light">
              Become one of Ghana’s{" "}
              <span className="font-medium">most visible schools</span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              The Digital 100 campaign gives the first 100 schools priority
              Schoolpedia placement, a modern school website, and a permanent
              visibility advantage.
            </p>

            <ul className="space-y-4 text-muted-foreground">
              <li className="flex gap-3">
                <Globe className="w-5 h-5 text-primary mt-1" />
                <span>Verified Schoolpedia listing with SEO optimization</span>
              </li>
              <li className="flex gap-3">
                <Star className="w-5 h-5 text-primary mt-1" />
                <span>
                  Custom cinematic website built specifically for your school
                </span>
              </li>
              <li className="flex gap-3">
                <Award className="w-5 h-5 text-primary mt-1" />
                <span>Priority ranking over new listings — forever</span>
              </li>
            </ul>

            <p className="text-lg font-medium">
              Only <span className="text-primary">100 schools</span> will
              receive this offer.
            </p>
          </div>

          {/* Visual */}
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-12 rounded-3xl border border-primary/20">
            <div className="space-y-6">
              <h3 className="text-2xl font-light">Why join now?</h3>

              <div className="space-y-3">
                {[
                  "Parents now search online before choosing a school",
                  "Strong digital identity increases admissions",
                  "Visibility advantages compound over time",
                  "Being early locks in permanent benefits",
                ].map((reason, i) => (
                  <div
                    key={i}
                    className="bg-background rounded-lg p-4 text-muted-foreground"
                  >
                    {reason}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PIONEER 10 */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Visual */}
          <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 p-12 rounded-3xl border border-secondary/20">
            <div className="space-y-6">
              <h3 className="text-2xl font-light">Exclusive Benefits</h3>

              <div className="space-y-3">
                {[
                  "Full EdComrade ERP + Parent Portal",
                  "Media coverage and brand storytelling",
                  "Locked-in future pricing",
                  "Dedicated priority support",
                ].map((benefit, i) => (
                  <div
                    key={i}
                    className="bg-background rounded-lg p-4 text-muted-foreground"
                  >
                    {benefit}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Text */}
          <div className="space-y-6">
            <div className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium">
              Pioneer 10
            </div>

            <h2 className="text-4xl md:text-5xl font-light">
              Become one of the{" "}
              <span className="font-medium">
                first 10 fully digital schools
              </span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              The Pioneer 10 are the first schools to adopt Schoolpedia, modern
              media coverage, a cinematic website, and full EdComrade ERP
              operations — becoming national models for digital excellence.
            </p>

            <p className="text-lg font-medium">
              Only <span className="text-secondary">10 visionary schools</span>{" "}
              will be selected.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-muted/50 to-muted/30 rounded-3xl p-12 space-y-8">
            <h2 className="text-4xl md:text-5xl font-light">
              Ready to join the future of education?
            </h2>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Secure your spot in one of our limited campaigns and unlock
              visibility, credibility, and operational excellence.
            </p>
            <div className="w-full flex items-center justify-center gap-x-4">
              <Link
                href="/#contact"
                className="bg-secondary text-secondary-foreground px-8 py-4 rounded-full text-lg font-medium hover:opacity-90 transition-opacity inline-flex items-center gap-2 shadow-lg"
              >
                Join The Pioneers
                {/* <ArrowRight className="w-5 h-5" /> */}
              </Link>
              <Link
                href="/campaigns/digital-100"
                className="bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-medium hover:opacity-90 transition-opacity inline-flex items-center gap-2 shadow-lg"
              >
                Join Digital-100
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
