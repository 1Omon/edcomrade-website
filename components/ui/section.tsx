import { cn } from "@/lib/utils";
import React from "react";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    intensity?: "none" | "soft" | "medium" | "strong";
    fullWidth?: boolean;
}

export function Section({
    children,
    className,
    intensity = "none",
    fullWidth = false,
    ...props
}: SectionProps) {
    const intensities = {
        none: "bg-transparent",
        soft: "bg-muted/30",
        medium: "bg-muted/60",
        strong: "bg-primary text-primary-foreground",
    };

    return (
        <section
            className={cn(
                "py-spacing-loose md:py-spacing-xl overflow-hidden",
                intensities[intensity],
                fullWidth ? "w-full" : "",
                className
            )}
            {...props}
        >
            {children}
        </section>
    );
}
