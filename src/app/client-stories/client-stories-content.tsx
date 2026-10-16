"use client";

import { useLang } from "@/lib/language-context";
import ClientStoriesGrid from "@/components/sections/client-stories-grid";
import Clients from "@/components/sections/clients";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const clientStoriesData = {
    en: {
        badge: "Real Work. Real Partnerships.",
        h1: "Crafted in Partnership.",
        subtitle: "From Challenges to Digital Experiences That Move Businesses Forward.",
        body: "From strategy and identity to design, development, and growth — these are the stories behind what we build together.",
        selectedStories: "Selected Stories",
        processBadge: "Our Process Behind Every Project",
        processTitle: "How We Build Together.",
        processDesc: "A clear, disciplined process designed to eliminate guesswork and turn ambitious ideas into lasting digital products.",
        steps: [
            {
                step: "01",
                name: "Understand",
                desc: "We learn your business, users, and goals before writing code or drawing wireframes."
            },
            {
                step: "02",
                name: "Craft",
                desc: "We create the strategy, visual direction, design systems, and user journey architecture."
            },
            {
                step: "03",
                name: "Build",
                desc: "We develop and refine the experience with modern frameworks, clean code, and zero fluff."
            },
            {
                step: "04",
                name: "Grow",
                desc: "We measure real performance, optimize conversion friction, and continuously improve what we build."
            }
        ],
        ctaBadge: "Ready to build something lasting?",
        ctaTitle: "Have a Project in Mind?",
        ctaSubtitle: "From first brief to final launch — let’s create something that works.",
        ctaDesc: "Share your goals, challenges, and vision with us. We’ll review your inquiry and get back with clear next steps within 24 hours.",
        ctaBtn: "Start a Project"
    },
    id: {
        badge: "Karya Nyata. Kemitraan Sejati.",
        h1: "Diciptakan Lewat Kemitraan.",
        subtitle: "Dari Tantangan Nyata Menjadi Pengalaman Digital yang Memajukan Bisnis.",
        body: "Dari strategi dan identitas hingga desain, rekayasa kode, dan pertumbuhan — inilah kisah di balik apa yang kami bangun bersama para mitra.",
        selectedStories: "Kisah Pilihan",
        processBadge: "Alur Kerja di Balik Setiap Proyek",
        processTitle: "Bagaimana Kami Berkarya Bersama.",
        processDesc: "Proses terarah dan disiplin yang dirancang untuk mengeliminasi tebak-tebakan, mengubah ide ambisius menjadi produk digital berdaya tahan tinggi.",
        steps: [
            {
                step: "01",
                name: "Pahami (Understand)",
                desc: "Kami telaah model bisnis, profil pengguna, dan target Anda sebelum merancang wireframe maupun menulis kode."
            },
            {
                step: "02",
                name: "Rancang (Craft)",
                desc: "Kami racik strategi matang, arah visual, sistem desain, dan arsitektur alur perjalanan pengguna yang intuitif."
            },
            {
                step: "03",
                name: "Bangun (Build)",
                desc: "Kami kembangkan sistem dengan framework modern, kode bersih, cepat, dan tanpa kerumitan yang tak berguna."
            },
            {
                step: "04",
                name: "Kembangkan (Grow)",
                desc: "Kami ukur performa nyata, mengikis hambatan konversi, dan terus menyempurnakan produk yang telah diluncurkan."
            }
        ],
        ctaBadge: "Siap membangun sesuatu yang berdaya tahan?",
        ctaTitle: "Punya Rencana Proyek?",
        ctaSubtitle: "Dari brief pertama hingga rilis resmi — mari kita wujudkan solusi digital yang berdampak nyata.",
        ctaDesc: "Ceritakan target, tantangan, dan visi Anda kepada kami. Kami akan mengulasnya dan merespons dalam 24 jam dengan langkah konkret.",
        ctaBtn: "Mulai Proyek"
    }
};

