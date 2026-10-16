'use client'

import { cn } from "@/lib/utils";
import { FunctionComponent } from "react";
import Card from "@/components/ui/card";
import { Compass, Target, CheckCircle2, TrendingUp, Layers } from "lucide-react";
import { useLang } from "@/lib/language-context";

interface StrategyProps {
    className?: string;
}

const strategyData = {
    en: {
        badge: "Strategy",
        title: "Strategy,",
        subtitle: "Start With The Right Direction.",
        desc: "Great digital work starts with knowing what matters. We uncover your goals, audience, challenges, and opportunities before deciding what should be designed or built.",
        card1Title: "Business & Digital Discovery",
        card1Sub: "Understand the business, goals, audience, and challenges.",
        c1ObjTitle: "Core Objectives",
        c1ObjDesc: "Revenue, conversion, and brand trust",
        c1AudTitle: "Audience Alignment",
        c1AudDesc: "Buyer behavior & user friction points",
        c1Foot: "High Clarity",
        card2Title: "Audience & Competitor Insight",
        card2Sub: "Find where your brand stands and where it can move.",
        c2Diff: "Differentiation",
        c2Fit: "Audience Value Fit",
        c2Foot: "Growth Path Mapped",
        card3Title: "Digital Roadmap",
        card3Sub: "Turn insights into clear priorities, structure, and next steps.",
        c3Step1: "1. Discovery & Positioning",
        c3Step2: "2. Architecture & Journey",
        c3Step3: "3. Implementation Scope",
        c3Foot: "Phased Execution"
    },
    id: {
        badge: "Strategi",
        title: "Strategi,",
        subtitle: "Mulai dengan Arah yang Tepat.",
        desc: "Karya digital terbaik lahir dari pemahaman atas apa yang esensial. Kami mengupas target bisnis, audiens, kendala, serta peluang sebelum menentukan apa yang perlu didesain atau dibangun.",
        card1Title: "Eksplorasi Bisnis & Digital",
        card1Sub: "Memahami model bisnis, target capaian, audiens, dan tantangan yang dihadapi.",
        c1ObjTitle: "Target Utama",
        c1ObjDesc: "Pendapatan, konversi, dan kredibilitas brand",
        c1AudTitle: "Penyelarasan Audiens",
        c1AudDesc: "Perilaku pembeli & titik hambatan interaksi",
        c1Foot: "Kejelasan Arah Tinggi",
        card2Title: "Wawasan Audiens & Kompetitor",
        card2Sub: "Menemukan posisi unik brand Anda di pasar dan potensi perkembangannya.",
        c2Diff: "Diferensiasi Pasar",
        c2Fit: "Kesesuaian Nilai Audiens",
        c2Foot: "Peta Pertumbuhan Terarah",
        card3Title: "Peta Jalan Digital",
        card3Sub: "Mengubah wawasan menjadi skala prioritas, struktur, dan rencana kerja terukur.",
        c3Step1: "1. Riset & Penentuan Posisi",
        c3Step2: "2. Arsitektur & Perjalanan Pengguna",
        c3Step3: "3. Cakupan Implementasi Nyata",
        c3Foot: "Eksekusi Bertahap"
    }
};

