"use client";

import { cn } from "@/lib/utils";
import { FunctionComponent } from "react";
import { useLang } from "@/lib/language-context";

interface AboutProps {
    className?: string;
}

const aboutText = {
    en: {
        badge: "About Us",
        title: "ZORS CRAFT builds meaningful digital products for businesses ready to grow.",
        p1: "From strategy and branding to website development and digital solutions, we create products that help brands communicate clearly, build trust, and grow in the digital world.",
        p2: "Every project starts with understanding — not assumptions. We craft with intention, design with purpose, and build with attention to detail. No unnecessary complexity. Just thoughtful digital experiences designed to make an impact and last.",
    },
    id: {
        badge: "Tentang Kami",
        title: "ZORS CRAFT membangun produk digital bermakna bagi bisnis yang siap bertumbuh.",
        p1: "Dari strategi dan branding hingga pengembangan website dan solusi digital, kami menciptakan produk yang membantu brand berkomunikasi dengan jelas, membangun kepercayaan, dan berkembang di ranah digital.",
        p2: "Setiap proyek dimulai dengan pemahaman mendalam — bukan sekadar asumsi. Kami merancang dengan niat, mendesain dengan tujuan, dan membangun dengan perhatian penuh pada detail. Tanpa kerumitan yang tak perlu. Hanya pengalaman digital bermakna yang berdaya tahan dan berdampak nyata.",
    },
};

const About: FunctionComponent<AboutProps> = ({ className }) => {
    const { lang } = useLang();
    const t = aboutText[lang];

    return (
        <section className={cn("py-20 mx-5", className)}>
            <div className="max-w-5xl mx-auto mb-6 font-medium">
                <span className="border text-xs uppercase tracking-wider font-mono py-1 px-3.5 border-[#A88C40]/30 rounded-full bg-[#A88C40]/10 text-[#A88C40]">
                    {t.badge}
                </span>
            </div>
            <div className="grid grid-cols-1 max-w-5xl mx-auto md:grid-cols-2 gap-8 md:gap-12">
                <div>
                    <h2 className="text-2xl md:text-3xl font-semibold text-[#171715] leading-snug">
                        {t.title}
                    </h2>
                </div>
                <div className="space-y-6">
                    <p className="text-base md:text-lg text-[#171715]/75 leading-relaxed font-normal">
                        {t.p1}
                    </p>
                    <p className="text-base md:text-lg text-[#171715]/60 leading-relaxed font-normal">
                        {t.p2}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;