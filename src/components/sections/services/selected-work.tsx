'use client'

import { cn } from "@/lib/utils";
import { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, TrendingUp, Zap, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SelectedWorkProps {
    className?: string;
}

const SelectedWork: FunctionComponent<SelectedWorkProps> = ({ className }) => {
    return (
        <section className={cn("py-16 md:py-24 max-sm:px-5", className)}>
            <div className="max-w-5xl mx-auto font-medium relative mb-12">
                <span className="border text-xs uppercase tracking-wider font-mono py-1 px-3.5 border-[#A88C40]/30 rounded-full bg-[#A88C40]/10 text-[#A88C40]">
                    Selected Proof
                </span>
                <h1 className="text-2xl md:text-4xl md:leading-12 my-3 font-semibold text-[#171715]">
                    Real Work, <br />
                    <span className="text-[#171715]/50 font-normal">
                        Turning Challenges Into Measurable Results.
                    </span>
                </h1>
                <p className="md:text-xl font-normal text-[#171715]/75 relative max-w-3xl leading-relaxed">
                    We don’t just talk about craftsmanship — we prove it with every build.
                    Here is how strategic thinking and clean execution translate into real business impact.
                </p>
            </div>

            <div className="max-w-6xl mx-auto bg-white/80 rounded-2xl border border-[#171715]/10 p-6 md:p-10 shadow-xs font-medium">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    {/* Left: Project Details & Challenge/Solution/Outcome */}
                    <div className="lg:col-span-7 space-y-6">
                        <div className="flex items-center gap-3">
                            <span className="text-xs uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#A88C40]/10 text-[#A88C40] border border-[#A88C40]/25 font-mono">
                                Case Study
                            </span>
                            <span className="text-sm text-[#171715]/60 font-medium">
                                Unoversion — AI Search & Discovery
                            </span>
                        </div>

                        <h3 className="text-2xl md:text-3xl font-semibold text-[#171715] tracking-tight">
                            How we transformed a complex AI platform into an intuitive, high-converting digital experience.
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                            <div className="p-4 rounded-xl bg-[#F0ECE2]/50 border border-[#171715]/10">
                                <p className="text-xs uppercase tracking-wider font-mono text-[#A88C40] mb-1">The Challenge</p>
                                <p className="text-xs text-[#171715]/75 leading-relaxed font-normal">
                                    A powerful backend technology hindered by complex UX, slow loading times, and a scattered brand voice that confused potential clients.
                                </p>
                            </div>
                            <div className="p-4 rounded-xl bg-[#F0ECE2]/50 border border-[#171715]/10">
                                <p className="text-xs uppercase tracking-wider font-mono text-[#A88C40] mb-1">What We Did</p>
                                <p className="text-xs text-[#171715]/75 leading-relaxed font-normal">
                                    Clarified brand messaging, designed an intuitive user journey, and built a lightning-fast web experience with interactive product tours.
                                </p>
                            </div>
                        </div>

                        {/* Outcomes */}
                        <div className="grid grid-cols-3 gap-3 pt-2 border-t border-[#171715]/10">
                            <div>
                                <p className="text-xl md:text-2xl font-bold text-[#171715]">0.5s</p>
                                <p className="text-[11px] text-[#171715]/50 font-normal">Avg Load Time</p>
                            </div>
                            <div>
                                <p className="text-xl md:text-2xl font-bold text-[#A88C40]">+180%</p>
                                <p className="text-[11px] text-[#171715]/50 font-normal">User Engagement</p>
                            </div>
                            <div>
                                <p className="text-xl md:text-2xl font-bold text-[#171715]">100/100</p>
                                <p className="text-[11px] text-[#171715]/50 font-normal">Core Web Vitals</p>
                            </div>
                        </div>

                        <div className="pt-2">
                            <Button asChild variant="outline" className="group rounded-full border-[#171715]/20 hover:bg-[#171715] hover:text-[#F0ECE2]">
                                <Link href="/client-stories">
                                    See All Client Stories <ArrowUpRight className="size-4 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 duration-200" />
                                </Link>
                            </Button>
                        </div>
                    </div>

                    {/* Right: Visual Mockup */}
                    <div className="lg:col-span-5">
                        <div className="rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800 p-5 text-white flex flex-col justify-between min-h-[340px]">
                            <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
                                <div className="flex items-center gap-1.5">
                                    <div className="size-2 rounded-full bg-red-500/80" />
                                    <div className="size-2 rounded-full bg-yellow-500/80" />
                                    <div className="size-2 rounded-full bg-green-500/80" />
                                </div>
                                <span className="text-[11px] font-mono text-neutral-400">Live Production Preview</span>
                            </div>

                            <div className="my-auto py-6 space-y-4">
                                <div className="h-28 rounded-lg bg-neutral-800/80 border border-neutral-700/80 p-4 flex flex-col justify-between">
                                    <span className="text-xs font-mono text-[#A88C40]">Search Engine Latency</span>
                                    <div className="flex items-baseline justify-between">
                                        <span className="text-3xl font-bold">12ms</span>
                                        <span className="text-xs text-emerald-400 font-mono">↓ 84% Reduction</span>
                                    </div>
                                    <div className="w-full bg-neutral-700 h-1.5 rounded-full overflow-hidden">
                                        <div className="bg-emerald-400 h-full w-[94%]" />
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center justify-between text-xs text-neutral-400 pt-3 border-t border-neutral-800 font-mono">
                                <span>Status: Deployed & Active</span>
                                <span className="text-emerald-400 flex items-center gap-1">
                                    <CheckCircle2 className="size-3.5" /> High Impact
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SelectedWork;
