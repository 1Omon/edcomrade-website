import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Architecture & Technology",
    description: "The technical backbone of African education. Explore the interoperable OS protocol that connects visibility, trust, and intelligence.",
};

export default function TechnologyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