const Strategy: FunctionComponent<StrategyProps> = ({ className }) => {
    const { lang } = useLang();
    const t = strategyData[lang];

    return (
        <section id="strategy" className={cn("py-16 md:py-24 max-sm:px-5", className)}>
            <div className="max-w-5xl mx-auto font-medium relative">
                <span className="border text-xs uppercase tracking-wider font-mono py-1 px-3.5 border-[#586B6D]/30 text-[#586B6D] rounded-full bg-[#586B6D]/10">
                    {t.badge}
                </span>
                <h2 className="text-2xl md:text-4xl md:leading-12 my-3 font-semibold text-[#171715]">
                    {t.title} <br />
                    <span className="text-neutral-500 font-normal">
                        {t.subtitle}
                    </span>
                </h2>
                <p className="md:text-xl font-normal my-5 text-[#171715]/70 relative max-w-3xl leading-relaxed">
                    {t.desc}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 font-medium max-w-6xl mx-auto mt-12 gap-5">
                {/* 1. Business & Digital Discovery */}
                <Card
                    title={t.card1Title}
                    sub={t.card1Sub}
                    className="min-h-96 w-full"
                >
                    <div className="h-72 duration-300 overflow-hidden rounded-xl bg-[#F0ECE2]/50 border border-[#171715]/10 p-5 flex flex-col justify-between">
                        <div className="flex items-center justify-between pb-3 border-b border-[#171715]/10">
                            <span className="text-xs uppercase tracking-wider text-[#171715]/60 font-mono">Discovery Matrix</span>
                            <span className="text-xs px-2 py-0.5 rounded-full bg-[#586B6D]/15 text-[#586B6D] border border-[#586B6D]/30 font-mono">Phase 01</span>
                        </div>
                        <div className="space-y-2.5 my-auto">
                            <div className="bg-white p-3 rounded-lg border border-[#171715]/10 shadow-xs flex items-center gap-3">
                                <Target className="size-4 text-[#586B6D] shrink-0" />
                                <div>
                                    <p className="text-xs font-semibold text-[#171715]">{t.c1ObjTitle}</p>
                                    <p className="text-[11px] text-[#171715]/60">{t.c1ObjDesc}</p>
                                </div>
                            </div>
                            <div className="bg-white p-3 rounded-lg border border-[#171715]/10 shadow-xs flex items-center gap-3">
                                <Compass className="size-4 text-[#586B6D] shrink-0" />
                                <div>
                                    <p className="text-xs font-semibold text-[#171715]">{t.c1AudTitle}</p>
                                    <p className="text-[11px] text-[#171715]/60">{t.c1AudDesc}</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between pt-2 border-t border-[#171715]/10 text-xs text-[#171715]/60">
                            <span>Status: Verified</span>
                            <span className="text-[#586B6D] font-medium flex items-center gap-1">
                                <CheckCircle2 className="size-3.5" /> {t.c1Foot}
                            </span>
                        </div>
                    </div>
                </Card>

                {/* 2. Audience & Competitor Insight */}
                <Card
                    title={t.card2Title}
                    sub={t.card2Sub}
                    className="min-h-96 w-full"
                >
                    <div className="h-72 duration-300 overflow-hidden rounded-xl bg-[#F0ECE2]/50 border border-[#171715]/10 p-5 flex flex-col justify-between">
                        <div className="flex items-center justify-between pb-3 border-b border-[#171715]/10">
                            <span className="text-xs uppercase tracking-wider text-[#171715]/60 font-mono">Market Positioning</span>
                            <span className="text-xs px-2 py-0.5 rounded-full bg-[#586B6D]/15 text-[#586B6D] border border-[#586B6D]/30 font-mono">Analysis</span>
                        </div>
                        <div className="space-y-2 my-auto">
                            <div className="bg-white p-3 rounded-lg border border-[#171715]/10 space-y-2 shadow-xs">
                                <div className="flex justify-between text-xs">
                                    <span className="text-[#171715]/75">{t.c2Diff}</span>
                                    <span className="font-semibold text-[#171715]">Top 5%</span>
                                </div>
                                <div className="w-full bg-[#171715]/5 h-2 rounded-full overflow-hidden">
                                    <div className="bg-[#586B6D] h-full rounded-full w-[92%]" />
                                </div>
                            </div>
                            <div className="bg-white p-3 rounded-lg border border-[#171715]/10 space-y-2 shadow-xs">
                                <div className="flex justify-between text-xs">
                                    <span className="text-[#171715]/75">{t.c2Fit}</span>
                                    <span className="font-semibold text-[#171715]">96/100</span>
                                </div>
                                <div className="w-full bg-[#171715]/5 h-2 rounded-full overflow-hidden">
                                    <div className="bg-[#586B6D] h-full rounded-full w-[96%]" />
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between pt-2 border-t border-[#171715]/10 text-xs text-[#171715]/60">
                            <span>Market Void</span>
                            <span className="text-[#586B6D] font-medium flex items-center gap-1">
                                <TrendingUp className="size-3.5" /> {t.c2Foot}
                            </span>
                        </div>
                    </div>
                </Card>

                {/* 3. Digital Roadmap */}
                <Card
                    title={t.card3Title}
                    sub={t.card3Sub}
                    className="min-h-96 w-full"
                >
                    <div className="h-72 duration-300 overflow-hidden rounded-xl bg-[#F0ECE2]/50 border border-[#171715]/10 p-5 flex flex-col justify-between">
                        <div className="flex items-center justify-between pb-3 border-b border-[#171715]/10">
                            <span className="text-xs uppercase tracking-wider text-[#171715]/60 font-mono">Execution Plan</span>
                            <span className="text-xs px-2 py-0.5 rounded-full bg-[#586B6D]/15 text-[#586B6D] border border-[#586B6D]/30 font-mono">Timeline</span>
                        </div>
                        <div className="space-y-2 my-auto text-xs">
                            <div className="bg-white p-2.5 rounded-lg border border-[#171715]/10 flex items-center justify-between shadow-xs">
                                <span className="font-medium text-[#171715]">{t.c3Step1}</span>
                                <span className="font-mono text-[#586B6D]">{lang === "id" ? "Minggu 1–2" : "Week 1–2"}</span>
                            </div>
                            <div className="bg-white p-2.5 rounded-lg border border-[#171715]/10 flex items-center justify-between shadow-xs">
                                <span className="font-medium text-[#171715]">{t.c3Step2}</span>
                                <span className="font-mono text-[#586B6D]">{lang === "id" ? "Minggu 3–4" : "Week 3–4"}</span>
                            </div>
                            <div className="bg-white p-2.5 rounded-lg border border-[#171715]/10 flex items-center justify-between shadow-xs">
                                <span className="font-medium text-[#171715]">{t.c3Step3}</span>
                                <span className="font-mono text-[#586B6D]">{lang === "id" ? "Minggu 5+" : "Week 5+"}</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-between pt-2 border-t border-[#171715]/10 text-xs text-[#171715]/60">
                            <span>Deliverable</span>
                            <span className="text-[#586B6D] font-medium flex items-center gap-1">
                                <Layers className="size-3.5" /> {t.c3Foot}
                            </span>
                        </div>
                    </div>
                </Card>
            </div>
        </section>
    );
};

export default Strategy;
