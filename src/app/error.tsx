"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RefreshCcw, Home, Compass } from "lucide-react";
import { useLang } from "@/lib/language-context";

const TEXT = {
    id: {
        badge: "Kesalahan Internal Server",
        title: "Terjadi Kendala pada Sistem",
        desc: "Sistem mengalami error tak terduga saat memproses permintaan Anda. Tim teknis ZORS CRAFT telah mencatat log kendala ini.",
        btnRetry: "Muat Ulang (Coba Lagi)",
        btnHome: "Kembali ke Beranda",
        btnCatalog: "Katalog Error (1xx–5xx)",
    },
    en: {
        badge: "Internal Server Error",
        title: "Unexpected System Exception",
        desc: "The system encountered an unexpected error while processing your request. The technical team has logged this incident.",
        btnRetry: "Reload (Try Again)",
        btnHome: "Back to Home",
        btnCatalog: "Error Catalog (1xx–5xx)",
    },
};

export default function ErrorPage({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    const { lang } = useLang();
    const t = TEXT[lang];

    useEffect(() => {
        console.error("Runtime Application Error:", error);
    }, [error]);

    return (
        <div className="min-h-[85vh] pt-32 pb-20 px-6 flex items-center justify-center relative overflow-hidden bg-[#F0ECE2]">
            {/* Ambient background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-500/5 rounded-full blur-[140px] pointer-events-none" />

            <div className="max-w-2xl w-full text-center relative z-10 space-y-8">
                {/* 500 Header Badge */}
                <div className="relative inline-block">
                    <span className="text-8xl sm:text-9xl md:text-[13rem] font-bold font-mono tracking-tighter text-[#171715]/10 select-none">
                        500
                    </span>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="px-4 py-1.5 rounded-full text-xs font-mono font-semibold uppercase tracking-widest bg-red-500/10 text-red-700 border border-red-500/30 backdrop-blur-md flex items-center gap-1.5">
                            <AlertTriangle className="size-3.5 text-red-600" />
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

                {/* Error message digest box */}
                {error?.message && (
                    <div className="max-w-md mx-auto p-3.5 rounded-2xl bg-white/70 border border-[#171715]/10 text-left font-mono text-xs text-[#5C5850] space-y-1">
                        <span className="text-[10px] uppercase text-[#171715]/40 font-semibold block">
                            Error Diagnostic
                        </span>
                        <p className="text-red-700 truncate">{error.message}</p>
                        {error.digest && (
                            <span className="text-[10px] text-[#5C5850]/60 block">Digest: {error.digest}</span>
                        )}
                    </div>
                )}

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                    <button
                        onClick={() => reset()}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#171715] hover:bg-[#A88C40] text-[#F0ECE2] text-xs font-semibold font-mono tracking-wide transition-all shadow-md duration-200 cursor-pointer"
                    >
                        <RefreshCcw className="size-4" />
                        <span>{t.btnRetry}</span>
                    </button>

                    <Link
                        href="/"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/80 hover:bg-white text-[#171715] border border-[#171715]/15 text-xs font-semibold font-mono tracking-wide transition-all shadow-xs duration-200"
                    >
                        <Home className="size-4" />
                        <span>{t.btnHome}</span>
                    </Link>

                    <Link
                        href="/error"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/50 hover:bg-white text-[#5C5850] hover:text-[#171715] text-xs font-mono tracking-wide transition-all duration-200"
                    >
                        <Compass className="size-4 text-[#A88C40]" />
                        <span>{t.btnCatalog}</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
