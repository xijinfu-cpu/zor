'use client'

import { cn } from "@/lib/utils";
import { FunctionComponent } from "react";
import { Check, Gauge, Search, TrendingUp, Sparkles, Smartphone, CheckCircle2 } from "lucide-react";
import Card from "@/components/ui/card";
import { useLang } from "@/lib/language-context";

interface OptimizationProps {
    className?: string;
}

const optimizationData = {
    en: {
        badge: "Optimization",
        title: "Optimization,",
        subtitle: "Make Good Even Better.",
        desc: "Launch is not the finish line. We review performance, usability, search visibility, and technical health to find what can work better — then turn those insights into practical improvements.",
        card1Title: "Performance & Technical Audit",
        card1Sub: "Speed, core web vitals, code efficiency, and hosting infrastructure.",
        c1Perf: "Performance",
        c1Acc: "Accessibility",
        c1Foot: "High Speed",
        card2Title: "UX & Conversion Review",
        card2Sub: "Identify user friction, improve navigation, and boost user engagement.",
        c2Nav: "Clear Navigation & Hierarchy",
        c2Mob: "Mobile Usability & Touch Targets",
        c2Fun: "Checkout / Inquiry Funnel",
        c2Pass: "Passed",
        c2Opt: "Optimized",
        c2Foot: "Higher Conversion",
        card3Title: "SEO & Optimization",
        card3Sub: "Search visibility, metadata architecture, accessibility, and crawlability.",
        c3Head: "Semantic Headings & OpenGraph",
        c3Data: "Structured Schema.org Data",
        c3Rob: "Robots, Sitemap & Indexing",
        c3Foot: "Ranked to Win"
    },
    id: {
        badge: "Optimasi",
        title: "Optimasi,",
        subtitle: "Jadikan yang Baik Menjadi Lebih Sempurna.",
        desc: "Peluncuran website bukanlah garis akhir. Kami meninjau performa kecepatan, pengalaman pengguna, visibilitas mesin pencari, dan kesehatan teknis — lalu mengeksekusi penyempurnaan nyata.",
        card1Title: "Audit Teknis & Performa",
        card1Sub: "Kecepatan muat, Core Web Vitals, efisiensi kode, dan keandalan hosting.",
        c1Perf: "Performa",
        c1Acc: "Aksesibilitas",
        c1Foot: "Kecepatan Tinggi",
        card2Title: "Evaluasi UX & Konversi",
        card2Sub: "Menemukan hambatan pengguna, menyederhanakan navigasi, dan melipatgandakan interaksi.",
        c2Nav: "Navigasi & Hierarki Jernih",
        c2Mob: "Kenyamanan Tampilan Mobile",
        c2Fun: "Alur Pembelian / Kontak",
        c2Pass: "Lolos Uji",
        c2Opt: "Teroptimasi",
        c2Foot: "Konversi Meningkat",
        card3Title: "SEO & Visibilitas Pencarian",
        card3Sub: "Keterlihatan Google, arsitektur metadata, aksesibilitas, dan keterindeksan.",
        c3Head: "Struktur Heading & OpenGraph",
        c3Data: "Schema.org Terstruktur",
        c3Rob: "Robots, Sitemap & Indeksasi",
        c3Foot: "Siap Bersaing di Peringkat Atas"
    }
};

