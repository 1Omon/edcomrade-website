import { headers } from "next/headers";
import { SubmissionCard } from "@/components/submission-card";

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
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[var(--rule)]">
                <div>
                    <span className="badge badge-gold mb-2">Platform Administration</span>
                    <h1 className="text-3xl font-bold tracking-tight text-[var(--navy)]">School Applications &amp; Deployments</h1>
                    <p className="text-[var(--ink-mid)] font-normal text-base mt-1">Review live deployment configurations, pioneers applications, and onboarded schools.</p>
                </div>

                <form className="w-full md:w-80">
                    <div className="relative">
                        <input
                            name="q"
                            defaultValue={q || ''}
                            placeholder="Search school name, contact, city..."
                            className="bg-white border border-[var(--rule)] rounded-xl px-4 py-2.5 w-full focus:ring-2 focus:ring-[var(--navy)]/20 transition-all outline-none text-sm text-[var(--navy)]"
                        />
                    </div>
                </form>
            </div>

            <div className="grid gap-6">
                {submissions.map((s) => (
                    <SubmissionCard key={s._id} s={s} />
                ))}

                {submissions.length === 0 && (
                    <div className="py-20 text-center space-y-4 card bg-white">
                        <div className="text-4xl text-[var(--ink-mid)] font-serif font-bold">Queue Empty</div>
                        <p className="text-[var(--ink-mid)]">There are no pending school applications or deployment requests right now.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
