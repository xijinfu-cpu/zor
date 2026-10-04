import { ArrowUpRight, ShieldAlert, Sparkles } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

export interface LegalSection {
    number: string;
    title: string;
    content: string | ReactNode;
    callout?: string | ReactNode;
}

interface LegalLayoutProps {
    title: string;
    subtitle: string;
    lastUpdated: string;
    accentColor?: string; // e.g. #171715 (Terms), #586B6D (Privacy), #2D8065 (Data Handling)
    opening?: string | ReactNode;
    importantNotice?: {
        title: string;
        content: string;
    };
    sections: LegalSection[];
}

export default function LegalLayout({
    title,
    subtitle,
    lastUpdated,
    accentColor = "#171715",
    opening,
    importantNotice,
    sections,
}: LegalLayoutProps) {
    return (
        <div className="pt-36 md:pt-44 pb-24">
            <div className="max-w-3xl mx-auto px-5">
                {/* Header */}
                <div className="mb-10">
                    <span
                        className="text-xs uppercase tracking-wider font-mono font-medium block mb-2"
                        style={{ color: accentColor }}
                    >
                        LEGAL
                    </span>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#171715] mb-3">
                        {title}
                    </h1>
                    <p className="text-lg md:text-xl text-[#5C5850] font-normal mb-4">
                        {subtitle}
                    </p>
                    <p className="text-xs font-mono text-[#5C5850]">
                        Last updated: {lastUpdated}
                    </p>
                </div>

                {opening && (
                    <div className="p-6 md:p-8 rounded-2xl bg-white/80 border border-[#171715]/10 shadow-xs mb-8 text-[#171715]/90 text-sm md:text-base leading-relaxed">
                        {opening}
                    </div>
                )}

                {/* Important Notice Callout with Modern Ochre micro-accent */}
                {importantNotice && (
                    <div className="p-5 md:p-6 rounded-2xl bg-[#F0ECE2] border-l-4 border-l-[#A88C40] border-y border-r border-[#171715]/10 shadow-xs mb-10 flex items-start gap-3.5">
                        <div className="p-1.5 rounded-lg bg-[#A88C40]/15 text-[#A88C40] shrink-0 mt-0.5">
                            <ShieldAlert className="size-4" />
                        </div>
                        <div>
                            <h4 className="text-sm font-semibold text-[#171715] mb-1">
                                {importantNotice.title}
                            </h4>
                            <p className="text-xs sm:text-sm text-[#4A4740] leading-relaxed">
                                {importantNotice.content}
                            </p>
                        </div>
                    </div>
                )}

                <hr className="border-[#171715]/10 my-8" />

                {/* Numbered Sections */}
                <div className="space-y-12 my-10">
                    {sections.map((sec, i) => (
                        <div key={i} className="space-y-3">
                            <div className="flex items-center gap-2">
                                <span
                                    className="text-xs font-mono font-medium tracking-wider"
                                    style={{ color: accentColor }}
                                >
                                    {sec.number} /
                                </span>
                                <h2 className="text-base sm:text-lg font-semibold text-[#171715] uppercase tracking-wide">
                                    {sec.title}
                                </h2>
                            </div>

                            <div className="text-sm md:text-base text-[#4A4740] leading-relaxed font-normal space-y-3">
                                {typeof sec.content === "string" ? (
                                    <p>{sec.content}</p>
                                ) : (
                                    sec.content
                                )}
                            </div>

                            {/* Optional Callout Card on Workshop Paper */}
                            {sec.callout && (
                                <div className="mt-3 p-4 md:p-5 rounded-xl bg-[#F0ECE2] border border-[#171715]/10 text-xs sm:text-sm text-[#171715]/85 leading-relaxed">
                                    {sec.callout}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <hr className="border-[#171715]/10 my-12" />

                {/* Footer questions */}
                <div className="bg-white/80 p-6 md:p-8 rounded-2xl border border-[#171715]/10 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                        <span className="text-xs uppercase tracking-wider text-[#A88C40] font-mono block mb-1">
                            Questions or Notices?
                        </span>
                        <p className="text-sm text-[#5C5850]">
                            Reach out to our team at{" "}
                            <a
                                href="mailto:hello@zorscraft.id"
                                className="font-semibold text-[#171715] hover:text-[#A88C40] transition-colors"
                            >
                                hello@zorscraft.id
                            </a>
                        </p>
                    </div>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-medium px-4 py-2.5 rounded-xl bg-[#171715] hover:bg-[#A88C40] text-[#F0ECE2] transition-colors duration-200 shrink-0 justify-center"
                    >
                        Contact Us <ArrowUpRight className="size-3.5" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
