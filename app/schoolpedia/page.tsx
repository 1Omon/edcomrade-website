import type { Metadata } from "next";
import SchoolpediaPageClient from "./schoolpedia-client";

export const metadata: Metadata = {
  title: "Schoolpedia | Discover and Compare Verified Schools in Ghana",
  description:
    "Find your neighborhood's best private schools. Research verified profiles on school fees, exam results, and curricula on Ghana's school intelligence directory.",
  openGraph: {
    title: "Schoolpedia - Find and Compare Schools in Ghana",
    description:
      "A verified public directory map of Ghanaian schools. Compare fee structures, facilities, and curricula before enrolling.",
    images: ["/og-schoolpedia.jpg"],
  },
};

export default function SchoolpediaPage() {
  return <SchoolpediaPageClient />;
}
