import { Metadata } from "next";

export const metadata: Metadata = {
    title: "School OS",
    description: "The infrastructure layer for institutional control, fee integrity, and visibility. Deploy the operating system for your school.",
};

export default function SchoolsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
