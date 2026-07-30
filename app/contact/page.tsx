import type { Metadata } from "next";
import ContactPageClient from "./contact-client";

export const metadata: Metadata = {
  title: "Contact Us | Edcomrade Partnerships & Support",
  description:
    "Get in touch with the Edcomrade team. Submit a general query, partner with EduMedia, request a Custom App demo, or get support for the School Administration Module.",
  openGraph: {
    title: "Contact Edcomrade - We are here for you",
    description:
      "Have questions? Reach out to Edcomrade for support, partnerships, or school software onboarding.",
    images: ["/og-contact.jpg"],
  },
};

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function ContactPage({ searchParams }: Props) {
  const resolvedSearchParams = await searchParams;
  const rawSubject = resolvedSearchParams.subject;
  const initialSubject = typeof rawSubject === "string" ? rawSubject : "";

  return <ContactPageClient initialSubject={initialSubject} />;
}
