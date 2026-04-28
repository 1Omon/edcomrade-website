import React from "react";
import { headers } from "next/headers";
import { cn } from "@/lib/utils";

async function getContacts() {
    const h = await headers();
    const proto = h.get('x-forwarded-proto') || 'http';
    const host = h.get('host') || 'localhost:3000';
    const base = `${proto}://${host}`;
    const pathname = `${base}/api/contact`
    const res = await fetch(pathname, { cache: 'no-store' });
    if (!res.ok) throw new Error('Failed to load contacts');
    return res.json() as Promise<{ contacts: any[] }>;
}

export default async function AdminContactsPage() {
    const { contacts } = await getContacts();

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <div>
                <h1 className="text-3xl font-bold tracking-tight text-foreground">Contact Messages</h1>
                <p className="text-muted-foreground font-light text-lg">All messages sent to us from the website.</p>
            </div>

            <div className="grid gap-6">
                {contacts.map((c) => (
                    <div
                        key={c._id}
                        className="group bg-background border border-border/50 rounded-2xl p-6 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 relative overflow-hidden"
                    >
                        <div className="absolute top-0 left-0 w-1 h-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />

                        <div className="space-y-6">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                <div className="space-y-1">
                                    <h3 className="text-xl font-bold tracking-tight">{c.firstName} {c.lastName}</h3>
                                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground font-light">
                                        <span className="flex items-center gap-1.5 font-medium text-foreground">
                                            📧 {c.email}
                                        </span>
                                        {c.school && (
                                            <span className="flex items-center gap-1.5">
                                                🏫 {c.school}
                                            </span>
                                        )}
                                    </div>
                                </div>
                                <span className="text-[11px] uppercase tracking-widest text-muted-foreground font-bold whitespace-nowrap">
                                    {new Date(c.createdAt).toLocaleDateString()} at {new Date(c.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                </span>
                            </div>

                            {c.message && (
                                <div className="bg-muted/30 rounded-xl p-6 border border-border/30">
                                    <p className="text-foreground leading-relaxed font-light italic">
                                        "{c.message}"
                                    </p>
                                </div>
                            )}

                            <div className="flex justify-end gap-3 pt-2">
                                <button className="px-5 py-2 rounded-lg bg-primary text-white text-xs font-bold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/10">
                                    Reply via Email
                                </button>
                                <button className="px-5 py-2 rounded-lg bg-muted border border-border/50 text-xs font-bold hover:bg-muted/80 transition-colors">
                                    Archive Message
                                </button>
                            </div>
                        </div>
                    </div>
                ))}

                {contacts.length === 0 && (
                    <div className="py-20 text-center space-y-4">
                        <div className="text-6xl text-muted-foreground/20 italic font-bold">No Messages</div>
                        <p className="text-muted-foreground font-light">The contact queue is currently empty.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
