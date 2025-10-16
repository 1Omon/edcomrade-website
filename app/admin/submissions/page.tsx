import React from "react";
import { headers } from "next/headers";

async function getSubmissions(q?: string) {
  const h = headers();
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
    <div className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-2xl font-semibold mb-6">School Submissions</h1>
      <form className="mb-4">
        <input
          name="q"
          defaultValue={q || ''}
          placeholder="Search by school, contact, email, city..."
          className="border rounded px-3 py-2 w-full"
        />
      </form>
      <div className="overflow-x-auto">
        <table className="min-w-full border text-sm">
          <thead>
            <tr className="bg-gray-50">
              <th className="border px-2 py-1 text-left">School</th>
              <th className="border px-2 py-1 text-left">Contact</th>
              <th className="border px-2 py-1 text-left">Email</th>
              <th className="border px-2 py-1 text-left">Phone</th>
              <th className="border px-2 py-1 text-left">Created</th>
            </tr>
          </thead>
          <tbody>
            {submissions.map((s) => (
              <tr key={s._id}>
                <td className="border px-2 py-1">
                  <div className="flex items-center gap-2">
                    {s.logoUrl ? <img src={s.logoUrl} alt="logo" className="h-6 w-6 object-contain"/> : null}
                    <span>{s.schoolName}</span>
                  </div>
                </td>
                <td className="border px-2 py-1">{s.contactName}</td>
                <td className="border px-2 py-1">{s.email}</td>
                <td className="border px-2 py-1">{s.phone || '-'}</td>
                <td className="border px-2 py-1">
                  {(() => {
                    try {
                      const iso = new Date(s.createdAt).toISOString();
                      return iso.replace('T', ' ').slice(0, 19);
                    } catch {
                      return String(s.createdAt);
                    }
                  })()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}


