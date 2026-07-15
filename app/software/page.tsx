import type { Metadata } from "next";
import SoftwarePageClient from "./software-client";

export const metadata: Metadata = {
  title: "Software Offerings | Pioneers' ERP & Custom Apps",
  description:
    "Explore Edcomrade's School ERP systems: Pioneers' Software (free to start cloud ERP with add-on modules) and Custom App (bespoke License-to-own school system on your domain).",
  openGraph: {
    title: "Edcomrade School ERP Software Offerings",
    description:
      "Find the right fit for your school: Pioneers' cloud platform or Custom bespoke school software.",
    images: ["/og-software.jpg"],
  },
};

export default function SoftwarePage() {
  return <SoftwarePageClient />;
}
