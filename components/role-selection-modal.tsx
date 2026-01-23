"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { School, Users, Globe, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export type UserRole = "school" | "parent" | "public" | null;

interface RoleSelectionModalProps {
    onSelect: (role: UserRole) => void;
}

export function RoleSelectionModal({ onSelect }: RoleSelectionModalProps) {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const savedRole = localStorage.getItem("edcomrade_user_role");
        if (!savedRole) {
            const timer = setTimeout(() => setIsOpen(true), 800); // Slightly longer delay for impact
            return () => clearTimeout(timer);
        } else {
            onSelect(savedRole as UserRole);
        }
    }, [onSelect]);

    const handleSelect = (role: UserRole) => {
        localStorage.setItem("edcomrade_user_role", role || "public");
        onSelect(role);
        setIsOpen(false);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full max-w-5xl bg-card border border-border shadow-2xl rounded-[2rem] overflow-hidden"
                    >
                        <div className="grid lg:grid-cols-2">
                            {/* Left: Context */}
                            <div className="p-8 md:p-12 lg:p-16 bg-muted/30 flex flex-col justify-center">
                                <div className="space-y-6">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide uppercase">
                                        Welcome to EdComrade
                                    </div>
                                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.1]">
                                        How should we <br className="hidden lg:block" /> tailor your experience?
                                    </h2>
                                    <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
                                        We are one platform with three distinct interfaces. Select your role to see the most relevant features for you.
                                    </p>
                                </div>
                            </div>

                            {/* Right: Selection */}
                            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center gap-4">
                                <RoleOption
                                    icon={School}
                                    title="School Leader"
                                    desc="I manage an institution."
                                    onClick={() => handleSelect("school")}
                                />
                                <RoleOption
                                    icon={Users}
                                    title="Parent or Guardian"
                                    desc="I have a child in school."
                                    onClick={() => handleSelect("parent")}
                                />
                                <RoleOption
                                    icon={Globe}
                                    title="General Public"
                                    desc="I am exploring education."
                                    onClick={() => handleSelect("public")}
                                />
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

function RoleOption({ icon: Icon, title, desc, onClick }: { icon: any, title: string, desc: string, onClick: () => void }) {
    return (
        <button
            onClick={onClick}
            className="group flex items-center gap-6 p-6 rounded-2xl border border-border bg-background hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 text-left w-full outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
            <div className="w-14 h-14 rounded-2xl bg-muted group-hover:bg-primary/10 group-hover:text-primary flex items-center justify-center transition-colors duration-300 shrink-0">
                <Icon className="w-6 h-6" />
            </div>
            <div className="flex-1">
                <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">{title}</h3>
                <p className="text-muted-foreground text-sm">{desc}</p>
            </div>
            <div className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-primary">
                <Check className="w-5 h-5" />
            </div>
        </button>
    )
}
