"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ZorsLockup } from "@/components/custom/logo";
import { ArrowLeft, FileText } from "lucide-react";

const navItems = [
    { label: "Project Briefs", href: "/admin/briefs", icon: FileText },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    return (
        <div className="min-h-screen bg-[#F0ECE2]">
            {/* Admin topbar */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-[#171715]">
                <div className="flex items-center gap-4 px-5 md:px-8 h-14">

                    {/* Left: Logo + Admin badge */}
                    <div className="flex items-center gap-3 shrink-0">
                        <Link href="/" className="group">
                            <ZorsLockup className="h-6 w-auto opacity-60 group-hover:opacity-100 transition-opacity duration-200" />
                        </Link>
                        <div className="h-4 w-px bg-white/15" />
                        <span className="text-[10px] font-mono font-semibold tracking-widest uppercase px-2 py-0.5 rounded-full bg-[#A88C40]/20 text-[#A88C40] border border-[#A88C40]/30">
                            ADMIN
                        </span>
                    </div>

                    {/* Center: Nav links */}
                    <nav className="hidden md:flex items-center gap-1 mx-auto">
                        {navItems.map(({ label, href, icon: Icon }) => {
                            const isActive = pathname.startsWith(href);
                            return (
                                <Link
                                    key={href}
                                    href={href}
                                    className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors duration-200 ${
                                        isActive
                                            ? "bg-white/10 text-white"
                                            : "text-white/50 hover:text-white hover:bg-white/5"
                                    }`}
                                >
                                    <Icon className="size-3" />
                                    {label}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Right: Back to site */}
                    <Link
                        href="/"
                        className="ml-auto flex items-center gap-1.5 text-xs font-mono text-white/40 hover:text-white/80 transition-colors duration-200 shrink-0 group"
                    >
                        <ArrowLeft className="size-3 group-hover:-translate-x-0.5 transition-transform duration-200" />
                        <span className="hidden sm:inline">Kembali ke Site</span>
                    </Link>
                </div>

                {/* Bottom accent line */}
                <div className="h-px w-full bg-gradient-to-r from-transparent via-[#A88C40]/40 to-transparent" />
            </header>

            {/* Page content */}
            <main className="pt-14">
                {children}
            </main>
        </div>
    );
}
