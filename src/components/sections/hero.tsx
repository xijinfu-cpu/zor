'use client'

import { cn } from "@/lib/utils";
import { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MoveRight } from "lucide-react";
import { Button } from "../ui/button";

interface HeroProps {
    className?: string;
}

const Hero: FunctionComponent<HeroProps> = ({ className }) => {
    return (
        <section className={cn("w-full pt-36 md:pt-44 pb-12 relative", className)}>
            <div className="max-w-5xl mx-5 md:mx-auto pb-10 md:pb-16 font-medium relative z-10">
                <div className="mb-4">
                    <span className="border text-xs uppercase tracking-wider font-mono py-1 px-3.5 border-[#A88C40]/30 rounded-full bg-[#A88C40]/10 text-[#A88C40]">
                        Built Different. Meant to Last.
                    </span>
                </div>

                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="text-5xl flex flex-row gap-2 md:gap-0 md:flex-col leading-tight md:text-8xl md:leading-24 font-semibold tracking-tight text-[#171715]">
                        <p>Think.</p>
                        <p>Craft.</p>
                        <p>Grow.</p>
                    </div>

                    <div className="max-w-md md:pb-3 space-y-6">
                        <p className="text-base md:text-lg font-normal text-[#171715]/75 leading-relaxed">
                            From strategy and brand identity to websites, digital experiences, and product solutions,
                            we help businesses build trust, attract customers, and grow.
                        </p>
                        <div className="flex flex-wrap items-center gap-3">
                            <Button asChild className="rounded-full px-6 py-2.5 bg-[#171715] hover:bg-[#A88C40] hover:text-[#171715] text-[#F0ECE2] transition-colors shadow-xs">
                                <Link href="/contact" className="flex items-center gap-1.5">
                                    Start a Project <ArrowUpRight className="size-4" />
                                </Link>
                            </Button>
                            <Button asChild variant="outline" className="rounded-full px-6 py-2.5 border-[#171715]/20 text-[#171715] hover:bg-[#171715]/5">
                                <Link href="/services">
                                    View Our Services
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* 3 Showcase Visuals */}
            <div className="max-w-6xl mx-5 md:mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 bg-white/80 p-2.5 rounded-2xl border border-[#171715]/10 shadow-xs">
                {/* 1. Brand Identity */}
                <div className="group relative h-64 md:h-80 rounded-xl overflow-hidden bg-neutral-100 flex flex-col justify-end p-5">
                    <Image
                        src="/branding.png"
                        fill
                        alt="Brand Identity Craft"
                        className="object-cover group-hover:scale-105 duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#171715]/80 via-[#171715]/30 to-transparent" />
                    <div className="relative z-10 text-white">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-[#C76043] font-semibold">01 · Branding</span>
                        <h4 className="text-lg font-semibold text-white">Brand Identity & Direction</h4>
                    </div>
                </div>

                {/* 2. UI / Web Experience */}
                <div className="group relative h-64 md:h-80 rounded-xl overflow-hidden bg-neutral-100 flex flex-col justify-end p-5">
                    <Image
                        src="/designing.png"
                        fill
                        alt="Digital UI Design"
                        className="object-cover group-hover:scale-105 duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#171715]/80 via-[#171715]/30 to-transparent" />
                    <div className="relative z-10 text-white">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-[#7D568E] font-semibold">02 · Design</span>
                        <h4 className="text-lg font-semibold text-white">UI & Digital Experience</h4>
                    </div>
                </div>

                {/* 3. Engineered Solutions */}
                <div className="group relative h-64 md:h-80 rounded-xl overflow-hidden bg-neutral-100 flex flex-col justify-end p-5">
                    <Image
                        src="/code-editor.png"
                        fill
                        alt="Engineered Code"
                        className="object-cover group-hover:scale-105 duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#171715]/80 via-[#171715]/30 to-transparent" />
                    <div className="relative z-10 text-white">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-[#A88C40] font-semibold">03 · Development</span>
                        <h4 className="text-lg font-semibold text-white">Engineered Web Solutions</h4>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;