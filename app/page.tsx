import type { Metadata } from "next";
import HomePageClient from "@/components/home-page-client";

export const metadata: Metadata = {
  title: "Edcomrade | Your School's Ally in the Digital Age",
  description:
    "Edcomrade modernises schools across Ghana — giving every institution the software, visibility, and parent connectivity it needs to thrive. Pioneers' Software, Schoolpedia, and ParentAide.",
  openGraph: {
    title: "Edcomrade | Your School's Ally in the Digital Age",
    description:
      "School ERP software, Ghana's school discovery platform, and the parent app — built for African education.",
    images: ["/og-home.jpg"],
  },
};

export default function HomePage() {
  return <HomePageClient />;
}