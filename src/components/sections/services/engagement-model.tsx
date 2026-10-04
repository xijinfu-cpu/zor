import { FunctionComponent } from "react";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Check } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface EngagementModelProps {
    className?: string;
}

const EngagementModel: FunctionComponent<EngagementModelProps> = ({ className }) => {
    const models = [
        {
            name: "Starter",
            badge: "Scoped Sprints",
            desc: "For early ideas, brand identity foundations, or focused web sprints.",
            ideal: "Early-stage founders, launches, and targeted revamps",
            features: [
                "Clearly defined scope & fixed deliverables",
                "Brand identity or modern web MVP",
                "Fast 3–5 week delivery cadence",
                "Direct lead collaboration without account managers",
                "Complete design system & codebase handover",
            ],
            cta: "Inquire Starter",
            featured: false,
        },
        {
            name: "Growth",
            badge: "Most Popular",
            desc: "For scaling businesses ready to accelerate product and market momentum.",
            ideal: "Funded startups, growing platforms, and established companies",
            features: [
                "End-to-end strategy, brand, and web engineering",
                "High-performance Next.js web application",
                "Conversion flow & Core Web Vitals optimization",
                "Modular component library for rapid scaling",
                "Post-launch monitoring & iterative support",
            ],
            cta: "Inquire Growth",
            featured: true,
        },
        {
            name: "Custom",
            badge: "Tailored Retainer",
            desc: "For complex products, multi-platform ecosystems, and ongoing craft.",
            ideal: "Enterprise products, platforms, and dedicated partner teams",
            features: [
                "Bespoke software architecture & API integrations",
                "Dedicated multidisciplinary design & dev team",
                "Continuous experimentation & performance tuning",
                "Priority response SLAs & weekly alignment",
                "Integrated directly into your internal workflow",
            ],
            cta: "Discuss Custom Scope",
            featured: false,
        },
    ];

    return (
        <section className={cn("w-full py-16 md:py-24", className)}>
            <div className="max-w-6xl mx-5 md:mx-auto">
                <div className="max-w-2xl mb-12">
                    <span className="text-xs uppercase tracking-wider text-[#A88C40] font-mono font-medium px-3.5 py-1 rounded-full bg-[#A88C40]/10 border border-[#A88C40]/25 inline-block mb-4">
                        Engagement Models
                    </span>
                    <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[#171715] leading-tight">
                        Partnership Models Built for <br />
                        <span className="text-[#5C5850]">Where Your Business Is Headed.</span>
                    </h2>
                    <p className="text-[#5C5850] text-base md:text-lg mt-4 leading-relaxed">
                        We don’t believe in bloated agency retainers or hidden fees. We work with clear scopes,
                        honest timelines, and transparent collaboration.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {models.map((item, i) => (
                        <div
                            key={i}
                            className={cn(
                                "rounded-2xl p-7 md:p-8 flex flex-col justify-between transition-all duration-300 relative",
                                item.featured
                                    ? "bg-[#171715] text-[#F0ECE2] border border-[#171715] shadow-lg md:-translate-y-2"
                                    : "bg-white/80 text-[#171715] border border-[#171715]/10 shadow-xs"
                            )}
                        >
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-2xl font-semibold tracking-tight">
                                        {item.name}
                                    </h3>
                                    <span
                                        className={cn(
                                            "text-xs font-mono px-3 py-1 rounded-full uppercase tracking-wider",
                                            item.featured
                                                ? "bg-[#A88C40] text-[#171715] font-semibold"
                                                : "bg-[#F0ECE2] text-[#A88C40] border border-[#A88C40]/30"
                                        )}
                                    >
                                        {item.badge}
                                    </span>
                                </div>

                                <p
                                    className={cn(
                                        "text-sm leading-relaxed mb-6",
                                        item.featured ? "text-[#F0ECE2]/80" : "text-[#5C5850]"
                                    )}
                                >
                                    {item.desc}
                                </p>

                                <div className="pt-4 pb-6 border-t border-current/10">
                                    <span
                                        className={cn(
                                            "text-xs font-mono uppercase tracking-wider block mb-3 font-medium",
                                            item.featured ? "text-[#A88C40]" : "text-[#A88C40]"
                                        )}
                                    >
                                        What&apos;s Included:
                                    </span>
                                    <ul className="space-y-2.5">
                                        {item.features.map((feat, idx) => (
                                            <li key={idx} className="flex items-start gap-2.5 text-xs md:text-sm">
                                                <Check
                                                    className={cn(
                                                        "size-4 shrink-0 mt-0.5",
                                                        item.featured ? "text-[#A88C40]" : "text-[#A88C40]"
                                                    )}
                                                />
                                                <span
                                                    className={
                                                        item.featured ? "text-[#F0ECE2]/90" : "text-[#171715]/80"
                                                    }
                                                >
                                                    {feat}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="pt-6 border-t border-current/10">
                                <Button
                                    asChild
                                    className={cn(
                                        "w-full rounded-full py-2.5 text-sm font-medium transition-colors shadow-xs",
                                        item.featured
                                            ? "bg-[#A88C40] text-[#171715] hover:bg-[#F0ECE2]"
                                            : "bg-[#171715] text-[#F0ECE2] hover:bg-[#A88C40] hover:text-[#171715]"
                                    )}
                                >
                                    <Link href="/contact" className="flex items-center justify-center gap-1.5">
                                        {item.cta} <ArrowUpRight className="size-4" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EngagementModel;
