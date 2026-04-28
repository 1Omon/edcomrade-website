"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Check, Archive, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function SubmissionActions({ id, currentStatus }: { id: string; currentStatus: string }) {
    const router = useRouter();
    const [isUpdating, setIsUpdating] = useState<string | null>(null);

    const updateStatus = async (status: string) => {
        setIsUpdating(status);
        try {
            const res = await fetch(`/api/submissions/${id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ status })
            });

            if (res.ok) {
                router.refresh();
            } else {
                alert("Failed to update status");
            }
        } catch (error) {
            console.error(error);
        } finally {
            setIsUpdating(null);
        }
    };

    return (
        <div className="flex gap-2">
            <button
                onClick={() => updateStatus("approved")}
                disabled={isUpdating !== null || currentStatus === "approved"}
                className={cn(
                    "px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2",
                    currentStatus === "approved"
                        ? "bg-green-500/10 text-green-600 border border-green-500/20"
                        : "bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/10"
                )}
            >
                {isUpdating === "approved" ? <Loader2 className="w-3 h-3 animate-spin" /> : <Check className="w-3 h-3" />}
                {currentStatus === "approved" ? "Approved" : "Approve"}
            </button>
            <button
                onClick={() => updateStatus("archived")}
                disabled={isUpdating !== null || currentStatus === "archived"}
                className="px-4 py-2 rounded-lg bg-muted border border-border/50 text-xs font-bold hover:bg-muted/80 transition-colors flex items-center gap-2"
            >
                {isUpdating === "archived" ? <Loader2 className="w-3 h-3 animate-spin" /> : <Archive className="w-3 h-3" />}
                {currentStatus === "archived" ? "Archived" : "Archive"}
            </button>
        </div>
    );
}
