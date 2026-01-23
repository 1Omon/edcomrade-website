import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Manifesto",
    description: "The inevitability of systems. Our commitment to building the digital backbone of African education.",
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
