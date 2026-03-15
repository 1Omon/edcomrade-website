import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "EdComrade | How We Help Schools and Families",
    description: "One ecosystem. Three tools working together to help private schools in Ghana get found, stay organized, and build trust with parents.",
};

export default function HowItWorksLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
