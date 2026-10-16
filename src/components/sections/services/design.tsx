'use client'

import { cn } from "@/lib/utils";
import { FunctionComponent } from "react";
import Card from "@/components/ui/card";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Layers, Layout, MousePointerClick, Eye, Sparkles } from "lucide-react";
import { useLang } from "@/lib/language-context";

interface DesigningProps {
    className?: string;
}

const designData = {
    en: {
        badge: "Design",
        title: "Design,",
        subtitle: "With Purpose.",
        tagline: "Made for real users — not just screens.",
        desc: "We turn ideas into intuitive digital experiences through structure, interaction, and thoughtful visual design — making every screen clear, useful, and easy to navigate.",
        card1Title: "UX & Wireframing",
        card1Sub: "Structural blueprints and user journey flows to align on architecture early.",
        c1Flow: "UX Flow",
        c1Step1: "Homepage → Core Offer",
        c1Step2: "Product Tour → Conversion",
        c1Foot: "High Usability",
        card2Title: "UI Design",
        card2Sub: "Modern, purposeful interfaces designed with clarity, contrast, and attention to detail.",
        c2Foot: "Pixel Crafted",
        card3Title: "Design System & Prototyping",
        card3Sub: "Component libraries, tokens, and interactive flows for smooth developer handoff.",
        c3Foot: "0% Misalignment"
    },
    id: {
        badge: "Desain",
        title: "Desain,",
        subtitle: "Penuh Tujuan Nyata.",
        tagline: "Dirancang untuk pengguna nyata — bukan sekadar pajangan layar.",
        desc: "Kami mengubah visi Anda menjadi pengalaman digital yang intuitif melalui arsitektur terstruktur, interaksi mulus, dan desain visual yang jernih — membuat setiap layar mudah dipahami dan nyaman dinavigasi.",
        card1Title: "UX & Wireframing",
        card1Sub: "Cetak biru struktural dan alur perjalanan pengguna untuk menyelaraskan arsitektur sejak awal.",
        c1Flow: "Alur UX",
        c1Step1: "Beranda → Penawaran Utama",
        c1Step2: "Tur Produk → Konversi Transaksi",
        c1Foot: "Tingkat Kegunaan Tinggi",
        card2Title: "Desain UI (Antarmuka)",
        card2Sub: "Tampilan modern dan estetis yang dirancang dengan kontras tajam, keterbacaan tinggi, dan ketelitian detail.",
        c2Foot: "Presisi Setiap Piksel",
        card3Title: "Sistem Desain & Prototipe",
        card3Sub: "Pustaka komponen, token desain terstandar, dan prototipe interaktif untuk kemudahan serah terima ke tim engineer.",
        c3Foot: "0% Miskomunikasi"
    }
};

