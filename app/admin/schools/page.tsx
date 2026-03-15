import React from "react";
import Link from "next/link";
import { headers } from "next/headers";
import { cn } from "@/lib/utils";

async function getSchools(q?: string) {
    const h = headers();
    const proto = (await h).get('x-forwarded-proto') || 'http';
    const host = (await h).get('host') || 'localhost:3000';
    const base = `${proto}://${host}`;
    const path = `${base}/api/schools${q ? `?q=${encodeURIComponent(q)}` : ''}`
    const res = await fetch(path, { cache: 'no-store' });
    if (!res.ok) throw new Error('Failed to load schools');
    return res.json() as Promise<{ schools: any[] }>;
}

export default async function Page({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
    const sp = await searchParams;
    const q = sp?.q;
    const { schools } = await getSchools(q);

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Institutional Records</h1>
                    <p className="text-muted-foreground font-light text-lg">Manage the verified ecosystem entities.</p>
                </div>

                <div className="flex flex-col md:flex-row gap-4 items-center">
                    <form className="w-full md:w-80">
                        <input
                            name="q"
                            defaultValue={q || ''}
                            placeholder="Search by name..."
                            className="bg-background border border-border/50 rounded-xl px-4 py-2.5 w-full focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                        />
                    </form>
                    <Link
                        href="/admin/schools/new"
                        className="w-full md:w-auto bg-primary text-white px-6 py-2.5 rounded-xl font-bold text-center shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all"
                    >
                        Create Entity
                    </Link>
                </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {schools.map((s) => (
                    <div
                        key={s._id}
                        className="group bg-background border border-border/50 rounded-3xl p-8 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 flex flex-col justify-between h-full"
                    >
                        <div className="space-y-6">
                            <div className="flex items-start justify-between">
                                <div className="w-16 h-16 rounded-2xl bg-muted/30 flex items-center justify-center border border-border/50 overflow-hidden shadow-sm group-hover:scale-110 transition-transform">
                                    {s.logoUrl ? (
                                        <img src={s.logoUrl} alt="logo" className="w-full h-full object-contain p-2" />
                                    ) : (
                                        <span className="text-2xl font-bold text-muted-foreground/30">{s.schoolName?.charAt(0)}</span>
                                    )}
                                </div>
                                <div className="flex flex-col items-end gap-2">
                                    <div className="px-2 py-0.5 rounded-full bg-green-500/10 text-green-600 text-[10px] font-bold uppercase tracking-widest border border-green-500/20">
                                        Verified
                                    </div>
                                    <span className="text-[10px] text-muted-foreground font-bold tracking-widest uppercase">{s.city || 'Location Pending'}</span>
                                </div>
                            </div>

                            <div className="space-y-1">
                                <h3 className="text-2xl font-bold tracking-tight group-hover:text-primary transition-colors">{s.schoolName}</h3>
                                <p className="text-muted-foreground text-sm font-light">Layer 1: Infrastructure</p>
                            </div>
                        </div>

                        <div className="pt-8 mt-8 border-t border-border/50 flex items-center justify-between">
                            <div className="flex -space-x-2">
                                <div className="w-8 h-8 rounded-full bg-muted border-2 border-background" />
                                <div className="w-8 h-8 rounded-full bg-muted border-2 border-background" />
                                <div className="w-8 h-8 rounded-full bg-muted border-2 border-background flex items-center justify-center text-[8px] font-bold">+0</div>
                            </div>
                            <Link
                                href={`/admin/schools/${s._id}`}
                                className="text-sm font-bold text-primary hover:underline flex items-center gap-1"
                            >
                                Review Records →
                            </Link>
                        </div>
                    </div>
                ))}

                {schools.length === 0 && (
                    <div className="col-span-full py-20 text-center space-y-4">
                        <div className="text-6xl text-muted-foreground/20 italic font-bold">No Entities</div>
                        <p className="text-muted-foreground font-light">The institutional ledger is empty.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
