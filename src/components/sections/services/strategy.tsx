'use client'

import { cn } from "@/lib/utils";
import { FunctionComponent } from "react";
import Card from "@/components/ui/card";
import { Compass, Target, CheckCircle2, TrendingUp, Layers } from "lucide-react";

interface StrategyProps {
    className?: string;
}

const Strategy: FunctionComponent<StrategyProps> = ({ className }) => {
    return (
        <section id="strategy" className={cn("py-16 md:py-24 max-sm:px-5", className)}>
            <div className="max-w-5xl mx-auto font-medium relative">
                <span className="border text-xs uppercase tracking-wider font-mono py-1 px-3.5 border-[#586B6D]/30 text-[#586B6D] rounded-full bg-[#586B6D]/10">
                    Strategy
                </span>
                <h2 className="text-2xl md:text-4xl md:leading-12 my-3 font-semibold text-[#171715]">
                    Strategy, <br />
                    <span className="text-neutral-500 font-normal">
                        Start With The Right Direction.
                    </span>
                </h2>
                <p className="md:text-xl font-normal my-5 text-[#171715]/70 relative max-w-3xl leading-relaxed">
                    Great digital work starts with knowing what matters. We uncover your goals, audience,
                    challenges, and opportunities before deciding what should be designed or built.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 font-medium max-w-6xl mx-auto mt-12 gap-5">
                {/* 1. Business & Digital Discovery */}
                <Card
                    title="Business & Digital Discovery"
                    sub="Understand the business, goals, audience, and challenges."
                    className="min-h-96 w-full"
                >
                    <div className="h-72 duration-300 overflow-hidden rounded-xl bg-[#F0ECE2]/50 border border-[#171715]/10 p-5 flex flex-col justify-between">
                        <div className="flex items-center justify-between pb-3 border-b border-[#171715]/10">
                            <span className="text-xs uppercase tracking-wider text-[#171715]/60 font-mono">Discovery Matrix</span>
                            <span className="text-xs px-2 py-0.5 rounded-full bg-[#586B6D]/15 text-[#586B6D] border border-[#586B6D]/30 font-mono">Phase 01</span>
                        </div>
                        <div className="space-y-2.5 my-auto">
                            <div className="bg-white p-3 rounded-lg border border-[#171715]/10 shadow-xs flex items-center gap-3">
                                <Target className="size-4 text-[#586B6D] shrink-0" />
                                <div>
                                    <p className="text-xs font-semibold text-[#171715]">Core Objectives</p>
                                    <p className="text-[11px] text-[#171715]/60">Revenue, conversion, and brand trust</p>
                                </div>
                            </div>
                            <div className="bg-white p-3 rounded-lg border border-[#171715]/10 shadow-xs flex items-center gap-3">
                                <Compass className="size-4 text-[#586B6D] shrink-0" />
                                <div>
                                    <p className="text-xs font-semibold text-[#171715]">Audience Alignment</p>
                                    <p className="text-[11px] text-[#171715]/60">Buyer behavior & user friction points</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between pt-2 border-t border-[#171715]/10 text-xs text-[#171715]/60">
                            <span>Status: Verified</span>
                            <span className="text-[#586B6D] font-medium flex items-center gap-1">
                                <CheckCircle2 className="size-3.5" /> High Clarity
                            </span>
                        </div>
                    </div>
                </Card>

                {/* 2. Audience & Competitor Insight */}
                <Card
                    title="Audience & Competitor Insight"
                    sub="Find where your brand stands and where it can move."
                    className="min-h-96 w-full"
                >
                    <div className="h-72 duration-300 overflow-hidden rounded-xl bg-[#F0ECE2]/50 border border-[#171715]/10 p-5 flex flex-col justify-between">
                        <div className="flex items-center justify-between pb-3 border-b border-[#171715]/10">
                            <span className="text-xs uppercase tracking-wider text-[#171715]/60 font-mono">Market Positioning</span>
                            <span className="text-xs px-2 py-0.5 rounded-full bg-[#586B6D]/15 text-[#586B6D] border border-[#586B6D]/30 font-mono">Analysis</span>
                        </div>
                        <div className="my-auto space-y-2">
                            <div className="bg-white p-3 rounded-lg border border-[#171715]/10 space-y-2 shadow-xs">
                                <div className="flex justify-between text-xs">
                                    <span className="text-[#171715]/75">Differentiation</span>
                                    <span className="font-semibold text-[#171715]">Top 5%</span>
                                </div>
                                <div className="w-full bg-[#171715]/5 h-2 rounded-full overflow-hidden">
                                    <div className="bg-[#586B6D] h-full rounded-full w-[92%]" />
                                </div>
                            </div>
                            <div className="bg-white p-3 rounded-lg border border-[#171715]/10 space-y-2 shadow-xs">
                                <div className="flex justify-between text-xs">
                                    <span className="text-[#171715]/75">Audience Value Fit</span>
                                    <span className="font-semibold text-[#171715]">96/100</span>
                                </div>
                                <div className="w-full bg-[#171715]/5 h-2 rounded-full overflow-hidden">
                                    <div className="bg-[#586B6D] h-full rounded-full w-[96%]" />
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between pt-2 border-t border-[#171715]/10 text-xs text-[#171715]/60">
                            <span>Market Void</span>
                            <span className="text-[#586B6D] font-medium flex items-center gap-1">
                                <TrendingUp className="size-3.5" /> Growth Path Mapped
                            </span>
                        </div>
                    </div>
                </Card>

                {/* 3. Digital Roadmap */}
                <Card
                    title="Digital Roadmap"
                    sub="Turn insights into clear priorities, structure, and next steps."
                    className="min-h-96 w-full"
                >
                    <div className="h-72 duration-300 overflow-hidden rounded-xl bg-[#F0ECE2]/50 border border-[#171715]/10 p-5 flex flex-col justify-between">
                        <div className="flex items-center justify-between pb-3 border-b border-[#171715]/10">
                            <span className="text-xs uppercase tracking-wider text-[#171715]/60 font-mono">Execution Plan</span>
                            <span className="text-xs px-2 py-0.5 rounded-full bg-[#586B6D]/15 text-[#586B6D] border border-[#586B6D]/30 font-mono">Timeline</span>
                        </div>
                        <div className="my-auto space-y-2 text-xs">
                            <div className="bg-white p-2.5 rounded-lg border border-[#171715]/10 flex items-center justify-between shadow-xs">
                                <span className="font-medium text-[#171715]">1. Discovery & Positioning</span>
                                <span className="font-mono text-[#586B6D]">Week 1–2</span>
                            </div>
                            <div className="bg-white p-2.5 rounded-lg border border-[#171715]/10 flex items-center justify-between shadow-xs">
                                <span className="font-medium text-[#171715]">2. Architecture & Journey</span>
                                <span className="font-mono text-[#586B6D]">Week 3–4</span>
                            </div>
                            <div className="bg-white p-2.5 rounded-lg border border-[#171715]/10 flex items-center justify-between shadow-xs">
                                <span className="font-medium text-[#171715]">3. Implementation Scope</span>
                                <span className="font-mono text-[#586B6D]">Week 5+</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-between pt-2 border-t border-[#171715]/10 text-xs text-[#171715]/60">
                            <span>Deliverable</span>
                            <span className="text-[#586B6D] font-medium flex items-center gap-1">
                                <Layers className="size-3.5" /> Phased Execution
                            </span>
                        </div>
                    </div>
                </Card>
            </div>
        </section>
    );
};

export default Strategy;
