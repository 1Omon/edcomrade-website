"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function AdminLogin() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");

        const result = await signIn("credentials", {
            redirect: false,
            email,
            password
        });

        if (result?.error) {
            setError(result.error);
            setIsLoading(false);
        } else {
            router.push("/admin/submissions");
            router.refresh();
        }
    };

    return (
        <div className="min-h-screen bg-muted/20 flex items-center justify-center p-4">
            <div className="max-w-md w-full bg-background border border-border/50 rounded-3xl p-8 shadow-2xl">
                <div className="text-center mb-8">
                    <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                        EC
                    </div>
                    <h1 className="text-2xl font-bold tracking-tight">Admin Login</h1>
                    <p className="text-muted-foreground text-sm mt-1">Sign in to your dashboard</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-6">
                    {error && (
                        <div className="p-3 bg-red-50 text-red-600 text-sm rounded-lg text-center">
                            {error}
                        </div>
                    )}
                    <div>
                        <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider block mb-2">Email</label>
                        <input 
                            type="email" 
                            className="w-full bg-muted/50 border border-border/50 rounded-lg p-3 text-sm focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider block mb-2">Password</label>
                        <input 
                            type="password" 
                            className="w-full bg-muted/50 border border-border/50 rounded-lg p-3 text-sm focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <Button type="submit" className="w-full" disabled={isLoading}>
                        {isLoading ? "Signing in..." : "Sign In"}
                    </Button>
                </form>
            </div>
        </div>
    );
}
