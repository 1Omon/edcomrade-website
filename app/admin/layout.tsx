"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Inbox,
  School,
  ArrowLeft,
  ChevronRight,
  MessageSquare,
  DollarSign,
  FileText,
  Shield,
} from "lucide-react";
import { cn } from "@/lib/utils";

const ADMIN_NAV = [
  { name: "School Applications", icon: Inbox, href: "/admin/submissions" },
  { name: "Contact Messages", icon: MessageSquare, href: "/admin/contacts" },
  { name: "School Database", icon: School, href: "/admin/schools" },
  { name: "Manage Content", icon: FileText, href: "/admin/posts" },
  { name: "Module Pricing", icon: DollarSign, href: "/admin/modules" },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div
      style={{ background: "var(--paper)", minHeight: "100vh" }}
      className="flex flex-col md:flex-row"
    >
      {/* Sidebar */}
      <aside
        style={{
          backgroundColor: "var(--navy-dark)",
          color: "#fff",
        }}
        className="w-full md:w-72 p-6 flex flex-col justify-between sticky top-0 h-auto md:h-screen z-40 border-b md:border-b-0 md:border-r border-white/10"
      >
        <div className="flex flex-col gap-10">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-3 group">
              <Image
                src="/full-logo.png"
                alt="EdComrade"
                width={120}
                height={32}
                style={{
                  height: 28,
                  width: "auto",
                  filter: "brightness(0) invert(1)",
                }}
              />
            </Link>
            <span className="badge badge-gold text-[10px] py-0.5 px-2">
              ADMIN
            </span>
          </div>

          <nav className="flex flex-col gap-1.5">
            <div
              style={{ color: "rgba(255,255,255,0.4)" }}
              className="text-[10px] uppercase tracking-[0.25em] font-bold mb-2 px-3"
            >
              Platform Operations
            </div>
            {ADMIN_NAV.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  style={{
                    backgroundColor: isActive
                      ? "rgba(255,255,255,0.12)"
                      : "transparent",
                    color: isActive ? "#fff" : "rgba(255,255,255,0.65)",
                    borderLeft: isActive
                      ? "3px solid var(--gold)"
                      : "3px solid transparent",
                  }}
                  className={cn(
                    "flex items-center gap-3 px-3.5 py-3 rounded-lg text-sm font-semibold transition-all group hover:text-white hover:bg-white/5",
                  )}
                >
                  <item.icon
                    className={cn(
                      "w-4 h-4 transition-colors",
                      isActive
                        ? "text-[var(--gold)]"
                        : "text-white/40 group-hover:text-white",
                    )}
                  />
                  {item.name}
                  {isActive && (
                    <ChevronRight className="ml-auto w-4 h-4 opacity-70" />
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="pt-6 border-t border-white/10">
          <Link
            href="/"
            style={{ color: "rgba(255,255,255,0.6)" }}
            className="flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-sm font-medium hover:text-white hover:bg-white/5 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Exit to Website
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow min-h-screen overflow-y-auto">
        <header
          style={{
            backgroundColor: "#fff",
            borderBottom: "1px solid var(--rule)",
          }}
          className="sticky top-0 z-30 px-8 py-4 flex items-center justify-between shadow-sm"
        >
          <div className="flex items-center gap-2 text-sm text-[var(--ink-mid)] font-medium">
            <Shield className="w-4 h-4 text-[var(--navy)]" />
            <span className="text-[var(--navy)] font-bold">
              Edcomrade Console
            </span>
            <ChevronRight className="w-4 h-4 opacity-50" />
            <span className="text-[var(--navy)] capitalize font-semibold">
              {pathname.split("/").pop()?.replace("-", " ")}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="badge badge-green flex items-center gap-1.5 text-xs">
              <span className="w-2 h-2 rounded-full bg-[var(--green-mid)] animate-pulse" />
              Live Operations Active
            </span>
          </div>
        </header>

        <div
          className="p-8 md:p-12"
          style={{ maxWidth: "1200px", margin: "0 auto" }}
        >
          {children}
        </div>
      </main>
    </div>
  );
}
