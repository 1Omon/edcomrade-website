import { Metadata } from "next";

export const metadata: Metadata = {
    title: "EdComrade | Stay Connected to Your Child's School",
    description: "ParentAide gives you a real-time window into your child's education. Grades, attendance, and fees — all in one place.",
};

export default function ParentsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
