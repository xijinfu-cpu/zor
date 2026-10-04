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
}

const ClientStoryCard: FunctionComponent<ClientStoryCardProps> = ({
    className,
    link,
    title,
    bgimg,
    company,
    industry,
    services = []
}) => {
    return (
        <Link
            href={link}
            className={cn(
                "group relative bg-neutral-900 rounded-2xl p-6 md:p-8 flex flex-col justify-between min-h-[380px] overflow-hidden border border-neutral-200/50 shadow-xs duration-300",
                className
            )}
            style={{
                backgroundImage: `url(${getAssetPath(bgimg)})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"
            }}
        >
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 group-hover:from-black/95 duration-300" />

            {/* Top metadata */}
            <div className="relative z-10 flex items-center justify-between">
                {company && (
                    <span className="text-xs uppercase tracking-wider font-mono px-3 py-1 rounded-full bg-white/20 text-white backdrop-blur-xs border border-white/20">
                        {company}
                    </span>
                )}
                <div className="size-9 rounded-full bg-white/10 group-hover:bg-[#A88C40] group-hover:text-[#171715] text-white flex items-center justify-center backdrop-blur-xs duration-300 ml-auto">
                    <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 duration-200" />
                </div>
            </div>

            {/* Bottom content */}
            <div className="relative z-10 space-y-1.5 mt-auto pt-16">
                {company && (
                    <p className="text-xs uppercase tracking-wider font-semibold text-white/90 font-mono">
                        {company}
                    </p>
                )}
                {(industry || (services && services.length > 0)) && (
                    <p className="text-xs text-neutral-300 tracking-wide font-sans">
                        {industry} {services.length > 0 && `· ${services.join(' / ')}`}
                    </p>
                )}
                <h3 className="text-xl md:text-2xl font-semibold text-white leading-snug tracking-tight pt-1">
                    {title}
                </h3>
            </div>
        </Link>
    );
};

export default ClientStoryCard;