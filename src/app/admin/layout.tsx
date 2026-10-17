"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ZorsSymbol } from "@/components/custom/logo";
import { AdminAuthProvider, useAdminAuth } from "@/lib/admin-auth";
import { getBriefs } from "@/app/actions/contact";
import {
    LayoutDashboard,
    FileText,
    FolderKanban,
    Sparkles,
    MessageSquare,
    Users,
    Briefcase,
    Settings,
    LogOut,
    ExternalLink,
    Menu,
    X,
    Shield
} from "lucide-react";

const NAV_ITEMS = [
    { label: "Overview", href: "/admin", icon: LayoutDashboard },
    { label: "Project Briefs", href: "/admin/briefs", icon: FileText, hasBadge: true },
    { label: "Client Stories", href: "/admin/projects", icon: FolderKanban },
    { label: "Layanan", href: "/admin/services", icon: Sparkles },
    { label: "Pesan Masuk", href: "/admin/messages", icon: MessageSquare },
    { label: "Klien & Mitra", href: "/admin/clients", icon: Users },
    { label: "Karir", href: "/admin/careers", icon: Briefcase },
    { label: "Pengaturan", href: "/admin/settings", icon: Settings },
];

function AdminShell({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const router = useRouter();
    const { user, isAuthenticated, isLoading, logout } = useAdminAuth();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [newBriefsCount, setNewBriefsCount] = useState(0);

    // If on login page, render children directly without dashboard shell
    const isLoginPage = pathname === "/admin/login" || pathname === "/admin/login/";

    useEffect(() => {
        if (!isLoading && !isAuthenticated && !isLoginPage) {
            router.push("/admin/login");
        }
    }, [isAuthenticated, isLoading, isLoginPage, router]);

    useEffect(() => {
        if (isAuthenticated) {
            getBriefs().then((briefs) => {
                const count = briefs.filter((b) => b.status === "new").length;
                setNewBriefsCount(count);
            });
        }
    }, [isAuthenticated, pathname]);

    // Close mobile nav on route change
    useEffect(() => {
        setMobileOpen(false);
    }, [pathname]);

    if (isLoginPage) {
        return <>{children}</>;
    }

    if (isLoading) {
        return (
            <div className="min-h-screen bg-[#171715] flex flex-col items-center justify-center gap-3">
                <div className="size-8 border-2 border-[#A88C40] border-t-transparent rounded-full animate-spin" />
                <span className="text-xs font-mono text-white/50">Memuat sesi admin...</span>
            </div>
        );
    }

    if (!isAuthenticated) {
        return null;
    }

    return (
        <div className="min-h-screen bg-[#F7F5F0] text-[#171715] flex flex-col md:flex-row">
            {/* Desktop Sidebar */}
            <aside className="hidden md:flex flex-col w-64 bg-[#171715] text-[#F0ECE2] shrink-0 border-r border-white/5 sticky top-0 h-screen select-none">
                {/* Brand Logo & Admin tag */}
                <div className="p-5 flex items-center justify-between border-b border-white/10">
                    <Link href="/admin" className="flex items-center gap-2.5 group">
                        <ZorsSymbol tone="reverse" className="w-7 h-auto duration-200 group-hover:scale-105" />
                        <div className="flex flex-col">
                            <span className="text-sm font-semibold tracking-tight text-white">ZORS CRAFT</span>
                            <span className="text-[10px] font-mono text-[#A88C40]">CONTROL PANEL</span>
                        </div>
                    </Link>
                </div>

                {/* Nav Menu Items */}
                <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
                    <div className="px-3 py-2 text-[10px] font-mono uppercase tracking-wider text-white/40">
                        Menu Utama
                    </div>
                    {NAV_ITEMS.map(({ label, href, icon: Icon, hasBadge }) => {
                        const isActive = href === "/admin"
                            ? pathname === "/admin" || pathname === "/admin/"
                            : pathname.startsWith(href);

                        return (
                            <Link
                                key={href}
                                href={href}
                                className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all duration-150 ${
                                    isActive
                                        ? "bg-[#A88C40] text-[#171715] font-semibold shadow-md shadow-[#A88C40]/20"
                                        : "text-white/60 hover:text-white hover:bg-white/5"
                                }`}
                            >
                                <div className="flex items-center gap-3">
                                    <Icon className={`size-4 ${isActive ? "text-[#171715]" : "text-white/50"}`} />
                                    <span>{label}</span>
                                </div>
                                {hasBadge && newBriefsCount > 0 && (
                                    <span
                                        className={`px-1.5 py-0.2 rounded-full text-[10px] font-mono font-bold ${
                                            isActive
                                                ? "bg-[#171715] text-[#A88C40]"
                                                : "bg-[#A88C40] text-[#171715]"
                                        }`}
                                    >
                                        {newBriefsCount}
                                    </span>
                                )}
                            </Link>
                        );
                    })}
                </nav>

                {/* Bottom User Profile & Actions */}
                <div className="p-3 border-t border-white/10 space-y-2">
                    <Link
                        href="/"
                        target="_blank"
                        className="flex items-center justify-between px-3.5 py-2 rounded-xl text-xs text-white/50 hover:text-white hover:bg-white/5 transition-colors"
                    >
                        <span className="flex items-center gap-2">
                            <ExternalLink className="size-3.5" />
                            <span>Lihat Website</span>
                        </span>
                        <span className="text-[10px] font-mono text-white/30">Live</span>
                    </Link>

                    <div className="p-3 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-between">
                        <div className="flex items-center gap-2.5 min-w-0">
                            <div className="size-8 rounded-full bg-[#A88C40]/20 border border-[#A88C40]/40 flex items-center justify-center text-[#A88C40] font-mono font-bold text-xs shrink-0">
                                <Shield className="size-4" />
                            </div>
                            <div className="min-w-0">
                                <p className="text-xs font-semibold text-white truncate">{user?.name || "Admin"}</p>
                                <p className="text-[10px] font-mono text-white/40 truncate">{user?.role || "Super Admin"}</p>
                            </div>
                        </div>
                        <button
                            onClick={logout}
                            title="Keluar"
                            className="p-1.5 rounded-lg text-white/40 hover:text-red-400 hover:bg-red-500/10 transition-colors"
                        >
                            <LogOut className="size-4" />
                        </button>
                    </div>
                </div>
            </aside>

            {/* Mobile Topbar */}
            <div className="md:hidden sticky top-0 z-40 bg-[#171715] text-[#F0ECE2] px-4 py-3 flex items-center justify-between border-b border-white/10">
                <Link href="/admin" className="flex items-center gap-2">
                    <ZorsSymbol tone="reverse" className="w-6 h-auto" />
                    <span className="text-sm font-semibold tracking-tight text-white">ZORS ADMIN</span>
                </Link>
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="p-2 rounded-lg bg-white/5 text-white/70 hover:text-white"
                >
                    {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
                </button>
            </div>

            {/* Mobile Drawer Menu */}
            {mobileOpen && (
                <div className="md:hidden fixed inset-0 top-[53px] z-50 bg-[#171715]/95 backdrop-blur-xl p-5 flex flex-col justify-between overflow-y-auto">
                    <nav className="space-y-1.5">
                        <div className="flex items-center gap-2.5 pb-4 mb-2 border-b border-white/10">
                            <ZorsSymbol tone="reverse" className="w-6 h-auto" />
                            <span className="text-xs font-semibold tracking-tight text-white">ZORS CRAFT CONTROL</span>
                        </div>
                        {NAV_ITEMS.map(({ label, href, icon: Icon, hasBadge }) => {
                            const isActive = href === "/admin"
                                ? pathname === "/admin" || pathname === "/admin/"
                                : pathname.startsWith(href);

                            return (
                                <Link
                                    key={href}
                                    href={href}
                                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium ${
                                        isActive
                                            ? "bg-[#A88C40] text-[#171715] font-semibold"
                                            : "text-white/70 hover:text-white hover:bg-white/5"
                                    }`}
                                >
                                    <div className="flex items-center gap-3">
                                        <Icon className="size-4" />
                                        <span>{label}</span>
                                    </div>
                                    {hasBadge && newBriefsCount > 0 && (
                                        <span className="px-2 py-0.5 rounded-full text-xs font-mono font-bold bg-[#A88C40] text-[#171715]">
                                            {newBriefsCount}
                                        </span>
                                    )}
                                </Link>
                            );
                        })}
                    </nav>

                    <div className="pt-6 border-t border-white/10 space-y-3">
                        <Link
                            href="/"
                            target="_blank"
                            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 text-xs text-white/70"
                        >
                            <ExternalLink className="size-4" />
                            <span>Kunjungi Website Utama</span>
                        </Link>
                        <button
                            onClick={logout}
                            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-red-500/10 text-red-400 text-xs font-semibold"
                        >
                            <LogOut className="size-4" />
                            <span>Keluar dari Admin</span>
                        </button>
                    </div>
                </div>
            )}

            {/* Main Content Area */}
            <main className="flex-1 min-w-0 overflow-y-auto">
                {children}
            </main>
        </div>
    );
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <AdminAuthProvider>
            <AdminShell>{children}</AdminShell>
        </AdminAuthProvider>
    );
}
