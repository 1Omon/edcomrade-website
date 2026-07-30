import React from "react";
import Link from "next/link";
import { headers } from "next/headers";
import { Plus, Building2, MapPin, ArrowRight } from "lucide-react";

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
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[var(--rule)]">
                <div>
                    <span className="badge badge-green mb-2">Verified Ecosystem</span>
                    <h1 className="text-3xl font-bold tracking-tight text-[var(--navy)]">School Database</h1>
                    <p className="text-[var(--ink-mid)] font-normal text-base mt-1">Directory of registered institutions using Pioneers&apos; ERP or Custom Apps.</p>
                </div>

                <div className="flex flex-col md:flex-row gap-4 items-center">
                    <form className="w-full md:w-80">
                        <input
                            name="q"
                            defaultValue={q || ''}
                            placeholder="Search by school name..."
                            className="bg-white border border-[var(--rule)] rounded-xl px-4 py-2.5 w-full focus:ring-2 focus:ring-[var(--navy)]/20 transition-all outline-none text-sm text-[var(--navy)]"
                        />
                    </form>
                    <Link
                        href="/admin/schools/new"
                        className="btn-primary text-xs py-2.5 px-4 whitespace-nowrap"
                    >
                        <Plus size={16} /> Add School
                    </Link>
                </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {schools.map((s) => (
                    <div
                        key={s._id}
                        className="card p-6 bg-white flex flex-col justify-between h-full hover:border-[var(--cyan)] transition-all"
                    >
                        <div className="space-y-4">
                            <div className="flex items-start justify-between">
                                <div className="w-14 h-14 rounded-xl bg-[var(--paper-tint)] flex items-center justify-center border border-[var(--rule)] overflow-hidden">
                                    {s.logoUrl ? (
                                        <img src={s.logoUrl} alt="logo" className="w-full h-full object-contain p-2" />
                                    ) : (
                                        <Building2 className="w-6 h-6 text-[var(--navy)]" />
                                    )}
                                </div>
                                <div className="flex flex-col items-end gap-1">
                                    <span className="badge badge-green text-[10px]">VERIFIED</span>
                                    <span className="text-[11px] text-[var(--ink-mid)] font-semibold flex items-center gap-1">
                                        <MapPin size={12} /> {s.city || 'Location Pending'}
                                    </span>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold tracking-tight text-[var(--navy)]">{s.schoolName}</h3>
                                <p className="text-[var(--ink-mid)] text-xs font-normal mt-1">Pioneers&apos; ERP Infrastructure</p>
                            </div>
                        </div>

                        <div className="pt-6 mt-6 border-t border-[var(--rule)] flex items-center justify-between">
                            <span className="text-xs text-[var(--ink-mid)]">
                                {s.studentCount ? `${s.studentCount} Students` : "Enrolment Pending"}
                            </span>
                            <Link
                                href={`/admin/schools/${s._id}`}
                                className="text-xs font-bold text-[var(--navy)] hover:text-[var(--cyan)] flex items-center gap-1 transition-colors"
                            >
                                View Profile <ArrowRight size={14} />
                            </Link>
                        </div>
                    </div>
                ))}

                {schools.length === 0 && (
                    <div className="col-span-full py-20 text-center space-y-4 card bg-white">
                        <div className="text-4xl text-[var(--navy)] font-serif font-bold">No Schools Listed</div>
                        <p className="text-[var(--ink-mid)]">There are no schools registered in the database yet.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
