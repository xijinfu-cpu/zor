'use client'

import { cn } from "@/lib/utils";
import { FunctionComponent } from "react";
import { ShieldCheck, RefreshCw, Activity, ArrowUpRight, Clock, HeartPulse } from "lucide-react";
import Card from "@/components/ui/card";

interface SupportProps {
    className?: string;
}

const Support: FunctionComponent<SupportProps> = ({ className }) => {
    return (
        <section className={cn("py-16 md:py-24 max-sm:px-5", className)} id="support">
            <div className="max-w-5xl mx-auto font-medium relative">
                <span className="border text-xs uppercase tracking-wider font-mono py-1 px-3 border-[#2D8065]/30 rounded-full bg-[#2D8065]/10 text-[#2D8065]">
                    06 / Support
                </span>
                <h1 className="text-2xl md:text-4xl md:leading-12 my-3 font-semibold text-[#171715]">
                    Support, <br />
                    <span className="text-[#171715]/50 font-normal">
                        Built To Keep Growing.
                    </span>
                </h1>
                <p className="md:text-xl font-normal my-5 text-[#171715]/70 relative max-w-3xl leading-relaxed">
                    Digital products need attention after launch. We stay available to maintain,
                    improve, and evolve what we build as your business grows.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 font-medium max-w-6xl mx-auto mt-12">
                {/* 1. Maintenance & Monitoring */}
                <Card
                    title="Maintenance & Monitoring"
                    sub="Keep your website healthy, secure, and running smoothly."
                    className="min-h-96 w-full"
                >
                    <div className="h-72 duration-300 overflow-hidden rounded-xl bg-[#F0ECE2]/60 border border-[#171715]/10 p-5 flex flex-col justify-between">
                        <div className="flex items-center justify-between pb-3 border-b border-[#171715]/10">
                            <span className="text-xs uppercase tracking-wider text-[#171715]/60 font-mono flex items-center gap-1.5">
                                <HeartPulse className="size-3.5 text-[#2D8065]" /> System Uptime
                            </span>
                            <span className="text-[11px] px-2 py-0.5 rounded-full bg-[#2D8065]/10 text-[#2D8065] border border-[#2D8065]/25 font-mono">
                                99.9% Active
                            </span>
                        </div>
                        <div className="space-y-2 my-auto text-xs">
                            <div className="bg-white/80 p-2.5 rounded-lg border border-[#171715]/10 flex items-center justify-between">
                                <span className="text-[#171715] font-medium">Daily Cloud Backups</span>
                                <span className="text-[#2D8065] font-mono">Encrypted</span>
                            </div>
                            <div className="bg-white/80 p-2.5 rounded-lg border border-[#171715]/10 flex items-center justify-between">
                                <span className="text-[#171715] font-medium">Security & Patch Updates</span>
                                <span className="text-[#171715]/80 font-mono">Automated</span>
                            </div>
                            <div className="bg-white/80 p-2.5 rounded-lg border border-[#171715]/10 flex items-center justify-between">
                                <span className="text-[#171715] font-medium">SSL & Domain Health</span>
                                <span className="text-[#2D8065] font-mono">Active</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-between pt-2 border-t border-[#171715]/10 text-xs text-[#171715]/60">
                            <span>Peace of Mind</span>
                            <span className="text-[#2D8065] font-medium flex items-center gap-1">
                                <ShieldCheck className="size-3.5 text-[#2D8065]" /> Guarded Continuity
                            </span>
                        </div>
                    </div>
                </Card>

                {/* 2. Content & Feature Updates */}
                <Card
                    title="Content & Feature Updates"
                    sub="Keep your digital presence current as your business changes."
                    className="min-h-96 w-full"
                >
                    <div className="h-72 duration-300 overflow-hidden rounded-xl bg-[#F0ECE2]/60 border border-[#171715]/10 p-5 flex flex-col justify-between">
                        <div className="flex items-center justify-between pb-3 border-b border-[#171715]/10">
                            <span className="text-xs uppercase tracking-wider text-[#171715]/60 font-mono flex items-center gap-1.5">
                                <RefreshCw className="size-3.5 text-[#2D8065]" /> Agility & Updates
                            </span>
                            <span className="text-[11px] px-2 py-0.5 rounded-full bg-[#2D8065]/10 text-[#2D8065] border border-[#2D8065]/25 font-mono">
                                Fast Turnaround
                            </span>
                        </div>
                        <div className="space-y-2 my-auto text-xs">
                            <div className="bg-white/80 p-2.5 rounded-lg border border-[#171715]/10 flex items-center justify-between">
                                <span className="text-[#171715] font-medium">New Campaign Landing Pages</span>
                                <span className="text-[#171715] font-medium font-mono">Ready</span>
                            </div>
                            <div className="bg-white/80 p-2.5 rounded-lg border border-[#171715]/10 flex items-center justify-between">
                                <span className="text-[#171715] font-medium">Asset & Copy Adjustments</span>
                                <span className="text-[#171715] font-medium font-mono">&lt; 24h</span>
                            </div>
                            <div className="bg-white/80 p-2.5 rounded-lg border border-[#171715]/10 flex items-center justify-between">
                                <span className="text-[#171715] font-medium">Seasonal Promos & Banners</span>
                                <span className="text-[#2D8065] font-medium font-mono">Scheduled</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-between pt-2 border-t border-[#171715]/10 text-xs text-[#171715]/60">
                            <span>Never Outdated</span>
                            <span className="text-[#2D8065] font-medium flex items-center gap-1">
                                <Clock className="size-3.5 text-[#2D8065]" /> Direct SLA
                            </span>
                        </div>
                    </div>
                </Card>

                {/* 3. Continuous Improvement */}
                <Card
                    title="Continuous Improvement"
                    sub="Improve performance, UX, and functionality over time."
                    className="min-h-96 w-full"
                >
                    <div className="h-72 duration-300 overflow-hidden rounded-xl bg-[#F0ECE2]/60 border border-[#171715]/10 p-5 flex flex-col justify-between">
                        <div className="flex items-center justify-between pb-3 border-b border-[#171715]/10">
                            <span className="text-xs uppercase tracking-wider text-[#171715]/60 font-mono flex items-center gap-1.5">
                                <Activity className="size-3.5 text-[#2D8065]" /> Growth Iterations
                            </span>
                            <span className="text-[11px] px-2 py-0.5 rounded-full bg-[#2D8065]/10 text-[#2D8065] border border-[#2D8065]/25 font-mono">
                                Retainer
                            </span>
                        </div>
                        <div className="space-y-2 my-auto text-xs">
                            <div className="bg-white/80 p-2.5 rounded-lg border border-[#171715]/10 flex items-center justify-between">
                                <span className="text-[#171715] font-medium">Monthly Speed & SEO Review</span>
                                <span className="text-[#2D8065] font-medium">Reported</span>
                            </div>
                            <div className="bg-white/80 p-2.5 rounded-lg border border-[#171715]/10 flex items-center justify-between">
                                <span className="text-[#171715] font-medium">Heatmap & Drop-off Fixes</span>
                                <span className="text-[#2D8065] font-medium">+15% Gain</span>
                            </div>
                            <div className="bg-white/80 p-2.5 rounded-lg border border-[#171715]/10 flex items-center justify-between">
                                <span className="text-[#171715] font-medium">Feature Expansion Roadmap</span>
                                <span className="text-[#171715] font-medium">Iterated</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-between pt-2 border-t border-[#171715]/10 text-xs text-[#171715]/60">
                            <span>Evolution Over Time</span>
                            <span className="text-[#2D8065] font-medium flex items-center gap-1">
                                Partner in Growth
                            </span>
                        </div>
                    </div>
                </Card>
            </div>
        </section>
    );
};

export default Support;
