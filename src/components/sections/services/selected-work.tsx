'use client'

import { cn } from "@/lib/utils";
import { FunctionComponent } from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLang } from "@/lib/language-context";

interface SelectedWorkProps {
    className?: string;
}

const selectedWorkData = {
    en: {
        badge: "Selected Proof",
        title: "Real Work,",
        subtitle: "Turning Challenges Into Measurable Results.",
        desc: "We don’t just talk about craftsmanship — we prove it with every build. Here is how strategic thinking and clean execution translate into real business impact.",
        tag: "Case Study",
        headline: "How we transformed a complex AI platform into an intuitive, high-converting digital experience.",
        challengeTitle: "The Challenge",
        challengeDesc: "A powerful backend technology hindered by complex UX, slow loading times, and a scattered brand voice that confused potential clients.",
        solutionTitle: "What We Did",
        solutionDesc: "Clarified brand messaging, designed an intuitive user journey, and built a lightning-fast web experience with interactive product tours.",
        metric1Label: "Avg Load Time",
        metric2Label: "User Engagement",
        metric3Label: "Core Web Vitals",
        ctaBtn: "See All Client Stories",
        previewLabel: "Live Production Preview",
        metricLatency: "Search Engine Latency",
        metricReduction: "↓ 84% Reduction",
        statusLeft: "Status: Deployed & Active",
        statusRight: "High Impact"
    },
    id: {
        badge: "Bukti Nyata",
        title: "Karya Nyata,",
        subtitle: "Mengubah Tantangan Menjadi Hasil Terukur.",
        desc: "Kami tidak sekadar membicarakan mutu karya — kami membuktikannya di setiap proyek. Inilah wujud pemikiran strategis dan eksekusi presisi yang berdampak pada akselerasi bisnis.",
        tag: "Studi Kasus",
        headline: "Bagaimana kami merevitalisasi platform AI yang kompleks menjadi pengalaman digital yang intuitif dan berkonversi tinggi.",
        challengeTitle: "Tantangan",
        challengeDesc: "Teknologi backend bertenaga yang terhambat UX rumit, waktu muat lambat, dan pesan brand yang membingungkan calon klien korporat.",
        solutionTitle: "Solusi Kami",
        solutionDesc: "Mempertajam pesan brand, merancang alur interaksi intuitif, dan membangun web secepat kilat dengan tur produk interaktif.",
        metric1Label: "Waktu Muat Rata-rata",
        metric2Label: "Interaksi Pengguna",
        metric3Label: "Skor Core Web Vitals",
        ctaBtn: "Lihat Semua Kisah Klien",
        previewLabel: "Pratinjau Produksi Live",
        metricLatency: "Latensi Mesin Pencari",
        metricReduction: "↓ 84% Penurunan",
        statusLeft: "Status: Live & Aktif",
        statusRight: "Dampak Signifikan"
    }
};

const SelectedWork: FunctionComponent<SelectedWorkProps> = ({ className }) => {
    const { lang } = useLang();
    const t = selectedWorkData[lang];

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

            <div className="max-w-6xl mx-auto bg-white/80 rounded-2xl border border-[#171715]/10 p-6 md:p-10 shadow-xs font-medium">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    {/* Left: Project Details & Challenge/Solution/Outcome */}
                    <div className="lg:col-span-7 space-y-6">
                        <div className="flex items-center gap-3">
                            <span className="text-xs uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#A88C40]/10 text-[#A88C40] border border-[#A88C40]/25 font-mono">
                                {t.tag}
                            </span>
                            <span className="text-sm text-[#171715]/60 font-medium">
                                Unoversion — AI Search & Discovery
                            </span>
                        </div>

                        <h3 className="text-2xl md:text-3xl font-semibold text-[#171715] tracking-tight">
                            {t.headline}
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                            <div className="p-4 rounded-xl bg-[#F0ECE2]/50 border border-[#171715]/10">
                                <p className="text-xs uppercase tracking-wider font-mono text-[#A88C40] mb-1">{t.challengeTitle}</p>
                                <p className="text-xs text-[#171715]/75 leading-relaxed font-normal">
                                    {t.challengeDesc}
                                </p>
                            </div>
                            <div className="p-4 rounded-xl bg-[#F0ECE2]/50 border border-[#171715]/10">
                                <p className="text-xs uppercase tracking-wider font-mono text-[#A88C40] mb-1">{t.solutionTitle}</p>
                                <p className="text-xs text-[#171715]/75 leading-relaxed font-normal">
                                    {t.solutionDesc}
                                </p>
                            </div>
                        </div>

                        {/* Outcomes */}
                        <div className="grid grid-cols-3 gap-3 pt-2 border-t border-[#171715]/10">
                            <div>
                                <p className="text-xl md:text-2xl font-bold text-[#171715]">0.5s</p>
                                <p className="text-[11px] text-[#171715]/50 font-normal">{t.metric1Label}</p>
                            </div>
                            <div>
                                <p className="text-xl md:text-2xl font-bold text-[#A88C40]">+180%</p>
                                <p className="text-[11px] text-[#171715]/50 font-normal">{t.metric2Label}</p>
                            </div>
                            <div>
                                <p className="text-xl md:text-2xl font-bold text-[#171715]">100/100</p>
                                <p className="text-[11px] text-[#171715]/50 font-normal">{t.metric3Label}</p>
                            </div>
                        </div>

                        <div className="pt-2">
                            <Button asChild variant="outline" className="group rounded-full border-[#171715]/20 hover:bg-[#171715] hover:text-[#F0ECE2]">
                                <Link href="/client-stories">
                                    {t.ctaBtn} <ArrowUpRight className="size-4 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 duration-200" />
                                </Link>
                            </Button>
                        </div>
                    </div>

                    {/* Right: Visual Mockup */}
                    <div className="lg:col-span-5">
                        <div className="rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800 p-5 text-white flex flex-col justify-between min-h-[340px]">
                            <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
                                <div className="flex items-center gap-1.5">
                                    <div className="size-2 rounded-full bg-red-500/80" />
                                    <div className="size-2 rounded-full bg-yellow-500/80" />
                                    <div className="size-2 rounded-full bg-green-500/80" />
                                </div>
                                <span className="text-[11px] font-mono text-neutral-400">{t.previewLabel}</span>
                            </div>

                            <div className="my-auto py-6 space-y-4">
                                <div className="h-28 rounded-lg bg-neutral-800/80 border border-neutral-700/80 p-4 flex flex-col justify-between">
                                    <span className="text-xs font-mono text-[#A88C40]">{t.metricLatency}</span>
                                    <div className="flex items-baseline justify-between">
                                        <span className="text-3xl font-bold">12ms</span>
                                        <span className="text-xs text-emerald-400 font-mono">{t.metricReduction}</span>
                                    </div>
                                    <div className="w-full bg-neutral-700 h-1.5 rounded-full overflow-hidden">
                                        <div className="bg-emerald-400 h-full w-[94%]" />
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center justify-between text-xs text-neutral-400 pt-3 border-t border-neutral-800 font-mono">
                                <span>{t.statusLeft}</span>
                                <span className="text-emerald-400 flex items-center gap-1">
                                    <CheckCircle2 className="size-3.5" /> {t.statusRight}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SelectedWork;
