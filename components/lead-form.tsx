"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { submitSchoolAction } from "@/app/actions";
import { cn } from "@/lib/utils";

interface LeadFormProps {
    type: "application" | "inquiry" | "partnership" | "pioneer";
    title?: string;
    subtitle?: string;
    className?: string;
}

export function LeadForm({ type, title, subtitle, className }: LeadFormProps) {
    const [isPending, setIsPending] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsPending(true);
        const formData = new FormData(e.currentTarget);
        formData.append("type", type);

        try {
            await submitSchoolAction(formData);
            setIsSuccess(true);
        } catch (error) {
            console.error(error);
            alert("Submission failed. Please try again.");
        } finally {
            setIsPending(false);
        }
    }

    if (isSuccess) {
        return (
            <div className="bg-background border border-border/50 rounded-3xl p-12 text-center space-y-6 animate-in zoom-in duration-500">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-bold">Protocol Received.</h3>
                <p className="text-muted-foreground font-light max-w-sm mx-auto">
                    Our architects have received your request. We will contact your institution shortly.
                </p>
            </div>
        );
    }

    return (
        <div className={cn("bg-background border border-border/50 rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-primary/5", className)}>
            <div className="space-y-4 mb-10">
                <h3 className="text-3xl font-bold tracking-tight">{title || "Start Implementation"}</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                    {subtitle || "Connect your school to the national education backbone."}
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Institution Name</label>
                        <input
                            name="schoolName"
                            required
                            placeholder="e.g. Royal Academy"
                            className="w-full bg-muted/30 border border-border/50 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Admin/Owner Name</label>
                        <input
                            name="contactName"
                            required
                            placeholder="Full Name"
                            className="w-full bg-muted/30 border border-border/50 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        />
                    </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Email Protocol</label>
                        <input
                            name="email"
                            type="email"
                            required
                            placeholder="admin@school.com"
                            className="w-full bg-muted/30 border border-border/50 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Phone Number</label>
                        <input
                            name="phone"
                            placeholder="+233 ..."
                            className="w-full bg-muted/30 border border-border/50 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Additional Context</label>
                    <textarea
                        name="description"
                        rows={3}
                        placeholder="Any specific challenges or goals?"
                        className="w-full bg-muted/30 border border-border/50 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                    />
                </div>

                <Button
                    type="submit"
                    size="xl"
                    disabled={isPending}
                    className="w-full rounded-2xl group relative overflow-hidden h-16 text-lg"
                >
                    {isPending ? (
                        <Loader2 className="w-6 h-6 animate-spin" />
                    ) : (
                        <>
                            Submit to Ledger <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </>
                    )}
                </Button>
            </form>
        </div>
    );
}
