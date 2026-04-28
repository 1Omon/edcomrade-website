import { cn } from "@/lib/utils";
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
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-foreground">School Applications</h1>
                    <p className="text-muted-foreground font-light text-lg">Review and approve schools that want to join the program.</p>
                </div>

                <form className="w-full md:w-96">
                    <div className="relative">
                        <input
                            name="q"
                            defaultValue={q || ''}
                            placeholder="Find a school or city..."
                            className="bg-background border border-border/50 rounded-xl px-4 py-2.5 w-full focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                        />
                    </div>
                </form>
            </div>

            <div className="grid gap-6">
                {submissions.map((s) => (
                    <SubmissionCard key={s._id} s={s} />
                ))}

                {submissions.length === 0 && (
                    <div className="py-20 text-center space-y-4">
                        <div className="text-6xl text-muted-foreground/20 italic font-bold">List Empty</div>
                        <p className="text-muted-foreground font-light">There are no new applications right now.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
