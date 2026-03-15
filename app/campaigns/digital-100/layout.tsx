import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Digital 100 | Transform Your School's Digital Presence",
    description: "Join the cohort of 100 schools selected for a complete digital transformation. Professional media, custom website, and verified visibility.",
};

export default function Digital100Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
