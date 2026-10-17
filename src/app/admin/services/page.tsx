"use client";

import { useState } from "react";
import { Check } from "lucide-react";

interface ServiceItem {
    id: string;
    title: string;
    subtitle: string;
    category: string;
    icon: string;
    status: "active" | "draft";
    deliverables: string[];
    timeline: string;
}

const INITIAL_SERVICES: ServiceItem[] = [
    {
        id: "web-arch",
        title: "Web Architecture & Engineering",
        subtitle: "High-performance full-stack web applications and scalable API systems.",
        category: "Development",
        icon: "Globe",
        status: "active",
        deliverables: ["Next.js Full-Stack Web App", "Database & Serverless API Design", "Core Web Vitals Optimization", "Clean Code Architecture"],
        timeline: "4–8 Weeks",
    },
    {
        id: "ui-ux",
        title: "Product Design & Design Systems",
        subtitle: "Conversion-optimized user interfaces and comprehensive Figma component libraries.",
        category: "Design",
        icon: "Palette",
        status: "active",
        deliverables: ["Interactive Figma Prototypes", "Custom Design Tokens & System", "UX User Journey Mapping", "Responsive Mobile & Desktop"],
        timeline: "2–4 Weeks",
    },
    {
        id: "branding",
        title: "Brand Strategy & Visual Identity",
        subtitle: "Distinctive positioning and premium visual guidelines for ambitious brands.",
        category: "Branding",
        icon: "Layers",
        status: "active",
        deliverables: ["Logo Lockups & Identity Rules", "Typography & Color Palettes", "Brand Messaging Guidelines", "Social & Marketing Assets"],
        timeline: "3–5 Weeks",
    },
    {
        id: "optimization",
        title: "Performance & Technical Audit",
        subtitle: "Deep-dive audit into website bottlenecks, SEO indexing, and page speeds.",
        category: "Optimization",
        icon: "Zap",
        status: "active",
        deliverables: ["Comprehensive Speed Report", "SEO & Meta Tag Overhaul", "Script & Asset Minification", "Lighthouse 95+ Guarantee"],
        timeline: "1–2 Weeks",
    },
    {
        id: "dedicated-support",
        title: "Dedicated Sprint & Maintenance",
        subtitle: "Ongoing engineering sprints and 24/7 technical assurance for scaling products.",
        category: "Support",
        icon: "Shield",
        status: "active",
        deliverables: ["Weekly Feature Sprints", "Security Patches & Dependency Updates", "Direct Slack/Discord Channel", "Priority Bug Fixes"],
        timeline: "Monthly Retainer",
    },
];

export default function AdminServicesPage() {
    const [services, setServices] = useState<ServiceItem[]>(INITIAL_SERVICES);

    const toggleStatus = (id: string) => {
        setServices(
            services.map((s) =>
                s.id === id ? { ...s, status: s.status === "active" ? "draft" : "active" } : s
            )
        );
    };

    return (
        <div className="p-6 md:p-10 space-y-8 max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-[#171715]">
                        Katalog Layanan & Penawaran
                    </h1>
                    <p className="text-sm text-[#5C5850] mt-1">
                        Atur penawaran jasa studio, deliverables, dan model kerja yang tampil di halaman layanan.
                    </p>
                </div>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {services.map((service) => (
                    <div
                        key={service.id}
                        className="bg-white rounded-2xl border border-[#171715]/10 p-6 shadow-xs flex flex-col justify-between hover:border-[#A88C40]/40 transition-all"
                    >
                        <div className="space-y-4">
                            <div className="flex items-start justify-between">
                                <div>
                                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#A88C40] font-semibold">
                                        {service.category}
                                    </span>
                                    <h3 className="text-base font-bold text-[#171715] mt-0.5">
                                        {service.title}
                                    </h3>
                                </div>

                                <button
                                    onClick={() => toggleStatus(service.id)}
                                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono cursor-pointer border transition-colors ${
                                        service.status === "active"
                                            ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                                            : "bg-slate-100 text-slate-500 border-slate-200"
                                    }`}
                                >
                                    <span className={`size-1.5 rounded-full ${service.status === "active" ? "bg-emerald-500" : "bg-slate-400"}`} />
                                    <span>{service.status === "active" ? "Aktif" : "Draft"}</span>
                                </button>
                            </div>

                            <p className="text-xs text-[#5C5850]">
                                {service.subtitle}
                            </p>

                            <div className="space-y-2 pt-2 border-t border-[#171715]/5">
                                <span className="text-[10px] font-mono uppercase text-[#5C5850] block">
                                    Deliverables:
                                </span>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                                    {service.deliverables.map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-1.5 text-xs text-[#171715]">
                                            <Check className="size-3 text-[#A88C40] shrink-0" />
                                            <span className="truncate">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 pt-3 border-t border-[#171715]/5 flex items-center justify-between text-xs font-mono">
                            <span className="text-[#5C5850]">
                                Estimasi: <strong className="text-[#171715]">{service.timeline}</strong>
                            </span>
                            <span className="text-[11px] text-[#A88C40]">
                                Terhubung ke /services
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Engagement Models Overview */}
            <div className="bg-[#171715] text-[#F0ECE2] rounded-3xl p-6 md:p-8 space-y-6">
                <div>
                    <span className="text-xs font-mono text-[#A88C40] uppercase tracking-wider">
                        Engagement Models
                    </span>
                    <h2 className="text-xl font-bold mt-1">3 Format Kerja Sama dengan Klien</h2>
                    <p className="text-xs text-white/50 max-w-xl mt-1">
                        Model penawaran yang dapat dipilih klien pada halaman `/services/engagement-model`.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                        <span className="text-xs font-mono text-[#A88C40]">01. Fixed Scope Project</span>
                        <h4 className="text-sm font-semibold text-white">Proyek Target Jelas</h4>
                        <p className="text-xs text-white/50">Ideal untuk MVP baru atau redesign website dengan roadmap yang sudah terdefinisi.</p>
                    </div>

                    <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                        <span className="text-xs font-mono text-[#A88C40]">02. Monthly Sprint</span>
                        <h4 className="text-sm font-semibold text-white">Retainer Bulanan</h4>
                        <p className="text-xs text-white/50">Pengembangan berkelanjutan dengan jatah sprint design & coding per bulan tanpa overhead.</p>
                    </div>

                    <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                        <span className="text-xs font-mono text-[#A88C40]">03. Dedicated Pod</span>
                        <h4 className="text-sm font-semibold text-white">Full Squad Tim Khusus</h4>
                        <p className="text-xs text-white/50">Engineer dan desainer senior yang fokus penuh pada produk Anda untuk skala enterprise.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
