'use client'

import { cn } from "@/lib/utils";
import { FunctionComponent } from "react";
import { ShieldCheck, RefreshCw, Activity, Clock, HeartPulse } from "lucide-react";
import Card from "@/components/ui/card";
import { useLang } from "@/lib/language-context";

interface SupportProps {
    className?: string;
}

const supportData = {
    en: {
        badge: "06 / Support",
        title: "Support,",
        subtitle: "Built To Keep Growing.",
        desc: "Digital products need attention after launch. We stay available to maintain, improve, and evolve what we build as your business grows.",
        card1Title: "Maintenance & Monitoring",
        card1Sub: "Keep your website healthy, secure, and running smoothly.",
        c1Uptime: "System Uptime",
        c1Backups: "Daily Cloud Backups",
        c1Sec: "Security & Patch Updates",
        c1Ssl: "SSL & Domain Health",
        c1Foot: "Guarded Continuity",
        card2Title: "Content & Feature Updates",
        card2Sub: "Keep your digital presence current as your business changes.",
        c2Agility: "Agility & Updates",
        c2Turnaround: "Fast Turnaround",
        c2Camp: "New Campaign Landing Pages",
        c2Asset: "Asset & Copy Adjustments",
        c2Promo: "Seasonal Promos & Banners",
        c2Foot: "Direct SLA",
        card3Title: "Continuous Improvement",
        card3Sub: "Improve performance, UX, and functionality over time.",
        c3Growth: "Growth Iterations",
        c3Retainer: "Retainer",
        c3Speed: "Monthly Speed & SEO Review",
        c3Heatmap: "Heatmap & Drop-off Fixes",
        c3Roadmap: "Feature Expansion Roadmap",
        c3Foot: "Partner in Growth"
    },
    id: {
        badge: "06 / Dukungan",
        title: "Dukungan,",
        subtitle: "Dirancang untuk Terus Berkembang.",
        desc: "Produk digital membutuhkan pendampingan berkelanjutan paska rilis. Kami siap memelihara, memperbarui, dan mengembangkan aset digital seiring skala bisnis Anda melesat.",
        card1Title: "Pemeliharaan & Pemantauan",
        card1Sub: "Menjaga website Anda tetap prima, aman, dan beroperasi tanpa henti.",
        c1Uptime: "Uptime Sistem",
        c1Backups: "Cadangan Cloud Harian",
        c1Sec: "Pembaruan Patch & Keamanan",
        c1Ssl: "Kesehatan SSL & Domain",
        c1Foot: "Keberlanjutan Terjaga",
        card2Title: "Pembaruan Konten & Fitur",
        card2Sub: "Memastikan kehadiran digital Anda selalu relevan dengan dinamika bisnis.",
        c2Agility: "Kelincahan & Update",
        c2Turnaround: "Respon Cepat",
        c2Camp: "Landing Page Kampanye Baru",
        c2Asset: "Penyesuaian Aset & Copy",
        c2Promo: "Banner & Promo Musiman",
        c2Foot: "SLA Langsung",
        card3Title: "Penyempurnaan Berkelanjutan",
        card3Sub: "Tingkatkan performa, kenyamanan pengguna, dan fungsionalitas dari waktu ke waktu.",
        c3Growth: "Iterasi Pertumbuhan",
        c3Retainer: "Retainer",
        c3Speed: "Evaluasi SEO & Kecepatan Bulanan",
        c3Heatmap: "Perbaikan Drop-off & Heatmap",
        c3Roadmap: "Peta Rilis Fitur Lanjutan",
        c3Foot: "Mitra Tumbuh Bersama"
    }
};

