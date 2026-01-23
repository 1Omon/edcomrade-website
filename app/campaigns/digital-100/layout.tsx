import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Digital 100",
    description: "The cohort for institutional inevitability. Selection of 100 schools for total infrastructure transformation.",
};

export default function Digital100Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
