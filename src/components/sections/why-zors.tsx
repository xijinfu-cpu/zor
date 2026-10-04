import { FunctionComponent } from "react";
import { cn } from "@/lib/utils";
import { Compass, Sparkles, ShieldCheck } from "lucide-react";

interface WhyZorsProps {
    className?: string;
}

const WhyZors: FunctionComponent<WhyZorsProps> = ({ className }) => {
    const pillars = [
        {
            num: "01",
            title: "Strategy before execution.",
            description:
                "We never build on assumptions. Every digital experience begins by understanding your business model, customer psychology, and market positioning before designing a screen or writing code.",
            icon: Compass,
        },
        {
            num: "02",
            title: "Craft before shortcuts.",
            description:
                "We treat design and development as unified craftsmanship. No bloated templates or cookie-cutter solutions. Everything is intentionally built, performant, accessible, and made to last.",
            icon: Sparkles,
        },
        {
            num: "03",
            title: "Quality before quantity.",
            description:
                "We work with a select number of clients at a time. This guarantees direct senior focus, meticulous attention to detail, and seamless alignment from initial discovery to final deployment.",
            icon: ShieldCheck,
        },
    ];

    return (
        <section className={cn("w-full py-16 md:py-24", className)}>
            <div className="max-w-6xl mx-5 md:mx-auto">
                <div className="max-w-2xl mb-12">
                    <span className="text-xs uppercase tracking-wider text-[#A88C40] font-mono font-medium px-3.5 py-1 rounded-full bg-[#A88C40]/10 border border-[#A88C40]/25 inline-block mb-4">
                        Why ZORS
                    </span>
                    <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[#171715] leading-tight">
                        Strategy before execution. <br />
                        Craft before shortcuts. <br />
                        <span className="text-[#5C5850]">Quality before quantity.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {pillars.map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={i}
                                className="bg-white/80 p-8 rounded-2xl border border-[#171715]/10 shadow-xs flex flex-col justify-between"
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#171715]/10">
                                        <span className="font-mono text-xs text-[#A88C40] font-semibold tracking-wider">
                                            {item.num}
                                        </span>
                                        <div className="size-8 rounded-full bg-[#F0ECE2] flex items-center justify-center text-[#171715]/80">
                                            <Icon className="size-4" strokeWidth={1.5} />
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-semibold text-[#171715] mb-3">
                                        {item.title}
                                    </h3>
                                    <p className="text-[#5C5850] text-sm md:text-base leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default WhyZors;