export default function ClientStoriesContent() {
    const { lang } = useLang();
    const t = clientStoriesData[lang];

    return (
        <>
            {/* 1. Hero Section */}
            <section className="pt-36 md:pt-44 pb-12 md:pb-16 text-center">
                <div className="max-w-4xl mx-auto px-5">
                    <span className="inline-block border text-xs md:text-sm py-1 px-3.5 border-[#A88C40]/30 rounded-full font-mono text-[#A88C40] mb-6 bg-[#A88C40]/10 backdrop-blur-xs">
                        {t.badge}
                    </span>
                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold tracking-tight text-[#171715] mb-3">
                        {t.h1}
                    </h1>
                    <p className="text-xl sm:text-2xl md:text-3xl font-normal text-[#171715]/60 max-w-3xl mx-auto mb-6 leading-snug">
                        {t.subtitle}
                    </p>
                    <p className="text-base md:text-lg text-[#171715]/75 max-w-2xl mx-auto leading-relaxed">
                        {t.body}
                    </p>
                </div>
            </section>

            {/* 2. Selected Stories */}
            <section className="py-8 md:py-12">
                <div className="max-w-6xl mx-auto px-5 mb-8">
                    <span className="text-xs uppercase tracking-wider text-[#A88C40] font-mono">
                        {t.selectedStories}
                    </span>
                </div>
                <ClientStoriesGrid />
            </section>

            {/* 3. Collaborations */}
            <Clients />

            {/* 4. Our Process Behind Every Project */}
            <section className="py-16 md:py-24">
                <div className="max-w-6xl mx-auto px-5">
                    <div className="max-w-2xl mb-12">
                        <span className="text-xs uppercase tracking-wider text-[#A88C40] font-mono font-medium px-3.5 py-1 rounded-full bg-[#A88C40]/10 border border-[#A88C40]/25 inline-block mb-4">
                            {t.processBadge}
                        </span>
                        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[#171715] leading-tight">
                            {t.processTitle}
                        </h2>
                        <p className="text-[#5C5850] text-base md:text-lg mt-3 leading-relaxed">
                            {t.processDesc}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {t.steps.map((p, idx) => (
                            <div
                                key={idx}
                                className="bg-white/80 p-7 rounded-2xl border border-[#171715]/10 shadow-xs flex flex-col justify-between"
                            >
                                <span className="font-mono text-xs text-[#A88C40] font-semibold tracking-wider mb-6 block">
                                    {p.step} / {p.name.toUpperCase()}
                                </span>
                                <div>
                                    <h3 className="text-xl font-semibold text-[#171715] mb-2">
                                        {p.name}
                                    </h3>
                                    <p className="text-sm text-[#5C5850] leading-relaxed">
                                        {p.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Start a Project CTA */}
            <section className="pb-20">
                <div className="max-w-5xl p-8 md:p-14 rounded-2xl bg-white/90 border border-[#171715]/10 shadow-xs mx-5 md:mx-auto">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                        <div className="space-y-4 max-w-2xl">
                            <span className="text-xs uppercase tracking-wider text-[#A88C40] font-mono font-medium px-3.5 py-1 rounded-full bg-[#A88C40]/10 border border-[#A88C40]/25 inline-block">
                                {t.ctaBadge}
                            </span>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#171715]">
                                {t.ctaTitle}
                            </h2>
                            <p className="text-lg md:text-xl text-[#A88C40] font-medium">
                                {t.ctaSubtitle}
                            </p>
                            <p className="text-[#5C5850] text-sm md:text-base leading-relaxed">
                                {t.ctaDesc}
                            </p>
                        </div>
                        <div className="shrink-0">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[#171715] text-[#F0ECE2] font-medium text-sm md:text-base hover:bg-[#A88C40] hover:text-[#171715] transition-colors shadow-sm group"
                            >
                                {t.ctaBtn}{" "}
                                <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 duration-200" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
