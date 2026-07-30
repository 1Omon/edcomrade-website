import React from "react";
import { headers } from "next/headers";
import { Mail, Phone, Building, Calendar, MessageSquare, ArrowUpRight } from "lucide-react";

async function getContacts() {
  const h = await headers();
  const proto = h.get("x-forwarded-proto") || "http";
  const host = h.get("host") || "localhost:3000";
  const base = `${proto}://${host}`;
  const pathname = `${base}/api/contact`;
  const res = await fetch(pathname, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to load contacts");
  return res.json() as Promise<{ contacts: any[] }>;
}

export default async function AdminContactsPage() {
  const { contacts } = await getContacts();

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="pb-6 border-b border-[var(--rule)]">
        <span className="badge badge-blue mb-2">Communications Log</span>
        <h1 className="text-3xl font-bold tracking-tight text-[var(--navy)]">Contact Messages</h1>
        <p className="text-[var(--ink-mid)] font-normal text-base mt-1">Inquiries submitted via the website contact form.</p>
      </div>

      <div className="grid gap-6">
        {contacts.map((c) => (
          <div
            key={c._id}
            className="card p-6 bg-white transition-all duration-300 relative overflow-hidden space-y-6"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="text-xl font-bold tracking-tight text-[var(--navy)]">{c.name}</h3>
                  <span className="badge badge-green text-xs">
                    {c.role || "Inquirer"}
                  </span>
                  {c.subject && (
                    <span className="badge badge-blue text-xs">
                      Subj: {c.subject}
                    </span>
                  )}
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-[var(--ink-mid)] pt-1">
                  <span className="flex items-center gap-1.5 font-medium text-[var(--navy)]">
                    <Mail size={14} color="var(--cyan)" /> {c.email}
                  </span>
                  {c.phone && (
                    <span className="flex items-center gap-1.5 font-medium text-[var(--navy)]">
                      <Phone size={14} color="var(--gold)" /> {c.phone}
                    </span>
                  )}
                  {c.schoolName && (
                    <span className="flex items-center gap-1.5">
                      <Building size={14} /> {c.schoolName}
                    </span>
                  )}
                </div>
              </div>
              <span className="text-[11px] uppercase tracking-widest text-[var(--ink-mid)] font-semibold flex items-center gap-1">
                <Calendar size={12} /> {new Date(c.createdAt).toLocaleDateString()}
              </span>
            </div>

            {c.message && (
              <div className="bg-[var(--paper-tint)] rounded-xl p-5 border border-[var(--rule)]">
                <p className="text-[var(--ink)] leading-relaxed font-normal italic">
                  &ldquo;{c.message}&rdquo;
                </p>
              </div>
            )}

            <div className="flex justify-end gap-3 pt-2">
              <a
                href={`mailto:${c.email}?subject=RE: ${encodeURIComponent(c.subject || "Edcomrade Inquiry")}`}
                className="btn-primary text-xs py-2 px-4"
              >
                Reply via Email <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        ))}

        {contacts.length === 0 && (
          <div className="py-20 text-center space-y-4 card bg-white">
            <MessageSquare size={36} className="mx-auto text-[var(--ink-mid)]" />
            <div className="text-2xl text-[var(--navy)] font-serif font-bold">No Messages</div>
            <p className="text-[var(--ink-mid)]">The contact queue is currently empty.</p>
          </div>
        )}
      </div>
    </div>
  );
}
