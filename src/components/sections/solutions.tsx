"use client";

import { cn, getAssetPath } from "@/lib/utils";
import { FunctionComponent } from "react";
import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useLang } from "@/lib/language-context";

interface SolutionsProps {
    className?: string;
}

const solutionsText = {
    en: {
        badge: "Solutions",
        title: "We Craft,",
        subtitle: "What Moves Businesses Forward.",
        closingTitle: "More Than What Fits On This Page.",
        closingDesc: "Every Business Is Different. So Are The Solutions We Build.",
        closingBtn: "Talk to ZORS",
        solutions: [
            { image: '/art-gallery.png', label: 'Brand Identity' },
            { image: '/news.png', label: 'Company Profile Website' },
            { image: '/fashion-collage.png', label: 'Landing Page' },
            { image: '/shopping-cart.png', label: 'eCommerce Experience' },
            { image: '/ui.png', label: 'UI/UX & Product Design' },
            { image: '/code-editor.png', label: 'Custom Web Development' },
            { image: '/data-flow.png', label: 'Website Revamp' },
            { image: '/data-center.png', label: 'Optimization & Maintenance' },
        ],
    },
    id: {
        badge: "Solusi",
        title: "Kami Membangun,",
        subtitle: "Apa yang Memajukan Bisnis Anda.",
        closingTitle: "Lebih dari Sekadar Apa yang Tertulis di Halaman Ini.",
        closingDesc: "Setiap Bisnis Memiliki Keunikan. Begitu Pula Solusi yang Kami Ciptakan.",
        closingBtn: "Konsultasi dengan ZORS",
        solutions: [
            { image: '/art-gallery.png', label: 'Identitas Brand' },
            { image: '/news.png', label: 'Website Profil Perusahaan' },
            { image: '/fashion-collage.png', label: 'Landing Page Kampanye' },
            { image: '/shopping-cart.png', label: 'Pengalaman eCommerce' },
            { image: '/ui.png', label: 'Desain UI/UX & Produk' },
            { image: '/code-editor.png', label: 'Pengembangan Web Kustom' },
            { image: '/data-flow.png', label: 'Pembaruan (Revamp) Website' },
            { image: '/data-center.png', label: 'Optimasi & Pemeliharaan' },
        ],
    },
};

const Solutions: FunctionComponent<SolutionsProps> = ({ className }) => {
    const { lang } = useLang();
    const t = solutionsText[lang];

    return (
        <section className={cn("w-full py-20", className)}>
            <div className="max-w-5xl mx-5 md:mx-auto font-medium grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
                <div className="p-6 md:p-8 flex flex-col justify-center">
                    <span className="border text-xs uppercase tracking-wider font-mono py-1 px-3.5 border-[#A88C40]/30 rounded-full bg-[#A88C40]/10 text-[#A88C40] w-fit mb-4">
                        {t.badge}
                    </span>
                    <h2 className="md:text-4xl md:leading-12 text-2xl font-semibold text-[#171715]">
                        {t.title} <br />
                        <span className="text-[#171715]/50 font-normal">
                            {t.subtitle}
                        </span>
                    </h2>
                </div>

                {t.solutions.map((item, i) => (
                    <div
                        key={i}
                        className="group relative bg-[#171715] rounded-2xl p-6 flex justify-end flex-col min-h-60 overflow-hidden border border-[#171715]/10 shadow-xs duration-300"
                        style={{
                            backgroundImage: `url('${getAssetPath(item.image)}')`,
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat"
                        }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 group-hover:from-black/90 duration-300" />
                        <div className="relative z-10">
                            <span className="text-xs md:text-sm bg-[#F0ECE2]/90 text-[#171715] backdrop-blur-xs px-3.5 py-1.5 rounded-full font-medium shadow-xs inline-block">
                                {item.label}
                            </span>
                        </div>
                    </div>
                ))}

                {/* Closing Card */}
                <div className="p-6 md:p-8 border border-dashed border-[#171715]/20 bg-white/80 rounded-2xl flex flex-col justify-between">
                    <div>
                        <h3 className="text-xl md:text-2xl font-semibold text-[#171715] leading-snug">
                            {t.closingTitle}
                        </h3>
                        <p className="text-sm text-[#171715]/60 font-normal mt-2 leading-relaxed">
                            {t.closingDesc}
                        </p>
                    </div>
                    <div className="pt-6">
                        <Button asChild className="rounded-full px-6 py-2.5 bg-[#171715] hover:bg-[#A88C40] hover:text-[#171715] text-[#F0ECE2] shadow-xs group transition-colors">
                            <Link href={"/contact"} className="flex items-center gap-1.5">
                                {t.closingBtn} <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 duration-200" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Solutions;