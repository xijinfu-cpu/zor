'use client'

import { cn } from "@/lib/utils";
import { FunctionComponent } from "react";
import { Check, Gauge, Search, TrendingUp, Sparkles, Smartphone, CheckCircle2 } from "lucide-react";
import Card from "@/components/ui/card";

interface OptimizationProps {
    className?: string;
}

const Optimization: FunctionComponent<OptimizationProps> = ({ className }) => {
    return (
        <section className={cn("py-16 md:py-24 max-sm:px-5", className)} id="optimization">
            {/* Alias for legacy #audit links */}
            <div id="audit" className="relative -top-20" />

            <div className="max-w-5xl mx-auto font-medium relative">
                <span className="border text-xs uppercase tracking-wider font-mono py-1 px-3.5 border-[#2D8065]/30 text-[#2D8065] rounded-full bg-[#2D8065]/10">
                    Optimization
                </span>
                <h2 className="text-2xl md:text-4xl md:leading-12 my-3 font-semibold text-[#171715]">
                    Optimization, <br />
                    <span className="text-neutral-500 font-normal">
                        Make Good Even Better.
                    </span>
                </h2>
                <p className="md:text-xl font-normal my-5 text-neutral-600 relative max-w-3xl leading-relaxed">
                    Launch is not the finish line. We review performance, usability, search visibility,
                    and technical health to find what can work better — then turn those insights into practical improvements.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 font-medium max-w-6xl mx-auto mt-12">
                {/* 1. Performance & Technical Audit */}
                <Card
                    title="Performance & Technical Audit"
                    sub="Speed, core web vitals, code efficiency, and hosting infrastructure."
                    className="min-h-96 w-full"
                >
                    <div className="h-72 duration-300 overflow-hidden rounded-xl bg-neutral-50 border border-neutral-200/60 p-5 flex flex-col justify-between">
                        <div className="flex items-center justify-between pb-3 border-b border-neutral-200">
                            <span className="text-xs uppercase tracking-wider text-neutral-500 font-mono flex items-center gap-1.5">
                                <Gauge className="size-3.5 text-emerald-600" /> Core Web Vitals
                            </span>
                            <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-mono">
                                99 Score
                            </span>
                        </div>
                        <div className="grid grid-cols-2 gap-3 my-auto">
                            <div className="bg-white p-3 rounded-lg border border-neutral-200 text-center">
                                <div className="size-12 rounded-full border-3 border-emerald-500 bg-emerald-50 text-emerald-600 font-bold text-sm flex items-center justify-center mx-auto mb-1">
                                    99
                                </div>
                                <span className="text-[11px] text-neutral-600 font-medium">Performance</span>
                            </div>
                            <div className="bg-white p-3 rounded-lg border border-neutral-200 text-center">
                                <div className="size-12 rounded-full border-3 border-emerald-500 bg-emerald-50 text-emerald-600 font-bold text-sm flex items-center justify-center mx-auto mb-1">
                                    98
                                </div>
                                <span className="text-[11px] text-neutral-600 font-medium">Accessibility</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-between pt-2 border-t border-neutral-200 text-xs text-neutral-500">
                            <span>Page Load: 0.6s</span>
                            <span className="text-emerald-600 font-medium flex items-center gap-1">
                                <CheckCircle2 className="size-3.5" /> High Speed
                            </span>
                        </div>
                    </div>
                </Card>

                {/* 2. UX & Conversion Review */}
                <Card
                    title="UX & Conversion Review"
                    sub="Identify user friction, improve navigation, and boost user engagement."
                    className="min-h-96 w-full"
                >
                    <div className="h-72 duration-300 overflow-hidden rounded-xl bg-[#F0ECE2]/60 border border-[#171715]/10 p-5 flex flex-col justify-between">
                        <div className="flex items-center justify-between pb-3 border-b border-[#171715]/10">
                            <span className="text-xs uppercase tracking-wider text-[#171715]/60 font-mono flex items-center gap-1.5">
                                <Smartphone className="size-3.5 text-[#2D8065]" /> Usability Audit
                            </span>
                            <span className="text-[11px] px-2 py-0.5 rounded-full bg-[#2D8065]/10 text-[#2D8065] border border-[#2D8065]/25 font-mono">
                                Verified
                            </span>
                        </div>
                        <div className="space-y-2.5 my-auto text-xs">
                            <div className="bg-white/80 p-2.5 rounded-lg border border-[#171715]/10 flex items-center justify-between">
                                <span className="text-[#171715] font-medium">Clear Navigation & Hierarchy</span>
                                <span className="text-[#2D8065] flex items-center gap-1 font-medium"><Check className="size-3.5" /> Passed</span>
                            </div>
                            <div className="bg-white/80 p-2.5 rounded-lg border border-[#171715]/10 flex items-center justify-between">
                                <span className="text-[#171715] font-medium">Mobile Usability & Touch Targets</span>
                                <span className="text-[#2D8065] flex items-center gap-1 font-medium"><Check className="size-3.5" /> Passed</span>
                            </div>
                            <div className="bg-white/80 p-2.5 rounded-lg border border-[#171715]/10 flex items-center justify-between">
                                <span className="text-[#171715] font-medium">Checkout / Inquiry Funnel</span>
                                <span className="text-[#2D8065] flex items-center gap-1 font-medium"><Sparkles className="size-3.5" /> Optimized</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-between pt-2 border-t border-[#171715]/10 text-xs text-[#171715]/60">
                            <span>Zero Friction</span>
                            <span className="text-[#2D8065] font-medium flex items-center gap-1">
                                <TrendingUp className="size-3.5" /> Higher Conversion
                            </span>
                        </div>
                    </div>
                </Card>

                {/* 3. SEO & Optimization */}
                <Card
                    title="SEO & Optimization"
                    sub="Search visibility, metadata architecture, accessibility, and crawlability."
                    className="min-h-96 w-full"
                >
                    <div className="h-72 duration-300 overflow-hidden rounded-xl bg-neutral-50 border border-neutral-200/60 p-5 flex flex-col justify-between">
                        <div className="flex items-center justify-between pb-3 border-b border-neutral-200">
                            <span className="text-xs uppercase tracking-wider text-neutral-500 font-mono flex items-center gap-1.5">
                                <Search className="size-3.5 text-purple-600" /> Search Architecture
                            </span>
                            <span className="text-[11px] px-2 py-0.5 rounded-full bg-purple-50 text-purple-600 border border-purple-200 font-mono">
                                100 SEO
                            </span>
                        </div>
                        <div className="space-y-2.5 my-auto text-xs">
                            <div className="bg-white p-2.5 rounded-lg border border-neutral-200 flex items-center justify-between">
                                <span className="text-neutral-700 font-medium">Semantic Headings & OpenGraph</span>
                                <span className="text-emerald-600 font-medium">Configured</span>
                            </div>
                            <div className="bg-white p-2.5 rounded-lg border border-neutral-200 flex items-center justify-between">
                                <span className="text-neutral-700 font-medium">Structured Schema.org Data</span>
                                <span className="text-purple-600 font-medium">Rich Snippet</span>
                            </div>
                            <div className="bg-white p-2.5 rounded-lg border border-neutral-200 flex items-center justify-between">
                                <span className="text-neutral-700 font-medium">Robots, Sitemap & Indexing</span>
                                <span className="text-emerald-600 font-medium">Valid</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-between pt-2 border-t border-neutral-200 text-xs text-neutral-500">
                            <span>Search Discoverability</span>
                            <span className="text-purple-600 font-medium flex items-center gap-1">
                                Ranked to Win
                            </span>
                        </div>
                    </div>
                </Card>
            </div>
        </section>
    );
};

export default Optimization;
