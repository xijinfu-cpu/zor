'use client';

import { cn, getAssetPath } from "@/lib/utils";
import { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "../ui/button";
import { useLang } from "@/lib/language-context";

interface HeroProps { className?: string; }

const content = {
    en: {
        badge: "Built Different. Meant to Last.",
        tagline: ["Think.", "Craft.", "Grow."],
        sub: "Digital studio crafting brands, websites, and digital products built to last.",
        desc: "From strategy and brand identity to websites, digital experiences, and product solutions, we help businesses build trust, attract customers, and grow.",
        cta: "Start a Project",
        ctaSecondary: "View Our Services",
        cards: [
            { num: "01", category: "Branding", title: "Brand Identity & Direction" },
            { num: "02", category: "Design", title: "UI & Digital Experience" },
            { num: "03", category: "Development", title: "Engineered Web Solutions" },
        ],
    },
    id: {
        badge: "Beda dari yang Lain. Dirancang untuk Bertahan.",
        tagline: ["Pikirkan.", "Wujudkan.", "Berkembang."],
        sub: "Studio digital yang membangun brand, website, dan produk digital yang tahan lama.",
        desc: "Dari strategi dan identitas brand hingga website, pengalaman digital, dan solusi produk — kami membantu bisnis membangun kepercayaan, menarik pelanggan, dan tumbuh.",
        cta: "Mulai Proyek",
        ctaSecondary: "Lihat Layanan Kami",
        cards: [
            { num: "01", category: "Branding", title: "Identitas & Arah Brand" },
            { num: "02", category: "Design", title: "UI & Pengalaman Digital" },
            { num: "03", category: "Development", title: "Solusi Web Terstruktur" },
        ],
    },
};

const Hero: FunctionComponent<HeroProps> = ({ className }) => {
    const { lang } = useLang();
    const t = content[lang];
    const cardColors = ["text-[#C76043]", "text-[#7D568E]", "text-[#A88C40]"];
    const images = ["/branding.png", "/designing.png", "/code-editor.png"];
    const alts = ["Brand Identity Craft", "Digital UI Design", "Engineered Code"];

    return (
        <section className={cn("w-full pt-36 md:pt-44 pb-12 relative", className)}>
            <div className="max-w-5xl mx-5 md:mx-auto pb-10 md:pb-16 font-medium relative z-10">
                <div className="mb-4">
                    <span className="border text-xs uppercase tracking-wider font-mono py-1 px-3.5 border-[#A88C40]/30 rounded-full bg-[#A88C40]/10 text-[#A88C40]">
                        {t.badge}
                    </span>
                </div>

                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div className="space-y-4">
                        <div className="text-5xl flex flex-row gap-2 md:gap-0 md:flex-col leading-tight md:text-8xl md:leading-24 font-semibold tracking-tight text-[#171715]">
                            {t.tagline.map((line, i) => <p key={i}>{line}</p>)}
                        </div>
                        <p className="text-base md:text-lg font-medium text-[#4A4740] max-w-sm leading-snug">
                            {t.sub}
                        </p>
                    </div>

                    <div className="max-w-md md:pb-3 space-y-6">
                        <p className="text-base md:text-lg font-normal text-[#5C5850] leading-relaxed">
                            {t.desc}
                        </p>
                        <div className="flex flex-wrap items-center gap-3">
                            <Button asChild className="rounded-full px-6 py-2.5 bg-[#171715] hover:bg-[#A88C40] hover:text-[#171715] text-[#F0ECE2] transition-colors shadow-xs">
                                <Link href="/contact" className="flex items-center gap-1.5">
                                    {t.cta} <ArrowUpRight className="size-4" />
                                </Link>
                            </Button>
                            <Button asChild variant="outline" className="rounded-full px-6 py-2.5 border-[#171715]/20 text-[#171715] hover:bg-[#171715]/5">
                                <Link href="/services">{t.ctaSecondary}</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* 3 Showcase Visuals */}
            <div className="max-w-6xl mx-5 md:mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 bg-white/80 p-2.5 rounded-2xl border border-[#171715]/10 shadow-xs">
                {t.cards.map((card, i) => (
                    <div key={i} className="group relative h-64 md:h-80 rounded-xl overflow-hidden bg-neutral-100 flex flex-col justify-end p-5">
                        <Image src={getAssetPath(images[i])} fill alt={alts[i]} className="object-cover group-hover:scale-105 duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#171715]/80 via-[#171715]/30 to-transparent" />
                        <div className="relative z-10 text-white">
                            <span className={`text-[11px] font-mono uppercase tracking-wider font-semibold ${cardColors[i]}`}>
                                {card.num} · {card.category}
                            </span>
                            <h4 className="text-lg font-semibold text-white">{card.title}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Hero;