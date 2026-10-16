'use client';

import Card from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react/dist/iconify.js";
import { FunctionComponent } from "react";
import { Globe, ShoppingBag, Cpu, Check, Zap, Server } from "lucide-react";
import { useLang } from "@/lib/language-context";

interface DevelopmentProps {
    className?: string;
}

const developmentData = {
    en: {
        badge: "Development",
        title: "Development,",
        subtitle: "Build Beyond The Visual.",
        tagline: "Built to perform. Ready to grow.",
        desc: "We turn thoughtful design into fast, reliable, and scalable digital products — built around your business, your users, and what comes next.",
        card1Title: "Website Development",
        card1Sub: "Fast, responsive, and reliable websites built for real business needs.",
        c1Foot: "High Performance",
        card2Title: "eCommerce & CMS",
        card2Sub: "Flexible platforms that make content and commerce easier to manage.",
        c2Foot: "Easy Management",
        card3Title: "Custom Development & Integrations",
        card3Sub: "Tailored functionality and integrations when off-the-shelf solutions are not enough.",
        c3Foot: "Seamless Data",
        techHeading: "Technologies We Work With",
        techSub: "Proven, modern tools selected for reliability, speed, and long-term maintainability."
    },
    id: {
        badge: "Pengembangan",
        title: "Pengembangan,",
        subtitle: "Membangun Lebih dari Sekadar Visual.",
        tagline: "Dirancang untuk berkinerja tinggi. Siap bertumbuh pesat.",
        desc: "Kami mewujudkan desain matang menjadi produk digital yang cepat, tangguh, dan terukur — dibangun khusus mengitari kebutuhan bisnis, kenyamanan pengguna, dan skalabilitas jangka panjang.",
        card1Title: "Pengembangan Website",
        card1Sub: "Website yang kilat, responsif di semua gawai, dan andal bagi kebutuhan bisnis riil.",
        c1Foot: "Performa Tinggi",
        card2Title: "eCommerce & CMS",
        card2Sub: "Platform fleksibel yang memudahkan pengelolaan katalog produk dan konten harian.",
        c2Foot: "Pengelolaan Mandiri Mudah",
        card3Title: "Pengembangan Kustom & Integrasi",
        card3Sub: "Fungsionalitas dan integrasi API khusus saat solusi instan tidak lagi mencukupi.",
        c3Foot: "Sinkronisasi Data Mulus",
        techHeading: "Teknologi yang Kami Gunakan",
        techSub: "Rangkaian teknologi modern teruji yang dipilih demi keandalan, kecepatan, dan pemeliharaan mudah."
    }
};

const Development: FunctionComponent<DevelopmentProps> = ({ className }) => {
    const { lang } = useLang();
    const t = developmentData[lang];

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
                    {t.badge}
                </span>
                <h2 className="text-2xl md:text-4xl md:leading-12 my-3 font-semibold text-[#171715]">
                    {t.title} <br />
                    <span className="text-neutral-500 font-normal">
                        {t.subtitle}
                    </span>
                </h2>
                <p className="text-[#A88C40] text-sm md:text-base font-medium">
                    {t.tagline}
                </p>
                <p className="md:text-xl font-normal my-4 text-neutral-600 relative max-w-3xl leading-relaxed">
                    {t.desc}
                </p>
            </div>

            {/* 3 Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 font-medium max-w-6xl mx-auto mt-12">
                {/* 1. Website Development */}
                <Card
                    title={t.card1Title}
                    sub={t.card1Sub}
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
                                <Zap className="size-3.5" /> {t.c1Foot}
                            </span>
                        </div>
                    </div>
                </Card>

                {/* 2. eCommerce & CMS */}
                <Card
                    title={t.card2Title}
                    sub={t.card2Sub}
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
                                <Check className="size-3.5 text-emerald-600" /> {t.c2Foot}
                            </span>
                        </div>
                    </div>
                </Card>

                {/* 3. Custom Development & Integrations */}
                <Card
                    title={t.card3Title}
                    sub={t.card3Sub}
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
                                <Cpu className="size-3.5 text-[#A88C40]" /> {t.c3Foot}
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
                        <h3 className="text-lg font-semibold text-neutral-900">{t.techHeading}</h3>
                    </div>
                    <p className="text-xs text-neutral-500 max-w-md">
                        {t.techSub}
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