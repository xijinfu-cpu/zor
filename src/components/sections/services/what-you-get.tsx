'use client'

import { cn } from "@/lib/utils";
import { FunctionComponent } from "react";
import { Check, ShieldCheck, FileCode, Clock, MessageSquare, BookOpen, Layers } from "lucide-react";
import { useLang } from "@/lib/language-context";

interface WhatYouGetProps {
    className?: string;
}

const whatYouGetData = {
    en: {
        badge: "Deliverables",
        title: "Clear From Start to Finish,",
        subtitle: "What You Actually Receive.",
        desc: "No guesswork. Working with ZORS means structured collaboration, transparent milestones, and complete ownership of everything we craft together.",
        guarantee: "Guaranteed Delivery",
        deliverables: [
            {
                icon: ShieldCheck,
                title: "Clear Project Scope",
                desc: "Defined deliverables, agreed requirements, and fixed pricing with zero surprise costs."
            },
            {
                icon: Clock,
                title: "Timeline & Milestones",
                desc: "Structured sprints with transparent checkpoints, clear delivery dates, and predictable progress."
            },
            {
                icon: MessageSquare,
                title: "Regular Progress Updates",
                desc: "Direct communication via dedicated Slack channel, async walkthroughs, and weekly alignment syncs."
            },
            {
                icon: FileCode,
                title: "100% Design & Code Ownership",
                desc: "Full transfer of all Figma design files, brand assets, and GitHub production source repositories."
            },
            {
                icon: Check,
                title: "Tested Production-Ready Delivery",
                desc: "Cross-browser tested, fully mobile-responsive, performance-optimized, and SEO compliant."
            },
            {
                icon: BookOpen,
                title: "Documentation & Handover",
                desc: "Clear system guides and video walkthroughs so your internal team can manage the platform with ease."
            },
            {
                icon: Layers,
                title: "Post-Launch Warranty & Support",
                desc: "Included post-launch buffer period to ensure total stability, monitor traffic, and handle adjustments."
            },
        ]
    },
    id: {
        badge: "Keluaran Proyek",
        title: "Transparan Sejak Awal Hingga Akhir,",
        subtitle: "Apa yang Sesungguhnya Anda Terima.",
        desc: "Tanpa tebak-tebakan. Bermitra dengan ZORS berarti alur kolaborasi terstruktur, pencapaian transparan, dan kepemilikan mutlak 100% atas semua yang kita bangun bersama.",
        guarantee: "Jaminan Serah Terima",
        deliverables: [
            {
                icon: ShieldCheck,
                title: "Cakupan Proyek yang Jelas",
                desc: "Hasil akhir terdefinisi, kesepakatan kebutuhan terperinci, dan skema biaya pasti tanpa biaya tersembunyi."
            },
            {
                icon: Clock,
                title: "Linimasa & Milestone Terarah",
                desc: "Sprint terstruktur dengan pos pemeriksaan berkala, tanggal rilis transparan, dan progres terukur."
            },
            {
                icon: MessageSquare,
                title: "Laporan Kemajuan Berkala",
                desc: "Komunikasi langsung via kanal tim khusus, video async, dan sinkronisasi mingguan."
            },
            {
                icon: FileCode,
                title: "100% Kepemilikan Desain & Kode",
                desc: "Transfer penuh seluruh file desain Figma, aset brand, serta repositori kode sumber produksi di GitHub."
            },
            {
                icon: Check,
                title: "Rilis Teruji & Siap Produksi",
                desc: "Teruji di berbagai browser, responsif mobile sempurna, performa cepat, dan kepatuhan standar SEO."
            },
            {
                icon: BookOpen,
                title: "Dokumentasi & Serah Terima Lengkap",
                desc: "Buku panduan sistem terperinci dan video tutorial agar tim internal Anda dapat mengelola web dengan mudah."
            },
            {
                icon: Layers,
                title: "Garansi & Pendampingan Paska Rilis",
                desc: "Masa garansi paska peluncuran untuk memastikan stabilitas sistem, pemantauan trafik, dan penyesuaian."
            },
        ]
    }
};

const WhatYouGet: FunctionComponent<WhatYouGetProps> = ({ className }) => {
    const { lang } = useLang();
    const t = whatYouGetData[lang];

    return (
        <section className={cn("py-16 md:py-24 max-sm:px-5", className)}>
            <div className="max-w-5xl mx-auto font-medium relative mb-12">
                <span className="border text-xs uppercase tracking-wider font-mono py-1 px-3.5 border-[#A88C40]/30 rounded-full bg-[#A88C40]/10 text-[#A88C40]">
                    {t.badge}
                </span>
                <h1 className="text-2xl md:text-4xl md:leading-12 my-3 font-semibold text-[#171715]">
                    {t.title} <br />
                    <span className="text-[#171715]/50 font-normal">
                        {t.subtitle}
                    </span>
                </h1>
                <p className="md:text-xl font-normal text-[#171715]/75 relative max-w-3xl leading-relaxed">
                    {t.desc}
                </p>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 font-medium">
                {t.deliverables.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                        <div
                            key={index}
                            className={`p-6 bg-white/80 rounded-xl border border-[#171715]/10 shadow-xs flex flex-col justify-between ${
                                index === t.deliverables.length - 1 ? "md:col-span-2 lg:col-span-1" : ""
                            }`}
                        >
                            <div>
                                <div className="size-10 rounded-lg bg-[#A88C40]/10 flex items-center justify-center text-[#A88C40] mb-4">
                                    <IconComponent className="size-5" />
                                </div>
                                <h4 className="text-lg font-semibold text-[#171715] mb-2">
                                    {item.title}
                                </h4>
                                <p className="text-sm text-[#171715]/70 font-normal leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                            <div className="pt-4 mt-4 border-t border-[#171715]/10 flex items-center gap-1.5 text-xs text-[#2D8065]">
                                <Check className="size-3.5" /> {t.guarantee}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default WhatYouGet;
