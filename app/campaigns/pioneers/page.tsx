import React from "react";
import { MinimalNav } from "@/components/minimal-nav";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

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
  const router = useRouter();

  return (
    <main className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50 ">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 ">
          <div
            className="flex items-center h-16 cursor-pointer hover:text-primary transition"
            onClick={() => router.back()}
          >
            <ArrowLeft className="w-6 h-6 mr-2 " />
            <span className="">Go Back</span>
          </div>
        </div>
      </nav>

      <div className="pt-32 pb-24 px-6 lg:px-8">
ffff
      </div>
    </main>
  );
};

export default Pioneers;
