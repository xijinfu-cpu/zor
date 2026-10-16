"use client";

import { cn } from "@/lib/utils";
import { FunctionComponent } from "react";
import ClientStoriesGrid from "./client-stories-grid";
import { useLang } from "@/lib/language-context";

interface WorkProps {
    className?: string;
}

const workText = {
    en: {
        badge: "Client Stories",
        title: "Crafted in Partnership,",
        subtitle: "From Strategy to Digital Experience — We Build Every Layer.",
    },
    id: {
        badge: "Kisah Klien",
        title: "Diciptakan Lewat Kemitraan,",
        subtitle: "Dari Strategi hingga Pengalaman Digital — Kami Bangun Setiap Lapisan.",
    },
};

const Work: FunctionComponent<WorkProps> = ({ className }) => {
    const { lang } = useLang();
    const t = workText[lang];

    return (
        <section className={cn("w-full py-20", className)}>
            <div className="max-w-5xl mx-5 md:mx-auto mb-10 font-medium">
                <span className="border text-xs md:text-sm py-1 px-3.5 border-neutral-300 rounded-full bg-white/70 shadow-xs">
                    {t.badge}
                </span>
                <h1 className="text-2xl md:text-4xl md:leading-12 my-3 font-semibold text-neutral-900">
                    {t.title} <br />
                    <span className="text-neutral-400 font-normal">
                        {t.subtitle}
                    </span>
                </h1>
            </div>
            <ClientStoriesGrid />
        </section>
    );
};

export default Work;