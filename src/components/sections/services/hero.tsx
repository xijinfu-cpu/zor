'use client'

import { cn, getAssetPath } from "@/lib/utils";
import { FunctionComponent } from "react";
import { TextLoop } from "../../ui/text-loop";
import Image from "next/image";
import Card from "@/components/ui/card";
import { useLang } from "@/lib/language-context";

interface HeroProps {
    className?: string
}

const servicesHeroData = {
    en: {
        badge: "Crafted End to End",
        h1Prefix: "We craft ",
        loopWords: ["brands", "websites", "experiences", "digital products", "solutions"],
        h1Suffix: "Built with purpose. Made to move businesses forward.",
        desc: "From strategy and brand identity to design, development, optimization, and ongoing support, we bring every layer together to create digital experiences that look right, work right, and grow with your business.",
        services: [
            {
                name: 'Strategy',
                tagline: 'Start With The Right Direction',
                href: '/services/#strategy',
                image: '/brainstorming.png',
                imgClassName: 'scale-90 group-hover:scale-105 duration-500 object-contain'
            },
            {
                name: 'Branding',
                tagline: 'Build A Brand People Remember',
                href: '/services/#branding',
                image: '/branding.png',
                imgClassName: 'scale-110 group-hover:scale-125 duration-500 object-contain'
            },
            {
                name: 'Design',
                tagline: 'Design With Purpose',
                href: '/services/#design',
                image: '/designing.png',
                imgClassName: 'scale-85 group-hover:scale-100 duration-500 object-contain'
            },
            {
                name: 'Development',
                tagline: 'Build Beyond The Visual',
                href: '/services/#development',
                image: '/development.png',
                imgClassName: 'scale-95 group-hover:scale-110 duration-500 object-contain'
            },
            {
                name: 'Optimization',
                tagline: 'Make Good Even Better',
                href: '/services/#optimization',
                image: '/auditing.png',
                imgClassName: 'scale-95 group-hover:scale-110 duration-500 object-contain'
            },
            {
                name: 'Support',
                tagline: 'Built To Keep Growing',
                href: '/services/#support',
                image: '/apps.png',
                imgClassName: 'scale-90 group-hover:scale-105 duration-500 object-contain'
            }
        ]
    },
    id: {
        badge: "Dikerjakan dari Hulu ke Hilir",
        h1Prefix: "Kami merancang ",
        loopWords: ["brand", "website", "pengalaman digital", "produk digital", "solusi teknologi"],
        h1Suffix: "Diciptakan dengan tujuan nyata. Dirancang untuk memajukan bisnis.",
        desc: "Dari strategi dan identitas brand hingga desain antarmuka, rekayasa kode, optimasi berkala, dan pendampingan berkelanjutan — kami menyatukan seluruh lapisan demi mewujudkan pengalaman digital yang memikat, andal, dan siap bertumbuh bersama bisnis Anda.",
        services: [
            {
                name: 'Strategi',
                tagline: 'Mulai dengan Arah yang Tepat',
                href: '/services/#strategy',
                image: '/brainstorming.png',
                imgClassName: 'scale-90 group-hover:scale-105 duration-500 object-contain'
            },
            {
                name: 'Branding',
                tagline: 'Bangun Brand yang Selalu Diingat',
                href: '/services/#branding',
                image: '/branding.png',
                imgClassName: 'scale-110 group-hover:scale-125 duration-500 object-contain'
            },
            {
                name: 'Desain',
                tagline: 'Desain Berpusat Pada Manusia',
                href: '/services/#design',
                image: '/designing.png',
                imgClassName: 'scale-85 group-hover:scale-100 duration-500 object-contain'
            },
            {
                name: 'Pengembangan',
                tagline: 'Membangun Lebih dari Sekadar Visual',
                href: '/services/#development',
                image: '/development.png',
                imgClassName: 'scale-95 group-hover:scale-110 duration-500 object-contain'
            },
            {
                name: 'Optimasi',
                tagline: 'Jadikan yang Baik Lebih Sempurna',
                href: '/services/#optimization',
                image: '/auditing.png',
                imgClassName: 'scale-95 group-hover:scale-110 duration-500 object-contain'
            },
            {
                name: 'Dukungan',
                tagline: 'Dirancang untuk Terus Bertumbuh',
                href: '/services/#support',
                image: '/apps.png',
                imgClassName: 'scale-90 group-hover:scale-105 duration-500 object-contain'
            }
        ]
    }
};

const Hero: FunctionComponent<HeroProps> = ({ className }) => {
    const { lang } = useLang();
    const t = servicesHeroData[lang];

    return (
        <section className={cn("w-full relative bg-no-repeat bg-contain md:bg-[url(/forest.png)]", className)}>
            <div className="py-32 md:py-40 max-sm:px-5" style={{ background: 'linear-gradient(343deg,rgba(245, 245, 245, 1) 70%, rgba(0, 0, 0, 0) 100%)' }}>
                <div className="text-center pb-20 font-medium relative">
                    <span className="border text-sm py-1 px-3 border-neutral-300 rounded-2xl">
                        {t.badge}
                    </span>

                    <h1 className="text-2xl md:text-5xl md:leading-14 my-3 font-semibold">
                        {t.h1Prefix}
                        <TextLoop>
                            {t.loopWords.map((word, idx) => (
                                <span key={idx}>{word}</span>
                            ))}
                        </TextLoop>,
                        <br />
                        <span className="text-neutral-400 font-normal">
                            {t.h1Suffix}
                        </span>
                    </h1>

                    <p className="font-normal md:text-xl mt-5 text-neutral-600 relative max-w-3xl mx-auto leading-relaxed">
                        {t.desc}
                    </p>
                </div>
                <div className="grid font-medium grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto gap-5 relative">
                    {t.services.map((item, i) => (
                        <Card arrowDirDown key={i} title={item.name} sub={item.tagline} link={item.href} className="min-h-96 w-full">
                            <div className="h-72 duration-300 overflow-hidden flex items-center justify-center rounded-xl bg-neutral-100/70 p-4">
                                <Image src={getAssetPath(item.image)} width={260} height={200} alt={item.name} className={item.imgClassName} />
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;