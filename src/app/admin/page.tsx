"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getBriefs } from "@/app/actions/contact";
import type { BriefEntry } from "@/app/actions/contact";
import {
    FileText,
    FolderKanban,
    Sparkles,
    MessageSquare,
    TrendingUp,
    ArrowUpRight,
    Activity
} from "lucide-react";

export default function AdminOverviewPage() {
    const [briefs, setBriefs] = useState<BriefEntry[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getBriefs().then((data) => {
            setBriefs(data);
            setIsLoading(false);
        });
    }, []);

    const newCount = briefs.filter((b) => b.status === "new").length;
    const repliedCount = briefs.filter((b) => b.status === "replied").length;
    const readCount = briefs.filter((b) => b.status === "read").length;
    const responseRate = briefs.length > 0 ? Math.round((repliedCount / briefs.length) * 100) : 100;

    const recentBriefs = briefs.slice(0, 5);

    return (
        <div className="p-6 md:p-10 space-y-8 max-w-7xl mx-auto">
            {/* Header Greeting */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <div className="flex items-center gap-2 mb-1">
                        <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-xs font-mono text-[#5C5850] uppercase tracking-wider">
                            Live Control Center
                        </span>
                    </div>
                    <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-[#171715]">
                        Dashboard Ringkasan
                    </h1>
                    <p className="text-sm text-[#5C5850] mt-1">
                        Pantau kinerja prospek proyek, performa portofolio, dan pesan masuk ZORS CRAFT.
                    </p>
                </div>

                <div className="flex items-center gap-3">
                    <Link
                        href="/admin/briefs"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#171715] hover:bg-[#A88C40] text-[#F0ECE2] text-xs font-medium transition-colors shadow-sm"
                    >
                        <FileText className="size-3.5" />
                        <span>Kelola Semua Brief ({briefs.length})</span>
                    </Link>
                </div>
            </div>

            {/* Metric Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Card 1: Project Briefs */}
                <div className="bg-white p-5 rounded-2xl border border-[#171715]/10 shadow-xs hover:border-[#A88C40]/40 transition-all">
                    <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-mono text-[#5C5850] uppercase">Project Briefs</span>
                        <div className="size-8 rounded-lg bg-[#A88C40]/15 text-[#A88C40] flex items-center justify-center">
                            <FileText className="size-4" />
                        </div>
                    </div>
                    <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-bold font-mono text-[#171715]">
                            {isLoading ? "..." : briefs.length}
                        </span>
                        {newCount > 0 && (
                            <span className="text-xs font-mono text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                                +{newCount} Baru
                            </span>
                        )}
                    </div>
                    <p className="text-xs text-[#5C5850] mt-2">Permintaan proyek dari calon klien</p>
                </div>

                {/* Card 2: Response Rate */}
                <div className="bg-white p-5 rounded-2xl border border-[#171715]/10 shadow-xs hover:border-[#A88C40]/40 transition-all">
                    <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-mono text-[#5C5850] uppercase">Tingkat Respons</span>
                        <div className="size-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                            <TrendingUp className="size-4" />
                        </div>
                    </div>
                    <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-bold font-mono text-[#171715]">
                            {responseRate}%
                        </span>
                        <span className="text-xs font-mono text-emerald-600 font-semibold">
                            {repliedCount}/{briefs.length} direspons
                        </span>
                    </div>
                    <p className="text-xs text-[#5C5850] mt-2">Target respons: &lt; 24 jam kerja</p>
                </div>

                {/* Card 3: Client Stories / Projects */}
                <div className="bg-white p-5 rounded-2xl border border-[#171715]/10 shadow-xs hover:border-[#A88C40]/40 transition-all">
                    <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-mono text-[#5C5850] uppercase">Client Stories</span>
                        <div className="size-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                            <FolderKanban className="size-4" />
                        </div>
                    </div>
                    <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-bold font-mono text-[#171715]">6</span>
                        <span className="text-xs font-mono text-indigo-600 font-semibold bg-indigo-50 px-2 py-0.5 rounded-full border border-indigo-200">
                            2 Featured
                        </span>
                    </div>
                    <p className="text-xs text-[#5C5850] mt-2">Studi kasus aktif di portofolio</p>
                </div>

                {/* Card 4: Services Offered */}
                <div className="bg-white p-5 rounded-2xl border border-[#171715]/10 shadow-xs hover:border-[#A88C40]/40 transition-all">
                    <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-mono text-[#5C5850] uppercase">Katalog Layanan</span>
                        <div className="size-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
                            <Sparkles className="size-4" />
                        </div>
                    </div>
                    <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-bold font-mono text-[#171715]">6</span>
                        <span className="text-xs font-mono text-[#5C5850]">Spesialisasi</span>
                    </div>
                    <p className="text-xs text-[#5C5850] mt-2">Web Arch, Design, Branding, dll.</p>
                </div>
            </div>

            {/* Pipeline Status & Recent Briefs Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left 2 Cols: Recent Project Briefs */}
                <div className="lg:col-span-2 bg-white rounded-2xl border border-[#171715]/10 p-6 shadow-xs">
                    <div className="flex items-center justify-between mb-5">
                        <div>
                            <h2 className="text-base font-bold text-[#171715]">Project Brief Terbaru</h2>
                            <p className="text-xs text-[#5C5850]">Calon klien yang baru saja mengajukan formulir</p>
                        </div>
                        <Link
                            href="/admin/briefs"
                            className="text-xs font-mono text-[#A88C40] hover:underline flex items-center gap-1"
                        >
                            <span>Lihat Semua</span>
                            <ArrowUpRight className="size-3" />
                        </Link>
                    </div>

                    {isLoading ? (
                        <div className="py-12 text-center text-xs font-mono text-[#5C5850]">
                            Memuat data brief...
                        </div>
                    ) : recentBriefs.length === 0 ? (
                        <div className="py-12 text-center space-y-2">
                            <FileText className="size-8 text-[#171715]/20 mx-auto" />
                            <p className="text-sm font-medium text-[#171715]">Belum ada project brief masuk</p>
                            <p className="text-xs text-[#5C5850]">
                                Form di halaman website akan otomatis tersimpan di sini.
                            </p>
                        </div>
                    ) : (
                        <div className="divide-y divide-[#171715]/5">
                            {recentBriefs.map((brief) => {
                                const date = new Date(brief.submittedAt);
                                const dateStr = date.toLocaleDateString("id-ID", {
                                    day: "numeric",
                                    month: "short",
                                    hour: "2-digit",
                                    minute: "2-digit",
                                });

                                return (
                                    <div key={brief.id} className="py-3.5 flex items-center justify-between gap-4">
                                        <div className="min-w-0">
                                            <div className="flex items-center gap-2">
                                                <p className="text-sm font-semibold text-[#171715] truncate">
                                                    {brief.name}
                                                </p>
                                                {brief.company && (
                                                    <span className="text-xs text-[#5C5850] truncate">
                                                        ({brief.company})
                                                    </span>
                                                )}
                                                <span
                                                    className={`text-[9px] font-mono uppercase px-2 py-0.5 rounded-full border ${
                                                        brief.status === "new"
                                                            ? "bg-[#A88C40]/15 text-[#A88C40] border-[#A88C40]/30 font-semibold"
                                                            : brief.status === "replied"
                                                            ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                                                            : "bg-slate-100 text-slate-700 border-slate-200"
                                                    }`}
                                                >
                                                    {brief.status === "new" ? "Baru" : brief.status === "replied" ? "Dibalas" : "Dibaca"}
                                                </span>
                                            </div>
                                            <p className="text-xs text-[#5C5850] truncate max-w-md mt-0.5">
                                                {brief.summary}
                                            </p>
                                        </div>

                                        <div className="text-right shrink-0">
                                            <span className="text-[11px] font-mono text-[#5C5850] block">
                                                {dateStr}
                                            </span>
                                            <Link
                                                href="/admin/briefs"
                                                className="text-[11px] font-mono text-[#A88C40] hover:underline"
                                            >
                                                Detail &rarr;
                                            </Link>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>

                {/* Right 1 Col: Pipeline Status & Quick Shortcuts */}
                <div className="space-y-6">
                    {/* Pipeline Status Breakdown */}
                    <div className="bg-white rounded-2xl border border-[#171715]/10 p-5 shadow-xs">
                        <h3 className="text-sm font-bold text-[#171715] mb-1">Status Pipeline</h3>
                        <p className="text-xs text-[#5C5850] mb-4">Distribusi penanganan brief saat ini</p>

                        <div className="space-y-3">
                            <div>
                                <div className="flex justify-between text-xs font-mono mb-1">
                                    <span className="text-[#A88C40] font-semibold">Baru (Belum Ditinjau)</span>
                                    <span>{newCount}</span>
                                </div>
                                <div className="w-full bg-[#171715]/5 h-2 rounded-full overflow-hidden">
                                    <div
                                        className="bg-[#A88C40] h-full rounded-full transition-all"
                                        style={{ width: `${briefs.length ? (newCount / briefs.length) * 100 : 0}%` }}
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex justify-between text-xs font-mono mb-1">
                                    <span className="text-[#5C5850]">Sedang Ditinjau / Dibaca</span>
                                    <span>{readCount}</span>
                                </div>
                                <div className="w-full bg-[#171715]/5 h-2 rounded-full overflow-hidden">
                                    <div
                                        className="bg-[#5C5850] h-full rounded-full transition-all"
                                        style={{ width: `${briefs.length ? (readCount / briefs.length) * 100 : 0}%` }}
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex justify-between text-xs font-mono mb-1">
                                    <span className="text-emerald-600 font-semibold">Selesai Dibalas / Follow-up</span>
                                    <span>{repliedCount}</span>
                                </div>
                                <div className="w-full bg-[#171715]/5 h-2 rounded-full overflow-hidden">
                                    <div
                                        className="bg-emerald-500 h-full rounded-full transition-all"
                                        style={{ width: `${briefs.length ? (repliedCount / briefs.length) * 100 : 0}%` }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quick Navigation Cards */}
                    <div className="bg-white rounded-2xl border border-[#171715]/10 p-5 shadow-xs">
                        <h3 className="text-sm font-bold text-[#171715] mb-3">Akses Cepat Pengelolaan</h3>
                        <div className="grid grid-cols-2 gap-2">
                            <Link
                                href="/admin/projects"
                                className="p-3 rounded-xl bg-[#171715]/5 hover:bg-[#171715]/10 transition-colors text-left group"
                            >
                                <FolderKanban className="size-4 text-[#A88C40] mb-1.5" />
                                <p className="text-xs font-semibold text-[#171715]">Client Stories</p>
                                <p className="text-[10px] text-[#5C5850]">6 Proyek aktif</p>
                            </Link>

                            <Link
                                href="/admin/services"
                                className="p-3 rounded-xl bg-[#171715]/5 hover:bg-[#171715]/10 transition-colors text-left group"
                            >
                                <Sparkles className="size-4 text-[#A88C40] mb-1.5" />
                                <p className="text-xs font-semibold text-[#171715]">Layanan</p>
                                <p className="text-[10px] text-[#5C5850]">Katalog & Model</p>
                            </Link>

                            <Link
                                href="/admin/messages"
                                className="p-3 rounded-xl bg-[#171715]/5 hover:bg-[#171715]/10 transition-colors text-left group"
                            >
                                <MessageSquare className="size-4 text-[#A88C40] mb-1.5" />
                                <p className="text-xs font-semibold text-[#171715]">Pesan Masuk</p>
                                <p className="text-[10px] text-[#5C5850]">Inquiry Kontak</p>
                            </Link>

                            <Link
                                href="/admin/settings"
                                className="p-3 rounded-xl bg-[#171715]/5 hover:bg-[#171715]/10 transition-colors text-left group"
                            >
                                <Activity className="size-4 text-[#A88C40] mb-1.5" />
                                <p className="text-xs font-semibold text-[#171715]">Pengaturan</p>
                                <p className="text-[10px] text-[#5C5850]">SEO & Studio</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
