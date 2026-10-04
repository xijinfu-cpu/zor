import { cn, getAssetPath } from "@/lib/utils";
import { FunctionComponent } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ClientStoryCardProps {
    className?: string;
    link: string;
    title: string;
    bgimg: string;
    company?: string;
    industry?: string;
    services?: string[];
    result?: string;
}

const ClientStoryCard: FunctionComponent<ClientStoryCardProps> = ({
    className,
    link,
    title,
    bgimg,
    company,
    industry,
    services = [],
    result
}) => {
    return (
        <Link
            href={link}
            className={cn(
                "group relative bg-neutral-900 rounded-2xl p-6 md:p-8 flex flex-col justify-between min-h-[400px] overflow-hidden border border-neutral-200/50 shadow-xs duration-300",
                className
            )}
            style={{
                backgroundImage: `url(${getAssetPath(bgimg)})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"
            }}
        >
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/30 group-hover:from-black/98 duration-300" />

            {/* Top metadata */}
            <div className="relative z-10 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 flex-wrap">
                    {company && (
                        <span className="text-xs uppercase tracking-wider font-mono px-3 py-1 rounded-full bg-white/20 text-white backdrop-blur-xs border border-white/20">
                            {company}
                        </span>
                    )}
                    {industry && (
                        <span className="text-[11px] font-mono text-white/70">
                            {industry}
                        </span>
                    )}
                </div>
                <div className="size-9 rounded-full bg-white/10 group-hover:bg-[#A88C40] group-hover:text-[#171715] text-white flex items-center justify-center backdrop-blur-xs duration-300 ml-auto shrink-0">
                    <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 duration-200" />
                </div>
            </div>

            {/* Bottom content */}
            <div className="relative z-10 space-y-3 mt-auto pt-16">
                {/* Scope */}
                {services && services.length > 0 && (
                    <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-white/60">
                            Scope:
                        </span>
                        {services.map((svc, idx) => (
                            <span
                                key={idx}
                                className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/10 text-white/90 border border-white/10"
                            >
                                {svc}
                            </span>
                        ))}
                    </div>
                )}

                {/* Headline */}
                <h3 className="text-xl md:text-2xl font-semibold text-white leading-snug tracking-tight">
                    {title}
                </h3>

                {/* Business Result */}
                {result && (
                    <div className="pt-2 border-t border-white/10 flex items-center gap-2">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-[#A88C40] font-semibold">
                            Result:
                        </span>
                        <span className="text-xs font-mono text-emerald-400 font-medium">
                            {result}
                        </span>
                    </div>
                )}
            </div>
        </Link>
    );
};

export default ClientStoryCard;