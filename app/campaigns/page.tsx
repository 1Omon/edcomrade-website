import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ArrowRight, Sparkles, Award, Globe, Star, Trophy } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Campaigns | Digital 100 & Pioneer 10",
  description: "Exclusive opportunities for schools in Ghana to accelerate their digital transformation.",
};

export default function CampaignsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* HERO */}
      <section className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            Limited Time Initiatives
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Define Your School's <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Digital Legacy
            </span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            We are selecting a limited cohort of schools to lead Ghana's education revolution.
            Join the movement through our two flagship campaigns.
          </p>
        </div>
      </section>

      {/* DIGITAL 100 */}
      <section className="py-24 px-6 lg:px-8 bg-black text-white overflow-hidden relative">
        {/* Background blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl opacity-30"></div>

        <div className="max-w-6xl mx-auto relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-block px-3 py-1 rounded-full border border-white/20 text-white text-sm font-medium">
              For Meaningful Visibility
            </div>

            <h2 className="text-4xl md:text-6xl font-bold">
              The Digital 100
            </h2>

            <p className="text-xl text-gray-300 leading-relaxed font-light">
              We are identifying the top 100 private schools ready for the global stage.
              This campaign focuses on one thing: <span className="text-white font-bold">Unignorable Visibility.</span>
            </p>

            <ul className="space-y-4 text-gray-400">
              <li className="flex gap-4 items-start">
                <Globe className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h4 className="text-white font-medium">Global web presence</h4>
                  <p className="text-sm">A custom, high-performance website that captures your school's unique culture.</p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <Star className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h4 className="text-white font-medium">Schoolpedia Verification</h4>
                  <p className="text-sm">Instant "Blue Tick" status and priority ranking on Ghana's search engine.</p>
                </div>
              </li>
            </ul>

            <div className="pt-4">
              <Link
                href="/campaigns/digital-100"
                className="bg-white text-black px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-200 transition-colors inline-flex items-center gap-2"
              >
                Join Digital 100
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="relative h-[500px] rounded-2xl overflow-hidden border border-white/10">
            <Image
              src="/diverse-group-of-african-students-from-different-s.jpeg"
              alt="Students Digital 100"
              fill
              className="object-cover opacity-80"
            />
            <div className="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-full font-bold shadow-lg">
              84 / 100 Spots Taken
            </div>
          </div>
        </div>
      </section>

      {/* PIONEER 10 */}
      <section className="py-24 px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          <div className="order-2 lg:order-1 relative h-[500px] rounded-2xl overflow-hidden border border-secondary/20 shadow-2xl">
            <Image
              src="/african-teachers-in-professional-development-works.jpg"
              alt="Teachers Pioneer 10"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="absolute bottom-8 left-8 text-white max-w-sm">
              <p className="text-lg font-medium">"Our operations transformed overnight. It felt like we jumped 10 years into the future."</p>
              <p className="text-sm opacity-70 mt-2">— Principal, Pioneer School #001</p>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-6">
            <div className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary-foreground text-sm font-medium">
              For Complete Transformation
            </div>

            <h2 className="text-4xl md:text-6xl font-bold">
              The Pioneer 10
            </h2>

            <p className="text-xl text-muted-foreground leading-relaxed font-light">
              This is our most exclusive partnership. We select 10 visionary schools per region to receive our entire ecosystem:
              <span className="text-foreground font-medium"> ERP, App, and Marketing</span> at a subsidized pilot rate.
            </p>

            <ul className="space-y-4 text-muted-foreground">
              <li className="flex gap-4 items-start">
                <Trophy className="w-6 h-6 text-secondary-foreground mt-1" />
                <div>
                  <h4 className="text-foreground font-medium">Full EdComrade Ecosystem</h4>
                  <p className="text-sm">School ERP + ParentAide App + Schoolpedia Listing + Website.</p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <Globe className="w-6 h-6 text-secondary-foreground mt-1" />
                <div>
                  <h4 className="text-foreground font-medium">Lifetime Legacy Pricing</h4>
                  <p className="text-sm">Lock in our "Founding Member" rates forever, regardless of future price increases.</p>
                </div>
              </li>
            </ul>

            <div className="pt-4">
              <Link
                href="/#contact"
                className="bg-secondary text-secondary-foreground px-8 py-4 rounded-full text-lg font-bold hover:shadow-lg transition-all inline-flex items-center gap-2"
              >
                Apply for Pioneer Status
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