const Designing: FunctionComponent<DesigningProps> = ({ className }) => {
    const { lang } = useLang();
    const t = designData[lang];

    return (
        <section className={cn("py-16 md:py-24 max-sm:px-5", className)} id="design">
            {/* Hidden anchor for legacy links */}
            <div id="designing" className="relative -top-20" />

            <div className="max-w-5xl mx-auto font-medium relative">
                <span className="border text-xs uppercase tracking-wider font-mono py-1 px-3.5 border-[#7D568E]/30 text-[#7D568E] rounded-full bg-[#7D568E]/10">
                    {t.badge}
                </span>
                <h2 className="text-2xl md:text-4xl md:leading-12 my-3 font-semibold text-[#171715]">
                    {t.title} <br />
                    <span className="text-neutral-500 font-normal">
                        {t.subtitle}
                    </span>
                </h2>
                <p className="text-[#7D568E] text-sm md:text-base font-medium">
                    {t.tagline}
                </p>
                <p className="md:text-xl font-normal my-4 text-neutral-600 relative max-w-3xl leading-relaxed">
                    {t.desc}
                </p>
                <div className="flex absolute -top-10 md:top-24 md:-right-6 gap-4 opacity-75">
                    <Icon icon={"logos:figma"} className="size-6 md:size-10" />
                    <Icon icon={"logos:framer"} className="size-6 md:size-10" />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 font-medium max-w-6xl mx-auto mt-12">
                {/* 1. UX & Wireframing */}
                <Card
                    title={t.card1Title}
                    sub={t.card1Sub}
                    className="min-h-96 w-full"
                >
                    <div className="h-72 duration-300 overflow-hidden rounded-xl bg-neutral-900 text-white p-5 flex flex-col justify-between">
                        <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
                            <span className="text-xs uppercase tracking-wider text-neutral-400 font-mono flex items-center gap-1.5">
                                <Layout className="size-3.5 text-[#7D568E]" /> User Journey Blueprint
                            </span>
                            <span className="text-[11px] px-2 py-0.5 rounded bg-neutral-800 text-neutral-300">{t.c1Flow}</span>
                        </div>
                        {/* Interactive Blueprint diagram */}
                        <div className="my-auto space-y-2">
                            <div className="bg-neutral-800/80 border border-neutral-700/60 p-3 rounded-lg flex items-center justify-between">
                                <span className="text-xs text-neutral-300">{t.c1Step1}</span>
                                <span className="text-[10px] text-emerald-400 font-mono">0.8s drop-off fixed</span>
                            </div>
                            <div className="w-0.5 h-3 bg-neutral-700 mx-auto" />
                            <div className="bg-neutral-800/80 border border-neutral-700/60 p-3 rounded-lg flex items-center justify-between">
                                <span className="text-xs text-neutral-300">{t.c1Step2}</span>
                                <span className="text-[10px] text-[#7D568E] font-mono">3 Steps Clean</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-between pt-2 border-t border-neutral-800 text-xs text-neutral-400">
                            <span>Frictionless Paths</span>
                            <span className="text-neutral-200 flex items-center gap-1">
                                <MousePointerClick className="size-3 text-[#7D568E]" /> {t.c1Foot}
                            </span>
                        </div>
                    </div>
                </Card>

                {/* 2. UI Design */}
                <Card
                    title={t.card2Title}
                    sub={t.card2Sub}
                    className="min-h-96 w-full"
                >
                    <div className="h-72 duration-300 overflow-hidden rounded-xl bg-[#F0ECE2]/60 border border-[#171715]/10 p-4 flex flex-col justify-between">
                        <div className="flex items-center justify-between pb-2 border-b border-[#171715]/10">
                            <span className="text-xs uppercase tracking-wider text-[#171715]/60 font-mono flex items-center gap-1">
                                <Eye className="size-3.5 text-[#7D568E]" /> Visual Interface
                            </span>
                            <span className="text-[11px] px-2 py-0.5 rounded-full bg-[#7D568E]/10 text-[#7D568E] border border-[#7D568E]/25 font-mono">Hi-Fi</span>
                        </div>
                        <div className="bg-white/80 rounded-lg border border-[#171715]/10 p-3 shadow-xs space-y-2.5 my-auto">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-1.5">
                                    <div className="size-2 rounded-full bg-[#171715]/30" />
                                    <div className="size-2 rounded-full bg-[#171715]/30" />
                                    <div className="size-2 rounded-full bg-[#171715]/30" />
                                </div>
                                <span className="text-[10px] text-[#171715]/50 font-mono">app.zors.studio</span>
                            </div>
                            <div className="h-14 bg-[#171715] rounded p-2 text-[#F0ECE2] flex flex-col justify-between">
                                <p className="text-[11px] font-medium">Analytics Overview</p>
                                <div className="flex items-baseline justify-between">
                                    <span className="text-sm font-semibold tracking-tight">+284.5%</span>
                                    <span className="text-[9px] text-[#7D568E]">↑ Organic</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between pt-2 border-t border-[#171715]/10 text-xs text-[#171715]/60">
                            <span>Aesthetic & Hierarchy</span>
                            <span className="text-[#7D568E] font-medium flex items-center gap-1">
                                <Sparkles className="size-3.5 text-[#7D568E]" /> {t.c2Foot}
                            </span>
                        </div>
                    </div>
                </Card>

                {/* 3. Design System & Prototyping */}
                <Card
                    title={t.card3Title}
                    sub={t.card3Sub}
                    className="min-h-96 w-full"
                >
                    <div className="h-72 duration-300 overflow-hidden rounded-xl bg-[#F0ECE2]/60 border border-[#171715]/10 p-4 flex flex-col justify-between">
                        <div className="flex items-center justify-between pb-2 border-b border-[#171715]/10">
                            <span className="text-xs uppercase tracking-wider text-[#171715]/60 font-mono flex items-center gap-1">
                                <Layers className="size-3.5 text-[#7D568E]" /> Design Tokens
                            </span>
                            <span className="text-[11px] px-2 py-0.5 rounded-full bg-[#7D568E]/10 text-[#7D568E] border border-[#7D568E]/25 font-mono">Scale Ready</span>
                        </div>
                        <div className="space-y-2 my-auto">
                            <div className="bg-white/80 p-2 rounded-md border border-[#171715]/10 flex items-center justify-between text-xs">
                                <span className="font-mono text-[#171715]/70">--radius-card</span>
                                <span className="text-[#171715] font-semibold font-mono">16px</span>
                            </div>
                            <div className="bg-white/80 p-2 rounded-md border border-[#171715]/10 flex items-center justify-between text-xs">
                                <span className="font-mono text-[#171715]/70">--motion-spring</span>
                                <span className="text-[#171715] font-semibold font-mono">300ms ease</span>
                            </div>
                            <div className="bg-white/80 p-2 rounded-md border border-[#171715]/10 flex items-center justify-between text-xs">
                                <span className="font-mono text-[#171715]/70">--color-primary</span>
                                <span className="text-[#A88C40] font-semibold font-mono">#A88C40</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-between pt-2 border-t border-[#171715]/10 text-xs text-[#171715]/60">
                            <span>Figma → Code Handoff</span>
                            <span className="text-[#7D568E] font-medium flex items-center gap-1">
                                {t.c3Foot}
                            </span>
                        </div>
                    </div>
                </Card>
            </div>
        </section>
    );
};

export default Designing;