const Optimization: FunctionComponent<OptimizationProps> = ({ className }) => {
    const { lang } = useLang();
    const t = optimizationData[lang];

    return (
        <section className={cn("py-16 md:py-24 max-sm:px-5", className)} id="optimization">
            {/* Alias for legacy #audit links */}
            <div id="audit" className="relative -top-20" />

            <div className="max-w-5xl mx-auto font-medium relative">
                <span className="border text-xs uppercase tracking-wider font-mono py-1 px-3.5 border-[#2D8065]/30 text-[#2D8065] rounded-full bg-[#2D8065]/10">
                    {t.badge}
                </span>
                <h2 className="text-2xl md:text-4xl md:leading-12 my-3 font-semibold text-[#171715]">
                    {t.title} <br />
                    <span className="text-neutral-500 font-normal">
                        {t.subtitle}
                    </span>
                </h2>
                <p className="md:text-xl font-normal my-5 text-neutral-600 relative max-w-3xl leading-relaxed">
                    {t.desc}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 font-medium max-w-6xl mx-auto mt-12">
                {/* 1. Performance & Technical Audit */}
                <Card
                    title={t.card1Title}
                    sub={t.card1Sub}
                    className="min-h-96 w-full"
                >
                    <div className="h-72 duration-300 overflow-hidden rounded-xl bg-neutral-50 border border-neutral-200/60 p-5 flex flex-col justify-between">
                        <div className="flex items-center justify-between pb-3 border-b border-neutral-200">
                            <span className="text-xs uppercase tracking-wider text-neutral-500 font-mono flex items-center gap-1.5">
                                <Gauge className="size-3.5 text-emerald-600" /> Core Web Vitals
                            </span>
                            <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-mono">
                                99 Score
                            </span>
                        </div>
                        <div className="grid grid-cols-2 gap-3 my-auto">
                            <div className="bg-white p-3 rounded-lg border border-neutral-200 text-center">
                                <div className="size-12 rounded-full border-3 border-emerald-500 bg-emerald-50 text-emerald-600 font-bold text-sm flex items-center justify-center mx-auto mb-1">
                                    99
                                </div>
                                <span className="text-[11px] text-neutral-600 font-medium">{t.c1Perf}</span>
                            </div>
                            <div className="bg-white p-3 rounded-lg border border-neutral-200 text-center">
                                <div className="size-12 rounded-full border-3 border-emerald-500 bg-emerald-50 text-emerald-600 font-bold text-sm flex items-center justify-center mx-auto mb-1">
                                    98
                                </div>
                                <span className="text-[11px] text-neutral-600 font-medium">{t.c1Acc}</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-between pt-2 border-t border-neutral-200 text-xs text-neutral-500">
                            <span>Page Load: 0.6s</span>
                            <span className="text-emerald-600 font-medium flex items-center gap-1">
                                <CheckCircle2 className="size-3.5" /> {t.c1Foot}
                            </span>
                        </div>
                    </div>
                </Card>

                {/* 2. UX & Conversion Review */}
                <Card
                    title={t.card2Title}
                    sub={t.card2Sub}
                    className="min-h-96 w-full"
                >
                    <div className="h-72 duration-300 overflow-hidden rounded-xl bg-[#F0ECE2]/60 border border-[#171715]/10 p-5 flex flex-col justify-between">
                        <div className="flex items-center justify-between pb-3 border-b border-[#171715]/10">
                            <span className="text-xs uppercase tracking-wider text-[#171715]/60 font-mono flex items-center gap-1.5">
                                <Smartphone className="size-3.5 text-[#2D8065]" /> Usability Audit
                            </span>
                            <span className="text-[11px] px-2 py-0.5 rounded-full bg-[#2D8065]/10 text-[#2D8065] border border-[#2D8065]/25 font-mono">
                                Verified
                            </span>
                        </div>
                        <div className="space-y-2.5 my-auto text-xs">
                            <div className="bg-white/80 p-2.5 rounded-lg border border-[#171715]/10 flex items-center justify-between">
                                <span className="text-[#171715] font-medium">{t.c2Nav}</span>
                                <span className="text-[#2D8065] flex items-center gap-1 font-medium"><Check className="size-3.5" /> {t.c2Pass}</span>
                            </div>
                            <div className="bg-white/80 p-2.5 rounded-lg border border-[#171715]/10 flex items-center justify-between">
                                <span className="text-[#171715] font-medium">{t.c2Mob}</span>
                                <span className="text-[#2D8065] flex items-center gap-1 font-medium"><Check className="size-3.5" /> {t.c2Pass}</span>
                            </div>
                            <div className="bg-white/80 p-2.5 rounded-lg border border-[#171715]/10 flex items-center justify-between">
                                <span className="text-[#171715] font-medium">{t.c2Fun}</span>
                                <span className="text-[#2D8065] flex items-center gap-1 font-medium"><Sparkles className="size-3.5" /> {t.c2Opt}</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-between pt-2 border-t border-[#171715]/10 text-xs text-[#171715]/60">
                            <span>Zero Friction</span>
                            <span className="text-[#2D8065] font-medium flex items-center gap-1">
                                <TrendingUp className="size-3.5" /> {t.c2Foot}
                            </span>
                        </div>
                    </div>
                </Card>

                {/* 3. SEO & Optimization */}
                <Card
                    title={t.card3Title}
                    sub={t.card3Sub}
                    className="min-h-96 w-full"
                >
                    <div className="h-72 duration-300 overflow-hidden rounded-xl bg-neutral-50 border border-neutral-200/60 p-5 flex flex-col justify-between">
                        <div className="flex items-center justify-between pb-3 border-b border-neutral-200">
                            <span className="text-xs uppercase tracking-wider text-neutral-500 font-mono flex items-center gap-1.5">
                                <Search className="size-3.5 text-purple-600" /> Search Architecture
                            </span>
                            <span className="text-[11px] px-2 py-0.5 rounded-full bg-purple-50 text-purple-600 border border-purple-200 font-mono">
                                100 SEO
                            </span>
                        </div>
                        <div className="space-y-2.5 my-auto text-xs">
                            <div className="bg-white p-2.5 rounded-lg border border-neutral-200 flex items-center justify-between">
                                <span className="text-neutral-700 font-medium">{t.c3Head}</span>
                                <span className="text-emerald-600 font-medium">Configured</span>
                            </div>
                            <div className="bg-white p-2.5 rounded-lg border border-neutral-200 flex items-center justify-between">
                                <span className="text-neutral-700 font-medium">{t.c3Data}</span>
                                <span className="text-purple-600 font-medium">Rich Snippet</span>
                            </div>
                            <div className="bg-white p-2.5 rounded-lg border border-neutral-200 flex items-center justify-between">
                                <span className="text-neutral-700 font-medium">{t.c3Rob}</span>
                                <span className="text-emerald-600 font-medium">Valid</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-between pt-2 border-t border-neutral-200 text-xs text-neutral-500">
                            <span>Search Discoverability</span>
                            <span className="text-purple-600 font-medium flex items-center gap-1">
                                {t.c3Foot}
                            </span>
                        </div>
                    </div>
                </Card>
            </div>
        </section>
    );
};

export default Optimization;
