"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    Inbox,
    School,
    Users,
    Settings,
    ArrowLeft,
    ChevronRight,
    Globe,
    ShieldCheck,
    MessageSquare,
    DollarSign,
    FileText
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";

const ADMIN_NAV = [
    { name: "School Applications", icon: Inbox, href: "/admin/submissions" },
    { name: "Contact Messages", icon: MessageSquare, href: "/admin/contacts" },
    { name: "School Database", icon: School, href: "/admin/schools" },
    { name: "Manage Content", icon: FileText, href: "/admin/posts" },
    { name: "Program Pricing", icon: DollarSign, href: "/admin/modules" },
];

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    return (
        <div className="min-h-screen bg-muted/20 flex flex-col md:flex-row">
            {/* Sidebar */}
            <aside className="w-full md:w-72 bg-background border-b md:border-b-0 md:border-r border-border/50 p-6 flex flex-col gap-12 sticky top-0 h-auto md:h-screen z-40">
                <div className="flex items-center gap-4">
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/20">
                            <span className="font-bold text-lg">EC</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold tracking-tight">EdComrade Admin</span>
                            <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Dashboard</span>
                        </div>
                    </Link>
                </div>

                <nav className="flex flex-col gap-2 flex-grow">
                    <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-muted-foreground/50 mb-4 px-3">
                        Menu
                    </div>
                    {ADMIN_NAV.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all group",
                                    isActive
                                        ? "bg-primary text-white shadow-lg shadow-primary/20"
                                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                                )}
                            >
                                <item.icon className={cn("w-5 h-5", isActive ? "text-white" : "group-hover:text-primary")} />
                                {item.name}
                                {isActive && <ChevronRight className="ml-auto w-4 h-4" />}
                            </Link>
                        );
                    })}
                </nav>

                <div className="pt-8 border-t border-border/50">
                    <Link
                        href="/"
                        className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground transition-all"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Exit to Platform
                    </Link>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-grow min-h-screen overflow-y-auto">
                <header className="sticky top-0 z-30 bg-background/80 backdrop-blur-xl border-b border-border/50 px-8 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
                        <span>Admin</span>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-foreground capitalize">{pathname.split("/").pop()}</span>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-[10px] font-bold text-primary uppercase tracking-widest leading-none">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                            System Active
                        </div>
                    </div>
                </header>

                <div className="p-8 md:p-12">
                    {children}
                </div>
            </main>
        </div>
    );
}
