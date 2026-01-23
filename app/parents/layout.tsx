import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Parent Network",
    description: "Digital peace of mind and direct engagement. A verified window into your child's educational journey.",
};

export default function ParentsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
