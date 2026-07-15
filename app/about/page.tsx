import type { Metadata } from "next";
import AboutPageClient from "./about-client";

export const metadata: Metadata = {
  title: "About Us | Our Founding Story & Vision",
  description:
    "How a KNUST CS student's frustrating school enrollment experience turned into Edcomrade — Ghana's modern school software ecosystem. Read our founding story and three growth horizons.",
  openGraph: {
    title: "About Edcomrade - Built in Ghana, for Africa",
    description:
      "The story of Solomon A. Ayisi and Prince Sarfo building a modern digital school ERP ecosystem for African education.",
    images: ["/og-about.jpg"],
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}
