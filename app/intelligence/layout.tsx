import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Intelligence",
    description: "Global visibility and systemic intelligence for African education. The record of truth for institutions.",
};

export default function IntelligenceLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