const Support: FunctionComponent<SupportProps> = ({ className }) => {
    const { lang } = useLang();
    const t = supportData[lang];

    return (
        <section className={cn("py-16 md:py-24 max-sm:px-5", className)} id="support">
            <div className="max-w-5xl mx-auto font-medium relative">
                <span className="border text-xs uppercase tracking-wider font-mono py-1 px-3 border-[#2D8065]/30 rounded-full bg-[#2D8065]/10 text-[#2D8065]">
                    {t.badge}
                </span>
                <h1 className="text-2xl md:text-4xl md:leading-12 my-3 font-semibold text-[#171715]">
                    {t.title} <br />
                    <span className="text-[#171715]/50 font-normal">
                        {t.subtitle}
                    </span>
                </h1>
                <p className="md:text-xl font-normal my-5 text-[#171715]/70 relative max-w-3xl leading-relaxed">
                    {t.desc}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 font-medium max-w-6xl mx-auto mt-12">
                {/* 1. Maintenance & Monitoring */}
                <Card
                    title={t.card1Title}
                    sub={t.card1Sub}
                    className="min-h-96 w-full"
                >
                    <div className="h-72 duration-300 overflow-hidden rounded-xl bg-[#F0ECE2]/60 border border-[#171715]/10 p-5 flex flex-col justify-between">
                        <div className="flex items-center justify-between pb-3 border-b border-[#171715]/10">
                            <span className="text-xs uppercase tracking-wider text-[#171715]/60 font-mono flex items-center gap-1.5">
                                <HeartPulse className="size-3.5 text-[#2D8065]" /> {t.c1Uptime}
                            </span>
                            <span className="text-[11px] px-2 py-0.5 rounded-full bg-[#2D8065]/10 text-[#2D8065] border border-[#2D8065]/25 font-mono">
                                99.9% Active
                            </span>
                        </div>
                        <div className="space-y-2 my-auto text-xs">
                            <div className="bg-white/80 p-2.5 rounded-lg border border-[#171715]/10 flex items-center justify-between">
                                <span className="text-[#171715] font-medium">{t.c1Backups}</span>
                                <span className="text-[#2D8065] font-mono">Encrypted</span>
                            </div>
                            <div className="bg-white/80 p-2.5 rounded-lg border border-[#171715]/10 flex items-center justify-between">
                                <span className="text-[#171715] font-medium">{t.c1Sec}</span>
                                <span className="text-[#171715]/80 font-mono">Automated</span>
                            </div>
                            <div className="bg-white/80 p-2.5 rounded-lg border border-[#171715]/10 flex items-center justify-between">
                                <span className="text-[#171715] font-medium">{t.c1Ssl}</span>
                                <span className="text-[#2D8065] font-mono">Active</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-between pt-2 border-t border-[#171715]/10 text-xs text-[#171715]/60">
                            <span>Peace of Mind</span>
                            <span className="text-[#2D8065] font-medium flex items-center gap-1">
                                <ShieldCheck className="size-3.5 text-[#2D8065]" /> {t.c1Foot}
                            </span>
                        </div>
                    </div>
                </Card>

                {/* 2. Content & Feature Updates */}
                <Card
                    title={t.card2Title}
                    sub={t.card2Sub}
                    className="min-h-96 w-full"
                >
                    <div className="h-72 duration-300 overflow-hidden rounded-xl bg-[#F0ECE2]/60 border border-[#171715]/10 p-5 flex flex-col justify-between">
                        <div className="flex items-center justify-between pb-3 border-b border-[#171715]/10">
                            <span className="text-xs uppercase tracking-wider text-[#171715]/60 font-mono flex items-center gap-1.5">
                                <RefreshCw className="size-3.5 text-[#2D8065]" /> {t.c2Agility}
                            </span>
                            <span className="text-[11px] px-2 py-0.5 rounded-full bg-[#2D8065]/10 text-[#2D8065] border border-[#2D8065]/25 font-mono">
                                {t.c2Turnaround}
                            </span>
                        </div>
                        <div className="space-y-2 my-auto text-xs">
                            <div className="bg-white/80 p-2.5 rounded-lg border border-[#171715]/10 flex items-center justify-between">
                                <span className="text-[#171715] font-medium">{t.c2Camp}</span>
                                <span className="text-[#171715] font-medium font-mono">Ready</span>
                            </div>
                            <div className="bg-white/80 p-2.5 rounded-lg border border-[#171715]/10 flex items-center justify-between">
                                <span className="text-[#171715] font-medium">{t.c2Asset}</span>
                                <span className="text-[#171715] font-medium font-mono">&lt; 24h</span>
                            </div>
                            <div className="bg-white/80 p-2.5 rounded-lg border border-[#171715]/10 flex items-center justify-between">
                                <span className="text-[#171715] font-medium">{t.c2Promo}</span>
                                <span className="text-[#2D8065] font-medium font-mono">Scheduled</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-between pt-2 border-t border-[#171715]/10 text-xs text-[#171715]/60">
                            <span>Never Outdated</span>
                            <span className="text-[#2D8065] font-medium flex items-center gap-1">
                                <Clock className="size-3.5 text-[#2D8065]" /> {t.c2Foot}
                            </span>
                        </div>
                    </div>
                </Card>

                {/* 3. Continuous Improvement */}
                <Card
                    title={t.card3Title}
                    sub={t.card3Sub}
                    className="min-h-96 w-full"
                >
                    <div className="h-72 duration-300 overflow-hidden rounded-xl bg-[#F0ECE2]/60 border border-[#171715]/10 p-5 flex flex-col justify-between">
                        <div className="flex items-center justify-between pb-3 border-b border-[#171715]/10">
                            <span className="text-xs uppercase tracking-wider text-[#171715]/60 font-mono flex items-center gap-1.5">
                                <Activity className="size-3.5 text-[#2D8065]" /> {t.c3Growth}
                            </span>
                            <span className="text-[11px] px-2 py-0.5 rounded-full bg-[#2D8065]/10 text-[#2D8065] border border-[#2D8065]/25 font-mono">
                                {t.c3Retainer}
                            </span>
                        </div>
                        <div className="space-y-2 my-auto text-xs">
                            <div className="bg-white/80 p-2.5 rounded-lg border border-[#171715]/10 flex items-center justify-between">
                                <span className="text-[#171715] font-medium">{t.c3Speed}</span>
                                <span className="text-[#2D8065] font-medium">Reported</span>
                            </div>
                            <div className="bg-white/80 p-2.5 rounded-lg border border-[#171715]/10 flex items-center justify-between">
                                <span className="text-[#171715] font-medium">{t.c3Heatmap}</span>
                                <span className="text-[#2D8065] font-medium">+15% Gain</span>
                            </div>
                            <div className="bg-white/80 p-2.5 rounded-lg border border-[#171715]/10 flex items-center justify-between">
                                <span className="text-[#171715] font-medium">{t.c3Roadmap}</span>
                                <span className="text-[#171715] font-medium">Iterated</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-between pt-2 border-t border-[#171715]/10 text-xs text-[#171715]/60">
                            <span>Evolution Over Time</span>
                            <span className="text-[#2D8065] font-medium flex items-center gap-1">
                                {t.c3Foot}
                            </span>
                        </div>
                    </div>
                </Card>
            </div>
        </section>
    );
};

export default Support;
