import React from "react";
import { headers } from "next/headers";
import { cn } from "@/lib/utils";

async function getSubmissions(q?: string) {
    const h = await headers();
    const proto = h.get('x-forwarded-proto') || 'http';
    const host = h.get('host') || 'localhost:3000';
    const base = `${proto}://${host}`;
    const pathname = `${base}/api/submissions${q ? `?q=${encodeURIComponent(q)}` : ''}`
    const res = await fetch(pathname, { cache: 'no-store' });
    if (!res.ok) throw new Error('Failed to load submissions');
    return res.json() as Promise<{ submissions: any[] }>;
}

export default async function Page({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
    const sp = await searchParams;
    const q = sp?.q;
    const { submissions } = await getSubmissions(q);

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Intelligence Queue</h1>
                    <p className="text-muted-foreground font-light text-lg">Verify incoming digital infrastructure applications.</p>
                </div>

                <form className="w-full md:w-96">
                    <div className="relative">
                        <input
                            name="q"
                            defaultValue={q || ''}
                            placeholder="Filter by school or city..."
                            className="bg-background border border-border/50 rounded-xl px-4 py-2.5 w-full focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                        />
                    </div>
                </form>
            </div>

            <div className="grid gap-6">
                {submissions.map((s) => (
                    <div
                        key={s._id}
                        className="group bg-background border border-border/50 rounded-2xl p-6 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-1 h-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />

                        <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                            <div className="w-20 h-20 rounded-2xl bg-muted/30 flex items-center justify-center shrink-0 border border-border/50 overflow-hidden shadow-sm">
                                {s.logoUrl ? (
                                    <img src={s.logoUrl} alt="logo" className="w-full h-full object-contain p-2" />
                                ) : (
                                    <span className="text-2xl font-bold text-muted-foreground/30">{s.schoolName?.charAt(0)}</span>
                                )}
                            </div>

                            <div className="flex-grow space-y-2">
                                <div className="flex flex-wrap items-center gap-3">
                                    <h3 className="text-xl font-bold tracking-tight">{s.schoolName}</h3>
                                    <div className={cn(
                                        "px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest border",
                                        s.type === "application" && "bg-blue-500/10 text-blue-600 border-blue-500/20",
                                        s.type === "inquiry" && "bg-amber-500/10 text-amber-600 border-amber-500/20",
                                        s.type === "partnership" && "bg-purple-500/10 text-purple-600 border-purple-500/20",
                                        s.type === "pioneer" && "bg-primary/10 text-primary border-primary/20",
                                    )}>
                                        {s.type || "Application"}
                                    </div>
                                    <div className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-500 text-[10px] font-bold uppercase tracking-widest border border-slate-200">
                                        {s.status || "Pending"}
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground font-light">
                                    <span className="flex items-center gap-1.5 font-medium text-foreground">
                                        👤 {s.contactName}
                                    </span>
                                    <span className="flex items-center gap-1.5">
                                        📧 {s.email}
                                    </span>
                                    <span className="flex items-center gap-1.5">
                                        📞 {s.phone || '-'}
                                    </span>
                                </div>
                            </div>

                            <div className="w-full md:w-auto flex flex-col items-end gap-2 text-right">
                                <span className="text-[11px] uppercase tracking-widest text-muted-foreground font-bold">
                                    Received {new Date(s.createdAt).toLocaleDateString()}
                                </span>
                                <div className="flex gap-2">
                                    <button className="px-4 py-2 rounded-lg bg-primary text-white text-xs font-bold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/10">
                                        Verify Entity
                                    </button>
                                    <button className="px-4 py-2 rounded-lg bg-muted border border-border/50 text-xs font-bold hover:bg-muted/80 transition-colors">
                                        Archive
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {submissions.length === 0 && (
                    <div className="py-20 text-center space-y-4">
                        <div className="text-6xl text-muted-foreground/20 italic font-bold">Queue Empty</div>
                        <p className="text-muted-foreground font-light">The intelligence layer is up to date.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
