
import type { Metadata } from "next";
import HomePageClient from "@/components/home-page-client";

export const metadata: Metadata = {
  title: "EdComrade | Your School, Found and Well-Run",
  description:
    "EdComrade is building Ghana's digital education future — giving private schools visibility, systems, and intelligence to operate like 21st‑century institutions.",
  openGraph: {
    title: "EdComrade | We digitize. You inspire.",
    description:
      "An ecosystem that merges storytelling, software, and systems to make excellence visible.",
    images: ["/og-home.jpg"],
  },
};

export default function HomePage() {
  return <HomePageClient />;
}