import type { Metadata } from "next";
import ParentAidePageClient from "./parentaide-client";

export const metadata: Metadata = {
  title: "ParentAide | The App for School Parents & Guardians",
  description:
    "Get school fee payments, communication updates, attendance alerts, report cards, and bus tracking in one free app. Built by Edcomrade.",
  openGraph: {
    title: "ParentAide - Everything about your child's school in your pocket",
    description:
      "A free mobile app that connects parents directly to schools. Wallet payment, attendance, grades, and marketplace.",
    images: ["/og-parentaide.jpg"],
  },
};

export default function ParentAidePage() {
  return <ParentAidePageClient />;
}
