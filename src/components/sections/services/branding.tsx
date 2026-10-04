'use client'

import { cn, getAssetPath } from "@/lib/utils";
import { FunctionComponent, useEffect, useRef } from "react";
import Card from "@/components/ui/card";
import { Palette, Type, CheckCircle } from "lucide-react";

interface BrandingProps {
    className?: string;
}

const Branding: FunctionComponent<BrandingProps> = ({ className }) => {
    const brandStrategyRef = useRef<HTMLDivElement>(null);
    const brandStrategyVideoRef = useRef<HTMLVideoElement>(null);
    const visualIdRef = useRef<HTMLDivElement>(null);
    const visualIdVideoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const brandStrategyElement = brandStrategyRef.current;
        const brandStrategyVideoElement = brandStrategyVideoRef.current;
        const visualIdElement = visualIdRef.current;
        const visualIdVideoElement = visualIdVideoRef.current;

        if (brandStrategyElement && brandStrategyVideoElement && visualIdElement && visualIdVideoElement) {
            brandStrategyElement.onmouseenter = () => {
                brandStrategyVideoElement.play().catch(() => {});
            };
            brandStrategyElement.onmouseleave = () => {
                brandStrategyVideoElement.pause();
            };

            visualIdElement.onmouseenter = () => {
                visualIdVideoElement.play().catch(() => {});
            };
            visualIdElement.onmouseleave = () => {
                visualIdVideoElement.pause();
            };
            return () => {
                brandStrategyElement.onmouseenter = null;
                brandStrategyElement.onmouseleave = null;
                visualIdElement.onmouseenter = null;
                visualIdElement.onmouseleave = null;
            };
        }
    }, []);

    return (
        <section
            id="branding"
            className={cn("py-16 md:py-24 max-sm:px-5", className)}
        >
            <div className="max-w-5xl mx-auto font-medium relative">
                <span className="border text-xs uppercase tracking-wider font-mono py-1 px-3.5 border-[#C76043]/30 text-[#C76043] rounded-full bg-[#C76043]/10">
                    Branding
                </span>
                <h2 className="text-2xl md:text-4xl md:leading-12 my-3 font-semibold text-[#171715]">
                    Branding, <br />
                    <span className="text-neutral-500 font-normal">
                        Build A Brand People Remember.
                    </span>
                </h2>

                <p className="md:text-xl font-normal my-5 text-neutral-600 relative max-w-3xl leading-relaxed">
                    A strong brand is more than a logo. We shape how your brand
                    looks, feels, and communicates — creating a clear and
                    consistent identity people can recognize, trust, and remember.
                </p>

                <div className="w-16 h-16 max-md:hidden absolute top-0 overflow-hidden rounded-xl right-0 bg-white shadow-xs">
                    <video
                        preload="auto"
                        className="object-cover h-full w-full"
                        controls={false}
                        muted
                        loop
                        autoPlay
                    >
                        <source src={getAssetPath("/branding-vid-1.mp4")} type="video/mp4" />
                    </video>
                </div>

                <div className="w-16 h-16 max-md:hidden absolute top-16 overflow-hidden rounded-xl right-16 bg-white shadow-xs">
                    <video
                        preload="auto"
                        className="object-cover h-full w-full scale-150"
                        controls={false}
                        muted
                        loop
                        autoPlay
                    >
                        <source src={getAssetPath("/branding-vid-2.mp4")} type="video/mp4" />
                    </video>
                </div>

                <div className="w-16 h-16 max-md:hidden absolute top-32 overflow-hidden rounded-xl right-0 bg-white shadow-xs">
                    <video
                        preload="auto"
                        className="object-cover h-full w-full"
                        controls={false}
                        muted
                        loop
                        autoPlay
                    >
                        <source src={getAssetPath("/branding-vid-3.mp4")} type="video/mp4" />
                    </video>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 font-medium max-w-6xl mx-auto mt-12 gap-5">
                {/* 1. BRAND DIRECTION */}
                <div
                    ref={brandStrategyRef}
                    className="p-1 group bg-white flex flex-col rounded-xl w-full"
                >
                    <div className="h-72 duration-300 overflow-hidden rounded-xl bg-neutral-100/70 relative">
                        <video
                            preload="metadata"
                            ref={brandStrategyVideoRef}
                            className="object-cover w-full h-full scale-120"
                            controls={false}
                            muted
                            loop
                        >
                            <source src={getAssetPath("/audience.mp4")} type="video/mp4" />
                        </video>
                        <span className="absolute bottom-3 left-3 text-[11px] bg-black/60 text-white px-2 py-0.5 rounded backdrop-blur-xs font-mono">
                            Tone & Persona
                        </span>
                    </div>

                    <div className="p-5">
                        <h2 className="text-xl md:text-2xl">
                            Brand Direction
                            <br />
                            <span className="text-neutral-400 text-base font-normal">
                                Define how your brand should speak, feel, and be remembered.
                            </span>
                        </h2>
                    </div>
                </div>

                {/* 2. VISUAL IDENTITY */}
                <div
                    ref={visualIdRef}
                    className="p-1 group bg-white flex flex-col rounded-xl w-full"
                >
                    <div className="h-72 duration-300 overflow-hidden rounded-xl bg-neutral-100/70 relative">
                        <video
                            preload="metadata"
                            ref={visualIdVideoRef}
                            className="object-cover w-full h-full"
                            controls={false}
                            muted
                            loop
                            id="visual-identity-vid-1"
                        >
                            <source
                                src={getAssetPath("/visual-identity.mp4")}
                                type="video/mp4"
                            />
                        </video>
                        <span className="absolute bottom-3 left-3 text-[11px] bg-black/60 text-white px-2 py-0.5 rounded backdrop-blur-xs font-mono">
                            Visual Marks & Identity
                        </span>
                    </div>

                    <div className="p-5">
                        <h2 className="text-xl md:text-2xl">
                            Visual Identity
                            <br />
                            <span className="text-neutral-400 text-base font-normal">
                                Turn your brand into a consistent visual system built to be recognized.
                            </span>
                        </h2>
                    </div>
                </div>

                {/* 3. BRAND SYSTEM & GUIDELINES */}
                <Card
                    title="Brand System"
                    sub="Guidelines that keep your identity consistent across every touchpoint."
                    className="min-h-96 w-full"
                >
                    <div className="h-72 duration-300 overflow-hidden rounded-xl bg-neutral-50 border border-neutral-200/60 p-5 flex flex-col justify-between">
                        <div className="flex items-center justify-between pb-3 border-b border-[#171715]/10">
                            <span className="text-xs uppercase tracking-wider text-[#171715]/60 font-mono">Style Standards</span>
                            <span className="text-xs px-2 py-0.5 rounded-full bg-[#C76043]/10 text-[#C76043] border border-[#C76043]/25 font-mono">Production Ready</span>
                        </div>

                        {/* Visual Color swatches */}
                        <div className="space-y-3 my-auto">
                            <div>
                                <p className="text-[11px] text-[#171715]/60 uppercase tracking-wider mb-1.5 flex items-center gap-1 font-mono">
                                    <Palette className="size-3 text-[#C76043]" /> Color Palette & Tokens
                                </p>
                                <div className="grid grid-cols-4 gap-1.5">
                                    <div className="h-8 rounded bg-[#171715] border border-[#171715] flex items-end p-1 text-[9px] text-[#F0ECE2] font-mono">#1717</div>
                                    <div className="h-8 rounded bg-[#C76043] border border-[#C76043] flex items-end p-1 text-[9px] text-white font-mono">#C760</div>
                                    <div className="h-8 rounded bg-[#A88C40] border border-[#A88C40] flex items-end p-1 text-[9px] text-white font-mono">#A88C</div>
                                    <div className="h-8 rounded bg-[#F0ECE2] border border-[#171715]/20 flex items-end p-1 text-[9px] text-[#171715] font-mono">#F0EC</div>
                                </div>
                            </div>

                            {/* Typography Scale */}
                            <div className="bg-white/80 p-2.5 rounded-lg border border-[#171715]/10">
                                <p className="text-[11px] text-[#171715]/60 uppercase tracking-wider mb-1 flex items-center gap-1 font-mono">
                                    <Type className="size-3 text-[#C76043]" /> Typography Hierarchy
                                </p>
                                <p className="text-sm font-semibold text-[#171715] leading-tight">Display Inter Tight / 56px</p>
                                <p className="text-xs text-[#171715]/60 font-normal">Body Text Inter Regular / 16px</p>
                            </div>
                        </div>

                        <div className="flex items-center justify-between pt-2 border-t border-[#171715]/10 text-xs text-[#171715]/60">
                            <span>Touchpoints Unified</span>
                            <span className="text-[#C76043] font-medium flex items-center gap-1">
                                <CheckCircle className="size-3.5 text-[#C76043]" /> 100% Brand Rules
                            </span>
                        </div>
                    </div>
                </Card>
            </div>
        </section>
    );
};

export default Branding;