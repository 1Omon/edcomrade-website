"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Lock } from "lucide-react";

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
        <div style={{ background: "var(--paper)", minHeight: "100vh" }} className="flex flex-col justify-between p-6">
            <div className="flex justify-between items-center max-w-6xl w-full mx-auto">
                <Link href="/" className="flex items-center gap-3">
                    <Image
                        src="/full-logo.png"
                        alt="EdComrade"
                        width={130}
                        height={32}
                        style={{ height: 28, width: "auto" }}
                    />
                </Link>
                <Link href="/" className="text-xs font-semibold text-[var(--navy)] flex items-center gap-1 hover:text-[var(--cyan)] transition-colors">
                    <ArrowLeft size={14} /> Back to Website
                </Link>
            </div>

            <div className="max-w-md w-full mx-auto card p-8 bg-white shadow-xl my-8">
                <div className="text-center mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-[var(--navy-dark)] flex items-center justify-center text-white mx-auto mb-4">
                        <Lock size={20} color="var(--gold)" />
                    </div>
                    <span className="badge badge-gold mb-2">RESTRICTED ACCESS</span>
                    <h1 className="text-2xl font-bold tracking-tight text-[var(--navy)]">Admin Authentication</h1>
                    <p className="text-[var(--ink-mid)] text-sm mt-1">Sign in to access the platform console</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-5">
                    {error && (
                        <div className="p-3 bg-red-50 text-red-600 text-xs font-semibold rounded-lg text-center border border-red-100">
                            {error}
                        </div>
                    )}
                    <div>
                        <label className="text-xs font-bold text-[var(--navy)] uppercase tracking-wider block mb-2">Administrative Email</label>
                        <input 
                            type="email" 
                            className="w-full bg-[var(--paper-tint)] border border-[var(--rule)] rounded-xl p-3 text-sm focus:ring-2 focus:ring-[var(--navy)]/20 outline-none transition-all text-[var(--navy)]"
                            placeholder="admin@edcomrade.com"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label className="text-xs font-bold text-[var(--navy)] uppercase tracking-wider block mb-2">Password</label>
                        <input 
                            type="password" 
                            className="w-full bg-[var(--paper-tint)] border border-[var(--rule)] rounded-xl p-3 text-sm focus:ring-2 focus:ring-[var(--navy)]/20 outline-none transition-all text-[var(--navy)]"
                            placeholder="••••••••••••"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn-primary w-full justify-center py-3 text-sm" disabled={isLoading}>
                        {isLoading ? "Authenticating..." : "Sign In to Console"}
                    </button>
                </form>
            </div>

            <div className="text-center text-xs text-[var(--ink-mid)]">
                &copy; {new Date().getFullYear()} Edcomrade Platform Systems. All rights reserved.
            </div>
        </div>
    );
}
