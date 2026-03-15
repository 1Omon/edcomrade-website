"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export function BackgroundBlobs() {
    const [isMounted, setIsMounted] = useState(false);
    const { scrollY } = useScroll();

    // Parallax effect for blobs
    const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
    const y2 = useTransform(scrollY, [0, 1000], [0, -200]);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
            {/* Primary Cyan/Blue Blob */}
            <motion.div
                style={{ y: y1 }}
                animate={{
                    x: [0, 100, 0],
                    rotate: [0, 45, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute top-[-10%] left-[-10%] w-[60%] aspect-square bg-primary/10 blur-[120px] rounded-full opacity-40"
            />

            {/* Secondary Zinc/Gray Blob */}
            <motion.div
                style={{ y: y2 }}
                animate={{
                    x: [0, -100, 0],
                    rotate: [0, -30, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute bottom-[-10%] right-[-10%] w-[50%] aspect-square bg-zinc-500/5 blur-[120px] rounded-full opacity-30"
            />

            {/* Accent Blob */}
            <motion.div
                animate={{
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-[40%] right-[20%] w-[30%] aspect-square bg-primary/5 blur-[100px] rounded-full"
            />
        </div>
    );
}
