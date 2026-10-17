"use client";

import Link from "next/link";
import { Home, Compass, ArrowUpRight } from "lucide-react";
import { useLang } from "@/lib/language-context";

export default function NotFound() {
    const { lang } = useLang();

    const t = {
        en: {
            badge: "Error 404",
            title: "Page Not Found",
            desc: "The page you are looking for doesn't exist, has been moved, or is temporarily unavailable.",
            btnHome: "Back to Home",
            btnExplore: "View All Error Codes (1xx–5xx)",
            quickNav: "Or explore these popular pages:",
            pages: [
                { name: "Services", href: "/services" },
                { name: "Client Stories", href: "/client-stories" },
                { name: "About Us", href: "/about" },
                { name: "Contact Studio", href: "/contact" },
            ],
        },
        id: {
            badge: "Error 404",
            title: "Halaman Tidak Ditemukan",
            desc: "Halaman yang Anda tuju tidak ditemukan, telah dipindahkan, atau sedang tidak tersedia.",
            btnHome: "Kembali ke Beranda",
            btnExplore: "Lihat Katalog Kode Error (1xx–5xx)",
            quickNav: "Atau kunjungi halaman populer berikut:",
            pages: [
                { name: "Layanan", href: "/services" },
                { name: "Kisah Klien", href: "/client-stories" },
                { name: "Tentang Kami", href: "/about" },
                { name: "Kontak Studio", href: "/contact" },
            ],
        },
    }[lang];

    return (
        <div className="min-h-[85vh] pt-32 pb-20 px-6 flex items-center justify-center relative overflow-hidden bg-[#F0ECE2]">
            {/* Ambient background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#A88C40]/10 rounded-full blur-[140px] pointer-events-none" />

            <div className="max-w-2xl w-full text-center relative z-10 space-y-8">
                {/* Big 404 Number with subtle craft glow */}
                <div className="relative inline-block">
                    <span className="text-8xl sm:text-9xl md:text-[13rem] font-bold font-mono tracking-tighter text-[#171715]/10 select-none">
                        404
                    </span>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="px-4 py-1.5 rounded-full text-xs font-mono font-semibold uppercase tracking-widest bg-[#A88C40]/20 text-[#A88C40] border border-[#A88C40]/40 backdrop-blur-md">
                            {t.badge}
                        </span>
                    </div>
                </div>

                <div className="space-y-3 -mt-6">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#171715]">
                        {t.title}
                    </h1>
                    <p className="text-sm sm:text-base text-[#5C5850] max-w-lg mx-auto">
                        {t.desc}
                    </p>
                </div>

                {/* Main Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                    <Link
                        href="/"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#171715] hover:bg-[#A88C40] text-[#F0ECE2] text-xs font-semibold font-mono tracking-wide transition-all shadow-md duration-200"
                    >
                        <Home className="size-4" />
                        <span>{t.btnHome}</span>
                    </Link>

                    <Link
                        href="/error"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/80 hover:bg-white text-[#171715] border border-[#171715]/15 text-xs font-semibold font-mono tracking-wide transition-all shadow-xs duration-200"
                    >
                        <Compass className="size-4 text-[#A88C40]" />
                        <span>{t.btnExplore}</span>
                    </Link>
                </div>

                {/* Quick Links Suggestions */}
                <div className="pt-8 border-t border-[#171715]/10 space-y-3">
                    <p className="text-xs font-mono text-[#5C5850] uppercase tracking-wider">
                        {t.quickNav}
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-2">
                        {t.pages.map((p, idx) => (
                            <Link
                                key={idx}
                                href={p.href}
                                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-white/70 hover:bg-white border border-[#171715]/10 text-[#171715] transition-colors"
                            >
                                <span>{p.name}</span>
                                <ArrowUpRight className="size-3 text-[#A88C40]" />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
