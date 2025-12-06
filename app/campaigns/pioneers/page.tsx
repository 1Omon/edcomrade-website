import React from "react";
import { MinimalNav } from "@/components/minimal-nav";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import GoBackNavigation from "@/components/go-back-navigation";

export const metadata: Metadata = {
  title: "Campaigns | Join Our Exclusive Network",
  description:
    "More than technology — a movement of schools rising together. Join a vibrant network of educators across Africa for visibility, collaboration and growth.",
  openGraph: {
    title: "EdComrade Community | Schools rising together",
    description:
      "A collaborative network powering visibility, storytelling, and shared growth for African schools.",
    images: ["/og-community.jpg"],
  },
};

const Pioneers = () => {
  return (
    <main className="min-h-screen bg-background">
      <GoBackNavigation />

      <div className="pt-32 pb-24 px-6 lg:px-8"></div>
    </main>
  );
};

export default Pioneers;
