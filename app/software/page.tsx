import type { Metadata } from "next";
import SoftwareClient from "./software-client";

export const metadata: Metadata = {
  title: "School ERP Systems — Pioneers' Software & Custom App",
  description:
    "Two ways to bring your school into the digital age. Pioneers' Software is free and deploys in weeks. Custom App is a bespoke institutional system built around your school.",
  openGraph: {
    title: "School ERP Systems | Edcomrade",
    description: "Pioneers' Software (free cloud ERP) and Custom App (bespoke institutional system) — built for Ghanaian schools.",
  },
};

export default function SoftwarePage() {
  return <SoftwareClient />;
}
