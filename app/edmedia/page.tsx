import type { Metadata } from "next";
import EdMediaPageClient from "./edmedia-client";

export const metadata: Metadata = {
  title: "EdMedia | School Event Coverage, Branding & Magazines",
  description:
    "Promote your institution's excellence. Get professional social media management, cinematic event photography, visual brand guides, and features in Edcomrade Magazine.",
  openGraph: {
    title: "EdMedia - Brand and Media Services for Ghanaian Schools",
    description:
      "Helping schools tell their stories. Event coverage, school magazine spotlights, and social media branding consultations.",
    images: ["/og-edmedia.jpg"],
  },
};

export default function EdMediaPage() {
  return <EdMediaPageClient />;
}
