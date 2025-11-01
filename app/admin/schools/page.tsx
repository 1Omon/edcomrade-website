import React from "react";
import Link from "next/link";
import { headers } from "next/headers";

async function getSchools(q?: string) {
  const h = headers();
  const proto = h.get('x-forwarded-proto') || 'http';
  const host = h.get('host') || 'localhost:3000';
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
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-medium">Schools</h1>
        <Link href="/admin/schools/new" className="bg-black text-white px-4 py-2 rounded">New School</Link>
      </div>
      <form className="mb-4">
        <input
          name="q"
          defaultValue={q || ''}
          placeholder="Search by name"
          className="border border-border rounded px-3 py-2 w-full"
        />
      </form>
      <div className="overflow-x-auto">
        <table className="min-w-full border text-sm">
          <thead>
            <tr className="bg-gray-50">
              <th className="border px-2 py-1 text-left">Name</th>
              <th className="border px-2 py-1 text-left">City</th>
              <th className="border px-2 py-1 text-left">Country</th>
              <th className="border px-2 py-1 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {schools.map((s) => (
              <tr key={s._id}>
                <td className="border px-2 py-1">{s.schoolName}</td>
                <td className="border px-2 py-1">{s.city || '-'}</td>
                <td className="border px-2 py-1">{s.country || '-'}</td>
                <td className="border px-2 py-1">
                  <Link href={`/admin/schools/${s._id}`} className="underline">Edit</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}


