'use client';

import Card from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react/dist/iconify.js";
import { FunctionComponent } from "react";
import { Code2, Globe, ShoppingBag, Cpu, Check, Zap, Server } from "lucide-react";

interface DevelopmentProps {
    className?: string;
}

const Development: FunctionComponent<DevelopmentProps> = ({ className }) => {
    const techStack = [
        { name: 'Next.js', icon: 'logos:nextjs-icon' },
        { name: 'React', icon: 'logos:react' },
        { name: 'TypeScript', icon: 'logos:typescript-icon' },
        { name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon' },
        { name: 'Node.js', icon: 'logos:nodejs-icon' },
        { name: 'PostgreSQL', icon: 'logos:postgresql' },
        { name: 'Shopify', icon: 'logos:shopify' },
        { name: 'Vercel', icon: 'logos:vercel-icon' },
    ];

    return (
        <section className={cn("py-16 md:py-24 max-sm:px-5", className)} id="development">
            <div className="max-w-5xl mx-auto font-medium relative">
                <span className="border text-xs uppercase tracking-wider font-mono py-1 px-3.5 border-[#A88C40]/30 text-[#A88C40] rounded-full bg-[#A88C40]/10">
                    Development
                </span>
                <h2 className="text-2xl md:text-4xl md:leading-12 my-3 font-semibold text-[#171715]">
                    Development, <br />
                    <span className="text-neutral-500 font-normal">
                        Build Beyond The Visual.
                    </span>
                </h2>
                <p className="text-[#A88C40] text-sm md:text-base font-medium">
                    Built to perform. Ready to grow.
                </p>
                <p className="md:text-xl font-normal my-4 text-neutral-600 relative max-w-3xl leading-relaxed">
                    We turn thoughtful design into fast, reliable, and scalable digital products — built
                    around your business, your users, and what comes next.
                </p>
            </div>

            {/* 3 Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 font-medium max-w-6xl mx-auto mt-12">
                {/* 1. Website Development */}
                <Card
                    title="Website Development"
                    sub="Fast, responsive, and reliable websites built for real business needs."
                    className="min-h-96 w-full"
                >
                    <div className="h-72 duration-300 overflow-hidden rounded-xl bg-neutral-900 text-white p-5 flex flex-col justify-between">
                        <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
                            <span className="text-xs uppercase tracking-wider text-neutral-400 font-mono flex items-center gap-1.5">
                                <Globe className="size-3.5 text-[#A88C40]" /> Web Architecture
                            </span>
                            <span className="text-[11px] px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800">
                                99 Performance
                            </span>
                        </div>
                        <div className="my-auto space-y-2">
                            <div className="bg-neutral-800/80 p-3 rounded-lg border border-neutral-700/60 flex items-center justify-between">
                                <span className="text-xs text-neutral-300">Server Side Rendering</span>
                                <span className="text-[11px] text-emerald-400 font-mono">0.3s TTFB</span>
                            </div>
                            <div className="bg-neutral-800/80 p-3 rounded-lg border border-neutral-700/60 flex items-center justify-between">
                                <span className="text-xs text-neutral-300">SEO & Core Web Vitals</span>
                                <span className="text-[11px] text-[#A88C40] font-mono">100/100 Passed</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-between pt-2 border-t border-neutral-800 text-xs text-neutral-400">
                            <span>Modern Stack</span>
                            <span className="text-emerald-400 flex items-center gap-1">
                                <Zap className="size-3.5" /> High Performance
                            </span>
                        </div>
                    </div>
                </Card>

                {/* 2. eCommerce & CMS */}
                <Card
                    title="eCommerce & CMS"
                    sub="Flexible platforms that make content and commerce easier to manage."
                    className="min-h-96 w-full"
                >
                    <div className="h-72 duration-300 overflow-hidden rounded-xl bg-neutral-50 border border-neutral-200/60 p-5 flex flex-col justify-between">
                        <div className="flex items-center justify-between pb-3 border-b border-neutral-200">
                            <span className="text-xs uppercase tracking-wider text-neutral-500 font-mono flex items-center gap-1.5">
                                <ShoppingBag className="size-3.5 text-purple-500" /> Commerce & Content
                            </span>
                            <span className="text-[11px] px-2 py-0.5 rounded-full bg-purple-50 text-purple-600 border border-purple-200">
                                Flexible
                            </span>
                        </div>
                        <div className="my-auto space-y-2 text-xs">
                            <div className="bg-white p-3 rounded-lg border border-neutral-200 shadow-xs flex items-center justify-between">
                                <span className="text-neutral-700 font-medium">Headless Catalog</span>
                                <span className="text-purple-600 text-[11px] font-mono">Synced</span>
                            </div>
                            <div className="bg-white p-3 rounded-lg border border-neutral-200 shadow-xs flex items-center justify-between">
                                <span className="text-neutral-700 font-medium">Frictionless Checkout</span>
                                <span className="text-emerald-600 text-[11px] font-mono">+38% Conv</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-between pt-2 border-t border-neutral-200 text-xs text-neutral-500">
                            <span>Client Empowered</span>
                            <span className="text-neutral-900 font-medium flex items-center gap-1">
                                <Check className="size-3.5 text-emerald-600" /> Easy Management
                            </span>
                        </div>
                    </div>
                </Card>

                {/* 3. Custom Development & Integrations */}
                <Card
                    title="Custom Development & Integrations"
                    sub="Tailored functionality and integrations when off-the-shelf solutions are not enough."
                    className="min-h-96 w-full"
                >
                    <div className="h-72 duration-300 overflow-hidden rounded-xl bg-[#F0ECE2]/60 border border-[#171715]/10 p-5 flex flex-col justify-between">
                        <div className="flex items-center justify-between pb-3 border-b border-[#171715]/10">
                            <span className="text-xs uppercase tracking-wider text-[#171715]/60 font-mono flex items-center gap-1.5">
                                <Server className="size-3.5 text-[#A88C40]" /> API & Services
                            </span>
                            <span className="text-[11px] px-2 py-0.5 rounded-full bg-[#A88C40]/10 text-[#A88C40] border border-[#A88C40]/25 font-mono">
                                Robust
                            </span>
                        </div>
                        <div className="my-auto space-y-2 font-mono text-[11px]">
                            <div className="bg-white/80 p-2.5 rounded-lg border border-[#171715]/10 flex items-center justify-between">
                                <span className="text-[#171715]/75">POST /api/v1/checkout</span>
                                <span className="text-[#A88C40] font-semibold">200 OK</span>
                            </div>
                            <div className="bg-white/80 p-2.5 rounded-lg border border-[#171715]/10 flex items-center justify-between">
                                <span className="text-[#171715]/75">AUTH: Webhook & CRM</span>
                                <span className="text-[#171715] font-semibold">Connected</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-between pt-2 border-t border-[#171715]/10 text-xs text-[#171715]/60">
                            <span>Tailored Logic</span>
                            <span className="text-[#A88C40] font-medium flex items-center gap-1">
                                <Cpu className="size-3.5 text-[#A88C40]" /> Seamless Data
                            </span>
                        </div>
                    </div>
                </Card>
            </div>

            {/* Technologies We Work With */}
            <div className="max-w-6xl mx-auto mt-12 p-6 rounded-2xl bg-white border border-neutral-200/70">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div>
                        <p className="text-xs uppercase tracking-wider font-mono text-neutral-400">Foundation</p>
                        <h3 className="text-lg font-semibold text-neutral-900">Technologies We Work With</h3>
                    </div>
                    <p className="text-xs text-neutral-500 max-w-md">
                        Proven, modern tools selected for reliability, speed, and long-term maintainability.
                    </p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-3">
                    {techStack.map((tech, i) => (
                        <div key={i} className="flex flex-col items-center justify-center p-3 rounded-xl bg-neutral-50 hover:bg-neutral-100/80 duration-200 border border-neutral-200/50">
                            <Icon icon={tech.icon} className="size-7 mb-1.5" />
                            <span className="text-[11px] font-medium text-neutral-700 text-center">{tech.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Development;